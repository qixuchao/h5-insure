import{_ as a,d as e,df as s,r,j as t,t as l,h as o,k as i,m as n,o as d,p as u,w as p,b as c,u as m,q as v,a as f,c as h,F as g,s as y,e as L,v as k,cp as I,cD as _,aN as b,A as x,x as P,f as V,aW as j,T as C,ck as N,aH as O,bC as $,aM as M}from"./index-fef381c5.js";import{L as T}from"./index-d3836514.js";import{_ as w}from"./index-b97a0c5f.js";import{d as E,h as q}from"./proposalList-37406455.js";import{a as U,b as A,t as S}from"./format-31cde443.js";import{R as W}from"./product-7bbf9c44.js";const z={class:"proposal-content"},D={class:"title"},F={class:"premium"},H={class:"insure-info"},R={class:"operate-btn"};var B=a(e({__name:"index",setup(a){const e=s(),B=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保障期间",dataIndex:"coveragePeriod",render:a=>U(null==a?void 0:a.coveragePeriod)},{title:"交费期间",dataIndex:"chargePeriod",width:110,render:a=>A(null==a?void 0:a.chargePeriod)},{title:"保费",dataIndex:"premium",width:120,render:a=>S(null==a?void 0:a.initialPremium)}],G=r({historyList:[],searchValue:""}),J=t(!1),K=t(!1),Q=t(1),{historyList:X,searchValue:Y}=l(G),Z=o(),aa=a=>{const e=W.find((e=>+e.value==+a));return e&&e.label||"本人"},ea=()=>{q({name:Y.value,pageNum:Q.value,pageSize:20,relationUserType:2}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(1===Q.value?X.value=s.datas||[]:X.value=X.value.concat(s.datas),J.value=!1,Q.value+=1,K.value=X.value.length>=s.total)}))},sa=a=>a===+M.MALE,ra=a=>{if(a.proposalName)return a.proposalName;if(a.proposalInsuredVOList.length>1){const e=a.proposalInsuredVOList.find((a=>1===a.relationToMainInsured||null===a.relationToMainInsured));if(e){const{name:a,gender:s}=e;return sa(s)?`${a}先生的计划书`:`${a}女士的计划书`}}if(1===a.proposalInsuredVOList.length){const{name:e}=a.proposalInsuredVOList[0],{gender:s}=a.proposalInsuredVOList[0];return sa(s)?`${e}先生的计划书`:`${e}女士的计划书`}return"计划书"},ta=a=>{let e=[];return a.forEach((a=>{e=e.concat(a.riskList)})),e},la=a=>{let e=0;return a.forEach((a=>{a.riskList.forEach((a=>{null!==a.initialPremium&&(e+=+a.initialPremium)}))})),e},oa=()=>{ea()},ia=i((()=>X.value.length>0)),na=a=>{Y.value=a,Q.value=1,ea()};return(a,s)=>{const r=N,t=O,l=T,o=n("ProPageWrap"),i=$;return d(),u(i,{"theme-vars":m(e)},{default:p((()=>[c(o,{class:"page-history-proposal"},{default:p((()=>[c(r,{modelValue:m(Y),"onUpdate:modelValue":s[0]||(s[0]=a=>v(Y)?Y.value=a:null),placeholder:"请输入被保人姓名/计划书名称",shape:"round",class:"search",onSearch:na},null,8,["modelValue"]),f("div",z,[c(l,{loading:m(J),"onUpdate:loading":s[1]||(s[1]=a=>v(J)?J.value=a:null),finished:m(K),"finished-text":m(ia)?"- 没有更多了 -":"",onLoad:oa},{default:p((()=>[(d(!0),h(g,null,y(m(X),(a=>(d(),h("div",{key:a.id,class:"proposal-item"},[f("div",D,L(a.proposalName||ra(a)),1),f("p",F,[k(" 总保费："),f("span",null,"¥"+L(m(I)(a.totalPremium)),1)]),(d(!0),h(g,null,y(a.proposalInsuredVOList,((a,e)=>(d(),h("div",{key:`proposal_${e}`},[f("p",H,L(a.name)+" / "+L(aa(a.relationToMainInsured))+" / "+L(m(_)[null==a?void 0:a.gender])+" / "+L(m(b)().diff(null==a?void 0:a.birthday,"y")+"岁")+" / "+L(`首年保费 ${m(I)(la(a.productList))}元`),1),c(w,{columns:B,class:"table","data-source":ta(a.productList)},null,8,["data-source"])])))),128)),f("div",R,[c(t,{plain:"",round:"",type:"primary",class:"del-btn",onClick:e=>{return s=a.id,void j.confirm({message:"是否确定删除计划书？"}).then((()=>{E(s).then((a=>{const{code:e}=a;"10000"===e&&(C.success("删除成功"),Q.value=1,ea())}))})).catch((()=>{}));var s}},{default:p((()=>[k("删除")])),_:2},1032,["onClick"]),c(t,{plain:"",round:"",type:"primary",onClick:e=>{return s=a.id,void Z.push({path:"/proposal/createProposal",query:{id:s}});var s}},{default:p((()=>[k("编辑")])),_:2},1032,["onClick"]),c(t,{plain:"",round:"",type:"primary",onClick:e=>{return s=a.id,void Z.push({path:"compositionProposal",query:{id:s}});var s}},{default:p((()=>[k("预览")])),_:2},1032,["onClick"])])])))),128))])),_:1},8,["loading","finished","finished-text"])]),m(ia)||m(J)?V("",!0):(d(),u(x,{key:0,"empty-img":m(P),title:"暂无历史计划书","empty-class":"empty-select"},null,8,["empty-img"]))])),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-7bf90137"]]);export{B as default};
