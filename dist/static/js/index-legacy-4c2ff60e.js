!function(){var e=document.createElement("style");e.innerHTML=".image-wrap[data-v-bb02bba6]{display:flex;justify-content:flex-start;width:9.2rem}.com-bank-card-info .field-title .sub-title[data-v-bb02bba6]{font-size:.34667rem;color:#99a9c0}.page-bank-card[data-v-7a52b3b4] .com-card-wrap .body{padding:0}.page-bank-card .reprise-card .reprise-card-list[data-v-7a52b3b4]{padding:0 .4rem;height:1.41333rem;display:flex;justify-content:space-between;align-items:center}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item[data-v-7a52b3b4]{text-align:center;width:2.88rem;height:.8rem;line-height:.8rem;background:#f6f7fc;border-radius:.10667rem;color:#393d46;font-size:.34667rem}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item.selected[data-v-7a52b3b4]{background:rgba(13,110,254,.1);border:1px solid var(--van-primary-color, var(--zaui-brand));color:var(--van-primary-color, var(--zaui-brand))}.page-bank-card .agree[data-v-7a52b3b4]{height:1.41333rem;display:flex;align-items:center;font-size:.37333rem;color:#393d46;background:var(--zaui-global-bg, #f2f5fc);padding:0 .4rem}.page-bank-card .agree .checkbox[data-v-7a52b3b4]{margin-right:.29333rem}.page-bank-card .agree .file[data-v-7a52b3b4]{color:var(--van-primary-color, var(--zaui-brand))}.page-bank-card .footer[data-v-7a52b3b4]{position:static;justify-content:space-between}.page-bank-card .footer .refresh-btn[data-v-7a52b3b4]{width:.93333rem;border:none;color:var(--van-primary-color, var(--zaui-brand));font-size:.4rem;line-height:.37333rem;text-align:center}.page-bank-card .footer .refresh-btn .text[data-v-7a52b3b4]{margin-top:.13333rem;font-size:.32rem}.page-bank-card .footer[data-v-7a52b3b4] .com-share{flex:1;margin-left:.26667rem}.page-bank-card .footer .submit-btn[data-v-7a52b3b4]{flex:1}\n",document.head.appendChild(e),System.register(["./vendor-legacy-e942cbdc.js","./index-legacy-33d8a1e1.js","./index-legacy-fc682c90.js","./bankCard-legacy-47bd951b.js","./useDicData-legacy-dd31e07d.js","./index-legacy-13624c8f.js","./order-legacy-36fc077e.js"],(function(e){"use strict";var a,t,l,n,d,r,o,i,u,c,s,m,p,b,y,v,g,f,k,I,h,E,N,_,T,R,A,V,D,C,S,B,M,x,O,U,j,L,w,P,K,z,F,q,G,W,H,Y,$,J,Q,Z,X,ee,ae,te,le,ne;return{setters:[function(e){a=e.h,t=e.r,l=e.x,n=e.Z,d=e.l,r=e.y,o=e.m,i=e.A,u=e.s,c=e.n,s=e.z,m=e.Q,p=e.a3,b=e.a4,y=e.C,v=e.N,g=e.a8,f=e.j,k=e.k,I=e.E,h=e.J,E=e.I,N=e.F,_=e.T},function(e){T=e.l},function(e){R=e._,A=e.x,V=e.y,D=e.U,C=e.z,S=e.Y,B=e.B,M=e.O,x=e.h,O=e.D,U=e.a,j=e.l,L=e.E,w=e.F,P=e.g,K=e.s,z=e.A,F=e.t,q=e.n,G=e.N,W=e.b},function(e){H=e.B,Y=e.a,$=e.P,J=e.E,Q=e.b,Z=e.c,X=e.d,ee=e.e,ae=e.f},function(e){te=e.u},function(e){le=e._},function(e){ne=e.a}],execute:function(){const de={class:"com-bank-card-info"},re=(e=>(p("data-v-bb02bba6"),e=e(),b(),e))((()=>s("span",{class:"field-title"},[y("银行卡照片 "),s("span",{class:"sub-title"},"(需上传正反两面)")],-1))),oe={class:"image-wrap"};var ie=R(a({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(e,{emit:a}){const p=e,b=te("BANK"),y=t({bankCardType:H.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),v=e=>p.factor&&p.factor[e]&&p.factor[e].isDisplay===S.YES,g=e=>!(!e||2!==e.length)||"请上传银行卡正反面照片",f=l((()=>b.value.map((e=>({label:e.name,value:e.code}))))),k=e=>{B({ossKey:[e],imageType:M.BANK_CARD}).then((e=>{const{data:a,code:t}=e;if("10000"===t&&a&&a.bankCardOcrVO){y.value.bankCardNo=a.bankCardOcrVO.cardNo;const e=f.value.find((e=>e.label===a.bankCardOcrVO.bankName));e&&(y.value.payBank=e.value)}}))};return n((()=>p.modelValue),(e=>{y.value=e}),{immediate:!0}),n(y,(e=>{a("update:modelValue",e)})),(a,t)=>(d(),r("div",de,[v("cardType")?(d(),o(A,{key:0,modelValue:y.value.bankCardType,"onUpdate:modelValue":t[0]||(t[0]=e=>y.value.bankCardType=e),label:"卡片类型",name:"bankCardType","data-source":i(Y),"is-view":""},null,8,["modelValue","data-source"])):u("",!0),v("bankCardNumber")?(d(),o(V,{key:1,modelValue:y.value.bankCardNo,"onUpdate:modelValue":t[1]||(t[1]=e=>y.value.bankCardNo=e),label:"银行卡号",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):u("",!0),v("cardHolder")?(d(),o(V,{key:2,"model-value":e.holderName,label:"持卡人",name:"accountName","is-view":""},null,8,["model-value"])):u("",!0),v("bank")?(d(),o(A,{key:3,modelValue:y.value.payBank,"onUpdate:modelValue":t[2]||(t[2]=e=>y.value.payBank=e),name:"payBank",label:"开户银行","data-source":i(f),required:""},null,8,["modelValue","data-source"])):u("",!0),v("bankCardAttachment")?(d(),o(V,{key:4,label:"银行卡照片",block:"","label-width":"100%",name:"images",rules:[{validator:g}]},{label:c((()=>[re])),input:c((()=>[s("div",oe,[m(C,{modelValue:y.value.images,"onUpdate:modelValue":t[3]||(t[3]=e=>y.value.images=e),"max-count":2,"upload-type":i(D).BANK_CARD,onOnUploadFinished:k},null,8,["modelValue","upload-type"])])])),_:1},8,["rules"])):u("",!0),v("bankPreMobile")?(d(),o(V,{key:5,modelValue:y.value.mobile,"onUpdate:modelValue":t[4]||(t[4]=e=>y.value.mobile=e),label:"预留手机号",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):u("",!0)]))}}),[["__scopeId","data-v-bb02bba6"]]);const ue=e=>(p("data-v-7a52b3b4"),e=e(),b(),e),ce={class:"page-bank-card"},se={class:"reprise-card-list"},me=["onClick"],pe={class:"agree"},be=y(" 投保人阅读并接受 "),ye={class:"footer-button footer"},ve=ue((()=>s("div",{class:"text"},"刷新",-1))),ge=y("分享"),fe=y("下一步"),ke=a({setup(e){const a=v(),n=g(),{orderNo:p="2022072710380711215",agentCode:b="D1234567-1",tenantId:y="9991000007",templateId:R=1,isShare:D,insurerCode:C="kunlunhealth"}=a.query,B={bankCardType:H.DEBIT};let M={};const Y=t(""),te=t({payMethod:$.REAL_TIME,bankData:{...B,imagesId:[],images:[]}}),de=t({payMethod:$.REAL_TIME,expiryMethod:J.AUTOMATIC_PADDING,bankData:{...B,imagesId:[],images:[]},payInfoType:Q.FIRST_SAME}),re=t({bankData:{...B,imagesId:[],images:[]}}),oe=t(Q.FIRST_SAME),ue=t({}),ke=t(!1),Ie=t(),he=t(),Ee=t(),Ne=t({}),_e=(e,a)=>ue.value&&ue.value[a]&&ue.value[a][e]&&ue.value[a][e].isDisplay===S.YES,Te=()=>{P({orderNo:p,saleUserId:b,tenantId:y}).then((e=>{const{code:t,data:l}=e;"10000"===t&&([ne.PENDING,ne.PAYMENT_FAILED,ne.UNDER_WRITING_SUCCESS].includes(l.orderStatus)?Promise.all([Ie.value?.validate(),he.value?.validate(),Ee.value?.validate()]).then((e=>{if(!ke.value)return void _.fail("请勾选同意银行转账授权");const t=[{...e[0],id:te.value.id,paymentType:ae.FIRST_TERM},{...e[1],id:de.value.id,paymentType:ae.RENEW_TERM},{...e[2],id:re.value.id,paymentType:ae.REPRISE,payInfoType:oe.value}],l=[{category:z.OBVERSE_BANK_CARD,name:"首期签约银行卡正面",objectType:F.INIT_SIGN,type:"png",uri:e[0].images[0],id:te.value.bankData.imagesId[0]},{category:z.REVERSE_BANK_CARD,name:"首期签约银行卡背面",objectType:F.INIT_SIGN,type:"png",uri:e[0].images[1],id:te.value.bankData.imagesId[1]}];de.value.payInfoType===Q.OTHER&&(l.push({category:z.OBVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:F.RENEWAL_SIGN,type:"png",uri:e[1].images[0],id:de.value.bankData.imagesId[0]}),l.push({category:z.REVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:F.RENEWAL_SIGN,type:"png",uri:e[1].images[1],id:de.value.bankData.imagesId[1]})),oe.value===Q.OTHER&&(l.push({category:z.OBVERSE_BANK_CARD,name:"年金签约银行卡正面",objectType:F.ANNUAL_SIGN,type:"png",uri:e[2].images[0],id:re.value.bankData.imagesId[0]}),l.push({category:z.REVERSE_BANK_CARD,name:"年金签约银行卡背面",objectType:F.ANNUAL_SIGN,type:"png",uri:e[2].images[1],id:re.value.bankData.imagesId[1]})),q({...M,pageCode:"payInfo",tenantOrderPayInfoList:t,extInfo:{...M.extInfo,templateId:R,pageCode:"payInfo",shareFlag:D?"Y":"N",buttonCode:G.payInfo},operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:l}).then((e=>{const{code:t,data:l}=e;"10000"===t&&l.success&&n.push({path:W[l.pageAction.data.nextPageCode],query:a.query})}))})):K("paymentResult",a.query))}))},Re=l((()=>{const e={...a.query,isShare:1,sharePageCode:"payInfo"};return`${window.location.origin}/phoneVerify?${T.stringify(e)}`})),Ae=(e=!1)=>{P({orderNo:p,saleUserId:b,tenantId:y}).then((a=>{const{code:t,data:l}=a;"10000"===t&&l&&(M=l,Y.value=l.tenantOrderHolder.name,l.tenantOrderPayInfoList.forEach((e=>{e.paymentType===ae.FIRST_TERM?(te.value=e,te.value.bankData={...B,...e,images:[],imagesId:[]}):e.paymentType===ae.RENEW_TERM?(de.value=e,de.value.bankData={...e,images:[],imagesId:[]}):e.paymentType===ae.REPRISE&&(re.value=e,re.value.bankData={...e,images:[],imagesId:[]},oe.value=e.payInfoType)})),l.tenantOrderAttachmentList.forEach((e=>{e.objectType===F.INIT_SIGN?(e.category===z.OBVERSE_BANK_CARD&&(te.value.bankData.images[0]=e.uri,te.value.bankData.imagesId[0]=e.id),e.category===z.REVERSE_BANK_CARD&&(te.value.bankData.images[1]=e.uri,te.value.bankData.imagesId[1]=e.id)):e.objectType===F.RENEWAL_SIGN?(e.category===z.OBVERSE_BANK_CARD&&(de.value.bankData.images[0]=e.uri,de.value.bankData.imagesId[0]=e.id),e.category===z.REVERSE_BANK_CARD&&(de.value.bankData.images[1]=e.uri,de.value.bankData.imagesId[1]=e.id)):e.objectType===F.ANNUAL_SIGN&&(e.category===z.OBVERSE_BANK_CARD&&(re.value.bankData.images[0]=e.uri,re.value.bankData.imagesId[0]=e.id),e.category===z.REVERSE_BANK_CARD&&(re.value.bankData.images[1]=e.uri,re.value.bankData.imagesId[1]=e.id))})),e&&(l.tenantOrderPayInfoList.find((e=>e.paymentType===ae.FIRST_TERM&&e.bankCardNo))||_("用户未完成银行卡信息填写")))}))},Ve=()=>{Ae(!0)};return f((()=>{w({insureCode:C,objectType:4,tenantId:y,orderNo:p}).then((({code:e,data:a})=>{"10000"===e&&(Ne.value=a)})),x({pageCode:"payInfo",templateId:R}).then((e=>{const{code:a,data:t}=e;if("10000"===a){const e={};t.productInsureFactorList.forEach((a=>{e[a.moduleType]||(e[a.moduleType]={}),e[a.moduleType][a.code]=a})),ue.value=e}})),Ae()})),(e,a)=>{const t=k("van-switch"),l=k("van-checkbox"),n=k("ProSvg"),p=k("van-button"),b=k("ProPageWrap");return d(),o(b,null,{default:c((()=>[s("div",ce,[m(U,{title:"首期支付"},{default:c((()=>[m(O,{ref_key:"form1",ref:Ie},{default:c((()=>[_e("paymentMethod","INIT")?(d(),o(A,{key:0,modelValue:te.value.payMethod,"onUpdate:modelValue":a[0]||(a[0]=e=>te.value.payMethod=e),name:"payMethod",required:"",label:"支付方式","is-link":"",placeholder:"请选择","data-source":i(Z)},null,8,["modelValue","data-source"])):u("",!0),m(ie,{modelValue:te.value.bankData,"onUpdate:modelValue":a[1]||(a[1]=e=>te.value.bankData=e),"holder-name":Y.value,factor:ue.value.INIT},null,8,["modelValue","holder-name","factor"])])),_:1},512)])),_:1}),m(U,{title:"续期支付"},{default:c((()=>[m(O,{ref_key:"form2",ref:he},{default:c((()=>[_e("sameAsInit","RENEWAL")?(d(),o(V,{key:0,label:"同首期",name:"payInfoType"},{input:c((()=>[m(t,{modelValue:de.value.payInfoType,"onUpdate:modelValue":a[2]||(a[2]=e=>de.value.payInfoType=e),size:"22","active-value":i(Q).FIRST_SAME,"inactive-value":i(Q).OTHER},null,8,["modelValue","active-value","inactive-value"])])),_:1})):u("",!0),_e("paymentMethod","RENEWAL")?(d(),o(A,{key:1,modelValue:de.value.payMethod,"onUpdate:modelValue":a[3]||(a[3]=e=>de.value.payMethod=e),name:"payMethod",label:"支付方式","is-link":"",placeholder:"请选择","data-source":i(Z),required:""},null,8,["modelValue","data-source"])):u("",!0),_e("overduePayment","RENEWAL")?(d(),o(A,{key:2,modelValue:de.value.expiryMethod,"onUpdate:modelValue":a[4]||(a[4]=e=>de.value.expiryMethod=e),name:"expiryMethod",label:"保费逾期未支付","is-link":"",placeholder:"请选择","data-source":i(X),required:"","label-width":"200"},null,8,["modelValue","data-source"])):u("",!0),de.value.payInfoType!==i(Q).FIRST_SAME?(d(),o(ie,{key:3,modelValue:de.value.bankData,"onUpdate:modelValue":a[5]||(a[5]=e=>de.value.bankData=e),"holder-name":Y.value,factor:ue.value.RENEWAL},null,8,["modelValue","holder-name","factor"])):u("",!0)])),_:1},512)])),_:1}),m(U,{title:"年金领取银行卡",class:"reprise-card","show-divider":!1},{default:c((()=>[s("div",se,[(d(!0),r(N,null,I(i(ee),((e,a)=>(d(),r("div",{key:a,class:h(["reprise-card-item",{selected:oe.value===e.value}]),onClick:a=>{return t=e.value,void(oe.value=t);var t}},E(e.label),11,me)))),128))]),m(O,{ref_key:"form3",ref:Ee},{default:c((()=>[oe.value===i(Q).OTHER?(d(),o(ie,{key:0,modelValue:re.value.bankData,"onUpdate:modelValue":a[6]||(a[6]=e=>re.value.bankData=e),"holder-name":Y.value,factor:ue.value.ANNUITY},null,8,["modelValue","holder-name","factor"])):u("",!0)])),_:1},512)])),_:1}),s("div",pe,[m(l,{modelValue:ke.value,"onUpdate:modelValue":a[7]||(a[7]=e=>ke.value=e),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),be,m(L,{class:"file",title:"《银行转账授权》",content:Ne.value.materialContent,type:i(j)(Ne.value.materialContent,Ne.value.materialSource+"")},null,8,["content","type"])]),s("div",ye,[i(D)?u("",!0):(d(),r("div",{key:0,class:"refresh-btn",onClick:Ve},[s("div",null,[m(n,{name:"refresh"})]),ve])),i(D)?u("",!0):(d(),o(le,{key:1,title:"邀请您填写银行卡信息",desc:"邀请您填写银行卡信息",link:i(Re),"-":""},{default:c((()=>[m(p,{plain:"",type:"primary"},{default:c((()=>[ge])),_:1})])),_:1},8,["link"])),m(p,{type:"primary",class:"submit-btn",onClick:Te},{default:c((()=>[fe])),_:1})])])])),_:1})}}});e("default",R(ke,[["__scopeId","data-v-7a52b3b4"]]))}}}))}();
