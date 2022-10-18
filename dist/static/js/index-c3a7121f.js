var ve=Object.defineProperty;var J=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var X=(m,_,r)=>_ in m?ve(m,_,{enumerable:!0,configurable:!0,writable:!0,value:r}):m[_]=r,M=(m,_)=>{for(var r in _||(_={}))fe.call(_,r)&&X(m,r,_[r]);if(J)for(var r of J(_))Ie.call(_,r)&&X(m,r,_[r]);return m};import{h as ee,R as H,G as E,z as B,$ as K,r as R,k as L,p as A,F as te,H as oe,A as i,s as f,L as V,B as k,m as b,n as h,v as S,E as P,a5 as se,a6 as re,aa as he,P as Re,o as Le,U as Pe,D as De}from"./vendor-1bb74b07.js";import{u as Fe,P as ye}from"./index-3e7529c0.js";import{q as ge,a as Ee,b as Be}from"./createProposal-9d8cbe63.js";import{_ as ue,M as Q,J as Ve}from"./index-a9961c9d.js";import{R as be}from"./index-ced2030d.js";import{u as Z}from"./useDicData-83c72d2b.js";import"./trial-69cbd36c.js";import"./trial-95264bee.js";const U=m=>(se("data-v-cd47605e"),m=m(),re(),m),Ce={class:"com-product-list-wrapper"},$e={class:"risk-item-wrapper"},Ae={class:"content"},Se={class:"risk-premium"},Te=P(" \u4FDD\u8D39:"),Ne={class:"premium"},we={class:"risk-factor"},Oe={class:"factor"},xe={class:"factor-value"},Ue=U(()=>i("span",{class:"factor-name"}," \u4FDD\u989D(\u5143) ",-1)),qe={class:"factor"},je={class:"factor-value"},Me=U(()=>i("span",{class:"factor-name"}," \u4FDD\u969C\u671F\u95F4 ",-1)),He={class:"factor"},Ke={class:"factor-value"},We=U(()=>i("span",{class:"factor-name"}," \u7F34\u8D39\u671F\u95F4 ",-1)),Ye={class:"operate-bar"},ze=P("\u5220\u9664"),Ge=U(()=>i("span",{class:"btn-plus"},"+",-1)),Je=P(" \u9644\u52A0\u9669"),Xe=P("\u4FEE\u6539"),Qe={key:0,class:"premium-total"},Ze=P(" \u4FDD\u8D39: "),et={class:"premium"},tt=ee({props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(m,{emit:_}){const r=m,[D,y]=H(),v=E({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),o=Z("RISK_PAYMENT_PERIOD"),T=Z("RISK_INSURANCE_PERIOD"),C=B(()=>{var l,u;return((u=(l=r.productData)==null?void 0:l.productRiskVoList)==null?void 0:u[0].riskDetailVOList.filter(a=>a.collocationType===1))||[]}),I=B(()=>{var a,n;const l=r.productRiskList.map(s=>s.riskId),u=(((n=(a=r.productData)==null?void 0:a.productRiskVoList)==null?void 0:n[0].riskDetailVOList)||[]).filter(s=>l.includes(s.id)&&s.collocationType===1);return C.value.length-u.length}),$=B(()=>l=>{var n,s;const u=((s=(n=r.productData)==null?void 0:n.productRiskVoList)==null?void 0:s[0].riskDetailVOList.find(g=>g.id!==l))||{};let a=!1;return r.productNum||u.riskType===2&&u.collocationType===1?a=!0:a=!1,a}),W=B(()=>{var u,a;return((a=(u=r.productData)==null?void 0:u.productRiskVoList)==null?void 0:a[0].riskDetailVOList.find(n=>n.riskType===1))||{}}),q=B(()=>W.value.collocationVOList||[]),d=l=>{_("deleteRisk",l,r.productInfo)},N=l=>{_("updateRisk",l,r.productInfo)},w=l=>{y(!0),v.value.currentRiskRecord=l},j=(l,u)=>{const a=l.map(n=>n.id).filter(n=>!v.value.disabledList.includes(n));_("addRiderRisk",a,r.productInfo)};return K(()=>r.productInfo,l=>{var a;let u=0;(l.proposalProductRiskList||[]).forEach(n=>{u+=n.premium}),(a=r.pickProductPremium)==null||a.call(r,{[`${l.productId}`]:u}),v.value.totalPremium=u},{deep:!0,immediate:!0}),K(()=>r.productRiskList,l=>{const u=[],a=[],n=[];(l||[]).forEach(s=>{s.riskType===1?u.unshift(s):(a.push(s.riskId),n.push(s.riskId),u.push(s))}),v.value.disabledList=a,v.value.checkedList=n,v.value.productRiskList=u},{deep:!0,immediate:!0}),(l,u)=>{const a=R("ProTitle"),n=R("ProCheckButton");return L(),A("div",Ce,[(L(!0),A(te,null,oe(v.value.productRiskList,s=>{var g,O;return L(),A("div",{key:s.riskId},[i("div",$e,[f(a,{"risk-type":s.riskType,title:s.riskName,class:"no-border"},null,8,["risk-type","title"]),i("div",Ae,[i("div",Se,[Te,i("span",Ne,"\uFFE5"+V((g=s.premium)==null?void 0:g.toLocaleString()),1)]),i("div",we,[i("div",Oe,[i("span",xe,V((O=s.amount)==null?void 0:O.toLocaleString()),1),Ue]),i("div",qe,[i("span",je,V(k(Q)(k(T),s.coveragePeriod)),1),Me]),i("div",He,[i("span",Ke,V(k(Q)(k(o),s.chargePeriod)),1),We])]),i("div",Ye,[k($)(s.riskId)?(L(),b(n,{key:0,round:32,class:"border",onClick:x=>d(s)},{default:h(()=>[ze]),_:2},1032,["onClick"])):S("",!0),k(I)?(L(),b(n,{key:1,activated:"",round:32,class:"btn-rider-risk",onClick:x=>w(s)},{default:h(()=>[Ge,Je]),_:2},1032,["onClick"])):S("",!0),f(n,{activated:"",round:32,onClick:x=>N(s)},{default:h(()=>[Xe]),_:2},1032,["onClick"])])])])])}),128)),v.value.productRiskList.length>1?(L(),A("div",Qe,[Ze,i("span",et,"\uFFE5"+V(v.value.totalPremium.toLocaleString()),1)])):S("",!0),k(D)?(L(),b(be,{key:1,modelValue:v.value.checkedList,"onUpdate:modelValue":u[0]||(u[0]=s=>v.value.checkedList=s),show:k(D),disabled:v.value.disabledList,"risk-list":k(C),"collocation-list":k(q),onFinished:j,onClose:u[1]||(u[1]=s=>k(y)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):S("",!0)])}}});var ot=ue(tt,[["__scopeId","data-v-cd47605e"]]);const st=m=>(se("data-v-4f24fb6d"),m=m(),re(),m),rt={class:"container"},ut=st(()=>i("span",{class:"plan-name"},"\u8BA1\u5212\u4E66\u540D\u79F0",-1)),at={class:"operate-bar"},it=P("\u6DFB\u52A0\u4E3B\u9669"),lt={class:"footer-bar"},dt={class:"trial-result"},nt=P("\u603B\u4FDD\u8D39"),ct={class:"result-num"},pt={class:"trial-operate"},mt=P("\u4FDD\u5B58\u5E76\u9884\u89C8"),_t=ee({setup(m){const _=[{name:"\u4FDD\u5B58\u4FEE\u6539"},{name:"\u53E6\u5B58\u4E3A\u65B0\u8BA1\u5212\u4E66"}],[r,D]=H(),[y,v]=H(),o=E({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),T=he(),C=Re(),I=Fe(),{id:$,type:W="add",isCreateProposal:q}=C.query,d=E({productId:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),N=E();E({}),E([]),B(()=>({min:"",max:""}));const w=()=>{N.value.validate().then(()=>{Be(o.value).then(({code:t,data:e})=>{t==="10000"&&(I.$reset(),I.proposalId=e,T.push({path:"/compositionProposal",query:{id:e}}))})})},j=()=>{!$&&I.proposalId?v(!0):w()},l=(t,e)=>{e&&(o.value.id=null),w()},u=(t,e,c)=>e?/^.{1,20}$/.test(e)?"":`${t}\u4E0D\u80FD\u8D85\u8FC720\u4E2A\u5B57\u7B26`:"",a=(t={})=>{Object.assign(d.value.productPremium,t),o.value.totalPremium=Object.values(d.value.productPremium).reduce((e,c)=>e+c,0)},n=(t,e)=>{const c=e;De.confirm({message:"\u786E\u8BA4\u5220\u9664\u8BE5\u9669\u79CD\uFF1F"}).then(()=>{t.riskType===1?(o.value.proposalInsuredList[0].proposalInsuredProductList=o.value.proposalInsuredList[0].proposalInsuredProductList.filter(F=>F.productId!==c.productId),a({[c.productId]:0})):c.proposalProductRiskList=c.proposalProductRiskList.filter(F=>F.riskId!==t.riskId)})},s=(t,e)=>{d.value.productId=e.productId,d.value.productInfo=e,d.value.type="edit",d.value.currentRisk=[t.riskId],D(!0)},g=(t,e)=>{d.value.productId=e.productId,d.value.productInfo=e,d.value.type="addRiderRisk",d.value.currentRisk=t,D(!0)},O=(t={})=>{ge(t).then(({code:e,data:c})=>{e==="10000"&&Object.assign(o.value,c)})},x=t=>{o.value.proposalInsuredList[0].proposalInsuredProductList=o.value.proposalInsuredList[0].proposalInsuredProductList.map(e=>{let c=e;return e.productId===t.proposalInsuredList[0].proposalInsuredProductList[0].productId&&(c=M({},t.proposalInsuredList[0].proposalInsuredProductList[0])),c}),D(!1)},ae=t=>{Ee(t).then(({code:e,data:c})=>{e==="10000"&&(d.value.productCollection=c)}).finally(()=>{})},ie=()=>{I.setProposalInfo(o.value),I.setTrialData([]),I.setExcludeProduct(Object.keys(d.value.productCollection)),T.push({path:"/proposalList",query:M({isCreateProposal:"1"},C.query)})},le=()=>{D(!1)};return Le(()=>{const t=I.$state.trialData,e=I.$state.proposalInfo,c=I.$state.proposalId;$&&!q||c?(O({id:$||c}),I.$reset()):!Object.keys(e).length&&t.length?Object.assign(o.value,t[0]):Object.keys(e).length&&t.length?(e.proposalInsuredList[0].proposalInsuredProductList.push(...t[0].proposalInsuredList[0].proposalInsuredProductList),o.value=e):Object.keys(e).length&&!t.length&&(o.value=e),I.setTrialData([])}),K(()=>{var t;return(t=o.value.proposalInsuredList[0].proposalInsuredProductList)==null?void 0:t.length},()=>{const t=o.value.proposalInsuredList[0].proposalInsuredProductList.map(e=>({productId:e.productId,source:2}));ae({voList:t})}),(t,e)=>{const c=R("VanField"),F=R("ProCard"),de=R("ProDatePicker"),ne=R("ProRadioButton"),ce=R("VanForm"),pe=R("ProCheckButton"),me=R("VanButton"),_e=R("VanActionSheet"),ke=R("ProPageWrap");return L(),b(ke,{class:"page-create-wrapper"},{default:h(()=>{var Y;return[i("div",rt,[f(ce,{ref_key:"formRef",ref:N,"input-align":"right","error-message-align":"right"},{default:h(()=>[f(F,{"show-line":!1},{default:h(()=>[f(c,{modelValue:o.value.proposalName,"onUpdate:modelValue":e[0]||(e[0]=p=>o.value.proposalName=p),class:"border-radius",name:"proposalName",placeholder:"\u8BF7\u8F93\u5165\u8BA1\u5212\u4E66\u540D\u79F0",rules:[{validator:(...p)=>u("\u8BA1\u5212\u4E66\u540D\u79F0",...p)}]},{label:h(()=>[ut]),_:1},8,["modelValue","rules"])]),_:1}),f(F,{title:"\u88AB\u4FDD\u4EBA\u4FE1\u606F"},{default:h(()=>[f(c,{modelValue:o.value.proposalInsuredList[0].name,"onUpdate:modelValue":e[1]||(e[1]=p=>o.value.proposalInsuredList[0].name=p),name:"name",label:"\u59D3\u540D",rules:[{validator:(...p)=>u("\u59D3\u540D",...p)}],placeholder:"\u8BF7\u8F93\u5165\uFF08\u9009\u586B\uFF09"},null,8,["modelValue","rules"]),f(de,{modelValue:o.value.proposalInsuredList[0].birthday,"onUpdate:modelValue":e[2]||(e[2]=p=>o.value.proposalInsuredList[0].birthday=p),name:"birthday",label:"\u51FA\u751F\u65E5\u671F",type:"date","is-link":"",readonly:"",placeholder:"\u8BF7\u9009\u62E9",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},null,8,["modelValue"]),f(c,{modelValue:o.value.proposalInsuredList[0].gender,"onUpdate:modelValue":e[4]||(e[4]=p=>o.value.proposalInsuredList[0].gender=p),name:"gender",label:"\u6027\u522B",class:"border-radius",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:h(()=>[f(ne,{modelValue:o.value.proposalInsuredList[0].gender,"onUpdate:modelValue":e[3]||(e[3]=p=>o.value.proposalInsuredList[0].gender=p),options:k(Ve)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])]),_:1})]),_:1},512),(L(!0),A(te,null,oe(o.value.proposalInsuredList[0].proposalInsuredProductList||[],p=>(L(),b(F,{key:p.productId,"show-line":!1},{default:h(()=>{var z,G;return[f(ot,{"product-risk-list":p.proposalProductRiskList,"product-info":p,"product-num":((G=(z=o.value.proposalInsuredList[0])==null?void 0:z.proposalInsuredProductList)==null?void 0:G.length)-1,"product-data":d.value.productCollection[p.productId],"pick-product-premium":a,onAddRiderRisk:g,onUpdateRisk:s,onDeleteRisk:n},null,8,["product-risk-list","product-info","product-num","product-data"])]}),_:2},1024))),128)),i("div",at,[f(pe,{activated:"",round:34,onClick:ie},{default:h(()=>[it]),_:1})])]),i("div",lt,[i("span",dt,[nt,i("span",ct,"\uFFE5"+V(o.value.totalPremium.toLocaleString()),1)]),i("div",pt,[f(me,{type:"primary",onClick:j},{default:h(()=>[mt]),_:1})])]),k(r)?(L(),b(ye,{key:0,"is-show":k(r),type:d.value.type,"rider-risk":((Y=d.value.riderRisk)==null?void 0:Y[d.value.productId])||[],"product-data":d.value.productCollection[d.value.productId],"form-info":d.value.productInfo,holder:o.value.proposalHolder,insured:o.value.proposalInsuredList[0],"current-risk":d.value.currentRisk,onClose:le,onFinished:x},null,8,["is-show","type","rider-risk","product-data","form-info","holder","insured","current-risk"])):S("",!0),f(_e,{show:k(y),"onUpdate:show":e[5]||(e[5]=p=>Pe(y)?y.value=p:null),actions:_,"cancel-text":"\u53D6\u6D88","close-on-click-action":"",onCancel:e[6]||(e[6]=p=>k(v)(!1)),onSelect:l},null,8,["show"])]}),_:1})}}});var Ft=ue(_t,[["__scopeId","data-v-4f24fb6d"]]);export{Ft as default};
