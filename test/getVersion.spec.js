'use strict';

let should = require('should');

let getVersion = require('../lib/getVersion');

describe('RisBka', function () {
  describe('.getVersion(cbOk, cbFail)', function () {

    it('should return version OGD_1.3.0', function (done) {
      getVersion(function (soapBody, raw) {
        soapBody.should.be.equal('OGD_1.3.0');
        done();
      });
    });

    it('should return raw with keys: error, response, body', function (done) {
      getVersion(function (soapBody, raw) {
        raw.should.have.keys(['error', 'response', 'body']);
        done();
      });
    });

    it('should return no error in raw', function (done) {
      getVersion(function (soapBody, raw) {
        should.not.exist(raw.error);
        done();
      });
    });

  })
});
