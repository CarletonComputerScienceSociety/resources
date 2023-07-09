import{c as o,s as a}from"./Base.5bed4b3d.js";import{$ as p}from"./Resource.58125a92.js";import{F as m}from"./resources.a13c6e54.js";/* empty css                                  */import"./jsx-runtime.95f74388.js";import"./index.ed373d49.js";/* empty css                       *//* empty css                                *//* empty css                              *//* empty css                                */import"./Search.11832003.js";/* empty css                              *//* empty css                              *//* empty css                               *//* empty css                              *//* empty css                                 */const n={};function u(r){return r.replaceAll(/__ASTRO_IMAGE_="(.+)"/gm,(t,e)=>a({src:n[e].src,...n[e].attributes}))}const l=u(`<p>This is my in-progress blog post.</p>
<p>No page will be built for this post.</p>
<p>To build and publish this post:</p>
<ul>
<li>update the frontmatter to <code>draft: false</code> or</li>
<li>remove the <code>draft</code> property entirely.</li>
</ul>
<p>But, this page <em>will</em> be returned by any matching <code>Astro.glob()</code> request.</p>`),c={layout:"../../../layouts/Resource.astro",title:"Example",date:"2019-01-01T00:00:00.000Z",draft:!1,slug:"example/example"},s="/home/runner/work/resources/resources/src/content/resources/example/example.md",i=void 0;function d(){return`
This is my in-progress blog post.

No page will be built for this post.

To build and publish this post:

- update the frontmatter to \`draft: false\` or
- remove the \`draft\` property entirely.

But, this page _will_ be returned by any matching \`Astro.glob()\` request.
`}function f(){return l}function g(){return[]}async function h(){const{layout:r,...t}=c;t.file=s,t.url=i;const e=o(m,{"set:html":l});return o(p,{file:s,url:i,content:t,frontmatter:t,headings:g(),rawContent:d,compiledContent:f,"server:root":!0,children:e})}h[Symbol.for("astro.needsHeadRendering")]=!1;export{h as Content,f as compiledContent,h as default,s as file,c as frontmatter,g as getHeadings,n as images,d as rawContent,i as url};
