import{d as t,ap as s,b as e,c as a,i as p,f as m,E as c,b2 as i,ba as d,k as l,F as r,G as n}from"./index-4989475c.js";import{_ as y}from"./empty-ae586b6c.js";const o={class:"empty-img"},g=["src"],u={class:"empty-title"},f={class:"empty-btn"};var b=n(t({__name:"index",props:{emptyImg:{type:String,default:""},title:{type:String,default:"暂无内容哦~"},desc:{type:String,default:""},emptyClass:{type:String,default:""}},emits:["currentIndex"],setup(t,{emit:n}){const b=!!s().emptyBtn;return(s,n)=>(e(),a("div",{class:r(["com-za-empty",[t.emptyClass||""]])},[p("div",o,[p("img",{src:t.emptyImg||m(y),alt:""},null,8,g)]),p("p",u,c(t.title),1),i(p("p",{class:"empty-desc"},c(t.desc),513),[[d,t.desc]]),i(p("div",f,[l(s.$slots,"emptyBtn",{},void 0,!0)],512),[[d,b]])],2))}}),[["__scopeId","data-v-4b537dc2"]]);export{b as P};
