var Se=Object.defineProperty,Oe=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var Ce=(B,i,_)=>i in B?Se(B,i,{enumerable:!0,configurable:!0,writable:!0,value:_}):B[i]=_,S=(B,i)=>{for(var _ in i||(i={}))Le.call(i,_)&&Ce(B,_,i[_]);if(de)for(var _ of de(i))we.call(i,_)&&Ce(B,_,i[_]);return B},O=(B,i)=>Oe(B,Ie(i));import{h as xe,P as be,aa as Pe,G as y,d as He,z as Me,j as Ue,r as W,k as E,m as I,n as D,A as r,s as p,L as h,p as v,M as Ee,v as L,B as T,H as M,F as U,a5 as $e,a6 as je,E as w,T as $,D as Qe}from"./vendor-d6b13173.js";import{q as qe}from"./index-a99815ab.js";import{_ as Ve,S as Ye,m as Ge,C as ze,d as K,a as j,o as Be,k as fe,g as _e,p as Je,n as We,b as Ke,A as X,q as Q}from"./index-32e043dc.js";import{_ as Xe}from"./index-fec1e8a0.js";import{f as Ze,s as et,g as De,a as tt}from"./verify-eea07109.js";import{a as pe}from"./order-b675ac95.js";import{g as ut,l as ve}from"./inform-1edf0c4a.js";const Z=B=>($e("data-v-2d767e5c"),B=B(),je(),B),st={class:"page-verify"},ot={class:"people"},at={class:"name"},nt={class:"verify-item"},rt=Z(()=>r("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),it={class:"no"},lt=w(" \u53BB\u8BA4\u8BC1 "),ct={class:"sign-body"},dt={class:"date"},Ct={class:"file"},Et=w(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),Bt={class:"people"},ft={class:"name"},_t={class:"verify-item"},Dt=Z(()=>r("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),pt={class:"no"},vt=["onClick"],Ft=w(" \u53BB\u8BA4\u8BC1 "),At=["onClick"],yt={class:"sign-body"},ht={class:"date"},gt={class:"file"},Tt=w(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),mt={class:"footer-button footer"},Nt=Z(()=>r("div",{class:"text"},"\u5237\u65B0",-1)),kt=w("\u5206\u4EAB"),Rt=w("\u63D0\u4EA4"),St=xe({setup(B){const i={CERT:1,NO_CERT:2},_=be(),Fe=Pe(),q=(()=>{const t=_.query;return t.orderCode&&(t.orderNo=t.orderCode,delete t.orderCode),t})(),{saleUserId:V="D1234567-1",tenantId:A="9991000007",templateId:Ae=1,productCode:ye="CQ75CQ76",insurerCode:Y="ancheng",isShare:G,orderCode:x,orderNo:g,productCategory:ee}=q,z=new Ye({source:"localStorage"}),te=y([]),ue=y([]),se=y([]),oe=y([]),c=y(),m=y(),b=[],N=y(""),P=y(),ae=He().format("YYYY-MM-DD"),he=()=>{var t,u;(u=(t=m.value)==null?void 0:t.clear)==null||u.call(t)},ge=t=>{var u,n;(n=(u=b[t])==null?void 0:u.clear)==null||n.call(u)},ne=(t,u)=>{let n=window.location.href;n=n.includes("orderCode")?n:n.replace("orderNo","orderCode"),tt({callbackUrl:n,certiNo:t,faceAuthMode:"TENCENT",userName:u,tenantId:9991000007}).then(o=>{const{code:d,data:C}=o;if(d==="10000"){const{originalUrl:e,serialNo:s}=C;window.location.href=e,z.set("verifyData",{serialNo:s,certNo:t,name:u})}})},re=t=>{const{id:u,objectType:n}=t;N.value="",P.value="";const o={1:"pdf",2:"richText",3:"link"};ut({insurerCode:Y,id:u,objectType:n,productCategory:ee,orderNo:g,tenantId:A}).then(({code:d,data:C})=>{if(d==="10000"){const{textType:e,content:s,questionType:a}=(C==null?void 0:C[0])||{};a===2?(N.value="question",P.value=C):(e===1&&s.includes("png")?N.value="picture":N.value=o[e],P.value=s)}})},H=t=>`${t}`===ze.CERT,ie=t=>{var u,n,o,d;t===-1?ne((u=c.value.tenantOrderHolder)==null?void 0:u.certNo,(n=c.value.tenantOrderHolder)==null?void 0:n.name):ne((o=c.value.tenantOrderInsuredList[t])==null?void 0:o.certNo,(d=c.value.tenantOrderInsuredList[t])==null?void 0:d.name)},Te=t=>{t&&b.every(u=>u!==t)&&b.push(t)},me=()=>{var u,n,o,d;if((u=m.value)==null?void 0:u.isEmpty()){$.fail("\u8BF7\u6295\u4FDD\u4EBA\u7B7E\u540D");return}if(((o=(n=c.value.tenantOrderHolder)==null?void 0:n.extInfo)==null?void 0:o.isCert)!==i.CERT&&H((d=c.value.tenantOrderHolder)==null?void 0:d.certType)){$.fail("\u8BF7\u6295\u4FDD\u4EBA\u53BB\u8BA4\u8BC1");return}_e({orderNo:x||g,saleUserId:V,tenantId:A}).then(C=>{const{code:e,data:s}=C;e==="10000"&&(s.orderStatus===pe.PENDING||s.orderStatus===pe.PAYMENT_FAILED?Qe.confirm({title:"\u63D0\u793A",message:"\u8BF7\u786E\u8BA4\u4FE1\u606F\u586B\u5199\u65E0\u8BEF\u540E\uFF0C\u518D\u8FDB\u884C\u652F\u4ED8"}).then(()=>{var l,f;const a=(l=m.value)==null?void 0:l.save();Promise.all([et("HOLDER",a,(f=c.value)==null?void 0:f.id,`${A}`)]).then(()=>{We(O(S({},c.value),{pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:O(S({},c.value.extInfo),{pageCode:"sign",templateId:Ae,shareFlag:G?"Y":"N"}),venderCode:Y})).then(F=>{const{code:k,data:R}=F;e==="10000"&&R.success&&Fe.push({path:Ke[R.pageAction.data.nextPageCode],query:{orderNo:x||g,saleUserId:V,tenantId:A}})})})}):Je("paymentResult",q))})},J=(t=!1)=>{_e({orderNo:x||g,saleUserId:V,tenantId:A}).then(u=>{var d,C;const{code:n,data:o}=u;n==="10000"&&(c.value=o,t&&(((C=(d=o==null?void 0:o.tenantOrderHolder)==null?void 0:d.extInfo)==null?void 0:C.isCert)===i.NO_CERT||(o==null?void 0:o.tenantOrderInsuredList.some(e=>{var s;return((s=e.extInfo)==null?void 0:s.isCert)===i.NO_CERT}))?$("\u7528\u6237\u672A\u5B8C\u8EAB\u4EFD\u8BA4\u8BC1\u53CA\u7B7E\u5B57"):(!(o==null?void 0:o.tenantOrderAttachmentList.find(e=>e.category===X.ELECTRIC_SIGN&&e.objectType===Q.HOLDER))||!(o==null?void 0:o.tenantOrderAttachmentList.find(e=>e.category===X.ELECTRIC_SIGN&&e.objectType===Q.INSURED)))&&$("\u7528\u6237\u672A\u5B8C\u8EAB\u4EFD\u8BA4\u8BC1\u53CA\u7B7E\u5B57")),setTimeout(()=>{let e=0;o.tenantOrderAttachmentList.forEach(s=>{var a,l,f,F;s.category===X.ELECTRIC_SIGN&&(s.objectType===Q.HOLDER?((l=(a=m.value)==null?void 0:a.clear)==null||l.call(a),m.value.setDataURL(s.fileBase64)):s.objectType===Q.INSURED&&((F=(f=b[e])==null?void 0:f.clear)==null||F.call(f),b[e].setDataURL(s.fileBase64),e+=1))})}))})},Ne=()=>{J(!0)},ke=Me(()=>{const t=O(S({},q),{isShare:1,sharePageCode:"sign"});return`${window.location.origin}/phoneVerify?${qe.stringify(t)}`}),Re=async()=>{const t={orderNo:x||g,productCode:ye,tenantId:A,objectType:1},u={insurerCode:Y,orderNo:g,productCategory:ee,tenantId:A,noticeType:4,objectType:1},{code:n,data:o}=await De(t),{code:d,data:C}=await De(O(S({},t),{objectType:2})),{code:e,data:s}=await ve(u),{code:a,data:l}=await ve(O(S({},u),{noticeType:5,objectType:2}));n==="10000"&&(ue.value=o||[]),d==="10000"&&(te.value=C||[]),e==="10000"&&(oe.value=s||[]),a==="10000"&&(se.value=l||[])};return Ue(()=>{J(),Re();const t=z.get("verifyData");if(t){const{serialNo:u,certNo:n,name:o}=t;Ze({certiNo:n,orderNo:x||g,serialNo:u,tenantId:A,userName:o}).then(d=>{const{code:C,data:e}=d;C==="10000"&&(z.remove("verifyData"),J())})}}),(t,u)=>{const n=W("ProPDFviewer"),o=W("van-button"),d=W("ProPageWrap");return E(),I(d,null,{default:D(()=>{var C;return[r("div",st,[p(Ge,{type:"warning",title:"\u5C0A\u656C\u7684\u5BA2\u6237\uFF0C\u672C\u6B21\u6295\u4FDD\u9700\u8981\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",content:"\u672C\u4EA7\u54C1\u6295\u4FDD\u9700\u8981\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u8FDB\u884C\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u60A8\u8D2D\u4E70\u672C\u4EA7\u54C1\u7684\u7D2F\u8BA1\u603B\u4FDD\u8D39\u5DF2\u8D85\u8FC720\u4E07\uFF0C\u6309\u76D1\u7BA1\u8981\u6C42\uFF0C\u9700\u8981\u63D0\u4F9B\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u3001\u6307\u5B9A\u53D7\u76CA\u4EBA\u8BC1\u4EF6\u5F71\u50CF\uFF0C\u672C\u4EA7\u54C1\u975E\u672C\u4EBA\u6295\u4FDD\u4E14\u5E26\u8EAB\u6545\u8D23\u4EFB\u3001\u9700\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\uFF08\u6210\u4EBA\uFF09\u7684\u6295\u4FDD\u610F\u613F\u8FDB\u884C\u7B7E\u5B57\u786E\u8BA4\u3002"}),p(j,{title:"\u6295\u4FDD\u4EBA",class:"card"},{extra:D(()=>{var e,s,a,l,f,F,k,R,le,ce;return[r("div",ot,[r("div",at,h((s=(e=c.value)==null?void 0:e.tenantOrderHolder)==null?void 0:s.name),1),H((l=(a=c.value)==null?void 0:a.tenantOrderHolder)==null?void 0:l.certType)?(E(),v("div",{key:0,class:Ee(["status",{verified:((k=(F=(f=c.value)==null?void 0:f.tenantOrderHolder)==null?void 0:F.extInfo)==null?void 0:k.isCert)===i.CERT}])},h(((ce=(le=(R=c.value)==null?void 0:R.tenantOrderHolder)==null?void 0:le.extInfo)==null?void 0:ce.isCert)===i.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):L("",!0)])]}),default:D(()=>{var e,s,a,l,f,F,k;return[r("div",nt,[rt,r("div",it,h((s=(e=c.value)==null?void 0:e.tenantOrderHolder)==null?void 0:s.certNo),1),((f=(l=(a=c.value)==null?void 0:a.tenantOrderHolder)==null?void 0:l.extInfo)==null?void 0:f.isCert)!==i.CERT&&H((k=(F=c.value)==null?void 0:F.tenantOrderHolder)==null?void 0:k.certType)?(E(),v("div",{key:0,class:"action",onClick:u[0]||(u[0]=R=>ie(-1))},[lt,p(K,{name:"right_arrow",class:"icon"})])):L("",!0)])]}),_:1}),p(j,{key:"-1",title:"\u6295\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:D(()=>[r("div",{class:"resign",onClick:he},"\u91CD\u7B7E")]),default:D(()=>[p(Be,{ref_key:"holderSign",ref:m,class:"sign"},null,512),r("div",ct,[r("div",dt,"\u7B7E\u540D\u65E5\u671F\uFF1A "+h(T(ae)),1),r("div",Ct,[Et,r("span",null,[(E(!0),v(U,null,M(ue.value,(e,s)=>(E(),I(n,{key:`holderFileList-${s}`,class:"file",title:`\u300A${e.materialName}\u300B`,content:e.materialContent,type:T(fe)(e.materialContent,e.materialSource+""),onClick:u[1]||(u[1]=()=>"")},null,8,["title","content","type"]))),128))]),(E(!0),v(U,null,M(oe.value,(e,s)=>(E(),I(n,{key:`holderQuestionList-${s}`,class:"file",title:`\u300A${e.title}\u300B`,content:P.value,type:N.value,onClick:()=>re(e)},null,8,["title","content","type","onClick"]))),128))])])]),_:1}),(E(!0),v(U,null,M((C=c.value)==null?void 0:C.tenantOrderInsuredList,(e,s)=>(E(),v("div",{key:s},[p(j,{title:"\u88AB\u4FDD\u4EBA",class:"card"},{extra:D(()=>{var a,l;return[r("div",Bt,[r("div",ft,h(e.name),1),H(e.certType)?(E(),v("div",{key:0,class:Ee(["status",{verified:((a=e.extInfo)==null?void 0:a.isCert)===i.CERT}])},h(((l=e.extInfo)==null?void 0:l.isCert)===i.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):L("",!0)])]}),default:D(()=>{var a;return[r("div",_t,[Dt,r("div",pt,h(e.certNo),1),((a=e.extInfo)==null?void 0:a.isCert)!==i.CERT&&H(e.certType)?(E(),v("div",{key:0,class:"action",onClick:l=>ie(s)},[Ft,p(K,{name:"right_arrow",class:"icon"})],8,vt)):L("",!0)])]}),_:2},1024),p(j,{title:"\u88AB\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:D(()=>[r("div",{class:"resign",onClick:a=>ge(s)},"\u91CD\u7B7E",8,At)]),default:D(()=>[p(Be,{ref_for:!0,ref:Te,class:"sign"}),r("div",yt,[r("div",ht,"\u7B7E\u540D\u65E5\u671F\uFF1A "+h(T(ae)),1),r("div",gt,[Tt,(E(!0),v(U,null,M(te.value,(a,l)=>(E(),I(n,{key:`insuredFileList-${l}`,class:"file",title:`\u300A${a.materialName}\u300B`,content:a.materialContent,type:T(fe)(a.materialContent,a.materialSource+""),onClick:u[2]||(u[2]=()=>"")},null,8,["title","content","type"]))),128)),(E(!0),v(U,null,M(se.value,(a,l)=>(E(),I(n,{key:`insuredQuestionList-${l}`,class:"file",title:`\u300A${a.title}\u300B`,content:P.value,type:N.value,onClick:()=>re(a)},null,8,["title","content","type","onClick"]))),128))])])]),_:2},1024)]))),128)),r("div",mt,[T(G)?L("",!0):(E(),v("div",{key:0,class:"refresh-btn",onClick:Ne},[r("div",null,[p(K,{name:"refresh"})]),Nt])),T(G)?L("",!0):(E(),I(Xe,{key:1,title:"\u9080\u8BF7\u60A8\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",desc:"\u9080\u8BF7\u60A8\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",link:T(ke)},{default:D(()=>[p(o,{plain:"",type:"primary",class:"share-btn"},{default:D(()=>[kt]),_:1})]),_:1},8,["link"])),p(o,{type:"primary",class:"submit-btn",onClick:me},{default:D(()=>[Rt]),_:1})])])]}),_:1})}}});var Mt=Ve(St,[["__scopeId","data-v-2d767e5c"]]);export{Mt as default};
