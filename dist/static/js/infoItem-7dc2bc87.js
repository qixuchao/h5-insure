import{d as e,U as t,dz as n,o,c as s,n as a,e as l,f as i,u as c,g as d,a as p,cF as r,b as f,_ as y,ae as u,T as m}from"./index-fe52439c.js";const b={class:"content"},v=["onClick"];var k=y(e({__name:"infoItem",props:{label:{type:String,default:""},content:{type:String,default:""},line:{type:Boolean,default:!1},isCopy:{type:Boolean,default:!1},minWidth:{type:String,default:""}},setup(e){const y=e,k=t(),{copy:g,copied:_,isSupported:C}=n(),S=()=>{console.log(y.content,"props.content====="),g(y.content),m("复制成功")};return(t,n)=>{const y=u;return o(),s("div",{class:a(["com-field-info",e.line?"com-field-info-line":""])},[e.label?(o(),s("div",{key:0,class:a(["label",e.minWidth])},l(e.label),3)):i("",!0),c(k).label?d(t.$slots,"label",{key:1},void 0,!0):i("",!0),p("div",b,l(e.content),1),c(k).content?d(t.$slots,"content",{key:2},void 0,!0):i("",!0),e.isCopy&&e.content?(o(),s("div",{key:3,class:"link",onClick:r(S,["stop"])},[f(y,{name:"copy",class:"icon"})],8,v)):i("",!0)],2)}}}),[["__scopeId","data-v-0b866896"]]);export{k as I};
