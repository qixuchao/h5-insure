var ut=Object.defineProperty,st=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var nt=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;var qe=(s,a,l)=>a in s?ut(s,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[a]=l,ze=(s,a)=>{for(var l in a||(a={}))nt.call(a,l)&&qe(s,l,a[l]);if(Ne)for(var l of Ne(a))ot.call(a,l)&&qe(s,l,a[l]);return s},Me=(s,a)=>st(s,at(a));import{g as K,j as e,n as i,z as v,J as D,Q as We,E,y as Z,p as I,L as ee,A as t,B as it,a4 as Ge,a5 as Je,F as w,G as A,k as n,C as te,t as o,a9 as lt,O as ct,h as rt,r as q,af as dt,m as h,H as O,I as z}from"./vendor-9d7eb2ed.js";import{_ as R,d as _t,e as Ke,f as vt,h as pt,Y as mt,i as ht,j as yt,a as G,k as Qe,l as ft,m as gt}from"./index-5429c80e.js";import{P as It}from"./index-eeaf4301.js";import{p as Dt}from"./product-c594da8e.js";import{f as Ue,a as J,b as He,c as je,d as Ye}from"./utils-b77f2acb.js";const Ct={class:"com-field-info"},kt={class:"title"},Pt={class:"desc"},Ft=K({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(s){return(a,l)=>(e(),i("div",Ct,[v("div",kt,D(s.title),1),v("div",Pt,D(s.desc),1)]))}});var g=R(Ft,[["__scopeId","data-v-999da452"]]);const Et=s=>(Ge("data-v-5230fe82"),s=s(),Je(),s),wt={class:"com-question-item"},Lt={class:"question"},Vt=Et(()=>v("div",{class:"icon"},D("?"),-1)),Bt={class:"title"},Ot=K({props:{question:{type:String,default:""},answer:{type:String,default:""}},setup(s){const[a,l]=We(!1),b=E(),M=()=>{l()},$=Z(()=>a.value?_t(b.value):0);return(p,x)=>(e(),i("div",wt,[v("div",Lt,[Vt,v("div",Bt,D(s.question),1),I(Ke,{name:"down",class:ee(["arrow-icon",{show:t(a)}]),onClick:M},null,8,["class"])]),v("div",{ref_key:"answerDom",ref:b,class:"answer",style:it({height:`${t($)}px`})},D(s.answer),5)]))}});var At=R(Ot,[["__scopeId","data-v-5230fe82"]]);const bt={class:"com-question"},$t=K({props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[l,b]=We(!1),M=()=>{b()},$=Z(()=>a.list.length<=4||l.value?a.list:a.list.slice(0,4));return(p,x)=>(e(),i("div",bt,[(e(!0),i(w,null,A(t($),(S,u)=>(e(),n(At,{key:u,question:S.title,answer:S.desc},null,8,["question","answer"]))),128)),s.list.length>4?(e(),i("div",{key:0,class:"show-more",onClick:M},[te(D(t(l)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),I(Ke,{name:"down",class:ee(["icon",{showMore:t(l)}])},null,8,["class"])])):o("",!0)]))}});var xt=R($t,[["__scopeId","data-v-3355884a"]]);const St=s=>(Ge("data-v-bd169fe2"),s=s(),Je(),s),Tt={class:"page-product-detail"},Nt=["src"],qt={class:"custom-indicator"},zt={key:1,class:"title"},Mt={class:"text"},Qt={key:0,class:"desc"},Ut={key:2,class:"plan"},Ht={key:0,class:"basic"},jt={key:1,class:"field"},Yt={key:2,class:"field"},Wt={class:"tab-1"},Gt=["src"],Jt=St(()=>v("div",{class:"sub-title"},"*\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),Kt={class:"tab-1-content"},Rt=te(" \u8BF7\u67E5\u770B "),Xt={key:0,class:"dun-hao"},Zt={class:"footer-button"},eu=te("\u7B97\u4FDD\u8D39"),tu={class:"guarantee-list"},uu={class:"title"},su={class:"content"},au=K({setup(s){const a=lt(),l=ct(),{productCode:b="CQ75CQ76",tenantId:M}=l.query,$=E([]),p=E(0),x=E(p.value),S=E(!1),u=E(),j=E({}),Re=y=>{p.value=y,x.value=y},X=E(1),r=y=>j.value&&j.value[y]&&j.value[y].isDisplay===mt.YES,Xe=()=>{S.value=!0},Ze=()=>{var y,f,C;a.push({path:"/trial",query:Me(ze({},l.query),{productCode:(y=u.value)==null?void 0:y.baseProductCode,insurerCode:(f=u.value)==null?void 0:f.insurerCode,templateId:X.value,productCategory:(C=u.value)==null?void 0:C.categoryNo})})},et=()=>{Ze()},_=Z(()=>{var y,f,C,T,N,L,V;return((C=(f=(y=u.value)==null?void 0:y.tenantProductInsureVO)==null?void 0:f.guaranteeList)==null?void 0:C.length)?(N=(T=u.value)==null?void 0:T.tenantProductInsureVO)==null?void 0:N.guaranteeList:[{guaranteeType:"\u5355\u8BA1\u5212",titleAndDescVOS:(V=(L=u.value)==null?void 0:L.tenantProductInsureVO)==null?void 0:V.titleAndDescVOS}]});return rt(()=>{Dt({productCode:b,withInsureInfo:!0,tenantId:M}).then(y=>{const{code:f,data:C}=y;if(f==="10000"){u.value=C;const{insurerCode:T,categoryNo:N}=C;vt({productCategory:N,venderCode:T}).then(L=>{var V;L.code==="10000"&&(X.value=(V=L.data)==null?void 0:V.id,pt({pageCode:"productInfo",templateId:X.value}).then(Y=>{if(Y.code==="10000"){const W={};Y.data.productInsureFactorList.forEach(P=>{W[P.code]=P}),j.value=W;const m=[];r("productCharacteristic")&&m.push({title:"\u4EA7\u54C1\u7279\u8272",slotName:"tab1"}),r("productCharacteristic")&&m.push({title:"\u7406\u8D54\u6D41\u7A0B",slotName:"tab2"}),r("commonQuestion")&&m.push({title:"\u5E38\u89C1\u95EE\u9898",slotName:"tab3"}),$.value=m}}))})}}),setTimeout(()=>{window.getIseeBiz&&window.getIseeBiz()},1500)}),(y,f)=>{const C=q("van-swipe-item"),T=q("van-swipe"),N=q("ProTabButton"),L=q("ProPDFviewer"),V=q("van-button"),Y=q("ProPageWrap"),W=dt("dompurify-html");return e(),i(w,null,[I(Y,null,{default:h(()=>{var m,P;return[v("div",Tt,[r("picture")?(e(),n(T,{key:0,class:"swipe"},{indicator:h(({active:d,total:c})=>[v("div",qt,D(d+1)+"/"+D(c),1)]),default:h(()=>{var d,c;return[(e(!0),i(w,null,A(((c=(d=u.value)==null?void 0:d.tenantProductInsureVO)==null?void 0:c.banner)||[],(k,F)=>(e(),n(C,{key:F},{default:h(()=>[v("img",{src:k,class:"swipe-img"},null,8,Nt)]),_:2},1024))),128))]}),_:1})):o("",!0),r("title")?(e(),i("div",zt,[v("div",Mt,D((m=u.value)==null?void 0:m.productFullName),1),r("introduction")?(e(),i("div",Qt,D((P=u.value)==null?void 0:P.showConfigVO.desc),1)):o("",!0)])):o("",!0),I(ht),t(_).length>1?(e(),i("div",Ut,[(e(!0),i(w,null,A(t(_),(d,c)=>(e(),n(N,{key:c,title:d.guaranteeType,active:p.value===c,class:ee(["plan-item",`length-${t(_).length}`]),onClick:k=>Re(c)},null,8,["title","active","class","onClick"]))),128))])):o("",!0),r("guaranteeDetail")?(e(),n(G,{key:3,title:"\u4FDD\u969C\u8BE6\u60C5",link:"\u67E5\u770B\u8BE6\u60C5",onLinkClick:Xe},{default:h(()=>{var d,c,k,F,B,Q,U,H,ue,se,ae,ne,oe,ie,le,ce,re,de,_e,ve,pe,me,he,ye,fe,ge,Ie,De,Ce,ke,Pe,Fe,Ee,we,Le,Ve,Be,Oe,Ae,be,$e,xe,Se;return[u.value&&((d=u.value)==null?void 0:d.tenantProductInsureVO)?(e(),i("div",Ht,[(e(!0),i(w,null,A((k=(c=t(_))==null?void 0:c[p.value])==null?void 0:k.titleAndDescVOS,(Te,tt)=>(e(),n(yt,{key:tt,title:Te.title,content:Te.desc,border:!1},null,8,["title","content"]))),128))])):o("",!0),t(_).length>1?(e(),i("div",jt,[r("guaranteeAge")?(e(),n(g,{key:0,title:"\u6295\u4FDD\u5E74\u9F84",desc:t(Ue)((B=(F=t(_))==null?void 0:F[p.value])==null?void 0:B.holderAgeLimit)},null,8,["desc"])):o("",!0),r("guaranteeTime")?(e(),n(g,{key:1,title:"\u4FDD\u969C\u671F\u95F4",desc:t(J)((U=(Q=t(_))==null?void 0:Q[p.value])==null?void 0:U.insurancePeriodValues)},null,8,["desc"])):o("",!0),r("paymentTime")?(e(),n(g,{key:2,title:"\u4EA4\u8D39\u671F\u95F4",desc:t(J)((ue=(H=t(_))==null?void 0:H[p.value])==null?void 0:ue.paymentPeriodValues)},null,8,["desc"])):o("",!0),r("sexLimit")?O((e(),n(g,{key:3,title:"\u6027\u522B\u9650\u5236",desc:`\u4EC5\u9650${t(He)((ae=(se=t(_))==null?void 0:se[p.value])==null?void 0:ae.sexLimit)}\u6027\u6295\u4FDD`},null,8,["desc"])),[[z,((oe=(ne=t(_))==null?void 0:ne[p.value])==null?void 0:oe.sexLimit)!=="-1"]]):o("",!0),r("socialInsuranceLimit")?O((e(),n(g,{key:4,title:"\u793E\u4FDD\u9650\u5236",desc:`\u4EC5\u9650${t(je)((le=(ie=t(_))==null?void 0:ie[p.value])==null?void 0:le.socialInsuranceLimit)}\u793E\u4FDD\u4EBA\u7FA4\u6709\u6295\u4FDD`},null,8,["desc"])),[[z,((re=(ce=t(_))==null?void 0:ce[p.value])==null?void 0:re.socialInsuranceLimit)!=="-1"]]):o("",!0),r("occupationType")?O((e(),n(g,{key:5,title:"\u804C\u4E1A\u7C7B\u522B",desc:t(Ye)((_e=(de=t(_))==null?void 0:de[p.value])==null?void 0:_e.occupationLimit)},null,8,["desc"])),[[z,((pe=(ve=t(_))==null?void 0:ve[p.value])==null?void 0:pe.occupationLimit)!=="-1"]]):o("",!0)])):(e(),i("div",Yt,[r("guaranteeAge")?(e(),n(g,{key:0,title:"\u6295\u4FDD\u5E74\u9F84",desc:t(Ue)((he=(me=u.value)==null?void 0:me.tenantProductInsureVO)==null?void 0:he.holderAgeLimit)},null,8,["desc"])):o("",!0),r("guaranteeTime")?(e(),n(g,{key:1,title:"\u4FDD\u969C\u671F\u95F4",desc:t(J)((fe=(ye=u.value)==null?void 0:ye.tenantProductInsureVO)==null?void 0:fe.insurancePeriodValues)},null,8,["desc"])):o("",!0),r("paymentTime")?(e(),n(g,{key:2,title:"\u4EA4\u8D39\u671F\u95F4",desc:t(J)((Ie=(ge=u.value)==null?void 0:ge.tenantProductInsureVO)==null?void 0:Ie.paymentPeriodValues)},null,8,["desc"])):o("",!0),r("sexLimit")?O((e(),n(g,{key:3,title:"\u6027\u522B\u9650\u5236",desc:((Ce=(De=u.value)==null?void 0:De.tenantProductInsureVO)==null?void 0:Ce.sexLimit)&&`\u4EC5\u9650${t(He)((Pe=(ke=u.value)==null?void 0:ke.tenantProductInsureVO)==null?void 0:Pe.sexLimit)}\u6027\u6295\u4FDD`},null,8,["desc"])),[[z,((Ee=(Fe=u.value)==null?void 0:Fe.tenantProductInsureVO)==null?void 0:Ee.sexLimit)!=="-1"]]):o("",!0),r("socialInsuranceLimit")?O((e(),n(g,{key:4,title:"\u793E\u4FDD\u9650\u5236",desc:((Le=(we=u.value)==null?void 0:we.tenantProductInsureVO)==null?void 0:Le.socialInsuranceLimit)&&`\u4EC5\u9650${t(je)((Be=(Ve=u.value)==null?void 0:Ve.tenantProductInsureVO)==null?void 0:Be.socialInsuranceLimit)}\u793E\u4FDD\u4EBA\u7FA4\u6295\u4FDD`},null,8,["desc"])),[[z,((Ae=(Oe=u.value)==null?void 0:Oe.tenantProductInsureVO)==null?void 0:Ae.socialInsuranceLimit)!=="-1"]]):o("",!0),r("occupationType")?O((e(),n(g,{key:5,title:"\u804C\u4E1A\u7C7B\u522B",desc:t(Ye)(($e=(be=u.value)==null?void 0:be.tenantProductInsureVO)==null?void 0:$e.occupationLimit)},null,8,["desc"])),[[z,((Se=(xe=u.value)==null?void 0:xe.tenantProductInsureVO)==null?void 0:Se.occupationLimit)!=="-1"]]):o("",!0)]))]}),_:1})):o("",!0),I(Qe,{class:"tabs",list:$.value,sticky:"",scrollspy:""},{tab1:h(()=>{var d,c;return[v("div",Wt,[(e(!0),i(w,null,A(((c=(d=u.value)==null?void 0:d.tenantProductInsureVO)==null?void 0:c.spec)||[],(k,F)=>(e(),i("img",{key:F,src:k,class:"detail-img"},null,8,Gt))),128)),I(G,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:h(()=>[Jt]),default:h(()=>{var k,F;return[v("div",Kt,[Rt,(e(!0),i(w,null,A(((F=(k=u.value)==null?void 0:k.tenantProductInsureVO)==null?void 0:F.attachmentVOList)||[],(B,Q)=>(e(),n(L,{key:Q,class:"file-name",title:`\u300A${B.attachmentName}\u300B`,content:B.attachmentUri,type:t(ft)(B.attachmentUri,B.attachmentType)},{default:h(()=>{var U,H;return[Q!==(((H=(U=u.value)==null?void 0:U.tenantProductInsureVO)==null?void 0:H.attachmentVOList)||[]).length-1?(e(),i("span",Xt,"\u3001")):o("",!0)]}),_:2},1032,["title","content","type"]))),128))])]}),_:1})])]}),tab2:h(()=>[I(G,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:h(()=>{var d,c;return[I(It,{list:(c=(d=u.value)==null?void 0:d.tenantProductInsureVO)==null?void 0:c.settlementProcessList},null,8,["list"])]}),_:1})]),tab3:h(()=>[I(G,{title:"\u5E38\u89C1\u95EE\u9898"},{default:h(()=>{var d,c;return[I(xt,{list:(c=(d=u.value)==null?void 0:d.tenantProductInsureVO)==null?void 0:c.questionList},null,8,["list"])]}),_:1})]),_:1},8,["list"]),v("div",Zt,[I(V,{type:"primary",onClick:et},{default:h(()=>[eu]),_:1})])])]}),_:1}),(e(),n(gt,{key:p.value,show:S.value,"onUpdate:show":f[1]||(f[1]=m=>S.value=m),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:h(()=>[t(_).length>1?(e(),n(Qe,{key:0,active:x.value,"onUpdate:active":f[0]||(f[0]=m=>x.value=m),list:t(_).map((m,P)=>({title:m.guaranteeType,slotName:`guarantee-${P}`})),class:"tab"},null,8,["active","list"])):o("",!0),v("div",tu,[(e(!0),i(w,null,A(t(_)[x.value].titleAndDescVOS,(m,P)=>(e(),i("div",{key:P,class:"guarantee-item"},[v("div",uu,D(m.title),1),O(v("div",su,null,512),[[W,m.content]])]))),128))])]),_:1},8,["show"]))],64)}}});var du=R(au,[["__scopeId","data-v-bd169fe2"]]);export{du as default};
