import{d as t,U as s,o as e,c as a,a as p,u as m,e as c,V as i,W as d,g as l,n,_ as r}from"./index-674cff0a.js";import{_ as y}from"./empty-ae586b6c.js";const o={class:"empty-img"},f=["src"],g={class:"empty-title"},u={class:"empty-btn"};var _=r(t({__name:"index",props:{emptyImg:{type:String,default:""},title:{type:String,default:"暂无内容哦~"},desc:{type:String,default:""},emptyClass:{type:String,default:""}},emits:["currentIndex"],setup(t,{emit:r}){const _=!!s().emptyBtn;return(s,r)=>(e(),a("div",{class:n(["com-za-empty",[t.emptyClass||""]])},[p("div",o,[p("img",{src:t.emptyImg||m(y),alt:""},null,8,f)]),p("p",g,c(t.title),1),i(p("p",{class:"empty-desc"},c(t.desc),513),[[d,t.desc]]),i(p("div",u,[l(s.$slots,"emptyBtn",{},void 0,!0)],512),[[d,_]])],2))}}),[["__scopeId","data-v-7c4eef08"]]);export{_};
