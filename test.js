'use strict';

var RisBka = require('./lib/index');

// Query for searchDocuments
var query = {
  searchTerms: '', // PhraseSearchExpression (SearchExpression)
  title: '', // PhraseSearchExpression (SearchExpression)
  index: '', // PhraseSearchExpression (SearchExpression)
  section: {
    number: {
      start: 1,
      end: 2
    },
    character: {
      start: 'a',
      end: 'z'
    },
    typ: '' // "Alle", "Artikel", "Paragraph", "Anlage"
  },
  versionDate: undefined, // Date
  announcementInstitution: '', // PhraseSearchExpression
  announcementInstitutionNumber: '', // PhraseSearchExpression
  includedDate: '', // "Undefined", "EinerWoche", "ZweiWochen", "EinemMonat", "DreiMonaten", "SechsMonaten", "EinemJahr"
  paging: {
    docsPerPage: '', // "Ten", "Twenty", "Fifty", "OneHundred"
    page: 1 // Integer
  },
  sort: {
    direction: '', // "Ascending", "Descending"
    column: '' // "ArtikelParagraphAnlage", "Kurzinformation"
  }
};


// getVersion
RisBka.getVersion(function (soapBody, raw) {
  console.log(soapBody);
}, function (err, soapBody, raw) {
  console.log(err, soapBody, raw);
});

// searchDocuments
RisBka.searchDocuments(query, function (soapBody, raw) {
  console.log(soapBody);
}, function (err, soapBody, raw) {
  console.log(err, soapBody, raw);
});

// getDocument
RisBka.getDocument('NOR40091435', function (soapBody, raw) {
  console.log(soapBody);
}, function (err, soapBody, raw) {
  console.log(err, soapBody, raw);
});
