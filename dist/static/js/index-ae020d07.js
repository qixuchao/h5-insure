import{aG as e,d as s,r as t,bZ as a,z as o,bn as l,R as r,bo as d,i as c,aL as i,aN as u,bm as n,aR as p,$ as v,b_ as h,aU as m,G as g,an as f,c as C,A as y,f as P,g as k,E as L,U as b,V as w,k as x,a6 as _,L as S,a9 as V,a1 as I,b$ as T,o as j,F as $,h as M,w as D,c0 as U,a2 as N,j as F,bw as H,ay as O,B as q,bD as B,al as A,am as R,bL as z,aA as E,bN as G,e as Y,bx as W,bM as Z,a as J,u as K,ac as Q,b as X,ao as ee}from"./index-7e7f1188.js";import{L as se}from"./index-960092de.js";import{S as te}from"./index-b30b4565.js";import{P as ae}from"./index-f038ada3.js";import{e as oe}from"./empty-c926d8ec.js";import{P as le,u as re}from"./ProductTips-47028ccd.js";import{q as de,a as ce}from"./proposalList-42d83c8a.js";import{P as ie}from"./index-c81b36a7.js";import{a as ue}from"./trial-a02a86b9.js";import"./pdfh5-008ca364.js";const[ne,pe,ve]=e("pull-refresh"),he=["pulling","loosing","success"];const me=m(s({name:ne,props:{disabled:Boolean,modelValue:Boolean,headHeight:i(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:u,successDuration:i(500),animationDuration:i(300)},emits:["change","refresh","update:modelValue"],setup(e,{emit:s,slots:i}){let u;const m=t(),g=t(),f=a(m),C=o({status:"normal",distance:0,duration:0}),y=l(),P=()=>{if(50!==e.headHeight)return{height:`${e.headHeight}px`}},k=()=>"loading"!==C.status&&"success"!==C.status&&!e.disabled,L=(t,a)=>{const o=+(e.pullDistance||e.headHeight);C.distance=t,C.status=a?"loading":0===t?"normal":t<o?"pulling":"loosing",s("change",{status:C.status,distance:t})},b=()=>{const{status:s}=C;return"normal"===s?"":e[`${s}Text`]||ve(s)},w=()=>{const{status:e,distance:s}=C;if(i[e])return i[e]({distance:s});const t=[];return he.includes(e)&&t.push(c("div",{class:pe("text")},[b()])),"loading"===e&&t.push(c(n,{class:pe("loading")},{default:b})),t},x=e=>{u=0===h(f.value),u&&(C.duration=0,y.start(e))},_=e=>{k()&&x(e)},S=()=>{u&&y.deltaY.value&&k()&&(C.duration=+e.animationDuration,"loosing"===C.status?(L(+e.headHeight,!0),s("update:modelValue",!0),v((()=>s("refresh")))):L(0))};return r((()=>e.modelValue),(s=>{C.duration=+e.animationDuration,s?L(+e.headHeight,!0):i.success||e.successText?(C.status="success",setTimeout((()=>{L(0)}),+e.successDuration)):L(0,!1)})),d("touchmove",(s=>{if(k()){u||x(s);const{deltaY:t}=y;y.move(s),u&&t.value>=0&&y.isVertical()&&(p(s),L((s=>{const t=+(e.pullDistance||e.headHeight);return s>t&&(s=s<2*t?t+(s-t)/2:1.5*t+(s-2*t)/4),Math.round(s)})(t.value)))}}),{target:g}),()=>{var e;const s={transitionDuration:`${C.duration}ms`,transform:C.distance?`translate3d(0,${C.distance}px, 0)`:""};return c("div",{ref:m,class:pe()},[c("div",{ref:g,class:pe("track"),style:s,onTouchstartPassive:_,onTouchend:S,onTouchcancel:S},[c("div",{class:pe("head"),style:P()},[w()]),null==(e=i.default)?void 0:e.call(i)])])}}}));const ge={class:"com-product-item"},fe={class:"content-wrap"},Ce={class:"product-image"},ye={class:"insure-name"},Pe={class:"product-info"},ke={class:"title"},Le={class:"description"},be={class:"tags"};var we=g(s({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const s=e,{productInfo:t}=f(s),a=o({checked:!1});return f(a),(s,a)=>{var o,l,r,d;const i=_;return C(),y("div",ge,[P("div",fe,[P("div",Ce,[c(i,{src:null==(o=k(t).showConfig)?void 0:o.fileUrl},null,8,["src"]),P("p",ye,L((k(t).insurerName||"").substring(0,6)),1)]),P("div",Pe,[P("p",ke,L(null==(l=k(t).showConfig)?void 0:l.title),1),P("p",Le,L(null==(r=k(t).showConfig)?void 0:r.text),1),P("p",be,[(C(!0),y(b,null,w(null==(d=k(t).showConfig)?void 0:d.tags,((e,s)=>(C(),y("span",{key:s,class:"tag"},L(e),1)))),128))])]),x(s.$slots,"checkedProduct",{},void 0,!0)]),c(le,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-2817dd39"]]);const xe=["xlink:href"],_e=s({__name:"index",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const s=e,t=S((()=>`#icon-${s.name}`)),a=S((()=>s.name?`svg-icon icon-${s.name}`:"svg-icon"));return(s,o)=>(C(),y("svg",V({class:k(a)},s.$attrs,{style:{color:e.color}}),[P("use",{"xlink:href":k(t)},null,8,xe)],16))}});const Se=e=>(A("data-v-1bfdb749"),e=e(),R(),e),Ve={class:"com-tab-filter"},Ie={class:"article-mid"},Te={class:"article-tag"},je=["onClick"],$e=Se((()=>P("span",null,null,-1))),Me={class:"popup-inner"},De=Se((()=>P("div",{class:"popup-title"},"保险公司",-1))),Ue={class:"footer-button"};var Ne=g(s({__name:"insureFilter",props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(e,{emit:s}){const{isPopShow:a,openPop:l,closePop:r}=function(e=!1){const s=t(e);return{isPopShow:s,openPop:e=>{e instanceof Function&&e(),s.value=!0},closePop:e=>{s.value=!1,e instanceof Function&&e()}}}(!1),d=o({insureList:[],checkedInsure:[],productCategoryList:[]}),{insureList:i,checkedInsure:u}=f(d),n=t(""),p=()=>{u.value=[]},v=()=>{var e;const{productCategoryId:t}=(null==(e=d.productCategoryList)?void 0:e[n.value])||{};s("onSelectInsure",{selectInsureCode:u.value,selectCategory:t}),r()};return I((()=>{T().then((e=>{const{code:s,data:t}=e;"10000"===s&&(i.value=null==t?void 0:t.map((e=>({label:e.abbreviation,value:e.insurerCode}))))}))})),j((()=>{de().then((e=>{const{code:s,data:t}=e||{};"10000"===s&&O(t)&&(d.productCategoryList=[{productCategoryName:"全部",productCategoryId:""},...t])}))})),(t,o)=>{const h=q,m=B;return C(),y("div",Ve,[P("div",Ie,[P("div",Te,[(C(!0),y(b,null,w(k(d).productCategoryList,((e,t)=>(C(),y("div",{key:t,class:$(["tag-item",{checked:k(n)==t}]),onClick:a=>((e,t)=>{var a;n.value=t;const{productCategoryId:o}=(null==(a=d.productCategoryList)?void 0:a[n.value])||{};s("onSelectInsure",{selectInsureCode:u.value,selectCategory:o})})(null==e||e.productCategoryId,t)},[P("div",{class:$(["tag-out",{checked:k(n)==t}])},[P("div",{class:$(["tag-item-text",{checked:k(n)==t}])},L(e.productCategoryName),3)],2)],10,je)))),128))]),e.filter?(C(),y("div",{key:0,class:"filter",onClick:o[0]||(o[0]=(...e)=>k(l)&&k(l)(...e))},[$e,P("div",{class:$(["text",{"has-select-condition":k(u).length>0}])},"筛选",2),c(_e,{name:"filter"})])):M("",!0),c(m,{show:k(a),position:"right","close-on-click-overlay":"",style:H(e.popupStyle||{width:"322px",height:"100%",padding:"0 15px"}),onClickOverlay:k(r)},{default:D((()=>[P("div",Me,[De,c(U,{modelValue:k(u),"onUpdate:modelValue":o[1]||(o[1]=e=>N(u)?u.value=e:null),options:k(i)},null,8,["modelValue","options"])]),P("div",Ue,[c(h,{plain:"",type:"primary",onClick:p},{default:D((()=>[F("重置")])),_:1}),c(h,{type:"primary",onClick:v},{default:D((()=>[F("确定")])),_:1})])])),_:1},8,["show","style","onClickOverlay"])])])}}}),[["__scopeId","data-v-1bfdb749"]]);const Fe={class:"com-trial-product-wrapper"},He={class:"container"},Oe=(e=>(A("data-v-49f70a68"),e=e(),R(),e))((()=>P("span",{class:"title"}," 已选产品 ",-1))),qe={class:"popup-body"},Be={class:"cell-title"},Ae={class:"title"},Re=s({name:"TrialProductPopup"});var ze=g(s({...Re,props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(e,{emit:s}){const a=e,o=t([]),l=t([]),d=t({isShow:a.isShow}),i=()=>{s("close")},u=()=>{l.value=[],s("checked",[])},n=e=>{var t,a,r;null==(r=null==(a=null==(t=null==o?void 0:o.value)?void 0:t[e])?void 0:a.toggle)||r.call(a),s("checked",l.value)};return r((()=>a.isShow),(e=>{d.value.isShow=e})),r(l,((e=[])=>{s("update:modalValue",e)}),{deep:!0,immediate:!0}),r((()=>a.modalValue),((e=[])=>{l.value=e}),{deep:!0,immediate:!0}),(s,t)=>{const a=z,r=E,p=Z,v=G,h=B;return C(),y("div",Fe,[c(h,{show:k(d).isShow,"onUpdate:show":t[1]||(t[1]=e=>k(d).isShow=e),position:"bottom",onClose:i},{default:D((()=>[P("div",He,[P("div",{class:"popup-header"},[P("span",{class:"clear-all",onClick:u}," 清空选项 "),Oe,P("span",{class:"close",onClick:i})]),P("div",qe,[c(v,{modelValue:k(l),"onUpdate:modelValue":t[0]||(t[0]=e=>N(l)?l.value=e:null)},{default:D((()=>[c(p,{inset:""},{default:D((()=>[(C(!0),y(b,null,w(e.proposalList,(e=>(C(),Y(r,{key:e.productCode,title:e.productName,onClick:s=>n(e.productCode)},{"right-icon":D((()=>{var s;return[c(a,{ref_for:!0,ref:s=>k(o)[e.productCode]=s,shape:"square","model-value":null==(s=k(l))?void 0:s.includes(e.productCode),name:e.productCode,onClick:W((s=>n(e.productCode)),["stop"])},null,8,["model-value","name","onClick"])]})),title:D((()=>[P("div",Be,[P("div",Ae,L(e.productName),1)])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-49f70a68"]]);const Ee={class:"search-wrap"},Ge={class:"page-proposal-list"},Ye={class:"check-button"},We={key:1,class:"van-sticky"},Ze={class:"add-plan"},Je={class:"has-select-product"},Ke=(e=>(A("data-v-cadde0d8"),e=e(),R(),e))((()=>P("span",{class:"icon"},null,-1))),Qe=s({name:"ProposalList"});var Xe=g(s({...Qe,props:{isCreateProposal:{type:Boolean,default:!0}},setup(e){const s=re(),t=J(),a=K(),{isCreateProposal:l}=a.query,r=o({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[]}),{searchValue:d,tagLists:i,isOpen:u,loading:n,finished:p,refreshing:v,productList:h,selectProduct:m,insurerCodeList:g,showCategory:x,productTotal:_,showFooter:V}=f(r);Q();const[I,T]=Q(),$=()=>{const{excludeProductCodeList:e}=r;ce({title:d.value,insurerCodeList:g.value,showCategory:x.value,excludeProductCodeList:Array.isArray(e)?e:[],pageNum:1,pageSize:999}).then((e=>{const{code:s,data:t,total:a}=e;"10000"===s&&(h.value=null==t?void 0:t.datas,_.value=a)}))},U=e=>{$()},H=e=>{const{selectInsureCode:s,selectCategory:t}=e;g.value=s,x.value=t,$()},O=()=>{v.value&&(h.value=[],v.value=!1),$(),n.value=!1,_.value===h.value.length&&(p.value=!0)},B=()=>{t.push({path:"historyProposalList"})};S((()=>{var e;const{birthday:t,gender:a}=(null==(e=s.$state.proposalInfo.proposalInsuredList)?void 0:e[0])||{};return{birthday:t,gender:a}}));const A=S((()=>h.value.length>0)),R=({productCode:e})=>l?(r.productCode=e,r.selectProduct.includes(e)?(r.selectProduct=r.selectProduct.filter((s=>s!==e)),!1):void(async(e,t)=>{const{code:a,data:o,message:l}=await ue({...s.$state.insuredPersonVO,calcProductFactorList:[{productCode:e}]},{isCustomError:!0});"10000"===a?(r.errorMsgMap[e]="","function"==typeof t&&t(!0)):r.errorMsgMap[e]=l})(e,(()=>{r.selectProduct.push(e)}))):(t.push({path:"/proposal/createProposal",query:{productCode:e}}),!1),E=e=>{r.selectProduct=e,r.selectedProductList=r.selectedProductList.filter((s=>e.includes(s.productCode)))},G=()=>{const e=r.proposalList.filter((e=>r.selectProduct.includes(e.proposalInsuredList[0].proposalInsuredProductList[0].productCode)));s.setTrialData(e),s.setSelectedProduct(r.selectProduct),t.back()},W=()=>{p.value=!0,n.value=!0,O()};return j((()=>{r.excludeProductCodeList=s.$state.excludeProduct})),(e,s)=>{const t=te,a=z,o=se,i=me,m=q,g=X("ProPageWrap");return C(),y(b,null,[c(g,{class:"page-proposal"},{default:D((()=>[P("div",Ee,[c(t,{modelValue:k(d),"onUpdate:modelValue":s[0]||(s[0]=e=>N(d)?d.value=e:null),placeholder:"搜索计划书",shape:"round",class:"search",onSearch:U},null,8,["modelValue"]),c(Ne,{filter:k(u),"onUpdate:filter":s[1]||(s[1]=e=>N(u)?u.value=e:null),"filter-class":"filter-area",onOnSelectInsure:H},null,8,["filter"])]),k(A)?M("",!0):(C(),Y(ae,{key:0,"empty-img":k(oe),title:"没有找到相关内容~","empty-class":"empty-select"},null,8,["empty-img"])),P("div",Ge,[c(i,{modelValue:k(v),"onUpdate:modelValue":s[3]||(s[3]=e=>N(v)?v.value=e:null),onRefresh:W},{default:D((()=>[c(o,{loading:k(n),"onUpdate:loading":s[2]||(s[2]=e=>N(n)?n.value=e:null),finished:k(p),"finished-text":k(A)?"- 已经到底了哦 -":"",onLoad:O},{default:D((()=>[(C(!0),y(b,null,w(k(h),(e=>(C(),Y(we,{key:e.id,"product-info":e,"error-msg":k(r).errorMsgMap[e.productCode],onClick:s=>R(e)},ee({_:2},[k(l)?{name:"checkedProduct",fn:D((()=>[P("div",Ye,[(C(),Y(a,{key:e.id,name:e.productCode,"model-value":k(r).selectProduct.includes(e.productCode),shape:"square",onChange:s=>((e,s)=>{e?r.selectedProductList.push(s):r.selectedProductList=r.selectedProductList.filter((e=>e.productCode!==s.productCode))})(s,e)},null,8,["name","model-value","onChange"]))])])),key:"0"}:void 0]),1032,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])]),k(l)&&k(V)?(C(),y("div",We,[P("div",Ze,[P("p",{class:"has-select",onClick:s[4]||(s[4]=e=>k(T)(!k(I)))},[F(" 已选"),P("span",Je,L(k(r).selectProduct.length),1),F("款产品 "),Ke]),c(m,{type:"primary",disabled:!k(r).selectProduct.length,onClick:G},{default:D((()=>[F("添加计划书")])),_:1},8,["disabled"])])])):M("",!0),c(ze,{"modal-value":k(r).selectProduct,"proposal-list":k(r).selectedProductList,"is-show":k(I),onClose:s[5]||(s[5]=e=>k(T)(!1)),onChecked:E},null,8,["modal-value","proposal-list","is-show"])])),_:1}),k(l)?M("",!0):(C(),Y(ie,{key:0,"button-image":k("/static/png/lishijihuashu-b6958e78.png"),onClick:B},null,8,["button-image"]))],64)}}}),[["__scopeId","data-v-cadde0d8"]]);export{Xe as default};
