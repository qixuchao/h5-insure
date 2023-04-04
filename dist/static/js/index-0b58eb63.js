import{_ as e,d as i,a,r as l,J as s,E as t,cf as o,an as n,c as r,h as d,f as u,g as c,F as p,i as v,e as m,aE as k,G as I,w as f,k as h,y,A as V,j as g,n as O,t as b,a4 as C,bB as R,a7 as L,V as _,B as S,bE as T,bF as x,X as w,Y as P,cm as F,T as j,b4 as D,a8 as N,bY as E,bZ as A,u as U,a9 as q,b6 as B,b as M,cn as H,c0 as K,c7 as z}from"./index-0fe7bae3.js";import{p as G,c as W,i as Y}from"./trial-a4f9e2b2.js";import{b as $,c as J}from"./product-ad6617aa.js";import{_ as X}from"./index-455a8bd6.js";import{a as Z,u as Q,G as ee,_ as ie}from"./useAttachment-4570af22.js";import{P as ae}from"./index-13b69157.js";import{g as le}from"./utils-6b171a58.js";import{l as se,I as te,P as oe}from"./index-8142c0d7.js";import"./index-30849e4a.js";import"./infoCollection-c0331be0.js";import"./ProOccupation.vue_vue_type_style_index_0_scoped_true_lang-99dcbb6b.js";import{t as ne,_ as re}from"./index-a44123ee.js";import{S as de}from"./index-852f01c4.js";import{_ as ue}from"./index-2d1dce1c.js";import{S as ce,_ as pe}from"./box-title-ebfbc143.js";import{_ as ve}from"./index-7c2b0811.js";import{T as me}from"./Table-9b068308.js";import"./pdfh5-008ca364.js";import"./index-a37e1c9e.js";import"./trial-84736b54.js";import"./cloneDeep-aaa98338.js";import"./keysIn-b3061da8.js";import"./isObjectLike-d00d103b.js";import"./debounce-2dbbea42.js";import"./empty-ae586b6c.js";import"./echarts-ac920fed.js";var ke=e(i({__name:"PersonalInfo",props:{productFactor:{default:()=>({})},modelValue:{default:()=>({})}},emits:["update:modelValue","trailChange"],setup(e,{expose:i,emit:k}){const I=e;a();const f=l(null),h=l(null),y=s({validated:!1,holder:{personVO:{},schema:[],trialFactorCodes:[],config:{}},insured:{schema:[],trialFactorCodes:[],config:{},insuredVOList:[{personVO:{}}]}}),V=t((()=>o(y.holder.schema)!==o(y.insured.schema))),g=()=>{var e,i;const a=null==(e=h.value)?void 0:e.map((e=>null==e?void 0:e.validate()));return Promise.all([null==(i=f.value)?void 0:i.validate(),...a])},O=e=>{const i=["insureArea","residence","longArea","workAddress"],a={};return Object.keys(e).forEach((l=>{i.indexOf(l)>=0&&e[l]instanceof Object?Object.keys(e[l]).forEach((i=>{a[i]=e[l][i]})):a[l]=e[l]})),a};return n((()=>I.productFactor),(()=>{const[e,i]=ne(I.productFactor,!0);Object.assign(y.holder,e),Object.assign(y.insured,i)}),{deep:!0,immediate:!0}),n([()=>y.holder.personVO,()=>y.insured.insuredVOList],(()=>{const e={holder:O(y.holder.personVO),insuredVOList:y.insured.insuredVOList.map((e=>({...e,personVO:O(e.personVO)})))};k("update:modelValue",e),(()=>{const e=!!o(y.holder.trialFactorCodes)&&y.holder.trialFactorCodes.some((e=>{const i=y.holder.personVO[e];return se.exports.isNil(i)||""===i})),i=!!o(y.insured.trialFactorCodes)&&y.insured.trialFactorCodes.some((e=>y.insured.insuredVOList.some((i=>{const a=i.personVO[e];return se.exports.isNil(a)||""===a}))));return e||i})()||g().then((()=>{y.validated=!0,k("trailChange",e)})).catch((()=>{y.validated=!1}))}),{deep:!0}),n((()=>y.holder.personVO),((...e)=>{y.holder,y.insured.insuredVOList.forEach(((e,i)=>{const{personVO:a}=e||{};"1"===a.relationToHolder&&Object.assign(y.insured.insuredVOList[i].personVO,y.holder.personVO)}))}),{deep:!0,immediate:!0}),n((()=>y.insured.insuredVOList.map(((e,i)=>e.personVO.relationToHolder))),((e,i)=>{console.log("%c🔥 与投保人关系变动了","color:#1989fa;background:#5e4;padding:3px 5px;"),y.insured.insuredVOList.forEach(((e,i)=>{const{personVO:a}=e||{},{schema:l,config:s}=y.insured;l.find((e=>"certNo"===e.name));const t="1"===a.relationToHolder;a.relationToHolder,l.forEach((e=>{e.relationToHolder=a.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&t}));const o=t?{...a,...y.holder.personVO}:{...Object.keys(a).reduce(((e,i)=>(e[i]="",e)),{}),relationToHolder:a.relationToHolder};Object.assign(y.insured.insuredVOList[i].personVO,o)}))}),{immediate:!0,deep:!0}),i({validate:g}),(e,i)=>(r(),d(p,null,[u(c(re),{ref_key:"holderInfoRef",ref:f,title:c(V)?"":"投保人信息",class:"trail-personal-info",model:c(y).holder.personVO,schema:c(y).holder.schema,config:c(y).holder.config},null,8,["title","model","schema","config"]),(r(!0),d(p,null,v(c(y).insured.insuredVOList,((e,i)=>(r(),m(c(re),{ref_for:!0,ref_key:"insuredFormRef",ref:h,key:i,class:"trail-personal-info",title:c(V)?"":"被保人信息",model:e.personVO,schema:c(y).insured.schema,config:c(y).insured.config},null,8,["title","model","schema","config"])))),128))],64))}}),[["__scopeId","data-v-e1f7ff52"]]);const Ie={key:0},fe={key:0,class:"risk2-field"};var he=e(i({__name:"index",props:{dataSource:{type:Array,default:()=>[]},productInfo:{type:Object,default:()=>({productCode:"",productName:""})},showMainRisk:{type:Boolean,default:()=>!0}},emits:["trialChange"],setup(e,{emit:i}){const a=e,l=s({loading:!1,show:!0,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},disabledRiskInfo:[]}),t=e=>{const i=[];return e.riskLiabilityInfoVOList.map((e=>(1!=+e.showFlag&&i.push({...e}),[]))),i},o=(e,s)=>{var t;l.riskIsInsure[s].data=e;const o=[...l.disabledRiskInfo];null==(t=a.dataSource.insureProductRiskVOList)||t.forEach((e=>{if(1!==e.mainRiskFlag){const i=l.riskIsInsure[e.riskId];i.data&&Object.keys(i.data).length>0&&!i.isDisabled&&o.push(i.data)}})),i("trialChange",o)},m=(e,i)=>{var s;null==(s=a.dataSource.productRiskRelationVOList)||s.forEach((a=>{1!==a.collocationType&&(i.riskId===a.riskId?(l.riskIsInsure[i.riskId]&&l.riskIsInsure[i.riskId].selected,2===a.collocationType&&l.riskIsInsure[a.collocationRiskId]&&(l.riskIsInsure[a.collocationRiskId].selected=e),3===a.collocationType&&l.riskIsInsure[a.collocationRiskId]&&(l.riskIsInsure[a.collocationRiskId].selected="1"===e?"2":"1")):i.riskId===a.collocationRiskId&&(3===a.collocationType&&l.riskIsInsure[a.riskId]&&(l.riskIsInsure[a.riskId].selected="1"===e?"2":"1"),2===a.collocationType&&l.riskIsInsure[a.riskId]&&(l.riskIsInsure[a.riskId].selected=e)))})),"2"===e?o({},i.riskId):(e=>{var i,a,l,s,n,r;if(1!==(null==e?void 0:e.factorDisPlayFlag)){const d=null==(i=null==e?void 0:e.productRiskInsureLimitVO)?void 0:i.amountPremiumConfigVO,u={riskCategory:e.riskCategory,riskCode:e.riskCode,riskName:e.riskName,riskId:e.riskId,riskType:e.riskType,mainRiskId:e.mainRiskId,mainRiskCode:e.mainRiskCode,liabilityVOList:t(e)};u.chargePeriod=(null==(a=null==e?void 0:e.paymentPeriodValueList)?void 0:a.length)>0&&(null==e?void 0:e.paymentPeriodValueList[0].code)||null,u.coveragePeriod=(null==(l=null==e?void 0:e.insurancePeriodValueList)?void 0:l.length)>0&&(null==e?void 0:e.insurancePeriodValueList[0].code)||null,u.paymentFrequency=(null==(s=null==e?void 0:e.paymentFrequencyList)?void 0:s.length)>0&&(null==e?void 0:e.paymentFrequencyList[0].code)||null;let c=0;1===d.displayType?c=(null==d?void 0:d.minStepValue)>0?null==d?void 0:d.minStepValue:0:3===d.displayType&&2===d.requireCopies?c=(null==(n=null==d?void 0:d.displayValues)?void 0:n.length)>0?null==d?void 0:d.displayValues[0].value:0:3===d.displayType&&1===d.requireCopies?(c=(null==(r=null==d?void 0:d.displayValues)?void 0:r.length)>0?null==d?void 0:d.displayValues[0].value:0,u.copy=d.minCopiesValue):2===d.displayType?u.copy=d.minCopiesValue:c=0,1===d.saleMethod?u.amount=c:u.premium=c,o(u,e.riskId)}})(i)};return k((()=>{(()=>{var e,i;l.riskIsInsure={},l.disabledRiskInfo=[];let s=null;if(null==(e=a.dataSource.insureProductRiskVOList)||e.forEach((e=>{var i;const t=1!==e.mainRiskFlag?null==(i=a.dataSource.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId)):{};1===e.mainRiskFlag&&(s=e),l.riskIsInsure[e.riskId]={selected:"2",data:null,relation:t,isMust:!1}})),s){const e=null==(i=a.dataSource.productRiskRelationVOList)?void 0:i.filter((e=>e.riskId===s.riskId));if(!e)return;null==e||e.forEach((e=>{var i,s,n,r,d,u,c,p,v;if(2===e.collocationType){l.riskIsInsure[e.collocationRiskId].selected="1",l.riskIsInsure[e.collocationRiskId].isMust=!0;const m=null==(i=a.dataSource.insureProductRiskVOList)?void 0:i.find((i=>e.collocationRiskId===i.riskId));if(m&&1!==m.factorDisPlayFlag&&(null==(s=null==m?void 0:m.productRiskInsureLimitVO)?void 0:s.amountPremiumConfigVO)){const i=null==(n=m.riskLiabilityInfoVOList)?void 0:n.every((e=>1!==e.showFlag)),a=null==(r=null==m?void 0:m.productRiskInsureLimitVO)?void 0:r.amountPremiumConfigVO;if(i){l.riskIsInsure[e.collocationRiskId].isDisabled=!0;const i={riskCategory:m.riskCategory,riskCode:m.riskCode,riskName:m.riskName,riskId:m.riskId,riskType:m.riskType,mainRiskId:m.mainRiskId,mainRiskCode:m.mainRiskCode,liabilityVOList:t(m)};i.chargePeriod=(null==(d=null==m?void 0:m.paymentPeriodValueList)?void 0:d.length)>0&&(null==m?void 0:m.paymentPeriodValueList[0].code)||null,i.coveragePeriod=(null==(u=null==m?void 0:m.insurancePeriodValueList)?void 0:u.length)>0&&(null==m?void 0:m.insurancePeriodValueList[0].code)||null,i.paymentFrequency=(null==(c=null==m?void 0:m.paymentFrequencyList)?void 0:c.length)>0&&(null==m?void 0:m.paymentFrequencyList[0].code)||null;let s=0;1===a.displayType?s=(null==a?void 0:a.minStepValue)>0?null==a?void 0:a.minStepValue:0:3===a.displayType&&2===a.requireCopies?s=(null==(p=null==a?void 0:a.displayValues)?void 0:p.length)>0?null==a?void 0:a.displayValues[0].value:0:3===a.displayType&&1===a.requireCopies?(s=(null==(v=null==a?void 0:a.displayValues)?void 0:v.length)>0?null==a?void 0:a.displayValues[0].value:0,i.copy=a.minCopiesValue):2===a.displayType&&(i.copy=a.minCopiesValue),1===a.saleMethod?i.amount=s:i.premium=s,l.disabledRiskInfo.push(i),o(i,m.riskId)}}}3===e.collocationType&&(l.riskIsInsure[e.collocationRiskId].selected="2",l.riskIsInsure[e.collocationRiskId].isMust=!0)}))}})()})),I((()=>{l.loading=!0})),n((()=>l.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),(i,a)=>{const s=de,t=y;return r(!0),d(p,null,v(e.dataSource.insureProductRiskVOList,(i=>(r(),d(p,{key:i.riskCode},[(!e.showMainRisk&&1!==i.mainRiskFlag||e.showMainRisk)&&c(l).riskIsInsure[i.riskId].relation?(r(),d("div",Ie,[u(t,{modelValue:c(l).riskIsInsure[i.riskId].selected,"onUpdate:modelValue":e=>c(l).riskIsInsure[i.riskId].selected=e,label:i.riskName,name:"selected","label-width":"50%",border:!1,class:"risk-select-field risk-name"},{input:f((()=>[u(s,{modelValue:c(l).riskIsInsure[i.riskId].selected,"onUpdate:modelValue":e=>c(l).riskIsInsure[i.riskId].selected=e,"active-value":"1","inactive-value":"2",size:"26px",disabled:c(l).riskIsInsure[i.riskId].isMust,style:{"margin-right":"8px"},onChange:e=>m(e,i)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"]),"1"===c(l).riskIsInsure[i.riskId].selected?(r(),d("div",fe,[u(te,{modelValue:c(l).riskIsInsure[i.riskId].data,"onUpdate:modelValue":e=>c(l).riskIsInsure[i.riskId].data=e,"origin-data":i,"product-factor":e.dataSource.productFactor,onTrialChange:e=>o(e,i.riskId)},null,8,["modelValue","onUpdate:modelValue","origin-data","product-factor","onTrialChange"])])):h("",!0)])):h("",!0)],64)))),128)}}}),[["__scopeId","data-v-5e1ba7fc"]]);const ye={class:"benefit-table"},Ve=i({__name:"Table",props:{dataSource:null},setup(e){const i=e,a=t((()=>{const e=i.dataSource.headers.length,a=12*i.dataSource.headers.join("").length+20*i.dataSource.headers.length;return i.dataSource.headers.map(((i,l)=>{const s=a>320?12*i.length+20:Math.max(12*i.length+20,320/e);return console.log("totalWordWidth:",a,"titleWidth:",s,"word-width:",12*i.length+20),{title:i,key:`header_${l}`,fixed:l<2,minWidth:s}}))})),l=t((()=>i.dataSource.dataList.map((e=>{const i={};return e.forEach(((e,a)=>{i[`header_${a}`]=e})),i}))));return I((()=>{})),(e,i)=>(r(),d("div",ye,[u(me,{"top-height":400,columns:c(a),data:c(l),"is-clone":!0},null,8,["columns","data"])]))}});const ge=e=>(w("data-v-2cf800e4"),e=e(),P(),e),Oe={key:0,class:"benefit-container"},be={key:0,class:"benefit"},Ce=ge((()=>g("div",{class:"line"},null,-1))),Re={class:"box-title box-title-chart"},Le=ge((()=>g("img",{class:"tl",src:pe,alt:""},null,-1))),_e=ge((()=>g("img",{class:"transform-z180 tr",src:pe,alt:""},null,-1))),Se={key:0},Te={class:"box"},xe={class:"box-title"},we=ge((()=>g("img",{class:"tl",src:pe,alt:""},null,-1))),Pe=ge((()=>g("img",{class:"transform-z180 tr",src:pe,alt:""},null,-1))),Fe={class:"box-price"},je={class:"text1"},De={class:"text2"},Ne={key:1},Ee={key:2,style:{width:"100%, minWidth: 338px"}},Ae={class:"slider"},Ue={style:{flex:"1",margin:"0px 5px"}},qe={class:"custom-button"},Be=ge((()=>g("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Me={class:"btn-two"},He={key:1};var Ke=e(i({__name:"index",props:{dataSource:{default:()=>({showTypeList:["1"]})}},setup(e){var i;const a=e,s="1",t="2",o="3",k=l(0),I=l(0),y=l(0),w=l(),P=l(0),F=l(null==(i=a.dataSource.showTypeList)?void 0:i[0]),j=l(),D=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const i=null==e?void 0:e.benefitRiskResultVOList[k.value];I.value=i.ageBegin+1,P.value=i.ageBegin+1,y.value=i.ageEnd},N=()=>{var e,i,l,s,t,o;const n=null==(i=null==(e=a.dataSource)?void 0:e.benefitRiskResultVOList)?void 0:i[k.value];j.value=null==(t=null==(s=null==(l=a.dataSource)?void 0:l.benefitRiskResultVOList)?void 0:s[k.value].benefitRiskTableResultVOList)?void 0:t[0];const{a:r,year:d}=((e,i)=>{const a=[],l=[];for(let s=e,t=0;s<=i;s++,t++)a.push(s.toString()),l.push(t+1);return{a:a,year:l}})(I.value,y.value),u={index:r.indexOf(P.value.toString()),age:r,year:d,result:null==(o=null==n?void 0:n.benefitRiskItemResultVOList)?void 0:o[0]};w.value=u},E=()=>{P.value>y.value-1||(P.value+=1,N())},A=()=>{P.value>I.value&&(P.value-=1,N())},U=e=>{k.value=e.name,D(a.dataSource),N()};return n((()=>a.dataSource),(e=>{var i;e&&(D(e),N(),F.value=null==(i=e.showTypeList)?void 0:i[0])}),{deep:!0,immediate:!0}),n(P,(()=>{N()})),(i,l)=>{var n;const D=_,N=ce,q=S,B=T,M=x,H=ue;return(null==(n=e.dataSource)?void 0:n.benefitRiskResultVOList)?(r(),d("div",Oe,[u(M,{active:c(k),onClickTab:U},{default:f((()=>{var e;return[(r(!0),d(p,null,v(null==(e=a.dataSource)?void 0:e.benefitRiskResultVOList,((e,i)=>(r(),m(B,{key:i,name:i,title:e.riskName},{default:f((()=>{var e,n,_,S,T,x,U,B,M,H,K,z,G,W,Y,$;return[i==c(k)?(r(),d("div",be,[Ce,V(g("p",Re,[Le,O(" 保单年度"),g("span",null,b(null==(_=null==(e=c(w))?void 0:e.year)?void 0:_[null==(n=c(w))?void 0:n.index]),1),O("年度，被保人"),g("span",null,b(null==(x=null==(S=c(w))?void 0:S.age)?void 0:x[null==(T=c(w))?void 0:T.index]),1),O("岁时 "),_e],512),[[C,c(F)===t]]),c(F)===s?(r(),d("div",Se,[g("div",Te,[g("p",xe,[we,O(" 保单年度"),g("span",null,b(null==(M=null==(U=c(w))?void 0:U.year)?void 0:M[null==(B=c(w))?void 0:B.index]),1),O("年度，被保人"),g("span",null,b(null==(z=null==(H=c(w))?void 0:H.age)?void 0:z[null==(K=c(w))?void 0:K.index]),1),O("岁时 "),Pe]),g("div",Fe,[(r(!0),d(p,null,v(null==(W=null==(G=c(w))?void 0:G.result)?void 0:W.headers,((e,i)=>{var a,l,s,t,o,n,u,p,v,m;return r(),d("div",{key:i,style:{width:"33%"}},[g("p",je,b("0"==(null==(o=null==(t=null==(l=null==(a=c(w))?void 0:a.result)?void 0:l.dataList)?void 0:t[null==(s=c(w))?void 0:s.index])?void 0:o[i])?"0":c(R)(Number(null==(m=null==(v=null==(u=null==(n=c(w))?void 0:n.result)?void 0:u.dataList)?void 0:v[null==(p=c(w))?void 0:p.index])?void 0:m[i]))),1),g("p",De,b(e)+"(元）",1)])})),128))])])])):h("",!0),c(F)===o?(r(),d("div",Ne,[u(Ve,{"data-source":c(j)},null,8,["data-source"])])):h("",!0),c(F)==t?(r(),d("div",Ee,[u(ve,{min:c(I),max:c(y),current:c(P),data:null==($=null==(Y=c(w))?void 0:Y.result)?void 0:$.benefitRiskItemList},null,8,["min","max","current","data"])])):h("",!0),c(F)!=o?(r(),d(p,{key:3},[g("div",Ae,[g("div",{class:"opt lf",onClick:A},[u(D,{name:"minus"})]),g("div",Ue,[c(I)?(r(),m(N,{key:0,modelValue:c(P),"onUpdate:modelValue":l[0]||(l[0]=e=>L(P)?P.value=e:null),min:c(I),max:c(y),"bar-height":"8px"},{button:f((()=>[g("div",qe,b(c(P))+" 岁",1)])),_:1},8,["modelValue","min","max"])):h("",!0)]),g("div",{class:"opt rg",onClick:E},[u(D,{name:"plus"})])]),Be],64)):h("",!0),g("div",Me,[a.dataSource.showTypeList.includes(s)?(r(),m(q,{key:0,round:"",plain:c(F)!==s,type:"primary",class:"btn",onClick:l[1]||(l[1]=e=>F.value=s)},{default:f((()=>[O("图表展示")])),_:1},8,["plain"])):h("",!0),a.dataSource.showTypeList.includes(t)?(r(),m(q,{key:1,round:"",plain:c(F)!==t,type:"primary",class:"btn",onClick:l[2]||(l[2]=e=>F.value=t)},{default:f((()=>[O("趋势展示")])),_:1},8,["plain"])):h("",!0),a.dataSource.showTypeList.includes(o)?(r(),m(q,{key:2,round:"",plain:c(F)!==o,type:"primary",class:"btn",onClick:l[3]||(l[3]=e=>F.value=o)},{default:f((()=>[O("表格展示")])),_:1},8,["plain"])):h("",!0)])])):h("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])):(r(),d("div",He,[u(H,{title:"试算前请完善投保信息","empty-class":"empty-select"})]))}}}),[["__scopeId","data-v-2cf800e4"]]);const ze=e=>(w("data-v-d968e71c"),e=e(),P(),e),Ge={class:"trial-button"},We={class:"com-body"},Ye={class:"header"},$e=ze((()=>g("span",null,"算一算保费",-1))),Je={class:"container"},Xe=ze((()=>g("div",{class:"empty"},null,-1)));var Ze=e(i({__name:"index",props:{dataSource:{type:Array,default:()=>[]},productInfo:{type:Object,default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:""})},shareInfo:{type:Object,default:()=>{}},tenantProductDetail:{type:Object,default:()=>{}}},setup(e,{expose:i}){const a=e,t=l(null),o=s({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResult:0,isAniShow:!1}),v=()=>{var e;null==(e=t.value)||e.validate().then((()=>{console.log("---- validate success ----")})),o.loading=!1,o.show=!0,o.isAniShow=!0},y=()=>{o.show=!1,o.loading=!1},V=l({});l({tenantId:"9991000007",productCode:"BDFZCHUN",holder:{personVO:{extInfo:{},certType:"1",name:"春春",certNo:"320682199503303592",gender:"2",birthday:"1995-03-30",mobile:"13262279098",verificationCode:"123456"}},insuredVOList:[{insuredCode:"",relationToHolder:"1",personVO:{extInfo:{hasSocialInsurance:"1"},relationToHolder:"1",certType:"1",name:"春春",certNo:"320682199503303592",gender:"2",birthday:"1995-03-30",mobile:"13262279098",verificationCode:"123456",socialFlag:"1"},productPlanVOList:[{insurerCode:"zhongan",planCode:"",riskVOList:[{amount:"6000000",chargePeriod:"year_5",copy:1,coveragePeriod:"to_68",paymentFrequency:"2",riskCategory:4,riskCode:"CBE00CHUN",riskName:"(勿动)利益演示测试",riskId:10325,riskType:1}]}]}]});const b=()=>{var e,i;o.riskIsInsure={},null==(i=null==(e=null==a?void 0:a.dataSource)?void 0:e.insureProductRiskVOList)||i.forEach((e=>{var i;const l=null==(i=a.dataSource.productRiskRelationVOList)?void 0:i.find((i=>i.collocationRiskId===e.riskId));l&&(o.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:l})}))},C=e=>{var i,l,s,t;const n=null==(i=a.dataSource.insureProductRiskVOList)?void 0:i.find((i=>e.riskId===i.riskId));if(n&&1!==n.mainRiskFlag){const i=null==(s=null==(l=a.dataSource)?void 0:l.productRiskRelationVOList)?void 0:s.find((e=>e.collocationRiskId===n.riskId));if(i){const a=null==(t=o.riskVOList)?void 0:t.find((e=>e.riskId===i.riskId));oe.forEach((i=>{i.ruleKey&&n.productRiskInsureLimitVO&&a&&(1===n.productRiskInsureLimitVO[i.ruleKey]&&(e[i.valueKey]=a[i.valueKey]),3===n.productRiskInsureLimitVO[i.ruleKey]&&(e[i.valueKey]=((e,i,a)=>{var l,s,t,o;const n=e,{holder:r}=a,d=a.insuredVOList[0],u=(i||"").split("_");if(u[1]-=1,1===n.exemptFlag){if("to"===u[0]){let e=0;1===n.exemptType?(null==(l=null==r?void 0:r.personVO)?void 0:l.birthday)&&(e=parseInt(""+((new Date).getTime()-new Date(null==(s=r.personVO)?void 0:s.birthday).getTime())/31536e6,10)):2===n.exemptType&&(null==(t=null==d?void 0:d.personVO)?void 0:t.birthday)&&(e=parseInt(""+(+(new Date).getTime()-new Date(null==(o=d.personVO)?void 0:o.birthday).getTime())/31536e6,10)),u[1]=+u[1]-e}u[0]="year"}return u.join("_")})(n,a[i.valueKey],o.submitData)))}))}}return e},R=se.exports.debounce((()=>{o.ifPersonalInfoSuccess&&(o.submitData.productCode=a.productInfo.productCode,o.submitData.tenantId=a.productInfo.tenantId,o.riskVOList=o.riskVOList.map((e=>C(e))),o.submitData.insuredVOList[0].productPlanVOList=[{insurerCode:a.productInfo.insurerCode,planCode:a.dataSource.planCode,riskVOList:o.riskVOList}],console.log(">>>数据构建<<<",o.submitData),o.trialMsg="试算中...",o.trialResult=0,o.loading=!0,G(o.submitData).then((e=>{var i,a;e.data&&e.code===F&&((null==(i=null==e?void 0:e.data)?void 0:i.errorInfo)&&j(`${null==(a=null==e?void 0:e.data)?void 0:a.errorInfo}`),o.trialMsg="",o.trialResult=e.data.premium)})).finally((()=>{o.loading=!1})),W(o.submitData).then((e=>{e.data&&e.code===F&&(V.value=e.data)})).finally((()=>{o.loading=!1})))}),300),L=e=>{const{holder:i,insuredVOList:a}=e;i&&(o.submitData.holder={personVO:{...i,socialFlag:i.hasSocialInsurance}}),a&&a.length>0&&a.forEach(((e,i)=>{o.submitData.insuredVOList&&o.submitData.insuredVOList.length>i?o.submitData.insuredVOList[i].personVO={...e.personVO,socialFlag:e.personVO.hasSocialInsurance}:o.submitData.insuredVOList=[{personVO:{...e.personVO,socialFlag:e.personVO.hasSocialInsurance}}]})),o.ifPersonalInfoSuccess=!0,console.log("投被保人的信息回传 ",o.submitData,e),R()},_=e=>{o.mainRiskVO=e,o.riskVOList.length>0&&(o.riskVOList[0]=e),console.log("标准险种的信息回传",e),R()},T=e=>{o.riskVOList=[o.mainRiskVO,...e],console.log("附加险列表数据回传",e),R()},x=()=>{console.log("--after"),o.isAniShow=!1};return k((()=>{b()})),I((()=>{o.loading=!0})),n((()=>o.show),(e=>{e&&(console.log("---reset"),o.select={},o.list=[],o.userData={},o.riskIsInsure={},o.submitData={},o.riskVOList=[{}],o.mainRiskVO={},o.ifPersonalInfoSuccess=!1,o.trialMsg="",o.trialResult=0,b())})),i({open:()=>{o.show=!0,o.isAniShow=!0}}),n((()=>o.riskIsInsure),(e=>{}),{deep:!0,immediate:!0}),(i,l)=>{const s=S,n=D,k=N;return r(),d(p,null,[g("div",Ge,[u(s,{type:"primary",onClick:l[0]||(l[0]=e=>c(o).show=!0)},{default:f((()=>[O("立即投保")])),_:1})]),c(o).isAniShow||c(o).show?(r(),m(k,{key:0,class:"com-trial-wrap",show:c(o).show,closeable:!1,onClose:y,onClosed:x},{default:f((()=>{var i;return[g("div",We,[g("div",Ye,[$e,u(n,{name:"cross",onClick:l[1]||(l[1]=e=>c(o).show=!1)})]),g("div",Je,[u(Ke,{"data-source":V.value,"show-type-list":V.value.showTypList},null,8,["data-source","show-type-list"]),e.dataSource.productFactor?(r(),m(c(ke),{key:0,ref:"personalInfoRef",modelValue:c(o).userData,"onUpdate:modelValue":l[2]||(l[2]=e=>c(o).userData=e),"product-factor":e.dataSource.productFactor,onTrailChange:L},null,8,["modelValue","product-factor"])):h("",!0),u(te,{ref_key:"insureInfosRef",ref:t,"origin-data":null==(i=e.dataSource.insureProductRiskVOList)?void 0:i[0],"product-factor":e.dataSource.productFactor,onTrialChange:_},null,8,["origin-data","product-factor"]),u(he,{"data-source":e.dataSource,"show-main-risk":!1,onTrialChange:T},null,8,["data-source"]),Xe]),u(Z,{"is-share":e.shareInfo.isShare,premium:c(o).trialResult,"share-info":e.shareInfo,"loading-text":c(o).trialMsg,"plan-code":a.dataSource.planCode,"payment-frequency":c(o).mainRiskVO.paymentFrequency+"","tenant-product-detail":e.tenantProductDetail,onClick:v},{default:f((()=>[O("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])])]})),_:1},8,["show"])):h("",!0)],64)}}}),[["__scopeId","data-v-d968e71c"]]);const Qe={key:0},ei={key:1,class:"page-internet-product-detail","data-skeleton-root":"LONG"},ii={class:"info"},ai={key:1,class:"preview-placeholder"},li=g("br",null,null,-1),si=g("div",{id:"insureButton"},null,-1),ti=g("div",{id:"xinaoDialog"},null,-1),oi=i({__name:"index",setup(e){const i=E((()=>A((()=>import("./index-e2f16364.js")),["static/js/index-e2f16364.js","static/css/index-fa4edf2a.css","static/js/index-0fe7bae3.js","static/css/index-3c0adaf7.css","static/js/pdfh5-008ca364.js","static/js/theme-65292714.js","static/js/index-a37e1c9e.js","static/css/index-85f26bb0.css","static/js/utils-6b171a58.js","static/js/infoCollection-c0331be0.js","static/js/trial-84736b54.js"]))),s=E((()=>A((()=>import("./index-b1f076e2.js")),["static/js/index-b1f076e2.js","static/css/index-dc37224c.css","static/js/index-0fe7bae3.js","static/css/index-3c0adaf7.css","static/js/pdfh5-008ca364.js"]))),o=E((()=>A((()=>import("./index-81e10377.js")),["static/js/index-81e10377.js","static/css/index-b9ba3011.css","static/js/index-0fe7bae3.js","static/css/index-3c0adaf7.css","static/js/pdfh5-008ca364.js"])));U();const v=a(),{productCode:k="",tenantId:y,agentCode:V="",agencyCode:b,saleChannelId:C,extraInfo:R,insurerCode:_,preview:S,trialPreview:T}=v.query;let x={};try{console.log("extInfo",decodeURIComponent(R)),x=JSON.parse(decodeURIComponent(R))}catch(Ce){}l();const w=l(),P=l(),F=l(!1),j=l({}),D=l({}),N=l(!1),G=l(0),W=l(!1);l({});const Z=l(!0);l(!0);const se=l(!0),te=l(""),oe=l({}),ne=l({}),re=l([]),de=l({imgUrl:"",desc:"",title:"",link:window.location.href,isShare:!1}),ue=l({});t((()=>!!S||!!T));const ce=t((()=>!!T)),pe=l(),ve=()=>{pe.value.open()},me=l([]),ke=l(),Ie=async()=>{!ce.value&&$({productCode:k,tenantId:y,isTenant:!S}).then((({data:e,code:i})=>{if("10000"===i){j.value=e,document.title=e.BASIC_INFO.title||"";const{title:i,desc:l,image:s}=(null==e?void 0:e.PRODUCT_LIST.wxShareConfig)||{},[t=""]=s||[];a={title:i,desc:l,image:t,isShare:!!(null==e?void 0:e.PRODUCT_LIST.showWXShare)},de.value={desc:a.desc||"你好，这里是描述",imgUrl:a.image,title:a.title,link:window.location.href,isShare:a.isShare},console.log("shareInfo",de.value),H(e.BASIC_INFO.themeType)}var a})),await Y({productCode:k,isTenant:!S||!T}).then((({data:e,code:i})=>{var a;"10000"===i&&(F.value=!0,W.value=!0,D.value=e,oe.value=null==(a=e.productPlanInsureVOList)?void 0:a[0],re.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),se.value=!1,J({productCode:k}).then((({code:e,data:i})=>{var a,l,s,t;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:o}=i;ke.value=e||[];const{basicInfo:{questionnaireType:n},questions:r,questionnaireName:d}=(null==(a=null==o?void 0:o[0])?void 0:a.questionnaireDetailResponseVO)||{basicInfo:{}};2===n&&(me.value=[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]),me.value=[{attachmentName:d,attachmentUri:null==(l=null==r?void 0:r[0])?void 0:l.content,attachmentType:le(String(null==(s=null==r?void 0:r[0])?void 0:s.textType),null==(t=null==r?void 0:r[0])?void 0:t.content)}]}}))};n((()=>ue.value.planCode),(e=>{oe.value=(D.value.productPlanInsureVOList||[]).find((i=>i.planCode===e))}));const fe=()=>{w.value.handleClickTab()("insureButton")};l(""),l(0);const{fileList:he,mustReadFileCount:ye,popupFileList:Ve}=Q(oe,ke),ge=e=>{oe.value=(D.value.productPlanInsureVOList||[]).find((i=>i.planCode===e))},Oe=()=>{N.value=!1,Z.value=!0},be=()=>{N.value=!1,Z.value=!0};return n((()=>oe.value),(()=>{const{planCode:e,oilPackageProductVOList:i,insureProductRiskVOList:a}=oe.value;ue.value.planCode=e,ne.value=(a||[]).find((e=>e.mainRiskFlag===q.YES))}),{deep:!0,immediate:!0}),B((()=>{K(P,(([{isIntersecting:e}],i)=>{F.value=!0}))})),I((()=>{se.value=!0,Ie(),setTimeout((async()=>{te.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{var l,t,n,v,k,I,V,b,C,R,S,T,x;const E=M("Video"),A=z;return r(),d(p,null,[c(se)?(r(),d("div",Qe)):(r(),d("div",ei,[c(ce)?(r(),d("div",ai,[O("当前页面仅用于保费试算预览"),li,O("不展示其他产品相关配置信息")])):(r(),d(p,{key:0},[g("div",ii,[(null==(t=null==(l=c(j))?void 0:l.BASIC_INFO)?void 0:t.banner.length)?(r(),m(X,{key:0,"data-skeleton-type":"img",url:null==(n=c(j))?void 0:n.BASIC_INFO.banner[0]},null,8,["url"])):h("",!0),(null==(k=null==(v=c(j))?void 0:v.BASIC_INFO)?void 0:k.video.length)?(r(),m(E,{key:1,"data-skeleton-type":"img",src:null==(I=c(j))?void 0:I.BASIC_INFO.video[0]},null,8,["src"])):h("",!0),(null==(C=null==(b=null==(V=c(j))?void 0:V.BASIC_INFO)?void 0:b.bannerMove)?void 0:C.length)?(r(),m(X,{key:2,url:null==(T=null==(S=null==(R=c(j))?void 0:R.BASIC_INFO)?void 0:S.bannerMove)?void 0:T[0],onClick:fe},null,8,["url"])):h("",!0),g("div",{ref_key:"observeRef",ref:P},null,512)]),(null==(x=c(j))?void 0:x.GUARANTEE)?(r(),m(ee,{key:0,"show-service-config":"","data-source":c(j),"plan-list":c(re),onUpdateActivePlan:ge},null,8,["data-source","plan-list"])):h("",!0),g("div",{class:"trial-text-btn",onClick:ve},"算一算保费"),u(ie,{ref_key:"detailScrollRef",ref:w,"data-source":c(j)},null,8,["data-source"]),u(A,null,{default:f((()=>{var e,i,a;return[(null==(e=c(j).SIGNATURE)?void 0:e.inscribedContent)?(r(),m(c(s),{key:0,"inscribed-content":null==(a=null==(i=c(j))?void 0:i.SIGNATURE)?void 0:a.inscribedContent},null,8,["inscribed-content"])):h("",!0)]})),_:1}),u(A,null,{default:f((()=>{var e;return[(null==(e=c(he))?void 0:e.length)?(r(),m(c(o),{key:0,"attachement-list":c(he),"pre-text":"请阅读",onPreviewFile:a[0]||(a[0]=e=>(e=>{G.value=e,N.value=!0})(e))},null,8,["attachement-list"])):h("",!0)]})),_:1})],64)),c(F)?(r(),m(Ze,{key:2,ref_key:"trialRef",ref:pe,"data-source":c(oe),"share-info":c(de),"product-info":{productCode:c(D).productCode,productName:c(D).productName,productId:"",tenantId:c(y),insurerCode:c(_)},"tenant-product-detail":c(j)},null,8,["data-source","share-info","product-info","tenant-product-detail"])):h("",!0),si])),c(W)&&!c(ce)?(r(),m(ae,{key:2,"product-detail":c(j)},null,8,["product-detail"])):h("",!0),ti,c(N)?(r(),m(c(i),{key:3,show:c(N),"onUpdate:show":a[1]||(a[1]=e=>L(N)?N.value=e:null),"content-list":c(Z)?c(he):c(Ve),"is-only-view":c(Z),"active-index":c(G),text:c(Z)?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":c(Z)?0:c(ye),onSubmit:Oe,onOnCloseFilePreviewByMask:be},null,8,["show","content-list","is-only-view","active-index","text","force-read-cound"])):h("",!0)],64)}}});export{oi as default};
