import{g as O,v as N,L as G,r as v,h as _,m as C,y as o,n as l,z as e,I as S,F as D,E as q,V as me,C as E,M as ge,J as T,s as R,k as m,a6 as b,A as ke,a1 as H,a2 as J,B as A,X,j as U,ah as Ce,a5 as Z,af as ye,Q as Ie,x as Pe,W as Le}from"./vendor-d47732e4.js";import{_ as z,v as $e,w as we,x as xe,i as Ve}from"./index-a2c45247.js";import{q as be}from"./index-253f1749.js";import{u as Se,P as Fe}from"./index-4b24a377.js";import{a as Be,P as Ee}from"./da-4897629c.js";import{q as De}from"./proposalList-b75682b0.js";import"./trial-beb20acf.js";import"./trial-b99fae95.js";import"./useStorage-0cc7d8b3.js";const Ae={class:"com-product-item"},Te={class:"content-wrap"},Re={class:"product-image"},Ue={class:"insure-name"},Ne={class:"product-info"},Oe={class:"title"},qe={class:"description"},ze={class:"tags"},Me=O({props:{productInfo:{default:()=>({})}},setup(a){const c=a,{productInfo:i}=N(c),x=G({checked:!1});return N(x),(h,g)=>{const y=v("van-image");return _(),C("div",Ae,[o("div",Te,[o("div",Re,[l(y,{src:e(i).fileUrl},null,8,["src"]),o("p",Ue,S(e(i).insurerName),1)]),o("div",Ne,[o("p",Oe,S(e(i).title),1),o("p",qe,S(e(i).text),1),o("p",ze,[(_(!0),C(D,null,q(e(i).tags,(p,d)=>(_(),C("span",{key:d,class:"tag"},S(p),1))),128))])]),me(h.$slots,"checkedProduct",{},void 0,!0)])])}}});var We=z(Me,[["__scopeId","data-v-ecb0026c"]]);const Q=a=>(H("data-v-4e53d928"),a=a(),J(),a),je={class:"com-tab-filter"},Xe={class:"article-mid"},Ge={class:"article-tag"},He=["onClick"],Je={class:"trianele-out"},Qe=Q(()=>o("span",null,null,-1)),Ye=Q(()=>o("div",{class:"text"},"\u7B5B\u9009",-1)),Ke={class:"popup-inner"},Ze=Q(()=>o("div",{class:"popup-title"},"\u4FDD\u9669\u516C\u53F8",-1)),eo={class:"footer-button"},oo=A("\u91CD\u7F6E"),to=A("\u786E\u5B9A"),so=O({props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(a,{emit:c}){const{isPopShow:i,openPop:x,closePop:h}=$e(!1),g=G({insureList:[],checkedInsure:[]}),{insureList:y,checkedInsure:p}=N(g),d=E(""),n=(P,f)=>{d.value=f,c("onSelectInsure",{selectInsureCode:p.value,selectCategory:d.value})},k=()=>{p.value=[]},I=()=>{c("onSelectInsure",{selectInsureCode:p.value,selectCategory:d.value}),h()};return ge(()=>{be().then(P=>{const{code:f,data:L}=P;f==="10000"&&(y.value=L==null?void 0:L.map($=>({label:$.abbreviation,value:$.insurerCode})))})}),(P,f)=>{const L=v("van-button"),$=v("van-popup");return _(),C("div",je,[o("div",Xe,[o("div",Ge,[(_(!0),C(D,null,q(e(we),(t,V)=>(_(),C("div",{key:V,class:T(["tag-item",{checked:d.value==t.value}]),onClick:F=>n(t==null?void 0:t.value,t.value)},[o("div",{class:T(["tag-out",{checked:d.value==t.value}])},[o("div",{class:T(["tag-item-text",{checked:d.value==t.value}])},S(t.label),3)],2),o("div",Je,[o("div",{class:T({triangle:d.value==t.value})},null,2)])],10,He))),128))]),a.filter?(_(),C("div",{key:0,class:"filter",onClick:f[0]||(f[0]=(...t)=>e(x)&&e(x)(...t))},[Qe,Ye,l(xe,{name:"filter"})])):R("",!0),l($,{show:e(i),position:"right","close-on-click-overlay":"",style:ke(a.popupStyle||{width:"322px",height:"100%",padding:"0 15px"}),onClickOverlay:e(h)},{default:m(()=>[o("div",Ke,[Ze,l(Ve,{modelValue:e(p),"onUpdate:modelValue":f[1]||(f[1]=t=>b(p)?p.value=t:null),options:e(y)},null,8,["modelValue","options"])]),o("div",eo,[l(L,{plain:"",type:"primary",onClick:k},{default:m(()=>[oo]),_:1}),l(L,{type:"primary",onClick:I},{default:m(()=>[to]),_:1})])]),_:1},8,["show","style","onClickOverlay"])])])}}});var ao=z(so,[["__scopeId","data-v-4e53d928"]]);const lo=a=>(H("data-v-1c708713"),a=a(),J(),a),no={class:"com-trial-product-wrapper"},uo={class:"container"},ro=lo(()=>o("span",{class:"title"}," \u5DF2\u9009\u4EA7\u54C1 ",-1)),co={class:"popup-body"},io={class:"cell-title"},po={class:"title"},_o=O({props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(a,{emit:c}){const i=a,x=E([]),h=E([]),g=E({isShow:i.isShow}),y=()=>{c("close")},p=()=>{h.value=[],c("checked",[])},d=n=>{var k,I,P;(P=(I=(k=x==null?void 0:x.value)==null?void 0:k[n])==null?void 0:I.toggle)==null||P.call(I),c("checked",h.value)};return X(()=>i.isShow,n=>{g.value.isShow=n}),X(()=>i.modalValue,(n=[])=>{h.value=n},{deep:!0,immediate:!0}),(n,k)=>{const I=v("van-checkbox"),P=v("VanCell"),f=v("van-cell-group"),L=v("van-checkbox-group"),$=v("VanPopup");return _(),C("div",no,[l($,{show:g.value.isShow,"onUpdate:show":k[1]||(k[1]=t=>g.value.isShow=t),position:"bottom",onClose:y},{default:m(()=>[o("div",uo,[o("div",{class:"popup-header"},[o("span",{class:"clear-all",onClick:p}," \u6E05\u7A7A\u9009\u9879 "),ro,o("span",{onClick:y},"X")]),o("div",co,[l(L,{modelValue:h.value,"onUpdate:modelValue":k[0]||(k[0]=t=>h.value=t)},{default:m(()=>[l(f,{inset:""},{default:m(()=>[(_(!0),C(D,null,q(a.proposalList,t=>(_(),U(P,{key:t.proposalInsuredList[0].proposalInsuredProductList[0].productId,title:t.proposalInsuredList[0].proposalInsuredProductList[0].productName,onClick:V=>d(t.proposalInsuredList[0].proposalInsuredProductList[0].productId)},{"right-icon":m(()=>[l(I,{ref_for:!0,ref:V=>x.value[t.proposalInsuredList[0].proposalInsuredProductList[0].productId]=V,shape:"square",name:t.proposalInsuredList[0].proposalInsuredProductList[0].productId,onClick:Ce(V=>d(t.proposalInsuredList[0].proposalInsuredProductList[0].productId),["stop"])},null,8,["name","onClick"])]),title:m(()=>[o("div",io,[o("div",po,S(t.proposalInsuredList[0].proposalInsuredProductList[0].productName),1)])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])])])]),_:1},8,["show"])])}}});var vo=z(_o,[["__scopeId","data-v-1c708713"]]);const ho=a=>(H("data-v-f2c257b2"),a=a(),J(),a),fo={class:"search-wrap"},mo={class:"page-proposal-list"},go={class:"check-button"},ko={key:0,class:"van-sticky"},Co={class:"add-plan"},yo=A(" \u5DF2\u9009"),Io={class:"has-select-product"},Po=A("\u6B3E\u4EA7\u54C1 "),Lo=ho(()=>o("span",{class:"icon"},null,-1)),$o=A("\u6DFB\u52A0\u8BA1\u5212\u4E66"),wo=O({props:{isCreateProposal:{type:Boolean,default:!0}},setup(a){const c=G({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productId:void 0,proposalList:[],showFooter:!0}),{searchValue:i,tagLists:x,isOpen:h,loading:g,finished:y,refreshing:p,productList:d,selectProduct:n,insurerCodeList:k,showCategory:I,productTotal:P,showFooter:f}=N(c),[L,$]=Z(),[t,V]=Z(),F=Se(),M=ye(),ee=Ie(),{isCreateProposal:B}=ee.query,oe=E(B?"repeatAdd":"add"),W=()=>{De({title:i.value,insurerCodeList:k.value,showCategory:I.value,excludeProductIdList:F.$state.excludeProduct||[],pageNum:1,pageSize:999}).then(u=>{const{code:s,data:w,total:j}=u;s==="10000"&&(console.log(w),d.value=w==null?void 0:w.datas,P.value=j)})},te=u=>{W()},se=u=>{const{selectInsureCode:s,selectCategory:w}=u;k.value=s,I.value=w,W()},Y=()=>{p.value&&(d.value=[],p.value=!1),W(),g.value=!1,P.value===d.value.length&&(y.value=!0)},ae=()=>{M.push({path:"historyProposalList"})},le=Pe(()=>{var w;const{birthday:u,gender:s}=((w=F.$state.proposalInfo.proposalInsuredList)==null?void 0:w[0])||{};return{birthday:u,gender:s}}),ne=u=>{f.value=!1,c.productId=u.productId,$(!0)},ue=u=>{c.selectProduct=u},re=()=>{const u=c.proposalList.filter(s=>c.selectProduct.includes(s.proposalInsuredList[0].proposalInsuredProductList[0].productId));F.setTrialData(u),M.push({path:"/proposal/createProposal"})},ce=()=>{$(!1)},de=u=>{if(B){c.proposalList.push(u),f.value=!0,$(!1);return}F.setTrialData([u]),$(!1),M.push({path:"/proposal/createProposal"})},ie=()=>{y.value=!0,g.value=!0,Y()};return X(()=>n,u=>{console.log("newVal",u)},{deep:!0,immediate:!0}),(u,s)=>{const w=v("van-search"),j=v("van-checkbox"),pe=v("van-checkbox-group"),_e=v("van-list"),ve=v("van-pull-refresh"),he=v("van-button"),fe=v("ProPageWrap");return _(),C(D,null,[l(fe,{class:"page-proposal"},{default:m(()=>[o("div",fo,[l(w,{modelValue:e(i),"onUpdate:modelValue":s[0]||(s[0]=r=>b(i)?i.value=r:null),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",shape:"round",class:"search",onSearch:te},null,8,["modelValue"]),l(ao,{filter:e(h),"onUpdate:filter":s[1]||(s[1]=r=>b(h)?h.value=r:null),"filter-class":"filter-area",onOnSelectInsure:se},null,8,["filter"])]),o("div",mo,[l(ve,{modelValue:e(p),"onUpdate:modelValue":s[4]||(s[4]=r=>b(p)?p.value=r:null),onRefresh:ie},{default:m(()=>[l(_e,{loading:e(g),"onUpdate:loading":s[3]||(s[3]=r=>b(g)?g.value=r:null),finished:e(y),"finished-text":"\u5DF2\u7ECF\u5230\u5E95\u4E86\u54E6",onLoad:Y},{default:m(()=>[(_(!0),C(D,null,q(e(d),r=>(_(),U(We,{key:r.id,"product-info":r==null?void 0:r.showConfig,onClick:K=>ne(r)},Le({_:2},[e(B)?{name:"checkedProduct",fn:m(()=>[o("div",go,[l(pe,{modelValue:e(n),"onUpdate:modelValue":s[2]||(s[2]=K=>b(n)?n.value=K:null)},{default:m(()=>[l(j,{name:r.productId,shape:"square"},null,8,["name"])]),_:2},1032,["modelValue"])])])}:void 0]),1032,["product-info","onClick"]))),128))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"])]),e(B)&&e(f)?(_(),C("div",ko,[o("div",Co,[o("p",{class:"has-select",onClick:s[5]||(s[5]=r=>e(V)(!0))},[yo,o("span",Io,S(e(n).length),1),Po,Lo]),l(he,{type:"primary",disabled:!e(n).length,onClick:re},{default:m(()=>[$o]),_:1},8,["disabled"])])])):R("",!0),l(vo,{modelValue:e(n),"onUpdate:modelValue":s[6]||(s[6]=r=>b(n)?n.value=r:null),"proposal-list":e(c).proposalList,"is-show":e(t),onClose:s[7]||(s[7]=r=>e(V)(!1)),onChecked:ue},null,8,["modelValue","proposal-list","is-show"]),e(L)?(_(),U(Fe,{key:1,"is-show":e(L),type:oe.value,insured:e(le),"product-id":e(c).productId,onClose:ce,onFinished:de},null,8,["is-show","type","insured","product-id"])):R("",!0)]),_:1}),e(B)?R("",!0):(_(),U(Ee,{key:0,"button-image":e(Be),onClick:ae},null,8,["button-image"]))],64)}}});var To=z(wo,[["__scopeId","data-v-f2c257b2"]]);export{To as default};
