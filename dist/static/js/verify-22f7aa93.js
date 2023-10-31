import{d as e,j as a,k as l,z as s,o as i,m as o,w as n,a as u,e as r,u as d,b as t,V as c,W as v,cm as m,cn as f,bp as p,co as h,cp as g,aD as y,aq as b,cq as S,i as k,h as V,a6 as C,al as q,aG as j,c as w,f as x,F as I,p as $,a8 as M,cr as _,bY as L,cs as U,ct as O,c0 as E,cu as N,cv as P,ag as F,aj as T,bw as D,T as R,aM as A,a9 as Y,aa as G,bt as H,ai as z}from"./index-01270b83.js";import{P as B}from"./index-aec57fc9.js";import{n as W}from"./nextStep-c9c178fd.js";import{c as J}from"./format-31cde443.js";import{g as K,m as Q}from"./trial-65c717b1.js";import{p as Z}from"./utils-8a3e6480.js";import{u as X}from"./useOrder-f9592c3c.js";import{M as ee,P as ae,a as le,B as se}from"./constants-4b08cf92.js";import{d as ie,q as oe}from"./verify-7e03b77b.js";import"./core-e975e28a.js";import"./utils-600e8464.js";import"./infoCollection-f09007f3.js";import"./trial-4c3d8912.js";const ne={class:"popup-container"},ue={class:"popup-header"},re={class:"title"},de={class:"popup-body"},te=e({name:"checkCodePopup"}),ce=e({...te,props:{show:{type:Boolean,default:!1},type:{default:"agent"},data:{default:()=>({})}},emits:["cancel","confirm"],setup(e,{emit:b}){const S=e,k=a(),V=l((()=>S.show)),C=a({mobile:"",verifyCode:""}),q=l((()=>S.type)),j=a({holder:{type:"投保人",name:"",mobile:"",desc:""},agent:{type:"代理人",name:"",mobile:"",desc:"色卡上会计核算看回放独守空房还是空巅峰计划收款方"},insured:{type:"被保人",name:"",mobile:"",desc:""}}),w=()=>{b("cancel")},x=()=>{k.value.validate().then((()=>{b("confirm")}))};return s([()=>S.data,S.type],(([e,a])=>{var l,s,i;e&&(Object.assign(j.value.holder,e.holder),Object.assign(j.value.insured,null==(l=null==e?void 0:e.insuredList)?void 0:l[0]),C.value.mobile=null==(i=null==(s=j.value)?void 0:s[S.type])?void 0:i.mobile)}),{immediate:!0,deep:!0}),(e,a)=>{const l=p,s=h,b=g,S=y;return i(),o(S,{show:V.value,"onUpdate:show":a[2]||(a[2]=e=>V.value=e),class:"popup-check-mobile",closeable:!1,"close-on-click-overlay":!1},{default:n((()=>[u("div",ne,[u("div",ue,[u("span",{class:"clear-all",onClick:w}," 取消 "),u("span",re,r(`${j.value[q.value].type}手机号验证`),1),u("span",{class:"close",onClick:x},"确认")]),u("div",de,[u("h3",null,r(`尊敬的${j.value[q.value].type}:${j.value[q.value].name}`),1),u("p",null,r(j.value[q.value].desc),1),u("h3",null,r(`${j.value[q.value].type}手机号验证 ${d(J)(j.value[q.value].mobile||"")}`),1),t(b,{ref_key:"formRef",ref:k,"validate-method":"toast",model:C.value},{default:n((()=>[c(t(l,{modelValue:C.value.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>C.value.mobile=e),label:"被保人手机号",name:"mobile",maxlength:"11",rules:[{required:!0,message:"请输入手机号"}]},null,8,["modelValue"]),[[v,!1]]),t(s,{modelValue:C.value.verifyCode,"onUpdate:modelValue":a[1]||(a[1]=e=>C.value.verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode",rules:[{required:!0,message:"请输入验证码"}],"send-s-m-s-code":d(m),"check-s-m-s-code":d(f)},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])])),_:1},8,["model"])])])])),_:1},8,["show"])}}}),ve=b([{label:"签名完成",value:1},{label:"去签名",value:2},{label:"认证失败，请联系内勤人员",value:3}]),me=2,fe=b([{label:"去双录",value:1},{label:"双录完成",value:me},{label:"双录失败",value:3}]);const pe={class:"page-verify-wrap"},he={key:0,class:"sign-list"},ge={class:"inner-cell"},ye={class:"inner-cell"},be={class:"inner-cell"},Se={class:"inner-cell"},ke={class:"footer-button"},Ve=e({name:"verify"}),Ce=e({...Ve,setup(e){const s=S(),r=k(),c=V(),{orderNo:v,tenantId:y}=r.query,b=a(!1),J=a(),ne=a(!1),ue=a(!1),re=a(),de=a({holderMobile:"",holderVerifyCode:"",insuredMobile:"",insuredVerifyCode:""}),te=X(),Ve=a(!1),Ce=a({sign:[],verify:[],scribing:""}),qe=a(""),je=a({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},verifyStatus:2},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2}}),we=a("agent"),xe=l((()=>e=>Ce.value.sign.includes(e)||Ce.value.verify.includes(e))),Ie=l((()=>je.value.agent.verifyStatus!==C.YES)),$e=l((()=>{const{insuredList:e}=te.value||{},{age:a,relationToHolder:l}=e[0]||{};return!(a<18||`${l}`===q.CERT)})),Me=l((()=>e=>je.value[e].isSign||je.value[e].isVerify)),_e=l((()=>e=>je.value[e].isShareSign)),Le=e=>{var a;const{holder:l,insured:s}=te.value;let i={name:l.name,gender:`${_[l.gender]}士`};"insured"===e&&(i={name:null==s?void 0:s[0].name,gender:`${_[null==(a=null==s?void 0:s[0])?void 0:a.gender]}士`}),L({messageType:ee.HOLDER,orderNo:v,tenantId:y}),U({shareType:0,title:`${O.sign.title}（${E[e.toLocaleUpperCase()]}）`,desc:O.sign.desc.replace("{name}",`${i.name||""}${i.gender||""},代理人`),url:`${window.location.href}&objectType=${e}&nextPageCode=infoPreview`.replace("/verify","/phoneVerify"),imageUrl:"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/lian_logo.png?OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Expires=1697288114&Signature=S87PMeDRxltLovmmHVTeiHoew1c%3D"})},Ue=e=>{we.value=e,"agent"!==e?Ie.value||(Ve.value=!0):c.push({path:ae.agentSign,query:r.query})},Oe=()=>{var e;Ie.value||J.value===me||null==(e=re.value)||e.validate().then((()=>{ie(te.value).then((({code:e,data:a})=>{var l;if("10000"===e&&a&&(console.log("schemaUrl.value",qe.value),qe.value)){const e=null==(l=qe.value.match(/(.*):\/\//))?void 0:l[1];console.log("packageName",e),N({packageName:e,scheme:qe.value}).then((e=>{e.isInstall===`${C.YES}`&&P(qe.value)}))}}))}))},Ee=()=>{Ve.value=!1},Ne=()=>{let e="";e="agent"===we.value?ae.infoPreview:(we.value,je.value[we.value].isVerify?ae.verifyFace:ae.infoPreview),s.set(`${F}_orderDetail`,te.value),c.push({path:e,query:{...r.query,objectType:we.value,isFirst:1}})},Pe=async()=>{let e={};const a=T.get(`${F}_deviceInfo`);await K({orderNo:v,tenantId:y}).then((({code:a,data:l})=>{var s,i,o;if("10000"===a){Object.assign(te.value,l);const{agentAuthFlag:a}=l.extInfo,{mobile:n}=l.holder,{mobile:u}=(null==(s=l.insuredList)?void 0:s[0])||{};Object.assign(de.value,{holderMobile:n,insuredMobile:u}),e=Z(l.insuredList[0].productList),je.value.agent.verifyStatus=a,je.value.holder.verifyStatus=l.holder.isCert,je.value.insured.verifyStatus=null==(o=null==(i=l.insuredList)?void 0:i[0])?void 0:o.isCert}})),await Q(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=D(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&Ce.value.sign.push(a.code),"1"===a.code?je.value.agent.isSign=!0:"2"===a.code?je.value.holder.isSign=!0:"3"===a.code?je.value.insured.isSign=!0:"4"===a.code?je.value.holder.isShareSign=!0:"5"===a.code&&(je.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&Ce.value.verify.push(a.code),"1"===a.code?je.value.holder.isVerify=!0:"2"===a.code&&(je.value.insured.isVerify=!0)}))}))}})),await oe({orderNo:v,tenantId:y}).then((({code:e,data:l})=>{if("10000"===e){const{doubleRecordFlag:e,doubleRecordStatus:s}=l;b.value=e===C.YES,J.value=s,ue.value=!0,a&&(qe.value=l.andUrl||"","iOS"===a.platform&&(qe.value=l.iosUrl||""))}})),ne.value=!1},Fe=async()=>{var e;const{holder:a,insuredList:l,extInfo:s}=te.value;if(b.value){if(s.agentAuthFlag!==C.YES)return void R("代理人签名未完成")}else{if(s.agentAuthFlag===C.NO)return void R("代理人签名未完成");if(a.isCert===C.NO)return void R("投保人签名未完成");if(l[0].isCert===C.NO)return void R("被保人签名未完成")}await(null==(e=re.value)?void 0:e.validate());const i=Object.assign(te.value,{extInfo:{...te.value.extInfo,pageCode:le.SIGN,buttonCode:se.SIGN}});W(i,((e,a)=>{a===A.JUMP_PAGE&&Y(e.nextPageCode,r.query)}),r)};return j((()=>{Pe()})),(e,a)=>{const l=G,s=H,r=B,c=z;return i(),w("div",pe,[t(l),t(r,{modelValue:d(ne),"onUpdate:modelValue":a[9]||(a[9]=e=>$(ne)?ne.value=e:null),onRefresh:Pe},{default:n((()=>[d(ue)?(i(),w("div",he,[d(Me)("agent")?(i(),o(s,{key:0,title:"代理人签名",required:d(xe)("agent")},{value:n((()=>[u("div",ge,[t(s,{"is-link":"",value:d(ve)[d(je).agent.verifyStatus],onClick:a[0]||(a[0]=e=>Ue("agent"))},null,8,["value"])])])),_:1},8,["required"])):x("",!0),d(b)?(i(),o(d(g),{key:2,ref_key:"formRef",ref:re,model:d(de)},{default:n((()=>[t(d(p),{modelValue:d(de).holderMobile,"onUpdate:modelValue":a[5]||(a[5]=e=>d(de).holderMobile=e),label:"投保人手机号",name:"holderMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),t(d(h),{modelValue:d(de).holderVerifyCode,"onUpdate:modelValue":a[6]||(a[6]=e=>d(de).holderVerifyCode=e),"related-name":"holderMobile",label:"验证码",maxlength:"6",name:"holderVerifyCode","send-s-m-s-code":d(m),"check-s-m-s-code":d(f),required:""},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"]),d($e)?(i(),w(I,{key:0},[t(d(p),{modelValue:d(de).insuredMobile,"onUpdate:modelValue":a[7]||(a[7]=e=>d(de).insuredMobile=e),label:"被保人手机号",name:"insuredMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),t(d(h),{modelValue:d(de).insuredVerifyCode,"onUpdate:modelValue":a[8]||(a[8]=e=>d(de).insuredVerifyCode=e),label:"验证码",maxlength:"6",name:"insuredVerifyCode","related-name":"insuredMobile","send-s-m-s-code":d(m),"check-s-m-s-code":d(f),rules:[{required:!0,message:"请输入验证码"}]},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])],64)):x("",!0)])),_:1},8,["model"])):(i(),w(I,{key:1},[d(Me)("holder")?(i(),o(s,{key:0,title:"投保人签名",required:d(xe)("holder")},{value:n((()=>[u("div",ye,[d(_e)("holder")?(i(),o(s,{key:0,"value-class":""+(d(Ie)?"disable":""),"is-link":"",value:"分享空签邀约",onClick:a[1]||(a[1]=e=>Le("holder"))},null,8,["value-class"])):x("",!0),t(s,{"is-link":"",value:d(ve)[d(je).holder.verifyStatus],"value-class":""+(d(Ie)?"disable":""),onClick:a[2]||(a[2]=e=>Ue("holder"))},null,8,["value","value-class"])])])),_:1},8,["required"])):x("",!0),d(Me)("insured")&&d($e)?(i(),o(s,{key:1,title:"被保人签名",required:d(xe)("insured")},{value:n((()=>[u("div",be,[d(_e)("insured")?(i(),o(s,{key:0,"value-class":""+(d(Ie)?"disable":""),"is-link":"",value:"分享空签邀约",onClick:a[3]||(a[3]=e=>Le("insured"))},null,8,["value-class"])):x("",!0),t(s,{"is-link":"","value-class":""+(d(Ie)?"disable":""),value:d(ve)[d(je).insured.verifyStatus],onClick:a[4]||(a[4]=e=>Ue("insured"))},null,8,["value-class","value"])])])),_:1},8,["required"])):x("",!0)],64)),d(b)?(i(),o(s,{key:3,title:"保单双录",required:""},{value:n((()=>[u("div",Se,[t(s,{"is-link":"","value-class":""+(d(Ie)?"disable":""),value:d(fe)[d(J)],onClick:Oe},null,8,["value-class","value"])])])),_:1})):x("",!0)])):x("",!0)])),_:1},8,["modelValue"]),u("div",ke,[t(c,{type:"primary",onClick:Fe},{default:n((()=>[M("下一步")])),_:1})]),d(Ve)?(i(),o(ce,{key:0,type:d(we),show:d(Ve),data:d(te),onCancel:Ee,onConfirm:Ne},null,8,["type","show","data"])):x("",!0)])}}});export{Ce as default};
