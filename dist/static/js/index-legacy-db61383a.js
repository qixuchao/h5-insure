!function(){var e=document.createElement("style");e.innerHTML=".com-bank-card-info .field-title .sub-title[data-v-5f24f9c5]{font-size:.34667rem;color:#99a9c0}.page-bank-card[data-v-73c67a3f] .com-card-wrap .body{padding:0}.page-bank-card .reprise-card .reprise-card-list[data-v-73c67a3f]{padding:0 .4rem;height:1.41333rem;display:flex;justify-content:space-between;align-items:center}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item[data-v-73c67a3f]{text-align:center;width:2.88rem;height:.8rem;line-height:.8rem;background:#f6f7fc;border-radius:.10667rem;color:#393d46;font-size:.34667rem}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item.selected[data-v-73c67a3f]{background:rgba(13,110,254,.1);border:1px solid #0d6efe;color:#0d6efe}.page-bank-card .agree[data-v-73c67a3f]{height:1.41333rem;display:flex;align-items:center;font-size:.37333rem;color:#393d46;background:#f2f5fc;padding:0 .4rem}.page-bank-card .agree .checkbox[data-v-73c67a3f]{margin-right:.29333rem}.page-bank-card .agree .file[data-v-73c67a3f]{color:#0d6efe}.page-bank-card .footer[data-v-73c67a3f]{position:static}\n",document.head.appendChild(e),System.register(["./vendor-legacy-dce51240.js","./index-legacy-274f6e79.js","./utils-legacy-20e4723c.js","./useDicData-legacy-1e23279f.js","./index-legacy-db22465f.js","./index-legacy-006fbe12.js"],(function(e){"use strict";var a,l,t,d,n,o,u,r,i,c,s,m,p,v,y,b,E,f,g,I,R,k,T,_,A,h,N,D,V,C,S,M,B,O,P,L,U,j,x,H,K;return{setters:[function(e){a=e.g,l=e.E,t=e.X,d=e.y,n=e.j,o=e.n,u=e.k,r=e.A,i=e.t,c=e.m,s=e.p,m=e.a1,p=e.a2,v=e.z,y=e.C,b=e.Q,E=e.aj,f=e.h,g=e.r,I=e.G,R=e.F,k=e.T,T=e.L,_=e.J},function(e){A=e._,h=e.Y,N=e.h,D=e.H,V=e.U,C=e.m,S=e.I,M=e.J,B=e.K,O=e.l,P=e.P},function(e){L=e.c},function(e){U=e.u},function(e){j=e.P},function(e){x=e.c,H=e.a,K=e.n}],execute:function(){var W=(e=>(e[e.REAL_TIME=1]="REAL_TIME",e[e.BATCH=2]="BATCH",e))(W||{});const G=[{value:1,label:"实时转账"},{value:2,label:"批量扣款"}];L(G);var F=(e=>(e[e.DEBIT=1]="DEBIT",e[e.CREDIT=2]="CREDIT",e[e.PRE_PAY=3]="PRE_PAY",e[e.PRE_CREDIT=4]="PRE_CREDIT",e[e.OTHER=5]="OTHER",e))(F||{});const w=[{value:1,label:"借记卡"},{value:2,label:"贷记卡"},{value:3,label:"预付费卡"},{value:4,label:"准贷记卡"},{value:5,label:"其他"}];L(w);var q=(e=>(e[e.FIRST_TERM=1]="FIRST_TERM",e[e.RENEW_TERM=2]="RENEW_TERM",e[e.REPRISE=3]="REPRISE",e[e.OTHER=4]="OTHER",e))(q||{});const z=[{value:1,label:"首期支付"},{value:2,label:"续期支付"},{value:3,label:"年金领取"},{value:4,label:"其他"}];L(z);var Y=(e=>(e[e.FIRST_SAME=1]="FIRST_SAME",e[e.RENEW_SAME=2]="RENEW_SAME",e[e.OTHER=3]="OTHER",e))(Y||{});const J=[{value:1,label:"同首期"},{value:2,label:"同续期"},{value:3,label:"其他"}];L(z);var Q=(e=>(e[e.AUTOMATIC_PADDING=1]="AUTOMATIC_PADDING",e[e.CANCEL=2]="CANCEL",e))(Q||{});const X=[{value:1,label:"自动垫付"},{value:2,label:"中止合同"}];L(X);const Z={class:"com-bank-card-info"},$=(e=>(m("data-v-5f24f9c5"),e=e(),p(),e))((()=>v("span",{class:"field-title"},[y("银行卡照片 "),v("span",{class:"sub-title"},"(需上传正反两面)")],-1)));var ee=A(a({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(e,{emit:a}){const m=e,p=U("BANK"),v=l({bankCardType:F.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),y=e=>m.factor&&m.factor[e]&&m.factor[e].isDisplay===h.YES,b=e=>!(!e||2!==e.length)||"请上传银行卡正反面照片";t((()=>m.modelValue),(e=>{v.value=e}),{immediate:!0}),t(v,(e=>{a("update:modelValue",e)}));const E=d((()=>p.value.map((e=>({label:e.name,value:e.code})))));return(a,l)=>(n(),o("div",Z,[y("cardType")?(n(),u(N,{key:0,modelValue:v.value.bankCardType,"onUpdate:modelValue":l[0]||(l[0]=e=>v.value.bankCardType=e),label:"卡片类型",name:"bankCardType","data-source":r(w),"is-view":""},null,8,["modelValue","data-source"])):i("",!0),y("bankCardNumber")?(n(),u(D,{key:1,modelValue:v.value.bankCardNo,"onUpdate:modelValue":l[1]||(l[1]=e=>v.value.bankCardNo=e),label:"银行卡号",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):i("",!0),y("cardHolder")?(n(),u(D,{key:2,"model-value":e.holderName,label:"持卡人",name:"accountName","is-view":""},null,8,["model-value"])):i("",!0),y("bank")?(n(),u(N,{key:3,modelValue:v.value.payBank,"onUpdate:modelValue":l[2]||(l[2]=e=>v.value.payBank=e),name:"payBank",label:"开户银行","data-source":r(E),required:""},null,8,["modelValue","data-source"])):i("",!0),y("bankCardAttachment")?(n(),u(D,{key:4,label:"银行卡照片",block:"","label-width":"100%",name:"images",rules:[{validator:b}]},{label:c((()=>[$])),input:c((()=>[s(C,{modelValue:v.value.images,"onUpdate:modelValue":l[3]||(l[3]=e=>v.value.images=e),"max-count":2,"upload-type":r(V).BANK_CARD},null,8,["modelValue","upload-type"])])),_:1},8,["rules"])):i("",!0),y("bankPreMobile")?(n(),u(D,{key:5,modelValue:v.value.mobile,"onUpdate:modelValue":l[4]||(l[4]=e=>v.value.mobile=e),label:"预留手机号",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):i("",!0)]))}}),[["__scopeId","data-v-5f24f9c5"]]);const ae={class:"page-bank-card"},le={class:"reprise-card-list"},te=["onClick"],de={class:"agree"},ne=y(" 投保人阅读并接受 "),oe={class:"footer-button footer"},ue=y("下一步"),re=a({setup(e){const a=b(),t=E(),{orderNo:d="2022072710380711215",agentCode:m="D1234567-1",tenantId:p="9991000007",templateId:y=1}=a.query,A={bankCardType:F.DEBIT};let V={};const C=l(""),L=l({payMethod:W.REAL_TIME,bankData:{...A,imagesId:[],images:[]}}),U=l({payMethod:W.REAL_TIME,expiryMethod:Q.AUTOMATIC_PADDING,bankData:{...A,imagesId:[],images:[]},payInfoType:Y.FIRST_SAME}),w=l({bankData:{...A,imagesId:[],images:[]}}),z=l(Y.FIRST_SAME),Z=l({}),$=l(!1),re=l(),ie=l(),ce=l(),se=(e,a)=>Z.value&&Z.value[a]&&Z.value[a][e]&&Z.value[a][e].isDisplay===h.YES,me=()=>{var e,l,d;$.value?Promise.all([null===(e=re.value)||void 0===e?void 0:e.validate(),null===(l=ie.value)||void 0===l?void 0:l.validate(),null===(d=ce.value)||void 0===d?void 0:d.validate()]).then((e=>{const l=[{...e[0],id:L.value.id,paymentType:q.FIRST_TERM},{...e[1],id:U.value.id,paymentType:q.RENEW_TERM},{...e[2],id:w.value.id,paymentType:q.REPRISE,payInfoType:z.value}],d=[{category:M.OBVERSE_BANK_CARD,name:"首期签约银行卡正面",objectType:S.INIT_SIGN,type:"png",uri:e[0].images[0],id:L.value.bankData.imagesId[0]},{category:M.REVERSE_BANK_CARD,name:"首期签约银行卡背面",objectType:S.INIT_SIGN,type:"png",uri:e[0].images[1],id:L.value.bankData.imagesId[1]}];U.value.payInfoType===Y.OTHER&&(d.push({category:M.OBVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:S.RENEWAL_SIGN,type:"png",uri:e[1].images[0],id:U.value.bankData.imagesId[0]}),d.push({category:M.REVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:S.RENEWAL_SIGN,type:"png",uri:e[1].images[1],id:U.value.bankData.imagesId[1]})),z.value===Y.OTHER&&(d.push({category:M.OBVERSE_BANK_CARD,name:"年金签约银行卡正面",objectType:S.ANNUAL_SIGN,type:"png",uri:e[2].images[0],id:w.value.bankData.imagesId[0]}),d.push({category:M.REVERSE_BANK_CARD,name:"年金签约银行卡背面",objectType:S.ANNUAL_SIGN,type:"png",uri:e[2].images[1],id:w.value.bankData.imagesId[1]})),K({...V,pageCode:"payInfo",tenantOrderPayInfoList:l,extInfo:{...V.extInfo,templateId:y,pageCode:"payInfo"},operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:d}).then((e=>{const{code:l,data:d}=e;"10000"===l&&d.success&&t.push({path:P[d.pageAction.data.nextPageCode],query:a.query})}))})):k.fail("请勾选同意银行转账授权")};return f((()=>{x({pageCode:"payInfo",templateId:y}).then((e=>{const{code:a,data:l}=e;if("10000"===a){const e={};l.productInsureFactorList.forEach((a=>{e[a.moduleType]||(e[a.moduleType]={}),e[a.moduleType][a.code]=a})),Z.value=e}})),H({orderNo:d,saleUserId:m,tenantId:p}).then((e=>{const{code:a,data:l}=e;"10000"===a&&l&&(V=l,C.value=l.tenantOrderHolder.name,l.tenantOrderPayInfoList.forEach((e=>{e.paymentType===q.FIRST_TERM?(L.value=e,L.value.bankData={...A,...e,images:[],imagesId:[]}):e.paymentType===q.RENEW_TERM?(U.value=e,U.value.bankData={...e,images:[],imagesId:[]}):e.paymentType===q.REPRISE&&(w.value=e,w.value.bankData={...e,images:[],imagesId:[]},z.value=e.payInfoType)})),l.tenantOrderAttachmentList.forEach((e=>{e.objectType===S.INIT_SIGN?(e.category===M.OBVERSE_BANK_CARD&&(L.value.bankData.images[0]=e.uri,L.value.bankData.imagesId[0]=e.id),e.category===M.REVERSE_BANK_CARD&&(L.value.bankData.images[1]=e.uri,L.value.bankData.imagesId[1]=e.id)):e.objectType===S.RENEWAL_SIGN?(e.category===M.OBVERSE_BANK_CARD&&(U.value.bankData.images[0]=e.uri,U.value.bankData.imagesId[0]=e.id),e.category===M.REVERSE_BANK_CARD&&(U.value.bankData.images[1]=e.uri,U.value.bankData.imagesId[1]=e.id)):e.objectType===S.ANNUAL_SIGN&&(e.category===M.OBVERSE_BANK_CARD&&(w.value.bankData.images[0]=e.uri,w.value.bankData.imagesId[0]=e.id),e.category===M.REVERSE_BANK_CARD&&(w.value.bankData.images[1]=e.uri,w.value.bankData.imagesId[1]=e.id))})))}))})),(e,a)=>{const l=g("van-switch"),t=g("van-checkbox"),d=g("van-button"),m=g("ProPageWrap");return n(),u(m,null,{default:c((()=>[v("div",ae,[s(O,{title:"首期支付"},{default:c((()=>[s(B,{ref_key:"form1",ref:re},{default:c((()=>[se("paymentMethod","INIT")?(n(),u(N,{key:0,modelValue:L.value.payMethod,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value.payMethod=e),name:"payMethod",required:"",label:"支付方式","is-link":"",placeholder:"请选择","data-source":r(G)},null,8,["modelValue","data-source"])):i("",!0),s(ee,{modelValue:L.value.bankData,"onUpdate:modelValue":a[1]||(a[1]=e=>L.value.bankData=e),"holder-name":C.value,factor:Z.value.INIT},null,8,["modelValue","holder-name","factor"])])),_:1},512)])),_:1}),s(O,{title:"续期支付"},{default:c((()=>[s(B,{ref_key:"form2",ref:ie},{default:c((()=>[se("sameAsInit","RENEWAL")?(n(),u(D,{key:0,label:"同首期",name:"payInfoType"},{input:c((()=>[s(l,{modelValue:U.value.payInfoType,"onUpdate:modelValue":a[2]||(a[2]=e=>U.value.payInfoType=e),size:"22","active-value":r(Y).FIRST_SAME,"inactive-value":r(Y).OTHER},null,8,["modelValue","active-value","inactive-value"])])),_:1})):i("",!0),se("paymentMethod","RENEWAL")?(n(),u(N,{key:1,modelValue:U.value.payMethod,"onUpdate:modelValue":a[3]||(a[3]=e=>U.value.payMethod=e),name:"payMethod",label:"支付方式","is-link":"",placeholder:"请选择","data-source":r(G),required:""},null,8,["modelValue","data-source"])):i("",!0),se("overduePayment","RENEWAL")?(n(),u(N,{key:2,modelValue:U.value.expiryMethod,"onUpdate:modelValue":a[4]||(a[4]=e=>U.value.expiryMethod=e),name:"expiryMethod",label:"保费逾期未支付","is-link":"",placeholder:"请选择","data-source":r(X),required:"","label-width":"200"},null,8,["modelValue","data-source"])):i("",!0),U.value.payInfoType!==r(Y).FIRST_SAME?(n(),u(ee,{key:3,modelValue:U.value.bankData,"onUpdate:modelValue":a[5]||(a[5]=e=>U.value.bankData=e),"holder-name":C.value,factor:Z.value.RENEWAL},null,8,["modelValue","holder-name","factor"])):i("",!0)])),_:1},512)])),_:1}),s(O,{title:"年金领取银行卡",class:"reprise-card","show-divider":!1},{default:c((()=>[v("div",le,[(n(!0),o(R,null,I(r(J),((e,a)=>(n(),o("div",{key:a,class:T(["reprise-card-item",{selected:z.value===e.value}]),onClick:a=>{return l=e.value,void(z.value=l);var l}},_(e.label),11,te)))),128))]),s(B,{ref_key:"form3",ref:ce},{default:c((()=>[z.value===r(Y).OTHER?(n(),u(ee,{key:0,modelValue:w.value.bankData,"onUpdate:modelValue":a[6]||(a[6]=e=>w.value.bankData=e),"holder-name":C.value,factor:Z.value.ANNUITY},null,8,["modelValue","holder-name","factor"])):i("",!0)])),_:1},512)])),_:1}),v("div",de,[s(t,{modelValue:$.value,"onUpdate:modelValue":a[7]||(a[7]=e=>$.value=e),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),ne,s(j,{class:"file",title:"《银行转账授权》",url:r("/static/assets/bank.588e555f.pdf")},null,8,["url"])]),v("div",oe,[s(d,{type:"primary",onClick:me},{default:c((()=>[ue])),_:1})])])])),_:1})}}});e("default",A(re,[["__scopeId","data-v-73c67a3f"]]))}}}))}();
