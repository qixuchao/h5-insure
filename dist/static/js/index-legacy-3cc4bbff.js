!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.page-verify .card .people[data-v-0c3f16d9]{flex:1;margin-left:.53333rem;display:flex;align-items:center}.page-verify .card .people .name[data-v-0c3f16d9]{font-size:.4rem;font-weight:600;color:#393d46}.page-verify .card .people .status[data-v-0c3f16d9]{margin-left:.26667rem;text-align:center;width:1.2rem;height:.53333rem;line-height:.53333rem;border-radius:.05333rem;border:1px solid #99a9c0;font-size:.32rem;color:#99a9c0}.page-verify .card .verify-item[data-v-0c3f16d9]{display:flex;align-items:center;height:1.41333rem;line-height:1.41333rem;font-size:.4rem;color:#393d46}.page-verify .card .verify-item .no[data-v-0c3f16d9]{margin-left:.64rem}.page-verify .card .verify-item .action[data-v-0c3f16d9]{flex:1;display:flex;align-items:center;justify-content:flex-end;color:#99a9c0}.page-verify .card .verify-item .action .icon[data-v-0c3f16d9]{margin-left:.13333rem;color:#99a9c0;font-size:.32rem}.page-verify .sign-card .resign[data-v-0c3f16d9]{font-size:.37333rem;color:#0d6efe}.page-verify .sign-card .sign-body[data-v-0c3f16d9]{padding-bottom:.4rem}.page-verify .sign-card .sign-body .date[data-v-0c3f16d9]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-verify .sign-card .sign-body .file[data-v-0c3f16d9]{margin-top:.21333rem;font-size:.37333rem;color:#393d46;line-height:.53333rem}.page-verify .sign-card .sign-body .file .file-name[data-v-0c3f16d9]{color:#0d6efe}.page-verify .footer[data-v-0c3f16d9]{position:static}\n',document.head.appendChild(e),System.register(["./vendor-legacy-c0d7778e.js","./index-legacy-44bebc79.js","./index-legacy-40f0d3e2.js"],(function(e){"use strict";var a,i,s,t,r,n,l,d,c,o,v,f,g,u,m,p,y,h,x,b,_,k,C,w,z;return{setters:[function(e){a=e.g,i=e.C,s=e.M,t=e.r,r=e.h,n=e.j,l=e.k,d=e.y,c=e.n,o=e.I,v=e.m,f=e.E,g=e.F,u=e.a1,m=e.a2,p=e.B,y=e.T,h=e.s},function(e){x=e.b,b=e._,_=e.w,k=e.m,C=e.h,w=e.x},function(e){z=e.a}],execute:function(){const E=(e,a)=>{const i={bizObjectId:"string",bizObjectType:e,docCategory:"ELECTRIC_SIGN",docDesc:"",docName:"",docSize:0,docType:"",fileBase64:a,orderId:0};return x.post("/api/app/insure/insurance/saveCustomerSignResult",i)};const I=e=>(u("data-v-0c3f16d9"),e=e(),m(),e),N={class:"page-verify"},T={class:"people"},j={class:"name"},S={class:"status"},D={class:"verify-item"},O=I((()=>d("div",{class:"label"},"身份证号码",-1))),R=I((()=>d("div",{class:"no"},"510***********292X",-1))),U=p("去认证 "),F={class:"sign-body"},H=I((()=>d("div",{class:"date"},"签名日期： 2022-01-01",-1))),L={class:"file"},M=p(" 签名将被用于以下文件："),P={key:0,class:"dun-hao"},B=I((()=>d("div",{class:"people"},[d("div",{class:"name"},"王小明"),d("div",{class:"status"},"待认证")],-1))),X={class:"verify-item"},$=I((()=>d("div",{class:"label"},"身份证号码",-1))),A=I((()=>d("div",{class:"no"},"510***********292X",-1))),G={class:"action"},W=p("去认证 "),q={class:"sign-body"},J=I((()=>d("div",{class:"date"},"签名日期： 2022-01-01",-1))),K={class:"file"},Q=p(" 签名将被用于以下文件："),V={key:0,class:"dun-hao"},Y={class:"footer-button footer"},Z=p("分享"),ee=p("提交"),ae=a({setup(e){const a=["营销员保至书","投保人须知","xxxxxxxxxxxxx"],u=i(),m=i(),b=i(),I=()=>{var e;null===(e=m.value)||void 0===e||e.clear()},ae=()=>{var e;null===(e=b.value)||void 0===e||e.clear()},ie=()=>{var e;e={callbackUrl:"string",certiNo:"",faceAuthMode:"TENCENT",userName:""},x.post("/api/app/insure/insurance/customerFace",e)},se=()=>{var e,a,i,s;const t=null===(e=m.value)||void 0===e?void 0:e.isEmpty(),r=null===(a=b.value)||void 0===a?void 0:a.isEmpty();if(t)return void y.fail("请投保人签名");if(r)return void y.fail("请被保人签名");const n=null===(i=m.value)||void 0===i?void 0:i.save(),l=null===(s=b.value)||void 0===s?void 0:s.save();Promise.all([E("HOLDER",n),E("INSURED",l)])};return s((()=>{z({orderNo:"2022072710380711215",saleUserId:"D1234567-1",tenantId:"9991000007"}).then((e=>{const{code:a,data:i}=e;"10000"===a&&(u.value=i)}))})),(e,i)=>{const s=t("van-button"),y=t("ProPageWrap");return r(),n(y,null,{default:l((()=>[d("div",N,[c(_,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),c(C,{title:"投保人",class:"card"},{extra:l((()=>{var e,a;return[d("div",T,[d("div",j,o(null===(e=u.value)||void 0===e||null===(a=e.tenantOrderHolder)||void 0===a?void 0:a.name),1),d("div",S,o()+" 待认证",1)])]})),default:l((()=>[d("div",D,[O,R,d("div",{class:"action",onClick:ie},[U,c(k,{name:"right_arrow",class:"icon"})])])])),_:1}),c(C,{title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:l((()=>[d("div",{class:"resign",onClick:I},"重签")])),default:l((()=>[c(w,{ref_key:"sign1",ref:m,class:"sign"},null,512),d("div",F,[H,d("div",L,[M,(r(),v(g,null,f(a,((e,i)=>d("span",{key:i,class:"file-name"},[p(o(`《${e}》`),1),i!==a.length-1?(r(),v("span",P,"、")):h("",!0)]))),64))])])])),_:1}),c(C,{title:"被保人",class:"card"},{extra:l((()=>[B])),default:l((()=>[d("div",X,[$,A,d("div",G,[W,c(k,{name:"right_arrow",class:"icon"})])])])),_:1}),c(C,{title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:l((()=>[d("div",{class:"resign",onClick:ae},"重签")])),default:l((()=>[c(w,{ref_key:"sign2",ref:b,class:"sign"},null,512),d("div",q,[J,d("div",K,[Q,(r(),v(g,null,f(a,((e,i)=>d("span",{key:i,class:"file-name"},[p(o(`《${e}》`),1),i!==a.length-1?(r(),v("span",V,"、")):h("",!0)]))),64))])])])),_:1}),d("div",Y,[c(s,{plain:"",type:"primary"},{default:l((()=>[Z])),_:1}),c(s,{type:"primary",onClick:se},{default:l((()=>[ee])),_:1})])])])),_:1})}}});e("default",b(ae,[["__scopeId","data-v-0c3f16d9"]]))}}}))}();
