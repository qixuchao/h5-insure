!function(){var e=document.createElement("style");e.innerHTML=".image-wrap[data-v-bb02bba6]{display:flex;justify-content:flex-start;width:9.2rem}.com-bank-card-info .field-title .sub-title[data-v-bb02bba6]{font-size:.34667rem;color:#99a9c0}.page-bank-card[data-v-4a10f8a2] .com-card-wrap .body{padding:0}.page-bank-card .reprise-card .reprise-card-list[data-v-4a10f8a2]{padding:0 .4rem;height:1.41333rem;display:flex;justify-content:space-between;align-items:center}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item[data-v-4a10f8a2]{text-align:center;width:2.88rem;height:.8rem;line-height:.8rem;background:#f6f7fc;border-radius:.10667rem;color:#393d46;font-size:.34667rem}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item.selected[data-v-4a10f8a2]{background:rgba(13,110,254,.1);border:1px solid var(--van-primary-color, var(--zaui-brand));color:var(--van-primary-color, var(--zaui-brand))}.page-bank-card .agree[data-v-4a10f8a2]{height:1.41333rem;display:flex;align-items:center;font-size:.37333rem;color:#393d46;background:var(--zaui-global-bg, #f2f5fc);padding:0 .4rem}.page-bank-card .agree .checkbox[data-v-4a10f8a2]{margin-right:.29333rem}.page-bank-card .agree .file[data-v-4a10f8a2]{color:var(--van-primary-color, var(--zaui-brand))}.page-bank-card .footer[data-v-4a10f8a2]{position:static;justify-content:space-between}.page-bank-card .footer .refresh-btn[data-v-4a10f8a2]{width:.93333rem;border:none;color:var(--van-primary-color, var(--zaui-brand));font-size:.4rem;line-height:.37333rem;text-align:center}.page-bank-card .footer .refresh-btn .text[data-v-4a10f8a2]{margin-top:.13333rem;font-size:.32rem}.page-bank-card .footer[data-v-4a10f8a2] .com-share{flex:1;margin-left:.26667rem}.page-bank-card .footer .submit-btn[data-v-4a10f8a2]{flex:1}\n",document.head.appendChild(e),System.register(["./index-legacy-9e14c636.js","./index-legacy-c67603e4.js","./bankCard-legacy-a26e0ef6.js","./useDicData-legacy-76aeeae0.js","./order-legacy-0ed30965.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var a,t,l,n,d,r,o,i,u,s,c,m,p,y,b,f,v,g,k,I,h,E,_,N,T,R,A,V,D,C,S,B,M,O,x,U,j,L,w,P,K,q,G,z,F,W,H,Y,$,X,J,Q,Z,ee,ae,te,le,ne,de,re,oe,ie,ue;return{setters:[function(e){a=e._,t=e.d,l=e.r,n=e.E,d=e.an,r=e.c,o=e.h,i=e.e,u=e.g,s=e.ao,c=e.k,m=e.ap,p=e.w,y=e.j,b=e.f,f=e.aq,v=e.ar,g=e.a9,k=e.as,I=e.at,h=e.X,E=e.Y,_=e.n,N=e.a,T=e.u,R=e.G,A=e.$,V=e.v,D=e.b,C=e.P,S=e.au,B=e.F,M=e.i,O=e.L,x=e.t,U=e.a7,j=e.aa,L=e.a6,w=e.ag,P=e.av,K=e.p,q=e.ai,G=e.T,z=e.ak,F=e.al,W=e.M,H=e.N,Y=e.O,$=e.am,X=e.V,J=e.B},function(e){Q=e.S},function(e){Z=e.B,ee=e.a,ae=e.P,te=e.E,le=e.b,ne=e.c,de=e.d,re=e.e,oe=e.f},function(e){ie=e.u},function(e){ue=e.a},function(){}],execute:function(){const se={class:"com-bank-card-info"},ce=(e=>(h("data-v-bb02bba6"),e=e(),E(),e))((()=>y("span",{class:"field-title"},[_("银行卡照片 "),y("span",{class:"sub-title"},"(需上传正反两面)")],-1))),me={class:"image-wrap"};var pe=a(t({__name:"index",props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,h=ie("BANK"),E=l({bankCardType:Z.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),_=e=>t.factor&&t.factor[e]&&t.factor[e].isDisplay===g.YES,N=e=>!(!e||2!==e.length)||"请上传银行卡正反面照片",T=n((()=>h.value.map((e=>({label:e.name,value:e.code}))))),R=e=>{k({ossKey:[e],imageType:I.BANK_CARD}).then((e=>{const{data:a,code:t}=e;if("10000"===t&&a&&a.bankCardOcrVO){E.value.bankCardNo=a.bankCardOcrVO.cardNo;const e=T.value.find((e=>e.label===a.bankCardOcrVO.bankName));e&&(E.value.payBank=e.value)}}))};return d((()=>t.modelValue),(e=>{E.value=e}),{immediate:!0}),d(E,(e=>{a("update:modelValue",e)})),(a,t)=>(r(),o("div",se,[_("cardType")?(r(),i(s,{key:0,modelValue:u(E).bankCardType,"onUpdate:modelValue":t[0]||(t[0]=e=>u(E).bankCardType=e),label:"卡片类型",name:"bankCardType","data-source":u(ee),"is-view":""},null,8,["modelValue","data-source"])):c("",!0),_("bankCardNumber")?(r(),i(m,{key:1,modelValue:u(E).bankCardNo,"onUpdate:modelValue":t[1]||(t[1]=e=>u(E).bankCardNo=e),label:"银行卡号",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):c("",!0),_("cardHolder")?(r(),i(m,{key:2,"model-value":e.holderName,label:"持卡人",name:"accountName","is-view":""},null,8,["model-value"])):c("",!0),_("bank")?(r(),i(s,{key:3,modelValue:u(E).payBank,"onUpdate:modelValue":t[2]||(t[2]=e=>u(E).payBank=e),name:"payBank",label:"开户银行","data-source":u(T),required:""},null,8,["modelValue","data-source"])):c("",!0),_("bankCardAttachment")?(r(),i(m,{key:4,label:"银行卡照片",block:"","label-width":"100%",name:"images",rules:[{validator:N}]},{label:p((()=>[ce])),input:p((()=>[y("div",me,[b(f,{modelValue:u(E).images,"onUpdate:modelValue":t[3]||(t[3]=e=>u(E).images=e),"max-count":2,"upload-type":u(v).BANK_CARD,onOnUploadFinished:R},null,8,["modelValue","upload-type"])])])),_:1},8,["rules"])):c("",!0),_("bankPreMobile")?(r(),i(m,{key:5,modelValue:u(E).mobile,"onUpdate:modelValue":t[4]||(t[4]=e=>u(E).mobile=e),label:"预留手机号",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):c("",!0)]))}}),[["__scopeId","data-v-bb02bba6"]]);const ye={class:"page-bank-card"},be={class:"reprise-card-list"},fe=["onClick"],ve={class:"agree"},ge={class:"footer-button footer"},ke=(e=>(h("data-v-4a10f8a2"),e=e(),E(),e))((()=>y("div",{class:"text"},"刷新",-1))),Ie=t({__name:"index",setup(e){const a=N(),t=T(),{orderNo:d="2022072710380711215",agentCode:f="D1234567-1",tenantId:v="9991000007",templateId:k=1,isShare:I,insurerCode:h="kunlunhealth"}=a.query,E={bankCardType:Z.DEBIT};let ee={};const ie=l(""),se=l({payMethod:ae.REAL_TIME,bankData:{...E,imagesId:[],images:[]}}),ce=l({payMethod:ae.REAL_TIME,expiryMethod:te.AUTOMATIC_PADDING,bankData:{...E,imagesId:[],images:[]},payInfoType:le.FIRST_SAME}),me=l({bankData:{...E,imagesId:[],images:[]}}),Ie=l(le.FIRST_SAME),he=l({}),Ee=l(!1),_e=l(),Ne=l(),Te=l(),Re=l({}),Ae=(e,a)=>he.value&&he.value[a]&&he.value[a][e]&&he.value[a][e].isDisplay===g.YES,Ve=()=>{K({orderNo:d,saleUserId:f,tenantId:v}).then((e=>{const{code:l,data:n}=e;var d,r,o;"10000"===l&&([ue.PENDING,ue.PAYMENT_FAILED,ue.UNDER_WRITING_SUCCESS].includes(n.orderStatus)?Promise.all([null===(d=_e.value)||void 0===d?void 0:d.validate(),null===(r=Ne.value)||void 0===r?void 0:r.validate(),null===(o=Te.value)||void 0===o?void 0:o.validate()]).then((e=>{if(!Ee.value)return void G.fail("请勾选同意银行转账授权");const l=[{...e[0],id:se.value.id,paymentType:oe.FIRST_TERM},{...e[1],id:ce.value.id,paymentType:oe.RENEW_TERM},{...e[2],id:me.value.id,paymentType:oe.REPRISE,payInfoType:Ie.value}],n=[{category:z.OBVERSE_BANK_CARD,name:"首期签约银行卡正面",objectType:F.INIT_SIGN,type:"png",uri:e[0].images[0],id:se.value.bankData.imagesId[0]},{category:z.REVERSE_BANK_CARD,name:"首期签约银行卡背面",objectType:F.INIT_SIGN,type:"png",uri:e[0].images[1],id:se.value.bankData.imagesId[1]}];ce.value.payInfoType===le.OTHER&&(n.push({category:z.OBVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:F.RENEWAL_SIGN,type:"png",uri:e[1].images[0],id:ce.value.bankData.imagesId[0]}),n.push({category:z.REVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:F.RENEWAL_SIGN,type:"png",uri:e[1].images[1],id:ce.value.bankData.imagesId[1]})),Ie.value===le.OTHER&&(n.push({category:z.OBVERSE_BANK_CARD,name:"年金签约银行卡正面",objectType:F.ANNUAL_SIGN,type:"png",uri:e[2].images[0],id:me.value.bankData.imagesId[0]}),n.push({category:z.REVERSE_BANK_CARD,name:"年金签约银行卡背面",objectType:F.ANNUAL_SIGN,type:"png",uri:e[2].images[1],id:me.value.bankData.imagesId[1]})),W({...ee,pageCode:"payInfo",tenantOrderPayInfoList:l,extInfo:{...ee.extInfo,templateId:k,pageCode:"payInfo",shareFlag:I?"Y":"N",buttonCode:H.payInfo},operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:n}).then((e=>{const{code:l,data:n}=e;"10000"===l&&n.success&&t.push({path:Y[n.pageAction.data.nextPageCode],query:a.query})}))})):q("paymentResult",a.query))}))},De=n((()=>{const e={...a.query,isShare:1,sharePageCode:"payInfo"};return`${window.location.origin}/phoneVerify?${$.stringify(e)}`})),Ce=(e=!1)=>{K({orderNo:d,saleUserId:f,tenantId:v}).then((a=>{const{code:t,data:l}=a;"10000"===t&&l&&(ee=l,ie.value=l.tenantOrderHolder.name,l.tenantOrderPayInfoList.forEach((e=>{e.paymentType===oe.FIRST_TERM?(se.value=e,se.value.bankData={...E,...e,images:[],imagesId:[]}):e.paymentType===oe.RENEW_TERM?(ce.value=e,ce.value.bankData={...e,images:[],imagesId:[]}):e.paymentType===oe.REPRISE&&(me.value=e,me.value.bankData={...e,images:[],imagesId:[]},Ie.value=e.payInfoType)})),l.tenantOrderAttachmentList.forEach((e=>{e.objectType===F.INIT_SIGN?(e.category===z.OBVERSE_BANK_CARD&&(se.value.bankData.images[0]=e.uri,se.value.bankData.imagesId[0]=e.id),e.category===z.REVERSE_BANK_CARD&&(se.value.bankData.images[1]=e.uri,se.value.bankData.imagesId[1]=e.id)):e.objectType===F.RENEWAL_SIGN?(e.category===z.OBVERSE_BANK_CARD&&(ce.value.bankData.images[0]=e.uri,ce.value.bankData.imagesId[0]=e.id),e.category===z.REVERSE_BANK_CARD&&(ce.value.bankData.images[1]=e.uri,ce.value.bankData.imagesId[1]=e.id)):e.objectType===F.ANNUAL_SIGN&&(e.category===z.OBVERSE_BANK_CARD&&(me.value.bankData.images[0]=e.uri,me.value.bankData.imagesId[0]=e.id),e.category===z.REVERSE_BANK_CARD&&(me.value.bankData.images[1]=e.uri,me.value.bankData.imagesId[1]=e.id))})),e&&(l.tenantOrderPayInfoList.find((e=>e.paymentType===oe.FIRST_TERM&&e.bankCardNo))||G("用户未完成银行卡信息填写")))}))},Se=()=>{Ce(!0)};return R((()=>{P({insureCode:h,objectType:4,tenantId:v,orderNo:d}).then((({code:e,data:a})=>{"10000"===e&&(Re.value=a)})),A({pageCode:"payInfo",templateId:k}).then((e=>{const{code:a,data:t}=e;if("10000"===a){const e={};t.productInsureFactorList.forEach((a=>{e[a.moduleType]||(e[a.moduleType]={}),e[a.moduleType][a.code]=a})),he.value=e}})),Ce()})),(e,a)=>{const t=Q,l=V,n=X,d=J,f=D("ProPageWrap");return r(),i(f,null,{default:p((()=>[y("div",ye,[b(C,{title:"首期支付"},{default:p((()=>[b(S,{ref_key:"form1",ref:_e},{default:p((()=>[Ae("paymentMethod","INIT")?(r(),i(s,{key:0,modelValue:u(se).payMethod,"onUpdate:modelValue":a[0]||(a[0]=e=>u(se).payMethod=e),name:"payMethod",required:"",label:"支付方式","is-link":"",placeholder:"请选择","data-source":u(ne)},null,8,["modelValue","data-source"])):c("",!0),b(pe,{modelValue:u(se).bankData,"onUpdate:modelValue":a[1]||(a[1]=e=>u(se).bankData=e),"holder-name":u(ie),factor:u(he).INIT},null,8,["modelValue","holder-name","factor"])])),_:1},512)])),_:1}),b(C,{title:"续期支付"},{default:p((()=>[b(S,{ref_key:"form2",ref:Ne},{default:p((()=>[Ae("sameAsInit","RENEWAL")?(r(),i(m,{key:0,label:"同首期",name:"payInfoType"},{input:p((()=>[b(t,{modelValue:u(ce).payInfoType,"onUpdate:modelValue":a[2]||(a[2]=e=>u(ce).payInfoType=e),size:"22","active-value":u(le).FIRST_SAME,"inactive-value":u(le).OTHER},null,8,["modelValue","active-value","inactive-value"])])),_:1})):c("",!0),Ae("paymentMethod","RENEWAL")?(r(),i(s,{key:1,modelValue:u(ce).payMethod,"onUpdate:modelValue":a[3]||(a[3]=e=>u(ce).payMethod=e),name:"payMethod",label:"支付方式","is-link":"",placeholder:"请选择","data-source":u(ne),required:""},null,8,["modelValue","data-source"])):c("",!0),Ae("overduePayment","RENEWAL")?(r(),i(s,{key:2,modelValue:u(ce).expiryMethod,"onUpdate:modelValue":a[4]||(a[4]=e=>u(ce).expiryMethod=e),name:"expiryMethod",label:"保费逾期未支付","is-link":"",placeholder:"请选择","data-source":u(de),required:"","label-width":"200"},null,8,["modelValue","data-source"])):c("",!0),u(ce).payInfoType!==u(le).FIRST_SAME?(r(),i(pe,{key:3,modelValue:u(ce).bankData,"onUpdate:modelValue":a[5]||(a[5]=e=>u(ce).bankData=e),"holder-name":u(ie),factor:u(he).RENEWAL},null,8,["modelValue","holder-name","factor"])):c("",!0)])),_:1},512)])),_:1}),b(C,{title:"年金领取银行卡",class:"reprise-card","show-divider":!1},{default:p((()=>[y("div",be,[(r(!0),o(B,null,M(u(re),((e,a)=>(r(),o("div",{key:a,class:O(["reprise-card-item",{selected:u(Ie)===e.value}]),onClick:a=>{return t=e.value,void(Ie.value=t);var t}},x(e.label),11,fe)))),128))]),b(S,{ref_key:"form3",ref:Te},{default:p((()=>[u(Ie)===u(le).OTHER?(r(),i(pe,{key:0,modelValue:u(me).bankData,"onUpdate:modelValue":a[6]||(a[6]=e=>u(me).bankData=e),"holder-name":u(ie),factor:u(he).ANNUITY},null,8,["modelValue","holder-name","factor"])):c("",!0)])),_:1},512)])),_:1}),y("div",ve,[b(l,{modelValue:u(Ee),"onUpdate:modelValue":a[7]||(a[7]=e=>U(Ee)?Ee.value=e:null),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),_(" 投保人阅读并接受 "),b(j,{class:"file",title:"《银行转账授权》",content:u(Re).materialContent,type:u(L)(u(Re).materialContent,u(Re).materialSource+"")},null,8,["content","type"])]),y("div",ge,[u(I)?c("",!0):(r(),o("div",{key:0,class:"refresh-btn",onClick:Se},[y("div",null,[b(n,{name:"refresh"})]),ke])),u(I)?c("",!0):(r(),i(w,{key:1,title:"邀请您填写银行卡信息",desc:"邀请您填写银行卡信息",link:u(De),"-":""},{default:p((()=>[b(d,{plain:"",type:"primary"},{default:p((()=>[_("分享")])),_:1})])),_:1},8,["link"])),b(d,{type:"primary",class:"submit-btn",onClick:Ve},{default:p((()=>[_("下一步")])),_:1})])])])),_:1})}}});e("default",a(Ie,[["__scopeId","data-v-4a10f8a2"]]))}}}))}();
