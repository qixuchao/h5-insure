import{d as t,an as s,b as e,c as a,i as p,f as m,$ as c,b2 as i,ba as d,ac as l,a0 as r,ar as n}from"./index-4c13af5f.js";import{_ as y}from"./empty-ae586b6c.js";const o={class:"empty-img"},f=["src"],g={class:"empty-title"},u={class:"empty-btn"};var b=n(t({__name:"index",props:{emptyImg:{type:String,default:""},title:{type:String,default:"暂无内容哦~"},desc:{type:String,default:""},emptyClass:{type:String,default:""}},emits:["currentIndex"],setup(t,{emit:n}){const b=!!s().emptyBtn;return(s,n)=>(e(),a("div",{class:r(["com-za-empty",[t.emptyClass||""]])},[p("div",o,[p("img",{src:t.emptyImg||m(y),alt:""},null,8,f)]),p("p",g,c(t.title),1),i(p("p",{class:"empty-desc"},c(t.desc),513),[[d,t.desc]]),i(p("div",u,[l(s.$slots,"emptyBtn",{},void 0,!0)],512),[[d,b]])],2))}}),[["__scopeId","data-v-4b537dc2"]]);export{b as P};
