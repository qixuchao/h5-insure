import{d as e,t as a,r as s,o,c as t,a as l,b as r,u as d,e as c,n as i,f as u,g as n,_ as p,I as m,h as v,i as f,j as g,k as h,l as C,m as L,w as y,p as k,F as _,q as P,P as I,s as x,T as b}from"./index-39e2f33f.js";import{P as j}from"./index-cccea563.js";import{L as w}from"./index-e5d38c0f.js";import{_ as V}from"./index-d45035d7.js";import{S as T}from"./index-c89926df.js";import{_ as U}from"./empty-ae586b6c.js";import{q as M}from"./product-14acf700.js";import{P as N}from"./trial-8e199c8a.js";const F={class:"com-product-item"},S={class:"content-wrap"},q={class:"product-image"},O={class:"company-name"},R={class:"product-info"},D={class:"title"},W={class:"description"},z={class:"price-item"},E={class:"price"};var G=p(e({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const p=e,{productInfo:v}=a(p),f=s({checked:!1});return a(f),(e,a)=>{var s;const p=m;return o(),t("div",F,[l("div",S,[l("div",q,[r(p,{src:d(v).image},null,8,["src"]),l("div",O,c(null==(s=d(v).insurerName)?void 0:s.slice(0,6)),1),d(v).label?(o(),t("div",{key:0,class:i({tag:!0,news:"新品"===d(v).label,push:"推荐"===d(v).label})},c(d(v).label),3)):u("",!0)]),l("div",R,[l("p",D,c(d(v).productFullName),1),l("p",W,c(d(v).desc),1),l("p",z,[l("span",E,c(d(v).price),1),l("span",null,c(d(v).amountUnit),1)])]),n(e.$slots,"checkedProduct",{},void 0,!0)])])}}}),[["__scopeId","data-v-2ef5a5b8"]]);const $={class:"search-wrap"},A={class:"article-tag"},B=["onClick"],H={class:"page-proposal-list"},J=e({name:"productList"});var K=p(e({...J,setup(e){const n=v();f();const p=s({searchValue:"",tagLists:[],loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],productCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[],firstLoading:!0}),{searchValue:m,tagLists:F,loading:S,finished:q,refreshing:O,productList:R,selectProduct:D,insurerCodeList:W,productCategory:z,productTotal:E,showFooter:J}=a(p),K=()=>{p.firstLoading&&b.loading("加载中..."),M({keyword:m.value,insurerCodeList:W.value,productCategory:z.value,pageNum:1,pageSize:999}).then((e=>{const{code:a,data:s,total:o}=e;"10000"===a&&(R.value=s,E.value=o)})).finally((()=>{b.clear(),p.firstLoading=!1}))},Q=e=>{K()},X=g(0),Y=()=>{var e;O.value&&(R.value=[],O.value=!1),K(),S.value=!1,E.value===(null==(e=R.value)?void 0:e.length)&&(q.value=!0)},Z=h((()=>{var e;return(null==(e=R.value)?void 0:e.length)>0})),ee=()=>{q.value=!0,S.value=!0,Y()};return(e,a)=>{const s=T,v=V,f=w,g=j,h=C("ProPageWrap");return o(),L(h,{class:"page-proposal"},{default:y((()=>[l("div",$,[r(s,{modelValue:d(m),"onUpdate:modelValue":a[0]||(a[0]=e=>k(m)?m.value=e:null),placeholder:"请输入产品名称进行搜索",shape:"round",class:"search","clear-trigger":"always","show-action":"",clearable:"",onSearch:Q},null,8,["modelValue"]),l("div",A,[(o(!0),t(_,null,P(d(I),((e,a)=>(o(),t("div",{key:a,class:i(["tag-item",{checked:d(X)===a}]),onClick:s=>((e,a)=>{X.value=a,z.value=e,K()})(e.value,a)},[l("div",{class:i(["tag-out",{checked:d(X)==a}])},[l("div",{class:i(["tag-item-text",{checked:d(X)==a}])},c(e.label),3)],2)],10,B)))),128))])]),d(Z)||d(p).firstLoading?u("",!0):(o(),L(v,{key:0,"empty-img":d(U),title:"暂无产品","empty-class":"empty-select"},null,8,["empty-img"])),l("div",H,[r(g,{modelValue:d(O),"onUpdate:modelValue":a[2]||(a[2]=e=>k(O)?O.value=e:null),onRefresh:ee},{default:y((()=>[r(f,{loading:d(S),"onUpdate:loading":a[1]||(a[1]=e=>k(S)?S.value=e:null),finished:d(q),"finished-text":d(Z)?"- 已经到底了哦 -":"",onLoad:Y},{default:y((()=>[(o(!0),t(_,null,P(d(R),(e=>(o(),L(G,{key:e.id,"product-info":e,"error-msg":d(p).errorMsgMap[e.productCode],onClick:a=>(async e=>{let a=x.premiumTrial;const{insurerCode:s="",productCode:o="",templateId:t,productClass:l}=e;[N.SINGLE_PRODUCT,N.TWO_PRODUCT].includes(l)&&(a=x.productInfo),n.push({path:a,query:{insurerCode:s,productCode:o,tenantId:9991000011,templateId:t}})})(e)},null,8,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])])])),_:1})}}}),[["__scopeId","data-v-e9081460"]]);export{K as default};
