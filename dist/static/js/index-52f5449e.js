import{d as t,ap as s,b as e,c as a,i as p,f as m,E as d,b2 as i,ba as c,k as l,F as r,G as n}from"./index-b864a2d5.js";import{_ as y}from"./empty-ae586b6c.js";const o={class:"empty-img"},g=["src"],u={class:"empty-title"},b={class:"empty-btn"};var f=n(t({__name:"index",props:{emptyImg:{type:String,default:""},title:{type:String,default:"暂无内容哦~"},desc:{type:String,default:""},emptyClass:{type:String,default:""}},emits:["currentIndex"],setup(t,{emit:n}){const f=!!s().emptyBtn;return(s,n)=>(e(),a("div",{class:r(["com-za-empty",[t.emptyClass||""]])},[p("div",o,[p("img",{src:t.emptyImg||m(y),alt:""},null,8,g)]),p("p",u,d(t.title),1),i(p("p",{class:"empty-desc"},d(t.desc),513),[[c,t.desc]]),i(p("div",b,[l(s.$slots,"emptyBtn",{},void 0,!0)],512),[[c,f]])],2))}}),[["__scopeId","data-v-4b537dc2"]]);export{f as P};
