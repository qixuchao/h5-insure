import{d as e,L as a,a1 as t,c as s,A as i,i as l,g as n,r as o,R as r,w as d,U as u,V as c,e as p,ag as v,f as m,j as f,E as k,as as h,at as V,h as y,a2 as O,G as L,ae as g,B as b,au as I,av as C,al as R,am as S,u as x,a as P,z as w,o as D,F as T,k as _,n as F,aw as E,T as j,$ as A,ax as M,ak as K,C as N,P as q,p as B}from"./index-a6d2417f.js";import{l as U,P as $}from"./index-4ac17a9c.js";import"./infoCollection-501575a5.js";import{I as z,P as W}from"./index-c9396101.js";import{_ as H,f as G}from"./utils-ee477f02.js";import{g as J,P as Q,d as X}from"./utils-bf3a4bda.js";import{P as Y}from"./index-4cdfc0a2.js";import{S as Z,_ as ee}from"./box-title-21a69675.js";import{_ as ae}from"./index-0761af4c.js";import{T as te}from"./Table-f5dac2ad.js";import{u as se,b as ie,p as le,q as ne,a as oe}from"./trial-c2b3eb15.js";import{u as re}from"./useOrder-7527003c.js";import{t as de}from"./utils-e4ae1cd8.js";import{P as ue,B as ce}from"./constants-7afb7c3d.js";import{n as pe}from"./nextStep-078c297d.js";const ve={class:"benefit-table"},me=e({name:"benefitTable"}),fe=e({...me,props:{dataSource:null},setup(e){const o=e,r=a((()=>{const e=o.dataSource.headers.length,a=12*o.dataSource.headers.join("").length+20*o.dataSource.headers.length;return o.dataSource.headers.map(((t,s)=>{const i=a>320?12*t.length+20:Math.max(12*t.length+20,320/e);return console.log("totalWordWidth:",a,"titleWidth:",i,"word-width:",12*t.length+20),{title:t,key:`header_${s}`,fixed:s<2,minWidth:i}}))})),d=a((()=>o.dataSource.dataList.map((e=>{const a={};return e.forEach(((e,t)=>{a[`header_${t}`]=e})),a}))));return t((()=>{})),(e,a)=>(s(),i("div",ve,[l(te,{"top-height":400,columns:n(r),data:n(d),"is-clone":!0},null,8,["columns","data"])]))}});const ke=e=>(R("data-v-414a32d4"),e=e(),S(),e),he={key:0,class:"benefit-container"},Ve={key:0,class:"benefit"},ye=ke((()=>m("div",{class:"line"},null,-1))),Oe={class:"box-title box-title-chart"},Le=ke((()=>m("img",{class:"tl",src:ee,alt:""},null,-1))),ge=ke((()=>m("img",{class:"transform-z180 tr",src:ee,alt:""},null,-1))),be={key:0},Ie={class:"box"},Ce={class:"box-title"},Re=ke((()=>m("img",{class:"tl",src:ee,alt:""},null,-1))),Se=ke((()=>m("img",{class:"transform-z180 tr",src:ee,alt:""},null,-1))),xe={class:"box-price"},Pe={class:"text1"},we={class:"text2"},De={key:1},Te={key:2,style:{width:"100%, minWidth: 338px"}},_e={class:"slider"},Fe={style:{flex:"1",margin:"0px 5px"}},Ee={class:"custom-button"},je=ke((()=>m("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Ae={class:"btn-two"},Me={key:1,class:"benefit-container"},Ke={key:0},Ne={class:"benefit"},qe=ke((()=>m("div",{class:"line"},null,-1))),Be=ke((()=>m("div",null,[m("div",{class:"box"},[m("p",{class:"box-title"},[m("img",{class:"tl",src:ee,alt:""}),f(" 保单年度"),m("span",null,"-"),f("年度，被保人"),m("span",null,"-"),f("岁时 "),m("img",{class:"transform-z180 tr",src:ee,alt:""})]),m("div",{class:"box-price"})])],-1))),Ue={class:"slider"},$e={class:"opt lf"},ze={style:{flex:"1",margin:"0px 5px"}},We=ke((()=>m("div",{class:"custom-button"},"0 岁",-1))),He={class:"opt rg"},Ge=ke((()=>m("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Je={class:"btn-two"},Qe={key:1,class:"empty-box"},Xe=e({name:"benefit"});var Ye=L(e({...Xe,props:{dataSource:{default:()=>({showTypeList:["1"]})},productInfo:{default:()=>null}},setup(e){var a;const t=e,L="1",R="2",S="3",x=o(0),P=o(0),w=o(0),D=o(),T=o(0),_=o(null==(a=t.dataSource.showTypeList)?void 0:a[0]),F=o(),E=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=null==e?void 0:e.benefitRiskResultVOList[x.value];P.value=a.ageBegin+1,T.value=a.ageBegin+1,w.value=a.ageEnd},j=()=>{var e,a,s,i,l,n;const o=null==(a=null==(e=t.dataSource)?void 0:e.benefitRiskResultVOList)?void 0:a[x.value];F.value=null==(l=null==(i=null==(s=t.dataSource)?void 0:s.benefitRiskResultVOList)?void 0:i[x.value].benefitRiskTableResultVOList)?void 0:l[0];const{a:r,year:d}=((e,a)=>{const t=[],s=[];for(let i=e,l=0;i<=a;i++,l++)t.push(i.toString()),s.push(l+1);return{a:t,year:s}})(P.value,w.value),u={index:r.indexOf(T.value.toString()),age:r,year:d,result:null==(n=null==o?void 0:o.benefitRiskItemResultVOList)?void 0:n[0]};D.value=u},A=()=>{T.value>w.value-1||(T.value+=1,j())},M=()=>{T.value>P.value&&(T.value-=1,j())},K=e=>{x.value=e.name,E(t.dataSource),j()};return r((()=>t.dataSource),(e=>{var a;e&&(E(e),j(),_.value=null==(a=e.showTypeList)?void 0:a[0])}),{deep:!0,immediate:!0}),r(T,(()=>{j()})),(a,o)=>{var r;const E=g,j=Z,N=b,q=I,B=C,U=Y;return(null==(r=e.dataSource)?void 0:r.benefitRiskResultVOList)?(s(),i("div",he,[l(B,{active:n(x),onClickTab:K},{default:d((()=>{var e;return[(s(!0),i(u,null,c(null==(e=t.dataSource)?void 0:e.benefitRiskResultVOList,((e,a)=>(s(),p(q,{key:a,name:a,title:e.riskName},{default:d((()=>{var e,r,g,b,I,C,K,q,B,U,$,z,W,H,G,J;return[a==n(x)?(s(),i("div",Ve,[ye,v(m("p",Oe,[Le,f(" 保单年度"),m("span",null,k(null==(g=null==(e=n(D))?void 0:e.year)?void 0:g[null==(r=n(D))?void 0:r.index]),1),f("年度，被保人"),m("span",null,k(null==(C=null==(b=n(D))?void 0:b.age)?void 0:C[null==(I=n(D))?void 0:I.index]),1),f("岁时 "),ge],512),[[h,n(_)===R]]),n(_)===L?(s(),i("div",be,[m("div",Ie,[m("p",Ce,[Re,f(" 保单年度"),m("span",null,k(null==(B=null==(K=n(D))?void 0:K.year)?void 0:B[null==(q=n(D))?void 0:q.index]),1),f("年度，被保人"),m("span",null,k(null==(z=null==(U=n(D))?void 0:U.age)?void 0:z[null==($=n(D))?void 0:$.index]),1),f("岁时 "),Se]),m("div",xe,[(s(!0),i(u,null,c(null==(H=null==(W=n(D))?void 0:W.result)?void 0:H.headers,((e,a)=>{var t,l,o,r,d,u,c,p,v,f;return s(),i("div",{key:a,style:{width:"33%"}},[m("p",Pe,k(("0"==(null==(d=null==(r=null==(l=null==(t=n(D))?void 0:t.result)?void 0:l.dataList)?void 0:r[null==(o=n(D))?void 0:o.index])?void 0:d[a])?"0":n(V)(Number(null==(f=null==(v=null==(c=null==(u=n(D))?void 0:u.result)?void 0:c.dataList)?void 0:v[null==(p=n(D))?void 0:p.index])?void 0:f[a])))||"0"),1),m("p",we,k(e)+"(元）",1)])})),128))])])])):y("",!0),n(_)===S?(s(),i("div",De,[l(fe,{"data-source":n(F)},null,8,["data-source"])])):y("",!0),n(_)==R?(s(),i("div",Te,[l(ae,{min:n(P),max:n(w),current:n(T),data:null==(J=null==(G=n(D))?void 0:G.result)?void 0:J.benefitRiskItemList},null,8,["min","max","current","data"])])):y("",!0),n(_)!=S?(s(),i(u,{key:3},[m("div",_e,[m("div",{class:"opt lf",onClick:M},[l(E,{name:"minus"})]),m("div",Fe,[n(P)?(s(),p(j,{key:0,modelValue:n(T),"onUpdate:modelValue":o[0]||(o[0]=e=>O(T)?T.value=e:null),min:n(P),max:n(w),"bar-height":"8px"},{button:d((()=>[m("div",Ee,k(n(T))+" 岁",1)])),_:1},8,["modelValue","min","max"])):y("",!0)]),m("div",{class:"opt rg",onClick:A},[l(E,{name:"plus"})])]),je],64)):y("",!0),m("div",Ae,[t.dataSource.showTypeList.includes(L)?(s(),p(N,{key:0,round:"",plain:n(_)!==L,type:"primary",class:"btn",onClick:o[1]||(o[1]=e=>_.value=L)},{default:d((()=>[f("图表展示")])),_:1},8,["plain"])):y("",!0),t.dataSource.showTypeList.includes(R)?(s(),p(N,{key:1,round:"",plain:n(_)!==R,type:"primary",class:"btn",onClick:o[2]||(o[2]=e=>_.value=R)},{default:d((()=>[f("趋势展示")])),_:1},8,["plain"])):y("",!0),t.dataSource.showTypeList.includes(S)?(s(),p(N,{key:2,round:"",plain:n(_)!==S,type:"primary",class:"btn",onClick:o[3]||(o[3]=e=>_.value=S)},{default:d((()=>[f("表格展示")])),_:1},8,["plain"])):y("",!0)])])):y("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])):(s(),i("div",Me,[t.productInfo?(s(),i("div",Ke,[l(B,{active:n(x),onClickTab:K},{default:d((()=>[(s(),p(q,{key:1,name:1,title:e.productInfo.insureProductRiskVOList[0].riskName},{default:d((()=>[m("div",Ne,[qe,Be,m("div",Ue,[m("div",$e,[l(E,{name:"minus"})]),m("div",ze,[l(j,{modelValue:n(T),"onUpdate:modelValue":o[4]||(o[4]=e=>O(T)?T.value=e:null),min:0,max:80,"bar-height":"8px",disabled:""},{button:d((()=>[We])),_:1},8,["modelValue"])]),m("div",He,[l(E,{name:"plus"})])]),Ge,m("div",Je,[l(N,{round:"",plain:!0,type:"primary",class:"btn",disabled:""},{default:d((()=>[f("图表展示")])),_:1}),l(N,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:d((()=>[f("趋势展示")])),_:1}),l(N,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:d((()=>[f("表格展示")])),_:1})])])])),_:1},8,["title"]))])),_:1},8,["active"])])):(s(),i("div",Qe,[l(U,{title:"试算结果正在计算中...","empty-class":"empty-select"})]))]))}}}),[["__scopeId","data-v-414a32d4"]]);const Ze={key:0,class:"head-warning-wrap"},ea=m("div",{class:"warning-icon"},[m("span",null,"!")],-1),aa={class:"warning-text"},ta=e({__name:"index",props:{labels:{default:()=>[]}},setup:e=>(a,t)=>e.labels?(s(),i("div",Ze,[ea,m("div",aa,[(s(!0),i(u,null,c(e.labels,(e=>(s(),i("span",{key:e},k(e),1)))),128))])])):y("",!0)});const sa={class:"com-body"},ia={class:"header"},la={class:"header-title"},na={class:"container"},oa=(e=>(R("data-v-7880c4b2"),e=e(),S(),e))((()=>m("div",{class:"empty"},null,-1))),ra=e({name:"TrialPop"});var da=L(e({...ra,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:""})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null}},setup(e,{expose:a}){const c=e,v=o(null),h=x();P();const{tenantId:V,templateId:O,preview:L}=h.query,g=w({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResult:0,isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),b=re(),I=o(),C=o(),R=(e={},a={},t={})=>{var s;const i={...t},{tenantOrderHolder:l,tenantOrderInsuredList:n}=G({holder:null==(s=g.submitData.holder)?void 0:s.personVO,insuredList:(g.submitData.insuredVOList||[]).map((e=>e.personVO))}),o=g.submitData.insuredVOList.map((e=>{var a,t;return null==(t=null==(a=e.productPlanVOList)?void 0:a[0])?void 0:t.riskVOList})).flat(),r={tenantId:V,riskList:o,riskPremium:a,productId:e.id};return i.extInfo.iseeBizNo=I.value,i.productCode=e.productCode,i.commencementTime=i.insuranceStartDate,i.expiryDate=i.insuranceEndDate,i.premium=g.trialResult,i.orderAmount=g.trialResult,i.orderRealAmount=g.trialResult,i.tenantOrderHolder=l,i.tenantOrderInsuredList=n.map((a=>({...a,certType:a.certType||N.CERT,certNo:(a.certNo||"").toLocaleUpperCase(),planCode:c.dataSource.planCode,tenantOrderProductList:[{premium:g.trialResult,productCode:e.productCode,productName:e.productName,planCode:c.dataSource.planCode,tenantOrderRiskList:de(r)}]}))),console.log("nextStepParams",i),i},S=o(),Y=()=>{var e;L?F(ue.TRIAL_PREMIUM,h.query):g.trialResult&&(null==(e=v.value)||e.validate().then((()=>{Object.assign(b.value,{extInfo:{...b.value.extInfo,buttonCode:ce.TRIAL_PREMIUM,pageCode:ue.TRIAL_PREMIUM,templateId:O}});const e=R(c.productInfo,S.value,b.value);pe(e,((e,a)=>{a===q.JUMP_PAGE&&B(e.nextPageCode,{...h.query,orderNo:e.orderNo})})),console.log("---- validate success ----")})),g.loading=!1,g.show=!0,g.isAniShow=!0)},Z=e=>{var a;g.trialResult&&(null==(a=v.value)||a.validate().then((()=>{Object.assign(b.value,{extInfo:{...b.value.extInfo,buttonCode:ce.TRIAL_PREMIUM,pageCode:ue.TRIAL_PREMIUM,templateId:O}});const a=R(c.productInfo,S.value,b.value);pe(a,((a,t)=>{t===q.JUMP_PAGE&&(C.value.link=`${window.location.href}&isShare=1&orderNo=${a.orderNo}`,e())})),console.log("---- validate success ----")})))},ee=()=>{g.show=!1,g.loading=!1},ae=o({}),te=["annuityDrawDate","coveragePeriod","chargePeriod"],ve=()=>{var e,a;g.riskIsInsure={},null==(a=null==(e=null==c?void 0:c.dataSource)?void 0:e.insureProductRiskVOList)||a.forEach((e=>{var a;const t=null==(a=c.dataSource.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId));t&&(g.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:t})}))},me=e=>{var a,t,s,i,l,n;if(null==(t=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:t.productRiskDyInsureFactorVOList){const a=[];if(null==(s=c.dataSource)||s.insureProductRiskVOList.forEach((t=>{var s,i;const l=null==(i=null==(s=null==e?void 0:e.data)?void 0:s[0])?void 0:i.productRiskDyInsureFactorVOList.find((e=>e.riskCode===t.riskCode));if(l){t.productRiskInsureLimitVO={...t.productRiskInsureLimitVO,...l};const e=g.riskVOList.find((e=>e.riskCode===t.riskCode));let s=!1;W.forEach((a=>{if(te.indexOf(a.valueKey)>=0){const i=t.productRiskInsureLimitVO[a.configKey];if(i&&e){const t=i.find((t=>t.code===e[a.valueKey]));if(t&&2===t.useFlag){const t=i.find((e=>1===e.defaultFlag));e[a.valueKey]=t.code,s=!0}}}})),s&&a.push({...e,...l,riskCode:t.riskCode})}})),a.length>0&&(null==(n=null==(l=null==(i=g.defaultValue)?void 0:i.insuredVOList)?void 0:l[0])?void 0:n.productPlanVOList))return a.forEach((e=>{var a,t,s;g.defaultValue.insuredVOList[0].productPlanVOList=null==(s=null==(t=null==(a=g.defaultValue)?void 0:a.insuredVOList)?void 0:t[0])?void 0:s.productPlanVOList.map((a=>(a.riskVOList=null==a?void 0:a.riskVOList.map((a=>(a.riskCode===e.riskCode&&(a=e),a))),a)))})),!1}return!0},fe=async(e,a=!0)=>{g.trialMsg="试算中...",g.trialResult=0,g.loading=!0;let t=!1;if(a){const{code:a}=await se(e);t="10000"===a}!t&&a||(c.hideBenefit||ie(e).then((e=>{e.data&&e.code===E&&(ae.value=e.data)})).finally((()=>{g.loading=!1})),le(e).then((e=>{var a,t;if(e.data&&e.code===E){(null==(a=null==e?void 0:e.data)?void 0:a.errorInfo)&&j(`${null==(t=null==e?void 0:e.data)?void 0:t.errorInfo}`),g.trialMsg="",g.trialResult=e.data.premium;const s={};e.data.riskPremiumDetailVOList&&e.data.riskPremiumDetailVOList.length&&e.data.riskPremiumDetailVOList.forEach((e=>{s[e.riskCode]={premium:e.premium,amount:e.amount}})),S.value=s}})).finally((()=>{g.loading=!1})))},ke=U.exports.debounce((async()=>{if(console.log(">>>>>调用试算<<<<<"),g.ifPersonalInfoSuccess){if(g.submitData.productCode=c.productInfo.productCode,g.submitData.tenantId=c.productInfo.tenantId,g.riskVOList=g.riskVOList.map((e=>(e=>{var a,t,s,i;const l=null==(a=c.dataSource.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(l&&1!==l.mainRiskFlag){const a=null==(s=null==(t=c.dataSource)?void 0:t.productRiskRelationVOList)?void 0:s.find((e=>e.collocationRiskId===l.riskId));if(a){const t=null==(i=g.riskVOList)?void 0:i.find((e=>e.riskId===a.riskId));W.forEach((a=>{a.ruleKey&&l.productRiskInsureLimitVO&&t&&(1===l.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=t[a.valueKey]),3===l.productRiskInsureLimitVO[a.ruleKey]&&(1!==l.exemptFlag?e[a.valueKey]=X(l,t[a.valueKey],g.submitData):e[a.valueKey]=X(l,t[a.ruleValueKey],g.submitData)))}))}}return e})(e))),g.submitData.insuredVOList&&g.submitData.insuredVOList.forEach((e=>{e.productPlanVOList=[{insurerCode:c.productInfo.insurerCode,planCode:c.dataSource.planCode,riskVOList:g.riskVOList}]})),g.isSkipFirstTrial&&!g.hadSkipFirstTrial)return void(g.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",g.submitData);const e=U.exports.cloneDeep(g.submitData);await fe(e)}}),300),he=async e=>{var a;const{holder:t,insuredVOList:s,isFirstInsuredChange:i}=e;if(t&&(g.submitData.holder=t),s&&s.length>0&&s.forEach(((e,a)=>{var t;g.submitData.insuredVOList&&g.submitData.insuredVOList.length>a?g.submitData.insuredVOList[a].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:((null==(t=g.submitData)?void 0:t.insuredVOList)||(g.submitData.insuredVOList=[]),g.submitData.insuredVOList.push({personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}))})),g.ifPersonalInfoSuccess=!0,i){console.log("处理第一被保人修改的dy变化");const e=await ne({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=c.dataSource.insureProductRiskVOList)?void 0:a[0]}]}],...s[0].personVO});if(!me(e))return}console.log("投被保人的信息回传 ",g.submitData,e),ke()},Ve=async(e,a)=>{var t,s,i,l;if(a){const n=U.exports.cloneDeep(e);delete n.insurancePeriodValueList,delete n.paymentFrequencyList,delete n.paymentPeriodValueList;if(te.indexOf(a.key)>=0){const o={};switch(a.key){case"annuityDrawDate":o.changeType=3;break;case"coveragePeriod":o.changeType=2;break;case"chargePeriod":o.changeType=1}const r=null==(s=null==(t=g.submitData)?void 0:t.insuredVOList)?void 0:s[0].personVO,d=null==(l=null==(i=c.dataSource)?void 0:i.insureProductRiskVOList)?void 0:l.find((a=>a.riskCode===e.riskCode));if(!g.isAutoChange){const a=await ne({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:d,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...n,...o}}]}],...r}),t=me(a);return t||(g.isAutoChange=!0),t}g.isAutoChange=!1}}return!0},ye=async(e,a)=>{g.mainRiskVO=e;await Ve(e,a)&&(g.riskVOList.length>0&&(g.riskVOList[0]=e),console.log("标准险种的信息回传",e),ke())},Oe=async(e,a)=>{if(g.riskVOList=[g.mainRiskVO,...e],console.log("附加险列表数据回传",e),a){const t=e.find((e=>e.riskCode===a.riskCode));if(!(await Ve(t,a)))return}ke()},Le=()=>{g.isAniShow=!1},ge=e=>{g.userData=e,g.defaultValue=e;const a=e.insuredVOList[0].productPlanVOList.findIndex((e=>e.planCode===c.dataSource.planCode));g.planIndex=-1===a?0:a,fe(e,!0)};D((()=>{ve()})),t((()=>{g.loading=!0})),r((()=>g.show),(e=>{e&&(g.select={},g.list=[],g.userData={},g.riskIsInsure={},g.submitData={},g.riskVOList=[{}],g.mainRiskVO={},g.ifPersonalInfoSuccess=!1,g.trialMsg="",g.trialResult=0,ve())}));const be=()=>{g.show=!0,g.isAniShow=!0,g.isSkipFirstTrial=!0,g.hadSkipFirstTrial=!1,A((()=>{(async e=>{if(c.defaultData)ge(c.defaultData.find((e=>e.productCode===c.productInfo.productCode)));else{const e=await oe({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode}]});e.data&&ge(e.data.find((e=>e.productCode===c.productInfo.productCode)))}})()}))};return a({open:be,close:ee,getTrialSuccessFlag:()=>g.trialResult>0}),r((()=>g.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),r((()=>c.shareInfo),(()=>{C.value=c.shareInfo}),{deep:!0,immediate:!0}),(a,t)=>{const o=M,r=K;return s(),i(u,null,[e.hidePopupButton?y("",!0):(s(),i("div",{key:0,class:T(`trial-button ${a.$attrs.class}`)},[l(H,{"is-share":C.value.isShare,premium:n(g).trialResult,"share-info":C.value,"loading-text":n(g).trialMsg,"plan-code":c.dataSource.planCode,"payment-frequency":n(g).mainRiskVO.paymentFrequency+"","tenant-product-detail":e.tenantProductDetail,onHandleClick:be},{default:d((()=>[f("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])],2)),n(g).isAniShow||n(g).show?(s(),p(r,{key:1,class:T(`com-trial-wrap ${a.$attrs.class}`),show:n(g).show,closeable:!1,onClose:ee,onClosed:Le},{default:d((()=>{var i,r,u,h,V,O;return[m("div",sa,[m("div",ia,[m("span",la,k(e.title),1),l(o,{name:"cross",onClick:t[0]||(t[0]=e=>n(g).show=!1)})]),l(ta,{labels:n(J)(e.dataSource.insureProductRiskVOList,e.dataSource.productRiskRelationVOList)},null,8,["labels"]),m("div",na,[e.hideBenefit?y("",!0):(s(),p(Ye,{key:0,class:"benefit-wrap","data-source":ae.value,"product-info":e.dataSource,"show-type-list":ae.value.showTypList},null,8,["data-source","product-info","show-type-list"])),e.dataSource.productFactor?(s(),p(n($),{key:1,ref:"personalInfoRef",modelValue:n(g).userData,"onUpdate:modelValue":t[1]||(t[1]=e=>n(g).userData=e),"is-trial":"","product-factor":e.dataSource.productFactor,"multi-insured-config":null==(i=e.dataSource)?void 0:i.multiInsuredConfigVO,onTrailChange:he},null,8,["modelValue","product-factor","multi-insured-config"])):y("",!0),l(z,{ref_key:"insureInfosRef",ref:v,"origin-data":null==(r=e.dataSource.insureProductRiskVOList)?void 0:r[0],"product-factor":e.dataSource.productFactor,"default-value":n(g).defaultValue?null==(h=null==(u=n(g).defaultValue)?void 0:u.insuredVOList[0].productPlanVOList[n(g).planIndex])?void 0:h.riskVOList[0]:null,onTrialChange:ye},null,8,["origin-data","product-factor","default-value"]),l(Q,{"data-source":e.dataSource,"show-main-risk":!1,"default-value":n(g).defaultValue?null==(O=null==(V=n(g).defaultValue)?void 0:V.insuredVOList[0].productPlanVOList[n(g).planIndex])?void 0:O.riskVOList:[],onTrialChange:Oe},null,8,["data-source","default-value"]),oa]),_(a.$slots,"default",{trialData:n(g).submitData,riskPremium:S.value},(()=>[l(H,{"is-share":C.value.isShare,premium:n(g).trialResult,"share-info":C.value,"loading-text":n(g).trialMsg,"plan-code":c.dataSource.planCode,"payment-frequency":n(g).mainRiskVO.paymentFrequency+"","tenant-product-detail":e.tenantProductDetail,"handle-share":Z,onHandleClick:Y},{default:d((()=>[f("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])]),!0)])]})),_:3},8,["class","show"])):y("",!0)],64)}}}),[["__scopeId","data-v-7880c4b2"]]);export{da as T};
