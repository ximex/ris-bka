var RISJudikaturNutzdaten_Module_Factory = function () {
  var RISJudikaturNutzdaten = {
    name: 'RISJudikaturNutzdaten',
    typeInfos: [{
        localName: 'Thead',
        typeName: null,
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
        localName: 'Literaliste',
        typeName: null,
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
        localName: 'Strichliste',
        typeName: null,
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
        localName: 'Betraglistetgue',
        typeName: null,
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
        localName: 'Erlliste',
        typeName: null,
        propertyInfos: [{
            name: 'listelem',
            collection: true,
            elementName: {
              localPart: 'listelem'
            },
            typeInfo: '.Listelem'
          }]
      }, {
        localName: 'Addat',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Betragliste',
        typeName: null,
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
        localName: 'Ausgabe',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'addat'
                },
                typeInfo: '.Addat'
              }, {
                elementName: {
                  localPart: 'adid'
                },
                typeInfo: '.Adid'
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
        localName: 'Em',
        typeName: null
      }, {
        localName: 'Lidea',
        typeName: null
      }, {
        localName: 'N',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Ziffernliste',
        typeName: null,
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
        localName: 'Table',
        typeName: null,
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
        localName: 'Feld',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
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
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
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
        localName: 'Listelem',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'symbol'
                },
                typeInfo: '.Symbol'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Abschnitt',
        typeName: null,
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
        localName: 'Adid',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Super',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Pre',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
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
                  localPart: 'unterschrift'
                },
                typeInfo: '.Unterschrift'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'inhaltsvz'
                },
                typeInfo: '.Inhaltsvz'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
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
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'textbox'
                },
                typeInfo: '.Textbox'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
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
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
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
                  localPart: 's'
                },
                typeInfo: '.S'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Sbquo',
        typeName: null
      }, {
        localName: 'Liste',
        typeName: null,
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
        localName: 'Ldquo',
        typeName: null
      }, {
        localName: 'Br',
        typeName: null,
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
        localName: 'S',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Wechsel',
        typeName: null,
        propertyInfos: [{
            name: 'typ',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Em14',
        typeName: null
      }, {
        localName: 'Error',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Euro',
        typeName: null
      }, {
        localName: 'Kzinhalt',
        typeName: null,
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
        localName: 'Kidea',
        typeName: null
      }, {
        localName: 'Beschr',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Fntext',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Tfoot',
        typeName: null,
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
        localName: 'Inhaltsvz',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Div',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
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
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'inhaltsvz'
                },
                typeInfo: '.Inhaltsvz'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
              }, {
                elementName: {
                  localPart: 'ueberschrift'
                },
                typeInfo: '.Ueberschrift'
              }, {
                elementName: {
                  localPart: 'textbox'
                },
                typeInfo: '.Textbox'
              }, {
                elementName: {
                  localPart: 'absatz'
                },
                typeInfo: '.Absatz'
              }, {
                elementName: {
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
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
        localName: 'Gt',
        typeName: null
      }, {
        localName: 'Unterschrift',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'table'
                },
                typeInfo: '.Table'
              }, {
                elementName: {
                  localPart: 'abstand'
                },
                typeInfo: '.Abstand'
              }, {
                elementName: {
                  localPart: 'ausgabe'
                },
                typeInfo: '.Ausgabe'
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
                  localPart: 'pdvorlage'
                },
                typeInfo: '.Pdvorlage'
              }, {
                elementName: {
                  localPart: 'liste'
                },
                typeInfo: '.Liste'
              }, {
                elementName: {
                  localPart: 'beschr'
                },
                typeInfo: '.Beschr'
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
        localName: 'Col',
        typeName: null,
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
        localName: 'Th',
        typeName: null,
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
        localName: 'Link',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'nbsp'
                },
                typeInfo: '.Nbsp'
              }, {
                elementName: {
                  localPart: 'super'
                },
                typeInfo: '.Super'
              }, {
                elementName: {
                  localPart: 'lt'
                },
                typeInfo: '.Lt'
              }, {
                elementName: {
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
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
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Gdash',
        typeName: null
      }, {
        localName: 'Bdquo',
        typeName: null
      }, {
        localName: 'Bdash',
        typeName: null
      }, {
        localName: 'Textbox',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Gldsym',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Tab',
        typeName: null,
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
        localName: 'Tm',
        typeName: null
      }, {
        localName: 'Binary',
        typeName: null,
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
        localName: 'Dots',
        typeName: null
      }, {
        localName: 'Tbody',
        typeName: null,
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
        localName: 'En',
        typeName: null
      }, {
        localName: 'U',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Amp',
        typeName: null
      }, {
        localName: 'Absatz',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Symbol',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Rdquo',
        typeName: null
      }, {
        localName: 'B',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Adtext',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Ueberschrift',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Sub',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Schluss',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Gs',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Abstand',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Uchar',
        typeName: null,
        propertyInfos: [{
            name: 'code',
            attributeName: {
              localPart: 'code'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Colgroup',
        typeName: null,
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
        localName: 'Lt',
        typeName: null
      }, {
        localName: 'I',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
              }],
            type: 'elementRefs'
          }]
      }, {
        localName: 'Pdvorlage',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'gt'
                },
                typeInfo: '.Gt'
              }, {
                elementName: {
                  localPart: 'i'
                },
                typeInfo: '.I'
              }, {
                elementName: {
                  localPart: 'feld'
                },
                typeInfo: '.Feld'
              }, {
                elementName: {
                  localPart: 'euro'
                },
                typeInfo: '.Euro'
              }, {
                elementName: {
                  localPart: 'sbquo'
                },
                typeInfo: '.Sbquo'
              }, {
                elementName: {
                  localPart: 'u'
                },
                typeInfo: '.U'
              }, {
                elementName: {
                  localPart: 'dots'
                },
                typeInfo: '.Dots'
              }, {
                elementName: {
                  localPart: 'gs'
                },
                typeInfo: '.Gs'
              }, {
                elementName: {
                  localPart: 'sub'
                },
                typeInfo: '.Sub'
              }, {
                elementName: {
                  localPart: 'amp'
                },
                typeInfo: '.Amp'
              }, {
                elementName: {
                  localPart: 'tab'
                },
                typeInfo: '.Tab'
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
                  localPart: 'super'
                },
                typeInfo: '.Super'
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
                  localPart: 'bdash'
                },
                typeInfo: '.Bdash'
              }, {
                elementName: {
                  localPart: 'bdquo'
                },
                typeInfo: '.Bdquo'
              }, {
                elementName: {
                  localPart: 'binary'
                },
                typeInfo: '.Binary'
              }, {
                elementName: {
                  localPart: 'kidea'
                },
                typeInfo: '.Kidea'
              }, {
                elementName: {
                  localPart: 'error'
                },
                typeInfo: '.Error'
              }, {
                elementName: {
                  localPart: 's'
                },
                typeInfo: '.S'
              }, {
                elementName: {
                  localPart: 'b'
                },
                typeInfo: '.B'
              }, {
                elementName: {
                  localPart: 'tm'
                },
                typeInfo: '.Tm'
              }, {
                elementName: {
                  localPart: 'link'
                },
                typeInfo: '.Link'
              }, {
                elementName: {
                  localPart: 'fnzeichen'
                },
                typeInfo: '.Fnzeichen'
              }, {
                elementName: {
                  localPart: 'gdash'
                },
                typeInfo: '.Gdash'
              }, {
                elementName: {
                  localPart: 'wechsel'
                },
                typeInfo: '.Wechsel'
              }, {
                elementName: {
                  localPart: 'uchar'
                },
                typeInfo: '.Uchar'
              }, {
                elementName: {
                  localPart: 'em'
                },
                typeInfo: '.Em'
              }, {
                elementName: {
                  localPart: 'lidea'
                },
                typeInfo: '.Lidea'
              }, {
                elementName: {
                  localPart: 'lsquo'
                },
                typeInfo: '.Lsquo'
              }, {
                elementName: {
                  localPart: 'ldquo'
                },
                typeInfo: '.Ldquo'
              }, {
                elementName: {
                  localPart: 'pdeinst'
                },
                typeInfo: '.Pdeinst'
              }, {
                elementName: {
                  localPart: 'rdquo'
                },
                typeInfo: '.Rdquo'
              }, {
                elementName: {
                  localPart: 'en'
                },
                typeInfo: '.En'
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
                  localPart: 'rsquo'
                },
                typeInfo: '.Rsquo'
              }, {
                elementName: {
                  localPart: 'em14'
                },
                typeInfo: '.Em14'
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
        localName: 'Tr',
        typeName: null,
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
        localName: 'Rsquo',
        typeName: null
      }, {
        localName: 'Fnen',
        typeName: null,
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
        localName: 'Nbsp',
        typeName: null
      }, {
        localName: 'Td',
        typeName: null,
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
        localName: 'Nutzdaten',
        typeName: null,
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
        localName: 'Subliteraliste',
        typeName: null,
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
        localName: 'Pdeinst',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
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
        localName: 'Aw',
        typeName: null
      }, {
        localName: 'Fnzeichen',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
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
        localName: 'Layoutdaten',
        typeName: null,
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
        localName: 'Lsquo',
        typeName: null
      }, {
        localName: 'Caption',
        typeName: null,
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
        localName: 'BlockType',
        typeName: 'blockType',
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
      }],
    elementInfos: [{
        elementName: {
          localPart: 'listelem'
        },
        typeInfo: '.Listelem'
      }, {
        elementName: {
          localPart: 'pdeinst'
        },
        typeInfo: '.Pdeinst'
      }, {
        elementName: {
          localPart: 'gs'
        },
        typeInfo: '.Gs'
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
          localPart: 'tbody'
        },
        typeInfo: '.Tbody'
      }, {
        elementName: {
          localPart: 'uchar'
        },
        typeInfo: '.Uchar'
      }, {
        elementName: {
          localPart: 'br'
        },
        typeInfo: '.Br'
      }, {
        elementName: {
          localPart: 'feld'
        },
        typeInfo: '.Feld'
      }, {
        elementName: {
          localPart: 'rsquo'
        },
        typeInfo: '.Rsquo'
      }, {
        elementName: {
          localPart: 'kzinhalt'
        },
        typeInfo: '.Kzinhalt'
      }, {
        elementName: {
          localPart: 'sub'
        },
        typeInfo: '.Sub'
      }, {
        elementName: {
          localPart: 'tfoot'
        },
        typeInfo: '.Tfoot'
      }, {
        elementName: {
          localPart: 'lidea'
        },
        typeInfo: '.Lidea'
      }, {
        elementName: {
          localPart: 'literaliste'
        },
        typeInfo: '.Literaliste'
      }, {
        elementName: {
          localPart: 'betragliste'
        },
        typeInfo: '.Betragliste'
      }, {
        elementName: {
          localPart: 'tr'
        },
        typeInfo: '.Tr'
      }, {
        elementName: {
          localPart: 'bdash'
        },
        typeInfo: '.Bdash'
      }, {
        elementName: {
          localPart: 'erlliste'
        },
        typeInfo: '.Erlliste'
      }, {
        elementName: {
          localPart: 'textbox'
        },
        typeInfo: '.Textbox'
      }, {
        elementName: {
          localPart: 'base64'
        },
        typeInfo: 'Base64Binary'
      }, {
        elementName: {
          localPart: 'nutzdaten'
        },
        typeInfo: '.Nutzdaten'
      }, {
        elementName: {
          localPart: 'thead'
        },
        typeInfo: '.Thead'
      }, {
        elementName: {
          localPart: 'en'
        },
        typeInfo: '.En'
      }, {
        elementName: {
          localPart: 'adtext'
        },
        typeInfo: '.Adtext'
      }, {
        elementName: {
          localPart: 'link'
        },
        typeInfo: '.Link'
      }, {
        elementName: {
          localPart: 'amp'
        },
        typeInfo: '.Amp'
      }, {
        elementName: {
          localPart: 'strichliste'
        },
        typeInfo: '.Strichliste'
      }, {
        elementName: {
          localPart: 'betraglistetgue'
        },
        typeInfo: '.Betraglistetgue'
      }, {
        elementName: {
          localPart: 'div'
        },
        typeInfo: '.Div'
      }, {
        elementName: {
          localPart: 'lt'
        },
        typeInfo: '.Lt'
      }, {
        elementName: {
          localPart: 'em14'
        },
        typeInfo: '.Em14'
      }, {
        elementName: {
          localPart: 'wechsel'
        },
        typeInfo: '.Wechsel'
      }, {
        elementName: {
          localPart: 'ausgabe'
        },
        typeInfo: '.Ausgabe'
      }, {
        elementName: {
          localPart: 'ldquo'
        },
        typeInfo: '.Ldquo'
      }, {
        elementName: {
          localPart: 'fzinhalt'
        },
        typeInfo: '.Fzinhalt'
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
          localPart: 'gldsym'
        },
        typeInfo: '.Gldsym'
      }, {
        elementName: {
          localPart: 'schluss'
        },
        typeInfo: '.Schluss'
      }, {
        elementName: {
          localPart: 'kidea'
        },
        typeInfo: '.Kidea'
      }, {
        elementName: {
          localPart: 'layoutdaten'
        },
        typeInfo: '.Layoutdaten'
      }, {
        elementName: {
          localPart: 'adid'
        },
        typeInfo: '.Adid'
      }, {
        elementName: {
          localPart: 'fnzeichen'
        },
        typeInfo: '.Fnzeichen'
      }, {
        elementName: {
          localPart: 'super'
        },
        typeInfo: '.Super'
      }, {
        elementName: {
          localPart: 'tab'
        },
        typeInfo: '.Tab'
      }, {
        elementName: {
          localPart: 'liste'
        },
        typeInfo: '.Liste'
      }, {
        elementName: {
          localPart: 'unterschrift'
        },
        typeInfo: '.Unterschrift'
      }, {
        elementName: {
          localPart: 'aw'
        },
        typeInfo: '.Aw'
      }, {
        elementName: {
          localPart: 'inhaltsvz'
        },
        typeInfo: '.Inhaltsvz'
      }, {
        elementName: {
          localPart: 'beschr'
        },
        typeInfo: '.Beschr'
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
          localPart: 'td'
        },
        typeInfo: '.Td'
      }, {
        elementName: {
          localPart: 'u'
        },
        typeInfo: '.U'
      }, {
        elementName: {
          localPart: 'em'
        },
        typeInfo: '.Em'
      }, {
        elementName: {
          localPart: 'th'
        },
        typeInfo: '.Th'
      }, {
        elementName: {
          localPart: 'absatz'
        },
        typeInfo: '.Absatz'
      }, {
        elementName: {
          localPart: 'col'
        },
        typeInfo: '.Col'
      }, {
        elementName: {
          localPart: 'src'
        }
      }, {
        elementName: {
          localPart: 'lsquo'
        },
        typeInfo: '.Lsquo'
      }, {
        elementName: {
          localPart: 'subliteraliste'
        },
        typeInfo: '.Subliteraliste'
      }, {
        elementName: {
          localPart: 'rdquo'
        },
        typeInfo: '.Rdquo'
      }, {
        elementName: {
          localPart: 'ueberschrift'
        },
        typeInfo: '.Ueberschrift'
      }, {
        elementName: {
          localPart: 'fnen'
        },
        typeInfo: '.Fnen'
      }, {
        elementName: {
          localPart: 'gdash'
        },
        typeInfo: '.Gdash'
      }, {
        elementName: {
          localPart: 'addat'
        },
        typeInfo: '.Addat'
      }, {
        elementName: {
          localPart: 'ziffernliste'
        },
        typeInfo: '.Ziffernliste'
      }, {
        elementName: {
          localPart: 'caption'
        },
        typeInfo: '.Caption'
      }, {
        elementName: {
          localPart: 'b'
        },
        typeInfo: '.B'
      }, {
        elementName: {
          localPart: 'fntext'
        },
        typeInfo: '.Fntext'
      }, {
        elementName: {
          localPart: 'n'
        },
        typeInfo: '.N'
      }, {
        elementName: {
          localPart: 'symbol'
        },
        typeInfo: '.Symbol'
      }, {
        elementName: {
          localPart: 'error'
        },
        typeInfo: '.Error'
      }, {
        elementName: {
          localPart: 'gt'
        },
        typeInfo: '.Gt'
      }, {
        elementName: {
          localPart: 'i'
        },
        typeInfo: '.I'
      }, {
        elementName: {
          localPart: 'bdquo'
        },
        typeInfo: '.Bdquo'
      }, {
        elementName: {
          localPart: 'tm'
        },
        typeInfo: '.Tm'
      }, {
        elementName: {
          localPart: 'nbsp'
        },
        typeInfo: '.Nbsp'
      }, {
        elementName: {
          localPart: 'abstand'
        },
        typeInfo: '.Abstand'
      }, {
        elementName: {
          localPart: 's'
        },
        typeInfo: '.S'
      }, {
        elementName: {
          localPart: 'dots'
        },
        typeInfo: '.Dots'
      }, {
        elementName: {
          localPart: 'euro'
        },
        typeInfo: '.Euro'
      }, {
        elementName: {
          localPart: 'abschnitt'
        },
        typeInfo: '.Abschnitt'
      }]
  };
  return {
    RISJudikaturNutzdaten: RISJudikaturNutzdaten
  };
};
if (typeof define === 'function' && define.amd) {
  define([], RISJudikaturNutzdaten_Module_Factory);
}
else {
  var RISJudikaturNutzdaten_Module = RISJudikaturNutzdaten_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.RISJudikaturNutzdaten = RISJudikaturNutzdaten_Module.RISJudikaturNutzdaten;
  }
  else {
    var RISJudikaturNutzdaten = RISJudikaturNutzdaten_Module.RISJudikaturNutzdaten;
  }
}