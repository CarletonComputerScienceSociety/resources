import{$ as f,c as n,s as g}from"./Base.59f4aab4.js";import{c as h,a as b,r as s,b as y,d as A,F as v}from"./resources.b6b06de0.js";/* empty css                                  */import"./jsx-runtime.95f74388.js";import"./index.ed373d49.js";/* empty css                       *//* empty css                              *//* empty css                                */import"./Search.11832003.js";/* empty css                              *//* empty css                              *//* empty css                               *//* empty css                              *//* empty css                                 */const w=h("https://resources.carletoncomputerscience.ca"),p=b(async(r,t,e)=>{const o=r.createAstro(w,t,e);o.self=p;const{frontmatter:u}=o.props,m={title:u.title,description:"coming soon",url:"",image:"/"};return s`${y(r,"Base",f,{metadata:m},{default:d=>s`
  ${A(d,e.default)}
`})}`},"/home/runner/work/resources/resources/src/layouts/Event.astro"),a={};function T(r){return r.replaceAll(/__ASTRO_IMAGE_="(.+)"/gm,(t,e)=>g({src:a[e].src,...a[e].attributes}))}const c=T(`<p>This is my in-progress blog post.</p>
<p>No page will be built for this post.</p>
<p>To build and publish this post:</p>
<ul>
<li>update the frontmatter to <code>draft: false</code> or</li>
<li>remove the <code>draft</code> property entirely.</li>
</ul>
<p>But, this page <em>will</em> be returned by any matching <code>Astro.glob()</code> request.</p>`),_={layout:"../../layouts/Event.astro",title:"Event",date:"2019-01-01T00:00:00.000Z",draft:!1,slug:"events/example"},i="/home/runner/work/resources/resources/src/content/events/example.md",l=void 0;function C(){return`
This is my in-progress blog post.

No page will be built for this post.

To build and publish this post:

- update the frontmatter to \`draft: false\` or
- remove the \`draft\` property entirely.

But, this page _will_ be returned by any matching \`Astro.glob()\` request.
`}function E(){return c}function $(){return[]}async function B(){const{layout:r,...t}=_;t.file=i,t.url=l;const e=n(v,{"set:html":c});return n(p,{file:i,url:l,content:t,frontmatter:t,headings:$(),rawContent:C,compiledContent:E,"server:root":!0,children:e})}B[Symbol.for("astro.needsHeadRendering")]=!1;export{B as Content,E as compiledContent,B as default,i as file,_ as frontmatter,$ as getHeadings,a as images,C as rawContent,l as url};
