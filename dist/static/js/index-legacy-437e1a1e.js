!function(){var e=document.createElement("style");e.innerHTML=".page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:#f2f5fc;height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,self;font-weight:600;color:#393d46}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-dce51240.js","./index-legacy-548319ae.js","./index-legacy-e1413952.js","./index-legacy-c837ef4c.js","./InsuredPart-legacy-bf406b6e.js","./useDicData-legacy-e58d80a5.js","./trial-legacy-b3d58d35.js"],(function(e){"use strict";var n,t,a,r,i,o,d,l,s,u,f,c,p,m,I,v,y,g,O,L,b,h,w,C,x,E,T,P,R,H,B,V;return{setters:[function(e){n=e.g,t=e.aj,a=e.Q,r=e.a5,i=e.E,o=e.M,d=e.y,l=e.o,s=e.r,u=e.j,f=e.k,c=e.m,p=e.A,m=e.p,I=e.t,v=e.n,y=e.F,g=e.G,O=e.z,L=e.J,b=e.C},function(e){h=e.P,w=e.I,C=e.H},function(e){x=e.c,E=e.n,T=e.a},function(e){P=e._,R=e.R,H=e.B},function(e){B=e.I},function(e){V=e.u},function(){}],execute:function(){const j={key:0,class:"beneficiary-part"},A={class:"part-title"},_={class:"title"},U={class:"radio-item-wrapper"},N={class:"name"},S={class:"hone"},k={class:"address"},F={class:"footer-button"},D=b("下一步");e("default",n({setup(e){const n=t(),b=a(),{templateId:q=1,orderNo:z="2022072710380711215",tenantId:G="9991000007"}=b.query;r();const M="/infoPreview"===b.path?"infoPreview":"infoCollection",Y=i({}),$=V("NATIONAL_REGION_CODE"),J=i({extInfo:{pageCode:M},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),Q=i(null),W=i([]),K=i([]),X=i([]),Z=i([]),ee=i([]),ne=o({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),te=d((()=>{var e,n;return(null===(e=J.value.extInfo)||void 0===e||null===(n=e.contactInfo)||void 0===n?void 0:n[0])||{}})),ae=()=>{E(J.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&n.push({path:h[t.pageAction.data.nextPageCode],query:b.query})}))};return l((()=>{T({orderNo:z,tenantId:G}).then((({code:e,data:n})=>{if("10000"===e){const e=n;e.extInfo={...e.extInfo,pageCode:M,templateId:q},e.tenantOrderHolder=e.tenantOrderHolder||{},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const n=e;return n.extInfo=n.extInfo||{},n})),e.tenantOrderAttachmentList.forEach((e=>{e.category===w.OBVERSE_CERT?e.objectType===C.HOLDER?(W.value[0]=e.uri,X.value[0]=e.id):e.objectType===C.INSURED&&(K.value[0]=e.uri,Z.value[0]=e.id):e.category===w.REVERSE_CERT&&(e.objectType===C.HOLDER?(W.value[1]=e.uri,X.value[1]=e.id):e.objectType===C.INSURED&&(K.value[1]=e.uri,X.value[1]=e.id))})),Object.assign(J.value,e)}})).finally((()=>{ne.isLoading=!1})),x({pageCode:"infoCollection",templateId:q}).then((({code:e,data:n})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};n.productInsureFactorList.forEach((n=>{(e[n.moduleType]=e[n.moduleType]||[]).push(n)})),Y.value=e}}))})),(e,n)=>{const t=s("ProCard"),a=s("ProRadioButton"),r=s("ProField"),i=s("ProCascader"),o=s("van-cell"),d=s("ProForm"),l=s("VanButton"),b=s("ProPageWrap");return u(),f(b,{class:"page-info-wrapper"},{default:c((()=>[p(ne).isLoading?I("",!0):(u(),f(d,{key:0,ref_key:"formRef",ref:Q,"is-view":""},{default:c((()=>{var e;return[m(B,{"product-data":null===(e=J.value.tenantOrderInsuredList[0])||void 0===e?void 0:e.tenantOrderProductList[0]},null,8,["product-data"]),m(t,{title:"投保人"},{default:c((()=>[m(P,{images:W.value,"onUpdate:images":n[0]||(n[0]=e=>W.value=e),"form-info":J.value.tenantOrderHolder,"factor-list":Y.value.HOLDER,"is-view":""},null,8,["images","form-info","factor-list"])])),_:1}),m(t,{title:"被保人"},{default:c((()=>[m(r,{modelValue:J.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":n[2]||(n[2]=e=>J.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:c((()=>[m(a,{modelValue:J.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":n[1]||(n[1]=e=>J.value.tenantOrderInsuredList[0].relationToHolder=e),options:p(R),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+J.value.tenantOrderInsuredList[0].relationToHolder?(u(),f(P,{key:0,images:K.value,"onUpdate:images":n[3]||(n[3]=e=>K.value=e),"form-info":J.value.tenantOrderInsuredList[0],"factor-list":Y.value.INSURER||[],"is-view":""},null,8,["images","form-info","factor-list"])):I("",!0),m(i,{modelValue:J.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":n[4]||(n[4]=e=>J.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:J.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":n[5]||(n[5]=e=>J.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:J.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":n[6]||(n[6]=e=>J.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:J.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":n[7]||(n[7]=e=>J.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureProvinceCode",placeholder:"请选择","is-link":"",required:"","data-source":p($),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),m(t,{title:"受益人"},{default:c((()=>[m(r,{modelValue:J.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":n[9]||(n[9]=e=>J.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:c((()=>[m(a,{modelValue:J.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":n[8]||(n[8]=e=>J.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:p(H),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==J.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(u(),v("div",j,[(u(!0),v(y,null,g(J.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,t)=>(u(),v("div",{key:e.beneficiaryId,class:"beneficiary-item"},[O("div",A,[O("span",_,L(`受益人${t+1}`),1)]),m(P,{images:ee.value,"onUpdate:images":n[10]||(n[10]=e=>ee.value=e),"form-info":e,"factor-list":Y.value.BENEFICIARY||[],prefix:`beneficiary-${t}`,"is-view":"","beneficiary-list":J.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128))])):I("",!0)])),_:1}),m(t,{title:"保单通讯信息"},{default:c((()=>[Object.keys(p(te)).length?(u(),f(o,{key:0,title:"单元格"},{title:c((()=>[O("div",U,[O("p",null,[O("span",N,L(p(te).contactName),1),O("span",S,L(p(te).contactPhoneNo),1)]),O("p",k,L(p(te).contactAddress),1)])])),_:1})):I("",!0)])),_:1})]})),_:1},512)),O("div",F,[m(l,{block:"",type:"primary",onClick:ae},{default:c((()=>[D])),_:1})])])),_:1})}}}))}}}))}();
