import{G as a,d as e,bH as s,A as t,r as l,aw as o,a as r,L as i,a3 as d,b as n,g as u,w as p,e as c,f as m,a0 as v,i as h,c as f,$ as y,a7 as g,E as b,j as x,aN as P,h as _,D as k,T as j,B as L,bq as C}from"./index-c26f5a93.js";import{L as V}from"./index-52b669aa.js";import{S as w}from"./index-4cb25ddf.js";import{P as I}from"./index-4bd7cf39.js";import{_ as N}from"./empty-ae586b6c.js";import{P as q}from"./index-62c17989.js";import{d as S,h as U}from"./proposalList-441fa868.js";import{a as T,b as z,t as A}from"./format-b5e9d8b9.js";const B={class:"proposal-content"},D={class:"title"},E={class:"premium"},G={class:"operate-btn"};var H=a(e({__name:"index",setup(a){const e=s(),H=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保障期间",dataIndex:"coveragePeriod",render:a=>T(null==a?void 0:a.coveragePeriod)},{title:"交费期间",dataIndex:"chargePeriod",width:110,render:a=>z(null==a?void 0:a.chargePeriod)},{title:"保费",dataIndex:"premium",width:120,render:a=>A(null==a?void 0:a.initialPremium)}],O=t({historyList:[],searchValue:""}),R=l(!1),W=l(!1),$=l(1),{historyList:F,searchValue:J}=o(O),K=r(),M=()=>{U({name:J.value,pageNum:$.value,pageSize:20,relationUserType:2}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(1===$.value?F.value=s.datas||[]:F.value=F.value.concat(s.datas),R.value=!1,$.value+=1,W.value=F.value.length>=s.total)}))},Q=()=>{M()},X=i((()=>F.value.length>0)),Y=a=>{J.value=a,$.value=1,M()};return(a,s)=>{const t=w,l=L,o=V,r=d("ProPageWrap"),i=C;return n(),u(i,{"theme-vars":m(e)},{default:p((()=>[c(r,{class:"page-history-proposal"},{default:p((()=>[c(t,{modelValue:m(J),"onUpdate:modelValue":s[0]||(s[0]=a=>v(J)?J.value=a:null),placeholder:"请输入被保人姓名/计划书名称",shape:"round",class:"search",onSearch:Y},null,8,["modelValue"]),h("div",B,[c(o,{loading:m(R),"onUpdate:loading":s[1]||(s[1]=a=>v(R)?R.value=a:null),finished:m(W),"finished-text":m(X)?"- 没有更多了 -":"",onLoad:Q},{default:p((()=>[(n(!0),f(y,null,g(m(F),(a=>(n(),f("div",{key:a.id,class:"proposal-item"},[h("div",D,b(a.proposalName),1),h("p",E,[x(" 保费："),h("span",null,"¥"+b(m(P)(a.totalPremium)),1)]),c(q,{columns:H,class:"table","data-source":a.proposalProductRiskVOList},null,8,["data-source"]),h("div",G,[c(l,{plain:"",round:"",type:"primary",class:"del-btn",onClick:e=>{return s=a.id,void k.confirm({message:"是否确定删除计划书？"}).then((()=>{S(s).then((a=>{const{code:e}=a;"10000"===e&&(j.success("删除成功"),$.value=1,M())}))})).catch((()=>{}));var s}},{default:p((()=>[x("删除")])),_:2},1032,["onClick"]),c(l,{plain:"",round:"",type:"primary",onClick:e=>{return s=a.id,void K.push({path:"/proposal/createProposal",query:{id:s}});var s}},{default:p((()=>[x("编辑")])),_:2},1032,["onClick"]),c(l,{plain:"",round:"",type:"primary",onClick:e=>{return s=a.id,void K.push({path:"compositionProposal",query:{id:s}});var s}},{default:p((()=>[x("预览")])),_:2},1032,["onClick"])])])))),128))])),_:1},8,["loading","finished","finished-text"])]),m(X)||m(R)?_("",!0):(n(),u(I,{key:0,"empty-img":m(N),title:"暂无历史计划书","empty-class":"empty-select"},null,8,["empty-img"]))])),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-3ad77c53"]]);export{H as default};
