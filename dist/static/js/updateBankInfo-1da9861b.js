import{_ as e,d as a,i as t,h as s,j as o,aG as n,l as r,o as d,c as i,u as l,p as u,q as c,f,a as p,b as m,w as v,v as I,aE as y,aQ as h,aj as g,d2 as b,aF as j,bH as P,ar as _,cE as w,cF as x,cG as C}from"./index-fc8ebf20.js";import{P as N}from"./PolicyInfo-846eb6b3.js";import{u as k}from"./useOrder-b97d4222.js";import{p as E}from"./utils-24c503a0.js";import{g as A,m as B}from"./trial-5f815b7d.js";import{n as G}from"./nextStep-356e59f6.js";import"./utils-fbc216ca.js";import"./infoCollection-94f7a833.js";import"./trial-0c0f7758.js";import"./core-dc6ab9f9.js";const L={class:"bank-info-wrap"},O={class:"footer-button"},$=a({name:"updateBankInfo"});var T=e(a({...$,setup(e){const a=t(),$=s(),{orderNo:T,isShare:U,tenantId:D,nextPageCode:F}=a.query,S=k(),q=o({schema:[],config:[],formData:[]}),V=o(!!U),z=o(),M=o(),R=()=>{$.back()},H=()=>{z.value&&z.value.validate(!1).then((e=>{e&&(S.value.tenantOrderPayInfoList=M,U?(S.value.extInfo.buttonCode=y.UPDATE_BANK_INFO_HOLDER,G(S.value,((e,t)=>{t===h.JUMP_PAGE&&g(e.nextPageCode,a.query)}),a)):(S.value.extInfo.buttonCode=y.UPDATE_BANK_INFO_AGENT,G(S.value,((e,a)=>{a===h.JUMP_PAGE&&((e,a)=>{const{holder:t,insuredList:s}=S.value;let o={name:t.name,gender:`${w[t.gender]}士`};"insured"===e&&(o={name:null==s?void 0:s[0].name,gender:`${w[null==s?void 0:s[0].gender]}士`}),x({shareType:0,title:`${C[a].title}`,desc:C[a].desc.replace("{name}",`${o.name}${o.gender},`),url:`${window.location.href}&objectType=${e}&isShare=1&nextPageCode=updateBankInfo`.replace("/updateBankInfo","/phoneVerify"),imageUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"})})("holder","pay")}),a)))}))};n((()=>{(async()=>{let e={};b({orderNo:T,tenantId:D}).then((({code:e,data:a})=>{"10000"===e&&(M.value=a.tenantOrderPayInfoList)}));const{code:a,data:t}=await A({orderNo:T,tenantId:D});"10000"===a&&(Object.assign(S.value,t,{extInfo:{...t.extInfo,buttonCode:y.SIGN,pageCode:j.SIGN}}),e=E(t.insuredList[0].productList)),B(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e,{payInfo:s}=P(t);q.value={...q.value,...s}}}))})()}));const J=o();return r((()=>{setTimeout((async()=>{J.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=_;return d(),i("div",L,[l(q).schema.length&&l(M)?(d(),u(N,{key:0,ref_key:"payInfoRef",ref:z,modelValue:l(M),"onUpdate:modelValue":a[0]||(a[0]=e=>c(M)?M.value=e:null),schema:l(q).schema,"is-view":l(V),"user-data":l(S)},null,8,["modelValue","schema","is-view","user-data"])):f("",!0),p("div",O,[m(t,{type:"primary",plain:"",onClick:R},{default:v((()=>[I("取消")])),_:1}),m(t,{type:"primary",onClick:H},{default:v((()=>[I("确认")])),_:1})])])}}}),[["__scopeId","data-v-796e2ef0"]]);export{T as default};
