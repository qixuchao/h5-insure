!function(){var a=document.createElement("style");a.innerHTML=".page-history-proposal[data-v-36b7a1a3] .van-search{margin:.4rem 0}.page-history-proposal[data-v-36b7a1a3] .van-search .van-field__body{width:100%}.page-history-proposal[data-v-36b7a1a3] .van-search .van-field__body .van-field__control{width:100%;height:.45333rem}.page-history-proposal[data-v-36b7a1a3] .search{width:100%;min-height:.74667rem;line-height:.74667rem}.page-history-proposal[data-v-36b7a1a3] .search .van-search__content{border-radius:.10667rem;background:#f4f5f7}.page-history-proposal[data-v-36b7a1a3] .search .van-search__content .van-cell{padding:0}.page-history-proposal[data-v-36b7a1a3] .search .van-search__content .van-cell .van-field__left-icon{font-size:.24rem;font-weight:700}.page-history-proposal .proposal-content[data-v-36b7a1a3]{padding:0 .4rem}.page-history-proposal .proposal-content .proposal-item[data-v-36b7a1a3]{background:#fafafa;border-radius:.26667rem;padding:.4rem .26667rem 0}.page-history-proposal .proposal-content .proposal-item[data-v-36b7a1a3]:not(:first-child){margin-top:.26667rem}.page-history-proposal .proposal-content .proposal-item .title[data-v-36b7a1a3]{font-size:.37333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:.53333rem}.page-history-proposal .proposal-content .proposal-item .premium[data-v-36b7a1a3]{font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:.49333rem;margin:.08rem 0 .18667rem}.page-history-proposal .proposal-content .proposal-item .premium>span[data-v-36b7a1a3]{color:var(--zaui-price, #ff5840);font-weight:700}.page-history-proposal .proposal-content .proposal-item[data-v-36b7a1a3] .table-header .table-cell{background:#f2f2f2;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.44rem}.page-history-proposal .proposal-content .proposal-item .operate-btn[data-v-36b7a1a3]{padding:.4rem 0;display:flex;justify-content:flex-end}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-36b7a1a3]{height:.8rem;font-size:.37333rem;border-radius:.42667rem;padding:.13333rem .48rem;border:1px solid var(--van-primary-color, var(--zaui-brand))}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-36b7a1a3]:not(:first-child){margin-left:.21333rem}.page-history-proposal .proposal-content .proposal-item .operate-btn .del-btn[data-v-36b7a1a3]{color:#393d46;border:.02667rem solid #e6e6eb}[data-v-36b7a1a3] .van-list__finished-text{margin-bottom:.4rem}\n",document.head.appendChild(a),System.register(["./index-legacy-1d6e1a56.js","./index-legacy-8a79eb96.js","./index-legacy-1bca52a5.js","./index-legacy-61827ccf.js","./empty-legacy-7d56bad5.js","./index-legacy-537eda10.js","./proposalList-legacy-ca0a130d.js","./format-legacy-f45acaa1.js","./pdfh5-legacy-9f98dc45.js"],(function(a){"use strict";var e,o,t,r,n,i,l,p,s,d,c,u,m,h,g,v,f,y,b,_,x,P,k,C,j,w,S,z,F,L,V,I,N,R,T;return{setters:[function(a){e=a._,o=a.d,t=a.J,r=a.r,n=a.bp,i=a.u,l=a.E,p=a.b,s=a.c,d=a.e,c=a.w,u=a.f,m=a.g,h=a.a7,g=a.j,v=a.h,f=a.F,y=a.i,b=a.t,_=a.n,x=a.bB,P=a.k,k=a.aj,C=a.T,j=a.B},function(a){w=a.L},function(a){S=a.S},function(a){z=a._},function(a){F=a._},function(a){L=a.P},function(a){V=a.d,I=a.h},function(a){N=a.a,R=a.b,T=a.t},function(){}],execute:function(){const U={class:"proposal-content"},q={class:"title"},B={class:"premium"},E={class:"operate-btn"};a("default",e(o({__name:"index",setup(a){const e=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保障期间",dataIndex:"coveragePeriod",render:a=>N(null==a?void 0:a.coveragePeriod)},{title:"缴费期间",dataIndex:"chargePeriod",width:110,render:a=>R(null==a?void 0:a.chargePeriod)},{title:"保费",dataIndex:"premium",width:120,render:a=>T(null==a?void 0:a.premium)}],o=t({historyList:[],searchValue:""}),M=r(!1),H=r(!1),J=r(1),{historyList:O,searchValue:W}=n(o),A=i(),D=()=>{I({name:W.value,pageNum:J.value,pageSize:20,relationUserType:2}).then((a=>{const{code:e,data:o}=a;"10000"===e&&(1===J.value?O.value=o.datas||[]:O.value=O.value.concat(o.datas),J.value+=1,M.value=!1,H.value=O.value.length>=o.total)}))},G=()=>{D()},K=l((()=>O.value.length>0)),Q=a=>{W.value=a,J.value=1,D()};return(a,o)=>{const t=S,r=j,n=w,i=p("ProPageWrap");return s(),d(i,{class:"page-history-proposal"},{default:c((()=>[u(t,{modelValue:m(W),"onUpdate:modelValue":o[0]||(o[0]=a=>h(W)?W.value=a:null),placeholder:"请输入被保人姓名/计划书名称",shape:"round",class:"search",onSearch:Q},null,8,["modelValue"]),g("div",U,[u(n,{loading:m(M),"onUpdate:loading":o[1]||(o[1]=a=>h(M)?M.value=a:null),finished:m(H),"finished-text":m(K)?"- 没有更多了 -":"",onLoad:G},{default:c((()=>[(s(!0),v(f,null,y(m(O),(a=>(s(),v("div",{key:a.id,class:"proposal-item"},[g("div",q,b(a.proposalName)+"计划书",1),g("p",B,[_(" 保费："),g("span",null,"¥"+b(m(x)(a.totalPremium)),1)]),u(L,{columns:e,class:"table","data-source":a.proposalProductRiskVOList},null,8,["data-source"]),g("div",E,[u(r,{plain:"",round:"",type:"primary",class:"del-btn",onClick:e=>{return o=a.id,void k.confirm({message:"是否确定删除计划书？"}).then((()=>{V(o).then((a=>{const{code:e}=a;"10000"===e&&(C.success("删除成功"),J.value=1,D())}))})).catch((()=>{}));var o}},{default:c((()=>[_("删除")])),_:2},1032,["onClick"]),u(r,{plain:"",round:"",type:"primary",onClick:e=>{return o=a.id,void A.push({path:"/proposal/createProposal",query:{id:o}});var o}},{default:c((()=>[_("编辑")])),_:2},1032,["onClick"]),u(r,{plain:"",round:"",type:"primary",onClick:e=>{return o=a.id,void A.push({path:"compositionProposal",query:{id:o}});var o}},{default:c((()=>[_("预览")])),_:2},1032,["onClick"])])])))),128))])),_:1},8,["loading","finished","finished-text"])]),m(K)?P("",!0):(s(),d(z,{key:0,"empty-img":m(F),title:"暂无历史计划书","empty-class":"empty-select"},null,8,["empty-img"]))])),_:1})}}}),[["__scopeId","data-v-36b7a1a3"]]))}}}))}();
