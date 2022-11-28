import{h as re,G as b,z as se,$ as ue,k as n,p as K,m as E,B as c,v as _,n as v,A as N,s as m,a5 as de,a6 as ie,E as q,P as Ie,aa as Te,j as De,r as O,H as Ae,M as Ne,L as ke,F as Ce,T as te}from"./vendor-4d9de129.js";import{q as ge}from"./index-e32de49e.js";import{_ as pe,x as L,y as U,U as Fe,z as Be,Y as ce,B as Re,O as he,h as Ve,D as H,a as W,l as Se,E as Me,F as Pe,g as oe,s as Oe,A as f,t as A,n as Ue,N as Le,b as xe}from"./index-6cd418a3.js";import{B as me,a as Ye,P as le,E as we,b as C,c as ne,d as Ke,e as qe,f as B}from"./bankCard-6cc9a7eb.js";import{u as Ge}from"./useDicData-6e77ca44.js";import{_ as je}from"./index-e1b7ee70.js";import{a as $}from"./order-33544381.js";const He=I=>(de("data-v-bb02bba6"),I=I(),ie(),I),We={class:"com-bank-card-info"},$e=He(()=>N("span",{class:"field-title"},[q("\u94F6\u884C\u5361\u7167\u7247 "),N("span",{class:"sub-title"},"(\u9700\u4E0A\u4F20\u6B63\u53CD\u4E24\u9762)")],-1)),ze={class:"image-wrap"},Xe=re({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(I,{emit:R}){const h=I,M=Ge("BANK"),r=b({bankCardType:me.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),D=o=>h.factor&&h.factor[o]&&h.factor[o].isDisplay===ce.YES,x=o=>o&&o.length===2?!0:"\u8BF7\u4E0A\u4F20\u94F6\u884C\u5361\u6B63\u53CD\u9762\u7167\u7247",V=se(()=>M.value.map(o=>({label:o.name,value:o.code}))),G=o=>{Re({ossKey:[o],imageType:he.BANK_CARD}).then(s=>{const{data:l,code:i}=s;if(i==="10000"&&l&&l.bankCardOcrVO){r.value.bankCardNo=l.bankCardOcrVO.cardNo;const u=V.value.find(y=>y.label===l.bankCardOcrVO.bankName);u&&(r.value.payBank=u.value)}})};return ue(()=>h.modelValue,o=>{r.value=o},{immediate:!0}),ue(r,o=>{R("update:modelValue",o)}),(o,s)=>(n(),K("div",We,[D("cardType")?(n(),E(L,{key:0,modelValue:r.value.bankCardType,"onUpdate:modelValue":s[0]||(s[0]=l=>r.value.bankCardType=l),label:"\u5361\u7247\u7C7B\u578B",name:"bankCardType","data-source":c(Ye),"is-view":""},null,8,["modelValue","data-source"])):_("",!0),D("bankCardNumber")?(n(),E(U,{key:1,modelValue:r.value.bankCardNo,"onUpdate:modelValue":s[1]||(s[1]=l=>r.value.bankCardNo=l),label:"\u94F6\u884C\u5361\u53F7",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):_("",!0),D("cardHolder")?(n(),E(U,{key:2,"model-value":I.holderName,label:"\u6301\u5361\u4EBA",name:"accountName","is-view":""},null,8,["model-value"])):_("",!0),D("bank")?(n(),E(L,{key:3,modelValue:r.value.payBank,"onUpdate:modelValue":s[2]||(s[2]=l=>r.value.payBank=l),name:"payBank",label:"\u5F00\u6237\u94F6\u884C","data-source":c(V),required:""},null,8,["modelValue","data-source"])):_("",!0),D("bankCardAttachment")?(n(),E(U,{key:4,label:"\u94F6\u884C\u5361\u7167\u7247",block:"","label-width":"100%",name:"images",rules:[{validator:x}]},{label:v(()=>[$e]),input:v(()=>[N("div",ze,[m(Be,{modelValue:r.value.images,"onUpdate:modelValue":s[3]||(s[3]=l=>r.value.images=l),"max-count":2,"upload-type":c(Fe).BANK_CARD,onOnUploadFinished:G},null,8,["modelValue","upload-type"])])]),_:1},8,["rules"])):_("",!0),D("bankPreMobile")?(n(),E(U,{key:5,modelValue:r.value.mobile,"onUpdate:modelValue":s[4]||(s[4]=l=>r.value.mobile=l),label:"\u9884\u7559\u624B\u673A\u53F7",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):_("",!0)]))}});var z=pe(Xe,[["__scopeId","data-v-bb02bba6"]]);const Je=I=>(de("data-v-efed3cac"),I=I(),ie(),I),Qe={class:"page-bank-card"},Ze={class:"reprise-card-list"},ea=["onClick"],aa={class:"agree"},ua=q(" \u6295\u4FDD\u4EBA\u9605\u8BFB\u5E76\u63A5\u53D7 "),ta={class:"footer-button footer"},oa=Je(()=>N("div",{class:"text"},"\u5237\u65B0",-1)),la=q("\u5206\u4EAB"),na=q("\u4E0B\u4E00\u6B65"),ra=re({setup(I){const R=Ie(),h=Te(),{orderNo:M="2022072710380711215",agentCode:r="D1234567-1",tenantId:D="9991000007",templateId:x=1,isShare:V,insurerCode:G="kunlunhealth"}=R.query,o={bankCardType:me.DEBIT};let s={};const l=b(""),i=b({payMethod:le.REAL_TIME,bankData:{...o,imagesId:[],images:[]}}),u=b({payMethod:le.REAL_TIME,expiryMethod:we.AUTOMATIC_PADDING,bankData:{...o,imagesId:[],images:[]},payInfoType:C.FIRST_SAME}),y=b({bankData:{...o,imagesId:[],images:[]}}),S=b(C.FIRST_SAME),k=b({}),j=b(!1),X=b(),J=b(),Q=b(),Y=b({}),Ee=p=>{S.value=p},w=(p,a)=>k.value&&k.value[a]&&k.value[a][p]&&k.value[a][p].isDisplay===ce.YES,_e=()=>{Pe({insureCode:G,objectType:4,tenantId:D,orderNo:M}).then(({code:p,data:a})=>{p==="10000"&&(Y.value=a)})},ye=()=>{oe({orderNo:M,saleUserId:r,tenantId:D}).then(p=>{var d,e,P;const{code:a,data:g}=p;a==="10000"&&([$.PENDING,$.PAYMENT_FAILED,$.UNDER_WRITING_SUCCESS].includes(g.orderStatus)?Promise.all([(d=X.value)==null?void 0:d.validate(),(e=J.value)==null?void 0:e.validate(),(P=Q.value)==null?void 0:P.validate()]).then(T=>{if(!j.value){te.fail("\u8BF7\u52FE\u9009\u540C\u610F\u94F6\u884C\u8F6C\u8D26\u6388\u6743");return}const t=[{...T[0],id:i.value.id,paymentType:B.FIRST_TERM},{...T[1],id:u.value.id,paymentType:B.RENEW_TERM},{...T[2],id:y.value.id,paymentType:B.REPRISE,payInfoType:S.value}],F=[{category:f.OBVERSE_BANK_CARD,name:"\u9996\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:A.INIT_SIGN,type:"png",uri:T[0].images[0],id:i.value.bankData.imagesId[0]},{category:f.REVERSE_BANK_CARD,name:"\u9996\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u80CC\u9762",objectType:A.INIT_SIGN,type:"png",uri:T[0].images[1],id:i.value.bankData.imagesId[1]}];u.value.payInfoType===C.OTHER&&(F.push({category:f.OBVERSE_BANK_CARD,name:"\u7EED\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:A.RENEWAL_SIGN,type:"png",uri:T[1].images[0],id:u.value.bankData.imagesId[0]}),F.push({category:f.REVERSE_BANK_CARD,name:"\u7EED\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:A.RENEWAL_SIGN,type:"png",uri:T[1].images[1],id:u.value.bankData.imagesId[1]})),S.value===C.OTHER&&(F.push({category:f.OBVERSE_BANK_CARD,name:"\u5E74\u91D1\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:A.ANNUAL_SIGN,type:"png",uri:T[2].images[0],id:y.value.bankData.imagesId[0]}),F.push({category:f.REVERSE_BANK_CARD,name:"\u5E74\u91D1\u7B7E\u7EA6\u94F6\u884C\u5361\u80CC\u9762",objectType:A.ANNUAL_SIGN,type:"png",uri:T[2].images[1],id:y.value.bankData.imagesId[1]})),Ue({...s,pageCode:"payInfo",tenantOrderPayInfoList:t,extInfo:{...s.extInfo,templateId:x,pageCode:"payInfo",shareFlag:V?"Y":"N",buttonCode:Le.payInfo},operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:F}).then(ee=>{const{code:be,data:ae}=ee;be==="10000"&&ae.success&&h.push({path:xe[ae.pageAction.data.nextPageCode],query:R.query})})}):Oe("paymentResult",R.query))})},ve=se(()=>{const p={...R.query,isShare:1,sharePageCode:"payInfo"};return`${window.location.origin}/phoneVerify?${ge.stringify(p)}`}),Z=(p=!1)=>{oe({orderNo:M,saleUserId:r,tenantId:D}).then(a=>{const{code:g,data:d}=a;g==="10000"&&d&&(s=d,l.value=d.tenantOrderHolder.name,d.tenantOrderPayInfoList.forEach(e=>{e.paymentType===B.FIRST_TERM?(i.value=e,i.value.bankData={...o,...e,images:[],imagesId:[]}):e.paymentType===B.RENEW_TERM?(u.value=e,u.value.bankData={...e,images:[],imagesId:[]}):e.paymentType===B.REPRISE&&(y.value=e,y.value.bankData={...e,images:[],imagesId:[]},S.value=e.payInfoType)}),d.tenantOrderAttachmentList.forEach(e=>{e.objectType===A.INIT_SIGN?(e.category===f.OBVERSE_BANK_CARD&&(i.value.bankData.images[0]=e.uri,i.value.bankData.imagesId[0]=e.id),e.category===f.REVERSE_BANK_CARD&&(i.value.bankData.images[1]=e.uri,i.value.bankData.imagesId[1]=e.id)):e.objectType===A.RENEWAL_SIGN?(e.category===f.OBVERSE_BANK_CARD&&(u.value.bankData.images[0]=e.uri,u.value.bankData.imagesId[0]=e.id),e.category===f.REVERSE_BANK_CARD&&(u.value.bankData.images[1]=e.uri,u.value.bankData.imagesId[1]=e.id)):e.objectType===A.ANNUAL_SIGN&&(e.category===f.OBVERSE_BANK_CARD&&(y.value.bankData.images[0]=e.uri,y.value.bankData.imagesId[0]=e.id),e.category===f.REVERSE_BANK_CARD&&(y.value.bankData.images[1]=e.uri,y.value.bankData.imagesId[1]=e.id))}),p&&(d.tenantOrderPayInfoList.find(e=>e.paymentType===B.FIRST_TERM&&e.bankCardNo)||te("\u7528\u6237\u672A\u5B8C\u6210\u94F6\u884C\u5361\u4FE1\u606F\u586B\u5199")))})},fe=()=>{Z(!0)};return De(()=>{_e(),Ve({pageCode:"payInfo",templateId:x}).then(p=>{const{code:a,data:g}=p;if(a==="10000"){const d={};g.productInsureFactorList.forEach(e=>{d[e.moduleType]||(d[e.moduleType]={}),d[e.moduleType][e.code]=e}),k.value=d}}),Z()}),(p,a)=>{const g=O("van-switch"),d=O("van-checkbox"),e=O("ProSvg"),P=O("van-button"),T=O("ProPageWrap");return n(),E(T,null,{default:v(()=>[N("div",Qe,[m(W,{title:"\u9996\u671F\u652F\u4ED8"},{default:v(()=>[m(H,{ref_key:"form1",ref:X},{default:v(()=>[w("paymentMethod","INIT")?(n(),E(L,{key:0,modelValue:i.value.payMethod,"onUpdate:modelValue":a[0]||(a[0]=t=>i.value.payMethod=t),name:"payMethod",required:"",label:"\u652F\u4ED8\u65B9\u5F0F","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":c(ne)},null,8,["modelValue","data-source"])):_("",!0),m(z,{modelValue:i.value.bankData,"onUpdate:modelValue":a[1]||(a[1]=t=>i.value.bankData=t),"holder-name":l.value,factor:k.value.INIT},null,8,["modelValue","holder-name","factor"])]),_:1},512)]),_:1}),m(W,{title:"\u7EED\u671F\u652F\u4ED8"},{default:v(()=>[m(H,{ref_key:"form2",ref:J},{default:v(()=>[w("sameAsInit","RENEWAL")?(n(),E(U,{key:0,label:"\u540C\u9996\u671F",name:"payInfoType"},{input:v(()=>[m(g,{modelValue:u.value.payInfoType,"onUpdate:modelValue":a[2]||(a[2]=t=>u.value.payInfoType=t),size:"22","active-value":c(C).FIRST_SAME,"inactive-value":c(C).OTHER},null,8,["modelValue","active-value","inactive-value"])]),_:1})):_("",!0),w("paymentMethod","RENEWAL")?(n(),E(L,{key:1,modelValue:u.value.payMethod,"onUpdate:modelValue":a[3]||(a[3]=t=>u.value.payMethod=t),name:"payMethod",label:"\u652F\u4ED8\u65B9\u5F0F","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":c(ne),required:""},null,8,["modelValue","data-source"])):_("",!0),w("overduePayment","RENEWAL")?(n(),E(L,{key:2,modelValue:u.value.expiryMethod,"onUpdate:modelValue":a[4]||(a[4]=t=>u.value.expiryMethod=t),name:"expiryMethod",label:"\u4FDD\u8D39\u903E\u671F\u672A\u652F\u4ED8","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":c(Ke),required:"","label-width":"200"},null,8,["modelValue","data-source"])):_("",!0),u.value.payInfoType!==c(C).FIRST_SAME?(n(),E(z,{key:3,modelValue:u.value.bankData,"onUpdate:modelValue":a[5]||(a[5]=t=>u.value.bankData=t),"holder-name":l.value,factor:k.value.RENEWAL},null,8,["modelValue","holder-name","factor"])):_("",!0)]),_:1},512)]),_:1}),m(W,{title:"\u5E74\u91D1\u9886\u53D6\u94F6\u884C\u5361",class:"reprise-card","show-divider":!1},{default:v(()=>[N("div",Ze,[(n(!0),K(Ce,null,Ae(c(qe),(t,F)=>(n(),K("div",{key:F,class:Ne(["reprise-card-item",{selected:S.value===t.value}]),onClick:ee=>Ee(t.value)},ke(t.label),11,ea))),128))]),m(H,{ref_key:"form3",ref:Q},{default:v(()=>[S.value===c(C).OTHER?(n(),E(z,{key:0,modelValue:y.value.bankData,"onUpdate:modelValue":a[6]||(a[6]=t=>y.value.bankData=t),"holder-name":l.value,factor:k.value.ANNUITY},null,8,["modelValue","holder-name","factor"])):_("",!0)]),_:1},512)]),_:1}),N("div",aa,[m(d,{modelValue:j.value,"onUpdate:modelValue":a[7]||(a[7]=t=>j.value=t),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),ua,m(Me,{class:"file",title:"\u300A\u94F6\u884C\u8F6C\u8D26\u6388\u6743\u300B",content:Y.value.materialContent,type:c(Se)(Y.value.materialContent,Y.value.materialSource+"")},null,8,["content","type"])]),N("div",ta,[c(V)?_("",!0):(n(),K("div",{key:0,class:"refresh-btn",onClick:fe},[N("div",null,[m(e,{name:"refresh"})]),oa])),c(V)?_("",!0):(n(),E(je,{key:1,title:"\u9080\u8BF7\u60A8\u586B\u5199\u94F6\u884C\u5361\u4FE1\u606F",desc:"\u9080\u8BF7\u60A8\u586B\u5199\u94F6\u884C\u5361\u4FE1\u606F",link:c(ve),"-":""},{default:v(()=>[m(P,{plain:"",type:"primary"},{default:v(()=>[la]),_:1})]),_:1},8,["link"])),m(P,{type:"primary",class:"submit-btn",onClick:ye},{default:v(()=>[na]),_:1})])])]),_:1})}}});var _a=pe(ra,[["__scopeId","data-v-efed3cac"]]);export{_a as default};
