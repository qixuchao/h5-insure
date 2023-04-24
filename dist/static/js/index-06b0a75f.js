import{d as e,L as a,a1 as t,c as i,A as s,i as l,g as o,r as n,R as r,w as u,U as d,V as c,e as p,ag as m,f as v,j as f,E as k,as as h,at as V,h as y,a2 as O,G as b,aa as L,B as g,au as I,av as R,al as C,am as P,u as S,a as x,z as w,o as D,F as T,k as _,n as F,aw as E,T as j,$ as A,ax as M,ak as B,C as K,P as N,p as q}from"./index-cb62df70.js";import{l as U,P as $}from"./index-e0115fb7.js";import"./infoCollection-14cc2678.js";import{I as z,P as W}from"./index-5e840ab6.js";import{_ as H}from"./TrialButton-056a08cc.js";import{g as G,P as J,d as Q}from"./utils-b6b9ee7b.js";import{P as X}from"./index-011b975b.js";import{S as Y,_ as Z}from"./box-title-c73cb0fb.js";import{_ as ee}from"./index-13549b4e.js";import{T as ae}from"./Table-c7bc835a.js";import{u as te,b as ie,p as se,q as le,a as oe}from"./trial-faf8ee30.js";import{u as ne}from"./useOrder-c2f448f1.js";import{f as re}from"./utils-49cd76ee.js";import{t as ue}from"./utils-e42e926a.js";import{P as de,B as ce}from"./constants-7afb7c3d.js";import{n as pe}from"./nextStep-9193fe5a.js";const me={class:"benefit-table"},ve=e({name:"benefitTable"}),fe=e({...ve,props:{dataSource:null},setup(e){const n=e,r=a((()=>{const e=n.dataSource.headers.length,a=12*n.dataSource.headers.join("").length+20*n.dataSource.headers.length;return n.dataSource.headers.map(((t,i)=>{const s=a>320?12*t.length+20:Math.max(12*t.length+20,320/e);return console.log("totalWordWidth:",a,"titleWidth:",s,"word-width:",12*t.length+20),{title:t,key:`header_${i}`,fixed:i<2,minWidth:s}}))})),u=a((()=>n.dataSource.dataList.map((e=>{const a={};return e.forEach(((e,t)=>{a[`header_${t}`]=e})),a}))));return t((()=>{})),(e,a)=>(i(),s("div",me,[l(ae,{"top-height":400,columns:o(r),data:o(u),"is-clone":!0},null,8,["columns","data"])]))}});const ke=e=>(C("data-v-414a32d4"),e=e(),P(),e),he={key:0,class:"benefit-container"},Ve={key:0,class:"benefit"},ye=ke((()=>v("div",{class:"line"},null,-1))),Oe={class:"box-title box-title-chart"},be=ke((()=>v("img",{class:"tl",src:Z,alt:""},null,-1))),Le=ke((()=>v("img",{class:"transform-z180 tr",src:Z,alt:""},null,-1))),ge={key:0},Ie={class:"box"},Re={class:"box-title"},Ce=ke((()=>v("img",{class:"tl",src:Z,alt:""},null,-1))),Pe=ke((()=>v("img",{class:"transform-z180 tr",src:Z,alt:""},null,-1))),Se={class:"box-price"},xe={class:"text1"},we={class:"text2"},De={key:1},Te={key:2,style:{width:"100%, minWidth: 338px"}},_e={class:"slider"},Fe={style:{flex:"1",margin:"0px 5px"}},Ee={class:"custom-button"},je=ke((()=>v("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Ae={class:"btn-two"},Me={key:1,class:"benefit-container"},Be={key:0},Ke={class:"benefit"},Ne=ke((()=>v("div",{class:"line"},null,-1))),qe=ke((()=>v("div",null,[v("div",{class:"box"},[v("p",{class:"box-title"},[v("img",{class:"tl",src:Z,alt:""}),f(" 保单年度"),v("span",null,"-"),f("年度，被保人"),v("span",null,"-"),f("岁时 "),v("img",{class:"transform-z180 tr",src:Z,alt:""})]),v("div",{class:"box-price"})])],-1))),Ue={class:"slider"},$e={class:"opt lf"},ze={style:{flex:"1",margin:"0px 5px"}},We=ke((()=>v("div",{class:"custom-button"},"0 岁",-1))),He={class:"opt rg"},Ge=ke((()=>v("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Je={class:"btn-two"},Qe={key:1,class:"empty-box"},Xe=e({name:"benefit"});var Ye=b(e({...Xe,props:{dataSource:{default:()=>({showTypeList:["1"]})},productInfo:{default:()=>null}},setup(e){var a;const t=e,b="1",C="2",P="3",S=n(0),x=n(0),w=n(0),D=n(),T=n(0),_=n(null==(a=t.dataSource.showTypeList)?void 0:a[0]),F=n(),E=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=null==e?void 0:e.benefitRiskResultVOList[S.value];x.value=a.ageBegin+1,T.value=a.ageBegin+1,w.value=a.ageEnd},j=()=>{var e,a,i,s,l,o;const n=null==(a=null==(e=t.dataSource)?void 0:e.benefitRiskResultVOList)?void 0:a[S.value];F.value=null==(l=null==(s=null==(i=t.dataSource)?void 0:i.benefitRiskResultVOList)?void 0:s[S.value].benefitRiskTableResultVOList)?void 0:l[0];const{a:r,year:u}=((e,a)=>{const t=[],i=[];for(let s=e,l=0;s<=a;s++,l++)t.push(s.toString()),i.push(l+1);return{a:t,year:i}})(x.value,w.value),d={index:r.indexOf(T.value.toString()),age:r,year:u,result:null==(o=null==n?void 0:n.benefitRiskItemResultVOList)?void 0:o[0]};D.value=d},A=()=>{T.value>w.value-1||(T.value+=1,j())},M=()=>{T.value>x.value&&(T.value-=1,j())},B=e=>{S.value=e.name,E(t.dataSource),j()};return r((()=>t.dataSource),(e=>{var a;e&&(E(e),j(),_.value=null==(a=e.showTypeList)?void 0:a[0])}),{deep:!0,immediate:!0}),r(T,(()=>{j()})),(a,n)=>{var r;const E=L,j=Y,K=g,N=I,q=R,U=X;return(null==(r=e.dataSource)?void 0:r.benefitRiskResultVOList)?(i(),s("div",he,[l(q,{active:o(S),onClickTab:B},{default:u((()=>{var e;return[(i(!0),s(d,null,c(null==(e=t.dataSource)?void 0:e.benefitRiskResultVOList,((e,a)=>(i(),p(N,{key:a,name:a,title:e.riskName},{default:u((()=>{var e,r,L,g,I,R,B,N,q,U,$,z,W,H,G,J;return[a==o(S)?(i(),s("div",Ve,[ye,m(v("p",Oe,[be,f(" 保单年度"),v("span",null,k(null==(L=null==(e=o(D))?void 0:e.year)?void 0:L[null==(r=o(D))?void 0:r.index]),1),f("年度，被保人"),v("span",null,k(null==(R=null==(g=o(D))?void 0:g.age)?void 0:R[null==(I=o(D))?void 0:I.index]),1),f("岁时 "),Le],512),[[h,o(_)===C]]),o(_)===b?(i(),s("div",ge,[v("div",Ie,[v("p",Re,[Ce,f(" 保单年度"),v("span",null,k(null==(q=null==(B=o(D))?void 0:B.year)?void 0:q[null==(N=o(D))?void 0:N.index]),1),f("年度，被保人"),v("span",null,k(null==(z=null==(U=o(D))?void 0:U.age)?void 0:z[null==($=o(D))?void 0:$.index]),1),f("岁时 "),Pe]),v("div",Se,[(i(!0),s(d,null,c(null==(H=null==(W=o(D))?void 0:W.result)?void 0:H.headers,((e,a)=>{var t,l,n,r,u,d,c,p,m,f;return i(),s("div",{key:a,style:{width:"33%"}},[v("p",xe,k(("0"==(null==(u=null==(r=null==(l=null==(t=o(D))?void 0:t.result)?void 0:l.dataList)?void 0:r[null==(n=o(D))?void 0:n.index])?void 0:u[a])?"0":o(V)(Number(null==(f=null==(m=null==(c=null==(d=o(D))?void 0:d.result)?void 0:c.dataList)?void 0:m[null==(p=o(D))?void 0:p.index])?void 0:f[a])))||"0"),1),v("p",we,k(e)+"(元）",1)])})),128))])])])):y("",!0),o(_)===P?(i(),s("div",De,[l(fe,{"data-source":o(F)},null,8,["data-source"])])):y("",!0),o(_)==C?(i(),s("div",Te,[l(ee,{min:o(x),max:o(w),current:o(T),data:null==(J=null==(G=o(D))?void 0:G.result)?void 0:J.benefitRiskItemList},null,8,["min","max","current","data"])])):y("",!0),o(_)!=P?(i(),s(d,{key:3},[v("div",_e,[v("div",{class:"opt lf",onClick:M},[l(E,{name:"minus"})]),v("div",Fe,[o(x)?(i(),p(j,{key:0,modelValue:o(T),"onUpdate:modelValue":n[0]||(n[0]=e=>O(T)?T.value=e:null),min:o(x),max:o(w),"bar-height":"8px"},{button:u((()=>[v("div",Ee,k(o(T))+" 岁",1)])),_:1},8,["modelValue","min","max"])):y("",!0)]),v("div",{class:"opt rg",onClick:A},[l(E,{name:"plus"})])]),je],64)):y("",!0),v("div",Ae,[t.dataSource.showTypeList.includes(b)?(i(),p(K,{key:0,round:"",plain:o(_)!==b,type:"primary",class:"btn",onClick:n[1]||(n[1]=e=>_.value=b)},{default:u((()=>[f("图表展示")])),_:1},8,["plain"])):y("",!0),t.dataSource.showTypeList.includes(C)?(i(),p(K,{key:1,round:"",plain:o(_)!==C,type:"primary",class:"btn",onClick:n[2]||(n[2]=e=>_.value=C)},{default:u((()=>[f("趋势展示")])),_:1},8,["plain"])):y("",!0),t.dataSource.showTypeList.includes(P)?(i(),p(K,{key:2,round:"",plain:o(_)!==P,type:"primary",class:"btn",onClick:n[3]||(n[3]=e=>_.value=P)},{default:u((()=>[f("表格展示")])),_:1},8,["plain"])):y("",!0)])])):y("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])):(i(),s("div",Me,[t.productInfo?(i(),s("div",Be,[l(q,{active:o(S),onClickTab:B},{default:u((()=>[(i(),p(N,{key:1,name:1,title:e.productInfo.insureProductRiskVOList[0].riskName},{default:u((()=>[v("div",Ke,[Ne,qe,v("div",Ue,[v("div",$e,[l(E,{name:"minus"})]),v("div",ze,[l(j,{modelValue:o(T),"onUpdate:modelValue":n[4]||(n[4]=e=>O(T)?T.value=e:null),min:0,max:80,"bar-height":"8px",disabled:""},{button:u((()=>[We])),_:1},8,["modelValue"])]),v("div",He,[l(E,{name:"plus"})])]),Ge,v("div",Je,[l(K,{round:"",plain:!0,type:"primary",class:"btn",disabled:""},{default:u((()=>[f("图表展示")])),_:1}),l(K,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:u((()=>[f("趋势展示")])),_:1}),l(K,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:u((()=>[f("表格展示")])),_:1})])])])),_:1},8,["title"]))])),_:1},8,["active"])])):(i(),s("div",Qe,[l(U,{title:"试算结果正在计算中...","empty-class":"empty-select"})]))]))}}}),[["__scopeId","data-v-414a32d4"]]);const Ze={key:0,class:"head-warning-wrap"},ea=v("div",{class:"warning-icon"},[v("span",null,"!")],-1),aa={class:"warning-text"},ta=e({__name:"index",props:{labels:{default:()=>[]}},setup:e=>(a,t)=>e.labels.length>0?(i(),s("div",Ze,[ea,v("div",aa,[(i(!0),s(d,null,c(e.labels,(e=>(i(),s("span",{key:e},k(e),1)))),128))])])):y("",!0)});const ia={class:"com-body"},sa={class:"header"},la={class:"header-title"},oa={class:"trial-body"},na={class:"container"},ra=(e=>(C("data-v-8a53e272"),e=e(),P(),e))((()=>v("div",{class:"empty"},null,-1))),ua=e({name:"TrialPop"});var da=b(e({...ua,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:""})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null}},setup(e,{expose:a}){const c=e,m=n(null),h=S();x();const{tenantId:V,templateId:O,preview:b}=h.query,L=w({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{premium:0,amount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),g=ne(),I=n(),R=n(),C=(e={},a={},t={})=>{var i;const s={...t},{tenantOrderHolder:l,tenantOrderInsuredList:o}=re({holder:null==(i=L.submitData.holder)?void 0:i.personVO,insuredList:(L.submitData.insuredVOList||[]).map((e=>e.personVO))}),n=L.submitData.insuredVOList.map((e=>{var a,t;return null==(t=null==(a=e.productPlanVOList)?void 0:a[0])?void 0:t.riskVOList})).flat(),r={tenantId:V,riskList:n,riskPremium:a,productId:e.id};return s.extInfo.iseeBizNo=I.value,s.productCode=e.productCode,s.commencementTime=s.insuranceStartDate,s.expiryDate=s.insuranceEndDate,s.premium=L.trialResultPremium,s.orderAmount=L.trialResultPremium,s.orderRealAmount=L.trialResultPremium,s.tenantOrderHolder=l,s.tenantOrderInsuredList=o.map((a=>({...a,certType:a.certType||K.CERT,certNo:(a.certNo||"").toLocaleUpperCase(),planCode:c.dataSource.planCode,tenantOrderProductList:[{premium:L.trialResultPremium,productCode:e.productCode,productName:e.productName,planCode:c.dataSource.planCode,tenantOrderRiskList:ue(r)}]}))),console.log("nextStepParams",s),s},P=n(),X=()=>{var e;b?F(de.TRIAL_PREMIUM,h.query):L.trialResultPremium&&(null==(e=m.value)||e.validate().then((()=>{Object.assign(g.value,{extInfo:{...g.value.extInfo,buttonCode:ce.TRIAL_PREMIUM,pageCode:de.TRIAL_PREMIUM,templateId:O}});const e=C(c.productInfo,P.value,g.value);pe(e,((e,a)=>{a===N.JUMP_PAGE&&q(e.nextPageCode,{...h.query,orderNo:e.orderNo})})),console.log("---- validate success ----")})),L.loading=!1,L.show=!0,L.isAniShow=!0)},Y=e=>{var a;L.trialResultPremium&&(null==(a=m.value)||a.validate().then((()=>{Object.assign(g.value,{extInfo:{...g.value.extInfo,buttonCode:ce.TRIAL_PREMIUM,pageCode:de.TRIAL_PREMIUM,templateId:O}});const a=C(c.productInfo,P.value,g.value);pe(a,((a,t)=>{t===N.JUMP_PAGE&&(R.value.link=`${window.location.href}&isShare=1&orderNo=${a.orderNo}`,e())})),console.log("---- validate success ----")})))},Z=()=>{L.show=!1,L.loading=!1},ee=n({}),ae=["annuityDrawDate","coveragePeriod","chargePeriod"],me=()=>{var e,a;L.riskIsInsure={},null==(a=null==(e=null==c?void 0:c.dataSource)?void 0:e.insureProductRiskVOList)||a.forEach((e=>{var a;const t=null==(a=c.dataSource.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId));t&&(L.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:t})}))},ve=e=>{var a,t,i,s,l,o;if(null==(t=null==(a=null==e?void 0:e.data)?void 0:a[0])?void 0:t.productRiskDyInsureFactorVOList){const a=[];if(null==(i=c.dataSource)||i.insureProductRiskVOList.forEach((t=>{var i,s;const l=null==(s=null==(i=null==e?void 0:e.data)?void 0:i[0])?void 0:s.productRiskDyInsureFactorVOList.find((e=>e.riskCode===t.riskCode));if(l){t.productRiskInsureLimitVO={...t.productRiskInsureLimitVO,...l};const e=L.riskVOList.find((e=>e.riskCode===t.riskCode));let i=!1;W.forEach((a=>{if(ae.indexOf(a.valueKey)>=0){const s=t.productRiskInsureLimitVO[a.configKey];if(s&&e){const t=s.find((t=>t.code===e[a.valueKey]));if(t&&2===t.useFlag){const t=s.find((e=>1===e.defaultFlag));e[a.valueKey]=t.code,i=!0}}}})),i&&a.push({...e,...l,riskCode:t.riskCode})}})),a.length>0&&(null==(o=null==(l=null==(s=L.defaultValue)?void 0:s.insuredVOList)?void 0:l[0])?void 0:o.productPlanVOList))return a.forEach((e=>{var a,t,i;L.defaultValue.insuredVOList[0].productPlanVOList=null==(i=null==(t=null==(a=L.defaultValue)?void 0:a.insuredVOList)?void 0:t[0])?void 0:i.productPlanVOList.map((a=>(a.riskVOList=null==a?void 0:a.riskVOList.map((a=>(a.riskCode===e.riskCode&&(a=e),a))),a)))})),!1}return!0},fe=async(e,a=!0)=>{L.trialMsg="试算中...",L.trialResultPremium=0,L.loading=!0;let t=!1;if(a){const{code:a}=await te(e);t="10000"===a}!t&&a||(c.hideBenefit||ie(e).then((e=>{e.data&&e.code===E&&(ee.value=e.data)})).finally((()=>{L.loading=!1})),se(e).then((e=>{var a,t;if(e.data&&e.code===E){(null==(a=null==e?void 0:e.data)?void 0:a.errorInfo)&&j(`${null==(t=null==e?void 0:e.data)?void 0:t.errorInfo}`),L.trialMsg="",L.trialResultPremium=e.data.premium,L.trialResult=e.data;const i={};e.data.riskPremiumDetailVOList&&e.data.riskPremiumDetailVOList.length&&e.data.riskPremiumDetailVOList.forEach((e=>{i[e.riskCode]={premium:e.premium,amount:e.amount}})),P.value=i}})).finally((()=>{L.loading=!1})))},ke=U.exports.debounce((async()=>{if(console.log(">>>>>调用试算<<<<<"),L.ifPersonalInfoSuccess){if(L.submitData.productCode=c.productInfo.productCode,L.submitData.tenantId=c.productInfo.tenantId,L.riskVOList=L.riskVOList.map((e=>(e=>{var a,t,i,s;const l=null==(a=c.dataSource.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(l&&1!==l.mainRiskFlag){const a=null==(i=null==(t=c.dataSource)?void 0:t.productRiskRelationVOList)?void 0:i.find((e=>e.collocationRiskId===l.riskId));if(a){const t=null==(s=L.riskVOList)?void 0:s.find((e=>e.riskId===a.riskId));W.forEach((a=>{a.ruleKey&&l.productRiskInsureLimitVO&&t&&(1===l.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=t[a.valueKey]),3===l.productRiskInsureLimitVO[a.ruleKey]&&(1!==l.exemptFlag?e[a.valueKey]=Q(l,t[a.valueKey],L.submitData):e[a.valueKey]=Q(l,t[a.ruleValueKey],L.submitData)))}))}}return e})(e))),L.submitData.insuredVOList&&L.submitData.insuredVOList.forEach((e=>{e.productPlanVOList=[{insurerCode:c.productInfo.insurerCode,planCode:c.dataSource.planCode,riskVOList:L.riskVOList}]})),L.isSkipFirstTrial&&!L.hadSkipFirstTrial)return void(L.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",L.submitData);const e=U.exports.cloneDeep(L.submitData);await fe(e)}}),300),he=async e=>{var a;const{holder:t,insuredVOList:i,isFirstInsuredChange:s}=e;if(t&&(L.submitData.holder=t),i&&i.length>0&&i.forEach(((e,a)=>{var t;L.submitData.insuredVOList&&L.submitData.insuredVOList.length>a?L.submitData.insuredVOList[a].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:((null==(t=L.submitData)?void 0:t.insuredVOList)||(L.submitData.insuredVOList=[]),L.submitData.insuredVOList.push({personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}))})),L.ifPersonalInfoSuccess=!0,s){console.log("处理第一被保人修改的dy变化");const e=await le({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:null==(a=c.dataSource.insureProductRiskVOList)?void 0:a[0]}]}],...i[0].personVO});if(!ve(e))return}console.log("投被保人的信息回传 ",L.submitData,e),ke()},Ve=async(e,a)=>{var t,i,s,l;if(a){const o=U.exports.cloneDeep(e);delete o.insurancePeriodValueList,delete o.paymentFrequencyList,delete o.paymentPeriodValueList;if(ae.indexOf(a.key)>=0){const n={};switch(a.key){case"annuityDrawDate":n.changeType=3;break;case"coveragePeriod":n.changeType=2;break;case"chargePeriod":n.changeType=1}const r=null==(i=null==(t=L.submitData)?void 0:t.insuredVOList)?void 0:i[0].personVO,u=null==(l=null==(s=c.dataSource)?void 0:s.insureProductRiskVOList)?void 0:l.find((a=>a.riskCode===e.riskCode));if(!L.isAutoChange){const a=await le({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:u,insureRiskEditReqVO:{riskId:e.riskId,riskCode:e.riskCode,...o,...n}}]}],...r}),t=ve(a);return t||(L.isAutoChange=!0),t}L.isAutoChange=!1}}return!0},ye=async(e,a)=>{L.mainRiskVO=e;await Ve(e,a)&&(L.riskVOList.length>0&&(L.riskVOList[0]=e),console.log("标准险种的信息回传",e),ke())},Oe=async(e,a)=>{if(L.riskVOList=[L.mainRiskVO,...e],console.log("附加险列表数据回传",e),a){const t=e.find((e=>e.riskCode===a.riskCode));if(!(await Ve(t,a)))return}ke()},be=()=>{L.isAniShow=!1},Le=e=>{L.userData=e,L.defaultValue=e;const a=e.insuredVOList[0].productPlanVOList.findIndex((e=>e.planCode===c.dataSource.planCode));L.planIndex=-1===a?0:a,fe(e,!0)};D((()=>{me()})),t((()=>{L.loading=!0})),r((()=>L.show),(e=>{e&&(L.select={},L.list=[],L.userData={},L.riskIsInsure={},L.submitData={},L.riskVOList=[{}],L.mainRiskVO={},L.ifPersonalInfoSuccess=!1,L.trialMsg="",L.trialResultPremium=0,me())}));const ge=()=>{L.show=!0,L.isAniShow=!0,L.isSkipFirstTrial=!0,L.hadSkipFirstTrial=!1,A((()=>{(async e=>{if(c.defaultData){if(c.defaultData){const e=c.defaultData.find((e=>e.productCode===c.productInfo.productCode))||c.defaultData[0];Le(e)}}else{const e=await oe({calcProductFactorList:[{planCode:c.dataSource.planCode,productCode:c.productInfo.productCode}]});if(e.data){const a=e.data.find((e=>e.productCode===c.productInfo.productCode))||e.data[0];Le(a)}}})()}))};return a({open:ge,close:Z,getTrialSuccessFlag:()=>L.trialResultPremium>0}),r((()=>L.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),r((()=>c.shareInfo),(()=>{R.value=c.shareInfo}),{deep:!0,immediate:!0}),(a,t)=>{const n=M,r=B;return i(),s(d,null,[e.hidePopupButton?y("",!0):(i(),s("div",{key:0,class:T(`trial-button ${a.$attrs.class}`)},[l(H,{"is-share":R.value.isShare,premium:o(L).trialResultPremium,"share-info":R.value,"loading-text":o(L).trialMsg,"plan-code":c.dataSource.planCode,"payment-frequency":o(L).mainRiskVO.paymentFrequency+"","tenant-product-detail":e.tenantProductDetail,onHandleClick:ge},{default:u((()=>[f("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])],2)),o(L).isAniShow||o(L).show?(i(),p(r,{key:1,class:T(`com-trial-wrap ${a.$attrs.class}`),show:o(L).show,closeable:!1,onClose:Z,onClosed:be},{default:u((()=>{var s,r,d,h,V,O;return[v("div",ia,[v("div",sa,[v("span",la,k(e.title),1),l(n,{name:"cross",onClick:t[0]||(t[0]=e=>o(L).show=!1)})]),v("div",oa,[l(ta,{labels:o(G)(e.dataSource.insureProductRiskVOList,e.dataSource.productRiskRelationVOList)},null,8,["labels"]),v("div",na,[e.hideBenefit?y("",!0):(i(),p(Ye,{key:0,class:"benefit-wrap","data-source":ee.value,"product-info":e.dataSource,"show-type-list":ee.value.showTypList},null,8,["data-source","product-info","show-type-list"])),e.dataSource.productFactor?(i(),p(o($),{key:1,ref:"personalInfoRef",modelValue:o(L).userData,"onUpdate:modelValue":t[1]||(t[1]=e=>o(L).userData=e),"is-trial":"","product-factor":e.dataSource.productFactor,"multi-insured-config":null==(s=e.dataSource)?void 0:s.multiInsuredConfigVO,onTrailChange:he},null,8,["modelValue","product-factor","multi-insured-config"])):y("",!0),l(z,{ref_key:"insureInfosRef",ref:m,"origin-data":null==(r=e.dataSource.insureProductRiskVOList)?void 0:r[0],"product-factor":e.dataSource.productFactor,"default-value":o(L).defaultValue?null==(h=null==(d=o(L).defaultValue)?void 0:d.insuredVOList[0].productPlanVOList[o(L).planIndex])?void 0:h.riskVOList[0]:null,"trial-result":o(L).trialResult,onTrialChange:ye},null,8,["origin-data","product-factor","default-value","trial-result"]),l(J,{"data-source":e.dataSource,"show-main-risk":!1,"default-value":o(L).defaultValue?null==(O=null==(V=o(L).defaultValue)?void 0:V.insuredVOList[0].productPlanVOList[o(L).planIndex])?void 0:O.riskVOList:[],onTrialChange:Oe},null,8,["data-source","default-value"]),ra])]),_(a.$slots,"default",{trialData:o(L).submitData,riskPremium:P.value},(()=>[l(H,{"is-share":R.value.isShare,premium:o(L).trialResultPremium,"share-info":R.value,"loading-text":o(L).trialMsg,"plan-code":c.dataSource.planCode,"payment-frequency":o(L).mainRiskVO.paymentFrequency+"","tenant-product-detail":e.tenantProductDetail,"handle-share":Y,onHandleClick:X},{default:u((()=>[f("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])]),!0)])]})),_:3},8,["class","show"])):y("",!0)],64)}}}),[["__scopeId","data-v-8a53e272"]]);export{da as T};
