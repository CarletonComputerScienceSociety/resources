import{c as o,s as l}from"./Base.1e34b6f5.js";import{$ as p}from"./Resource.09a30ab3.js";import{F as d}from"./resources.66e7eca4.js";/* empty css                                  */import"./jsx-runtime.95f74388.js";import"./index.ed373d49.js";/* empty css                       *//* empty css                                *//* empty css                              *//* empty css                                */import"./Search.11832003.js";/* empty css                              *//* empty css                              *//* empty css                               *//* empty css                              *//* empty css                                 */const i={};function c(e){return e.replaceAll(/__ASTRO_IMAGE_="(.+)"/gm,(n,t)=>l({src:i[t].src,...i[t].attributes}))}const r=c(`<h1 id="h1-heading-8">h1 Heading 8-)</h1>
<h2 id="h2-heading">h2 Heading</h2>
<h3 id="h3-heading">h3 Heading</h3>
<h4 id="h4-heading">h4 Heading</h4>
<h5 id="h5-heading">h5 Heading</h5>
<h6 id="h6-heading">h6 Heading</h6>
<h2 id="horizontal-rules">Horizontal Rules</h2>
<hr>
<hr>
<hr>
<h2 id="typographic-replacements">Typographic replacements</h2>
<p>Enable typographer option to see result.</p>
<p>(c) (C) (r) (R) (tm) (TM) (p) (P) +-</p>
<p>test.. test… test… test?… test!…</p>
<p>!!!!!! ???? ,, — ---</p>
<p>“Smartypants, double quotes” and ‘single quotes’</p>
<h2 id="emphasis">Emphasis</h2>
<p><strong>This is bold text</strong></p>
<p><strong>This is bold text</strong></p>
<p><em>This is italic text</em></p>
<p><em>This is italic text</em></p>
<p><del>Strikethrough</del></p>
<h2 id="blockquotes">Blockquotes</h2>
<blockquote>
<p>Blockquotes can also be nested…</p>
<blockquote>
<p>…by using additional greater-than signs right next to each other…</p>
<blockquote>
<p>…or with spaces between arrows.</p>
</blockquote>
</blockquote>
</blockquote>
<h2 id="lists">Lists</h2>
<p>Unordered</p>
<ul>
<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
<li>Sub-lists are made by indenting 2 spaces:
<ul>
<li>Marker character change forces new list start:
<ul>
<li>Ac tristique libero volutpat at</li>
</ul>
<ul>
<li>Facilisis in pretium nisl aliquet</li>
</ul>
<ul>
<li>Nulla volutpat aliquam velit</li>
</ul>
</li>
</ul>
</li>
<li>Very easy!</li>
</ul>
<p>Ordered</p>
<ol>
<li>
<p>Lorem ipsum dolor sit amet</p>
</li>
<li>
<p>Consectetur adipiscing elit</p>
</li>
<li>
<p>Integer molestie lorem at massa</p>
</li>
<li>
<p>You can use sequential numbers…</p>
</li>
<li>
<p>…or keep all the numbers as <code>1.</code></p>
</li>
</ol>
<p>Start numbering with offset:</p>
<ol start="57">
<li>foo</li>
<li>bar</li>
</ol>
<h2 id="code">Code</h2>
<p>Inline <code>code</code></p>
<p>Indented code</p>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #e1e4e8">// Some comments</span></span>
<span class="line"><span style="color: #e1e4e8">line 1 of code</span></span>
<span class="line"><span style="color: #e1e4e8">line 2 of code</span></span>
<span class="line"><span style="color: #e1e4e8">line 3 of code</span></span></code></pre>
<p>Block code “fences”</p>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #e1e4e8">Sample text here...</span></span></code></pre>
<p>Syntax highlighting</p>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #F97583">var</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">foo</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">function</span><span style="color: #E1E4E8"> (</span><span style="color: #FFAB70">bar</span><span style="color: #E1E4E8">) {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #F97583">return</span><span style="color: #E1E4E8"> bar</span><span style="color: #F97583">++</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">};</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">console.</span><span style="color: #B392F0">log</span><span style="color: #E1E4E8">(</span><span style="color: #B392F0">foo</span><span style="color: #E1E4E8">(</span><span style="color: #79B8FF">5</span><span style="color: #E1E4E8">));</span></span></code></pre>
<h2 id="tables">Tables</h2>





















<table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>data</td><td>path to data files to supply the data that will be passed into templates.</td></tr><tr><td>engine</td><td>engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td>ext</td><td>extension to be used for dest files.</td></tr></tbody></table>
<p>Right aligned columns</p>





















<table><thead><tr><th align="right">Option</th><th align="right">Description</th></tr></thead><tbody><tr><td align="right">data</td><td align="right">path to data files to supply the data that will be passed into templates.</td></tr><tr><td align="right">engine</td><td align="right">engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td align="right">ext</td><td align="right">extension to be used for dest files.</td></tr></tbody></table>
<h2 id="links">Links</h2>
<p><a href="http://dev.nodeca.com">link text</a></p>
<p><a href="http://nodeca.github.io/pica/demo/" title="title text!">link with title</a></p>
<p>Autoconverted link <a href="https://github.com/nodeca/pica">https://github.com/nodeca/pica</a> (enable linkify to see)</p>
<h2 id="images">Images</h2>
<p><img src="https://octodex.github.com/images/minion.png" alt="Minion">
<img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat"></p>
<p>Like links, Images also have a footnote style syntax</p>
<p><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat"></p>
<p>With a reference later in the document defining the URL location:</p>
<h2 id="plugins">Plugins</h2>
<p>The killer feature of <code>markdown-it</code> is very effective support of
<a href="https://www.npmjs.org/browse/keyword/markdown-it-plugin">syntax plugins</a>.</p>
<h3 id="emojies"><a href="https://github.com/markdown-it/markdown-it-emoji">Emojies</a></h3>
<blockquote>
<p>Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:</p>
<p>Shortcuts (emoticons): :-) :-( 8-) ;)</p>
</blockquote>
<p>see <a href="https://github.com/markdown-it/markdown-it-emoji#change-output">how to change output</a> with twemoji.</p>
<h3 id="subscript--superscript"><a href="https://github.com/markdown-it/markdown-it-sub">Subscript</a> / <a href="https://github.com/markdown-it/markdown-it-sup">Superscript</a></h3>
<ul>
<li>19^th^</li>
<li>H<del>2</del>O</li>
</ul>
<h3 id="ins"><a href="https://github.com/markdown-it/markdown-it-ins">&#x3C;ins></a></h3>
<p>++Inserted text++</p>
<h3 id="mark"><a href="https://github.com/markdown-it/markdown-it-mark">&#x3C;mark></a></h3>
<p>==Marked text==</p>
<h3 id="footnotes"><a href="https://github.com/markdown-it/markdown-it-footnote">Footnotes</a></h3>
<p>Footnote 1 link<sup><a href="#user-content-fn-first" id="user-content-fnref-first" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup>.</p>
<p>Footnote 2 link<sup><a href="#user-content-fn-second" id="user-content-fnref-second" data-footnote-ref="" aria-describedby="footnote-label">2</a></sup>.</p>
<p>Inline footnote^[Text of inline footnote] definition.</p>
<p>Duplicated footnote reference<sup><a href="#user-content-fn-second" id="user-content-fnref-second-2" data-footnote-ref="" aria-describedby="footnote-label">2</a></sup>.</p>
<h3 id="definition-lists"><a href="https://github.com/markdown-it/markdown-it-deflist">Definition lists</a></h3>
<p>Term 1</p>
<p>: Definition 1
with lazy continuation.</p>
<p>Term 2 with <em>inline markup</em></p>
<p>: Definition 2</p>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #e1e4e8">    { some code, part of Definition 2 }</span></span>
<span class="line"><span style="color: #e1e4e8"></span></span>
<span class="line"><span style="color: #e1e4e8">Third paragraph of definition 2.</span></span></code></pre>
<p><em>Compact style:</em></p>
<p>Term 1
~ Definition 1</p>
<p>Term 2
~ Definition 2a
~ Definition 2b</p>
<h3 id="abbreviations"><a href="https://github.com/markdown-it/markdown-it-abbr">Abbreviations</a></h3>
<p>This is HTML abbreviation example.</p>
<p>It converts “HTML”, but keep intact partial entries like “xxxHTMLyyy” and so on.</p>
<p>*[HTML]: Hyper Text Markup Language</p>
<h3 id="custom-containers"><a href="https://github.com/markdown-it/markdown-it-container">Custom containers</a></h3>
<p>::: warning
<em>here be dragons</em>
:::</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-first">
<p>Footnote <strong>can have markup</strong></p>
<p>and multiple paragraphs. <a href="#user-content-fnref-first" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
<li id="user-content-fn-second">
<p>Footnote text. <a href="#user-content-fnref-second" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a> <a href="#user-content-fnref-second-2" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩<sup>2</sup></a></p>
</li>
</ol>
</section>`),h={layout:"../../layouts/Resource.astro",title:"My Blog Post",date:"2019-01-01T00:00:00.000Z",draft:!1,slug:"example"},s="/home/runner/work/resources/resources/src/content/resources/example.md",a=void 0;function u(){return`
# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with \`+\`, \`-\`, or \`*\`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\`js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg "The Dojocat"

## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

: Definition 1
with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\\*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
_here be dragons_
:::
`}function m(){return r}function g(){return[{depth:1,slug:"h1-heading-8",text:"h1 Heading 8-)"},{depth:2,slug:"h2-heading",text:"h2 Heading"},{depth:3,slug:"h3-heading",text:"h3 Heading"},{depth:4,slug:"h4-heading",text:"h4 Heading"},{depth:5,slug:"h5-heading",text:"h5 Heading"},{depth:6,slug:"h6-heading",text:"h6 Heading"},{depth:2,slug:"horizontal-rules",text:"Horizontal Rules"},{depth:2,slug:"typographic-replacements",text:"Typographic replacements"},{depth:2,slug:"emphasis",text:"Emphasis"},{depth:2,slug:"blockquotes",text:"Blockquotes"},{depth:2,slug:"lists",text:"Lists"},{depth:2,slug:"code",text:"Code"},{depth:2,slug:"tables",text:"Tables"},{depth:2,slug:"links",text:"Links"},{depth:2,slug:"images",text:"Images"},{depth:2,slug:"plugins",text:"Plugins"},{depth:3,slug:"emojies",text:"Emojies"},{depth:3,slug:"subscript--superscript",text:"Subscript / Superscript"},{depth:3,slug:"ins",text:"<ins>"},{depth:3,slug:"mark",text:"<mark>"},{depth:3,slug:"footnotes",text:"Footnotes"},{depth:3,slug:"definition-lists",text:"Definition lists"},{depth:3,slug:"abbreviations",text:"Abbreviations"},{depth:3,slug:"custom-containers",text:"Custom containers"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}async function f(){const{layout:e,...n}=h;n.file=s,n.url=a;const t=o(d,{"set:html":r});return o(p,{file:s,url:a,content:n,frontmatter:n,headings:g(),rawContent:u,compiledContent:m,"server:root":!0,children:t})}f[Symbol.for("astro.needsHeadRendering")]=!1;export{f as Content,m as compiledContent,f as default,s as file,h as frontmatter,g as getHeadings,i as images,u as rawContent,a as url};
