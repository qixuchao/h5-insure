!function(){var e=document.createElement("style");e.innerHTML=".com-select .com-select-container[data-v-a821acd4]{padding:.4rem}.com-select .com-select-container .radio-item[data-v-a821acd4]{margin:.26667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper[data-v-a821acd4]{padding:0 .42667rem}.com-select .com-select-container .radio-item .radio-item-wrapper p[data-v-a821acd4]{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper .name[data-v-a821acd4]{font-weight:600;margin-right:.4rem}.com-select .com-select-container .radio-item .radio-item-wrapper .phone[data-v-a821acd4]{font-weight:400}.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .left{flex:0 0 50%}.page-info-wrapper .left .trial-result{font-size:.45333rem;color:#393d46}.page-info-wrapper .left .trial-result .result-num{margin-left:.17333rem;color:var(--zaui-price, #ff5840);font-weight:700;margin-left:.21333rem}.page-info-wrapper .left .result-desc{font-size:.32rem;color:#666}.page-info-wrapper .operate-btn{width:50%}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./index-legacy-991c023d.js","./trial-legacy-2ae513fd.js","./trial-legacy-bb2044a0.js","./useDicData-legacy-abb668b3.js","./infoCollection-legacy-aa24b621.js","./index-legacy-5ecdc5b4.js","./pdfh5-legacy-9f98dc45.js","./relativeTime-legacy-4b5b6d28.js"],(function(e){"use strict";var t,a,n,r,i,o,d,l,s,u,c,p,f,m,v,I,y,O,L,g,b,h,C,w,x,E,T,k,R,V,P,A,H,_,N,j,D,S,B,U,F,Y,M,z,$,q,G,J,K,W,Q,X,Z,ee;return{setters:[function(e){t=e._,a=e.d,n=e.r,r=e.am,i=e.c,o=e.e,d=e.w,l=e.i,s=e.f,u=e.g,c=e.h,p=e.t,f=e.F,m=e.a7,v=e.n,I=e.R,y=e.s,O=e.B,L=e.u,g=e.a,b=e.S,h=e.J,C=e.E,w=e.aD,x=e.$,E=e.C,T=e.b,k=e.m,R=e.j,V=e.ac,P=e.p,A=e.aj,H=e.ak,_=e.P,N=e.l,j=e.ao,D=e.aE,S=e.V,B=e.aF,U=e.at,F=e.N,Y=e.T,M=e.M,z=e.O},function(e){$=e.p},function(e){q=e.P,G=e.I,J=e.R},function(e){K=e.u},function(e){W=e.R,Q=e.a,X=e.B,Z=e.b},function(e){ee=e._},function(){},function(){}],execute:function(){const te={class:"com-select-container"},ae={class:"radio-item-wrapper"},ne={class:"name"},re={class:"hone"},ie={class:"address"},oe={class:"footer-button"},de=v("取消"),le=v("确认"),se=a({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const a=e,v=n(a.modelValue),L=n(a.show),g=()=>{t("submit",v.value),L.value=!1},b=()=>{t("close")};return r((()=>a.modelValue),(e=>{v.value=e})),r((()=>v.value),(e=>{t("update:modelValue",e)})),(t,a)=>{const n=I,r=y,h=O;return i(),o(m,{show:L.value,"onUpdate:show":a[1]||(a[1]=e=>L.value=e),class:"com-select",title:"选择保单通讯信息",onClose:b},{default:d((()=>[l("div",te,[s(r,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e)},{default:d((()=>[(i(!0),u(f,null,c(e.dataSource,((e,t)=>(i(),o(n,{key:t,name:t+1,class:"radio-item"},{default:d((()=>[l("div",ae,[l("p",null,[l("span",ne,p(e.contactName),1),l("span",re,p(e.contactPhoneNo),1)]),l("p",ie,p(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),l("div",oe,[s(h,{plain:"",type:"primary"},{default:d((()=>[de])),_:1}),s(h,{type:"primary",onClick:g},{default:d((()=>[le])),_:1})])])),_:1},8,["show"])}}});var ue=t(se,[["__scopeId","data-v-a821acd4"]]);const ce={key:0,class:"beneficiary-part"},pe={class:"part-title"},fe={class:"title"},me=v("删除"),ve=v("+添加受益人"),Ie=v("选择保单通讯信息"),ye={class:"radio-item-wrapper"},Oe={class:"name"},Le={class:"hone"},ge={class:"address"},be={class:"footer-button","safe-area-inset-bottom":""},he={class:"left"},Ce={class:"trial-result"},we=v(" 首期"),xe={class:"result-num"},Ee=l("div",{class:"result-desc"},"实际保费以后续为准",-1),Te={class:"operate-btn"},ke=v("下一步");e("default",a({setup(e){const t=L(),a=g(),{templateId:m=1,orderNo:v="2022072710380711215",productCode:I,tenantId:y="9991000007",proposalId:te,insurerCode:ae="kunlunhealth"}=a.query,[ne,re]=b(),ie="/infoPreview"===a.path?"infoPreview":"infoCollection",oe=K("NATIONAL_REGION_CODE"),de=n({}),le=n({extInfo:{pageCode:ie},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),se=n(null),Re=n([]),Ve=n([]),Pe=n([]),Ae=n([]),He=n([]),_e=h({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0}),Ne=C((()=>{var e,t,a,n,r,i,o,d,l,s;return[{contactAddress:null===(e=le.value.tenantOrderHolder)||void 0===e||null===(t=e.extInfo)||void 0===t?void 0:t.familyAddress,contactName:le.value.tenantOrderHolder.name,contactPhoneNo:le.value.tenantOrderHolder.mobile},{contactAddress:null===(a=le.value.tenantOrderHolder)||void 0===a||null===(n=a.extInfo)||void 0===n?void 0:n.workAddress,contactName:le.value.tenantOrderHolder.name,contactPhoneNo:le.value.tenantOrderHolder.mobile},{contactAddress:null===(r=le.value.tenantOrderInsuredList[0])||void 0===r||null===(i=r.extInfo)||void 0===i?void 0:i.familyAddress,contactName:null===(o=le.value.tenantOrderInsuredList[0])||void 0===o?void 0:o.name,contactPhoneNo:null===(d=le.value.tenantOrderInsuredList[0])||void 0===d?void 0:d.mobile},{contactAddress:null===(l=le.value.tenantOrderInsuredList[0])||void 0===l||null===(s=l.extInfo)||void 0===s?void 0:s.workAddress,contactName:le.value.tenantOrderInsuredList[0].name,contactPhoneNo:le.value.tenantOrderInsuredList[0].mobile}].filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))||[]})),je=C((()=>{var e,t;return _e.currentAddress?Ne.value[_e.currentAddress-1]||{}:(null===(e=le.value.extInfo)||void 0===e||null===(t=e.contactInfo)||void 0===t?void 0:t[0])||{}})),De=e=>{const t={};return e.map((e=>{const{initialAmount:a,annuityDrawFrequency:n,annuityDrawType:r,paymentFrequency:i,paymentPeriod:o,paymentPeriodType:d,insurancePeriodType:l,insurancePeriodValue:s,riskCode:u,riskType:c,initialPremium:p,liabilityDetails:f,extInfo:m}=e,{riskId:v,copy:I}=m,y={amount:a,annuityDrawDate:n,annuityDrawType:r,paymentFrequency:i,riskId:v,copy:I,chargePeriod:o?`${q[d]}_${o}`:q[d],coveragePeriod:s?`${G[l]}_${s}`:G[l],riskCode:u,riskType:c,premium:p,liabilityVOList:f.map((e=>({...e,liabilityAttributeValue:e.refundMethod,liabilityAttributeCode:e.refundMethod&&1})))};return c===J.MAIN_RISK?(t.mainRiskCode=u,t.mainRiskId=v):Object.assign(y,t),y}))},Se=()=>{var e;null===(e=se.value)||void 0===e||e.validate().then((()=>{const{birthday:e,gender:n,extInfo:r}=le.value.tenantOrderHolder,{hasSocialInsurance:i,occupationCodeList:o}=r,{birthday:d,gender:l,extInfo:s,tenantOrderProductList:u}=le.value.tenantOrderInsuredList[0],{hasSocialInsurance:c,occupationCodeList:p}=s,f={holder:{personVO:{birthday:V(e).format("YYYY-MM-DD"),gender:n,socialFlag:i,occupationCodeList:o}},productCode:I,insuredVOList:[{insurerCode:ae,personVO:{birthday:V(d).format("YYYY-MM-DD"),gender:l,socialFlag:c,occupationCodeList:p},productPlanVOList:[{insurerCode:ae,planCode:"",riskVOList:De(u[0].tenantOrderRiskList)}]}]};$({...f}).then((({code:e,data:n})=>{if("10000"===e){const e={},r=(t=[])=>{(t||[]).forEach((t=>{var a;e[t.riskCode]=t,null!==(a=t.riskPremiumDetailVOList)&&void 0!==a&&a.length&&r(t.riskPremiumDetailVOList)}))};r(n.riskPremiumDetailVOList),le.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={...le.value.tenantOrderInsuredList[0].tenantOrderProductList[0],premium:n.premium,tenantOrderRiskList:le.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((t=>({...t,initialAmount:e[t.riskCode].amount,initialPremium:e[t.riskCode].premium})))},(()=>{var e;const n={...le.value};n.extInfo={...n.extInfo,contactInfo:[je.value],buttonCode:F.infoCollection},n.tenantOrderAttachmentList=[{category:A.OBVERSE_CERT,objectType:H.HOLDER,objectId:le.value.tenantOrderHolder.id,name:"投保人证件正面",uri:Re.value[0],id:Pe.value[0]},{category:A.REVERSE_CERT,objectType:H.HOLDER,objectId:le.value.tenantOrderHolder.id,name:"投保人证件背面",uri:Re.value[1],id:Pe.value[1]},{category:A.OBVERSE_CERT,objectType:H.INSURED,objectId:le.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:Ve.value[0]||Re.value[0],id:Ae.value[1]},{category:A.REVERSE_CERT,objectType:H.INSURED,objectId:le.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:Ve.value[1]||Re.value[1],id:Ae.value[1]}].filter((e=>e.uri)),null===(e=se.value)||void 0===e||e.validate().then((e=>{if(n.tenantOrderInsuredList[0].insuredBeneficiaryType===Z.SPECIFY){const e={};if(n.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((t=>{e[t.benefitOrder]?e[t.benefitOrder].sum+=Number(t.benefitRate):e[t.benefitOrder]={sum:Number(t.benefitRate)}})),Object.values(e).some((e=>100!==e.sum)))return void Y.fail("同一顺位的受益人比例之和必须为100")}M(n).then((({code:e,data:n})=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&t.push({path:z[n.pageAction.data.nextPageCode],query:a.query})}))}))})()}}))}))},Be=e=>{},Ue=()=>{_e.beneficiaryId+=1,le.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:_e.beneficiaryId,extInfo:{}})};return w((()=>{P({orderNo:v,tenantId:y}).then((({code:e,data:t})=>{if("10000"===e){var a,n;const e=t;e.extInfo={...e.extInfo,pageCode:ie,templateId:m},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo={...e.tenantOrderHolder.extInfo,occupationCodeList:(null===(a=e.tenantOrderHolder.extInfo)||void 0===a?void 0:a.occupationCodeList)||[]},e.tenantOrderInsuredList[0].extInfo={...e.tenantOrderInsuredList[0].extInfo,occupationCodeList:(null===(n=e.tenantOrderInsuredList[0].extInfo)||void 0===n?void 0:n.occupationCodeList)||[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{var t;const a=e;return a.extInfo={...a.extInfo,occupationCodeList:(null===(t=a.extInfo)||void 0===t?void 0:t.occupationCodeList)||[]},a})),e.tenantOrderAttachmentList.forEach((e=>{e.category===A.OBVERSE_CERT?e.objectType===H.HOLDER?(Re.value[0]=e.uri,Pe.value[0]=e.id):e.objectType===H.INSURED&&(Ve.value[0]=e.uri,Ae.value[0]=e.id):e.category===A.REVERSE_CERT&&(e.objectType===H.HOLDER?(Re.value[1]=e.uri,Pe.value[1]=e.id):e.objectType===H.INSURED&&(Ve.value[1]=e.uri,Pe.value[1]=e.id))})),Object.assign(le.value,e)}})).finally((()=>{_e.isLoading=!1})),x({pageCode:"infoCollection",templateId:m}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),de.value=e}}))})),r([()=>le.value.tenantOrderInsuredList[0].relationToHolder,()=>le.value.tenantOrderHolder],(()=>{`${le.value.tenantOrderInsuredList[0].relationToHolder}`===W.SELF&&Object.assign(le.value.tenantOrderInsuredList[0],le.value.tenantOrderHolder,{id:le.value.tenantOrderInsuredList[0].id,extInfo:{...le.value.tenantOrderHolder.extInfo,insureProvinceCode:le.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:le.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:le.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),(e,t)=>{const a=_,n=N,r=j,m=D,v=S,I=O,y=B,L=E,g=U,b=T("ProPageWrap");return i(),o(b,{class:"page-info-wrapper"},{default:d((()=>{var e,O,b,h,C;return[k(_e).isLoading?R("",!0):(i(),o(g,{key:0,ref_key:"formRef",ref:se},{default:d((()=>[s(a,{title:"投保人"},{default:d((()=>[s(ee,{images:Re.value,"onUpdate:images":t[0]||(t[0]=e=>Re.value=e),"form-info":le.value.tenantOrderHolder,"factor-list":de.value.HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),s(a,{title:"被保人"},{default:d((()=>[s(r,{modelValue:le.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>le.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:d((()=>[s(n,{modelValue:le.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>le.value.tenantOrderInsuredList[0].relationToHolder=e),options:k(Q)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+le.value.tenantOrderInsuredList[0].relationToHolder?(i(),o(ee,{key:0,images:Ve.value,"onUpdate:images":t[3]||(t[3]=e=>Ve.value=e),"form-info":le.value.tenantOrderInsuredList[0],"factor-list":de.value.INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):R("",!0),s(m,{modelValue:le.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>le.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:le.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>le.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:le.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>le.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:le.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>le.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":k(oe),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),s(a,{title:"受益人"},{default:d((()=>[s(r,{modelValue:le.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>le.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:d((()=>[s(n,{modelValue:le.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>le.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:k(X)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==le.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(i(),u("div",ce,[(i(!0),u(f,null,c(le.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,a)=>(i(),u("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[l("div",pe,[l("span",fe,p(`受益人${a+1}`),1),s(v,{name:"delete",onClick:t=>{return a=e,void(le.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=le.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==a.beneficiaryId||a.id!==e.id)));var a}},{default:d((()=>[me])),_:2},1032,["onClick"])]),s(ee,{images:He.value,"onUpdate:images":t[10]||(t[10]=e=>He.value=e),"form-info":e,"factor-list":de.value.BENEFICIARY||[],prefix:`beneficiary-${a}`,"beneficiary-list":le.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),s(I,{onClick:Ue},{default:d((()=>[ve])),_:1})])):R("",!0)])),_:1}),s(a,{title:"保单通讯信息"},{default:d((()=>{var e;return[null!==(e=Object.keys(k(je)))&&void 0!==e&&e.length?(i(),o(L,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>k(re)(!0))},{title:d((()=>[l("div",ye,[l("p",null,[l("span",Oe,p(k(je).contactName),1),l("span",Le,p(k(je).contactPhoneNo),1)]),l("p",ge,p(k(je).contactAddress),1)])])),_:1})):(i(),o(y,{key:0,activated:"",onClick:t[11]||(t[11]=e=>k(re)(!0))},{default:d((()=>[Ie])),_:1}))]})),_:1})])),_:1},512)),l("div",be,[l("div",he,[l("div",Ce,[we,l("span",xe,"￥"+p(null===(e=le.value.tenantOrderInsuredList)||void 0===e||null===(O=e[0])||void 0===O||null===(b=O.tenantOrderProductList)||void 0===b||null===(h=b[0].premium)||void 0===h||null===(C=h.toLocaleString)||void 0===C?void 0:C.call(h)),1)]),Ee]),l("div",Te,[s(I,{block:"",type:"primary",onClick:Se},{default:d((()=>[ke])),_:1})])]),k(ne)?(i(),o(ue,{key:1,modelValue:k(_e).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>k(_e).currentAddress=e),show:k(ne),"data-source":k(Ne),onSubmit:Be,onClose:t[14]||(t[14]=e=>k(re)(!1))},null,8,["modelValue","show","data-source"])):R("",!0)]})),_:1})}}}))}}}))}();
