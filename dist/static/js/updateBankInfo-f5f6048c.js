import{_ as e,d as a,i as t,h as s,j as o,aG as n,l as r,o as d,c as i,u as l,p as u,q as c,f,a as p,b as m,w as v,v as I,aE as y,aQ as h,aj as g,d0 as b,aF as j,bH as P,ar as _,cC as w,cD as C,cE as x}from"./index-54fc417c.js";import{P as N}from"./PolicyInfo-52b3f564.js";import{u as k}from"./useOrder-c5a1977a.js";import{p as E}from"./utils-28f5fe16.js";import{g as A,m as B}from"./trial-eeb616e0.js";import{n as L}from"./nextStep-e3788565.js";import"./utils-44665163.js";import"./infoCollection-6f179e91.js";import"./trial-a1bb5fc8.js";import"./core-fc6da285.js";const O={class:"bank-info-wrap"},$={class:"footer-button"},D=a({name:"updateBankInfo"});var G=e(a({...D,setup(e){const a=t(),D=s(),{orderNo:G,isShare:T,tenantId:U,nextPageCode:S}=a.query,q=k(),F=o({schema:[],config:[],formData:[]}),V=o(!!T),z=o(),M=o(),R=()=>{D.back()},H=()=>{z.value&&z.value.validate(!1).then((e=>{e&&(q.value.tenantOrderPayInfoList=M,T?(q.value.extInfo.buttonCode=y.UPDATE_BANK_INFO_HOLDER,L(q.value,((e,t)=>{t===h.JUMP_PAGE&&g(e.nextPageCode,a.query)}),a)):(q.value.extInfo.buttonCode=y.UPDATE_BANK_INFO_AGENT,L(q.value,((e,a)=>{a===h.JUMP_PAGE&&((e,a)=>{const{holder:t,insuredList:s}=q.value;let o={name:t.name,gender:`${w[t.gender]}士`};"insured"===e&&(o={name:null==s?void 0:s[0].name,gender:`${w[null==s?void 0:s[0].gender]}士`}),C({shareType:0,title:`${x[a].title}`,desc:x[a].desc.replace("{name}",`${o.name}${o.gender},`),url:`${window.location.href}&objectType=${e}&isShare=1&nextPageCode=updateBankInfo`.replace("/updateBankInfo","/phoneVerify"),imageUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"})})("holder","pay")}),a)))}))};n((()=>{(async()=>{let e={};b({orderNo:G,tenantId:U}).then((({code:e,data:a})=>{"10000"===e&&(M.value=a.tenantOrderPayInfoList)}));const{code:a,data:t}=await A({orderNo:G,tenantId:U});"10000"===a&&(Object.assign(q.value,t,{extInfo:{...t.extInfo,buttonCode:y.SIGN,pageCode:j.SIGN}}),e=E(t.insuredList[0].productList)),B(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e,{payInfo:s}=P(t);F.value={...F.value,...s}}}))})()}));const J=o();return r((()=>{setTimeout((async()=>{J.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=_;return d(),i("div",O,[l(F).schema.length&&l(M)?(d(),u(N,{key:0,ref_key:"payInfoRef",ref:z,modelValue:l(M),"onUpdate:modelValue":a[0]||(a[0]=e=>c(M)?M.value=e:null),schema:l(F).schema,"is-view":l(V),"user-data":l(q)},null,8,["modelValue","schema","is-view","user-data"])):f("",!0),p("div",$,[m(t,{type:"primary",plain:"",onClick:R},{default:v((()=>[I("取消")])),_:1}),m(t,{type:"primary",onClick:H},{default:v((()=>[I("确认")])),_:1})])])}}}),[["__scopeId","data-v-796e2ef0"]]);export{G as default};
