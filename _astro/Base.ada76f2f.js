import{R as O,i as y,f as n,c as d,a as g,r as h,d as _,j as x,b as k}from"./resources.2f5e5c37.js";/* empty css                       */const A="astro:jsx",l=Symbol("empty"),m=t=>t;function p(t){return t&&typeof t=="object"&&t[A]}function S(t){if(typeof t.type=="string")return t;const r={};if(p(t.props.children)){const e=t.props.children;if(!p(e)||!("slot"in e.props))return;const s=m(e.props.slot);r[s]=[e],r[s].$$slot=!0,delete e.props.slot,delete t.props.children}Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(e=>{if(!p(e)||!("slot"in e.props))return e;const s=m(e.props.slot);return Array.isArray(r[s])?r[s].push(e):(r[s]=[e],r[s].$$slot=!0),delete e.props.slot,l}).filter(e=>e!==l)),Object.assign(t.props,r)}function b(t){return typeof t=="string"?y(t):Array.isArray(t)?t.map(r=>b(r)):t}function z(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const r=b(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:r});return}if("set:text"in t.props){const r=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:r});return}}}function B(t,r){const e={[O]:"astro:jsx",[A]:!0,type:t,props:r??{}};return z(e),S(e),e}function P(t,r,{class:e}={}){let s="";e&&(typeof t.class<"u"?t.class+=` ${e}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],e]:t.class=e);for(const[o,a]of Object.entries(t))s+=n(a,o,!0);return y(s)}const C=d("https://resources.carletoncomputerscience.ca"),w=g(async(t,r,e)=>{const s=t.createAstro(C,r,e);s.self=w;const{title:o,description:a,url:$,image:j}=s.props;let i=s.site+$,c=s.site+j;return h`<title>${o}</title>
<meta name="description"${n(a,"content")}>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<link rel="icon" type="image/x-icon" href="/favicon.ico">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${n(i,"content")}>
<meta property="og:title"${n(o,"content")}>
<meta property="og:description"${n(a,"content")}>
<meta property="og:image"${n(c,"content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${n(i,"content")}>
<meta property="twitter:title"${n(o,"content")}>
<meta property="twitter:description"${n(a,"content")}>
<meta property="twitter:image"${n(c,"content")}>

<!-- Cacheing -->
<meta http-equiv="Cache-control" content="no-cache">`},"/home/runner/work/resources/resources/src/components/layouts/Metadata.astro");var u=Object.freeze,L=Object.defineProperty,M=(t,r)=>u(L(t,"raw",{value:u(r||t.slice())})),f;const T=d("https://resources.carletoncomputerscience.ca"),D=g(async(t,r,e)=>{const s=t.createAstro(T,r,e);s.self=D;const{metadata:o}=s.props;return h(f||(f=M([`<html lang="en">
  <head>
    `,`
    <!-- HACK: added font-awesome CDN so islands can use icons -->
    <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"><\/script>
    
  `,`</head>
  <body>
    `,`
  </body></html>`])),k(t,"Metadata",w,{title:o.title,description:o.description,url:o.url,image:o.image}),x(t),_(t,e.default))},"/home/runner/work/resources/resources/src/layouts/Base.astro");export{D as $,B as c,P as s};
