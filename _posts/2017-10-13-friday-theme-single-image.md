---
title:  Why science blogging matters?
tags:
  - Blogging
---

I am working in Natural Language Processing and Machine Learning. 


## Blogging matters, because:

- Blogging is **learning**. It is said that the best of learning something is to teach it. Describing your ideas and experiences may not only teach your readers and trigger an idea in their mind, it is also a way to make sure that you actually have a profound knowledge about what you are talking about. Some people, especially in science, get to that conviction by teaching during their PhD studies as teacher assistant. 

- Blogging is **teaching**. Did you experience a new thing and would like to share it with others? Have you noticed that a problem can be solved in a more efficient way? You have a big idea but do not know how to address it? Do you have a discovery, a remark, a critique? Then, blogging one of the (best) ways to start talking. 

- Blogging is **fun**. Writing needs concentration and a kind of innovation. Yes, it takes a lot of time but words are one of best ways to keep your passion forever with a little cost. 

- Blogging is a way of **gaining money**. Yes. You can gain money from the content of your posts on your blog.  

Each post of your blog is a light file of text not exceeding a few kilobytes of size. That is way less costy than videos and podcasts and therefore, makes blogs more accessible and easy. 

That being said, some people prefer watching a video to find an answer to their question. As an example, the following chart shows the number of blog readers in the US. Those statistics may change based on the country. 

In addition, blogging is a way of improving your **language skills**, if you are not a native speaker. 

- Science grows so fast.  

## Where to start? 

## Which platform to use? 

There are a lot of powerful platforms for blogging. Most of those platforms provide fantastic tools that make the management of your blog easy and fun. Here are some of the blog-publishing services:

Blogger
Tumblr
WordPress
Medium


Here's how to put a single image into a post, using a Bootstrap 4 card. This shows how to mingle Markdown with HTML, too.

<!--more-->

The card allows a caption to be aligned with the photo, and the card classes contain a `card-img-top` that ensures the image is responsive within the grid.

<div class="card mb-3">
    <img class="card-img-top" src="https://drscdn.500px.org/photo/127767019/q%3D80_m%3D1500/v2?webp=true&sig=dd1fa4580c459472969cd4992068922f311f12cf263cf08b39615cfc1812286b"/>
    <div class="card-body bg-light">
        <div class="card-text">
            The Peak District on a mosty morning.
        </div>
    </div>
</div>

The HTML source for this card is below, or of course you could look at the raw source for this file in the GitHub repo or on your disk after you have downloaded the repo. WHen looking at the source, you can see the Markdown mingled with the HTML.

{% highlight html %}

<div class="card mb-3">
    <img class="card-img-top" src="https://drscdn.500px.org/photo/127767019/q%3D80_m%3D1500/v2?webp=true&sig=dd1fa4580c459472969cd4992068922f311f12cf263cf08b39615cfc1812286b"/>
    <div class="card-body bg-light">
        <div class="card-text">
            The Peak District on a mosty morning.
        </div>
    </div>
</div>

{% endhighlight %}