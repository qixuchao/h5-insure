!function(){var e=document.createElement("style");e.innerHTML=".page-history-proposal[data-v-b6d7e812] .van-search{margin:.4rem 0}.page-history-proposal[data-v-b6d7e812] .van-search .van-field__body{width:100%}.page-history-proposal[data-v-b6d7e812] .van-search .van-field__body .van-field__control{width:100%;height:.45333rem}.page-history-proposal[data-v-b6d7e812] .search{width:100%;min-height:.74667rem;line-height:.74667rem}.page-history-proposal[data-v-b6d7e812] .search .van-search__content{border-radius:.10667rem;background:#f4f5f7}.page-history-proposal[data-v-b6d7e812] .search .van-search__content .van-cell{padding:0}.page-history-proposal[data-v-b6d7e812] .search .van-search__content .van-cell .van-field__left-icon{font-size:.24rem;font-weight:700}.page-history-proposal .proposal-content[data-v-b6d7e812]{padding:0 .4rem}.page-history-proposal .proposal-content .proposal-item[data-v-b6d7e812]{background:#fafafa;border-radius:.26667rem;padding:.4rem .26667rem 0}.page-history-proposal .proposal-content .proposal-item[data-v-b6d7e812]:not(:first-child){margin-top:.26667rem}.page-history-proposal .proposal-content .proposal-item .title[data-v-b6d7e812]{font-size:.37333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:.53333rem}.page-history-proposal .proposal-content .proposal-item .premium[data-v-b6d7e812]{font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:.49333rem;margin:.08rem 0 .18667rem}.page-history-proposal .proposal-content .proposal-item .premium>span[data-v-b6d7e812]{color:var(--zaui-price, #ff5840);font-weight:700}.page-history-proposal .proposal-content .proposal-item[data-v-b6d7e812] .table-header .table-cell{background:#f2f2f2;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.44rem}.page-history-proposal .proposal-content .proposal-item .operate-btn[data-v-b6d7e812]{padding:.4rem 0;display:flex;justify-content:flex-end}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-b6d7e812]{height:.8rem;font-size:.37333rem;border-radius:.42667rem;padding:.13333rem .48rem;border:1px solid #0d6efe}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-b6d7e812]:not(:first-child){margin-left:.21333rem}.page-history-proposal .proposal-content .proposal-item .operate-btn .del-btn[data-v-b6d7e812]{color:#393d46;border:.02667rem solid #e6e6eb}[data-v-b6d7e812] .van-list__finished-text{margin-bottom:.4rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./index-legacy-eeaac3c0.js","./empty-legacy-209c1521.js","./index-legacy-cdc76a65.js","./proposalList-legacy-df6a471f.js","./format-legacy-6721bd32.js"],(function(e){"use strict";var a,o,t,r,n,i,l,s,p,d,c,u,m,h,g,v,f,y,b,_,P,k,x,C,w,S,j,z,F,L,V,I;return{setters:[function(e){a=e.g,o=e.M,t=e.E,r=e.x,n=e.a9,i=e.y,l=e.r,s=e.j,p=e.k,d=e.m,c=e.p,u=e.A,m=e.R,h=e.z,g=e.n,v=e.G,f=e.J,y=e.F,b=e.t,_=e.C,P=e.D,k=e.T},function(e){x=e._,C=e.$},function(e){w=e.Z,S=e.e},function(e){j=e.P},function(e){z=e.d,F=e.h},function(e){L=e.a,V=e.b,I=e.t}],execute:function(){const R={class:"proposal-content"},M={class:"title"},N={class:"premium"},T=_(" 保费："),U={class:"operate-btn"},q=_("删除"),E=_("编辑"),A=_("预览");e("default",x(a({setup(e){const a=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保障期间",dataIndex:"coveragePeriod",render:e=>L(null==e?void 0:e.coveragePeriod)},{title:"缴费期间",dataIndex:"chargePeriod",width:110,render:e=>V(null==e?void 0:e.chargePeriod)},{title:"保费",dataIndex:"premium",width:120,render:e=>I(null==e?void 0:e.premium)}],_=o({historyList:[],searchValue:""}),x=t(!1),D=t(!1),G=t(1),{historyList:H,searchValue:J}=r(_),O=n(),W=()=>{F({name:J.value,pageNum:G.value,pageSize:20,relationUserType:2}).then((e=>{const{code:a,data:o}=e;"10000"===a&&(1===G.value?H.value=o.datas||[]:H.value=H.value.concat(o.datas),G.value+=1,x.value=!1,D.value=H.value.length>=o.total)}))},Z=()=>{W()},$=i((()=>H.value.length>0)),B=e=>{J.value=e,G.value=1,W()};return(e,o)=>{const t=l("van-search"),r=l("van-button"),n=l("van-list"),i=l("ProPageWrap");return s(),p(i,{class:"page-history-proposal"},{default:d((()=>[c(t,{modelValue:u(J),"onUpdate:modelValue":o[0]||(o[0]=e=>m(J)?J.value=e:null),placeholder:"请输入被保人姓名/计划书名称",shape:"round",class:"search",onSearch:B},null,8,["modelValue"]),h("div",R,[c(n,{loading:x.value,"onUpdate:loading":o[1]||(o[1]=e=>x.value=e),finished:D.value,"finished-text":u($)?"- 没有更多了 -":"",onLoad:Z},{default:d((()=>[(s(!0),g(y,null,v(u(H),(e=>(s(),g("div",{key:e.id,class:"proposal-item"},[h("div",M,f(e.proposalName)+"计划书",1),h("p",N,[T,h("span",null,"¥"+f(u(C)(e.totalPremium)),1)]),c(j,{columns:a,class:"table","data-source":e.proposalProductRiskVOList},null,8,["data-source"]),h("div",U,[c(r,{plain:"",round:"",type:"primary",class:"del-btn",onClick:a=>{return o=e.id,void P.confirm({message:"是否确定删除计划书？"}).then((()=>{z(o).then((e=>{const{code:a}=e;"10000"===a&&(k.success("删除成功"),G.value=1,W())}))})).catch((()=>{}));var o}},{default:d((()=>[q])),_:2},1032,["onClick"]),c(r,{plain:"",round:"",type:"primary",onClick:a=>{return o=e.id,void O.push({path:"/proposal/createProposal",query:{id:o}});var o}},{default:d((()=>[E])),_:2},1032,["onClick"]),c(r,{plain:"",round:"",type:"primary",onClick:a=>{return o=e.id,void O.push({path:"compositionProposal",query:{id:o}});var o}},{default:d((()=>[A])),_:2},1032,["onClick"])])])))),128))])),_:1},8,["loading","finished","finished-text"])]),u($)?b("",!0):(s(),p(w,{key:0,"empty-img":u(S),title:"暂无历史计划书","empty-class":"empty-select"},null,8,["empty-img"]))])),_:1})}}}),[["__scopeId","data-v-b6d7e812"]]))}}}))}();
