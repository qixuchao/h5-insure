import{_ as a,d as e,h as s,g as t,i as o,av as r,o as n,c as i,u as c,l as d,q as f,a as l,b as m,w as u,a8 as p,aC as v,a9 as I,bk as b,ag as j}from"./index-404eec03.js";import{_ as y}from"./PolicyInfo-a070148c.js";import{u as h}from"./useOrder-2c41679e.js";import{p as g}from"./utils-a1833ec1.js";import{g as k,m as _}from"./trial-37239397.js";import{n as C}from"./nextStep-4be7c141.js";import{B as x,a as P}from"./constants-fe95ef6f.js";import"./utils-0bfccf41.js";import"./infoCollection-8d0c5911.js";import"./trial-6f236b5b.js";import"./core-9d9a23d5.js";const w={class:"bank-info-wrap"},L={class:"footer-button"},N=e({name:"updateBankInfo"});var O=a(e({...N,setup(a){const e=s(),N=t(),{orderNo:O,isShare:S,tenantId:q}=e.query,G=h(),V=o({schema:[],config:[],formData:[]}),B=o(!!S),D=o(),R=()=>{N.back()},U=()=>{D.value&&D.value.validate(!1).then((a=>{a&&C(G.value,((a,s)=>{s===v.JUMP_PAGE&&I(a.nextPageCode,e.query)}),e)}))};return r((()=>{(async()=>{let a={};const{code:e,data:s}=await k({orderNo:O,tenantId:q});"10000"===e&&(Object.assign(G.value,s,{extInfo:{...s.extInfo,buttonCode:x.SIGN,pageCode:P.SIGN}}),a=g(s.insuredList[0].productList)),_(a).then((({data:a,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:s}=a,{payInfo:t}=b(s);V.value={...V.value,...t}}}))})()})),(a,e)=>{const s=j;return n(),i("div",w,[c(V).schema.length?(n(),d(y,{key:0,ref_key:"payInfoRef",ref:D,modelValue:c(G).tenantOrderPayInfoList,"onUpdate:modelValue":e[0]||(e[0]=a=>c(G).tenantOrderPayInfoList=a),schema:c(V).schema,"is-view":c(B)},null,8,["modelValue","schema","is-view"])):f("",!0),l("div",L,[m(s,{onClick:R},{default:u((()=>[p("取消")])),_:1}),m(s,{type:"primary",onClick:U},{default:u((()=>[p("确认")])),_:1})])])}}}),[["__scopeId","data-v-6c66b7c0"]]);export{O as default};
