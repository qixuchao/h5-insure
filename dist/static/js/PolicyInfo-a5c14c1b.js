import{ao as e,d as a,j as n,bd as t,bk as i,r as l,k as o,z as r,o as m,c as s,q as u,m as c,u as d,be as f,F as p,bh as E,bq as v,af as R,bj as y,bw as T,aJ as h,bx as I,by as S}from"./index-c36709f0.js";const _=[{value:5,label:"支付宝",iconName:"ali"},{value:6,label:"微信",iconName:"wechat"}];e([{value:1,label:"实时转账"},{value:2,label:"批量扣款"}]);var b=(e=>(e[e.DEBIT=1]="DEBIT",e[e.CREDIT=2]="CREDIT",e[e.PRE_PAY=3]="PRE_PAY",e[e.PRE_CREDIT=4]="PRE_CREDIT",e[e.OTHER=5]="OTHER",e))(b||{});e([{value:1,label:"借记卡"},{value:2,label:"贷记卡"},{value:3,label:"预付费卡"},{value:4,label:"准贷记卡"},{value:5,label:"其他"}]);var M=(e=>(e[e.FIRST_TERM=1]="FIRST_TERM",e[e.RENEW_TERM=2]="RENEW_TERM",e[e.REPRISE=3]="REPRISE",e[e.OTHER=4]="OTHER",e))(M||{});const g=[{value:1,label:"首期支付"},{value:2,label:"续期支付"},{value:3,label:"年金领取"},{value:4,label:"其他"}];e(g);var D=(e=>(e[e.FIRST_SAME=1]="FIRST_SAME",e[e.RENEW_SAME=2]="RENEW_SAME",e[e.OTHER=3]="OTHER",e))(D||{});e(g);e([{value:1,label:"自动垫付"},{value:2,label:"中止合同"}]);const N=a({__name:"PayInfo",props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>[]},isView:{type:Boolean,default:!1},userData:{default:()=>({})}},emits:["update:modelValue"],setup(e,{expose:a,emit:_}){const g=e,N="1",L=n(null),w=["cardType","bankCard"],P=["orderId","tenantId","id"],V={paymentType:"1",paymentMethod:"1",expiryMethod:"1",cardType:b.DEBIT},A=[...Object.keys(V),"paymentGenre"],F=[{title:"首期支付",schema:[],payInfoType:M.FIRST_TERM,formData:{},config:{cardType:{isView:!0},bankCard:{accountName:{isView:!0}}},objectType:t.INIT_SIGN},{title:"续期支付",schema:[],payInfoType:M.RENEW_TERM,formData:{paymentGenre:String(D.FIRST_SAME)},config:{cardType:{isView:!0},bankCard:{accountName:{isView:!0}}},objectType:t.RENEWAL_SIGN},{title:"年金领取银行卡",schema:[],payInfoType:M.REPRISE,formData:{paymentMethod:"1",paymentGenre:String(D.FIRST_SAME)},config:{},objectType:t.ANNUAL_SIGN}].map((e=>({...e,nanoid:i()}))),k=[["initialPaymentMethod","initialCardType","initialBankCard","initialPaymentType"],["renewalPaymentGenre","renewalPaymentMethod","renewalCardType","renewalBankCard","renewalPaymentType","expiryMethod"],["annuityPaymentGenre","annuityBankCard"]],C=l({schemaList:[]}),G=o((()=>{var e,a;return(null==(a=null==(e=g.userData.insuredList)?void 0:e[0])?void 0:a.name)||null})),W=o((()=>{var e,a;return(null==(a=null==(e=g.userData)?void 0:e.holder)?void 0:a.name)||null})),j=o((()=>["FIRST_TERM","RENEW_TERM","REPRISE"].reduce(((e,a)=>{const n=(t=a,C.schemaList.findIndex((e=>String(e.payInfoType)===String(M[t]))));var t;return n>-1&&(e[a]=n),e}),{}))),x=(e,a)=>{var n,t;return e>-1&&(null==(t=null==(n=C.schemaList[e])?void 0:n.formData)?void 0:t.paymentGenre)===`${D[a]}`},O=o((()=>{const e=C.schemaList.map((e=>`${e.payInfoType}`));return F.filter((a=>e.includes(String(a.payInfoType))))})),B=(e,a)=>{var n;const{formData:t}=C.schemaList[a]||{},{paymentGenre:i,id:l,...o}=t||{},r={...o,bankCardImage:h(o.bankCardImage)?o.bankCardImage.map((a=>{var n,t;return{...a,objectType:null==(t=null==(n=O.value)?void 0:n[e])?void 0:t.objectType}})):[]};Object.assign(null==(n=C.schemaList[e])?void 0:n.formData,r)};return r((()=>C.schemaList.map((e=>{var a,n;return[null==(a=null==e?void 0:e.formData)?void 0:a.paymentMethod,null==(n=null==e?void 0:e.formData)?void 0:n.paymentGenre]}))),((e,a)=>{E("支付方式/支付类型变动"),C.schemaList.forEach(((e,a)=>{const{formData:n,schema:t}=e||{},l=N===String(null==n?void 0:n.paymentMethod),o=[D.FIRST_SAME,D.RENEW_SAME].includes(Number(null==n?void 0:n.paymentGenre));t.forEach((e=>{e.hidden=(o||!l)&&((e,a=!1)=>{if(e){const n=[...w];return a&&n.push("paymentMethod"),n.includes(e)}return!1})(e.name,o)})),e.nanoid=i()}))}),{deep:!0,immediate:!0}),r((()=>{var e;return{...null==(e=C.schemaList[j.value.FIRST_TERM])?void 0:e.formData}}),((e,a)=>{if(g.isView||v(e,a))return!1;const{REPRISE:n,RENEW_TERM:t}=j.value;E("首期数据变动"),x(t,"FIRST_SAME")&&B(t,j.value.FIRST_TERM),x(n,"FIRST_SAME")&&B(n,t)}),{deep:!0}),r((()=>{var e;return null==(e=C.schemaList[j.value.RENEW_TERM])?void 0:e.formData}),((e,a)=>{if(g.isView||v(e,a))return!1;E("续期数据变动");const{REPRISE:n,RENEW_TERM:t}=j.value;x(n,"RENEW_SAME")&&B(n,t)}),{deep:!0}),r((()=>C.schemaList.map((e=>{var a;return null==(a=null==e?void 0:e.formData)?void 0:a.paymentMethod}))),((e,a)=>{JSON.stringify(e)!==JSON.stringify(a)&&C.schemaList.forEach(((n,t)=>{const i=e[t],l=a[t],o=i&&l&&String(i)!==String(l);n.payInfoType!==M.REPRISE&&o&&"1"!==String(i)&&R(n.formData,{...y(n.formData,(e=>S.includes(e))),bankCardImage:null})}))}),{deep:!0}),r((()=>{var e,a;return null==(a=null==(e=C.schemaList[j.value.RENEW_TERM])?void 0:e.formData)?void 0:a.paymentGenre}),(e=>{var a,n;if(g.isView)return!1;E("续期支付类型变动");const{FIRST_TERM:t,RENEW_TERM:l}=j.value;String(e)===String(D.FIRST_SAME)?B(l,t):C.schemaList[l]&&(R(C.schemaList[l].formData,{...y(C.schemaList[l].formData,(e=>!P.includes(e))),...null==(n=null==(a=O.value)?void 0:a[l])?void 0:n.formData,accountName:W.value,paymentGenre:e}),C.schemaList[l].nanoid=i())})),r((()=>{var e,a;return null==(a=null==(e=C.schemaList[j.value.REPRISE])?void 0:e.formData)?void 0:a.paymentGenre}),((e,a)=>{var n,t;if(g.isView||!e||!a||e===a)return!1;const{FIRST_TERM:l,RENEW_TERM:o,REPRISE:r}=j.value,m=[D.FIRST_SAME,D.RENEW_SAME].includes(Number(e));if(E("年金支付类型变动"),m){const a=String(e)===String(D.FIRST_SAME)?l:o;B(r,a)}else C.schemaList[r]&&(R(C.schemaList[r].formData,{...y(C.schemaList[r].formData,(e=>!P.includes(e))),...null==(t=null==(n=O.value)?void 0:n[r])?void 0:t.formData,accountName:G.value,paymentGenre:e}),C.schemaList[r].nanoid=i())}),{immediate:!0}),r([()=>g.schema,()=>g.config],(()=>{let e=[];C.schemaList=g.schema.reduce(((a,n)=>{const t=k.findIndex((e=>e.includes(n.name)));if("paymentDrawType"===n.name&&(e=n.columns.map((e=>e.code))),t>-1){const e=(e=>{if("string"!=typeof e||!e)return"";const[a,n]=e.match(/^(?:initial|renewal|annuity)(.*)$/)||[];return n?I(n):e})(n.name);if(A.includes(e)){const i=(({name:e,columns:a},n)=>{if(h(a)){const t={...n,...V},i=h(a)&&a.find((a=>`${a.code}`==`${t[e]}`));return{[e]:i?t[e]:null}}return{}})({name:e,columns:n.columns},F[t].formData);R(a[t].formData,i),R(F[t].formData,i)}a[t].schema.push({...n,name:e,payInfoType:F[t].payInfoType})}return a}),T(F)).map(((e,a)=>({...e,config:{...e.config,...g.config[a]||{}},nanoid:i()}))).filter((({schema:a,...n})=>e.includes(`${n.payInfoType}`)&&h(a)))}),{deep:!0,immediate:!0}),r((()=>g.modelValue),(e=>{h(e)&&C.schemaList.forEach(((a,n)=>{R(a.formData,e[n])}))}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=C.schemaList)?void 0:e.map((e=>e.formData))}),(e=>{h(e)&&_("update:modelValue",e.map(((e,a)=>{const{payInfoType:n}=C.schemaList[a];return{...e,payInfoType:n}})))}),{deep:!0,immediate:!0}),r((()=>[W.value,G.value]),(([e,a])=>{(e||a)&&C.schemaList.forEach((n=>{const t=n.payInfoType===M.REPRISE;n.formData.accountName=t?a:e}))}),{deep:!0}),a({validate:e=>{var a;return Promise.all(L.value?null==(a=L.value)?void 0:a.map((e=>null==e?void 0:e.validate())):[])}}),(e,a)=>(m(!0),s(p,null,u(d(C).schemaList,((a,n)=>(m(),c(d(f),{ref_for:!0,ref_key:"payInfoFormRef",ref:L,key:`${a.nanoid}_${n}`,schema:a.schema,model:a.formData,config:a.config,title:a.title,"is-view":e.isView,"extra-provision":{objectType:a.objectType,objectId:a.formData.id}},null,8,["schema","model","config","title","is-view","extra-provision"])))),128))}}),L=a({name:"policyInfo"}),w=a({...L,props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>[]},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{expose:a,emit:t}){const i=e,o=l({schema:{},modelValue:{},config:{}}),s=n();return r([()=>i.schema,()=>i.config],(()=>{o.schema=i.schema,o.config=i.config}),{deep:!0,immediate:!0}),r((()=>i.modelValue),((e,a)=>{e!==a&&Object.assign(o.modelValue,e)}),{deep:!0,immediate:!0}),r((()=>o.modelValue),(e=>{t("update:modelValue",e)}),{deep:!0,immediate:!0}),a({}),(e,a)=>(m(),c(d(f),{ref_key:"policyInfoFormRef",ref:s,schema:d(o).schema,model:d(o).modelValue,config:d(o).config,title:"保单信息","is-view":e.isView},null,8,["schema","model","config","is-view"]))}});export{_ as A,N as _,w as a};
