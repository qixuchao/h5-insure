!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.page-verify .card .people[data-v-08d1c23c]{flex:1;margin-left:.53333rem;display:flex;align-items:center}.page-verify .card .people .name[data-v-08d1c23c]{font-size:.4rem;font-weight:600;color:#393d46}.page-verify .card .people .status[data-v-08d1c23c]{margin-left:.26667rem;text-align:center;width:1.2rem;height:.53333rem;line-height:.53333rem;border-radius:.05333rem;border:1px solid #99a9c0;font-size:.32rem;color:#99a9c0}.page-verify .card .people .status.verified[data-v-08d1c23c]{color:#0d6efe;border-color:#0d6efe}.page-verify .card .verify-item[data-v-08d1c23c]{display:flex;align-items:center;height:1.41333rem;line-height:1.41333rem;font-size:.4rem;color:#393d46}.page-verify .card .verify-item .no[data-v-08d1c23c]{margin-left:.64rem}.page-verify .card .verify-item .action[data-v-08d1c23c]{flex:1;display:flex;align-items:center;justify-content:flex-end;color:#99a9c0}.page-verify .card .verify-item .action .icon[data-v-08d1c23c]{margin-left:.13333rem;color:#99a9c0;font-size:.32rem}.page-verify .sign-card .resign[data-v-08d1c23c]{font-size:.37333rem;color:#0d6efe}.page-verify .sign-card .sign-body[data-v-08d1c23c]{padding-bottom:.4rem}.page-verify .sign-card .sign-body .date[data-v-08d1c23c]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-verify .sign-card .sign-body .file[data-v-08d1c23c]{margin-top:.21333rem;font-size:.37333rem;color:#393d46;line-height:.53333rem}.page-verify .sign-card .sign-body .file .file-name[data-v-08d1c23c]{color:#0d6efe}.page-verify .sign-card .sign-body .file .file-name .dun-hao[data-v-08d1c23c]{color:#393d46}.page-verify .footer[data-v-08d1c23c]{position:static;justify-content:space-between}.page-verify .footer .refresh-btn[data-v-08d1c23c]{width:.66667rem;border:none;color:#0d6efe;font-size:.26667rem;line-height:.37333rem;text-align:center}.page-verify .footer .refresh-btn .text[data-v-08d1c23c]{margin-top:.13333rem}.page-verify .footer .submit-btn[data-v-08d1c23c]{flex:1}\n',document.head.appendChild(e),System.register(["./vendor-legacy-17b21673.js","./index-legacy-94ed15a9.js","./verify-legacy-5c9fc10a.js","./index-legacy-94d14fb7.js"],(function(e){"use strict";var a,t,r,i,n,l,o,d,c,s,v,f,u,g,m,p,y,h,b,I,N,x,C,O,k,w,D,j,E,_,H,U,L,z,R,S,T,M;return{setters:[function(e){a=e.g,t=e.Q,r=e.af,i=e.C,n=e.d,l=e.M,o=e.r,d=e.h,c=e.j,s=e.k,v=e.y,f=e.n,u=e.I,g=e.J,m=e.m,p=e.s,y=e.z,h=e.E,b=e.F,I=e.a1,N=e.a2,x=e.B,C=e.T,O=e.D},function(e){k=e._,w=e.S,D=e.B,j=e.n,E=e.j,_=e.C,H=e.N,U=e.P},function(e){L=e.g,z=e.f,R=e.s,S=e.a},function(e){T=e.a,M=e.n}],execute:function(){const P=e=>(I("data-v-08d1c23c"),e=e(),N(),e),B={class:"page-verify"},Y={class:"people"},$={class:"name"},A={class:"verify-item"},Q=P((()=>v("div",{class:"label"},"身份证号码",-1))),q={class:"no"},F=x(" 去认证 "),J={class:"sign-body"},W={class:"date"},G={class:"file"},K=x(" 签名将被用于以下文件："),V={key:0,class:"dun-hao"},X={class:"people"},Z={class:"name"},ee={class:"verify-item"},ae=P((()=>v("div",{class:"label"},"身份证号码",-1))),te={class:"no"},re=["onClick"],ie=x(" 去认证 "),ne=["onClick"],le={class:"sign-body"},oe={class:"date"},de={class:"file"},ce=x(" 签名将被用于以下文件："),se={key:0,class:"dun-hao"},ve={class:"footer-button footer"},fe=x("提交"),ue=a({setup(e){const a=t(),I=r(),{orderNo:N="2022072810590219649",saleUserId:k="D1234567-1",tenantId:P="9991000007",templateId:ue=1,productCode:ge="CQ75CQ76"}=a.query,me=new w({source:"localStorage"}),pe=i([]),ye=i(),he=i(),be=[],Ie=n().format("YYYY-MM-DD"),Ne=()=>{var e;null===(e=he.value)||void 0===e||e.clear()},xe=(e,a)=>{S({callbackUrl:window.location.href,certiNo:"2022072710380711215",faceAuthMode:"TENCENT",userName:a,tenantId:9991000007}).then((t=>{const{code:r,data:i}=t;if("10000"===r){const{originalUrl:t,serialNo:r}=i;window.location.href=t,me.set("verifyData",{serialNo:r,certNo:e,name:a})}}))},Ce=e=>{var a,t,r,i;-1===e?xe(null===(a=ye.value.tenantOrderHolder)||void 0===a?void 0:a.certNo,null===(t=ye.value.tenantOrderHolder)||void 0===t?void 0:t.name):xe(null===(r=ye.value.tenantOrderInsuredList[e])||void 0===r?void 0:r.certNo,null===(i=ye.value.tenantOrderInsuredList[e])||void 0===i?void 0:i.name)},Oe=e=>{e&&be.every((a=>a!==e))&&be.push(e)},ke=()=>{var e;(null===(e=he.value)||void 0===e?void 0:e.isEmpty())?C.fail("请投保人签名"):be.some((e=>e.isEmpty()))?C.fail("请被保人签名"):O.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{var e;const a=null===(e=he.value)||void 0===e?void 0:e.save();Promise.all([R("HOLDER",a,2779003,`${P}`),...be.map((e=>R("INSURED",e.save(),2779003,`${P}`)))]).then((()=>{M({...ye.value,pageCode:"",operateOption:{withSignInfo:!0},extInfo:{pageCode:"",templateId:ue}}).then((e=>{const{code:a,data:t}=e;"10000"===a&&t.success&&I.push({path:U[t.pageAction.data.nextPageCode],query:{orderNo:N,saleUserId:k,tenantId:P}})}))}))}))};return l((()=>{T({orderNo:N,saleUserId:k,tenantId:P}).then((e=>{const{code:a,data:t}=e;if("10000"===a){ye.value=t;let e=0;t.tenantOrderAttachmentList.forEach((a=>{21===a.category&&(2===a.objectType?he.value.setDataURL(a.fileBase64):1===a.objectType&&(be[e].setDataURL(a.fileBase64),e+=1))}))}})),L({orderNo:N,productCode:ge,tenantId:P}).then((e=>{const{code:a,data:t}=e;"10000"===a&&(pe.value=t||[])}));const e=me.get("verifyData");if(e){const{serialNo:a,certNo:t,name:r}=e;z({certiNo:t,orderNo:N,serialNo:a,tenantId:P,userName:r}).then((e=>{me.remove("verifyData")}))}})),(e,a)=>{const t=o("van-button"),r=o("ProPageWrap");return d(),c(r,null,{default:s((()=>{var e;return[v("div",B,[f(D,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),f(E,{title:"投保人",class:"card"},{extra:s((()=>{var e,a,t,r,i,n,l,o;return[v("div",Y,[v("div",$,u(null===(e=ye.value)||void 0===e||null===(a=e.tenantOrderHolder)||void 0===a?void 0:a.name),1),v("div",{class:g(["status",{verified:null===(t=ye.value)||void 0===t||null===(r=t.tenantOrderHolder)||void 0===r||null===(i=r.extInfo)||void 0===i?void 0:i.isCert}])},u(null!==(n=ye.value)&&void 0!==n&&null!==(l=n.tenantOrderHolder)&&void 0!==l&&null!==(o=l.extInfo)&&void 0!==o&&o.isCert?"已认证":"待认证"),3)])]})),default:s((()=>{var e,t,r,i,n;return[v("div",A,[Q,v("div",q,u(null===(e=ye.value)||void 0===e||null===(t=e.tenantOrderHolder)||void 0===t?void 0:t.certNo),1),null!==(r=ye.value)&&void 0!==r&&null!==(i=r.tenantOrderHolder)&&void 0!==i&&null!==(n=i.extInfo)&&void 0!==n&&n.isCert?p("",!0):(d(),m("div",{key:0,class:"action",onClick:a[0]||(a[0]=e=>Ce(-1))},[F,f(j,{name:"right_arrow",class:"icon"})]))])]})),_:1}),f(E,{title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:s((()=>[v("div",{class:"resign",onClick:Ne},"重签")])),default:s((()=>[f(_,{ref_key:"holderSign",ref:he,class:"sign"},null,512),v("div",J,[v("div",W,"签名日期： "+u(y(Ie)),1),v("div",G,[K,(d(!0),m(b,null,h(pe.value.filter((e=>e.noticeObject===y(H).HOLDER)),((e,a)=>(d(),m("span",{key:a,class:"file-name"},[x(u(`《${e.materialName}》`),1),a!==pe.value.filter((e=>e.noticeObject===y(H).HOLDER)).length-1?(d(),m("span",V,"、")):p("",!0)])))),128))])])])),_:1}),(d(!0),m(b,null,h(null===(e=ye.value)||void 0===e?void 0:e.tenantOrderInsuredList,((e,a)=>(d(),m("div",{key:a},[f(E,{title:"被保人",class:"card"},{extra:s((()=>{var a,t;return[v("div",X,[v("div",Z,u(e.name),1),v("div",{class:g(["status",{verified:null===(a=e.extInfo)||void 0===a?void 0:a.isCert}])},u(null!==(t=e.extInfo)&&void 0!==t&&t.isCert?"已认证":"待认证"),3)])]})),default:s((()=>{var t;return[v("div",ee,[ae,v("div",te,u(e.certNo),1),null!==(t=e.extInfo)&&void 0!==t&&t.isCert?p("",!0):(d(),m("div",{key:0,class:"action",onClick:e=>Ce(a)},[ie,f(j,{name:"right_arrow",class:"icon"})],8,re))])]})),_:2},1024),f(E,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:s((()=>[v("div",{class:"resign",onClick:e=>(e=>{be[e].clear()})(a)},"重签",8,ne)])),default:s((()=>[f(_,{ref_for:!0,ref:Oe,class:"sign"}),v("div",le,[v("div",oe,"签名日期： "+u(y(Ie)),1),v("div",de,[ce,(d(!0),m(b,null,h(pe.value.filter((e=>e.noticeObject===y(H).INSURED)),((e,a)=>(d(),m("span",{key:a,class:"file-name"},[x(u(`《${e.materialName}》`),1),a!==pe.value.filter((e=>e.noticeObject===y(H).INSURED)).length-1?(d(),m("span",se,"、")):p("",!0)])))),128))])])])),_:2},1024)])))),128)),v("div",ve,[f(t,{type:"primary",class:"submit-btn",onClick:ke},{default:s((()=>[fe])),_:1})])])]})),_:1})}}});e("default",k(ue,[["__scopeId","data-v-08d1c23c"]]))}}}))}();
