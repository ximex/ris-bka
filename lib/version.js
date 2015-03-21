'use strict';

let SOAPRequest = require('./SOAPRequest');

module.exports = function (cbOk, cbFail) {

  SOAPRequest(function (PARAMS) {
    let action = '<version xmlns="http://ogd.bka.gv.at/"></version>';
    let body = PARAMS.SOAP_BODY.replace('{{ACTION}}', action);

    return body;
  }, function (err, soapBody, raw) {
    if (err) {
      cbFail(err, soapBody, raw);
    } else {
      cbOk(soapBody, raw);
    }
  });

};
