'use strict';

let SOAPRequest = require('./SOAPRequest');
let Jsonix = require('jsonix').Jsonix;
let OGD_DocumentResponse = require('../mappings/OGD_DocumentResponse').OGD_DocumentResponse;
let RISDok = require('../mappings/RISDok').RISDok;
let RISJudikaturNutzdaten = require('../mappings/RISJudikaturNutzdaten').RISJudikaturNutzdaten;

module.exports = function (docId, cbOk, cbFail) {

  SOAPRequest(function (PARAMS) {
    let action = '<getDocument xmlns="http://ogd.bka.gv.at/"><application>' + PARAMS.APPLICATION + '</application>' +
      '<docId>' + docId + '</docId></getDocument>';
    let body = PARAMS.SOAP_BODY.replace('{{ACTION}}', action);

    return body;
  }, function (err, soapBody, raw) {
    if (err) {
      cbFail(err, soapBody, raw);
    } else {
      let context = new Jsonix.Context([OGD_DocumentResponse, RISDok, RISJudikaturNutzdaten]);
      let unmarshaller = context.createUnmarshaller();

      let parsedBody = unmarshaller.unmarshalString(soapBody);
      let status = parsedBody.value.status;

      if (status === 'ok') {
        let parsedDocument = parseDocument(parsedBody.value.ogdDocumentMetadata);

        cbOk(parsedDocument, raw);
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

function parseDocument (ogdDocumentMetadata) {
  let comeIntoForceDate = ogdDocumentMetadata.inkrafttretedatum.value;
  let exceptIntoForceDate = ogdDocumentMetadata.ausserkrafttretedatum.value;
  let signingDate = ogdDocumentMetadata.unterzeichnungsdatum.value;
  let releaseDate = ogdDocumentMetadata.veroeffentlichungsdatum.value;
  let changeDate = ogdDocumentMetadata.aenderungsdatum.value;
  let contentReference = ogdDocumentMetadata.dokumentinhalt.contentReference;

  let documentContent = [];
  contentReference.forEach(function (content) {
    let dc = {
      contentType: content.contentType,
      name: content.name,
      dataType: content.dataType,
      risDoc: {
        metaData: content.risdok.metadaten,
        userData: content.risdok.nutzdaten,
        layoutData: content.risdok.layoutdaten
      }
    };

    delete dc.risDoc.metaData.TYPE_NAME;
    delete dc.risDoc.userData.TYPE_NAME;
    delete dc.risDoc.layoutData.TYPE_NAME;

    documentContent.push(dc);
  });

  return {
    application: ogdDocumentMetadata.applikation,
    documentNumber: ogdDocumentMetadata.dokumentnummer,
    shortTitle: ogdDocumentMetadata.kurztitel,
    announcementInstitution: ogdDocumentMetadata.kundmachungsorgan,
    typ: ogdDocumentMetadata.typ,
    articleParagraphAttachment: ogdDocumentMetadata.artikelParagraphAnlage,
    comeIntoForceDate: (comeIntoForceDate) ? new Date(comeIntoForceDate.year, comeIntoForceDate.month, comeIntoForceDate.day) : undefined,
    exceptIntoForceDate: (exceptIntoForceDate) ? new Date(exceptIntoForceDate.year, exceptIntoForceDate.month, exceptIntoForceDate.day) : undefined,
    abbreviation: ogdDocumentMetadata.abkuerzung,
    signingDate: (signingDate) ? new Date(signingDate.year, signingDate.month, signingDate.day) : undefined,
    indices: ogdDocumentMetadata.indizes.item,
    transitionLaw: ogdDocumentMetadata.uebergangsrecht,
    considerForWholeLaw: ogdDocumentMetadata.beachteZurGanzenRechtsvorschrift,
    consider: ogdDocumentMetadata.beachte,
    change: ogdDocumentMetadata.aenderung,
    longTitle: ogdDocumentMetadata.langtitel,
    languages: ogdDocumentMetadata.sprachen,
    states: ogdDocumentMetadata.staaten,
    noteForWholeLaw: ogdDocumentMetadata.anmerkungZurGanzenRechtsvorschrift,
    note: ogdDocumentMetadata.anmerkung,
    keywords: ogdDocumentMetadata.schlagworte,
    releaseDate: (releaseDate) ? new Date(releaseDate.year, releaseDate.month, releaseDate.day) : undefined,
    changeDate: (changeDate) ? new Date(changeDate.year, changeDate.month, changeDate.day) : undefined,
    lawNumber: ogdDocumentMetadata.gesetzesnummer,
    oldDocumentNumber: ogdDocumentMetadata.alteDokumentnummer,
    documentContent: documentContent
  };
}
