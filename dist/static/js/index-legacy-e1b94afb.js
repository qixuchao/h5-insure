!function(){var e=document.createElement("style");e.innerHTML=".page-history-proposal[data-v-770ff0b0] .van-search{margin:.4rem 0}.page-history-proposal[data-v-770ff0b0] .van-search .van-field__body{width:100%}.page-history-proposal[data-v-770ff0b0] .van-search .van-field__body .van-field__control{width:100%;height:.45333rem}.page-history-proposal[data-v-770ff0b0] .search{width:100%;min-height:.74667rem;line-height:.74667rem}.page-history-proposal[data-v-770ff0b0] .search .van-search__content{border-radius:.10667rem;background:#f4f5f7}.page-history-proposal[data-v-770ff0b0] .search .van-search__content .van-cell{padding:0}.page-history-proposal[data-v-770ff0b0] .search .van-search__content .van-cell .van-field__left-icon{font-size:.24rem;font-weight:700}.page-history-proposal .proposal-content[data-v-770ff0b0]{padding:0 .4rem}.page-history-proposal .proposal-content .proposal-item[data-v-770ff0b0]{background:#fafafa;border-radius:.26667rem;padding:.4rem .26667rem 0}.page-history-proposal .proposal-content .proposal-item[data-v-770ff0b0]:not(:first-child){margin-top:.26667rem}.page-history-proposal .proposal-content .proposal-item .title[data-v-770ff0b0]{font-size:.37333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#393d46;line-height:.53333rem}.page-history-proposal .proposal-content .proposal-item .premium[data-v-770ff0b0]{font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:.49333rem;margin:.08rem 0 .18667rem}.page-history-proposal .proposal-content .proposal-item .premium>span[data-v-770ff0b0]{color:#ff5840;font-weight:700}.page-history-proposal .proposal-content .proposal-item[data-v-770ff0b0] .table-header .table-cell{background:#f2f2f2;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.44rem}.page-history-proposal .proposal-content .proposal-item .operate-btn[data-v-770ff0b0]{padding:.4rem 0;display:flex;justify-content:flex-end}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-770ff0b0]{height:.8rem;font-size:.37333rem;border-radius:.42667rem;padding:.13333rem .48rem;border:1px solid #0d6efe}.page-history-proposal .proposal-content .proposal-item .operate-btn .van-button[data-v-770ff0b0]:not(:first-child){margin-left:.21333rem}.page-history-proposal .proposal-content .proposal-item .operate-btn .del-btn[data-v-770ff0b0]{color:#393d46;border:.02667rem solid #e6e6eb}[data-v-770ff0b0] .van-list__finished-text{margin-bottom:.4rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-b51aec28.js","./index-legacy-20a0a9aa.js","./empty-legacy-e6c45d45.js","./index-legacy-043ff1cc.js","./proposalList-legacy-54bb2a2f.js","./format-legacy-6007e6c4.js"],(function(e){"use strict";var a,o,t,r,n,l,i,s,p,d,c,f,u,m,h,g,v,y,b,_,P,k,x,C,w,S,j,z,F,L,V,I;return{setters:[function(e){a=e.g,o=e.M,t=e.E,r=e.x,n=e.a9,l=e.y,i=e.r,s=e.j,p=e.k,d=e.m,c=e.p,f=e.A,u=e.R,m=e.z,h=e.n,g=e.G,v=e.F,y=e.t,b=e.J,_=e.C,P=e.D,k=e.T},function(e){x=e._,C=e.G},function(e){w=e.Z,S=e.e},function(e){j=e.P},function(e){z=e.h,F=e.d},function(e){L=e.c,V=e.a,I=e.t}],execute:function(){const R={class:"proposal-content"},M={class:"title"},N={class:"premium"},T=_(" 保费："),U={class:"operate-btn"},q=_("删除"),E=_("编辑"),G=_("预览");e("default",x(a({setup(e){const a=[{title:"险种名称",dataIndex:"riskName",width:180},{title:"保障期间",dataIndex:"coveragePeriod",render:e=>L(null==e?void 0:e.coveragePeriod)},{title:"缴费期间",dataIndex:"chargePeriod",width:110,render:e=>V(null==e?void 0:e.chargePeriod)},{title:"保费",dataIndex:"premium",width:120,render:e=>I(null==e?void 0:e.premium)}],_=o({historyList:[],searchValue:""}),x=t(!1),A=t(!1),D=t(1),{historyList:H,searchValue:J}=r(_),O=n(),W=()=>{z({name:J.value,pageNum:D.value,pageSize:20,relationUserType:2}).then((e=>{const{code:a,data:o}=e;"10000"===a&&(1===D.value?H.value=o.datas||[]:H.value=H.value.concat(o.datas),D.value+=1,x.value=!1,A.value=H.value.length>=o.total)}))},Z=()=>{W()},B=l((()=>H.value.length>0)),K=e=>{J.value=e,D.value=1,W()};return(e,o)=>{const t=i("van-search"),r=i("van-button"),n=i("van-list"),l=i("ProPageWrap");return s(),p(l,{class:"page-history-proposal"},{default:d((()=>[c(t,{modelValue:f(J),"onUpdate:modelValue":o[0]||(o[0]=e=>u(J)?J.value=e:null),placeholder:"请输入被保人姓名/计划书名称",shape:"round",class:"search",onSearch:K},null,8,["modelValue"]),m("div",R,[c(n,{loading:x.value,"onUpdate:loading":o[1]||(o[1]=e=>x.value=e),finished:A.value,"finished-text":f(B)?"- 没有更多了 -":"",onLoad:Z},{default:d((()=>[(s(!0),h(v,null,g(f(H),(e=>(s(),h("div",{key:e.id,class:"proposal-item"},[m("div",M,b(e.proposalName)+"计划书",1),m("p",N,[T,m("span",null,"¥"+b(f(C)(e.totalPremium)),1)]),c(j,{columns:a,class:"table","data-source":e.proposalProductRiskVOList},null,8,["data-source"]),m("div",U,[c(r,{plain:"",round:"",type:"primary",class:"del-btn",onClick:a=>{return o=e.id,void P.confirm({message:"是否确定删除计划书？"}).then((()=>{F(o).then((e=>{const{code:a}=e;"10000"===a&&(k.success("删除成功"),D.value=1,W())}))})).catch((()=>{}));var o}},{default:d((()=>[q])),_:2},1032,["onClick"]),c(r,{plain:"",round:"",type:"primary",onClick:a=>{return o=e.id,void O.push({path:"/proposal/createProposal",query:{id:o}});var o}},{default:d((()=>[E])),_:2},1032,["onClick"]),c(r,{plain:"",round:"",type:"primary",onClick:a=>{return o=e.id,void O.push({path:"compositionProposal",query:{id:o}});var o}},{default:d((()=>[G])),_:2},1032,["onClick"])])])))),128))])),_:1},8,["loading","finished","finished-text"])]),f(B)?y("",!0):(s(),p(w,{key:0,"empty-img":f(S),title:"暂无历史计划书","empty-class":"empty-select"},null,8,["empty-img"]))])),_:1})}}}),[["__scopeId","data-v-770ff0b0"]]))}}}))}();
