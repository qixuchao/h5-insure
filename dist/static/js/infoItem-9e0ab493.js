import{d as e,U as t,dv as n,o,c as s,n as a,e as l,f as i,u as c,g as d,a as p,cA as r,b as y,_ as f,ae as u,T as b}from"./index-1944b73e.js";const m={class:"content"},v=["onClick"];var k=f(e({__name:"infoItem",props:{label:{type:String,default:""},content:{type:String,default:""},line:{type:Boolean,default:!1},isCopy:{type:Boolean,default:!1},minWidth:{type:String,default:""}},setup(e){const f=e,k=t(),{copy:g,copied:_,isSupported:C}=n(),S=()=>{console.log(f.content,"props.content====="),g(f.content),b("复制成功")};return(t,n)=>{const f=u;return o(),s("div",{class:a(["com-field-info",e.line?"com-field-info-line":""])},[e.label?(o(),s("div",{key:0,class:a(["label",e.minWidth])},l(e.label),3)):i("",!0),c(k).label?d(t.$slots,"label",{key:1},void 0,!0):i("",!0),p("div",m,l(e.content),1),c(k).content?d(t.$slots,"content",{key:2},void 0,!0):i("",!0),e.isCopy&&e.content?(o(),s("div",{key:3,class:"link",onClick:r(S,["stop"])},[y(f,{name:"copy",class:"icon"})],8,v)):i("",!0)],2)}}}),[["__scopeId","data-v-0b866896"]]);export{k as I};
