import{_ as t,d as s,U as e,o as a,c as p,a as m,u as c,e as d,V as i,W as l,g as n,n as r}from"./index-0b6bfadc.js";import{_ as y}from"./empty-ae586b6c.js";const o={class:"empty-img"},g=["src"],u={class:"empty-title"},f={class:"empty-btn"};var _=t(s({__name:"index",props:{emptyImg:{type:String,default:""},title:{type:String,default:"暂无内容哦~"},desc:{type:String,default:""},emptyClass:{type:String,default:""}},emits:["currentIndex"],setup(t,{emit:s}){const _=!!e().emptyBtn;return(s,e)=>(a(),p("div",{class:r(["com-za-empty",[t.emptyClass||""]])},[m("div",o,[m("img",{src:t.emptyImg||c(y),alt:""},null,8,g)]),m("p",u,d(t.title),1),i(m("p",{class:"empty-desc"},d(t.desc),513),[[l,t.desc]]),i(m("div",f,[n(s.$slots,"emptyBtn",{},void 0,!0)],512),[[l,_]])],2))}}),[["__scopeId","data-v-7c4eef08"]]);export{_};
