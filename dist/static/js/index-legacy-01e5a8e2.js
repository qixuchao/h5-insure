!function(){var e=document.createElement("style");e.innerHTML=".page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:#f2f5fc;height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,self;font-weight:600;color:#393d46}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-5d3b395b.js","./index-legacy-92e6914a.js","./index-legacy-42821b5a.js","./InsuredPart-legacy-b198f24c.js","./useDicData-legacy-e739213c.js","./trial-legacy-5a0335a5.js"],(function(e){"use strict";var n,t,a,r,i,o,d,l,s,u,f,c,p,m,I,v,y,g,O,L,h,b,w,C,x,E,T,P,R,B,H,V,A;return{setters:[function(e){n=e.g,t=e.ak,a=e.O,r=e.Q,i=e.E,o=e.M,d=e.y,l=e.o,s=e.r,u=e.j,f=e.k,c=e.m,p=e.A,m=e.p,I=e.t,v=e.n,y=e.F,g=e.G,O=e.z,L=e.J,h=e.C},function(e){b=e.w,w=e.K,C=e.n,x=e.P,E=e.r,T=e.L,P=e.M},function(e){R=e._,B=e.R,H=e.B},function(e){V=e.I},function(e){A=e.u},function(){}],execute:function(){const _={key:0,class:"beneficiary-part"},j={class:"part-title"},U={class:"title"},S={class:"radio-item-wrapper"},k={class:"name"},N={class:"hone"},F={class:"address"},D={class:"footer-button"},q=h("下一步");e("default",n({setup(e){const n=t(),h=a(),{templateId:z=1,orderNo:M="2022072710380711215",tenantId:$="9991000007",isShare:G,sharePageCode:Y}=h.query;r();const J="/infoPreview"===h.path?"infoPreview":"infoCollection",K=i({}),Q=A("NATIONAL_REGION_CODE"),W=i({extInfo:{pageCode:J},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),X=i(null),Z=i([]),ee=i([]),ne=i([]),te=i([]),ae=i([]),re=o({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),ie=d((()=>{var e,n;return(null===(e=W.value.extInfo)||void 0===e||null===(n=e.contactInfo)||void 0===n?void 0:n[0])||{}})),oe=()=>{G?w(`${Y}`,h.query):C(W.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&n.push({path:x[t.pageAction.data.nextPageCode],query:h.query})}))};return l((()=>{E({orderNo:M,tenantId:$}).then((({code:e,data:n})=>{if("10000"===e){const e=n;e.extInfo={...e.extInfo,pageCode:J,templateId:z},e.tenantOrderHolder=e.tenantOrderHolder||{},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const n=e;return n.extInfo=n.extInfo||{},n})),e.tenantOrderAttachmentList.forEach((e=>{e.category===T.OBVERSE_CERT?e.objectType===P.HOLDER?(Z.value[0]=e.uri,ne.value[0]=e.id):e.objectType===P.INSURED&&(ee.value[0]=e.uri,te.value[0]=e.id):e.category===T.REVERSE_CERT&&(e.objectType===P.HOLDER?(Z.value[1]=e.uri,ne.value[1]=e.id):e.objectType===P.INSURED&&(ee.value[1]=e.uri,ne.value[1]=e.id))})),Object.assign(W.value,e)}})).finally((()=>{re.isLoading=!1})),b({pageCode:"infoCollection",templateId:z}).then((({code:e,data:n})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};n.productInsureFactorList.forEach((n=>{(e[n.moduleType]=e[n.moduleType]||[]).push(n)})),K.value=e}}))})),(e,n)=>{const t=s("ProCard"),a=s("ProRadioButton"),r=s("ProField"),i=s("ProCascader"),o=s("van-cell"),d=s("ProForm"),l=s("VanButton"),h=s("ProPageWrap");return u(),f(h,{class:"page-info-wrapper"},{default:c((()=>[p(re).isLoading?I("",!0):(u(),f(d,{key:0,ref_key:"formRef",ref:X,"is-view":""},{default:c((()=>{var e;return[m(V,{"product-data":null===(e=W.value.tenantOrderInsuredList[0])||void 0===e?void 0:e.tenantOrderProductList[0]},null,8,["product-data"]),m(t,{title:"投保人"},{default:c((()=>[m(R,{images:Z.value,"onUpdate:images":n[0]||(n[0]=e=>Z.value=e),"form-info":W.value.tenantOrderHolder,"factor-list":K.value.HOLDER,"is-view":""},null,8,["images","form-info","factor-list"])])),_:1}),m(t,{title:"被保人"},{default:c((()=>[m(r,{modelValue:W.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":n[2]||(n[2]=e=>W.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:c((()=>[m(a,{modelValue:W.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":n[1]||(n[1]=e=>W.value.tenantOrderInsuredList[0].relationToHolder=e),options:p(B),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+W.value.tenantOrderInsuredList[0].relationToHolder?(u(),f(R,{key:0,images:ee.value,"onUpdate:images":n[3]||(n[3]=e=>ee.value=e),"form-info":W.value.tenantOrderInsuredList[0],"factor-list":K.value.INSURER||[],"is-view":""},null,8,["images","form-info","factor-list"])):I("",!0),m(i,{modelValue:W.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":n[4]||(n[4]=e=>W.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:W.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":n[5]||(n[5]=e=>W.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:W.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":n[6]||(n[6]=e=>W.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:W.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":n[7]||(n[7]=e=>W.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureProvinceCode",placeholder:"请选择","is-link":"",required:"","data-source":p(Q),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),m(t,{title:"受益人"},{default:c((()=>[m(r,{modelValue:W.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":n[9]||(n[9]=e=>W.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:c((()=>[m(a,{modelValue:W.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":n[8]||(n[8]=e=>W.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:p(H),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==W.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(u(),v("div",_,[(u(!0),v(y,null,g(W.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,t)=>(u(),v("div",{key:e.beneficiaryId,class:"beneficiary-item"},[O("div",j,[O("span",U,L(`受益人${t+1}`),1)]),m(R,{images:ae.value,"onUpdate:images":n[10]||(n[10]=e=>ae.value=e),"form-info":e,"factor-list":K.value.BENEFICIARY||[],prefix:`beneficiary-${t}`,"is-view":"","beneficiary-list":W.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128))])):I("",!0)])),_:1}),m(t,{title:"保单通讯信息"},{default:c((()=>[Object.keys(p(ie)).length?(u(),f(o,{key:0,title:"单元格"},{title:c((()=>[O("div",S,[O("p",null,[O("span",k,L(p(ie).contactName),1),O("span",N,L(p(ie).contactPhoneNo),1)]),O("p",F,L(p(ie).contactAddress),1)])])),_:1})):I("",!0)])),_:1})]})),_:1},512)),O("div",D,[m(l,{block:"",type:"primary",onClick:oe},{default:c((()=>[q])),_:1})])])),_:1})}}}))}}}))}();
