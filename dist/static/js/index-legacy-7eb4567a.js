!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:#f2f5fc;height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,self;font-weight:600;color:#393d46}.page-info-wrapper .radio-item-wrapper{padding:0 .42667rem}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n',document.head.appendChild(e),System.register(["./vendor-legacy-bcfc5721.js","./index-legacy-45a76f6e.js","./index-legacy-099f9b69.js","./index-legacy-07a4fe8b.js","./useDicData-legacy-b9bbf6b4.js"],(function(e){"use strict";var t,n,r,a,d,o,i,l,s,c,u,f,p,m,y,I,v,g,O,L,b,h,w,T,H,A,P,j,x,k;return{setters:[function(e){t=e.g,n=e.af,r=e.Q,a=e.a5,d=e.C,o=e.L,i=e.o,l=e.X,s=e.r,c=e.h,u=e.j,f=e.k,p=e.z,m=e.n,y=e.s,I=e.m,v=e.F,g=e.E,O=e.y,L=e.I,b=e.B},function(e){h=e.P},function(e){w=e.c,T=e.n,H=e.a},function(e){A=e._,P=e.R,j=e.B,x=e.A,k=e.a},function(){}],execute:function(){const C={key:0,class:"beneficiary-part"},B={class:"part-title"},N={class:"title"},V=b("删除"),_=b("+添加受益人"),R=b("选择保单通讯信息"),E={class:"radio-item-wrapper"},F={class:"name"},S={class:"hone"},U={class:"address"},q={class:"footer-button"},z=b("下一步");e("default",t({setup(e){const t=n(),b=r(),{templateId:D=1,orderNo:Y="2022072710380711215",tenantId:M="9991000007"}=b.query,[Q,W]=a(),X="/infoPreview"===b.path?"infoPreview":"infoCollection",$=d({}),G=d({extInfo:{pageCode:X},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),J=d(null),K=d([]),Z=d([]),ee=o({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),te=()=>{const e={...G.value};e.tenantOrderAttachmentList=[{category:22,objectType:2,objectId:G.value.tenantOrderHolder.id,name:"投保人证件正面",uri:K.value[0]},{category:23,objectType:2,objectId:G.value.tenantOrderHolder.id,name:"投保人证件背面",uri:K.value[1]},{category:22,objectType:3,objectId:G.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:Z.value[0]},{category:23,objectType:3,objectId:G.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:Z.value[1]}],T(e).then((({code:e,data:n})=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&t.push({path:h[n.pageAction.data.nextPageCode],query:b.query})}))},ne=e=>{},re=()=>{ee.beneficiaryId+=1,G.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:ee.beneficiaryId,extInfo:{}})};return i((()=>{H({orderNo:Y,tenantId:M}).then((({code:e,data:t})=>{if("10000"===e){const e=t;e.extInfo={...e.extInfo,pageCode:X,templateId:D},e.tenantOrderHolder=e.tenantOrderHolder||{},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const t=e;return t.extInfo={},t})),e.tenantOrderAttachmentList.forEach((e=>{e.category,e.objectType,22===e.category?2===e.objectType?K[0]=e.uri:3===e.objectType&&(Z[0]=e.uri):23===e.category&&(2===e.objectType?K[1]=e.uri:3===e.objectType&&(Z[1]=e.uri))})),Object.assign(G.value,e)}})).finally((()=>{ee.isLoading=!1})),w({pageCode:"infoCollection",templateId:D}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),$.value=e}}))})),l((()=>G.value),(e=>{if(e){var t,n,r,a,d,o,i,l,s,c;const u=[{contactAddress:(null===(t=e.tenantOrderHolder)||void 0===t||null===(n=t.extInfo)||void 0===n?void 0:n.familyAddress)||1231123,contactName:e.tenantOrderHolder.name||123131,contactPhoneNo:e.tenantOrderHolder.mobile||123132},{contactAddress:null===(r=e.tenantOrderHolder)||void 0===r||null===(a=r.extInfo)||void 0===a?void 0:a.workAddress,contactName:e.tenantOrderHolder.name,contactPhoneNo:e.tenantOrderHolder.mobile},{contactAddress:null===(d=e.tenantOrderInsuredList[0])||void 0===d||null===(o=d.extInfo)||void 0===o?void 0:o.familyAddress,contactName:null===(i=e.tenantOrderInsuredList[0])||void 0===i?void 0:i.name,contactPhoneNo:null===(l=e.tenantOrderInsuredList[0])||void 0===l?void 0:l.mobile},{contactAddress:null===(s=e.tenantOrderInsuredList[0])||void 0===s||null===(c=s.extInfo)||void 0===c?void 0:c.workAddress,contactName:e.tenantOrderInsuredList[0].name,contactPhoneNo:e.tenantOrderInsuredList[0].mobile}];ee.addressList=u.filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))}}),{deep:!0,immediate:!0}),l((()=>G.value.tenantOrderInsuredList[0].relationToHolder),(e=>{1==+e&&Object.assign(G.value.tenantOrderInsuredList[0],G.value.tenantOrderHolder)}),{deep:!0,immediate:!0}),(e,t)=>{const n=s("ProCard"),r=s("ProRadioButton"),a=s("ProField"),d=s("ProSvg"),o=s("VanButton"),i=s("ProCheckButton"),l=s("van-cell"),b=s("ProForm"),h=s("ProPageWrap");return c(),u(h,{class:"page-info-wrapper"},{default:f((()=>[p(ee).isLoading?y("",!0):(c(),u(b,{key:0,ref_key:"formRef",ref:J},{default:f((()=>[m(n,{title:"投保人"},{default:f((()=>[m(A,{images:K.value,"onUpdate:images":t[0]||(t[0]=e=>K.value=e),"form-info":G.value.tenantOrderHolder,"factor-list":$.value.HOLDER},null,8,["images","form-info","factor-list"])])),_:1}),m(n,{title:"被保人"},{default:f((()=>[m(a,{modelValue:G.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>G.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:f((()=>[m(r,{modelValue:G.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>G.value.tenantOrderInsuredList[0].relationToHolder=e),options:p(P)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+G.value.tenantOrderInsuredList[0].relationToHolder?(c(),u(A,{key:0,images:Z.value,"onUpdate:images":t[3]||(t[3]=e=>Z.value=e),"form-info":G.value.tenantOrderInsuredList[0],"factor-list":$.value.INSURER||[]},null,8,["images","form-info","factor-list"])):y("",!0),m(a,{label:"投保地区",name:"type",placeholder:"请选择","is-link":""})])),_:1}),m(n,{title:"受益人"},{default:f((()=>[m(a,{modelValue:G.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[5]||(t[5]=e=>G.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:f((()=>[m(r,{modelValue:G.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[4]||(t[4]=e=>G.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:p(j)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==G.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(c(),I("div",C,[(c(!0),I(v,null,g(G.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,t)=>(c(),I("div",{key:e.beneficiaryId,class:"beneficiary-item"},[O("div",B,[O("span",N,L(`受益人${t+1}`),1),m(d,{name:"delete",onClick:t=>{return n=e,void(G.value.tenantOrderInsuredList[0].beneficiaryReqList=G.value.tenantOrderInsuredList[0].beneficiaryReqList.filter((e=>e.beneficiaryId!==n.beneficiaryId)));var n}},{default:f((()=>[V])),_:2},1032,["onClick"])]),m(k,{"form-info":e,"factor-list":$.value.BENEFICIARY},null,8,["form-info","factor-list"])])))),128)),m(o,{onClick:re},{default:f((()=>[_])),_:1})])):y("",!0)])),_:1}),m(n,{title:"保单通讯信息"},{default:f((()=>[p(ee).currentAddress?(c(),u(l,{key:1,title:"单元格","is-link":""},{title:f((()=>[O("div",E,[O("p",null,[O("span",F,L(p(ee).addressList[p(ee).currentAddress-1].contactName),1),O("span",S,L(p(ee).addressList[p(ee).currentAddress-1].contactPhoneNo),1)]),O("p",U,L(p(ee).addressList[p(ee).currentAddress-1].contactAddress),1)])])),_:1})):(c(),u(i,{key:0,activated:"",onClick:t[6]||(t[6]=e=>p(W)(!0))},{default:f((()=>[R])),_:1}))])),_:1})])),_:1},512)),O("div",q,[m(o,{block:"",type:"primary",onClick:te},{default:f((()=>[z])),_:1})]),p(Q)?(c(),u(x,{key:1,modelValue:p(ee).currentAddress,"onUpdate:modelValue":t[7]||(t[7]=e=>p(ee).currentAddress=e),show:p(Q),"data-source":p(ee).addressList,onSubmit:ne},null,8,["modelValue","show","data-source"])):y("",!0)])),_:1})}}}))}}}))}();
