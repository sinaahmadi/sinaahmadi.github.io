---
title: Resource population using Wikidata and Wiktionary
show_profile: false
tags:
- Linked Data
- SPARQL
- Resource population
- NLP
---

There are an increasing number of lexical resources available online which are machine-friendly and can be accessed by linked data techniques.

In this repository, we provide a program which collects linguistic information for a given word, in raw text or triples, and converts the collected data to Lemon-OntoLex ontology. The current resources being used are [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page){:target="_blank"} and [Wiktionary](https://www.wiktionary.org/){:target="_blank"}. However, any resource which can be accessed via a SPARQL endpoint can be used in this program. 

The following image shows information for the Italian word "acroterio" in Wikidata. 

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="https://raw.githubusercontent.com/sinaahmadi/sparql4respop/master/wikidata.png" style="width:90%" align="middle" alt="artchitecture"/>
    <div class="card-body bg-light">
        <div class="card-text">
           "acroterio"(italian) as an example of how data are represented in Wikidata.
        </div>
    </div>
</div>


## How does it work?

Given a list of words in text or in RDF, this program collects all the relevant information in Wikidata and Wiktionary. 

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="https://raw.githubusercontent.com/sinaahmadi/sparql4respop/master/architecture.png" style="width:60%" align="middle" alt="artchitecture"/>
    <div class="card-body bg-light">
        <div class="card-text">
            The architecture of resource enrichment
        </div>
    </div>
</div>

### Change categories

In order to collect data in a specific domain, you can add your desired category to the `subjects`. Note that this may affect the performance of the queries as it will take longer to check all the domains. 

```
 subjects = {"architecture":"Q12271", "archeology": "Q10855079", "law" : "Q7748", "legal science" : "Q382995", "social issue" : "Q1920219", "jurisprudence" : "Q4932206", "rule" : "Q1151067", "Economy" : "Q159810", "Economics" : "Q8134", "labour law" : "Q628967", "human action" : "Q451967", "legal concept" : "Q2135465"}
```

### Include external ontologies

If you would like to link your Lemon-Ontolex data to an external ontology, you can use the `ontolex:reference` property. One of the example given datasets provide the URIs in a tab-separated format.

### Conversion to Lemon-OntoLex

The conversion is done using predefined templates for each part of each part of the data, such as, entry description, [vatrans](https://www.w3.org/2016/05/ontolex/#variation-translation-vartrans){:target="_blank"}, linguistic information (pos, gender etc.). The following figure illustrated the Lemon-OntoLex core model. 

![Lemon-OntoLex](https://www.w3.org/2016/05/ontolex/Lemon_OntoLex_Core.png)


## Limitations

Please note that the current version of the program only takes into account very specific information and is not creating a fine-grained Lemon-Ontolex representation. For instance, only "OntoLex:LexicalEntry" for representing entries are used (no `components`). 

Our codes are available at [https://github.com/sinaahmadi/sparql4respop](https://github.com/sinaahmadi/sparql4respop){:target="_blank"}

<hr class="col-xs-12">
Last updated on 21 May 2019.
