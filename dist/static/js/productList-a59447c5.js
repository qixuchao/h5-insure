import{d as e,t as a,r as s,o,c as t,a as l,b as r,u as d,e as i,n as c,f as n,g as u,_ as p,I as m,h as f,i as v,j as g,k as h,l as C,m as y,p as L,w as I,q as k,F as b,s as T,P as _,v as P,x as j,T as w,y as x,z as V,A as N}from"./index-2ac8b6d6.js";import{P as U}from"./index-0c54e96f.js";import{L as R}from"./index-97213eee.js";import{T as z,a as F}from"./index-06df5c58.js";import{q as M}from"./product-32d5105d.js";import{P as O}from"./trial-cb24e467.js";import{g as S}from"./third-cab4c3a3.js";import{s as q}from"./util-a8765799.js";import{T as B}from"./infoCollection-4aaf49a5.js";import{g as D}from"./utils-48a9b4f8.js";import"./createProposal-1f031c3d.js";import"./PolicyInfo-ab4c8e92.js";import"./cloneDeep-ea85aaaa.js";const E={class:"com-product-item"},$={class:"content-wrap"},W={class:"product-image"},A={class:"company-name"},G={class:"product-info"},H={class:"title"},J={class:"description"},K={class:"price-item"},Q={class:"price"};var X=p(e({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const p=e,{productInfo:f}=a(p),v=s({checked:!1});return a(v),(e,a)=>{var s;const p=m;return o(),t("div",E,[l("div",$,[l("div",W,[r(p,{src:d(f).image},null,8,["src"]),l("div",A,i(null==(s=d(f).insurerName)?void 0:s.slice(0,6)),1),d(f).label?(o(),t("div",{key:0,class:c({tag:!0,news:"新品"===d(f).label,push:"推荐"===d(f).label})},i(d(f).label),3)):n("",!0)]),l("div",G,[l("p",H,i(d(f).productFullName),1),l("p",J,i(d(f).desc),1),l("p",K,[l("span",Q,i(d(f).price),1),l("span",null,i(d(f).amountUnit),1)])]),u(e.$slots,"checkedProduct",{},void 0,!0)])])}}}),[["__scopeId","data-v-2ef5a5b8"]]);const Y={class:"search-wrap"},Z={class:"article-tag"},ee=["onClick"],ae={class:"page-proposal-list"},se=e({name:"productList"});var oe=p(e({...se,setup(e){const u=f(),p=v(),{customer:m}=p.query,E=s({searchValue:"",tagLists:[],loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],productCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",insuredList:[],productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[],firstLoading:!0}),$=g();let W=null;try{const e=JSON.parse(decodeURIComponent(m)),{idNo:a,idType:s,sex:o,name:t,...l}=e;W={...l,certNo:a,certType:s,customerName:t,customerType:1,gender:o,source:2}}catch(me){console.log(me)}const{searchValue:A,tagLists:G,loading:H,finished:J,refreshing:K,productList:Q,selectProduct:se,insurerCodeList:oe,productCategory:te,productTotal:le,showFooter:re}=a(E),de=g(1),ie=()=>{var e;if(m&&!(null==(e=E.insuredList)?void 0:e.length))return;const{branchType:a}=D()||{};E.firstLoading&&w.loading("加载中..."),M({keyword:A.value,insurerCodeList:oe.value,productCategory:te.value,productClass:de.value,insuredList:E.insuredList,branchType:a,pageNum:1,pageSize:999},{loading:!0}).then((e=>{const{code:a,data:s,total:o}=e;"10000"===a&&(Q.value=s,le.value=o)})).finally((()=>{w.clear(),E.firstLoading=!1}))},ce=g(0),ne=()=>{var e;K.value&&(Q.value=[],K.value=!1),ie(),H.value=!1,le.value===(null==(e=Q.value)?void 0:e.length)&&(J.value=!0)},ue=h((()=>{var e;return(null==(e=Q.value)?void 0:e.length)>0})),pe=()=>{J.value=!0,H.value=!0,ne()};return C((()=>{W&&(()=>{const e=e=>(null==e?void 0:e.length)?e[0]:{};S(W).then((a=>{const{code:s,data:o}=a;if("10000"===s&&o){const{bankCardInfo:a=[],addressInfo:s=[],contactInfo:t=[],certInfo:l=[],...r}=o||{},d=o;d.addressInfo=e(s),d.bankCardInfo=e(a),d.contactInfo=e(t),d.certInfo=e(l),E.insuredList=[d],q(d),ie()}}))})(),setTimeout((async()=>{$.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=z,p=F,m=V,f=N,v=R,g=U,h=y("ProPageWrap");return o(),L(h,{class:"page-proposal"},{default:I((()=>[l("div",Y,[r(m,{modelValue:d(A),"onUpdate:modelValue":a[1]||(a[1]=e=>k(A)?A.value=e:null),placeholder:"请输入产品名称进行搜索",onCancel:ie,onSearch:ie},{default:I((()=>[l("div",Z,[(o(!0),t(b,null,T(d(_),((e,a)=>(o(),t("div",{key:a,class:c(["tag-item",{checked:d(ce)===a}]),onClick:s=>((e,a)=>{ce.value=a,te.value=e,ie()})(e.value,a)},[l("div",{class:c(["tag-out",{checked:d(ce)==a}])},[l("div",{class:c(["tag-item-text",{checked:d(ce)==a}])},i(e.label),3)],2)],10,ee)))),128))]),r(p,{modelValue:d(de),"onUpdate:modelValue":a[0]||(a[0]=e=>k(de)?de.value=e:null),disabled:"","active-color":"var(--van-primary-color)","inactive-color":"black",fixed:!1,onChange:ie},{default:I((()=>[r(s,{name:1},{default:I((()=>[P("非组合产品")])),_:1}),r(s,{name:4},{default:I((()=>[P("组合产品")])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])]),r(g,{modelValue:d(K),"onUpdate:modelValue":a[3]||(a[3]=e=>k(K)?K.value=e:null),onRefresh:pe},{default:I((()=>[d(ue)||d(E).firstLoading?n("",!0):(o(),L(f,{key:0,"empty-img":d(j),title:"暂无产品","empty-class":"empty-select"},null,8,["empty-img"])),l("div",ae,[r(v,{loading:d(H),"onUpdate:loading":a[2]||(a[2]=e=>k(H)?H.value=e:null),finished:d(J),"finished-text":d(ue)?"- 已经到底了哦 -":"",onLoad:ne},{default:I((()=>[(o(!0),t(b,null,T(d(Q),(e=>(o(),L(X,{key:e.id,"product-info":e,"error-msg":d(E).errorMsgMap[e.productCode],onClick:a=>(async e=>{let a=x.premiumTrial;const{insurerCode:s="",productCode:o="",templateId:t,productClass:l}=e;B.SHORT===`${t}`?a=x.short:B.FREE===`${t}`?a=x.free:[O.SINGLE_PRODUCT,O.TWO_PRODUCT].includes(l)&&(a=x.productInfo),u.push({path:a,query:{insurerCode:s,productCode:o,tenantId:9991000011,templateId:t,productClass:l,iseeBizNo:$.value}})})(e)},null,8,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])])),_:1},8,["modelValue"])])),_:1})}}}),[["__scopeId","data-v-4e700280"]]);export{oe as default};
