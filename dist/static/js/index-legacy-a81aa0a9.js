!function(){var e=document.createElement("style");e.innerHTML=".page-verify .card .people[data-v-7e8d1d5c]{flex:1;margin-left:.53333rem;display:flex;align-items:center}.page-verify .card .people .name[data-v-7e8d1d5c]{font-size:.4rem;font-weight:600;color:#393d46}.page-verify .card .people .status[data-v-7e8d1d5c]{margin-left:.26667rem;text-align:center;width:1.2rem;height:.53333rem;line-height:.53333rem;border-radius:.05333rem;border:1px solid #99a9c0;font-size:.32rem;color:#99a9c0}.page-verify .card .people .status.verified[data-v-7e8d1d5c]{color:var(--van-primary-color, var(--zaui-brand));border-color:var(--van-primary-color, var(--zaui-brand))}.page-verify .card .verify-item[data-v-7e8d1d5c]{display:flex;align-items:center;height:1.41333rem;line-height:1.41333rem;font-size:.4rem;color:#393d46}.page-verify .card .verify-item .no[data-v-7e8d1d5c]{margin-left:.64rem}.page-verify .card .verify-item .action[data-v-7e8d1d5c]{flex:1;display:flex;align-items:center;justify-content:flex-end;color:#99a9c0}.page-verify .card .verify-item .action .icon[data-v-7e8d1d5c]{margin-left:.13333rem;color:#99a9c0;font-size:.32rem}.page-verify .sign-card .resign[data-v-7e8d1d5c]{font-size:.37333rem;color:var(--van-primary-color, var(--zaui-brand))}.page-verify .sign-card .sign-body[data-v-7e8d1d5c]{padding-bottom:.4rem}.page-verify .sign-card .sign-body .date[data-v-7e8d1d5c]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-verify .sign-card .sign-body .file[data-v-7e8d1d5c]{margin-top:.21333rem;font-size:.37333rem;color:#393d46;line-height:.53333rem}.page-verify .sign-card .sign-body .file .file-name[data-v-7e8d1d5c]{color:var(--van-primary-color, var(--zaui-brand))}.page-verify .sign-card .sign-body .file .file-name .dun-hao[data-v-7e8d1d5c]{color:#393d46}.page-verify .footer[data-v-7e8d1d5c]{position:static;justify-content:space-between}.page-verify .footer .refresh-btn[data-v-7e8d1d5c]{width:.93333rem;border:none;color:var(--van-primary-color, var(--zaui-brand));font-size:.4rem;line-height:.37333rem;text-align:center}.page-verify .footer .refresh-btn .text[data-v-7e8d1d5c]{margin-top:.13333rem;font-size:.32rem}.page-verify .footer[data-v-7e8d1d5c] .com-share{flex:1;margin-left:.26667rem}.page-verify .footer .submit-btn[data-v-7e8d1d5c]{flex:1}\n",document.head.appendChild(e),System.register(["./index-legacy-db3cc191.js","./verify-legacy-c856fc70.js","./order-legacy-2c48ef7a.js","./inform-legacy-9812eadf.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,a,r,n,i,o,l,d,c,s,v,u,f,y,p,m,g,h,C,I,b,N,x,k,T,w,O,E,_,L,j,S,D,H,z,R,U,$,P,A,Y,G,M,F,q,Q,B,V,W,X,J;return{setters:[function(e){t=e._,a=e.d,r=e.a,n=e.u,i=e.ac,o=e.r,l=e.ad,d=e.E,c=e.G,s=e.b,v=e.c,u=e.e,f=e.w,y=e.j,p=e.f,m=e.ae,g=e.P,h=e.t,C=e.g,I=e.h,b=e.L,N=e.k,x=e.n,k=e.V,T=e.af,w=e.F,O=e.i,E=e.a6,_=e.ag,L=e.ah,j=e.T,S=e.p,D=e.ai,H=e.aj,z=e.M,R=e.N,U=e.O,$=e.ak,P=e.al,A=e.am,Y=e.aa,G=e.B,M=e.X,F=e.Y},function(e){q=e.f,Q=e.s,B=e.g,V=e.a},function(e){W=e.a},function(e){X=e.g,J=e.l},function(){}],execute:function(){const K=e=>(M("data-v-7e8d1d5c"),e=e(),F(),e),Z={class:"page-verify"},ee={class:"people"},te={class:"name"},ae={class:"verify-item"},re=K((()=>y("div",{class:"label"},"证件号码",-1))),ne={class:"no"},ie={class:"sign-body"},oe={class:"date"},le={class:"file"},de={class:"people"},ce={class:"name"},se={class:"verify-item"},ve=K((()=>y("div",{class:"label"},"证件号码",-1))),ue={class:"no"},fe=["onClick"],ye=["onClick"],pe={class:"sign-body"},me={class:"date"},ge={class:"file"},he={class:"footer-button footer"},Ce=K((()=>y("div",{class:"text"},"刷新",-1))),Ie=a({__name:"index",setup(e){const t=1,a=2,M=r(),F=n(),K=(()=>{const e=M.query;return e.orderCode&&(e.orderNo=e.orderCode,delete e.orderCode),e})(),{saleUserId:Ie="D1234567-1",tenantId:be="9991000007",templateId:Ne=1,productCode:xe="CQ75CQ76",insurerCode:ke="ancheng",isShare:Te,orderCode:we,orderNo:Oe,productCategory:Ee}=K,_e=new i({source:"localStorage"}),Le=o([]),je=o([]),Se=o([]),De=o([]),He=o(),ze=o(),Re=[],Ue=o(""),$e=o(),Pe=l().format("YYYY-MM-DD"),Ae=()=>{var e,t;null===(e=ze.value)||void 0===e||null===(t=e.clear)||void 0===t||t.call(e)},Ye=(e,t)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),V({callbackUrl:a,certiNo:e,faceAuthMode:"TENCENT",userName:t,tenantId:9991000007}).then((a=>{const{code:r,data:n}=a;if("10000"===r){const{originalUrl:a,serialNo:r}=n;window.location.href=a,_e.set("verifyData",{serialNo:r,certNo:e,name:t})}}))},Ge=e=>{const{id:t,objectType:a}=e;Ue.value="",$e.value="";const r={1:"pdf",2:"richText",3:"link"};X({insurerCode:ke,id:t,objectType:a,productCategory:Ee,orderNo:Oe,tenantId:be}).then((({code:e,data:t})=>{if("10000"===e){const{textType:e,content:a,questionType:n}=(null==t?void 0:t[0])||{};2===n?(Ue.value="question",$e.value=t):(1===e&&a.includes("png")?Ue.value="picture":Ue.value=r[e],$e.value=a)}}))},Me=e=>`${e}`===L.CERT,Fe=e=>{var t,a,r,n;-1===e?Ye(null===(t=He.value.tenantOrderHolder)||void 0===t?void 0:t.certNo,null===(a=He.value.tenantOrderHolder)||void 0===a?void 0:a.name):Ye(null===(r=He.value.tenantOrderInsuredList[e])||void 0===r?void 0:r.certNo,null===(n=He.value.tenantOrderInsuredList[e])||void 0===n?void 0:n.name)},qe=e=>{e&&Re.every((t=>t!==e))&&Re.push(e)},Qe=()=>{var e,a,r,n;(null===(e=ze.value)||void 0===e?void 0:e.isEmpty())?j.fail("请投保人签名"):(null===(a=He.value.tenantOrderHolder)||void 0===a||null===(r=a.extInfo)||void 0===r?void 0:r.isCert)!==t&&Me(null===(n=He.value.tenantOrderHolder)||void 0===n?void 0:n.certType)?j.fail("请投保人去认证"):S({orderNo:we||Oe,saleUserId:Ie,tenantId:be}).then((e=>{const{code:t,data:a}=e;"10000"===t&&([W.PENDING,W.PAYMENT_FAILED,W.UNDER_WRITING_SUCCESS].includes(a.orderStatus)?H.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{var e,a;const r=null===(e=ze.value)||void 0===e?void 0:e.save();Promise.all([Q("HOLDER",r,null===(a=He.value)||void 0===a?void 0:a.id,`${be}`)]).then((()=>{z({...He.value,pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:{...He.value.extInfo,pageCode:"sign",templateId:Ne,shareFlag:Te?"Y":"N",buttonCode:R.sign},venderCode:ke}).then((e=>{const{code:a,data:r}=e;"10000"===t&&r.success&&F.push({path:U[r.pageAction.data.nextPageCode],query:{orderNo:we||Oe,saleUserId:Ie,tenantId:be}})}))}))})):D("paymentResult",K))}))},Be=(e=!1)=>{S({orderNo:we||Oe,saleUserId:Ie,tenantId:be}).then((t=>{const{code:r,data:n}=t;if("10000"===r){var i,o;if(He.value=n,e)(null==n||null===(i=n.tenantOrderHolder)||void 0===i||null===(o=i.extInfo)||void 0===o?void 0:o.isCert)===a||null!=n&&n.tenantOrderInsuredList.some((e=>{var t;return(null===(t=e.extInfo)||void 0===t?void 0:t.isCert)===a}))?j("用户未完身份认证及签字"):null!=n&&n.tenantOrderAttachmentList.find((e=>e.category===$.ELECTRIC_SIGN&&e.objectType===P.HOLDER))&&null!=n&&n.tenantOrderAttachmentList.find((e=>e.category===$.ELECTRIC_SIGN&&e.objectType===P.INSURED))||j("用户未完身份认证及签字");setTimeout((()=>{let e=0;n.tenantOrderAttachmentList.forEach((t=>{var a,r;if(t.category===$.ELECTRIC_SIGN)if(t.objectType===P.HOLDER)null===(a=ze.value)||void 0===a||null===(r=a.clear)||void 0===r||r.call(a),ze.value.setDataURL(t.fileBase64);else if(t.objectType===P.INSURED){var n,i;null===(n=Re[e])||void 0===n||null===(i=n.clear)||void 0===i||i.call(n),Re[e].setDataURL(t.fileBase64),e+=1}}))}))}}))},Ve=()=>{Be(!0)},We=d((()=>{const e={...K,isShare:1,sharePageCode:"sign"};return`${window.location.origin}/phoneVerify?${A.stringify(e)}`}));return c((()=>{Be(),(async()=>{const e={orderNo:we||Oe,productCode:xe,tenantId:be,objectType:1},t={insurerCode:ke,orderNo:Oe,productCategory:Ee,tenantId:be,noticeType:4,objectType:1},{code:a,data:r}=await B(e),{code:n,data:i}=await B({...e,objectType:2}),{code:o,data:l}=await J(t),{code:d,data:c}=await J({...t,noticeType:5,objectType:2});"10000"===a&&(je.value=r||[]),"10000"===n&&(Le.value=i||[]),"10000"===o&&(De.value=l||[]),"10000"===d&&(Se.value=c||[])})();const e=_e.get("verifyData");if(e){const{serialNo:t,certNo:a,name:r}=e;q({certiNo:a,orderNo:we||Oe,serialNo:t,tenantId:be,userName:r}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(_e.remove("verifyData"),Be())}))}})),(e,a)=>{const r=Y,n=G,i=s("ProPageWrap");return v(),u(i,null,{default:f((()=>{var e;return[y("div",Z,[p(m,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),p(g,{title:"投保人",class:"card"},{extra:f((()=>{var e,a,r,n,i,o,l,d,c,s;return[y("div",ee,[y("div",te,h(null===(e=C(He))||void 0===e||null===(a=e.tenantOrderHolder)||void 0===a?void 0:a.name),1),Me(null===(r=C(He))||void 0===r||null===(n=r.tenantOrderHolder)||void 0===n?void 0:n.certType)?(v(),I("div",{key:0,class:b(["status",{verified:(null===(i=C(He))||void 0===i||null===(o=i.tenantOrderHolder)||void 0===o||null===(l=o.extInfo)||void 0===l?void 0:l.isCert)===t}])},h((null===(d=C(He))||void 0===d||null===(c=d.tenantOrderHolder)||void 0===c||null===(s=c.extInfo)||void 0===s?void 0:s.isCert)===t?"已认证":"待认证"),3)):N("",!0)])]})),default:f((()=>{var e,r,n,i,o,l,d;return[y("div",ae,[re,y("div",ne,h(null===(e=C(He))||void 0===e||null===(r=e.tenantOrderHolder)||void 0===r?void 0:r.certNo),1),(null===(n=C(He))||void 0===n||null===(i=n.tenantOrderHolder)||void 0===i||null===(o=i.extInfo)||void 0===o?void 0:o.isCert)!==t&&Me(null===(l=C(He))||void 0===l||null===(d=l.tenantOrderHolder)||void 0===d?void 0:d.certType)?(v(),I("div",{key:0,class:"action",onClick:a[0]||(a[0]=e=>Fe(-1))},[x(" 去认证 "),p(k,{name:"right_arrow",class:"icon"})])):N("",!0)])]})),_:1}),p(g,{key:"-1",title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:f((()=>[y("div",{class:"resign",onClick:Ae},"重签")])),default:f((()=>[p(T,{ref_key:"holderSign",ref:ze,class:"sign"},null,512),y("div",ie,[y("div",oe,"签名日期： "+h(C(Pe)),1),y("div",le,[x(" 签名将被用于以下文件： "),y("span",null,[(v(!0),I(w,null,O(C(je),((e,t)=>(v(),u(r,{key:`holderFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:C(E)(e.materialContent,e.materialSource+""),onClick:a[1]||(a[1]=()=>"")},null,8,["title","content","type"])))),128))]),(v(!0),I(w,null,O(C(De),((e,t)=>(v(),u(r,{key:`holderQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:C($e),type:C(Ue),onClick:()=>Ge(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:1}),(v(!0),I(w,null,O(null===(e=C(He))||void 0===e?void 0:e.tenantOrderInsuredList,((e,n)=>(v(),I("div",{key:n},[p(g,{title:"被保人",class:"card"},{extra:f((()=>{var a,r;return[y("div",de,[y("div",ce,h(e.name),1),Me(e.certType)?(v(),I("div",{key:0,class:b(["status",{verified:(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)===t}])},h((null===(r=e.extInfo)||void 0===r?void 0:r.isCert)===t?"已认证":"待认证"),3)):N("",!0)])]})),default:f((()=>{var a;return[y("div",se,[ve,y("div",ue,h(e.certNo),1),(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)!==t&&Me(e.certType)?(v(),I("div",{key:0,class:"action",onClick:e=>Fe(n)},[x(" 去认证 "),p(k,{name:"right_arrow",class:"icon"})],8,fe)):N("",!0)])]})),_:2},1024),p(g,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:f((()=>[y("div",{class:"resign",onClick:e=>(e=>{var t,a;null===(t=Re[e])||void 0===t||null===(a=t.clear)||void 0===a||a.call(t)})(n)},"重签",8,ye)])),default:f((()=>[p(T,{ref_for:!0,ref:qe,class:"sign"}),y("div",pe,[y("div",me,"签名日期： "+h(C(Pe)),1),y("div",ge,[x(" 签名将被用于以下文件： "),(v(!0),I(w,null,O(C(Le),((e,t)=>(v(),u(r,{key:`insuredFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:C(E)(e.materialContent,e.materialSource+""),onClick:a[2]||(a[2]=()=>"")},null,8,["title","content","type"])))),128)),(v(!0),I(w,null,O(C(Se),((e,t)=>(v(),u(r,{key:`insuredQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:C($e),type:C(Ue),onClick:()=>Ge(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:2},1024)])))),128)),y("div",he,[C(Te)?N("",!0):(v(),I("div",{key:0,class:"refresh-btn",onClick:Ve},[y("div",null,[p(k,{name:"refresh"})]),Ce])),C(Te)?N("",!0):(v(),u(_,{key:1,title:"邀请您进行身份认证",desc:"邀请您进行身份认证",link:C(We)},{default:f((()=>[p(n,{plain:"",type:"primary",class:"share-btn"},{default:f((()=>[x("分享")])),_:1})])),_:1},8,["link"])),p(n,{type:"primary",class:"submit-btn",onClick:Qe},{default:f((()=>[x("提交")])),_:1})])])]})),_:1})}}});e("default",t(Ie,[["__scopeId","data-v-7e8d1d5c"]]))}}}))}();
