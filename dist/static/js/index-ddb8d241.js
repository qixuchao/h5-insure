var De=Object.defineProperty,Ce=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var ee=(B,s,d)=>s in B?De(B,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):B[s]=d,b=(B,s)=>{for(var d in s||(s={}))ve.call(s,d)&&ee(B,d,s[d]);if(Z)for(var d of Z(s))Ae.call(s,d)&&ee(B,d,s[d]);return B},w=(B,s)=>Ce(B,Fe(s));import{g as pe,O as he,ak as ye,E as V,d as me,y as ge,h as Te,r as q,j as _,k as P,m as f,z as t,p as D,J as y,n as A,L as ue,t as I,A as N,G as j,F as Y,a4 as Ne,a5 as Re,C as k,T as x,D as Se}from"./vendor-96e68f0e.js";import{q as Ie}from"./index-fbbc79b7.js";import{_ as ke,S as Oe,I as xe,J as be,q as G,l as U,K as te,N as se,r as ae,L as we,n as Pe,P as Ue}from"./index-d081bc8c.js";import{_ as Le}from"./index-54120b35.js";import{g as He,f as $e,s as oe,a as Me}from"./verify-49b6b5e3.js";import{a as Ve}from"./order-ad7bcd6c.js";const J=B=>(Ne("data-v-4e83b643"),B=B(),Re(),B),qe={class:"page-verify"},je={class:"people"},Ye={class:"name"},Ge={class:"verify-item"},Je=J(()=>t("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),ze={class:"no"},Qe=k(" \u53BB\u8BA4\u8BC1 "),We={class:"sign-body"},Ke={class:"date"},Xe={class:"file"},Ze=k(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),eu={class:"people"},uu={class:"name"},tu={class:"verify-item"},su=J(()=>t("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),au={class:"no"},ou=["onClick"],nu=k(" \u53BB\u8BA4\u8BC1 "),ru=["onClick"],iu={class:"sign-body"},lu={class:"date"},cu={class:"file"},du=k(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),Bu={class:"footer-button footer"},Eu=J(()=>t("div",{class:"text"},"\u5237\u65B0",-1)),_u=k("\u5206\u4EAB"),fu=k("\u63D0\u4EA4"),Du=pe({setup(B){const s={CERT:1,NO_CERT:2},d=he(),ne=ye(),{saleUserId:L="D1234567-1",tenantId:m="9991000007",templateId:re=1,productCode:ie="CQ75CQ76",insurerCode:le="ancheng",isShare:z}=d.query;let{orderNo:p}=d.query;typeof p=="object"&&(p=(p||[])[0]);const H=new Oe({source:"localStorage"}),$=V([]),a=V(),R=V(),g=[],Q=me().format("YYYY-MM-DD"),ce=()=>{var e;(e=R.value)==null||e.clear()},de=e=>{g[e].clear()},W=(e,o)=>{Me({callbackUrl:window.location.href,certiNo:e,faceAuthMode:"TENCENT",userName:o,tenantId:9991000007}).then(c=>{const{code:n,data:l}=c;if(n==="10000"){const{originalUrl:F,serialNo:u}=l;window.location.href=F,H.set("verifyData",{serialNo:u,certNo:e,name:o})}})},S=e=>`${e}`===be.CERT,K=e=>{var o,c,n,l;e===-1?W((o=a.value.tenantOrderHolder)==null?void 0:o.certNo,(c=a.value.tenantOrderHolder)==null?void 0:c.name):W((n=a.value.tenantOrderInsuredList[e])==null?void 0:n.certNo,(l=a.value.tenantOrderInsuredList[e])==null?void 0:l.name)},Be=e=>{e&&g.every(o=>o!==e)&&g.push(e)},Ee=()=>{ae({orderNo:p,saleUserId:L,tenantId:m}).then(e=>{var n,l,F,u,E;const{code:o,data:c}=e;if(o==="10000")if(c.orderStatus!==Ve.PENDING)x.fail("\u8BA2\u5355\u975E\u5F85\u5904\u7406\u72B6\u6001"),we("paymentResult",d.query);else{if((n=R.value)==null?void 0:n.isEmpty()){x.fail("\u8BF7\u6295\u4FDD\u4EBA\u7B7E\u540D");return}if(g.some(i=>i.isEmpty())){x.fail("\u8BF7\u88AB\u4FDD\u4EBA\u7B7E\u540D");return}if(((F=(l=a.value.tenantOrderHolder)==null?void 0:l.extInfo)==null?void 0:F.isCert)!==s.CERT&&S((u=a.value.tenantOrderHolder)==null?void 0:u.certType)){x.fail("\u8BF7\u6295\u4FDD\u4EBA\u53BB\u8BA4\u8BC1");return}if((E=a.value.tenantOrderInsuredList)==null?void 0:E.some(i=>{var C;return((C=i.extInfo)==null?void 0:C.isCert)!==s.CERT&&S(i.certType)})){x.fail("\u8BF7\u88AB\u4FDD\u4EBA\u53BB\u8BA4\u8BC1");return}Se.confirm({title:"\u63D0\u793A",message:"\u8BF7\u786E\u8BA4\u4FE1\u606F\u586B\u5199\u65E0\u8BEF\u540E\uFF0C\u518D\u8FDB\u884C\u652F\u4ED8"}).then(()=>{var C,h;const i=(C=R.value)==null?void 0:C.save();Promise.all([oe("HOLDER",i,(h=a.value)==null?void 0:h.id,`${m}`),...g.map(v=>{var T;return oe("INSURED",v.save(),(T=a.value)==null?void 0:T.id,`${m}`)})]).then(()=>{Pe(w(b({},a.value),{pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:w(b({},a.value.extInfo),{pageCode:"sign",templateId:re}),venderCode:le})).then(v=>{const{code:T,data:O}=v;o==="10000"&&O.success&&ne.push({path:Ue[O.pageAction.data.nextPageCode],query:{orderNo:p,saleUserId:L,tenantId:m}})})})})}})},M=()=>{ae({orderNo:p,saleUserId:L,tenantId:m}).then(e=>{const{code:o,data:c}=e;o==="10000"&&(a.value=c,setTimeout(()=>{let n=0;c.tenantOrderAttachmentList.forEach(l=>{l.category===21&&(l.objectType===2?(R.value.clear(),R.value.setDataURL(l.fileBase64)):l.objectType===1&&(g[n].clear(),g[n].setDataURL(l.fileBase64),n+=1))})}))})},_e=()=>{M()},fe=ge(()=>{const e=w(b({},d.query),{isShare:1,sharePageCode:"sign"});return`${window.location.origin}/phoneVerify?${Ie.stringify(e)}`});return Te(()=>{M(),He({orderNo:p,productCode:ie,tenantId:m}).then(o=>{const{code:c,data:n}=o;c==="10000"&&($.value=n||[])});const e=H.get("verifyData");if(e){const{serialNo:o,certNo:c,name:n}=e;$e({certiNo:c,orderNo:p,serialNo:o,tenantId:m,userName:n}).then(l=>{const{code:F,data:u}=l;F==="10000"&&(H.remove("verifyData"),M())})}}),(e,o)=>{const c=q("ProPDFviewer"),n=q("van-button"),l=q("ProPageWrap");return _(),P(l,null,{default:f(()=>{var F;return[t("div",qe,[D(xe,{type:"warning",title:"\u5C0A\u656C\u7684\u5BA2\u6237\uFF0C\u672C\u6B21\u6295\u4FDD\u9700\u8981\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",content:"\u672C\u4EA7\u54C1\u6295\u4FDD\u9700\u8981\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u8FDB\u884C\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u60A8\u8D2D\u4E70\u672C\u4EA7\u54C1\u7684\u7D2F\u8BA1\u603B\u4FDD\u8D39\u5DF2\u8D85\u8FC720\u4E07\uFF0C\u6309\u76D1\u7BA1\u8981\u6C42\uFF0C\u9700\u8981\u63D0\u4F9B\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u3001\u6307\u5B9A\u53D7\u76CA\u4EBA\u8BC1\u4EF6\u5F71\u50CF\uFF0C\u672C\u4EA7\u54C1\u975E\u672C\u4EBA\u6295\u4FDD\u4E14\u5E26\u8EAB\u6545\u8D23\u4EFB\u3001\u9700\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\uFF08\u6210\u4EBA\uFF09\u7684\u6295\u4FDD\u610F\u613F\u8FDB\u884C\u7B7E\u5B57\u786E\u8BA4\u3002"}),D(U,{title:"\u6295\u4FDD\u4EBA",class:"card"},{extra:f(()=>{var u,E,r,i,C,h,v,T,O,X;return[t("div",je,[t("div",Ye,y((E=(u=a.value)==null?void 0:u.tenantOrderHolder)==null?void 0:E.name),1),S((i=(r=a.value)==null?void 0:r.tenantOrderHolder)==null?void 0:i.certType)?(_(),A("div",{key:0,class:ue(["status",{verified:((v=(h=(C=a.value)==null?void 0:C.tenantOrderHolder)==null?void 0:h.extInfo)==null?void 0:v.isCert)===s.CERT}])},y(((X=(O=(T=a.value)==null?void 0:T.tenantOrderHolder)==null?void 0:O.extInfo)==null?void 0:X.isCert)===s.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):I("",!0)])]}),default:f(()=>{var u,E,r,i,C,h,v;return[t("div",Ge,[Je,t("div",ze,y((E=(u=a.value)==null?void 0:u.tenantOrderHolder)==null?void 0:E.certNo),1),((C=(i=(r=a.value)==null?void 0:r.tenantOrderHolder)==null?void 0:i.extInfo)==null?void 0:C.isCert)!==s.CERT&&S((v=(h=a.value)==null?void 0:h.tenantOrderHolder)==null?void 0:v.certType)?(_(),A("div",{key:0,class:"action",onClick:o[0]||(o[0]=T=>K(-1))},[Qe,D(G,{name:"right_arrow",class:"icon"})])):I("",!0)])]}),_:1}),D(U,{title:"\u6295\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:f(()=>[t("div",{class:"resign",onClick:ce},"\u91CD\u7B7E")]),default:f(()=>[D(te,{ref_key:"holderSign",ref:R,class:"sign"},null,512),t("div",We,[t("div",Ke,"\u7B7E\u540D\u65E5\u671F\uFF1A "+y(N(Q)),1),t("div",Xe,[Ze,(_(!0),A(Y,null,j($.value.filter(u=>u.noticeObject===N(se).HOLDER),(u,E)=>(_(),P(c,{key:E,class:"file",title:`\u300A${u.materialName}\u300B`,url:u.materialSource},null,8,["title","url"]))),128))])])]),_:1}),(_(!0),A(Y,null,j((F=a.value)==null?void 0:F.tenantOrderInsuredList,(u,E)=>(_(),A("div",{key:E},[D(U,{title:"\u88AB\u4FDD\u4EBA",class:"card"},{extra:f(()=>{var r,i;return[t("div",eu,[t("div",uu,y(u.name),1),S(u.certType)?(_(),A("div",{key:0,class:ue(["status",{verified:((r=u.extInfo)==null?void 0:r.isCert)===s.CERT}])},y(((i=u.extInfo)==null?void 0:i.isCert)===s.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):I("",!0)])]}),default:f(()=>{var r;return[t("div",tu,[su,t("div",au,y(u.certNo),1),((r=u.extInfo)==null?void 0:r.isCert)!==s.CERT&&S(u.certType)?(_(),A("div",{key:0,class:"action",onClick:i=>K(E)},[nu,D(G,{name:"right_arrow",class:"icon"})],8,ou)):I("",!0)])]}),_:2},1024),D(U,{title:"\u88AB\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:f(()=>[t("div",{class:"resign",onClick:r=>de(E)},"\u91CD\u7B7E",8,ru)]),default:f(()=>[D(te,{ref_for:!0,ref:Be,class:"sign"}),t("div",iu,[t("div",lu,"\u7B7E\u540D\u65E5\u671F\uFF1A "+y(N(Q)),1),t("div",cu,[du,(_(!0),A(Y,null,j($.value.filter(r=>r.noticeObject===N(se).INSURED),(r,i)=>(_(),P(c,{key:i,class:"file",title:`\u300A${r.materialName}\u300B`,url:r.materialSource},null,8,["title","url"]))),128))])])]),_:2},1024)]))),128)),t("div",Bu,[N(z)?I("",!0):(_(),A("div",{key:0,class:"refresh-btn",onClick:_e},[t("div",null,[D(G,{name:"refresh"})]),Eu])),N(z)?I("",!0):(_(),P(Le,{key:1,title:"\u9080\u8BF7\u60A8\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",desc:"\u9080\u8BF7\u60A8\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",link:N(fe)},{default:f(()=>[D(n,{plain:"",type:"primary",class:"share-btn"},{default:f(()=>[_u]),_:1})]),_:1},8,["link"])),D(n,{type:"primary",class:"submit-btn",onClick:Ee},{default:f(()=>[fu]),_:1})])])]}),_:1})}}});var mu=ke(Du,[["__scopeId","data-v-4e83b643"]]);export{mu as default};
