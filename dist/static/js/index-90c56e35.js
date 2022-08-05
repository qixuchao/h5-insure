var ie=Object.defineProperty,pe=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var K=(e,n,r)=>n in e?ie(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,v=(e,n)=>{for(var r in n||(n={}))ve.call(n,r)&&K(e,r,n[r]);if(U)for(var r of U(n))ce.call(n,r)&&K(e,r,n[r]);return e},c=(e,n)=>pe(e,me(n));import{g as ee,C as I,X as N,x as ye,h as B,m as $,n as t,z as f,k as b,a1 as ae,a2 as ue,y as T,B as M,Q as be,af as fe,M as De,r as S,j,s as Y,E as Ie,F as ge,T as Ee,J as Fe,I as ke}from"./vendor-b27da062.js";import{_ as le,f as V,D as R,k as Te,U as Ce,E as q,j as H,P as Be}from"./index-1d6c7814.js";import{c as h}from"./utils-b6782348.js";import{u as Re}from"./useDicData-dc783a59.js";import{c as Ve,a as he,n as Se}from"./index-c5419f0a.js";var z=(e=>(e[e.REAL_TIME=1]="REAL_TIME",e[e.BATCH=2]="BATCH",e))(z||{});const G=[{value:1,label:"\u5B9E\u65F6\u8F6C\u8D26"},{value:2,label:"\u6279\u91CF\u6263\u6B3E"}];h(G);var J=(e=>(e[e.DEBIT=1]="DEBIT",e[e.CREDIT=2]="CREDIT",e[e.PRE_PAY=3]="PRE_PAY",e[e.PRE_CREDIT=4]="PRE_CREDIT",e[e.OTHER=5]="OTHER",e))(J||{});const te=[{value:1,label:"\u501F\u8BB0\u5361"},{value:2,label:"\u8D37\u8BB0\u5361"},{value:3,label:"\u9884\u4ED8\u8D39\u5361"},{value:4,label:"\u51C6\u8D37\u8BB0\u5361"},{value:5,label:"\u5176\u4ED6"}];h(te);var k=(e=>(e[e.FIRST_TERM=1]="FIRST_TERM",e[e.RENEW_TERM=2]="RENEW_TERM",e[e.REPRISE=3]="REPRISE",e[e.OTHER=4]="OTHER",e))(k||{});const oe=[{value:1,label:"\u9996\u671F\u652F\u4ED8"},{value:2,label:"\u7EED\u671F\u652F\u4ED8"},{value:3,label:"\u5E74\u91D1\u9886\u53D6"},{value:4,label:"\u5176\u4ED6"}];h(oe);var E=(e=>(e[e.FIRST_SAME=1]="FIRST_SAME",e[e.RENEW_SAME=2]="RENEW_SAME",e[e.OTHER=3]="OTHER",e))(E||{});const _e=[{value:1,label:"\u540C\u9996\u671F"},{value:2,label:"\u540C\u7EED\u671F"},{value:3,label:"\u5176\u4ED6"}];h(oe);var ne=(e=>(e[e.AUTOMATIC_PADDING=1]="AUTOMATIC_PADDING",e[e.CANCEL=2]="CANCEL",e))(ne||{});const de=[{value:1,label:"\u81EA\u52A8\u57AB\u4ED8"},{value:2,label:"\u4E2D\u6B62\u5408\u540C"}];h(de);const Ae=e=>(ae("data-v-b4bb0f9e"),e=e(),ue(),e),xe={class:"com-bank-card-info"},Le=Ae(()=>T("span",{class:"field-title"},[M("\u94F6\u884C\u5361\u7167\u7247 "),T("span",{class:"sub-title"},"(\u9700\u4E0A\u4F20\u6B63\u53CD\u4E24\u9762)")],-1)),Oe=ee({props:{modelValue:{type:Object,default:()=>{}},holderName:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:n}){const r=e,_=Re("BANK"),s=I({bankCardType:J.DEBIT,bankCardNo:"",accountName:"",payBank:"",mobile:"",images:[]}),A=d=>d&&d.length===2?!0:"\u8BF7\u4E0A\u4F20\u94F6\u884C\u5361\u6B63\u53CD\u9762\u7167\u7247";N(()=>r.modelValue,d=>{s.value=d},{immediate:!0}),N(s,d=>{n("update:modelValue",d)});const P=ye(()=>_.value.map(d=>({label:d.name,value:d.code})));return(d,i)=>(B(),$("div",xe,[t(V,{modelValue:s.value.bankCardType,"onUpdate:modelValue":i[0]||(i[0]=p=>s.value.bankCardType=p),label:"\u5361\u7247\u7C7B\u578B",name:"bankCardType","data-source":f(te),"is-view":""},null,8,["modelValue","data-source"]),t(R,{modelValue:s.value.bankCardNo,"onUpdate:modelValue":i[1]||(i[1]=p=>s.value.bankCardNo=p),label:"\u94F6\u884C\u5361\u53F7",name:"bankCardNo",type:"number",required:""},null,8,["modelValue"]),t(R,{"model-value":e.holderName,label:"\u6301\u5361\u4EBA",name:"accountName","is-view":""},null,8,["model-value"]),t(V,{modelValue:s.value.payBank,"onUpdate:modelValue":i[2]||(i[2]=p=>s.value.payBank=p),name:"payBank",label:"\u5F00\u6237\u94F6\u884C","data-source":f(P),required:""},null,8,["modelValue","data-source"]),t(R,{label:"\u94F6\u884C\u5361\u7167\u7247",block:"","label-width":"100%",name:"images",rules:[{validator:A}]},{label:b(()=>[Le]),input:b(()=>[t(Te,{modelValue:s.value.images,"onUpdate:modelValue":i[3]||(i[3]=p=>s.value.images=p),"max-count":2,"upload-type":f(Ce).BANK_CARD},null,8,["modelValue","upload-type"])]),_:1},8,["rules"]),t(R,{modelValue:s.value.mobile,"onUpdate:modelValue":i[4]||(i[4]=p=>s.value.mobile=p),label:"\u9884\u7559\u624B\u673A\u53F7",type:"number",required:"",name:"mobile","validate-type":["phone"]},null,8,["modelValue"])]))}});var W=le(Oe,[["__scopeId","data-v-b4bb0f9e"]]);const we=e=>(ae("data-v-2bd36a56"),e=e(),ue(),e),je={class:"page-bank-card"},qe={class:"reprise-card-list"},He=["onClick"],We={class:"agree"},$e=M(" \u6295\u4FDD\u4EBA\u9605\u8BFB\u5E76\u63A5\u53D7 "),ze=we(()=>T("div",{class:"file"},"\u300A\u94F6\u884C\u8F6C\u8D26\u6388\u6743\u300B",-1)),Ge={class:"footer-button footer"},Me=M("\u4E0B\u4E00\u6B65"),Je=ee({setup(e){const n=be(),r=fe(),{orderNo:_="2022072710380711215",agentCode:s="D1234567-1",tenantId:A="9991000007",templateId:P=1}=n.query,d={bankCardType:J.DEBIT};let i={};const p=I(""),m=I({payMethod:z.REAL_TIME,bankData:c(v({},d),{imagesId:[]})}),o=I({payMethod:z.REAL_TIME,expiryMethod:ne.AUTOMATIC_PADDING,bankData:c(v({},d),{imagesId:[]}),payInfoType:E.FIRST_SAME}),y=I({bankData:c(v({},d),{imagesId:[]})}),C=I(E.FIRST_SAME),x=I(!1),Q=I(),Z=I(),X=I(),re=g=>{C.value=g},se=()=>{var g,u,D;if(!x.value){Ee.fail("\u8BF7\u52FE\u9009\u540C\u610F\u94F6\u884C\u8F6C\u8D26\u6388\u6743");return}Promise.all([(g=Q.value)==null?void 0:g.validate(),(u=Z.value)==null?void 0:u.validate(),(D=X.value)==null?void 0:D.validate()]).then(a=>{const L=[c(v({},a[0]),{id:m.value.id,paymentType:k.FIRST_TERM}),c(v({},a[1]),{id:o.value.id,paymentType:k.RENEW_TERM}),c(v({},a[2]),{id:y.value.id,paymentType:k.REPRISE,payInfoType:C.value})],F=[{category:24,name:"\u9996\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:5,type:"png",uri:a[0].images[0],id:m.value.bankData.imagesId[0]},{category:25,name:"\u9996\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u80CC\u9762",objectType:5,type:"png",uri:a[0].images[1],id:m.value.bankData.imagesId[1]}];o.value.payInfoType===E.OTHER&&(F.push({category:24,name:"\u7EED\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:6,type:"png",uri:a[1].images[0],id:o.value.bankData.imagesId[0]}),F.push({category:25,name:"\u7EED\u671F\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:6,type:"png",uri:a[1].images[1],id:o.value.bankData.imagesId[1]})),C.value===E.OTHER&&(F.push({category:24,name:"\u5E74\u91D1\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:7,type:"png",uri:a[2].images[0],id:y.value.bankData.imagesId[0]}),F.push({category:25,name:"\u5E74\u91D1\u7B7E\u7EA6\u94F6\u884C\u5361\u6B63\u9762",objectType:7,type:"png",uri:a[2].images[1],id:y.value.bankData.imagesId[1]})),Se(c(v({},i),{pageCode:"payInfo",tenantOrderPayInfoList:L,extInfo:c(v({},i.extInfo),{templateId:"1",pageCode:"payInfo"}),operateOption:{withPayInfo:!0,withAttachmentInfo:!0},tenantOrderAttachmentList:F})).then(l=>{const{code:O,data:w}=l;O==="10000"&&w.success&&r.push({path:Be[w.pageAction.data.nextPageCode],query:n.query})})})};return De(()=>{Ve({pageCode:"payInfo",templateId:1}).then(g=>{console.log("res",g)}),he({orderNo:_,saleUserId:s,tenantId:A}).then(g=>{const{code:u,data:D}=g;u==="10000"&&D&&(i=D,p.value=D.tenantOrderHolder.name,D.tenantOrderPayInfoList.forEach(a=>{a.paymentType===k.FIRST_TERM?(m.value=a,m.value.bankData=c(v(v({},d),a),{images:[],imagesId:[]})):a.paymentType===k.RENEW_TERM?(o.value=a,o.value.bankData=c(v({},a),{images:[],imagesId:[]})):a.paymentType===k.REPRISE&&(y.value=a,y.value.bankData=c(v({},a),{images:[],imagesId:[]}),C.value=a.payInfoType)}),D.tenantOrderAttachmentList.forEach(a=>{a.objectType===5?(a.category===24&&(m.value.bankData.images[0]=a.uri,m.value.bankData.imagesId[0]=a.id),a.category===25&&(m.value.bankData.images[1]=a.uri,m.value.bankData.imagesId[1]=a.id)):a.objectType===6?(a.category===24&&(o.value.bankData.images[0]=a.uri,o.value.bankData.imagesId[0]=a.id),a.category===25&&(o.value.bankData.images[1]=a.uri,o.value.bankData.imagesId[1]=a.id)):a.objectType===7&&(a.category===24&&(y.value.bankData.images[0]=a.uri,y.value.bankData.imagesId[0]=a.id),a.category===25&&(y.value.bankData.images[1]=a.uri,y.value.bankData.imagesId[1]=a.id))}))})}),(g,u)=>{const D=S("van-switch"),a=S("van-checkbox"),L=S("van-button"),F=S("ProPageWrap");return B(),j(F,null,{default:b(()=>[T("div",je,[t(H,{title:"\u9996\u671F\u652F\u4ED8"},{default:b(()=>[t(q,{ref_key:"form1",ref:Q},{default:b(()=>[t(V,{modelValue:m.value.payMethod,"onUpdate:modelValue":u[0]||(u[0]=l=>m.value.payMethod=l),name:"payMethod",required:"",label:"\u652F\u4ED8\u65B9\u5F0F","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":f(G)},null,8,["modelValue","data-source"]),t(W,{modelValue:m.value.bankData,"onUpdate:modelValue":u[1]||(u[1]=l=>m.value.bankData=l),"holder-name":p.value},null,8,["modelValue","holder-name"])]),_:1},512)]),_:1}),t(H,{title:"\u7EED\u671F\u652F\u4ED8"},{default:b(()=>[t(q,{ref_key:"form2",ref:Z},{default:b(()=>[t(R,{label:"\u540C\u9996\u671F",name:"payInfoType"},{input:b(()=>[t(D,{modelValue:o.value.payInfoType,"onUpdate:modelValue":u[2]||(u[2]=l=>o.value.payInfoType=l),size:"22","active-value":f(E).FIRST_SAME,"inactive-value":f(E).OTHER},null,8,["modelValue","active-value","inactive-value"])]),_:1}),t(V,{modelValue:o.value.payMethod,"onUpdate:modelValue":u[3]||(u[3]=l=>o.value.payMethod=l),name:"payMethod",label:"\u652F\u4ED8\u65B9\u5F0F","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":f(G),required:""},null,8,["modelValue","data-source"]),t(V,{modelValue:o.value.expiryMethod,"onUpdate:modelValue":u[4]||(u[4]=l=>o.value.expiryMethod=l),name:"expiryMethod",label:"\u4FDD\u8D39\u903E\u671F\u672A\u652F\u4ED8","is-link":"",placeholder:"\u8BF7\u9009\u62E9","data-source":f(de),required:"","label-width":"200"},null,8,["modelValue","data-source"]),o.value.payInfoType!==f(E).FIRST_SAME?(B(),j(W,{key:0,modelValue:o.value.bankData,"onUpdate:modelValue":u[5]||(u[5]=l=>o.value.bankData=l),"holder-name":p.value},null,8,["modelValue","holder-name"])):Y("",!0)]),_:1},512)]),_:1}),t(H,{title:"\u5E74\u91D1\u9886\u53D6\u94F6\u884C\u5361",class:"reprise-card","show-divider":!1},{default:b(()=>[T("div",qe,[(B(!0),$(ge,null,Ie(f(_e),(l,O)=>(B(),$("div",{key:O,class:Fe(["reprise-card-item",{selected:C.value===l.value}]),onClick:w=>re(l.value)},ke(l.label),11,He))),128))]),t(q,{ref_key:"form3",ref:X},{default:b(()=>[C.value===f(E).OTHER?(B(),j(W,{key:0,modelValue:y.value.bankData,"onUpdate:modelValue":u[6]||(u[6]=l=>y.value.bankData=l),"holder-name":p.value},null,8,["modelValue","holder-name"])):Y("",!0)]),_:1},512)]),_:1}),T("div",We,[t(a,{modelValue:x.value,"onUpdate:modelValue":u[7]||(u[7]=l=>x.value=l),class:"checkbox",shape:"square","icon-size":16},null,8,["modelValue"]),$e,ze]),T("div",Ge,[t(L,{type:"primary",onClick:se},{default:b(()=>[Me]),_:1})])])]),_:1})}}});var Ne=le(Je,[["__scopeId","data-v-2bd36a56"]]);export{Ne as default};
