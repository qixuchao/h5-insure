import{d as e,j as r,b$ as t,br as s,o as i,m as o,w as n,a as l,b as a,u,a8 as d,_ as c,aJ as p,ag as m,r as L,cJ as v,z as f,c as h,p as k,F as C,q as V,cA as g,e as I,az as b,bp as y,aA as O,cu as S,aC as P,aD as T,bT as _,k as M,f as R,aO as D,aP as E,bo as w,n as j,E as x,T as A,aI as N,cK as H,h as U,i as F,cL as Y,aF as q,aE as $,bX as B,l as z,ch as J,cM as W,cN as G,cO as K,be as X,an as Q,am as Z,bk as ee,cj as re,cP as te,aN as se,bb as ie,aG as oe}from"./index-412561aa.js";import{A as ne}from"./index-eabae9ad.js";import{l as le}from"./lodash-4e51ded8.js";import{P as ae,u as ue}from"./ProductTips-b029d0cf.js";import"./PolicyInfo-05d8cd2e.js";import{a as de,b as ce,c as pe}from"./createProposal-148e904f.js";import{q as me,d as Le,h as ve}from"./trial-5b4de000.js";import fe from"./index-a3c7ba8b.js";import{_ as he}from"./index-524fa077.js";import{_ as ke}from"./empty-ae586b6c.js";import{a as Ce,b as Ve}from"./format-b5e9d8b9.js";import{C as ge}from"./index-9d195c1e.js";import{R as Ie,a as be}from"./product-7bbf9c44.js";import"./cloneDeep-ec06d814.js";import"./TrialButton-c73dcc30.js";import"./index-dde1691d.js";import"./config-98e8d477.js";import"./isNaN-816dc56e.js";import"./useOrder-4f07b736.js";const ye={class:"trial-button"};var Oe=c(e({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:c,emit:L}){const v=e,f=r(null);t(s,{insuredFactorCodes:["hasSocialInsurance","occupationCodeList"],holderFactorCodes:["birthday","gender","hasSocialInsurance","occupationCodeList"]});const h=(e,r)=>{const{holder:t,insuredList:s,productCode:i}=e||{},{productList:o,...n}=(null==s?void 0:s[0])||{},{riskList:l,...a}=o.find((e=>i===e.productCode))||(null==o?void 0:o[0])||{},u=p(null==r?void 0:r.riskPremiumDetailVOList)?null==r?void 0:r.riskPremiumDetailVOList.reduce(((e,r)=>(e[r.riskCode]={initialPremium:r.initialPremium,initialAmount:r.initialAmount,unitAmount:r.unitAmount,unitPremium:r.unitPremium},e)),{}):{},d=(l||[]).map((e=>{var r,t,s,i;return{...e,unitPremium:null==(r=null==u?void 0:u[e.riskCode])?void 0:r.unitPremium,unitAmount:null==(t=null==u?void 0:u[e.riskCode])?void 0:t.unitAmount,initialPremium:null==(s=null==u?void 0:u[e.riskCode])?void 0:s.initialPremium,initialAmount:null==(i=null==u?void 0:u[e.riskCode])?void 0:i.initialAmount}}));return{productCode:i,holder:t,insuredPersonVO:n,insuredProductInfo:{productCode:i,...a,productName:v.productName,occupationCodeList:null==n?void 0:n.occupationCodeList,riskList:d}}};return c({...["open","close"].reduce(((e,r)=>(e[r]=(...e)=>{var t;null==(t=f.value)||t[r](...e)},e)),{}),formatData:h}),(e,r)=>{const t=m;return i(),o(fe,{ref_key:"trialRef",ref:f,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{trialBtn:n((e=>[l("div",ye,[a(t,{disabled:!u(f).getTrialSuccessFlag(),type:"primary",onClick:r=>(({trialData:e,riskPremium:r,personalInfoRef:t})=>"function"==typeof(null==t?void 0:t.canTrail)&&t.canTrail()?L("finish",h({...e,productCode:v.productCode},r)):"function"==typeof(null==t?void 0:t.validate)&&t.validate())(e)},{default:n((()=>[d("确定")])),_:2},1032,["disabled","onClick"])])])),_:1},8,["product-info"])}}}),[["__scopeId","data-v-976d8210"]]);const Se={class:"com-risk-list-wrapper"},Pe=(e=>(P("data-v-7d3c3028"),e=e(),T(),e))((()=>l("div",{class:"popup-title"},"选择附加险",-1))),Te={class:"risk-list"},_e={class:"cell-title"},Me={class:"title"},Re={class:"footer-button"};var De=c(e({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:t}){const s=e,c=r([]),p=r([]),P=r([...s.disabled]),T=L({show:s.show,currentChecked:[...s.modelValue]}),_=e=>{var r,t,i;if(P.value.includes(e))return;((e,r)=>{if(!s.collocationList.length)return r?void(T.currentChecked=[]):void T.currentChecked.push(e);let t=T.currentChecked,i=P.value;r?(s.collocationList.forEach((r=>{e===r.riskId&&(2===r.collocationType?t=t.filter((t=>t!==r.collocationRiskId||t!==e)):3===r.collocationType?(t=t.filter((r=>r!==e)),i=i.filter((e=>e!==r.collocationRiskId))):t=t.filter((r=>r!==e)))})),T.currentChecked=t,P.value=i):(s.collocationList.forEach((s=>{e===s.riskId&&(r||(2===s.collocationType?t.push(s.collocationRiskId):3===s.collocationType&&i.push(s.collocationRiskId),t.push(e)))})),T.currentChecked.push(...t),P.value=i)})(e,T.currentChecked.includes(e)),null==(i=null==(t=null==(r=null==c?void 0:c.value)?void 0:r[e])?void 0:t.toggle)||i.call(t)},M=()=>{t("close")},R=()=>{const e=s.riskList.filter((e=>T.currentChecked.includes(e.id)));t("update:modelValue",[...new Set(p.value)]),t("finished",e,P.value),t("close")};return v((()=>{c.value=[]})),f((()=>T.currentChecked),(e=>{p.value=e}),{deep:!0,immediate:!0}),f((()=>s.modelValue),(e=>{p.value=e||[],P.value.push(...e||[])}),{deep:!0,immediate:!0}),(e,r)=>{const t=b,s=y,L=ge,v=O,f=m,D=S;return i(),h("div",Se,[a(D,{show:u(T).show,"onUpdate:show":r[1]||(r[1]=e=>u(T).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:M},{default:n((()=>[Pe,l("div",Te,[a(v,{modelValue:u(p),"onUpdate:modelValue":r[0]||(r[0]=e=>k(p)?p.value=e:null)},{default:n((()=>[a(L,{inset:""},{default:n((()=>[(i(!0),h(C,null,V(e.riskList,(e=>(i(),o(s,{key:e.id,title:e.riskName,disabled:u(P).includes(e.id),onClick:r=>_(e.id)},{"right-icon":n((()=>[a(t,{ref_for:!0,ref:r=>u(c)[e.id]=r,shape:"square",disabled:u(P).includes(e.id),name:e.id,onClick:g((r=>_(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:n((()=>[l("div",_e,[l("div",Me,I(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),l("div",Re,[a(f,{type:"primary",disabled:!u(T).currentChecked.length,block:"",onClick:R},{default:n((()=>[d("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const Ee=e=>(P("data-v-76757b34"),e=e(),T(),e),we={class:"com-product-list-wrapper"},je={class:"risk-item-wrapper"},xe={class:"content"},Ae={class:"risk-factor"},Ne={class:"factor"},He={class:"factor-value"},Ue=Ee((()=>l("span",{class:"factor-name"}," 保额(元) ",-1))),Fe={class:"factor"},Ye={class:"factor-value"},qe=Ee((()=>l("span",{class:"factor-name"}," 保障期间 ",-1))),$e={class:"factor"},Be={class:"factor-value"},ze=Ee((()=>l("span",{class:"factor-name"}," 交费期间 ",-1))),Je={class:"operate-bar-wrap"},We={class:"risk-premium"},Ge={class:"premium"},Ke={key:0,class:"operate-bar"},Xe=e({name:"ProductList"});var Qe=c(e({...Xe,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0},errorMsg:{default:""},productIndex:{},currentSelectInsure:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:t}){const s=e,[c,p]=_(),m=r({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),L=M((()=>{var e,r;return(null==(r=null==(e=s.productData)?void 0:e.productRiskVoList)?void 0:r[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]}));M((()=>{var e,r;const t=s.productRiskList.map((e=>e.riskId)),i=((null==(r=null==(e=s.productData)?void 0:e.productRiskVoList)?void 0:r[0].riskDetailVOList)||[]).filter((e=>t.includes(e.id)&&1===e.collocationType));return L.value.length-i.length}));const v=M((()=>e=>{var r,t;const i=(null==(t=null==(r=s.productData)?void 0:r.productRiskVoList)?void 0:t[0].riskDetailVOList.find((r=>r.id!==e)))||{};let o=!1;return o=!!s.productNum||2===i.riskType&&1===i.collocationType,o})),k=M((()=>{var e,r;return(null==(r=null==(e=s.productData)?void 0:e.productRiskVoList)?void 0:r[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),g=M((()=>k.value.collocationVOList||[])),b=(e,r)=>{const i=e.map((e=>e.id)).filter((e=>!m.value.disabledList.includes(e)));t("addRiderRisk",i,s.productInfo)};return f((()=>s.productInfo),(e=>{let r=0;(e.riskList||[]).forEach((e=>{r+=e.initialPremium})),m.value.totalPremium=r}),{deep:!0,immediate:!0}),f((()=>s.productRiskList),(e=>{const r=[],t=[],s=[];(e||[]).forEach((e=>{1===e.riskType?r.unshift(e):(t.push(e.riskId),s.push(e.riskId),r.push(e))})),m.value.disabledList=t,m.value.checkedList=s,m.value.productRiskList=r}),{deep:!0,immediate:!0}),(e,r)=>{const f=D,k=E;return i(),h("div",we,[(i(!0),h(C,null,V(u(m).productRiskList,(r=>{var c,p;return i(),h("div",{key:r.riskId},[l("div",je,[a(f,{"risk-type":r.riskType,title:r.riskName,class:"no-border"},null,8,["risk-type","title"]),l("div",xe,[l("div",Ae,[l("div",Ne,[l("span",He,I((null==(c=r.initialAmount)?void 0:c.toLocaleString())||"-"),1),Ue]),l("div",Fe,[l("span",Ye,I(u(Ce)(r.coveragePeriod)||"-"),1),qe]),l("div",$e,[l("span",Be,I(u(Ve)(r.chargePeriod)||"-"),1),ze])]),l("div",Je,[l("div",We,[d(" 保费:"),l("span",Ge,I(!e.errorMsg&&r.initialPremium?`￥${null==(p=r.initialPremium)?void 0:p.toLocaleString()}`:"-"),1)]),2!==r.riskType?(i(),h("div",Ke,[e.currentSelectInsure>0||u(v)(r.riskId)&&e.productIndex>0?(i(),o(k,{key:0,round:32,class:"border",onClick:e=>{t("deleteRisk",r,s.productInfo)}},{default:n((()=>[d("删除")])),_:2},1032,["onClick"])):R("",!0),a(k,{activated:"",onClick:e=>{t("updateRisk",r,s.productInfo)}},{default:n((()=>[d("修改")])),_:2},1032,["onClick"])])):R("",!0)])])])])})),128)),u(c)?(i(),o(De,{key:0,modelValue:u(m).checkedList,"onUpdate:modelValue":r[0]||(r[0]=e=>u(m).checkedList=e),show:u(c),disabled:u(m).disabledList,"risk-list":u(L),"collocation-list":u(g),onFinished:b,onClose:r[1]||(r[1]=e=>u(p)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):R("",!0),a(ae,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-76757b34"]]);const Ze=e=>(P("data-v-21e2f380"),e=e(),T(),e),er={class:"insurer-list"},rr=["onClick"],tr=Ze((()=>l("span",{class:"insure-name"},"被保人",-1))),sr={key:0,class:"insure-relate"},ir={key:1,class:"insure-relate"},or=["onClick"],nr=Ze((()=>l("div",{class:"gap"},null,-1))),lr=Ze((()=>l("span",null,"+",-1))),ar=e({name:"InsurerSelect"});var ur=c(e({...ar,props:{insurerList:{default:()=>[]},config:{default:()=>{}},canChangeSelect:{type:Boolean,default:()=>!0}},emits:["listChange","currentChange","add","delete","validateTab"],setup(e,{expose:t,emit:s}){const o=e,n=r(),a=r(),c=r({currentSelected:0}),p=r(o.insurerList),m=(e=!1)=>{x((()=>{var r;null==(r=n.value[c.value.currentSelected])||r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),0===c.value.currentSelected?a.value.scrollLeft=0:e&&c.value.currentSelected>=3&&(a.value.scrollLeft=a.value.scrollWidth)}))};w((()=>{m(!0)}));const L=e=>{var r;if((null==e?void 0:e.personVO)&&(null==(r=null==e?void 0:e.personVO)?void 0:r.relationToMainInsured)){const r=Ie.find((r=>{var t;return r.value===`${null==(t=null==e?void 0:e.personVO)?void 0:t.relationToMainInsured}`}));if(r)return r.label}return"关系"},v=()=>!(!p.value[c.value.currentSelected].productList||p.value[c.value.currentSelected].productList.length<=0),k=()=>{v()?s("validateTab",(()=>{p.value.push({}),c.value.currentSelected=p.value.length-1,s("add",{},p.value.length-1)})):A("请确认信息是否录入完整!")};return f((()=>o.insurerList.length),(()=>{p.value=o.insurerList,m()}),{deep:!0,immediate:!0}),t({updateInsurer:(e,r)=>{}}),(e,r)=>(i(),h("div",er,[l("div",{ref_key:"tabsRef",ref:a,class:"list"},[(i(!0),h(C,null,V(u(p),((e,r)=>(i(),h("div",{ref_for:!0,ref_key:"tabRef",ref:n,key:`insure_${r}`,class:j("insure-box "+(r===u(c).currentSelected?"selected":"")),onClick:e=>((e,r)=>{v()?o.canChangeSelect&&s("validateTab",(()=>{c.value.currentSelected=r,s("currentChange",r),m()})):A("请确认信息是否录入完整!")})(0,r)},[tr,0===r?(i(),h("span",sr,"本人")):(i(),h("span",ir,I(L(e)),1)),r>0?(i(),h("div",{key:2,class:"delete-btn",onClick:e=>((e,r)=>{e.preventDefault(),e.stopPropagation(),e.cancelBubble=!0,N.confirm({message:"确定要删除该被保人吗？"}).then((()=>{s("delete",r,(()=>{r<c.value.currentSelected?(c.value.currentSelected-=1,s("currentChange",c.value.currentSelected)):r===c.value.currentSelected&&(c.value.currentSelected=0,s("currentChange",0))}))})).catch((()=>{}))})(e,r)},"×",8,or)):R("",!0)],10,rr)))),128))],512),l("div",{class:"operate"},[nr,l("div",{class:"add-btn",onClick:k},[lr,d(" 被保人")])])]))}}),[["__scopeId","data-v-21e2f380"]]);const dr={class:"proposal-header"},cr={key:0,class:"container"},pr=(e=>(P("data-v-79175678"),e=e(),T(),e))((()=>l("div",{class:"title-tip-icon"},"投保人信息",-1))),mr={key:0,class:"operate-bar"},Lr={key:0,class:"operate-bar"},vr={class:"footer-bar"},fr={class:"trial-result"},hr={class:"result-num"},kr={class:"trial-operate"},Cr=e({name:"CreateProposal"});var Vr=c(e({...Cr,setup(e){const t=[{name:"保存修改"},{name:"另存为新计划书"}],s=H();_();const[c,v]=_(),g=r({holder:{},insuredList:[{name:"",gender:"",birthday:"",productList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),b=U(),y=F(),O=ue(),S={},{productCode:P,id:T,preview:D}=y.query,j=["age","gender","birthday","hasSocialInsurance","occupationCodeList"],ae=r(null),fe=L({selectedProductCodeList:[],selectedProductList:[],insuredPersonVO:{},insurerList:[],currentProductCode:"",holder:{},productList:[],productCollection:{},productErrorMap:{},defaultData:null,currentSelectInsure:0,isLoading:!1}),Ce=r(!1),Ve=r(null),ge=r(null),ye=r(null),Se=(e,r,t)=>e?+e<18?"投保人年龄不得小于18周岁":"":"请输入投保人年龄";M((()=>{var e;return(null==(e=fe.insurerList[fe.currentSelectInsure])?void 0:e.productList)?fe.insurerList[fe.currentSelectInsure].productList.map((e=>e.productCode)).filter((e=>Boolean(e))):[]}));const Pe=()=>fe.insurerList[fe.currentSelectInsure].productList.map((e=>e.productCode)).filter((e=>Boolean(e))),Te=M((()=>{const{productPlanInsureVOList:e}=fe.productCollection[P]||{},[{insureProductRiskVOList:r=[]}={}]=e||[],{riskInsureLimitVO:t}=(null==r?void 0:r.find((e=>1===e.riskType)))||{};return null==t?void 0:t.sexLimit})),_e=M((()=>"-1"!==Te.value&&Te.value?Y.filter((e=>Te.value===e.value)):Y)),Me=M((()=>{var e;return(null==(e=fe.productCollection)?void 0:e[fe.currentProductCode])||{}})),Re=e=>(e.insuredList=e.insuredList.map((e=>(e.productList=e.productList.map((e=>(e.riskList=e.riskList.map((e=>({...e,initialPremium:e.unitPremium||e.initialPremium,initialAmount:e.unitAmount||e.initialAmount}))),e))),e))),e),De=M((()=>{var e,r;return(null==(r=null==(e=Me.value)?void 0:e.productPlanInsureVOList)?void 0:r[0])||{}}));M((()=>{var e,r,t;return null==(t=null==(r=null==(e=Me.value)?void 0:e.productPlanInsureVOList)?void 0:r[0])?void 0:t.multiInsuredConfigVO}));const Ee=M((()=>!Ce.value||Boolean(Object.values(fe.productErrorMap).join("")))),we=M((()=>"1"!=`${D}`)),je=M((()=>fe.insurerList.reduce(((e,r)=>+(r.productList.reduce(((e,r)=>+e+ +r.riskList.reduce(((e,r)=>+e+ +(r.initialPremium||0)),0)),0)+ +e)),0))),xe=e=>{var r,t;const s=[null==(r=ge.value)?void 0:r.validate()];if(0===fe.currentSelectInsure){if(1===fe.insurerList[0].personVO.relationToHolder&&fe.insurerList[0].personVO.age<18||1!==fe.insurerList[0].personVO.relationToHolder&&fe.holder.age<18)return void A("投保人年龄不得小于18周岁");s.push(null==(t=ye.value)?void 0:t.validate())}Promise.all(s).then((()=>{e()})).catch((e=>{A("请确认信息是否录入完整!")}))},Ae=()=>{const e=fe.insurerList.findIndex((({personVO:e})=>e.relationToMainInsured===+be.MATE));return Ie.map((r=>r.value===be.SELF||r.value===be.MATE&&e>=0&&e!==fe.currentSelectInsure?{...r,disabled:!0}:{...r}))},Ne=(e,r="")=>{fe.productErrorMap[e]=r},He=e=>{const r=fe.insurerList[fe.currentSelectInsure].productList.findIndex((r=>r.productCode===e.productCode)),t={...e.insuredProductInfo,nanoid:ee(),productName:S[e.productCode]};if(-1===r)return fe.insurerList[fe.currentSelectInsure].productList.push(t),!1;const s=fe.insurerList[fe.currentSelectInsure].productList[r],{riskList:i,...o}=t;fe.insurerList[fe.currentSelectInsure].productList[r]={...t,...o,riskList:p(i)?i.map((e=>({...s.riskList.find((r=>r.riskCode===e.riskCode)),...e}))):[]}},Ue=e=>{var r;Object.assign(fe.holder,e.holder),0===fe.currentSelectInsure&&(e.insuredPersonVO.relationToHolder=fe.insurerList[fe.currentSelectInsure].personVO.relationToHolder),fe.insurerList[fe.currentSelectInsure]&&Object.assign(fe.insurerList[fe.currentSelectInsure].personVO,e.insuredPersonVO),He(e),Ne(e.productCode),Ce.value=!0,null==(r=ae.value)||r.close()},Fe=()=>{var e;const r=[null==(e=ge.value)?void 0:e.validate()];Promise.all(r).then((()=>{O.setProposalInfo(g.value),O.setExcludeProduct(Pe()),O.setInsuredPersonVO(fe.insurerList[fe.currentSelectInsure].personVO),b.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})})).catch((e=>{A("请确认被保人信息是否录入完整!")}))},Ye=e=>{const r=Re(e);ve(r,{isCustomError:!0}).then((({code:e,data:t,message:s})=>{var i;e===oe&&t?((null==t?void 0:t.errorInfo)&&A(`${null==t?void 0:t.errorInfo}`),p(t.riskPremiumDetailVOList)&&He(null==(i=ae.value)?void 0:i.formatData(r,t)),Ne(r.productCode),Ce.value=!0):Ne(r.productCode,s)}))},qe=e=>{e&&(fe.insurerList[fe.currentSelectInsure].personVO.age=Q(new Date).diff(e,"year"))},$e=e=>{e&&(fe.holder.age=Q(new Date).diff(e,"year"))},Be=e=>{const{value:r}=e;let t={age:30,birthday:Q().subtract(30,"year").format("YYYY-MM-DD"),gender:+Z.MALE};[be.MATE,be.CHILD].includes(r)?t={age:r===be.MATE?fe.insurerList[0].personVO.age:0,birthday:r===be.MATE?fe.insurerList[0].personVO.birthday:Q().subtract(28,"day").format("YYYY-MM-DD"),gender:r===be.MATE?1==+fe.insurerList[0].personVO.gender?2:1:+Z.MALE}:be.PARENT===r&&(t={age:+fe.insurerList[0].personVO.age+18,birthday:Q(fe.insurerList[0].personVO.birthday).subtract(18,"year").format("YYYY-MM-DD"),gender:+Z.MALE}),Object.assign(fe.insurerList[fe.currentSelectInsure].personVO,t)},ze=()=>{fe.insurerList[fe.currentSelectInsure].personVO.birthday=""},Je=()=>{if(0===fe.currentSelectInsure){const e=fe.insurerList.findIndex((e=>!(!e||!e.personVO)&&+e.personVO.relationToMainInsured==+be.MATE));-1!==e&&(fe.insurerList[e].personVO.gender=1==+fe.insurerList[0].personVO.gender?2:1)}},We=()=>{fe.holder.birthday=""},Ge=e=>{de(e).then((({code:e,data:r})=>{"10000"===e&&p(r)&&r.reduce(((e,r)=>(e[r.productCode]=r,S[r.productCode]=r.productName,e)),fe.productCollection)})).finally((()=>{}))},Ke=()=>{if(1==+fe.insurerList[0].personVO.relationToHolder){const{relationToHolder:e,relationToMainInsured:r,productList:t,...s}=fe.insurerList[0].personVO;return T&&(s.id=fe.holder.id),s}return fe.holder},Xe=e=>0===e&&2==+fe.insurerList[e].personVO.relationToHolder?{...fe.insurerList[e].personVO,relationToHolder:null}:fe.insurerList[e].personVO,Ze=async(e,r=!1)=>{if(!p(e))return;const{code:t,data:s}=await me({calcProductFactorList:e,...fe.insurerList[fe.currentSelectInsure]&&fe.insurerList[fe.currentSelectInsure].personVO||{}},{isCustomError:!r});"10000"===t&&s&&p(s)&&s.forEach((e=>{const{holder:t,insuredList:s,productCode:i}=e,{productList:o,...n}=(s||[])[0]||{},[{riskList:l=[],...a}={}]=o||[],u={productCode:i,...a,riskList:l};r&&(fe.insurerList[fe.currentSelectInsure]&&Object.assign(fe.insurerList[fe.currentSelectInsure].personVO,n,{relationToHolder:1}),Object.assign(fe.holder,t)),s.forEach(((e,r)=>{const{productList:t,...s}=e;0===fe.insurerList.length&&(s.relationToMainInsured||(s.relationToMainInsured=be.SELF),fe.insurerList.push({productList:t.map((e=>({...e,productCode:i}))),personVO:s}))}));const d=Pe().findIndex((e=>e===i));d>-1?fe.productList[d]=u:fe.productList.push(u),x((()=>{Ye({...e,holder:{...Ke()},insuredList:[{...Xe(fe.currentSelectInsure),productList:o}]})}))}))},er=e=>fe.insurerList[fe.currentSelectInsure].productList.filter((r=>r.productCode===e)).map((({productCode:e,riskList:r})=>{const{productPlanInsureVOList:t}=fe.productCollection[e]||{},[{insureProductRiskVOList:s}={}]=t||[];return{productCode:e,riskEditVOList:p(r)?r.filter((e=>1===e.riskType)).map((({riskCode:e})=>({insureProductRiskVO:{...(null==s?void 0:s.find((r=>r.riskCode===e)))||{}}}))):[]}})),rr=e=>(fe.insurerList[fe.currentSelectInsure].productList.find((r=>r.productCode===e)),{holder:{...Ke()},insuredList:[{...Xe(fe.currentSelectInsure),productList:fe.insurerList[fe.currentSelectInsure].productList}],productCode:e}),tr=(e,r)=>{const t=r;N.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?fe.insurerList[fe.currentSelectInsure].productList=fe.insurerList[fe.currentSelectInsure].productList.filter((e=>e.productCode!==t.productCode)).map((e=>({...e,nanoid:ee()}))):t.riskList=t.riskList.filter((r=>r.riskId!==e.riskId)),Ne(t.productCode)}))},sr=(e,r)=>{var t,s;const i=null==(t=e.insuredList)?void 0:t[0],o=(null==(s=i.productList)?void 0:s.find((e=>e.productCode===r)))||{};return i.occupationClass=null==o?void 0:o.occupationClass,i.occupationCodeList=null==o?void 0:o.occupationCodeList,i.productList=i.productList.filter((e=>e.productCode===r)),e},ir=(e,r)=>{var t;fe.currentProductCode=r.productCode;const s=Re(le.exports.cloneDeep(rr(r.productCode)));fe.defaultData=[sr(s,r.productCode)],null==(t=ae.value)||t.open()},or=e=>{var r,t,s;if(fe.insurerList.some((e=>0===e.productList.length)))return void A("请先添加产品");const i=[null==(r=Ve.value)?void 0:r.validate(),null==(t=ge.value)?void 0:t.validate()];if(0===fe.currentSelectInsure){if(1===fe.insurerList[0].personVO.relationToHolder&&fe.insurerList[0].personVO.age<18||1!==fe.insurerList[0].personVO.relationToHolder&&fe.holder.age<18)return void A("投保人年龄不得小于18周岁");i.push(null==(s=ye.value)?void 0:s.validate())}Promise.all(i).then((()=>{fe.isLoading=!0,pe({holder:{...Ke()},insuredList:fe.insurerList.map(((e,r)=>({...Xe(r),productList:e.productList.map((e=>({...e,productName:S[e.productCode]})))}))),proposalName:fe.insuredPersonVO.proposalName,totalPremium:je.value,relationUserType:2,id:e}).then((e=>{const{code:r,data:t}=e||{};"10000"===r&&(O.$reset(),b.push({path:"/compositionProposal",query:{id:t,preview:D}}))})).catch((()=>{fe.isLoading=!1}))}))},nr=()=>{T?v(!0):or(T)},lr=(e,r)=>{or(r?void 0:T)},ar=e=>{var r;fe.currentSelectInsure=e,(null==(r=fe.insurerList[e])?void 0:r.productList.length)>0?Ge(fe.insurerList[e].productList.map((({productCode:e})=>({productCode:e})))):fe.productCollection={}},Cr=(e,r)=>{if(fe.insurerList.length-1===r){const t=fe.insurerList.findIndex((e=>!(!e||!e.personVO)&&+e.personVO.relationToMainInsured==+be.MATE));fe.insurerList[r]={...e,personVO:{age:t<0?fe.insurerList[0].personVO.age:0,birthday:t<0?fe.insurerList[0].personVO.birthday:Q().subtract(28,"day").format("YYYY-MM-DD"),relationToMainInsured:t<0?be.MATE:be.CHILD,gender:t<0?1==+fe.insurerList[0].personVO.gender?2:1:Z.MALE},productList:[]}}fe.currentSelectInsure=r,fe.productCollection={}},Vr=(e,r)=>{fe.insurerList.splice(e,1),null==r||r()};return f([()=>j.map((e=>fe.insurerList[fe.currentSelectInsure]?fe.insurerList[fe.currentSelectInsure].personVO[e]:"")),()=>fe.currentSelectInsure],(([e,r],[t,s])=>{e.join(",")!==t.join(",")&&r===s&&(console.log(r,"被保人条件变动",s),p(Object.keys(fe.productCollection))&&Pe().forEach((e=>(async e=>{try{const{code:r,data:t,message:s}=await Le({calcProductFactorList:er(e),...fe.insurerList[fe.currentSelectInsure].personVO},{isCustomError:!0});"10000"===r&&p(t)?(fe.insurerList[fe.currentSelectInsure].productList.forEach((({productCode:e,riskList:r})=>{const{productRiskDyInsureFactorVOList:s}=t[0]||t.find((r=>r.productCode===e))||{};r.forEach((e=>{const r=s.find((r=>r.riskCode===e.riskCode));Object.assign(e,{...e,...r})}))})),Ye(rr(e)),Ne(e)):Ne(e,s)}catch(r){console.log("Error",r)}})(e))))}),{deep:!0}),f((()=>fe.selectedProductCodeList),q((e=>{if(p(e)){console.log("选择的产品变动了",e,le.exports.cloneDeep(fe.insurerList)),Ze(e.map((e=>({productCode:e}))));const r=Object.keys(fe.productCollection),t=null==e?void 0:e.filter((e=>!r.includes(e)));p(t)&&Ge(null==t?void 0:t.map((e=>({productCode:e}))))}})),{deep:!0}),w((()=>{const{selectedProduct:e,selectedProductList:r}=O.$state;fe.selectedProductList=r,fe.selectedProductCodeList=p(e)?e:[]})),$((()=>{if(B(),P){const e=[{productCode:P}];Ge(e),Ze(e,!0)}T&&(((e={})=>{ce(e).then((({code:e,data:r})=>{if("10000"===e&&r){const{insuredList:e,holder:t,proposalName:s}=r||{},[{productList:i,...o}]=e||[];fe.holder=t,fe.insuredPersonVO={...o,proposalName:s};let n=!1;fe.insurerList=e.map(((e,r)=>{const{productList:t,...s}=e;return 0===r&&(s.relationToHolder=s.relationToHolder?1:2,$e(fe.holder.birthday)),{productList:t.filter((e=>(n||1===e.shelfStatus||(n=!0),1===e.shelfStatus))),personVO:s}})),n&&A("计划书中存在已下架产品，请重新生成计划书"),Ge(i.filter((e=>1===e.shelfStatus)).map((e=>({productCode:e.productCode})))),fe.productList=i}}))})({id:T}),Ce.value=!0);const e=(T?"编辑":"创建")+"计划书";y.meta.title=e,document.title=e})),(e,r)=>{const p=re,L=te,f=se,g=E,b=m,y=ne,O=z("ProPageWrap"),S=ie;return i(),o(S,{"theme-vars":u(s)},{default:n((()=>[a(O,{class:"page-create-wrapper"},{default:n((()=>{var e;return[l("div",dr,[a(p,{ref_key:"formRef",ref:Ve,class:"mb20",model:u(fe).insuredPersonVO},{default:n((()=>[a(u(J),{modelValue:u(fe).insuredPersonVO.proposalName,"onUpdate:modelValue":r[0]||(r[0]=e=>u(fe).insuredPersonVO.proposalName=e),class:"ra20",label:"计划书名称",name:"proposalName",maxlength:20},null,8,["modelValue"])])),_:1},8,["model"]),a(ur,{config:u(fe),"insurer-list":u(fe).insurerList,"can-change-select":!0,onValidateTab:xe,onCurrentChange:ar,onAdd:Cr,onDelete:Vr},null,8,["config","insurer-list"])]),u(fe).insurerList[u(fe).currentSelectInsure]?(i(),h("div",cr,[a(f,{title:"被保人信息",class:"com-pro-form-with-card com-card-body-no-padding insure-containe","show-divider":!1},{default:n((()=>[a(p,{ref_key:"insuredFormRef",ref:ge,model:u(fe).insurerList[u(fe).currentSelectInsure]},{default:n((()=>[a(u(J),{modelValue:u(fe).insurerList[u(fe).currentSelectInsure].personVO.name,"onUpdate:modelValue":r[1]||(r[1]=e=>u(fe).insurerList[u(fe).currentSelectInsure].personVO.name=e),label:"姓名",name:"name",maxlength:20,required:""},null,8,["modelValue"]),0!==u(fe).currentSelectInsure&&u(fe).insurerList[u(fe).currentSelectInsure]?(i(),o(L,{key:0,modelValue:u(fe).insurerList[u(fe).currentSelectInsure].personVO.relationToMainInsured,"onUpdate:modelValue":r[2]||(r[2]=e=>u(fe).insurerList[u(fe).currentSelectInsure].personVO.relationToMainInsured=e),label:"与主被保人关系","is-default-selected":!0,name:"relationToMainInsured",columns:Ae(),required:"",onConfirm:Be},null,8,["modelValue","columns"])):R("",!0),a(u(J),{modelValue:u(fe).insurerList[u(fe).currentSelectInsure].personVO.age,"onUpdate:modelValue":r[4]||(r[4]=e=>u(fe).insurerList[u(fe).currentSelectInsure].personVO.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",onChange:ze},{extra:n((()=>[a(u(W),{modelValue:u(fe).insurerList[u(fe).currentSelectInsure].personVO.birthday,"onUpdate:modelValue":[r[3]||(r[3]=e=>u(fe).insurerList[u(fe).currentSelectInsure].personVO.birthday=e),qe],class:"birthday-field-wrap",label:"出生日期",name:"birthday"},null,8,["modelValue"])])),_:1},8,["modelValue"]),a(u(G),{modelValue:u(fe).insurerList[u(fe).currentSelectInsure].personVO.gender,"onUpdate:modelValue":r[5]||(r[5]=e=>u(fe).insurerList[u(fe).currentSelectInsure].personVO.gender=e),label:"性别",name:"gender",columns:u(_e),disabled:+u(fe).insurerList[u(fe).currentSelectInsure].personVO.relationToMainInsured==+u(be).MATE,required:"",onChange:Je},null,8,["modelValue","columns","disabled"])])),_:1},8,["model"]),0===u(fe).currentSelectInsure?(i(),h(C,{key:0},[pr,a(p,{ref_key:"holderFormRef",ref:ye,model:u(fe).holder,class:"insure-container"},{default:n((()=>[a(u(G),{modelValue:u(fe).insurerList[0].personVO.relationToHolder,"onUpdate:modelValue":r[6]||(r[6]=e=>u(fe).insurerList[0].personVO.relationToHolder=e),label:"投被保人是同一人",columns:u(K),required:""},null,8,["modelValue","columns"]),2===u(fe).insurerList[0].personVO.relationToHolder?(i(),h(C,{key:0},[a(u(J),{modelValue:u(fe).holder.name,"onUpdate:modelValue":r[7]||(r[7]=e=>u(fe).holder.name=e),name:"name",label:"姓名",maxlength:20,required:""},null,8,["modelValue"]),a(u(J),{modelValue:u(fe).holder.age,"onUpdate:modelValue":r[9]||(r[9]=e=>u(fe).holder.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",rules:[{required:!0,message:"请输入年龄"},{trigger:"onChange",validator:Se}],onChange:We},{extra:n((()=>[a(u(W),{modelValue:u(fe).holder.birthday,"onUpdate:modelValue":[r[8]||(r[8]=e=>u(fe).holder.birthday=e),$e],class:"birthday-field-wrap",label:"出生日期",name:"birthday"},null,8,["modelValue"])])),_:1},8,["modelValue","rules"]),a(u(G),{modelValue:u(fe).holder.gender,"onUpdate:modelValue":r[10]||(r[10]=e=>u(fe).holder.gender=e),label:"性别",name:"gender",columns:u(Y),required:""},null,8,["modelValue","columns"])],64)):R("",!0)])),_:1},8,["model"])],64)):R("",!0)])),_:1}),a(u(X),{ref:"productFormRef",title:"保障计划",class:"product-container"},{default:n((()=>{var e;return[u(fe).insurerList[u(fe).currentSelectInsure].productList.length>0?(i(!0),h(C,{key:0},V(u(fe).insurerList[u(fe).currentSelectInsure].productList,((e,r)=>(i(),o(f,{key:`${e.nanoid}_${r}_${e.productCode}`,class:"product-item-card","show-line":!1,"show-divider":!1},{default:n((()=>{var t;return[a(Qe,{"product-risk-list":e.riskList,"product-info":e,"product-num":(null==(t=u(fe).insurerList[u(fe).currentSelectInsure].productList)?void 0:t.length)-1,"product-data":u(fe).productCollection[e.productCode],"error-msg":u(fe).productErrorMap[e.productCode],"product-index":r,"current-select-insure":u(fe).currentSelectInsure,onUpdateRisk:ir,onDeleteRisk:tr},null,8,["product-risk-list","product-info","product-num","product-data","error-msg","product-index","current-select-insure"])]})),_:2},1024)))),128)):(i(),h(C,{key:1},[u(we)?(i(),h("div",mr,[(null==(e=u(fe).insurerList[u(fe).currentSelectInsure].productList)?void 0:e.length)<=0?(i(),o(he,{key:0,"empty-img":u(ke),title:"该成员还未配置产品，去添加吧！","empty-class":"empty-select"},null,8,["empty-img"])):R("",!0),a(g,{activated:"",round:34,onClick:Fe},{default:n((()=>[d("添加产品")])),_:1})])):R("",!0)],64))]})),_:1},512),u(we)&&u(fe).insurerList[u(fe).currentSelectInsure].productList.length>0?(i(),h("div",Lr,[a(g,{activated:"",round:34,onClick:Fe},{default:n((()=>[d("添加产品")])),_:1})])):R("",!0)])):R("",!0),l("div",vr,[l("span",fr,[d("总保费"),l("span",hr,I(u(Ee)?"-":`￥${null==(e=u(je))?void 0:e.toLocaleString()}`),1)]),l("div",kr,[a(b,{disabled:u(Ee)||u(fe).isLoading,loading:u(fe).isLoading,"loading-type":"spinner",type:"primary",onClick:nr},{default:n((()=>[d("保存并预览")])),_:1},8,["disabled","loading"])])]),a(y,{show:u(c),"onUpdate:show":r[11]||(r[11]=e=>k(c)?c.value=e:null),actions:t,"cancel-text":"取消","close-on-click-action":"",onCancel:r[12]||(r[12]=e=>u(v)(!1)),onSelect:lr},null,8,["show"]),a(Oe,{ref_key:"trialPopupRef",ref:ae,"data-source":u(De),"product-code":u(fe).currentProductCode,"default-data":u(fe).defaultData,onFinish:Ue},null,8,["data-source","product-code","default-data"])]})),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-79175678"]]);export{Vr as default};
