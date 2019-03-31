---
title: KurdNet—the Kurdish WordNet
---

## About

KurdNet is the the Kurdish WordNet. WordNet has been used in numerous natural language processing tasks such as word sense  disambiguation and information extraction with considerable success. Motivated by this success, many projects have been under taken to build similar lexical databases for other languages.

At a high level, our approach is semi-automatic and centred around building a Kurdish alignment for Base Concepts, which is a core subset of major meanings in WordNet. More specifically, we use a bilingual dictionary and simple set theory  operations to translate and align synsets and use a corpus to extract usage examples. The effectiveness of our prototype database is evaluated via measuring its impact on a Kurdish information retrieval task.

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/wordnet_schema.png" style="width:100%" align="middle" alt="WordNet schema for KurdNet"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Base Concepts' Entity-Relationship schema in WordNet.
        </div>
    </div>
</div>  

## Features

The following table shows the main statistical properties of Base Concepts and its alignment in KurdNet:

<table align="center" class="table table-bordered table-hover table-condensed">
  <tr>
    <th></th>
    <th>Base Concepts</th>
    <th>KurdNet (Max)</th>
    <th>KurdNet (Min)</th>
  </tr>
  <tr>
    <td>Synset No.</td>
    <td>4689</td>
    <td>3801</td>
    <td>2145</td>
  </tr>
  <tr>
    <td>Literal No.</td>
    <td>11171</td>
    <td>17990</td>
    <td>6248</td>
  </tr>
  <tr>
    <td>Usage No.</td>
    <td>2645</td>
    <td>89950</td>
    <td>31240</td>
  </tr>
</table>

## Get KurdNet

Download KurdNet at [https://github.com/klpp/kurdnet](https://github.com/klpp/kurdnet){:target="_blank"}.

If you use this resource, please cite our [publication](https://www.aclweb.org/anthology/W14-0101){:target="_blank"}:

{% highlight plaintext %}
  @inproceedings{W14-0101,
      title = "Towards Building KurdNet, the Kurdish WordNet",
      author = "Aliabadi, Purya  and
        Ahmadi, Sina  and
        Salavati, Shahin  and
        Esmaili, Kyumars Sheykh",
      booktitle = "Proceedings of the Seventh Global Wordnet Conference",
      year = "2014",
      address = "Tartu, Estonia",
      url = "https://www.aclweb.org/anthology/W14-0101",
      pages = "1--6",
  }
{% endhighlight %}
