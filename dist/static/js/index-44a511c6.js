import{G as e,d as o,r as t,b8 as r,aU as i,c as s,e as a,w as d,f as l,i as u,g as n,j as c,aR as p,B as m,z as f,bN as k,R as v,A as L,a3 as h,U as C,V as b,bC as P,E as V,bO as y,aV as O,bP as g,bQ as j,bG as _,am as I,an as R,ad as x,L as w,h as D,bR as T,bd as E,a as N,u as U,bS as S,bx as F,o as q,b as $,y as A,D as M,aS as B,bo as G,av as W,T as z}from"./index-56515d23.js";import{A as Q}from"./index-2a7bfb5c.js";import{P as H,a as J,b as K,i as X,c as Y}from"./index-13ab081c.js";import{d as Z}from"./debounce-eed12388.js";import{P as ee,u as oe}from"./ProductTips-66cd584d.js";import{_ as te}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-757ac307.js";/* empty css              */import"./useDicData-c3d959ec.js";import"./bankCard-3dd315e3.js";import{a as re,b as ie,c as se}from"./createProposal-3e3284c3.js";import{c as ae,p as de,q as le}from"./trial-4bfee134.js";import{_ as ue}from"./index-eb461f1b.js";import{a as ne,b as ce}from"./format-b5e9d8b9.js";import"./pdfh5-008ca364.js";import"./_initCloneObject-da8458a4.js";import"./isObjectLike-a9798079.js";import"./_getTag-ef97f191.js";import"./index-2217c36f.js";import"./phoneVerify-a749fb1a.js";import"./index-73fdd621.js";import"./infoCollection-a3ca551a.js";import"./cloneDeep-0762f693.js";import"./TrialButton-f95f6ce7.js";import"./index-47c2a89f.js";import"./useOrder-d828467a.js";import"./utils-73d9b4e0.js";import"./trial-631bc8f4.js";import"./constants-7afb7c3d.js";import"./nextStep-121317d8.js";import"./core-0341bb06.js";import"./constant-8927d485.js";import"./index-4ee7d1ca.js";import"./index-a2110290.js";import"./index-1c56b8fc.js";import"./empty-c926d8ec.js";import"./box-title-62f84c80.js";import"./index-53dfb7fa.js";import"./echarts-ac920fed.js";import"./Table-fb4848b4.js";const pe={class:"trial-button"};var me=e(o({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:o,emit:f}){const k=e,v=t(null);r(i,{insuredFactorCodes:["hasSocialInsurance","occupationCodeList"],holderFactorCodes:["birthday","gender","hasSocialInsurance","occupationCodeList"]});const L=(e,o)=>{const{holder:t,insuredList:r,productCode:i}=e||{},{productList:s,...a}=(null==r?void 0:r[0])||{},{riskList:d,...l}=(null==s?void 0:s[0])||{},u=p(null==o?void 0:o.riskPremiumDetailVOList)?null==o?void 0:o.riskPremiumDetailVOList.reduce(((e,o)=>(e[o.riskCode]={initialPremium:o.initialPremium,initialAmount:o.initialAmount},e)),{}):{},n=(d||[]).map((e=>{var o,t;return{...e,initialPremium:null==(o=null==u?void 0:u[e.riskCode])?void 0:o.initialPremium,initialAmount:null==(t=null==u?void 0:u[e.riskCode])?void 0:t.initialAmount}}));return{productCode:i,holder:t,insuredPersonVO:a,insuredProductInfo:{productCode:i,...l,productName:k.productName,occupationCodeList:null==a?void 0:a.occupationCodeList,riskList:n}}};return o({...["open","close"].reduce(((e,o)=>(e[o]=(...e)=>{var t;null==(t=v.value)||t[o](...e)},e)),{}),formatData:L}),(o,t)=>{const r=m;return s(),a(ue,{ref_key:"trialRef",ref:v,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{trialBtn:d((({trialData:e,riskPremium:o})=>[l("div",pe,[u(r,{disabled:!n(v).getTrialSuccessFlag(),type:"primary",onClick:t=>((...e)=>{f("finish",L(e[0],e[1]))})(e,o)},{default:d((()=>[c("确定")])),_:2},1032,["disabled","onClick"])])])),_:1},8,["product-info"])}}}),[["__scopeId","data-v-e3241ce4"]]);const fe={class:"com-risk-list-wrapper"},ke=(e=>(I("data-v-7d3c3028"),e=e(),R(),e))((()=>l("div",{class:"popup-title"},"选择附加险",-1))),ve={class:"risk-list"},Le={class:"cell-title"},he={class:"title"},Ce={class:"footer-button"};var be=e(o({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:o}){const r=e,i=t([]),p=t([]),I=t([...r.disabled]),R=f({show:r.show,currentChecked:[...r.modelValue]}),x=e=>{var o,t,s;if(I.value.includes(e))return;((e,o)=>{if(!r.collocationList.length)return o?void(R.currentChecked=[]):void R.currentChecked.push(e);let t=R.currentChecked,i=I.value;o?(r.collocationList.forEach((o=>{e===o.riskId&&(2===o.collocationType?t=t.filter((t=>t!==o.collocationRiskId||t!==e)):3===o.collocationType?(t=t.filter((o=>o!==e)),i=i.filter((e=>e!==o.collocationRiskId))):t=t.filter((o=>o!==e)))})),R.currentChecked=t,I.value=i):(r.collocationList.forEach((r=>{e===r.riskId&&(o||(2===r.collocationType?t.push(r.collocationRiskId):3===r.collocationType&&i.push(r.collocationRiskId),t.push(e)))})),R.currentChecked.push(...t),I.value=i)})(e,R.currentChecked.includes(e)),null==(s=null==(t=null==(o=null==i?void 0:i.value)?void 0:o[e])?void 0:t.toggle)||s.call(t)},w=()=>{o("close")},D=()=>{const e=r.riskList.filter((e=>R.currentChecked.includes(e.id)));o("update:modelValue",[...new Set(p.value)]),o("finished",e,I.value),o("close")};return k((()=>{i.value=[]})),v((()=>R.currentChecked),(e=>{p.value=e}),{deep:!0,immediate:!0}),v((()=>r.modelValue),(e=>{p.value=e||[],I.value.push(...e||[])}),{deep:!0,immediate:!0}),(o,t)=>{const r=y,f=O,k=g,v=j,T=m,E=_;return s(),L("div",fe,[u(E,{show:n(R).show,"onUpdate:show":t[1]||(t[1]=e=>n(R).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:w},{default:d((()=>[ke,l("div",ve,[u(v,{modelValue:n(p),"onUpdate:modelValue":t[0]||(t[0]=e=>h(p)?p.value=e:null)},{default:d((()=>[u(k,{inset:""},{default:d((()=>[(s(!0),L(C,null,b(e.riskList,(e=>(s(),a(f,{key:e.id,title:e.riskName,disabled:n(I).includes(e.id),onClick:o=>x(e.id)},{"right-icon":d((()=>[u(r,{ref_for:!0,ref:o=>n(i)[e.id]=o,shape:"square",disabled:n(I).includes(e.id),name:e.id,onClick:P((o=>x(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:d((()=>[l("div",Le,[l("div",he,V(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),l("div",Ce,[u(T,{type:"primary",disabled:!n(R).currentChecked.length,block:"",onClick:D},{default:d((()=>[c("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const Pe=e=>(I("data-v-3a61def2"),e=e(),R(),e),Ve={class:"com-product-list-wrapper"},ye={class:"risk-item-wrapper"},Oe={class:"content"},ge={class:"risk-factor"},je={class:"factor"},_e={class:"factor-value"},Ie=Pe((()=>l("span",{class:"factor-name"}," 保额(元) ",-1))),Re={class:"factor"},xe={class:"factor-value"},we=Pe((()=>l("span",{class:"factor-name"}," 保障期间 ",-1))),De={class:"factor"},Te={class:"factor-value"},Ee=Pe((()=>l("span",{class:"factor-name"}," 交费期间 ",-1))),Ne={class:"operate-bar-wrap"},Ue={class:"risk-premium"},Se={class:"premium"},Fe={key:0,class:"operate-bar"},qe=o({name:"ProductList"});var $e=e(o({...qe,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0},errorMsg:{default:""},productIndex:null},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:o}){const r=e,[i,p]=x(),m=t({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),f=w((()=>{var e,o;return(null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]}));w((()=>{var e,o;const t=r.productRiskList.map((e=>e.riskId)),i=((null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList)||[]).filter((e=>t.includes(e.id)&&1===e.collocationType));return f.value.length-i.length}));const k=w((()=>e=>{var o,t;const i=(null==(t=null==(o=r.productData)?void 0:o.productRiskVoList)?void 0:t[0].riskDetailVOList.find((o=>o.id!==e)))||{};let s=!1;return s=!!r.productNum||2===i.riskType&&1===i.collocationType,s})),h=w((()=>{var e,o;return(null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),P=w((()=>h.value.collocationVOList||[])),y=(e,t)=>{const i=e.map((e=>e.id)).filter((e=>!m.value.disabledList.includes(e)));o("addRiderRisk",i,r.productInfo)};return v((()=>r.productInfo),(e=>{let o=0;(e.riskList||[]).forEach((e=>{o+=e.initialPremium})),m.value.totalPremium=o}),{deep:!0,immediate:!0}),v((()=>r.productRiskList),(e=>{const o=[],t=[],r=[];(e||[]).forEach((e=>{1===e.riskType?o.unshift(e):(t.push(e.riskId),r.push(e.riskId),o.push(e))})),m.value.disabledList=t,m.value.checkedList=r,m.value.productRiskList=o}),{deep:!0,immediate:!0}),(t,v)=>{const h=T,O=E;return s(),L("div",Ve,[(s(!0),L(C,null,b(n(m).productRiskList,(t=>{var i,p;return s(),L("div",{key:t.riskId},[l("div",ye,[u(h,{"risk-type":t.riskType,title:t.riskName,class:"no-border"},null,8,["risk-type","title"]),l("div",Oe,[l("div",ge,[l("div",je,[l("span",_e,V((null==(i=t.initialAmount)?void 0:i.toLocaleString())||"-"),1),Ie]),l("div",Re,[l("span",xe,V(n(ne)(t.coveragePeriod)||"-"),1),we]),l("div",De,[l("span",Te,V(n(ce)(t.chargePeriod)||"-"),1),Ee])]),l("div",Ne,[l("div",Ue,[c(" 保费:"),l("span",Se,V(!e.errorMsg&&t.initialPremium?`￥${null==(p=t.initialPremium)?void 0:p.toLocaleString()}`:"-"),1)]),2!==t.riskType?(s(),L("div",Fe,[n(k)(t.riskId)&&e.productIndex>0?(s(),a(O,{key:0,round:32,class:"border",onClick:e=>{o("deleteRisk",t,r.productInfo)}},{default:d((()=>[c("删除")])),_:2},1032,["onClick"])):D("",!0),u(O,{activated:"",round:32,onClick:e=>{o("updateRisk",t,r.productInfo)}},{default:d((()=>[c("修改")])),_:2},1032,["onClick"])])):D("",!0)])])])])})),128)),n(i)?(s(),a(be,{key:0,modelValue:n(m).checkedList,"onUpdate:modelValue":v[0]||(v[0]=e=>n(m).checkedList=e),show:n(i),disabled:n(m).disabledList,"risk-list":n(f),"collocation-list":n(P),onFinished:y,onClose:v[1]||(v[1]=e=>n(p)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):D("",!0),u(ee,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-3a61def2"]]);const Ae={class:"container"},Me={key:0,class:"operate-bar"},Be={class:"footer-bar"},Ge={class:"trial-result"},We={class:"result-num"},ze={class:"trial-operate"},Qe=o({name:"CreateProposal"});var He=e(o({...Qe,setup(e){const o=[{name:"保存修改"},{name:"另存为新计划书"}];x();const[r,i]=x(),k=t({holder:{},insuredList:[{name:"",gender:"",birthday:"",productList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),P=N(),y=U(),O=oe(),{productCode:g,id:j,preview:_}=y.query,I=["age","gender","birthday"],R=t(null),T=f({selectedProductCodeList:[],insuredPersonVO:{},currentProductCode:"",holder:{},productList:[],productCollection:{},productErrorMap:{},defaultData:null}),ee=t(!1),ue=t(null),ne=t(null),ce=w((()=>T.productList.map((e=>e.productCode)).filter((e=>Boolean(e))))),pe=w((()=>{const{productPlanInsureVOList:e}=T.productCollection[g]||{},[{insureProductRiskVOList:o=[]}={}]=e||[],{riskInsureLimitVO:t}=(null==o?void 0:o.find((e=>1===e.riskType)))||{};return null==t?void 0:t.sexLimit})),fe=w((()=>"-1"!==pe.value&&pe.value?S.filter((e=>pe.value===e.value)):S)),ke=w((()=>{var e;return(null==(e=T.productCollection)?void 0:e[T.currentProductCode])||{}})),ve=w((()=>{var e,o;return(null==(o=null==(e=ke.value)?void 0:e.productPlanInsureVOList)?void 0:o[0])||{}})),Le=w((()=>!ee.value||Boolean(Object.values(T.productErrorMap).join("")))),he=w((()=>"1"!=`${_}`)),Ce=w((()=>T.productList.reduce(((e,o)=>e+o.riskList.reduce(((e,o)=>e+(o.initialPremium||0)),0)),0))),be=(e,o="")=>{T.productErrorMap[e]=o},Pe=e=>{const o=T.productList.findIndex((o=>o.productCode===e.productCode)),t={...e.insuredProductInfo,nanoid:B()};if(-1===o)return T.productList.push(t),!1;const r=T.productList[o],{riskList:i,...s}=t;T.productList[o]={...t,...s,riskList:p(i)?i.map((e=>({...r.riskList.find((o=>o.riskCode===e.riskCode)),...e}))):[]}},Ve=e=>{var o;Object.assign(T.holder,e.holder),Object.assign(T.insuredPersonVO,e.insuredPersonVO),Pe(e),be(e.productCode),null==(o=R.value)||o.close()},ye=()=>{O.setProposalInfo(k.value),O.setExcludeProduct(ce.value),O.setInsuredPersonVO(T.insuredPersonVO),P.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})},Oe=e=>{de(e,{isCustomError:!0}).then((({code:o,data:t,message:r})=>{var i;o===W&&t?((null==t?void 0:t.errorInfo)&&z(`${null==t?void 0:t.errorInfo}`),p(t.riskPremiumDetailVOList)&&Pe(null==(i=R.value)?void 0:i.formatData(e,t)),be(e.productCode),ee.value=!0):be(e.productCode,r)}))},ge=e=>{e&&(T.insuredPersonVO.age=A(new Date).diff(e,"year"))},je=()=>{T.insuredPersonVO.birthday=""},_e=e=>{re(e).then((({code:e,data:o})=>{"10000"===e&&p(o)&&(o.reduce(((e,o)=>(e[o.productCode]=o,e)),T.productCollection),console.log("stateInfo.productCollection = ",T.productCollection))})).finally((()=>{}))},Ie=async(e,o=!1)=>{if(!p(e))return;const{code:t,data:r}=await ae({calcProductFactorList:e,...T.insuredPersonVO},{isCustomError:!o});"10000"===t&&r&&p(r)&&r.forEach((e=>{const{holder:t,insuredList:r,productCode:i}=e,{productList:s,...a}=(r||[])[0]||{},[{riskList:d=[],...l}={}]=s||[],u={productCode:i,...l,riskList:d};Oe(e),o&&(Object.assign(T.insuredPersonVO,a),Object.assign(T.holder,t));const n=ce.value.findIndex((e=>e===i));n>-1?T.productList[n]=u:T.productList.push(u),console.log("----add tempdata = ",u)}))},Re=e=>T.productList.filter((o=>o.productCode===e)).map((({productCode:e,riskList:o})=>{const{productPlanInsureVOList:t}=T.productCollection[e]||{},[{insureProductRiskVOList:r}={}]=t||[];return{productCode:e,riskEditVOList:p(o)?o.filter((e=>1===e.riskType)).map((({riskCode:e,riskType:o,annuityDrawValueList:t,paymentPeriodValueList:i,insurancePeriodValueList:s,...a})=>{const d=(null==r?void 0:r.find((o=>o.riskCode===e)))||{};return{insureProductRiskVO:{...d,productRiskInsureLimitVO:{...null==d?void 0:d.productRiskInsureLimitVO,annuityDrawValueList:t,paymentPeriodValueList:i,insurancePeriodValueList:s}}}})):[]}})),xe=e=>{const{riskList:o,...t}=T.productList.find((o=>o.productCode===e))||{};return{holder:{...T.holder},insuredList:[{...T.insuredPersonVO,productList:[{...t,riskList:o}]}],productCode:e}},we=(e,o)=>{const t=o;M.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?T.productList=T.productList.filter((e=>e.productCode!==t.productCode)).map((e=>({...e,nanoid:B()}))):t.riskList=t.riskList.filter((o=>o.riskId!==e.riskId)),be(t.productCode)}))},De=(e,o)=>{var t;T.currentProductCode=o.productCode,T.defaultData=[xe(o.productCode)],null==(t=R.value)||t.open()},Te=e=>{var o,t;Promise.all([null==(o=ue.value)?void 0:o.validate(),null==(t=ne.value)?void 0:t.validate()]).then((()=>{const{holder:o}=T;se({holder:o,insuredList:[{...T.insuredPersonVO,productList:T.productList}],proposalName:T.insuredPersonVO.proposalName,totalPremium:Ce.value,relationUserType:2,id:e}).then((e=>{const{code:o,data:t}=e||{};"10000"===o&&(O.$reset(),P.push({path:"/compositionProposal",query:{id:t}}))}))}))},Ee=()=>{j?i(!0):Te(j)},Ne=(e,o)=>{Te(o?void 0:j)};return v((()=>I.map((e=>T.insuredPersonVO[e]))),Z(((e,o)=>{X(e,o)||(console.log("被保人条件变动"),p(Object.keys(T.productCollection))&&ce.value.forEach((e=>(async e=>{try{const{code:o,data:t,message:r}=await le({calcProductFactorList:Re(e),...T.insuredPersonVO},{isCustomError:!0});"10000"===o&&p(t)?(T.productList.forEach((({productCode:e,riskList:o})=>{const{productRiskDyInsureFactorVOList:r}=t[0]||t.find((o=>o.productCode===e))||{};o.forEach((e=>{const o=r.find((o=>o.riskCode===e.riskCode));Object.assign(e,{...e,...o})}))})),Oe(xe(e)),be(e)):be(e,r)}catch(o){console.log("Error",o)}})(e))))})),{deep:!0}),v((()=>T.selectedProductCodeList),Z((e=>{if(p(e)){console.log("选择的产品变动了",e),Ie(e.map((e=>({productCode:e}))));const o=Object.keys(T.productCollection),t=null==e?void 0:e.filter((e=>!o.includes(e)));p(t)&&_e(null==t?void 0:t.map((e=>({productCode:e}))))}})),{deep:!0}),F((()=>{const{selectedProduct:e,insuredPersonVO:o}=O.$state;T.selectedProductCodeList=p(e)?e:[]})),q((()=>{if(g){const e=[{productCode:g}];_e(e),Ie(e,!0)}j&&((e={})=>{ie(e).then((({code:e,data:o})=>{if("10000"===e&&o){const{insuredList:e,holder:t,proposalName:r}=o||{},[{productList:i,...s}]=e||[];T.holder=t,T.insuredPersonVO={...s,proposalName:r},_e(i.map((e=>({productCode:e.productCode})))),console.log("----query detail ",i),T.productList=i}}))})({id:j});const e=(j?"编辑":"创建")+"计划书";y.meta.title=e,document.title=e})),(e,t)=>{const p=Y,f=G,k=E,v=m,P=Q,y=$("ProPageWrap");return s(),a(y,{class:"page-create-wrapper"},{default:d((()=>{var e;return[l("div",Ae,[u(p,{ref_key:"formRef",ref:ue,class:"mb20",model:n(T).insuredPersonVO},{default:d((()=>[u(n(te),{modelValue:n(T).insuredPersonVO.proposalName,"onUpdate:modelValue":t[0]||(t[0]=e=>n(T).insuredPersonVO.proposalName=e),label:"计划书名称",name:"proposalName",maxlength:20},null,8,["modelValue"])])),_:1},8,["model"]),u(n(H),{ref_key:"insuredFormRef",ref:ne,title:"被保人信息",model:n(T).insuredPersonVO},{default:d((()=>[u(n(te),{modelValue:n(T).insuredPersonVO.name,"onUpdate:modelValue":t[1]||(t[1]=e=>n(T).insuredPersonVO.name=e),label:"姓名",name:"name",maxlength:20,required:""},null,8,["modelValue"]),u(n(te),{modelValue:n(T).insuredPersonVO.age,"onUpdate:modelValue":t[3]||(t[3]=e=>n(T).insuredPersonVO.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",onChange:je},{extra:d((()=>[u(n(J),{modelValue:n(T).insuredPersonVO.birthday,"onUpdate:modelValue":[t[2]||(t[2]=e=>n(T).insuredPersonVO.birthday=e),ge],class:"birthday-field-wrap",label:"出生日期",name:"birthday",required:""},null,8,["modelValue"])])),_:1},8,["modelValue"]),u(n(K),{modelValue:n(T).insuredPersonVO.gender,"onUpdate:modelValue":t[4]||(t[4]=e=>n(T).insuredPersonVO.gender=e),label:"性别",name:"gender",columns:n(fe),required:""},null,8,["modelValue","columns"])])),_:1},8,["model"]),(s(!0),L(C,null,b(n(T).productList,((e,o)=>(s(),a(f,{key:`${e.nanoid}_${o}_${e.productCode}`,class:"product-item-card","show-line":!1,"show-divider":!1},{default:d((()=>{var t;return[u($e,{"product-risk-list":e.riskList,"product-info":e,"product-num":(null==(t=n(T).productList)?void 0:t.length)-1,"product-data":n(T).productCollection[e.productCode],"error-msg":n(T).productErrorMap[e.productCode],"product-index":o,onUpdateRisk:De,onDeleteRisk:we},null,8,["product-risk-list","product-info","product-num","product-data","error-msg","product-index"])]})),_:2},1024)))),128)),n(he)?(s(),L("div",Me,[u(k,{activated:"",round:34,onClick:ye},{default:d((()=>[c("添加产品")])),_:1})])):D("",!0)]),l("div",Be,[l("span",Ge,[c("总保费"),l("span",We,V(n(Le)?"-":`￥${null==(e=n(Ce))?void 0:e.toLocaleString()}`),1)]),l("div",ze,[u(v,{disabled:n(Le),type:"primary",onClick:Ee},{default:d((()=>[c("保存并预览")])),_:1},8,["disabled"])])]),u(P,{show:n(r),"onUpdate:show":t[5]||(t[5]=e=>h(r)?r.value=e:null),actions:o,"cancel-text":"取消","close-on-click-action":"",onCancel:t[6]||(t[6]=e=>n(i)(!1)),onSelect:Ne},null,8,["show"]),u(me,{ref_key:"trialPopupRef",ref:R,"data-source":n(ve),"product-code":n(T).currentProductCode,"default-data":n(T).defaultData,onFinish:Ve},null,8,["data-source","product-code","default-data"])]})),_:1})}}}),[["__scopeId","data-v-59c3ab7b"]]);export{He as default};
