import{E as e,d as o,r as t,c as r,e as s,w as a,f as i,i as l,j as d,B as u,x as c,bB as n,Q as p,y as m,g as f,a1 as v,R as k,U as C,bs as h,z as b,bC as P,bD as L,bE as I,bF as y,bw as R,ag as _,ah as j,a6 as V,K as g,bG as O,h as D,bH as w,b4 as x,a as T,u as N,o as E,au as q,bn as S,b as U,bI as F,D as H,Z as A,bf as B,ar as K,T as $}from"./index-000b7445.js";import{A as W}from"./index-7d45f12c.js";import{P as z,a as G,b as J,c as M}from"./index-5e8e502f.js";import{d as Q}from"./debounce-eed12388.js";import{u as Y}from"./createProposal-bb3c9a32.js";import{_ as Z}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-6fc2b1cf.js";/* empty css              */import"./bankCard-e3843884.js";import{q as X,a as ee}from"./createProposal-c6583c23.js";import{a as oe,p as te}from"./trial-220a9a50.js";import{T as re}from"./index-5a64c594.js";import{u as se}from"./useDicData-8118392c.js";import"./pdfh5-008ca364.js";import"./index-1178332c.js";import"./isObjectLike-a9798079.js";import"./keysIn-3ff85984.js";import"./phoneVerify-14f3a6d4.js";import"./index-c4c2aaab.js";import"./infoCollection-048f5375.js";import"./cloneDeep-91e31c47.js";import"./index-db455601.js";import"./utils-ba9d6336.js";import"./index-032964ce.js";import"./trial-8fc2f293.js";import"./utils-7af493b7.js";import"./box-title-dffb9380.js";import"./index-26459061.js";import"./echarts-ac920fed.js";import"./Table-43bb5961.js";import"./empty-c926d8ec.js";import"./useOrder-a2aa63a9.js";import"./utils-fc751943.js";import"./constants-7afb7c3d.js";import"./nextStep-fe1e1e34.js";import"./core-5bdfb048.js";import"./constant-c3f28a3b.js";import"./pageJump-a98634cf.js";const ae={class:"trial-button"};var ie=e(o({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:o,emit:c}){const n=e,p=t(null),m=(e,o)=>{var t;console.log("trialData",e);const{holder:r,insuredVOList:s}=e||{},{personVO:a,productPlanVOList:i}=(null==s?void 0:s[0])||{},l=((null==(t=null==i?void 0:i[0])?void 0:t.riskVOList)||[]).map((e=>{var t,r;return{...e,premium:null==(t=o[e.riskCode])?void 0:t.premium,amount:null==(r=o[e.riskCode])?void 0:r.amount}}));return{productCode:n.productCode,proposalHolder:null==r?void 0:r.personVO,insuredPersonVO:a,insuredProductInfo:{productCode:n.productCode,productName:n.productName,occupationCodeList:a.occupationCodeList,proposalProductRiskList:l}}};return o({...["open","close"].reduce(((e,o)=>(e[o]=(...e)=>{var t;null==(t=p.value)||t[o](...e)},e)),{}),formatData:m}),(o,t)=>{const n=u;return r(),s(re,{ref_key:"trialRef",ref:p,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{default:a((({trialData:e,riskPremium:o})=>[i("div",ae,[l(n,{type:"primary",onClick:t=>((...e)=>{c("finish",m(e[0],e[1]))})(e,o)},{default:a((()=>[d("确定")])),_:2},1032,["onClick"])])])),_:1},8,["product-info"])}}}),[["__scopeId","data-v-c80f0794"]]);const le={class:"com-risk-list-wrapper"},de=(e=>(_("data-v-7d3c3028"),e=e(),j(),e))((()=>i("div",{class:"popup-title"},"选择附加险",-1))),ue={class:"risk-list"},ce={class:"cell-title"},ne={class:"title"},pe={class:"footer-button"};var me=e(o({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:o}){const _=e,j=t([]),V=t([]),g=t([..._.disabled]),O=c({show:_.show,currentChecked:[..._.modelValue]}),D=e=>{var o,t,r;if(g.value.includes(e))return;((e,o)=>{if(!_.collocationList.length)return o?void(O.currentChecked=[]):void O.currentChecked.push(e);let t=O.currentChecked,r=g.value;o?(_.collocationList.forEach((o=>{e===o.riskId&&(2===o.collocationType?t=t.filter((t=>t!==o.collocationRiskId||t!==e)):3===o.collocationType?(t=t.filter((o=>o!==e)),r=r.filter((e=>e!==o.collocationRiskId))):t=t.filter((o=>o!==e)))})),O.currentChecked=t,g.value=r):(_.collocationList.forEach((s=>{e===s.riskId&&(o||(2===s.collocationType?t.push(s.collocationRiskId):3===s.collocationType&&r.push(s.collocationRiskId),t.push(e)))})),O.currentChecked.push(...t),g.value=r)})(e,O.currentChecked.includes(e)),null==(r=null==(t=null==(o=null==j?void 0:j.value)?void 0:o[e])?void 0:t.toggle)||r.call(t)},w=()=>{o("close")},x=()=>{const e=_.riskList.filter((e=>O.currentChecked.includes(e.id)));o("update:modelValue",[...new Set(V.value)]),o("finished",e,g.value),o("close")};return n((()=>{j.value=[]})),p((()=>O.currentChecked),(e=>{V.value=e}),{deep:!0,immediate:!0}),p((()=>_.modelValue),(e=>{V.value=e||[],g.value.push(...e||[])}),{deep:!0,immediate:!0}),(o,t)=>{const c=P,n=L,p=I,_=y,T=u,N=R;return r(),m("div",le,[l(N,{show:f(O).show,"onUpdate:show":t[1]||(t[1]=e=>f(O).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:w},{default:a((()=>[de,i("div",ue,[l(_,{modelValue:f(V),"onUpdate:modelValue":t[0]||(t[0]=e=>v(V)?V.value=e:null)},{default:a((()=>[l(p,{inset:""},{default:a((()=>[(r(!0),m(k,null,C(e.riskList,(e=>(r(),s(n,{key:e.id,title:e.riskName,disabled:f(g).includes(e.id),onClick:o=>D(e.id)},{"right-icon":a((()=>[l(c,{ref_for:!0,ref:o=>f(j)[e.id]=o,shape:"square",disabled:f(g).includes(e.id),name:e.id,onClick:h((o=>D(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:a((()=>[i("div",ce,[i("div",ne,b(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),i("div",pe,[l(T,{type:"primary",disabled:!f(O).currentChecked.length,block:"",onClick:x},{default:a((()=>[d("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const fe=e=>(_("data-v-1ac35b39"),e=e(),j(),e),ve={class:"com-product-list-wrapper"},ke={class:"risk-item-wrapper"},Ce={class:"content"},he={class:"risk-premium"},be={class:"premium"},Pe={class:"risk-factor"},Le={class:"factor"},Ie={class:"factor-value"},ye=fe((()=>i("span",{class:"factor-name"}," 保额(元) ",-1))),Re={class:"factor"},_e={class:"factor-value"},je=fe((()=>i("span",{class:"factor-name"}," 保障期间 ",-1))),Ve={class:"factor"},ge={class:"factor-value"},Oe=fe((()=>i("span",{class:"factor-name"}," 缴费期间 ",-1))),De={class:"operate-bar"},we=fe((()=>i("span",{class:"btn-plus"},"+",-1))),xe={key:0,class:"premium-total"},Te={class:"premium"},Ne=o({name:"ProductList"});var Ee=e(o({...Ne,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:o}){const u=e,[c,n]=V(),v=t({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),h=se("RISK_PAYMENT_PERIOD"),P=se("RISK_INSURANCE_PERIOD"),L=g((()=>{var e,o;return(null==(o=null==(e=u.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]})),I=g((()=>{var e,o;const t=u.productRiskList.map((e=>e.riskId)),r=((null==(o=null==(e=u.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList)||[]).filter((e=>t.includes(e.id)&&1===e.collocationType));return L.value.length-r.length})),y=g((()=>e=>{var o,t;const r=(null==(t=null==(o=u.productData)?void 0:o.productRiskVoList)?void 0:t[0].riskDetailVOList.find((o=>o.id!==e)))||{};let s=!1;return s=!!u.productNum||2===r.riskType&&1===r.collocationType,s})),R=g((()=>{var e,o;return(null==(o=null==(e=u.productData)?void 0:e.productRiskVoList)?void 0:o[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),_=g((()=>R.value.collocationVOList||[])),j=(e,t)=>{const r=e.map((e=>e.id)).filter((e=>!v.value.disabledList.includes(e)));o("addRiderRisk",r,u.productInfo)};return p((()=>u.productInfo),(e=>{var o;let t=0;(e.proposalProductRiskList||[]).forEach((e=>{t+=e.premium})),null==(o=u.pickProductPremium)||o.call(u,{[`${e.productId}`]:t}),v.value.totalPremium=t}),{deep:!0,immediate:!0}),p((()=>u.productRiskList),(e=>{const o=[],t=[],r=[];(e||[]).forEach((e=>{1===e.riskType?o.unshift(e):(t.push(e.riskId),r.push(e.riskId),o.push(e))})),v.value.disabledList=t,v.value.checkedList=r,v.value.productRiskList=o}),{deep:!0,immediate:!0}),(e,t)=>{var p,R;const V=w,g=x;return r(),m("div",ve,[(r(!0),m(k,null,C(f(v).productRiskList,(e=>{var t,c;return r(),m("div",{key:e.riskId},[i("div",ke,[l(V,{"risk-type":e.riskType,title:e.riskName,class:"no-border"},null,8,["risk-type","title"]),i("div",Ce,[i("div",he,[d(" 保费:"),i("span",be,"￥"+b(null==(t=e.premium)?void 0:t.toLocaleString()),1)]),i("div",Pe,[i("div",Le,[i("span",Ie,b(null==(c=e.amount)?void 0:c.toLocaleString()),1),ye]),i("div",Re,[i("span",_e,b(f(O)(f(P),e.coveragePeriod)),1),je]),i("div",Ve,[i("span",ge,b(f(O)(f(h),e.chargePeriod)),1),Oe])]),i("div",De,[f(y)(e.riskId)?(r(),s(g,{key:0,round:32,class:"border",onClick:t=>{o("deleteRisk",e,u.productInfo)}},{default:a((()=>[d("删除")])),_:2},1032,["onClick"])):D("",!0),f(I)?(r(),s(g,{key:1,activated:"",round:32,class:"btn-rider-risk",onClick:o=>{return t=e,n(!0),void(v.value.currentRiskRecord=t);var t}},{default:a((()=>[we,d(" 附加险")])),_:2},1032,["onClick"])):D("",!0),l(g,{activated:"",round:32,onClick:t=>{o("updateRisk",e,u.productInfo)}},{default:a((()=>[d("修改")])),_:2},1032,["onClick"])])])])])})),128)),f(v).productRiskList.length>1?(r(),m("div",xe,[d(" 保费: "),i("span",Te,"￥"+b(null==(R=null==(p=f(v))?void 0:p.totalPremium)?void 0:R.toLocaleString()),1)])):D("",!0),f(c)?(r(),s(me,{key:1,modelValue:f(v).checkedList,"onUpdate:modelValue":t[0]||(t[0]=e=>f(v).checkedList=e),show:f(c),disabled:f(v).disabledList,"risk-list":f(L),"collocation-list":f(_),onFinished:j,onClose:t[1]||(t[1]=e=>f(n)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):D("",!0)])}}}),[["__scopeId","data-v-1ac35b39"]]);const qe={class:"container"},Se={class:"operate-bar"},Ue={class:"footer-bar"},Fe={class:"trial-result"},He={class:"result-num"},Ae={class:"trial-operate"},Be=o({name:"CreateProposal"});var Ke=e(o({...Be,setup(e){const o=[{name:"保存修改"},{name:"另存为新计划书"}],[n,h]=V(),[P,L]=V(),I=t({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),y=T(),R=N(),_=Y(),{id:j,productCode:O,type:D="add",isCreateProposal:w}=R.query,re=t(null),se=t({productCode:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),ae=c({selectedProductCodeList:[],insuredPersonVO:{},proposalName:"",currentProductCode:"",proposalHolder:{},proposalInsuredProductList:[],productCollection:{}}),le=t(null),de=t(null),ue=g((()=>ae.proposalInsuredProductList.map((e=>e.productCode)).filter((e=>Boolean(e))))),ce=()=>{var e,o;Promise.all([null==(e=le.value)?void 0:e.validate(),null==(o=de.value)?void 0:o.validate()]).then((()=>{const{proposalHolder:e}=ae;ee({proposalHolder:e,proposalInsuredList:[{...ae.insuredPersonVO,proposalInsuredProductList:ae.proposalInsuredProductList}],proposalName:ae.proposalName,totalPremium:0,relationUserType:2}).then((e=>{const{code:o,data:t}=e||{};"10000"===o&&(_.$reset(),_.proposalId=t,y.push({path:"/compositionProposal",query:{id:t}}))}))}))},ne=()=>{ce()},pe=(e,o)=>{o&&(I.value.id=null),ce()},me=g((()=>{var e;return(null==(e=ae.productCollection)?void 0:e[ae.currentProductCode])||{}})),fe=g((()=>{var e,o;return(null==(o=null==(e=me.value)?void 0:e.productPlanInsureVOList)?void 0:o[0])||{}})),ve=(e={})=>{Object.assign(se.value.productPremium,e),I.value.totalPremium=Object.values(se.value.productPremium).reduce(((e,o)=>e+o),0)},ke=(e,o)=>{const t=o;H.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?(ae.proposalInsuredProductList=ae.proposalInsuredProductList.filter((e=>e.productCode!==t.productCode)),ve({[t.productCode]:0})):t.proposalProductRiskList=t.proposalProductRiskList.filter((o=>o.riskId!==e.riskId))}))},Ce=(e,o)=>{se.value.productCode=o.productCode,se.value.productInfo=o,se.value.type="edit",se.value.currentRisk=[e.riskId],ae.currentProductCode=o.productCode,A((()=>{var e;null==(e=re.value)||e.open()}))},he=(e,o)=>{se.value.productCode=o.productCode,se.value.productInfo=o,se.value.type="addRiderRisk",se.value.currentRisk=e,h(!0)},be=e=>{var o;const t=ae.proposalInsuredProductList.findIndex((o=>o.productCode===e.productCode));ae.proposalInsuredProductList[t]=e.insuredProductInfo,null==(o=re.value)||o.close()},Pe=()=>{_.setProposalInfo(I.value),_.setTrialData([]),se.value.productCollection.length&&_.setExcludeProduct(se.value.productCollection.map((e=>e.productCode)));const{gender:e,birthday:o}=ae.insuredPersonVO;y.push({path:"/proposalList",query:{isCreateProposal:"1",productCode:O,productCodeList:ue.value,gender:e,birthday:o}})},Le=async(e,o=!1)=>{if(!q(e))return;const{code:t,data:r}=await oe({calcProductFactorList:e.map((e=>({productCode:e}))),...o?{}:ae.insuredPersonVO});"10000"===t&&r&&q(r)&&r.forEach((e=>{const{holder:t,insuredVOList:r,productCode:s}=e,{personVO:a,productPlanVOList:i}=(r||[])[0]||{},l={productCode:s,proposalProductRiskList:i};if(o)Object.assign(ae.insuredPersonVO,a),Object.assign(ae.proposalHolder,t),ae.proposalInsuredProductList=[l],te(d=e).then((({code:e,data:o})=>{var t;if(e===K&&o){(null==o?void 0:o.errorInfo)&&$(`${null==o?void 0:o.errorInfo}`);const e={};q(o.riskPremiumDetailVOList)&&(o.riskPremiumDetailVOList.forEach((o=>{e[o.riskCode]={premium:o.premium,amount:o.amount}})),be(null==(t=re.value)?void 0:t.formatData(d,e)))}}));else{const e=ue.value.findIndex((e=>e===s));ae.proposalInsuredProductList[e]=l}var d}))};E((()=>{O&&Le([O],!0)}));return p((()=>ae.selectedProductCodeList),Q((e=>{if(console.log("选择的产品变动了",e),q(e)){const o=e.map((e=>({productCode:e,proposalProductRiskList:[]})));ae.proposalInsuredProductList.push(...o),Le(e)}})),{deep:!0}),p((()=>ae.selectedProductCodeList),(()=>{var e,o;if(q(ue.value)){const t=Object.keys(ae.productCollection),r=null==(e=ue.value)?void 0:e.filter((e=>!t.includes(e)));q(r)&&(o=null==r?void 0:r.map((e=>({productCode:e}))),X(o).then((({code:e,data:o})=>{"10000"===e&&q(o)&&Object.assign(ae.productCollection,o.reduce(((e,o)=>(e[o.productCode]=o,e)),{}))})).finally((()=>{})))}}),{deep:!0,immediate:!0}),S((()=>{const{query:{selectProduct:e}}=N();ae.selectedProductCodeList=q(e)?e:"string"==typeof e&&e?[e]:[]})),(e,t)=>{const c=M,n=B,p=x,h=u,y=W,R=U("ProPageWrap");return r(),s(R,{class:"page-create-wrapper"},{default:a((()=>{var e,u;return[i("div",qe,[l(c,{ref_key:"formRef",ref:le,class:"mb20",model:f(ae)},{default:a((()=>[l(f(Z),{label:"计划书名称",name:"proposalName",maxlength:20,required:""})])),_:1},8,["model"]),l(f(z),{ref_key:"insuredFormRef",ref:de,title:"被保人信息",model:f(ae).insuredPersonVO},{default:a((()=>[l(f(Z),{label:"姓名",name:"name",maxlength:20,required:""}),l(f(G),{label:"出生日期",name:"birthday",required:""}),l(f(J),{label:"性别",name:"gender",columns:f(F),required:""},null,8,["columns"])])),_:1},8,["model"]),(r(!0),m(k,null,C(f(ae).proposalInsuredProductList,(e=>(r(),s(n,{key:e.productCode,"show-line":!1},{default:a((()=>{var o;return[l(Ee,{"product-risk-list":e.proposalProductRiskList,"product-info":e,"product-num":(null==(o=f(ae).proposalInsuredProductList)?void 0:o.length)-1,"product-data":f(se).productCollection[e.productCode],"pick-product-premium":ve,onAddRiderRisk:he,onUpdateRisk:Ce,onDeleteRisk:ke},null,8,["product-risk-list","product-info","product-num","product-data"])]})),_:2},1024)))),128)),i("div",Se,[l(p,{activated:"",round:34,onClick:Pe},{default:a((()=>[d("添加主险")])),_:1})])]),i("div",Ue,[i("span",Fe,[d("总保费"),i("span",He,"￥"+b(null==(u=null==(e=f(I))?void 0:e.totalPremium)?void 0:u.toLocaleString()),1)]),i("div",Ae,[l(h,{type:"primary",onClick:ne},{default:a((()=>[d("保存并预览")])),_:1})])]),l(y,{show:f(P),"onUpdate:show":t[0]||(t[0]=e=>v(P)?P.value=e:null),actions:o,"cancel-text":"取消","close-on-click-action":"",onCancel:t[1]||(t[1]=e=>f(L)(!1)),onSelect:pe},null,8,["show"]),l(ie,{ref_key:"trialPopupRef",ref:re,"data-source":f(fe),"product-code":f(ae).currentProductCode,onFinish:be},null,8,["data-source","product-code"])]})),_:1})}}}),[["__scopeId","data-v-7e39fba1"]]);export{Ke as default};
