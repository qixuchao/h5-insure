import{_ as e,d as a,i as t,h as s,j as o,aG as n,l as r,o as d,c as i,u as l,p as u,q as c,f as p,a as m,b as f,w as v,v as I,aE as y,aQ as h,aj as g,d1 as b,aF as j,bH as P,ar as _,cD as w,cE as x,cF as C}from"./index-2278a2d6.js";import{P as N}from"./PolicyInfo-4b3bd6f9.js";import{u as k}from"./useOrder-6ac48bc3.js";import{p as E}from"./utils-42e85f58.js";import{g as A,m as B}from"./trial-9a4d1309.js";import{n as O}from"./nextStep-f2296c4b.js";import"./utils-3d4e7c9e.js";import"./infoCollection-4919a7c6.js";import"./trial-0a69ca6d.js";import"./core-c0e87ed9.js";const $={class:"bank-info-wrap"},D={class:"footer-button"},G=a({name:"updateBankInfo"});var L=e(a({...G,setup(e){const a=t(),G=s(),{orderNo:L,isShare:T,tenantId:U,nextPageCode:F}=a.query,S=k(),q=o({schema:[],config:[],formData:[]}),V=o(!!T),z=o(),M=o(),R=()=>{G.back()},H=()=>{z.value&&z.value.validate(!1).then((e=>{e&&(S.value.tenantOrderPayInfoList=M,T?(S.value.extInfo.buttonCode=y.UPDATE_BANK_INFO_HOLDER,O(S.value,((e,t)=>{t===h.JUMP_PAGE&&g(e.nextPageCode,a.query)}),a)):(S.value.extInfo.buttonCode=y.UPDATE_BANK_INFO_AGENT,O(S.value,((e,a)=>{a===h.JUMP_PAGE&&((e,a)=>{const{holder:t,insured:s}=S.value;let o={name:t.name,gender:`${w[t.gender]}士`};"insured"===e&&(o={name:null==s?void 0:s[0].name,gender:`${w[null==s?void 0:s[0].gender]}士`}),x({shareType:0,title:`${C[a].title}`,desc:C[a].desc.replace("{name}",`${o.name}${o.gender},`),url:`${window.location.href}&objectType=${e}&isShare=1&nextPageCode=updateBankInfo`.replace("/updateBankInfo","/phoneVerify"),imageUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"})})("holder","pay")}),a)))}))};n((()=>{(async()=>{let e={};b({orderNo:L,tenantId:U}).then((({code:e,data:a})=>{"10000"===e&&(M.value=a.tenantOrderPayInfoList)}));const{code:a,data:t}=await A({orderNo:L,tenantId:U});"10000"===a&&(Object.assign(S.value,t,{extInfo:{...t.extInfo,buttonCode:y.SIGN,pageCode:j.SIGN}}),e=E(t.insuredList[0].productList)),B(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e,{payInfo:s}=P(t);q.value={...q.value,...s}}}))})()}));const J=o();return r((()=>{setTimeout((async()=>{J.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=_;return d(),i("div",$,[l(q).schema.length&&l(M)?(d(),u(N,{key:0,ref_key:"payInfoRef",ref:z,modelValue:l(M),"onUpdate:modelValue":a[0]||(a[0]=e=>c(M)?M.value=e:null),schema:l(q).schema,"is-view":l(V),"user-data":l(S)},null,8,["modelValue","schema","is-view","user-data"])):p("",!0),m("div",D,[f(t,{type:"primary",plain:"",onClick:R},{default:v((()=>[I("取消")])),_:1}),f(t,{type:"primary",onClick:H},{default:v((()=>[I("确认")])),_:1})])])}}}),[["__scopeId","data-v-88f61764"]]);export{L as default};
