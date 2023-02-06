import{_ as e,d as t,z as a,a8 as o,b as r,c as l,e as n,w as d,i,aA as s,l as u,r as c,G as I,x as p,g as v,F as f,h as A,n as m,t as g,B as C,j as D,K as h,L as w,Z as S,u as E,a as O,bi as x,y,f as P,bj as T,T as U,$ as G,aU as b}from"./index-8f47c774.js";import{l as L}from"./index-c6b2b786.js";import{p as V}from"./product-c9124e2e.js";import{q as k,g as Q,a as N,i as Y}from"./trial-3ef3f449.js";import R from"./index-6100b7cf.js";import{a as B}from"./trial-c33602bf.js";import{e as M}from"./utils-3a8c57b9.js";import{s as W}from"./core-478e3021.js";import{a as j}from"./order-622d687f.js";import{u as K}from"./theme-65292714.js";import{s as z}from"./useStorage-17f91234.js";import{O as H}from"./infoCollection-4a054aed.js";import"./pdfh5-e5c0db2a.js";const q={class:"pro-curtain"},F=["src"];var J=e(t({props:{show:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:t}){const c=e,I=a({show:c.show});return o((()=>c.show),(()=>{I.show=c.show}),{immediate:!0}),(e,a)=>{const o=r("van-overlay");return l(),n(o,{show:u(I).show},{default:d((()=>[i("div",q,[s(e.$slots,"default",{},void 0,!0),i("img",{class:"close",src:u("data:image/png;base64,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"),onClick:a[0]||(a[0]=e=>t("close"))},null,8,F)])])),_:3},8,["show"])}}}),[["__scopeId","data-v-4c1ecdfa"]]);const Z={class:"guarantee-list"},X=(e=>(h("data-v-886dfc8a"),e=e(),w(),e))((()=>i("div",{class:"title"},"保障内容",-1))),_=["src"];var $=e(t({props:{dataSource:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10}},setup(e){const t=e,a=c(t.dataSource||[]),[d,s]=I(!1),h=p((()=>{var e;return!(!a.value||!(null==(e=a.value)?void 0:e.length))&&(a.value.length>t.count&&(!!t.isShowClose||!d.value))})),w=()=>{s()},S=p((()=>{var e;return a.value&&(null==(e=a.value)?void 0:e.length)?a.value.length<=t.count||d.value?a.value:a.value.slice(0,t.count):[]}));return o((()=>t.dataSource),(()=>{a.value=t.dataSource})),(e,t)=>{const a=r("ProCell");return l(),v("div",Z,[X,(l(!0),v(f,null,A(u(S),((e,t)=>(l(),n(a,{key:t,title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),u(h)?(l(),v("div",{key:0,class:"show-more",onClick:w},[m(g(u(d)?"收起":"查看更多")+" ",1),i("img",{src:u("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAjNJREFUOE+1VEtPE1EUPufM9GXKCnWlqAQZuhEff8CNxpYdSReVatIWJMYI7FkYF+wtxsSCBWNLY4JhZxHd+AdMqhs6PmJJWMkPsO303mPmQs10GJuawOxu5tzvfK9chCP+8Ijx4HgAVyZGskgQEgIXJkvbO//D+sXtyDlN43mW8Du9Vp1VDPNJ4xkiRoC5DhKz6VJ1qxfQ/MTITUSeA8QgM29niuYDBbh6/XyQzwZmAPCWfUbmLdAb2dTLWt0LeDE6FOjr12YYMfp3freRTX2s1Ts8VBuJZwEwxBJ2SMDj1OtqzQn66u7gQIt9jwDwgq1IAixOFs137ZlDobgvMPPTzNrXTaUkcfEG6zTXbaFnyrakcL/+EBBi+5vlB2Cy2meW8j35mk+8LOlaG8VII9v0kA3LzA1gXmwz9vJXAS4njRQC+qnR2kivf99zDubigwO+gH8egbUWwsJUwfzp/L8SHzolA/o4Azeniubqfm3uGBlgPMMITSnE5r3St0ovtXmeHB7VkWLI4Afk3UzBzCvA3DXwkWHEiPCyqgFxxQqGy9NLnywvYHtejxhRALyiHJZckWGzPL0EVoeHzo3Mcs8i8eZ+4cevDgsSwydJwzgBngYAS0hRdio6FErOdYGkKKcOLFhOGJdQxzFbor2QmnLd7blnym5JguUXImohw1WVNsjP4kTfWy9LutZGMSIcQwT/gWzLyfiftemWqG2BT6NxZqYmtTbcnrrvHs972Evnep35AykjACSCRaPlAAAAAElFTkSuQmCC"),class:C(["icon",{showMore:u(d)}])},null,10,_)])):D("",!0)])}}}),[["__scopeId","data-v-886dfc8a"]]);const ee=S([{value:j.PENDING,label:"待处理"},{value:j.PAYING,label:"订单未完成，逾期将失效"},{value:j.PAYMENT_SUCCESS,label:"支付成功"},{value:j.PAYMENT_FAILED,label:"支付失败"},{value:j.CANCELED,label:"已失效"},{value:j.ACCEPT_POLICY,label:"投保成功"},{value:j.INSURER_REJECT,label:"保司拒保"},{value:j.TIMEOUT,label:"订单已经关闭"},{value:j.UNDER_WRITING_SUCCESS,label:"核保通过"},{value:j.NOTE,label:"照会"},{value:j.MANUAL_UNDERWRITING,label:"人工核保"},{value:j.INSURANCE_PROCESSING,label:"保司处理中"}]),te={[j.ACCEPT_POLICY]:"恭喜 您已成功购买保障",[j.CANCELED]:"赠险保单已失效",[j.PAYING]:"剩余支付时间：23:59:59",[j.TIMEOUT]:"请您重新提交订单"};const ae={class:"page-pay-result"},oe={class:"header"},re={class:"product-status"},le=["innerHTML"],ne={class:"prodouct-container"},de={class:"product-card"},ie={class:"product-name"},se={class:"label"},ue={class:"value"},ce=["src"],Ie=["src"];var pe=e(t({setup(e){const t=K(),o=E(),s=O(),{tenantId:I,from:m="other",orderNo:C,code:h,channelCode:w=""}=s.query;let S="";const q=a({insureDetail:{},detail:{},orderDetail:{},showOrderDetail:!1,guaranteeItemVOS:[],pageInfo:{title:"",desc:"",insureList:[],productImage:"",notificationImage:""},timeDown:{},templateId:"2"}),F=c(!1),Z=p((()=>[j.ACCEPT_POLICY,j.CANCELED,j.PAYMENT_SUCCESS].includes(q.orderDetail.orderStatus)?"下载保单":j.PAYING===q.orderDetail.orderStatus?"立即支付":j.TIMEOUT===q.orderDetail.orderStatus?"重下一单":"")),X=p((()=>w||q.orderDetail.extInfo.extraInfo.channelCode)),_=async(e=!1,t="")=>{var a,r,l,n;try{const{insurerCode:d}=q.insureDetail.productBasicInfoVO,{templateId:i}=q.orderDetail.extInfo.extraInfo;delete q.orderDetail.extInfo.extraInfo.templateId;const s={insurerCode:d,productCode:e?null==(r=null==(a=q.insureDetail)?void 0:a.productBasicInfoVO)?void 0:r.upgradeGuaranteeConfigVO.productCode:S,tenantId:I,agencyCode:q.orderDetail.agencyId,agentCode:q.orderDetail.agentCode,saleChannelId:null==(n=null==(l=q.orderDetail.extInfo)?void 0:l.extraInfo)?void 0:n.saleChannelId};if("4"===i)return s.extraInfo=decodeURIComponent(JSON.stringify({...q.orderDetail.extInfo.extraInfo,channelCode:X.value,templateId:i})),s.orderNo=C,void o.push(`/baseInsurance/upgrade?${L.stringify(s)}`);s.extraMap={...q.orderDetail.extInfo.extraInfo,channelCode:X.value},e&&(s.extraMap.promotion=t),delete s.extraMap.templateId;const u=await k(s);if("10000"===u.code){if(!e){const{tenantOrderHolder:e,tenantOrderInsuredList:t}=q.orderDetail;z.set(H,{tenantOrderHolder:e,tenantOrderInsuredList:t})}window.location.href=u.data||""}}catch(d){}},pe=async()=>{var e,t,a,o,r;if("下载保单"===Z.value)if(null==(e=q.orderDetail.extInfo)?void 0:e.policyUrl)(null==(o=q.orderDetail.extInfo)?void 0:o.policyUrl)&&T(null==(r=q.orderDetail.extInfo)?void 0:r.policyUrl);else{const e=await Q({orderNo:C,tenantId:I});"10000"===e.code&&(q.orderDetail=e.data,(null==(t=q.orderDetail.extInfo)?void 0:t.policyUrl)?T(null==(a=q.orderDetail.extInfo)?void 0:a.policyUrl):U("电子保单单生成中，请稍后再试"))}else"立即支付"===Z.value?N({...q.orderDetail,extInfo:{...q.orderDetail.extInfo,redirectUrl:window.location.href}}).then((e=>{"10000"===e.code&&W(e.data.paymentUrl)})):"重下一单"===Z.value&&_(!1)},ve=async()=>{var e,t,a,o;const r=await Q({orderNo:C,tenantId:I,withProductInfo:!0});if("10000"===r.code){if(q.orderDetail=r.data,S=(null==(o=null==(a=null==(t=null==(e=r.data.tenantOrderInsuredList)?void 0:e[0])?void 0:t.tenantOrderProductList)?void 0:a[0])?void 0:o.productCode)||"",!S)return"";const l=V({productCode:S,withInsureInfo:!0,tenantId:I}),n=Y({productCode:S});Promise.all([l,n]).then((([e,t])=>{"10000"===e.code&&(q.detail=e.data),"10000"===t.code&&(q.insureDetail=t.data),(()=>{var e,t,a,o,r,l,n,d,i,s,u,c,I,p,v,f,A,g,C,D,h,w,S,E,O,x,y;[j.PAYMENT_SUCCESS,j.ACCEPT_POLICY].includes(q.orderDetail.orderStatus)&&(q.orderDetail.orderStatus=j.ACCEPT_POLICY),q.pageInfo.title=ee[q.orderDetail.orderStatus],q.pageInfo.desc=te[q.orderDetail.orderStatus],document.title=(null==(t=null==(e=q.detail)?void 0:e.tenantProductInsureVO)?void 0:t.productName)||"",q.templateId="4";let P="";if("2"===q.templateId.toString()?q.orderDetail.tenantOrderInsuredList[0].tenantOrderProductList.forEach((e=>P?null:(e.tenantOrderRiskList.forEach((e=>{1!==e.riskType||P||(P=M(e.insurancePeriodValue,B[e.insurancePeriodType]))})),!1))):(q.pageInfo.insureList=[{label:("4"===q.templateId?"下":"本")+"期缴费金额",value:`${q.orderDetail.orderAmount}元`}],P=`${G(q.orderDetail.commencementTime).format("YYYY.MM.DD")}到${G(q.orderDetail.expiryDate).format("YYYY.MM.DD")}`),q.pageInfo.insureList=[...q.pageInfo.insureList,{label:"被保人",value:null==(r=null==(o=null==(a=q.orderDetail)?void 0:a.tenantOrderInsuredList)?void 0:o[0])?void 0:r.name},{label:"保障期间",value:P||""}],q.templateId=q.orderDetail.extInfo.templateId,"free"!==m&&[j.PAYING,j.TIMEOUT].includes(q.orderDetail.orderStatus)?q.showOrderDetail=!0:(null==(n=null==(l=q.insureDetail)?void 0:l.productBasicInfoVO)?void 0:n.upgradeGuaranteeConfigVO.productCode)&&(q.pageInfo.notificationImage=(null==(u=null==(s=null==(i=null==(d=q.insureDetail)?void 0:d.productBasicInfoVO)?void 0:i.upgradeGuaranteeConfigVO)?void 0:s.notificationImage)?void 0:u[0])||"",q.pageInfo.productImage=(null==(v=null==(p=null==(I=null==(c=q.insureDetail)?void 0:c.productBasicInfoVO)?void 0:I.upgradeGuaranteeConfigVO)?void 0:p.productImage)?void 0:v[0])||"",F.value=!!q.pageInfo.notificationImage),j.PAYING===q.orderDetail.orderStatus){const e=(null==(A=null==(f=q.orderDetail.tenantOrderPaymentInfoList)?void 0:f[0])?void 0:A.paymentExpiryDate)||G().add(8.5,"hour");q.timeDown=b({time:G(e).diff(new Date,"millisecond")}),q.timeDown.start()}try{const e=null==(g=q.orderDetail.tenantOrderInsuredList)?void 0:g[0].planCode;(null==(D=null==(C=q.detail)?void 0:C.tenantProductInsureVO)?void 0:D.planInsureVO)?q.guaranteeItemVOS=(null==(y=null==(x=null==(O=q.detail)?void 0:O.tenantProductInsureVO)?void 0:x.planInsureVO)?void 0:y.guaranteeItemVOS)||[]:q.guaranteeItemVOS=(null==(E=null==(S=null==(w=null==(h=q.detail)?void 0:h.tenantProductInsureVO)?void 0:w.planList.filter((t=>t.planCode===e)))?void 0:S[0])?void 0:E.guaranteeItemVOS)||[]}catch(T){}})()}))}return""},fe=e=>{const t=`${e}`.length;let a="";for(let o=0;o<2-t;o++)a+="0";return a+e};x(window,"popstate",(e=>{var t,a,o;(null==(o=null==(a=null==(t=q.insureDetail)?void 0:t.productBasicInfoVO)?void 0:a.upgradeGuaranteeConfigVO)?void 0:o.productCode)&&(window.history.pushState(null,"",document.URL),_(!0,"FHGGW"))}));const Ae=p((()=>{var e;return j.PAYING===(null==(e=q.orderDetail)?void 0:e.orderStatus)?q.timeDown.current.total<=0?(q.orderDetail.orderStatus=j.TIMEOUT,q.pageInfo.title=ee[q.orderDetail.orderStatus],q.pageInfo.desc=te[q.orderDetail.orderStatus],q.timeDown.pause(),q.pageInfo.desc):`剩余支付时间：${fe(q.timeDown.current.hours)}:${fe(q.timeDown.current.minutes)}:${fe(q.timeDown.current.seconds)}`:q.pageInfo.desc}));return y((()=>{ve(),window.history&&window.history.pushState&&(window.history.pushState("forward","","#"),window.history.forward())})),(e,a)=>{const o=r("van-config-provider");return l(),n(o,{"theme-vars":u(t)},{default:d((()=>{var e,o;return[i("div",ae,[i("div",oe,[i("div",re,g(u(q).pageInfo.title),1),"重下一单"!==u(Z)||"3"!==u(q).templateId.toString()?(l(),v("div",{key:0,class:"desc",innerHTML:u(Ae)},null,8,le)):D("",!0)]),i("div",ne,[i("div",de,[i("div",ie,g((null==(o=null==(e=u(q).insureDetail)?void 0:e.productBasicInfoVO)?void 0:o.productName)||""),1),(l(!0),v(f,null,A(u(q).pageInfo.insureList,((e,t)=>(l(),v("div",{key:t,class:"list"},[i("span",se,g(e.label),1),i("span",ue,g(e.value),1)])))),128)),"重下一单"!==u(Z)||"3"!==u(q).templateId.toString()?(l(),n(R,{key:0,"theme-vars":u(t),class:"btn",text:u(Z),onClick:pe},null,8,["theme-vars","text"])):D("",!0)]),u(q).pageInfo.productImage?(l(),v("img",{key:0,class:"product-img",src:u(q).pageInfo.productImage,onClick:a[0]||(a[0]=e=>_(!0,"GDGGW"))},null,8,ce)):D("",!0),u(q).showOrderDetail?(l(),n($,{key:1,"is-show-close":"",count:5,"data-source":u(q).guaranteeItemVOS},null,8,["data-source"])):D("",!0)])]),P(J,{show:F.value,"onUpdate:show":a[2]||(a[2]=e=>F.value=e),onClose:a[3]||(a[3]=e=>F.value=!1)},{default:d((()=>[i("img",{class:"jump-img",src:u(q).pageInfo.notificationImage,style:{display:"block"},onClick:a[1]||(a[1]=e=>_(!0,"TCGGW"))},null,8,Ie)])),_:1},8,["show"])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-3d9ca1b4"]]);export{pe as default};
