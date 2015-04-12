var SOAP_Envelope_Module_Factory = function () {
  var SOAP_Envelope = {
    name: 'SOAP_Envelope',
    defaultElementNamespaceURI: 'http:\/\/www.w3.org\/2003\/05\/soap-envelope',
    typeInfos: [{
        localName: 'Subcode',
        typeName: 'subcode',
        propertyInfos: [{
            name: 'value',
            elementName: 'Value',
            typeInfo: 'QName'
          }, {
            name: 'subcode',
            elementName: 'Subcode',
            typeInfo: '.Subcode'
          }]
      }, {
        localName: 'Faultreason',
        typeName: 'faultreason',
        propertyInfos: [{
            name: 'text',
            collection: true,
            elementName: 'Text',
            typeInfo: '.Reasontext'
          }]
      }, {
        localName: 'Detail',
        typeName: 'detail',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'Reasontext',
        typeName: 'reasontext',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UpgradeType',
        propertyInfos: [{
            name: 'supportedEnvelope',
            collection: true,
            elementName: 'SupportedEnvelope',
            typeInfo: '.SupportedEnvType'
          }]
      }, {
        localName: 'Fault',
        propertyInfos: [{
            name: 'code',
            elementName: 'Code',
            typeInfo: '.Faultcode'
          }, {
            name: 'reason',
            elementName: 'Reason',
            typeInfo: '.Faultreason'
          }, {
            name: 'node',
            elementName: 'Node'
          }, {
            name: 'role',
            elementName: 'Role'
          }, {
            name: 'detail',
            elementName: 'Detail',
            typeInfo: '.Detail'
          }]
      }, {
        localName: 'Body',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'SupportedEnvType',
        propertyInfos: [{
            name: 'qname',
            typeInfo: 'QName',
            attributeName: {
              localPart: 'qname'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Faultcode',
        typeName: 'faultcode',
        propertyInfos: [{
            name: 'value',
            elementName: 'Value',
            typeInfo: 'QName'
          }, {
            name: 'subcode',
            elementName: 'Subcode',
            typeInfo: '.Subcode'
          }]
      }, {
        localName: 'Header',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'NotUnderstoodType',
        propertyInfos: [{
            name: 'qname',
            typeInfo: 'QName',
            attributeName: {
              localPart: 'qname'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Envelope',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'header',
            elementName: 'Header',
            typeInfo: '.Header'
          }, {
            name: 'body',
            elementName: 'Body',
            typeInfo: '.Body'
          }]
      }],
    elementInfos: [{
        elementName: 'Body',
        typeInfo: '.Body'
      }, {
        elementName: 'NotUnderstood',
        typeInfo: '.NotUnderstoodType'
      }, {
        elementName: 'Upgrade',
        typeInfo: '.UpgradeType'
      }, {
        elementName: 'Header',
        typeInfo: '.Header'
      }, {
        elementName: 'Fault',
        typeInfo: '.Fault'
      }, {
        elementName: 'Envelope',
        typeInfo: '.Envelope'
      }]
  };
  return {
    SOAP_Envelope: SOAP_Envelope
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SOAP_Envelope_Module_Factory);
}
else {
  var SOAP_Envelope_Module = SOAP_Envelope_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SOAP_Envelope = SOAP_Envelope_Module.SOAP_Envelope;
  }
  else {
    var SOAP_Envelope = SOAP_Envelope_Module.SOAP_Envelope;
  }
}