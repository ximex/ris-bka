var OGD_Request_Module_Factory = function () {
  var OGD_Request = {
    name: 'OGD_Request',
    defaultElementNamespaceURI: 'http:\/\/ris.bka.gv.at\/Search\/1.3\/OGD',
    typeInfos: [{
        localName: 'OrSearchExpression',
        baseTypeInfo: '.BooleanSearchExpression'
      }, {
        localName: 'NotSearchExpression',
        baseTypeInfo: '.SearchExpression',
        propertyInfos: [{
            name: 'expression',
            elementName: 'Expression',
            typeInfo: '.SearchExpression'
          }]
      }, {
        localName: 'BooleanSearchExpression',
        baseTypeInfo: '.SearchExpression',
        propertyInfos: [{
            name: 'expressions',
            elementName: 'Expressions',
            typeInfo: '.ArrayOfSearchExpression'
          }]
      }, {
        localName: 'TOGDSearchRequest',
        typeName: 'T_OGDSearchRequest',
        propertyInfos: [{
            name: 'suchworte',
            elementName: 'Suchworte',
            typeInfo: '.SearchExpression'
          }, {
            name: 'titel',
            elementName: 'Titel',
            typeInfo: '.SearchExpression'
          }, {
            name: 'index',
            elementName: 'Index',
            typeInfo: '.SearchExpression'
          }, {
            name: 'abschnitt',
            elementName: 'Abschnitt',
            typeInfo: '.NormabschnittSucheinschraenkung'
          }, {
            name: 'fassungVom',
            elementName: 'FassungVom',
            typeInfo: 'Calendar'
          }, {
            name: 'kundmachungsorgan',
            elementName: 'Kundmachungsorgan',
            typeInfo: '.PhraseSearchExpression'
          }, {
            name: 'kundmachungsorgannummer',
            elementName: 'Kundmachungsorgannummer',
            typeInfo: '.PhraseSearchExpression'
          }, {
            name: 'imRisSeit',
            elementName: 'ImRisSeit'
          }, {
            name: 'dokumenteProSeite',
            elementName: 'DokumenteProSeite'
          }, {
            name: 'seitennummer',
            elementName: 'Seitennummer',
            typeInfo: 'Int'
          }, {
            name: 'sortierung',
            elementName: 'Sortierung',
            typeInfo: '.BundesnormenSortExpression'
          }]
      }, {
        localName: 'BundesnormenSortExpression',
        propertyInfos: [{
            name: 'sortDirection',
            elementName: 'SortDirection'
          }, {
            name: 'sortedByColumn',
            elementName: 'SortedByColumn'
          }]
      }, {
        localName: 'ArrayOfSearchExpression',
        propertyInfos: [{
            name: 'searchExpression',
            collection: true,
            elementName: 'SearchExpression',
            typeInfo: '.SearchExpression'
          }]
      }, {
        localName: 'SearchExpression'
      }, {
        localName: 'NormabschnittSucheinschraenkung',
        propertyInfos: [{
            name: 'nummerVon',
            elementName: 'NummerVon',
            typeInfo: 'Int'
          }, {
            name: 'buchstabeVon',
            elementName: 'BuchstabeVon'
          }, {
            name: 'nummerBis',
            elementName: 'NummerBis',
            typeInfo: 'Int'
          }, {
            name: 'buchstabeBis',
            elementName: 'BuchstabeBis'
          }, {
            name: 'typ',
            elementName: 'Typ'
          }]
      }, {
        localName: 'TermSearchExpression',
        baseTypeInfo: '.SearchExpression',
        propertyInfos: [{
            name: 'value',
            elementName: 'Value'
          }]
      }, {
        localName: 'PhraseSearchExpression',
        baseTypeInfo: '.SearchExpression',
        propertyInfos: [{
            name: 'value',
            elementName: 'Value'
          }]
      }, {
        localName: 'AndSearchExpression',
        baseTypeInfo: '.BooleanSearchExpression'
      }, {
        type: 'enumInfo',
        localName: 'BundesnormenSortableColumn',
        values: ['ArtikelParagraphAnlage', 'Kurzinformation']
      }, {
        type: 'enumInfo',
        localName: 'WebSortDirection',
        values: ['Ascending', 'Descending']
      }, {
        type: 'enumInfo',
        localName: 'ChangeSetInterval',
        values: ['Undefined', 'EinerWoche', 'ZweiWochen', 'EinemMonat', 'DreiMonaten', 'SechsMonaten', 'EinemJahr']
      }, {
        type: 'enumInfo',
        localName: 'NormabschnittTyp',
        values: ['Alle', 'Artikel', 'Paragraph', 'Anlage']
      }, {
        type: 'enumInfo',
        localName: 'PageSize',
        values: ['Ten', 'Twenty', 'Fifty', 'OneHundred']
      }],
    elementInfos: [{
        elementName: 'OGDSearchRequest',
        typeInfo: '.TOGDSearchRequest'
      }]
  };
  return {
    OGD_Request: OGD_Request
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OGD_Request_Module_Factory);
}
else {
  var OGD_Request_Module = OGD_Request_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OGD_Request = OGD_Request_Module.OGD_Request;
  }
  else {
    var OGD_Request = OGD_Request_Module.OGD_Request;
  }
}