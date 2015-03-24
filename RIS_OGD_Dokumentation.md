# RIS - OGDService Handbuch

## Abfrage mittels RIS-OGDService
Beim Ris-OGDService (Version 1.3.1) handelt es sich um ein Web-Service, welches maschinelle Anfragen an einzelne RIS-Dokumente unter der Url http://data.bka.gv.at/ris/OGDService.asmx ermöglicht. Es stehen drei Methoden zur Verfügung:
- **version**
  Gibt die aktuelle Versionsnummer zurück
- **request**
  Suche von Dokumenten
- **getDocument**
  Abrufen eines einzelnen Dokuments

Sowohl für die Abfrage (Suche von Dokumenten), als auch für die Rückgabe der Ergebnisse werden XML-Strukturen verwendet, die folgenden XML-Schema-Dateien entsprechen müssen:
- Abfrage (request)
  http://data.bka.gv.at/RIS/XSD/OGD_Request.xsd
- Ergebnis (request)
  http://data.bka.gv.at/RIS/XSD/OGD_ResponseList.xsd mit
  http://data.bka.gv.at/RIS/XSD/OGD_ResponseList_Type.xsd
  inkludiert
- Ergebnis (getDocument)
  http://data.bka.gv.at/RIS/XSD/OGD_DocumentResponse.xsd mit
  http://data.bka.gv.at/RIS/XSD/RISDok.xsd inkludiert darunter. mit
  http://data.bka.gv.at/RIS/XSD/RISJudikaturNutzdaten.xsd
  inkludiert

## Testen des RIS-OGDService

### Aufrufen der Methode „version“
Die Erreichbarkeit des RIS-OGD-Service kann mit der Methode **„version“** getestet werden.
Nachfolgend ein Beispiel für den entsprechenden SOAP-Request:
```xml
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <version xmlns="http://data.bka.gv.at/"/>
  </soap:Body>
</soap:Envelope>
```
Als Ergebnis erhalten Sie einen SOAP-Response mit folgendem Inhalt:
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <versionResponse xmlns="http://ogd.bka.gv.at/">
      <versionResult>OGD_1.3.0</versionResult>
    </versionResponse>
  </soap:Body>
</soap:Envelope>
```

##Suche von Dokumenten
Die Methode **request** erfordert zwei Parameter:
- **application**
  Derzeit immer „Br“ (Bundesrecht konsolidiert)
- **query**
  Beinhaltet die Suchabfrage als XML-Struktur, gemäß dem Schema http://data.bka.gv.at/RIS/XSD/OGD_Request.xsd

### Erzeugen einer Request XML-Struktur
Eine Request XML-Struktur gliedert sich in drei Abschnitte:

#### Suchkriterien:
Es stehen folgende Suchkriterien zur Verfügung:
- **Suchworte**
  Suche über den gesamten Inhalt des Dokuments.
  Typ: PhraseSearchExpression
- **Titel**
  Suche nach Titel oder Abkürzung der Rechtsvorschrift.
  Typ: PhraseSearchExpression
- **Index**
  Suche nach der Indexnummer gemäß dem „Systematischen Verzeichnis des Bundesrechts“.
  Typ: PhraseSearchExpression
- **Abschnitt**
  Suche nach der Nummer bzw. dem Buchstaben der Gliederungseinheit ("Artikel", "Paragraph", "Anlage")
  NummerVon (Typ: integer) - NummerBis (Typ: integer)
  BuchstabeVon (Typ: string) - BuchstabeBis (Typ: string)
  Typ (NormabschnittTyp: "Alle", "Artikel", "Paragraph", "Anlage")
- **FassungVom**
  Angabe jenes Datums, zu dem sich die Rechtsvorschrift in Kraft befinden soll.
  Wird kein Datum eingetragen, werden alle Dokumente zurückgegeben, unabhängig davon, ob sie in Kraft sind.
  Typ: date
- **Kundmachungsorgan**
  Suche nach dem Kundmachungsorgan (z.B. "BGBl. I Nr. ", "BGBl. II Nr. ", "BGBl. III Nr. ", "JGS Nr.").
  Typ: PhraseSearchExpression
- **Kundmachungsorgannummer**
  Suche nach der Nummer des Kundmachungsorgans (z.B. 25/2012).
  Typ: PhraseSearchExpression
- **ImRisSeit**
  Suche nach dem Zeitpunkt, zu dem das Dokument erstmals in das RIS aufgenommen oder geändert wurde.
  ChangeSetInterval: "Undefined", "EinerWoche", "ZweiWochen", "EinemMonat", "DreiMonaten", "SechsMonaten", "EinemJahr"

Als **Suchoperatoren** stehen folgende Möglichkeiten zur Verfügung:
- **UND**
  Um eine UND-Verknüpfung zu erzielen, muss die entsprechende „SearchExpression“ vom Typ „AndSearchExpression“ verwendet werden.
  ```xml
  <SearchExpression xsi:type="AndSearchExpression">
    <Expressions xsi:type="ArrayOfSearchExpression">
      <SearchExpression xsi:type="PhraseSearchExpression">
        <Value>Kind</Value>
      </SearchExpression>
      <SearchExpression xsi:type="PhraseSearchExpression">
        <Value>Ehe</Value>
      </SearchExpression>
    </Expressions>
  </SearchExpression>
  ```
- **ODER**
  Um eine ODER-Verknüpfung zu erzielen, muss die entsprechende „SearchExpression“ vom Typ „OrSearchExpression“ verwendet werden.
  ```xml
  <SearchExpression xsi:type="OrSearchExpression">
    <Expressions xsi:type="ArrayOfSearchExpression">
      <SearchExpression xsi:type="PhraseSearchExpression">
        <Value>Scheidung</Value>
      </SearchExpression>
        <SearchExpression xsi:type="PhraseSearchExpression">
      <Value>Ehe</Value>
      </SearchExpression>
    </Expressions>
  </SearchExpression>
  ```
- **NICHT**
  Um eine Suche abzusetzen, in deren Ergebnis ein Begriff nicht enthalten sein soll, muss die entsprechende „SearchExpression“ vom Typ „NotSearchExpression“ verwendet werden.
  ```xml
  <Expressions xsi:type="ArrayOfSearchExpression">
    <SearchExpression xsi:type="PhraseSearchExpression">
      <Value>Scheidung</Value>
    </SearchExpression>
    <SearchExpression xsi:type="NotSearchExpression">
      <Expression xsi:type="PhraseSearchExpression">
        <Value>Ehe</Value>
      </Expression>
    </SearchExpression>
  </Expressions>
  ```
- **Maskierung** mit Stern
  Es werden Begriffe gefunden, die statt „*“ ein oder mehrere Zeichen enthalten. Die Maskierung ist nur am Ende eines Suchbegriffes zulässig.
  ```xml
  <SearchExpression xsi:type="PhraseSearchExpression">
    <Value>Kind*</Value>
  </SearchExpression>
  ```

#### Seiteninformationen:
Das Ergebnis der Abfrage wird in Seiten aufgeteilt zurückgegeben. Mittels des Elements „DokumenteProSeite“ können Sie die Anzahl der gefundenen Dokumente pro Seite festlegen. Im Element „Seitennummer“ geben Sie an, welche Seite retourniert werden soll.
- **DokumenteProSeite**
  Typ: string "Ten", "Twenty", "Fifty", "OneHundred"
- **Seitennummer**
  Typ: integer

#### Sortierung:
Im Element „Sortierung" wird definiert, in welcher Sortierreihenfolge bzw. nach welchem Element sortiert werden soll.
- **SortDirection**
  Typ: string "Ascending", "Descending"
- **SortedByColumn**
  Typ: string "ArtikelParagraphAnlage", "Kurzinformation"

Nachfolgend ein Beispiel für einen Request, der die meisten der möglichen Suchoptionen beinhaltet.
```xml
<OGDSearchRequest xmlns="http://ris.bka.gv.at/Search/1.3/OGD" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Suchworte xsi:type="OrSearchExpression">
    <Expressions xsi:type="ArrayOfSearchExpression">
      <SearchExpression xsi:type="AndSearchExpression">
        <Expressions xsi:type="ArrayOfSearchExpression">
          <SearchExpression xsi:type="PhraseSearchExpression">
            <Value>Kind</Value>
          </SearchExpression>
          <SearchExpression xsi:type="PhraseSearchExpression">
            <Value>Ehe</Value>
          </SearchExpression>
        </Expressions>
      </SearchExpression>
      <SearchExpression xsi:type="PhraseSearchExpression">
        <Value>Scheidung</Value>
      </SearchExpression>
    </Expressions>
  </Suchworte>
  <Titel xsi:type="PhraseSearchExpression">
    <Value>Allgemeines bürgerliches Gesetzbuch</Value>
  </Titel>
  <Index xsi:type="PhraseSearchExpression">
    <Value>20/01</Value>
  </Index>
  <Abschnitt>
    <NummerVon>161</NummerVon>
    <NummerBis>180</NummerBis>
    <Typ>Paragraph</Typ>
  </Abschnitt>
  <FassungVom>2012-04-10</FassungVom>
  <Kundmachungsorgan xsi:type="PhraseSearchExpression">
    <Value>JGS Nr.</Value>
  </Kundmachungsorgan>
  <Kundmachungsorgannummer xsi:type="PhraseSearchExpression">
    <Value>946/1811 </Value>
  </Kundmachungsorgannummer>
  <ImRisSeit>Undefined</ImRisSeit>
  <DokumenteProSeite>Twenty</DokumenteProSeite>
  <Seitennummer>1</Seitennummer>
  <Sortierung>
    <SortDirection>Ascending</SortDirection>
    <SortedByColumn>Kurzinformation</SortedByColumn>
  </Sortierung>
</OGDSearchRequest>
```

### Aufrufen der Methode „request“
Hier finden Sie den SOAP-Request, anhand des obigen Beispiels. Das Request-XML wird HTML-enkodiert dem Parameter „query“ übergeben.
```xml
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <request xmlns="http://ogd.bka.gv.at/">
      <application>Br</application>
      <query>
        &lt;OGDSearchRequest xmlns="http://ris.bka.gv.at/Search/1.3/OGD"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"&gt; ...
        .
        .
        .
        ... &lt;/OGDSearchRequest&gt;
      </query>
    </request>
  </soap:Body>
</soap:Envelope>
```
Falls in einem Suchbegriff das Zeichen „&“ verwendet wird, ist folgende HTML-Enkodierung erforderlich.
```xml
&lt;SearchExpression xsi:type="PhraseSearchExpression"&gt;
&lt;Value&gt;'Gmbh &amp;amp; Co.'&lt;/Value&gt;
&lt;/SearchExpression&gt;
```

### Struktur der Ergebnisliste
Als Ergebnis erhalten Sie einen entsprechenden SOAP-Response mit folgendem, ebenfalls HTML-enkodiertem Inhalt („requestResult“):
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <requestResponse xmlns="http://ogd.bka.gv.at/">
      <requestResult>
        &lt;?xml version="1.0" encoding="utf-8"?&gt;
        &lt;OGDSearchResult status="ok" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"&gt;
        &lt;SearchDocumentsResult&gt;
        &lt;Hits pageNumber="1" pageSize="20"
        xmlns="http://ris.bka.gv.at/Search/1.3/OGD"&gt;4&lt;/Hits&gt;
        &lt;DocumentReferences xmlns="http://ris.bka.gv.at/Search/1.3/OGD"&gt;
        &lt;OGDDocumentReference&gt;
        &lt;Applikation&gt;Bundesrecht&lt;/Applikation&gt;
        &lt;Dokumentnummer&gt;NOR40052761&lt;/Dokumentnummer&gt;
        &lt;ArtikelParagraphAnlage&gt;§ 161&lt;/ArtikelParagraphAnlage&gt;
        &lt;Kurzinformation&gt;Allgemeines bürgerliches Gesetzbuch&lt;/Kurzinformation&gt;
        &lt;DokumentUrl&gt;&lt;![CDATA[http://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&a
        mp;Dokumentnummer=NOR40052761]]&gt;&lt;/DokumentUrl&gt;
        &lt;/OGDDocumentReference&gt;
        &lt;OGDDocumentReference&gt;
        &lt;Applikation&gt;Bundesrecht&lt;/Applikation&gt;
        &lt;Dokumentnummer&gt;NOR40013328&lt;/Dokumentnummer&gt;
        &lt;ArtikelParagraphAnlage&gt;§ 175&lt;/ArtikelParagraphAnlage&gt;
        &lt;Kurzinformation&gt;Allgemeines bürgerliches Gesetzbuch&lt;/Kurzinformation&gt;
        &lt;DokumentUrl&gt;&lt;![CDATA[http://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&a
        mp;Dokumentnummer=NOR40013328]]&gt;&lt;/DokumentUrl&gt;
        &lt;/OGDDocumentReference&gt;
        &lt;OGDDocumentReference&gt;
        &lt;Applikation&gt;Bundesrecht&lt;/Applikation&gt;
        &lt;Dokumentnummer&gt;NOR40013331&lt;/Dokumentnummer&gt;
        &lt;ArtikelParagraphAnlage&gt;§ 177&lt;/ArtikelParagraphAnlage&gt;
        &lt;Kurzinformation&gt;Allgemeines bürgerliches Gesetzbuch&lt;/Kurzinformation&gt;
        &lt;DokumentUrl&gt;&lt;![CDATA[http://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&a
        mp;Dokumentnummer=NOR40013331]]&gt;&lt;/DokumentUrl&gt;
        &lt;/OGDDocumentReference&gt;
        &lt;OGDDocumentReference&gt;
        &lt;Applikation&gt;Bundesrecht&lt;/Applikation&gt;
        &lt;Dokumentnummer&gt;NOR40013332&lt;/Dokumentnummer&gt;
        &lt;ArtikelParagraphAnlage&gt;§ 177a&lt;/ArtikelParagraphAnlage&gt;
        &lt;Kurzinformation&gt;Allgemeines bürgerliches Gesetzbuch&lt;/Kurzinformation&gt;
        &lt;DokumentUrl&gt;&lt;![CDATA[http://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&a
        mp;Dokumentnummer=NOR40013332]]&gt;&lt;/DokumentUrl&gt;
        &lt;/OGDDocumentReference&gt;
        &lt;/DocumentReferences&gt;
        &lt;/SearchDocumentsResult&gt;
        &lt;/OGDSearchResult&gt;
      </requestResult>
    </requestResponse>
  </soap:Body>
</soap:Envelope>
```
Im Element „Hits“ wird angezeigt, dass im konkreten Fall vier Treffer zurückgegeben werden. Aus den Attributen „pageNumber“ und „pageSize“ ist ersichtlich, dass die Seite 1 retourniert wurde bzw. max. 20 Dokumente pro Seite ausgegeben werden.
Die pro Treffer angezeigten Metadaten werden jeweils im Element „OGDDocumentReference“ dargestellt. Folgende Informationen stehen pro gefundenem Dokument zur Verfügung:
- **Applikation**
  Derzeit immer „Bundesrecht“
- **Dokumentnummer**
  Eindeutige Bezeichnung des Dokuments, mit welcher die Methode „getDocument“ aufgerufen werden kann, um den gesamten Dokumentinhalt abzurufen
- **ArtikelParagraphAnlage**
  Nummer und allenfalls Buchstabe der Gliederungseinheit
- **Kurzinformation**
  Kurztitel der Rechtsnorm
- **DokumentUrl**
  Link zum Dokument im RIS (http://www.ris.bka.gv.at/...)

## Download eines konkreten Dokuments

### Aufrufen der Methode „getDocument“
Die Methode „getDocument“ dient dazu, um den gesamten Dokumentinhalt abzurufen. Folgende Parameter sind zu übergeben:
- **Application**
  Derzeit immer „Br“ (Bundesrecht konsolodiert)
- **docId**
  Beinhaltet die Dokumentnummer
```xml
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <getDocument xmlns="http://ogd.bka.gv.at/">
      <application>Br</application>
      <docId>NOR40091435</docId>
    </getDocument>
  </soap:Body>
</soap:Envelope>
```

### Struktur eines Dokuments
Das Ergebnis des Aufrufs „getDocument“ ist ein SOAP-Response mit enkodiertem Inhalt („DocumentResult“). Dieser gliedert sich in zwei Teile, die Metadaten (beschreibende Informationen zum Dokument) und die Nutzdaten (formatierter Text der Rechtsnorm).
Sofern der Aufruf erfolgreich abgearbeitet wurde, beinhaltet das Attribut „status“ im Element „DocumentResult“ den Wert „ok“. Ein Fehlerfall wird weiter unten dargestellt.

#### Beschreibung der Metadaten:
- **Applikation**
  Derzeit immer „Bundesrecht“
- **Dokumentnummer**
  Eindeutige Bezeichnung des Dokuments
- **Kurztitel**
  Kurztitel der Rechtsnorm
- **Kundmachungsorgan**
  Hinweis auf das Kundmachungsorgan z.B. BGBl. Nr.
- **Typ**
  Typ der Rechtsvorschrift z.B. BG (Bundesgesetz), V (Verordnung), K (Kundmachung)
- **ArtikelParagraphAnlage**
  Gliederungsart der Rechtsvorschrift z.B. § 5, Art. 10, Anl. 2
- **Inkrafttretedatum**
  Datum des Inkrafttretens der Rechtsvorschrift
- **Ausserkrafttretedatum**
  Datum des Ausserkrafttretens der Rechtsvorschrift
- **Abkuerzung**
  Abkürzung der Rechtsvorschrift z.B. StVO, ABGB
- **Unterzeichnungsdatum**
  Unterzeichnungsdatum eines Staatsvertrages
- **Indizes**
  Index des österreichischen Bundesrechts z.B. 16/02 Rundfunk
- **Uebergangsrecht**
  Hinweis, dass es sich bei dieser Rechtsvorschrift um ein Übergangsrecht handelt
- **BeachteZurGanzenRechtsvorschrift**
  Beachte gilt für alle Dokumente (= Paragraph/Artikel/Anlage) einer Rechtsnorm
- **Beachte**
  Beachte für die konkrete Rechtsvorschrift
- **Aenderung**
  Angabe der BGBl-Nummern, welche die konkrete Rechtsnorm novelliert haben
- **Langtitel**
  Langtitel der Rechtsvorschrift
- **Sprachen**
  Angabe der authentischen Sprachen, in denen ein Staatsvertrag abgeschlossen wurde
- **Staaten**
  Angabe der Staaten, die dem Staatsvertrag beigetreten sind
- **AnmerkungZurGanzenRechtsvorschrift**
  Anmerkung gilt für alle Dokumente (=Paragraph/Artikel/Anlage) einer Rechtsnorm
- **Anmerkung**
  Anmerkung für die konkrete Rechtsvorschrift
- **Schlagworte**
  Schlagworte für die konkrete Rechtsvorschrift
- **Veroeffentlichungsdatum**
  Datum, an dem das Dokument erstmalig im RIS veröffentlicht wurde
- **Aenderungsdatum**
  Datum, an dem das Dokument zuletzt im RIS aktualisiert wurde
- **Gesetzesnummer**
  Angabe zur nichtamtlichen Gesetzesnummer einer Rechtsnorm, wobei alle Dokumente, die Teil dieser Rechtsnorm sind, die gleiche Gesetzesnummer haben
- **AlteDokumentnummer**
  Hinweis auf eine frühere interne Dokumentnummer

#### Beschreibung der Dokumentliste:
Das Element „Dokumentinhalt“ enthält die formatierten Nutzdaten. In den meisten Fällen wird der gesamte Inhalt der Rechtsvorschrift in *einem* Dokument (Hauptdokument) dargestellt. Es kann jedoch auch vorkommen, dass es zu einem Hauptdokument eine oder mehrere Anlagen gibt. In diesem Fall kommt das Element „ContentReference“ mehrfach vor.
- **ContentType**
  Kann die Werte „MainDocument“ oder „Attachment“ beinhalten.
- **Name**
  Im Element „Name“ ist entweder der Wert „Hauptdokument“ oder die individuelle Bezeichnung einer Anlage (z.B. „Anlage 1“, Anlage A“) enthalten.
- **DataType**
  Im Element „DataType“ befindet sich die Angabe zum Dateiformat, wobei das Hauptdokument immer den Wert „Xml“ aufweist. Bei Anlagen sind folgende Werte möglich (Xml, Pdf, Gif, Jpg, Tiff, Png).

#### Beschreibung derNutzdaten:
Die formatierten Nutzdaten sind im Element „nutzdaten“ zu finden und entsprechen dem Schema „RISJudikaturNutzdaten.xsd“.
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <getDocumentResponse xmlns="http://ogd.bka.gv.at/">
      <getDocumentResult>
        &lt;DocumentResult status="ok"&gt;
        &lt;OGDDocumentMetadata&gt;
        &lt;Applikation&gt;Bundesrecht&lt;/Applikation&gt;
        &lt;Dokumentnummer&gt;NOR40091435&lt;/Dokumentnummer&gt;
        &lt;Kurztitel&gt;Elektrizitätsstatistikverordnung 2007&lt;/Kurztitel&gt;
        &lt;Kundmachungsorgan&gt;BGBl. II Nr. 284/2007&lt;/Kundmachungsorgan&gt;
        &lt;Typ&gt;V&lt;/Typ&gt;
        &lt;ArtikelParagraphAnlage&gt;§ 5&lt;/ArtikelParagraphAnlage&gt;
        &lt;Inkrafttretedatum&gt;2007-11-01&lt;/Inkrafttretedatum&gt;
        &lt;Ausserkrafttretedatum xsi:nil="true" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        /&gt;
        &lt;Unterzeichnungsdatum xsi:nil="true" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        /&gt;
        &lt;Indizes&gt;
        &lt;item&gt;58/02 Energierecht&lt;/item&gt;
        &lt;/Indizes&gt;
        &lt;Schlagworte&gt;Wärmeabgabe&lt;/Schlagworte&gt;
        &lt;Veroeffentlichungsdatum xsi:nil="true" xmlns:xsi="http://www.w3.org/2001/XMLSchema-
        instance" /&gt;
        &lt;Aenderungsdatum xsi:nil="true" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" /&gt;
        &lt;Gesetzesnummer&gt;20005498&lt;/Gesetzesnummer&gt;
        &lt;Dokumentinhalt&gt;
        &lt;ContentReference&gt;
        &lt;ContentType&gt;MainDocument&lt;/ContentType&gt;
        Stand: 30.10.2012
        Seite 9RIS-OGDServices Handbuch
        &lt;Name&gt;Hauptdokument&lt;/Name&gt;
        &lt;DataType&gt;Xml&lt;/DataType&gt;
        &lt;risdok&gt;
        &lt;metadaten /&gt;
        &lt;nutzdaten&gt;
        &lt;abschnitt nr="1" typ="ns" paperf="h" endnhier="true"&gt;&lt;kzinhalt typ="p"&gt;&lt;absatz typ="kz"
        halign="j"&gt;&lt;tab align="z" position="212,65" leader="o" /&gt;&lt;tab align="r" position="425,25" leader="o"
        /&gt;Bundesrecht&lt;/absatz&gt;&lt;/kzinhalt&gt;&lt;kzinhalt typ="f"&gt;&lt;absatz typ="kz"
        halign="j"&gt;&lt;tab align="z" position="212,65" leader="o" /&gt;&lt;tab align="r" position="425,25" leader="o"
        /&gt;Bundesrecht&lt;/absatz&gt;&lt;/kzinhalt&gt;&lt;fzinhalt typ="p"&gt;&lt;absatz typ="fz"
        halign="j"&gt;www.ris.bka.gv.at&lt;tab align="z" position="212,65" leader="o" /&gt;&lt;tab align="r"
        position="425,25" leader="o" /&gt;Seite &lt;feld code="+PAGE++%5C%2A+MERGEFORMAT+"&gt;1&lt;/feld&gt;
        von &lt;feld
        code="+NUMPAGES++%5C%2A+MERGEFORMAT+"&gt;1&lt;/feld&gt;&lt;/absatz&gt;&lt;/fzinhalt&gt;&lt;fzinhalt
        typ="f"&gt;&lt;absatz typ="fz" halign="j"&gt;www.ris.bka.gv.at&lt;tab align="z" position="212,65" leader="o"
        /&gt;&lt;tab align="r" position="425,25" leader="o" /&gt;Seite &lt;feld
        code="+PAGE++%5C%2A+MERGEFORMAT+"&gt;1&lt;/feld&gt; von &lt;feld
        code="+NUMPAGES++%5C%2A+MERGEFORMAT+"&gt;1&lt;/feld&gt;&lt;/absatz&gt;&lt;/fzinhalt&gt;&lt;uebersch
        rift typ="titel" halign="j"&gt;Kurztitel&lt;/ueberschrift&gt;&lt;absatz typ="erltext" ct="kurztitel"
        halign="j"&gt;Elektrizitätsstatistikverordnung 2007&lt;/absatz&gt;&lt;ueberschrift typ="titel"
        halign="j"&gt;Kundmachungsorgan&lt;/ueberschrift&gt;&lt;absatz typ="erltext" ct="kundmachungsorgan"
        halign="j"&gt;BGBl. II Nr. 284/2007&lt;/absatz&gt;&lt;ueberschrift typ="titel"
        halign="j"&gt;§/Artikel/Anlage&lt;/ueberschrift&gt;&lt;absatz typ="erltext" ct="artikel_anlage" halign="j"&gt;§
        5&lt;/absatz&gt;&lt;ueberschrift typ="titel" halign="j"&gt;Inkrafttretensdatum&lt;/ueberschrift&gt;&lt;absatz
        typ="erltext" halign="j"&gt;01.11.2007&lt;/absatz&gt;&lt;ueberschrift typ="titel"
        halign="j"&gt;Text&lt;/ueberschrift&gt;&lt;absatz typ="erltext" ct="text"
        halign="c"&gt;&lt;b&gt;Monatswerte&lt;/b&gt;&lt;/absatz&gt;&lt;abstand ct="text" halign="l" /&gt;&lt;absatz
        typ="abs" ct="text" halign="j"&gt;§ 5. (1) Die Netzbetreiber mit einer unmittelbaren Abgabe an Endverbraucher
        von zumindest 40 GWh im vergangenen Kalenderjahr haben für die Erhebungsperiode jeweils eines
        Kalendermonats zu erheben:&lt;/absatz&gt;&lt;liste&gt;&lt;ziffernliste ebene="1"&gt;&lt;listelem
        ct="text"&gt;&lt;symbol stellen="2"&gt;1.&lt;/symbol&gt;die gesamte eingespeiste Erzeugung elektrischer
        Energie aus Kraftwerken (physikalisch);&lt;/listelem&gt;&lt;listelem ct="text"&gt;&lt;symbol
        stellen="2"&gt;2.&lt;/symbol&gt;die physikalischen Importe elektrischer Energie über die einzelnen Leitungen,
        getrennt nach Leitungen;&lt;/listelem&gt;&lt;listelem ct="text"&gt;&lt;symbol
        stellen="2"&gt;3.&lt;/symbol&gt;die physikalischen Exporte elektrischer Energie über die einzelnen Leitungen,
        getrennt nach Leitungen;&lt;/listelem&gt;&lt;listelem ct="text"&gt;&lt;symbol
        stellen="2"&gt;4.&lt;/symbol&gt;die unmittelbare Abgabe an Endverbraucher unter Angabe der Netzverluste und
        der Abgabe an Kraftwerke für Pumpspeicherung;&lt;/listelem&gt;&lt;listelem ct="text"&gt;&lt;symbol
        stellen="2"&gt;5.&lt;/symbol&gt;die gesamte Abgabe an Netzgebiete in der eigenen Regelzone außerhalb des
        österreichischen Bundesgebiets;&lt;/listelem&gt;&lt;listelem ct="text"&gt;&lt;symbol
        stellen="2"&gt;6.&lt;/symbol&gt;die gesamte Abgabe an lastganggemessene
        Endverbraucher.&lt;/listelem&gt;&lt;/ziffernliste&gt;&lt;/liste&gt;&lt;absatz typ="abs" ct="text" halign="j"&gt;(2)
        Die Erzeuger haben für die Erhebungsperiode jeweils eines Kalendermonats für Kraftwerke mit einer
        Engpassleistung von mehr als 10 MW und die Eigenerzeuger für die Erhebungsperiode jeweils eines
        Kalendermonats für Kraftwerke mit einer Engpassleistung von mehr als 5 MW zu
        erheben:&lt;/absatz&gt;&lt;liste&gt;&lt;ziffernliste ebene="1"&gt;&lt;listelem ct="text"&gt;&lt;symbol
        stellen="2"&gt;1.&lt;/symbol&gt;bei Wasserkraftwerken die gesamte Brutto-Stromerzeugung getrennt nach
        Kraftwerkstypen;&lt;/listelem&gt;&lt;listelem ct="text"&gt;&lt;symbol stellen="2"&gt;2.&lt;/symbol&gt;bei
        Laufkraftwerken darüber hinaus das Regelarbeitsvermögen und das Arbeitsvermögen;&lt;/listelem&gt;&lt;listelem
        ct="text"&gt;&lt;symbol stellen="2"&gt;3.&lt;/symbol&gt;bei Speicherkraftwerken darüber hinaus den
        Energieinhalt, bezogen auf den Monatsletzten, getrennt nach Speichern, unter Angabe des Verbrauches für
        Pumpspeicherung;&lt;/listelem&gt;&lt;listelem ct="text"&gt;&lt;symbol stellen="2"&gt;4.&lt;/symbol&gt;bei
        Wärmekraftwerken die Brutto-Stromerzeugung getrennt nach Kraftwerksblock und Primärenergieträgern sowie
        bei Anlagen mit Kraft-Wärme-Kopplung darüber hinaus die Wärmeerzeugung und -abgabe getrennt nach
        Kraftwerksblock und Primärenergieträgern; weiters den Eigenverbrauch für Erzeugung einschließlich
        Transformatorverluste sowie die Art und Menge der für die Erzeugung elektrischer Energie und Wärme
        bestimmten Primärenergieträger, unter Angabe von Verbrauch und Lagerbestand zum
        Monatsletzten;&lt;/listelem&gt;&lt;listelem ct="text"&gt;&lt;symbol stellen="2"&gt;5.&lt;/symbol&gt;bei
        Windkraftwerken (Windparks), Photovoltaik-Anlagen und geothermischen Anlagen die Stromerzeugung
        (Einspeisung) getrennt nach Kraftwerkstyp;&lt;/listelem&gt;&lt;listelem ct="text"&gt;&lt;symbol
        stellen="2"&gt;6.&lt;/symbol&gt;bei Eigenerzeugern darüber hinaus den Bezug aus dem öffentlichen Netz, den
        Bezug aus Fremdkraftwerken (16? Hz), die Einspeisung in das öffentliche Netz und den Verbrauch für
        Pumpspeicherung.&lt;/listelem&gt;&lt;/ziffernliste&gt;&lt;schluss typ="Abs" ct="text"&gt;Für anerkannte
        Ökostromanlagen (§ 5 Abs. 1 Z 27 in Verbindung mit § 7 des Ökostromgesetzes) sind über die Daten gemäß Z 1, 4
        und 5 hinaus die gemeldeten Kraftwerke zu benennen und die zugehörigen Zählpunkte
        anzugeben.&lt;/schluss&gt;&lt;/liste&gt;&lt;absatz typ="abs" ct="text" halign="j"&gt;(3) Die Eigenerzeuger haben
        für die Erhebungsperiode jeweils eines Kalendermonats zu erheben:&lt;/absatz&gt;&lt;liste&gt;&lt;ziffernliste
        ebene="1"&gt;&lt;listelem ct="text"&gt;&lt;symbol stellen="2"&gt;1.&lt;/symbol&gt;die physikalischen Importe
        nach Staaten;&lt;/listelem&gt;&lt;listelem ct="text"&gt;&lt;symbol stellen="2"&gt;2.&lt;/symbol&gt;die
        physikalischen Exporte nach Staaten.&lt;/listelem&gt;&lt;/ziffernliste&gt;&lt;/liste&gt;&lt;/abschnitt&gt;
        &lt;/nutzdaten&gt;
        &lt;layoutdaten paperf="7" paperh="841.9" paperw="595.3" margl="70.9" margr="70.9" margt="70.9"
        margb="56.7" headerd="35.45" footerd="35.45" gutter="0" gutterpos="0" deftab="35.4" /&gt;
        &lt;/risdok&gt;
        &lt;/ContentReference&gt;
        &lt;/Dokumentinhalt&gt;
        &lt;/OGDDocumentMetadata&gt;
        &lt;/DocumentResult&gt;
      </getDocumentResult>
    </getDocumentResponse>
  </soap:Body>
</soap:Envelope>
```
Beinhaltet eine Rechtsvorschrift eine Grafik z.B. ein Verkehrszeichen (§ 50 StVO), so wird diese Grafik mittels des Elements „binary“ als base64 kodierter String eingebettet.
```xml
&lt;binary nr="1" shapetype="is" height="112" width="132" alt="" brightness="0.5" contrast="0.5"
oleclass="unknown" datatype="gif"&gt;
&lt;base64&gt;
R0lGODlhhABwAHcAMSH+GlNvZnR3YXJlOiBNaWNyb3NvZnQgT2ZmaWNlACH5BAEAAAAALAAAAACEA
HAAh////wAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQ
.
.
I7pmFoYmfEFmZA5fglUhByGQliBLTM4gxDIF6J5OJ8pfAOjT+NTPhsFIQq0HhToV34FgSqRmvFDgzFoI+I
3gi5REN7UgFbWJEL1P/wxnML5JAhknMPnjZZSOaqhKJtyEL6pFQEBADs=
&lt;/base64&gt;
&lt;/binary&gt;
```
## Fehlerbehandlung

### Ungültiger Request
Bei einer ungültigen oder fehlerhaften Anfrage bzw. bei Systemstörungen wird ebenfalls ein „ResponseXml“ zurückgegeben. Das Attribut „status“ im Element „DocumentResult“ enthält dann den Wert „error“. Anstatt des Elements „SearchDocumentsResults“ wird das Element „Error“ mit folgenden Informationen ausgegeben:
- **errorType**
  Klassifiziert den Fehler: 1 = incorrect request, 2 = database unavailable, 3 = other error
- **Applikation**
  Derzeit immer „Bundesrecht“
- **Message**
  Beschreibt den Fehler
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <requestResponse xmlns="http://ogd.bka.gv.at/">
      <requestResult>
        &lt;?xml version="1.0" encoding="utf-8"?&gt;
        &lt;OGDSearchResult status="error" xmlns:tns="http://ris.bka.gv.at/Search/1.3/OGD"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"&gt;
        &lt;Error errorType="1"&gt;
        &lt;Applikation&gt;Bundesrecht&lt;/Applikation&gt;
        &lt;Message&gt;&amp;lt;![CDATA[
        Bka.Ris.OGDConnector.ServiceHandler.OGDServiceHandler: Die Applikation LBG ist unzulässig
        ]]&amp;gt;&lt;/Message&gt;
        &lt;/Error&gt;
        &lt;/OGDSearchResult&gt;
      </requestResult>
    </requestResponse>
  </soap:Body>
</soap:Envelope>
```

### Dokument wurde nicht gefunden
Kann ein Dokument nicht gefunden werden oder ist die Dokumentnummer ungültig, wird eine Fehlermeldung, analog zum obigen Beispiel, im Element „DocumentResult“ ausgegeben.
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <getDocumentResponse xmlns="http://ogd.bka.gv.at/">
      <getDocumentResult>
        &lt;?xml version="1.0" encoding="utf-8"?&gt;
        &lt;DocumentResult status="error" xmlns:tns="http://ris.bka.gv.at/Search/1.3/OGD"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"&gt;
        &lt;Error errorType="1"&gt;
        &lt;Applikation&gt;Bundesrecht&lt;/Applikation&gt;
        &lt;Message&gt;
        &amp;lt;![CDATA[
        Bka.Ris.OGDConnector.ServiceHandler.OGDServiceHandlerBr: Die Dokunentnummer NOR90091435
        wurde nicht gefunden
        ]]&amp;gt;
        &lt;/Message&gt;
        &lt;/Error&gt;
        &lt;/DocumentResult&gt;
      </getDocumentResult>
    </getDocumentResponse>
  </soap:Body>
</soap:Envelope>
```

## Info, Kontakt
Für Anfragen betreffend das RIS-OGDService wenden Sie sich bitte an: ris.it@bka.gv.at
