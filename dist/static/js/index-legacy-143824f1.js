!function(){var e=document.createElement("style");e.innerHTML=".com-bank-card-info .field-title .sub-title[data-v-5f24f9c5]{font-size:.34667rem;color:#99a9c0}.page-bank-card[data-v-9a3500fa] .com-card-wrap .body{padding:0}.page-bank-card .reprise-card .reprise-card-list[data-v-9a3500fa]{padding:0 .4rem;height:1.41333rem;display:flex;justify-content:space-between;align-items:center}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item[data-v-9a3500fa]{text-align:center;width:2.88rem;height:.8rem;line-height:.8rem;background:#f6f7fc;border-radius:.10667rem;color:#393d46;font-size:.34667rem}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item.selected[data-v-9a3500fa]{background:rgba(13,110,254,.1);border:1px solid #0d6efe;color:#0d6efe}.page-bank-card .agree[data-v-9a3500fa]{height:1.41333rem;display:flex;align-items:center;font-size:.37333rem;color:#393d46;background:#f2f5fc;padding:0 .4rem}.page-bank-card .agree .checkbox[data-v-9a3500fa]{margin-right:.29333rem}.page-bank-card .agree .file[data-v-9a3500fa]{color:#0d6efe}.page-bank-card .footer[data-v-9a3500fa]{position:static}\n",document.head.appendChild(e),System.register(["./vendor-legacy-dce51240.js","./index-legacy-548319ae.js","./utils-legacy-20e4723c.js","./useDicData-legacy-e58d80a5.js","./index-legacy-e1413952.js"],(function(e){"use strict";var a,l,t,d,n,o,u,r,i,c,m,s,p,v,y,b,E,f,g,I,R,k,T,_,A,h,N,D,V,C,S,M,B,O,L,P,U,j,x,H,K,G;return{setters:[function(e){a=e.g,l=e.E,t=e.X,d=e.y,n=e.j,o=e.n,u=e.k,r=e.A,i=e.t,c=e.m,m=e.p,s=e.a1,p=e.a2,v=e.z,y=e.C,b=e.Q,E=e.aj,f=e.h,g=e.r,I=e.G,R=e.F,k=e.T,T=e.L,_=e.J},function(e){A=e._,h=e.Y,N=e.h,D=e.G,V=e.U,C=e.m,S=e.H,M=e.I,B=e.J,O=e.l,L=e.K,P=e.P},function(e){U=e.c},function(e){j=e.u},function(e){x=e.c,H=e.a,K=e.d,G=e.n}],execute:function(){var W=(e=>(e[e.REAL_TIME=1]="REAL_TIME",e[e.BATCH=2]="BATCH",e))(W||{});const F=[{value:1,label:"实时转账"},{value:2,label:"批量扣款"}];U(F);var w=(e=>(e[e.DEBIT=1]="DEBIT",e[e.CREDIT=2]="CREDIT",e[e.PRE_PAY=3]="PRE_PAY",e[e.PRE_CREDIT=4]="PRE_CREDIT",e[e.OTHER=5]="OTHER",e))(w||{});const q=[{value:1,label:"借记卡"},{value:2,label:"贷记卡"},{value:3,label:"预付费卡"},{value:4,label:"准贷记卡"},{value:5,label:"其他"}];U(q);var z=(e=>(e[e.FIRST_TERM=1]="FIRST_TERM",e[e.RENEW_TERM=2]="RENEW_TERM",e[e.REPRISE=3]="REPRISE",e[e.OTHER=4]="OTHER",e))(z||{});const Y=[{value:1,label:"首期支付"},{value:2,label:"续期支付"},{value:3,label:"年金领取"},{value:4,label:"其他"}];U(Y);var J=(e=>(e[e.FIRST_SAME=1]="FIRST_SAME",e[e.RENEW_SAME=2]="RENEW_SAME",e[e.OTHER=3]="OTHER",e))(J||{});const Q=[{value:1,label:"同首期"},{value:2,label:"同续期"},{value:3,label:"其他"}];U(Y);var X=(e=>(e[e.AUTOMATIC_PADDING=1]="AUTOMATIC_PADDING",e[e.CANCEL=2]="CANCEL",e))(X||{});const Z=[{value:1,label:"自动垫付"},{value:2,label:"中止合同"}];U(Z);const $={class:"com-bank-card-info"},ee=(e=>(s("data-v-5f24f9c5"),e=e(),p(),e))((()=>v("span",{class:"field-title"},[y("银行卡照片 "),v("span",{class:"sub-title"},"(需上传正反两面)")],-1)));var ae=A(a({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(e,{emit:a}){const s=e,p=j("BANK"),v=l({bankCardType:w.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),y=e=>s.factor&&s.factor[e]&&s.factor[e].isDisplay===h.YES,b=e=>!(!e||2!==e.length)||"请上传银行卡正反面照片";t((()=>s.modelValue),(e=>{v.value=e}),{immediate:!0}),t(v,(e=>{a("update:modelValue",e)}));const E=d((()=>p.value.map((e=>({label:e.name,value:e.code})))));return(a,l)=>(n(),o("div",$,[y("cardType")?(n(),u(N,{key:0,modelValue:v.value.bankCardType,"onUpdate:modelValue":l[0]||(l[0]=e=>v.value.bankCardType=e),label:"卡片类型",name:"bankCardType","data-source":r(q),"is-view":""},null,8,["modelValue","data-source"])):i("",!0),y("bankCardNumber")?(n(),u(D,{key:1,modelValue:v.value.bankCardNo,"onUpdate:modelValue":l[1]||(l[1]=e=>v.value.bankCardNo=e),label:"银行卡号",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):i("",!0),y("cardHolder")?(n(),u(D,{key:2,"model-value":e.holderName,label:"持卡人",name:"accountName","is-view":""},null,8,["model-value"])):i("",!0),y("bank")?(n(),u(N,{key:3,modelValue:v.value.payBank,"onUpdate:modelValue":l[2]||(l[2]=e=>v.value.payBank=e),name:"payBank",label:"开户银行","data-source":r(E),required:""},null,8,["modelValue","data-source"])):i("",!0),y("bankCardAttachment")?(n(),u(D,{key:4,label:"银行卡照片",block:"","label-width":"100%",name:"images",rules:[{validator:b}]},{label:c((()=>[ee])),input:c((()=>[m(C,{modelValue:v.value.images,"onUpdate:modelValue":l[3]||(l[3]=e=>v.value.images=e),"max-count":2,"upload-type":r(V).BANK_CARD},null,8,["modelValue","upload-type"])])),_:1},8,["rules"])):i("",!0),y("bankPreMobile")?(n(),u(D,{key:5,modelValue:v.value.mobile,"onUpdate:modelValue":l[4]||(l[4]=e=>v.value.mobile=e),label:"预留手机号",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):i("",!0)]))}}),[["__scopeId","data-v-5f24f9c5"]]);const le={class:"page-bank-card"},te={class:"reprise-card-list"},de=["onClick"],ne={class:"agree"},oe=y(" 投保人阅读并接受 "),ue={class:"footer-button footer"},re=y("下一步"),ie=a({setup(e){const a={1:"pdf",4:"picture",2:"richText",3:"link"},t=b(),d=E(),{orderNo:s="2022072710380711215",agentCode:p="D1234567-1",tenantId:y="9991000007",templateId:A=1,insureCode:V="kunlunhealth"}=t.query,C={bankCardType:w.DEBIT};let U={};const j=l(""),q=l({payMethod:W.REAL_TIME,bankData:{...C,imagesId:[],images:[]}}),Y=l({payMethod:W.REAL_TIME,expiryMethod:X.AUTOMATIC_PADDING,bankData:{...C,imagesId:[],images:[]},payInfoType:J.FIRST_SAME}),$=l({bankData:{...C,imagesId:[],images:[]}}),ee=l(J.FIRST_SAME),ie=l({}),ce=l(!1),me=l(),se=l(),pe=l(),ve=l({}),ye=l(1),be=(e,a)=>ie.value&&ie.value[a]&&ie.value[a][e]&&ie.value[a][e].isDisplay===h.YES,Ee=()=>{var e,a,l;ce.value?Promise.all([null===(e=me.value)||void 0===e?void 0:e.validate(),null===(a=se.value)||void 0===a?void 0:a.validate(),null===(l=pe.value)||void 0===l?void 0:l.validate()]).then((e=>{const a=[{...e[0],id:q.value.id,paymentType:z.FIRST_TERM},{...e[1],id:Y.value.id,paymentType:z.RENEW_TERM},{...e[2],id:$.value.id,paymentType:z.REPRISE,payInfoType:ee.value}],l=[{category:M.OBVERSE_BANK_CARD,name:"首期签约银行卡正面",objectType:S.INIT_SIGN,type:"png",uri:e[0].images[0],id:q.value.bankData.imagesId[0]},{category:M.REVERSE_BANK_CARD,name:"首期签约银行卡背面",objectType:S.INIT_SIGN,type:"png",uri:e[0].images[1],id:q.value.bankData.imagesId[1]}];Y.value.payInfoType===J.OTHER&&(l.push({category:M.OBVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:S.RENEWAL_SIGN,type:"png",uri:e[1].images[0],id:Y.value.bankData.imagesId[0]}),l.push({category:M.REVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:S.RENEWAL_SIGN,type:"png",uri:e[1].images[1],id:Y.value.bankData.imagesId[1]})),ee.value===J.OTHER&&(l.push({category:M.OBVERSE_BANK_CARD,name:"年金签约银行卡正面",objectType:S.ANNUAL_SIGN,type:"png",uri:e[2].images[0],id:$.value.bankData.imagesId[0]}),l.push({category:M.REVERSE_BANK_CARD,name:"年金签约银行卡背面",objectType:S.ANNUAL_SIGN,type:"png",uri:e[2].images[1],id:$.value.bankData.imagesId[1]})),G({...U,pageCode:"payInfo",tenantOrderPayInfoList:a,extInfo:{...U.extInfo,templateId:A,pageCode:"payInfo"},operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:l}).then((e=>{const{code:a,data:l}=e;"10000"===a&&l.success&&d.push({path:P[l.pageAction.data.nextPageCode],query:t.query})}))})):k.fail("请勾选同意银行转账授权")};return f((()=>{K({insureCode:V,objectType:4,tenantId:y,orderNo:s}).then((({code:e,data:a})=>{"10000"===e&&(ve.value=a,1===a.materialSource?-1!==a.materialContent.indexOf(".pdf")?ye.value=1:ye.value=4:ye.value=a.materialSource)})),x({pageCode:"payInfo",templateId:A}).then((e=>{const{code:a,data:l}=e;if("10000"===a){const e={};l.productInsureFactorList.forEach((a=>{e[a.moduleType]||(e[a.moduleType]={}),e[a.moduleType][a.code]=a})),ie.value=e}})),H({orderNo:s,saleUserId:p,tenantId:y}).then((e=>{const{code:a,data:l}=e;"10000"===a&&l&&(U=l,j.value=l.tenantOrderHolder.name,l.tenantOrderPayInfoList.forEach((e=>{e.paymentType===z.FIRST_TERM?(q.value=e,q.value.bankData={...C,...e,images:[],imagesId:[]}):e.paymentType===z.RENEW_TERM?(Y.value=e,Y.value.bankData={...e,images:[],imagesId:[]}):e.paymentType===z.REPRISE&&($.value=e,$.value.bankData={...e,images:[],imagesId:[]},ee.value=e.payInfoType)})),l.tenantOrderAttachmentList.forEach((e=>{e.objectType===S.INIT_SIGN?(e.category===M.OBVERSE_BANK_CARD&&(q.value.bankData.images[0]=e.uri,q.value.bankData.imagesId[0]=e.id),e.category===M.REVERSE_BANK_CARD&&(q.value.bankData.images[1]=e.uri,q.value.bankData.imagesId[1]=e.id)):e.objectType===S.RENEWAL_SIGN?(e.category===M.OBVERSE_BANK_CARD&&(Y.value.bankData.images[0]=e.uri,Y.value.bankData.imagesId[0]=e.id),e.category===M.REVERSE_BANK_CARD&&(Y.value.bankData.images[1]=e.uri,Y.value.bankData.imagesId[1]=e.id)):e.objectType===S.ANNUAL_SIGN&&(e.category===M.OBVERSE_BANK_CARD&&($.value.bankData.images[0]=e.uri,$.value.bankData.imagesId[0]=e.id),e.category===M.REVERSE_BANK_CARD&&($.value.bankData.images[1]=e.uri,$.value.bankData.imagesId[1]=e.id))})))}))})),(e,l)=>{const t=g("van-switch"),d=g("van-checkbox"),s=g("van-button"),p=g("ProPageWrap");return n(),u(p,null,{default:c((()=>[v("div",le,[m(O,{title:"首期支付"},{default:c((()=>[m(B,{ref_key:"form1",ref:me},{default:c((()=>[be("paymentMethod","INIT")?(n(),u(N,{key:0,modelValue:q.value.payMethod,"onUpdate:modelValue":l[0]||(l[0]=e=>q.value.payMethod=e),name:"payMethod",required:"",label:"支付方式","is-link":"",placeholder:"请选择","data-source":r(F)},null,8,["modelValue","data-source"])):i("",!0),m(ae,{modelValue:q.value.bankData,"onUpdate:modelValue":l[1]||(l[1]=e=>q.value.bankData=e),"holder-name":j.value,factor:ie.value.INIT},null,8,["modelValue","holder-name","factor"])])),_:1},512)])),_:1}),m(O,{title:"续期支付"},{default:c((()=>[m(B,{ref_key:"form2",ref:se},{default:c((()=>[be("sameAsInit","RENEWAL")?(n(),u(D,{key:0,label:"同首期",name:"payInfoType"},{input:c((()=>[m(t,{modelValue:Y.value.payInfoType,"onUpdate:modelValue":l[2]||(l[2]=e=>Y.value.payInfoType=e),size:"22","active-value":r(J).FIRST_SAME,"inactive-value":r(J).OTHER},null,8,["modelValue","active-value","inactive-value"])])),_:1})):i("",!0),be("paymentMethod","RENEWAL")?(n(),u(N,{key:1,modelValue:Y.value.payMethod,"onUpdate:modelValue":l[3]||(l[3]=e=>Y.value.payMethod=e),name:"payMethod",label:"支付方式","is-link":"",placeholder:"请选择","data-source":r(F),required:""},null,8,["modelValue","data-source"])):i("",!0),be("overduePayment","RENEWAL")?(n(),u(N,{key:2,modelValue:Y.value.expiryMethod,"onUpdate:modelValue":l[4]||(l[4]=e=>Y.value.expiryMethod=e),name:"expiryMethod",label:"保费逾期未支付","is-link":"",placeholder:"请选择","data-source":r(Z),required:"","label-width":"200"},null,8,["modelValue","data-source"])):i("",!0),Y.value.payInfoType!==r(J).FIRST_SAME?(n(),u(ae,{key:3,modelValue:Y.value.bankData,"onUpdate:modelValue":l[5]||(l[5]=e=>Y.value.bankData=e),"holder-name":j.value,factor:ie.value.RENEWAL},null,8,["modelValue","holder-name","factor"])):i("",!0)])),_:1},512)])),_:1}),m(O,{title:"年金领取银行卡",class:"reprise-card","show-divider":!1},{default:c((()=>[v("div",te,[(n(!0),o(R,null,I(r(Q),((e,a)=>(n(),o("div",{key:a,class:T(["reprise-card-item",{selected:ee.value===e.value}]),onClick:a=>{return l=e.value,void(ee.value=l);var l}},_(e.label),11,de)))),128))]),m(B,{ref_key:"form3",ref:pe},{default:c((()=>[ee.value===r(J).OTHER?(n(),u(ae,{key:0,modelValue:$.value.bankData,"onUpdate:modelValue":l[6]||(l[6]=e=>$.value.bankData=e),"holder-name":j.value,factor:ie.value.ANNUITY},null,8,["modelValue","holder-name","factor"])):i("",!0)])),_:1},512)])),_:1}),v("div",ne,[m(d,{modelValue:ce.value,"onUpdate:modelValue":l[7]||(l[7]=e=>ce.value=e),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),oe,m(L,{class:"file",title:"《银行转账授权》",content:ve.value.materialContent,type:a[ye.value]},null,8,["content","type"])]),v("div",ue,[m(s,{type:"primary",onClick:Ee},{default:c((()=>[re])),_:1})])])])),_:1})}}});e("default",A(ie,[["__scopeId","data-v-9a3500fa"]]))}}}))}();
