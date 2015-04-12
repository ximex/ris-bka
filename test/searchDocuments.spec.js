'use strict';

let should = require('should');

let RisBka = require('../lib/index');

describe('RisBka', function () {
  describe('.searchDocuments(query, cbOk, cbFail)', function () {

    let query = {
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

    it('should return soapBody with keys: paging, results', function (done) {
      this.timeout(5000);
      RisBka.searchDocuments(query, function (soapBody, raw) {
        soapBody.should.have.keys(['paging', 'results']);
        soapBody.results.forEach(function (result) {
          result.should.have.keys(['application', 'documentNumber', 'articleParagraphAttachment', 'shortInformation', 'documentUrl']);
        });
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
