!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-insured-part-wrapper .content-wrapper[data-v-27f46c48]{padding:0 .4rem}@charset "UTF-8";.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:#f2f5fc;height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,self;font-weight:600;color:#393d46}.page-info-wrapper .radio-item-wrapper{padding:0 .42667rem}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n',document.head.appendChild(e),System.register(["./vendor-legacy-17b21673.js","./index-legacy-94ed15a9.js","./index-legacy-94d14fb7.js","./index-legacy-791f03f5.js","./trial-legacy-dda11bf7.js","./useDicData-legacy-4d7dabc1.js"],(function(e){"use strict";var t,n,r,a,o,d,i,l,s,c,u,p,f,m,y,v,I,g,b,L,O,h,w,P,T,A,H,x,j,k,C,N,_;return{setters:[function(e){t=e.g,n=e.r,r=e.h,a=e.m,o=e.n,d=e.k,i=e.y,l=e.I,s=e.F,c=e.E,u=e.z,p=e.af,f=e.Q,m=e.a5,y=e.C,v=e.L,I=e.o,g=e.X,b=e.j,L=e.s,O=e.B},function(e){h=e._,w=e.P},function(e){P=e.c,T=e.n,A=e.a},function(e){H=e._,x=e.R,j=e.B,k=e.A,C=e.a},function(e){N=e.I,_=e.e},function(){}],execute:function(){const V={class:"com-insured-part-wrapper"},R={class:"content-wrapper"},F={class:"product-name"};var S=h(t({props:{productData:{default:()=>({})}},setup(e){const t=(e,t)=>-1!==t.indexOf("$")?t.replace("$",`${e}`):`${e}${t}`;return(p,f)=>{const m=n("ProCell"),y=n("ProCard");return r(),a("div",V,[o(y,{title:"保障详情"},{default:d((()=>{var n;return[i("div",R,[i("div",F,l(e.productData.productName),1),(r(!0),a(s,null,c((null===(n=e.productData)||void 0===n?void 0:n.tenantOrderRiskList)||[],(e=>(r(),a("div",{key:e.id,class:"risk-item"},[o(m,{title:"保障期间",content:t(e.insurancePeriodValue,u(N)[e.insurancePeriodType])},null,8,["content"]),o(m,{title:"交费期间",content:t(e.paymentPeriod,u(N)[e.paymentPeriodType])},null,8,["content"]),o(m,{title:"交费方式",content:u(_)[e.paymentFrequency]},null,8,["content"]),o(m,{title:"保障金额",content:e.initialAmount.toLocaleString()},null,8,["content"]),o(m,{title:"首期保费",content:e.initialPremium.toLocaleString()},null,8,["content"])])))),128))])]})),_:1})])}}}),[["__scopeId","data-v-27f46c48"]]);const E={key:0,class:"beneficiary-part"},B={class:"part-title"},U={class:"title"},q=O("删除"),D=O("+添加受益人"),$=O("选择保单通讯信息"),z={class:"radio-item-wrapper"},Y={class:"name"},M={class:"hone"},Q={class:"address"},W={class:"footer-button"},X=O("下一步");e("default",t({setup(e){const t=p(),O=f(),{templateId:h=1,orderNo:N="2022072710380711215",tenantId:_="9991000007"}=O.query,[V,R]=m(),F="/infoPreview"===O.path?"infoPreview":"infoCollection",G=y({}),J=y({extInfo:{pageCode:F},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),K=y(null),Z=y([]),ee=y([]),te=v({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),ne=()=>{const e={...J.value};e.tenantOrderAttachmentList=[{category:22,objectType:2,objectId:J.value.tenantOrderHolder.id,name:"投保人证件正面",uri:Z.value[0]},{category:23,objectType:2,objectId:J.value.tenantOrderHolder.id,name:"投保人证件背面",uri:Z.value[1]},{category:22,objectType:3,objectId:J.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:ee.value[0]},{category:23,objectType:3,objectId:J.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:ee.value[1]}],T(e).then((({code:e,data:n})=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&t.push({path:w[n.pageAction.data.nextPageCode],query:O.query})}))},re=e=>{},ae=()=>{te.beneficiaryId+=1,J.value.tenantOrderInsuredList[0].beneficiaryReqList.push({id:te.beneficiaryId,extInfo:{}})};return I((()=>{A({orderNo:N,tenantId:_}).then((({code:e,data:t})=>{if("10000"===e){const e=t;e.extInfo={...e.extInfo,pageCode:F,templateId:h},e.tenantOrderHolder=e.tenantOrderHolder||{},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const t=e;return t.extInfo={},t})),e.tenantOrderAttachmentList.forEach((e=>{e.category,e.objectType,22===e.category?2===e.objectType?Z[0]=e.uri:3===e.objectType&&(ee[0]=e.uri):23===e.category&&(2===e.objectType?Z[1]=e.uri:3===e.objectType&&(ee[1]=e.uri))})),Object.assign(J.value,e)}})).finally((()=>{te.isLoading=!1})),P({pageCode:"infoCollection",templateId:h}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),G.value=e}}))})),g((()=>J.value),(e=>{if(e){var t,n,r,a,o,d,i,l,s,c;const u=[{contactAddress:(null===(t=e.tenantOrderHolder)||void 0===t||null===(n=t.extInfo)||void 0===n?void 0:n.familyAddress)||1231123,contactName:e.tenantOrderHolder.name||123131,contactPhoneNo:e.tenantOrderHolder.mobile||123132},{contactAddress:null===(r=e.tenantOrderHolder)||void 0===r||null===(a=r.extInfo)||void 0===a?void 0:a.workAddress,contactName:e.tenantOrderHolder.name,contactPhoneNo:e.tenantOrderHolder.mobile},{contactAddress:null===(o=e.tenantOrderInsuredList[0])||void 0===o||null===(d=o.extInfo)||void 0===d?void 0:d.familyAddress,contactName:null===(i=e.tenantOrderInsuredList[0])||void 0===i?void 0:i.name,contactPhoneNo:null===(l=e.tenantOrderInsuredList[0])||void 0===l?void 0:l.mobile},{contactAddress:null===(s=e.tenantOrderInsuredList[0])||void 0===s||null===(c=s.extInfo)||void 0===c?void 0:c.workAddress,contactName:e.tenantOrderInsuredList[0].name,contactPhoneNo:e.tenantOrderInsuredList[0].mobile}];te.addressList=u.filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))}}),{deep:!0,immediate:!0}),(e,t)=>{const p=n("ProCard"),f=n("ProRadioButton"),m=n("ProField"),y=n("ProSvg"),v=n("VanButton"),I=n("ProCheckButton"),g=n("van-cell"),O=n("ProForm"),h=n("ProPageWrap");return r(),b(h,{class:"page-info-wrapper"},{default:d((()=>[u(te).isLoading?L("",!0):(r(),b(O,{key:0,ref_key:"formRef",ref:K,"is-view":""},{default:d((()=>{var e,n;return[o(S,{"product-data":null===(e=J.value.tenantOrderInsuredList[0])||void 0===e||null===(n=e.tenantOrderProductList)||void 0===n?void 0:n[0]},null,8,["product-data"]),o(p,{title:"投保人"},{default:d((()=>[o(H,{images:Z.value,"onUpdate:images":t[0]||(t[0]=e=>Z.value=e),"form-info":J.value.tenantOrderHolder,"factor-list":G.value.HOLDER},null,8,["images","form-info","factor-list"])])),_:1}),o(p,{title:"被保人"},{default:d((()=>[o(m,{modelValue:J.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>J.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:d((()=>[o(f,{modelValue:J.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>J.value.tenantOrderInsuredList[0].relationToHolder=e),options:u(x)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),"0"!==J.value.tenantOrderInsuredList[0].relationToHolder?(r(),b(H,{key:0,images:ee.value,"onUpdate:images":t[3]||(t[3]=e=>ee.value=e),"form-info":J.value.tenantOrderInsuredList[0],"factor-list":G.value.INSURER||[]},null,8,["images","form-info","factor-list"])):L("",!0),o(m,{label:"投保地区",name:"type",placeholder:"请选择","is-link":""})])),_:1}),o(p,{title:"受益人"},{default:d((()=>[o(m,{modelValue:J.value.tenantOrderInsuredList[0].beneficiaryType,"onUpdate:modelValue":t[5]||(t[5]=e=>J.value.tenantOrderInsuredList[0].beneficiaryType=e),label:"受益人类型",name:"beneficiaryType",placeholder:"请选择"},{input:d((()=>[o(f,{modelValue:J.value.tenantOrderInsuredList[0].beneficiaryType,"onUpdate:modelValue":t[4]||(t[4]=e=>J.value.tenantOrderInsuredList[0].beneficiaryType=e),options:u(j)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==J.value.tenantOrderInsuredList[0].beneficiaryType?(r(),a("div",E,[(r(!0),a(s,null,c(J.value.tenantOrderInsuredList[0].beneficiaryReqList,((e,t)=>(r(),a("div",{key:e.beneficiaryId,class:"beneficiary-item"},[i("div",B,[i("span",U,l(`受益人${t+1}`),1),o(y,{name:"delete",onClick:t=>{return n=e,void(J.value.tenantOrderInsuredList[0].beneficiaryReqList=J.value.tenantOrderInsuredList[0].beneficiaryReqList.filter((e=>e.beneficiaryId!==n.beneficiaryId)));var n}},{default:d((()=>[q])),_:2},1032,["onClick"])]),o(C,{"form-info":e,"factor-list":G.value.BENEFICIARY},null,8,["form-info","factor-list"])])))),128)),o(v,{onClick:ae},{default:d((()=>[D])),_:1})])):L("",!0)])),_:1}),o(p,{title:"保单通讯信息"},{default:d((()=>[u(te).currentAddress?(r(),b(g,{key:1,title:"单元格","is-link":""},{title:d((()=>[i("div",z,[i("p",null,[i("span",Y,l(u(te).addressList[u(te).currentAddress-1].contactName),1),i("span",M,l(u(te).addressList[u(te).currentAddress-1].contactPhoneNo),1)]),i("p",Q,l(u(te).addressList[u(te).currentAddress-1].contactAddress),1)])])),_:1})):(r(),b(I,{key:0,activated:"",onClick:t[6]||(t[6]=e=>u(R)(!0))},{default:d((()=>[$])),_:1}))])),_:1})]})),_:1},512)),i("div",W,[o(v,{block:"",type:"primary",onClick:ne},{default:d((()=>[X])),_:1})]),o(k,{modelValue:u(te).currentAddress,"onUpdate:modelValue":t[7]||(t[7]=e=>u(te).currentAddress=e),show:u(V),"data-source":u(te).addressList,onSubmit:re},null,8,["modelValue","show","data-source"])])),_:1})}}}))}}}))}();
