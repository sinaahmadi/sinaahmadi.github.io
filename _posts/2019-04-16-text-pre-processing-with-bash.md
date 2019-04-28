---
title: Text pre-processing in command-line
show_profile: false
tags:
- NLP
- Text processing
- Bash
- Tutorial
---

Whether your are a newbie or professional in natural language processing or data mining, text pre-processing is a task that you need to go through at some point. Although there is a plethora of libraries which do the pre-processing of your text perfectly, none of them may have **power, simplicity** and **flexibility** that the command-line programs provide to you. In this tutorial, a few simple but essential programs are introduced for text pre-processing in [**command-line**](https://en.wikipedia.org/wiki/Command-line_interface){:target="_blank"}.

What we mean by **text pre-processing** is the normalisation of text by removing special characters (e.g. punctuation marks, non-Unicode characters etc.), tokens or changing the whole structure of the text for a specific purpose (e.g. adding `<eos>` to the end of sentences for training neural networks). In other words, whatever required to prepare a text file to be processed is a part of text pre-processing. Later, we will discuss text processing tasks such as <u>counting unique words</u> in a document, <u>sorting words by frequency</u>, <u>removing stop words</u>, <u>retrieving specific text structures</u>.

<div class="card mb-3 text-center">
    <img class="rounded mx-auto d-block" src="{{ site.url }}/docs/images/command_line_text_preprocessing.png" style="width:75%" align="middle" alt="Text pre-processing using command-line"/>
    <div class="card-body bg-light">
        <div class="card-text">
            Text pre-processing is fun with command-line.
        </div>
    </div>
</div>

Obviously, for one problem there may be more than one solution. However, in this tutorial, only a few techniques and programs are introduced. It will be up to you, your preference and the requirements of your tasks to decide which command fits better to your problem. Personally, I love the command-line and how each program can be used as a piece of puzzle, thanks to **pipes**, to solve sophisticated problems, particularly where processing time and performance matters.

**System setup**: The commands in this tutorial have been tested on GNU bash, version 5.0.2(1)-release (x86_64-apple-darwin18.2.0). You will normally have no problem running them on any Unix-based operating system. If you are a Windows user, the best solution is to start using a Linux-based open-source operating system like [Ubuntu](https://www.ubuntu.com/){:target="_blank"} (seriously, do it!). Otherwise, you can simply install [Cygwin](https://www.cygwin.com/){:target="_blank"} which lets you enjoy GNU in you Windows, *somehow*!

If you are not familiar with command-line, particularly Bash--the command language interpreter for the GNU operating system, you should learn the basic concepts, features and commands. This [reference manual](https://tiswww.case.edu/php/chet/bash/bashref.html){:target="_blank"} may be useful. Recall that you may use the `man` command to display the user manual of any command.

## Text-preprocessing commands

If you are interested in executing the commands in practice, you can download [this text file]({{site.url}}/docs/tutorials/noisy_text.txt){:target="_blank"} in your working directory and see how each command works. Our sample text is very noisy; it contains html tags, indented paragraphs, multiple unnecessary newlines, spaces and tokens. **Our goal** is to clean this sample text by getting rid of the noisy stuff.

### Text reading

The very first step of any tasks in text (pre-)processing is text reading. We will see later in this tutorial that some commands, like `wc`, take care of the text reading without requiring us to do any further commands for reading.

#### `cat`
##### Syntax: `cat [options] [filenames]`

The `cat` command (short for “concatenate“) is one of the most frequent commands which not only allows us to read files, but also create, display and concatenate them.

The following command prints out the whole file content in your command-line:

{% highlight bash %}
$ cat noisy_text.txt
{% endhighlight %}

You may use the `less` command which lets you scroll through the file without having all the file content displayed on the command-line. **Don't forget to use pipes**, i.e. `|` whenever you want to use the output of a command as the input of another command.

{% highlight bash %}
$ cat noisy_text.txt | less
{% endhighlight %}

To exit the viewing window press `q`.

You may write your file content in a new files like:

{% highlight bash %}
$ cat noisy_text.txt > new_noisy_text.txt
$ cat noisy_text.txt >> new_noisy_text.txt
{% endhighlight %}

The difference between `>` and `>>` is that the first one overwrites the files if it already exists, while the latter one keeps the content untouched and append to the file.

`cat` can also turn your command-line into a basic text editor as follows:

{% highlight bash %}
$ cat > quick_note.txt
This is a quick note to remember that I should call the clinic asap.
$   
{% endhighlight %}

By using `cat > quick_note.txt`, you are creating a new file and allowing `cat` to write whatever you type in the command-line as the content of your file. Once you are done with typing, `cntrl-d` saves the content and returns the command-line to its normal functionality.

The awesomeness of `cat` is not limited to these! You can concatenate multiple files into one as follows:

{% highlight bash %}
$ cat semester1_2019_results.txt semester2_2019_results.txt > 2019_results.txt
{% endhighlight %}

This way, the content of those two files is merged into a new file called *2019_results.txt*.

#### `head` and `tail`
##### Syntax: `head [options] [file(s)]`, `tail [options] [file(s)]`

Sometimes you only want to take a look at how the content of a file looks like. `head` and `tail` are two commands which allow us to view a certain number of lines of a file, respectively at the beginning and the end.

{% highlight bash %}
$ head noisy_text.txt
{% endhighlight %}

There is an interesting option `-n` which lets us to specify how many lines be displayed. The default value of is 10 lines.

{% highlight bash %}
$ head -n 2  noisy_text.txt
   0001193125-12-075999.txt : 20120224 0001193125-12-075999.hdr.sgml :
   20120224 20120223203324 ACCESSION NUMBER: 0001193125-12-075999
$ tail -n 2 noisy_text.txt
  84. javascript:void(0);
  85. javascript:void(0);
$   
{% endhighlight %}

`head` and `tail` allow further manoeuvres by using them in various orders with pipes and different options. Suppose that you have file containing 1000 lines and you would like to read lines 286 to 300. One way to do so is the following:

{% highlight bash %}
$ head -n 300 noisy_text.txt | tail -n 14
{% endhighlight %}

###### Get a block of text with `awk`

But what if you only want a specific range of lines in your file? Well, you can use `awk` as the following:

{% highlight bash %}
$ awk 'NR >= first_line && NR <= last_line'
{% endhighlight %}

where the *first_line* and *last_line* should be replaced by the line range that you are interested in. For instance, the lines 48 to 51 in our sample file are:

{% highlight bash %}
$ cat noisy_text.txt | awk 'NR >= 818 && NR <= 820'

         Atlantic City Electric Company, which was incorporated in New Jersey in
         1924.
$   
{% endhighlight %}

`awk` is a very useful command in text (pre)processing that we will discuss later.

### Conversion to UTF-8 with `iconv`
#### Syntax: `iconv -f source-encoding-code -t target-encoding-code < inputfile  > outputfile`

Although nowadays [Unicode standard](https://www.unicode.org/){:target="_blank"} is the default encoding of most programs and on the web, there are still texts for which older encodings such as ISO 8859 and Windows-1252 were used and therefore, converting them is necessary. For this purpose, there is a program called `iconv` which converts your text from an encoding to another one. The syntax of `iconv` is shown above; Change the `source-encoding-code` and the `target-encoding-code` to the encoding of your source text and your desired output encoding, respectively.

Our [sample text file]({{site.url}}/docs/tutorials/noisy_text.txt){:target="_blank"} is encoded in UTF-8. The following is an example to convert "crépuscule" from UTF-8 to ISO-8859-15:

{% highlight bash %}
$ echo "crépuscule" | iconv -f UTF-8 -t ISO-8859-15
cr?puscule
$    
{% endhighlight %}

Recall that `echo` displays a text on standard output.

Any characters that `iconv` does not know how to convert will be replaced with question marks. This may not be good when conversion accuracy matters. However, when dealing with large number of files, I would personally prefer having a bunch of `?`s to prevent any text reading errors!

### Replace characters with `tr`
#### Syntax: `tr [options] [set1] [set2]`

Replacing or removing specific characters is also part of text pre-processing. For instance, unnecessary spaces or newlines may not be welcomed for some tasks. tr`, abbreviation of *translate* or *transliterate*, is a very useful command which deals with such cases.

Suppose that you have the following text in Greek, where `;` is normally used as `?`, and you want to replace `;` with `?`:

{% highlight bash %}
$ echo "Πώς θέλετε να πληρώσετε;" | tr ";" "?"
Πώς θέλετε να πληρώσετε?
$   
{% endhighlight %}

or, replacing spaces by newlines:

{% highlight bash %}
$ echo "Amount of plastic in ocean is worse than we thought, study says" | tr " " "\n"
Amount
of
plastic
in
ocean
is
worse
than
we
thought,
study
says
$   
{% endhighlight %}

Replacing characters can also be done with a sequence of characters as follows:

{% highlight bash %}
$ echo "Amount of plastic in ocean is worse than we thought, study says" | tr "iplo" "abnu"
Amuunt uf bnastac an ucean as wurse than we thuught, study says
$   
{% endhighlight %}

In this case, `tr` simply translates a character in the first set "iplo" to its corresponding one in the second set "abnu".

`tr` also supports character sets such as `a-z`, `A-Z` and `0-9` to represent lower case alphabets, upper case alphabets and digits, respectively:

{% highlight bash %}
$ echo "Amount of plastic in ocean is worse than we thought, study says" | tr 'a-z' 'A-Z'
AMOUNT OF PLASTIC IN OCEAN IS WORSE THAN WE THOUGHT, STUDY SAYS
$   
{% endhighlight %}

What if we want to replace multiple occurrences of a character by another character? For instance, line 340 to 363 in the [sample text file]({{site.url}}/docs/tutorials/noisy_text.txt){:target="_blank"} contains multiple spaces that we would like to be removed and only be replaced one. This can be done with the `-s` option of `tr`:

{% highlight bash %}
$ cat noisy_text.txt | awk 'NR >= 340  && NR <= 350'

                                  [3]PART I

                                 [4]Item 1.
                             -       Business      3

                                 [5]Item 1A.
                           -       Risk Factors      23

                                 [6]Item 1B.
                    -       Unresolved Staff Comments      37

$  
{% endhighlight %}

The text looks like the following after removing multiple spaces and newlines:


{% highlight bash %}
$ cat noisy_text.txt | awk 'NR >= 340  && NR <= 350' | tr -s " " | tr -s "\n"

 [3]PART I
 [4]Item 1.
 - Business 3
 [5]Item 1A.
 - Risk Factors 23
 [6]Item 1B.
 - Unresolved Staff Comments 37

$  
{% endhighlight %}

To delete all the occurrences of a character, you can use `tr -d [set]` which acts like `tr [set] ""`:

{% highlight bash %}
$ echo "Amount of plastic in ocean is worse than we thought, study says" | tr -d "o"
Amunt f plastic in cean is wrse than we thught, study says
$  
{% endhighlight %}

To discover more interesting options, try `man tr`.


### Remove HTML tags (or anything between tags)

The covers that we covered so far were used directly over the text with simple patterns. What if we need to deal with more sophisticated text patterns? This is where regular expressions (regex) come in!

Regex allows us to access parts of a text based on the rules that we define. In some ways, a regex is analogous to a database query or a semantic query. It's a query to extract information from a text.

Let's take a look at our [sample text file]({{site.url}}/docs/tutorials/noisy_text.txt){:target="_blank"} where lines 1215 to 1220 contain HTML code (which seems to be a table):

{% highlight bash %}
$ cat noisy_text.txt | awk 'NR >= 1215 && NR <= 1220'
   style="font-family: Times New Roman;" class="_mt"
   <size="2">)&nbsp;</font></td> <td valign="bottom"><font class="_mt"
   <size="1">&nbsp;</font></td> <td valign="bottom"><font
   style="font-family: Times New Roman;" class="_mt"
   <size="2">&nbsp;</font></td> <td valign="bottom" align="right"><font
   style="font-family: Times New Roman;" class="_mt"
$   
{% endhighlight %}

Let's assume that we want to remove the tags, i.e. anything between \< and \> and we only want to keep whatever enclosed between the tags. To do so, we create a **regex** which looks for anything starting with a \< and proceeds until it gets to a \>; the regex includes anything between those two characters, excpet a \>. This regex is: `/<[^>]*>/`.

For this problem, we use [Perl](https://www.perl.org/){:target="_blank"} which is a programming language highly used in text processing thanks to its facilities. It can also be used in the command-line just like other commands.

{% highlight bash %}
$ cat noisy_text.txt | awk 'NR >= 1215 && NR <= 1220' | perl -0777 -pe 's/<[^>]*>//gs'
   style="font-family: Times New Roman;" class="_mt"
   )&nbsp; &nbsp; &nbsp; <font
   style="font-family: Times New Roman;" class="_mt"
$  
{% endhighlight %}

There are a few details that we should know.
- `-0777` option lets us to slurp the file and feed all the lines to Perl in one go.
- `-pe` is composed of two flags: `e` which allows us to specify the Perl code to be run and, `-p` flag processes the file line by line.
- `s/[set1]/[set2]/` is the substitution operator which substitutes `[set1]` by `[set2]`.
- `/g` is the global flag which does the matching over the whole text.
- `/s` treats the string as a single long line (only difference is that `\n` is also included when `.` is used).

The following regex is to replace newlines with more than two occurrences with only two newlines. This can also be done with the previous commands that we introduced, like `tr`.

{% highlight bash %}
$ perl -0777 -pe 's/(\n[ ]*){2,}/\n\n/gmi'
{% endhighlight %}

[Here](https://perldoc.perl.org/perlrequick.html){:target="_blank"} you can learn more about the fascinating functionalities of regular expressions in Perl. Most of the text editors make it easy to test and debug regular expressions and visualizing them. There are also many websites for the same purpose, such as [https://regex101.com/](https://regex101.com/){:target="_blank"}.

### Text split with `split`
#### Syntax: `split [options] filename prefix`

We perviously mentioned how to merge files using `cat`. What if we want to split a huge text file into smaller parts? This can be done with `split`.

`split` allows as to split a file based on the number of lines with `-l` option and based on size with `-b`. Let's split our [sample text file]({{site.url}}/docs/tutorials/noisy_text.txt){:target="_blank"} into smaller files containing 500 lines each one:

{% highlight bash %}
$ split -l 500 noisy_text.txt
$ tree
.
├── noisy_text.txt
├── xaa
├── xab
├── xac
└── xad

0 directories, 5 files
$    
{% endhighlight %}


### Wrapping up

How your text is to be pre-processed depends on how your text looks like; what are the noisy stuff and what are the issues that should be cleaned or normalised.

Let's assume that to clean our [sample text file]({{site.url}}/docs/tutorials/noisy_text.txt){:target="_blank"} we need the following steps:
 - Remove HTML tags (`perl -0777 -pe 's/<[^>]*>//gs'`)
 - Remove noisy non-alphanumeric content  (`perl -0777 -pe 's/^[\S]*[^\w\s][\S]*$//gmi'`)
 - Remove unwanted tokens, like `javascript:void(0);`, and characters (`awk '{gsub(/^.*javascript.*$/,"\n"); print }'` or `awk '{gsub(/&nbsp;/," "); print }'`)
 
Following the techniques introduced earlier in this tutorial, we clean the sample text as follows:

{% highlight bash %}
$ cat noisy_text.txt | awk '{gsub(/^ */,""); print }' | tr -s " " | perl -0777 -pe 's/^[\S]*[^\w\s][\S]*$//gmi' |  perl -0777 -pe 's/<[^>]*>//gs' | awk '{gsub(/^.*javascript.*$/,"\n"); print }' | awk '{gsub(/&nbsp;/," "); print }' | perl -0777 -pe 's/(\n[ ]*){2,}/\n\n/gmi' > cleaned_noisy_text.txt
$    
{% endhighlight %}

[This is]({{site.url}}/docs/tutorials/cleaned_noisy_text.txt){:target="_blank"} how this long command cleans our sample text file like a charm!


<hr class="col-xs-12">
Last updated on 28 April 2019.
