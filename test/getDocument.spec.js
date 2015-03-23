'use strict';

let should = require('should');

let RisBka = require('../lib/index.js');

describe('RisBka', function () {
  describe('.getDocument(docId, cbOk, cbFail)', function () {

    let docId = 'NOR40091435';

    it('should return soapBody with keys: aenderungsdatum, results', function (done) {
      RisBka.getDocument(docId, function (soapBody, raw) {
        soapBody.should.have.keys([
          'aenderungsdatum', 'applikation', 'dokumentnummer', 'kurztitel', 'kundmachungsorgan', 'typ',
          'artikelParagraphAnlage', 'inkrafttretedatum', 'ausserkrafttretedatum', 'unterzeichnungsdatum',
          'indizes', 'schlagworte', 'veroeffentlichungsdatum', 'gesetzesnummer', 'dokumentinhalt'
        ]);
        done();
      });
    });

    it('should return raw with keys: error, response, body', function (done) {
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
