!function(){var e=document.createElement("style");e.innerHTML=".page-verify .card .people[data-v-f32640da]{flex:1;margin-left:.53333rem;display:flex;align-items:center}.page-verify .card .people .name[data-v-f32640da]{font-size:.4rem;font-weight:600;color:#393d46}.page-verify .card .people .status[data-v-f32640da]{margin-left:.26667rem;text-align:center;width:1.2rem;height:.53333rem;line-height:.53333rem;border-radius:.05333rem;border:1px solid #99a9c0;font-size:.32rem;color:#99a9c0}.page-verify .card .people .status.verified[data-v-f32640da]{color:#0d6efe;border-color:#0d6efe}.page-verify .card .verify-item[data-v-f32640da]{display:flex;align-items:center;height:1.41333rem;line-height:1.41333rem;font-size:.4rem;color:#393d46}.page-verify .card .verify-item .no[data-v-f32640da]{margin-left:.64rem}.page-verify .card .verify-item .action[data-v-f32640da]{flex:1;display:flex;align-items:center;justify-content:flex-end;color:#99a9c0}.page-verify .card .verify-item .action .icon[data-v-f32640da]{margin-left:.13333rem;color:#99a9c0;font-size:.32rem}.page-verify .sign-card .resign[data-v-f32640da]{font-size:.37333rem;color:#0d6efe}.page-verify .sign-card .sign-body[data-v-f32640da]{padding-bottom:.4rem}.page-verify .sign-card .sign-body .date[data-v-f32640da]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-verify .sign-card .sign-body .file[data-v-f32640da]{margin-top:.21333rem;font-size:.37333rem;color:#393d46;line-height:.53333rem}.page-verify .sign-card .sign-body .file .file-name[data-v-f32640da]{color:#0d6efe}.page-verify .sign-card .sign-body .file .file-name .dun-hao[data-v-f32640da]{color:#393d46}.page-verify .footer[data-v-f32640da]{position:static;justify-content:space-between}.page-verify .footer .refresh-btn[data-v-f32640da]{width:.93333rem;border:none;color:#0d6efe;font-size:.4rem;line-height:.37333rem;text-align:center}.page-verify .footer .refresh-btn .text[data-v-f32640da]{margin-top:.13333rem;font-size:.32rem}.page-verify .footer[data-v-f32640da] .com-share{flex:1;margin-left:.26667rem}.page-verify .footer .submit-btn[data-v-f32640da]{flex:1}\n",document.head.appendChild(e),System.register(["./vendor-legacy-a96446a8.js","./index-legacy-e32f1b69.js","./index-legacy-ac97a8b5.js","./index-legacy-64475561.js","./verify-legacy-936c87ec.js","./order-legacy-e1e2c746.js"],(function(e){"use strict";var t,a,r,n,i,o,l,d,s,c,v,f,u,m,g,y,p,h,C,I,x,N,b,O,k,T,E,w,L,_,D,H,S,j,R,U,z,P,$,A,G,q,M,Y,F;return{setters:[function(e){t=e.g,a=e.O,r=e.ak,n=e.E,i=e.d,o=e.y,l=e.h,d=e.r,s=e.j,c=e.k,v=e.m,f=e.z,u=e.p,m=e.J,g=e.n,y=e.L,p=e.t,h=e.A,C=e.G,I=e.F,x=e.a4,N=e.a5,b=e.C,O=e.T,k=e.D},function(e){T=e.q},function(e){E=e._,w=e.S,L=e.K,_=e.L,D=e.q,H=e.l,S=e.M,j=e.r,R=e.G,U=e.n,z=e.P,P=e.Q,$=e.R},function(e){A=e._},function(e){G=e.f,q=e.s,M=e.g,Y=e.a},function(e){F=e.a}],execute:function(){const Q=e=>(x("data-v-f32640da"),e=e(),N(),e),B={class:"page-verify"},J={class:"people"},K={class:"name"},V={class:"verify-item"},W=Q((()=>f("div",{class:"label"},"证件号码",-1))),X={class:"no"},Z=b(" 去认证 "),ee={class:"sign-body"},te={class:"date"},ae={class:"file"},re=b(" 签名将被用于以下文件： "),ne={class:"people"},ie={class:"name"},oe={class:"verify-item"},le=Q((()=>f("div",{class:"label"},"证件号码",-1))),de={class:"no"},se=["onClick"],ce=b(" 去认证 "),ve=["onClick"],fe={class:"sign-body"},ue={class:"date"},me={class:"file"},ge=b(" 签名将被用于以下文件： "),ye={class:"footer-button footer"},pe=Q((()=>f("div",{class:"text"},"刷新",-1))),he=b("分享"),Ce=b("提交"),Ie=t({setup(e){const t=1,x=2,N={1:"pdf",4:"picture",2:"richText",3:"link"},b=a(),E=r(),{saleUserId:Q="D1234567-1",tenantId:Ie="9991000007",templateId:xe=1,productCode:Ne="CQ75CQ76",insurerCode:be="ancheng",isShare:Oe,orderCode:ke,orderNo:Te}=b.query,Ee=()=>{const e=b.query;return e.orderCode&&(e.orderNo=e.orderCode),e},we=new w({source:"localStorage"}),Le=n([]),_e=n([]),De=n(),He=n(),Se=[],je=i().format("YYYY-MM-DD"),Re=o((()=>e=>{let t=1;return t=1===e.materialSource?-1!==e.materialContent.indexOf(".pdf")?1:4:e.materialSource,N[t]})),Ue=()=>{var e;null===(e=He.value)||void 0===e||e.clear()},ze=(e,t)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),Y({callbackUrl:a,certiNo:e,faceAuthMode:"TENCENT",userName:t,tenantId:9991000007}).then((a=>{const{code:r,data:n}=a;if("10000"===r){const{originalUrl:a,serialNo:r}=n;window.location.href=a,we.set("verifyData",{serialNo:r,certNo:e,name:t})}}))},Pe=e=>`${e}`===_.CERT,$e=e=>{var t,a,r,n;-1===e?ze(null===(t=De.value.tenantOrderHolder)||void 0===t?void 0:t.certNo,null===(a=De.value.tenantOrderHolder)||void 0===a?void 0:a.name):ze(null===(r=De.value.tenantOrderInsuredList[e])||void 0===r?void 0:r.certNo,null===(n=De.value.tenantOrderInsuredList[e])||void 0===n?void 0:n.name)},Ae=e=>{e&&Se.every((t=>t!==e))&&Se.push(e)},Ge=()=>{var e,a,r,n,i;(null===(e=He.value)||void 0===e?void 0:e.isEmpty())?O.fail("请投保人签名"):Se.some((e=>e.isEmpty()))?O.fail("请被保人签名"):(null===(a=De.value.tenantOrderHolder)||void 0===a||null===(r=a.extInfo)||void 0===r?void 0:r.isCert)!==t&&Pe(null===(n=De.value.tenantOrderHolder)||void 0===n?void 0:n.certType)?O.fail("请投保人去认证"):null!==(i=De.value.tenantOrderInsuredList)&&void 0!==i&&i.some((e=>{var a;return(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)!==t&&Pe(e.certType)}))?O.fail("请被保人去认证"):j({orderNo:ke||Te,saleUserId:Q,tenantId:Ie}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(a.orderStatus!==F.PENDING?R("paymentResult",Ee()):k.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{var e,a;const r=null===(e=He.value)||void 0===e?void 0:e.save();Promise.all([q("HOLDER",r,null===(a=De.value)||void 0===a?void 0:a.id,`${Ie}`),...Se.map((e=>{var t;return q("INSURED",e.save(),null===(t=De.value)||void 0===t?void 0:t.id,`${Ie}`)}))]).then((()=>{U({...De.value,pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:{...De.value.extInfo,pageCode:"sign",templateId:xe,shareFlag:Oe?"Y":"N"},venderCode:be}).then((e=>{const{code:a,data:r}=e;"10000"===t&&r.success&&E.push({path:z[r.pageAction.data.nextPageCode],query:{orderNo:ke||Te,saleUserId:Q,tenantId:Ie}})}))}))})))}))},qe=(e=!1)=>{j({orderNo:ke||Te,saleUserId:Q,tenantId:Ie}).then((t=>{const{code:a,data:r}=t;if("10000"===a){var n,i;if(De.value=r,e)(null==r||null===(n=r.tenantOrderHolder)||void 0===n||null===(i=n.extInfo)||void 0===i?void 0:i.isCert)===x||null!=r&&r.tenantOrderInsuredList.some((e=>{var t;return(null===(t=e.extInfo)||void 0===t?void 0:t.isCert)===x}))?O("用户未完身份认证及签字"):null!=r&&r.tenantOrderAttachmentList.find((e=>e.category===P.ELECTRIC_SIGN&&e.objectType===$.HOLDER))&&null!=r&&r.tenantOrderAttachmentList.find((e=>e.category===P.ELECTRIC_SIGN&&e.objectType===$.INSURED))||O("用户未完身份认证及签字");setTimeout((()=>{let e=0;r.tenantOrderAttachmentList.forEach((t=>{t.category===P.ELECTRIC_SIGN&&(t.objectType===$.HOLDER?(He.value.clear(),He.value.setDataURL(t.fileBase64)):t.objectType===$.INSURED&&(Se[e].clear(),Se[e].setDataURL(t.fileBase64),e+=1))}))}))}}))},Me=()=>{qe(!0)},Ye=o((()=>{const e={...Ee(),isShare:1,sharePageCode:"sign"};return`${window.location.origin}/phoneVerify?${T.stringify(e)}`}));return l((()=>{qe(),(()=>{const e={orderNo:ke||Te,productCode:Ne,tenantId:Ie,objectType:1};M({...e}).then((({code:e,data:t})=>{"10000"===e&&(_e.value=t||[])})),M({...e,objectType:2}).then((({code:e,data:t})=>{"10000"===e&&(Le.value=t||[])}))})();const e=we.get("verifyData");if(e){const{serialNo:t,certNo:a,name:r}=e;G({certiNo:a,orderNo:ke||Te,serialNo:t,tenantId:Ie,userName:r}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(we.remove("verifyData"),qe())}))}})),(e,a)=>{const r=d("ProPDFviewer"),n=d("van-button"),i=d("ProPageWrap");return s(),c(i,null,{default:v((()=>{var e;return[f("div",B,[u(L,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),u(H,{title:"投保人",class:"card"},{extra:v((()=>{var e,a,r,n,i,o,l,d,c,v;return[f("div",J,[f("div",K,m(null===(e=De.value)||void 0===e||null===(a=e.tenantOrderHolder)||void 0===a?void 0:a.name),1),Pe(null===(r=De.value)||void 0===r||null===(n=r.tenantOrderHolder)||void 0===n?void 0:n.certType)?(s(),g("div",{key:0,class:y(["status",{verified:(null===(i=De.value)||void 0===i||null===(o=i.tenantOrderHolder)||void 0===o||null===(l=o.extInfo)||void 0===l?void 0:l.isCert)===t}])},m((null===(d=De.value)||void 0===d||null===(c=d.tenantOrderHolder)||void 0===c||null===(v=c.extInfo)||void 0===v?void 0:v.isCert)===t?"已认证":"待认证"),3)):p("",!0)])]})),default:v((()=>{var e,r,n,i,o,l,d;return[f("div",V,[W,f("div",X,m(null===(e=De.value)||void 0===e||null===(r=e.tenantOrderHolder)||void 0===r?void 0:r.certNo),1),(null===(n=De.value)||void 0===n||null===(i=n.tenantOrderHolder)||void 0===i||null===(o=i.extInfo)||void 0===o?void 0:o.isCert)!==t&&Pe(null===(l=De.value)||void 0===l||null===(d=l.tenantOrderHolder)||void 0===d?void 0:d.certType)?(s(),g("div",{key:0,class:"action",onClick:a[0]||(a[0]=e=>$e(-1))},[Z,u(D,{name:"right_arrow",class:"icon"})])):p("",!0)])]})),_:1}),u(H,{title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[f("div",{class:"resign",onClick:Ue},"重签")])),default:v((()=>[u(S,{ref_key:"holderSign",ref:He,class:"sign"},null,512),f("div",ee,[f("div",te,"签名日期： "+m(h(je)),1),f("div",ae,[re,(s(!0),g(I,null,C(_e.value,((e,t)=>(s(),c(r,{key:t,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:h(Re)(e)},null,8,["title","content","type"])))),128))])])])),_:1}),(s(!0),g(I,null,C(null===(e=De.value)||void 0===e?void 0:e.tenantOrderInsuredList,((e,a)=>(s(),g("div",{key:a},[u(H,{title:"被保人",class:"card"},{extra:v((()=>{var a,r;return[f("div",ne,[f("div",ie,m(e.name),1),Pe(e.certType)?(s(),g("div",{key:0,class:y(["status",{verified:(null===(a=e.extInfo)||void 0===a?void 0:a.isCert)===t}])},m((null===(r=e.extInfo)||void 0===r?void 0:r.isCert)===t?"已认证":"待认证"),3)):p("",!0)])]})),default:v((()=>{var r;return[f("div",oe,[le,f("div",de,m(e.certNo),1),(null===(r=e.extInfo)||void 0===r?void 0:r.isCert)!==t&&Pe(e.certType)?(s(),g("div",{key:0,class:"action",onClick:e=>$e(a)},[ce,u(D,{name:"right_arrow",class:"icon"})],8,se)):p("",!0)])]})),_:2},1024),u(H,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[f("div",{class:"resign",onClick:e=>(e=>{Se[e].clear()})(a)},"重签",8,ve)])),default:v((()=>[u(S,{ref_for:!0,ref:Ae,class:"sign"}),f("div",fe,[f("div",ue,"签名日期： "+m(h(je)),1),f("div",me,[ge,(s(!0),g(I,null,C(Le.value,((e,t)=>(s(),c(r,{key:t,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:h(Re)(e)},null,8,["title","content","type"])))),128))])])])),_:2},1024)])))),128)),f("div",ye,[h(Oe)?p("",!0):(s(),g("div",{key:0,class:"refresh-btn",onClick:Me},[f("div",null,[u(D,{name:"refresh"})]),pe])),h(Oe)?p("",!0):(s(),c(A,{key:1,title:"邀请您进行身份认证",desc:"邀请您进行身份认证",link:h(Ye)},{default:v((()=>[u(n,{plain:"",type:"primary",class:"share-btn"},{default:v((()=>[he])),_:1})])),_:1},8,["link"])),u(n,{type:"primary",class:"submit-btn",onClick:Ge},{default:v((()=>[Ce])),_:1})])])]})),_:1})}}});e("default",E(Ie,[["__scopeId","data-v-f32640da"]]))}}}))}();
