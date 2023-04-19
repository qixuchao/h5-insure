import{d as e,x as a,Q as t,cl as o,c as r,e as l,w as n,f as d,k as s,g as i,E as u,r as c,a6 as I,K as A,y as v,R as p,U as f,j as m,z as g,A as C,h as D,V as h,ag as E,ah as x,I as S,ce as U,a as T,u as w,a0 as P,i as y,a1 as G,O as b,M as k,cm as L,T as O,cn as Q,v as N,am as R}from"./index-000b7445.js";import{a as Y,d as M}from"./product-ce7756ec.js";import{j as V,c as W,e as B,i as K}from"./trial-220a9a50.js";import{P as z}from"./index-032964ce.js";import{I as j}from"./trial-8fc2f293.js";import{e as H}from"./utils-fc751943.js";import{s as q}from"./core-5bdfb048.js";import{O as J}from"./order-b20fb2b3.js";import{O as F}from"./infoCollection-048f5375.js";import{T as Z}from"./constant-c3f28a3b.js";import"./pdfh5-008ca364.js";const X={class:"pro-curtain"},_=["src"],$=e({name:"curtain"});var ee=u(e({...$,props:{show:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:u}){const c=e,I=a({show:c.show});return t((()=>c.show),(()=>{I.show=c.show}),{immediate:!0}),(e,a)=>{const t=o;return r(),l(t,{show:i(I).show},{default:n((()=>[d("div",X,[s(e.$slots,"default",{},void 0,!0),d("img",{class:"close",src:i("data:image/png;base64,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"),onClick:a[0]||(a[0]=e=>u("close"))},null,8,_)])])),_:3},8,["show"])}}}),[["__scopeId","data-v-697ee98a"]]);const ae={class:"guarantee-list"},te=(e=>(E("data-v-186e639c"),e=e(),x(),e))((()=>d("div",{class:"title"},"保障内容",-1))),oe=["src"],re=e({name:"guaranteeContent"});var le=u(e({...re,props:{dataSource:{default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{default:10}},setup(e){const a=e,o=c(a.dataSource||[]),[n,s]=I(!1),u=A((()=>{var e;return!(!o.value||!(null==(e=o.value)?void 0:e.length))&&(o.value.length>a.count&&(!!a.isShowClose||!n.value))})),E=()=>{s()},x=A((()=>{var e;return o.value&&(null==(e=o.value)?void 0:e.length)?o.value.length<=a.count||n.value?o.value:o.value.slice(0,a.count):[]}));return t((()=>a.dataSource),(()=>{o.value=a.dataSource})),(e,a)=>{const t=h;return r(),v("div",ae,[te,(r(!0),v(p,null,f(i(x),((e,a)=>(r(),l(t,{key:a,title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),i(u)?(r(),v("div",{key:0,class:"show-more",onClick:E},[m(g(i(n)?"收起":"查看更多")+" ",1),d("img",{src:i("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAjNJREFUOE+1VEtPE1EUPufM9GXKCnWlqAQZuhEff8CNxpYdSReVatIWJMYI7FkYF+wtxsSCBWNLY4JhZxHd+AdMqhs6PmJJWMkPsO303mPmQs10GJuawOxu5tzvfK9chCP+8Ijx4HgAVyZGskgQEgIXJkvbO//D+sXtyDlN43mW8Du9Vp1VDPNJ4xkiRoC5DhKz6VJ1qxfQ/MTITUSeA8QgM29niuYDBbh6/XyQzwZmAPCWfUbmLdAb2dTLWt0LeDE6FOjr12YYMfp3freRTX2s1Ts8VBuJZwEwxBJ2SMDj1OtqzQn66u7gQIt9jwDwgq1IAixOFs137ZlDobgvMPPTzNrXTaUkcfEG6zTXbaFnyrakcL/+EBBi+5vlB2Cy2meW8j35mk+8LOlaG8VII9v0kA3LzA1gXmwz9vJXAS4njRQC+qnR2kivf99zDubigwO+gH8egbUWwsJUwfzp/L8SHzolA/o4Azeniubqfm3uGBlgPMMITSnE5r3St0ovtXmeHB7VkWLI4Afk3UzBzCvA3DXwkWHEiPCyqgFxxQqGy9NLnywvYHtejxhRALyiHJZckWGzPL0EVoeHzo3Mcs8i8eZ+4cevDgsSwydJwzgBngYAS0hRdio6FErOdYGkKKcOLFhOGJdQxzFbor2QmnLd7blnym5JguUXImohw1WVNsjP4kTfWy9LutZGMSIcQwT/gWzLyfiftemWqG2BT6NxZqYmtTbcnrrvHs972Evnep35AykjACSCRaPlAAAAAElFTkSuQmCC"),class:C(["icon",{showMore:i(n)}])},null,10,oe)])):D("",!0)])}}}),[["__scopeId","data-v-186e639c"]]);const ne=S([{value:J.PENDING,label:"待处理"},{value:J.PAYING,label:"订单未完成，逾期将失效"},{value:J.PAYMENT_SUCCESS,label:"支付成功"},{value:J.PAYMENT_FAILED,label:"支付失败"},{value:J.CANCELED,label:"已失效"},{value:J.ACCEPT_POLICY,label:"投保成功"},{value:J.INSURER_REJECT,label:"保司拒保"},{value:J.TIMEOUT,label:"订单已经关闭"},{value:J.UNDER_WRITING_SUCCESS,label:"核保通过"},{value:J.NOTE,label:"照会"},{value:J.MANUAL_UNDERWRITING,label:"人工核保"},{value:J.INSURANCE_PROCESSING,label:"保司处理中"}]),de={[J.ACCEPT_POLICY]:"恭喜 您已成功购买保障",[J.CANCELED]:"赠险保单已失效",[J.PAYING]:"剩余支付时间：23:59:59",[J.TIMEOUT]:"请您重新提交订单"};const se={class:"page-pay-result"},ie={class:"header"},ue={class:"product-status"},ce=["innerHTML"],Ie={class:"prodouct-container"},Ae={class:"product-card"},ve={class:"product-name"},pe={class:"label"},fe={class:"value"},me=["src"],ge=["src"];var Ce=u(e({__name:"index",setup(e){const t=U(),o=T(),s=w(),{tenantId:u,from:I="other",orderNo:m,code:C,channelCode:h=""}=s.query;let E="";const x=a({insureDetail:{},detail:{},orderDetail:{},showOrderDetail:!1,guaranteeItemVOS:[],pageInfo:{title:"",desc:"",insureList:[],productImage:"",notificationImage:""},timeDown:{},templateId:"2"}),S=c(!1),X=c(),_=A((()=>[J.ACCEPT_POLICY,J.CANCELED,J.PAYMENT_SUCCESS].includes(x.orderDetail.orderStatus)?"下载保单":J.PAYING===x.orderDetail.orderStatus?"立即支付":J.TIMEOUT===x.orderDetail.orderStatus?"重下一单":"")),$=A((()=>h||x.orderDetail.extInfo.extraInfo.channelCode)),ae=async(e=!1,a="")=>{var t,r,l,n;try{const{templateId:d}=x.orderDetail.extInfo.extraInfo;delete x.orderDetail.extInfo.extraInfo.templateId;const s={insurerCode:e?null==(t=X.value)?void 0:t.insurerCode:x.orderDetail.venderCode,productCode:e?null==(r=X.value)?void 0:r.productCode:E,tenantId:u,agencyCode:x.orderDetail.agencyId,agentCode:x.orderDetail.agentCode,saleChannelId:null==(n=null==(l=x.orderDetail.extInfo)?void 0:l.extraInfo)?void 0:n.saleChannelId};if(d===Z.UPGRADE)return s.extraInfo=decodeURIComponent(JSON.stringify({...x.orderDetail.extInfo.extraInfo,channelCode:$.value,templateId:d})),s.orderNo=m,void o.push(`/baseInsurance/upgrade?${b.stringify(s)}`);s.extraMap={...x.orderDetail.extInfo.extraInfo,channelCode:$.value},e&&(s.extraMap.promotion=a),delete s.extraMap.templateId,console.log("订单转投保",s);const i=await V(s);if("10000"===i.code){if(!e){const{tenantOrderHolder:e,tenantOrderInsuredList:a}=x.orderDetail;k.set(F,{tenantOrderHolder:e,tenantOrderInsuredList:a})}window.location.href=i.data||""}}catch(d){console.log(d)}},te=async()=>{var e,a,t,o,r;if("下载保单"===_.value)if(null==(e=x.orderDetail.extInfo)?void 0:e.policyUrl)(null==(o=x.orderDetail.extInfo)?void 0:o.policyUrl)&&L(null==(r=x.orderDetail.extInfo)?void 0:r.policyUrl);else{const e=await W({orderNo:m,tenantId:u});"10000"===e.code&&(x.orderDetail=e.data,(null==(a=x.orderDetail.extInfo)?void 0:a.policyUrl)?L(null==(t=x.orderDetail.extInfo)?void 0:t.policyUrl):O("电子保单单生成中，请稍后再试"))}else"立即支付"===_.value?B({...x.orderDetail,extInfo:{...x.orderDetail.extInfo,redirectUrl:window.location.href}}).then((e=>{"10000"===e.code&&q(e.data.paymentUrl)})):"重下一单"===_.value&&ae(!1)},oe=async()=>{var e,a,t,o;const r=await W({orderNo:m,tenantId:u,withProductInfo:!0});if("10000"===r.code){if(x.orderDetail=r.data,E=(null==(o=null==(t=null==(a=null==(e=r.data.tenantOrderInsuredList)?void 0:e[0])?void 0:a.tenantOrderProductList)?void 0:t[0])?void 0:o.productCode)||"",!E)return"";const l=Y({productCode:E,withInsureInfo:!0,tenantId:u}),n=K({productCode:E});(async e=>{var a,t;const{code:o,data:r}=await M({productCode:e});"10000"===o&&(X.value=r,"free"!==I&&[J.PAYING,J.TIMEOUT].includes(x.orderDetail.orderStatus)?x.showOrderDetail=!0:r.productCode&&(x.pageInfo.notificationImage=(null==(a=null==r?void 0:r.notificationImage)?void 0:a[0])||"",x.pageInfo.productImage=(null==(t=null==r?void 0:r.productImage)?void 0:t[0])||"",S.value=!!x.pageInfo.notificationImage))})(E),Promise.all([l,n]).then((([e,a])=>{"10000"===e.code&&(x.detail=e.data),"10000"===a.code&&(x.insureDetail=a.data),(()=>{var e,a,t,o,r,l,n,d,s,i,u,c,I;[J.PAYMENT_SUCCESS,J.ACCEPT_POLICY].includes(x.orderDetail.orderStatus)&&(x.orderDetail.orderStatus=J.ACCEPT_POLICY),x.pageInfo.title=ne[x.orderDetail.orderStatus],x.pageInfo.desc=de[x.orderDetail.orderStatus],Q((null==(a=null==(e=x.detail)?void 0:e.tenantProductInsureVO)?void 0:a.productName)||""),x.templateId="4";let A="";if("2"===x.templateId.toString()?x.orderDetail.tenantOrderInsuredList[0].tenantOrderProductList.forEach((e=>A?null:(e.tenantOrderRiskList.forEach((e=>{1!==e.riskType||A||(A=H(e.insurancePeriodValue,j[e.insurancePeriodType]))})),!1))):(x.pageInfo.insureList=[{label:(x.templateId===Z.UPGRADE&&"1"===(null==(r=null==(o=null==(t=x.orderDetail)?void 0:t.extInfo)?void 0:o.extraInfo)?void 0:r.isUpgrade)?"下":"本")+"期缴费金额",value:`${x.orderDetail.orderAmount}元`}],A=`${N(x.orderDetail.commencementTime).format("YYYY.MM.DD")}到${N(x.orderDetail.expiryDate).format("YYYY.MM.DD")}`),x.pageInfo.insureList=[...x.pageInfo.insureList,{label:"被保人",value:null==(d=null==(n=null==(l=x.orderDetail)?void 0:l.tenantOrderInsuredList)?void 0:n[0])?void 0:d.name},{label:"保障期间",value:A||""}],x.templateId=x.orderDetail.extInfo.templateId,J.PAYING===x.orderDetail.orderStatus){const e=(null==(i=null==(s=x.orderDetail.tenantOrderPaymentInfoList)?void 0:s[0])?void 0:i.paymentExpiryDate)||N().add(8.5,"hour");x.timeDown=R({time:N(e).diff(new Date,"millisecond")}),x.timeDown.start()}try{const e=(null==(u=x.orderDetail.tenantOrderInsuredList)?void 0:u[0].planCode)||"";x.guaranteeItemVOS=(null==(I=null==(c=x.detail)?void 0:c.GUARANTEE.find((a=>a.planCode===e)))?void 0:I.data)||[]}catch(v){console.log(v)}})()}))}return""},re=e=>{const a=`${e}`.length;let t="";for(let o=0;o<2-a;o++)t+="0";return t+e},Ce=A((()=>{var e;return J.PAYING===(null==(e=x.orderDetail)?void 0:e.orderStatus)?x.timeDown.current.total<=0?(x.orderDetail.orderStatus=J.TIMEOUT,x.pageInfo.title=ne[x.orderDetail.orderStatus],x.pageInfo.desc=de[x.orderDetail.orderStatus],x.timeDown.pause(),x.pageInfo.desc):`剩余支付时间：${re(x.timeDown.current.hours)}:${re(x.timeDown.current.minutes)}:${re(x.timeDown.current.seconds)}`:x.pageInfo.desc}));return P((()=>{oe()})),(e,a)=>{var o;return r(),v(p,null,[d("div",se,[d("div",ie,[d("div",ue,g(i(x).pageInfo.title),1),"重下一单"!==i(_)||"3"!==i(x).templateId.toString()?(r(),v("div",{key:0,class:"desc",innerHTML:i(Ce)},null,8,ce)):D("",!0)]),d("div",Ie,[d("div",Ae,[d("div",ve,g((null==(o=i(x).insureDetail)?void 0:o.productName)||""),1),(r(!0),v(p,null,f(i(x).pageInfo.insureList,((e,a)=>(r(),v("div",{key:a,class:"list"},[d("span",pe,g(e.label),1),d("span",fe,g(e.value),1)])))),128)),"重下一单"!==i(_)||"3"!==i(x).templateId.toString()?(r(),l(z,{key:0,"theme-vars":i(t),class:"btn",text:i(_),onClick:te},null,8,["theme-vars","text"])):D("",!0)]),i(x).pageInfo.productImage?(r(),v("img",{key:0,class:"product-img",src:i(x).pageInfo.productImage,onClick:a[0]||(a[0]=e=>ae(!0,"GDGGW"))},null,8,me)):D("",!0),i(x).showOrderDetail?(r(),l(le,{key:1,"is-show-close":"",count:5,"data-source":i(x).guaranteeItemVOS},null,8,["data-source"])):D("",!0)])]),y(ee,{show:i(S),"onUpdate:show":a[2]||(a[2]=e=>G(S)?S.value=e:null),onClose:a[3]||(a[3]=e=>S.value=!1)},{default:n((()=>[d("img",{class:"jump-img",src:i(x).pageInfo.notificationImage,style:{display:"block"},onClick:a[1]||(a[1]=e=>ae(!0,"TCGGW"))},null,8,ge)])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-4d06472e"]]);export{Ce as default};
