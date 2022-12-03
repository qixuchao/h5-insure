import{k as e,O as a,$ as t,p as o,s as l,t as r,v as s,C as n,Z as i,E as d,r as u,R as c,b as A,B as v,H as I,I as p,G as g,M as m,N as f,y as C,a5 as h,a6 as D,aa as E,u as w,o as S,S as O,aw as b,d as P}from"./vendor-9bab628e.js";import{p as k}from"./product-c8d89531.js";import{q as G,a as V,g as y,i as L}from"./trial-49574891.js";import{P as T}from"./index-83aea6c4.js";import{_ as U,o as Q,ad as x,aa as B}from"./index-aa4ec275.js";import{a as N}from"./trial-81e8ae87.js";import{c as R}from"./utils-8daa4412.js";import{a as Y}from"./order-9d984608.js";import{u as K}from"./theme-467ed2f7.js";import"./useStorage-dd04318c.js";import"./infoCollection-2d0972eb.js";const W={class:"pro-curtain"},z=["src"];var j=U(e({props:{show:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:u}){const c=e,A=a({show:c.show});return t((()=>c.show),(()=>{A.show=c.show}),{immediate:!0}),(e,a)=>{const t=o("van-overlay");return l(),r(t,{show:d(A).show},{default:s((()=>[n("div",W,[i(e.$slots,"default",{},void 0,!0),n("img",{class:"close",src:d("data:image/png;base64,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"),onClick:a[0]||(a[0]=e=>u("close"))},null,8,z)])])),_:3},8,["show"])}}}),[["__scopeId","data-v-4c1ecdfa"]]);const H={class:"guarantee-list"},q=(e=>(h("data-v-cb90a938"),e=e(),D(),e))((()=>n("div",{class:"title"},"保障内容",-1))),M=["src"];var F=U(e({props:{dataSource:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10}},setup(e){const a=e,s=u(a.dataSource||[]),[i,h]=c(!1),D=A((()=>{var e;return!(!s.value||!(null==(e=s.value)?void 0:e.length))&&(s.value.length>a.count&&(!!a.isShowClose||!i.value))})),E=()=>{h()},w=A((()=>{var e;return s.value&&(null==(e=s.value)?void 0:e.length)?s.value.length<=a.count||i.value?s.value:s.value.slice(0,a.count):[]}));return t((()=>a.dataSource),(()=>{s.value=a.dataSource})),(e,a)=>{const t=o("ProCell");return l(),v("div",H,[q,(l(!0),v(I,null,p(d(w),((e,a)=>(l(),r(t,{key:a,title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),d(D)?(l(),v("div",{key:0,class:"show-more",onClick:E},[g(m(d(i)?"收起":"查看更多")+" ",1),n("img",{src:d("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAjNJREFUOE+1VEtPE1EUPufM9GXKCnWlqAQZuhEff8CNxpYdSReVatIWJMYI7FkYF+wtxsSCBWNLY4JhZxHd+AdMqhs6PmJJWMkPsO303mPmQs10GJuawOxu5tzvfK9chCP+8Ijx4HgAVyZGskgQEgIXJkvbO//D+sXtyDlN43mW8Du9Vp1VDPNJ4xkiRoC5DhKz6VJ1qxfQ/MTITUSeA8QgM29niuYDBbh6/XyQzwZmAPCWfUbmLdAb2dTLWt0LeDE6FOjr12YYMfp3freRTX2s1Ts8VBuJZwEwxBJ2SMDj1OtqzQn66u7gQIt9jwDwgq1IAixOFs137ZlDobgvMPPTzNrXTaUkcfEG6zTXbaFnyrakcL/+EBBi+5vlB2Cy2meW8j35mk+8LOlaG8VII9v0kA3LzA1gXmwz9vJXAS4njRQC+qnR2kivf99zDubigwO+gH8egbUWwsJUwfzp/L8SHzolA/o4Azeniubqfm3uGBlgPMMITSnE5r3St0ovtXmeHB7VkWLI4Afk3UzBzCvA3DXwkWHEiPCyqgFxxQqGy9NLnywvYHtejxhRALyiHJZckWGzPL0EVoeHzo3Mcs8i8eZ+4cevDgsSwydJwzgBngYAS0hRdio6FErOdYGkKKcOLFhOGJdQxzFbor2QmnLd7blnym5JguUXImohw1WVNsjP4kTfWy9LutZGMSIcQwT/gWzLyfiftemWqG2BT6NxZqYmtTbcnrrvHs972Evnep35AykjACSCRaPlAAAAAElFTkSuQmCC"),class:f(["icon",{showMore:d(i)}])},null,10,M)])):C("",!0)])}}}),[["__scopeId","data-v-cb90a938"]]);const J=Q([{value:Y.PENDING,label:"待处理"},{value:Y.PAYING,label:"订单未完成，逾期将失效"},{value:Y.PAYMENT_SUCCESS,label:"支付成功"},{value:Y.PAYMENT_FAILED,label:"支付失败"},{value:Y.CANCELED,label:"已失效"},{value:Y.ACCEPT_POLICY,label:"投保成功"},{value:Y.INSURER_REJECT,label:"保司拒保"},{value:Y.TIMEOUT,label:"订单已经关闭"},{value:Y.UNDER_WRITING_SUCCESS,label:"核保通过"},{value:Y.NOTE,label:"照会"},{value:Y.INSURANCE_PROCESSING,label:"保司处理中"}]),Z={[Y.ACCEPT_POLICY]:"恭喜 您已成功购买保障",[Y.CANCELED]:"赠险保单已失效",[Y.PAYING]:"剩余支付时间：23:59:59",[Y.TIMEOUT]:"请您重新提交订单"};const X=e=>(h("data-v-fab7e5e2"),e=e(),D(),e),_={class:"page-pay-result"},$={class:"header"},ee={class:"product-status"},ae=["innerHTML"],te={class:"prodouct-container"},oe={class:"product-card"},le={class:"product-name"},re={class:"label"},se={class:"value"},ne={key:0,class:"desc"},ie=[g("已有"),X((()=>n("span",null,"29,182",-1))),g("位用户已投保")],de=["src"],ue=X((()=>n("div",{class:"footer-desc"},[n("div",null,"客服电话"),n("div",null,"400 605 8000")],-1))),ce=["src"];var Ae=U(e({setup(e){const t=K();E();const i=w(),{tenantId:c,from:g="other",orderNo:f,productCode:h}=i.query,D=a({insureDetail:{},detail:{},orderDetail:{},showOrderDetail:!1,guaranteeItemVOS:[],pageInfo:{title:"",desc:"",insureList:[],productImage:"",notificationImage:""},timeDown:{}}),U=u(!1),Q=A((()=>[Y.ACCEPT_POLICY,Y.CANCELED].includes(D.orderDetail.orderStatus)?"下载保单":Y.PAYING===D.orderDetail.orderStatus?"立即支付":Y.CANCELED===D.orderDetail.orderStatus?"重下一单":"")),W=async(e=!1)=>{var a,t;try{const{insurerCode:o}=D.insureDetail.productBasicInfoVO,{code:l,data:r}=await G({insurerCode:o,productCode:e?null==(t=null==(a=D.insureDetail)?void 0:a.productBasicInfoVO)?void 0:t.upgradeGuaranteeConfigVO.productCode:h,tenantId:c});"10000"===l&&(window.location.href=r||"")}catch(o){}},z=()=>{var e;"下载保单"===Q.value?x(null==(e=D.orderDetail.extInfo)?void 0:e.policyUrl):"立即支付"===Q.value?V({...D.orderDetail,extInfo:{...D.orderDetail.extInfo,redirectUrl:window.location.href}}).then((({code:e,data:a})=>{"10000"===e&&B(a.paymentUrl)})):"重下一单"===Q.value&&W(!1)},H=async()=>{const e=k({productCode:h,withInsureInfo:!0,tenantId:c}),a=y({orderNo:f,tenantId:c}),t=L({productCode:h});Promise.all([e,a,t]).then((([e,a,t])=>{"10000"===e.code&&(D.detail=e.data),"10000"===t.code&&(D.insureDetail=t.data),"10000"===a.code&&(D.orderDetail=a.data),(()=>{var e,a,t,o,l,r,s,n,i,d,u,c,A,v,I,p,m,f,C,h,E,w,S,O,k;D.pageInfo.title=J[D.orderDetail.orderStatus],D.pageInfo.desc=Z[D.orderDetail.orderStatus];let G="";if("free"===g?D.orderDetail.tenantOrderInsuredList[0].tenantOrderProductList.forEach((e=>G?null:(e.tenantOrderRiskList.forEach((e=>{1!==e.riskType||G||(G=R(e.insurancePeriodValue,N[e.insurancePeriodType]))})),!1))):(D.pageInfo.insureList=[{label:"本期缴费金额",value:`${D.orderDetail.orderAmount}元`}],G=""),D.pageInfo.insureList=[...D.pageInfo.insureList,{label:"被保人",value:null==(t=null==(a=null==(e=D.orderDetail)?void 0:e.tenantOrderInsuredList)?void 0:a[0])?void 0:t.name},{label:"保障期间",value:G||""}],"free"!==g&&[Y.PAYING,Y.CANCELED].includes(D.orderDetail.orderStatus)||!(null==(l=null==(o=D.insureDetail)?void 0:o.productBasicInfoVO)?void 0:l.upgradeGuaranteeConfigVO.productCode)?D.showOrderDetail=!0:(D.pageInfo.notificationImage=(null==(i=null==(n=null==(s=null==(r=D.insureDetail)?void 0:r.productBasicInfoVO)?void 0:s.upgradeGuaranteeConfigVO)?void 0:n.notificationImage)?void 0:i[0])||"",D.pageInfo.productImage=(null==(A=null==(c=null==(u=null==(d=D.insureDetail)?void 0:d.productBasicInfoVO)?void 0:u.upgradeGuaranteeConfigVO)?void 0:c.productImage)?void 0:A[0])||"",U.value=!0),Y.PAYING===D.orderDetail.orderStatus){const e=null==(I=null==(v=D.orderDetail.tenantOrderPaymentInfoList)?void 0:v[0])?void 0:I.paymentExpiryDate;D.timeDown=b({time:P(e).diff(new Date,"millisecond")}),D.timeDown.start()}try{const e=null==(p=D.orderDetail.tenantOrderInsuredList)?void 0:p[0].planCode;(null==(f=null==(m=D.detail)?void 0:m.tenantProductInsureVO)?void 0:f.planInsureVO)?D.guaranteeItemVOS=(null==(k=null==(O=null==(S=D.detail)?void 0:S.tenantProductInsureVO)?void 0:O.planInsureVO)?void 0:k.guaranteeItemVOS)||[]:D.guaranteeItemVOS=(null==(w=null==(E=null==(h=null==(C=D.detail)?void 0:C.tenantProductInsureVO)?void 0:h.planList.filter((a=>a.planCode===e)))?void 0:E[0])?void 0:w.guaranteeItemVOS)||[]}catch(V){}})()}))},q=A((()=>Y.PAYING===D.orderDetail.orderStatus?(D.timeDown.current.total<=0&&(H(),D.timeDown.pause()),`剩余支付时间：${D.timeDown.current.hours}:${D.timeDown.current.minutes}:${D.timeDown.current.seconds}`):D.pageInfo.desc));return S((()=>{H()})),(e,a)=>{const i=o("van-config-provider");return l(),r(i,{"theme-vars":d(t)},{default:s((()=>{var e,o;return[n("div",_,[n("div",$,[n("div",ee,m(d(D).pageInfo.title),1),n("div",{class:"desc",innerHTML:d(q)},null,8,ae)]),n("div",te,[n("div",oe,[n("div",le,m((null==(o=null==(e=d(D).insureDetail)?void 0:e.productBasicInfoVO)?void 0:o.productName)||""),1),(l(!0),v(I,null,p(d(D).pageInfo.insureList,((e,a)=>(l(),v("div",{key:a,class:"list"},[n("span",re,m(e.label),1),n("span",se,m(e.value),1)])))),128)),O(T,{"theme-vars":d(t),class:"btn",text:d(Q),onClick:z},null,8,["theme-vars","text"]),d(D).showOrderDetail?(l(),v("div",ne,ie)):C("",!0)]),d(D).pageInfo.productImage?(l(),v("img",{key:0,class:"product-img",src:d(D).pageInfo.productImage,onClick:a[0]||(a[0]=e=>W(!0))},null,8,de)):C("",!0),d(D).showOrderDetail?(l(),r(F,{key:1,"is-show-close":"",count:5,"data-source":d(D).guaranteeItemVOS},null,8,["data-source"])):C("",!0),ue])]),O(j,{show:U.value,"onUpdate:show":a[2]||(a[2]=e=>U.value=e),onClose:a[3]||(a[3]=e=>U.value=!1)},{default:s((()=>[n("img",{class:"jump-img",src:d(D).pageInfo.notificationImage,style:{display:"block"},onClick:a[1]||(a[1]=e=>W(!0))},null,8,ce)])),_:1},8,["show"])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-fab7e5e2"]]);export{Ae as default};
