var ke=Object.defineProperty,ge=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var oe=(t,n,d)=>n in t?ke(t,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[n]=d,_=(t,n)=>{for(var d in n||(n={}))Ce.call(n,d)&&oe(t,d,n[d]);if(te)for(var d of te(n))Fe.call(n,d)&&oe(t,d,n[d]);return t},A=(t,n)=>ge(t,Ne(n));import{g as pe,E as k,y as ce,_ as le,j as s,n as G,k as f,A as y,t as b,m as D,z as F,p as v,a4 as me,a5 as Ee,C as j,O as Be,a9 as Re,h as he,r as L,G as Ve,L as Se,J as Me,F as Pe,T as ne}from"./vendor-9d7eb2ed.js";import{q as Oe}from"./index-a99815ab.js";import{_ as ye,Y as _e,u as Y,v as x,U as Ue,x as Le,y as xe,O as Ye,h as we,z as $,a as z,l as Ke,B as qe,D as Ge,g as re,q as je,A as T,r as C,n as He,c as We}from"./index-5edbbd65.js";import{B as ve,a as $e,P as se,E as ze,b as h,c as de,d as Je,e as Xe,f as S}from"./bankCard-b0679059.js";import{u as Qe}from"./useDicData-43e7d715.js";import{_ as Ze}from"./index-116d0069.js";import{a as ie}from"./order-b675ac95.js";const ea=t=>(me("data-v-bb02bba6"),t=t(),Ee(),t),aa={class:"com-bank-card-info"},ua=ea(()=>F("span",{class:"field-title"},[j("\u94F6\u884C\u5361\u7167\u7247 "),F("span",{class:"sub-title"},"(\u9700\u4E0A\u4F20\u6B63\u53CD\u4E24\u9762)")],-1)),ta={class:"image-wrap"},oa=pe({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(t,{emit:n}){const d=t,O=Qe("BANK"),i=k({bankCardType:ve.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),N=l=>d.factor&&d.factor[l]&&d.factor[l].isDisplay===_e.YES,w=l=>l&&l.length===2?!0:"\u8BF7\u4E0A\u4F20\u94F6\u884C\u5361\u6B63\u53CD\u9762\u7167\u7247",M=ce(()=>O.value.map(l=>({label:l.name,value:l.code}))),H=l=>{xe({ossKey:[l],imageType:Ye.BANK_CARD}).then(p=>{const{data:r,code:m}=p;if(m==="10000"&&r&&r.bankCardOcrVO){i.value.bankCardNo=r.bankCardOcrVO.cardNo;const u=M.value.find(I=>I.label===r.bankCardOcrVO.bankName);u&&(i.value.payBank=u.value)}})};return le(()=>d.modelValue,l=>{i.value=l},{immediate:!0}),le(i,l=>{n("update:modelValue",l)}),(l,p)=>(s(),G("div",aa,[N("cardType")?(s(),f(Y,{key:0,modelValue:i.value.bankCardType,"onUpdate:modelValue":p[0]||(p[0]=r=>i.value.bankCardType=r),label:"\u5361\u7247\u7C7B\u578B",name:"bankCardType","data-source":y($e),"is-view":""},null,8,["modelValue","data-source"])):b("",!0),N("bankCardNumber")?(s(),f(x,{key:1,modelValue:i.value.bankCardNo,"onUpdate:modelValue":p[1]||(p[1]=r=>i.value.bankCardNo=r),label:"\u94F6\u884C\u5361\u53F7",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):b("",!0),N("cardHolder")?(s(),f(x,{key:2,"model-value":t.holderName,label:"\u6301\u5361\u4EBA",name:"accountName","is-view":""},null,8,["model-value"])):b("",!0),N("bank")?(s(),f(Y,{key:3,modelValue:i.value.payBank,"onUpdate:modelValue":p[2]||(p[2]=r=>i.value.payBank=r),name:"payBank",label:"\u5F00\u6237\u94F6\u884C","data-source":y(M),required:""},null,8,["modelValue","data-source"])):b("",!0),N("bankCardAttachment")?(s(),f(x,{key:4,label:"\u94F6\u884C\u5361\u7167\u7247",block:"","label-width":"100%",name:"images",rules:[{validator:w}]},{label:D(()=>[ua]),input:D(()=>[F("div",ta,[v(Le,{modelValue:i.value.images,"onUpdate:modelValue":p[3]||(p[3]=r=>i.value.images=r),"max-count":2,"upload-type":y(Ue).BANK_CARD,onOnUploadFinished:H},null,8,["modelValue","upload-type"])])]),_:1},8,["rules"])):b("",!0),N("bankPreMobile")?(s(),f(x,{key:5,modelValue:i.value.mobile,"onUpdate:modelValue":p[4]||(p[4]=r=>i.value.mobile=r),label:"\u9884\u7559\u624B\u673A\u53F7",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):b("",!0)]))}});var J=ye(oa,[["__scopeId","data-v-bb02bba6"]]);const la=t=>(me("data-v-578f39ac"),t=t(),Ee(),t),na={class:"page-bank-card"},ra={class:"reprise-card-list"},sa=["onClick"],da={class:"agree"},ia=j(" \u6295\u4FDD\u4EBA\u9605\u8BFB\u5E76\u63A5\u53D7 "),pa={class:"footer-button footer"},ca=la(()=>F("div",{class:"text"},"\u5237\u65B0",-1)),ma=j("\u5206\u4EAB"),Ea=j("\u4E0B\u4E00\u6B65"),ya=pe({setup(t){const n=Be(),d=Re(),{orderNo:O="2022072710380711215",agentCode:i="D1234567-1",tenantId:N="9991000007",templateId:w=1,isShare:M,insureCode:H="kunlunhealth"}=n.query,l={bankCardType:ve.DEBIT};let p={};const r=k(""),m=k({payMethod:se.REAL_TIME,bankData:A(_({},l),{imagesId:[],images:[]})}),u=k({payMethod:se.REAL_TIME,expiryMethod:ze.AUTOMATIC_PADDING,bankData:A(_({},l),{imagesId:[],images:[]}),payInfoType:h.FIRST_SAME}),I=k({bankData:A(_({},l),{imagesId:[],images:[]})}),P=k(h.FIRST_SAME),B=k({}),W=k(!1),X=k(),Q=k(),Z=k(),K=k({}),fe=E=>{P.value=E},q=(E,a)=>B.value&&B.value[a]&&B.value[a][E]&&B.value[a][E].isDisplay===_e.YES,be=()=>{Ge({insureCode:H,objectType:4,tenantId:N,orderNo:O}).then(({code:E,data:a})=>{E==="10000"&&(K.value=a)})},Ie=()=>{re({orderNo:O,saleUserId:i,tenantId:N}).then(E=>{var c,e,U;const{code:a,data:R}=E;a==="10000"&&(R.orderStatus===ie.PENDING||R.orderStatus===ie.PAYMENT_FAILED?Promise.all([(c=X.value)==null?void 0:c.validate(),(e=Q.value)==null?void 0:e.validate(),(U=Z.value)==null?void 0:U.validate()]).then(g=>{if(!W.value){ne.fail("\u8BF7\u52FE\u9009\u540C\u610F\u94F6\u884C\u8F6C\u8D26\u6388\u6743");return}const o=[A(_({},g[0]),{id:m.value.id,paymentType:S.FIRST_TERM}),A(_({},g[1]),{id:u.value.id,paymentType:S.RENEW_TERM}),A(_({},g[2]),{id:I.value.id,paymentType:S.REPRISE,payInfoType:P.value})],V=[{category:T.OBVERSE_BANK_CARD,name:"\u9996\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:C.INIT_SIGN,type:"png",uri:g[0].images[0],id:m.value.bankData.imagesId[0]},{category:T.REVERSE_BANK_CARD,name:"\u9996\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u80CC\u9762",objectType:C.INIT_SIGN,type:"png",uri:g[0].images[1],id:m.value.bankData.imagesId[1]}];u.value.payInfoType===h.OTHER&&(V.push({category:T.OBVERSE_BANK_CARD,name:"\u7EED\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:C.RENEWAL_SIGN,type:"png",uri:g[1].images[0],id:u.value.bankData.imagesId[0]}),V.push({category:T.REVERSE_BANK_CARD,name:"\u7EED\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:C.RENEWAL_SIGN,type:"png",uri:g[1].images[1],id:u.value.bankData.imagesId[1]})),P.value===h.OTHER&&(V.push({category:T.OBVERSE_BANK_CARD,name:"\u5E74\u91D1\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:C.ANNUAL_SIGN,type:"png",uri:g[2].images[0],id:I.value.bankData.imagesId[0]}),V.push({category:T.REVERSE_BANK_CARD,name:"\u5E74\u91D1\u7B7E\u7EA6\u94F6\u884C\u5361\u80CC\u9762",objectType:C.ANNUAL_SIGN,type:"png",uri:g[2].images[1],id:I.value.bankData.imagesId[1]})),He(A(_({},p),{pageCode:"payInfo",tenantOrderPayInfoList:o,extInfo:A(_({},p.extInfo),{templateId:w,pageCode:"payInfo",shareFlag:M?"Y":"N"}),operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:V})).then(ae=>{const{code:Te,data:ue}=ae;Te==="10000"&&ue.success&&d.push({path:We[ue.pageAction.data.nextPageCode],query:n.query})})}):je("paymentResult",n.query))})},Ae=ce(()=>{const E=A(_({},n.query),{isShare:1,sharePageCode:"payInfo"});return`${window.location.origin}/phoneVerify?${Oe.stringify(E)}`}),ee=(E=!1)=>{re({orderNo:O,saleUserId:i,tenantId:N}).then(a=>{const{code:R,data:c}=a;R==="10000"&&c&&(p=c,r.value=c.tenantOrderHolder.name,c.tenantOrderPayInfoList.forEach(e=>{e.paymentType===S.FIRST_TERM?(m.value=e,m.value.bankData=A(_(_({},l),e),{images:[],imagesId:[]})):e.paymentType===S.RENEW_TERM?(u.value=e,u.value.bankData=A(_({},e),{images:[],imagesId:[]})):e.paymentType===S.REPRISE&&(I.value=e,I.value.bankData=A(_({},e),{images:[],imagesId:[]}),P.value=e.payInfoType)}),c.tenantOrderAttachmentList.forEach(e=>{e.objectType===C.INIT_SIGN?(e.category===T.OBVERSE_BANK_CARD&&(m.value.bankData.images[0]=e.uri,m.value.bankData.imagesId[0]=e.id),e.category===T.REVERSE_BANK_CARD&&(m.value.bankData.images[1]=e.uri,m.value.bankData.imagesId[1]=e.id)):e.objectType===C.RENEWAL_SIGN?(e.category===T.OBVERSE_BANK_CARD&&(u.value.bankData.images[0]=e.uri,u.value.bankData.imagesId[0]=e.id),e.category===T.REVERSE_BANK_CARD&&(u.value.bankData.images[1]=e.uri,u.value.bankData.imagesId[1]=e.id)):e.objectType===C.ANNUAL_SIGN&&(e.category===T.OBVERSE_BANK_CARD&&(I.value.bankData.images[0]=e.uri,I.value.bankData.imagesId[0]=e.id),e.category===T.REVERSE_BANK_CARD&&(I.value.bankData.images[1]=e.uri,I.value.bankData.imagesId[1]=e.id))}),E&&(c.tenantOrderPayInfoList.find(e=>e.paymentType===S.FIRST_TERM&&e.bankCardNo)||ne("\u7528\u6237\u672A\u5B8C\u6210\u94F6\u884C\u5361\u4FE1\u606F\u586B\u5199")))})},De=()=>{ee(!0)};return he(()=>{be(),we({pageCode:"payInfo",templateId:w}).then(E=>{const{code:a,data:R}=E;if(a==="10000"){const c={};R.productInsureFactorList.forEach(e=>{c[e.moduleType]||(c[e.moduleType]={}),c[e.moduleType][e.code]=e}),B.value=c}}),ee()}),(E,a)=>{const R=L("van-switch"),c=L("van-checkbox"),e=L("ProSvg"),U=L("van-button"),g=L("ProPageWrap");return s(),f(g,null,{default:D(()=>[F("div",na,[v(z,{title:"\u9996\u671F\u652F\u4ED8"},{default:D(()=>[v($,{ref_key:"form1",ref:X},{default:D(()=>[q("paymentMethod","INIT")?(s(),f(Y,{key:0,modelValue:m.value.payMethod,"onUpdate:modelValue":a[0]||(a[0]=o=>m.value.payMethod=o),name:"payMethod",required:"",label:"\u652F\u4ED8\u65B9\u5F0F","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":y(de)},null,8,["modelValue","data-source"])):b("",!0),v(J,{modelValue:m.value.bankData,"onUpdate:modelValue":a[1]||(a[1]=o=>m.value.bankData=o),"holder-name":r.value,factor:B.value.INIT},null,8,["modelValue","holder-name","factor"])]),_:1},512)]),_:1}),v(z,{title:"\u7EED\u671F\u652F\u4ED8"},{default:D(()=>[v($,{ref_key:"form2",ref:Q},{default:D(()=>[q("sameAsInit","RENEWAL")?(s(),f(x,{key:0,label:"\u540C\u9996\u671F",name:"payInfoType"},{input:D(()=>[v(R,{modelValue:u.value.payInfoType,"onUpdate:modelValue":a[2]||(a[2]=o=>u.value.payInfoType=o),size:"22","active-value":y(h).FIRST_SAME,"inactive-value":y(h).OTHER},null,8,["modelValue","active-value","inactive-value"])]),_:1})):b("",!0),q("paymentMethod","RENEWAL")?(s(),f(Y,{key:1,modelValue:u.value.payMethod,"onUpdate:modelValue":a[3]||(a[3]=o=>u.value.payMethod=o),name:"payMethod",label:"\u652F\u4ED8\u65B9\u5F0F","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":y(de),required:""},null,8,["modelValue","data-source"])):b("",!0),q("overduePayment","RENEWAL")?(s(),f(Y,{key:2,modelValue:u.value.expiryMethod,"onUpdate:modelValue":a[4]||(a[4]=o=>u.value.expiryMethod=o),name:"expiryMethod",label:"\u4FDD\u8D39\u903E\u671F\u672A\u652F\u4ED8","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":y(Je),required:"","label-width":"200"},null,8,["modelValue","data-source"])):b("",!0),u.value.payInfoType!==y(h).FIRST_SAME?(s(),f(J,{key:3,modelValue:u.value.bankData,"onUpdate:modelValue":a[5]||(a[5]=o=>u.value.bankData=o),"holder-name":r.value,factor:B.value.RENEWAL},null,8,["modelValue","holder-name","factor"])):b("",!0)]),_:1},512)]),_:1}),v(z,{title:"\u5E74\u91D1\u9886\u53D6\u94F6\u884C\u5361",class:"reprise-card","show-divider":!1},{default:D(()=>[F("div",ra,[(s(!0),G(Pe,null,Ve(y(Xe),(o,V)=>(s(),G("div",{key:V,class:Se(["reprise-card-item",{selected:P.value===o.value}]),onClick:ae=>fe(o.value)},Me(o.label),11,sa))),128))]),v($,{ref_key:"form3",ref:Z},{default:D(()=>[P.value===y(h).OTHER?(s(),f(J,{key:0,modelValue:I.value.bankData,"onUpdate:modelValue":a[6]||(a[6]=o=>I.value.bankData=o),"holder-name":r.value,factor:B.value.ANNUITY},null,8,["modelValue","holder-name","factor"])):b("",!0)]),_:1},512)]),_:1}),F("div",da,[v(c,{modelValue:W.value,"onUpdate:modelValue":a[7]||(a[7]=o=>W.value=o),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),ia,v(qe,{class:"file",title:"\u300A\u94F6\u884C\u8F6C\u8D26\u6388\u6743\u300B",content:K.value.materialContent,type:y(Ke)(K.value.materialContent,K.value.materialSource+"")},null,8,["content","type"])]),F("div",pa,[y(M)?b("",!0):(s(),G("div",{key:0,class:"refresh-btn",onClick:De},[F("div",null,[v(e,{name:"refresh"})]),ca])),y(M)?b("",!0):(s(),f(Ze,{key:1,title:"\u9080\u8BF7\u60A8\u586B\u5199\u94F6\u884C\u5361\u4FE1\u606F",desc:"\u9080\u8BF7\u60A8\u586B\u5199\u94F6\u884C\u5361\u4FE1\u606F",link:y(Ae),"-":""},{default:D(()=>[v(U,{plain:"",type:"primary"},{default:D(()=>[ma]),_:1})]),_:1},8,["link"])),v(U,{type:"primary",class:"submit-btn",onClick:Ie},{default:D(()=>[Ea]),_:1})])])]),_:1})}}});var ka=ye(ya,[["__scopeId","data-v-578f39ac"]]);export{ka as default};
