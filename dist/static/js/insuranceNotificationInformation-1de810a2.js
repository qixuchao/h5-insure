import{d as a,j as e,E as t,o as n,c as o,a as s,e as i,b as l,w as u,F as c,s as d,p as r,c7 as m,f,u as p,aY as v,q as _,_ as j}from"./index-3fa67d62.js";import{C as y}from"./index-c656bc43.js";import{a as E}from"./notice-0dfe9c5e.js";import{C as S}from"./index-a83424e0.js";import{c as V}from"./cloneDeep-c9a60d9f.js";const b={class:"insurance-notification-information"},T={class:"insurance-notification-information-title"},Y={class:"insurance-notification-information-collapse"},x={class:"insurance-notification-information-content"};var C=j(a({__name:"insuranceNotificationInformation",props:{title:{default:""},data:{default:()=>[]},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:j}){const C=a;console.log("NOTICE_OBJECT_MAP",E);const I=e([]),g=e([]);return t((()=>I.value),(a=>{a.forEach((a=>{g.value[a].readStatus!==v.YES&&(g.value[a].readStatus=v.YES)}));g.value.filter((a=>a.readStatus===v.YES)).length===g.value.length&&j("update:modelValue",!0)}),{deep:!0}),t((()=>C.data),(()=>{g.value=V(C.data)}),{immediate:!0,deep:!0}),(a,e)=>{const t=y,j=S;return n(),o("div",b,[s("div",T,i(a.title),1),s("div",Y,[l(j,{modelValue:p(I),"onUpdate:modelValue":e[0]||(e[0]=a=>_(I)?I.value=a:null)},{default:u((()=>[(n(!0),o(c,null,d(p(g),((a,e)=>(n(),r(t,{key:e,title:`${a.questionnaireName}${p(E)[a.objectType]?`( ${p(E)[a.objectType]})`:""}`,value:a.readStatus===p(v).YES?"已读":"未读",name:e},{default:u((()=>[s("div",x,[a?(n(),r(m,{key:0,type:a.contentType,"is-view":"",content:a,params:{}},null,8,["type","content"])):f("",!0)])])),_:2},1032,["title","value","name"])))),128))])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-924660bc"]]);export{C as I};
