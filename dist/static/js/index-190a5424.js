import{G as e,d as o,r,c as s,e as t,w as a,f as d,i,g as l,j as u,B as n,z as c,bI as p,R as m,A as f,a2 as k,U as v,V as P,bv as L,E as C,bJ as b,aC as V,bK as h,bL as O,bB as y,al as I,am as R,ab as g,L as j,bM as _,h as D,bN as w,b7 as x,a as T,u as E,bO as N,o as U,bq as q,br as S,b as M,aB as $,aA as F,y as H,D as B,$ as A,bi as K,aw as Q,T as W}from"./index-a6d2417f.js";import{A as z}from"./index-dc7bb627.js";import{P as G,a as J,b as Y,c as X}from"./index-46a90521.js";import{d as Z}from"./debounce-eed12388.js";import{P as ee,u as oe}from"./ProductTips-289bf435.js";import{_ as re}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-853febee.js";/* empty css              */import"./bankCard-793da039.js";import{q as se,a as te}from"./createProposal-78a44a42.js";import{a as ae,q as de,p as ie}from"./trial-c2b3eb15.js";import{T as le}from"./index-60e134d8.js";import{u as ue}from"./useDicData-819ab29f.js";import"./pdfh5-008ca364.js";import"./index-d49f108e.js";import"./isObjectLike-a9798079.js";import"./_initCloneObject-0663309f.js";import"./phoneVerify-3b12bd3e.js";import"./index-4ac17a9c.js";import"./cloneDeep-1de8e9b0.js";import"./infoCollection-501575a5.js";import"./index-c9396101.js";import"./utils-ee477f02.js";import"./index-1ebb918c.js";import"./trial-9ce80454.js";import"./utils-bf3a4bda.js";import"./index-4cdfc0a2.js";import"./empty-c926d8ec.js";import"./box-title-21a69675.js";import"./index-0761af4c.js";import"./echarts-ac920fed.js";import"./Table-f5dac2ad.js";import"./useOrder-7527003c.js";import"./utils-e4ae1cd8.js";import"./constants-7afb7c3d.js";import"./nextStep-078c297d.js";import"./core-cb81f132.js";import"./constant-8927d485.js";const ne={class:"trial-button"};var ce=e(o({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:o,emit:c}){const p=e,m=r(null),f=(e,o)=>{var r;console.log("trialData",e);const{holder:s,insuredVOList:t,productCode:a}=e||{},{personVO:d,productPlanVOList:i}=(null==t?void 0:t[0])||{},l=((null==(r=null==i?void 0:i[0])?void 0:r.riskVOList)||[]).map((e=>{var r,s;return{...e,premium:null==(r=o[e.riskCode])?void 0:r.premium,amount:null==(s=o[e.riskCode])?void 0:s.amount}}));return{productCode:a,proposalHolder:null==s?void 0:s.personVO,insuredPersonVO:d,insuredProductInfo:{productCode:a,productName:p.productName,occupationCodeList:null==d?void 0:d.occupationCodeList,proposalProductRiskList:l}}};return o({...["open","close"].reduce(((e,o)=>(e[o]=(...e)=>{var r;null==(r=m.value)||r[o](...e)},e)),{}),formatData:f}),(o,r)=>{const p=n;return s(),t(le,{ref_key:"trialRef",ref:m,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{default:a((({trialData:e,riskPremium:o})=>[d("div",ne,[i(p,{disabled:!l(m).getTrialSuccessFlag(),type:"primary",onClick:r=>((...e)=>{c("finish",f(e[0],e[1]))})(e,o)},{default:a((()=>[u("确定")])),_:2},1032,["disabled","onClick"])])])),_:1},8,["product-info"])}}}),[["__scopeId","data-v-b3b2eee4"]]);const pe={class:"com-risk-list-wrapper"},me=(e=>(I("data-v-7d3c3028"),e=e(),R(),e))((()=>d("div",{class:"popup-title"},"选择附加险",-1))),fe={class:"risk-list"},ke={class:"cell-title"},ve={class:"title"},Pe={class:"footer-button"};var Le=e(o({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:o}){const I=e,R=r([]),g=r([]),j=r([...I.disabled]),_=c({show:I.show,currentChecked:[...I.modelValue]}),D=e=>{var o,r,s;if(j.value.includes(e))return;((e,o)=>{if(!I.collocationList.length)return o?void(_.currentChecked=[]):void _.currentChecked.push(e);let r=_.currentChecked,s=j.value;o?(I.collocationList.forEach((o=>{e===o.riskId&&(2===o.collocationType?r=r.filter((r=>r!==o.collocationRiskId||r!==e)):3===o.collocationType?(r=r.filter((o=>o!==e)),s=s.filter((e=>e!==o.collocationRiskId))):r=r.filter((o=>o!==e)))})),_.currentChecked=r,j.value=s):(I.collocationList.forEach((t=>{e===t.riskId&&(o||(2===t.collocationType?r.push(t.collocationRiskId):3===t.collocationType&&s.push(t.collocationRiskId),r.push(e)))})),_.currentChecked.push(...r),j.value=s)})(e,_.currentChecked.includes(e)),null==(s=null==(r=null==(o=null==R?void 0:R.value)?void 0:o[e])?void 0:r.toggle)||s.call(r)},w=()=>{o("close")},x=()=>{const e=I.riskList.filter((e=>_.currentChecked.includes(e.id)));o("update:modelValue",[...new Set(g.value)]),o("finished",e,j.value),o("close")};return p((()=>{R.value=[]})),m((()=>_.currentChecked),(e=>{g.value=e}),{deep:!0,immediate:!0}),m((()=>I.modelValue),(e=>{g.value=e||[],j.value.push(...e||[])}),{deep:!0,immediate:!0}),(o,r)=>{const c=b,p=V,m=h,I=O,T=n,E=y;return s(),f("div",pe,[i(E,{show:l(_).show,"onUpdate:show":r[1]||(r[1]=e=>l(_).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:w},{default:a((()=>[me,d("div",fe,[i(I,{modelValue:l(g),"onUpdate:modelValue":r[0]||(r[0]=e=>k(g)?g.value=e:null)},{default:a((()=>[i(m,{inset:""},{default:a((()=>[(s(!0),f(v,null,P(e.riskList,(e=>(s(),t(p,{key:e.id,title:e.riskName,disabled:l(j).includes(e.id),onClick:o=>D(e.id)},{"right-icon":a((()=>[i(c,{ref_for:!0,ref:o=>l(R)[e.id]=o,shape:"square",disabled:l(j).includes(e.id),name:e.id,onClick:L((o=>D(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:a((()=>[d("div",ke,[d("div",ve,C(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),d("div",Pe,[i(T,{type:"primary",disabled:!l(_).currentChecked.length,block:"",onClick:x},{default:a((()=>[u("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const Ce=e=>(I("data-v-484514a8"),e=e(),R(),e),be={class:"com-product-list-wrapper"},Ve={class:"risk-item-wrapper"},he={class:"content"},Oe={class:"risk-premium"},ye={class:"premium"},Ie={class:"risk-factor"},Re={class:"factor"},ge={class:"factor-value"},je=Ce((()=>d("span",{class:"factor-name"}," 保额(元) ",-1))),_e={class:"factor"},De={class:"factor-value"},we=Ce((()=>d("span",{class:"factor-name"}," 保障期间 ",-1))),xe={class:"factor"},Te={class:"factor-value"},Ee=Ce((()=>d("span",{class:"factor-name"}," 缴费期间 ",-1))),Ne={key:0,class:"operate-bar"},Ue=Ce((()=>d("span",{class:"btn-plus"},"+",-1))),qe={key:0,class:"premium-total"},Se={class:"premium"},Me=o({name:"ProductList"});var $e=e(o({...Me,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0},errorMsg:{default:""}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:o}){const n=e,[c,p]=g(),k=r({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),L=ue("RISK_PAYMENT_PERIOD"),b=ue("RISK_INSURANCE_PERIOD"),V=j((()=>{var e,o;return(null==(o=null==(e=n.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]})),h=j((()=>{var e,o;const r=n.productRiskList.map((e=>e.riskId)),s=((null==(o=null==(e=n.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList)||[]).filter((e=>r.includes(e.id)&&1===e.collocationType));return V.value.length-s.length})),O=j((()=>e=>{var o,r;const s=(null==(r=null==(o=n.productData)?void 0:o.productRiskVoList)?void 0:r[0].riskDetailVOList.find((o=>o.id!==e)))||{};let t=!1;return t=!!n.productNum||2===s.riskType&&1===s.collocationType,t})),y=j((()=>{var e,o;return(null==(o=null==(e=n.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),I=j((()=>y.value.collocationVOList||[])),R=(e,r)=>{const s=e.map((e=>e.id)).filter((e=>!k.value.disabledList.includes(e)));o("addRiderRisk",s,n.productInfo)};return m((()=>n.productInfo),(e=>{var o;let r=0;(e.proposalProductRiskList||[]).forEach((e=>{r+=e.premium})),null==(o=n.pickProductPremium)||o.call(n,{[`${e.productCode}`]:r}),k.value.totalPremium=r}),{deep:!0,immediate:!0}),m((()=>n.productRiskList),(e=>{const o=[],r=[],s=[];(e||[]).forEach((e=>{1===e.riskType?o.unshift(e):(r.push(e.riskId),s.push(e.riskId),o.push(e))})),k.value.disabledList=r,k.value.checkedList=s,k.value.productRiskList=o}),{deep:!0,immediate:!0}),(r,m)=>{var y,g,j;const T=w,E=x;return s(),f("div",be,[(s(!0),f(v,null,P(l(k).productRiskList,(r=>{var c,m;return s(),f("div",{key:r.riskId},[d("div",Ve,[i(T,{"risk-type":r.riskType,title:r.riskName,class:"no-border"},null,8,["risk-type","title"]),d("div",he,[d("div",Oe,[u(" 保费:"),d("span",ye,C(!e.errorMsg&&r.premium?`￥${null==(c=r.premium)?void 0:c.toLocaleString()}`:"-"),1)]),d("div",Ie,[d("div",Re,[d("span",ge,C((null==(m=r.amount)?void 0:m.toLocaleString())||"-"),1),je]),d("div",_e,[d("span",De,C(l(_)(l(b),r.coveragePeriod)||"-"),1),we]),d("div",xe,[d("span",Te,C(l(_)(l(L),r.chargePeriod)||"-"),1),Ee])]),2!==r.riskType?(s(),f("div",Ne,[l(O)(r.riskId)?(s(),t(E,{key:0,round:32,class:"border",onClick:e=>{o("deleteRisk",r,n.productInfo)}},{default:a((()=>[u("删除")])),_:2},1032,["onClick"])):D("",!0),l(h)?(s(),t(E,{key:1,activated:"",round:32,class:"btn-rider-risk",onClick:e=>{return o=r,p(!0),void(k.value.currentRiskRecord=o);var o}},{default:a((()=>[Ue,u(" 附加险")])),_:2},1032,["onClick"])):D("",!0),i(E,{activated:"",round:32,onClick:e=>{o("updateRisk",r,n.productInfo)}},{default:a((()=>[u("修改")])),_:2},1032,["onClick"])])):D("",!0)])])])})),128)),l(k).productRiskList.length>1?(s(),f("div",qe,[u(" 保费: "),d("span",Se,C(!e.errorMsg&&(null==(y=l(k))?void 0:y.totalPremium)?`￥${null==(j=null==(g=l(k))?void 0:g.totalPremium)?void 0:j.toLocaleString()}`:"-"),1)])):D("",!0),l(c)?(s(),t(Le,{key:1,modelValue:l(k).checkedList,"onUpdate:modelValue":m[0]||(m[0]=e=>l(k).checkedList=e),show:l(c),disabled:l(k).disabledList,"risk-list":l(V),"collocation-list":l(I),onFinished:R,onClose:m[1]||(m[1]=e=>l(p)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):D("",!0),i(ee,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-484514a8"]]);const Fe={class:"container"},He={class:"operate-bar"},Be={class:"footer-bar"},Ae={class:"trial-result"},Ke={class:"result-num"},Qe={class:"trial-operate"},We=o({name:"CreateProposal"});var ze=e(o({...We,setup(e){const o=[{name:"保存修改"},{name:"另存为新计划书"}],[p,L]=g(),[b,V]=g(),h=r({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),O=T(),y=E(),I=oe();y.query;const R=["age","gender","birthday"],_=["name",...R].reduce(((e,o)=>(e[o]={hidden:!0},e)),{}),D=r(null),w=r({productCode:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),ee=c({selectedProductCodeList:[],insuredPersonVO:{},currentProductCode:"",proposalHolder:{},proposalInsuredProductList:[],productCollection:{},productErrorMap:{},defaultData:null,productCodeInQuery:""}),le=r(null),ue=r(null),ne=j((()=>ee.proposalInsuredProductList.map((e=>e.productCode)).filter((e=>Boolean(e))))),pe=j((()=>{const{productPlanInsureVOList:e}=ee.productCollection[ee.productCodeInQuery]||{},[{insureProductRiskVOList:o}={}]=e||[],{riskInsureLimitVO:r}=(null==o?void 0:o.find((e=>1===e.riskType)))||{};return null==r?void 0:r.sexLimit})),me=j((()=>"-1"===pe.value?N:N.filter((e=>pe.value===e.value)))),fe=j((()=>{var e;return(null==(e=ee.productCollection)?void 0:e[ee.currentProductCode])||{}})),ke=j((()=>{var e,o;return(null==(o=null==(e=fe.value)?void 0:e.productPlanInsureVOList)?void 0:o[0])||{}})),ve=(e={})=>{Object.assign(w.value.productPremium,e),h.value.totalPremium=Object.values(w.value.productPremium).reduce(((e,o)=>e+o),0)},Pe=j((()=>Boolean(Object.values(ee.productErrorMap).join("")))),Le=j((()=>ee.proposalInsuredProductList.reduce(((e,o)=>e+o.proposalProductRiskList.reduce(((e,o)=>e+(o.premium||0)),0)),0))),Ce=(e,o=!0)=>{var r;const s=ee.proposalInsuredProductList.findIndex((o=>o.productCode===e.productCode));o&&(Object.assign(ee.proposalHolder,e.proposalHolder),Object.assign(ee.insuredPersonVO,e.insuredPersonVO));const t={...e.insuredProductInfo,nanoid:$()};if(s>-1){const e=ee.proposalInsuredProductList[s],{proposalProductRiskList:o}=t;ee.proposalInsuredProductList[s]={...t,proposalProductRiskList:F(o)?o.map((o=>({...e.proposalProductRiskList.find((e=>e.riskCode===o.riskCode)),...o}))):[]}}else ee.proposalInsuredProductList.push(t);null==(r=D.value)||r.close()},be=()=>{I.setProposalInfo(h.value),I.setTrialData([]),I.setExcludeProduct(ne.value),I.setInsuredPersonVO(ee.insuredPersonVO),O.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})},Ve=e=>{ie(e).then((({code:o,data:r})=>{var s;if(o===Q&&r){(null==r?void 0:r.errorInfo)&&W(`${null==r?void 0:r.errorInfo}`);const o={};F(r.riskPremiumDetailVOList)&&(r.riskPremiumDetailVOList.forEach((e=>{o[e.riskCode]={premium:e.premium,amount:e.amount}})),Ce(null==(s=D.value)?void 0:s.formatData(e,o),!1))}}))},he=e=>{e&&(ee.insuredPersonVO.age=H(e).diff(new Date,"year"))},Oe=()=>{ee.insuredPersonVO.birthday=""},ye=e=>{se(e).then((({code:e,data:o})=>{"10000"===e&&F(o)&&Object.assign(ee.productCollection,o.reduce(((e,o)=>(e[o.productCode]=o,e)),{}))})).finally((()=>{}))},Ie=async(e,o=!1)=>{if(!F(e))return;const{code:r,data:s}=await ae({calcProductFactorList:e,...ee.insuredPersonVO},{isCustomError:!o});"10000"===r&&s&&F(s)&&s.forEach((e=>{const{holder:r,insuredVOList:s,productCode:t}=e,{personVO:a,productPlanVOList:d}=(s||[])[0]||{},[{riskVOList:i}={}]=d||[],l={productCode:t,proposalProductRiskList:i};Ve(e),o&&(Object.assign(ee.insuredPersonVO,a),Object.assign(ee.proposalHolder,null==r?void 0:r.persionVo));const u=ne.value.findIndex((e=>e===t));u>-1?ee.proposalInsuredProductList[u]=l:ee.proposalInsuredProductList.push(l)}))},Re=e=>ee.proposalInsuredProductList.filter((o=>o.productCode===e)).map((({productCode:e,proposalProductRiskList:o})=>{const{productPlanInsureVOList:r}=ee.productCollection[e]||{},[{insureProductRiskVOList:s}={}]=r||[];return{productCode:e,riskEditVOList:F(o)?o.filter((e=>1===e.riskType)).map((({riskCode:e,riskType:o,annuityDrawValueList:r,paymentPeriodValueList:t,insurancePeriodValueList:a,...d})=>{const i=(null==s?void 0:s.find((o=>o.riskCode===e)))||{};return{insureProductRiskVO:{...i,productRiskInsureLimitVO:{...null==i?void 0:i.productRiskInsureLimitVO,annuityDrawValueList:r,paymentPeriodValueList:t,insurancePeriodValueList:a}}}})):[]}})),ge=e=>{const o=ee.proposalInsuredProductList.find((o=>o.productCode===e))||{};return{holder:{personVO:ee.proposalHolder},insuredVOList:[{personVO:ee.insuredPersonVO,config:_,productPlanVOList:[{riskVOList:null==o?void 0:o.proposalProductRiskList}]}],productCode:o.productCode}},je=(e,o)=>{const r=o;B.confirm({message:"确认删除该产品？"}).then((()=>{1===e.riskType?(ee.proposalInsuredProductList=ee.proposalInsuredProductList.filter((e=>e.productCode!==r.productCode)).map((e=>({...e,nanoid:$()}))),ve({[r.productCode]:0})):r.proposalProductRiskList=r.proposalProductRiskList.filter((o=>o.riskId!==e.riskId))}))},_e=(e,o)=>{w.value.productCode=o.productCode,w.value.productInfo=o,w.value.type="edit",w.value.currentRisk=[e.riskId],ee.currentProductCode=o.productCode,ee.defaultData=[ge(o.productCode)],A((()=>{var e;null==(e=D.value)||e.open()}))},De=(e,o)=>{w.value.productCode=o.productCode,w.value.productInfo=o,w.value.type="addRiderRisk",w.value.currentRisk=e,L(!0)};U((()=>{}));const we=e=>!!F(e)&&e.every((e=>"number"==typeof e?!Number.isNaN(e):Boolean(e))),xe=()=>{var e,o;Promise.all([null==(e=le.value)?void 0:e.validate(),null==(o=ue.value)?void 0:o.validate()]).then((()=>{var e;const{proposalHolder:o}=ee;te({proposalHolder:o,proposalInsuredList:[{...ee.insuredPersonVO,socialFlag:null==(e=ee.insuredPersonVO)?void 0:e.hasSocialInsurance,proposalInsuredProductList:ee.proposalInsuredProductList}],proposalName:ee.insuredPersonVO.proposalName,totalPremium:Le.value,relationUserType:2}).then((e=>{const{code:o,data:r}=e||{};"10000"===o&&(I.$reset(),I.proposalId=r,O.push({path:"/compositionProposal",query:{id:r}}))}))}))},Te=()=>{xe()},Ee=(e,o)=>{o&&(h.value.id=null),xe()};return m((()=>R.map((e=>ee.insuredPersonVO[e]))),Z(((e,o)=>{we(e)&&we(o)&&(console.log("被保人条件变动"),ne.value.forEach((e=>(async e=>{try{const{code:o,data:r,message:s}=await de({calcProductFactorList:Re(e),...ee.insuredPersonVO},{isCustomError:!0});"10000"===o&&F(r)?(ee.proposalInsuredProductList.forEach((({productCode:e,proposalProductRiskList:o})=>{const{productRiskDyInsureFactorVOList:s}=r[0]||r.find((o=>o.productCode===e))||{};o.forEach((e=>{const o=s.find((o=>o.riskCode===e.riskCode));Object.assign(e,{...e,...o})}))})),Ve(ge(e)),ee.productErrorMap[e]=""):ee.productErrorMap[e]=s}catch(o){console.log("Error",o)}})(e))))})),{deep:!0}),m((()=>ee.selectedProductCodeList),Z((e=>{if(F(e)){console.log("选择的产品变动了",e);const o=e.map((e=>({productCode:e,proposalProductRiskList:[]})));ee.proposalInsuredProductList.push(...o),Ie(e.map((e=>({productCode:e}))));const r=Object.keys(ee.productCollection),s=null==e?void 0:e.filter((e=>!r.includes(e)));F(s)&&ye(null==s?void 0:s.map((e=>({productCode:e}))))}})),{deep:!0}),q((()=>{const{query:{productCode:e}}=E(),{selectedProduct:o,insuredPersonVO:r}=I.$state;if(ee.productCodeInQuery=e,ee.proposalInsuredProductList=[],r&&Object.keys(r).length||(ee.insuredPersonVO={}),ee.productErrorMap={},e){const o=[{productCode:e}];ye(o),Ie(o,!0)}ee.selectedProductCodeList=F(o)?o:[]})),S((()=>{})),(e,r)=>{const c=X,p=K,m=x,L=n,h=z,O=M("ProPageWrap");return s(),t(O,{class:"page-create-wrapper"},{default:a((()=>{var e;return[d("div",Fe,[i(c,{ref_key:"formRef",ref:le,class:"mb20",model:l(ee).insuredPersonVO},{default:a((()=>[i(l(re),{modelValue:l(ee).insuredPersonVO.proposalName,"onUpdate:modelValue":r[0]||(r[0]=e=>l(ee).insuredPersonVO.proposalName=e),label:"计划书名称",name:"proposalName",maxlength:20,required:""},null,8,["modelValue"])])),_:1},8,["model"]),i(l(G),{ref_key:"insuredFormRef",ref:ue,title:"被保人信息",model:l(ee).insuredPersonVO},{default:a((()=>[i(l(re),{modelValue:l(ee).insuredPersonVO.name,"onUpdate:modelValue":r[1]||(r[1]=e=>l(ee).insuredPersonVO.name=e),label:"姓名",name:"name",maxlength:20,required:""},null,8,["modelValue"]),i(l(re),{modelValue:l(ee).insuredPersonVO.age,"onUpdate:modelValue":r[3]||(r[3]=e=>l(ee).insuredPersonVO.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",onChange:Oe},{extra:a((()=>[i(l(J),{modelValue:l(ee).insuredPersonVO.birthday,"onUpdate:modelValue":[r[2]||(r[2]=e=>l(ee).insuredPersonVO.birthday=e),he],class:"birthday-field-wrap",label:"出生日期",name:"birthday",required:""},null,8,["modelValue"])])),_:1},8,["modelValue"]),i(l(Y),{modelValue:l(ee).insuredPersonVO.gender,"onUpdate:modelValue":r[4]||(r[4]=e=>l(ee).insuredPersonVO.gender=e),label:"性别",name:"gender",columns:l(me),required:""},null,8,["modelValue","columns"])])),_:1},8,["model"]),(s(!0),f(v,null,P(l(ee).proposalInsuredProductList,((e,o)=>(s(),t(p,{key:`${e.nanoid}_${o}_${e.productCode}`,"show-line":!1},{default:a((()=>{var o;return[i($e,{"product-risk-list":e.proposalProductRiskList,"product-info":e,"product-num":(null==(o=l(ee).proposalInsuredProductList)?void 0:o.length)-1,"product-data":l(w).productCollection[e.productCode],"pick-product-premium":ve,"error-msg":l(ee).productErrorMap[e.productCode],onAddRiderRisk:De,onUpdateRisk:_e,onDeleteRisk:je},null,8,["product-risk-list","product-info","product-num","product-data","error-msg"])]})),_:2},1024)))),128)),d("div",He,[i(m,{activated:"",round:34,onClick:be},{default:a((()=>[u("添加产品")])),_:1})])]),d("div",Be,[d("span",Ae,[u("总保费"),d("span",Ke,C(l(Pe)?"-":`￥${null==(e=l(Le))?void 0:e.toLocaleString()}`),1)]),d("div",Qe,[i(L,{disabled:l(Pe),type:"primary",onClick:Te},{default:a((()=>[u("保存并预览")])),_:1},8,["disabled"])])]),i(h,{show:l(b),"onUpdate:show":r[5]||(r[5]=e=>k(b)?b.value=e:null),actions:o,"cancel-text":"取消","close-on-click-action":"",onCancel:r[6]||(r[6]=e=>l(V)(!1)),onSelect:Ee},null,8,["show"]),i(ce,{ref_key:"trialPopupRef",ref:D,"data-source":l(ke),"product-code":l(ee).currentProductCode,"default-data":l(ee).defaultData,onFinish:Ce},null,8,["data-source","product-code","default-data"])]})),_:1})}}}),[["__scopeId","data-v-28b2e4d1"]]);export{ze as default};
