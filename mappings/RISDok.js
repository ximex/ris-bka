var RISDok_Module_Factory = function () {
  var RISDok = {
    name: 'RISDok',
    typeInfos: [{
        localName: 'Symbol',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Feld',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
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
        localName: 'Schluss',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Ausgabe',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'addat'
                },
                typeInfo: '.Addat'
              }, {
                elementName: {
                  localPart: 'adtext'
                },
                typeInfo: '.Adtext'
              }, {
                elementName: {
                  localPart: 'adid'
                },
                typeInfo: '.Adid'
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
        localName: 'Lsquo'
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
        localName: 'Error',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
              }],
            type: 'elementRefs'
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
        localName: 'Aw'
      }, {
        localName: 'Lidea'
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
        localName: 'Rdquo'
      }, {
        localName: 'Pre',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
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
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'unterschrift'
                },
                typeInfo: '.Unterschrift'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
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
                  localPart: 'pre'
                },
                typeInfo: '.Pre'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }],
            type: 'elementRefs'
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
        localName: 'Ueberschrift',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Dots'
      }, {
        localName: 'Textbox',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Fzinhalt',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }, {
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
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
        localName: 'Sbquo'
      }, {
        localName: 'Div',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
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
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
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
                  localPart: 'unterschrift'
                },
                typeInfo: '.Unterschrift'
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
        localName: 'Abstand',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Gs',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
              }],
            type: 'elementRefs'
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
        localName: 'Adid',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'U',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Em'
      }, {
        localName: 'Listelem',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'symbol'
                },
                typeInfo: '.Symbol'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Inhaltsvz',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Gdash'
      }, {
        localName: 'Fntext',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Bdash'
      }, {
        localName: 'Bdquo'
      }, {
        localName: 'En'
      }, {
        localName: 'Beschr',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Rsquo'
      }, {
        localName: 'Sub',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
              }],
            type: 'elementRefs'
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
        localName: 'N',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
              }],
            type: 'elementRefs'
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
        localName: 'Addat',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
              }],
            type: 'elementRefs'
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
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Ldquo'
      }, {
        localName: 'Adtext',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
              }],
            type: 'elementRefs'
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
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Em14'
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
        localName: 'Uchar',
        propertyInfos: [{
            name: 'code',
            attributeName: {
              localPart: 'code'
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
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Kidea'
      }, {
        localName: 'Link',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
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
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
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
        localName: 'S',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Wechsel',
        propertyInfos: [{
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }]
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
        localName: 'Gt'
      }, {
        localName: 'Tm'
      }, {
        localName: 'Amp'
      }, {
        localName: 'Pdvorlage',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'pdeinst'
                },
                typeInfo: '.Pdeinst'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
        localName: 'Super',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Nbsp'
      }, {
        localName: 'I',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'n'
                },
                typeInfo: '.N'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'br'
                },
                typeInfo: '.Br'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
                  localPart: 'en'
                },
                typeInfo: '.En'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'gldsym'
                },
                typeInfo: '.Gldsym'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'aw'
                },
                typeInfo: '.Aw'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
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
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Euro'
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
        localName: 'Lt'
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
      }],
    elementInfos: [{
        elementName: {
          localPart: 'col'
        },
        typeInfo: '.Col'
      }, {
        elementName: {
          localPart: 'fnzeichen'
        },
        typeInfo: '.Fnzeichen'
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
          localPart: 'error'
        },
        typeInfo: '.Error'
      }, {
        elementName: {
          localPart: 'b'
        },
        typeInfo: '.B'
      }, {
        elementName: {
          localPart: 'betragliste'
        },
        typeInfo: '.Betragliste'
      }, {
        elementName: {
          localPart: 'abstand'
        },
        typeInfo: '.Abstand'
      }, {
        elementName: {
          localPart: 'layoutdaten'
        },
        typeInfo: '.Layoutdaten'
      }, {
        elementName: {
          localPart: 'ausgabe'
        },
        typeInfo: '.Ausgabe'
      }, {
        elementName: {
          localPart: 'addat'
        },
        typeInfo: '.Addat'
      }, {
        elementName: {
          localPart: 'lidea'
        },
        typeInfo: '.Lidea'
      }, {
        elementName: {
          localPart: 'base64'
        },
        typeInfo: 'Base64Binary'
      }, {
        elementName: {
          localPart: 'feld'
        },
        typeInfo: '.Feld'
      }, {
        elementName: {
          localPart: 'lsquo'
        },
        typeInfo: '.Lsquo'
      }, {
        elementName: {
          localPart: 'bdash'
        },
        typeInfo: '.Bdash'
      }, {
        elementName: {
          localPart: 'lt'
        },
        typeInfo: '.Lt'
      }, {
        elementName: {
          localPart: 'wechsel'
        },
        typeInfo: '.Wechsel'
      }, {
        elementName: {
          localPart: 'tab'
        },
        typeInfo: '.Tab'
      }, {
        elementName: {
          localPart: 'link'
        },
        typeInfo: '.Link'
      }, {
        elementName: {
          localPart: 'liste'
        },
        typeInfo: '.Liste'
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
      }, {
        elementName: {
          localPart: 'unterschrift'
        },
        typeInfo: '.Unterschrift'
      }, {
        elementName: {
          localPart: 'en'
        },
        typeInfo: '.En'
      }, {
        elementName: {
          localPart: 'src'
        }
      }, {
        elementName: {
          localPart: 'amp'
        },
        typeInfo: '.Amp'
      }, {
        elementName: {
          localPart: 'gldsym'
        },
        typeInfo: '.Gldsym'
      }, {
        elementName: {
          localPart: 'erlliste'
        },
        typeInfo: '.Erlliste'
      }, {
        elementName: {
          localPart: 'pdvorlage'
        },
        typeInfo: '.Pdvorlage'
      }, {
        elementName: {
          localPart: 'pre'
        },
        typeInfo: '.Pre'
      }, {
        elementName: {
          localPart: 'literaliste'
        },
        typeInfo: '.Literaliste'
      }, {
        elementName: {
          localPart: 'tbody'
        },
        typeInfo: '.Tbody'
      }, {
        elementName: {
          localPart: 'nutzdaten'
        },
        typeInfo: '.Nutzdaten'
      }, {
        elementName: {
          localPart: 'adtext'
        },
        typeInfo: '.Adtext'
      }, {
        elementName: {
          localPart: 'fnen'
        },
        typeInfo: '.Fnen'
      }, {
        elementName: {
          localPart: 'schluss'
        },
        typeInfo: '.Schluss'
      }, {
        elementName: {
          localPart: 'br'
        },
        typeInfo: '.Br'
      }, {
        elementName: {
          localPart: 'sbquo'
        },
        typeInfo: '.Sbquo'
      }, {
        elementName: {
          localPart: 'adid'
        },
        typeInfo: '.Adid'
      }, {
        elementName: {
          localPart: 'textbox'
        },
        typeInfo: '.Textbox'
      }, {
        elementName: {
          localPart: 'tm'
        },
        typeInfo: '.Tm'
      }, {
        elementName: {
          localPart: 'ueberschrift'
        },
        typeInfo: '.Ueberschrift'
      }, {
        elementName: {
          localPart: 's'
        },
        typeInfo: '.S'
      }, {
        elementName: {
          localPart: 'table'
        },
        typeInfo: '.Table'
      }, {
        elementName: {
          localPart: 'symbol'
        },
        typeInfo: '.Symbol'
      }, {
        elementName: {
          localPart: 'euro'
        },
        typeInfo: '.Euro'
      }, {
        elementName: {
          localPart: 'caption'
        },
        typeInfo: '.Caption'
      }, {
        elementName: {
          localPart: 'dots'
        },
        typeInfo: '.Dots'
      }, {
        elementName: {
          localPart: 'abschnitt'
        },
        typeInfo: '.Abschnitt'
      }, {
        elementName: {
          localPart: 'beschr'
        },
        typeInfo: '.Beschr'
      }, {
        elementName: {
          localPart: 'em14'
        },
        typeInfo: '.Em14'
      }, {
        elementName: {
          localPart: 'strichliste'
        },
        typeInfo: '.Strichliste'
      }, {
        elementName: {
          localPart: 'inhaltsvz'
        },
        typeInfo: '.Inhaltsvz'
      }, {
        elementName: {
          localPart: 'fntext'
        },
        typeInfo: '.Fntext'
      }, {
        elementName: {
          localPart: 'bdquo'
        },
        typeInfo: '.Bdquo'
      }, {
        elementName: {
          localPart: 'rdquo'
        },
        typeInfo: '.Rdquo'
      }, {
        elementName: {
          localPart: 'binary'
        },
        typeInfo: '.Binary'
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
          localPart: 'td'
        },
        typeInfo: '.Td'
      }, {
        elementName: {
          localPart: 'div'
        },
        typeInfo: '.Div'
      }, {
        elementName: {
          localPart: 'sub'
        },
        typeInfo: '.Sub'
      }, {
        elementName: {
          localPart: 'listelem'
        },
        typeInfo: '.Listelem'
      }, {
        elementName: {
          localPart: 'i'
        },
        typeInfo: '.I'
      }, {
        elementName: {
          localPart: 'kidea'
        },
        typeInfo: '.Kidea'
      }, {
        elementName: {
          localPart: 'gt'
        },
        typeInfo: '.Gt'
      }, {
        elementName: {
          localPart: 'fzinhalt'
        },
        typeInfo: '.Fzinhalt'
      }, {
        elementName: {
          localPart: 'gs'
        },
        typeInfo: '.Gs'
      }, {
        elementName: {
          localPart: 'em'
        },
        typeInfo: '.Em'
      }, {
        elementName: {
          localPart: 'rsquo'
        },
        typeInfo: '.Rsquo'
      }, {
        elementName: {
          localPart: 'betraglistetgue'
        },
        typeInfo: '.Betraglistetgue'
      }, {
        elementName: {
          localPart: 'subliteraliste'
        },
        typeInfo: '.Subliteraliste'
      }, {
        elementName: {
          localPart: 'thead'
        },
        typeInfo: '.Thead'
      }, {
        elementName: {
          localPart: 'n'
        },
        typeInfo: '.N'
      }, {
        elementName: {
          localPart: 'nbsp'
        },
        typeInfo: '.Nbsp'
      }, {
        elementName: {
          localPart: 'tr'
        },
        typeInfo: '.Tr'
      }, {
        elementName: {
          localPart: 'gdash'
        },
        typeInfo: '.Gdash'
      }, {
        elementName: {
          localPart: 'uchar'
        },
        typeInfo: '.Uchar'
      }, {
        elementName: {
          localPart: 'colgroup'
        },
        typeInfo: '.Colgroup'
      }, {
        elementName: {
          localPart: 'kzinhalt'
        },
        typeInfo: '.Kzinhalt'
      }, {
        elementName: {
          localPart: 'th'
        },
        typeInfo: '.Th'
      }, {
        elementName: {
          localPart: 'risdok'
        },
        typeInfo: '.Risdok'
      }, {
        elementName: {
          localPart: 'tfoot'
        },
        typeInfo: '.Tfoot'
      }, {
        elementName: {
          localPart: 'ziffernliste'
        },
        typeInfo: '.Ziffernliste'
      }]
  };
  return {
    RISDok: RISDok
  };
};
if (typeof define === 'function' && define.amd) {
  define([], RISDok_Module_Factory);
}
else {
  var RISDok_Module = RISDok_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.RISDok = RISDok_Module.RISDok;
  }
  else {
    var RISDok = RISDok_Module.RISDok;
  }
}