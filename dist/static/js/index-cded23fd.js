import{_ as a,d as e,H as s,r as t,bo as l,u as o,E as r,b as i,c as d,e as n,w as p,f as u,g as c,a7 as m,j as v,h,F as f,i as y,t as g,n as b,bA as x,k,ai as P,T as _,B as j}from"./index-d9e24409.js";import{L as C}from"./index-6dfa66a4.js";import{S as L,Z as V}from"./index-1077493d.js";/* empty css              */import{_ as I}from"./empty-ae586b6c.js";import{P as w}from"./index-00a296fa.js";import{d as N,h as S}from"./proposalList-d9e67fdc.js";import{a as U,b as q,t as T}from"./format-12461bbc.js";import"./pdfh5-008ca364.js";const z={class:"proposal-content"},A={class:"title"},B={class:"premium"},E={class:"operate-btn"};var F=a(e({__name:"index",setup(a){const e=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保障期间",dataIndex:"coveragePeriod",render:a=>U(null==a?void 0:a.coveragePeriod)},{title:"缴费期间",dataIndex:"chargePeriod",width:110,render:a=>q(null==a?void 0:a.chargePeriod)},{title:"保费",dataIndex:"premium",width:120,render:a=>T(null==a?void 0:a.premium)}],F=s({historyList:[],searchValue:""}),H=t(!1),O=t(!1),R=t(1),{historyList:W,searchValue:Z}=l(F),D=o(),G=()=>{S({name:Z.value,pageNum:R.value,pageSize:20,relationUserType:2}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(1===R.value?W.value=s.datas||[]:W.value=W.value.concat(s.datas),R.value+=1,H.value=!1,O.value=W.value.length>=s.total)}))},J=()=>{G()},K=r((()=>W.value.length>0)),M=a=>{Z.value=a,R.value=1,G()};return(a,s)=>{const t=L,l=j,o=C,r=i("ProPageWrap");return d(),n(r,{class:"page-history-proposal"},{default:p((()=>[u(t,{modelValue:c(Z),"onUpdate:modelValue":s[0]||(s[0]=a=>m(Z)?Z.value=a:null),placeholder:"请输入被保人姓名/计划书名称",shape:"round",class:"search",onSearch:M},null,8,["modelValue"]),v("div",z,[u(o,{loading:c(H),"onUpdate:loading":s[1]||(s[1]=a=>m(H)?H.value=a:null),finished:c(O),"finished-text":c(K)?"- 没有更多了 -":"",onLoad:J},{default:p((()=>[(d(!0),h(f,null,y(c(W),(a=>(d(),h("div",{key:a.id,class:"proposal-item"},[v("div",A,g(a.proposalName)+"计划书",1),v("p",B,[b(" 保费："),v("span",null,"¥"+g(c(x)(a.totalPremium)),1)]),u(w,{columns:e,class:"table","data-source":a.proposalProductRiskVOList},null,8,["data-source"]),v("div",E,[u(l,{plain:"",round:"",type:"primary",class:"del-btn",onClick:e=>{return s=a.id,void P.confirm({message:"是否确定删除计划书？"}).then((()=>{N(s).then((a=>{const{code:e}=a;"10000"===e&&(_.success("删除成功"),R.value=1,G())}))})).catch((()=>{}));var s}},{default:p((()=>[b("删除")])),_:2},1032,["onClick"]),u(l,{plain:"",round:"",type:"primary",onClick:e=>{return s=a.id,void D.push({path:"/proposal/createProposal",query:{id:s}});var s}},{default:p((()=>[b("编辑")])),_:2},1032,["onClick"]),u(l,{plain:"",round:"",type:"primary",onClick:e=>{return s=a.id,void D.push({path:"compositionProposal",query:{id:s}});var s}},{default:p((()=>[b("预览")])),_:2},1032,["onClick"])])])))),128))])),_:1},8,["loading","finished","finished-text"])]),c(K)?k("",!0):(d(),n(V,{key:0,"empty-img":c(I),title:"暂无历史计划书","empty-class":"empty-select"},null,8,["empty-img"]))])),_:1})}}}),[["__scopeId","data-v-36b7a1a3"]]);export{F as default};
