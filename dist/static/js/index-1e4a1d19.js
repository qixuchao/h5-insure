import{d as e,r as i,R as t,c as a,A as n,U as o,V as l,e as r,g as s,W as d,X as u,Y as c,a as p,u as m,L as v,Z as f,$ as y,a0 as C,a1 as b,b as h,f as I,h as k,i as g,w as j,j as _,a2 as O,a3 as L,a4 as x}from"./index-be5614a9.js";import{g as S,i as T,p as w}from"./trial-a67c00be.js";import{a as N,q as P}from"./product-449f9b11.js";import{_ as V}from"./index-cf46cd36.js";import{G as R,_ as A}from"./index-ab743d94.js";import{P as F}from"./index-f0905f27.js";import{u as D}from"./useAttachment-408afeb8.js";import{g as U}from"./utils-6c544484.js";import{T as B}from"./index-29d89913.js";import{o as E}from"./utils-4d2e7881.js";import{q}from"./createProposal-38033e3f.js";import"./pdfh5-008ca364.js";import"./infoCollection-c63fd7f9.js";import"./trial-92040c8f.js";import"./index-019c0ee3.js";import"./cloneDeep-1de8e9b0.js";import"./_initCloneObject-0663309f.js";import"./isObjectLike-a9798079.js";import"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-718d95d9.js";import"./phoneVerify-8acf9975.js";/* empty css              */import"./bankCard-990d5870.js";import"./index-dfffabf7.js";import"./debounce-eed12388.js";import"./index-e91fd308.js";import"./index-69afd701.js";import"./utils-a624f0b8.js";import"./index-d6311f00.js";import"./empty-c926d8ec.js";import"./box-title-7d8f7ecc.js";import"./index-0cfde637.js";import"./echarts-ac920fed.js";import"./Table-ef4ecc66.js";import"./useOrder-21f534ab.js";import"./constants-7afb7c3d.js";import"./nextStep-c1b858c9.js";import"./core-72b07402.js";import"./constant-8927d485.js";import"./index-37148bed.js";const G={class:"com-insure-limit"},M=e({name:"insureLimit"}),W=e({...M,props:{dataSource:{default:()=>[]}},setup(e){const u=e,c=i([]);return t((()=>u.dataSource),(()=>{var e,i;c.value=((null==(i=null==(e=u.dataSource)?void 0:e[0])?void 0:i.data)||[]).filter((e=>e.conditionValue))}),{deep:!0,immediate:!0}),(e,i)=>{const t=d;return a(),n("div",G,[(a(!0),n(o,null,l(s(c),((e,i)=>(a(),r(t,{key:i,title:e.conditionName,content:e.conditionValue},null,8,["title","content"])))),128))])}}});const z={key:0},X={key:1,class:"page-internet-product-detail","data-skeleton-root":"LONG"},Y={class:"info"},$={key:1,class:"preview-placeholder"},H=I("br",null,null,-1),J=I("div",{id:"insureButton"},null,-1),Q=I("div",{id:"xinaoDialog"},null,-1),Z=e({name:"InsuranceLong"}),K=e({...Z,setup(e){const l=u((()=>c((()=>import("./index-254dc3bc.js")),["static/js/index-254dc3bc.js","static/css/index-fa4edf2a.css","static/js/index-be5614a9.js","static/css/index-df1cf75e.css","static/js/pdfh5-008ca364.js","static/js/index-37148bed.js","static/css/index-827a8544.css","static/js/utils-6c544484.js","static/js/infoCollection-c63fd7f9.js","static/js/trial-92040c8f.js"]))),d=u((()=>c((()=>import("./index-e5266082.js")),["static/js/index-e5266082.js","static/css/index-eabeb59f.css","static/js/index-be5614a9.js","static/css/index-df1cf75e.css","static/js/pdfh5-008ca364.js"]))),G=u((()=>c((()=>import("./index-c03517af.js")),["static/js/index-c03517af.js","static/css/index-3329e46f.css","static/js/index-be5614a9.js","static/css/index-df1cf75e.css","static/js/pdfh5-008ca364.js"])));p();const M=m(),{productCode:Z="",tenantId:K,agentCode:ee="",agencyCode:ie,saleChannelId:te,extraInfo:ae,orderNo:ne,insurerCode:oe,preview:le,trialPreview:re}=M.query;let se={};try{console.log("extInfo",decodeURIComponent(ae)),se=JSON.parse(decodeURIComponent(ae))}catch(Ee){}i();const de=i(),ue=i(),ce=i(!1),pe=i({}),me=i({}),ve=i(!1),fe=i(0),ye=i(!1);i({});const Ce=i(!0);i(!0);const be=i(!0),he=i(""),Ie=i({}),ke=i({}),ge=i([]),je=i({imgUrl:"",desc:"",title:"",link:`${window.location.href}&isShare=1`,isShare:!1}),_e=i({});v((()=>!!le||!!re));const Oe=v((()=>!!re)),Le=i(),xe=()=>{Le.value.open()},Se=i([]),Te=i(),we=i(),Ne=i(),Pe=async()=>{(async()=>{const e=(await q({id:356,tenantId:K})).data,i={holder:{},insuredVOList:[]};i.holder.personVO=e.proposalHolder,i.insuredVOList=e.proposalInsuredList.map((e=>({personVO:{age:e.age,birthday:e.birthday,bmi:e.bmi,certNo:e.certNo,certType:e.certType,email:e.email,gender:e.gender,hasSocialInsurance:e.hasSocialInsurance,height:e.height,holderRelation:e.holderRelation,insureAreaCode:e.insureAreaCode,insureCityCode:e.insureCityCode,insureProvinceCode:e.insureProvinceCode,mobile:e.mobile,name:e.name,occupationClass:e.occupationClass,occupationCodeList:e.occupationCode,smokeFlag:e.smokeFlag,socialFlag:e.socialFlag,weight:e.weight},productPlanVOList:e.proposalInsuredProductList.map((e=>({insurerCode:null,planCode:"",riskVOList:e.proposalProductRiskList.map((e=>({amount:e.amount,annuityDrawDate:e.annuityDrawDate,annuityDrawType:e.annuityDrawType,chargePeriod:e.chargePeriod,copy:e.copy,coveragePeriod:e.coveragePeriod,liabilityVOList:e.liabilityVOList.map((e=>({liabilityAmount:null,liabilityAttributeType:e.liabilityAttributeType,liabilityAttributeValueList:e.liabilityAttributeValueList,liabilityCode:e.liabilityCode,liabilityId:e.liabilityId,liabilityRateType:null,liabilityValue:null}))),mainRiskCode:e.mainRiskCode,mainRiskId:e.mainRiskId,paymentFrequency:e.paymentFrequency,premium:e.premium,riskCategory:e.riskCategory,riskCode:e.riskCode,riskId:e.riskId,riskName:e.riskName,riskType:e.riskType})))})))}))),w(i)})(),!Oe.value&&N({productCode:Z,tenantId:K}).then((({data:e,code:i})=>{if("10000"===i){pe.value=e,document.title=e.BASIC_INFO.title||"";const{title:i,desc:t,image:a}=(null==e?void 0:e.PRODUCT_LIST.wxShareConfig)||{},[n=""]=a||[];Object.assign(je.value,{title:i,desc:t,image:n,isShare:!!(null==e?void 0:e.PRODUCT_LIST.showWXShare)}),L(e.BASIC_INFO.themeType)}})),ne&&S({orderNo:ne,tenantId:K}).then((({code:e,data:i})=>{var t;"10000"===e&&(we.value=i,Ne.value=E(i,me.value,null==(t=Ie.value)?void 0:t.planCode))})),await T({productCode:Z,isTenant:!1}).then((({data:e,code:i})=>{var t;"10000"===i&&(ce.value=!0,ye.value=!0,me.value=e,Ie.value=null==(t=e.productPlanInsureVOList)?void 0:t[0],ge.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),be.value=!1,P({productCode:Z}).then((({code:e,data:i})=>{var t,a,n,o;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:l}=i;Te.value=e||[];const{basicInfo:{questionnaireType:r},questions:s,questionnaireName:d}=(null==(t=null==l?void 0:l[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};2===r&&(Se.value=[{attachmentName:d,attachmentUri:s,attachmentType:"question"}]),Se.value=[{attachmentName:d,attachmentUri:null==(a=null==s?void 0:s[0])?void 0:a.content,attachmentType:U(String(null==(n=null==s?void 0:s[0])?void 0:n.textType),null==(o=null==s?void 0:s[0])?void 0:o.content)}]}}))};t((()=>_e.value.planCode),(e=>{Ie.value=(me.value.productPlanInsureVOList||[]).find((i=>i.planCode===e))}));const Ve=()=>{de.value.handleClickTab()("insureButton")};i(""),i(0);const{fileList:Re,mustReadFileCount:Ae,popupFileList:Fe}=D(Ie,Te),De=e=>{Ie.value=(me.value.productPlanInsureVOList||[]).find((i=>i.planCode===e))},Ue=()=>{ve.value=!1,Ce.value=!0},Be=()=>{ve.value=!1,Ce.value=!0};return t((()=>Ie.value),(()=>{const{planCode:e,oilPackageProductVOList:i,insureProductRiskVOList:t}=Ie.value;_e.value.planCode=e,ke.value=(t||[]).find((e=>e.mainRiskFlag===f.YES))}),{deep:!0,immediate:!0}),y((()=>{C(ue,(([{isIntersecting:e}],i)=>{ce.value=!0}))})),b((()=>{be.value=!0,Pe(),setTimeout((async()=>{he.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,i)=>{var t,u,c,p,m,v,f,y,C,b,L,S,T,w;const N=h("Video"),P=x;return a(),n(o,null,[s(be)?(a(),n("div",z)):(a(),n("div",X,[s(Oe)?(a(),n("div",$,[_("当前页面仅用于保费试算预览"),H,_("不展示其他产品相关配置信息")])):(a(),n(o,{key:0},[I("div",Y,[(null==(u=null==(t=s(pe))?void 0:t.BASIC_INFO)?void 0:u.banner.length)?(a(),r(V,{key:0,"data-skeleton-type":"img",url:null==(c=s(pe))?void 0:c.BASIC_INFO.banner[0]},null,8,["url"])):k("",!0),(null==(m=null==(p=s(pe))?void 0:p.BASIC_INFO)?void 0:m.video.length)?(a(),r(N,{key:1,"data-skeleton-type":"img",src:null==(v=s(pe))?void 0:v.BASIC_INFO.video[0]},null,8,["src"])):k("",!0),(null==(C=null==(y=null==(f=s(pe))?void 0:f.BASIC_INFO)?void 0:y.bannerMove)?void 0:C.length)?(a(),r(V,{key:2,url:null==(S=null==(L=null==(b=s(pe))?void 0:b.BASIC_INFO)?void 0:L.bannerMove)?void 0:S[0],onClick:Ve},null,8,["url"])):k("",!0),I("div",{ref_key:"observeRef",ref:ue},null,512)]),(null==(T=s(pe))?void 0:T.GUARANTEE)?(a(),r(R,{key:0,"show-service-config":"","data-source":s(pe),"plan-list":s(ge),onUpdateActivePlan:De},null,8,["data-source","plan-list"])):k("",!0),I("div",{class:"trial-text-btn",onClick:xe},"算一算保费"),g(W,{"data-source":null==(w=s(pe))?void 0:w.ISSUE_CONDITION},null,8,["data-source"]),g(A,{ref_key:"detailScrollRef",ref:de,"data-source":s(pe)},null,8,["data-source"]),g(P,null,{default:j((()=>{var e,i,t;return[(null==(e=s(pe).SIGNATURE)?void 0:e.inscribedContent)?(a(),r(s(d),{key:0,"inscribed-content":null==(t=null==(i=s(pe))?void 0:i.SIGNATURE)?void 0:t.inscribedContent},null,8,["inscribed-content"])):k("",!0)]})),_:1}),g(P,null,{default:j((()=>{var e;return[(null==(e=s(Re))?void 0:e.length)?(a(),r(s(G),{key:0,"attachment-list":s(Re),"pre-text":"请阅读",onPreviewFile:i[0]||(i[0]=e=>(e=>{fe.value=e,ve.value=!0})(e))},null,8,["attachment-list"])):k("",!0)]})),_:1})],64)),s(ce)?(a(),r(B,{key:2,ref_key:"trialRef",ref:Le,"data-source":s(Ie),"share-info":s(je),"is-share":s(je).isShare,"product-info":{productCode:s(me).productCode,productName:s(me).productName,productId:"",tenantId:s(K),insurerCode:s(oe)},"tenant-product-detail":s(pe),"hide-benefit":1!==s(me).openFlag},null,8,["data-source","share-info","is-share","product-info","tenant-product-detail","hide-benefit"])):k("",!0),J])),s(ye)&&!s(Oe)?(a(),r(F,{key:2,"product-detail":s(pe)},null,8,["product-detail"])):k("",!0),Q,s(ve)?(a(),r(s(l),{key:3,show:s(ve),"onUpdate:show":i[1]||(i[1]=e=>O(ve)?ve.value=e:null),"content-list":s(Ce)?s(Re):s(Fe),"is-only-view":s(Ce),"active-index":s(fe),text:s(Ce)?"关闭":"我已逐页阅读并确认告知内容","force-read-cound":s(Ce)?0:s(Ae),onSubmit:Ue,onOnCloseFilePreviewByMask:Be},null,8,["show","content-list","is-only-view","active-index","text","force-read-cound"])):k("",!0)],64)}}});export{K as default};
