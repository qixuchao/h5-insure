import{d as e,r as a,z as t,o,m as r,w as l,a as d,g as n,u as s,_ as i,dW as u,j as c,b_ as I,k as A,c as m,F as p,q as v,a8 as f,e as g,n as C,f as D,cX as h,av as E,aw as S,dT as T,ar as x,d6 as w,h as P,i as U,O as y,b,p as G,bJ as L,ag as k,T as N,c6 as Y,dX as O,aq as Q,dY as R}from"./index-676bb1f1.js";import{a as M,e as V}from"./product-8de57c68.js";import{n as B,g as W,o as z,i as H}from"./trial-28e7a8d0.js";import{P as j}from"./index-12bb3d0c.js";import{I as K}from"./trial-0861dccb.js";import{e as F}from"./utils-a04df732.js";import{s as q}from"./core-4b6ad147.js";import{O as J}from"./infoCollection-e8573492.js";import{T as Z}from"./constant-8927d485.js";import{d as X}from"./jsbridgePromise-1a7f0ae2.js";import{u as _}from"./useOrder-d0962f91.js";import{u as $}from"./useThread-637a02aa.js";const ee={class:"pro-curtain"},ae=["src"],te=e({name:"curtain"});var oe=i(e({...te,props:{show:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:i}){const c=e,I=a({show:c.show});return t((()=>c.show),(()=>{I.show=c.show}),{immediate:!0}),(e,a)=>{const t=u;return o(),r(t,{show:s(I).show},{default:l((()=>[d("div",ee,[n(e.$slots,"default",{},void 0,!0),d("img",{class:"close",src:s("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAAAXNSR0IArs4c6QAABwtJREFUeF7tnVtvG0UUgOeMncQmIiFx3CiFIDkQedfrNFXFvajQUkQBIVqQ4AGeQOKqCl75CdAXxGMjQBRRofSlFaiIqiqgClpBKzVNvF6naqImUtSLStqgxk2yOwdNsEMua3v24kvcyeuey5wvM+uZMzNngVTxDxFpOp3uDAaDnZZlbQCAexCxFQDuQsQwAAQQMQAAFmPMpJRmGWOziHgTAKYppVcXFhauJJPJqwCA1QoFKu14aGhoQ1NTUy9j7AEAuJcQ0uhDG+YAYJIxdhERRzVN+9sHm8ImKgLx9OnTLS0tLZsDgUCSMRYVbp17wcumaQ5HIpFzGzdunHVvRkyzrBCHh4e7KaWPA0AcAKhYk/yTQkSLEJJCxFOapl32z/JKS2WBeOHChfsWFhZ2AECsXA13aBf5MA+FQr/09PRccahbUtxXiGfOnGltbm7eSQjRCCG+2i4ZiYAAADBEPDc/P3+iv7//loCKkIhvgWYymUcYYzsIIU1CnqsoBACzpmkeSyaTQ340wzNEwzDuZoztqaGhK8wFANLNzc0/dHd3Z4WVbAQ9QTQMI4aIrxJCmr00opq6fM5JKR1UFGXKbTtcQ8xkMg9blrWrGr+6boMtpIeIJiHkSCKRGHFj2xVEXdd3AsBWNw5rWIeveI6rqvqH0zY6hqjr+osA8JBTR+tI/jdVVX910l5HEA3D2IWIjzpxsB5lKaUn4vH4SdG2C0PUdX0bAGwXNVwHcj+qqnpWJA4hiOl0uo8QsqcWJ9AiQbqRQURmWdbBvr6+i6X0S0IcGxvrnJube5sQ0lDKWL09R8RsOBzeH4vFbhSLrSjEVCrF01TvUkrb6w2Qg3imFEX5ki8ZC+kUhZhOp18ihGxx4LAuRQHgpKIoJxxDPH/+fE9DQ8Obd9J7sMhknIXD4YFYLGabTrPtiTwlbxjGB4SQO3kYr2Y6parqgB1oW4gjIyNbA4EAT2nJv2UEKKWH4/H4mszPGojj4+OhbDb7EQCEJMGVBBBxRlXVL/jG2fInayAahrEdEbdJgPYEGGM/aZr2Z0GIfEoTCAQ+5tuVEqI9AUS8keuNS1u0K3oiT28xxl6QAIsTYIwd0jRNz0utgGgYxnuI2CkhFieAiGOJROLbNRB1Xe8CgHckQCECGAwGP+/t7Z3h0ks9cXR0dKdlWfWWaBUi4lLomKqqp1ZATKVSeyu1Rg4Gg42mac67bLytGgA05DbrC65xffY3oSjK10sQU6lUO6V0r59OCtnq6up6rLW19TnTNKcmJia+m5+f93zMIxqNau3t7bt51mVycnIgm83+U+5YeKosHA7vi8VitxeHs67rWwCAJxvK/tfT0/NWY2Pj/dyRZVmXL126dMALyGg0moxEIq8QQhaPqVy/fv3QtWvXUmUPhL8LAb5XFCWTh7gbAPor4bijoyPe0dHxej5oLyBXA+S2xsfHv/L7VVGICyL+nkgkjuchvg8AGyoBkfuwC95pj/TDhtd4EXE8kUgcgMHBwcCmTZs+4Zkbr0ad6HuB4EXXSRtLySLibCKR2AeZTKaDMfZhKYVyPHcDw41OOdqetzk9Pf0ZpFKpBymlb5TTUTHbTqA4ka1UPIi4H0ZHRzdblvVypZza+RGBIyJTjRgQ8SCk0+knCCHPVqMBy30Wg1SrAHPTtMMwPDz8dDAYfKraEAv9as/MzJxta2t73o8pUTlitCzrKH8nPkMpfbIcDtzYXN3rltvwMqd00xYRHUT8ueYg2vXI3LDxvLoRgeJUZhFiLQ3nfAB2vdE0zSsTExPfeFkiOgUkIr84nGvlh6UYwPyzWhzOlmUdrokpTiGAHFqt/7AsTnGqPdkuBjC/nq7lKc7iZLuayz4RgE5kRN5hfsuEQqFPq5aAcAOn1nrkUgKCB6PrekVTYW4AetHxu/fl7S2lwnIQK5aU9QNGrfTI1UnZim0PFFrercek7IrtgUpuVEUiESUajb7mx1q4mtsDazaqeO+o1JZpvWxUAcDKLVMOsVKb9/WyZUoIWbt5X8ljJHWweW9/jIT3RnmgSWwyVPBAE1eXR+vEIBY9WicPeZaGWPKQZ25Iy+PGRVhSSo/G4/G/lovIg++lO9+ShPDBd64hr2DYk2WMHdE07dzqp/IykHhPdHYZiNuV19L+p8uXeIg4UKjKk7wgKdATXV+QzK2n5VVdQrxd1eUg5aVxj5fG8z1dli8oPuZLli/Iq8tCGoVBCkPMrWZkSRcblo4g5vZjZHGhVSAdQ8yBlGWuloF0BTGfNpMF1/4j6Rpi7h0pS/95hZgDKYtQCqx6hETWWzlUADhmVxRDKFg/flgKOZKFed38CwroyBLRPsKUxcp9hCnL5vsIk5uSH3DwGejqT4kgYhsAtOQ/JYKIQV49Of8pEULIbULILUrpTcZYzXxK5F+LaihMs6iiKwAAAABJRU5ErkJggg=="),onClick:a[0]||(a[0]=e=>i("close"))},null,8,ae)])])),_:3},8,["show"])}}}),[["__scopeId","data-v-697ee98a"]]);const re={class:"guarantee-list"},le=(e=>(E("data-v-186e639c"),e=e(),S(),e))((()=>d("div",{class:"title"},"保障内容",-1))),de=["src"],ne=e({name:"guaranteeContent"});var se=i(e({...ne,props:{dataSource:{default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{default:10}},setup(e){const a=e,l=c(a.dataSource||[]),[n,i]=I(!1),u=A((()=>{var e;return!(!l.value||!(null==(e=l.value)?void 0:e.length))&&(l.value.length>a.count&&(!!a.isShowClose||!n.value))})),E=()=>{i()},S=A((()=>{var e;return l.value&&(null==(e=l.value)?void 0:e.length)?l.value.length<=a.count||n.value?l.value:l.value.slice(0,a.count):[]}));return t((()=>a.dataSource),(()=>{l.value=a.dataSource})),(e,a)=>{const t=h;return o(),m("div",re,[le,(o(!0),m(p,null,v(s(S),((e,a)=>(o(),r(t,{key:a,title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),s(u)?(o(),m("div",{key:0,class:"show-more",onClick:E},[f(g(s(n)?"收起":"查看更多")+" ",1),d("img",{src:s("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAjNJREFUOE+1VEtPE1EUPufM9GXKCnWlqAQZuhEff8CNxpYdSReVatIWJMYI7FkYF+wtxsSCBWNLY4JhZxHd+AdMqhs6PmJJWMkPsO303mPmQs10GJuawOxu5tzvfK9chCP+8Ijx4HgAVyZGskgQEgIXJkvbO//D+sXtyDlN43mW8Du9Vp1VDPNJ4xkiRoC5DhKz6VJ1qxfQ/MTITUSeA8QgM29niuYDBbh6/XyQzwZmAPCWfUbmLdAb2dTLWt0LeDE6FOjr12YYMfp3freRTX2s1Ts8VBuJZwEwxBJ2SMDj1OtqzQn66u7gQIt9jwDwgq1IAixOFs137ZlDobgvMPPTzNrXTaUkcfEG6zTXbaFnyrakcL/+EBBi+5vlB2Cy2meW8j35mk+8LOlaG8VII9v0kA3LzA1gXmwz9vJXAS4njRQC+qnR2kivf99zDubigwO+gH8egbUWwsJUwfzp/L8SHzolA/o4Azeniubqfm3uGBlgPMMITSnE5r3St0ovtXmeHB7VkWLI4Afk3UzBzCvA3DXwkWHEiPCyqgFxxQqGy9NLnywvYHtejxhRALyiHJZckWGzPL0EVoeHzo3Mcs8i8eZ+4cevDgsSwydJwzgBngYAS0hRdio6FErOdYGkKKcOLFhOGJdQxzFbor2QmnLd7blnym5JguUXImohw1WVNsjP4kTfWy9LutZGMSIcQwT/gWzLyfiftemWqG2BT6NxZqYmtTbcnrrvHs972Evnep35AykjACSCRaPlAAAAAElFTkSuQmCC"),class:C(["icon",{showMore:s(n)}])},null,10,de)])):D("",!0)])}}}),[["__scopeId","data-v-186e639c"]]);const ie=x([{value:T.PENDING,label:"待处理"},{value:T.PAYING,label:"订单未完成，逾期将失效"},{value:T.PAYMENT_SUCCESS,label:"支付成功"},{value:T.PAYMENT_FAILED,label:"支付失败"},{value:T.CANCELED,label:"已失效"},{value:T.ACCEPT_POLICY,label:"投保成功"},{value:T.INSURER_REJECT,label:"保司拒保"},{value:T.TIMEOUT,label:"订单已经关闭"},{value:T.UNDER_WRITING_SUCCESS,label:"核保通过"},{value:T.NOTE,label:"照会"},{value:T.MANUAL_UNDERWRITING,label:"人工核保"},{value:T.INSURANCE_PROCESSING,label:"保司处理中"}]),ue={[T.ACCEPT_POLICY]:"恭喜 您已成功购买保障",[T.CANCELED]:"赠险保单已失效",[T.PAYING]:"剩余支付时间：23:59:59",[T.TIMEOUT]:"请您重新提交订单"};const ce={class:"page-pay-result"},Ie={class:"header"},Ae={class:"product-status"},me=["innerHTML"],pe={class:"prodouct-container"},ve={class:"product-card"},fe={class:"product-name"},ge={class:"label"},Ce={class:"value"},De=["src"],he=["src"];var Ee=i(e({__name:"index",setup(e){const t=w(),n=P(),i=U(),{tenantId:u,from:I="other",orderNo:f,preview:C,productCode:h,channelCode:E="",templateView:S}=i.query;let x="";const ee=a({insureDetail:{},detail:{},orderDetail:{},showOrderDetail:!1,guaranteeItemVOS:[],pageInfo:{title:"",desc:"",insureList:[],productImage:"",notificationImage:""},timeDown:{},templateId:"2"}),ae=c(!1),te=c(),re=A((()=>[T.ACCEPT_POLICY,T.CANCELED,T.PAYMENT_SUCCESS].includes(ee.orderDetail.orderStatus)?"下载保单":T.PAYING===ee.orderDetail.orderStatus?"立即支付":T.TIMEOUT===ee.orderDetail.orderStatus?"重下一单":"")),le=A((()=>E||ee.orderDetail.extInfo.extraInfo.channelCode)),de=A((()=>!!C)),ne=async(e=!1,a="")=>{var t,o,r,l;try{const{templateId:d}=ee.orderDetail.extInfo.extraInfo;delete ee.orderDetail.extInfo.extraInfo.templateId;const s={insurerCode:e?null==(t=te.value)?void 0:t.insurerCode:ee.orderDetail.venderCode,productCode:e?null==(o=te.value)?void 0:o.productCode:x,tenantId:u,agencyCode:ee.orderDetail.agencyId,agentCode:ee.orderDetail.agentCode,saleChannelId:null==(l=null==(r=ee.orderDetail.extInfo)?void 0:r.extraInfo)?void 0:l.saleChannelId};if(d===Z.UPGRADE)return s.extraInfo=decodeURIComponent(JSON.stringify({...ee.orderDetail.extInfo.extraInfo,channelCode:le.value,templateId:d})),s.orderNo=f,de.value&&(s.productCode="ZXYS2023"),void n.push(`/baseInsurance/upgrade?${L.stringify(s)}`);s.extraMap={...ee.orderDetail.extInfo.extraInfo,channelCode:le.value},e&&(s.extraMap.promotion=a),delete s.extraMap.templateId;const i=await B(s);if("10000"===i.code){if(!e){const{holder:e,insuredList:a}=ee.orderDetail;k.set(J,{holder:e,insuredList:a})}window.location.href=i.data||""}}catch(d){console.log(d)}},Ee=async()=>{var e,a,t,o,r,l;if("下载保单"===re.value){if(l="预览模式无法下载保单",!de.value||(N(l),0))if(null==(e=ee.orderDetail.extInfo)?void 0:e.policyUrl)(null==(o=ee.orderDetail.extInfo)?void 0:o.policyUrl)&&X(null==(r=ee.orderDetail.extInfo)?void 0:r.policyUrl);else{const e=await W({orderNo:f,tenantId:u});"10000"===e.code&&(ee.orderDetail=e.data,(null==(a=ee.orderDetail.extInfo)?void 0:a.policyUrl)?X(null==(t=ee.orderDetail.extInfo)?void 0:t.policyUrl):N("电子保单单生成中，请稍后再试"))}}else"立即支付"===re.value?z({...ee.orderDetail,extInfo:{...ee.orderDetail.extInfo,redirectUrl:window.location.href}}).then((e=>{"10000"===e.code&&q(e.data.paymentUrl)})):"重下一单"===re.value&&ne(!1)},Se=()=>{var e,a,t,o,r,l,d,n,s,i,u,c,I;[T.PAYMENT_SUCCESS,T.ACCEPT_POLICY].includes(ee.orderDetail.orderStatus)&&(ee.orderDetail.orderStatus=T.ACCEPT_POLICY),ee.pageInfo.title=ie[ee.orderDetail.orderStatus],ee.pageInfo.desc=ue[ee.orderDetail.orderStatus],O((null==(a=null==(e=ee.detail)?void 0:e.tenantProductInsureVO)?void 0:a.productName)||""),ee.templateId=ee.orderDetail.extInfo.templateId||"4";let A="";if("2"===ee.templateId.toString()?ee.orderDetail.insuredList[0].productList.forEach((e=>A?null:(e.riskList.forEach((e=>{1!==e.riskType||A||(A=F(e.insurancePeriodValue,K[e.insurancePeriodType]))})),!1))):(ee.pageInfo.insureList=[{label:(ee.templateId===Z.UPGRADE&&"1"===(null==(r=null==(o=null==(t=ee.orderDetail)?void 0:t.extInfo)?void 0:o.extraInfo)?void 0:r.isUpgrade)?"下":"本")+"期缴费金额",value:`${ee.orderDetail.orderAmount}元`}],A=`${Q(ee.orderDetail.commencementTime).format("YYYY.MM.DD")}到${Q(ee.orderDetail.expiryDate).format("YYYY.MM.DD")}`),ee.pageInfo.insureList=[...ee.pageInfo.insureList,{label:"被保人",value:null==(n=null==(d=null==(l=ee.orderDetail)?void 0:l.insuredList)?void 0:d[0])?void 0:n.name},{label:"保障期间",value:A||""}],ee.templateId=ee.orderDetail.extInfo.templateId,T.PAYING===ee.orderDetail.orderStatus){const e=(null==(i=null==(s=ee.orderDetail.tenantOrderPaymentInfoList)?void 0:s[0])?void 0:i.paymentExpiryDate)||Q().add(8.5,"hour");ee.timeDown=R({time:Q(e).diff(new Date,"millisecond")}),ee.timeDown.start()}const m=(null==(u=ee.orderDetail.insuredList)?void 0:u[0].planCode)||"";ee.guaranteeItemVOS=(null==(I=null==(c=ee.detail)?void 0:c.GUARANTEE.find((e=>!e.planCode||e.planCode===m)))?void 0:I.data)||[]};let Te;Te=$({start(){console.log("轮询中..."),W({orderNo:f,tenantId:u,withProductInfo:!0}).then((e=>{const{data:a}=e;"10000"===e.code&&a.orderStatus!==T.PAYING&&(ee.orderDetail=a,Se(),Te.stop())}))},stop(){console.log("轮询结束,结束方式：配置轮询次数")},number:5,time:2e3});const xe=async()=>{var e,a,t,o;const r=await new Promise(((e,a)=>{if(de.value){const a=_({extInfo:{buttonCode:"EVENT_SHORT_saveOrder",pageCode:"productInfo",iseeBizNo:"",templateId:S,extraInfo:{templateId:S}}});a.value.orderAmount=(1e3*Math.random()).toFixed(2),a.value.orderStatus="acceptPolicy",a.value.insuredList[0].name="小安",a.value.commencementTime=Q().format("YYYY-MM-DD HH:mm:ss"),a.value.expiryDate=Q().add(1,"year").format("YYYY-MM-DD HH:mm:ss"),a.value.insuredList[0].productList[0]={productCode:h,riskList:[{riskType:1,insurancePeriodValue:"1",insurancePeriodType:3}]},e({code:"10000",data:s(a)})}else W({orderNo:f,tenantId:u,withProductInfo:!0}).then((t=>{"10000"===t.code?e(t):a()}))}));if(console.log(r,"orderRes"),"10000"===r.code){if(ee.orderDetail=r.data,x=(null==(o=null==(t=null==(a=null==(e=r.data.insuredList)?void 0:e[0])?void 0:a.productList)?void 0:t[0])?void 0:o.productCode)||"",!x)return"";const l=!Number.isNaN(+u)&&M({productCode:x,withInsureInfo:!0,tenantId:u}),d=H({productCode:x});(async e=>{var a,t;const{code:o,data:r}=await V({productCode:e});"10000"===o&&(te.value=r,"free"!==I&&[T.PAYING,T.TIMEOUT].includes(ee.orderDetail.orderStatus)?ee.showOrderDetail=!0:r.productCode&&(ee.pageInfo.notificationImage=(null==(a=null==r?void 0:r.notificationImage)?void 0:a[0])||"",ee.pageInfo.productImage=(null==(t=null==r?void 0:r.productImage)?void 0:t[0])||"",ae.value=!!ee.pageInfo.notificationImage))})(x),Promise.all([l,d]).then((([e,a])=>{"10000"===e.code&&(ee.detail=e.data,e.data.BASIC_INFO&&e.data.BASIC_INFO.themeType&&Y(e.data.BASIC_INFO.themeType)),"10000"===a.code&&(ee.insureDetail=a.data),ee.orderDetail.orderStatus===T.PAYING&&Te.run(),Se()}))}return""},we=e=>{const a=`${e}`.length;let t="";for(let o=0;o<2-a;o++)t+="0";return t+e},Pe=A((()=>{var e,a,t;return T.PAYING===(null==(e=ee.orderDetail)?void 0:e.orderStatus)?(null==(t=null==(a=ee.timeDown)?void 0:a.current)?void 0:t.total)<=0?(ee.orderDetail.orderStatus=T.TIMEOUT,ee.pageInfo.title=ie[ee.orderDetail.orderStatus],ee.pageInfo.desc=ue[ee.orderDetail.orderStatus],ee.timeDown.pause(),ee.pageInfo.desc):`剩余支付时间：${we(ee.timeDown.current.hours)}:${we(ee.timeDown.current.minutes)}:${we(ee.timeDown.current.seconds)}`:ee.pageInfo.desc}));return y((()=>{xe()})),(e,a)=>{var n;return o(),m(p,null,[d("div",ce,[d("div",Ie,[d("div",Ae,g(s(ee).pageInfo.title),1),"重下一单"!==s(re)||"3"!==s(ee).templateId.toString()?(o(),m("div",{key:0,class:"desc",innerHTML:s(Pe)},null,8,me)):D("",!0)]),d("div",pe,[d("div",ve,[d("div",fe,g((null==(n=s(ee).insureDetail)?void 0:n.productName)||""),1),(o(!0),m(p,null,v(s(ee).pageInfo.insureList,((e,a)=>(o(),m("div",{key:a,class:"list"},[d("span",ge,g(e.label),1),d("span",Ce,g(e.value),1)])))),128)),"重下一单"!==s(re)||"3"!==s(ee).templateId.toString()?(o(),r(j,{key:0,"theme-vars":s(t),class:"btn",text:s(re),onClick:Ee},null,8,["theme-vars","text"])):D("",!0)]),s(ee).pageInfo.productImage?(o(),m("img",{key:0,class:"product-img",src:s(ee).pageInfo.productImage,onClick:a[0]||(a[0]=e=>ne(!0,"GDGGW"))},null,8,De)):D("",!0),s(ee).showOrderDetail?(o(),r(se,{key:1,"is-show-close":"",count:5,"data-source":s(ee).guaranteeItemVOS},null,8,["data-source"])):D("",!0)])]),b(oe,{show:s(ae),"onUpdate:show":a[2]||(a[2]=e=>G(ae)?ae.value=e:null),onClose:a[3]||(a[3]=e=>ae.value=!1)},{default:l((()=>[d("img",{class:"jump-img",src:s(ee).pageInfo.notificationImage,style:{display:"block"},onClick:a[1]||(a[1]=e=>ne(!0,"TCGGW"))},null,8,he)])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-769c96ae"]]);export{Ee as default};
