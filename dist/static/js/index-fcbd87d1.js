var me=Object.defineProperty,Ie=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var oe=(f,s,u)=>s in f?me(f,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):f[s]=u,w=(f,s)=>{for(var u in s||(s={}))_e.call(s,u)&&oe(f,u,s[u]);if(re)for(var u of re(s))Oe.call(s,u)&&oe(f,u,s[u]);return f},Q=(f,s)=>Ie(f,ve(s));import{g as ae,C as _,X as q,r as p,h as m,j as A,k as d,y as i,n as l,m as Y,E as se,I as C,F as ue,B as D,aj as Ee,Q as ye,a5 as Be,L as Le,x as Ae,o as Ce,z as c,s as M,T as ge}from"./vendor-bf3e5d1d.js";import{_ as De,v as Te,H as b,G as L,P as Fe}from"./index-cf51991b.js";import{c as Re,n as be,a as he}from"./index-82676b4f.js";import{u as Ne}from"./useDicData-af5669f6.js";import{_ as X,R as xe,B as Pe,a as He}from"./index-3d106f50.js";const ke={class:"com-select-container"},Se={class:"radio-item-wrapper"},Ve={class:"name"},Ue={class:"hone"},je={class:"address"},$e={class:"footer-button"},we=D("\u53D6\u6D88"),Me=D("\u786E\u8BA4"),Ye=ae({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(f,{emit:s}){const u=f,y=_(u.modelValue),h=_(u.show),G=()=>{s("submit",y.value),h.value=!1},H=()=>{s("close")};return q(()=>u.modelValue,O=>{console.log("newVal",O),y.value=O}),q(()=>y.value,O=>{s("update:modelValue",O)}),(O,g)=>{const W=p("van-radio"),T=p("van-radio-group"),t=p("VanButton");return m(),A(Te,{show:h.value,"onUpdate:show":g[1]||(g[1]=v=>h.value=v),class:"com-select",title:"\u9009\u62E9\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F",onClose:H},{default:d(()=>[i("div",ke,[l(T,{modelValue:y.value,"onUpdate:modelValue":g[0]||(g[0]=v=>y.value=v)},{default:d(()=>[(m(!0),Y(ue,null,se(f.dataSource,(v,E)=>(m(),A(W,{key:E,name:E+1,class:"radio-item"},{default:d(()=>[i("div",Se,[i("p",null,[i("span",Ve,C(v.contactName),1),i("span",Ue,C(v.contactPhoneNo),1)]),i("p",je,C(v.contactAddress),1)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),i("div",$e,[l(t,{plain:"",type:"primary"},{default:d(()=>[we]),_:1}),l(t,{type:"primary",onClick:G},{default:d(()=>[Me]),_:1})])]),_:1},8,["show"])}}});var qe=De(Ye,[["__scopeId","data-v-9c6de82e"]]);const Ge={key:0,class:"beneficiary-part"},We={class:"part-title"},ze={class:"title"},Je=D("\u5220\u9664"),Qe=D("+\u6DFB\u52A0\u53D7\u76CA\u4EBA"),Xe=D("\u9009\u62E9\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"),Ke={class:"radio-item-wrapper"},Ze={class:"name"},et={class:"hone"},tt={class:"address"},nt={class:"footer-button"},rt={class:"trial-result"},ot=D("\u9996\u671F"),at={class:"result-num"},st={class:"operate-btn"},ut=D("\u4E0B\u4E00\u6B65"),mt=ae({setup(f){const s=Ee(),u=ye(),{templateId:y=1,orderNo:h="2022072710380711215",tenantId:G="9991000007"}=u.query,[H,O]=Be(),g=u.path==="/infoPreview"?"infoPreview":"infoCollection",W=Ne("NATIONAL_REGION_CODE"),T=_({}),t=_({extInfo:{pageCode:g},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),v=_(null),E=_([]),F=_([]),N=_([]),z=_([]),K=_([]),I=Le({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),x=Ae(()=>{var r,e;return I.currentAddress?I.addressList[I.currentAddress]:((e=(r=t.value.extInfo)==null?void 0:r.contactInfo)==null?void 0:e[0])||{}}),de=()=>{const r=w({},t.value);r.extInfo=Q(w({},r.extInfo),{contactInfo:[x.value]}),console.log("\u{1F680} ~ goNextPage ~ formData",r),r.tenantOrderAttachmentList=[{category:b.OBVERSE_CERT,objectType:L.HOLDER,objectId:t.value.tenantOrderHolder.id,name:"\u6295\u4FDD\u4EBA\u8BC1\u4EF6\u6B63\u9762",uri:E.value[0],id:N.value[0]},{category:b.REVERSE_CERT,objectType:L.HOLDER,objectId:t.value.tenantOrderHolder.id,name:"\u6295\u4FDD\u4EBA\u8BC1\u4EF6\u80CC\u9762",uri:E.value[1],id:N.value[1]},{category:b.OBVERSE_CERT,objectType:L.INSURED,objectId:t.value.tenantOrderInsuredList[0].id,name:"\u88AB\u4FDD\u4EBA\u8BC1\u4EF6\u6B63\u9762",uri:F.value[0],id:z.value[1]},{category:b.REVERSE_CERT,objectType:L.INSURED,objectId:t.value.tenantOrderInsuredList[0].id,name:"\u88AB\u4FDD\u4EBA\u8BC1\u4EF6\u80CC\u9762",uri:F.value[1],id:z.value[1]}],v.value.validate().then(e=>{if(r.tenantOrderInsuredList[0].insuredBeneficiaryType===He.SPECIFY){const o={};if(r.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach(n=>{o[n.benefitOrder]?o[n.benefitOrder].sum+=Number(n.benefitRate):o[n.benefitOrder]={sum:Number(n.benefitRate)}}),Object.values(o).some(n=>n.sum!==100)){ge.fail("\u540C\u4E00\u987A\u4F4D\u7684\u53D7\u76CA\u4EBA\u6BD4\u4F8B\u4E4B\u548C\u5FC5\u987B\u4E3A100");return}}be(r).then(({code:o,data:n})=>{o==="10000"&&n.pageAction.pageAction==="jumpToPage"&&s.push({path:Fe[n.pageAction.data.nextPageCode],query:u.query})})})},ie=r=>{console.log("value",r)},le=()=>{I.beneficiaryId+=1,t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:I.beneficiaryId,extInfo:{}})},ce=r=>{t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter(e=>e.beneficiaryId!==r.beneficiaryId||r.id!==e.id)},fe=()=>{he({orderNo:h,tenantId:G}).then(({code:r,data:e})=>{if(r==="10000"){const o=e;o.extInfo=Q(w({},o.extInfo),{pageCode:g,templateId:y}),o.tenantOrderHolder=o.tenantOrderHolder||{},o.tenantOrderHolder.extInfo=o.tenantOrderHolder.extInfo||{},o.tenantOrderInsuredList[0].extInfo=o.tenantOrderInsuredList[0].extInfo||{},o.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=o.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map(n=>{const B=n;return B.extInfo={},B}),o.tenantOrderAttachmentList.forEach(n=>{n.category===b.OBVERSE_CERT?n.objectType===L.HOLDER?(E.value[0]=n.uri,N.value[0]=n.id):n.objectType===L.INSURED&&(F.value[0]=n.uri,z.value[0]=n.id):n.category===b.REVERSE_CERT&&(n.objectType===L.HOLDER?(E.value[1]=n.uri,N.value[1]=n.id):n.objectType===L.INSURED&&(F.value[1]=n.uri,N.value[1]=n.id))}),Object.assign(t.value,o)}}).finally(()=>{I.isLoading=!1})};return Ce(()=>{fe(),Re({pageCode:"infoCollection",templateId:y}).then(({code:r,data:e})=>{if(r==="10000"){const o={BENEFICIARY:[],INSURER:[],HOLDER:[]};e.productInsureFactorList.forEach(n=>{(o[n.moduleType]=o[n.moduleType]||[]).push(n)}),T.value=o}})}),q(()=>t.value,r=>{var e,o,n,B,k,S,P,V,U,j;if(r){const J=[{contactAddress:(o=(e=r.tenantOrderHolder)==null?void 0:e.extInfo)==null?void 0:o.familyAddress,contactName:r.tenantOrderHolder.name,contactPhoneNo:r.tenantOrderHolder.mobile},{contactAddress:(B=(n=r.tenantOrderHolder)==null?void 0:n.extInfo)==null?void 0:B.workAddress,contactName:r.tenantOrderHolder.name,contactPhoneNo:r.tenantOrderHolder.mobile},{contactAddress:(S=(k=r.tenantOrderInsuredList[0])==null?void 0:k.extInfo)==null?void 0:S.familyAddress,contactName:(P=r.tenantOrderInsuredList[0])==null?void 0:P.name,contactPhoneNo:(V=r.tenantOrderInsuredList[0])==null?void 0:V.mobile},{contactAddress:(j=(U=r.tenantOrderInsuredList[0])==null?void 0:U.extInfo)==null?void 0:j.workAddress,contactName:r.tenantOrderInsuredList[0].name,contactPhoneNo:r.tenantOrderInsuredList[0].mobile}];I.addressList=J.filter(R=>R.contactAddress&&R.contactName&&R.contactPhoneNo)}},{deep:!0,immediate:!0}),q(()=>t.value.tenantOrderInsuredList[0].relationToHolder,r=>{+r==1&&Object.assign(t.value.tenantOrderInsuredList[0],t.value.tenantOrderHolder,{id:t.value.tenantOrderInsuredList[0].id})},{deep:!0,immediate:!0}),(r,e)=>{const o=p("ProCard"),n=p("ProRadioButton"),B=p("ProField"),k=p("ProCascader"),S=p("ProSvg"),P=p("VanButton"),V=p("ProCheckButton"),U=p("van-cell"),j=p("ProForm"),J=p("ProPageWrap");return m(),A(J,{class:"page-info-wrapper"},{default:d(()=>{var R,Z,ee,$,te;return[c(I).isLoading?M("",!0):(m(),A(j,{key:0,ref_key:"formRef",ref:v},{default:d(()=>[l(o,{title:"\u6295\u4FDD\u4EBA"},{default:d(()=>[l(X,{images:E.value,"onUpdate:images":e[0]||(e[0]=a=>E.value=a),"form-info":t.value.tenantOrderHolder,"factor-list":T.value.HOLDER},null,8,["images","form-info","factor-list"])]),_:1}),l(o,{title:"\u88AB\u4FDD\u4EBA"},{default:d(()=>[l(B,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[2]||(e[2]=a=>t.value.tenantOrderInsuredList[0].relationToHolder=a),label:"\u4E3A\u8C01\u4FDD\u5355",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>[l(n,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[1]||(e[1]=a=>t.value.tenantOrderInsuredList[0].relationToHolder=a),options:c(xe)},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),+t.value.tenantOrderInsuredList[0].relationToHolder!=1?(m(),A(X,{key:0,images:F.value,"onUpdate:images":e[3]||(e[3]=a=>F.value=a),"form-info":t.value.tenantOrderInsuredList[0],"factor-list":T.value.INSURER||[]},null,8,["images","form-info","factor-list"])):M("",!0),l(k,{modelValue:t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:modelValue":e[4]||(e[4]=a=>t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=a),field1:t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":e[5]||(e[5]=a=>t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=a),field2:t.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":e[6]||(e[6]=a=>t.value.tenantOrderInsuredList[0].extInfo.insureCityCode=a),field3:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":e[7]||(e[7]=a=>t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=a),label:"\u6295\u4FDD\u5730\u533A",name:"insureProvinceCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:"","data-source":c(W),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])]),_:1}),l(o,{title:"\u53D7\u76CA\u4EBA"},{default:d(()=>[l(B,{modelValue:t.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":e[9]||(e[9]=a=>t.value.tenantOrderInsuredList[0].insuredBeneficiaryType=a),label:"\u53D7\u76CA\u4EBA\u7C7B\u578B",name:"insuredBeneficiaryType",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>[l(n,{modelValue:t.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":e[8]||(e[8]=a=>t.value.tenantOrderInsuredList[0].insuredBeneficiaryType=a),options:c(Pe)},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),t.value.tenantOrderInsuredList[0].insuredBeneficiaryType==2?(m(),Y("div",Ge,[(m(!0),Y(ue,null,se(t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,(a,pe)=>(m(),Y("div",{key:a.beneficiaryId||a.id,class:"beneficiary-item"},[i("div",We,[i("span",ze,C(`\u53D7\u76CA\u4EBA${pe+1}`),1),l(S,{name:"delete",onClick:ne=>ce(a)},{default:d(()=>[Je]),_:2},1032,["onClick"])]),l(X,{images:K.value,"onUpdate:images":e[10]||(e[10]=ne=>K.value=ne),"form-info":a,"factor-list":T.value.BENEFICIARY||[]},null,8,["images","form-info","factor-list"])]))),128)),l(P,{onClick:le},{default:d(()=>[Qe]),_:1})])):M("",!0)]),_:1}),l(o,{title:"\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"},{default:d(()=>[Object.keys(c(x)).length?(m(),A(U,{key:1,title:"\u5355\u5143\u683C","is-link":"",onClick:e[12]||(e[12]=a=>c(O)(!0))},{title:d(()=>[i("div",Ke,[i("p",null,[i("span",Ze,C(c(x).contactName),1),i("span",et,C(c(x).contactPhoneNo),1)]),i("p",tt,C(c(x).contactAddress),1)])]),_:1})):(m(),A(V,{key:0,activated:"",onClick:e[11]||(e[11]=a=>c(O)(!0))},{default:d(()=>[Xe]),_:1}))]),_:1})]),_:1},512)),i("div",nt,[i("span",rt,[ot,i("span",at,"\uFFE5"+C((te=($=(ee=(Z=(R=t.value.tenantOrderInsuredList)==null?void 0:R[0])==null?void 0:Z.tenantOrderProductList)==null?void 0:ee[0].premium)==null?void 0:$.toLocaleString)==null?void 0:te.call($)),1)]),i("div",st,[l(P,{block:"",type:"primary",onClick:de},{default:d(()=>[ut]),_:1})])]),c(H)?(m(),A(qe,{key:1,modelValue:c(I).currentAddress,"onUpdate:modelValue":e[13]||(e[13]=a=>c(I).currentAddress=a),show:c(H),"data-source":c(I).addressList,onSubmit:ie,onClose:e[14]||(e[14]=a=>c(O)(!1))},null,8,["modelValue","show","data-source"])):M("",!0)]}),_:1})}}});export{mt as default};
