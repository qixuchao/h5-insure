import{_ as e,d as a,i as t,h as s,j as o,az as n,o as r,c as d,u as i,m as l,p as u,f as c,a as f,b as p,w as m,a8 as v,ax as y,aG as I,a9 as h,cX as b,ay as g,bA as j,aj as _,cx as P,cy as x,cz as C}from"./index-0aeac8ce.js";import{_ as N}from"./PayInfo-84edb0f6.js";import{u as k}from"./useOrder-ab7304e1.js";import{p as A}from"./utils-a1866f8f.js";import{g as w,m as O}from"./trial-f6d4d526.js";import{n as $}from"./nextStep-256cc5f5.js";import"./PolicyInfo-6e3e3d89.js";import"./utils-fd9b71b5.js";import"./infoCollection-7e0fb9db.js";import"./trial-9470be30.js";import"./core-6a06f84f.js";const E={class:"bank-info-wrap"},G={class:"footer-button"},L=a({name:"updateBankInfo"});var U=e(a({...L,setup(e){const a=t(),L=s(),{orderNo:U,isShare:B,tenantId:D,nextPageCode:S}=a.query,T=k(),V=o({schema:[],config:[],formData:[]}),q=o(!!B),z=o(),F=o(),M=()=>{L.back()},R=()=>{z.value&&z.value.validate(!1).then((e=>{e&&(T.value.tenantOrderPayInfoList=F,B?(T.value.extInfo.buttonCode=y.UPDATE_BANK_INFO_HOLDER,$(T.value,((e,t)=>{t===I.JUMP_PAGE&&h(e.nextPageCode,a.query)}),a)):(T.value.extInfo.buttonCode=y.UPDATE_BANK_INFO_AGENT,$(T.value,((e,a)=>{a===I.JUMP_PAGE&&((e,a)=>{const{holder:t,insured:s}=T.value;let o={name:t.name,gender:`${P[t.gender]}士`};"insured"===e&&(o={name:null==s?void 0:s[0].name,gender:`${P[null==s?void 0:s[0].gender]}士`}),x({shareType:0,title:`${C[a].title}`,desc:C[a].desc.replace("{name}",`${o.name}${o.gender},`),url:`${window.location.href}&objectType=${e}&isShare=1&nextPageCode=updateBankInfo`.replace("/updateBankInfo","/phoneVerify"),imageUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/MyPicture/asdad.png"})})("holder","pay")}),a)))}))};return n((()=>{(async()=>{let e={};b({orderNo:U,tenantId:D}).then((({code:e,data:a})=>{"10000"===e&&(F.value=a.tenantOrderPayInfoList)}));const{code:a,data:t}=await w({orderNo:U,tenantId:D});"10000"===a&&(Object.assign(T.value,t,{extInfo:{...t.extInfo,buttonCode:y.SIGN,pageCode:g.SIGN}}),e=A(t.insuredList[0].productList)),O(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e,{payInfo:s}=j(t);V.value={...V.value,...s}}}))})()})),(e,a)=>{const t=_;return r(),d("div",E,[i(V).schema.length&&i(F)?(r(),l(N,{key:0,ref_key:"payInfoRef",ref:z,modelValue:i(F),"onUpdate:modelValue":a[0]||(a[0]=e=>u(F)?F.value=e:null),schema:i(V).schema,"is-view":i(q),"user-data":i(T)},null,8,["modelValue","schema","is-view","user-data"])):c("",!0),f("div",G,[p(t,{type:"primary",plain:"",onClick:M},{default:m((()=>[v("取消")])),_:1}),p(t,{type:"primary",onClick:R},{default:m((()=>[v("确认")])),_:1})])])}}}),[["__scopeId","data-v-61e78bea"]]);export{U as default};
