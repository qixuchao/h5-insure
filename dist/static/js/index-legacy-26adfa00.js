!function(){var a=document.createElement("style");a.innerHTML=".page-history-proposal[data-v-36b7a1a3] .van-search{margin:.4rem 0}.page-history-proposal[data-v-36b7a1a3] .van-search .van-field__body{width:100%}.page-history-proposal[data-v-36b7a1a3] .van-search .van-field__body .van-field__control{width:100%;height:.45333rem}.page-history-proposal[data-v-36b7a1a3] .search{width:100%;min-height:.74667rem;line-height:.74667rem}.page-history-proposal[data-v-36b7a1a3] .search .van-search__content{border-radius:.10667rem;background:#f4f5f7}.page-history-proposal[data-v-36b7a1a3] .search .van-search__content .van-cell{padding:0}.page-history-proposal[data-v-36b7a1a3] .search .van-search__content .van-cell .van-field__left-icon{font-size:.24rem;font-weight:700}.page-history-proposal .proposal-content[data-v-36b7a1a3]{padding:0 .4rem}.page-history-proposal .proposal-content .proposal-item[data-v-36b7a1a3]{background:#fafafa;border-radius:.26667rem;padding:.4rem .26667rem 0}.page-history-proposal .proposal-content .proposal-item[data-v-36b7a1a3]:not(:first-child){margin-top:.26667rem}.page-history-proposal .proposal-content .proposal-item .title[data-v-36b7a1a3]{font-size:.37333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:.53333rem}.page-history-proposal .proposal-content .proposal-item .premium[data-v-36b7a1a3]{font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:.49333rem;margin:.08rem 0 .18667rem}.page-history-proposal .proposal-content .proposal-item .premium>span[data-v-36b7a1a3]{color:var(--zaui-price, #ff5840);font-weight:700}.page-history-proposal .proposal-content .proposal-item[data-v-36b7a1a3] .table-header .table-cell{background:#f2f2f2;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.44rem}.page-history-proposal .proposal-content .proposal-item .operate-btn[data-v-36b7a1a3]{padding:.4rem 0;display:flex;justify-content:flex-end}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-36b7a1a3]{height:.8rem;font-size:.37333rem;border-radius:.42667rem;padding:.13333rem .48rem;border:1px solid var(--zaui-brand, #0d6efe)}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-36b7a1a3]:not(:first-child){margin-left:.21333rem}.page-history-proposal .proposal-content .proposal-item .operate-btn .del-btn[data-v-36b7a1a3]{color:#393d46;border:.02667rem solid #e6e6eb}[data-v-36b7a1a3] .van-list__finished-text{margin-bottom:.4rem}\n",document.head.appendChild(a),System.register(["./vendor-legacy-92a8f610.js","./index-legacy-006fe31c.js","./empty-legacy-cfc1bbd7.js","./index-legacy-2e332867.js","./proposalList-legacy-bfc53f06.js","./format-legacy-6721bd32.js"],(function(a){"use strict";var e,o,t,r,n,i,l,s,p,d,c,u,m,h,g,v,f,y,b,_,P,k,x,C,w,z,S,j,F,L,V,I;return{setters:[function(a){e=a.g,o=a.M,t=a.E,r=a.x,n=a.a9,i=a.y,l=a.r,s=a.j,p=a.k,d=a.m,c=a.p,u=a.A,m=a.R,h=a.z,g=a.n,v=a.G,f=a.J,y=a.F,b=a.t,_=a.C,P=a.D,k=a.T},function(a){x=a._,C=a.$},function(a){w=a.Z,z=a.e},function(a){S=a.P},function(a){j=a.d,F=a.h},function(a){L=a.a,V=a.b,I=a.t}],execute:function(){const R={class:"proposal-content"},M={class:"title"},N={class:"premium"},T=_(" 保费："),U={class:"operate-btn"},q=_("删除"),E=_("编辑"),A=_("预览");a("default",x(e({setup(a){const e=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保障期间",dataIndex:"coveragePeriod",render:a=>L(null==a?void 0:a.coveragePeriod)},{title:"缴费期间",dataIndex:"chargePeriod",width:110,render:a=>V(null==a?void 0:a.chargePeriod)},{title:"保费",dataIndex:"premium",width:120,render:a=>I(null==a?void 0:a.premium)}],_=o({historyList:[],searchValue:""}),x=t(!1),D=t(!1),G=t(1),{historyList:H,searchValue:J}=r(_),O=n(),W=()=>{F({name:J.value,pageNum:G.value,pageSize:20,relationUserType:2}).then((a=>{const{code:e,data:o}=a;"10000"===e&&(1===G.value?H.value=o.datas||[]:H.value=H.value.concat(o.datas),G.value+=1,x.value=!1,D.value=H.value.length>=o.total)}))},Z=()=>{W()},$=i((()=>H.value.length>0)),B=a=>{J.value=a,G.value=1,W()};return(a,o)=>{const t=l("van-search"),r=l("van-button"),n=l("van-list"),i=l("ProPageWrap");return s(),p(i,{class:"page-history-proposal"},{default:d((()=>[c(t,{modelValue:u(J),"onUpdate:modelValue":o[0]||(o[0]=a=>m(J)?J.value=a:null),placeholder:"请输入被保人姓名/计划书名称",shape:"round",class:"search",onSearch:B},null,8,["modelValue"]),h("div",R,[c(n,{loading:x.value,"onUpdate:loading":o[1]||(o[1]=a=>x.value=a),finished:D.value,"finished-text":u($)?"- 没有更多了 -":"",onLoad:Z},{default:d((()=>[(s(!0),g(y,null,v(u(H),(a=>(s(),g("div",{key:a.id,class:"proposal-item"},[h("div",M,f(a.proposalName)+"计划书",1),h("p",N,[T,h("span",null,"¥"+f(u(C)(a.totalPremium)),1)]),c(S,{columns:e,class:"table","data-source":a.proposalProductRiskVOList},null,8,["data-source"]),h("div",U,[c(r,{plain:"",round:"",type:"primary",class:"del-btn",onClick:e=>{return o=a.id,void P.confirm({message:"是否确定删除计划书？"}).then((()=>{j(o).then((a=>{const{code:e}=a;"10000"===e&&(k.success("删除成功"),G.value=1,W())}))})).catch((()=>{}));var o}},{default:d((()=>[q])),_:2},1032,["onClick"]),c(r,{plain:"",round:"",type:"primary",onClick:e=>{return o=a.id,void O.push({path:"/proposal/createProposal",query:{id:o}});var o}},{default:d((()=>[E])),_:2},1032,["onClick"]),c(r,{plain:"",round:"",type:"primary",onClick:e=>{return o=a.id,void O.push({path:"compositionProposal",query:{id:o}});var o}},{default:d((()=>[A])),_:2},1032,["onClick"])])])))),128))])),_:1},8,["loading","finished","finished-text"])]),u($)?b("",!0):(s(),p(w,{key:0,"empty-img":u(z),title:"暂无历史计划书","empty-class":"empty-select"},null,8,["empty-img"]))])),_:1})}}}),[["__scopeId","data-v-36b7a1a3"]]))}}}))}();
