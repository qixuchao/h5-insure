!function(){var e=document.createElement("style");e.innerHTML=".com-select .com-select-container[data-v-9c6de82e]{padding:.4rem}.com-select .com-select-container .radio-item[data-v-9c6de82e]{margin:.26667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper[data-v-9c6de82e]{padding:0 .42667rem}.com-select .com-select-container .radio-item .radio-item-wrapper p[data-v-9c6de82e]{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper .name[data-v-9c6de82e]{font-weight:600;margin-right:.4rem}.com-select .com-select-container .radio-item .radio-item-wrapper .phone[data-v-9c6de82e]{font-weight:400}.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:#f2f5fc;height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .left{flex:0 0 50%}.page-info-wrapper .left .trial-result{font-size:.45333rem;color:#393d46}.page-info-wrapper .left .trial-result .result-num{margin-left:.17333rem;color:#ff5840;font-weight:700;margin-left:.21333rem}.page-info-wrapper .left .result-desc{font-size:.32rem;color:#666}.page-info-wrapper .operate-btn{width:50%}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-a96446a8.js","./index-legacy-ec7668fc.js","./trial-legacy-6944861d.js","./trial-legacy-82d53bc7.js","./useDicData-legacy-a5873fad.js","./index-legacy-fc2d40bb.js"],(function(e){"use strict";var t,r,n,a,i,o,d,l,s,u,c,p,f,m,v,I,y,O,L,g,h,b,C,w,k,x,E,P,T,R,V,A,H,_,N,B,j,D,S,U,F,Y;return{setters:[function(e){t=e.g,r=e.E,n=e._,a=e.r,i=e.j,o=e.k,d=e.m,l=e.z,s=e.p,u=e.n,c=e.G,p=e.J,f=e.F,m=e.C,v=e.ak,I=e.O,y=e.Q,O=e.M,L=e.y,g=e.o,h=e.A,b=e.t,C=e.d,w=e.T},function(e){k=e._,x=e.z,E=e.w,P=e.r,T=e.Q,R=e.R,V=e.n,A=e.P},function(e){H=e.p},function(e){_=e.f,N=e.g,B=e.h},function(e){j=e.u},function(e){D=e._,S=e.R,U=e.B,F=e.a,Y=e.b}],execute:function(){const z={class:"com-select-container"},q={class:"radio-item-wrapper"},$={class:"name"},M={class:"hone"},G={class:"address"},Q={class:"footer-button"},J=m("取消"),W=m("确认"),K=t({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const m=e,v=r(m.modelValue),I=r(m.show),y=()=>{t("submit",v.value),I.value=!1},O=()=>{t("close")};return n((()=>m.modelValue),(e=>{v.value=e})),n((()=>v.value),(e=>{t("update:modelValue",e)})),(t,r)=>{const n=a("van-radio"),m=a("van-radio-group"),L=a("VanButton");return i(),o(x,{show:I.value,"onUpdate:show":r[1]||(r[1]=e=>I.value=e),class:"com-select",title:"选择保单通讯信息",onClose:O},{default:d((()=>[l("div",z,[s(m,{modelValue:v.value,"onUpdate:modelValue":r[0]||(r[0]=e=>v.value=e)},{default:d((()=>[(i(!0),u(f,null,c(e.dataSource,((e,t)=>(i(),o(n,{key:t,name:t+1,class:"radio-item"},{default:d((()=>[l("div",q,[l("p",null,[l("span",$,p(e.contactName),1),l("span",M,p(e.contactPhoneNo),1)]),l("p",G,p(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),l("div",Q,[s(L,{plain:"",type:"primary"},{default:d((()=>[J])),_:1}),s(L,{type:"primary",onClick:y},{default:d((()=>[W])),_:1})])])),_:1},8,["show"])}}});var X=k(K,[["__scopeId","data-v-9c6de82e"]]);const Z={key:0,class:"beneficiary-part"},ee={class:"part-title"},te={class:"title"},re=m("删除"),ne=m("+添加受益人"),ae=m("选择保单通讯信息"),ie={class:"radio-item-wrapper"},oe={class:"name"},de={class:"hone"},le={class:"address"},se={class:"footer-button"},ue={class:"left"},ce={class:"trial-result"},pe=m(" 首期"),fe={class:"result-num"},me=l("div",{class:"result-desc"},"实际保费以后续为准",-1),ve={class:"operate-btn"},Ie=m("下一步");e("default",t({setup(e){const t=v(),m=I(),{templateId:k=1,orderNo:x="2022072710380711215",productCode:z,tenantId:q="9991000007",proposalId:$}=m.query,[M,G]=y(),Q="/infoPreview"===m.path?"infoPreview":"infoCollection",J=j("NATIONAL_REGION_CODE"),W=r({}),K=r({extInfo:{pageCode:Q},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ye=r(null),Oe=r([]),Le=r([]),ge=r([]),he=r([]),be=r([]),Ce=O({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0}),we=L((()=>{var e,t,r,n,a,i,o,d,l,s;return[{contactAddress:null===(e=K.value.tenantOrderHolder)||void 0===e||null===(t=e.extInfo)||void 0===t?void 0:t.familyAddress,contactName:K.value.tenantOrderHolder.name,contactPhoneNo:K.value.tenantOrderHolder.mobile},{contactAddress:null===(r=K.value.tenantOrderHolder)||void 0===r||null===(n=r.extInfo)||void 0===n?void 0:n.workAddress,contactName:K.value.tenantOrderHolder.name,contactPhoneNo:K.value.tenantOrderHolder.mobile},{contactAddress:null===(a=K.value.tenantOrderInsuredList[0])||void 0===a||null===(i=a.extInfo)||void 0===i?void 0:i.familyAddress,contactName:null===(o=K.value.tenantOrderInsuredList[0])||void 0===o?void 0:o.name,contactPhoneNo:null===(d=K.value.tenantOrderInsuredList[0])||void 0===d?void 0:d.mobile},{contactAddress:null===(l=K.value.tenantOrderInsuredList[0])||void 0===l||null===(s=l.extInfo)||void 0===s?void 0:s.workAddress,contactName:K.value.tenantOrderInsuredList[0].name,contactPhoneNo:K.value.tenantOrderInsuredList[0].mobile}].filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))||[]})),ke=L((()=>{var e,t;return Ce.currentAddress?we.value[Ce.currentAddress-1]||{}:(null===(e=K.value.extInfo)||void 0===e||null===(t=e.contactInfo)||void 0===t?void 0:t[0])||{}})),xe=e=>{const t={};return e.map((e=>{const{initialAmount:r,annuityDrawFrequency:n,annuityDrawType:a,paymentFrequency:i,paymentPeriod:o,paymentPeriodType:d,insurancePeriodType:l,insurancePeriodValue:s,riskCode:u,riskType:c,initialPremium:p,liabilityDetails:f,extInfo:m}=e,{riskId:v,copy:I}=m,y={amount:r,annuityDrawDate:n,annuityDrawType:a,paymentFrequency:i,riskId:v,copy:I,chargePeriod:o?`${_[d]}_${o}`:_[d],coveragePeriod:s?`${N[l]}_${s}`:N[l],riskCode:u,riskType:c,premium:p,liabilityVOList:f};return c===B.mainRisk?(t.mainRiskCode=u,t.mainRiskId=v):Object.assign(y,t),y}))},Ee=()=>{var e;null===(e=ye.value)||void 0===e||e.validate().then((()=>{const{birthday:e,gender:r,extInfo:n}=K.value.tenantOrderHolder,{hasSocialInsurance:a,occupationCodeList:i}=n,{birthday:o,gender:d,extInfo:l,tenantOrderProductList:s}=K.value.tenantOrderInsuredList[0],{hasSocialInsurance:u,occupationCodeList:c}=l,p={holder:{personVO:{birthday:C(e).format("YYYY-MM-DD"),gender:r,socialFlag:a,occupationCodeList:i}},productCode:z,insuredVOList:[{insuredCode:"",personVO:{birthday:C(o).format("YYYY-MM-DD"),gender:d,socialFlag:u,occupationCodeList:c},productPlanVOList:[{insurerCode:"",planCode:"",riskVOList:xe(s[0].tenantOrderRiskList)}]}]};H({...p}).then((({code:e,data:r})=>{if("10000"===e){const e={},n=(t=[])=>{(t||[]).forEach((t=>{var r;e[t.riskCode]=t,null!==(r=t.riskPremiumDetailVOList)&&void 0!==r&&r.length&&n(t.riskPremiumDetailVOList)}))};n(r.riskPremiumDetailVOList),K.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={...K.value.tenantOrderInsuredList[0].tenantOrderProductList[0],premium:r.premium,tenantOrderRiskList:K.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((t=>({...t,initialAmount:e[t.riskCode].amount,initialPremium:e[t.riskCode].premium})))},(()=>{var e;const r={...K.value};r.extInfo={...r.extInfo,contactInfo:[ke.value]},r.tenantOrderAttachmentList=[{category:T.OBVERSE_CERT,objectType:R.HOLDER,objectId:K.value.tenantOrderHolder.id,name:"投保人证件正面",uri:Oe.value[0],id:ge.value[0]},{category:T.REVERSE_CERT,objectType:R.HOLDER,objectId:K.value.tenantOrderHolder.id,name:"投保人证件背面",uri:Oe.value[1],id:ge.value[1]},{category:T.OBVERSE_CERT,objectType:R.INSURED,objectId:K.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:Le.value[0]||Oe.value[0],id:he.value[1]},{category:T.REVERSE_CERT,objectType:R.INSURED,objectId:K.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:Le.value[1]||Oe.value[1],id:he.value[1]}],null===(e=ye.value)||void 0===e||e.validate().then((e=>{if(r.tenantOrderInsuredList[0].insuredBeneficiaryType===Y.SPECIFY){const e={};if(r.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((t=>{e[t.benefitOrder]?e[t.benefitOrder].sum+=Number(t.benefitRate):e[t.benefitOrder]={sum:Number(t.benefitRate)}})),Object.values(e).some((e=>100!==e.sum)))return void w.fail("同一顺位的受益人比例之和必须为100")}V(r).then((({code:e,data:r})=>{"10000"===e&&"jumpToPage"===r.pageAction.pageAction&&t.push({path:A[r.pageAction.data.nextPageCode],query:m.query})}))}))})()}}))}))},Pe=e=>{},Te=()=>{Ce.beneficiaryId+=1,K.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:Ce.beneficiaryId,extInfo:{}})};return g((()=>{P({orderNo:x,tenantId:q}).then((({code:e,data:t})=>{if("10000"===e){const e=t;e.extInfo={...e.extInfo,pageCode:Q,templateId:k},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const t=e;return t.extInfo=t.extInfo||{occupationCodeList:[]},t})),e.tenantOrderAttachmentList.forEach((e=>{e.category===T.OBVERSE_CERT?e.objectType===R.HOLDER?(Oe.value[0]=e.uri,ge.value[0]=e.id):e.objectType===R.INSURED&&(Le.value[0]=e.uri,he.value[0]=e.id):e.category===T.REVERSE_CERT&&(e.objectType===R.HOLDER?(Oe.value[1]=e.uri,ge.value[1]=e.id):e.objectType===R.INSURED&&(Le.value[1]=e.uri,ge.value[1]=e.id))})),Object.assign(K.value,e)}})).finally((()=>{Ce.isLoading=!1})),E({pageCode:"infoCollection",templateId:k}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),W.value=e}}))})),n([()=>K.value.tenantOrderInsuredList[0].relationToHolder,()=>K.value.tenantOrderHolder],(()=>{`${K.value.tenantOrderInsuredList[0].relationToHolder}`===F.SELF&&Object.assign(K.value.tenantOrderInsuredList[0],K.value.tenantOrderHolder,{id:K.value.tenantOrderInsuredList[0].id,extInfo:{...K.value.tenantOrderHolder.extInfo,insureProvinceCode:K.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:K.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:K.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),(e,t)=>{const r=a("ProCard"),n=a("ProRadioButton"),m=a("ProField"),v=a("ProCascader"),I=a("ProSvg"),y=a("VanButton"),O=a("ProCheckButton"),L=a("van-cell"),g=a("ProForm"),C=a("ProPageWrap");return i(),o(C,{class:"page-info-wrapper"},{default:d((()=>{var e,a,C,w,k;return[h(Ce).isLoading?b("",!0):(i(),o(g,{key:0,ref_key:"formRef",ref:ye},{default:d((()=>[s(r,{title:"投保人"},{default:d((()=>[s(D,{images:Oe.value,"onUpdate:images":t[0]||(t[0]=e=>Oe.value=e),"form-info":K.value.tenantOrderHolder,"factor-list":W.value.HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),s(r,{title:"被保人"},{default:d((()=>[s(m,{modelValue:K.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>K.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:d((()=>[s(n,{modelValue:K.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>K.value.tenantOrderInsuredList[0].relationToHolder=e),options:h(S)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+K.value.tenantOrderInsuredList[0].relationToHolder?(i(),o(D,{key:0,images:Le.value,"onUpdate:images":t[3]||(t[3]=e=>Le.value=e),"form-info":K.value.tenantOrderInsuredList[0],"factor-list":W.value.INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):b("",!0),s(v,{modelValue:K.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>K.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:K.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>K.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:K.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>K.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:K.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>K.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":h(J),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),s(r,{title:"受益人"},{default:d((()=>[s(m,{modelValue:K.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>K.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:d((()=>[s(n,{modelValue:K.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>K.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:h(U)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==K.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(i(),u("div",Z,[(i(!0),u(f,null,c(K.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,r)=>(i(),u("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[l("div",ee,[l("span",te,p(`受益人${r+1}`),1),s(I,{name:"delete",onClick:t=>{return r=e,void(K.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=K.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==r.beneficiaryId||r.id!==e.id)));var r}},{default:d((()=>[re])),_:2},1032,["onClick"])]),s(D,{images:be.value,"onUpdate:images":t[10]||(t[10]=e=>be.value=e),"form-info":e,"factor-list":W.value.BENEFICIARY||[],prefix:`beneficiary-${r}`,"beneficiary-list":K.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),s(y,{onClick:Te},{default:d((()=>[ne])),_:1})])):b("",!0)])),_:1}),s(r,{title:"保单通讯信息"},{default:d((()=>{var e;return[null!==(e=Object.keys(h(ke)))&&void 0!==e&&e.length?(i(),o(L,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>h(G)(!0))},{title:d((()=>[l("div",ie,[l("p",null,[l("span",oe,p(h(ke).contactName),1),l("span",de,p(h(ke).contactPhoneNo),1)]),l("p",le,p(h(ke).contactAddress),1)])])),_:1})):(i(),o(O,{key:0,activated:"",onClick:t[11]||(t[11]=e=>h(G)(!0))},{default:d((()=>[ae])),_:1}))]})),_:1})])),_:1},512)),l("div",se,[l("div",ue,[l("div",ce,[pe,l("span",fe,"￥"+p(null===(e=K.value.tenantOrderInsuredList)||void 0===e||null===(a=e[0])||void 0===a||null===(C=a.tenantOrderProductList)||void 0===C||null===(w=C[0].premium)||void 0===w||null===(k=w.toLocaleString)||void 0===k?void 0:k.call(w)),1)]),me]),l("div",ve,[s(y,{block:"",type:"primary",onClick:Ee},{default:d((()=>[Ie])),_:1})])]),h(M)?(i(),o(X,{key:1,modelValue:h(Ce).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>h(Ce).currentAddress=e),show:h(M),"data-source":h(we),onSubmit:Pe,onClose:t[14]||(t[14]=e=>h(G)(!1))},null,8,["modelValue","show","data-source"])):b("",!0)]})),_:1})}}}))}}}))}();
