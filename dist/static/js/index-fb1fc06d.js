import{m as e,V as a,r as s,e as r,a1 as o,s as t,t as l,y as d,F as u,L as i,G as p,z as n,O as c,H as v,v as m,x as k,B as I,J as f,a7 as L,a8 as h,ac as P,u as R,n as y,W as g,D as b}from"./vendor-ec128989.js";import{u as V,P as C}from"./index-7ccaa833.js";import{q as _,a as D,b as j}from"./createProposal-90331694.js";import{_ as O,R as T,L as w}from"./index-851d6f85.js";import{R as N}from"./index-85c41e77.js";import{u as U}from"./useDicData-f1fa0114.js";import"./trial-3ce4ad40.js";import"./trial-5fa0ea82.js";const S=e=>(L("data-v-cd47605e"),e=e(),h(),e),x={class:"com-product-list-wrapper"},$={class:"risk-item-wrapper"},q={class:"content"},E={class:"risk-premium"},F=f(" 保费:"),B={class:"premium"},A={class:"risk-factor"},H={class:"factor"},K={class:"factor-value"},W=S((()=>p("span",{class:"factor-name"}," 保额(元) ",-1))),z={class:"factor"},G={class:"factor-value"},J=S((()=>p("span",{class:"factor-name"}," 保障期间 ",-1))),M={class:"factor"},Y={class:"factor-value"},Q=S((()=>p("span",{class:"factor-name"}," 缴费期间 ",-1))),X={class:"operate-bar"},Z=f("删除"),ee=S((()=>p("span",{class:"btn-plus"},"+",-1))),ae=f(" 附加险"),se=f("修改"),re={key:0,class:"premium-total"},oe=f(" 保费: "),te={class:"premium"};var le=O(e({props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:f}){const L=e,[h,P]=a(),R=s({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),y=U("RISK_PAYMENT_PERIOD"),g=U("RISK_INSURANCE_PERIOD"),b=r((()=>{var e,a;return(null==(a=null==(e=L.productData)?void 0:e.productRiskVoList)?void 0:a[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]})),V=r((()=>{var e,a;const s=L.productRiskList.map((e=>e.riskId)),r=((null==(a=null==(e=L.productData)?void 0:e.productRiskVoList)?void 0:a[0].riskDetailVOList)||[]).filter((e=>s.includes(e.id)&&1===e.collocationType));return b.value.length-r.length})),C=r((()=>e=>{var a,s;const r=(null==(s=null==(a=L.productData)?void 0:a.productRiskVoList)?void 0:s[0].riskDetailVOList.find((a=>a.id!==e)))||{};let o=!1;return o=!!L.productNum||2===r.riskType&&1===r.collocationType,o})),_=r((()=>{var e,a;return(null==(a=null==(e=L.productData)?void 0:e.productRiskVoList)?void 0:a[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),D=r((()=>_.value.collocationVOList||[])),j=(e,a)=>{const s=e.map((e=>e.id)).filter((e=>!R.value.disabledList.includes(e)));f("addRiderRisk",s,L.productInfo)};return o((()=>L.productInfo),(e=>{var a;let s=0;(e.proposalProductRiskList||[]).forEach((e=>{s+=e.premium})),null==(a=L.pickProductPremium)||a.call(L,{[`${e.productId}`]:s}),R.value.totalPremium=s}),{deep:!0,immediate:!0}),o((()=>L.productRiskList),(e=>{const a=[],s=[],r=[];(e||[]).forEach((e=>{1===e.riskType?a.unshift(e):(s.push(e.riskId),r.push(e.riskId),a.push(e))})),R.value.disabledList=s,R.value.checkedList=r,R.value.productRiskList=a}),{deep:!0,immediate:!0}),(e,a)=>{const s=t("ProTitle"),r=t("ProCheckButton");return l(),d("div",x,[(l(!0),d(u,null,i(R.value.productRiskList,(e=>{var a,o;return l(),d("div",{key:e.riskId},[p("div",$,[n(s,{"risk-type":e.riskType,title:e.riskName,class:"no-border"},null,8,["risk-type","title"]),p("div",q,[p("div",E,[F,p("span",B,"￥"+c(null==(a=e.premium)?void 0:a.toLocaleString()),1)]),p("div",A,[p("div",H,[p("span",K,c(null==(o=e.amount)?void 0:o.toLocaleString()),1),W]),p("div",z,[p("span",G,c(v(T)(v(g),e.coveragePeriod)),1),J]),p("div",M,[p("span",Y,c(v(T)(v(y),e.chargePeriod)),1),Q])]),p("div",X,[v(C)(e.riskId)?(l(),m(r,{key:0,round:32,class:"border",onClick:a=>{f("deleteRisk",e,L.productInfo)}},{default:k((()=>[Z])),_:2},1032,["onClick"])):I("",!0),v(V)?(l(),m(r,{key:1,activated:"",round:32,class:"btn-rider-risk",onClick:a=>{return s=e,P(!0),void(R.value.currentRiskRecord=s);var s}},{default:k((()=>[ee,ae])),_:2},1032,["onClick"])):I("",!0),n(r,{activated:"",round:32,onClick:a=>{f("updateRisk",e,L.productInfo)}},{default:k((()=>[se])),_:2},1032,["onClick"])])])])])})),128)),R.value.productRiskList.length>1?(l(),d("div",re,[oe,p("span",te,"￥"+c(R.value.totalPremium.toLocaleString()),1)])):I("",!0),v(h)?(l(),m(N,{key:1,modelValue:R.value.checkedList,"onUpdate:modelValue":a[0]||(a[0]=e=>R.value.checkedList=e),show:v(h),disabled:R.value.disabledList,"risk-list":v(b),"collocation-list":v(D),onFinished:j,onClose:a[1]||(a[1]=e=>v(P)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):I("",!0)])}}}),[["__scopeId","data-v-cd47605e"]]);const de={class:"container"},ue=(e=>(L("data-v-4f24fb6d"),e=e(),h(),e))((()=>p("span",{class:"plan-name"},"计划书名称",-1))),ie={class:"operate-bar"},pe=f("添加主险"),ne={class:"footer-bar"},ce={class:"trial-result"},ve=f("总保费"),me={class:"result-num"},ke={class:"trial-operate"},Ie=f("保存并预览");var fe=O(e({setup(e){const f=[{name:"保存修改"},{name:"另存为新计划书"}],[L,h]=a(),[O,T]=a(),N=s({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),U=P(),S=R(),x=V(),{id:$,type:q="add",isCreateProposal:E}=S.query,F=s({productId:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),B=s();s({}),s([]),r((()=>({min:"",max:""})));const A=()=>{B.value.validate().then((()=>{j(N.value).then((({code:e,data:a})=>{"10000"===e&&(x.$reset(),x.proposalId=a,U.push({path:"/compositionProposal",query:{id:a}}))}))}))},H=()=>{!$&&x.proposalId?T(!0):A()},K=(e,a)=>{a&&(N.value.id=null),A()},W=(e,a,s)=>a?/^.{1,20}$/.test(a)?"":`${e}不能超过20个字符`:"",z=(e={})=>{Object.assign(F.value.productPremium,e),N.value.totalPremium=Object.values(F.value.productPremium).reduce(((e,a)=>e+a),0)},G=(e,a)=>{const s=a;b.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?(N.value.proposalInsuredList[0].proposalInsuredProductList=N.value.proposalInsuredList[0].proposalInsuredProductList.filter((e=>e.productId!==s.productId)),z({[s.productId]:0})):s.proposalProductRiskList=s.proposalProductRiskList.filter((a=>a.riskId!==e.riskId))}))},J=(e,a)=>{F.value.productId=a.productId,F.value.productInfo=a,F.value.type="edit",F.value.currentRisk=[e.riskId],h(!0)},M=(e,a)=>{F.value.productId=a.productId,F.value.productInfo=a,F.value.type="addRiderRisk",F.value.currentRisk=e,h(!0)},Y=e=>{N.value.proposalInsuredList[0].proposalInsuredProductList=N.value.proposalInsuredList[0].proposalInsuredProductList.map((a=>{let s=a;return a.productId===e.proposalInsuredList[0].proposalInsuredProductList[0].productId&&(s={...e.proposalInsuredList[0].proposalInsuredProductList[0]}),s})),h(!1)},Q=()=>{x.setProposalInfo(N.value),x.setTrialData([]),x.setExcludeProduct(Object.keys(F.value.productCollection)),U.push({path:"/proposalList",query:{isCreateProposal:"1",...S.query}})},X=()=>{h(!1)};return y((()=>{const e=x.$state.trialData,a=x.$state.proposalInfo,s=x.$state.proposalId;$&&!E||s?(((e={})=>{_(e).then((({code:e,data:a})=>{"10000"===e&&Object.assign(N.value,a)}))})({id:$||s}),x.$reset()):!Object.keys(a).length&&e.length?Object.assign(N.value,e[0]):Object.keys(a).length&&e.length?(a.proposalInsuredList[0].proposalInsuredProductList.push(...e[0].proposalInsuredList[0].proposalInsuredProductList),N.value=a):Object.keys(a).length&&!e.length&&(N.value=a),x.setTrialData([])})),o((()=>{var e;return null==(e=N.value.proposalInsuredList[0].proposalInsuredProductList)?void 0:e.length}),(()=>{const e=N.value.proposalInsuredList[0].proposalInsuredProductList.map((e=>({productId:e.productId,source:2})));D({voList:e}).then((({code:e,data:a})=>{"10000"===e&&(F.value.productCollection=a)})).finally((()=>{}))})),(e,a)=>{const s=t("VanField"),r=t("ProCard"),o=t("ProDatePicker"),h=t("ProRadioButton"),P=t("VanForm"),R=t("ProCheckButton"),y=t("VanButton"),b=t("VanActionSheet"),V=t("ProPageWrap");return l(),m(V,{class:"page-create-wrapper"},{default:k((()=>{var e;return[p("div",de,[n(P,{ref_key:"formRef",ref:B,"input-align":"right","error-message-align":"right"},{default:k((()=>[n(r,{"show-line":!1},{default:k((()=>[n(s,{modelValue:N.value.proposalName,"onUpdate:modelValue":a[0]||(a[0]=e=>N.value.proposalName=e),class:"border-radius",name:"proposalName",placeholder:"请输入计划书名称",rules:[{validator:(...e)=>W("计划书名称",...e)}]},{label:k((()=>[ue])),_:1},8,["modelValue","rules"])])),_:1}),n(r,{title:"被保人信息"},{default:k((()=>[n(s,{modelValue:N.value.proposalInsuredList[0].name,"onUpdate:modelValue":a[1]||(a[1]=e=>N.value.proposalInsuredList[0].name=e),name:"name",label:"姓名",rules:[{validator:(...e)=>W("姓名",...e)}],placeholder:"请输入（选填）"},null,8,["modelValue","rules"]),n(o,{modelValue:N.value.proposalInsuredList[0].birthday,"onUpdate:modelValue":a[2]||(a[2]=e=>N.value.proposalInsuredList[0].birthday=e),name:"birthday",label:"出生日期",type:"date","is-link":"",readonly:"",placeholder:"请选择",rules:[{required:!0,message:"请选择"}]},null,8,["modelValue"]),n(s,{modelValue:N.value.proposalInsuredList[0].gender,"onUpdate:modelValue":a[4]||(a[4]=e=>N.value.proposalInsuredList[0].gender=e),name:"gender",label:"性别",class:"border-radius",rules:[{required:!0,message:"请选择"}]},{input:k((()=>[n(h,{modelValue:N.value.proposalInsuredList[0].gender,"onUpdate:modelValue":a[3]||(a[3]=e=>N.value.proposalInsuredList[0].gender=e),options:v(w)},null,8,["modelValue","options"])])),_:1},8,["modelValue"])])),_:1})])),_:1},512),(l(!0),d(u,null,i(N.value.proposalInsuredList[0].proposalInsuredProductList||[],(e=>(l(),m(r,{key:e.productId,"show-line":!1},{default:k((()=>{var a,s;return[n(le,{"product-risk-list":e.proposalProductRiskList,"product-info":e,"product-num":(null==(s=null==(a=N.value.proposalInsuredList[0])?void 0:a.proposalInsuredProductList)?void 0:s.length)-1,"product-data":F.value.productCollection[e.productId],"pick-product-premium":z,onAddRiderRisk:M,onUpdateRisk:J,onDeleteRisk:G},null,8,["product-risk-list","product-info","product-num","product-data"])]})),_:2},1024)))),128)),p("div",ie,[n(R,{activated:"",round:34,onClick:Q},{default:k((()=>[pe])),_:1})])]),p("div",ne,[p("span",ce,[ve,p("span",me,"￥"+c(N.value.totalPremium.toLocaleString()),1)]),p("div",ke,[n(y,{type:"primary",onClick:H},{default:k((()=>[Ie])),_:1})])]),v(L)?(l(),m(C,{key:0,"is-show":v(L),type:F.value.type,"rider-risk":(null==(e=F.value.riderRisk)?void 0:e[F.value.productId])||[],"product-data":F.value.productCollection[F.value.productId],"form-info":F.value.productInfo,holder:N.value.proposalHolder,insured:N.value.proposalInsuredList[0],"current-risk":F.value.currentRisk,onClose:X,onFinished:Y},null,8,["is-show","type","rider-risk","product-data","form-info","holder","insured","current-risk"])):I("",!0),n(b,{show:v(O),"onUpdate:show":a[5]||(a[5]=e=>g(O)?O.value=e:null),actions:f,"cancel-text":"取消","close-on-click-action":"",onCancel:a[6]||(a[6]=e=>v(T)(!1)),onSelect:K},null,8,["show"])]})),_:1})}}}),[["__scopeId","data-v-4f24fb6d"]]);export{fe as default};
