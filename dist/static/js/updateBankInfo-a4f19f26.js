import{_ as e,d as a,i as t,h as s,j as o,aQ as n,l as r,o as d,c as i,u as l,p as u,q as c,f,a as p,b as m,w as v,v as I,aO as y,aY as h,aB as g,d1 as P,aP as j,bO as b,aH as _,cD as w,cE as x,cF as C}from"./index-8952fea8.js";import{P as N}from"./PolicyInfo-ca68867b.js";import{u as k}from"./useOrder-c8523700.js";import{p as O}from"./utils-76a0cf56.js";import{g as B,m as A}from"./trial-1573164b.js";import{n as E}from"./nextStep-f90438ef.js";import"./utils-df9088a4.js";import"./createProposal-84e60cf3.js";import"./trial-5ea41d85.js";import"./utils-b7fbe65d.js";import"./infoCollection-e4ac9fd1.js";import"./core-8fa31c92.js";const L={class:"bank-info-wrap"},$={class:"footer-button"},D=a({name:"updateBankInfo"});var T=e(a({...D,setup(e){const a=t(),D=s(),{orderNo:T,isShare:U,tenantId:G,nextPageCode:S}=a.query,q=k(),F=o({schema:[],config:[],formData:[]}),V=o(!!U),z=o(),M=o(),R=()=>{D.back()},H=()=>{z.value&&z.value.validate(!1).then((e=>{e&&(q.value.tenantOrderPayInfoList=M,U?(q.value.extInfo.buttonCode=y.UPDATE_BANK_INFO_HOLDER,E(q.value,((e,t)=>{t===h.JUMP_PAGE&&g(e.nextPageCode,a.query)}),a)):(q.value.extInfo.buttonCode=y.UPDATE_BANK_INFO_AGENT,E(q.value,((e,a)=>{a===h.JUMP_PAGE&&((e,a)=>{const{holder:t,insuredList:s}=q.value;let o={name:t.name,gender:`${w[t.gender]}士`};"insured"===e&&(o={name:null==s?void 0:s[0].name,gender:`${w[null==s?void 0:s[0].gender]}士`}),x({shareType:0,title:`${C[a].title}`,desc:C[a].desc.replace("{name}",`${o.name}${o.gender},`),url:`${window.location.href}&objectType=${e}&isShare=1&nextPageCode=updateBankInfo`.replace("/updateBankInfo","/phoneVerify"),imageUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"})})("holder","pay")}),a)))}))};n((()=>{(async()=>{let e={};P({orderNo:T,tenantId:G}).then((({code:e,data:a})=>{"10000"===e&&(M.value=a.tenantOrderPayInfoList)}));const{code:a,data:t}=await B({orderNo:T,tenantId:G});"10000"===a&&(Object.assign(q.value,t,{extInfo:{...t.extInfo,buttonCode:y.SIGN,pageCode:j.SIGN}}),e=O(t.insuredList[0].productList)),A(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e,{payInfo:s}=b(t);F.value={...F.value,...s}}}))})()}));const J=o();return r((()=>{setTimeout((async()=>{J.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=_;return d(),i("div",L,[l(F).schema.length&&l(M)?(d(),u(N,{key:0,ref_key:"payInfoRef",ref:z,modelValue:l(M),"onUpdate:modelValue":a[0]||(a[0]=e=>c(M)?M.value=e:null),schema:l(F).schema,"is-view":l(V),"user-data":l(q)},null,8,["modelValue","schema","is-view","user-data"])):f("",!0),p("div",$,[m(t,{type:"primary",plain:"",onClick:R},{default:v((()=>[I("取消")])),_:1}),m(t,{type:"primary",onClick:H},{default:v((()=>[I("确认")])),_:1})])])}}}),[["__scopeId","data-v-796e2ef0"]]);export{T as default};
