var j=Object.defineProperty,G=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var q=(l,t,o)=>t in l?j(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,A=(l,t)=>{for(var o in t||(t={}))J.call(t,o)&&q(l,o,t[o]);if(U)for(var o of U(t))W.call(t,o)&&q(l,o,t[o]);return l},O=(l,t)=>G(l,z(t));import{g as P,E as B,M as T,_ as Y,r as h,j as y,k as V,m as E,p as D,A as a,z as d,J as K,L as X,T as x,O as Q,a9 as Z,h as ee,n as te,G as ae,F as oe,C as ne}from"./vendor-fba8f663.js";import{R as ue}from"./infoCollection-b0426750.js";import{s as se,c as re}from"./phoneVerify-09dd329d.js";import{v as H,a as R,b as le}from"./validator-ebd71d12.js";import{F as L,g as ie}from"./utils-71538c77.js";import{G as ce}from"./index-60fa203d.js";import{g as me,m as de,i as fe}from"./trial-b4a32598.js";import{p as pe}from"./product-b6e28e17.js";import{t as ve}from"./theme-eeb93d73.js";import"./trial-68b89596.js";const _e=P({props:{userInfo:{type:Object,default:()=>{}}},emits:["on-verify"],setup(l,{emit:t}){var k;const o=l,s=B({}),r=B(!1),N=30,m=B(0),b=B("\u83B7\u53D6\u9A8C\u8BC1\u7801"),n=T({mobile:(k=o.userInfo)==null?void 0:k.mobile,smsCode:""}),C=c=>H(c)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",I=c=>R(c)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801",e=()=>{if(m.value>0)return;m.value=N;const c=()=>{b.value=`${m.value}s`,m.value-=1};c();const u=setInterval(()=>{m.value===0?(b.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",m.value=0,clearInterval(u)):c()},1e3)},F=async()=>{m.value>0||s==null||s.value.validate("mobile").then(async()=>{const c=await se(n.mobile),{code:u,data:i}=c;u==="10000"&&(r.value=!0,x({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),e())})},_=async()=>{const c=await re(n.mobile,n.smsCode),{data:u}=c;u&&t("on-verify",n)},S=async()=>{s==null||s.value.validate().then(async()=>{_()})};return Y(()=>n,()=>{H(n.mobile)&&R(n.smsCode)&&r.value&&_()},{deep:!0,immediate:!0}),(c,u)=>{const i=h("van-field"),v=h("van-cell-group"),f=h("VanForm");return y(),V(f,{ref_key:"formRef",ref:s,"label-width":"80"},{default:E(()=>[D(v,null,{default:E(()=>[D(i,{modelValue:a(n).mobile,"onUpdate:modelValue":u[0]||(u[0]=p=>a(n).mobile=p),name:"mobile",label:"\u624B\u673A\u53F7",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",maxlength:a(L).MOBILE,rules:[{validator:C}]},null,8,["modelValue","maxlength","rules"]),D(i,{modelValue:a(n).smsCode,"onUpdate:modelValue":u[1]||(u[1]=p=>a(n).smsCode=p),name:"smsCode",label:"\u9A8C\u8BC1\u7801",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",maxlength:a(L).SMS_CODE,rules:[{validator:I}]},{button:E(()=>[d("div",{class:X(["sms-code",{"count-down":m.value>0}]),onClick:F},K(b.value),3)]),_:1},8,["modelValue","maxlength","rules"])]),_:1}),d("div",{class:"submit",onClick:S})]),_:1},512)}}}),he=P({props:{userInfo:{type:Object,default:()=>{}}},emits:["on-submit"],setup(l,{emit:t}){const o=l,s=B({}),r=T({name:o.userInfo.name,certNo:o.userInfo.certNo}),N=n=>ce(r.certNo)?!0:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u8BC1\u4EF6\u53F7",m=n=>le(n)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",b=()=>{s==null||s.value.validate().then(async n=>{t("on-submit",r)})};return(n,C)=>{const I=h("van-field"),e=h("van-cell-group"),F=h("VanForm");return y(),V(F,{ref_key:"formRef",ref:s,"label-width":"80"},{default:E(()=>[D(e,null,{default:E(()=>[D(I,{modelValue:a(r).name,"onUpdate:modelValue":C[0]||(C[0]=_=>a(r).name=_),name:"name",label:"\u59D3\u540D",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",maxlength:a(L).NAME,rules:[{validator:m}]},null,8,["modelValue","maxlength","rules"]),D(I,{modelValue:a(r).certNo,"onUpdate:modelValue":C[1]||(C[1]=_=>a(r).certNo=_),name:"certNo",label:"\u8EAB\u4EFD\u8BC1",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:a(L).ID_CARD,rules:[{validator:N}]},null,8,["modelValue","maxlength","rules"])]),_:1}),d("div",{class:"submit",onClick:b})]),_:1},512)}}});var be="/static/assets/title-step1.97cb9efa.png",Ce="/static/assets/title-step2.258af5e9.png";const Fe={class:"page-activity-invite"},ge=["src"],Be={class:"container"},Ie={class:"main-form"},ye={class:"title"},De=["src"],Ve={class:"agree"},Ee={class:"check-wrap"},Ne=ne(" \u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F "),qe=P({setup(l){const t=Q(),o=Z(),{productCode:s="7X9",tenantId:r="",phoneNo:N,saleChannelId:m,agentCode:b,paymentMethod:n,from:C}=t.query,I=B(!0),e=T({title:be,attachmentList:[{attachmentName:"",attachmentUri:""}],userInfo:{mobile:N,certNo:"",name:""},agree:!1}),F=B(),_=B(),S=async u=>{var p,g;if(e.userInfo.mobile=u.mobile,C==="check"){if(!e.agree){x("\u8BF7\u52FE\u9009\u534F\u8BAE");return}o.push({path:"/chuangxin/baigebao/productDetail",query:O(A({},t.query),{tenantId:r,phoneNo:e.userInfo.mobile,productCode:"BWYL2021"})});return}const i=await me({holderPhone:e.userInfo.mobile,productCode:s,tenantId:r}),{code:v,data:f}=i;v==="10000"&&(e.userInfo.name=(p=f.tenantOrderHolder)==null?void 0:p.name,e.userInfo.certNo=(g=f.tenantOrderHolder)==null?void 0:g.certNo),e.title=Ce,I.value=!1},k=async u=>{if(!e.agree){x("\u8BF7\u52FE\u9009\u534F\u8BAE");return}try{x({message:"\u9886\u53D6\u4E2D...",forbidClick:!0,loadingType:"spinner"}),e.userInfo.certNo=u.certNo,e.userInfo.name=u.name;const i=ie({tenantId:r,detail:F.value,insureDetail:_.value,saleChannelId:m,saleUserId:b,holder:e.userInfo,insured:O(A({},e.userInfo),{relationToHolder:ue.SELF}),paymentMethod:n,renewalDK:"",successJumpUrl:"",premium:0,orderStatus:"",orderTopStatus:"",tenantOrderRiskList:[]}),v=await de(i),{code:f}=v;f==="10000"&&o.push({path:"/chuangxin/baigebao/productDetail",query:O(A({},t.query),{tenantId:r,phoneNo:e.userInfo.mobile,certNo:e.userInfo.certNo,name:e.userInfo.name,productCode:"BWYL2021",agentCode:b})})}catch(i){console.log(i),x.clear()}},c=async()=>{const u=pe({productCode:s,withInsureInfo:!0,tenantId:r}),i=fe({productCode:s});Promise.all([u,i]).then(([v,f])=>{var p,g;v.code==="10000"&&(F.value=v.data,e.attachmentList=((g=(p=F.value)==null?void 0:p.tenantProductInsureVO)==null?void 0:g.attachmentVOList)||[]),f.code==="10000"&&(_.value=f.data)})};return ee(()=>{c()}),(u,i)=>{const v=h("van-checkbox"),f=h("ProPDFviewer"),p=h("van-config-provider");return y(),V(p,{"theme-vars":a(ve)},{default:E(()=>{var g,M;return[d("div",Fe,[d("img",{src:(M=(g=F.value)==null?void 0:g.tenantProductInsureVO)==null?void 0:M.banner[0],class:"banner"},null,8,ge),d("div",Be,[d("div",Ie,[d("div",ye,[d("img",{src:a(e).title},null,8,De)]),I.value?(y(),V(_e,{key:0,"user-info":a(e).userInfo,onOnVerify:S},null,8,["user-info"])):(y(),V(he,{key:1,"user-info":a(e).userInfo,onOnSubmit:k},null,8,["user-info"])),d("div",Ve,[d("div",Ee,[D(v,{modelValue:a(e).agree,"onUpdate:modelValue":i[0]||(i[0]=w=>a(e).agree=w),name:"agree",shape:"square"},null,8,["modelValue"])]),d("div",null,[Ne,(y(!0),te(oe,null,ae(a(e).attachmentList||[],(w,$)=>(y(),V(f,{key:$,class:"file-name",title:`\u300A${w.attachmentName}\u300B`,content:w.attachmentUri,type:"pdf"},null,8,["title","content"]))),128))])])])])])]}),_:1},8,["theme-vars"])}}});export{qe as default};
