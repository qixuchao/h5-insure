!function(){var e=document.createElement("style");e.innerHTML=".page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,self;font-weight:600;color:#393d46}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-38c5a7a6.js","./index-legacy-6338e9df.js","./infoCollection-legacy-cd0dd36a.js","./index-legacy-86b2c72b.js","./InsuredPart-legacy-3c203932.js","./useDicData-legacy-2634f8a3.js","./relativeTime-legacy-2a997eac.js","./trial-legacy-0b2915b4.js"],(function(e){"use strict";var n,t,a,r,i,o,d,l,s,u,c,f,p,m,I,g,v,y,O,L,b,h,C,w,x,T,E,P,R,B,H,V,A,j;return{setters:[function(e){n=e.h,t=e.aa,a=e.P,r=e.R,i=e.G,o=e.N,d=e.z,l=e.o,s=e.r,u=e.k,c=e.m,f=e.n,p=e.B,m=e.s,I=e.v,g=e.p,v=e.F,y=e.H,O=e.A,L=e.L,b=e.E},function(e){h=e.h,C=e.s,w=e.n,x=e.b,T=e.g,E=e.N,P=e.A,R=e.t},function(e){B=e.a,H=e.B},function(e){V=e._},function(e){A=e.I},function(e){j=e.u},function(){},function(){}],execute:function(){const _={key:0,class:"beneficiary-part"},N={class:"part-title"},U={class:"title"},S={class:"radio-item-wrapper"},k={class:"name"},F={class:"hone"},D={class:"address"},q={class:"footer-button"},z=b("下一步");e("default",n({setup(e){const n=t(),b=a(),{templateId:$=1,orderNo:G="2022072710380711215",tenantId:Y="9991000007",isShare:M,sharePageCode:W}=b.query;r();const J="/infoPreview"===b.path?"infoPreview":"infoCollection",K=i({}),Q=j("NATIONAL_REGION_CODE"),X=i({extInfo:{pageCode:J},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),Z=i(null),ee=i([]),ne=i([]),te=i([]),ae=i([]),re=i([]),ie=o({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),oe=d((()=>X.value.extInfo?.contactInfo?.[0]||{})),de=()=>{M?C(`${W}`,b.query):w(X.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&n.push({path:x[t.pageAction.data.nextPageCode],query:b.query})}))};return l((()=>{T({orderNo:G,tenantId:Y}).then((({code:e,data:n})=>{if("10000"===e){const e=n;e.extInfo={...e.extInfo,pageCode:J,templateId:$,buttonCode:E.infoPreview},e.tenantOrderHolder=e.tenantOrderHolder||{},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const n=e;return n.extInfo=n.extInfo||{},n})),e.tenantOrderAttachmentList.forEach((e=>{e.category===P.OBVERSE_CERT?e.objectType===R.HOLDER?(ee.value[0]=e.uri,te.value[0]=e.id):e.objectType===R.INSURED&&(ne.value[0]=e.uri,ae.value[0]=e.id):e.category===P.REVERSE_CERT&&(e.objectType===R.HOLDER?(ee.value[1]=e.uri,te.value[1]=e.id):e.objectType===R.INSURED&&(ne.value[1]=e.uri,te.value[1]=e.id))})),Object.assign(X.value,e)}})).finally((()=>{ie.isLoading=!1})),h({pageCode:"infoCollection",templateId:$}).then((({code:e,data:n})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};n.productInsureFactorList.forEach((n=>{(e[n.moduleType]=e[n.moduleType]||[]).push(n)})),K.value=e}}))})),(e,n)=>{const t=s("ProCard"),a=s("ProRadioButton"),r=s("ProField"),i=s("ProCascader"),o=s("van-cell"),d=s("ProForm"),l=s("VanButton"),b=s("ProPageWrap");return u(),c(b,{class:"page-info-wrapper"},{default:f((()=>[p(ie).isLoading?I("",!0):(u(),c(d,{key:0,ref_key:"formRef",ref:Z,"is-view":""},{default:f((()=>[m(A,{"product-data":X.value.tenantOrderInsuredList[0]?.tenantOrderProductList[0]},null,8,["product-data"]),m(t,{title:"投保人"},{default:f((()=>[m(V,{images:ee.value,"onUpdate:images":n[0]||(n[0]=e=>ee.value=e),"form-info":X.value.tenantOrderHolder,"factor-list":K.value.HOLDER,"is-view":""},null,8,["images","form-info","factor-list"])])),_:1}),m(t,{title:"被保人"},{default:f((()=>[m(r,{modelValue:X.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":n[2]||(n[2]=e=>X.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:f((()=>[m(a,{modelValue:X.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":n[1]||(n[1]=e=>X.value.tenantOrderInsuredList[0].relationToHolder=e),options:p(B),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+X.value.tenantOrderInsuredList[0].relationToHolder?(u(),c(V,{key:0,images:ne.value,"onUpdate:images":n[3]||(n[3]=e=>ne.value=e),"form-info":X.value.tenantOrderInsuredList[0],"factor-list":K.value.INSURER||[],"is-view":""},null,8,["images","form-info","factor-list"])):I("",!0),m(i,{modelValue:X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":n[4]||(n[4]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:X.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":n[5]||(n[5]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:X.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":n[6]||(n[6]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":n[7]||(n[7]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureProvinceCode",placeholder:"请选择","is-link":"",required:"","data-source":p(Q),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),m(t,{title:"受益人"},{default:f((()=>[m(r,{modelValue:X.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":n[9]||(n[9]=e=>X.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:f((()=>[m(a,{modelValue:X.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":n[8]||(n[8]=e=>X.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:p(H),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==X.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(u(),g("div",_,[(u(!0),g(v,null,y(X.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,t)=>(u(),g("div",{key:e.beneficiaryId,class:"beneficiary-item"},[O("div",N,[O("span",U,L(`受益人${t+1}`),1)]),m(V,{images:re.value,"onUpdate:images":n[10]||(n[10]=e=>re.value=e),"form-info":e,"factor-list":K.value.BENEFICIARY||[],prefix:`beneficiary-${t}`,"is-view":"","beneficiary-list":X.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128))])):I("",!0)])),_:1}),m(t,{title:"保单通讯信息"},{default:f((()=>[Object.keys(p(oe)).length?(u(),c(o,{key:0,title:"单元格"},{title:f((()=>[O("div",S,[O("p",null,[O("span",k,L(p(oe).contactName),1),O("span",F,L(p(oe).contactPhoneNo),1)]),O("p",D,L(p(oe).contactAddress),1)])])),_:1})):I("",!0)])),_:1})])),_:1},512)),O("div",q,[m(l,{block:"",type:"primary",onClick:de},{default:f((()=>[z])),_:1})])])),_:1})}}}))}}}))}();
