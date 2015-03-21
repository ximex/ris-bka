'use strict';

let Jsonix = require('jsonix').Jsonix;
let SOAP_Envelope = require('../mappings/SOAP_Envelope').SOAP_Envelope;

module.exports = function (error, response, body, callback) {
  let err = null;
  let soapBody = null;
  let raw = {
    error: error,
    response: response,
    body: body
  };

  if (error) {
    err = {
      errorType: 'request',
      error: error
    };
  } else {
    let context = new Jsonix.Context([SOAP_Envelope]);
    let unmarshaller = context.createUnmarshaller();

    let parsedBody = unmarshaller.unmarshalString(body);
    soapBody = parsedBody.value.body.any;

    if (soapBody[0].name && soapBody[0].name.localPart === 'Fault') {
      err = {
        errorType: 'soap',
        error: soapBody[0].value
      };
      delete err.error.TYPE_NAME;
    } else {
      try {
        soapBody = soapBody[0].childNodes[0].childNodes[0].data;
      } catch (e) {
        err = {
          errorType: 'other',
          error: e
        };
      }
    }
  }

  callback(err, soapBody, raw);
};
