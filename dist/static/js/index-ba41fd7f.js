import{l as e,P as i}from"./index-4a2f5da3.js";import{d as a,z as s,o as l,a1 as t,R as o,c as r,A as n,V as d,U as u,g as c,i as p,w as k,h as v,G as m,aS as f,L as I,r as y,e as h,ag as g,f as V,j as L,E as b,aG as R,aU as C,a2 as S,aa as O,B as x,aV as P,aW as T,al as D,am as w,u as F,a as _,$ as E,k as j,as as N,T as q}from"./index-b419c4de.js";import"./infoCollection-2ed3ceeb.js";import{I as M,P as K}from"./index-27de7c4f.js";/* empty css              */import{S as B}from"./index-1a5ae392.js";import{P as U}from"./index-fe8e50e7.js";import{S as $,_ as A}from"./box-title-562d4bff.js";import{_ as W}from"./index-c479978a.js";import{T as z}from"./Table-fd6956c3.js";import{u as G,b as H,p as J,q as Q,c as X}from"./trial-92a4c937.js";import{u as Y}from"./useOrder-7e4863e8.js";import"./trial-d4f76514.js";import"./core-2cd43e87.js";const Z={key:0},ee={key:0,class:"risk2-field"},ie=a({name:"ProductRiskList"});var ae=m(a({...ie,props:{dataSource:{type:Array,default:()=>[]},productInfo:{type:Object,default:()=>({productCode:"",productName:""})},showMainRisk:{type:Boolean,default:()=>!0},defaultValue:{type:Object,default:()=>{}}},emits:["trialChange"],setup(e,{emit:i}){const a=e,m=s({loading:!1,show:!0,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},disabledRiskInfo:[],risksDefaultValue:{}}),I=e=>{const i=[];return e.riskLiabilityInfoVOList.map((e=>(1!=+e.showFlag&&i.push({...e}),[]))),i},y=(e,s,l)=>{var t;m.riskIsInsure[s].data=e;const o=[...m.disabledRiskInfo];null==(t=a.dataSource.insureProductRiskVOList)||t.forEach((e=>{if(1!==e.mainRiskFlag){const i=m.riskIsInsure[e.riskId];i.data&&Object.keys(i.data).length>0&&!i.isDisabled&&o.push(i.data)}})),i("trialChange",o,l)},h=(e,i)=>{var s;null==(s=a.dataSource.productRiskRelationVOList)||s.forEach((a=>{1!==a.collocationType&&(i.riskId===a.riskId?(m.riskIsInsure[i.riskId]&&m.riskIsInsure[i.riskId].selected,2===a.collocationType&&m.riskIsInsure[a.collocationRiskId]&&(m.riskIsInsure[a.collocationRiskId].selected=e),3===a.collocationType&&m.riskIsInsure[a.collocationRiskId]&&(m.riskIsInsure[a.collocationRiskId].selected="1"===e?"2":"1")):i.riskId===a.collocationRiskId&&(3===a.collocationType&&m.riskIsInsure[a.riskId]&&(m.riskIsInsure[a.riskId].selected="1"===e?"2":"1"),2===a.collocationType&&m.riskIsInsure[a.riskId]&&(m.riskIsInsure[a.riskId].selected=e)))})),"2"===e?y({},i.riskId):(e=>{var i,a,s,l,t,o;if(1!==(null==e?void 0:e.factorDisPlayFlag)){const r=null==(i=null==e?void 0:e.productRiskInsureLimitVO)?void 0:i.amountPremiumConfigVO,n={riskCategory:e.riskCategory,riskCode:e.riskCode,riskName:e.riskName,riskId:e.riskId,riskType:e.riskType,mainRiskId:e.mainRiskId,mainRiskCode:e.mainRiskCode,liabilityVOList:I(e)};n.chargePeriod=(null==(a=null==e?void 0:e.paymentPeriodValueList)?void 0:a.length)>0&&(null==e?void 0:e.paymentPeriodValueList[0].code)||null,n.coveragePeriod=(null==(s=null==e?void 0:e.insurancePeriodValueList)?void 0:s.length)>0&&(null==e?void 0:e.insurancePeriodValueList[0].code)||null,n.paymentFrequency=(null==(l=null==e?void 0:e.paymentFrequencyList)?void 0:l.length)>0&&(null==e?void 0:e.paymentFrequencyList[0].code)||null;let d=0;1===r.displayType?d=(null==r?void 0:r.minStepValue)>0?null==r?void 0:r.minStepValue:0:3===r.displayType&&2===r.requireCopies?d=(null==(t=null==r?void 0:r.displayValues)?void 0:t.length)>0?null==r?void 0:r.displayValues[0].value:0:3===r.displayType&&1===r.requireCopies?(d=(null==(o=null==r?void 0:r.displayValues)?void 0:o.length)>0?null==r?void 0:r.displayValues[0].value:0,n.copy=r.minCopiesValue):2===r.displayType?n.copy=r.minCopiesValue:d=0,1===r.saleMethod?n.amount=d:n.premium=d,y(n,e.riskId)}})(i)};return l((()=>{(()=>{var e,i;m.riskIsInsure={},m.disabledRiskInfo=[];let s=null;if(null==(e=a.dataSource.insureProductRiskVOList)||e.forEach((e=>{var i;const l=1!==e.mainRiskFlag?null==(i=a.dataSource.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId)):{};1===e.mainRiskFlag&&(s=e),m.riskIsInsure[e.riskId]={selected:"2",data:null,relation:l,isMust:!1}})),s){const e=null==(i=a.dataSource.productRiskRelationVOList)?void 0:i.filter((e=>e.riskId===s.riskId));if(!e)return;null==e||e.forEach((e=>{var i,s,l,t,o,r,n,d,u;if(2===e.collocationType){m.riskIsInsure[e.collocationRiskId].selected="1",m.riskIsInsure[e.collocationRiskId].isMust=!0;const c=null==(i=a.dataSource.insureProductRiskVOList)?void 0:i.find((i=>e.collocationRiskId===i.riskId));if(c&&1!==c.factorDisPlayFlag&&(null==(s=null==c?void 0:c.productRiskInsureLimitVO)?void 0:s.amountPremiumConfigVO)){const i=null==(l=c.riskLiabilityInfoVOList)?void 0:l.every((e=>1!==e.showFlag)),a=null==(t=null==c?void 0:c.productRiskInsureLimitVO)?void 0:t.amountPremiumConfigVO;if(i){m.riskIsInsure[e.collocationRiskId].isDisabled=!0;const i={riskCategory:c.riskCategory,riskCode:c.riskCode,riskName:c.riskName,riskId:c.riskId,riskType:c.riskType,mainRiskId:c.mainRiskId,mainRiskCode:c.mainRiskCode,liabilityVOList:I(c)};i.chargePeriod=(null==(o=null==c?void 0:c.paymentPeriodValueList)?void 0:o.length)>0&&(null==c?void 0:c.paymentPeriodValueList[0].code)||null,i.coveragePeriod=(null==(r=null==c?void 0:c.insurancePeriodValueList)?void 0:r.length)>0&&(null==c?void 0:c.insurancePeriodValueList[0].code)||null,i.paymentFrequency=(null==(n=null==c?void 0:c.paymentFrequencyList)?void 0:n.length)>0&&(null==c?void 0:c.paymentFrequencyList[0].code)||null;let s=0;1===a.displayType?s=(null==a?void 0:a.minStepValue)>0?null==a?void 0:a.minStepValue:0:3===a.displayType&&2===a.requireCopies?s=(null==(d=null==a?void 0:a.displayValues)?void 0:d.length)>0?null==a?void 0:a.displayValues[0].value:0:3===a.displayType&&1===a.requireCopies?(s=(null==(u=null==a?void 0:a.displayValues)?void 0:u.length)>0?null==a?void 0:a.displayValues[0].value:0,i.copy=a.minCopiesValue):2===a.displayType&&(i.copy=a.minCopiesValue),1===a.saleMethod?i.amount=s:i.premium=s,m.disabledRiskInfo.push(i),y(i,c.riskId)}}}3===e.collocationType&&(m.riskIsInsure[e.collocationRiskId].selected="2",m.riskIsInsure[e.collocationRiskId].isMust=!0)}))}})()})),t((()=>{m.loading=!0})),o((()=>m.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),o((()=>a.defaultValue),(e=>{(null==e?void 0:e.length)>0&&e.forEach((e=>{m.risksDefaultValue[e.riskCode]=e,m.riskIsInsure[e.riskId]&&(m.riskIsInsure[e.riskId].selected="1",y(e,e.riskId))}))}),{deep:!0,immediate:!0}),(i,a)=>{const s=B,l=f;return r(!0),n(u,null,d(e.dataSource.insureProductRiskVOList,(i=>{var a,t;return r(),n(u,{key:i.riskCode},[(!e.showMainRisk&&1!==i.mainRiskFlag||e.showMainRisk)&&(null==(t=null==(a=c(m).riskIsInsure)?void 0:a[i.riskId])?void 0:t.relation)?(r(),n("div",Z,[p(l,{modelValue:c(m).riskIsInsure[i.riskId].selected,"onUpdate:modelValue":e=>c(m).riskIsInsure[i.riskId].selected=e,label:i.riskName,name:"selected","label-width":"50%",border:!1,class:"risk-select-field risk-name"},{input:k((()=>[p(s,{modelValue:c(m).riskIsInsure[i.riskId].selected,"onUpdate:modelValue":e=>c(m).riskIsInsure[i.riskId].selected=e,"active-value":"1","inactive-value":"2",size:"26px",disabled:c(m).riskIsInsure[i.riskId].isMust,style:{"margin-right":"8px"},onChange:e=>h(e,i)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"]),"1"===c(m).riskIsInsure[i.riskId].selected?(r(),n("div",ee,[p(M,{modelValue:c(m).riskIsInsure[i.riskId].data,"onUpdate:modelValue":e=>c(m).riskIsInsure[i.riskId].data=e,"origin-data":i,"product-factor":e.dataSource.productFactor,"default-value":c(m).risksDefaultValue[i.riskCode],onTrialChange:(e,a)=>y(e,i.riskId,a)},null,8,["modelValue","onUpdate:modelValue","origin-data","product-factor","default-value","onTrialChange"])])):v("",!0)])):v("",!0)],64)})),128)}}}),[["__scopeId","data-v-212a02af"]]);const se={class:"benefit-table"},le=a({name:"benefitTable"}),te=a({...le,props:{dataSource:null},setup(e){const i=e,a=I((()=>{const e=i.dataSource.headers.length,a=12*i.dataSource.headers.join("").length+20*i.dataSource.headers.length;return i.dataSource.headers.map(((i,s)=>{const l=a>320?12*i.length+20:Math.max(12*i.length+20,320/e);return console.log("totalWordWidth:",a,"titleWidth:",l,"word-width:",12*i.length+20),{title:i,key:`header_${s}`,fixed:s<2,minWidth:l}}))})),s=I((()=>i.dataSource.dataList.map((e=>{const i={};return e.forEach(((e,a)=>{i[`header_${a}`]=e})),i}))));return t((()=>{})),(e,i)=>(r(),n("div",se,[p(z,{"top-height":400,columns:c(a),data:c(s),"is-clone":!0},null,8,["columns","data"])]))}});const oe=e=>(D("data-v-414a32d4"),e=e(),w(),e),re={key:0,class:"benefit-container"},ne={key:0,class:"benefit"},de=oe((()=>V("div",{class:"line"},null,-1))),ue={class:"box-title box-title-chart"},ce=oe((()=>V("img",{class:"tl",src:A,alt:""},null,-1))),pe=oe((()=>V("img",{class:"transform-z180 tr",src:A,alt:""},null,-1))),ke={key:0},ve={class:"box"},me={class:"box-title"},fe=oe((()=>V("img",{class:"tl",src:A,alt:""},null,-1))),Ie=oe((()=>V("img",{class:"transform-z180 tr",src:A,alt:""},null,-1))),ye={class:"box-price"},he={class:"text1"},ge={class:"text2"},Ve={key:1},Le={key:2,style:{width:"100%, minWidth: 338px"}},be={class:"slider"},Re={style:{flex:"1",margin:"0px 5px"}},Ce={class:"custom-button"},Se=oe((()=>V("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Oe={class:"btn-two"},xe={key:1,class:"benefit-container"},Pe={key:0},Te={class:"benefit"},De=oe((()=>V("div",{class:"line"},null,-1))),we=oe((()=>V("div",null,[V("div",{class:"box"},[V("p",{class:"box-title"},[V("img",{class:"tl",src:A,alt:""}),L(" 保单年度"),V("span",null,"-"),L("年度，被保人"),V("span",null,"-"),L("岁时 "),V("img",{class:"transform-z180 tr",src:A,alt:""})]),V("div",{class:"box-price"})])],-1))),Fe={class:"slider"},_e={class:"opt lf"},Ee={style:{flex:"1",margin:"0px 5px"}},je=oe((()=>V("div",{class:"custom-button"},"0 岁",-1))),Ne={class:"opt rg"},qe=oe((()=>V("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Me={class:"btn-two"},Ke={key:1,class:"empty-box"},Be=a({name:"benefit"});var Ue=m(a({...Be,props:{dataSource:{default:()=>({showTypeList:["1"]})},productInfo:{default:()=>null}},setup(e){var i;const a=e,s="1",l="2",t="3",m=y(0),f=y(0),I=y(0),D=y(),w=y(0),F=y(null==(i=a.dataSource.showTypeList)?void 0:i[0]),_=y(),E=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const i=null==e?void 0:e.benefitRiskResultVOList[m.value];f.value=i.ageBegin+1,w.value=i.ageBegin+1,I.value=i.ageEnd},j=()=>{var e,i,s,l,t,o;const r=null==(i=null==(e=a.dataSource)?void 0:e.benefitRiskResultVOList)?void 0:i[m.value];_.value=null==(t=null==(l=null==(s=a.dataSource)?void 0:s.benefitRiskResultVOList)?void 0:l[m.value].benefitRiskTableResultVOList)?void 0:t[0];const{a:n,year:d}=((e,i)=>{const a=[],s=[];for(let l=e,t=0;l<=i;l++,t++)a.push(l.toString()),s.push(t+1);return{a:a,year:s}})(f.value,I.value),u={index:n.indexOf(w.value.toString()),age:n,year:d,result:null==(o=null==r?void 0:r.benefitRiskItemResultVOList)?void 0:o[0]};D.value=u},N=()=>{w.value>I.value-1||(w.value+=1,j())},q=()=>{w.value>f.value&&(w.value-=1,j())},M=e=>{m.value=e.name,E(a.dataSource),j()};return o((()=>a.dataSource),(e=>{var i;e&&(E(e),j(),F.value=null==(i=e.showTypeList)?void 0:i[0])}),{deep:!0,immediate:!0}),o(w,(()=>{j()})),(i,o)=>{var y;const E=O,j=$,K=x,B=P,A=T,z=U;return(null==(y=e.dataSource)?void 0:y.benefitRiskResultVOList)?(r(),n("div",re,[p(A,{active:c(m),onClickTab:M},{default:k((()=>{var e;return[(r(!0),n(u,null,d(null==(e=a.dataSource)?void 0:e.benefitRiskResultVOList,((e,i)=>(r(),h(B,{key:i,name:i,title:e.riskName},{default:k((()=>{var e,y,O,x,P,T,M,B,U,$,A,z,G,H,J,Q;return[i==c(m)?(r(),n("div",ne,[de,g(V("p",ue,[ce,L(" 保单年度"),V("span",null,b(null==(O=null==(e=c(D))?void 0:e.year)?void 0:O[null==(y=c(D))?void 0:y.index]),1),L("年度，被保人"),V("span",null,b(null==(T=null==(x=c(D))?void 0:x.age)?void 0:T[null==(P=c(D))?void 0:P.index]),1),L("岁时 "),pe],512),[[R,c(F)===l]]),c(F)===s?(r(),n("div",ke,[V("div",ve,[V("p",me,[fe,L(" 保单年度"),V("span",null,b(null==(U=null==(M=c(D))?void 0:M.year)?void 0:U[null==(B=c(D))?void 0:B.index]),1),L("年度，被保人"),V("span",null,b(null==(z=null==($=c(D))?void 0:$.age)?void 0:z[null==(A=c(D))?void 0:A.index]),1),L("岁时 "),Ie]),V("div",ye,[(r(!0),n(u,null,d(null==(H=null==(G=c(D))?void 0:G.result)?void 0:H.headers,((e,i)=>{var a,s,l,t,o,d,u,p,k,v;return r(),n("div",{key:i,style:{width:"33%"}},[V("p",he,b(("0"==(null==(o=null==(t=null==(s=null==(a=c(D))?void 0:a.result)?void 0:s.dataList)?void 0:t[null==(l=c(D))?void 0:l.index])?void 0:o[i])?"0":c(C)(Number(null==(v=null==(k=null==(u=null==(d=c(D))?void 0:d.result)?void 0:u.dataList)?void 0:k[null==(p=c(D))?void 0:p.index])?void 0:v[i])))||"0"),1),V("p",ge,b(e)+"(元）",1)])})),128))])])])):v("",!0),c(F)===t?(r(),n("div",Ve,[p(te,{"data-source":c(_)},null,8,["data-source"])])):v("",!0),c(F)==l?(r(),n("div",Le,[p(W,{min:c(f),max:c(I),current:c(w),data:null==(Q=null==(J=c(D))?void 0:J.result)?void 0:Q.benefitRiskItemList},null,8,["min","max","current","data"])])):v("",!0),c(F)!=t?(r(),n(u,{key:3},[V("div",be,[V("div",{class:"opt lf",onClick:q},[p(E,{name:"minus"})]),V("div",Re,[c(f)?(r(),h(j,{key:0,modelValue:c(w),"onUpdate:modelValue":o[0]||(o[0]=e=>S(w)?w.value=e:null),min:c(f),max:c(I),"bar-height":"8px"},{button:k((()=>[V("div",Ce,b(c(w))+" 岁",1)])),_:1},8,["modelValue","min","max"])):v("",!0)]),V("div",{class:"opt rg",onClick:N},[p(E,{name:"plus"})])]),Se],64)):v("",!0),V("div",Oe,[a.dataSource.showTypeList.includes(s)?(r(),h(K,{key:0,round:"",plain:c(F)!==s,type:"primary",class:"btn",onClick:o[1]||(o[1]=e=>F.value=s)},{default:k((()=>[L("图表展示")])),_:1},8,["plain"])):v("",!0),a.dataSource.showTypeList.includes(l)?(r(),h(K,{key:1,round:"",plain:c(F)!==l,type:"primary",class:"btn",onClick:o[2]||(o[2]=e=>F.value=l)},{default:k((()=>[L("趋势展示")])),_:1},8,["plain"])):v("",!0),a.dataSource.showTypeList.includes(t)?(r(),h(K,{key:2,round:"",plain:c(F)!==t,type:"primary",class:"btn",onClick:o[3]||(o[3]=e=>F.value=t)},{default:k((()=>[L("表格展示")])),_:1},8,["plain"])):v("",!0)])])):v("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])):(r(),n("div",xe,[a.productInfo?(r(),n("div",Pe,[p(A,{active:c(m),onClickTab:M},{default:k((()=>[(r(),h(B,{key:1,name:1,title:e.productInfo.insureProductRiskVOList[0].riskName},{default:k((()=>[V("div",Te,[De,we,V("div",Fe,[V("div",_e,[p(E,{name:"minus"})]),V("div",Ee,[p(j,{modelValue:c(w),"onUpdate:modelValue":o[4]||(o[4]=e=>S(w)?w.value=e:null),min:0,max:80,"bar-height":"8px",disabled:""},{button:k((()=>[je])),_:1},8,["modelValue"])]),V("div",Ne,[p(E,{name:"plus"})])]),qe,V("div",Me,[p(K,{round:"",plain:!0,type:"primary",class:"btn",disabled:""},{default:k((()=>[L("图表展示")])),_:1}),p(K,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:k((()=>[L("趋势展示")])),_:1}),p(K,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:k((()=>[L("表格展示")])),_:1})])])])),_:1},8,["title"]))])),_:1},8,["active"])])):(r(),n("div",Ke,[p(z,{title:"试算结果正在计算中...","empty-class":"empty-select"})]))]))}}}),[["__scopeId","data-v-414a32d4"]]);const $e={key:0,class:"head-warning-wrap"},Ae=V("div",{class:"warning-icon"},[V("span",null,"!")],-1),We={class:"warning-text"},ze=a({__name:"index",props:{labels:{default:()=>[]}},setup:e=>(i,a)=>e.labels.length>0?(r(),n("div",$e,[Ae,V("div",We,[(r(!0),n(u,null,d(e.labels,(e=>(r(),n("span",{key:e},b(e),1)))),128))])])):v("",!0)}),Ge=(i,a,s)=>{var l,t,o,r;const n=i,{holder:d}=s,u=s.insuredList[0],c=(a||"").split("_");if(c.length<2)return a;if(e.exports.isNaN(Number(c[1])))return a;if(c[1]-=1,1===n.exemptFlag){if("to"===c[0]){let e=0;1===n.exemptType?(null==(l=null==d?void 0:d.personVO)?void 0:l.birthday)&&(e=parseInt(""+((new Date).getTime()-new Date(null==(t=d.personVO)?void 0:t.birthday).getTime())/31536e6,10)):2===n.exemptType&&(null==(o=null==u?void 0:u.personVO)?void 0:o.birthday)&&(e=parseInt(""+(+(new Date).getTime()-new Date(null==(r=u.personVO)?void 0:r.birthday).getTime())/31536e6,10)),c[1]=+c[1]-e}c[0]="year"}return c.join("_")},He=(e,i)=>{const a=[],s={};return e.forEach((e=>{s[e.riskId]=e})),null==i||i.forEach((e=>{var i,l,t,o;const{collocationType:r,collocationRiskId:n,riskId:d}=e;switch(r){case 2:{const e=null==(i=s[d])?void 0:i.riskName,t=null==(l=s[n])?void 0:l.riskName;a.push(`${e} 和 ${t} 必须同时投保`);break}case 3:{const e=null==(t=s[d])?void 0:t.riskName,i=null==(o=s[n])?void 0:o.riskName;a.push(`${e} 和 ${i} 不能同时投保`);break}}})),a};const Je={class:"com-body"},Qe={class:"trial-body"},Xe={class:"container"},Ye=(e=>(D("data-v-0dc27108"),e=e(),w(),e))((()=>V("div",{class:"empty"},null,-1))),Ze=a({name:"TrialPop"});var ei=m(a({...Ze,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:""})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},isTrial:{type:Boolean,default:!1}},emits:["trialStart","trialEnd"],setup(a,{expose:d,emit:u}){const k=a,m=y(null),f=F();_(),f.query;const I=s({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{premium:0,amount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1});Y(),y(),y();const g=y(),L=y({}),b=["annuityDrawDate","coveragePeriod","chargePeriod"],R=e=>{var i,a,s,l,t,o;if(null==(a=null==(i=null==e?void 0:e.data)?void 0:i[0])?void 0:a.productRiskDyInsureFactorVOList){const i=[];if(null==(s=k.dataSource)||s.insureProductRiskVOList.forEach((a=>{var s,l;const t=null==(l=null==(s=null==e?void 0:e.data)?void 0:s[0])?void 0:l.productRiskDyInsureFactorVOList.find((e=>e.riskCode===a.riskCode));if(t){a.productRiskInsureLimitVO={...a.productRiskInsureLimitVO,...t};const e=I.riskList.find((e=>e.riskCode===a.riskCode));let s=!1;K.forEach((i=>{if(b.indexOf(i.valueKey)>=0){const l=a.productRiskInsureLimitVO[i.configKey];if(l&&e){const a=l.find((a=>a.code===e[i.valueKey]));if(a&&2===a.useFlag){const a=l.find((e=>1===e.defaultFlag));e[i.valueKey]=a.code,s=!0}}}})),s&&i.push({...e,...t,riskCode:a.riskCode})}})),i.length>0&&(null==(o=null==(t=null==(l=I.defaultValue)?void 0:l.insuredList)?void 0:t[0])?void 0:o.productList))return i.forEach((e=>{var i,a,s;I.defaultValue.insuredList[0].productList=null==(s=null==(a=null==(i=I.defaultValue)?void 0:i.insuredList)?void 0:a[0])?void 0:s.productList.map((i=>(i.riskList=null==i?void 0:i.riskList.map((i=>(i.riskCode===e.riskCode&&(i=e),i))),i)))})),!1}return!0},C=async(e,i=!0)=>{I.trialMsg="试算中...",I.trialResultPremium=0,I.loading=!0,u("trialStart");let a=!1;if(i){const{code:i}=await G(e);a="10000"===i}!a&&i||(k.hideBenefit||H(e).then((e=>{e.data&&e.code===N&&(L.value=e.data)})).finally((()=>{I.loading=!1})),J(e).then((e=>{var i,a;if(e.data&&e.code===N){(null==(i=null==e?void 0:e.data)?void 0:i.errorInfo)&&q(`${null==(a=null==e?void 0:e.data)?void 0:a.errorInfo}`),I.trialMsg="",I.trialResultPremium=e.data.premium,I.trialResult=e.data;const s={};e.data.riskPremiumDetailVOList&&e.data.riskPremiumDetailVOList.length&&e.data.riskPremiumDetailVOList.forEach((e=>{s[e.riskCode]={premium:e.premium,amount:e.amount}})),g.value=s,u("trialEnd",e.data)}})).finally((()=>{I.loading=!1})))},S=e.exports.debounce((async()=>{if(console.log(">>>>>调用试算<<<<<"),I.ifPersonalInfoSuccess){if(I.submitData.productCode=k.productInfo.productCode,I.submitData.tenantId=k.productInfo.tenantId,I.riskList=I.riskList.map((e=>(e=>{var i,a,s,l;const t=null==(i=k.dataSource.insureProductRiskVOList)?void 0:i.find((i=>e.riskId===i.riskId));if(t&&1!==t.mainRiskFlag){const i=null==(s=null==(a=k.dataSource)?void 0:a.productRiskRelationVOList)?void 0:s.find((e=>e.collocationRiskId===t.riskId));if(i){const a=null==(l=I.riskList)?void 0:l.find((e=>e.riskId===i.riskId));K.forEach((i=>{i.ruleKey&&t.productRiskInsureLimitVO&&a&&(1===t.productRiskInsureLimitVO[i.ruleKey]&&(e[i.valueKey]=a[i.valueKey]),3===t.productRiskInsureLimitVO[i.ruleKey]&&(1!==t.exemptFlag?e[i.valueKey]=Ge(t,a[i.valueKey],I.submitData):e[i.valueKey]=Ge(t,a[i.ruleValueKey],I.submitData)))}))}}return e})(e))),I.submitData.insuredList&&I.submitData.insuredList.forEach((e=>{e.productList=[{insurerCode:k.productInfo.insurerCode,planCode:k.dataSource.planCode,riskList:I.riskList}]})),I.isSkipFirstTrial&&!I.hadSkipFirstTrial)return void(I.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",I.submitData);const i=e.exports.cloneDeep(I.submitData);await C(i)}}),300),O=async e=>{var i;const{holder:a,insuredList:s,isFirstInsuredChange:l}=e;if(a&&(I.submitData.holder=a),s&&s.length>0&&s.forEach(((e,i)=>{var a;I.submitData.insuredList&&I.submitData.insuredList.length>i?I.submitData.insuredList[i]={...e,socialFlag:e.hasSocialInsurance}:((null==(a=I.submitData)?void 0:a.insuredList)||(I.submitData.insuredList=[]),I.submitData.insuredList.push({...e,socialFlag:e.hasSocialInsurance}))})),I.ifPersonalInfoSuccess=!0,l){console.log("处理第一被保人修改的dy变化");const e=await Q({calcProductFactorList:[{planCode:k.dataSource.planCode,productCode:k.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:null==(i=k.dataSource.insureProductRiskVOList)?void 0:i[0]}]}],...s[0]});if(!R(e))return}console.log("投被保人的信息回传 ",I.submitData,e),S()},x=async(i,a)=>{var s,l,t,o;if(a){const r=e.exports.cloneDeep(i);delete r.insurancePeriodValueList,delete r.paymentFrequencyList,delete r.paymentPeriodValueList;if(b.indexOf(a.key)>=0){const e={};switch(a.key){case"annuityDrawDate":e.changeType=3;break;case"coveragePeriod":e.changeType=2;break;case"chargePeriod":e.changeType=1}const n=null==(l=null==(s=I.submitData)?void 0:s.insuredList)?void 0:l[0],d=null==(o=null==(t=k.dataSource)?void 0:t.insureProductRiskVOList)?void 0:o.find((e=>e.riskCode===i.riskCode));if(!I.isAutoChange){const a=await Q({calcProductFactorList:[{planCode:k.dataSource.planCode,productCode:k.productInfo.productCode,riskEditVOList:[{insureProductRiskVO:d,insureRiskEditReqVO:{riskId:i.riskId,riskCode:i.riskCode,...r,...e}}]}],...n}),s=R(a);return s||(I.isAutoChange=!0),s}I.isAutoChange=!1}}return!0},P=async(e,i)=>{I.mainRiskVO=e;await x(e,i)&&(I.riskList.length>0&&(I.riskList[0]=e),console.log("标准险种的信息回传",e),S())},T=async(e,i)=>{if(I.riskList=[I.mainRiskVO,...e],console.log("附加险列表数据回传",e),i){const a=e.find((e=>e.riskCode===i.riskCode));if(!(await x(a,i)))return}S()},D=e=>{console.log("------default data = ",e),I.userData=e,I.defaultValue=e;const i=e.insuredList[0].productList.findIndex((e=>e.planCode===k.dataSource.planCode));I.planIndex=-1===i?0:i,C(e,!0)};return l((()=>{var e,i;I.select={},I.list=[],I.userData={},I.riskIsInsure={},I.submitData={},I.riskList=[{}],I.mainRiskVO={},I.ifPersonalInfoSuccess=!1,I.trialMsg="",I.trialResultPremium=0,I.riskIsInsure={},null==(i=null==(e=null==k?void 0:k.dataSource)?void 0:e.insureProductRiskVOList)||i.forEach((e=>{var i;const a=null==(i=k.dataSource.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId));a&&(I.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:a})}))})),t((()=>{I.loading=!0,I.show=!0,I.isAniShow=!0,I.isSkipFirstTrial=!0,I.hadSkipFirstTrial=!1,E((()=>{(async e=>{if(k.defaultData){if(k.defaultData){const e=k.defaultData.find((e=>e.productCode===k.productInfo.productCode))||k.defaultData[0];D(e)}}else{const e=await X({calcProductFactorList:[{planCode:k.dataSource.planCode,productCode:k.productInfo.productCode}]});if(e.data){const i=e.data.find((e=>e.productCode===k.productInfo.productCode))||e.data[0];D(i)}}})()}))})),d({getTrialSuccessFlag:()=>I.trialResultPremium>0}),o((()=>I.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),(e,s)=>{var l,t,o,d,u,k;return r(),n("div",Je,[j(e.$slots,"trialHead",{},void 0,!0),V("div",Qe,[p(ze,{labels:c(He)(a.dataSource.insureProductRiskVOList,a.dataSource.productRiskRelationVOList)},null,8,["labels"]),V("div",Xe,[a.hideBenefit?v("",!0):(r(),h(Ue,{key:0,class:"benefit-wrap","data-source":L.value,"product-info":a.dataSource,"show-type-list":L.value.showTypList},null,8,["data-source","product-info","show-type-list"])),a.dataSource.productFactor?(r(),h(c(i),{key:1,ref:"personalInfoRef",modelValue:c(I).userData,"onUpdate:modelValue":s[0]||(s[0]=e=>c(I).userData=e),"is-trial":a.isTrial,"product-factor":a.dataSource.productFactor,"multi-insured-config":null==(l=a.dataSource)?void 0:l.multiInsuredConfigVO,onTrailChange:O},null,8,["modelValue","is-trial","product-factor","multi-insured-config"])):v("",!0),p(M,{ref_key:"insureInfosRef",ref:m,"origin-data":null==(t=a.dataSource.insureProductRiskVOList)?void 0:t[0],"product-factor":a.dataSource.productFactor,"default-value":c(I).defaultValue?null==(d=null==(o=c(I).defaultValue)?void 0:o.insuredList[0].productList[c(I).planIndex])?void 0:d.riskList[0]:null,"trial-result":c(I).trialResult,onTrialChange:P},null,8,["origin-data","product-factor","default-value","trial-result"]),p(ae,{"data-source":a.dataSource,"show-main-risk":!1,"default-value":c(I).defaultValue?null==(k=null==(u=c(I).defaultValue)?void 0:u.insuredList[0].productList[c(I).planIndex])?void 0:k.riskList:[],onTrialChange:T},null,8,["data-source","default-value"]),Ye])]),j(e.$slots,"trialBtn",{trialData:c(I).submitData,riskPremium:g.value},void 0,!0)])}}}),[["__scopeId","data-v-0dc27108"]]);export{ei as T};
