var ae=Object.defineProperty,oe=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var V=(c,l,d)=>l in c?ae(c,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):c[l]=d,$=(c,l)=>{for(var d in l||(l={}))re.call(l,d)&&V(c,d,l[d]);if(M)for(var d of M(l))ie.call(l,d)&&V(c,d,l[d]);return c},Y=(c,l)=>oe(c,ne(l));import{g as ce,Q as le,af as de,C as x,d as Be,M as _e,r as z,h as D,j as De,k as f,y as u,n as E,I as F,J as Q,m as v,s as I,z as m,E as w,F as R,a1 as fe,a2 as Ee,B as h,T as q,D as Fe}from"./vendor-94f9fb13.js";import{_ as ve,S as Ce,z as he,m as W,i as O,A as G,N as k,P as Ae}from"./index-d223992d.js";import{g as pe,f as me,s as J,a as ge}from"./verify-bb99f120.js";import{a as ye,n as Ne}from"./index-95d94299.js";const K=c=>(fe("data-v-08d1c23c"),c=c(),Ee(),c),Ie={class:"page-verify"},Oe={class:"people"},ke={class:"name"},Se={class:"verify-item"},be=K(()=>u("div",{class:"label"},"\u8EAB\u4EFD\u8BC1\u53F7\u7801",-1)),xe={class:"no"},we=h(" \u53BB\u8BA4\u8BC1 "),Re={class:"sign-body"},Pe={class:"date"},Le={class:"file"},Ue=h(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A"),He={key:0,class:"dun-hao"},Te={class:"people"},je={class:"name"},Me={class:"verify-item"},Ve=K(()=>u("div",{class:"label"},"\u8EAB\u4EFD\u8BC1\u53F7\u7801",-1)),$e={class:"no"},Ye=["onClick"],ze=h(" \u53BB\u8BA4\u8BC1 "),Qe=["onClick"],qe={class:"sign-body"},We={class:"date"},Ge={class:"file"},Je=h(" \u7B7E\u540D\u5C06\u88AB\u7528\u4E8E\u4EE5\u4E0B\u6587\u4EF6\uFF1A"),Ke={key:0,class:"dun-hao"},Xe={class:"footer-button footer"},Ze=h("\u63D0\u4EA4"),eu=ce({setup(c){const l=le(),d=de(),{orderNo:N="2022072810590219649",saleUserId:P="D1234567-1",tenantId:A="9991000007",templateId:X=1,productCode:Z="CQ75CQ76"}=l.query,S=new Ce({source:"localStorage"}),g=x([]),B=x(),y=x(),p=[],L=Be().format("YYYY-MM-DD"),ee=()=>{var t;(t=y.value)==null||t.clear()},ue=t=>{p[t].clear()},U=(t,s)=>{ge({callbackUrl:window.location.href,certiNo:"2022072710380711215",faceAuthMode:"TENCENT",userName:s,tenantId:9991000007}).then(n=>{const{code:r,data:i}=n;if(r==="10000"){const{originalUrl:e,serialNo:o}=i;window.location.href=e,S.set("verifyData",{serialNo:o,certNo:t,name:s})}})},H=t=>{var s,n,r,i;t===-1?U((s=B.value.tenantOrderHolder)==null?void 0:s.certNo,(n=B.value.tenantOrderHolder)==null?void 0:n.name):U((r=B.value.tenantOrderInsuredList[t])==null?void 0:r.certNo,(i=B.value.tenantOrderInsuredList[t])==null?void 0:i.name)},te=t=>{t&&p.every(s=>s!==t)&&p.push(t)},se=()=>{var s;if((s=y.value)==null?void 0:s.isEmpty()){q.fail("\u8BF7\u6295\u4FDD\u4EBA\u7B7E\u540D");return}if(p.some(n=>n.isEmpty())){q.fail("\u8BF7\u88AB\u4FDD\u4EBA\u7B7E\u540D");return}Fe.confirm({title:"\u63D0\u793A",message:"\u8BF7\u786E\u8BA4\u4FE1\u606F\u586B\u5199\u65E0\u8BEF\u540E\uFF0C\u518D\u8FDB\u884C\u652F\u4ED8"}).then(()=>{var r;const n=(r=y.value)==null?void 0:r.save();Promise.all([J("HOLDER",n,2779003,`${A}`),...p.map(i=>J("INSURED",i.save(),2779003,`${A}`))]).then(()=>{Ne(Y($({},B.value),{pageCode:"",operateOption:{withSignInfo:!0},extInfo:{pageCode:"",templateId:X}})).then(i=>{const{code:e,data:o}=i;e==="10000"&&o.success&&d.push({path:Ae[o.pageAction.data.nextPageCode],query:{orderNo:N,saleUserId:P,tenantId:A}})})})})};return _e(()=>{ye({orderNo:N,saleUserId:P,tenantId:A}).then(s=>{const{code:n,data:r}=s;if(n==="10000"){B.value=r;let i=0;r.tenantOrderAttachmentList.forEach(e=>{e.category===21&&(e.objectType===2?y.value.setDataURL(e.fileBase64):e.objectType===1&&(p[i].setDataURL(e.fileBase64),i+=1))})}}),pe({orderNo:N,productCode:Z,tenantId:A}).then(s=>{const{code:n,data:r}=s;n==="10000"&&(g.value=r||[])});const t=S.get("verifyData");if(t){const{serialNo:s,certNo:n,name:r}=t;me({certiNo:n,orderNo:N,serialNo:s,tenantId:A,userName:r}).then(i=>{S.remove("verifyData")})}}),(t,s)=>{const n=z("van-button"),r=z("ProPageWrap");return D(),De(r,null,{default:f(()=>{var i;return[u("div",Ie,[E(he,{type:"warning",title:"\u5C0A\u656C\u7684\u5BA2\u6237\uFF0C\u672C\u6B21\u6295\u4FDD\u9700\u8981\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1",content:"\u672C\u4EA7\u54C1\u6295\u4FDD\u9700\u8981\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u8FDB\u884C\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u60A8\u8D2D\u4E70\u672C\u4EA7\u54C1\u7684\u7D2F\u8BA1\u603B\u4FDD\u8D39\u5DF2\u8D85\u8FC720\u4E07\uFF0C\u6309\u76D1\u7BA1\u8981\u6C42\uFF0C\u9700\u8981\u63D0\u4F9B\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\u3001\u6307\u5B9A\u53D7\u76CA\u4EBA\u8BC1\u4EF6\u5F71\u50CF\uFF0C\u672C\u4EA7\u54C1\u975E\u672C\u4EBA\u6295\u4FDD\u4E14\u5E26\u8EAB\u6545\u8D23\u4EFB\u3001\u9700\u5BF9\u6295\u4FDD\u4EBA\u3001\u88AB\u4FDD\u4EBA\uFF08\u6210\u4EBA\uFF09\u7684\u6295\u4FDD\u610F\u613F\u8FDB\u884C\u7B7E\u5B57\u786E\u8BA4\u3002"}),E(O,{title:"\u6295\u4FDD\u4EBA",class:"card"},{extra:f(()=>{var e,o,a,_,C,b,T,j;return[u("div",Oe,[u("div",ke,F((o=(e=B.value)==null?void 0:e.tenantOrderHolder)==null?void 0:o.name),1),u("div",{class:Q(["status",{verified:(C=(_=(a=B.value)==null?void 0:a.tenantOrderHolder)==null?void 0:_.extInfo)==null?void 0:C.isCert}])},F(((j=(T=(b=B.value)==null?void 0:b.tenantOrderHolder)==null?void 0:T.extInfo)==null?void 0:j.isCert)?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)])]}),default:f(()=>{var e,o,a,_,C;return[u("div",Se,[be,u("div",xe,F((o=(e=B.value)==null?void 0:e.tenantOrderHolder)==null?void 0:o.certNo),1),((C=(_=(a=B.value)==null?void 0:a.tenantOrderHolder)==null?void 0:_.extInfo)==null?void 0:C.isCert)?I("",!0):(D(),v("div",{key:0,class:"action",onClick:s[0]||(s[0]=b=>H(-1))},[we,E(W,{name:"right_arrow",class:"icon"})]))])]}),_:1}),E(O,{title:"\u6295\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:f(()=>[u("div",{class:"resign",onClick:ee},"\u91CD\u7B7E")]),default:f(()=>[E(G,{ref_key:"holderSign",ref:y,class:"sign"},null,512),u("div",Re,[u("div",Pe,"\u7B7E\u540D\u65E5\u671F\uFF1A "+F(m(L)),1),u("div",Le,[Ue,(D(!0),v(R,null,w(g.value.filter(e=>e.noticeObject===m(k).HOLDER),(e,o)=>(D(),v("span",{key:o,class:"file-name"},[h(F(`\u300A${e.materialName}\u300B`),1),o!==g.value.filter(a=>a.noticeObject===m(k).HOLDER).length-1?(D(),v("span",He,"\u3001")):I("",!0)]))),128))])])]),_:1}),(D(!0),v(R,null,w((i=B.value)==null?void 0:i.tenantOrderInsuredList,(e,o)=>(D(),v("div",{key:o},[E(O,{title:"\u88AB\u4FDD\u4EBA",class:"card"},{extra:f(()=>{var a,_;return[u("div",Te,[u("div",je,F(e.name),1),u("div",{class:Q(["status",{verified:(a=e.extInfo)==null?void 0:a.isCert}])},F(((_=e.extInfo)==null?void 0:_.isCert)?"\u5DF2\u8BA4\u8BC1":"\u5F85\u8BA4\u8BC1"),3)])]}),default:f(()=>{var a;return[u("div",Me,[Ve,u("div",$e,F(e.certNo),1),((a=e.extInfo)==null?void 0:a.isCert)?I("",!0):(D(),v("div",{key:0,class:"action",onClick:_=>H(o)},[ze,E(W,{name:"right_arrow",class:"icon"})],8,Ye))])]}),_:2},1024),E(O,{title:"\u88AB\u4FDD\u4EBA\u7B7E\u540D","show-icon":!1,class:"sign-card","show-line":!1},{extra:f(()=>[u("div",{class:"resign",onClick:a=>ue(o)},"\u91CD\u7B7E",8,Qe)]),default:f(()=>[E(G,{ref_for:!0,ref:te,class:"sign"}),u("div",qe,[u("div",We,"\u7B7E\u540D\u65E5\u671F\uFF1A "+F(m(L)),1),u("div",Ge,[Je,(D(!0),v(R,null,w(g.value.filter(a=>a.noticeObject===m(k).INSURED),(a,_)=>(D(),v("span",{key:_,class:"file-name"},[h(F(`\u300A${a.materialName}\u300B`),1),_!==g.value.filter(C=>C.noticeObject===m(k).INSURED).length-1?(D(),v("span",Ke,"\u3001")):I("",!0)]))),128))])])]),_:2},1024)]))),128)),u("div",Xe,[E(n,{type:"primary",class:"submit-btn",onClick:se},{default:f(()=>[Ze]),_:1})])])]}),_:1})}}});var nu=ve(eu,[["__scopeId","data-v-08d1c23c"]]);export{nu as default};
