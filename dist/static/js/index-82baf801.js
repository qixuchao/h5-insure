var ke=Object.defineProperty,Ae=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var fe=(e,t,n)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ge=(e,t)=>{for(var n in t||(t={}))$e.call(t,n)&&fe(e,n,t[n]);if(me)for(var n of me(t))Ve.call(t,n)&&fe(e,n,t[n]);return e},ye=(e,t)=>Ae(e,Fe(t));import{g as Q,j as u,n as a,z as o,J as _,a5 as ee,E as O,y as G,p as m,L as j,A as r,B as Le,a1 as we,a2 as Ie,F as P,G as k,k as h,C as J,t as d,aj as Oe,Q as be,h as Se,r as U,ab as xe,m as v,H as Y,I as X}from"./vendor-c15a8cf7.js";import{_ as H,s as Te,p as te,b as qe,Y as Ne,t as ze,l as W,u as Ce,v as Me,w as je}from"./index-909e4ad8.js";import{P as Qe}from"./index-924c6adc.js";import{b as He,c as Ue}from"./index-52b60bc0.js";const Ye={class:"com-field-info"},We={class:"title"},Ge={class:"desc"},Je=Q({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(e){return(t,n)=>(u(),a("div",Ye,[o("div",We,_(e.title),1),o("div",Ge,_(e.desc),1)]))}});var T=H(Je,[["__scopeId","data-v-51aa64db"]]);const Ke=e=>(we("data-v-ee7ab86e"),e=e(),Ie(),e),Re={class:"com-question-item"},Xe={class:"question"},Ze=Ke(()=>o("div",{class:"icon"},_("?"),-1)),et={class:"title"},tt=Q({props:{question:{type:String,default:""},answer:{type:String,default:""}},setup(e){const[t,n]=ee(!1),B=O(),A=()=>{n()},g=G(()=>t.value?Te(B.value):0);return(b,s)=>(u(),a("div",Re,[o("div",Xe,[Ze,o("div",et,_(e.question),1),m(te,{name:"down",class:j(["arrow-icon",{show:r(t)}]),onClick:A},null,8,["class"])]),o("div",{ref_key:"answerDom",ref:B,class:"answer",style:Le({height:`${r(g)}px`})},_(e.answer),5)]))}});var ut=H(tt,[["__scopeId","data-v-ee7ab86e"]]);const st={class:"com-question"},nt=Q({props:{list:{type:Array,default:()=>[]}},setup(e){const t=e,[n,B]=ee(!1),A=()=>{B()},g=G(()=>t.list.length<=4||n.value?t.list:t.list.slice(0,4));return(b,s)=>(u(),a("div",st,[(u(!0),a(P,null,k(r(g),(y,F)=>(u(),h(ut,{key:F,question:y.title,answer:y.desc},null,8,["question","answer"]))),128)),e.list.length>4?(u(),a("div",{key:0,class:"show-more",onClick:A},[J(_(r(n)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),m(te,{name:"down",class:j(["icon",{showMore:r(n)}])},null,8,["class"])])):d("",!0)]))}});var at=H(nt,[["__scopeId","data-v-61452bdb"]]);const ot={class:"com-time-line"},rt={class:"left"},it={class:"num"},lt={class:"right"},ct={class:"title"},dt={class:"desc"},_t=Q({props:{list:{type:Array,default:()=>[]}},setup(e){const t=e,[n,B]=ee(!1),A=()=>{B()},g=G(()=>t.list.length<=4||n.value?t.list:t.list.slice(0,4));return(b,s)=>(u(),a("div",ot,[(u(!0),a(P,null,k(r(g),(y,F)=>(u(),a("div",{key:F,class:j(["item",{last:F===r(g).length-1}])},[o("div",rt,[o("div",it,_(F+1),1)]),o("div",lt,[o("div",ct,_(y.title),1),o("div",dt,_(y.desc),1)])],2))),128)),e.list.length>4?(u(),a("div",{key:0,class:"show-more",onClick:A},[J(_(r(n)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),m(te,{name:"down",class:j(["icon",{showMore:r(n)}])},null,8,["class"])])):d("",!0)]))}});var vt=H(_t,[["__scopeId","data-v-5c3058a2"]]);const pt=e=>qe.post("/api/app/insure/product/getProductDetail",e),Z=e=>{const t=e.split("_");return t[0]==="day"?`\u6EE1${t[1]}\u5929`:`${t[1]}\u5468\u5C81`},ht=e=>{if(!e)return"";const t=e.split(",");return t.length===1?Z(t[0]):`${Z(t[0])} ~ ${Z(t[1])}`},mt=e=>{if(!e)return"";if(e==="single")return"\u8DB8\u7F34";const t=e.split("_");return t[0]==="year"?`${t[1]}\u5E74`:t[0]==="month"?`${t[1]}\u6708`:t[0]==="to"?t[1]==="life"?"\u4FDD\u7EC8\u751F":`\u81F3${t[1]}\u5C81`:""},Ee=e=>e?e.split(",").map(t=>mt(t)).join("/"):"",ft=e=>{if(!e)return"";switch(e){case"-1":return"\u65E0\u9650\u5236";case"1":return"\u7537";case"2":return"\u5973";default:return""}},gt=e=>({"1":"\u804C\u4E1A\u7B49\u7EA7\u4E00","2":"\u804C\u4E1A\u7B49\u7EA7\u4E8C","3":"\u804C\u4E1A\u7B49\u7EA7\u4E09","4":"\u804C\u4E1A\u7B49\u7EA7\u56DB","5":"\u804C\u4E1A\u7B49\u7EA7\u4E94","6":"\u804C\u4E1A\u7B49\u7EA7\u516D","7":"\u804C\u4E1A\u7B49\u7EA7\u4E03","8":"\u804C\u4E1A\u7B49\u7EA7\u516B","9":"\u804C\u4E1A\u7B49\u7EA7\u4E5D"})[e]||"",yt=e=>e?e==="-1"?"\u65E0\u9650\u5236":e.split(",").map(n=>gt(n)).join("\u3001"):"",Ct=e=>{if(!e)return"";switch(e){case"-1":return"\u65E0\u9650\u5236";case"1":return"\u662F";case"2":return"\u5426";default:return""}};const Et=e=>(we("data-v-183919a7"),e=e(),Ie(),e),wt={class:"page-product-detail"},It=["src"],Dt={class:"custom-indicator"},Pt={key:1,class:"title"},Bt={class:"text"},kt={key:0,class:"desc"},At={key:2,class:"plan"},Ft=["onClick"],$t={key:0,class:"basic"},Vt={class:"field"},Lt={class:"tab-1"},Ot=["src"],bt=Et(()=>o("div",{class:"sub-title"},"*\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),St={class:"tab-1-content"},xt=J(" \u8BF7\u67E5\u770B "),Tt={key:0,class:"dun-hao"},qt={class:"footer-button"},Nt=J("\u7B97\u4FDD\u8D39"),zt={class:"guarantee-list"},Mt={class:"title"},jt={class:"content"},Qt=Q({setup(e){const t=Oe(),n=be(),{productCode:B="CQ75CQ76"}=n.query,A=O([]),g=O(0),b=O(!1),s=O(),y=O({}),F=c=>{g.value=c},K=O(1),p=c=>y.value&&y.value[c]&&y.value[c].isDisplay===Ne.YES,De=()=>{b.value=!0},R=()=>{var c,C,E;t.push({path:"/trial",query:ye(ge({},n.query),{productCode:(c=s.value)==null?void 0:c.baseProductCode,insurerCode:(C=s.value)==null?void 0:C.insurerCode,templateId:K.value,productCategory:(E=s.value)==null?void 0:E.categoryNo})})},Pe=()=>{window.iseeBiz?R():window.getIseeBiz?window.getIseeBiz().then(c=>{c&&(console.log(`\u6210\u529F\u83B7\u53D6biz:${c}`),R())}).catch(()=>{console.error("\u5343\u91CC\u773C\u63D2\u4EF6\u83B7\u53D6\u5931\u8D25")}):(R(),console.error("\u6CA1\u6709\u8C03\u7528\u5343\u91CC\u773C\u63D2\u4EF6"))},$=G(()=>{var c,C,E,S,x,V,L;return((E=(C=(c=s.value)==null?void 0:c.tenantProductInsureVO)==null?void 0:C.guaranteeList)==null?void 0:E.length)?(x=(S=s.value)==null?void 0:S.tenantProductInsureVO)==null?void 0:x.guaranteeList:[{guaranteeType:"\u5355\u8BA1\u5212",titleAndDescVOS:(L=(V=s.value)==null?void 0:V.tenantProductInsureVO)==null?void 0:L.titleAndDescVOS}]});return Se(()=>{pt({productCode:B,withInsureInfo:!0}).then(c=>{const{code:C,data:E}=c;if(C==="10000"){s.value=E;const{insurerCode:S,categoryNo:x}=E;He({productCategory:x,venderCode:S}).then(V=>{var L;V.code==="10000"&&(K.value=(L=V.data)==null?void 0:L.id,Ue({pageCode:"productInfo",templateId:K.value}).then(f=>{if(f.code==="10000"){const I={};f.data.productInsureFactorList.forEach(i=>{I[i.code]=i}),y.value=I,p("productCharacteristic"),p("productCharacteristic"),p("commonQuestion")}}))})}}),setTimeout(()=>{window.getIseeBiz&&window.getIseeBiz()},1500)}),(c,C)=>{const E=U("van-swipe-item"),S=U("van-swipe"),x=U("van-button"),V=U("ProPageWrap"),L=xe("dompurify-html");return u(),a(P,null,[m(V,null,{default:v(()=>{var f,I;return[o("div",wt,[p("picture")?(u(),h(S,{key:0,class:"swipe"},{indicator:v(({active:i,total:l})=>[o("div",Dt,_(i+1)+"/"+_(l),1)]),default:v(()=>{var i,l;return[(u(!0),a(P,null,k(((l=(i=s.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:l.banner)||[],(w,D)=>(u(),h(E,{key:D},{default:v(()=>[o("img",{src:w,class:"swipe-img"},null,8,It)]),_:2},1024))),128))]}),_:1})):d("",!0),p("title")?(u(),a("div",Pt,[o("div",Bt,_((f=s.value)==null?void 0:f.productFullName),1),p("introduction")?(u(),a("div",kt,_((I=s.value)==null?void 0:I.showConfigVO.desc),1)):d("",!0)])):d("",!0),m(ze),r($).length>1?(u(),a("div",At,[(u(!0),a(P,null,k(r($),(i,l)=>(u(),a("div",{key:l,class:j(["plan-item",`length-${r($).length}`,{active:g.value===l}]),onClick:w=>F(l)},_(i),11,Ft))),128))])):d("",!0),p("guaranteeDetail")?(u(),h(W,{key:3,title:"\u4FDD\u969C\u8BE6\u60C5",link:"\u67E5\u770B\u8BE6\u60C5",onLinkClick:De},{default:v(()=>{var i,l,w,D,q,N,z,M,ue,se,ne,ae,oe,re,ie,le,ce,de,_e,ve,pe;return[s.value&&((i=s.value)==null?void 0:i.tenantProductInsureVO)?(u(),a("div",$t,[(u(!0),a(P,null,k((w=(l=r($))==null?void 0:l[g.value])==null?void 0:w.titleAndDescVOS,(he,Be)=>(u(),h(je,{key:Be,title:he.title,content:he.desc},null,8,["title","content"]))),128))])):d("",!0),o("div",Vt,[p("guaranteeAge")?(u(),h(T,{key:0,title:"\u6295\u4FDD\u5E74\u9F84",desc:r(ht)((q=(D=s.value)==null?void 0:D.tenantProductInsureVO)==null?void 0:q.holderAgeLimit)},null,8,["desc"])):d("",!0),p("guaranteeTime")?(u(),h(T,{key:1,title:"\u4FDD\u969C\u671F\u95F4",desc:r(Ee)((z=(N=s.value)==null?void 0:N.tenantProductInsureVO)==null?void 0:z.insurancePeriodValues)},null,8,["desc"])):d("",!0),p("paymentTime")?(u(),h(T,{key:2,title:"\u4EA4\u8D39\u671F\u95F4",desc:r(Ee)((ue=(M=s.value)==null?void 0:M.tenantProductInsureVO)==null?void 0:ue.paymentPeriodValues)},null,8,["desc"])):d("",!0),p("sexLimit")?Y((u(),h(T,{key:3,title:"\u6027\u522B\u9650\u5236",desc:r(ft)((ne=(se=s.value)==null?void 0:se.tenantProductInsureVO)==null?void 0:ne.sexLimit)},null,8,["desc"])),[[X,((oe=(ae=s.value)==null?void 0:ae.tenantProductInsureVO)==null?void 0:oe.sexLimit)!=="-1"]]):d("",!0),p("socialInsuranceLimit")?Y((u(),h(T,{key:4,title:"\u793E\u4FDD\u9650\u5236",desc:r(Ct)((ie=(re=s.value)==null?void 0:re.tenantProductInsureVO)==null?void 0:ie.socialInsuranceLimit)},null,8,["desc"])),[[X,((ce=(le=s.value)==null?void 0:le.tenantProductInsureVO)==null?void 0:ce.socialInsuranceLimit)!=="-1"]]):d("",!0),p("occupationType")?Y((u(),h(T,{key:5,title:"\u804C\u4E1A\u7C7B\u522B",desc:r(yt)((_e=(de=s.value)==null?void 0:de.tenantProductInsureVO)==null?void 0:_e.occupationLimit)},null,8,["desc"])),[[X,((pe=(ve=s.value)==null?void 0:ve.tenantProductInsureVO)==null?void 0:pe.occupationLimit)!=="-1"]]):d("",!0)])]}),_:1})):d("",!0),m(Ce,{class:"tabs",list:A.value,sticky:"",scrollspy:""},{tab1:v(()=>{var i,l;return[o("div",Lt,[(u(!0),a(P,null,k(((l=(i=s.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:l.spec)||[],(w,D)=>(u(),a("img",{key:D,src:w,class:"detail-img"},null,8,Ot))),128)),m(W,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:v(()=>[bt]),default:v(()=>{var w,D;return[o("div",St,[xt,(u(!0),a(P,null,k(((D=(w=s.value)==null?void 0:w.tenantProductInsureVO)==null?void 0:D.attachmentVOList)||[],(q,N)=>(u(),h(Qe,{key:N,class:"file-name",title:`\u300A${q.attachmentName}\u300B`,url:q.attachmentUri},{default:v(()=>{var z,M;return[N!==(((M=(z=s.value)==null?void 0:z.tenantProductInsureVO)==null?void 0:M.attachmentVOList)||[]).length-1?(u(),a("span",Tt,"\u3001")):d("",!0)]}),_:2},1032,["title","url"]))),128))])]}),_:1})])]}),tab2:v(()=>[m(W,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:v(()=>{var i,l;return[m(vt,{list:(l=(i=s.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:l.settlementProcessList},null,8,["list"])]}),_:1})]),tab3:v(()=>[m(W,{title:"\u5E38\u89C1\u95EE\u9898"},{default:v(()=>{var i,l;return[m(at,{list:(l=(i=s.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:l.questionList},null,8,["list"])]}),_:1})]),_:1},8,["list"]),o("div",qt,[m(x,{type:"primary",onClick:Pe},{default:v(()=>[Nt]),_:1})])])]}),_:1}),m(Me,{show:b.value,"onUpdate:show":C[0]||(C[0]=f=>b.value=f),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:v(()=>[r($).length>1?(u(),h(Ce,{key:0,list:r($).map((f,I)=>({title:f.guaranteeType,slotName:`guarantee-${I}`})),class:"tab"},null,8,["list"])):d("",!0),o("div",zt,[(u(!0),a(P,null,k(r($)[g.value].titleAndDescVOS,(f,I)=>(u(),a("div",{key:I,class:"guarantee-item"},[o("div",Mt,_(f.title),1),Y(o("div",jt,null,512),[[L,f.content]])]))),128))])]),_:1},8,["show"])],64)}}});var Jt=H(Qt,[["__scopeId","data-v-183919a7"]]);export{Jt as default};
