!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-product-list-wrapper .content[data-v-7995980e]{padding:0 var(--zaui-card-border, .4rem)}.com-product-list-wrapper .premium-total[data-v-7995980e]{padding:0 var(--zaui-card-border, .4rem);font-size:.34667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;margin:.26667rem 0 .4rem}.com-product-list-wrapper .premium-total .premium[data-v-7995980e]{color:#ff5840;font-weight:600}.com-product-list-wrapper .risk-item-wrapper[data-v-7995980e]{margin:var(--zaui-card-border, .4rem);background-color:#f6f6fa;border-radius:.26667rem}.com-product-list-wrapper .risk-item-wrapper[data-v-7995980e] .card-title .van-cell{background-color:#f6f6fa;padding-bottom:0;border-radius:.26667rem}.com-product-list-wrapper .risk-item-wrapper .premium[data-v-7995980e]{color:var(--zaui-price, #ff5840)}.com-product-list-wrapper .risk-item-wrapper .risk-premium[data-v-7995980e]{color:#333;font-weight:400;font-size:.34667rem}.com-product-list-wrapper .risk-item-wrapper .risk-factor[data-v-7995980e]{display:flex;justify-content:space-between}.com-product-list-wrapper .risk-item-wrapper .risk-factor .factor[data-v-7995980e]{display:flex;flex-direction:column;align-items:center;padding:.37333rem 0 .54667rem}.com-product-list-wrapper .risk-item-wrapper .risk-factor .factor .factor-value[data-v-7995980e]{width:100%;text-align:center;font-size:.37333rem;font-family:Arial-BoldMT,Arial,self;font-weight:400;color:#393d46;line-height:.42667rem;margin-bottom:.10667rem}.com-product-list-wrapper .risk-item-wrapper .risk-factor .factor .factor-name[data-v-7995980e]{width:100%;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC,serif;font-weight:400;color:#99a9c0;line-height:.44rem}.com-product-list-wrapper .risk-item-wrapper .operate-bar[data-v-7995980e]{display:flex;align-content:center;justify-content:flex-end;padding-bottom:.26667rem}.com-product-list-wrapper .risk-item-wrapper .operate-bar .border[data-v-7995980e]{border:.02667rem solid #e6e6eb}.com-product-list-wrapper .risk-item-wrapper .operate-bar[data-v-7995980e] .com-check-btn{margin-left:.21333rem}@charset "UTF-8";.page-create-wrapper[data-v-d24bf354]{background-color:#f2f5fc}.page-create-wrapper .container[data-v-d24bf354]{padding:.4rem .4rem 2.4rem}.page-create-wrapper .container[data-v-d24bf354] .com-card-wrap .body{padding:0}.page-create-wrapper .container .operate-bar[data-v-d24bf354]{width:100%;justify-content:center;display:flex;margin-top:.53333rem}.page-create-wrapper .container .operate-bar[data-v-d24bf354] .com-check-btn{height:.90667rem;width:3.2rem}.page-create-wrapper .footer-bar[data-v-d24bf354]{position:fixed;width:100%;bottom:0;left:0;background-color:#fff;height:2rem;padding:.4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #efeff4}.page-create-wrapper .footer-bar .trial-result[data-v-d24bf354]{width:5.86667rem;color:#ff5840;font-size:.32rem;font-weight:600}.page-create-wrapper .footer-bar .trial-result .result-num[data-v-d24bf354]{font-size:.61333rem;font-weight:500;margin-left:.17333rem}.page-create-wrapper .footer-bar .trial-operate button[data-v-d24bf354]{width:3.73333rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-6afbc92b.js","./index-legacy-78790db1.js","./index-legacy-18d3d8f1.js","./trial-legacy-5e7d78d2.js","./useDicData-legacy-8aae4f71.js","./index-legacy-7010c8b9.js","./trial-legacy-d72c3d1e.js","./useStorage-legacy-2f3b2251.js"],(function(e){"use strict";var r,a,t,o,i,l,d,s,u,p,n,c,m,v,f,k,g,h,I,b,L,y,w,P,R,C,V,D,_,j,x,O,T,S;return{setters:[function(e){r=e.g,a=e.a5,t=e.C,o=e.x,i=e.X,l=e.r,d=e.h,s=e.m,u=e.F,p=e.E,n=e.y,c=e.n,m=e.I,v=e.z,f=e.j,k=e.k,g=e.s,h=e.B,I=e.a1,b=e.a2,L=e.aj,y=e.Q,w=e.o,P=e.d,R=e.a6,C=e.D},function(e){V=e.u,D=e.P},function(e){_=e.b,j=e._,x=e.p,O=e.q},function(e){T=e.a},function(e){S=e.u},function(){},function(){},function(){}],execute:function(){const U=e=>(I("data-v-7995980e"),e=e(),b(),e),F={class:"com-product-list-wrapper"},z={class:"risk-item-wrapper"},N={class:"content"},q={class:"risk-premium"},E=h(" 保费:"),Y={class:"premium"},M={class:"risk-factor"},$={class:"factor"},B={class:"factor-value"},A=U((()=>n("span",{class:"factor-name"}," 保额(元) ",-1))),H={class:"factor"},K={class:"factor-value"},Q=U((()=>n("span",{class:"factor-name"}," 保障期间 ",-1))),W={class:"factor"},X={class:"factor-value"},G=U((()=>n("span",{class:"factor-name"}," 缴费期间 ",-1))),J={class:"operate-bar"},Z=h("删除"),ee=h("+ 附加险"),re=h("修改"),ae={class:"premium-total"},te=h(" 保费: "),oe={class:"premium"};var ie=j(r({props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:r}){const h=e,[I,b]=a(),L=t({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),y=S("RISK_PAYMENT_PERIOD"),w=S("RISK_INSURANCE_PERIOD"),P=o((()=>{var e,r;return(null===(e=h.productData)||void 0===e||null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]})),R=o((()=>{var e,r;const a=h.productRiskList.map((e=>e.riskId)),t=((null===(e=h.productData)||void 0===e||null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList)||[]).filter((e=>a.includes(e.id)&&1===e.collocationType));return P.value.length-t.length})),C=o((()=>e=>{var r,a;const t=(null===(r=h.productData)||void 0===r||null===(a=r.productRiskVoList)||void 0===a?void 0:a[0].riskDetailVOList.find((r=>r.id!==e)))||{};let o=!1;return o=!!h.productNum||2===t.riskType&&1===t.collocationType,o})),V=o((()=>{var e,r;return(null===(e=h.productData)||void 0===e||null===(r=e.productRiskVoList)||void 0===r?void 0:r[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),D=o((()=>V.value.collocationVOList||[])),_=(e,a)=>{const t=e.map((e=>e.id)).filter((e=>!L.value.disabledList.includes(e)));r("addRiderRisk",t,h.productInfo)};return i((()=>h.productInfo),(e=>{var r;let a=0;(e.proposalProductRiskList||[]).forEach((e=>{a+=e.premium})),null===(r=h.pickProductPremium)||void 0===r||r.call(h,{[`${e.productId}`]:a}),L.value.totalPremium=a}),{deep:!0,immediate:!0}),i((()=>h.productRiskList),(e=>{const r=[],a=[],t=[];(e||[]).forEach((e=>{1===e.riskType?r.unshift(e):(a.push(e.riskId),t.push(e.riskId),r.push(e))})),L.value.disabledList=a,L.value.checkedList=t,L.value.productRiskList=r}),{deep:!0,immediate:!0}),(e,a)=>{const t=l("ProTitle"),o=l("ProCheckButton");return d(),s("div",F,[(d(!0),s(u,null,p(L.value.productRiskList,(e=>{var a,i;return d(),s("div",{key:e.riskId},[n("div",z,[c(t,{"risk-type":e.riskType,title:e.riskName},null,8,["risk-type","title"]),n("div",N,[n("div",q,[E,n("span",Y,"￥"+m(null===(a=e.premium)||void 0===a?void 0:a.toLocaleString()),1)]),n("div",M,[n("div",$,[n("span",B,m(null===(i=e.amount)||void 0===i?void 0:i.toLocaleString()),1),A]),n("div",H,[n("span",K,m(v(x)(v(w),e.coveragePeriod)),1),Q]),n("div",W,[n("span",X,m(v(x)(v(y),e.chargePeriod)),1),G])]),n("div",J,[v(C)(e.riskId)?(d(),f(o,{key:0,round:32,class:"border",onClick:a=>{r("deleteRisk",e,h.productInfo)}},{default:k((()=>[Z])),_:2},1032,["onClick"])):g("",!0),v(R)?(d(),f(o,{key:1,activated:"",round:32,onClick:r=>{return a=e,b(!0),void(L.value.currentRiskRecord=a);var a}},{default:k((()=>[ee])),_:2},1032,["onClick"])):g("",!0),c(o,{activated:"",round:32,onClick:a=>{r("updateRisk",e,h.productInfo)}},{default:k((()=>[re])),_:2},1032,["onClick"])])])])])})),128)),n("div",ae,[te,n("span",oe,"￥"+m(L.value.totalPremium.toLocaleString()),1)]),v(I)?(d(),f(T,{key:0,modelValue:L.value.checkedList,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value.checkedList=e),show:v(I),disabled:L.value.disabledList,"risk-list":v(P),"collocation-list":v(D),onFinished:_,onClose:a[1]||(a[1]=e=>v(b)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):g("",!0)])}}}),[["__scopeId","data-v-7995980e"]]);const le={class:"container"},de=(e=>(I("data-v-d24bf354"),e=e(),b(),e))((()=>n("span",null,"计划书名称",-1))),se={class:"operate-bar"},ue=h("添加主险"),pe={class:"footer-bar"},ne={class:"trial-result"},ce=h(" 总保费 "),me={class:"result-num"},ve={class:"trial-operate"},fe=h("保存并预览");e("default",j(r({setup(e){const[r,h]=a(),[I,b]=a(),j=t({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),x=L(),T=y(),S=V(),{id:U,type:F="add",isCreateProposal:z}=T.query,N=t({productId:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),q=t();t({}),t([]),o((()=>({min:"",max:""})));const E=(e,r,a)=>/^.{1,20}$/.test(r)?"":`${e}不能超过20个字符`,Y=(e={})=>{Object.assign(N.value.productPremium,e),j.value.totalPremium=Object.values(N.value.productPremium).reduce(((e,r)=>e+r),0)},M=(e,r)=>{const a=r;C.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?(j.value.proposalInsuredList[0].proposalInsuredProductList=j.value.proposalInsuredList[0].proposalInsuredProductList.filter((e=>e.productId!==a.productId)),Y({[a.productId]:0})):a.proposalProductRiskList=a.proposalProductRiskList.filter((r=>r.riskId!==e.riskId))}))},$=(e,r)=>{N.value.productId=r.productId,N.value.productInfo=r,N.value.type="edit",N.value.currentRisk=[e.riskId],b(!0)},B=(e,r)=>{N.value.productId=r.productId,N.value.productInfo=r,N.value.type="addRiderRisk",N.value.currentRisk=e,b(!0)},A=()=>{((e={})=>_.get(`/api/app/insure/proposal/queryProposalDetail/${e.id}`,e))({id:U}).then((({code:e,data:r})=>{"10000"===e&&Object.assign(j.value,r)}))},H=()=>{q.value.validate().then((()=>{var e;(e=j.value,_.post("/api/app/insure/proposal/addOrUpdateProposal",e)).then((({code:e,data:r})=>{"10000"===e&&(S.$reset(),x.push({path:"/compositionProposal",query:{id:r}}))}))}))},K=e=>{j.value.proposalInsuredList[0].proposalInsuredProductList=j.value.proposalInsuredList[0].proposalInsuredProductList.map((r=>{let a=r;return r.productId===e.proposalInsuredList[0].proposalInsuredProductList[0].productId&&(a={...e.proposalInsuredList[0].proposalInsuredProductList[0]}),a})),b(!1)},Q=e=>{((e={})=>_.post("/api/app/insure/product/listInsureProductDetail",e))(e).then((({code:e,data:r})=>{"10000"===e&&(N.value.productCollection=r)})).finally((()=>{}))},W=()=>{S.setProposalInfo(j.value),S.setTrialData([]),S.setExcludeProduct(Object.keys(N.value.productCollection)),x.push({path:"/proposalList",query:{isCreateProposal:"1",...T.query}})},X=()=>{b(!1)};return w((()=>{const e=S.$state.trialData,r=S.$state.proposalInfo;U&&!z?A():!Object.keys(r).length&&e.length?Object.assign(j.value,e[0]):Object.keys(r).length&&e.length?(r.proposalInsuredList[0].proposalInsuredProductList.push(...e[0].proposalInsuredList[0].proposalInsuredProductList),j.value=r):Object.keys(r).length&&!e.length&&(j.value=r)})),i((()=>{var e;return null===(e=j.value.proposalInsuredList[0].proposalInsuredProductList)||void 0===e?void 0:e.length}),(()=>{const e=j.value.proposalInsuredList[0].proposalInsuredProductList.map((e=>({productId:e.productId,source:2})));Q({voList:e})})),(e,a)=>{const t=l("VanField"),o=l("ProCard"),i=l("ProRadioButton"),b=l("VanForm"),L=l("ProCheckButton"),y=l("VanButton"),w=l("van-datetime-picker"),C=l("van-popup"),V=l("ProPageWrap");return d(),f(V,{class:"page-create-wrapper"},{default:k((()=>{var e;return[n("div",le,[c(b,{ref_key:"formRef",ref:q,"input-align":"right","error-message-align":"right"},{default:k((()=>[c(o,null,{default:k((()=>[c(t,{modelValue:j.value.proposalName,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value.proposalName=e),name:"proposalName",placeholder:"请输入计划书名称",rules:[{required:!0,message:"请输入计划书名称"},{validator:(...e)=>E("计划书名称",...e)}]},{label:k((()=>[de])),_:1},8,["modelValue","rules"])])),_:1}),c(o,{title:"被保人信息"},{default:k((()=>[c(t,{modelValue:j.value.proposalInsuredList[0].name,"onUpdate:modelValue":a[1]||(a[1]=e=>j.value.proposalInsuredList[0].name=e),name:"name",label:"姓名",rules:[{validator:(...e)=>E("姓名",...e)}],placeholder:"请输入（选填）"},null,8,["modelValue","rules"]),c(t,{modelValue:j.value.proposalInsuredList[0].birthday,"onUpdate:modelValue":a[2]||(a[2]=e=>j.value.proposalInsuredList[0].birthday=e),name:"birthday",label:"出生日期",formate:"YYYY-MM-DD","is-link":"",readonly:"",placeholder:"请选择",rules:[{required:!0,message:"请选择"}],onClick:a[3]||(a[3]=e=>v(h)(!0))},null,8,["modelValue"]),c(t,{modelValue:j.value.proposalInsuredList[0].gender,"onUpdate:modelValue":a[5]||(a[5]=e=>j.value.proposalInsuredList[0].gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择"}]},{input:k((()=>[c(i,{modelValue:j.value.proposalInsuredList[0].gender,"onUpdate:modelValue":a[4]||(a[4]=e=>j.value.proposalInsuredList[0].gender=e),options:v(O)},null,8,["modelValue","options"])])),_:1},8,["modelValue"])])),_:1})])),_:1},512),(d(!0),s(u,null,p(j.value.proposalInsuredList[0].proposalInsuredProductList||[],(e=>(d(),f(o,{key:e.productId},{default:k((()=>{var r,a;return[c(ie,{"product-risk-list":e.proposalProductRiskList,"product-info":e,"product-num":(null===(r=j.value.proposalInsuredList[0])||void 0===r||null===(a=r.proposalInsuredProductList)||void 0===a?void 0:a.length)-1,"product-data":N.value.productCollection[e.productId],"pick-product-premium":Y,onAddRiderRisk:B,onUpdateRisk:$,onDeleteRisk:M},null,8,["product-risk-list","product-info","product-num","product-data"])]})),_:2},1024)))),128)),n("div",se,[c(L,{activated:"",round:34,onClick:W},{default:k((()=>[ue])),_:1})])]),n("div",pe,[n("span",ne,[ce,n("span",me,"￥"+m(j.value.totalPremium.toLocaleString()),1)]),n("div",ve,[c(y,{type:"primary",onClick:H},{default:k((()=>[fe])),_:1})])]),c(C,{show:v(r),"onUpdate:show":a[8]||(a[8]=e=>R(r)?r.value=e:null),position:"bottom"},{default:k((()=>{var e,r,t,o;return[c(w,{type:"date","min-date":new Date(null===(e=j.value.proposalInsuredList[0])||void 0===e||null===(r=e.dateRange)||void 0===r?void 0:r.min),"max-date":new Date(null===(t=j.value.proposalInsuredList[0])||void 0===t||null===(o=t.dateRange)||void 0===o?void 0:o.max),onConfirm:a[6]||(a[6]=e=>{j.value.proposalInsuredList[0].birthday=v(P)(e).format("YYYY-MM-DD"),v(h)(!1)}),onCancel:a[7]||(a[7]=e=>v(h)(!1))},null,8,["min-date","max-date"])]})),_:1},8,["show"]),v(I)?(d(),f(D,{key:0,"is-show":v(I),type:N.value.type,"rider-risk":(null===(e=N.value.riderRisk)||void 0===e?void 0:e[N.value.productId])||[],"product-data":N.value.productCollection[N.value.productId],"form-info":N.value.productInfo,holder:j.value.proposalHolder,insured:j.value.proposalInsuredList[0],"current-risk":N.value.currentRisk,onClose:X,onFinished:K},null,8,["is-show","type","rider-risk","product-data","form-info","holder","insured","current-risk"])):g("",!0)]})),_:1})}}}),[["__scopeId","data-v-d24bf354"]]))}}}))}();
