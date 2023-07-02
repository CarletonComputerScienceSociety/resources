import{R as _,e as d,f as n,c as g,a as h,r as A,b as l,h as x,d as k,i as S}from"./resources.b6b06de0.js";/* empty css                                  */import"./jsx-runtime.95f74388.js";/* empty css                       */const b="astro:jsx",m=Symbol("empty"),f=t=>t;function p(t){return t&&typeof t=="object"&&t[b]}function z(t){if(typeof t.type=="string")return t;const r={};if(p(t.props.children)){const e=t.props.children;if(!p(e)||!("slot"in e.props))return;const s=f(e.props.slot);r[s]=[e],r[s].$$slot=!0,delete e.props.slot,delete t.props.children}Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(e=>{if(!p(e)||!("slot"in e.props))return e;const s=f(e.props.slot);return Array.isArray(r[s])?r[s].push(e):(r[s]=[e],r[s].$$slot=!0),delete e.props.slot,m}).filter(e=>e!==m)),Object.assign(t.props,r)}function w(t){return typeof t=="string"?d(t):Array.isArray(t)?t.map(r=>w(r)):t}function C(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const r=w(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:r});return}if("set:text"in t.props){const r=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:r});return}}}function R(t,r){const e={[_]:"astro:jsx",[b]:!0,type:t,props:r??{}};return C(e),z(e),e}function E(t,r,{class:e}={}){let s="";e&&(typeof t.class<"u"?t.class+=` ${e}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],e]:t.class=e);for(const[o,a]of Object.entries(t))s+=n(a,o,!0);return d(s)}const L=g("https://resources.carletoncomputerscience.ca"),$=h(async(t,r,e)=>{const s=t.createAstro(L,r,e);s.self=$;const{title:o,description:a,url:j,image:O}=s.props;let i=s.site+j,c=s.site+O;return A`<title>${o}</title>
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
<meta http-equiv="Cache-control" content="no-cache">`},"/home/runner/work/resources/resources/src/components/layouts/Metadata.astro");var u=Object.freeze,M=Object.defineProperty,T=(t,r)=>u(M(t,"raw",{value:u(r||t.slice())})),y;const D=g("https://resources.carletoncomputerscience.ca"),F=h(async(t,r,e)=>{const s=t.createAstro(D,r,e);s.self=F;const{metadata:o}=s.props;return A(y||(y=T([`<html lang="en">
  <head>
    `,`
    <!-- HACK: added font-awesome CDN so islands can use icons -->
    <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"><\/script>
    
  `,`</head>
  <body>
    `,`
    `,`
  </body></html>`])),l(t,"Metadata",$,{title:o.title,description:o.description,url:o.url,image:o.image}),S(t),k(t,e.default),l(t,"Footer",x,{}))},"/home/runner/work/resources/resources/src/layouts/Base.astro");export{F as $,R as c,E as s};
