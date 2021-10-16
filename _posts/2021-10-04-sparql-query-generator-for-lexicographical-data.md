---
show_profile: true
title: SPARQL query generator for lexicographical data
tags:
- SPARQL
- Linked Data
- Lexicography
---


Following one of my previous posts on the [10 basic but essential SPARQL queries for lexicographical data on Wikidata](10 basic but essential SPARQL queries for lexicographical data on Wikidata){:target="_blank"}, I decided to create a simple SPARQL query generator that helps non-experts get more familiar with SPARQL and also, create queries to look up words in [Wikidata](https://www.wikidata.org/) and [Dbnary](http://kaiko.getalp.org/about-dbnary/) quickly.

Please note that the translation option is only available for headwords. Also, regarding Dbnary, it is currently not possible to retrieve translations nor examples.

<hr />

<form>
  <div class="row">
    <div class="col">
      <label for="lemma">Lemma</label>
      <input type="text" class="form-control" placeholder="lemma" id="lemma" maxlength="15" name="lemma" id="lemma" value="book">
    </div>
    <div class="col">
        <div class="form-group">
          <label for="source_language">Source language</label>
          <select class="form-control" id="source_language" name="source_language">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="pt">Portuguese</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
          </select>
        </div>
    </div>
    <div class="col">
        <div class="form-group">
          <label for="part_of_speech_tag">Part-of-speech tag</label>
          <select class="form-control" id="part_of_speech_tag" name="part_of_speech_tag">
            <option>Noun</option>
            <option>Adjective</option>
            <option>Adverb</option>
            <option>Verb</option>
          </select>
        </div>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
        <div class="form-group">
          <label for="information_categories">Information to retrieve (if available)</label>
          <select class="form-control" id="information_categories" name="information_categories">
            <option value="1">Just look it up!</option>
            <option value="2">Senses</option>
            <option value="3">Senses & Definitions</option>
            <option value="4">Senses, Deinitions & Examples</option>
          </select>
        </div>
    </div>
    <div class="col">
        <div class="form-group">
          <label for="translation_languages">Translation language (only with Wikidata)</label>
          <select class="form-control" id="translation_languages" name="translation_languages">
            <option value="null"></option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="pt">Portuguese</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
          </select>
        </div>
    </div>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect2">Specify your target SPARQL endpoint: </label>
  	<div class="form-check form-check-inline">
  	  <input class="form-check-input" type="radio" name="target_SPARQL" id="Wikidata" checked>
  	  <label class="form-check-label" for="Wikidata">Wikidata</label>
  	</div>
  	<div class="form-check form-check-inline">
  	  <input class="form-check-input" type="radio" name="target_SPARQL" id="Dbnary">
  	  <label class="form-check-label" for="Dbnary">Dbnary</label>
  	</div>
  </div>

  <div class="form-group">
    <div class="row">
        <div class="col">
          <button type="button" class="btn btn-primary" onclick="generateQuery()" id="generate_query">Generate</button>
        </div>
        <div class="col">
      	  <div class="form-check">
      	    <input type="checkbox" class="form-check-input" id="limit_100" name="limit_100">
      	    <label class="form-check-label" for="limit_100">LIMIT 100 (for faster running)</label>
      	  </div>
    	</div>
    </div>
  </div>  

  <div class="form-group">
    <!-- <label for="generated_sparql_query">Generated SPARQL query</label> -->
    <textarea class="form-control bg-light" id="generated_sparql_query" rows="20" name="generated_sparql_query"></textarea>
  </div>
  <button type="button" class="btn btn-primary" id="run_query" onclick="runQuery()">Run the query!</button>
  
</form>

<script>
  // https://www.wikidata.org/wiki/Help:Wikimedia_language_codes/lists/all
  var languages_wiki = {
    "en": "Q1860",
    "fr": "Q150",
    "es": "Q1321",
    "pt": "Q5146",
    "de": "Q188",
    "it": "Q652"
  };

  var languages_dbnary = {
    "en": "en",
    "fr": "fr",
    "es": "es",
    "pt": "pt",
    "de": "de",
    "it": "it"
  };

  var posTags = {
    "Noun": "Q1084",
    "Adjective": "Q34698",
    "Adverb": "Q380057",
    "Verb": "Q24905"
  };

  // Queries for Wikidata
  var values = "\n\tVALUES ?word {'book'@GLWSSA}";

  var queryBasicWiki = "SELECT * WHERE {VALUESTOBEADDEDHERE\n\t?l a ontolex:LexicalEntry ;\n\t\tdct:language wd:LNGCDE ;\n\t\tontolex:lexicalForm ?form ;\n\t\twikibase:lexicalCategory wd:POSTAG ;\n\t\twikibase:lemma ?lemma .\n\t?form ontolex:representation ?word .\n}";
  
  var querySensesWiki = "SELECT * WHERE {VALUESTOBEADDEDHERE\n\t?l a ontolex:LexicalEntry ;\n\t\tdct:language wd:LNGCDE ;\n\t\tontolex:lexicalForm ?form ;\n\t\twikibase:lexicalCategory wd:POSTAG ;\n\t\twikibase:lemma ?lemma ;\n\t\tontolex:sense ?sense .\n\t?form ontolex:representation ?word .\n}";

  var queryDefWiki = "SELECT * WHERE {VALUESTOBEADDEDHERE\n\t?l a ontolex:LexicalEntry ;\n\t\tdct:language wd:LNGCDE ;\n\t\twikibase:lemma ?lemma ;\n\t\tontolex:lexicalForm ?form ;\n\t\twikibase:lexicalCategory ?category ;\n\t\tontolex:sense ?sense .\n\t?form ontolex:representation ?word .\n\t?language wdt:P218 \"GLWSSA\" .\n\t?sense skos:definition ?gloss .\n\tFILTER EXISTS {?l ontolex:sense ?sense }\n\tFILTER(LANG(?gloss) = \"GLWSSA\")\n}";

  var queryExamplesWiki = "SELECT * WHERE {VALUESTOBEADDEDHERE\n\t?l a ontolex:LexicalEntry ;\n\t\tdct:language wd:LNGCDE ;\n\t\twikibase:lemma ?lemma ;\n\t\tontolex:lexicalForm ?form ;\n\t\twikibase:lexicalCategory ?category ;\n\t\tontolex:sense ?sense .\n\t\t?language wdt:P218 \"GLWSSA\" .\n\t?form ontolex:representation ?word .\n\t?sense skos:definition ?gloss .\n\tOPTIONAL{\n\t\t?l p:P5831 ?statement .\n\t\t?statement ps:P5831 ?example .\n\t}\n\tFILTER EXISTS {?l ontolex:sense ?sense }\n\tFILTER(LANG(?gloss) = \"GLWSSA\")\n}";

  var queryTranslationWiki = "SELECT DISTINCT * WHERE {\n\t?sourec dct:language wd:LNGCDE;\n\t\twikibase:lemma ?sourceLemma;\n\t\tontolex:sense [ wdt:P5137 ?sense ].\n\t?target dct:language wd:LNGCDETRG;\n\t\twikibase:lemma ?targetLemma;\n\t\tontolex:sense [ wdt:P5137 ?sense ].\n}\nORDER BY ASC(UCASE(str(?sourceLemma)))\nLIMIT 100 ";

  var queryTranslationWikiLemma = "SELECT DISTINCT * WHERE {VALUESTOBEADDEDHERE\n\t?source dct:language wd:LNGCDE;\n\t\twikibase:lemma ?sourceLemma;\n\t\tontolex:lexicalForm ?form ;\n\t\twikibase:lexicalCategory wd:POSTAG ;\n\t\tontolex:sense [ wdt:P5137 ?sense ].\n\t?target dct:language wd:LNGCDETRG;\n\t\twikibase:lemma ?targetLemma;\n\t\tontolex:sense [ wdt:P5137 ?sense ].\n\t?form ontolex:representation ?word .\n}\nORDER BY ASC(UCASE(str(?sourceLemma))) ";

  // Queries for Dbnary
    var valuesDbnary = "\n\tVALUES ?label {'book'@GLWSSA}\n\tVALUES ?pos {<http://www.lexinfo.net/ontology/2.0/lexinfo#POSTAGNM>}"; 

    var queryBasicWikiDbnary = `SELECT * WHERE {VALUESTOBEADDEDHERE
       ?lexeme a ontolex:LexicalEntry ;
         rdfs:label ?label ;
         ontolex:canonicalForm ?form ;
         lime:language ?lang ;
         lexinfo:partOfSpeech   ?pos .

    FILTER(?lang = "GLWSSA")
    }
    `
    var querySensesWikiDbnary = `SELECT * WHERE {VALUESTOBEADDEDHERE
       ?lexeme a ontolex:LexicalEntry ;
         rdfs:label ?label ;
         ontolex:canonicalForm ?form ;
         lime:language ?lang ;
         lexinfo:partOfSpeech   ?pos ;
         ontolex:sense  ?sense .

    FILTER(?lang = "GLWSSA")
    }`

    var queryDefWikiDbnary = `SELECT ?lexeme ?label ?pos ?sense ?definition
    WHERE {
       ?sense a ontolex:LexicalSense ;
         skos:definition ?def .
       ?def rdf:value ?definition .
       FILTER(lang(?definition) = "GLWSSA")
       {
          SELECT * WHERE {VALUESTOBEADDEDHERE
             ?lexeme a ontolex:LexicalEntry ;
             rdfs:label ?label ;
             ontolex:canonicalForm ?form ;
             lime:language ?lang ;
             lexinfo:partOfSpeech   ?pos ;
             ontolex:sense  ?sense .
          FILTER(?lang = "GLWSSA")
          } 
       }
    }`

    var queryExamplesWikiDbnary = `
    `

    var queryTranslationWikiDbnary = `
    `

    var queryTranslationWikiLemmaDbnary = `
    `

  function generateQuery() {
    var lemma = document.getElementById("lemma").value;
    var posTag = document.getElementById("part_of_speech_tag").value;
    var sourceLanguage = document.getElementById("source_language").value;
    var translationLanguage = document.getElementById("translation_languages").value;
    var query = "";
    var formValid = false;

    if (document.getElementById('Wikidata').checked) {
      if (translationLanguage != "null") {
        if (lemma.length == 0) {
          query = queryTranslationWiki;
        } else {
          query = queryTranslationWikiLemma;
        }
      } else {
        switch (document.getElementById('information_categories').value) {
          case "1":
            query = queryBasicWiki;
            break;
          case "2":
            query = querySensesWiki;
            break;
          case "3":
            query = queryDefWiki;
            break;
          case "4":
            query = queryExamplesWiki;
            break;
          }
      }} else {
        switch (document.getElementById('information_categories').value) {
          case "1":
            query = queryBasicWikiDbnary;
            break;
          case "2":
            query = querySensesWikiDbnary;
            break;
          case "3":
            query = queryDefWikiDbnary;
            break;
        }
      }

    if (lemma.length != 0) {
      if (document.getElementById('Wikidata').checked) {
        query = query.replace("VALUESTOBEADDEDHERE", values.replace("book", lemma));
      } else {
        query = query.replace("VALUESTOBEADDEDHERE", valuesDbnary.replace("book", lemma));
      }
    } else {
      query = query.replace("VALUESTOBEADDEDHERE", "");
    }
    query = query.replace("WORD", lemma);
    query = query.replace("LNGCDE", languages_wiki[sourceLanguage]);
    query = query.replaceAll("LNGCDETRG", languages_wiki[translationLanguage]);
    query = query.replaceAll("GLWSSA", sourceLanguage);
    query = query.replace("POSTAGNM", posTag.toLowerCase());
    query = query.replace("POSTAG", posTags[posTag]);
    // query = query.replace(";;", ";").concat("\n}").replace(";\n}", ".\n}");

    if (document.getElementById('limit_100').checked) {
      query = query.concat("\nLIMIT 100");
    }

    document.getElementById("generated_sparql_query").innerHTML = query;

  }

  function runQuery() {
    if (document.getElementById("generated_sparql_query").value != '') {
      if (document.getElementById('Wikidata').checked) {
      window.open("https://query.wikidata.org/#".concat(encodeURIComponent(document.getElementById("generated_sparql_query").value)), '_blank'); 
    } else {
      window.open("http://kaiko.getalp.org/sparql?default-graph-uri=&query=".concat(encodeURIComponent(document.getElementById("generated_sparql_query").value)), '_blank'); 
    }
    }
  }
</script>


<hr class="col-xs-12">
Last updated on 9 October 2021.