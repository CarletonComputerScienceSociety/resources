import{c as g,a as $,r as a,b as t,m as u,f as v,e as _,F as d,d as i,h}from"./resources.8d6881aa.js";/* empty css                                  */import"./jsx-runtime.95f74388.js";import{$ as q}from"./Base.35b27d05.js";/* empty css                           */const F=g("https://resources.carletoncomputerscience.ca"),b=$(async(o,p,c)=>{const n=o.createAstro(F,p,c);n.self=b;const{frontmatter:e}=n.props,l={title:e.title,description:e.short_answer,url:"",image:"/"};return a`${t(o,"Base",q,{metadata:l},{default:s=>a`
  ${u(s)}<div class="faq-page">
    <div class="faq-page__body">
      <div class="faq-page__card">
        <div class="faq-page__icon">
          <!-- <CircleIcon
            icon="fa fa-lightbulb"
            colorSet="yellow-card"
            size="size-normal"
          /> -->
          <a href="https://ccss.carleton.ca">${t(s,"PageLogo",v,{text:"FAQs"})}</a>
        </div>
        <h1>${e.title}</h1>
        <div class="faq-page__content">
          ${_(s,c.default)}
        </div>
        <div class="faq-page__sources">
          ${e?.sources?.length>0?a`${t(s,"Fragment",d,{},{default:m=>a`
                <p>Sources:</p>
                ${t(m,"Fragment",d,{},{default:A=>a`${e?.sources.map((r,f)=>a`<div class="faq-page__source">
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
  ${t(s,"Footer",h,{})}
`})}`},"/home/runner/work/resources/resources/src/layouts/Faq.astro");export{b as $};
