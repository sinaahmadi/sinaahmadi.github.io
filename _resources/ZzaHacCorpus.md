---
title: Zaza-Gorani Corpus
show_profile: true


gallery:
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/images/Hawraman_6.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/images/Hawraman_4.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/images/Hawraman_2.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/images/Hawraman_3.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/images/Hawraman_1.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/images/Hawraman_5.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/images/Hawraman_7.jpg
---

In 2008, when I was 15, I went for the first time to [Hawraman](https://en.wikipedia.org/wiki/Hawraman){:target="_blank"}, precisely to [Hawraman Takht](https://goo.gl/maps/ut4cYyTj4SsbyBYD7){:target="_blank"}. I remember how much I was intrigued by everything! I went to a local grocery and the saleswoman counted the money when she gave it back to me and I almost did not understand anything! One word that I still remember she used was *yerê* [yaere:] for three, while in [Sorani Kurdish](https://en.wikipedia.org/wiki/Sorani){:target="_blank"} we say *sê* [se:].

Not only the language fascinated me, I was also impressed by their way of life. They build their houses like stairways on steep mountain slope. I cite Minorsky's description in [the Guran](https://ia801201.us.archive.org/15/items/Minorsky1943BSOASGuran/Minorsky_1943_BSOAS_Guran.pdf){:target="_blank"} as follows:

<blockquote class="blockquote" style="text-align: center;">
	In the gorges of Awraman (near Tawele and Beyare) one cannot help admiring the extraordinary skill with which the villagers build up and utilize small terraces of land for gardening and general crops. 
</blockquote>


Although Kurdish and Hawrami speaking regions are geographically contiguous and have been historically and culturally close together, there are significant differences when it comes to the language. The common belief is that Hawrami is a dialect of Kurdish. At the time, I was not much aware of the linguistic differences of the two *languages* and was thinking of Hawraman as another Kurdish speaking region and therefore, was considering Hawrami as a dialect of Kurdish. Now, I know that I was wrong!

<div class="card mb-3 text-center">
  <div class="card-columns">
      {% for img in page.gallery %}
      <div class="card">
        <a href="{{ img }}" target="_blank">
          <img class="card-img-top" src="{{ img }}" />
        </a>
      </div>
      {% endfor %}
  </div>
  <div class="card-body bg-light">
    <div class="card-text">
        A few photos of Hawraman. Photo by courtesy of <a href="https://www.facebook.com/Elmizade" target="_blank">Salah Elmizade</a>.
    </div>
  </div>
</div>


A few years later, I came to know about another ethnicity called the [Zaza](https://en.wikipedia.org/wiki/Zazas){:target="_blank"}s. Being a part of the Kurdish regions of Turkey, I found out that [Zazaki](https://en.wikipedia.org/wiki/Zaza_language){:target="_blank"} is considered a dialect of Kurdish too (by some). Reading a few references about Zaza and Gorani, the language to which Hawrami alos belongs, it turned out that I was not well-informed about those two which, in fact, belong to another language branch called the [Zaza-Gorani language family](https://en.wikipedia.org/wiki/Zaza%E2%80%93Gorani_languages){:target="_blank"} and not the [Kurdish](https://en.wikipedia.org/wiki/Kurdish_languages){:target="_blank"} branch of the [Indo-European languages](https://en.wikipedia.org/wiki/Indo-European_languages){:target="_blank"}. Zazaki and Gorani, along with Shabaki, all belong to the Zaza-Gorani language family and have many characteristics in common. 


## The Zaza-Gorani corpus

As a native Kurdish speaker interested in languages and particularly computational linguistics, I recently delved into the same question to understand more about the differences between Kurdish and Zaza-Gorani languages. To this end, I created a corpus using news articles from various sources in several topics such as science, politics, culture and art. The outcome of this project is presented in [this paper]({{site.url}}/docs/articles/ahmadi2020zazagorani.pdf){:target="_blank"}. The following provides a description of the corpus:

<table align="center" class="table table-bordered table-hover table-condensed">
  <tr>
    <th></th>
    <th>Zazaki</th>
    <th>Gorani</th>
  </tr>
  <tr>
    <td>Articles No.</td>
    <td>4,855</td>
    <td>428</td>
  </tr>
  <tr>
    <td>Words tokens</td>
    <td>1,633,770</td>
    <td>194,563</td>
  </tr>
  <tr>
    <td>Words types</td>
    <td>102,665</td>
    <td>41,454</td>
  </tr>
   <tr>
    <td>Words types</td>
    <td>10,802,266</td>
    <td>2,246,425</td>
  </tr>
  <tr>
    <td>Average word length</td>
    <td>4.84</td>
    <td>5.50</td>
  </tr>
</table>

Moreover, we examined the [Zipf's Law](https://en.wikipedia.org/wiki/Zipf%27s_law){:target="_blank"}, also known as the rank-size distribution, for the Kurdish and Zaza-Gorani corpora. This rule states that in a reasonably large data set, including language corpus, there is a correlation between word frequencies and word ranks, both in logarithmic scales, that follows a power law function. 

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/VarDial2020_zipf_s_distribution.png" style="width:100%" align="middle" alt="Zaza-Gorani corpus"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Zipf's Law in the <a href="{{ site.url }}/resources/pewan.html" target="_blank">Pewan</a>, containing Sorani and Kurmanji Kurdish texts, versus the Zaza-Gorani corpus, containing Zazaki and Gorani texts
        </div>
    </div>
</div>  


## Get the corpus

Download the Zaza-Gorani corpus at [https://github.com/sinaahmadi/ZazaGoraniCorpus](https://github.com/sinaahmadi/ZazaGoraniCorpus){:target="_blank"}.

If you use this resource, please cite the following publication:

{% highlight plaintext %}
@inproceedings{ahmadi2020zazagorani,
  title= "Building a Corpus for the Zaza–Gorani Language Family",
  author= "Ahmadi, Sina",
  booktitle="Proceedings of the Seventh Workshop on NLP for Similar Languages, Varieties and Dialects (VarDial 2020)",
  pages="",
  year="2020"
}

{% endhighlight %}
