!function(){var e=document.createElement("style");e.innerHTML=".page-verify .card .people[data-v-3c3e7686]{flex:1;margin-left:.53333rem;display:flex;align-items:center}.page-verify .card .people .name[data-v-3c3e7686]{font-size:.4rem;font-weight:600;color:#393d46}.page-verify .card .people .status[data-v-3c3e7686]{margin-left:.26667rem;text-align:center;width:1.2rem;height:.53333rem;line-height:.53333rem;border-radius:.05333rem;border:1px solid #99a9c0;font-size:.32rem;color:#99a9c0}.page-verify .card .people .status.verified[data-v-3c3e7686]{color:#0d6efe;border-color:#0d6efe}.page-verify .card .verify-item[data-v-3c3e7686]{display:flex;align-items:center;height:1.41333rem;line-height:1.41333rem;font-size:.4rem;color:#393d46}.page-verify .card .verify-item .no[data-v-3c3e7686]{margin-left:.64rem}.page-verify .card .verify-item .action[data-v-3c3e7686]{flex:1;display:flex;align-items:center;justify-content:flex-end;color:#99a9c0}.page-verify .card .verify-item .action .icon[data-v-3c3e7686]{margin-left:.13333rem;color:#99a9c0;font-size:.32rem}.page-verify .sign-card .resign[data-v-3c3e7686]{font-size:.37333rem;color:#0d6efe}.page-verify .sign-card .sign-body[data-v-3c3e7686]{padding-bottom:.4rem}.page-verify .sign-card .sign-body .date[data-v-3c3e7686]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-verify .sign-card .sign-body .file[data-v-3c3e7686]{margin-top:.21333rem;font-size:.37333rem;color:#393d46;line-height:.53333rem}.page-verify .sign-card .sign-body .file .file-name[data-v-3c3e7686]{color:#0d6efe}.page-verify .sign-card .sign-body .file .file-name .dun-hao[data-v-3c3e7686]{color:#393d46}.page-verify .footer[data-v-3c3e7686]{position:static;justify-content:space-between}.page-verify .footer .refresh-btn[data-v-3c3e7686]{width:.93333rem;border:none;color:#0d6efe;font-size:.4rem;line-height:.37333rem;text-align:center}.page-verify .footer .refresh-btn .text[data-v-3c3e7686]{margin-top:.13333rem;font-size:.32rem}.page-verify .footer[data-v-3c3e7686] .com-share{flex:1;margin-left:.26667rem}.page-verify .footer .submit-btn[data-v-3c3e7686]{flex:1}\n",document.head.appendChild(e),System.register(["./vendor-legacy-b51aec28.js","./index-legacy-7f3d0096.js","./index-legacy-ec4d9ebd.js","./index-legacy-53a9d553.js","./verify-legacy-662a5b1e.js","./order-legacy-e1e2c746.js","./inform-legacy-f35480fd.js"],(function(e){"use strict";var t,a,n,r,l,i,o,d,s,c,v,u,f,y,p,g,m,h,C,I,b,N,x,k,T,O,L,E,j,w,_,D,H,S,R,$,U,z,P,A,q,F,M,Y,G,Q,B,J;return{setters:[function(e){t=e.g,a=e.O,n=e.a9,r=e.E,l=e.d,i=e.y,o=e.h,d=e.r,s=e.j,c=e.k,v=e.m,u=e.z,f=e.p,y=e.J,p=e.n,g=e.L,m=e.t,h=e.A,C=e.G,I=e.F,b=e.a4,N=e.a5,x=e.C,k=e.T,T=e.D},function(e){O=e.q},function(e){L=e._,E=e.S,j=e.L,w=e.M,_=e.q,D=e.l,H=e.Q,S=e.r,R=e.H,$=e.n,U=e.P,z=e.R,P=e.T,A=e.B},function(e){q=e._},function(e){F=e.f,M=e.s,Y=e.g,G=e.a},function(e){Q=e.a},function(e){B=e.l,J=e.g}],execute:function(){const V=e=>(b("data-v-3c3e7686"),e=e(),N(),e),W={class:"page-verify"},K={class:"people"},X={class:"name"},Z={class:"verify-item"},ee=V((()=>u("div",{class:"label"},"证件号码",-1))),te={class:"no"},ae=x(" 去认证 "),ne={class:"sign-body"},re={class:"date"},le={class:"file"},ie=x(" 签名将被用于以下文件： "),oe={class:"people"},de={class:"name"},se={class:"verify-item"},ce=V((()=>u("div",{class:"label"},"证件号码",-1))),ve={class:"no"},ue=["onClick"],fe=x(" 去认证 "),ye=["onClick"],pe={class:"sign-body"},ge={class:"date"},me={class:"file"},he=x(" 签名将被用于以下文件： "),Ce={class:"footer-button footer"},Ie=V((()=>u("div",{class:"text"},"刷新",-1))),be=x("分享"),Ne=x("提交"),xe=t({setup(e){const t=1,b=2,N=a(),x=n(),L=(()=>{const e=N.query;return e.orderCode&&(e.orderNo=e.orderCode,delete e.orderCode),e})(),{saleUserId:V="D1234567-1",tenantId:xe="9991000007",templateId:ke=1,productCode:Te="CQ75CQ76",insurerCode:Oe="ancheng",isShare:Le,orderCode:Ee,orderNo:je,productCategory:we}=L,_e=new E({source:"localStorage"}),De=r([]),He=r([]),Se=r([]),Re=r([]),$e=r(),Ue=r(),ze=[],Pe=r(""),Ae=r(),qe=l().format("YYYY-MM-DD"),Fe=()=>{var e,t;null===(e=Ue.value)||void 0===e||null===(t=e.clear)||void 0===t||t.call(e)},Me=(e,t)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),G({callbackUrl:a,certiNo:e,faceAuthMode:"TENCENT",userName:t,tenantId:9991000007}).then((a=>{const{code:n,data:r}=a;if("10000"===n){const{originalUrl:a,serialNo:n}=r;window.location.href=a,_e.set("verifyData",{serialNo:n,certNo:e,name:t})}}))},Ye=e=>{const{id:t,objectType:a}=e;Pe.value="",Ae.value="";const n={1:"pdf",2:"richText",3:"link"};J({insurerCode:Oe,id:t,objectType:a,productCategory:we,orderNo:je,tenantId:xe}).then((({code:e,data:t})=>{if("10000"===e){const{textType:e,content:a,questionType:r}=(null==t?void 0:t[0])||{};2===r?(Pe.value="question",Ae.value=t):(1===e&&a.includes("png")?Pe.value="picture":Pe.value=n[e],Ae.value=a)}}))},Ge=e=>`${e}`===w.CERT,Qe=e=>{var t,a,n,r;-1===e?Me(null===(t=$e.value.tenantOrderHolder)||void 0===t?void 0:t.certNo,null===(a=$e.value.tenantOrderHolder)||void 0===a?void 0:a.name):Me(null===(n=$e.value.tenantOrderInsuredList[e])||void 0===n?void 0:n.certNo,null===(r=$e.value.tenantOrderInsuredList[e])||void 0===r?void 0:r.name)},Be=e=>{e&&ze.every((t=>t!==e))&&ze.push(e)},Je=()=>{var e,a,n,r,l;(null===(e=Ue.value)||void 0===e?void 0:e.isEmpty())?k.fail("请投保人签名"):ze.some((e=>e.isEmpty()))?k.fail("请被保人签名"):(null===(a=$e.value.tenantOrderHolder)||void 0===a||null===(n=a.extInfo)||void 0===n?void 0:n.isCert)!==t&&Ge(null===(r=$e.value.tenantOrderHolder)||void 0===r?void 0:r.certType)?k.fail("请投保人去认证"):null!==(l=$e.value.tenantOrderInsuredList)&&void 0!==l&&l.some((e=>{var a;return(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)!==t&&Ge(e.certType)}))?k.fail("请被保人去认证"):S({orderNo:Ee||je,saleUserId:V,tenantId:xe}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(a.orderStatus!==Q.PENDING&&a.orderStatus!==Q.PAYMENT_FAILED?R("paymentResult",L):T.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{var e,a;const n=null===(e=Ue.value)||void 0===e?void 0:e.save();Promise.all([M("HOLDER",n,null===(a=$e.value)||void 0===a?void 0:a.id,`${xe}`),...ze.map((e=>{var t;return M("INSURED",e.save(),null===(t=$e.value)||void 0===t?void 0:t.id,`${xe}`)}))]).then((()=>{$({...$e.value,pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:{...$e.value.extInfo,pageCode:"sign",templateId:ke,shareFlag:Le?"Y":"N"},venderCode:Oe}).then((e=>{const{code:a,data:n}=e;"10000"===t&&n.success&&x.push({path:U[n.pageAction.data.nextPageCode],query:{orderNo:Ee||je,saleUserId:V,tenantId:xe}})}))}))})))}))},Ve=(e=!1)=>{S({orderNo:Ee||je,saleUserId:V,tenantId:xe}).then((t=>{const{code:a,data:n}=t;if("10000"===a){var r,l;if($e.value=n,e)(null==n||null===(r=n.tenantOrderHolder)||void 0===r||null===(l=r.extInfo)||void 0===l?void 0:l.isCert)===b||null!=n&&n.tenantOrderInsuredList.some((e=>{var t;return(null===(t=e.extInfo)||void 0===t?void 0:t.isCert)===b}))?k("用户未完身份认证及签字"):null!=n&&n.tenantOrderAttachmentList.find((e=>e.category===z.ELECTRIC_SIGN&&e.objectType===P.HOLDER))&&null!=n&&n.tenantOrderAttachmentList.find((e=>e.category===z.ELECTRIC_SIGN&&e.objectType===P.INSURED))||k("用户未完身份认证及签字");setTimeout((()=>{let e=0;n.tenantOrderAttachmentList.forEach((t=>{var a,n;if(t.category===z.ELECTRIC_SIGN)if(t.objectType===P.HOLDER)null===(a=Ue.value)||void 0===a||null===(n=a.clear)||void 0===n||n.call(a),Ue.value.setDataURL(t.fileBase64);else if(t.objectType===P.INSURED){var r,l;null===(r=ze[e])||void 0===r||null===(l=r.clear)||void 0===l||l.call(r),ze[e].setDataURL(t.fileBase64),e+=1}}))}))}}))},We=()=>{Ve(!0)},Ke=i((()=>{const e={...L,isShare:1,sharePageCode:"sign"};return`${window.location.origin}/phoneVerify?${O.stringify(e)}`}));return o((()=>{Ve(),(()=>{const e={orderNo:Ee||je,productCode:Te,tenantId:xe,objectType:1},t={insurerCode:Oe,orderNo:je,productCategory:we,tenantId:xe,noticeType:4,objectType:1};Y({...e}).then((({code:e,data:t})=>{"10000"===e&&(He.value=t||[])})),Y({...e,objectType:2}).then((({code:e,data:t})=>{"10000"===e&&(De.value=t||[])})),B({...t}).then((({code:e,data:t})=>{"10000"===e&&(Re.value=t||[])})),B({...t,noticeType:5,objectType:2}).then((({code:e,data:t})=>{"10000"===e&&(Se.value=t||[])}))})();const e=_e.get("verifyData");if(e){const{serialNo:t,certNo:a,name:n}=e;F({certiNo:a,orderNo:Ee||je,serialNo:t,tenantId:xe,userName:n}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(_e.remove("verifyData"),Ve())}))}})),(e,a)=>{const n=d("ProPDFviewer"),r=d("van-button"),l=d("ProPageWrap");return s(),c(l,null,{default:v((()=>{var e;return[u("div",W,[f(j,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),f(D,{title:"投保人",class:"card"},{extra:v((()=>{var e,a,n,r,l,i,o,d,c,v;return[u("div",K,[u("div",X,y(null===(e=$e.value)||void 0===e||null===(a=e.tenantOrderHolder)||void 0===a?void 0:a.name),1),Ge(null===(n=$e.value)||void 0===n||null===(r=n.tenantOrderHolder)||void 0===r?void 0:r.certType)?(s(),p("div",{key:0,class:g(["status",{verified:(null===(l=$e.value)||void 0===l||null===(i=l.tenantOrderHolder)||void 0===i||null===(o=i.extInfo)||void 0===o?void 0:o.isCert)===t}])},y((null===(d=$e.value)||void 0===d||null===(c=d.tenantOrderHolder)||void 0===c||null===(v=c.extInfo)||void 0===v?void 0:v.isCert)===t?"已认证":"待认证"),3)):m("",!0)])]})),default:v((()=>{var e,n,r,l,i,o,d;return[u("div",Z,[ee,u("div",te,y(null===(e=$e.value)||void 0===e||null===(n=e.tenantOrderHolder)||void 0===n?void 0:n.certNo),1),(null===(r=$e.value)||void 0===r||null===(l=r.tenantOrderHolder)||void 0===l||null===(i=l.extInfo)||void 0===i?void 0:i.isCert)!==t&&Ge(null===(o=$e.value)||void 0===o||null===(d=o.tenantOrderHolder)||void 0===d?void 0:d.certType)?(s(),p("div",{key:0,class:"action",onClick:a[0]||(a[0]=e=>Qe(-1))},[ae,f(_,{name:"right_arrow",class:"icon"})])):m("",!0)])]})),_:1}),f(D,{key:"-1",title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",{class:"resign",onClick:Fe},"重签")])),default:v((()=>[f(H,{ref_key:"holderSign",ref:Ue,class:"sign"},null,512),u("div",ne,[u("div",re,"签名日期： "+y(h(qe)),1),u("div",le,[ie,u("span",null,[(s(!0),p(I,null,C(He.value,((e,t)=>(s(),c(n,{key:`holderFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:h(A)(e.materialContent,e.materialSource+""),onClick:a[1]||(a[1]=()=>"")},null,8,["title","content","type"])))),128))]),(s(!0),p(I,null,C(Re.value,((e,t)=>(s(),c(n,{key:`holderQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:Ae.value,type:Pe.value,onClick:()=>Ye(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:1}),(s(!0),p(I,null,C(null===(e=$e.value)||void 0===e?void 0:e.tenantOrderInsuredList,((e,r)=>(s(),p("div",{key:r},[f(D,{title:"被保人",class:"card"},{extra:v((()=>{var a,n;return[u("div",oe,[u("div",de,y(e.name),1),Ge(e.certType)?(s(),p("div",{key:0,class:g(["status",{verified:(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)===t}])},y((null===(n=e.extInfo)||void 0===n?void 0:n.isCert)===t?"已认证":"待认证"),3)):m("",!0)])]})),default:v((()=>{var a;return[u("div",se,[ce,u("div",ve,y(e.certNo),1),(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)!==t&&Ge(e.certType)?(s(),p("div",{key:0,class:"action",onClick:e=>Qe(r)},[fe,f(_,{name:"right_arrow",class:"icon"})],8,ue)):m("",!0)])]})),_:2},1024),f(D,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",{class:"resign",onClick:e=>(e=>{var t,a;null===(t=ze[e])||void 0===t||null===(a=t.clear)||void 0===a||a.call(t)})(r)},"重签",8,ye)])),default:v((()=>[f(H,{ref_for:!0,ref:Be,class:"sign"}),u("div",pe,[u("div",ge,"签名日期： "+y(h(qe)),1),u("div",me,[he,(s(!0),p(I,null,C(De.value,((e,t)=>(s(),c(n,{key:`insuredFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:h(A)(e.materialContent,e.materialSource+""),onClick:a[2]||(a[2]=()=>"")},null,8,["title","content","type"])))),128)),(s(!0),p(I,null,C(Se.value,((e,t)=>(s(),c(n,{key:`insuredQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:Ae.value,type:Pe.value,onClick:()=>Ye(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:2},1024)])))),128)),u("div",Ce,[h(Le)?m("",!0):(s(),p("div",{key:0,class:"refresh-btn",onClick:We},[u("div",null,[f(_,{name:"refresh"})]),Ie])),h(Le)?m("",!0):(s(),c(q,{key:1,title:"邀请您进行身份认证",desc:"邀请您进行身份认证",link:h(Ke)},{default:v((()=>[f(r,{plain:"",type:"primary",class:"share-btn"},{default:v((()=>[be])),_:1})])),_:1},8,["link"])),f(r,{type:"primary",class:"submit-btn",onClick:Je},{default:v((()=>[Ne])),_:1})])])]})),_:1})}}});e("default",L(xe,[["__scopeId","data-v-3c3e7686"]]))}}}))}();
