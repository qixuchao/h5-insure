import{j as e,d as o,t as s,r as t,o as a,c as l,a as r,b as d,u as c,e as i,F as u,q as n,g as p,_ as v,I as m,k as f,a0 as h,O as g,c$ as C,aE as y,n as P,f as k,m as L,w as b,d0 as w,p as _,a8 as I,c2 as S,aJ as x,ag as V,cz as j,aC as q,aD as M,B as U,cF as F,az as O,bq as $,aA as N,h as T,i as A,cP as B,bV as z,l as D,bR as E,bb as R,T as J}from"./index-256fc805.js";import{P as W}from"./index-a15d0760.js";import{L as G}from"./index-a982520b.js";import{S as H}from"./index-aa1c0b52.js";import{_ as K}from"./index-66fb3ee7.js";import{_ as Q}from"./empty-ae586b6c.js";import{P as X,u as Y}from"./ProductTips-cd7ec9a5.js";import{q as Z,a as ee}from"./proposalList-0af030b3.js";import{P as oe}from"./index-867a11ca.js";import{C as se}from"./index-342d5bfb.js";import{q as te}from"./trial-40d3fb55.js";const ae={class:"com-product-item"},le={class:"content-wrap"},re={class:"product-image"},de={class:"insure-name"},ce={class:"product-info"},ie={class:"title"},ue={class:"description"},ne={class:"tags"};var pe=v(o({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const o=e,{productInfo:v}=s(o),f=t({checked:!1});return s(f),(e,o)=>{var s,t,f,h,g;const C=m;return a(),l("div",ae,[r("div",le,[r("div",re,[d(C,{src:(null==(s=c(v).showConfig)?void 0:s.fileThumbnailUrl)||(null==(t=c(v).showConfig)?void 0:t.fileUrl)},null,8,["src"]),r("p",de,i((c(v).insurerName||"").substring(0,6)),1)]),r("div",ce,[r("p",ie,i(null==(f=c(v).showConfig)?void 0:f.title),1),r("p",ue,i(null==(h=c(v).showConfig)?void 0:h.text),1),r("p",ne,[(a(!0),l(u,null,n(null==(g=c(v).showConfig)?void 0:g.tags,((e,o)=>(a(),l("span",{key:o,class:"tag"},i(e),1)))),128))])]),p(e.$slots,"checkedProduct",{},void 0,!0)]),d(X,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-6e554c12"]]);const ve=["xlink:href"],me=o({__name:"index",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const o=e,s=f((()=>`#icon-${o.name}`)),t=f((()=>o.name?`svg-icon icon-${o.name}`:"svg-icon"));return(o,d)=>(a(),l("svg",h({class:c(t)},o.$attrs,{style:{color:e.color}}),[r("use",{"xlink:href":c(s)},null,8,ve)],16))}});const fe=e=>(q("data-v-1d4256ac"),e=e(),M(),e),he={class:"com-tab-filter"},ge={class:"article-mid"},Ce={class:"article-tag"},ye=["onClick"],Pe=fe((()=>r("span",null,null,-1))),ke={class:"popup-inner"},Le=fe((()=>r("div",{class:"popup-title"},"保险公司",-1))),be={class:"footer-button"};var we=v(o({__name:"insureFilter",props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(o,{emit:p}){const{isPopShow:v,openPop:m,closePop:f}=function(o=!1){const s=e(o);return{isPopShow:s,openPop:e=>{e instanceof Function&&e(),s.value=!0},closePop:e=>{s.value=!1,e instanceof Function&&e()}}}(!1),h=t({insureList:[],checkedInsure:[],productCategoryList:[]}),{insureList:q,checkedInsure:M}=s(h),U=e(""),F=()=>{M.value=[]},O=()=>{var e;const{productCategoryId:o}=(null==(e=h.productCategoryList)?void 0:e[U.value])||{};p("onSelectInsure",{selectInsureCode:M.value,selectCategory:o}),f()};g((()=>{C().then((e=>{const{code:o,data:s}=e;"10000"===o&&(q.value=null==s?void 0:s.map((e=>({label:e.abbreviation,value:e.insurerCode}))))}))})),y((()=>{Z().then((e=>{const{code:o,data:s}=e||{};"10000"===o&&x(s)&&(h.productCategoryList=[{productCategoryName:"全部",productCategoryId:""},...s])}))}));const $=e();return g((()=>{$.value=document.querySelector(".page-proposal")})),(e,s)=>{const t=V,g=j;return a(),l("div",he,[r("div",ge,[r("div",Ce,[(a(!0),l(u,null,n(c(h).productCategoryList,((e,o)=>(a(),l("div",{key:o,class:P(["tag-item",{checked:c(U)==o}]),onClick:s=>((e,o)=>{var s;U.value=o;const{productCategoryId:t}=(null==(s=h.productCategoryList)?void 0:s[U.value])||{};p("onSelectInsure",{selectInsureCode:M.value,selectCategory:t})})(null==e||e.productCategoryId,o)},[r("div",{class:P(["tag-out",{checked:c(U)==o}])},[r("div",{class:P(["tag-item-text",{checked:c(U)==o}])},i(e.productCategoryName),3)],2)],10,ye)))),128))]),o.filter?(a(),l("div",{key:0,class:"filter",onClick:s[0]||(s[0]=(...e)=>c(m)&&c(m)(...e))},[Pe,r("div",{class:P(["text",{"has-select-condition":c(M).length>0}])},"筛选",2),d(me,{name:"filter"})])):k("",!0),c($)?(a(),L(g,{key:1,show:c(v),position:"right","close-on-click-overlay":"",class:"proposal-list-filter-popup-wrap",style:S(o.popupStyle),onClickOverlay:c(f)},{default:b((()=>[r("div",ke,[Le,d(w,{modelValue:c(M),"onUpdate:modelValue":s[1]||(s[1]=e=>_(M)?M.value=e:null),options:c(q)},null,8,["modelValue","options"])]),r("div",be,[d(t,{plain:"",type:"primary",onClick:F},{default:b((()=>[I("重置")])),_:1}),d(t,{type:"primary",onClick:O},{default:b((()=>[I("确定")])),_:1})])])),_:1},8,["show","style","onClickOverlay"])):k("",!0)])])}}}),[["__scopeId","data-v-1d4256ac"]]);const _e={class:"com-trial-product-wrapper"},Ie={class:"container"},Se=(e=>(q("data-v-49f70a68"),e=e(),M(),e))((()=>r("span",{class:"title"}," 已选产品 ",-1))),xe={class:"popup-body"},Ve={class:"cell-title"},je={class:"title"},qe=o({name:"TrialProductPopup"});var Me=v(o({...qe,props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(o,{emit:s}){const t=o,p=e([]),v=e([]),m=e({isShow:t.isShow}),f=()=>{s("close")},h=()=>{v.value=[],s("checked",[])},g=e=>{var o,t,a;null==(a=null==(t=null==(o=null==p?void 0:p.value)?void 0:o[e])?void 0:t.toggle)||a.call(t),s("checked",v.value)};return U((()=>t.isShow),(e=>{m.value.isShow=e})),U(v,((e=[])=>{s("update:modalValue",e)}),{deep:!0,immediate:!0}),U((()=>t.modalValue),((e=[])=>{v.value=e}),{deep:!0,immediate:!0}),(e,o)=>{const s=O,t=$,C=se,y=N,P=j;return a(),l("div",_e,[d(P,{show:c(m).isShow,"onUpdate:show":o[1]||(o[1]=e=>c(m).isShow=e),position:"bottom",onClose:f},{default:b((()=>[r("div",Ie,[r("div",{class:"popup-header"},[r("span",{class:"clear-all",onClick:h}," 清空选项 "),Se,r("span",{class:"close",onClick:f})]),r("div",xe,[d(y,{modelValue:c(v),"onUpdate:modelValue":o[0]||(o[0]=e=>_(v)?v.value=e:null)},{default:b((()=>[d(C,{inset:""},{default:b((()=>[(a(!0),l(u,null,n(e.proposalList,(e=>(a(),L(t,{key:e.productCode,title:e.productName,onClick:o=>g(e.productCode)},{"right-icon":b((()=>{var o;return[d(s,{ref_for:!0,ref:o=>c(p)[e.productCode]=o,shape:"square","model-value":null==(o=c(v))?void 0:o.includes(e.productCode),name:e.productCode,onClick:F((o=>g(e.productCode)),["stop"])},null,8,["model-value","name","onClick"])]})),title:b((()=>[r("div",Ve,[r("div",je,i(e.productName),1)])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-49f70a68"]]);const Ue={class:"search-wrap"},Fe={class:"page-proposal-list"},Oe={class:"check-button"},$e={key:1,class:"van-sticky"},Ne={class:"add-plan"},Te={class:"has-select-product"},Ae=(e=>(q("data-v-fabd05a0"),e=e(),M(),e))((()=>r("span",{class:"icon"},null,-1))),Be=o({name:"ProposalList"});var ze=v(o({...Be,props:{isCreateProposal:{type:Boolean,default:!0}},setup(e){const o=Y(),p=T(),v=A(),{isCreateProposal:m}=v.query,h=B(),g=t({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[],firstLoading:!0}),{searchValue:C,tagLists:P,isOpen:w,loading:S,finished:x,refreshing:j,productList:q,selectProduct:M,insurerCodeList:U,showCategory:F,productTotal:$,showFooter:N}=s(g);z();const[X,Z]=z(),se=()=>{const{excludeProductCodeList:e}=g;g.firstLoading&&J.loading("加载中..."),ee({title:C.value,insurerCodeList:U.value,showCategory:F.value,excludeProductCodeList:Array.isArray(e)?e:[],pageNum:1,pageSize:999}).then((e=>{const{code:o,data:s,total:t}=e;"10000"===o&&(q.value=null==s?void 0:s.datas,$.value=t)})).finally((()=>{J.clear(),g.firstLoading=!1}))},ae=e=>{se()},le=e=>{const{selectInsureCode:o,selectCategory:s}=e;U.value=o,F.value=s,se()},re=()=>{j.value&&(q.value=[],j.value=!1),se(),S.value=!1,$.value===q.value.length&&(x.value=!0)},de=()=>{p.push({path:"historyProposalList"})};f((()=>{var e;const{birthday:s,gender:t}=(null==(e=o.$state.proposalInfo.proposalInsuredList)?void 0:e[0])||{};return{birthday:s,gender:t}}));const ce=f((()=>q.value.length>0)),ie=({productCode:e})=>m?(g.productCode=e,g.selectProduct.includes(e)?(g.selectProduct=g.selectProduct.filter((o=>o!==e)),!1):void(async(e,s)=>{const{code:t,data:a,message:l}=await te({...o.$state.insuredPersonVO,calcProductFactorList:[{productCode:e}]},{isCustomError:!0});"10000"===t?(g.errorMsgMap[e]="","function"==typeof s&&s(!0)):g.errorMsgMap[e]=l})(e,(()=>{g.selectProduct.push(e)}))):(p.push({path:"/proposal/createProposal",query:{productCode:e}}),!1),ue=e=>{g.selectProduct=e,g.selectedProductList=g.selectedProductList.filter((o=>e.includes(o.productCode)))},ne=()=>{const e=g.proposalList.filter((e=>g.selectProduct.includes(e.proposalInsuredList[0].proposalInsuredProductList[0].productCode)));o.setTrialData(e),o.setSelectedProduct(g.selectProduct),o.setSelectedProductList(g.selectedProductList),p.back()},ve=()=>{x.value=!0,S.value=!0,re()};return y((()=>{g.excludeProductCodeList=o.$state.excludeProduct})),(e,o)=>{const s=H,t=O,p=G,v=W,f=V,y=D("ProPageWrap"),P=R;return a(),L(P,{"theme-vars":c(h)},{default:b((()=>[d(y,{class:"page-proposal"},{default:b((()=>[r("div",Ue,[d(s,{modelValue:c(C),"onUpdate:modelValue":o[0]||(o[0]=e=>_(C)?C.value=e:null),placeholder:"搜索计划书",shape:"round",class:"search",onSearch:ae},null,8,["modelValue"]),d(we,{filter:c(w),"onUpdate:filter":o[1]||(o[1]=e=>_(w)?w.value=e:null),"filter-class":"filter-area",onOnSelectInsure:le},null,8,["filter"])]),c(ce)||c(g).firstLoading?k("",!0):(a(),L(K,{key:0,"empty-img":c(Q),title:"没有找到相关内容~","empty-class":"empty-select"},null,8,["empty-img"])),r("div",Fe,[d(v,{modelValue:c(j),"onUpdate:modelValue":o[3]||(o[3]=e=>_(j)?j.value=e:null),onRefresh:ve},{default:b((()=>[d(p,{loading:c(S),"onUpdate:loading":o[2]||(o[2]=e=>_(S)?S.value=e:null),finished:c(x),"finished-text":c(ce)?"- 已经到底了哦 -":"",onLoad:re},{default:b((()=>[(a(!0),l(u,null,n(c(q),(e=>(a(),L(pe,{key:e.id,"product-info":e,"error-msg":c(g).errorMsgMap[e.productCode],onClick:o=>ie(e)},E({_:2},[c(m)?{name:"checkedProduct",fn:b((()=>[r("div",Oe,[(a(),L(t,{key:e.id,name:e.productCode,"model-value":c(g).selectProduct.includes(e.productCode),shape:"square",onChange:o=>((e,o)=>{e?g.selectedProductList.push(o):g.selectedProductList=g.selectedProductList.filter((e=>e.productCode!==o.productCode))})(o,e)},null,8,["name","model-value","onChange"]))])])),key:"0"}:void 0]),1032,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])]),c(m)&&c(N)?(a(),l("div",$e,[r("div",Ne,[r("p",{class:"has-select",onClick:o[4]||(o[4]=e=>c(Z)(!c(X)))},[I(" 已选"),r("span",Te,i(c(g).selectProduct.length),1),I("款产品 "),Ae]),d(f,{type:"primary",disabled:!c(g).selectProduct.length,onClick:ne},{default:b((()=>[I("添加到计划书")])),_:1},8,["disabled"])])])):k("",!0),d(Me,{"modal-value":c(g).selectProduct,"proposal-list":c(g).selectedProductList,"is-show":c(X),onClose:o[5]||(o[5]=e=>c(Z)(!1)),onChecked:ue},null,8,["modal-value","proposal-list","is-show"])])),_:1}),c(m)?k("",!0):(a(),L(oe,{key:0,"button-image":c("/static/png/lishijihuashu-b6958e78.png"),onClick:de},null,8,["button-image"]))])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-fabd05a0"]]);export{ze as default};
