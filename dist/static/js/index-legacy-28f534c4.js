!function(){var e=document.createElement("style");e.innerHTML=".page-verify .card .people[data-v-0ea93eae]{flex:1;margin-left:.53333rem;display:flex;align-items:center}.page-verify .card .people .name[data-v-0ea93eae]{font-size:.4rem;font-weight:600;color:#393d46}.page-verify .card .people .status[data-v-0ea93eae]{margin-left:.26667rem;text-align:center;width:1.2rem;height:.53333rem;line-height:.53333rem;border-radius:.05333rem;border:1px solid #99a9c0;font-size:.32rem;color:#99a9c0}.page-verify .card .people .status.verified[data-v-0ea93eae]{color:#0d6efe;border-color:#0d6efe}.page-verify .card .verify-item[data-v-0ea93eae]{display:flex;align-items:center;height:1.41333rem;line-height:1.41333rem;font-size:.4rem;color:#393d46}.page-verify .card .verify-item .no[data-v-0ea93eae]{margin-left:.64rem}.page-verify .card .verify-item .action[data-v-0ea93eae]{flex:1;display:flex;align-items:center;justify-content:flex-end;color:#99a9c0}.page-verify .card .verify-item .action .icon[data-v-0ea93eae]{margin-left:.13333rem;color:#99a9c0;font-size:.32rem}.page-verify .sign-card .resign[data-v-0ea93eae]{font-size:.37333rem;color:#0d6efe}.page-verify .sign-card .sign-body[data-v-0ea93eae]{padding-bottom:.4rem}.page-verify .sign-card .sign-body .date[data-v-0ea93eae]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-verify .sign-card .sign-body .file[data-v-0ea93eae]{margin-top:.21333rem;font-size:.37333rem;color:#393d46;line-height:.53333rem}.page-verify .sign-card .sign-body .file .file-name[data-v-0ea93eae]{color:#0d6efe}.page-verify .sign-card .sign-body .file .file-name .dun-hao[data-v-0ea93eae]{color:#393d46}.page-verify .footer[data-v-0ea93eae]{position:static;justify-content:space-between}.page-verify .footer .refresh-btn[data-v-0ea93eae]{width:.93333rem;border:none;color:#0d6efe;font-size:.4rem;line-height:.37333rem;text-align:center}.page-verify .footer .refresh-btn .text[data-v-0ea93eae]{margin-top:.13333rem;font-size:.32rem}.page-verify .footer[data-v-0ea93eae] .com-share{flex:1;margin-left:.26667rem}.page-verify .footer .submit-btn[data-v-0ea93eae]{flex:1}\n",document.head.appendChild(e),System.register(["./vendor-legacy-b51aec28.js","./index-legacy-7f3d0096.js","./index-legacy-20a0a9aa.js","./index-legacy-2e22cd25.js","./verify-legacy-aa51232d.js","./order-legacy-e1e2c746.js","./inform-legacy-402444ec.js"],(function(e){"use strict";var t,a,r,n,i,o,l,d,s,c,v,u,f,y,p,g,m,h,C,I,b,N,x,T,k,O,L,E,j,w,_,D,H,S,R,U,$,z,P,q,A,F,G,M,Y,Q,B,J;return{setters:[function(e){t=e.g,a=e.O,r=e.a9,n=e.E,i=e.d,o=e.y,l=e.h,d=e.r,s=e.j,c=e.k,v=e.m,u=e.z,f=e.p,y=e.J,p=e.n,g=e.L,m=e.t,h=e.A,C=e.G,I=e.F,b=e.a4,N=e.a5,x=e.C,T=e.T,k=e.D},function(e){O=e.q},function(e){L=e._,E=e.S,j=e.L,w=e.M,_=e.q,D=e.l,H=e.Q,S=e.r,R=e.H,U=e.n,$=e.P,z=e.R,P=e.T,q=e.B},function(e){A=e._},function(e){F=e.f,G=e.s,M=e.g,Y=e.a},function(e){Q=e.a},function(e){B=e.l,J=e.g}],execute:function(){const V=e=>(b("data-v-0ea93eae"),e=e(),N(),e),W={class:"page-verify"},K={class:"people"},X={class:"name"},Z={class:"verify-item"},ee=V((()=>u("div",{class:"label"},"证件号码",-1))),te={class:"no"},ae=x(" 去认证 "),re={class:"sign-body"},ne={class:"date"},ie={class:"file"},oe=x(" 签名将被用于以下文件： "),le={class:"people"},de={class:"name"},se={class:"verify-item"},ce=V((()=>u("div",{class:"label"},"证件号码",-1))),ve={class:"no"},ue=["onClick"],fe=x(" 去认证 "),ye=["onClick"],pe={class:"sign-body"},ge={class:"date"},me={class:"file"},he=x(" 签名将被用于以下文件： "),Ce={class:"footer-button footer"},Ie=V((()=>u("div",{class:"text"},"刷新",-1))),be=x("分享"),Ne=x("提交"),xe=t({setup(e){const t=1,b=2,N=a(),x=r(),{saleUserId:L="D1234567-1",tenantId:V="9991000007",templateId:xe=1,productCode:Te="CQ75CQ76",insurerCode:ke="ancheng",isShare:Oe,orderCode:Le,orderNo:Ee,productCategory:je}=N.query,we=()=>{const e=N.query;return e.orderCode&&(e.orderNo=e.orderCode),e},_e=new E({source:"localStorage"}),De=n([]),He=n([]),Se=n([]),Re=n([]),Ue=n(),$e=n(),ze=[],Pe=n(""),qe=n(),Ae=i().format("YYYY-MM-DD"),Fe=()=>{var e;null===(e=$e.value)||void 0===e||e.clear()},Ge=(e,t)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),Y({callbackUrl:a,certiNo:e,faceAuthMode:"TENCENT",userName:t,tenantId:9991000007}).then((a=>{const{code:r,data:n}=a;if("10000"===r){const{originalUrl:a,serialNo:r}=n;window.location.href=a,_e.set("verifyData",{serialNo:r,certNo:e,name:t})}}))},Me=e=>`${e}`===w.CERT,Ye=e=>{var t,a,r,n;-1===e?Ge(null===(t=Ue.value.tenantOrderHolder)||void 0===t?void 0:t.certNo,null===(a=Ue.value.tenantOrderHolder)||void 0===a?void 0:a.name):Ge(null===(r=Ue.value.tenantOrderInsuredList[e])||void 0===r?void 0:r.certNo,null===(n=Ue.value.tenantOrderInsuredList[e])||void 0===n?void 0:n.name)},Qe=e=>{e&&ze.every((t=>t!==e))&&ze.push(e)},Be=()=>{var e,a,r,n,i;(null===(e=$e.value)||void 0===e?void 0:e.isEmpty())?T.fail("请投保人签名"):ze.some((e=>e.isEmpty()))?T.fail("请被保人签名"):(null===(a=Ue.value.tenantOrderHolder)||void 0===a||null===(r=a.extInfo)||void 0===r?void 0:r.isCert)!==t&&Me(null===(n=Ue.value.tenantOrderHolder)||void 0===n?void 0:n.certType)?T.fail("请投保人去认证"):null!==(i=Ue.value.tenantOrderInsuredList)&&void 0!==i&&i.some((e=>{var a;return(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)!==t&&Me(e.certType)}))?T.fail("请被保人去认证"):S({orderNo:Le||Ee,saleUserId:L,tenantId:V}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(a.orderStatus!==Q.PENDING?R("paymentResult",we()):k.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{var e,a;const r=null===(e=$e.value)||void 0===e?void 0:e.save();Promise.all([G("HOLDER",r,null===(a=Ue.value)||void 0===a?void 0:a.id,`${V}`),...ze.map((e=>{var t;return G("INSURED",e.save(),null===(t=Ue.value)||void 0===t?void 0:t.id,`${V}`)}))]).then((()=>{U({...Ue.value,pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:{...Ue.value.extInfo,pageCode:"sign",templateId:xe,shareFlag:Oe?"Y":"N"},venderCode:ke}).then((e=>{const{code:a,data:r}=e;"10000"===t&&r.success&&x.push({path:$[r.pageAction.data.nextPageCode],query:{orderNo:Le||Ee,saleUserId:L,tenantId:V}})}))}))})))}))},Je=(e=!1)=>{S({orderNo:Le||Ee,saleUserId:L,tenantId:V}).then((t=>{const{code:a,data:r}=t;if("10000"===a){var n,i;if(Ue.value=r,e)(null==r||null===(n=r.tenantOrderHolder)||void 0===n||null===(i=n.extInfo)||void 0===i?void 0:i.isCert)===b||null!=r&&r.tenantOrderInsuredList.some((e=>{var t;return(null===(t=e.extInfo)||void 0===t?void 0:t.isCert)===b}))?T("用户未完身份认证及签字"):null!=r&&r.tenantOrderAttachmentList.find((e=>e.category===z.ELECTRIC_SIGN&&e.objectType===P.HOLDER))&&null!=r&&r.tenantOrderAttachmentList.find((e=>e.category===z.ELECTRIC_SIGN&&e.objectType===P.INSURED))||T("用户未完身份认证及签字");setTimeout((()=>{let e=0;r.tenantOrderAttachmentList.forEach((t=>{t.category===z.ELECTRIC_SIGN&&(t.objectType===P.HOLDER?($e.value.clear(),$e.value.setDataURL(t.fileBase64)):t.objectType===P.INSURED&&(ze[e].clear(),ze[e].setDataURL(t.fileBase64),e+=1))}))}))}}))},Ve=()=>{Je(!0)},We=o((()=>{const e={...we(),isShare:1,sharePageCode:"sign"};return`${window.location.origin}/phoneVerify?${O.stringify(e)}`}));return l((()=>{Je(),(()=>{const e={orderNo:Le||Ee,productCode:Te,tenantId:V,objectType:1},t={insurerCode:ke,orderNo:Ee,productCategory:je,tenantId:V,noticeType:4,objectType:1};M({...e}).then((({code:e,data:t})=>{"10000"===e&&(He.value=t||[])})),M({...e,objectType:2}).then((({code:e,data:t})=>{"10000"===e&&(De.value=t||[])})),B({...t}).then((({code:e,data:t})=>{"10000"===e&&(Re.value=t||[])})),B({...t,noticeType:5,objectType:2}).then((({code:e,data:t})=>{"10000"===e&&(Se.value=t||[])}))})();const e=_e.get("verifyData");if(e){const{serialNo:t,certNo:a,name:r}=e;F({certiNo:a,orderNo:Le||Ee,serialNo:t,tenantId:V,userName:r}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(_e.remove("verifyData"),Je())}))}})),(e,a)=>{const r=d("ProPDFviewer"),n=d("van-button"),i=d("ProPageWrap");return s(),c(i,null,{default:v((()=>{var e;return[u("div",W,[f(j,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),f(D,{title:"投保人",class:"card"},{extra:v((()=>{var e,a,r,n,i,o,l,d,c,v;return[u("div",K,[u("div",X,y(null===(e=Ue.value)||void 0===e||null===(a=e.tenantOrderHolder)||void 0===a?void 0:a.name),1),Me(null===(r=Ue.value)||void 0===r||null===(n=r.tenantOrderHolder)||void 0===n?void 0:n.certType)?(s(),p("div",{key:0,class:g(["status",{verified:(null===(i=Ue.value)||void 0===i||null===(o=i.tenantOrderHolder)||void 0===o||null===(l=o.extInfo)||void 0===l?void 0:l.isCert)===t}])},y((null===(d=Ue.value)||void 0===d||null===(c=d.tenantOrderHolder)||void 0===c||null===(v=c.extInfo)||void 0===v?void 0:v.isCert)===t?"已认证":"待认证"),3)):m("",!0)])]})),default:v((()=>{var e,r,n,i,o,l,d;return[u("div",Z,[ee,u("div",te,y(null===(e=Ue.value)||void 0===e||null===(r=e.tenantOrderHolder)||void 0===r?void 0:r.certNo),1),(null===(n=Ue.value)||void 0===n||null===(i=n.tenantOrderHolder)||void 0===i||null===(o=i.extInfo)||void 0===o?void 0:o.isCert)!==t&&Me(null===(l=Ue.value)||void 0===l||null===(d=l.tenantOrderHolder)||void 0===d?void 0:d.certType)?(s(),p("div",{key:0,class:"action",onClick:a[0]||(a[0]=e=>Ye(-1))},[ae,f(_,{name:"right_arrow",class:"icon"})])):m("",!0)])]})),_:1}),f(D,{title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",{class:"resign",onClick:Fe},"重签")])),default:v((()=>[f(H,{ref_key:"holderSign",ref:$e,class:"sign"},null,512),u("div",re,[u("div",ne,"签名日期： "+y(h(Ae)),1),u("div",ie,[oe,(s(!0),p(I,null,C(He.value,((e,t)=>(s(),c(r,{key:`holderFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:h(q)(e.materialContent,e.materialSource+""),onClick:a[1]||(a[1]=()=>"")},null,8,["title","content","type"])))),128))])])])),_:1}),(s(!0),p(I,null,C(null===(e=Ue.value)||void 0===e?void 0:e.tenantOrderInsuredList,((e,n)=>(s(),p("div",{key:n},[f(D,{title:"被保人",class:"card"},{extra:v((()=>{var a,r;return[u("div",le,[u("div",de,y(e.name),1),Me(e.certType)?(s(),p("div",{key:0,class:g(["status",{verified:(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)===t}])},y((null===(r=e.extInfo)||void 0===r?void 0:r.isCert)===t?"已认证":"待认证"),3)):m("",!0)])]})),default:v((()=>{var a;return[u("div",se,[ce,u("div",ve,y(e.certNo),1),(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)!==t&&Me(e.certType)?(s(),p("div",{key:0,class:"action",onClick:e=>Ye(n)},[fe,f(_,{name:"right_arrow",class:"icon"})],8,ue)):m("",!0)])]})),_:2},1024),f(D,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",{class:"resign",onClick:e=>(e=>{ze[e].clear()})(n)},"重签",8,ye)])),default:v((()=>[f(H,{ref_for:!0,ref:Qe,class:"sign"}),u("div",pe,[u("div",ge,"签名日期： "+y(h(Ae)),1),u("div",me,[he,(s(!0),p(I,null,C(De.value,((e,t)=>(s(),c(r,{key:`insuredFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:h(q)(e.materialContent,e.materialSource+""),onClick:a[2]||(a[2]=()=>"")},null,8,["title","content","type"])))),128)),(s(!0),p(I,null,C(Se.value,((e,t)=>(s(),c(r,{key:`insuredQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:qe.value,type:Pe.value,onClick:()=>(e=>{const{id:t,objectType:a}=e;Pe.value="",qe.value="";const r={1:"pdf",2:"richText",3:"link"};J({insurerCode:ke,id:t,objectType:a,productCategory:je,orderNo:Ee,tenantId:V}).then((({code:e,data:t})=>{if("10000"===e){const{textType:e,content:a,questionType:n}=(null==t?void 0:t[0])||{};2===n?(Pe.value="question",qe.value=t):(1===e&&a.includes("png")?Pe.value="picture":Pe.value=r[e],qe.value=a)}}))})(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:2},1024)])))),128)),u("div",Ce,[h(Oe)?m("",!0):(s(),p("div",{key:0,class:"refresh-btn",onClick:Ve},[u("div",null,[f(_,{name:"refresh"})]),Ie])),h(Oe)?m("",!0):(s(),c(A,{key:1,title:"邀请您进行身份认证",desc:"邀请您进行身份认证",link:h(We)},{default:v((()=>[f(n,{plain:"",type:"primary",class:"share-btn"},{default:v((()=>[be])),_:1})])),_:1},8,["link"])),f(n,{type:"primary",class:"submit-btn",onClick:Be},{default:v((()=>[Ne])),_:1})])])]})),_:1})}}});e("default",L(xe,[["__scopeId","data-v-0ea93eae"]]))}}}))}();
