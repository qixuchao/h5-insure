import{d as e,U as t,dB as n,o,c as a,n as s,e as l,f as c,u as i,g as d,a as p,cH as r,b as m,_ as u,ae as y,T as f}from"./index-60c1582d.js";const b={class:"content"},v=["onClick"];var k=u(e({__name:"infoItem",props:{label:{type:String,default:""},content:{type:String,default:""},line:{type:Boolean,default:!1},isCopy:{type:Boolean,default:!1},minWidth:{type:String,default:""}},setup(e){const u=e,k=t(),{copy:C,copied:g,isSupported:_}=n(),h=()=>{if(navigator.clipboard)C(u.content);else{const e=document.createElement("input");e.setAttribute("value",u.content),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}f("复制成功")};return(t,n)=>{const u=y;return o(),a("div",{class:s(["com-field-info",e.line?"com-field-info-line":""])},[e.label?(o(),a("div",{key:0,class:s(["label",e.minWidth])},l(e.label),3)):c("",!0),i(k).label?d(t.$slots,"label",{key:1},void 0,!0):c("",!0),p("div",b,l(e.content),1),i(k).content?d(t.$slots,"content",{key:2},void 0,!0):c("",!0),e.isCopy&&e.content?(o(),a("div",{key:3,class:"link",onClick:r(h,["stop"])},[m(u,{name:"copy",class:"icon"})],8,v)):c("",!0)],2)}}}),[["__scopeId","data-v-08db9ac6"]]);export{k as I};
