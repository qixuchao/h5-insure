import{_ as e,d as a,j as t,i as s,h as o,bc as n,l as r,o as i,c as d,u as l,p as c,q as u,f,a as p,b as m,w as v,v as y,ba as b,bk as I,a_ as g,d4 as h,aY as j,bb as P,bO as _,b3 as w,cE as N,cH as k,cG as x}from"./index-1c874ef7.js";import{P as C}from"./PolicyInfo-ab74589f.js";import{u as O}from"./useOrder-b13d5045.js";import{p as $}from"./utils-f129b47b.js";import{g as E,m as L}from"./trial-2f558ade.js";import{n as T}from"./nextStep-6c66ff22.js";import"./cloneDeep-f47c57ad.js";import"./utils-b0b003ae.js";import"./createProposal-09a3bc2c.js";import"./trial-47e443eb.js";import"./utils-1d6ff6c5.js";import"./infoCollection-192efa03.js";import"./core-70c33b68.js";const A={class:"bank-info-wrap"},B={class:"footer-button"},D=a({name:"updateBankInfo"});var G=e(a({...D,setup(e){const a=t(!1),D=s(),G=o(),{orderNo:U,isShare:S,tenantId:V,nextPageCode:q}=D.query,z=O(),F=t({schema:[],config:[],formData:[]}),M=t(!!S),R=t(),H=t(),J=()=>{G.back()},K=()=>{R.value&&R.value.validate(!1).then((e=>{e&&(a.value=!0,z.value.tenantOrderPayInfoList=H,S?(z.value.extInfo.buttonCode=b.UPDATE_BANK_INFO_HOLDER,T(z.value,((e,a)=>{a===I.JUMP_PAGE&&g(e.nextPageCode,D.query)}),D).finally((()=>{a.value=!1}))):(z.value.extInfo.buttonCode=b.UPDATE_BANK_INFO_AGENT,T(z.value,((e,a)=>{a===I.JUMP_PAGE&&((e,a)=>{const{holder:t,insuredList:s}=z.value;let o={name:t.name,gender:`${N[t.gender]}士`};"insured"===e&&(o={name:null==s?void 0:s[0].name,gender:`${N[null==s?void 0:s[0].gender]}士`}),k({shareType:0,title:`${x[a].title}`,desc:x[a].desc.replace("{name}",`${o.name}${o.gender}`),url:`${window.location.href}&objectType=${e}&isShare=1&nextPageCode=updateBankInfo`.replace("/updateBankInfo","/phoneVerify"),imageUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"})})("holder","pay")}),D).finally((()=>{a.value=!1}))))}))};n((()=>{(async()=>{let e={};h({orderNo:U,tenantId:V}).then((({code:e,data:a})=>{if("10000"===e){H.value=a.tenantOrderPayInfoList;const e=[];a.tenantOrderPayInfoList.forEach(((a,t)=>{`${a.paymentType}`==`${j.NO}`&&(e[t]={paymentType:{isView:!0}})})),F.value.config=e}}));const{code:a,data:t}=await E({orderNo:U,tenantId:V});"10000"===a&&(Object.assign(z.value,t,{extInfo:{...t.extInfo,buttonCode:b.SIGN,pageCode:P.SIGN}}),e=$(t.insuredList[0].productList)),L(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e,{payInfo:s}=_(t);F.value={...F.value,...s}}}))})()}));const Y=t();return r((()=>{setTimeout((async()=>{Y.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const s=w;return i(),d("div",A,[l(F).schema.length&&l(H)?(i(),c(C,{key:0,ref_key:"payInfoRef",ref:R,modelValue:l(H),"onUpdate:modelValue":t[0]||(t[0]=e=>u(H)?H.value=e:null),schema:l(F).schema,config:l(F).config,"is-view":l(M),"user-data":l(z)},null,8,["modelValue","schema","config","is-view","user-data"])):f("",!0),p("div",B,[m(s,{type:"primary",plain:"",onClick:J},{default:v((()=>[y("取消")])),_:1}),m(s,{disabled:l(a),type:"primary",onClick:K},{default:v((()=>[y("确认")])),_:1},8,["disabled"])])])}}}),[["__scopeId","data-v-77f9c8c0"]]);export{G as default};
