---
show_profile: false
title: 'Semantic relationship detection'
tags:
- Semantics
- Lexicography
- survey
---

### This post in a nutshell...
- **Background**: What is relation extraction and its application in computational lexicography? Why does linking dictionaries matter?
- **Question**: What is the current state of the techniques and tools for semantic relation detection?
- **Idea**: Possible tracks of research

A list of the papers which are studied for this post can be found at []().

---


There exists a vast amount of lexicographical data, including dictionaries, thesauri, Wordnet and so on, that are distinctly providing various information about words. The automatic alignment of such resources is currently a challenging task.

In a recent attempt to address the task of monolingual word sense alignment (MWSA), we created a set of monolingual datasets containing manual annotations of semantic relationships between senses across resources. However, the sheer volume and heterogeneity of data make human annotation limited. Instead, we would like to have a computer annotate all data with the structure of our interest. Normally, we are interested in relations between word definitions, a.k.a. senses. 


Information Extraction (IE) automatically finds relevant entities or relations (including facts and events) in natural language texts. More specifically, the task of Relation Extraction (RE) aims to recognize and extract instances of semantic relations between entities or concepts mentioned in these texts. Many applications in information extraction, natural language understanding, information retrieval require an understanding of the semantic relations between entities. The main objective of capturing structured relational knowledge  about lexical terms has been the motivating force underlying many projects in lexical acquisition, information extraction, and the construction of semantic taxonomies. 


##  Semantic Textual Similarity and Semantic Relationship Detection

What has been done so far?


### Blogs
- [Advances in Semantic Textual Similarity](https://ai.googleblog.com/2018/05/advances-in-semantic-textual-similarity.html)
- [Relationship extraction](http://nlpprogress.com/english/relationship_extraction.html)


### Datasets 
- [STSBenchmark](http://ixa2.si.ehu.es/stswiki/index.php/STSbenchmark) (a sentence similarity benchmark)
- [CQA task B](http://alt.qcri.org/semeval2017/task3/) (a question/question similarity task).


### Tools

- [Read the Web](http://rtw.ml.cmu.edu/rtw/overview)
- [Open Information Extraction](https://openie.allenai.org/)
- [FewRel](http://www.zhuhao.me/fewrel/)
- [http://trainomatic.org/](http://trainomatic.org/)


### Related shared tasks
- [SemEval-2018 - Task 9: Hypernym Discovery](https://competitions.codalab.org/competitions/17119)
- [SemEval-2017 Task 1: Semantic Textual Similarity](http://alt.qcri.org/semeval2017/task1/)
- [SemEval-2017 Task 2: Multilingual and Cross-lingual Semantic Word Similarity](http://alt.qcri.org/semeval2017/task2/)
- [SemEval-2016 Task 2: Interpretable Semantic Textual Similarity](http://alt.qcri.org/semeval2016/task2/)
- [SemEval-2016 Task 13: Taxonomy Extraction Evaluation (TExEval-2)](http://alt.qcri.org/semeval2016/task13/)
- [SemEval-2015 Task 13: Multilingual All-Words Sense Disambiguation and Entity Linking](http://alt.qcri.org/semeval2015/task13/)



