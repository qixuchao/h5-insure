!function(){var e=document.createElement("style");e.innerHTML=".page-verify .card .people[data-v-7e8d1d5c]{flex:1;margin-left:.53333rem;display:flex;align-items:center}.page-verify .card .people .name[data-v-7e8d1d5c]{font-size:.4rem;font-weight:600;color:#393d46}.page-verify .card .people .status[data-v-7e8d1d5c]{margin-left:.26667rem;text-align:center;width:1.2rem;height:.53333rem;line-height:.53333rem;border-radius:.05333rem;border:1px solid #99a9c0;font-size:.32rem;color:#99a9c0}.page-verify .card .people .status.verified[data-v-7e8d1d5c]{color:var(--van-primary-color, var(--zaui-brand));border-color:var(--van-primary-color, var(--zaui-brand))}.page-verify .card .verify-item[data-v-7e8d1d5c]{display:flex;align-items:center;height:1.41333rem;line-height:1.41333rem;font-size:.4rem;color:#393d46}.page-verify .card .verify-item .no[data-v-7e8d1d5c]{margin-left:.64rem}.page-verify .card .verify-item .action[data-v-7e8d1d5c]{flex:1;display:flex;align-items:center;justify-content:flex-end;color:#99a9c0}.page-verify .card .verify-item .action .icon[data-v-7e8d1d5c]{margin-left:.13333rem;color:#99a9c0;font-size:.32rem}.page-verify .sign-card .resign[data-v-7e8d1d5c]{font-size:.37333rem;color:var(--van-primary-color, var(--zaui-brand))}.page-verify .sign-card .sign-body[data-v-7e8d1d5c]{padding-bottom:.4rem}.page-verify .sign-card .sign-body .date[data-v-7e8d1d5c]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-verify .sign-card .sign-body .file[data-v-7e8d1d5c]{margin-top:.21333rem;font-size:.37333rem;color:#393d46;line-height:.53333rem}.page-verify .sign-card .sign-body .file .file-name[data-v-7e8d1d5c]{color:var(--van-primary-color, var(--zaui-brand))}.page-verify .sign-card .sign-body .file .file-name .dun-hao[data-v-7e8d1d5c]{color:#393d46}.page-verify .footer[data-v-7e8d1d5c]{position:static;justify-content:space-between}.page-verify .footer .refresh-btn[data-v-7e8d1d5c]{width:.93333rem;border:none;color:var(--van-primary-color, var(--zaui-brand));font-size:.4rem;line-height:.37333rem;text-align:center}.page-verify .footer .refresh-btn .text[data-v-7e8d1d5c]{margin-top:.13333rem;font-size:.32rem}.page-verify .footer[data-v-7e8d1d5c] .com-share{flex:1;margin-left:.26667rem}.page-verify .footer .submit-btn[data-v-7e8d1d5c]{flex:1}\n",document.head.appendChild(e),System.register(["./index-legacy-888dc198.js","./index-legacy-6edb65d2.js","./verify-legacy-5bba11f6.js","./order-legacy-8df837df.js","./inform-legacy-6fae42de.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,a,r,n,i,o,d,l,c,s,f,v,u,y,p,g,m,h,C,b,I,N,x,k,T,w,O,_,E,L,j,D,S,H,z,R,U,$,P,A,F,Y,G,M,q,Q,B,W,K;return{setters:[function(e){t=e._,a=e.d,r=e.a,n=e.u,i=e.S,o=e.r,d=e.a0,l=e.x,c=e.y,s=e.b,f=e.c,v=e.e,u=e.w,y=e.j,p=e.f,g=e.a1,m=e.P,h=e.t,C=e.g,b=e.h,I=e.B,N=e.k,x=e.n,k=e.I,T=e.a2,w=e.F,O=e.i,_=e.W,E=e.a3,L=e.a4,j=e.T,D=e.p,S=e.a5,H=e.a6,z=e.C,R=e.N,U=e.D,$=e.a7,P=e.a8,A=e.K,F=e.L},function(e){Y=e.l},function(e){G=e.f,M=e.s,q=e.g,Q=e.a},function(e){B=e.a},function(e){W=e.g,K=e.l},function(){}],execute:function(){const V=e=>(A("data-v-7e8d1d5c"),e=e(),F(),e),J={class:"page-verify"},X={class:"people"},Z={class:"name"},ee={class:"verify-item"},te=V((()=>y("div",{class:"label"},"证件号码",-1))),ae={class:"no"},re={class:"sign-body"},ne={class:"date"},ie={class:"file"},oe={class:"people"},de={class:"name"},le={class:"verify-item"},ce=V((()=>y("div",{class:"label"},"证件号码",-1))),se={class:"no"},fe=["onClick"],ve=["onClick"],ue={class:"sign-body"},ye={class:"date"},pe={class:"file"},ge={class:"footer-button footer"},me=V((()=>y("div",{class:"text"},"刷新",-1))),he=a({__name:"index",setup(e){const t=1,a=2,A=r(),F=n(),V=(()=>{const e=A.query;return e.orderCode&&(e.orderNo=e.orderCode,delete e.orderCode),e})(),{saleUserId:he="D1234567-1",tenantId:Ce="9991000007",templateId:be=1,productCode:Ie="CQ75CQ76",insurerCode:Ne="ancheng",isShare:xe,orderCode:ke,orderNo:Te,productCategory:we}=V,Oe=new i({source:"localStorage"}),_e=o([]),Ee=o([]),Le=o([]),je=o([]),De=o(),Se=o(),He=[],ze=o(""),Re=o(),Ue=d().format("YYYY-MM-DD"),$e=()=>{Se.value?.clear?.()},Pe=(e,t)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),Q({callbackUrl:a,certiNo:e,faceAuthMode:"TENCENT",userName:t,tenantId:9991000007}).then((a=>{const{code:r,data:n}=a;if("10000"===r){const{originalUrl:a,serialNo:r}=n;window.location.href=a,Oe.set("verifyData",{serialNo:r,certNo:e,name:t})}}))},Ae=e=>{const{id:t,objectType:a}=e;ze.value="",Re.value="";const r={1:"pdf",2:"richText",3:"link"};W({insurerCode:Ne,id:t,objectType:a,productCategory:we,orderNo:Te,tenantId:Ce}).then((({code:e,data:t})=>{if("10000"===e){const{textType:e,content:a,questionType:n}=t?.[0]||{};2===n?(ze.value="question",Re.value=t):(1===e&&a.includes("png")?ze.value="picture":ze.value=r[e],Re.value=a)}}))},Fe=e=>`${e}`===L.CERT,Ye=e=>{-1===e?Pe(De.value.tenantOrderHolder?.certNo,De.value.tenantOrderHolder?.name):Pe(De.value.tenantOrderInsuredList[e]?.certNo,De.value.tenantOrderInsuredList[e]?.name)},Ge=e=>{e&&He.every((t=>t!==e))&&He.push(e)},Me=()=>{const e=Se.value?.isEmpty();e?j.fail("请投保人签名"):De.value.tenantOrderHolder?.extInfo?.isCert!==t&&Fe(De.value.tenantOrderHolder?.certType)?j.fail("请投保人去认证"):D({orderNo:ke||Te,saleUserId:he,tenantId:Ce}).then((e=>{const{code:t,data:a}=e;"10000"===t&&([B.PENDING,B.PAYMENT_FAILED,B.UNDER_WRITING_SUCCESS].includes(a.orderStatus)?H.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{const e=Se.value?.save();Promise.all([M("HOLDER",e,De.value?.id,`${Ce}`)]).then((()=>{z({...De.value,pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:{...De.value.extInfo,pageCode:"sign",templateId:be,shareFlag:xe?"Y":"N",buttonCode:R.sign},venderCode:Ne}).then((e=>{const{code:a,data:r}=e;"10000"===t&&r.success&&F.push({path:U[r.pageAction.data.nextPageCode],query:{orderNo:ke||Te,saleUserId:he,tenantId:Ce}})}))}))})):S("paymentResult",V))}))},qe=(e=!1)=>{D({orderNo:ke||Te,saleUserId:he,tenantId:Ce}).then((t=>{const{code:r,data:n}=t;"10000"===r&&(De.value=n,e&&(n?.tenantOrderHolder?.extInfo?.isCert===a||n?.tenantOrderInsuredList.some((e=>e.extInfo?.isCert===a))?j("用户未完身份认证及签字"):n?.tenantOrderAttachmentList.find((e=>e.category===$.ELECTRIC_SIGN&&e.objectType===P.HOLDER))&&n?.tenantOrderAttachmentList.find((e=>e.category===$.ELECTRIC_SIGN&&e.objectType===P.INSURED))||j("用户未完身份认证及签字")),setTimeout((()=>{let e=0;n.tenantOrderAttachmentList.forEach((t=>{t.category===$.ELECTRIC_SIGN&&(t.objectType===P.HOLDER?(Se.value?.clear?.(),Se.value.setDataURL(t.fileBase64)):t.objectType===P.INSURED&&(He[e]?.clear?.(),He[e].setDataURL(t.fileBase64),e+=1))}))})))}))},Qe=()=>{qe(!0)},Be=l((()=>{const e={...V,isShare:1,sharePageCode:"sign"};return`${window.location.origin}/phoneVerify?${Y.stringify(e)}`}));return c((()=>{qe(),(async()=>{const e={orderNo:ke||Te,productCode:Ie,tenantId:Ce,objectType:1},t={insurerCode:Ne,orderNo:Te,productCategory:we,tenantId:Ce,noticeType:4,objectType:1},{code:a,data:r}=await q(e),{code:n,data:i}=await q({...e,objectType:2}),{code:o,data:d}=await K(t),{code:l,data:c}=await K({...t,noticeType:5,objectType:2});"10000"===a&&(Ee.value=r||[]),"10000"===n&&(_e.value=i||[]),"10000"===o&&(je.value=d||[]),"10000"===l&&(Le.value=c||[])})();const e=Oe.get("verifyData");if(e){const{serialNo:t,certNo:a,name:r}=e;G({certiNo:a,orderNo:ke||Te,serialNo:t,tenantId:Ce,userName:r}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(Oe.remove("verifyData"),qe())}))}})),(e,a)=>{const r=s("ProPDFviewer"),n=s("van-button"),i=s("ProPageWrap");return f(),v(i,null,{default:u((()=>[y("div",J,[p(g,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),p(m,{title:"投保人",class:"card"},{extra:u((()=>[y("div",X,[y("div",Z,h(C(De)?.tenantOrderHolder?.name),1),Fe(C(De)?.tenantOrderHolder?.certType)?(f(),b("div",{key:0,class:I(["status",{verified:C(De)?.tenantOrderHolder?.extInfo?.isCert===t}])},h(C(De)?.tenantOrderHolder?.extInfo?.isCert===t?"已认证":"待认证"),3)):N("",!0)])])),default:u((()=>[y("div",ee,[te,y("div",ae,h(C(De)?.tenantOrderHolder?.certNo),1),C(De)?.tenantOrderHolder?.extInfo?.isCert!==t&&Fe(C(De)?.tenantOrderHolder?.certType)?(f(),b("div",{key:0,class:"action",onClick:a[0]||(a[0]=e=>Ye(-1))},[x(" 去认证 "),p(k,{name:"right_arrow",class:"icon"})])):N("",!0)])])),_:1}),p(m,{key:"-1",title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:u((()=>[y("div",{class:"resign",onClick:$e},"重签")])),default:u((()=>[p(T,{ref_key:"holderSign",ref:Se,class:"sign"},null,512),y("div",re,[y("div",ne,"签名日期： "+h(C(Ue)),1),y("div",ie,[x(" 签名将被用于以下文件： "),y("span",null,[(f(!0),b(w,null,O(C(Ee),((e,t)=>(f(),v(r,{key:`holderFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:C(_)(e.materialContent,e.materialSource+""),onClick:a[1]||(a[1]=()=>"")},null,8,["title","content","type"])))),128))]),(f(!0),b(w,null,O(C(je),((e,t)=>(f(),v(r,{key:`holderQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:C(Re),type:C(ze),onClick:()=>Ae(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:1}),(f(!0),b(w,null,O(C(De)?.tenantOrderInsuredList,((e,n)=>(f(),b("div",{key:n},[p(m,{title:"被保人",class:"card"},{extra:u((()=>[y("div",oe,[y("div",de,h(e.name),1),Fe(e.certType)?(f(),b("div",{key:0,class:I(["status",{verified:e.extInfo?.isCert===t}])},h(e.extInfo?.isCert===t?"已认证":"待认证"),3)):N("",!0)])])),default:u((()=>[y("div",le,[ce,y("div",se,h(e.certNo),1),e.extInfo?.isCert!==t&&Fe(e.certType)?(f(),b("div",{key:0,class:"action",onClick:e=>Ye(n)},[x(" 去认证 "),p(k,{name:"right_arrow",class:"icon"})],8,fe)):N("",!0)])])),_:2},1024),p(m,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:u((()=>[y("div",{class:"resign",onClick:e=>(e=>{He[e]?.clear?.()})(n)},"重签",8,ve)])),default:u((()=>[p(T,{ref_for:!0,ref:Ge,class:"sign"}),y("div",ue,[y("div",ye,"签名日期： "+h(C(Ue)),1),y("div",pe,[x(" 签名将被用于以下文件： "),(f(!0),b(w,null,O(C(_e),((e,t)=>(f(),v(r,{key:`insuredFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:C(_)(e.materialContent,e.materialSource+""),onClick:a[2]||(a[2]=()=>"")},null,8,["title","content","type"])))),128)),(f(!0),b(w,null,O(C(Le),((e,t)=>(f(),v(r,{key:`insuredQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:C(Re),type:C(ze),onClick:()=>Ae(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:2},1024)])))),128)),y("div",ge,[C(xe)?N("",!0):(f(),b("div",{key:0,class:"refresh-btn",onClick:Qe},[y("div",null,[p(k,{name:"refresh"})]),me])),C(xe)?N("",!0):(f(),v(E,{key:1,title:"邀请您进行身份认证",desc:"邀请您进行身份认证",link:C(Be)},{default:u((()=>[p(n,{plain:"",type:"primary",class:"share-btn"},{default:u((()=>[x("分享")])),_:1})])),_:1},8,["link"])),p(n,{type:"primary",class:"submit-btn",onClick:Me},{default:u((()=>[x("提交")])),_:1})])])])),_:1})}}});e("default",t(he,[["__scopeId","data-v-7e8d1d5c"]]))}}}))}();
