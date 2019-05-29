---
title: Summer datathon in Dagstuhl
show_profile: false
tags:
- Linked Data
- Datathon
- NLP

images:
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Dagstuhl/IMG_20190517_183835.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Dagstuhl/IMG_20190517_183009.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Dagstuhl/IMG_20190516_172931.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Dagstuhl/IMG_20190514_230407.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Dagstuhl/IMG_20190514_212120.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Dagstuhl/IMG_20190514_160940.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Dagstuhl/IMG_20190512_190522.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Dagstuhl/IMG_20190516_172948.jpg
  - https://raw.githubusercontent.com/sinaahmadi/sinaahmadi.github.io/master/docs/pictures/Dagstuhl/IMG_20190517_000232.jpg
---

Last week, I participated in the [3rd Summer Datathon on Linguistic Linked Open Data (SD-LLOD-19)](https://datathon2019.linguistic-lod.org/){:target="_blank"} which was held in the Schloss Dagstuhl – Leibniz Center for Informatics, Wadern, Germany. As my first datathon where I was a tutor, it was such an amazing experience that I would like to write about here.


<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/pictures/Dagstuhl/summerdatathon.jpg" style="width:50%" align="middle" alt="3rd Summer Datathon on Linguistic Linked Open Data"/>
    <div class="card-body bg-light">
        <div class="card-text">
            3rd Summer Datathon on Linguistic Linked Open Data (11 to 17 May 2019)
        </div>
    </div>
</div>


Schloss Dagstuhl (or Dagstuhl Castle) is a historical amazing place where seminars and scientific events are regularly held in informatics and computer science. It is located in the middle of a forest where the nearest big city, Trier, has a distance of 56 km ([see on the map](https://goo.gl/maps/J4uNszY3BYzf7uJC8){:target="_blank"}). According to the [Leibniz Center for Informatics](https://www.leibniz-gemeinschaft.de/en/institutes-museums/einrichtungen/lzi/){:target="_blank"} website:


<div class="ml-3">
<p class="text-muted">
Since 1990, Schloss Dagstuhl, Leibniz Center for Informatics has organized informatics conferences of the highest scientific caliber. It also promotes and supports continuing and advanced academic education and the transfer of knowledge between academia and industry. The center fosters world-class informatics research by bringing internationally renowned researchers and promising young scientists from universities together with those from industrial research laboratories. Dagstuhl’s comprehensive offerings are utilized by over 3,000 scientists from all over the world each year. 
</p>
</div>

## Arrival

Arrived in Germany on May 11 from Dublin, I stayed the night in Frankfurt, a city that I liked so much. Luckily, the same evening when I arrived, there were a bunch of interesting events going on in the city on the occasion of the Museum Night 2019. 

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/pictures/frankfurtMuseumNight2019.jpg" style="width:100%" align="middle" alt="Frankfurt Museum Night 2019"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Frankfurt on May 11, Museum Night 2019. 
        </div>
    </div>
</div>

Reaching Schloss Dagstuhl can be challenging as there is not much public transport directly to the place from major cities. Therefore, taking a taxi seems to be the easiest option to get there. 

I set out for [Sankt Wendel](https://goo.gl/maps/L5FET32DYs5x6szH6){:target="_blank"}, a town in north-eastern Saarland, where the participants were waited for in the train station. One of the local organizers kindly picked us up to the venue which took roughly half an hour. 

Something great that I experienced from the very first moments that I met other participants in the Sankt Wendel train station was how cool they were! <b>I really enjoyed every single moment that I spent with all of them who are now my friends</b>...

Having said that, such a remote and relaxed location in the countryside made the visit even more particular. No matter how far away, it is really worth it!

## And wow!

Yes. That was exactly how I was astonished when I visited such a mysterious and beautiful place surrounded by greenery! Everything was so well organized and prepared with meticulous care. I may say Schloss Dagstuhl is like a small city having a church, a library, several seminar rooms and guest houses, awesome foods, a music room, even a sauna and fitness room. Visiting every part of the place is even more joyful seeing all those collections, paintings and artworks everywhere. Can you believe that even the tables are allocated to the participants using an algorithm to ensure that the participants meet each other at least once during their stay?! 


<div class="card-columns">
    {% for img in page.images %}
    <div class="card">
        <img class="card-img-top" src="{{ img }}" />
    </div>
    {% endfor %}
</div>


There were a few musical instruments in the music room, a piano, guitars and a violin, which turned our evening meetings more pleasant listening to the live music played by the talented participants. I also had the pleasure to play Bach's Minuet in G major with [Dr. Jorge Gracia](http://jogracia.url.ph/web/). By the way, I promise there were more talented people playing other instruments more professionally and beautifully than me (they know whom I'm talking about!).

<div class="card mb-3 text-center">
<h5 style="text-align:center;">
<iframe width="560" height="330" src="https://www.youtube.com/embed/ZWBkxNYnH9w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</h5>
<div class="card-body bg-light">
    <div class="card-text">
      Bach's Minuet in G major in Schloss Dagstuhl (Thanks Patricia for shooting the video)
    </div>
</div>
</div>

## Datathon on Linguistic Linked Open Data

As the title suggests, the main objective of our gathering in Dagstuhl was to participate in a datathon on linguistic linked open data. With an increasing importance in data representation and data modelling, semantic web and linked data has attracted interest from the various research communities and industry. In this datathon, we addressed a wide range of topics in linked open data with a particular attention to its linguistic applications. In addition to the presentations by the speakers, a few practical tools such as [OpenRefine](http://openrefine.org/){:target="_blank"} and [Protégé](https://protege.stanford.edu/){:target="_blank"} were introduced. I also introduced [Naisc](https://uld.pages.insight-centre.org/naisc/){:target="_blank"}, a data linking tool developped at our [Unit for Linguistic Data](https://nuig.insight-centre.org/uld/){:target="_blank"} at [Insight Center](https://nuig.insight-centre.org/){:target="_blank"}.

This datathon was organized by [Dr. Christian Chiarcos](http://acoli.informatik.uni-frankfurt.de/){:target="_blank"}, [Dr. John Philip McCrae](http://john.mccr.ae/){:target="_blank"} and [Dr. Jorge Gracia](http://jogracia.url.ph/web/){:target="_blank"}. 




## Finally 
See all the tweets related to the summer datathon [here](https://twitter.com/hashtag/SDLLOD19?src=hash).


