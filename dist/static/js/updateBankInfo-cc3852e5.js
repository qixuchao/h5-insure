import{_ as a,d as e,i as s,h as t,j as o,aE as n,o as r,c as d,u as i,m as c,f as l,a as u,b as p,w as f,a8 as m,aL as h,a9 as y,bs as v,ag as g,ck as b,cl as I,cm as j,bV as k}from"./index-e11600e6.js";import{_ as C}from"./PolicyInfo-ccb8cd97.js";import{u as P}from"./useOrder-fab59a9b.js";import{p as x}from"./utils-3b0f6fec.js";import{s as $,g as _,m as w}from"./trial-3a916284.js";import{n as L}from"./nextStep-8058bfd6.js";import{B as S,a as V}from"./constants-62d1c4af.js";import"./utils-2e89dca3.js";import"./infoCollection-35c63756.js";import"./trial-3fff3e7b.js";import"./core-334f9115.js";const B={class:"bank-info-wrap"},N={class:"footer-button"},O=e({name:"updateBankInfo"});var U=a(e({...O,setup(a){const e=s(),O=t(),{orderNo:U,isShare:q,tenantId:G,nextPageCode:D}=e.query,E=P(),M=o({schema:[],config:[],formData:[]}),R=o(!!q),T=o(),z=()=>{O.back()},A=()=>{T.value&&T.value.validate(!1).then((a=>{a&&(q?L(E.value,((a,s)=>{s===h.JUMP_PAGE&&y(a.nextPageCode,e.query)}),e):$(E.value).then((({code:a,data:e})=>{"10000"===a&&((a,e)=>{const{holder:s,insured:t}=E.value;let o={name:s.name,gender:`${b[s.gender]}士`};"insured"===a&&(o={name:null==t?void 0:t[0].name,gender:`${b[null==t?void 0:t[0].gender]}士`}),I({shareType:0,title:`${j[e].title}（${k[a.toLocaleUpperCase()]}）`,desc:j[e].desc.replace("{name}",`${o.name}${o.gender},`),url:`${window.location.href}&objectType=${a}&isShare=1&nextPageCode=updateBankInfo`.replace("/updateBankInfo","/phoneVerify"),imageUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"})})("holder","pay")})))}))};return n((()=>{(async()=>{let a={};const{code:e,data:s}=await _({orderNo:U,tenantId:G});"10000"===e&&(Object.assign(E.value,s,{extInfo:{...s.extInfo,buttonCode:S.SIGN,pageCode:V.SIGN}}),a=x(s.insuredList[0].productList)),w(a).then((({data:a,code:e})=>{if("10000"===e){const{productDetailResList:e,productFactor:s}=a,{payInfo:t}=v(s);M.value={...M.value,...t}}}))})()})),(a,e)=>{const s=g;return r(),d("div",B,[i(M).schema.length?(r(),c(C,{key:0,ref_key:"payInfoRef",ref:T,modelValue:i(E).tenantOrderPayInfoList,"onUpdate:modelValue":e[0]||(e[0]=a=>i(E).tenantOrderPayInfoList=a),schema:i(M).schema,"is-view":i(R)},null,8,["modelValue","schema","is-view"])):l("",!0),u("div",N,[p(s,{type:"primary",plain:"",onClick:z},{default:f((()=>[m("取消")])),_:1}),p(s,{type:"primary",onClick:A},{default:f((()=>[m("确认")])),_:1})])])}}}),[["__scopeId","data-v-31721e96"]]);export{U as default};
