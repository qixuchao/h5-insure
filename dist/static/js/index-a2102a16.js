var z=Object.defineProperty,U=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var E=(t,e,o)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,w=(t,e)=>{for(var o in e||(e={}))G.call(e,o)&&E(t,o,e[o]);if(D)for(var o of D(e))H.call(e,o)&&E(t,o,e[o]);return t},A=(t,e)=>U(t,$(e));import{g as O,E as d,M as T,_ as J,r as C,j as k,k as V,m as _,p as F,A as l,z as c,J as W,L as M,T as X,O as Y,a9 as K,t as P}from"./vendor-06835924.js";import{s as Q,c as R}from"./phoneVerify-213543ed.js";import{v as S,a as N}from"./validator-ebd71d12.js";import{F as L}from"./utils-d9276c1a.js";import{t as Z}from"./theme-eeb93d73.js";import"./index-a916e15f.js";import"./trial-e45e2b4e.js";const ee=O({props:{isCheck:{type:Boolean,default:!1},userInfo:{type:Object,default:()=>{}}},emits:["on-verify"],setup(t,{emit:e}){var f;const o=t,r=d({}),v=d(!1),h=30,u=d(0),p=d("\u83B7\u53D6\u9A8C\u8BC1\u7801"),a=T({mobile:(f=o.userInfo)==null?void 0:f.mobile,smsCode:""}),I=s=>S(s)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",b=s=>N(s)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801",m=()=>{if(u.value>0)return;u.value=h;const s=()=>{p.value=`${u.value}s`,u.value-=1};s();const n=setInterval(()=>{u.value===0?(p.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",u.value=0,clearInterval(n)):s()},1e3)},y=async()=>{u.value>0||r==null||r.value.validate("mobile").then(async()=>{const s=await Q(a.mobile),{code:n,data:B}=s;n==="10000"&&(v.value=!0,X({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),m())})},i=async()=>{const s=await R(a.mobile,a.smsCode),{data:n}=s;n&&e("on-verify",a)},x=async()=>{r==null||r.value.validate().then(async()=>{i()})};return J(()=>a,()=>{S(a.mobile)&&N(a.smsCode)&&v.value&&i()},{deep:!0,immediate:!0}),(s,n)=>{const B=C("van-field"),q=C("van-cell-group"),j=C("VanForm");return k(),V(j,{ref_key:"formRef",ref:r,"label-width":"80"},{default:_(()=>[F(q,null,{default:_(()=>[F(B,{modelValue:l(a).mobile,"onUpdate:modelValue":n[0]||(n[0]=g=>l(a).mobile=g),name:"mobile",label:"\u624B\u673A\u53F7",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",maxlength:l(L).MOBILE,rules:[{validator:I}]},null,8,["modelValue","maxlength","rules"]),F(B,{modelValue:l(a).smsCode,"onUpdate:modelValue":n[1]||(n[1]=g=>l(a).smsCode=g),name:"smsCode",label:"\u9A8C\u8BC1\u7801",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",maxlength:l(L).SMS_CODE,rules:[{validator:b}]},{button:_(()=>[c("div",{class:M(["sms-code",{"count-down":u.value>0}]),onClick:y},W(p.value),3)]),_:1},8,["modelValue","maxlength","rules"])]),_:1}),c("div",{class:M([{"check-submit":o.isCheck},{submit:!o.isCheck}]),onClick:x},null,2)]),_:1},512)}}});var oe="/static/assets/check-img.a2b49089.png";const te={class:"page-activity-invite"},ae=["src"],se={class:"container"},ne={class:"main-form"},pe=O({setup(t){const e=Y(),o=K(),{productCode:r="7X9",tenantId:v="",phoneNo:h,saleChannelId:u,agentCode:p="",paymentMethod:a,from:I}=e.query,b=d(!0),m=T({userInfo:{mobile:h,name:""}}),y=async i=>{m.userInfo.mobile=i.mobile,o.push({path:"/chuangxin/baigebao/productDetail",query:A(w({},e.query),{tenantId:v,phoneNo:m.userInfo.mobile,productCode:"BWYL2021"})})};return(i,x)=>{const f=C("van-config-provider");return k(),V(f,{"theme-vars":l(Z)},{default:_(()=>[c("div",te,[c("img",{src:l(oe),class:"banner"},null,8,ae),c("div",se,[c("div",ne,[b.value?(k(),V(ee,{key:0,"is-check":i.isCheck,"user-info":l(m).userInfo,onOnVerify:y},null,8,["is-check","user-info"])):P("",!0)])])])]),_:1},8,["theme-vars"])}}});export{pe as default};
