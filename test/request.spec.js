'use strict';

let should = require('should');

let RisBka = require('../lib/index.js');

describe('RisBka', function () {
  describe('.searchDocuments(query, cbOk, cbFail)', function () {

    let query = {
      name: {
        namespaceURI: 'http://ris.bka.gv.at/Search/1.3/OGD',
        localPart: 'OGDSearchRequest'
        //prefix: '',
        //key: '{http://ris.bka.gv.at/Search/1.3/OGD}OGDSearchRequest',
        //string: '{http://ris.bka.gv.at/Search/1.3/OGD}OGDSearchRequest'
      },
      value: {
        //TYPE_NAME: 'OGDSearchRequest.TOGDSearchRequest',
        //suchworte: { // PhraseSearchExpression
        //  //TYPE_NAME: 'OGDSearchRequest.PhraseSearchExpression',
        //  value: ''
        //},
        //titel: { // PhraseSearchExpression
        //  //TYPE_NAME: 'OGDSearchRequest.PhraseSearchExpression',
        //  value: ''
        //},
        //index: { // PhraseSearchExpression
        //  //TYPE_NAME: 'OGDSearchRequest.PhraseSearchExpression',
        //  value: ''
        //},
        abschnitt: {
          //TYPE_NAME: 'OGDSearchRequest.NormabschnittSucheinschraenkung',
          nummerVon: 0, // Integer
          nummerBis: 9, // Integer
          buchstabeVon: 'a', // String
          buchstabeBis: 'z', // String
          typ: 'Alle' // "Alle", "Artikel", "Paragraph", "Anlage"
        },
        fassungVom: { // Date
          year: 2012, // Integer
          month: 4, // Integer
          day: 12 // Integer
        },
        //kundmachungsorgan: { // PhraseSearchExpression
        //  //TYPE_NAME: 'OGDSearchRequest.PhraseSearchExpression',
        //  value: ''
        //},
        //kundmachungsorgannummer: { // PhraseSearchExpression
        //  //TYPE_NAME: 'OGDSearchRequest.PhraseSearchExpression',
        //  value: ''
        //},
        imRisSeit: 'Undefined', // "Undefined", "EinerWoche", "ZweiWochen", "EinemMonat", "DreiMonaten", "SechsMonaten", "EinemJahr"
        dokumenteProSeite: 'Ten', // "Ten", "Twenty", "Fifty", "OneHundred"
        seitennummer: 1, // Integer
        sortierung: {
          //TYPE_NAME: 'OGDSearchRequest.BundesnormenSortExpression',
          sortDirection: 'Ascending', // "Ascending", "Descending"
          sortedByColumn: 'ArtikelParagraphAnlage' // "ArtikelParagraphAnlage", "Kurzinformation"
        }
      }
    };

    it('should return soapBody with keys: paging, results', function (done) {
      this.timeout(5000);
      RisBka.searchDocuments(query, function (soapBody, raw) {
        soapBody.should.have.keys(['paging', 'results']);
        soapBody.results.forEach(function (result) {
          result.should.have.keys(['applikation', 'dokumentnummer', 'artikelParagraphAnlage', 'kurzinformation', 'dokumentUrl']);
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
