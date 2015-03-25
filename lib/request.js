'use strict';

let SOAPRequest = require('./SOAPRequest');
let Jsonix = require('jsonix').Jsonix;
let OGD_Request = require('../mappings/OGD_Request').OGD_Request;
let OGD_ResponseList = require('../mappings/OGD_ResponseList').OGD_ResponseList;
let OGD_ResponseList_Type = require('../mappings/OGD_ResponseList_Type').OGD_ResponseList_Type;

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

        cbFail(err, soapBody, raw);
      }
    }
  });

};

function mapQuery (query) {
  let jsonQuery = {
    name: {
      namespaceURI: 'http://ris.bka.gv.at/Search/1.3/OGD',
      localPart: 'OGDSearchRequest'
      //prefix: '',
      //key: '{http://ris.bka.gv.at/Search/1.3/OGD}OGDSearchRequest',
      //string: '{http://ris.bka.gv.at/Search/1.3/OGD}OGDSearchRequest'
    },
    value: {
      //TYPE_NAME: 'OGDSearchRequest.TOGDSearchRequest',
      //suchworte: { // PhraseSearchExpression
      //  //TYPE_NAME: 'OGDSearchRequest.PhraseSearchExpression',
      //  value: ''
      //},
      //titel: { // PhraseSearchExpression
      //  //TYPE_NAME: 'OGDSearchRequest.PhraseSearchExpression',
      //  value: ''
      //},
      //index: { // PhraseSearchExpression
      //  //TYPE_NAME: 'OGDSearchRequest.PhraseSearchExpression',
      //  value: ''
      //},
      abschnitt: {
        //TYPE_NAME: 'OGDSearchRequest.NormabschnittSucheinschraenkung',
        nummerVon: 0, // Integer
        nummerBis: 9, // Integer
        buchstabeVon: 'a', // String
        buchstabeBis: 'z', // String
        typ: 'Alle' // "Alle", "Artikel", "Paragraph", "Anlage"
      },
      fassungVom: { // Date
        year: 2012, // Integer
        month: 4, // Integer
        day: 12 // Integer
      },
      //kundmachungsorgan: { // PhraseSearchExpression
      //  //TYPE_NAME: 'OGDSearchRequest.PhraseSearchExpression',
      //  value: ''
      //},
      //kundmachungsorgannummer: { // PhraseSearchExpression
      //  //TYPE_NAME: 'OGDSearchRequest.PhraseSearchExpression',
      //  value: ''
      //},
      imRisSeit: 'Undefined', // "Undefined", "EinerWoche", "ZweiWochen", "EinemMonat", "DreiMonaten", "SechsMonaten", "EinemJahr"
      dokumenteProSeite: 'Ten', // "Ten", "Twenty", "Fifty", "OneHundred"
      seitennummer: 1, // Integer
      sortierung: {
        //TYPE_NAME: 'OGDSearchRequest.BundesnormenSortExpression',
        sortDirection: 'Ascending', // "Ascending", "Descending"
        sortedByColumn: 'ArtikelParagraphAnlage' // "ArtikelParagraphAnlage", "Kurzinformation"
      }
    }
  };

  if (query) {
    return query;
  } else {
    return jsonQuery;
  }
}


function parseFoundDocuments (searchDocumentsResult) {
  let paging = {
    page: searchDocumentsResult.hits.pageNumber,
    size: searchDocumentsResult.hits.pageSize,
    count: searchDocumentsResult.hits.value
  };

  let ogdDocumentReference = searchDocumentsResult.documentReferences.ogdDocumentReference;
  ogdDocumentReference.forEach(function (foundDocument) {
    delete foundDocument.TYPE_NAME;
  });

  return {
    paging: paging,
    results: ogdDocumentReference
  };
}


function escapeHtmlEntities (string) {
  return string.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
