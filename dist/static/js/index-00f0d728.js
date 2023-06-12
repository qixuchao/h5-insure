import{d as e,A as a,V as t,ct as o,b as r,g as l,w as n,i as d,k as s,f as i,G as u,r as c,aZ as I,L as A,c as p,$ as m,a7 as v,j as f,E as C,F as g,h as D,bz as h,aD as E,aE as S,aC as x,J as T,bH as w,a as P,u as y,Z as U,e as L,a0 as b,Q as G,N as k,cu as N,T as Y,a1 as O,cv as Q,z as R,b8 as M}from"./index-2aa81fa9.js";import{a as V,c as B}from"./product-2f1e9665.js";import{d as W,g as j,h as z,i as H}from"./trial-1825ece8.js";import{P as K}from"./index-5857444c.js";import{I as F}from"./trial-ec1f7710.js";import{e as J}from"./utils-4538dc24.js";import{s as q}from"./core-c229d9d5.js";import{O as Z}from"./infoCollection-0494b326.js";import{T as X}from"./constant-8927d485.js";import{u as _}from"./useOrder-de3a303c.js";import{u as $}from"./useThread-c502137a.js";import"./merge-84cb998c.js";import"./keysIn-b1e7a5ec.js";import"./isObjectLike-a9798079.js";const ee={class:"pro-curtain"},ae=["src"],te=e({name:"curtain"});var oe=u(e({...te,props:{show:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:u}){const c=e,I=a({show:c.show});return t((()=>c.show),(()=>{I.show=c.show}),{immediate:!0}),(e,a)=>{const t=o;return r(),l(t,{show:i(I).show},{default:n((()=>[d("div",ee,[s(e.$slots,"default",{},void 0,!0),d("img",{class:"close",src:i("data:image/png;base64,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"),onClick:a[0]||(a[0]=e=>u("close"))},null,8,ae)])])),_:3},8,["show"])}}}),[["__scopeId","data-v-697ee98a"]]);const re={class:"guarantee-list"},le=(e=>(E("data-v-186e639c"),e=e(),S(),e))((()=>d("div",{class:"title"},"保障内容",-1))),ne=["src"],de=e({name:"guaranteeContent"});var se=u(e({...de,props:{dataSource:{default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{default:10}},setup(e){const a=e,o=c(a.dataSource||[]),[n,s]=I(!1),u=A((()=>{var e;return!(!o.value||!(null==(e=o.value)?void 0:e.length))&&(o.value.length>a.count&&(!!a.isShowClose||!n.value))})),E=()=>{s()},S=A((()=>{var e;return o.value&&(null==(e=o.value)?void 0:e.length)?o.value.length<=a.count||n.value?o.value:o.value.slice(0,a.count):[]}));return t((()=>a.dataSource),(()=>{o.value=a.dataSource})),(e,a)=>{const t=h;return r(),p("div",re,[le,(r(!0),p(m,null,v(i(S),((e,a)=>(r(),l(t,{key:a,title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),i(u)?(r(),p("div",{key:0,class:"show-more",onClick:E},[f(C(i(n)?"收起":"查看更多")+" ",1),d("img",{src:i("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAjNJREFUOE+1VEtPE1EUPufM9GXKCnWlqAQZuhEff8CNxpYdSReVatIWJMYI7FkYF+wtxsSCBWNLY4JhZxHd+AdMqhs6PmJJWMkPsO303mPmQs10GJuawOxu5tzvfK9chCP+8Ijx4HgAVyZGskgQEgIXJkvbO//D+sXtyDlN43mW8Du9Vp1VDPNJ4xkiRoC5DhKz6VJ1qxfQ/MTITUSeA8QgM29niuYDBbh6/XyQzwZmAPCWfUbmLdAb2dTLWt0LeDE6FOjr12YYMfp3freRTX2s1Ts8VBuJZwEwxBJ2SMDj1OtqzQn66u7gQIt9jwDwgq1IAixOFs137ZlDobgvMPPTzNrXTaUkcfEG6zTXbaFnyrakcL/+EBBi+5vlB2Cy2meW8j35mk+8LOlaG8VII9v0kA3LzA1gXmwz9vJXAS4njRQC+qnR2kivf99zDubigwO+gH8egbUWwsJUwfzp/L8SHzolA/o4Azeniubqfm3uGBlgPMMITSnE5r3St0ovtXmeHB7VkWLI4Afk3UzBzCvA3DXwkWHEiPCyqgFxxQqGy9NLnywvYHtejxhRALyiHJZckWGzPL0EVoeHzo3Mcs8i8eZ+4cevDgsSwydJwzgBngYAS0hRdio6FErOdYGkKKcOLFhOGJdQxzFbor2QmnLd7blnym5JguUXImohw1WVNsjP4kTfWy9LutZGMSIcQwT/gWzLyfiftemWqG2BT6NxZqYmtTbcnrrvHs972Evnep35AykjACSCRaPlAAAAAElFTkSuQmCC"),class:g(["icon",{showMore:i(n)}])},null,10,ne)])):D("",!0)])}}}),[["__scopeId","data-v-186e639c"]]);const ie=T([{value:x.PENDING,label:"待处理"},{value:x.PAYING,label:"订单未完成，逾期将失效"},{value:x.PAYMENT_SUCCESS,label:"支付成功"},{value:x.PAYMENT_FAILED,label:"支付失败"},{value:x.CANCELED,label:"已失效"},{value:x.ACCEPT_POLICY,label:"投保成功"},{value:x.INSURER_REJECT,label:"保司拒保"},{value:x.TIMEOUT,label:"订单已经关闭"},{value:x.UNDER_WRITING_SUCCESS,label:"核保通过"},{value:x.NOTE,label:"照会"},{value:x.MANUAL_UNDERWRITING,label:"人工核保"},{value:x.INSURANCE_PROCESSING,label:"保司处理中"}]),ue={[x.ACCEPT_POLICY]:"恭喜 您已成功购买保障",[x.CANCELED]:"赠险保单已失效",[x.PAYING]:"剩余支付时间：23:59:59",[x.TIMEOUT]:"请您重新提交订单"};const ce={class:"page-pay-result"},Ie={class:"header"},Ae={class:"product-status"},pe=["innerHTML"],me={class:"prodouct-container"},ve={class:"product-card"},fe={class:"product-name"},Ce={class:"label"},ge={class:"value"},De=["src"],he=["src"];var Ee=u(e({__name:"index",setup(e){const t=w(),o=P(),s=y(),{tenantId:u,from:I="other",orderNo:f,preview:g,productCode:h,channelCode:E="",templateView:S}=s.query;let T="";const ee=a({insureDetail:{},detail:{},orderDetail:{},showOrderDetail:!1,guaranteeItemVOS:[],pageInfo:{title:"",desc:"",insureList:[],productImage:"",notificationImage:""},timeDown:{},templateId:"2"}),ae=c(!1),te=c(),re=A((()=>[x.ACCEPT_POLICY,x.CANCELED,x.PAYMENT_SUCCESS].includes(ee.orderDetail.orderStatus)?"下载保单":x.PAYING===ee.orderDetail.orderStatus?"立即支付":x.TIMEOUT===ee.orderDetail.orderStatus?"重下一单":"")),le=A((()=>E||ee.orderDetail.extInfo.extraInfo.channelCode)),ne=A((()=>!!g)),de=async(e=!1,a="")=>{var t,r,l,n;try{const{templateId:d}=ee.orderDetail.extInfo.extraInfo;delete ee.orderDetail.extInfo.extraInfo.templateId;const s={insurerCode:e?null==(t=te.value)?void 0:t.insurerCode:ee.orderDetail.venderCode,productCode:e?null==(r=te.value)?void 0:r.productCode:T,tenantId:u,agencyCode:ee.orderDetail.agencyId,agentCode:ee.orderDetail.agentCode,saleChannelId:null==(n=null==(l=ee.orderDetail.extInfo)?void 0:l.extraInfo)?void 0:n.saleChannelId};if(d===X.UPGRADE)return s.extraInfo=decodeURIComponent(JSON.stringify({...ee.orderDetail.extInfo.extraInfo,channelCode:le.value,templateId:d})),s.orderNo=f,ne.value&&(s.productCode="ZXYS2023"),void o.push(`/baseInsurance/upgrade?${G.stringify(s)}`);s.extraMap={...ee.orderDetail.extInfo.extraInfo,channelCode:le.value},e&&(s.extraMap.promotion=a),delete s.extraMap.templateId;const i=await W(s);if("10000"===i.code){if(!e){const{holder:e,insuredList:a}=ee.orderDetail;k.set(Z,{holder:e,insuredList:a})}window.location.href=i.data||""}}catch(d){console.log(d)}},Ee=async()=>{var e,a,t,o,r,l;if("下载保单"===re.value){if(l="预览模式无法下载保单",!ne.value||(Y(l),0))if(null==(e=ee.orderDetail.extInfo)?void 0:e.policyUrl)(null==(o=ee.orderDetail.extInfo)?void 0:o.policyUrl)&&N(null==(r=ee.orderDetail.extInfo)?void 0:r.policyUrl);else{const e=await j({orderNo:f,tenantId:u});"10000"===e.code&&(ee.orderDetail=e.data,(null==(a=ee.orderDetail.extInfo)?void 0:a.policyUrl)?N(null==(t=ee.orderDetail.extInfo)?void 0:t.policyUrl):Y("电子保单单生成中，请稍后再试"))}}else"立即支付"===re.value?z({...ee.orderDetail,extInfo:{...ee.orderDetail.extInfo,redirectUrl:window.location.href}}).then((e=>{"10000"===e.code&&q(e.data.paymentUrl)})):"重下一单"===re.value&&de(!1)},Se=()=>{var e,a,t,o,r,l,n,d,s,i,u,c,I;[x.PAYMENT_SUCCESS,x.ACCEPT_POLICY].includes(ee.orderDetail.orderStatus)&&(ee.orderDetail.orderStatus=x.ACCEPT_POLICY),ee.pageInfo.title=ie[ee.orderDetail.orderStatus],ee.pageInfo.desc=ue[ee.orderDetail.orderStatus],Q((null==(a=null==(e=ee.detail)?void 0:e.tenantProductInsureVO)?void 0:a.productName)||""),ee.templateId=ee.orderDetail.extInfo.templateId||"4";let A="";if("2"===ee.templateId.toString()?ee.orderDetail.insuredList[0].productList.forEach((e=>A?null:(e.riskList.forEach((e=>{1!==e.riskType||A||(A=J(e.insurancePeriodValue,F[e.insurancePeriodType]))})),!1))):(ee.pageInfo.insureList=[{label:(ee.templateId===X.UPGRADE&&"1"===(null==(r=null==(o=null==(t=ee.orderDetail)?void 0:t.extInfo)?void 0:o.extraInfo)?void 0:r.isUpgrade)?"下":"本")+"期缴费金额",value:`${ee.orderDetail.orderAmount}元`}],A=`${R(ee.orderDetail.commencementTime).format("YYYY.MM.DD")}到${R(ee.orderDetail.expiryDate).format("YYYY.MM.DD")}`),ee.pageInfo.insureList=[...ee.pageInfo.insureList,{label:"被保人",value:null==(d=null==(n=null==(l=ee.orderDetail)?void 0:l.insuredList)?void 0:n[0])?void 0:d.name},{label:"保障期间",value:A||""}],ee.templateId=ee.orderDetail.extInfo.templateId,x.PAYING===ee.orderDetail.orderStatus){const e=(null==(i=null==(s=ee.orderDetail.tenantOrderPaymentInfoList)?void 0:s[0])?void 0:i.paymentExpiryDate)||R().add(8.5,"hour");ee.timeDown=M({time:R(e).diff(new Date,"millisecond")}),ee.timeDown.start()}const p=(null==(u=ee.orderDetail.insuredList)?void 0:u[0].planCode)||"";ee.guaranteeItemVOS=(null==(I=null==(c=ee.detail)?void 0:c.GUARANTEE.find((e=>!e.planCode||e.planCode===p)))?void 0:I.data)||[]};let xe;xe=$({start(){console.log("轮询中..."),j({orderNo:f,tenantId:u,withProductInfo:!0}).then((e=>{const{data:a}=e;"10000"===e.code&&a.orderStatus!==x.PAYING&&(ee.orderDetail=a,Se(),xe.stop())}))},stop(){console.log("轮询结束,结束方式：配置轮询次数")},number:5,time:2e3});const Te=async()=>{var e,a,t,o;const r=await new Promise(((e,a)=>{if(ne.value){const a=_({extInfo:{buttonCode:"EVENT_SHORT_saveOrder",pageCode:"productInfo",iseeBizNo:"",templateId:S,extraInfo:{templateId:S}}});a.value.orderAmount=(1e3*Math.random()).toFixed(2),a.value.orderStatus="acceptPolicy",a.value.insuredList[0].name="小安",a.value.commencementTime=R().format("YYYY-MM-DD HH:mm:ss"),a.value.expiryDate=R().add(1,"year").format("YYYY-MM-DD HH:mm:ss"),a.value.insuredList[0].productList[0]={productCode:h,riskList:[{riskType:1,insurancePeriodValue:"1",insurancePeriodType:3}]},e({code:"10000",data:i(a)})}else j({orderNo:f,tenantId:u,withProductInfo:!0}).then((t=>{"10000"===t.code?e(t):a()}))}));if(console.log(r,"orderRes"),"10000"===r.code){if(ee.orderDetail=r.data,T=(null==(o=null==(t=null==(a=null==(e=r.data.insuredList)?void 0:e[0])?void 0:a.productList)?void 0:t[0])?void 0:o.productCode)||"",!T)return"";const l=!Number.isNaN(+u)&&V({productCode:T,withInsureInfo:!0,tenantId:u}),n=H({productCode:T});(async e=>{var a,t;const{code:o,data:r}=await B({productCode:e});"10000"===o&&(te.value=r,"free"!==I&&[x.PAYING,x.TIMEOUT].includes(ee.orderDetail.orderStatus)?ee.showOrderDetail=!0:r.productCode&&(ee.pageInfo.notificationImage=(null==(a=null==r?void 0:r.notificationImage)?void 0:a[0])||"",ee.pageInfo.productImage=(null==(t=null==r?void 0:r.productImage)?void 0:t[0])||"",ae.value=!!ee.pageInfo.notificationImage))})(T),Promise.all([l,n]).then((([e,a])=>{"10000"===e.code&&(ee.detail=e.data,e.data.BASIC_INFO&&e.data.BASIC_INFO.themeType&&O(e.data.BASIC_INFO.themeType)),"10000"===a.code&&(ee.insureDetail=a.data),ee.orderDetail.orderStatus===x.PAYING&&xe.run(),Se()}))}return""},we=e=>{const a=`${e}`.length;let t="";for(let o=0;o<2-a;o++)t+="0";return t+e},Pe=A((()=>{var e,a,t;return x.PAYING===(null==(e=ee.orderDetail)?void 0:e.orderStatus)?(null==(t=null==(a=ee.timeDown)?void 0:a.current)?void 0:t.total)<=0?(ee.orderDetail.orderStatus=x.TIMEOUT,ee.pageInfo.title=ie[ee.orderDetail.orderStatus],ee.pageInfo.desc=ue[ee.orderDetail.orderStatus],ee.timeDown.pause(),ee.pageInfo.desc):`剩余支付时间：${we(ee.timeDown.current.hours)}:${we(ee.timeDown.current.minutes)}:${we(ee.timeDown.current.seconds)}`:ee.pageInfo.desc}));return U((()=>{Te()})),(e,a)=>{var o;return r(),p(m,null,[d("div",ce,[d("div",Ie,[d("div",Ae,C(i(ee).pageInfo.title),1),"重下一单"!==i(re)||"3"!==i(ee).templateId.toString()?(r(),p("div",{key:0,class:"desc",innerHTML:i(Pe)},null,8,pe)):D("",!0)]),d("div",me,[d("div",ve,[d("div",fe,C((null==(o=i(ee).insureDetail)?void 0:o.productName)||""),1),(r(!0),p(m,null,v(i(ee).pageInfo.insureList,((e,a)=>(r(),p("div",{key:a,class:"list"},[d("span",Ce,C(e.label),1),d("span",ge,C(e.value),1)])))),128)),"重下一单"!==i(re)||"3"!==i(ee).templateId.toString()?(r(),l(K,{key:0,"theme-vars":i(t),class:"btn",text:i(re),onClick:Ee},null,8,["theme-vars","text"])):D("",!0)]),i(ee).pageInfo.productImage?(r(),p("img",{key:0,class:"product-img",src:i(ee).pageInfo.productImage,onClick:a[0]||(a[0]=e=>de(!0,"GDGGW"))},null,8,De)):D("",!0),i(ee).showOrderDetail?(r(),l(se,{key:1,"is-show-close":"",count:5,"data-source":i(ee).guaranteeItemVOS},null,8,["data-source"])):D("",!0)])]),L(oe,{show:i(ae),"onUpdate:show":a[2]||(a[2]=e=>b(ae)?ae.value=e:null),onClose:a[3]||(a[3]=e=>ae.value=!1)},{default:n((()=>[d("img",{class:"jump-img",src:i(ee).pageInfo.notificationImage,style:{display:"block"},onClick:a[1]||(a[1]=e=>de(!0,"TCGGW"))},null,8,he)])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-769c96ae"]]);export{Ee as default};
