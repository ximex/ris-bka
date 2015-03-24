'use strict';

let should = require('should');

let RisBka = require('../lib/index.js');

describe('RisBka', function () {
  describe('.getDocument(docId, cbOk, cbFail)', function () {

    let docId = 'NOR40091435';

    it('should return soapBody with many keys', function (done) {
      this.timeout(5000);
      RisBka.getDocument(docId, function (soapBody, raw) {
        soapBody.should.have.keys([
          'applikation', 'dokumentnummer', 'kurztitel', 'kundmachungsorgan', 'typ', 'artikelParagraphAnlage',
          'inkrafttretedatum', 'ausserkrafttretedatum', 'abkuerzung', 'unterzeichnungsdatum', 'indizes',
          'uebergangsrecht', 'beachteZurGanzenRechtsvorschrift', 'beachte', 'aenderung', 'langtitel', 'sprachen',
          'staaten', 'anmerkungZurGanzenRechtsvorschrift', 'anmerkung', 'schlagworte', 'veroeffentlichungsdatum',
          'aenderungsdatum', 'gesetzesnummer', 'alteDokumentnummer', 'dokumentinhalt'
        ]);
        soapBody.dokumentinhalt.forEach(function (contentReference) {
          contentReference.should.have.keys(['contentType', 'name', 'dataType', 'risdok']);
          contentReference.risdok.should.have.keys(['metadaten', 'nutzdaten', 'layoutdaten']);
        });
        done();
      });
    });

    it('should return raw with keys: error, response, body', function (done) {
      this.timeout(5000);
      RisBka.getDocument(docId, function (soapBody, raw) {
        raw.should.have.keys(['error', 'response', 'body']);
        done();
      });
    });

    it('should return no error in raw', function (done) {
      RisBka.getVersion(function (soapBody, raw) {
        should.not.exist(raw.error);
        done();
      });
    });

  })
});
