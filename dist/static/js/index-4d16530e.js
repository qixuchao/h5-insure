var ee=Object.defineProperty,te=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var H=(u,s,a)=>s in u?ee(u,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[s]=a,U=(u,s)=>{for(var a in s||(s={}))re.call(s,a)&&H(u,a,s[a]);if(b)for(var a of b(s))oe.call(s,a)&&H(u,a,s[a]);return u},h=(u,s)=>te(u,ne(s));import{g as ae,a9 as se,O as ie,Q as ue,E as f,M as de,y as le,o as fe,r as c,j as m,k as E,m as d,A as p,p as i,t as g,n as T,F as ce,G as pe,z as I,J as C,C as Ie}from"./vendor-9d7eb2ed.js";import{h as me,q as ve,n as Oe,c as ye,g as _e,A as w,r as B}from"./index-4ec37735.js";import{a as Le,B as Ee}from"./infoCollection-b0426750.js";import{_ as x}from"./index-dedd56cc.js";import{I as ge}from"./InsuredPart-64e86836.js";import{u as Ce}from"./useDicData-d4950ffb.js";import"./trial-5171236b.js";const Be={key:0,class:"beneficiary-part"},Ae={class:"part-title"},Te={class:"title"},xe={class:"radio-item-wrapper"},Re={class:"name"},Pe={class:"hone"},De={class:"address"},Ne={class:"footer-button"},Fe=Ie("\u4E0B\u4E00\u6B65"),je=ae({setup(u){const s=se(),a=ie(),{templateId:R=1,orderNo:k="2022072710380711215",tenantId:S="9991000007",isShare:j,sharePageCode:q}=a.query;ue();const P=a.path==="/infoPreview"?"infoPreview":"infoCollection",O=f({}),M=Ce("NATIONAL_REGION_CODE"),t=f({extInfo:{pageCode:P},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),Y=f(null),y=f([]),_=f([]),A=f([]),G=f([]),D=f([]),N=de({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),L=le(()=>{var l,e;return((e=(l=t.value.extInfo)==null?void 0:l.contactInfo)==null?void 0:e[0])||{}}),$=()=>{j?ve(`${q}`,a.query):Oe(t.value).then(({code:l,data:e})=>{l==="10000"&&e.pageAction.pageAction==="jumpToPage"&&s.push({path:ye[e.pageAction.data.nextPageCode],query:a.query})})},J=()=>{_e({orderNo:k,tenantId:S}).then(({code:l,data:e})=>{if(l==="10000"){const o=e;o.extInfo=h(U({},o.extInfo),{pageCode:P,templateId:R}),o.tenantOrderHolder=o.tenantOrderHolder||{},o.tenantOrderHolder.extInfo=o.tenantOrderHolder.extInfo||{occupationCodeList:[]},o.tenantOrderInsuredList[0].extInfo=o.tenantOrderInsuredList[0].extInfo||{occupationCodeList:[]},o.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=o.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map(n=>{const v=n;return v.extInfo=v.extInfo||{},v}),o.tenantOrderAttachmentList.forEach(n=>{n.category===w.OBVERSE_CERT?n.objectType===B.HOLDER?(y.value[0]=n.uri,A.value[0]=n.id):n.objectType===B.INSURED&&(_.value[0]=n.uri,G.value[0]=n.id):n.category===w.REVERSE_CERT&&(n.objectType===B.HOLDER?(y.value[1]=n.uri,A.value[1]=n.id):n.objectType===B.INSURED&&(_.value[1]=n.uri,A.value[1]=n.id))}),Object.assign(t.value,o)}}).finally(()=>{N.isLoading=!1})};return fe(()=>{J(),me({pageCode:"infoCollection",templateId:R}).then(({code:l,data:e})=>{if(l==="10000"){const o={BENEFICIARY:[],INSURER:[],HOLDER:[]};e.productInsureFactorList.forEach(n=>{(o[n.moduleType]=o[n.moduleType]||[]).push(n)}),O.value=o}})}),(l,e)=>{const o=c("ProCard"),n=c("ProRadioButton"),v=c("ProField"),W=c("ProCascader"),z=c("van-cell"),Q=c("ProForm"),K=c("VanButton"),X=c("ProPageWrap");return m(),E(X,{class:"page-info-wrapper"},{default:d(()=>[p(N).isLoading?g("",!0):(m(),E(Q,{key:0,ref_key:"formRef",ref:Y,"is-view":""},{default:d(()=>{var F;return[i(ge,{"product-data":(F=t.value.tenantOrderInsuredList[0])==null?void 0:F.tenantOrderProductList[0]},null,8,["product-data"]),i(o,{title:"\u6295\u4FDD\u4EBA"},{default:d(()=>[i(x,{images:y.value,"onUpdate:images":e[0]||(e[0]=r=>y.value=r),"form-info":t.value.tenantOrderHolder,"factor-list":O.value.HOLDER,"is-view":""},null,8,["images","form-info","factor-list"])]),_:1}),i(o,{title:"\u88AB\u4FDD\u4EBA"},{default:d(()=>[i(v,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[2]||(e[2]=r=>t.value.tenantOrderInsuredList[0].relationToHolder=r),label:"\u4E3A\u8C01\u4FDD\u5355",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>[i(n,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[1]||(e[1]=r=>t.value.tenantOrderInsuredList[0].relationToHolder=r),options:p(Le),"is-view":""},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),+t.value.tenantOrderInsuredList[0].relationToHolder!=1?(m(),E(x,{key:0,images:_.value,"onUpdate:images":e[3]||(e[3]=r=>_.value=r),"form-info":t.value.tenantOrderInsuredList[0],"factor-list":O.value.INSURER||[],"is-view":""},null,8,["images","form-info","factor-list"])):g("",!0),i(W,{modelValue:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":e[4]||(e[4]=r=>t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=r),field1:t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":e[5]||(e[5]=r=>t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=r),field2:t.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":e[6]||(e[6]=r=>t.value.tenantOrderInsuredList[0].extInfo.insureCityCode=r),field3:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":e[7]||(e[7]=r=>t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=r),label:"\u6295\u4FDD\u5730\u533A",name:"insureProvinceCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:"","data-source":p(M),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])]),_:1}),i(o,{title:"\u53D7\u76CA\u4EBA"},{default:d(()=>[i(v,{modelValue:t.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":e[9]||(e[9]=r=>t.value.tenantOrderInsuredList[0].insuredBeneficiaryType=r),label:"\u53D7\u76CA\u4EBA\u7C7B\u578B",name:"insuredBeneficiaryType",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>[i(n,{modelValue:t.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":e[8]||(e[8]=r=>t.value.tenantOrderInsuredList[0].insuredBeneficiaryType=r),options:p(Ee),"is-view":""},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),t.value.tenantOrderInsuredList[0].insuredBeneficiaryType==2?(m(),T("div",Be,[(m(!0),T(ce,null,pe(t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,(r,V)=>(m(),T("div",{key:r.beneficiaryId,class:"beneficiary-item"},[I("div",Ae,[I("span",Te,C(`\u53D7\u76CA\u4EBA${V+1}`),1)]),i(x,{images:D.value,"onUpdate:images":e[10]||(e[10]=Z=>D.value=Z),"form-info":r,"factor-list":O.value.BENEFICIARY||[],prefix:`beneficiary-${V}`,"is-view":"","beneficiary-list":t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])]))),128))])):g("",!0)]),_:1}),i(o,{title:"\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"},{default:d(()=>[Object.keys(p(L)).length?(m(),E(z,{key:0,title:"\u5355\u5143\u683C"},{title:d(()=>[I("div",xe,[I("p",null,[I("span",Re,C(p(L).contactName),1),I("span",Pe,C(p(L).contactPhoneNo),1)]),I("p",De,C(p(L).contactAddress),1)])]),_:1})):g("",!0)]),_:1})]}),_:1},512)),I("div",Ne,[i(K,{block:"",type:"primary",onClick:$},{default:d(()=>[Fe]),_:1})])]),_:1})}}});export{je as default};
