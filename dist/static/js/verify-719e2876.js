import{d as e,j as a,i as l,z as s,o as i,l as n,w as o,a as r,e as u,u as d,b as t,V as m,W as v,bU as c,m as p,bV as f,bW as h,bX as y,as as g,ao as b,h as S,g as V,O as C,c as k,q,F as L,bY as w,a8 as x,bk as j,a6 as U,T as I,aD as _,a9 as E,aa as O,bZ as P,aq as $,an as F}from"./index-d5e08f40.js";import{n as D}from"./nextStep-ad024bee.js";import{c as A}from"./format-b5e9d8b9.js";import{g as N,m as R}from"./trial-99c9bb5e.js";import{p as W}from"./utils-0af605ab.js";import{u as z}from"./useOrder-bae6b8e2.js";import{a as B}from"./constants-6162d78d.js";import"./core-db33476e.js";import"./constant-8927d485.js";const G={class:"popup-container"},J={class:"popup-header"},M={class:"title"},T={class:"popup-body"},X=e({name:"checkCodePopup"}),Y=e({...X,props:{show:{type:Boolean,default:!1},type:{default:"agent"},data:{default:()=>({})}},emits:["cancel","confirm"],setup(e,{emit:b}){const S=e,V=a((()=>S.show)),C=l({mobile:"",verifyCode:""}),k=a((()=>S.type)),q=l({holder:{type:"投保人",name:"",mobile:"",desc:""},agent:{type:"代理人",name:"李三",mobile:"13262278989",desc:"色卡上会计核算看回放独守空房还是空巅峰计划收款方"},insured:{type:"被保人",name:"",mobile:"",desc:""}}),L=()=>{b("cancel")},w=()=>{b("confirm")};return s([()=>S.data,S.type],(([e,a])=>{var l,s,i;e&&(Object.assign(q.value.holder,e.holder),Object.assign(q.value.insured,null==(l=null==e?void 0:e.insuredList)?void 0:l[0]),C.value.mobile=null==(i=null==(s=q.value)?void 0:s[`${S.type}`])?void 0:i.mobile)}),{immediate:!0,deep:!0}),(e,a)=>{const l=f,s=h,b=y,S=g;return i(),n(S,{show:d(V),"onUpdate:show":a[2]||(a[2]=e=>p(V)?V.value=e:null),class:"popup-check-mobile",closeable:!1,"close-on-click-overlay":!1},{default:o((()=>[r("div",G,[r("div",J,[r("span",{class:"clear-all",onClick:L}," 取消 "),r("span",M,u(`${q.value[d(k)].type}手机号验证`),1),r("span",{class:"close",onClick:w},"确认")]),r("div",T,[r("h3",null,u(`尊敬的${q.value[d(k)].type}:${q.value[d(k)].name}`),1),r("p",null,u(q.value[d(k)].desc),1),r("h3",null,u(`${q.value[d(k)].type}手机号验证 ${d(A)(q.value[d(k)].mobile||"")}`),1),t(b,{model:C.value},{default:o((()=>[m(t(l,{modelValue:C.value.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>C.value.mobile=e),label:"被保人手机号",name:"mobile",maxlength:"11",required:""},null,8,["modelValue"]),[[v,!1]]),t(s,{modelValue:C.value.verifyCode,"onUpdate:modelValue":a[1]||(a[1]=e=>C.value.verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode","send-s-m-s-code":d(c),rules:""},null,8,["modelValue","send-s-m-s-code"])])),_:1},8,["model"])])])])),_:1},8,["show"])}}}),Z=b([{label:"签名完成",value:1},{label:"去签名",value:2},{label:"认证失败，请联系内勤人员",value:3}]);const H={class:"page-verify-wrap"},K={key:0,class:"header"},Q={class:"sign-list"},ee={class:"inner-cell"},ae={class:"inner-cell"},le={class:"footer-button"},se=e({name:"verify"}),ie=e({...se,setup(e){const s=S(),u=V(),{orderNo:m,tenantId:v}=s.query,p=l(!1),g=l({holder:{},insuredList:[{}]}),b=z(),A=l(!1),G=l({sign:[],verify:[],scribing:""}),J=l({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},verifyStatus:2},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2}}),M=l("agent"),T=a((()=>e=>G.value.sign.includes(e)||G.value.verify.includes(e))),X=a((()=>e=>J.value[e].isSign||J.value[e].isVerify)),se=a((()=>e=>J.value[e].isShareSign)),ie=e=>{M.value=e,A.value=!0},ne=()=>{A.value=!1},oe=()=>{let e="";e="agent"===M.value?B.agentSign:"holder"===M.value?(J.value[M.value].isVerify,B.holderSign):(J.value[M.value].isVerify,B.insuredSign),u.push({path:e,query:{...s.query,type:M.value}})},re=()=>{const{holder:e,insuredList:a,extInfo:l}=b.value;[l.agentAuthFlag,e.isCert,a[0].isCert].includes(U.NO)?I("请先完成签名"):D(b.value,((e,a)=>{a===_.JUMP_PAGE&&E(e.nextPageCode,s.query)}))};return C((()=>{(async()=>{let e={};await N({orderNo:m,tenantId:v}).then((({code:a,data:l})=>{var s,i;"10000"===a&&(Object.assign(b.value,l),g.value=l,e=W(l.insuredList[0].productList),J.value.agent.verifyStatus=l.extInfo.agentAuthFlag,J.value.holder.verifyStatus=l.holder.isCert,J.value.insured.verifyStatus=null==(i=null==(s=l.insuredList)?void 0:s[0])?void 0:i.isCert)})),await R(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=j(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&G.value.sign.push(a.code),"1"===a.code?J.value.agent.isSign=!0:"2"===a.code?J.value.holder.isSign=!0:"3"===a.code?J.value.insured.isSign=!0:"4"===a.code?J.value.holder.isShareSign=!0:"5"===a.code&&(J.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&G.value.verify.push(a.code),"1"===a.code?J.value.holder.isVerify=!0:"2"===a.code&&(J.value.insured.isVerify=!0)}))}))}}))})()})),(e,a)=>{const l=O,s=P,u=$,m=F;return i(),k("div",H,[t(l),d(p)?(i(),k("div",K,[t(s,{type:"warning",content:"为保障您的合法权益，当前保单需要进行双录"})])):q("",!0),r("div",Q,[d(X)("agent")?(i(),n(u,{key:0,title:"代理人签名",required:d(T)("agent"),"is-link":"",value:d(Z)[d(J).agent.verifyStatus],onClick:a[0]||(a[0]=e=>ie("agent"))},null,8,["required","value"])):q("",!0),d(p)?(i(),n(d(y),{key:2,model:d(g)},{default:o((()=>[t(d(f),{modelValue:d(g).holder.mobile,"onUpdate:modelValue":a[3]||(a[3]=e=>d(g).holder.mobile=e),rules:[{pattern:new RegExp(d(w).isPhone)}],label:"投保人手机号",name:"holder.mobile",maxlength:"11",required:""},null,8,["modelValue","rules"]),t(d(h),{modelValue:d(g).holder.verifyCode,"onUpdate:modelValue":a[4]||(a[4]=e=>d(g).holder.verifyCode=e),"related-name":"holder.mobile",label:"验证码",maxlength:"6",name:"holder.verifyCode","send-s-m-s-code":d(c),rules:"",required:""},null,8,["modelValue","send-s-m-s-code"]),t(d(f),{modelValue:d(g).insuredList[0].mobile,"onUpdate:modelValue":a[5]||(a[5]=e=>d(g).insuredList[0].mobile=e),label:"被保人手机号",name:"insuredList.0.mobile",maxlength:"11",required:"",rules:[{pattern:new RegExp(d(w).isPhone)}]},null,8,["modelValue","rules"]),t(d(h),{modelValue:d(g).insuredList[0].verifyCode,"onUpdate:modelValue":a[6]||(a[6]=e=>d(g).insuredList[0].verifyCode=e),label:"验证码",maxlength:"6",name:"insuredList.0.verifyCode","related-name":"insuredList.0.mobile","send-s-m-s-code":d(c),required:""},null,8,["modelValue","send-s-m-s-code"])])),_:1},8,["model"])):(i(),k(L,{key:1},[d(X)("holder")?(i(),n(u,{key:0,title:"投保人签名",required:d(T)("holder")},{value:o((()=>[r("div",ee,[d(se)("holder")?(i(),n(u,{key:0,"is-link":"",value:"分享空签邀约"})):q("",!0),t(u,{"is-link":"",value:d(Z)[d(J).holder.verifyStatus],onClick:a[1]||(a[1]=e=>ie("holder"))},null,8,["value"])])])),_:1},8,["required"])):q("",!0),d(X)("insured")?(i(),n(u,{key:1,title:"被保人签名",required:d(T)("insured")},{value:o((()=>[r("div",ae,[d(se)("insured")?(i(),n(u,{key:0,"is-link":"",value:"分享空签邀约"})):q("",!0),t(u,{"is-link":"",value:d(Z)[d(J).insured.verifyStatus],onClick:a[2]||(a[2]=e=>ie("insured"))},null,8,["value"])])])),_:1},8,["required"])):q("",!0)],64))]),r("div",le,[t(m,{type:"primary",onClick:re},{default:o((()=>[x("下一步")])),_:1})]),t(Y,{type:d(M),show:d(A),data:d(b),onCancel:ne,onConfirm:oe},null,8,["type","show","data"])])}}});export{ie as default};
