var Be=Object.defineProperty,Fe=Object.defineProperties;var Ve=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var Ee=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t)=>{for(var n in t||(t={}))xe.call(t,n)&&Ee(e,n,t[n]);if(ye)for(var n of ye(t))Le.call(t,n)&&Ee(e,n,t[n]);return e},we=(e,t)=>Fe(e,Ve(t));import{g as O,h as s,m as a,y as o,I as d,a5 as se,C as F,x as ue,n as f,J as W,z as h,A as Oe,a1 as De,a2 as Ae,F as A,E as B,j as _,B as Y,s as l,r as L,k as p,af as be,Q as Se,M as Te,G as Z,H as ee}from"./vendor-07b5d0eb.js";import{_ as b,q as Ne,n as ne,b as qe,Y as Me,r as Ue,j as X,s as Ie,t as je,u as ze}from"./index-708d934e.js";import{w as He,n as Qe}from"./pdf.worker.entry-39b91661.js";import{p as ke}from"./pdf_viewer-c2116725.js";import{b as We,c as Ye}from"./index-fc0b34c1.js";const Ge={class:"com-field-info"},Je={class:"title"},Ke={class:"desc"},Re=O({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(e){return(t,n)=>(s(),a("div",Ge,[o("div",Je,d(e.title),1),o("div",Ke,d(e.desc),1)]))}});var D=b(Re,[["__scopeId","data-v-51aa64db"]]);const Xe=e=>(De("data-v-ee7ab86e"),e=e(),Ae(),e),Ze={class:"com-question-item"},et={class:"question"},tt=Xe(()=>o("div",{class:"icon"},d("?"),-1)),st={class:"title"},ut=O({props:{question:{type:String,default:""},answer:{type:String,default:""}},setup(e){const[t,n]=se(!1),y=F(),I=()=>{n()},g=ue(()=>t.value?Ne(y.value):0);return($,u)=>(s(),a("div",Ze,[o("div",et,[tt,o("div",st,d(e.question),1),f(ne,{name:"down",class:W(["arrow-icon",{show:h(t)}]),onClick:I},null,8,["class"])]),o("div",{ref_key:"answerDom",ref:y,class:"answer",style:Oe({height:`${h(g)}px`})},d(e.answer),5)]))}});var nt=b(ut,[["__scopeId","data-v-ee7ab86e"]]);const at={class:"com-question"},ot=O({props:{list:{type:Array,default:()=>[]}},setup(e){const t=e,[n,y]=se(!1),I=()=>{y()},g=ue(()=>t.list.length<=4||n.value?t.list:t.list.slice(0,4));return($,u)=>(s(),a("div",at,[(s(!0),a(A,null,B(h(g),(m,E)=>(s(),_(nt,{key:E,question:m.title,answer:m.desc},null,8,["question","answer"]))),128)),e.list.length>4?(s(),a("div",{key:0,class:"show-more",onClick:I},[Y(d(h(n)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),f(ne,{name:"down",class:W(["icon",{showMore:h(n)}])},null,8,["class"])])):l("",!0)]))}});var rt=b(ot,[["__scopeId","data-v-61452bdb"]]);const it={class:"com-time-line"},lt={class:"left"},ct={class:"num"},dt={class:"right"},_t={class:"title"},pt={class:"desc"},vt=O({props:{list:{type:Array,default:()=>[]}},setup(e){const t=e,[n,y]=se(!1),I=()=>{y()},g=ue(()=>t.list.length<=4||n.value?t.list:t.list.slice(0,4));return($,u)=>(s(),a("div",it,[(s(!0),a(A,null,B(h(g),(m,E)=>(s(),a("div",{key:E,class:W(["item",{last:E===h(g).length-1}])},[o("div",lt,[o("div",ct,d(E+1),1)]),o("div",dt,[o("div",_t,d(m.title),1),o("div",pt,d(m.desc),1)])],2))),128)),e.list.length>4?(s(),a("div",{key:0,class:"show-more",onClick:I},[Y(d(h(n)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),f(ne,{name:"down",class:W(["icon",{showMore:h(n)}])},null,8,["class"])])):l("",!0)]))}});var ht=b(vt,[["__scopeId","data-v-5c3058a2"]]);const mt={class:"pdf-viewer"},ft=Y("\u52A0\u8F7D\u4E2D..."),gt=["id","isee_pdf"],yt=O({props:{title:{type:String,default:""},url:{type:String,default:""}},setup(e){const t=e;ke.exports.GlobalWorkerOptions.workerSrc=He;const n=Qe(),y=F(!1),I=F(!0),g=()=>{const u=document.getElementById(n);if(u.hasChildNodes()){I.value=!1;return}ke.exports.getDocument({url:t.url}).promise.then(E=>{const V=E.numPages;for(let c=1;c<=V;c++)E.getPage(c).then(G=>{const S=G.getViewport({scale:1}),v=document.createElement("canvas"),P=v.getContext("2d");v.width=S.width,v.height=S.height,v.style.width="100%",u.append(v);const T={canvasContext:P,viewport:S};G.render(T),I.value=!1})})},$=async()=>{y.value=!0,setTimeout(()=>{g()},0)};return(u,m)=>{const E=L("van-loading"),V=L("van-popup");return s(),a("span",mt,[o("span",{class:"title",onClick:$},d(e.title),1),f(V,{show:y.value,"onUpdate:show":m[0]||(m[0]=c=>y.value=c),closeable:"","close-icon":"close",position:"bottom",style:{height:"600px"}},{default:p(()=>[I.value?(s(),_(E,{key:0,type:"spinner",vertical:"",class:"loading",size:"30px"},{default:p(()=>[ft]),_:1})):l("",!0),o("div",{id:h(n),isee_pdf:u.pdfUrl,style:{height:"600px",width:"100%",overflow:"auto"}},null,8,gt)]),_:1},8,["show"])])}}});var Et=b(yt,[["__scopeId","data-v-77ce1317"]]);const Ct=e=>qe.post("/api/app/insure/product/getProductDetail",e),te=e=>{const t=e.split("_");return t[0]==="day"?`\u6EE1${t[1]}\u5929`:`${1}\u5468\u5C81`},wt=e=>{if(!e)return"";const t=e.split(",");return t.length===1?te(t[0]):`${te(t[0])} ~ ${te(t[1])}`},It=e=>{if(!e)return"";if(e==="single")return"\u8DB8\u7F34";const t=e.split("_");return t[0]==="year"?`${t[1]}\u5E74`:t[0]==="month"?`${t[1]}\u6708`:t[0]==="to"?t[1]==="life"?"\u4FDD\u7EC8\u751F":`\u81F3${t[1]}\u5C81`:""},Pe=e=>e?e.split(",").map(t=>It(t)).join("/"):"",kt=e=>{if(!e)return"";switch(e){case"-1":return"\u65E0\u9650\u5236";case"1":return"\u7537";case"2":return"\u5973";default:return""}},Pt=e=>({"1":"\u804C\u4E1A\u7B49\u7EA7\u4E00","2":"\u804C\u4E1A\u7B49\u7EA7\u4E8C","3":"\u804C\u4E1A\u7B49\u7EA7\u4E09","4":"\u804C\u4E1A\u7B49\u7EA7\u56DB","5":"\u804C\u4E1A\u7B49\u7EA7\u4E94","6":"\u804C\u4E1A\u7B49\u7EA7\u516D","7":"\u804C\u4E1A\u7B49\u7EA7\u4E03","8":"\u804C\u4E1A\u7B49\u7EA7\u516B","9":"\u804C\u4E1A\u7B49\u7EA7\u4E5D"})[e]||"",Dt=e=>e?e==="-1"?"\u65E0\u9650\u5236":e.split(",").map(n=>Pt(n)).join("\u3001"):"",At=e=>{if(!e)return"";switch(e){case"-1":return"\u65E0\u9650\u5236";case"1":return"\u662F";case"2":return"\u5426";default:return""}};const $t=e=>(De("data-v-e6fc1240"),e=e(),Ae(),e),Bt={class:"page-product-detail"},Ft=["src"],Vt={class:"custom-indicator"},xt={key:1,class:"title"},Lt={class:"text"},Ot={key:0,class:"desc"},bt={key:2,class:"plan"},St=["onClick"],Tt={key:0,class:"basic"},Nt={class:"field"},qt={class:"tab-1"},Mt=["src"],Ut=$t(()=>o("div",{class:"sub-title"},"*\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),jt={class:"tab-1-content"},zt=Y(" \u8BF7\u67E5\u770B "),Ht={key:0,class:"dun-hao"},Qt={class:"footer-button"},Wt=Y("\u7B97\u4FDD\u8D39"),Yt={class:"guarantee-list"},Gt={class:"title"},Jt={class:"content"},Kt=O({setup(e){const t=be(),n=Se(),{productCode:y="CQ75CQ76"}=n.query,I=[{title:"\u4EA7\u54C1\u7279\u8272",slotName:"tab1"},{title:"\u7406\u8D54\u6D41\u7A0B",slotName:"tab2"},{title:"\u5E38\u89C1\u95EE\u9898",slotName:"tab3"}],g=F(0),$=F(!1),u=F(),m=F({}),E=v=>{g.value=v},V=F(1),c=v=>m.value&&m.value[v]&&m.value[v].isDisplay===Me.YES,G=()=>{$.value=!0},S=()=>{var v,P;t.push({path:"/trial",query:we(Ce({},n.query),{productCode:(v=u.value)==null?void 0:v.baseProductCode,insurerCode:(P=u.value)==null?void 0:P.insurerCode,templateId:V.value})})};return Te(()=>{Ct({productCode:y,withInsureInfo:!0}).then(v=>{const{code:P,data:T}=v;P==="10000"&&(u.value=T,We({productCategory:5,venderCode:"everbrightlife"}).then(J=>{J.code==="10000"&&(V.value=J.data.id,Ye({pageCode:"productInfo",templateId:V.value}).then(K=>{if(K.code==="10000"){const R={};K.data.productInsureFactorList.forEach(k=>{R[k.code]=k}),m.value=R}}))}))})}),(v,P)=>{const T=L("van-swipe-item"),J=L("van-swipe"),K=L("van-button"),R=L("ProPageWrap");return s(),a(A,null,[f(R,null,{default:p(()=>{var k,N,q,M,U,j;return[o("div",Bt,[c("picture")?(s(),_(J,{key:0,class:"swipe"},{indicator:p(({active:i,total:r})=>[o("div",Vt,d(i+1)+"/"+d(r),1)]),default:p(()=>{var i,r;return[(s(!0),a(A,null,B(((r=(i=u.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:r.banner)||[],(C,w)=>(s(),_(T,{key:w},{default:p(()=>[o("img",{src:C,class:"swipe-img"},null,8,Ft)]),_:2},1024))),128))]}),_:1})):l("",!0),c("title")?(s(),a("div",xt,[o("div",Lt,d((k=u.value)==null?void 0:k.productFullName),1),c("introduction")?(s(),a("div",Ot,d((N=u.value)==null?void 0:N.showConfigVO.desc),1)):l("",!0)])):l("",!0),f(Ue),(((M=(q=u.value)==null?void 0:q.tenantProductInsureVO)==null?void 0:M.guaranteeList)||[]).length>1?(s(),a("div",bt,[(s(!0),a(A,null,B((j=(U=u.value)==null?void 0:U.tenantProductInsureVO)==null?void 0:j.guaranteeList,(i,r)=>{var C,w;return s(),a("div",{key:r,class:W(["plan-item",`length-${(((w=(C=u.value)==null?void 0:C.tenantProductInsureVO)==null?void 0:w.guaranteeList)||[]).length}`,{active:g.value===r}]),onClick:x=>E(r)},d(i),11,St)}),128))])):l("",!0),c("guaranteeDetail")?(s(),_(X,{key:3,title:"\u4FDD\u969C\u8BE6\u60C5",link:"\u67E5\u770B\u8BE6\u60C5",onLinkClick:G},{default:p(()=>{var i,r,C,w,x,z,H,Q,ae,oe,re,ie,le,ce,de,_e,pe,ve,he,me,fe;return[u.value&&((i=u.value)==null?void 0:i.tenantProductInsureVO)?(s(),a("div",Tt,[(s(!0),a(A,null,B((C=(r=u.value)==null?void 0:r.tenantProductInsureVO)==null?void 0:C.guaranteeList[g.value].titleAndDescVOS,(ge,$e)=>(s(),_(ze,{key:$e,title:ge.title,content:ge.desc},null,8,["title","content"]))),128))])):l("",!0),o("div",Nt,[c("guaranteeAge")?(s(),_(D,{key:0,title:"\u6295\u4FDD\u5E74\u9F84",desc:h(wt)((x=(w=u.value)==null?void 0:w.tenantProductInsureVO)==null?void 0:x.holderAgeLimit)},null,8,["desc"])):l("",!0),c("guaranteeTime")?(s(),_(D,{key:1,title:"\u4FDD\u969C\u671F\u95F4",desc:h(Pe)((H=(z=u.value)==null?void 0:z.tenantProductInsureVO)==null?void 0:H.insurancePeriodValues)},null,8,["desc"])):l("",!0),c("paymentTime")?(s(),_(D,{key:2,title:"\u4EA4\u8D39\u671F\u95F4",desc:h(Pe)((ae=(Q=u.value)==null?void 0:Q.tenantProductInsureVO)==null?void 0:ae.paymentPeriodValues)},null,8,["desc"])):l("",!0),c("paymentMethod")?(s(),_(D,{key:3,title:"\u4EA4\u8D39\u65B9\u5F0F",desc:"\u5E74\u4EA4"})):l("",!0),c("drawTime")?(s(),_(D,{key:4,title:"\u9886\u53D6\u5E74\u9F84",desc:"55/60/55\u5468\u5C81"})):l("",!0),c("drawType")?(s(),_(D,{key:5,title:"\u9886\u53D6\u65B9\u5F0F",desc:"\u5E74\u9886/\u6708\u9886"})):l("",!0),c("sexLimit")?Z((s(),_(D,{key:6,title:"\u6027\u522B\u9650\u5236",desc:h(kt)((re=(oe=u.value)==null?void 0:oe.tenantProductInsureVO)==null?void 0:re.sexLimit)},null,8,["desc"])),[[ee,((le=(ie=u.value)==null?void 0:ie.tenantProductInsureVO)==null?void 0:le.sexLimit)!=="-1"]]):l("",!0),c("socialInsuranceLimit")?Z((s(),_(D,{key:7,title:"\u793E\u4FDD\u9650\u5236",desc:h(At)((de=(ce=u.value)==null?void 0:ce.tenantProductInsureVO)==null?void 0:de.socialInsuranceLimit)},null,8,["desc"])),[[ee,((pe=(_e=u.value)==null?void 0:_e.tenantProductInsureVO)==null?void 0:pe.socialInsuranceLimit)!=="-1"]]):l("",!0),c("occupationType")?Z((s(),_(D,{key:8,title:"\u804C\u4E1A\u7C7B\u522B",desc:h(Dt)((he=(ve=u.value)==null?void 0:ve.tenantProductInsureVO)==null?void 0:he.occupationLimit)},null,8,["desc"])),[[ee,((fe=(me=u.value)==null?void 0:me.tenantProductInsureVO)==null?void 0:fe.occupationLimit)!=="-1"]]):l("",!0)])]}),_:1})):l("",!0),f(Ie,{class:"tabs",list:I,sticky:"",scrollspy:""},{tab1:p(()=>{var i,r;return[o("div",qt,[(s(!0),a(A,null,B(((r=(i=u.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:r.spec)||[],(C,w)=>(s(),a("img",{key:w,src:C,class:"detail-img"},null,8,Mt))),128)),f(X,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:p(()=>[Ut]),default:p(()=>{var C,w;return[o("div",jt,[zt,(s(!0),a(A,null,B(((w=(C=u.value)==null?void 0:C.tenantProductInsureVO)==null?void 0:w.attachmentVOList)||[],(x,z)=>(s(),_(Et,{key:z,class:"file-name",title:`\u300A${x.attachmentName}\u300B`,url:x.attachmentUri},{default:p(()=>{var H,Q;return[z!==(((Q=(H=u.value)==null?void 0:H.tenantProductInsureVO)==null?void 0:Q.attachmentVOList)||[]).length-1?(s(),a("span",Ht,"\u3001")):l("",!0)]}),_:2},1032,["title","url"]))),128))])]}),_:1})])]}),tab2:p(()=>[f(X,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:p(()=>{var i,r;return[f(ht,{list:(r=(i=u.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:r.settlementProcessList},null,8,["list"])]}),_:1})]),tab3:p(()=>[f(X,{title:"\u5E38\u89C1\u95EE\u9898"},{default:p(()=>{var i,r;return[f(rt,{list:(r=(i=u.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:r.questionList},null,8,["list"])]}),_:1})]),_:1}),o("div",Qt,[f(K,{type:"primary",onClick:S},{default:p(()=>[Wt]),_:1})])])]}),_:1}),f(je,{show:$.value,"onUpdate:show":P[0]||(P[0]=k=>$.value=k),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:p(()=>{var k,N,q,M,U,j;return[(((N=(k=u.value)==null?void 0:k.tenantProductInsureVO)==null?void 0:N.guaranteeList)||[]).length>1?(s(),_(Ie,{key:0,list:(((M=(q=u.value)==null?void 0:q.tenantProductInsureVO)==null?void 0:M.guaranteeList)||[]).map((i,r)=>({title:i.guaranteeType,slotName:`guarantee-${r}`})),class:"tab"},null,8,["list"])):l("",!0),o("div",Yt,[(s(!0),a(A,null,B((j=(U=u.value)==null?void 0:U.tenantProductInsureVO)==null?void 0:j.guaranteeList[g.value].titleAndDescVOS,(i,r)=>(s(),a("div",{key:r,class:"guarantee-item"},[o("div",Gt,d(i.title),1),o("div",Jt,d(i.content),1)]))),128))])]}),_:1},8,["show"])],64)}}});var us=b(Kt,[["__scopeId","data-v-e6fc1240"]]);export{us as default};
