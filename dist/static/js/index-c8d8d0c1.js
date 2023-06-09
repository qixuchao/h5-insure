import{G as e,d as o,r as t,aL as r,bn as i,b as s,g as a,w as d,i as l,e as n,f as u,j as c,al as p,B as m,A as f,bC as v,V as k,c as L,a0 as h,$ as C,a7 as b,aa as P,E as V,bD as y,bo as g,bE as O,bF as j,ai as I,aD as _,aE as R,aZ as w,L as x,h as D,bG as T,aX as E,bH as N,a as F,u as U,bI as S,bJ as q,o as $,a3 as A,z as M,D as B,am as G,a5 as W,bq as z,aQ as H,T as J}from"./index-9e81d346.js";import{A as Q}from"./index-06e8da51.js";import{P as X,a as Z,b as K,c as Y}from"./index-f99ce6eb.js";import{d as ee}from"./debounce-6981b306.js";import{P as oe,u as te}from"./ProductTips-4c49e365.js";import{_ as re}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-f2c0d5bf.js";/* empty css              */import"./useDicData-7841c850.js";import"./bankCard-27cc9e75.js";import{a as ie,b as se,c as ae}from"./createProposal-0d2f5767.js";import{a as de,q as le,p as ne}from"./trial-7a766c2e.js";import ue from"./index-ffe2e184.js";import{a as ce,b as pe}from"./format-b5e9d8b9.js";import"./keysIn-b1e7a5ec.js";import"./isObjectLike-a9798079.js";import"./_getTag-5c78de73.js";import"./index-3e85d93a.js";import"./phoneVerify-5e914711.js";import"./merge-84cb998c.js";import"./cloneDeep-f5e28e96.js";import"./TrialButton-34b6203a.js";import"./index-0a0ef1d7.js";import"./index-abb2089a.js";import"./infoCollection-dee98521.js";import"./index-13e42a9d.js";import"./index-2a596e25.js";import"./index-56e2c7d3.js";import"./empty-ae586b6c.js";import"./box-title-d767e088.js";import"./index-35310a4d.js";import"./trial-7ab29eac.js";import"./useOrder-b56b6153.js";import"./utils-a89cc71d.js";import"./constants-7afb7c3d.js";import"./nextStep-2988484c.js";import"./core-689b4a05.js";import"./constant-8927d485.js";const me={class:"trial-button"};var fe=e(o({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:o,emit:f}){const v=e,k=t(null);r(i,{insuredFactorCodes:["hasSocialInsurance","occupationCodeList"],holderFactorCodes:["birthday","gender","hasSocialInsurance","occupationCodeList"]});const L=(e,o)=>{const{holder:t,insuredList:r,productCode:i}=e||{},{productList:s,...a}=(null==r?void 0:r[0])||{},{riskList:d,...l}=(null==s?void 0:s[0])||{},n=p(null==o?void 0:o.riskPremiumDetailVOList)?null==o?void 0:o.riskPremiumDetailVOList.reduce(((e,o)=>(e[o.riskCode]={initialPremium:o.initialPremium,initialAmount:o.initialAmount},e)),{}):{},u=(d||[]).map((e=>{var o,t;return{...e,initialPremium:null==(o=null==n?void 0:n[e.riskCode])?void 0:o.initialPremium,initialAmount:null==(t=null==n?void 0:n[e.riskCode])?void 0:t.initialAmount}}));return{productCode:i,holder:t,insuredPersonVO:a,insuredProductInfo:{productCode:i,...l,productName:v.productName,occupationCodeList:null==a?void 0:a.occupationCodeList,riskList:u}}};return o({...["open","close"].reduce(((e,o)=>(e[o]=(...e)=>{var t;null==(t=k.value)||t[o](...e)},e)),{}),formatData:L}),(o,t)=>{const r=m;return s(),a(ue,{ref_key:"trialRef",ref:k,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{trialBtn:d((e=>[l("div",me,[n(r,{disabled:!u(k).getTrialSuccessFlag(),type:"primary",onClick:o=>(({trialData:e,riskPremium:o,personalInfoRef:t})=>"function"==typeof(null==t?void 0:t.canTrail)&&t.canTrail()?f("finish",L({...e,productCode:v.productCode},o)):"function"==typeof(null==t?void 0:t.validate)&&t.validate())(e)},{default:d((()=>[c("确定")])),_:2},1032,["disabled","onClick"])])])),_:1},8,["product-info"])}}}),[["__scopeId","data-v-4df98274"]]);const ve={class:"com-risk-list-wrapper"},ke=(e=>(_("data-v-7d3c3028"),e=e(),R(),e))((()=>l("div",{class:"popup-title"},"选择附加险",-1))),Le={class:"risk-list"},he={class:"cell-title"},Ce={class:"title"},be={class:"footer-button"};var Pe=e(o({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:o}){const r=e,i=t([]),p=t([]),_=t([...r.disabled]),R=f({show:r.show,currentChecked:[...r.modelValue]}),w=e=>{var o,t,s;if(_.value.includes(e))return;((e,o)=>{if(!r.collocationList.length)return o?void(R.currentChecked=[]):void R.currentChecked.push(e);let t=R.currentChecked,i=_.value;o?(r.collocationList.forEach((o=>{e===o.riskId&&(2===o.collocationType?t=t.filter((t=>t!==o.collocationRiskId||t!==e)):3===o.collocationType?(t=t.filter((o=>o!==e)),i=i.filter((e=>e!==o.collocationRiskId))):t=t.filter((o=>o!==e)))})),R.currentChecked=t,_.value=i):(r.collocationList.forEach((r=>{e===r.riskId&&(o||(2===r.collocationType?t.push(r.collocationRiskId):3===r.collocationType&&i.push(r.collocationRiskId),t.push(e)))})),R.currentChecked.push(...t),_.value=i)})(e,R.currentChecked.includes(e)),null==(s=null==(t=null==(o=null==i?void 0:i.value)?void 0:o[e])?void 0:t.toggle)||s.call(t)},x=()=>{o("close")},D=()=>{const e=r.riskList.filter((e=>R.currentChecked.includes(e.id)));o("update:modelValue",[...new Set(p.value)]),o("finished",e,_.value),o("close")};return v((()=>{i.value=[]})),k((()=>R.currentChecked),(e=>{p.value=e}),{deep:!0,immediate:!0}),k((()=>r.modelValue),(e=>{p.value=e||[],_.value.push(...e||[])}),{deep:!0,immediate:!0}),(o,t)=>{const r=y,f=g,v=O,k=j,T=m,E=I;return s(),L("div",ve,[n(E,{show:u(R).show,"onUpdate:show":t[1]||(t[1]=e=>u(R).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:x},{default:d((()=>[ke,l("div",Le,[n(k,{modelValue:u(p),"onUpdate:modelValue":t[0]||(t[0]=e=>h(p)?p.value=e:null)},{default:d((()=>[n(v,{inset:""},{default:d((()=>[(s(!0),L(C,null,b(e.riskList,(e=>(s(),a(f,{key:e.id,title:e.riskName,disabled:u(_).includes(e.id),onClick:o=>w(e.id)},{"right-icon":d((()=>[n(r,{ref_for:!0,ref:o=>u(i)[e.id]=o,shape:"square",disabled:u(_).includes(e.id),name:e.id,onClick:P((o=>w(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:d((()=>[l("div",he,[l("div",Ce,V(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),l("div",be,[n(T,{type:"primary",disabled:!u(R).currentChecked.length,block:"",onClick:D},{default:d((()=>[c("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const Ve=e=>(_("data-v-3a61def2"),e=e(),R(),e),ye={class:"com-product-list-wrapper"},ge={class:"risk-item-wrapper"},Oe={class:"content"},je={class:"risk-factor"},Ie={class:"factor"},_e={class:"factor-value"},Re=Ve((()=>l("span",{class:"factor-name"}," 保额(元) ",-1))),we={class:"factor"},xe={class:"factor-value"},De=Ve((()=>l("span",{class:"factor-name"}," 保障期间 ",-1))),Te={class:"factor"},Ee={class:"factor-value"},Ne=Ve((()=>l("span",{class:"factor-name"}," 交费期间 ",-1))),Fe={class:"operate-bar-wrap"},Ue={class:"risk-premium"},Se={class:"premium"},qe={key:0,class:"operate-bar"},$e=o({name:"ProductList"});var Ae=e(o({...$e,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0},errorMsg:{default:""},productIndex:null},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:o}){const r=e,[i,p]=w(),m=t({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),f=x((()=>{var e,o;return(null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]}));x((()=>{var e,o;const t=r.productRiskList.map((e=>e.riskId)),i=((null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList)||[]).filter((e=>t.includes(e.id)&&1===e.collocationType));return f.value.length-i.length}));const v=x((()=>e=>{var o,t;const i=(null==(t=null==(o=r.productData)?void 0:o.productRiskVoList)?void 0:t[0].riskDetailVOList.find((o=>o.id!==e)))||{};let s=!1;return s=!!r.productNum||2===i.riskType&&1===i.collocationType,s})),h=x((()=>{var e,o;return(null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),P=x((()=>h.value.collocationVOList||[])),y=(e,t)=>{const i=e.map((e=>e.id)).filter((e=>!m.value.disabledList.includes(e)));o("addRiderRisk",i,r.productInfo)};return k((()=>r.productInfo),(e=>{let o=0;(e.riskList||[]).forEach((e=>{o+=e.initialPremium})),m.value.totalPremium=o}),{deep:!0,immediate:!0}),k((()=>r.productRiskList),(e=>{const o=[],t=[],r=[];(e||[]).forEach((e=>{1===e.riskType?o.unshift(e):(t.push(e.riskId),r.push(e.riskId),o.push(e))})),m.value.disabledList=t,m.value.checkedList=r,m.value.productRiskList=o}),{deep:!0,immediate:!0}),(t,k)=>{const h=T,g=E;return s(),L("div",ye,[(s(!0),L(C,null,b(u(m).productRiskList,(t=>{var i,p;return s(),L("div",{key:t.riskId},[l("div",ge,[n(h,{"risk-type":t.riskType,title:t.riskName,class:"no-border"},null,8,["risk-type","title"]),l("div",Oe,[l("div",je,[l("div",Ie,[l("span",_e,V((null==(i=t.initialAmount)?void 0:i.toLocaleString())||"-"),1),Re]),l("div",we,[l("span",xe,V(u(ce)(t.coveragePeriod)||"-"),1),De]),l("div",Te,[l("span",Ee,V(u(pe)(t.chargePeriod)||"-"),1),Ne])]),l("div",Fe,[l("div",Ue,[c(" 保费:"),l("span",Se,V(!e.errorMsg&&t.initialPremium?`￥${null==(p=t.initialPremium)?void 0:p.toLocaleString()}`:"-"),1)]),2!==t.riskType?(s(),L("div",qe,[u(v)(t.riskId)&&e.productIndex>0?(s(),a(g,{key:0,round:32,class:"border",onClick:e=>{o("deleteRisk",t,r.productInfo)}},{default:d((()=>[c("删除")])),_:2},1032,["onClick"])):D("",!0),n(g,{activated:"",round:32,onClick:e=>{o("updateRisk",t,r.productInfo)}},{default:d((()=>[c("修改")])),_:2},1032,["onClick"])])):D("",!0)])])])])})),128)),u(i)?(s(),a(Pe,{key:0,modelValue:u(m).checkedList,"onUpdate:modelValue":k[0]||(k[0]=e=>u(m).checkedList=e),show:u(i),disabled:u(m).disabledList,"risk-list":u(f),"collocation-list":u(P),onFinished:y,onClose:k[1]||(k[1]=e=>u(p)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):D("",!0),n(oe,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-3a61def2"]]);const Me={class:"container"},Be={key:0,class:"operate-bar"},Ge={class:"footer-bar"},We={class:"trial-result"},ze={class:"result-num"},He={class:"trial-operate"},Je=o({name:"CreateProposal"});var Qe=e(o({...Je,setup(e){const o=[{name:"保存修改"},{name:"另存为新计划书"}],r=N();w();const[i,v]=w(),P=t({holder:{},insuredList:[{name:"",gender:"",birthday:"",productList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),y=F(),g=U(),O=te(),{productCode:j,id:I,preview:_}=g.query,R=["age","gender","birthday","hasSocialInsurance","occupationCodeList"],T=t(null),oe=f({selectedProductCodeList:[],insuredPersonVO:{},currentProductCode:"",holder:{},productList:[],productCollection:{},productErrorMap:{},defaultData:null}),ue=t(!1),ce=t(null),pe=t(null),me=x((()=>oe.productList.map((e=>e.productCode)).filter((e=>Boolean(e))))),ve=x((()=>{const{productPlanInsureVOList:e}=oe.productCollection[j]||{},[{insureProductRiskVOList:o=[]}={}]=e||[],{riskInsureLimitVO:t}=(null==o?void 0:o.find((e=>1===e.riskType)))||{};return null==t?void 0:t.sexLimit})),ke=x((()=>"-1"!==ve.value&&ve.value?S.filter((e=>ve.value===e.value)):S)),Le=x((()=>{var e;return(null==(e=oe.productCollection)?void 0:e[oe.currentProductCode])||{}})),he=x((()=>{var e,o;return(null==(o=null==(e=Le.value)?void 0:e.productPlanInsureVOList)?void 0:o[0])||{}})),Ce=x((()=>!ue.value||Boolean(Object.values(oe.productErrorMap).join("")))),be=x((()=>"1"!=`${_}`)),Pe=x((()=>oe.productList.reduce(((e,o)=>e+o.riskList.reduce(((e,o)=>e+(o.initialPremium||0)),0)),0))),Ve=(e,o="")=>{oe.productErrorMap[e]=o},ye=e=>{const o=oe.productList.findIndex((o=>o.productCode===e.productCode)),t={...e.insuredProductInfo,nanoid:G()};if(-1===o)return oe.productList.push(t),!1;const r=oe.productList[o],{riskList:i,...s}=t;oe.productList[o]={...t,...s,riskList:p(i)?i.map((e=>({...r.riskList.find((o=>o.riskCode===e.riskCode)),...e}))):[]}},ge=e=>{var o;Object.assign(oe.holder,e.holder),Object.assign(oe.insuredPersonVO,e.insuredPersonVO),ye(e),Ve(e.productCode),ue.value=!0,null==(o=T.value)||o.close()},Oe=()=>{O.setProposalInfo(P.value),O.setExcludeProduct(me.value),O.setInsuredPersonVO(oe.insuredPersonVO),y.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})},je=e=>{ne(e,{isCustomError:!0}).then((({code:o,data:t,message:r})=>{var i;o===H&&t?((null==t?void 0:t.errorInfo)&&J(`${null==t?void 0:t.errorInfo}`),p(t.riskPremiumDetailVOList)&&ye(null==(i=T.value)?void 0:i.formatData(e,t)),Ve(e.productCode),ue.value=!0):Ve(e.productCode,r)}))},Ie=e=>{e&&(oe.insuredPersonVO.age=M(new Date).diff(e,"year"))},_e=()=>{oe.insuredPersonVO.birthday=""},Re=e=>{ie(e).then((({code:e,data:o})=>{"10000"===e&&p(o)&&(o.reduce(((e,o)=>(e[o.productCode]=o,e)),oe.productCollection),console.log("stateInfo.productCollection = ",oe.productCollection))})).finally((()=>{}))},we=async(e,o=!1)=>{if(!p(e))return;const{code:t,data:r}=await de({calcProductFactorList:e,...oe.insuredPersonVO},{isCustomError:!o});"10000"===t&&r&&p(r)&&r.forEach((e=>{const{holder:t,insuredList:r,productCode:i}=e,{productList:s,...a}=(r||[])[0]||{},[{riskList:d=[],...l}={}]=s||[],n={productCode:i,...l,riskList:d};je(e),o&&(Object.assign(oe.insuredPersonVO,a),Object.assign(oe.holder,t));const u=me.value.findIndex((e=>e===i));u>-1?oe.productList[u]=n:oe.productList.push(n),console.log("----add tempdata = ",n)}))},xe=e=>oe.productList.filter((o=>o.productCode===e)).map((({productCode:e,riskList:o})=>{const{productPlanInsureVOList:t}=oe.productCollection[e]||{},[{insureProductRiskVOList:r}={}]=t||[];return{productCode:e,riskEditVOList:p(o)?o.filter((e=>1===e.riskType)).map((({riskCode:e,riskType:o,annuityDrawValueList:t,paymentPeriodValueList:i,insurancePeriodValueList:s,...a})=>{const d=(null==r?void 0:r.find((o=>o.riskCode===e)))||{};return{insureProductRiskVO:{...d,productRiskInsureLimitVO:{...null==d?void 0:d.productRiskInsureLimitVO,annuityDrawValueList:t,paymentPeriodValueList:i,insurancePeriodValueList:s}}}})):[]}})),De=e=>{const{riskList:o,...t}=oe.productList.find((o=>o.productCode===e))||{};return{holder:{...oe.holder},insuredList:[{...oe.insuredPersonVO,productList:[{...t,riskList:o}]}],productCode:e}},Te=(e,o)=>{const t=o;B.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?oe.productList=oe.productList.filter((e=>e.productCode!==t.productCode)).map((e=>({...e,nanoid:G()}))):t.riskList=t.riskList.filter((o=>o.riskId!==e.riskId)),Ve(t.productCode)}))},Ee=(e,o)=>{var t;oe.currentProductCode=o.productCode,oe.defaultData=[De(o.productCode)],null==(t=T.value)||t.open()},Ne=e=>{var o,t;Promise.all([null==(o=ce.value)?void 0:o.validate(),null==(t=pe.value)?void 0:t.validate()]).then((()=>{const{holder:o}=oe;ae({holder:o,insuredList:[{...oe.insuredPersonVO,productList:oe.productList}],proposalName:oe.insuredPersonVO.proposalName,totalPremium:Pe.value,relationUserType:2,id:e}).then((e=>{const{code:o,data:t}=e||{};"10000"===o&&(O.$reset(),y.push({path:"/compositionProposal",query:{id:t,preview:_}}))}))}))},Fe=()=>{I?v(!0):Ne(I)},Ue=(e,o)=>{Ne(o?void 0:I)};return k((()=>R.map((e=>oe.insuredPersonVO[e]))),((e,o)=>{e.join(",")!==o.join(",")&&(console.log("被保人条件变动"),p(Object.keys(oe.productCollection))&&me.value.forEach((e=>(async e=>{try{const{code:o,data:t,message:r}=await le({calcProductFactorList:xe(e),...oe.insuredPersonVO},{isCustomError:!0});"10000"===o&&p(t)?(oe.productList.forEach((({productCode:e,riskList:o})=>{const{productRiskDyInsureFactorVOList:r}=t[0]||t.find((o=>o.productCode===e))||{};o.forEach((e=>{const o=r.find((o=>o.riskCode===e.riskCode));Object.assign(e,{...e,...o})}))})),je(De(e)),Ve(e)):Ve(e,r)}catch(o){console.log("Error",o)}})(e))))}),{deep:!0}),k((()=>oe.selectedProductCodeList),ee((e=>{if(p(e)){console.log("选择的产品变动了",e),we(e.map((e=>({productCode:e}))));const o=Object.keys(oe.productCollection),t=null==e?void 0:e.filter((e=>!o.includes(e)));p(t)&&Re(null==t?void 0:t.map((e=>({productCode:e}))))}})),{deep:!0}),q((()=>{const{selectedProduct:e,insuredPersonVO:o}=O.$state;oe.selectedProductCodeList=p(e)?e:[]})),$((()=>{if(j){const e=[{productCode:j}];Re(e),we(e,!0)}I&&(((e={})=>{se(e).then((({code:e,data:o})=>{if("10000"===e&&o){const{insuredList:e,holder:t,proposalName:r}=o||{},[{productList:i,...s}]=e||[];oe.holder=t,oe.insuredPersonVO={...s,proposalName:r},Re(i.map((e=>({productCode:e.productCode})))),console.log("----query detail ",i),oe.productList=i}}))})({id:I}),ue.value=!0);const e=(I?"编辑":"创建")+"计划书";g.meta.title=e,document.title=e})),(e,t)=>{const p=Y,f=W,k=E,P=m,y=Q,g=A("ProPageWrap"),O=z;return s(),a(O,{"theme-vars":u(r)},{default:d((()=>[n(g,{class:"page-create-wrapper"},{default:d((()=>{var e;return[l("div",Me,[n(p,{ref_key:"formRef",ref:ce,class:"mb20",model:u(oe).insuredPersonVO},{default:d((()=>[n(u(re),{modelValue:u(oe).insuredPersonVO.proposalName,"onUpdate:modelValue":t[0]||(t[0]=e=>u(oe).insuredPersonVO.proposalName=e),label:"计划书名称",name:"proposalName",maxlength:20},null,8,["modelValue"])])),_:1},8,["model"]),n(u(X),{ref_key:"insuredFormRef",ref:pe,title:"被保人信息",model:u(oe).insuredPersonVO},{default:d((()=>[n(u(re),{modelValue:u(oe).insuredPersonVO.name,"onUpdate:modelValue":t[1]||(t[1]=e=>u(oe).insuredPersonVO.name=e),label:"姓名",name:"name",maxlength:20,required:""},null,8,["modelValue"]),n(u(re),{modelValue:u(oe).insuredPersonVO.age,"onUpdate:modelValue":t[3]||(t[3]=e=>u(oe).insuredPersonVO.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",onChange:_e},{extra:d((()=>[n(u(Z),{modelValue:u(oe).insuredPersonVO.birthday,"onUpdate:modelValue":[t[2]||(t[2]=e=>u(oe).insuredPersonVO.birthday=e),Ie],class:"birthday-field-wrap",label:"出生日期",name:"birthday"},null,8,["modelValue"])])),_:1},8,["modelValue"]),n(u(K),{modelValue:u(oe).insuredPersonVO.gender,"onUpdate:modelValue":t[4]||(t[4]=e=>u(oe).insuredPersonVO.gender=e),label:"性别",name:"gender",columns:u(ke),required:""},null,8,["modelValue","columns"])])),_:1},8,["model"]),(s(!0),L(C,null,b(u(oe).productList,((e,o)=>(s(),a(f,{key:`${e.nanoid}_${o}_${e.productCode}`,class:"product-item-card","show-line":!1,"show-divider":!1},{default:d((()=>{var t;return[n(Ae,{"product-risk-list":e.riskList,"product-info":e,"product-num":(null==(t=u(oe).productList)?void 0:t.length)-1,"product-data":u(oe).productCollection[e.productCode],"error-msg":u(oe).productErrorMap[e.productCode],"product-index":o,onUpdateRisk:Ee,onDeleteRisk:Te},null,8,["product-risk-list","product-info","product-num","product-data","error-msg","product-index"])]})),_:2},1024)))),128)),u(be)?(s(),L("div",Be,[n(k,{activated:"",round:34,onClick:Oe},{default:d((()=>[c("添加产品")])),_:1})])):D("",!0)]),l("div",Ge,[l("span",We,[c("总保费"),l("span",ze,V(u(Ce)?"-":`￥${null==(e=u(Pe))?void 0:e.toLocaleString()}`),1)]),l("div",He,[n(P,{disabled:u(Ce),type:"primary",onClick:Fe},{default:d((()=>[c("保存并预览")])),_:1},8,["disabled"])])]),n(y,{show:u(i),"onUpdate:show":t[5]||(t[5]=e=>h(i)?i.value=e:null),actions:o,"cancel-text":"取消","close-on-click-action":"",onCancel:t[6]||(t[6]=e=>u(v)(!1)),onSelect:Ue},null,8,["show"]),n(fe,{ref_key:"trialPopupRef",ref:T,"data-source":u(he),"product-code":u(oe).currentProductCode,"default-data":u(oe).defaultData,onFinish:ge},null,8,["data-source","product-code","default-data"])]})),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-b5de45d8"]]);export{Qe as default};
