import{d as e,aV as a,aW as t,i as o,j as l,r as n,bc as i,l as s,ca as r,o as u,c as d,b as c,u as p,p as v,w as f,f as m,q as h,v as I,bj as y,bb as L,ba as g,bi as C,bk as k,aZ as R,cb as O,T as b,bO as w,a_ as j,a$ as P,aX as _}from"./index-2ac8b6d6.js";import{P as x,a as V}from"./PolicyInfo-ab4c8e92.js";import{g as D,m as E}from"./trial-4ea734ea.js";import{_ as F}from"./TrialButton-4fcad527.js";import{n as q}from"./nextStep-04db470c.js";import{u as N}from"./useAttachment-7558e2f0.js";import"./infoCollection-4aaf49a5.js";import{R as T}from"./trial-cb24e467.js";import{u as U}from"./useOrder-1ad926ad.js";import{t as S}from"./utils-48a9b4f8.js";import A from"./index-3bcb5d00.js";import{p as M,a as B}from"./utils-44c69232.js";import{f as $,a as H}from"./findLastIndex-0ab198b8.js";import"./cloneDeep-ea85aaaa.js";import"./index-54e3754c.js";import"./format-31cde443.js";import"./core-e0720063.js";import"./utils-ab4832aa.js";import"./createProposal-1f031c3d.js";import"./InsureInfos-e5a7016f.js";import"./index-7417a8ba.js";import"./index-4f683ff2.js";import"./questionnaire-42dcb602.js";import"./util-a8765799.js";import"./product-7bbf9c44.js";import"./constants-6ad2f07c.js";const J={class:"long-info-collection"},G=e({name:"InfoCollection"}),z=e({...G,setup(e){const G=a((()=>t((()=>import("./index-a338855c.js")),["static/js/index-a338855c.js","static/css/index-fa4edf2a.css","static/js/index-2ac8b6d6.js","static/css/index-5460286b.css","static/js/theme-94cf7d00.js","static/js/index-54e3754c.js","static/css/index-bbfdd7ec.css","static/js/utils-ab4832aa.js","static/js/infoCollection-4aaf49a5.js","static/js/trial-cb24e467.js"]))),z=a((()=>t((()=>import("./index-a2c957f7.js")),["static/js/index-a2c957f7.js","static/css/index-793d1580.css","static/js/index-2ac8b6d6.js","static/css/index-5460286b.css"]))),K=a((()=>t((()=>import("./SelectRiskList-2e15e780.js")),["static/js/SelectRiskList-2e15e780.js","static/css/SelectRiskList-e1e05c2e.css","static/js/index-2ac8b6d6.js","static/css/index-5460286b.css","static/js/trial-4ea734ea.js","static/js/trial-cb24e467.js"]))),W=o(),X=U({}),{productCode:Y="",tenantId:Z,agentCode:Q="",agencyCode:ee,saleChannelId:ae,isShare:te,orderNo:oe,extraInfo:le,insurerCode:ne,preview:ie}=W.query;let se={},re=null;const ue=l(2);try{se=JSON.parse(decodeURIComponent(le))}catch(oa){}const de={moduleType:7,subModuleType:null,code:"renewFlag",title:"保证续保型的一年期产品在保证续保期间是否申请续保",planCode:null,displayName:null,defaultValue:null,isHidden:null,isReadOnly:null,isMustInput:1,isExtend:null,regex:null,displayType:6,datasource:null,factorScript:null,isCalculationFactor:2,attributeValueList:[{code:"1",value:"是",defaultFlag:null,useFlag:null},{code:"2",value:"否",defaultFlag:null,useFlag:null}],position:null,remark:""},ce=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),pe=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ve=l({imgUrl:"",desc:"",title:"",link:pe}),fe=l();l();const me=l(),he=l({}),Ie=l({}),ye=l([]),Le=l(),ge=l({}),Ce=l(!1),ke=l(!1),Re=l(0),Oe=l(!0),{fileList:be,mustReadFileCount:we,popupFileList:je}=N(ge,Le),Pe=l(!1),_e=l(!1),xe=()=>{ke.value=!1,Oe.value=!0,ye.value.length<1||(Ce.value=!0)},Ve=()=>{Ce.value=!1,ke.value=!1,Oe.value=!0};l({}),l(!1),l([{}]);const De=l(""),Ee=l({}),Fe=l(!1);l();const qe=l();l();const Ne=l([]),Te=l(0);l({});const Ue=l(),Se=()=>{De.value="试算中...",Ee.value=null,Fe.value=!0},Ae=(e,a)=>{De.value="",Te.value=e.premium,Ee.value=e,Ue.value=a,Fe.value=!1},Me=l(!1),Be=l(),$e=l({}),He=l({productList:[]}),Je=l({}),Ge=l(),ze=(e,a)=>{var t;const o=[],l=a;return e.forEach((e=>{var a;const{insureProductRiskVOList:t}=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{};t.reduce(((e,a)=>{const{riskFixedRuleVO:{guaranteedRenewalFlag:t},riskCode:o}=(null==a?void 0:a.riskDetailResVO)||{};return t===_.YES&&e.push(o),e}),o)})),Object.assign(X.value.extInfo,{renewRisk:o.join(",")}),(null==o?void 0:o.length)?(null==(t=l[7])?void 0:t.length)?l[7].push(de):l[7]=[de]:l[7]=(l[7]||[]).filter((e=>e.code!==de.code)),l},Ke=()=>{E(He.value).then((({code:e,data:a})=>{if("10000"===e){const{productDetailResList:e,productFactor:t}=a;He.value=B(e),Ge.value=ze(e,t);const{other:o}=w(Ge.value);ce.policyInfo=o;const l={};e.forEach((e=>{l[e.productCode]=e})),Je.value=l}}))},We=()=>{Me.value=!1},Xe=e=>{const a=He.value.productList.find((e=>e.productCode===Be.value)),t=e.map((e=>({riskCode:e,riskType:T.RIDER_RISK,mainRiskCode:$e.value.riskCode}))),o=$(a.mergeRiskReqList,(e=>e.riskCode===$e.value.riskCode)),l=H(a.mergeRiskReqList,(e=>e.mainRiskCode===$e.value.riskCode));let n=o;-1!==l&&(n=l),a.mergeRiskReqList=[...a.mergeRiskReqList.slice(0,n+1),...t,...a.mergeRiskReqList.slice(n+1,a.mergeRiskReqList.length)],me.value.getRiderRiskDefaultValue(Be.value,e,$e.value.riskCode,a.mergeRiskReqList),Ke(),Me.value=!1},Ye=(e,a,t)=>{Me.value=!0,Ne.value=t,$e.value=a,Be.value=e},Ze=(e,a,t)=>{Je.value[e],t?(Je.value[e].productPlanInsureVOList[0].insureProductRiskVOList=Je.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==a)),He.value.productList=He.value.productList.map((t=>(t.productCode===e&&(t.mergeRiskReqList=t.mergeRiskReqList.filter((e=>e.riskCode!==a))),t)))):(He.value.productList=He.value.productList.filter((a=>a.productCode!==e)),Ke())},Qe=l(!1),ea=async()=>{var e,a;if(ie)return void y(L.INFO_COLLECTION,W.query);if(!Ee.value)return;const t=[];me.value&&t.push(null==(e=me.value)?void 0:e.validate(!1)),fe.value&&t.push(null==(a=fe.value)?void 0:a.validate(!1)),Promise.all(t).then((e=>{Object.assign(X.value,{extInfo:{...X.value.extInfo,buttonCode:g.INFO_COLLECTION,pageCode:L.INFO_COLLECTION}});const a=me.value.dealMixData(),t=S({...a,productCode:Y,productName:Ie.value.productName},Ee.value,X.value);W.query.productClass=`${ue.value}`;const o=(()=>{var e,a;const{holder:t,insuredList:o}=ce.userData,l=[],n=(e,a)=>{e.ocrData&&Object.keys(e.ocrData).find((a=>(e[a]||e.ocrData[a])&&e.ocrData[a]!==e[a]))&&l.push(`${a}信息影像识别与录入信息不一致，请确认`)};return n(t,"投保人"),n(null==o?void 0:o[0],"被保人"),((null==(e=null==o?void 0:o[0])?void 0:e.beneficiaryList)||[]).forEach(((e,a)=>{n(e,`受益人${a+1}`)})),n(null==o?void 0:o[0].guardian,"监护人"),n(null==o?void 0:o[0].guardian,"监护人"),((null==(a=X.value)?void 0:a.tenantOrderPayInfoList)||[]).forEach((e=>{n(null==o?void 0:o[0].guardian,"银行卡")})),l})();Qe.value=!0,(null==o?void 0:o.length)?C.confirm({message:null==o?void 0:o[0]}).then((()=>{clearInterval(re),q(t,((e,a)=>{Qe.value=!1,a===k.JUMP_PAGE&&R(e.nextPageCode,W.query)}),W)})):(clearInterval(re),q(t,((e,a)=>{Qe.value=!1,a===k.JUMP_PAGE&&R(e.nextPageCode,W.query)}),W))}),(e=>{O(".long-info-collection",".van-field--error")})).catch((e=>{console.log("e",e)}))},aa=e=>{const a=X.value.tenantOrderPayInfoList[0];X.value.tenantOrderPayInfoList.splice(0,1,{...a,...e})},ta=e=>{Object.assign(ce.userData,e)};return i((()=>{(async()=>{oe&&await D({orderNo:oe,tenantId:Z}).then((({code:e,data:a})=>{var t;if("10000"===e){if((null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];ce.defaultPlanCode=e}Object.assign(X.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:Y}),ce.defaultValue=X.value,He.value=M(a.insuredList[0].productList),ue.value=a.insuredList[0].productList.length>1?1:2,_e.value=!0}})),await E(He.value).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e;Ge.value=ze(a,t);const o={};a.forEach((e=>{o[e.productCode]=e})),Je.value=o;const{payInfo:l,other:n}=w(Ge.value);ce.payInfo={...ce.payInfo,...l},ce.policyInfo={...ce.policyInfo,...n}}}))})()})),s((()=>{re=setInterval((()=>{}),3e4),setTimeout((async()=>{qe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),r((()=>{clearInterval(re)})),(e,a)=>{var t,o,l,n,i,s;const r=j,y=P;return u(),d("div",J,[c(r),p(_e)||p(ie)?(u(),v(A,{key:0,ref_key:"personalInfoRef",ref:me,"product-info":{productCode:p(Y),productName:p(Ie).productName,insurerCode:p(ne),tenantId:p(Z),planList:[]},"tenant-product-detail":p(he),"hide-benefit":"","product-collection":p(Je),"default-data":p(X),"product-factor":p(Ge),onTrialStart:Se,onTrialEnd:Ae,"onUpdate:userData":ta,onUpdateBank:aa,onAddRisk:Ye,onDeleteRisk:Ze},{middleInfo:f((()=>[p(ce).payInfo.schema.length?(u(),v(p(x),{key:0,ref_key:"payInfoRef",ref:fe,modelValue:p(X).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>p(X).tenantOrderPayInfoList=e),schema:p(ce).payInfo.schema,"is-view":p(ce).isView,"user-data":p(ce).userData},null,8,["modelValue","schema","is-view","user-data"])):m("",!0),p(ce).policyInfo.schema.length?(u(),v(p(V),{key:1,modelValue:p(X).extInfo,"onUpdate:modelValue":a[1]||(a[1]=e=>p(X).extInfo=e),schema:p(ce).policyInfo.schema,"is-view":p(ce).isView},null,8,["modelValue","schema","is-view"])):m("",!0)])),_:1},8,["product-info","tenant-product-detail","product-collection","default-data","product-factor"])):m("",!0),c(y,null,{default:f((()=>{var e;return[(null==(e=p(be))?void 0:e.length)?(u(),v(p(z),{key:0,modelValue:p(Pe),"onUpdate:modelValue":a[2]||(a[2]=e=>h(Pe)?Pe.value=e:null),"has-bg-color":!1,"attachment-list":p(be),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{Re.value=e,ke.value=!0})(e))},null,8,["modelValue","attachment-list"])):m("",!0)]})),_:1}),p(ke)?(u(),v(p(G),{key:1,show:p(ke),"onUpdate:show":a[4]||(a[4]=e=>h(ke)?ke.value=e:null),"content-list":p(Oe)?p(be):p(je),"is-only-view":p(Oe),"active-index":p(Re),text:p(Oe)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":p(Oe)?0:p(we),onSubmit:xe,onOnCloseFilePreviewByMask:Ve},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):m("",!0),c(F,{"is-share":p(ve).isShare&&!p(te),premium:null==(t=p(Ee))?void 0:t.initialPremium,"share-info":p(ve),"loading-text":p(De),"payment-frequency":(null==(s=null==(i=null==(n=null==(l=null==(o=p(Ue))?void 0:o.insuredList)?void 0:l[0].productList)?void 0:n[0].riskList)?void 0:i[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":p(he),"handle-share":e=>(e=>{me.value.validateHolder(["mobile"]).then((()=>{Object.assign(X.value,{extInfo:{...X.value.extInfo,buttonCode:g.INFO_COLLECTION,pageCode:L.INFO_COLLECTION}});const a=me.value.getUserData(),t=S({...Ue.value,holder:null==a?void 0:a.holder},Ee.value||{},X.value);q(t,((a,t)=>{t===k.JUMP_PAGE&&(null==e||e())}),W)})).catch((()=>{b("请录入投保人手机号后进行分享")}))})(e),disabled:!p(Ee)||p(Qe),onHandleClick:ea},{label:f((()=>[I(" 首年总保费 ")])),default:f((()=>[I("下一步 ")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"]),p(Me)?(u(),v(p(K),{key:2,type:p(T).RIDER_RISK,"product-class":p(ue),show:p(Me),"insured-list":p(Ne),title:"添加附加险","current-product-code":p(Be),"main-risk-code":p($e).riskCode,"select-list":p(He).productList,onCancel:We,onConfirm:Xe},null,8,["type","product-class","show","insured-list","current-product-code","main-risk-code","select-list"])):m("",!0)])}}});export{z as default};
