var Se=Object.defineProperty,Oe=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var Ce=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var Ee=(B,i,f)=>i in B?Se(B,i,{enumerable:!0,configurable:!0,writable:!0,value:f}):B[i]=f,S=(B,i)=>{for(var f in i||(i={}))Le.call(i,f)&&Ee(B,f,i[f]);if(Ce)for(var f of Ce(i))be.call(i,f)&&Ee(B,f,i[f]);return B},O=(B,i)=>Oe(B,Ie(i));import{g as we,O as xe,a9 as Pe,E as y,d as Ue,y as He,h as Me,r as z,j as E,k as I,m as D,z as r,p,J as h,n as v,L as Be,t as L,A as T,G as H,F as M,a4 as $e,a5 as je,C as b,T as $,D as Qe}from"./vendor-9d7eb2ed.js";import{q as qe}from"./index-a99815ab.js";import{_ as Ve,S as Ye,o as Ge,C as Je,e as X,a as j,p as _e,l as fe,g as De,q as We,n as ze,N as Xe,b as Ke,A as K,s as Q}from"./index-15167dc8.js";import{_ as Ze}from"./index-d8007d85.js";import{f as et,s as tt,g as pe,a as ut}from"./verify-572f390c.js";import{a as Z}from"./order-e21d3bb8.js";import{g as st,l as ve}from"./inform-988d048c.js";const ee=B=>($e("data-v-a9d21be4"),B=B(),je(),B),ot={class:"page-verify"},at={class:"people"},nt={class:"name"},rt={class:"verify-item"},it=ee(()=>r("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),lt={class:"no"},ct=b(" \u53BB\u8BA4\u8BC1 "),dt={class:"sign-body"},Ct={class:"date"},Et={class:"file"},Bt=b(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),_t={class:"people"},ft={class:"name"},Dt={class:"verify-item"},pt=ee(()=>r("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),vt={class:"no"},Ft=["onClick"],At=b(" \u53BB\u8BA4\u8BC1 "),yt=["onClick"],ht={class:"sign-body"},gt={class:"date"},Tt={class:"file"},mt=b(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),Nt={class:"footer-button footer"},Rt=ee(()=>r("div",{class:"text"},"\u5237\u65B0",-1)),kt=b("\u5206\u4EAB"),St=b("\u63D0\u4EA4"),Ot=we({setup(B){const i={CERT:1,NO_CERT:2},f=xe(),Fe=Pe(),q=(()=>{const t=f.query;return t.orderCode&&(t.orderNo=t.orderCode,delete t.orderCode),t})(),{saleUserId:V="D1234567-1",tenantId:A="9991000007",templateId:Ae=1,productCode:ye="CQ75CQ76",insurerCode:Y="ancheng",isShare:G,orderCode:w,orderNo:g,productCategory:te}=q,J=new Ye({source:"localStorage"}),ue=y([]),se=y([]),oe=y([]),ae=y([]),c=y(),m=y(),x=[],N=y(""),P=y(),ne=Ue().format("YYYY-MM-DD"),he=()=>{var t,u;(u=(t=m.value)==null?void 0:t.clear)==null||u.call(t)},ge=t=>{var u,n;(n=(u=x[t])==null?void 0:u.clear)==null||n.call(u)},re=(t,u)=>{let n=window.location.href;n=n.includes("orderCode")?n:n.replace("orderNo","orderCode"),ut({callbackUrl:n,certiNo:t,faceAuthMode:"TENCENT",userName:u,tenantId:9991000007}).then(s=>{const{code:d,data:C}=s;if(d==="10000"){const{originalUrl:e,serialNo:o}=C;window.location.href=e,J.set("verifyData",{serialNo:o,certNo:t,name:u})}})},ie=t=>{const{id:u,objectType:n}=t;N.value="",P.value="";const s={1:"pdf",2:"richText",3:"link"};st({insurerCode:Y,id:u,objectType:n,productCategory:te,orderNo:g,tenantId:A}).then(({code:d,data:C})=>{if(d==="10000"){const{textType:e,content:o,questionType:a}=(C==null?void 0:C[0])||{};a===2?(N.value="question",P.value=C):(e===1&&o.includes("png")?N.value="picture":N.value=s[e],P.value=o)}})},U=t=>`${t}`===Je.CERT,le=t=>{var u,n,s,d;t===-1?re((u=c.value.tenantOrderHolder)==null?void 0:u.certNo,(n=c.value.tenantOrderHolder)==null?void 0:n.name):re((s=c.value.tenantOrderInsuredList[t])==null?void 0:s.certNo,(d=c.value.tenantOrderInsuredList[t])==null?void 0:d.name)},Te=t=>{t&&x.every(u=>u!==t)&&x.push(t)},me=()=>{var u,n,s,d;if((u=m.value)==null?void 0:u.isEmpty()){$.fail("\u8BF7\u6295\u4FDD\u4EBA\u7B7E\u540D");return}if(((s=(n=c.value.tenantOrderHolder)==null?void 0:n.extInfo)==null?void 0:s.isCert)!==i.CERT&&U((d=c.value.tenantOrderHolder)==null?void 0:d.certType)){$.fail("\u8BF7\u6295\u4FDD\u4EBA\u53BB\u8BA4\u8BC1");return}De({orderNo:w||g,saleUserId:V,tenantId:A}).then(C=>{const{code:e,data:o}=C;e==="10000"&&([Z.PENDING,Z.PAYMENT_FAILED,Z.UNDER_WRITING_SUCCESS].includes(o.orderStatus)?Qe.confirm({title:"\u63D0\u793A",message:"\u8BF7\u786E\u8BA4\u4FE1\u606F\u586B\u5199\u65E0\u8BEF\u540E\uFF0C\u518D\u8FDB\u884C\u652F\u4ED8"}).then(()=>{var l,_;const a=(l=m.value)==null?void 0:l.save();Promise.all([tt("HOLDER",a,(_=c.value)==null?void 0:_.id,`${A}`)]).then(()=>{ze(O(S({},c.value),{pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:O(S({},c.value.extInfo),{pageCode:"sign",templateId:Ae,shareFlag:G?"Y":"N",buttonCode:Xe.sign}),venderCode:Y})).then(F=>{const{code:R,data:k}=F;e==="10000"&&k.success&&Fe.push({path:Ke[k.pageAction.data.nextPageCode],query:{orderNo:w||g,saleUserId:V,tenantId:A}})})})}):We("paymentResult",q))})},W=(t=!1)=>{De({orderNo:w||g,saleUserId:V,tenantId:A}).then(u=>{var d,C;const{code:n,data:s}=u;n==="10000"&&(c.value=s,t&&(((C=(d=s==null?void 0:s.tenantOrderHolder)==null?void 0:d.extInfo)==null?void 0:C.isCert)===i.NO_CERT||(s==null?void 0:s.tenantOrderInsuredList.some(e=>{var o;return((o=e.extInfo)==null?void 0:o.isCert)===i.NO_CERT}))?$("\u7528\u6237\u672A\u5B8C\u8EAB\u4EFD\u8BA4\u8BC1\u53CA\u7B7E\u5B57"):(!(s==null?void 0:s.tenantOrderAttachmentList.find(e=>e.category===K.ELECTRIC_SIGN&&e.objectType===Q.HOLDER))||!(s==null?void 0:s.tenantOrderAttachmentList.find(e=>e.category===K.ELECTRIC_SIGN&&e.objectType===Q.INSURED)))&&$("\u7528\u6237\u672A\u5B8C\u8EAB\u4EFD\u8BA4\u8BC1\u53CA\u7B7E\u5B57")),setTimeout(()=>{let e=0;s.tenantOrderAttachmentList.forEach(o=>{var a,l,_,F;o.category===K.ELECTRIC_SIGN&&(o.objectType===Q.HOLDER?((l=(a=m.value)==null?void 0:a.clear)==null||l.call(a),m.value.setDataURL(o.fileBase64)):o.objectType===Q.INSURED&&((F=(_=x[e])==null?void 0:_.clear)==null||F.call(_),x[e].setDataURL(o.fileBase64),e+=1))})}))})},Ne=()=>{W(!0)},Re=He(()=>{const t=O(S({},q),{isShare:1,sharePageCode:"sign"});return`${window.location.origin}/phoneVerify?${qe.stringify(t)}`}),ke=async()=>{const t={orderNo:w||g,productCode:ye,tenantId:A,objectType:1},u={insurerCode:Y,orderNo:g,productCategory:te,tenantId:A,noticeType:4,objectType:1},{code:n,data:s}=await pe(t),{code:d,data:C}=await pe(O(S({},t),{objectType:2})),{code:e,data:o}=await ve(u),{code:a,data:l}=await ve(O(S({},u),{noticeType:5,objectType:2}));n==="10000"&&(se.value=s||[]),d==="10000"&&(ue.value=C||[]),e==="10000"&&(ae.value=o||[]),a==="10000"&&(oe.value=l||[])};return Me(()=>{W(),ke();const t=J.get("verifyData");if(t){const{serialNo:u,certNo:n,name:s}=t;et({certiNo:n,orderNo:w||g,serialNo:u,tenantId:A,userName:s}).then(d=>{const{code:C,data:e}=d;C==="10000"&&(J.remove("verifyData"),W())})}}),(t,u)=>{const n=z("ProPDFviewer"),s=z("van-button"),d=z("ProPageWrap");return E(),I(d,null,{default:D(()=>{var C;return[r("div",ot,[p(Ge,{type:"warning",title:"\u5C0A\u656C\u7684\u5BA2\u6237\uFF0C\u672C\u6B21\u6295\u4FDD\u9700\u8981\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",content:"\u672C\u4EA7\u54C1\u6295\u4FDD\u9700\u8981\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u8FDB\u884C\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u60A8\u8D2D\u4E70\u672C\u4EA7\u54C1\u7684\u7D2F\u8BA1\u603B\u4FDD\u8D39\u5DF2\u8D85\u8FC720\u4E07\uFF0C\u6309\u76D1\u7BA1\u8981\u6C42\uFF0C\u9700\u8981\u63D0\u4F9B\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u3001\u6307\u5B9A\u53D7\u76CA\u4EBA\u8BC1\u4EF6\u5F71\u50CF\uFF0C\u672C\u4EA7\u54C1\u975E\u672C\u4EBA\u6295\u4FDD\u4E14\u5E26\u8EAB\u6545\u8D23\u4EFB\u3001\u9700\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\uFF08\u6210\u4EBA\uFF09\u7684\u6295\u4FDD\u610F\u613F\u8FDB\u884C\u7B7E\u5B57\u786E\u8BA4\u3002"}),p(j,{title:"\u6295\u4FDD\u4EBA",class:"card"},{extra:D(()=>{var e,o,a,l,_,F,R,k,ce,de;return[r("div",at,[r("div",nt,h((o=(e=c.value)==null?void 0:e.tenantOrderHolder)==null?void 0:o.name),1),U((l=(a=c.value)==null?void 0:a.tenantOrderHolder)==null?void 0:l.certType)?(E(),v("div",{key:0,class:Be(["status",{verified:((R=(F=(_=c.value)==null?void 0:_.tenantOrderHolder)==null?void 0:F.extInfo)==null?void 0:R.isCert)===i.CERT}])},h(((de=(ce=(k=c.value)==null?void 0:k.tenantOrderHolder)==null?void 0:ce.extInfo)==null?void 0:de.isCert)===i.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):L("",!0)])]}),default:D(()=>{var e,o,a,l,_,F,R;return[r("div",rt,[it,r("div",lt,h((o=(e=c.value)==null?void 0:e.tenantOrderHolder)==null?void 0:o.certNo),1),((_=(l=(a=c.value)==null?void 0:a.tenantOrderHolder)==null?void 0:l.extInfo)==null?void 0:_.isCert)!==i.CERT&&U((R=(F=c.value)==null?void 0:F.tenantOrderHolder)==null?void 0:R.certType)?(E(),v("div",{key:0,class:"action",onClick:u[0]||(u[0]=k=>le(-1))},[ct,p(X,{name:"right_arrow",class:"icon"})])):L("",!0)])]}),_:1}),p(j,{key:"-1",title:"\u6295\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:D(()=>[r("div",{class:"resign",onClick:he},"\u91CD\u7B7E")]),default:D(()=>[p(_e,{ref_key:"holderSign",ref:m,class:"sign"},null,512),r("div",dt,[r("div",Ct,"\u7B7E\u540D\u65E5\u671F\uFF1A "+h(T(ne)),1),r("div",Et,[Bt,r("span",null,[(E(!0),v(M,null,H(se.value,(e,o)=>(E(),I(n,{key:`holderFileList-${o}`,class:"file",title:`\u300A${e.materialName}\u300B`,content:e.materialContent,type:T(fe)(e.materialContent,e.materialSource+""),onClick:u[1]||(u[1]=()=>"")},null,8,["title","content","type"]))),128))]),(E(!0),v(M,null,H(ae.value,(e,o)=>(E(),I(n,{key:`holderQuestionList-${o}`,class:"file",title:`\u300A${e.title}\u300B`,content:P.value,type:N.value,onClick:()=>ie(e)},null,8,["title","content","type","onClick"]))),128))])])]),_:1}),(E(!0),v(M,null,H((C=c.value)==null?void 0:C.tenantOrderInsuredList,(e,o)=>(E(),v("div",{key:o},[p(j,{title:"\u88AB\u4FDD\u4EBA",class:"card"},{extra:D(()=>{var a,l;return[r("div",_t,[r("div",ft,h(e.name),1),U(e.certType)?(E(),v("div",{key:0,class:Be(["status",{verified:((a=e.extInfo)==null?void 0:a.isCert)===i.CERT}])},h(((l=e.extInfo)==null?void 0:l.isCert)===i.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):L("",!0)])]}),default:D(()=>{var a;return[r("div",Dt,[pt,r("div",vt,h(e.certNo),1),((a=e.extInfo)==null?void 0:a.isCert)!==i.CERT&&U(e.certType)?(E(),v("div",{key:0,class:"action",onClick:l=>le(o)},[At,p(X,{name:"right_arrow",class:"icon"})],8,Ft)):L("",!0)])]}),_:2},1024),p(j,{title:"\u88AB\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:D(()=>[r("div",{class:"resign",onClick:a=>ge(o)},"\u91CD\u7B7E",8,yt)]),default:D(()=>[p(_e,{ref_for:!0,ref:Te,class:"sign"}),r("div",ht,[r("div",gt,"\u7B7E\u540D\u65E5\u671F\uFF1A "+h(T(ne)),1),r("div",Tt,[mt,(E(!0),v(M,null,H(ue.value,(a,l)=>(E(),I(n,{key:`insuredFileList-${l}`,class:"file",title:`\u300A${a.materialName}\u300B`,content:a.materialContent,type:T(fe)(a.materialContent,a.materialSource+""),onClick:u[2]||(u[2]=()=>"")},null,8,["title","content","type"]))),128)),(E(!0),v(M,null,H(oe.value,(a,l)=>(E(),I(n,{key:`insuredQuestionList-${l}`,class:"file",title:`\u300A${a.title}\u300B`,content:P.value,type:N.value,onClick:()=>ie(a)},null,8,["title","content","type","onClick"]))),128))])])]),_:2},1024)]))),128)),r("div",Nt,[T(G)?L("",!0):(E(),v("div",{key:0,class:"refresh-btn",onClick:Ne},[r("div",null,[p(X,{name:"refresh"})]),Rt])),T(G)?L("",!0):(E(),I(Ze,{key:1,title:"\u9080\u8BF7\u60A8\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",desc:"\u9080\u8BF7\u60A8\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",link:T(Re)},{default:D(()=>[p(s,{plain:"",type:"primary",class:"share-btn"},{default:D(()=>[kt]),_:1})]),_:1},8,["link"])),p(s,{type:"primary",class:"submit-btn",onClick:me},{default:D(()=>[St]),_:1})])])]}),_:1})}}});var Mt=Ve(Ot,[["__scopeId","data-v-a9d21be4"]]);export{Mt as default};
