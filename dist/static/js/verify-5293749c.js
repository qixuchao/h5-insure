import{d as e,j as a,k as l,E as s,o as i,p as o,w as n,a as r,e as u,u as t,b as d,aV as c,aW as v,cj as m,ck as f,bs as h,cl as p,cm as g,av as y,ae as b,cn as S,i as C,h as k,bY as V,aX as I,aB as q,ah as w,aR as _,l as U,c as j,f as L,F,q as x,v as D,y as N,co as $,b_ as E,cp as A,cq as M,bP as P,cr as O,T,cs as R,ct as B,cu as Y,af as H,aJ as G,bv as z,cv as Q,aQ as J,aP as W,aZ as Z,aD as K,aE as X,by as ee,aI as ae,b$ as le,c0 as se,c2 as ie,c1 as oe}from"./index-e61895f6.js";import{P as ne}from"./index-1e4f8bcc.js";import{n as re}from"./nextStep-82dfe781.js";import{c as ue}from"./format-31cde443.js";import{g as te,m as de}from"./trial-b5a25ec6.js";import{p as ce}from"./utils-0faee3f8.js";import{u as ve}from"./useOrder-e8857066.js";import{c as me}from"./order-8b3d7b20.js";import{_ as fe}from"./MessagePopup-08d2e4ff.js";import"./core-28cb86de.js";import"./utils-87d7cbeb.js";import"./infoCollection-4060f24f.js";import"./trial-4ffe2fc7.js";import"./utils-3dc73a93.js";import"./createProposal-24f3c648.js";import"./PolicyInfo-5604d578.js";const he={class:"popup-container"},pe={class:"popup-header"},ge={class:"title"},ye={class:"popup-body"},be=e({name:"checkCodePopup"}),Se=e({...be,props:{show:{type:Boolean,default:!1},type:{default:"agent"},data:{default:()=>({})}},emits:["cancel","confirm"],setup(e,{emit:b}){const S=e,C=a(),k=l((()=>S.show)),V=a({mobile:"",verifyCode:""}),I=l((()=>S.type)),q=a({holder:{type:"投保人",name:"",mobile:"",desc:""},agent:{type:"销售人员",name:"",mobile:"",desc:"色卡上会计核算看回放独守空房还是空巅峰计划收款方"},insured:{type:"被保险人",name:"",mobile:"",desc:""}}),w=()=>{b("cancel")},_=()=>{C.value.validate().then((()=>{b("confirm")}))};return s([()=>S.data,S.type],(([e,a])=>{var l,s,i;e&&(Object.assign(q.value.holder,e.holder),Object.assign(q.value.insured,null==(l=null==e?void 0:e.insuredList)?void 0:l[0]),V.value.mobile=null==(i=null==(s=q.value)?void 0:s[S.type])?void 0:i.mobile)}),{immediate:!0,deep:!0}),(e,a)=>{const l=h,s=p,b=g,S=y;return i(),o(S,{show:k.value,"onUpdate:show":a[2]||(a[2]=e=>k.value=e),class:"popup-check-mobile",closeable:!1,"close-on-click-overlay":!1},{default:n((()=>[r("div",he,[r("div",pe,[r("span",{class:"clear-all",onClick:w}," 取消 "),r("span",ge,u(`${q.value[I.value].type}手机号验证`),1),r("span",{class:"close",onClick:_},"确认")]),r("div",ye,[r("h3",null,u(`尊敬的${q.value[I.value].type}:${q.value[I.value].name}`),1),r("p",null,u(q.value[I.value].desc),1),r("h3",null,u(`${q.value[I.value].type}手机号验证 ${t(ue)(q.value[I.value].mobile||"")}`),1),d(b,{ref_key:"formRef",ref:C,"validate-method":"toast",model:V.value},{default:n((()=>[c(d(l,{modelValue:V.value.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value.mobile=e),label:"被保险人手机号",name:"mobile",maxlength:"11",rules:[{required:!0,message:"请输入手机号"}]},null,8,["modelValue"]),[[v,!1]]),d(s,{modelValue:V.value.verifyCode,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value.verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode",rules:[{required:!0,message:"请输入验证码"}],"send-s-m-s-code":t(m),"check-s-m-s-code":t(f)},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])])),_:1},8,["model"])])])])),_:1},8,["show"])}}}),Ce=b([{label:"签名完成",value:1},{label:"本地签名",value:2},{label:"认证失败，请联系内勤人员",value:3}]),ke={DUAL:1,DUALING:2,DUAL_FINISH:3,DUAL_FAILED:4},Ve=b([{label:"去双录",value:ke.DUAL},{label:"双录中",value:ke.DUALING},{label:"双录完成",value:ke.DUAL_FINISH},{label:"双录失败",value:ke.DUAL_FAILED}]);const Ie={class:"page-verify-wrap"},qe={key:0,class:"sign-list"},we={class:"inner-cell"},_e={class:"inner-cell"},Ue={class:"inner-cell"},je={class:"inner-cell"},Le={class:"footer-button"},Fe={class:"dialog-content"},xe={class:"verify-content-inner"},De=["src"],Ne=["src"],$e=["src"],Ee=e({name:"verify"}),Ae=e({...Ee,setup(e){const s=S(),u=C(),c=k(),[v,y]=V(!1),{orderNo:b,tenantId:ue}=u.query,he=I.Component,[pe,ge]=V(!1),ye=a(!1),be=a(),Ee=a(!1),Ae=a(!1),Me=a(!1),Pe=a(""),Oe=a(""),Te=a(),Re=a({holderMobile:"",holderVerifyCode:"",insuredMobile:"",insuredVerifyCode:""}),Be=ve(),Ye=a(!1),He=a({sign:[],verify:[],scribing:""}),Ge=a(),ze=a(""),Qe=l((()=>{const{showReturnButton:e}=Be.value;return e===q.YES})),Je=a({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2,shareFlag:2},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},verifyStatus:2,shareFlag:2},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2}}),We=a("agent"),Ze=l((()=>e=>He.value.sign.includes(e)||He.value.verify.includes(e))),Ke=l((()=>Je.value.agent.verifyStatus!==q.YES)),Xe=a(!1),ea=l((()=>{const{insuredList:e}=Be.value||{},{age:a,relationToHolder:l}=e[0]||{};return!(a<18||`${l}`===w.CERT)})),aa=l((()=>e=>Je.value[e].isSign||Je.value[e].isVerify)),la=l((()=>e=>Je.value[e].isShareSign)),sa=e=>{var a,l;const{holder:s,insuredList:i}=Be.value;let o={name:s.name,gender:`${$[s.gender]}`};"insured"===e&&(o={name:null==i?void 0:i[0].name,gender:`${$[null==(a=null==i?void 0:i[0])?void 0:a.gender]}`}),E({messageType:ie.HOLDER,orderNo:b,tenantId:ue});const n={...u.query,objectType:e,nextPageCode:"infoPreview"},r={shareType:0,title:`${A[e.toLocaleUpperCase()]}${M.sign.title}`,desc:M.sign.desc.replace("{name}",`${o.name||""}${o.gender||""}`),url:`${null==(l=window.location.href.split("?"))?void 0:l[0]}?${P.stringify(n)}`.replace("/verify","/phoneVerify"),imageUrl:"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/lian_logo.png?OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Expires=1697288114&Signature=S87PMeDRxltLovmmHVTeiHoew1c%3D"};O(r)},ia=(e,a,l)=>{We.value=e;const s=()=>{"agent"!==e?Ke.value||l||(Ye.value=!0):c.push({path:N.agentSign,query:u.query})};`${a}`!=`${q.YES}`||l?s():I.confirm({message:"本次签名已完成，您是否需要重新签名?",confirmButtonText:"是",cancelButtonText:"否"}).then((()=>{s()}))},oa=()=>{var e;Ke.value||[ke.DUAL_FINISH].includes(be.value)||null==(e=Te.value)||e.validate().then((()=>{const e=T.loading({message:"加载中...",duration:0});R(Be.value).then((({code:a,data:l})=>{var s;if("10000"===a){if(l&&ze.value){const a=null==(s=ze.value.match(/(.*)\.app:\/\//))?void 0:s[1];B({packageName:a,scheme:ze.value}).then((e=>{e.isInstall===`${q.YES}`?(Xe.value=!1,Y(ze.value)):(Xe.value=!0,ge(!0))})).finally((()=>{e.clear()}))}}else e.clear()})).catch((()=>{e.clear()}))}))},na=()=>{me({orderNo:b,tenantId:ue}).then((({code:e,data:a})=>{"10000"===e&&(delete u.query.orderNo,c.push({path:N.productList,query:u.query}))}))},ra=()=>{var e;e=()=>{y(!1),delete u.query.questionnaireId,c.push({path:Ge.value,query:{...u.query,canBack:Ge.value===N.infoCollection?1:2}})},oe({orderNo:b,tenantId:ue}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},ua=()=>{Ye.value=!1},ta=()=>{let e="";e="agent"===We.value?N.infoPreview:(We.value,Je.value[We.value].isVerify?N.verifyFace:N.infoPreview),s.set(`${H}_orderDetail`,Be.value),c.push({path:e,query:{...u.query,objectType:We.value,isFirst:1}})},da=async()=>{let e={};const a=G.get(`${H}_deviceInfo`);await te({orderNo:b,tenantId:ue}).then((({code:a,data:l})=>{var s;if("10000"===a){Object.assign(Be.value,l);const{agentAuthFlag:a}=l.extInfo,{mobile:i,isCert:o,shareFlag:n}=l.holder,{mobile:r,isCert:u,shareFlag:t}=(null==(s=l.insuredList)?void 0:s[0])||{};Object.assign(Re.value,{holderMobile:i,insuredMobile:r}),e=ce(l.insuredList[0].productList),Je.value.agent.verifyStatus=a,Object.assign(Je.value.holder,{verifyStatus:o,shareFlag:n===q.YES}),Object.assign(Je.value.insured,{verifyStatus:u,shareFlag:t===q.YES})}})),await de(e).then((({data:e,code:a})=>{if("10000"===a){const{signInfo:a}=z(e.productFactor);a.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((a=>{e.required&&He.value.sign.push(a.code),"1"===a.code?Je.value.agent.isSign=!0:"2"===a.code?Je.value.holder.isSign=!0:"3"===a.code?Je.value.insured.isSign=!0:"4"===a.code?Je.value.holder.isShareSign=!0:"5"===a.code&&(Je.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((a=>{e.required&&He.value.verify.push(a.code),"1"===a.code?Je.value.holder.isVerify=!0:"2"===a.code&&(Je.value.insured.isVerify=!0)}))}))}})),await Q({orderNo:b,tenantId:ue}).then((({code:e,data:l})=>{if("10000"===e){const{doubleRecordFlag:e,doubleRecordStatus:s}=l;ye.value=e===q.YES,be.value=s,Ae.value=!0,Pe.value=null==l?void 0:l.iosDownUrl,Oe.value=null==l?void 0:l.andDownUrl,a&&(ze.value=l.andUrl||"","iOS"===a.platform&&(ze.value=l.iosUrl||""))}})),Ee.value=!1},ca=async()=>{var e;const{holder:a,insuredList:l,extInfo:s}=Be.value;if(ye.value){if(s.agentAuthFlag!==q.YES)return void T("销售人员签名未完成");if(await(null==(e=Te.value)?void 0:e.validate()),ke.DUAL_FINISH!==be.value)return void T("请先完成双录")}else{if(s.agentAuthFlag===q.NO)return void T("销售人员签名未完成");if(a.isCert===q.NO)return void T("投保人签名未完成");if(l[0].isCert===q.NO)return void T("被保险人签名未完成")}Me.value=!0;const i=Object.assign(Be.value,{extInfo:{...Be.value.extInfo,pageCode:J.SIGN,buttonCode:W.SIGN}});re(i,((e,a)=>{a===Z.JUMP_PAGE&&K(e.nextPageCode,u.query)}),u).finally((()=>{Me.value=!1}))};_((()=>{da()}));const va=a();return U((()=>{setTimeout((async()=>{va.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const l=X,s=ee,u=ne,c=ae,b=le,S=se;return i(),j(F,null,[r("div",Ie,[d(l),d(u,{modelValue:t(Ee),"onUpdate:modelValue":a[9]||(a[9]=e=>x(Ee)?Ee.value=e:null),onRefresh:da},{default:n((()=>[t(Ae)?(i(),j("div",qe,[t(aa)("agent")?(i(),o(s,{key:0,title:"销售人员签名",required:t(Ze)("agent")},{value:n((()=>[r("div",we,[d(s,{"is-link":"",value:t(Ce)[t(Je).agent.verifyStatus],onClick:a[0]||(a[0]=e=>ia("agent",t(Je).agent.verifyStatus))},null,8,["value"])])])),_:1},8,["required"])):L("",!0),t(ye)?(i(),o(t(g),{key:2,ref_key:"formRef",ref:Te,model:t(Re)},{default:n((()=>[d(t(h),{modelValue:t(Re).holderMobile,"onUpdate:modelValue":a[5]||(a[5]=e=>t(Re).holderMobile=e),label:"投保人手机号",name:"holderMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),d(t(p),{modelValue:t(Re).holderVerifyCode,"onUpdate:modelValue":a[6]||(a[6]=e=>t(Re).holderVerifyCode=e),"related-name":"holderMobile",label:"验证码",maxlength:"6",name:"holderVerifyCode","send-s-m-s-code":t(m),"check-s-m-s-code":t(f),required:""},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"]),t(ea)?(i(),j(F,{key:0},[d(t(h),{modelValue:t(Re).insuredMobile,"onUpdate:modelValue":a[7]||(a[7]=e=>t(Re).insuredMobile=e),label:"被保险人手机号",name:"insuredMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),d(t(p),{modelValue:t(Re).insuredVerifyCode,"onUpdate:modelValue":a[8]||(a[8]=e=>t(Re).insuredVerifyCode=e),label:"验证码",maxlength:"6",name:"insuredVerifyCode","related-name":"insuredMobile","send-s-m-s-code":t(m),"check-s-m-s-code":t(f),rules:[{required:!0,message:"请输入验证码"}]},null,8,["modelValue","send-s-m-s-code","check-s-m-s-code"])],64)):L("",!0)])),_:1},8,["model"])):(i(),j(F,{key:1},[t(aa)("holder")?(i(),o(s,{key:0,title:"投保人签名",required:t(Ze)("holder")},{value:n((()=>[r("div",_e,[t(la)("holder")?(i(),o(s,{key:0,"value-class":""+(t(Ke)?"disable":""),"is-link":"",value:"分享签名",onClick:a[1]||(a[1]=e=>!t(Ke)&&sa("holder"))},null,8,["value-class"])):L("",!0),d(s,{"is-link":"",value:t(Ce)[t(Je).holder.verifyStatus],"value-class":""+(t(Ke)||t(Je).holder.shareFlag?"disable":""),onClick:a[2]||(a[2]=e=>ia("holder",t(Je).holder.verifyStatus,t(Je).holder.shareFlag))},null,8,["value","value-class"])])])),_:1},8,["required"])):L("",!0),t(aa)("insured")&&t(ea)?(i(),o(s,{key:1,title:"被保险人签名",required:t(Ze)("insured")},{value:n((()=>[r("div",Ue,[t(la)("insured")?(i(),o(s,{key:0,"value-class":""+(t(Ke)?"disable":""),"is-link":"",value:"分享签名",onClick:a[3]||(a[3]=e=>!t(Ke)&&sa("insured"))},null,8,["value-class"])):L("",!0),d(s,{"is-link":"","value-class":""+(t(Ke)||t(Je).insured.shareFlag?"disable":""),value:t(Ce)[t(Je).insured.verifyStatus],onClick:a[4]||(a[4]=e=>ia("insured",t(Je).insured.verifyStatus,t(Je).insured.shareFlag))},null,8,["value-class","value"])])])),_:1},8,["required"])):L("",!0)],64)),t(ye)?(i(),o(s,{key:3,title:"保单双录",required:""},{value:n((()=>[r("div",je,[d(s,{"is-link":"","value-class":{disable:t(Ke),errorColor:t(Xe)},value:t(Ve)[t(be)],onClick:oa},null,8,["value-class","value"])])])),_:1})):L("",!0)])):L("",!0)])),_:1},8,["modelValue"]),r("div",Le,[t(Qe)?(i(),o(c,{key:0,type:"primary",plain:"",onClick:a[10]||(a[10]=()=>t(y)(!0))},{default:n((()=>[D("返回修改")])),_:1})):L("",!0),d(c,{type:"primary",disabled:t(Me),onClick:ca},{default:n((()=>[D("下一步")])),_:1},8,["disabled"])]),t(Ye)?(i(),o(Se,{key:0,type:t(We),show:t(Ye),data:t(Be),onCancel:ua,onConfirm:ta},null,8,["type","show","data"])):L("",!0),t(v)?(i(),o(t(he),{key:1,show:t(v),"onUpdate:show":a[12]||(a[12]=e=>x(v)?v.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!t(Ge),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:ra,onCancel:na},{default:n((()=>[r("div",Fe,[d(S,{modelValue:t(Ge),"onUpdate:modelValue":a[11]||(a[11]=e=>x(Ge)?Ge.value=e:null)},{default:n((()=>[d(b,{name:t(N).premiumTrial},{default:n((()=>[D("保费试算页")])),_:1},8,["name"]),d(b,{name:t(N).questionNotice},{default:n((()=>[D("健康告知页")])),_:1},8,["name"]),d(b,{name:t(N).infoCollection},{default:n((()=>[D("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):L("",!0)]),d(fe,{modelValue:t(pe),"onUpdate:modelValue":a[13]||(a[13]=e=>x(pe)?pe.value=e:null),onClose:a[14]||(a[14]=e=>t(ge)(!1))},{default:n((()=>[r("div",xe,[r("img",{class:"ios-qr-code",src:t(Pe),alt:"QR Code"},null,8,De),r("img",{class:"android-qr-code",src:t(Oe),alt:"QR Code"},null,8,Ne),r("img",{src:t("/h5insure/static/png/verify-bg-24ea22cd.png"),alt:"",class:"header-img"},null,8,$e)])])),_:1},8,["modelValue"])],64)}}});export{Ae as default};
