import{aw as e,d as s,r as a,bl as t,J as l,bm as o,an as i,bn as n,f as r,bc as u,az as d,aB as c,bg as p,b6 as h,bo as v,aC as m,_ as f,bp as g,c as y,h as k,j as I,g as b,t as C,F as L,i as _,bk as P,I as w,E as x,b1 as V,G as S,bq as j,L as T,br as D,k as U,w as $,bs as q,a7 as B,n as F,W as H,B as O,b3 as N,X as Y,Y as z,e as A,l as W,v as E,C as G,q as J,x as M,S as R,u as X,a as K,b as Q,bt as Z}from"./index-444bee7b.js";import{L as ee}from"./index-77fbbb6d.js";import{S as se}from"./index-c2b756a2.js";import{_ as ae}from"./index-69012796.js";import{_ as te}from"./empty-ae586b6c.js";import{u as le,P as oe}from"./index-4d941491.js";import{P as ie}from"./index-fadda158.js";import{q as ne}from"./proposalList-12a88758.js";import"./pdfh5-008ca364.js";import"./trial-d3ec2942.js";import"./useDicData-9131e552.js";import"./index-cff08ce5.js";import"./index-72e5b5fd.js";import"./trial-4d2cd1a2.js";const[re,ue,de]=e("pull-refresh"),ce=["pulling","loosing","success"];const pe=m(s({name:re,props:{disabled:Boolean,modelValue:Boolean,headHeight:u(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:d,successDuration:u(500),animationDuration:u(300)},emits:["change","refresh","update:modelValue"],setup(e,{emit:s,slots:u}){let d;const m=a(),f=a(),g=t(m),y=l({status:"normal",distance:0,duration:0}),k=o(),I=()=>{if(50!==e.headHeight)return{height:`${e.headHeight}px`}},b=()=>"loading"!==y.status&&"success"!==y.status&&!e.disabled,C=(a,t)=>{const l=+(e.pullDistance||e.headHeight);y.distance=a,y.status=t?"loading":0===a?"normal":a<l?"pulling":"loosing",s("change",{status:y.status,distance:a})},L=()=>{const{status:s}=y;return"normal"===s?"":e[`${s}Text`]||de(s)},_=()=>{const{status:e,distance:s}=y;if(u[e])return u[e]({distance:s});const a=[];return ce.includes(e)&&a.push(r("div",{class:ue("text")},[L()])),"loading"===e&&a.push(r(c,{class:ue("loading")},{default:L})),a},P=e=>{d=0===v(g.value),d&&(y.duration=0,k.start(e))},w=e=>{b()&&P(e)},x=()=>{d&&k.deltaY.value&&b()&&(y.duration=+e.animationDuration,"loosing"===y.status?(C(+e.headHeight,!0),s("update:modelValue",!0),h((()=>s("refresh")))):C(0))};return i((()=>e.modelValue),(s=>{y.duration=+e.animationDuration,s?C(+e.headHeight,!0):u.success||e.successText?(y.status="success",setTimeout((()=>{C(0)}),+e.successDuration)):C(0,!1)})),n("touchmove",(s=>{if(b()){d||P(s);const{deltaY:a}=k;k.move(s),d&&a.value>=0&&k.isVertical()&&(p(s),C((s=>{const a=+(e.pullDistance||e.headHeight);return s>a&&(s=s<2*a?a+(s-a)/2:1.5*a+(s-2*a)/4),Math.round(s)})(a.value)))}}),{target:f}),()=>{var e;const s={transitionDuration:`${y.duration}ms`,transform:y.distance?`translate3d(0,${y.distance}px, 0)`:""};return r("div",{ref:m,class:ue()},[r("div",{ref:f,class:ue("track"),style:s,onTouchstartPassive:w,onTouchend:x,onTouchcancel:x},[r("div",{class:ue("head"),style:I()},[_()]),null==(e=u.default)?void 0:e.call(u)])])}}}));const he={class:"com-product-item"},ve={class:"content-wrap"},me={class:"product-image"},fe={class:"insure-name"},ge={class:"product-info"},ye={class:"title"},ke={class:"description"},Ie={class:"tags"};var be=f(s({__name:"productItem",props:{productInfo:{default:()=>({})}},setup(e){const s=e,{productInfo:a}=g(s),t=l({checked:!1});return g(t),(e,s)=>{const t=w;return y(),k("div",he,[I("div",ve,[I("div",me,[r(t,{src:b(a).showConfig.fileUrl},null,8,["src"]),I("p",fe,C((b(a).insurerName||"").substring(0,6)),1)]),I("div",ge,[I("p",ye,C(b(a).showConfig.title),1),I("p",ke,C(b(a).showConfig.text),1),I("p",Ie,[(y(!0),k(L,null,_(b(a).showConfig.tags,((e,s)=>(y(),k("span",{key:s,class:"tag"},C(e),1)))),128))])]),P(e.$slots,"checkedProduct",{},void 0,!0)])])}}}),[["__scopeId","data-v-0e747840"]]);const Ce=["xlink:href"],Le=s({__name:"index",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const s=e,a=x((()=>`#icon-${s.name}`)),t=x((()=>s.name?`svg-icon icon-${s.name}`:"svg-icon"));return(s,l)=>(y(),k("svg",V({class:b(t)},s.$attrs,{style:{color:e.color}}),[I("use",{"xlink:href":b(a)},null,8,Ce)],16))}});const _e=e=>(Y("data-v-397146ec"),e=e(),z(),e),Pe={class:"com-tab-filter"},we={class:"article-mid"},xe={class:"article-tag"},Ve=["onClick"],Se={class:"trianele-out"},je=_e((()=>I("span",null,null,-1))),Te={class:"popup-inner"},De=_e((()=>I("div",{class:"popup-title"},"保险公司",-1))),Ue={class:"footer-button"};var $e=f(s({__name:"insureFilter",props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(e,{emit:s}){const{isPopShow:t,openPop:o,closePop:i}=function(e=!1){const s=a(e);return{isPopShow:s,openPop:e=>{e instanceof Function&&e(),s.value=!0},closePop:e=>{s.value=!1,e instanceof Function&&e()}}}(!1),n=l({insureList:[],checkedInsure:[]}),{insureList:u,checkedInsure:d}=g(n),c=a(""),p=()=>{d.value=[]},h=()=>{s("onSelectInsure",{selectInsureCode:d.value,selectCategory:c.value}),i()};return S((()=>{j().then((e=>{const{code:s,data:a}=e;"10000"===s&&(u.value=null==a?void 0:a.map((e=>({label:e.abbreviation,value:e.insurerCode}))))}))})),(a,l)=>{const n=O,v=N;return y(),k("div",Pe,[I("div",we,[I("div",xe,[(y(!0),k(L,null,_(b(D),((e,a)=>(y(),k("div",{key:a,class:T(["tag-item",{checked:b(c)==e.value}]),onClick:a=>((e,a)=>{c.value=a,s("onSelectInsure",{selectInsureCode:d.value,selectCategory:c.value})})(null==e||e.value,e.value)},[I("div",{class:T(["tag-out",{checked:b(c)==e.value}])},[I("div",{class:T(["tag-item-text",{checked:b(c)==e.value}])},C(e.label),3)],2),I("div",Se,[I("div",{class:T({triangle:b(c)==e.value})},null,2)])],10,Ve)))),128))]),e.filter?(y(),k("div",{key:0,class:"filter",onClick:l[0]||(l[0]=(...e)=>b(o)&&b(o)(...e))},[je,I("div",{class:T(["text",{"has-select-condition":b(d).length>0}])},"筛选",2),r(Le,{name:"filter"})])):U("",!0),r(v,{show:b(t),position:"right","close-on-click-overlay":"",style:H(e.popupStyle||{width:"322px",height:"100%",padding:"0 15px"}),onClickOverlay:b(i)},{default:$((()=>[I("div",Te,[De,r(q,{modelValue:b(d),"onUpdate:modelValue":l[1]||(l[1]=e=>B(d)?d.value=e:null),options:b(u)},null,8,["modelValue","options"])]),I("div",Ue,[r(n,{plain:"",type:"primary",onClick:p},{default:$((()=>[F("重置")])),_:1}),r(n,{type:"primary",onClick:h},{default:$((()=>[F("确定")])),_:1})])])),_:1},8,["show","style","onClickOverlay"])])])}}}),[["__scopeId","data-v-397146ec"]]);const qe={class:"com-trial-product-wrapper"},Be={class:"container"},Fe=(e=>(Y("data-v-1cf5306a"),e=e(),z(),e))((()=>I("span",{class:"title"}," 已选产品 ",-1))),He={class:"popup-body"},Oe={class:"cell-title"},Ne={class:"title"};var Ye=f(s({__name:"index",props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(e,{emit:s}){const t=e,l=a([]),o=a([]),n=a({isShow:t.isShow}),u=()=>{s("close")},d=()=>{o.value=[],s("checked",[])},c=e=>{var a,t,i;null==(i=null==(t=null==(a=null==l?void 0:l.value)?void 0:a[e])?void 0:t.toggle)||i.call(t),s("checked",o.value)};return i((()=>t.isShow),(e=>{n.value.isShow=e})),i((()=>t.modalValue),((e=[])=>{o.value=e}),{deep:!0,immediate:!0}),(s,a)=>{const t=E,i=G,p=J,h=M,v=N;return y(),k("div",qe,[r(v,{show:b(n).isShow,"onUpdate:show":a[1]||(a[1]=e=>b(n).isShow=e),position:"bottom",onClose:u},{default:$((()=>[I("div",Be,[I("div",{class:"popup-header"},[I("span",{class:"clear-all",onClick:d}," 清空选项 "),Fe,I("span",{class:"close",onClick:u})]),I("div",He,[r(h,{modelValue:b(o),"onUpdate:modelValue":a[0]||(a[0]=e=>B(o)?o.value=e:null)},{default:$((()=>[r(p,{inset:""},{default:$((()=>[(y(!0),k(L,null,_(e.proposalList,(e=>(y(),A(i,{key:e.proposalInsuredList[0].proposalInsuredProductList[0].productId,title:e.proposalInsuredList[0].proposalInsuredProductList[0].productName,onClick:s=>c(e.proposalInsuredList[0].proposalInsuredProductList[0].productId)},{"right-icon":$((()=>[r(t,{ref_for:!0,ref:s=>b(l)[e.proposalInsuredList[0].proposalInsuredProductList[0].productId]=s,shape:"square",name:e.proposalInsuredList[0].proposalInsuredProductList[0].productId,onClick:W((s=>c(e.proposalInsuredList[0].proposalInsuredProductList[0].productId)),["stop"])},null,8,["name","onClick"])])),title:$((()=>[I("div",Oe,[I("div",Ne,C(e.proposalInsuredList[0].proposalInsuredProductList[0].productName),1)])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-1cf5306a"]]);const ze={class:"search-wrap"},Ae={class:"page-proposal-list"},We={class:"check-button"},Ee={key:1,class:"van-sticky"},Ge={class:"add-plan"},Je={class:"has-select-product"},Me=(e=>(Y("data-v-a09b1840"),e=e(),z(),e))((()=>I("span",{class:"icon"},null,-1)));var Re=f(s({__name:"index",props:{isCreateProposal:{type:Boolean,default:!0}},setup(e){const s=l({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productId:void 0,proposalList:[],showFooter:!0}),{searchValue:t,tagLists:o,isOpen:i,loading:n,finished:u,refreshing:d,productList:c,selectProduct:p,insurerCodeList:h,showCategory:v,productTotal:m,showFooter:f}=g(s),[P,w]=R(),[V,S]=R(),j=le(),T=X(),D=K(),{isCreateProposal:q}=D.query,H=a(q?"repeatAdd":"add"),N=()=>{ne({title:t.value,insurerCodeList:h.value,showCategory:v.value,excludeProductIdList:j.$state.excludeProduct||[],pageNum:1,pageSize:999}).then((e=>{const{code:s,data:a,total:t}=e;"10000"===s&&(c.value=null==a?void 0:a.datas,m.value=t)}))},Y=e=>{N()},z=e=>{const{selectInsureCode:s,selectCategory:a}=e;h.value=s,v.value=a,N()},W=()=>{d.value&&(c.value=[],d.value=!1),N(),n.value=!1,m.value===c.value.length&&(u.value=!0)},G=()=>{T.push({path:"historyProposalList"})},J=x((()=>{var e;const{birthday:s,gender:a}=(null==(e=j.$state.proposalInfo.proposalInsuredList)?void 0:e[0])||{};return{birthday:s,gender:a}})),re=x((()=>c.value.length>0)),ue=e=>{s.selectProduct=e},de=()=>{const e=s.proposalList.filter((e=>s.selectProduct.includes(e.proposalInsuredList[0].proposalInsuredProductList[0].productId)));j.setTrialData(e),T.push({path:"/proposal/createProposal"})},ce=()=>{w(!1)},he=e=>{if(q)return s.proposalList.push(e),f.value=!0,s.selectProduct.push(e.proposalInsuredList[0].proposalInsuredProductList[0].productId),void w(!1);j.setTrialData([e]),w(!1),T.push({path:"/proposal/createProposal",query:D.query})},ve=()=>{u.value=!0,n.value=!0,W()};return(e,a)=>{const l=se,o=E,h=M,v=ee,m=pe,g=O,x=Q("ProPageWrap");return y(),k(L,null,[r(x,{class:"page-proposal"},{default:$((()=>[I("div",ze,[r(l,{modelValue:b(t),"onUpdate:modelValue":a[0]||(a[0]=e=>B(t)?t.value=e:null),placeholder:"搜索计划书",shape:"round",class:"search",onSearch:Y},null,8,["modelValue"]),b(re)?(y(),A($e,{key:0,filter:b(i),"onUpdate:filter":a[1]||(a[1]=e=>B(i)?i.value=e:null),"filter-class":"filter-area",onOnSelectInsure:z},null,8,["filter"])):U("",!0)]),I("div",Ae,[r(m,{modelValue:b(d),"onUpdate:modelValue":a[4]||(a[4]=e=>B(d)?d.value=e:null),onRefresh:ve},{default:$((()=>[r(v,{loading:b(n),"onUpdate:loading":a[3]||(a[3]=e=>B(n)?n.value=e:null),finished:b(u),"finished-text":b(re)?"- 已经到底了哦 -":"",onLoad:W},{default:$((()=>[(y(!0),k(L,null,_(b(c),(e=>(y(),A(be,{key:e.id,"product-info":e,onClick:a=>{return t=e,f.value=!1,s.productId=t.productId,void w(!0);var t}},Z({_:2},[b(q)?{name:"checkedProduct",fn:$((()=>[I("div",We,[r(h,{modelValue:b(p),"onUpdate:modelValue":a[2]||(a[2]=e=>B(p)?p.value=e:null)},{default:$((()=>[r(o,{name:e.productId,shape:"square"},null,8,["name"])])),_:2},1032,["modelValue"])])])),key:"0"}:void 0]),1032,["product-info","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])]),b(re)?U("",!0):(y(),A(ae,{key:0,"empty-img":b(te),title:"没有找到相关内容~","empty-class":"empty-select"},null,8,["empty-img"])),b(q)&&b(f)?(y(),k("div",Ee,[I("div",Ge,[I("p",{class:"has-select",onClick:a[5]||(a[5]=e=>b(S)(!b(V)))},[F(" 已选"),I("span",Je,C(b(p).length),1),F("款产品 "),Me]),r(g,{type:"primary",disabled:!b(p).length,onClick:de},{default:$((()=>[F("添加计划书")])),_:1},8,["disabled"])])])):U("",!0),r(Ye,{modelValue:b(p),"onUpdate:modelValue":a[6]||(a[6]=e=>B(p)?p.value=e:null),"proposal-list":b(s).proposalList,"is-show":b(V),onClose:a[7]||(a[7]=e=>b(S)(!1)),onChecked:ue},null,8,["modelValue","proposal-list","is-show"]),b(P)?(y(),A(oe,{key:2,"is-show":b(P),type:b(H),insured:b(J),"product-id":b(s).productId,onClose:ce,onFinished:he},null,8,["is-show","type","insured","product-id"])):U("",!0)])),_:1}),b(q)?U("",!0):(y(),A(ie,{key:0,"button-image":b("/static/assets/lishijihuashu.b6958e78.png"),onClick:G},null,8,["button-image"]))],64)}}}),[["__scopeId","data-v-a09b1840"]]);export{Re as default};
