import{c as o,s as c}from"./Base.87b58b75.js";import{$ as m}from"./Resource.824a8009.js";import{F as u}from"./resources.573af26b.js";/* empty css                                  */import"./jsx-runtime.95f74388.js";import"./index.ed373d49.js";/* empty css                       *//* empty css                                *//* empty css                              *//* empty css                                */import"./Search.11832003.js";/* empty css                              *//* empty css                              *//* empty css                               *//* empty css                              *//* empty css                                 */const n={};function f(e){return e.replaceAll(/__ASTRO_IMAGE_="(.+)"/gm,(t,r)=>c({src:n[r].src,...n[r].attributes}))}const i=f('<h1 id="faqs">FAQs</h1>'),l={layout:"../../layouts/Resource.astro",title:"FAQs",date:"2023-09-02T00:00:00.000Z",draft:!1,slug:"resources/faqs"},s="/home/runner/work/resources/resources/src/content/resources/faqs.md",a=void 0;function p(){return`
# FAQs
`}function d(){return i}function g(){return[{depth:1,slug:"faqs",text:"FAQs"}]}async function A(){const{layout:e,...t}=l;t.file=s,t.url=a;const r=o(u,{"set:html":i});return o(m,{file:s,url:a,content:t,frontmatter:t,headings:g(),rawContent:p,compiledContent:d,"server:root":!0,children:r})}A[Symbol.for("astro.needsHeadRendering")]=!1;export{A as Content,d as compiledContent,A as default,s as file,l as frontmatter,g as getHeadings,n as images,p as rawContent,a as url};