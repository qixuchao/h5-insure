var Ee=Object.defineProperty,fe=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ee=(d,u,_)=>u in d?Ee(d,u,{enumerable:!0,configurable:!0,writable:!0,value:_}):d[u]=_,M=(d,u)=>{for(var _ in u||(u={}))De.call(u,_)&&ee(d,_,u[_]);if(Z)for(var _ of Z(u))Ce.call(u,_)&&ee(d,_,u[_]);return d},V=(d,u)=>fe(d,ve(u));import{g as ne,a5 as Fe,r as k,j as E,n as p,z as s,A as N,p as f,a6 as pe,Q as he,aj as Ae,E as j,d as ge,h as me,k as Y,m as D,J as A,L as ue,t as O,G as q,F as Q,a1 as ye,a2 as Te,C as R,T as x,D as Ne}from"./vendor-c15a8cf7.js";import{_ as re,S as Ie,D as Re,E as Oe,p as te,l as S,F as se,N as ae,P as xe}from"./index-b78f50a6.js";import{g as Se,f as ke,s as oe,a as we}from"./verify-3fb2ff77.js";import{n as be,a as Pe}from"./index-9f735f1c.js";var Ue="/static/assets/sidenav.5031dada.png";const He={class:"com-navigator"},Le=["src"],$e=ne({setup(d){const[u,_]=Fe(!1),w=()=>{_(!0)};return(b,C)=>{const P=k("van-popup");return E(),p("div",He,[s("img",{class:"btn",src:N(Ue),onClick:w},null,8,Le),f(P,{show:N(u),"onUpdate:show":C[0]||(C[0]=U=>pe(u)?u.value=U:null),position:"right",style:{width:"50%",height:"100%"},"safe-area-inset-top":""},null,8,["show"])])}}});var Me=re($e,[["__scopeId","data-v-48192b24"]]);const ie=d=>(ye("data-v-2eee7116"),d=d(),Te(),d),Ve={class:"page-verify"},je={class:"people"},Ye={class:"name"},qe={class:"verify-item"},Qe=ie(()=>s("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),ze={class:"no"},Ge=R(" \u53BB\u8BA4\u8BC1 "),We={class:"sign-body"},Je={class:"date"},Ke={class:"file"},Xe=R(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),Ze={class:"people"},eu={class:"name"},uu={class:"verify-item"},tu=ie(()=>s("div",{class:"label"},"\u8BC1\u4EF6\u53F7\u7801",-1)),su={class:"no"},au=["onClick"],ou=R(" \u53BB\u8BA4\u8BC1 "),nu=["onClick"],ru={class:"sign-body"},iu={class:"date"},lu={class:"file"},cu=R(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A "),du={class:"footer-button footer"},_u=R("\u63D0\u4EA4"),Bu=ne({setup(d){const u={CERT:1,NO_CERT:2},_=he(),w=Ae(),{saleUserId:b="D1234567-1",tenantId:C="9991000007",templateId:P=1,productCode:U="CQ75CQ76",insurerCode:le="ancheng"}=_.query;let{orderNo:g}=_.query;typeof g=="object"&&(g=(g||[])[0]);const H=new Ie({source:"localStorage"}),L=j([]),a=j(),y=j(),m=[],z=ge().format("YYYY-MM-DD"),ce=()=>{var t;(t=y.value)==null||t.clear()},de=t=>{m[t].clear()},G=(t,n)=>{we({callbackUrl:window.location.href,certiNo:t,faceAuthMode:"TENCENT",userName:n,tenantId:9991000007}).then(r=>{const{code:i,data:l}=r;if(i==="10000"){const{originalUrl:F,serialNo:e}=l;window.location.href=F,H.set("verifyData",{serialNo:e,certNo:t,name:n})}})},T=t=>t===Oe.CERT,W=t=>{var n,r,i,l;t===-1?G((n=a.value.tenantOrderHolder)==null?void 0:n.certNo,(r=a.value.tenantOrderHolder)==null?void 0:r.name):G((i=a.value.tenantOrderInsuredList[t])==null?void 0:i.certNo,(l=a.value.tenantOrderInsuredList[t])==null?void 0:l.name)},_e=t=>{t&&m.every(n=>n!==t)&&m.push(t)},Be=()=>{var n,r,i,l,F;if((n=y.value)==null?void 0:n.isEmpty()){x.fail("\u8BF7\u6295\u4FDD\u4EBA\u7B7E\u540D");return}if(m.some(e=>e.isEmpty())){x.fail("\u8BF7\u88AB\u4FDD\u4EBA\u7B7E\u540D");return}if(((i=(r=a.value.tenantOrderHolder)==null?void 0:r.extInfo)==null?void 0:i.isCert)!==u.CERT&&T((l=a.value.tenantOrderHolder)==null?void 0:l.certType)){x.fail("\u8BF7\u6295\u4FDD\u4EBA\u53BB\u8BA4\u8BC1");return}if((F=a.value.tenantOrderInsuredList)==null?void 0:F.some(e=>{var c;return((c=e.extInfo)==null?void 0:c.isCert)!==u.CERT&&T(e.certType)})){x.fail("\u8BF7\u88AB\u4FDD\u4EBA\u53BB\u8BA4\u8BC1");return}Ne.confirm({title:"\u63D0\u793A",message:"\u8BF7\u786E\u8BA4\u4FE1\u606F\u586B\u5199\u65E0\u8BEF\u540E\uFF0C\u518D\u8FDB\u884C\u652F\u4ED8"}).then(()=>{var c,o;const e=(c=y.value)==null?void 0:c.save();Promise.all([oe("HOLDER",e,(o=a.value)==null?void 0:o.id,`${C}`),...m.map(B=>{var v;return oe("INSURED",B.save(),(v=a.value)==null?void 0:v.id,`${C}`)})]).then(()=>{be(V(M({},a.value),{pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:V(M({},a.value.extInfo),{pageCode:"sign",templateId:P}),venderCode:le})).then(B=>{const{code:v,data:h}=B;v==="10000"&&h.success&&w.push({path:xe[h.pageAction.data.nextPageCode],query:{orderNo:g,saleUserId:b,tenantId:C}})})})})},J=()=>{Pe({orderNo:g,saleUserId:b,tenantId:C}).then(t=>{const{code:n,data:r}=t;n==="10000"&&(a.value=r,setTimeout(()=>{let i=0;r.tenantOrderAttachmentList.forEach(l=>{l.category===21&&(l.objectType===2?(y.value.clear(),y.value.setDataURL(l.fileBase64)):l.objectType===1&&(m[i].clear(),m[i].setDataURL(l.fileBase64),i+=1))})}))})};return me(()=>{J(),Se({orderNo:g,productCode:U,tenantId:C}).then(n=>{const{code:r,data:i}=n;r==="10000"&&(L.value=i||[])});const t=H.get("verifyData");if(t){const{serialNo:n,certNo:r,name:i}=t;ke({certiNo:r,orderNo:g,serialNo:n,tenantId:C,userName:i}).then(l=>{const{code:F,data:e}=l;F==="10000"&&(H.remove("verifyData"),J())})}}),(t,n)=>{const r=k("ProPDFviewer"),i=k("van-button"),l=k("ProPageWrap");return E(),Y(l,null,{default:D(()=>{var F;return[s("div",Ve,[f(Re,{type:"warning",title:"\u5C0A\u656C\u7684\u5BA2\u6237\uFF0C\u672C\u6B21\u6295\u4FDD\u9700\u8981\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",content:"\u672C\u4EA7\u54C1\u6295\u4FDD\u9700\u8981\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u8FDB\u884C\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u60A8\u8D2D\u4E70\u672C\u4EA7\u54C1\u7684\u7D2F\u8BA1\u603B\u4FDD\u8D39\u5DF2\u8D85\u8FC720\u4E07\uFF0C\u6309\u76D1\u7BA1\u8981\u6C42\uFF0C\u9700\u8981\u63D0\u4F9B\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u3001\u6307\u5B9A\u53D7\u76CA\u4EBA\u8BC1\u4EF6\u5F71\u50CF\uFF0C\u672C\u4EA7\u54C1\u975E\u672C\u4EBA\u6295\u4FDD\u4E14\u5E26\u8EAB\u6545\u8D23\u4EFB\u3001\u9700\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\uFF08\u6210\u4EBA\uFF09\u7684\u6295\u4FDD\u610F\u613F\u8FDB\u884C\u7B7E\u5B57\u786E\u8BA4\u3002"}),f(S,{title:"\u6295\u4FDD\u4EBA",class:"card"},{extra:D(()=>{var e,c,o,B,v,h,I,$,K,X;return[s("div",je,[s("div",Ye,A((c=(e=a.value)==null?void 0:e.tenantOrderHolder)==null?void 0:c.name),1),T((B=(o=a.value)==null?void 0:o.tenantOrderHolder)==null?void 0:B.certType)?(E(),p("div",{key:0,class:ue(["status",{verified:((I=(h=(v=a.value)==null?void 0:v.tenantOrderHolder)==null?void 0:h.extInfo)==null?void 0:I.isCert)===u.CERT}])},A(((X=(K=($=a.value)==null?void 0:$.tenantOrderHolder)==null?void 0:K.extInfo)==null?void 0:X.isCert)===u.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):O("",!0)])]}),default:D(()=>{var e,c,o,B,v,h,I;return[s("div",qe,[Qe,s("div",ze,A((c=(e=a.value)==null?void 0:e.tenantOrderHolder)==null?void 0:c.certNo),1),((v=(B=(o=a.value)==null?void 0:o.tenantOrderHolder)==null?void 0:B.extInfo)==null?void 0:v.isCert)!==u.CERT&&T((I=(h=a.value)==null?void 0:h.tenantOrderHolder)==null?void 0:I.certType)?(E(),p("div",{key:0,class:"action",onClick:n[0]||(n[0]=$=>W(-1))},[Ge,f(te,{name:"right_arrow",class:"icon"})])):O("",!0)])]}),_:1}),f(S,{title:"\u6295\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:D(()=>[s("div",{class:"resign",onClick:ce},"\u91CD\u7B7E")]),default:D(()=>[f(se,{ref_key:"holderSign",ref:y,class:"sign"},null,512),s("div",We,[s("div",Je,"\u7B7E\u540D\u65E5\u671F\uFF1A "+A(N(z)),1),s("div",Ke,[Xe,(E(!0),p(Q,null,q(L.value.filter(e=>e.noticeObject===N(ae).HOLDER),(e,c)=>(E(),Y(r,{key:c,class:"file",title:`\u300A${e.materialName}\u300B`,url:e.materialSource},null,8,["title","url"]))),128))])])]),_:1}),(E(!0),p(Q,null,q((F=a.value)==null?void 0:F.tenantOrderInsuredList,(e,c)=>(E(),p("div",{key:c},[f(S,{title:"\u88AB\u4FDD\u4EBA",class:"card"},{extra:D(()=>{var o,B;return[s("div",Ze,[s("div",eu,A(e.name),1),T(e.certType)?(E(),p("div",{key:0,class:ue(["status",{verified:((o=e.extInfo)==null?void 0:o.isCert)===u.CERT}])},A(((B=e.extInfo)==null?void 0:B.isCert)===u.CERT?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)):O("",!0)])]}),default:D(()=>{var o;return[s("div",uu,[tu,s("div",su,A(e.certNo),1),((o=e.extInfo)==null?void 0:o.isCert)!==u.CERT&&T(e.certType)?(E(),p("div",{key:0,class:"action",onClick:B=>W(c)},[ou,f(te,{name:"right_arrow",class:"icon"})],8,au)):O("",!0)])]}),_:2},1024),f(S,{title:"\u88AB\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:D(()=>[s("div",{class:"resign",onClick:o=>de(c)},"\u91CD\u7B7E",8,nu)]),default:D(()=>[f(se,{ref_for:!0,ref:_e,class:"sign"}),s("div",ru,[s("div",iu,"\u7B7E\u540D\u65E5\u671F\uFF1A "+A(N(z)),1),s("div",lu,[cu,(E(!0),p(Q,null,q(L.value.filter(o=>o.noticeObject===N(ae).INSURED),(o,B)=>(E(),Y(r,{key:B,class:"file",title:`\u300A${o.materialName}\u300B`,url:o.materialSource},null,8,["title","url"]))),128))])])]),_:2},1024)]))),128)),s("div",du,[f(i,{type:"primary",class:"submit-btn",onClick:Be},{default:D(()=>[_u]),_:1})])]),f(Me)]}),_:1})}}});var Fu=re(Bu,[["__scopeId","data-v-2eee7116"]]);export{Fu as default};
