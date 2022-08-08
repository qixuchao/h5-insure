var ke=Object.defineProperty;var Z=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ee=(a,_,r)=>_ in a?ke(a,_,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[_]=r,M=(a,_)=>{for(var r in _||(_={}))fe.call(_,r)&&ee(a,r,_[r]);if(Z)for(var r of Z(_))Ie.call(_,r)&&ee(a,r,_[r]);return a};import{g as se,a5 as K,C as y,x as g,X as H,r as I,h as L,m as q,F as re,E as ue,y as l,n as k,I as C,z as m,j as V,k as f,s as U,B as P,a1 as ae,a2 as ie,aj as Le,Q as Re,o as Pe,d as he,a6 as De,D as Fe}from"./vendor-413031aa.js";import{u as ye,P as ge}from"./index-5e7d5c49.js";import{b as W,_ as de,p as te,q as Ce}from"./index-ac5972c1.js";import{a as Ve}from"./trial-e1184497.js";import{u as oe}from"./useDicData-ed239460.js";import"./index-e15c32fc.js";import"./trial-6f8da5a6.js";import"./useStorage-fa8805b2.js";const be=a=>W.post("/api/app/insure/proposal/addOrUpdateProposal",a),Be=(a={})=>W.get(`/api/app/insure/proposal/queryProposalDetail/${a.id}`,a),Ee=(a={})=>W.post("/api/app/insure/product/listInsureProductDetail",a);const X=a=>(ae("data-v-b420dfd2"),a=a(),ie(),a),$e={class:"com-product-list-wrapper"},we={class:"risk-item-wrapper"},Ne={class:"content"},Oe={class:"risk-premium"},xe=P(" \u4FDD\u8D39:"),Se={class:"premium"},Te={class:"risk-factor"},Ae={class:"factor"},qe={class:"factor-value"},Ue=X(()=>l("span",{class:"factor-name"}," \u4FDD\u989D(\u5143) ",-1)),je={class:"factor"},Ye={class:"factor-value"},Me=X(()=>l("span",{class:"factor-name"}," \u4FDD\u969C\u671F\u95F4 ",-1)),Ke={class:"factor"},He={class:"factor-value"},We=X(()=>l("span",{class:"factor-name"}," \u7F34\u8D39\u671F\u95F4 ",-1)),Xe={class:"operate-bar"},ze=P("\u5220\u9664"),Qe=P("+ \u9644\u52A0\u9669"),Ge=P("\u4FEE\u6539"),Je={class:"premium-total"},Ze=P(" \u4FDD\u8D39: "),et={class:"premium"},tt=se({props:{productRiskList:{default:()=>[]},productInfo:{default:()=>({})},productData:{default:()=>({})},pickProductPremium:{type:Function,default:()=>{}},productNum:{default:0}},emits:["deleteRisk","updateRisk","addRiderRisk"],setup(a,{emit:_}){const r=a,[b,h]=K(),t=y({checkedList:[],disabledList:[],riderRiskList:[],mainRiskData:{},totalPremium:0,currentRiskRecord:{},productRiskList:[]}),$=oe("RISK_PAYMENT_PERIOD"),w=oe("RISK_INSURANCE_PERIOD"),R=g(()=>{var n,u;return((u=(n=r.productData)==null?void 0:n.productRiskVoList)==null?void 0:u[0].riskDetailVOList.filter(i=>i.collocationType===1))||[]}),N=g(()=>{var i,c;const n=r.productRiskList.map(s=>s.riskId),u=(((c=(i=r.productData)==null?void 0:i.productRiskVoList)==null?void 0:c[0].riskDetailVOList)||[]).filter(s=>n.includes(s.id)&&s.collocationType===1);return R.value.length-u.length}),z=g(()=>n=>{var c,s;const u=((s=(c=r.productData)==null?void 0:c.productRiskVoList)==null?void 0:s[0].riskDetailVOList.find(F=>F.id!==n))||{};let i=!1;return r.productNum||u.riskType===2&&u.collocationType!==1?i=!0:i=!1,i}),j=g(()=>{var u,i;return((i=(u=r.productData)==null?void 0:u.productRiskVoList)==null?void 0:i[0].riskDetailVOList.find(c=>c.riskType===1))||{}}),p=g(()=>j.value.collocationVOList||[]),O=n=>{_("deleteRisk",n,r.productInfo)},x=n=>{_("updateRisk",n,r.productInfo)},S=n=>{h(!0),t.value.currentRiskRecord=n},Y=(n,u)=>{const i=n.map(c=>c.id).filter(c=>!t.value.disabledList.includes(c));_("addRiderRisk",i,r.productInfo)};return H(()=>r.productInfo,n=>{var i;let u=0;(n.proposalProductRiskList||[]).forEach(c=>{u+=c.premium}),(i=r.pickProductPremium)==null||i.call(r,{[`${n.productId}`]:u}),t.value.totalPremium=u},{deep:!0,immediate:!0}),H(()=>r.productRiskList,n=>{const u=[],i=[],c=[];(n||[]).forEach(s=>{s.riskType===1?u.unshift(s):(i.push(s.riskId),c.push(s.riskId),u.push(s))}),t.value.disabledList=i,t.value.checkedList=c,t.value.productRiskList=u},{deep:!0,immediate:!0}),(n,u)=>{const i=I("ProTitle"),c=I("ProCheckButton");return L(),q("div",$e,[(L(!0),q(re,null,ue(t.value.productRiskList,s=>{var F,T;return L(),q("div",{key:s.riskId},[l("div",we,[k(i,{"risk-type":s.riskType,title:s.riskName},null,8,["risk-type","title"]),l("div",Ne,[l("div",Oe,[xe,l("span",Se,"\uFFE5"+C((F=s.premium)==null?void 0:F.toLocaleString()),1)]),l("div",Te,[l("div",Ae,[l("span",qe,C((T=s.amount)==null?void 0:T.toLocaleString()),1),Ue]),l("div",je,[l("span",Ye,C(m(te)(m(w),s.coveragePeriod)),1),Me]),l("div",Ke,[l("span",He,C(m(te)(m($),s.chargePeriod)),1),We])]),l("div",Xe,[m(z)(s.riskId)?(L(),V(c,{key:0,round:32,class:"border",onClick:A=>O(s)},{default:f(()=>[ze]),_:2},1032,["onClick"])):U("",!0),m(N)?(L(),V(c,{key:1,activated:"",round:32,onClick:A=>S(s)},{default:f(()=>[Qe]),_:2},1032,["onClick"])):U("",!0),k(c,{activated:"",round:32,onClick:A=>x(s)},{default:f(()=>[Ge]),_:2},1032,["onClick"])])])])])}),128)),l("div",Je,[Ze,l("span",et,"\uFFE5"+C(t.value.totalPremium.toLocaleString()),1)]),m(b)?(L(),V(Ve,{key:0,modelValue:t.value.checkedList,"onUpdate:modelValue":u[0]||(u[0]=s=>t.value.checkedList=s),show:m(b),disabled:t.value.disabledList,"risk-list":m(R),"collocation-list":m(p),onFinished:Y,onClose:u[1]||(u[1]=s=>m(h)(!1))},null,8,["modelValue","show","disabled","risk-list","collocation-list"])):U("",!0)])}}});var ot=de(tt,[["__scopeId","data-v-b420dfd2"]]);const st=a=>(ae("data-v-d24bf354"),a=a(),ie(),a),rt={class:"container"},ut=st(()=>l("span",null,"\u8BA1\u5212\u4E66\u540D\u79F0",-1)),at={class:"operate-bar"},it=P("\u6DFB\u52A0\u4E3B\u9669"),dt={class:"footer-bar"},lt={class:"trial-result"},nt=P(" \u603B\u4FDD\u8D39 "),pt={class:"result-num"},ct={class:"trial-operate"},mt=P("\u4FDD\u5B58\u5E76\u9884\u89C8"),_t=se({setup(a){const[_,r]=K(),[b,h]=K(),t=y({proposalHolder:{},proposalInsuredList:[{name:"",gender:"",birthday:"",proposalInsuredProductList:[]}],proposalName:"",totalPremium:0,relationUserType:2}),$=Le(),w=Re(),R=ye(),{id:N,type:z="add",isCreateProposal:j}=w.query,p=y({productId:0,productCollection:{},productInfo:{},productPremium:{},riderRisk:{},type:"add",currentRisk:[]}),O=y();y({}),y([]),g(()=>({min:"",max:""}));const x=(o,e,v)=>/^.{1,20}$/.test(e)?"":`${o}\u4E0D\u80FD\u8D85\u8FC720\u4E2A\u5B57\u7B26`,S=(o={})=>{Object.assign(p.value.productPremium,o),t.value.totalPremium=Object.values(p.value.productPremium).reduce((e,v)=>e+v,0)},Y=(o,e)=>{const v=e;Fe.confirm({message:"\u786E\u8BA4\u5220\u9664\u8BE5\u9669\u79CD\uFF1F"}).then(()=>{o.riskType===1?(t.value.proposalInsuredList[0].proposalInsuredProductList=t.value.proposalInsuredList[0].proposalInsuredProductList.filter(D=>D.productId!==v.productId),S({[v.productId]:0})):v.proposalProductRiskList=v.proposalProductRiskList.filter(D=>D.riskId!==o.riskId)})},n=(o,e)=>{p.value.productId=e.productId,p.value.productInfo=e,p.value.type="edit",p.value.currentRisk=[o.riskId],h(!0)},u=(o,e)=>{p.value.productId=e.productId,p.value.productInfo=e,p.value.type="addRiderRisk",p.value.currentRisk=o,h(!0)},i=()=>{Be({id:N}).then(({code:o,data:e})=>{o==="10000"&&Object.assign(t.value,e)})},c=()=>{O.value.validate().then(()=>{be(t.value).then(({code:o,data:e})=>{o==="10000"&&(R.$reset(),$.push({path:"/compositionProposal",query:{id:e}}))})})},s=o=>{t.value.proposalInsuredList[0].proposalInsuredProductList=t.value.proposalInsuredList[0].proposalInsuredProductList.map(e=>{let v=e;return e.productId===o.proposalInsuredList[0].proposalInsuredProductList[0].productId&&(v=M({},o.proposalInsuredList[0].proposalInsuredProductList[0])),v}),h(!1)},F=o=>{Ee(o).then(({code:e,data:v})=>{e==="10000"&&(p.value.productCollection=v)}).finally(()=>{})},T=()=>{R.setProposalInfo(t.value),R.setTrialData([]),R.setExcludeProduct(Object.keys(p.value.productCollection)),$.push({path:"/proposalList",query:M({isCreateProposal:"1"},w.query)})},A=()=>{h(!1)};return Pe(()=>{const o=R.$state.trialData,e=R.$state.proposalInfo;N&&!j?i():!Object.keys(e).length&&o.length?Object.assign(t.value,o[0]):Object.keys(e).length&&o.length?(e.proposalInsuredList[0].proposalInsuredProductList.push(...o[0].proposalInsuredList[0].proposalInsuredProductList),t.value=e):Object.keys(e).length&&!o.length&&(t.value=e)}),H(()=>{var o;return(o=t.value.proposalInsuredList[0].proposalInsuredProductList)==null?void 0:o.length},()=>{const o=t.value.proposalInsuredList[0].proposalInsuredProductList.map(e=>({productId:e.productId,source:2}));F({voList:o})}),(o,e)=>{const v=I("VanField"),D=I("ProCard"),le=I("ProRadioButton"),ne=I("VanForm"),pe=I("ProCheckButton"),ce=I("VanButton"),me=I("van-datetime-picker"),_e=I("van-popup"),ve=I("ProPageWrap");return L(),V(ve,{class:"page-create-wrapper"},{default:f(()=>{var Q;return[l("div",rt,[k(ne,{ref_key:"formRef",ref:O,"input-align":"right","error-message-align":"right"},{default:f(()=>[k(D,null,{default:f(()=>[k(v,{modelValue:t.value.proposalName,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value.proposalName=d),name:"proposalName",placeholder:"\u8BF7\u8F93\u5165\u8BA1\u5212\u4E66\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BA1\u5212\u4E66\u540D\u79F0"},{validator:(...d)=>x("\u8BA1\u5212\u4E66\u540D\u79F0",...d)}]},{label:f(()=>[ut]),_:1},8,["modelValue","rules"])]),_:1}),k(D,{title:"\u88AB\u4FDD\u4EBA\u4FE1\u606F"},{default:f(()=>[k(v,{modelValue:t.value.proposalInsuredList[0].name,"onUpdate:modelValue":e[1]||(e[1]=d=>t.value.proposalInsuredList[0].name=d),name:"name",label:"\u59D3\u540D",rules:[{validator:(...d)=>x("\u59D3\u540D",...d)}],placeholder:"\u8BF7\u8F93\u5165\uFF08\u9009\u586B\uFF09"},null,8,["modelValue","rules"]),k(v,{modelValue:t.value.proposalInsuredList[0].birthday,"onUpdate:modelValue":e[2]||(e[2]=d=>t.value.proposalInsuredList[0].birthday=d),name:"birthday",label:"\u51FA\u751F\u65E5\u671F",formate:"YYYY-MM-DD","is-link":"",readonly:"",placeholder:"\u8BF7\u9009\u62E9",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],onClick:e[3]||(e[3]=d=>m(r)(!0))},null,8,["modelValue"]),k(v,{modelValue:t.value.proposalInsuredList[0].gender,"onUpdate:modelValue":e[5]||(e[5]=d=>t.value.proposalInsuredList[0].gender=d),name:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]},{input:f(()=>[k(le,{modelValue:t.value.proposalInsuredList[0].gender,"onUpdate:modelValue":e[4]||(e[4]=d=>t.value.proposalInsuredList[0].gender=d),options:m(Ce)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])]),_:1})]),_:1},512),(L(!0),q(re,null,ue(t.value.proposalInsuredList[0].proposalInsuredProductList||[],d=>(L(),V(D,{key:d.productId},{default:f(()=>{var B,E;return[k(ot,{"product-risk-list":d.proposalProductRiskList,"product-info":d,"product-num":((E=(B=t.value.proposalInsuredList[0])==null?void 0:B.proposalInsuredProductList)==null?void 0:E.length)-1,"product-data":p.value.productCollection[d.productId],"pick-product-premium":S,onAddRiderRisk:u,onUpdateRisk:n,onDeleteRisk:Y},null,8,["product-risk-list","product-info","product-num","product-data"])]}),_:2},1024))),128)),l("div",at,[k(pe,{activated:"",round:34,onClick:T},{default:f(()=>[it]),_:1})])]),l("div",dt,[l("span",lt,[nt,l("span",pt,"\uFFE5"+C(t.value.totalPremium.toLocaleString()),1)]),l("div",ct,[k(ce,{type:"primary",onClick:c},{default:f(()=>[mt]),_:1})])]),k(_e,{show:m(_),"onUpdate:show":e[8]||(e[8]=d=>De(_)?_.value=d:null),position:"bottom"},{default:f(()=>{var d,B,E,G;return[k(me,{type:"date","min-date":new Date((B=(d=t.value.proposalInsuredList[0])==null?void 0:d.dateRange)==null?void 0:B.min),"max-date":new Date((G=(E=t.value.proposalInsuredList[0])==null?void 0:E.dateRange)==null?void 0:G.max),onConfirm:e[6]||(e[6]=J=>{t.value.proposalInsuredList[0].birthday=m(he)(J).format("YYYY-MM-DD"),m(r)(!1)}),onCancel:e[7]||(e[7]=J=>m(r)(!1))},null,8,["min-date","max-date"])]}),_:1},8,["show"]),m(b)?(L(),V(ge,{key:0,"is-show":m(b),type:p.value.type,"rider-risk":((Q=p.value.riderRisk)==null?void 0:Q[p.value.productId])||[],"product-data":p.value.productCollection[p.value.productId],"form-info":p.value.productInfo,holder:t.value.proposalHolder,insured:t.value.proposalInsuredList[0],"current-risk":p.value.currentRisk,onClose:A,onFinished:s},null,8,["is-show","type","rider-risk","product-data","form-info","holder","insured","current-risk"])):U("",!0)]}),_:1})}}});var Ft=de(_t,[["__scopeId","data-v-d24bf354"]]);export{Ft as default};
