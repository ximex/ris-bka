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
          'application', 'documentNumber', 'shortTitle', 'announcementInstitution', 'typ',
          'articleParagraphAttachment', 'comeIntoForceDate', 'exceptIntoForceDate', 'abbreviation',
          'signingDate', 'indices', 'transitionLaw', 'considerForWholeLaw', 'consider', 'change',
          'longTitle', 'languages', 'states', 'noteForWholeLaw', 'note', 'keywords', 'releaseDate',
          'changeDate', 'lawNumber', 'oldDocumentNumber', 'documentContent'
        ]);
        soapBody.documentContent.forEach(function (contentReference) {
          contentReference.should.have.keys(['contentType', 'name', 'dataType', 'risDoc']);
          contentReference.risDoc.should.have.keys(['metaData', 'userData', 'layoutData']);
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
