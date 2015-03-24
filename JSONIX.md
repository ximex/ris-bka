# JSONIX Documentation

## Generate Mappings
To generate mapping schemas, execute the following command with an custom mapping-name and URL to XSD file
```bash
$ java -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar -d mappings -p OGD_MappingName http://text.example.url/path/to/file.xsd
```
Generates mappings for the `http://text.example.url/path/to/file.xsd` schema in the `mappings\OGD_MappingName.js`; mappings will be placed in the variable `OGD_MappingName`.

### URLs
- Abfrage (request)
  - http://data.bka.gv.at/RIS/XSD/OGD_Request.xsd
- Ergebnis (request)
  - http://data.bka.gv.at/RIS/XSD/OGD_ResponseList.xsd
  - http://data.bka.gv.at/RIS/XSD/OGD_ResponseList_Type.xsd
- Ergebnis (getDocument)
  - http://data.bka.gv.at/RIS/XSD/OGD_DocumentResponse.xsd
  - http://data.bka.gv.at/RIS/XSD/RISDok.xsd
  - http://data.bka.gv.at/RIS/XSD/RISJudikaturNutzdaten.xsd

### Parse XML into JS
```javascript
// Include or require PO.js so that PO variable is available
// For instance, in node.js:
var PO = require('./mappings/PO').PO;

// First we construct a Jsonix context - a factory for unmarshaller (parser)
// and marshaller (serializer)
var context = new Jsonix.Context([PO]);

// Then we create a unmarshaller
var unmarshaller = context.createUnmarshaller();

// Unmarshal an object from the XML retrieved from the URL
unmarshaller.unmarshalURL('po.xml',
    // This callback function will be provided
    // with the result of the unmarshalling
    function (unmarshalled) {
        // Alice Smith
        console.log(unmarshalled.value.shipTo.name);
        // Baby Monitor
        console.log(unmarshalled.value.items.item[1].productName);
    });
```

You can also `unmarshalString`, `unmarshalDocument` and `unmarshalFile`.

### Serialize JS as XML
```javascript
// Create a marshaller
var marshaller = context.createMarshaller();

// Marshal a JavaScript Object as XML (DOM Document)
var doc = marshaller.marshalDocument({
    name: {
        localPart: "purchaseOrder"
    },
    value: {
        orderDate: { year: 1999, month: 10, day: 20 },
        shipTo: {
            country: "US",
            name: "Alice Smith",
            street: "123 Maple Street",
            city: "Mill Valley",
            state: "CA",
            zip: 90952
        },
        billTo: { /* ... */ },
        comment: 'Hurry, my lawn is going wild!',
        items: { /* ... */ }
    }
});
```
