import{_ as a,d as e,i as s,h as t,j as o,aE as r,o as n,c as i,u as c,m as f,f as d,a as l,b as m,w as u,a8 as p,aL as j,a9 as I,bq as b,ag as v}from"./index-af60c142.js";import{_ as y}from"./PayInfo-c604fec1.js";import{u as h}from"./useOrder-56bde4ef.js";import{p as _}from"./utils-c5d88c18.js";import{g,m as k}from"./trial-c13aadb5.js";import{n as P}from"./nextStep-41821001.js";import{B as x,a as C}from"./constants-fe95ef6f.js";import"./PolicyInfo-a249a197.js";import"./utils-a7ff0ea9.js";import"./infoCollection-6d2fb8cf.js";import"./trial-6bec506c.js";import"./core-82b31644.js";const L={class:"bank-info-wrap"},w={class:"footer-button"},N=e({name:"updateBankInfo"});var O=a(e({...N,setup(a){const e=s(),N=t(),{orderNo:O,isShare:S,tenantId:q}=e.query,G=h(),V=o({schema:[],config:[],formData:[]}),B=o(!!S),D=o(),E=()=>{N.back()},R=()=>{D.value&&D.value.validate(!1).then((a=>{a&&P(G.value,((a,s)=>{s===j.JUMP_PAGE&&I(a.nextPageCode,e.query)}),e)}))};return r((()=>{(async()=>{let a={};const{code:e,data:s}=await g({orderNo:O,tenantId:q});"10000"===e&&(Object.assign(G.value,s,{extInfo:{...s.extInfo,buttonCode:x.SIGN,pageCode:C.SIGN}}),a=_(s.insuredList[0].productList)),k(a).then((({data:a,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:s}=a,{payInfo:t}=b(s);V.value={...V.value,...t}}}))})()})),(a,e)=>{const s=v;return n(),i("div",L,[c(V).schema.length?(n(),f(y,{key:0,ref_key:"payInfoRef",ref:D,modelValue:c(G).tenantOrderPayInfoList,"onUpdate:modelValue":e[0]||(e[0]=a=>c(G).tenantOrderPayInfoList=a),schema:c(V).schema,"is-view":c(B)},null,8,["modelValue","schema","is-view"])):d("",!0),l("div",w,[m(s,{onClick:E},{default:u((()=>[p("取消")])),_:1}),m(s,{type:"primary",onClick:R},{default:u((()=>[p("确认")])),_:1})])])}}}),[["__scopeId","data-v-6c66b7c0"]]);export{O as default};
