import{i as e,_ as o,d as a,t as s,r as t,o as l,c as r,a as d,b as c,u as i,e as u,F as n,n as p,f as v,I as m,j as f,a0 as h,O as g,ca as C,av as y,p as P,q as k,l as L,w as b,cb as w,m as _,a8 as I,cc as S,aA as x,am as V,bR as j,at as M,au as q,z as U,ap as O,aw as F,bd as N,aq as T,c1 as $,g as A,h as B,c3 as z,a_ as R,k as W,aW as D,aJ as E,T as J}from"./index-b7b909b3.js";import{P as G}from"./index-a478ac74.js";import{L as H}from"./index-adb961d2.js";import{S as K}from"./index-af17d322.js";import{_ as Q}from"./index-96b4c3d4.js";import{_ as X}from"./empty-ae586b6c.js";import{P as Y,u as Z}from"./ProductTips-7f5300ab.js";import{q as ee,a as oe}from"./proposalList-fc6a4126.js";import{P as ae}from"./index-50b083d9.js";import{e as se}from"./trial-7c898340.js";const te={class:"com-product-item"},le={class:"content-wrap"},re={class:"product-image"},de={class:"insure-name"},ce={class:"product-info"},ie={class:"title"},ue={class:"description"},ne={class:"tags"};var pe=o(a({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const o=e,{productInfo:a}=s(o),f=t({checked:!1});return s(f),(o,s)=>{var t,f,h,g,C;const y=m;return l(),r("div",te,[d("div",le,[d("div",re,[c(y,{src:(null==(t=i(a).showConfig)?void 0:t.fileThumbnailUrl)||(null==(f=i(a).showConfig)?void 0:f.fileUrl)},null,8,["src"]),d("p",de,u((i(a).insurerName||"").substring(0,6)),1)]),d("div",ce,[d("p",ie,u(null==(h=i(a).showConfig)?void 0:h.title),1),d("p",ue,u(null==(g=i(a).showConfig)?void 0:g.text),1),d("p",ne,[(l(!0),r(n,null,p(null==(C=i(a).showConfig)?void 0:C.tags,((e,o)=>(l(),r("span",{key:o,class:"tag"},u(e),1)))),128))])]),v(o.$slots,"checkedProduct",{},void 0,!0)]),c(Y,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-6e554c12"]]);const ve=["xlink:href"],me=a({__name:"index",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const o=e,a=f((()=>`#icon-${o.name}`)),s=f((()=>o.name?`svg-icon icon-${o.name}`:"svg-icon"));return(o,t)=>(l(),r("svg",h({class:i(s)},o.$attrs,{style:{color:e.color}}),[d("use",{"xlink:href":i(a)},null,8,ve)],16))}});const fe=e=>(M("data-v-1d4256ac"),e=e(),q(),e),he={class:"com-tab-filter"},ge={class:"article-mid"},Ce={class:"article-tag"},ye=["onClick"],Pe=fe((()=>d("span",null,null,-1))),ke={class:"popup-inner"},Le=fe((()=>d("div",{class:"popup-title"},"保险公司",-1))),be={class:"footer-button"};var we=o(a({__name:"insureFilter",props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(o,{emit:a}){const{isPopShow:v,openPop:m,closePop:f}=function(o=!1){const a=e(o);return{isPopShow:a,openPop:e=>{e instanceof Function&&e(),a.value=!0},closePop:e=>{a.value=!1,e instanceof Function&&e()}}}(!1),h=t({insureList:[],checkedInsure:[],productCategoryList:[]}),{insureList:M,checkedInsure:q}=s(h),U=e(""),O=()=>{q.value=[]},F=()=>{var e;const{productCategoryId:o}=(null==(e=h.productCategoryList)?void 0:e[U.value])||{};a("onSelectInsure",{selectInsureCode:q.value,selectCategory:o}),f()};g((()=>{C().then((e=>{const{code:o,data:a}=e;"10000"===o&&(M.value=null==a?void 0:a.map((e=>({label:e.abbreviation,value:e.insurerCode}))))}))})),y((()=>{ee().then((e=>{const{code:o,data:a}=e||{};"10000"===o&&x(a)&&(h.productCategoryList=[{productCategoryName:"全部",productCategoryId:""},...a])}))}));const N=e();return g((()=>{N.value=document.querySelector(".page-proposal")})),(e,s)=>{const t=V,g=j;return l(),r("div",he,[d("div",ge,[d("div",Ce,[(l(!0),r(n,null,p(i(h).productCategoryList,((e,o)=>(l(),r("div",{key:o,class:P(["tag-item",{checked:i(U)==o}]),onClick:s=>((e,o)=>{var s;U.value=o;const{productCategoryId:t}=(null==(s=h.productCategoryList)?void 0:s[U.value])||{};a("onSelectInsure",{selectInsureCode:q.value,selectCategory:t})})(null==e||e.productCategoryId,o)},[d("div",{class:P(["tag-out",{checked:i(U)==o}])},[d("div",{class:P(["tag-item-text",{checked:i(U)==o}])},u(e.productCategoryName),3)],2)],10,ye)))),128))]),o.filter?(l(),r("div",{key:0,class:"filter",onClick:s[0]||(s[0]=(...e)=>i(m)&&i(m)(...e))},[Pe,d("div",{class:P(["text",{"has-select-condition":i(q).length>0}])},"筛选",2),c(me,{name:"filter"})])):k("",!0),i(N)?(l(),L(g,{key:1,show:i(v),position:"right","close-on-click-overlay":"",class:"proposal-list-filter-popup-wrap",style:S(o.popupStyle),onClickOverlay:i(f)},{default:b((()=>[d("div",ke,[Le,c(w,{modelValue:i(q),"onUpdate:modelValue":s[1]||(s[1]=e=>_(q)?q.value=e:null),options:i(M)},null,8,["modelValue","options"])]),d("div",be,[c(t,{plain:"",type:"primary",onClick:O},{default:b((()=>[I("重置")])),_:1}),c(t,{type:"primary",onClick:F},{default:b((()=>[I("确定")])),_:1})])])),_:1},8,["show","style","onClickOverlay"])):k("",!0)])])}}}),[["__scopeId","data-v-1d4256ac"]]);const _e={class:"com-trial-product-wrapper"},Ie={class:"container"},Se=(e=>(M("data-v-49f70a68"),e=e(),q(),e))((()=>d("span",{class:"title"}," 已选产品 ",-1))),xe={class:"popup-body"},Ve={class:"cell-title"},je={class:"title"},Me=a({name:"TrialProductPopup"});var qe=o(a({...Me,props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(o,{emit:a}){const s=o,t=e([]),v=e([]),m=e({isShow:s.isShow}),f=()=>{a("close")},h=()=>{v.value=[],a("checked",[])},g=e=>{var o,s,l;null==(l=null==(s=null==(o=null==t?void 0:t.value)?void 0:o[e])?void 0:s.toggle)||l.call(s),a("checked",v.value)};return U((()=>s.isShow),(e=>{m.value.isShow=e})),U(v,((e=[])=>{a("update:modalValue",e)}),{deep:!0,immediate:!0}),U((()=>s.modalValue),((e=[])=>{v.value=e}),{deep:!0,immediate:!0}),(e,a)=>{const s=N,C=O,y=T,P=$,k=j;return l(),r("div",_e,[c(k,{show:i(m).isShow,"onUpdate:show":a[1]||(a[1]=e=>i(m).isShow=e),position:"bottom",onClose:f},{default:b((()=>[d("div",Ie,[d("div",{class:"popup-header"},[d("span",{class:"clear-all",onClick:h}," 清空选项 "),Se,d("span",{class:"close",onClick:f})]),d("div",xe,[c(P,{modelValue:i(v),"onUpdate:modelValue":a[0]||(a[0]=e=>_(v)?v.value=e:null)},{default:b((()=>[c(y,{inset:""},{default:b((()=>[(l(!0),r(n,null,p(o.proposalList,(e=>(l(),L(C,{key:e.productCode,title:e.productName,onClick:o=>g(e.productCode)},{"right-icon":b((()=>{var o;return[c(s,{ref_for:!0,ref:o=>i(t)[e.productCode]=o,shape:"square","model-value":null==(o=i(v))?void 0:o.includes(e.productCode),name:e.productCode,onClick:F((o=>g(e.productCode)),["stop"])},null,8,["model-value","name","onClick"])]})),title:b((()=>[d("div",Ve,[d("div",je,u(e.productName),1)])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-49f70a68"]]);const Ue={class:"search-wrap"},Oe={class:"page-proposal-list"},Fe={class:"check-button"},Ne={key:1,class:"van-sticky"},Te={class:"add-plan"},$e={class:"has-select-product"},Ae=(e=>(M("data-v-fabd05a0"),e=e(),q(),e))((()=>d("span",{class:"icon"},null,-1))),Be=a({name:"ProposalList"});var ze=o(a({...Be,props:{isCreateProposal:{type:Boolean,default:!0}},setup(e){const o=Z(),a=A(),v=B(),{isCreateProposal:m}=v.query,h=z(),g=t({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[],firstLoading:!0}),{searchValue:C,tagLists:P,isOpen:w,loading:S,finished:x,refreshing:j,productList:M,selectProduct:q,insurerCodeList:U,showCategory:O,productTotal:F,showFooter:T}=s(g);R();const[$,Y]=R(),ee=()=>{const{excludeProductCodeList:e}=g;g.firstLoading&&J.loading("加载中..."),oe({title:C.value,insurerCodeList:U.value,showCategory:O.value,excludeProductCodeList:Array.isArray(e)?e:[],pageNum:1,pageSize:999}).then((e=>{const{code:o,data:a,total:s}=e;"10000"===o&&(M.value=null==a?void 0:a.datas,F.value=s)})).finally((()=>{J.clear(),g.firstLoading=!1}))},te=e=>{ee()},le=e=>{const{selectInsureCode:o,selectCategory:a}=e;U.value=o,O.value=a,ee()},re=()=>{j.value&&(M.value=[],j.value=!1),ee(),S.value=!1,F.value===M.value.length&&(x.value=!0)},de=()=>{a.push({path:"historyProposalList"})};f((()=>{var e;const{birthday:a,gender:s}=(null==(e=o.$state.proposalInfo.proposalInsuredList)?void 0:e[0])||{};return{birthday:a,gender:s}}));const ce=f((()=>M.value.length>0)),ie=({productCode:e})=>m?(g.productCode=e,g.selectProduct.includes(e)?(g.selectProduct=g.selectProduct.filter((o=>o!==e)),!1):void(async(e,a)=>{const{code:s,data:t,message:l}=await se({...o.$state.insuredPersonVO,calcProductFactorList:[{productCode:e}]},{isCustomError:!0});"10000"===s?(g.errorMsgMap[e]="","function"==typeof a&&a(!0)):g.errorMsgMap[e]=l})(e,(()=>{g.selectProduct.push(e)}))):(a.push({path:"/proposal/createProposal",query:{productCode:e}}),!1),ue=e=>{g.selectProduct=e,g.selectedProductList=g.selectedProductList.filter((o=>e.includes(o.productCode)))},ne=()=>{const e=g.proposalList.filter((e=>g.selectProduct.includes(e.proposalInsuredList[0].proposalInsuredProductList[0].productCode)));o.setTrialData(e),o.setSelectedProduct(g.selectProduct),o.setSelectedProductList(g.selectedProductList),a.back()},ve=()=>{x.value=!0,S.value=!0,re()};return y((()=>{g.excludeProductCodeList=o.$state.excludeProduct})),(e,o)=>{const a=K,s=N,t=H,v=G,f=V,y=W("ProPageWrap"),P=E;return l(),L(P,{"theme-vars":i(h)},{default:b((()=>[c(y,{class:"page-proposal"},{default:b((()=>[d("div",Ue,[c(a,{modelValue:i(C),"onUpdate:modelValue":o[0]||(o[0]=e=>_(C)?C.value=e:null),placeholder:"搜索计划书",shape:"round",class:"search",onSearch:te},null,8,["modelValue"]),c(we,{filter:i(w),"onUpdate:filter":o[1]||(o[1]=e=>_(w)?w.value=e:null),"filter-class":"filter-area",onOnSelectInsure:le},null,8,["filter"])]),i(ce)||i(g).firstLoading?k("",!0):(l(),L(Q,{key:0,"empty-img":i(X),title:"没有找到相关内容~","empty-class":"empty-select"},null,8,["empty-img"])),d("div",Oe,[c(v,{modelValue:i(j),"onUpdate:modelValue":o[3]||(o[3]=e=>_(j)?j.value=e:null),onRefresh:ve},{default:b((()=>[c(t,{loading:i(S),"onUpdate:loading":o[2]||(o[2]=e=>_(S)?S.value=e:null),finished:i(x),"finished-text":i(ce)?"- 已经到底了哦 -":"",onLoad:re},{default:b((()=>[(l(!0),r(n,null,p(i(M),(e=>(l(),L(pe,{key:e.id,"product-info":e,"error-msg":i(g).errorMsgMap[e.productCode],onClick:o=>ie(e)},D({_:2},[i(m)?{name:"checkedProduct",fn:b((()=>[d("div",Fe,[(l(),L(s,{key:e.id,name:e.productCode,"model-value":i(g).selectProduct.includes(e.productCode),shape:"square",onChange:o=>((e,o)=>{e?g.selectedProductList.push(o):g.selectedProductList=g.selectedProductList.filter((e=>e.productCode!==o.productCode))})(o,e)},null,8,["name","model-value","onChange"]))])])),key:"0"}:void 0]),1032,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])]),i(m)&&i(T)?(l(),r("div",Ne,[d("div",Te,[d("p",{class:"has-select",onClick:o[4]||(o[4]=e=>i(Y)(!i($)))},[I(" 已选"),d("span",$e,u(i(g).selectProduct.length),1),I("款产品 "),Ae]),c(f,{type:"primary",disabled:!i(g).selectProduct.length,onClick:ne},{default:b((()=>[I("添加到计划书")])),_:1},8,["disabled"])])])):k("",!0),c(qe,{"modal-value":i(g).selectProduct,"proposal-list":i(g).selectedProductList,"is-show":i($),onClose:o[5]||(o[5]=e=>i(Y)(!1)),onChecked:ue},null,8,["modal-value","proposal-list","is-show"])])),_:1}),i(m)?k("",!0):(l(),L(ae,{key:0,"button-image":i("/static/png/lishijihuashu-b6958e78.png"),onClick:de},null,8,["button-image"]))])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-fabd05a0"]]);export{ze as default};
