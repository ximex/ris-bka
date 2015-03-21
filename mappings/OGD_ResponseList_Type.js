var OGD_ResponseList_Type_Module_Factory = function () {
  var OGD_ResponseList_Type = {
    name: 'OGD_ResponseList_Type',
    defaultElementNamespaceURI: 'http:\/\/ris.bka.gv.at\/Search\/1.3\/OGD',
    typeInfos: [{
        localName: 'TDocumentReferences',
        propertyInfos: [{
            name: 'ogdDocumentReference',
            collection: true,
            elementName: 'OGDDocumentReference',
            typeInfo: '.TOGDDocumentReference'
          }]
      }, {
        localName: 'Hits',
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
        localName: 'TOGDDocumentReference',
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
        localName: 'TError',
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
        type: 'enumInfo',
        localName: 'TApplikation',
        values: ['Bundesrecht']
      }],
    elementInfos: [{
        elementName: 'Hits',
        typeInfo: '.Hits'
      }, {
        elementName: 'Applikation'
      }, {
        elementName: 'Kurzinformation'
      }, {
        elementName: 'OGDDocumentReference',
        typeInfo: '.TOGDDocumentReference'
      }, {
        elementName: 'ArtikelParagraphAnlage'
      }, {
        elementName: 'DokumentUrl'
      }, {
        elementName: 'Dokumentnummer'
      }, {
        elementName: 'DocumentReferences',
        typeInfo: '.TDocumentReferences'
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