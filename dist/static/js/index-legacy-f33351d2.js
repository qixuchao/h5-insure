!function(){var e=document.createElement("style");e.innerHTML=".page-history-proposal[data-v-5f363c3e] .van-search{margin:.4rem 0}.page-history-proposal[data-v-5f363c3e] .search{width:100%;min-height:.74667rem;line-height:.74667rem}.page-history-proposal[data-v-5f363c3e] .search .van-search__content{border-radius:.10667rem}.page-history-proposal[data-v-5f363c3e] .search .van-search__content .van-cell{padding:0}.page-history-proposal .proposal-content[data-v-5f363c3e]{padding:0 .4rem}.page-history-proposal .proposal-content .proposal-item[data-v-5f363c3e]{background:#fafafa;border-radius:.26667rem;padding:.4rem .26667rem 0}.page-history-proposal .proposal-content .proposal-item[data-v-5f363c3e]:not(:first-child){margin-top:.26667rem}.page-history-proposal .proposal-content .proposal-item .title[data-v-5f363c3e]{font-size:.37333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:.53333rem}.page-history-proposal .proposal-content .proposal-item .premium[data-v-5f363c3e]{font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:.49333rem;margin:.08rem 0 .18667rem}.page-history-proposal .proposal-content .proposal-item .premium>span[data-v-5f363c3e]{color:#ff5840;font-weight:700}.page-history-proposal .proposal-content .proposal-item[data-v-5f363c3e] .table-header .table-cell{background:#f2f2f2;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.44rem}.page-history-proposal .proposal-content .proposal-item .operate-btn[data-v-5f363c3e]{padding:.4rem 0;display:flex;justify-content:flex-end}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-5f363c3e]{height:.8rem;font-size:.37333rem;border-radius:.42667rem;border:1px solid #0d6efe}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-5f363c3e]:not(:first-child){margin-left:.21333rem}.page-history-proposal .proposal-content .proposal-item .operate-btn .del-btn[data-v-5f363c3e]{color:#393d46;border:1px solid #e6e6eb}[data-v-5f363c3e] .van-list__finished-text{margin-bottom:.4rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-5d3b395b.js","./index-legacy-92e6914a.js","./index-legacy-bc789ffc.js","./proposalList-legacy-964e4c5a.js","./format-legacy-5c7a4129.js"],(function(e){"use strict";var a,o,t,r,n,l,i,s,p,d,c,u,m,h,g,f,v,y,b,P,x,C,_,k,S,w,F;return{setters:[function(e){a=e.g,o=e.M,t=e.E,r=e.x,n=e.ak,l=e.r,i=e.j,s=e.k,p=e.m,d=e.p,c=e.A,u=e.R,m=e.z,h=e.n,g=e.G,f=e.F,v=e.J,y=e.C,b=e.D,P=e.T},function(e){x=e._,C=e.F},function(e){_=e.P},function(e){k=e.h,S=e.d},function(e){w=e.c,F=e.a}],execute:function(){const j={class:"proposal-content"},z={class:"title"},L={class:"premium"},V=y(" 保费："),I={class:"operate-btn"},R=y("删除"),M=y("编辑"),N=y("预览");e("default",x(a({setup(e){const a=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保障期间",dataIndex:"coveragePeriod",render:e=>w(null==e?void 0:e.coveragePeriod)},{title:"缴费期间",dataIndex:"chargePeriod",width:110,render:e=>F(null==e?void 0:e.chargePeriod)},{title:"保费",dataIndex:"premium",width:120}],y=o({historyList:[],searchValue:""}),x=t(!1),T=t(!1),U=t(1),{historyList:q,searchValue:E}=r(y),A=n(),D=()=>{k({name:E.value,pageNum:U.value,pageSize:20,relationUserType:2}).then((e=>{const{code:a,data:o}=e;"10000"===a&&(1===U.value?q.value=o.datas||[]:q.value=q.value.concat(o.datas),U.value+=1,x.value=!1,T.value=q.value.length>=o.total)}))},G=()=>{D()},H=e=>{E.value=e,U.value=1,D()};return(e,o)=>{const t=l("van-search"),r=l("van-button"),n=l("van-list"),y=l("ProPageWrap");return i(),s(y,{class:"page-history-proposal"},{default:p((()=>[d(t,{modelValue:c(E),"onUpdate:modelValue":o[0]||(o[0]=e=>u(E)?E.value=e:null),placeholder:"请输入关键词",shape:"round",class:"search",onSearch:H},null,8,["modelValue"]),m("div",j,[d(n,{loading:x.value,"onUpdate:loading":o[1]||(o[1]=e=>x.value=e),finished:T.value,"finished-text":"- 没有更多了 -",onLoad:G},{default:p((()=>[(i(!0),h(f,null,g(c(q),(e=>(i(),h("div",{key:e.id,class:"proposal-item"},[m("div",z,v(e.proposalName),1),m("p",L,[V,m("span",null,"¥"+v(c(C)(e.totalPremium)),1)]),d(_,{columns:a,class:"table","data-source":e.proposalProductRiskVOList},null,8,["data-source"]),m("div",I,[d(r,{plain:"",round:"",type:"primary",class:"del-btn",onClick:a=>{return o=e.id,void b.confirm({message:"是否确定删除计划书？"}).then((()=>{S(o).then((e=>{const{code:a}=e;"10000"===a&&(P.success("删除成功"),U.value=1,D())}))})).catch((()=>{}));var o}},{default:p((()=>[R])),_:2},1032,["onClick"]),d(r,{plain:"",round:"",type:"primary",onClick:a=>{return o=e.id,void A.push({path:"/proposal/createProposal",query:{id:o}});var o}},{default:p((()=>[M])),_:2},1032,["onClick"]),d(r,{plain:"",round:"",type:"primary",onClick:a=>{return o=e.id,void A.push({path:"compositionProposal",query:{id:o}});var o}},{default:p((()=>[N])),_:2},1032,["onClick"])])])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}}),[["__scopeId","data-v-5f363c3e"]]))}}}))}();
