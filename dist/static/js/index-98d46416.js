import{v as e,d as a,j as o,cg as t,dm as s,K as l,C as r,B as d,b as c,cm as i,d1 as n,bO as u,H as p,X as v,dn as m,dp as f,dq as h,cl as g,k as C,dr as y,a0 as k,ds as P,bt as b,t as L,r as x,o as _,c as w,a as I,u as S,e as V,F as j,q as M,g as q,_ as B,I as O,O as $,dt as U,az as F,n as A,f as N,m as R,w as T,du as z,p as E,a8 as D,ca as H,aE as K,aj as W,cd as X,av as Y,aw as G,z as J,cY as Q,as as Z,by as ee,at as ae,h as oe,i as te,d6 as se,b_ as le,l as re,bV as de,T as ce,bh as ie}from"./index-8ccea0ec.js";import{P as ne}from"./index-1593bb64.js";import{L as ue}from"./index-cf8f9c6e.js";import{P as pe,u as ve,_ as me}from"./index-4e40a154.js";import{_ as fe}from"./index-d680c3b2.js";import{_ as he}from"./empty-ae586b6c.js";import{q as ge,a as Ce}from"./proposalList-a2c73378.js";import{P as ye}from"./index-825ebbf8.js";import{C as ke}from"./index-92ce2a7f.js";import{q as Pe}from"./trial-eee9ad28.js";import"./index-158d5796.js";const[be,Le]=e("tabbar"),xe={route:Boolean,fixed:l,border:l,zIndex:r,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:d(0),safeAreaInsetBottom:{type:Boolean,default:null}},_e=Symbol(be);const we=p(a({name:be,props:xe,emits:["change","update:modelValue"],setup(e,{emit:a,slots:l}){const r=o(),{linkChildren:d}=t(_e),p=s(r,Le),v=()=>{var a;return null!=(a=e.safeAreaInsetBottom)?a:e.fixed},m=()=>{var a;const{fixed:o,zIndex:t,border:s}=e;return c("div",{ref:r,role:"tablist",style:i(t),class:[Le({fixed:o}),{[n]:s,"van-safe-area-bottom":v()}]},[null==(a=l.default)?void 0:a.call(l)])};return d({props:e,setActive:(o,t)=>{u(e.beforeChange,{args:[o],done(){a("update:modelValue",o),a("change",o),t()}})}}),()=>e.fixed&&e.placeholder?p(m):m()}})),[Ie,Se]=e("tabbar-item");const Ve=p(a({name:Ie,props:v({},m,{dot:Boolean,icon:String,name:r,badge:r,badgeProps:Object,iconPrefix:String}),emits:["click"],setup(e,{emit:a,slots:o}){const t=f(),s=h().proxy,{parent:l,index:r}=g(_e);if(!l)return;const d=C((()=>{var a;const{route:o,modelValue:t}=l.props;if(o&&"$route"in s){const{$route:a}=s,{to:o}=e,t=P(o)?o:{path:o};return!!a.matched.find((e=>{const a="path"in t&&t.path===e.path,o="name"in t&&t.name===e.name;return a||o}))}return(null!=(a=e.name)?a:r.value)===t})),i=o=>{var s;d.value||l.setActive(null!=(s=e.name)?s:r.value,t),a("click",o)},n=()=>o.icon?o.icon({active:d.value}):e.icon?c(b,{name:e.icon,classPrefix:e.iconPrefix},null):void 0;return()=>{var a;const{dot:t,badge:s}=e,{activeColor:r,inactiveColor:u}=l.props,p=d.value?r:u;return c("div",{role:"tab",class:Se({active:d.value}),style:{color:p},tabindex:0,"aria-selected":d.value,onClick:i},[c(y,k({dot:t,class:Se("icon"),content:s},e.badgeProps),{default:n}),c("div",{class:Se("text")},[null==(a=o.default)?void 0:a.call(o,{active:d.value})])])}}}));const je={class:"com-product-item"},Me={class:"content-wrap"},qe={class:"product-image"},Be={class:"product-info"},Oe={class:"title"},$e={class:"description"},Ue={class:"tags"};var Fe=B(a({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const a=e,{productInfo:o}=L(a),t=x({checked:!1});return L(t),(e,a)=>{var t,s,l,r,d;const i=O;return _(),w("div",je,[I("div",Me,[I("div",qe,[c(i,{src:(null==(t=S(o).showConfig)?void 0:t.fileThumbnailUrl)||(null==(s=S(o).showConfig)?void 0:s.fileUrl)},null,8,["src"])]),I("div",Be,[I("p",Oe,V(null==(l=S(o).showConfig)?void 0:l.title),1),I("p",$e,V(null==(r=S(o).showConfig)?void 0:r.text),1),I("p",Ue,[(_(!0),w(j,null,M(null==(d=S(o).showConfig)?void 0:d.tags,((e,a)=>(_(),w("span",{key:a,class:"tag"},V(e),1)))),128))])]),q(e.$slots,"checkedProduct",{},void 0,!0)]),c(pe,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-002f53ee"]]);const Ae=["xlink:href"],Ne=a({__name:"index",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const a=e,o=C((()=>`#icon-${a.name}`)),t=C((()=>a.name?`svg-icon icon-${a.name}`:"svg-icon"));return(a,s)=>(_(),w("svg",k({class:S(t)},a.$attrs,{style:{color:e.color}}),[I("use",{"xlink:href":S(o)},null,8,Ae)],16))}});const Re=e=>(Y("data-v-88e3365a"),e=e(),G(),e),Te={class:"com-tab-filter"},ze={class:"article-mid"},Ee={class:"article-tag"},De=["onClick"],He=Re((()=>I("span",null,null,-1))),Ke={class:"popup-inner"},We=Re((()=>I("div",{class:"popup-title"},"保险公司",-1))),Xe={class:"footer-button"};var Ye=B(a({__name:"insureFilter",props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(e,{emit:a}){const t=e,{isPopShow:s,openPop:l,closePop:r}=function(e=!1){const a=o(e);return{isPopShow:a,openPop:e=>{e instanceof Function&&e(),a.value=!0},closePop:e=>{a.value=!1,e instanceof Function&&e()}}}(!1),d=x({insureList:[],checkedInsure:[],productCategoryList:[]}),{insureList:i,checkedInsure:n}=L(d),u=o(""),p=()=>{n.value=[]},v=()=>{var e;const{productCategoryId:o}=(null==(e=d.productCategoryList)?void 0:e[u.value])||{};a("onSelectInsure",{selectInsureCode:n.value,selectCategory:o}),r()};$((()=>{t.filter&&U().then((e=>{const{code:a,data:o}=e;"10000"===a&&(i.value=null==o?void 0:o.map((e=>({label:e.abbreviation,value:e.insurerCode}))))}))})),F((()=>{ge().then((e=>{const{code:a,data:o}=e||{};"10000"===a&&K(o)&&(d.productCategoryList=[{productCategoryName:"全部",productCategoryId:""},...o])}))}));const m=o();return $((()=>{m.value=document.querySelector(".page-proposal")})),(o,t)=>{const f=W,h=X;return _(),w("div",Te,[I("div",ze,[I("div",Ee,[(_(!0),w(j,null,M(S(d).productCategoryList,((e,o)=>(_(),w("div",{key:o,class:A(["tag-item",{checked:S(u)==o}]),onClick:t=>((e,o)=>{var t;u.value=o;const{productCategoryId:s}=(null==(t=d.productCategoryList)?void 0:t[u.value])||{};a("onSelectInsure",{selectInsureCode:n.value,selectCategory:s})})(null==e||e.productCategoryId,o)},[I("div",{class:A(["tag-out",{checked:S(u)==o}])},[I("div",{class:A(["tag-item-text",{checked:S(u)==o}])},V(e.productCategoryName),3)],2)],10,De)))),128))]),e.filter?(_(),w("div",{key:0,class:"filter",onClick:t[0]||(t[0]=(...e)=>S(l)&&S(l)(...e))},[He,I("div",{class:A(["text",{"has-select-condition":S(n).length>0}])},"筛选",2),c(Ne,{name:"filter"})])):N("",!0),S(m)?(_(),R(h,{key:1,show:S(s),position:"right","close-on-click-overlay":"",class:"proposal-list-filter-popup-wrap",style:H(e.popupStyle),onClickOverlay:S(r)},{default:T((()=>[I("div",Ke,[We,c(z,{modelValue:S(n),"onUpdate:modelValue":t[1]||(t[1]=e=>E(n)?n.value=e:null),options:S(i)},null,8,["modelValue","options"])]),I("div",Xe,[c(f,{plain:"",type:"primary",onClick:p},{default:T((()=>[D("重置")])),_:1}),c(f,{type:"primary",onClick:v},{default:T((()=>[D("确定")])),_:1})])])),_:1},8,["show","style","onClickOverlay"])):N("",!0)])])}}}),[["__scopeId","data-v-88e3365a"]]);const Ge={class:"com-trial-product-wrapper"},Je={class:"container"},Qe=(e=>(Y("data-v-49f70a68"),e=e(),G(),e))((()=>I("span",{class:"title"}," 已选产品 ",-1))),Ze={class:"popup-body"},ea={class:"cell-title"},aa={class:"title"},oa=a({name:"TrialProductPopup"});var ta=B(a({...oa,props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(e,{emit:a}){const t=e,s=o([]),l=o([]),r=o({isShow:t.isShow}),d=()=>{a("close")},i=()=>{l.value=[],a("checked",[])},n=e=>{var o,t,r;null==(r=null==(t=null==(o=null==s?void 0:s.value)?void 0:o[e])?void 0:t.toggle)||r.call(t),a("checked",l.value)};return J((()=>t.isShow),(e=>{r.value.isShow=e})),J(l,((e=[])=>{a("update:modalValue",e)}),{deep:!0,immediate:!0}),J((()=>t.modalValue),((e=[])=>{l.value=e}),{deep:!0,immediate:!0}),(e,a)=>{const o=Z,t=ee,u=ke,p=ae,v=X;return _(),w("div",Ge,[c(v,{show:S(r).isShow,"onUpdate:show":a[1]||(a[1]=e=>S(r).isShow=e),position:"bottom",onClose:d},{default:T((()=>[I("div",Je,[I("div",{class:"popup-header"},[I("span",{class:"clear-all",onClick:i}," 清空选项 "),Qe,I("span",{class:"close",onClick:d})]),I("div",Ze,[c(p,{modelValue:S(l),"onUpdate:modelValue":a[0]||(a[0]=e=>E(l)?l.value=e:null)},{default:T((()=>[c(u,{inset:""},{default:T((()=>[(_(!0),w(j,null,M(e.proposalList,(e=>(_(),R(t,{key:e.productCode,title:e.productName,onClick:a=>n(e.productCode)},{"right-icon":T((()=>{var a;return[c(o,{ref_for:!0,ref:a=>S(s)[e.productCode]=a,shape:"square","model-value":null==(a=S(l))?void 0:a.includes(e.productCode),name:e.productCode,onClick:Q((a=>n(e.productCode)),["stop"])},null,8,["model-value","name","onClick"])]})),title:T((()=>[I("div",ea,[I("div",aa,V(e.productName),1)])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-49f70a68"]]);const sa={class:"page-proposal-list"},la={class:"check-button"},ra={key:1,class:"van-sticky"},da={class:"add-plan"},ca={class:"has-select-product"},ia=(e=>(Y("data-v-40eee3f9"),e=e(),G(),e))((()=>I("span",{class:"icon"},null,-1))),na=a({name:"ProposalList"});var ua=B(a({...na,props:{isCreateProposal:{type:Boolean,default:!0}},setup(e){const a=ve(),t=oe(),s=te(),{isCreateProposal:l}=s.query,r=se(),d=x({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[],excludeMainRiskCode:[],firstLoading:!0}),{searchValue:i,tagLists:n,isOpen:u,loading:p,finished:v,refreshing:m,productList:f,selectProduct:h,insurerCodeList:g,showCategory:y,productTotal:k,showFooter:P}=L(d);le();const[b,q]=le(),B=o(1),O=()=>{const{excludeProductCodeList:e}=d;d.firstLoading&&ce.loading("加载中..."),Ce({title:i.value,insurerCodeList:g.value,productClass:B.value,showCategory:y.value,selectProductCodes:Array.isArray(e)?e:[],selectRiskCodes:d.excludeMainRiskCode||[],pageNum:1,pageSize:999}).then((e=>{const{code:a,data:o,total:t}=e;"10000"===a&&(f.value=o,k.value=t)})).finally((()=>{ce.clear(),d.firstLoading=!1}))},$=e=>{O()},U=e=>{const{selectInsureCode:a,selectCategory:o}=e;g.value=a,y.value=o,O()},A=()=>{m.value&&(f.value=[],m.value=!1),O(),p.value=!1,k.value===f.value.length&&(v.value=!0)},z=()=>{t.push({path:"historyProposalList"})};C((()=>{var e;const{birthday:o,gender:t}=(null==(e=a.$state.proposalInfo.proposalInsuredList)?void 0:e[0])||{};return{birthday:o,gender:t}}));const H=C((()=>f.value.length>0)),K=({productCode:e})=>l?(d.productCode=e,d.selectProduct.includes(e)?(d.selectProduct=d.selectProduct.filter((a=>a!==e)),!1):void(async(e,o)=>{const{code:t,data:s,message:l}=await Pe({...a.$state.insuredPersonVO,calcProductFactorList:[{productCode:e}]},{isCustomError:!0});"10000"===t?(d.errorMsgMap[e]="","function"==typeof o&&o(!0)):d.errorMsgMap[e]=l})(e,(()=>{d.selectProduct.push(e)}))):(t.push({path:"/proposal/createProposal",query:{productCode:e}}),!1),X=e=>{d.selectProduct=e,d.selectedProductList=d.selectedProductList.filter((a=>e.includes(a.productCode)))},Y=()=>{const e=d.proposalList.filter((e=>d.selectProduct.includes(e.proposalInsuredList[0].proposalInsuredProductList[0].productCode)));a.setTrialData(e),a.setSelectedProduct(d.selectProduct),a.setSelectedProductList(d.selectedProductList),t.back()},G=()=>{v.value=!0,p.value=!0,A()};return F((()=>{d.excludeProductCodeList=a.$state.excludeProduct,d.excludeMainRiskCode=a.$state.excludeMainRiskCode})),(e,a)=>{const o=Ve,t=we,s=me,n=Z,u=ue,h=ne,g=W,C=re("ProPageWrap"),y=ie;return _(),R(y,{"theme-vars":S(r)},{default:T((()=>[c(C,{class:"page-proposal"},{default:T((()=>[c(s,{modelValue:S(i),"onUpdate:modelValue":a[1]||(a[1]=e=>E(i)?i.value=e:null),placeholder:"请输入计划书名称",onSearch:$},{default:T((()=>[c(Ye,{"filter-class":"filter-area",onOnSelectInsure:U}),c(t,{modelValue:S(B),"onUpdate:modelValue":a[0]||(a[0]=e=>E(B)?B.value=e:null),"active-color":"var(--van-primary-color)","inactive-color":"black",fixed:!1,onChange:O},{default:T((()=>[c(o,{name:1},{default:T((()=>[D("非组合计划书")])),_:1}),c(o,{name:4},{default:T((()=>[D("组合计划书")])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),S(H)||S(d).firstLoading?N("",!0):(_(),R(fe,{key:0,"empty-img":S(he),title:"没有找到相关内容~","empty-class":"empty-select"},null,8,["empty-img"])),I("div",sa,[c(h,{modelValue:S(m),"onUpdate:modelValue":a[3]||(a[3]=e=>E(m)?m.value=e:null),onRefresh:G},{default:T((()=>[c(u,{loading:S(p),"onUpdate:loading":a[2]||(a[2]=e=>E(p)?p.value=e:null),finished:S(v),"finished-text":S(H)?"- 已经到底了哦 -":"",onLoad:A},{default:T((()=>[(_(!0),w(j,null,M(S(f),(e=>(_(),R(Fe,{key:e.id,"product-info":e,"error-msg":S(d).errorMsgMap[e.productCode],onClick:a=>K(e)},de({_:2},[S(l)?{name:"checkedProduct",fn:T((()=>[I("div",la,[(_(),R(n,{key:e.id,name:e.productCode,"model-value":S(d).selectProduct.includes(e.productCode),shape:"square",onChange:a=>((e,a)=>{e?d.selectedProductList.push(a):d.selectedProductList=d.selectedProductList.filter((e=>e.productCode!==a.productCode))})(a,e)},null,8,["name","model-value","onChange"]))])])),key:"0"}:void 0]),1032,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])]),S(l)&&S(P)?(_(),w("div",ra,[I("div",da,[I("p",{class:"has-select",onClick:a[4]||(a[4]=e=>S(q)(!S(b)))},[D(" 已选"),I("span",ca,V(S(d).selectProduct.length),1),D("款产品 "),ia]),c(g,{type:"primary",disabled:!S(d).selectProduct.length,onClick:Y},{default:T((()=>[D("添加到计划书")])),_:1},8,["disabled"])])])):N("",!0),c(ta,{"modal-value":S(d).selectProduct,"proposal-list":S(d).selectedProductList,"is-show":S(b),onClose:a[5]||(a[5]=e=>S(q)(!1)),onChecked:X},null,8,["modal-value","proposal-list","is-show"])])),_:1}),S(l)?N("",!0):(_(),R(ye,{key:0,"button-image":S("/static/png/lishijihuashu-b6958e78.png"),onClick:z},null,8,["button-image"]))])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-40eee3f9"]]);export{ua as default};
