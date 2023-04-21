import{d as e,K as a,a0 as t,c as s,y as i,i as l,g as o,r as n,Q as r,w as d,R as u,U as c,e as p,ab as v,f as m,j as f,z as k,an as h,ao as y,h as V,a1 as O,E as L,a9 as g,B as b,ap as I,aq as C,ag as R,ah as x,u as S,a as P,x as D,o as w,A as T,k as _,ar as F,T as E,as as j,af as A,C as M,P as K}from"./index-127f38a4.js";import{l as N,P as q}from"./index-5852fc12.js";import"./infoCollection-92fc4178.js";import{I as B,P as U}from"./index-7737712f.js";import{_ as $,f as z}from"./utils-a49784cf.js";import{P as H,d as W}from"./utils-890536ee.js";import{P as J}from"./index-e379c0d3.js";import{S as G,_ as Q}from"./box-title-2835151d.js";import{_ as X}from"./index-7da9e213.js";import{T as Y}from"./Table-9df9592b.js";import{u as Z,b as ee,p as ae,q as te,a as se}from"./trial-e03e0eba.js";import{u as ie}from"./useOrder-b7ef3482.js";import{t as le}from"./utils-902e06d3.js";import{B as oe,P as ne}from"./constants-7afb7c3d.js";import{n as re}from"./nextStep-c28f079b.js";import{p as de}from"./pageJump-7b41827a.js";const ue={class:"benefit-table"},ce=e({name:"benefitTable"}),pe=e({...ce,props:{dataSource:null},setup(e){const n=e,r=a((()=>{const e=n.dataSource.headers.length,a=12*n.dataSource.headers.join("").length+20*n.dataSource.headers.length;return n.dataSource.headers.map(((t,s)=>{const i=a>320?12*t.length+20:Math.max(12*t.length+20,320/e);return console.log("totalWordWidth:",a,"titleWidth:",i,"word-width:",12*t.length+20),{title:t,key:`header_${s}`,fixed:s<2,minWidth:i}}))})),d=a((()=>n.dataSource.dataList.map((e=>{const a={};return e.forEach(((e,t)=>{a[`header_${t}`]=e})),a}))));return t((()=>{})),(e,a)=>(s(),i("div",ue,[l(Y,{"top-height":400,columns:o(r),data:o(d),"is-clone":!0},null,8,["columns","data"])]))}});const ve=e=>(R("data-v-6c054f41"),e=e(),x(),e),me={key:0,class:"benefit-container"},fe={key:0,class:"benefit"},ke=ve((()=>m("div",{class:"line"},null,-1))),he={class:"box-title box-title-chart"},ye=ve((()=>m("img",{class:"tl",src:Q,alt:""},null,-1))),Ve=ve((()=>m("img",{class:"transform-z180 tr",src:Q,alt:""},null,-1))),Oe={key:0},Le={class:"box"},ge={class:"box-title"},be=ve((()=>m("img",{class:"tl",src:Q,alt:""},null,-1))),Ie=ve((()=>m("img",{class:"transform-z180 tr",src:Q,alt:""},null,-1))),Ce={class:"box-price"},Re={class:"text1"},xe={class:"text2"},Se={key:1},Pe={key:2,style:{width:"100%, minWidth: 338px"}},De={class:"slider"},we={style:{flex:"1",margin:"0px 5px"}},Te={class:"custom-button"},_e=ve((()=>m("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Fe={class:"btn-two"},Ee={key:1,class:"benefit-container"},je={key:0},Ae={class:"benefit"},Me=ve((()=>m("div",{class:"line"},null,-1))),Ke=ve((()=>m("div",null,[m("div",{class:"box"},[m("p",{class:"box-title"},[m("img",{class:"tl",src:Q,alt:""}),f(" 保单年度"),m("span",null,"-"),f("年度，被保人"),m("span",null,"-"),f("岁时 "),m("img",{class:"transform-z180 tr",src:Q,alt:""})]),m("div",{class:"box-price"})])],-1))),Ne={class:"slider"},qe={class:"opt lf"},Be={style:{flex:"1",margin:"0px 5px"}},Ue=ve((()=>m("div",{class:"custom-button"},"0 岁",-1))),$e={class:"opt rg"},ze=ve((()=>m("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),He={class:"btn-two"},We={key:1,class:"empty-box"},Je=e({name:"benefit"});var Ge=L(e({...Je,props:{dataSource:{default:()=>({showTypeList:["1"]})},productInfo:{default:()=>null}},setup(e){var a;const t=e,L="1",R="2",x="3",S=n(0),P=n(0),D=n(0),w=n(),T=n(0),_=n(null==(a=t.dataSource.showTypeList)?void 0:a[0]),F=n(),E=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=null==e?void 0:e.benefitRiskResultVOList[S.value];P.value=a.ageBegin+1,T.value=a.ageBegin+1,D.value=a.ageEnd},j=()=>{var e,a,s,i,l,o;const n=null==(a=null==(e=t.dataSource)?void 0:e.benefitRiskResultVOList)?void 0:a[S.value];F.value=null==(l=null==(i=null==(s=t.dataSource)?void 0:s.benefitRiskResultVOList)?void 0:i[S.value].benefitRiskTableResultVOList)?void 0:l[0];const{a:r,year:d}=((e,a)=>{const t=[],s=[];for(let i=e,l=0;i<=a;i++,l++)t.push(i.toString()),s.push(l+1);return{a:t,year:s}})(P.value,D.value),u={index:r.indexOf(T.value.toString()),age:r,year:d,result:null==(o=null==n?void 0:n.benefitRiskItemResultVOList)?void 0:o[0]};w.value=u},A=()=>{T.value>D.value-1||(T.value+=1,j())},M=()=>{T.value>P.value&&(T.value-=1,j())},K=e=>{S.value=e.name,E(t.dataSource),j()};return r((()=>t.dataSource),(e=>{var a;e&&(E(e),j(),_.value=null==(a=e.showTypeList)?void 0:a[0])}),{deep:!0,immediate:!0}),r(T,(()=>{j()})),(a,n)=>{var r;const E=g,j=G,N=b,q=I,B=C,U=J;return(null==(r=e.dataSource)?void 0:r.benefitRiskResultVOList)?(s(),i("div",me,[l(B,{active:o(S),onClickTab:K},{default:d((()=>{var e;return[(s(!0),i(u,null,c(null==(e=t.dataSource)?void 0:e.benefitRiskResultVOList,((e,a)=>(s(),p(q,{key:a,name:a,title:e.riskName},{default:d((()=>{var e,r,g,b,I,C,K,q,B,U,$,z,H,W,J,G;return[a==o(S)?(s(),i("div",fe,[ke,v(m("p",he,[ye,f(" 保单年度"),m("span",null,k(null==(g=null==(e=o(w))?void 0:e.year)?void 0:g[null==(r=o(w))?void 0:r.index]),1),f("年度，被保人"),m("span",null,k(null==(C=null==(b=o(w))?void 0:b.age)?void 0:C[null==(I=o(w))?void 0:I.index]),1),f("岁时 "),Ve],512),[[h,o(_)===R]]),o(_)===L?(s(),i("div",Oe,[m("div",Le,[m("p",ge,[be,f(" 保单年度"),m("span",null,k(null==(B=null==(K=o(w))?void 0:K.year)?void 0:B[null==(q=o(w))?void 0:q.index]),1),f("年度，被保人"),m("span",null,k(null==(z=null==(U=o(w))?void 0:U.age)?void 0:z[null==($=o(w))?void 0:$.index]),1),f("岁时 "),Ie]),m("div",Ce,[(s(!0),i(u,null,c(null==(W=null==(H=o(w))?void 0:H.result)?void 0:W.headers,((e,a)=>{var t,l,n,r,d,u,c,p,v,f;return s(),i("div",{key:a,style:{width:"33%"}},[m("p",Re,k("0"==(null==(d=null==(r=null==(l=null==(t=o(w))?void 0:t.result)?void 0:l.dataList)?void 0:r[null==(n=o(w))?void 0:n.index])?void 0:d[a])?"0":o(y)(Number(null==(f=null==(v=null==(c=null==(u=o(w))?void 0:u.result)?void 0:c.dataList)?void 0:v[null==(p=o(w))?void 0:p.index])?void 0:f[a]))),1),m("p",xe,k(e)+"(元）",1)])})),128))])])])):V("",!0),o(_)===x?(s(),i("div",Se,[l(pe,{"data-source":o(F)},null,8,["data-source"])])):V("",!0),o(_)==R?(s(),i("div",Pe,[l(X,{min:o(P),max:o(D),current:o(T),data:null==(G=null==(J=o(w))?void 0:J.result)?void 0:G.benefitRiskItemList},null,8,["min","max","current","data"])])):V("",!0),o(_)!=x?(s(),i(u,{key:3},[m("div",De,[m("div",{class:"opt lf",onClick:M},[l(E,{name:"minus"})]),m("div",we,[o(P)?(s(),p(j,{key:0,modelValue:o(T),"onUpdate:modelValue":n[0]||(n[0]=e=>O(T)?T.value=e:null),min:o(P),max:o(D),"bar-height":"8px"},{button:d((()=>[m("div",Te,k(o(T))+" 岁",1)])),_:1},8,["modelValue","min","max"])):V("",!0)]),m("div",{class:"opt rg",onClick:A},[l(E,{name:"plus"})])]),_e],64)):V("",!0),m("div",Fe,[t.dataSource.showTypeList.includes(L)?(s(),p(N,{key:0,round:"",plain:o(_)!==L,type:"primary",class:"btn",onClick:n[1]||(n[1]=e=>_.value=L)},{default:d((()=>[f("图表展示")])),_:1},8,["plain"])):V("",!0),t.dataSource.showTypeList.includes(R)?(s(),p(N,{key:1,round:"",plain:o(_)!==R,type:"primary",class:"btn",onClick:n[2]||(n[2]=e=>_.value=R)},{default:d((()=>[f("趋势展示")])),_:1},8,["plain"])):V("",!0),t.dataSource.showTypeList.includes(x)?(s(),p(N,{key:2,round:"",plain:o(_)!==x,type:"primary",class:"btn",onClick:n[3]||(n[3]=e=>_.value=x)},{default:d((()=>[f("表格展示")])),_:1},8,["plain"])):V("",!0)])])):V("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])):(s(),i("div",Ee,[t.productInfo?(s(),i("div",je,[l(B,{active:o(S),onClickTab:K},{default:d((()=>[(s(),p(q,{key:1,name:1,title:e.productInfo.insureProductRiskVOList[0].riskName},{default:d((()=>[m("div",Ae,[Me,Ke,m("div",Ne,[m("div",qe,[l(E,{name:"minus"})]),m("div",Be,[l(j,{modelValue:o(T),"onUpdate:modelValue":n[4]||(n[4]=e=>O(T)?T.value=e:null),min:0,max:80,"bar-height":"8px",disabled:""},{button:d((()=>[Ue])),_:1},8,["modelValue"])]),m("div",$e,[l(E,{name:"plus"})])]),ze,m("div",He,[l(N,{round:"",plain:!0,type:"primary",class:"btn",disabled:""},{default:d((()=>[f("图表展示")])),_:1}),l(N,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:d((()=>[f("趋势展示")])),_:1}),l(N,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:d((()=>[f("表格展示")])),_:1})])])])),_:1},8,["title"]))])),_:1},8,["active"])])):(s(),i("div",We,[l(U,{title:"试算结果正在计算中...","empty-class":"empty-select"})]))]))}}}),[["__scopeId","data-v-6c054f41"]]);const Qe={class:"com-body"},Xe={class:"header"},Ye={class:"header-title"},Ze={class:"container"},ea=(e=>(R("data-v-2aaa0d5d"),e=e(),x(),e))((()=>m("div",{class:"empty"},null,-1))),aa=e({name:"TrialPop"});var ta=L(e({...aa,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:""})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null}},setup(e,{expose:a}){const c=e,v=n(null),h=S();P();const{tenantId:y,templateId:O}=h.query,L=D({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResult:0,isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),g=ie(),b=n(),I=n(),C=(e={},a={},t={})=>{var s;const i={...t},{tenantOrderHolder:l,tenantOrderInsuredList:o}=z({holder:null==(s=L.submitData.holder)?void 0:s.personVO,insuredList:(L.submitData.insuredVOList||[]).map((e=>e.personVO))});console.log("tenantOrderHolder",l),console.log("tenantOrderInsuredList",o);const n=L.submitData.insuredVOList.map((e=>{var a,t;return null==(t=null==(a=e.productPlanVOList)?void 0:a[0])?void 0:t.riskVOList})).flat();console.log("riskList",n);const r={tenantId:y,riskList:n,riskPremium:a,productId:e.id};return i.extInfo.iseeBizNo=b.value,i.productCode=e.productCode,i.commencementTime=i.insuranceStartDate,i.expiryDate=i.insuranceEndDate,i.premium=L.trialResult,i.orderAmount=L.trialResult,i.orderRealAmount=L.trialResult,i.tenantOrderHolder=l,i.tenantOrderInsuredList=o.map((a=>({...a,certType:a.certType||M.CERT,certNo:(a.certNo||"").toLocaleUpperCase(),planCode:c.dataSource.planCode,tenantOrderProductList:[{premium:L.trialResult,productCode:e.productCode,productName:e.productName,planCode:c.dataSource.planCode,tenantOrderRiskList:le(r)}]}))),console.log("nextStepParams",i),i},R=n(),x=()=>{var e;L.trialResult&&(null==(e=v.value)||e.validate().then((()=>{Object.assign(g.value,{extInfo:{...g.value.extInfo,buttonCode:oe.TRIAL_PREMIUM,pageCode:ne.TRIAL_PREMIUM,templateId:O}});const e=C(c.productInfo,R.value,g.value);re(e,((e,a)=>{a===K.JUMP_PAGE&&de(e.nextPageCode,{...h.query,orderNo:e.orderNo})})),console.log("---- validate success ----")})),L.loading=!1,L.show=!0,L.isAniShow=!0)},J=e=>{var a;L.trialResult&&(null==(a=v.value)||a.validate().then((()=>{Object.assign(g.value,{extInfo:{...g.value.extInfo,buttonCode:oe.TRIAL_PREMIUM,pageCode:ne.TRIAL_PREMIUM,templateId:O}});const a=C(c.productInfo,R.value,g.value);re(a,((a,t)=>{t===K.JUMP_PAGE&&(I.value.link=`${window.location.href}&isShare=1&orderNo=${a.orderNo}`,e())})),console.log("---- validate success ----")})))},G=()=>{L.show=!1,L.loading=!1},Q=n({}),X=["annuityDrawDate","coveragePeriod","chargePeriod"],Y=()=>{var e,a;L.riskIsInsure={},null==(a=null==(e=null==c?void 0:c.dataSource)?void 0:e.insureProductRiskVOList)||a.forEach((e=>{var a;const t=null==(a=c.dataSource.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId));t&&(L.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:t})}))},ue=e=>{var a,t,s,i,l,o;if(null==(t=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:t.productRiskDyInsureFactorVOList){const a=[];if(null==(s=c.dataSource)||s.insureProductRiskVOList.forEach((t=>{var s,i;const l=null==(i=null==(s=null==e?void 0:e.data)?void 0:s[0])?void 0:i.productRiskDyInsureFactorVOList.find((e=>e.riskCode===t.riskCode));if(l){t.productRiskInsureLimitVO={...t.productRiskInsureLimitVO,...l};const e=L.riskVOList.find((e=>e.riskCode===t.riskCode));let s=!1;U.forEach((a=>{if(X.indexOf(a.valueKey)>=0){const i=t.productRiskInsureLimitVO[a.configKey];if(i&&e){const t=i.find((t=>t.code===e[a.valueKey]));if(t&&2===t.useFlag){const t=i.find((e=>1===e.defaultFlag));e[a.valueKey]=t.code,s=!0}}}})),s&&a.push({...e,...l,riskCode:t.riskCode})}})),a.length>0&&(null==(o=null==(l=null==(i=L.defaultValue)?void 0:i.insuredVOList)?void 0:l[0])?void 0:o.productPlanVOList))return a.forEach((e=>{var a,t,s;L.defaultValue.insuredVOList[0].productPlanVOList=null==(s=null==(t=null==(a=L.defaultValue)?void 0:a.insuredVOList)?void 0:t[0])?void 0:s.productPlanVOList.map((a=>(a.riskCode===e.riskCode&&(a=e),a)))})),!1}return!0},ce=async(e,a=!0)=>{L.trialMsg="试算中...",L.trialResult=0,L.loading=!0;let t=!1;if(a){const{code:a}=await Z(e);t="10000"===a}!t&&a||(ee(e).then((e=>{e.data&&e.code===F&&(Q.value=e.data)})).finally((()=>{L.loading=!1})),ae(e).then((e=>{var a,t;if(e.data&&e.code===F){(null==(a=null==e?void 0:e.data)?void 0:a.errorInfo)&&E(`${null==(t=null==e?void 0:e.data)?void 0:t.errorInfo}`),L.trialMsg="",L.trialResult=e.data.premium;const s={};e.data.riskPremiumDetailVOList&&e.data.riskPremiumDetailVOList.length&&e.data.riskPremiumDetailVOList.forEach((e=>{s[e.riskCode]={premium:e.premium,amount:e.amount}})),R.value=s}})).finally((()=>{L.loading=!1})))},pe=N.exports.debounce((async()=>{if(console.log(">>>>>调用试算<<<<<"),L.ifPersonalInfoSuccess){if(L.submitData.productCode=c.productInfo.productCode,L.submitData.tenantId=c.productInfo.tenantId,L.riskVOList=L.riskVOList.map((e=>(e=>{var a,t,s,i;const l=null==(a=c.dataSource.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(l&&1!==l.mainRiskFlag){const a=null==(s=null==(t=c.dataSource)?void 0:t.productRiskRelationVOList)?void 0:s.find((e=>e.collocationRiskId===l.riskId));if(a){const t=null==(i=L.riskVOList)?void 0:i.find((e=>e.riskId===a.riskId));U.forEach((a=>{a.ruleKey&&l.productRiskInsureLimitVO&&t&&(1===l.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=t[a.valueKey]),3===l.productRiskInsureLimitVO[a.ruleKey]&&(1!==l.exemptFlag?e[a.valueKey]=W(l,t[a.valueKey],L.submitData):e[a.valueKey]=W(l,t[a.ruleValueKey],L.submitData)))}))}}return e})(e))),L.submitData.insuredVOList&&L.submitData.insuredVOList.forEach((e=>{e.productPlanVOList=[{insurerCode:c.productInfo.insurerCode,planCode:c.dataSource.planCode,riskVOList:L.riskVOList}]})),L.isSkipFirstTrial&&!L.hadSkipFirstTrial)return void(L.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",L.submitData);const e=N.exports.cloneDeep(L.submitData);await ce(e)}}),300),ve=async e=>{var a;const{holder:t,insuredVOList:s,isFirstInsuredChange:i}=e;if(t&&(L.submitData.holder=t),s&&s.length>0&&s.forEach(((e,a)=>{var t;L.submitData.insuredVOList&&L.submitData.insuredVOList.length>a?L.submitData.insuredVOList[a].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:((null==(t=L.submitData)?void 0:t.insuredVOList)||(L.submitData.insuredVOList=[]),L.submitData.insuredVOList.push({personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}))})),L.ifPersonalInfoSuccess=!0,i){console.log("处理第一被保人修改的dy变化");const e=await te({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=c.dataSource.insureProductRiskVOList)?void 0:a[0]}]}],...s[0].personVO});if(!ue(e))return}console.log("投被保人的信息回传 ",L.submitData,e),pe()},me=async(e,a)=>{var t,s,i,l;if(a){const o=N.exports.cloneDeep(e);delete o.insurancePeriodValueList,delete o.paymentFrequencyList,delete o.paymentPeriodValueList;if(X.indexOf(a.key)>=0){const n={};switch(a.key){case"annuityDrawDate":n.changeType=3;break;case"coveragePeriod":n.changeType=2;break;case"chargePeriod":n.changeType=1}const r=null==(s=null==(t=L.submitData)?void 0:t.insuredVOList)?void 0:s[0].personVO,d=null==(l=null==(i=c.dataSource)?void 0:i.insureProductRiskVOList)?void 0:l.find((a=>a.riskCode===e.riskCode));if(!L.isAutoChange){const a=await te({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:d,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...o,...n}}]}],...r}),t=ue(a);return t||(L.isAutoChange=!0),t}L.isAutoChange=!1}}return!0},fe=async(e,a)=>{L.mainRiskVO=e;await me(e,a)&&(L.riskVOList.length>0&&(L.riskVOList[0]=e),console.log("标准险种的信息回传",e),pe())},ke=async(e,a)=>{if(L.riskVOList=[L.mainRiskVO,...e],console.log("附加险列表数据回传",e),a){const t=e.find((e=>e.riskCode===a.riskCode));if(!(await me(t,a)))return}pe()},he=()=>{L.isAniShow=!1},ye=e=>{L.userData=e,L.defaultValue=e,L.planIndex=e.insuredVOList[0].productPlanVOList.findIndex((e=>e.planCode===c.dataSource.planCode)),ce(e,!0)};w((()=>{Y()})),t((()=>{L.loading=!0})),r((()=>L.show),(e=>{e&&(L.select={},L.list=[],L.userData={},L.riskIsInsure={},L.submitData={},L.riskVOList=[{}],L.mainRiskVO={},L.ifPersonalInfoSuccess=!1,L.trialMsg="",L.trialResult=0,Y())}));const Ve=()=>{L.show=!0,L.isAniShow=!0,L.isSkipFirstTrial=!0,L.hadSkipFirstTrial=!1,(async e=>{if(c.defaultData)ye(c.defaultData.find((e=>e.productCode===c.productInfo.productCode)));else{const e=await se({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode}]});e.data&&ye(e.data.find((e=>e.productCode===c.productInfo.productCode)))}})()};return a({open:Ve,close:G}),r((()=>L.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),r((()=>c.shareInfo),(()=>{I.value=c.shareInfo}),{deep:!0,immediate:!0}),(a,t)=>{const n=j,r=A;return s(),i(u,null,[e.hidePopupButton?V("",!0):(s(),i("div",{key:0,class:T(`trial-button ${a.$attrs.class}`)},[l($,{"is-share":I.value.isShare,premium:o(L).trialResult,"share-info":I.value,"loading-text":o(L).trialMsg,"plan-code":c.dataSource.planCode,"payment-frequency":o(L).mainRiskVO.paymentFrequency+"","tenant-product-detail":e.tenantProductDetail,onHandleClick:Ve},{default:d((()=>[f("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])],2)),o(L).isAniShow||o(L).show?(s(),p(r,{key:1,class:T(`com-trial-wrap ${a.$attrs.class}`),show:o(L).show,closeable:!1,onClose:G,onClosed:he},{default:d((()=>{var i,r,u,h,y,O,g;return[m("div",Qe,[m("div",Xe,[m("span",Ye,k(e.title),1),l(n,{name:"cross",onClick:t[0]||(t[0]=e=>o(L).show=!1)})]),m("div",Ze,[e.hideBenefit?V("",!0):(s(),p(Ge,{key:0,class:"benefit-wrap","data-source":Q.value,"product-info":e.dataSource,"show-type-list":Q.value.showTypList},null,8,["data-source","product-info","show-type-list"])),e.dataSource.productFactor?(s(),p(o(q),{key:1,ref:"personalInfoRef",modelValue:o(L).userData,"onUpdate:modelValue":t[1]||(t[1]=e=>o(L).userData=e),"is-trial":"","product-factor":e.dataSource.productFactor,"multi-insured-num":null==(r=null==(i=e.dataSource)?void 0:i.multiInsuredConfigVO)?void 0:r.multiInsuredNum,onTrailChange:ve},null,8,["modelValue","product-factor","multi-insured-num"])):V("",!0),l(B,{ref_key:"insureInfosRef",ref:v,"origin-data":null==(u=e.dataSource.insureProductRiskVOList)?void 0:u[0],"product-factor":e.dataSource.productFactor,"default-value":o(L).defaultValue?null==(y=null==(h=o(L).defaultValue)?void 0:h.insuredVOList[0].productPlanVOList[o(L).planIndex])?void 0:y.riskVOList[0]:null,onTrialChange:fe},null,8,["origin-data","product-factor","default-value"]),l(H,{"data-source":e.dataSource,"show-main-risk":!1,"default-value":o(L).defaultValue?null==(g=null==(O=o(L).defaultValue)?void 0:O.insuredVOList[0].productPlanVOList[o(L).planIndex])?void 0:g.riskVOList:[],onTrialChange:ke},null,8,["data-source","default-value"]),ea]),_(a.$slots,"default",{trialData:o(L).submitData,riskPremium:R.value},(()=>[l($,{"is-share":I.value.isShare,premium:o(L).trialResult,"share-info":I.value,"loading-text":o(L).trialMsg,"plan-code":c.dataSource.planCode,"payment-frequency":o(L).mainRiskVO.paymentFrequency+"","tenant-product-detail":e.tenantProductDetail,"handle-share":J,onHandleClick:x},{default:d((()=>[f("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])]),!0)])]})),_:3},8,["class","show"])):V("",!0)],64)}}}),[["__scopeId","data-v-2aaa0d5d"]]);export{ta as T};
