'use strict';

let should = require('should');

let RisBka = require('../lib/index.js');

describe('RisBka', function () {
  describe('.searchDocuments(query, cbOk, cbFail)', function () {

    let query = {};

    it('should return soapBody with keys: paging, results', function (done) {
      this.timeout(5000);
      RisBka.searchDocuments(query, function (soapBody, raw) {
        soapBody.should.have.keys(['paging', 'results']);
        done();
      });
    });

    it('should return raw with keys: error, response, body', function (done) {
      this.timeout(5000);
      RisBka.searchDocuments(query, function (soapBody, raw) {
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
