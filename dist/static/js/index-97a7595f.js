var ye=Object.defineProperty,Le=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var de=(p,d,i)=>d in p?ye(p,d,{enumerable:!0,configurable:!0,writable:!0,value:i}):p[d]=i,Y=(p,d)=>{for(var i in d||(d={}))Ae.call(d,i)&&de(p,i,d[i]);if(ue)for(var i of ue(d))Be.call(d,i)&&de(p,i,d[i]);return p},te=(p,d)=>Le(p,Ce(d));import{g as ce,E,_ as K,r as m,j as _,k as R,m as l,z as u,p as c,n as W,G as fe,J as b,F as pe,C as k,ak as ge,O as De,Q as Te,M as he,y as Re,o as be,A as f,t as Q,d as Fe,T as Pe}from"./vendor-e057bbeb.js";import{_ as xe,z as Ne,w as ke,r as Se,Q as V,R as h,n as He,P as Ve}from"./index-06ed55d5.js";import{p as Ue}from"./trial-3f0831a9.js";import{f as ie,g as le,h as je}from"./trial-0293752e.js";import{u as $e}from"./useDicData-99f71c85.js";import{_ as ne,R as we,B as Me,a as Ye}from"./index-a05c090c.js";const qe={class:"com-select-container"},Ge={class:"radio-item-wrapper"},ze={class:"name"},Je={class:"hone"},Qe={class:"address"},We={class:"footer-button"},Ke=k("\u53D6\u6D88"),Xe=k("\u786E\u8BA4"),Ze=ce({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(p,{emit:d}){const i=p,B=E(i.modelValue),U=E(i.show),X=()=>{d("submit",B.value),U.value=!1},Z=()=>{d("close")};return K(()=>i.modelValue,F=>{console.log("newVal",F),B.value=F}),K(()=>B.value,F=>{d("update:modelValue",F)}),(F,P)=>{const j=m("van-radio"),q=m("van-radio-group"),G=m("VanButton");return _(),R(Ne,{show:U.value,"onUpdate:show":P[1]||(P[1]=I=>U.value=I),class:"com-select",title:"\u9009\u62E9\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F",onClose:Z},{default:l(()=>[u("div",qe,[c(q,{modelValue:B.value,"onUpdate:modelValue":P[0]||(P[0]=I=>B.value=I)},{default:l(()=>[(_(!0),W(pe,null,fe(p.dataSource,(I,t)=>(_(),R(j,{key:t,name:t+1,class:"radio-item"},{default:l(()=>[u("div",Ge,[u("p",null,[u("span",ze,b(I.contactName),1),u("span",Je,b(I.contactPhoneNo),1)]),u("p",Qe,b(I.contactAddress),1)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),u("div",We,[c(G,{plain:"",type:"primary"},{default:l(()=>[Ke]),_:1}),c(G,{type:"primary",onClick:X},{default:l(()=>[Xe]),_:1})])]),_:1},8,["show"])}}});var et=xe(Ze,[["__scopeId","data-v-9c6de82e"]]);const tt={key:0,class:"beneficiary-part"},nt={class:"part-title"},rt={class:"title"},ot=k("\u5220\u9664"),at=k("+\u6DFB\u52A0\u53D7\u76CA\u4EBA"),st=k("\u9009\u62E9\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"),ut={class:"radio-item-wrapper"},dt={class:"name"},it={class:"hone"},lt={class:"address"},ct={class:"footer-button"},ft={class:"left"},pt={class:"trial-result"},mt=k(" \u9996\u671F"),It={class:"result-num"},_t=u("div",{class:"result-desc"},"\u5B9E\u9645\u4FDD\u8D39\u4EE5\u540E\u7EED\u4E3A\u51C6",-1),vt={class:"operate-btn"},Ot=k("\u4E0B\u4E00\u6B65"),Dt=ce({setup(p){const d=ge(),i=De(),{templateId:B=1,orderNo:U="2022072710380711215",productCode:X,tenantId:Z="9991000007",proposalId:F}=i.query,[P,j]=Te(),q=i.path==="/infoPreview"?"infoPreview":"infoCollection",G=$e("NATIONAL_REGION_CODE"),I=E({}),t=E({extInfo:{pageCode:q},tenantOrderHolder:{extInfo:{occupationCodeList:[]},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),re=E(null),g=E([]),S=E([]),$=E([]),ee=E([]),oe=E([]),v=he({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),w=Re(()=>{var n,e;return v.currentAddress?v.addressList[v.currentAddress-1]||{}:((e=(n=t.value.extInfo)==null?void 0:n.contactInfo)==null?void 0:e[0])||{}}),me=n=>{const e={};return n.map(a=>{const{initialAmount:r,annuityDrawFrequency:s,annuityDrawType:D,paymentFrequency:T,paymentPeriod:O,paymentPeriodType:y,insurancePeriodType:L,insurancePeriodValue:C,riskCode:x,riskType:A,initialPremium:z,liabilityDetails:J,extInfo:H}=a,{riskId:M,copy:o}=H,N={amount:r,annuityDrawDate:s,annuityDrawType:D,paymentFrequency:T,riskId:M,copy:o,chargePeriod:O?`${ie[y]}_${O}`:ie[y],coveragePeriod:C?`${le[L]}_${C}`:le[L],riskCode:x,riskType:A,premium:z,liabilityVOList:J};return A===je.mainRisk?(e.mainRiskCode=x,e.mainRiskId=M):Object.assign(N,e),N})},ae=()=>{var e;const n=Y({},t.value);n.extInfo=te(Y({},n.extInfo),{contactInfo:[w.value]}),n.tenantOrderAttachmentList=[{category:V.OBVERSE_CERT,objectType:h.HOLDER,objectId:t.value.tenantOrderHolder.id,name:"\u6295\u4FDD\u4EBA\u8BC1\u4EF6\u6B63\u9762",uri:g.value[0],id:$.value[0]},{category:V.REVERSE_CERT,objectType:h.HOLDER,objectId:t.value.tenantOrderHolder.id,name:"\u6295\u4FDD\u4EBA\u8BC1\u4EF6\u80CC\u9762",uri:g.value[1],id:$.value[1]},{category:V.OBVERSE_CERT,objectType:h.INSURED,objectId:t.value.tenantOrderInsuredList[0].id,name:"\u88AB\u4FDD\u4EBA\u8BC1\u4EF6\u6B63\u9762",uri:S.value[0]||g.value[0],id:ee.value[1]},{category:V.REVERSE_CERT,objectType:h.INSURED,objectId:t.value.tenantOrderInsuredList[0].id,name:"\u88AB\u4FDD\u4EBA\u8BC1\u4EF6\u80CC\u9762",uri:S.value[1]||g.value[1],id:ee.value[1]}],(e=re.value)==null||e.validate().then(a=>{if(n.tenantOrderInsuredList[0].insuredBeneficiaryType===Ye.SPECIFY){const r={};if(n.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach(s=>{r[s.benefitOrder]?r[s.benefitOrder].sum+=Number(s.benefitRate):r[s.benefitOrder]={sum:Number(s.benefitRate)}}),Object.values(r).some(s=>s.sum!==100)){Pe.fail("\u540C\u4E00\u987A\u4F4D\u7684\u53D7\u76CA\u4EBA\u6BD4\u4F8B\u4E4B\u548C\u5FC5\u987B\u4E3A100");return}}He(n).then(({code:r,data:s})=>{r==="10000"&&s.pageAction.pageAction==="jumpToPage"&&d.push({path:Ve[s.pageAction.data.nextPageCode],query:i.query})})})},Ie=()=>{if(!F){ae();return}const{birthday:n,gender:e,extInfo:a}=t.value.tenantOrderHolder,{hasSocialInsurance:r}=a,{birthday:s,gender:D,extInfo:T,tenantOrderProductList:O}=t.value.tenantOrderInsuredList[0],{hasSocialInsurance:y}=T,L={holder:{personVO:{birthday:n,gender:e,socialFlag:r}},productCode:X,insuredVOList:[{insuredCode:"",personVO:{birthday:Fe(s).format("YYYY-MM-DD"),gender:D,socialFlag:y},productPlanVOList:[{insurerCode:"",planCode:"",riskVOList:me(O[0].tenantOrderRiskList)}]}]};Ue(Y({},L)).then(({code:C,data:x})=>{C==="10000"&&ae()})},_e=n=>{console.log("value",n)},ve=()=>{v.beneficiaryId+=1,t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:v.beneficiaryId,extInfo:{}})},Oe=n=>{t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter(e=>e.beneficiaryId!==n.beneficiaryId||n.id!==e.id)},Ee=()=>{Se({orderNo:U,tenantId:Z}).then(({code:n,data:e})=>{if(n==="10000"){const a=e;a.extInfo=te(Y({},a.extInfo),{pageCode:q,templateId:B}),a.tenantOrderHolder=a.tenantOrderHolder||{holderType:1},a.tenantOrderHolder.extInfo=a.tenantOrderHolder.extInfo||{occupationCodeList:[]},a.tenantOrderInsuredList[0].extInfo=a.tenantOrderInsuredList[0].extInfo||{occupationCodeList:[]},a.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=a.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map(r=>{const s=r;return s.extInfo=s.extInfo||{occupationCodeList:[]},s}),a.tenantOrderAttachmentList.forEach(r=>{r.category===V.OBVERSE_CERT?r.objectType===h.HOLDER?(g.value[0]=r.uri,$.value[0]=r.id):r.objectType===h.INSURED&&(S.value[0]=r.uri,ee.value[0]=r.id):r.category===V.REVERSE_CERT&&(r.objectType===h.HOLDER?(g.value[1]=r.uri,$.value[1]=r.id):r.objectType===h.INSURED&&(S.value[1]=r.uri,$.value[1]=r.id))}),Object.assign(t.value,a)}}).finally(()=>{v.isLoading=!1})};return be(()=>{Ee(),ke({pageCode:"infoCollection",templateId:B}).then(({code:n,data:e})=>{if(n==="10000"){const a={BENEFICIARY:[],INSURER:[],HOLDER:[]};e.productInsureFactorList.forEach(r=>{(a[r.moduleType]=a[r.moduleType]||[]).push(r)}),I.value=a}})}),K(()=>t.value,n=>{var e,a,r,s,D,T,O,y,L,C;if(n){const x=[{contactAddress:(a=(e=n.tenantOrderHolder)==null?void 0:e.extInfo)==null?void 0:a.familyAddress,contactName:n.tenantOrderHolder.name,contactPhoneNo:n.tenantOrderHolder.mobile},{contactAddress:(s=(r=n.tenantOrderHolder)==null?void 0:r.extInfo)==null?void 0:s.workAddress,contactName:n.tenantOrderHolder.name,contactPhoneNo:n.tenantOrderHolder.mobile},{contactAddress:(T=(D=n.tenantOrderInsuredList[0])==null?void 0:D.extInfo)==null?void 0:T.familyAddress,contactName:(O=n.tenantOrderInsuredList[0])==null?void 0:O.name,contactPhoneNo:(y=n.tenantOrderInsuredList[0])==null?void 0:y.mobile},{contactAddress:(C=(L=n.tenantOrderInsuredList[0])==null?void 0:L.extInfo)==null?void 0:C.workAddress,contactName:n.tenantOrderInsuredList[0].name,contactPhoneNo:n.tenantOrderInsuredList[0].mobile}];v.addressList=x.filter(A=>A.contactAddress&&A.contactName&&A.contactPhoneNo)}},{deep:!0,immediate:!0}),K(()=>t.value.tenantOrderInsuredList[0].relationToHolder,n=>{+n==1&&Object.assign(t.value.tenantOrderInsuredList[0],t.value.tenantOrderHolder,{id:t.value.tenantOrderInsuredList[0].id})},{deep:!0,immediate:!0}),(n,e)=>{const a=m("ProCard"),r=m("ProRadioButton"),s=m("ProField"),D=m("ProCascader"),T=m("ProSvg"),O=m("VanButton"),y=m("ProCheckButton"),L=m("van-cell"),C=m("ProForm"),x=m("ProPageWrap");return _(),R(x,{class:"page-info-wrapper"},{default:l(()=>{var A,z,J,H,M;return[f(v).isLoading?Q("",!0):(_(),R(C,{key:0,ref_key:"formRef",ref:re},{default:l(()=>[c(a,{title:"\u6295\u4FDD\u4EBA"},{default:l(()=>[c(ne,{images:g.value,"onUpdate:images":e[0]||(e[0]=o=>g.value=o),"form-info":t.value.tenantOrderHolder,"factor-list":I.value.HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])]),_:1}),c(a,{title:"\u88AB\u4FDD\u4EBA"},{default:l(()=>[c(s,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value.tenantOrderInsuredList[0].relationToHolder=o),label:"\u4E3A\u8C01\u4FDD\u5355",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9"},{input:l(()=>[c(r,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value.tenantOrderInsuredList[0].relationToHolder=o),options:f(we)},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),+t.value.tenantOrderInsuredList[0].relationToHolder!=1?(_(),R(ne,{key:0,images:S.value,"onUpdate:images":e[3]||(e[3]=o=>S.value=o),"form-info":t.value.tenantOrderInsuredList[0],"factor-list":I.value.INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):Q("",!0),c(D,{modelValue:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":e[4]||(e[4]=o=>t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=o),field1:t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":e[5]||(e[5]=o=>t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=o),field2:t.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":e[6]||(e[6]=o=>t.value.tenantOrderInsuredList[0].extInfo.insureCityCode=o),field3:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":e[7]||(e[7]=o=>t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=o),label:"\u6295\u4FDD\u5730\u533A",name:"insureAreaCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:"","data-source":f(G),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])]),_:1}),c(a,{title:"\u53D7\u76CA\u4EBA"},{default:l(()=>[c(s,{modelValue:t.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":e[9]||(e[9]=o=>t.value.tenantOrderInsuredList[0].insuredBeneficiaryType=o),label:"\u53D7\u76CA\u4EBA\u7C7B\u578B",name:"insuredBeneficiaryType",placeholder:"\u8BF7\u9009\u62E9"},{input:l(()=>[c(r,{modelValue:t.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":e[8]||(e[8]=o=>t.value.tenantOrderInsuredList[0].insuredBeneficiaryType=o),options:f(Me)},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),t.value.tenantOrderInsuredList[0].insuredBeneficiaryType==2?(_(),W("div",tt,[(_(!0),W(pe,null,fe(t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,(o,N)=>(_(),W("div",{key:o.beneficiaryId||o.id,class:"beneficiary-item"},[u("div",nt,[u("span",rt,b(`\u53D7\u76CA\u4EBA${N+1}`),1),c(T,{name:"delete",onClick:se=>Oe(o)},{default:l(()=>[ot]),_:2},1032,["onClick"])]),c(ne,{images:oe.value,"onUpdate:images":e[10]||(e[10]=se=>oe.value=se),"form-info":o,"factor-list":I.value.BENEFICIARY||[],prefix:`beneficiary-${N}`,"beneficiary-list":t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])]))),128)),c(O,{onClick:ve},{default:l(()=>[at]),_:1})])):Q("",!0)]),_:1}),c(a,{title:"\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"},{default:l(()=>{var o;return[((o=Object.keys(f(w)))==null?void 0:o.length)?(_(),R(L,{key:1,title:"\u5355\u5143\u683C","is-link":"",onClick:e[12]||(e[12]=N=>f(j)(!0))},{title:l(()=>[u("div",ut,[u("p",null,[u("span",dt,b(f(w).contactName),1),u("span",it,b(f(w).contactPhoneNo),1)]),u("p",lt,b(f(w).contactAddress),1)])]),_:1})):(_(),R(y,{key:0,activated:"",onClick:e[11]||(e[11]=N=>f(j)(!0))},{default:l(()=>[st]),_:1}))]}),_:1})]),_:1},512)),u("div",ct,[u("div",ft,[u("div",pt,[mt,u("span",It,"\uFFE5"+b((M=(H=(J=(z=(A=t.value.tenantOrderInsuredList)==null?void 0:A[0])==null?void 0:z.tenantOrderProductList)==null?void 0:J[0].premium)==null?void 0:H.toLocaleString)==null?void 0:M.call(H)),1)]),_t]),u("div",vt,[c(O,{block:"",type:"primary",onClick:Ie},{default:l(()=>[Ot]),_:1})])]),f(P)?(_(),R(et,{key:1,modelValue:f(v).currentAddress,"onUpdate:modelValue":e[13]||(e[13]=o=>f(v).currentAddress=o),show:f(P),"data-source":f(v).addressList,onSubmit:_e,onClose:e[14]||(e[14]=o=>f(j)(!1))},null,8,["modelValue","show","data-source"])):Q("",!0)]}),_:1})}}});export{Dt as default};
