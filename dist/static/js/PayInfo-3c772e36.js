import{d as e,j as a,bd as n,bk as t,r as i,k as r,z as o,bh as s,bq as m,af as l,bj as u,bP as d,aJ as c,o as p,c as f,q as y,m as E,u as v,be as h,F as T,bQ as R,bR as I}from"./index-75b55068.js";import{B as S,P as D,a as M}from"./PolicyInfo-5b620d28.js";const _=e({__name:"PayInfo",props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>[]},isView:{type:Boolean,default:!1},userData:{default:()=>({})}},emits:["update:modelValue"],setup(e,{expose:_,emit:g}){const L=e,b="1",N=a(null),P=["cardType","bankCard"],w=["orderId","tenantId","id"],F={paymentType:"1",paymentMethod:"1",expiryMethod:"1",cardType:S.DEBIT},G=[...Object.keys(F),"paymentGenre"],j=[{title:"首期支付",schema:[],payInfoType:D.FIRST_TERM,formData:{},config:{cardType:{isView:!0}},objectType:n.INIT_SIGN},{title:"续期支付",schema:[],payInfoType:D.RENEW_TERM,formData:{paymentGenre:String(M.FIRST_SAME)},config:{cardType:{isView:!0}},objectType:n.RENEWAL_SIGN},{title:"年金领取银行卡",schema:[],payInfoType:D.REPRISE,formData:{paymentMethod:"1",paymentGenre:String(M.FIRST_SAME)},config:{},objectType:n.ANNUAL_SIGN}].map((e=>({...e,nanoid:t()}))),A=[["initialPaymentMethod","initialCardType","initialBankCard","initialPaymentType"],["renewalPaymentGenre","renewalPaymentMethod","renewalCardType","renewalBankCard","renewalPaymentType","expiryMethod"],["annuityPaymentGenre","annuityBankCard"]],k=i({schemaList:[]}),V=r((()=>{var e,a;return(null==(a=null==(e=L.userData.insuredList)?void 0:e[0])?void 0:a.name)||null})),W=r((()=>{var e,a;return(null==(a=null==(e=L.userData)?void 0:e.holder)?void 0:a.name)||null})),C=r((()=>["FIRST_TERM","RENEW_TERM","REPRISE"].reduce(((e,a)=>{const n=(t=a,k.schemaList.findIndex((e=>String(e.payInfoType)===String(D[t]))));var t;return n>-1&&(e[a]=n),e}),{}))),x=(e,a)=>{var n,t;return e>-1&&(null==(t=null==(n=k.schemaList[e])?void 0:n.formData)?void 0:t.paymentGenre)===`${M[a]}`},$=r((()=>{const e=k.schemaList.map((e=>`${e.payInfoType}`));return j.filter((a=>e.includes(String(a.payInfoType))))})),B=(e,a)=>{var n;const{formData:t}=k.schemaList[a]||{},{paymentGenre:i,id:r,...o}=t||{},s={...o,bankCardImage:c(o.bankCardImage)?o.bankCardImage.map((a=>{var n,t;return{...a,objectType:null==(t=null==(n=$.value)?void 0:n[e])?void 0:t.objectType}})):[]};Object.assign(null==(n=k.schemaList[e])?void 0:n.formData,s)};return o((()=>k.schemaList.map((e=>{var a,n;return[null==(a=null==e?void 0:e.formData)?void 0:a.paymentMethod,null==(n=null==e?void 0:e.formData)?void 0:n.paymentGenre]}))),((e,a)=>{s("支付方式/支付类型变动"),k.schemaList.forEach(((e,a)=>{const{formData:n,schema:i}=e||{},r=b===String(null==n?void 0:n.paymentMethod),o=[M.FIRST_SAME,M.RENEW_SAME].includes(Number(null==n?void 0:n.paymentGenre));i.forEach((e=>{e.hidden=(o||!r)&&((e,a=!1)=>{if(e){const n=[...P];return a&&n.push("paymentMethod"),n.includes(e)}return!1})(e.name,o)})),e.nanoid=t()}))}),{deep:!0,immediate:!0}),o((()=>{var e;return{...null==(e=k.schemaList[C.value.FIRST_TERM])?void 0:e.formData}}),((e,a)=>{if(L.isView||m(e,a))return!1;const{REPRISE:n,RENEW_TERM:t}=C.value;s("首期数据变动"),x(t,"FIRST_SAME")&&B(t,C.value.FIRST_TERM),x(n,"FIRST_SAME")&&B(n,t)}),{deep:!0}),o((()=>{var e;return null==(e=k.schemaList[C.value.RENEW_TERM])?void 0:e.formData}),((e,a)=>{if(L.isView||m(e,a))return!1;s("续期数据变动");const{REPRISE:n,RENEW_TERM:t}=C.value;x(n,"RENEW_SAME")&&B(n,t)}),{deep:!0}),o((()=>k.schemaList.map((e=>{var a;return null==(a=null==e?void 0:e.formData)?void 0:a.paymentMethod}))),((e,a)=>{JSON.stringify(e)!==JSON.stringify(a)&&k.schemaList.forEach(((n,t)=>{const i=e[t],r=a[t],o=i&&r&&String(i)!==String(r);n.payInfoType!==D.REPRISE&&o&&"1"!==String(i)&&l(n.formData,{...u(n.formData,(e=>I.includes(e))),bankCardImage:null})}))}),{deep:!0}),o((()=>{var e,a;return null==(a=null==(e=k.schemaList[C.value.RENEW_TERM])?void 0:e.formData)?void 0:a.paymentGenre}),(e=>{var a,n;if(L.isView)return!1;s("续期支付类型变动");const{FIRST_TERM:i,RENEW_TERM:r}=C.value;String(e)===String(M.FIRST_SAME)?B(r,i):k.schemaList[r]&&(l(k.schemaList[r].formData,{...u(k.schemaList[r].formData,(e=>!w.includes(e))),...null==(n=null==(a=$.value)?void 0:a[r])?void 0:n.formData,accountName:W.value,paymentGenre:e}),k.schemaList[r].nanoid=t())})),o((()=>{var e,a;return null==(a=null==(e=k.schemaList[C.value.REPRISE])?void 0:e.formData)?void 0:a.paymentGenre}),((e,a)=>{var n,i;if(L.isView||!e||!a||e===a)return!1;const{FIRST_TERM:r,RENEW_TERM:o,REPRISE:m}=C.value,d=[M.FIRST_SAME,M.RENEW_SAME].includes(Number(e));if(s("年金支付类型变动"),d){const a=String(e)===String(M.FIRST_SAME)?r:o;B(m,a)}else k.schemaList[m]&&(l(k.schemaList[m].formData,{...u(k.schemaList[m].formData,(e=>!w.includes(e))),...null==(i=null==(n=$.value)?void 0:n[m])?void 0:i.formData,accountName:V.value,paymentGenre:e}),k.schemaList[m].nanoid=t())}),{immediate:!0}),o([()=>L.schema,()=>L.config],(()=>{let e=[];k.schemaList=L.schema.reduce(((a,n)=>{const t=A.findIndex((e=>e.includes(n.name)));if("paymentDrawType"===n.name&&(e=n.columns.map((e=>e.code))),t>-1){const e=(e=>{if("string"!=typeof e||!e)return"";const[a,n]=e.match(/^(?:initial|renewal|annuity)(.*)$/)||[];return n?R(n):e})(n.name);if(G.includes(e)){const i=(({name:e,columns:a},n)=>{if(c(a)){const t={...n,...F},i=c(a)&&a.find((a=>`${a.code}`==`${t[e]}`));return{[e]:i?t[e]:null}}return{}})({name:e,columns:n.columns},j[t].formData);l(a[t].formData,i),l(j[t].formData,i)}a[t].schema.push({...n,name:e,payInfoType:j[t].payInfoType})}return a}),d(j)).map(((e,a)=>({...e,config:{...e.config,...L.config[a]||{}},nanoid:t()}))).filter((({schema:a,...n})=>e.includes(`${n.payInfoType}`)&&c(a)))}),{deep:!0,immediate:!0}),o((()=>L.modelValue),(e=>{c(e)&&k.schemaList.forEach(((a,n)=>{l(a.formData,e[n])}))}),{deep:!0,immediate:!0}),o((()=>{var e;return null==(e=k.schemaList)?void 0:e.map((e=>e.formData))}),(e=>{c(e)&&g("update:modelValue",e.map(((e,a)=>{const{payInfoType:n}=k.schemaList[a];return{...e,payInfoType:n}})))}),{deep:!0,immediate:!0}),o((()=>[W.value,V.value]),(([e,a])=>{(e||a)&&k.schemaList.forEach((n=>{const t=n.payInfoType===D.REPRISE;n.formData.accountName=t?a:e}))}),{deep:!0}),_({validate:e=>{var a;return Promise.all(N.value?null==(a=N.value)?void 0:a.map((e=>null==e?void 0:e.validate())):[])}}),(a,n)=>(p(!0),f(T,null,y(v(k).schemaList,((a,n)=>(p(),E(v(h),{ref_for:!0,ref_key:"payInfoFormRef",ref:N,key:`${a.nanoid}_${n}`,schema:a.schema,model:a.formData,config:a.config,title:a.title,"is-view":e.isView,"extra-provision":{objectType:a.objectType,objectId:a.formData.id}},null,8,["schema","model","config","title","is-view","extra-provision"])))),128))}});export{_};
