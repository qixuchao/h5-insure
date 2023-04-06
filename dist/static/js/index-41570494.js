import{_ as e,d as s,S as a,r,E as o,an as t,c as l,h as d,F as i,i as u,j as p,f as n,n as c,t as m,g as k,aU as v,e as I,w as f,k as L,aV as h,aG as R,X as P,Y as y,u as b,a as g,aE as V,b as _,aM as j,a7 as C,aj as D,y as O,P as w,aP as T,m as x,aW as U,B as N}from"./index-40904ad2.js";import{A as E}from"./index-2296471a.js";import{R as S,u as $,P as q}from"./index-85984ab3.js";import{q as A,a as F,b as H}from"./createProposal-bc67db60.js";import{u as K}from"./useDicData-2678660b.js";import"./pdfh5-008ca364.js";import"./trial-48f90195.js";import"./index-44624c5f.js";import"./index-0591df68.js";import"./trial-660dccee.js";const M=e=>(P("data-v-cd47605e"),e=e(),y(),e),W={class:"com-product-list-wrapper"},Y={class:"risk-item-wrapper"},B={class:"content"},G={class:"risk-premium"},X={class:"premium"},z={class:"risk-factor"},J={class:"factor"},Q={class:"factor-value"},Z=M((()=>p("span",{class:"factor-name"}," 保额(元) ",-1))),ee={class:"factor"},se={class:"factor-value"},ae=M((()=>p("span",{class:"factor-name"}," 保障期间 ",-1))),re={class:"factor"},oe={class:"factor-value"},te=M((()=>p("span",{class:"factor-name"}," 缴费期间 ",-1))),le={class:"operate-bar"},de=M((()=>p("span",{class:"btn-plus"},"+",-1))),ie={key:0,class:"premium-total"},ue={class:"premium"};var pe=e(s({__name:"index",props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(e,{emit:s}){const P=e,[y,b]=a(),g=r({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),V=K("RISK_PAYMENT_PERIOD"),_=K("RISK_INSURANCE_PERIOD"),j=o((()=>{var e,s;return(null==(s=null==(e=P.productData)?void 0:e.productRiskVoList)?void 0:s[0].riskDetailVOList.filter((e=>1===e.collocationType)))||[]})),C=o((()=>{var e,s;const a=P.productRiskList.map((e=>e.riskId)),r=((null==(s=null==(e=P.productData)?void 0:e.productRiskVoList)?void 0:s[0].riskDetailVOList)||[]).filter((e=>a.includes(e.id)&&1===e.collocationType));return j.value.length-r.length})),D=o((()=>e=>{var s,a;const r=(null==(a=null==(s=P.productData)?void 0:s.productRiskVoList)?void 0:a[0].riskDetailVOList.find((s=>s.id!==e)))||{};let o=!1;return o=!!P.productNum||2===r.riskType&&1===r.collocationType,o})),O=o((()=>{var e,s;return(null==(s=null==(e=P.productData)?void 0:e.productRiskVoList)?void 0:s[0].riskDetailVOList.find((e=>1===e.riskType)))||{}})),w=o((()=>O.value.collocationVOList||[])),T=(e,a)=>{const r=e.map((e=>e.id)).filter((e=>!g.value.disabledList.includes(e)));s("addRiderRisk",r,P.productInfo)};return t((()=>P.productInfo),(e=>{var s;let a=0;(e.proposalProductRiskList||[]).forEach((e=>{a+=e.premium})),null==(s=P.pickProductPremium)||s.call(P,{[`${e.productId}`]:a}),g.value.totalPremium=a}),{deep:!0,immediate:!0}),t((()=>P.productRiskList),(e=>{const s=[],a=[],r=[];(e||[]).forEach((e=>{1===e.riskType?s.unshift(e):(a.push(e.riskId),r.push(e.riskId),s.push(e))})),g.value.disabledList=a,g.value.checkedList=r,g.value.productRiskList=s}),{deep:!0,immediate:!0}),(e,a)=>{const r=h,o=R;return l(),d("div",W,[(l(!0),d(i,null,u(k(g).productRiskList,(e=>{var a,t;return l(),d("div",{key:e.riskId},[p("div",Y,[n(r,{"risk-type":e.riskType,title:e.riskName,class:"no-border"},null,8,["risk-type","title"]),p("div",B,[p("div",G,[c(" 保费:"),p("span",X,"￥"+m(null==(a=e.premium)?void 0:a.toLocaleString()),1)]),p("div",z,[p("div",J,[p("span",Q,m(null==(t=e.amount)?void 0:t.toLocaleString()),1),Z]),p("div",ee,[p("span",se,m(k(v)(k(_),e.coveragePeriod)),1),ae]),p("div",re,[p("span",oe,m(k(v)(k(V),e.chargePeriod)),1),te])]),p("div",le,[k(D)(e.riskId)?(l(),I(o,{key:0,round:32,class:"border",onClick:a=>{s("deleteRisk",e,P.productInfo)}},{default:f((()=>[c("删除")])),_:2},1032,["onClick"])):L("",!0),k(C)?(l(),I(o,{key:1,activated:"",round:32,class:"btn-rider-risk",onClick:s=>{return a=e,b(!0),void(g.value.currentRiskRecord=a);var a}},{default:f((()=>[de,c(" 附加险")])),_:2},1032,["onClick"])):L("",!0),n(o,{activated:"",round:32,onClick:a=>{s("updateRisk",e,P.productInfo)}},{default:f((()=>[c("修改")])),_:2},1032,["onClick"])])])])])})),128)),k(g).productRiskList.length>1?(l(),d("div",ie,[c(" 保费: "),p("span",ue,"￥"+m(k(g).totalPremium.toLocaleString()),1)])):L("",!0),k(y)?(l(),I(S,{key:1,modelValue:k(g).checkedList,"onUpdate:modelValue":a[0]||(a[0]=e=>k(g).checkedList=e),show:k(y),disabled:k(g).disabledList,"risk-list":k(j),"collocation-list":k(w),onFinished:T,onClose:a[1]||(a[1]=e=>k(b)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):L("",!0)])}}}),[["__scopeId","data-v-cd47605e"]]);const ne={class:"container"},ce=(e=>(P("data-v-4f24fb6d"),e=e(),y(),e))((()=>p("span",{class:"plan-name"},"计划书名称",-1))),me={class:"operate-bar"},ke={class:"footer-bar"},ve={class:"trial-result"},Ie={class:"result-num"},fe={class:"trial-operate"};var Le=e(s({__name:"index",setup(e){const s=[{name:"保存修改"},{name:"另存为新计划书"}],[v,h]=a(),[P,y]=a(),S=r({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),K=b(),M=g(),W=$(),{id:Y,type:B="add",isCreateProposal:G}=M.query,X=r({productId:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),z=r();r({}),r([]),o((()=>({min:"",max:""})));const J=()=>{z.value.validate().then((()=>{H(S.value).then((({code:e,data:s})=>{"10000"===e&&(W.$reset(),W.proposalId=s,K.push({path:"/compositionProposal",query:{id:s}}))}))}))},Q=()=>{!Y&&W.proposalId?y(!0):J()},Z=(e,s)=>{s&&(S.value.id=null),J()},ee=(e,s,a)=>s?/^.{1,20}$/.test(s)?"":`${e}不能超过20个字符`:"",se=(e={})=>{Object.assign(X.value.productPremium,e),S.value.totalPremium=Object.values(X.value.productPremium).reduce(((e,s)=>e+s),0)},ae=(e,s)=>{const a=s;D.confirm({message:"确认删除该险种？"}).then((()=>{1===e.riskType?(S.value.proposalInsuredList[0].proposalInsuredProductList=S.value.proposalInsuredList[0].proposalInsuredProductList.filter((e=>e.productId!==a.productId)),se({[a.productId]:0})):a.proposalProductRiskList=a.proposalProductRiskList.filter((s=>s.riskId!==e.riskId))}))},re=(e,s)=>{X.value.productId=s.productId,X.value.productInfo=s,X.value.type="edit",X.value.currentRisk=[e.riskId],h(!0)},oe=(e,s)=>{X.value.productId=s.productId,X.value.productInfo=s,X.value.type="addRiderRisk",X.value.currentRisk=e,h(!0)},te=e=>{S.value.proposalInsuredList[0].proposalInsuredProductList=S.value.proposalInsuredList[0].proposalInsuredProductList.map((s=>{let a=s;return s.productId===e.proposalInsuredList[0].proposalInsuredProductList[0].productId&&(a={...e.proposalInsuredList[0].proposalInsuredProductList[0]}),a})),h(!1)},le=()=>{W.setProposalInfo(S.value),W.setTrialData([]),W.setExcludeProduct(Object.keys(X.value.productCollection)),K.push({path:"/proposalList",query:{isCreateProposal:"1",...M.query}})},de=()=>{h(!1)};return V((()=>{const e=W.$state.trialData,s=W.$state.proposalInfo,a=W.$state.proposalId;Y&&!G||a?(((e={})=>{A(e).then((({code:e,data:s})=>{"10000"===e&&Object.assign(S.value,s)}))})({id:Y||a}),W.$reset()):!Object.keys(s).length&&e.length?Object.assign(S.value,e[0]):Object.keys(s).length&&e.length?(s.proposalInsuredList[0].proposalInsuredProductList.push(...e[0].proposalInsuredList[0].proposalInsuredProductList),S.value=s):Object.keys(s).length&&!e.length&&(S.value=s),W.setTrialData([])})),t((()=>{var e;return null==(e=S.value.proposalInsuredList[0].proposalInsuredProductList)?void 0:e.length}),(()=>{const e=S.value.proposalInsuredList[0].proposalInsuredProductList.map((e=>({productId:e.productId,source:2})));F({voList:e}).then((({code:e,data:s})=>{"10000"===e&&(X.value.productCollection=s)})).finally((()=>{}))})),(e,a)=>{const r=O,o=w,t=T,h=x,b=U,g=R,V=N,D=E,$=_("ProPageWrap");return l(),I($,{class:"page-create-wrapper"},{default:f((()=>{var e;return[p("div",ne,[n(b,{ref_key:"formRef",ref:z,"input-align":"right","error-message-align":"right"},{default:f((()=>[n(o,{"show-line":!1},{default:f((()=>[n(r,{modelValue:k(S).proposalName,"onUpdate:modelValue":a[0]||(a[0]=e=>k(S).proposalName=e),class:"border-radius",name:"proposalName",placeholder:"请输入计划书名称",rules:[{validator:(...e)=>ee("计划书名称",...e)}]},{label:f((()=>[ce])),_:1},8,["modelValue","rules"])])),_:1}),n(o,{title:"被保人信息"},{default:f((()=>[n(r,{modelValue:k(S).proposalInsuredList[0].name,"onUpdate:modelValue":a[1]||(a[1]=e=>k(S).proposalInsuredList[0].name=e),name:"name",label:"姓名",rules:[{validator:(...e)=>ee("姓名",...e)}],placeholder:"请输入（选填）"},null,8,["modelValue","rules"]),n(t,{modelValue:k(S).proposalInsuredList[0].birthday,"onUpdate:modelValue":a[2]||(a[2]=e=>k(S).proposalInsuredList[0].birthday=e),name:"birthday",label:"出生日期",type:"date","is-link":"",readonly:"",placeholder:"请选择",rules:[{required:!0,message:"请选择"}]},null,8,["modelValue"]),n(r,{modelValue:k(S).proposalInsuredList[0].gender,"onUpdate:modelValue":a[4]||(a[4]=e=>k(S).proposalInsuredList[0].gender=e),name:"gender",label:"性别",class:"border-radius",rules:[{required:!0,message:"请选择"}]},{input:f((()=>[n(h,{modelValue:k(S).proposalInsuredList[0].gender,"onUpdate:modelValue":a[3]||(a[3]=e=>k(S).proposalInsuredList[0].gender=e),options:k(j)},null,8,["modelValue","options"])])),_:1},8,["modelValue"])])),_:1})])),_:1},512),(l(!0),d(i,null,u(k(S).proposalInsuredList[0].proposalInsuredProductList||[],(e=>(l(),I(o,{key:e.productId,"show-line":!1},{default:f((()=>{var s,a;return[n(pe,{"product-risk-list":e.proposalProductRiskList,"product-info":e,"product-num":(null==(a=null==(s=k(S).proposalInsuredList[0])?void 0:s.proposalInsuredProductList)?void 0:a.length)-1,"product-data":k(X).productCollection[e.productId],"pick-product-premium":se,onAddRiderRisk:oe,onUpdateRisk:re,onDeleteRisk:ae},null,8,["product-risk-list","product-info","product-num","product-data"])]})),_:2},1024)))),128)),p("div",me,[n(g,{activated:"",round:34,onClick:le},{default:f((()=>[c("添加主险")])),_:1})])]),p("div",ke,[p("span",ve,[c("总保费"),p("span",Ie,"￥"+m(k(S).totalPremium.toLocaleString()),1)]),p("div",fe,[n(V,{type:"primary",onClick:Q},{default:f((()=>[c("保存并预览")])),_:1})])]),k(v)?(l(),I(q,{key:0,"is-show":k(v),type:k(X).type,"rider-risk":(null==(e=k(X).riderRisk)?void 0:e[k(X).productId])||[],"product-data":k(X).productCollection[k(X).productId],"form-info":k(X).productInfo,holder:k(S).proposalHolder,insured:k(S).proposalInsuredList[0],"current-risk":k(X).currentRisk,onClose:de,onFinished:te},null,8,["is-show","type","rider-risk","product-data","form-info","holder","insured","current-risk"])):L("",!0),n(D,{show:k(P),"onUpdate:show":a[5]||(a[5]=e=>C(P)?P.value=e:null),actions:s,"cancel-text":"取消","close-on-click-action":"",onCancel:a[6]||(a[6]=e=>k(y)(!1)),onSelect:Z},null,8,["show"])]})),_:1})}}}),[["__scopeId","data-v-4f24fb6d"]]);export{Le as default};
