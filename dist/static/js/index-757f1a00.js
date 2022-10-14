import{h as q,y as N,N as H,r as v,k as d,p as y,A as t,s as i,B as e,L as S,F as T,H as O,Z as ke,G as R,j as ye,M as D,v as B,n as m,U as b,C as Ce,a5 as X,a6 as Y,E as U,$ as G,m as F,ac as Pe,R as ee,aa as Ie,P as Le,z as te,_ as $e}from"./vendor-1bb74b07.js";import{e as we,Z as xe}from"./empty-949c9d9c.js";import{_ as z,R as Ve,T as be,W as Se,X as Be,Z as Fe}from"./index-a9961c9d.js";import{u as Ee,P as Ae}from"./index-3e7529c0.js";import{P as De}from"./index-75634d16.js";import{q as Re}from"./proposalList-15fb51fa.js";import"./index-ced2030d.js";import"./trial-95264bee.js";import"./useDicData-83c72d2b.js";import"./trial-69cbd36c.js";const Te={class:"com-product-item"},Ue={class:"content-wrap"},Ne={class:"product-image"},qe={class:"insure-name"},Oe={class:"product-info"},ze={class:"title"},Ze={class:"description"},je={class:"tags"},Me=q({props:{productInfo:{default:()=>({})}},setup(a){const n=a,{productInfo:_}=N(n),x=H({checked:!1});return N(x),(h,g)=>{const C=v("van-image");return d(),y("div",Te,[t("div",Ue,[t("div",Ne,[i(C,{src:e(_).fileUrl},null,8,["src"]),t("p",qe,S(e(_).insurerName),1)]),t("div",Oe,[t("p",ze,S(e(_).title),1),t("p",Ze,S(e(_).text),1),t("p",je,[(d(!0),y(T,null,O(e(_).tags,(p,u)=>(d(),y("span",{key:u,class:"tag"},S(p),1))),128))])]),ke(h.$slots,"checkedProduct",{},void 0,!0)])])}}});var We=z(Me,[["__scopeId","data-v-a61e69d6"]]);const oe=a=>(X("data-v-397146ec"),a=a(),Y(),a),Ge={class:"com-tab-filter"},He={class:"article-mid"},Xe={class:"article-tag"},Ye=["onClick"],Je={class:"trianele-out"},Ke=oe(()=>t("span",null,null,-1)),Qe={class:"popup-inner"},et=oe(()=>t("div",{class:"popup-title"},"\u4FDD\u9669\u516C\u53F8",-1)),tt={class:"footer-button"},ot=U("\u91CD\u7F6E"),st=U("\u786E\u5B9A"),at=q({props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(a,{emit:n}){const{isPopShow:_,openPop:x,closePop:h}=Ve(!1),g=H({insureList:[],checkedInsure:[]}),{insureList:C,checkedInsure:p}=N(g),u=R(""),r=(I,f)=>{u.value=f,n("onSelectInsure",{selectInsureCode:p.value,selectCategory:u.value})},k=()=>{p.value=[]},P=()=>{n("onSelectInsure",{selectInsureCode:p.value,selectCategory:u.value}),h()};return ye(()=>{be().then(I=>{const{code:f,data:L}=I;f==="10000"&&(C.value=L==null?void 0:L.map($=>({label:$.abbreviation,value:$.insurerCode})))})}),(I,f)=>{const L=v("van-button"),$=v("van-popup");return d(),y("div",Ge,[t("div",He,[t("div",Xe,[(d(!0),y(T,null,O(e(Se),(o,V)=>(d(),y("div",{key:V,class:D(["tag-item",{checked:u.value==o.value}]),onClick:E=>r(o==null?void 0:o.value,o.value)},[t("div",{class:D(["tag-out",{checked:u.value==o.value}])},[t("div",{class:D(["tag-item-text",{checked:u.value==o.value}])},S(o.label),3)],2),t("div",Je,[t("div",{class:D({triangle:u.value==o.value})},null,2)])],10,Ye))),128))]),a.filter?(d(),y("div",{key:0,class:"filter",onClick:f[0]||(f[0]=(...o)=>e(x)&&e(x)(...o))},[Ke,t("div",{class:D(["text",{"has-select-condition":e(p).length>0}])},"\u7B5B\u9009",2),i(Be,{name:"filter"})])):B("",!0),i($,{show:e(_),position:"right","close-on-click-overlay":"",style:Ce(a.popupStyle||{width:"322px",height:"100%",padding:"0 15px"}),onClickOverlay:e(h)},{default:m(()=>[t("div",Qe,[et,i(Fe,{modelValue:e(p),"onUpdate:modelValue":f[1]||(f[1]=o=>b(p)?p.value=o:null),options:e(C)},null,8,["modelValue","options"])]),t("div",tt,[i(L,{plain:"",type:"primary",onClick:k},{default:m(()=>[ot]),_:1}),i(L,{type:"primary",onClick:P},{default:m(()=>[st]),_:1})])]),_:1},8,["show","style","onClickOverlay"])])])}}});var lt=z(at,[["__scopeId","data-v-397146ec"]]),nt="/static/assets/lishijihuashu.6b004484.png";const ut=a=>(X("data-v-1cf5306a"),a=a(),Y(),a),rt={class:"com-trial-product-wrapper"},ct={class:"container"},dt=ut(()=>t("span",{class:"title"}," \u5DF2\u9009\u4EA7\u54C1 ",-1)),it={class:"popup-body"},pt={class:"cell-title"},_t={class:"title"},vt=q({props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(a,{emit:n}){const _=a,x=R([]),h=R([]),g=R({isShow:_.isShow}),C=()=>{n("close")},p=()=>{h.value=[],n("checked",[])},u=r=>{var k,P,I;(I=(P=(k=x==null?void 0:x.value)==null?void 0:k[r])==null?void 0:P.toggle)==null||I.call(P),n("checked",h.value)};return G(()=>_.isShow,r=>{g.value.isShow=r}),G(()=>_.modalValue,(r=[])=>{h.value=r},{deep:!0,immediate:!0}),(r,k)=>{const P=v("van-checkbox"),I=v("VanCell"),f=v("van-cell-group"),L=v("van-checkbox-group"),$=v("VanPopup");return d(),y("div",rt,[i($,{show:g.value.isShow,"onUpdate:show":k[1]||(k[1]=o=>g.value.isShow=o),position:"bottom",onClose:C},{default:m(()=>[t("div",ct,[t("div",{class:"popup-header"},[t("span",{class:"clear-all",onClick:p}," \u6E05\u7A7A\u9009\u9879 "),dt,t("span",{class:"close",onClick:C})]),t("div",it,[i(L,{modelValue:h.value,"onUpdate:modelValue":k[0]||(k[0]=o=>h.value=o)},{default:m(()=>[i(f,{inset:""},{default:m(()=>[(d(!0),y(T,null,O(a.proposalList,o=>(d(),F(I,{key:o.proposalInsuredList[0].proposalInsuredProductList[0].productId,title:o.proposalInsuredList[0].proposalInsuredProductList[0].productName,onClick:V=>u(o.proposalInsuredList[0].proposalInsuredProductList[0].productId)},{"right-icon":m(()=>[i(P,{ref_for:!0,ref:V=>x.value[o.proposalInsuredList[0].proposalInsuredProductList[0].productId]=V,shape:"square",name:o.proposalInsuredList[0].proposalInsuredProductList[0].productId,onClick:Pe(V=>u(o.proposalInsuredList[0].proposalInsuredProductList[0].productId),["stop"])},null,8,["name","onClick"])]),title:m(()=>[t("div",pt,[t("div",_t,S(o.proposalInsuredList[0].proposalInsuredProductList[0].productName),1)])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])])])]),_:1},8,["show"])])}}});var ht=z(vt,[["__scopeId","data-v-1cf5306a"]]);const ft=a=>(X("data-v-3b52eff6"),a=a(),Y(),a),mt={class:"search-wrap"},gt={class:"page-proposal-list"},kt={class:"check-button"},yt={key:1,class:"van-sticky"},Ct={class:"add-plan"},Pt=U(" \u5DF2\u9009"),It={class:"has-select-product"},Lt=U("\u6B3E\u4EA7\u54C1 "),$t=ft(()=>t("span",{class:"icon"},null,-1)),wt=U("\u6DFB\u52A0\u8BA1\u5212\u4E66"),xt=q({props:{isCreateProposal:{type:Boolean,default:!0}},setup(a){const n=H({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productId:void 0,proposalList:[],showFooter:!0}),{searchValue:_,tagLists:x,isOpen:h,loading:g,finished:C,refreshing:p,productList:u,selectProduct:r,insurerCodeList:k,showCategory:P,productTotal:I,showFooter:f}=N(n),[L,$]=ee(),[o,V]=ee(),E=Ee(),Z=Ie(),J=Le(),{isCreateProposal:A}=J.query,se=R(A?"repeatAdd":"add"),j=()=>{Re({title:_.value,insurerCodeList:k.value,showCategory:P.value,excludeProductIdList:E.$state.excludeProduct||[],pageNum:1,pageSize:999}).then(l=>{const{code:s,data:w,total:W}=l;s==="10000"&&(console.log(w),u.value=w==null?void 0:w.datas,I.value=W)})},ae=l=>{j()},le=l=>{const{selectInsureCode:s,selectCategory:w}=l;k.value=s,P.value=w,j()},K=()=>{p.value&&(u.value=[],p.value=!1),j(),g.value=!1,I.value===u.value.length&&(C.value=!0)},ne=()=>{Z.push({path:"historyProposalList"})},ue=te(()=>{var w;const{birthday:l,gender:s}=((w=E.$state.proposalInfo.proposalInsuredList)==null?void 0:w[0])||{};return{birthday:l,gender:s}}),M=te(()=>u.value.length>0),re=l=>{f.value=!1,n.productId=l.productId,$(!0)},ce=l=>{n.selectProduct=l},de=()=>{const l=n.proposalList.filter(s=>n.selectProduct.includes(s.proposalInsuredList[0].proposalInsuredProductList[0].productId));E.setTrialData(l),Z.push({path:"/proposal/createProposal"})},ie=()=>{$(!1)},pe=l=>{if(A){n.proposalList.push(l),f.value=!0,n.selectProduct.push(l.proposalInsuredList[0].proposalInsuredProductList[0].productId),$(!1);return}E.setTrialData([l]),$(!1),Z.push({path:"/proposal/createProposal",query:J.query})},_e=()=>{C.value=!0,g.value=!0,K()};return G(()=>r,l=>{console.log("newVal",l)},{deep:!0,immediate:!0}),(l,s)=>{const w=v("van-search"),W=v("van-checkbox"),ve=v("van-checkbox-group"),he=v("van-list"),fe=v("van-pull-refresh"),me=v("van-button"),ge=v("ProPageWrap");return d(),y(T,null,[i(ge,{class:"page-proposal"},{default:m(()=>[t("div",mt,[i(w,{modelValue:e(_),"onUpdate:modelValue":s[0]||(s[0]=c=>b(_)?_.value=c:null),placeholder:"\u641C\u7D22\u8BA1\u5212\u4E66",shape:"round",class:"search",onSearch:ae},null,8,["modelValue"]),e(M)?(d(),F(lt,{key:0,filter:e(h),"onUpdate:filter":s[1]||(s[1]=c=>b(h)?h.value=c:null),"filter-class":"filter-area",onOnSelectInsure:le},null,8,["filter"])):B("",!0)]),t("div",gt,[i(fe,{modelValue:e(p),"onUpdate:modelValue":s[4]||(s[4]=c=>b(p)?p.value=c:null),onRefresh:_e},{default:m(()=>[i(he,{loading:e(g),"onUpdate:loading":s[3]||(s[3]=c=>b(g)?g.value=c:null),finished:e(C),"finished-text":e(M)?"-\xA0\u5DF2\u7ECF\u5230\u5E95\u4E86\u54E6\xA0-":"",onLoad:K},{default:m(()=>[(d(!0),y(T,null,O(e(u),c=>(d(),F(We,{key:c.id,"product-info":c==null?void 0:c.showConfig,onClick:Q=>re(c)},$e({_:2},[e(A)?{name:"checkedProduct",fn:m(()=>[t("div",kt,[i(ve,{modelValue:e(r),"onUpdate:modelValue":s[2]||(s[2]=Q=>b(r)?r.value=Q:null)},{default:m(()=>[i(W,{name:c.productId,shape:"square"},null,8,["name"])]),_:2},1032,["modelValue"])])])}:void 0]),1032,["product-info","onClick"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])]),e(M)?B("",!0):(d(),F(xe,{key:0,"empty-img":e(we),title:"\u6CA1\u6709\u627E\u5230\u76F8\u5173\u5185\u5BB9~","empty-class":"empty-select"},null,8,["empty-img"])),e(A)&&e(f)?(d(),y("div",yt,[t("div",Ct,[t("p",{class:"has-select",onClick:s[5]||(s[5]=c=>e(V)(!e(o)))},[Pt,t("span",It,S(e(r).length),1),Lt,$t]),i(me,{type:"primary",disabled:!e(r).length,onClick:de},{default:m(()=>[wt]),_:1},8,["disabled"])])])):B("",!0),i(ht,{modelValue:e(r),"onUpdate:modelValue":s[6]||(s[6]=c=>b(r)?r.value=c:null),"proposal-list":e(n).proposalList,"is-show":e(o),onClose:s[7]||(s[7]=c=>e(V)(!1)),onChecked:ce},null,8,["modelValue","proposal-list","is-show"]),e(L)?(d(),F(Ae,{key:2,"is-show":e(L),type:se.value,insured:e(ue),"product-id":e(n).productId,onClose:ie,onFinished:pe},null,8,["is-show","type","insured","product-id"])):B("",!0)]),_:1}),e(A)?B("",!0):(d(),F(De,{key:0,"button-image":e(nt),onClick:ne},null,8,["button-image"]))],64)}}});var Ut=z(xt,[["__scopeId","data-v-3b52eff6"]]);export{Ut as default};
