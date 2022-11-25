!function(){var e=document.createElement("style");e.innerHTML=".page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,self;font-weight:600;color:#393d46}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-7cfa1af5.js","./index-legacy-65414b08.js","./infoCollection-legacy-e435a60d.js","./index-legacy-4df19fff.js","./InsuredPart-legacy-afb50468.js","./useDicData-legacy-0a3b5bd8.js","./utils-legacy-20e4723c.js","./trial-legacy-4f893848.js"],(function(e){"use strict";var n,t,a,r,i,o,d,l,s,u,f,c,p,m,v,I,g,y,O,L,b,C,h,w,x,E,T,P,R,B,H,V,j,A;return{setters:[function(e){n=e.g,t=e.a9,a=e.O,r=e.Q,i=e.E,o=e.M,d=e.y,l=e.o,s=e.r,u=e.j,f=e.k,c=e.m,p=e.A,m=e.p,v=e.t,I=e.n,g=e.F,y=e.G,O=e.z,L=e.J,b=e.C},function(e){C=e.h,h=e.q,w=e.n,x=e.b,E=e.g,T=e.N,P=e.A,R=e.s},function(e){B=e.a,H=e.B},function(e){V=e._},function(e){j=e.I},function(e){A=e.u},function(){},function(){}],execute:function(){const _={key:0,class:"beneficiary-part"},U={class:"part-title"},N={class:"title"},S={class:"radio-item-wrapper"},k={class:"name"},F={class:"hone"},D={class:"address"},q={class:"footer-button"},z=b("下一步");e("default",n({setup(e){const n=t(),b=a(),{templateId:$=1,orderNo:G="2022072710380711215",tenantId:M="9991000007",isShare:Y,sharePageCode:J}=b.query;r();const Q="/infoPreview"===b.path?"infoPreview":"infoCollection",W=i({}),K=A("NATIONAL_REGION_CODE"),X=i({extInfo:{pageCode:Q},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),Z=i(null),ee=i([]),ne=i([]),te=i([]),ae=i([]),re=i([]),ie=o({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),oe=d((()=>{var e,n;return(null===(e=X.value.extInfo)||void 0===e||null===(n=e.contactInfo)||void 0===n?void 0:n[0])||{}})),de=()=>{Y?h(`${J}`,b.query):w(X.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&n.push({path:x[t.pageAction.data.nextPageCode],query:b.query})}))};return l((()=>{E({orderNo:G,tenantId:M}).then((({code:e,data:n})=>{if("10000"===e){const e=n;e.extInfo={...e.extInfo,pageCode:Q,templateId:$,buttonCode:T.infoPreview},e.tenantOrderHolder=e.tenantOrderHolder||{},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const n=e;return n.extInfo=n.extInfo||{},n})),e.tenantOrderAttachmentList.forEach((e=>{e.category===P.OBVERSE_CERT?e.objectType===R.HOLDER?(ee.value[0]=e.uri,te.value[0]=e.id):e.objectType===R.INSURED&&(ne.value[0]=e.uri,ae.value[0]=e.id):e.category===P.REVERSE_CERT&&(e.objectType===R.HOLDER?(ee.value[1]=e.uri,te.value[1]=e.id):e.objectType===R.INSURED&&(ne.value[1]=e.uri,te.value[1]=e.id))})),Object.assign(X.value,e)}})).finally((()=>{ie.isLoading=!1})),C({pageCode:"infoCollection",templateId:$}).then((({code:e,data:n})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};n.productInsureFactorList.forEach((n=>{(e[n.moduleType]=e[n.moduleType]||[]).push(n)})),W.value=e}}))})),(e,n)=>{const t=s("ProCard"),a=s("ProRadioButton"),r=s("ProField"),i=s("ProCascader"),o=s("van-cell"),d=s("ProForm"),l=s("VanButton"),b=s("ProPageWrap");return u(),f(b,{class:"page-info-wrapper"},{default:c((()=>[p(ie).isLoading?v("",!0):(u(),f(d,{key:0,ref_key:"formRef",ref:Z,"is-view":""},{default:c((()=>{var e;return[m(j,{"product-data":null===(e=X.value.tenantOrderInsuredList[0])||void 0===e?void 0:e.tenantOrderProductList[0]},null,8,["product-data"]),m(t,{title:"投保人"},{default:c((()=>[m(V,{images:ee.value,"onUpdate:images":n[0]||(n[0]=e=>ee.value=e),"form-info":X.value.tenantOrderHolder,"factor-list":W.value.HOLDER,"is-view":""},null,8,["images","form-info","factor-list"])])),_:1}),m(t,{title:"被保人"},{default:c((()=>[m(r,{modelValue:X.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":n[2]||(n[2]=e=>X.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:c((()=>[m(a,{modelValue:X.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":n[1]||(n[1]=e=>X.value.tenantOrderInsuredList[0].relationToHolder=e),options:p(B),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+X.value.tenantOrderInsuredList[0].relationToHolder?(u(),f(V,{key:0,images:ne.value,"onUpdate:images":n[3]||(n[3]=e=>ne.value=e),"form-info":X.value.tenantOrderInsuredList[0],"factor-list":W.value.INSURER||[],"is-view":""},null,8,["images","form-info","factor-list"])):v("",!0),m(i,{modelValue:X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":n[4]||(n[4]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:X.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":n[5]||(n[5]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:X.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":n[6]||(n[6]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":n[7]||(n[7]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureProvinceCode",placeholder:"请选择","is-link":"",required:"","data-source":p(K),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),m(t,{title:"受益人"},{default:c((()=>[m(r,{modelValue:X.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":n[9]||(n[9]=e=>X.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:c((()=>[m(a,{modelValue:X.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":n[8]||(n[8]=e=>X.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:p(H),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==X.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(u(),I("div",_,[(u(!0),I(g,null,y(X.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,t)=>(u(),I("div",{key:e.beneficiaryId,class:"beneficiary-item"},[O("div",U,[O("span",N,L(`受益人${t+1}`),1)]),m(V,{images:re.value,"onUpdate:images":n[10]||(n[10]=e=>re.value=e),"form-info":e,"factor-list":W.value.BENEFICIARY||[],prefix:`beneficiary-${t}`,"is-view":"","beneficiary-list":X.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128))])):v("",!0)])),_:1}),m(t,{title:"保单通讯信息"},{default:c((()=>[Object.keys(p(oe)).length?(u(),f(o,{key:0,title:"单元格"},{title:c((()=>[O("div",S,[O("p",null,[O("span",k,L(p(oe).contactName),1),O("span",F,L(p(oe).contactPhoneNo),1)]),O("p",D,L(p(oe).contactAddress),1)])])),_:1})):v("",!0)])),_:1})]})),_:1},512)),O("div",q,[m(l,{block:"",type:"primary",onClick:de},{default:c((()=>[z])),_:1})])])),_:1})}}}))}}}))}();
