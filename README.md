# RIS-BKA

[![Build Status](https://travis-ci.org/ximex/ris-bka.svg)](https://travis-ci.org/ximex/ris-bka)
[![Code Climate](https://codeclimate.com/github/ximex/ris-bka/badges/gpa.svg)](https://codeclimate.com/github/ximex/ris-bka)
[![Test Coverage](https://codeclimate.com/github/ximex/ris-bka/badges/coverage.svg)](https://codeclimate.com/github/ximex/ris-bka)
[![Dependency Status](https://david-dm.org/ximex/ris-bka.svg)](https://david-dm.org/ximex/ris-bka)
[![devDependency Status](https://david-dm.org/ximex/ris-bka/dev-status.svg)](https://david-dm.org/ximex/ris-bka#info=devDependencies)

## Usage

```bash
$ npm install
```
```javascript
// In your project import the 'ris-bka' module
var RisBka = require('ris-bka');
// Use this object to execute methods (listed below)
```

### Methods
- **getVersion:** `RisBka.getVersion(cbOk, [cbFail])`
- **searchDocuments:** `RisBka.searchDocuments(query, cbOk, [cbFail])`
- **getDocument:** `RisBka.getDocument(docId, cbOk, [cbFail])`

### Callbacks
- **cbOk:** `function (soapBody, [raw]) { ... }` - Executed if all works fine
- **cbFail:** `function (err, soapBody, [raw]) { ... }` - Executed if any error appears

### Parameter
- **query:**
  - Type: `Object`
  - More: Look *Query-Structure*
- **docId:**
  - Type: `String`
  - Example: `'NOR40091435'`
- **err:**
  - Type: `Object`
  - Structure: `{ errorType: 'String', error: { ... } }`
- **soapBody:**
  - Type: `Object`
  - More: Look *soapBody-Structure*
- **raw:**
  - Type: `Object`
  - Structure: `{ error: { ... }, response: { ... }, body: { ... } }`
  - Info: Response parameters from **request** module

### Object-Structure

#### Query
**NOT IMPLEMENTED YET**
```javascript
{
  searchTerms: {}, // PhraseSearchExpression
  title: {}, // PhraseSearchExpression
  index: {}, // PhraseSearchExpression
  section: {
    number: [
      0, // Start-Number (Integer)
      9 // End-Number (Integer)
    ],
    character: [
      'a', // Start-Character
      'z' // End-Character
    ],
    typ: '' // "Alle", "Artikel", "Paragraph", "Anlage"
  },
  verionDate: '', // Date
  announcementInstitution: {}, // PhraseSearchExpression
  announcementInstitutionNumber: {}, // PhraseSearchExpression
  includedDate: '', // "Undefined", "EinerWoche", "ZweiWochen", "EinemMonat", "DreiMonaten", "SechsMonaten", "EinemJahr"
  paging: {
    docsPerPage: '', // "Ten", "Twenty", "Fifty", "OneHundred"
    page: 1 // Integer
  },
  sort: {
    direction: '', // "Ascending", "Descending"
    column: '' // "ArtikelParagraphAnlage", "Kurzinformation"
  }
}
```

##### PhraseSearchExpression
**NOT IMPLEMENTED YET**
`{}` represents a search expression
```javascript
// AND
{
  and: [{}, {}]
}
// OR
{
  or: [{}, {}]
}
// NOT
{
  not: {}
}
// MASK
{
  mask: {}
}
// VALUE
{
  value: 'SearchString'
}
```

#### soapBody

##### getVersion
```javascript
'OGD_1.3.0'
```

##### searchDocuments
```javascript
{
  // TODO
}
```

##### getDocuments
```javascript
{
  applikation: 'String',
  dokumentnummer: 'String',
  kurztitel: 'String',
  kundmachungsorgan: 'String',
  typ: 'String',
  artikelParagraphAnlage: 'String',
  inkrafttretedatum: 'Date',
  ausserkrafttretedatum: 'Date',
  abkuerzung: 'String',
  unterzeichnungsdatum: 'Date',
  indizes: ['String', 'String'],
  uebergangsrecht: 'String',
  beachteZurGanzenRechtsvorschrift: 'String',
  beachte: 'String',
  aenderung: 'String',
  langtitel: 'String',
  sprachen: 'String',
  staaten: 'String',
  anmerkungZurGanzenRechtsvorschrift: 'String',
  anmerkung: 'String',
  schlagworte: 'String',
  veroeffentlichungsdatum: 'Date',
  aenderungsdatum: 'Date',
  gesetzesnummer: 'String',
  alteDokumentnummer: 'String',
  dokumentinhalt: [
    {
      contentType: 'String',
      name: 'String',
      dataType: 'String',
      risdok: {
        metadaten: { ... },
        nutzdaten: { ... },
        layoutdaten: { ... }
      }
    },
    { ... }
  ]
}
```


## Useful URLs
- https://www.data.gv.at/katalog/dataset/31430a9f-c8ba-4654-ab68-c9c3dff0361b
- https://www.ris.bka.gv.at/Bundesrecht/
