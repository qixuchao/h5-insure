import{_ as e,d as r,j as t,c4 as s,bv as i,o,m as n,w as l,a,b as u,u as d,a8 as c,aK as p,ai as m,r as v,cS as L,z as f,c as h,p as k,F as C,q as V,cJ as I,e as g,aB as b,bt as y,aC as O,cC as S,aE as P,aF as T,bX as _,k as R,f as M,aP as E,aQ as w,bs as D,n as x,E as j,T as A,aJ as N,cT as H,h as U,i as q,cU as Y,aH as F,aG as $,c8 as B,l as W,bp as J,cV as K,cW as X,cX as z,bf as G,ap as Q,ao as Z,bn as ee,cp as re,cY as te,aO as se,ae as ie,bc as oe,aI as ne}from"./index-4f878428.js";import{A as le}from"./index-3b87e7c6.js";import{l as ae}from"./lodash-6e3a0c04.js";import{P as ue,u as de}from"./ProductTips-0aa56508.js";import"./PolicyInfo-ef327f17.js";import{a as ce,b as pe,c as me}from"./createProposal-e34b42da.js";import{q as ve,d as Le,p as fe}from"./trial-76e92b21.js";import he from"./index-7a6835db.js";import{_ as ke}from"./index-f4da48a4.js";import{_ as Ce}from"./empty-ae586b6c.js";import{a as Ve,b as Ie}from"./format-31cde443.js";import{C as ge}from"./index-583701c4.js";import{R as be}from"./trial-34347d78.js";import{R as ye,a as Oe}from"./product-7bbf9c44.js";import"./cloneDeep-31dd2306.js";import"./TrialButton-aa4b84d5.js";import"./index-119ddc52.js";import"./config-98e8d477.js";import"./isNaN-b195b6c0.js";import"./useOrder-788a898d.js";const Se={class:"trial-button"};var Pe=e(r({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:r,emit:v}){const L=e,f=t(null);s(i,{insuredFactorCodes:["hasSocialInsurance","occupationCodeList"],holderFactorCodes:["birthday","gender","hasSocialInsurance","occupationCodeList"]});const h=(e,r)=>{var t,s;const{holder:i,insuredList:o}=e||{},{productList:n,...l}=(null==o?void 0:o[0])||{},a=p(null==r?void 0:r.insuredPremiumList)?null==(s=null==(t=null==r?void 0:r.insuredPremiumList)?void 0:t[0])?void 0:s.productPremiumList.reduce(((e,r)=>(e[r.productCode]=r.riskPremiumDetailVOList.reduce(((e,r)=>(e[r.riskCode]={initialPremium:r.initialPremium,initialAmount:r.initialAmount,unitAmount:r.unitAmount,unitPremium:r.unitPremium},e)),{}),e)),{}):{};return{holder:i,insuredPersonVO:l,insuredProductList:n.map((e=>({productCode:e.productCode,productName:e.productName,occupationCodeList:null==l?void 0:l.occupationCodeList,occupationClass:null==l?void 0:l.occupationClass,riskList:e.riskList.map((r=>{var t,s,i,o,n,l,u,d;return{...r,unitPremium:null==(s=null==(t=null==a?void 0:a[e.productCode])?void 0:t[r.riskCode])?void 0:s.unitPremium,unitAmount:null==(o=null==(i=null==a?void 0:a[e.productCode])?void 0:i[r.riskCode])?void 0:o.unitAmount,initialPremium:null==(l=null==(n=null==a?void 0:a[e.productCode])?void 0:n[r.riskCode])?void 0:l.initialPremium,initialAmount:null==(d=null==(u=null==a?void 0:a[e.productCode])?void 0:u[r.riskCode])?void 0:d.initialAmount}}))})))}};return r({...["open","close"].reduce(((e,r)=>(e[r]=(...e)=>{var t;null==(t=f.value)||t[r](...e)},e)),{}),formatData:h}),(r,t)=>{const s=m;return o(),n(he,{ref_key:"trialRef",ref:f,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{trialBtn:l((e=>{var r,t;return[a("div",Se,[u(s,{disabled:!(null==(t=null==(r=d(f))?void 0:r.getTrialSuccessFlag)?void 0:t.call(r)),type:"primary",onClick:r=>(({trialData:e,riskPremium:r,personalInfoRef:t})=>"function"==typeof(null==t?void 0:t.canTrail)&&t.canTrail()?v("finish",h({...e,productCode:L.productCode},r)):"function"==typeof(null==t?void 0:t.validate)&&t.validate())(e)},{default:l((()=>[c("确定")])),_:2},1032,["disabled","onClick"])])]})),_:1},8,["product-info"])}}}),[["__scopeId","data-v-1168c0b4"]]);const Te={class:"com-risk-list-wrapper"},_e=(e=>(P("data-v-7d3c3028"),e=e(),T(),e))((()=>a("div",{class:"popup-title"},"选择附加险",-1))),Re={class:"risk-list"},Me={class:"cell-title"},Ee={class:"title"},we={class:"footer-button"};var De=e(r({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:r}){const s=e,i=t([]),p=t([]),P=t([...s.disabled]),T=v({show:s.show,currentChecked:[...s.modelValue]}),_=e=>{var r,t,o;if(P.value.includes(e))return;((e,r)=>{if(!s.collocationList.length)return r?void(T.currentChecked=[]):void T.currentChecked.push(e);let t=T.currentChecked,i=P.value;r?(s.collocationList.forEach((r=>{e===r.riskId&&(2===r.collocationType?t=t.filter((t=>t!==r.collocationRiskId||t!==e)):3===r.collocationType?(t=t.filter((r=>r!==e)),i=i.filter((e=>e!==r.collocationRiskId))):t=t.filter((r=>r!==e)))})),T.currentChecked=t,P.value=i):(s.collocationList.forEach((s=>{e===s.riskId&&(r||(2===s.collocationType?t.push(s.collocationRiskId):3===s.collocationType&&i.push(s.collocationRiskId),t.push(e)))})),T.currentChecked.push(...t),P.value=i)})(e,T.currentChecked.includes(e)),null==(o=null==(t=null==(r=null==i?void 0:i.value)?void 0:r[e])?void 0:t.toggle)||o.call(t)},R=()=>{r("close")},M=()=>{const e=s.riskList.filter((e=>T.currentChecked.includes(e.id)));r("update:modelValue",[...new Set(p.value)]),r("finished",e,P.value),r("close")};return L((()=>{i.value=[]})),f((()=>T.currentChecked),(e=>{p.value=e}),{deep:!0,immediate:!0}),f((()=>s.modelValue),(e=>{p.value=e||[],P.value.push(...e||[])}),{deep:!0,immediate:!0}),(r,t)=>{const s=b,v=y,L=ge,f=O,E=m,w=S;return o(),h("div",Te,[u(w,{show:d(T).show,"onUpdate:show":t[1]||(t[1]=e=>d(T).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:R},{default:l((()=>[_e,a("div",Re,[u(f,{modelValue:d(p),"onUpdate:modelValue":t[0]||(t[0]=e=>k(p)?p.value=e:null)},{default:l((()=>[u(L,{inset:""},{default:l((()=>[(o(!0),h(C,null,V(e.riskList,(e=>(o(),n(v,{key:e.id,title:e.riskName,disabled:d(P).includes(e.id),onClick:r=>_(e.id)},{"right-icon":l((()=>[u(s,{ref_for:!0,ref:r=>d(i)[e.id]=r,shape:"square",disabled:d(P).includes(e.id),name:e.id,onClick:I((r=>_(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:l((()=>[a("div",Me,[a("div",Ee,g(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),a("div",we,[u(E,{type:"primary",disabled:!d(T).currentChecked.length,block:"",onClick:M},{default:l((()=>[c("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const xe=e=>(P("data-v-d28111e2"),e=e(),T(),e),je={class:"com-product-list-wrapper"},Ae={class:"risk-item-wrapper"},Ne={class:"operate-bar"},He=["onClick"],Ue=["onClick"],qe={class:"content"},Ye={class:"risk-factor"},Fe={class:"factor"},$e={class:"factor-value"},Be=xe((()=>a("span",{class:"factor-name"}," 保额(元) ",-1))),We={class:"factor"},Je={class:"factor-value"},Ke=xe((()=>a("span",{class:"factor-name"}," 保障期间 ",-1))),Xe={class:"factor"},ze={class:"factor-value"},Ge=xe((()=>a("span",{class:"factor-name"}," 交费期间 ",-1))),Qe={class:"operate-bar-wrap"},Ze={class:"risk-premium"},er={class:"premium"},rr={key:0,class:"operate-bar"},tr=r({name:"ProductList"});var sr=e(r({...tr,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0},errorMsg:{default:""},productIndex:null,currentSelectInsure:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:r}){const s=e,[i,p]=_(),m=t({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),v=R((()=>{var e,r;return(null==(r=null==(e=s.productData)?void 0:e.productRiskVoList)?void 0:r[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]}));R((()=>{var e,r;const t=s.productRiskList.map((e=>e.riskId)),i=((null==(r=null==(e=s.productData)?void 0:e.productRiskVoList)?void 0:r[0].riskDetailVOList)||[]).filter((e=>t.includes(e.id)&&1===e.collocationType));return v.value.length-i.length})),R((()=>e=>{var r,t;const i=(null==(t=null==(r=s.productData)?void 0:r.productRiskVoList)?void 0:t[0].riskDetailVOList.find((r=>r.id!==e)))||{};let o=!1;return o=!!s.productNum||2===i.riskType&&1===i.collocationType,o}));const L=R((()=>{var e,r;return(null==(r=null==(e=s.productData)?void 0:e.productRiskVoList)?void 0:r[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),k=R((()=>L.value.collocationVOList||[])),I=(e,t)=>{const i=e.map((e=>e.id)).filter((e=>!m.value.disabledList.includes(e)));r("addRiderRisk",i,s.productInfo)};return f((()=>s.productInfo),(e=>{let r=0;(e.riskList||[]).forEach((e=>{r+=e.initialPremium})),m.value.totalPremium=r}),{deep:!0,immediate:!0}),f((()=>s.productRiskList),(e=>{const r=[],t=[],s=[];(e||[]).forEach((e=>{1===e.riskType?r.unshift(e):(t.push(e.riskId),s.push(e.riskId),r.push(e))})),m.value.disabledList=t,m.value.checkedList=s,m.value.productRiskList=r}),{deep:!0,immediate:!0}),(t,L)=>{const f=E,b=w;return o(),h("div",je,[(o(!0),h(C,null,V(d(m).productRiskList,(i=>{var n,v;return o(),h("div",{key:i.riskId},[a("div",Ae,[u(f,{"risk-type":i.riskType,title:i.riskName,class:"no-border"},{default:l((()=>[a("div",Ne,[i.riskType===d(be).MAIN_RISK?(o(),h("div",{key:0,class:"add-risk btn",onClick:e=>{return r=t.productCode,i.riskCode,p(!0),void(m.value.currentRiskRecord=r);var r}}," +附加险 ",8,He)):M("",!0),a("div",{class:"delete-risk btn",onClick:e=>{return o=t.productCode,i.mainRiskCode,i.riskCode,void r("deleteRisk",o,s.productInfo);var o}},"删除",8,Ue)])])),_:2},1032,["risk-type","title"]),a("div",qe,[a("div",Ye,[a("div",Fe,[a("span",$e,g((null==(n=i.initialAmount)?void 0:n.toLocaleString())||"-"),1),Be]),a("div",We,[a("span",Je,g(d(Ve)(i.coveragePeriod)||"-"),1),Ke]),a("div",Xe,[a("span",ze,g(d(Ie)(i.chargePeriod)||"-"),1),Ge])]),a("div",Qe,[a("div",Ze,[c(" 保费:"),a("span",er,g(!e.errorMsg&&i.initialPremium?`￥${null==(v=i.initialPremium)?void 0:v.toLocaleString()}`:"-"),1)]),2!==i.riskType?(o(),h("div",rr,[u(b,{activated:"",onClick:e=>{r("updateRisk",i,s.productInfo)}},{default:l((()=>[c("修改")])),_:2},1032,["onClick"])])):M("",!0)])])])])})),128)),d(i)?(o(),n(De,{key:0,modelValue:d(m).checkedList,"onUpdate:modelValue":L[0]||(L[0]=e=>d(m).checkedList=e),show:d(i),disabled:d(m).disabledList,"risk-list":d(v),"collocation-list":d(k),onFinished:I,onClose:L[1]||(L[1]=e=>d(p)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):M("",!0),u(ue,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-d28111e2"]]);const ir=e=>(P("data-v-60460aa9"),e=e(),T(),e),or={class:"insurer-list"},nr=["onClick"],lr=ir((()=>a("span",{class:"insure-name"},"被保人",-1))),ar={key:0,class:"insure-relate"},ur={key:1,class:"insure-relate"},dr=["onClick"],cr=ir((()=>a("div",{class:"gap"},null,-1))),pr=ir((()=>a("span",null,"+",-1))),mr=r({name:"InsurerSelect"});var vr=e(r({...mr,props:{insurerList:{default:()=>[]},config:{default:()=>{}},canChangeSelect:{type:Boolean,default:()=>!0}},emits:["listChange","currentChange","add","delete","validateTab"],setup(e,{expose:r,emit:s}){const i=e,n=t(),l=t(),u=t({currentSelected:0}),p=t(i.insurerList),m=(e=!1)=>{l.value&&j((()=>{var r;null==(r=n.value[u.value.currentSelected])||r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),0===u.value.currentSelected?l.value.scrollLeft=0:e&&u.value.currentSelected>=3&&(l.value.scrollLeft=l.value.scrollWidth)}))};D((()=>{m(!0)}));const v=e=>{var r;if((null==e?void 0:e.personVO)&&(null==(r=null==e?void 0:e.personVO)?void 0:r.relationToMainInsured)){const r=ye.find((r=>{var t;return r.value===`${null==(t=null==e?void 0:e.personVO)?void 0:t.relationToMainInsured}`}));if(r)return r.label}return"关系"},L=()=>{var e,r,t,s,i;return!(!(null==(r=null==(e=p.value)?void 0:e[u.value.currentSelected])?void 0:r.productList)||(null==(i=null==(s=null==(t=p.value)?void 0:t[u.value.currentSelected])?void 0:s.productList)?void 0:i.length)<=0)},k=()=>{L()?s("validateTab",(()=>{p.value.push({}),u.value.currentSelected=p.value.length-1,s("add",{},p.value.length-1)})):A("请确认信息是否录入完整!")};return f((()=>i.insurerList.length),(()=>{p.value=i.insurerList,m()}),{deep:!0,immediate:!0}),r({updateInsurer:(e,r)=>{}}),(e,r)=>(o(),h("div",or,[a("div",{ref_key:"tabsRef",ref:l,class:"list"},[(o(!0),h(C,null,V(d(p),((e,r)=>(o(),h("div",{ref_for:!0,ref_key:"tabRef",ref:n,key:`insure_${r}`,class:x("insure-box "+(r===d(u).currentSelected?"selected":"")),onClick:e=>((e,r)=>{L()?i.canChangeSelect&&s("validateTab",(()=>{u.value.currentSelected=r,s("currentChange",r),m()})):A("请确认信息是否录入完整!")})(0,r)},[lr,0===r?(o(),h("span",ar,"本人")):(o(),h("span",ur,g(v(e)),1)),r>0?(o(),h("div",{key:2,class:"delete-btn",onClick:e=>((e,r)=>{e.preventDefault(),e.stopPropagation(),e.cancelBubble=!0,N.confirm({message:"确定要删除该被保人吗？"}).then((()=>{s("delete",r,(()=>{r<u.value.currentSelected?(u.value.currentSelected-=1,s("currentChange",u.value.currentSelected)):r===u.value.currentSelected&&(u.value.currentSelected=0,s("currentChange",0))}))})).catch((()=>{}))})(e,r)},"×",8,dr)):M("",!0)],10,nr)))),128))],512),a("div",{class:"operate"},[cr,a("div",{class:"add-btn",onClick:k},[pr,c(" 被保人")])])]))}}),[["__scopeId","data-v-60460aa9"]]);const Lr=e=>(P("data-v-65f02cb3"),e=e(),T(),e),fr={class:"proposal-header"},hr={key:0,class:"container"},kr=Lr((()=>a("div",{class:"title-tip-icon"},"投保人信息",-1))),Cr=Lr((()=>a("span",null,"为TA换个产品",-1))),Vr={key:0,class:"operate-bar"},Ir={key:0,class:"operate-bar"},gr={class:"footer-bar"},br={class:"trial-result"},yr={class:"result-num"},Or={class:"trial-operate"},Sr=r({name:"CreateProposal"});var Pr=e(r({...Sr,setup(e){const r=[{name:"保存修改"},{name:"另存为新计划书"}],s=H();_();const[i,L]=_(),I=t({holder:{},insuredList:[{name:"",gender:"",birthday:"",productList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),b=U(),y=q(),O=de(),S={},{productCode:P,id:T,preview:E}=y.query,x=["age","gender","birthday","hasSocialInsurance","occupationCodeList"],ue=t(null),he=v({selectedProductCodeList:[],selectedProductList:[],insuredPersonVO:{},insurerList:[],currentProductCode:"",holder:{},productList:[],productCollection:{},productErrorMap:{},defaultData:null,currentSelectInsure:0,isLoading:!1}),Ve=t(!1),Ie=t(null),ge=t(null),be=t(null),Se=(e,r,t)=>e?+e<18?"投保人年龄不得小于18周岁":"":"请输入投保人年龄";R((()=>{var e;return(null==(e=he.insurerList[he.currentSelectInsure])?void 0:e.productList)?he.insurerList[he.currentSelectInsure].productList.map((e=>e.productCode)).filter((e=>Boolean(e))):[]}));const Te=()=>he.insurerList[he.currentSelectInsure].productList.map((e=>e.productCode)).filter((e=>Boolean(e))),_e=R((()=>{const{productPlanInsureVOList:e}=he.productCollection[P]||{},[{insureProductRiskVOList:r=[]}={}]=e||[],{riskInsureLimitVO:t}=(null==r?void 0:r.find((e=>1===e.riskType)))||{};return null==t?void 0:t.sexLimit})),Re=R((()=>"-1"!==_e.value&&_e.value?Y.filter((e=>_e.value===e.value)):Y)),Me=R((()=>{var e;return(null==(e=he.productCollection)?void 0:e[he.currentProductCode])||{}})),Ee=e=>(e.insuredList=e.insuredList.map((e=>(e.productList=e.productList.map((e=>(e.riskList=e.riskList.map((e=>({...e,initialPremium:e.unitPremium||e.initialPremium,initialAmount:e.unitAmount||e.initialAmount}))),e))),e))),e);R((()=>{var e,r;return(null==(r=null==(e=Me.value)?void 0:e.productPlanInsureVOList)?void 0:r[0])||{}})),R((()=>{var e,r,t;return null==(t=null==(r=null==(e=Me.value)?void 0:e.productPlanInsureVOList)?void 0:r[0])?void 0:t.multiInsuredConfigVO}));const we=R((()=>!Ve.value||Boolean(Object.values(he.productErrorMap).join("")))),De=R((()=>"1"!=`${E}`)),xe=R((()=>he.insurerList.reduce(((e,r)=>+(r.productList.reduce(((e,r)=>+e+ +r.riskList.reduce(((e,r)=>+e+ +(r.initialPremium||0)),0)),0)+ +e)),0))),je=e=>{var r,t;const s=[null==(r=ge.value)?void 0:r.validate()];if(0===he.currentSelectInsure){if(1===he.insurerList[0].personVO.relationToHolder&&he.insurerList[0].personVO.age<18||1!==he.insurerList[0].personVO.relationToHolder&&he.holder.age<18)return void A("投保人年龄不得小于18周岁");s.push(null==(t=be.value)?void 0:t.validate())}Promise.all(s).then((()=>{e()})).catch((e=>{A("请确认信息是否录入完整!")}))},Ae=()=>{const e=he.insurerList.findIndex((({personVO:e})=>e.relationToMainInsured===+Oe.MATE));return ye.map((r=>r.value===Oe.SELF||r.value===Oe.MATE&&e>=0&&e!==he.currentSelectInsure?{...r,disabled:!0}:{...r}))},Ne=(e,r="")=>{he.productErrorMap[e]=r},He=e=>{console.log("productInfo",e),e.insuredProductList.reduce(((e,r)=>{var t,s;const i=null==(s=null==(t=he.insurerList)?void 0:t[he.currentSelectInsure])?void 0:s.productList.findIndex((e=>e.productCode===r.productCode));return-1!==i?e[i]=r:e.push(r),e}),he.insurerList[he.currentSelectInsure].productList)},Ue=e=>{var r;Object.assign(he.holder,e.holder),0===he.currentSelectInsure&&(e.insuredPersonVO.relationToHolder=he.insurerList[he.currentSelectInsure].personVO.relationToHolder),he.insurerList[he.currentSelectInsure]&&Object.assign(he.insurerList[he.currentSelectInsure].personVO,e.insuredPersonVO),He(e),Ne(e.productCode),Ve.value=!0,null==(r=ue.value)||r.close()},qe=R((()=>{var e;return 1===(null==(e=he.insurerList[he.currentSelectInsure].productList)?void 0:e.length)})),Ye=()=>{O.setInsuredPersonVO(he.insurerList[he.currentSelectInsure].personVO),O.setExcludeProduct([]),O.setProposalInfo(I.value),he.insurerList[he.currentSelectInsure].productList=[],b.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})},Fe=()=>{var e;null==(e=ge.value)||e.validate().then((()=>{O.setProposalInfo(I.value),O.setExcludeProduct(Te()),O.setExcludeMainRiskCode(he.insurerList[he.currentSelectInsure].productList.reduce(((e,r)=>e.concat(r.riskList.filter((e=>1===e.riskType)).map((e=>e.riskCode)))),[])),O.setInsuredPersonVO(he.insurerList[he.currentSelectInsure].personVO),b.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})})).catch((e=>{console.log("e",e),A("请确认被保人信息是否录入完整!")}))},$e=e=>{const r=Ee(e);fe(r).then((({code:e,data:t,message:s})=>{var i;e===ne&&t?((null==t?void 0:t.errorInfo)&&A(`${null==t?void 0:t.errorInfo}`),p(t.insuredPremiumList)&&He(null==(i=ue.value)?void 0:i.formatData(r,t)),Ne(r.productCode),Ve.value=!0):Ne(r.productCode,s)}))},Be=e=>{e&&(he.insurerList[he.currentSelectInsure].personVO.age=Q(new Date).diff(e,"year"))},We=e=>{e&&(he.holder.age=Q(new Date).diff(e,"year"))},Je=e=>{const{value:r}=e;let t={age:30,birthday:Q().subtract(30,"year").format("YYYY-MM-DD"),gender:+Z.MALE};[Oe.MATE,Oe.CHILD].includes(r)?t={age:r===Oe.MATE?he.insurerList[0].personVO.age:0,birthday:r===Oe.MATE?he.insurerList[0].personVO.birthday:Q().subtract(28,"day").format("YYYY-MM-DD"),gender:r===Oe.MATE?1==+he.insurerList[0].personVO.gender?2:1:+Z.MALE}:Oe.PARENT===r&&(t={age:+he.insurerList[0].personVO.age+18,birthday:Q(he.insurerList[0].personVO.birthday).subtract(18,"year").format("YYYY-MM-DD"),gender:+Z.MALE}),Object.assign(he.insurerList[he.currentSelectInsure].personVO,t)},Ke=()=>{he.insurerList[he.currentSelectInsure].personVO.birthday=""},Xe=()=>{if(0===he.currentSelectInsure){const e=he.insurerList.findIndex((e=>!(!e||!e.personVO)&&+e.personVO.relationToMainInsured==+Oe.MATE));-1!==e&&(he.insurerList[e].personVO.gender=1==+he.insurerList[0].personVO.gender?2:1)}},ze=()=>{he.holder.birthday=""},Ge=e=>{ce(e).then((({code:e,data:r})=>{"10000"===e&&p(r)&&(qe.value=4!==r.productClass,r.reduce(((e,r)=>(e[r.productCode]=r,S[r.productCode]=r.productName,e)),he.productCollection))})).finally((()=>{}))},Qe=()=>{if(1==+he.insurerList[0].personVO.relationToHolder){const{relationToHolder:e,relationToMainInsured:r,productList:t,...s}=he.insurerList[0].personVO;return T&&(s.id=he.holder.id),s}return he.holder},Ze=e=>0===e&&2==+he.insurerList[e].personVO.relationToHolder?{...he.insurerList[e].personVO,relationToHolder:null}:he.insurerList[e].personVO,er=async(e,r=!1)=>{if(!p(e))return;const{code:t,data:s}=await ve({calcProductFactorList:e,...he.insurerList[he.currentSelectInsure]&&he.insurerList[he.currentSelectInsure].personVO||{}},{isCustomError:!r});if("10000"===t&&s&&s){const{holder:e,insuredList:t}=s,{productList:i,...o}=(t||[])[0]||{},[{riskList:n=[],...l}={}]=i||[],a={...l,riskList:n};r&&(he.insurerList[he.currentSelectInsure]&&Object.assign(he.insurerList[he.currentSelectInsure].personVO,o,{relationToHolder:1}),Object.assign(he.holder,e)),t.forEach(((e,r)=>{const{productList:t,...s}=e;0===he.insurerList.length&&(s.relationToMainInsured||(s.relationToMainInsured=Oe.SELF),he.insurerList.push({productList:t.map((e=>({...e}))),personVO:s}))}));const u=Te().findIndex((e=>e===(null==i?void 0:i[0].productCode)));u>-1?he.productList[u]=a:he.productList.push(a),j((()=>{$e({...s,holder:{...Qe()},insuredList:[{...Ze(he.currentSelectInsure),productList:i}]})}))}},rr=e=>(he.insurerList[he.currentSelectInsure].productList.find((r=>r.productCode===e)),{holder:{...Qe()},insuredList:[{...Ze(he.currentSelectInsure),productList:he.insurerList[he.currentSelectInsure].productList}]}),tr=(e,r)=>{const t=r;N.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?he.insurerList[he.currentSelectInsure].productList=he.insurerList[he.currentSelectInsure].productList.filter((e=>e.productCode!==t.productCode)).map((e=>({...e,nanoid:ee()}))):t.riskList=t.riskList.filter((r=>r.riskId!==e.riskId)),Ne(t.productCode)}))},ir=(e,r)=>{var t,s;const i=null==(t=e.insuredList)?void 0:t[0],o=(null==(s=i.productList)?void 0:s.find((e=>e.productCode===r)))||{};return i.occupationClass=null==o?void 0:o.occupationClass,i.occupationCodeList=null==o?void 0:o.occupationCodeList,i.productList=i.productList.filter((e=>e.productCode===r)),e},or=(e,r)=>{var t;he.currentProductCode=r.productCode;const s=Ee(ae.exports.cloneDeep(rr(r.productCode)));he.defaultData=[ir(s,r.productCode)],null==(t=ue.value)||t.open()},nr=e=>{var r,t,s;if(he.insurerList.some((e=>0===e.productList.length)))return void A("请先添加产品");const i=[null==(r=Ie.value)?void 0:r.validate(),null==(t=ge.value)?void 0:t.validate()];if(0===he.currentSelectInsure){if(1===he.insurerList[0].personVO.relationToHolder&&he.insurerList[0].personVO.age<18||1!==he.insurerList[0].personVO.relationToHolder&&he.holder.age<18)return void A("投保人年龄不得小于18周岁");i.push(null==(s=be.value)?void 0:s.validate())}Promise.all(i).then((()=>{he.isLoading=!0,me({holder:{...Qe()},insuredList:he.insurerList.map(((e,r)=>({...Ze(r),productList:e.productList.map((e=>({...e,productName:S[e.productCode]})))}))),proposalName:he.insuredPersonVO.proposalName,totalPremium:xe.value,relationUserType:2,id:e}).then((e=>{const{code:r,data:t}=e||{};"10000"===r&&(O.$reset(),b.push({path:"/compositionProposal",query:{id:t,preview:E}}))})).catch((()=>{he.isLoading=!1}))}))},lr=()=>{T?L(!0):nr(T)},ar=(e,r)=>{nr(r?void 0:T)},ur=e=>{var r;he.currentSelectInsure=e,(null==(r=he.insurerList[e])?void 0:r.productList.length)>0?Ge(he.insurerList[e].productList.map((({productCode:e})=>({productCode:e})))):he.productCollection={}},dr=(e,r)=>{if(he.insurerList.length-1===r){const t=he.insurerList.findIndex((e=>!(!e||!e.personVO)&&+e.personVO.relationToMainInsured==+Oe.MATE));he.insurerList[r]={...e,personVO:{age:t<0?he.insurerList[0].personVO.age:0,birthday:t<0?he.insurerList[0].personVO.birthday:Q().subtract(28,"day").format("YYYY-MM-DD"),relationToMainInsured:t<0?Oe.MATE:Oe.CHILD,gender:t<0?1==+he.insurerList[0].personVO.gender?2:1:Z.MALE},productList:[]}}he.currentSelectInsure=r,he.productCollection={}},cr=(e,r)=>{he.insurerList.splice(e,1),null==r||r()};return f([()=>x.map((e=>he.insurerList[he.currentSelectInsure]?he.insurerList[he.currentSelectInsure].personVO[e]:"")),()=>he.currentSelectInsure],(([e,r],[t,s])=>{e.join(",")!==t.join(",")&&r===s&&(console.log(r,"被保人条件变动",s),p(Object.keys(he.productCollection))&&(async e=>{try{const{code:e,data:r,message:t}=await Le({calcProductFactorList:he.insurerList[he.currentSelectInsure].productList.map((({productCode:e,riskList:r})=>{const{productPlanInsureVOList:t}=he.productCollection[e]||{},[{insureProductRiskVOList:s}={}]=t||[];return{productCode:e,planCode:"",riskEditVOList:p(r)?r.map((e=>(console.log("riskItem",e,s),{insureProductRiskVO:(null==s?void 0:s.find((r=>r.riskCode===e.riskCode)))||{},insureRiskEditReqVO:e}))):[]}})),insuredVOList:[he.insurerList[he.currentSelectInsure].personVO],holderVO:he.holder},{isCustomError:!0});"10000"===e&&p(r)&&(he.insurerList[he.currentSelectInsure].productList.forEach((({productCode:e,riskList:t})=>{const{productRiskDyInsureFactorVOList:s}=r[0]||r.find((r=>r.productCode===e))||{};t.forEach((e=>{const r=s.find((r=>r.riskCode===e.riskCode));Object.assign(e,{...e,...r})}))})),$e(rr()))}catch(r){console.log("Error",r)}})(Te()))}),{deep:!0}),f((()=>he.selectedProductCodeList),F((e=>{if(p(e)){console.log("选择的产品变动了",e,ae.exports.cloneDeep(he.insurerList)),er(e.map((e=>({productCode:e}))));const r=Object.keys(he.productCollection),t=null==e?void 0:e.filter((e=>!r.includes(e)));p(t)&&Ge(null==t?void 0:t.map((e=>({productCode:e}))))}})),{deep:!0}),D((()=>{const{selectedProduct:e,selectedProductList:r}=O.$state;he.selectedProductList=r,he.selectedProductCodeList=p(e)?e:[]})),$((()=>{if(B(),P){const e=[{productCode:P}];Ge(e),er(e,!0)}T&&(((e={})=>{pe(e).then((({code:e,data:r})=>{if("10000"===e&&r){const{insuredList:e,holder:t,proposalName:s}=r||{},[{productList:i,...o}]=e||[];he.holder=t,he.insuredPersonVO={...o,proposalName:s};let n=!1;he.insurerList=e.map(((e,r)=>{const{productList:t,...s}=e;return 0===r&&(s.relationToHolder=s.relationToHolder?1:2,We(he.holder.birthday)),{productList:t.filter((e=>(n||1===e.shelfStatus||(n=!0),1===e.shelfStatus))),personVO:s}})),n&&A("计划书中存在已下架产品，请重新生成计划书"),Ge(i.filter((e=>1===e.shelfStatus)).map((e=>({productCode:e.productCode})))),he.productList=i}}))})({id:T}),Ve.value=!0);const e=(T?"编辑":"创建")+"计划书";y.meta.title=e,document.title=e})),(e,t)=>{const p=re,v=te,f=se,I=ie,b=w,y=m,O=le,S=W("ProPageWrap"),P=oe;return o(),n(P,{"theme-vars":d(s)},{default:l((()=>[u(S,{class:"page-create-wrapper"},{default:l((()=>{var e,s;return[a("div",fr,[u(p,{ref_key:"formRef",ref:Ie,class:"mb20",model:d(he).insuredPersonVO},{default:l((()=>[u(d(J),{modelValue:d(he).insuredPersonVO.proposalName,"onUpdate:modelValue":t[0]||(t[0]=e=>d(he).insuredPersonVO.proposalName=e),class:"ra20",label:"计划书名称",name:"proposalName",maxlength:20},null,8,["modelValue"])])),_:1},8,["model"]),u(vr,{config:d(he),"insurer-list":d(he).insurerList,"can-change-select":!0,onValidateTab:je,onCurrentChange:ur,onAdd:dr,onDelete:cr},null,8,["config","insurer-list"])]),d(he).insurerList[d(he).currentSelectInsure]?(o(),h("div",hr,[u(f,{title:"被保人信息",class:"com-pro-form-with-card com-card-body-no-padding insure-containe","show-divider":!1},{default:l((()=>[u(p,{ref_key:"insuredFormRef",ref:ge,model:d(he).insurerList[d(he).currentSelectInsure]},{default:l((()=>[u(d(J),{modelValue:d(he).insurerList[d(he).currentSelectInsure].personVO.name,"onUpdate:modelValue":t[1]||(t[1]=e=>d(he).insurerList[d(he).currentSelectInsure].personVO.name=e),label:"姓名",name:"name",maxlength:20,required:""},null,8,["modelValue"]),0!==d(he).currentSelectInsure&&d(he).insurerList[d(he).currentSelectInsure]?(o(),n(v,{key:0,modelValue:d(he).insurerList[d(he).currentSelectInsure].personVO.relationToMainInsured,"onUpdate:modelValue":t[2]||(t[2]=e=>d(he).insurerList[d(he).currentSelectInsure].personVO.relationToMainInsured=e),label:"与主被保人关系","is-default-selected":!0,name:"relationToMainInsured",columns:Ae(),required:"",onConfirm:Je},null,8,["modelValue","columns"])):M("",!0),u(d(J),{modelValue:d(he).insurerList[d(he).currentSelectInsure].personVO.age,"onUpdate:modelValue":t[4]||(t[4]=e=>d(he).insurerList[d(he).currentSelectInsure].personVO.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",onChange:Ke},{extra:l((()=>[u(d(K),{modelValue:d(he).insurerList[d(he).currentSelectInsure].personVO.birthday,"onUpdate:modelValue":[t[3]||(t[3]=e=>d(he).insurerList[d(he).currentSelectInsure].personVO.birthday=e),Be],class:"birthday-field-wrap",label:"出生日期",name:"birthday"},null,8,["modelValue"])])),_:1},8,["modelValue"]),u(d(X),{modelValue:d(he).insurerList[d(he).currentSelectInsure].personVO.gender,"onUpdate:modelValue":t[5]||(t[5]=e=>d(he).insurerList[d(he).currentSelectInsure].personVO.gender=e),label:"性别",name:"gender",columns:d(Re),disabled:+d(he).insurerList[d(he).currentSelectInsure].personVO.relationToMainInsured==+d(Oe).MATE,required:"",onChange:Xe},null,8,["modelValue","columns","disabled"])])),_:1},8,["model"]),0===d(he).currentSelectInsure?(o(),h(C,{key:0},[kr,u(p,{ref_key:"holderFormRef",ref:be,model:d(he).holder,class:"insure-container"},{default:l((()=>[u(d(X),{modelValue:d(he).insurerList[0].personVO.relationToHolder,"onUpdate:modelValue":t[6]||(t[6]=e=>d(he).insurerList[0].personVO.relationToHolder=e),label:"投被保人是同一人",columns:d(z),required:""},null,8,["modelValue","columns"]),2===d(he).insurerList[0].personVO.relationToHolder?(o(),h(C,{key:0},[u(d(J),{modelValue:d(he).holder.name,"onUpdate:modelValue":t[7]||(t[7]=e=>d(he).holder.name=e),name:"name",label:"姓名",maxlength:20,required:""},null,8,["modelValue"]),u(d(J),{modelValue:d(he).holder.age,"onUpdate:modelValue":t[9]||(t[9]=e=>d(he).holder.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",rules:[{required:!0,message:"请输入年龄"},{trigger:"onChange",validator:Se}],onChange:ze},{extra:l((()=>[u(d(K),{modelValue:d(he).holder.birthday,"onUpdate:modelValue":[t[8]||(t[8]=e=>d(he).holder.birthday=e),We],class:"birthday-field-wrap",label:"出生日期",name:"birthday"},null,8,["modelValue"])])),_:1},8,["modelValue","rules"]),u(d(X),{modelValue:d(he).holder.gender,"onUpdate:modelValue":t[10]||(t[10]=e=>d(he).holder.gender=e),label:"性别",name:"gender",columns:d(Y),required:""},null,8,["modelValue","columns"])],64)):M("",!0)])),_:1},8,["model"])],64)):M("",!0)])),_:1}),u(d(G),{ref:"productFormRef",title:"保障计划",class:"product-container"},{cardTitleExtra:l((()=>[d(qe)?(o(),h("div",{key:0,class:"replace-product",onClick:Ye},[u(I,{name:"refresh",color:"var(--van-primary-color)"}),Cr])):M("",!0)])),default:l((()=>{var e;return[d(he).insurerList[d(he).currentSelectInsure].productList.length>0?(o(!0),h(C,{key:0},V(d(he).insurerList[d(he).currentSelectInsure].productList,((e,r)=>(o(),n(f,{key:`${e.nanoid}_${r}_${e.productCode}`,class:"product-item-card","show-line":!1,"show-divider":!1},{default:l((()=>{var t;return[u(sr,{"product-risk-list":e.riskList,"product-info":e,"product-num":(null==(t=d(he).insurerList[d(he).currentSelectInsure].productList)?void 0:t.length)-1,"product-data":d(he).productCollection[e.productCode],"error-msg":d(he).productErrorMap[e.productCode],"product-index":r,"current-select-insure":d(he).currentSelectInsure,onUpdateRisk:or,onDeleteRisk:tr},null,8,["product-risk-list","product-info","product-num","product-data","error-msg","product-index","current-select-insure"])]})),_:2},1024)))),128)):(o(),h(C,{key:1},[d(De)?(o(),h("div",Vr,[(null==(e=d(he).insurerList[d(he).currentSelectInsure].productList)?void 0:e.length)<=0?(o(),n(ke,{key:0,"empty-img":d(Ce),title:"该成员还未配置产品，去添加吧！","empty-class":"empty-select"},null,8,["empty-img"])):M("",!0),u(b,{activated:"",round:34,onClick:Fe},{default:l((()=>[c("+新增主险")])),_:1})])):M("",!0)],64))]})),_:1},512),d(De)&&d(he).insurerList[d(he).currentSelectInsure].productList.length>0?(o(),h("div",Ir,[u(b,{activated:"",round:34,onClick:Fe},{default:l((()=>[c("+新增主险")])),_:1})])):M("",!0)])):M("",!0),a("div",gr,[a("span",br,[c("总保费"),a("span",yr,g(d(we)?"-":`￥${null==(e=d(xe))?void 0:e.toLocaleString()}`),1)]),a("div",Or,[u(y,{disabled:d(we)||d(he).isLoading,loading:d(he).isLoading,"loading-type":"spinner",type:"primary",onClick:lr},{default:l((()=>[c("保存并预览")])),_:1},8,["disabled","loading"])])]),u(O,{show:d(i),"onUpdate:show":t[11]||(t[11]=e=>k(i)?i.value=e:null),actions:r,"cancel-text":"取消","close-on-click-action":"",onCancel:t[12]||(t[12]=e=>d(L)(!1)),onSelect:ar},null,8,["show"]),u(Pe,{ref_key:"trialPopupRef",ref:ue,"data-source":{[d(Me).productCode]:d(Me)},"product-code":d(he).currentProductCode,"default-data":null==(s=d(he).defaultData)?void 0:s[d(he).currentSelectInsure],onFinish:Ue},null,8,["data-source","product-code","default-data"])]})),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-65f02cb3"]]);export{Pr as default};
