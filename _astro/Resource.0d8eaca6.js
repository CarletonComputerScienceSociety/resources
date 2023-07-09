import{c as d,a as u,g as p,r as a,b as r,$ as l,m as b,S as f,d as h}from"./resources.2e865943.js";import{$ as v}from"./Base.e259927d.js";/* empty css                                */const y=d("https://resources.carletoncomputerscience.ca"),$=u(async(o,c,t)=>{const s=o.createAstro(y,c,t);s.self=$;const{frontmatter:n}=s.props,i={title:n.title,description:"coming soon",url:"",image:"/"},m=await p("resources");return a`${r(o,"Base",v,{metadata:i},{default:e=>a`
  ${r(e,"Navbar",l,{searchList:m})}
  ${b(e)}<div class="resources-layout__container">
    ${r(e,"Sidebar",f,{"client:load":!0,"client:component-hydration":"load","client:component-path":"/home/runner/work/resources/resources/src/components/resources","client:component-export":"Sidebar"})}
    <div class="resources-layout__content">
      ${h(e,t.default)}
    </div>
  </div>
`})}`},"/home/runner/work/resources/resources/src/layouts/Resource.astro");export{$};
