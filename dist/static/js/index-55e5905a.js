var be=Object.defineProperty,Se=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var Ee=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var ye=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ie=(e,t)=>{for(var n in t||(t={}))Te.call(t,n)&&ye(e,n,t[n]);if(Ee)for(var n of Ee(t))Ne.call(t,n)&&ye(e,n,t[n]);return e},De=(e,t)=>Se(e,xe(t));import{g as W,j as u,n as o,z as l,J as g,Q as Be,E as w,y as Z,p as h,L as ee,A as r,B as qe,a4 as Ae,a5 as ke,F as P,G as V,k as v,C as te,t as p,a9 as ze,O as je,h as Me,r as T,af as Qe,m as _,H,I as R}from"./vendor-9d7eb2ed.js";import{_ as G,d as Ue,e as Fe,f as He,h as Ye,Y as We,i as Ge,j as Je,a as Y,k as we,l as Ke,m as Re}from"./index-fcab4b6a.js";import{P as Xe}from"./index-9a94e066.js";import{p as Ze}from"./product-9f2dd695.js";const et={class:"com-field-info"},tt={class:"title"},ut={class:"desc"},st=W({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(e){return(t,n)=>(u(),o("div",et,[l("div",tt,g(e.title),1),l("div",ut,g(e.desc),1)]))}});var N=G(st,[["__scopeId","data-v-999da452"]]);const nt=e=>(Ae("data-v-5230fe82"),e=e(),ke(),e),at={class:"com-question-item"},ot={class:"question"},rt=nt(()=>l("div",{class:"icon"},g("?"),-1)),it={class:"title"},lt=W({props:{question:{type:String,default:""},answer:{type:String,default:""}},setup(e){const[t,n]=Be(!1),O=w(),L=()=>{n()},y=Z(()=>t.value?Ue(O.value):0);return($,q)=>(u(),o("div",at,[l("div",ot,[rt,l("div",it,g(e.question),1),h(Fe,{name:"down",class:ee(["arrow-icon",{show:r(t)}]),onClick:L},null,8,["class"])]),l("div",{ref_key:"answerDom",ref:O,class:"answer",style:qe({height:`${r(y)}px`})},g(e.answer),5)]))}});var ct=G(lt,[["__scopeId","data-v-5230fe82"]]);const dt={class:"com-question"},_t=W({props:{list:{type:Array,default:()=>[]}},setup(e){const t=e,[n,O]=Be(!1),L=()=>{O()},y=Z(()=>t.list.length<=4||n.value?t.list:t.list.slice(0,4));return($,q)=>(u(),o("div",dt,[(u(!0),o(P,null,V(r(y),(s,b)=>(u(),v(ct,{key:b,question:s.title,answer:s.desc},null,8,["question","answer"]))),128)),e.list.length>4?(u(),o("div",{key:0,class:"show-more",onClick:L},[te(g(r(n)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),h(Fe,{name:"down",class:ee(["icon",{showMore:r(n)}])},null,8,["class"])])):p("",!0)]))}});var vt=G(_t,[["__scopeId","data-v-3355884a"]]);const X=e=>{const t=e.split("_");return t[0]==="day"?`\u6EE1${t[1]}\u5929`:`${t[1]}\u5468\u5C81`},pt=e=>{if(!e)return"";const t=e.split(",");return t.length===1?X(t[0]):`${X(t[0])} ~ ${X(t[1])}`},mt=e=>{if(!e)return"";if(e==="single")return"\u8DB8\u7F34";const t=e.split("_");return t[0]==="year"?`${t[1]}\u5E74`:t[0]==="month"?`${t[1]}\u6708`:t[0]==="to"?t[1]==="life"?"\u4FDD\u7EC8\u8EAB":`\u81F3${t[1]}\u5C81`:""},Pe=e=>e?e.split(",").map(t=>mt(t)).join("/"):"",ft=e=>{if(!e)return"";switch(e){case"-1":return"\u65E0\u9650\u5236";case"1":return"\u7537";case"2":return"\u5973";default:return""}},ht=e=>({"1":"\u804C\u4E1A\u7B49\u7EA7\u4E00","2":"\u804C\u4E1A\u7B49\u7EA7\u4E8C","3":"\u804C\u4E1A\u7B49\u7EA7\u4E09","4":"\u804C\u4E1A\u7B49\u7EA7\u56DB","5":"\u804C\u4E1A\u7B49\u7EA7\u4E94","6":"\u804C\u4E1A\u7B49\u7EA7\u516D","7":"\u804C\u4E1A\u7B49\u7EA7\u4E03","8":"\u804C\u4E1A\u7B49\u7EA7\u516B","9":"\u804C\u4E1A\u7B49\u7EA7\u4E5D"})[e]||"",gt=e=>e?e==="-1"?"\u65E0\u9650\u5236":e.split(",").map(n=>ht(n)).join("\u3001"):"",Ct=e=>{if(!e)return"";switch(e){case"-1":return"\u65E0\u9650\u5236";case"1":return"\u6709";case"2":return"\u65E0";default:return""}};const Et=e=>(Ae("data-v-da9b03de"),e=e(),ke(),e),yt={class:"page-product-detail"},It=["src"],Dt={class:"custom-indicator"},wt={key:1,class:"title"},Pt={class:"text"},Bt={key:0,class:"desc"},At={key:2,class:"plan"},kt={key:0,class:"basic"},Ft={class:"field"},Vt={class:"tab-1"},Ot=["src"],Lt=Et(()=>l("div",{class:"sub-title"},"*\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),$t={class:"tab-1-content"},bt=te(" \u8BF7\u67E5\u770B "),St={key:0,class:"dun-hao"},xt={class:"footer-button"},Tt=te("\u7B97\u4FDD\u8D39"),Nt={class:"guarantee-list"},qt={class:"title"},zt={class:"content"},jt=W({setup(e){const t=ze(),n=je(),{productCode:O="CQ75CQ76"}=n.query,L=w([]),y=w(0),$=w(y.value),q=w(!1),s=w(),b=w({}),Ve=c=>{y.value=c,$.value=c},J=w(1),m=c=>b.value&&b.value[c]&&b.value[c].isDisplay===We.YES,Oe=()=>{q.value=!0},K=()=>{var c,f,C;t.push({path:"/trial",query:De(Ie({},n.query),{productCode:(c=s.value)==null?void 0:c.baseProductCode,insurerCode:(f=s.value)==null?void 0:f.insurerCode,templateId:J.value,productCategory:(C=s.value)==null?void 0:C.categoryNo})})},Le=()=>{window.iseeBiz?K():window.getIseeBiz?window.getIseeBiz().then(c=>{c&&(console.log(`\u6210\u529F\u83B7\u53D6biz:${c}`),K())}).catch(()=>{console.error("\u5343\u91CC\u773C\u63D2\u4EF6\u83B7\u53D6\u5931\u8D25")}):(K(),console.error("\u6CA1\u6709\u8C03\u7528\u5343\u91CC\u773C\u63D2\u4EF6"))},B=Z(()=>{var c,f,C,S,x,A,k;return((C=(f=(c=s.value)==null?void 0:c.tenantProductInsureVO)==null?void 0:f.guaranteeList)==null?void 0:C.length)?(x=(S=s.value)==null?void 0:S.tenantProductInsureVO)==null?void 0:x.guaranteeList:[{guaranteeType:"\u5355\u8BA1\u5212",titleAndDescVOS:(k=(A=s.value)==null?void 0:A.tenantProductInsureVO)==null?void 0:k.titleAndDescVOS}]});return Me(()=>{Ze({productCode:O,withInsureInfo:!0}).then(c=>{const{code:f,data:C}=c;if(f==="10000"){s.value=C;const{insurerCode:S,categoryNo:x}=C;He({productCategory:x,venderCode:S}).then(A=>{var k;A.code==="10000"&&(J.value=(k=A.data)==null?void 0:k.id,Ye({pageCode:"productInfo",templateId:J.value}).then(Q=>{if(Q.code==="10000"){const U={};Q.data.productInsureFactorList.forEach(I=>{U[I.code]=I}),b.value=U;const d=[];m("productCharacteristic")&&d.push({title:"\u4EA7\u54C1\u7279\u8272",slotName:"tab1"}),m("productCharacteristic")&&d.push({title:"\u7406\u8D54\u6D41\u7A0B",slotName:"tab2"}),m("commonQuestion")&&d.push({title:"\u5E38\u89C1\u95EE\u9898",slotName:"tab3"}),L.value=d}}))})}}),setTimeout(()=>{window.getIseeBiz&&window.getIseeBiz()},1500)}),(c,f)=>{const C=T("van-swipe-item"),S=T("van-swipe"),x=T("ProTabButton"),A=T("ProPDFviewer"),k=T("van-button"),Q=T("ProPageWrap"),U=Qe("dompurify-html");return u(),o(P,null,[h(Q,null,{default:_(()=>{var d,I;return[l("div",yt,[m("picture")?(u(),v(S,{key:0,class:"swipe"},{indicator:_(({active:i,total:a})=>[l("div",Dt,g(i+1)+"/"+g(a),1)]),default:_(()=>{var i,a;return[(u(!0),o(P,null,V(((a=(i=s.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:a.banner)||[],(E,D)=>(u(),v(C,{key:D},{default:_(()=>[l("img",{src:E,class:"swipe-img"},null,8,It)]),_:2},1024))),128))]}),_:1})):p("",!0),m("title")?(u(),o("div",wt,[l("div",Pt,g((d=s.value)==null?void 0:d.productFullName),1),m("introduction")?(u(),o("div",Bt,g((I=s.value)==null?void 0:I.showConfigVO.desc),1)):p("",!0)])):p("",!0),h(Ge),r(B).length>1?(u(),o("div",At,[(u(!0),o(P,null,V(r(B),(i,a)=>(u(),v(x,{key:a,title:i.guaranteeType,active:y.value===a,class:ee(["plan-item",`length-${r(B).length}`]),onClick:E=>Ve(a)},null,8,["title","active","class","onClick"]))),128))])):p("",!0),m("guaranteeDetail")?(u(),v(Y,{key:3,title:"\u4FDD\u969C\u8BE6\u60C5",link:"\u67E5\u770B\u8BE6\u60C5",onLinkClick:Oe},{default:_(()=>{var i,a,E,D,F,z,j,M,ue,se,ne,ae,oe,re,ie,le,ce,de,_e,ve,pe,me,fe,he,ge;return[s.value&&((i=s.value)==null?void 0:i.tenantProductInsureVO)?(u(),o("div",kt,[(u(!0),o(P,null,V((E=(a=r(B))==null?void 0:a[y.value])==null?void 0:E.titleAndDescVOS,(Ce,$e)=>(u(),v(Je,{key:$e,title:Ce.title,content:Ce.desc,border:!1},null,8,["title","content"]))),128))])):p("",!0),l("div",Ft,[m("guaranteeAge")?(u(),v(N,{key:0,title:"\u6295\u4FDD\u5E74\u9F84",desc:r(pt)((F=(D=s.value)==null?void 0:D.tenantProductInsureVO)==null?void 0:F.holderAgeLimit)},null,8,["desc"])):p("",!0),m("guaranteeTime")?(u(),v(N,{key:1,title:"\u4FDD\u969C\u671F\u95F4",desc:r(Pe)((j=(z=s.value)==null?void 0:z.tenantProductInsureVO)==null?void 0:j.insurancePeriodValues)},null,8,["desc"])):p("",!0),m("paymentTime")?(u(),v(N,{key:2,title:"\u4EA4\u8D39\u671F\u95F4",desc:r(Pe)((ue=(M=s.value)==null?void 0:M.tenantProductInsureVO)==null?void 0:ue.paymentPeriodValues)},null,8,["desc"])):p("",!0),m("sexLimit")?H((u(),v(N,{key:3,title:"\u6027\u522B\u9650\u5236",desc:((ne=(se=s.value)==null?void 0:se.tenantProductInsureVO)==null?void 0:ne.sexLimit)&&`\u4EC5\u9650${r(ft)((oe=(ae=s.value)==null?void 0:ae.tenantProductInsureVO)==null?void 0:oe.sexLimit)}\u6027\u6295\u4FDD`},null,8,["desc"])),[[R,((ie=(re=s.value)==null?void 0:re.tenantProductInsureVO)==null?void 0:ie.sexLimit)!=="-1"]]):p("",!0),m("socialInsuranceLimit")?H((u(),v(N,{key:4,title:"\u793E\u4FDD\u9650\u5236",desc:((ce=(le=s.value)==null?void 0:le.tenantProductInsureVO)==null?void 0:ce.socialInsuranceLimit)&&`\u4EC5\u9650${r(Ct)((_e=(de=s.value)==null?void 0:de.tenantProductInsureVO)==null?void 0:_e.socialInsuranceLimit)}\u793E\u4FDD\u4EBA\u7FA4\u6709\u6295\u4FDD`},null,8,["desc"])),[[R,((pe=(ve=s.value)==null?void 0:ve.tenantProductInsureVO)==null?void 0:pe.socialInsuranceLimit)!=="-1"]]):p("",!0),m("occupationType")?H((u(),v(N,{key:5,title:"\u804C\u4E1A\u7C7B\u522B",desc:r(gt)((fe=(me=s.value)==null?void 0:me.tenantProductInsureVO)==null?void 0:fe.occupationLimit)},null,8,["desc"])),[[R,((ge=(he=s.value)==null?void 0:he.tenantProductInsureVO)==null?void 0:ge.occupationLimit)!=="-1"]]):p("",!0)])]}),_:1})):p("",!0),h(we,{class:"tabs",list:L.value,sticky:"",scrollspy:""},{tab1:_(()=>{var i,a;return[l("div",Vt,[(u(!0),o(P,null,V(((a=(i=s.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:a.spec)||[],(E,D)=>(u(),o("img",{key:D,src:E,class:"detail-img"},null,8,Ot))),128)),h(Y,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:_(()=>[Lt]),default:_(()=>{var E,D;return[l("div",$t,[bt,(u(!0),o(P,null,V(((D=(E=s.value)==null?void 0:E.tenantProductInsureVO)==null?void 0:D.attachmentVOList)||[],(F,z)=>(u(),v(A,{key:z,class:"file-name",title:`\u300A${F.attachmentName}\u300B`,content:F.attachmentUri,type:r(Ke)(F.attachmentUri,F.attachmentType)},{default:_(()=>{var j,M;return[z!==(((M=(j=s.value)==null?void 0:j.tenantProductInsureVO)==null?void 0:M.attachmentVOList)||[]).length-1?(u(),o("span",St,"\u3001")):p("",!0)]}),_:2},1032,["title","content","type"]))),128))])]}),_:1})])]}),tab2:_(()=>[h(Y,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:_(()=>{var i,a;return[h(Xe,{list:(a=(i=s.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:a.settlementProcessList},null,8,["list"])]}),_:1})]),tab3:_(()=>[h(Y,{title:"\u5E38\u89C1\u95EE\u9898"},{default:_(()=>{var i,a;return[h(vt,{list:(a=(i=s.value)==null?void 0:i.tenantProductInsureVO)==null?void 0:a.questionList},null,8,["list"])]}),_:1})]),_:1},8,["list"]),l("div",xt,[h(k,{type:"primary",onClick:Le},{default:_(()=>[Tt]),_:1})])])]}),_:1}),(u(),v(Re,{key:y.value,show:q.value,"onUpdate:show":f[1]||(f[1]=d=>q.value=d),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:_(()=>[r(B).length>1?(u(),v(we,{key:0,active:$.value,"onUpdate:active":f[0]||(f[0]=d=>$.value=d),list:r(B).map((d,I)=>({title:d.guaranteeType,slotName:`guarantee-${I}`})),class:"tab"},null,8,["active","list"])):p("",!0),l("div",Nt,[(u(!0),o(P,null,V(r(B)[$.value].titleAndDescVOS,(d,I)=>(u(),o("div",{key:I,class:"guarantee-item"},[l("div",qt,g(d.title),1),H(l("div",zt,null,512),[[U,d.content]])]))),128))])]),_:1},8,["show"]))],64)}}});var Wt=G(jt,[["__scopeId","data-v-da9b03de"]]);export{Wt as default};
