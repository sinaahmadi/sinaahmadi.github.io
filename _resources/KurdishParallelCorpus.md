---
title: Kurdish Multilingual Parallel Corpus
show_profile: true
---

Aligned [corpora](https://en.wikipedia.org/wiki/Text_corpus){:target="_blank"} are essential resources with various applications in natural language processing, particularly in [Machine Translation](https://en.wikipedia.org/wiki/Machine_translation){:target="_blank"}. Such a resource is composed of pairs of sentences or chunks of sentences in two languages or dialects which are translations and thus, useful to train a model for automatic translation. One can imagine how tedious and expensive the task of manual translation can be!

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/parallel_corpus_methodology.png" style="width:100%" align="middle" alt="Kurdish Lex workflow"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Our approach to automatically retrieve identical news articles
        </div>
    </div>
</div>  

[Kurdish](https://en.wikipedia.org/wiki/Kurdish_languages){:target="_blank"}, as a less-resourced language, lacks large parallel corpora which are required for further progress in creating statistical and neural machine translation systems. To tackle this problem in a viable way, we create a large [parallel text](https://en.wikipedia.org/wiki/Parallel_text){:target="_blank"} for [Kurmanji](https://en.wikipedia.org/wiki/Kurmanji){:target="_blank"} and [Sorani](https://en.wikipedia.org/wiki/Sorani){:target="_blank"} dialects of Kurdish and extend it to include Kurdish-English translations using multilingual news websites. Although there are many multilingual and multi-dialectal news websites for Kurdish, none of them provide their content in an inter-operable way. In other words, an identical news article is translated differently and oftentimes, the translations are not even linked together.


## Parallel corpus

Our parallel corpus contains three manually-aligned corpus in Sorani-Kurmanji, Sorani-English and Kurmanji-English in various formats, namely [Translation Memory eXchange](https://en.wikipedia.org/wiki/Translation_Memory_eXchange){:target="_blank"} file format (`.tmx`), parallel annotated text useful for [ParaConc](https://paraconc.com/){:target="_blank"} and raw parallel texts (`.txt`). In the latter, each line corresponds to the same line in the other aligned file. This corpus contains **12,327** translation pairs in the two major dialects of Kurdish, Sorani and Kurmanji. We also provide **1,797** and **650** translation pairs in English-Kurmanji and English-Sorani.

It should be noted that machine translation methods, particularly those based on [neural networks](https://en.wikipedia.org/wiki/Neural_network){:target="_blank"}, have voracious appetite for data. As a consequence, these datasets may be more suitable for evaluation purposes, fine-tuning or even for trainings for low-resource setups.

The following shows a sample of the corpus:

<table align="center" class="table table-bordered table-hover table-condensed">
<thead>
  <tr>
    <th>Source</th>
    <th>Translation target</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>لە سیاسەتی فەرمیدا ئەرکێکی زۆری خستە سەرشانی.</td>
    <td>Di siyaseta legal de wezîfeyên girîng da ser milê xwe.</td>
  </tr>
  <tr>
    <td>Bi biharê re li çiyayên Kurdistanê gelek celebên pincaran şîn bû.</td>
    <td>In the mountains of Kurdistan different kinds of edible plants grow in spring.</td>
  </tr>
  <tr>
    <td>لەشاری کاراسنۆدار-ی فیدراسیۆنی ڕووسیا کۆرسی زمانی کوردی بۆمندالان کرایەوە.</td>
    <td>A Kurdish language course has been started for children in the Russian city of Krasnodar.</td>
  </tr>
</tbody>
</table>


## Nota bene

- If you are interested in machine translation in general, and in Kurdish language processing, in particular, check out this paper entitled [Towards Machine Translation for the Kurdish Language]({{site.url}}/docs/articles/ahmadi2020machine.pdf){:target="_blank"}. 
- Shortly after this project in August 2020, the [Microsoft Translation Service](https://en.wikipedia.org/wiki/Microsoft_Translator){:target="_blank"} added Sorani and Kurmanji to its service. See [https://www.bing.com/translator](https://www.bing.com/translator){:target="_blank"}.
- Our approach in this project can be applied to any other language/dialect, or even further enrich the resource for Kurdish. If you are interested in the task, please check out the annotation guidelines at [here](https://github.com/KurdishBLARK/InterdialectCorpus/tree/master/X_Guidelines){:target="_blank"}. 
- For the alignment task, check out [InterText](https://wanthalf.saga.cz/intertext){:target="_blank"}. Check out this [short tutorial video](https://www.youtube.com/watch?v=8OSHkF56H8Q){:target="_blank"}.


## Cite this corpus

Download this parallel corpus at [https://github.com/KurdishBLARK/InterdialectCorpus](https://github.com/KurdishBLARK/InterdialectCorpus){:target="_blank"}. If you use this resource, please cite the following [paper]({{site.url}}/docs/articles/ahmadi2020leveraging.pdf){:target="_blank"}:

{% highlight plaintext %}
@misc{ahmadi2020leveraging,
      title={Leveraging Multilingual News Websites for Building a Kurdish Parallel Corpus}, 
      author={Sina Ahmadi and Hossein Hassani and Daban Q. Jaff},
      year={2020},
      eprint={2010.01554},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}

{% endhighlight %}