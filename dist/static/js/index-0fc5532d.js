import{G as t,d as s,b6 as e,b as a,c as p,i as m,f as d,E as i,ag as c,aA as l,k as r,F as n}from"./index-325daa40.js";import{_ as y}from"./empty-ae586b6c.js";const o={class:"empty-img"},g=["src"],u={class:"empty-title"},f={class:"empty-btn"};var v=t(s({__name:"index",props:{emptyImg:{type:String,default:""},title:{type:String,default:"暂无内容哦~"},desc:{type:String,default:""},emptyClass:{type:String,default:""}},emits:["currentIndex"],setup(t,{emit:s}){const v=!!e().emptyBtn;return(s,e)=>(a(),p("div",{class:n(["com-za-empty",[t.emptyClass||""]])},[m("div",o,[m("img",{src:t.emptyImg||d(y),alt:""},null,8,g)]),m("p",u,i(t.title),1),c(m("p",{class:"empty-desc"},i(t.desc),513),[[l,t.desc]]),c(m("div",f,[r(s.$slots,"emptyBtn",{},void 0,!0)],512),[[l,v]])],2))}}),[["__scopeId","data-v-4b537dc2"]]);export{v as P};
