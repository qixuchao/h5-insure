!function(){var e=document.createElement("style");e.innerHTML=".com-select .com-select-container[data-v-a821acd4]{padding:.4rem}.com-select .com-select-container .radio-item[data-v-a821acd4]{margin:.26667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper[data-v-a821acd4]{padding:0 .42667rem}.com-select .com-select-container .radio-item .radio-item-wrapper p[data-v-a821acd4]{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper .name[data-v-a821acd4]{font-weight:600;margin-right:.4rem}.com-select .com-select-container .radio-item .radio-item-wrapper .phone[data-v-a821acd4]{font-weight:400}.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .left{flex:0 0 50%}.page-info-wrapper .left .trial-result{font-size:.45333rem;color:#393d46}.page-info-wrapper .left .trial-result .result-num{margin-left:.17333rem;color:var(--zaui-price, #ff5840);font-weight:700;margin-left:.21333rem}.page-info-wrapper .left .result-desc{font-size:.32rem;color:#666}.page-info-wrapper .operate-btn{width:50%}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./index-legacy-cd3003a5.js","./trial-legacy-a574facb.js","./trial-legacy-db7d0f1d.js","./useDicData-legacy-2d1f9218.js","./infoCollection-legacy-e4ea6a32.js","./index-legacy-fce989a3.js","./pdfh5-legacy-a219347c.js","./pdfdist-legacy-c3ea4af6.js","./relativeTime-legacy-33cdce41.js"],(function(e){"use strict";var t,a,r,n,i,o,d,l,s,u,c,p,f,m,v,I,y,O,L,g,b,h,C,w,x,E,P,T,k,V,R,A,H,_,N,j,B,D,S,U,F,Y,z;return{setters:[function(e){t=e._,a=e.d,r=e.r,n=e.a8,i=e.b,o=e.c,d=e.e,l=e.w,s=e.i,u=e.f,c=e.g,p=e.h,f=e.t,m=e.F,v=e.Y,I=e.n,y=e.u,O=e.a,L=e.H,g=e.A,b=e.y,h=e.ao,C=e.Q,w=e.l,x=e.j,E=e.a0,P=e.p,T=e.a6,k=e.a7,V=e.N,R=e.T,A=e.D,H=e.E},function(e){_=e.p},function(e){N=e.P,j=e.I,B=e.R},function(e){D=e.u},function(e){S=e.R,U=e.a,F=e.B,Y=e.b},function(e){z=e._},function(){},function(){},function(){}],execute:function(){const M={class:"com-select-container"},q={class:"radio-item-wrapper"},$={class:"name"},G={class:"hone"},K={class:"address"},Q={class:"footer-button"},W=I("取消"),J=I("确认"),X=a({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const a=e,I=r(a.modelValue),y=r(a.show),O=()=>{t("submit",I.value),y.value=!1},L=()=>{t("close")};return n((()=>a.modelValue),(e=>{I.value=e})),n((()=>I.value),(e=>{t("update:modelValue",e)})),(t,a)=>{const r=i("van-radio"),n=i("van-radio-group"),g=i("VanButton");return o(),d(v,{show:y.value,"onUpdate:show":a[1]||(a[1]=e=>y.value=e),class:"com-select",title:"选择保单通讯信息",onClose:L},{default:l((()=>[s("div",M,[u(n,{modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]=e=>I.value=e)},{default:l((()=>[(o(!0),c(m,null,p(e.dataSource,((e,t)=>(o(),d(r,{key:t,name:t+1,class:"radio-item"},{default:l((()=>[s("div",q,[s("p",null,[s("span",$,f(e.contactName),1),s("span",G,f(e.contactPhoneNo),1)]),s("p",K,f(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),s("div",Q,[u(g,{plain:"",type:"primary"},{default:l((()=>[W])),_:1}),u(g,{type:"primary",onClick:O},{default:l((()=>[J])),_:1})])])),_:1},8,["show"])}}});var Z=t(X,[["__scopeId","data-v-a821acd4"]]);const ee={key:0,class:"beneficiary-part"},te={class:"part-title"},ae={class:"title"},re=I("删除"),ne=I("+添加受益人"),ie=I("选择保单通讯信息"),oe={class:"radio-item-wrapper"},de={class:"name"},le={class:"hone"},se={class:"address"},ue={class:"footer-button","safe-area-inset-bottom":""},ce={class:"left"},pe={class:"trial-result"},fe=I(" 首期"),me={class:"result-num"},ve=s("div",{class:"result-desc"},"实际保费以后续为准",-1),Ie={class:"operate-btn"},ye=I("下一步");e("default",a({setup(e){const t=y(),a=O(),{templateId:v=1,orderNo:I="2022072710380711215",productCode:M,tenantId:q="9991000007",proposalId:$,insurerCode:G="kunlunhealth"}=a.query,[K,Q]=L(),W="/infoPreview"===a.path?"infoPreview":"infoCollection",J=D("NATIONAL_REGION_CODE"),X=r({}),Oe=r({extInfo:{pageCode:W},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),Le=r(null),ge=r([]),be=r([]),he=r([]),Ce=r([]),we=r([]),xe=g({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0}),Ee=b((()=>[{contactAddress:Oe.value.tenantOrderHolder?.extInfo?.familyAddress,contactName:Oe.value.tenantOrderHolder.name,contactPhoneNo:Oe.value.tenantOrderHolder.mobile},{contactAddress:Oe.value.tenantOrderHolder?.extInfo?.workAddress,contactName:Oe.value.tenantOrderHolder.name,contactPhoneNo:Oe.value.tenantOrderHolder.mobile},{contactAddress:Oe.value.tenantOrderInsuredList[0]?.extInfo?.familyAddress,contactName:Oe.value.tenantOrderInsuredList[0]?.name,contactPhoneNo:Oe.value.tenantOrderInsuredList[0]?.mobile},{contactAddress:Oe.value.tenantOrderInsuredList[0]?.extInfo?.workAddress,contactName:Oe.value.tenantOrderInsuredList[0].name,contactPhoneNo:Oe.value.tenantOrderInsuredList[0].mobile}].filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))||[])),Pe=b((()=>xe.currentAddress?Ee.value[xe.currentAddress-1]||{}:Oe.value.extInfo?.contactInfo?.[0]||{})),Te=e=>{const t={};return e.map((e=>{const{initialAmount:a,annuityDrawFrequency:r,annuityDrawType:n,paymentFrequency:i,paymentPeriod:o,paymentPeriodType:d,insurancePeriodType:l,insurancePeriodValue:s,riskCode:u,riskType:c,initialPremium:p,liabilityDetails:f,extInfo:m}=e,{riskId:v,copy:I}=m,y={amount:a,annuityDrawDate:r,annuityDrawType:n,paymentFrequency:i,riskId:v,copy:I,chargePeriod:o?`${N[d]}_${o}`:N[d],coveragePeriod:s?`${j[l]}_${s}`:j[l],riskCode:u,riskType:c,premium:p,liabilityVOList:f.map((e=>({...e,liabilityAttributeValue:e.refundMethod,liabilityAttributeCode:e.refundMethod&&1})))};return c===B.MAIN_RISK?(t.mainRiskCode=u,t.mainRiskId=v):Object.assign(y,t),y}))},ke=()=>{Le.value?.validate().then((()=>{const{birthday:e,gender:r,extInfo:n}=Oe.value.tenantOrderHolder,{hasSocialInsurance:i,occupationCodeList:o}=n,{birthday:d,gender:l,extInfo:s,tenantOrderProductList:u}=Oe.value.tenantOrderInsuredList[0],{hasSocialInsurance:c,occupationCodeList:p}=s,f={holder:{personVO:{birthday:E(e).format("YYYY-MM-DD"),gender:r,socialFlag:i,occupationCodeList:o}},productCode:M,insuredVOList:[{insurerCode:G,personVO:{birthday:E(d).format("YYYY-MM-DD"),gender:l,socialFlag:c,occupationCodeList:p},productPlanVOList:[{insurerCode:G,planCode:"",riskVOList:Te(u[0].tenantOrderRiskList)}]}]};_({...f}).then((({code:e,data:r})=>{if("10000"===e){const e={},n=(t=[])=>{(t||[]).forEach((t=>{e[t.riskCode]=t,t.riskPremiumDetailVOList?.length&&n(t.riskPremiumDetailVOList)}))};n(r.riskPremiumDetailVOList),Oe.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={...Oe.value.tenantOrderInsuredList[0].tenantOrderProductList[0],premium:r.premium,tenantOrderRiskList:Oe.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((t=>({...t,initialAmount:e[t.riskCode].amount,initialPremium:e[t.riskCode].premium})))},(()=>{const e={...Oe.value};e.extInfo={...e.extInfo,contactInfo:[Pe.value],buttonCode:V.infoCollection},e.tenantOrderAttachmentList=[{category:T.OBVERSE_CERT,objectType:k.HOLDER,objectId:Oe.value.tenantOrderHolder.id,name:"投保人证件正面",uri:ge.value[0],id:he.value[0]},{category:T.REVERSE_CERT,objectType:k.HOLDER,objectId:Oe.value.tenantOrderHolder.id,name:"投保人证件背面",uri:ge.value[1],id:he.value[1]},{category:T.OBVERSE_CERT,objectType:k.INSURED,objectId:Oe.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:be.value[0]||ge.value[0],id:Ce.value[1]},{category:T.REVERSE_CERT,objectType:k.INSURED,objectId:Oe.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:be.value[1]||ge.value[1],id:Ce.value[1]}].filter((e=>e.uri)),Le.value?.validate().then((r=>{if(e.tenantOrderInsuredList[0].insuredBeneficiaryType===Y.SPECIFY){const t={};if(e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((e=>{t[e.benefitOrder]?t[e.benefitOrder].sum+=Number(e.benefitRate):t[e.benefitOrder]={sum:Number(e.benefitRate)}})),Object.values(t).some((e=>100!==e.sum)))return void R.fail("同一顺位的受益人比例之和必须为100")}A(e).then((({code:e,data:r})=>{"10000"===e&&"jumpToPage"===r.pageAction.pageAction&&t.push({path:H[r.pageAction.data.nextPageCode],query:a.query})}))}))})()}}))}))},Ve=e=>{},Re=()=>{xe.beneficiaryId+=1,Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:xe.beneficiaryId,extInfo:{}})};return h((()=>{P({orderNo:I,tenantId:q}).then((({code:e,data:t})=>{if("10000"===e){const e=t;e.extInfo={...e.extInfo,pageCode:W,templateId:v},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo={...e.tenantOrderHolder.extInfo,occupationCodeList:e.tenantOrderHolder.extInfo?.occupationCodeList||[]},e.tenantOrderInsuredList[0].extInfo={...e.tenantOrderInsuredList[0].extInfo,occupationCodeList:e.tenantOrderInsuredList[0].extInfo?.occupationCodeList||[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const t=e;return t.extInfo={...t.extInfo,occupationCodeList:t.extInfo?.occupationCodeList||[]},t})),e.tenantOrderAttachmentList.forEach((e=>{e.category===T.OBVERSE_CERT?e.objectType===k.HOLDER?(ge.value[0]=e.uri,he.value[0]=e.id):e.objectType===k.INSURED&&(be.value[0]=e.uri,Ce.value[0]=e.id):e.category===T.REVERSE_CERT&&(e.objectType===k.HOLDER?(ge.value[1]=e.uri,he.value[1]=e.id):e.objectType===k.INSURED&&(be.value[1]=e.uri,he.value[1]=e.id))})),Object.assign(Oe.value,e)}})).finally((()=>{xe.isLoading=!1})),C({pageCode:"infoCollection",templateId:v}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),X.value=e}}))})),n([()=>Oe.value.tenantOrderInsuredList[0].relationToHolder,()=>Oe.value.tenantOrderHolder],(()=>{`${Oe.value.tenantOrderInsuredList[0].relationToHolder}`===S.SELF&&Object.assign(Oe.value.tenantOrderInsuredList[0],Oe.value.tenantOrderHolder,{id:Oe.value.tenantOrderInsuredList[0].id,extInfo:{...Oe.value.tenantOrderHolder.extInfo,insureProvinceCode:Oe.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:Oe.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),(e,t)=>{const a=i("ProCard"),r=i("ProRadioButton"),n=i("ProField"),v=i("ProCascader"),I=i("ProSvg"),y=i("VanButton"),O=i("ProCheckButton"),L=i("van-cell"),g=i("ProForm"),b=i("ProPageWrap");return o(),d(b,{class:"page-info-wrapper"},{default:l((()=>[w(xe).isLoading?x("",!0):(o(),d(g,{key:0,ref_key:"formRef",ref:Le},{default:l((()=>[u(a,{title:"投保人"},{default:l((()=>[u(z,{images:ge.value,"onUpdate:images":t[0]||(t[0]=e=>ge.value=e),"form-info":Oe.value.tenantOrderHolder,"factor-list":X.value.HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),u(a,{title:"被保人"},{default:l((()=>[u(n,{modelValue:Oe.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>Oe.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:l((()=>[u(r,{modelValue:Oe.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>Oe.value.tenantOrderInsuredList[0].relationToHolder=e),options:w(U)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+Oe.value.tenantOrderInsuredList[0].relationToHolder?(o(),d(z,{key:0,images:be.value,"onUpdate:images":t[3]||(t[3]=e=>be.value=e),"form-info":Oe.value.tenantOrderInsuredList[0],"factor-list":X.value.INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):x("",!0),u(v,{modelValue:Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:Oe.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:Oe.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>Oe.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":w(J),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),u(a,{title:"受益人"},{default:l((()=>[u(n,{modelValue:Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:l((()=>[u(r,{modelValue:Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:w(F)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==Oe.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(o(),c("div",ee,[(o(!0),c(m,null,p(Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,a)=>(o(),c("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[s("div",te,[s("span",ae,f(`受益人${a+1}`),1),u(I,{name:"delete",onClick:t=>{return a=e,void(Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==a.beneficiaryId||a.id!==e.id)));var a}},{default:l((()=>[re])),_:2},1032,["onClick"])]),u(z,{images:we.value,"onUpdate:images":t[10]||(t[10]=e=>we.value=e),"form-info":e,"factor-list":X.value.BENEFICIARY||[],prefix:`beneficiary-${a}`,"beneficiary-list":Oe.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),u(y,{onClick:Re},{default:l((()=>[ne])),_:1})])):x("",!0)])),_:1}),u(a,{title:"保单通讯信息"},{default:l((()=>[Object.keys(w(Pe))?.length?(o(),d(L,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>w(Q)(!0))},{title:l((()=>[s("div",oe,[s("p",null,[s("span",de,f(w(Pe).contactName),1),s("span",le,f(w(Pe).contactPhoneNo),1)]),s("p",se,f(w(Pe).contactAddress),1)])])),_:1})):(o(),d(O,{key:0,activated:"",onClick:t[11]||(t[11]=e=>w(Q)(!0))},{default:l((()=>[ie])),_:1}))])),_:1})])),_:1},512)),s("div",ue,[s("div",ce,[s("div",pe,[fe,s("span",me,"￥"+f(Oe.value.tenantOrderInsuredList?.[0]?.tenantOrderProductList?.[0].premium?.toLocaleString?.()),1)]),ve]),s("div",Ie,[u(y,{block:"",type:"primary",onClick:ke},{default:l((()=>[ye])),_:1})])]),w(K)?(o(),d(Z,{key:1,modelValue:w(xe).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>w(xe).currentAddress=e),show:w(K),"data-source":w(Ee),onSubmit:Ve,onClose:t[14]||(t[14]=e=>w(Q)(!1))},null,8,["modelValue","show","data-source"])):x("",!0)])),_:1})}}}))}}}))}();
