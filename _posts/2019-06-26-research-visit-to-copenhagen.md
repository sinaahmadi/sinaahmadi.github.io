---
title: Danish lexicographic data linking
show_profile: false
tags:
- Lexicography
- Research visit
- NLP
- ELEXIS
- Danish

DSL:
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/DSL/IMG_20190611_160454.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/DSL/IMG_20190612_171542.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/DSL/IMG_20190614_180247.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/DSL/IMG_20190613_180841.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/DSL/IMG_20190614_180517.jpg

CST: 
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/CST/IMG_20190617_160806.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/CST/IMG_20190617_174040.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/CST/IMG_20190617_212631.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/CST/IMG_20190617_161034.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/CST/IMG_20190617_174125.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/CST/IMG_20190617_212336.jpg

gallery:
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/20190622_214646-EFFECTS.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/IMG_20190622_211533.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/IMG_20190622_125312-EFFECTS.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/IMG_20190610_192333.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/IMG_20190611_195728.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/IMG_20190612_195504.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/IMG_20190618_180317.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/IMG_20190623_142702.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/IMG_20190618_221937.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/IMG_20190621_102937.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/IMG_20190610_190623.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Malmo/IMG_20190619_213113-EFFECTS.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/IMG_20190623_142832.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/Copenhagen/IMG_20190621_233822.jpg

---

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/pictures/Denmark2019/IMG_20190622_145646.jpg" style="width:100%" align="middle" alt="Joseph Kosuth's Art as Idea as Idea work, Radical at Louisiana museum"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Joseph Kosuth's '<i>Titled (Art as Idea as Idea)’ [Radical]</i>' work at <a href="https://www.louisiana.dk/" target="_blank">Louisiana Museum of Modern Art</a>
        </div>
    </div>
</div>

I had the chance to visit two amazing centres in the beautiful city of Copenhagen, Denmark, during the last two weeks. This visit was a part of my Ph.D. project in lexicographic data linking within [ELEXIS](https://elex.is/){:target="_blank"}. ELEXIS-the European lexicographic infrastructure, aims at paving the way for efficiently creating, maintaining and updating dictionaries. Heterogeneity of data, diversity in structure and incompatibility of standards are some of the major current obstacles in e-lexicography in Europe. To remedy these, ELEXIS provides innovative, transnational and data-driven approaches to dictionaries. 

During the two weeks of my visit (10-23 June, 2019), I spent one week at the Society for Danish Language and Literature (DSL) and the Centre for Language Technology (CST). Both these Danish institutions are active in the field of lexicography, resource creation and maintenance and, language technology for Danish language. In this post, I describe my visit to those two institutions and the results of my experiments in sense alignment of Danish dictionaries. 


## Society for Danish Language and Literature (DSL)

The [Society for Danish Language and Literature (Det Danske Sprog- og Litteraturselskab, DSL)](https://dsl.dk/){:target="_blank"} is an independent institution supported by the Danish Ministry of Culture, the Carlsberg Foundation, and a series of other foundations. DSL aims at publishing and documenting Danish language and literature, bibliographies and historical documents. DSL is located in a very beautiful place in Copenhagen harbour next to the [Royal Library of Denmark](http://www.kb.dk/en/){:target="_blank"}, aka the Black Diamond (the [white building](https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Denmark2019/DSL/IMG_20190613_180841.jpg){:target="_blank"} in the following photos).


Language, as a living organism, evolves through time and changes from generation to generation. Recording such changes is a cumbersome and tedious task which is patiently and carefully carried out by lexicographers as *guardians of language*. I had the honour to meet amazing people at DSL who shared their ideas about my work, taught me new things through our conversations and gave me new ideas, particularly [Sanni Nimb](https://dsl.dk/medarbejdere/sn){:target="_blank"}. During my stay not only at DSL but throughout my visit to Copenhagen, she shared valuable ideas about the current challenges that lexicographers at DSL are going through. Some of the impressive Danish resources which are developed or maintained at DSL are [Den Danske Ordbog (DDO)](https://ordnet.dk/ddo){:target="_blank"}, [Ordbog over det danske Sprog (ODS)](https://ordnet.dk/ods){:target="_blank"}, [KorpusDK](https://ordnet.dk/korpusdk_en?set_language=en){:target="_blank"}, the Danish Thesaurus "*Den Danske Begrebsordbog*", the Danish FrameNet Lexicon and [DanNet--the Danish WordNet](https://cst.ku.dk/english/projekter/dannet/){:target="_blank"}.


I am very happy that I could visit such an excellent centre where Danish language and literature is documented from the earliest times to the present day. To get informed about the latest news of DSL, visit [https://www.facebook.com/DetDanskeSprogogLitteraturselskab/](https://www.facebook.com/DetDanskeSprogogLitteraturselskab/){:target="_blank"}. 

<div class="card-columns">
    {% for img in page.DSL %}
    <div class="card">
        <a href="{{ img }}" target="_blank">
          <img class="card-img-top" src="{{ img }}" />
        </a>
    </div>
    {% endfor %}
</div>

## Centre for Language Technology (CST)

The [Centre for Language Technology (*Center for Sprogteknologi*, CST)](https://cst.ku.dk/english/){:target="_blank"} at the Department of Nordic Studies and Linguistics, [University of Copenhagen (UCPH)](https://www.ku.dk/english/){:target="_blank"}, is a research centre with a focus on natural language processing (NLP) and computational linguistics. In addition to NLP tools, CST has developed a large number of resources over the years, particularly with respect to computational lexical semantics, such as [DanNet--the Danish WordNet](https://cst.ku.dk/english/projekter/dannet/){:target="_blank"} (in collaboration with DSL) and [STO--a Danish computational dictionary](https://cst.ku.dk/english/sto_ordbase/){:target="_blank"}. 


I also had many fruitful conversations and interesting feedbacks from the computational linguists, linguists and lexicographers at CST. My visit to CST was kindly made possible by [Bolette Sandford Pedersen](https://cst.ku.dk/english/ansatte/?pure=en/persons/134967){:target="_blank"}. 

<div class="card-columns">
    {% for img in page.CST %}
    <div class="card">
      <a href="{{ img }}" target="_blank">
        <img class="card-img-top" src="{{ img }}" />
      </a>
    </div>
    {% endfor %}
</div>


## Research purpose: dictionary linking

A dictionary is a repository which provides linguistic information about the vocabulary of a language and the semantic relationships between the words. Although we may think about a similar thing when we say, read or draw a word, the way we describe them in the written form may be different. Let's take a look at how the English word "*spring (noun)*" is described in two dictionaries, Longman and Collins: 


<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/spring_noun_Longman.png" style="width:100%" align="middle" alt="Spring (noun) in Longman English dictionary"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Spring (noun) in <a href="https://www.ldoceonline.com/dictionary/spring" target="_blank">Longman English dictionary</a>
        </div>
    </div>
</div>

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/spring_noun_Collins.png" style="width:100%" align="middle" alt="Spring (noun) in Collins English dictionary"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Spring (noun) in <a href="https://www.collinsdictionary.com/dictionary/english/spring" target="_blank">Collins English dictionary</a>
        </div>
    </div>
</div>


First of all, the **structure** of the senses for the word spring (noun) is not completely identical in the two dictionaries; in the Collins dictionary, senses are provided independently (at least for this entry) while in the Longman dictionary, there is a hierarchy of senses which is supposed to provide more fine-grained information, e.g. `curved metal` is sense 2 where two subsenses (`a` and `b`) are provided. 

Furthermore, the **content** of those descriptions which refer to the same thing, is not similar neither, e.g. `something, usually a twisted piece of metal, that will return to its previous shape after it has been pressed down`, in Longman, is semantically equivalent to `a spring is a spiral of wire which returns to its original shape after it is pressed or pulled.` but textually different. 


During my visit to Copenhagen, I focused on aligning Danish lexicographic data, particularly senses in two monolingual dictionaries [Ordbog over det danske Sprog (ODS)](https://ordnet.dk/ods){:target="_blank"} and [Den Danske Ordbog (DDO)](https://ordnet.dk/ddo){:target="_blank"}. We define our **sense alignment task as linking semantically equivalent senses for the same entries across resources**. In the following, you can find a brief description of the two resources: 

<table>
  <tr>
  <th>
    <div class="card mb-3 text-center">
        <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/pictures/Denmark2019/IMG_20190614_152259.jpg" style="width:100%" align="middle" alt="Ordbog over det danske Sprog (ODS)"/>
    </div>
  </th>
  <th>
      <div class="card mb-3 text-center">
        <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/pictures/Denmark2019/IMG_20190626_225512.jpg" style="width:100%" align="middle" alt="Den Danske Ordbog (DDO)"/>
      </div>
  </th>
  </tr>
  <tr>
  <td>
    <b>ODS (historical dictionary)</b>
    <ul>
      <li>Historical Danish dictionary</li>
      <li>Deals with Danish language from 1700 to 1950.</li>
      <li>Richly-described entries</li>
      <li>Noisy senses (both, in printed and XML versions)</li>
      <li>Senses not linked to any external resource</li>
    </ul>
  </td>
  <td>
  <b>DDO (modern dictionary)</b>
  <ul>
    <li>Modern Danish dictionary</li>
    <li>Created according to modern Danish language norms</li>
    <li>Senses are more descriptive</li>
    <li>Mostly linked to the DanNet at sense level</li>
  </ul>
  </td>
  </tr>
</table>


As we saw above, the **differences in structure and content** make sense alignment a challenging task. However, these are not the only challenges that we should go through for our Danish data. In our case, the two dictionaries are created in **different periods of time**, one in the modern form of the language and the other in a historical one. This increases the complexity of alignment because of the following factors:

- **Lexical choice**: some words are not used for the same purposes or have completely lost their senses through time 
  - *vandklar* (clear) in *vandklar vædske* (clear liquid) to describe *Alkohol* (alcohol) in ODS does not sound natural to Modern Danish speakers. In the Modern Danish dictionary, DDO, *farveløs* (colorless) is used instead. 
- **Orthographic variations**: The Danish orthography has changed since ODS was published (1919 to 1956).
  - *kjøn* vs. *køn*
  - *paa* vs. *på*


### An example

Let's look up a Danish word in the two dictionaries and compare what we get: "*afstand*" ([pronunciation](https://static.ordnet.dk/mp3/11000/11000756_1.mp3){:target="_blank"}).

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/afstand_DDO_ODS.png" style="width:100%" align="middle" alt="Afstand (noun) in DDO and ODS"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Afstand (noun) in <a href="https://ordnet.dk/ddo/ordbog?query=afstand" target="_blank">DDO</a> (in left) and <a href="https://ordnet.dk/ods/ordbog?query=afstand" target="_blank">ODS</a> (in right).
        </div>
    </div>
</div>

The very first thing that looks different in the two dictionaries is that the noun entry in ODS is capitalized while in DDO, it is in small. This is because Danish nouns historically used to follow the capitalization rule, as German still does, but is no more the case for Modern Danish. 

Unlike DDO where senses are fine-grained and well-organized with concise and clear descriptions and structure, ODS descriptions contain irrelevant information such as citations and examples which may not be directly useful for our task. On the other hand, such information are not structured in a way that we can retrieve certain parts easily. 




## Experiments results 

As we did not have any gold-standard dataset in place, I could not evaluate the performance of my experiments in terms of precision, recall and F-measure. However, according to the feedbacks that I received, most matchings looked pertinent. There is still a long way to go and a lot of room to improve that I hope that the following ideas can be of help: 

- Creating a gold-standard dataset
- Text paraphrasing: converting ODS senses into more representative ones by
  - Removing noises
  - Lexical and orthographic normalization
  - Paraphrasing techniques 

In addition, I believe that corresponding the hierarchical sense structure in DDO where any semantically-distinct sense of the entry is provided separately, requires the extractions of all possible senses, in the sense descriptions of ODS, independent from the original structure. Some of the senses are no more valid and some others have changed their semantic relationship through time. Therefore, considering a larger range of semantic relationships such as hypernymy and hyponymy in addition to synonymy, antonymy and equivalence might should be taken into account as well. 

We are planning to organize a shared task in a near future and provide our data for the same task of sense alignment. 

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/pictures/Denmark2019/IMG_0155.JPG" style="width:100%" align="middle" alt="Afstand (noun) in DDO and ODS"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Presenting the outcomes of my visit to some of the wonderful lexicographers and editors at DSL. 
        </div>
    </div>
</div>

## Gallery

I think Copenhagen should be called *Podilatopolis*! (just a fancy word that I coined to mean *city of bikes* (ποδήλατο (bike), πολις (city))). Fortunately, I could discover the city by bike. I was also lucky enough that some of the interesting annual events in Denmark happened during my stay, such as the [Royal Run 2019](https://www.royalrun.dk/) on June 10, the 800th birthday of the Danish flag "*Dannebrog*" on June 15, Sankt Hans Aften on June 23, a Nordic tradition celebrated on the night before the Midsummer's Day and, a couple of interesting seminars and performances. 

I truly enjoyed everything in Denmark and admired so much the Danish culture and way of life. I would really like to learn Danish one day too. By the way, did you know Danish has over **40 vowels** making it one of the unique languages in the world with so many vowels? Read more [here](http://ias.au.dk/fileadmin/internationalstaff.au.dk/UIC/Peter_Bakker_-_UIC_19-08-2015.pdf){:target="_blank"} and [here](http://ias.au.dk/fileadmin/internationalstaff.au.dk/UIC/Presentations/bakker2013Danishinternationalcenter.pdf){:target="_blank"}.

Finally, I would really like to thank everyone who made this experience that memorable to me. I hope that I can meet all of them again soon. **Mange tak!**

Here are some of the photos that I took during my visit (the lighthouse was taken in Malmö, Sweden, though).

<div class="card-columns">
    {% for img in page.gallery %}
    <div class="card">
      <a href="{{ img }}" target="_blank">
        <img class="card-img-top" src="{{ img }}" />
      </a>
    </div>
    {% endfor %}
</div>


<hr class="col-xs-12">
Last updated on 27 June 2019.