import{c as b,a as y,g as h,r as c,b as r,$ as v,m as _,S,C,d as $}from"./resources.66e7eca4.js";import{$ as w}from"./Base.1e34b6f5.js";/* empty css                                */const A=b("https://resources.carletoncomputerscience.ca"),k=y(async(o,n,s)=>{const t=o.createAstro(A,n,s);t.self=k;const{frontmatter:a}=t.props,i={title:a.title,description:"coming soon",url:"",image:"/"},l=await h("resources"),d={year:"numeric",month:"long",day:"numeric"},u=new Date(a.date).toLocaleDateString("en-US",d);a.slug.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase()).replace(/\//g," > ");const p={"student-life":"fa fa-home",academics:"fa fa-graduation-cap",careers:"fa fa-briefcase","self-learning":"fa fa-seedling",courses:"fa fa-book",faqs:"fa fa-lightbulb"},m={"student-life":"red-card",academics:"green-card",careers:"blue-card","self-learning":"orange-card",courses:"purple-card",faqs:"yellow-card"},f=p[a.slug.split("/")[0]],g=m[a.slug.split("/")[0]];return c`${r(o,"Base",w,{metadata:i},{default:e=>c`
  ${r(e,"Navbar",v,{searchList:l})}
  ${_(e)}<div class="resources-layout__container">
    ${r(e,"Sidebar",S,{"client:load":!0,"client:component-hydration":"load","client:component-path":"/home/runner/work/resources/resources/src/components/resources","client:component-export":"Sidebar"})}
    <div class="resources-layout__content">
      <div class="resources-layout__location">
        <div>
          ${r(e,"CircleIcon",C,{icon:f,colorSet:g,size:"size-normal"})}
        </div>
        <!-- <div class="resources-layout__slug">
          {formattedSlug}
        </div> -->
      </div>
      <h1 class="resources-layout__title">${a.title}</h1>
      <p class="resources-layout__updated">
        Last Updated: ${u}
      </p>
      ${$(e,s.default)}
    </div>
  </div>
`})}`},"/home/runner/work/resources/resources/src/layouts/Resource.astro");export{k as $};
