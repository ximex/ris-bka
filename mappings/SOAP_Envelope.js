var SOAP_Envelope_Module_Factory = function () {
  var SOAP_Envelope = {
    name: 'SOAP_Envelope',
    defaultElementNamespaceURI: 'http:\/\/www.w3.org\/2003\/05\/soap-envelope',
    typeInfos: [{
        localName: 'Reasontext',
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
        localName: 'Faultreason',
        propertyInfos: [{
            name: 'text',
            collection: true,
            elementName: 'Text',
            typeInfo: '.Reasontext'
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
        localName: 'Subcode',
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
        localName: 'Detail',
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
        localName: 'Faultcode',
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
        elementName: 'Header',
        typeInfo: '.Header'
      }, {
        elementName: 'NotUnderstood',
        typeInfo: '.NotUnderstoodType'
      }, {
        elementName: 'Envelope',
        typeInfo: '.Envelope'
      }, {
        elementName: 'Fault',
        typeInfo: '.Fault'
      }, {
        elementName: 'Body',
        typeInfo: '.Body'
      }, {
        elementName: 'Upgrade',
        typeInfo: '.UpgradeType'
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