import{d as e,af as a,ag as t,i as l,j as o,r as n,aG as i,l as s,c9 as u,o as r,c as d,b as c,u as f,p,w as v,f as m,q as h,v as I,aP as y,aF as g,aE as C,aN as O,aQ as w,aj as L,ca as j,T as b,bH as P,ak as x,al as _,ah as V}from"./index-08ec7e17.js";import{P as k,a as E}from"./PolicyInfo-96700884.js";import{g as F,m as N}from"./trial-9f068824.js";import{_ as D}from"./TrialButton-e41c5171.js";import{n as T}from"./nextStep-66910f44.js";import{u as R}from"./useAttachment-5fd2487c.js";import"./infoCollection-40e62926.js";import"./trial-dafca725.js";import{u as U}from"./useOrder-053688bd.js";import{t as q}from"./utils-244536a0.js";import A from"./index-bb036fbb.js";import{p as S}from"./utils-186bf2c3.js";import"./index-117e484c.js";import"./format-31cde443.js";import"./core-5475e5f9.js";import"./utils-2861244d.js";import"./createProposal-3450bc6d.js";import"./cloneDeep-0761124f.js";import"./InsureInfos-25a9c804.js";import"./index-a341af51.js";import"./index-500edfe4.js";import"./questionnaire-42dcb602.js";import"./util-04d572b8.js";import"./product-7bbf9c44.js";import"./constants-6ad2f07c.js";const M={class:"long-info-collection"},B=e({name:"InfoCollection"}),H=e({...B,setup(e){const B=a((()=>t((()=>import("./index-b7f03e31.js")),["static/js/index-b7f03e31.js","static/css/index-fa4edf2a.css","static/js/index-08ec7e17.js","static/css/index-0849ef7c.css","static/js/theme-94cf7d00.js","static/js/index-117e484c.js","static/css/index-bbfdd7ec.css","static/js/utils-2861244d.js","static/js/infoCollection-40e62926.js","static/js/trial-dafca725.js"]))),H=a((()=>t((()=>import("./index-623df825.js")),["static/js/index-623df825.js","static/css/index-793d1580.css","static/js/index-08ec7e17.js","static/css/index-0849ef7c.css"]))),G=l(),J=U(),{productCode:$="",tenantId:z,agentCode:Q="",agencyCode:Y,saleChannelId:K,isShare:W,orderNo:X,extraInfo:Z,insurerCode:ee,preview:ae}=G.query;let te={},le=null;const oe=o(2);try{te=JSON.parse(decodeURIComponent(Z))}catch(Be){}const ne={moduleType:7,subModuleType:null,code:"renewFlag",title:"保证续保型的一年期产品在保证续保期间是否申请续保",planCode:null,displayName:null,defaultValue:null,isHidden:null,isReadOnly:null,isMustInput:1,isExtend:null,regex:null,displayType:6,datasource:null,factorScript:null,isCalculationFactor:2,attributeValueList:[{code:"1",value:"是",defaultFlag:null,useFlag:null},{code:"2",value:"否",defaultFlag:null,useFlag:null}],position:null,remark:""},ie=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),se=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ue=o({imgUrl:"",desc:"",title:"",link:se}),re=o();o();const de=o(),ce=o({}),fe=o({}),pe=o([]),ve=o(),me=o({}),he=o(!1),Ie=o(!1),ye=o(0),ge=o(!0),{fileList:Ce,mustReadFileCount:Oe,popupFileList:we}=R(me,ve),Le=o(!1),je=o(!1),be=()=>{Ie.value=!1,ge.value=!0,pe.value.length<1||(he.value=!0)},Pe=()=>{he.value=!1,Ie.value=!1,ge.value=!0};o({}),o(!1),o([{}]);const xe=o(""),_e=o({}),Ve=o(!1);o();const ke=o();o();const Ee=o(0);o({});const Fe=o(),Ne=()=>{xe.value="试算中...",_e.value=null,Ve.value=!0},De=(e,a)=>{xe.value="",Ee.value=e.premium,_e.value=e,Fe.value=a,Ve.value=!1},Te=o(!1),Re=async()=>{var e,a;if(ae)return void y(g.INFO_COLLECTION,G.query);if(!_e.value)return;const t=[];de.value&&t.push(null==(e=de.value)?void 0:e.validate(!1)),re.value&&t.push(null==(a=re.value)?void 0:a.validate(!1)),Promise.all(t).then((e=>{Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:C.INFO_COLLECTION,pageCode:g.INFO_COLLECTION}});const a=de.value.dealMixData(),t=q({...a,productCode:$,productName:fe.value.productName},_e.value,J.value);G.query.productClass=oe.value;const l=(()=>{var e,a;const{holder:t,insuredList:l}=ie.userData,o=[],n=(e,a)=>{e.ocrData&&Object.keys(e.ocrData).find((a=>(e[a]||e.ocrData[a])&&e.ocrData[a]!==e[a]))&&o.push(`${a}信息影像识别与录入信息不一致，请确认`)};return n(t,"投保人"),n(null==l?void 0:l[0],"被保人"),((null==(e=null==l?void 0:l[0])?void 0:e.beneficiaryList)||[]).forEach(((e,a)=>{n(e,`受益人${a+1}`)})),n(null==l?void 0:l[0].guardian,"监护人"),n(null==l?void 0:l[0].guardian,"监护人"),((null==(a=J.value)?void 0:a.tenantOrderPayInfoList)||[]).forEach((e=>{n(null==l?void 0:l[0].guardian,"银行卡")})),o})();Te.value=!0,(null==l?void 0:l.length)?O.confirm({message:null==l?void 0:l[0]}).then((()=>{clearInterval(le),T(t,((e,a)=>{Te.value=!1,a===w.JUMP_PAGE&&L(e.nextPageCode,G.query)}),G)})):(clearInterval(le),T(t,((e,a)=>{Te.value=!1,a===w.JUMP_PAGE&&L(e.nextPageCode,G.query)}),G))}),(e=>{j(".long-info-collection",".van-field--error")})).catch((e=>{console.log("e",e)}))},Ue=e=>{const a=J.value.tenantOrderPayInfoList[0];J.value.tenantOrderPayInfoList.splice(0,1,{...a,...e})},qe=e=>{Object.assign(ie.userData,e)},Ae=o({}),Se=o(),Me=async()=>{let e={};X&&await F({orderNo:X,tenantId:z}).then((({code:a,data:t})=>{var l;if("10000"===a){if((null==(l=t.insuredList)?void 0:l.length)>0){const{planCode:e}=t.insuredList[0];ie.defaultPlanCode=e}Object.assign(J.value,t,{tenantOrderPayInfoList:t.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:$}),ie.defaultValue=J.value,e=S(t.insuredList[0].productList),oe.value=t.insuredList[0].productList.length>1?1:2,je.value=!0}})),await N(e).then((({data:e,code:a})=>{var t;if("10000"===a){const{productDetailResList:a,productFactor:l}=e,o=(e=>{const a=[];return e.forEach((e=>{var t;const{insureProductRiskVOList:l}=(null==(t=e.productPlanInsureVOList)?void 0:t[0])||{};l.reduce(((e,a)=>{const{riskFixedRuleVO:{guaranteedRenewalFlag:t},riskCode:l}=(null==a?void 0:a.riskDetailResVO)||{};return t===V.YES&&e.push(l),e}),a)})),a})(a);Object.assign(J.value.extInfo,{renewRisk:o.join(",")}),(null==o?void 0:o.length)&&((null==(t=l[7])?void 0:t.length)?l[7].push(ne):l[7]=[ne]),Se.value=l;const n={};a.forEach((e=>{n[e.productCode]=e})),Ae.value=n;const{payInfo:i,other:s}=P(Se.value);ie.payInfo={...ie.payInfo,...i},ie.policyInfo={...ie.policyInfo,...s}}}))};return i((()=>{Me()})),s((()=>{le=setInterval((()=>{}),3e4),setTimeout((async()=>{ke.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),u((()=>{clearInterval(le)})),(e,a)=>{var t,l,o,n,i,s;const u=x,y=_;return r(),d("div",M,[c(u),f(je)||f(ae)?(r(),p(A,{key:0,ref_key:"personalInfoRef",ref:de,"product-info":{productCode:f($),productName:f(fe).productName,insurerCode:f(ee),tenantId:f(z),planList:[]},"tenant-product-detail":f(ce),"hide-benefit":"","product-collection":f(Ae),"default-data":f(J),"product-factor":f(Se),onTrialStart:Ne,onTrialEnd:De,"onUpdate:userData":qe,onUpdateBank:Ue},{middleInfo:v((()=>[f(ie).payInfo.schema.length?(r(),p(f(k),{key:0,ref_key:"payInfoRef",ref:re,modelValue:f(J).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>f(J).tenantOrderPayInfoList=e),schema:f(ie).payInfo.schema,"is-view":f(ie).isView,"user-data":f(ie).userData},null,8,["modelValue","schema","is-view","user-data"])):m("",!0),f(ie).policyInfo.schema.length?(r(),p(f(E),{key:1,modelValue:f(J).extInfo,"onUpdate:modelValue":a[1]||(a[1]=e=>f(J).extInfo=e),schema:f(ie).policyInfo.schema,"is-view":f(ie).isView},null,8,["modelValue","schema","is-view"])):m("",!0)])),_:1},8,["product-info","tenant-product-detail","product-collection","default-data","product-factor"])):m("",!0),c(y,null,{default:v((()=>{var e;return[(null==(e=f(Ce))?void 0:e.length)?(r(),p(f(H),{key:0,modelValue:f(Le),"onUpdate:modelValue":a[2]||(a[2]=e=>h(Le)?Le.value=e:null),"has-bg-color":!1,"attachment-list":f(Ce),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{ye.value=e,Ie.value=!0})(e))},null,8,["modelValue","attachment-list"])):m("",!0)]})),_:1}),f(Ie)?(r(),p(f(B),{key:1,show:f(Ie),"onUpdate:show":a[4]||(a[4]=e=>h(Ie)?Ie.value=e:null),"content-list":f(ge)?f(Ce):f(we),"is-only-view":f(ge),"active-index":f(ye),text:f(ge)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":f(ge)?0:f(Oe),onSubmit:be,onOnCloseFilePreviewByMask:Pe},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):m("",!0),c(D,{"is-share":f(ue).isShare&&!f(W),premium:null==(t=f(_e))?void 0:t.initialPremium,"share-info":f(ue),"loading-text":f(xe),"payment-frequency":(null==(s=null==(i=null==(n=null==(o=null==(l=f(Fe))?void 0:l.insuredList)?void 0:o[0].productList)?void 0:n[0].riskList)?void 0:i[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":f(ce),"handle-share":e=>(e=>{de.value.validateHolder(["mobile"]).then((()=>{Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:C.INFO_COLLECTION,pageCode:g.INFO_COLLECTION}});const a=de.value.getUserData(),t=q({...Fe.value,holder:null==a?void 0:a.holder},_e.value||{},J.value);T(t,((a,t)=>{t===w.JUMP_PAGE&&(null==e||e())}),G)})).catch((()=>{b("请录入投保人手机号后进行分享")}))})(e),disabled:!f(_e)||f(Te),onHandleClick:Re},{default:v((()=>[I("下一步 ")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{H as default};
