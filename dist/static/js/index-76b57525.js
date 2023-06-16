import{z as e,d as n,r as a,A as o,V as r,L as t,aF as l,C as i,ck as s,x as c,b as u,c as d,i as m,f,e as p,h as v,$ as I,E as D,w as y,a0 as k,j as Y,G as b,b5 as V,a4 as S,B as g,aU as w,aH as h,aS as L,aT as E,br as M}from"./index-5cde27cd.js";import{c as $,d as C}from"./infoCollection-7a87df97.js";import"./trial-dced929d.js";const O=(n,a="YYYY-MM-DD")=>e(n).format(a),x=(n,a=0,o="day",r="YYYY-MM-DD")=>e(n).add(a,o).format(r),T=(n,a=0,o="day",r="YYYY-MM-DD")=>e(n).subtract(a,o).format(r);const N=e=>(L("data-v-1de4c6a6"),e=e(),E(),e),U={class:"com-period-cell"},P={key:0,class:"period-custom-cell period-check-btn-cell"},_=N((()=>m("div",{class:"period-cell-label"},"保障期间",-1))),R={class:"period-cell-content"},F=N((()=>m("div",{class:"period-cell-label"},"生效日期",-1))),q={class:"period-cell-content period-custom-cell-content"},A=N((()=>m("div",{class:"period-cell-label"},"保障期限",-1))),j={class:"period-cell-content period-custom-cell-content"},H={key:2,class:"period-custom-cell period-common-cell"},z=N((()=>m("div",{class:"period-cell-label"},"保障期限",-1))),B={class:"period-cell-content"},G=N((()=>m("div",{class:"picker-custom-title"},"保险开始生效日期",-1))),X=n({name:"insurancePeriodCell"});var J=b(n({...X,props:{formInfo:{default:()=>({})},riskInfo:{default:()=>({})}},emits:["onReset","onUpdate","onVerify"],setup(n,{expose:b,emit:L}){const E=n;a({});const M=(e,n)=>"year"===e?`${n}年`:"month"===e?`${n}月`:"day"===e?`${n}日`:n,N=a(new Date),X=o({formInfo:E.formInfo}),J=a(!0);a([]),r((()=>X.formInfo.insuranceStartDate),(e=>{e&&"string"==typeof e&&(N.value=new Date(e))}));const K=t((()=>{var e;const{insurancePeriodValueList:n=[]}=(null==(e=E.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n.length?(X.formInfo.coveragePeriod||(X.formInfo.coveragePeriod=n[0].code),n):[]})),Q=t((()=>{var e;const{insuranceStartType:n}=(null==(e=E.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n||1})),W=t((()=>{var e;const{insuranceEndType:n}=(null==(e=E.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n||1})),[Z,ee]=l(!1),ne=()=>{J.value&&ee(!0)},ae=t((()=>{var e,n;if(`${Q.value}`===$.CUSTOM_DAY){const a=null==(n=null==(e=E.riskInfo)?void 0:e.productRiskInsureLimitVO)?void 0:n.insuranceStartTime;if(a&&a.indexOf(",")){const[e,n]=a.split(",");return new Date(x(new Date,Number(e),"day"))}}return new Date(x(new Date,1,"day"))})),oe=t((()=>{var e,n;if(`${Q.value}`===$.CUSTOM_DAY){const a=null==(n=null==(e=E.riskInfo)?void 0:e.productRiskInsureLimitVO)?void 0:n.insuranceStartTime;if(!a)return new Date;if(a.indexOf(",")){const[e,n]=a.split(",");return new Date(x(new Date,Number(n),"day"))}const o=x(new Date,Number(a),"day");return new Date(o)}return new Date})),re=e=>{X.formInfo.insuranceStartDate=`${O(e)} 00:00:00`,ee(!1)},te=()=>{ee(!1)};return r((()=>E.riskInfo),(()=>{const{productRiskInsureLimitVO:e}=E.riskInfo||{};if(e){const{insurancePeriodValueList:n,paymentFrequencyList:a=[]}=e||{};K.value=n}}),{deep:!0,immediate:!0}),r([()=>Q.value,()=>X.formInfo.coveragePeriod,()=>X.formInfo.insuranceStartDate,()=>E.riskInfo],(()=>{var n,a;if(!X.formInfo.coveragePeriod)return;const[o,r]=X.formInfo.coveragePeriod.split("_");if(!X.formInfo.insuranceStartDate)if(`${Q.value}`===$.CUSTOM_DAY){const e=null==(a=null==(n=E.riskInfo)?void 0:n.productRiskInsureLimitVO)?void 0:a.insuranceStartTime;if(e)if(e.indexOf(",")){const[n,a]=e.split(",");X.formInfo.insuranceStartDate=`${x(new Date,Number(n),"day")} 00:00:00`,console.log("start",n,a),J.value=n!==a}else X.formInfo.insuranceStartDate=`${x(new Date,e,"day")} 00:00:00`;else X.formInfo.insuranceStartDate=`${x(new Date,1,"day")} 00:00:00`}else`${Q.value}`===$.NEXT_DAY?X.formInfo.insuranceStartDate=`${x(new Date,1,"day")} 00:00:00`:X.formInfo.insuranceStartDate=`${O(new Date)} 00:00:00`;if("to"!==o)T(X.formInfo.insuranceStartDate,1,"day"),`${W.value}`===C.CURRENT_DAY?X.formInfo.insuranceEndDate=`${e(X.formInfo.insuranceStartDate).add(Number(r),o).subtract(1,"day").format("YYYY-MM-DD")} 23:59:59`:X.formInfo.insuranceEndDate=`${x(X.formInfo.insuranceStartDate,Number(r),o)} 00:00:00`;else{let e=X.formInfo.tenantOrderInsuredList[0].birthday;X.formInfo.tenantOrderInsuredList[0].certType===i.CERT&&X.formInfo.tenantOrderInsuredList[0].certNo&&s(X.formInfo.tenantOrderInsuredList[0].certNo)&&(e=c(X.formInfo.tenantOrderInsuredList[0].certNo));const n=`${T(e,1,"day")} 00:00:00`;"single"===r&&(X.formInfo.insuranceEndDate="9999-99-99 23:59:59"),`${W.value}`===C.CURRENT_DAY?X.formInfo.insuranceEndDate=`${x(n,Number(r),o)} 23:59:59`:X.formInfo.insuranceEndDate=`${x(e,Number(r),o)} 00:00:00`}}),{immediate:!0,deep:!0}),b({}),(e,n)=>{const a=V,o=S,r=g,t=w,l=h;return u(),d(I,null,[m("div",U,[f(K).length>1?(u(),d("div",P,[_,m("div",R,[p(a,{modelValue:f(X).formInfo.coveragePeriod,"onUpdate:modelValue":n[0]||(n[0]=e=>f(X).formInfo.coveragePeriod=e),prop:{label:"value",value:"code"},options:f(K)},null,8,["modelValue","options"])])])):v("",!0),f(Q)+""===f($).CUSTOM_DAY?(u(),d("div",{key:1,class:"period-custom-cell period-common-cell",onClick:ne},[f(J)?(u(),d(I,{key:0},[F,m("div",q,[m("span",null,D(f(X).formInfo.insuranceStartDate?f(O)(f(X).formInfo.insuranceStartDate,"YYYY.MM.DD HH:mm:ss"):""),1),p(o,{class:"custom--arrow-right",name:"arrow-right"})])],64)):(u(),d(I,{key:1},[A,m("div",j,[m("span",null,D(f(X).formInfo.insuranceStartDate?f(O)(f(X).formInfo.insuranceStartDate,"YYYY.MM.DD"):"")+"-"+D(f(X).formInfo.insuranceEndDate?f(O)(f(X).formInfo.insuranceEndDate,"YYYY.MM.DD"):""),1)])],64))])):v("",!0),f(Q)+""!==f($).CUSTOM_DAY?(u(),d("div",H,[z,m("div",B,D(f(X).formInfo.insuranceStartDate?f(O)(f(X).formInfo.insuranceStartDate,"YYYY.MM.DD"):"")+"-"+D(f(X).formInfo.insuranceEndDate?f(O)(f(X).formInfo.insuranceEndDate,"YYYY.MM.DD"):""),1)])):v("",!0)]),p(l,{show:f(Z),"onUpdate:show":n[3]||(n[3]=e=>k(Z)?Z.value=e:null),height:340,closeable:!0},{default:y((()=>[p(t,{modelValue:f(N),"onUpdate:modelValue":n[2]||(n[2]=e=>k(N)?N.value=e:null),type:"date",title:"保险开始生效日期","min-date":f(ae),"max-date":f(oe),formatter:M,"visible-item-count":5,class:"custom-date-picker",onConfirm:re,onCancel:te},{cancel:y((()=>[])),title:y((()=>[G])),confirm:y((()=>[p(r,{type:"primary",round:"",block:"",class:"linear-btn custom-picker-btn",onClick:n[1]||(n[1]=e=>Z.value=!1)},{default:y((()=>[Y("确 定")])),_:1})])),_:1},8,["modelValue","min-date","max-date"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-1de4c6a6"]]);const K=e=>(L("data-v-58cbb30d"),e=e(),E(),e),Q={class:"com-payment-type"},W={class:"title"},Z={key:0,class:"custom-cell check-btn-cell"},ee=K((()=>m("div",{class:"cell-label"},"保障方案",-1))),ne={class:"cell-content"},ae={key:1,class:"custom-cell check-btn-cell"},oe=K((()=>m("div",{class:"cell-label"},"交费方式",-1))),re={class:"cell-content"},te={key:2,class:"custom-cell check-btn-cell"},le=K((()=>m("div",{class:"cell-label"},"交费期间",-1))),ie={class:"cell-content"},se={key:3,class:"custom-cell common-cell"},ce=K((()=>m("div",{class:"cell-label"},"实付保费",-1))),ue={key:0,class:"cell-content actual-premium"},de={class:"cell-content actual-premium"},me={key:0,class:"actual-premium actual-premium-month-tip"},fe=n({name:"paymentType"});var pe=b(n({...fe,props:{formInfo:{default:()=>({})},riskInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},planList:{default:()=>[]}},setup(e){const n=e;a({});const l=o({formInfo:n.formInfo}),i=a(),s=a(),c=a([]),y=a([]),k=t((()=>{var e;return!!(null==(e=n.planList)?void 0:e.length)})),Y=t((()=>{var e,a;if(null==(e=n.premiumInfo)?void 0:e.premiumLoadingText)return n.premiumInfo.premiumLoadingText;if(n.tenantProductDetail.length){const e=((null==n?void 0:n.tenantProductDetail)||[]).find((e=>e.planCode===l.formInfo.planCode||!e.planCode))||{},{premium:o,minActualUnit:r}=(e.data||[]).find((e=>e.paymentFrequency===l.formInfo.paymentFrequency))||{};return(null==(a=n.premiumInfo)?void 0:a.premium)?`${n.premiumInfo.premium||""}${r}`:o}return""})),b=t((()=>{if(s){const{premiumExplain:e,premiumExplainViewName:n,premiumExplainUri:a}=s.value||{};return{premiumExplain:e,premiumExplainUri:a,premiumExplainViewName:n}}return null}));t((()=>b.value&&b.value.premiumExplain&&b.value.premiumExplainViewName));const S=t((()=>{var e;if(i.value&&i.value.paymentFrequency){return((null==(e=i.value.paymentFrequency)?void 0:e.split(","))||[]).length>1}return!1}));return r((()=>n.riskInfo),(()=>{var e,a;const{productRiskInsureLimitVO:o}=n.riskInfo||{};if(o){const{paymentFrequencyList:n=[],paymentPeriodValueList:r}=o||{};l.formInfo.paymentFrequency=null==(e=null==n?void 0:n[0])?void 0:e.code,l.formInfo.chargePeriod=null==(a=null==r?void 0:r[0])?void 0:a.code,c.value=r,y.value=n}}),{deep:!0,immediate:!0}),(e,a)=>{var o;const r=V,t=M;return u(),d(I,null,[m("div",Q,[m("div",W,D(f(S)?"交费方式":"保障计划"),1),f(k)?(u(),d("div",Z,[ee,m("div",ne,[p(r,{modelValue:f(l).formInfo.planCode,"onUpdate:modelValue":a[0]||(a[0]=e=>f(l).formInfo.planCode=e),options:e.planList,prop:{value:"planCode",label:"planName"}},null,8,["modelValue","options"])])])):v("",!0),f(y).length>1?(u(),d("div",ae,[oe,m("div",re,[p(r,{modelValue:f(l).formInfo.paymentFrequency,"onUpdate:modelValue":a[1]||(a[1]=e=>f(l).formInfo.paymentFrequency=e),prop:{label:"value",value:"code"},options:f(y)},null,8,["modelValue","options"])])])):v("",!0),f(c).length>1?(u(),d("div",te,[le,m("div",ie,[p(r,{modelValue:f(l).formInfo.chargePeriod,"onUpdate:modelValue":a[2]||(a[2]=e=>f(l).formInfo.chargePeriod=e),prop:{label:"value",value:"code"},options:f(c)},null,8,["modelValue","options"])])])):v("",!0),p(J,{"form-info":f(l).formInfo,"risk-info":e.riskInfo},null,8,["form-info","risk-info"]),f(Y)?(u(),d("div",se,[ce,(null==(o=n.premiumInfo)?void 0:o.premiumLoadingText)?(u(),d("div",ue,D(f(Y)),1)):(u(),d(I,{key:1},[m("div",de,D(f(Y)),1),"5"===f(l).formInfo.paymentFrequency?(u(),d("div",me," 共12期 ")):v("",!0)],64))])):v("",!0)]),p(t)],64)}}}),[["__scopeId","data-v-58cbb30d"]]);export{pe as default};
