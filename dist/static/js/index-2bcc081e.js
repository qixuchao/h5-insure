import{g as D,E as I,M as N,_ as $,r as f,j as _,k as B,m as V,p as g,A as n,z as i,J as R,L as S,n as k,G as A,F as w,C as T,T as x,O as q,a9 as H,h as M}from"./vendor-af6fda0a.js";import{g as z,m as j,i as W}from"./trial-4ba364cf.js";import{p as Y}from"./product-4bed829b.js";import{a as G}from"./infoCollection-242da9b6.js";import{a3 as J,Q as L}from"./index-125b94ab.js";import{s as Q,c as X}from"./phoneVerify-3d42acd5.js";const K={class:"agree"},Z=T(" \u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F "),ee=D({props:{title:{type:String,default:""},desc:{type:String,default:""},attachmentList:{type:Array,default:()=>[]}},emits:["on-verify"],setup(b,{emit:y}){const r=I({}),m=30,s=I(0),u=I("\u83B7\u53D6\u9A8C\u8BC1\u7801"),C=/\d{9}/,e=/^\d{6}$/,t=N({mobile:"",smsCode:"",agree:""}),d=()=>{if(s.value>0)return;s.value=m;const l=()=>{u.value=`${s.value}s`,s.value-=1};l();const o=setInterval(()=>{s.value===0?(u.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",s.value=0,clearInterval(o)):l()},1e3)},F=async()=>{s.value>0||r==null||r.value.validate("mobile").then(async()=>{await Q(t.mobile),d()})},c=async()=>{const l=await X(t.mobile,t.smsCode),{data:o}=l;o&&y("on-verify",t)},p=async()=>{r==null||r.value.validate().then(async()=>{t.agree||x("\u8BF7\u52FE\u9009\u534F\u8BAE"),c()})};return $(()=>t,()=>{C.test(t.mobile)&&e.test(t.smsCode)&&c()},{deep:!0,immediate:!0}),(l,o)=>{const a=f("van-field"),v=f("van-cell-group"),E=f("van-checkbox"),O=f("ProPDFviewer"),P=f("VanForm");return _(),B(P,{ref_key:"formRef",ref:r},{default:V(()=>[g(v,null,{default:V(()=>[g(a,{modelValue:n(t).mobile,"onUpdate:modelValue":o[0]||(o[0]=h=>n(t).mobile=h),name:"mobile",label:"\u624B\u673A\u53F7",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{pattern:C,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"}]},null,8,["modelValue","rules"]),g(a,{modelValue:n(t).smsCode,"onUpdate:modelValue":o[1]||(o[1]=h=>n(t).smsCode=h),name:"smsCode",label:"\u9A8C\u8BC1\u7801",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",rules:[{pattern:e,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801"}]},{button:V(()=>[i("div",{class:S(["sms-code",{"count-down":s.value>0}]),onClick:F},R(u.value),3)]),_:1},8,["modelValue","rules"])]),_:1}),i("div",{class:"submit",onClick:p}),i("div",K,[g(E,{modelValue:n(t).agree,"onUpdate:modelValue":o[2]||(o[2]=h=>n(t).agree=h),name:"agree",shape:"square"},null,8,["modelValue"]),i("div",null,[Z,(_(!0),k(w,null,A(b.attachmentList||[],(h,U)=>(_(),B(O,{key:U,class:"file-name",title:`\u300A${h.attachmentName}\u300B`,content:h.attachmentUri,type:"pdf"},null,8,["title","content"]))),128))])])]),_:1},512)}}}),te={class:"agree"},oe=T(" \u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F "),ae=D({props:{userInfo:{type:Object,default:()=>{}},attachmentList:{type:Array,default:()=>[]}},emits:["on-submit"],setup(b,{emit:y}){const r=b,m=I({}),s=/\W/,u=N({name:r.userInfo.name,certNo:r.userInfo.certNo,agree:""}),C=t=>J(u.certNo)?!0:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u8BC1\u4EF6\u53F7",e=()=>{m==null||m.value.validate().then(async t=>{if(!u.agree){x("\u8BF7\u52FE\u9009\u534F\u8BAE");return}y("on-submit",u)})};return(t,d)=>{const F=f("van-field"),c=f("van-cell-group"),p=f("van-checkbox"),l=f("ProPDFviewer"),o=f("VanForm");return _(),B(o,{ref_key:"formRef",ref:m},{default:V(()=>[g(c,null,{default:V(()=>[g(F,{modelValue:n(u).name,"onUpdate:modelValue":d[0]||(d[0]=a=>n(u).name=a),name:"name",label:"\u59D3\u540D",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",rules:[{pattern:s,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D"}]},null,8,["modelValue","rules"]),g(F,{modelValue:n(u).certNo,"onUpdate:modelValue":d[1]||(d[1]=a=>n(u).certNo=a),name:"certNo",label:"\u8EAB\u4EFD\u8BC1",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",rules:[{validator:C}]},null,8,["modelValue","rules"])]),_:1}),i("div",{class:"submit",onClick:e}),i("div",te,[g(p,{modelValue:n(u).agree,"onUpdate:modelValue":d[2]||(d[2]=a=>n(u).agree=a),name:"agree",shape:"square"},null,8,["modelValue"]),i("div",null,[oe,(_(!0),k(w,null,A(b.attachmentList||[],(a,v)=>(_(),B(l,{key:v,class:"file-name",title:`\u300A${a.attachmentName}\u300B`,content:a.attachmentUri,type:"pdf"},null,8,["title","content"]))),128))])])]),_:1},512)}}});var ne="/static/assets/title-step1.97cb9efa.png",se="/static/assets/title-step2.258af5e9.png",ue="/static/assets/logo.020372b9.png";const le={class:"page-activity-invite"},re=["src"],ce={class:"container"},ie={class:"main-form"},me={class:"title"},de=["src"],Ce=D({setup(b){const y=q(),r=H(),{productCode:m="7X9",tenantId:s,source:u=1}=y.query,C=I(!0),e=N({title:ne,attachmentList:[{}],userInfo:{mobile:"",certNo:"",name:""}}),t=async c=>{var a,v;e.userInfo.mobile=c.mobile;const p=await z({holderPhone:e.userInfo.mobile,productCode:m,tenantId:s}),{code:l,data:o}=p;l==="10000"&&(e.userInfo.name=(a=o.tenantOrderHolder)==null?void 0:a.name,e.userInfo.certNo=(v=o.tenantOrderHolder)==null?void 0:v.certNo),e.title=se,C.value=!1},d=async c=>{e.userInfo.certNo=c.certNo,e.userInfo.name=c.name;const p=await j({tenantId:s,venderCode:"zhongan",tenantOrderHolder:{certNo:e.userInfo.certNo,certType:L.CERT,mobile:e.userInfo.mobile,name:e.userInfo.name},tenantOrderInsuredList:[{certNo:e.userInfo.certNo,certType:L.CERT,name:e.userInfo.name,relationToHolder:G.SELF,tenantOrderProductList:[{productCode:m}]}]}),{code:l}=p;l==="10000"&&r.push({path:"/activity/productDetail",query:{tenantId:s,productCode:"BWYL2021",name:e.userInfo.name,certNo:e.userInfo.certNo,mobile:e.userInfo.mobile}})},F=async()=>{const c=Y({productCode:m,withInsureInfo:!0}),p=W({productCode:m});Promise.all([c,p]).then(([l,o])=>{if(console.log(l,o),l.code==="10000"&&console.log(""),o.code==="10000"){let a=[];o.data.productRiskVoList.forEach(v=>{v.riskDetailVOList.forEach(E=>{a=a.concat(E.riskAttachmentVOList)})}),e.attachmentList=a}})};return M(()=>{F()}),(c,p)=>(_(),k("div",le,[i("img",{class:"logo",src:n(ue)},null,8,re),i("div",ce,[i("div",ie,[i("div",me,[i("img",{src:n(e).title},null,8,de)]),C.value?(_(),B(ee,{key:0,"attachment-list":n(e).attachmentList,onOnVerify:t},null,8,["attachment-list"])):(_(),B(ae,{key:1,"user-info":n(e).userInfo,"attachment-list":n(e).attachmentList,onOnSubmit:d},null,8,["user-info","attachment-list"]))])])]))}});export{Ce as default};
