var X=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var j=(f,i,l)=>i in f?X(f,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):f[i]=l,P=(f,i)=>{for(var l in i||(i={}))Z.call(i,l)&&j(f,l,i[l]);if(R)for(var l of R(i))ee.call(i,l)&&j(f,l,i[l]);return f},S=(f,i)=>J(f,K(i));import{g as te,af as ne,Q as re,a5 as oe,C as v,L as ae,o as se,X as ue,r as m,h as I,j as B,k as c,z as u,n as d,s as x,m as H,F as de,E as ie,y,I as D,B as T}from"./vendor-94f9fb13.js";import{P as le}from"./index-d8c827d0.js";import{c as ce,n as fe,a as pe}from"./index-e215feee.js";import{_ as U,R as me,B as Ie,A as ye,a as _e}from"./index-69c19540.js";import"./useDicData-921a4657.js";const Ae={key:0,class:"beneficiary-part"},Le={class:"part-title"},Oe={class:"title"},ve=T("\u5220\u9664"),Be=T("+\u6DFB\u52A0\u53D7\u76CA\u4EBA"),ge=T("\u9009\u62E9\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"),be={class:"radio-item-wrapper"},Ee={class:"name"},Ce={class:"hone"},Fe={class:"address"},he={class:"footer-button"},De=T("\u4E0B\u4E00\u6B65"),je=te({setup(f){const i=ne(),l=re(),{templateId:N=1,orderNo:V="2022072710380711215",tenantId:q="9991000007"}=l.query,[$,w]=oe(),k=l.path==="/infoPreview"?"infoPreview":"infoCollection",g=v({}),o=v({extInfo:{pageCode:k},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),Y=v(null),_=v([]),A=v([]),s=ae({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),M=()=>{const n=P({},o.value);n.tenantOrderAttachmentList=[{category:22,objectType:2,objectId:o.value.tenantOrderHolder.id,name:"\u6295\u4FDD\u4EBA\u8BC1\u4EF6\u6B63\u9762",uri:_.value[0]},{category:23,objectType:2,objectId:o.value.tenantOrderHolder.id,name:"\u6295\u4FDD\u4EBA\u8BC1\u4EF6\u80CC\u9762",uri:_.value[1]},{category:22,objectType:3,objectId:o.value.tenantOrderInsuredList[0].id,name:"\u88AB\u4FDD\u4EBA\u8BC1\u4EF6\u6B63\u9762",uri:A.value[0]},{category:23,objectType:3,objectId:o.value.tenantOrderInsuredList[0].id,name:"\u88AB\u4FDD\u4EBA\u8BC1\u4EF6\u80CC\u9762",uri:A.value[1]}],fe(n).then(({code:e,data:t})=>{e==="10000"&&t.pageAction.pageAction==="jumpToPage"&&i.push({path:le[t.pageAction.data.nextPageCode],query:l.query})})},W=n=>{console.log("value",n)},z=()=>{s.beneficiaryId+=1,o.value.tenantOrderInsuredList[0].beneficiaryReqList.push({id:s.beneficiaryId,extInfo:{}})},G=n=>{o.value.tenantOrderInsuredList[0].beneficiaryReqList=o.value.tenantOrderInsuredList[0].beneficiaryReqList.filter(e=>e.beneficiaryId!==n.beneficiaryId)},Q=()=>{pe({orderNo:V,tenantId:q}).then(({code:n,data:e})=>{if(n==="10000"){const t=e;t.extInfo=S(P({},t.extInfo),{pageCode:k,templateId:N}),t.tenantOrderHolder=t.tenantOrderHolder||{},t.tenantOrderHolder.extInfo=t.tenantOrderHolder.extInfo||{},t.tenantOrderInsuredList[0].extInfo=t.tenantOrderInsuredList[0].extInfo||{},t.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=t.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map(r=>{const p=r;return p.extInfo={},p}),t.tenantOrderAttachmentList.forEach(r=>{r.category,r.objectType,r.category===22?r.objectType===2?_[0]=r.uri:r.objectType===3&&(A[0]=r.uri):r.category===23&&(r.objectType===2?_[1]=r.uri:r.objectType===3&&(A[1]=r.uri))}),Object.assign(o.value,t)}}).finally(()=>{s.isLoading=!1})};return se(()=>{Q(),ce({pageCode:"infoCollection",templateId:N}).then(({code:n,data:e})=>{if(n==="10000"){const t={BENEFICIARY:[],INSURER:[],HOLDER:[]};e.productInsureFactorList.forEach(r=>{(t[r.moduleType]=t[r.moduleType]||[]).push(r)}),g.value=t}})}),ue(()=>o.value,n=>{var e,t,r,p,b,L,E,C,F,h;if(n){const a=[{contactAddress:((t=(e=n.tenantOrderHolder)==null?void 0:e.extInfo)==null?void 0:t.familyAddress)||1231123,contactName:n.tenantOrderHolder.name||123131,contactPhoneNo:n.tenantOrderHolder.mobile||123132},{contactAddress:(p=(r=n.tenantOrderHolder)==null?void 0:r.extInfo)==null?void 0:p.workAddress,contactName:n.tenantOrderHolder.name,contactPhoneNo:n.tenantOrderHolder.mobile},{contactAddress:(L=(b=n.tenantOrderInsuredList[0])==null?void 0:b.extInfo)==null?void 0:L.familyAddress,contactName:(E=n.tenantOrderInsuredList[0])==null?void 0:E.name,contactPhoneNo:(C=n.tenantOrderInsuredList[0])==null?void 0:C.mobile},{contactAddress:(h=(F=n.tenantOrderInsuredList[0])==null?void 0:F.extInfo)==null?void 0:h.workAddress,contactName:n.tenantOrderInsuredList[0].name,contactPhoneNo:n.tenantOrderInsuredList[0].mobile}];s.addressList=a.filter(O=>O.contactAddress&&O.contactName&&O.contactPhoneNo)}},{deep:!0,immediate:!0}),(n,e)=>{const t=m("ProCard"),r=m("ProRadioButton"),p=m("ProField"),b=m("ProSvg"),L=m("VanButton"),E=m("ProCheckButton"),C=m("van-cell"),F=m("ProForm"),h=m("ProPageWrap");return I(),B(h,{class:"page-info-wrapper"},{default:c(()=>[u(s).isLoading?x("",!0):(I(),B(F,{key:0,ref_key:"formRef",ref:Y},{default:c(()=>[d(t,{title:"\u6295\u4FDD\u4EBA"},{default:c(()=>[d(U,{images:_.value,"onUpdate:images":e[0]||(e[0]=a=>_.value=a),"form-info":o.value.tenantOrderHolder,"factor-list":g.value.HOLDER},null,8,["images","form-info","factor-list"])]),_:1}),d(t,{title:"\u88AB\u4FDD\u4EBA"},{default:c(()=>[d(p,{modelValue:o.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[2]||(e[2]=a=>o.value.tenantOrderInsuredList[0].relationToHolder=a),label:"\u4E3A\u8C01\u4FDD\u5355",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>[d(r,{modelValue:o.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[1]||(e[1]=a=>o.value.tenantOrderInsuredList[0].relationToHolder=a),options:u(me)},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),o.value.tenantOrderInsuredList[0].relationToHolder!=="0"?(I(),B(U,{key:0,images:A.value,"onUpdate:images":e[3]||(e[3]=a=>A.value=a),"form-info":o.value.tenantOrderInsuredList[0],"factor-list":g.value.INSURER||[]},null,8,["images","form-info","factor-list"])):x("",!0),d(p,{label:"\u6295\u4FDD\u5730\u533A",name:"type",placeholder:"\u8BF7\u9009\u62E9","is-link":""})]),_:1}),d(t,{title:"\u53D7\u76CA\u4EBA"},{default:c(()=>[d(p,{modelValue:o.value.tenantOrderInsuredList[0].beneficiaryType,"onUpdate:modelValue":e[5]||(e[5]=a=>o.value.tenantOrderInsuredList[0].beneficiaryType=a),label:"\u53D7\u76CA\u4EBA\u7C7B\u578B",name:"beneficiaryType",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>[d(r,{modelValue:o.value.tenantOrderInsuredList[0].beneficiaryType,"onUpdate:modelValue":e[4]||(e[4]=a=>o.value.tenantOrderInsuredList[0].beneficiaryType=a),options:u(Ie)},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),o.value.tenantOrderInsuredList[0].beneficiaryType==2?(I(),H("div",Ae,[(I(!0),H(de,null,ie(o.value.tenantOrderInsuredList[0].beneficiaryReqList,(a,O)=>(I(),H("div",{key:a.beneficiaryId,class:"beneficiary-item"},[y("div",Le,[y("span",Oe,D(`\u53D7\u76CA\u4EBA${O+1}`),1),d(b,{name:"delete",onClick:Te=>G(a)},{default:c(()=>[ve]),_:2},1032,["onClick"])]),d(_e,{"form-info":a,"factor-list":g.value.BENEFICIARY},null,8,["form-info","factor-list"])]))),128)),d(L,{onClick:z},{default:c(()=>[Be]),_:1})])):x("",!0)]),_:1}),d(t,{title:"\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"},{default:c(()=>[u(s).currentAddress?(I(),B(C,{key:1,title:"\u5355\u5143\u683C","is-link":""},{title:c(()=>[y("div",be,[y("p",null,[y("span",Ee,D(u(s).addressList[u(s).currentAddress-1].contactName),1),y("span",Ce,D(u(s).addressList[u(s).currentAddress-1].contactPhoneNo),1)]),y("p",Fe,D(u(s).addressList[u(s).currentAddress-1].contactAddress),1)])]),_:1})):(I(),B(E,{key:0,activated:"",onClick:e[6]||(e[6]=a=>u(w)(!0))},{default:c(()=>[ge]),_:1}))]),_:1})]),_:1},512)),y("div",he,[d(L,{block:"",type:"primary",onClick:M},{default:c(()=>[De]),_:1})]),d(ye,{modelValue:u(s).currentAddress,"onUpdate:modelValue":e[7]||(e[7]=a=>u(s).currentAddress=a),show:u($),"data-source":u(s).addressList,onSubmit:W},null,8,["modelValue","show","data-source"])]),_:1})}}});export{je as default};
