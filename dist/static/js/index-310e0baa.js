import{G as e,d as o,r as t,b5 as r,aS as i,c as s,e as a,w as d,f as l,i as u,g as n,j as c,aP as p,B as m,z as f,bL as k,R as v,A as L,a2 as h,U as C,V as b,by as P,E as V,bM as y,aT as g,bN as O,bO as _,bE as j,al as R,am as I,ac as D,L as w,bP as x,h as T,bQ as E,ba as N,a as S,u as U,bR as q,bt as F,o as M,b as A,y as $,D as B,aQ as K,bl as Q,au as W,T as z}from"./index-8cc6bc20.js";import{A as G}from"./index-6ddc5035.js";import{P as Y,a as H,b as J,c as X}from"./index-4489171c.js";import{d as Z}from"./debounce-eed12388.js";import{P as ee,u as oe}from"./ProductTips-7acd6f14.js";import{_ as te}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-0ad03162.js";/* empty css              */import"./bankCard-0b0f481a.js";import{a as re,b as ie,c as se}from"./createProposal-b61a8c4d.js";import{c as ae,p as de,q as le}from"./trial-aff8cb56.js";import{T as ue}from"./index-ca204214.js";import{u as ne}from"./useDicData-46070056.js";import"./pdfh5-008ca364.js";import"./index-f15032ba.js";import"./isObjectLike-a9798079.js";import"./_initCloneObject-0663309f.js";import"./phoneVerify-7868d683.js";import"./index-1fc03f87.js";import"./infoCollection-955886c2.js";import"./cloneDeep-1de8e9b0.js";import"./TrialButton-9336081d.js";import"./index-c015cbe9.js";import"./useOrder-8f501ad2.js";import"./constants-7afb7c3d.js";import"./nextStep-46b81b26.js";import"./core-87518f00.js";import"./constant-8927d485.js";import"./index-dc9dca8b.js";import"./index-8acbb637.js";import"./index-e362e67b.js";import"./empty-c926d8ec.js";import"./box-title-352c51b4.js";import"./index-85be543b.js";import"./echarts-ac920fed.js";import"./Table-ce09816f.js";import"./trial-914572a2.js";const ce={class:"trial-button"};var pe=e(o({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:o,emit:f}){const k=e,v=t(null);r(i,{insuredFactorCodes:["hasSocialInsurance","occupationCodeList"],holderFactorCodes:["birthday","gender","hasSocialInsurance","occupationCodeList"]});const L=(e,o)=>{const{holder:t,insuredList:r,productCode:i}=e||{},{productList:s,...a}=(null==r?void 0:r[0])||{},{riskList:d,...l}=(null==s?void 0:s[0])||{},u=p(null==o?void 0:o.riskPremiumDetailVOList)?null==o?void 0:o.riskPremiumDetailVOList.reduce(((e,o)=>(e[o.riskCode]={initialPremium:o.initialPremium,initialAmount:o.initialAmount},e)),{}):{},n=(d||[]).map((e=>{var o,t;return{...e,initialPremium:null==(o=null==u?void 0:u[e.riskCode])?void 0:o.initialPremium,initialAmount:null==(t=null==u?void 0:u[e.riskCode])?void 0:t.initialAmount}}));return{productCode:i,holder:t,insuredPersonVO:a,insuredProductInfo:{productCode:i,...l,productName:k.productName,occupationCodeList:null==a?void 0:a.occupationCodeList,riskList:n}}};return o({...["open","close"].reduce(((e,o)=>(e[o]=(...e)=>{var t;null==(t=v.value)||t[o](...e)},e)),{}),formatData:L}),(o,t)=>{const r=m;return s(),a(ue,{ref_key:"trialRef",ref:v,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{trialBtn:d((({trialData:e,riskPremium:o})=>[l("div",ce,[u(r,{disabled:!n(v).getTrialSuccessFlag(),type:"primary",onClick:t=>((...e)=>{f("finish",L(e[0],e[1]))})(e,o)},{default:d((()=>[c("确定")])),_:2},1032,["disabled","onClick"])])])),_:1},8,["product-info"])}}}),[["__scopeId","data-v-02887eb0"]]);const me={class:"com-risk-list-wrapper"},fe=(e=>(R("data-v-7d3c3028"),e=e(),I(),e))((()=>l("div",{class:"popup-title"},"选择附加险",-1))),ke={class:"risk-list"},ve={class:"cell-title"},Le={class:"title"},he={class:"footer-button"};var Ce=e(o({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:o}){const r=e,i=t([]),p=t([]),R=t([...r.disabled]),I=f({show:r.show,currentChecked:[...r.modelValue]}),D=e=>{var o,t,s;if(R.value.includes(e))return;((e,o)=>{if(!r.collocationList.length)return o?void(I.currentChecked=[]):void I.currentChecked.push(e);let t=I.currentChecked,i=R.value;o?(r.collocationList.forEach((o=>{e===o.riskId&&(2===o.collocationType?t=t.filter((t=>t!==o.collocationRiskId||t!==e)):3===o.collocationType?(t=t.filter((o=>o!==e)),i=i.filter((e=>e!==o.collocationRiskId))):t=t.filter((o=>o!==e)))})),I.currentChecked=t,R.value=i):(r.collocationList.forEach((r=>{e===r.riskId&&(o||(2===r.collocationType?t.push(r.collocationRiskId):3===r.collocationType&&i.push(r.collocationRiskId),t.push(e)))})),I.currentChecked.push(...t),R.value=i)})(e,I.currentChecked.includes(e)),null==(s=null==(t=null==(o=null==i?void 0:i.value)?void 0:o[e])?void 0:t.toggle)||s.call(t)},w=()=>{o("close")},x=()=>{const e=r.riskList.filter((e=>I.currentChecked.includes(e.id)));o("update:modelValue",[...new Set(p.value)]),o("finished",e,R.value),o("close")};return k((()=>{i.value=[]})),v((()=>I.currentChecked),(e=>{p.value=e}),{deep:!0,immediate:!0}),v((()=>r.modelValue),(e=>{p.value=e||[],R.value.push(...e||[])}),{deep:!0,immediate:!0}),(o,t)=>{const r=y,f=g,k=O,v=_,T=m,E=j;return s(),L("div",me,[u(E,{show:n(I).show,"onUpdate:show":t[1]||(t[1]=e=>n(I).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:w},{default:d((()=>[fe,l("div",ke,[u(v,{modelValue:n(p),"onUpdate:modelValue":t[0]||(t[0]=e=>h(p)?p.value=e:null)},{default:d((()=>[u(k,{inset:""},{default:d((()=>[(s(!0),L(C,null,b(e.riskList,(e=>(s(),a(f,{key:e.id,title:e.riskName,disabled:n(R).includes(e.id),onClick:o=>D(e.id)},{"right-icon":d((()=>[u(r,{ref_for:!0,ref:o=>n(i)[e.id]=o,shape:"square",disabled:n(R).includes(e.id),name:e.id,onClick:P((o=>D(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:d((()=>[l("div",ve,[l("div",Le,V(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),l("div",he,[u(T,{type:"primary",disabled:!n(I).currentChecked.length,block:"",onClick:x},{default:d((()=>[c("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const be=e=>(R("data-v-3bb3df6c"),e=e(),I(),e),Pe={class:"com-product-list-wrapper"},Ve={class:"risk-item-wrapper"},ye={class:"content"},ge={class:"risk-premium"},Oe={class:"premium"},_e={class:"risk-factor"},je={class:"factor"},Re={class:"factor-value"},Ie=be((()=>l("span",{class:"factor-name"}," 保额(元) ",-1))),De={class:"factor"},we={class:"factor-value"},xe=be((()=>l("span",{class:"factor-name"}," 保障期间 ",-1))),Te={class:"factor"},Ee={class:"factor-value"},Ne=be((()=>l("span",{class:"factor-name"}," 缴费期间 ",-1))),Se={key:0,class:"operate-bar"},Ue={key:0,class:"premium-total"},qe={class:"premium"},Fe=o({name:"ProductList"});var Me=e(o({...Fe,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0},errorMsg:{default:""}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:o}){const r=e,[i,p]=D(),m=t({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),f=ne("RISK_PAYMENT_PERIOD"),k=ne("RISK_INSURANCE_PERIOD"),h=w((()=>{var e,o;return(null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]}));w((()=>{var e,o;const t=r.productRiskList.map((e=>e.riskId)),i=((null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList)||[]).filter((e=>t.includes(e.id)&&1===e.collocationType));return h.value.length-i.length}));const P=w((()=>e=>{var o,t;const i=(null==(t=null==(o=r.productData)?void 0:o.productRiskVoList)?void 0:t[0].riskDetailVOList.find((o=>o.id!==e)))||{};let s=!1;return s=!!r.productNum||2===i.riskType&&1===i.collocationType,s})),y=w((()=>{var e,o;return(null==(o=null==(e=r.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),g=w((()=>y.value.collocationVOList||[])),O=(e,t)=>{const i=e.map((e=>e.id)).filter((e=>!m.value.disabledList.includes(e)));o("addRiderRisk",i,r.productInfo)};return v((()=>r.productInfo),(e=>{let o=0;(e.riskList||[]).forEach((e=>{o+=e.initialPremium})),m.value.totalPremium=o}),{deep:!0,immediate:!0}),v((()=>r.productRiskList),(e=>{const o=[],t=[],r=[];(e||[]).forEach((e=>{1===e.riskType?o.unshift(e):(t.push(e.riskId),r.push(e.riskId),o.push(e))})),m.value.disabledList=t,m.value.checkedList=r,m.value.productRiskList=o}),{deep:!0,immediate:!0}),(t,v)=>{var y,_,j;const R=E,I=N;return s(),L("div",Pe,[(s(!0),L(C,null,b(n(m).productRiskList,(t=>{var i,p;return s(),L("div",{key:t.riskId},[l("div",Ve,[u(R,{"risk-type":t.riskType,title:t.riskName,class:"no-border"},null,8,["risk-type","title"]),l("div",ye,[l("div",ge,[c(" 保费:"),l("span",Oe,V(!e.errorMsg&&t.initialPremium?`￥${null==(i=t.initialPremium)?void 0:i.toLocaleString()}`:"-"),1)]),l("div",_e,[l("div",je,[l("span",Re,V((null==(p=t.initialAmount)?void 0:p.toLocaleString())||"-"),1),Ie]),l("div",De,[l("span",we,V(n(x)(n(k),t.coveragePeriod)||"-"),1),xe]),l("div",Te,[l("span",Ee,V(n(x)(n(f),t.chargePeriod)||"-"),1),Ne])]),2!==t.riskType?(s(),L("div",Se,[n(P)(t.riskId)?(s(),a(I,{key:0,round:32,class:"border",onClick:e=>{o("deleteRisk",t,r.productInfo)}},{default:d((()=>[c("删除")])),_:2},1032,["onClick"])):T("",!0),u(I,{activated:"",round:32,onClick:e=>{o("updateRisk",t,r.productInfo)}},{default:d((()=>[c("修改")])),_:2},1032,["onClick"])])):T("",!0)])])])})),128)),n(m).productRiskList.length>1?(s(),L("div",Ue,[c(" 保费: "),l("span",qe,V(!e.errorMsg&&(null==(y=n(m))?void 0:y.totalPremium)?`￥${null==(j=null==(_=n(m))?void 0:_.totalPremium)?void 0:j.toLocaleString()}`:"-"),1)])):T("",!0),n(i)?(s(),a(Ce,{key:1,modelValue:n(m).checkedList,"onUpdate:modelValue":v[0]||(v[0]=e=>n(m).checkedList=e),show:n(i),disabled:n(m).disabledList,"risk-list":n(h),"collocation-list":n(g),onFinished:O,onClose:v[1]||(v[1]=e=>n(p)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):T("",!0),u(ee,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-3bb3df6c"]]);const Ae={class:"container"},$e={class:"operate-bar"},Be={class:"footer-bar"},Ke={class:"trial-result"},Qe={class:"result-num"},We={class:"trial-operate"},ze=o({name:"CreateProposal"});var Ge=e(o({...ze,setup(e){const o=[{name:"保存修改"},{name:"另存为新计划书"}];D();const[r,i]=D(),k=t({holder:{},insuredList:[{name:"",gender:"",birthday:"",productList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),P=S(),y=U(),g=oe(),{productCode:O,id:_}=y.query,j=["age","gender","birthday"],R=t(null),I=f({selectedProductCodeList:[],insuredPersonVO:{},currentProductCode:"",holder:{},productList:[],productCollection:{},productErrorMap:{},defaultData:null}),x=t(null),T=t(null),E=w((()=>I.productList.map((e=>e.productCode)).filter((e=>Boolean(e))))),ee=w((()=>{const{productPlanInsureVOList:e}=I.productCollection[O]||{},[{insureProductRiskVOList:o=[]}={}]=e||[],{riskInsureLimitVO:t}=(null==o?void 0:o.find((e=>1===e.riskType)))||{};return null==t?void 0:t.sexLimit})),ue=w((()=>"-1"!==ee.value&&ee.value?q.filter((e=>ee.value===e.value)):q)),ne=w((()=>{var e;return(null==(e=I.productCollection)?void 0:e[I.currentProductCode])||{}})),ce=w((()=>{var e,o;return(null==(o=null==(e=ne.value)?void 0:e.productPlanInsureVOList)?void 0:o[0])||{}})),me=w((()=>Boolean(Object.values(I.productErrorMap).join("")))),fe=w((()=>I.productList.reduce(((e,o)=>e+o.riskList.reduce(((e,o)=>e+(o.initialPremium||0)),0)),0))),ke=e=>{const o=I.productList.findIndex((o=>o.productCode===e.productCode)),t={...e.insuredProductInfo,nanoid:K()};if(-1===o)return I.productList.push(t),!1;const r=I.productList[o],{riskList:i,...s}=t;console.log("---hebing",e),I.productList[o]={...t,...s,riskList:p(i)?i.map((e=>({...r.riskList.find((o=>o.riskCode===e.riskCode)),...e}))):[]}},ve=e=>{var o;Object.assign(I.holder,e.holder),Object.assign(I.insuredPersonVO,e.insuredPersonVO),ke(e),null==(o=R.value)||o.close()},Le=()=>{g.setProposalInfo(k.value),g.setExcludeProduct(E.value),g.setInsuredPersonVO(I.insuredPersonVO),P.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})},he=(e,o="")=>{I.productErrorMap[e]=o},Ce=e=>{console.log("-----trailProduct = ",e),de(e,{isCustomError:!0}).then((({code:o,data:t,message:r})=>{var i;o===W&&t?((null==t?void 0:t.errorInfo)&&z(`${null==t?void 0:t.errorInfo}`),p(t.riskPremiumDetailVOList)&&ke(null==(i=R.value)?void 0:i.formatData(e,t)),he(e.productCode)):he(e.productCode,r)}))},be=e=>{e&&(I.insuredPersonVO.age=$(e).diff(new Date,"year"))},Pe=()=>{I.insuredPersonVO.birthday=""},Ve=e=>{re(e).then((({code:e,data:o})=>{"10000"===e&&p(o)&&(o.reduce(((e,o)=>(e[o.productCode]=o,e)),I.productCollection),console.log("stateInfo.productCollection = ",I.productCollection))})).finally((()=>{}))},ye=async(e,o=!1)=>{if(!p(e))return;const{code:t,data:r}=await ae({calcProductFactorList:e,...I.insuredPersonVO},{isCustomError:!o});"10000"===t&&r&&p(r)&&r.forEach((e=>{const{holder:t,insuredList:r,productCode:i}=e,{productList:s,...a}=(r||[])[0]||{},[{riskList:d=[],...l}={}]=s||[],u={productCode:i,...l,riskList:d};Ce(e),o&&(Object.assign(I.insuredPersonVO,a),Object.assign(I.holder,t));const n=E.value.findIndex((e=>e===i));n>-1?I.productList[n]=u:I.productList.push(u),console.log("----add tempdata = ",u)}))},ge=e=>I.productList.filter((o=>o.productCode===e)).map((({productCode:e,riskList:o})=>{const{productPlanInsureVOList:t}=I.productCollection[e]||{},[{insureProductRiskVOList:r}={}]=t||[];return{productCode:e,riskEditVOList:p(o)?o.filter((e=>1===e.riskType)).map((({riskCode:e,riskType:o,annuityDrawValueList:t,paymentPeriodValueList:i,insurancePeriodValueList:s,...a})=>{const d=(null==r?void 0:r.find((o=>o.riskCode===e)))||{};return{insureProductRiskVO:{...d,productRiskInsureLimitVO:{...null==d?void 0:d.productRiskInsureLimitVO,annuityDrawValueList:t,paymentPeriodValueList:i,insurancePeriodValueList:s}}}})):[]}})),Oe=e=>{const{riskList:o,...t}=I.productList.find((o=>o.productCode===e))||{};return{holder:{...I.holder},insuredList:[{...I.insuredPersonVO,productList:[{...t,riskList:o}]}],productCode:e}},_e=(e,o)=>{const t=o;B.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?I.productList=I.productList.filter((e=>e.productCode!==t.productCode)).map((e=>({...e,nanoid:K()}))):t.riskList=t.riskList.filter((o=>o.riskId!==e.riskId)),he(t.productCode)}))},je=(e,o)=>{var t;I.currentProductCode=o.productCode,I.defaultData=[Oe(o.productCode)],null==(t=R.value)||t.open()},Re=e=>!!p(e)&&e.every((e=>"number"==typeof e?!Number.isNaN(e):Boolean(e))),Ie=e=>{var o,t;Promise.all([null==(o=x.value)?void 0:o.validate(),null==(t=T.value)?void 0:t.validate()]).then((()=>{const{holder:o}=I;se({holder:o,insuredList:[{...I.insuredPersonVO,productList:I.productList}],proposalName:I.insuredPersonVO.proposalName,totalPremium:fe.value,relationUserType:2,id:e}).then((e=>{const{code:o,data:t}=e||{};"10000"===o&&(g.$reset(),P.push({path:"/compositionProposal",query:{id:t}}))}))}))},De=()=>{_?i(!0):Ie(_)},we=(e,o)=>{Ie(o?void 0:_)};return v((()=>j.map((e=>I.insuredPersonVO[e]))),Z(((e,o)=>{Re(e)&&Re(o)&&(console.log("被保人条件变动"),p(Object.keys(I.productCollection))&&E.value.forEach((e=>(async e=>{try{const{code:o,data:t,message:r}=await le({calcProductFactorList:ge(e),...I.insuredPersonVO},{isCustomError:!0});"10000"===o&&p(t)?(I.productList.forEach((({productCode:e,riskList:o})=>{const{productRiskDyInsureFactorVOList:r}=t[0]||t.find((o=>o.productCode===e))||{};o.forEach((e=>{const o=r.find((o=>o.riskCode===e.riskCode));Object.assign(e,{...e,...o})}))})),Ce(Oe(e)),he(e)):he(e,r)}catch(o){console.log("Error",o)}})(e))))})),{deep:!0}),v((()=>I.selectedProductCodeList),Z((e=>{if(p(e)){console.log("选择的产品变动了",e),ye(e.map((e=>({productCode:e}))));const o=Object.keys(I.productCollection),t=null==e?void 0:e.filter((e=>!o.includes(e)));p(t)&&Ve(null==t?void 0:t.map((e=>({productCode:e}))))}})),{deep:!0}),F((()=>{const{selectedProduct:e,insuredPersonVO:o}=g.$state;I.selectedProductCodeList=p(e)?e:[]})),M((()=>{if(O){const e=[{productCode:O}];Ve(e),ye(e,!0)}_&&((e={})=>{ie(e).then((({code:e,data:o})=>{if("10000"===e&&o){const{insuredList:e,holder:t,proposalName:r}=o||{},[{productList:i,...s}]=e||[];I.holder=t,I.insuredPersonVO={...s,proposalName:r},Ve(i.map((e=>({productCode:e.productCode})))),ye([{productCode:i[0].productCode}],!0),console.log("----query detail ",i),I.productList=i}}))})({id:_})})),(e,t)=>{const p=X,f=Q,k=N,v=m,P=G,y=A("ProPageWrap");return s(),a(y,{class:"page-create-wrapper"},{default:d((()=>{var e;return[l("div",Ae,[u(p,{ref_key:"formRef",ref:x,class:"mb20",model:n(I).insuredPersonVO},{default:d((()=>[u(n(te),{modelValue:n(I).insuredPersonVO.proposalName,"onUpdate:modelValue":t[0]||(t[0]=e=>n(I).insuredPersonVO.proposalName=e),label:"计划书名称",name:"proposalName",maxlength:20,required:""},null,8,["modelValue"])])),_:1},8,["model"]),u(n(Y),{ref_key:"insuredFormRef",ref:T,title:"被保人信息",model:n(I).insuredPersonVO},{default:d((()=>[u(n(te),{modelValue:n(I).insuredPersonVO.name,"onUpdate:modelValue":t[1]||(t[1]=e=>n(I).insuredPersonVO.name=e),label:"姓名",name:"name",maxlength:20,required:""},null,8,["modelValue"]),u(n(te),{modelValue:n(I).insuredPersonVO.age,"onUpdate:modelValue":t[3]||(t[3]=e=>n(I).insuredPersonVO.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",onChange:Pe},{extra:d((()=>[u(n(H),{modelValue:n(I).insuredPersonVO.birthday,"onUpdate:modelValue":[t[2]||(t[2]=e=>n(I).insuredPersonVO.birthday=e),be],class:"birthday-field-wrap",label:"出生日期",name:"birthday",required:""},null,8,["modelValue"])])),_:1},8,["modelValue"]),u(n(J),{modelValue:n(I).insuredPersonVO.gender,"onUpdate:modelValue":t[4]||(t[4]=e=>n(I).insuredPersonVO.gender=e),label:"性别",name:"gender",columns:n(ue),required:""},null,8,["modelValue","columns"])])),_:1},8,["model"]),(s(!0),L(C,null,b(n(I).productList,((e,o)=>(s(),a(f,{key:`${e.nanoid}_${o}_${e.productCode}`,class:"product-item-card","show-line":!1,"show-divider":!1},{default:d((()=>{var o;return[u(Me,{"product-risk-list":e.riskList,"product-info":e,"product-num":(null==(o=n(I).productList)?void 0:o.length)-1,"product-data":n(I).productCollection[e.productCode],"error-msg":n(I).productErrorMap[e.productCode],onUpdateRisk:je,onDeleteRisk:_e},null,8,["product-risk-list","product-info","product-num","product-data","error-msg"])]})),_:2},1024)))),128)),l("div",$e,[u(k,{activated:"",round:34,onClick:Le},{default:d((()=>[c("添加产品")])),_:1})])]),l("div",Be,[l("span",Ke,[c("总保费"),l("span",Qe,V(n(me)?"-":`￥${null==(e=n(fe))?void 0:e.toLocaleString()}`),1)]),l("div",We,[u(v,{disabled:n(me),type:"primary",onClick:De},{default:d((()=>[c("保存并预览")])),_:1},8,["disabled"])])]),u(P,{show:n(r),"onUpdate:show":t[5]||(t[5]=e=>h(r)?r.value=e:null),actions:o,"cancel-text":"取消","close-on-click-action":"",onCancel:t[6]||(t[6]=e=>n(i)(!1)),onSelect:we},null,8,["show"]),u(pe,{ref_key:"trialPopupRef",ref:R,"data-source":n(ce),"product-code":n(I).currentProductCode,"default-data":n(I).defaultData,onFinish:ve},null,8,["data-source","product-code","default-data"])]})),_:1})}}}),[["__scopeId","data-v-22b092e9"]]);export{Ge as default};
