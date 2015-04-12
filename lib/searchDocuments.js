'use strict';

let SOAPRequest = require('./SOAPRequest');
let Jsonix = require('jsonix').Jsonix;
let OGD_Request = require('../mappings/OGD_Request').OGD_Request;
let OGD_ResponseList = require('../mappings/OGD_ResponseList').OGD_ResponseList;
let OGD_ResponseList_Type = require('../mappings/OGD_ResponseList_Type').OGD_ResponseList_Type;
let parseUtils = require('./parseUtils');

module.exports = function (query, cbOk, cbFail) {

  SOAPRequest(function (PARAMS) {
    let jsonQuery = mapQuery(query);

    let context = new Jsonix.Context([OGD_Request], {
      namespacePrefixes: {
        'http://ris.bka.gv.at/Search/1.3/OGD': '',
        'http://www.w3.org/2001/XMLSchema-instance': 'xsi'
      }
    });
    let marshaller = context.createMarshaller();

    let OGDSearchRequest = marshaller.marshalString(jsonQuery);

    let action = '<request xmlns="http://ogd.bka.gv.at/"><application>' + PARAMS.APPLICATION + '</application>' +
      '<query>' + escapeHtmlEntities(OGDSearchRequest) + '</query></request>';
    let body = PARAMS.SOAP_BODY.replace('{{ACTION}}', action);

    return body;
  }, function (err, soapBody, raw) {
    if (err) {
      cbFail(err, soapBody, raw);
    } else {
      let context = new Jsonix.Context([OGD_ResponseList, OGD_ResponseList_Type]);
      let unmarshaller = context.createUnmarshaller();

      let parsedBody = unmarshaller.unmarshalString(soapBody);
      let status = parsedBody.value.status;

      if (status === 'ok') {
        let parsedFoundDocuments = parseFoundDocuments(parsedBody.value.searchDocumentsResult);

        cbOk(parsedFoundDocuments, raw);
      } else {
        err = {
          errorType: 'invalidDocId',
          error: parsedBody.value.error
        };
        delete err.error.TYPE_NAME;

        if (cbFail) {
          cbFail(err, soapBody, raw);
        }
      }
    }
  });

};

function mapQuery (query) {
  if (typeof(query) !== 'object') {
    console.warn('ERROR: searchQuery param missing!');
    return false;
  }
  // INFO: Not necessary. If missing they get a default value.
  //if (!query.paging.page || !query.sort.direction || !query.sort.column) {
  //  console.warn('ERROR: Required searchQuery properties missing!');
  //  return false;
  //}

  let jsonQuery = {
    name: {
      namespaceURI: 'http://ris.bka.gv.at/Search/1.3/OGD',
      localPart: 'OGDSearchRequest'
      //prefix: '',
      //key: '{http://ris.bka.gv.at/Search/1.3/OGD}OGDSearchRequest',
      //string: '{http://ris.bka.gv.at/Search/1.3/OGD}OGDSearchRequest'
    },
    value: {
      //TYPE_NAME: 'OGD_Request.TOGDSearchRequest',
      seitennummer: parseUtils.inRange(query.paging.page, 1, Infinity, 1),
      sortierung: {
        //TYPE_NAME: 'OGD_Request.BundesnormenSortExpression',
        sortDirection: parseUtils.pickListItem(query.sort.direction, ['Ascending', 'Descending'], 'Ascending'),
        sortedByColumn: parseUtils.pickListItem(query.sort.column, ['ArtikelParagraphAnlage', 'Kurzinformation'], 'ArtikelParagraphAnlage')
      }
    }
  };

  if (query.searchTerms) {
    jsonQuery.value.suchworte = {
      TYPE_NAME: 'OGD_Request.PhraseSearchExpression',
      value: query.searchTerms
    };
  }
  if (query.title) {
    jsonQuery.value.titel = {
      TYPE_NAME: 'OGD_Request.PhraseSearchExpression',
      value: query.title
    };
  }
  if (query.index) {
    jsonQuery.value.index = {
      TYPE_NAME: 'OGD_Request.PhraseSearchExpression',
      value: query.index
    };
  }
  if (query.section) {
    jsonQuery.value.abschnitt = {
      //TYPE_NAME: 'OGD_Request.NormabschnittSucheinschraenkung',
      typ: parseUtils.pickListItem(query.section.typ, ['Alle', 'Artikel', 'Paragraph', 'Anlage'], 'Alle')
    };
  }
  if (query.section.number.start) {
    jsonQuery.value.abschnitt.nummerVon = query.section.number.start;
  }
  if (query.section.number.end) {
    jsonQuery.value.abschnitt.nummerBis = query.section.number.end;
  }
  if (query.section.character.start) {
    jsonQuery.value.abschnitt.buchstabeVon = query.section.character.start;
  }
  if (query.section.character.end) {
    jsonQuery.value.abschnitt.buchstabeBis = query.section.character.end;
  }
  if (query.versionDate) {
    jsonQuery.value.fassungVom = {
      year: parseUtils.parseDate(query.versionDate, 'year'),
      month: parseUtils.parseDate(query.versionDate, 'month'),
      day: parseUtils.parseDate(query.versionDate, 'day')
    };
  }
  if (query.announcementInstitution) {
    jsonQuery.value.kundmachungsorgan = {
      //TYPE_NAME: 'OGD_Request.PhraseSearchExpression',
      value: query.announcementInstitution
    }
  }
  if (query.announcementInstitutionNumber) {
    jsonQuery.value.kundmachungsorgannummer = {
      //TYPE_NAME: 'OGD_Request.PhraseSearchExpression',
      value: query.announcementInstitutionNumber
    }
  }
  if (query.includedDate) {
    jsonQuery.value.imRisSeit = parseUtils.pickListItem(query.includedDate, ['Undefined', 'EinerWoche', 'ZweiWochen', 'EinemMonat', 'DreiMonaten', 'SechsMonaten', 'EinemJahr'], 'Undefined');
  }
  if (query.paging.docsPerPage) {
    jsonQuery.value.dokumenteProSeite = parseUtils.pickListItem(query.paging.docsPerPage, ['Ten', 'Twenty', 'Fifty', 'OneHundred'], 'Ten');
  }

  return jsonQuery;
}


function parseFoundDocuments (searchDocumentsResult) {
  let paging = {
    page: searchDocumentsResult.hits.pageNumber,
    size: searchDocumentsResult.hits.pageSize,
    count: searchDocumentsResult.hits.value
  };

  let results = [];
  let ogdDocumentReference = searchDocumentsResult.documentReferences.ogdDocumentReference;
  ogdDocumentReference.forEach(function (foundDocument) {
    results.push({
      application: foundDocument.applikation,
      documentNumber: foundDocument.dokumentnummer,
      articleParagraphAttachment: foundDocument.artikelParagraphAnlage,
      shortInformation: foundDocument.kurzinformation,
      documentUrl: foundDocument.dokumentUrl
    });
  });

  return {
    paging: paging,
    results: results
  };
}


function escapeHtmlEntities (string) {
  return string.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
