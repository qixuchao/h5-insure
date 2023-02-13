import{_ as e,d as t,r as n,ac as a,b as r,c as i,e as o,w as d,j as s,f as l,g as u,X as c,h as f,F as p,i as m,t as I,n as v,Y as O,u as y,a as L,G as C,z as b,x as h,an as x,O as g,k as E,a0 as P,p as T,a7 as V,a8 as R,N as k,T as A,C as _,D as H}from"./index-e3df8bbc.js";import{p as N}from"./trial-19927f5f.js";import{P as B,I as j,R as D}from"./trial-8d531ce5.js";import{u as w}from"./useDicData-0dc108e0.js";import{R as S,a as U,B as F,b as Y}from"./infoCollection-4bad8932.js";import{_ as q}from"./index-7f454ff6.js";import"./pdfh5-008ca364.js";import"./relativeTime-fde2a46e.js";const M={class:"com-select-container"},$={class:"radio-item-wrapper"},G={class:"name"},z={class:"hone"},K={class:"address"},W={class:"footer-button"};var X=e(t({__name:"index",props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const y=e,L=n(y.modelValue),C=n(y.show),b=()=>{t("submit",L.value),C.value=!1},h=()=>{t("close")};return a((()=>y.modelValue),(e=>{L.value=e})),a((()=>L.value),(e=>{t("update:modelValue",e)})),(t,n)=>{const a=r("van-radio"),y=r("van-radio-group"),x=r("VanButton");return i(),o(O,{show:u(C),"onUpdate:show":n[1]||(n[1]=e=>c(C)?C.value=e:null),class:"com-select",title:"选择保单通讯信息",onClose:h},{default:d((()=>[s("div",M,[l(y,{modelValue:u(L),"onUpdate:modelValue":n[0]||(n[0]=e=>c(L)?L.value=e:null)},{default:d((()=>[(i(!0),f(p,null,m(e.dataSource,((e,t)=>(i(),o(a,{key:t,name:t+1,class:"radio-item"},{default:d((()=>[s("div",$,[s("p",null,[s("span",G,I(e.contactName),1),s("span",z,I(e.contactPhoneNo),1)]),s("p",K,I(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),s("div",W,[l(x,{plain:"",type:"primary"},{default:d((()=>[v("取消")])),_:1}),l(x,{type:"primary",onClick:b},{default:d((()=>[v("确认")])),_:1})])])),_:1},8,["show"])}}}),[["__scopeId","data-v-a821acd4"]]);const J={key:0,class:"beneficiary-part"},Q={class:"part-title"},Z={class:"title"},ee={class:"radio-item-wrapper"},te={class:"name"},ne={class:"hone"},ae={class:"address"},re={class:"footer-button","safe-area-inset-bottom":""},ie={class:"left"},oe={class:"trial-result"},de={class:"result-num"},se=s("div",{class:"result-desc"},"实际保费以后续为准",-1),le={class:"operate-btn"},ue=t({__name:"index",setup(e){const t=y(),O=L(),{templateId:M=1,orderNo:$="2022072710380711215",productCode:G,tenantId:z="9991000007",proposalId:K,insurerCode:W="kunlunhealth"}=O.query,[ue,ce]=C(),fe="/infoPreview"===O.path?"infoPreview":"infoCollection",pe=w("NATIONAL_REGION_CODE"),me=n({}),Ie=n({extInfo:{pageCode:fe},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ve=n(null),Oe=n([]),ye=n([]),Le=n([]),Ce=n([]),be=n([]),he=b({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0}),xe=h((()=>{var e,t,n,a,r,i,o,d,s,l;return[{contactAddress:null==(t=null==(e=Ie.value.tenantOrderHolder)?void 0:e.extInfo)?void 0:t.familyAddress,contactName:Ie.value.tenantOrderHolder.name,contactPhoneNo:Ie.value.tenantOrderHolder.mobile},{contactAddress:null==(a=null==(n=Ie.value.tenantOrderHolder)?void 0:n.extInfo)?void 0:a.workAddress,contactName:Ie.value.tenantOrderHolder.name,contactPhoneNo:Ie.value.tenantOrderHolder.mobile},{contactAddress:null==(i=null==(r=Ie.value.tenantOrderInsuredList[0])?void 0:r.extInfo)?void 0:i.familyAddress,contactName:null==(o=Ie.value.tenantOrderInsuredList[0])?void 0:o.name,contactPhoneNo:null==(d=Ie.value.tenantOrderInsuredList[0])?void 0:d.mobile},{contactAddress:null==(l=null==(s=Ie.value.tenantOrderInsuredList[0])?void 0:s.extInfo)?void 0:l.workAddress,contactName:Ie.value.tenantOrderInsuredList[0].name,contactPhoneNo:Ie.value.tenantOrderInsuredList[0].mobile}].filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))||[]})),ge=h((()=>{var e,t;return he.currentAddress?xe.value[he.currentAddress-1]||{}:(null==(t=null==(e=Ie.value.extInfo)?void 0:e.contactInfo)?void 0:t[0])||{}})),Ee=e=>{const t={};return e.map((e=>{const{initialAmount:n,annuityDrawFrequency:a,annuityDrawType:r,paymentFrequency:i,paymentPeriod:o,paymentPeriodType:d,insurancePeriodType:s,insurancePeriodValue:l,riskCode:u,riskType:c,initialPremium:f,liabilityDetails:p,extInfo:m}=e,{riskId:I,copy:v}=m,O={amount:n,annuityDrawDate:a,annuityDrawType:r,paymentFrequency:i,riskId:I,copy:v,chargePeriod:o?`${B[d]}_${o}`:B[d],coveragePeriod:l?`${j[s]}_${l}`:j[s],riskCode:u,riskType:c,premium:f,liabilityVOList:p.map((e=>({...e,liabilityAttributeValue:e.refundMethod,liabilityAttributeCode:e.refundMethod&&1})))};return c===D.MAIN_RISK?(t.mainRiskCode=u,t.mainRiskId=I):Object.assign(O,t),O}))},Pe=()=>{var e;null==(e=ve.value)||e.validate().then((()=>{const{birthday:e,gender:n,extInfo:a}=Ie.value.tenantOrderHolder,{hasSocialInsurance:r,occupationCodeList:i}=a,{birthday:o,gender:d,extInfo:s,tenantOrderProductList:l}=Ie.value.tenantOrderInsuredList[0],{hasSocialInsurance:u,occupationCodeList:c}=s,f={holder:{personVO:{birthday:P(e).format("YYYY-MM-DD"),gender:n,socialFlag:r,occupationCodeList:i}},productCode:G,insuredVOList:[{insurerCode:W,personVO:{birthday:P(o).format("YYYY-MM-DD"),gender:d,socialFlag:u,occupationCodeList:c},productPlanVOList:[{insurerCode:W,planCode:"",riskVOList:Ee(l[0].tenantOrderRiskList)}]}]};N({...f}).then((({code:e,data:n})=>{if("10000"===e){const e={},a=(t=[])=>{(t||[]).forEach((t=>{var n;e[t.riskCode]=t,(null==(n=t.riskPremiumDetailVOList)?void 0:n.length)&&a(t.riskPremiumDetailVOList)}))};a(n.riskPremiumDetailVOList),Ie.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={...Ie.value.tenantOrderInsuredList[0].tenantOrderProductList[0],premium:n.premium,tenantOrderRiskList:Ie.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((t=>({...t,initialAmount:e[t.riskCode].amount,initialPremium:e[t.riskCode].premium})))},(()=>{var e;const n={...Ie.value};n.extInfo={...n.extInfo,contactInfo:[ge.value],buttonCode:k.infoCollection},n.tenantOrderAttachmentList=[{category:V.OBVERSE_CERT,objectType:R.HOLDER,objectId:Ie.value.tenantOrderHolder.id,name:"投保人证件正面",uri:Oe.value[0],id:Le.value[0]},{category:V.REVERSE_CERT,objectType:R.HOLDER,objectId:Ie.value.tenantOrderHolder.id,name:"投保人证件背面",uri:Oe.value[1],id:Le.value[1]},{category:V.OBVERSE_CERT,objectType:R.INSURED,objectId:Ie.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:ye.value[0]||Oe.value[0],id:Ce.value[1]},{category:V.REVERSE_CERT,objectType:R.INSURED,objectId:Ie.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:ye.value[1]||Oe.value[1],id:Ce.value[1]}].filter((e=>e.uri)),null==(e=ve.value)||e.validate().then((e=>{if(n.tenantOrderInsuredList[0].insuredBeneficiaryType===Y.SPECIFY){const e={};if(n.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((t=>{e[t.benefitOrder]?e[t.benefitOrder].sum+=Number(t.benefitRate):e[t.benefitOrder]={sum:Number(t.benefitRate)}})),Object.values(e).some((e=>100!==e.sum)))return void A.fail("同一顺位的受益人比例之和必须为100")}_(n).then((({code:e,data:n})=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&t.push({path:H[n.pageAction.data.nextPageCode],query:O.query})}))}))})()}}))}))},Te=e=>{},Ve=()=>{he.beneficiaryId+=1,Ie.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:he.beneficiaryId,extInfo:{}})};return x((()=>{T({orderNo:$,tenantId:z}).then((({code:e,data:t})=>{var n,a;if("10000"===e){const e=t;e.extInfo={...e.extInfo,pageCode:fe,templateId:M},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo={...e.tenantOrderHolder.extInfo,occupationCodeList:(null==(n=e.tenantOrderHolder.extInfo)?void 0:n.occupationCodeList)||[]},e.tenantOrderInsuredList[0].extInfo={...e.tenantOrderInsuredList[0].extInfo,occupationCodeList:(null==(a=e.tenantOrderInsuredList[0].extInfo)?void 0:a.occupationCodeList)||[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{var t;const n=e;return n.extInfo={...n.extInfo,occupationCodeList:(null==(t=n.extInfo)?void 0:t.occupationCodeList)||[]},n})),e.tenantOrderAttachmentList.forEach((e=>{e.category===V.OBVERSE_CERT?e.objectType===R.HOLDER?(Oe.value[0]=e.uri,Le.value[0]=e.id):e.objectType===R.INSURED&&(ye.value[0]=e.uri,Ce.value[0]=e.id):e.category===V.REVERSE_CERT&&(e.objectType===R.HOLDER?(Oe.value[1]=e.uri,Le.value[1]=e.id):e.objectType===R.INSURED&&(ye.value[1]=e.uri,Le.value[1]=e.id))})),Object.assign(Ie.value,e)}})).finally((()=>{he.isLoading=!1})),g({pageCode:"infoCollection",templateId:M}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),me.value=e}}))})),a([()=>Ie.value.tenantOrderInsuredList[0].relationToHolder,()=>Ie.value.tenantOrderHolder],(()=>{`${Ie.value.tenantOrderInsuredList[0].relationToHolder}`===S.SELF&&Object.assign(Ie.value.tenantOrderInsuredList[0],Ie.value.tenantOrderHolder,{id:Ie.value.tenantOrderInsuredList[0].id,extInfo:{...Ie.value.tenantOrderHolder.extInfo,insureProvinceCode:Ie.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:Ie.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:Ie.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),(e,t)=>{const n=r("ProCard"),a=r("ProRadioButton"),O=r("ProField"),y=r("ProCascader"),L=r("ProSvg"),C=r("VanButton"),b=r("ProCheckButton"),h=r("van-cell"),x=r("ProForm"),g=r("ProPageWrap");return i(),o(g,{class:"page-info-wrapper"},{default:d((()=>{var e,r,g,P,T;return[u(he).isLoading?E("",!0):(i(),o(x,{key:0,ref_key:"formRef",ref:ve},{default:d((()=>[l(n,{title:"投保人"},{default:d((()=>[l(q,{images:u(Oe),"onUpdate:images":t[0]||(t[0]=e=>c(Oe)?Oe.value=e:null),"form-info":u(Ie).tenantOrderHolder,"factor-list":u(me).HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),l(n,{title:"被保人"},{default:d((()=>[l(O,{modelValue:u(Ie).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>u(Ie).tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:d((()=>[l(a,{modelValue:u(Ie).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>u(Ie).tenantOrderInsuredList[0].relationToHolder=e),options:u(U)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+u(Ie).tenantOrderInsuredList[0].relationToHolder?(i(),o(q,{key:0,images:u(ye),"onUpdate:images":t[3]||(t[3]=e=>c(ye)?ye.value=e:null),"form-info":u(Ie).tenantOrderInsuredList[0],"factor-list":u(me).INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):E("",!0),l(y,{modelValue:u(Ie).tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>u(Ie).tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:u(Ie).tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>u(Ie).tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:u(Ie).tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>u(Ie).tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:u(Ie).tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>u(Ie).tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":u(pe),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),l(n,{title:"受益人"},{default:d((()=>[l(O,{modelValue:u(Ie).tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>u(Ie).tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:d((()=>[l(a,{modelValue:u(Ie).tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>u(Ie).tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:u(F)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==u(Ie).tenantOrderInsuredList[0].insuredBeneficiaryType?(i(),f("div",J,[(i(!0),f(p,null,m(u(Ie).tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,n)=>(i(),f("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[s("div",Q,[s("span",Z,I(`受益人${n+1}`),1),l(L,{name:"delete",onClick:t=>{return n=e,void(Ie.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=Ie.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==n.beneficiaryId||n.id!==e.id)));var n}},{default:d((()=>[v("删除")])),_:2},1032,["onClick"])]),l(q,{images:u(be),"onUpdate:images":t[10]||(t[10]=e=>c(be)?be.value=e:null),"form-info":e,"factor-list":u(me).BENEFICIARY||[],prefix:`beneficiary-${n}`,"beneficiary-list":u(Ie).tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),l(C,{onClick:Ve},{default:d((()=>[v("+添加受益人")])),_:1})])):E("",!0)])),_:1}),l(n,{title:"保单通讯信息"},{default:d((()=>{var e;return[(null==(e=Object.keys(u(ge)))?void 0:e.length)?(i(),o(h,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>u(ce)(!0))},{title:d((()=>[s("div",ee,[s("p",null,[s("span",te,I(u(ge).contactName),1),s("span",ne,I(u(ge).contactPhoneNo),1)]),s("p",ae,I(u(ge).contactAddress),1)])])),_:1})):(i(),o(b,{key:0,activated:"",onClick:t[11]||(t[11]=e=>u(ce)(!0))},{default:d((()=>[v("选择保单通讯信息")])),_:1}))]})),_:1})])),_:1},512)),s("div",re,[s("div",ie,[s("div",oe,[v(" 首期"),s("span",de,"￥"+I(null==(T=null==(P=null==(g=null==(r=null==(e=u(Ie).tenantOrderInsuredList)?void 0:e[0])?void 0:r.tenantOrderProductList)?void 0:g[0].premium)?void 0:P.toLocaleString)?void 0:T.call(P)),1)]),se]),s("div",le,[l(C,{block:"",type:"primary",onClick:Pe},{default:d((()=>[v("下一步")])),_:1})])]),u(ue)?(i(),o(X,{key:1,modelValue:u(he).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>u(he).currentAddress=e),show:u(ue),"data-source":u(xe),onSubmit:Te,onClose:t[14]||(t[14]=e=>u(ce)(!1))},null,8,["modelValue","show","data-source"])):E("",!0)]})),_:1})}}});export{ue as default};
