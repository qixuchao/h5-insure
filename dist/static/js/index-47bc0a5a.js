import{g as Y,Q as O,a0 as L,L as D,C as V,M as P,m,n as c,j as B,y as d,F as A,T as q,r as k,k as F,E as j,I as _,z as h,s as x,G as J,H as M,a2 as H,a3 as R,B as W}from"./vendor-e9263418.js";import{i as Z,b as z}from"./detailList-ff721244.js";import{T as G,D as Q}from"./Divided-522e7e8e.js";import{S as K}from"./index-b8742a0a.js";import{u as S}from"./useCheckBack-f80d3d5c.js";import{_ as X}from"./plugin-vue_export-helper-46f75680.js";const $=E=>(H("data-v-b48cb800"),E=E(),R(),E),ee={class:"top"},ae=$(()=>d("div",{class:"head-div"},null,-1)),ue={class:"form-area"},te={class:"form-item-title"},le={key:0,class:"form-item"},oe={class:"unit"},se={key:1,class:"form-item"},ne={class:"unit"},de={key:2,class:"form-item"},re={class:"unit"},ie={key:3,class:"form-item"},ce={class:"unit"},ve={key:4,class:"form-item"},me={class:"unit"},Fe={key:5,class:"form-item"},pe={class:"unit"},he={class:"setTarget-footer"},_e={class:"btn-out"},ge=W("\u4FDD\u5B58\u76EE\u6807\u8BBE\u7F6E"),fe=Y({setup(E){const I=O(),U=L(),N=new K({source:"localStorage"}),u=D([]),p=D([]),v=D([]),C=V(""),T=()=>{if(console.log(u,v),u.forEach(t=>{Object.keys(t).forEach(r=>{v.includes(r)||delete t[r]})}),Z(u)){q("\u76EE\u6807\u503C\u9700\u8981\u4E3A\u6B63\u6574\u6570");return}if(z(u)){q("\u76EE\u6807\u503C\u6700\u591A8\u4F4D");return}N.set("targetInfoData",u),S(),U.back()};P(()=>{u.push(...JSON.parse(I.params.info)),v.push(...Object.keys(u[0])),C.value=I.params.name,u.forEach(t=>{p.push(t.goalItem)}),console.log(u),S(u)});const e=V(3e5),a=V(2e4),w=()=>({FYC:{goalItem:"FYC",year:e.value,halfyear:(e.value/2).toFixed(0),quarter:(e.value/4).toFixed(0),month:(e.value/12).toFixed(0),week:(e.value/48).toFixed(0),code:"FYC"},SFYP:{goalItem:"SFYP",year:(e.value/.3).toFixed(0),halfyear:(e.value/.6).toFixed(0),quarter:(e.value/1.2).toFixed(0),month:(e.value/3.6).toFixed(0),week:(e.value/14.4).toFixed(0),code:"SFYP"},\u4EF6\u5747\u4FDD\u8D39:{goalItem:"\u4EF6\u5747\u4FDD\u8D39",year:a.value,halfyear:a.value,quarter:a.value,month:a.value,week:a.value,code:"\u4EF6\u5747\u4FDD\u8D39"},\u5448\u73B0\u4FC3\u6210:{goalItem:"\u5448\u73B0\u4FC3\u6210",year:(e.value/.3/a.value).toFixed(0),halfyear:(e.value/.3/a.value/2).toFixed(0),quarter:(e.value/.3/a.value/4).toFixed(0),month:(e.value/3.6/a.value).toFixed(0),week:(e.value/14.4/a.value).toFixed(0),code:"\u5448\u73B0\u4FC3\u6210"},\u9700\u6C42\u5206\u6790:{goalItem:"\u9700\u6C42\u5206\u6790",year:(e.value/.3/a.value*3).toFixed(0),halfyear:(e.value/.3/a.value/2*3).toFixed(0),quarter:(e.value/.3/a.value/4*3).toFixed(0),month:(e.value/3.6/a.value*3).toFixed(0),week:(e.value/14.4/a.value*3).toFixed(0),code:"\u9700\u6C42\u5206\u6790"},\u63A5\u89E6\u9762\u8C08:{goalItem:"\u63A5\u89E6\u9762\u8C08",year:(e.value/.3/a.value*5).toFixed(0),halfyear:(e.value/.3/a.value/2*5).toFixed(0),quarter:(e.value/.3/a.value/4*5).toFixed(0),month:(e.value/3.6/a.value*5).toFixed(0),week:(e.value/14.4/a.value*5).toFixed(0),code:"\u63A5\u89E6\u9762\u8C08"},\u7535\u8BDD\u9080\u7EA6:{goalItem:"\u7535\u8BDD\u9080\u7EA6",year:(e.value/.3/a.value*7).toFixed(0),halfyear:(e.value/.3/a.value/2*7).toFixed(0),quarter:(e.value/.3/a.value/4*7).toFixed(0),month:(e.value/3.6/a.value*7).toFixed(0),week:(e.value/14.4/a.value*7).toFixed(0),code:"\u7535\u8BDD\u9080\u7EA6"},\u5BA2\u6237\u83B7\u53D6:{goalItem:"\u5BA2\u6237\u83B7\u53D6",year:(e.value/.3/a.value*10).toFixed(0),halfyear:(e.value/.3/a.value/2*10).toFixed(0),quarter:(e.value/.3/a.value/4*10).toFixed(0),month:(e.value/3.6/a.value*10).toFixed(0),week:(e.value/14.4/a.value*10).toFixed(0),code:"\u5BA2\u6237\u83B7\u53D6"}}),g=(t,r,n)=>{if(r==="FYC"&&n==="year")e.value=t,p.forEach((l,y)=>{u[y]=w()[l]});else if(r==="\u4EF6\u5747\u4FDD\u8D39")a.value=t,p.forEach((l,y)=>{u[y]=w()[l]});else if(n==="month"){const l=p.indexOf(r);u[l].month=t,u[l].week=(t/4).toFixed(0)}else if(n==="year"){const l=p.indexOf(r);u[l].year=t,u[l].halfyear=(t/2).toFixed(0),u[l].quarter=(t/4).toFixed(0),u[l].month=(t/12).toFixed(0),u[l].week=(t/48).toFixed(0)}else if(n==="halfyear"){const l=p.indexOf(r);u[l].halfyear=t,u[l].quarter=(t/2).toFixed(0),u[l].month=(t/6).toFixed(0),u[l].week=(t/24).toFixed(0)}else if(n==="quarter"){const l=p.indexOf(r);u[l].quarter=t,u[l].month=(t/3).toFixed(0),u[l].week=(t/12).toFixed(0)}else if(n==="week"){const l=p.indexOf(r);u[l].week=t}},f=t=>["FYC","SFYP","\u4EF6\u5747\u4FDD\u8D39"].includes(t)?"\u5143":["\u5448\u73B0\u4FC3\u6210","\u5BA2\u6237\u83B7\u53D6"].includes(t)?"\u4E2A":"\u6B21";return(t,r)=>{const n=k("van-field"),l=k("ZaPageWrap"),y=k("van-button");return F(),m(A,null,[c(l,{"main-class":"page-setTarget"},{default:B(()=>[d("div",ee,[c(G,{title:C.value},{head:B(()=>[ae]),_:1},8,["title"])]),d("div",ue,[(F(!0),m(A,null,j(h(u),(o,b)=>(F(),m("div",{key:b,class:"form-item-out"},[d("div",te,_(o.goalItem),1),h(v).includes("year")?(F(),m("div",le,[c(n,{modelValue:o.year,"onUpdate:modelValue":[s=>o.year=s,s=>{const i=s.replace(/\D/g,"").replace(/^0{1,}/g,"");g(i,o.goalItem,"year")}],label:"\u5E74\u76EE\u6807",type:"digit",class:"van-cell","input-align":"right",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"]),d("div",oe,_(f(o.goalItem)),1)])):x("",!0),h(v).includes("halfyear")?(F(),m("div",se,[c(n,{modelValue:o.halfyear,"onUpdate:modelValue":[s=>o.halfyear=s,s=>{const i=s.replace(/\D/g,"").replace(/^0{1,}/g,"");g(i,o.goalItem,"halfyear")}],label:"\u534A\u5E74\u76EE\u6807",type:"digit",class:"van-cell","input-align":"right",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"]),d("div",ne,_(f(o.goalItem)),1)])):x("",!0),h(v).includes("quarter")?(F(),m("div",de,[c(n,{modelValue:o.quarter,"onUpdate:modelValue":[s=>o.quarter=s,s=>{const i=s.replace(/\D/g,"").replace(/^0{1,}/g,"");g(i,o.goalItem,"quarter")}],label:"\u5B63\u76EE\u6807",type:"digit",class:"van-cell","input-align":"right",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"]),d("div",re,_(f(o.goalItem)),1)])):x("",!0),h(v).includes("month")?(F(),m("div",ie,[c(n,{modelValue:o.month,"onUpdate:modelValue":[s=>o.month=s,s=>{const i=s.replace(/\D/g,"").replace(/^0{1,}/g,"");g(i,o.goalItem,"month")}],label:"\u6708\u76EE\u6807",class:"van-cell",type:"digit","input-align":"right",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"]),d("div",ce,_(f(o.goalItem)),1)])):x("",!0),h(v).includes("week")?(F(),m("div",ve,[c(n,{modelValue:o.week,"onUpdate:modelValue":[s=>o.week=s,s=>{const i=s.replace(/\D/g,"").replace(/^0{1,}/g,"");g(i,o.goalItem,"week")}],label:"\u5468\u76EE\u6807",type:"digit",class:"van-cell","input-align":"right",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"]),d("div",me,_(f(o.goalItem)),1)])):x("",!0),h(v).includes("day")?(F(),m("div",Fe,[c(n,{modelValue:o.day,"onUpdate:modelValue":[s=>o.day=s,s=>{const i=s.replace(/\D/g,"").replace(/^0{1,}/g,"");g(i,o.goalItem,"day")}],label:"\u65E5\u76EE\u6807",class:"van-cell",type:"digit","input-align":"right",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"]),d("div",pe,_(f(o.goalItem)),1)])):x("",!0),J(c(Q,null,null,512),[[M,h(u).length!==b+1]])]))),128))])]),_:1}),d("div",he,[d("div",_e,[c(y,{round:"",type:"primary",class:"btn",onClick:T},{default:B(()=>[ge]),_:1})])])],64)}}});var ke=X(fe,[["__scopeId","data-v-b48cb800"]]);export{ke as default};
