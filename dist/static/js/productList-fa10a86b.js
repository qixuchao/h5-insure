import{d as e,t as a,r as s,o,c as t,a as l,b as r,u as d,n as i,e as c,f as n,g as u,_ as p,I as m,h as f,i as v,j as g,k as h,l as C,m as y,p as L,w as I,q as k,F as b,s as T,P as _,v as P,x as j,T as w,y as x,z as V,A as N}from"./index-e61895f6.js";import{P as U}from"./index-1e4f8bcc.js";import{L as R}from"./index-b0761d74.js";import{T as z,a as F}from"./index-a01217f1.js";import{q as M}from"./product-5447249a.js";import{P as O}from"./trial-4ffe2fc7.js";import{g as S}from"./third-5bc21e9a.js";import{s as q}from"./util-17e5913a.js";import{T as B}from"./infoCollection-4060f24f.js";import{g as E}from"./utils-3dc73a93.js";import"./createProposal-24f3c648.js";import"./PolicyInfo-5604d578.js";const $={class:"com-product-item"},D={class:"content-wrap"},W={class:"product-image"},A={class:"product-info"},G={class:"title"},H={class:"description"},J={class:"price-item"},K={class:"price"};var Q=p(e({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const p=e,{productInfo:f}=a(p),v=s({checked:!1});return a(v),(e,a)=>{const s=m;return o(),t("div",$,[l("div",D,[l("div",W,[r(s,{src:d(f).image},null,8,["src"]),d(f).label?(o(),t("div",{key:0,class:i({tag:!0,news:"新品"===d(f).label,push:"推荐"===d(f).label})},c(d(f).label),3)):n("",!0)]),l("div",A,[l("p",G,c(d(f).productFullName),1),l("p",H,c(d(f).desc),1),l("p",J,[l("span",K,c(d(f).price),1),l("span",null,c(d(f).amountUnit),1)])]),u(e.$slots,"checkedProduct",{},void 0,!0)])])}}}),[["__scopeId","data-v-11676667"]]);const X={class:"search-wrap"},Y={class:"article-tag"},Z=["onClick"],ee={class:"page-proposal-list"},ae=e({name:"productList"});var se=p(e({...ae,setup(e){const u=f(),p=v(),{customer:m}=p.query,$=s({searchValue:"",tagLists:[],loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],productCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",insuredList:[],productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[],firstLoading:!0}),D=g();let W=null;try{const e=JSON.parse(decodeURIComponent(m)),{idNo:a,idType:s,sex:o,name:t,...l}=e;W={...l,certNo:a,certType:s,customerName:t,customerType:1,gender:o,source:2}}catch(me){console.log(me)}const{searchValue:A,tagLists:G,loading:H,finished:J,refreshing:K,productList:ae,selectProduct:se,insurerCodeList:oe,productCategory:te,productTotal:le,showFooter:re}=a($),de=g(1),ie=()=>{var e;if(m&&!(null==(e=$.insuredList)?void 0:e.length))return;const{branchType:a}=E()||{};$.firstLoading&&w.loading("加载中..."),M({keyword:A.value,insurerCodeList:oe.value,productCategory:te.value,productClass:de.value,insuredList:$.insuredList,branchType:a,pageNum:1,pageSize:999},{loading:!0}).then((e=>{const{code:a,data:s,total:o}=e;"10000"===a&&(ae.value=s,le.value=o)})).finally((()=>{w.clear(),$.firstLoading=!1}))},ce=g(0),ne=()=>{var e;K.value&&(ae.value=[],K.value=!1),ie(),H.value=!1,le.value===(null==(e=ae.value)?void 0:e.length)&&(J.value=!0)},ue=h((()=>{var e;return(null==(e=ae.value)?void 0:e.length)>0})),pe=()=>{J.value=!0,H.value=!0,ne()};return C((()=>{W&&(()=>{const e=e=>(null==e?void 0:e.length)?e[0]:{};S(W).then((a=>{const{code:s,data:o}=a;if("10000"===s&&o){const{bankCardInfo:a=[],addressInfo:s=[],contactInfo:t=[],certInfo:l=[],...r}=o||{},d=o;d.addressInfo=e(s),d.bankCardInfo=e(a),d.contactInfo=e(t),d.certInfo=e(l),$.insuredList=[d],q(d),ie()}}))})(),setTimeout((async()=>{D.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=z,p=F,m=V,f=N,v=R,g=U,h=y("ProPageWrap");return o(),L(h,{class:"page-proposal"},{default:I((()=>[l("div",X,[r(m,{modelValue:d(A),"onUpdate:modelValue":a[1]||(a[1]=e=>k(A)?A.value=e:null),placeholder:"请输入产品名称进行搜索",onCancel:ie,onSearch:ie},{default:I((()=>[l("div",Y,[(o(!0),t(b,null,T(d(_),((e,a)=>(o(),t("div",{key:a,class:i(["tag-item",{checked:d(ce)===a}]),onClick:s=>((e,a)=>{ce.value=a,te.value=e,ie()})(e.value,a)},[l("div",{class:i(["tag-out",{checked:d(ce)==a}])},[l("div",{class:i(["tag-item-text",{checked:d(ce)==a}])},c(e.label),3)],2)],10,Z)))),128))]),r(p,{modelValue:d(de),"onUpdate:modelValue":a[0]||(a[0]=e=>k(de)?de.value=e:null),disabled:"","active-color":"var(--van-primary-color)","inactive-color":"black",fixed:!1,onChange:ie},{default:I((()=>[r(s,{name:1},{default:I((()=>[P("非组合产品")])),_:1}),r(s,{name:4},{default:I((()=>[P("组合产品")])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])]),r(g,{modelValue:d(K),"onUpdate:modelValue":a[3]||(a[3]=e=>k(K)?K.value=e:null),onRefresh:pe},{default:I((()=>[d(ue)||d($).firstLoading?n("",!0):(o(),L(f,{key:0,"empty-img":d(j),title:"暂无产品","empty-class":"empty-select"},null,8,["empty-img"])),l("div",ee,[r(v,{loading:d(H),"onUpdate:loading":a[2]||(a[2]=e=>k(H)?H.value=e:null),finished:d(J),"finished-text":d(ue)?"- 已经到底了哦 -":"",onLoad:ne},{default:I((()=>[(o(!0),t(b,null,T(d(ae),(e=>(o(),L(Q,{key:e.id,"product-info":e,"error-msg":d($).errorMsgMap[e.productCode],onClick:a=>(async e=>{let a=x.premiumTrial;const{insurerCode:s="",productCode:o="",templateId:t,productClass:l}=e;B.SHORT===`${t}`?a=x.short:B.FREE===`${t}`?a=x.free:[O.SINGLE_PRODUCT,O.TWO_PRODUCT].includes(l)&&(a=x.productInfo),u.push({path:a,query:{insurerCode:s,productCode:o,tenantId:9991000011,templateId:t,productClass:l,iseeBizNo:D.value}})})(e)},null,8,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])])),_:1},8,["modelValue"])])),_:1})}}}),[["__scopeId","data-v-337ba67c"]]);export{se as default};
