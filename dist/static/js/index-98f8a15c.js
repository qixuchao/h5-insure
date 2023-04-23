import{d as e,L as a,a1 as t,c as i,A as s,i as l,g as o,r as n,R as r,w as d,U as u,V as c,e as p,ag as v,f,j as m,E as k,as as h,at as V,h as y,a2 as O,G as L,ae as g,B as b,au as I,av as C,al as R,am as x,u as S,a as P,z as D,o as w,F as T,k as _,n as F,aw as E,T as j,$ as A,ax as M,ak as K,C as N,P as q,p as B}from"./index-f73a594c.js";import{l as U,P as $}from"./index-f1656b5c.js";import"./infoCollection-62d290b9.js";import{I as z,P as W}from"./index-d189e191.js";import{_ as H,f as G}from"./utils-10239a55.js";import{P as J,d as Q}from"./utils-5b9c966b.js";import{P as X}from"./index-3923887f.js";import{S as Y,_ as Z}from"./box-title-adb42154.js";import{_ as ee}from"./index-0c3eb91e.js";import{T as ae}from"./Table-955f65ad.js";import{u as te,b as ie,p as se,q as le,a as oe}from"./trial-c2a7aa30.js";import{u as ne}from"./useOrder-36cb0192.js";import{t as re}from"./utils-44cf23a0.js";import{P as de,B as ue}from"./constants-7afb7c3d.js";import{n as ce}from"./nextStep-8a10ee33.js";const pe={class:"benefit-table"},ve=e({name:"benefitTable"}),fe=e({...ve,props:{dataSource:null},setup(e){const n=e,r=a((()=>{const e=n.dataSource.headers.length,a=12*n.dataSource.headers.join("").length+20*n.dataSource.headers.length;return n.dataSource.headers.map(((t,i)=>{const s=a>320?12*t.length+20:Math.max(12*t.length+20,320/e);return console.log("totalWordWidth:",a,"titleWidth:",s,"word-width:",12*t.length+20),{title:t,key:`header_${i}`,fixed:i<2,minWidth:s}}))})),d=a((()=>n.dataSource.dataList.map((e=>{const a={};return e.forEach(((e,t)=>{a[`header_${t}`]=e})),a}))));return t((()=>{})),(e,a)=>(i(),s("div",pe,[l(ae,{"top-height":400,columns:o(r),data:o(d),"is-clone":!0},null,8,["columns","data"])]))}});const me=e=>(R("data-v-6c054f41"),e=e(),x(),e),ke={key:0,class:"benefit-container"},he={key:0,class:"benefit"},Ve=me((()=>f("div",{class:"line"},null,-1))),ye={class:"box-title box-title-chart"},Oe=me((()=>f("img",{class:"tl",src:Z,alt:""},null,-1))),Le=me((()=>f("img",{class:"transform-z180 tr",src:Z,alt:""},null,-1))),ge={key:0},be={class:"box"},Ie={class:"box-title"},Ce=me((()=>f("img",{class:"tl",src:Z,alt:""},null,-1))),Re=me((()=>f("img",{class:"transform-z180 tr",src:Z,alt:""},null,-1))),xe={class:"box-price"},Se={class:"text1"},Pe={class:"text2"},De={key:1},we={key:2,style:{width:"100%, minWidth: 338px"}},Te={class:"slider"},_e={style:{flex:"1",margin:"0px 5px"}},Fe={class:"custom-button"},Ee=me((()=>f("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),je={class:"btn-two"},Ae={key:1,class:"benefit-container"},Me={key:0},Ke={class:"benefit"},Ne=me((()=>f("div",{class:"line"},null,-1))),qe=me((()=>f("div",null,[f("div",{class:"box"},[f("p",{class:"box-title"},[f("img",{class:"tl",src:Z,alt:""}),m(" 保单年度"),f("span",null,"-"),m("年度，被保人"),f("span",null,"-"),m("岁时 "),f("img",{class:"transform-z180 tr",src:Z,alt:""})]),f("div",{class:"box-price"})])],-1))),Be={class:"slider"},Ue={class:"opt lf"},$e={style:{flex:"1",margin:"0px 5px"}},ze=me((()=>f("div",{class:"custom-button"},"0 岁",-1))),We={class:"opt rg"},He=me((()=>f("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Ge={class:"btn-two"},Je={key:1,class:"empty-box"},Qe=e({name:"benefit"});var Xe=L(e({...Qe,props:{dataSource:{default:()=>({showTypeList:["1"]})},productInfo:{default:()=>null}},setup(e){var a;const t=e,L="1",R="2",x="3",S=n(0),P=n(0),D=n(0),w=n(),T=n(0),_=n(null==(a=t.dataSource.showTypeList)?void 0:a[0]),F=n(),E=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=null==e?void 0:e.benefitRiskResultVOList[S.value];P.value=a.ageBegin+1,T.value=a.ageBegin+1,D.value=a.ageEnd},j=()=>{var e,a,i,s,l,o;const n=null==(a=null==(e=t.dataSource)?void 0:e.benefitRiskResultVOList)?void 0:a[S.value];F.value=null==(l=null==(s=null==(i=t.dataSource)?void 0:i.benefitRiskResultVOList)?void 0:s[S.value].benefitRiskTableResultVOList)?void 0:l[0];const{a:r,year:d}=((e,a)=>{const t=[],i=[];for(let s=e,l=0;s<=a;s++,l++)t.push(s.toString()),i.push(l+1);return{a:t,year:i}})(P.value,D.value),u={index:r.indexOf(T.value.toString()),age:r,year:d,result:null==(o=null==n?void 0:n.benefitRiskItemResultVOList)?void 0:o[0]};w.value=u},A=()=>{T.value>D.value-1||(T.value+=1,j())},M=()=>{T.value>P.value&&(T.value-=1,j())},K=e=>{S.value=e.name,E(t.dataSource),j()};return r((()=>t.dataSource),(e=>{var a;e&&(E(e),j(),_.value=null==(a=e.showTypeList)?void 0:a[0])}),{deep:!0,immediate:!0}),r(T,(()=>{j()})),(a,n)=>{var r;const E=g,j=Y,N=b,q=I,B=C,U=X;return(null==(r=e.dataSource)?void 0:r.benefitRiskResultVOList)?(i(),s("div",ke,[l(B,{active:o(S),onClickTab:K},{default:d((()=>{var e;return[(i(!0),s(u,null,c(null==(e=t.dataSource)?void 0:e.benefitRiskResultVOList,((e,a)=>(i(),p(q,{key:a,name:a,title:e.riskName},{default:d((()=>{var e,r,g,b,I,C,K,q,B,U,$,z,W,H,G,J;return[a==o(S)?(i(),s("div",he,[Ve,v(f("p",ye,[Oe,m(" 保单年度"),f("span",null,k(null==(g=null==(e=o(w))?void 0:e.year)?void 0:g[null==(r=o(w))?void 0:r.index]),1),m("年度，被保人"),f("span",null,k(null==(C=null==(b=o(w))?void 0:b.age)?void 0:C[null==(I=o(w))?void 0:I.index]),1),m("岁时 "),Le],512),[[h,o(_)===R]]),o(_)===L?(i(),s("div",ge,[f("div",be,[f("p",Ie,[Ce,m(" 保单年度"),f("span",null,k(null==(B=null==(K=o(w))?void 0:K.year)?void 0:B[null==(q=o(w))?void 0:q.index]),1),m("年度，被保人"),f("span",null,k(null==(z=null==(U=o(w))?void 0:U.age)?void 0:z[null==($=o(w))?void 0:$.index]),1),m("岁时 "),Re]),f("div",xe,[(i(!0),s(u,null,c(null==(H=null==(W=o(w))?void 0:W.result)?void 0:H.headers,((e,a)=>{var t,l,n,r,d,u,c,p,v,m;return i(),s("div",{key:a,style:{width:"33%"}},[f("p",Se,k("0"==(null==(d=null==(r=null==(l=null==(t=o(w))?void 0:t.result)?void 0:l.dataList)?void 0:r[null==(n=o(w))?void 0:n.index])?void 0:d[a])?"0":o(V)(Number(null==(m=null==(v=null==(c=null==(u=o(w))?void 0:u.result)?void 0:c.dataList)?void 0:v[null==(p=o(w))?void 0:p.index])?void 0:m[a]))),1),f("p",Pe,k(e)+"(元）",1)])})),128))])])])):y("",!0),o(_)===x?(i(),s("div",De,[l(fe,{"data-source":o(F)},null,8,["data-source"])])):y("",!0),o(_)==R?(i(),s("div",we,[l(ee,{min:o(P),max:o(D),current:o(T),data:null==(J=null==(G=o(w))?void 0:G.result)?void 0:J.benefitRiskItemList},null,8,["min","max","current","data"])])):y("",!0),o(_)!=x?(i(),s(u,{key:3},[f("div",Te,[f("div",{class:"opt lf",onClick:M},[l(E,{name:"minus"})]),f("div",_e,[o(P)?(i(),p(j,{key:0,modelValue:o(T),"onUpdate:modelValue":n[0]||(n[0]=e=>O(T)?T.value=e:null),min:o(P),max:o(D),"bar-height":"8px"},{button:d((()=>[f("div",Fe,k(o(T))+" 岁",1)])),_:1},8,["modelValue","min","max"])):y("",!0)]),f("div",{class:"opt rg",onClick:A},[l(E,{name:"plus"})])]),Ee],64)):y("",!0),f("div",je,[t.dataSource.showTypeList.includes(L)?(i(),p(N,{key:0,round:"",plain:o(_)!==L,type:"primary",class:"btn",onClick:n[1]||(n[1]=e=>_.value=L)},{default:d((()=>[m("图表展示")])),_:1},8,["plain"])):y("",!0),t.dataSource.showTypeList.includes(R)?(i(),p(N,{key:1,round:"",plain:o(_)!==R,type:"primary",class:"btn",onClick:n[2]||(n[2]=e=>_.value=R)},{default:d((()=>[m("趋势展示")])),_:1},8,["plain"])):y("",!0),t.dataSource.showTypeList.includes(x)?(i(),p(N,{key:2,round:"",plain:o(_)!==x,type:"primary",class:"btn",onClick:n[3]||(n[3]=e=>_.value=x)},{default:d((()=>[m("表格展示")])),_:1},8,["plain"])):y("",!0)])])):y("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])):(i(),s("div",Ae,[t.productInfo?(i(),s("div",Me,[l(B,{active:o(S),onClickTab:K},{default:d((()=>[(i(),p(q,{key:1,name:1,title:e.productInfo.insureProductRiskVOList[0].riskName},{default:d((()=>[f("div",Ke,[Ne,qe,f("div",Be,[f("div",Ue,[l(E,{name:"minus"})]),f("div",$e,[l(j,{modelValue:o(T),"onUpdate:modelValue":n[4]||(n[4]=e=>O(T)?T.value=e:null),min:0,max:80,"bar-height":"8px",disabled:""},{button:d((()=>[ze])),_:1},8,["modelValue"])]),f("div",We,[l(E,{name:"plus"})])]),He,f("div",Ge,[l(N,{round:"",plain:!0,type:"primary",class:"btn",disabled:""},{default:d((()=>[m("图表展示")])),_:1}),l(N,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:d((()=>[m("趋势展示")])),_:1}),l(N,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:d((()=>[m("表格展示")])),_:1})])])])),_:1},8,["title"]))])),_:1},8,["active"])])):(i(),s("div",Je,[l(U,{title:"试算结果正在计算中...","empty-class":"empty-select"})]))]))}}}),[["__scopeId","data-v-6c054f41"]]);const Ye={class:"com-body"},Ze={class:"header"},ea={class:"header-title"},aa={class:"container"},ta=(e=>(R("data-v-190c359f"),e=e(),x(),e))((()=>f("div",{class:"empty"},null,-1))),ia=e({name:"TrialPop"});var sa=L(e({...ia,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:""})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null}},setup(e,{expose:a}){const c=e,v=n(null),h=S();P();const{tenantId:V,templateId:O,preview:L}=h.query,g=D({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResult:0,isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),b=ne(),I=n(),C=n(),R=(e={},a={},t={})=>{var i;const s={...t},{tenantOrderHolder:l,tenantOrderInsuredList:o}=G({holder:null==(i=g.submitData.holder)?void 0:i.personVO,insuredList:(g.submitData.insuredVOList||[]).map((e=>e.personVO))}),n=g.submitData.insuredVOList.map((e=>{var a,t;return null==(t=null==(a=e.productPlanVOList)?void 0:a[0])?void 0:t.riskVOList})).flat(),r={tenantId:V,riskList:n,riskPremium:a,productId:e.id};return s.extInfo.iseeBizNo=I.value,s.productCode=e.productCode,s.commencementTime=s.insuranceStartDate,s.expiryDate=s.insuranceEndDate,s.premium=g.trialResult,s.orderAmount=g.trialResult,s.orderRealAmount=g.trialResult,s.tenantOrderHolder=l,s.tenantOrderInsuredList=o.map((a=>({...a,certType:a.certType||N.CERT,certNo:(a.certNo||"").toLocaleUpperCase(),planCode:c.dataSource.planCode,tenantOrderProductList:[{premium:g.trialResult,productCode:e.productCode,productName:e.productName,planCode:c.dataSource.planCode,tenantOrderRiskList:re(r)}]}))),console.log("nextStepParams",s),s},x=n(),X=()=>{var e;L?F(de.TRIAL_PREMIUM,h.query):g.trialResult&&(null==(e=v.value)||e.validate().then((()=>{Object.assign(b.value,{extInfo:{...b.value.extInfo,buttonCode:ue.TRIAL_PREMIUM,pageCode:de.TRIAL_PREMIUM,templateId:O}});const e=R(c.productInfo,x.value,b.value);ce(e,((e,a)=>{a===q.JUMP_PAGE&&B(e.nextPageCode,{...h.query,orderNo:e.orderNo})})),console.log("---- validate success ----")})),g.loading=!1,g.show=!0,g.isAniShow=!0)},Y=e=>{var a;g.trialResult&&(null==(a=v.value)||a.validate().then((()=>{Object.assign(b.value,{extInfo:{...b.value.extInfo,buttonCode:ue.TRIAL_PREMIUM,pageCode:de.TRIAL_PREMIUM,templateId:O}});const a=R(c.productInfo,x.value,b.value);ce(a,((a,t)=>{t===q.JUMP_PAGE&&(C.value.link=`${window.location.href}&isShare=1&orderNo=${a.orderNo}`,e())})),console.log("---- validate success ----")})))},Z=()=>{g.show=!1,g.loading=!1},ee=n({}),ae=["annuityDrawDate","coveragePeriod","chargePeriod"],pe=()=>{var e,a;g.riskIsInsure={},null==(a=null==(e=null==c?void 0:c.dataSource)?void 0:e.insureProductRiskVOList)||a.forEach((e=>{var a;const t=null==(a=c.dataSource.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId));t&&(g.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:t})}))},ve=e=>{var a,t,i,s,l,o;if(null==(t=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:t.productRiskDyInsureFactorVOList){const a=[];if(null==(i=c.dataSource)||i.insureProductRiskVOList.forEach((t=>{var i,s;const l=null==(s=null==(i=null==e?void 0:e.data)?void 0:i[0])?void 0:s.productRiskDyInsureFactorVOList.find((e=>e.riskCode===t.riskCode));if(l){t.productRiskInsureLimitVO={...t.productRiskInsureLimitVO,...l};const e=g.riskVOList.find((e=>e.riskCode===t.riskCode));let i=!1;W.forEach((a=>{if(ae.indexOf(a.valueKey)>=0){const s=t.productRiskInsureLimitVO[a.configKey];if(s&&e){const t=s.find((t=>t.code===e[a.valueKey]));if(t&&2===t.useFlag){const t=s.find((e=>1===e.defaultFlag));e[a.valueKey]=t.code,i=!0}}}})),i&&a.push({...e,...l,riskCode:t.riskCode})}})),a.length>0&&(null==(o=null==(l=null==(s=g.defaultValue)?void 0:s.insuredVOList)?void 0:l[0])?void 0:o.productPlanVOList))return a.forEach((e=>{var a,t,i;g.defaultValue.insuredVOList[0].productPlanVOList=null==(i=null==(t=null==(a=g.defaultValue)?void 0:a.insuredVOList)?void 0:t[0])?void 0:i.productPlanVOList.map((a=>(a.riskVOList=null==a?void 0:a.riskVOList.map((a=>(a.riskCode===e.riskCode&&(a=e),a))),a)))})),!1}return!0},fe=async(e,a=!0)=>{g.trialMsg="试算中...",g.trialResult=0,g.loading=!0;let t=!1;if(a){const{code:a}=await te(e);t="10000"===a}!t&&a||(c.hideBenefit||ie(e).then((e=>{e.data&&e.code===E&&(ee.value=e.data)})).finally((()=>{g.loading=!1})),se(e).then((e=>{var a,t;if(e.data&&e.code===E){(null==(a=null==e?void 0:e.data)?void 0:a.errorInfo)&&j(`${null==(t=null==e?void 0:e.data)?void 0:t.errorInfo}`),g.trialMsg="",g.trialResult=e.data.premium;const i={};e.data.riskPremiumDetailVOList&&e.data.riskPremiumDetailVOList.length&&e.data.riskPremiumDetailVOList.forEach((e=>{i[e.riskCode]={premium:e.premium,amount:e.amount}})),x.value=i}})).finally((()=>{g.loading=!1})))},me=U.exports.debounce((async()=>{if(console.log(">>>>>调用试算<<<<<"),g.ifPersonalInfoSuccess){if(g.submitData.productCode=c.productInfo.productCode,g.submitData.tenantId=c.productInfo.tenantId,g.riskVOList=g.riskVOList.map((e=>(e=>{var a,t,i,s;const l=null==(a=c.dataSource.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(l&&1!==l.mainRiskFlag){const a=null==(i=null==(t=c.dataSource)?void 0:t.productRiskRelationVOList)?void 0:i.find((e=>e.collocationRiskId===l.riskId));if(a){const t=null==(s=g.riskVOList)?void 0:s.find((e=>e.riskId===a.riskId));W.forEach((a=>{a.ruleKey&&l.productRiskInsureLimitVO&&t&&(1===l.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=t[a.valueKey]),3===l.productRiskInsureLimitVO[a.ruleKey]&&(1!==l.exemptFlag?e[a.valueKey]=Q(l,t[a.valueKey],g.submitData):e[a.valueKey]=Q(l,t[a.ruleValueKey],g.submitData)))}))}}return e})(e))),g.submitData.insuredVOList&&g.submitData.insuredVOList.forEach((e=>{e.productPlanVOList=[{insurerCode:c.productInfo.insurerCode,planCode:c.dataSource.planCode,riskVOList:g.riskVOList}]})),g.isSkipFirstTrial&&!g.hadSkipFirstTrial)return void(g.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",g.submitData);const e=U.exports.cloneDeep(g.submitData);await fe(e)}}),300),ke=async e=>{var a;const{holder:t,insuredVOList:i,isFirstInsuredChange:s}=e;if(t&&(g.submitData.holder=t),i&&i.length>0&&i.forEach(((e,a)=>{var t;g.submitData.insuredVOList&&g.submitData.insuredVOList.length>a?g.submitData.insuredVOList[a].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:((null==(t=g.submitData)?void 0:t.insuredVOList)||(g.submitData.insuredVOList=[]),g.submitData.insuredVOList.push({personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}))})),g.ifPersonalInfoSuccess=!0,s){console.log("处理第一被保人修改的dy变化");const e=await le({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=c.dataSource.insureProductRiskVOList)?void 0:a[0]}]}],...i[0].personVO});if(!ve(e))return}console.log("投被保人的信息回传 ",g.submitData,e),me()},he=async(e,a)=>{var t,i,s,l;if(a){const o=U.exports.cloneDeep(e);delete o.insurancePeriodValueList,delete o.paymentFrequencyList,delete o.paymentPeriodValueList;if(ae.indexOf(a.key)>=0){const n={};switch(a.key){case"annuityDrawDate":n.changeType=3;break;case"coveragePeriod":n.changeType=2;break;case"chargePeriod":n.changeType=1}const r=null==(i=null==(t=g.submitData)?void 0:t.insuredVOList)?void 0:i[0].personVO,d=null==(l=null==(s=c.dataSource)?void 0:s.insureProductRiskVOList)?void 0:l.find((a=>a.riskCode===e.riskCode));if(!g.isAutoChange){const a=await le({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:d,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...o,...n}}]}],...r}),t=ve(a);return t||(g.isAutoChange=!0),t}g.isAutoChange=!1}}return!0},Ve=async(e,a)=>{g.mainRiskVO=e;await he(e,a)&&(g.riskVOList.length>0&&(g.riskVOList[0]=e),console.log("标准险种的信息回传",e),me())},ye=async(e,a)=>{if(g.riskVOList=[g.mainRiskVO,...e],console.log("附加险列表数据回传",e),a){const t=e.find((e=>e.riskCode===a.riskCode));if(!(await he(t,a)))return}me()},Oe=()=>{g.isAniShow=!1},Le=e=>{g.userData=e,g.defaultValue=e;const a=e.insuredVOList[0].productPlanVOList.findIndex((e=>e.planCode===c.dataSource.planCode));g.planIndex=-1===a?0:a,fe(e,!0)};w((()=>{pe()})),t((()=>{g.loading=!0})),r((()=>g.show),(e=>{e&&(g.select={},g.list=[],g.userData={},g.riskIsInsure={},g.submitData={},g.riskVOList=[{}],g.mainRiskVO={},g.ifPersonalInfoSuccess=!1,g.trialMsg="",g.trialResult=0,pe())}));const ge=()=>{g.show=!0,g.isAniShow=!0,g.isSkipFirstTrial=!0,g.hadSkipFirstTrial=!1,A((()=>{(async e=>{if(c.defaultData)Le(c.defaultData.find((e=>e.productCode===c.productInfo.productCode)));else{const e=await oe({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode}]});e.data&&Le(e.data.find((e=>e.productCode===c.productInfo.productCode)))}})()}))};return a({open:ge,close:Z}),r((()=>g.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),r((()=>c.shareInfo),(()=>{C.value=c.shareInfo}),{deep:!0,immediate:!0}),(a,t)=>{const n=M,r=K;return i(),s(u,null,[e.hidePopupButton?y("",!0):(i(),s("div",{key:0,class:T(`trial-button ${a.$attrs.class}`)},[l(H,{"is-share":C.value.isShare,premium:o(g).trialResult,"share-info":C.value,"loading-text":o(g).trialMsg,"plan-code":c.dataSource.planCode,"payment-frequency":o(g).mainRiskVO.paymentFrequency+"","tenant-product-detail":e.tenantProductDetail,onHandleClick:ge},{default:d((()=>[m("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])],2)),o(g).isAniShow||o(g).show?(i(),p(r,{key:1,class:T(`com-trial-wrap ${a.$attrs.class}`),show:o(g).show,closeable:!1,onClose:Z,onClosed:Oe},{default:d((()=>{var s,r,u,h,V,O;return[f("div",Ye,[f("div",Ze,[f("span",ea,k(e.title),1),l(n,{name:"cross",onClick:t[0]||(t[0]=e=>o(g).show=!1)})]),f("div",aa,[e.hideBenefit?y("",!0):(i(),p(Xe,{key:0,class:"benefit-wrap","data-source":ee.value,"product-info":e.dataSource,"show-type-list":ee.value.showTypList},null,8,["data-source","product-info","show-type-list"])),e.dataSource.productFactor?(i(),p(o($),{key:1,ref:"personalInfoRef",modelValue:o(g).userData,"onUpdate:modelValue":t[1]||(t[1]=e=>o(g).userData=e),"is-trial":"","product-factor":e.dataSource.productFactor,"multi-insured-config":null==(s=e.dataSource)?void 0:s.multiInsuredConfigVO,onTrailChange:ke},null,8,["modelValue","product-factor","multi-insured-config"])):y("",!0),l(z,{ref_key:"insureInfosRef",ref:v,"origin-data":null==(r=e.dataSource.insureProductRiskVOList)?void 0:r[0],"product-factor":e.dataSource.productFactor,"default-value":o(g).defaultValue?null==(h=null==(u=o(g).defaultValue)?void 0:u.insuredVOList[0].productPlanVOList[o(g).planIndex])?void 0:h.riskVOList[0]:null,onTrialChange:Ve},null,8,["origin-data","product-factor","default-value"]),l(J,{"data-source":e.dataSource,"show-main-risk":!1,"default-value":o(g).defaultValue?null==(O=null==(V=o(g).defaultValue)?void 0:V.insuredVOList[0].productPlanVOList[o(g).planIndex])?void 0:O.riskVOList:[],onTrialChange:ye},null,8,["data-source","default-value"]),ta]),_(a.$slots,"default",{trialData:o(g).submitData,riskPremium:x.value},(()=>[l(H,{"is-share":C.value.isShare,premium:o(g).trialResult,"share-info":C.value,"loading-text":o(g).trialMsg,"plan-code":c.dataSource.planCode,"payment-frequency":o(g).mainRiskVO.paymentFrequency+"","tenant-product-detail":e.tenantProductDetail,"handle-share":Y,onHandleClick:X},{default:d((()=>[m("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])]),!0)])]})),_:3},8,["class","show"])):y("",!0)],64)}}}),[["__scopeId","data-v-190c359f"]]);export{sa as T};
