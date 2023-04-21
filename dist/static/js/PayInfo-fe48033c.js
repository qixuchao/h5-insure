import{d as e,r as a,aB as n,aY as t,z as i,bF as m,L as s,R as r,aA as o,c as d,A as l,V as y,e as c,g as u,U as p}from"./index-e25bdee1.js";import{B as E}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-cc1168f8.js";/* empty css              */import{P as h,B as f,a as T}from"./bankCard-2ff7387d.js";import{P as R}from"./index-7dec53c9.js";const v=e({__name:"PayInfo",props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>[]},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{expose:v,emit:_}){const M=e,S={BANK_PAY:"1",ALI_PAY:"2",WECHAT_PAY:"3"},P=a(null);a();const I=[{title:"首期支付",schema:[],paymentType:h.FIRST_TERM,formData:{initialCardType:f.DEBIT},config:{initialCardType:{isView:!0}},nanoid:n(),paymentMethodKey:"initialPaymentMethod",hiddenKeyList:["initialCardType","initialBankCard","initialPaymentType"]},{title:"续期支付",schema:[],paymentType:h.RENEW_TERM,formData:{renewalPaymentGenre:String(T.FIRST_SAME),renewalCardType:f.DEBIT},config:{renewalCardType:{isView:!0}},nanoid:n(),hiddenKeyList:["renewalCardType","renewalBankCard","renewalPaymentType"],paymentGenreKey:"renewalPaymentGenre",paymentMethodKey:"renewalPaymentMethod"},{title:"年金领取银行卡",schema:[],paymentType:h.REPRISE,formData:{annuityPaymentGenre:String(T.FIRST_SAME)},config:{},nanoid:n(),paymentGenreKey:"annuityPaymentGenre",paymentMethodKey:"annuityPaymentMethod",hiddenKeyList:["annuityBankCard"]}],L=[["initialPaymentMethod","initialCardType","initialBankCard","initialPaymentType"],["renewalPaymentGenre","renewalPaymentMethod","renewalCardType","renewalBankCard","renewalPaymentType","premiumOverdue"],["annuityPaymentGenre","annuityBankCard"]];t();const D=i({schemaList:m(I)}),g=s((()=>["FIRST_TERM","RENEW_TERM","REPRISE"].reduce(((e,a)=>{var n;return e[a]=(n=a,D.schemaList.findIndex((e=>String(e.paymentType)===String(h[n])))),e}),{}))),A=(e,a)=>{var n,t;return e>-1&&(null==(t=null==(n=D.schemaList[e])?void 0:n.formData)?void 0:t.sameFirstIssue)===`${T[a]}`},w=(e,a)=>{const n=D.schemaList[e].paymentMethodKey,t=D.schemaList[a].paymentMethodKey;Object.assign(D.schemaList[e].formData,((e,a)=>{let n={};a&&(n=Object.keys(a).map((n=>({[n]:e[a[n]]}))));return E.reduce(((a,n)=>(a[n]=e[n],a)),n)})(D.schemaList[a].formData,{[n]:t}))};return r((()=>D.schemaList.map((e=>{var a;return null==(a=e.formData)?void 0:a[e.paymentMethodKey]}))),(()=>{D.schemaList.forEach(((e,a)=>{const{formData:t,schema:i,hiddenKeyList:m}=e||{},s=[S.ALI_PAY,S.WECHAT_PAY].includes(null==t?void 0:t[e.paymentMethodKey]);i.forEach((e=>{e.hidden=s&&m.includes(e.name)})),e.nanoid=n()}))}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=D.schemaList[g.value.FIRST_TERM])?void 0:e.formData}),(e=>{const a=g.value.RENEW_TERM,n=g.value.REPRISE;A(a,"FIRST_SAME")&&w(a,g.value.FIRST_TERM),A(n,"FIRST_SAME")&&w(n,a)}),{deep:!0}),r((()=>{var e;return null==(e=D.schemaList[g.value.RENEW_TERM])?void 0:e.formData}),(e=>{const a=g.value.REPRISE;A(a,"RENEW_SAME")&&w(a,g.value.RENEW_TERM)}),{deep:!0}),r((()=>{var e,a;const{RENEW_TERM:n}=g.value;return null==(a=null==(e=D.schemaList[n])?void 0:e.formData)?void 0:a[I[n].paymentGenreKey]}),(e=>{const a=g.value.FIRST_TERM,n=g.value.RENEW_TERM;e===String(T.FIRST_SAME)?w(n,a):D.schemaList[n].formData={...I[n].formData,sameFirstIssue:e}}),{immediate:!0}),r((()=>{var e,a;const{REPRISE:n}=g.value;return null==(a=null==(e=D.schemaList[n])?void 0:e.formData)?void 0:a[I[n].paymentGenreKey]}),(e=>{const a=g.value.FIRST_TERM,n=g.value.RENEW_TERM,t=g.value.REPRISE;if([T.FIRST_SAME,T.RENEW_SAME].includes(Number(e))){const i=e===String(T.FIRST_SAME)?a:n;w(t,i)}else D.schemaList[t].formData={...I[t].formData,sameFirstIssue:e}}),{immediate:!0}),r([()=>M.schema,()=>M.config],(()=>{let e=[];o(M.schema)&&(D.schemaList=m(I)),D.schemaList=M.schema.reduce(((a,n)=>{const t=L.findIndex((e=>e.includes(n.name)));return"paymentDrawType"===n.name&&(e=n.columns.map((e=>e.code))),t>-1&&a[t].schema.push({...n,paymentType:I[t].paymentType}),a}),m(I)).map(((e,a)=>({...e,config:{...e.config,...M.config[a]||{}},nanoid:n()}))).filter((({schema:a,...n})=>!e.includes(`${n.paymentType}`)?n:{schema:a,...n}))}),{deep:!0,immediate:!0}),r((()=>M.modelValue),(e=>{o(e)&&D.schemaList.forEach(((a,n)=>{Object.assign(a.formData,e[n])}))}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=D.schemaList)?void 0:e.map((e=>e.formData))}),(e=>{o(e)&&_("update:modelValue",e.map((e=>({...e,paymentType:e.paymentType}))))}),{deep:!0,immediate:!0}),v({validate:e=>{var a;return Promise.all(null==(a=P.value)?void 0:a.map((e=>e.validate())))}}),(a,n)=>(d(!0),l(p,null,y(u(D).schemaList,(a=>(d(),c(u(R),{ref_for:!0,ref_key:"payInfoFormRef",ref:P,key:a.nanoid,schema:a.schema,model:a.formData,config:a.config,title:a.title,"is-view":e.isView},null,8,["schema","model","config","title","is-view"])))),128))}});export{v as _};
