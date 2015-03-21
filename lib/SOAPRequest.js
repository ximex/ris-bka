'use strict';

let request = require('request');
let SOAPResponse = require('./SOAPResponse');

const PARAMS = {
  URL: 'http://data.bka.gv.at/ris/OGDService.asmx',
  HEADERS: {
    'Content-Type': 'application/soap+xml; charset=utf-8'
  },
  SOAP_BODY: '<?xml version="1.0" encoding="utf-8" standalone="yes"?>' +
  '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
  'xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
  '<soap12:Body>{{ACTION}}</soap12:Body>' +
  '</soap12:Envelope>',
  APPLICATION: 'Br'
};

module.exports = function (buildBody, callback) {
  let body = buildBody(PARAMS);

  request.post({
    url: PARAMS.URL,
    headers: PARAMS.HEADERS,
    body: body
  }, function (error, response, body) {
    SOAPResponse(error, response, body, callback);
  });
};
