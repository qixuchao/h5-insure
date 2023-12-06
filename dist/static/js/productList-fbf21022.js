import{d as e,t as a,r as s,o,c as t,a as l,b as r,u as d,e as i,n,f as c,g as u,_ as p,I as m,h as f,i as v,j as g,k as h,l as C,m as y,p as L,w as I,q as k,F as _,s as b,P,v as w,x,T,y as V,z as N,A as j}from"./index-460c0153.js";import{P as U}from"./index-f6b88d42.js";import{L as z}from"./index-c575e6b6.js";import{T as M,a as q}from"./index-3d8d3ebe.js";import{q as F}from"./product-39ef6d73.js";import{P as O}from"./trial-e12e2e8f.js";import{g as R}from"./third-135e1653.js";import{s as S}from"./util-1f97618f.js";const B={class:"com-product-item"},D={class:"content-wrap"},W={class:"product-image"},A={class:"company-name"},E={class:"product-info"},G={class:"title"},J={class:"description"},$={class:"price-item"},H={class:"price"};var K=p(e({__name:"productItem",props:{productInfo:{default:()=>({})},errorMsg:{default:""}},setup(e){const p=e,{productInfo:f}=a(p),v=s({checked:!1});return a(v),(e,a)=>{var s;const p=m;return o(),t("div",B,[l("div",D,[l("div",W,[r(p,{src:d(f).image},null,8,["src"]),l("div",A,i(null==(s=d(f).insurerName)?void 0:s.slice(0,6)),1),d(f).label?(o(),t("div",{key:0,class:n({tag:!0,news:"新品"===d(f).label,push:"推荐"===d(f).label})},i(d(f).label),3)):c("",!0)]),l("div",E,[l("p",G,i(d(f).productFullName),1),l("p",J,i(d(f).desc),1),l("p",$,[l("span",H,i(d(f).price),1),l("span",null,i(d(f).amountUnit),1)])]),u(e.$slots,"checkedProduct",{},void 0,!0)])])}}}),[["__scopeId","data-v-2ef5a5b8"]]);const Q={class:"search-wrap"},X={class:"article-tag"},Y=["onClick"],Z={class:"page-proposal-list"},ee=e({name:"productList"});var ae=p(e({...ee,setup(e){const u=f(),p=v(),{customer:m}=p.query,B=s({searchValue:"",tagLists:[],loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],productCategory:"",productTotal:0,checked:"",productCode:void 0,proposalList:[],showFooter:!0,productName:"",insuredList:[],productCodeList:[],errorMsgMap:{},excludeProductCodeList:[],isCreateProposal:!1,selectedProductList:[],firstLoading:!0}),D=g();let W=null;try{const e=JSON.parse(decodeURIComponent(m)),{idNo:a,idType:s,sex:o,name:t,...l}=e;W={...l,certNo:a,certType:s,customerName:t,customerType:1,gender:o,source:2}}catch(ue){console.log(ue)}const{searchValue:A,tagLists:E,loading:G,finished:J,refreshing:$,productList:H,selectProduct:ee,insurerCodeList:ae,productCategory:se,productTotal:oe,showFooter:te}=a(B),le=g(1),re=()=>{var e;m&&!(null==(e=B.insuredList)?void 0:e.length)||(B.firstLoading&&T.loading("加载中..."),F({keyword:A.value,insurerCodeList:ae.value,productCategory:se.value,productClass:le.value,insuredList:B.insuredList,pageNum:1,pageSize:999},{loading:!0}).then((e=>{const{code:a,data:s,total:o}=e;"10000"===a&&(H.value=s,oe.value=o)})).finally((()=>{T.clear(),B.firstLoading=!1})))},de=g(0),ie=()=>{var e;$.value&&(H.value=[],$.value=!1),re(),G.value=!1,oe.value===(null==(e=H.value)?void 0:e.length)&&(J.value=!0)},ne=h((()=>{var e;return(null==(e=H.value)?void 0:e.length)>0})),ce=()=>{J.value=!0,G.value=!0,ie()};return C((()=>{W&&(()=>{const e=e=>(null==e?void 0:e.length)?e[0]:{};R(W).then((a=>{const{code:s,data:o}=a;if("10000"===s&&o){const{bankCardInfo:a=[],addressInfo:s=[],contactInfo:t=[],certInfo:l=[],...r}=o||{},d=o;d.addressInfo=e(s),d.bankCardInfo=e(a),d.contactInfo=e(t),d.certInfo=e(l),B.insuredList=[d],S(d),re()}}))})(),setTimeout((async()=>{D.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=M,p=q,m=N,f=j,v=z,g=U,h=y("ProPageWrap");return o(),L(h,{class:"page-proposal"},{default:I((()=>[l("div",Q,[r(m,{modelValue:d(A),"onUpdate:modelValue":a[1]||(a[1]=e=>k(A)?A.value=e:null),placeholder:"请输入产品名称进行搜索",onCancel:re,onSearch:re},{default:I((()=>[l("div",X,[(o(!0),t(_,null,b(d(P),((e,a)=>(o(),t("div",{key:a,class:n(["tag-item",{checked:d(de)===a}]),onClick:s=>((e,a)=>{de.value=a,se.value=e,re()})(e.value,a)},[l("div",{class:n(["tag-out",{checked:d(de)==a}])},[l("div",{class:n(["tag-item-text",{checked:d(de)==a}])},i(e.label),3)],2)],10,Y)))),128))]),r(p,{modelValue:d(le),"onUpdate:modelValue":a[0]||(a[0]=e=>k(le)?le.value=e:null),disabled:"","active-color":"var(--van-primary-color)","inactive-color":"black",fixed:!1,onChange:re},{default:I((()=>[r(s,{name:1},{default:I((()=>[w("非组合产品")])),_:1}),r(s,{name:4},{default:I((()=>[w("组合产品")])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])]),r(g,{modelValue:d($),"onUpdate:modelValue":a[3]||(a[3]=e=>k($)?$.value=e:null),onRefresh:ce},{default:I((()=>[d(ne)||d(B).firstLoading?c("",!0):(o(),L(f,{key:0,"empty-img":d(x),title:"暂无产品","empty-class":"empty-select"},null,8,["empty-img"])),l("div",Z,[r(v,{loading:d(G),"onUpdate:loading":a[2]||(a[2]=e=>k(G)?G.value=e:null),finished:d(J),"finished-text":d(ne)?"- 已经到底了哦 -":"",onLoad:ie},{default:I((()=>[(o(!0),t(_,null,b(d(H),(e=>(o(),L(K,{key:e.id,"product-info":e,"error-msg":d(B).errorMsgMap[e.productCode],onClick:a=>(async e=>{let a=V.premiumTrial;const{insurerCode:s="",productCode:o="",templateId:t,productClass:l}=e;[O.SINGLE_PRODUCT,O.TWO_PRODUCT].includes(l)&&(a=V.productInfo),u.push({path:a,query:{insurerCode:s,productCode:o,tenantId:9991000011,templateId:t,iseeBizNo:D.value}})})(e)},null,8,["product-info","error-msg","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])])),_:1},8,["modelValue"])])),_:1})}}}),[["__scopeId","data-v-1afd8fc6"]]);export{ae as default};
