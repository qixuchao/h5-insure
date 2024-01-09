import{d as e,t as a,r as s,o,c as t,a as l,b as r,u as d,e as i,n as c,f as n,g as u,_ as p,I as m,h as v,i as f,j as g,k as h,l as C,m as y,p as L,w as I,q as k,F as b,s as _,P as T,v as P,x as w,T as x,y as V,z as j,A as N}from"./index-4a5bebd7.js";import{P as U}from"./index-716c07d0.js";import{L as R}from"./index-16aa9968.js";import{T as z,a as F}from"./index-17792ead.js";import{q as M}from"./product-435adbc7.js";import{P as O}from"./trial-4e6bc4c8.js";import{g as S}from"./third-ad64bc99.js";import{s as q}from"./util-68aa261c.js";import{T as B}from"./infoCollection-db27a552.js";const E={class:"com-product-item"},$={class:"content-wrap"},D={class:"product-image"},W={class:"company-name"},A={class:"product-info"},G={class:"title"},H={class:"description"},J={class:"price-item"},K={class:"price"};var Q=p(e({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const p=e,{productInfo:v}=a(p),f=s({checked:!1});return a(f),(e,a)=>{var s;const p=m;return o(),t("div",E,[l("div",$,[l("div",D,[r(p,{src:d(v).image},null,8,["src"]),l("div",W,i(null==(s=d(v).insurerName)?void 0:s.slice(0,6)),1),d(v).label?(o(),t("div",{key:0,class:c({tag:!0,news:"新品"===d(v).label,push:"推荐"===d(v).label})},i(d(v).label),3)):n("",!0)]),l("div",A,[l("p",G,i(d(v).productFullName),1),l("p",H,i(d(v).desc),1),l("p",J,[l("span",K,i(d(v).price),1),l("span",null,i(d(v).amountUnit),1)])]),u(e.$slots,"checkedProduct",{},void 0,!0)])])}}}),[["__scopeId","data-v-2ef5a5b8"]]);const X={class:"search-wrap"},Y={class:"article-tag"},Z=["onClick"],ee={class:"page-proposal-list"},ae=e({name:"productList"});var se=p(e({...ae,setup(e){const u=v(),p=f(),{customer:m}=p.query,E=s({searchValue:"",tagLists:[],loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],productCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",insuredList:[],productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[],firstLoading:!0}),$=g();let D=null;try{const e=JSON.parse(decodeURIComponent(m)),{idNo:a,idType:s,sex:o,name:t,...l}=e;D={...l,certNo:a,certType:s,customerName:t,customerType:1,gender:o,source:2}}catch(pe){console.log(pe)}const{searchValue:W,tagLists:A,loading:G,finished:H,refreshing:J,productList:K,selectProduct:ae,insurerCodeList:se,productCategory:oe,productTotal:te,showFooter:le}=a(E),re=g(1),de=()=>{var e;m&&!(null==(e=E.insuredList)?void 0:e.length)||(E.firstLoading&&x.loading("加载中..."),M({keyword:W.value,insurerCodeList:se.value,productCategory:oe.value,productClass:re.value,insuredList:E.insuredList,pageNum:1,pageSize:999},{loading:!0}).then((e=>{const{code:a,data:s,total:o}=e;"10000"===a&&(K.value=s,te.value=o)})).finally((()=>{x.clear(),E.firstLoading=!1})))},ie=g(0),ce=()=>{var e;J.value&&(K.value=[],J.value=!1),de(),G.value=!1,te.value===(null==(e=K.value)?void 0:e.length)&&(H.value=!0)},ne=h((()=>{var e;return(null==(e=K.value)?void 0:e.length)>0})),ue=()=>{H.value=!0,G.value=!0,ce()};return C((()=>{D&&(()=>{const e=e=>(null==e?void 0:e.length)?e[0]:{};S(D).then((a=>{const{code:s,data:o}=a;if("10000"===s&&o){const{bankCardInfo:a=[],addressInfo:s=[],contactInfo:t=[],certInfo:l=[],...r}=o||{},d=o;d.addressInfo=e(s),d.bankCardInfo=e(a),d.contactInfo=e(t),d.certInfo=e(l),E.insuredList=[d],q(d),de()}}))})(),setTimeout((async()=>{$.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=z,p=F,m=j,v=N,f=R,g=U,h=y("ProPageWrap");return o(),L(h,{class:"page-proposal"},{default:I((()=>[l("div",X,[r(m,{modelValue:d(W),"onUpdate:modelValue":a[1]||(a[1]=e=>k(W)?W.value=e:null),placeholder:"请输入产品名称进行搜索",onCancel:de,onSearch:de},{default:I((()=>[l("div",Y,[(o(!0),t(b,null,_(d(T),((e,a)=>(o(),t("div",{key:a,class:c(["tag-item",{checked:d(ie)===a}]),onClick:s=>((e,a)=>{ie.value=a,oe.value=e,de()})(e.value,a)},[l("div",{class:c(["tag-out",{checked:d(ie)==a}])},[l("div",{class:c(["tag-item-text",{checked:d(ie)==a}])},i(e.label),3)],2)],10,Z)))),128))]),r(p,{modelValue:d(re),"onUpdate:modelValue":a[0]||(a[0]=e=>k(re)?re.value=e:null),disabled:"","active-color":"var(--van-primary-color)","inactive-color":"black",fixed:!1,onChange:de},{default:I((()=>[r(s,{name:1},{default:I((()=>[P("非组合产品")])),_:1}),r(s,{name:4},{default:I((()=>[P("组合产品")])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])]),r(g,{modelValue:d(J),"onUpdate:modelValue":a[3]||(a[3]=e=>k(J)?J.value=e:null),onRefresh:ue},{default:I((()=>[d(ne)||d(E).firstLoading?n("",!0):(o(),L(v,{key:0,"empty-img":d(w),title:"暂无产品","empty-class":"empty-select"},null,8,["empty-img"])),l("div",ee,[r(f,{loading:d(G),"onUpdate:loading":a[2]||(a[2]=e=>k(G)?G.value=e:null),finished:d(H),"finished-text":d(ne)?"- 已经到底了哦 -":"",onLoad:ce},{default:I((()=>[(o(!0),t(b,null,_(d(K),(e=>(o(),L(Q,{key:e.id,"product-info":e,"error-msg":d(E).errorMsgMap[e.productCode],onClick:a=>(async e=>{let a=V.premiumTrial;const{insurerCode:s="",productCode:o="",templateId:t,productClass:l}=e;B.SHORT===`${t}`?a=V.short:B.FREE===`${t}`?a=V.free:[O.SINGLE_PRODUCT,O.TWO_PRODUCT].includes(l)&&(a=V.productInfo),u.push({path:a,query:{insurerCode:s,productCode:o,tenantId:9991000011,templateId:t,iseeBizNo:$.value}})})(e)},null,8,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])])),_:1},8,["modelValue"])])),_:1})}}}),[["__scopeId","data-v-48b90112"]]);export{se as default};
