import{d as e,j as a,k as l,A as s,o as i,p as o,w as n,a as u,e as r,u as d,b as t,V as c,W as v,cs as m,ct as f,q as p,bu as h,cu as y,cv as g,au as b,ar as S,cw as k,i as V,h as C,a6 as I,am as w,az as L,l as U,c as q,f as A,F as D,a8 as _,cx as j,c1 as x,cy as N,cz as $,cA as F,aa as E,cB as M,cC as O,cD as P,T,ah as H,ak as R,bA as G,cE as z,ay as B,ax as Y,aG as W,a9 as J,ab as K,by as Q,aj as Z,c5 as X}from"./index-0b6bfadc.js";import{P as ee}from"./index-16ca8e7b.js";import{n as ae}from"./nextStep-2fcda554.js";import{c as le}from"./format-31cde443.js";import{g as se,m as ie}from"./trial-cef143a6.js";import{p as oe}from"./utils-ef6c215d.js";import{u as ne}from"./useOrder-16f32cdc.js";import"./core-6e54b8ca.js";import"./utils-37855734.js";import"./infoCollection-8466281b.js";import"./trial-ebe446ca.js";const ue={class:"popup-container"},re={class:"popup-header"},de={class:"title"},te={class:"popup-body"},ce=e({name:"checkCodePopup"}),ve=e({...ce,props:{show:{type:Boolean,default:!1},type:{default:"agent"},data:{default:()=>({})}},emits:["cancel","confirm"],setup(e,{emit:S}){const k=e,V=a(),C=l((()=>k.show)),I=a({mobile:"",verifyCode:""}),w=l((()=>k.type)),L=a({holder:{type:"投保人",name:"",mobile:"",desc:""},agent:{type:"代理人",name:"",mobile:"",desc:"色卡上会计核算看回放独守空房还是空巅峰计划收款方"},insured:{type:"被保人",name:"",mobile:"",desc:""}}),U=()=>{S("cancel")},q=()=>{V.value.validate().then((()=>{S("confirm")}))};return s([()=>k.data,k.type],(([e,a])=>{var l,s,i;e&&(Object.assign(L.value.holder,e.holder),Object.assign(L.value.insured,null==(l=null==e?void 0:e.insuredList)?void 0:l[0]),I.value.mobile=null==(i=null==(s=L.value)?void 0:s[k.type])?void 0:i.mobile)}),{immediate:!0,deep:!0}),(e,a)=>{const l=h,s=y,S=g,k=b;return i(),o(k,{show:d(C),"onUpdate:show":a[2]||(a[2]=e=>p(C)?C.value=e:null),class:"popup-check-mobile",closeable:!1,"close-on-click-overlay":!1},{default:n((()=>[u("div",ue,[u("div",re,[u("span",{class:"clear-all",onClick:U}," 取消 "),u("span",de,r(`${L.value[d(w)].type}手机号验证`),1),u("span",{class:"close",onClick:q},"确认")]),u("div",te,[u("h3",null,r(`尊敬的${L.value[d(w)].type}:${L.value[d(w)].name}`),1),u("p",null,r(L.value[d(w)].desc),1),u("h3",null,r(`${L.value[d(w)].type}手机号验证 ${d(le)(L.value[d(w)].mobile||"")}`),1),t(S,{ref_key:"formRef",ref:V,"validate-method":"toast",model:I.value},{default:n((()=>[c(t(l,{modelValue:I.value.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>I.value.mobile=e),label:"被保人手机号",name:"mobile",maxlength:"11",rules:[{required:!0,message:"请输入手机号"}]},null,8,["modelValue"]),[[v,!1]]),t(s,{modelValue:I.value.verifyCode,"onUpdate:modelValue":a[1]||(a[1]=e=>I.value.verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode",rules:[{required:!0,message:"请输入验证码"}],"send-s-m-s-code":d(m),"check-s-m-s-code":d(f)},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])])),_:1},8,["model"])])])])),_:1},8,["show"])}}}),me=S([{label:"签名完成",value:1},{label:"去签名",value:2},{label:"认证失败，请联系内勤人员",value:3}]),fe={DUAL:1,DUALING:2,DUAL_FINISH:3,DUAL_FAILED:4},pe=S([{label:"去双录",value:fe.DUAL},{label:"双录中",value:fe.DUALING},{label:"双录完成",value:fe.DUAL_FINISH},{label:"双录失败",value:fe.DUAL_FAILED}]);const he={class:"page-verify-wrap"},ye={key:0,class:"sign-list"},ge={class:"inner-cell"},be={class:"inner-cell"},Se={class:"inner-cell"},ke={class:"inner-cell"},Ve={class:"footer-button"},Ce=e({name:"verify"}),Ie=e({...Ce,setup(e){const s=k(),r=V(),c=C(),{orderNo:v,tenantId:b}=r.query,S=a(!1),le=a(),ue=a(!1),re=a(!1),de=a(),te=a({holderMobile:"",holderVerifyCode:"",insuredMobile:"",insuredVerifyCode:""}),ce=ne(),Ce=a(!1),Ie=a({sign:[],verify:[],scribing:""}),we=a(""),Le=a({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},verifyStatus:2},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2}}),Ue=a("agent"),qe=l((()=>e=>Ie.value.sign.includes(e)||Ie.value.verify.includes(e))),Ae=l((()=>Le.value.agent.verifyStatus!==I.YES)),De=l((()=>{const{insuredList:e}=ce.value||{},{age:a,relationToHolder:l}=e[0]||{};return!(a<18||`${l}`===w.CERT)})),_e=l((()=>e=>Le.value[e].isSign||Le.value[e].isVerify)),je=l((()=>e=>Le.value[e].isShareSign)),xe=e=>{var a;const{holder:l,insured:s}=ce.value;let i={name:l.name,gender:`${j[l.gender]}士`};"insured"===e&&(i={name:null==s?void 0:s[0].name,gender:`${j[null==(a=null==s?void 0:s[0])?void 0:a.gender]}士`}),x({messageType:X.HOLDER,orderNo:v,tenantId:b}),N({shareType:0,title:`${$.sign.title}（${F[e.toLocaleUpperCase()]}）`,desc:$.sign.desc.replace("{name}",`${i.name||""}${i.gender||""},代理人`),url:`${window.location.href}&objectType=${e}&nextPageCode=infoPreview`.replace("/verify","/phoneVerify"),imageUrl:"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/lian_logo.png?OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Expires=1697288114&Signature=S87PMeDRxltLovmmHVTeiHoew1c%3D"})},Ne=e=>{Ue.value=e,"agent"!==e?Ae.value||(Ce.value=!0):c.push({path:E.agentSign,query:r.query})},$e=()=>{var e;Ae.value||[fe.DUAL_FINISH,fe.DUALING].includes(le.value)||null==(e=de.value)||e.validate().then((()=>{M(ce.value).then((({code:e,data:a})=>{var l;if("10000"===e&&a&&we.value){const e=null==(l=we.value.match(/(.*)\.app:\/\//))?void 0:l[1];O({packageName:e,scheme:we.value}).then((e=>{e.isInstall===`${I.YES}`?P(we.value):T("请先安装双录app")}))}}))}))},Fe=()=>{Ce.value=!1},Ee=()=>{let e="";e="agent"===Ue.value?E.infoPreview:(Ue.value,Le.value[Ue.value].isVerify?E.verifyFace:E.infoPreview),s.set(`${H}_orderDetail`,ce.value),c.push({path:e,query:{...r.query,objectType:Ue.value,isFirst:1}})},Me=async()=>{let e={};const a=R.get(`${H}_deviceInfo`);await se({orderNo:v,tenantId:b}).then((({code:a,data:l})=>{var s,i,o;if("10000"===a){Object.assign(ce.value,l);const{agentAuthFlag:a}=l.extInfo,{mobile:n}=l.holder,{mobile:u}=(null==(s=l.insuredList)?void 0:s[0])||{};Object.assign(te.value,{holderMobile:n,insuredMobile:u}),e=oe(l.insuredList[0].productList),Le.value.agent.verifyStatus=a,Le.value.holder.verifyStatus=l.holder.isCert,Le.value.insured.verifyStatus=null==(o=null==(i=l.insuredList)?void 0:i[0])?void 0:o.isCert}})),await ie(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=G(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&Ie.value.sign.push(a.code),"1"===a.code?Le.value.agent.isSign=!0:"2"===a.code?Le.value.holder.isSign=!0:"3"===a.code?Le.value.insured.isSign=!0:"4"===a.code?Le.value.holder.isShareSign=!0:"5"===a.code&&(Le.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&Ie.value.verify.push(a.code),"1"===a.code?Le.value.holder.isVerify=!0:"2"===a.code&&(Le.value.insured.isVerify=!0)}))}))}})),await z({orderNo:v,tenantId:b}).then((({code:e,data:l})=>{if("10000"===e){const{doubleRecordFlag:e,doubleRecordStatus:s}=l;S.value=e===I.YES,le.value=s,re.value=!0,a&&(we.value=l.andUrl||"","iOS"===a.platform&&(we.value=l.iosUrl||""))}})),ue.value=!1},Oe=async()=>{var e;const{holder:a,insuredList:l,extInfo:s}=ce.value;if(S.value){if(s.agentAuthFlag!==I.YES)return void T("代理人签名未完成");if(await(null==(e=de.value)?void 0:e.validate()),fe.DUAL_FINISH!==le.value)return void T("请先完成双录")}else{if(s.agentAuthFlag===I.NO)return void T("代理人签名未完成");if(a.isCert===I.NO)return void T("投保人签名未完成");if(l[0].isCert===I.NO)return void T("被保人签名未完成")}const i=Object.assign(ce.value,{extInfo:{...ce.value.extInfo,pageCode:B.SIGN,buttonCode:Y.SIGN}});ae(i,((e,a)=>{a===W.JUMP_PAGE&&J(e.nextPageCode,r.query)}),r)};L((()=>{Me()}));const Pe=a();return U((()=>{setTimeout((async()=>{Pe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const l=K,s=Q,r=ee,c=Z;return i(),q("div",he,[t(l),t(r,{modelValue:d(ue),"onUpdate:modelValue":a[9]||(a[9]=e=>p(ue)?ue.value=e:null),onRefresh:Me},{default:n((()=>[d(re)?(i(),q("div",ye,[d(_e)("agent")?(i(),o(s,{key:0,title:"代理人签名",required:d(qe)("agent")},{value:n((()=>[u("div",ge,[t(s,{"is-link":"",value:d(me)[d(Le).agent.verifyStatus],onClick:a[0]||(a[0]=e=>Ne("agent"))},null,8,["value"])])])),_:1},8,["required"])):A("",!0),d(S)?(i(),o(d(g),{key:2,ref_key:"formRef",ref:de,model:d(te)},{default:n((()=>[t(d(h),{modelValue:d(te).holderMobile,"onUpdate:modelValue":a[5]||(a[5]=e=>d(te).holderMobile=e),label:"投保人手机号",name:"holderMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),t(d(y),{modelValue:d(te).holderVerifyCode,"onUpdate:modelValue":a[6]||(a[6]=e=>d(te).holderVerifyCode=e),"related-name":"holderMobile",label:"验证码",maxlength:"6",name:"holderVerifyCode","send-s-m-s-code":d(m),"check-s-m-s-code":d(f),required:""},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"]),d(De)?(i(),q(D,{key:0},[t(d(h),{modelValue:d(te).insuredMobile,"onUpdate:modelValue":a[7]||(a[7]=e=>d(te).insuredMobile=e),label:"被保人手机号",name:"insuredMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),t(d(y),{modelValue:d(te).insuredVerifyCode,"onUpdate:modelValue":a[8]||(a[8]=e=>d(te).insuredVerifyCode=e),label:"验证码",maxlength:"6",name:"insuredVerifyCode","related-name":"insuredMobile","send-s-m-s-code":d(m),"check-s-m-s-code":d(f),rules:[{required:!0,message:"请输入验证码"}]},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])],64)):A("",!0)])),_:1},8,["model"])):(i(),q(D,{key:1},[d(_e)("holder")?(i(),o(s,{key:0,title:"投保人签名",required:d(qe)("holder")},{value:n((()=>[u("div",be,[d(je)("holder")?(i(),o(s,{key:0,"value-class":""+(d(Ae)?"disable":""),"is-link":"",value:"分享空签邀约",onClick:a[1]||(a[1]=e=>!d(Ae)&&xe("holder"))},null,8,["value-class"])):A("",!0),t(s,{"is-link":"",value:d(me)[d(Le).holder.verifyStatus],"value-class":""+(d(Ae)?"disable":""),onClick:a[2]||(a[2]=e=>Ne("holder"))},null,8,["value","value-class"])])])),_:1},8,["required"])):A("",!0),d(_e)("insured")&&d(De)?(i(),o(s,{key:1,title:"被保人签名",required:d(qe)("insured")},{value:n((()=>[u("div",Se,[d(je)("insured")?(i(),o(s,{key:0,"value-class":""+(d(Ae)?"disable":""),"is-link":"",value:"分享空签邀约",onClick:a[3]||(a[3]=e=>!d(Ae)&&xe("insured"))},null,8,["value-class"])):A("",!0),t(s,{"is-link":"","value-class":""+(d(Ae)?"disable":""),value:d(me)[d(Le).insured.verifyStatus],onClick:a[4]||(a[4]=e=>Ne("insured"))},null,8,["value-class","value"])])])),_:1},8,["required"])):A("",!0)],64)),d(S)?(i(),o(s,{key:3,title:"保单双录",required:""},{value:n((()=>[u("div",ke,[t(s,{"is-link":"","value-class":""+(d(Ae)?"disable":""),value:d(pe)[d(le)],onClick:$e},null,8,["value-class","value"])])])),_:1})):A("",!0)])):A("",!0)])),_:1},8,["modelValue"]),u("div",Ve,[t(c,{type:"primary",onClick:Oe},{default:n((()=>[_("下一步")])),_:1})]),d(Ce)?(i(),o(ve,{key:0,type:d(Ue),show:d(Ce),data:d(ce),onCancel:Fe,onConfirm:Ee},null,8,["type","show","data"])):A("",!0)])}}});export{Ie as default};
