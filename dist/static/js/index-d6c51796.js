import{_ as e,d as t,r as a,a8 as n,b as r,c as i,e as o,w as d,i as l,f as s,g as u,h as c,t as f,F as v,Y as p,n as m,u as I,a as O,H as y,A as L,y as C,ao as b,Q as h,l as g,j as x,a0 as E,p as P,a6 as T,a7 as V,N as R,T as k,D as A,E as H}from"./index-b655107d.js";import{p as _}from"./trial-79b88bf9.js";import{P as N,I as B,R as j}from"./trial-493ad29c.js";import{u as D}from"./useDicData-c0372376.js";import{R as w,a as S,B as U,b as F}from"./infoCollection-751f49fe.js";import{_ as Y}from"./index-0776f329.js";import"./pdfdist-666d4573.js";import"./relativeTime-9600e0e2.js";const q={class:"com-select-container"},M={class:"radio-item-wrapper"},$={class:"name"},G={class:"hone"},K={class:"address"},Q={class:"footer-button"},W=m("取消"),z=m("确认");var J=e(t({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const m=e,I=a(m.modelValue),O=a(m.show),y=()=>{t("submit",I.value),O.value=!1},L=()=>{t("close")};return n((()=>m.modelValue),(e=>{I.value=e})),n((()=>I.value),(e=>{t("update:modelValue",e)})),(t,a)=>{const n=r("van-radio"),m=r("van-radio-group"),C=r("VanButton");return i(),o(p,{show:O.value,"onUpdate:show":a[1]||(a[1]=e=>O.value=e),class:"com-select",title:"选择保单通讯信息",onClose:L},{default:d((()=>[l("div",q,[s(m,{modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]=e=>I.value=e)},{default:d((()=>[(i(!0),u(v,null,c(e.dataSource,((e,t)=>(i(),o(n,{key:t,name:t+1,class:"radio-item"},{default:d((()=>[l("div",M,[l("p",null,[l("span",$,f(e.contactName),1),l("span",G,f(e.contactPhoneNo),1)]),l("p",K,f(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),l("div",Q,[s(C,{plain:"",type:"primary"},{default:d((()=>[W])),_:1}),s(C,{type:"primary",onClick:y},{default:d((()=>[z])),_:1})])])),_:1},8,["show"])}}}),[["__scopeId","data-v-a821acd4"]]);const X={key:0,class:"beneficiary-part"},Z={class:"part-title"},ee={class:"title"},te=m("删除"),ae=m("+添加受益人"),ne=m("选择保单通讯信息"),re={class:"radio-item-wrapper"},ie={class:"name"},oe={class:"hone"},de={class:"address"},le={class:"footer-button","safe-area-inset-bottom":""},se={class:"left"},ue={class:"trial-result"},ce=m(" 首期"),fe={class:"result-num"},ve=l("div",{class:"result-desc"},"实际保费以后续为准",-1),pe={class:"operate-btn"},me=m("下一步"),Ie=t({setup(e){const t=I(),p=O(),{templateId:m=1,orderNo:q="2022072710380711215",productCode:M,tenantId:$="9991000007",proposalId:G,insurerCode:K="kunlunhealth"}=p.query,[Q,W]=y(),z="/infoPreview"===p.path?"infoPreview":"infoCollection",Ie=D("NATIONAL_REGION_CODE"),Oe=a({}),ye=a({extInfo:{pageCode:z},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),Le=a(null),Ce=a([]),be=a([]),he=a([]),ge=a([]),xe=a([]),Ee=L({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0}),Pe=C((()=>{var e,t,a,n,r,i,o,d,l,s;return[{contactAddress:null==(t=null==(e=ye.value.tenantOrderHolder)?void 0:e.extInfo)?void 0:t.familyAddress,contactName:ye.value.tenantOrderHolder.name,contactPhoneNo:ye.value.tenantOrderHolder.mobile},{contactAddress:null==(n=null==(a=ye.value.tenantOrderHolder)?void 0:a.extInfo)?void 0:n.workAddress,contactName:ye.value.tenantOrderHolder.name,contactPhoneNo:ye.value.tenantOrderHolder.mobile},{contactAddress:null==(i=null==(r=ye.value.tenantOrderInsuredList[0])?void 0:r.extInfo)?void 0:i.familyAddress,contactName:null==(o=ye.value.tenantOrderInsuredList[0])?void 0:o.name,contactPhoneNo:null==(d=ye.value.tenantOrderInsuredList[0])?void 0:d.mobile},{contactAddress:null==(s=null==(l=ye.value.tenantOrderInsuredList[0])?void 0:l.extInfo)?void 0:s.workAddress,contactName:ye.value.tenantOrderInsuredList[0].name,contactPhoneNo:ye.value.tenantOrderInsuredList[0].mobile}].filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))||[]})),Te=C((()=>{var e,t;return Ee.currentAddress?Pe.value[Ee.currentAddress-1]||{}:(null==(t=null==(e=ye.value.extInfo)?void 0:e.contactInfo)?void 0:t[0])||{}})),Ve=e=>{const t={};return e.map((e=>{const{initialAmount:a,annuityDrawFrequency:n,annuityDrawType:r,paymentFrequency:i,paymentPeriod:o,paymentPeriodType:d,insurancePeriodType:l,insurancePeriodValue:s,riskCode:u,riskType:c,initialPremium:f,liabilityDetails:v,extInfo:p}=e,{riskId:m,copy:I}=p,O={amount:a,annuityDrawDate:n,annuityDrawType:r,paymentFrequency:i,riskId:m,copy:I,chargePeriod:o?`${N[d]}_${o}`:N[d],coveragePeriod:s?`${B[l]}_${s}`:B[l],riskCode:u,riskType:c,premium:f,liabilityVOList:v.map((e=>({...e,liabilityAttributeValue:e.refundMethod,liabilityAttributeCode:e.refundMethod&&1})))};return c===j.MAIN_RISK?(t.mainRiskCode=u,t.mainRiskId=m):Object.assign(O,t),O}))},Re=()=>{var e;null==(e=Le.value)||e.validate().then((()=>{const{birthday:e,gender:a,extInfo:n}=ye.value.tenantOrderHolder,{hasSocialInsurance:r,occupationCodeList:i}=n,{birthday:o,gender:d,extInfo:l,tenantOrderProductList:s}=ye.value.tenantOrderInsuredList[0],{hasSocialInsurance:u,occupationCodeList:c}=l,f={holder:{personVO:{birthday:E(e).format("YYYY-MM-DD"),gender:a,socialFlag:r,occupationCodeList:i}},productCode:M,insuredVOList:[{insurerCode:K,personVO:{birthday:E(o).format("YYYY-MM-DD"),gender:d,socialFlag:u,occupationCodeList:c},productPlanVOList:[{insurerCode:K,planCode:"",riskVOList:Ve(s[0].tenantOrderRiskList)}]}]};_({...f}).then((({code:e,data:a})=>{if("10000"===e){const e={},n=(t=[])=>{(t||[]).forEach((t=>{var a;e[t.riskCode]=t,(null==(a=t.riskPremiumDetailVOList)?void 0:a.length)&&n(t.riskPremiumDetailVOList)}))};n(a.riskPremiumDetailVOList),ye.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={...ye.value.tenantOrderInsuredList[0].tenantOrderProductList[0],premium:a.premium,tenantOrderRiskList:ye.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((t=>({...t,initialAmount:e[t.riskCode].amount,initialPremium:e[t.riskCode].premium})))},(()=>{var e;const a={...ye.value};a.extInfo={...a.extInfo,contactInfo:[Te.value],buttonCode:R.infoCollection},a.tenantOrderAttachmentList=[{category:T.OBVERSE_CERT,objectType:V.HOLDER,objectId:ye.value.tenantOrderHolder.id,name:"投保人证件正面",uri:Ce.value[0],id:he.value[0]},{category:T.REVERSE_CERT,objectType:V.HOLDER,objectId:ye.value.tenantOrderHolder.id,name:"投保人证件背面",uri:Ce.value[1],id:he.value[1]},{category:T.OBVERSE_CERT,objectType:V.INSURED,objectId:ye.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:be.value[0]||Ce.value[0],id:ge.value[1]},{category:T.REVERSE_CERT,objectType:V.INSURED,objectId:ye.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:be.value[1]||Ce.value[1],id:ge.value[1]}].filter((e=>e.uri)),null==(e=Le.value)||e.validate().then((e=>{if(a.tenantOrderInsuredList[0].insuredBeneficiaryType===F.SPECIFY){const e={};if(a.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((t=>{e[t.benefitOrder]?e[t.benefitOrder].sum+=Number(t.benefitRate):e[t.benefitOrder]={sum:Number(t.benefitRate)}})),Object.values(e).some((e=>100!==e.sum)))return void k.fail("同一顺位的受益人比例之和必须为100")}A(a).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&t.push({path:H[a.pageAction.data.nextPageCode],query:p.query})}))}))})()}}))}))},ke=e=>{},Ae=()=>{Ee.beneficiaryId+=1,ye.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:Ee.beneficiaryId,extInfo:{}})};return b((()=>{P({orderNo:q,tenantId:$}).then((({code:e,data:t})=>{var a,n;if("10000"===e){const e=t;e.extInfo={...e.extInfo,pageCode:z,templateId:m},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo={...e.tenantOrderHolder.extInfo,occupationCodeList:(null==(a=e.tenantOrderHolder.extInfo)?void 0:a.occupationCodeList)||[]},e.tenantOrderInsuredList[0].extInfo={...e.tenantOrderInsuredList[0].extInfo,occupationCodeList:(null==(n=e.tenantOrderInsuredList[0].extInfo)?void 0:n.occupationCodeList)||[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{var t;const a=e;return a.extInfo={...a.extInfo,occupationCodeList:(null==(t=a.extInfo)?void 0:t.occupationCodeList)||[]},a})),e.tenantOrderAttachmentList.forEach((e=>{e.category===T.OBVERSE_CERT?e.objectType===V.HOLDER?(Ce.value[0]=e.uri,he.value[0]=e.id):e.objectType===V.INSURED&&(be.value[0]=e.uri,ge.value[0]=e.id):e.category===T.REVERSE_CERT&&(e.objectType===V.HOLDER?(Ce.value[1]=e.uri,he.value[1]=e.id):e.objectType===V.INSURED&&(be.value[1]=e.uri,he.value[1]=e.id))})),Object.assign(ye.value,e)}})).finally((()=>{Ee.isLoading=!1})),h({pageCode:"infoCollection",templateId:m}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),Oe.value=e}}))})),n([()=>ye.value.tenantOrderInsuredList[0].relationToHolder,()=>ye.value.tenantOrderHolder],(()=>{`${ye.value.tenantOrderInsuredList[0].relationToHolder}`===w.SELF&&Object.assign(ye.value.tenantOrderInsuredList[0],ye.value.tenantOrderHolder,{id:ye.value.tenantOrderInsuredList[0].id,extInfo:{...ye.value.tenantOrderHolder.extInfo,insureProvinceCode:ye.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:ye.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:ye.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),(e,t)=>{const a=r("ProCard"),n=r("ProRadioButton"),p=r("ProField"),m=r("ProCascader"),I=r("ProSvg"),O=r("VanButton"),y=r("ProCheckButton"),L=r("van-cell"),C=r("ProForm"),b=r("ProPageWrap");return i(),o(b,{class:"page-info-wrapper"},{default:d((()=>{var e,r,b,h,E;return[g(Ee).isLoading?x("",!0):(i(),o(C,{key:0,ref_key:"formRef",ref:Le},{default:d((()=>[s(a,{title:"投保人"},{default:d((()=>[s(Y,{images:Ce.value,"onUpdate:images":t[0]||(t[0]=e=>Ce.value=e),"form-info":ye.value.tenantOrderHolder,"factor-list":Oe.value.HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),s(a,{title:"被保人"},{default:d((()=>[s(p,{modelValue:ye.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>ye.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:d((()=>[s(n,{modelValue:ye.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>ye.value.tenantOrderInsuredList[0].relationToHolder=e),options:g(S)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+ye.value.tenantOrderInsuredList[0].relationToHolder?(i(),o(Y,{key:0,images:be.value,"onUpdate:images":t[3]||(t[3]=e=>be.value=e),"form-info":ye.value.tenantOrderInsuredList[0],"factor-list":Oe.value.INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):x("",!0),s(m,{modelValue:ye.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>ye.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:ye.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>ye.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:ye.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>ye.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:ye.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>ye.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":g(Ie),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),s(a,{title:"受益人"},{default:d((()=>[s(p,{modelValue:ye.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>ye.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:d((()=>[s(n,{modelValue:ye.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>ye.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:g(U)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==ye.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(i(),u("div",X,[(i(!0),u(v,null,c(ye.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,a)=>(i(),u("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[l("div",Z,[l("span",ee,f(`受益人${a+1}`),1),s(I,{name:"delete",onClick:t=>{return a=e,void(ye.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=ye.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==a.beneficiaryId||a.id!==e.id)));var a}},{default:d((()=>[te])),_:2},1032,["onClick"])]),s(Y,{images:xe.value,"onUpdate:images":t[10]||(t[10]=e=>xe.value=e),"form-info":e,"factor-list":Oe.value.BENEFICIARY||[],prefix:`beneficiary-${a}`,"beneficiary-list":ye.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),s(O,{onClick:Ae},{default:d((()=>[ae])),_:1})])):x("",!0)])),_:1}),s(a,{title:"保单通讯信息"},{default:d((()=>{var e;return[(null==(e=Object.keys(g(Te)))?void 0:e.length)?(i(),o(L,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>g(W)(!0))},{title:d((()=>[l("div",re,[l("p",null,[l("span",ie,f(g(Te).contactName),1),l("span",oe,f(g(Te).contactPhoneNo),1)]),l("p",de,f(g(Te).contactAddress),1)])])),_:1})):(i(),o(y,{key:0,activated:"",onClick:t[11]||(t[11]=e=>g(W)(!0))},{default:d((()=>[ne])),_:1}))]})),_:1})])),_:1},512)),l("div",le,[l("div",se,[l("div",ue,[ce,l("span",fe,"￥"+f(null==(E=null==(h=null==(b=null==(r=null==(e=ye.value.tenantOrderInsuredList)?void 0:e[0])?void 0:r.tenantOrderProductList)?void 0:b[0].premium)?void 0:h.toLocaleString)?void 0:E.call(h)),1)]),ve]),l("div",pe,[s(O,{block:"",type:"primary",onClick:Re},{default:d((()=>[me])),_:1})])]),g(Q)?(i(),o(J,{key:1,modelValue:g(Ee).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>g(Ee).currentAddress=e),show:g(Q),"data-source":g(Pe),onSubmit:ke,onClose:t[14]||(t[14]=e=>g(W)(!1))},null,8,["modelValue","show","data-source"])):x("",!0)]})),_:1})}}});export{Ie as default};
