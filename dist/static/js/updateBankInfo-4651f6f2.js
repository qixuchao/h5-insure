import{_ as e,d as a,i as t,h as s,j as o,aE as n,o as r,c as d,u as i,m as l,f as u,a as c,b as f,w as m,a8 as p,aK as v,a9 as y,bu as h,ag as I,cq as g,cr as _,cs as j}from"./index-26f63535.js";import{_ as P}from"./PolicyInfo-21816b07.js";import{u as b}from"./useOrder-a95ed2dc.js";import{p as x}from"./utils-120279df.js";import{g as C,m as k}from"./trial-5d8293a4.js";import{n as N}from"./nextStep-de858236.js";import{B as w,a as A}from"./constants-4b08cf92.js";import"./utils-ff01eafd.js";import"./infoCollection-4876e6a1.js";import"./trial-501c6119.js";import"./core-8de9700c.js";const E={class:"bank-info-wrap"},O={class:"footer-button"},$=a({name:"updateBankInfo"});var B=e(a({...$,setup(e){const a=t(),$=s(),{orderNo:B,isShare:L,tenantId:U,nextPageCode:D}=a.query,G=b(),S=o({schema:[],config:[],formData:[]}),T=o(!!L),q=o(),V=()=>{$.back()},F=()=>{q.value&&q.value.validate(!1).then((e=>{e&&(L?(G.value.extInfo.buttonCode=w.UPDATE_BANK_INFO_HOLDER,N(G.value,((e,t)=>{t===v.JUMP_PAGE&&y(e.nextPageCode,a.query)}),a)):(G.value.extInfo.buttonCode=w.UPDATE_BANK_INFO_AGENT,N(G.value,((e,a)=>{a===v.JUMP_PAGE&&((e,a)=>{const{holder:t,insured:s}=G.value;let o={name:t.name,gender:`${g[t.gender]}士`};"insured"===e&&(o={name:null==s?void 0:s[0].name,gender:`${g[null==s?void 0:s[0].gender]}士`}),_({shareType:0,title:`${j[a].title}`,desc:j[a].desc.replace("{name}",`${o.name}${o.gender},`),url:`${window.location.href}&objectType=${e}&isShare=1&nextPageCode=updateBankInfo`.replace("/updateBankInfo","/phoneVerify"),imageUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"})})("holder","pay")}),a)))}))};return n((()=>{(async()=>{let e={};const{code:a,data:t}=await C({orderNo:B,tenantId:U});"10000"===a&&(Object.assign(G.value,t,{extInfo:{...t.extInfo,buttonCode:w.SIGN,pageCode:A.SIGN}}),e=x(t.insuredList[0].productList)),k(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e,{payInfo:s}=h(t);S.value={...S.value,...s}}}))})()})),(e,a)=>{const t=I;return r(),d("div",E,[i(S).schema.length?(r(),l(P,{key:0,ref_key:"payInfoRef",ref:q,modelValue:i(G).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>i(G).tenantOrderPayInfoList=e),schema:i(S).schema,"is-view":i(T),"user-data":i(G)},null,8,["modelValue","schema","is-view","user-data"])):u("",!0),c("div",O,[f(t,{type:"primary",plain:"",onClick:V},{default:m((()=>[p("取消")])),_:1}),f(t,{type:"primary",onClick:F},{default:m((()=>[p("确认")])),_:1})])])}}}),[["__scopeId","data-v-4723937c"]]);export{B as default};
