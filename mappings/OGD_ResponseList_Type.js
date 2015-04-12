var OGD_ResponseList_Type_Module_Factory = function () {
  var OGD_ResponseList_Type = {
    name: 'OGD_ResponseList_Type',
    defaultElementNamespaceURI: 'http:\/\/ris.bka.gv.at\/Search\/1.3\/OGD',
    typeInfos: [{
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
        localName: 'TDocumentReferences',
        typeName: 'T_DocumentReferences',
        propertyInfos: [{
            name: 'ogdDocumentReference',
            collection: true,
            elementName: 'OGDDocumentReference',
            typeInfo: '.TOGDDocumentReference'
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
        type: 'enumInfo',
        localName: 'TApplikation',
        values: ['Bundesrecht']
      }],
    elementInfos: [{
        elementName: 'Applikation'
      }, {
        elementName: 'DokumentUrl'
      }, {
        elementName: 'DocumentReferences',
        typeInfo: '.TDocumentReferences'
      }, {
        elementName: 'Dokumentnummer'
      }, {
        elementName: 'ArtikelParagraphAnlage'
      }, {
        elementName: 'Kurzinformation'
      }, {
        elementName: 'Hits',
        typeInfo: '.Hits'
      }, {
        elementName: 'OGDDocumentReference',
        typeInfo: '.TOGDDocumentReference'
      }]
  };
  return {
    OGD_ResponseList_Type: OGD_ResponseList_Type
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OGD_ResponseList_Type_Module_Factory);
}
else {
  var OGD_ResponseList_Type_Module = OGD_ResponseList_Type_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OGD_ResponseList_Type = OGD_ResponseList_Type_Module.OGD_ResponseList_Type;
  }
  else {
    var OGD_ResponseList_Type = OGD_ResponseList_Type_Module.OGD_ResponseList_Type;
  }
}