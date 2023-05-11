import{aw as e,d as s,r as t,bZ as a,z as o,br as l,R as r,bs as d,i,aC as c,aE as n,bq as u,aI as p,$ as v,b_ as h,aL as m,G as g,an as f,c as C,A as y,f as P,g as k,E as L,U as b,V as w,k as x,a6 as _,L as I,a9 as S,a1 as V,b$ as T,o as j,F as $,h as M,w as U,c0 as D,a2 as F,j as N,bA as O,aQ as q,B,bF as H,al as A,am as z,bN as E,aU as R,bP as Y,e as G,bB as Q,bO as W,a as Z,u as J,ac as K,b as X,ao as ee,T as se}from"./index-5d242edc.js";import{L as te}from"./index-e8e2c786.js";import{S as ae}from"./index-e631794b.js";import{P as oe}from"./index-2469f3cc.js";import{e as le}from"./empty-c926d8ec.js";import{P as re,u as de}from"./ProductTips-815da132.js";import{q as ie,a as ce}from"./proposalList-73ec8600.js";import{P as ne}from"./index-38599b0e.js";import{c as ue}from"./trial-cefd3779.js";import"./pdfh5-008ca364.js";const[pe,ve,he]=e("pull-refresh"),me=["pulling","loosing","success"];const ge=m(s({name:pe,props:{disabled:Boolean,modelValue:Boolean,headHeight:c(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:n,successDuration:c(500),animationDuration:c(300)},emits:["change","refresh","update:modelValue"],setup(e,{emit:s,slots:c}){let n;const m=t(),g=t(),f=a(m),C=o({status:"normal",distance:0,duration:0}),y=l(),P=()=>{if(50!==e.headHeight)return{height:`${e.headHeight}px`}},k=()=>"loading"!==C.status&&"success"!==C.status&&!e.disabled,L=(t,a)=>{const o=+(e.pullDistance||e.headHeight);C.distance=t,C.status=a?"loading":0===t?"normal":t<o?"pulling":"loosing",s("change",{status:C.status,distance:t})},b=()=>{const{status:s}=C;return"normal"===s?"":e[`${s}Text`]||he(s)},w=()=>{const{status:e,distance:s}=C;if(c[e])return c[e]({distance:s});const t=[];return me.includes(e)&&t.push(i("div",{class:ve("text")},[b()])),"loading"===e&&t.push(i(u,{class:ve("loading")},{default:b})),t},x=e=>{n=0===h(f.value),n&&(C.duration=0,y.start(e))},_=e=>{k()&&x(e)},I=()=>{n&&y.deltaY.value&&k()&&(C.duration=+e.animationDuration,"loosing"===C.status?(L(+e.headHeight,!0),s("update:modelValue",!0),v((()=>s("refresh")))):L(0))};return r((()=>e.modelValue),(s=>{C.duration=+e.animationDuration,s?L(+e.headHeight,!0):c.success||e.successText?(C.status="success",setTimeout((()=>{L(0)}),+e.successDuration)):L(0,!1)})),d("touchmove",(s=>{if(k()){n||x(s);const{deltaY:t}=y;y.move(s),n&&t.value>=0&&y.isVertical()&&(p(s),L((s=>{const t=+(e.pullDistance||e.headHeight);return s>t&&(s=s<2*t?t+(s-t)/2:1.5*t+(s-2*t)/4),Math.round(s)})(t.value)))}}),{target:g}),()=>{var e;const s={transitionDuration:`${C.duration}ms`,transform:C.distance?`translate3d(0,${C.distance}px, 0)`:""};return i("div",{ref:m,class:ve()},[i("div",{ref:g,class:ve("track"),style:s,onTouchstartPassive:_,onTouchend:I,onTouchcancel:I},[i("div",{class:ve("head"),style:P()},[w()]),null==(e=c.default)?void 0:e.call(c)])])}}}));const fe={class:"com-product-item"},Ce={class:"content-wrap"},ye={class:"product-image"},Pe={class:"insure-name"},ke={class:"product-info"},Le={class:"title"},be={class:"description"},we={class:"tags"};var xe=g(s({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const s=e,{productInfo:t}=f(s),a=o({checked:!1});return f(a),(s,a)=>{var o,l,r,d,c;const n=_;return C(),y("div",fe,[P("div",Ce,[P("div",ye,[i(n,{src:(null==(o=k(t).showConfig)?void 0:o.fileThumbnailUrl)||(null==(l=k(t).showConfig)?void 0:l.fileUrl)},null,8,["src"]),P("p",Pe,L((k(t).insurerName||"").substring(0,6)),1)]),P("div",ke,[P("p",Le,L(null==(r=k(t).showConfig)?void 0:r.title),1),P("p",be,L(null==(d=k(t).showConfig)?void 0:d.text),1),P("p",we,[(C(!0),y(b,null,w(null==(c=k(t).showConfig)?void 0:c.tags,((e,s)=>(C(),y("span",{key:s,class:"tag"},L(e),1)))),128))])]),x(s.$slots,"checkedProduct",{},void 0,!0)]),i(re,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-d0dbf77c"]]);const _e=["xlink:href"],Ie=s({__name:"index",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const s=e,t=I((()=>`#icon-${s.name}`)),a=I((()=>s.name?`svg-icon icon-${s.name}`:"svg-icon"));return(s,o)=>(C(),y("svg",S({class:k(a)},s.$attrs,{style:{color:e.color}}),[P("use",{"xlink:href":k(t)},null,8,_e)],16))}});const Se=e=>(A("data-v-d36af93a"),e=e(),z(),e),Ve={class:"com-tab-filter"},Te={class:"article-mid"},je={class:"article-tag"},$e=["onClick"],Me=Se((()=>P("span",null,null,-1))),Ue={class:"popup-inner"},De=Se((()=>P("div",{class:"popup-title"},"保险公司",-1))),Fe={class:"footer-button"};var Ne=g(s({__name:"insureFilter",props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(e,{emit:s}){const{isPopShow:a,openPop:l,closePop:r}=function(e=!1){const s=t(e);return{isPopShow:s,openPop:e=>{e instanceof Function&&e(),s.value=!0},closePop:e=>{s.value=!1,e instanceof Function&&e()}}}(!1),d=o({insureList:[],checkedInsure:[],productCategoryList:[]}),{insureList:c,checkedInsure:n}=f(d),u=t(""),p=()=>{n.value=[]},v=()=>{var e;const{productCategoryId:t}=(null==(e=d.productCategoryList)?void 0:e[u.value])||{};s("onSelectInsure",{selectInsureCode:n.value,selectCategory:t}),r()};return V((()=>{T().then((e=>{const{code:s,data:t}=e;"10000"===s&&(c.value=null==t?void 0:t.map((e=>({label:e.abbreviation,value:e.insurerCode}))))}))})),j((()=>{ie().then((e=>{const{code:s,data:t}=e||{};"10000"===s&&q(t)&&(d.productCategoryList=[{productCategoryName:"全部",productCategoryId:""},...t])}))})),(t,o)=>{const h=B,m=H;return C(),y("div",Ve,[P("div",Te,[P("div",je,[(C(!0),y(b,null,w(k(d).productCategoryList,((e,t)=>(C(),y("div",{key:t,class:$(["tag-item",{checked:k(u)==t}]),onClick:a=>((e,t)=>{var a;u.value=t;const{productCategoryId:o}=(null==(a=d.productCategoryList)?void 0:a[u.value])||{};s("onSelectInsure",{selectInsureCode:n.value,selectCategory:o})})(null==e||e.productCategoryId,t)},[P("div",{class:$(["tag-out",{checked:k(u)==t}])},[P("div",{class:$(["tag-item-text",{checked:k(u)==t}])},L(e.productCategoryName),3)],2)],10,$e)))),128))]),e.filter?(C(),y("div",{key:0,class:"filter",onClick:o[0]||(o[0]=(...e)=>k(l)&&k(l)(...e))},[Me,P("div",{class:$(["text",{"has-select-condition":k(n).length>0}])},"筛选",2),i(Ie,{name:"filter"})])):M("",!0),i(m,{show:k(a),position:"right","close-on-click-overlay":"",teleport:"body",class:"proposal-list-filter-popup-wrap","overlay-style":{"z-index":5e3},style:O(e.popupStyle||{width:"322px",height:"100%",padding:"0 15px","z-index":5e3}),onClickOverlay:k(r)},{default:U((()=>[P("div",Ue,[De,i(D,{modelValue:k(n),"onUpdate:modelValue":o[1]||(o[1]=e=>F(n)?n.value=e:null),options:k(c)},null,8,["modelValue","options"])]),P("div",Fe,[i(h,{plain:"",type:"primary",onClick:p},{default:U((()=>[N("重置")])),_:1}),i(h,{type:"primary",onClick:v},{default:U((()=>[N("确定")])),_:1})])])),_:1},8,["show","style","onClickOverlay"])])])}}}),[["__scopeId","data-v-d36af93a"]]);const Oe={class:"com-trial-product-wrapper"},qe={class:"container"},Be=(e=>(A("data-v-49f70a68"),e=e(),z(),e))((()=>P("span",{class:"title"}," 已选产品 ",-1))),He={class:"popup-body"},Ae={class:"cell-title"},ze={class:"title"},Ee=s({name:"TrialProductPopup"});var Re=g(s({...Ee,props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(e,{emit:s}){const a=e,o=t([]),l=t([]),d=t({isShow:a.isShow}),c=()=>{s("close")},n=()=>{l.value=[],s("checked",[])},u=e=>{var t,a,r;null==(r=null==(a=null==(t=null==o?void 0:o.value)?void 0:t[e])?void 0:a.toggle)||r.call(a),s("checked",l.value)};return r((()=>a.isShow),(e=>{d.value.isShow=e})),r(l,((e=[])=>{s("update:modalValue",e)}),{deep:!0,immediate:!0}),r((()=>a.modalValue),((e=[])=>{l.value=e}),{deep:!0,immediate:!0}),(s,t)=>{const a=E,r=R,p=W,v=Y,h=H;return C(),y("div",Oe,[i(h,{show:k(d).isShow,"onUpdate:show":t[1]||(t[1]=e=>k(d).isShow=e),position:"bottom",onClose:c},{default:U((()=>[P("div",qe,[P("div",{class:"popup-header"},[P("span",{class:"clear-all",onClick:n}," 清空选项 "),Be,P("span",{class:"close",onClick:c})]),P("div",He,[i(v,{modelValue:k(l),"onUpdate:modelValue":t[0]||(t[0]=e=>F(l)?l.value=e:null)},{default:U((()=>[i(p,{inset:""},{default:U((()=>[(C(!0),y(b,null,w(e.proposalList,(e=>(C(),G(r,{key:e.productCode,title:e.productName,onClick:s=>u(e.productCode)},{"right-icon":U((()=>{var s;return[i(a,{ref_for:!0,ref:s=>k(o)[e.productCode]=s,shape:"square","model-value":null==(s=k(l))?void 0:s.includes(e.productCode),name:e.productCode,onClick:Q((s=>u(e.productCode)),["stop"])},null,8,["model-value","name","onClick"])]})),title:U((()=>[P("div",Ae,[P("div",ze,L(e.productName),1)])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-49f70a68"]]);const Ye={class:"search-wrap"},Ge={class:"page-proposal-list"},Qe={class:"check-button"},We={key:1,class:"van-sticky"},Ze={class:"add-plan"},Je={class:"has-select-product"},Ke=(e=>(A("data-v-f26c55f8"),e=e(),z(),e))((()=>P("span",{class:"icon"},null,-1))),Xe=s({name:"ProposalList"});var es=g(s({...Xe,props:{isCreateProposal:{type:Boolean,default:!0}},setup(e){const s=de(),t=Z(),a=J(),{isCreateProposal:l}=a.query,r=o({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[],firstLoading:!0}),{searchValue:d,tagLists:c,isOpen:n,loading:u,finished:p,refreshing:v,productList:h,selectProduct:m,insurerCodeList:g,showCategory:x,productTotal:_,showFooter:S}=f(r);K();const[V,T]=K(),$=()=>{const{excludeProductCodeList:e}=r;r.firstLoading&&(r.firstLoading=!1,se.loading("加载中...")),ce({title:d.value,insurerCodeList:g.value,showCategory:x.value,excludeProductCodeList:Array.isArray(e)?e:[],pageNum:1,pageSize:999}).then((e=>{const{code:s,data:t,total:a}=e;"10000"===s&&(h.value=null==t?void 0:t.datas,_.value=a)})).finally((()=>{se.clear()}))},D=e=>{$()},O=e=>{const{selectInsureCode:s,selectCategory:t}=e;g.value=s,x.value=t,$()},q=()=>{v.value&&(h.value=[],v.value=!1),$(),u.value=!1,_.value===h.value.length&&(p.value=!0)},H=()=>{t.push({path:"historyProposalList"})};I((()=>{var e;const{birthday:t,gender:a}=(null==(e=s.$state.proposalInfo.proposalInsuredList)?void 0:e[0])||{};return{birthday:t,gender:a}}));const A=I((()=>h.value.length>0)),z=({productCode:e})=>l?(r.productCode=e,r.selectProduct.includes(e)?(r.selectProduct=r.selectProduct.filter((s=>s!==e)),!1):void(async(e,t)=>{const{code:a,data:o,message:l}=await ue({...s.$state.insuredPersonVO,calcProductFactorList:[{productCode:e}]},{isCustomError:!0});"10000"===a?(r.errorMsgMap[e]="","function"==typeof t&&t(!0)):r.errorMsgMap[e]=l})(e,(()=>{r.selectProduct.push(e)}))):(t.push({path:"/proposal/createProposal",query:{productCode:e}}),!1),R=e=>{r.selectProduct=e,r.selectedProductList=r.selectedProductList.filter((s=>e.includes(s.productCode)))},Y=()=>{const e=r.proposalList.filter((e=>r.selectProduct.includes(e.proposalInsuredList[0].proposalInsuredProductList[0].productCode)));s.setTrialData(e),s.setSelectedProduct(r.selectProduct),t.back()},Q=()=>{p.value=!0,u.value=!0,q()};return j((()=>{r.excludeProductCodeList=s.$state.excludeProduct})),(e,s)=>{const t=ae,a=E,o=te,c=ge,m=B,g=X("ProPageWrap");return C(),y(b,null,[i(g,{class:"page-proposal"},{default:U((()=>[P("div",Ye,[i(t,{modelValue:k(d),"onUpdate:modelValue":s[0]||(s[0]=e=>F(d)?d.value=e:null),placeholder:"搜索计划书",shape:"round",class:"search",onSearch:D},null,8,["modelValue"]),i(Ne,{filter:k(n),"onUpdate:filter":s[1]||(s[1]=e=>F(n)?n.value=e:null),"filter-class":"filter-area",onOnSelectInsure:O},null,8,["filter"])]),k(A)?M("",!0):(C(),G(oe,{key:0,"empty-img":k(le),title:"没有找到相关内容~","empty-class":"empty-select"},null,8,["empty-img"])),P("div",Ge,[i(c,{modelValue:k(v),"onUpdate:modelValue":s[3]||(s[3]=e=>F(v)?v.value=e:null),onRefresh:Q},{default:U((()=>[i(o,{loading:k(u),"onUpdate:loading":s[2]||(s[2]=e=>F(u)?u.value=e:null),finished:k(p),"finished-text":k(A)?"- 已经到底了哦 -":"",onLoad:q},{default:U((()=>[(C(!0),y(b,null,w(k(h),(e=>(C(),G(xe,{key:e.id,"product-info":e,"error-msg":k(r).errorMsgMap[e.productCode],onClick:s=>z(e)},ee({_:2},[k(l)?{name:"checkedProduct",fn:U((()=>[P("div",Qe,[(C(),G(a,{key:e.id,name:e.productCode,"model-value":k(r).selectProduct.includes(e.productCode),shape:"square",onChange:s=>((e,s)=>{e?r.selectedProductList.push(s):r.selectedProductList=r.selectedProductList.filter((e=>e.productCode!==s.productCode))})(s,e)},null,8,["name","model-value","onChange"]))])])),key:"0"}:void 0]),1032,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])]),k(l)&&k(S)?(C(),y("div",We,[P("div",Ze,[P("p",{class:"has-select",onClick:s[4]||(s[4]=e=>k(T)(!k(V)))},[N(" 已选"),P("span",Je,L(k(r).selectProduct.length),1),N("款产品 "),Ke]),i(m,{type:"primary",disabled:!k(r).selectProduct.length,onClick:Y},{default:U((()=>[N("添加计划书")])),_:1},8,["disabled"])])])):M("",!0),i(Re,{"modal-value":k(r).selectProduct,"proposal-list":k(r).selectedProductList,"is-show":k(V),onClose:s[5]||(s[5]=e=>k(T)(!1)),onChecked:R},null,8,["modal-value","proposal-list","is-show"])])),_:1}),k(l)?M("",!0):(C(),G(ne,{key:0,"button-image":k("/static/png/lishijihuashu-b6958e78.png"),onClick:H},null,8,["button-image"]))],64)}}}),[["__scopeId","data-v-f26c55f8"]]);export{es as default};
