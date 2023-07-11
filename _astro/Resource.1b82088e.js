import{c as _,a as S,g as C,r as s,b as r,$ as w,m as A,S as k,d as t,C as F,e as D,F as d}from"./resources.70e8a23d.js";import{$ as L}from"./Base.975cead9.js";/* empty css                                */const O=_("https://resources.carletoncomputerscience.ca"),R=S(async(c,u,n)=>{const l=c.createAstro(O,u,n);l.self=R;const{frontmatter:e}=l.props,p={title:e.title,description:"coming soon",url:"",image:"/"},m=await C("resources"),f={year:"numeric",month:"long",day:"numeric"},g=new Date(e.date).toLocaleDateString("en-US",f);e.slug.replace(/-/g," ").replace(/\b\w/g,a=>a.toUpperCase()).replace(/\//g," > ");const $={"student-life":"fa fa-home",academics:"fa fa-graduation-cap",careers:"fa fa-briefcase","self-learning":"fa fa-seedling",courses:"fa fa-book",faqs:"fa fa-lightbulb"},v={"student-life":"red-card",academics:"green-card",careers:"blue-card","self-learning":"orange-card",courses:"purple-card",faqs:"yellow-card"},b=$[e.slug.split("/")[0]],i=v[e.slug.split("/")[0]];return s`${r(c,"Base",L,{metadata:p},{default:a=>s`
  ${r(a,"Navbar",w,{searchList:m})}
  ${A(a)}<div class="resources-layout__container">
    ${r(a,"Sidebar",k,{"client:load":!0,"client:component-hydration":"load","client:component-path":"/home/runner/work/resources/resources/src/components/resources","client:component-export":"Sidebar"})}
    <div${t(`resources-layout__content a-${i}`,"class")}>
      <div class="resources-layout__location">
        <div>
          ${r(a,"CircleIcon",F,{icon:b,colorSet:i,size:"size-normal"})}
        </div>
        <!-- <div class="resources-layout__slug">
          {formattedSlug}
        </div> -->
      </div>
      <h1 class="resources-layout__title">${e.title}</h1>
      <p class="resources-layout__updated">
        Last Updated: ${g}
      </p>
      ${D(a,n.default)}
      <!-- TODO: sources component, see duplicate on FAQ Layout -->
      <div class="resources-layout__sources">
        ${e?.sources?.length>0?s`${r(a,"Fragment",d,{},{default:h=>s`
              <p>Sources:</p>
              ${r(h,"Fragment",d,{},{default:U=>s`${e?.sources.map((o,y)=>s`<div>
                      <span>
                        <a${t(o.link,"href")}>(${y+1})</a>
                      </span>${" "}
                      <a${t(o.link,"href")}>${o.name}</a>
                    </div>`)}`})}
            `})}`:null}
      </div>
    </div>
  </div>
`})}`},"/home/runner/work/resources/resources/src/layouts/Resource.astro");export{R as $};
