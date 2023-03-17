import{_ as e,d as t,r as n,an as a,c as r,e as i,w as d,j as o,f as s,g as l,a7 as u,h as c,F as f,i as p,t as m,n as I,a8 as v,R as O,s as y,B as L,u as C,a as b,S as h,J as x,E,aE as g,$ as T,C as R,b as V,k,ad as A,p as P,ak as _,al as H,P as N,m as j,ap as B,aF as D,V as w,aG as S,au as U,N as F,T as Y,M,O as $}from"./index-4edd55c0.js";import{p as q}from"./trial-fff0defb.js";import{P as G,I as J,R as K}from"./trial-28995c59.js";import{u as W}from"./useDicData-2c9aef1b.js";import{R as z,a as Q,B as X,b as Z}from"./infoCollection-e6c4302a.js";import{_ as ee}from"./index-9620ca78.js";import"./pdfh5-008ca364.js";import"./relativeTime-fde2a46e.js";const te={class:"com-select-container"},ne={class:"radio-item-wrapper"},ae={class:"name"},re={class:"hone"},ie={class:"address"},de={class:"footer-button"};var oe=e(t({__name:"index",props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const C=e,b=n(C.modelValue),h=n(C.show),x=()=>{t("submit",b.value),h.value=!1},E=()=>{t("close")};return a((()=>C.modelValue),(e=>{b.value=e})),a((()=>b.value),(e=>{t("update:modelValue",e)})),(t,n)=>{const a=O,C=y,g=L;return r(),i(v,{show:l(h),"onUpdate:show":n[1]||(n[1]=e=>u(h)?h.value=e:null),class:"com-select",title:"选择保单通讯信息",onClose:E},{default:d((()=>[o("div",te,[s(C,{modelValue:l(b),"onUpdate:modelValue":n[0]||(n[0]=e=>u(b)?b.value=e:null)},{default:d((()=>[(r(!0),c(f,null,p(e.dataSource,((e,t)=>(r(),i(a,{key:t,name:t+1,class:"radio-item"},{default:d((()=>[o("div",ne,[o("p",null,[o("span",ae,m(e.contactName),1),o("span",re,m(e.contactPhoneNo),1)]),o("p",ie,m(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),o("div",de,[s(g,{plain:"",type:"primary"},{default:d((()=>[I("取消")])),_:1}),s(g,{type:"primary",onClick:x},{default:d((()=>[I("确认")])),_:1})])])),_:1},8,["show"])}}}),[["__scopeId","data-v-a821acd4"]]);const se={key:0,class:"beneficiary-part"},le={class:"part-title"},ue={class:"title"},ce={class:"radio-item-wrapper"},fe={class:"name"},pe={class:"hone"},me={class:"address"},Ie={class:"footer-button","safe-area-inset-bottom":""},ve={class:"left"},Oe={class:"trial-result"},ye={class:"result-num"},Le=o("div",{class:"result-desc"},"实际保费以后续为准",-1),Ce={class:"operate-btn"},be=t({__name:"index",setup(e){const t=C(),v=b(),{templateId:O=1,orderNo:y="2022072710380711215",productCode:te,tenantId:ne="9991000007",proposalId:ae,insurerCode:re="kunlunhealth"}=v.query,[ie,de]=h(),be="/infoPreview"===v.path?"infoPreview":"infoCollection",he=W("NATIONAL_REGION_CODE"),xe=n({}),Ee=n({extInfo:{pageCode:be},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ge=n(null),Te=n([]),Re=n([]),Ve=n([]),ke=n([]),Ae=n([]),Pe=x({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0}),_e=E((()=>{var e,t,n,a,r,i,d,o,s,l;return[{contactAddress:null==(t=null==(e=Ee.value.tenantOrderHolder)?void 0:e.extInfo)?void 0:t.familyAddress,contactName:Ee.value.tenantOrderHolder.name,contactPhoneNo:Ee.value.tenantOrderHolder.mobile},{contactAddress:null==(a=null==(n=Ee.value.tenantOrderHolder)?void 0:n.extInfo)?void 0:a.workAddress,contactName:Ee.value.tenantOrderHolder.name,contactPhoneNo:Ee.value.tenantOrderHolder.mobile},{contactAddress:null==(i=null==(r=Ee.value.tenantOrderInsuredList[0])?void 0:r.extInfo)?void 0:i.familyAddress,contactName:null==(d=Ee.value.tenantOrderInsuredList[0])?void 0:d.name,contactPhoneNo:null==(o=Ee.value.tenantOrderInsuredList[0])?void 0:o.mobile},{contactAddress:null==(l=null==(s=Ee.value.tenantOrderInsuredList[0])?void 0:s.extInfo)?void 0:l.workAddress,contactName:Ee.value.tenantOrderInsuredList[0].name,contactPhoneNo:Ee.value.tenantOrderInsuredList[0].mobile}].filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))||[]})),He=E((()=>{var e,t;return Pe.currentAddress?_e.value[Pe.currentAddress-1]||{}:(null==(t=null==(e=Ee.value.extInfo)?void 0:e.contactInfo)?void 0:t[0])||{}})),Ne=e=>{const t={};return e.map((e=>{const{initialAmount:n,annuityDrawFrequency:a,annuityDrawType:r,paymentFrequency:i,paymentPeriod:d,paymentPeriodType:o,insurancePeriodType:s,insurancePeriodValue:l,riskCode:u,riskType:c,initialPremium:f,liabilityDetails:p,extInfo:m}=e,{riskId:I,copy:v}=m,O={amount:n,annuityDrawDate:a,annuityDrawType:r,paymentFrequency:i,riskId:I,copy:v,chargePeriod:d?`${G[o]}_${d}`:G[o],coveragePeriod:l?`${J[s]}_${l}`:J[s],riskCode:u,riskType:c,premium:f,liabilityVOList:p.map((e=>({...e,liabilityAttributeValue:e.refundMethod,liabilityAttributeCode:e.refundMethod&&1})))};return c===K.MAIN_RISK?(t.mainRiskCode=u,t.mainRiskId=I):Object.assign(O,t),O}))},je=()=>{var e;null==(e=ge.value)||e.validate().then((()=>{const{birthday:e,gender:n,extInfo:a}=Ee.value.tenantOrderHolder,{hasSocialInsurance:r,occupationCodeList:i}=a,{birthday:d,gender:o,extInfo:s,tenantOrderProductList:l}=Ee.value.tenantOrderInsuredList[0],{hasSocialInsurance:u,occupationCodeList:c}=s,f={holder:{personVO:{birthday:A(e).format("YYYY-MM-DD"),gender:n,socialFlag:r,occupationCodeList:i}},productCode:te,insuredVOList:[{insurerCode:re,personVO:{birthday:A(d).format("YYYY-MM-DD"),gender:o,socialFlag:u,occupationCodeList:c},productPlanVOList:[{insurerCode:re,planCode:"",riskVOList:Ne(l[0].tenantOrderRiskList)}]}]};q({...f}).then((({code:e,data:n})=>{if("10000"===e){const e={},a=(t=[])=>{(t||[]).forEach((t=>{var n;e[t.riskCode]=t,(null==(n=t.riskPremiumDetailVOList)?void 0:n.length)&&a(t.riskPremiumDetailVOList)}))};a(n.riskPremiumDetailVOList),Ee.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={...Ee.value.tenantOrderInsuredList[0].tenantOrderProductList[0],premium:n.premium,tenantOrderRiskList:Ee.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((t=>({...t,initialAmount:e[t.riskCode].amount,initialPremium:e[t.riskCode].premium})))},(()=>{var e;const n={...Ee.value};n.extInfo={...n.extInfo,contactInfo:[He.value],buttonCode:F.infoCollection},n.tenantOrderAttachmentList=[{category:_.OBVERSE_CERT,objectType:H.HOLDER,objectId:Ee.value.tenantOrderHolder.id,name:"投保人证件正面",uri:Te.value[0],id:Ve.value[0]},{category:_.REVERSE_CERT,objectType:H.HOLDER,objectId:Ee.value.tenantOrderHolder.id,name:"投保人证件背面",uri:Te.value[1],id:Ve.value[1]},{category:_.OBVERSE_CERT,objectType:H.INSURED,objectId:Ee.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:Re.value[0]||Te.value[0],id:ke.value[1]},{category:_.REVERSE_CERT,objectType:H.INSURED,objectId:Ee.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:Re.value[1]||Te.value[1],id:ke.value[1]}].filter((e=>e.uri)),null==(e=ge.value)||e.validate().then((e=>{if(n.tenantOrderInsuredList[0].insuredBeneficiaryType===Z.SPECIFY){const e={};if(n.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((t=>{e[t.benefitOrder]?e[t.benefitOrder].sum+=Number(t.benefitRate):e[t.benefitOrder]={sum:Number(t.benefitRate)}})),Object.values(e).some((e=>100!==e.sum)))return void Y.fail("同一顺位的受益人比例之和必须为100")}M(n).then((({code:e,data:n})=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&t.push({path:$[n.pageAction.data.nextPageCode],query:v.query})}))}))})()}}))}))},Be=e=>{},De=()=>{Pe.beneficiaryId+=1,Ee.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:Pe.beneficiaryId,extInfo:{}})};return g((()=>{P({orderNo:y,tenantId:ne}).then((({code:e,data:t})=>{var n,a;if("10000"===e){const e=t;e.extInfo={...e.extInfo,pageCode:be,templateId:O},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo={...e.tenantOrderHolder.extInfo,occupationCodeList:(null==(n=e.tenantOrderHolder.extInfo)?void 0:n.occupationCodeList)||[]},e.tenantOrderInsuredList[0].extInfo={...e.tenantOrderInsuredList[0].extInfo,occupationCodeList:(null==(a=e.tenantOrderInsuredList[0].extInfo)?void 0:a.occupationCodeList)||[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{var t;const n=e;return n.extInfo={...n.extInfo,occupationCodeList:(null==(t=n.extInfo)?void 0:t.occupationCodeList)||[]},n})),e.tenantOrderAttachmentList.forEach((e=>{e.category===_.OBVERSE_CERT?e.objectType===H.HOLDER?(Te.value[0]=e.uri,Ve.value[0]=e.id):e.objectType===H.INSURED&&(Re.value[0]=e.uri,ke.value[0]=e.id):e.category===_.REVERSE_CERT&&(e.objectType===H.HOLDER?(Te.value[1]=e.uri,Ve.value[1]=e.id):e.objectType===H.INSURED&&(Re.value[1]=e.uri,Ve.value[1]=e.id))})),Object.assign(Ee.value,e)}})).finally((()=>{Pe.isLoading=!1})),T({pageCode:"infoCollection",templateId:O}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),xe.value=e}}))})),a([()=>Ee.value.tenantOrderInsuredList[0].relationToHolder,()=>Ee.value.tenantOrderHolder],(()=>{`${Ee.value.tenantOrderInsuredList[0].relationToHolder}`===z.SELF&&Object.assign(Ee.value.tenantOrderInsuredList[0],Ee.value.tenantOrderHolder,{id:Ee.value.tenantOrderInsuredList[0].id,extInfo:{...Ee.value.tenantOrderHolder.extInfo,insureProvinceCode:Ee.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:Ee.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:Ee.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),(e,t)=>{const n=N,a=j,v=B,O=D,y=w,C=L,b=S,h=R,x=U,E=V("ProPageWrap");return r(),i(E,{class:"page-info-wrapper"},{default:d((()=>{var e,L,E,g,T;return[l(Pe).isLoading?k("",!0):(r(),i(x,{key:0,ref_key:"formRef",ref:ge},{default:d((()=>[s(n,{title:"投保人"},{default:d((()=>[s(ee,{images:l(Te),"onUpdate:images":t[0]||(t[0]=e=>u(Te)?Te.value=e:null),"form-info":l(Ee).tenantOrderHolder,"factor-list":l(xe).HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),s(n,{title:"被保人"},{default:d((()=>[s(v,{modelValue:l(Ee).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>l(Ee).tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:d((()=>[s(a,{modelValue:l(Ee).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>l(Ee).tenantOrderInsuredList[0].relationToHolder=e),options:l(Q)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+l(Ee).tenantOrderInsuredList[0].relationToHolder?(r(),i(ee,{key:0,images:l(Re),"onUpdate:images":t[3]||(t[3]=e=>u(Re)?Re.value=e:null),"form-info":l(Ee).tenantOrderInsuredList[0],"factor-list":l(xe).INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):k("",!0),s(O,{modelValue:l(Ee).tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>l(Ee).tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:l(Ee).tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>l(Ee).tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:l(Ee).tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>l(Ee).tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:l(Ee).tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>l(Ee).tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":l(he),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),s(n,{title:"受益人"},{default:d((()=>[s(v,{modelValue:l(Ee).tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>l(Ee).tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:d((()=>[s(a,{modelValue:l(Ee).tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>l(Ee).tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:l(X)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==l(Ee).tenantOrderInsuredList[0].insuredBeneficiaryType?(r(),c("div",se,[(r(!0),c(f,null,p(l(Ee).tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,n)=>(r(),c("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[o("div",le,[o("span",ue,m(`受益人${n+1}`),1),s(y,{name:"delete",onClick:t=>{return n=e,void(Ee.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=Ee.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==n.beneficiaryId||n.id!==e.id)));var n}},{default:d((()=>[I("删除")])),_:2},1032,["onClick"])]),s(ee,{images:l(Ae),"onUpdate:images":t[10]||(t[10]=e=>u(Ae)?Ae.value=e:null),"form-info":e,"factor-list":l(xe).BENEFICIARY||[],prefix:`beneficiary-${n}`,"beneficiary-list":l(Ee).tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),s(C,{onClick:De},{default:d((()=>[I("+添加受益人")])),_:1})])):k("",!0)])),_:1}),s(n,{title:"保单通讯信息"},{default:d((()=>{var e;return[(null==(e=Object.keys(l(He)))?void 0:e.length)?(r(),i(h,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>l(de)(!0))},{title:d((()=>[o("div",ce,[o("p",null,[o("span",fe,m(l(He).contactName),1),o("span",pe,m(l(He).contactPhoneNo),1)]),o("p",me,m(l(He).contactAddress),1)])])),_:1})):(r(),i(b,{key:0,activated:"",onClick:t[11]||(t[11]=e=>l(de)(!0))},{default:d((()=>[I("选择保单通讯信息")])),_:1}))]})),_:1})])),_:1},512)),o("div",Ie,[o("div",ve,[o("div",Oe,[I(" 首期"),o("span",ye,"￥"+m(null==(T=null==(g=null==(E=null==(L=null==(e=l(Ee).tenantOrderInsuredList)?void 0:e[0])?void 0:L.tenantOrderProductList)?void 0:E[0].premium)?void 0:g.toLocaleString)?void 0:T.call(g)),1)]),Le]),o("div",Ce,[s(C,{block:"",type:"primary",onClick:je},{default:d((()=>[I("下一步")])),_:1})])]),l(ie)?(r(),i(oe,{key:1,modelValue:l(Pe).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>l(Pe).currentAddress=e),show:l(ie),"data-source":l(_e),onSubmit:Be,onClose:t[14]||(t[14]=e=>l(de)(!1))},null,8,["modelValue","show","data-source"])):k("",!0)]})),_:1})}}});export{be as default};
