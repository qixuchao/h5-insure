import{_ as e,d as r,j as t,b$ as s,br as i,o,m as n,w as l,a,b as u,u as d,a8 as c,aJ as p,ag as m,r as L,cJ as v,z as f,c as h,p as k,F as C,q as V,cA as g,e as I,az as b,bp as y,aA as O,cu as S,aC as P,aD as T,bT as _,k as M,f as R,aO as D,aP as E,bo as w,n as j,E as x,T as A,aI as N,cK as H,h as U,i as F,cL as Y,aF as q,aE as $,bX as B,l as z,ch as J,cM as W,cN as G,cO as K,be as X,an as Q,am as Z,bk as ee,cj as re,cP as te,aN as se,bb as ie,aG as oe}from"./index-3fe09367.js";import{A as ne}from"./index-4d39589f.js";import{l as le}from"./lodash-3c14eaf0.js";import{P as ae,u as ue}from"./ProductTips-b544bb49.js";import"./PolicyInfo-18472292.js";import{a as de,b as ce,c as pe}from"./createProposal-e8cdc5a6.js";import{q as me,d as Le,h as ve}from"./trial-2e3aed05.js";import fe from"./index-21e3fe4d.js";import{_ as he}from"./index-c5fa9625.js";import{_ as ke}from"./empty-ae586b6c.js";import{a as Ce,b as Ve}from"./format-b5e9d8b9.js";import{C as ge}from"./index-b923d927.js";import{R as Ie,a as be}from"./product-7bbf9c44.js";import"./cloneDeep-0d383954.js";import"./TrialButton-d681043b.js";import"./index-568d24c0.js";import"./config-98e8d477.js";import"./isNaN-24a9877a.js";import"./useOrder-dbec88c2.js";const ye={class:"trial-button"};var Oe=e(r({__name:"TrialPopup",props:{productCode:{default:""},productName:{default:""}},emits:["finish"],setup(e,{expose:r,emit:L}){const v=e,f=t(null);s(i,{insuredFactorCodes:["hasSocialInsurance","occupationCodeList"],holderFactorCodes:["birthday","gender","hasSocialInsurance","occupationCodeList"]});const h=(e,r)=>{const{holder:t,insuredList:s,productCode:i}=e||{},{productList:o,...n}=(null==s?void 0:s[0])||{},{riskList:l,...a}=o.find((e=>i===e.productCode))||(null==o?void 0:o[0])||{},u=p(null==r?void 0:r.riskPremiumDetailVOList)?null==r?void 0:r.riskPremiumDetailVOList.reduce(((e,r)=>(e[r.riskCode]={initialPremium:r.initialPremium,initialAmount:r.initialAmount,unitAmount:r.unitAmount,unitPremium:r.unitPremium},e)),{}):{},d=(l||[]).map((e=>{var r,t,s,i;return{...e,unitPremium:null==(r=null==u?void 0:u[e.riskCode])?void 0:r.unitPremium,unitAmount:null==(t=null==u?void 0:u[e.riskCode])?void 0:t.unitAmount,initialPremium:null==(s=null==u?void 0:u[e.riskCode])?void 0:s.initialPremium,initialAmount:null==(i=null==u?void 0:u[e.riskCode])?void 0:i.initialAmount}}));return{productCode:i,holder:t,insuredPersonVO:n,insuredProductInfo:{productCode:i,...a,productName:v.productName,occupationCodeList:null==n?void 0:n.occupationCodeList,riskList:d}}};return r({...["open","close"].reduce(((e,r)=>(e[r]=(...e)=>{var t;null==(t=f.value)||t[r](...e)},e)),{}),formatData:h}),(r,t)=>{const s=m;return o(),n(fe,{ref_key:"trialRef",ref:f,"hide-benefit":"","hide-popup-button":"",title:"选择保障方案",class:"proposal-trial","product-info":{productCode:e.productCode},"tenant-product-detail":{}},{trialBtn:l((e=>[a("div",ye,[u(s,{disabled:!d(f).getTrialSuccessFlag(),type:"primary",onClick:r=>(({trialData:e,riskPremium:r,personalInfoRef:t})=>"function"==typeof(null==t?void 0:t.canTrail)&&t.canTrail()?L("finish",h({...e,productCode:v.productCode},r)):"function"==typeof(null==t?void 0:t.validate)&&t.validate())(e)},{default:l((()=>[c("确定")])),_:2},1032,["disabled","onClick"])])])),_:1},8,["product-info"])}}}),[["__scopeId","data-v-976d8210"]]);const Se={class:"com-risk-list-wrapper"},Pe=(e=>(P("data-v-7d3c3028"),e=e(),T(),e))((()=>a("div",{class:"popup-title"},"选择附加险",-1))),Te={class:"risk-list"},_e={class:"cell-title"},Me={class:"title"},Re={class:"footer-button"};var De=e(r({__name:"index",props:{riskList:{default:()=>[]},show:{type:Boolean,default:!1},collocationList:{default:()=>[]},disabled:{default:()=>[]},modelValue:{default:()=>[]}},emits:["finished","close","update:modelValue"],setup(e,{emit:r}){const s=e,i=t([]),p=t([]),P=t([...s.disabled]),T=L({show:s.show,currentChecked:[...s.modelValue]}),_=e=>{var r,t,o;if(P.value.includes(e))return;((e,r)=>{if(!s.collocationList.length)return r?void(T.currentChecked=[]):void T.currentChecked.push(e);let t=T.currentChecked,i=P.value;r?(s.collocationList.forEach((r=>{e===r.riskId&&(2===r.collocationType?t=t.filter((t=>t!==r.collocationRiskId||t!==e)):3===r.collocationType?(t=t.filter((r=>r!==e)),i=i.filter((e=>e!==r.collocationRiskId))):t=t.filter((r=>r!==e)))})),T.currentChecked=t,P.value=i):(s.collocationList.forEach((s=>{e===s.riskId&&(r||(2===s.collocationType?t.push(s.collocationRiskId):3===s.collocationType&&i.push(s.collocationRiskId),t.push(e)))})),T.currentChecked.push(...t),P.value=i)})(e,T.currentChecked.includes(e)),null==(o=null==(t=null==(r=null==i?void 0:i.value)?void 0:r[e])?void 0:t.toggle)||o.call(t)},M=()=>{r("close")},R=()=>{const e=s.riskList.filter((e=>T.currentChecked.includes(e.id)));r("update:modelValue",[...new Set(p.value)]),r("finished",e,P.value),r("close")};return v((()=>{i.value=[]})),f((()=>T.currentChecked),(e=>{p.value=e}),{deep:!0,immediate:!0}),f((()=>s.modelValue),(e=>{p.value=e||[],P.value.push(...e||[])}),{deep:!0,immediate:!0}),(r,t)=>{const s=b,L=y,v=ge,f=O,D=m,E=S;return o(),h("div",Se,[u(E,{show:d(T).show,"onUpdate:show":t[1]||(t[1]=e=>d(T).show=e),title:"选择附加险","show-footer":"",round:"",position:"bottom",closeable:"",onClose:M},{default:l((()=>[Pe,a("div",Te,[u(f,{modelValue:d(p),"onUpdate:modelValue":t[0]||(t[0]=e=>k(p)?p.value=e:null)},{default:l((()=>[u(v,{inset:""},{default:l((()=>[(o(!0),h(C,null,V(e.riskList,(e=>(o(),n(L,{key:e.id,title:e.riskName,disabled:d(P).includes(e.id),onClick:r=>_(e.id)},{"right-icon":l((()=>[u(s,{ref_for:!0,ref:r=>d(i)[e.id]=r,shape:"square",disabled:d(P).includes(e.id),name:e.id,onClick:g((r=>_(e.id)),["stop"])},null,8,["disabled","name","onClick"])])),title:l((()=>[a("div",_e,[a("div",Me,I(e.riskName),1)])])),_:2},1032,["title","disabled","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])]),a("div",Re,[u(D,{type:"primary",disabled:!d(T).currentChecked.length,block:"",onClick:R},{default:l((()=>[c("确认")])),_:1},8,["disabled"])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-7d3c3028"]]);const Ee=e=>(P("data-v-76757b34"),e=e(),T(),e),we={class:"com-product-list-wrapper"},je={class:"risk-item-wrapper"},xe={class:"content"},Ae={class:"risk-factor"},Ne={class:"factor"},He={class:"factor-value"},Ue=Ee((()=>a("span",{class:"factor-name"}," 保额(元) ",-1))),Fe={class:"factor"},Ye={class:"factor-value"},qe=Ee((()=>a("span",{class:"factor-name"}," 保障期间 ",-1))),$e={class:"factor"},Be={class:"factor-value"},ze=Ee((()=>a("span",{class:"factor-name"}," 交费期间 ",-1))),Je={class:"operate-bar-wrap"},We={class:"risk-premium"},Ge={class:"premium"},Ke={key:0,class:"operate-bar"},Xe=r({name:"ProductList"});var Qe=e(r({...Xe,props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0},errorMsg:{default:""},productIndex:null,currentSelectInsure:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:r}){const s=e,[i,p]=_(),m=t({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),L=M((()=>{var e,r;return(null==(r=null==(e=s.productData)?void 0:e.productRiskVoList)?void 0:r[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]}));M((()=>{var e,r;const t=s.productRiskList.map((e=>e.riskId)),i=((null==(r=null==(e=s.productData)?void 0:e.productRiskVoList)?void 0:r[0].riskDetailVOList)||[]).filter((e=>t.includes(e.id)&&1===e.collocationType));return L.value.length-i.length}));const v=M((()=>e=>{var r,t;const i=(null==(t=null==(r=s.productData)?void 0:r.productRiskVoList)?void 0:t[0].riskDetailVOList.find((r=>r.id!==e)))||{};let o=!1;return o=!!s.productNum||2===i.riskType&&1===i.collocationType,o})),k=M((()=>{var e,r;return(null==(r=null==(e=s.productData)?void 0:e.productRiskVoList)?void 0:r[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),g=M((()=>k.value.collocationVOList||[])),b=(e,t)=>{const i=e.map((e=>e.id)).filter((e=>!m.value.disabledList.includes(e)));r("addRiderRisk",i,s.productInfo)};return f((()=>s.productInfo),(e=>{let r=0;(e.riskList||[]).forEach((e=>{r+=e.initialPremium})),m.value.totalPremium=r}),{deep:!0,immediate:!0}),f((()=>s.productRiskList),(e=>{const r=[],t=[],s=[];(e||[]).forEach((e=>{1===e.riskType?r.unshift(e):(t.push(e.riskId),s.push(e.riskId),r.push(e))})),m.value.disabledList=t,m.value.checkedList=s,m.value.productRiskList=r}),{deep:!0,immediate:!0}),(t,f)=>{const k=D,y=E;return o(),h("div",we,[(o(!0),h(C,null,V(d(m).productRiskList,(t=>{var i,p;return o(),h("div",{key:t.riskId},[a("div",je,[u(k,{"risk-type":t.riskType,title:t.riskName,class:"no-border"},null,8,["risk-type","title"]),a("div",xe,[a("div",Ae,[a("div",Ne,[a("span",He,I((null==(i=t.initialAmount)?void 0:i.toLocaleString())||"-"),1),Ue]),a("div",Fe,[a("span",Ye,I(d(Ce)(t.coveragePeriod)||"-"),1),qe]),a("div",$e,[a("span",Be,I(d(Ve)(t.chargePeriod)||"-"),1),ze])]),a("div",Je,[a("div",We,[c(" 保费:"),a("span",Ge,I(!e.errorMsg&&t.initialPremium?`￥${null==(p=t.initialPremium)?void 0:p.toLocaleString()}`:"-"),1)]),2!==t.riskType?(o(),h("div",Ke,[e.currentSelectInsure>0||d(v)(t.riskId)&&e.productIndex>0?(o(),n(y,{key:0,round:32,class:"border",onClick:e=>{r("deleteRisk",t,s.productInfo)}},{default:l((()=>[c("删除")])),_:2},1032,["onClick"])):R("",!0),u(y,{activated:"",onClick:e=>{r("updateRisk",t,s.productInfo)}},{default:l((()=>[c("修改")])),_:2},1032,["onClick"])])):R("",!0)])])])])})),128)),d(i)?(o(),n(De,{key:0,modelValue:d(m).checkedList,"onUpdate:modelValue":f[0]||(f[0]=e=>d(m).checkedList=e),show:d(i),disabled:d(m).disabledList,"risk-list":d(L),"collocation-list":d(g),onFinished:b,onClose:f[1]||(f[1]=e=>d(p)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):R("",!0),u(ae,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-76757b34"]]);const Ze=e=>(P("data-v-21e2f380"),e=e(),T(),e),er={class:"insurer-list"},rr=["onClick"],tr=Ze((()=>a("span",{class:"insure-name"},"被保人",-1))),sr={key:0,class:"insure-relate"},ir={key:1,class:"insure-relate"},or=["onClick"],nr=Ze((()=>a("div",{class:"gap"},null,-1))),lr=Ze((()=>a("span",null,"+",-1))),ar=r({name:"InsurerSelect"});var ur=e(r({...ar,props:{insurerList:{default:()=>[]},config:{default:()=>{}},canChangeSelect:{type:Boolean,default:()=>!0}},emits:["listChange","currentChange","add","delete","validateTab"],setup(e,{expose:r,emit:s}){const i=e,n=t(),l=t(),u=t({currentSelected:0}),p=t(i.insurerList),m=(e=!1)=>{x((()=>{var r;null==(r=n.value[u.value.currentSelected])||r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),0===u.value.currentSelected?l.value.scrollLeft=0:e&&u.value.currentSelected>=3&&(l.value.scrollLeft=l.value.scrollWidth)}))};w((()=>{m(!0)}));const L=e=>{var r;if((null==e?void 0:e.personVO)&&(null==(r=null==e?void 0:e.personVO)?void 0:r.relationToMainInsured)){const r=Ie.find((r=>{var t;return r.value===`${null==(t=null==e?void 0:e.personVO)?void 0:t.relationToMainInsured}`}));if(r)return r.label}return"关系"},v=()=>!(!p.value[u.value.currentSelected].productList||p.value[u.value.currentSelected].productList.length<=0),k=()=>{v()?s("validateTab",(()=>{p.value.push({}),u.value.currentSelected=p.value.length-1,s("add",{},p.value.length-1)})):A("请确认信息是否录入完整!")};return f((()=>i.insurerList.length),(()=>{p.value=i.insurerList,m()}),{deep:!0,immediate:!0}),r({updateInsurer:(e,r)=>{}}),(e,r)=>(o(),h("div",er,[a("div",{ref_key:"tabsRef",ref:l,class:"list"},[(o(!0),h(C,null,V(d(p),((e,r)=>(o(),h("div",{ref_for:!0,ref_key:"tabRef",ref:n,key:`insure_${r}`,class:j("insure-box "+(r===d(u).currentSelected?"selected":"")),onClick:e=>((e,r)=>{v()?i.canChangeSelect&&s("validateTab",(()=>{u.value.currentSelected=r,s("currentChange",r),m()})):A("请确认信息是否录入完整!")})(0,r)},[tr,0===r?(o(),h("span",sr,"本人")):(o(),h("span",ir,I(L(e)),1)),r>0?(o(),h("div",{key:2,class:"delete-btn",onClick:e=>((e,r)=>{e.preventDefault(),e.stopPropagation(),e.cancelBubble=!0,N.confirm({message:"确定要删除该被保人吗？"}).then((()=>{s("delete",r,(()=>{r<u.value.currentSelected?(u.value.currentSelected-=1,s("currentChange",u.value.currentSelected)):r===u.value.currentSelected&&(u.value.currentSelected=0,s("currentChange",0))}))})).catch((()=>{}))})(e,r)},"×",8,or)):R("",!0)],10,rr)))),128))],512),a("div",{class:"operate"},[nr,a("div",{class:"add-btn",onClick:k},[lr,c(" 被保人")])])]))}}),[["__scopeId","data-v-21e2f380"]]);const dr={class:"proposal-header"},cr={key:0,class:"container"},pr=(e=>(P("data-v-79175678"),e=e(),T(),e))((()=>a("div",{class:"title-tip-icon"},"投保人信息",-1))),mr={key:0,class:"operate-bar"},Lr={key:0,class:"operate-bar"},vr={class:"footer-bar"},fr={class:"trial-result"},hr={class:"result-num"},kr={class:"trial-operate"},Cr=r({name:"CreateProposal"});var Vr=e(r({...Cr,setup(e){const r=[{name:"保存修改"},{name:"另存为新计划书"}],s=H();_();const[i,v]=_(),g=t({holder:{},insuredList:[{name:"",gender:"",birthday:"",productList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),b=U(),y=F(),O=ue(),S={},{productCode:P,id:T,preview:D}=y.query,j=["age","gender","birthday","hasSocialInsurance","occupationCodeList"],ae=t(null),fe=L({selectedProductCodeList:[],selectedProductList:[],insuredPersonVO:{},insurerList:[],currentProductCode:"",holder:{},productList:[],productCollection:{},productErrorMap:{},defaultData:null,currentSelectInsure:0,isLoading:!1}),Ce=t(!1),Ve=t(null),ge=t(null),ye=t(null),Se=(e,r,t)=>e?+e<18?"投保人年龄不得小于18周岁":"":"请输入投保人年龄";M((()=>{var e;return(null==(e=fe.insurerList[fe.currentSelectInsure])?void 0:e.productList)?fe.insurerList[fe.currentSelectInsure].productList.map((e=>e.productCode)).filter((e=>Boolean(e))):[]}));const Pe=()=>fe.insurerList[fe.currentSelectInsure].productList.map((e=>e.productCode)).filter((e=>Boolean(e))),Te=M((()=>{const{productPlanInsureVOList:e}=fe.productCollection[P]||{},[{insureProductRiskVOList:r=[]}={}]=e||[],{riskInsureLimitVO:t}=(null==r?void 0:r.find((e=>1===e.riskType)))||{};return null==t?void 0:t.sexLimit})),_e=M((()=>"-1"!==Te.value&&Te.value?Y.filter((e=>Te.value===e.value)):Y)),Me=M((()=>{var e;return(null==(e=fe.productCollection)?void 0:e[fe.currentProductCode])||{}})),Re=e=>(e.insuredList=e.insuredList.map((e=>(e.productList=e.productList.map((e=>(e.riskList=e.riskList.map((e=>({...e,initialPremium:e.unitPremium||e.initialPremium,initialAmount:e.unitAmount||e.initialAmount}))),e))),e))),e),De=M((()=>{var e,r;return(null==(r=null==(e=Me.value)?void 0:e.productPlanInsureVOList)?void 0:r[0])||{}}));M((()=>{var e,r,t;return null==(t=null==(r=null==(e=Me.value)?void 0:e.productPlanInsureVOList)?void 0:r[0])?void 0:t.multiInsuredConfigVO}));const Ee=M((()=>!Ce.value||Boolean(Object.values(fe.productErrorMap).join("")))),we=M((()=>"1"!=`${D}`)),je=M((()=>fe.insurerList.reduce(((e,r)=>+(r.productList.reduce(((e,r)=>+e+ +r.riskList.reduce(((e,r)=>+e+ +(r.initialPremium||0)),0)),0)+ +e)),0))),xe=e=>{var r,t;const s=[null==(r=ge.value)?void 0:r.validate()];if(0===fe.currentSelectInsure){if(1===fe.insurerList[0].personVO.relationToHolder&&fe.insurerList[0].personVO.age<18||1!==fe.insurerList[0].personVO.relationToHolder&&fe.holder.age<18)return void A("投保人年龄不得小于18周岁");s.push(null==(t=ye.value)?void 0:t.validate())}Promise.all(s).then((()=>{e()})).catch((e=>{A("请确认信息是否录入完整!")}))},Ae=()=>{const e=fe.insurerList.findIndex((({personVO:e})=>e.relationToMainInsured===+be.MATE));return Ie.map((r=>r.value===be.SELF||r.value===be.MATE&&e>=0&&e!==fe.currentSelectInsure?{...r,disabled:!0}:{...r}))},Ne=(e,r="")=>{fe.productErrorMap[e]=r},He=e=>{const r=fe.insurerList[fe.currentSelectInsure].productList.findIndex((r=>r.productCode===e.productCode)),t={...e.insuredProductInfo,nanoid:ee(),productName:S[e.productCode]};if(-1===r)return fe.insurerList[fe.currentSelectInsure].productList.push(t),!1;const s=fe.insurerList[fe.currentSelectInsure].productList[r],{riskList:i,...o}=t;fe.insurerList[fe.currentSelectInsure].productList[r]={...t,...o,riskList:p(i)?i.map((e=>({...s.riskList.find((r=>r.riskCode===e.riskCode)),...e}))):[]}},Ue=e=>{var r;Object.assign(fe.holder,e.holder),0===fe.currentSelectInsure&&(e.insuredPersonVO.relationToHolder=fe.insurerList[fe.currentSelectInsure].personVO.relationToHolder),fe.insurerList[fe.currentSelectInsure]&&Object.assign(fe.insurerList[fe.currentSelectInsure].personVO,e.insuredPersonVO),He(e),Ne(e.productCode),Ce.value=!0,null==(r=ae.value)||r.close()},Fe=()=>{var e;const r=[null==(e=ge.value)?void 0:e.validate()];Promise.all(r).then((()=>{O.setProposalInfo(g.value),O.setExcludeProduct(Pe()),O.setInsuredPersonVO(fe.insurerList[fe.currentSelectInsure].personVO),b.push({path:"/proposalListSelect",query:{isCreateProposal:"1"}})})).catch((e=>{A("请确认被保人信息是否录入完整!")}))},Ye=e=>{const r=Re(e);ve(r,{isCustomError:!0}).then((({code:e,data:t,message:s})=>{var i;e===oe&&t?((null==t?void 0:t.errorInfo)&&A(`${null==t?void 0:t.errorInfo}`),p(t.riskPremiumDetailVOList)&&He(null==(i=ae.value)?void 0:i.formatData(r,t)),Ne(r.productCode),Ce.value=!0):Ne(r.productCode,s)}))},qe=e=>{e&&(fe.insurerList[fe.currentSelectInsure].personVO.age=Q(new Date).diff(e,"year"))},$e=e=>{e&&(fe.holder.age=Q(new Date).diff(e,"year"))},Be=e=>{const{value:r}=e;let t={age:30,birthday:Q().subtract(30,"year").format("YYYY-MM-DD"),gender:+Z.MALE};[be.MATE,be.CHILD].includes(r)?t={age:r===be.MATE?fe.insurerList[0].personVO.age:0,birthday:r===be.MATE?fe.insurerList[0].personVO.birthday:Q().subtract(28,"day").format("YYYY-MM-DD"),gender:r===be.MATE?1==+fe.insurerList[0].personVO.gender?2:1:+Z.MALE}:be.PARENT===r&&(t={age:+fe.insurerList[0].personVO.age+18,birthday:Q(fe.insurerList[0].personVO.birthday).subtract(18,"year").format("YYYY-MM-DD"),gender:+Z.MALE}),Object.assign(fe.insurerList[fe.currentSelectInsure].personVO,t)},ze=()=>{fe.insurerList[fe.currentSelectInsure].personVO.birthday=""},Je=()=>{if(0===fe.currentSelectInsure){const e=fe.insurerList.findIndex((e=>!(!e||!e.personVO)&&+e.personVO.relationToMainInsured==+be.MATE));-1!==e&&(fe.insurerList[e].personVO.gender=1==+fe.insurerList[0].personVO.gender?2:1)}},We=()=>{fe.holder.birthday=""},Ge=e=>{de(e).then((({code:e,data:r})=>{"10000"===e&&p(r)&&r.reduce(((e,r)=>(e[r.productCode]=r,S[r.productCode]=r.productName,e)),fe.productCollection)})).finally((()=>{}))},Ke=()=>{if(1==+fe.insurerList[0].personVO.relationToHolder){const{relationToHolder:e,relationToMainInsured:r,productList:t,...s}=fe.insurerList[0].personVO;return T&&(s.id=fe.holder.id),s}return fe.holder},Xe=e=>0===e&&2==+fe.insurerList[e].personVO.relationToHolder?{...fe.insurerList[e].personVO,relationToHolder:null}:fe.insurerList[e].personVO,Ze=async(e,r=!1)=>{if(!p(e))return;const{code:t,data:s}=await me({calcProductFactorList:e,...fe.insurerList[fe.currentSelectInsure]&&fe.insurerList[fe.currentSelectInsure].personVO||{}},{isCustomError:!r});"10000"===t&&s&&p(s)&&s.forEach((e=>{const{holder:t,insuredList:s,productCode:i}=e,{productList:o,...n}=(s||[])[0]||{},[{riskList:l=[],...a}={}]=o||[],u={productCode:i,...a,riskList:l};r&&(fe.insurerList[fe.currentSelectInsure]&&Object.assign(fe.insurerList[fe.currentSelectInsure].personVO,n,{relationToHolder:1}),Object.assign(fe.holder,t)),s.forEach(((e,r)=>{const{productList:t,...s}=e;0===fe.insurerList.length&&(s.relationToMainInsured||(s.relationToMainInsured=be.SELF),fe.insurerList.push({productList:t.map((e=>({...e,productCode:i}))),personVO:s}))}));const d=Pe().findIndex((e=>e===i));d>-1?fe.productList[d]=u:fe.productList.push(u),x((()=>{Ye({...e,holder:{...Ke()},insuredList:[{...Xe(fe.currentSelectInsure),productList:o}]})}))}))},er=e=>fe.insurerList[fe.currentSelectInsure].productList.filter((r=>r.productCode===e)).map((({productCode:e,riskList:r})=>{const{productPlanInsureVOList:t}=fe.productCollection[e]||{},[{insureProductRiskVOList:s}={}]=t||[];return{productCode:e,riskEditVOList:p(r)?r.filter((e=>1===e.riskType)).map((({riskCode:e})=>({insureProductRiskVO:{...(null==s?void 0:s.find((r=>r.riskCode===e)))||{}}}))):[]}})),rr=e=>(fe.insurerList[fe.currentSelectInsure].productList.find((r=>r.productCode===e)),{holder:{...Ke()},insuredList:[{...Xe(fe.currentSelectInsure),productList:fe.insurerList[fe.currentSelectInsure].productList}],productCode:e}),tr=(e,r)=>{const t=r;N.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?fe.insurerList[fe.currentSelectInsure].productList=fe.insurerList[fe.currentSelectInsure].productList.filter((e=>e.productCode!==t.productCode)).map((e=>({...e,nanoid:ee()}))):t.riskList=t.riskList.filter((r=>r.riskId!==e.riskId)),Ne(t.productCode)}))},sr=(e,r)=>{var t,s;const i=null==(t=e.insuredList)?void 0:t[0],o=(null==(s=i.productList)?void 0:s.find((e=>e.productCode===r)))||{};return i.occupationClass=null==o?void 0:o.occupationClass,i.occupationCodeList=null==o?void 0:o.occupationCodeList,i.productList=i.productList.filter((e=>e.productCode===r)),e},ir=(e,r)=>{var t;fe.currentProductCode=r.productCode;const s=Re(le.exports.cloneDeep(rr(r.productCode)));fe.defaultData=[sr(s,r.productCode)],null==(t=ae.value)||t.open()},or=e=>{var r,t,s;if(fe.insurerList.some((e=>0===e.productList.length)))return void A("请先添加产品");const i=[null==(r=Ve.value)?void 0:r.validate(),null==(t=ge.value)?void 0:t.validate()];if(0===fe.currentSelectInsure){if(1===fe.insurerList[0].personVO.relationToHolder&&fe.insurerList[0].personVO.age<18||1!==fe.insurerList[0].personVO.relationToHolder&&fe.holder.age<18)return void A("投保人年龄不得小于18周岁");i.push(null==(s=ye.value)?void 0:s.validate())}Promise.all(i).then((()=>{fe.isLoading=!0,pe({holder:{...Ke()},insuredList:fe.insurerList.map(((e,r)=>({...Xe(r),productList:e.productList.map((e=>({...e,productName:S[e.productCode]})))}))),proposalName:fe.insuredPersonVO.proposalName,totalPremium:je.value,relationUserType:2,id:e}).then((e=>{const{code:r,data:t}=e||{};"10000"===r&&(O.$reset(),b.push({path:"/compositionProposal",query:{id:t,preview:D}}))})).catch((()=>{fe.isLoading=!1}))}))},nr=()=>{T?v(!0):or(T)},lr=(e,r)=>{or(r?void 0:T)},ar=e=>{var r;fe.currentSelectInsure=e,(null==(r=fe.insurerList[e])?void 0:r.productList.length)>0?Ge(fe.insurerList[e].productList.map((({productCode:e})=>({productCode:e})))):fe.productCollection={}},Cr=(e,r)=>{if(fe.insurerList.length-1===r){const t=fe.insurerList.findIndex((e=>!(!e||!e.personVO)&&+e.personVO.relationToMainInsured==+be.MATE));fe.insurerList[r]={...e,personVO:{age:t<0?fe.insurerList[0].personVO.age:0,birthday:t<0?fe.insurerList[0].personVO.birthday:Q().subtract(28,"day").format("YYYY-MM-DD"),relationToMainInsured:t<0?be.MATE:be.CHILD,gender:t<0?1==+fe.insurerList[0].personVO.gender?2:1:Z.MALE},productList:[]}}fe.currentSelectInsure=r,fe.productCollection={}},Vr=(e,r)=>{fe.insurerList.splice(e,1),null==r||r()};return f([()=>j.map((e=>fe.insurerList[fe.currentSelectInsure]?fe.insurerList[fe.currentSelectInsure].personVO[e]:"")),()=>fe.currentSelectInsure],(([e,r],[t,s])=>{e.join(",")!==t.join(",")&&r===s&&(console.log(r,"被保人条件变动",s),p(Object.keys(fe.productCollection))&&Pe().forEach((e=>(async e=>{try{const{code:r,data:t,message:s}=await Le({calcProductFactorList:er(e),...fe.insurerList[fe.currentSelectInsure].personVO},{isCustomError:!0});"10000"===r&&p(t)?(fe.insurerList[fe.currentSelectInsure].productList.forEach((({productCode:e,riskList:r})=>{const{productRiskDyInsureFactorVOList:s}=t[0]||t.find((r=>r.productCode===e))||{};r.forEach((e=>{const r=s.find((r=>r.riskCode===e.riskCode));Object.assign(e,{...e,...r})}))})),Ye(rr(e)),Ne(e)):Ne(e,s)}catch(r){console.log("Error",r)}})(e))))}),{deep:!0}),f((()=>fe.selectedProductCodeList),q((e=>{if(p(e)){console.log("选择的产品变动了",e,le.exports.cloneDeep(fe.insurerList)),Ze(e.map((e=>({productCode:e}))));const r=Object.keys(fe.productCollection),t=null==e?void 0:e.filter((e=>!r.includes(e)));p(t)&&Ge(null==t?void 0:t.map((e=>({productCode:e}))))}})),{deep:!0}),w((()=>{const{selectedProduct:e,selectedProductList:r}=O.$state;fe.selectedProductList=r,fe.selectedProductCodeList=p(e)?e:[]})),$((()=>{if(B(),P){const e=[{productCode:P}];Ge(e),Ze(e,!0)}T&&(((e={})=>{ce(e).then((({code:e,data:r})=>{if("10000"===e&&r){const{insuredList:e,holder:t,proposalName:s}=r||{},[{productList:i,...o}]=e||[];fe.holder=t,fe.insuredPersonVO={...o,proposalName:s};let n=!1;fe.insurerList=e.map(((e,r)=>{const{productList:t,...s}=e;return 0===r&&(s.relationToHolder=s.relationToHolder?1:2,$e(fe.holder.birthday)),{productList:t.filter((e=>(n||1===e.shelfStatus||(n=!0),1===e.shelfStatus))),personVO:s}})),n&&A("计划书中存在已下架产品，请重新生成计划书"),Ge(i.filter((e=>1===e.shelfStatus)).map((e=>({productCode:e.productCode})))),fe.productList=i}}))})({id:T}),Ce.value=!0);const e=(T?"编辑":"创建")+"计划书";y.meta.title=e,document.title=e})),(e,t)=>{const p=re,L=te,f=se,g=E,b=m,y=ne,O=z("ProPageWrap"),S=ie;return o(),n(S,{"theme-vars":d(s)},{default:l((()=>[u(O,{class:"page-create-wrapper"},{default:l((()=>{var e;return[a("div",dr,[u(p,{ref_key:"formRef",ref:Ve,class:"mb20",model:d(fe).insuredPersonVO},{default:l((()=>[u(d(J),{modelValue:d(fe).insuredPersonVO.proposalName,"onUpdate:modelValue":t[0]||(t[0]=e=>d(fe).insuredPersonVO.proposalName=e),class:"ra20",label:"计划书名称",name:"proposalName",maxlength:20},null,8,["modelValue"])])),_:1},8,["model"]),u(ur,{config:d(fe),"insurer-list":d(fe).insurerList,"can-change-select":!0,onValidateTab:xe,onCurrentChange:ar,onAdd:Cr,onDelete:Vr},null,8,["config","insurer-list"])]),d(fe).insurerList[d(fe).currentSelectInsure]?(o(),h("div",cr,[u(f,{title:"被保人信息",class:"com-pro-form-with-card com-card-body-no-padding insure-containe","show-divider":!1},{default:l((()=>[u(p,{ref_key:"insuredFormRef",ref:ge,model:d(fe).insurerList[d(fe).currentSelectInsure]},{default:l((()=>[u(d(J),{modelValue:d(fe).insurerList[d(fe).currentSelectInsure].personVO.name,"onUpdate:modelValue":t[1]||(t[1]=e=>d(fe).insurerList[d(fe).currentSelectInsure].personVO.name=e),label:"姓名",name:"name",maxlength:20,required:""},null,8,["modelValue"]),0!==d(fe).currentSelectInsure&&d(fe).insurerList[d(fe).currentSelectInsure]?(o(),n(L,{key:0,modelValue:d(fe).insurerList[d(fe).currentSelectInsure].personVO.relationToMainInsured,"onUpdate:modelValue":t[2]||(t[2]=e=>d(fe).insurerList[d(fe).currentSelectInsure].personVO.relationToMainInsured=e),label:"与主被保人关系","is-default-selected":!0,name:"relationToMainInsured",columns:Ae(),required:"",onConfirm:Be},null,8,["modelValue","columns"])):R("",!0),u(d(J),{modelValue:d(fe).insurerList[d(fe).currentSelectInsure].personVO.age,"onUpdate:modelValue":t[4]||(t[4]=e=>d(fe).insurerList[d(fe).currentSelectInsure].personVO.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",onChange:ze},{extra:l((()=>[u(d(W),{modelValue:d(fe).insurerList[d(fe).currentSelectInsure].personVO.birthday,"onUpdate:modelValue":[t[3]||(t[3]=e=>d(fe).insurerList[d(fe).currentSelectInsure].personVO.birthday=e),qe],class:"birthday-field-wrap",label:"出生日期",name:"birthday"},null,8,["modelValue"])])),_:1},8,["modelValue"]),u(d(G),{modelValue:d(fe).insurerList[d(fe).currentSelectInsure].personVO.gender,"onUpdate:modelValue":t[5]||(t[5]=e=>d(fe).insurerList[d(fe).currentSelectInsure].personVO.gender=e),label:"性别",name:"gender",columns:d(_e),disabled:+d(fe).insurerList[d(fe).currentSelectInsure].personVO.relationToMainInsured==+d(be).MATE,required:"",onChange:Je},null,8,["modelValue","columns","disabled"])])),_:1},8,["model"]),0===d(fe).currentSelectInsure?(o(),h(C,{key:0},[pr,u(p,{ref_key:"holderFormRef",ref:ye,model:d(fe).holder,class:"insure-container"},{default:l((()=>[u(d(G),{modelValue:d(fe).insurerList[0].personVO.relationToHolder,"onUpdate:modelValue":t[6]||(t[6]=e=>d(fe).insurerList[0].personVO.relationToHolder=e),label:"投被保人是同一人",columns:d(K),required:""},null,8,["modelValue","columns"]),2===d(fe).insurerList[0].personVO.relationToHolder?(o(),h(C,{key:0},[u(d(J),{modelValue:d(fe).holder.name,"onUpdate:modelValue":t[7]||(t[7]=e=>d(fe).holder.name=e),name:"name",label:"姓名",maxlength:20,required:""},null,8,["modelValue"]),u(d(J),{modelValue:d(fe).holder.age,"onUpdate:modelValue":t[9]||(t[9]=e=>d(fe).holder.age=e),class:"age-field-wrap",name:"age",label:"年龄",type:"digit",maxlength:3,required:"",rules:[{required:!0,message:"请输入年龄"},{trigger:"onChange",validator:Se}],onChange:We},{extra:l((()=>[u(d(W),{modelValue:d(fe).holder.birthday,"onUpdate:modelValue":[t[8]||(t[8]=e=>d(fe).holder.birthday=e),$e],class:"birthday-field-wrap",label:"出生日期",name:"birthday"},null,8,["modelValue"])])),_:1},8,["modelValue","rules"]),u(d(G),{modelValue:d(fe).holder.gender,"onUpdate:modelValue":t[10]||(t[10]=e=>d(fe).holder.gender=e),label:"性别",name:"gender",columns:d(Y),required:""},null,8,["modelValue","columns"])],64)):R("",!0)])),_:1},8,["model"])],64)):R("",!0)])),_:1}),u(d(X),{ref:"productFormRef",title:"保障计划",class:"product-container"},{default:l((()=>{var e;return[d(fe).insurerList[d(fe).currentSelectInsure].productList.length>0?(o(!0),h(C,{key:0},V(d(fe).insurerList[d(fe).currentSelectInsure].productList,((e,r)=>(o(),n(f,{key:`${e.nanoid}_${r}_${e.productCode}`,class:"product-item-card","show-line":!1,"show-divider":!1},{default:l((()=>{var t;return[u(Qe,{"product-risk-list":e.riskList,"product-info":e,"product-num":(null==(t=d(fe).insurerList[d(fe).currentSelectInsure].productList)?void 0:t.length)-1,"product-data":d(fe).productCollection[e.productCode],"error-msg":d(fe).productErrorMap[e.productCode],"product-index":r,"current-select-insure":d(fe).currentSelectInsure,onUpdateRisk:ir,onDeleteRisk:tr},null,8,["product-risk-list","product-info","product-num","product-data","error-msg","product-index","current-select-insure"])]})),_:2},1024)))),128)):(o(),h(C,{key:1},[d(we)?(o(),h("div",mr,[(null==(e=d(fe).insurerList[d(fe).currentSelectInsure].productList)?void 0:e.length)<=0?(o(),n(he,{key:0,"empty-img":d(ke),title:"该成员还未配置产品，去添加吧！","empty-class":"empty-select"},null,8,["empty-img"])):R("",!0),u(g,{activated:"",round:34,onClick:Fe},{default:l((()=>[c("添加产品")])),_:1})])):R("",!0)],64))]})),_:1},512),d(we)&&d(fe).insurerList[d(fe).currentSelectInsure].productList.length>0?(o(),h("div",Lr,[u(g,{activated:"",round:34,onClick:Fe},{default:l((()=>[c("添加产品")])),_:1})])):R("",!0)])):R("",!0),a("div",vr,[a("span",fr,[c("总保费"),a("span",hr,I(d(Ee)?"-":`￥${null==(e=d(je))?void 0:e.toLocaleString()}`),1)]),a("div",kr,[u(b,{disabled:d(Ee)||d(fe).isLoading,loading:d(fe).isLoading,"loading-type":"spinner",type:"primary",onClick:nr},{default:l((()=>[c("保存并预览")])),_:1},8,["disabled","loading"])])]),u(y,{show:d(i),"onUpdate:show":t[11]||(t[11]=e=>k(i)?i.value=e:null),actions:r,"cancel-text":"取消","close-on-click-action":"",onCancel:t[12]||(t[12]=e=>d(v)(!1)),onSelect:lr},null,8,["show"]),u(Oe,{ref_key:"trialPopupRef",ref:ae,"data-source":d(De),"product-code":d(fe).currentProductCode,"default-data":d(fe).defaultData,onFinish:Ue},null,8,["data-source","product-code","default-data"])]})),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-79175678"]]);export{Vr as default};
