!function(){var e=document.createElement("style");e.innerHTML=".com-select .com-select-container[data-v-a821acd4]{padding:.4rem}.com-select .com-select-container .radio-item[data-v-a821acd4]{margin:.26667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper[data-v-a821acd4]{padding:0 .42667rem}.com-select .com-select-container .radio-item .radio-item-wrapper p[data-v-a821acd4]{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper .name[data-v-a821acd4]{font-weight:600;margin-right:.4rem}.com-select .com-select-container .radio-item .radio-item-wrapper .phone[data-v-a821acd4]{font-weight:400}.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .left{flex:0 0 50%}.page-info-wrapper .left .trial-result{font-size:.45333rem;color:#393d46}.page-info-wrapper .left .trial-result .result-num{margin-left:.17333rem;color:var(--zaui-price, #ff5840);font-weight:700;margin-left:.21333rem}.page-info-wrapper .left .result-desc{font-size:.32rem;color:#666}.page-info-wrapper .operate-btn{width:50%}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-80c9b6be.js","./index-legacy-9bc5dba8.js","./trial-legacy-dfd630dc.js","./trial-legacy-a4a0f236.js","./useDicData-legacy-b3575827.js","./infoCollection-legacy-27f85deb.js","./index-legacy-069d4fa6.js","./relativeTime-legacy-29fbfa3f.js"],(function(e){"use strict";var t,a,r,n,i,o,d,l,s,u,c,f,p,m,v,I,y,O,L,g,b,C,h,w,x,P,E,T,k,V,R,A,H,_,N,B,S,j,D,U,F,Y,z;return{setters:[function(e){t=e.m,a=e.r,r=e.a0,n=e.s,i=e.t,o=e.v,d=e.x,l=e.E,s=e.U,u=e.C,c=e.J,f=e.N,p=e.I,m=e.H,v=e.ab,I=e.u,y=e.S,O=e.P,L=e.e,g=e.n,b=e.F,C=e.z,h=e.d,w=e.T},function(e){x=e._,P=e.m,E=e.h,T=e.g,k=e.A,V=e.t,R=e.N,A=e.n,H=e.b},function(e){_=e.p},function(e){N=e.P,B=e.I,S=e.R},function(e){j=e.u},function(e){D=e.R,U=e.a,F=e.B,Y=e.b},function(e){z=e._},function(){}],execute:function(){const M={class:"com-select-container"},q={class:"radio-item-wrapper"},$={class:"name"},G={class:"hone"},J={class:"address"},K={class:"footer-button"},W=m("取消"),Q=m("确认"),X=t({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const m=e,v=a(m.modelValue),I=a(m.show),y=()=>{t("submit",v.value),I.value=!1},O=()=>{t("close")};return r((()=>m.modelValue),(e=>{v.value=e})),r((()=>v.value),(e=>{t("update:modelValue",e)})),(t,a)=>{const r=n("van-radio"),m=n("van-radio-group"),L=n("VanButton");return i(),o(P,{show:I.value,"onUpdate:show":a[1]||(a[1]=e=>I.value=e),class:"com-select",title:"选择保单通讯信息",onClose:O},{default:d((()=>[l("div",M,[s(m,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e)},{default:d((()=>[(i(!0),u(p,null,c(e.dataSource,((e,t)=>(i(),o(r,{key:t,name:t+1,class:"radio-item"},{default:d((()=>[l("div",q,[l("p",null,[l("span",$,f(e.contactName),1),l("span",G,f(e.contactPhoneNo),1)]),l("p",J,f(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),l("div",K,[s(L,{plain:"",type:"primary"},{default:d((()=>[W])),_:1}),s(L,{type:"primary",onClick:y},{default:d((()=>[Q])),_:1})])])),_:1},8,["show"])}}});var Z=x(X,[["__scopeId","data-v-a821acd4"]]);const ee={key:0,class:"beneficiary-part"},te={class:"part-title"},ae={class:"title"},re=m("删除"),ne=m("+添加受益人"),ie=m("选择保单通讯信息"),oe={class:"radio-item-wrapper"},de={class:"name"},le={class:"hone"},se={class:"address"},ue={class:"footer-button","safe-area-inset-bottom":""},ce={class:"left"},fe={class:"trial-result"},pe=m(" 首期"),me={class:"result-num"},ve=l("div",{class:"result-desc"},"实际保费以后续为准",-1),Ie={class:"operate-btn"},ye=m("下一步");e("default",t({setup(e){const t=v(),m=I(),{templateId:x=1,orderNo:P="2022072710380711215",productCode:M,tenantId:q="9991000007",proposalId:$,insurerCode:G="kunlunhealth"}=m.query,[J,K]=y(),W="/infoPreview"===m.path?"infoPreview":"infoCollection",Q=j("NATIONAL_REGION_CODE"),X=a({}),Oe=a({extInfo:{pageCode:W},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),Le=a(null),ge=a([]),be=a([]),Ce=a([]),he=a([]),we=a([]),xe=O({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0}),Pe=L((()=>[{contactAddress:Oe.value.tenantOrderHolder?.extInfo?.familyAddress,contactName:Oe.value.tenantOrderHolder.name,contactPhoneNo:Oe.value.tenantOrderHolder.mobile},{contactAddress:Oe.value.tenantOrderHolder?.extInfo?.workAddress,contactName:Oe.value.tenantOrderHolder.name,contactPhoneNo:Oe.value.tenantOrderHolder.mobile},{contactAddress:Oe.value.tenantOrderInsuredList[0]?.extInfo?.familyAddress,contactName:Oe.value.tenantOrderInsuredList[0]?.name,contactPhoneNo:Oe.value.tenantOrderInsuredList[0]?.mobile},{contactAddress:Oe.value.tenantOrderInsuredList[0]?.extInfo?.workAddress,contactName:Oe.value.tenantOrderInsuredList[0].name,contactPhoneNo:Oe.value.tenantOrderInsuredList[0].mobile}].filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))||[])),Ee=L((()=>xe.currentAddress?Pe.value[xe.currentAddress-1]||{}:Oe.value.extInfo?.contactInfo?.[0]||{})),Te=e=>{const t={};return e.map((e=>{const{initialAmount:a,annuityDrawFrequency:r,annuityDrawType:n,paymentFrequency:i,paymentPeriod:o,paymentPeriodType:d,insurancePeriodType:l,insurancePeriodValue:s,riskCode:u,riskType:c,initialPremium:f,liabilityDetails:p,extInfo:m}=e,{riskId:v,copy:I}=m,y={amount:a,annuityDrawDate:r,annuityDrawType:n,paymentFrequency:i,riskId:v,copy:I,chargePeriod:o?`${N[d]}_${o}`:N[d],coveragePeriod:s?`${B[l]}_${s}`:B[l],riskCode:u,riskType:c,premium:f,liabilityVOList:p.map((e=>({...e,liabilityAttributeValue:e.refundMethod,liabilityAttributeCode:e.refundMethod&&1})))};return c===S.MAIN_RISK?(t.mainRiskCode=u,t.mainRiskId=v):Object.assign(y,t),y}))},ke=()=>{Le.value?.validate().then((()=>{const{birthday:e,gender:a,extInfo:r}=Oe.value.tenantOrderHolder,{hasSocialInsurance:n,occupationCodeList:i}=r,{birthday:o,gender:d,extInfo:l,tenantOrderProductList:s}=Oe.value.tenantOrderInsuredList[0],{hasSocialInsurance:u,occupationCodeList:c}=l,f={holder:{personVO:{birthday:h(e).format("YYYY-MM-DD"),gender:a,socialFlag:n,occupationCodeList:i}},productCode:M,insuredVOList:[{insurerCode:G,personVO:{birthday:h(o).format("YYYY-MM-DD"),gender:d,socialFlag:u,occupationCodeList:c},productPlanVOList:[{insurerCode:G,planCode:"",riskVOList:Te(s[0].tenantOrderRiskList)}]}]};_({...f}).then((({code:e,data:a})=>{if("10000"===e){const e={},r=(t=[])=>{(t||[]).forEach((t=>{e[t.riskCode]=t,t.riskPremiumDetailVOList?.length&&r(t.riskPremiumDetailVOList)}))};r(a.riskPremiumDetailVOList),Oe.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={...Oe.value.tenantOrderInsuredList[0].tenantOrderProductList[0],premium:a.premium,tenantOrderRiskList:Oe.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((t=>({...t,initialAmount:e[t.riskCode].amount,initialPremium:e[t.riskCode].premium})))},(()=>{const e={...Oe.value};e.extInfo={...e.extInfo,contactInfo:[Ee.value],buttonCode:R.infoCollection},e.tenantOrderAttachmentList=[{category:k.OBVERSE_CERT,objectType:V.HOLDER,objectId:Oe.value.tenantOrderHolder.id,name:"投保人证件正面",uri:ge.value[0],id:Ce.value[0]},{category:k.REVERSE_CERT,objectType:V.HOLDER,objectId:Oe.value.tenantOrderHolder.id,name:"投保人证件背面",uri:ge.value[1],id:Ce.value[1]},{category:k.OBVERSE_CERT,objectType:V.INSURED,objectId:Oe.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:be.value[0]||ge.value[0],id:he.value[1]},{category:k.REVERSE_CERT,objectType:V.INSURED,objectId:Oe.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:be.value[1]||ge.value[1],id:he.value[1]}].filter((e=>e.uri)),Le.value?.validate().then((a=>{if(e.tenantOrderInsuredList[0].insuredBeneficiaryType===Y.SPECIFY){const t={};if(e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((e=>{t[e.benefitOrder]?t[e.benefitOrder].sum+=Number(e.benefitRate):t[e.benefitOrder]={sum:Number(e.benefitRate)}})),Object.values(t).some((e=>100!==e.sum)))return void w.fail("同一顺位的受益人比例之和必须为100")}A(e).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&t.push({path:H[a.pageAction.data.nextPageCode],query:m.query})}))}))})()}}))}))},Ve=e=>{},Re=()=>{xe.beneficiaryId+=1,Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:xe.beneficiaryId,extInfo:{}})};return g((()=>{T({orderNo:P,tenantId:q}).then((({code:e,data:t})=>{if("10000"===e){const e=t;e.extInfo={...e.extInfo,pageCode:W,templateId:x},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo={...e.tenantOrderHolder.extInfo,occupationCodeList:e.tenantOrderHolder.extInfo?.occupationCodeList||[]},e.tenantOrderInsuredList[0].extInfo={...e.tenantOrderInsuredList[0].extInfo,occupationCodeList:e.tenantOrderInsuredList[0].extInfo?.occupationCodeList||[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const t=e;return t.extInfo={...t.extInfo,occupationCodeList:t.extInfo?.occupationCodeList||[]},t})),e.tenantOrderAttachmentList.forEach((e=>{e.category===k.OBVERSE_CERT?e.objectType===V.HOLDER?(ge.value[0]=e.uri,Ce.value[0]=e.id):e.objectType===V.INSURED&&(be.value[0]=e.uri,he.value[0]=e.id):e.category===k.REVERSE_CERT&&(e.objectType===V.HOLDER?(ge.value[1]=e.uri,Ce.value[1]=e.id):e.objectType===V.INSURED&&(be.value[1]=e.uri,Ce.value[1]=e.id))})),Object.assign(Oe.value,e)}})).finally((()=>{xe.isLoading=!1})),E({pageCode:"infoCollection",templateId:x}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),X.value=e}}))})),r([()=>Oe.value.tenantOrderInsuredList[0].relationToHolder,()=>Oe.value.tenantOrderHolder],(()=>{`${Oe.value.tenantOrderInsuredList[0].relationToHolder}`===D.SELF&&Object.assign(Oe.value.tenantOrderInsuredList[0],Oe.value.tenantOrderHolder,{id:Oe.value.tenantOrderInsuredList[0].id,extInfo:{...Oe.value.tenantOrderHolder.extInfo,insureProvinceCode:Oe.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:Oe.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),(e,t)=>{const a=n("ProCard"),r=n("ProRadioButton"),m=n("ProField"),v=n("ProCascader"),I=n("ProSvg"),y=n("VanButton"),O=n("ProCheckButton"),L=n("van-cell"),g=n("ProForm"),h=n("ProPageWrap");return i(),o(h,{class:"page-info-wrapper"},{default:d((()=>[b(xe).isLoading?C("",!0):(i(),o(g,{key:0,ref_key:"formRef",ref:Le},{default:d((()=>[s(a,{title:"投保人"},{default:d((()=>[s(z,{images:ge.value,"onUpdate:images":t[0]||(t[0]=e=>ge.value=e),"form-info":Oe.value.tenantOrderHolder,"factor-list":X.value.HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),s(a,{title:"被保人"},{default:d((()=>[s(m,{modelValue:Oe.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>Oe.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:d((()=>[s(r,{modelValue:Oe.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>Oe.value.tenantOrderInsuredList[0].relationToHolder=e),options:b(U)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+Oe.value.tenantOrderInsuredList[0].relationToHolder?(i(),o(z,{key:0,images:be.value,"onUpdate:images":t[3]||(t[3]=e=>be.value=e),"form-info":Oe.value.tenantOrderInsuredList[0],"factor-list":X.value.INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):C("",!0),s(v,{modelValue:Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:Oe.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:Oe.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":b(Q),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),s(a,{title:"受益人"},{default:d((()=>[s(m,{modelValue:Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:d((()=>[s(r,{modelValue:Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:b(F)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(i(),u("div",ee,[(i(!0),u(p,null,c(Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,a)=>(i(),u("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[l("div",te,[l("span",ae,f(`受益人${a+1}`),1),s(I,{name:"delete",onClick:t=>{return a=e,void(Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==a.beneficiaryId||a.id!==e.id)));var a}},{default:d((()=>[re])),_:2},1032,["onClick"])]),s(z,{images:we.value,"onUpdate:images":t[10]||(t[10]=e=>we.value=e),"form-info":e,"factor-list":X.value.BENEFICIARY||[],prefix:`beneficiary-${a}`,"beneficiary-list":Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),s(y,{onClick:Re},{default:d((()=>[ne])),_:1})])):C("",!0)])),_:1}),s(a,{title:"保单通讯信息"},{default:d((()=>[Object.keys(b(Ee))?.length?(i(),o(L,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>b(K)(!0))},{title:d((()=>[l("div",oe,[l("p",null,[l("span",de,f(b(Ee).contactName),1),l("span",le,f(b(Ee).contactPhoneNo),1)]),l("p",se,f(b(Ee).contactAddress),1)])])),_:1})):(i(),o(O,{key:0,activated:"",onClick:t[11]||(t[11]=e=>b(K)(!0))},{default:d((()=>[ie])),_:1}))])),_:1})])),_:1},512)),l("div",ue,[l("div",ce,[l("div",fe,[pe,l("span",me,"￥"+f(Oe.value.tenantOrderInsuredList?.[0]?.tenantOrderProductList?.[0].premium?.toLocaleString?.()),1)]),ve]),l("div",Ie,[s(y,{block:"",type:"primary",onClick:ke},{default:d((()=>[ye])),_:1})])]),b(J)?(i(),o(Z,{key:1,modelValue:b(xe).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>b(xe).currentAddress=e),show:b(J),"data-source":b(Pe),onSubmit:Ve,onClose:t[14]||(t[14]=e=>b(K)(!1))},null,8,["modelValue","show","data-source"])):C("",!0)])),_:1})}}}))}}}))}();
