import{h as a,r as e,x as l,Z as t,l as d,y as o,m as n,A as u,s,n as r,z as i,Q as m,a3 as p,a4 as c,C as y,N as v,a8 as b,j as I,k,E as f,J as E,I as g,F as N,T as _}from"./vendor-d6fdc679.js";import{l as h}from"./index-51d99e89.js";import{_ as R,x as T,y as A,U as V,z as D,Y as C,B as S,O as B,h as M,D as O,a as U,l as j,E as L,F as P,g as x,s as K,A as F,t as q,n as G,N as w,b as W}from"./index-f5352dff.js";import{B as H,a as Y,P as z,E as $,b as J,c as Q,d as Z,e as X,f as aa}from"./bankCard-6f544d4f.js";import{u as ea}from"./useDicData-e0586383.js";import{_ as la}from"./index-fad812ab.js";import{a as ta}from"./order-67fc6739.js";const da={class:"com-bank-card-info"},oa=(a=>(p("data-v-bb02bba6"),a=a(),c(),a))((()=>i("span",{class:"field-title"},[y("银行卡照片 "),i("span",{class:"sub-title"},"(需上传正反两面)")],-1))),na={class:"image-wrap"};var ua=R(a({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""},factor:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(a,{emit:p}){const c=a,y=ea("BANK"),v=e({bankCardType:H.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),b=a=>c.factor&&c.factor[a]&&c.factor[a].isDisplay===C.YES,I=a=>!(!a||2!==a.length)||"请上传银行卡正反面照片",k=l((()=>y.value.map((a=>({label:a.name,value:a.code}))))),f=a=>{S({ossKey:[a],imageType:B.BANK_CARD}).then((a=>{const{data:e,code:l}=a;if("10000"===l&&e&&e.bankCardOcrVO){v.value.bankCardNo=e.bankCardOcrVO.cardNo;const a=k.value.find((a=>a.label===e.bankCardOcrVO.bankName));a&&(v.value.payBank=a.value)}}))};return t((()=>c.modelValue),(a=>{v.value=a}),{immediate:!0}),t(v,(a=>{p("update:modelValue",a)})),(e,l)=>(d(),o("div",da,[b("cardType")?(d(),n(T,{key:0,modelValue:v.value.bankCardType,"onUpdate:modelValue":l[0]||(l[0]=a=>v.value.bankCardType=a),label:"卡片类型",name:"bankCardType","data-source":u(Y),"is-view":""},null,8,["modelValue","data-source"])):s("",!0),b("bankCardNumber")?(d(),n(A,{key:1,modelValue:v.value.bankCardNo,"onUpdate:modelValue":l[1]||(l[1]=a=>v.value.bankCardNo=a),label:"银行卡号",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"])):s("",!0),b("cardHolder")?(d(),n(A,{key:2,"model-value":a.holderName,label:"持卡人",name:"accountName","is-view":""},null,8,["model-value"])):s("",!0),b("bank")?(d(),n(T,{key:3,modelValue:v.value.payBank,"onUpdate:modelValue":l[2]||(l[2]=a=>v.value.payBank=a),name:"payBank",label:"开户银行","data-source":u(k),required:""},null,8,["modelValue","data-source"])):s("",!0),b("bankCardAttachment")?(d(),n(A,{key:4,label:"银行卡照片",block:"","label-width":"100%",name:"images",rules:[{validator:I}]},{label:r((()=>[oa])),input:r((()=>[i("div",na,[m(D,{modelValue:v.value.images,"onUpdate:modelValue":l[3]||(l[3]=a=>v.value.images=a),"max-count":2,"upload-type":u(V).BANK_CARD,onOnUploadFinished:f},null,8,["modelValue","upload-type"])])])),_:1},8,["rules"])):s("",!0),b("bankPreMobile")?(d(),n(A,{key:5,modelValue:v.value.mobile,"onUpdate:modelValue":l[4]||(l[4]=a=>v.value.mobile=a),label:"预留手机号",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])):s("",!0)]))}}),[["__scopeId","data-v-bb02bba6"]]);const sa=a=>(p("data-v-7a52b3b4"),a=a(),c(),a),ra={class:"page-bank-card"},ia={class:"reprise-card-list"},ma=["onClick"],pa={class:"agree"},ca=y(" 投保人阅读并接受 "),ya={class:"footer-button footer"},va=sa((()=>i("div",{class:"text"},"刷新",-1))),ba=y("分享"),Ia=y("下一步");var ka=R(a({setup(a){const t=v(),p=b(),{orderNo:c="2022072710380711215",agentCode:y="D1234567-1",tenantId:R="9991000007",templateId:V=1,isShare:D,insurerCode:S="kunlunhealth"}=t.query,B={bankCardType:H.DEBIT};let Y={};const ea=e(""),da=e({payMethod:z.REAL_TIME,bankData:{...B,imagesId:[],images:[]}}),oa=e({payMethod:z.REAL_TIME,expiryMethod:$.AUTOMATIC_PADDING,bankData:{...B,imagesId:[],images:[]},payInfoType:J.FIRST_SAME}),na=e({bankData:{...B,imagesId:[],images:[]}}),sa=e(J.FIRST_SAME),ka=e({}),fa=e(!1),Ea=e(),ga=e(),Na=e(),_a=e({}),ha=(a,e)=>ka.value&&ka.value[e]&&ka.value[e][a]&&ka.value[e][a].isDisplay===C.YES,Ra=()=>{x({orderNo:c,saleUserId:y,tenantId:R}).then((a=>{var e,l,d;const{code:o,data:n}=a;"10000"===o&&([ta.PENDING,ta.PAYMENT_FAILED,ta.UNDER_WRITING_SUCCESS].includes(n.orderStatus)?Promise.all([null==(e=Ea.value)?void 0:e.validate(),null==(l=ga.value)?void 0:l.validate(),null==(d=Na.value)?void 0:d.validate()]).then((a=>{if(!fa.value)return void _.fail("请勾选同意银行转账授权");const e=[{...a[0],id:da.value.id,paymentType:aa.FIRST_TERM},{...a[1],id:oa.value.id,paymentType:aa.RENEW_TERM},{...a[2],id:na.value.id,paymentType:aa.REPRISE,payInfoType:sa.value}],l=[{category:F.OBVERSE_BANK_CARD,name:"首期签约银行卡正面",objectType:q.INIT_SIGN,type:"png",uri:a[0].images[0],id:da.value.bankData.imagesId[0]},{category:F.REVERSE_BANK_CARD,name:"首期签约银行卡背面",objectType:q.INIT_SIGN,type:"png",uri:a[0].images[1],id:da.value.bankData.imagesId[1]}];oa.value.payInfoType===J.OTHER&&(l.push({category:F.OBVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:q.RENEWAL_SIGN,type:"png",uri:a[1].images[0],id:oa.value.bankData.imagesId[0]}),l.push({category:F.REVERSE_BANK_CARD,name:"续期签约银行卡正面",objectType:q.RENEWAL_SIGN,type:"png",uri:a[1].images[1],id:oa.value.bankData.imagesId[1]})),sa.value===J.OTHER&&(l.push({category:F.OBVERSE_BANK_CARD,name:"年金签约银行卡正面",objectType:q.ANNUAL_SIGN,type:"png",uri:a[2].images[0],id:na.value.bankData.imagesId[0]}),l.push({category:F.REVERSE_BANK_CARD,name:"年金签约银行卡背面",objectType:q.ANNUAL_SIGN,type:"png",uri:a[2].images[1],id:na.value.bankData.imagesId[1]})),G({...Y,pageCode:"payInfo",tenantOrderPayInfoList:e,extInfo:{...Y.extInfo,templateId:V,pageCode:"payInfo",shareFlag:D?"Y":"N",buttonCode:w.payInfo},operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:l}).then((a=>{const{code:e,data:l}=a;"10000"===e&&l.success&&p.push({path:W[l.pageAction.data.nextPageCode],query:t.query})}))})):K("paymentResult",t.query))}))},Ta=l((()=>{const a={...t.query,isShare:1,sharePageCode:"payInfo"};return`${window.location.origin}/phoneVerify?${h.stringify(a)}`})),Aa=(a=!1)=>{x({orderNo:c,saleUserId:y,tenantId:R}).then((e=>{const{code:l,data:t}=e;"10000"===l&&t&&(Y=t,ea.value=t.tenantOrderHolder.name,t.tenantOrderPayInfoList.forEach((a=>{a.paymentType===aa.FIRST_TERM?(da.value=a,da.value.bankData={...B,...a,images:[],imagesId:[]}):a.paymentType===aa.RENEW_TERM?(oa.value=a,oa.value.bankData={...a,images:[],imagesId:[]}):a.paymentType===aa.REPRISE&&(na.value=a,na.value.bankData={...a,images:[],imagesId:[]},sa.value=a.payInfoType)})),t.tenantOrderAttachmentList.forEach((a=>{a.objectType===q.INIT_SIGN?(a.category===F.OBVERSE_BANK_CARD&&(da.value.bankData.images[0]=a.uri,da.value.bankData.imagesId[0]=a.id),a.category===F.REVERSE_BANK_CARD&&(da.value.bankData.images[1]=a.uri,da.value.bankData.imagesId[1]=a.id)):a.objectType===q.RENEWAL_SIGN?(a.category===F.OBVERSE_BANK_CARD&&(oa.value.bankData.images[0]=a.uri,oa.value.bankData.imagesId[0]=a.id),a.category===F.REVERSE_BANK_CARD&&(oa.value.bankData.images[1]=a.uri,oa.value.bankData.imagesId[1]=a.id)):a.objectType===q.ANNUAL_SIGN&&(a.category===F.OBVERSE_BANK_CARD&&(na.value.bankData.images[0]=a.uri,na.value.bankData.imagesId[0]=a.id),a.category===F.REVERSE_BANK_CARD&&(na.value.bankData.images[1]=a.uri,na.value.bankData.imagesId[1]=a.id))})),a&&(t.tenantOrderPayInfoList.find((a=>a.paymentType===aa.FIRST_TERM&&a.bankCardNo))||_("用户未完成银行卡信息填写")))}))},Va=()=>{Aa(!0)};return I((()=>{P({insureCode:S,objectType:4,tenantId:R,orderNo:c}).then((({code:a,data:e})=>{"10000"===a&&(_a.value=e)})),M({pageCode:"payInfo",templateId:V}).then((a=>{const{code:e,data:l}=a;if("10000"===e){const a={};l.productInsureFactorList.forEach((e=>{a[e.moduleType]||(a[e.moduleType]={}),a[e.moduleType][e.code]=e})),ka.value=a}})),Aa()})),(a,e)=>{const l=k("van-switch"),t=k("van-checkbox"),p=k("ProSvg"),c=k("van-button"),y=k("ProPageWrap");return d(),n(y,null,{default:r((()=>[i("div",ra,[m(U,{title:"首期支付"},{default:r((()=>[m(O,{ref_key:"form1",ref:Ea},{default:r((()=>[ha("paymentMethod","INIT")?(d(),n(T,{key:0,modelValue:da.value.payMethod,"onUpdate:modelValue":e[0]||(e[0]=a=>da.value.payMethod=a),name:"payMethod",required:"",label:"支付方式","is-link":"",placeholder:"请选择","data-source":u(Q)},null,8,["modelValue","data-source"])):s("",!0),m(ua,{modelValue:da.value.bankData,"onUpdate:modelValue":e[1]||(e[1]=a=>da.value.bankData=a),"holder-name":ea.value,factor:ka.value.INIT},null,8,["modelValue","holder-name","factor"])])),_:1},512)])),_:1}),m(U,{title:"续期支付"},{default:r((()=>[m(O,{ref_key:"form2",ref:ga},{default:r((()=>[ha("sameAsInit","RENEWAL")?(d(),n(A,{key:0,label:"同首期",name:"payInfoType"},{input:r((()=>[m(l,{modelValue:oa.value.payInfoType,"onUpdate:modelValue":e[2]||(e[2]=a=>oa.value.payInfoType=a),size:"22","active-value":u(J).FIRST_SAME,"inactive-value":u(J).OTHER},null,8,["modelValue","active-value","inactive-value"])])),_:1})):s("",!0),ha("paymentMethod","RENEWAL")?(d(),n(T,{key:1,modelValue:oa.value.payMethod,"onUpdate:modelValue":e[3]||(e[3]=a=>oa.value.payMethod=a),name:"payMethod",label:"支付方式","is-link":"",placeholder:"请选择","data-source":u(Q),required:""},null,8,["modelValue","data-source"])):s("",!0),ha("overduePayment","RENEWAL")?(d(),n(T,{key:2,modelValue:oa.value.expiryMethod,"onUpdate:modelValue":e[4]||(e[4]=a=>oa.value.expiryMethod=a),name:"expiryMethod",label:"保费逾期未支付","is-link":"",placeholder:"请选择","data-source":u(Z),required:"","label-width":"200"},null,8,["modelValue","data-source"])):s("",!0),oa.value.payInfoType!==u(J).FIRST_SAME?(d(),n(ua,{key:3,modelValue:oa.value.bankData,"onUpdate:modelValue":e[5]||(e[5]=a=>oa.value.bankData=a),"holder-name":ea.value,factor:ka.value.RENEWAL},null,8,["modelValue","holder-name","factor"])):s("",!0)])),_:1},512)])),_:1}),m(U,{title:"年金领取银行卡",class:"reprise-card","show-divider":!1},{default:r((()=>[i("div",ia,[(d(!0),o(N,null,f(u(X),((a,e)=>(d(),o("div",{key:e,class:E(["reprise-card-item",{selected:sa.value===a.value}]),onClick:e=>{return l=a.value,void(sa.value=l);var l}},g(a.label),11,ma)))),128))]),m(O,{ref_key:"form3",ref:Na},{default:r((()=>[sa.value===u(J).OTHER?(d(),n(ua,{key:0,modelValue:na.value.bankData,"onUpdate:modelValue":e[6]||(e[6]=a=>na.value.bankData=a),"holder-name":ea.value,factor:ka.value.ANNUITY},null,8,["modelValue","holder-name","factor"])):s("",!0)])),_:1},512)])),_:1}),i("div",pa,[m(t,{modelValue:fa.value,"onUpdate:modelValue":e[7]||(e[7]=a=>fa.value=a),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),ca,m(L,{class:"file",title:"《银行转账授权》",content:_a.value.materialContent,type:u(j)(_a.value.materialContent,_a.value.materialSource+"")},null,8,["content","type"])]),i("div",ya,[u(D)?s("",!0):(d(),o("div",{key:0,class:"refresh-btn",onClick:Va},[i("div",null,[m(p,{name:"refresh"})]),va])),u(D)?s("",!0):(d(),n(la,{key:1,title:"邀请您填写银行卡信息",desc:"邀请您填写银行卡信息",link:u(Ta),"-":""},{default:r((()=>[m(c,{plain:"",type:"primary"},{default:r((()=>[ba])),_:1})])),_:1},8,["link"])),m(c,{type:"primary",class:"submit-btn",onClick:Ra},{default:r((()=>[Ia])),_:1})])])])),_:1})}}}),[["__scopeId","data-v-7a52b3b4"]]);export{ka as default};
