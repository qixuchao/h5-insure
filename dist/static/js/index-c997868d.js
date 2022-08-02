var se=Object.defineProperty,ie=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var X=(e,d,i)=>d in e?se(e,d,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[d]=i,D=(e,d)=>{for(var i in d||(d={}))me.call(d,i)&&X(e,i,d[i]);if(Z)for(var i of Z(d))ve.call(d,i)&&X(e,i,d[i]);return e},I=(e,d)=>ie(e,pe(d));import{g as N,C as b,X as U,x as ce,h as T,m as H,n as o,z as c,k as v,a1 as Y,a2 as ee,y as F,B as z,Q as ye,af as be,M as fe,r as _,j as O,s as K,E as De,F as Ie,J as Ee,I as ge}from"./vendor-07b5d0eb.js";import{_ as ae,f as R,D as B,k as ke,U as Fe,E as w,j,P as Ce}from"./index-6ba7ac7e.js";import{c as V}from"./utils-b6782348.js";import{u as Te}from"./useDicData-6bc64cef.js";import{c as Be,a as Re,n as Ve}from"./index-01984808.js";var W=(e=>(e[e.REAL_TIME=1]="REAL_TIME",e[e.BATCH=2]="BATCH",e))(W||{});const $=[{value:1,label:"\u5B9E\u65F6\u8F6C\u8D26"},{value:2,label:"\u6279\u91CF\u6263\u6B3E"}];V($);var ue=(e=>(e[e.DEBIT=1]="DEBIT",e[e.CREDIT=2]="CREDIT",e[e.PRE_PAY=3]="PRE_PAY",e[e.PRE_CREDIT=4]="PRE_CREDIT",e[e.OTHER=5]="OTHER",e))(ue||{});const le=[{value:1,label:"\u501F\u8BB0\u5361"},{value:2,label:"\u8D37\u8BB0\u5361"},{value:3,label:"\u9884\u4ED8\u8D39\u5361"},{value:4,label:"\u51C6\u8D37\u8BB0\u5361"},{value:5,label:"\u5176\u4ED6"}];V(le);var k=(e=>(e[e.FIRST_TERM=1]="FIRST_TERM",e[e.RENEW_TERM=2]="RENEW_TERM",e[e.REPRISE=3]="REPRISE",e[e.OTHER=4]="OTHER",e))(k||{});const te=[{value:1,label:"\u9996\u671F\u652F\u4ED8"},{value:2,label:"\u7EED\u671F\u652F\u4ED8"},{value:3,label:"\u5E74\u91D1\u9886\u53D6"},{value:4,label:"\u5176\u4ED6"}];V(te);var E=(e=>(e[e.FIRST_SAME=1]="FIRST_SAME",e[e.RENEW_SAME=2]="RENEW_SAME",e[e.OTHER=3]="OTHER",e))(E||{});const he=[{value:1,label:"\u540C\u9996\u671F"},{value:2,label:"\u540C\u7EED\u671F"},{value:3,label:"\u5176\u4ED6"}];V(te);var oe=(e=>(e[e.AUTOMATIC_PADDING=1]="AUTOMATIC_PADDING",e[e.CANCEL=2]="CANCEL",e))(oe||{});const ne=[{value:1,label:"\u81EA\u52A8\u57AB\u4ED8"},{value:2,label:"\u4E2D\u6B62\u5408\u540C"}];V(ne);const Se=e=>(Y("data-v-b4bb0f9e"),e=e(),ee(),e),_e={class:"com-bank-card-info"},Ae=Se(()=>F("span",{class:"field-title"},[z("\u94F6\u884C\u5361\u7167\u7247 "),F("span",{class:"sub-title"},"(\u9700\u4E0A\u4F20\u6B63\u53CD\u4E24\u9762)")],-1)),xe=N({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:d}){const i=e,h=Te("BANK"),r=b({bankCardType:ue.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),S=p=>p&&p.length===2?!0:"\u8BF7\u4E0A\u4F20\u94F6\u884C\u5361\u6B63\u53CD\u9762\u7167\u7247";U(()=>i.modelValue,p=>{r.value=p},{immediate:!0}),U(r,p=>{d("update:modelValue",p)});const G=ce(()=>h.value.map(p=>({label:p.name,value:p.code})));return(p,s)=>(T(),H("div",_e,[o(R,{modelValue:r.value.bankCardType,"onUpdate:modelValue":s[0]||(s[0]=u=>r.value.bankCardType=u),label:"\u5361\u7247\u7C7B\u578B",name:"bankCardType","data-source":c(le),"is-view":""},null,8,["modelValue","data-source"]),o(B,{modelValue:r.value.bankCardNo,"onUpdate:modelValue":s[1]||(s[1]=u=>r.value.bankCardNo=u),label:"\u94F6\u884C\u5361\u53F7",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"]),o(B,{"model-value":e.holderName,label:"\u6301\u5361\u4EBA",name:"accountName","is-view":""},null,8,["model-value"]),o(R,{modelValue:r.value.payBank,"onUpdate:modelValue":s[2]||(s[2]=u=>r.value.payBank=u),name:"payBank",label:"\u5F00\u6237\u94F6\u884C","data-source":c(G),required:""},null,8,["modelValue","data-source"]),o(B,{label:"\u94F6\u884C\u5361\u7167\u7247",block:"","label-width":"100%",name:"images",rules:[{validator:S}]},{label:v(()=>[Ae]),input:v(()=>[o(ke,{modelValue:r.value.images,"onUpdate:modelValue":s[3]||(s[3]=u=>r.value.images=u),"max-count":2,"upload-type":c(Fe).BANK_CARD},null,8,["modelValue","upload-type"])]),_:1},8,["rules"]),o(B,{modelValue:r.value.mobile,"onUpdate:modelValue":s[4]||(s[4]=u=>r.value.mobile=u),label:"\u9884\u7559\u624B\u673A\u53F7",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])]))}});var q=ae(xe,[["__scopeId","data-v-b4bb0f9e"]]);const Le=e=>(Y("data-v-24833356"),e=e(),ee(),e),Oe={class:"page-bank-card"},we={class:"reprise-card-list"},je=["onClick"],qe={class:"agree"},He=z(" \u6295\u4FDD\u4EBA\u9605\u8BFB\u5E76\u63A5\u53D7 "),We=Le(()=>F("div",{class:"file"},"\u300A\u94F6\u884C\u8F6C\u8D26\u6388\u6743\u300B",-1)),$e={class:"footer-button footer"},ze=z("\u4E0B\u4E00\u6B65"),Ge=N({setup(e){const d=ye(),i=be(),{orderNo:h="2022072710380711215",saleUserId:r="D1234567-1",tenantId:S="9991000007",templateId:G=1}=d.query;let p={};const s=b(""),u=b({payMethod:W.REAL_TIME,bankData:{}}),n=b({payMethod:W.REAL_TIME,expiryMethod:oe.AUTOMATIC_PADDING,bankData:{},payInfoType:E.FIRST_SAME}),m=b({bankData:{}}),C=b(E.FIRST_SAME),M=b(!1),J=b(),Q=b(),P=b(),de=f=>{C.value=f},re=()=>{var f,l,y;Promise.all([(f=J.value)==null?void 0:f.validate(),(l=Q.value)==null?void 0:l.validate(),(y=P.value)==null?void 0:y.validate()]).then(a=>{const A=[I(D({},a[0]),{id:u.value.id,paymentType:k.FIRST_TERM}),I(D({},a[1]),{id:n.value.id,paymentType:k.RENEW_TERM}),I(D({},a[2]),{id:m.value.id,paymentType:k.REPRISE,payInfoType:C.value})],g=[{category:24,name:"\u9996\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:5,type:"png",uri:a[0].images[0],id:u.value.bankData.imagesId[0]},{category:25,name:"\u9996\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u80CC\u9762",objectType:5,type:"png",uri:a[0].images[1],id:u.value.bankData.imagesId[1]}];n.value.payInfoType===E.OTHER&&(g.push({category:24,name:"\u7EED\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:6,type:"png",uri:a[1].images[0],id:n.value.bankData.imagesId[0]}),g.push({category:25,name:"\u7EED\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:6,type:"png",uri:a[1].images[1],id:n.value.bankData.imagesId[1]})),C.value===E.OTHER&&(g.push({category:24,name:"\u5E74\u91D1\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:7,type:"png",uri:a[2].images[0],id:m.value.bankData.imagesId[0]}),g.push({category:25,name:"\u5E74\u91D1\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:7,type:"png",uri:a[2].images[1],id:m.value.bankData.imagesId[1]})),Ve(I(D({},p),{pageCode:"payInfo",tenantOrderPayInfoList:A,extInfo:I(D({},p.extInfo),{templateId:"1",pageCode:"payInfo"}),operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:g})).then(t=>{const{code:x,data:L}=t;x==="10000"&&L.success&&i.push({path:Ce[L.pageAction.data.nextPageCode],query:{orderNo:h,saleUserId:r,tenantId:S}})})})};return fe(()=>{Be({pageCode:"payInfo",templateId:1}).then(f=>{console.log("res",f)}),Re({orderNo:h,saleUserId:r,tenantId:S}).then(f=>{const{code:l,data:y}=f;l==="10000"&&y&&(p=y,s.value=y.tenantOrderHolder.name,y.tenantOrderPayInfoList.forEach(a=>{a.paymentType===k.FIRST_TERM?(u.value=a,u.value.bankData=I(D({},a),{images:[],imagesId:[]})):a.paymentType===k.RENEW_TERM?(n.value=a,n.value.bankData=I(D({},a),{images:[],imagesId:[]})):a.paymentType===k.REPRISE&&(m.value=a,m.value.bankData=I(D({},a),{images:[],imagesId:[]}),C.value=a.payInfoType)}),y.tenantOrderAttachmentList.forEach(a=>{a.objectType===5?(a.category===24&&(u.value.bankData.images[0]=a.uri,u.value.bankData.imagesId[0]=a.id),a.category===25&&(u.value.bankData.images[1]=a.uri,u.value.bankData.imagesId[1]=a.id)):a.objectType===6?(a.category===24&&(n.value.bankData.images[0]=a.uri,n.value.bankData.imagesId[0]=a.id),a.category===25&&(n.value.bankData.images[1]=a.uri,n.value.bankData.imagesId[1]=a.id)):a.objectType===7&&(a.category===24&&(m.value.bankData.images[0]=a.uri,m.value.bankData.imagesId[0]=a.id),a.category===25&&(m.value.bankData.images[1]=a.uri,m.value.bankData.imagesId[1]=a.id))}))})}),(f,l)=>{const y=_("van-switch"),a=_("van-checkbox"),A=_("van-button"),g=_("ProPageWrap");return T(),O(g,null,{default:v(()=>[F("div",Oe,[o(j,{title:"\u9996\u671F\u652F\u4ED8"},{default:v(()=>[o(w,{ref_key:"form1",ref:J},{default:v(()=>[o(R,{modelValue:u.value.payMethod,"onUpdate:modelValue":l[0]||(l[0]=t=>u.value.payMethod=t),name:"payMethod",required:"",label:"\u652F\u4ED8\u65B9\u5F0F","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":c($)},null,8,["modelValue","data-source"]),o(q,{modelValue:u.value.bankData,"onUpdate:modelValue":l[1]||(l[1]=t=>u.value.bankData=t),"holder-name":s.value},null,8,["modelValue","holder-name"])]),_:1},512)]),_:1}),o(j,{title:"\u7EED\u671F\u652F\u4ED8"},{default:v(()=>[o(w,{ref_key:"form2",ref:Q},{default:v(()=>[o(B,{label:"\u540C\u9996\u671F",name:"payInfoType"},{input:v(()=>[o(y,{modelValue:n.value.payInfoType,"onUpdate:modelValue":l[2]||(l[2]=t=>n.value.payInfoType=t),size:"22","active-value":c(E).FIRST_SAME,"inactive-value":c(E).OTHER},null,8,["modelValue","active-value","inactive-value"])]),_:1}),o(R,{modelValue:n.value.payMethod,"onUpdate:modelValue":l[3]||(l[3]=t=>n.value.payMethod=t),name:"payMethod",label:"\u652F\u4ED8\u65B9\u5F0F","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":c($),required:""},null,8,["modelValue","data-source"]),o(R,{modelValue:n.value.expiryMethod,"onUpdate:modelValue":l[4]||(l[4]=t=>n.value.expiryMethod=t),name:"expiryMethod",label:"\u4FDD\u8D39\u903E\u671F\u672A\u652F\u4ED8","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":c(ne),required:"","label-width":"200"},null,8,["modelValue","data-source"]),n.value.payInfoType!==c(E).FIRST_SAME?(T(),O(q,{key:0,modelValue:n.value.bankData,"onUpdate:modelValue":l[5]||(l[5]=t=>n.value.bankData=t),"holder-name":s.value},null,8,["modelValue","holder-name"])):K("",!0)]),_:1},512)]),_:1}),o(j,{title:"\u5E74\u91D1\u9886\u53D6\u94F6\u884C\u5361",class:"reprise-card","show-divider":!1},{default:v(()=>[F("div",we,[(T(!0),H(Ie,null,De(c(he),(t,x)=>(T(),H("div",{key:x,class:Ee(["reprise-card-item",{selected:C.value===t.value}]),onClick:L=>de(t.value)},ge(t.label),11,je))),128))]),o(w,{ref_key:"form3",ref:P},{default:v(()=>[C.value===c(E).OTHER?(T(),O(q,{key:0,modelValue:m.value.bankData,"onUpdate:modelValue":l[6]||(l[6]=t=>m.value.bankData=t),"holder-name":s.value},null,8,["modelValue","holder-name"])):K("",!0)]),_:1},512)]),_:1}),F("div",qe,[o(a,{modelValue:M.value,"onUpdate:modelValue":l[7]||(l[7]=t=>M.value=t),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),He,We]),F("div",$e,[o(A,{type:"primary",onClick:re},{default:v(()=>[ze]),_:1})])])]),_:1})}}});var Ue=ae(Ge,[["__scopeId","data-v-24833356"]]);export{Ue as default};
