import{d as e,j as a,i as l,z as s,o as i,l as o,w as n,a as u,e as r,u as t,b as d,V as v,W as c,c4 as m,c5 as f,c6 as p,c7 as y,as as h,ao as g,h as b,g as S,O as k,c as C,q as V,F as q,a8 as L,T as j,bk as x,a6 as w,aD as I,a9 as U,bU as _,aA as A,aa as P,c8 as F,aq as O,an as N}from"./index-13a0c8c7.js";import{n as T}from"./nextStep-adfaab7b.js";import{c as $}from"./format-b5e9d8b9.js";import{g as E,m as D}from"./trial-f7228a69.js";import{p as R}from"./utils-0af605ab.js";import{u as B}from"./useOrder-3dd61110.js";import{a as G,P as J,B as M}from"./constants-5480429b.js";import{d as z,q as H}from"./verify-c10d3890.js";import"./core-ea38ae25.js";import"./constant-8927d485.js";const W={class:"popup-container"},Y={class:"popup-header"},K={class:"title"},Q={class:"popup-body"},X=e({name:"checkCodePopup"}),Z=e({...X,props:{show:{type:Boolean,default:!1},type:{default:"agent"},data:{default:()=>({})}},emits:["cancel","confirm"],setup(e,{emit:g}){const b=e,S=a((()=>b.show)),k=l({mobile:"",verifyCode:""}),C=a((()=>b.type)),V=l({holder:{type:"投保人",name:"",mobile:"",desc:""},agent:{type:"代理人",name:"李三",mobile:"13262278989",desc:"色卡上会计核算看回放独守空房还是空巅峰计划收款方"},insured:{type:"被保人",name:"",mobile:"",desc:""}}),q=()=>{g("cancel")},L=()=>{g("confirm")};return s([()=>b.data,b.type],(([e,a])=>{var l,s,i;e&&(Object.assign(V.value.holder,e.holder),Object.assign(V.value.insured,null==(l=null==e?void 0:e.insuredList)?void 0:l[0]),k.value.mobile=null==(i=null==(s=V.value)?void 0:s[`${b.type}`])?void 0:i.mobile)}),{immediate:!0,deep:!0}),(e,a)=>{const l=f,s=p,g=y,b=h;return i(),o(b,{show:S.value,"onUpdate:show":a[2]||(a[2]=e=>S.value=e),class:"popup-check-mobile",closeable:!1,"close-on-click-overlay":!1},{default:n((()=>[u("div",W,[u("div",Y,[u("span",{class:"clear-all",onClick:q}," 取消 "),u("span",K,r(`${V.value[C.value].type}手机号验证`),1),u("span",{class:"close",onClick:L},"确认")]),u("div",Q,[u("h3",null,r(`尊敬的${V.value[C.value].type}:${V.value[C.value].name}`),1),u("p",null,r(V.value[C.value].desc),1),u("h3",null,r(`${V.value[C.value].type}手机号验证 ${t($)(V.value[C.value].mobile||"")}`),1),d(g,{model:k.value},{default:n((()=>[v(d(l,{modelValue:k.value.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value.mobile=e),label:"被保人手机号",name:"mobile",maxlength:"11",required:""},null,8,["modelValue"]),[[c,!1]]),d(s,{modelValue:k.value.verifyCode,"onUpdate:modelValue":a[1]||(a[1]=e=>k.value.verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode","send-s-m-s-code":t(m),rules:""},null,8,["modelValue","send-s-m-s-code"])])),_:1},8,["model"])])])])),_:1},8,["show"])}}}),ee=g([{label:"签名完成",value:1},{label:"去签名",value:2},{label:"认证失败，请联系内勤人员",value:3}]);const ae={class:"page-verify-wrap"},le={key:0,class:"header"},se={class:"sign-list"},ie={class:"inner-cell"},oe={class:"inner-cell"},ne={class:"footer-button"},ue=e({name:"verify"}),re=e({...ue,setup(e){const s=b(),r=S(),{orderNo:v,tenantId:c}=s.query,h=l(!1),g=l(!1),$=l(),W=l({holder:{},insuredList:[{}]}),Y=B(),K=l(!1),Q=l({sign:[],verify:[],scribing:""}),X=l({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},verifyStatus:2},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2}}),ue=l("agent"),re=a((()=>e=>Q.value.sign.includes(e)||Q.value.verify.includes(e))),te=a((()=>e=>X.value[e].isSign||X.value[e].isVerify)),de=a((()=>e=>X.value[e].isShareSign)),ve=e=>{ue.value=e,K.value=!0},ce=()=>{z(Y.value).then((({code:e,data:a})=>{"10000"===e&&a&&j("双录已完成")}))},me=()=>{K.value=!1},fe=()=>{let e="";e=("agent"===ue.value||(ue.value,X.value[ue.value].isVerify),G.infoPreview),r.push({path:e,query:{...s.query,objectType:ue.value}})},pe=()=>{const{holder:e,insuredList:a,extInfo:l}=Y.value;if(h.value){if(!l.agentAuthFlag)return void j("请先完成代理人签名")}else if([l.agentAuthFlag,e.isCert,a[0].isCert].includes(w.NO))return void j("请先完成签名");const i=Object.assign(Y.value,{extInfo:{...Y.value.extInfo,pageCode:J.SIGN,buttonCode:M.SIGN}});T(i,((e,a)=>{a===I.JUMP_PAGE?U(e.nextPageCode,s.query):a===I.JUMP_ALERT&&e.alertType===_.PAY_AUTH&&A.confirm({title:"投保提示",message:"根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。",confirmButtonText:"去鉴权"}).then((()=>{r.push({path:G.payAuth,query:s.query})}))}))};return k((()=>{(async()=>{let e={};H({orderNo:v,tenantId:c}).then((({code:e,data:a})=>{if("10000"===e){const{doubleRecordFlag:e,doubleRecordStatus:l}=a;h.value=!!e,g.value=!!l}})),await E({orderNo:v,tenantId:c}).then((({code:a,data:l})=>{var s,i;if("10000"===a){Object.assign(Y.value,l);const{agentAuthFlag:a}=l.extInfo;W.value=l,e=R(l.insuredList[0].productList),X.value.agent.verifyStatus=a,X.value.holder.verifyStatus=l.holder.isCert,X.value.insured.verifyStatus=null==(i=null==(s=l.insuredList)?void 0:s[0])?void 0:i.isCert}})),await D(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=x(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&Q.value.sign.push(a.code),"1"===a.code?X.value.agent.isSign=!0:"2"===a.code?X.value.holder.isSign=!0:"3"===a.code?X.value.insured.isSign=!0:"4"===a.code?X.value.holder.isShareSign=!0:"5"===a.code&&(X.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&Q.value.verify.push(a.code),"1"===a.code?X.value.holder.isVerify=!0:"2"===a.code&&(X.value.insured.isVerify=!0)}))}))}}))})()})),(e,a)=>{const l=P,s=F,r=O,v=N;return i(),C("div",ae,[d(l),t(h)?(i(),C("div",le,[d(s,{type:"warning",content:"为保障您的合法权益，当前保单需要进行双录"})])):V("",!0),u("div",se,[t(te)("agent")?(i(),o(r,{key:0,title:"代理人签名",required:t(re)("agent"),"is-link":"",value:t(ee)[t(X).agent.verifyStatus],onClick:a[0]||(a[0]=e=>ve("agent"))},null,8,["required","value"])):V("",!0),t(h)?(i(),o(t(y),{key:2,ref_key:"formRef",ref:$,model:t(W)},{default:n((()=>[d(t(f),{modelValue:t(W).holder.mobile,"onUpdate:modelValue":a[3]||(a[3]=e=>t(W).holder.mobile=e),label:"投保人手机号",name:"holder.mobile",maxlength:"11",required:""},null,8,["modelValue"]),d(t(p),{modelValue:t(W).holder.verifyCode,"onUpdate:modelValue":a[4]||(a[4]=e=>t(W).holder.verifyCode=e),"related-name":"holder.mobile",label:"验证码",maxlength:"6",name:"holder.verifyCode","send-s-m-s-code":t(m),rules:"",required:""},null,8,["modelValue","send-s-m-s-code"]),d(t(f),{modelValue:t(W).insuredList[0].mobile,"onUpdate:modelValue":a[5]||(a[5]=e=>t(W).insuredList[0].mobile=e),label:"被保人手机号",name:"insuredList.0.mobile",maxlength:"11",required:""},null,8,["modelValue"]),d(t(p),{modelValue:t(W).insuredList[0].verifyCode,"onUpdate:modelValue":a[6]||(a[6]=e=>t(W).insuredList[0].verifyCode=e),label:"验证码",maxlength:"6",name:"insuredList.0.verifyCode","related-name":"insuredList.0.mobile","send-s-m-s-code":t(m),required:""},null,8,["modelValue","send-s-m-s-code"])])),_:1},8,["model"])):(i(),C(q,{key:1},[t(te)("holder")?(i(),o(r,{key:0,title:"投保人签名",required:t(re)("holder")},{value:n((()=>[u("div",ie,[t(de)("holder")?(i(),o(r,{key:0,"is-link":"",value:"分享空签邀约"})):V("",!0),d(r,{"is-link":"",value:t(ee)[t(X).holder.verifyStatus],onClick:a[1]||(a[1]=e=>ve("holder"))},null,8,["value"])])])),_:1},8,["required"])):V("",!0),t(te)("insured")?(i(),o(r,{key:1,title:"被保人签名",required:t(re)("insured")},{value:n((()=>[u("div",oe,[t(de)("insured")?(i(),o(r,{key:0,"is-link":"",value:"分享空签邀约"})):V("",!0),d(r,{"is-link":"",value:t(ee)[t(X).insured.verifyStatus],onClick:a[2]||(a[2]=e=>ve("insured"))},null,8,["value"])])])),_:1},8,["required"])):V("",!0)],64)),t(h)?(i(),o(r,{key:3,title:"保单双录",required:"","is-link":"",value:"去双录",onClick:ce})):V("",!0)]),u("div",ne,[d(v,{type:"primary",onClick:pe},{default:n((()=>[L("下一步")])),_:1})]),d(Z,{type:t(ue),show:t(K),data:t(Y),onCancel:me,onConfirm:fe},null,8,["type","show","data"])])}}});export{re as default};
