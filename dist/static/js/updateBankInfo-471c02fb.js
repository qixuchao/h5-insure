import{_ as a,d as s,h as e,i as t,av as o,o as r,c as n,u as i,l as c,q as d,a as l,b as u,w as f,a8 as m,bj as p,an as v}from"./index-cb6244e5.js";import{_ as y}from"./PolicyInfo-38735e27.js";import{u as h}from"./useOrder-a8cca413.js";import{a as I}from"./utils-0af605ab.js";import{g as b,m as j}from"./trial-7c136c09.js";const _={class:"bank-info-wrap"},k={class:"footer-button"},w=s({name:"updateBankInfo"});var L=a(s({...w,setup(a){const s=e(),{orderNo:w,isShare:L,tenantId:g}=s.query,O=h(),P=t({schema:[],config:[],formData:[]}),V=t(!!L),q=()=>{},x=()=>{};return o((()=>{(async()=>{let a={};const{code:s,data:e}=await b({orderNo:w,tenantId:g});"10000"===s&&(Object.assign(O.value,e),a=I(e.insuredList[0].productList)),j(a).then((({data:a,code:s})=>{if("10000"===s){const{productDetailResList:s,productFactor:e}=a,{payInfo:t}=p(e);P.value={...P.value,...t}}}))})()})),(a,s)=>{const e=v;return r(),n("div",_,[i(P).schema.length?(r(),c(y,{key:0,ref:"payInfoRef",modelValue:i(O).tenantOrderPayInfoList,"onUpdate:modelValue":s[0]||(s[0]=a=>i(O).tenantOrderPayInfoList=a),schema:i(P).schema,"is-view":i(V)},null,8,["modelValue","schema","is-view"])):d("",!0),l("div",k,[u(e,{onClick:q},{default:f((()=>[m("取消")])),_:1}),u(e,{type:"primary",onClick:x},{default:f((()=>[m("确认")])),_:1})])])}}}),[["__scopeId","data-v-f678577a"]]);export{L as default};
