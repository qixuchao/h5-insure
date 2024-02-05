import{d as e,ax as a,ay as t,i as o,j as l,r as n,aQ as i,l as s,ca as r,o as u,c as d,b as c,u as p,p as v,w as f,f as m,q as h,v as I,aX as y,aP as L,aO as g,aW as C,aY as k,aB as R,cb as O,T as b,bO as w,aC as j,aD as P,az as x}from"./index-fef381c5.js";import{P as _,a as V}from"./PolicyInfo-78ec1799.js";import{g as D,m as E}from"./trial-ab31158d.js";import{_ as F}from"./TrialButton-b9278388.js";import{n as q}from"./nextStep-f7b2c747.js";import{u as N}from"./useAttachment-f66cf136.js";import"./infoCollection-66ecfab8.js";import{R as T}from"./trial-006160d3.js";import{u as U}from"./useOrder-14bb52e1.js";import{t as S}from"./utils-01ba5295.js";import A from"./index-f77b9965.js";import{p as B,a as M}from"./utils-1066928e.js";import{f as $,a as H}from"./findLastIndex-73364343.js";import"./index-e3495e75.js";import"./format-31cde443.js";import"./core-3e7ccc05.js";import"./utils-b4041f26.js";import"./createProposal-73814604.js";import"./cloneDeep-c509bbc6.js";import"./InsureInfos-8c82073e.js";import"./index-efc808b1.js";import"./index-f497444b.js";import"./questionnaire-42dcb602.js";import"./util-2f6baaf9.js";import"./product-7bbf9c44.js";import"./constants-6ad2f07c.js";const J={class:"long-info-collection"},z=e({name:"InfoCollection"}),G=e({...z,setup(e){const z=a((()=>t((()=>import("./index-7714617b.js")),["static/js/index-7714617b.js","static/css/index-fa4edf2a.css","static/js/index-fef381c5.js","static/css/index-a7bf09dc.css","static/js/theme-94cf7d00.js","static/js/index-e3495e75.js","static/css/index-bbfdd7ec.css","static/js/utils-b4041f26.js","static/js/infoCollection-66ecfab8.js","static/js/trial-006160d3.js"]))),G=a((()=>t((()=>import("./index-bf53b30a.js")),["static/js/index-bf53b30a.js","static/css/index-793d1580.css","static/js/index-fef381c5.js","static/css/index-a7bf09dc.css"]))),K=a((()=>t((()=>import("./SelectRiskList-2d6338cb.js")),["static/js/SelectRiskList-2d6338cb.js","static/css/SelectRiskList-e1e05c2e.css","static/js/index-fef381c5.js","static/css/index-a7bf09dc.css","static/js/trial-ab31158d.js","static/js/trial-006160d3.js"]))),Y=o(),Q=U({}),{productCode:W="",tenantId:X,agentCode:Z="",agencyCode:ee,saleChannelId:ae,isShare:te,orderNo:oe,extraInfo:le,insurerCode:ne,preview:ie}=Y.query;let se={},re=null;const ue=l(2);try{se=JSON.parse(decodeURIComponent(le))}catch(oa){}const de={moduleType:7,subModuleType:null,code:"renewFlag",title:"保证续保型的一年期产品在保证续保期间是否申请续保",planCode:null,displayName:null,defaultValue:null,isHidden:null,isReadOnly:null,isMustInput:1,isExtend:null,regex:null,displayType:6,datasource:null,factorScript:null,isCalculationFactor:2,attributeValueList:[{code:"1",value:"是",defaultFlag:null,useFlag:null},{code:"2",value:"否",defaultFlag:null,useFlag:null}],position:null,remark:""},ce=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),pe=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ve=l({imgUrl:"",desc:"",title:"",link:pe}),fe=l();l();const me=l(),he=l({}),Ie=l({}),ye=l([]),Le=l(),ge=l({}),Ce=l(!1),ke=l(!1),Re=l(0),Oe=l(!0),{fileList:be,mustReadFileCount:we,popupFileList:je}=N(ge,Le),Pe=l(!1),xe=l(!1),_e=()=>{ke.value=!1,Oe.value=!0,ye.value.length<1||(Ce.value=!0)},Ve=()=>{Ce.value=!1,ke.value=!1,Oe.value=!0};l({}),l(!1),l([{}]);const De=l(""),Ee=l({}),Fe=l(!1);l();const qe=l();l();const Ne=l([]),Te=l(0);l({});const Ue=l(),Se=()=>{De.value="试算中...",Ee.value=null,Fe.value=!0},Ae=(e,a)=>{De.value="",Te.value=e.premium,Ee.value=e,Ue.value=a,Fe.value=!1},Be=l(!1),Me=l(),$e=l({}),He=l({productList:[]}),Je=l({}),ze=l(),Ge=(e,a)=>{var t;const o=[],l=a;return e.forEach((e=>{var a;const{insureProductRiskVOList:t}=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{};t.reduce(((e,a)=>{const{riskFixedRuleVO:{guaranteedRenewalFlag:t},riskCode:o}=(null==a?void 0:a.riskDetailResVO)||{};return t===x.YES&&e.push(o),e}),o)})),Object.assign(Q.value.extInfo,{renewRisk:o.join(",")}),(null==o?void 0:o.length)?(null==(t=l[7])?void 0:t.length)?l[7].push(de):l[7]=[de]:l[7]=(l[7]||[]).filter((e=>e.code!==de.code)),l},Ke=()=>{E(He.value).then((({code:e,data:a})=>{if("10000"===e){const{productDetailResList:e,productFactor:t}=a;He.value=M(e),ze.value=Ge(e,t);const{other:o}=w(ze.value);ce.policyInfo=o;const l={};e.forEach((e=>{l[e.productCode]=e})),Je.value=l}}))},Ye=()=>{Be.value=!1},Qe=e=>{const a=He.value.productList.find((e=>e.productCode===Me.value)),t=e.map((e=>({riskCode:e,riskType:T.RIDER_RISK,mainRiskCode:$e.value.riskCode}))),o=$(a.mergeRiskReqList,(e=>e.riskCode===$e.value.riskCode)),l=H(a.mergeRiskReqList,(e=>e.mainRiskCode===$e.value.riskCode));let n=o;-1!==l&&(n=l),a.mergeRiskReqList=[...a.mergeRiskReqList.slice(0,n+1),...t,...a.mergeRiskReqList.slice(n+1,a.mergeRiskReqList.length)],me.value.getRiderRiskDefaultValue(Me.value,e,$e.value.riskCode,a.mergeRiskReqList),Ke(),Be.value=!1},We=(e,a,t)=>{Be.value=!0,Ne.value=t,$e.value=a,Me.value=e},Xe=(e,a,t)=>{Je.value[e],t?(Je.value[e].productPlanInsureVOList[0].insureProductRiskVOList=Je.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==a)),He.value.productList=He.value.productList.map((t=>(t.productCode===e&&(t.mergeRiskReqList=t.mergeRiskReqList.filter((e=>e.riskCode!==a))),t)))):(He.value.productList=He.value.productList.filter((a=>a.productCode!==e)),Ke())},Ze=l(!1),ea=async()=>{var e,a;if(ie)return void y(L.INFO_COLLECTION,Y.query);if(!Ee.value)return;const t=[];me.value&&t.push(null==(e=me.value)?void 0:e.validate(!1)),fe.value&&t.push(null==(a=fe.value)?void 0:a.validate(!1)),Promise.all(t).then((e=>{Object.assign(Q.value,{extInfo:{...Q.value.extInfo,buttonCode:g.INFO_COLLECTION,pageCode:L.INFO_COLLECTION}});const a=me.value.dealMixData(),t=S({...a,productCode:W,productName:Ie.value.productName},Ee.value,Q.value);Y.query.productClass=`${ue.value}`;const o=(()=>{var e,a;const{holder:t,insuredList:o}=ce.userData,l=[],n=(e,a)=>{e.ocrData&&Object.keys(e.ocrData).find((a=>(e[a]||e.ocrData[a])&&e.ocrData[a]!==e[a]))&&l.push(`${a}信息影像识别与录入信息不一致，请确认`)};return n(t,"投保人"),n(null==o?void 0:o[0],"被保人"),((null==(e=null==o?void 0:o[0])?void 0:e.beneficiaryList)||[]).forEach(((e,a)=>{n(e,`受益人${a+1}`)})),n(null==o?void 0:o[0].guardian,"监护人"),n(null==o?void 0:o[0].guardian,"监护人"),((null==(a=Q.value)?void 0:a.tenantOrderPayInfoList)||[]).forEach((e=>{n(null==o?void 0:o[0].guardian,"银行卡")})),l})();Ze.value=!0,(null==o?void 0:o.length)?C.confirm({message:null==o?void 0:o[0]}).then((()=>{clearInterval(re),q(t,((e,a)=>{Ze.value=!1,a===k.JUMP_PAGE&&R(e.nextPageCode,Y.query)}),Y)})):(clearInterval(re),q(t,((e,a)=>{Ze.value=!1,a===k.JUMP_PAGE&&R(e.nextPageCode,Y.query)}),Y))}),(e=>{O(".long-info-collection",".van-field--error")})).catch((e=>{console.log("e",e)}))},aa=e=>{const a=Q.value.tenantOrderPayInfoList[0];Q.value.tenantOrderPayInfoList.splice(0,1,{...a,...e})},ta=e=>{Object.assign(ce.userData,e)};return i((()=>{(async()=>{oe&&await D({orderNo:oe,tenantId:X}).then((({code:e,data:a})=>{var t;if("10000"===e){if((null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];ce.defaultPlanCode=e}Object.assign(Q.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:W}),ce.defaultValue=Q.value,He.value=B(a.insuredList[0].productList),ue.value=a.insuredList[0].productList.length>1?1:2,xe.value=!0}})),await E(He.value).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e;ze.value=Ge(a,t);const o={};a.forEach((e=>{o[e.productCode]=e})),Je.value=o;const{payInfo:l,other:n}=w(ze.value);ce.payInfo={...ce.payInfo,...l},ce.policyInfo={...ce.policyInfo,...n}}}))})()})),s((()=>{re=setInterval((()=>{}),3e4),setTimeout((async()=>{qe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),r((()=>{clearInterval(re)})),(e,a)=>{var t,o,l,n,i,s;const r=j,y=P;return u(),d("div",J,[c(r),p(xe)||p(ie)?(u(),v(A,{key:0,ref_key:"personalInfoRef",ref:me,"product-info":{productCode:p(W),productName:p(Ie).productName,insurerCode:p(ne),tenantId:p(X),planList:[]},"tenant-product-detail":p(he),"hide-benefit":"","product-collection":p(Je),"default-data":p(Q),"product-factor":p(ze),onTrialStart:Se,onTrialEnd:Ae,"onUpdate:userData":ta,onUpdateBank:aa,onAddRisk:We,onDeleteRisk:Xe},{middleInfo:f((()=>[p(ce).payInfo.schema.length?(u(),v(p(_),{key:0,ref_key:"payInfoRef",ref:fe,modelValue:p(Q).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>p(Q).tenantOrderPayInfoList=e),schema:p(ce).payInfo.schema,"is-view":p(ce).isView,"user-data":p(ce).userData},null,8,["modelValue","schema","is-view","user-data"])):m("",!0),p(ce).policyInfo.schema.length?(u(),v(p(V),{key:1,modelValue:p(Q).extInfo,"onUpdate:modelValue":a[1]||(a[1]=e=>p(Q).extInfo=e),schema:p(ce).policyInfo.schema,"is-view":p(ce).isView},null,8,["modelValue","schema","is-view"])):m("",!0)])),_:1},8,["product-info","tenant-product-detail","product-collection","default-data","product-factor"])):m("",!0),c(y,null,{default:f((()=>{var e;return[(null==(e=p(be))?void 0:e.length)?(u(),v(p(G),{key:0,modelValue:p(Pe),"onUpdate:modelValue":a[2]||(a[2]=e=>h(Pe)?Pe.value=e:null),"has-bg-color":!1,"attachment-list":p(be),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{Re.value=e,ke.value=!0})(e))},null,8,["modelValue","attachment-list"])):m("",!0)]})),_:1}),p(ke)?(u(),v(p(z),{key:1,show:p(ke),"onUpdate:show":a[4]||(a[4]=e=>h(ke)?ke.value=e:null),"content-list":p(Oe)?p(be):p(je),"is-only-view":p(Oe),"active-index":p(Re),text:p(Oe)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":p(Oe)?0:p(we),onSubmit:_e,onOnCloseFilePreviewByMask:Ve},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):m("",!0),c(F,{"is-share":p(ve).isShare&&!p(te),premium:null==(t=p(Ee))?void 0:t.initialPremium,"share-info":p(ve),"loading-text":p(De),"payment-frequency":(null==(s=null==(i=null==(n=null==(l=null==(o=p(Ue))?void 0:o.insuredList)?void 0:l[0].productList)?void 0:n[0].riskList)?void 0:i[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":p(he),"handle-share":e=>(e=>{me.value.validateHolder(["mobile"]).then((()=>{Object.assign(Q.value,{extInfo:{...Q.value.extInfo,buttonCode:g.INFO_COLLECTION,pageCode:L.INFO_COLLECTION}});const a=me.value.getUserData(),t=S({...Ue.value,holder:null==a?void 0:a.holder},Ee.value||{},Q.value);q(t,((a,t)=>{t===k.JUMP_PAGE&&(null==e||e())}),Y)})).catch((()=>{b("请录入投保人手机号后进行分享")}))})(e),disabled:!p(Ee)||p(Ze),onHandleClick:ea},{label:f((()=>[I(" 首年总保费 ")])),default:f((()=>[I("下一步 ")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"]),p(Be)?(u(),v(p(K),{key:2,type:p(T).RIDER_RISK,"product-class":p(ue),show:p(Be),"insured-list":p(Ne),title:"添加附加险","current-product-code":p(Me),"main-risk-code":p($e).riskCode,"select-list":p(He).productList,onCancel:Ye,onConfirm:Qe},null,8,["type","product-class","show","insured-list","current-product-code","main-risk-code","select-list"])):m("",!0)])}}});export{G as default};
