---
title: Pewan—a Kurdish corpus and test collection
---

## About

Pewan is the first standard test collection to evaluate Sorani Information Retrieval systems. To build Pewan, we have carefully followed TREC's standard test collection construction methodology. More specifically, we first collected a large volume of documents written in Sorani, and then used a powerful Desktop Search tool to compile a list of queries. Next, we leveraged three widely-used open-source information retrieval systems as well as our own implementation of two well-known retrieval models to create result pools for all queries. These pools were then manually assessed by our team members to generate the true list of relevant documents for each query.

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/pewan.png" style="width:100%" align="middle" alt="Pewan Kurdish corpus"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Heaps’ Law for Sorani and Kurmanji Kurdish, Persian, and English (Kurdish data based on Pewan)
        </div>
    </div>
</div>  

## Features

The Pewan text corpus contains Sorani and Kurmanji texts collected by crawling the content of news agencies. Overall, 115,340  Sorani  articles  and  25,572 Kurmanji  articles  were  collected. The articles are dated between 2003 and 2012 and their sizes range from 1KB to 154KB  (on  average  2.6KB).

<table align="center" class="table table-bordered table-hover table-condensed">
  <tr>
    <th></th>
    <th>Sorani</th>
    <th>Kurmanji</th>
  </tr>
  <tr>
    <td>Articles No.</td>
    <td>115340</td>
    <td>25572</td>
  </tr>
  <tr>
    <td>Words No.,(dist.)</td>
    <td>501054</td>
    <td>127272</td>
  </tr>
  <tr>
    <td>Words No.,(all)</td>
    <td>18110723</td>
    <td>4120027</td>
  </tr>
</table>


## Get Pewan

Download Pewan at [https://github.com/klpp/pewan/](https://github.com/klpp/pewan/){:target="_blank"}.

If you use this resource, please cite the following publications:

{% highlight plaintext %}
  @inproceedings{esmaili2013building,
    title={Building a test collection for Sorani Kurdish},
    author={Esmaili, Kyumars Sheykh and Eliassi, Donya and Salavati, Shahin and Aliabadi, Purya and Mohammadi, Asrin and Yosefi, Somayeh and Hakimi, Shownem},
    booktitle={2013 ACS International Conference on Computer Systems and Applications (AICCSA)},
    pages={1--7},
    year={2013},
    organization={IEEE}
  }

  @inproceedings{esmaili2013sorani,
  title={Sorani Kurdish versus Kurmanji Kurdish: An empirical comparison},
  author={Esmaili, Kyumars Sheykh and Salavati, Shahin},
  booktitle={Proceedings of the 51st Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers)},
  volume={2},
  pages={300--305},
  year={2013}
}
{% endhighlight %}
