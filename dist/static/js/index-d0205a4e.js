import{aA as e,d as a,r as s,bT as t,x as o,bi as l,Q as r,bj as n,i,aF as c,aH as u,bh as d,aL as p,Z as h,bU as v,aO as m,E as g,ai as f,c as C,y,f as k,g as b,z as P,R as w,U as L,k as _,h as x,a4 as V,K as S,aw as I,a0 as T,bV as j,o as M,A as U,w as D,bW as H,a1 as $,j as F,br as q,at as N,B as O,by as B,ag as A,ah as z,bF as R,av as W,bH as Y,e as E,bs as G,bG as K,a6 as Q,a as Z,u as J,b as X,aj as ee}from"./index-14b87a0a.js";import{L as ae}from"./index-422bf66c.js";import{S as se,P as te}from"./index-d42cff27.js";import{e as oe}from"./empty-c926d8ec.js";import{q as le,a as re}from"./proposalList-ca0c55c2.js";import{u as ne}from"./createProposal-172e86a4.js";import{P as ie}from"./index-aa5117f3.js";import{a as ce}from"./trial-98bfde99.js";import"./pdfh5-008ca364.js";const[ue,de,pe]=e("pull-refresh"),he=["pulling","loosing","success"];const ve=m(a({name:ue,props:{disabled:Boolean,modelValue:Boolean,headHeight:c(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:u,successDuration:c(500),animationDuration:c(300)},emits:["change","refresh","update:modelValue"],setup(e,{emit:a,slots:c}){let u;const m=s(),g=s(),f=t(m),C=o({status:"normal",distance:0,duration:0}),y=l(),k=()=>{if(50!==e.headHeight)return{height:`${e.headHeight}px`}},b=()=>"loading"!==C.status&&"success"!==C.status&&!e.disabled,P=(s,t)=>{const o=+(e.pullDistance||e.headHeight);C.distance=s,C.status=t?"loading":0===s?"normal":s<o?"pulling":"loosing",a("change",{status:C.status,distance:s})},w=()=>{const{status:a}=C;return"normal"===a?"":e[`${a}Text`]||pe(a)},L=()=>{const{status:e,distance:a}=C;if(c[e])return c[e]({distance:a});const s=[];return he.includes(e)&&s.push(i("div",{class:de("text")},[w()])),"loading"===e&&s.push(i(d,{class:de("loading")},{default:w})),s},_=e=>{u=0===v(f.value),u&&(C.duration=0,y.start(e))},x=e=>{b()&&_(e)},V=()=>{u&&y.deltaY.value&&b()&&(C.duration=+e.animationDuration,"loosing"===C.status?(P(+e.headHeight,!0),a("update:modelValue",!0),h((()=>a("refresh")))):P(0))};return r((()=>e.modelValue),(a=>{C.duration=+e.animationDuration,a?P(+e.headHeight,!0):c.success||e.successText?(C.status="success",setTimeout((()=>{P(0)}),+e.successDuration)):P(0,!1)})),n("touchmove",(a=>{if(b()){u||_(a);const{deltaY:s}=y;y.move(a),u&&s.value>=0&&y.isVertical()&&(p(a),P((a=>{const s=+(e.pullDistance||e.headHeight);return a>s&&(a=a<2*s?s+(a-s)/2:1.5*s+(a-2*s)/4),Math.round(a)})(s.value)))}}),{target:g}),()=>{var e;const a={transitionDuration:`${C.duration}ms`,transform:C.distance?`translate3d(0,${C.distance}px, 0)`:""};return i("div",{ref:m,class:de()},[i("div",{ref:g,class:de("track"),style:a,onTouchstartPassive:x,onTouchend:V,onTouchcancel:V},[i("div",{class:de("head"),style:k()},[L()]),null==(e=c.default)?void 0:e.call(c)])])}}}));const me={class:"com-product-item"},ge={class:"content-wrap"},fe={class:"product-image"},Ce={class:"insure-name"},ye={class:"product-info"},ke={class:"title"},be={class:"description"},Pe={class:"tags"},we={key:0,class:"product-tips"};var Le=g(a({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:null},setup(e){const a=e,{productInfo:s}=f(a),t=o({checked:!1});return f(t),(a,t)=>{var o,l,r,n;const c=V;return C(),y("div",me,[k("div",ge,[k("div",fe,[i(c,{src:null==(o=b(s).showConfig)?void 0:o.fileUrl},null,8,["src"]),k("p",Ce,P((b(s).insurerName||"").substring(0,6)),1)]),k("div",ye,[k("p",ke,P(null==(l=b(s).showConfig)?void 0:l.title),1),k("p",be,P(null==(r=b(s).showConfig)?void 0:r.text),1),k("p",Pe,[(C(!0),y(w,null,L(null==(n=b(s).showConfig)?void 0:n.tags,((e,a)=>(C(),y("span",{key:a,class:"tag"},P(e),1)))),128))])]),_(a.$slots,"checkedProduct",{},void 0,!0)]),e.errorMsg?(C(),y("span",we,P(e.errorMsg),1)):x("",!0)])}}}),[["__scopeId","data-v-001656b6"]]);const _e=["xlink:href"],xe=a({__name:"index",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const a=e,s=S((()=>`#icon-${a.name}`)),t=S((()=>a.name?`svg-icon icon-${a.name}`:"svg-icon"));return(a,o)=>(C(),y("svg",I({class:b(t)},a.$attrs,{style:{color:e.color}}),[k("use",{"xlink:href":b(s)},null,8,_e)],16))}});const Ve=e=>(A("data-v-72eaf171"),e=e(),z(),e),Se={class:"com-tab-filter"},Ie={class:"article-mid"},Te={class:"article-tag"},je=["onClick"],Me=Ve((()=>k("span",null,null,-1))),Ue={class:"popup-inner"},De=Ve((()=>k("div",{class:"popup-title"},"保险公司",-1))),He={class:"footer-button"};var $e=g(a({__name:"insureFilter",props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(e,{emit:a}){const{isPopShow:t,openPop:l,closePop:r}=function(e=!1){const a=s(e);return{isPopShow:a,openPop:e=>{e instanceof Function&&e(),a.value=!0},closePop:e=>{a.value=!1,e instanceof Function&&e()}}}(!1),n=o({insureList:[],checkedInsure:[],productCategoryList:[]}),{insureList:c,checkedInsure:u}=f(n),d=s(""),p=()=>{u.value=[]},h=()=>{a("onSelectInsure",{selectInsureCode:u.value,selectCategory:d.value}),r()};return T((()=>{j().then((e=>{const{code:a,data:s}=e;"10000"===a&&(c.value=null==s?void 0:s.map((e=>({label:e.abbreviation,value:e.insurerCode}))))}))})),M((()=>{le().then((e=>{const{code:a,data:s}=e||{};"10000"===a&&N(s)&&(n.productCategoryList=[{productCategoryName:"全部",productCategoryId:""},...s])}))})),(s,o)=>{const v=O,m=B;return C(),y("div",Se,[k("div",Ie,[k("div",Te,[(C(!0),y(w,null,L(b(n).productCategoryList,((e,s)=>(C(),y("div",{key:s,class:U(["tag-item",{checked:b(d)==s}]),onClick:t=>((e,s)=>{d.value=s,a("onSelectInsure",{selectInsureCode:u.value,selectCategory:d.value})})(null==e||e.productCategoryId,s)},[k("div",{class:U(["tag-out",{checked:b(d)==s}])},[k("div",{class:U(["tag-item-text",{checked:b(d)==s}])},P(e.productCategoryName),3)],2)],10,je)))),128))]),e.filter?(C(),y("div",{key:0,class:"filter",onClick:o[0]||(o[0]=(...e)=>b(l)&&b(l)(...e))},[Me,k("div",{class:U(["text",{"has-select-condition":b(u).length>0}])},"筛选",2),i(xe,{name:"filter"})])):x("",!0),i(m,{show:b(t),position:"right","close-on-click-overlay":"",style:q(e.popupStyle||{width:"322px",height:"100%",padding:"0 15px"}),onClickOverlay:b(r)},{default:D((()=>[k("div",Ue,[De,i(H,{modelValue:b(u),"onUpdate:modelValue":o[1]||(o[1]=e=>$(u)?u.value=e:null),options:b(c)},null,8,["modelValue","options"])]),k("div",He,[i(v,{plain:"",type:"primary",onClick:p},{default:D((()=>[F("重置")])),_:1}),i(v,{type:"primary",onClick:h},{default:D((()=>[F("确定")])),_:1})])])),_:1},8,["show","style","onClickOverlay"])])])}}}),[["__scopeId","data-v-72eaf171"]]);const Fe={class:"com-trial-product-wrapper"},qe={class:"container"},Ne=(e=>(A("data-v-73270e0c"),e=e(),z(),e))((()=>k("span",{class:"title"}," 已选产品 ",-1))),Oe={class:"popup-body"},Be={class:"cell-title"},Ae={class:"title"},ze=a({name:"TrialProductPopup"});var Re=g(a({...ze,props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(e,{emit:a}){const t=e,o=s([]),l=s([]),n=s({isShow:t.isShow}),c=()=>{a("close")},u=()=>{l.value=[],a("checked",[])},d=e=>{var s,t,r;null==(r=null==(t=null==(s=null==o?void 0:o.value)?void 0:s[e])?void 0:t.toggle)||r.call(t),a("checked",l.value)};return r((()=>t.isShow),(e=>{n.value.isShow=e})),r((()=>t.modalValue),((e=[])=>{l.value=e}),{deep:!0,immediate:!0}),(a,s)=>{const t=R,r=W,p=K,h=Y,v=B;return C(),y("div",Fe,[i(v,{show:b(n).isShow,"onUpdate:show":s[1]||(s[1]=e=>b(n).isShow=e),position:"bottom",onClose:c},{default:D((()=>[k("div",qe,[k("div",{class:"popup-header"},[k("span",{class:"clear-all",onClick:u}," 清空选项 "),Ne,k("span",{class:"close",onClick:c})]),k("div",Oe,[i(h,{modelValue:b(l),"onUpdate:modelValue":s[0]||(s[0]=e=>$(l)?l.value=e:null)},{default:D((()=>[i(p,{inset:""},{default:D((()=>[(C(!0),y(w,null,L(e.proposalList,(e=>(C(),E(r,{key:e.productCode,title:e.productName,onClick:a=>d(e.productCode)},{"right-icon":D((()=>[i(t,{ref_for:!0,ref:a=>b(o)[e.productCode]=a,shape:"square",name:e.productCode,onClick:G((a=>d(e.productCode)),["stop"])},null,8,["name","onClick"])])),title:D((()=>[k("div",Be,[k("div",Ae,P(e.productName),1)])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-73270e0c"]]);const We={class:"search-wrap"},Ye={class:"page-proposal-list"},Ee={class:"check-button"},Ge={key:1,class:"van-sticky"},Ke={class:"add-plan"},Qe={class:"has-select-product"},Ze=(e=>(A("data-v-344b1617"),e=e(),z(),e))((()=>k("span",{class:"icon"},null,-1))),Je=a({name:"ProposalList"});var Xe=g(a({...Je,props:{isCreateProposal:{type:Boolean,default:!0}},setup(e){const a=o({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",productCodeList:[],errorMsgMap:{}}),{searchValue:t,tagLists:l,isOpen:r,loading:n,finished:c,refreshing:u,productList:d,selectProduct:p,insurerCodeList:h,showCategory:v,productTotal:m,showFooter:g}=f(a);Q();const[_,V]=Q(),I=ne(),T=Z(),j=J(),{isCreateProposal:M,productCode:U,productCodeList:H=[]}=j.query;s(M?"repeatAdd":"add");const q=()=>{re({title:t.value,insurerCodeList:h.value,showCategory:v.value,excludeProductCodeList:H,pageNum:1,pageSize:999}).then((e=>{const{code:a,data:s,total:t}=e;"10000"===a&&(d.value=null==s?void 0:s.datas,m.value=t)}))},N=e=>{q()},B=e=>{const{selectInsureCode:a,selectCategory:s}=e;h.value=a,v.value=s,q()},A=()=>{u.value&&(d.value=[],u.value=!1),q(),n.value=!1,m.value===d.value.length&&(c.value=!0)},z=()=>{T.push({path:"historyProposalList"})};S((()=>{var e;const{birthday:a,gender:s}=(null==(e=I.$state.proposalInfo.proposalInsuredList)?void 0:e[0])||{};return{birthday:a,gender:s}}));const W=S((()=>d.value.length>0)),Y=S((()=>d.value.filter((e=>a.selectProduct.includes(e.productCode))))),G=({productCode:e})=>{M||T.push({path:"/proposal/createProposal",query:{productCode:e}}),a.productCode=e,a.selectProduct.includes(e)?a.selectProduct=a.selectProduct.filter((a=>a!==e)):(async(e,s)=>{const{code:t,data:o,message:l}=await ce({calcProductFactorList:[{productCode:e}]});"10000"===t?(a.errorMsgMap[e]="","function"==typeof s&&s(!0)):a.errorMsgMap[e]=l})(e,(()=>{a.selectProduct.push(e)}))},K=e=>{a.selectProduct=e},le=()=>{const e=a.proposalList.filter((e=>a.selectProduct.includes(e.proposalInsuredList[0].proposalInsuredProductList[0].productCode)));I.setTrialData(e),T.replace({path:"/proposal/createProposal",query:{productCode:U,selectProduct:a.selectProduct}})},ue=()=>{c.value=!0,n.value=!0,A()};return(e,s)=>{const o=se,l=R,h=ae,v=ve,m=O,f=X("ProPageWrap");return C(),y(w,null,[i(f,{class:"page-proposal"},{default:D((()=>[k("div",We,[i(o,{modelValue:b(t),"onUpdate:modelValue":s[0]||(s[0]=e=>$(t)?t.value=e:null),placeholder:"搜索计划书",shape:"round",class:"search",onSearch:N},null,8,["modelValue"]),i($e,{filter:b(r),"onUpdate:filter":s[1]||(s[1]=e=>$(r)?r.value=e:null),"filter-class":"filter-area",onOnSelectInsure:B},null,8,["filter"])]),b(W)?x("",!0):(C(),E(te,{key:0,"empty-img":b(oe),title:"没有找到相关内容~","empty-class":"empty-select"},null,8,["empty-img"])),k("div",Ye,[i(v,{modelValue:b(u),"onUpdate:modelValue":s[3]||(s[3]=e=>$(u)?u.value=e:null),onRefresh:ue},{default:D((()=>[i(h,{loading:b(n),"onUpdate:loading":s[2]||(s[2]=e=>$(n)?n.value=e:null),finished:b(c),"finished-text":b(W)?"- 已经到底了哦 -":"",onLoad:A},{default:D((()=>[(C(!0),y(w,null,L(b(d),(e=>(C(),E(Le,{key:e.id,"product-info":e,"error-msg":b(a).errorMsgMap[e.productCode],onClick:a=>G(e)},ee({_:2},[b(M)?{name:"checkedProduct",fn:D((()=>[k("div",Ee,[i(l,{name:e.productCode,"model-value":b(p).includes(e.productCode),shape:"square"},null,8,["name","model-value"])])])),key:"0"}:void 0]),1032,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])]),b(M)&&b(g)?(C(),y("div",Ge,[k("div",Ke,[k("p",{class:"has-select",onClick:s[4]||(s[4]=e=>b(V)(!b(_)))},[F(" 已选"),k("span",Qe,P(b(p).length),1),F("款产品 "),Ze]),i(m,{type:"primary",disabled:!b(p).length,onClick:le},{default:D((()=>[F("添加计划书")])),_:1},8,["disabled"])])])):x("",!0),i(Re,{modelValue:b(p),"onUpdate:modelValue":s[5]||(s[5]=e=>$(p)?p.value=e:null),"proposal-list":b(Y),"is-show":b(_),onClose:s[6]||(s[6]=e=>b(V)(!1)),onChecked:K},null,8,["modelValue","proposal-list","is-show"])])),_:1}),b(M)?x("",!0):(C(),E(ie,{key:0,"button-image":b("/static/png/lishijihuashu-b6958e78.png"),onClick:z},null,8,["button-image"]))],64)}}}),[["__scopeId","data-v-344b1617"]]);export{Xe as default};
