!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:#f2f5fc;height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,self;font-weight:600;color:#393d46}.page-info-wrapper .radio-item-wrapper{padding:0 .42667rem}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n',document.head.appendChild(e),System.register(["./vendor-legacy-bcfc5721.js","./index-legacy-94d42d75.js","./index-legacy-5b77a937.js","./index-legacy-7eb2a916.js","./useDicData-legacy-98a26c8f.js"],(function(e){"use strict";var t,n,r,a,o,d,i,l,s,c,u,f,p,m,y,I,g,v,O,L,b,h,w,T,A,H,j,x,P,N;return{setters:[function(e){t=e.g,n=e.af,r=e.Q,a=e.a5,o=e.C,d=e.L,i=e.o,l=e.X,s=e.r,c=e.h,u=e.j,f=e.k,p=e.z,m=e.n,y=e.s,I=e.m,g=e.F,v=e.E,O=e.y,L=e.I,b=e.B},function(e){h=e.P},function(e){w=e.c,T=e.n,A=e.a},function(e){H=e._,j=e.R,x=e.B,P=e.A,N=e.a},function(){}],execute:function(){const B={key:0,class:"beneficiary-part"},C={class:"part-title"},V={class:"title"},k={class:"radio-item-wrapper"},E={class:"name"},R={class:"hone"},_={class:"address"},F={class:"footer-button"},S=b("下一步");e("default",t({setup(e){const t=n(),b=r(),{templateId:U=1,orderNo:q="2022072710380711215",tenantId:z="9991000007"}=b.query,[D,Y]=a(),M="/infoPreview"===b.path?"infoPreview":"infoCollection",Q=o({}),W=o({extInfo:{pageCode:M},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),X=o(null),$=o([]),G=o([]),J=d({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),K=()=>{const e={...W.value};e.tenantOrderAttachmentList=[{category:22,objectType:2,objectId:W.value.tenantOrderHolder.id,name:"投保人证件正面",uri:$.value[0]},{category:23,objectType:2,objectId:W.value.tenantOrderHolder.id,name:"投保人证件背面",uri:$.value[1]},{category:22,objectType:3,objectId:W.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:G.value[0]},{category:23,objectType:3,objectId:W.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:G.value[1]}],T(e).then((({code:e,data:n})=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&t.push({path:h[n.pageAction.data.nextPageCode],query:b.query})}))},Z=e=>{};return i((()=>{A({orderNo:q,tenantId:z}).then((({code:e,data:t})=>{if("10000"===e){const e=t;e.extInfo={...e.extInfo,pageCode:M,templateId:U},e.tenantOrderHolder=e.tenantOrderHolder||{},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const t=e;return t.extInfo={},t})),e.tenantOrderAttachmentList.forEach((e=>{e.category,e.objectType,22===e.category?2===e.objectType?$[0]=e.uri:3===e.objectType&&(G[0]=e.uri):23===e.category&&(2===e.objectType?$[1]=e.uri:3===e.objectType&&(G[1]=e.uri))})),Object.assign(W.value,e)}})).finally((()=>{J.isLoading=!1})),w({pageCode:"infoCollection",templateId:U}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),Q.value=e}}))})),l((()=>W.value),(e=>{if(e){var t,n,r,a,o,d,i,l,s,c;const u=[{contactAddress:(null===(t=e.tenantOrderHolder)||void 0===t||null===(n=t.extInfo)||void 0===n?void 0:n.familyAddress)||1231123,contactName:e.tenantOrderHolder.name||123131,contactPhoneNo:e.tenantOrderHolder.mobile||123132},{contactAddress:null===(r=e.tenantOrderHolder)||void 0===r||null===(a=r.extInfo)||void 0===a?void 0:a.workAddress,contactName:e.tenantOrderHolder.name,contactPhoneNo:e.tenantOrderHolder.mobile},{contactAddress:null===(o=e.tenantOrderInsuredList[0])||void 0===o||null===(d=o.extInfo)||void 0===d?void 0:d.familyAddress,contactName:null===(i=e.tenantOrderInsuredList[0])||void 0===i?void 0:i.name,contactPhoneNo:null===(l=e.tenantOrderInsuredList[0])||void 0===l?void 0:l.mobile},{contactAddress:null===(s=e.tenantOrderInsuredList[0])||void 0===s||null===(c=s.extInfo)||void 0===c?void 0:c.workAddress,contactName:e.tenantOrderInsuredList[0].name,contactPhoneNo:e.tenantOrderInsuredList[0].mobile}];J.addressList=u.filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))}}),{deep:!0,immediate:!0}),(e,t)=>{const n=s("ProCard"),r=s("ProRadioButton"),a=s("ProField"),o=s("van-cell"),d=s("ProForm"),i=s("VanButton"),l=s("ProPageWrap");return c(),u(l,{class:"page-info-wrapper"},{default:f((()=>[p(J).isLoading?y("",!0):(c(),u(d,{key:0,ref_key:"formRef",ref:X,"is-view":""},{default:f((()=>[m(n,{title:"投保人"},{default:f((()=>[m(H,{images:$.value,"onUpdate:images":t[0]||(t[0]=e=>$.value=e),"form-info":W.value.tenantOrderHolder,"factor-list":Q.value.HOLDER},null,8,["images","form-info","factor-list"])])),_:1}),m(n,{title:"被保人"},{default:f((()=>[m(a,{modelValue:W.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>W.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:f((()=>[m(r,{modelValue:W.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>W.value.tenantOrderInsuredList[0].relationToHolder=e),options:p(j)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+W.value.tenantOrderInsuredList[0].relationToHolder?(c(),u(H,{key:0,images:G.value,"onUpdate:images":t[3]||(t[3]=e=>G.value=e),"form-info":W.value.tenantOrderInsuredList[0],"factor-list":Q.value.INSURER||[]},null,8,["images","form-info","factor-list"])):y("",!0),m(a,{label:"投保地区",name:"type",placeholder:"请选择","is-link":""})])),_:1}),m(n,{title:"受益人"},{default:f((()=>[m(a,{modelValue:W.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[5]||(t[5]=e=>W.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:f((()=>[m(r,{modelValue:W.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[4]||(t[4]=e=>W.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:p(x)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==W.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(c(),I("div",B,[(c(!0),I(g,null,v(W.value.tenantOrderInsuredList[0].beneficiaryReqList,((e,t)=>(c(),I("div",{key:e.beneficiaryId,class:"beneficiary-item"},[O("div",C,[O("span",V,L(`受益人${t+1}`),1)]),m(N,{"form-info":e,"factor-list":Q.value.BENEFICIARY},null,8,["form-info","factor-list"])])))),128))])):y("",!0)])),_:1}),m(n,{title:"保单通讯信息"},{default:f((()=>[p(J).currentAddress?(c(),u(o,{key:0,title:"单元格","is-link":""},{title:f((()=>[O("div",k,[O("p",null,[O("span",E,L(p(J).addressList[p(J).currentAddress-1].contactName),1),O("span",R,L(p(J).addressList[p(J).currentAddress-1].contactPhoneNo),1)]),O("p",_,L(p(J).addressList[p(J).currentAddress-1].contactAddress),1)])])),_:1})):y("",!0)])),_:1})])),_:1},512)),O("div",F,[m(i,{block:"",type:"primary",onClick:K},{default:f((()=>[S])),_:1})]),m(P,{modelValue:p(J).currentAddress,"onUpdate:modelValue":t[6]||(t[6]=e=>p(J).currentAddress=e),show:p(D),"data-source":p(J).addressList,onSubmit:Z},null,8,["modelValue","show","data-source"])])),_:1})}}}))}}}))}();
