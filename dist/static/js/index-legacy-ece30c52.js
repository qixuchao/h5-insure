!function(){var e=document.createElement("style");e.innerHTML=".com-select .com-select-container[data-v-a821acd4]{padding:.4rem}.com-select .com-select-container .radio-item[data-v-a821acd4]{margin:.26667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper[data-v-a821acd4]{padding:0 .42667rem}.com-select .com-select-container .radio-item .radio-item-wrapper p[data-v-a821acd4]{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper .name[data-v-a821acd4]{font-weight:600;margin-right:.4rem}.com-select .com-select-container .radio-item .radio-item-wrapper .phone[data-v-a821acd4]{font-weight:400}.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .left{flex:0 0 50%}.page-info-wrapper .left .trial-result{font-size:.45333rem;color:#393d46}.page-info-wrapper .left .trial-result .result-num{margin-left:.17333rem;color:var(--zaui-price, #ff5840);font-weight:700;margin-left:.21333rem}.page-info-wrapper .left .result-desc{font-size:.32rem;color:#666}.page-info-wrapper .operate-btn{width:50%}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-5654c491.js","./index-legacy-5b921d91.js","./trial-legacy-aaedf69f.js","./trial-legacy-65f3e17c.js","./useDicData-legacy-279058c3.js","./infoCollection-legacy-463c6cf6.js","./index-legacy-f38b5a82.js"],(function(e){"use strict";var t,r,a,n,i,o,d,l,s,u,c,p,f,m,v,I,y,O,L,g,b,h,C,w,x,E,P,k,T,V,R,A,H,_,N,B,j,S,D,U,F,Y;return{setters:[function(e){t=e.g,r=e.E,a=e._,n=e.r,i=e.j,o=e.k,d=e.m,l=e.z,s=e.p,u=e.n,c=e.G,p=e.J,f=e.F,m=e.C,v=e.a9,I=e.O,y=e.Q,O=e.M,L=e.y,g=e.o,b=e.A,h=e.t,C=e.d,w=e.T},function(e){x=e._,E=e.m,P=e.h,k=e.g,T=e.A,V=e.r,R=e.n,A=e.c},function(e){H=e.p},function(e){_=e.P,N=e.I,B=e.R},function(e){j=e.u},function(e){S=e.R,D=e.a,U=e.B,F=e.b},function(e){Y=e._}],execute:function(){const z={class:"com-select-container"},M={class:"radio-item-wrapper"},q={class:"name"},$={class:"hone"},G={class:"address"},J={class:"footer-button"},K=m("取消"),Q=m("确认"),W=t({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const m=e,v=r(m.modelValue),I=r(m.show),y=()=>{t("submit",v.value),I.value=!1},O=()=>{t("close")};return a((()=>m.modelValue),(e=>{v.value=e})),a((()=>v.value),(e=>{t("update:modelValue",e)})),(t,r)=>{const a=n("van-radio"),m=n("van-radio-group"),L=n("VanButton");return i(),o(E,{show:I.value,"onUpdate:show":r[1]||(r[1]=e=>I.value=e),class:"com-select",title:"选择保单通讯信息",onClose:O},{default:d((()=>[l("div",z,[s(m,{modelValue:v.value,"onUpdate:modelValue":r[0]||(r[0]=e=>v.value=e)},{default:d((()=>[(i(!0),u(f,null,c(e.dataSource,((e,t)=>(i(),o(a,{key:t,name:t+1,class:"radio-item"},{default:d((()=>[l("div",M,[l("p",null,[l("span",q,p(e.contactName),1),l("span",$,p(e.contactPhoneNo),1)]),l("p",G,p(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),l("div",J,[s(L,{plain:"",type:"primary"},{default:d((()=>[K])),_:1}),s(L,{type:"primary",onClick:y},{default:d((()=>[Q])),_:1})])])),_:1},8,["show"])}}});var X=x(W,[["__scopeId","data-v-a821acd4"]]);const Z={key:0,class:"beneficiary-part"},ee={class:"part-title"},te={class:"title"},re=m("删除"),ae=m("+添加受益人"),ne=m("选择保单通讯信息"),ie={class:"radio-item-wrapper"},oe={class:"name"},de={class:"hone"},le={class:"address"},se={class:"footer-button","safe-area-inset-bottom":""},ue={class:"left"},ce={class:"trial-result"},pe=m(" 首期"),fe={class:"result-num"},me=l("div",{class:"result-desc"},"实际保费以后续为准",-1),ve={class:"operate-btn"},Ie=m("下一步");e("default",t({setup(e){const t=v(),m=I(),{templateId:x=1,orderNo:E="2022072710380711215",productCode:z,tenantId:M="9991000007",proposalId:q,insurerCode:$="kunlunhealth"}=m.query,[G,J]=y(),K="/infoPreview"===m.path?"infoPreview":"infoCollection",Q=j("NATIONAL_REGION_CODE"),W=r({}),ye=r({extInfo:{pageCode:K},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),Oe=r(null),Le=r([]),ge=r([]),be=r([]),he=r([]),Ce=r([]),we=O({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0}),xe=L((()=>{var e,t,r,a,n,i,o,d,l,s;return[{contactAddress:null===(e=ye.value.tenantOrderHolder)||void 0===e||null===(t=e.extInfo)||void 0===t?void 0:t.familyAddress,contactName:ye.value.tenantOrderHolder.name,contactPhoneNo:ye.value.tenantOrderHolder.mobile},{contactAddress:null===(r=ye.value.tenantOrderHolder)||void 0===r||null===(a=r.extInfo)||void 0===a?void 0:a.workAddress,contactName:ye.value.tenantOrderHolder.name,contactPhoneNo:ye.value.tenantOrderHolder.mobile},{contactAddress:null===(n=ye.value.tenantOrderInsuredList[0])||void 0===n||null===(i=n.extInfo)||void 0===i?void 0:i.familyAddress,contactName:null===(o=ye.value.tenantOrderInsuredList[0])||void 0===o?void 0:o.name,contactPhoneNo:null===(d=ye.value.tenantOrderInsuredList[0])||void 0===d?void 0:d.mobile},{contactAddress:null===(l=ye.value.tenantOrderInsuredList[0])||void 0===l||null===(s=l.extInfo)||void 0===s?void 0:s.workAddress,contactName:ye.value.tenantOrderInsuredList[0].name,contactPhoneNo:ye.value.tenantOrderInsuredList[0].mobile}].filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))||[]})),Ee=L((()=>{var e,t;return we.currentAddress?xe.value[we.currentAddress-1]||{}:(null===(e=ye.value.extInfo)||void 0===e||null===(t=e.contactInfo)||void 0===t?void 0:t[0])||{}})),Pe=e=>{const t={};return e.map((e=>{const{initialAmount:r,annuityDrawFrequency:a,annuityDrawType:n,paymentFrequency:i,paymentPeriod:o,paymentPeriodType:d,insurancePeriodType:l,insurancePeriodValue:s,riskCode:u,riskType:c,initialPremium:p,liabilityDetails:f,extInfo:m}=e,{riskId:v,copy:I}=m,y={amount:r,annuityDrawDate:a,annuityDrawType:n,paymentFrequency:i,riskId:v,copy:I,chargePeriod:o?`${_[d]}_${o}`:_[d],coveragePeriod:s?`${N[l]}_${s}`:N[l],riskCode:u,riskType:c,premium:p,liabilityVOList:f.map((e=>({...e,liabilityAttributeValue:e.refundMethod,liabilityAttributeCode:e.refundMethod&&1})))};return c===B.MAIN_RISK?(t.mainRiskCode=u,t.mainRiskId=v):Object.assign(y,t),y}))},ke=()=>{var e;null===(e=Oe.value)||void 0===e||e.validate().then((()=>{const{birthday:e,gender:r,extInfo:a}=ye.value.tenantOrderHolder,{hasSocialInsurance:n,occupationCodeList:i}=a,{birthday:o,gender:d,extInfo:l,tenantOrderProductList:s}=ye.value.tenantOrderInsuredList[0],{hasSocialInsurance:u,occupationCodeList:c}=l,p={holder:{personVO:{birthday:C(e).format("YYYY-MM-DD"),gender:r,socialFlag:n,occupationCodeList:i}},productCode:z,insuredVOList:[{insurerCode:$,personVO:{birthday:C(o).format("YYYY-MM-DD"),gender:d,socialFlag:u,occupationCodeList:c},productPlanVOList:[{insurerCode:$,planCode:"",riskVOList:Pe(s[0].tenantOrderRiskList)}]}]};H({...p}).then((({code:e,data:r})=>{if("10000"===e){const e={},a=(t=[])=>{(t||[]).forEach((t=>{var r;e[t.riskCode]=t,null!==(r=t.riskPremiumDetailVOList)&&void 0!==r&&r.length&&a(t.riskPremiumDetailVOList)}))};a(r.riskPremiumDetailVOList),ye.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={...ye.value.tenantOrderInsuredList[0].tenantOrderProductList[0],premium:r.premium,tenantOrderRiskList:ye.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((t=>({...t,initialAmount:e[t.riskCode].amount,initialPremium:e[t.riskCode].premium})))},(()=>{var e;const r={...ye.value};r.extInfo={...r.extInfo,contactInfo:[Ee.value]},r.tenantOrderAttachmentList=[{category:T.OBVERSE_CERT,objectType:V.HOLDER,objectId:ye.value.tenantOrderHolder.id,name:"投保人证件正面",uri:Le.value[0],id:be.value[0]},{category:T.REVERSE_CERT,objectType:V.HOLDER,objectId:ye.value.tenantOrderHolder.id,name:"投保人证件背面",uri:Le.value[1],id:be.value[1]},{category:T.OBVERSE_CERT,objectType:V.INSURED,objectId:ye.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:ge.value[0]||Le.value[0],id:he.value[1]},{category:T.REVERSE_CERT,objectType:V.INSURED,objectId:ye.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:ge.value[1]||Le.value[1],id:he.value[1]}],null===(e=Oe.value)||void 0===e||e.validate().then((e=>{if(r.tenantOrderInsuredList[0].insuredBeneficiaryType===F.SPECIFY){const e={};if(r.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((t=>{e[t.benefitOrder]?e[t.benefitOrder].sum+=Number(t.benefitRate):e[t.benefitOrder]={sum:Number(t.benefitRate)}})),Object.values(e).some((e=>100!==e.sum)))return void w.fail("同一顺位的受益人比例之和必须为100")}R(r).then((({code:e,data:r})=>{"10000"===e&&"jumpToPage"===r.pageAction.pageAction&&t.push({path:A[r.pageAction.data.nextPageCode],query:m.query})}))}))})()}}))}))},Te=e=>{},Ve=()=>{we.beneficiaryId+=1,ye.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:we.beneficiaryId,extInfo:{}})};return g((()=>{k({orderNo:E,tenantId:M}).then((({code:e,data:t})=>{if("10000"===e){var r,a;const e=t;e.extInfo={...e.extInfo,pageCode:K,templateId:x},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo={...e.tenantOrderHolder.extInfo,occupationCodeList:(null===(r=e.tenantOrderHolder.extInfo)||void 0===r?void 0:r.occupationCodeList)||[]},e.tenantOrderInsuredList[0].extInfo={...e.tenantOrderInsuredList[0].extInfo,occupationCodeList:(null===(a=e.tenantOrderInsuredList[0].extInfo)||void 0===a?void 0:a.occupationCodeList)||[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{var t;const r=e;return r.extInfo={...r.extInfo,occupationCodeList:(null===(t=r.extInfo)||void 0===t?void 0:t.occupationCodeList)||[]},r})),e.tenantOrderAttachmentList.forEach((e=>{e.category===T.OBVERSE_CERT?e.objectType===V.HOLDER?(Le.value[0]=e.uri,be.value[0]=e.id):e.objectType===V.INSURED&&(ge.value[0]=e.uri,he.value[0]=e.id):e.category===T.REVERSE_CERT&&(e.objectType===V.HOLDER?(Le.value[1]=e.uri,be.value[1]=e.id):e.objectType===V.INSURED&&(ge.value[1]=e.uri,be.value[1]=e.id))})),Object.assign(ye.value,e)}})).finally((()=>{we.isLoading=!1})),P({pageCode:"infoCollection",templateId:x}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),W.value=e}}))})),a([()=>ye.value.tenantOrderInsuredList[0].relationToHolder,()=>ye.value.tenantOrderHolder],(()=>{`${ye.value.tenantOrderInsuredList[0].relationToHolder}`===S.SELF&&Object.assign(ye.value.tenantOrderInsuredList[0],ye.value.tenantOrderHolder,{id:ye.value.tenantOrderInsuredList[0].id,extInfo:{...ye.value.tenantOrderHolder.extInfo,insureProvinceCode:ye.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:ye.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:ye.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),(e,t)=>{const r=n("ProCard"),a=n("ProRadioButton"),m=n("ProField"),v=n("ProCascader"),I=n("ProSvg"),y=n("VanButton"),O=n("ProCheckButton"),L=n("van-cell"),g=n("ProForm"),C=n("ProPageWrap");return i(),o(C,{class:"page-info-wrapper"},{default:d((()=>{var e,n,C,w,x;return[b(we).isLoading?h("",!0):(i(),o(g,{key:0,ref_key:"formRef",ref:Oe},{default:d((()=>[s(r,{title:"投保人"},{default:d((()=>[s(Y,{images:Le.value,"onUpdate:images":t[0]||(t[0]=e=>Le.value=e),"form-info":ye.value.tenantOrderHolder,"factor-list":W.value.HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),s(r,{title:"被保人"},{default:d((()=>[s(m,{modelValue:ye.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>ye.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:d((()=>[s(a,{modelValue:ye.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>ye.value.tenantOrderInsuredList[0].relationToHolder=e),options:b(D)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+ye.value.tenantOrderInsuredList[0].relationToHolder?(i(),o(Y,{key:0,images:ge.value,"onUpdate:images":t[3]||(t[3]=e=>ge.value=e),"form-info":ye.value.tenantOrderInsuredList[0],"factor-list":W.value.INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):h("",!0),s(v,{modelValue:ye.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>ye.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:ye.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>ye.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:ye.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>ye.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:ye.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>ye.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":b(Q),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),s(r,{title:"受益人"},{default:d((()=>[s(m,{modelValue:ye.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>ye.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:d((()=>[s(a,{modelValue:ye.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>ye.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:b(U)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==ye.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(i(),u("div",Z,[(i(!0),u(f,null,c(ye.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,r)=>(i(),u("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[l("div",ee,[l("span",te,p(`受益人${r+1}`),1),s(I,{name:"delete",onClick:t=>{return r=e,void(ye.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=ye.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==r.beneficiaryId||r.id!==e.id)));var r}},{default:d((()=>[re])),_:2},1032,["onClick"])]),s(Y,{images:Ce.value,"onUpdate:images":t[10]||(t[10]=e=>Ce.value=e),"form-info":e,"factor-list":W.value.BENEFICIARY||[],prefix:`beneficiary-${r}`,"beneficiary-list":ye.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),s(y,{onClick:Ve},{default:d((()=>[ae])),_:1})])):h("",!0)])),_:1}),s(r,{title:"保单通讯信息"},{default:d((()=>{var e;return[null!==(e=Object.keys(b(Ee)))&&void 0!==e&&e.length?(i(),o(L,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>b(J)(!0))},{title:d((()=>[l("div",ie,[l("p",null,[l("span",oe,p(b(Ee).contactName),1),l("span",de,p(b(Ee).contactPhoneNo),1)]),l("p",le,p(b(Ee).contactAddress),1)])])),_:1})):(i(),o(O,{key:0,activated:"",onClick:t[11]||(t[11]=e=>b(J)(!0))},{default:d((()=>[ne])),_:1}))]})),_:1})])),_:1},512)),l("div",se,[l("div",ue,[l("div",ce,[pe,l("span",fe,"￥"+p(null===(e=ye.value.tenantOrderInsuredList)||void 0===e||null===(n=e[0])||void 0===n||null===(C=n.tenantOrderProductList)||void 0===C||null===(w=C[0].premium)||void 0===w||null===(x=w.toLocaleString)||void 0===x?void 0:x.call(w)),1)]),me]),l("div",ve,[s(y,{block:"",type:"primary",onClick:ke},{default:d((()=>[Ie])),_:1})])]),b(G)?(i(),o(X,{key:1,modelValue:b(we).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>b(we).currentAddress=e),show:b(G),"data-source":b(xe),onSubmit:Te,onClose:t[14]||(t[14]=e=>b(J)(!1))},null,8,["modelValue","show","data-source"])):h("",!0)]})),_:1})}}}))}}}))}();
