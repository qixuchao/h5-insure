import{d as e,j as a,k as l,E as s,o as i,p as o,w as n,a as u,e as r,u as t,b as d,bg as c,bh as v,cz as m,cA as f,bL as h,cB as p,cC as g,au as y,ae as b,cD as S,i as k,h as C,cd as V,bi as I,aY as q,ah as w,bc as L,l as _,c as j,f as F,F as U,q as x,v as D,y as N,cE as $,cf as A,cF as E,cG as O,cH as M,cI as T,cJ as P,cK as R,T as B,af as H,b4 as Y,bO as G,cL as z,bb as J,ba as K,bk as Q,a_ as W,a$ as Z,bR as X,b3 as ee,cg as ae,ch as le,cj as se,ci as ie}from"./index-83a8b446.js";import{P as oe}from"./index-414ac469.js";import{n as ne}from"./nextStep-1a3ddd27.js";import{c as ue}from"./format-31cde443.js";import{g as re,m as te}from"./trial-e48acfbd.js";import{p as de}from"./utils-89a8b2ff.js";import{u as ce}from"./useOrder-5d8cb7c9.js";import{c as ve}from"./order-ca254a7f.js";import"./core-3b1d23d8.js";import"./utils-7bac2bc5.js";import"./infoCollection-207a44bb.js";import"./trial-166a0af0.js";import"./utils-1b63caf2.js";import"./createProposal-4bee1c8e.js";import"./PolicyInfo-9498e98e.js";import"./cloneDeep-d236c69c.js";const me={class:"popup-container"},fe={class:"popup-header"},he={class:"title"},pe={class:"popup-body"},ge=e({name:"checkCodePopup"}),ye=e({...ge,props:{show:{type:Boolean,default:!1},type:{default:"agent"},data:{default:()=>({})}},emits:["cancel","confirm"],setup(e,{emit:b}){const S=e,k=a(),C=l((()=>S.show)),V=a({mobile:"",verifyCode:""}),I=l((()=>S.type)),q=a({holder:{type:"投保人",name:"",mobile:"",desc:""},agent:{type:"销售人员",name:"",mobile:"",desc:"色卡上会计核算看回放独守空房还是空巅峰计划收款方"},insured:{type:"被保险人",name:"",mobile:"",desc:""}}),w=()=>{b("cancel")},L=()=>{k.value.validate().then((()=>{b("confirm")}))};return s([()=>S.data,S.type],(([e,a])=>{var l,s,i;e&&(Object.assign(q.value.holder,e.holder),Object.assign(q.value.insured,null==(l=null==e?void 0:e.insuredList)?void 0:l[0]),V.value.mobile=null==(i=null==(s=q.value)?void 0:s[S.type])?void 0:i.mobile)}),{immediate:!0,deep:!0}),(e,a)=>{const l=h,s=p,b=g,S=y;return i(),o(S,{show:C.value,"onUpdate:show":a[2]||(a[2]=e=>C.value=e),class:"popup-check-mobile",closeable:!1,"close-on-click-overlay":!1},{default:n((()=>[u("div",me,[u("div",fe,[u("span",{class:"clear-all",onClick:w}," 取消 "),u("span",he,r(`${q.value[I.value].type}手机号验证`),1),u("span",{class:"close",onClick:L},"确认")]),u("div",pe,[u("h3",null,r(`尊敬的${q.value[I.value].type}:${q.value[I.value].name}`),1),u("p",null,r(q.value[I.value].desc),1),u("h3",null,r(`${q.value[I.value].type}手机号验证 ${t(ue)(q.value[I.value].mobile||"")}`),1),d(b,{ref_key:"formRef",ref:k,"validate-method":"toast",model:V.value},{default:n((()=>[c(d(l,{modelValue:V.value.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value.mobile=e),label:"被保险人手机号",name:"mobile",maxlength:"11",rules:[{required:!0,message:"请输入手机号"}]},null,8,["modelValue"]),[[v,!1]]),d(s,{modelValue:V.value.verifyCode,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value.verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode",rules:[{required:!0,message:"请输入验证码"}],"send-s-m-s-code":t(m),"check-s-m-s-code":t(f)},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])])),_:1},8,["model"])])])])),_:1},8,["show"])}}}),be=b([{label:"签名完成",value:1},{label:"本地签名",value:2},{label:"认证失败，请联系内勤人员",value:3}]),Se={DUAL:1,DUALING:2,DUAL_FINISH:3,DUAL_FAILED:4},ke=b([{label:"去双录",value:Se.DUAL},{label:"双录中",value:Se.DUALING},{label:"双录完成",value:Se.DUAL_FINISH},{label:"双录失败",value:Se.DUAL_FAILED}]);const Ce={class:"page-verify-wrap"},Ve={key:0,class:"sign-list"},Ie={class:"inner-cell"},qe={class:"inner-cell"},we={class:"inner-cell"},Le={class:"inner-cell"},_e={class:"footer-button"},je={class:"dialog-content"},Fe=e({name:"verify"}),Ue=e({...Fe,setup(e){const s=S(),r=k(),c=C(),[v,y]=V(!1),{orderNo:b,tenantId:ue}=r.query,me=I.Component,fe=a(!1),he=a(),pe=a(!1),ge=a(!1),Fe=a(!1),Ue=a(),xe=a({holderMobile:"",holderVerifyCode:"",insuredMobile:"",insuredVerifyCode:""}),De=ce(),Ne=a(!1),$e=a({sign:[],verify:[],scribing:""}),Ae=a(),Ee=a(""),Oe=l((()=>{const{showReturnButton:e}=De.value;return e===q.YES})),Me=a({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2,shareFlag:2},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},verifyStatus:2,shareFlag:2},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2}}),Te=a("agent"),Pe=l((()=>e=>$e.value.sign.includes(e)||$e.value.verify.includes(e))),Re=l((()=>Me.value.agent.verifyStatus!==q.YES)),Be=a(!1),He=l((()=>{const{insuredList:e}=De.value||{},{age:a,relationToHolder:l}=e[0]||{};return!(a<18||`${l}`===w.CERT)})),Ye=l((()=>e=>Me.value[e].isSign||Me.value[e].isVerify)),Ge=l((()=>e=>Me.value[e].isShareSign)),ze=e=>{var a;const{holder:l,insuredList:s}=De.value;let i={name:l.name,gender:`${$[l.gender]}`};"insured"===e&&(i={name:null==s?void 0:s[0].name,gender:`${$[null==(a=null==s?void 0:s[0])?void 0:a.gender]}`}),A({messageType:se.HOLDER,orderNo:b,tenantId:ue});const o={shareType:0,title:`${E[e.toLocaleUpperCase()]}${O.sign.title}`,desc:O.sign.desc.replace("{name}",`${i.name||""}${i.gender||""}`),url:`${window.location.href}&objectType=${e}&nextPageCode=infoPreview`.replace("/verify","/phoneVerify"),imageUrl:"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/lian_logo.png?OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Expires=1697288114&Signature=S87PMeDRxltLovmmHVTeiHoew1c%3D"};M(o)},Je=(e,a,l)=>{Te.value=e;const s=()=>{"agent"!==e?Re.value||l||(Ne.value=!0):c.push({path:N.agentSign,query:r.query})};`${a}`!=`${q.YES}`||l?s():I.confirm({message:"本次签名已完成，您是否需要重新签名?",confirmButtonText:"是",cancelButtonText:"否"}).then((()=>{s()}))},Ke=()=>{var e;Re.value||[Se.DUAL_FINISH].includes(he.value)||null==(e=Ue.value)||e.validate().then((()=>{T(De.value).then((({code:e,data:a})=>{var l;if("10000"===e&&a&&Ee.value){const e=null==(l=Ee.value.match(/(.*)\.app:\/\//))?void 0:l[1];P({packageName:e,scheme:Ee.value}).then((e=>{e.isInstall===`${q.YES}`?(Be.value=!1,R(Ee.value)):(Be.value=!0,B("请先安装双录app"))}))}}))}))},Qe=()=>{ve({orderNo:b,tenantId:ue}).then((({code:e,data:a})=>{"10000"===e&&(delete r.query.orderNo,c.push({path:N.productList,query:r.query}))}))},We=()=>{var e;e=()=>{y(!1),delete r.query.questionnaireId,c.push({path:Ae.value,query:{...r.query,canBack:Ae.value===N.infoCollection?1:2}})},ie({orderNo:b,tenantId:ue}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},Ze=()=>{Ne.value=!1},Xe=()=>{let e="";e="agent"===Te.value?N.infoPreview:(Te.value,Me.value[Te.value].isVerify?N.verifyFace:N.infoPreview),s.set(`${H}_orderDetail`,De.value),c.push({path:e,query:{...r.query,objectType:Te.value,isFirst:1}})},ea=async()=>{let e={};const a=Y.get(`${H}_deviceInfo`);await re({orderNo:b,tenantId:ue}).then((({code:a,data:l})=>{var s;if("10000"===a){Object.assign(De.value,l);const{agentAuthFlag:a}=l.extInfo,{mobile:i,isCert:o,shareFlag:n}=l.holder,{mobile:u,isCert:r,shareFlag:t}=(null==(s=l.insuredList)?void 0:s[0])||{};Object.assign(xe.value,{holderMobile:i,insuredMobile:u}),e=de(l.insuredList[0].productList),Me.value.agent.verifyStatus=a,Object.assign(Me.value.holder,{verifyStatus:o,shareFlag:n===q.YES}),Object.assign(Me.value.insured,{verifyStatus:r,shareFlag:t===q.YES})}})),await te(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=G(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&$e.value.sign.push(a.code),"1"===a.code?Me.value.agent.isSign=!0:"2"===a.code?Me.value.holder.isSign=!0:"3"===a.code?Me.value.insured.isSign=!0:"4"===a.code?Me.value.holder.isShareSign=!0:"5"===a.code&&(Me.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&$e.value.verify.push(a.code),"1"===a.code?Me.value.holder.isVerify=!0:"2"===a.code&&(Me.value.insured.isVerify=!0)}))}))}})),await z({orderNo:b,tenantId:ue}).then((({code:e,data:l})=>{if("10000"===e){const{doubleRecordFlag:e,doubleRecordStatus:s}=l;fe.value=e===q.YES,he.value=s,ge.value=!0,a&&(Ee.value=l.andUrl||"","iOS"===a.platform&&(Ee.value=l.iosUrl||""))}})),pe.value=!1},aa=async()=>{var e;const{holder:a,insuredList:l,extInfo:s}=De.value;if(fe.value){if(s.agentAuthFlag!==q.YES)return void B("销售人员签名未完成");if(await(null==(e=Ue.value)?void 0:e.validate()),Se.DUAL_FINISH!==he.value)return void B("请先完成双录")}else{if(s.agentAuthFlag===q.NO)return void B("销售人员签名未完成");if(a.isCert===q.NO)return void B("投保人签名未完成");if(l[0].isCert===q.NO)return void B("被保险人签名未完成")}Fe.value=!0;const i=Object.assign(De.value,{extInfo:{...De.value.extInfo,pageCode:J.SIGN,buttonCode:K.SIGN}});ne(i,((e,a)=>{a===Q.JUMP_PAGE&&W(e.nextPageCode,r.query)}),r).finally((()=>{Fe.value=!1}))};L((()=>{ea()}));const la=a();return _((()=>{setTimeout((async()=>{la.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const l=Z,s=X,r=oe,c=ee,b=ae,S=le;return i(),j("div",Ce,[d(l),d(r,{modelValue:t(pe),"onUpdate:modelValue":a[9]||(a[9]=e=>x(pe)?pe.value=e:null),onRefresh:ea},{default:n((()=>[t(ge)?(i(),j("div",Ve,[t(Ye)("agent")?(i(),o(s,{key:0,title:"销售人员签名",required:t(Pe)("agent")},{value:n((()=>[u("div",Ie,[d(s,{"is-link":"",value:t(be)[t(Me).agent.verifyStatus],onClick:a[0]||(a[0]=e=>Je("agent",t(Me).agent.verifyStatus))},null,8,["value"])])])),_:1},8,["required"])):F("",!0),t(fe)?(i(),o(t(g),{key:2,ref_key:"formRef",ref:Ue,model:t(xe)},{default:n((()=>[d(t(h),{modelValue:t(xe).holderMobile,"onUpdate:modelValue":a[5]||(a[5]=e=>t(xe).holderMobile=e),label:"投保人手机号",name:"holderMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),d(t(p),{modelValue:t(xe).holderVerifyCode,"onUpdate:modelValue":a[6]||(a[6]=e=>t(xe).holderVerifyCode=e),"related-name":"holderMobile",label:"验证码",maxlength:"6",name:"holderVerifyCode","send-s-m-s-code":t(m),"check-s-m-s-code":t(f),required:""},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"]),t(He)?(i(),j(U,{key:0},[d(t(h),{modelValue:t(xe).insuredMobile,"onUpdate:modelValue":a[7]||(a[7]=e=>t(xe).insuredMobile=e),label:"被保险人手机号",name:"insuredMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),d(t(p),{modelValue:t(xe).insuredVerifyCode,"onUpdate:modelValue":a[8]||(a[8]=e=>t(xe).insuredVerifyCode=e),label:"验证码",maxlength:"6",name:"insuredVerifyCode","related-name":"insuredMobile","send-s-m-s-code":t(m),"check-s-m-s-code":t(f),rules:[{required:!0,message:"请输入验证码"}]},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])],64)):F("",!0)])),_:1},8,["model"])):(i(),j(U,{key:1},[t(Ye)("holder")?(i(),o(s,{key:0,title:"投保人签名",required:t(Pe)("holder")},{value:n((()=>[u("div",qe,[t(Ge)("holder")?(i(),o(s,{key:0,"value-class":""+(t(Re)?"disable":""),"is-link":"",value:"分享签名",onClick:a[1]||(a[1]=e=>!t(Re)&&ze("holder"))},null,8,["value-class"])):F("",!0),d(s,{"is-link":"",value:t(be)[t(Me).holder.verifyStatus],"value-class":""+(t(Re)||t(Me).holder.shareFlag?"disable":""),onClick:a[2]||(a[2]=e=>Je("holder",t(Me).holder.verifyStatus,t(Me).holder.shareFlag))},null,8,["value","value-class"])])])),_:1},8,["required"])):F("",!0),t(Ye)("insured")&&t(He)?(i(),o(s,{key:1,title:"被保险人签名",required:t(Pe)("insured")},{value:n((()=>[u("div",we,[t(Ge)("insured")?(i(),o(s,{key:0,"value-class":""+(t(Re)?"disable":""),"is-link":"",value:"分享签名",onClick:a[3]||(a[3]=e=>!t(Re)&&ze("insured"))},null,8,["value-class"])):F("",!0),d(s,{"is-link":"","value-class":""+(t(Re)||t(Me).insured.shareFlag?"disable":""),value:t(be)[t(Me).insured.verifyStatus],onClick:a[4]||(a[4]=e=>Je("insured",t(Me).insured.verifyStatus,t(Me).insured.shareFlag))},null,8,["value-class","value"])])])),_:1},8,["required"])):F("",!0)],64)),t(fe)?(i(),o(s,{key:3,title:"保单双录",required:""},{value:n((()=>[u("div",Le,[d(s,{"is-link":"","value-class":{disable:t(Re),errorColor:t(Be)},value:t(ke)[t(he)],onClick:Ke},null,8,["value-class","value"])])])),_:1})):F("",!0)])):F("",!0)])),_:1},8,["modelValue"]),u("div",_e,[t(Oe)?(i(),o(c,{key:0,type:"primary",plain:"",onClick:a[10]||(a[10]=()=>t(y)(!0))},{default:n((()=>[D("返回修改")])),_:1})):F("",!0),d(c,{type:"primary",disabled:t(Fe),onClick:aa},{default:n((()=>[D("下一步")])),_:1},8,["disabled"])]),t(Ne)?(i(),o(ye,{key:0,type:t(Te),show:t(Ne),data:t(De),onCancel:Ze,onConfirm:Xe},null,8,["type","show","data"])):F("",!0),t(v)?(i(),o(t(me),{key:1,show:t(v),"onUpdate:show":a[12]||(a[12]=e=>x(v)?v.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!t(Ae),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:We,onCancel:Qe},{default:n((()=>[u("div",je,[d(S,{modelValue:t(Ae),"onUpdate:modelValue":a[11]||(a[11]=e=>x(Ae)?Ae.value=e:null)},{default:n((()=>[d(b,{name:t(N).premiumTrial},{default:n((()=>[D("保费试算页")])),_:1},8,["name"]),d(b,{name:t(N).questionNotice},{default:n((()=>[D("健康告知页")])),_:1},8,["name"]),d(b,{name:t(N).infoCollection},{default:n((()=>[D("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):F("",!0)])}}});export{Ue as default};
