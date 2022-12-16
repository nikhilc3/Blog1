---
keywords: fastai
title: Title
nb_path: _notebooks/2022-11-08-pythonnworld.ipynb
layout: notebook
---

<!--
#################################################
### THIS FILE WAS AUTOGENERATED! DO NOT EDIT! ###
#################################################
# file to edit: _notebooks/2022-11-08-pythonnworld.ipynb
-->

<div class="container" id="notebook-container">
        
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">requests</span>
<span class="kn">from</span> <span class="nn">bs4</span> <span class="kn">import</span> <span class="n">BeautifulSoup</span>


<span class="k">def</span> <span class="nf">main</span><span class="p">(</span><span class="n">url</span><span class="p">):</span>
    <span class="n">r</span> <span class="o">=</span> <span class="n">requests</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="n">url</span><span class="p">)</span>
    <span class="n">soup</span> <span class="o">=</span> <span class="n">BeautifulSoup</span><span class="p">(</span><span class="n">r</span><span class="o">.</span><span class="n">content</span><span class="p">,</span> <span class="s1">&#39;html.parser&#39;</span><span class="p">)</span>
    <span class="n">target</span> <span class="o">=</span> <span class="n">soup</span><span class="o">.</span><span class="n">find</span><span class="p">(</span>
        <span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="n">class_</span><span class="o">=</span><span class="s2">&quot;col-md-8 country-pop-description&quot;</span><span class="p">)</span><span class="o">.</span><span class="n">find_all_next</span><span class="p">(</span><span class="s2">&quot;strong&quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">]</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;India Population :&quot;</span> <span class="o">+</span> <span class="n">target</span><span class="o">.</span><span class="n">text</span><span class="p">)</span>


<span class="n">main</span><span class="p">(</span><span class="s2">&quot;https://www.worldometers.info/world-population/india-population/&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>India Population :1,411,903,248
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

</div>
 
