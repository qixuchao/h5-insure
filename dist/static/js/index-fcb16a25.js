import{g as q,x as O,M as Y,r as v,j as d,n as y,z as t,p as i,A as e,J as S,F as T,G as N,Y as ke,E as R,h as ye,L as D,t as B,m,R as b,B as Ce,a4 as H,a5 as J,C as U,_ as G,k as F,ab as Ie,Q as ee,a9 as Pe,O as Le,y as te,Z as $e}from"./vendor-9d7eb2ed.js";import{e as xe,Z as we}from"./empty-c9ca68a8.js";import{_ as z,R as Ve,T as be,W as Se,X as Be,Z as Fe}from"./index-e33beaf4.js";import{u as Ee,P as Ae}from"./index-e55a6d18.js";import{P as De}from"./index-847839ed.js";import{q as Re}from"./proposalList-15787804.js";import"./index-33543dd1.js";import"./trial-7dfcabd5.js";import"./useDicData-c1e008e6.js";import"./trial-48e83825.js";const Te={class:"com-product-item"},Ue={class:"content-wrap"},Oe={class:"product-image"},qe={class:"insure-name"},Ne={class:"product-info"},ze={class:"title"},Ze={class:"description"},je={class:"tags"},Me=q({props:{productInfo:{default:()=>({})}},setup(a){const n=a,{productInfo:_}=O(n),w=Y({checked:!1});return O(w),(h,g)=>{const C=v("van-image");return d(),y("div",Te,[t("div",Ue,[t("div",Oe,[i(C,{src:e(_).fileUrl},null,8,["src"]),t("p",qe,S(e(_).insurerName),1)]),t("div",Ne,[t("p",ze,S(e(_).title),1),t("p",Ze,S(e(_).text),1),t("p",je,[(d(!0),y(T,null,N(e(_).tags,(p,u)=>(d(),y("span",{key:u,class:"tag"},S(p),1))),128))])]),ke(h.$slots,"checkedProduct",{},void 0,!0)])])}}});var We=z(Me,[["__scopeId","data-v-a61e69d6"]]);const oe=a=>(H("data-v-397146ec"),a=a(),J(),a),Ge={class:"com-tab-filter"},Ye={class:"article-mid"},He={class:"article-tag"},Je=["onClick"],Qe={class:"trianele-out"},Xe=oe(()=>t("span",null,null,-1)),Ke={class:"popup-inner"},et=oe(()=>t("div",{class:"popup-title"},"\u4FDD\u9669\u516C\u53F8",-1)),tt={class:"footer-button"},ot=U("\u91CD\u7F6E"),st=U("\u786E\u5B9A"),at=q({props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(a,{emit:n}){const{isPopShow:_,openPop:w,closePop:h}=Ve(!1),g=Y({insureList:[],checkedInsure:[]}),{insureList:C,checkedInsure:p}=O(g),u=R(""),r=(P,f)=>{u.value=f,n("onSelectInsure",{selectInsureCode:p.value,selectCategory:u.value})},k=()=>{p.value=[]},I=()=>{n("onSelectInsure",{selectInsureCode:p.value,selectCategory:u.value}),h()};return ye(()=>{be().then(P=>{const{code:f,data:L}=P;f==="10000"&&(C.value=L==null?void 0:L.map($=>({label:$.abbreviation,value:$.insurerCode})))})}),(P,f)=>{const L=v("van-button"),$=v("van-popup");return d(),y("div",Ge,[t("div",Ye,[t("div",He,[(d(!0),y(T,null,N(e(Se),(o,V)=>(d(),y("div",{key:V,class:D(["tag-item",{checked:u.value==o.value}]),onClick:E=>r(o==null?void 0:o.value,o.value)},[t("div",{class:D(["tag-out",{checked:u.value==o.value}])},[t("div",{class:D(["tag-item-text",{checked:u.value==o.value}])},S(o.label),3)],2),t("div",Qe,[t("div",{class:D({triangle:u.value==o.value})},null,2)])],10,Je))),128))]),a.filter?(d(),y("div",{key:0,class:"filter",onClick:f[0]||(f[0]=(...o)=>e(w)&&e(w)(...o))},[Xe,t("div",{class:D(["text",{"has-select-condition":e(p).length>0}])},"\u7B5B\u9009",2),i(Be,{name:"filter"})])):B("",!0),i($,{show:e(_),position:"right","close-on-click-overlay":"",style:Ce(a.popupStyle||{width:"322px",height:"100%",padding:"0 15px"}),onClickOverlay:e(h)},{default:m(()=>[t("div",Ke,[et,i(Fe,{modelValue:e(p),"onUpdate:modelValue":f[1]||(f[1]=o=>b(p)?p.value=o:null),options:e(C)},null,8,["modelValue","options"])]),t("div",tt,[i(L,{plain:"",type:"primary",onClick:k},{default:m(()=>[ot]),_:1}),i(L,{type:"primary",onClick:I},{default:m(()=>[st]),_:1})])]),_:1},8,["show","style","onClickOverlay"])])])}}});var lt=z(at,[["__scopeId","data-v-397146ec"]]),nt="/static/assets/lishijihuashu.6b004484.png";const ut=a=>(H("data-v-1cf5306a"),a=a(),J(),a),rt={class:"com-trial-product-wrapper"},ct={class:"container"},dt=ut(()=>t("span",{class:"title"}," \u5DF2\u9009\u4EA7\u54C1 ",-1)),it={class:"popup-body"},pt={class:"cell-title"},_t={class:"title"},vt=q({props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(a,{emit:n}){const _=a,w=R([]),h=R([]),g=R({isShow:_.isShow}),C=()=>{n("close")},p=()=>{h.value=[],n("checked",[])},u=r=>{var k,I,P;(P=(I=(k=w==null?void 0:w.value)==null?void 0:k[r])==null?void 0:I.toggle)==null||P.call(I),n("checked",h.value)};return G(()=>_.isShow,r=>{g.value.isShow=r}),G(()=>_.modalValue,(r=[])=>{h.value=r},{deep:!0,immediate:!0}),(r,k)=>{const I=v("van-checkbox"),P=v("VanCell"),f=v("van-cell-group"),L=v("van-checkbox-group"),$=v("VanPopup");return d(),y("div",rt,[i($,{show:g.value.isShow,"onUpdate:show":k[1]||(k[1]=o=>g.value.isShow=o),position:"bottom",onClose:C},{default:m(()=>[t("div",ct,[t("div",{class:"popup-header"},[t("span",{class:"clear-all",onClick:p}," \u6E05\u7A7A\u9009\u9879 "),dt,t("span",{class:"close",onClick:C})]),t("div",it,[i(L,{modelValue:h.value,"onUpdate:modelValue":k[0]||(k[0]=o=>h.value=o)},{default:m(()=>[i(f,{inset:""},{default:m(()=>[(d(!0),y(T,null,N(a.proposalList,o=>(d(),F(P,{key:o.proposalInsuredList[0].proposalInsuredProductList[0].productId,title:o.proposalInsuredList[0].proposalInsuredProductList[0].productName,onClick:V=>u(o.proposalInsuredList[0].proposalInsuredProductList[0].productId)},{"right-icon":m(()=>[i(I,{ref_for:!0,ref:V=>w.value[o.proposalInsuredList[0].proposalInsuredProductList[0].productId]=V,shape:"square",name:o.proposalInsuredList[0].proposalInsuredProductList[0].productId,onClick:Ie(V=>u(o.proposalInsuredList[0].proposalInsuredProductList[0].productId),["stop"])},null,8,["name","onClick"])]),title:m(()=>[t("div",pt,[t("div",_t,S(o.proposalInsuredList[0].proposalInsuredProductList[0].productName),1)])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])])])]),_:1},8,["show"])])}}});var ht=z(vt,[["__scopeId","data-v-1cf5306a"]]);const ft=a=>(H("data-v-3b52eff6"),a=a(),J(),a),mt={class:"search-wrap"},gt={class:"page-proposal-list"},kt={class:"check-button"},yt={key:1,class:"van-sticky"},Ct={class:"add-plan"},It=U(" \u5DF2\u9009"),Pt={class:"has-select-product"},Lt=U("\u6B3E\u4EA7\u54C1 "),$t=ft(()=>t("span",{class:"icon"},null,-1)),xt=U("\u6DFB\u52A0\u8BA1\u5212\u4E66"),wt=q({props:{isCreateProposal:{type:Boolean,default:!0}},setup(a){const n=Y({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productId:void 0,proposalList:[],showFooter:!0}),{searchValue:_,tagLists:w,isOpen:h,loading:g,finished:C,refreshing:p,productList:u,selectProduct:r,insurerCodeList:k,showCategory:I,productTotal:P,showFooter:f}=O(n),[L,$]=ee(),[o,V]=ee(),E=Ee(),Z=Pe(),Q=Le(),{isCreateProposal:A}=Q.query,se=R(A?"repeatAdd":"add"),j=()=>{Re({title:_.value,insurerCodeList:k.value,showCategory:I.value,excludeProductIdList:E.$state.excludeProduct||[],pageNum:1,pageSize:999}).then(l=>{const{code:s,data:x,total:W}=l;s==="10000"&&(console.log(x),u.value=x==null?void 0:x.datas,P.value=W)})},ae=l=>{j()},le=l=>{const{selectInsureCode:s,selectCategory:x}=l;k.value=s,I.value=x,j()},X=()=>{p.value&&(u.value=[],p.value=!1),j(),g.value=!1,P.value===u.value.length&&(C.value=!0)},ne=()=>{Z.push({path:"historyProposalList"})},ue=te(()=>{var x;const{birthday:l,gender:s}=((x=E.$state.proposalInfo.proposalInsuredList)==null?void 0:x[0])||{};return{birthday:l,gender:s}}),M=te(()=>u.value.length>0),re=l=>{f.value=!1,n.productId=l.productId,$(!0)},ce=l=>{n.selectProduct=l},de=()=>{const l=n.proposalList.filter(s=>n.selectProduct.includes(s.proposalInsuredList[0].proposalInsuredProductList[0].productId));E.setTrialData(l),Z.push({path:"/proposal/createProposal"})},ie=()=>{$(!1)},pe=l=>{if(A){n.proposalList.push(l),f.value=!0,n.selectProduct.push(l.proposalInsuredList[0].proposalInsuredProductList[0].productId),$(!1);return}E.setTrialData([l]),$(!1),Z.push({path:"/proposal/createProposal",query:Q.query})},_e=()=>{C.value=!0,g.value=!0,X()};return G(()=>r,l=>{console.log("newVal",l)},{deep:!0,immediate:!0}),(l,s)=>{const x=v("van-search"),W=v("van-checkbox"),ve=v("van-checkbox-group"),he=v("van-list"),fe=v("van-pull-refresh"),me=v("van-button"),ge=v("ProPageWrap");return d(),y(T,null,[i(ge,{class:"page-proposal"},{default:m(()=>[t("div",mt,[i(x,{modelValue:e(_),"onUpdate:modelValue":s[0]||(s[0]=c=>b(_)?_.value=c:null),placeholder:"\u641C\u7D22\u8BA1\u5212\u4E66",shape:"round",class:"search",onSearch:ae},null,8,["modelValue"]),e(M)?(d(),F(lt,{key:0,filter:e(h),"onUpdate:filter":s[1]||(s[1]=c=>b(h)?h.value=c:null),"filter-class":"filter-area",onOnSelectInsure:le},null,8,["filter"])):B("",!0)]),t("div",gt,[i(fe,{modelValue:e(p),"onUpdate:modelValue":s[4]||(s[4]=c=>b(p)?p.value=c:null),onRefresh:_e},{default:m(()=>[i(he,{loading:e(g),"onUpdate:loading":s[3]||(s[3]=c=>b(g)?g.value=c:null),finished:e(C),"finished-text":e(M)?"-\xA0\u5DF2\u7ECF\u5230\u5E95\u4E86\u54E6\xA0-":"",onLoad:X},{default:m(()=>[(d(!0),y(T,null,N(e(u),c=>(d(),F(We,{key:c.id,"product-info":c==null?void 0:c.showConfig,onClick:K=>re(c)},$e({_:2},[e(A)?{name:"checkedProduct",fn:m(()=>[t("div",kt,[i(ve,{modelValue:e(r),"onUpdate:modelValue":s[2]||(s[2]=K=>b(r)?r.value=K:null)},{default:m(()=>[i(W,{name:c.productId,shape:"square"},null,8,["name"])]),_:2},1032,["modelValue"])])])}:void 0]),1032,["product-info","onClick"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])]),e(M)?B("",!0):(d(),F(we,{key:0,"empty-img":e(xe),title:"\u6CA1\u6709\u627E\u5230\u76F8\u5173\u5185\u5BB9~","empty-class":"empty-select"},null,8,["empty-img"])),e(A)&&e(f)?(d(),y("div",yt,[t("div",Ct,[t("p",{class:"has-select",onClick:s[5]||(s[5]=c=>e(V)(!e(o)))},[It,t("span",Pt,S(e(r).length),1),Lt,$t]),i(me,{type:"primary",disabled:!e(r).length,onClick:de},{default:m(()=>[xt]),_:1},8,["disabled"])])])):B("",!0),i(ht,{modelValue:e(r),"onUpdate:modelValue":s[6]||(s[6]=c=>b(r)?r.value=c:null),"proposal-list":e(n).proposalList,"is-show":e(o),onClose:s[7]||(s[7]=c=>e(V)(!1)),onChecked:ce},null,8,["modelValue","proposal-list","is-show"]),e(L)?(d(),F(Ae,{key:2,"is-show":e(L),type:se.value,insured:e(ue),"product-id":e(n).productId,onClose:ie,onFinished:pe},null,8,["is-show","type","insured","product-id"])):B("",!0)]),_:1}),e(A)?B("",!0):(d(),F(De,{key:0,"button-image":e(nt),onClick:ne},null,8,["button-image"]))],64)}}});var Ut=z(wt,[["__scopeId","data-v-3b52eff6"]]);export{Ut as default};
