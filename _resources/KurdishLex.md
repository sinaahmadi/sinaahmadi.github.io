---
title: Kurdish lexicographical resources
show_profile: true
---

## Towards Kurdish e-lexicography

This paper describes the development of lexicographic resources for Kurdish and provides a lexical model for this language. Kurdish is considered a less-resourced language, and currently, lacks machine-readable lexical resources. The unique potential which Linked Data and the Semantic Web offer to e-lexicography enables interoperability across lexical resources by elevating the traditional linguistic data to machine-processable semantic formats. Therefore, we present our lexicon in Ontolex-Lemon ontology as a standard model for sharing lexical information on the Semantic Web. The research covers the Sorani, Kurmanji, and Hawrami dialects of Kurdish. This research suggests that although Kurdish is a less-resourced language, in terms of documented lexicons, it has a wide range of resources, but because they are not machine-readable they could not contribute to the language processing. The outcome of this project, which is made publicly available, assists scholars in their efforts towards making Kurdish a resource-rich language.

## Development workflow

The following is the workflow that we follow to create our electronic lexicographic resources:

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/kurdishlex_workflow.png" style="width:100%" align="middle" alt="Kurdish Lex workflow"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Workflow to create lexicographic resources for Kurdish
        </div>
    </div>
</div>  

I hope it could be as straightforward as it looks but it was not. The task required our full attention to manually extract relevant information and validate those parts which were retrieved semi-automatically. The following video shows how hectic the task was:

<div class="card mb-3 text-center">
<h5 style="text-align:center;">
<iframe width="720" height="360" src="https://www.youtube.com/embed/zwjZ6ezMEns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</h5>
<div class="card-body bg-light">
    <div class="card-text">
      Manually curating and cleaning Kurdish lexicographic resources
    </div>
</div>
</div>

## Evaluation

<table align="center" class="table table-bordered table-hover table-condensed">
    <tr>
        <th>Resource</th>
        <th colspan="2">Number of entries</th>
        <th colspan="4">Attributes</th>
        <th>Polysemy degree</th>
    </tr>
    <tr>
        <td></td>
        <td>Word</td>
        <td>MWE</td>
        <td>Gender &amp; POS</td>
        <td>Etymology</td>
        <td>#idioms</td>
        <td>Examples</td>
        <td></td>
    </tr>
    <tr>
        <td>Kurmanji</td>
        <td>4172</td>
        <td>122</td>
        <td>3420 (76.64%)</td>
        <td>213 (4.96%)</td>
        <td>340</td>
        <td>265 (6.35%)</td>
        <td>1.03%</td>
    </tr>
    <tr>
        <td>Sorani</td>
        <td>5683</td>
        <td>160</td>
        <td>5348 (91.37%)</td>
        <td>111 (1.89%)</td>
        <td>82</td>
        <td>543 (9.55%)</td>
        <td>1.06%</td>
    </tr>
    <tr>
        <td>Hawrami</td>
        <td>1184</td>
        <td>165</td>
        <td>1184 (87.76%)</td>
        <td>242 (17.93%)</td>
        <td>123</td>
        <td>10 (0.008%)</td>
        <td>1.01</td>
    </tr>
</table>

To find out more, read our [paper]({{ site.url }}/docs/articles/ahmadi2019kurdishlex.pdf){:target="_blank"}. Our data is available at [Kurdish lexicographical resources](https://github.com/KurdishBLARK/KurdishLex/){:target="_blank"}.


## Output

All the datasets are available in the Turtle format. For example, the following is the corresponding RDF data of the entry "bend (noun)" in Kurmanji Kurdish:

~~~
:lexicon a lime:Lexicon;
    lime:language <www.lexvo.org/page/iso639-3/kmr> ;
    lime:entry :lex_bend .

:lex_bend a ontolex:LexicalEntry, ontolex:Word ;
    ontolex:canonicalForm :form_bend ;
    rdfs:label "bend"@kmr-latn .
    lexinfo:partOfSpeech lexinfo:noun ;
    lexinfo:gender lexinfo:feminine ;
    ontolex:sense :bend_n_sense ;
:form_bend a ontolex:Form ;
    dct:language <www.lexvo.org/page/iso639-3/kmr> ;
    ontolex:writtenRep "bend"@kmr-latn ;
    lexinfo:number lexinfo:singular ;
:bend_n_sense a ontolex:LexicalSense ;
    lexicog:usageExample :bend_n_sense_ex .
:en_bond a ontolex:LexicalEntry ;
    dct:language <http://lexvo.org/id/iso639-1/en> ;
    rdfs:label "bond"@en ;
    ontolex:sense :en_bond_sense .
:trans a vartrans:Translation ;
   vartrans:source :bend_n_sense ;
   vartrans:target :en_bond_sense .
:bend_n_sense_ex a lexicog:UsageExample;
    rdf:value "divê em êdî li benda sibehê ranewestin."@kmr-latn .
    rdf:value "we shouldn't stand around waiting for tomorrow."@en .
~~~

## Reference
If you're using these resources in your researches, please don't forget to cite our paper]:


~~~
@inproceedings{ahmadi2019kurdishlex,
  title = "Towards Electronic Lexicography for the {K}urdish Language",
  author = "Ahmadi, Sina and Hassani, Hossein and McCrae, John P.",
  booktitle = "Proceedings of the sixth biennial conference on electronic lexicography (eLex)",
  month = "10",
  year = "2019",
  address = "Sintra, Portugal",
  url = "https://elex.link/elex2019/wp-content/uploads/2019/09/eLex_2019_50.pdf",
  pages = "881--906",
  address= "Sintra, Portugal"
}
~~~

## License 
This corpus is openly available for non-commercial use under the [Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).


