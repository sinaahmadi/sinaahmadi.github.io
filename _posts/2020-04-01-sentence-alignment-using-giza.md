---
show_profile: false
title: Sentence alignment using GIZA++
tags:
- Tutorial
---

Recently, I was working on a task for which I needed to align sentences in two languages in a [parallel corpus](https://en.wikipedia.org/wiki/Parallel_text){:target="_blank"}. For this purpose, I wanted to use GIZA++, a [statistical machine translation](https://en.wikipedia.org/wiki/Statistical_machine_translation){:target="_blank"} toolkit that is used to train [IBM Models 1-5](https://en.wikipedia.org/wiki/IBM_alignment_models){:target="_blank"} and an HMM word alignment model. The toolkit is a bit outdated and does not seem to be further developped. Therefore, it was a bit challenging to find out how to install and use it. 

In this post, I am going to go through each step of installing GIZA++ with an alignment example. I have tested the following on my macOS (Catalina).

---

## 1- Install GIZA++

There are various version of GIZA++ available on the web, including that on the [official website](http://www.statmt.org/moses/giza/GIZA++.html){:target="_blank"} and another one [on Github](https://github.com/moses-smt/giza-pp){:target="_blank"}. I found the latter less problematic to install on modern machines. 

Download the zipped repository at [https://github.com/moses-smt/giza-pp](https://github.com/moses-smt/giza-pp){:target="_blank"} and unzip it locally or, clone it as follows: 

```
$ git clone git@github.com:moses-smt/giza-pp.git
```

As GIZA++ was initially written for Linux, we need to apply a few modifications to use it on a case-insensitive file system like macOS. 

Navigate to the `giza-pp/` and then `GIZA++-v2` directory and edit lines 321-322 of the `model3.cpp` file which contains the following:

```
      alignfile = Prefix + ".A3." + number ;
      test_alignfile = Prefix + ".tst.A3." + number ;
```

to this:

```
      alignfile = Prefix + ".AA3." + number ;
      test_alignfile = Prefix + ".tst.AA3." + number ;
```

You can do it by simply opening the file in `Vim` and modify it as follows:

```
cd giza-pp/GIZA++-v2
$ vim +321 model3.cpp
```

These solutions were found thanks to [this](http://catherinegasnier.blogspot.com/2014/04/install-giza-107-on-mac-osx-1092.html){:target="_blank"} and [this](http://wiki.apertium.org/wiki/Using_GIZA%2B%2B){:target="_blank"} websites.


Now, in the same `giza-pp/GIZA++-v2` directory, edit line 9 of the GIZA++ `Makefile`. That line contains the following:

```
CFLAGS_OPT = $(CFLAGS) -O3 -funroll-loops -DNDEBUG -DWORDINDEX_WITH_4_BYTE -DBINARY_SEARCH_FOR_TTABLE -DWORDINDEX_WITH_4_BYTE
```

and it should be changed to this new one:

```
CFLAGS_OPT = $(CFLAGS) -O3 -funroll-loops -DNDEBUG -DWORDINDEX_WITH_4_BYTE
```

And one last modification is with regard to references to `tr1` which are not supported by macOS. Running the following lines will fix that problem too (make sure you are in the `giza-pp` directory):

```
cd giza-pp
perl -pi -w -e 's/<tr1\//</g;' GIZA++-v2/* mkcls-v2/*
perl -pi -w -e 's/using namespace std::tr1;//g;' GIZA++-v2/* mkcls-v2/*
perl -pi -w -e 's/std::tr1:://g;' GIZA++-v2/* mkcls-v2/*
sed '36d' mkcls-v2/mystl.h > mkcls-v2/mystl.h.tmp
sed '50d' mkcls-v2/mystl.h.tmp > mkcls-v2/mystl.h
rm mkcls-v2/mystl.h.tmp
make
```

The final line, `make`, will take a while and make your files. Now, we are OK with GIZA++.


## 2- Prepare your data

For this tutorial, I would like to align the English and Irish versions of the [Constitution of Ireland](https://en.wikipedia.org/wiki/Constitution_of_Ireland){:target="_blank"}. Download the two files and put them in a new directory, let's say `giza_example/` in the same directory of `giza-pp`:

- [Constitution_of_Ireland.en](https://raw.githubusercontent.com/sinaahmadi/Advanced-Natural-Language-Processing-Course/master/Constitution_of_Ireland.tok.en){:target="_blank"}
- [Constitution_of_Ireland.ga](https://raw.githubusercontent.com/sinaahmadi/Advanced-Natural-Language-Processing-Course/master/Constitution_of_Ireland.tok.ga){:target="_blank"}

These two files are already tokenized with spaces. This can be done by any tool or library of your choice, such as [Moses](https://github.com/moses-smt/mosesdecoder/blob/master/scripts/tokenizer/tokenizer.perl){:target="_blank"} or [NLTK](https://www.nltk.org/api/nltk.tokenize.html){:target="_blank"}.

Make sure that your data are parallel, that is the same line in each file refers to the same thing in different languages.


## 3- Align the words

Following the two previous steps, you should now be ready to align words in your parallel data. To do so, first, we should create a few files required for GIZA++ to find the most probable alignments. 

Assuming that your working directory looks like this (the parallel data are in `giza_example`):

```
.
├── GIZA++-v2
├── giza_example
└── mkcls-v2
```

Navigate to the `GIZA++-v2` directory and run the following which will generate the vocabulary (`.vcb`) and sentences files (`.snt):

```
./plain2snt.out ../giza_example/Constitution_of_Ireland.tok.en ../giza_example/Constitution_of_Ireland.tok.ga 
```

Now, your `giza_example` directory contains the following files:

```
Constitution_of_Ireland.tok.ga.vcb
Constitution_of_Ireland.tok.ga_Constitution_of_Ireland.tok.en.snt
Constitution_of_Ireland.tok.ga
Constitution_of_Ireland.tok.en.vcb
Constitution_of_Ireland.tok.en_Constitution_of_Ireland.tok.ga.snt
Constitution_of_Ireland.tok.en
Constitution_of_Ireland.ga
Constitution_of_Ireland.en
```

The next step is to extract the co-occurrences by running the following:

```
./snt2cooc.out ../giza_example/Constitution_of_Ireland.tok.en.vcb ../giza_example/Constitution_of_Ireland.tok.ga.vcb ../giza_example/Constitution_of_Ireland.tok.ga_Constitution_of_Ireland.tok.en.snt > ../giza_example/corp.cooc
```

Although it doesn't matter which `.snt` file you are providing, you should make sure that you will provide **the same thing** in the next step as it's going to be your source resource.

And finally, in the same directory of `GIZA++-v2`, run GIZA++ as follows:

```
./GIZA++ -S ../giza_example/Constitution_of_Ireland.tok.ga.vcb -T ../giza_example/Constitution_of_Ireland.tok.en.vcb -C ../giza_example/Constitution_of_Ireland.tok.ga_Constitution_of_Ireland.tok.en.snt -CoocurrenceFile ../giza_example/corp.cooc -outputpath ../giza_example/
```

All these steps should provide you with many files including `/giza_example/2020-04-01.030523.sina.AA3.final` and `/giza_example/2020-04-01.030523.sina.actual.ti.final` (ignore the file prefixes):

- `2020-04-01.030523.sina.AA3.final`: contains sentence pairs and word alignments from the source language (Irish) into the target language (English) using Viterbi Alignment, which is the most probable alignment (the one that maximizes the alignment probability). One particular sentence pair of this file looks like the following:

    ```
# Sentence pair (43) source length 12 target length 17 alignment score : 6.81325e-23
the name of the state is éire , or , in the english language , ireland . 
NULL ({ 3 8 12 }) éire ({ 1 }) is ({ }) ainm ({ 2 }) don ({ 4 }) stát ({ 5 }) nó ({ 9 }) , ({ 10 }) sa ({ 11 }) sacs-bhéarla ({ 13 14 }) , ({ 15 }) ireland ({ 6 7 16 }) . ({ 17 }) 
    ```
   
The first line shows the length (number of words) of the source (Irish) and target (English) sentences, along with the Viterbi alignment score.

The second line is the target sentence, and the third line is the source sentence annotated with alignment information. Each source word is annotated with the set of indices of target words that are aligned to that source word. Note that in IBM Models assume that one target word is aligned at most one source word. The first `NULL ({ 3 8 12 })` means that the 3rd, 8th and 12th target words, `of`, `,` and `the`, are not aligned to any words, while `stát ({ 5 })` is aligned with `state`.

- `2020-04-01.030523.sina.actual.ti.final`: This is the final inverse T-tables (lexical translation probability) trained by the model. Lexical translation probability `t(e|f)` is the probability that word `f` in the source language (Irish) is translated to word `e` in the target language (Target). Since this is the inverse T-tables, it contains `t(f|e)`. The following is a sample of the file:

```
regulated bunrialacha 2.0894e-06
regulated réir 1.54128e-05
regulated de 3.15225e-05
regulated rialú 5.94554e-05
regulated a 2.33605e-05
regulated seo 4.05318e-05
regulated shibhialta 1.17498e-06
regulated gur 5.15473e-06
```




<hr class="col-xs-12">
Last updated on 1 April 2020.