var me=Object.defineProperty,Ie=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var ae=(f,s,u)=>s in f?me(f,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):f[s]=u,w=(f,s)=>{for(var u in s||(s={}))ve.call(s,u)&&ae(f,u,s[u]);if(oe)for(var u of oe(s))Oe.call(s,u)&&ae(f,u,s[u]);return f},Q=(f,s)=>Ie(f,_e(s));import{g as se,C as v,X as q,r as p,h as m,j as A,k as d,y as i,n as l,m as Y,E as ue,I as C,F as de,B as D,aj as Ee,Q as ye,a5 as Be,L as Le,x as Ae,o as Ce,z as c,s as M,T as ge}from"./vendor-bf3e5d1d.js";import{_ as De,v as Te,H as R,G as L,P as be}from"./index-f161a6a4.js";import{c as Fe,n as Re,a as he}from"./index-1e47b23c.js";import{u as xe}from"./useDicData-5c527be8.js";import{_ as X,R as Ne,B as Pe,a as He}from"./index-63a48b99.js";const ke={class:"com-select-container"},Se={class:"radio-item-wrapper"},Ve={class:"name"},Ue={class:"hone"},je={class:"address"},$e={class:"footer-button"},we=D("\u53D6\u6D88"),Me=D("\u786E\u8BA4"),Ye=se({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(f,{emit:s}){const u=f,y=v(u.modelValue),h=v(u.show),G=()=>{s("submit",y.value),h.value=!1},H=()=>{s("close")};return q(()=>u.modelValue,O=>{console.log("newVal",O),y.value=O}),q(()=>y.value,O=>{s("update:modelValue",O)}),(O,g)=>{const W=p("van-radio"),T=p("van-radio-group"),t=p("VanButton");return m(),A(Te,{show:h.value,"onUpdate:show":g[1]||(g[1]=_=>h.value=_),class:"com-select",title:"\u9009\u62E9\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F",onClose:H},{default:d(()=>[i("div",ke,[l(T,{modelValue:y.value,"onUpdate:modelValue":g[0]||(g[0]=_=>y.value=_)},{default:d(()=>[(m(!0),Y(de,null,ue(f.dataSource,(_,E)=>(m(),A(W,{key:E,name:E+1,class:"radio-item"},{default:d(()=>[i("div",Se,[i("p",null,[i("span",Ve,C(_.contactName),1),i("span",Ue,C(_.contactPhoneNo),1)]),i("p",je,C(_.contactAddress),1)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),i("div",$e,[l(t,{plain:"",type:"primary"},{default:d(()=>[we]),_:1}),l(t,{type:"primary",onClick:G},{default:d(()=>[Me]),_:1})])]),_:1},8,["show"])}}});var qe=De(Ye,[["__scopeId","data-v-9c6de82e"]]);const Ge={key:0,class:"beneficiary-part"},We={class:"part-title"},ze={class:"title"},Je=D("\u5220\u9664"),Qe=D("+\u6DFB\u52A0\u53D7\u76CA\u4EBA"),Xe=D("\u9009\u62E9\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"),Ke={class:"radio-item-wrapper"},Ze={class:"name"},et={class:"hone"},tt={class:"address"},nt={class:"footer-button"},rt={class:"trial-result"},ot=D("\u9996\u671F"),at={class:"result-num"},st={class:"operate-btn"},ut=D("\u4E0B\u4E00\u6B65"),mt=se({setup(f){const s=Ee(),u=ye(),{templateId:y=1,orderNo:h="2022072710380711215",tenantId:G="9991000007"}=u.query,[H,O]=Be(),g=u.path==="/infoPreview"?"infoPreview":"infoCollection",W=xe("NATIONAL_REGION_CODE"),T=v({}),t=v({extInfo:{pageCode:g},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),_=v(null),E=v([]),b=v([]),x=v([]),z=v([]),K=v([]),I=Le({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),N=Ae(()=>{var r,e;return I.currentAddress?I.addressList[I.currentAddress]:((e=(r=t.value.extInfo)==null?void 0:r.contactInfo)==null?void 0:e[0])||{}}),ie=()=>{const r=w({},t.value);r.extInfo=Q(w({},r.extInfo),{contactInfo:[N.value]}),r.tenantOrderAttachmentList=[{category:R.OBVERSE_CERT,objectType:L.HOLDER,objectId:t.value.tenantOrderHolder.id,name:"\u6295\u4FDD\u4EBA\u8BC1\u4EF6\u6B63\u9762",uri:E.value[0],id:x.value[0]},{category:R.REVERSE_CERT,objectType:L.HOLDER,objectId:t.value.tenantOrderHolder.id,name:"\u6295\u4FDD\u4EBA\u8BC1\u4EF6\u80CC\u9762",uri:E.value[1],id:x.value[1]},{category:R.OBVERSE_CERT,objectType:L.INSURED,objectId:t.value.tenantOrderInsuredList[0].id,name:"\u88AB\u4FDD\u4EBA\u8BC1\u4EF6\u6B63\u9762",uri:b.value[0],id:z.value[1]},{category:R.REVERSE_CERT,objectType:L.INSURED,objectId:t.value.tenantOrderInsuredList[0].id,name:"\u88AB\u4FDD\u4EBA\u8BC1\u4EF6\u80CC\u9762",uri:b.value[1],id:z.value[1]}],_.value.validate().then(e=>{if(r.tenantOrderInsuredList[0].insuredBeneficiaryType===He.SPECIFY){const o={};if(r.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach(n=>{o[n.benefitOrder]?o[n.benefitOrder].sum+=Number(n.benefitRate):o[n.benefitOrder]={sum:Number(n.benefitRate)}}),Object.values(o).some(n=>n.sum!==100)){ge.fail("\u540C\u4E00\u987A\u4F4D\u7684\u53D7\u76CA\u4EBA\u6BD4\u4F8B\u4E4B\u548C\u5FC5\u987B\u4E3A100");return}}Re(r).then(({code:o,data:n})=>{o==="10000"&&n.pageAction.pageAction==="jumpToPage"&&s.push({path:be[n.pageAction.data.nextPageCode],query:u.query})})})},le=r=>{console.log("value",r)},ce=()=>{I.beneficiaryId+=1,t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:I.beneficiaryId,extInfo:{}})},fe=r=>{t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter(e=>e.beneficiaryId!==r.beneficiaryId||r.id!==e.id)},pe=()=>{he({orderNo:h,tenantId:G}).then(({code:r,data:e})=>{if(r==="10000"){const o=e;o.extInfo=Q(w({},o.extInfo),{pageCode:g,templateId:y}),o.tenantOrderHolder=o.tenantOrderHolder||{},o.tenantOrderHolder.extInfo=o.tenantOrderHolder.extInfo||{},o.tenantOrderInsuredList[0].extInfo=o.tenantOrderInsuredList[0].extInfo||{},o.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=o.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map(n=>{const B=n;return B.extInfo={},B}),o.tenantOrderAttachmentList.forEach(n=>{n.category===R.OBVERSE_CERT?n.objectType===L.HOLDER?(E.value[0]=n.uri,x.value[0]=n.id):n.objectType===L.INSURED&&(b.value[0]=n.uri,z.value[0]=n.id):n.category===R.REVERSE_CERT&&(n.objectType===L.HOLDER?(E.value[1]=n.uri,x.value[1]=n.id):n.objectType===L.INSURED&&(b.value[1]=n.uri,x.value[1]=n.id))}),Object.assign(t.value,o)}}).finally(()=>{I.isLoading=!1})};return Ce(()=>{pe(),Fe({pageCode:"infoCollection",templateId:y}).then(({code:r,data:e})=>{if(r==="10000"){const o={BENEFICIARY:[],INSURER:[],HOLDER:[]};e.productInsureFactorList.forEach(n=>{(o[n.moduleType]=o[n.moduleType]||[]).push(n)}),T.value=o}})}),q(()=>t.value,r=>{var e,o,n,B,k,S,P,V,U,j;if(r){const J=[{contactAddress:(o=(e=r.tenantOrderHolder)==null?void 0:e.extInfo)==null?void 0:o.familyAddress,contactName:r.tenantOrderHolder.name,contactPhoneNo:r.tenantOrderHolder.mobile},{contactAddress:(B=(n=r.tenantOrderHolder)==null?void 0:n.extInfo)==null?void 0:B.workAddress,contactName:r.tenantOrderHolder.name,contactPhoneNo:r.tenantOrderHolder.mobile},{contactAddress:(S=(k=r.tenantOrderInsuredList[0])==null?void 0:k.extInfo)==null?void 0:S.familyAddress,contactName:(P=r.tenantOrderInsuredList[0])==null?void 0:P.name,contactPhoneNo:(V=r.tenantOrderInsuredList[0])==null?void 0:V.mobile},{contactAddress:(j=(U=r.tenantOrderInsuredList[0])==null?void 0:U.extInfo)==null?void 0:j.workAddress,contactName:r.tenantOrderInsuredList[0].name,contactPhoneNo:r.tenantOrderInsuredList[0].mobile}];I.addressList=J.filter(F=>F.contactAddress&&F.contactName&&F.contactPhoneNo)}},{deep:!0,immediate:!0}),q(()=>t.value.tenantOrderInsuredList[0].relationToHolder,r=>{+r==1&&Object.assign(t.value.tenantOrderInsuredList[0],t.value.tenantOrderHolder,{id:t.value.tenantOrderInsuredList[0].id})},{deep:!0,immediate:!0}),(r,e)=>{const o=p("ProCard"),n=p("ProRadioButton"),B=p("ProField"),k=p("ProCascader"),S=p("ProSvg"),P=p("VanButton"),V=p("ProCheckButton"),U=p("van-cell"),j=p("ProForm"),J=p("ProPageWrap");return m(),A(J,{class:"page-info-wrapper"},{default:d(()=>{var F,Z,ee,$,te;return[c(I).isLoading?M("",!0):(m(),A(j,{key:0,ref_key:"formRef",ref:_},{default:d(()=>[l(o,{title:"\u6295\u4FDD\u4EBA"},{default:d(()=>[l(X,{images:E.value,"onUpdate:images":e[0]||(e[0]=a=>E.value=a),"form-info":t.value.tenantOrderHolder,"factor-list":T.value.HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])]),_:1}),l(o,{title:"\u88AB\u4FDD\u4EBA"},{default:d(()=>[l(B,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[2]||(e[2]=a=>t.value.tenantOrderInsuredList[0].relationToHolder=a),label:"\u4E3A\u8C01\u4FDD\u5355",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>[l(n,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":e[1]||(e[1]=a=>t.value.tenantOrderInsuredList[0].relationToHolder=a),options:c(Ne)},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),+t.value.tenantOrderInsuredList[0].relationToHolder!=1?(m(),A(X,{key:0,images:b.value,"onUpdate:images":e[3]||(e[3]=a=>b.value=a),"form-info":t.value.tenantOrderInsuredList[0],"factor-list":T.value.INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):M("",!0),l(k,{modelValue:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":e[4]||(e[4]=a=>t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=a),field1:t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":e[5]||(e[5]=a=>t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=a),field2:t.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":e[6]||(e[6]=a=>t.value.tenantOrderInsuredList[0].extInfo.insureCityCode=a),field3:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":e[7]||(e[7]=a=>t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=a),label:"\u6295\u4FDD\u5730\u533A",name:"insureAreaCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:"","data-source":c(W),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])]),_:1}),l(o,{title:"\u53D7\u76CA\u4EBA"},{default:d(()=>[l(B,{modelValue:t.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":e[9]||(e[9]=a=>t.value.tenantOrderInsuredList[0].insuredBeneficiaryType=a),label:"\u53D7\u76CA\u4EBA\u7C7B\u578B",name:"insuredBeneficiaryType",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>[l(n,{modelValue:t.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":e[8]||(e[8]=a=>t.value.tenantOrderInsuredList[0].insuredBeneficiaryType=a),options:c(Pe)},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),t.value.tenantOrderInsuredList[0].insuredBeneficiaryType==2?(m(),Y("div",Ge,[(m(!0),Y(de,null,ue(t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,(a,ne)=>(m(),Y("div",{key:a.beneficiaryId||a.id,class:"beneficiary-item"},[i("div",We,[i("span",ze,C(`\u53D7\u76CA\u4EBA${ne+1}`),1),l(S,{name:"delete",onClick:re=>fe(a)},{default:d(()=>[Je]),_:2},1032,["onClick"])]),l(X,{images:K.value,"onUpdate:images":e[10]||(e[10]=re=>K.value=re),"form-info":a,"factor-list":T.value.BENEFICIARY||[],prefix:`beneficiary-${ne}`,"beneficiary-list":t.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])]))),128)),l(P,{onClick:ce},{default:d(()=>[Qe]),_:1})])):M("",!0)]),_:1}),l(o,{title:"\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"},{default:d(()=>[Object.keys(c(N)).length?(m(),A(U,{key:1,title:"\u5355\u5143\u683C","is-link":"",onClick:e[12]||(e[12]=a=>c(O)(!0))},{title:d(()=>[i("div",Ke,[i("p",null,[i("span",Ze,C(c(N).contactName),1),i("span",et,C(c(N).contactPhoneNo),1)]),i("p",tt,C(c(N).contactAddress),1)])]),_:1})):(m(),A(V,{key:0,activated:"",onClick:e[11]||(e[11]=a=>c(O)(!0))},{default:d(()=>[Xe]),_:1}))]),_:1})]),_:1},512)),i("div",nt,[i("span",rt,[ot,i("span",at,"\uFFE5"+C((te=($=(ee=(Z=(F=t.value.tenantOrderInsuredList)==null?void 0:F[0])==null?void 0:Z.tenantOrderProductList)==null?void 0:ee[0].premium)==null?void 0:$.toLocaleString)==null?void 0:te.call($)),1)]),i("div",st,[l(P,{block:"",type:"primary",onClick:ie},{default:d(()=>[ut]),_:1})])]),c(H)?(m(),A(qe,{key:1,modelValue:c(I).currentAddress,"onUpdate:modelValue":e[13]||(e[13]=a=>c(I).currentAddress=a),show:c(H),"data-source":c(I).addressList,onSubmit:le,onClose:e[14]||(e[14]=a=>c(O)(!1))},null,8,["modelValue","show","data-source"])):M("",!0)]}),_:1})}}});export{mt as default};
