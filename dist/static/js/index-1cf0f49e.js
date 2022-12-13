import{_ as e,d as a,H as s,r,y as o,a8 as t,b as l,c as d,g as i,F as u,h as p,i as n,f as c,t as v,l as m,ay as k,e as I,w as f,j as L,n as h,L as P,M as R,u as y,a as b,ao as g,au as V,az as C,a5 as _}from"./index-b655107d.js";import{u as D,P as j}from"./index-57c15ac3.js";import{q as O,a as w,b as T}from"./createProposal-f7b1cd90.js";import{R as N}from"./index-dfa46725.js";import{u as U}from"./useDicData-c0372376.js";import"./pdfdist-666d4573.js";import"./trial-79b88bf9.js";import"./trial-493ad29c.js";const S=e=>(P("data-v-cd47605e"),e=e(),R(),e),$={class:"com-product-list-wrapper"},q={class:"risk-item-wrapper"},x={class:"content"},E={class:"risk-premium"},F=h(" 保费:"),A={class:"premium"},B={class:"risk-factor"},H={class:"factor"},K={class:"factor-value"},M=S((()=>n("span",{class:"factor-name"}," 保额(元) ",-1))),z={class:"factor"},W={class:"factor-value"},Y=S((()=>n("span",{class:"factor-name"}," 保障期间 ",-1))),G={class:"factor"},J={class:"factor-value"},Q=S((()=>n("span",{class:"factor-name"}," 缴费期间 ",-1))),X={class:"operate-bar"},Z=h("删除"),ee=S((()=>n("span",{class:"btn-plus"},"+",-1))),ae=h(" 附加险"),se=h("修改"),re={key:0,class:"premium-total"},oe=h(" 保费: "),te={class:"premium"};var le=e(a({props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:a}){const h=e,[P,R]=s(),y=r({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),b=U("RISK_PAYMENT_PERIOD"),g=U("RISK_INSURANCE_PERIOD"),V=o((()=>{var e,a;return(null==(a=null==(e=h.productData)?void 0:e.productRiskVoList)?void 0:a[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]})),C=o((()=>{var e,a;const s=h.productRiskList.map((e=>e.riskId)),r=((null==(a=null==(e=h.productData)?void 0:e.productRiskVoList)?void 0:a[0].riskDetailVOList)||[]).filter((e=>s.includes(e.id)&&1===e.collocationType));return V.value.length-r.length})),_=o((()=>e=>{var a,s;const r=(null==(s=null==(a=h.productData)?void 0:a.productRiskVoList)?void 0:s[0].riskDetailVOList.find((a=>a.id!==e)))||{};let o=!1;return o=!!h.productNum||2===r.riskType&&1===r.collocationType,o})),D=o((()=>{var e,a;return(null==(a=null==(e=h.productData)?void 0:e.productRiskVoList)?void 0:a[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),j=o((()=>D.value.collocationVOList||[])),O=(e,s)=>{const r=e.map((e=>e.id)).filter((e=>!y.value.disabledList.includes(e)));a("addRiderRisk",r,h.productInfo)};return t((()=>h.productInfo),(e=>{var a;let s=0;(e.proposalProductRiskList||[]).forEach((e=>{s+=e.premium})),null==(a=h.pickProductPremium)||a.call(h,{[`${e.productId}`]:s}),y.value.totalPremium=s}),{deep:!0,immediate:!0}),t((()=>h.productRiskList),(e=>{const a=[],s=[],r=[];(e||[]).forEach((e=>{1===e.riskType?a.unshift(e):(s.push(e.riskId),r.push(e.riskId),a.push(e))})),y.value.disabledList=s,y.value.checkedList=r,y.value.productRiskList=a}),{deep:!0,immediate:!0}),(e,s)=>{const r=l("ProTitle"),o=l("ProCheckButton");return d(),i("div",$,[(d(!0),i(u,null,p(y.value.productRiskList,(e=>{var s,t;return d(),i("div",{key:e.riskId},[n("div",q,[c(r,{"risk-type":e.riskType,title:e.riskName,class:"no-border"},null,8,["risk-type","title"]),n("div",x,[n("div",E,[F,n("span",A,"￥"+v(null==(s=e.premium)?void 0:s.toLocaleString()),1)]),n("div",B,[n("div",H,[n("span",K,v(null==(t=e.amount)?void 0:t.toLocaleString()),1),M]),n("div",z,[n("span",W,v(m(k)(m(g),e.coveragePeriod)),1),Y]),n("div",G,[n("span",J,v(m(k)(m(b),e.chargePeriod)),1),Q])]),n("div",X,[m(_)(e.riskId)?(d(),I(o,{key:0,round:32,class:"border",onClick:s=>{a("deleteRisk",e,h.productInfo)}},{default:f((()=>[Z])),_:2},1032,["onClick"])):L("",!0),m(C)?(d(),I(o,{key:1,activated:"",round:32,class:"btn-rider-risk",onClick:a=>{return s=e,R(!0),void(y.value.currentRiskRecord=s);var s}},{default:f((()=>[ee,ae])),_:2},1032,["onClick"])):L("",!0),c(o,{activated:"",round:32,onClick:s=>{a("updateRisk",e,h.productInfo)}},{default:f((()=>[se])),_:2},1032,["onClick"])])])])])})),128)),y.value.productRiskList.length>1?(d(),i("div",re,[oe,n("span",te,"￥"+v(y.value.totalPremium.toLocaleString()),1)])):L("",!0),m(P)?(d(),I(N,{key:1,modelValue:y.value.checkedList,"onUpdate:modelValue":s[0]||(s[0]=e=>y.value.checkedList=e),show:m(P),disabled:y.value.disabledList,"risk-list":m(V),"collocation-list":m(j),onFinished:O,onClose:s[1]||(s[1]=e=>m(R)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):L("",!0)])}}}),[["__scopeId","data-v-cd47605e"]]);const de={class:"container"},ie=(e=>(P("data-v-4f24fb6d"),e=e(),R(),e))((()=>n("span",{class:"plan-name"},"计划书名称",-1))),ue={class:"operate-bar"},pe=h("添加主险"),ne={class:"footer-bar"},ce={class:"trial-result"},ve=h("总保费"),me={class:"result-num"},ke={class:"trial-operate"},Ie=h("保存并预览");var fe=e(a({setup(e){const a=[{name:"保存修改"},{name:"另存为新计划书"}],[k,h]=s(),[P,R]=s(),N=r({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),U=y(),S=b(),$=D(),{id:q,type:x="add",isCreateProposal:E}=S.query,F=r({productId:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),A=r();r({}),r([]),o((()=>({min:"",max:""})));const B=()=>{A.value.validate().then((()=>{T(N.value).then((({code:e,data:a})=>{"10000"===e&&($.$reset(),$.proposalId=a,U.push({path:"/compositionProposal",query:{id:a}}))}))}))},H=()=>{!q&&$.proposalId?R(!0):B()},K=(e,a)=>{a&&(N.value.id=null),B()},M=(e,a,s)=>a?/^.{1,20}$/.test(a)?"":`${e}不能超过20个字符`:"",z=(e={})=>{Object.assign(F.value.productPremium,e),N.value.totalPremium=Object.values(F.value.productPremium).reduce(((e,a)=>e+a),0)},W=(e,a)=>{const s=a;_.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?(N.value.proposalInsuredList[0].proposalInsuredProductList=N.value.proposalInsuredList[0].proposalInsuredProductList.filter((e=>e.productId!==s.productId)),z({[s.productId]:0})):s.proposalProductRiskList=s.proposalProductRiskList.filter((a=>a.riskId!==e.riskId))}))},Y=(e,a)=>{F.value.productId=a.productId,F.value.productInfo=a,F.value.type="edit",F.value.currentRisk=[e.riskId],h(!0)},G=(e,a)=>{F.value.productId=a.productId,F.value.productInfo=a,F.value.type="addRiderRisk",F.value.currentRisk=e,h(!0)},J=e=>{N.value.proposalInsuredList[0].proposalInsuredProductList=N.value.proposalInsuredList[0].proposalInsuredProductList.map((a=>{let s=a;return a.productId===e.proposalInsuredList[0].proposalInsuredProductList[0].productId&&(s={...e.proposalInsuredList[0].proposalInsuredProductList[0]}),s})),h(!1)},Q=()=>{$.setProposalInfo(N.value),$.setTrialData([]),$.setExcludeProduct(Object.keys(F.value.productCollection)),U.push({path:"/proposalList",query:{isCreateProposal:"1",...S.query}})},X=()=>{h(!1)};return g((()=>{const e=$.$state.trialData,a=$.$state.proposalInfo,s=$.$state.proposalId;q&&!E||s?(((e={})=>{O(e).then((({code:e,data:a})=>{"10000"===e&&Object.assign(N.value,a)}))})({id:q||s}),$.$reset()):!Object.keys(a).length&&e.length?Object.assign(N.value,e[0]):Object.keys(a).length&&e.length?(a.proposalInsuredList[0].proposalInsuredProductList.push(...e[0].proposalInsuredList[0].proposalInsuredProductList),N.value=a):Object.keys(a).length&&!e.length&&(N.value=a),$.setTrialData([])})),t((()=>{var e;return null==(e=N.value.proposalInsuredList[0].proposalInsuredProductList)?void 0:e.length}),(()=>{const e=N.value.proposalInsuredList[0].proposalInsuredProductList.map((e=>({productId:e.productId,source:2})));w({voList:e}).then((({code:e,data:a})=>{"10000"===e&&(F.value.productCollection=a)})).finally((()=>{}))})),(e,s)=>{const r=l("VanField"),o=l("ProCard"),t=l("ProDatePicker"),h=l("ProRadioButton"),y=l("VanForm"),b=l("ProCheckButton"),g=l("VanButton"),_=l("VanActionSheet"),D=l("ProPageWrap");return d(),I(D,{class:"page-create-wrapper"},{default:f((()=>{var e;return[n("div",de,[c(y,{ref_key:"formRef",ref:A,"input-align":"right","error-message-align":"right"},{default:f((()=>[c(o,{"show-line":!1},{default:f((()=>[c(r,{modelValue:N.value.proposalName,"onUpdate:modelValue":s[0]||(s[0]=e=>N.value.proposalName=e),class:"border-radius",name:"proposalName",placeholder:"请输入计划书名称",rules:[{validator:(...e)=>M("计划书名称",...e)}]},{label:f((()=>[ie])),_:1},8,["modelValue","rules"])])),_:1}),c(o,{title:"被保人信息"},{default:f((()=>[c(r,{modelValue:N.value.proposalInsuredList[0].name,"onUpdate:modelValue":s[1]||(s[1]=e=>N.value.proposalInsuredList[0].name=e),name:"name",label:"姓名",rules:[{validator:(...e)=>M("姓名",...e)}],placeholder:"请输入（选填）"},null,8,["modelValue","rules"]),c(t,{modelValue:N.value.proposalInsuredList[0].birthday,"onUpdate:modelValue":s[2]||(s[2]=e=>N.value.proposalInsuredList[0].birthday=e),name:"birthday",label:"出生日期",type:"date","is-link":"",readonly:"",placeholder:"请选择",rules:[{required:!0,message:"请选择"}]},null,8,["modelValue"]),c(r,{modelValue:N.value.proposalInsuredList[0].gender,"onUpdate:modelValue":s[4]||(s[4]=e=>N.value.proposalInsuredList[0].gender=e),name:"gender",label:"性别",class:"border-radius",rules:[{required:!0,message:"请选择"}]},{input:f((()=>[c(h,{modelValue:N.value.proposalInsuredList[0].gender,"onUpdate:modelValue":s[3]||(s[3]=e=>N.value.proposalInsuredList[0].gender=e),options:m(V)},null,8,["modelValue","options"])])),_:1},8,["modelValue"])])),_:1})])),_:1},512),(d(!0),i(u,null,p(N.value.proposalInsuredList[0].proposalInsuredProductList||[],(e=>(d(),I(o,{key:e.productId,"show-line":!1},{default:f((()=>{var a,s;return[c(le,{"product-risk-list":e.proposalProductRiskList,"product-info":e,"product-num":(null==(s=null==(a=N.value.proposalInsuredList[0])?void 0:a.proposalInsuredProductList)?void 0:s.length)-1,"product-data":F.value.productCollection[e.productId],"pick-product-premium":z,onAddRiderRisk:G,onUpdateRisk:Y,onDeleteRisk:W},null,8,["product-risk-list","product-info","product-num","product-data"])]})),_:2},1024)))),128)),n("div",ue,[c(b,{activated:"",round:34,onClick:Q},{default:f((()=>[pe])),_:1})])]),n("div",ne,[n("span",ce,[ve,n("span",me,"￥"+v(N.value.totalPremium.toLocaleString()),1)]),n("div",ke,[c(g,{type:"primary",onClick:H},{default:f((()=>[Ie])),_:1})])]),m(k)?(d(),I(j,{key:0,"is-show":m(k),type:F.value.type,"rider-risk":(null==(e=F.value.riderRisk)?void 0:e[F.value.productId])||[],"product-data":F.value.productCollection[F.value.productId],"form-info":F.value.productInfo,holder:N.value.proposalHolder,insured:N.value.proposalInsuredList[0],"current-risk":F.value.currentRisk,onClose:X,onFinished:J},null,8,["is-show","type","rider-risk","product-data","form-info","holder","insured","current-risk"])):L("",!0),c(_,{show:m(P),"onUpdate:show":s[5]||(s[5]=e=>C(P)?P.value=e:null),actions:a,"cancel-text":"取消","close-on-click-action":"",onCancel:s[6]||(s[6]=e=>m(R)(!1)),onSelect:K},null,8,["show"])]})),_:1})}}}),[["__scopeId","data-v-4f24fb6d"]]);export{fe as default};
