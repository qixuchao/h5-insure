var z=Object.defineProperty,J=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var U=(i,s,u)=>s in i?z(i,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[s]=u,N=(i,s)=>{for(var u in s||(s={}))G.call(s,u)&&U(i,u,s[u]);if($)for(var u of $(s))X.call(s,u)&&U(i,u,s[u]);return i},k=(i,s)=>J(i,W(s));import{g as L,E as F,M as O,_ as Y,r as f,j as v,k as V,m as E,p as g,A as c,z as m,J as K,L as Q,n as P,G as q,F as S,C as R,T as w,O as Z,a9 as ee,h as te}from"./vendor-667a94d7.js";import{g as oe,m as ne,i as ae}from"./trial-67fe491f.js";import{p as se}from"./product-6a3bb421.js";import{a as ue}from"./infoCollection-242da9b6.js";import{s as le,c as re}from"./phoneVerify-af714b4b.js";import{a3 as ce}from"./index-a0b73b03.js";import{g as ie,l as me,a as de}from"./utils-69a1d834.js";import"./trial-c49ed419.js";const fe={class:"agree"},pe=R(" \u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F "),ve=L({props:{info:{type:Object,default:()=>{}}},emits:["on-verify"],setup(i,{emit:s}){var y,l;const u=i,r=F({}),b=30,a=F(0),p=F("\u83B7\u53D6\u9A8C\u8BC1\u7801"),h=/\d{9}/,o=/^\d{6}$/,t=O({mobile:(l=(y=u.info)==null?void 0:y.userInfo)==null?void 0:l.mobile,smsCode:"",agree:""}),C=()=>{if(a.value>0)return;a.value=b;const e=()=>{p.value=`${a.value}s`,a.value-=1};e();const n=setInterval(()=>{a.value===0?(p.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",a.value=0,clearInterval(n)):e()},1e3)},D=async()=>{a.value>0||r==null||r.value.validate("mobile").then(async()=>{await le(t.mobile),C()})},B=async()=>{const e=await re(t.mobile,t.smsCode),{data:n}=e;n&&s("on-verify",t)},I=async()=>{r==null||r.value.validate().then(async()=>{B()})};return Y(()=>t,()=>{h.test(t.mobile)&&o.test(t.smsCode)&&B()},{deep:!0,immediate:!0}),(e,n)=>{const d=f("van-field"),x=f("van-cell-group"),A=f("van-checkbox"),j=f("ProPDFviewer"),H=f("VanForm");return v(),V(H,{ref_key:"formRef",ref:r},{default:E(()=>{var T;return[g(x,null,{default:E(()=>[g(d,{modelValue:c(t).mobile,"onUpdate:modelValue":n[0]||(n[0]=_=>c(t).mobile=_),name:"mobile",label:"\u624B\u673A\u53F7",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{pattern:h,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"}]},null,8,["modelValue","rules"]),g(d,{modelValue:c(t).smsCode,"onUpdate:modelValue":n[1]||(n[1]=_=>c(t).smsCode=_),name:"smsCode",label:"\u9A8C\u8BC1\u7801",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",rules:[{pattern:o,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801"}]},{button:E(()=>[m("div",{class:Q(["sms-code",{"count-down":a.value>0}]),onClick:D},K(p.value),3)]),_:1},8,["modelValue","rules"])]),_:1}),m("div",{class:"submit",onClick:I}),m("div",fe,[g(A,{modelValue:c(t).agree,"onUpdate:modelValue":n[2]||(n[2]=_=>c(t).agree=_),name:"agree",shape:"square"},null,8,["modelValue"]),m("div",null,[pe,(v(!0),P(S,null,q(((T=u.info)==null?void 0:T.attachmentList)||[],(_,M)=>(v(),V(j,{key:M,class:"file-name",title:`\u300A${_.attachmentName}\u300B`,content:_.attachmentUrl,type:"pdf"},null,8,["title","content"]))),128))])])]}),_:1},512)}}}),_e={class:"agree"},ge=R(" \u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F "),be=L({props:{info:{type:Object,default:()=>{}}},emits:["on-submit"],setup(i,{emit:s}){const u=i,r=F({}),b=/\W/,a=O({name:u.info.userInfo.name,certNo:u.info.userInfo.certNo,agree:""}),p=o=>ce(a.certNo)?!0:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u8BC1\u4EF6\u53F7",h=()=>{r==null||r.value.validate().then(async o=>{if(!a.agree){w("\u8BF7\u52FE\u9009\u534F\u8BAE");return}s("on-submit",a)})};return(o,t)=>{const C=f("van-field"),D=f("van-cell-group"),B=f("van-checkbox"),I=f("ProPDFviewer"),y=f("VanForm");return v(),V(y,{ref_key:"formRef",ref:r},{default:E(()=>{var l;return[g(D,null,{default:E(()=>[g(C,{modelValue:c(a).name,"onUpdate:modelValue":t[0]||(t[0]=e=>c(a).name=e),name:"name",label:"\u59D3\u540D",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",rules:[{pattern:b,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D"}]},null,8,["modelValue","rules"]),g(C,{modelValue:c(a).certNo,"onUpdate:modelValue":t[1]||(t[1]=e=>c(a).certNo=e),name:"certNo",label:"\u8EAB\u4EFD\u8BC1",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",rules:[{validator:p}]},null,8,["modelValue","rules"])]),_:1}),m("div",{class:"submit",onClick:h}),m("div",_e,[g(B,{modelValue:c(a).agree,"onUpdate:modelValue":t[2]||(t[2]=e=>c(a).agree=e),name:"agree",shape:"square"},null,8,["modelValue"]),m("div",null,[ge,(v(!0),P(S,null,q(((l=u.info)==null?void 0:l.attachmentList)||[],(e,n)=>(v(),V(I,{key:n,class:"file-name",title:`\u300A${e.attachmentName}\u300B`,content:e.attachmentUrl,type:"pdf"},null,8,["title","content"]))),128))])])]}),_:1},512)}}});var he="/static/assets/title-step1.97cb9efa.png",Ce="/static/assets/title-step2.258af5e9.png";const Fe={class:"page-activity-invite"},Be=["src"],ye={class:"container"},Ve={class:"main-form"},De={class:"title"},Ie=["src"],Te=L({setup(i){const s=Z(),u=ee(),{productCode:r="7X9",tenantId:b="",extInfo:a}=s.query,p=ie(a),h=F(!0),o=O({title:he,attachmentList:[{}],userInfo:{mobile:p.phoneNo,certNo:"",name:""}}),t=F(),C=F(),D=async l=>{var x,A;o.userInfo.mobile=l.mobile;const e=await oe({holderPhone:o.userInfo.mobile,productCode:r,tenantId:b}),{code:n,data:d}=e;n==="10000"&&(o.userInfo.name=(x=d.tenantOrderHolder)==null?void 0:x.name,o.userInfo.certNo=(A=d.tenantOrderHolder)==null?void 0:A.certNo),o.title=Ce,h.value=!1},B=async l=>{try{w({message:"\u9886\u53D6\u4E2D...",forbidClick:!0,loadingType:"spinner"}),o.userInfo.certNo=l.certNo,o.userInfo.name=l.name;const e=de(k(N({tenantId:b,detail:t.value},p),{holder:o.userInfo,insured:k(N({},o.userInfo),{relationToHolder:ue.SELF})})),n=await ne(e),{code:d}=n;d==="10000"&&u.push({path:"/chuangxin/baigebao/productDetail",query:k(N({},s.query),{tenantId:b,productCode:"BWYL2021",extInfo:JSON.stringify(k(N({},p),{phoneNo:o.userInfo.mobile,certNo:o.userInfo.certNo,name:o.userInfo.name}))})}),w.clear()}catch(e){console.log(e),w.clear()}},I=()=>{let l=[];return C.value.productRiskVoList.forEach(e=>{e.riskDetailVOList.forEach(n=>{l=l.concat(n.riskAttachmentVOList)})}),l},y=async()=>{const l=se({productCode:r,withInsureInfo:!0}),e=ae({productCode:r});Promise.all([l,e]).then(([n,d])=>{n.code==="10000"&&(t.value=n.data),d.code==="10000"&&(C.value=d.data,o.attachmentList=I())})};return te(()=>{y()}),(l,e)=>(v(),P("div",Fe,[m("img",{class:"logo",src:c(me)},null,8,Be),m("div",ye,[m("div",Ve,[m("div",De,[m("img",{src:c(o).title},null,8,Ie)]),h.value?(v(),V(ve,{key:0,info:c(o),onOnVerify:D},null,8,["info"])):(v(),V(be,{key:1,info:c(o),onOnSubmit:B},null,8,["info"]))])])]))}});export{Te as default};
