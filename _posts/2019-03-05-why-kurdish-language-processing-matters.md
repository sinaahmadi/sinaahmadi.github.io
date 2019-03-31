---
title: Why Kurdish language processing matters?
show_profile: false
tags:
- Kurdish
- NLP
- Kurdish language processing
- Less-resourced languages
---

Since the first time that I touched my home computer keyboard in 2001, I used to ask myself if it would be possible to make computer understand my mother language, [Kurdish](https://en.wikipedia.org/wiki/Kurdish_languages){:target="_blank"}. Well, what I was imagining was definitely something limited to a Kurdish interface for Windows, particularly when I was going through the installation descriptions of [Return to Castle Wolfenstein](https://en.wikipedia.org/wiki/Return_to_Castle_Wolfenstein){:target="_blank"} and [Mafia: The City of Lost Heaven](https://en.wikipedia.org/wiki/Mafia_(video_game)){:target="_blank"}! Let alone the spontaneous questions that [Clippy](https://en.wikipedia.org/wiki/Office_Assistant){:target="_blank"} was asking and how much I was curious to see the same messages in Kurdish.

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/clippy.png" style="width:30%" align="middle" alt="Kurdish Clippy!"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Me, when I was 9. “What if Clippy could ask “çon î” (how are you) in Kurdish?
        </div>
    </div>
</div>

In 2000s, there were a few application-based projects for introducing Kurdish to the computer world. For instance, a few Kurdish fonts were made based on the Persian and Arabic keyboards and the interface of some softwares were also translated into Kurdish. Since then, a lot of things have changed in the Information Technology (IT) world. Computers got smaller and more efficient, connections got faster than ever and subsequently, the world has become a smaller place. And still, the overall availability of electronic resources and processing tools for Kurdish is not to a satisfying extent. Kurdish is not just a language with a history that reflects the culture of its speakers. Indeed, it is the only element that has kept Kurds as a nation.

In this post, I would like to address the importance of language technology for Kurdish language. Nowadays, with a plethora of (unstructured) online Kurdish resources and the recent progress in natural language processing and machine learning, I think that it is more feasible than ever to provide tools and resources for finally making Kurdish understandable by machine. I will also explain why I believe that the difficulty of processing Kurdish language is no more like the 2000s and there is currently a huge potential for Kurdish processing.

## What is Natural Language Processing?

Formally speaking, Natural Language Processing (NLP) refers to the computer processing of *natural language*: the language that we speak with. NLP is a part of the field of study which is called *language technology*. If you are using a spell checker on your cell phone or your computer, or you use Siri or Google Assistant to ask about the nearest restaurant, then you have been already using some of the most common applications of NLP. Language technology is so present in nowadays life that most of us have been using them without even knowing about!

Language technology is a primordial part of the Web. At our current pace (in 2019), we are producing 2.5 quintillion bytes of data each day, in other words 10<sup>18</sup> bytes ([source](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read/#66bda05960ba){:target="_blank"}), mostly unstructured data such as text, speech and so on. NLP technologies enable us to extract information from data and process the data for different applications.

<div class="card mb-3 text-center">
<iframe width="700" height="500" align="middle" frameborder="0" scrolling="no" src="//plot.ly/~sinahm/4.embed?showlink=false"></iframe>
<div class="card-body bg-light">
    <div class="card-text">
      NLP total revenue by segments. Recreated based on the data from
        <a href="https://www.tractica.com/newsroom/press-releases/natural-language-processing-market-to-reach-22-3-billion-by-2025/" target="_blank">Tractica</a>.
    </div>
</div>
</div>

So, if you have a small or big business and you would like to know about the public opinion regarding your services, or you are a politician and would like to know what is happening around, or you are doing something for which human communication and interaction is important, then you will definitely need language technology.

### NLP applications: a few examples for Kurdish

Some of the applications of NLP are:

- **Transliteration**: Kurdish is written in two scripts. The Latin-based script is used for writing in Kurmanji dialect, mostly spoken in Bakûr (means “north” in Kurdish and refers to the Kurdish regions in Turkey) and parts of Rojava (means “west” in Kurdish and refers to the Kurdish regions in Syria), while the Arabic-based script is used in Rojhełat (“east” in Kurdish, the Kurdish regions of Iran) and Basûr (“south” in Kurdish, the Kurdish regions of Iraq). A transliterator enables us to automatically convert one script to the other. As an example, “birayetî” (brotherhood in Kurdish) in the Latin-based script is transliterated as “برایەتی” in the Arabic-based script.

- **Morphological analysis**: Kurdish is an inflectional language. That is, a word can turn into a new word by adding a set of morphemes, such as suffixes and prefixes. For instance, “jinekan” (the women) is composed of “jin” (woman) and “ekan” (definite article added as a suffix to the noun). Detecting each morpheme is the task of morphological analyser. This is challenging, especially because of the huge number of derivational and inflectional morphemes in Kurdish. Another example, the Sorani word “dîtimin” which means “I saw them” is composed of “dîtim”, “I saw”, and “in” the object added as an accusative suffix.

- **Parts of Speech Tagging**: How do we know what is the grammatical role of each parts of this sentence : “Min gułekanim bon kird” (I smelled the flowers)? Well, that is what a part-of-speech tagger (POS tagger) does. For that case, a Kurdish PoS tagger will tell you that “min” is a pronoun, “gułekanim” is a definite noun and “bon kird” is the first singular person of the verb “bon kirdin” (to smell) in the past tense.

- **Machine translation**: This is maybe the most popular application of NLP. What if all dialects of Kurdish could be translated into other languages automatically? What is the equivalent of the Hawrami word “jerej” in Kurmanji and Sorani?[1] Machine translation takes care of the automatic translation using a parallel corpus. A corpus is a collection of text collected for a specific purpose. In a parallel corpus, the texts in two languages are aligned together. For instance, in a parallel corpus of Sorani Kurdish and English, for “*The distance between Sanandaj and Sulaymaniyah is 253 kilometers*”, the following sentence is aligned: “*mewday nêwan Sine û Silêmanî 253 kîlomîtr e*”. And now, imagine that in our corpus which contains thousands of parallel sentences, there are 100 sentences in which those words are used. That is where machine translation, based on statistical methods and more recently, neural network models, predicts that “Sine” means “Sanandaj” and “Silêmanî” means “Sulaymaniyah”, and even can translate sentences and more sophisticated texts.

- **Speech recognition** Just try “OK google” on your Android phone, or "Hey, Siri” to activate your speech recogniser. Then talk as you talk with a real person and let the machine deal with it! That is what a speech recogniser does.

To discover more about NLP, [Jurafsky and Martin's handbook in speech and language processing](https://web.stanford.edu/~jurafsky/slp3/ed3book.pdf){:target="_blank"} and  [Natural Language Processing and its Applications](https://www.cicling.org/2010/Vol46.pdf){:target="_blank"} are two useful resources.

## Challenges of Kurdish language processing

Kurdish is a less-resourced language. A less-resourced language is a language for which there is not enough language resources to be fully processed. In the following, I mention some of the main characteristics of Kurdish language which are also the main reasons that may explain the challenges in Kurdish language processing and why they have not been efficiently addressed yet.

### Diversity in dialects

Having various dialects and sub-dialects, Kurdish is known as a dialect-rich language and is sometimes referred to as a [dialect continuum](http://kurdish.humanities.manchester.ac.uk/wp-content/uploads/2017/07/PDF-Revisiting-Kurdish-dialect-geography.pdf){:target="_blank"}. This richness is intersting when you observe that what is called something in a village is called differently in the neighbourhood. As a personal observation, in [Kêle Sipî](https://goo.gl/maps/hotbKuCa9Yz){:target="_blank"}, a village near Sanandaj in the Eastern Kurdistan, people use the word *amêjeng* for yeast, while in [Syaseran](https://goo.gl/maps/VKPRG5REW6q){:target="_blank"} it is called *amyan*. Such differences are not limited to the vocabulary, but also to the phonology and the phonetics. Almost all the dialects and sub-dialects of Kurdish have something distinct in terms of pronunciation.

<div class="card mb-3 text-center">
<h5 style="text-align:center;">
<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d13191.505645251036!2d47.19145982556518!3d35.628163422931244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d35.6333024!2d47.2136352!4m3!3m2!1d35.6285556!2d47.1856667!5e1!3m2!1sen!2sie!4v1552680935219" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</h5>
<div class="card-body bg-light">
    <div class="card-text">
      Dialectal difference could even be observed between two neighbouring villages.
    </div>
</div>
</div>

Having said that, the variety of the dialects adds a gap between the speakers  of the same language and to some extent, creates a kind of barrier in communication. Some believe that such diversities should be addressed by defining a [standard language](https://en.wikipedia.org/wiki/Standard_language){:target="_blank"}. Defining a standard language for Kurdish has been a matter of debate without reaching a consensus.

### Diversity in scripts
Due to historical and geological reasons, several scripts are used when it comes to Kurdish writing. Cyrillic, Arabo-Persian, Latin and even Armenian alphabets have been used to write Kurdish texts. In the recent years, the Kurdish Academy of Language has tried to unify those alphabets and present a unified alphabet for Kurdish called [Yekgirtú](http://kurdishacademy.org/2008/05/07/the-kurdish-unified-alphabet/){:target="_blank"}. However, Yekgirtú does not seem to be as popular among the scholars nor the public; among all alphabets, the Arabo-Persian and the Latin alphabets are mostly used by Sorani and Kurmanji speakers, respectively. The following table shows those two alphabets in a comparative way.

<table align="center" class="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">Kurdish phonemes (IPA)</th>
<th title="Field #2">Latin-based</th>
<th title="Field #3">Yekgirtú</th>
<th title="Field #4">Arabic-based</th>
</tr></thead>
<tbody><tr>
<td>[a:]</td>
<td>A a</td>
<td>A a</td>
<td>ا</td>
</tr>
<tr>
<td>[b]</td>
<td>B b</td>
<td>B b</td>
<td>ب</td>
</tr>
<tr>
<td>[t͡ʃ]</td>
<td>Ç ç</td>
<td>C c</td>
<td>چ</td>
</tr>
<tr>
<td>[d͡ʒ]</td>
<td>C c</td>
<td>J j</td>
<td>ج</td>
</tr>
<tr>
<td>[d]</td>
<td>D d</td>
<td>D d</td>
<td>د</td>
</tr>
<tr>
<td>[æ]</td>
<td>E e</td>
<td>E e</td>
<td>ه</td>
</tr>
<tr>
<td>[eː ]</td>
<td>Ê ê</td>
<td>É é</td>
<td>ێ</td>
</tr>
<tr>
<td>[f]</td>
<td>F f</td>
<td>F f</td>
<td>ف</td>
</tr>
<tr>
<td>[g]</td>
<td>G g</td>
<td>G g</td>
<td>گ</td>
</tr>
<tr>
<td>[h]</td>
<td>H h</td>
<td>H h</td>
<td>ھ</td>
</tr>
<tr>
<td>[I]</td>
<td>I i</td>
<td>I i</td>
<td bgcolor="#A9A9A9"> </td>
</tr>
<tr>
<td>[i:]</td>
<td>Î î</td>
<td>Í í</td>
<td>ى</td>
</tr>
<tr>
<td>[ʒ]</td>
<td>J j</td>
<td>Jh jh</td>
<td>ژ</td>
</tr>
<tr>
<td>[k]</td>
<td>K k</td>
<td>K k</td>
<td>ک</td>
</tr>
<tr>
<td>[l]</td>
<td>L l</td>
<td>L l</td>
<td>ل</td>
</tr>
<tr>
<td>[ɬ]</td>
<td>Ł ł</td>
<td>Ll ll</td>
<td>ڵ</td>
</tr>
<tr>
<td>[m]</td>
<td>M m</td>
<td>M m</td>
<td>م</td>
</tr>
<tr>
<td>[n]</td>
<td>N n</td>
<td>N n</td>
<td>ن</td>
</tr>
<tr>
<td>[oː ]</td>
<td>O o</td>
<td>O o</td>
<td>ۆ</td>
</tr>
<tr>
<td>[p]</td>
<td>P p</td>
<td>P p</td>
<td>پ</td>
</tr>
<tr>
<td>[q]</td>
<td>Q q</td>
<td>Q q</td>
<td>ق</td>
</tr>
<tr>
<td>[ɾ]</td>
<td>R r</td>
<td>R r</td>
<td>ر</td>
</tr>
<tr>
<td>[r]</td>
<td>Ř ř</td>
<td>Rr rr</td>
<td>ڕ</td>
</tr>
<tr>
<td>[s]</td>
<td>S s</td>
<td>S s</td>
<td>س</td>
</tr>
<tr>
<td>[ʃ]</td>
<td>Ş ş</td>
<td>Sh sh</td>
<td>ش</td>
</tr>
<tr>
<td>[t]</td>
<td>T t</td>
<td>T t</td>
<td>ت</td>
</tr>
<tr>
<td>[ʊ]</td>
<td>U u</td>
<td>U u</td>
<td>و</td>
</tr>
<tr>
<td>[u:]</td>
<td>Û û</td>
<td>Ú ú</td>
<td>وو</td>
</tr>
<tr>
<td>[v]</td>
<td>Vv</td>
<td>V v</td>
<td>ڤ</td>
</tr>
<tr>
<td>[w]</td>
<td>W w</td>
<td>W w</td>
<td>و</td>
</tr>
<tr>
<td>[x]</td>
<td>X x</td>
<td>X x</td>
<td>خ</td>
</tr>
<tr>
<td>[j]</td>
<td>Y y</td>
<td>Y y</td>
<td>ى</td>
</tr>
<tr>
<td>[z]</td>
<td>Z z</td>
<td>Z z</td>
<td>ز</td>
</tr>
<tr>
<td>[ħ]</td>
<td>Ḧ ḧ</td>
<td>H&#39;, h&#39;</td>
<td>ح</td>
</tr>
<tr>
<td>[ʕ]</td>
<td>Ë ë</td>
<td>‘</td>
<td>ع</td>
</tr>
<tr>
<td>[ɣ]</td>
<td>Ẍ ẍ</td>
<td>X&#39;, x&#39;</td>
<td>غ</td>
</tr>
<tr>
<td>[ʉ:]</td>
<td bgcolor="#A9A9A9"> </td>
<td>Ù ù</td>
<td>ۊ</td>
</tr>
<tr>
<td>[γ]</td>
<td bgcolor="#A9A9A9"> </td>
<td bgcolor="#A9A9A9"> </td>
<td>ڎ</td>
</tr>
<tr>
<td>[ʁ]</td>
<td>Ğ ğ</td>
<td bgcolor="#A9A9A9"> </td>
<td bgcolor="#A9A9A9"> </td>
</tr>
</tbody></table>

### Lack of standards

As discussed earlier, the diversity in dialects and scripts turns the richness of the language into a challenge. Such challenges are usually addressed by defining certain standards which do not exist for Kurdish yet. Defining a standard Kurdish language or Kurdish alphabet and deploying those standards require governmental actions and should be supported by scholars and Kurdish public.

### Lack of resources

Electronic resources provide textual information about language and are essential for text mining in particular, and NLP in general. Those information can be collected and used as a [text corpus](https://en.wikipedia.org/wiki/Text_corpus){:target="_blank"}. Fortunately, there are currently websites which are active in creating content in Kurdish, notably news agencies. Unfortunately, we still need more resources, especially expert-made ones such as lexicons and parallel corpora.

### Lack of investment

Honestly, I believe that lack of investment should have been listed as the first reason of Kurdish remaining behind in NLP.

A project needs to be funded to make a progress, which is unfortunately not the case for Kurdish-related projects. Due to the political constraints in Kurdistan, funding a Kurdish-related project is not a priority for the businesses. Even in the Southern Kurdistan, where there has been autonomy  (kind of) since 1992, there has not been a big advancement in this field.

Such a difficulty seems to be the case of less-resourced languages. The following paragraph from the [summary](http://ixa2.si.ehu.es/saltmil/index.php/en/news-mainmenu-287/36-news/89-lrec2010-saltmil-discussion.html){:target="_blank"} of the discussion on Less resourced languages and Language technology of the seventh international conference on Language Resources and Evaluation (LREC) explains how getting a project funded for a less-resourced language may be challenging:

<div class="ml-3">
<p class="text-muted" >One of the problems that was underlined is the difficulties in convincing politicians to fund the creation of language resources (LR) for less-resourced languages (LRL). Per Langgård suggested that it would be necessary to build a scheme to assist developers to have success in that endeavour; Khalid Choukri said that even for large European languages it was also difficult to convince European Union politicians to fund R&D in the field, and that we needed to give politicians a larger picture and something they can sell to the media. Along the same lines, Igor Leturia mentioned that we should convince politicians that we do not only do research but that we produce products that politicians can see. </p>

</div>

### Public awareness

In addition to the aforementioned factors, I should bitterly admit that there has been a kind of ignorance among the Kurds regarding their language and its correct usage as their formal language. I hope that my generation can promote using the power of Internet and make more people aware of the importance of language technology.

## What to do then?

### For you as a person

#### Use UTF-8, <mark>Please</mark>!
Each piece of text that you are typing is useful to make a language processable. Use a Kurdish keyboard and care about the correctness of what you type, as much as you can. Happily, there are currently many keyboards available on Google Play and iTunes which support Kurdish alphabets in UTF-8. (Take a look at [Gboard - the Google Keyboard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_IE){:target="_blank"} if you are an Android user).

#### Understand the value of data
We are making information each day by sending messages to our friends and visiting social media. **Try creating content in Kurdish**. [Blogging](https://en.wikipedia.org/wiki/Blog){:target="_blank"} is a very interesting way to let others know about your ideas.

#### Be creative and think about NLP
No matter what your expertise is, you can make a change in the current situation. If you are a Kurdish music fan, you can write the lyrics of the Kurdish songs and create a corpus for it. If you are interested in medical sciences, you can collect the terminology of your profession. If you are teaching a module related to computer science, NLP or computational linguistics, why not letting your students working on a Kurdish-related mini-project for their final project? And so on.

#### Research in Kurdish language processing

We need to do more research in Kurdish language processing. I strongly believe in the open data and open-source tools given the current situation of lack of investment.

### For you as a business or entrepreneur

#### Invest

Just like any other field in computer engineering, your business can make money by creating Kurdish language technology.

#### Fund research projects

Collaborate with academic research units and fund research projects related to Kurdish language processing. Taking a few interns per year can make a huge contribution to the field..

#### Promote usage of tools for Kurdish

News agencies, publication houses, authorities and all those who have a voice in the society, can promote the usage of tools which are made for Kurdish language processing.

## Footnotes
[1] “jerej” means “partridge“ in Hewrami Kurdish. In the Sorani Kurdish and in the Kurmanji Kurdish, “kew” and “vitik” are used respectively.



<hr class="col-xs-12">
Last updated on 26 March 2019.
