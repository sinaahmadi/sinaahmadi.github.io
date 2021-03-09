---
title: "10 basic but essential SPARQL queries for \nlexicographical data on Wikidata"
show_profile: false
tags:
- NLP
- linked data
---


The [Semantic Web](https://www.w3.org/standards/semanticweb/){:target="_blank"} as an extension of the [World Wide Web (WWW)](https://en.wikipedia.org/wiki/World_Wide_Web){:target="_blank"} represents an effective means of data representation and enables users and computers to retrieve and share information efficiently. The [Resource Description Framework (RDF)](https://www.w3.org/RDF/){:target="_blank"} is the foundational data model for Semantic Web. Unlike traditional databases, such as [relational ones](https://en.wikipedia.org/wiki/Relational_database){:target="_blank"}, where data has to adhere to a fixed schema, RDF documents are not prescribed by a schema and can be described without additional information making RDF data model self-describing. **To learn more about RDF, you can read one of my previous blog posts on [data modelling with RDF](https://sinaahmadi.github.io/posts/rdf-data-modelling-a-tutorial.html){:target="_blank"}.**

More recently, the concept of the Web of [Linked Data](https://en.wikipedia.org/wiki/Linked_data), which makes RDF data available using the [HyperText Transfer Protocol (HTTP)](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol){:target="_blank"}, and [Linguistic Linked Open Data](http://linguistic-lod.org/){:target="_blank"} has gained traction along with the Semantic Web, particularly in the [natural language processing (NLP)](https://en.wikipedia.org/wiki/Natural_language_processing){:target="_blank"} community as a standard for linguistic resource creation. According to the [official definition](https://www.w3.org/standards/semanticweb/data){:target="_blank"} of W3C,

<div class="ml-3">
<p class="text-muted" >
Linked Data lies at the heart of what Semantic Web is all about: large scale integration of, and reasoning on, data on the Web. Almost all applications listed in, say collection of Semantic Web Case Studies and Use Cases are essentially based on the accessibility of, and integration of Linked Data at various level of complexities. 
</p>
</div>

Moreover, the unique potential which the Semantic Web and Linked Data offer to electronic [lexicography](https://en.wikipedia.org/wiki/Lexicography){:target="_blank"} enables interoperability across lexical resources by leveraging printed or unstructured linguistic data to machine-readable semantic formats.


<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/dictionary-rdf-library-linked-data.jpg" style="width:100%" align="middle" alt="dictionary-rdf-library-linked-data"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Semantic web and linked data facilitate retrieving information from huge resources such as printed dictionaries (Photo taken at <a href="https://dsl.dk/" target="_blank">DSL in Copenhagen</a>)
        </div>
    </div>
</div>

## Queries 

We present 10 essential queries in SPARQL, an RDF query language, for lexicographical purposes to retrieve information. To this end, we use the [SPARQL endpoint of Wikidata](https://query.wikidata.org/){:target="_blank"} which comes with a few lexeme queries as example, too. 

It is important to get familiar with [Ontolex-Lemon](https://www.w3.org/2016/05/ontolex/){:target="_blank"} and the [Ontolex-Lemon lexicography module (lexicog)](https://jogracia.github.io/ontolex-lexicog/){:target="_blank"} as lexicographical data on Wikidata are provided based on those ontologies. 


Moreover, a list of other useful queries are provided at:
- [https://www.wikidata.org/wiki/Wikidata:Lexicographical_data/Ideas_of_queries](https://www.wikidata.org/wiki/Wikidata:Lexicographical_data/Ideas_of_queries){:target:"_blank"}
- [https://en.wikibooks.org/wiki/SPARQL/WIKIDATA_Lexicographical_data](https://en.wikibooks.org/wiki/SPARQL/WIKIDATA_Lexicographical_data){:target="_blank"}
- [https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/queries/examples/en#Lexeme_queries](https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/queries/examples/en#Lexeme_queries){:target="_blank"}
- [Lexemes in Wikidata: 2020 status](http://www2.imm.dtu.dk/pubdb/edoc/imm7154.pdf){:target="_blank"}


Unfortunately, not all languages are equally represented on Wikipedia. In this tutorial, we focus on some of the richly represented ones, e.g. English and French. So, if you modify the queries to work on another language, make sure that your language is sufficiently represented on Wikidata before double-checking the soundness of the syntax of your queries.

#### 1- Retrieve lexemes describing [`book(L536)`](https://www.wikidata.org/wiki/Lexeme:L536){:target="_blank"} in different languages

{% highlight sparql  %}
SELECT ?lemma ?languageLabel WHERE {
  ?l a ontolex:LexicalEntry ; 
       ontolex:sense ?sense ; 
       dct:language ?language ; 
       wikibase:lemma ?lemma.
  ?sense wdt:P5137 wd:Q571 . # the concept for our sense is Q571
  # Set the language of the labels to English.
  # For any variable, if label exists, add "Label" to the variable to get its label using the following:
  SERVICE wikibase:label { 
    bd:serviceParam wikibase:language "en". 
  }
}
{% endhighlight %}

**[Run this query](https://query.wikidata.org/#SELECT%20%3Flemma%20%3FlanguageLabel%20WHERE%20%7B%0A%20%20%3Fl%20a%20ontolex%3ALexicalEntry%20%3B%20%0A%20%20%20%20%20%20%20ontolex%3Asense%20%3Fsense%20%3B%20%0A%20%20%20%20%20%20%20dct%3Alanguage%20%3Flanguage%20%3B%20%0A%20%20%20%20%20%20%20wikibase%3Alemma%20%3Flemma.%0A%20%20%3Fsense%20wdt%3AP5137%20wd%3AQ571%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%0A%20%20%20%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22.%0A%20%20%7D%0A%7D){:target="_blank"}**

#### 2- List the antonyms of "sadness" in English

{% highlight sparql  %}
SELECT ?l ?lemma ?antonymLabel WHERE {
  VALUES ?lemma {'sadness'@en} 
  ?l wikibase:lemma ?lemma;
          wdt:P461 ?antonym . # P461 is the property for opposite of or antonymy
  SERVICE wikibase:label {
   bd:serviceParam wikibase:language "en" .
  }  
}
{% endhighlight %}

**[Run this query](https://query.wikidata.org/#SELECT%20%3Fl%20%3Flemma%20%3FantonymLabel%20WHERE%20%7B%0A%20%20VALUES%20%3Flemma%20%7B%27sadness%27%40en%7D%20%0A%20%20%3Fl%20wikibase%3Alemma%20%3Flemma%3B%0A%20%20%20%20%20%20%20%20%20%20wdt%3AP461%20%3Fantonym%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%0A%20%20%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22%20.%0A%20%20%7D%20%20%0A%7D){:target="_blank"}**


#### 3- Retrieve the lemmas in a given language with part-of-speech, glosses and usage examples

{% highlight sparql  %}
SELECT ?lemma ?categoryLabel ?gloss ?example WHERE {
   ?l a ontolex:LexicalEntry ;
        dct:language ?language ;
        wikibase:lemma ?lemma ;
        wikibase:lexicalCategory ?category ;
        ontolex:sense ?sense .
        ?language wdt:P218 'en' .
  # Find the gloss (definition) of the senses
  ?sense skos:definition ?gloss .
  # Usage example
  ?l p:P5831 ?statement .
  ?statement ps:P5831 ?example .
  # Get only those lexemes for which senses are available
  FILTER EXISTS {?l ontolex:sense ?sense }
  # Set the language of the glosses to English
  FILTER(LANG(?gloss) = "en")
  SERVICE wikibase:label {
   bd:serviceParam wikibase:language "en" .
  }  
}
LIMIT 100
{% endhighlight %}

**[Run this query](https://query.wikidata.org/#SELECT%20%3Flemma%20%3FcategoryLabel%20%3Fgloss%20%3Fexample%20WHERE%20%7B%0A%20%20%20%3Fl%20a%20ontolex%3ALexicalEntry%20%3B%0A%20%20%20%20%20%20%20%20dct%3Alanguage%20%3Flanguage%20%3B%0A%20%20%20%20%20%20%20%20wikibase%3Alemma%20%3Flemma%20%3B%0A%20%20%20%20%20%20%20%20wikibase%3AlexicalCategory%20%3Fcategory%20%3B%0A%20%20%20%20%20%20%20%20ontolex%3Asense%20%3Fsense%20.%0A%20%20%20%20%20%20%20%20%3Flanguage%20wdt%3AP218%20%27en%27%20.%0A%20%20%23%20Find%20the%20gloss%20%28definition%29%20of%20the%20senses%0A%20%20%3Fsense%20skos%3Adefinition%20%3Fgloss%20.%0A%20%20%23%20Usage%20example%0A%20%20%3Fl%20p%3AP5831%20%3Fstatement%20.%0A%20%20%3Fstatement%20ps%3AP5831%20%3Fexample%20.%0A%20%20%23%20Get%20only%20those%20lexemes%20for%20which%20senses%20are%20available%0A%20%20FILTER%20EXISTS%20%7B%3Fl%20ontolex%3Asense%20%3Fsense%20%7D%0A%20%20FILTER%28LANG%28%3Fgloss%29%20%3D%20%22en%22%29%0A%20%20%23%20Set%20the%20language%20of%20the%20labels%20to%20English.%0A%20%20%23%20For%20any%20variable%2C%20if%20label%20exists%2C%20add%20%22Label%22%20to%20the%20variable%20to%20get%20its%20label.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%0A%20%20%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22%20.%0A%20%20%7D%20%20%0A%7D%0ALIMIT%20100){:target="_blank"}**

#### 4- Find verb forms in French ending with "é"

{% highlight sparql  %}
SELECT DISTINCT * WHERE {
     ?l a ontolex:LexicalEntry ; 
       dct:language wd:Q150 ; 
       wikibase:lexicalCategory wd:Q24905 ; 
       wikibase:lemma ?lemma ; 
       ontolex:lexicalForm ?form .
    ?form ontolex:representation ?word .
    FILTER (regex(?word, 'é$'))
}
{% endhighlight %}

**[Run this query](https://query.wikidata.org/#SELECT%20DISTINCT%20%2a%20WHERE%20%7B%0A%20%20%20%20%20%3Fl%20a%20ontolex%3ALexicalEntry%20%3B%20%0A%20%20%20%20%20%20%20dct%3Alanguage%20wd%3AQ150%20%3B%20%0A%20%20%20%20%20%20%20wikibase%3AlexicalCategory%20wd%3AQ24905%20%3B%20%0A%20%20%20%20%20%20%20%23wikibase%3AgrammaticalFeature%20wd%3AQ12717679%20%3B%0A%20%20%20%20%20%20%20wikibase%3Alemma%20%3Flemma%20%3B%20%0A%20%20%20%20%20%20%20ontolex%3AlexicalForm%20%3Fform%20.%0A%20%20%20%20%3Fform%20ontolex%3Arepresentation%20%3Fword%20.%0A%20%20%20%20FILTER%20%28regex%28%3Fword%2C%20%27%C3%A9%24%27%29%29%0A%7D%0A){:target="_blank"}**

#### 5- Create a trilingual dictionary of headwords

{% highlight sparql  %}
# Create a French-German-Basque lexicon
SELECT DISTINCT ?sense ?frLemma ?deLemma ?euLemma WHERE {
  # Retrieve lemmata based on common senses (use ?sense)
    ?fr dct:language wd:Q150;
        wikibase:lemma ?frLemma;
        ontolex:sense [ wdt:P5137 ?sense ].
    ?de dct:language wd:Q188;
        wikibase:lemma ?deLemma;
        ontolex:sense [ wdt:P5137 ?sense ].
    ?eu dct:language wd:Q8752;
        wikibase:lemma ?euLemma;
        ontolex:sense [ wdt:P5137 ?sense ].
  }
ORDER BY ASC(UCASE(STR(?frLemma)))
LIMIT 100 
{% endhighlight %}

**[Run this query](https://query.wikidata.org/#%23%20Create%20a%20French-German-Basque%20lexicon%0ASELECT%20DISTINCT%20%3Fsense%20%3FfrLemma%20%3FdeLemma%20%3FeuLemma%20WHERE%20%7B%0A%20%20%23%20Retrieve%20lemmata%20based%20on%20common%20senses%20%28use%20%3Fsense%29%0A%20%20%20%20%3Ffr%20dct%3Alanguage%20wd%3AQ150%3B%0A%20%20%20%20%20%20%20%20wikibase%3Alemma%20%3FfrLemma%3B%0A%20%20%20%20%20%20%20%20ontolex%3Asense%20%5B%20wdt%3AP5137%20%3Fsense%20%5D.%0A%20%20%20%20%3Fde%20dct%3Alanguage%20wd%3AQ188%3B%0A%20%20%20%20%20%20%20%20wikibase%3Alemma%20%3FdeLemma%3B%0A%20%20%20%20%20%20%20%20ontolex%3Asense%20%5B%20wdt%3AP5137%20%3Fsense%20%5D.%0A%20%20%20%20%3Feu%20dct%3Alanguage%20wd%3AQ8752%3B%0A%20%20%20%20%20%20%20%20wikibase%3Alemma%20%3FeuLemma%3B%0A%20%20%20%20%20%20%20%20ontolex%3Asense%20%5B%20wdt%3AP5137%20%3Fsense%20%5D.%0A%20%20%7D%0AORDER%20BY%20ASC%28UCASE%28str%28%3FfrLemma%29%29%29%0ALIMIT%20100%20%0A){:target="_blank"}**

#### 6- Count the number of senses per language

{% highlight sparql  %}
SELECT ?languageLabel (COUNT(?sense) AS ?count ) WHERE {
  ?l a ontolex:LexicalEntry ;
       dct:language ?language ;
       ontolex:sense ?sense .
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en" .
  }  
}
GROUP BY ?languageLabel
ORDER BY DESC(?count)
{% endhighlight %}

**[Run this query](https://query.wikidata.org/#%0ASELECT%20%3FlanguageLabel%20%28COUNT%28%3Fsense%29%20AS%20%3Fcount%20%29%20WHERE%20%7B%0A%20%20%3Fl%20a%20ontolex%3ALexicalEntry%20%3B%0A%20%20%20%20%20%20%20dct%3Alanguage%20%3Flanguage%20%3B%0A%20%20%20%20%20%20%20ontolex%3Asense%20%3Fsense%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%0A%20%20%20%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22%20.%0A%20%20%7D%20%20%0A%7D%0AGROUP%20BY%20%3FlanguageLabel%0AORDER%20BY%20DESC%28%3Fcount%29){:target="_blank"}**

#### 7- Lemmatize a word in English

{% highlight sparql  %}
SELECT ?word ?lemma WHERE {
  VALUES ?word {'brought'@en} 
  ?l a ontolex:LexicalEntry ; 
       dct:language wd:Q1860 ; 
       wikibase:lemma ?lemma ; 
       ontolex:lexicalForm ?form .
  ?form ontolex:representation ?word .
} 

{% endhighlight %}

**[Run this query](https://query.wikidata.org/#SELECT%20%3Fword%20%3Flemma%20WHERE%20%7B%0A%20%20VALUES%20%3Fword%20%7B%27brought%27%40en%7D%20%0A%20%20%3Fl%20a%20ontolex%3ALexicalEntry%20%3B%20%0A%20%20%20%20%20%20%20dct%3Alanguage%20wd%3AQ1860%20%3B%20%0A%20%20%20%20%20%20%20wikibase%3Alemma%20%3Flemma%20%3B%20%0A%20%20%20%20%20%20%20ontolex%3AlexicalForm%20%3Fform%20.%0A%20%20%3Fform%20ontolex%3Arepresentation%20%3Fword%20.%0A%7D%20%0A){:target="_blank"}**


#### 8- Retrieve masculine nouns in French that end with specific characters

{% highlight sparql  %}
SELECT * WHERE {
  ?l a ontolex:LexicalEntry ; 
       # entries in French (Q150)
       dct:language wd:Q150 ;
       wdt:P5185 wd:Q499327 ; # masculine grammatical gender
       wikibase:lemma ?lemma.
  FILTER (regex(?lemma, '^*(tion|ie|ique|aison|sion)$'))
  SERVICE wikibase:label { 
    bd:serviceParam wikibase:language "en". 
  }
} 
{% endhighlight %}

**[Run this query](https://query.wikidata.org/#SELECT%20%2a%20WHERE%20%7B%0A%20%20%3Fl%20a%20ontolex%3ALexicalEntry%20%3B%20%0A%20%20%20%20%20%20%20%23%20entries%20in%20French%20%28Q150%29%0A%20%20%20%20%20%20%20dct%3Alanguage%20wd%3AQ150%20%3B%0A%20%20%20%20%20%20%20wdt%3AP5185%20wd%3AQ499327%20%3B%20%23%20masculine%20grammatical%20gender%0A%20%20%20%20%20%20%20wikibase%3Alemma%20%3Flemma.%0A%20%20FILTER%20%28regex%28%3Flemma%2C%20%27%5E%2a%28tion%7Cie%7Cique%7Caison%7Csion%29%24%27%29%29%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20%0A%20%20%20%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22.%20%0A%20%20%7D%0A%7D%20){:target="_blank"}**

#### 9- Create a picture dictionary of animals in English

{% highlight sparql  %}
#defaultView:ImageGrid
SELECT DISTINCT * WHERE {
  ?l dct:language wd:Q1860;
     wikibase:lemma ?lemma;
     ontolex:sense ?sense.
  # senes belonging to a concept related to animals
  ?sense wdt:P5137 ?concept .
  ?concept wdt:P18 ?image ;
           wdt:P279+ wd:Q729 .
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
  }
}
{% endhighlight %}

**[Run this query](https://query.wikidata.org/#%23defaultView%3AImageGrid%0ASELECT%20DISTINCT%20%2a%20WHERE%20%7B%0A%20%20%3Fl%20dct%3Alanguage%20wd%3AQ1860%3B%0A%20%20%20%20%20wikibase%3Alemma%20%3Flemma%3B%0A%20%20%20%20%20ontolex%3Asense%20%3Fsense.%0A%20%20%23%20senes%20belonging%20to%20a%20concept%20related%20to%20animals%0A%20%20%3Fsense%20wdt%3AP5137%20%3Fconcept%20.%0A%20%20%3Fconcept%20wdt%3AP18%20%3Fimage%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20wdt%3AP279%2B%20wd%3AQ729%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%0A%20%20%20%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22.%0A%20%20%7D%0A%7D){:target="_blank"}**


#### 10- Check if a word exists in a given language (i.e. spell error detection)
{% highlight sparql  %}
ASK WHERE {
  VALUES ?word {'amazing'@en} 
  ?l a ontolex:LexicalEntry ; 
       dct:language wd:Q1860 ; 
       wikibase:lemma ?lemma ; 
       ontolex:lexicalForm ?form .
  ?form ontolex:representation ?word .
} 

{% endhighlight %}

**[Run this query](https://query.wikidata.org/#ASK%20WHERE%20%7B%0A%20%20VALUES%20%3Fword%20%7B%27brought%27%40en%7D%20%0A%20%20%3Fl%20a%20ontolex%3ALexicalEntry%20%3B%20%0A%20%20%20%20%20%20%20dct%3Alanguage%20wd%3AQ1860%20%3B%20%0A%20%20%20%20%20%20%20wikibase%3Alemma%20%3Flemma%20%3B%20%0A%20%20%20%20%20%20%20ontolex%3AlexicalForm%20%3Fform%20.%0A%20%20%3Fform%20ontolex%3Arepresentation%20%3Fword%20.%0A%7D%20%0A){:target="_blank"}**


In addition to the Wikidata endpoint, you can integrate your SPARQL queries in your code. For instance, you can use the following in Python:

{% highlight python  %}
from SPARQLWrapper import SPARQLWrapper, XML

sparql = SPARQLWrapper("https://query.wikidata.org/")
sparql.setQuery("""
    ASK WHERE {
      VALUES ?word {'amazing'@en} 
      ?l a ontolex:LexicalEntry ; 
           dct:language wd:Q1860 ; 
           wikibase:lemma ?lemma ; 
           ontolex:lexicalForm ?form .
      ?form ontolex:representation ?word .
    } 
""")

sparql.setReturnFormat(XML)
results = sparql.query().convert()
print(results)
{% endhighlight %}

<hr class="col-xs-12">
Last updated on 9 March 2021.



















