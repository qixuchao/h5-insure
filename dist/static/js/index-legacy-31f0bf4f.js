!function(){var e=document.createElement("style");e.innerHTML=".com-select .com-select-container[data-v-a821acd4]{padding:.4rem}.com-select .com-select-container .radio-item[data-v-a821acd4]{margin:.26667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper[data-v-a821acd4]{padding:0 .42667rem}.com-select .com-select-container .radio-item .radio-item-wrapper p[data-v-a821acd4]{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper .name[data-v-a821acd4]{font-weight:600;margin-right:.4rem}.com-select .com-select-container .radio-item .radio-item-wrapper .phone[data-v-a821acd4]{font-weight:400}.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .left{flex:0 0 50%}.page-info-wrapper .left .trial-result{font-size:.45333rem;color:#393d46}.page-info-wrapper .left .trial-result .result-num{margin-left:.17333rem;color:var(--zaui-price, #ff5840);font-weight:700;margin-left:.21333rem}.page-info-wrapper .left .result-desc{font-size:.32rem;color:#666}.page-info-wrapper .operate-btn{width:50%}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-7cfa1af5.js","./index-legacy-d597d880.js","./trial-legacy-1264c768.js","./trial-legacy-eeda1084.js","./useDicData-legacy-9bcc7001.js","./infoCollection-legacy-b5e0bc8b.js","./index-legacy-e96b1014.js","./utils-legacy-20e4723c.js"],(function(e){"use strict";var t,n,r,a,i,o,d,l,s,u,c,p,f,m,v,I,y,O,L,g,b,C,h,w,x,E,P,k,T,V,R,A,H,_,N,B,j,S,D,U,F,Y,z;return{setters:[function(e){t=e.g,n=e.E,r=e._,a=e.r,i=e.j,o=e.k,d=e.m,l=e.z,s=e.p,u=e.n,c=e.G,p=e.J,f=e.F,m=e.C,v=e.a9,I=e.O,y=e.Q,O=e.M,L=e.y,g=e.o,b=e.A,C=e.t,h=e.d,w=e.T},function(e){x=e._,E=e.m,P=e.h,k=e.g,T=e.A,V=e.s,R=e.N,A=e.n,H=e.b},function(e){_=e.p},function(e){N=e.P,B=e.I,j=e.R},function(e){S=e.u},function(e){D=e.R,U=e.a,F=e.B,Y=e.b},function(e){z=e._},function(){}],execute:function(){const M={class:"com-select-container"},q={class:"radio-item-wrapper"},$={class:"name"},G={class:"hone"},J={class:"address"},K={class:"footer-button"},Q=m("取消"),W=m("确认"),X=t({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const m=e,v=n(m.modelValue),I=n(m.show),y=()=>{t("submit",v.value),I.value=!1},O=()=>{t("close")};return r((()=>m.modelValue),(e=>{v.value=e})),r((()=>v.value),(e=>{t("update:modelValue",e)})),(t,n)=>{const r=a("van-radio"),m=a("van-radio-group"),L=a("VanButton");return i(),o(E,{show:I.value,"onUpdate:show":n[1]||(n[1]=e=>I.value=e),class:"com-select",title:"选择保单通讯信息",onClose:O},{default:d((()=>[l("div",M,[s(m,{modelValue:v.value,"onUpdate:modelValue":n[0]||(n[0]=e=>v.value=e)},{default:d((()=>[(i(!0),u(f,null,c(e.dataSource,((e,t)=>(i(),o(r,{key:t,name:t+1,class:"radio-item"},{default:d((()=>[l("div",q,[l("p",null,[l("span",$,p(e.contactName),1),l("span",G,p(e.contactPhoneNo),1)]),l("p",J,p(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),l("div",K,[s(L,{plain:"",type:"primary"},{default:d((()=>[Q])),_:1}),s(L,{type:"primary",onClick:y},{default:d((()=>[W])),_:1})])])),_:1},8,["show"])}}});var Z=x(X,[["__scopeId","data-v-a821acd4"]]);const ee={key:0,class:"beneficiary-part"},te={class:"part-title"},ne={class:"title"},re=m("删除"),ae=m("+添加受益人"),ie=m("选择保单通讯信息"),oe={class:"radio-item-wrapper"},de={class:"name"},le={class:"hone"},se={class:"address"},ue={class:"footer-button","safe-area-inset-bottom":""},ce={class:"left"},pe={class:"trial-result"},fe=m(" 首期"),me={class:"result-num"},ve=l("div",{class:"result-desc"},"实际保费以后续为准",-1),Ie={class:"operate-btn"},ye=m("下一步");e("default",t({setup(e){const t=v(),m=I(),{templateId:x=1,orderNo:E="2022072710380711215",productCode:M,tenantId:q="9991000007",proposalId:$,insurerCode:G="kunlunhealth"}=m.query,[J,K]=y(),Q="/infoPreview"===m.path?"infoPreview":"infoCollection",W=S("NATIONAL_REGION_CODE"),X=n({}),Oe=n({extInfo:{pageCode:Q},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),Le=n(null),ge=n([]),be=n([]),Ce=n([]),he=n([]),we=n([]),xe=O({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0}),Ee=L((()=>{var e,t,n,r,a,i,o,d,l,s;return[{contactAddress:null===(e=Oe.value.tenantOrderHolder)||void 0===e||null===(t=e.extInfo)||void 0===t?void 0:t.familyAddress,contactName:Oe.value.tenantOrderHolder.name,contactPhoneNo:Oe.value.tenantOrderHolder.mobile},{contactAddress:null===(n=Oe.value.tenantOrderHolder)||void 0===n||null===(r=n.extInfo)||void 0===r?void 0:r.workAddress,contactName:Oe.value.tenantOrderHolder.name,contactPhoneNo:Oe.value.tenantOrderHolder.mobile},{contactAddress:null===(a=Oe.value.tenantOrderInsuredList[0])||void 0===a||null===(i=a.extInfo)||void 0===i?void 0:i.familyAddress,contactName:null===(o=Oe.value.tenantOrderInsuredList[0])||void 0===o?void 0:o.name,contactPhoneNo:null===(d=Oe.value.tenantOrderInsuredList[0])||void 0===d?void 0:d.mobile},{contactAddress:null===(l=Oe.value.tenantOrderInsuredList[0])||void 0===l||null===(s=l.extInfo)||void 0===s?void 0:s.workAddress,contactName:Oe.value.tenantOrderInsuredList[0].name,contactPhoneNo:Oe.value.tenantOrderInsuredList[0].mobile}].filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))||[]})),Pe=L((()=>{var e,t;return xe.currentAddress?Ee.value[xe.currentAddress-1]||{}:(null===(e=Oe.value.extInfo)||void 0===e||null===(t=e.contactInfo)||void 0===t?void 0:t[0])||{}})),ke=e=>{const t={};return e.map((e=>{const{initialAmount:n,annuityDrawFrequency:r,annuityDrawType:a,paymentFrequency:i,paymentPeriod:o,paymentPeriodType:d,insurancePeriodType:l,insurancePeriodValue:s,riskCode:u,riskType:c,initialPremium:p,liabilityDetails:f,extInfo:m}=e,{riskId:v,copy:I}=m,y={amount:n,annuityDrawDate:r,annuityDrawType:a,paymentFrequency:i,riskId:v,copy:I,chargePeriod:o?`${N[d]}_${o}`:N[d],coveragePeriod:s?`${B[l]}_${s}`:B[l],riskCode:u,riskType:c,premium:p,liabilityVOList:f.map((e=>({...e,liabilityAttributeValue:e.refundMethod,liabilityAttributeCode:e.refundMethod&&1})))};return c===j.MAIN_RISK?(t.mainRiskCode=u,t.mainRiskId=v):Object.assign(y,t),y}))},Te=()=>{var e;null===(e=Le.value)||void 0===e||e.validate().then((()=>{const{birthday:e,gender:n,extInfo:r}=Oe.value.tenantOrderHolder,{hasSocialInsurance:a,occupationCodeList:i}=r,{birthday:o,gender:d,extInfo:l,tenantOrderProductList:s}=Oe.value.tenantOrderInsuredList[0],{hasSocialInsurance:u,occupationCodeList:c}=l,p={holder:{personVO:{birthday:h(e).format("YYYY-MM-DD"),gender:n,socialFlag:a,occupationCodeList:i}},productCode:M,insuredVOList:[{insurerCode:G,personVO:{birthday:h(o).format("YYYY-MM-DD"),gender:d,socialFlag:u,occupationCodeList:c},productPlanVOList:[{insurerCode:G,planCode:"",riskVOList:ke(s[0].tenantOrderRiskList)}]}]};_({...p}).then((({code:e,data:n})=>{if("10000"===e){const e={},r=(t=[])=>{(t||[]).forEach((t=>{var n;e[t.riskCode]=t,null!==(n=t.riskPremiumDetailVOList)&&void 0!==n&&n.length&&r(t.riskPremiumDetailVOList)}))};r(n.riskPremiumDetailVOList),Oe.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={...Oe.value.tenantOrderInsuredList[0].tenantOrderProductList[0],premium:n.premium,tenantOrderRiskList:Oe.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((t=>({...t,initialAmount:e[t.riskCode].amount,initialPremium:e[t.riskCode].premium})))},(()=>{var e;const n={...Oe.value};n.extInfo={...n.extInfo,contactInfo:[Pe.value],buttonCode:R.infoCollection},n.tenantOrderAttachmentList=[{category:T.OBVERSE_CERT,objectType:V.HOLDER,objectId:Oe.value.tenantOrderHolder.id,name:"投保人证件正面",uri:ge.value[0],id:Ce.value[0]},{category:T.REVERSE_CERT,objectType:V.HOLDER,objectId:Oe.value.tenantOrderHolder.id,name:"投保人证件背面",uri:ge.value[1],id:Ce.value[1]},{category:T.OBVERSE_CERT,objectType:V.INSURED,objectId:Oe.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:be.value[0]||ge.value[0],id:he.value[1]},{category:T.REVERSE_CERT,objectType:V.INSURED,objectId:Oe.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:be.value[1]||ge.value[1],id:he.value[1]}].filter((e=>e.uri)),null===(e=Le.value)||void 0===e||e.validate().then((e=>{if(n.tenantOrderInsuredList[0].insuredBeneficiaryType===Y.SPECIFY){const e={};if(n.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((t=>{e[t.benefitOrder]?e[t.benefitOrder].sum+=Number(t.benefitRate):e[t.benefitOrder]={sum:Number(t.benefitRate)}})),Object.values(e).some((e=>100!==e.sum)))return void w.fail("同一顺位的受益人比例之和必须为100")}A(n).then((({code:e,data:n})=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&t.push({path:H[n.pageAction.data.nextPageCode],query:m.query})}))}))})()}}))}))},Ve=e=>{},Re=()=>{xe.beneficiaryId+=1,Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:xe.beneficiaryId,extInfo:{}})};return g((()=>{k({orderNo:E,tenantId:q}).then((({code:e,data:t})=>{if("10000"===e){var n,r;const e=t;e.extInfo={...e.extInfo,pageCode:Q,templateId:x},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo={...e.tenantOrderHolder.extInfo,occupationCodeList:(null===(n=e.tenantOrderHolder.extInfo)||void 0===n?void 0:n.occupationCodeList)||[]},e.tenantOrderInsuredList[0].extInfo={...e.tenantOrderInsuredList[0].extInfo,occupationCodeList:(null===(r=e.tenantOrderInsuredList[0].extInfo)||void 0===r?void 0:r.occupationCodeList)||[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{var t;const n=e;return n.extInfo={...n.extInfo,occupationCodeList:(null===(t=n.extInfo)||void 0===t?void 0:t.occupationCodeList)||[]},n})),e.tenantOrderAttachmentList.forEach((e=>{e.category===T.OBVERSE_CERT?e.objectType===V.HOLDER?(ge.value[0]=e.uri,Ce.value[0]=e.id):e.objectType===V.INSURED&&(be.value[0]=e.uri,he.value[0]=e.id):e.category===T.REVERSE_CERT&&(e.objectType===V.HOLDER?(ge.value[1]=e.uri,Ce.value[1]=e.id):e.objectType===V.INSURED&&(be.value[1]=e.uri,Ce.value[1]=e.id))})),Object.assign(Oe.value,e)}})).finally((()=>{xe.isLoading=!1})),P({pageCode:"infoCollection",templateId:x}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),X.value=e}}))})),r([()=>Oe.value.tenantOrderInsuredList[0].relationToHolder,()=>Oe.value.tenantOrderHolder],(()=>{`${Oe.value.tenantOrderInsuredList[0].relationToHolder}`===D.SELF&&Object.assign(Oe.value.tenantOrderInsuredList[0],Oe.value.tenantOrderHolder,{id:Oe.value.tenantOrderInsuredList[0].id,extInfo:{...Oe.value.tenantOrderHolder.extInfo,insureProvinceCode:Oe.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:Oe.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),(e,t)=>{const n=a("ProCard"),r=a("ProRadioButton"),m=a("ProField"),v=a("ProCascader"),I=a("ProSvg"),y=a("VanButton"),O=a("ProCheckButton"),L=a("van-cell"),g=a("ProForm"),h=a("ProPageWrap");return i(),o(h,{class:"page-info-wrapper"},{default:d((()=>{var e,a,h,w,x;return[b(xe).isLoading?C("",!0):(i(),o(g,{key:0,ref_key:"formRef",ref:Le},{default:d((()=>[s(n,{title:"投保人"},{default:d((()=>[s(z,{images:ge.value,"onUpdate:images":t[0]||(t[0]=e=>ge.value=e),"form-info":Oe.value.tenantOrderHolder,"factor-list":X.value.HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),s(n,{title:"被保人"},{default:d((()=>[s(m,{modelValue:Oe.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>Oe.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:d((()=>[s(r,{modelValue:Oe.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>Oe.value.tenantOrderInsuredList[0].relationToHolder=e),options:b(U)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+Oe.value.tenantOrderInsuredList[0].relationToHolder?(i(),o(z,{key:0,images:be.value,"onUpdate:images":t[3]||(t[3]=e=>be.value=e),"form-info":Oe.value.tenantOrderInsuredList[0],"factor-list":X.value.INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):C("",!0),s(v,{modelValue:Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:Oe.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:Oe.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":b(W),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),s(n,{title:"受益人"},{default:d((()=>[s(m,{modelValue:Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:d((()=>[s(r,{modelValue:Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:b(F)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(i(),u("div",ee,[(i(!0),u(f,null,c(Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,n)=>(i(),u("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[l("div",te,[l("span",ne,p(`受益人${n+1}`),1),s(I,{name:"delete",onClick:t=>{return n=e,void(Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==n.beneficiaryId||n.id!==e.id)));var n}},{default:d((()=>[re])),_:2},1032,["onClick"])]),s(z,{images:we.value,"onUpdate:images":t[10]||(t[10]=e=>we.value=e),"form-info":e,"factor-list":X.value.BENEFICIARY||[],prefix:`beneficiary-${n}`,"beneficiary-list":Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),s(y,{onClick:Re},{default:d((()=>[ae])),_:1})])):C("",!0)])),_:1}),s(n,{title:"保单通讯信息"},{default:d((()=>{var e;return[null!==(e=Object.keys(b(Pe)))&&void 0!==e&&e.length?(i(),o(L,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>b(K)(!0))},{title:d((()=>[l("div",oe,[l("p",null,[l("span",de,p(b(Pe).contactName),1),l("span",le,p(b(Pe).contactPhoneNo),1)]),l("p",se,p(b(Pe).contactAddress),1)])])),_:1})):(i(),o(O,{key:0,activated:"",onClick:t[11]||(t[11]=e=>b(K)(!0))},{default:d((()=>[ie])),_:1}))]})),_:1})])),_:1},512)),l("div",ue,[l("div",ce,[l("div",pe,[fe,l("span",me,"￥"+p(null===(e=Oe.value.tenantOrderInsuredList)||void 0===e||null===(a=e[0])||void 0===a||null===(h=a.tenantOrderProductList)||void 0===h||null===(w=h[0].premium)||void 0===w||null===(x=w.toLocaleString)||void 0===x?void 0:x.call(w)),1)]),ve]),l("div",Ie,[s(y,{block:"",type:"primary",onClick:Te},{default:d((()=>[ye])),_:1})])]),b(J)?(i(),o(Z,{key:1,modelValue:b(xe).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>b(xe).currentAddress=e),show:b(J),"data-source":b(Ee),onSubmit:Ve,onClose:t[14]||(t[14]=e=>b(K)(!1))},null,8,["modelValue","show","data-source"])):C("",!0)]})),_:1})}}}))}}}))}();
