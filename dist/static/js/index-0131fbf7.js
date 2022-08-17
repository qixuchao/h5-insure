var ne=Object.defineProperty,oe=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var W=(c,m,f)=>m in c?ne(c,m,{enumerable:!0,configurable:!0,writable:!0,value:f}):c[m]=f,z=(c,m)=>{for(var f in m||(m={}))ae.call(m,f)&&W(c,f,m[f]);if(J)for(var f of J(m))ue.call(m,f)&&W(c,f,m[f]);return c},Q=(c,m)=>oe(c,re(m));import{g as Z,E as L,y as ee,r as O,A as e,j as d,n as j,k as y,m as v,p,t as I,C as te,aj as le,Q as ie,a5 as se,M as de,o as fe,F as me,G as pe,z as D,J as M}from"./vendor-83047d1f.js";import{r as Ie,P as ce,I as X,H as Y}from"./index-5e859998.js";import{c as ye,n as ve,a as Ee}from"./index-4e6f08ff.js";import{b as Oe,c as Te,_ as K,R as Ve,B as _e}from"./index-5713d0d6.js";import{u as b}from"./useDicData-6ee64c3e.js";import{I as De}from"./InsuredPart-8410a9a1.js";import"./trial-d9a8ba03.js";const Le={key:0,class:"com-beneficiary-wrapper"},Ce=te(" % "),Ae=Z({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},isView:{type:Boolean,default:!1}},emits:["update:images"],setup(c,{emit:m}){const f=c,r=L({formInfo:f.formInfo}),G=b("CERT_TYPE");b("MARRIAGE_STATUS"),b("DEGREE");const h=b("NATIONALITY");b("NATIONAL_REGION_CODE");const l=ee(()=>{const T={};return f.factorList.forEach(n=>{T[n.code]=n}),T});return(T,n)=>{var g,F,R,B,N,x,E,t,i,a,_,U,k,S,q,w,P,u,H,$;const o=O("ProRadioButton"),C=O("ProField"),V=O("ProPicker"),A=O("ProDatePicker");return Object.keys(e(l)).length?(d(),j("div",Le,[((g=e(l).relationToInsured)==null?void 0:g.isDisplay)?(d(),y(C,{key:0,modelValue:r.value.formInfo.relationToInsured,"onUpdate:modelValue":n[1]||(n[1]=s=>r.value.formInfo.relationToInsured=s),name:"relationToInsured",required:((F=e(l).relationToInsured)==null?void 0:F.isMustInput)==="YES",label:"\u662F\u88AB\u4FDD\u4EBA\u7684"},{input:v(()=>[p(o,{modelValue:r.value.formInfo.relationToInsured,"onUpdate:modelValue":n[0]||(n[0]=s=>r.value.formInfo.relationToInsured=s),"is-view":c.isView,options:e(Oe)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","required"])):I("",!0),((R=e(l).certType)==null?void 0:R.isDisplay)?(d(),y(V,{key:1,modelValue:r.value.formInfo.certType,"onUpdate:modelValue":n[2]||(n[2]=s=>r.value.formInfo.certType=s),label:"\u8BC1\u4EF6\u7C7B\u578B",name:"certType",readonly:"","data-source":e(G),mapping:{label:"name",value:"code",children:"child"},required:((B=e(l).certType)==null?void 0:B.isMustInput)==="YES"},null,8,["modelValue","data-source","required"])):I("",!0),((N=e(l).certNo)==null?void 0:N.isDisplay)?(d(),y(C,{key:2,modelValue:r.value.formInfo.certNo,"onUpdate:modelValue":n[3]||(n[3]=s=>r.value.formInfo.certNo=s),name:"certNo",required:((x=e(l).certNo)==null?void 0:x.isMustInput)==="YES",label:"\u8BC1\u4EF6\u53F7\u7801"},null,8,["modelValue","required"])):I("",!0),((E=e(l).name)==null?void 0:E.isDisplay)?(d(),y(C,{key:3,modelValue:r.value.formInfo.name,"onUpdate:modelValue":n[4]||(n[4]=s=>r.value.formInfo.name=s),required:((t=e(l).name)==null?void 0:t.isMustInput)==="YES",name:"name",label:"\u59D3\u540D"},null,8,["modelValue","required"])):I("",!0),((i=e(l).gender)==null?void 0:i.isDisplay)?(d(),y(C,{key:4,modelValue:r.value.formInfo.gender,"onUpdate:modelValue":n[6]||(n[6]=s=>r.value.formInfo.gender=s),required:((a=e(l).gender)==null?void 0:a.isMustInput)==="YES",name:"gender",label:"\u6027\u522B"},{input:v(()=>[p(o,{modelValue:r.value.formInfo.gender,"onUpdate:modelValue":n[5]||(n[5]=s=>r.value.formInfo.gender=s),"is-view":c.isView,options:e(Ie)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","required"])):I("",!0),((_=e(l).birthday)==null?void 0:_.isDisplay)?(d(),y(A,{key:5,modelValue:r.value.formInfo.birthday,"onUpdate:modelValue":n[7]||(n[7]=s=>r.value.formInfo.birthday=s),label:"\u51FA\u751F\u65E5\u671F",name:"birthday",required:((U=e(l).birthday)==null?void 0:U.isMustInput)==="YES"},null,8,["modelValue","required"])):I("",!0),((k=e(l).certEndDate)==null?void 0:k.isDisplay)?(d(),y(A,{key:6,modelValue:r.value.formInfo.certEndDate,"onUpdate:modelValue":n[8]||(n[8]=s=>r.value.formInfo.certEndDate=s),label:"\u6709\u6548\u671F\u81F3",name:"certEndDate",required:((S=e(l).certEndDate)==null?void 0:S.isMustInput)==="YES"},null,8,["modelValue","required"])):I("",!0),((q=e(l).country)==null?void 0:q.isDisplay)?(d(),y(V,{key:7,modelValue:r.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":n[9]||(n[9]=s=>r.value.formInfo.extInfo.nationalityCode=s),label:"\u56FD\u7C4D",name:"nationalityCode","data-source":e(h),mapping:{label:"name",value:"code",children:"child"},required:((w=e(l).country)==null?void 0:w.isMustInput)==="YES"},null,8,["modelValue","data-source","required"])):I("",!0),((P=e(l).beneficiaryType)==null?void 0:P.isDisplay)?(d(),y(V,{key:8,modelValue:r.value.formInfo.benefitOrder,"onUpdate:modelValue":n[10]||(n[10]=s=>r.value.formInfo.benefitOrder=s),label:"\u53D7\u76CA\u4EBA\u987A\u5E8F",name:"benefitOrder","data-source":e(Te),required:((u=e(l).beneficiaryType)==null?void 0:u.isMustInput)==="YES"},null,8,["modelValue","data-source","required"])):I("",!0),((H=e(l).benefitRate)==null?void 0:H.isDisplay)?(d(),y(C,{key:9,modelValue:r.value.formInfo.benefitRate,"onUpdate:modelValue":n[11]||(n[11]=s=>r.value.formInfo.benefitRate=s),required:(($=e(l).benefitRate)==null?void 0:$.isMustInput)==="YES",name:"benefitRate",label:"\u53D7\u76CA\u6BD4\u4F8B"},{extra:v(()=>[Ce]),_:1},8,["modelValue","required"])):I("",!0)])):I("",!0)}}});const Be={key:0,class:"beneficiary-part"},ge={class:"part-title"},be={class:"title"},Re={class:"radio-item-wrapper"},Pe={class:"name"},Fe={class:"hone"},Ne={class:"address"},xe={class:"footer-button"},Ue=te("\u4E0B\u4E00\u6B65"),Ge=Z({setup(c){const m=le(),f=ie(),{templateId:r=1,orderNo:G="2022072710380711215",tenantId:h="9991000007"}=f.query;se();const l=f.path==="/infoPreview"?"infoPreview":"infoCollection",T=L({}),n=b("NATIONAL_REGION_CODE"),o=L({extInfo:{pageCode:l},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),C=L(null),V=L([]),A=L([]),g=L([]),F=L([]),R=de({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),B=ee(()=>{var E,t;return((t=(E=o.value.extInfo)==null?void 0:E.contactInfo)==null?void 0:t[0])||{}}),N=()=>{ve(o.value).then(({code:E,data:t})=>{E==="10000"&&t.pageAction.pageAction==="jumpToPage"&&m.push({path:ce[t.pageAction.data.nextPageCode],query:f.query})})},x=()=>{Ee({orderNo:G,tenantId:h}).then(({code:E,data:t})=>{if(E==="10000"){const i=t;i.extInfo=Q(z({},i.extInfo),{pageCode:l,templateId:r}),i.tenantOrderHolder=i.tenantOrderHolder||{},i.tenantOrderHolder.extInfo=i.tenantOrderHolder.extInfo||{},i.tenantOrderInsuredList[0].extInfo=i.tenantOrderInsuredList[0].extInfo||{},i.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=i.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map(a=>{const _=a;return _.extInfo={},_}),i.tenantOrderAttachmentList.forEach(a=>{a.category===X.OBVERSE_CERT?a.objectType===Y.HOLDER?(V.value[0]=a.uri,g.value[0]=a.id):a.objectType===Y.INSURED&&(A.value[0]=a.uri,F.value[0]=a.id):a.category===X.REVERSE_CERT&&(a.objectType===Y.HOLDER?(V.value[1]=a.uri,g.value[1]=a.id):a.objectType===Y.INSURED&&(A.value[1]=a.uri,g.value[1]=a.id))}),Object.assign(o.value,i)}}).finally(()=>{R.isLoading=!1})};return fe(()=>{x(),ye({pageCode:"infoCollection",templateId:r}).then(({code:E,data:t})=>{if(E==="10000"){const i={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach(a=>{(i[a.moduleType]=i[a.moduleType]||[]).push(a)}),T.value=i}})}),(E,t)=>{const i=O("ProCard"),a=O("ProRadioButton"),_=O("ProField"),U=O("ProCascader"),k=O("van-cell"),S=O("ProForm"),q=O("VanButton"),w=O("ProPageWrap");return d(),y(w,{class:"page-info-wrapper"},{default:v(()=>[e(R).isLoading?I("",!0):(d(),y(S,{key:0,ref_key:"formRef",ref:C,"is-view":""},{default:v(()=>{var P;return[p(De,{"product-data":(P=o.value.tenantOrderInsuredList[0])==null?void 0:P.tenantOrderProductList[0]},null,8,["product-data"]),p(i,{title:"\u6295\u4FDD\u4EBA"},{default:v(()=>[p(K,{images:V.value,"onUpdate:images":t[0]||(t[0]=u=>V.value=u),"form-info":o.value.tenantOrderHolder,"factor-list":T.value.HOLDER,"is-view":""},null,8,["images","form-info","factor-list"])]),_:1}),p(i,{title:"\u88AB\u4FDD\u4EBA"},{default:v(()=>[p(_,{modelValue:o.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=u=>o.value.tenantOrderInsuredList[0].relationToHolder=u),label:"\u4E3A\u8C01\u4FDD\u5355",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9"},{input:v(()=>[p(a,{modelValue:o.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=u=>o.value.tenantOrderInsuredList[0].relationToHolder=u),options:e(Ve),"is-view":""},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),+o.value.tenantOrderInsuredList[0].relationToHolder!=1?(d(),y(K,{key:0,images:A.value,"onUpdate:images":t[3]||(t[3]=u=>A.value=u),"form-info":o.value.tenantOrderInsuredList[0],"factor-list":T.value.INSURER||[],"is-view":""},null,8,["images","form-info","factor-list"])):I("",!0),p(U,{modelValue:o.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=u=>o.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=u),field1:o.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=u=>o.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=u),field2:o.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=u=>o.value.tenantOrderInsuredList[0].extInfo.insureCityCode=u),field3:o.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=u=>o.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=u),label:"\u6295\u4FDD\u5730\u533A",name:"insureProvinceCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:"","data-source":e(n),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])]),_:1}),p(i,{title:"\u53D7\u76CA\u4EBA"},{default:v(()=>[p(_,{modelValue:o.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=u=>o.value.tenantOrderInsuredList[0].insuredBeneficiaryType=u),label:"\u53D7\u76CA\u4EBA\u7C7B\u578B",name:"insuredBeneficiaryType",placeholder:"\u8BF7\u9009\u62E9"},{input:v(()=>[p(a,{modelValue:o.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=u=>o.value.tenantOrderInsuredList[0].insuredBeneficiaryType=u),options:e(_e),"is-view":""},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),o.value.tenantOrderInsuredList[0].insuredBeneficiaryType==2?(d(),j("div",Be,[(d(!0),j(me,null,pe(o.value.tenantOrderInsuredList[0].beneficiaryReqList,(u,H)=>(d(),j("div",{key:u.beneficiaryId,class:"beneficiary-item"},[D("div",ge,[D("span",be,M(`\u53D7\u76CA\u4EBA${H+1}`),1)]),p(Ae,{"is-view":"","form-info":u,"factor-list":T.value.BENEFICIARY},null,8,["form-info","factor-list"])]))),128))])):I("",!0)]),_:1}),p(i,{title:"\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"},{default:v(()=>[Object.keys(e(B)).length?(d(),y(k,{key:0,title:"\u5355\u5143\u683C"},{title:v(()=>[D("div",Re,[D("p",null,[D("span",Pe,M(e(B).contactName),1),D("span",Fe,M(e(B).contactPhoneNo),1)]),D("p",Ne,M(e(B).contactAddress),1)])]),_:1})):I("",!0)]),_:1})]}),_:1},512)),D("div",xe,[p(q,{block:"",type:"primary",onClick:N},{default:v(()=>[Ue]),_:1})])]),_:1})}}});export{Ge as default};
