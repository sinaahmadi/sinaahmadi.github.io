---
title: "EndoLinked: A Platform for Documenting Endonyms in Minority and Endangered Languages using Linked Data"
show_profile: false
tags:
- research
- proposal
- linked data
---

Given that I cannot currently focus on too many things at the same time due to existing projects, I would like to write this idea in the form of a blog post. To be addressed, hopefully, sometime in the future!

<hr>

There are thousands of languages around the world which are [regional, minority](https://en.wikipedia.org/wiki/Minority_language), [endangered](https://en.wikipedia.org/wiki/Endangered_language) or under-documented. Oftentimes, these languages are spoken within oppressed linguistic communities where the development and [documentation of the language](https://en.wikipedia.org/wiki/Language_documentation) have received trivial or no attention.

Thanks to the recent advances in information technology and the global spread of the Internet among communities, many projects could document endangered and minority languages to some extent. For instance, [Wikitongues](https://wikitongues.org/), [Indigenous Tweets](http://indigenoustweets.com/) or [UNESCO Atlas of the World's Languages in Danger](http://www.unesco.org/languages-atlas/). In the same vein, I would like to create a platform for documenting endonyms, i.e. name of places used within a linguistic group. 

## Endonyms, a valuable part of linguistic heritage 

My father was originally born in a village in Kurdistan and is native in [Sorani Kurdish](https://en.wikipedia.org/wiki/Sorani). During a recent visit to his native region, I noticed how he knows all the details about his village: not only the name of the villages, but the name of the hills, mountains, rivers, springs and even roads! Although his knowledge of the locations where he spent his childhood seems natural in some ways, I was surprised by all the details that he knew about locations and the fact, that only a handful number of people would know those things. Maybe knowing the name of a hillock somewhere in the Kurdistan mountains would not be of importance to the Kurdish speakers or the landscape of their language, geological information are also part of the linguistic heritage of an ethnic group which should be preserved and also transferred to the future generations.

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/berde_res_Kurdistan_20210214_170811.jpg" style="width:75%" align="middle" alt="Text pre-processing using command-line"/>
    <div class="card-body bg-light">
        <div class="card-text">
            <i>Berde Reş (بەردە ڕەش - literally meaning "the black stone" in Sorani Kurdish)</i>, the name of two hillocks in Kurdistan (left and right of the photo). The name is only documented orally by the local inhabitants. Photo taken at <a href="https://goo.gl/maps/gjUcD8NEYAHb4EEbA" target="_blank">(35°39'39.2"N 47°11'07.8"E)</a> in February 2021.
        </div>
    </div>
</div>

Despite the availability of various [geographic coordinate systems (GPS)](https://en.wikipedia.org/wiki/Geographic_coordinate_system), almost none of them is currently enriched with linguistic information provided by regional or local languages. For instance, the majority of the geographic coordinates in the [regions where Kurdish](https://en.wikipedia.org/wiki/Kurdistan) is spoken, are available with the official languages of the countries where Kurds are minorities. The problem has also another dimension where regional political powers run campaigns to deliberately cleanse ethnic groups, for instance read about the [Ba'athist Arabization campaigns in North Iraq](https://en.wikipedia.org/wiki/Ba%27athist_Arabization_campaigns_in_North_Iraq).


*EndoLinked* can be the name of a platform where endonyms are collected using the Semantic Web and Linked Data technologies. To this end, geographical coordinates are to be collected and enriched initially with various knowledge bases, such as [Wikidata](https://www.wikidata.org/). The collected data, is then provided to a **community of native speakers** where labels are provided for data instances. The platform would be an intermediate between the geological database, particularly [OpenStreetMap (OSM)](https://www.openstreetmap.org) and annotators who only focus on the linguistic representation of geographical information. The following diagram provides a simple schema of how the platform would work.

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/endonyms_population.png" style="width:50%" align="middle" alt="Text pre-processing using command-line"/>
    <div class="card-body bg-light">
        <div class="card-text">
            A simple diagram of a geographic data population and annotation framework
        </div>
    </div>
</div>

From a technical point of view, the platform would collect information from OSM using its SPARQL endpoint, further enriches the collected data with information available on Wikidata and then provides the results within a specific editor to the annotator. For instance, the following SPARQL query within Wikidata, retrieves labels of the locations in English, Farsi (the official language of that region) and Sorani Kurdish.

{% highlight sparql  %}
SELECT DISTINCT *
WHERE
{
  ?place wdt:P31 wd:Q486972 ;
         wdt:P131* wd:Q134386 .

  SERVICE wikibase:label { bd:serviceParam wikibase:language "en,fa,ckb,kur". }
  ?place rdfs:label ?lang_label_en, ?lang_label_fa, ?lang_label_ckb .
  FILTER(LANG(?lang_label_en) = "en")
  FILTER(LANG(?lang_label_ckb) = "ckb")
  FILTER(LANG(?lang_label_fa) = "fa")
} 
{% endhighlight %}

**[Run this query](https://query.wikidata.org/#SELECT%20DISTINCT%20%2a%0AWHERE%0A%7B%0A%20%20%3Fplace%20wdt%3AP31%20wd%3AQ486972%20%3B%0A%20%20%20%20%20%20%20%20%20wdt%3AP131%2a%20wd%3AQ134386%20.%0A%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%2Cfa%2Cckb%2Ckur%22.%20%7D%0A%20%20%3Fplace%20rdfs%3Alabel%20%3Flang_label_en%2C%20%3Flang_label_fa%2C%20%3Flang_label_ckb%20.%0A%20%20FILTER%28LANG%28%3Flang_label_en%29%20%3D%20%22en%22%29%0A%20%20FILTER%28LANG%28%3Flang_label_ckb%29%20%3D%20%22ckb%22%29%0A%20%20FILTER%28LANG%28%3Flang_label_fa%29%20%3D%20%22fa%22%29%0A%7D%20%0A){:target="_blank"}**

Consequently, the enriched database of endonyms can not only be used for GPS purposes, but also to enrich linguistic data for under-represented languages.


<hr class="col-xs-12">
Last updated on 15 March 2021.






