!function(){var e=document.createElement("style");e.innerHTML=".image-wrap[data-v-bb02bba6]{display:flex;justify-content:flex-start;width:9.2rem}.com-bank-card-info .field-title .sub-title[data-v-bb02bba6]{font-size:.34667rem;color:#99a9c0}.page-bank-card[data-v-578f39ac] .com-card-wrap .body{padding:0}.page-bank-card .reprise-card .reprise-card-list[data-v-578f39ac]{padding:0 .4rem;height:1.41333rem;display:flex;justify-content:space-between;align-items:center}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item[data-v-578f39ac]{text-align:center;width:2.88rem;height:.8rem;line-height:.8rem;background:#f6f7fc;border-radius:.10667rem;color:#393d46;font-size:.34667rem}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item.selected[data-v-578f39ac]{background:rgba(13,110,254,.1);border:1px solid #0d6efe;color:var(--zaui-brand, #0d6efe)}.page-bank-card .agree[data-v-578f39ac]{height:1.41333rem;display:flex;align-items:center;font-size:.37333rem;color:#393d46;background:var(--zaui-global-bg, #f2f5fc);padding:0 .4rem}.page-bank-card .agree .checkbox[data-v-578f39ac]{margin-right:.29333rem}.page-bank-card .agree .file[data-v-578f39ac]{color:var(--zaui-brand, #0d6efe)}.page-bank-card .footer[data-v-578f39ac]{position:static;justify-content:space-between}.page-bank-card .footer .refresh-btn[data-v-578f39ac]{width:.93333rem;border:none;color:var(--zaui-brand, #0d6efe);font-size:.4rem;line-height:.37333rem;text-align:center}.page-bank-card .footer .refresh-btn .text[data-v-578f39ac]{margin-top:.13333rem;font-size:.32rem}.page-bank-card .footer[data-v-578f39ac] .com-share{flex:1;margin-left:.26667rem}.page-bank-card .footer .submit-btn[data-v-578f39ac]{flex:1}\n",document.head.appendChild(e),System.register(["./vendor-legacy-5654c491.js","./index-legacy-6f51724d.js","./index-legacy-5b921d91.js","./bankCard-legacy-94f4bfe3.js","./useDicData-legacy-279058c3.js","./index-legacy-524770aa.js","./order-legacy-c2bcb521.js"],(function(e){"use strict";var a,t,l,n,d,r,o,i,u,c,s,m,p,v,y,b,f,g,k,h,I,E,_,N,T,R,A,V,D,C,S,B,M,O,x,j,U,L,w,P,K,q,z,F,G,W,H,Y,$,J,Q,X,Z,ee,ae,te,le;return{setters:[function(e){a=e.g,t=e.E,l=e.y,n=e._,d=e.j,r=e.n,o=e.k,i=e.A,u=e.t,c=e.m,s=e.z,m=e.p,p=e.a4,v=e.a5,y=e.C,b=e.O,f=e.a9,g=e.h,k=e.r,h=e.G,I=e.L,E=e.J,_=e.F,N=e.T},function(e){T=e.q},function(e){R=e._,A=e.Y,V=e.u,D=e.v,C=e.U,S=e.x,B=e.y,M=e.O,O=e.h,x=e.z,j=e.a,U=e.l,L=e.B,w=e.D,P=e.g,K=e.q,q=e.A,z=e.r,F=e.n,G=e.c},function(e){W=e.B,H=e.a,Y=e.P,$=e.E,J=e.b,Q=e.c,X=e.d,Z=e.e,ee=e.f},function(e){ae=e.u},function(e){te=e._},function(e){le=e.a}],execute:function(){const ne={class:"com-bank-card-info"},de=(e=>(p("data-v-bb02bba6"),e=e(),v(),e))((()=>s("span",{class:"field-title"},[y("银行卡照片 "),s("span",{class:"sub-title"},"(需上传正反两面)")],-1))),re={class:"image-wrap"};var oe=R(a({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(e,{emit:a}){const p=e,v=ae("BANK"),y=t({bankCardType:W.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),b=e=>p.factor&&p.factor[e]&&p.factor[e].isDisplay===A.YES,f=e=>!(!e||2!==e.length)||"请上传银行卡正反面照片",g=l((()=>v.value.map((e=>({label:e.name,value:e.code}))))),k=e=>{B({ossKey:[e],imageType:M.BANK_CARD}).then((e=>{const{data:a,code:t}=e;if("10000"===t&&a&&a.bankCardOcrVO){y.value.bankCardNo=a.bankCardOcrVO.cardNo;const e=g.value.find((e=>e.label===a.bankCardOcrVO.bankName));e&&(y.value.payBank=e.value)}}))};return n((()=>p.modelValue),(e=>{y.value=e}),{immediate:!0}),n(y,(e=>{a("update:modelValue",e)})),(a,t)=>(d(),r("div",ne,[b("cardType")?(d(),o(V,{key:0,modelValue:y.value.bankCardType,"onUpdate:modelValue":t[0]||(t[0]=e=>y.value.bankCardType=e),label:"卡片类型",name:"bankCardType","data-source":i(H),"is-view":""},null,8,["modelValue","data-source"])):u("",!0),b("bankCardNumber")?(d(),o(D,{key:1,modelValue:y.value.bankCardNo,"onUpdate:modelValue":t[1]||(t[1]=e=>y.value.bankCardNo=e),label:"银行卡号",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):u("",!0),b("cardHolder")?(d(),o(D,{key:2,"model-value":e.holderName,label:"持卡人",name:"accountName","is-view":""},null,8,["model-value"])):u("",!0),b("bank")?(d(),o(V,{key:3,modelValue:y.value.payBank,"onUpdate:modelValue":t[2]||(t[2]=e=>y.value.payBank=e),name:"payBank",label:"开户银行","data-source":i(g),required:""},null,8,["modelValue","data-source"])):u("",!0),b("bankCardAttachment")?(d(),o(D,{key:4,label:"银行卡照片",block:"","label-width":"100%",name:"images",rules:[{validator:f}]},{label:c((()=>[de])),input:c((()=>[s("div",re,[m(S,{modelValue:y.value.images,"onUpdate:modelValue":t[3]||(t[3]=e=>y.value.images=e),"max-count":2,"upload-type":i(C).BANK_CARD,onOnUploadFinished:k},null,8,["modelValue","upload-type"])])])),_:1},8,["rules"])):u("",!0),b("bankPreMobile")?(d(),o(D,{key:5,modelValue:y.value.mobile,"onUpdate:modelValue":t[4]||(t[4]=e=>y.value.mobile=e),label:"预留手机号",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):u("",!0)]))}}),[["__scopeId","data-v-bb02bba6"]]);const ie=e=>(p("data-v-578f39ac"),e=e(),v(),e),ue={class:"page-bank-card"},ce={class:"reprise-card-list"},se=["onClick"],me={class:"agree"},pe=y(" 投保人阅读并接受 "),ve={class:"footer-button footer"},ye=ie((()=>s("div",{class:"text"},"刷新",-1))),be=y("分享"),fe=y("下一步"),ge=a({setup(e){const a=b(),n=f(),{orderNo:p="2022072710380711215",agentCode:v="D1234567-1",tenantId:y="9991000007",templateId:R=1,isShare:C,insureCode:S="kunlunhealth"}=a.query,B={bankCardType:W.DEBIT};let M={};const H=t(""),ae=t({payMethod:Y.REAL_TIME,bankData:{...B,imagesId:[],images:[]}}),ne=t({payMethod:Y.REAL_TIME,expiryMethod:$.AUTOMATIC_PADDING,bankData:{...B,imagesId:[],images:[]},payInfoType:J.FIRST_SAME}),de=t({bankData:{...B,imagesId:[],images:[]}}),re=t(J.FIRST_SAME),ie=t({}),ge=t(!1),ke=t(),he=t(),Ie=t(),Ee=t({}),_e=(e,a)=>ie.value&&ie.value[a]&&ie.value[a][e]&&ie.value[a][e].isDisplay===A.YES,Ne=()=>{P({orderNo:p,saleUserId:v,tenantId:y}).then((e=>{const{code:t,data:l}=e;var d,r,o;"10000"===t&&(l.orderStatus!==le.PENDING&&l.orderStatus!==le.PAYMENT_FAILED?K("paymentResult",a.query):Promise.all([null===(d=ke.value)||void 0===d?void 0:d.validate(),null===(r=he.value)||void 0===r?void 0:r.validate(),null===(o=Ie.value)||void 0===o?void 0:o.validate()]).then((e=>{if(!ge.value)return void N.fail("请勾选同意银行转账授权");const t=[{...e[0],id:ae.value.id,paymentType:ee.FIRST_TERM},{...e[1],id:ne.value.id,paymentType:ee.RENEW_TERM},{...e[2],id:de.value.id,paymentType:ee.REPRISE,payInfoType:re.value}],l=[{category:q.OBVERSE_BANK_CARD,name:"首期签约银行卡正面",objectType:z.INIT_SIGN,type:"png",uri:e[0].images[0],id:ae.value.bankData.imagesId[0]},{category:q.REVERSE_BANK_CARD,name:"首期签约银行卡背面",objectType:z.INIT_SIGN,type:"png",uri:e[0].images[1],id:ae.value.bankData.imagesId[1]}];ne.value.payInfoType===J.OTHER&&(l.push({category:q.OBVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:z.RENEWAL_SIGN,type:"png",uri:e[1].images[0],id:ne.value.bankData.imagesId[0]}),l.push({category:q.REVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:z.RENEWAL_SIGN,type:"png",uri:e[1].images[1],id:ne.value.bankData.imagesId[1]})),re.value===J.OTHER&&(l.push({category:q.OBVERSE_BANK_CARD,name:"年金签约银行卡正面",objectType:z.ANNUAL_SIGN,type:"png",uri:e[2].images[0],id:de.value.bankData.imagesId[0]}),l.push({category:q.REVERSE_BANK_CARD,name:"年金签约银行卡背面",objectType:z.ANNUAL_SIGN,type:"png",uri:e[2].images[1],id:de.value.bankData.imagesId[1]})),F({...M,pageCode:"payInfo",tenantOrderPayInfoList:t,extInfo:{...M.extInfo,templateId:R,pageCode:"payInfo",shareFlag:C?"Y":"N"},operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:l}).then((e=>{const{code:t,data:l}=e;"10000"===t&&l.success&&n.push({path:G[l.pageAction.data.nextPageCode],query:a.query})}))})))}))},Te=l((()=>{const e={...a.query,isShare:1,sharePageCode:"payInfo"};return`${window.location.origin}/phoneVerify?${T.stringify(e)}`})),Re=(e=!1)=>{P({orderNo:p,saleUserId:v,tenantId:y}).then((a=>{const{code:t,data:l}=a;"10000"===t&&l&&(M=l,H.value=l.tenantOrderHolder.name,l.tenantOrderPayInfoList.forEach((e=>{e.paymentType===ee.FIRST_TERM?(ae.value=e,ae.value.bankData={...B,...e,images:[],imagesId:[]}):e.paymentType===ee.RENEW_TERM?(ne.value=e,ne.value.bankData={...e,images:[],imagesId:[]}):e.paymentType===ee.REPRISE&&(de.value=e,de.value.bankData={...e,images:[],imagesId:[]},re.value=e.payInfoType)})),l.tenantOrderAttachmentList.forEach((e=>{e.objectType===z.INIT_SIGN?(e.category===q.OBVERSE_BANK_CARD&&(ae.value.bankData.images[0]=e.uri,ae.value.bankData.imagesId[0]=e.id),e.category===q.REVERSE_BANK_CARD&&(ae.value.bankData.images[1]=e.uri,ae.value.bankData.imagesId[1]=e.id)):e.objectType===z.RENEWAL_SIGN?(e.category===q.OBVERSE_BANK_CARD&&(ne.value.bankData.images[0]=e.uri,ne.value.bankData.imagesId[0]=e.id),e.category===q.REVERSE_BANK_CARD&&(ne.value.bankData.images[1]=e.uri,ne.value.bankData.imagesId[1]=e.id)):e.objectType===z.ANNUAL_SIGN&&(e.category===q.OBVERSE_BANK_CARD&&(de.value.bankData.images[0]=e.uri,de.value.bankData.imagesId[0]=e.id),e.category===q.REVERSE_BANK_CARD&&(de.value.bankData.images[1]=e.uri,de.value.bankData.imagesId[1]=e.id))})),e&&(l.tenantOrderPayInfoList.find((e=>e.paymentType===ee.FIRST_TERM&&e.bankCardNo))||N("用户未完成银行卡信息填写")))}))},Ae=()=>{Re(!0)};return g((()=>{w({insureCode:S,objectType:4,tenantId:y,orderNo:p}).then((({code:e,data:a})=>{"10000"===e&&(Ee.value=a)})),O({pageCode:"payInfo",templateId:R}).then((e=>{const{code:a,data:t}=e;if("10000"===a){const e={};t.productInsureFactorList.forEach((a=>{e[a.moduleType]||(e[a.moduleType]={}),e[a.moduleType][a.code]=a})),ie.value=e}})),Re()})),(e,a)=>{const t=k("van-switch"),l=k("van-checkbox"),n=k("ProSvg"),p=k("van-button"),v=k("ProPageWrap");return d(),o(v,null,{default:c((()=>[s("div",ue,[m(j,{title:"首期支付"},{default:c((()=>[m(x,{ref_key:"form1",ref:ke},{default:c((()=>[_e("paymentMethod","INIT")?(d(),o(V,{key:0,modelValue:ae.value.payMethod,"onUpdate:modelValue":a[0]||(a[0]=e=>ae.value.payMethod=e),name:"payMethod",required:"",label:"支付方式","is-link":"",placeholder:"请选择","data-source":i(Q)},null,8,["modelValue","data-source"])):u("",!0),m(oe,{modelValue:ae.value.bankData,"onUpdate:modelValue":a[1]||(a[1]=e=>ae.value.bankData=e),"holder-name":H.value,factor:ie.value.INIT},null,8,["modelValue","holder-name","factor"])])),_:1},512)])),_:1}),m(j,{title:"续期支付"},{default:c((()=>[m(x,{ref_key:"form2",ref:he},{default:c((()=>[_e("sameAsInit","RENEWAL")?(d(),o(D,{key:0,label:"同首期",name:"payInfoType"},{input:c((()=>[m(t,{modelValue:ne.value.payInfoType,"onUpdate:modelValue":a[2]||(a[2]=e=>ne.value.payInfoType=e),size:"22","active-value":i(J).FIRST_SAME,"inactive-value":i(J).OTHER},null,8,["modelValue","active-value","inactive-value"])])),_:1})):u("",!0),_e("paymentMethod","RENEWAL")?(d(),o(V,{key:1,modelValue:ne.value.payMethod,"onUpdate:modelValue":a[3]||(a[3]=e=>ne.value.payMethod=e),name:"payMethod",label:"支付方式","is-link":"",placeholder:"请选择","data-source":i(Q),required:""},null,8,["modelValue","data-source"])):u("",!0),_e("overduePayment","RENEWAL")?(d(),o(V,{key:2,modelValue:ne.value.expiryMethod,"onUpdate:modelValue":a[4]||(a[4]=e=>ne.value.expiryMethod=e),name:"expiryMethod",label:"保费逾期未支付","is-link":"",placeholder:"请选择","data-source":i(X),required:"","label-width":"200"},null,8,["modelValue","data-source"])):u("",!0),ne.value.payInfoType!==i(J).FIRST_SAME?(d(),o(oe,{key:3,modelValue:ne.value.bankData,"onUpdate:modelValue":a[5]||(a[5]=e=>ne.value.bankData=e),"holder-name":H.value,factor:ie.value.RENEWAL},null,8,["modelValue","holder-name","factor"])):u("",!0)])),_:1},512)])),_:1}),m(j,{title:"年金领取银行卡",class:"reprise-card","show-divider":!1},{default:c((()=>[s("div",ce,[(d(!0),r(_,null,h(i(Z),((e,a)=>(d(),r("div",{key:a,class:I(["reprise-card-item",{selected:re.value===e.value}]),onClick:a=>{return t=e.value,void(re.value=t);var t}},E(e.label),11,se)))),128))]),m(x,{ref_key:"form3",ref:Ie},{default:c((()=>[re.value===i(J).OTHER?(d(),o(oe,{key:0,modelValue:de.value.bankData,"onUpdate:modelValue":a[6]||(a[6]=e=>de.value.bankData=e),"holder-name":H.value,factor:ie.value.ANNUITY},null,8,["modelValue","holder-name","factor"])):u("",!0)])),_:1},512)])),_:1}),s("div",me,[m(l,{modelValue:ge.value,"onUpdate:modelValue":a[7]||(a[7]=e=>ge.value=e),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),pe,m(L,{class:"file",title:"《银行转账授权》",content:Ee.value.materialContent,type:i(U)(Ee.value.materialContent,Ee.value.materialSource+"")},null,8,["content","type"])]),s("div",ve,[i(C)?u("",!0):(d(),r("div",{key:0,class:"refresh-btn",onClick:Ae},[s("div",null,[m(n,{name:"refresh"})]),ye])),i(C)?u("",!0):(d(),o(te,{key:1,title:"邀请您填写银行卡信息",desc:"邀请您填写银行卡信息",link:i(Te),"-":""},{default:c((()=>[m(p,{plain:"",type:"primary"},{default:c((()=>[be])),_:1})])),_:1},8,["link"])),m(p,{type:"primary",class:"submit-btn",onClick:Ne},{default:c((()=>[fe])),_:1})])])])),_:1})}}});e("default",R(ge,[["__scopeId","data-v-578f39ac"]]))}}}))}();
