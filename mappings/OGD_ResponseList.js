var OGD_ResponseList_Module_Factory = function () {
  var OGD_ResponseList = {
    name: 'OGD_ResponseList',
    defaultElementNamespaceURI: 'http:\/\/ris.bka.gv.at\/Search\/1.3\/OGD',
    typeInfos: [{
        localName: 'TError',
        typeName: 'T_Error',
        propertyInfos: [{
            name: 'applikation',
            elementName: {
              localPart: 'Applikation'
            }
          }, {
            name: 'message',
            elementName: {
              localPart: 'Message'
            }
          }, {
            name: 'errorType',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'errorType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Hits',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'pageNumber',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'pageNumber'
            },
            type: 'attribute'
          }, {
            name: 'pageSize',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'pageSize'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TDocumentReferences',
        typeName: 'T_DocumentReferences',
        propertyInfos: [{
            name: 'ogdDocumentReference',
            collection: true,
            elementName: 'OGDDocumentReference',
            typeInfo: '.TOGDDocumentReference'
          }]
      }, {
        localName: 'TOGDSearchResult.SearchDocumentsResult',
        typeName: null,
        propertyInfos: [{
            name: 'hits',
            elementName: 'Hits',
            typeInfo: '.Hits'
          }, {
            name: 'documentReferences',
            elementName: 'DocumentReferences',
            typeInfo: '.TDocumentReferences'
          }]
      }, {
        localName: 'TOGDDocumentReference',
        typeName: 'T_OGDDocumentReference',
        propertyInfos: [{
            name: 'applikation',
            elementName: 'Applikation'
          }, {
            name: 'dokumentnummer',
            elementName: 'Dokumentnummer'
          }, {
            name: 'artikelParagraphAnlage',
            elementName: 'ArtikelParagraphAnlage'
          }, {
            name: 'kurzinformation',
            elementName: 'Kurzinformation'
          }, {
            name: 'dokumentUrl',
            elementName: 'DokumentUrl'
          }]
      }, {
        localName: 'TOGDSearchResult',
        typeName: {
          namespaceURI: '',
          localPart: 'T_OGDSearchResult'
        },
        propertyInfos: [{
            name: 'error',
            elementName: {
              localPart: 'Error'
            },
            typeInfo: '.TError'
          }, {
            name: 'searchDocumentsResult',
            elementName: {
              localPart: 'SearchDocumentsResult'
            },
            typeInfo: '.TOGDSearchResult.SearchDocumentsResult'
          }, {
            name: 'status',
            attributeName: {
              localPart: 'status'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'TApplikation',
        values: ['Bundesrecht']
      }],
    elementInfos: [{
        elementName: 'Kurzinformation'
      }, {
        elementName: 'DokumentUrl'
      }, {
        elementName: 'ArtikelParagraphAnlage'
      }, {
        elementName: 'Dokumentnummer'
      }, {
        elementName: 'DocumentReferences',
        typeInfo: '.TDocumentReferences'
      }, {
        elementName: 'Applikation'
      }, {
        elementName: 'Hits',
        typeInfo: '.Hits'
      }, {
        elementName: 'OGDDocumentReference',
        typeInfo: '.TOGDDocumentReference'
      }, {
        elementName: {
          localPart: 'OGDSearchResult'
        },
        typeInfo: '.TOGDSearchResult'
      }]
  };
  return {
    OGD_ResponseList: OGD_ResponseList
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OGD_ResponseList_Module_Factory);
}
else {
  var OGD_ResponseList_Module = OGD_ResponseList_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OGD_ResponseList = OGD_ResponseList_Module.OGD_ResponseList;
  }
  else {
    var OGD_ResponseList = OGD_ResponseList_Module.OGD_ResponseList;
  }
}