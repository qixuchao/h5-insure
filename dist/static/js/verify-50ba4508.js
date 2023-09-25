import{d as e,k as l,j as a,z as s,o as i,m as o,w as u,a as n,e as r,u as d,b as t,V as v,W as c,ce as m,p as f,cf as p,cg as b,ch as h,aB as y,ao as g,i as S,h as V,a6 as C,aj as k,O as q,c as j,f as w,F as x,a8 as I,T as M,bs as L,aL as O,a9 as _,aa as E,bp as N,ag as U}from"./index-75b55068.js";import{n as F}from"./nextStep-4eabd66a.js";import{c as $}from"./format-b5e9d8b9.js";import{g as P,m as A}from"./trial-b6453de4.js";import{p as R}from"./utils-b71a652c.js";import{u as T}from"./useOrder-d4e6c01a.js";import{P as B,a as D,B as G}from"./constants-fe95ef6f.js";import{d as Y,q as z}from"./verify-9f871621.js";import"./core-458b409c.js";import"./utils-db4618cf.js";import"./infoCollection-18d07b88.js";import"./trial-33bca7bf.js";const H={class:"popup-container"},J={class:"popup-header"},W={class:"title"},K={class:"popup-body"},Q=e({name:"checkCodePopup"}),X=e({...Q,props:{show:{type:Boolean,default:!1},type:{default:"agent"},data:{default:()=>({})}},emits:["cancel","confirm"],setup(e,{emit:g}){const S=e,V=l((()=>S.show)),C=a({mobile:"",verifyCode:""}),k=l((()=>S.type)),q=a({holder:{type:"投保人",name:"",mobile:"",desc:""},agent:{type:"代理人",name:"李三",mobile:"13262278989",desc:"色卡上会计核算看回放独守空房还是空巅峰计划收款方"},insured:{type:"被保人",name:"",mobile:"",desc:""}}),j=()=>{g("cancel")},w=()=>{g("confirm")};return s([()=>S.data,S.type],(([e,l])=>{var a,s,i;e&&(Object.assign(q.value.holder,e.holder),Object.assign(q.value.insured,null==(a=null==e?void 0:e.insuredList)?void 0:a[0]),C.value.mobile=null==(i=null==(s=q.value)?void 0:s[`${S.type}`])?void 0:i.mobile)}),{immediate:!0,deep:!0}),(e,l)=>{const a=p,s=b,g=h,S=y;return i(),o(S,{show:d(V),"onUpdate:show":l[2]||(l[2]=e=>f(V)?V.value=e:null),class:"popup-check-mobile",closeable:!1,"close-on-click-overlay":!1},{default:u((()=>[n("div",H,[n("div",J,[n("span",{class:"clear-all",onClick:j}," 取消 "),n("span",W,r(`${q.value[d(k)].type}手机号验证`),1),n("span",{class:"close",onClick:w},"确认")]),n("div",K,[n("h3",null,r(`尊敬的${q.value[d(k)].type}:${q.value[d(k)].name}`),1),n("p",null,r(q.value[d(k)].desc),1),n("h3",null,r(`${q.value[d(k)].type}手机号验证 ${d($)(q.value[d(k)].mobile||"")}`),1),t(g,{model:C.value},{default:u((()=>[v(t(a,{modelValue:C.value.mobile,"onUpdate:modelValue":l[0]||(l[0]=e=>C.value.mobile=e),label:"被保人手机号",name:"mobile",maxlength:"11",required:""},null,8,["modelValue"]),[[c,!1]]),t(s,{modelValue:C.value.verifyCode,"onUpdate:modelValue":l[1]||(l[1]=e=>C.value.verifyCode=e),"related-name":"mobile",label:" ",maxlength:"6","input-align":"left",placeholder:"请输入验证码",name:"verifyCode","send-s-m-s-code":d(m),rules:""},null,8,["modelValue","send-s-m-s-code"])])),_:1},8,["model"])])])])),_:1},8,["show"])}}}),Z=g([{label:"签名完成",value:1},{label:"去签名",value:2},{label:"认证失败，请联系内勤人员",value:3}]),ee=2,le=g([{label:"去双录",value:1},{label:"双录完成",value:ee},{label:"双录失败",value:3}]);const ae={class:"page-verify-wrap"},se={class:"sign-list"},ie={class:"inner-cell"},oe={class:"inner-cell"},ue={class:"inner-cell"},ne={class:"inner-cell"},re={class:"footer-button"},de=e({name:"verify"}),te=e({...de,setup(e){const r=S(),v=V(),{orderNo:c,tenantId:f}=r.query,y=a(!1),g=a(),$=a(),H=a({holderMobile:"",holderVerifyCode:"",insuredMobile:"",insuredVerifyCode:""}),J=T(),W=a(!1),K=a({sign:[],verify:[],scribing:""}),Q=a({holder:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2},insured:{fileList:[],personalInfo:[],isSign:!1,isVerify:!1,isShareSign:!1,signData:{},verifyStatus:2},agent:{fileList:[],personalInfo:{},isSign:!1,isVerify:!1,isShareSign:!1,signData:"",verifyStatus:2}}),de=a("agent"),te=l((()=>e=>K.value.sign.includes(e)||K.value.verify.includes(e))),ve=l((()=>Q.value.agent.verifyStatus!==C.YES)),ce=l((()=>{const{insuredList:e}=J.value||{},{age:l,relationToHolder:a}=e[0]||{};return!(l<18||`${a}`===k.CERT)})),me=l((()=>e=>Q.value[e].isSign||Q.value[e].isVerify)),fe=l((()=>e=>Q.value[e].isShareSign)),pe=e=>{de.value=e,"agent"!==e?ve.value||(W.value=!0):v.push({path:B.agentSign,query:r.query})},be=()=>{ve.value||g.value===ee||Y(J.value).then((({code:e,data:l})=>{"10000"===e&&l&&M("双录已完成")}))},he=()=>{W.value=!1},ye=()=>{let e="";e=("agent"===de.value||(de.value,Q.value[de.value].isVerify),B.infoPreview),v.push({path:e,query:{...r.query,objectType:de.value}})},ge=()=>{const{holder:e,insuredList:l,extInfo:a}=J.value;if(y.value){if(a.agentAuthFlag!==C.YES)return void M("代理人签名未完成")}else{if(a.agentAuthFlag===C.NO)return void M("代理人签名未完成");if(e.isCert===C.NO)return void M("投保人签名未完成");if(l[0].isCert===C.NO)return void M("被保人签名未完成")}const s=Object.assign(J.value,{extInfo:{...J.value.extInfo,pageCode:D.SIGN,buttonCode:G.SIGN}});F(s,((e,l)=>{l===O.JUMP_PAGE&&_(e.nextPageCode,r.query)}),r)};return s((()=>H.value),(()=>{}),{deep:!0,immediate:!0}),q((()=>{(async()=>{let e={};z({orderNo:c,tenantId:f}).then((({code:e,data:l})=>{if("10000"===e){const{doubleRecordFlag:e,doubleRecordStatus:a}=l;y.value=e===C.YES,g.value=a}})),await P({orderNo:c,tenantId:f}).then((({code:l,data:a})=>{var s,i,o;if("10000"===l){Object.assign(J.value,a);const{agentAuthFlag:l}=a.extInfo,{mobile:u}=a.holder,{mobile:n}=(null==(s=a.insuredList)?void 0:s[0])||{};Object.assign(H.value,{holderMobile:u,insuredMobile:n}),e=R(a.insuredList[0].productList),Q.value.agent.verifyStatus=l,Q.value.holder.verifyStatus=a.holder.isCert,Q.value.insured.verifyStatus=null==(o=null==(i=a.insuredList)?void 0:i[0])?void 0:o.isCert}})),await A(e).then((({data:e,code:l})=>{if("10000"===l){const{signInfo:l}=L(e.productFactor);l.schema.forEach((e=>{"eleSign"===e.name&&e.columns.forEach((l=>{e.required&&K.value.sign.push(l.code),"1"===l.code?Q.value.agent.isSign=!0:"2"===l.code?Q.value.holder.isSign=!0:"3"===l.code?Q.value.insured.isSign=!0:"4"===l.code?Q.value.holder.isShareSign=!0:"5"===l.code&&(Q.value.insured.isShareSign=!0)})),"customerFace"===e.name&&e.columns.forEach((l=>{e.required&&K.value.verify.push(l.code),"1"===l.code?Q.value.holder.isVerify=!0:"2"===l.code&&(Q.value.insured.isVerify=!0)}))}))}}))})()})),(e,l)=>{const a=E,s=N,r=U;return i(),j("div",ae,[t(a),n("div",se,[d(me)("agent")?(i(),o(s,{key:0,title:"代理人签名",required:d(te)("agent")},{value:u((()=>[n("div",ie,[t(s,{"is-link":"",value:d(Z)[d(Q).agent.verifyStatus],onClick:l[0]||(l[0]=e=>pe("agent"))},null,8,["value"])])])),_:1},8,["required"])):w("",!0),d(y)?(i(),o(d(h),{key:2,ref_key:"formRef",ref:$,model:d(H)},{default:u((()=>[t(d(p),{modelValue:d(H).holderMobile,"onUpdate:modelValue":l[3]||(l[3]=e=>d(H).holderMobile=e),label:"投保人手机号",name:"holderMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),t(d(b),{modelValue:d(H).holderVerifyCode,"onUpdate:modelValue":l[4]||(l[4]=e=>d(H).holderVerifyCode=e),"related-name":"holderMobile",label:"验证码",maxlength:"6",name:"holderVerifyCode","send-s-m-s-code":d(m),rules:"",required:""},null,8,["modelValue","send-s-m-s-code"]),d(ce)?(i(),j(x,{key:0},[t(d(p),{modelValue:d(H).insuredMobile,"onUpdate:modelValue":l[5]||(l[5]=e=>d(H).insuredMobile=e),label:"被保人手机号",name:"insuredMobile",maxlength:"11",required:"","is-view":""},null,8,["modelValue"]),t(d(b),{modelValue:d(H).insuredVerifyCode,"onUpdate:modelValue":l[6]||(l[6]=e=>d(H).insuredVerifyCode=e),label:"验证码",maxlength:"6",name:"insuredVerifyCode","related-name":"insuredMobile","send-s-m-s-code":d(m),required:""},null,8,["modelValue","send-s-m-s-code"])],64)):w("",!0)])),_:1},8,["model"])):(i(),j(x,{key:1},[d(me)("holder")?(i(),o(s,{key:0,title:"投保人签名",required:d(te)("holder")},{value:u((()=>[n("div",oe,[d(fe)("holder")?(i(),o(s,{key:0,"value-class":""+(d(ve)?"disable":""),"is-link":"",value:"分享空签邀约"},null,8,["value-class"])):w("",!0),t(s,{"is-link":"",value:d(Z)[d(Q).holder.verifyStatus],"value-class":""+(d(ve)?"disable":""),onClick:l[1]||(l[1]=e=>pe("holder"))},null,8,["value","value-class"])])])),_:1},8,["required"])):w("",!0),d(me)("insured")&&d(ce)?(i(),o(s,{key:1,title:"被保人签名",required:d(te)("insured")},{value:u((()=>[n("div",ue,[d(fe)("insured")?(i(),o(s,{key:0,"value-class":""+(d(ve)?"disable":""),"is-link":"",value:"分享空签邀约"},null,8,["value-class"])):w("",!0),t(s,{"is-link":"","value-class":""+(d(ve)?"disable":""),value:d(Z)[d(Q).insured.verifyStatus],onClick:l[2]||(l[2]=e=>pe("insured"))},null,8,["value-class","value"])])])),_:1},8,["required"])):w("",!0)],64)),d(y)?(i(),o(s,{key:3,title:"保单双录",required:""},{value:u((()=>[n("div",ne,[t(s,{"is-link":"","value-class":""+(d(ve)?"disable":""),value:d(le)[d(g)],onClick:be},null,8,["value-class","value"])])])),_:1})):w("",!0)]),n("div",re,[t(r,{type:"primary",onClick:ge},{default:u((()=>[I("下一步")])),_:1})]),t(X,{type:d(de),show:d(W),data:d(J),onCancel:he,onConfirm:ye},null,8,["type","show","data"])])}}});export{te as default};
