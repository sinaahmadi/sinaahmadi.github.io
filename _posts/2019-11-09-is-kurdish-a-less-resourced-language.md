---
title: Is Kurdish a less-resourced language?
show_profile: false
tags:
- Less-resourced languages
- NLP
- Kurdish language processing
- Kurdish
---

**TLDR** *Yes*, for the time being, but hopefully **no**, if we take serious actions.

 To know more about why a language spoken by 20-30 million speakers should still be less-resourced, read the post. 🙃

---

A language is called "less-resourced" when the only available resources for computationally processing it are descriptive grammars and online resources. Regarding Kurdish, it has been always highlighted by the researchers that *Kurdish is a less-resourced language*. As the following figure indicates, Kurdish is not the only less-resourced language, but most languages in the world are actually still less-resourced. More precisely, among the languages spoken in the Middle East, including Kurdish as a major one, only a couple of them can be considered medium-resourced, let alone high-resourced!


<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/nlp_resource_hierarchy.png" style="width:100%" align="middle" alt="A conceptual view of the NLP resource hierarchy"/>
    <div class="card-body bg-light">
        <div class="card-text">
            A conceptual view of the NLP resource hierarchy (<a href="https://ruder.io/unsupervised-cross-lingual-learning/" target="_blank">Source</a>).
        </div>
    </div>
</div>

In this post, I am going to dig more into this problem: To what extent Kurdish is less-resourced? And, what types of resources are available/missing?

## Kurdish lexicography

Lexicography is the science of words and compiling them into resources called "dictionaries". Nowadays, much effort in this field is on creating electronic dictionaries, therefore called electronic lexicography (or e-lexicography). Electronic dictionaries form the backbone of fundamental applications and tools in natural language processing, such as spell-checking, named-entity recognition, i.e. finding name of places, people or organisations, and so on.

In a recent study [(Ahmadi & Hassani, 2019)](https://elex.link/elex2019/wp-content/uploads/2019/09/eLex_2019_50.pdf){:target="_blank"}, we carried out a comprehensive study on the Kurdish lexicographic resources based on the major Kurdish dialects (Kurmanji, Sorani, Hawrami, Southern Kurdish and Zaza), scripts (Latin, Persian-Arabic and Cyrillic) and dictionary types (bilingual, monolingual or multilingual). The results were **astonishing**. Let's take a look at what our analysis says: 

<div class="card mb-3 text-center">
	<iframe width="700" height="500" align="middle" frameborder="0" scrolling="no" src="//plot.ly/~sinahm/29.embed?showlink=false"></iframe>
	<div class="card-body bg-light">
    <div class="card-text">
      Kurdish Lexicographic Resources: A survey
        <a href="https://sinaahmadi.github.io/docs/articles/ahmadi2019kurdishlex.pdf" target="_blank">(Source)</a>.
    </div>
</div>
</div>

Our survey which included all the dictionaries that we could have access in printed or electronic version, i.e. 71 dictionaries, suggests that all the Kurdish dialects have at least one lexicographic resource. Proportionally, more than 70% of the Kurdish dictionaries are in Sorani or Kurmanji. Only a handful of the resources are electronic, [FreeDict](https://freedict.org/){:target="_blank"} which provides Kurmanji-Turkish/German/English dictionaries, as well as a Sorani-Kurmanji dictionary, [Wiktionary](https://www.wiktionary.org/){:target="_blank"} and [Dictio](dictio.kurditgroup.org/){:target="_blank"}, to mention a few. On the other hand, only a couple of those resources are in structured formats like XML and none of them in RDF. This makes them less interoperable and integrable in other resources and applications.  

## Domain-specific and general-purpose corpora

Terminological resources, aka terminologies, and glossaries are other types of resources which provide information about a specific domain. Various such resources exist for Kurdish, such as glossary of name of animals or dictionary of cities and villages. One of the outstanding resources which is also one of the only online ones is the [Kurmancî](https://www.institutkurde.org/en/publications/kurmanci/){:target="_blank"} biannual  linguistic  magazine  published  by  the  Kurdish Institute of Paris since 1987. You can query the database of this terminological resource [here](https://www.institutkurde.org/en/publications/kurmanci/dictionary/){:target="_blank"}.


## General literature 

[Vejîn Books](http://www.vejinbooks.com/view/%D8%AF%DB%95%D8%B3%D8%AA%D9%BE%DB%8E%DA%A9){:target="_blank"} is an outstanding initiative for collecting historical and literary text in Kurdish. The project is a Wikiproject for which many collaborators actively contribute to the create electronic version of classical Kurdish works, such as poems. 


[The Kurdish Digital Library of the Kurdish Institute of Paris](http://bnk.institutkurde.org/?l=en){:target="_blank"} also contains over 10,000 monographs about the Kurds in 25 languages. However, not all of them are available in electronic version and accessible to the public. 


## Kurdish media

The Kurdish media has played a primordial role during the past decades in creating a universal Kurdish identity. Happily, there are many Kurdish news agencies which create content in Kurdish on the Web on a daily basis. Such resources not only enrich the language in terms of the resources, but also facilitate the computational processing of the Kurdish language. For instance, to create a machine translation system, a huge amount of parallel sentences are required. A parallel corpus, a corpus containing such parallel examples in two or several languages, is then used to create models for machine translation. Some of the main Kurdish broadcast news stations are the followings:

- [Kurdistan24](https://www.kurdistan24.net/en/){:target="_blank"}:
Turkish 	English 	Kurmanji (Latin script) 	Sorani (Arabic script) 	Arabic 	 Persian
- [NRT](https://www.nrttv.com/Ba/Default.aspx){:target="_blank"}:
Kurmanji (Latin and Arabic scripts) 	Sorani (Arabic script) 	English 	Arabic
- [Rûdaw](https://www.rudaw.net/english){:target="_blank"}:
Turkish 	English 	Kurmanji (Latin script) 	Sorani (Arabic script) 	Arabic


I spent some time playing with the links of the news articles to discover if the same news articles are available in different languages; this is important as we can make parallel corpora based on the news content. It seems that the same news articles are not available for all the languages. However, changing the language ID in the URL of a news to that of the other languages gives relatively identical topics in some cases. For instance, the following is the content of [this new](https://www.rudaw.net/english/middleeast/iraq/10112019){:target="_blank"} in the available languages on [Rûdaw](https://www.rudaw.net){:target="_blank"}: 


<table align="center" class="table table-bordered table-hover table-condensed">
<thead>
  <tr>
    <th>News agency</th>
    <th>English</th>
    <th>Arabic</th>
    <th>Sorani</th>
    <th>Kurmanji</th>
    <th>Turkish</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.rudaw.net/english" target="_blank">Rûdaw</a></td>
    <td>Resolution of ongoing protests in central and southern Iraq cannot be achieved through a security solution, Iraq’s three presidencies and its judiciary chief asserted in a joint meeting on Sunday - despite security forces continuing their crackdown to bring an end to the protests.</td>
    <td>أكد صالح محمد العراقي، المقرب من زعيم التيار الصدري، مقتدى الصدر، أن الأخير لم يتفق مع أي جهة بشأن إبقاء الحكومة الحالية برئاسة عادل عبدالمهدي، مضيفاً: "الصدر مع الشعب وكفاكم سماعاً للأكاذيب والإشاعات".</td>
    <td>سەرچاوەیەك لە نووسینگەی عەلی سیستانی، مەرجەعی باڵای شیعەی عێراق لە نەجەف رەتیكردەوە مەرجەعیەت لایەنێك بێت لە رێككەوتنی نێوان سەدر، حەكیم و قاسم سولەیمانی لەبارەی كۆتاییهێنان بە خۆپیشاندانەكان و هێشتنەوەی حكومەتی ئێستای عێراق.</td>
    <td>Fraksyona Nehcî ya Wetenî li Parlamentoya Iraqê ragihand ku divê di dema 30 rojan de parlamento û ‎hikûmet bên hilweşandin û yasayeke nû bo hilbijartinê were derxistin.‎</td>
    <td>İnsan Hakları İzleme Örgütü (HRW), Iraklı güvenlik güçlerini ülkede devam eden gözstericilere karşı aşırı şiddet kullanmakla eleştirdi. Örgüt, sadece 25 Ekim’nden bu yana devam eden gösterilerde 16 kişinin gaz bombası kapsülleri ile öldürüldüğünü açıkladı.</td>
  </tr>
</tbody>
</table>

## Community efforts

### Wikipedia 

Wikipedia is a free encyclopaedia created by volunteers. According to the [list of Wikipedias](https://meta.wikimedia.org/wiki/List_of_Wikipedias){:target="_blank"}, the three available Kurdish dialects, Kurmanji, Sorani and Zazaki, have over 10,000 articles on Wikipedia. There are a few other websites with wiki functionalities, like [https://www.kurdipedia.org](https://www.kurdipedia.org){:target="_blank"}, that even if we take them into account, there is a considerable margin for Kurdish to be considered a medium-resourced language (having 100k documents). The following table summarises the current status of the Kurdish dialects on Wikipedia (November 2019):

<table align="center" class="table table-bordered table-hover table-condensed">
	<thead>
		<tr>
			<th>Language</th>
			<th>Wiki </th>
			<th>Articles </th>
			<th>Total </th>
			<th>Edits </th>
			<th>Admins </th>
			<th>Users </th>
			<th>Active Users </th>
			<th>Files </th>
			<th>Depth</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="https://ku.wikipedia.org/wiki/Destp%C3%AAk" target="_blank"> Kurmanji Kurdish</a></td>
			<td>ku </td>
			<td>26334 </td>
			<td>64874 </td>
			<td>739494 </td>
			<td>4 </td>
			<td>39013 </td>
			<td>57 </td>
			<td>580 </td>
			<td>24 </td>
		</tr>
		<tr>
			<td><a href="https://ckb.wikipedia.org/wiki/%D8%AF%DB%95%D8%B3%D8%AA%D9%BE%DB%8E%DA%A9" target="_blank">Sorani Kurdish</a></td>
			<td>ckb </td>
			<td>24925 </td>
			<td>130974 </td>
			<td>645920 </td>
			<td>7 </td>
			<td>37344 </td>
			<td>142 </td>
			<td>955 </td>
			<td>89</td>
		</tr>
		<tr>
			<td><a href="https://diq.wikipedia.org/wiki/Pela_Seri" target="_blank">Zazaki</a></td>
			<td>diq </td>
			<td>12184 </td>
			<td>31055 </td>
			<td>399744 </td>
			<td>6 </td>
			<td>18903 </td>
			<td>67 </td>
			<td>215 </td>
			<td>31</td>
		</tr>
		<tr bgcolor="#d0d3d4">
			<td><a href="https://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C" target="_blank">Persian</a></td>
			<td>fa </td>
			<td>700361 </td>
			<td>4479817 </td>
			<td>27557535 </td>
			<td>31 </td>
			<td>869033 </td>
			<td>5142 </td>
			<td>59532 </td>
			<td>179 </td>
		</tr>
		<tr bgcolor="#d0d3d4">
			<td><a href="https://ca.wikipedia.org/wiki/Portada" target="_blank">Catalan</a></td>
			<td>ca </td>
			<td>628692 </td>
			<td>1547511 </td>
			<td>22264282 </td>
			<td>21 </td>
			<td>338436 </td>
			<td>1597 </td>
			<td>11863 </td>
			<td>31</td>
		</tr>
		<tr bgcolor="#d0d3d4">
			<td><a href="https://sr.wikipedia.org/wiki/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B0" target="_blank">Serbian</a></td>
			<td>sr </td>
			<td>626216 </td>
			<td>3838890 </td>
			<td>22263049 </td>
			<td>18 </td>
			<td>252892 </td>
			<td>771 </td>
			<td>32517 </td>
			<td>153 </td>
		</tr>
	</tbody>
</table>


### Wiktionary

Similar to Wikipedia, Wiktionary is also a free platform where volunteers provide lexicographic data. As of November 2019, according to the [Wiktionary statistics](https://en.wiktionary.org/wiki/Wiktionary:Statistics){:target="_blank"}, there are less than 1,300 lemmata available for Kurdish on Wiktionary!

<table align="center" class="table table-bordered table-hover table-condensed">
	<thead>
		<tr>
			<th title="Field #1">Dialect</th>
			<th title="Field #3">#Gloss definitions  </th>
			<th title="Field #4">#Entries  </th>
			<th title="Field #5">#Gloss entries  </th>
			<th title="Field #6">#Form definitions  </th>
			<th title="Field #7">Total definitions</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="https://en.wiktionary.org/wiki/Category:Kurdish_language" target="_blank">Northern Kurdish (Kurmanji)</a></td>
			<td>2251 </td>
			<td>5340 </td>
			<td>2034 </td>
			<td>9188 </td>
			<td>11439</td>
		</tr>
		<tr>
			<td><a href="https://en.wiktionary.org/wiki/Category:Central_Kurdish_language" target="_blank">Central Kurdish (Sorani)</a></td>
			<td>339  </td>
			<td>290  </td>
			<td>279  </td>
			<td>11 </td>
			<td>350</td>
		</tr>
		<tr>
			<td><a href="https://en.wiktionary.org/wiki/Category:Southern_Kurdish_language" target="_blank">Southern Kurdish</a></td>
			<td>55  </td>
			<td>46  </td>
			<td>46   </td>
			<td>0 </td>
			<td>55</td>
		</tr>
		<tr>
			<td><a href="https://en.wiktionary.org/wiki/Category:Zazaki_language" target="_blank">Zazaki</a></td>
			<td>842  </td>
			<td>697  </td>
			<td>691  </td>
			<td>5  </td>
			<td>847</td>
		</tr>
	</tbody>
</table>

I am not particularly happy that there are only 226k articles in Kurdish available on Wikipedia, in comparison to over 4 million in Persian, 1.5 million in Catalan and 3.8 million in Serbian!

## Conclusion

Now that we know about some of the major resources of the Kurdish language, I would like to draw a few conclusions:

1. Kurdish **is** less-resourced because of lack of electronic resources. Just take a look at the dictionaries. There are many Kurdish dictionaries which are only available in hardcopy while they could be used on the Web, if available electronically. Which one of those many Russian-Kurdish dictionaries have you ever queried online?

2. Kurdish **will remain** less-resourced, if appropriate actions could not be taken to
 - retro-digitize printed resources
 - contribute to the current platforms such as Wikipedia and Wiktionary
 - raise awareness among Kurdish speakers to use their own language to create content and write on the Web
 - encourage Kurdish writers and scholars to provide their works free and open to the public
3. Kurdish language processing: in a [previous post](https://sinaahmadi.github.io/posts/why-kurdish-language-processing-matters.html){:target="_blank"}, I have discussed why Kurdish language processing matters. One of the main reasons is actually to create new resources, manipulate the current ones and process them automatically. 


<hr class="col-xs-12">
Last updated on 16 November 2019.




