!function(){var e=document.createElement("style");e.innerHTML=".com-navigator .btn[data-v-48192b24]{position:fixed;width:.8rem;height:2.4rem;right:0;top:50%;margin-top:-1.2rem}.page-verify .card .people[data-v-ab7a6660]{flex:1;margin-left:.53333rem;display:flex;align-items:center}.page-verify .card .people .name[data-v-ab7a6660]{font-size:.4rem;font-weight:600;color:#393d46}.page-verify .card .people .status[data-v-ab7a6660]{margin-left:.26667rem;text-align:center;width:1.2rem;height:.53333rem;line-height:.53333rem;border-radius:.05333rem;border:1px solid #99a9c0;font-size:.32rem;color:#99a9c0}.page-verify .card .people .status.verified[data-v-ab7a6660]{color:#0d6efe;border-color:#0d6efe}.page-verify .card .verify-item[data-v-ab7a6660]{display:flex;align-items:center;height:1.41333rem;line-height:1.41333rem;font-size:.4rem;color:#393d46}.page-verify .card .verify-item .no[data-v-ab7a6660]{margin-left:.64rem}.page-verify .card .verify-item .action[data-v-ab7a6660]{flex:1;display:flex;align-items:center;justify-content:flex-end;color:#99a9c0}.page-verify .card .verify-item .action .icon[data-v-ab7a6660]{margin-left:.13333rem;color:#99a9c0;font-size:.32rem}.page-verify .sign-card .resign[data-v-ab7a6660]{font-size:.37333rem;color:#0d6efe}.page-verify .sign-card .sign-body[data-v-ab7a6660]{padding-bottom:.4rem}.page-verify .sign-card .sign-body .date[data-v-ab7a6660]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-verify .sign-card .sign-body .file[data-v-ab7a6660]{margin-top:.21333rem;font-size:.37333rem;color:#393d46;line-height:.53333rem}.page-verify .sign-card .sign-body .file .file-name[data-v-ab7a6660]{color:#0d6efe}.page-verify .sign-card .sign-body .file .file-name .dun-hao[data-v-ab7a6660]{color:#393d46}.page-verify .footer[data-v-ab7a6660]{position:static;justify-content:space-between}.page-verify .footer .refresh-btn[data-v-ab7a6660]{width:.66667rem;border:none;color:#0d6efe;font-size:.26667rem;line-height:.37333rem;text-align:center}.page-verify .footer .refresh-btn .text[data-v-ab7a6660]{margin-top:.13333rem}.page-verify .footer .submit-btn[data-v-ab7a6660]{flex:1}\n",document.head.appendChild(e),System.register(["./vendor-legacy-fc9bbab5.js","./index-legacy-86ce05c9.js","./verify-legacy-d2cb9d50.js","./index-legacy-cfc490fa.js"],(function(e){"use strict";var a,t,i,r,n,o,l,d,s,c,v,u,f,g,m,p,y,h,b,x,I,C,N,w,O,k,D,_,j,E,H,L,U,z,S,P,T,R,A,M;return{setters:[function(e){a=e.g,t=e.a5,i=e.r,r=e.j,n=e.n,o=e.z,l=e.A,d=e.p,s=e.a6,c=e.Q,v=e.aj,u=e.E,f=e.d,g=e.h,m=e.k,p=e.m,y=e.J,h=e.L,b=e.t,x=e.G,I=e.F,C=e.a1,N=e.a2,w=e.C,O=e.T,k=e.D},function(e){D=e._,_=e.S,j=e.D,E=e.p,H=e.l,L=e.E,U=e.N,z=e.P},function(e){S=e.g,P=e.f,T=e.s,R=e.a},function(e){A=e.n,M=e.a}],execute:function(){const Y={class:"com-navigator"},$=["src"];var q=D(a({setup(e){const[a,c]=t(!1),v=()=>{c(!0)};return(e,t)=>{const c=i("van-popup");return r(),n("div",Y,[o("img",{class:"btn",src:l("/static/assets/sidenav.5031dada.png"),onClick:v},null,8,$),d(c,{show:l(a),"onUpdate:show":t[0]||(t[0]=e=>s(a)?a.value=e:null),position:"right",style:{width:"50%",height:"100%"},"safe-area-inset-top":""},null,8,["show"])])}}}),[["__scopeId","data-v-48192b24"]]);const Q=e=>(C("data-v-ab7a6660"),e=e(),N(),e),B={class:"page-verify"},F={class:"people"},G={class:"name"},J={class:"verify-item"},W=Q((()=>o("div",{class:"label"},"身份证号码",-1))),K={class:"no"},V=w(" 去认证 "),X={class:"sign-body"},Z={class:"date"},ee={class:"file"},ae=w(" 签名将被用于以下文件： "),te={class:"people"},ie={class:"name"},re={class:"verify-item"},ne=Q((()=>o("div",{class:"label"},"身份证号码",-1))),oe={class:"no"},le=["onClick"],de=w(" 去认证 "),se=["onClick"],ce={class:"sign-body"},ve={class:"date"},ue={class:"file"},fe=w(" 签名将被用于以下文件： "),ge={class:"footer-button footer"},me=w("提交"),pe=a({setup(e){const a=1,t=c(),s=v(),{saleUserId:C="D1234567-1",tenantId:N="9991000007",templateId:w=1,productCode:D="CQ75CQ76",insurerCode:Y="ancheng"}=t.query;let{orderNo:$}=t.query;"object"==typeof $&&($=($||[])[0]);const Q=new _({source:"localStorage"}),pe=u([]),ye=u(),he=u(),be=[],xe=f().format("YYYY-MM-DD"),Ie=()=>{var e;null===(e=he.value)||void 0===e||e.clear()},Ce=(e,a)=>{R({callbackUrl:window.location.href,certiNo:e,faceAuthMode:"TENCENT",userName:a,tenantId:9991000007}).then((t=>{const{code:i,data:r}=t;if("10000"===i){const{originalUrl:t,serialNo:i}=r;window.location.href=t,Q.set("verifyData",{serialNo:i,certNo:e,name:a})}}))},Ne=e=>{var a,t,i,r;-1===e?Ce(null===(a=ye.value.tenantOrderHolder)||void 0===a?void 0:a.certNo,null===(t=ye.value.tenantOrderHolder)||void 0===t?void 0:t.name):Ce(null===(i=ye.value.tenantOrderInsuredList[e])||void 0===i?void 0:i.certNo,null===(r=ye.value.tenantOrderInsuredList[e])||void 0===r?void 0:r.name)},we=e=>{e&&be.every((a=>a!==e))&&be.push(e)},Oe=()=>{var e,t,i,r;(null===(e=he.value)||void 0===e?void 0:e.isEmpty())?O.fail("请投保人签名"):be.some((e=>e.isEmpty()))?O.fail("请被保人签名"):(null===(t=ye.value.tenantOrderHolder)||void 0===t||null===(i=t.extInfo)||void 0===i?void 0:i.isCert)===a?null!==(r=ye.value.tenantOrderInsuredList)&&void 0!==r&&r.some((e=>{var t;return(null===(t=e.extInfo)||void 0===t?void 0:t.isCert)!==a}))?O.fail("请被保人去认证"):k.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{var e,a;const t=null===(e=he.value)||void 0===e?void 0:e.save();Promise.all([T("HOLDER",t,null===(a=ye.value)||void 0===a?void 0:a.id,`${N}`),...be.map((e=>{var a;return T("INSURED",e.save(),null===(a=ye.value)||void 0===a?void 0:a.id,`${N}`)}))]).then((()=>{A({...ye.value,pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:{pageCode:"sign",templateId:w},venderCode:"ancheng"}).then((e=>{const{code:a,data:t}=e;"10000"===a&&t.success&&s.push({path:z[t.pageAction.data.nextPageCode],query:{orderNo:$,saleUserId:C,tenantId:N}})}))}))})):O.fail("请投保人去认证")},ke=()=>{M({orderNo:$,saleUserId:C,tenantId:N}).then((e=>{const{code:a,data:t}=e;"10000"===a&&(ye.value=t,setTimeout((()=>{let e=0;t.tenantOrderAttachmentList.forEach((a=>{21===a.category&&(2===a.objectType?(he.value.clear(),he.value.setDataURL(a.fileBase64)):1===a.objectType&&(be[e].clear(),be[e].setDataURL(a.fileBase64),e+=1))}))})))}))};return g((()=>{ke(),S({orderNo:$,productCode:D,tenantId:N}).then((e=>{const{code:a,data:t}=e;"10000"===a&&(pe.value=t||[])}));const e=Q.get("verifyData");if(e){const{serialNo:a,certNo:t,name:i}=e;P({certiNo:t,orderNo:$,serialNo:a,tenantId:N,userName:i}).then((e=>{const{code:a,data:t}=e;"10000"===a&&(Q.remove("verifyData"),ke())}))}})),(e,t)=>{const s=i("ProPDFviewer"),c=i("van-button"),v=i("ProPageWrap");return r(),m(v,null,{default:p((()=>{var e;return[o("div",B,[d(j,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),d(H,{title:"投保人",class:"card"},{extra:p((()=>{var e,t,i,r,n,l,d,s;return[o("div",F,[o("div",G,y(null===(e=ye.value)||void 0===e||null===(t=e.tenantOrderHolder)||void 0===t?void 0:t.name),1),o("div",{class:h(["status",{verified:(null===(i=ye.value)||void 0===i||null===(r=i.tenantOrderHolder)||void 0===r||null===(n=r.extInfo)||void 0===n?void 0:n.isCert)===a}])},y((null===(l=ye.value)||void 0===l||null===(d=l.tenantOrderHolder)||void 0===d||null===(s=d.extInfo)||void 0===s?void 0:s.isCert)===a?"已认证":"待认证"),3)])]})),default:p((()=>{var e,i,l,s,c;return[o("div",J,[W,o("div",K,y(null===(e=ye.value)||void 0===e||null===(i=e.tenantOrderHolder)||void 0===i?void 0:i.certNo),1),(null===(l=ye.value)||void 0===l||null===(s=l.tenantOrderHolder)||void 0===s||null===(c=s.extInfo)||void 0===c?void 0:c.isCert)!==a?(r(),n("div",{key:0,class:"action",onClick:t[0]||(t[0]=e=>Ne(-1))},[V,d(E,{name:"right_arrow",class:"icon"})])):b("",!0)])]})),_:1}),d(H,{title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:p((()=>[o("div",{class:"resign",onClick:Ie},"重签")])),default:p((()=>[d(L,{ref_key:"holderSign",ref:he,class:"sign"},null,512),o("div",X,[o("div",Z,"签名日期： "+y(l(xe)),1),o("div",ee,[ae,(r(!0),n(I,null,x(pe.value.filter((e=>e.noticeObject===l(U).HOLDER)),((e,a)=>(r(),m(s,{key:a,class:"file",title:`《${e.materialName}》`,url:e.materialSource},null,8,["title","url"])))),128))])])])),_:1}),(r(!0),n(I,null,x(null===(e=ye.value)||void 0===e?void 0:e.tenantOrderInsuredList,((e,t)=>(r(),n("div",{key:t},[d(H,{title:"被保人",class:"card"},{extra:p((()=>{var t,i;return[o("div",te,[o("div",ie,y(e.name),1),o("div",{class:h(["status",{verified:(null===(t=e.extInfo)||void 0===t?void 0:t.isCert)===a}])},y((null===(i=e.extInfo)||void 0===i?void 0:i.isCert)===a?"已认证":"待认证"),3)])]})),default:p((()=>{var i;return[o("div",re,[ne,o("div",oe,y(e.certNo),1),(null===(i=e.extInfo)||void 0===i?void 0:i.isCert)!==a?(r(),n("div",{key:0,class:"action",onClick:e=>Ne(t)},[de,d(E,{name:"right_arrow",class:"icon"})],8,le)):b("",!0)])]})),_:2},1024),d(H,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:p((()=>[o("div",{class:"resign",onClick:e=>(e=>{be[e].clear()})(t)},"重签",8,se)])),default:p((()=>[d(L,{ref_for:!0,ref:we,class:"sign"}),o("div",ce,[o("div",ve,"签名日期： "+y(l(xe)),1),o("div",ue,[fe,(r(!0),n(I,null,x(pe.value.filter((e=>e.noticeObject===l(U).INSURED)),((e,a)=>(r(),m(s,{key:a,class:"file",title:`《${e.materialName}》`,url:e.materialSource},null,8,["title","url"])))),128))])])])),_:2},1024)])))),128)),o("div",ge,[d(c,{type:"primary",class:"submit-btn",onClick:Oe},{default:p((()=>[me])),_:1})])]),d(q)]})),_:1})}}});e("default",D(pe,[["__scopeId","data-v-ab7a6660"]]))}}}))}();
