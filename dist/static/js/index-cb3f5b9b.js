import{G as e,d as o,r,c as s,e as t,w as a,f as d,i,j as l,B as u,z as n,bI as c,R as p,A as m,g as f,a2 as k,U as v,V as P,bv as L,E as C,bJ as h,aC as V,bK as b,bL as O,bB as y,al as I,am as R,ab as g,L as j,bM as _,h as D,bN as w,b7 as x,a as E,u as T,bO as N,o as U,bq as q,br as S,b as M,aB as H,aA as F,y as $,D as B,$ as A,bi as K,aw as Q,T as W}from"./index-2893addd.js";import{A as z}from"./index-850c79e1.js";import{P as G,a as J,b as Y,c as X}from"./index-ea4679a3.js";import{d as Z}from"./debounce-eed12388.js";import{P as ee,u as oe}from"./ProductTips-2e1814c9.js";import{_ as re}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-1b66cd2c.js";/* empty css              */import"./bankCard-5ddfff1f.js";import{q as se,a as te}from"./createProposal-48636ab7.js";import{q as ae,p as de,a as ie}from"./trial-3f856787.js";import{T as le}from"./index-97bb2d78.js";import{u as ue}from"./useDicData-2e31d7b8.js";import"./pdfh5-008ca364.js";import"./index-3a8d7e25.js";import"./isObjectLike-a9798079.js";import"./_initCloneObject-0663309f.js";import"./phoneVerify-a7372c7e.js";import"./index-2f2a24c9.js";import"./cloneDeep-1de8e9b0.js";import"./infoCollection-61f591b9.js";import"./index-1c16f342.js";import"./utils-7bfb2402.js";import"./index-4c125845.js";import"./trial-a94c4282.js";import"./utils-56471676.js";import"./index-09115208.js";import"./empty-c926d8ec.js";import"./box-title-3a4c7b97.js";import"./index-da8c7f2f.js";import"./echarts-ac920fed.js";import"./Table-faf34afd.js";import"./useOrder-97fa16e8.js";import"./utils-6c728906.js";import"./constants-7afb7c3d.js";import"./nextStep-7ced52cd.js";import"./core-5a653365.js";import"./constant-8927d485.js";const ne={class:"trial-button"};var ce=e(o({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:o,emit:n}){const c=e,p=r(null),m=(e,o)=>{var r;console.log("trialData",e);const{holder:s,insuredVOList:t,productCode:a}=e||{},{personVO:d,productPlanVOList:i}=(null==t?void 0:t[0])||{},l=((null==(r=null==i?void 0:i[0])?void 0:r.riskVOList)||[]).map((e=>{var r,s;return{...e,premium:null==(r=o[e.riskCode])?void 0:r.premium,amount:null==(s=o[e.riskCode])?void 0:s.amount}}));return{productCode:a,proposalHolder:null==s?void 0:s.personVO,insuredPersonVO:d,insuredProductInfo:{productCode:a,productName:c.productName,occupationCodeList:d.occupationCodeList,proposalProductRiskList:l}}};return o({...["open","close"].reduce(((e,o)=>(e[o]=(...e)=>{var r;null==(r=p.value)||r[o](...e)},e)),{}),formatData:m}),(o,r)=>{const c=u;return s(),t(le,{ref_key:"trialRef",ref:p,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{default:a((({trialData:e,riskPremium:o})=>[d("div",ne,[i(c,{type:"primary",onClick:r=>((...e)=>{n("finish",m(e[0],e[1]))})(e,o)},{default:a((()=>[l("确定")])),_:2},1032,["onClick"])])])),_:1},8,["product-info"])}}}),[["__scopeId","data-v-0e8aad9c"]]);const pe={class:"com-risk-list-wrapper"},me=(e=>(I("data-v-7d3c3028"),e=e(),R(),e))((()=>d("div",{class:"popup-title"},"选择附加险",-1))),fe={class:"risk-list"},ke={class:"cell-title"},ve={class:"title"},Pe={class:"footer-button"};var Le=e(o({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:o}){const I=e,R=r([]),g=r([]),j=r([...I.disabled]),_=n({show:I.show,currentChecked:[...I.modelValue]}),D=e=>{var o,r,s;if(j.value.includes(e))return;((e,o)=>{if(!I.collocationList.length)return o?void(_.currentChecked=[]):void _.currentChecked.push(e);let r=_.currentChecked,s=j.value;o?(I.collocationList.forEach((o=>{e===o.riskId&&(2===o.collocationType?r=r.filter((r=>r!==o.collocationRiskId||r!==e)):3===o.collocationType?(r=r.filter((o=>o!==e)),s=s.filter((e=>e!==o.collocationRiskId))):r=r.filter((o=>o!==e)))})),_.currentChecked=r,j.value=s):(I.collocationList.forEach((t=>{e===t.riskId&&(o||(2===t.collocationType?r.push(t.collocationRiskId):3===t.collocationType&&s.push(t.collocationRiskId),r.push(e)))})),_.currentChecked.push(...r),j.value=s)})(e,_.currentChecked.includes(e)),null==(s=null==(r=null==(o=null==R?void 0:R.value)?void 0:o[e])?void 0:r.toggle)||s.call(r)},w=()=>{o("close")},x=()=>{const e=I.riskList.filter((e=>_.currentChecked.includes(e.id)));o("update:modelValue",[...new Set(g.value)]),o("finished",e,j.value),o("close")};return c((()=>{R.value=[]})),p((()=>_.currentChecked),(e=>{g.value=e}),{deep:!0,immediate:!0}),p((()=>I.modelValue),(e=>{g.value=e||[],j.value.push(...e||[])}),{deep:!0,immediate:!0}),(o,r)=>{const n=h,c=V,p=b,I=O,E=u,T=y;return s(),m("div",pe,[i(T,{show:f(_).show,"onUpdate:show":r[1]||(r[1]=e=>f(_).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:w},{default:a((()=>[me,d("div",fe,[i(I,{modelValue:f(g),"onUpdate:modelValue":r[0]||(r[0]=e=>k(g)?g.value=e:null)},{default:a((()=>[i(p,{inset:""},{default:a((()=>[(s(!0),m(v,null,P(e.riskList,(e=>(s(),t(c,{key:e.id,title:e.riskName,disabled:f(j).includes(e.id),onClick:o=>D(e.id)},{"right-icon":a((()=>[i(n,{ref_for:!0,ref:o=>f(R)[e.id]=o,shape:"square",disabled:f(j).includes(e.id),name:e.id,onClick:L((o=>D(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:a((()=>[d("div",ke,[d("div",ve,C(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),d("div",Pe,[i(E,{type:"primary",disabled:!f(_).currentChecked.length,block:"",onClick:x},{default:a((()=>[l("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const Ce=e=>(I("data-v-23dd3e0e"),e=e(),R(),e),he={class:"com-product-list-wrapper"},Ve={class:"risk-item-wrapper"},be={class:"content"},Oe={class:"risk-premium"},ye={class:"premium"},Ie={class:"risk-factor"},Re={class:"factor"},ge={class:"factor-value"},je=Ce((()=>d("span",{class:"factor-name"}," 保额(元) ",-1))),_e={class:"factor"},De={class:"factor-value"},we=Ce((()=>d("span",{class:"factor-name"}," 保障期间 ",-1))),xe={class:"factor"},Ee={class:"factor-value"},Te=Ce((()=>d("span",{class:"factor-name"}," 缴费期间 ",-1))),Ne={key:0,class:"operate-bar"},Ue=Ce((()=>d("span",{class:"btn-plus"},"+",-1))),qe={key:0,class:"premium-total"},Se={class:"premium"},Me=o({name:"ProductList"});var He=e(o({...Me,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0},errorMsg:{default:""}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:o}){const u=e,[n,c]=g(),k=r({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),L=ue("RISK_PAYMENT_PERIOD"),h=ue("RISK_INSURANCE_PERIOD"),V=j((()=>{var e,o;return(null==(o=null==(e=u.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]})),b=j((()=>{var e,o;const r=u.productRiskList.map((e=>e.riskId)),s=((null==(o=null==(e=u.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList)||[]).filter((e=>r.includes(e.id)&&1===e.collocationType));return V.value.length-s.length})),O=j((()=>e=>{var o,r;const s=(null==(r=null==(o=u.productData)?void 0:o.productRiskVoList)?void 0:r[0].riskDetailVOList.find((o=>o.id!==e)))||{};let t=!1;return t=!!u.productNum||2===s.riskType&&1===s.collocationType,t})),y=j((()=>{var e,o;return(null==(o=null==(e=u.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),I=j((()=>y.value.collocationVOList||[])),R=(e,r)=>{const s=e.map((e=>e.id)).filter((e=>!k.value.disabledList.includes(e)));o("addRiderRisk",s,u.productInfo)};return p((()=>u.productInfo),(e=>{var o;let r=0;(e.proposalProductRiskList||[]).forEach((e=>{r+=e.premium})),null==(o=u.pickProductPremium)||o.call(u,{[`${e.productCode}`]:r}),k.value.totalPremium=r}),{deep:!0,immediate:!0}),p((()=>u.productRiskList),(e=>{const o=[],r=[],s=[];(e||[]).forEach((e=>{1===e.riskType?o.unshift(e):(r.push(e.riskId),s.push(e.riskId),o.push(e))})),k.value.disabledList=r,k.value.checkedList=s,k.value.productRiskList=o}),{deep:!0,immediate:!0}),(r,p)=>{var y,g;const j=w,E=x;return s(),m("div",he,[(s(!0),m(v,null,P(f(k).productRiskList,(e=>{var r,n;return s(),m("div",{key:e.riskId},[d("div",Ve,[i(j,{"risk-type":e.riskType,title:e.riskName,class:"no-border"},null,8,["risk-type","title"]),d("div",be,[d("div",Oe,[l(" 保费:"),d("span",ye,"￥"+C(null==(r=e.premium)?void 0:r.toLocaleString()),1)]),d("div",Ie,[d("div",Re,[d("span",ge,C(null==(n=e.amount)?void 0:n.toLocaleString()),1),je]),d("div",_e,[d("span",De,C(f(_)(f(h),e.coveragePeriod)),1),we]),d("div",xe,[d("span",Ee,C(f(_)(f(L),e.chargePeriod)),1),Te])]),2!==e.riskType?(s(),m("div",Ne,[f(O)(e.riskId)?(s(),t(E,{key:0,round:32,class:"border",onClick:r=>{o("deleteRisk",e,u.productInfo)}},{default:a((()=>[l("删除")])),_:2},1032,["onClick"])):D("",!0),f(b)?(s(),t(E,{key:1,activated:"",round:32,class:"btn-rider-risk",onClick:o=>{return r=e,c(!0),void(k.value.currentRiskRecord=r);var r}},{default:a((()=>[Ue,l(" 附加险")])),_:2},1032,["onClick"])):D("",!0),i(E,{activated:"",round:32,onClick:r=>{o("updateRisk",e,u.productInfo)}},{default:a((()=>[l("修改")])),_:2},1032,["onClick"])])):D("",!0)])])])})),128)),f(k).productRiskList.length>1?(s(),m("div",qe,[l(" 保费: "),d("span",Se,"￥"+C(null==(g=null==(y=f(k))?void 0:y.totalPremium)?void 0:g.toLocaleString()),1)])):D("",!0),f(n)?(s(),t(Le,{key:1,modelValue:f(k).checkedList,"onUpdate:modelValue":p[0]||(p[0]=e=>f(k).checkedList=e),show:f(n),disabled:f(k).disabledList,"risk-list":f(V),"collocation-list":f(I),onFinished:R,onClose:p[1]||(p[1]=e=>f(c)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):D("",!0),i(ee,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-23dd3e0e"]]);const Fe={class:"container"},$e={class:"operate-bar"},Be={class:"footer-bar"},Ae={class:"trial-result"},Ke={class:"result-num"},Qe={class:"trial-operate"},We=o({name:"CreateProposal"});var ze=e(o({...We,setup(e){const o=[{name:"保存修改"},{name:"另存为新计划书"}],[c,L]=g(),[h,V]=g(),b=r({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),O=E(),y=T(),I=oe();y.query;const R=["name","gender","birthday"].reduce(((e,o)=>(e[o]={hidden:!0},e)),{}),_=r(null),D=r({productCode:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),w=n({selectedProductCodeList:[],insuredPersonVO:{},currentProductCode:"",proposalHolder:{},proposalInsuredProductList:[],productCollection:{},productErrorMap:{},defaultData:null,productCodeInQuery:""}),ee=r(null),le=r(null),ue=j((()=>w.proposalInsuredProductList.map((e=>e.productCode)).filter((e=>Boolean(e))))),ne=j((()=>{const{productPlanInsureVOList:e}=w.productCollection[w.productCodeInQuery]||{},[{insureProductRiskVOList:o}={}]=e||[],{riskInsureLimitVO:r}=(null==o?void 0:o.find((e=>1===e.riskType)))||{};return null==r?void 0:r.sexLimit})),pe=j((()=>"-1"===ne.value?N:N.map((e=>({...e,disabled:ne.value!==e.value}))))),me=j((()=>{var e;return(null==(e=w.productCollection)?void 0:e[w.currentProductCode])||{}})),fe=j((()=>{var e,o;return(null==(o=null==(e=me.value)?void 0:e.productPlanInsureVOList)?void 0:o[0])||{}})),ke=(e={})=>{Object.assign(D.value.productPremium,e),b.value.totalPremium=Object.values(D.value.productPremium).reduce(((e,o)=>e+o),0)},ve=j((()=>Boolean(Object.values(w.productErrorMap).join("")))),Pe=j((()=>w.proposalInsuredProductList.reduce(((e,o)=>e+o.proposalProductRiskList.reduce(((e,o)=>e+(o.premium||0)),0)),0))),Le=e=>{var o;const r=w.proposalInsuredProductList.findIndex((o=>o.productCode===e.productCode));Object.assign(w.proposalHolder,e.proposalHolder),Object.assign(w.insuredPersonVO,e.insuredPersonVO);const s={...e.insuredProductInfo,nanoid:H()};if(r>-1){const e=w.proposalInsuredProductList[r],{proposalProductRiskList:o}=s;w.proposalInsuredProductList[r]={...s,proposalProductRiskList:F(o)?o.map((o=>({...e.proposalProductRiskList.find((e=>e.riskCode===o.riskCode)),...o}))):[]}}else w.proposalInsuredProductList.push(s);null==(o=_.value)||o.close()},Ce=()=>{I.setProposalInfo(b.value),I.setTrialData([]),I.setExcludeProduct(ue.value),I.setInsuredPersonVO(w.insuredPersonVO),O.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})},he=e=>{de(e).then((({code:o,data:r})=>{var s;if(o===Q&&r){(null==r?void 0:r.errorInfo)&&W(`${null==r?void 0:r.errorInfo}`);const o={};F(r.riskPremiumDetailVOList)&&(r.riskPremiumDetailVOList.forEach((e=>{o[e.riskCode]={premium:e.premium,amount:e.amount}})),Le(null==(s=_.value)?void 0:s.formatData(e,o)))}}))},Ve=e=>{e&&(w.insuredPersonVO.age=$(e).diff(new Date,"year"))},be=()=>{w.insuredPersonVO.birthday=""},Oe=e=>{se(e).then((({code:e,data:o})=>{"10000"===e&&F(o)&&Object.assign(w.productCollection,o.reduce(((e,o)=>(e[o.productCode]=o,e)),{}))})).finally((()=>{}))},ye=async(e,o=!1)=>{if(!F(e))return;const{code:r,data:s}=await ie({calcProductFactorList:e,...w.insuredPersonVO},{isCustomError:!o});"10000"===r&&s&&F(s)&&s.forEach((e=>{const{holder:r,insuredVOList:s,productCode:t}=e,{personVO:a,productPlanVOList:d}=(s||[])[0]||{},[{riskVOList:i}={}]=d||[],l={productCode:t,proposalProductRiskList:i};if(he(e),o)Object.assign(w.insuredPersonVO,a),Object.assign(w.proposalHolder,null==r?void 0:r.persionVo),w.proposalInsuredProductList=[l];else{const e=ue.value.findIndex((e=>e===t));w.proposalInsuredProductList[e]=l}}))},Ie=e=>w.proposalInsuredProductList.filter((o=>o.productCode===e)).map((({productCode:e,proposalProductRiskList:o})=>{const{productPlanInsureVOList:r}=w.productCollection[e]||{},[{insureProductRiskVOList:s}]=r||[];return{productCode:e,riskEditVOList:F(o)?o.filter((e=>1===e.riskType)).map((({riskCode:e,riskType:o,annuityDrawValueList:r,paymentPeriodValueList:t,insurancePeriodValueList:a,...d})=>{const i=s.find((o=>o.riskCode===e))||{};return{insureProductRiskVO:{...i,productRiskInsureLimitVO:{...i.productRiskInsureLimitVO,annuityDrawValueList:r,paymentPeriodValueList:t,insurancePeriodValueList:a}}}})):[]}})),Re=e=>{const o=w.proposalInsuredProductList.find((o=>o.productCode===e));return{holder:{personVO:w.proposalHolder},insuredVOList:[{personVO:w.insuredPersonVO,config:R,productPlanVOList:[{riskVOList:o.proposalProductRiskList}]}],productCode:o.productCode}},ge=(e,o)=>{const r=o;B.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?(w.proposalInsuredProductList=w.proposalInsuredProductList.filter((e=>e.productCode!==r.productCode)).map((e=>({...e,nanoid:H()}))),ke({[r.productCode]:0})):r.proposalProductRiskList=r.proposalProductRiskList.filter((o=>o.riskId!==e.riskId))}))},je=(e,o)=>{D.value.productCode=o.productCode,D.value.productInfo=o,D.value.type="edit",D.value.currentRisk=[e.riskId],w.currentProductCode=o.productCode,w.defaultData=[Re(o.productCode)],A((()=>{var e;null==(e=_.value)||e.open()}))},_e=(e,o)=>{D.value.productCode=o.productCode,D.value.productInfo=o,D.value.type="addRiderRisk",D.value.currentRisk=e,L(!0)};U((()=>{}));const De=e=>!!F(e)&&e.every((e=>Boolean(e))),we=()=>{var e,o;Promise.all([null==(e=ee.value)?void 0:e.validate(),null==(o=le.value)?void 0:o.validate()]).then((()=>{const{proposalHolder:e}=w;te({proposalHolder:e,proposalInsuredList:[{...w.insuredPersonVO,proposalInsuredProductList:w.proposalInsuredProductList}],proposalName:w.insuredPersonVO.proposalName,totalPremium:Pe.value,relationUserType:2}).then((e=>{const{code:o,data:r}=e||{};"10000"===o&&(I.$reset(),I.proposalId=r,O.push({path:"/compositionProposal",query:{id:r}}))}))}))},xe=()=>{we()},Ee=(e,o)=>{o&&(b.value.id=null),we()};return p((()=>["gender","birthday"].map((e=>w.insuredPersonVO[e]))),((e,o)=>{De(e)&&De(o)&&e.join(",")!==o.join(",")&&(console.log("被保人条件变动"),ue.value.forEach((e=>(async e=>{try{const{code:o,data:r,message:s}=await ae({calcProductFactorList:Ie(e),...w.insuredPersonVO},{isCustomError:!0});"10000"===o&&F(r)?(w.proposalInsuredProductList.forEach((({productCode:e,proposalProductRiskList:o})=>{const{productRiskDyInsureFactorVOList:s}=r[0]||r.find((o=>o.productCode===e))||{};o.forEach((e=>{const o=s.find((o=>o.riskCode===e.riskCode));Object.assign(e,{...e,...o})}))})),he(Re(e)),w.productErrorMap[e]=""):w.productErrorMap[e]=s}catch(o){console.log("Error",o)}})(e))))}),{deep:!0}),p((()=>w.selectedProductCodeList),Z((e=>{if(F(e)){console.log("选择的产品变动了",e);const o=e.map((e=>({productCode:e,proposalProductRiskList:[]})));w.proposalInsuredProductList.push(...o),ye(e.map((e=>({productCode:e}))));const r=Object.keys(w.productCollection),s=null==e?void 0:e.filter((e=>!r.includes(e)));F(s)&&Oe(null==s?void 0:s.map((e=>({productCode:e}))))}})),{deep:!0}),q((()=>{const{query:{productCode:e}}=T(),{selectedProduct:o,insuredPersonVO:r}=I.$state;if(w.productCodeInQuery=e,w.proposalInsuredProductList=[],r&&Object.keys(r).length||(w.insuredPersonVO={}),w.productErrorMap={},e){const o=[{productCode:e}];Oe(o),ye(o,!0)}w.selectedProductCodeList=F(o)?o:[]})),S((()=>{})),(e,r)=>{const n=X,c=K,p=x,L=u,b=z,O=M("ProPageWrap");return s(),t(O,{class:"page-create-wrapper"},{default:a((()=>{var e;return[d("div",Fe,[i(n,{ref_key:"formRef",ref:ee,class:"mb20",model:f(w).insuredPersonVO},{default:a((()=>[i(f(re),{modelValue:f(w).insuredPersonVO.proposalName,"onUpdate:modelValue":r[0]||(r[0]=e=>f(w).insuredPersonVO.proposalName=e),label:"计划书名称",name:"proposalName",maxlength:20,required:""},null,8,["modelValue"])])),_:1},8,["model"]),i(f(G),{ref_key:"insuredFormRef",ref:le,title:"被保人信息",model:f(w).insuredPersonVO},{default:a((()=>[i(f(re),{modelValue:f(w).insuredPersonVO.name,"onUpdate:modelValue":r[1]||(r[1]=e=>f(w).insuredPersonVO.name=e),label:"姓名",name:"name",maxlength:20,required:""},null,8,["modelValue"]),i(f(re),{modelValue:f(w).insuredPersonVO.age,"onUpdate:modelValue":r[3]||(r[3]=e=>f(w).insuredPersonVO.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",onChange:be},{extra:a((()=>[i(f(J),{modelValue:f(w).insuredPersonVO.birthday,"onUpdate:modelValue":r[2]||(r[2]=e=>f(w).insuredPersonVO.birthday=e),class:"birthday-field-wrap",label:"出生日期",name:"birthday",required:"",onChange:Ve},null,8,["modelValue"])])),_:1},8,["modelValue"]),i(f(Y),{modelValue:f(w).insuredPersonVO.gender,"onUpdate:modelValue":r[4]||(r[4]=e=>f(w).insuredPersonVO.gender=e),label:"性别",name:"gender",columns:f(pe),required:""},null,8,["modelValue","columns"])])),_:1},8,["model"]),(s(!0),m(v,null,P(f(w).proposalInsuredProductList,((e,o)=>(s(),t(c,{key:`${e.nanoid}_${o}_${e.productCode}`,"show-line":!1},{default:a((()=>{var o;return[i(He,{"product-risk-list":e.proposalProductRiskList,"product-info":e,"product-num":(null==(o=f(w).proposalInsuredProductList)?void 0:o.length)-1,"product-data":f(D).productCollection[e.productCode],"pick-product-premium":ke,"error-msg":f(w).productErrorMap[e.productCode],onAddRiderRisk:_e,onUpdateRisk:je,onDeleteRisk:ge},null,8,["product-risk-list","product-info","product-num","product-data","error-msg"])]})),_:2},1024)))),128)),d("div",$e,[i(p,{activated:"",round:34,onClick:Ce},{default:a((()=>[l("添加主险")])),_:1})])]),d("div",Be,[d("span",Ae,[l("总保费"),d("span",Ke,"￥"+C(null==(e=f(Pe))?void 0:e.toLocaleString()),1)]),d("div",Qe,[i(L,{disabled:f(ve),type:"primary",onClick:xe},{default:a((()=>[l("保存并预览")])),_:1},8,["disabled"])])]),i(b,{show:f(h),"onUpdate:show":r[5]||(r[5]=e=>k(h)?h.value=e:null),actions:o,"cancel-text":"取消","close-on-click-action":"",onCancel:r[6]||(r[6]=e=>f(V)(!1)),onSelect:Ee},null,8,["show"]),i(ce,{ref_key:"trialPopupRef",ref:_,"data-source":f(fe),"product-code":f(w).currentProductCode,"default-data":f(w).defaultData,onFinish:Le},null,8,["data-source","product-code","default-data"])]})),_:1})}}}),[["__scopeId","data-v-9ecc90ac"]]);export{ze as default};
