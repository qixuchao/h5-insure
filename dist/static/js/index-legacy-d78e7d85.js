!function(){var e=document.createElement("style");e.innerHTML=".com-product-list-wrapper .content[data-v-7995980e]{padding:0 var(--zaui-card-border, .4rem)}.com-product-list-wrapper .premium-total[data-v-7995980e]{padding:0 var(--zaui-card-border, .4rem);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;margin:.26667rem 0 .4rem}.com-product-list-wrapper .premium-total .premium[data-v-7995980e]{color:#ff5840;font-weight:600}.com-product-list-wrapper .risk-item-wrapper[data-v-7995980e]{margin:var(--zaui-card-border, .4rem);background-color:#f6f6fa;border-radius:.26667rem}.com-product-list-wrapper .risk-item-wrapper[data-v-7995980e] .card-title .van-cell{background-color:#f6f6fa;padding-bottom:0;border-radius:.26667rem}.com-product-list-wrapper .risk-item-wrapper .premium[data-v-7995980e]{color:var(--zaui-price, #ff5840)}.com-product-list-wrapper .risk-item-wrapper .risk-premium[data-v-7995980e]{color:#333;font-weight:400;font-size:.34667rem}.com-product-list-wrapper .risk-item-wrapper .risk-factor[data-v-7995980e]{display:flex;justify-content:space-between}.com-product-list-wrapper .risk-item-wrapper .risk-factor .factor[data-v-7995980e]{display:flex;flex-direction:column;align-items:center;padding:.37333rem 0 .54667rem}.com-product-list-wrapper .risk-item-wrapper .risk-factor .factor .factor-value[data-v-7995980e]{width:100%;text-align:center;font-size:.37333rem;font-family:Arial-BoldMT,Arial,self;font-weight:400;color:#393d46;line-height:.42667rem;margin-bottom:.10667rem}.com-product-list-wrapper .risk-item-wrapper .risk-factor .factor .factor-name[data-v-7995980e]{width:100%;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC,serif;font-weight:400;color:#99a9c0;line-height:.44rem}.com-product-list-wrapper .risk-item-wrapper .operate-bar[data-v-7995980e]{display:flex;align-content:center;justify-content:flex-end;padding-bottom:.26667rem}.com-product-list-wrapper .risk-item-wrapper .operate-bar .border[data-v-7995980e]{border:.02667rem solid #e6e6eb}.com-product-list-wrapper .risk-item-wrapper .operate-bar[data-v-7995980e] .com-check-btn{margin-left:.21333rem}.page-create-wrapper[data-v-2d1a746f]{background-color:#f2f5fc}.page-create-wrapper .container[data-v-2d1a746f]{padding:.4rem .4rem 2.4rem}.page-create-wrapper .container[data-v-2d1a746f] .com-card-wrap .body{padding:0}.page-create-wrapper .container .operate-bar[data-v-2d1a746f]{width:100%;justify-content:center;display:flex;margin-top:.53333rem}.page-create-wrapper .container .operate-bar[data-v-2d1a746f] .com-check-btn{height:.90667rem;width:3.2rem}.page-create-wrapper .footer-bar[data-v-2d1a746f]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4}.page-create-wrapper .footer-bar .trial-result[data-v-2d1a746f]{width:5.86667rem;color:#ff5840;font-size:.32rem;font-weight:600}.page-create-wrapper .footer-bar .trial-result .result-num[data-v-2d1a746f]{font-size:.61333rem;font-weight:500;margin-left:.17333rem}.page-create-wrapper .footer-bar .trial-operate button[data-v-2d1a746f]{width:3.73333rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-b51aec28.js","./index-legacy-b6f1d344.js","./createProposal-legacy-c4fa6643.js","./index-legacy-96c45d53.js","./index-legacy-f6c30c3d.js","./useDicData-legacy-7205bc56.js","./trial-legacy-9fc97ef7.js","./trial-legacy-12049743.js"],(function(e){"use strict";var r,t,a,o,i,l,s,d,u,p,n,c,m,v,f,k,g,I,h,L,y,b,w,P,R,V,C,_,j,D,x,O,T,S,z;return{setters:[function(e){r=e.g,t=e.Q,a=e.E,o=e.y,i=e._,l=e.r,s=e.j,d=e.n,u=e.F,p=e.G,n=e.z,c=e.p,m=e.J,v=e.A,f=e.k,k=e.m,g=e.t,I=e.C,h=e.a4,L=e.a5,y=e.a9,b=e.O,w=e.o,P=e.R,R=e.D},function(e){V=e.u,C=e.P},function(e){_=e.a,j=e.b,D=e.c},function(e){x=e._,O=e.s,T=e.t},function(e){S=e.a},function(e){z=e.u},function(){},function(){}],execute:function(){const F=e=>(h("data-v-7995980e"),e=e(),L(),e),N={class:"com-product-list-wrapper"},U={class:"risk-item-wrapper"},E={class:"content"},$={class:"risk-premium"},A=I(" 保费:"),q={class:"premium"},B={class:"risk-factor"},H={class:"factor"},M={class:"factor-value"},K=F((()=>n("span",{class:"factor-name"}," 保额(元) ",-1))),G={class:"factor"},J={class:"factor-value"},Q=F((()=>n("span",{class:"factor-name"}," 保障期间 ",-1))),W={class:"factor"},Y={class:"factor-value"},X=F((()=>n("span",{class:"factor-name"}," 缴费期间 ",-1))),Z={class:"operate-bar"},ee=I("删除"),re=I("+ 附加险"),te=I("修改"),ae={class:"premium-total"},oe=I(" 保费: "),ie={class:"premium"};var le=x(r({props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:r}){const I=e,[h,L]=t(),y=a({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),b=z("RISK_PAYMENT_PERIOD"),w=z("RISK_INSURANCE_PERIOD"),P=o((()=>{var e,r;return(null===(e=I.productData)||void 0===e||null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]})),R=o((()=>{var e,r;const t=I.productRiskList.map((e=>e.riskId)),a=((null===(e=I.productData)||void 0===e||null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList)||[]).filter((e=>t.includes(e.id)&&1===e.collocationType));return P.value.length-a.length})),V=o((()=>e=>{var r,t;const a=(null===(r=I.productData)||void 0===r||null===(t=r.productRiskVoList)||void 0===t?void 0:t[0].riskDetailVOList.find((r=>r.id!==e)))||{};let o=!1;return o=!!I.productNum||2===a.riskType&&1===a.collocationType,o})),C=o((()=>{var e,r;return(null===(e=I.productData)||void 0===e||null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),_=o((()=>C.value.collocationVOList||[])),j=(e,t)=>{const a=e.map((e=>e.id)).filter((e=>!y.value.disabledList.includes(e)));r("addRiderRisk",a,I.productInfo)};return i((()=>I.productInfo),(e=>{var r;let t=0;(e.proposalProductRiskList||[]).forEach((e=>{t+=e.premium})),null===(r=I.pickProductPremium)||void 0===r||r.call(I,{[`${e.productId}`]:t}),y.value.totalPremium=t}),{deep:!0,immediate:!0}),i((()=>I.productRiskList),(e=>{const r=[],t=[],a=[];(e||[]).forEach((e=>{1===e.riskType?r.unshift(e):(t.push(e.riskId),a.push(e.riskId),r.push(e))})),y.value.disabledList=t,y.value.checkedList=a,y.value.productRiskList=r}),{deep:!0,immediate:!0}),(e,t)=>{const a=l("ProTitle"),o=l("ProCheckButton");return s(),d("div",N,[(s(!0),d(u,null,p(y.value.productRiskList,(e=>{var t,i;return s(),d("div",{key:e.riskId},[n("div",U,[c(a,{"risk-type":e.riskType,title:e.riskName},null,8,["risk-type","title"]),n("div",E,[n("div",$,[A,n("span",q,"￥"+m(null===(t=e.premium)||void 0===t?void 0:t.toLocaleString()),1)]),n("div",B,[n("div",H,[n("span",M,m(null===(i=e.amount)||void 0===i?void 0:i.toLocaleString()),1),K]),n("div",G,[n("span",J,m(v(O)(v(w),e.coveragePeriod)),1),Q]),n("div",W,[n("span",Y,m(v(O)(v(b),e.chargePeriod)),1),X])]),n("div",Z,[v(V)(e.riskId)?(s(),f(o,{key:0,round:32,class:"border",onClick:t=>{r("deleteRisk",e,I.productInfo)}},{default:k((()=>[ee])),_:2},1032,["onClick"])):g("",!0),v(R)?(s(),f(o,{key:1,activated:"",round:32,onClick:r=>{return t=e,L(!0),void(y.value.currentRiskRecord=t);var t}},{default:k((()=>[re])),_:2},1032,["onClick"])):g("",!0),c(o,{activated:"",round:32,onClick:t=>{r("updateRisk",e,I.productInfo)}},{default:k((()=>[te])),_:2},1032,["onClick"])])])])])})),128)),n("div",ae,[oe,n("span",ie,"￥"+m(y.value.totalPremium.toLocaleString()),1)]),v(h)?(s(),f(S,{key:0,modelValue:y.value.checkedList,"onUpdate:modelValue":t[0]||(t[0]=e=>y.value.checkedList=e),show:v(h),disabled:y.value.disabledList,"risk-list":v(P),"collocation-list":v(_),onFinished:j,onClose:t[1]||(t[1]=e=>v(L)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):g("",!0)])}}}),[["__scopeId","data-v-7995980e"]]);const se={class:"container"},de=(e=>(h("data-v-2d1a746f"),e=e(),L(),e))((()=>n("span",null,"计划书名称",-1))),ue={class:"operate-bar"},pe=I("添加主险"),ne={class:"footer-bar"},ce={class:"trial-result"},me=I(" 总保费 "),ve={class:"result-num"},fe={class:"trial-operate"},ke=I("保存并预览"),ge=r({setup(e){const r=[{name:"保存修改"},{name:"另存为新计划书"}],[I,h]=t(),[L,x]=t(),O=a({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),S=y(),z=b(),F=V(),{id:N,type:U="add",isCreateProposal:E}=z.query,$=a({productId:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),A=a();a({}),a([]),o((()=>({min:"",max:""})));const q=()=>{A.value.validate().then((()=>{j(O.value).then((({code:e,data:r})=>{"10000"===e&&(F.$reset(),F.proposalId=r,S.push({path:"/compositionProposal",query:{id:r}}))}))}))},B=()=>{!N&&F.proposalId?x(!0):q()},H=(e,r)=>{r&&(O.value.id=null),q()},M=(e,r,t)=>r?/^.{1,20}$/.test(r)?"":`${e}不能超过20个字符`:"",K=(e={})=>{Object.assign($.value.productPremium,e),O.value.totalPremium=Object.values($.value.productPremium).reduce(((e,r)=>e+r),0)},G=(e,r)=>{const t=r;R.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?(O.value.proposalInsuredList[0].proposalInsuredProductList=O.value.proposalInsuredList[0].proposalInsuredProductList.filter((e=>e.productId!==t.productId)),K({[t.productId]:0})):t.proposalProductRiskList=t.proposalProductRiskList.filter((r=>r.riskId!==e.riskId))}))},J=(e,r)=>{$.value.productId=r.productId,$.value.productInfo=r,$.value.type="edit",$.value.currentRisk=[e.riskId],h(!0)},Q=(e,r)=>{$.value.productId=r.productId,$.value.productInfo=r,$.value.type="addRiderRisk",$.value.currentRisk=e,h(!0)},W=e=>{O.value.proposalInsuredList[0].proposalInsuredProductList=O.value.proposalInsuredList[0].proposalInsuredProductList.map((r=>{let t=r;return r.productId===e.proposalInsuredList[0].proposalInsuredProductList[0].productId&&(t={...e.proposalInsuredList[0].proposalInsuredProductList[0]}),t})),h(!1)},Y=()=>{F.setProposalInfo(O.value),F.setTrialData([]),F.setExcludeProduct(Object.keys($.value.productCollection)),S.push({path:"/proposalList",query:{isCreateProposal:"1",...z.query}})},X=()=>{h(!1)};return w((()=>{const e=F.$state.trialData,r=F.$state.proposalInfo,t=F.$state.proposalId;N&&!E||t?(((e={})=>{_(e).then((({code:e,data:r})=>{"10000"===e&&Object.assign(O.value,r)}))})({id:N||t}),F.$reset()):!Object.keys(r).length&&e.length?Object.assign(O.value,e[0]):Object.keys(r).length&&e.length?(r.proposalInsuredList[0].proposalInsuredProductList.push(...e[0].proposalInsuredList[0].proposalInsuredProductList),O.value=r):Object.keys(r).length&&!e.length&&(O.value=r),F.setTrialData([])})),i((()=>{var e;return null===(e=O.value.proposalInsuredList[0].proposalInsuredProductList)||void 0===e?void 0:e.length}),(()=>{const e=O.value.proposalInsuredList[0].proposalInsuredProductList.map((e=>({productId:e.productId,source:2})));D({voList:e}).then((({code:e,data:r})=>{"10000"===e&&($.value.productCollection=r)})).finally((()=>{}))})),(e,t)=>{const a=l("VanField"),o=l("ProCard"),i=l("ProDatePicker"),h=l("ProRadioButton"),y=l("VanForm"),b=l("ProCheckButton"),w=l("VanButton"),R=l("VanActionSheet"),V=l("ProPageWrap");return s(),f(V,{class:"page-create-wrapper"},{default:k((()=>{var e;return[n("div",se,[c(y,{ref_key:"formRef",ref:A,"input-align":"right","error-message-align":"right"},{default:k((()=>[c(o,null,{default:k((()=>[c(a,{modelValue:O.value.proposalName,"onUpdate:modelValue":t[0]||(t[0]=e=>O.value.proposalName=e),name:"proposalName",placeholder:"请输入计划书名称",rules:[{validator:(...e)=>M("计划书名称",...e)}]},{label:k((()=>[de])),_:1},8,["modelValue","rules"])])),_:1}),c(o,{title:"被保人信息"},{default:k((()=>[c(a,{modelValue:O.value.proposalInsuredList[0].name,"onUpdate:modelValue":t[1]||(t[1]=e=>O.value.proposalInsuredList[0].name=e),name:"name",label:"姓名",rules:[{validator:(...e)=>M("姓名",...e)}],placeholder:"请输入（选填）"},null,8,["modelValue","rules"]),c(i,{modelValue:O.value.proposalInsuredList[0].birthday,"onUpdate:modelValue":t[2]||(t[2]=e=>O.value.proposalInsuredList[0].birthday=e),name:"birthday",label:"出生日期",type:"date","is-link":"",readonly:"",placeholder:"请选择",rules:[{required:!0,message:"请选择"}]},null,8,["modelValue"]),c(a,{modelValue:O.value.proposalInsuredList[0].gender,"onUpdate:modelValue":t[4]||(t[4]=e=>O.value.proposalInsuredList[0].gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择"}]},{input:k((()=>[c(h,{modelValue:O.value.proposalInsuredList[0].gender,"onUpdate:modelValue":t[3]||(t[3]=e=>O.value.proposalInsuredList[0].gender=e),options:v(T)},null,8,["modelValue","options"])])),_:1},8,["modelValue"])])),_:1})])),_:1},512),(s(!0),d(u,null,p(O.value.proposalInsuredList[0].proposalInsuredProductList||[],(e=>(s(),f(o,{key:e.productId},{default:k((()=>{var r,t;return[c(le,{"product-risk-list":e.proposalProductRiskList,"product-info":e,"product-num":(null===(r=O.value.proposalInsuredList[0])||void 0===r||null===(t=r.proposalInsuredProductList)||void 0===t?void 0:t.length)-1,"product-data":$.value.productCollection[e.productId],"pick-product-premium":K,onAddRiderRisk:Q,onUpdateRisk:J,onDeleteRisk:G},null,8,["product-risk-list","product-info","product-num","product-data"])]})),_:2},1024)))),128)),n("div",ue,[c(b,{activated:"",round:34,onClick:Y},{default:k((()=>[pe])),_:1})])]),n("div",ne,[n("span",ce,[me,n("span",ve,"￥"+m(O.value.totalPremium.toLocaleString()),1)]),n("div",fe,[c(w,{type:"primary",onClick:B},{default:k((()=>[ke])),_:1})])]),v(I)?(s(),f(C,{key:0,"is-show":v(I),type:$.value.type,"rider-risk":(null===(e=$.value.riderRisk)||void 0===e?void 0:e[$.value.productId])||[],"product-data":$.value.productCollection[$.value.productId],"form-info":$.value.productInfo,holder:O.value.proposalHolder,insured:O.value.proposalInsuredList[0],"current-risk":$.value.currentRisk,onClose:X,onFinished:W},null,8,["is-show","type","rider-risk","product-data","form-info","holder","insured","current-risk"])):g("",!0),c(R,{show:v(L),"onUpdate:show":t[5]||(t[5]=e=>P(L)?L.value=e:null),actions:r,"cancel-text":"取消","close-on-click-action":"",onCancel:t[6]||(t[6]=e=>v(x)(!1)),onSelect:H},null,8,["show"])]})),_:1})}}});e("default",x(ge,[["__scopeId","data-v-2d1a746f"]]))}}}))}();
