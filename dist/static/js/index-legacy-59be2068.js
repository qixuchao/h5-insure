!function(){var a=document.createElement("style");a.innerHTML=".image-wrap[data-v-bb02bba6]{display:flex;justify-content:flex-start;width:9.2rem}.com-bank-card-info .field-title .sub-title[data-v-bb02bba6]{font-size:.34667rem;color:#99a9c0}.page-bank-card[data-v-4a10f8a2] .com-card-wrap .body{padding:0}.page-bank-card .reprise-card .reprise-card-list[data-v-4a10f8a2]{padding:0 .4rem;height:1.41333rem;display:flex;justify-content:space-between;align-items:center}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item[data-v-4a10f8a2]{text-align:center;width:2.88rem;height:.8rem;line-height:.8rem;background:#f6f7fc;border-radius:.10667rem;color:#393d46;font-size:.34667rem}.page-bank-card .reprise-card .reprise-card-list .reprise-card-item.selected[data-v-4a10f8a2]{background:rgba(13,110,254,.1);border:1px solid var(--van-primary-color, var(--zaui-brand));color:var(--van-primary-color, var(--zaui-brand))}.page-bank-card .agree[data-v-4a10f8a2]{height:1.41333rem;display:flex;align-items:center;font-size:.37333rem;color:#393d46;background:var(--zaui-global-bg, #f2f5fc);padding:0 .4rem}.page-bank-card .agree .checkbox[data-v-4a10f8a2]{margin-right:.29333rem}.page-bank-card .agree .file[data-v-4a10f8a2]{color:var(--van-primary-color, var(--zaui-brand))}.page-bank-card .footer[data-v-4a10f8a2]{position:static;justify-content:space-between}.page-bank-card .footer .refresh-btn[data-v-4a10f8a2]{width:.93333rem;border:none;color:var(--van-primary-color, var(--zaui-brand));font-size:.4rem;line-height:.37333rem;text-align:center}.page-bank-card .footer .refresh-btn .text[data-v-4a10f8a2]{margin-top:.13333rem;font-size:.32rem}.page-bank-card .footer[data-v-4a10f8a2] .com-share{flex:1;margin-left:.26667rem}.page-bank-card .footer .submit-btn[data-v-4a10f8a2]{flex:1}\n",document.head.appendChild(a),System.register(["./index-legacy-d0311249.js","./index-legacy-0c21f68f.js","./bankCard-legacy-cadb29cc.js","./useDicData-legacy-4ea3b717.js","./order-legacy-dd441fa4.js","./pdfh5-legacy-9f98dc45.js"],(function(a){"use strict";var e,t,l,n,d,r,o,i,u,c,s,m,p,y,b,f,v,g,k,I,h,E,_,N,T,R,A,V,D,C,S,B,M,O,x,U,j,L,w,P,K,q,G,z,F,W,H,Y,$,X,J,Q,Z,aa,ea,ta,la,na,da,ra,oa,ia,ua;return{setters:[function(a){e=a._,t=a.d,l=a.r,n=a.E,d=a.an,r=a.c,o=a.h,i=a.e,u=a.g,c=a.ao,s=a.k,m=a.ap,p=a.w,y=a.j,b=a.f,f=a.aq,v=a.ar,g=a.a9,k=a.as,I=a.at,h=a.X,E=a.Y,_=a.n,N=a.a,T=a.u,R=a.G,A=a.$,V=a.v,D=a.b,C=a.P,S=a.au,B=a.F,M=a.i,O=a.L,x=a.t,U=a.a7,j=a.aa,L=a.a6,w=a.ag,P=a.av,K=a.p,q=a.ai,G=a.T,z=a.ak,F=a.al,W=a.M,H=a.N,Y=a.O,$=a.am,X=a.V,J=a.B},function(a){Q=a.S},function(a){Z=a.B,aa=a.a,ea=a.P,ta=a.E,la=a.b,na=a.c,da=a.d,ra=a.e,oa=a.f},function(a){ia=a.u},function(a){ua=a.a},function(){}],execute:function(){const ca={class:"com-bank-card-info"},sa=(a=>(h("data-v-bb02bba6"),a=a(),E(),a))((()=>y("span",{class:"field-title"},[_("银行卡照片 "),y("span",{class:"sub-title"},"(需上传正反两面)")],-1))),ma={class:"image-wrap"};var pa=e(t({__name:"index",props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(a,{emit:e}){const t=a,h=ia("BANK"),E=l({bankCardType:Z.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),_=a=>t.factor&&t.factor[a]&&t.factor[a].isDisplay===g.YES,N=a=>!(!a||2!==a.length)||"请上传银行卡正反面照片",T=n((()=>h.value.map((a=>({label:a.name,value:a.code}))))),R=a=>{k({ossKey:[a],imageType:I.BANK_CARD}).then((a=>{const{data:e,code:t}=a;if("10000"===t&&e&&e.bankCardOcrVO){E.value.bankCardNo=e.bankCardOcrVO.cardNo;const a=T.value.find((a=>a.label===e.bankCardOcrVO.bankName));a&&(E.value.payBank=a.value)}}))};return d((()=>t.modelValue),(a=>{E.value=a}),{immediate:!0}),d(E,(a=>{e("update:modelValue",a)})),(e,t)=>(r(),o("div",ca,[_("cardType")?(r(),i(c,{key:0,modelValue:u(E).bankCardType,"onUpdate:modelValue":t[0]||(t[0]=a=>u(E).bankCardType=a),label:"卡片类型",name:"bankCardType","data-source":u(aa),"is-view":""},null,8,["modelValue","data-source"])):s("",!0),_("bankCardNumber")?(r(),i(m,{key:1,modelValue:u(E).bankCardNo,"onUpdate:modelValue":t[1]||(t[1]=a=>u(E).bankCardNo=a),label:"银行卡号",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):s("",!0),_("cardHolder")?(r(),i(m,{key:2,"model-value":a.holderName,label:"持卡人",name:"accountName","is-view":""},null,8,["model-value"])):s("",!0),_("bank")?(r(),i(c,{key:3,modelValue:u(E).payBank,"onUpdate:modelValue":t[2]||(t[2]=a=>u(E).payBank=a),name:"payBank",label:"开户银行","data-source":u(T),required:""},null,8,["modelValue","data-source"])):s("",!0),_("bankCardAttachment")?(r(),i(m,{key:4,label:"银行卡照片",block:"","label-width":"100%",name:"images",rules:[{validator:N}]},{label:p((()=>[sa])),input:p((()=>[y("div",ma,[b(f,{modelValue:u(E).images,"onUpdate:modelValue":t[3]||(t[3]=a=>u(E).images=a),"max-count":2,"upload-type":u(v).BANK_CARD,onOnUploadFinished:R},null,8,["modelValue","upload-type"])])])),_:1},8,["rules"])):s("",!0),_("bankPreMobile")?(r(),i(m,{key:5,modelValue:u(E).mobile,"onUpdate:modelValue":t[4]||(t[4]=a=>u(E).mobile=a),label:"预留手机号",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):s("",!0)]))}}),[["__scopeId","data-v-bb02bba6"]]);const ya={class:"page-bank-card"},ba={class:"reprise-card-list"},fa=["onClick"],va={class:"agree"},ga={class:"footer-button footer"},ka=(a=>(h("data-v-4a10f8a2"),a=a(),E(),a))((()=>y("div",{class:"text"},"刷新",-1))),Ia=t({__name:"index",setup(a){const e=N(),t=T(),{orderNo:d="2022072710380711215",agentCode:f="D1234567-1",tenantId:v="9991000007",templateId:k=1,isShare:I,insurerCode:h="kunlunhealth"}=e.query,E={bankCardType:Z.DEBIT};let aa={};const ia=l(""),ca=l({payMethod:ea.REAL_TIME,bankData:{...E,imagesId:[],images:[]}}),sa=l({payMethod:ea.REAL_TIME,expiryMethod:ta.AUTOMATIC_PADDING,bankData:{...E,imagesId:[],images:[]},payInfoType:la.FIRST_SAME}),ma=l({bankData:{...E,imagesId:[],images:[]}}),Ia=l(la.FIRST_SAME),ha=l({}),Ea=l(!1),_a=l(),Na=l(),Ta=l(),Ra=l({}),Aa=(a,e)=>ha.value&&ha.value[e]&&ha.value[e][a]&&ha.value[e][a].isDisplay===g.YES,Va=()=>{K({orderNo:d,saleUserId:f,tenantId:v}).then((a=>{const{code:l,data:n}=a;var d,r,o;"10000"===l&&([ua.PENDING,ua.PAYMENT_FAILED,ua.UNDER_WRITING_SUCCESS].includes(n.orderStatus)?Promise.all([null===(d=_a.value)||void 0===d?void 0:d.validate(),null===(r=Na.value)||void 0===r?void 0:r.validate(),null===(o=Ta.value)||void 0===o?void 0:o.validate()]).then((a=>{if(!Ea.value)return void G.fail("请勾选同意银行转账授权");const l=[{...a[0],id:ca.value.id,paymentType:oa.FIRST_TERM},{...a[1],id:sa.value.id,paymentType:oa.RENEW_TERM},{...a[2],id:ma.value.id,paymentType:oa.REPRISE,payInfoType:Ia.value}],n=[{category:z.OBVERSE_BANK_CARD,name:"首期签约银行卡正面",objectType:F.INIT_SIGN,type:"png",uri:a[0].images[0],id:ca.value.bankData.imagesId[0]},{category:z.REVERSE_BANK_CARD,name:"首期签约银行卡背面",objectType:F.INIT_SIGN,type:"png",uri:a[0].images[1],id:ca.value.bankData.imagesId[1]}];sa.value.payInfoType===la.OTHER&&(n.push({category:z.OBVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:F.RENEWAL_SIGN,type:"png",uri:a[1].images[0],id:sa.value.bankData.imagesId[0]}),n.push({category:z.REVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:F.RENEWAL_SIGN,type:"png",uri:a[1].images[1],id:sa.value.bankData.imagesId[1]})),Ia.value===la.OTHER&&(n.push({category:z.OBVERSE_BANK_CARD,name:"年金签约银行卡正面",objectType:F.ANNUAL_SIGN,type:"png",uri:a[2].images[0],id:ma.value.bankData.imagesId[0]}),n.push({category:z.REVERSE_BANK_CARD,name:"年金签约银行卡背面",objectType:F.ANNUAL_SIGN,type:"png",uri:a[2].images[1],id:ma.value.bankData.imagesId[1]})),W({...aa,pageCode:"payInfo",tenantOrderPayInfoList:l,extInfo:{...aa.extInfo,templateId:k,pageCode:"payInfo",shareFlag:I?"Y":"N",buttonCode:H.payInfo},operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:n}).then((a=>{const{code:l,data:n}=a;"10000"===l&&n.success&&t.push({path:Y[n.pageAction.data.nextPageCode],query:e.query})}))})):q("paymentResult",e.query))}))},Da=n((()=>{const a={...e.query,isShare:1,sharePageCode:"payInfo"};return`${window.location.origin}/phoneVerify?${$.stringify(a)}`})),Ca=(a=!1)=>{K({orderNo:d,saleUserId:f,tenantId:v}).then((e=>{const{code:t,data:l}=e;"10000"===t&&l&&(aa=l,ia.value=l.tenantOrderHolder.name,l.tenantOrderPayInfoList.forEach((a=>{a.paymentType===oa.FIRST_TERM?(ca.value=a,ca.value.bankData={...E,...a,images:[],imagesId:[]}):a.paymentType===oa.RENEW_TERM?(sa.value=a,sa.value.bankData={...a,images:[],imagesId:[]}):a.paymentType===oa.REPRISE&&(ma.value=a,ma.value.bankData={...a,images:[],imagesId:[]},Ia.value=a.payInfoType)})),l.tenantOrderAttachmentList.forEach((a=>{a.objectType===F.INIT_SIGN?(a.category===z.OBVERSE_BANK_CARD&&(ca.value.bankData.images[0]=a.uri,ca.value.bankData.imagesId[0]=a.id),a.category===z.REVERSE_BANK_CARD&&(ca.value.bankData.images[1]=a.uri,ca.value.bankData.imagesId[1]=a.id)):a.objectType===F.RENEWAL_SIGN?(a.category===z.OBVERSE_BANK_CARD&&(sa.value.bankData.images[0]=a.uri,sa.value.bankData.imagesId[0]=a.id),a.category===z.REVERSE_BANK_CARD&&(sa.value.bankData.images[1]=a.uri,sa.value.bankData.imagesId[1]=a.id)):a.objectType===F.ANNUAL_SIGN&&(a.category===z.OBVERSE_BANK_CARD&&(ma.value.bankData.images[0]=a.uri,ma.value.bankData.imagesId[0]=a.id),a.category===z.REVERSE_BANK_CARD&&(ma.value.bankData.images[1]=a.uri,ma.value.bankData.imagesId[1]=a.id))})),a&&(l.tenantOrderPayInfoList.find((a=>a.paymentType===oa.FIRST_TERM&&a.bankCardNo))||G("用户未完成银行卡信息填写")))}))},Sa=()=>{Ca(!0)};return R((()=>{P({insureCode:h,objectType:4,tenantId:v,orderNo:d}).then((({code:a,data:e})=>{"10000"===a&&(Ra.value=e)})),A({pageCode:"payInfo",templateId:k}).then((a=>{const{code:e,data:t}=a;if("10000"===e){const a={};t.productInsureFactorList.forEach((e=>{a[e.moduleType]||(a[e.moduleType]={}),a[e.moduleType][e.code]=e})),ha.value=a}})),Ca()})),(a,e)=>{const t=Q,l=V,n=X,d=J,f=D("ProPageWrap");return r(),i(f,null,{default:p((()=>[y("div",ya,[b(C,{title:"首期支付"},{default:p((()=>[b(S,{ref_key:"form1",ref:_a},{default:p((()=>[Aa("paymentMethod","INIT")?(r(),i(c,{key:0,modelValue:u(ca).payMethod,"onUpdate:modelValue":e[0]||(e[0]=a=>u(ca).payMethod=a),name:"payMethod",required:"",label:"支付方式","is-link":"",placeholder:"请选择","data-source":u(na)},null,8,["modelValue","data-source"])):s("",!0),b(pa,{modelValue:u(ca).bankData,"onUpdate:modelValue":e[1]||(e[1]=a=>u(ca).bankData=a),"holder-name":u(ia),factor:u(ha).INIT},null,8,["modelValue","holder-name","factor"])])),_:1},512)])),_:1}),b(C,{title:"续期支付"},{default:p((()=>[b(S,{ref_key:"form2",ref:Na},{default:p((()=>[Aa("sameAsInit","RENEWAL")?(r(),i(m,{key:0,label:"同首期",name:"payInfoType"},{input:p((()=>[b(t,{modelValue:u(sa).payInfoType,"onUpdate:modelValue":e[2]||(e[2]=a=>u(sa).payInfoType=a),size:"22","active-value":u(la).FIRST_SAME,"inactive-value":u(la).OTHER},null,8,["modelValue","active-value","inactive-value"])])),_:1})):s("",!0),Aa("paymentMethod","RENEWAL")?(r(),i(c,{key:1,modelValue:u(sa).payMethod,"onUpdate:modelValue":e[3]||(e[3]=a=>u(sa).payMethod=a),name:"payMethod",label:"支付方式","is-link":"",placeholder:"请选择","data-source":u(na),required:""},null,8,["modelValue","data-source"])):s("",!0),Aa("overduePayment","RENEWAL")?(r(),i(c,{key:2,modelValue:u(sa).expiryMethod,"onUpdate:modelValue":e[4]||(e[4]=a=>u(sa).expiryMethod=a),name:"expiryMethod",label:"保费逾期未支付","is-link":"",placeholder:"请选择","data-source":u(da),required:"","label-width":"200"},null,8,["modelValue","data-source"])):s("",!0),u(sa).payInfoType!==u(la).FIRST_SAME?(r(),i(pa,{key:3,modelValue:u(sa).bankData,"onUpdate:modelValue":e[5]||(e[5]=a=>u(sa).bankData=a),"holder-name":u(ia),factor:u(ha).RENEWAL},null,8,["modelValue","holder-name","factor"])):s("",!0)])),_:1},512)])),_:1}),b(C,{title:"年金领取银行卡",class:"reprise-card","show-divider":!1},{default:p((()=>[y("div",ba,[(r(!0),o(B,null,M(u(ra),((a,e)=>(r(),o("div",{key:e,class:O(["reprise-card-item",{selected:u(Ia)===a.value}]),onClick:e=>{return t=a.value,void(Ia.value=t);var t}},x(a.label),11,fa)))),128))]),b(S,{ref_key:"form3",ref:Ta},{default:p((()=>[u(Ia)===u(la).OTHER?(r(),i(pa,{key:0,modelValue:u(ma).bankData,"onUpdate:modelValue":e[6]||(e[6]=a=>u(ma).bankData=a),"holder-name":u(ia),factor:u(ha).ANNUITY},null,8,["modelValue","holder-name","factor"])):s("",!0)])),_:1},512)])),_:1}),y("div",va,[b(l,{modelValue:u(Ea),"onUpdate:modelValue":e[7]||(e[7]=a=>U(Ea)?Ea.value=a:null),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),_(" 投保人阅读并接受 "),b(j,{class:"file",title:"《银行转账授权》",content:u(Ra).materialContent,type:u(L)(u(Ra).materialContent,u(Ra).materialSource+"")},null,8,["content","type"])]),y("div",ga,[u(I)?s("",!0):(r(),o("div",{key:0,class:"refresh-btn",onClick:Sa},[y("div",null,[b(n,{name:"refresh"})]),ka])),u(I)?s("",!0):(r(),i(w,{key:1,title:"邀请您填写银行卡信息",desc:"邀请您填写银行卡信息",link:u(Da),"-":""},{default:p((()=>[b(d,{plain:"",type:"primary"},{default:p((()=>[_("分享")])),_:1})])),_:1},8,["link"])),b(d,{type:"primary",class:"submit-btn",onClick:Va},{default:p((()=>[_("下一步")])),_:1})])])])),_:1})}}});a("default",e(Ia,[["__scopeId","data-v-4a10f8a2"]]))}}}))}();
