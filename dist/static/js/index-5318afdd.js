import{d as e,u as a,a as t,S as n,r,J as i,E as o,aD as d,$ as s,C as l,b as u,c as f,e as c,w as p,m as I,f as v,j as m,g as y,F as O,h as L,i as g,t as C,n as h,ah as x,M as E,O as T,p as b,N as R,aj as B,ak as H,P as j,l as V,ao as w,aE as P,at as _,B as A}from"./index-8dcf7554.js";import{a as U,B as N}from"./infoCollection-fc3860dd.js";import{_ as k}from"./index-f01206c8.js";import{I as D}from"./InsuredPart-42e0831d.js";import{u as S}from"./useDicData-15ad648f.js";import"./pdfh5-008ca364.js";import"./relativeTime-fde2a46e.js";import"./trial-d7fb7924.js";const q={key:0,class:"beneficiary-part"},F={class:"part-title"},$={class:"title"},Y={class:"radio-item-wrapper"},G={class:"name"},J={class:"hone"},M={class:"address"},W={class:"footer-button"},z=h("下一步"),K=e({setup(e){const h=a(),K=t(),{templateId:Q=1,orderNo:X="2022072710380711215",tenantId:Z="9991000007",isShare:ee,sharePageCode:ae}=K.query;n();const te="/infoPreview"===K.path?"infoPreview":"infoCollection",ne=r({}),re=S("NATIONAL_REGION_CODE"),ie=r({extInfo:{pageCode:te},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),oe=r(null),de=r([]),se=r([]),le=r([]),ue=r([]),fe=r([]),ce=i({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),pe=o((()=>{var e,a;return(null==(a=null==(e=ie.value.extInfo)?void 0:e.contactInfo)?void 0:a[0])||{}})),Ie=()=>{ee?x(`${ae}`,K.query):E(ie.value).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&h.push({path:T[a.pageAction.data.nextPageCode],query:K.query})}))};return d((()=>{b({orderNo:X,tenantId:Z}).then((({code:e,data:a})=>{if("10000"===e){const e=a;e.extInfo={...e.extInfo,pageCode:te,templateId:Q,buttonCode:R.infoPreview},e.tenantOrderHolder=e.tenantOrderHolder||{},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{occupationCodeList:[]},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const a=e;return a.extInfo=a.extInfo||{},a})),e.tenantOrderAttachmentList.forEach((e=>{e.category===B.OBVERSE_CERT?e.objectType===H.HOLDER?(de.value[0]=e.uri,le.value[0]=e.id):e.objectType===H.INSURED&&(se.value[0]=e.uri,ue.value[0]=e.id):e.category===B.REVERSE_CERT&&(e.objectType===H.HOLDER?(de.value[1]=e.uri,le.value[1]=e.id):e.objectType===H.INSURED&&(se.value[1]=e.uri,le.value[1]=e.id))})),Object.assign(ie.value,e)}})).finally((()=>{ce.isLoading=!1})),s({pageCode:"infoCollection",templateId:Q}).then((({code:e,data:a})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};a.productInsureFactorList.forEach((a=>{(e[a.moduleType]=e[a.moduleType]||[]).push(a)})),ne.value=e}}))})),(e,a)=>{const t=j,n=V,r=w,i=P,o=l,d=_,s=A,h=u("ProPageWrap");return f(),c(h,{class:"page-info-wrapper"},{default:p((()=>[I(ce).isLoading?m("",!0):(f(),c(d,{key:0,ref_key:"formRef",ref:oe,"is-view":""},{default:p((()=>{var e;return[v(D,{"product-data":null==(e=ie.value.tenantOrderInsuredList[0])?void 0:e.tenantOrderProductList[0]},null,8,["product-data"]),v(t,{title:"投保人"},{default:p((()=>[v(k,{images:de.value,"onUpdate:images":a[0]||(a[0]=e=>de.value=e),"form-info":ie.value.tenantOrderHolder,"factor-list":ne.value.HOLDER,"is-view":""},null,8,["images","form-info","factor-list"])])),_:1}),v(t,{title:"被保人"},{default:p((()=>[v(r,{modelValue:ie.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":a[2]||(a[2]=e=>ie.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:p((()=>[v(n,{modelValue:ie.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":a[1]||(a[1]=e=>ie.value.tenantOrderInsuredList[0].relationToHolder=e),options:I(U),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+ie.value.tenantOrderInsuredList[0].relationToHolder?(f(),c(k,{key:0,images:se.value,"onUpdate:images":a[3]||(a[3]=e=>se.value=e),"form-info":ie.value.tenantOrderInsuredList[0],"factor-list":ne.value.INSURER||[],"is-view":""},null,8,["images","form-info","factor-list"])):m("",!0),v(i,{modelValue:ie.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":a[4]||(a[4]=e=>ie.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:ie.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":a[5]||(a[5]=e=>ie.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:ie.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":a[6]||(a[6]=e=>ie.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:ie.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":a[7]||(a[7]=e=>ie.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureProvinceCode",placeholder:"请选择","is-link":"",required:"","data-source":I(re),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),v(t,{title:"受益人"},{default:p((()=>[v(r,{modelValue:ie.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":a[9]||(a[9]=e=>ie.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:p((()=>[v(n,{modelValue:ie.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":a[8]||(a[8]=e=>ie.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:I(N),"is-view":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==ie.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(f(),y("div",q,[(f(!0),y(O,null,L(ie.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,t)=>(f(),y("div",{key:e.beneficiaryId,class:"beneficiary-item"},[g("div",F,[g("span",$,C(`受益人${t+1}`),1)]),v(k,{images:fe.value,"onUpdate:images":a[10]||(a[10]=e=>fe.value=e),"form-info":e,"factor-list":ne.value.BENEFICIARY||[],prefix:`beneficiary-${t}`,"is-view":"","beneficiary-list":ie.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128))])):m("",!0)])),_:1}),v(t,{title:"保单通讯信息"},{default:p((()=>[Object.keys(I(pe)).length?(f(),c(o,{key:0,title:"单元格"},{title:p((()=>[g("div",Y,[g("p",null,[g("span",G,C(I(pe).contactName),1),g("span",J,C(I(pe).contactPhoneNo),1)]),g("p",M,C(I(pe).contactAddress),1)])])),_:1})):m("",!0)])),_:1})]})),_:1},512)),g("div",W,[v(s,{block:"",type:"primary",onClick:Ie},{default:p((()=>[z])),_:1})])])),_:1})}}});export{K as default};
