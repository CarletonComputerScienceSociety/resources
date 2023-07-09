import{c as g,a as u,r as a,b as t,m as v,e as $,d as _,F as d,f as i}from"./resources.29088667.js";/* empty css                                  */import"./jsx-runtime.95f74388.js";import{$ as h}from"./Base.3b55ce20.js";/* empty css                           */const q=g("https://resources.carletoncomputerscience.ca"),b=u(async(o,p,c)=>{const n=o.createAstro(q,p,c);n.self=b;const{frontmatter:e}=n.props,l={title:e.title,description:e.short_answer,url:"",image:"/"};return a`${t(o,"Base",h,{metadata:l},{default:s=>a`
  ${v(s)}<div class="faq-page">
    <div class="faq-page__body">
      <div class="faq-page__card">
        <div class="faq-page__icon">
          <!-- <CircleIcon
            icon="fa fa-lightbulb"
            colorSet="yellow-card"
            size="size-normal"
          /> -->
          <a href="https://ccss.carleton.ca">${t(s,"PageLogo",$,{text:"FAQs"})}</a>
        </div>
        <h1>${e.title}</h1>
        <div class="faq-page__content">
          ${_(s,c.default)}
        </div>
        <div class="faq-page__sources">
          ${e?.sources?.length>0?a`${t(s,"Fragment",d,{},{default:m=>a`
                <p>Sources:</p>
                ${t(m,"Fragment",d,{},{default:F=>a`${e?.sources.map((r,f)=>a`<div class="faq-page__source">
                        <span>
                          <a${i(r.link,"href")}>(${f+1})</a>
                        </span>${" "}
                        <a${i(r.link,"href")}>${r.name}</a>
                      </div>`)}`})}
              `})}`:null}
          <!-- <div class="faq-page__updated">
            <span>Last Updated: </span>
            <span>{formattedPublishDate}</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
`})}`},"/home/runner/work/resources/resources/src/layouts/Faq.astro");export{b as $};
