!function(){var e=document.createElement("style");e.innerHTML=".pro-modal .pro-overlay[data-v-a6bc1804]{position:fixed;top:0;left:0;z-index:99;width:100%;height:100%;background:var(--van-overlay-background-color)}.pro-modal .pro-modal-wrapper[data-v-a6bc1804]{position:fixed;top:0;left:0;z-index:100;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:1.2rem;text-align:center}.pro-modal .pro-modal-wrapper .pro-modal-body[data-v-a6bc1804]{width:100%;height:60%;background:url(/static/assets/upgrade_success.7fcab77e.png) no-repeat;background-size:contain;padding:.4rem}.pro-modal .pro-modal-wrapper .pro-modal-body .pro-modal-body-bg[data-v-a6bc1804],.pro-modal .pro-modal-wrapper .pro-modal-body .pro-modal-body-bg img[data-v-a6bc1804]{width:100%}.pro-modal .pro-modal-wrapper .pro-modal-body .pro-modal-btn[data-v-a6bc1804]{width:5.6rem;height:1.17333rem;background:var(--van-primary-color);border-radius:.58667rem;font-size:.45333rem;font-weight:700;color:#fff;line-height:1.17333rem;text-align:center;margin:auto}.pro-modal .pro-modal-wrapper .pro-modal-content[data-v-a6bc1804]{padding:4.13333rem 0 .8rem;font-size:.4rem;font-weight:500;color:#9f5012;line-height:.61333rem}.pro-modal .pro-modal-wrapper .pro-modal-close[data-v-a6bc1804]{padding:.53333rem}.pro-modal .pro-modal-wrapper .pro-modal-close img[data-v-a6bc1804]{width:.77333rem;height:.77333rem}.van-config-provider.router-view{background:linear-gradient(180deg,#fea64a 0%,#fc7429 88%,#fc6d24 100%)}.page-activity-invite{height:100%;background:linear-gradient(180deg,#fea64a 0%,#fc7429 88%,#fc6d24 100%)}.page-activity-invite .banner{width:100%}.page-activity-invite .container{padding:.26667rem}.page-activity-invite .container .title{margin:auto;margin-top:-1.6rem;width:calc(100% - .8rem)}.page-activity-invite .container .title img{width:100%}.page-activity-invite .container .main-form{background:url(/static/assets/bg.c7f48ab0.png) no-repeat;background-size:100% 100%;position:relative;padding:1.33333rem 0 .6rem}.page-activity-invite .container .main-form .sms-code{width:2rem;text-align:center;font-size:.4rem;font-weight:500;color:var(--van-primary-color);padding:0;white-space:nowrap}.page-activity-invite .container .main-form .submit{height:1.33333rem;margin-top:.53333rem;margin-bottom:.46667rem;background:url(/static/assets/button.4c281a6e.png) no-repeat;background-size:contain;background-position:center;border:none}.page-activity-invite .container .main-form .check-submit{height:1.33333rem;margin-top:.53333rem;margin-bottom:.46667rem;background:url(/static/assets/button1.50dc65f6.png) no-repeat;background-size:contain;background-position:center;border:none}.page-activity-invite .container .main-form .agree{padding:0 .33333rem;font-size:.37333rem;font-weight:400;color:#666;display:flex;align-items:flex-start}.page-activity-invite .container .main-form .agree .check-wrap{margin-right:.26667rem}.page-activity-invite .container .main-form .tips{padding:.4rem;font-size:.34667rem;font-weight:400;color:#666;line-height:.53333rem;background:#fff}.page-activity-invite .container .main-form .van-cell .van-field__value{align-items:flex-start}.page-activity-invite .van-field__body{width:100%}\n",document.head.appendChild(e),System.register(["./vendor-legacy-9a8a9c11.js","./infoCollection-legacy-463c6cf6.js","./phoneVerify-legacy-2e91cf4f.js","./validator-legacy-70be20af.js","./utils-legacy-f5ffe082.js","./index-legacy-44cf8695.js","./trial-legacy-6b00345e.js","./product-legacy-43b84022.js","./theme-legacy-0d67cf8b.js","./index-legacy-b159b7ad.js","./index-legacy-ede05579.js","./trial-legacy-ef3fbc2d.js"],(function(e){"use strict";var a,t,n,o,l,i,r,c,d,s,u,m,p,v,f,g,h,b,y,w,k,I,C,x,V,N,_,z,j,O,S,U,B,L,F,P,D,M,E,H,T,R,q;return{setters:[function(e){a=e.h,t=e.G,n=e.N,o=e.$,l=e.r,i=e.k,r=e.m,c=e.n,d=e.s,s=e.B,u=e.A,m=e.L,p=e.M,v=e.T,f=e.p,g=e.v,h=e.a5,b=e.a6,y=e.P,w=e.aa,k=e.z,I=e.j,C=e.H,x=e.F,V=e.E},function(e){N=e.R},function(e){_=e.s,z=e.c},function(e){j=e.v,O=e.a,S=e.b},function(e){U=e.F,B=e.g},function(e){L=e.G,F=e._},function(e){P=e.g,D=e.m,M=e.i},function(e){E=e.p},function(e){H=e.t},function(e){T=e.c,R=e._},function(e){q=e._},function(){}],execute:function(){const A=a({props:{isCheck:{type:Boolean,default:!1},userInfo:{type:Object,default:()=>{}}},emits:["on-verify"],setup(e,{emit:a}){var f;const g=e,h=t({}),b=t(!1),y=t(0),w=t("获取验证码"),k=n({mobile:null===(f=g.userInfo)||void 0===f?void 0:f.mobile,smsCode:""}),I=e=>!!j(e)||"请输入正确的手机号",C=async()=>{y.value>0||null==h||h.value.validate("mobile").then((async()=>{const e=await _(k.mobile),{code:a,data:t}=e;"10000"===a&&(b.value=!0,v({message:"短信发送成功，请查收"}),(()=>{if(y.value>0)return;y.value=30;const e=()=>{w.value=`${y.value}s`,y.value-=1};e();const a=setInterval((()=>{0===y.value?(w.value="获取验证码",y.value=0,clearInterval(a)):e()}),1e3)})())}))},x=async()=>{const e=await z(k.mobile,k.smsCode),{data:t}=e;t&&a("on-verify",k)},V=async()=>{null==h||h.value.validate().then((async()=>{x()}))};return o((()=>k),(()=>{j(k.mobile)&&O(k.smsCode)&&b.value&&x()}),{deep:!0,immediate:!0}),(e,a)=>{const t=l("van-field"),n=l("van-cell-group"),o=l("VanForm");return i(),r(o,{ref_key:"formRef",ref:h,"label-width":"80"},{default:c((()=>[d(n,null,{default:c((()=>[d(t,{modelValue:s(k).mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>s(k).mobile=e),name:"mobile",label:"手机号",clearable:"",placeholder:"请输入手机号",maxlength:s(U).MOBILE,rules:[{validator:I}]},null,8,["modelValue","maxlength","rules"]),d(t,{modelValue:s(k).smsCode,"onUpdate:modelValue":a[1]||(a[1]=e=>s(k).smsCode=e),type:"digit",name:"smsCode",label:"验证码",clearable:"",placeholder:"请输入验证码",maxlength:s(U).SMS_CODE},{button:c((()=>[u("div",{class:p(["sms-code",{"count-down":y.value>0}]),onClick:C},m(w.value),3)])),_:1},8,["modelValue","maxlength"])])),_:1}),u("div",{class:p([{"check-submit":g.isCheck},{submit:!g.isCheck}]),onClick:V},null,2)])),_:1},512)}}}),$=a({props:{isCheck:{type:Boolean,default:!1},userInfo:{type:Object,default:()=>{}}},emits:["on-submit"],setup(e,{emit:a}){const o=e,m=t({}),v=n({name:o.userInfo.name,certNo:o.userInfo.certNo}),f=e=>!!L(v.certNo)||"请填写正确的证件号",g=e=>!!S(e)||"请输入正确的姓名",h=()=>{null==m||m.value.validate().then((async e=>{a("on-submit",v)}))};return(e,a)=>{const t=l("van-field"),n=l("van-cell-group"),b=l("VanForm");return i(),r(b,{ref_key:"formRef",ref:m,"label-width":"80"},{default:c((()=>[d(n,null,{default:c((()=>[d(t,{modelValue:s(v).name,"onUpdate:modelValue":a[0]||(a[0]=e=>s(v).name=e),name:"name",label:"姓名",clearable:"",placeholder:"请输入姓名",maxlength:s(U).NAME,rules:[{validator:g}]},null,8,["modelValue","maxlength","rules"]),d(t,{modelValue:s(v).certNo,"onUpdate:modelValue":a[1]||(a[1]=e=>s(v).certNo=e),name:"certNo",label:"身份证",clearable:"",placeholder:"请输入身份证号",maxlength:s(U).ID_CARD,rules:[{validator:f}]},null,8,["modelValue","maxlength","rules"])])),_:1}),u("div",{class:p([{"check-submit":o.isCheck},{submit:!o.isCheck}]),onClick:h},null,2)])),_:1},512)}}});const G=e=>(h("data-v-a6bc1804"),e=e(),b(),e),J={key:0,class:"pro-modal"},K=G((()=>u("div",{class:"pro-overlay"},null,-1))),W={class:"pro-modal-wrapper"},X=G((()=>u("div",{class:"pro-modal-content"},[u("p",null,"恭喜您"),u("p",null,"领取成功")],-1))),Y=["src"],Q=a({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const t=e,n=()=>{a("on-close")};return(e,a)=>t.isShow?(i(),f("div",J,[K,u("div",W,[u("div",{class:"pro-modal-body"},[X,u("div",{class:"pro-modal-btn",onClick:n},"我知道了")]),u("div",{class:"pro-modal-close",onClick:n},[u("img",{src:s(T)},null,8,Y)])])])):g("",!0)}});var Z=F(Q,[["__scopeId","data-v-a6bc1804"]]);const ee={class:"page-activity-invite"},ae=["src"],te={class:"container"},ne={class:"main-form"},oe={class:"title"},le=["src"],ie={class:"agree"},re={class:"check-wrap"},ce=V(" 我已阅读并同意 "),de={key:2,class:"tips"},se=[V(" 产品介绍页面仅供参考，具体责任描述以保险合同为准，众安保险最近季度偿付能力符合监管要求，详情请参见众安保险官网 ("),u("a",{href:"https://www.zhongan.com"},"www.zhongan.com",-1),V("）偿付能力信息披露，该保险产品由众安在线财产保险股份有限公司承保并负责理赔。 ")];e("default",a({setup(e){const a=y(),o=w(),{productCode:m="7X9",tenantId:p="",phoneNo:h,saleChannelId:b,agentCode:V="",paymentMethod:_,from:z}=a.query,j=t(!0),O="check"===z,S=t(!1),U=t(!1),L=t(!1),F=t(0),T=n({title:"/static/assets/title-step1.97cb9efa.png",attachmentList:[],userInfo:{mobile:h,certNo:"",name:""},agree:!1}),G=t(),J=t(),K=t(!1);let W="";const X=k((()=>{var e,a;return(null===(e=G.value)||void 0===e||null===(a=e.tenantProductInsureVO)||void 0===a?void 0:a.attachmentVOList.filter((e=>"健康告知"===e.attachmentName)))||[]})),Y=k((()=>{var e,a;return(null===(e=G.value)||void 0===e||null===(a=e.tenantProductInsureVO)||void 0===a?void 0:a.attachmentVOList.filter((e=>"健康告知"!==e.attachmentName)))||[]})),Q=async e=>{T.userInfo.mobile=e.mobile;const a=await P({holderPhone:T.userInfo.mobile,productCode:m,tenantId:p}),{code:t,data:n}=a;var o,l;"10000"===t&&(T.userInfo.name=null===(o=n.tenantOrderHolder)||void 0===o?void 0:o.name,T.userInfo.certNo=null===(l=n.tenantOrderHolder)||void 0===l?void 0:l.certNo);T.title="/static/assets/title-step2.258af5e9.png",j.value=!1},ue=async e=>{if(null!=e&&e.certNo&&(T.userInfo.certNo=null==e?void 0:e.certNo),null!=e&&e.name&&(T.userInfo.name=null==e?void 0:e.name),!O||S.value)if(T.agree)try{v({message:"领取中...",forbidClick:!0,loadingType:"spinner"});const e=B({tenantId:p,detail:G.value,insureDetail:J.value,saleChannelId:b,saleUserId:V,holder:T.userInfo,insured:{...T.userInfo,relationToHolder:N.SELF},paymentMethod:_,renewalDK:"",iseeBizNo:W,successJumpUrl:"",premium:0,orderStatus:"",orderTopStatus:"",tenantOrderRiskList:[]}),t=await D(e),{code:n}=t;if("10000"===n){if(O)return v.clear(),void(K.value=!0);o.push({path:"/chuangxin/baigebao/productDetail",query:{...a.query,tenantId:p,phoneNo:T.userInfo.mobile,certNo:T.userInfo.certNo,name:T.userInfo.name,productCode:"BWYL2021",agentCode:V}})}}catch(t){v.clear()}else v("请勾选协议");else L.value=!0},me=()=>{S.value=!0,ue()},pe=e=>{"allFalse"===e&&(U.value=!0)},ve=()=>{K.value=!1};return I((()=>{(async()=>{const e=E({productCode:m,withInsureInfo:!0,tenantId:p}),a=M({productCode:m});Promise.all([e,a]).then((([e,a])=>{var t;"10000"===e.code&&(G.value=e.data,document.title=(null===(t=e.data)||void 0===t?void 0:t.productFullName)||""),"10000"===a.code&&(J.value=a.data)}))})(),setTimeout((async()=>{W=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const t=l("van-checkbox"),n=l("ProPDFviewer"),o=l("van-config-provider");return i(),r(o,{"theme-vars":s(H)},{default:c((()=>{var e,o;return[u("div",ee,[u("img",{src:null===(e=G.value)||void 0===e||null===(o=e.tenantProductInsureVO)||void 0===o?void 0:o.banner[0],class:"banner"},null,8,ae),u("div",te,[u("div",ne,[u("div",oe,[u("img",{src:s(T).title},null,8,le)]),j.value?(i(),r(A,{key:0,"is-check":O,"user-info":s(T).userInfo,onOnVerify:Q},null,8,["user-info"])):(i(),r($,{key:1,"is-check":O,"user-info":s(T).userInfo,onOnSubmit:ue},null,8,["user-info"])),u("div",ie,[u("div",re,[d(t,{modelValue:s(T).agree,"onUpdate:modelValue":a[0]||(a[0]=e=>s(T).agree=e),name:"agree",shape:"square"},null,8,["modelValue"])]),u("div",null,[ce,(i(!0),f(x,null,C(s(Y)||[],((e,a)=>(i(),r(n,{key:a,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:"pdf"},null,8,["title","content"])))),128))])]),O?(i(),f("div",de,se)):g("",!0)])])]),d(Z,{"is-show":K.value,onOnClose:ve},null,8,["is-show"]),d(R,{show:U.value,"onUpdate:show":a[1]||(a[1]=e=>U.value=e),"content-list":s(Y),"active-index":F.value,text:"我已逐页阅读并确认告知内容",onSubmit:me},null,8,["show","content-list","active-index"]),d(q,{show:L.value,"onUpdate:show":a[2]||(a[2]=e=>L.value=e),"content-list":s(X),"active-index":0,onOnConfirmHealth:pe},null,8,["show","content-list"])]})),_:1},8,["theme-vars"])}}}))}}}))}();
