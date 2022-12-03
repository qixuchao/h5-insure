import{h as e,a8 as a,N as t,P as n,r,L as i,x as o,o as d,k as s,l,m as u,n as f,A as c,Q as p,s as I,y as v,F as m,E as y,z as O,I as L,C}from"./vendor-c1388e64.js";import{h as g,s as x,n as h,b as T,g as E,N as b,A as P,t as R}from"./index-460a56e5.js";import{a as B,B as H}from"./infoCollection-77d451d4.js";import{_ as V}from"./index-7082ac53.js";import{I as A}from"./InsuredPart-3a0ae57f.js";import{u as _}from"./useDicData-7faddef3.js";import"./relativeTime-9363d9e3.js";import"./trial-f3b4911f.js";const j={key:0,class:"beneficiary-part"},w={class:"part-title"},N={class:"title"},U={class:"radio-item-wrapper"},k={class:"name"},D={class:"hone"},S={class:"address"},F={class:"footer-button"},q=C("下一步"),$=e({setup(e){const C=a(),$=t(),{templateId:Y=1,orderNo:z="2022072710380711215",tenantId:G="9991000007",isShare:Q,sharePageCode:W}=$.query;n();const J="/infoPreview"===$.path?"infoPreview":"infoCollection",K=r({}),M=_("NATIONAL_REGION_CODE"),X=r({extInfo:{pageCode:J},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),Z=r(null),ee=r([]),ae=r([]),te=r([]),ne=r([]),re=r([]),ie=i({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),oe=o((()=>{var e,a;return(null==(a=null==(e=X.value.extInfo)?void 0:e.contactInfo)?void 0:a[0])||{}})),de=()=>{Q?x(`${W}`,$.query):h(X.value).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&C.push({path:T[a.pageAction.data.nextPageCode],query:$.query})}))};return d((()=>{E({orderNo:z,tenantId:G}).then((({code:e,data:a})=>{if("10000"===e){const e=a;e.extInfo={...e.extInfo,pageCode:J,templateId:Y,buttonCode:b.infoPreview},e.tenantOrderHolder=e.tenantOrderHolder||{},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const a=e;return a.extInfo=a.extInfo||{},a})),e.tenantOrderAttachmentList.forEach((e=>{e.category===P.OBVERSE_CERT?e.objectType===R.HOLDER?(ee.value[0]=e.uri,te.value[0]=e.id):e.objectType===R.INSURED&&(ae.value[0]=e.uri,ne.value[0]=e.id):e.category===P.REVERSE_CERT&&(e.objectType===R.HOLDER?(ee.value[1]=e.uri,te.value[1]=e.id):e.objectType===R.INSURED&&(ae.value[1]=e.uri,te.value[1]=e.id))})),Object.assign(X.value,e)}})).finally((()=>{ie.isLoading=!1})),g({pageCode:"infoCollection",templateId:Y}).then((({code:e,data:a})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};a.productInsureFactorList.forEach((a=>{(e[a.moduleType]=e[a.moduleType]||[]).push(a)})),K.value=e}}))})),(e,a)=>{const t=s("ProCard"),n=s("ProRadioButton"),r=s("ProField"),i=s("ProCascader"),o=s("van-cell"),d=s("ProForm"),C=s("VanButton"),g=s("ProPageWrap");return l(),u(g,{class:"page-info-wrapper"},{default:f((()=>[c(ie).isLoading?I("",!0):(l(),u(d,{key:0,ref_key:"formRef",ref:Z,"is-view":""},{default:f((()=>{var e;return[p(A,{"product-data":null==(e=X.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0]},null,8,["product-data"]),p(t,{title:"投保人"},{default:f((()=>[p(V,{images:ee.value,"onUpdate:images":a[0]||(a[0]=e=>ee.value=e),"form-info":X.value.tenantOrderHolder,"factor-list":K.value.HOLDER,"is-view":""},null,8,["images","form-info","factor-list"])])),_:1}),p(t,{title:"被保人"},{default:f((()=>[p(r,{modelValue:X.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":a[2]||(a[2]=e=>X.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:f((()=>[p(n,{modelValue:X.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":a[1]||(a[1]=e=>X.value.tenantOrderInsuredList[0].relationToHolder=e),options:c(B),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+X.value.tenantOrderInsuredList[0].relationToHolder?(l(),u(V,{key:0,images:ae.value,"onUpdate:images":a[3]||(a[3]=e=>ae.value=e),"form-info":X.value.tenantOrderInsuredList[0],"factor-list":K.value.INSURER||[],"is-view":""},null,8,["images","form-info","factor-list"])):I("",!0),p(i,{modelValue:X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":a[4]||(a[4]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:X.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":a[5]||(a[5]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:X.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":a[6]||(a[6]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":a[7]||(a[7]=e=>X.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureProvinceCode",placeholder:"请选择","is-link":"",required:"","data-source":c(M),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),p(t,{title:"受益人"},{default:f((()=>[p(r,{modelValue:X.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":a[9]||(a[9]=e=>X.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:f((()=>[p(n,{modelValue:X.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":a[8]||(a[8]=e=>X.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:c(H),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==X.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(l(),v("div",j,[(l(!0),v(m,null,y(X.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,t)=>(l(),v("div",{key:e.beneficiaryId,class:"beneficiary-item"},[O("div",w,[O("span",N,L(`受益人${t+1}`),1)]),p(V,{images:re.value,"onUpdate:images":a[10]||(a[10]=e=>re.value=e),"form-info":e,"factor-list":K.value.BENEFICIARY||[],prefix:`beneficiary-${t}`,"is-view":"","beneficiary-list":X.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128))])):I("",!0)])),_:1}),p(t,{title:"保单通讯信息"},{default:f((()=>[Object.keys(c(oe)).length?(l(),u(o,{key:0,title:"单元格"},{title:f((()=>[O("div",U,[O("p",null,[O("span",k,L(c(oe).contactName),1),O("span",D,L(c(oe).contactPhoneNo),1)]),O("p",S,L(c(oe).contactAddress),1)])])),_:1})):I("",!0)])),_:1})]})),_:1},512)),O("div",F,[p(C,{block:"",type:"primary",onClick:de},{default:f((()=>[q])),_:1})])])),_:1})}}});export{$ as default};
