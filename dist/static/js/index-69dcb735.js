var ge=Object.defineProperty,Te=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ne=(c,r,C)=>r in c?ge(c,r,{enumerable:!0,configurable:!0,writable:!0,value:C}):c[r]=C,I=(c,r)=>{for(var C in r||(r={}))Re.call(r,C)&&ne(c,C,r[C]);if(oe)for(var C of oe(r))Ie.call(r,C)&&ne(c,C,r[C]);return c},b=(c,r)=>Te(c,Ne(r));import{g as Oe,O as Se,ak as ke,E as w,d as xe,y as ie,h as Le,r as q,j as E,k as U,m as _,z as n,p as D,J as h,n as v,L as le,t as O,A as T,G,F as Q,a4 as Pe,a5 as be,C as k,T as S,D as we}from"./vendor-e057bbeb.js";import{q as Ue}from"./index-a99815ab.js";import{_ as He,S as Me,K as $e,L as Ve,q as J,l as H,M as ce,r as de,G as je,n as Ye,P as qe,Q as z,R as M}from"./index-f2834090.js";import{_ as Ge}from"./index-4fd2fd1d.js";import{f as Qe,s as Be,g as Ee,a as Je}from"./verify-b85bb41a.js";import{a as ze}from"./order-35b0e3c5.js";const W=c=>(Pe("data-v-f32640da"),c=c(),be(),c),We={class:"page-verify"},Ke={class:"people"},Xe={class:"name"},Ze={class:"verify-item"},eu=W(()=>n("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),uu={class:"no"},tu=k(" \u53BB\u8BA4\u8BC1 "),su={class:"sign-body"},au={class:"date"},ru={class:"file"},ou=k(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),nu={class:"people"},iu={class:"name"},lu={class:"verify-item"},cu=W(()=>n("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),du={class:"no"},Bu=["onClick"],Eu=k(" \u53BB\u8BA4\u8BC1 "),Cu=["onClick"],fu={class:"sign-body"},_u={class:"date"},Du={class:"file"},Fu=k(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),vu={class:"footer-button footer"},Au=W(()=>n("div",{class:"text"},"\u5237\u65B0",-1)),pu=k("\u5206\u4EAB"),hu=k("\u63D0\u4EA4"),yu=Oe({setup(c){const r={CERT:1,NO_CERT:2},C={1:"pdf",4:"picture",2:"richText",3:"link"},K=Se(),Ce=ke(),{saleUserId:$="D1234567-1",tenantId:y="9991000007",templateId:fe=1,productCode:_e="CQ75CQ76",insurerCode:De="ancheng",isShare:V,orderCode:x,orderNo:L}=K.query,X=()=>{const u=K.query;return u.orderCode&&(u.orderNo=u.orderCode),u},j=new Me({source:"localStorage"}),Z=w([]),ee=w([]),i=w(),N=w(),m=[],ue=xe().format("YYYY-MM-DD"),te=ie(()=>u=>{let a=1;return u.materialSource===1?u.materialContent.indexOf(".pdf")!==-1?a=1:a=4:a=u.materialSource,C[a]}),Fe=()=>{var u;(u=N.value)==null||u.clear()},ve=u=>{m[u].clear()},se=(u,a)=>{let o=window.location.href;o=o.includes("orderCode")?o:o.replace("orderNo","orderCode"),Je({callbackUrl:o,certiNo:u,faceAuthMode:"TENCENT",userName:a,tenantId:9991000007}).then(s=>{const{code:d,data:f}=s;if(d==="10000"){const{originalUrl:e,serialNo:t}=f;window.location.href=e,j.set("verifyData",{serialNo:t,certNo:u,name:a})}})},R=u=>`${u}`===Ve.CERT,ae=u=>{var a,o,s,d;u===-1?se((a=i.value.tenantOrderHolder)==null?void 0:a.certNo,(o=i.value.tenantOrderHolder)==null?void 0:o.name):se((s=i.value.tenantOrderInsuredList[u])==null?void 0:s.certNo,(d=i.value.tenantOrderInsuredList[u])==null?void 0:d.name)},Ae=u=>{u&&m.every(a=>a!==u)&&m.push(u)},pe=()=>{var a,o,s,d,f;if((a=N.value)==null?void 0:a.isEmpty()){S.fail("\u8BF7\u6295\u4FDD\u4EBA\u7B7E\u540D");return}if(m.some(e=>e.isEmpty())){S.fail("\u8BF7\u88AB\u4FDD\u4EBA\u7B7E\u540D");return}if(((s=(o=i.value.tenantOrderHolder)==null?void 0:o.extInfo)==null?void 0:s.isCert)!==r.CERT&&R((d=i.value.tenantOrderHolder)==null?void 0:d.certType)){S.fail("\u8BF7\u6295\u4FDD\u4EBA\u53BB\u8BA4\u8BC1");return}if((f=i.value.tenantOrderInsuredList)==null?void 0:f.some(e=>{var t;return((t=e.extInfo)==null?void 0:t.isCert)!==r.CERT&&R(e.certType)})){S.fail("\u8BF7\u88AB\u4FDD\u4EBA\u53BB\u8BA4\u8BC1");return}de({orderNo:x||L,saleUserId:$,tenantId:y}).then(e=>{const{code:t,data:l}=e;t==="10000"&&(l.orderStatus!==ze.PENDING?je("paymentResult",X()):we.confirm({title:"\u63D0\u793A",message:"\u8BF7\u786E\u8BA4\u4FE1\u606F\u586B\u5199\u65E0\u8BEF\u540E\uFF0C\u518D\u8FDB\u884C\u652F\u4ED8"}).then(()=>{var A,p;const B=(A=N.value)==null?void 0:A.save();Promise.all([Be("HOLDER",B,(p=i.value)==null?void 0:p.id,`${y}`),...m.map(F=>{var g;return Be("INSURED",F.save(),(g=i.value)==null?void 0:g.id,`${y}`)})]).then(()=>{Ye(b(I({},i.value),{pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:b(I({},i.value.extInfo),{pageCode:"sign",templateId:fe,shareFlag:V?"Y":"N"}),venderCode:De})).then(F=>{const{code:g,data:P}=F;t==="10000"&&P.success&&Ce.push({path:qe[P.pageAction.data.nextPageCode],query:{orderNo:x||L,saleUserId:$,tenantId:y}})})})}))})},Y=(u=!1)=>{de({orderNo:x||L,saleUserId:$,tenantId:y}).then(a=>{var d,f;const{code:o,data:s}=a;o==="10000"&&(i.value=s,u&&(((f=(d=s==null?void 0:s.tenantOrderHolder)==null?void 0:d.extInfo)==null?void 0:f.isCert)===r.NO_CERT||(s==null?void 0:s.tenantOrderInsuredList.some(e=>{var t;return((t=e.extInfo)==null?void 0:t.isCert)===r.NO_CERT}))?S("\u7528\u6237\u672A\u5B8C\u8EAB\u4EFD\u8BA4\u8BC1\u53CA\u7B7E\u5B57"):(!(s==null?void 0:s.tenantOrderAttachmentList.find(e=>e.category===z.ELECTRIC_SIGN&&e.objectType===M.HOLDER))||!(s==null?void 0:s.tenantOrderAttachmentList.find(e=>e.category===z.ELECTRIC_SIGN&&e.objectType===M.INSURED)))&&S("\u7528\u6237\u672A\u5B8C\u8EAB\u4EFD\u8BA4\u8BC1\u53CA\u7B7E\u5B57")),setTimeout(()=>{let e=0;s.tenantOrderAttachmentList.forEach(t=>{t.category===z.ELECTRIC_SIGN&&(t.objectType===M.HOLDER?(N.value.clear(),N.value.setDataURL(t.fileBase64)):t.objectType===M.INSURED&&(m[e].clear(),m[e].setDataURL(t.fileBase64),e+=1))})}))})},he=()=>{Y(!0)},ye=ie(()=>{const u=b(I({},X()),{isShare:1,sharePageCode:"sign"});return`${window.location.origin}/phoneVerify?${Ue.stringify(u)}`}),me=()=>{const u={orderNo:x||L,productCode:_e,tenantId:y,objectType:1};Ee(I({},u)).then(({code:a,data:o})=>{a==="10000"&&(ee.value=o||[])}),Ee(b(I({},u),{objectType:2})).then(({code:a,data:o})=>{a==="10000"&&(Z.value=o||[])})};return Le(()=>{Y(),me();const u=j.get("verifyData");if(u){const{serialNo:a,certNo:o,name:s}=u;Qe({certiNo:o,orderNo:x||L,serialNo:a,tenantId:y,userName:s}).then(d=>{const{code:f,data:e}=d;f==="10000"&&(j.remove("verifyData"),Y())})}}),(u,a)=>{const o=q("ProPDFviewer"),s=q("van-button"),d=q("ProPageWrap");return E(),U(d,null,{default:_(()=>{var f;return[n("div",We,[D($e,{type:"warning",title:"\u5C0A\u656C\u7684\u5BA2\u6237\uFF0C\u672C\u6B21\u6295\u4FDD\u9700\u8981\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",content:"\u672C\u4EA7\u54C1\u6295\u4FDD\u9700\u8981\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u8FDB\u884C\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u60A8\u8D2D\u4E70\u672C\u4EA7\u54C1\u7684\u7D2F\u8BA1\u603B\u4FDD\u8D39\u5DF2\u8D85\u8FC720\u4E07\uFF0C\u6309\u76D1\u7BA1\u8981\u6C42\uFF0C\u9700\u8981\u63D0\u4F9B\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u3001\u6307\u5B9A\u53D7\u76CA\u4EBA\u8BC1\u4EF6\u5F71\u50CF\uFF0C\u672C\u4EA7\u54C1\u975E\u672C\u4EBA\u6295\u4FDD\u4E14\u5E26\u8EAB\u6545\u8D23\u4EFB\u3001\u9700\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\uFF08\u6210\u4EBA\uFF09\u7684\u6295\u4FDD\u610F\u613F\u8FDB\u884C\u7B7E\u5B57\u786E\u8BA4\u3002"}),D(H,{title:"\u6295\u4FDD\u4EBA",class:"card"},{extra:_(()=>{var e,t,l,B,A,p,F,g,P,re;return[n("div",Ke,[n("div",Xe,h((t=(e=i.value)==null?void 0:e.tenantOrderHolder)==null?void 0:t.name),1),R((B=(l=i.value)==null?void 0:l.tenantOrderHolder)==null?void 0:B.certType)?(E(),v("div",{key:0,class:le(["status",{verified:((F=(p=(A=i.value)==null?void 0:A.tenantOrderHolder)==null?void 0:p.extInfo)==null?void 0:F.isCert)===r.CERT}])},h(((re=(P=(g=i.value)==null?void 0:g.tenantOrderHolder)==null?void 0:P.extInfo)==null?void 0:re.isCert)===r.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):O("",!0)])]}),default:_(()=>{var e,t,l,B,A,p,F;return[n("div",Ze,[eu,n("div",uu,h((t=(e=i.value)==null?void 0:e.tenantOrderHolder)==null?void 0:t.certNo),1),((A=(B=(l=i.value)==null?void 0:l.tenantOrderHolder)==null?void 0:B.extInfo)==null?void 0:A.isCert)!==r.CERT&&R((F=(p=i.value)==null?void 0:p.tenantOrderHolder)==null?void 0:F.certType)?(E(),v("div",{key:0,class:"action",onClick:a[0]||(a[0]=g=>ae(-1))},[tu,D(J,{name:"right_arrow",class:"icon"})])):O("",!0)])]}),_:1}),D(H,{title:"\u6295\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:_(()=>[n("div",{class:"resign",onClick:Fe},"\u91CD\u7B7E")]),default:_(()=>[D(ce,{ref_key:"holderSign",ref:N,class:"sign"},null,512),n("div",su,[n("div",au,"\u7B7E\u540D\u65E5\u671F\uFF1A "+h(T(ue)),1),n("div",ru,[ou,(E(!0),v(Q,null,G(ee.value,(e,t)=>(E(),U(o,{key:t,class:"file",title:`\u300A${e.materialName}\u300B`,content:e.materialContent,type:T(te)(e)},null,8,["title","content","type"]))),128))])])]),_:1}),(E(!0),v(Q,null,G((f=i.value)==null?void 0:f.tenantOrderInsuredList,(e,t)=>(E(),v("div",{key:t},[D(H,{title:"\u88AB\u4FDD\u4EBA",class:"card"},{extra:_(()=>{var l,B;return[n("div",nu,[n("div",iu,h(e.name),1),R(e.certType)?(E(),v("div",{key:0,class:le(["status",{verified:((l=e.extInfo)==null?void 0:l.isCert)===r.CERT}])},h(((B=e.extInfo)==null?void 0:B.isCert)===r.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):O("",!0)])]}),default:_(()=>{var l;return[n("div",lu,[cu,n("div",du,h(e.certNo),1),((l=e.extInfo)==null?void 0:l.isCert)!==r.CERT&&R(e.certType)?(E(),v("div",{key:0,class:"action",onClick:B=>ae(t)},[Eu,D(J,{name:"right_arrow",class:"icon"})],8,Bu)):O("",!0)])]}),_:2},1024),D(H,{title:"\u88AB\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:_(()=>[n("div",{class:"resign",onClick:l=>ve(t)},"\u91CD\u7B7E",8,Cu)]),default:_(()=>[D(ce,{ref_for:!0,ref:Ae,class:"sign"}),n("div",fu,[n("div",_u,"\u7B7E\u540D\u65E5\u671F\uFF1A "+h(T(ue)),1),n("div",Du,[Fu,(E(!0),v(Q,null,G(Z.value,(l,B)=>(E(),U(o,{key:B,class:"file",title:`\u300A${l.materialName}\u300B`,content:l.materialContent,type:T(te)(l)},null,8,["title","content","type"]))),128))])])]),_:2},1024)]))),128)),n("div",vu,[T(V)?O("",!0):(E(),v("div",{key:0,class:"refresh-btn",onClick:he},[n("div",null,[D(J,{name:"refresh"})]),Au])),T(V)?O("",!0):(E(),U(Ge,{key:1,title:"\u9080\u8BF7\u60A8\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",desc:"\u9080\u8BF7\u60A8\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",link:T(ye)},{default:_(()=>[D(s,{plain:"",type:"primary",class:"share-btn"},{default:_(()=>[pu]),_:1})]),_:1},8,["link"])),D(s,{type:"primary",class:"submit-btn",onClick:pe},{default:_(()=>[hu]),_:1})])])]}),_:1})}}});var Su=He(yu,[["__scopeId","data-v-f32640da"]]);export{Su as default};
