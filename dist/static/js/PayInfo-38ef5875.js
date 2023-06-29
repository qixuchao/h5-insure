import{d as e,r as a,aO as n,aQ as t,ap as i,G as r,L as o,bI as s,aP as m,b as l,c as d,N as u,g as c,f as p,M as f}from"./index-0f8b4bae.js";import{m as y}from"./merge-e7788e50.js";import{i as v,P as E}from"./index-40c2a2a4.js";import{c as h,r as T,B as R,m as I}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-5a8ff7fd.js";/* empty css              */import"./useDicData-4c080f44.js";import{B as S,P as _,a as D}from"./bankCard-e3906c1f.js";const M=e({__name:"PayInfo",props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>[]},isView:{type:Boolean,default:!1},userData:{default:()=>({})}},emits:["update:modelValue"],setup(e,{expose:M,emit:g}){const L=e,N="1",b=a(null),P=["cardType","bankCard"],j=["orderId","tenantId","id"],w={paymentType:"1",paymentMethod:"1",expiryMethod:"1",cardType:S.DEBIT},G=[...Object.keys(w),"paymentGenre"],F=[{title:"首期支付",schema:[],payInfoType:_.FIRST_TERM,formData:{},config:{cardType:{isView:!0}},objectType:n.INIT_SIGN},{title:"续期支付",schema:[],payInfoType:_.RENEW_TERM,formData:{paymentGenre:String(D.FIRST_SAME)},config:{cardType:{isView:!0}},objectType:n.RENEWAL_SIGN},{title:"年金领取银行卡",schema:[],payInfoType:_.REPRISE,formData:{paymentMethod:"1",paymentGenre:String(D.FIRST_SAME)},config:{},objectType:n.ANNUAL_SIGN}].map((e=>({...e,nanoid:t()}))),A=[["initialPaymentMethod","initialCardType","initialBankCard","initialPaymentType"],["renewalPaymentGenre","renewalPaymentMethod","renewalCardType","renewalBankCard","renewalPaymentType","expiryMethod"],["annuityPaymentGenre","annuityBankCard"]],W=i({schemaList:[]}),k=r((()=>{var e,a;return(null==(a=null==(e=L.userData.insuredList)?void 0:e[0])?void 0:a.name)||null})),x=r((()=>{var e,a;return(null==(a=null==(e=L.userData)?void 0:e.holder)?void 0:a.name)||null})),C=r((()=>["FIRST_TERM","RENEW_TERM","REPRISE"].reduce(((e,a)=>{const n=(t=a,W.schemaList.findIndex((e=>String(e.payInfoType)===String(_[t]))));var t;return n>-1&&(e[a]=n),e}),{}))),V=(e,a)=>{var n,t;return e>-1&&(null==(t=null==(n=W.schemaList[e])?void 0:n.formData)?void 0:t.paymentGenre)===`${D[a]}`},$=r((()=>{const e=W.schemaList.map((e=>`${e.payInfoType}`));return F.filter((a=>e.includes(String(a.payInfoType))))})),B=(e,a)=>{var n;const{formData:t}=W.schemaList[a]||{},{paymentGenre:i,id:r,...o}=t||{},s={...o,bankCardImage:m(o.bankCardImage)?o.bankCardImage.map((a=>{var n,t;return{...a,objectType:null==(t=null==(n=$.value)?void 0:n[e])?void 0:t.objectType}})):[]};Object.assign(null==(n=W.schemaList[e])?void 0:n.formData,s)};return o((()=>W.schemaList.map((e=>{var a,n;return[null==(a=null==e?void 0:e.formData)?void 0:a.paymentMethod,null==(n=null==e?void 0:e.formData)?void 0:n.paymentGenre]}))),((e,a)=>{h("支付方式/支付类型变动"),W.schemaList.forEach(((e,a)=>{const{formData:n,schema:i}=e||{},r=N===String(null==n?void 0:n.paymentMethod),o=[D.FIRST_SAME,D.RENEW_SAME].includes(Number(null==n?void 0:n.paymentGenre));i.forEach((e=>{e.hidden=(o||!r)&&((e,a=!1)=>{if(e){const n=[...P];return a&&n.push("paymentMethod"),n.includes(e)}return!1})(e.name,o)})),e.nanoid=t()}))}),{deep:!0,immediate:!0}),o((()=>{var e;return{...null==(e=W.schemaList[C.value.FIRST_TERM])?void 0:e.formData}}),((e,a)=>{if(L.isView||v(e,a))return!1;const{REPRISE:n,RENEW_TERM:t}=C.value;h("首期数据变动"),V(t,"FIRST_SAME")&&B(t,C.value.FIRST_TERM),V(n,"FIRST_SAME")&&B(n,t)}),{deep:!0}),o((()=>{var e;return null==(e=W.schemaList[C.value.RENEW_TERM])?void 0:e.formData}),((e,a)=>{if(L.isView||v(e,a))return!1;h("续期数据变动");const{REPRISE:n,RENEW_TERM:t}=C.value;V(n,"RENEW_SAME")&&B(n,t)}),{deep:!0}),o((()=>W.schemaList.map((e=>{var a;return null==(a=null==e?void 0:e.formData)?void 0:a.paymentMethod}))),((e,a)=>{JSON.stringify(e)!==JSON.stringify(a)&&W.schemaList.forEach(((n,t)=>{const i=e[t],r=a[t],o=i&&r&&String(i)!==String(r);n.payInfoType!==_.REPRISE&&o&&"1"!==String(i)&&y(n.formData,{...T(n.formData,(e=>R.includes(e))),bankCardImage:null})}))}),{deep:!0}),o((()=>{var e,a;return null==(a=null==(e=W.schemaList[C.value.RENEW_TERM])?void 0:e.formData)?void 0:a.paymentGenre}),(e=>{var a,n;if(L.isView)return!1;h("续期支付类型变动");const{FIRST_TERM:i,RENEW_TERM:r}=C.value;String(e)===String(D.FIRST_SAME)?B(r,i):W.schemaList[r]&&(y(W.schemaList[r].formData,{...T(W.schemaList[r].formData,(e=>!j.includes(e))),...null==(n=null==(a=$.value)?void 0:a[r])?void 0:n.formData,accountName:x.value,paymentGenre:e}),W.schemaList[r].nanoid=t())})),o((()=>{var e,a;return null==(a=null==(e=W.schemaList[C.value.REPRISE])?void 0:e.formData)?void 0:a.paymentGenre}),((e,a)=>{var n,i;if(L.isView||!e||!a||e===a)return!1;const{FIRST_TERM:r,RENEW_TERM:o,REPRISE:s}=C.value,m=[D.FIRST_SAME,D.RENEW_SAME].includes(Number(e));if(h("年金支付类型变动"),m){const a=String(e)===String(D.FIRST_SAME)?r:o;B(s,a)}else W.schemaList[s]&&(y(W.schemaList[s].formData,{...T(W.schemaList[s].formData,(e=>!j.includes(e))),...null==(i=null==(n=$.value)?void 0:n[s])?void 0:i.formData,accountName:k.value,paymentGenre:e}),W.schemaList[s].nanoid=t())}),{immediate:!0}),o([()=>L.schema,()=>L.config],(()=>{let e=[];W.schemaList=L.schema.reduce(((a,n)=>{const t=A.findIndex((e=>e.includes(n.name)));if("paymentDrawType"===n.name&&(e=n.columns.map((e=>e.code))),t>-1){const e=(e=>{if("string"!=typeof e||!e)return"";const[a,n]=e.match(/^(?:initial|renewal|annuity)(.*)$/)||[];return n?I(n):e})(n.name);if(G.includes(e)){const i=(({name:e,columns:a},n)=>{if(m(a)){const t={...n,...w},i=m(a)&&a.find((a=>`${a.code}`==`${t[e]}`));return{[e]:i?t[e]:null}}return{}})({name:e,columns:n.columns},F[t].formData);y(a[t].formData,i),y(F[t].formData,i)}a[t].schema.push({...n,name:e,payInfoType:F[t].payInfoType})}return a}),s(F)).map(((e,a)=>({...e,config:{...e.config,...L.config[a]||{}},nanoid:t()}))).filter((({schema:a,...n})=>e.includes(`${n.payInfoType}`)&&m(a)))}),{deep:!0,immediate:!0}),o((()=>L.modelValue),(e=>{m(e)&&W.schemaList.forEach(((a,n)=>{y(a.formData,e[n])}))}),{deep:!0,immediate:!0}),o((()=>{var e;return null==(e=W.schemaList)?void 0:e.map((e=>e.formData))}),(e=>{m(e)&&g("update:modelValue",e.map(((e,a)=>{const{payInfoType:n}=W.schemaList[a];return{...e,payInfoType:n}})))}),{deep:!0,immediate:!0}),o((()=>[x.value,k.value]),(([e,a])=>{(e||a)&&W.schemaList.forEach((n=>{const t=n.payInfoType===_.REPRISE;n.formData.accountName=t?a:e}))}),{deep:!0}),M({validate:e=>{var a;return Promise.all(b.value?null==(a=b.value)?void 0:a.map((e=>null==e?void 0:e.validate())):[])}}),(a,n)=>(l(!0),d(f,null,u(p(W).schemaList,((a,n)=>(l(),c(p(E),{ref_for:!0,ref_key:"payInfoFormRef",ref:b,key:`${a.nanoid}_${n}`,schema:a.schema,model:a.formData,config:a.config,title:a.title,"is-view":e.isView,"extra-provision":{objectType:a.objectType,objectId:a.formData.id}},null,8,["schema","model","config","title","is-view","extra-provision"])))),128))}});export{M as _};
