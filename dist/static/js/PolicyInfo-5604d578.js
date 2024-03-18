import{ae as a,d as e,o as n,c as t,f as l,a as i,F as o,s,e as r,j as m,ai as u,aj as d,r as c,k as p,E as v,b as f,ak as E,w as y,p as h,u as R,al as T,q as I,_ as g,am as S,an as _,ao as D,M as b,ap as M,ag as w,aq as N,ar as L,as as k,at as P,au as V,av as C,aw as A,ax as F}from"./index-e61895f6.js";const j=[{value:5,label:"支付宝",iconName:"ali"},{value:6,label:"微信",iconName:"wechat"}];a([{value:1,label:"实时转账"},{value:2,label:"批量扣款"}]);var G=(a=>(a[a.DEBIT=1]="DEBIT",a[a.CREDIT=2]="CREDIT",a[a.PRE_PAY=3]="PRE_PAY",a[a.PRE_CREDIT=4]="PRE_CREDIT",a[a.OTHER=5]="OTHER",a))(G||{});a([{value:1,label:"借记卡"},{value:2,label:"贷记卡"},{value:3,label:"预付费卡"},{value:4,label:"准贷记卡"},{value:5,label:"其他"}]);var W=(a=>(a[a.FIRST_TERM=1]="FIRST_TERM",a[a.RENEW_TERM=2]="RENEW_TERM",a[a.REPRISE=3]="REPRISE",a[a.OTHER=4]="OTHER",a))(W||{});const O=[{value:1,label:"首期支付"},{value:2,label:"续期支付"},{value:3,label:"年金领取"},{value:4,label:"其他"}];a(O);var x=(a=>(a[a.FIRST_SAME=1]="FIRST_SAME",a[a.RENEW_SAME=2]="RENEW_SAME",a[a.OTHER=3]="OTHER",a))(x||{});a(O);a([{value:1,label:"自动垫付"},{value:2,label:"中止合同"}]);const B={key:0,class:"head-warning-wrap"},$={key:0,class:"warning-icon"},H=[i("span",null,"!",-1)],J={class:"warning-text"},U=e({name:"HeadWaring"}),q=e({...U,props:{labels:{default:()=>[]},showIcon:{type:Boolean,default:!0}},setup:a=>(a,e)=>a.labels.length>0?(n(),t("div",B,[a.showIcon?(n(),t("div",$,H)):l("",!0),i("div",J,[(n(!0),t(o,null,s(a.labels,(a=>(n(),t("span",{key:a},r(a),1)))),128))])])):l("",!0)});const z={class:"img-wrap"},Y=["src"];var K=g(e({__name:"PayInfo",props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>[]},isView:{type:Boolean,default:!1},userData:{default:()=>({})}},emits:["update:modelValue"],setup(a,{expose:e,emit:l}){const r=a,g="1",j=m(!1),O=m(0),B=[{img:"/h5insure/static/jpg/picidikou-cd1b0c24.jpg",title:"实时转账"},{img:"/h5insure/static/jpg/shishizhuanzhang-680e7d84.jpg",title:"批次抵扣"}],$=()=>{j.value=!0},H=m(null),J=["cardType","bankCard"],U=["orderId","tenantId","id"],K={paymentType:"1",paymentMethod:"1",expiryMethod:"1",cardType:G.DEBIT},Q=[...Object.keys(K),"paymentGenre"],X=[{title:"首期支付",schema:[],payInfoType:W.FIRST_TERM,formData:{},config:{cardType:{isView:!0},bankCard:{accountName:{isView:!0}}},objectType:u.INIT_SIGN},{title:"续期支付",schema:[],payInfoType:W.RENEW_TERM,formData:{paymentGenre:String(x.FIRST_SAME)},config:{cardType:{isView:!0},bankCard:{accountName:{isView:!0}}},objectType:u.RENEWAL_SIGN},{title:"年金领取银行卡",schema:[],payInfoType:W.REPRISE,formData:{paymentMethod:"1",paymentGenre:String(x.FIRST_SAME)},config:{},objectType:u.ANNUAL_SIGN}].map((a=>({...a,nanoid:d()}))),Z=[["initialPaymentMethod","initialCardType","initialBankCard","initialPaymentType"],["renewalPaymentGenre","renewalPaymentMethod","renewalCardType","renewalBankCard","renewalPaymentType","expiryMethod"],["annuityPaymentGenre","annuityBankCard"]],aa=c({schemaList:[]}),ea=p((()=>{var a,e;return(null==(e=null==(a=r.userData.insuredList)?void 0:a[0])?void 0:e.name)||null})),na=p((()=>{var a,e;return(null==(e=null==(a=r.userData)?void 0:a.holder)?void 0:e.name)||null})),ta=p((()=>["FIRST_TERM","RENEW_TERM","REPRISE"].reduce(((a,e)=>{const n=(t=e,aa.schemaList.findIndex((a=>String(a.payInfoType)===String(W[t]))));var t;return n>-1&&(a[e]=n),a}),{}))),la=(a,e)=>{var n,t;return a>-1&&(null==(t=null==(n=aa.schemaList[a])?void 0:n.formData)?void 0:t.paymentGenre)===`${x[e]}`},ia=p((()=>{const a=aa.schemaList.map((a=>`${a.payInfoType}`));return X.filter((e=>a.includes(String(e.payInfoType))))})),oa=(a,e)=>{var n;const{formData:t}=aa.schemaList[e]||{},{paymentGenre:l,id:i,...o}=t||{},s={bankCardImage:D(o.bankCardImage)?o.bankCardImage.map((e=>{var n,t;return{...e,objectType:null==(t=null==(n=ia.value)?void 0:n[a])?void 0:t.objectType}})):[]};Object.keys(o).reduce(((a,e)=>(o[e]&&(a[e]=o[e]),a)),s),w(null==(n=aa.schemaList[a])?void 0:n.formData,s)};return v((()=>aa.schemaList.map((a=>{var e,n;return[null==(e=null==a?void 0:a.formData)?void 0:e.paymentMethod,null==(n=null==a?void 0:a.formData)?void 0:n.paymentGenre]}))),((a,e)=>{S("支付方式/支付类型变动"),aa.schemaList.forEach(((a,e)=>{const{formData:n,schema:t}=a||{},l=g===String(null==n?void 0:n.paymentMethod),i=[x.FIRST_SAME,x.RENEW_SAME].includes(Number(null==n?void 0:n.paymentGenre));t.forEach((a=>{a.hidden=(i||!l)&&((a,e=!1)=>{if(a){const n=[...J];return e&&n.push("paymentMethod"),n.includes(a)}return!1})(a.name,i)})),a.nanoid=d()}))}),{deep:!0,immediate:!0}),v((()=>aa.schemaList.map((a=>{var e;return null==(e=null==a?void 0:a.formData)?void 0:e.paymentType}))),((a,e)=>{!_(a,e)&&D(e)&&aa.schemaList.forEach(((a,n)=>{var t,l;(null==(t=null==a?void 0:a.formData)?void 0:t.paymentType)===(null==e?void 0:e[n])&&"1"!=`${null==(l=null==a?void 0:a.formData)?void 0:l.paymentGenre}`||b((()=>Object.assign(a.formData,N(null==a?void 0:a.formData,(a=>["bankCardNo","payBank","mobile","bankCardImage","verificationCode"].includes(a))))))}))}),{deep:!0}),v((()=>aa.schemaList.map((a=>{var e;return null==(e=null==a?void 0:a.formData)?void 0:e.payBank}))),((a,e)=>{!_(a,e)&&D(e)&&aa.schemaList.forEach(((a,n)=>{var t,l;(null==(t=null==a?void 0:a.formData)?void 0:t.payBank)===(null==e?void 0:e[n])&&"1"!=`${null==(l=null==a?void 0:a.formData)?void 0:l.paymentGenre}`||b((()=>Object.assign(a.formData,N(null==a?void 0:a.formData,(a=>["bankCardNo","mobile","bankCardImage","verificationCode"].includes(a))))))}))}),{deep:!0}),v((()=>{var a;return M(null==(a=aa.schemaList[ta.value.FIRST_TERM])?void 0:a.formData)}),((a,e)=>{if(r.isView||JSON.stringify(a)===JSON.stringify(e))return!1;const{REPRISE:n,RENEW_TERM:t}=ta.value;S("首期数据变动"),la(t,"FIRST_SAME")&&oa(t,ta.value.FIRST_TERM),la(n,"FIRST_SAME")&&oa(n,t)}),{deep:!0}),v((()=>{var a;return null==(a=aa.schemaList[ta.value.RENEW_TERM])?void 0:a.formData}),((a,e)=>{if(r.isView||_(a,e))return!1;S("续期数据变动");const{REPRISE:n,RENEW_TERM:t}=ta.value;la(n,"RENEW_SAME")&&oa(n,t)}),{deep:!0}),v((()=>aa.schemaList.map((a=>{var e;return null==(e=null==a?void 0:a.formData)?void 0:e.paymentMethod}))),((a,e)=>{JSON.stringify(a)!==JSON.stringify(e)&&aa.schemaList.forEach(((n,t)=>{const l=a[t],i=e[t],o=l&&i&&String(l)!==String(i);n.payInfoType!==W.REPRISE&&o&&"1"!==String(l)&&w(n.formData,{...N(n.formData,(a=>F.includes(a))),bankCardImage:null})}))}),{deep:!0}),v((()=>{var a,e;return null==(e=null==(a=aa.schemaList[ta.value.RENEW_TERM])?void 0:a.formData)?void 0:e.paymentGenre}),(a=>{var e,n;if(r.isView)return!1;S("续期支付类型变动");const{FIRST_TERM:t,RENEW_TERM:l}=ta.value;String(a)===String(x.FIRST_SAME)?oa(l,t):aa.schemaList[l]&&(w(aa.schemaList[l].formData,{...N(aa.schemaList[l].formData,(a=>!U.includes(a))),...null==(n=null==(e=ia.value)?void 0:e[l])?void 0:n.formData,accountName:na.value,paymentGenre:a}),aa.schemaList[l].nanoid=d())})),v((()=>{var a,e;return null==(e=null==(a=aa.schemaList[ta.value.REPRISE])?void 0:a.formData)?void 0:e.paymentGenre}),((a,e)=>{var n,t;if(r.isView||!a||!e||a===e)return!1;const{FIRST_TERM:l,RENEW_TERM:i,REPRISE:o}=ta.value,s=[x.FIRST_SAME,x.RENEW_SAME].includes(Number(a));if(S("年金支付类型变动"),s){const e=String(a)===String(x.FIRST_SAME)?l:i;oa(o,e)}else aa.schemaList[o]&&(w(aa.schemaList[o].formData,{...N(aa.schemaList[o].formData,(a=>!U.includes(a))),...null==(t=null==(n=ia.value)?void 0:n[o])?void 0:t.formData,accountName:ea.value,paymentGenre:a}),aa.schemaList[o].nanoid=d())}),{immediate:!0}),v([()=>r.schema,()=>r.config],(()=>{let a=[];aa.schemaList=r.schema.reduce(((e,n)=>{const t=Z.findIndex((a=>a.includes(n.name)));if("paymentDrawType"===n.name&&(a=n.columns.map((a=>a.code))),t>-1){const a=(a=>{if("string"!=typeof a||!a)return"";const[e,n]=a.match(/^(?:initial|renewal|annuity)(.*)$/)||[];return n?A(n):a})(n.name);if(Q.includes(a)){const l=(({name:a,columns:e},n)=>{if(D(e)){const t={...n,...K},l=D(e)&&e.find((e=>`${e.code}`==`${t[a]}`));return{[a]:l?t[a]:null}}return{}})({name:a,columns:n.columns},X[t].formData);w(e[t].formData,l),w(X[t].formData,l)}e[t].schema.push({...n,name:a,payInfoType:X[t].payInfoType})}return e}),L(X)).map(((a,e)=>({...a,config:{...a.config,...r.config[e]||{}},nanoid:d()}))).filter((({schema:e,...n})=>a.includes(`${n.payInfoType}`)&&D(e)))}),{deep:!0,immediate:!0}),v((()=>r.modelValue),(a=>{D(a)&&aa.schemaList.forEach(((e,n)=>{var t;w(e.formData,a[n]),w(e.config,{payBank:{category:null==(t=null==a?void 0:a[n])?void 0:t.paymentType}})}))}),{deep:!0,immediate:!0}),v((()=>{var a;return null==(a=aa.schemaList)?void 0:a.map((a=>a.formData))}),(a=>{D(a)&&l("update:modelValue",a.map(((a,e)=>{const{payInfoType:n}=aa.schemaList[e];return{...a,payInfoType:n}})))}),{deep:!0,immediate:!0}),v((()=>[na.value,ea.value]),(([a,e])=>{(a||e)&&aa.schemaList.forEach((n=>{const t=n.payInfoType===W.REPRISE;n.formData.accountName=t?e:a}))}),{deep:!0}),e({validate:a=>{var e;return Promise.all(H.value?null==(e=H.value)?void 0:e.map((a=>null==a?void 0:a.validate())):[])}}),(a,e)=>{const l=k,r=P,m=V,u=C;return n(),t(o,null,[f(l,{title:"支付方式","show-line":!1,"show-divider":!1},E({_:2},[a.isView?void 0:{name:"extra",fn:y((()=>[i("span",{class:"extra",onClick:$},"银行限额表")])),key:"0"}]),1024),(n(!0),t(o,null,s(R(aa).schemaList,((e,t)=>(n(),h(R(T),{ref_for:!0,ref_key:"payInfoFormRef",ref:H,key:`${e.nanoid}_${t}`,schema:e.schema,model:e.formData,config:e.config,title:e.title,"show-icon":!1,"is-view":a.isView,"extra-provision":{objectType:e.objectType,objectId:e.formData.id}},null,8,["schema","model","config","title","is-view","extra-provision"])))),128)),f(u,{show:R(j),"onUpdate:show":e[1]||(e[1]=a=>I(j)?j.value=a:null),title:"银行卡可用列表"},{default:y((()=>[f(q,{"show-icon":!1,labels:["只支持借记卡，不支持信用卡和存折"]}),f(m,{active:R(O),"onUpdate:active":e[0]||(e[0]=a=>I(O)?O.value=a:null)},{default:y((()=>[(n(),t(o,null,s(B,((a,e)=>f(r,{key:e,title:a.title},{default:y((()=>[i("div",z,[i("img",{src:a.img,alt:""},null,8,Y)])])),_:2},1032,["title"]))),64))])),_:1},8,["active"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-6426f926"]]);const Q=e({name:"policyInfo"}),X=e({...Q,props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>[]},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{expose:e,emit:t}){const l=a,i=c({schema:{},modelValue:{},config:{}}),o=m();return v([()=>l.schema,()=>l.config],(()=>{i.schema=l.schema,i.config=l.config}),{deep:!0,immediate:!0}),v((()=>l.modelValue),((a,e)=>{a!==e&&Object.assign(i.modelValue,a)}),{deep:!0,immediate:!0}),v((()=>i.modelValue),(a=>{t("update:modelValue",a)}),{deep:!0,immediate:!0}),e({validate:()=>{var a;return null==(a=o.value)?void 0:a.validate()}}),(a,e)=>(n(),h(R(T),{ref_key:"policyInfoFormRef",ref:o,schema:R(i).schema,model:R(i).modelValue,config:R(i).config,title:"保单信息",class:"policy-info","is-view":a.isView},null,8,["schema","model","config","is-view"]))}});export{j as A,K as P,q as _,X as a};
