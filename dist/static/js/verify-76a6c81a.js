import{d as e,j as a,k as l,B as s,o as i,m as o,w as n,a as r,e as u,u as d,b as t,V as c,W as v,cj as m,ck as f,bm as p,cl as h,cm as y,aB as g,ao as b,cn as S,i as V,h as k,a6 as C,aj as q,O as j,c as w,f as x,F as I,p as $,a8 as _,co as L,bW as M,cp as O,cq as U,b_ as E,cr as P,cs as F,bx as N,ah as T,bt as R,T as D,aL as A,a9 as B,aa as H,bq as Y,ag as G}from"./index-7c0189e6.js";import{P as W}from"./index-66b95458.js";import{n as z}from"./nextStep-1f98b659.js";import{c as J}from"./format-666c4946.js";import{g as K,m as Q}from"./trial-ed17fa24.js";import{p as Z}from"./utils-b180c9d2.js";import{u as X}from"./useOrder-625e0cd3.js";import{M as ee,P as ae,a as le,B as se}from"./constants-4b08cf92.js";import{d as ie,q as oe}from"./verify-f0ddf94f.js";import"./core-ef1afbeb.js";import"./utils-a3300591.js";import"./infoCollection-7afe7b5f.js";import"./trial-beb3ef73.js";const ne={class:"popup-container"},re={class:"popup-header"},ue={class:"title"},de={class:"popup-body"},te=e({name:"checkCodePopup"}),ce=e({...te,props:{show:{type:Boolean,default:!1},type:{default:"agent"},data:{default:()=>({})}},emits:["cancel","confirm"],setup(e,{emit:b}){const S=e,V=a(),k=l((()=>S.show)),C=a({mobile:"",verifyCode:""}),q=l((()=>S.type)),j=a({holder:{type:"投保人",name:"",mobile:"",desc:""},agent:{type:"代理人",name:"",mobile:"",desc:"色卡上会计核算看回放独守空房还是空巅峰计划收款方"},insured:{type:"被保人",name:"",mobile:"",desc:""}}),w=()=>{b("cancel")},x=()=>{V.value.validate().then((()=>{b("confirm")}))};return s([()=>S.data,S.type],(([e,a])=>{var l,s,i;e&&(Object.assign(j.value.holder,e.holder),Object.assign(j.value.insured,null==(l=null==e?void 0:e.insuredList)?void 0:l[0]),C.value.mobile=null==(i=null==(s=j.value)?void 0:s[S.type])?void 0:i.mobile)}),{immediate:!0,deep:!0}),(e,a)=>{const l=p,s=h,b=y,S=g;return i(),o(S,{show:k.value,"onUpdate:show":a[2]||(a[2]=e=>k.value=e),class:"popup-check-mobile",closeable:!1,"close-on-click-overlay":!1},{default:n((()=>[r("div",ne,[r("div",re,[r("span",{class:"clear-all",onClick:w}," 取消 "),r("span",ue,u(`${j.value[q.value].type}手机号验证`),1),r("span",{class:"close",onClick:x},"确认")]),r("div",de,[r("h3",null,u(`尊敬的${j.value[q.value].type}:${j.value[q.value].name}`),1),r("p",null,u(j.value[q.value].desc),1),r("h3",null,u(`${j.value[q.value].type}手机号验证 ${d(J)(j.value[q.value].mobile||"")}`),1),t(b,{ref_key:"formRef",ref:V,"validate-method":"toast",model:C.value},{default:n((()=>[c(t(l,{modelValue:C.value.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>C.value.mobile=e),label:"被保人手机号",name:"mobile",maxlength:"11",rules:[{required:!0,message:"请输入手机号"}]},null,8,["modelValue"]),[[v,!1]]),t(s,{modelValue:C.value.verifyCode,"onUpdate:modelValue":a[1]||(a[1]=e=>C.value.verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode",rules:[{required:!0,message:"请输入验证码"}],"send-s-m-s-code":d(m),"check-s-m-s-code":d(f)},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])])),_:1},8,["model"])])])])),_:1},8,["show"])}}}),ve=b([{label:"签名完成",value:1},{label:"去签名",value:2},{label:"认证失败，请联系内勤人员",value:3}]),me=2,fe=b([{label:"去双录",value:1},{label:"双录完成",value:me},{label:"双录失败",value:3}]);const pe={class:"page-verify-wrap"},he={class:"sign-list"},ye={class:"inner-cell"},ge={class:"inner-cell"},be={class:"inner-cell"},Se={class:"inner-cell"},Ve={class:"footer-button"},ke=e({name:"verify"}),Ce=e({...ke,setup(e){const s=S(),u=V(),c=k(),{orderNo:v,tenantId:g}=u.query,b=a(!1),J=a(),ne=a(!1),re=a(),ue=a({holderMobile:"",holderVerifyCode:"",insuredMobile:"",insuredVerifyCode:""}),de=X(),te=a(!1),ke=a({sign:[],verify:[],scribing:""}),Ce=a(""),qe=a({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},verifyStatus:2},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2}}),je=a("agent"),we=l((()=>e=>ke.value.sign.includes(e)||ke.value.verify.includes(e))),xe=l((()=>qe.value.agent.verifyStatus!==C.YES)),Ie=l((()=>{const{insuredList:e}=de.value||{},{age:a,relationToHolder:l}=e[0]||{};return!(a<18||`${l}`===q.CERT)})),$e=l((()=>e=>qe.value[e].isSign||qe.value[e].isVerify)),_e=l((()=>e=>qe.value[e].isShareSign)),Le=e=>{var a;const{holder:l,insured:s}=de.value;let i={name:l.name,gender:`${L[l.gender]}士`};"insured"===e&&(i={name:null==s?void 0:s[0].name,gender:`${L[null==(a=null==s?void 0:s[0])?void 0:a.gender]}士`}),M({messageType:ee.HOLDER,orderNo:v,tenantId:g}),O({shareType:0,title:`${U.sign.title}（${E[e.toLocaleUpperCase()]}）`,desc:U.sign.desc.replace("{name}",`${i.name||""}${i.gender||""},代理人`),url:`${window.location.href}&objectType=${e}&nextPageCode=infoPreview`.replace("/verify","/phoneVerify"),imageUrl:"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/lian_logo.png?OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Expires=1697288114&Signature=S87PMeDRxltLovmmHVTeiHoew1c%3D"})},Me=e=>{je.value=e,"agent"!==e?xe.value||(te.value=!0):c.push({path:ae.agentSign,query:u.query})},Oe=()=>{xe.value||J.value===me||ie(de.value).then((({code:e,data:a})=>{"10000"===e&&a&&Ce.value&&P(Ce).then((e=>{e.isInstall===C.YES&&F(Ce)}))}))},Ue=()=>{te.value=!1},Ee=()=>{let e="";e="agent"===je.value?ae.infoPreview:(je.value,qe.value[je.value].isVerify?ae.verifyFace:ae.infoPreview),s.set(`${N}_orderDetail`,de.value),c.push({path:e,query:{...u.query,objectType:je.value,isFirst:1}})},Pe=async()=>{let e={};const a=T.get(`${N}_deviceInfo`);oe({orderNo:v,tenantId:g}).then((({code:e,data:l})=>{if("10000"===e){const{doubleRecordFlag:e,doubleRecordStatus:s}=l;b.value=e===C.YES,J.value=s,a&&(Ce.value=l.andUrl||"","iOS"===a.platform&&(Ce.value=l.iosUrl||""))}})),await K({orderNo:v,tenantId:g}).then((({code:a,data:l})=>{var s,i,o;if("10000"===a){Object.assign(de.value,l);const{agentAuthFlag:a}=l.extInfo,{mobile:n}=l.holder,{mobile:r}=(null==(s=l.insuredList)?void 0:s[0])||{};Object.assign(ue.value,{holderMobile:n,insuredMobile:r}),e=Z(l.insuredList[0].productList),qe.value.agent.verifyStatus=a,qe.value.holder.verifyStatus=l.holder.isCert,qe.value.insured.verifyStatus=null==(o=null==(i=l.insuredList)?void 0:i[0])?void 0:o.isCert}})),await Q(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=R(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&ke.value.sign.push(a.code),"1"===a.code?qe.value.agent.isSign=!0:"2"===a.code?qe.value.holder.isSign=!0:"3"===a.code?qe.value.insured.isSign=!0:"4"===a.code?qe.value.holder.isShareSign=!0:"5"===a.code&&(qe.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&ke.value.verify.push(a.code),"1"===a.code?qe.value.holder.isVerify=!0:"2"===a.code&&(qe.value.insured.isVerify=!0)}))}))}})),ne.value=!1},Fe=async()=>{var e;const{holder:a,insuredList:l,extInfo:s}=de.value;if(b.value){if(s.agentAuthFlag!==C.YES)return void D("代理人签名未完成")}else{if(s.agentAuthFlag===C.NO)return void D("代理人签名未完成");if(a.isCert===C.NO)return void D("投保人签名未完成");if(l[0].isCert===C.NO)return void D("被保人签名未完成")}await(null==(e=re.value)?void 0:e.validate());const i=Object.assign(de.value,{extInfo:{...de.value.extInfo,pageCode:le.SIGN,buttonCode:se.SIGN}});z(i,((e,a)=>{a===A.JUMP_PAGE&&B(e.nextPageCode,u.query)}),u)};return j((()=>{Pe()})),(e,a)=>{const l=H,s=Y,u=W,c=G;return i(),w("div",pe,[t(l),t(u,{modelValue:d(ne),"onUpdate:modelValue":a[9]||(a[9]=e=>$(ne)?ne.value=e:null),onRefresh:Pe},{default:n((()=>[r("div",he,[d($e)("agent")?(i(),o(s,{key:0,title:"代理人签名",required:d(we)("agent")},{value:n((()=>[r("div",ye,[t(s,{"is-link":"",value:d(ve)[d(qe).agent.verifyStatus],onClick:a[0]||(a[0]=e=>Me("agent"))},null,8,["value"])])])),_:1},8,["required"])):x("",!0),d(b)?(i(),o(d(y),{key:2,ref_key:"formRef",ref:re,"validate-method":"toast",model:d(ue)},{default:n((()=>[t(d(p),{modelValue:d(ue).holderMobile,"onUpdate:modelValue":a[5]||(a[5]=e=>d(ue).holderMobile=e),label:"投保人手机号",name:"holderMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),t(d(h),{modelValue:d(ue).holderVerifyCode,"onUpdate:modelValue":a[6]||(a[6]=e=>d(ue).holderVerifyCode=e),"related-name":"holderMobile",label:"验证码",maxlength:"6",name:"holderVerifyCode","send-s-m-s-code":d(m),"check-s-m-s-code":d(f),required:""},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"]),d(Ie)?(i(),w(I,{key:0},[t(d(p),{modelValue:d(ue).insuredMobile,"onUpdate:modelValue":a[7]||(a[7]=e=>d(ue).insuredMobile=e),label:"被保人手机号",name:"insuredMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),t(d(h),{modelValue:d(ue).insuredVerifyCode,"onUpdate:modelValue":a[8]||(a[8]=e=>d(ue).insuredVerifyCode=e),label:"验证码",maxlength:"6",name:"insuredVerifyCode","related-name":"insuredMobile","send-s-m-s-code":d(m),"check-s-m-s-code":d(f),required:""},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])],64)):x("",!0)])),_:1},8,["model"])):(i(),w(I,{key:1},[d($e)("holder")?(i(),o(s,{key:0,title:"投保人签名",required:d(we)("holder")},{value:n((()=>[r("div",ge,[d(_e)("holder")?(i(),o(s,{key:0,"value-class":""+(d(xe)?"disable":""),"is-link":"",value:"分享空签邀约",onClick:a[1]||(a[1]=e=>Le("holder"))},null,8,["value-class"])):x("",!0),t(s,{"is-link":"",value:d(ve)[d(qe).holder.verifyStatus],"value-class":""+(d(xe)?"disable":""),onClick:a[2]||(a[2]=e=>Me("holder"))},null,8,["value","value-class"])])])),_:1},8,["required"])):x("",!0),d($e)("insured")&&d(Ie)?(i(),o(s,{key:1,title:"被保人签名",required:d(we)("insured")},{value:n((()=>[r("div",be,[d(_e)("insured")?(i(),o(s,{key:0,"value-class":""+(d(xe)?"disable":""),"is-link":"",value:"分享空签邀约",onClick:a[3]||(a[3]=e=>Le("insured"))},null,8,["value-class"])):x("",!0),t(s,{"is-link":"","value-class":""+(d(xe)?"disable":""),value:d(ve)[d(qe).insured.verifyStatus],onClick:a[4]||(a[4]=e=>Me("insured"))},null,8,["value-class","value"])])])),_:1},8,["required"])):x("",!0)],64)),d(b)?(i(),o(s,{key:3,title:"保单双录",required:""},{value:n((()=>[r("div",Se,[t(s,{"is-link":"","value-class":""+(d(xe)?"disable":""),value:d(fe)[d(J)],onClick:Oe},null,8,["value-class","value"])])])),_:1})):x("",!0)])])),_:1},8,["modelValue"]),r("div",Ve,[t(c,{type:"primary",onClick:Fe},{default:n((()=>[_("下一步")])),_:1})]),d(te)?(i(),o(ce,{key:0,type:d(je),show:d(te),data:d(de),onCancel:Ue,onConfirm:Ee},null,8,["type","show","data"])):x("",!0)])}}});export{Ce as default};
