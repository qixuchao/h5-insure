import{d as t,ar as s,b as e,c as a,i as p,f as m,$ as c,b5 as d,bd as i,af as l,a0 as r,ah as n}from"./index-6b6c39bc.js";import{_ as y}from"./empty-ae586b6c.js";const o={class:"empty-img"},b=["src"],f={class:"empty-title"},g={class:"empty-btn"};var u=n(t({__name:"index",props:{emptyImg:{type:String,default:""},title:{type:String,default:"暂无内容哦~"},desc:{type:String,default:""},emptyClass:{type:String,default:""}},emits:["currentIndex"],setup(t,{emit:n}){const u=!!s().emptyBtn;return(s,n)=>(e(),a("div",{class:r(["com-za-empty",[t.emptyClass||""]])},[p("div",o,[p("img",{src:t.emptyImg||m(y),alt:""},null,8,b)]),p("p",f,c(t.title),1),d(p("p",{class:"empty-desc"},c(t.desc),513),[[i,t.desc]]),d(p("div",g,[l(s.$slots,"emptyBtn",{},void 0,!0)],512),[[i,u]])],2))}}),[["__scopeId","data-v-4b537dc2"]]);export{u as P};
