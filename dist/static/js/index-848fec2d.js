var G=Object.defineProperty,U=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var w=(a,e,o)=>e in a?G(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,A=(a,e)=>{for(var o in e||(e={}))z.call(e,o)&&w(a,o,e[o]);if(D)for(var o of D(e))H.call(e,o)&&w(a,o,e[o]);return a},E=(a,e)=>U(a,j(e));import{h as T,G as d,N as O,$ as P,r as C,k,m as V,n as _,s as g,B as l,A as c,L as W,M,T as X,P as Y,aa as J,v as K}from"./vendor-d6b13173.js";import{s as Q,c as R}from"./phoneVerify-be4d5533.js";import{v as N,a as S}from"./validator-ebd71d12.js";import{F as L}from"./utils-7311f686.js";import{t as Z}from"./theme-eeb93d73.js";import"./index-ab09c1f5.js";import"./trial-ed8aab88.js";const ee=T({props:{isCheck:{type:Boolean,default:!1},userInfo:{type:Object,default:()=>{}}},emits:["on-verify"],setup(a,{emit:e}){var f;const o=a,r=d({}),v=d(!1),h=30,u=d(0),p=d("\u83B7\u53D6\u9A8C\u8BC1\u7801"),t=O({mobile:(f=o.userInfo)==null?void 0:f.mobile,smsCode:""}),I=s=>N(s)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",b=s=>S(s)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801",m=()=>{if(u.value>0)return;u.value=h;const s=()=>{p.value=`${u.value}s`,u.value-=1};s();const n=setInterval(()=>{u.value===0?(p.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",u.value=0,clearInterval(n)):s()},1e3)},B=async()=>{u.value>0||r==null||r.value.validate("mobile").then(async()=>{const s=await Q(t.mobile),{code:n,data:y}=s;n==="10000"&&(v.value=!0,X({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),m())})},i=async()=>{const s=await R(t.mobile,t.smsCode),{data:n}=s;n&&e("on-verify",t)},x=async()=>{r==null||r.value.validate().then(async()=>{i()})};return P(()=>t,()=>{N(t.mobile)&&S(t.smsCode)&&v.value&&i()},{deep:!0,immediate:!0}),(s,n)=>{const y=C("van-field"),q=C("van-cell-group"),$=C("VanForm");return k(),V($,{ref_key:"formRef",ref:r,"label-width":"80"},{default:_(()=>[g(q,null,{default:_(()=>[g(y,{modelValue:l(t).mobile,"onUpdate:modelValue":n[0]||(n[0]=F=>l(t).mobile=F),name:"mobile",label:"\u624B\u673A\u53F7",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",maxlength:l(L).MOBILE,rules:[{validator:I}]},null,8,["modelValue","maxlength","rules"]),g(y,{modelValue:l(t).smsCode,"onUpdate:modelValue":n[1]||(n[1]=F=>l(t).smsCode=F),name:"smsCode",label:"\u9A8C\u8BC1\u7801",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",maxlength:l(L).SMS_CODE,rules:[{validator:b}]},{button:_(()=>[c("div",{class:M(["sms-code",{"count-down":u.value>0}]),onClick:B},W(p.value),3)]),_:1},8,["modelValue","maxlength","rules"])]),_:1}),c("div",{class:M([{"check-submit":o.isCheck},{submit:!o.isCheck}]),onClick:x},null,2)]),_:1},512)}}});var oe="/static/assets/check-img.a2b49089.png";const ae={class:"page-activity-invite"},te=["src"],se={class:"container"},ne={class:"main-form"},pe=T({setup(a){const e=Y(),o=J(),{productCode:r="7X9",tenantId:v="",phoneNo:h,saleChannelId:u,agentCode:p="",paymentMethod:t,from:I}=e.query,b=d(!0),m=O({userInfo:{mobile:h,name:""}}),B=async i=>{m.userInfo.mobile=i.mobile,o.push({path:"/chuangxin/baigebao/productDetail",query:E(A({},e.query),{tenantId:v,phoneNo:m.userInfo.mobile,productCode:"BWYL2021"})})};return(i,x)=>{const f=C("van-config-provider");return k(),V(f,{"theme-vars":l(Z)},{default:_(()=>[c("div",ae,[c("img",{src:l(oe),class:"banner"},null,8,te),c("div",se,[c("div",ne,[b.value?(k(),V(ee,{key:0,"is-check":i.isCheck,"user-info":l(m).userInfo,onOnVerify:B},null,8,["is-check","user-info"])):K("",!0)])])])]),_:1},8,["theme-vars"])}}});export{pe as default};
