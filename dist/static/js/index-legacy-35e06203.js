!function(){var e=document.createElement("style");e.innerHTML=".page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,self;font-weight:600;color:#393d46}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./index-legacy-1d6e1a56.js","./infoCollection-legacy-5d6be68b.js","./index-legacy-8a405f16.js","./InsuredPart-legacy-7b968fd9.js","./useDicData-legacy-86a21882.js","./pdfh5-legacy-9f98dc45.js","./relativeTime-legacy-4b5b6d28.js","./trial-legacy-2643d0b9.js"],(function(e){"use strict";var n,t,r,a,i,o,d,l,s,u,f,c,p,m,I,g,y,O,L,v,b,h,C,w,x,E,T,P,H,R,B,_,j,V,A,S,U,N,k,D,F,q;return{setters:[function(e){n=e.d,t=e.u,r=e.a,a=e.S,i=e.r,o=e.J,d=e.E,l=e.aE,s=e.$,u=e.C,f=e.b,c=e.c,p=e.e,m=e.w,I=e.g,g=e.f,y=e.a7,O=e.k,L=e.h,v=e.F,b=e.i,h=e.j,C=e.t,w=e.n,x=e.ai,E=e.M,T=e.O,P=e.p,H=e.N,R=e.ak,B=e.al,_=e.P,j=e.m,V=e.ap,A=e.aF,S=e.au,U=e.B},function(e){N=e.a,k=e.B},function(e){D=e._},function(e){F=e.I},function(e){q=e.u},function(){},function(){},function(){}],execute:function(){const z={key:0,class:"beneficiary-part"},$={class:"part-title"},M={class:"title"},Y={class:"radio-item-wrapper"},G={class:"name"},J={class:"hone"},W={class:"address"},K={class:"footer-button"};e("default",n({__name:"index",setup(e){const n=t(),Q=r(),{templateId:X=1,orderNo:Z="2022072710380711215",tenantId:ee="9991000007",isShare:ne,sharePageCode:te}=Q.query;a();const re="/infoPreview"===Q.path?"infoPreview":"infoCollection",ae=i({}),ie=q("NATIONAL_REGION_CODE"),oe=i({extInfo:{pageCode:re},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),de=i(null),le=i([]),se=i([]),ue=i([]),fe=i([]),ce=i([]),pe=o({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),me=d((()=>{var e,n;return(null===(e=oe.value.extInfo)||void 0===e||null===(n=e.contactInfo)||void 0===n?void 0:n[0])||{}})),Ie=()=>{ne?x(`${te}`,Q.query):E(oe.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&n.push({path:T[t.pageAction.data.nextPageCode],query:Q.query})}))};return l((()=>{P({orderNo:Z,tenantId:ee}).then((({code:e,data:n})=>{if("10000"===e){const e=n;e.extInfo={...e.extInfo,pageCode:re,templateId:X,buttonCode:H.infoPreview},e.tenantOrderHolder=e.tenantOrderHolder||{},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const n=e;return n.extInfo=n.extInfo||{},n})),e.tenantOrderAttachmentList.forEach((e=>{e.category===R.OBVERSE_CERT?e.objectType===B.HOLDER?(le.value[0]=e.uri,ue.value[0]=e.id):e.objectType===B.INSURED&&(se.value[0]=e.uri,fe.value[0]=e.id):e.category===R.REVERSE_CERT&&(e.objectType===B.HOLDER?(le.value[1]=e.uri,ue.value[1]=e.id):e.objectType===B.INSURED&&(se.value[1]=e.uri,ue.value[1]=e.id))})),Object.assign(oe.value,e)}})).finally((()=>{pe.isLoading=!1})),s({pageCode:"infoCollection",templateId:X}).then((({code:e,data:n})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};n.productInsureFactorList.forEach((n=>{(e[n.moduleType]=e[n.moduleType]||[]).push(n)})),ae.value=e}}))})),(e,n)=>{const t=_,r=j,a=V,i=A,o=u,d=S,l=U,s=f("ProPageWrap");return c(),p(s,{class:"page-info-wrapper"},{default:m((()=>[I(pe).isLoading?O("",!0):(c(),p(d,{key:0,ref_key:"formRef",ref:de,"is-view":""},{default:m((()=>{var e;return[g(F,{"product-data":null===(e=I(oe).tenantOrderInsuredList[0])||void 0===e?void 0:e.tenantOrderProductList[0]},null,8,["product-data"]),g(t,{title:"投保人"},{default:m((()=>[g(D,{images:I(le),"onUpdate:images":n[0]||(n[0]=e=>y(le)?le.value=e:null),"form-info":I(oe).tenantOrderHolder,"factor-list":I(ae).HOLDER,"is-view":""},null,8,["images","form-info","factor-list"])])),_:1}),g(t,{title:"被保人"},{default:m((()=>[g(a,{modelValue:I(oe).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":n[2]||(n[2]=e=>I(oe).tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:m((()=>[g(r,{modelValue:I(oe).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":n[1]||(n[1]=e=>I(oe).tenantOrderInsuredList[0].relationToHolder=e),options:I(N),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+I(oe).tenantOrderInsuredList[0].relationToHolder?(c(),p(D,{key:0,images:I(se),"onUpdate:images":n[3]||(n[3]=e=>y(se)?se.value=e:null),"form-info":I(oe).tenantOrderInsuredList[0],"factor-list":I(ae).INSURER||[],"is-view":""},null,8,["images","form-info","factor-list"])):O("",!0),g(i,{modelValue:I(oe).tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":n[4]||(n[4]=e=>I(oe).tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:I(oe).tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":n[5]||(n[5]=e=>I(oe).tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:I(oe).tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":n[6]||(n[6]=e=>I(oe).tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:I(oe).tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":n[7]||(n[7]=e=>I(oe).tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureProvinceCode",placeholder:"请选择","is-link":"",required:"","data-source":I(ie),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),g(t,{title:"受益人"},{default:m((()=>[g(a,{modelValue:I(oe).tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":n[9]||(n[9]=e=>I(oe).tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:m((()=>[g(r,{modelValue:I(oe).tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":n[8]||(n[8]=e=>I(oe).tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:I(k),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==I(oe).tenantOrderInsuredList[0].insuredBeneficiaryType?(c(),L("div",z,[(c(!0),L(v,null,b(I(oe).tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,t)=>(c(),L("div",{key:e.beneficiaryId,class:"beneficiary-item"},[h("div",$,[h("span",M,C(`受益人${t+1}`),1)]),g(D,{images:I(ce),"onUpdate:images":n[10]||(n[10]=e=>y(ce)?ce.value=e:null),"form-info":e,"factor-list":I(ae).BENEFICIARY||[],prefix:`beneficiary-${t}`,"is-view":"","beneficiary-list":I(oe).tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128))])):O("",!0)])),_:1}),g(t,{title:"保单通讯信息"},{default:m((()=>[Object.keys(I(me)).length?(c(),p(o,{key:0,title:"单元格"},{title:m((()=>[h("div",Y,[h("p",null,[h("span",G,C(I(me).contactName),1),h("span",J,C(I(me).contactPhoneNo),1)]),h("p",W,C(I(me).contactAddress),1)])])),_:1})):O("",!0)])),_:1})]})),_:1},512)),h("div",K,[g(l,{block:"",type:"primary",onClick:Ie},{default:m((()=>[w("下一步")])),_:1})])])),_:1})}}}))}}}))}();
