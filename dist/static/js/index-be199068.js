var Re=Object.defineProperty,qe=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var ve=(a,u,o)=>u in a?Re(a,u,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[u]=o,L=(a,u)=>{for(var o in u||(u={}))Ye.call(u,o)&&ve(a,o,u[o]);if(_e)for(var o of _e(u))Ke.call(u,o)&&ve(a,o,u[o]);return a},M=(a,u)=>qe(a,$e(u));import{g as Q,Q as Ee,E as B,y as re,j as h,n as V,z as d,J as O,p as r,L as Ce,A as t,B as ze,a4 as ue,a5 as ie,F as U,G as Y,k as K,C as z,t as G,M as Ve,_ as ne,r as A,m as b,a9 as We,O as Je,h as je,af as Ge,H as Qe,T as Xe,l as Ze}from"./vendor-667a94d7.js";import{_ as X,u as et,q as Pe,a2 as he,x as oe,l as j,y as De,G as tt,z as ot,Q as Ie,A as at,a3 as be}from"./index-dea51c7e.js";import{m as lt,P as nt}from"./modal-bg-d2c0411f.js";import{P as st}from"./index-b8a4055f.js";import{p as ge,i as rt,a as ut,s as it,u as dt,b as ct}from"./trial-8a3a4846.js";import{p as mt}from"./product-3bf586c8.js";import{a as ae}from"./order-b675ac95.js";import{a as se,S as Fe,R as ft,f as le}from"./infoCollection-242da9b6.js";import{A as pt}from"./bankCard-b0679059.js";import{g as _t,l as vt,b as ye,t as ht,a as Dt}from"./logo-5f850c58.js";import"./trial-524ba1cc.js";const It=a=>(ue("data-v-47f4f4ca"),a=a(),ie(),a),bt={class:"com-question-item"},gt={class:"question"},Ft=It(()=>d("div",{class:"icon"},O("?"),-1)),yt={class:"title"},wt=Q({props:{question:{type:String,default:""},answer:{type:String,default:""}},setup(a){const[u,o]=Ee(!1),E=B(),e=()=>{o()},S=re(()=>u.value?et(E.value):0);return(H,C)=>(h(),V("div",bt,[d("div",gt,[Ft,d("div",yt,O(a.question),1),r(Pe,{name:"down",class:Ce(["arrow-icon",{show:t(u)}]),onClick:e},null,8,["class"])]),d("div",{ref_key:"answerDom",ref:E,class:"answer",style:ze({height:`${t(S)}px`})},O(a.answer),5)]))}});var Et=X(wt,[["__scopeId","data-v-47f4f4ca"]]);const Ct={class:"com-question"},Vt=Q({props:{list:{type:Array,default:()=>[]}},setup(a){const u=a,[o,E]=Ee(!1),e=()=>{E()},S=re(()=>u.list.length<=4||o.value?u.list:u.list.slice(0,4));return(H,C)=>(h(),V("div",Ct,[(h(!0),V(U,null,Y(t(S),(l,g)=>(h(),K(Et,{key:g,question:l.title,answer:l.desc},null,8,["question","answer"]))),128)),a.list.length>4?(h(),V("div",{key:0,class:"show-more",onClick:e},[z(O(t(o)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),r(Pe,{name:"down",class:Ce(["icon",{showMore:t(o)}])},null,8,["class"])])):G("",!0)]))}});var Pt=X(Vt,[["__scopeId","data-v-40dd0994"]]);const de=a=>(ue("data-v-7dff4b7c"),a=a(),ie(),a),Bt=de(()=>d("div",{class:"title"},"\u6295\u4FDD\u4EBA",-1)),Tt=de(()=>d("div",{class:"title"},"\u4E3A\u8C01\u6295\u4FDD",-1)),Ot=de(()=>d("div",{class:"title"},"\u4FDD\u8D39\u652F\u4ED8",-1)),St=Q({props:{disable:{type:Boolean,default:!1},holderDisable:{type:Boolean,default:!1},paymentMethodDisable:{type:Boolean,default:!1},premium:{default:0},formInfo:{default:()=>({})}},setup(a,{expose:u}){const o=a,E=B({}),e=Ve({insureDisable:!0,formInfo:o.formInfo}),S=()=>new Promise((C,l)=>{E==null||E.value.validate().then(()=>{C("")},()=>{l()})}),H=()=>{o.disable||(e.formInfo.renewalDK=!e.formInfo.renewalDK)};return ne(()=>e.formInfo.insured.relationToHolder,(C,l)=>{o.disable||C!==l&&(C.toString()===se.SELF?(e.formInfo.insured={certNo:e.formInfo.holder.certNo,name:e.formInfo.holder.name,socialFlag:e.formInfo.holder.socialFlag,relationToHolder:C},e.insureDisable=!0):(e.formInfo.insured={certNo:"",name:"",socialFlag:1,relationToHolder:C},e.insureDisable=!1))}),ne(()=>e.formInfo.holder,()=>{e.formInfo.insured.relationToHolder===se.SELF&&Object.assign(e.formInfo.insured,e.formInfo.holder)},{deep:!0,immediate:!0}),u({validateForm:S}),(C,l)=>{const g=A("ProField"),k=A("ProRadioButton"),R=A("ProPicker"),q=A("ProTabButton"),Z=A("ProForm");return h(),K(Z,{ref_key:"formRef",ref:E},{default:b(()=>[d("div",null,[Bt,r(g,{modelValue:t(e).formInfo.holder.name,"onUpdate:modelValue":l[0]||(l[0]=n=>t(e).formInfo.holder.name=n),label:"\u59D3\u540D",name:"name",required:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D","is-view":o.holderDisable||o.disable},null,8,["modelValue","is-view"]),r(g,{modelValue:t(e).formInfo.holder.certNo,"onUpdate:modelValue":l[1]||(l[1]=n=>t(e).formInfo.holder.certNo=n),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7","validate-type":[t(he).ID_CARD],"is-view":o.holderDisable||o.disable},null,8,["modelValue","validate-type","is-view"]),r(g,{modelValue:t(e).formInfo.holder.mobile,"onUpdate:modelValue":l[2]||(l[2]=n=>t(e).formInfo.holder.mobile=n),label:"\u624B\u673A\u53F7",name:"mobile",required:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7","is-view":o.holderDisable||o.disable},null,8,["modelValue","is-view"]),r(g,{modelValue:t(e).formInfo.holder.socialFlag,"onUpdate:modelValue":l[4]||(l[4]=n=>t(e).formInfo.holder.socialFlag=n),label:"\u6709\u65E0\u793E\u4FDD",name:"socialFlag",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:b(()=>[r(k,{modelValue:t(e).formInfo.holder.socialFlag,"onUpdate:modelValue":l[3]||(l[3]=n=>t(e).formInfo.holder.socialFlag=n),disabled:o.disable,options:t(Fe)},null,8,["modelValue","disabled","options"])]),_:1},8,["modelValue"])]),r(oe),d("div",null,[Tt,r(g,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":l[6]||(l[6]=n=>t(e).formInfo.insured.relationToHolder=n),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9"},{input:b(()=>[r(k,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":l[5]||(l[5]=n=>t(e).formInfo.insured.relationToHolder=n),disabled:o.disable,options:t(ft)},null,8,["modelValue","disabled","options"])]),_:1},8,["modelValue"]),r(g,{modelValue:t(e).formInfo.insured.name,"onUpdate:modelValue":l[7]||(l[7]=n=>t(e).formInfo.insured.name=n),label:"\u59D3\u540D",name:"name",required:"","is-view":t(e).insureDisable||o.disable},null,8,["modelValue","is-view"]),r(g,{modelValue:t(e).formInfo.insured.certNo,"onUpdate:modelValue":l[8]||(l[8]=n=>t(e).formInfo.insured.certNo=n),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7","validate-type":[t(he).ID_CARD],"is-view":t(e).insureDisable||o.disable},null,8,["modelValue","validate-type","is-view"]),r(g,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":l[10]||(l[10]=n=>t(e).formInfo.insured.socialFlag=n),label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:b(()=>[r(k,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":l[9]||(l[9]=n=>t(e).formInfo.insured.socialFlag=n),disabled:o.disable||t(e).insureDisable,options:t(Fe)},null,8,["modelValue","disabled","options"])]),_:1},8,["modelValue"])]),r(oe),d("div",null,[Ot,r(g,{label:"\u6BCF\u6708\u4FDD\u8D39","is-view":!0},{input:b(()=>[z(O(o.premium)+" /\u6708 \u517112\u671F",1)]),_:1}),r(R,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":l[11]||(l[11]=n=>t(e).formInfo.paymentMethod=n),name:"paymentMethod",label:"\u652F\u4ED8\u65B9\u5F0F",placeholder:"\u8BF7\u9009\u62E9","data-source":t(pt),"is-view":o.disable||t(e).formInfo.paymentMethodDisable,required:""},null,8,["modelValue","data-source","is-view"]),r(g,{label:"\u5F00\u901A\u4E0B\u4E00\u5E74\u81EA\u4E3B\u91CD\u65B0\u6295\u4FDD",name:"renewalDK",placeholder:"\u8BF7\u9009\u62E9"},{input:b(()=>[r(q,{disabled:o.allDisabled,title:"\u514D\u8D39\u5F00\u901A",active:t(e).formInfo.renewalDK,onClick:H},null,8,["disabled","active"])]),_:1})]),r(oe)]),_:1},512)}}});var Nt=X(St,[["__scopeId","data-v-7dff4b7c"]]);const At=a=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(a),we=a=>/\W/.test(a);var kt="/static/assets/up-btn.e0edd882.png";const xt=a=>(ue("data-v-6027f757"),a=a(),ie(),a),Lt={class:"page-product-detail"},Mt={class:"info"},Ut=["src"],Ht=["src"],Rt={class:"guarantee-list"},qt={key:0,class:"basic"},$t={class:"tab-1"},Yt=["src"],Kt=xt(()=>d("div",{class:"sub-title"},"*\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),zt={class:"tab-1-content"},Wt=z(" \u8BF7\u67E5\u770B "),Jt={key:0,class:"dun-hao"},jt={class:"footer-button"},Gt={class:"price"},Qt=z(" \u603B\u4FDD\u8D39"),Xt={class:"guarantee-list"},Zt={class:"title"},eo={class:"content"},to=Q({setup(a){const u=We(),o=Je(),{productCode:E="BWYL2021",tenantId:e,extInfo:S,orderId:H}=o.query,C=_t(S),{phoneNo:l,saleChannelId:g,paymentMethod:k,certNo:R,name:q,orderId:Z}=C,n=H||Z,Be=B([{title:"\u6211\u8981\u6295\u4FDD",slotName:"tab1"},{title:"\u4EA7\u54C1\u7279\u8272",slotName:"tab2"},{title:"\u7406\u8D54\u6D41\u7A0B",slotName:"tab3"}]),ce=B(),me=B(0),ee=B(!1),D=B(),W=B(),x=B(),Te=!!(q&&R&&l),Oe=!!n,I=Ve({holder:{certNo:R,certType:Ie.CERT,mobile:l,name:q,socialFlag:le.HAS},insured:{certNo:R,certType:Ie.CERT,name:q,socialFlag:le.HAS,relationToHolder:se.SELF},paymentMethod:k,paymentMethodDisable:!!k,renewalDK:!0}),te=B(!1),Se=()=>{te.value=!1},Ne=()=>{u.push({path:"/chuangxin/baigebao/guaranteeUpgrade",query:M(L({},o.query),{tenantId:e,productCode:"BWYL2022",extInfo:JSON.stringify(M(L({},C),{orderId:n}))})})},Ae=()=>{ee.value=!0},J=re(()=>{var f,i,m,p,_,v,F;return((m=(i=(f=D.value)==null?void 0:f.tenantProductInsureVO)==null?void 0:i.guaranteeList)==null?void 0:m.length)?(_=(p=D.value)==null?void 0:p.tenantProductInsureVO)==null?void 0:_.guaranteeList:[{guaranteeType:"\u5355\u8BA1\u5212",titleAndDescVOS:(F=(v=D.value)==null?void 0:v.tenantProductInsureVO)==null?void 0:F.titleAndDescVOS}]}),fe=()=>{const{holder:{certNo:f,mobile:i,name:m,socialFlag:p},insured:{certNo:_,name:v,socialFlag:F,relationToHolder:s},paymentMethod:c}=I,y=be(f)&&At(i)&&we(m)&&!!p,w=be(_)&&we(v)&&!!F&&!!s;return!!(y&&w&&!!c)},ke=async f=>{try{const i=await dt(f),{code:m}=i;if(m==="10000"){const p=await ct({id:f.id,tenantId:e}),{data:_}=p;window.location.href=_}}catch{}},xe=f=>`https://planet-h5-insure-test.zhongan.io/chuangxin/baigebao/productDetail?tenantId=${e}&productCode=${E}&orderId=${f}`,Le=async f=>{const i=Dt({tenantId:e,saleChannelId:g,detail:D.value,paymentMethod:I.paymentMethod,renewalDK:I.renewalDK?"Y":"N",successJumpUrl:"",premium:x.value,holder:I.holder,insured:I.insured,tenantOrderRiskList:f,orderStatus:ae.UP_PROCESSING,orderTopStatus:"-1"}),m=await it(i),{code:p,data:_}=m;p==="10000"&&(Xe.loading({forbidClick:!0,message:"\u6838\u4FDD\u4E2D..."}),ke(M(L({},i),{id:_.data,extInfo:{extraInfo:{renewalDK:I.renewalDK||"N",paymentMethod:I.paymentMethod,successJumpUrl:xe(_.data)}}})))},pe=async()=>{const{calcData:f,riskVOList:i}=ye({holder:I.holder,insured:I.insured,tenantId:e,productDetail:D.value,insureDetail:W.value}),m=async()=>{const p=await ge(f),{code:_,data:v}=p;return _==="10000"?(x.value=v.premium,{condition:i,data:v}):{}};m(),Ze.exports.debounce(m,500,{trailing:!0})},Me=()=>new Promise(f=>{var i,m;(m=(i=ce.value)==null?void 0:i.validateForm)==null||m.call(i).then(async()=>{const{calcData:p,riskVOList:_}=ye({holder:I.holder,insured:I.insured,tenantId:e,productDetail:D.value,insureDetail:W.value}),v=await ge(p),{code:F,data:s}=v;F==="10000"&&(x.value=s.premium,f({condition:_,data:s})),f({})})}),Ue=async()=>{var v;if(n){u.push({path:"/chuangxin/baigebao/guaranteeUpgrade",query:M(L({},o.query),{tenantId:e,productCode:"BWYL2022",extInfo:JSON.stringify(M(L({},C),{orderId:n}))})});return}const{condition:f,data:i}=await Me(),m={},p=(F=[])=>{(F||[]).forEach(s=>{var c;m[s.riskCode]=s,((c=s.riskPremiumDetailVOList)==null?void 0:c.length)&&p(s.riskPremiumDetailVOList)})};p(i.riskPremiumDetailVOList);const _=ht({tenantId:e,riskList:f,riskPremium:m,productId:(v=D.value)==null?void 0:v.id});Le(_)};ne(()=>I,()=>{D.value&&W.value&&!n&&fe()&&pe()},{deep:!0,immediate:!0});const He=async()=>{var m,p,_,v,F,s,c;const f=mt({productCode:E,withInsureInfo:!0}),i=rt({productCode:E});if(await Promise.all([f,i]).then(([y,w])=>{y.code==="10000"&&(D.value=y.data),w.code==="10000"&&(W.value=w.data)}),n){const y=await ut({id:n,tenantId:e}),{code:w,data:T}=y;if(w==="10000"){const{tenantOrderHolder:N,tenantOrderInsuredList:P,extInfo:$}=T;I.holder={certNo:N.certNo,certType:N.certType,mobile:N.mobile,name:N.name,socialFlag:le.HAS},I.insured={certNo:P==null?void 0:P[0].certNo,certType:(m=P[0])==null?void 0:m.certType,name:(p=P[0])==null?void 0:p.name,socialFlag:(v=(_=P[0])==null?void 0:_.extInfo)==null?void 0:v.hasSocialInsurance,relationToHolder:(F=P[0])==null?void 0:F.relationToHolder},I.paymentMethod=$.extraInfo.paymentMethod,x.value=(c=(s=P[0])==null?void 0:s.tenantOrderProductList[0])==null?void 0:c.premium,I.renewalDK=$.extraInfo.renewalDK==="Y",(T.orderStatus===ae.ACCEPT_POLICY||T.orderStatus===ae.PAYMENT_SUCCESS)&&(te.value=!0)}}else fe()&&pe()};return je(()=>{He(),setTimeout(()=>{window.getIseeBiz&&window.getIseeBiz()},1500)}),(f,i)=>{var v,F;const m=A("ProPDFviewer"),p=A("van-button"),_=Ge("dompurify-html");return h(),V(U,null,[d("div",null,[d("div",Lt,[d("div",Mt,[d("img",{class:"logo",src:t(vt)},null,8,Ut),d("img",{src:(F=(v=D.value)==null?void 0:v.tenantProductInsureVO)==null?void 0:F.banner[0],class:"banner"},null,8,Ht),d("div",Rt,[r(j,{title:"\u4FDD\u969C\u5185\u5BB9",link:"\u67E5\u770B\u8BE6\u60C5","show-divider":!1,"show-icon":!1,onLinkClick:Ae},{default:b(()=>{var s,c,y;return[D.value&&((s=D.value)==null?void 0:s.tenantProductInsureVO)?(h(),V("div",qt,[(h(!0),V(U,null,Y((y=(c=t(J))==null?void 0:c[me.value])==null?void 0:y.titleAndDescVOS,(w,T)=>(h(),K(at,{key:T,class:"guarantee-item",title:w.title,content:w.desc,border:!1},null,8,["title","content"]))),128))])):G("",!0)]}),_:1})])]),r(De,{class:"tabs",list:Be.value,sticky:"",scrollspy:""},{tab1:b(()=>[r(Nt,{ref_key:"formRef",ref:ce,"holder-disable":Te,disable:Oe,"form-info":t(I),premium:x.value},null,8,["form-info","premium"])]),tab2:b(()=>{var s,c;return[d("div",$t,[(h(!0),V(U,null,Y(((c=(s=D.value)==null?void 0:s.tenantProductInsureVO)==null?void 0:c.spec)||[],(y,w)=>(h(),V("img",{key:w,src:y,class:"detail-img"},null,8,Yt))),128)),r(j,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:b(()=>[Kt]),default:b(()=>{var y,w;return[d("div",zt,[Wt,(h(!0),V(U,null,Y(((w=(y=D.value)==null?void 0:y.tenantProductInsureVO)==null?void 0:w.attachmentVOList)||[],(T,N)=>(h(),K(m,{key:N,class:"file-name",title:`\u300A${T.attachmentName}\u300B`,content:T.attachmentUri,type:"pdf"},{default:b(()=>{var P,$;return[N!==((($=(P=D.value)==null?void 0:P.tenantProductInsureVO)==null?void 0:$.attachmentVOList)||[]).length-1?(h(),V("span",Jt,"\u3001")):G("",!0)]}),_:2},1032,["title","content"]))),128))])]}),_:1})])]}),tab3:b(()=>[r(j,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:b(()=>{var s,c;return[r(st,{list:(c=(s=D.value)==null?void 0:s.tenantProductInsureVO)==null?void 0:c.settlementProcessList},null,8,["list"])]}),_:1}),r(j,{title:"\u5E38\u89C1\u95EE\u9898"},{default:b(()=>{var s,c;return[r(Pt,{list:(c=(s=D.value)==null?void 0:s.tenantProductInsureVO)==null?void 0:c.questionList},null,8,["list"])]}),_:1})]),_:1},8,["list"]),d("div",jt,[d("div",Gt,[Qt,d("span",null,"\uFFE5"+O(t(tt)(x.value))+"/\u6708",1)]),r(p,{type:"primary",class:"right",onClick:Ue},{default:b(()=>[z(O(t(n)?"\u5347\u7EA7\u4FDD\u969C":"\u7ACB\u5373\u6295\u4FDD"),1)]),_:1})])])]),r(ot,{show:ee.value,"onUpdate:show":i[0]||(i[0]=s=>ee.value=s),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:b(()=>[t(J).length>1?(h(),K(De,{key:0,list:t(J).map((s,c)=>({title:s.guaranteeType,slotName:`guarantee-${c}`})),class:"tab"},null,8,["list"])):G("",!0),d("div",Xt,[(h(!0),V(U,null,Y(t(J)[me.value].titleAndDescVOS,(s,c)=>(h(),V("div",{key:c,class:"guarantee-item"},[d("div",Zt,O(s.title),1),Qe(d("div",eo,null,512),[[_,s.content]])]))),128))])]),_:1},8,["show"]),r(nt,{"is-show":te.value,bg:t(lt),"btn-bg":t(kt),onOnConfirm:Ne,onOnClose:Se},null,8,["is-show","bg","btn-bg"])],64)}}});var _o=X(to,[["__scopeId","data-v-6027f757"]]);export{_o as default};
