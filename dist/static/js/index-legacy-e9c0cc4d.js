!function(){var e=document.createElement("style");e.innerHTML=".page-verify .card .people[data-v-2d767e5c]{flex:1;margin-left:.53333rem;display:flex;align-items:center}.page-verify .card .people .name[data-v-2d767e5c]{font-size:.4rem;font-weight:600;color:#393d46}.page-verify .card .people .status[data-v-2d767e5c]{margin-left:.26667rem;text-align:center;width:1.2rem;height:.53333rem;line-height:.53333rem;border-radius:.05333rem;border:1px solid #99a9c0;font-size:.32rem;color:#99a9c0}.page-verify .card .people .status.verified[data-v-2d767e5c]{color:var(--zaui-brand, green);border-color:var(--zaui-brand, green)}.page-verify .card .verify-item[data-v-2d767e5c]{display:flex;align-items:center;height:1.41333rem;line-height:1.41333rem;font-size:.4rem;color:#393d46}.page-verify .card .verify-item .no[data-v-2d767e5c]{margin-left:.64rem}.page-verify .card .verify-item .action[data-v-2d767e5c]{flex:1;display:flex;align-items:center;justify-content:flex-end;color:#99a9c0}.page-verify .card .verify-item .action .icon[data-v-2d767e5c]{margin-left:.13333rem;color:#99a9c0;font-size:.32rem}.page-verify .sign-card .resign[data-v-2d767e5c]{font-size:.37333rem;color:var(--zaui-brand, green)}.page-verify .sign-card .sign-body[data-v-2d767e5c]{padding-bottom:.4rem}.page-verify .sign-card .sign-body .date[data-v-2d767e5c]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-verify .sign-card .sign-body .file[data-v-2d767e5c]{margin-top:.21333rem;font-size:.37333rem;color:#393d46;line-height:.53333rem}.page-verify .sign-card .sign-body .file .file-name[data-v-2d767e5c]{color:var(--zaui-brand, green)}.page-verify .sign-card .sign-body .file .file-name .dun-hao[data-v-2d767e5c]{color:#393d46}.page-verify .footer[data-v-2d767e5c]{position:static;justify-content:space-between}.page-verify .footer .refresh-btn[data-v-2d767e5c]{width:.93333rem;border:none;color:var(--zaui-brand, green);font-size:.4rem;line-height:.37333rem;text-align:center}.page-verify .footer .refresh-btn .text[data-v-2d767e5c]{margin-top:.13333rem;font-size:.32rem}.page-verify .footer[data-v-2d767e5c] .com-share{flex:1;margin-left:.26667rem}.page-verify .footer .submit-btn[data-v-2d767e5c]{flex:1}\n",document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./index-legacy-7f3d0096.js","./index-legacy-d4bfd5a1.js","./index-legacy-8ed601a9.js","./verify-legacy-f112a9da.js","./order-legacy-c2bcb521.js","./inform-legacy-77219040.js"],(function(e){"use strict";var t,a,n,r,i,l,o,d,c,s,v,u,f,y,g,p,m,h,C,b,I,N,x,k,T,w,O,L,E,j,_,D,H,S,z,R,$,U,A,P,q,F,Y,G,M,Q,B,J;return{setters:[function(e){t=e.g,a=e.O,n=e.a9,r=e.E,i=e.d,l=e.y,o=e.h,d=e.r,c=e.j,s=e.k,v=e.m,u=e.z,f=e.p,y=e.J,g=e.n,p=e.L,m=e.t,h=e.A,C=e.G,b=e.F,I=e.a4,N=e.a5,x=e.C,k=e.T,T=e.D},function(e){w=e.q},function(e){O=e._,L=e.S,E=e.m,j=e.C,_=e.d,D=e.a,H=e.o,S=e.k,z=e.g,R=e.p,$=e.n,U=e.b,A=e.A,P=e.q},function(e){q=e._},function(e){F=e.f,Y=e.s,G=e.g,M=e.a},function(e){Q=e.a},function(e){B=e.g,J=e.l}],execute:function(){const V=e=>(I("data-v-2d767e5c"),e=e(),N(),e),W={class:"page-verify"},K={class:"people"},X={class:"name"},Z={class:"verify-item"},ee=V((()=>u("div",{class:"label"},"证件号码",-1))),te={class:"no"},ae=x(" 去认证 "),ne={class:"sign-body"},re={class:"date"},ie={class:"file"},le=x(" 签名将被用于以下文件： "),oe={class:"people"},de={class:"name"},ce={class:"verify-item"},se=V((()=>u("div",{class:"label"},"证件号码",-1))),ve={class:"no"},ue=["onClick"],fe=x(" 去认证 "),ye=["onClick"],ge={class:"sign-body"},pe={class:"date"},me={class:"file"},he=x(" 签名将被用于以下文件： "),Ce={class:"footer-button footer"},be=V((()=>u("div",{class:"text"},"刷新",-1))),Ie=x("分享"),Ne=x("提交"),xe=t({setup(e){const t=1,I=2,N=a(),x=n(),O=(()=>{const e=N.query;return e.orderCode&&(e.orderNo=e.orderCode,delete e.orderCode),e})(),{saleUserId:V="D1234567-1",tenantId:xe="9991000007",templateId:ke=1,productCode:Te="CQ75CQ76",insurerCode:we="ancheng",isShare:Oe,orderCode:Le,orderNo:Ee,productCategory:je}=O,_e=new L({source:"localStorage"}),De=r([]),He=r([]),Se=r([]),ze=r([]),Re=r(),$e=r(),Ue=[],Ae=r(""),Pe=r(),qe=i().format("YYYY-MM-DD"),Fe=()=>{var e,t;null===(e=$e.value)||void 0===e||null===(t=e.clear)||void 0===t||t.call(e)},Ye=(e,t)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),M({callbackUrl:a,certiNo:e,faceAuthMode:"TENCENT",userName:t,tenantId:9991000007}).then((a=>{const{code:n,data:r}=a;if("10000"===n){const{originalUrl:a,serialNo:n}=r;window.location.href=a,_e.set("verifyData",{serialNo:n,certNo:e,name:t})}}))},Ge=e=>{const{id:t,objectType:a}=e;Ae.value="",Pe.value="";const n={1:"pdf",2:"richText",3:"link"};B({insurerCode:we,id:t,objectType:a,productCategory:je,orderNo:Ee,tenantId:xe}).then((({code:e,data:t})=>{if("10000"===e){const{textType:e,content:a,questionType:r}=(null==t?void 0:t[0])||{};2===r?(Ae.value="question",Pe.value=t):(1===e&&a.includes("png")?Ae.value="picture":Ae.value=n[e],Pe.value=a)}}))},Me=e=>`${e}`===j.CERT,Qe=e=>{var t,a,n,r;-1===e?Ye(null===(t=Re.value.tenantOrderHolder)||void 0===t?void 0:t.certNo,null===(a=Re.value.tenantOrderHolder)||void 0===a?void 0:a.name):Ye(null===(n=Re.value.tenantOrderInsuredList[e])||void 0===n?void 0:n.certNo,null===(r=Re.value.tenantOrderInsuredList[e])||void 0===r?void 0:r.name)},Be=e=>{e&&Ue.every((t=>t!==e))&&Ue.push(e)},Je=()=>{var e,a,n,r;(null===(e=$e.value)||void 0===e?void 0:e.isEmpty())?k.fail("请投保人签名"):(null===(a=Re.value.tenantOrderHolder)||void 0===a||null===(n=a.extInfo)||void 0===n?void 0:n.isCert)!==t&&Me(null===(r=Re.value.tenantOrderHolder)||void 0===r?void 0:r.certType)?k.fail("请投保人去认证"):z({orderNo:Le||Ee,saleUserId:V,tenantId:xe}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(a.orderStatus!==Q.PENDING&&a.orderStatus!==Q.PAYMENT_FAILED?R("paymentResult",O):T.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{var e,a;const n=null===(e=$e.value)||void 0===e?void 0:e.save();Promise.all([Y("HOLDER",n,null===(a=Re.value)||void 0===a?void 0:a.id,`${xe}`)]).then((()=>{$({...Re.value,pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:{...Re.value.extInfo,pageCode:"sign",templateId:ke,shareFlag:Oe?"Y":"N"},venderCode:we}).then((e=>{const{code:a,data:n}=e;"10000"===t&&n.success&&x.push({path:U[n.pageAction.data.nextPageCode],query:{orderNo:Le||Ee,saleUserId:V,tenantId:xe}})}))}))})))}))},Ve=(e=!1)=>{z({orderNo:Le||Ee,saleUserId:V,tenantId:xe}).then((t=>{const{code:a,data:n}=t;if("10000"===a){var r,i;if(Re.value=n,e)(null==n||null===(r=n.tenantOrderHolder)||void 0===r||null===(i=r.extInfo)||void 0===i?void 0:i.isCert)===I||null!=n&&n.tenantOrderInsuredList.some((e=>{var t;return(null===(t=e.extInfo)||void 0===t?void 0:t.isCert)===I}))?k("用户未完身份认证及签字"):null!=n&&n.tenantOrderAttachmentList.find((e=>e.category===A.ELECTRIC_SIGN&&e.objectType===P.HOLDER))&&null!=n&&n.tenantOrderAttachmentList.find((e=>e.category===A.ELECTRIC_SIGN&&e.objectType===P.INSURED))||k("用户未完身份认证及签字");setTimeout((()=>{let e=0;n.tenantOrderAttachmentList.forEach((t=>{var a,n;if(t.category===A.ELECTRIC_SIGN)if(t.objectType===P.HOLDER)null===(a=$e.value)||void 0===a||null===(n=a.clear)||void 0===n||n.call(a),$e.value.setDataURL(t.fileBase64);else if(t.objectType===P.INSURED){var r,i;null===(r=Ue[e])||void 0===r||null===(i=r.clear)||void 0===i||i.call(r),Ue[e].setDataURL(t.fileBase64),e+=1}}))}))}}))},We=()=>{Ve(!0)},Ke=l((()=>{const e={...O,isShare:1,sharePageCode:"sign"};return`${window.location.origin}/phoneVerify?${w.stringify(e)}`}));return o((()=>{Ve(),(async()=>{const e={orderNo:Le||Ee,productCode:Te,tenantId:xe,objectType:1},t={insurerCode:we,orderNo:Ee,productCategory:je,tenantId:xe,noticeType:4,objectType:1},{code:a,data:n}=await G(e),{code:r,data:i}=await G({...e,objectType:2}),{code:l,data:o}=await J(t),{code:d,data:c}=await J({...t,noticeType:5,objectType:2});"10000"===a&&(He.value=n||[]),"10000"===r&&(De.value=i||[]),"10000"===l&&(ze.value=o||[]),"10000"===d&&(Se.value=c||[])})();const e=_e.get("verifyData");if(e){const{serialNo:t,certNo:a,name:n}=e;F({certiNo:a,orderNo:Le||Ee,serialNo:t,tenantId:xe,userName:n}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(_e.remove("verifyData"),Ve())}))}})),(e,a)=>{const n=d("ProPDFviewer"),r=d("van-button"),i=d("ProPageWrap");return c(),s(i,null,{default:v((()=>{var e;return[u("div",W,[f(E,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),f(D,{title:"投保人",class:"card"},{extra:v((()=>{var e,a,n,r,i,l,o,d,s,v;return[u("div",K,[u("div",X,y(null===(e=Re.value)||void 0===e||null===(a=e.tenantOrderHolder)||void 0===a?void 0:a.name),1),Me(null===(n=Re.value)||void 0===n||null===(r=n.tenantOrderHolder)||void 0===r?void 0:r.certType)?(c(),g("div",{key:0,class:p(["status",{verified:(null===(i=Re.value)||void 0===i||null===(l=i.tenantOrderHolder)||void 0===l||null===(o=l.extInfo)||void 0===o?void 0:o.isCert)===t}])},y((null===(d=Re.value)||void 0===d||null===(s=d.tenantOrderHolder)||void 0===s||null===(v=s.extInfo)||void 0===v?void 0:v.isCert)===t?"已认证":"待认证"),3)):m("",!0)])]})),default:v((()=>{var e,n,r,i,l,o,d;return[u("div",Z,[ee,u("div",te,y(null===(e=Re.value)||void 0===e||null===(n=e.tenantOrderHolder)||void 0===n?void 0:n.certNo),1),(null===(r=Re.value)||void 0===r||null===(i=r.tenantOrderHolder)||void 0===i||null===(l=i.extInfo)||void 0===l?void 0:l.isCert)!==t&&Me(null===(o=Re.value)||void 0===o||null===(d=o.tenantOrderHolder)||void 0===d?void 0:d.certType)?(c(),g("div",{key:0,class:"action",onClick:a[0]||(a[0]=e=>Qe(-1))},[ae,f(_,{name:"right_arrow",class:"icon"})])):m("",!0)])]})),_:1}),f(D,{key:"-1",title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",{class:"resign",onClick:Fe},"重签")])),default:v((()=>[f(H,{ref_key:"holderSign",ref:$e,class:"sign"},null,512),u("div",ne,[u("div",re,"签名日期： "+y(h(qe)),1),u("div",ie,[le,u("span",null,[(c(!0),g(b,null,C(He.value,((e,t)=>(c(),s(n,{key:`holderFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:h(S)(e.materialContent,e.materialSource+""),onClick:a[1]||(a[1]=()=>"")},null,8,["title","content","type"])))),128))]),(c(!0),g(b,null,C(ze.value,((e,t)=>(c(),s(n,{key:`holderQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:Pe.value,type:Ae.value,onClick:()=>Ge(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:1}),(c(!0),g(b,null,C(null===(e=Re.value)||void 0===e?void 0:e.tenantOrderInsuredList,((e,r)=>(c(),g("div",{key:r},[f(D,{title:"被保人",class:"card"},{extra:v((()=>{var a,n;return[u("div",oe,[u("div",de,y(e.name),1),Me(e.certType)?(c(),g("div",{key:0,class:p(["status",{verified:(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)===t}])},y((null===(n=e.extInfo)||void 0===n?void 0:n.isCert)===t?"已认证":"待认证"),3)):m("",!0)])]})),default:v((()=>{var a;return[u("div",ce,[se,u("div",ve,y(e.certNo),1),(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)!==t&&Me(e.certType)?(c(),g("div",{key:0,class:"action",onClick:e=>Qe(r)},[fe,f(_,{name:"right_arrow",class:"icon"})],8,ue)):m("",!0)])]})),_:2},1024),f(D,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",{class:"resign",onClick:e=>(e=>{var t,a;null===(t=Ue[e])||void 0===t||null===(a=t.clear)||void 0===a||a.call(t)})(r)},"重签",8,ye)])),default:v((()=>[f(H,{ref_for:!0,ref:Be,class:"sign"}),u("div",ge,[u("div",pe,"签名日期： "+y(h(qe)),1),u("div",me,[he,(c(!0),g(b,null,C(De.value,((e,t)=>(c(),s(n,{key:`insuredFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:h(S)(e.materialContent,e.materialSource+""),onClick:a[2]||(a[2]=()=>"")},null,8,["title","content","type"])))),128)),(c(!0),g(b,null,C(Se.value,((e,t)=>(c(),s(n,{key:`insuredQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:Pe.value,type:Ae.value,onClick:()=>Ge(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:2},1024)])))),128)),u("div",Ce,[h(Oe)?m("",!0):(c(),g("div",{key:0,class:"refresh-btn",onClick:We},[u("div",null,[f(_,{name:"refresh"})]),be])),h(Oe)?m("",!0):(c(),s(q,{key:1,title:"邀请您进行身份认证",desc:"邀请您进行身份认证",link:h(Ke)},{default:v((()=>[f(r,{plain:"",type:"primary",class:"share-btn"},{default:v((()=>[Ie])),_:1})])),_:1},8,["link"])),f(r,{type:"primary",class:"submit-btn",onClick:Je},{default:v((()=>[Ne])),_:1})])])]})),_:1})}}});e("default",O(xe,[["__scopeId","data-v-2d767e5c"]]))}}}))}();
