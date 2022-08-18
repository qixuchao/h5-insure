var X=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var H=(u,a,s)=>a in u?X(u,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[a]=s,U=(u,a)=>{for(var s in a||(a={}))te.call(a,s)&&H(u,s,a[s]);if(b)for(var s of b(a))ne.call(a,s)&&H(u,s,a[s]);return u},w=(u,a)=>Z(u,ee(a));import{g as re,aj as oe,Q as ae,a5 as se,E as f,M as ie,y as ue,o as de,r as c,j as m,k as L,m as d,A as p,p as i,t as g,n as A,F as le,G as fe,z as I,J as B,C as ce}from"./vendor-c15a8cf7.js";import{P as pe,J as h,I as C}from"./index-909e4ad8.js";import{c as Ie,n as me,a as ve}from"./index-52b60bc0.js";import{_ as x,R as Oe,B as ye}from"./index-01c2f2c8.js";import{I as _e}from"./InsuredPart-c5e77a87.js";import{u as Ee}from"./useDicData-77e77a58.js";import"./trial-1066f377.js";const Le={key:0,class:"beneficiary-part"},ge={class:"part-title"},Be={class:"title"},Ce={class:"radio-item-wrapper"},Te={class:"name"},Ae={class:"hone"},xe={class:"address"},Re={class:"footer-button"},Pe=ce("\u4E0B\u4E00\u6B65"),he=re({setup(u){const a=oe(),s=ae(),{templateId:R=1,orderNo:k="2022072710380711215",tenantId:S="9991000007"}=s.query;se();const P=s.path==="/infoPreview"?"infoPreview":"infoCollection",O=f({}),j=Ee("NATIONAL_REGION_CODE"),t=f({extInfo:{pageCode:P},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),M=f(null),y=f([]),_=f([]),T=f([]),q=f([]),D=f([]),N=ie({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),E=ue(()=>{var l,e;return((e=(l=t.value.extInfo)==null?void 0:l.contactInfo)==null?void 0:e[0])||{}}),Y=()=>{me(t.value).then(({code:l,data:e})=>{l==="10000"&&e.pageAction.pageAction==="jumpToPage"&&a.push({path:pe[e.pageAction.data.nextPageCode],query:s.query})})},G=()=>{ve({orderNo:k,tenantId:S}).then(({code:l,data:e})=>{if(l==="10000"){const o=e;o.extInfo=w(U({},o.extInfo),{pageCode:P,templateId:R}),o.tenantOrderHolder=o.tenantOrderHolder||{},o.tenantOrderHolder.extInfo=o.tenantOrderHolder.extInfo||{},o.tenantOrderInsuredList[0].extInfo=o.tenantOrderInsuredList[0].extInfo||{},o.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=o.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map(n=>{const v=n;return v.extInfo={},v}),o.tenantOrderAttachmentList.forEach(n=>{n.category===h.OBVERSE_CERT?n.objectType===C.HOLDER?(y.value[0]=n.uri,T.value[0]=n.id):n.objectType===C.INSURED&&(_.value[0]=n.uri,q.value[0]=n.id):n.category===h.REVERSE_CERT&&(n.objectType===C.HOLDER?(y.value[1]=n.uri,T.value[1]=n.id):n.objectType===C.INSURED&&(_.value[1]=n.uri,T.value[1]=n.id))}),Object.assign(t.value,o)}}).finally(()=>{N.isLoading=!1})};return de(()=>{G(),Ie({pageCode:"infoCollection",templateId:R}).then(({code:l,data:e})=>{if(l==="10000"){const o={BENEFICIARY:[],INSURER:[],HOLDER:[]};e.productInsureFactorList.forEach(n=>{(o[n.moduleType]=o[n.moduleType]||[]).push(n)}),O.value=o}})}),(l,e)=>{const o=c("ProCard"),n=c("ProRadioButton"),v=c("ProField"),J=c("ProCascader"),$=c("van-cell"),W=c("ProForm"),z=c("VanButton"),Q=c("ProPageWrap");return m(),L(Q,{class:"page-info-wrapper"},{default:d(()=>[p(N).isLoading?g("",!0):(m(),L(W,{key:0,ref_key:"formRef",ref:M,"is-view":""},{default:d(()=>{var F;return[i(_e,{"product-data":(F=t.value.tenantOrderInsuredList[0])==null?void 0:F.tenantOrderProductList[0]},null,8,["product-data"]),i(o,{title:"\u6295\u4FDD\u4EBA"},{default:d(()=>[i(x,{images:y.value,"onUpdate:images":e[0]||(e[0]=r=>y.value=r),"form-info":t.value.tenantOrderHolder,"factor-list":O.value.HOLDER,"is-view":""},null,8,["images","form-info","factor-list"])]),_:1}),i(o,{title:"\u88AB\u4FDD\u4EBA"},{default:d(()=>[i(v,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[2]||(e[2]=r=>t.value.tenantOrderInsuredList[0].relationToHolder=r),label:"\u4E3A\u8C01\u4FDD\u5355",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>[i(n,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[1]||(e[1]=r=>t.value.tenantOrderInsuredList[0].relationToHolder=r),options:p(Oe),"is-view":""},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),+t.value.tenantOrderInsuredList[0].relationToHolder!=1?(m(),L(x,{key:0,images:_.value,"onUpdate:images":e[3]||(e[3]=r=>_.value=r),"form-info":t.value.tenantOrderInsuredList[0],"factor-list":O.value.INSURER||[],"is-view":""},null,8,["images","form-info","factor-list"])):g("",!0),i(J,{modelValue:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":e[4]||(e[4]=r=>t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=r),field1:t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":e[5]||(e[5]=r=>t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=r),field2:t.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":e[6]||(e[6]=r=>t.value.tenantOrderInsuredList[0].extInfo.insureCityCode=r),field3:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":e[7]||(e[7]=r=>t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=r),label:"\u6295\u4FDD\u5730\u533A",name:"insureProvinceCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:"","data-source":p(j),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])]),_:1}),i(o,{title:"\u53D7\u76CA\u4EBA"},{default:d(()=>[i(v,{modelValue:t.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":e[9]||(e[9]=r=>t.value.tenantOrderInsuredList[0].insuredBeneficiaryType=r),label:"\u53D7\u76CA\u4EBA\u7C7B\u578B",name:"insuredBeneficiaryType",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>[i(n,{modelValue:t.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":e[8]||(e[8]=r=>t.value.tenantOrderInsuredList[0].insuredBeneficiaryType=r),options:p(ye),"is-view":""},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),t.value.tenantOrderInsuredList[0].insuredBeneficiaryType==2?(m(),A("div",Le,[(m(!0),A(le,null,fe(t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,(r,V)=>(m(),A("div",{key:r.beneficiaryId,class:"beneficiary-item"},[I("div",ge,[I("span",Be,B(`\u53D7\u76CA\u4EBA${V+1}`),1)]),i(x,{images:D.value,"onUpdate:images":e[10]||(e[10]=K=>D.value=K),"form-info":r,"factor-list":O.value.BENEFICIARY||[],prefix:`beneficiary-${V}`,"is-view":"","beneficiary-list":t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])]))),128))])):g("",!0)]),_:1}),i(o,{title:"\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"},{default:d(()=>[Object.keys(p(E)).length?(m(),L($,{key:0,title:"\u5355\u5143\u683C"},{title:d(()=>[I("div",Ce,[I("p",null,[I("span",Te,B(p(E).contactName),1),I("span",Ae,B(p(E).contactPhoneNo),1)]),I("p",xe,B(p(E).contactAddress),1)])]),_:1})):g("",!0)]),_:1})]}),_:1},512)),I("div",Re,[i(z,{block:"",type:"primary",onClick:Y},{default:d(()=>[Pe]),_:1})])]),_:1})}}});export{he as default};
