var Ne=Object.defineProperty,ke=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var le=(t,n,d)=>n in t?Ne(t,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[n]=d,y=(t,n)=>{for(var d in n||(n={}))ge.call(n,d)&&le(t,d,n[d]);if(oe)for(var d of oe(n))Fe.call(n,d)&&le(t,d,n[d]);return t},T=(t,n)=>ke(t,Ce(n));import{g as pe,E as N,y as ce,_ as ne,j as s,n as G,k as f,A as _,t as b,m as D,z as F,p as v,a4 as me,a5 as Ee,C as j,O as Be,a9 as Re,h as he,r as L,G as Ve,L as Se,J as Me,F as Pe,T as re}from"./vendor-c3c577f2.js";import{q as Oe}from"./index-02dc06eb.js";import{_ as _e,Y as ye,v as Y,x,U as Ue,y as Le,z as xe,O as Ye,h as we,B as $,a as z,l as Ke,D as qe,E as Ge,g as se,q as je,A,s as g,n as He,N as We,b as $e}from"./index-53abd92d.js";import{B as ve,a as ze,P as de,E as Je,b as R,c as ie,d as Xe,e as Qe,f as S}from"./bankCard-0e4ce564.js";import{u as Ze}from"./useDicData-b8e94b4f.js";import{_ as ea}from"./index-185088ff.js";import{a as J}from"./order-26db6dbf.js";import"./utils-b6782348.js";const aa=t=>(me("data-v-bb02bba6"),t=t(),Ee(),t),ua={class:"com-bank-card-info"},ta=aa(()=>F("span",{class:"field-title"},[j("\u94F6\u884C\u5361\u7167\u7247 "),F("span",{class:"sub-title"},"(\u9700\u4E0A\u4F20\u6B63\u53CD\u4E24\u9762)")],-1)),oa={class:"image-wrap"},la=pe({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(t,{emit:n}){const d=t,O=Ze("BANK"),i=N({bankCardType:ve.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),C=l=>d.factor&&d.factor[l]&&d.factor[l].isDisplay===ye.YES,w=l=>l&&l.length===2?!0:"\u8BF7\u4E0A\u4F20\u94F6\u884C\u5361\u6B63\u53CD\u9762\u7167\u7247",M=ce(()=>O.value.map(l=>({label:l.name,value:l.code}))),H=l=>{xe({ossKey:[l],imageType:Ye.BANK_CARD}).then(p=>{const{data:r,code:m}=p;if(m==="10000"&&r&&r.bankCardOcrVO){i.value.bankCardNo=r.bankCardOcrVO.cardNo;const u=M.value.find(I=>I.label===r.bankCardOcrVO.bankName);u&&(i.value.payBank=u.value)}})};return ne(()=>d.modelValue,l=>{i.value=l},{immediate:!0}),ne(i,l=>{n("update:modelValue",l)}),(l,p)=>(s(),G("div",ua,[C("cardType")?(s(),f(Y,{key:0,modelValue:i.value.bankCardType,"onUpdate:modelValue":p[0]||(p[0]=r=>i.value.bankCardType=r),label:"\u5361\u7247\u7C7B\u578B",name:"bankCardType","data-source":_(ze),"is-view":""},null,8,["modelValue","data-source"])):b("",!0),C("bankCardNumber")?(s(),f(x,{key:1,modelValue:i.value.bankCardNo,"onUpdate:modelValue":p[1]||(p[1]=r=>i.value.bankCardNo=r),label:"\u94F6\u884C\u5361\u53F7",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):b("",!0),C("cardHolder")?(s(),f(x,{key:2,"model-value":t.holderName,label:"\u6301\u5361\u4EBA",name:"accountName","is-view":""},null,8,["model-value"])):b("",!0),C("bank")?(s(),f(Y,{key:3,modelValue:i.value.payBank,"onUpdate:modelValue":p[2]||(p[2]=r=>i.value.payBank=r),name:"payBank",label:"\u5F00\u6237\u94F6\u884C","data-source":_(M),required:""},null,8,["modelValue","data-source"])):b("",!0),C("bankCardAttachment")?(s(),f(x,{key:4,label:"\u94F6\u884C\u5361\u7167\u7247",block:"","label-width":"100%",name:"images",rules:[{validator:w}]},{label:D(()=>[ta]),input:D(()=>[F("div",oa,[v(Le,{modelValue:i.value.images,"onUpdate:modelValue":p[3]||(p[3]=r=>i.value.images=r),"max-count":2,"upload-type":_(Ue).BANK_CARD,onOnUploadFinished:H},null,8,["modelValue","upload-type"])])]),_:1},8,["rules"])):b("",!0),C("bankPreMobile")?(s(),f(x,{key:5,modelValue:i.value.mobile,"onUpdate:modelValue":p[4]||(p[4]=r=>i.value.mobile=r),label:"\u9884\u7559\u624B\u673A\u53F7",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):b("",!0)]))}});var X=_e(la,[["__scopeId","data-v-bb02bba6"]]);const na=t=>(me("data-v-efed3cac"),t=t(),Ee(),t),ra={class:"page-bank-card"},sa={class:"reprise-card-list"},da=["onClick"],ia={class:"agree"},pa=j(" \u6295\u4FDD\u4EBA\u9605\u8BFB\u5E76\u63A5\u53D7 "),ca={class:"footer-button footer"},ma=na(()=>F("div",{class:"text"},"\u5237\u65B0",-1)),Ea=j("\u5206\u4EAB"),_a=j("\u4E0B\u4E00\u6B65"),ya=pe({setup(t){const n=Be(),d=Re(),{orderNo:O="2022072710380711215",agentCode:i="D1234567-1",tenantId:C="9991000007",templateId:w=1,isShare:M,insurerCode:H="kunlunhealth"}=n.query,l={bankCardType:ve.DEBIT};let p={};const r=N(""),m=N({payMethod:de.REAL_TIME,bankData:T(y({},l),{imagesId:[],images:[]})}),u=N({payMethod:de.REAL_TIME,expiryMethod:Je.AUTOMATIC_PADDING,bankData:T(y({},l),{imagesId:[],images:[]}),payInfoType:R.FIRST_SAME}),I=N({bankData:T(y({},l),{imagesId:[],images:[]})}),P=N(R.FIRST_SAME),B=N({}),W=N(!1),Q=N(),Z=N(),ee=N(),K=N({}),fe=E=>{P.value=E},q=(E,a)=>B.value&&B.value[a]&&B.value[a][E]&&B.value[a][E].isDisplay===ye.YES,be=()=>{Ge({insureCode:H,objectType:4,tenantId:C,orderNo:O}).then(({code:E,data:a})=>{E==="10000"&&(K.value=a)})},Ie=()=>{se({orderNo:O,saleUserId:i,tenantId:C}).then(E=>{var c,e,U;const{code:a,data:h}=E;a==="10000"&&([J.PENDING,J.PAYMENT_FAILED,J.UNDER_WRITING_SUCCESS].includes(h.orderStatus)?Promise.all([(c=Q.value)==null?void 0:c.validate(),(e=Z.value)==null?void 0:e.validate(),(U=ee.value)==null?void 0:U.validate()]).then(k=>{if(!W.value){re.fail("\u8BF7\u52FE\u9009\u540C\u610F\u94F6\u884C\u8F6C\u8D26\u6388\u6743");return}const o=[T(y({},k[0]),{id:m.value.id,paymentType:S.FIRST_TERM}),T(y({},k[1]),{id:u.value.id,paymentType:S.RENEW_TERM}),T(y({},k[2]),{id:I.value.id,paymentType:S.REPRISE,payInfoType:P.value})],V=[{category:A.OBVERSE_BANK_CARD,name:"\u9996\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:g.INIT_SIGN,type:"png",uri:k[0].images[0],id:m.value.bankData.imagesId[0]},{category:A.REVERSE_BANK_CARD,name:"\u9996\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u80CC\u9762",objectType:g.INIT_SIGN,type:"png",uri:k[0].images[1],id:m.value.bankData.imagesId[1]}];u.value.payInfoType===R.OTHER&&(V.push({category:A.OBVERSE_BANK_CARD,name:"\u7EED\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:g.RENEWAL_SIGN,type:"png",uri:k[1].images[0],id:u.value.bankData.imagesId[0]}),V.push({category:A.REVERSE_BANK_CARD,name:"\u7EED\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:g.RENEWAL_SIGN,type:"png",uri:k[1].images[1],id:u.value.bankData.imagesId[1]})),P.value===R.OTHER&&(V.push({category:A.OBVERSE_BANK_CARD,name:"\u5E74\u91D1\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:g.ANNUAL_SIGN,type:"png",uri:k[2].images[0],id:I.value.bankData.imagesId[0]}),V.push({category:A.REVERSE_BANK_CARD,name:"\u5E74\u91D1\u7B7E\u7EA6\u94F6\u884C\u5361\u80CC\u9762",objectType:g.ANNUAL_SIGN,type:"png",uri:k[2].images[1],id:I.value.bankData.imagesId[1]})),He(T(y({},p),{pageCode:"payInfo",tenantOrderPayInfoList:o,extInfo:T(y({},p.extInfo),{templateId:w,pageCode:"payInfo",shareFlag:M?"Y":"N",buttonCode:We.payInfo}),operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:V})).then(ue=>{const{code:Ae,data:te}=ue;Ae==="10000"&&te.success&&d.push({path:$e[te.pageAction.data.nextPageCode],query:n.query})})}):je("paymentResult",n.query))})},Te=ce(()=>{const E=T(y({},n.query),{isShare:1,sharePageCode:"payInfo"});return`${window.location.origin}/phoneVerify?${Oe.stringify(E)}`}),ae=(E=!1)=>{se({orderNo:O,saleUserId:i,tenantId:C}).then(a=>{const{code:h,data:c}=a;h==="10000"&&c&&(p=c,r.value=c.tenantOrderHolder.name,c.tenantOrderPayInfoList.forEach(e=>{e.paymentType===S.FIRST_TERM?(m.value=e,m.value.bankData=T(y(y({},l),e),{images:[],imagesId:[]})):e.paymentType===S.RENEW_TERM?(u.value=e,u.value.bankData=T(y({},e),{images:[],imagesId:[]})):e.paymentType===S.REPRISE&&(I.value=e,I.value.bankData=T(y({},e),{images:[],imagesId:[]}),P.value=e.payInfoType)}),c.tenantOrderAttachmentList.forEach(e=>{e.objectType===g.INIT_SIGN?(e.category===A.OBVERSE_BANK_CARD&&(m.value.bankData.images[0]=e.uri,m.value.bankData.imagesId[0]=e.id),e.category===A.REVERSE_BANK_CARD&&(m.value.bankData.images[1]=e.uri,m.value.bankData.imagesId[1]=e.id)):e.objectType===g.RENEWAL_SIGN?(e.category===A.OBVERSE_BANK_CARD&&(u.value.bankData.images[0]=e.uri,u.value.bankData.imagesId[0]=e.id),e.category===A.REVERSE_BANK_CARD&&(u.value.bankData.images[1]=e.uri,u.value.bankData.imagesId[1]=e.id)):e.objectType===g.ANNUAL_SIGN&&(e.category===A.OBVERSE_BANK_CARD&&(I.value.bankData.images[0]=e.uri,I.value.bankData.imagesId[0]=e.id),e.category===A.REVERSE_BANK_CARD&&(I.value.bankData.images[1]=e.uri,I.value.bankData.imagesId[1]=e.id))}),E&&(c.tenantOrderPayInfoList.find(e=>e.paymentType===S.FIRST_TERM&&e.bankCardNo)||re("\u7528\u6237\u672A\u5B8C\u6210\u94F6\u884C\u5361\u4FE1\u606F\u586B\u5199")))})},De=()=>{ae(!0)};return he(()=>{be(),we({pageCode:"payInfo",templateId:w}).then(E=>{const{code:a,data:h}=E;if(a==="10000"){const c={};h.productInsureFactorList.forEach(e=>{c[e.moduleType]||(c[e.moduleType]={}),c[e.moduleType][e.code]=e}),B.value=c}}),ae()}),(E,a)=>{const h=L("van-switch"),c=L("van-checkbox"),e=L("ProSvg"),U=L("van-button"),k=L("ProPageWrap");return s(),f(k,null,{default:D(()=>[F("div",ra,[v(z,{title:"\u9996\u671F\u652F\u4ED8"},{default:D(()=>[v($,{ref_key:"form1",ref:Q},{default:D(()=>[q("paymentMethod","INIT")?(s(),f(Y,{key:0,modelValue:m.value.payMethod,"onUpdate:modelValue":a[0]||(a[0]=o=>m.value.payMethod=o),name:"payMethod",required:"",label:"\u652F\u4ED8\u65B9\u5F0F","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":_(ie)},null,8,["modelValue","data-source"])):b("",!0),v(X,{modelValue:m.value.bankData,"onUpdate:modelValue":a[1]||(a[1]=o=>m.value.bankData=o),"holder-name":r.value,factor:B.value.INIT},null,8,["modelValue","holder-name","factor"])]),_:1},512)]),_:1}),v(z,{title:"\u7EED\u671F\u652F\u4ED8"},{default:D(()=>[v($,{ref_key:"form2",ref:Z},{default:D(()=>[q("sameAsInit","RENEWAL")?(s(),f(x,{key:0,label:"\u540C\u9996\u671F",name:"payInfoType"},{input:D(()=>[v(h,{modelValue:u.value.payInfoType,"onUpdate:modelValue":a[2]||(a[2]=o=>u.value.payInfoType=o),size:"22","active-value":_(R).FIRST_SAME,"inactive-value":_(R).OTHER},null,8,["modelValue","active-value","inactive-value"])]),_:1})):b("",!0),q("paymentMethod","RENEWAL")?(s(),f(Y,{key:1,modelValue:u.value.payMethod,"onUpdate:modelValue":a[3]||(a[3]=o=>u.value.payMethod=o),name:"payMethod",label:"\u652F\u4ED8\u65B9\u5F0F","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":_(ie),required:""},null,8,["modelValue","data-source"])):b("",!0),q("overduePayment","RENEWAL")?(s(),f(Y,{key:2,modelValue:u.value.expiryMethod,"onUpdate:modelValue":a[4]||(a[4]=o=>u.value.expiryMethod=o),name:"expiryMethod",label:"\u4FDD\u8D39\u903E\u671F\u672A\u652F\u4ED8","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":_(Xe),required:"","label-width":"200"},null,8,["modelValue","data-source"])):b("",!0),u.value.payInfoType!==_(R).FIRST_SAME?(s(),f(X,{key:3,modelValue:u.value.bankData,"onUpdate:modelValue":a[5]||(a[5]=o=>u.value.bankData=o),"holder-name":r.value,factor:B.value.RENEWAL},null,8,["modelValue","holder-name","factor"])):b("",!0)]),_:1},512)]),_:1}),v(z,{title:"\u5E74\u91D1\u9886\u53D6\u94F6\u884C\u5361",class:"reprise-card","show-divider":!1},{default:D(()=>[F("div",sa,[(s(!0),G(Pe,null,Ve(_(Qe),(o,V)=>(s(),G("div",{key:V,class:Se(["reprise-card-item",{selected:P.value===o.value}]),onClick:ue=>fe(o.value)},Me(o.label),11,da))),128))]),v($,{ref_key:"form3",ref:ee},{default:D(()=>[P.value===_(R).OTHER?(s(),f(X,{key:0,modelValue:I.value.bankData,"onUpdate:modelValue":a[6]||(a[6]=o=>I.value.bankData=o),"holder-name":r.value,factor:B.value.ANNUITY},null,8,["modelValue","holder-name","factor"])):b("",!0)]),_:1},512)]),_:1}),F("div",ia,[v(c,{modelValue:W.value,"onUpdate:modelValue":a[7]||(a[7]=o=>W.value=o),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),pa,v(qe,{class:"file",title:"\u300A\u94F6\u884C\u8F6C\u8D26\u6388\u6743\u300B",content:K.value.materialContent,type:_(Ke)(K.value.materialContent,K.value.materialSource+"")},null,8,["content","type"])]),F("div",ca,[_(M)?b("",!0):(s(),G("div",{key:0,class:"refresh-btn",onClick:De},[F("div",null,[v(e,{name:"refresh"})]),ma])),_(M)?b("",!0):(s(),f(ea,{key:1,title:"\u9080\u8BF7\u60A8\u586B\u5199\u94F6\u884C\u5361\u4FE1\u606F",desc:"\u9080\u8BF7\u60A8\u586B\u5199\u94F6\u884C\u5361\u4FE1\u606F",link:_(Te),"-":""},{default:D(()=>[v(U,{plain:"",type:"primary"},{default:D(()=>[Ea]),_:1})]),_:1},8,["link"])),v(U,{type:"primary",class:"submit-btn",onClick:Ie},{default:D(()=>[_a]),_:1})])])]),_:1})}}});var Ca=_e(ya,[["__scopeId","data-v-efed3cac"]]);export{Ca as default};
