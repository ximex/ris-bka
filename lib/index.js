'use strict';

let versionMethod = require('./version');
let requestMethod = require('./request');
let getDocumentMethod = require('./getDocument');

module.exports = {
  getVersion: function (cbOk, cbFail) {
    versionMethod(cbOk, cbFail);
  },
  searchDocuments: function (query, cbOk, cbFail) {
    requestMethod(query, cbOk, cbFail);
  },
  getDocument: function (docId, cbOk, cbFail) {
    getDocumentMethod(docId, cbOk, cbFail);
  }
};
