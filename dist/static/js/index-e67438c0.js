import{b9 as e,d as n,j as a,r as o,E as r,k as t,cd as s,ah as i,dP as l,b6 as c,o as u,c as d,a as f,u as m,b as D,f as I,F as p,e as v,w as Y,q as b,v as y,_ as k,bA as S,b2 as w,b3 as M,dQ as $,au as V,bo as g,bp as E}from"./index-ce7a290e.js";import{I as L,d as O}from"./infoCollection-faf37129.js";const T=(n,a="YYYY-MM-DD")=>e(n).format(a),_=(n,a=0,o="day",r="YYYY-MM-DD")=>e(n).add(a,o).format(r),C=(n,a=0,o="day",r="YYYY-MM-DD")=>e(n).subtract(a,o).format(r);const N=e=>(g("data-v-1bfc5590"),e=e(),E(),e),h={class:"com-period-cell"},R={key:0,class:"period-custom-cell period-check-btn-cell"},P=N((()=>f("div",{class:"period-cell-label"},"保障期间",-1))),U={class:"period-cell-content"},A=N((()=>f("div",{class:"period-cell-label"},"生效日期",-1))),x={class:"period-cell-content period-custom-cell-content"},j=N((()=>f("div",{class:"period-cell-label"},"保障期限",-1))),q={class:"period-cell-content period-custom-cell-content"},F={key:2,class:"period-custom-cell period-common-cell"},H=N((()=>f("div",{class:"period-cell-label"},"保障期限",-1))),Q={class:"period-cell-content"},X=N((()=>f("div",{class:"picker-custom-title"},"保险开始生效日期",-1))),z=n({name:"insurancePeriodCell"});var B=k(n({...z,props:{formInfo:{default:()=>({})},riskInfo:{default:()=>({})}},emits:["onReset","onUpdate","onVerify"],setup(n,{expose:k,emit:g}){const E=n;a({});const N=(e,n)=>"year"===e?`${n}年`:"month"===e?`${n}月`:"day"===e?`${n}日`:n,z=a(new Date),B=o({formInfo:E.formInfo}),G=a(!0);a([]),r((()=>B.formInfo.insuranceStartDate),(e=>{e&&"string"==typeof e&&(z.value=new Date(e))}));const J=t((()=>{var e;const{insurancePeriodValueList:n=[]}=(null==(e=E.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n.length?(B.formInfo.coveragePeriod||(B.formInfo.coveragePeriod=n[0].code),n):[]})),K=t((()=>{var e;const{insuranceStartType:n}=(null==(e=E.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n||1})),W=t((()=>{var e;const{insuranceEndType:n}=(null==(e=E.riskInfo)?void 0:e.productRiskInsureLimitVO)||{};return n||1})),[Z,ee]=s(!1),ne=()=>{G.value&&ee(!0)},ae=t((()=>{var e,n;if(`${K.value}`===L.CUSTOM_DAY){const a=null==(n=null==(e=E.riskInfo)?void 0:e.productRiskInsureLimitVO)?void 0:n.insuranceStartTime;if(a&&a.indexOf(",")){const[e,n]=a.split(",");return new Date(_(new Date,Number(e),"day"))}}return new Date(_(new Date,1,"day"))})),oe=t((()=>{var e,n;if(`${K.value}`===L.CUSTOM_DAY){const a=null==(n=null==(e=E.riskInfo)?void 0:e.productRiskInsureLimitVO)?void 0:n.insuranceStartTime;if(!a)return new Date;if(a.indexOf(",")){const[e,n]=a.split(",");return new Date(_(new Date,Number(n),"day"))}const o=_(new Date,Number(a),"day");return new Date(o)}return new Date})),re=e=>{B.formInfo.insuranceStartDate=`${T(e)} 00:00:00`,ee(!1)},te=()=>{ee(!1)};return r((()=>E.riskInfo),(()=>{const{productRiskInsureLimitVO:e}=E.riskInfo||{};if(e){const{insurancePeriodValueList:n,paymentFrequencyList:a=[]}=e||{};J.value=n}}),{deep:!0,immediate:!0}),r([()=>K.value,()=>B.formInfo.coveragePeriod,()=>B.formInfo.insuranceStartDate,()=>E.riskInfo],(()=>{var n,a,o,r;if(!B.formInfo.coveragePeriod)return;const[t,s]=B.formInfo.coveragePeriod.split("_");if(`${K.value}`===L.CUSTOM_DAY){const e=null==(a=null==(n=E.riskInfo)?void 0:n.productRiskInsureLimitVO)?void 0:a.insuranceStartTime;if(e)if(e.indexOf(",")){const[n,a]=e.split(",");B.formInfo.insuranceStartDate=`${_(new Date,Number(n),"day")} 00:00:00`,console.log("start",n,a),G.value=n!==a}else B.formInfo.insuranceStartDate=`${_(new Date,e,"day")} 00:00:00`;else B.formInfo.insuranceStartDate=`${_(new Date,1,"day")} 00:00:00`}else`${K.value}`===L.NEXT_DAY?B.formInfo.insuranceStartDate=`${_(new Date,1,"day")} 00:00:00`:B.formInfo.insuranceStartDate=`${T(new Date)} 00:00:00`;if("to"!==t)C(B.formInfo.insuranceStartDate,1,"day"),`${W.value}`===O.CURRENT_DAY?B.formInfo.insuranceEndDate=`${e(B.formInfo.insuranceStartDate).add(Number(s),t).subtract(1,"day").format("YYYY-MM-DD")} 23:59:59`:B.formInfo.insuranceEndDate=`${_(B.formInfo.insuranceStartDate,Number(s),t)} 00:00:00`;else{let e=null==(r=null==(o=B.formInfo.insuredList)?void 0:o[0])?void 0:r.birthday;B.formInfo.insuredList[0].certType===i.CERT&&B.formInfo.insuredList[0].certNo&&l(B.formInfo.insuredList[0].certNo)&&(e=c(B.formInfo.insuredList[0].certNo));const n=`${C(e,1,"day")} 00:00:00`;"single"===s&&(B.formInfo.insuranceEndDate="9999-99-99 23:59:59"),`${W.value}`===O.CURRENT_DAY?B.formInfo.insuranceEndDate=`${_(n,Number(s),t)} 23:59:59`:B.formInfo.insuranceEndDate=`${_(e,Number(s),t)} 00:00:00`}}),{immediate:!0,deep:!0}),k({}),(e,n)=>{const a=S,o=w,r=M,t=$,s=V;return u(),d(p,null,[f("div",h,[m(J).length>1?(u(),d("div",R,[P,f("div",U,[D(a,{modelValue:m(B).formInfo.coveragePeriod,"onUpdate:modelValue":n[0]||(n[0]=e=>m(B).formInfo.coveragePeriod=e),prop:{label:"value",value:"code"},options:m(J)},null,8,["modelValue","options"])])])):I("",!0),m(K)+""===m(L).CUSTOM_DAY?(u(),d("div",{key:1,class:"period-custom-cell period-common-cell",onClick:ne},[m(G)?(u(),d(p,{key:0},[A,f("div",x,[f("span",null,v(m(B).formInfo.insuranceStartDate?m(T)(m(B).formInfo.insuranceStartDate,"YYYY.MM.DD HH:mm:ss"):""),1),D(o,{class:"custom--arrow-right",name:"arrow-right"})])],64)):(u(),d(p,{key:1},[j,f("div",q,[f("span",null,v(m(B).formInfo.insuranceStartDate?m(T)(m(B).formInfo.insuranceStartDate,"YYYY.MM.DD"):"")+"-"+v(m(B).formInfo.insuranceEndDate?m(T)(m(B).formInfo.insuranceEndDate,"YYYY.MM.DD"):""),1)])],64))])):I("",!0),m(K)+""!==m(L).CUSTOM_DAY?(u(),d("div",F,[H,f("div",Q,v(m(B).formInfo.insuranceStartDate?m(T)(m(B).formInfo.insuranceStartDate,"YYYY.MM.DD"):"")+"-"+v(m(B).formInfo.insuranceEndDate?m(T)(m(B).formInfo.insuranceEndDate,"YYYY.MM.DD"):""),1)])):I("",!0)]),D(s,{show:m(Z),"onUpdate:show":n[3]||(n[3]=e=>b(Z)?Z.value=e:null),height:340,closeable:!0},{default:Y((()=>[D(t,{modelValue:m(z),"onUpdate:modelValue":n[2]||(n[2]=e=>b(z)?z.value=e:null),type:"date",title:"保险开始生效日期","min-date":m(ae),"max-date":m(oe),formatter:N,"visible-item-count":5,class:"custom-date-picker",onConfirm:re,onCancel:te},{cancel:Y((()=>[])),title:Y((()=>[X])),confirm:Y((()=>[D(r,{type:"primary",round:"",block:"",class:"linear-btn custom-picker-btn",onClick:n[1]||(n[1]=e=>Z.value=!1)},{default:Y((()=>[y("确 定")])),_:1})])),_:1},8,["modelValue","min-date","max-date"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-1bfc5590"]]);export{B as I};
