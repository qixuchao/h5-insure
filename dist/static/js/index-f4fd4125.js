import{aG as e,d as a,r as s,bX as t,z as o,bl as l,R as r,bm as c,i as d,aL as i,aN as n,bk as u,aR as p,$ as v,bY as m,aU as h,G as g,an as f,c as C,A as y,f as k,g as P,E as b,U as L,V as w,k as x,a6 as _,L as V,a9 as S,a1 as I,bZ as T,o as j,F as $,h as M,w as D,b_ as U,a2 as N,j as O,bu as q,aA as B,B as F,bB as H,al as A,am as R,bJ as Y,aC as z,bL as G,e as E,bv as J,bK as K,a as W,u as X,ab as Z,bq as Q,b as ee,ao as ae}from"./index-a6d2417f.js";import{L as se}from"./index-c1d0ea3c.js";import{S as te}from"./index-31eb19fa.js";import{P as oe}from"./index-4cdfc0a2.js";import{e as le}from"./empty-c926d8ec.js";import{P as re,u as ce}from"./ProductTips-289bf435.js";import{q as de,a as ie}from"./proposalList-3daa0dae.js";import{P as ne}from"./index-6077f2c9.js";import{a as ue}from"./trial-c2b3eb15.js";import"./pdfh5-008ca364.js";const[pe,ve,me]=e("pull-refresh"),he=["pulling","loosing","success"];const ge=h(a({name:pe,props:{disabled:Boolean,modelValue:Boolean,headHeight:i(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:n,successDuration:i(500),animationDuration:i(300)},emits:["change","refresh","update:modelValue"],setup(e,{emit:a,slots:i}){let n;const h=s(),g=s(),f=t(h),C=o({status:"normal",distance:0,duration:0}),y=l(),k=()=>{if(50!==e.headHeight)return{height:`${e.headHeight}px`}},P=()=>"loading"!==C.status&&"success"!==C.status&&!e.disabled,b=(s,t)=>{const o=+(e.pullDistance||e.headHeight);C.distance=s,C.status=t?"loading":0===s?"normal":s<o?"pulling":"loosing",a("change",{status:C.status,distance:s})},L=()=>{const{status:a}=C;return"normal"===a?"":e[`${a}Text`]||me(a)},w=()=>{const{status:e,distance:a}=C;if(i[e])return i[e]({distance:a});const s=[];return he.includes(e)&&s.push(d("div",{class:ve("text")},[L()])),"loading"===e&&s.push(d(u,{class:ve("loading")},{default:L})),s},x=e=>{n=0===m(f.value),n&&(C.duration=0,y.start(e))},_=e=>{P()&&x(e)},V=()=>{n&&y.deltaY.value&&P()&&(C.duration=+e.animationDuration,"loosing"===C.status?(b(+e.headHeight,!0),a("update:modelValue",!0),v((()=>a("refresh")))):b(0))};return r((()=>e.modelValue),(a=>{C.duration=+e.animationDuration,a?b(+e.headHeight,!0):i.success||e.successText?(C.status="success",setTimeout((()=>{b(0)}),+e.successDuration)):b(0,!1)})),c("touchmove",(a=>{if(P()){n||x(a);const{deltaY:s}=y;y.move(a),n&&s.value>=0&&y.isVertical()&&(p(a),b((a=>{const s=+(e.pullDistance||e.headHeight);return a>s&&(a=a<2*s?s+(a-s)/2:1.5*s+(a-2*s)/4),Math.round(a)})(s.value)))}}),{target:g}),()=>{var e;const a={transitionDuration:`${C.duration}ms`,transform:C.distance?`translate3d(0,${C.distance}px, 0)`:""};return d("div",{ref:h,class:ve()},[d("div",{ref:g,class:ve("track"),style:a,onTouchstartPassive:_,onTouchend:V,onTouchcancel:V},[d("div",{class:ve("head"),style:k()},[w()]),null==(e=i.default)?void 0:e.call(i)])])}}}));const fe={class:"com-product-item"},Ce={class:"content-wrap"},ye={class:"product-image"},ke={class:"insure-name"},Pe={class:"product-info"},be={class:"title"},Le={class:"description"},we={class:"tags"};var xe=g(a({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const a=e,{productInfo:s}=f(a),t=o({checked:!1});return f(t),(a,t)=>{var o,l,r,c;const i=_;return C(),y("div",fe,[k("div",Ce,[k("div",ye,[d(i,{src:null==(o=P(s).showConfig)?void 0:o.fileUrl},null,8,["src"]),k("p",ke,b((P(s).insurerName||"").substring(0,6)),1)]),k("div",Pe,[k("p",be,b(null==(l=P(s).showConfig)?void 0:l.title),1),k("p",Le,b(null==(r=P(s).showConfig)?void 0:r.text),1),k("p",we,[(C(!0),y(L,null,w(null==(c=P(s).showConfig)?void 0:c.tags,((e,a)=>(C(),y("span",{key:a,class:"tag"},b(e),1)))),128))])]),x(a.$slots,"checkedProduct",{},void 0,!0)]),d(re,{"error-msg":e.errorMsg},null,8,["error-msg"])])}}}),[["__scopeId","data-v-2817dd39"]]);const _e=["xlink:href"],Ve=a({__name:"index",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const a=e,s=V((()=>`#icon-${a.name}`)),t=V((()=>a.name?`svg-icon icon-${a.name}`:"svg-icon"));return(a,o)=>(C(),y("svg",S({class:P(t)},a.$attrs,{style:{color:e.color}}),[k("use",{"xlink:href":P(s)},null,8,_e)],16))}});const Se=e=>(A("data-v-72eaf171"),e=e(),R(),e),Ie={class:"com-tab-filter"},Te={class:"article-mid"},je={class:"article-tag"},$e=["onClick"],Me=Se((()=>k("span",null,null,-1))),De={class:"popup-inner"},Ue=Se((()=>k("div",{class:"popup-title"},"保险公司",-1))),Ne={class:"footer-button"};var Oe=g(a({__name:"insureFilter",props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(e,{emit:a}){const{isPopShow:t,openPop:l,closePop:r}=function(e=!1){const a=s(e);return{isPopShow:a,openPop:e=>{e instanceof Function&&e(),a.value=!0},closePop:e=>{a.value=!1,e instanceof Function&&e()}}}(!1),c=o({insureList:[],checkedInsure:[],productCategoryList:[]}),{insureList:i,checkedInsure:n}=f(c),u=s(""),p=()=>{n.value=[]},v=()=>{a("onSelectInsure",{selectInsureCode:n.value,selectCategory:u.value}),r()};return I((()=>{T().then((e=>{const{code:a,data:s}=e;"10000"===a&&(i.value=null==s?void 0:s.map((e=>({label:e.abbreviation,value:e.insurerCode}))))}))})),j((()=>{de().then((e=>{const{code:a,data:s}=e||{};"10000"===a&&B(s)&&(c.productCategoryList=[{productCategoryName:"全部",productCategoryId:""},...s])}))})),(s,o)=>{const m=F,h=H;return C(),y("div",Ie,[k("div",Te,[k("div",je,[(C(!0),y(L,null,w(P(c).productCategoryList,((e,s)=>(C(),y("div",{key:s,class:$(["tag-item",{checked:P(u)==s}]),onClick:t=>((e,s)=>{u.value=s,a("onSelectInsure",{selectInsureCode:n.value,selectCategory:u.value})})(null==e||e.productCategoryId,s)},[k("div",{class:$(["tag-out",{checked:P(u)==s}])},[k("div",{class:$(["tag-item-text",{checked:P(u)==s}])},b(e.productCategoryName),3)],2)],10,$e)))),128))]),e.filter?(C(),y("div",{key:0,class:"filter",onClick:o[0]||(o[0]=(...e)=>P(l)&&P(l)(...e))},[Me,k("div",{class:$(["text",{"has-select-condition":P(n).length>0}])},"筛选",2),d(Ve,{name:"filter"})])):M("",!0),d(h,{show:P(t),position:"right","close-on-click-overlay":"",style:q(e.popupStyle||{width:"322px",height:"100%",padding:"0 15px"}),onClickOverlay:P(r)},{default:D((()=>[k("div",De,[Ue,d(U,{modelValue:P(n),"onUpdate:modelValue":o[1]||(o[1]=e=>N(n)?n.value=e:null),options:P(i)},null,8,["modelValue","options"])]),k("div",Ne,[d(m,{plain:"",type:"primary",onClick:p},{default:D((()=>[O("重置")])),_:1}),d(m,{type:"primary",onClick:v},{default:D((()=>[O("确定")])),_:1})])])),_:1},8,["show","style","onClickOverlay"])])])}}}),[["__scopeId","data-v-72eaf171"]]);const qe={class:"com-trial-product-wrapper"},Be={class:"container"},Fe=(e=>(A("data-v-49f70a68"),e=e(),R(),e))((()=>k("span",{class:"title"}," 已选产品 ",-1))),He={class:"popup-body"},Ae={class:"cell-title"},Re={class:"title"},Ye=a({name:"TrialProductPopup"});var ze=g(a({...Ye,props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(e,{emit:a}){const t=e,o=s([]),l=s([]),c=s({isShow:t.isShow}),i=()=>{a("close")},n=()=>{l.value=[],a("checked",[])},u=e=>{var s,t,r;null==(r=null==(t=null==(s=null==o?void 0:o.value)?void 0:s[e])?void 0:t.toggle)||r.call(t),a("checked",l.value)};return r((()=>t.isShow),(e=>{c.value.isShow=e})),r(l,((e=[])=>{a("update:modalValue",e)}),{deep:!0,immediate:!0}),r((()=>t.modalValue),((e=[])=>{l.value=e}),{deep:!0,immediate:!0}),(a,s)=>{const t=Y,r=z,p=K,v=G,m=H;return C(),y("div",qe,[d(m,{show:P(c).isShow,"onUpdate:show":s[1]||(s[1]=e=>P(c).isShow=e),position:"bottom",onClose:i},{default:D((()=>[k("div",Be,[k("div",{class:"popup-header"},[k("span",{class:"clear-all",onClick:n}," 清空选项 "),Fe,k("span",{class:"close",onClick:i})]),k("div",He,[d(v,{modelValue:P(l),"onUpdate:modelValue":s[0]||(s[0]=e=>N(l)?l.value=e:null)},{default:D((()=>[d(p,{inset:""},{default:D((()=>[(C(!0),y(L,null,w(e.proposalList,(e=>(C(),E(r,{key:e.productCode,title:e.productName,onClick:a=>u(e.productCode)},{"right-icon":D((()=>{var a;return[d(t,{ref_for:!0,ref:a=>P(o)[e.productCode]=a,shape:"square","model-value":null==(a=P(l))?void 0:a.includes(e.productCode),name:e.productCode,onClick:J((a=>u(e.productCode)),["stop"])},null,8,["model-value","name","onClick"])]})),title:D((()=>[k("div",Ae,[k("div",Re,b(e.productName),1)])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-49f70a68"]]);const Ge={class:"search-wrap"},Ee={class:"page-proposal-list"},Je={class:"check-button"},Ke={key:1,class:"van-sticky"},We={class:"add-plan"},Xe={class:"has-select-product"},Ze=(e=>(A("data-v-1e61c8ba"),e=e(),R(),e))((()=>k("span",{class:"icon"},null,-1))),Qe=a({name:"ProposalList"});var ea=g(a({...Qe,props:{isCreateProposal:{type:Boolean,default:!0}},setup(e){const a=ce(),s=W(),t=X(),{isCreateProposal:l}=t.query,r=o({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1}),{searchValue:c,tagLists:i,isOpen:n,loading:u,finished:p,refreshing:v,productList:m,selectProduct:h,insurerCodeList:g,showCategory:x,productTotal:_,showFooter:S}=f(r);Z();const[T,$]=Z(),U=()=>{const{excludeProductCodeList:e}=r;ie({title:c.value,insurerCodeList:g.value,showCategory:x.value,excludeProductCodeList:Array.isArray(e)?e:[],pageNum:1,pageSize:999}).then((e=>{const{code:a,data:s,total:t}=e;"10000"===a&&(m.value=null==s?void 0:s.datas,_.value=t)}))},q=e=>{U()},B=e=>{const{selectInsureCode:a,selectCategory:s}=e;g.value=a,x.value=s,U()},H=()=>{v.value&&(m.value=[],v.value=!1),U(),u.value=!1,_.value===m.value.length&&(p.value=!0)},A=()=>{s.push({path:"historyProposalList"})};V((()=>{var e;const{birthday:s,gender:t}=(null==(e=a.$state.proposalInfo.proposalInsuredList)?void 0:e[0])||{};return{birthday:s,gender:t}}));const R=V((()=>m.value.length>0)),z=V((()=>m.value.filter((e=>r.selectProduct.includes(e.productCode))))),G=({productCode:e})=>l?(r.productCode=e,r.selectProduct.includes(e)?(r.selectProduct=r.selectProduct.filter((a=>a!==e)),!1):void(async(e,s)=>{console.log(11111,a.$state);const{code:t,data:o,message:l}=await ue({...a.$state.insuredPersonVO,calcProductFactorList:[{productCode:e}]});"10000"===t?(r.errorMsgMap[e]="","function"==typeof s&&s(!0)):r.errorMsgMap[e]=l})(e,(()=>{r.selectProduct.push(e)}))):(a.setInsuredPersonVO({}),s.push({path:"/proposal/createProposal",query:{productCode:e}}),!1),J=e=>{r.selectProduct=e},K=()=>{const e=r.proposalList.filter((e=>r.selectProduct.includes(e.proposalInsuredList[0].proposalInsuredProductList[0].productCode)));a.setTrialData(e),a.setSelectedProduct(r.selectProduct),s.back()},re=()=>{p.value=!0,u.value=!0,H()};return j((()=>{r.excludeProductCodeList=a.$state.excludeProduct})),Q((()=>{r.selectProduct=[],r.excludeProductCodeList=[],re()})),I((()=>{})),(e,a)=>{const s=te,t=Y,o=se,i=ge,h=F,g=ee("ProPageWrap");return C(),y(L,null,[d(g,{class:"page-proposal"},{default:D((()=>[k("div",Ge,[d(s,{modelValue:P(c),"onUpdate:modelValue":a[0]||(a[0]=e=>N(c)?c.value=e:null),placeholder:"搜索计划书",shape:"round",class:"search",onSearch:q},null,8,["modelValue"]),d(Oe,{filter:P(n),"onUpdate:filter":a[1]||(a[1]=e=>N(n)?n.value=e:null),"filter-class":"filter-area",onOnSelectInsure:B},null,8,["filter"])]),P(R)?M("",!0):(C(),E(oe,{key:0,"empty-img":P(le),title:"没有找到相关内容~","empty-class":"empty-select"},null,8,["empty-img"])),k("div",Ee,[d(i,{modelValue:P(v),"onUpdate:modelValue":a[3]||(a[3]=e=>N(v)?v.value=e:null),onRefresh:re},{default:D((()=>[d(o,{loading:P(u),"onUpdate:loading":a[2]||(a[2]=e=>N(u)?u.value=e:null),finished:P(p),"finished-text":P(R)?"- 已经到底了哦 -":"",onLoad:H},{default:D((()=>[(C(!0),y(L,null,w(P(m),(e=>(C(),E(xe,{key:e.id,"product-info":e,"error-msg":P(r).errorMsgMap[e.productCode],onClick:a=>G(e)},ae({_:2},[P(l)?{name:"checkedProduct",fn:D((()=>[k("div",Je,[(C(),E(t,{key:e.id,name:e.productCode,"model-value":P(r).selectProduct.includes(e.productCode),shape:"square"},null,8,["name","model-value"]))])])),key:"0"}:void 0]),1032,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])]),P(l)&&P(S)?(C(),y("div",Ke,[k("div",We,[k("p",{class:"has-select",onClick:a[4]||(a[4]=e=>P($)(!P(T)))},[O(" 已选"),k("span",Xe,b(P(r).selectProduct.length),1),O("款产品 "),Ze]),d(h,{type:"primary",disabled:!P(r).selectProduct.length,onClick:K},{default:D((()=>[O("添加计划书")])),_:1},8,["disabled"])])])):M("",!0),d(ze,{"modal-value":P(r).selectProduct,"proposal-list":P(z),"is-show":P(T),onClose:a[5]||(a[5]=e=>P($)(!1)),onChecked:J},null,8,["modal-value","proposal-list","is-show"])])),_:1}),P(l)?M("",!0):(C(),E(ne,{key:0,"button-image":P("/static/png/lishijihuashu-b6958e78.png"),onClick:A},null,8,["button-image"]))],64)}}}),[["__scopeId","data-v-1e61c8ba"]]);export{ea as default};
