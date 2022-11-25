import{h as q,y as N,N as G,r as v,k as r,p as y,A as t,s as c,B as e,L as S,F as T,H as O,Z as ke,G as R,j as ye,M as D,v as B,n as f,U as b,C as Ce,a5 as H,a6 as X,E as U,$ as Q,m as F,ac as Pe,R as ee,aa as Ie,P as Le,z as te,_ as $e}from"./vendor-a1c35ffc.js";import{e as xe,Z as we}from"./empty-6e6ee0e6.js";import{_ as z,W as Ve,X as be,Z as Se,$ as Be,a0 as Fe}from"./index-50174512.js";import{u as Ee,P as Ae}from"./index-6265db9a.js";import{P as De}from"./index-bfa4f9eb.js";import{q as Re}from"./proposalList-bc3aa202.js";import"./index-722ac307.js";import"./trial-f049a781.js";import"./useDicData-bba19992.js";import"./trial-f518bb58.js";const Te={class:"com-product-item"},Ue={class:"content-wrap"},Ne={class:"product-image"},qe={class:"insure-name"},Oe={class:"product-info"},ze={class:"title"},Ze={class:"description"},je={class:"tags"},Me=q({props:{productInfo:{default:()=>({})}},setup(a){const l=a,{productInfo:_}=N(l),x=G({checked:!1});return N(x),(h,g)=>{const C=v("van-image");return r(),y("div",Te,[t("div",Ue,[t("div",Ne,[c(C,{src:e(_).fileUrl},null,8,["src"]),t("p",qe,S(e(_).insurerName),1)]),t("div",Oe,[t("p",ze,S(e(_).title),1),t("p",Ze,S(e(_).text),1),t("p",je,[(r(!0),y(T,null,O(e(_).tags,(d,n)=>(r(),y("span",{key:n,class:"tag"},S(d),1))),128))])]),ke(h.$slots,"checkedProduct",{},void 0,!0)])])}}});var We=z(Me,[["__scopeId","data-v-a61e69d6"]]);const oe=a=>(H("data-v-397146ec"),a=a(),X(),a),Ge={class:"com-tab-filter"},He={class:"article-mid"},Xe={class:"article-tag"},Ye=["onClick"],Je={class:"trianele-out"},Ke=oe(()=>t("span",null,null,-1)),Qe={class:"popup-inner"},et=oe(()=>t("div",{class:"popup-title"},"\u4FDD\u9669\u516C\u53F8",-1)),tt={class:"footer-button"},ot=U("\u91CD\u7F6E"),st=U("\u786E\u5B9A"),at=q({props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(a,{emit:l}){const{isPopShow:_,openPop:x,closePop:h}=Ve(!1),g=G({insureList:[],checkedInsure:[]}),{insureList:C,checkedInsure:d}=N(g),n=R(""),i=(I,m)=>{n.value=m,l("onSelectInsure",{selectInsureCode:d.value,selectCategory:n.value})},k=()=>{d.value=[]},P=()=>{l("onSelectInsure",{selectInsureCode:d.value,selectCategory:n.value}),h()};return ye(()=>{be().then(I=>{const{code:m,data:L}=I;m==="10000"&&(C.value=L==null?void 0:L.map($=>({label:$.abbreviation,value:$.insurerCode})))})}),(I,m)=>{const L=v("van-button"),$=v("van-popup");return r(),y("div",Ge,[t("div",He,[t("div",Xe,[(r(!0),y(T,null,O(e(Se),(o,V)=>(r(),y("div",{key:V,class:D(["tag-item",{checked:n.value==o.value}]),onClick:E=>i(o==null?void 0:o.value,o.value)},[t("div",{class:D(["tag-out",{checked:n.value==o.value}])},[t("div",{class:D(["tag-item-text",{checked:n.value==o.value}])},S(o.label),3)],2),t("div",Je,[t("div",{class:D({triangle:n.value==o.value})},null,2)])],10,Ye))),128))]),a.filter?(r(),y("div",{key:0,class:"filter",onClick:m[0]||(m[0]=(...o)=>e(x)&&e(x)(...o))},[Ke,t("div",{class:D(["text",{"has-select-condition":e(d).length>0}])},"\u7B5B\u9009",2),c(Be,{name:"filter"})])):B("",!0),c($,{show:e(_),position:"right","close-on-click-overlay":"",style:Ce(a.popupStyle||{width:"322px",height:"100%",padding:"0 15px"}),onClickOverlay:e(h)},{default:f(()=>[t("div",Qe,[et,c(Fe,{modelValue:e(d),"onUpdate:modelValue":m[1]||(m[1]=o=>b(d)?d.value=o:null),options:e(C)},null,8,["modelValue","options"])]),t("div",tt,[c(L,{plain:"",type:"primary",onClick:k},{default:f(()=>[ot]),_:1}),c(L,{type:"primary",onClick:P},{default:f(()=>[st]),_:1})])]),_:1},8,["show","style","onClickOverlay"])])])}}});var lt=z(at,[["__scopeId","data-v-397146ec"]]),nt="/static/assets/lishijihuashu.6b004484.png";const ut=a=>(H("data-v-1cf5306a"),a=a(),X(),a),rt={class:"com-trial-product-wrapper"},ct={class:"container"},dt=ut(()=>t("span",{class:"title"}," \u5DF2\u9009\u4EA7\u54C1 ",-1)),it={class:"popup-body"},pt={class:"cell-title"},_t={class:"title"},vt=q({props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(a,{emit:l}){const _=a,x=R([]),h=R([]),g=R({isShow:_.isShow}),C=()=>{l("close")},d=()=>{h.value=[],l("checked",[])},n=i=>{var k,P,I;(I=(P=(k=x==null?void 0:x.value)==null?void 0:k[i])==null?void 0:P.toggle)==null||I.call(P),l("checked",h.value)};return Q(()=>_.isShow,i=>{g.value.isShow=i}),Q(()=>_.modalValue,(i=[])=>{h.value=i},{deep:!0,immediate:!0}),(i,k)=>{const P=v("van-checkbox"),I=v("VanCell"),m=v("van-cell-group"),L=v("van-checkbox-group"),$=v("VanPopup");return r(),y("div",rt,[c($,{show:g.value.isShow,"onUpdate:show":k[1]||(k[1]=o=>g.value.isShow=o),position:"bottom",onClose:C},{default:f(()=>[t("div",ct,[t("div",{class:"popup-header"},[t("span",{class:"clear-all",onClick:d}," \u6E05\u7A7A\u9009\u9879 "),dt,t("span",{class:"close",onClick:C})]),t("div",it,[c(L,{modelValue:h.value,"onUpdate:modelValue":k[0]||(k[0]=o=>h.value=o)},{default:f(()=>[c(m,{inset:""},{default:f(()=>[(r(!0),y(T,null,O(a.proposalList,o=>(r(),F(I,{key:o.proposalInsuredList[0].proposalInsuredProductList[0].productId,title:o.proposalInsuredList[0].proposalInsuredProductList[0].productName,onClick:V=>n(o.proposalInsuredList[0].proposalInsuredProductList[0].productId)},{"right-icon":f(()=>[c(P,{ref_for:!0,ref:V=>x.value[o.proposalInsuredList[0].proposalInsuredProductList[0].productId]=V,shape:"square",name:o.proposalInsuredList[0].proposalInsuredProductList[0].productId,onClick:Pe(V=>n(o.proposalInsuredList[0].proposalInsuredProductList[0].productId),["stop"])},null,8,["name","onClick"])]),title:f(()=>[t("div",pt,[t("div",_t,S(o.proposalInsuredList[0].proposalInsuredProductList[0].productName),1)])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])])])]),_:1},8,["show"])])}}});var ht=z(vt,[["__scopeId","data-v-1cf5306a"]]);const mt=a=>(H("data-v-4a6b9c72"),a=a(),X(),a),ft={class:"search-wrap"},gt={class:"page-proposal-list"},kt={class:"check-button"},yt={key:1,class:"van-sticky"},Ct={class:"add-plan"},Pt=U(" \u5DF2\u9009"),It={class:"has-select-product"},Lt=U("\u6B3E\u4EA7\u54C1 "),$t=mt(()=>t("span",{class:"icon"},null,-1)),xt=U("\u6DFB\u52A0\u8BA1\u5212\u4E66"),wt=q({props:{isCreateProposal:{type:Boolean,default:!0}},setup(a){const l=G({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productId:void 0,proposalList:[],showFooter:!0}),{searchValue:_,tagLists:x,isOpen:h,loading:g,finished:C,refreshing:d,productList:n,selectProduct:i,insurerCodeList:k,showCategory:P,productTotal:I,showFooter:m}=N(l),[L,$]=ee(),[o,V]=ee(),E=Ee(),Z=Ie(),Y=Le(),{isCreateProposal:A}=Y.query,se=R(A?"repeatAdd":"add"),j=()=>{Re({title:_.value,insurerCodeList:k.value,showCategory:P.value,excludeProductIdList:E.$state.excludeProduct||[],pageNum:1,pageSize:999}).then(p=>{const{code:s,data:w,total:W}=p;s==="10000"&&(n.value=w==null?void 0:w.datas,I.value=W)})},ae=p=>{j()},le=p=>{const{selectInsureCode:s,selectCategory:w}=p;k.value=s,P.value=w,j()},J=()=>{d.value&&(n.value=[],d.value=!1),j(),g.value=!1,I.value===n.value.length&&(C.value=!0)},ne=()=>{Z.push({path:"historyProposalList"})},ue=te(()=>{var w;const{birthday:p,gender:s}=((w=E.$state.proposalInfo.proposalInsuredList)==null?void 0:w[0])||{};return{birthday:p,gender:s}}),M=te(()=>n.value.length>0),re=p=>{m.value=!1,l.productId=p.productId,$(!0)},ce=p=>{l.selectProduct=p},de=()=>{const p=l.proposalList.filter(s=>l.selectProduct.includes(s.proposalInsuredList[0].proposalInsuredProductList[0].productId));E.setTrialData(p),Z.push({path:"/proposal/createProposal"})},ie=()=>{$(!1)},pe=p=>{if(A){l.proposalList.push(p),m.value=!0,l.selectProduct.push(p.proposalInsuredList[0].proposalInsuredProductList[0].productId),$(!1);return}E.setTrialData([p]),$(!1),Z.push({path:"/proposal/createProposal",query:Y.query})},_e=()=>{C.value=!0,g.value=!0,J()};return(p,s)=>{const w=v("van-search"),W=v("van-checkbox"),ve=v("van-checkbox-group"),he=v("van-list"),me=v("van-pull-refresh"),fe=v("van-button"),ge=v("ProPageWrap");return r(),y(T,null,[c(ge,{class:"page-proposal"},{default:f(()=>[t("div",ft,[c(w,{modelValue:e(_),"onUpdate:modelValue":s[0]||(s[0]=u=>b(_)?_.value=u:null),placeholder:"\u641C\u7D22\u8BA1\u5212\u4E66",shape:"round",class:"search",onSearch:ae},null,8,["modelValue"]),e(M)?(r(),F(lt,{key:0,filter:e(h),"onUpdate:filter":s[1]||(s[1]=u=>b(h)?h.value=u:null),"filter-class":"filter-area",onOnSelectInsure:le},null,8,["filter"])):B("",!0)]),t("div",gt,[c(me,{modelValue:e(d),"onUpdate:modelValue":s[4]||(s[4]=u=>b(d)?d.value=u:null),onRefresh:_e},{default:f(()=>[c(he,{loading:e(g),"onUpdate:loading":s[3]||(s[3]=u=>b(g)?g.value=u:null),finished:e(C),"finished-text":e(M)?"-\xA0\u5DF2\u7ECF\u5230\u5E95\u4E86\u54E6\xA0-":"",onLoad:J},{default:f(()=>[(r(!0),y(T,null,O(e(n),u=>(r(),F(We,{key:u.id,"product-info":u==null?void 0:u.showConfig,onClick:K=>re(u)},$e({_:2},[e(A)?{name:"checkedProduct",fn:f(()=>[t("div",kt,[c(ve,{modelValue:e(i),"onUpdate:modelValue":s[2]||(s[2]=K=>b(i)?i.value=K:null)},{default:f(()=>[c(W,{name:u.productId,shape:"square"},null,8,["name"])]),_:2},1032,["modelValue"])])])}:void 0]),1032,["product-info","onClick"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])]),e(M)?B("",!0):(r(),F(we,{key:0,"empty-img":e(xe),title:"\u6CA1\u6709\u627E\u5230\u76F8\u5173\u5185\u5BB9~","empty-class":"empty-select"},null,8,["empty-img"])),e(A)&&e(m)?(r(),y("div",yt,[t("div",Ct,[t("p",{class:"has-select",onClick:s[5]||(s[5]=u=>e(V)(!e(o)))},[Pt,t("span",It,S(e(i).length),1),Lt,$t]),c(fe,{type:"primary",disabled:!e(i).length,onClick:de},{default:f(()=>[xt]),_:1},8,["disabled"])])])):B("",!0),c(ht,{modelValue:e(i),"onUpdate:modelValue":s[6]||(s[6]=u=>b(i)?i.value=u:null),"proposal-list":e(l).proposalList,"is-show":e(o),onClose:s[7]||(s[7]=u=>e(V)(!1)),onChecked:ce},null,8,["modelValue","proposal-list","is-show"]),e(L)?(r(),F(Ae,{key:2,"is-show":e(L),type:se.value,insured:e(ue),"product-id":e(l).productId,onClose:ie,onFinished:pe},null,8,["is-show","type","insured","product-id"])):B("",!0)]),_:1}),e(A)?B("",!0):(r(),F(De,{key:0,"button-image":e(nt),onClick:ne},null,8,["button-image"]))],64)}}});var Ut=z(wt,[["__scopeId","data-v-4a6b9c72"]]);export{Ut as default};
