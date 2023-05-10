import{G as e,d as o,r as t,b7 as r,aT as i,c as s,e as a,w as d,f as l,i as u,g as n,j as c,aQ as p,B as m,z as f,bL as k,R as v,A as L,a2 as h,U as C,V as b,bA as P,E as V,bM as y,aU as g,bN as O,bO as j,bE as _,al as I,am as R,ac as x,L as w,h as D,bP as T,bc as E,a as N,u as U,bQ as q,bv as F,o as S,b as A,y as M,D as $,aR as B,bn as Q,au as W,T as z}from"./index-6d6b0913.js";import{A as G}from"./index-d970357a.js";import{P as H,a as J,b as K,c as X}from"./index-10bc1eeb.js";import{d as Y}from"./debounce-eed12388.js";import{P as Z,u as ee}from"./ProductTips-d0fea6d7.js";import{_ as oe}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-f982faf8.js";/* empty css              */import"./bankCard-44f2ef01.js";import{a as te,b as re,c as ie}from"./createProposal-d90a8165.js";import{c as se,p as ae,q as de}from"./trial-ffbde057.js";import{T as le}from"./index-3186265d.js";import{a as ue,b as ne}from"./format-12461bbc.js";import"./pdfh5-008ca364.js";import"./index-6ba4b844.js";import"./isObjectLike-a9798079.js";import"./_initCloneObject-0663309f.js";import"./phoneVerify-6fb7ef77.js";import"./index-bb4cf891.js";import"./infoCollection-0a7ac2f2.js";import"./cloneDeep-1de8e9b0.js";import"./TrialButton-39e71497.js";import"./index-e3565963.js";import"./useOrder-7fbb1b47.js";import"./utils-3c0c2201.js";import"./trial-4ac0ea44.js";import"./constants-7afb7c3d.js";import"./nextStep-c5e42344.js";import"./core-b1e27378.js";import"./constant-8927d485.js";import"./index-f4bf93ea.js";import"./index-9d7ebcbe.js";import"./index-c66d2ca0.js";import"./empty-c926d8ec.js";import"./box-title-da3ea52b.js";import"./index-986c9a8b.js";import"./echarts-ac920fed.js";import"./Table-270a1374.js";const ce={class:"trial-button"};var pe=e(o({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:o,emit:f}){const k=e,v=t(null);r(i,{insuredFactorCodes:["hasSocialInsurance","occupationCodeList"],holderFactorCodes:["birthday","gender","hasSocialInsurance","occupationCodeList"]});const L=(e,o)=>{const{holder:t,insuredList:r,productCode:i}=e||{},{productList:s,...a}=(null==r?void 0:r[0])||{},{riskList:d,...l}=(null==s?void 0:s[0])||{},u=p(null==o?void 0:o.riskPremiumDetailVOList)?null==o?void 0:o.riskPremiumDetailVOList.reduce(((e,o)=>(e[o.riskCode]={initialPremium:o.initialPremium,initialAmount:o.initialAmount},e)),{}):{},n=(d||[]).map((e=>{var o,t;return{...e,initialPremium:null==(o=null==u?void 0:u[e.riskCode])?void 0:o.initialPremium,initialAmount:null==(t=null==u?void 0:u[e.riskCode])?void 0:t.initialAmount}}));return{productCode:i,holder:t,insuredPersonVO:a,insuredProductInfo:{productCode:i,...l,productName:k.productName,occupationCodeList:null==a?void 0:a.occupationCodeList,riskList:n}}};return o({...["open","close"].reduce(((e,o)=>(e[o]=(...e)=>{var t;null==(t=v.value)||t[o](...e)},e)),{}),formatData:L}),(o,t)=>{const r=m;return s(),a(le,{ref_key:"trialRef",ref:v,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{trialBtn:d((({trialData:e,riskPremium:o})=>[l("div",ce,[u(r,{disabled:!n(v).getTrialSuccessFlag(),type:"primary",onClick:t=>((...e)=>{f("finish",L(e[0],e[1]))})(e,o)},{default:d((()=>[c("确定")])),_:2},1032,["disabled","onClick"])])])),_:1},8,["product-info"])}}}),[["__scopeId","data-v-02887eb0"]]);const me={class:"com-risk-list-wrapper"},fe=(e=>(I("data-v-7d3c3028"),e=e(),R(),e))((()=>l("div",{class:"popup-title"},"选择附加险",-1))),ke={class:"risk-list"},ve={class:"cell-title"},Le={class:"title"},he={class:"footer-button"};var Ce=e(o({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:o}){const r=e,i=t([]),p=t([]),I=t([...r.disabled]),R=f({show:r.show,currentChecked:[...r.modelValue]}),x=e=>{var o,t,s;if(I.value.includes(e))return;((e,o)=>{if(!r.collocationList.length)return o?void(R.currentChecked=[]):void R.currentChecked.push(e);let t=R.currentChecked,i=I.value;o?(r.collocationList.forEach((o=>{e===o.riskId&&(2===o.collocationType?t=t.filter((t=>t!==o.collocationRiskId||t!==e)):3===o.collocationType?(t=t.filter((o=>o!==e)),i=i.filter((e=>e!==o.collocationRiskId))):t=t.filter((o=>o!==e)))})),R.currentChecked=t,I.value=i):(r.collocationList.forEach((r=>{e===r.riskId&&(o||(2===r.collocationType?t.push(r.collocationRiskId):3===r.collocationType&&i.push(r.collocationRiskId),t.push(e)))})),R.currentChecked.push(...t),I.value=i)})(e,R.currentChecked.includes(e)),null==(s=null==(t=null==(o=null==i?void 0:i.value)?void 0:o[e])?void 0:t.toggle)||s.call(t)},w=()=>{o("close")},D=()=>{const e=r.riskList.filter((e=>R.currentChecked.includes(e.id)));o("update:modelValue",[...new Set(p.value)]),o("finished",e,I.value),o("close")};return k((()=>{i.value=[]})),v((()=>R.currentChecked),(e=>{p.value=e}),{deep:!0,immediate:!0}),v((()=>r.modelValue),(e=>{p.value=e||[],I.value.push(...e||[])}),{deep:!0,immediate:!0}),(o,t)=>{const r=y,f=g,k=O,v=j,T=m,E=_;return s(),L("div",me,[u(E,{show:n(R).show,"onUpdate:show":t[1]||(t[1]=e=>n(R).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:w},{default:d((()=>[fe,l("div",ke,[u(v,{modelValue:n(p),"onUpdate:modelValue":t[0]||(t[0]=e=>h(p)?p.value=e:null)},{default:d((()=>[u(k,{inset:""},{default:d((()=>[(s(!0),L(C,null,b(e.riskList,(e=>(s(),a(f,{key:e.id,title:e.riskName,disabled:n(I).includes(e.id),onClick:o=>x(e.id)},{"right-icon":d((()=>[u(r,{ref_for:!0,ref:o=>n(i)[e.id]=o,shape:"square",disabled:n(I).includes(e.id),name:e.id,onClick:P((o=>x(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:d((()=>[l("div",ve,[l("div",Le,V(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),l("div",he,[u(T,{type:"primary",disabled:!n(R).currentChecked.length,block:"",onClick:D},{default:d((()=>[c("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const be=e=>(I("data-v-3a61def2"),e=e(),R(),e),Pe={class:"com-product-list-wrapper"},Ve={class:"risk-item-wrapper"},ye={class:"content"},ge={class:"risk-factor"},Oe={class:"factor"},je={class:"factor-value"},_e=be((()=>l("span",{class:"factor-name"}," 保额(元) ",-1))),Ie={class:"factor"},Re={class:"factor-value"},xe=be((()=>l("span",{class:"factor-name"}," 保障期间 ",-1))),we={class:"factor"},De={class:"factor-value"},Te=be((()=>l("span",{class:"factor-name"}," 交费期间 ",-1))),Ee={class:"operate-bar-wrap"},Ne={class:"risk-premium"},Ue={class:"premium"},qe={key:0,class:"operate-bar"},Fe=o({name:"ProductList"});var Se=e(o({...Fe,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0},errorMsg:{default:""},productIndex:null},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:o}){const r=e,[i,p]=x(),m=t({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),f=w((()=>{var e,o;return(null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]}));w((()=>{var e,o;const t=r.productRiskList.map((e=>e.riskId)),i=((null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList)||[]).filter((e=>t.includes(e.id)&&1===e.collocationType));return f.value.length-i.length}));const k=w((()=>e=>{var o,t;const i=(null==(t=null==(o=r.productData)?void 0:o.productRiskVoList)?void 0:t[0].riskDetailVOList.find((o=>o.id!==e)))||{};let s=!1;return s=!!r.productNum||2===i.riskType&&1===i.collocationType,s})),h=w((()=>{var e,o;return(null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),P=w((()=>h.value.collocationVOList||[])),y=(e,t)=>{const i=e.map((e=>e.id)).filter((e=>!m.value.disabledList.includes(e)));o("addRiderRisk",i,r.productInfo)};return v((()=>r.productInfo),(e=>{let o=0;(e.riskList||[]).forEach((e=>{o+=e.initialPremium})),m.value.totalPremium=o}),{deep:!0,immediate:!0}),v((()=>r.productRiskList),(e=>{const o=[],t=[],r=[];(e||[]).forEach((e=>{1===e.riskType?o.unshift(e):(t.push(e.riskId),r.push(e.riskId),o.push(e))})),m.value.disabledList=t,m.value.checkedList=r,m.value.productRiskList=o}),{deep:!0,immediate:!0}),(t,v)=>{const h=T,g=E;return s(),L("div",Pe,[(s(!0),L(C,null,b(n(m).productRiskList,(t=>{var i,p;return s(),L("div",{key:t.riskId},[l("div",Ve,[u(h,{"risk-type":t.riskType,title:t.riskName,class:"no-border"},null,8,["risk-type","title"]),l("div",ye,[l("div",ge,[l("div",Oe,[l("span",je,V((null==(i=t.initialAmount)?void 0:i.toLocaleString())||"-"),1),_e]),l("div",Ie,[l("span",Re,V(n(ue)(t.coveragePeriod)||"-"),1),xe]),l("div",we,[l("span",De,V(n(ne)(t.chargePeriod)||"-"),1),Te])]),l("div",Ee,[l("div",Ne,[c(" 保费:"),l("span",Ue,V(!e.errorMsg&&t.initialPremium?`￥${null==(p=t.initialPremium)?void 0:p.toLocaleString()}`:"-"),1)]),2!==t.riskType?(s(),L("div",qe,[n(k)(t.riskId)&&e.productIndex>0?(s(),a(g,{key:0,round:32,class:"border",onClick:e=>{o("deleteRisk",t,r.productInfo)}},{default:d((()=>[c("删除")])),_:2},1032,["onClick"])):D("",!0),u(g,{activated:"",round:32,onClick:e=>{o("updateRisk",t,r.productInfo)}},{default:d((()=>[c("修改")])),_:2},1032,["onClick"])])):D("",!0)])])])])})),128)),n(i)?(s(),a(Ce,{key:0,modelValue:n(m).checkedList,"onUpdate:modelValue":v[0]||(v[0]=e=>n(m).checkedList=e),show:n(i),disabled:n(m).disabledList,"risk-list":n(f),"collocation-list":n(P),onFinished:y,onClose:v[1]||(v[1]=e=>n(p)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):D("",!0),u(Z,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-3a61def2"]]);const Ae={class:"container"},Me={class:"operate-bar"},$e={class:"footer-bar"},Be={class:"trial-result"},Qe={class:"result-num"},We={class:"trial-operate"},ze=o({name:"CreateProposal"});var Ge=e(o({...ze,setup(e){const o=[{name:"保存修改"},{name:"另存为新计划书"}];x();const[r,i]=x(),k=t({holder:{},insuredList:[{name:"",gender:"",birthday:"",productList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),P=N(),y=U(),g=ee(),{productCode:O,id:j}=y.query,_=["age","gender","birthday"],I=t(null),R=f({selectedProductCodeList:[],insuredPersonVO:{},currentProductCode:"",holder:{},productList:[],productCollection:{},productErrorMap:{},defaultData:null}),D=t(null),T=t(null),Z=w((()=>R.productList.map((e=>e.productCode)).filter((e=>Boolean(e))))),le=w((()=>{const{productPlanInsureVOList:e}=R.productCollection[O]||{},[{insureProductRiskVOList:o=[]}={}]=e||[],{riskInsureLimitVO:t}=(null==o?void 0:o.find((e=>1===e.riskType)))||{};return null==t?void 0:t.sexLimit})),ue=w((()=>"-1"!==le.value&&le.value?q.filter((e=>le.value===e.value)):q)),ne=w((()=>{var e;return(null==(e=R.productCollection)?void 0:e[R.currentProductCode])||{}})),ce=w((()=>{var e,o;return(null==(o=null==(e=ne.value)?void 0:e.productPlanInsureVOList)?void 0:o[0])||{}})),me=w((()=>Boolean(Object.values(R.productErrorMap).join("")))),fe=w((()=>R.productList.reduce(((e,o)=>e+o.riskList.reduce(((e,o)=>e+(o.initialPremium||0)),0)),0))),ke=e=>{const o=R.productList.findIndex((o=>o.productCode===e.productCode)),t={...e.insuredProductInfo,nanoid:B()};if(-1===o)return R.productList.push(t),!1;const r=R.productList[o],{riskList:i,...s}=t;console.log("---hebing",e),R.productList[o]={...t,...s,riskList:p(i)?i.map((e=>({...r.riskList.find((o=>o.riskCode===e.riskCode)),...e}))):[]}},ve=e=>{var o;Object.assign(R.holder,e.holder),Object.assign(R.insuredPersonVO,e.insuredPersonVO),ke(e),null==(o=I.value)||o.close()},Le=()=>{g.setProposalInfo(k.value),g.setExcludeProduct(Z.value),g.setInsuredPersonVO(R.insuredPersonVO),P.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})},he=(e,o="")=>{R.productErrorMap[e]=o},Ce=e=>{console.log("-----trailProduct = ",e),ae(e,{isCustomError:!0}).then((({code:o,data:t,message:r})=>{var i;o===W&&t?((null==t?void 0:t.errorInfo)&&z(`${null==t?void 0:t.errorInfo}`),p(t.riskPremiumDetailVOList)&&ke(null==(i=I.value)?void 0:i.formatData(e,t)),he(e.productCode)):he(e.productCode,r)}))},be=e=>{e&&(R.insuredPersonVO.age=M(e).diff(new Date,"year"))},Pe=()=>{R.insuredPersonVO.birthday=""},Ve=e=>{te(e).then((({code:e,data:o})=>{"10000"===e&&p(o)&&(o.reduce(((e,o)=>(e[o.productCode]=o,e)),R.productCollection),console.log("stateInfo.productCollection = ",R.productCollection))})).finally((()=>{}))},ye=async(e,o=!1)=>{if(!p(e))return;const{code:t,data:r}=await se({calcProductFactorList:e,...R.insuredPersonVO},{isCustomError:!o});"10000"===t&&r&&p(r)&&r.forEach((e=>{const{holder:t,insuredList:r,productCode:i}=e,{productList:s,...a}=(r||[])[0]||{},[{riskList:d=[],...l}={}]=s||[],u={productCode:i,...l,riskList:d};Ce(e),o&&(Object.assign(R.insuredPersonVO,a),Object.assign(R.holder,t));const n=Z.value.findIndex((e=>e===i));n>-1?R.productList[n]=u:R.productList.push(u),console.log("----add tempdata = ",u)}))},ge=e=>R.productList.filter((o=>o.productCode===e)).map((({productCode:e,riskList:o})=>{const{productPlanInsureVOList:t}=R.productCollection[e]||{},[{insureProductRiskVOList:r}={}]=t||[];return{productCode:e,riskEditVOList:p(o)?o.filter((e=>1===e.riskType)).map((({riskCode:e,riskType:o,annuityDrawValueList:t,paymentPeriodValueList:i,insurancePeriodValueList:s,...a})=>{const d=(null==r?void 0:r.find((o=>o.riskCode===e)))||{};return{insureProductRiskVO:{...d,productRiskInsureLimitVO:{...null==d?void 0:d.productRiskInsureLimitVO,annuityDrawValueList:t,paymentPeriodValueList:i,insurancePeriodValueList:s}}}})):[]}})),Oe=e=>{const{riskList:o,...t}=R.productList.find((o=>o.productCode===e))||{};return{holder:{...R.holder},insuredList:[{...R.insuredPersonVO,productList:[{...t,riskList:o}]}],productCode:e}},je=(e,o)=>{const t=o;$.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?R.productList=R.productList.filter((e=>e.productCode!==t.productCode)).map((e=>({...e,nanoid:B()}))):t.riskList=t.riskList.filter((o=>o.riskId!==e.riskId)),he(t.productCode)}))},_e=(e,o)=>{var t;R.currentProductCode=o.productCode,R.defaultData=[Oe(o.productCode)],null==(t=I.value)||t.open()},Ie=e=>!!p(e)&&e.every((e=>"number"==typeof e?!Number.isNaN(e):Boolean(e))),Re=e=>{var o,t;Promise.all([null==(o=D.value)?void 0:o.validate(),null==(t=T.value)?void 0:t.validate()]).then((()=>{const{holder:o}=R;ie({holder:o,insuredList:[{...R.insuredPersonVO,productList:R.productList}],proposalName:R.insuredPersonVO.proposalName,totalPremium:fe.value,relationUserType:2,id:e}).then((e=>{const{code:o,data:t}=e||{};"10000"===o&&(g.$reset(),P.push({path:"/compositionProposal",query:{id:t}}))}))}))},xe=()=>{j?i(!0):Re(j)},we=(e,o)=>{Re(o?void 0:j)};return v((()=>_.map((e=>R.insuredPersonVO[e]))),Y(((e,o)=>{Ie(e)&&Ie(o)&&(console.log("被保人条件变动"),p(Object.keys(R.productCollection))&&Z.value.forEach((e=>(async e=>{try{const{code:o,data:t,message:r}=await de({calcProductFactorList:ge(e),...R.insuredPersonVO},{isCustomError:!0});"10000"===o&&p(t)?(R.productList.forEach((({productCode:e,riskList:o})=>{const{productRiskDyInsureFactorVOList:r}=t[0]||t.find((o=>o.productCode===e))||{};o.forEach((e=>{const o=r.find((o=>o.riskCode===e.riskCode));Object.assign(e,{...e,...o})}))})),Ce(Oe(e)),he(e)):he(e,r)}catch(o){console.log("Error",o)}})(e))))})),{deep:!0}),v((()=>R.selectedProductCodeList),Y((e=>{if(p(e)){console.log("选择的产品变动了",e),ye(e.map((e=>({productCode:e}))));const o=Object.keys(R.productCollection),t=null==e?void 0:e.filter((e=>!o.includes(e)));p(t)&&Ve(null==t?void 0:t.map((e=>({productCode:e}))))}})),{deep:!0}),F((()=>{const{selectedProduct:e,insuredPersonVO:o}=g.$state;R.selectedProductCodeList=p(e)?e:[]})),S((()=>{if(O){const e=[{productCode:O}];Ve(e),ye(e,!0)}j&&((e={})=>{re(e).then((({code:e,data:o})=>{if("10000"===e&&o){const{insuredList:e,holder:t,proposalName:r}=o||{},[{productList:i,...s}]=e||[];R.holder=t,R.insuredPersonVO={...s,proposalName:r},Ve(i.map((e=>({productCode:e.productCode})))),ye([{productCode:i[0].productCode}],!0),console.log("----query detail ",i),R.productList=i}}))})({id:j})})),(e,t)=>{const p=X,f=Q,k=E,v=m,P=G,y=A("ProPageWrap");return s(),a(y,{class:"page-create-wrapper"},{default:d((()=>{var e;return[l("div",Ae,[u(p,{ref_key:"formRef",ref:D,class:"mb20",model:n(R).insuredPersonVO},{default:d((()=>[u(n(oe),{modelValue:n(R).insuredPersonVO.proposalName,"onUpdate:modelValue":t[0]||(t[0]=e=>n(R).insuredPersonVO.proposalName=e),label:"计划书名称",name:"proposalName",maxlength:20,required:""},null,8,["modelValue"])])),_:1},8,["model"]),u(n(H),{ref_key:"insuredFormRef",ref:T,title:"被保人信息",model:n(R).insuredPersonVO},{default:d((()=>[u(n(oe),{modelValue:n(R).insuredPersonVO.name,"onUpdate:modelValue":t[1]||(t[1]=e=>n(R).insuredPersonVO.name=e),label:"姓名",name:"name",maxlength:20,required:""},null,8,["modelValue"]),u(n(oe),{modelValue:n(R).insuredPersonVO.age,"onUpdate:modelValue":t[3]||(t[3]=e=>n(R).insuredPersonVO.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",onChange:Pe},{extra:d((()=>[u(n(J),{modelValue:n(R).insuredPersonVO.birthday,"onUpdate:modelValue":[t[2]||(t[2]=e=>n(R).insuredPersonVO.birthday=e),be],class:"birthday-field-wrap",label:"出生日期",name:"birthday",required:""},null,8,["modelValue"])])),_:1},8,["modelValue"]),u(n(K),{modelValue:n(R).insuredPersonVO.gender,"onUpdate:modelValue":t[4]||(t[4]=e=>n(R).insuredPersonVO.gender=e),label:"性别",name:"gender",columns:n(ue),required:""},null,8,["modelValue","columns"])])),_:1},8,["model"]),(s(!0),L(C,null,b(n(R).productList,((e,o)=>(s(),a(f,{key:`${e.nanoid}_${o}_${e.productCode}`,class:"product-item-card","show-line":!1,"show-divider":!1},{default:d((()=>{var t;return[u(Se,{"product-risk-list":e.riskList,"product-info":e,"product-num":(null==(t=n(R).productList)?void 0:t.length)-1,"product-data":n(R).productCollection[e.productCode],"error-msg":n(R).productErrorMap[e.productCode],"product-index":o,onUpdateRisk:_e,onDeleteRisk:je},null,8,["product-risk-list","product-info","product-num","product-data","error-msg","product-index"])]})),_:2},1024)))),128)),l("div",Me,[u(k,{activated:"",round:34,onClick:Le},{default:d((()=>[c("添加产品")])),_:1})])]),l("div",$e,[l("span",Be,[c("总保费"),l("span",Qe,V(n(me)?"-":`￥${null==(e=n(fe))?void 0:e.toLocaleString()}`),1)]),l("div",We,[u(v,{disabled:n(me),type:"primary",onClick:xe},{default:d((()=>[c("保存并预览")])),_:1},8,["disabled"])])]),u(P,{show:n(r),"onUpdate:show":t[5]||(t[5]=e=>h(r)?r.value=e:null),actions:o,"cancel-text":"取消","close-on-click-action":"",onCancel:t[6]||(t[6]=e=>n(i)(!1)),onSelect:we},null,8,["show"]),u(pe,{ref_key:"trialPopupRef",ref:I,"data-source":n(ce),"product-code":n(R).currentProductCode,"default-data":n(R).defaultData,onFinish:ve},null,8,["data-source","product-code","default-data"])]})),_:1})}}}),[["__scopeId","data-v-70ea81d0"]]);export{Ge as default};
