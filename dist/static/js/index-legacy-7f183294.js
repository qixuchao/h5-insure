!function(){var e=document.createElement("style");e.innerHTML=".com-product-list-wrapper .content[data-v-7995980e]{padding:0 var(--zaui-card-border, .4rem)}.com-product-list-wrapper .premium-total[data-v-7995980e]{padding:0 var(--zaui-card-border, .4rem);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;margin:.26667rem 0 .4rem}.com-product-list-wrapper .premium-total .premium[data-v-7995980e]{color:#ff5840;font-weight:600}.com-product-list-wrapper .risk-item-wrapper[data-v-7995980e]{margin:var(--zaui-card-border, .4rem);background-color:#f6f6fa;border-radius:.26667rem}.com-product-list-wrapper .risk-item-wrapper[data-v-7995980e] .card-title .van-cell{background-color:#f6f6fa;padding-bottom:0;border-radius:.26667rem}.com-product-list-wrapper .risk-item-wrapper .premium[data-v-7995980e]{color:var(--zaui-price, #ff5840)}.com-product-list-wrapper .risk-item-wrapper .risk-premium[data-v-7995980e]{color:#333;font-weight:400;font-size:.34667rem}.com-product-list-wrapper .risk-item-wrapper .risk-factor[data-v-7995980e]{display:flex;justify-content:space-between}.com-product-list-wrapper .risk-item-wrapper .risk-factor .factor[data-v-7995980e]{display:flex;flex-direction:column;align-items:center;padding:.37333rem 0 .54667rem}.com-product-list-wrapper .risk-item-wrapper .risk-factor .factor .factor-value[data-v-7995980e]{width:100%;text-align:center;font-size:.37333rem;font-family:Arial-BoldMT,Arial,self;font-weight:400;color:#393d46;line-height:.42667rem;margin-bottom:.10667rem}.com-product-list-wrapper .risk-item-wrapper .risk-factor .factor .factor-name[data-v-7995980e]{width:100%;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC,serif;font-weight:400;color:#99a9c0;line-height:.44rem}.com-product-list-wrapper .risk-item-wrapper .operate-bar[data-v-7995980e]{display:flex;align-content:center;justify-content:flex-end;padding-bottom:.26667rem}.com-product-list-wrapper .risk-item-wrapper .operate-bar .border[data-v-7995980e]{border:.02667rem solid #e6e6eb}.com-product-list-wrapper .risk-item-wrapper .operate-bar[data-v-7995980e] .com-check-btn{margin-left:.21333rem}.page-create-wrapper[data-v-3167791f]{background-color:#f2f5fc}.page-create-wrapper .container[data-v-3167791f]{padding:.4rem .4rem 2.4rem}.page-create-wrapper .container[data-v-3167791f] .com-card-wrap .body{padding:0}.page-create-wrapper .container .operate-bar[data-v-3167791f]{width:100%;justify-content:center;display:flex;margin-top:.53333rem}.page-create-wrapper .container .operate-bar[data-v-3167791f] .com-check-btn{height:.90667rem;width:3.2rem}.page-create-wrapper .footer-bar[data-v-3167791f]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4}.page-create-wrapper .footer-bar .trial-result[data-v-3167791f]{width:5.86667rem;color:#ff5840;font-size:.32rem;font-weight:600}.page-create-wrapper .footer-bar .trial-result .result-num[data-v-3167791f]{font-size:.61333rem;font-weight:500;margin-left:.17333rem}.page-create-wrapper .footer-bar .trial-operate button[data-v-3167791f]{width:3.73333rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-fc9bbab5.js","./index-legacy-cf1a3ee0.js","./index-legacy-a0a9bfb4.js","./trial-legacy-d9b42861.js","./useDicData-legacy-c73695cf.js","./index-legacy-3943ca39.js","./trial-legacy-ee14e383.js"],(function(e){"use strict";var r,t,a,o,i,l,s,d,u,p,n,c,m,v,f,k,g,I,h,L,y,b,w,P,R,V,C,D,_,j,x,O;return{setters:[function(e){r=e.g,t=e.a5,a=e.E,o=e.y,i=e.X,l=e.r,s=e.j,d=e.n,u=e.F,p=e.G,n=e.z,c=e.p,m=e.J,v=e.A,f=e.k,k=e.m,g=e.t,I=e.C,h=e.a1,L=e.a2,y=e.aj,b=e.Q,w=e.o,P=e.D},function(e){R=e.u,V=e.P},function(e){C=e.b,D=e._,_=e.q,j=e.r},function(e){x=e.a},function(e){O=e.u},function(){},function(){}],execute:function(){const T=e=>(h("data-v-7995980e"),e=e(),L(),e),S={class:"com-product-list-wrapper"},z={class:"risk-item-wrapper"},F={class:"content"},N={class:"risk-premium"},U=I(" 保费:"),q={class:"premium"},E={class:"risk-factor"},$={class:"factor"},A={class:"factor-value"},B=T((()=>n("span",{class:"factor-name"}," 保额(元) ",-1))),H={class:"factor"},M={class:"factor-value"},K=T((()=>n("span",{class:"factor-name"}," 保障期间 ",-1))),G={class:"factor"},J={class:"factor-value"},Q=T((()=>n("span",{class:"factor-name"}," 缴费期间 ",-1))),W={class:"operate-bar"},X=I("删除"),Y=I("+ 附加险"),Z=I("修改"),ee={class:"premium-total"},re=I(" 保费: "),te={class:"premium"};var ae=D(r({props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:r}){const I=e,[h,L]=t(),y=a({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),b=O("RISK_PAYMENT_PERIOD"),w=O("RISK_INSURANCE_PERIOD"),P=o((()=>{var e,r;return(null===(e=I.productData)||void 0===e||null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]})),R=o((()=>{var e,r;const t=I.productRiskList.map((e=>e.riskId)),a=((null===(e=I.productData)||void 0===e||null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList)||[]).filter((e=>t.includes(e.id)&&1===e.collocationType));return P.value.length-a.length})),V=o((()=>e=>{var r,t;const a=(null===(r=I.productData)||void 0===r||null===(t=r.productRiskVoList)||void 0===t?void 0:t[0].riskDetailVOList.find((r=>r.id!==e)))||{};let o=!1;return o=!!I.productNum||2===a.riskType&&1===a.collocationType,o})),C=o((()=>{var e,r;return(null===(e=I.productData)||void 0===e||null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),D=o((()=>C.value.collocationVOList||[])),j=(e,t)=>{const a=e.map((e=>e.id)).filter((e=>!y.value.disabledList.includes(e)));r("addRiderRisk",a,I.productInfo)};return i((()=>I.productInfo),(e=>{var r;let t=0;(e.proposalProductRiskList||[]).forEach((e=>{t+=e.premium})),null===(r=I.pickProductPremium)||void 0===r||r.call(I,{[`${e.productId}`]:t}),y.value.totalPremium=t}),{deep:!0,immediate:!0}),i((()=>I.productRiskList),(e=>{const r=[],t=[],a=[];(e||[]).forEach((e=>{1===e.riskType?r.unshift(e):(t.push(e.riskId),a.push(e.riskId),r.push(e))})),y.value.disabledList=t,y.value.checkedList=a,y.value.productRiskList=r}),{deep:!0,immediate:!0}),(e,t)=>{const a=l("ProTitle"),o=l("ProCheckButton");return s(),d("div",S,[(s(!0),d(u,null,p(y.value.productRiskList,(e=>{var t,i;return s(),d("div",{key:e.riskId},[n("div",z,[c(a,{"risk-type":e.riskType,title:e.riskName},null,8,["risk-type","title"]),n("div",F,[n("div",N,[U,n("span",q,"￥"+m(null===(t=e.premium)||void 0===t?void 0:t.toLocaleString()),1)]),n("div",E,[n("div",$,[n("span",A,m(null===(i=e.amount)||void 0===i?void 0:i.toLocaleString()),1),B]),n("div",H,[n("span",M,m(v(_)(v(w),e.coveragePeriod)),1),K]),n("div",G,[n("span",J,m(v(_)(v(b),e.chargePeriod)),1),Q])]),n("div",W,[v(V)(e.riskId)?(s(),f(o,{key:0,round:32,class:"border",onClick:t=>{r("deleteRisk",e,I.productInfo)}},{default:k((()=>[X])),_:2},1032,["onClick"])):g("",!0),v(R)?(s(),f(o,{key:1,activated:"",round:32,onClick:r=>{return t=e,L(!0),void(y.value.currentRiskRecord=t);var t}},{default:k((()=>[Y])),_:2},1032,["onClick"])):g("",!0),c(o,{activated:"",round:32,onClick:t=>{r("updateRisk",e,I.productInfo)}},{default:k((()=>[Z])),_:2},1032,["onClick"])])])])])})),128)),n("div",ee,[re,n("span",te,"￥"+m(y.value.totalPremium.toLocaleString()),1)]),v(h)?(s(),f(x,{key:0,modelValue:y.value.checkedList,"onUpdate:modelValue":t[0]||(t[0]=e=>y.value.checkedList=e),show:v(h),disabled:y.value.disabledList,"risk-list":v(P),"collocation-list":v(D),onFinished:j,onClose:t[1]||(t[1]=e=>v(L)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):g("",!0)])}}}),[["__scopeId","data-v-7995980e"]]);const oe={class:"container"},ie=(e=>(h("data-v-3167791f"),e=e(),L(),e))((()=>n("span",null,"计划书名称",-1))),le={class:"operate-bar"},se=I("添加主险"),de={class:"footer-bar"},ue={class:"trial-result"},pe=I(" 总保费 "),ne={class:"result-num"},ce={class:"trial-operate"},me=I("保存并预览");e("default",D(r({setup(e){const[r,I]=t(),h=a({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),L=y(),D=b(),_=R(),{id:x,type:O="add",isCreateProposal:T}=D.query,S=a({productId:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),z=a();a({}),a([]),o((()=>({min:"",max:""})));const F=(e,r,t)=>/^.{1,20}$/.test(r)?"":`${e}不能超过20个字符`,N=(e={})=>{Object.assign(S.value.productPremium,e),h.value.totalPremium=Object.values(S.value.productPremium).reduce(((e,r)=>e+r),0)},U=(e,r)=>{const t=r;P.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?(h.value.proposalInsuredList[0].proposalInsuredProductList=h.value.proposalInsuredList[0].proposalInsuredProductList.filter((e=>e.productId!==t.productId)),N({[t.productId]:0})):t.proposalProductRiskList=t.proposalProductRiskList.filter((r=>r.riskId!==e.riskId))}))},q=(e,r)=>{S.value.productId=r.productId,S.value.productInfo=r,S.value.type="edit",S.value.currentRisk=[e.riskId],I(!0)},E=(e,r)=>{S.value.productId=r.productId,S.value.productInfo=r,S.value.type="addRiderRisk",S.value.currentRisk=e,I(!0)},$=()=>{((e={})=>C.get(`/api/app/insure/proposal/queryProposalDetail/${e.id}`,e))({id:x}).then((({code:e,data:r})=>{"10000"===e&&Object.assign(h.value,r)}))},A=()=>{z.value.validate().then((()=>{var e;(e=h.value,C.post("/api/app/insure/proposal/addOrUpdateProposal",e)).then((({code:e,data:r})=>{"10000"===e&&(_.$reset(),L.push({path:"/compositionProposal",query:{id:r}}))}))}))},B=e=>{h.value.proposalInsuredList[0].proposalInsuredProductList=h.value.proposalInsuredList[0].proposalInsuredProductList.map((r=>{let t=r;return r.productId===e.proposalInsuredList[0].proposalInsuredProductList[0].productId&&(t={...e.proposalInsuredList[0].proposalInsuredProductList[0]}),t})),I(!1)},H=e=>{((e={})=>C.post("/api/app/insure/product/listInsureProductDetail",e))(e).then((({code:e,data:r})=>{"10000"===e&&(S.value.productCollection=r)})).finally((()=>{}))},M=()=>{_.setProposalInfo(h.value),_.setTrialData([]),_.setExcludeProduct(Object.keys(S.value.productCollection)),L.push({path:"/proposalList",query:{isCreateProposal:"1",...D.query}})},K=()=>{I(!1)};return w((()=>{const e=_.$state.trialData,r=_.$state.proposalInfo;x&&!T?$():!Object.keys(r).length&&e.length?Object.assign(h.value,e[0]):Object.keys(r).length&&e.length?(r.proposalInsuredList[0].proposalInsuredProductList.push(...e[0].proposalInsuredList[0].proposalInsuredProductList),h.value=r):Object.keys(r).length&&!e.length&&(h.value=r),_.setTrialData([])})),i((()=>{var e;return null===(e=h.value.proposalInsuredList[0].proposalInsuredProductList)||void 0===e?void 0:e.length}),(()=>{const e=h.value.proposalInsuredList[0].proposalInsuredProductList.map((e=>({productId:e.productId,source:2})));H({voList:e})})),(e,t)=>{const a=l("VanField"),o=l("ProCard"),i=l("ProDatePicker"),I=l("ProRadioButton"),L=l("VanForm"),y=l("ProCheckButton"),b=l("VanButton"),w=l("ProPageWrap");return s(),f(w,{class:"page-create-wrapper"},{default:k((()=>{var e;return[n("div",oe,[c(L,{ref_key:"formRef",ref:z,"input-align":"right","error-message-align":"right"},{default:k((()=>[c(o,null,{default:k((()=>[c(a,{modelValue:h.value.proposalName,"onUpdate:modelValue":t[0]||(t[0]=e=>h.value.proposalName=e),name:"proposalName",placeholder:"请输入计划书名称",rules:[{required:!0,message:"请输入计划书名称"},{validator:(...e)=>F("计划书名称",...e)}]},{label:k((()=>[ie])),_:1},8,["modelValue","rules"])])),_:1}),c(o,{title:"被保人信息"},{default:k((()=>[c(a,{modelValue:h.value.proposalInsuredList[0].name,"onUpdate:modelValue":t[1]||(t[1]=e=>h.value.proposalInsuredList[0].name=e),name:"name",label:"姓名",rules:[{validator:(...e)=>F("姓名",...e)}],placeholder:"请输入（选填）"},null,8,["modelValue","rules"]),c(i,{modelValue:h.value.proposalInsuredList[0].birthday,"onUpdate:modelValue":t[2]||(t[2]=e=>h.value.proposalInsuredList[0].birthday=e),name:"birthday",label:"出生日期",type:"date","is-link":"",readonly:"",placeholder:"请选择",rules:[{required:!0,message:"请选择"}]},null,8,["modelValue"]),c(a,{modelValue:h.value.proposalInsuredList[0].gender,"onUpdate:modelValue":t[4]||(t[4]=e=>h.value.proposalInsuredList[0].gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择"}]},{input:k((()=>[c(I,{modelValue:h.value.proposalInsuredList[0].gender,"onUpdate:modelValue":t[3]||(t[3]=e=>h.value.proposalInsuredList[0].gender=e),options:v(j)},null,8,["modelValue","options"])])),_:1},8,["modelValue"])])),_:1})])),_:1},512),(s(!0),d(u,null,p(h.value.proposalInsuredList[0].proposalInsuredProductList||[],(e=>(s(),f(o,{key:e.productId},{default:k((()=>{var r,t;return[c(ae,{"product-risk-list":e.proposalProductRiskList,"product-info":e,"product-num":(null===(r=h.value.proposalInsuredList[0])||void 0===r||null===(t=r.proposalInsuredProductList)||void 0===t?void 0:t.length)-1,"product-data":S.value.productCollection[e.productId],"pick-product-premium":N,onAddRiderRisk:E,onUpdateRisk:q,onDeleteRisk:U},null,8,["product-risk-list","product-info","product-num","product-data"])]})),_:2},1024)))),128)),n("div",le,[c(y,{activated:"",round:34,onClick:M},{default:k((()=>[se])),_:1})])]),n("div",de,[n("span",ue,[pe,n("span",ne,"￥"+m(h.value.totalPremium.toLocaleString()),1)]),n("div",ce,[c(b,{type:"primary",onClick:A},{default:k((()=>[me])),_:1})])]),v(r)?(s(),f(V,{key:0,"is-show":v(r),type:S.value.type,"rider-risk":(null===(e=S.value.riderRisk)||void 0===e?void 0:e[S.value.productId])||[],"product-data":S.value.productCollection[S.value.productId],"form-info":S.value.productInfo,holder:h.value.proposalHolder,insured:h.value.proposalInsuredList[0],"current-risk":S.value.currentRisk,onClose:K,onFinished:B},null,8,["is-show","type","rider-risk","product-data","form-info","holder","insured","current-risk"])):g("",!0)]})),_:1})}}}),[["__scopeId","data-v-3167791f"]]))}}}))}();
