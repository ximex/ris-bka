var OGD_DocumentResponse_Module_Factory = function () {
  var OGD_DocumentResponse = {
    name: 'OGD_DocumentResponse',
    typeInfos: [{
        localName: 'Erlliste',
        propertyInfos: [{
            name: 'listelem',
            collection: true,
            elementName: {
              localPart: 'listelem'
            },
            typeInfo: '.Listelem'
          }]
      }, {
        localName: 'Link',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'href',
            attributeName: {
              localPart: 'href'
            },
            type: 'attribute'
          }, {
            name: 'target',
            attributeName: {
              localPart: 'target'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Absatz',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }, {
            name: 'halign',
            attributeName: {
              localPart: 'halign'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Fzinhalt',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }],
            type: 'elementRefs'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }, {
            name: 'abschnittnr',
            attributeName: {
              localPart: 'abschnittnr'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Subliteraliste',
        propertyInfos: [{
            name: 'listelemOrStrichlisteOrSchluss',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'listelem'
                },
                typeInfo: '.Listelem'
              }, {
                elementName: {
                  localPart: 'strichliste'
                },
                typeInfo: '.Strichliste'
              }, {
                elementName: {
                  localPart: 'schluss'
                },
                typeInfo: '.Schluss'
              }],
            type: 'elements'
          }, {
            name: 'ebene',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'ebene'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Td',
        propertyInfos: [{
            name: 'ueberschriftOrAbsatzOrAusgabe',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }, {
                elementName: {
                  localPart: 'inhaltsvz'
                },
                typeInfo: '.Inhaltsvz'
              }, {
                elementName: {
                  localPart: 'unterschrift'
                },
                typeInfo: '.Unterschrift'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'textbox'
                },
                typeInfo: '.Textbox'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'pre'
                },
                typeInfo: '.Pre'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }, {
                elementName: {
                  localPart: 'div'
                },
                typeInfo: '.Div'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }],
            type: 'elements'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }, {
            name: 'dir',
            attributeName: {
              localPart: 'dir'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'hStart',
            attributeName: {
              localPart: 'h-start'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }, {
            name: 'twips',
            attributeName: {
              localPart: 'twips'
            },
            type: 'attribute'
          }, {
            name: 'axis',
            attributeName: {
              localPart: 'axis'
            },
            type: 'attribute'
          }, {
            name: 'axes',
            attributeName: {
              localPart: 'axes'
            },
            type: 'attribute'
          }, {
            name: 'nowrap',
            attributeName: {
              localPart: 'nowrap'
            },
            type: 'attribute'
          }, {
            name: 'rowspan',
            attributeName: {
              localPart: 'rowspan'
            },
            type: 'attribute'
          }, {
            name: 'colspan',
            attributeName: {
              localPart: 'colspan'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: '_char',
            attributeName: {
              localPart: 'char'
            },
            type: 'attribute'
          }, {
            name: 'charoff',
            attributeName: {
              localPart: 'charoff'
            },
            type: 'attribute'
          }, {
            name: 'valign',
            attributeName: {
              localPart: 'valign'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'En'
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
        localName: 'Th',
        propertyInfos: [{
            name: 'ueberschriftOrAbsatzOrAusgabe',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }, {
                elementName: {
                  localPart: 'inhaltsvz'
                },
                typeInfo: '.Inhaltsvz'
              }, {
                elementName: {
                  localPart: 'unterschrift'
                },
                typeInfo: '.Unterschrift'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'textbox'
                },
                typeInfo: '.Textbox'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }, {
                elementName: {
                  localPart: 'div'
                },
                typeInfo: '.Div'
              }],
            type: 'elements'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }, {
            name: 'dir',
            attributeName: {
              localPart: 'dir'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'hStart',
            attributeName: {
              localPart: 'h-start'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'axis',
            attributeName: {
              localPart: 'axis'
            },
            type: 'attribute'
          }, {
            name: 'axes',
            attributeName: {
              localPart: 'axes'
            },
            type: 'attribute'
          }, {
            name: 'nowrap',
            attributeName: {
              localPart: 'nowrap'
            },
            type: 'attribute'
          }, {
            name: 'rowspan',
            attributeName: {
              localPart: 'rowspan'
            },
            type: 'attribute'
          }, {
            name: 'colspan',
            attributeName: {
              localPart: 'colspan'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: '_char',
            attributeName: {
              localPart: 'char'
            },
            type: 'attribute'
          }, {
            name: 'charoff',
            attributeName: {
              localPart: 'charoff'
            },
            type: 'attribute'
          }, {
            name: 'valign',
            attributeName: {
              localPart: 'valign'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Binary',
        propertyInfos: [{
            name: 'src',
            elementName: {
              localPart: 'src'
            }
          }, {
            name: 'base64',
            elementName: {
              localPart: 'base64'
            },
            typeInfo: 'Base64Binary'
          }, {
            name: 'beschr',
            elementName: {
              localPart: 'beschr'
            },
            typeInfo: '.Beschr'
          }, {
            name: 'nr',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'nr'
            },
            type: 'attribute'
          }, {
            name: 'datatype',
            attributeName: {
              localPart: 'datatype'
            },
            type: 'attribute'
          }, {
            name: 'shapetype',
            attributeName: {
              localPart: 'shapetype'
            },
            type: 'attribute'
          }, {
            name: 'filename',
            attributeName: {
              localPart: 'filename'
            },
            type: 'attribute'
          }, {
            name: 'height',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'brightness',
            attributeName: {
              localPart: 'brightness'
            },
            type: 'attribute'
          }, {
            name: 'contrast',
            attributeName: {
              localPart: 'contrast'
            },
            type: 'attribute'
          }, {
            name: 'oleclass',
            attributeName: {
              localPart: 'oleclass'
            },
            type: 'attribute'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'alt',
            attributeName: {
              localPart: 'alt'
            },
            type: 'attribute'
          }, {
            name: 'left',
            attributeName: {
              localPart: 'left'
            },
            type: 'attribute'
          }, {
            name: 'top',
            attributeName: {
              localPart: 'top'
            },
            type: 'attribute'
          }, {
            name: 'hpos',
            attributeName: {
              localPart: 'hpos'
            },
            type: 'attribute'
          }, {
            name: 'vpos',
            attributeName: {
              localPart: 'vpos'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Gt'
      }, {
        localName: 'Ausgabe',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'adid'
                },
                typeInfo: '.Adid'
              }, {
                elementName: {
                  localPart: 'addat'
                },
                typeInfo: '.Addat'
              }, {
                elementName: {
                  localPart: 'adtext'
                },
                typeInfo: '.Adtext'
              }],
            type: 'elementRefs'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Gdash'
      }, {
        localName: 'Adtext',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Super',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Betragliste',
        propertyInfos: [{
            name: 'listelem',
            collection: true,
            elementName: {
              localPart: 'listelem'
            },
            typeInfo: '.Listelem'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Tab',
        propertyInfos: [{
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: 'position',
            attributeName: {
              localPart: 'position'
            },
            type: 'attribute'
          }, {
            name: 'leader',
            attributeName: {
              localPart: 'leader'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Kidea'
      }, {
        localName: 'Sub',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Caption',
        propertyInfos: [{
            name: 'ueberschriftOrAbsatzOrAusgabe',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }, {
                elementName: {
                  localPart: 'inhaltsvz'
                },
                typeInfo: '.Inhaltsvz'
              }, {
                elementName: {
                  localPart: 'unterschrift'
                },
                typeInfo: '.Unterschrift'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'textbox'
                },
                typeInfo: '.Textbox'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }],
            type: 'elements'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }, {
            name: 'dir',
            attributeName: {
              localPart: 'dir'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'hStart',
            attributeName: {
              localPart: 'h-start'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Nutzdaten',
        propertyInfos: [{
            name: 'fnen',
            elementName: {
              localPart: 'fnen'
            },
            typeInfo: '.Fnen'
          }, {
            name: 'abschnitt',
            collection: true,
            elementName: {
              localPart: 'abschnitt'
            },
            typeInfo: '.Abschnitt'
          }]
      }, {
        localName: 'I',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'N',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'B',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Colgroup',
        propertyInfos: [{
            name: 'col',
            collection: true,
            elementName: {
              localPart: 'col'
            },
            typeInfo: '.Col'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }, {
            name: 'dir',
            attributeName: {
              localPart: 'dir'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'hStart',
            attributeName: {
              localPart: 'h-start'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'span',
            attributeName: {
              localPart: 'span'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: '_char',
            attributeName: {
              localPart: 'char'
            },
            type: 'attribute'
          }, {
            name: 'charoff',
            attributeName: {
              localPart: 'charoff'
            },
            type: 'attribute'
          }, {
            name: 'valign',
            attributeName: {
              localPart: 'valign'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Gs',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Fnzeichen',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'feld'
            },
            typeInfo: '.Feld',
            type: 'elementRef'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Strichliste',
        propertyInfos: [{
            name: 'listelem',
            collection: true,
            elementName: {
              localPart: 'listelem'
            },
            typeInfo: '.Listelem'
          }, {
            name: 'ebene',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'ebene'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Lidea'
      }, {
        localName: 'Pre',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }, {
                elementName: {
                  localPart: 'textbox'
                },
                typeInfo: '.Textbox'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'unterschrift'
                },
                typeInfo: '.Unterschrift'
              }, {
                elementName: {
                  localPart: 'pre'
                },
                typeInfo: '.Pre'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'inhaltsvz'
                },
                typeInfo: '.Inhaltsvz'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Kzinhalt',
        propertyInfos: [{
            name: 'ueberschriftOrAbsatzOrAusgabe',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }],
            type: 'elements'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Risdok',
        propertyInfos: [{
            name: 'metadaten',
            elementName: {
              localPart: 'metadaten'
            },
            typeInfo: 'AnyType'
          }, {
            name: 'nutzdaten',
            elementName: {
              localPart: 'nutzdaten'
            },
            typeInfo: '.Nutzdaten'
          }, {
            name: 'layoutdaten',
            elementName: {
              localPart: 'layoutdaten'
            },
            typeInfo: '.Layoutdaten'
          }, {
            name: 'stylesheet',
            attributeName: {
              localPart: 'stylesheet'
            },
            type: 'attribute'
          }, {
            name: 'hVersion',
            attributeName: {
              localPart: 'h-version'
            },
            type: 'attribute'
          }, {
            name: 'hCreator',
            attributeName: {
              localPart: 'h-creator'
            },
            type: 'attribute'
          }, {
            name: 'hCreated',
            attributeName: {
              localPart: 'h-created'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Em'
      }, {
        localName: 'Table',
        propertyInfos: [{
            name: 'caption',
            elementName: {
              localPart: 'caption'
            },
            typeInfo: '.Caption'
          }, {
            name: 'trOrColOrColgroup',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'tr'
                },
                typeInfo: '.Tr'
              }, {
                elementName: {
                  localPart: 'col'
                },
                typeInfo: '.Col'
              }, {
                elementName: {
                  localPart: 'colgroup'
                },
                typeInfo: '.Colgroup'
              }, {
                elementName: {
                  localPart: 'thead'
                },
                typeInfo: '.Thead'
              }, {
                elementName: {
                  localPart: 'tfoot'
                },
                typeInfo: '.Tfoot'
              }, {
                elementName: {
                  localPart: 'tbody'
                },
                typeInfo: '.Tbody'
              }],
            type: 'elements'
          }, {
            name: 'id',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }, {
            name: 'dir',
            attributeName: {
              localPart: 'dir'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'twips',
            attributeName: {
              localPart: 'twips'
            },
            type: 'attribute'
          }, {
            name: 'hStart',
            attributeName: {
              localPart: 'h-start'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: 'cols',
            attributeName: {
              localPart: 'cols'
            },
            type: 'attribute'
          }, {
            name: 'border',
            attributeName: {
              localPart: 'border'
            },
            type: 'attribute'
          }, {
            name: 'frame',
            attributeName: {
              localPart: 'frame'
            },
            type: 'attribute'
          }, {
            name: 'rules',
            attributeName: {
              localPart: 'rules'
            },
            type: 'attribute'
          }, {
            name: 'cellspacing',
            attributeName: {
              localPart: 'cellspacing'
            },
            type: 'attribute'
          }, {
            name: 'cellpadding',
            attributeName: {
              localPart: 'cellpadding'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Tfoot',
        propertyInfos: [{
            name: 'tr',
            collection: true,
            elementName: {
              localPart: 'tr'
            },
            typeInfo: '.Tr'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }, {
            name: 'dir',
            attributeName: {
              localPart: 'dir'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'hStart',
            attributeName: {
              localPart: 'h-start'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: '_char',
            attributeName: {
              localPart: 'char'
            },
            type: 'attribute'
          }, {
            name: 'charoff',
            attributeName: {
              localPart: 'charoff'
            },
            type: 'attribute'
          }, {
            name: 'valign',
            attributeName: {
              localPart: 'valign'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Rsquo'
      }, {
        localName: 'Feld',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }],
            type: 'elementRefs'
          }, {
            name: 'code',
            attributeName: {
              localPart: 'code'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Abschnitt',
        propertyInfos: [{
            name: 'kzinhalt',
            collection: true,
            elementName: {
              localPart: 'kzinhalt'
            },
            typeInfo: '.Kzinhalt'
          }, {
            name: 'fzinhalt',
            collection: true,
            elementName: {
              localPart: 'fzinhalt'
            },
            typeInfo: '.Fzinhalt'
          }, {
            name: 'blockOrUeberschriftOrAbsatz',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'block'
                },
                typeInfo: '.BlockType'
              }, {
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }, {
                elementName: {
                  localPart: 'inhaltsvz'
                },
                typeInfo: '.Inhaltsvz'
              }, {
                elementName: {
                  localPart: 'unterschrift'
                },
                typeInfo: '.Unterschrift'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'textbox'
                },
                typeInfo: '.Textbox'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }],
            type: 'elements'
          }, {
            name: 'nr',
            attributeName: {
              localPart: 'nr'
            },
            type: 'attribute'
          }, {
            name: 'endnhier',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'endnhier'
            },
            type: 'attribute'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }, {
            name: 'paperf',
            attributeName: {
              localPart: 'paperf'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Sbquo'
      }, {
        localName: 'Pdeinst',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'tab'
            },
            typeInfo: '.Tab',
            type: 'elementRef'
          }, {
            name: 'formatname',
            attributeName: {
              localPart: 'formatname'
            },
            type: 'attribute'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'size',
            attributeName: {
              localPart: 'size'
            },
            type: 'attribute'
          }, {
            name: 'bold',
            attributeName: {
              localPart: 'bold'
            },
            type: 'attribute'
          }, {
            name: 'italic',
            attributeName: {
              localPart: 'italic'
            },
            type: 'attribute'
          }, {
            name: 'underline',
            attributeName: {
              localPart: 'underline'
            },
            type: 'attribute'
          }, {
            name: 'underlinecolor',
            attributeName: {
              localPart: 'underlinecolor'
            },
            type: 'attribute'
          }, {
            name: 'strikethrough',
            attributeName: {
              localPart: 'strikethrough'
            },
            type: 'attribute'
          }, {
            name: 'doublestrikethrough',
            attributeName: {
              localPart: 'doublestrikethrough'
            },
            type: 'attribute'
          }, {
            name: 'outline',
            attributeName: {
              localPart: 'outline'
            },
            type: 'attribute'
          }, {
            name: 'emboss',
            attributeName: {
              localPart: 'emboss'
            },
            type: 'attribute'
          }, {
            name: 'shadow',
            attributeName: {
              localPart: 'shadow'
            },
            type: 'attribute'
          }, {
            name: 'hidden',
            attributeName: {
              localPart: 'hidden'
            },
            type: 'attribute'
          }, {
            name: 'smallcaps',
            attributeName: {
              localPart: 'smallcaps'
            },
            type: 'attribute'
          }, {
            name: 'allcaps',
            attributeName: {
              localPart: 'allcaps'
            },
            type: 'attribute'
          }, {
            name: 'color',
            attributeName: {
              localPart: 'color'
            },
            type: 'attribute'
          }, {
            name: 'engrave',
            attributeName: {
              localPart: 'engrave'
            },
            type: 'attribute'
          }, {
            name: 'superscript',
            attributeName: {
              localPart: 'superscript'
            },
            type: 'attribute'
          }, {
            name: 'subscript',
            attributeName: {
              localPart: 'subscript'
            },
            type: 'attribute'
          }, {
            name: 'scaling',
            attributeName: {
              localPart: 'scaling'
            },
            type: 'attribute'
          }, {
            name: 'kerning',
            attributeName: {
              localPart: 'kerning'
            },
            type: 'attribute'
          }, {
            name: 'animation',
            attributeName: {
              localPart: 'animation'
            },
            type: 'attribute'
          }, {
            name: 'leftindent',
            attributeName: {
              localPart: 'leftindent'
            },
            type: 'attribute'
          }, {
            name: 'rightindent',
            attributeName: {
              localPart: 'rightindent'
            },
            type: 'attribute'
          }, {
            name: 'spacebefore',
            attributeName: {
              localPart: 'spacebefore'
            },
            type: 'attribute'
          }, {
            name: 'spacebeforeauto',
            attributeName: {
              localPart: 'spacebeforeauto'
            },
            type: 'attribute'
          }, {
            name: 'spaceafter',
            attributeName: {
              localPart: 'spaceafter'
            },
            type: 'attribute'
          }, {
            name: 'spaceafterauto',
            attributeName: {
              localPart: 'spaceafterauto'
            },
            type: 'attribute'
          }, {
            name: 'linespacingrule',
            attributeName: {
              localPart: 'linespacingrule'
            },
            type: 'attribute'
          }, {
            name: 'alignment',
            attributeName: {
              localPart: 'alignment'
            },
            type: 'attribute'
          }, {
            name: 'widowcontrol',
            attributeName: {
              localPart: 'widowcontrol'
            },
            type: 'attribute'
          }, {
            name: 'keepwithnext',
            attributeName: {
              localPart: 'keepwithnext'
            },
            type: 'attribute'
          }, {
            name: 'keeptogether',
            attributeName: {
              localPart: 'keeptogether'
            },
            type: 'attribute'
          }, {
            name: 'pagebreakbefore',
            attributeName: {
              localPart: 'pagebreakbefore'
            },
            type: 'attribute'
          }, {
            name: 'nolinenumber',
            attributeName: {
              localPart: 'nolinenumber'
            },
            type: 'attribute'
          }, {
            name: 'hyphenation',
            attributeName: {
              localPart: 'hyphenation'
            },
            type: 'attribute'
          }, {
            name: 'firstlineindent',
            attributeName: {
              localPart: 'firstlineindent'
            },
            type: 'attribute'
          }, {
            name: 'outlinelevel',
            attributeName: {
              localPart: 'outlinelevel'
            },
            type: 'attribute'
          }, {
            name: 'characterunitleftindent',
            attributeName: {
              localPart: 'characterunitleftindent'
            },
            type: 'attribute'
          }, {
            name: 'characterunitrightindent',
            attributeName: {
              localPart: 'characterunitrightindent'
            },
            type: 'attribute'
          }, {
            name: 'characterunitfirstlineindent',
            attributeName: {
              localPart: 'characterunitfirstlineindent'
            },
            type: 'attribute'
          }, {
            name: 'lineunitbefore',
            attributeName: {
              localPart: 'lineunitbefore'
            },
            type: 'attribute'
          }, {
            name: 'lineunitafter',
            attributeName: {
              localPart: 'lineunitafter'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Thead',
        propertyInfos: [{
            name: 'tr',
            collection: true,
            elementName: {
              localPart: 'tr'
            },
            typeInfo: '.Tr'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }, {
            name: 'dir',
            attributeName: {
              localPart: 'dir'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'hStart',
            attributeName: {
              localPart: 'h-start'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: '_char',
            attributeName: {
              localPart: 'char'
            },
            type: 'attribute'
          }, {
            name: 'charoff',
            attributeName: {
              localPart: 'charoff'
            },
            type: 'attribute'
          }, {
            name: 'valign',
            attributeName: {
              localPart: 'valign'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Ldquo'
      }, {
        localName: 'Col',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }, {
            name: 'dir',
            attributeName: {
              localPart: 'dir'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'hStart',
            attributeName: {
              localPart: 'h-start'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'span',
            attributeName: {
              localPart: 'span'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: '_char',
            attributeName: {
              localPart: 'char'
            },
            type: 'attribute'
          }, {
            name: 'charoff',
            attributeName: {
              localPart: 'charoff'
            },
            type: 'attribute'
          }, {
            name: 'valign',
            attributeName: {
              localPart: 'valign'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Fnen',
        propertyInfos: [{
            name: 'fntext',
            collection: true,
            elementName: {
              localPart: 'fntext'
            },
            typeInfo: '.Fntext'
          }, {
            name: 'fnzeichen',
            elementName: {
              localPart: 'fnzeichen'
            },
            typeInfo: '.Fnzeichen'
          }]
      }, {
        localName: 'U',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Pdvorlage',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'pdeinst'
                },
                typeInfo: '.Pdeinst'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Layoutdaten',
        propertyInfos: [{
            name: 'classes',
            elementName: {
              localPart: 'classes'
            }
          }, {
            name: 'paperf',
            attributeName: {
              localPart: 'paperf'
            },
            type: 'attribute'
          }, {
            name: 'paperw',
            attributeName: {
              localPart: 'paperw'
            },
            type: 'attribute'
          }, {
            name: 'paperh',
            attributeName: {
              localPart: 'paperh'
            },
            type: 'attribute'
          }, {
            name: 'margl',
            attributeName: {
              localPart: 'margl'
            },
            type: 'attribute'
          }, {
            name: 'margr',
            attributeName: {
              localPart: 'margr'
            },
            type: 'attribute'
          }, {
            name: 'margt',
            attributeName: {
              localPart: 'margt'
            },
            type: 'attribute'
          }, {
            name: 'margb',
            attributeName: {
              localPart: 'margb'
            },
            type: 'attribute'
          }, {
            name: 'headerd',
            attributeName: {
              localPart: 'headerd'
            },
            type: 'attribute'
          }, {
            name: 'footerd',
            attributeName: {
              localPart: 'footerd'
            },
            type: 'attribute'
          }, {
            name: 'gutter',
            attributeName: {
              localPart: 'gutter'
            },
            type: 'attribute'
          }, {
            name: 'gutterpos',
            attributeName: {
              localPart: 'gutterpos'
            },
            type: 'attribute'
          }, {
            name: 'deftab',
            attributeName: {
              localPart: 'deftab'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Fntext',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'nr',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'nr'
            },
            type: 'attribute'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Error',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Bdquo'
      }, {
        localName: 'Euro'
      }, {
        localName: 'Uchar',
        propertyInfos: [{
            name: 'code',
            attributeName: {
              localPart: 'code'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TWebDocumentContentReference',
        propertyInfos: [{
            name: 'contentType',
            elementName: {
              localPart: 'ContentType'
            }
          }, {
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dataType',
            elementName: {
              localPart: 'DataType'
            }
          }, {
            name: 'risdok',
            elementName: {
              localPart: 'risdok'
            },
            typeInfo: '.Risdok'
          }, {
            name: 'base64',
            elementName: {
              localPart: 'base64'
            },
            typeInfo: 'Base64Binary'
          }]
      }, {
        localName: 'Addat',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Em14'
      }, {
        localName: 'Lt'
      }, {
        localName: 'S',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'TArrayOfWebDocumentContentReference',
        propertyInfos: [{
            name: 'contentReference',
            collection: true,
            elementName: {
              localPart: 'ContentReference'
            },
            typeInfo: '.TWebDocumentContentReference'
          }]
      }, {
        localName: 'Textbox',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'format',
            attributeName: {
              localPart: 'format'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TArrayOfWebDocumentContentUrl',
        propertyInfos: [{
            name: 'contentUrl',
            collection: true,
            elementName: {
              localPart: 'ContentUrl'
            },
            typeInfo: '.TWebDocumentContentUrl'
          }]
      }, {
        localName: 'Unterschrift',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }, {
            name: 'halign',
            attributeName: {
              localPart: 'halign'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Lsquo'
      }, {
        localName: 'Adid',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Bdash'
      }, {
        localName: 'Tbody',
        propertyInfos: [{
            name: 'tr',
            collection: true,
            elementName: {
              localPart: 'tr'
            },
            typeInfo: '.Tr'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }, {
            name: 'dir',
            attributeName: {
              localPart: 'dir'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'hStart',
            attributeName: {
              localPart: 'h-start'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: '_char',
            attributeName: {
              localPart: 'char'
            },
            type: 'attribute'
          }, {
            name: 'charoff',
            attributeName: {
              localPart: 'charoff'
            },
            type: 'attribute'
          }, {
            name: 'valign',
            attributeName: {
              localPart: 'valign'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Amp'
      }, {
        localName: 'Beschr',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'halign',
            attributeName: {
              localPart: 'halign'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Ueberschrift',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }, {
            name: 'halign',
            attributeName: {
              localPart: 'halign'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Betraglistetgue',
        propertyInfos: [{
            name: 'listelem',
            collection: true,
            elementName: {
              localPart: 'listelem'
            },
            typeInfo: '.Listelem'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Rdquo'
      }, {
        localName: 'Br',
        propertyInfos: [{
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Ziffernliste',
        propertyInfos: [{
            name: 'listelemOrLiteralisteOrSubliteraliste',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'listelem'
                },
                typeInfo: '.Listelem'
              }, {
                elementName: {
                  localPart: 'literaliste'
                },
                typeInfo: '.Literaliste'
              }, {
                elementName: {
                  localPart: 'subliteraliste'
                },
                typeInfo: '.Subliteraliste'
              }, {
                elementName: {
                  localPart: 'strichliste'
                },
                typeInfo: '.Strichliste'
              }, {
                elementName: {
                  localPart: 'schluss'
                },
                typeInfo: '.Schluss'
              }],
            type: 'elements'
          }, {
            name: 'ebene',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'ebene'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Inhaltsvz',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }, {
            name: 'halign',
            attributeName: {
              localPart: 'halign'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Listelem',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'symbol'
                },
                typeInfo: '.Symbol'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Dots'
      }, {
        localName: 'TArrayOfString',
        propertyInfos: [{
            name: 'item',
            collection: true,
            elementName: {
              localPart: 'item'
            }
          }]
      }, {
        localName: 'Nbsp'
      }, {
        localName: 'Abstand',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'halign',
            attributeName: {
              localPart: 'halign'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Aw'
      }, {
        localName: 'DocumentResult',
        propertyInfos: [{
            name: 'error',
            elementName: {
              localPart: 'Error'
            },
            typeInfo: '.TError'
          }, {
            name: 'ogdDocumentMetadata',
            elementName: {
              localPart: 'OGDDocumentMetadata'
            },
            typeInfo: '.TOGDWebDocument'
          }, {
            name: 'status',
            attributeName: {
              localPart: 'status'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Schluss',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }, {
            name: 'ct',
            attributeName: {
              localPart: 'ct'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Wechsel',
        propertyInfos: [{
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Gldsym',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Liste',
        propertyInfos: [{
            name: 'ziffernlisteOrLiteralisteOrSubliteraliste',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'ziffernliste'
                },
                typeInfo: '.Ziffernliste'
              }, {
                elementName: {
                  localPart: 'literaliste'
                },
                typeInfo: '.Literaliste'
              }, {
                elementName: {
                  localPart: 'subliteraliste'
                },
                typeInfo: '.Subliteraliste'
              }, {
                elementName: {
                  localPart: 'strichliste'
                },
                typeInfo: '.Strichliste'
              }, {
                elementName: {
                  localPart: 'betragliste'
                },
                typeInfo: '.Betragliste'
              }, {
                elementName: {
                  localPart: 'betraglistetgue'
                },
                typeInfo: '.Betraglistetgue'
              }, {
                elementName: {
                  localPart: 'erlliste'
                },
                typeInfo: '.Erlliste'
              }, {
                elementName: {
                  localPart: 'schluss'
                },
                typeInfo: '.Schluss'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'Tm'
      }, {
        localName: 'Literaliste',
        propertyInfos: [{
            name: 'listelemOrSubliteralisteOrStrichliste',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'listelem'
                },
                typeInfo: '.Listelem'
              }, {
                elementName: {
                  localPart: 'subliteraliste'
                },
                typeInfo: '.Subliteraliste'
              }, {
                elementName: {
                  localPart: 'strichliste'
                },
                typeInfo: '.Strichliste'
              }, {
                elementName: {
                  localPart: 'schluss'
                },
                typeInfo: '.Schluss'
              }],
            type: 'elements'
          }, {
            name: 'ebene',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'ebene'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Tr',
        propertyInfos: [{
            name: 'thOrTd',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'th'
                },
                typeInfo: '.Th'
              }, {
                elementName: {
                  localPart: 'td'
                },
                typeInfo: '.Td'
              }],
            type: 'elements'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'height',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang'
            },
            type: 'attribute'
          }, {
            name: 'dir',
            attributeName: {
              localPart: 'dir'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'hStart',
            attributeName: {
              localPart: 'h-start'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: '_char',
            attributeName: {
              localPart: 'char'
            },
            type: 'attribute'
          }, {
            name: 'charoff',
            attributeName: {
              localPart: 'charoff'
            },
            type: 'attribute'
          }, {
            name: 'valign',
            attributeName: {
              localPart: 'valign'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TWebDocumentContentUrl',
        propertyInfos: [{
            name: 'dataType',
            elementName: {
              localPart: 'DataType'
            }
          }, {
            name: 'url',
            elementName: {
              localPart: 'Url'
            }
          }]
      }, {
        localName: 'BlockType',
        propertyInfos: [{
            name: 'ueberschriftOrAbsatzOrAusgabe',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }, {
                elementName: {
                  localPart: 'inhaltsvz'
                },
                typeInfo: '.Inhaltsvz'
              }, {
                elementName: {
                  localPart: 'unterschrift'
                },
                typeInfo: '.Unterschrift'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'textbox'
                },
                typeInfo: '.Textbox'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'pre'
                },
                typeInfo: '.Pre'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }, {
                elementName: {
                  localPart: 'div'
                },
                typeInfo: '.Div'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }],
            type: 'elements'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TOGDWebDocument',
        propertyInfos: [{
            name: 'applikation',
            elementName: {
              localPart: 'Applikation'
            }
          }, {
            name: 'dokumentnummer',
            elementName: {
              localPart: 'Dokumentnummer'
            }
          }, {
            name: 'kurztitel',
            elementName: {
              localPart: 'Kurztitel'
            }
          }, {
            name: 'kundmachungsorgan',
            elementName: {
              localPart: 'Kundmachungsorgan'
            }
          }, {
            name: 'typ',
            elementName: {
              localPart: 'Typ'
            }
          }, {
            name: 'artikelParagraphAnlage',
            elementName: {
              localPart: 'ArtikelParagraphAnlage'
            }
          }, {
            name: 'inkrafttretedatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'Inkrafttretedatum'
            },
            typeInfo: 'Calendar',
            type: 'elementRef'
          }, {
            name: 'ausserkrafttretedatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'Ausserkrafttretedatum'
            },
            typeInfo: 'Calendar',
            type: 'elementRef'
          }, {
            name: 'abkuerzung',
            elementName: {
              localPart: 'Abkuerzung'
            }
          }, {
            name: 'unterzeichnungsdatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'Unterzeichnungsdatum'
            },
            typeInfo: 'Calendar',
            type: 'elementRef'
          }, {
            name: 'indizes',
            elementName: {
              localPart: 'Indizes'
            },
            typeInfo: '.TArrayOfString'
          }, {
            name: 'uebergangsrecht',
            elementName: {
              localPart: 'Uebergangsrecht'
            }
          }, {
            name: 'beachteZurGanzenRechtsvorschrift',
            elementName: {
              localPart: 'BeachteZurGanzenRechtsvorschrift'
            }
          }, {
            name: 'beachte',
            elementName: {
              localPart: 'Beachte'
            }
          }, {
            name: 'aenderung',
            elementName: {
              localPart: 'Aenderung'
            }
          }, {
            name: 'langtitel',
            elementName: {
              localPart: 'Langtitel'
            }
          }, {
            name: 'sprachen',
            elementName: {
              localPart: 'Sprachen'
            }
          }, {
            name: 'staaten',
            elementName: {
              localPart: 'Staaten'
            }
          }, {
            name: 'anmerkungZurGanzenRechtsvorschrift',
            elementName: {
              localPart: 'AnmerkungZurGanzenRechtsvorschrift'
            }
          }, {
            name: 'anmerkung',
            elementName: {
              localPart: 'Anmerkung'
            }
          }, {
            name: 'schlagworte',
            elementName: {
              localPart: 'Schlagworte'
            }
          }, {
            name: 'veroeffentlichungsdatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'Veroeffentlichungsdatum'
            },
            typeInfo: 'Calendar',
            type: 'elementRef'
          }, {
            name: 'aenderungsdatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'Aenderungsdatum'
            },
            typeInfo: 'Calendar',
            type: 'elementRef'
          }, {
            name: 'gesetzesnummer',
            elementName: {
              localPart: 'Gesetzesnummer'
            }
          }, {
            name: 'alteDokumentnummer',
            elementName: {
              localPart: 'AlteDokumentnummer'
            }
          }, {
            name: 'dokumentinhalt',
            elementName: {
              localPart: 'Dokumentinhalt'
            },
            typeInfo: '.TArrayOfWebDocumentContentReference'
          }]
      }, {
        localName: 'Symbol',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }],
            type: 'elementRefs'
          }, {
            name: 'stellen',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'stellen'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Div',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'inhaltsvz'
                },
                typeInfo: '.Inhaltsvz'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }, {
                elementName: {
                  localPart: 'textbox'
                },
                typeInfo: '.Textbox'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'unterschrift'
                },
                typeInfo: '.Unterschrift'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }],
            type: 'elementRefs'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'align',
            attributeName: {
              localPart: 'align'
            },
            type: 'attribute'
          }, {
            name: 'clazz',
            attributeName: {
              localPart: 'class'
            },
            type: 'attribute'
          }, {
            name: 'style',
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }, {
            name: 'width',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'twips',
            attributeName: {
              localPart: 'twips'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'TApplikation',
        values: ['Bundesrecht']
      }, {
        type: 'enumInfo',
        localName: 'TWebDocumentDataType',
        values: ['Xml', 'Pdf', 'Gif', 'Jpg', 'Tiff', 'Png']
      }, {
        type: 'enumInfo',
        localName: 'TWebDocumentContentType',
        values: ['MainDocument', 'Attachment']
      }],
    elementInfos: [{
        elementName: {
          localPart: 'rsquo'
        },
        typeInfo: '.Rsquo'
      }, {
        elementName: {
          localPart: 'fzinhalt'
        },
        typeInfo: '.Fzinhalt'
      }, {
        elementName: {
          localPart: 'fntext'
        },
        typeInfo: '.Fntext'
      }, {
        elementName: {
          localPart: 'super'
        },
        typeInfo: '.Super'
      }, {
        elementName: {
          localPart: 'Veroeffentlichungsdatum'
        },
        typeInfo: 'Calendar',
        scope: '.TOGDWebDocument'
      }, {
        elementName: {
          localPart: 's'
        },
        typeInfo: '.S'
      }, {
        elementName: {
          localPart: 'aw'
        },
        typeInfo: '.Aw'
      }, {
        elementName: {
          localPart: 'pdeinst'
        },
        typeInfo: '.Pdeinst'
      }, {
        elementName: {
          localPart: 'layoutdaten'
        },
        typeInfo: '.Layoutdaten'
      }, {
        elementName: {
          localPart: 'bdash'
        },
        typeInfo: '.Bdash'
      }, {
        elementName: {
          localPart: 'tr'
        },
        typeInfo: '.Tr'
      }, {
        elementName: {
          localPart: 'pre'
        },
        typeInfo: '.Pre'
      }, {
        elementName: {
          localPart: 'inhaltsvz'
        },
        typeInfo: '.Inhaltsvz'
      }, {
        elementName: {
          localPart: 'u'
        },
        typeInfo: '.U'
      }, {
        elementName: {
          localPart: 'liste'
        },
        typeInfo: '.Liste'
      }, {
        elementName: {
          localPart: 'subliteraliste'
        },
        typeInfo: '.Subliteraliste'
      }, {
        elementName: {
          localPart: 'schluss'
        },
        typeInfo: '.Schluss'
      }, {
        elementName: {
          localPart: 'gldsym'
        },
        typeInfo: '.Gldsym'
      }, {
        elementName: {
          localPart: 'unterschrift'
        },
        typeInfo: '.Unterschrift'
      }, {
        elementName: {
          localPart: 'textbox'
        },
        typeInfo: '.Textbox'
      }, {
        elementName: {
          localPart: 'ausgabe'
        },
        typeInfo: '.Ausgabe'
      }, {
        elementName: {
          localPart: 'ziffernliste'
        },
        typeInfo: '.Ziffernliste'
      }, {
        elementName: {
          localPart: 'betraglistetgue'
        },
        typeInfo: '.Betraglistetgue'
      }, {
        elementName: {
          localPart: 'caption'
        },
        typeInfo: '.Caption'
      }, {
        elementName: {
          localPart: 'gs'
        },
        typeInfo: '.Gs'
      }, {
        elementName: {
          localPart: 'addat'
        },
        typeInfo: '.Addat'
      }, {
        elementName: {
          localPart: 'rdquo'
        },
        typeInfo: '.Rdquo'
      }, {
        elementName: {
          localPart: 'beschr'
        },
        typeInfo: '.Beschr'
      }, {
        elementName: {
          localPart: 'literaliste'
        },
        typeInfo: '.Literaliste'
      }, {
        elementName: {
          localPart: 'strichliste'
        },
        typeInfo: '.Strichliste'
      }, {
        elementName: {
          localPart: 'nbsp'
        },
        typeInfo: '.Nbsp'
      }, {
        elementName: {
          localPart: 'b'
        },
        typeInfo: '.B'
      }, {
        elementName: {
          localPart: 'adid'
        },
        typeInfo: '.Adid'
      }, {
        elementName: {
          localPart: 'tfoot'
        },
        typeInfo: '.Tfoot'
      }, {
        elementName: {
          localPart: 'lsquo'
        },
        typeInfo: '.Lsquo'
      }, {
        elementName: {
          localPart: 'uchar'
        },
        typeInfo: '.Uchar'
      }, {
        elementName: {
          localPart: 'wechsel'
        },
        typeInfo: '.Wechsel'
      }, {
        elementName: {
          localPart: 'thead'
        },
        typeInfo: '.Thead'
      }, {
        elementName: {
          localPart: 'symbol'
        },
        typeInfo: '.Symbol'
      }, {
        elementName: {
          localPart: 'listelem'
        },
        typeInfo: '.Listelem'
      }, {
        elementName: {
          localPart: 'lt'
        },
        typeInfo: '.Lt'
      }, {
        elementName: {
          localPart: 'euro'
        },
        typeInfo: '.Euro'
      }, {
        elementName: {
          localPart: 'error'
        },
        typeInfo: '.Error'
      }, {
        elementName: {
          localPart: 'em'
        },
        typeInfo: '.Em'
      }, {
        elementName: {
          localPart: 'tm'
        },
        typeInfo: '.Tm'
      }, {
        elementName: {
          localPart: 'gdash'
        },
        typeInfo: '.Gdash'
      }, {
        elementName: {
          localPart: 'bdquo'
        },
        typeInfo: '.Bdquo'
      }, {
        elementName: {
          localPart: 'table'
        },
        typeInfo: '.Table'
      }, {
        elementName: {
          localPart: 'Aenderungsdatum'
        },
        typeInfo: 'Calendar',
        scope: '.TOGDWebDocument'
      }, {
        elementName: {
          localPart: 'div'
        },
        typeInfo: '.Div'
      }, {
        elementName: {
          localPart: 'src'
        }
      }, {
        elementName: {
          localPart: 'link'
        },
        typeInfo: '.Link'
      }, {
        elementName: {
          localPart: 'base64'
        },
        typeInfo: 'Base64Binary'
      }, {
        elementName: {
          localPart: 'ueberschrift'
        },
        typeInfo: '.Ueberschrift'
      }, {
        elementName: {
          localPart: 'Ausserkrafttretedatum'
        },
        typeInfo: 'Calendar',
        scope: '.TOGDWebDocument'
      }, {
        elementName: {
          localPart: 'dots'
        },
        typeInfo: '.Dots'
      }, {
        elementName: {
          localPart: 'abstand'
        },
        typeInfo: '.Abstand'
      }, {
        elementName: {
          localPart: 'Unterzeichnungsdatum'
        },
        typeInfo: 'Calendar',
        scope: '.TOGDWebDocument'
      }, {
        elementName: {
          localPart: 'kidea'
        },
        typeInfo: '.Kidea'
      }, {
        elementName: {
          localPart: 'kzinhalt'
        },
        typeInfo: '.Kzinhalt'
      }, {
        elementName: {
          localPart: 'absatz'
        },
        typeInfo: '.Absatz'
      }, {
        elementName: {
          localPart: 'risdok'
        },
        typeInfo: '.Risdok'
      }, {
        elementName: {
          localPart: 'n'
        },
        typeInfo: '.N'
      }, {
        elementName: {
          localPart: 'tbody'
        },
        typeInfo: '.Tbody'
      }, {
        elementName: {
          localPart: 'feld'
        },
        typeInfo: '.Feld'
      }, {
        elementName: {
          localPart: 'Inkrafttretedatum'
        },
        typeInfo: 'Calendar',
        scope: '.TOGDWebDocument'
      }, {
        elementName: {
          localPart: 'en'
        },
        typeInfo: '.En'
      }, {
        elementName: {
          localPart: 'th'
        },
        typeInfo: '.Th'
      }, {
        elementName: {
          localPart: 'DocumentResult'
        },
        typeInfo: '.DocumentResult'
      }, {
        elementName: {
          localPart: 'lidea'
        },
        typeInfo: '.Lidea'
      }, {
        elementName: {
          localPart: 'nutzdaten'
        },
        typeInfo: '.Nutzdaten'
      }, {
        elementName: {
          localPart: 'fnen'
        },
        typeInfo: '.Fnen'
      }, {
        elementName: {
          localPart: 'br'
        },
        typeInfo: '.Br'
      }, {
        elementName: {
          localPart: 'pdvorlage'
        },
        typeInfo: '.Pdvorlage'
      }, {
        elementName: {
          localPart: 'col'
        },
        typeInfo: '.Col'
      }, {
        elementName: {
          localPart: 'binary'
        },
        typeInfo: '.Binary'
      }, {
        elementName: {
          localPart: 'tab'
        },
        typeInfo: '.Tab'
      }, {
        elementName: {
          localPart: 'sbquo'
        },
        typeInfo: '.Sbquo'
      }, {
        elementName: {
          localPart: 'colgroup'
        },
        typeInfo: '.Colgroup'
      }, {
        elementName: {
          localPart: 'i'
        },
        typeInfo: '.I'
      }, {
        elementName: {
          localPart: 'em14'
        },
        typeInfo: '.Em14'
      }, {
        elementName: {
          localPart: 'adtext'
        },
        typeInfo: '.Adtext'
      }, {
        elementName: {
          localPart: 'betragliste'
        },
        typeInfo: '.Betragliste'
      }, {
        elementName: {
          localPart: 'erlliste'
        },
        typeInfo: '.Erlliste'
      }, {
        elementName: {
          localPart: 'gt'
        },
        typeInfo: '.Gt'
      }, {
        elementName: {
          localPart: 'ldquo'
        },
        typeInfo: '.Ldquo'
      }, {
        elementName: {
          localPart: 'abschnitt'
        },
        typeInfo: '.Abschnitt'
      }, {
        elementName: {
          localPart: 'sub'
        },
        typeInfo: '.Sub'
      }, {
        elementName: {
          localPart: 'td'
        },
        typeInfo: '.Td'
      }, {
        elementName: {
          localPart: 'fnzeichen'
        },
        typeInfo: '.Fnzeichen'
      }, {
        elementName: {
          localPart: 'amp'
        },
        typeInfo: '.Amp'
      }]
  };
  return {
    OGD_DocumentResponse: OGD_DocumentResponse
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OGD_DocumentResponse_Module_Factory);
}
else {
  var OGD_DocumentResponse_Module = OGD_DocumentResponse_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OGD_DocumentResponse = OGD_DocumentResponse_Module.OGD_DocumentResponse;
  }
  else {
    var OGD_DocumentResponse = OGD_DocumentResponse_Module.OGD_DocumentResponse;
  }
}