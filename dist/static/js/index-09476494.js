import{av as e,d as s,r as a,bl as t,J as l,bm as o,am as i,bn as u,f as n,ba as r,ay as d,aA as c,be as p,b2 as v,bo as h,aB as m,_ as f,bp as g,c as y,g as k,i as I,m as b,t as C,F as L,h as P,bk as w,I as x,E as V,aZ as S,G as _,bq as j,L as T,br as D,j as $,w as U,bs as q,b5 as B,W as H,n as F,B as O,a$ as N,X as A,Y,e as W,k as Z,v as z,C as E,q as G,x as J,S as M,u as R,a as X,b as K,bt as Q}from"./index-5239afda.js";import{L as ee}from"./index-b27404cf.js";import{S as se,Z as ae}from"./index-f8c6ad40.js";import{_ as te}from"./empty-ae586b6c.js";import{u as le,P as oe}from"./index-1fa3ebf6.js";import{P as ie}from"./index-8a2a360f.js";import{q as ue}from"./proposalList-4b3d5667.js";import"./pdfh5-008ca364.js";import"./index-2038fd60.js";import"./trial-04861e1a.js";import"./useDicData-2fe3e43e.js";import"./trial-f5b40a6d.js";const[ne,re,de]=e("pull-refresh"),ce=["pulling","loosing","success"];const pe=m(s({name:ne,props:{disabled:Boolean,modelValue:Boolean,headHeight:r(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:d,successDuration:r(500),animationDuration:r(300)},emits:["change","refresh","update:modelValue"],setup(e,{emit:s,slots:r}){let d;const m=a(),f=a(),g=t(m),y=l({status:"normal",distance:0,duration:0}),k=o(),I=()=>{if(50!==e.headHeight)return{height:`${e.headHeight}px`}},b=()=>"loading"!==y.status&&"success"!==y.status&&!e.disabled,C=(a,t)=>{const l=+(e.pullDistance||e.headHeight);y.distance=a,y.status=t?"loading":0===a?"normal":a<l?"pulling":"loosing",s("change",{status:y.status,distance:a})},L=()=>{const{status:s}=y;return"normal"===s?"":e[`${s}Text`]||de(s)},P=()=>{const{status:e,distance:s}=y;if(r[e])return r[e]({distance:s});const a=[];return ce.includes(e)&&a.push(n("div",{class:re("text")},[L()])),"loading"===e&&a.push(n(c,{class:re("loading")},{default:L})),a},w=e=>{d=0===h(g.value),d&&(y.duration=0,k.start(e))},x=e=>{b()&&w(e)},V=()=>{d&&k.deltaY.value&&b()&&(y.duration=+e.animationDuration,"loosing"===y.status?(C(+e.headHeight,!0),s("update:modelValue",!0),v((()=>s("refresh")))):C(0))};return i((()=>e.modelValue),(s=>{y.duration=+e.animationDuration,s?C(+e.headHeight,!0):r.success||e.successText?(y.status="success",setTimeout((()=>{C(0)}),+e.successDuration)):C(0,!1)})),u("touchmove",(s=>{if(b()){d||w(s);const{deltaY:a}=k;k.move(s),d&&a.value>=0&&k.isVertical()&&(p(s),C((s=>{const a=+(e.pullDistance||e.headHeight);return s>a&&(s=s<2*a?a+(s-a)/2:1.5*a+(s-2*a)/4),Math.round(s)})(a.value)))}}),{target:f}),()=>{var e;const s={transitionDuration:`${y.duration}ms`,transform:y.distance?`translate3d(0,${y.distance}px, 0)`:""};return n("div",{ref:m,class:re()},[n("div",{ref:f,class:re("track"),style:s,onTouchstartPassive:x,onTouchend:V,onTouchcancel:V},[n("div",{class:re("head"),style:I()},[P()]),null==(e=r.default)?void 0:e.call(r)])])}}}));const ve={class:"com-product-item"},he={class:"content-wrap"},me={class:"product-image"},fe={class:"insure-name"},ge={class:"product-info"},ye={class:"title"},ke={class:"description"},Ie={class:"tags"};var be=f(s({props:{productInfo:{default:()=>({})}},setup(e){const s=e,{productInfo:a}=g(s),t=l({checked:!1});return g(t),(e,s)=>{const t=x;return y(),k("div",ve,[I("div",he,[I("div",me,[n(t,{src:b(a).showConfig.fileUrl},null,8,["src"]),I("p",fe,C((b(a).insurerName||"").substring(0,6)),1)]),I("div",ge,[I("p",ye,C(b(a).showConfig.title),1),I("p",ke,C(b(a).showConfig.text),1),I("p",Ie,[(y(!0),k(L,null,P(b(a).showConfig.tags,((e,s)=>(y(),k("span",{key:s,class:"tag"},C(e),1)))),128))])]),w(e.$slots,"checkedProduct",{},void 0,!0)])])}}}),[["__scopeId","data-v-0e747840"]]);const Ce=["xlink:href"],Le=s({props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const s=e,a=V((()=>`#icon-${s.name}`)),t=V((()=>s.name?`svg-icon icon-${s.name}`:"svg-icon"));return(s,l)=>(y(),k("svg",S({class:b(t)},s.$attrs,{style:{color:e.color}}),[I("use",{"xlink:href":b(a)},null,8,Ce)],16))}});const Pe=e=>(A("data-v-397146ec"),e=e(),Y(),e),we={class:"com-tab-filter"},xe={class:"article-mid"},Ve={class:"article-tag"},Se=["onClick"],_e={class:"trianele-out"},je=Pe((()=>I("span",null,null,-1))),Te={class:"popup-inner"},De=Pe((()=>I("div",{class:"popup-title"},"保险公司",-1))),$e={class:"footer-button"},Ue=F("重置"),qe=F("确定");var Be=f(s({props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(e,{emit:s}){const{isPopShow:t,openPop:o,closePop:i}=function(e=!1){const s=a(e);return{isPopShow:s,openPop:e=>{e instanceof Function&&e(),s.value=!0},closePop:e=>{s.value=!1,e instanceof Function&&e()}}}(!1),u=l({insureList:[],checkedInsure:[]}),{insureList:r,checkedInsure:d}=g(u),c=a(""),p=()=>{d.value=[]},v=()=>{s("onSelectInsure",{selectInsureCode:d.value,selectCategory:c.value}),i()};return _((()=>{j().then((e=>{const{code:s,data:a}=e;"10000"===s&&(r.value=null==a?void 0:a.map((e=>({label:e.abbreviation,value:e.insurerCode}))))}))})),(a,l)=>{const u=O,h=N;return y(),k("div",we,[I("div",xe,[I("div",Ve,[(y(!0),k(L,null,P(b(D),((e,a)=>(y(),k("div",{key:a,class:T(["tag-item",{checked:c.value==e.value}]),onClick:a=>((e,a)=>{c.value=a,s("onSelectInsure",{selectInsureCode:d.value,selectCategory:c.value})})(null==e||e.value,e.value)},[I("div",{class:T(["tag-out",{checked:c.value==e.value}])},[I("div",{class:T(["tag-item-text",{checked:c.value==e.value}])},C(e.label),3)],2),I("div",_e,[I("div",{class:T({triangle:c.value==e.value})},null,2)])],10,Se)))),128))]),e.filter?(y(),k("div",{key:0,class:"filter",onClick:l[0]||(l[0]=(...e)=>b(o)&&b(o)(...e))},[je,I("div",{class:T(["text",{"has-select-condition":b(d).length>0}])},"筛选",2),n(Le,{name:"filter"})])):$("",!0),n(h,{show:b(t),position:"right","close-on-click-overlay":"",style:H(e.popupStyle||{width:"322px",height:"100%",padding:"0 15px"}),onClickOverlay:b(i)},{default:U((()=>[I("div",Te,[De,n(q,{modelValue:b(d),"onUpdate:modelValue":l[1]||(l[1]=e=>B(d)?d.value=e:null),options:b(r)},null,8,["modelValue","options"])]),I("div",$e,[n(u,{plain:"",type:"primary",onClick:p},{default:U((()=>[Ue])),_:1}),n(u,{type:"primary",onClick:v},{default:U((()=>[qe])),_:1})])])),_:1},8,["show","style","onClickOverlay"])])])}}}),[["__scopeId","data-v-397146ec"]]);const He={class:"com-trial-product-wrapper"},Fe={class:"container"},Oe=(e=>(A("data-v-1cf5306a"),e=e(),Y(),e))((()=>I("span",{class:"title"}," 已选产品 ",-1))),Ne={class:"popup-body"},Ae={class:"cell-title"},Ye={class:"title"};var We=f(s({props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(e,{emit:s}){const t=e,l=a([]),o=a([]),u=a({isShow:t.isShow}),r=()=>{s("close")},d=()=>{o.value=[],s("checked",[])},c=e=>{var a,t,i;null==(i=null==(t=null==(a=null==l?void 0:l.value)?void 0:a[e])?void 0:t.toggle)||i.call(t),s("checked",o.value)};return i((()=>t.isShow),(e=>{u.value.isShow=e})),i((()=>t.modalValue),((e=[])=>{o.value=e}),{deep:!0,immediate:!0}),(s,a)=>{const t=z,i=E,p=G,v=J,h=N;return y(),k("div",He,[n(h,{show:u.value.isShow,"onUpdate:show":a[1]||(a[1]=e=>u.value.isShow=e),position:"bottom",onClose:r},{default:U((()=>[I("div",Fe,[I("div",{class:"popup-header"},[I("span",{class:"clear-all",onClick:d}," 清空选项 "),Oe,I("span",{class:"close",onClick:r})]),I("div",Ne,[n(v,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e)},{default:U((()=>[n(p,{inset:""},{default:U((()=>[(y(!0),k(L,null,P(e.proposalList,(e=>(y(),W(i,{key:e.proposalInsuredList[0].proposalInsuredProductList[0].productId,title:e.proposalInsuredList[0].proposalInsuredProductList[0].productName,onClick:s=>c(e.proposalInsuredList[0].proposalInsuredProductList[0].productId)},{"right-icon":U((()=>[n(t,{ref_for:!0,ref:s=>l.value[e.proposalInsuredList[0].proposalInsuredProductList[0].productId]=s,shape:"square",name:e.proposalInsuredList[0].proposalInsuredProductList[0].productId,onClick:Z((s=>c(e.proposalInsuredList[0].proposalInsuredProductList[0].productId)),["stop"])},null,8,["name","onClick"])])),title:U((()=>[I("div",Ae,[I("div",Ye,C(e.proposalInsuredList[0].proposalInsuredProductList[0].productName),1)])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-1cf5306a"]]);const Ze=e=>(A("data-v-a09b1840"),e=e(),Y(),e),ze={class:"search-wrap"},Ee={class:"page-proposal-list"},Ge={class:"check-button"},Je={key:1,class:"van-sticky"},Me={class:"add-plan"},Re=F(" 已选"),Xe={class:"has-select-product"},Ke=F("款产品 "),Qe=Ze((()=>I("span",{class:"icon"},null,-1))),es=F("添加计划书");var ss=f(s({props:{isCreateProposal:{type:Boolean,default:!0}},setup(e){const s=l({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productId:void 0,proposalList:[],showFooter:!0}),{searchValue:t,tagLists:o,isOpen:i,loading:u,finished:r,refreshing:d,productList:c,selectProduct:p,insurerCodeList:v,showCategory:h,productTotal:m,showFooter:f}=g(s),[w,x]=M(),[S,_]=M(),j=le(),T=R(),D=X(),{isCreateProposal:q}=D.query,H=a(q?"repeatAdd":"add"),F=()=>{ue({title:t.value,insurerCodeList:v.value,showCategory:h.value,excludeProductIdList:j.$state.excludeProduct||[],pageNum:1,pageSize:999}).then((e=>{const{code:s,data:a,total:t}=e;"10000"===s&&(c.value=null==a?void 0:a.datas,m.value=t)}))},N=e=>{F()},A=e=>{const{selectInsureCode:s,selectCategory:a}=e;v.value=s,h.value=a,F()},Y=()=>{d.value&&(c.value=[],d.value=!1),F(),u.value=!1,m.value===c.value.length&&(r.value=!0)},Z=()=>{T.push({path:"historyProposalList"})},E=V((()=>{var e;const{birthday:s,gender:a}=(null==(e=j.$state.proposalInfo.proposalInsuredList)?void 0:e[0])||{};return{birthday:s,gender:a}})),G=V((()=>c.value.length>0)),ne=e=>{s.selectProduct=e},re=()=>{const e=s.proposalList.filter((e=>s.selectProduct.includes(e.proposalInsuredList[0].proposalInsuredProductList[0].productId)));j.setTrialData(e),T.push({path:"/proposal/createProposal"})},de=()=>{x(!1)},ce=e=>{if(q)return s.proposalList.push(e),f.value=!0,s.selectProduct.push(e.proposalInsuredList[0].proposalInsuredProductList[0].productId),void x(!1);j.setTrialData([e]),x(!1),T.push({path:"/proposal/createProposal",query:D.query})},ve=()=>{r.value=!0,u.value=!0,Y()};return(e,a)=>{const l=se,o=z,v=J,h=ee,m=pe,g=O,V=K("ProPageWrap");return y(),k(L,null,[n(V,{class:"page-proposal"},{default:U((()=>[I("div",ze,[n(l,{modelValue:b(t),"onUpdate:modelValue":a[0]||(a[0]=e=>B(t)?t.value=e:null),placeholder:"搜索计划书",shape:"round",class:"search",onSearch:N},null,8,["modelValue"]),b(G)?(y(),W(Be,{key:0,filter:b(i),"onUpdate:filter":a[1]||(a[1]=e=>B(i)?i.value=e:null),"filter-class":"filter-area",onOnSelectInsure:A},null,8,["filter"])):$("",!0)]),I("div",Ee,[n(m,{modelValue:b(d),"onUpdate:modelValue":a[4]||(a[4]=e=>B(d)?d.value=e:null),onRefresh:ve},{default:U((()=>[n(h,{loading:b(u),"onUpdate:loading":a[3]||(a[3]=e=>B(u)?u.value=e:null),finished:b(r),"finished-text":b(G)?"- 已经到底了哦 -":"",onLoad:Y},{default:U((()=>[(y(!0),k(L,null,P(b(c),(e=>(y(),W(be,{key:e.id,"product-info":e,onClick:a=>{return t=e,f.value=!1,s.productId=t.productId,void x(!0);var t}},Q({_:2},[b(q)?{name:"checkedProduct",fn:U((()=>[I("div",Ge,[n(v,{modelValue:b(p),"onUpdate:modelValue":a[2]||(a[2]=e=>B(p)?p.value=e:null)},{default:U((()=>[n(o,{name:e.productId,shape:"square"},null,8,["name"])])),_:2},1032,["modelValue"])])]))}:void 0]),1032,["product-info","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])]),b(G)?$("",!0):(y(),W(ae,{key:0,"empty-img":b(te),title:"没有找到相关内容~","empty-class":"empty-select"},null,8,["empty-img"])),b(q)&&b(f)?(y(),k("div",Je,[I("div",Me,[I("p",{class:"has-select",onClick:a[5]||(a[5]=e=>b(_)(!b(S)))},[Re,I("span",Xe,C(b(p).length),1),Ke,Qe]),n(g,{type:"primary",disabled:!b(p).length,onClick:re},{default:U((()=>[es])),_:1},8,["disabled"])])])):$("",!0),n(We,{modelValue:b(p),"onUpdate:modelValue":a[6]||(a[6]=e=>B(p)?p.value=e:null),"proposal-list":b(s).proposalList,"is-show":b(S),onClose:a[7]||(a[7]=e=>b(_)(!1)),onChecked:ne},null,8,["modelValue","proposal-list","is-show"]),b(w)?(y(),W(oe,{key:2,"is-show":b(w),type:H.value,insured:b(E),"product-id":b(s).productId,onClose:de,onFinished:ce},null,8,["is-show","type","insured","product-id"])):$("",!0)])),_:1}),b(q)?$("",!0):(y(),W(ie,{key:0,"button-image":b("/static/assets/lishijihuashu.b6958e78.png"),onClick:Z},null,8,["button-image"]))],64)}}}),[["__scopeId","data-v-a09b1840"]]);export{ss as default};
