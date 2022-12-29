import{_ as e,d as t,z as a,a7 as o,b as r,c as l,e as n,w as d,i,a8 as s,l as u,r as c,G as I,x as p,g as v,F as A,h as f,n as m,t as g,B as C,j as D,K as h,L as w,Z as S,u as E,a as O,b9 as y,y as x,f as P,ba as T,T as G,$ as U,aX as L}from"./index-37d1e580.js";import{p as b}from"./product-a72399d4.js";import{q as V,g as k,a as Q,i as Y}from"./trial-25307ef6.js";import B from"./index-d598301e.js";import{a as N}from"./trial-37fe9d9d.js";import{c as R}from"./utils-c39f0d24.js";import{s as M}from"./core-5d27589a.js";import{a as W}from"./order-3da6861d.js";import{u as K}from"./theme-65292714.js";import{s as j}from"./useStorage-ebd75495.js";import{O as z}from"./infoCollection-d63f471d.js";import"./pdfh5-e5c0db2a.js";import"./index-c6b2b786.js";const H={class:"pro-curtain"},q=["src"];var F=e(t({props:{show:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:t}){const c=e,I=a({show:c.show});return o((()=>c.show),(()=>{I.show=c.show}),{immediate:!0}),(e,a)=>{const o=r("van-overlay");return l(),n(o,{show:u(I).show},{default:d((()=>[i("div",H,[s(e.$slots,"default",{},void 0,!0),i("img",{class:"close",src:u("data:image/png;base64,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"),onClick:a[0]||(a[0]=e=>t("close"))},null,8,q)])])),_:3},8,["show"])}}}),[["__scopeId","data-v-4c1ecdfa"]]);const J={class:"guarantee-list"},Z=(e=>(h("data-v-886dfc8a"),e=e(),w(),e))((()=>i("div",{class:"title"},"保障内容",-1))),X=["src"];var _=e(t({props:{dataSource:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10}},setup(e){const t=e,a=c(t.dataSource||[]),[d,s]=I(!1),h=p((()=>{var e;return!(!a.value||!(null==(e=a.value)?void 0:e.length))&&(a.value.length>t.count&&(!!t.isShowClose||!d.value))})),w=()=>{s()},S=p((()=>{var e;return a.value&&(null==(e=a.value)?void 0:e.length)?a.value.length<=t.count||d.value?a.value:a.value.slice(0,t.count):[]}));return o((()=>t.dataSource),(()=>{a.value=t.dataSource})),(e,t)=>{const a=r("ProCell");return l(),v("div",J,[Z,(l(!0),v(A,null,f(u(S),((e,t)=>(l(),n(a,{key:t,title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),u(h)?(l(),v("div",{key:0,class:"show-more",onClick:w},[m(g(u(d)?"收起":"查看更多")+" ",1),i("img",{src:u("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAjNJREFUOE+1VEtPE1EUPufM9GXKCnWlqAQZuhEff8CNxpYdSReVatIWJMYI7FkYF+wtxsSCBWNLY4JhZxHd+AdMqhs6PmJJWMkPsO303mPmQs10GJuawOxu5tzvfK9chCP+8Ijx4HgAVyZGskgQEgIXJkvbO//D+sXtyDlN43mW8Du9Vp1VDPNJ4xkiRoC5DhKz6VJ1qxfQ/MTITUSeA8QgM29niuYDBbh6/XyQzwZmAPCWfUbmLdAb2dTLWt0LeDE6FOjr12YYMfp3freRTX2s1Ts8VBuJZwEwxBJ2SMDj1OtqzQn66u7gQIt9jwDwgq1IAixOFs137ZlDobgvMPPTzNrXTaUkcfEG6zTXbaFnyrakcL/+EBBi+5vlB2Cy2meW8j35mk+8LOlaG8VII9v0kA3LzA1gXmwz9vJXAS4njRQC+qnR2kivf99zDubigwO+gH8egbUWwsJUwfzp/L8SHzolA/o4Azeniubqfm3uGBlgPMMITSnE5r3St0ovtXmeHB7VkWLI4Afk3UzBzCvA3DXwkWHEiPCyqgFxxQqGy9NLnywvYHtejxhRALyiHJZckWGzPL0EVoeHzo3Mcs8i8eZ+4cevDgsSwydJwzgBngYAS0hRdio6FErOdYGkKKcOLFhOGJdQxzFbor2QmnLd7blnym5JguUXImohw1WVNsjP4kTfWy9LutZGMSIcQwT/gWzLyfiftemWqG2BT6NxZqYmtTbcnrrvHs972Evnep35AykjACSCRaPlAAAAAElFTkSuQmCC"),class:C(["icon",{showMore:u(d)}])},null,10,X)])):D("",!0)])}}}),[["__scopeId","data-v-886dfc8a"]]);const $=S([{value:W.PENDING,label:"待处理"},{value:W.PAYING,label:"订单未完成，逾期将失效"},{value:W.PAYMENT_SUCCESS,label:"支付成功"},{value:W.PAYMENT_FAILED,label:"支付失败"},{value:W.CANCELED,label:"已失效"},{value:W.ACCEPT_POLICY,label:"投保成功"},{value:W.INSURER_REJECT,label:"保司拒保"},{value:W.TIMEOUT,label:"订单已经关闭"},{value:W.UNDER_WRITING_SUCCESS,label:"核保通过"},{value:W.NOTE,label:"照会"},{value:W.INSURANCE_PROCESSING,label:"保司处理中"}]),ee={[W.ACCEPT_POLICY]:"恭喜 您已成功购买保障",[W.CANCELED]:"赠险保单已失效",[W.PAYING]:"剩余支付时间：23:59:59",[W.TIMEOUT]:"请您重新提交订单"};const te={class:"page-pay-result"},ae={class:"header"},oe={class:"product-status"},re=["innerHTML"],le={class:"prodouct-container"},ne={class:"product-card"},de={class:"product-name"},ie={class:"label"},se={class:"value"},ue=["src"],ce=["src"];var Ie=e(t({setup(e){const t=K();E();const o=O(),{tenantId:s,from:I="other",orderNo:m,code:C,channelCode:h=""}=o.query;let w="";const S=a({insureDetail:{},detail:{},orderDetail:{},showOrderDetail:!1,guaranteeItemVOS:[],pageInfo:{title:"",desc:"",insureList:[],productImage:"",notificationImage:""},timeDown:{},templateId:"2"}),H=c(!1),q=p((()=>[W.ACCEPT_POLICY,W.CANCELED,W.PAYMENT_SUCCESS].includes(S.orderDetail.orderStatus)?"下载保单":W.PAYING===S.orderDetail.orderStatus?"立即支付":W.TIMEOUT===S.orderDetail.orderStatus?"重下一单":"")),J=p((()=>h||S.orderDetail.extInfo.extraInfo.channelCode)),Z=async(e=!1,t="")=>{var a,o,r,l;try{const{insurerCode:n}=S.insureDetail.productBasicInfoVO;delete S.orderDetail.extInfo.extraInfo.templateId;const d={insurerCode:n,productCode:e?null==(o=null==(a=S.insureDetail)?void 0:a.productBasicInfoVO)?void 0:o.upgradeGuaranteeConfigVO.productCode:w,tenantId:s,agencyCode:S.orderDetail.agencyId,agentCode:S.orderDetail.agentCode,saleChannelId:null==(l=null==(r=S.orderDetail.extInfo)?void 0:r.extraInfo)?void 0:l.saleChannelId,extraMap:{...S.orderDetail.extInfo.extraInfo,channelCode:J.value}};e&&(d.extraMap.promotion=t),delete d.extraMap.templateId;const i=await V(d);if("10000"===i.code){if(!e){const{tenantOrderHolder:e,tenantOrderInsuredList:t}=S.orderDetail;j.set(z,{tenantOrderHolder:e,tenantOrderInsuredList:t})}window.location.href=i.data||""}}catch(n){}},X=async()=>{var e,t,a,o,r;if("下载保单"===q.value)if(null==(e=S.orderDetail.extInfo)?void 0:e.policyUrl)(null==(o=S.orderDetail.extInfo)?void 0:o.policyUrl)&&T(null==(r=S.orderDetail.extInfo)?void 0:r.policyUrl);else{const e=await k({orderNo:m,tenantId:s});"10000"===e.code&&(S.orderDetail=e.data,(null==(t=S.orderDetail.extInfo)?void 0:t.policyUrl)?T(null==(a=S.orderDetail.extInfo)?void 0:a.policyUrl):G("电子保单单生成中，请稍后再试"))}else"立即支付"===q.value?Q({...S.orderDetail,extInfo:{...S.orderDetail.extInfo,redirectUrl:window.location.href}}).then((e=>{"10000"===e.code&&M(e.data.paymentUrl)})):"重下一单"===q.value&&Z(!1)},Ie=async()=>{var e,t,a,o;const r=await k({orderNo:m,tenantId:s,withProductInfo:!0});if("10000"===r.code){if(S.orderDetail=r.data,w=(null==(o=null==(a=null==(t=null==(e=r.data.tenantOrderInsuredList)?void 0:e[0])?void 0:t.tenantOrderProductList)?void 0:a[0])?void 0:o.productCode)||"",!w)return"";const l=b({productCode:w,withInsureInfo:!0,tenantId:s}),n=Y({productCode:w});Promise.all([l,n]).then((([e,t])=>{"10000"===e.code&&(S.detail=e.data),"10000"===t.code&&(S.insureDetail=t.data),(()=>{var e,t,a,o,r,l,n,d,i,s,u,c,p,v,A,f,m,g,C,D,h,w,E,O,y,x,P;[W.PAYMENT_SUCCESS,W.ACCEPT_POLICY].includes(S.orderDetail.orderStatus)&&(S.orderDetail.orderStatus=W.ACCEPT_POLICY),S.pageInfo.title=$[S.orderDetail.orderStatus],S.pageInfo.desc=ee[S.orderDetail.orderStatus],document.title=(null==(t=null==(e=S.detail)?void 0:e.tenantProductInsureVO)?void 0:t.productName)||"",S.templateId=S.orderDetail.extInfo.templateId;let T="";if("2"===S.templateId.toString()?S.orderDetail.tenantOrderInsuredList[0].tenantOrderProductList.forEach((e=>T?null:(e.tenantOrderRiskList.forEach((e=>{1!==e.riskType||T||(T=R(e.insurancePeriodValue,N[e.insurancePeriodType]))})),!1))):(S.pageInfo.insureList=[{label:"本期缴费金额",value:`${S.orderDetail.orderAmount}元`}],T=`${U(S.orderDetail.commencementTime).format("YYYY.MM.DD")}到${U(S.orderDetail.expiryDate).format("YYYY.MM.DD")}`),S.pageInfo.insureList=[...S.pageInfo.insureList,{label:"被保人",value:null==(r=null==(o=null==(a=S.orderDetail)?void 0:a.tenantOrderInsuredList)?void 0:o[0])?void 0:r.name},{label:"保障期间",value:T||""}],S.templateId=S.orderDetail.extInfo.templateId,"free"!==I&&[W.PAYING,W.TIMEOUT].includes(S.orderDetail.orderStatus)?S.showOrderDetail=!0:(null==(n=null==(l=S.insureDetail)?void 0:l.productBasicInfoVO)?void 0:n.upgradeGuaranteeConfigVO.productCode)&&(S.pageInfo.notificationImage=(null==(u=null==(s=null==(i=null==(d=S.insureDetail)?void 0:d.productBasicInfoVO)?void 0:i.upgradeGuaranteeConfigVO)?void 0:s.notificationImage)?void 0:u[0])||"",S.pageInfo.productImage=(null==(A=null==(v=null==(p=null==(c=S.insureDetail)?void 0:c.productBasicInfoVO)?void 0:p.upgradeGuaranteeConfigVO)?void 0:v.productImage)?void 0:A[0])||"",H.value=!!S.pageInfo.notificationImage),W.PAYING===S.orderDetail.orderStatus){const e=(null==(m=null==(f=S.orderDetail.tenantOrderPaymentInfoList)?void 0:f[0])?void 0:m.paymentExpiryDate)||U().add(8.5,"hour");S.timeDown=L({time:U(e).diff(new Date,"millisecond")}),S.timeDown.start()}try{const e=null==(g=S.orderDetail.tenantOrderInsuredList)?void 0:g[0].planCode;(null==(D=null==(C=S.detail)?void 0:C.tenantProductInsureVO)?void 0:D.planInsureVO)?S.guaranteeItemVOS=(null==(P=null==(x=null==(y=S.detail)?void 0:y.tenantProductInsureVO)?void 0:x.planInsureVO)?void 0:P.guaranteeItemVOS)||[]:S.guaranteeItemVOS=(null==(O=null==(E=null==(w=null==(h=S.detail)?void 0:h.tenantProductInsureVO)?void 0:w.planList.filter((t=>t.planCode===e)))?void 0:E[0])?void 0:O.guaranteeItemVOS)||[]}catch(G){}})()}))}return""},pe=e=>{const t=`${e}`.length;let a="";for(let o=0;o<2-t;o++)a+="0";return a+e};y(window,"popstate",(e=>{var t,a,o;(null==(o=null==(a=null==(t=S.insureDetail)?void 0:t.productBasicInfoVO)?void 0:a.upgradeGuaranteeConfigVO)?void 0:o.productCode)&&(window.history.pushState(null,"",document.URL),Z(!0,"FHGGW"))}));const ve=p((()=>{var e;return W.PAYING===(null==(e=S.orderDetail)?void 0:e.orderStatus)?S.timeDown.current.total<=0?(S.orderDetail.orderStatus=W.TIMEOUT,S.pageInfo.title=$[S.orderDetail.orderStatus],S.pageInfo.desc=ee[S.orderDetail.orderStatus],S.timeDown.pause(),S.pageInfo.desc):`剩余支付时间：${pe(S.timeDown.current.hours)}:${pe(S.timeDown.current.minutes)}:${pe(S.timeDown.current.seconds)}`:S.pageInfo.desc}));return x((()=>{Ie(),window.history&&window.history.pushState&&(window.history.pushState("forward","","#"),window.history.forward())})),(e,a)=>{const o=r("van-config-provider");return l(),n(o,{"theme-vars":u(t)},{default:d((()=>{var e,o;return[i("div",te,[i("div",ae,[i("div",oe,g(u(S).pageInfo.title),1),"重下一单"!==u(q)||"3"!==u(S).templateId.toString()?(l(),v("div",{key:0,class:"desc",innerHTML:u(ve)},null,8,re)):D("",!0)]),i("div",le,[i("div",ne,[i("div",de,g((null==(o=null==(e=u(S).insureDetail)?void 0:e.productBasicInfoVO)?void 0:o.productName)||""),1),(l(!0),v(A,null,f(u(S).pageInfo.insureList,((e,t)=>(l(),v("div",{key:t,class:"list"},[i("span",ie,g(e.label),1),i("span",se,g(e.value),1)])))),128)),"重下一单"!==u(q)||"3"!==u(S).templateId.toString()?(l(),n(B,{key:0,"theme-vars":u(t),class:"btn",text:u(q),onClick:X},null,8,["theme-vars","text"])):D("",!0)]),u(S).pageInfo.productImage?(l(),v("img",{key:0,class:"product-img",src:u(S).pageInfo.productImage,onClick:a[0]||(a[0]=e=>Z(!0,"GDGGW"))},null,8,ue)):D("",!0),u(S).showOrderDetail?(l(),n(_,{key:1,"is-show-close":"",count:5,"data-source":u(S).guaranteeItemVOS},null,8,["data-source"])):D("",!0)])]),P(F,{show:H.value,"onUpdate:show":a[2]||(a[2]=e=>H.value=e),onClose:a[3]||(a[3]=e=>H.value=!1)},{default:d((()=>[i("img",{class:"jump-img",src:u(S).pageInfo.notificationImage,style:{display:"block"},onClick:a[1]||(a[1]=e=>Z(!0,"TCGGW"))},null,8,ce)])),_:1},8,["show"])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-58f968bc"]]);export{Ie as default};
