!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.page-history-proposal[data-v-38b0cb63] .van-search{margin:.4rem 0}.page-history-proposal[data-v-38b0cb63] .search{width:100%;min-height:.74667rem;line-height:.74667rem}.page-history-proposal[data-v-38b0cb63] .search .van-search__content{border-radius:.10667rem}.page-history-proposal[data-v-38b0cb63] .search .van-search__content .van-cell{padding:0}.page-history-proposal .proposal-content[data-v-38b0cb63]{padding:0 .4rem}.page-history-proposal .proposal-content .proposal-item[data-v-38b0cb63]{background:#fafafa;border-radius:.26667rem;padding:.4rem .26667rem 0}.page-history-proposal .proposal-content .proposal-item[data-v-38b0cb63]:not(:first-child){margin-top:.26667rem}.page-history-proposal .proposal-content .proposal-item .title[data-v-38b0cb63]{font-size:.37333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:.53333rem}.page-history-proposal .proposal-content .proposal-item .premium[data-v-38b0cb63]{font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:.49333rem;margin:.08rem 0 .18667rem}.page-history-proposal .proposal-content .proposal-item .premium>span[data-v-38b0cb63]{color:#ff5840;font-weight:700}.page-history-proposal .proposal-content .proposal-item[data-v-38b0cb63] .table-header .table-cell{background:#f2f2f2;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.44rem}.page-history-proposal .proposal-content .proposal-item .operate-btn[data-v-38b0cb63]{padding:.4rem 0;display:flex;justify-content:flex-end}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-38b0cb63]{height:.8rem;font-size:.37333rem;border-radius:.42667rem;border:1px solid #0d6efe}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-38b0cb63]:not(:first-child){margin-left:.21333rem}.page-history-proposal .proposal-content .proposal-item .operate-btn .del-btn[data-v-38b0cb63]{color:#393d46;border:1px solid #e6e6eb}\n',document.head.appendChild(e),System.register(["./vendor-legacy-17b21673.js","./index-legacy-94ed15a9.js","./index-legacy-7080a6df.js","./proposalList-legacy-57298619.js"],(function(e){"use strict";var a,o,t,r,n,p,i,s,l,d,c,m,u,h,g,b,f,v,y,P,C,k,x,_,w;return{setters:[function(e){a=e.g,o=e.L,t=e.v,r=e.af,n=e.M,p=e.r,i=e.h,s=e.j,l=e.k,d=e.n,c=e.z,m=e.a6,u=e.y,h=e.m,g=e.E,b=e.F,f=e.I,v=e.B,y=e.D,P=e.T},function(e){C=e._,k=e.y},function(e){x=e.P},function(e){_=e.h,w=e.d}],execute:function(){const F={class:"proposal-content"},S={class:"title"},I={class:"premium"},j=v(" 保费："),z={class:"operate-btn"},L=v("删除"),V=v("编辑"),T=v("预览");e("default",C(a({setup(e){const a=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保障期间",dataIndex:"coveragePeriod"},{title:"缴费期间",dataIndex:"chargePeriod",width:110},{title:"保费",dataIndex:"premium",width:120}],v=o({historyList:[],searchValue:""}),{historyList:C,searchValue:M}=t(v),N=r(),R=()=>{_({name:M.value,pageNum:1,pageSize:999,relationUserType:2}).then((e=>{const{code:a,data:o}=e;"10000"===a&&(C.value=o.datas)}))},U=()=>{R()};return n((()=>{R()})),(e,o)=>{const t=p("van-search"),r=p("van-button"),n=p("ProPageWrap");return i(),s(n,{class:"page-history-proposal"},{default:l((()=>[d(t,{modelValue:c(M),"onUpdate:modelValue":o[0]||(o[0]=e=>m(M)?M.value=e:null),placeholder:"请输入关键词",shape:"round",class:"search",onClickInput:U},null,8,["modelValue"]),u("div",F,[(i(!0),h(b,null,g(c(C),(e=>(i(),h("div",{key:e.id,class:"proposal-item"},[u("div",S,f(e.proposalName),1),u("p",I,[j,u("span",null,"¥"+f(c(k)(e.totalPremium)),1)]),d(x,{columns:a,class:"table","data-source":e.proposalProductRiskVOList},null,8,["data-source"]),u("div",z,[d(r,{plain:"",round:"",type:"primary",class:"del-btn",onClick:a=>{return o=e.id,void y.confirm({title:"删除计划书",message:"确认删除计划书"}).then((()=>{w(o).then((e=>{const{code:a}=e;"10000"===a&&(P.success("删除成功"),R())}))})).catch((()=>{}));var o}},{default:l((()=>[L])),_:2},1032,["onClick"]),d(r,{plain:"",round:"",type:"primary",onClick:a=>{return o=e.id,void N.push({path:"/proposal/createProposal",query:{id:o}});var o}},{default:l((()=>[V])),_:2},1032,["onClick"]),d(r,{plain:"",round:"",type:"primary",onClick:a=>{return o=e.id,void N.push({path:"compositionProposal",query:{id:o}});var o}},{default:l((()=>[T])),_:2},1032,["onClick"])])])))),128))])])),_:1})}}}),[["__scopeId","data-v-38b0cb63"]]))}}}))}();
