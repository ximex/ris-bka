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
  let inkrafttretedatum = ogdDocumentMetadata.inkrafttretedatum.value;
  let ausserkrafttretedatum = ogdDocumentMetadata.ausserkrafttretedatum.value;
  let unterzeichnungsdatum = ogdDocumentMetadata.unterzeichnungsdatum.value;
  let veroeffentlichungsdatum = ogdDocumentMetadata.veroeffentlichungsdatum.value;
  let aenderungsdatum = ogdDocumentMetadata.aenderungsdatum.value;
  let contentReference = ogdDocumentMetadata.dokumentinhalt.contentReference;

  contentReference.forEach(function (content) {
    delete content.TYPE_NAME;
    delete content.risdok.TYPE_NAME;
    delete content.risdok.metadaten.TYPE_NAME;
    delete content.risdok.nutzdaten.TYPE_NAME;
    delete content.risdok.layoutdaten.TYPE_NAME;
  });

  return {
    applikation: ogdDocumentMetadata.applikation,
    dokumentnummer: ogdDocumentMetadata.dokumentnummer,
    kurztitel: ogdDocumentMetadata.kurztitel,
    kundmachungsorgan: ogdDocumentMetadata.kundmachungsorgan,
    typ: ogdDocumentMetadata.typ,
    artikelParagraphAnlage: ogdDocumentMetadata.artikelParagraphAnlage,
    inkrafttretedatum: (inkrafttretedatum) ? new Date(inkrafttretedatum.year, inkrafttretedatum.month, inkrafttretedatum.day) : undefined,
    ausserkrafttretedatum: (ausserkrafttretedatum) ? new Date(ausserkrafttretedatum.year, ausserkrafttretedatum.month, ausserkrafttretedatum.day) : undefined,
    abkuerzung: ogdDocumentMetadata.abkuerzung,
    unterzeichnungsdatum: (unterzeichnungsdatum) ? new Date(unterzeichnungsdatum.year, unterzeichnungsdatum.month, unterzeichnungsdatum.day) : undefined,
    indizes: ogdDocumentMetadata.indizes.item,
    uebergangsrecht: ogdDocumentMetadata.uebergangsrecht,
    beachteZurGanzenRechtsvorschrift: ogdDocumentMetadata.beachteZurGanzenRechtsvorschrift,
    beachte: ogdDocumentMetadata.beachte,
    aenderung: ogdDocumentMetadata.aenderung,
    langtitel: ogdDocumentMetadata.langtitel,
    sprachen: ogdDocumentMetadata.sprachen,
    staaten: ogdDocumentMetadata.staaten,
    anmerkungZurGanzenRechtsvorschrift: ogdDocumentMetadata.anmerkungZurGanzenRechtsvorschrift,
    anmerkung: ogdDocumentMetadata.anmerkung,
    schlagworte: ogdDocumentMetadata.schlagworte,
    veroeffentlichungsdatum: (unterzeichnungsdatum) ? new Date(veroeffentlichungsdatum.year, veroeffentlichungsdatum.month, veroeffentlichungsdatum.day) : undefined,
    aenderungsdatum: (unterzeichnungsdatum) ? new Date(aenderungsdatum.year, aenderungsdatum.month, aenderungsdatum.day) : undefined,
    gesetzesnummer: ogdDocumentMetadata.gesetzesnummer,
    alteDokumentnummer: ogdDocumentMetadata.alteDokumentnummer,
    dokumentinhalt: contentReference
  };
}
