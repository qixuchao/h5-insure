import{_ as e,d as a,t as s,r as o,o as t,c as l,a as r,b as d,u as c,e as i,n as u,f as n,g as p,I as m,h as v,i as g,j as f,k as h,l as C,m as L,w as y,p as k,F as _,q as P,P as I,s as b,T as x}from"./index-df1d7325.js";import{P as j}from"./index-87f4c8e2.js";import{L as w}from"./index-9c8fe513.js";import{_ as V}from"./index-18e08912.js";import{S as T}from"./index-ece6be5f.js";import{_ as U}from"./empty-ae586b6c.js";import{q as M}from"./product-9cc1d2d7.js";import{P as N}from"./trial-5cc08684.js";const F={class:"com-product-item"},S={class:"content-wrap"},q={class:"product-image"},O={class:"company-name"},R={class:"product-info"},D={class:"title"},W={class:"description"},z={class:"price-item"},E={class:"price"};var G=e(a({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const a=e,{productInfo:v}=s(a),g=o({checked:!1});return s(g),(e,a)=>{var s;const o=m;return t(),l("div",F,[r("div",S,[r("div",q,[d(o,{src:c(v).image},null,8,["src"]),r("div",O,i(null==(s=c(v).insurerName)?void 0:s.slice(0,6)),1),c(v).label?(t(),l("div",{key:0,class:u({tag:!0,news:"新品"===c(v).label,push:"推荐"===c(v).label})},i(c(v).label),3)):n("",!0)]),r("div",R,[r("p",D,i(c(v).productFullName),1),r("p",W,i(c(v).desc),1),r("p",z,[r("span",E,i(c(v).price),1),r("span",null,i(c(v).amountUnit),1)])]),p(e.$slots,"checkedProduct",{},void 0,!0)])])}}}),[["__scopeId","data-v-2ef5a5b8"]]);const $={class:"search-wrap"},A={class:"article-tag"},B=["onClick"],H={class:"page-proposal-list"},J=a({name:"productList"});var K=e(a({...J,setup(e){const a=v();g();const p=o({searchValue:"",tagLists:[],loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],productCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[],firstLoading:!0}),{searchValue:m,tagLists:F,loading:S,finished:q,refreshing:O,productList:R,selectProduct:D,insurerCodeList:W,productCategory:z,productTotal:E,showFooter:J}=s(p),K=()=>{p.firstLoading&&x.loading("加载中..."),M({keyword:m.value,insurerCodeList:W.value,productCategory:z.value,pageNum:1,pageSize:999}).then((e=>{const{code:a,data:s,total:o}=e;"10000"===a&&(R.value=s,E.value=o)})).finally((()=>{x.clear(),p.firstLoading=!1}))},Q=e=>{K()},X=f(0),Y=()=>{var e;O.value&&(R.value=[],O.value=!1),K(),S.value=!1,E.value===(null==(e=R.value)?void 0:e.length)&&(q.value=!0)},Z=h((()=>{var e;return(null==(e=R.value)?void 0:e.length)>0})),ee=()=>{q.value=!0,S.value=!0,Y()};return(e,s)=>{const o=T,v=V,g=w,f=j,h=C("ProPageWrap");return t(),L(h,{class:"page-proposal"},{default:y((()=>[r("div",$,[d(o,{modelValue:c(m),"onUpdate:modelValue":s[0]||(s[0]=e=>k(m)?m.value=e:null),placeholder:"请输入产品名称进行搜索",shape:"round",class:"search","clear-trigger":"always","show-action":"",clearable:"",onSearch:Q},null,8,["modelValue"]),r("div",A,[(t(!0),l(_,null,P(c(I),((e,a)=>(t(),l("div",{key:a,class:u(["tag-item",{checked:c(X)===a}]),onClick:s=>((e,a)=>{X.value=a,z.value=e,K()})(e.value,a)},[r("div",{class:u(["tag-out",{checked:c(X)==a}])},[r("div",{class:u(["tag-item-text",{checked:c(X)==a}])},i(e.label),3)],2)],10,B)))),128))])]),c(Z)||c(p).firstLoading?n("",!0):(t(),L(v,{key:0,"empty-img":c(U),title:"暂无产品","empty-class":"empty-select"},null,8,["empty-img"])),r("div",H,[d(f,{modelValue:c(O),"onUpdate:modelValue":s[2]||(s[2]=e=>k(O)?O.value=e:null),onRefresh:ee},{default:y((()=>[d(g,{loading:c(S),"onUpdate:loading":s[1]||(s[1]=e=>k(S)?S.value=e:null),finished:c(q),"finished-text":c(Z)?"- 已经到底了哦 -":"",onLoad:Y},{default:y((()=>[(t(!0),l(_,null,P(c(R),(e=>(t(),L(G,{key:e.id,"product-info":e,"error-msg":c(p).errorMsgMap[e.productCode],onClick:s=>(async e=>{let s=b.premiumTrial;const{insurerCode:o="",productCode:t="",templateId:l,productClass:r}=e;[N.SINGLE_PRODUCT,N.TWO_PRODUCT].includes(r)&&(s=b.productInfo),a.push({path:s,query:{insurerCode:o,productCode:t,tenantId:9991000011,templateId:l}})})(e)},null,8,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])])])),_:1})}}}),[["__scopeId","data-v-e9081460"]]);export{K as default};
