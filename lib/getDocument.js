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

        cbFail(err, soapBody, raw);
      }
    }
  });

};

function parseDocument (ogdDocumentMetadata) {
  let nutzdaten = ogdDocumentMetadata.dokumentinhalt.contentReference[0].risdok.nutzdaten;

  delete ogdDocumentMetadata.TYPE_NAME;

  return ogdDocumentMetadata;
}
