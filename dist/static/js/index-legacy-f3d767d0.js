!function(){var e=document.createElement("style");e.innerHTML=".com-select .com-select-container[data-v-a821acd4]{padding:.4rem}.com-select .com-select-container .radio-item[data-v-a821acd4]{margin:.26667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper[data-v-a821acd4]{padding:0 .42667rem}.com-select .com-select-container .radio-item .radio-item-wrapper p[data-v-a821acd4]{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper .name[data-v-a821acd4]{font-weight:600;margin-right:.4rem}.com-select .com-select-container .radio-item .radio-item-wrapper .phone[data-v-a821acd4]{font-weight:400}.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .left{flex:0 0 50%}.page-info-wrapper .left .trial-result{font-size:.45333rem;color:#393d46}.page-info-wrapper .left .trial-result .result-num{margin-left:.17333rem;color:var(--zaui-price, #ff5840);font-weight:700;margin-left:.21333rem}.page-info-wrapper .left .result-desc{font-size:.32rem;color:#666}.page-info-wrapper .operate-btn{width:50%}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./index-legacy-cb3bdc8a.js","./trial-legacy-0bdcd207.js","./trial-legacy-923af558.js","./useDicData-legacy-f1b3c9ef.js","./infoCollection-legacy-21a84be7.js","./index-legacy-267a3307.js","./pdfh5-legacy-9f98dc45.js","./relativeTime-legacy-4b5b6d28.js"],(function(e){"use strict";var t,n,r,a,i,o,d,l,s,u,c,p,f,m,v,I,y,O,L,g,b,h,C,w,x,E,k,T,R,V,P,A,_,H,N,j,S,B,D,U,F,Y,M,z,$,q,G,J,K,W,Q,X,Z,ee,te;return{setters:[function(e){t=e._,n=e.d,r=e.r,a=e.an,i=e.c,o=e.e,d=e.w,l=e.j,s=e.f,u=e.g,c=e.a7,p=e.h,f=e.F,m=e.i,v=e.t,I=e.n,y=e.a8,O=e.R,L=e.s,g=e.B,b=e.u,h=e.a,C=e.S,w=e.J,x=e.E,E=e.aE,k=e.$,T=e.C,R=e.b,V=e.k,P=e.ad,A=e.p,_=e.ak,H=e.al,N=e.P,j=e.m,S=e.ap,B=e.aF,D=e.V,U=e.aG,F=e.au,Y=e.N,M=e.T,z=e.M,$=e.O},function(e){q=e.p},function(e){G=e.P,J=e.I,K=e.R},function(e){W=e.u},function(e){Q=e.R,X=e.a,Z=e.B,ee=e.b},function(e){te=e._},function(){},function(){}],execute:function(){const ne={class:"com-select-container"},re={class:"radio-item-wrapper"},ae={class:"name"},ie={class:"hone"},oe={class:"address"},de={class:"footer-button"},le=n({__name:"index",props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const n=e,b=r(n.modelValue),h=r(n.show),C=()=>{t("submit",b.value),h.value=!1},w=()=>{t("close")};return a((()=>n.modelValue),(e=>{b.value=e})),a((()=>b.value),(e=>{t("update:modelValue",e)})),(t,n)=>{const r=O,a=L,x=g;return i(),o(y,{show:u(h),"onUpdate:show":n[1]||(n[1]=e=>c(h)?h.value=e:null),class:"com-select",title:"选择保单通讯信息",onClose:w},{default:d((()=>[l("div",ne,[s(a,{modelValue:u(b),"onUpdate:modelValue":n[0]||(n[0]=e=>c(b)?b.value=e:null)},{default:d((()=>[(i(!0),p(f,null,m(e.dataSource,((e,t)=>(i(),o(r,{key:t,name:t+1,class:"radio-item"},{default:d((()=>[l("div",re,[l("p",null,[l("span",ae,v(e.contactName),1),l("span",ie,v(e.contactPhoneNo),1)]),l("p",oe,v(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),l("div",de,[s(x,{plain:"",type:"primary"},{default:d((()=>[I("取消")])),_:1}),s(x,{type:"primary",onClick:C},{default:d((()=>[I("确认")])),_:1})])])),_:1},8,["show"])}}});var se=t(le,[["__scopeId","data-v-a821acd4"]]);const ue={key:0,class:"beneficiary-part"},ce={class:"part-title"},pe={class:"title"},fe={class:"radio-item-wrapper"},me={class:"name"},ve={class:"hone"},Ie={class:"address"},ye={class:"footer-button","safe-area-inset-bottom":""},Oe={class:"left"},Le={class:"trial-result"},ge={class:"result-num"},be=l("div",{class:"result-desc"},"实际保费以后续为准",-1),he={class:"operate-btn"};e("default",n({__name:"index",setup(e){const t=b(),n=h(),{templateId:y=1,orderNo:O="2022072710380711215",productCode:L,tenantId:ne="9991000007",proposalId:re,insurerCode:ae="kunlunhealth"}=n.query,[ie,oe]=C(),de="/infoPreview"===n.path?"infoPreview":"infoCollection",le=W("NATIONAL_REGION_CODE"),Ce=r({}),we=r({extInfo:{pageCode:de},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),xe=r(null),Ee=r([]),ke=r([]),Te=r([]),Re=r([]),Ve=r([]),Pe=w({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0}),Ae=x((()=>{var e,t,n,r,a,i,o,d,l,s;return[{contactAddress:null===(e=we.value.tenantOrderHolder)||void 0===e||null===(t=e.extInfo)||void 0===t?void 0:t.familyAddress,contactName:we.value.tenantOrderHolder.name,contactPhoneNo:we.value.tenantOrderHolder.mobile},{contactAddress:null===(n=we.value.tenantOrderHolder)||void 0===n||null===(r=n.extInfo)||void 0===r?void 0:r.workAddress,contactName:we.value.tenantOrderHolder.name,contactPhoneNo:we.value.tenantOrderHolder.mobile},{contactAddress:null===(a=we.value.tenantOrderInsuredList[0])||void 0===a||null===(i=a.extInfo)||void 0===i?void 0:i.familyAddress,contactName:null===(o=we.value.tenantOrderInsuredList[0])||void 0===o?void 0:o.name,contactPhoneNo:null===(d=we.value.tenantOrderInsuredList[0])||void 0===d?void 0:d.mobile},{contactAddress:null===(l=we.value.tenantOrderInsuredList[0])||void 0===l||null===(s=l.extInfo)||void 0===s?void 0:s.workAddress,contactName:we.value.tenantOrderInsuredList[0].name,contactPhoneNo:we.value.tenantOrderInsuredList[0].mobile}].filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))||[]})),_e=x((()=>{var e,t;return Pe.currentAddress?Ae.value[Pe.currentAddress-1]||{}:(null===(e=we.value.extInfo)||void 0===e||null===(t=e.contactInfo)||void 0===t?void 0:t[0])||{}})),He=e=>{const t={};return e.map((e=>{const{initialAmount:n,annuityDrawFrequency:r,annuityDrawType:a,paymentFrequency:i,paymentPeriod:o,paymentPeriodType:d,insurancePeriodType:l,insurancePeriodValue:s,riskCode:u,riskType:c,initialPremium:p,liabilityDetails:f,extInfo:m}=e,{riskId:v,copy:I}=m,y={amount:n,annuityDrawDate:r,annuityDrawType:a,paymentFrequency:i,riskId:v,copy:I,chargePeriod:o?`${G[d]}_${o}`:G[d],coveragePeriod:s?`${J[l]}_${s}`:J[l],riskCode:u,riskType:c,premium:p,liabilityVOList:f.map((e=>({...e,liabilityAttributeValue:e.refundMethod,liabilityAttributeCode:e.refundMethod&&1})))};return c===K.MAIN_RISK?(t.mainRiskCode=u,t.mainRiskId=v):Object.assign(y,t),y}))},Ne=()=>{var e;null===(e=xe.value)||void 0===e||e.validate().then((()=>{const{birthday:e,gender:r,extInfo:a}=we.value.tenantOrderHolder,{hasSocialInsurance:i,occupationCodeList:o}=a,{birthday:d,gender:l,extInfo:s,tenantOrderProductList:u}=we.value.tenantOrderInsuredList[0],{hasSocialInsurance:c,occupationCodeList:p}=s,f={holder:{personVO:{birthday:P(e).format("YYYY-MM-DD"),gender:r,socialFlag:i,occupationCodeList:o}},productCode:L,insuredVOList:[{insurerCode:ae,personVO:{birthday:P(d).format("YYYY-MM-DD"),gender:l,socialFlag:c,occupationCodeList:p},productPlanVOList:[{insurerCode:ae,planCode:"",riskVOList:He(u[0].tenantOrderRiskList)}]}]};q({...f}).then((({code:e,data:r})=>{if("10000"===e){const e={},a=(t=[])=>{(t||[]).forEach((t=>{var n;e[t.riskCode]=t,null!==(n=t.riskPremiumDetailVOList)&&void 0!==n&&n.length&&a(t.riskPremiumDetailVOList)}))};a(r.riskPremiumDetailVOList),we.value.tenantOrderInsuredList[0].tenantOrderProductList[0]={...we.value.tenantOrderInsuredList[0].tenantOrderProductList[0],premium:r.premium,tenantOrderRiskList:we.value.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList.map((t=>({...t,initialAmount:e[t.riskCode].amount,initialPremium:e[t.riskCode].premium})))},(()=>{var e;const r={...we.value};r.extInfo={...r.extInfo,contactInfo:[_e.value],buttonCode:Y.infoCollection},r.tenantOrderAttachmentList=[{category:_.OBVERSE_CERT,objectType:H.HOLDER,objectId:we.value.tenantOrderHolder.id,name:"投保人证件正面",uri:Ee.value[0],id:Te.value[0]},{category:_.REVERSE_CERT,objectType:H.HOLDER,objectId:we.value.tenantOrderHolder.id,name:"投保人证件背面",uri:Ee.value[1],id:Te.value[1]},{category:_.OBVERSE_CERT,objectType:H.INSURED,objectId:we.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:ke.value[0]||Ee.value[0],id:Re.value[1]},{category:_.REVERSE_CERT,objectType:H.INSURED,objectId:we.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:ke.value[1]||Ee.value[1],id:Re.value[1]}].filter((e=>e.uri)),null===(e=xe.value)||void 0===e||e.validate().then((e=>{if(r.tenantOrderInsuredList[0].insuredBeneficiaryType===ee.SPECIFY){const e={};if(r.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((t=>{e[t.benefitOrder]?e[t.benefitOrder].sum+=Number(t.benefitRate):e[t.benefitOrder]={sum:Number(t.benefitRate)}})),Object.values(e).some((e=>100!==e.sum)))return void M.fail("同一顺位的受益人比例之和必须为100")}z(r).then((({code:e,data:r})=>{"10000"===e&&"jumpToPage"===r.pageAction.pageAction&&t.push({path:$[r.pageAction.data.nextPageCode],query:n.query})}))}))})()}}))}))},je=e=>{},Se=()=>{Pe.beneficiaryId+=1,we.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:Pe.beneficiaryId,extInfo:{}})};return E((()=>{A({orderNo:O,tenantId:ne}).then((({code:e,data:t})=>{if("10000"===e){var n,r;const e=t;e.extInfo={...e.extInfo,pageCode:de,templateId:y},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo={...e.tenantOrderHolder.extInfo,occupationCodeList:(null===(n=e.tenantOrderHolder.extInfo)||void 0===n?void 0:n.occupationCodeList)||[]},e.tenantOrderInsuredList[0].extInfo={...e.tenantOrderInsuredList[0].extInfo,occupationCodeList:(null===(r=e.tenantOrderInsuredList[0].extInfo)||void 0===r?void 0:r.occupationCodeList)||[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{var t;const n=e;return n.extInfo={...n.extInfo,occupationCodeList:(null===(t=n.extInfo)||void 0===t?void 0:t.occupationCodeList)||[]},n})),e.tenantOrderAttachmentList.forEach((e=>{e.category===_.OBVERSE_CERT?e.objectType===H.HOLDER?(Ee.value[0]=e.uri,Te.value[0]=e.id):e.objectType===H.INSURED&&(ke.value[0]=e.uri,Re.value[0]=e.id):e.category===_.REVERSE_CERT&&(e.objectType===H.HOLDER?(Ee.value[1]=e.uri,Te.value[1]=e.id):e.objectType===H.INSURED&&(ke.value[1]=e.uri,Te.value[1]=e.id))})),Object.assign(we.value,e)}})).finally((()=>{Pe.isLoading=!1})),k({pageCode:"infoCollection",templateId:y}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),Ce.value=e}}))})),a([()=>we.value.tenantOrderInsuredList[0].relationToHolder,()=>we.value.tenantOrderHolder],(()=>{`${we.value.tenantOrderInsuredList[0].relationToHolder}`===Q.SELF&&Object.assign(we.value.tenantOrderInsuredList[0],we.value.tenantOrderHolder,{id:we.value.tenantOrderInsuredList[0].id,extInfo:{...we.value.tenantOrderHolder.extInfo,insureProvinceCode:we.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:we.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:we.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),(e,t)=>{const n=N,r=j,a=S,y=B,O=D,L=g,b=U,h=T,C=F,w=R("ProPageWrap");return i(),o(w,{class:"page-info-wrapper"},{default:d((()=>{var e,g,w,x,E;return[u(Pe).isLoading?V("",!0):(i(),o(C,{key:0,ref_key:"formRef",ref:xe},{default:d((()=>[s(n,{title:"投保人"},{default:d((()=>[s(te,{images:u(Ee),"onUpdate:images":t[0]||(t[0]=e=>c(Ee)?Ee.value=e:null),"form-info":u(we).tenantOrderHolder,"factor-list":u(Ce).HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),s(n,{title:"被保人"},{default:d((()=>[s(a,{modelValue:u(we).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>u(we).tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:d((()=>[s(r,{modelValue:u(we).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>u(we).tenantOrderInsuredList[0].relationToHolder=e),options:u(X)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+u(we).tenantOrderInsuredList[0].relationToHolder?(i(),o(te,{key:0,images:u(ke),"onUpdate:images":t[3]||(t[3]=e=>c(ke)?ke.value=e:null),"form-info":u(we).tenantOrderInsuredList[0],"factor-list":u(Ce).INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):V("",!0),s(y,{modelValue:u(we).tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>u(we).tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:u(we).tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>u(we).tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:u(we).tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>u(we).tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:u(we).tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>u(we).tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":u(le),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),s(n,{title:"受益人"},{default:d((()=>[s(a,{modelValue:u(we).tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>u(we).tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:d((()=>[s(r,{modelValue:u(we).tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>u(we).tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:u(Z)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==u(we).tenantOrderInsuredList[0].insuredBeneficiaryType?(i(),p("div",ue,[(i(!0),p(f,null,m(u(we).tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,n)=>(i(),p("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[l("div",ce,[l("span",pe,v(`受益人${n+1}`),1),s(O,{name:"delete",onClick:t=>{return n=e,void(we.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=we.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==n.beneficiaryId||n.id!==e.id)));var n}},{default:d((()=>[I("删除")])),_:2},1032,["onClick"])]),s(te,{images:u(Ve),"onUpdate:images":t[10]||(t[10]=e=>c(Ve)?Ve.value=e:null),"form-info":e,"factor-list":u(Ce).BENEFICIARY||[],prefix:`beneficiary-${n}`,"beneficiary-list":u(we).tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),s(L,{onClick:Se},{default:d((()=>[I("+添加受益人")])),_:1})])):V("",!0)])),_:1}),s(n,{title:"保单通讯信息"},{default:d((()=>{var e;return[null!==(e=Object.keys(u(_e)))&&void 0!==e&&e.length?(i(),o(h,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>u(oe)(!0))},{title:d((()=>[l("div",fe,[l("p",null,[l("span",me,v(u(_e).contactName),1),l("span",ve,v(u(_e).contactPhoneNo),1)]),l("p",Ie,v(u(_e).contactAddress),1)])])),_:1})):(i(),o(b,{key:0,activated:"",onClick:t[11]||(t[11]=e=>u(oe)(!0))},{default:d((()=>[I("选择保单通讯信息")])),_:1}))]})),_:1})])),_:1},512)),l("div",ye,[l("div",Oe,[l("div",Le,[I(" 首期"),l("span",ge,"￥"+v(null===(e=u(we).tenantOrderInsuredList)||void 0===e||null===(g=e[0])||void 0===g||null===(w=g.tenantOrderProductList)||void 0===w||null===(x=w[0].premium)||void 0===x||null===(E=x.toLocaleString)||void 0===E?void 0:E.call(x)),1)]),be]),l("div",he,[s(L,{block:"",type:"primary",onClick:Ne},{default:d((()=>[I("下一步")])),_:1})])]),u(ie)?(i(),o(se,{key:1,modelValue:u(Pe).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>u(Pe).currentAddress=e),show:u(ie),"data-source":u(Ae),onSubmit:je,onClose:t[14]||(t[14]=e=>u(oe)(!1))},null,8,["modelValue","show","data-source"])):V("",!0)]})),_:1})}}}))}}}))}();
