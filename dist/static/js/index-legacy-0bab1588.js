!function(){var e=document.createElement("style");e.innerHTML=".com-bank-card-info .field-title .sub-title[data-v-c2f6ec68]{font-size:.34667rem;color:#99a9c0}.page-bank-card[data-v-50f6f221] .com-card-wrap .body{padding:0}.page-bank-card .reprise-card .reprise-card-list[data-v-50f6f221]{padding:0 .4rem;height:1.41333rem;display:flex;justify-content:space-between;align-items:center}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item[data-v-50f6f221]{text-align:center;width:2.88rem;height:.8rem;line-height:.8rem;background:#f6f7fc;border-radius:.10667rem;color:#393d46;font-size:.34667rem}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item.selected[data-v-50f6f221]{background:rgba(13,110,254,.1);border:1px solid #0d6efe;color:#0d6efe}.page-bank-card .agree[data-v-50f6f221]{height:1.41333rem;display:flex;align-items:center;font-size:.37333rem;color:#393d46;background:#f2f5fc;padding:0 .4rem}.page-bank-card .agree .checkbox[data-v-50f6f221]{margin-right:.29333rem}.page-bank-card .agree .file[data-v-50f6f221]{color:#0d6efe}.page-bank-card .footer[data-v-50f6f221]{position:static;justify-content:space-between}.page-bank-card .footer .refresh-btn[data-v-50f6f221]{width:.93333rem;border:none;color:#0d6efe;font-size:.4rem;line-height:.37333rem;text-align:center}.page-bank-card .footer .refresh-btn .text[data-v-50f6f221]{margin-top:.13333rem;font-size:.32rem}.page-bank-card .footer[data-v-50f6f221] .com-share{flex:1;margin-left:.26667rem}.page-bank-card .footer .submit-btn[data-v-50f6f221]{flex:1}\n",document.head.appendChild(e),System.register(["./vendor-legacy-5d3b395b.js","./index-legacy-622f6483.js","./index-legacy-e6a31d4c.js","./order-legacy-b77d8afe.js","./useDicData-legacy-f3255018.js","./index-legacy-14c4b914.js"],(function(e){"use strict";var a,l,t,d,n,o,r,u,i,s,c,m,p,v,y,f,b,E,g,k,I,R,T,_,h,A,N,D,V,C,S,M,O,B,P,L,x,U,j,K,w,F,H,W,G,q,z;return{setters:[function(e){a=e.g,l=e.E,t=e._,d=e.y,n=e.j,o=e.n,r=e.k,u=e.A,i=e.t,s=e.m,c=e.p,m=e.a4,p=e.a5,v=e.z,y=e.C,f=e.O,b=e.ak,E=e.h,g=e.r,k=e.G,I=e.F,R=e.T,T=e.L,_=e.J},function(e){h=e._,A=e.q},function(e){N=e._,D=e.Y,V=e.h,C=e.U,S=e.V,M=e.m,O=e.W,B=e.X,P=e.w,L=e.Z,x=e.l,U=e.r,j=e.K,K=e.L,w=e.M,F=e.n,H=e.P},function(e){W=e.c,G=e.a},function(e){q=e.u},function(e){z=e.P}],execute:function(){var Y=(e=>(e[e.REAL_TIME=1]="REAL_TIME",e[e.BATCH=2]="BATCH",e))(Y||{});const $=[{value:1,label:"实时转账"},{value:2,label:"批量扣款"}];W($);var J=(e=>(e[e.DEBIT=1]="DEBIT",e[e.CREDIT=2]="CREDIT",e[e.PRE_PAY=3]="PRE_PAY",e[e.PRE_CREDIT=4]="PRE_CREDIT",e[e.OTHER=5]="OTHER",e))(J||{});const X=[{value:1,label:"借记卡"},{value:2,label:"贷记卡"},{value:3,label:"预付费卡"},{value:4,label:"准贷记卡"},{value:5,label:"其他"}];W(X);var Z=(e=>(e[e.FIRST_TERM=1]="FIRST_TERM",e[e.RENEW_TERM=2]="RENEW_TERM",e[e.REPRISE=3]="REPRISE",e[e.OTHER=4]="OTHER",e))(Z||{});const Q=[{value:1,label:"首期支付"},{value:2,label:"续期支付"},{value:3,label:"年金领取"},{value:4,label:"其他"}];W(Q);var ee=(e=>(e[e.FIRST_SAME=1]="FIRST_SAME",e[e.RENEW_SAME=2]="RENEW_SAME",e[e.OTHER=3]="OTHER",e))(ee||{});const ae=[{value:1,label:"同首期"},{value:2,label:"同续期"},{value:3,label:"其他"}];W(Q);var le=(e=>(e[e.AUTOMATIC_PADDING=1]="AUTOMATIC_PADDING",e[e.CANCEL=2]="CANCEL",e))(le||{});const te=[{value:1,label:"自动垫付"},{value:2,label:"中止合同"}];W(te);const de={class:"com-bank-card-info"},ne=(e=>(m("data-v-c2f6ec68"),e=e(),p(),e))((()=>v("span",{class:"field-title"},[y("银行卡照片 "),v("span",{class:"sub-title"},"(需上传正反两面)")],-1)));var oe=N(a({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(e,{emit:a}){const m=e,p=q("BANK"),v=l({bankCardType:J.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),y=e=>m.factor&&m.factor[e]&&m.factor[e].isDisplay===D.YES,f=e=>!(!e||2!==e.length)||"请上传银行卡正反面照片",b=e=>{O({ossKey:[e],imageType:B.BANK_CARD}).then((e=>{const{data:a,code:l}=e;"10000"===l&&a&&a.bankCardOcrVO&&(v.value.bankCardNo=a.bankCardOcrVO.bankNo)}))};t((()=>m.modelValue),(e=>{v.value=e}),{immediate:!0}),t(v,(e=>{a("update:modelValue",e)}));const E=d((()=>p.value.map((e=>({label:e.name,value:e.code})))));return(a,l)=>(n(),o("div",de,[y("cardType")?(n(),r(V,{key:0,modelValue:v.value.bankCardType,"onUpdate:modelValue":l[0]||(l[0]=e=>v.value.bankCardType=e),label:"卡片类型",name:"bankCardType","data-source":u(X),"is-view":""},null,8,["modelValue","data-source"])):i("",!0),y("bankCardNumber")?(n(),r(C,{key:1,modelValue:v.value.bankCardNo,"onUpdate:modelValue":l[1]||(l[1]=e=>v.value.bankCardNo=e),label:"银行卡号",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):i("",!0),y("cardHolder")?(n(),r(C,{key:2,"model-value":e.holderName,label:"持卡人",name:"accountName","is-view":""},null,8,["model-value"])):i("",!0),y("bank")?(n(),r(V,{key:3,modelValue:v.value.payBank,"onUpdate:modelValue":l[2]||(l[2]=e=>v.value.payBank=e),name:"payBank",label:"开户银行","data-source":u(E),required:""},null,8,["modelValue","data-source"])):i("",!0),y("bankCardAttachment")?(n(),r(C,{key:4,label:"银行卡照片",block:"","label-width":"100%",name:"images",rules:[{validator:f}]},{label:s((()=>[ne])),input:s((()=>[c(M,{modelValue:v.value.images,"onUpdate:modelValue":l[3]||(l[3]=e=>v.value.images=e),"max-count":2,"upload-type":u(S).BANK_CARD,onOnUploadFinished:b},null,8,["modelValue","upload-type"])])),_:1},8,["rules"])):i("",!0),y("bankPreMobile")?(n(),r(C,{key:5,modelValue:v.value.mobile,"onUpdate:modelValue":l[4]||(l[4]=e=>v.value.mobile=e),label:"预留手机号",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):i("",!0)]))}}),[["__scopeId","data-v-c2f6ec68"]]);const re=e=>(m("data-v-50f6f221"),e=e(),p(),e),ue={class:"page-bank-card"},ie={class:"reprise-card-list"},se=["onClick"],ce={class:"agree"},me=y(" 投保人阅读并接受 "),pe={class:"footer-button footer"},ve=re((()=>v("div",{class:"text"},"刷新",-1))),ye=y("分享"),fe=y("下一步"),be=a({setup(e){const a=f(),t=b(),{orderNo:m="2022072710380711215",agentCode:p="D1234567-1",tenantId:y="9991000007",templateId:N=1,isShare:S}=a.query,M={bankCardType:J.DEBIT};let O={};const B=l(""),W=l({payMethod:Y.REAL_TIME,bankData:{...M,imagesId:[],images:[]}}),q=l({payMethod:Y.REAL_TIME,expiryMethod:le.AUTOMATIC_PADDING,bankData:{...M,imagesId:[],images:[]},payInfoType:ee.FIRST_SAME}),X=l({bankData:{...M,imagesId:[],images:[]}}),Q=l(ee.FIRST_SAME),de=l({}),ne=l(!1),re=l(),be=l(),Ee=l(),ge=(e,a)=>de.value&&de.value[a]&&de.value[a][e]&&de.value[a][e].isDisplay===D.YES,ke=()=>{U({orderNo:m,saleUserId:p,tenantId:y}).then((e=>{const{code:l,data:d}=e;var n,o,r;"10000"===l&&(d.orderStatus!==G.PENDING?j("paymentResult",a.query):Promise.all([null===(n=re.value)||void 0===n?void 0:n.validate(),null===(o=be.value)||void 0===o?void 0:o.validate(),null===(r=Ee.value)||void 0===r?void 0:r.validate()]).then((e=>{if(!ne.value)return void R.fail("请勾选同意银行转账授权");const l=[{...e[0],id:W.value.id,paymentType:Z.FIRST_TERM},{...e[1],id:q.value.id,paymentType:Z.RENEW_TERM},{...e[2],id:X.value.id,paymentType:Z.REPRISE,payInfoType:Q.value}],d=[{category:K.OBVERSE_BANK_CARD,name:"首期签约银行卡正面",objectType:w.INIT_SIGN,type:"png",uri:e[0].images[0],id:W.value.bankData.imagesId[0]},{category:K.REVERSE_BANK_CARD,name:"首期签约银行卡背面",objectType:w.INIT_SIGN,type:"png",uri:e[0].images[1],id:W.value.bankData.imagesId[1]}];q.value.payInfoType===ee.OTHER&&(d.push({category:K.OBVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:w.RENEWAL_SIGN,type:"png",uri:e[1].images[0],id:q.value.bankData.imagesId[0]}),d.push({category:K.REVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:w.RENEWAL_SIGN,type:"png",uri:e[1].images[1],id:q.value.bankData.imagesId[1]})),Q.value===ee.OTHER&&(d.push({category:K.OBVERSE_BANK_CARD,name:"年金签约银行卡正面",objectType:w.ANNUAL_SIGN,type:"png",uri:e[2].images[0],id:X.value.bankData.imagesId[0]}),d.push({category:K.REVERSE_BANK_CARD,name:"年金签约银行卡背面",objectType:w.ANNUAL_SIGN,type:"png",uri:e[2].images[1],id:X.value.bankData.imagesId[1]})),F({...O,pageCode:"payInfo",tenantOrderPayInfoList:l,extInfo:{...O.extInfo,templateId:N,pageCode:"payInfo",shareFlag:S?"Y":"N"},operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:d}).then((e=>{const{code:l,data:d}=e;"10000"===l&&d.success&&t.push({path:H[d.pageAction.data.nextPageCode],query:a.query})}))})))}))},Ie=d((()=>{const e={...a.query,isShare:1,sharePageCode:"payInfo"};return`${window.location.origin}/phoneVerify?${A.stringify(e)}`})),Re=(e=!1)=>{U({orderNo:m,saleUserId:p,tenantId:y}).then((a=>{const{code:l,data:t}=a;"10000"===l&&t&&(O=t,B.value=t.tenantOrderHolder.name,t.tenantOrderPayInfoList.forEach((e=>{e.paymentType===Z.FIRST_TERM?(W.value=e,W.value.bankData={...M,...e,images:[],imagesId:[]}):e.paymentType===Z.RENEW_TERM?(q.value=e,q.value.bankData={...e,images:[],imagesId:[]}):e.paymentType===Z.REPRISE&&(X.value=e,X.value.bankData={...e,images:[],imagesId:[]},Q.value=e.payInfoType)})),t.tenantOrderAttachmentList.forEach((e=>{e.objectType===w.INIT_SIGN?(e.category===K.OBVERSE_BANK_CARD&&(W.value.bankData.images[0]=e.uri,W.value.bankData.imagesId[0]=e.id),e.category===K.REVERSE_BANK_CARD&&(W.value.bankData.images[1]=e.uri,W.value.bankData.imagesId[1]=e.id)):e.objectType===w.RENEWAL_SIGN?(e.category===K.OBVERSE_BANK_CARD&&(q.value.bankData.images[0]=e.uri,q.value.bankData.imagesId[0]=e.id),e.category===K.REVERSE_BANK_CARD&&(q.value.bankData.images[1]=e.uri,q.value.bankData.imagesId[1]=e.id)):e.objectType===w.ANNUAL_SIGN&&(e.category===K.OBVERSE_BANK_CARD&&(X.value.bankData.images[0]=e.uri,X.value.bankData.imagesId[0]=e.id),e.category===K.REVERSE_BANK_CARD&&(X.value.bankData.images[1]=e.uri,X.value.bankData.imagesId[1]=e.id))})),e&&(t.tenantOrderPayInfoList.find((e=>e.paymentType===Z.FIRST_TERM&&e.bankCardNo))||R("用户未完成银行卡信息填写")))}))},Te=()=>{Re(!0)};return E((()=>{P({pageCode:"payInfo",templateId:N}).then((e=>{const{code:a,data:l}=e;if("10000"===a){const e={};l.productInsureFactorList.forEach((a=>{e[a.moduleType]||(e[a.moduleType]={}),e[a.moduleType][a.code]=a})),de.value=e}})),Re()})),(e,a)=>{const l=g("van-switch"),t=g("van-checkbox"),d=g("ProSvg"),m=g("van-button"),p=g("ProPageWrap");return n(),r(p,null,{default:s((()=>[v("div",ue,[c(x,{title:"首期支付"},{default:s((()=>[c(L,{ref_key:"form1",ref:re},{default:s((()=>[ge("paymentMethod","INIT")?(n(),r(V,{key:0,modelValue:W.value.payMethod,"onUpdate:modelValue":a[0]||(a[0]=e=>W.value.payMethod=e),name:"payMethod",required:"",label:"支付方式","is-link":"",placeholder:"请选择","data-source":u($)},null,8,["modelValue","data-source"])):i("",!0),c(oe,{modelValue:W.value.bankData,"onUpdate:modelValue":a[1]||(a[1]=e=>W.value.bankData=e),"holder-name":B.value,factor:de.value.INIT},null,8,["modelValue","holder-name","factor"])])),_:1},512)])),_:1}),c(x,{title:"续期支付"},{default:s((()=>[c(L,{ref_key:"form2",ref:be},{default:s((()=>[ge("sameAsInit","RENEWAL")?(n(),r(C,{key:0,label:"同首期",name:"payInfoType"},{input:s((()=>[c(l,{modelValue:q.value.payInfoType,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value.payInfoType=e),size:"22","active-value":u(ee).FIRST_SAME,"inactive-value":u(ee).OTHER},null,8,["modelValue","active-value","inactive-value"])])),_:1})):i("",!0),ge("paymentMethod","RENEWAL")?(n(),r(V,{key:1,modelValue:q.value.payMethod,"onUpdate:modelValue":a[3]||(a[3]=e=>q.value.payMethod=e),name:"payMethod",label:"支付方式","is-link":"",placeholder:"请选择","data-source":u($),required:""},null,8,["modelValue","data-source"])):i("",!0),ge("overduePayment","RENEWAL")?(n(),r(V,{key:2,modelValue:q.value.expiryMethod,"onUpdate:modelValue":a[4]||(a[4]=e=>q.value.expiryMethod=e),name:"expiryMethod",label:"保费逾期未支付","is-link":"",placeholder:"请选择","data-source":u(te),required:"","label-width":"200"},null,8,["modelValue","data-source"])):i("",!0),q.value.payInfoType!==u(ee).FIRST_SAME?(n(),r(oe,{key:3,modelValue:q.value.bankData,"onUpdate:modelValue":a[5]||(a[5]=e=>q.value.bankData=e),"holder-name":B.value,factor:de.value.RENEWAL},null,8,["modelValue","holder-name","factor"])):i("",!0)])),_:1},512)])),_:1}),c(x,{title:"年金领取银行卡",class:"reprise-card","show-divider":!1},{default:s((()=>[v("div",ie,[(n(!0),o(I,null,k(u(ae),((e,a)=>(n(),o("div",{key:a,class:T(["reprise-card-item",{selected:Q.value===e.value}]),onClick:a=>{return l=e.value,void(Q.value=l);var l}},_(e.label),11,se)))),128))]),c(L,{ref_key:"form3",ref:Ee},{default:s((()=>[Q.value===u(ee).OTHER?(n(),r(oe,{key:0,modelValue:X.value.bankData,"onUpdate:modelValue":a[6]||(a[6]=e=>X.value.bankData=e),"holder-name":B.value,factor:de.value.ANNUITY},null,8,["modelValue","holder-name","factor"])):i("",!0)])),_:1},512)])),_:1}),v("div",ce,[c(t,{modelValue:ne.value,"onUpdate:modelValue":a[7]||(a[7]=e=>ne.value=e),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),me,c(z,{class:"file",title:"《银行转账授权》",url:u("/static/assets/bank.588e555f.pdf")},null,8,["url"])]),v("div",pe,[u(S)?i("",!0):(n(),o("div",{key:0,class:"refresh-btn",onClick:Te},[v("div",null,[c(d,{name:"refresh"})]),ve])),u(S)?i("",!0):(n(),r(h,{key:1,title:"邀请您填写银行卡信息",desc:"邀请您填写银行卡信息",link:u(Ie),"-":""},{default:s((()=>[c(m,{plain:"",type:"primary"},{default:s((()=>[ye])),_:1})])),_:1},8,["link"])),c(m,{type:"primary",class:"submit-btn",onClick:ke},{default:s((()=>[fe])),_:1})])])])),_:1})}}});e("default",N(be,[["__scopeId","data-v-50f6f221"]]))}}}))}();
