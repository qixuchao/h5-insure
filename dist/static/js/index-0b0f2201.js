var Oe=Object.defineProperty,Ie=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var Ce=(E,r,_)=>r in E?Oe(E,r,{enumerable:!0,configurable:!0,writable:!0,value:_}):E[r]=_,I=(E,r)=>{for(var _ in r||(r={}))be.call(r,_)&&Ce(E,_,r[_]);if(de)for(var _ of de(r))we.call(r,_)&&Ce(E,_,r[_]);return E},L=(E,r)=>Ie(E,Le(r));import{g as xe,O as Pe,a9 as He,E as h,d as Ue,y as $e,h as Me,r as K,j as B,k as b,m as D,z as i,p,J as T,n as F,L as Be,t as w,A as R,G as M,F as Q,a4 as Qe,a5 as je,C as P,T as x,D as qe}from"./vendor-af6fda0a.js";import{q as Ve}from"./index-a99815ab.js";import{_ as Ye,S as Ge,L as Je,M as ze,q as X,l as j,Q as Ee,r as fe,H as We,n as Ke,P as Xe,R as Z,T as q,B as _e}from"./index-8423c820.js";import{_ as Ze}from"./index-a472664e.js";import{f as et,s as De,g as pe,a as tt}from"./verify-9fb2aaeb.js";import{a as ve}from"./order-35b0e3c5.js";import{l as Fe,g as ut}from"./inform-24ba6183.js";const ee=E=>(Qe("data-v-fdab6b52"),E=E(),je(),E),st={class:"page-verify"},ot={class:"people"},at={class:"name"},nt={class:"verify-item"},rt=ee(()=>i("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),it={class:"no"},lt=P(" \u53BB\u8BA4\u8BC1 "),ct={class:"sign-body"},dt={class:"date"},Ct={class:"file"},Bt=P(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),Et={class:"people"},ft={class:"name"},_t={class:"verify-item"},Dt=ee(()=>i("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),pt={class:"no"},vt=["onClick"],Ft=P(" \u53BB\u8BA4\u8BC1 "),At=["onClick"],yt={class:"sign-body"},ht={class:"date"},Tt={class:"file"},gt=P(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),mt={class:"footer-button footer"},Nt=ee(()=>i("div",{class:"text"},"\u5237\u65B0",-1)),Rt=P("\u5206\u4EAB"),kt=P("\u63D0\u4EA4"),St=xe({setup(E){const r={CERT:1,NO_CERT:2},_=Pe(),Ae=He(),V=(()=>{const t=_.query;return t.orderCode&&(t.orderNo=t.orderCode,delete t.orderCode),t})(),{saleUserId:Y="D1234567-1",tenantId:A="9991000007",templateId:ye=1,productCode:he="CQ75CQ76",insurerCode:G="ancheng",isShare:J,orderCode:H,orderNo:g,productCategory:te}=V,z=new Ge({source:"localStorage"}),ue=h([]),se=h([]),oe=h([]),ae=h([]),l=h(),k=h(),m=[],S=h(""),U=h(),ne=Ue().format("YYYY-MM-DD"),Te=()=>{var t,s;(s=(t=k.value)==null?void 0:t.clear)==null||s.call(t)},ge=t=>{var s,n;(n=(s=m[t])==null?void 0:s.clear)==null||n.call(s)},re=(t,s)=>{let n=window.location.href;n=n.includes("orderCode")?n:n.replace("orderNo","orderCode"),tt({callbackUrl:n,certiNo:t,faceAuthMode:"TENCENT",userName:s,tenantId:9991000007}).then(a=>{const{code:C,data:d}=a;if(C==="10000"){const{originalUrl:e,serialNo:u}=d;window.location.href=e,z.set("verifyData",{serialNo:u,certNo:t,name:s})}})},ie=t=>{const{id:s,objectType:n}=t;S.value="",U.value="";const a={1:"pdf",2:"richText",3:"link"};ut({insurerCode:G,id:s,objectType:n,productCategory:te,orderNo:g,tenantId:A}).then(({code:C,data:d})=>{if(C==="10000"){const{textType:e,content:u,questionType:o}=(d==null?void 0:d[0])||{};o===2?(S.value="question",U.value=d):(e===1&&u.includes("png")?S.value="picture":S.value=a[e],U.value=u)}})},O=t=>`${t}`===ze.CERT,le=t=>{var s,n,a,C;t===-1?re((s=l.value.tenantOrderHolder)==null?void 0:s.certNo,(n=l.value.tenantOrderHolder)==null?void 0:n.name):re((a=l.value.tenantOrderInsuredList[t])==null?void 0:a.certNo,(C=l.value.tenantOrderInsuredList[t])==null?void 0:C.name)},me=t=>{t&&m.every(s=>s!==t)&&m.push(t)},Ne=()=>{var s,n,a,C,d;if((s=k.value)==null?void 0:s.isEmpty()){x.fail("\u8BF7\u6295\u4FDD\u4EBA\u7B7E\u540D");return}if(m.some(e=>e.isEmpty())){x.fail("\u8BF7\u88AB\u4FDD\u4EBA\u7B7E\u540D");return}if(((a=(n=l.value.tenantOrderHolder)==null?void 0:n.extInfo)==null?void 0:a.isCert)!==r.CERT&&O((C=l.value.tenantOrderHolder)==null?void 0:C.certType)){x.fail("\u8BF7\u6295\u4FDD\u4EBA\u53BB\u8BA4\u8BC1");return}if((d=l.value.tenantOrderInsuredList)==null?void 0:d.some(e=>{var u;return((u=e.extInfo)==null?void 0:u.isCert)!==r.CERT&&O(e.certType)})){x.fail("\u8BF7\u88AB\u4FDD\u4EBA\u53BB\u8BA4\u8BC1");return}fe({orderNo:H||g,saleUserId:Y,tenantId:A}).then(e=>{const{code:u,data:o}=e;u==="10000"&&(o.orderStatus===ve.PENDING||o.orderStatus===ve.PAYMENT_FAILED?qe.confirm({title:"\u63D0\u793A",message:"\u8BF7\u786E\u8BA4\u4FE1\u606F\u586B\u5199\u65E0\u8BEF\u540E\uFF0C\u518D\u8FDB\u884C\u652F\u4ED8"}).then(()=>{var f,v;const c=(f=k.value)==null?void 0:f.save();Promise.all([De("HOLDER",c,(v=l.value)==null?void 0:v.id,`${A}`),...m.map(y=>{var N;return De("INSURED",y.save(),(N=l.value)==null?void 0:N.id,`${A}`)})]).then(()=>{Ke(L(I({},l.value),{pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:L(I({},l.value.extInfo),{pageCode:"sign",templateId:ye,shareFlag:J?"Y":"N"}),venderCode:G})).then(y=>{const{code:N,data:$}=y;u==="10000"&&$.success&&Ae.push({path:Xe[$.pageAction.data.nextPageCode],query:{orderNo:H||g,saleUserId:Y,tenantId:A}})})})}):We("paymentResult",V))})},W=(t=!1)=>{fe({orderNo:H||g,saleUserId:Y,tenantId:A}).then(s=>{var C,d;const{code:n,data:a}=s;n==="10000"&&(l.value=a,t&&(((d=(C=a==null?void 0:a.tenantOrderHolder)==null?void 0:C.extInfo)==null?void 0:d.isCert)===r.NO_CERT||(a==null?void 0:a.tenantOrderInsuredList.some(e=>{var u;return((u=e.extInfo)==null?void 0:u.isCert)===r.NO_CERT}))?x("\u7528\u6237\u672A\u5B8C\u8EAB\u4EFD\u8BA4\u8BC1\u53CA\u7B7E\u5B57"):(!(a==null?void 0:a.tenantOrderAttachmentList.find(e=>e.category===Z.ELECTRIC_SIGN&&e.objectType===q.HOLDER))||!(a==null?void 0:a.tenantOrderAttachmentList.find(e=>e.category===Z.ELECTRIC_SIGN&&e.objectType===q.INSURED)))&&x("\u7528\u6237\u672A\u5B8C\u8EAB\u4EFD\u8BA4\u8BC1\u53CA\u7B7E\u5B57")),setTimeout(()=>{let e=0;a.tenantOrderAttachmentList.forEach(u=>{var o,c,f,v;u.category===Z.ELECTRIC_SIGN&&(u.objectType===q.HOLDER?((c=(o=k.value)==null?void 0:o.clear)==null||c.call(o),k.value.setDataURL(u.fileBase64)):u.objectType===q.INSURED&&((v=(f=m[e])==null?void 0:f.clear)==null||v.call(f),m[e].setDataURL(u.fileBase64),e+=1))})}))})},Re=()=>{W(!0)},ke=$e(()=>{const t=L(I({},V),{isShare:1,sharePageCode:"sign"});return`${window.location.origin}/phoneVerify?${Ve.stringify(t)}`}),Se=async()=>{const t={orderNo:H||g,productCode:he,tenantId:A,objectType:1},s={insurerCode:G,orderNo:g,productCategory:te,tenantId:A,noticeType:4,objectType:1},{code:n,data:a}=await pe(t),{code:C,data:d}=await pe(L(I({},t),{objectType:2})),{code:e,data:u}=await Fe(s),{code:o,data:c}=await Fe(L(I({},s),{noticeType:5,objectType:2}));n==="10000"&&(se.value=a||[]),C==="10000"&&(ue.value=d||[]),e==="10000"&&(ae.value=u||[]),o==="10000"&&(oe.value=c||[])};return Me(()=>{W(),Se();const t=z.get("verifyData");if(t){const{serialNo:s,certNo:n,name:a}=t;et({certiNo:n,orderNo:H||g,serialNo:s,tenantId:A,userName:a}).then(C=>{const{code:d,data:e}=C;d==="10000"&&(z.remove("verifyData"),W())})}}),(t,s)=>{const n=K("ProPDFviewer"),a=K("van-button"),C=K("ProPageWrap");return B(),b(C,null,{default:D(()=>{var d;return[i("div",st,[p(Je,{type:"warning",title:"\u5C0A\u656C\u7684\u5BA2\u6237\uFF0C\u672C\u6B21\u6295\u4FDD\u9700\u8981\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",content:"\u672C\u4EA7\u54C1\u6295\u4FDD\u9700\u8981\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u8FDB\u884C\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u60A8\u8D2D\u4E70\u672C\u4EA7\u54C1\u7684\u7D2F\u8BA1\u603B\u4FDD\u8D39\u5DF2\u8D85\u8FC720\u4E07\uFF0C\u6309\u76D1\u7BA1\u8981\u6C42\uFF0C\u9700\u8981\u63D0\u4F9B\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u3001\u6307\u5B9A\u53D7\u76CA\u4EBA\u8BC1\u4EF6\u5F71\u50CF\uFF0C\u672C\u4EA7\u54C1\u975E\u672C\u4EBA\u6295\u4FDD\u4E14\u5E26\u8EAB\u6545\u8D23\u4EFB\u3001\u9700\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\uFF08\u6210\u4EBA\uFF09\u7684\u6295\u4FDD\u610F\u613F\u8FDB\u884C\u7B7E\u5B57\u786E\u8BA4\u3002"}),p(j,{title:"\u6295\u4FDD\u4EBA",class:"card"},{extra:D(()=>{var e,u,o,c,f,v,y,N,$,ce;return[i("div",ot,[i("div",at,T((u=(e=l.value)==null?void 0:e.tenantOrderHolder)==null?void 0:u.name),1),O((c=(o=l.value)==null?void 0:o.tenantOrderHolder)==null?void 0:c.certType)?(B(),F("div",{key:0,class:Be(["status",{verified:((y=(v=(f=l.value)==null?void 0:f.tenantOrderHolder)==null?void 0:v.extInfo)==null?void 0:y.isCert)===r.CERT}])},T(((ce=($=(N=l.value)==null?void 0:N.tenantOrderHolder)==null?void 0:$.extInfo)==null?void 0:ce.isCert)===r.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):w("",!0)])]}),default:D(()=>{var e,u,o,c,f,v,y;return[i("div",nt,[rt,i("div",it,T((u=(e=l.value)==null?void 0:e.tenantOrderHolder)==null?void 0:u.certNo),1),((f=(c=(o=l.value)==null?void 0:o.tenantOrderHolder)==null?void 0:c.extInfo)==null?void 0:f.isCert)!==r.CERT&&O((y=(v=l.value)==null?void 0:v.tenantOrderHolder)==null?void 0:y.certType)?(B(),F("div",{key:0,class:"action",onClick:s[0]||(s[0]=N=>le(-1))},[lt,p(X,{name:"right_arrow",class:"icon"})])):w("",!0)])]}),_:1}),p(j,{key:"-1",title:"\u6295\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:D(()=>[i("div",{class:"resign",onClick:Te},"\u91CD\u7B7E")]),default:D(()=>[p(Ee,{ref_key:"holderSign",ref:k,class:"sign"},null,512),i("div",ct,[i("div",dt,"\u7B7E\u540D\u65E5\u671F\uFF1A "+T(R(ne)),1),i("div",Ct,[Bt,i("span",null,[(B(!0),F(Q,null,M(se.value,(e,u)=>(B(),b(n,{key:`holderFileList-${u}`,class:"file",title:`\u300A${e.materialName}\u300B`,content:e.materialContent,type:R(_e)(e.materialContent,e.materialSource+""),onClick:s[1]||(s[1]=()=>"")},null,8,["title","content","type"]))),128))]),(B(!0),F(Q,null,M(ae.value,(e,u)=>(B(),b(n,{key:`holderQuestionList-${u}`,class:"file",title:`\u300A${e.title}\u300B`,content:U.value,type:S.value,onClick:()=>ie(e)},null,8,["title","content","type","onClick"]))),128))])])]),_:1}),(B(!0),F(Q,null,M((d=l.value)==null?void 0:d.tenantOrderInsuredList,(e,u)=>(B(),F("div",{key:u},[p(j,{title:"\u88AB\u4FDD\u4EBA",class:"card"},{extra:D(()=>{var o,c;return[i("div",Et,[i("div",ft,T(e.name),1),O(e.certType)?(B(),F("div",{key:0,class:Be(["status",{verified:((o=e.extInfo)==null?void 0:o.isCert)===r.CERT}])},T(((c=e.extInfo)==null?void 0:c.isCert)===r.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):w("",!0)])]}),default:D(()=>{var o;return[i("div",_t,[Dt,i("div",pt,T(e.certNo),1),((o=e.extInfo)==null?void 0:o.isCert)!==r.CERT&&O(e.certType)?(B(),F("div",{key:0,class:"action",onClick:c=>le(u)},[Ft,p(X,{name:"right_arrow",class:"icon"})],8,vt)):w("",!0)])]}),_:2},1024),p(j,{title:"\u88AB\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:D(()=>[i("div",{class:"resign",onClick:o=>ge(u)},"\u91CD\u7B7E",8,At)]),default:D(()=>[p(Ee,{ref_for:!0,ref:me,class:"sign"}),i("div",yt,[i("div",ht,"\u7B7E\u540D\u65E5\u671F\uFF1A "+T(R(ne)),1),i("div",Tt,[gt,(B(!0),F(Q,null,M(ue.value,(o,c)=>(B(),b(n,{key:`insuredFileList-${c}`,class:"file",title:`\u300A${o.materialName}\u300B`,content:o.materialContent,type:R(_e)(o.materialContent,o.materialSource+""),onClick:s[2]||(s[2]=()=>"")},null,8,["title","content","type"]))),128)),(B(!0),F(Q,null,M(oe.value,(o,c)=>(B(),b(n,{key:`insuredQuestionList-${c}`,class:"file",title:`\u300A${o.title}\u300B`,content:U.value,type:S.value,onClick:()=>ie(o)},null,8,["title","content","type","onClick"]))),128))])])]),_:2},1024)]))),128)),i("div",mt,[R(J)?w("",!0):(B(),F("div",{key:0,class:"refresh-btn",onClick:Re},[i("div",null,[p(X,{name:"refresh"})]),Nt])),R(J)?w("",!0):(B(),b(Ze,{key:1,title:"\u9080\u8BF7\u60A8\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",desc:"\u9080\u8BF7\u60A8\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",link:R(ke)},{default:D(()=>[p(a,{plain:"",type:"primary",class:"share-btn"},{default:D(()=>[Rt]),_:1})]),_:1},8,["link"])),p(a,{type:"primary",class:"submit-btn",onClick:Ne},{default:D(()=>[kt]),_:1})])])]}),_:1})}}});var Ut=Ye(St,[["__scopeId","data-v-fdab6b52"]]);export{Ut as default};
