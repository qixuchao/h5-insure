import{_ as a,d as e,h as s,g as t,i as o,av as r,o as n,c as f,u as i,l as d,q as c,a as l,b as u,w as m,a8 as p,aC as v,a9 as I,bk as y,an as h}from"./index-f919c47f.js";import{_ as b}from"./PolicyInfo-a974ff18.js";import{u as j}from"./useOrder-220ede06.js";import{a as k}from"./utils-394f97a4.js";import{g as _,m as g}from"./trial-b8186cae.js";import{n as x}from"./nextStep-e377dfe1.js";import{B as C,a as P}from"./constants-fe95ef6f.js";import"./core-3a48e1af.js";const w={class:"bank-info-wrap"},L={class:"footer-button"},N=e({name:"updateBankInfo"});var O=a(e({...N,setup(a){const e=s(),N=t(),{orderNo:O,isShare:S,tenantId:q}=e.query,G=j(),V=o({schema:[],config:[],formData:[]}),B=o(!!S),D=o(),R=()=>{N.back()},U=()=>{D.value&&D.value.validate(!1).then((a=>{a&&x(G.value,((a,s)=>{s===v.JUMP_PAGE&&I(a.nextPageCode,e.query)}),e)}))};return r((()=>{(async()=>{let a={};const{code:e,data:s}=await _({orderNo:O,tenantId:q});"10000"===e&&(Object.assign(G.value,s,{extInfo:{...s.extInfo,buttonCode:C.SIGN,pageCode:P.SIGN}}),a=k(s.insuredList[0].productList)),g(a).then((({data:a,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:s}=a,{payInfo:t}=y(s);V.value={...V.value,...t}}}))})()})),(a,e)=>{const s=h;return n(),f("div",w,[i(V).schema.length?(n(),d(b,{key:0,ref_key:"payInfoRef",ref:D,modelValue:i(G).tenantOrderPayInfoList,"onUpdate:modelValue":e[0]||(e[0]=a=>i(G).tenantOrderPayInfoList=a),schema:i(V).schema,"is-view":i(B)},null,8,["modelValue","schema","is-view"])):c("",!0),l("div",L,[u(s,{onClick:R},{default:m((()=>[p("取消")])),_:1}),u(s,{type:"primary",onClick:U},{default:m((()=>[p("确认")])),_:1})])])}}}),[["__scopeId","data-v-6c66b7c0"]]);export{O as default};
