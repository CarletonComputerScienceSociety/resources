import{$ as y,c as d,s as $}from"./Base.80cb2304.js";import{c as A,a as q,r as a,b as s,m as w,e as k,d as b,F as c,f as m}from"./resources.e9cbd73c.js";/* empty css                                  */import"./jsx-runtime.95f74388.js";/* empty css                           *//* empty css                       *//* empty css                              *//* empty css                                */import"./Search.11832003.js";import"./index.ed373d49.js";/* empty css                              *//* empty css                              *//* empty css                               *//* empty css                              *//* empty css                                 */const F=A("https://resources.carletoncomputerscience.ca"),f=q(async(o,e,t)=>{const l=o.createAstro(F,e,t);l.self=f;const{frontmatter:n}=l.props,C={title:n.title,description:n.short_answer,url:"",image:"/"};return a`${s(o,"Base",y,{metadata:C},{default:r=>a`
  ${w(r)}<div class="faq-page">
    <div class="faq-page__body">
      <div class="faq-page__card">
        <div class="faq-page__icon">
          <!-- <CircleIcon
            icon="fa fa-lightbulb"
            colorSet="yellow-card"
            size="size-normal"
          /> -->
          <a href="https://ccss.carleton.ca">${s(r,"PageLogo",k,{text:"FAQs"})}</a>
        </div>
        <h1>${n.title}</h1>
        <div class="faq-page__content">
          ${b(r,t.default)}
        </div>
        <div class="faq-page__sources">
          ${n?.sources?.length>0?a`${s(r,"Fragment",c,{},{default:_=>a`
                <p>Sources:</p>
                ${s(_,"Fragment",c,{},{default:x=>a`${n?.sources.map((i,v)=>a`<div class="faq-page__source">
                        <span>
                          <a${m(i.link,"href")}>(${v+1})</a>
                        </span>${" "}
                        <a${m(i.link,"href")}>${i.name}</a>
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
`})}`},"/home/runner/work/resources/resources/src/layouts/Faq.astro"),u={};function P(o){return o.replaceAll(/__ASTRO_IMAGE_="(.+)"/gm,(e,t)=>$({src:u[t].src,...u[t].attributes}))}const h=P(`<p>“If you would like to change program elements such as; honours/general, minors, concentration, specializations and streams, you can do so through the Change of Program Elements (COPE) in Carleton Central.” (1)</p>
<p><strong>Note:</strong> You cannot change program elements during the course registration period.</p>`),E={layout:"../../../layouts/Faq.astro",title:"How do I change Computer Science Streams?",short_answer:"If you would like to change program elements such as; honours/general, minors, concentration, specializations and streams, you can do so through the Change of Program Elements (COPE) in Carleton Central.",date:"2023-09-02T00:00:00.000Z",draft:!1,slug:"faq/how-do-i-change-streams",tags:["registration","carleton-central","streams","school-of-computer-science"],sources:[{name:"Academic Advising - Adding or Dropping Minors/Concentration",link:"https://carleton.ca/academicadvising/adding-or-dropping-minorsconcentration/#:~:text=If%20you%20would%20like%20to,(COPE)%20in%20Carleton%20Central.&text=Under%20'Student%20Online%20Applications'%20you,'%20Click%20on%20that%20link."}]},p="/home/runner/work/resources/resources/src/content/resources/faq/how-do-i-change-streams.md",g=void 0;function I(){return`
"If you would like to change program elements such as; honours/general, minors, concentration, specializations and streams, you can do so through the Change of Program Elements (COPE) in Carleton Central." (1)

**Note:** You cannot change program elements during the course registration period.
`}function S(){return h}function O(){return[]}async function z(){const{layout:o,...e}=E;e.file=p,e.url=g;const t=d(c,{"set:html":h});return d(f,{file:p,url:g,content:e,frontmatter:e,headings:O(),rawContent:I,compiledContent:S,"server:root":!0,children:t})}z[Symbol.for("astro.needsHeadRendering")]=!1;export{z as Content,S as compiledContent,z as default,p as file,E as frontmatter,O as getHeadings,u as images,I as rawContent,g as url};
