import{d as e,z as a,R as t,cr as o,c as r,e as l,w as n,f as d,k as s,g as i,G as u,r as c,ac as I,L as A,A as v,U as m,V as p,j as f,E as g,F as C,h as D,W as h,al as E,am as x,bG as S,J as T,cg as w,a as P,u as U,a1 as y,i as L,a2 as G,Q as O,N as k,cs as b,T as Y,ct as N,y as R,ar as Q}from"./index-b419c4de.js";import{a as M,d as V}from"./product-6a371fd1.js";import{d as W,g as H,h as B,i as z}from"./trial-92a4c937.js";import{P as K}from"./index-4e2599d4.js";import{I as j}from"./trial-d4f76514.js";import{e as F}from"./utils-f99858fa.js";import{s as J}from"./core-2cd43e87.js";import{O as q}from"./infoCollection-2ed3ceeb.js";import{T as Z}from"./constant-8927d485.js";import{u as X}from"./useOrder-7e4863e8.js";import"./pdfh5-008ca364.js";const _={class:"pro-curtain"},$=["src"],ee=e({name:"curtain"});var ae=u(e({...ee,props:{show:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:u}){const c=e,I=a({show:c.show});return t((()=>c.show),(()=>{I.show=c.show}),{immediate:!0}),(e,a)=>{const t=o;return r(),l(t,{show:i(I).show},{default:n((()=>[d("div",_,[s(e.$slots,"default",{},void 0,!0),d("img",{class:"close",src:i("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAAAXNSR0IArs4c6QAABwtJREFUeF7tnVtvG0UUgOeMncQmIiFx3CiFIDkQedfrNFXFvajQUkQBIVqQ4AGeQOKqCl75CdAXxGMjQBRRofSlFaiIqiqgClpBKzVNvF6naqImUtSLStqgxk2yOwdNsEMua3v24kvcyeuey5wvM+uZMzNngVTxDxFpOp3uDAaDnZZlbQCAexCxFQDuQsQwAAQQMQAAFmPMpJRmGWOziHgTAKYppVcXFhauJJPJqwCA1QoFKu14aGhoQ1NTUy9j7AEAuJcQ0uhDG+YAYJIxdhERRzVN+9sHm8ImKgLx9OnTLS0tLZsDgUCSMRYVbp17wcumaQ5HIpFzGzdunHVvRkyzrBCHh4e7KaWPA0AcAKhYk/yTQkSLEJJCxFOapl32z/JKS2WBeOHChfsWFhZ2AECsXA13aBf5MA+FQr/09PRccahbUtxXiGfOnGltbm7eSQjRCCG+2i4ZiYAAADBEPDc/P3+iv7//loCKkIhvgWYymUcYYzsIIU1CnqsoBACzpmkeSyaTQ340wzNEwzDuZoztqaGhK8wFANLNzc0/dHd3Z4WVbAQ9QTQMI4aIrxJCmr00opq6fM5JKR1UFGXKbTtcQ8xkMg9blrWrGr+6boMtpIeIJiHkSCKRGHFj2xVEXdd3AsBWNw5rWIeveI6rqvqH0zY6hqjr+osA8JBTR+tI/jdVVX910l5HEA3D2IWIjzpxsB5lKaUn4vH4SdG2C0PUdX0bAGwXNVwHcj+qqnpWJA4hiOl0uo8QsqcWJ9AiQbqRQURmWdbBvr6+i6X0S0IcGxvrnJube5sQ0lDKWL09R8RsOBzeH4vFbhSLrSjEVCrF01TvUkrb6w2Qg3imFEX5ki8ZC+kUhZhOp18ihGxx4LAuRQHgpKIoJxxDPH/+fE9DQ8Obd9J7sMhknIXD4YFYLGabTrPtiTwlbxjGB4SQO3kYr2Y6parqgB1oW4gjIyNbA4EAT2nJv2UEKKWH4/H4mszPGojj4+OhbDb7EQCEJMGVBBBxRlXVL/jG2fInayAahrEdEbdJgPYEGGM/aZr2Z0GIfEoTCAQ+5tuVEqI9AUS8keuNS1u0K3oiT28xxl6QAIsTYIwd0jRNz0utgGgYxnuI2CkhFieAiGOJROLbNRB1Xe8CgHckQCECGAwGP+/t7Z3h0ks9cXR0dKdlWfWWaBUi4lLomKqqp1ZATKVSeyu1Rg4Gg42mac67bLytGgA05DbrC65xffY3oSjK10sQU6lUO6V0r59OCtnq6up6rLW19TnTNKcmJia+m5+f93zMIxqNau3t7bt51mVycnIgm83+U+5YeKosHA7vi8VitxeHs67rWwCAJxvK/tfT0/NWY2Pj/dyRZVmXL126dMALyGg0moxEIq8QQhaPqVy/fv3QtWvXUmUPhL8LAb5XFCWTh7gbAPor4bijoyPe0dHxej5oLyBXA+S2xsfHv/L7VVGICyL+nkgkjuchvg8AGyoBkfuwC95pj/TDhtd4EXE8kUgcgMHBwcCmTZs+4Zkbr0ad6HuB4EXXSRtLySLibCKR2AeZTKaDMfZhKYVyPHcDw41OOdqetzk9Pf0ZpFKpBymlb5TTUTHbTqA4ka1UPIi4H0ZHRzdblvVypZza+RGBIyJTjRgQ8SCk0+knCCHPVqMBy30Wg1SrAHPTtMMwPDz8dDAYfKraEAv9as/MzJxta2t73o8pUTlitCzrKH8nPkMpfbIcDtzYXN3rltvwMqd00xYRHUT8ueYg2vXI3LDxvLoRgeJUZhFiLQ3nfAB2vdE0zSsTExPfeFkiOgUkIr84nGvlh6UYwPyzWhzOlmUdrokpTiGAHFqt/7AsTnGqPdkuBjC/nq7lKc7iZLuayz4RgE5kRN5hfsuEQqFPq5aAcAOn1nrkUgKCB6PrekVTYW4AetHxu/fl7S2lwnIQK5aU9QNGrfTI1UnZim0PFFrercek7IrtgUpuVEUiESUajb7mx1q4mtsDazaqeO+o1JZpvWxUAcDKLVMOsVKb9/WyZUoIWbt5X8ljJHWweW9/jIT3RnmgSWwyVPBAE1eXR+vEIBY9WicPeZaGWPKQZ25Iy+PGRVhSSo/G4/G/lovIg++lO9+ShPDBd64hr2DYk2WMHdE07dzqp/IykHhPdHYZiNuV19L+p8uXeIg4UKjKk7wgKdATXV+QzK2n5VVdQrxd1eUg5aVxj5fG8z1dli8oPuZLli/Iq8tCGoVBCkPMrWZkSRcblo4g5vZjZHGhVSAdQ8yBlGWuloF0BTGfNpMF1/4j6Rpi7h0pS/95hZgDKYtQCqx6hETWWzlUADhmVxRDKFg/flgKOZKFed38CwroyBLRPsKUxcp9hCnL5vsIk5uSH3DwGejqT4kgYhsAtOQ/JYKIQV49Of8pEULIbULILUrpTcZYzXxK5F+LaihMs6iiKwAAAABJRU5ErkJggg=="),onClick:a[0]||(a[0]=e=>u("close"))},null,8,$)])])),_:3},8,["show"])}}}),[["__scopeId","data-v-697ee98a"]]);const te={class:"guarantee-list"},oe=(e=>(E("data-v-186e639c"),e=e(),x(),e))((()=>d("div",{class:"title"},"保障内容",-1))),re=["src"],le=e({name:"guaranteeContent"});var ne=u(e({...le,props:{dataSource:{default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{default:10}},setup(e){const a=e,o=c(a.dataSource||[]),[n,s]=I(!1),u=A((()=>{var e;return!(!o.value||!(null==(e=o.value)?void 0:e.length))&&(o.value.length>a.count&&(!!a.isShowClose||!n.value))})),E=()=>{s()},x=A((()=>{var e;return o.value&&(null==(e=o.value)?void 0:e.length)?o.value.length<=a.count||n.value?o.value:o.value.slice(0,a.count):[]}));return t((()=>a.dataSource),(()=>{o.value=a.dataSource})),(e,a)=>{const t=h;return r(),v("div",te,[oe,(r(!0),v(m,null,p(i(x),((e,a)=>(r(),l(t,{key:a,title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),i(u)?(r(),v("div",{key:0,class:"show-more",onClick:E},[f(g(i(n)?"收起":"查看更多")+" ",1),d("img",{src:i("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAjNJREFUOE+1VEtPE1EUPufM9GXKCnWlqAQZuhEff8CNxpYdSReVatIWJMYI7FkYF+wtxsSCBWNLY4JhZxHd+AdMqhs6PmJJWMkPsO303mPmQs10GJuawOxu5tzvfK9chCP+8Ijx4HgAVyZGskgQEgIXJkvbO//D+sXtyDlN43mW8Du9Vp1VDPNJ4xkiRoC5DhKz6VJ1qxfQ/MTITUSeA8QgM29niuYDBbh6/XyQzwZmAPCWfUbmLdAb2dTLWt0LeDE6FOjr12YYMfp3freRTX2s1Ts8VBuJZwEwxBJ2SMDj1OtqzQn66u7gQIt9jwDwgq1IAixOFs137ZlDobgvMPPTzNrXTaUkcfEG6zTXbaFnyrakcL/+EBBi+5vlB2Cy2meW8j35mk+8LOlaG8VII9v0kA3LzA1gXmwz9vJXAS4njRQC+qnR2kivf99zDubigwO+gH8egbUWwsJUwfzp/L8SHzolA/o4Azeniubqfm3uGBlgPMMITSnE5r3St0ovtXmeHB7VkWLI4Afk3UzBzCvA3DXwkWHEiPCyqgFxxQqGy9NLnywvYHtejxhRALyiHJZckWGzPL0EVoeHzo3Mcs8i8eZ+4cevDgsSwydJwzgBngYAS0hRdio6FErOdYGkKKcOLFhOGJdQxzFbor2QmnLd7blnym5JguUXImohw1WVNsjP4kTfWy9LutZGMSIcQwT/gWzLyfiftemWqG2BT6NxZqYmtTbcnrrvHs972Evnep35AykjACSCRaPlAAAAAElFTkSuQmCC"),class:C(["icon",{showMore:i(n)}])},null,10,re)])):D("",!0)])}}}),[["__scopeId","data-v-186e639c"]]);const de=T([{value:S.PENDING,label:"待处理"},{value:S.PAYING,label:"订单未完成，逾期将失效"},{value:S.PAYMENT_SUCCESS,label:"支付成功"},{value:S.PAYMENT_FAILED,label:"支付失败"},{value:S.CANCELED,label:"已失效"},{value:S.ACCEPT_POLICY,label:"投保成功"},{value:S.INSURER_REJECT,label:"保司拒保"},{value:S.TIMEOUT,label:"订单已经关闭"},{value:S.UNDER_WRITING_SUCCESS,label:"核保通过"},{value:S.NOTE,label:"照会"},{value:S.MANUAL_UNDERWRITING,label:"人工核保"},{value:S.INSURANCE_PROCESSING,label:"保司处理中"}]),se={[S.ACCEPT_POLICY]:"恭喜 您已成功购买保障",[S.CANCELED]:"赠险保单已失效",[S.PAYING]:"剩余支付时间：23:59:59",[S.TIMEOUT]:"请您重新提交订单"};const ie={class:"page-pay-result"},ue={class:"header"},ce={class:"product-status"},Ie=["innerHTML"],Ae={class:"prodouct-container"},ve={class:"product-card"},me={class:"product-name"},pe={class:"label"},fe={class:"value"},ge=["src"],Ce=["src"];var De=u(e({__name:"index",setup(e){const t=w(),o=P(),s=U(),{tenantId:u,from:I="other",orderNo:f,preview:C,productCode:h,channelCode:E="",templateView:x}=s.query;let T="";const _=a({insureDetail:{},detail:{},orderDetail:{},showOrderDetail:!1,guaranteeItemVOS:[],pageInfo:{title:"",desc:"",insureList:[],productImage:"",notificationImage:""},timeDown:{},templateId:"2"}),$=c(!1),ee=c(),te=A((()=>[S.ACCEPT_POLICY,S.CANCELED,S.PAYMENT_SUCCESS].includes(_.orderDetail.orderStatus)?"下载保单":S.PAYING===_.orderDetail.orderStatus?"立即支付":S.TIMEOUT===_.orderDetail.orderStatus?"重下一单":"")),oe=A((()=>E||_.orderDetail.extInfo.extraInfo.channelCode)),re=A((()=>!!C)),le=async(e=!1,a="")=>{var t,r,l,n;try{const{templateId:d}=_.orderDetail.extInfo.extraInfo;delete _.orderDetail.extInfo.extraInfo.templateId;const s={insurerCode:e?null==(t=ee.value)?void 0:t.insurerCode:_.orderDetail.venderCode,productCode:e?null==(r=ee.value)?void 0:r.productCode:T,tenantId:u,agencyCode:_.orderDetail.agencyId,agentCode:_.orderDetail.agentCode,saleChannelId:null==(n=null==(l=_.orderDetail.extInfo)?void 0:l.extraInfo)?void 0:n.saleChannelId};if(d===Z.UPGRADE)return s.extraInfo=decodeURIComponent(JSON.stringify({..._.orderDetail.extInfo.extraInfo,channelCode:oe.value,templateId:d})),s.orderNo=f,void o.push(`/baseInsurance/upgrade?${O.stringify(s)}`);s.extraMap={..._.orderDetail.extInfo.extraInfo,channelCode:oe.value},e&&(s.extraMap.promotion=a),delete s.extraMap.templateId,console.log("订单转投保",s);const i=await W(s);if("10000"===i.code){if(!e){const{tenantOrderHolder:e,tenantOrderInsuredList:a}=_.orderDetail;k.set(q,{tenantOrderHolder:e,tenantOrderInsuredList:a})}window.location.href=i.data||""}}catch(d){console.log(d)}},De=async()=>{var e,a,t,o,r,l;if("下载保单"===te.value){if(l="预览模式无法下载保单",!re.value||(Y(l),0))if(null==(e=_.orderDetail.extInfo)?void 0:e.policyUrl)(null==(o=_.orderDetail.extInfo)?void 0:o.policyUrl)&&b(null==(r=_.orderDetail.extInfo)?void 0:r.policyUrl);else{const e=await H({orderNo:f,tenantId:u});"10000"===e.code&&(_.orderDetail=e.data,(null==(a=_.orderDetail.extInfo)?void 0:a.policyUrl)?b(null==(t=_.orderDetail.extInfo)?void 0:t.policyUrl):Y("电子保单单生成中，请稍后再试"))}}else"立即支付"===te.value?B({..._.orderDetail,extInfo:{..._.orderDetail.extInfo,redirectUrl:window.location.href}}).then((e=>{"10000"===e.code&&J(e.data.paymentUrl)})):"重下一单"===te.value&&le(!1)},he=async()=>{var e,a,t,o;const r=await new Promise(((e,a)=>{if(re.value){const a=X({extInfo:{buttonCode:"EVENT_SHORT_saveOrder",pageCode:"productInfo",iseeBizNo:"",templateId:x,extraInfo:{templateId:x}}});a.value.orderAmount=(1e3*Math.random()).toFixed(2),a.value.orderStatus="acceptPolicy",a.value.tenantOrderInsuredList[0].name="小安",a.value.commencementTime=R().format("YYYY-MM-DD HH:mm:ss"),a.value.expiryDate=R().add(1,"year").format("YYYY-MM-DD HH:mm:ss"),a.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={productCode:h,tenantOrderRiskList:[{riskType:1,insurancePeriodValue:"1",insurancePeriodType:3}]},e({code:"10000",data:i(a)})}else H({orderNo:f,tenantId:u,withProductInfo:!0}).then((t=>{"10000"===t.code?e(t):a()}))}));if(console.log(r,"orderRes"),"10000"===r.code){if(_.orderDetail=r.data,T=(null==(o=null==(t=null==(a=null==(e=r.data.tenantOrderInsuredList)?void 0:e[0])?void 0:a.tenantOrderProductList)?void 0:t[0])?void 0:o.productCode)||"",!T)return"";const l=M({productCode:T,withInsureInfo:!0,tenantId:u}),n=z({productCode:T});(async e=>{var a,t;const{code:o,data:r}=await V({productCode:e});"10000"===o&&(ee.value=r,"free"!==I&&[S.PAYING,S.TIMEOUT].includes(_.orderDetail.orderStatus)?_.showOrderDetail=!0:r.productCode&&(_.pageInfo.notificationImage=(null==(a=null==r?void 0:r.notificationImage)?void 0:a[0])||"",_.pageInfo.productImage=(null==(t=null==r?void 0:r.productImage)?void 0:t[0])||"",$.value=!!_.pageInfo.notificationImage))})(T),Promise.all([l,n]).then((([e,a])=>{"10000"===e.code&&(_.detail=e.data),"10000"===a.code&&(_.insureDetail=a.data),(()=>{var e,a,t,o,r,l,n,d,s,i,u,c,I;[S.PAYMENT_SUCCESS,S.ACCEPT_POLICY].includes(_.orderDetail.orderStatus)&&(_.orderDetail.orderStatus=S.ACCEPT_POLICY),_.pageInfo.title=de[_.orderDetail.orderStatus],_.pageInfo.desc=se[_.orderDetail.orderStatus],N((null==(a=null==(e=_.detail)?void 0:e.tenantProductInsureVO)?void 0:a.productName)||""),_.templateId=_.orderDetail.extInfo.templateId||"4";let A="";if("2"===_.templateId.toString()?_.orderDetail.tenantOrderInsuredList[0].tenantOrderProductList.forEach((e=>A?null:(e.tenantOrderRiskList.forEach((e=>{1!==e.riskType||A||(A=F(e.insurancePeriodValue,j[e.insurancePeriodType]))})),!1))):(_.pageInfo.insureList=[{label:(_.templateId===Z.UPGRADE&&"1"===(null==(r=null==(o=null==(t=_.orderDetail)?void 0:t.extInfo)?void 0:o.extraInfo)?void 0:r.isUpgrade)?"下":"本")+"期缴费金额",value:`${_.orderDetail.orderAmount}元`}],A=`${R(_.orderDetail.commencementTime).format("YYYY.MM.DD")}到${R(_.orderDetail.expiryDate).format("YYYY.MM.DD")}`),_.pageInfo.insureList=[..._.pageInfo.insureList,{label:"被保人",value:null==(d=null==(n=null==(l=_.orderDetail)?void 0:l.tenantOrderInsuredList)?void 0:n[0])?void 0:d.name},{label:"保障期间",value:A||""}],_.templateId=_.orderDetail.extInfo.templateId,S.PAYING===_.orderDetail.orderStatus){const e=(null==(i=null==(s=_.orderDetail.tenantOrderPaymentInfoList)?void 0:s[0])?void 0:i.paymentExpiryDate)||R().add(8.5,"hour");_.timeDown=Q({time:R(e).diff(new Date,"millisecond")}),_.timeDown.start()}try{const e=(null==(u=_.orderDetail.tenantOrderInsuredList)?void 0:u[0].planCode)||"";_.guaranteeItemVOS=(null==(I=null==(c=_.detail)?void 0:c.GUARANTEE.find((a=>a.planCode===e)))?void 0:I.data)||[]}catch(v){console.log(v)}})()}))}return""},Ee=e=>{const a=`${e}`.length;let t="";for(let o=0;o<2-a;o++)t+="0";return t+e},xe=A((()=>{var e;return S.PAYING===(null==(e=_.orderDetail)?void 0:e.orderStatus)?_.timeDown.current.total<=0?(_.orderDetail.orderStatus=S.TIMEOUT,_.pageInfo.title=de[_.orderDetail.orderStatus],_.pageInfo.desc=se[_.orderDetail.orderStatus],_.timeDown.pause(),_.pageInfo.desc):`剩余支付时间：${Ee(_.timeDown.current.hours)}:${Ee(_.timeDown.current.minutes)}:${Ee(_.timeDown.current.seconds)}`:_.pageInfo.desc}));return y((()=>{he()})),(e,a)=>{var o;return r(),v(m,null,[d("div",ie,[d("div",ue,[d("div",ce,g(i(_).pageInfo.title),1),"重下一单"!==i(te)||"3"!==i(_).templateId.toString()?(r(),v("div",{key:0,class:"desc",innerHTML:i(xe)},null,8,Ie)):D("",!0)]),d("div",Ae,[d("div",ve,[d("div",me,g((null==(o=i(_).insureDetail)?void 0:o.productName)||""),1),(r(!0),v(m,null,p(i(_).pageInfo.insureList,((e,a)=>(r(),v("div",{key:a,class:"list"},[d("span",pe,g(e.label),1),d("span",fe,g(e.value),1)])))),128)),"重下一单"!==i(te)||"3"!==i(_).templateId.toString()?(r(),l(K,{key:0,"theme-vars":i(t),class:"btn",text:i(te),onClick:De},null,8,["theme-vars","text"])):D("",!0)]),i(_).pageInfo.productImage?(r(),v("img",{key:0,class:"product-img",src:i(_).pageInfo.productImage,onClick:a[0]||(a[0]=e=>le(!0,"GDGGW"))},null,8,ge)):D("",!0),i(_).showOrderDetail?(r(),l(ne,{key:1,"is-show-close":"",count:5,"data-source":i(_).guaranteeItemVOS},null,8,["data-source"])):D("",!0)])]),L(ae,{show:i($),"onUpdate:show":a[2]||(a[2]=e=>G($)?$.value=e:null),onClose:a[3]||(a[3]=e=>$.value=!1)},{default:n((()=>[d("img",{class:"jump-img",src:i(_).pageInfo.notificationImage,style:{display:"block"},onClick:a[1]||(a[1]=e=>le(!0,"TCGGW"))},null,8,Ce)])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-9f60a74a"]]);export{De as default};
