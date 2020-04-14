---
title: A Corpus of the Sorani Kurdish Folkloric Lyrics
show_profile: true
---

## Why Kurdish folk lyrics?

Kurdish poetry and prose narratives were historically transmitted orally and less in a written form. Being an essential medium of oral narration and literature, Kurdish lyrics have had a unique attribute in becoming a vital resource for different types of studies, including Digital Humanities, Computational Folkloristics and Computational Linguistics. As an initial study of its kind for the Kurdish language, this paper presents our efforts in transcribing and collecting Kurdish folk lyrics as a corpus that covers various Kurdish musical genres, in particular *Beyt*, *Goranî*, *Bend*, and *Heyran*.

The following is a sample of how the content of each genre looks like:

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/kurdish_lyrics_example.png" style="width:100%" align="middle" alt="Kurdish lyrics example"/>
    <div class="card-body bg-light">
        <div class="card-text">
            An example of the four musical genres included in our corpus (with literal translation into English)
        </div>
    </div>
</div>  


We believe that this corpus contributes to **Kurdish language processing** in several ways, such as compensation for the lack of a long history of written text by incorporating oral literature, presenting an unexplored realm in Kurdish language processing, and assisting the initiation of Kurdish computational folkloristics.

## Example

This corpus contains 49,582 tokens in the Sorani dialect of Kurdish. The following shows a sample of the dataset:

~~~xml
<text id="131">
   <div type="song">
	<head>هه‌رزاڵێ</head>
	<singer>ناسر ڕه‌زازی</singer>
	<audio>Audio/Gorani/131.mp3</audio>
	<lg type="Gorani">
	  	<l>هه‌رزاڵێ، براکه‌م هه‌رزاڵێ</l>
		<l>هه‌رزاڵ چاتره‌ له‌ ماڵێ</l>
		<l>ئه‌و چۆپیکێشه‌ چۆپی ئه‌کێشێ</l>
		<l>له‌ خوام گه‌ره‌که‌، هیچکوێنه‌ی نه‌یشێ</l>
		<l>هه‌رزاڵێ، براکه‌م هه‌رزاڵێ</l>
		<l>هه‌رزاڵ چاتره‌ له‌ ماڵێ</l>
		<l>یان به‌ گوڵباخی یان به‌ گوڵه‌زه‌رده‌</l>
		<l>یان به‌ نازی خۆت بمکه‌ په‌روه‌رده‌</l>
		<l>هه‌رزاڵێ، براکه‌م هه‌رزاڵێ</l>
		<l>هه‌رزاڵ چاتره‌ له‌ ماڵێ</l>
		<l>توخوا چۆپیکێش چۆپیت به‌ له‌نگه‌ر</l>
		<l>هه‌ر وه‌ک پێشمه‌رگه‌ ڕوو بکه‌ له‌ سه‌نگه‌ر</l>
	</lg>
    </div>
</text>
~~~

## Get the corpus

The datasets are publicly freely available in the Text Encoding Initiative (TEI) format for non-commercial use under the CCBY-NC-SA 4.0 license at [https://github.com/KurdishBLARK/KurdishLyricsCorpus](https://github.com/KurdishBLARK/KurdishLyricsCorpus){:target="_blank"}. 


## Reference

If you're using any part of these datasets, please don't forget to cite our paper:

~~~
@inproceedings{ahmadi2020folklyrics,
  title={A Corpus of the Sorani Kurdish Folkloric Lyrics},
  author={Ahmadi, Sina and Hassani, Hossein and Abedi, Kamaladdin},
  booktitle={Proceedings of the 1st Joint Spoken Language Technologies for Under-resourced languages ({SLTU}) and Collaboration and Computing for Under-Resourced Languages (CCURL) Workshop at the 12th International Conference on Language Resources and Evaluation (LREC)},
  date="2020-05-11",
  year={2020},
  address= "Marseille, France"
}
~~~


