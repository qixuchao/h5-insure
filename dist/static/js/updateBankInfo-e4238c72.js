import{_ as e,d as a,j as t,i as s,h as o,bc as n,l as r,o as i,c as d,u as l,p as c,q as u,f,a as p,b as m,w as v,v as y,ba as b,bk as I,a_ as g,d3 as h,aY as j,bb as P,bO as _,b3 as w,cD as N,cE as k,cG as x}from"./index-4d5fa34d.js";import{P as C}from"./PolicyInfo-6b9907fb.js";import{u as O}from"./useOrder-a6e85070.js";import{p as $}from"./utils-f5504a35.js";import{g as E,m as L}from"./trial-7f683ad0.js";import{n as T}from"./nextStep-a03c6ded.js";import"./cloneDeep-9c9c9929.js";import"./utils-4f369f99.js";import"./createProposal-6ed222b2.js";import"./trial-ed50f9b6.js";import"./utils-40b0d14f.js";import"./infoCollection-5f2115ca.js";import"./core-7b92637e.js";const A={class:"bank-info-wrap"},B={class:"footer-button"},D=a({name:"updateBankInfo"});var G=e(a({...D,setup(e){const a=t(!1),D=s(),G=o(),{orderNo:U,isShare:S,tenantId:V,nextPageCode:q}=D.query,z=O(),F=t({schema:[],config:[],formData:[]}),M=t(!!S),R=t(),J=t(),K=()=>{G.back()},H=()=>{R.value&&R.value.validate(!1).then((e=>{e&&(a.value=!0,z.value.tenantOrderPayInfoList=J,S?(z.value.extInfo.buttonCode=b.UPDATE_BANK_INFO_HOLDER,T(z.value,((e,t)=>{a.value=!1,t===I.JUMP_PAGE&&g(e.nextPageCode,D.query)}),D)):(z.value.extInfo.buttonCode=b.UPDATE_BANK_INFO_AGENT,T(z.value,((e,t)=>{a.value=!1,t===I.JUMP_PAGE&&((e,a)=>{const{holder:t,insuredList:s}=z.value;let o={name:t.name,gender:`${N[t.gender]}士`};"insured"===e&&(o={name:null==s?void 0:s[0].name,gender:`${N[null==s?void 0:s[0].gender]}士`}),k({shareType:0,title:`${x[a].title}`,desc:x[a].desc.replace("{name}",`${o.name}${o.gender}`),url:`${window.location.href}&objectType=${e}&isShare=1&nextPageCode=updateBankInfo`.replace("/updateBankInfo","/phoneVerify"),imageUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"})})("holder","pay")}),D)))}))};n((()=>{(async()=>{let e={};h({orderNo:U,tenantId:V}).then((({code:e,data:a})=>{if("10000"===e){J.value=a.tenantOrderPayInfoList;const e=[];a.tenantOrderPayInfoList.forEach(((a,t)=>{`${a.paymentType}`==`${j.NO}`&&(e[t]={paymentType:{isView:!0}})})),F.value.config=e}}));const{code:a,data:t}=await E({orderNo:U,tenantId:V});"10000"===a&&(Object.assign(z.value,t,{extInfo:{...t.extInfo,buttonCode:b.SIGN,pageCode:P.SIGN}}),e=$(t.insuredList[0].productList)),L(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e,{payInfo:s}=_(t);F.value={...F.value,...s}}}))})()}));const Y=t();return r((()=>{setTimeout((async()=>{Y.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const s=w;return i(),d("div",A,[l(F).schema.length&&l(J)?(i(),c(C,{key:0,ref_key:"payInfoRef",ref:R,modelValue:l(J),"onUpdate:modelValue":t[0]||(t[0]=e=>u(J)?J.value=e:null),schema:l(F).schema,config:l(F).config,"is-view":l(M),"user-data":l(z)},null,8,["modelValue","schema","config","is-view","user-data"])):f("",!0),p("div",B,[m(s,{type:"primary",plain:"",onClick:K},{default:v((()=>[y("取消")])),_:1}),m(s,{disabled:l(a),type:"primary",onClick:H},{default:v((()=>[y("确认")])),_:1},8,["disabled"])])])}}}),[["__scopeId","data-v-bce8317c"]]);export{G as default};
