import{d as e,r as a,aP as n,aR as t,z as i,bJ as r,L as m,R as o,aQ as s,c,A as d,V as l,e as p,g as u,U as y}from"./index-d375f4be.js";import{d as f}from"./debounce-eed12388.js";import{c as E,n as T}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-ea51ccdc.js";/* empty css              */import"./useDicData-d2ece2f7.js";import{P as R}from"./index-1d87ca2c.js";import{P as h,B as I,a as _}from"./bankCard-edaa97ef.js";const v=e({__name:"PayInfo",props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>[]},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{expose:v,emit:S}){const M=e,g={BANK_PAY:"1",ALI_PAY:"2",WECHAT_PAY:"3"},L=a(null);a();const D=["cardType","bankCard","paymentType"],A=[{title:"首期支付",schema:[],payInfoType:h.FIRST_TERM,formData:{paymentType:"1",paymentMethod:"1",cardType:I.DEBIT},config:{cardType:{isView:!0}},objectType:n.INIT_SIGN},{title:"续期支付",schema:[],payInfoType:h.RENEW_TERM,formData:{paymentType:"1",paymentMethod:"1",paymentGenre:String(_.FIRST_SAME),cardType:I.DEBIT},config:{cardType:{isView:!0}},objectType:n.RENEWAL_SIGN},{title:"年金领取银行卡",schema:[],payInfoType:h.REPRISE,formData:{paymentGenre:String(_.FIRST_SAME)},config:{},objectType:n.ANNUAL_SIGN}].map((e=>({...e,nanoid:t()}))),P=[["initialPaymentMethod","initialCardType","initialBankCard","initialPaymentType"],["renewalPaymentGenre","renewalPaymentMethod","renewalCardType","renewalBankCard","renewalPaymentType","premiumOverdue"],["annuityPaymentGenre","annuityBankCard"]],b=i({schemaList:r(A)}),N=m((()=>["FIRST_TERM","RENEW_TERM","REPRISE"].reduce(((e,a)=>{const n=(t=a,b.schemaList.findIndex((e=>String(e.payInfoType)===String(h[t]))));var t;return n>-1&&(e[a]=n),e}),{}))),j=(e,a)=>{var n,t;return e>-1&&(null==(t=null==(n=b.schemaList[e])?void 0:n.formData)?void 0:t.paymentGenre)===`${_[a]}`},F=e=>{if("string"!=typeof e||!e)return"";const[a,n]=e.match(/^(?:initial|renewal|annuity)(.*)$/)||[];return n?T(n):e},C=(e,a)=>{var n;const{formData:t}=b.schemaList[a]||{},i={...t,bankCardImage:s(t.bankCardImage)?t.bankCardImage.map((a=>({...a,objectType:A[e].objectType}))):t.bankCardImage};Object.assign(null==(n=b.schemaList[e])?void 0:n.formData,i)},W=e=>e&&D.includes(e);return o((()=>b.schemaList.map((e=>{var a;return null==(a=null==e?void 0:e.formData)?void 0:a.paymentMethod}))),(()=>{E("支付方式变动"),b.schemaList.forEach(((e,a)=>{const{formData:n,schema:i}=e||{},r=[g.ALI_PAY,g.WECHAT_PAY].includes(String(null==n?void 0:n.paymentMethod)),m=(null==n?void 0:n.paymentGenre)===String(_.FIRST_SAME);i.forEach((e=>{e.hidden=(m||r)&&W(e.name)})),e.nanoid=t()}))}),{deep:!0,immediate:!0}),o((()=>{var e;return null==(e=b.schemaList[N.value.FIRST_TERM])?void 0:e.formData}),f((e=>{const{REPRISE:a,RENEW_TERM:n}=N.value;E("首期数据变动"),j(n,"FIRST_SAME")&&C(n,N.value.FIRST_TERM),j(a,"FIRST_SAME")&&C(a,n)}),500),{deep:!0}),o((()=>{var e;return null==(e=b.schemaList[N.value.RENEW_TERM])?void 0:e.formData}),f((e=>{E("续期数据变动");const{REPRISE:a,RENEW_TERM:n}=N.value;j(a,"RENEW_SAME")&&C(a,n)}),500),{deep:!0}),o((()=>{var e,a;return null==(a=null==(e=b.schemaList[N.value.RENEW_TERM])?void 0:e.formData)?void 0:a.paymentGenre}),(e=>{E("续期支付类型变动");const{FIRST_TERM:a,RENEW_TERM:n}=N.value,t=e===String(_.FIRST_SAME),{schema:i}=b.schemaList[n]||{};t?C(n,a):b.schemaList[n]&&(b.schemaList[n].formData={...A[n].formData,paymentGenre:e}),s(i)&&i.forEach((e=>{e.hidden=W(e.name)}))})),o((()=>{var e,a;return null==(a=null==(e=b.schemaList[N.value.REPRISE])?void 0:e.formData)?void 0:a.paymentGenre}),(e=>{const{FIRST_TERM:a,RENEW_TERM:n,REPRISE:t}=N.value;if(E("年金支付类型变动"),[_.FIRST_SAME,_.RENEW_SAME].includes(Number(e))){const i=e===String(_.FIRST_SAME)?a:n;C(t,i)}else b.schemaList[t]&&(b.schemaList[t].formData={...A[t].formData,paymentGenre:e})}),{immediate:!0}),o([()=>M.schema,()=>M.config],(()=>{let e=[];b.schemaList=M.schema.reduce(((a,n)=>{const t=P.findIndex((e=>e.includes(n.name)));return"paymentDrawType"===n.name&&(e=n.columns.map((e=>e.code))),t>-1&&a[t].schema.push({...n,name:F(n.name),payInfoType:A[t].payInfoType}),a}),r(A)).map(((e,a)=>({...e,config:{...e.config,...M.config[a]||{}},nanoid:t()}))).filter((({schema:a,...n})=>e.includes(`${n.payInfoType}`)))}),{deep:!0,immediate:!0}),o((()=>M.modelValue),(e=>{s(e)&&b.schemaList.forEach(((a,n)=>{Object.assign(a.formData,e[n])}))}),{deep:!0,immediate:!0}),o((()=>{var e;return null==(e=b.schemaList)?void 0:e.map((e=>e.formData))}),(e=>{s(e)&&S("update:modelValue",e.map(((e,a)=>{const{payInfoType:n}=b.schemaList[a];return{...e,payInfoType:n}})))}),{deep:!0,immediate:!0}),v({validate:e=>{var a;return Promise.all(null==(a=L.value)?void 0:a.map((e=>e.validate())))}}),(a,n)=>(c(!0),d(y,null,l(u(b).schemaList,(a=>(c(),p(u(R),{ref_for:!0,ref_key:"payInfoFormRef",ref:L,key:a.nanoid,schema:a.schema,model:a.formData,config:a.config,title:a.title,"is-view":e.isView,"extra-provision":{objectType:a.objectType,objectId:a.formData.id}},null,8,["schema","model","config","title","is-view","extra-provision"])))),128))}});export{v as _};
