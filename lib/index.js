'use strict';

let getVersionMethod = require('./getVersion');
let searchDocumentsMethod = require('./searchDocuments');
let getDocumentMethod = require('./getDocument');

module.exports = {
  getVersion: function (cbOk, cbFail) {
    getVersionMethod(cbOk, cbFail);
  },
  searchDocuments: function (query, cbOk, cbFail) {
    searchDocumentsMethod(query, cbOk, cbFail);
  },
  getDocument: function (docId, cbOk, cbFail) {
    getDocumentMethod(docId, cbOk, cbFail);
  }
};
