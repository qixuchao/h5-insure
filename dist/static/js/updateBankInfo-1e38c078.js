import{_ as e,d as a,i as t,h as s,j as o,bc as n,l as r,o as i,c as d,u as l,p as c,q as u,f as p,a as f,b as m,w as v,v as y,ba as I,bk as b,aZ as g,d3 as h,aX as j,bb as P,bO as _,b3 as w,cD as N,cE as k,cG as x}from"./index-2ac8b6d6.js";import{P as C}from"./PolicyInfo-ab4c8e92.js";import{u as O}from"./useOrder-1ad926ad.js";import{p as $}from"./utils-44c69232.js";import{g as E,m as L}from"./trial-4ea734ea.js";import{n as T}from"./nextStep-04db470c.js";import"./cloneDeep-ea85aaaa.js";import"./utils-48a9b4f8.js";import"./createProposal-1f031c3d.js";import"./trial-cb24e467.js";import"./utils-ab4832aa.js";import"./infoCollection-4aaf49a5.js";import"./core-e0720063.js";const A={class:"bank-info-wrap"},B={class:"footer-button"},D=a({name:"updateBankInfo"});var G=e(a({...D,setup(e){const a=t(),D=s(),{orderNo:G,isShare:U,tenantId:S,nextPageCode:V}=a.query,q=O(),z=o({schema:[],config:[],formData:[]}),F=o(!!U),M=o(),R=o(),J=()=>{D.back()},K=()=>{M.value&&M.value.validate(!1).then((e=>{e&&(q.value.tenantOrderPayInfoList=R,U?(q.value.extInfo.buttonCode=I.UPDATE_BANK_INFO_HOLDER,T(q.value,((e,t)=>{t===b.JUMP_PAGE&&g(e.nextPageCode,a.query)}),a)):(q.value.extInfo.buttonCode=I.UPDATE_BANK_INFO_AGENT,T(q.value,((e,a)=>{a===b.JUMP_PAGE&&((e,a)=>{const{holder:t,insuredList:s}=q.value;let o={name:t.name,gender:`${N[t.gender]}士`};"insured"===e&&(o={name:null==s?void 0:s[0].name,gender:`${N[null==s?void 0:s[0].gender]}士`}),k({shareType:0,title:`${x[a].title}`,desc:x[a].desc.replace("{name}",`${o.name}${o.gender},`),url:`${window.location.href}&objectType=${e}&isShare=1&nextPageCode=updateBankInfo`.replace("/updateBankInfo","/phoneVerify"),imageUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"})})("holder","pay")}),a)))}))};n((()=>{(async()=>{let e={};h({orderNo:G,tenantId:S}).then((({code:e,data:a})=>{if("10000"===e){R.value=a.tenantOrderPayInfoList;const e=[];a.tenantOrderPayInfoList.forEach(((a,t)=>{`${a.paymentType}`==`${j.NO}`&&(e[t]={paymentType:{isView:!0}})})),z.value.config=e}}));const{code:a,data:t}=await E({orderNo:G,tenantId:S});"10000"===a&&(Object.assign(q.value,t,{extInfo:{...t.extInfo,buttonCode:I.SIGN,pageCode:P.SIGN}}),e=$(t.insuredList[0].productList)),L(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e,{payInfo:s}=_(t);z.value={...z.value,...s}}}))})()}));const H=o();return r((()=>{setTimeout((async()=>{H.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=w;return i(),d("div",A,[l(z).schema.length&&l(R)?(i(),c(C,{key:0,ref_key:"payInfoRef",ref:M,modelValue:l(R),"onUpdate:modelValue":a[0]||(a[0]=e=>u(R)?R.value=e:null),schema:l(z).schema,config:l(z).config,"is-view":l(F),"user-data":l(q)},null,8,["modelValue","schema","config","is-view","user-data"])):p("",!0),f("div",B,[m(t,{type:"primary",plain:"",onClick:J},{default:v((()=>[y("取消")])),_:1}),m(t,{type:"primary",onClick:K},{default:v((()=>[y("确认")])),_:1})])])}}}),[["__scopeId","data-v-76dfefc2"]]);export{G as default};
