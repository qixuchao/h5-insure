import{G as e,d as o,r,c as s,e as t,w as d,f as a,i,j as l,B as u,z as n,bI as c,R as p,A as m,g as f,a2 as k,U as v,V as P,bv as L,E as C,bJ as b,aC as h,bK as V,bL as I,bB as O,al as y,am as R,ab as j,L as _,bM as g,h as D,bN as w,b7 as E,a as T,u as x,bO as N,o as U,bq as q,br as S,b as M,aB as H,aA as F,D as $,$ as B,bi as A,aw as K,T as Q}from"./index-b01c8bff.js";import{A as W}from"./index-34b9ba96.js";import{P as z,a as G,b as J,c as Y}from"./index-df8a82ed.js";import{d as X}from"./debounce-eed12388.js";import{P as Z,u as ee}from"./ProductTips-4badfa65.js";import{_ as oe}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-ca8700db.js";/* empty css              */import"./bankCard-108ef36d.js";import{q as re,a as se}from"./createProposal-fa2c9f0a.js";import{q as te,p as de,a as ae}from"./trial-934ae38b.js";import{T as ie}from"./index-bc25bde6.js";import{u as le}from"./useDicData-b7ce52a2.js";import"./pdfh5-008ca364.js";import"./index-8672f433.js";import"./isObjectLike-a9798079.js";import"./_initCloneObject-0663309f.js";import"./phoneVerify-f547fd67.js";import"./index-14d38612.js";import"./cloneDeep-1de8e9b0.js";import"./infoCollection-e8fb48c1.js";import"./index-2f03775e.js";import"./utils-1503121c.js";import"./index-566b3590.js";import"./trial-3ea8b872.js";import"./utils-f78a0b7e.js";import"./index-7186f4e6.js";import"./empty-c926d8ec.js";import"./box-title-d160de29.js";import"./index-920f536b.js";import"./echarts-ac920fed.js";import"./Table-b2a271e1.js";import"./useOrder-6f60f8d6.js";import"./utils-5249f56f.js";import"./constants-7afb7c3d.js";import"./nextStep-665e6360.js";import"./core-03441279.js";import"./constant-8927d485.js";const ue={class:"trial-button"};var ne=e(o({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:o,emit:n}){const c=e,p=r(null),m=(e,o)=>{var r;console.log("trialData",e);const{holder:s,insuredVOList:t,productCode:d}=e||{},{personVO:a,productPlanVOList:i}=(null==t?void 0:t[0])||{},l=((null==(r=null==i?void 0:i[0])?void 0:r.riskVOList)||[]).map((e=>{var r,s;return{...e,premium:null==(r=o[e.riskCode])?void 0:r.premium,amount:null==(s=o[e.riskCode])?void 0:s.amount}}));return{productCode:d,proposalHolder:null==s?void 0:s.personVO,insuredPersonVO:a,insuredProductInfo:{productCode:d,productName:c.productName,occupationCodeList:a.occupationCodeList,proposalProductRiskList:l}}};return o({...["open","close"].reduce(((e,o)=>(e[o]=(...e)=>{var r;null==(r=p.value)||r[o](...e)},e)),{}),formatData:m}),(o,r)=>{const c=u;return s(),t(ie,{ref_key:"trialRef",ref:p,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{default:d((({trialData:e,riskPremium:o})=>[a("div",ue,[i(c,{type:"primary",onClick:r=>((...e)=>{n("finish",m(e[0],e[1]))})(e,o)},{default:d((()=>[l("确定")])),_:2},1032,["onClick"])])])),_:1},8,["product-info"])}}}),[["__scopeId","data-v-0e8aad9c"]]);const ce={class:"com-risk-list-wrapper"},pe=(e=>(y("data-v-7d3c3028"),e=e(),R(),e))((()=>a("div",{class:"popup-title"},"选择附加险",-1))),me={class:"risk-list"},fe={class:"cell-title"},ke={class:"title"},ve={class:"footer-button"};var Pe=e(o({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:o}){const y=e,R=r([]),j=r([]),_=r([...y.disabled]),g=n({show:y.show,currentChecked:[...y.modelValue]}),D=e=>{var o,r,s;if(_.value.includes(e))return;((e,o)=>{if(!y.collocationList.length)return o?void(g.currentChecked=[]):void g.currentChecked.push(e);let r=g.currentChecked,s=_.value;o?(y.collocationList.forEach((o=>{e===o.riskId&&(2===o.collocationType?r=r.filter((r=>r!==o.collocationRiskId||r!==e)):3===o.collocationType?(r=r.filter((o=>o!==e)),s=s.filter((e=>e!==o.collocationRiskId))):r=r.filter((o=>o!==e)))})),g.currentChecked=r,_.value=s):(y.collocationList.forEach((t=>{e===t.riskId&&(o||(2===t.collocationType?r.push(t.collocationRiskId):3===t.collocationType&&s.push(t.collocationRiskId),r.push(e)))})),g.currentChecked.push(...r),_.value=s)})(e,g.currentChecked.includes(e)),null==(s=null==(r=null==(o=null==R?void 0:R.value)?void 0:o[e])?void 0:r.toggle)||s.call(r)},w=()=>{o("close")},E=()=>{const e=y.riskList.filter((e=>g.currentChecked.includes(e.id)));o("update:modelValue",[...new Set(j.value)]),o("finished",e,_.value),o("close")};return c((()=>{R.value=[]})),p((()=>g.currentChecked),(e=>{j.value=e}),{deep:!0,immediate:!0}),p((()=>y.modelValue),(e=>{j.value=e||[],_.value.push(...e||[])}),{deep:!0,immediate:!0}),(o,r)=>{const n=b,c=h,p=V,y=I,T=u,x=O;return s(),m("div",ce,[i(x,{show:f(g).show,"onUpdate:show":r[1]||(r[1]=e=>f(g).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:w},{default:d((()=>[pe,a("div",me,[i(y,{modelValue:f(j),"onUpdate:modelValue":r[0]||(r[0]=e=>k(j)?j.value=e:null)},{default:d((()=>[i(p,{inset:""},{default:d((()=>[(s(!0),m(v,null,P(e.riskList,(e=>(s(),t(c,{key:e.id,title:e.riskName,disabled:f(_).includes(e.id),onClick:o=>D(e.id)},{"right-icon":d((()=>[i(n,{ref_for:!0,ref:o=>f(R)[e.id]=o,shape:"square",disabled:f(_).includes(e.id),name:e.id,onClick:L((o=>D(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:d((()=>[a("div",fe,[a("div",ke,C(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),a("div",ve,[i(T,{type:"primary",disabled:!f(g).currentChecked.length,block:"",onClick:E},{default:d((()=>[l("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const Le=e=>(y("data-v-23dd3e0e"),e=e(),R(),e),Ce={class:"com-product-list-wrapper"},be={class:"risk-item-wrapper"},he={class:"content"},Ve={class:"risk-premium"},Ie={class:"premium"},Oe={class:"risk-factor"},ye={class:"factor"},Re={class:"factor-value"},je=Le((()=>a("span",{class:"factor-name"}," 保额(元) ",-1))),_e={class:"factor"},ge={class:"factor-value"},De=Le((()=>a("span",{class:"factor-name"}," 保障期间 ",-1))),we={class:"factor"},Ee={class:"factor-value"},Te=Le((()=>a("span",{class:"factor-name"}," 缴费期间 ",-1))),xe={key:0,class:"operate-bar"},Ne=Le((()=>a("span",{class:"btn-plus"},"+",-1))),Ue={key:0,class:"premium-total"},qe={class:"premium"},Se=o({name:"ProductList"});var Me=e(o({...Se,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0},errorMsg:{default:""}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:o}){const u=e,[n,c]=j(),k=r({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),L=le("RISK_PAYMENT_PERIOD"),b=le("RISK_INSURANCE_PERIOD"),h=_((()=>{var e,o;return(null==(o=null==(e=u.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]})),V=_((()=>{var e,o;const r=u.productRiskList.map((e=>e.riskId)),s=((null==(o=null==(e=u.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList)||[]).filter((e=>r.includes(e.id)&&1===e.collocationType));return h.value.length-s.length})),I=_((()=>e=>{var o,r;const s=(null==(r=null==(o=u.productData)?void 0:o.productRiskVoList)?void 0:r[0].riskDetailVOList.find((o=>o.id!==e)))||{};let t=!1;return t=!!u.productNum||2===s.riskType&&1===s.collocationType,t})),O=_((()=>{var e,o;return(null==(o=null==(e=u.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),y=_((()=>O.value.collocationVOList||[])),R=(e,r)=>{const s=e.map((e=>e.id)).filter((e=>!k.value.disabledList.includes(e)));o("addRiderRisk",s,u.productInfo)};return p((()=>u.productInfo),(e=>{var o;let r=0;(e.proposalProductRiskList||[]).forEach((e=>{r+=e.premium})),null==(o=u.pickProductPremium)||o.call(u,{[`${e.productCode}`]:r}),k.value.totalPremium=r}),{deep:!0,immediate:!0}),p((()=>u.productRiskList),(e=>{const o=[],r=[],s=[];(e||[]).forEach((e=>{1===e.riskType?o.unshift(e):(r.push(e.riskId),s.push(e.riskId),o.push(e))})),k.value.disabledList=r,k.value.checkedList=s,k.value.productRiskList=o}),{deep:!0,immediate:!0}),(r,p)=>{var O,j;const _=w,T=E;return s(),m("div",Ce,[(s(!0),m(v,null,P(f(k).productRiskList,(e=>{var r,n;return s(),m("div",{key:e.riskId},[a("div",be,[i(_,{"risk-type":e.riskType,title:e.riskName,class:"no-border"},null,8,["risk-type","title"]),a("div",he,[a("div",Ve,[l(" 保费:"),a("span",Ie,"￥"+C(null==(r=e.premium)?void 0:r.toLocaleString()),1)]),a("div",Oe,[a("div",ye,[a("span",Re,C(null==(n=e.amount)?void 0:n.toLocaleString()),1),je]),a("div",_e,[a("span",ge,C(f(g)(f(b),e.coveragePeriod)),1),De]),a("div",we,[a("span",Ee,C(f(g)(f(L),e.chargePeriod)),1),Te])]),2!==e.riskType?(s(),m("div",xe,[f(I)(e.riskId)?(s(),t(T,{key:0,round:32,class:"border",onClick:r=>{o("deleteRisk",e,u.productInfo)}},{default:d((()=>[l("删除")])),_:2},1032,["onClick"])):D("",!0),f(V)?(s(),t(T,{key:1,activated:"",round:32,class:"btn-rider-risk",onClick:o=>{return r=e,c(!0),void(k.value.currentRiskRecord=r);var r}},{default:d((()=>[Ne,l(" 附加险")])),_:2},1032,["onClick"])):D("",!0),i(T,{activated:"",round:32,onClick:r=>{o("updateRisk",e,u.productInfo)}},{default:d((()=>[l("修改")])),_:2},1032,["onClick"])])):D("",!0)])])])})),128)),f(k).productRiskList.length>1?(s(),m("div",Ue,[l(" 保费: "),a("span",qe,"￥"+C(null==(j=null==(O=f(k))?void 0:O.totalPremium)?void 0:j.toLocaleString()),1)])):D("",!0),f(n)?(s(),t(Pe,{key:1,modelValue:f(k).checkedList,"onUpdate:modelValue":p[0]||(p[0]=e=>f(k).checkedList=e),show:f(n),disabled:f(k).disabledList,"risk-list":f(h),"collocation-list":f(y),onFinished:R,onClose:p[1]||(p[1]=e=>f(c)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):D("",!0),i(Z,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-23dd3e0e"]]);const He={class:"container"},Fe={class:"operate-bar"},$e={class:"footer-bar"},Be={class:"trial-result"},Ae={class:"result-num"},Ke={class:"trial-operate"},Qe=o({name:"CreateProposal"});var We=e(o({...Qe,setup(e){const o=[{name:"保存修改"},{name:"另存为新计划书"}],[c,L]=j(),[b,h]=j(),V=r({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),I=T(),O=x(),y=ee();O.query;const R=["name","gender","birthday"].reduce(((e,o)=>(e[o]={hidden:!0},e)),{}),g=r(null),D=r({productCode:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),w=n({selectedProductCodeList:[],insuredPersonVO:{},currentProductCode:"",proposalHolder:{},proposalInsuredProductList:[],productCollection:{},productErrorMap:{},defaultData:null,productCodeInQuery:""}),Z=r(null),ie=r(null),le=_((()=>w.proposalInsuredProductList.map((e=>e.productCode)).filter((e=>Boolean(e))))),ue=_((()=>{const{productPlanInsureVOList:e}=w.productCollection[w.productCodeInQuery]||{},[{insureProductRiskVOList:o}={}]=e||[],{riskInsureLimitVO:r}=(null==o?void 0:o.find((e=>1===e.riskType)))||{};return null==r?void 0:r.sexLimit})),ce=_((()=>"-1"===ue.value?N:N.map((e=>({...e,disabled:ue.value!==e.value}))))),pe=_((()=>{var e;return(null==(e=w.productCollection)?void 0:e[w.currentProductCode])||{}})),me=_((()=>{var e,o;return(null==(o=null==(e=pe.value)?void 0:e.productPlanInsureVOList)?void 0:o[0])||{}})),fe=(e={})=>{Object.assign(D.value.productPremium,e),V.value.totalPremium=Object.values(D.value.productPremium).reduce(((e,o)=>e+o),0)},ke=_((()=>Boolean(Object.values(w.productErrorMap).join("")))),ve=_((()=>w.proposalInsuredProductList.reduce(((e,o)=>e+o.proposalProductRiskList.reduce(((e,o)=>e+(o.premium||0)),0)),0))),Pe=e=>{var o;const r=w.proposalInsuredProductList.findIndex((o=>o.productCode===e.productCode));Object.assign(w.proposalHolder,e.proposalHolder),Object.assign(w.insuredPersonVO,e.insuredPersonVO);const s={...e.insuredProductInfo,nanoid:H()};if(r>-1){const e=w.proposalInsuredProductList[r],{proposalProductRiskList:o}=s;w.proposalInsuredProductList[r]={...s,proposalProductRiskList:F(o)?o.map((o=>({...e.proposalProductRiskList.find((e=>e.riskCode===o.riskCode)),...o}))):[]}}else w.proposalInsuredProductList.push(s);null==(o=g.value)||o.close()},Le=()=>{y.setProposalInfo(V.value),y.setTrialData([]),y.setExcludeProduct(le.value),y.setInsuredPersonVO(w.insuredPersonVO),I.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})},Ce=e=>{de(e).then((({code:o,data:r})=>{var s;if(o===K&&r){(null==r?void 0:r.errorInfo)&&Q(`${null==r?void 0:r.errorInfo}`);const o={};F(r.riskPremiumDetailVOList)&&(r.riskPremiumDetailVOList.forEach((e=>{o[e.riskCode]={premium:e.premium,amount:e.amount}})),Pe(null==(s=g.value)?void 0:s.formatData(e,o)))}}))},be=e=>{re(e).then((({code:e,data:o})=>{"10000"===e&&F(o)&&Object.assign(w.productCollection,o.reduce(((e,o)=>(e[o.productCode]=o,e)),{}))})).finally((()=>{}))},he=async(e,o=!1)=>{if(!F(e))return;const{code:r,data:s}=await ae({calcProductFactorList:e,...w.insuredPersonVO},{isCustomError:!o});"10000"===r&&s&&F(s)&&s.forEach((e=>{const{holder:r,insuredVOList:s,productCode:t}=e,{personVO:d,productPlanVOList:a}=(s||[])[0]||{},[{riskVOList:i}={}]=a||[],l={productCode:t,proposalProductRiskList:i};if(Ce(e),o)Object.assign(w.insuredPersonVO,d),Object.assign(w.proposalHolder,null==r?void 0:r.persionVo),w.proposalInsuredProductList=[l];else{const e=le.value.findIndex((e=>e===t));w.proposalInsuredProductList[e]=l}}))},Ve=e=>w.proposalInsuredProductList.filter((o=>o.productCode===e)).map((({productCode:e,proposalProductRiskList:o})=>{const{productPlanInsureVOList:r}=w.productCollection[e]||{},[{insureProductRiskVOList:s}]=r||[];return{productCode:e,riskEditVOList:F(o)?o.filter((e=>1===e.riskType)).map((({riskCode:e,riskType:o,annuityDrawValueList:r,paymentPeriodValueList:t,insurancePeriodValueList:d,...a})=>{const i=s.find((o=>o.riskCode===e))||{};return{insureProductRiskVO:{...i,productRiskInsureLimitVO:{...i.productRiskInsureLimitVO,annuityDrawValueList:r,paymentPeriodValueList:t,insurancePeriodValueList:d}}}})):[]}})),Ie=e=>{const o=w.proposalInsuredProductList.find((o=>o.productCode===e));return{holder:{personVO:w.proposalHolder},insuredVOList:[{personVO:w.insuredPersonVO,config:R,productPlanVOList:[{riskVOList:o.proposalProductRiskList}]}],productCode:o.productCode}},Oe=(e,o)=>{const r=o;$.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?(w.proposalInsuredProductList=w.proposalInsuredProductList.filter((e=>e.productCode!==r.productCode)).map((e=>({...e,nanoid:H()}))),fe({[r.productCode]:0})):r.proposalProductRiskList=r.proposalProductRiskList.filter((o=>o.riskId!==e.riskId))}))},ye=(e,o)=>{D.value.productCode=o.productCode,D.value.productInfo=o,D.value.type="edit",D.value.currentRisk=[e.riskId],w.currentProductCode=o.productCode,w.defaultData=[Ie(o.productCode)],B((()=>{var e;null==(e=g.value)||e.open()}))},Re=(e,o)=>{D.value.productCode=o.productCode,D.value.productInfo=o,D.value.type="addRiderRisk",D.value.currentRisk=e,L(!0)};U((()=>{}));const je=e=>!!F(e)&&e.every((e=>Boolean(e))),_e=()=>{var e,o;Promise.all([null==(e=Z.value)?void 0:e.validate(),null==(o=ie.value)?void 0:o.validate()]).then((()=>{const{proposalHolder:e}=w;se({proposalHolder:e,proposalInsuredList:[{...w.insuredPersonVO,proposalInsuredProductList:w.proposalInsuredProductList}],proposalName:w.insuredPersonVO.proposalName,totalPremium:ve.value,relationUserType:2}).then((e=>{const{code:o,data:r}=e||{};"10000"===o&&(y.$reset(),y.proposalId=r,I.push({path:"/compositionProposal",query:{id:r}}))}))}))},ge=()=>{_e()},De=(e,o)=>{o&&(V.value.id=null),_e()};return p((()=>["gender","birthday"].map((e=>w.insuredPersonVO[e]))),((e,o)=>{je(e)&&je(o)&&e.join(",")!==o.join(",")&&(console.log("被保人条件变动"),le.value.forEach((e=>(async e=>{try{const{code:o,data:r,message:s}=await te({calcProductFactorList:Ve(e),...w.insuredPersonVO},{isCustomError:!0});"10000"===o&&F(r)?(w.proposalInsuredProductList.forEach((({productCode:e,proposalProductRiskList:o})=>{const{productRiskDyInsureFactorVOList:s}=r[0]||r.find((o=>o.productCode===e))||{};o.forEach((e=>{const o=s.find((o=>o.riskCode===e.riskCode));Object.assign(e,{...e,...o})}))})),Ce(Ie(e)),w.productErrorMap[e]=""):w.productErrorMap[e]=s}catch(o){console.log("Error",o)}})(e))))}),{deep:!0}),p((()=>w.selectedProductCodeList),X((e=>{if(F(e)){console.log("选择的产品变动了",e);const o=e.map((e=>({productCode:e,proposalProductRiskList:[]})));w.proposalInsuredProductList.push(...o),he(e.map((e=>({productCode:e}))));const r=Object.keys(w.productCollection),s=null==e?void 0:e.filter((e=>!r.includes(e)));F(s)&&be(null==s?void 0:s.map((e=>({productCode:e}))))}})),{deep:!0}),q((()=>{const{query:{productCode:e}}=x(),{selectedProduct:o,insuredPersonVO:r}=y.$state;if(w.productCodeInQuery=e,w.proposalInsuredProductList=[],r&&Object.keys(r).length||(w.insuredPersonVO={}),w.productErrorMap={},e){const o=[{productCode:e}];be(o),he(o,!0)}w.selectedProductCodeList=F(o)?o:[]})),S((()=>{})),(e,r)=>{const n=Y,c=A,p=E,L=u,V=W,I=M("ProPageWrap");return s(),t(I,{class:"page-create-wrapper"},{default:d((()=>{var e;return[a("div",He,[i(n,{ref_key:"formRef",ref:Z,class:"mb20",model:f(w).insuredPersonVO},{default:d((()=>[i(f(oe),{modelValue:f(w).insuredPersonVO.proposalName,"onUpdate:modelValue":r[0]||(r[0]=e=>f(w).insuredPersonVO.proposalName=e),label:"计划书名称",name:"proposalName",maxlength:20,required:""},null,8,["modelValue"])])),_:1},8,["model"]),i(f(z),{ref_key:"insuredFormRef",ref:ie,title:"被保人信息",model:f(w).insuredPersonVO},{default:d((()=>[i(f(oe),{modelValue:f(w).insuredPersonVO.name,"onUpdate:modelValue":r[1]||(r[1]=e=>f(w).insuredPersonVO.name=e),label:"姓名",name:"name",maxlength:20,required:""},null,8,["modelValue"]),i(f(G),{modelValue:f(w).insuredPersonVO.birthday,"onUpdate:modelValue":r[2]||(r[2]=e=>f(w).insuredPersonVO.birthday=e),label:"出生日期",name:"birthday",required:""},null,8,["modelValue"]),i(f(J),{modelValue:f(w).insuredPersonVO.gender,"onUpdate:modelValue":r[3]||(r[3]=e=>f(w).insuredPersonVO.gender=e),label:"性别",name:"gender",columns:f(ce),required:""},null,8,["modelValue","columns"])])),_:1},8,["model"]),(s(!0),m(v,null,P(f(w).proposalInsuredProductList,((e,o)=>(s(),t(c,{key:`${e.nanoid}_${o}_${e.productCode}`,"show-line":!1},{default:d((()=>{var o;return[i(Me,{"product-risk-list":e.proposalProductRiskList,"product-info":e,"product-num":(null==(o=f(w).proposalInsuredProductList)?void 0:o.length)-1,"product-data":f(D).productCollection[e.productCode],"pick-product-premium":fe,"error-msg":f(w).productErrorMap[e.productCode],onAddRiderRisk:Re,onUpdateRisk:ye,onDeleteRisk:Oe},null,8,["product-risk-list","product-info","product-num","product-data","error-msg"])]})),_:2},1024)))),128)),a("div",Fe,[i(p,{activated:"",round:34,onClick:Le},{default:d((()=>[l("添加主险")])),_:1})])]),a("div",$e,[a("span",Be,[l("总保费"),a("span",Ae,"￥"+C(null==(e=f(ve))?void 0:e.toLocaleString()),1)]),a("div",Ke,[i(L,{disabled:f(ke),type:"primary",onClick:ge},{default:d((()=>[l("保存并预览")])),_:1},8,["disabled"])])]),i(V,{show:f(b),"onUpdate:show":r[4]||(r[4]=e=>k(b)?b.value=e:null),actions:o,"cancel-text":"取消","close-on-click-action":"",onCancel:r[5]||(r[5]=e=>f(h)(!1)),onSelect:De},null,8,["show"]),i(ne,{ref_key:"trialPopupRef",ref:g,"data-source":f(me),"product-code":f(w).currentProductCode,"default-data":f(w).defaultData,onFinish:Pe},null,8,["data-source","product-code","default-data"])]})),_:1})}}}),[["__scopeId","data-v-bde90d8c"]]);export{We as default};
