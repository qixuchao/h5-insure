import{d as e,aV as a,aW as t,i as o,j as l,r as n,k as i,ca as s,bc as u,l as r,cb as d,o as c,c as v,b as p,u as f,p as m,ak as I,w as h,f as g,q as y,v as C,bj as L,bb as k,T as O,ba as R,bi as b,bk as j,a_ as w,cc as _,bO as x,a$ as P,aX as V,cd as E,aY as D}from"./index-30a3e375.js";import{P as N,a as F}from"./PolicyInfo-39b0c05c.js";import{s as q,g as T,m as S}from"./trial-c9344c20.js";import{_ as U}from"./TrialButton-fc333fbc.js";import{n as A}from"./nextStep-0775896b.js";import{u as B}from"./useAttachment-bfcad194.js";import"./infoCollection-a47eac90.js";import{R as M}from"./trial-c4785010.js";import{u as $}from"./useOrder-7633d686.js";import{t as H}from"./utils-d3615754.js";import J from"./index-c3314509.js";import{p as G,a as z}from"./utils-9788b572.js";import{f as K,a as Y}from"./findLastIndex-885a1e90.js";import{c as W}from"./cloneDeep-9f775cff.js";import"./index-eb953211.js";import"./format-31cde443.js";import"./core-6c69d4cb.js";import"./utils-1469a0fe.js";import"./createProposal-6a1cdca4.js";import"./InsureInfos-a94f1058.js";import"./index-113e909f.js";import"./index-cac6c203.js";import"./questionnaire-42dcb602.js";import"./util-456b62ac.js";import"./product-7bbf9c44.js";import"./constants-6ad2f07c.js";const X={class:"long-info-collection"},Q=e({name:"InfoCollection"}),Z=e({...Q,setup(e){const Q=a((()=>t((()=>import("./index-3fed9b1f.js")),["static/js/index-3fed9b1f.js","static/css/index-fa4edf2a.css","static/js/index-30a3e375.js","static/css/index-ad586028.css","static/js/theme-94cf7d00.js","static/js/index-eb953211.js","static/css/index-bbfdd7ec.css","static/js/utils-1469a0fe.js","static/js/infoCollection-a47eac90.js","static/js/trial-c4785010.js"]))),Z=a((()=>t((()=>import("./index-9fe90c85.js")),["static/js/index-9fe90c85.js","static/css/index-4822eb94.css","static/js/index-30a3e375.js","static/css/index-ad586028.css"]))),ee=a((()=>t((()=>import("./SelectRiskList-a52d40b9.js")),["static/js/SelectRiskList-a52d40b9.js","static/css/SelectRiskList-e1e05c2e.css","static/js/index-30a3e375.js","static/css/index-ad586028.css","static/js/trial-c9344c20.js","static/js/trial-c4785010.js"]))),ae=o(),te=$({}),oe=l(!0),{productCode:le="",tenantId:ne,agentCode:ie="",agencyCode:se,saleChannelId:ue,isShare:re,orderNo:de,extraInfo:ce,insurerCode:ve,preview:pe}=ae.query;let fe={};const me=null,Ie=l(2);try{fe=JSON.parse(decodeURIComponent(ce))}catch(fa){}const he={moduleType:7,subModuleType:null,code:"renewFlag",title:"保证续保型的一年期产品在保证续保期间是否申请续保",planCode:null,displayName:null,defaultValue:null,isHidden:null,isReadOnly:null,isMustInput:1,isExtend:null,regex:null,displayType:6,datasource:null,factorScript:null,isCalculationFactor:2,attributeValueList:[{code:"1",value:"是",defaultFlag:null,useFlag:null},{code:"2",value:"否",defaultFlag:null,useFlag:null}],position:null,remark:""},ge=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{},solvency:""}),ye=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,Ce=l({imgUrl:"",desc:"",title:"",link:ye}),Le=l(),ke=l();l();const Oe=l(),Re=l({}),be=l({}),je=l([]),we=l(),_e=l({}),xe=l(!1),Pe=l(!1),Ve=l(0),Ee=l(!0),{fileList:De,mustReadFileCount:Ne,popupFileList:Fe}=B(_e,we);l(!1);const qe=l(!1),Te=l(!1),Se=()=>{Pe.value=!1,Ee.value=!0,je.value.length<1||(xe.value=!0)},Ue=()=>{xe.value=!1,Pe.value=!1,Ee.value=!0};l({}),l(!1),l([{}]);const Ae=l(""),Be=l({}),Me=l(!1);l();const $e=l();l();const He=l([]),Je=l(0);l({});const Ge=l(),ze=()=>{Ae.value="试算中...",Be.value=null,Me.value=!0},Ke=(e,a)=>{Ae.value="",Je.value=e.premium,Be.value=e,Ge.value=a,Me.value=!1},Ye=l(!1),We=l(),Xe=l({}),Qe=l({productList:[]}),Ze=l({}),ea=l(),aa=(e,a)=>{var t;const o=[],l=a;return e.forEach((e=>{var a;const{insureProductRiskVOList:t}=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{};t.reduce(((e,a)=>{const{riskFixedRuleVO:{guaranteedRenewalFlag:t},riskCode:o}=(null==a?void 0:a.riskDetailResVO)||{};return t===D.YES&&e.push(o),e}),o)})),Object.assign(te.value.extInfo,{renewRisk:o.join(",")}),(null==o?void 0:o.length)?(null==(t=l[7])?void 0:t.length)?l[7].push(he):l[7]=[he]:l[7]=(l[7]||[]).filter((e=>e.code!==he.code)),l},ta=i((()=>{const e=ea.value[5]||[];return Boolean(e.find((e=>"solvency"===e.code)))})),oa=()=>{S(Qe.value).then((({code:e,data:a})=>{if("10000"===e){const{productDetailResList:e,productFactor:t}=a;Qe.value=z(e),ea.value=aa(e,t);const{other:o}=x(ea.value);ge.policyInfo=o;const l={};e.forEach((e=>{l[e.productCode]=e})),Ze.value=l}}))},la=()=>{Ye.value=!1},na=e=>{const a=Qe.value.productList.find((e=>e.productCode===We.value)),t=e.map((e=>({riskCode:e,riskType:M.RIDER_RISK,mainRiskCode:Xe.value.riskCode}))),o=K(a.mergeRiskReqList,(e=>e.riskCode===Xe.value.riskCode)),l=Y(a.mergeRiskReqList,(e=>e.mainRiskCode===Xe.value.riskCode));let n=o;-1!==l&&(n=l),a.mergeRiskReqList=[...a.mergeRiskReqList.slice(0,n+1),...t,...a.mergeRiskReqList.slice(n+1,a.mergeRiskReqList.length)],Oe.value.getRiderRiskDefaultValue(We.value,e,Xe.value.riskCode,a.mergeRiskReqList),oa(),Ye.value=!1},ia=(e,a,t)=>{Ye.value=!0,He.value=t,Xe.value=a,We.value=e},sa=(e,a,t)=>{Ze.value[e],t?(Ze.value[e].productPlanInsureVOList[0].insureProductRiskVOList=Ze.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==a)),Qe.value.productList=Qe.value.productList.map((t=>(t.productCode===e&&(t.mergeRiskReqList=t.mergeRiskReqList.filter((e=>e.riskCode!==a))),t)))):(Qe.value.productList=Qe.value.productList.filter((a=>a.productCode!==e)),oa())},ua=l(!1),ra=async()=>{var e,a,t;if(pe)return void L(k.INFO_COLLECTION,ae.query);if(!Be.value)return;const o=[];Oe.value&&o.push(null==(e=Oe.value)?void 0:e.validate(!1)),Le.value&&o.push(null==(a=Le.value)?void 0:a.validate(!1)),ke.value&&o.push(null==(t=ke.value)?void 0:t.validate(!1)),Promise.all(o).then((e=>{if(ta.value&&!qe.value)return void O("请阅读并勾选特别约定");Object.assign(te.value,{extInfo:{...te.value.extInfo,buttonCode:R.INFO_COLLECTION,pageCode:k.INFO_COLLECTION,specNoticeFlag:qe.value?1:2}});const a=Oe.value.dealMixData(),t=H({...a,productCode:le,productName:be.value.productName},Be.value,te.value);ae.query.productClass=`${Ie.value}`,delete ae.query.canBack;const o=(()=>{var e,a;const{holder:t,insuredList:o}=ge.userData,l=[],n=(e,a)=>{e.ocrData&&Object.keys(e.ocrData).find((a=>(e[a]||e.ocrData[a])&&e.ocrData[a]!==e[a]))&&l.push(`${a}信息影像识别与录入信息不一致，请确认`)};return n(t,"投保人"),n(null==o?void 0:o[0],"被保险人"),((null==(e=null==o?void 0:o[0])?void 0:e.beneficiaryList)||[]).forEach(((e,a)=>{n(e,`受益人${a+1}`)})),n(null==o?void 0:o[0].guardian,"监护人"),n(null==o?void 0:o[0].guardian,"监护人"),((null==(a=te.value)?void 0:a.tenantOrderPayInfoList)||[]).forEach((e=>{n(null==o?void 0:o[0].guardian,"银行卡")})),l})();ua.value=!0,(null==o?void 0:o.length)?b.confirm({message:null==o?void 0:o[0]}).then((()=>{clearInterval(me),O.loading({duration:0,message:"自核中..."}),A(t,((e,a)=>{ua.value=!1,O.clear(),a===j.JUMP_PAGE&&w(e.nextPageCode,ae.query)}),ae,!1)})):(clearInterval(me),O.loading({duration:0,message:"自核中..."}),A(t,((e,a)=>{ua.value=!1,O.clear(),a===j.JUMP_PAGE&&w(e.nextPageCode,ae.query)}),ae,!1))}),(e=>{_(".long-info-collection",".van-field--error")})).catch((e=>{console.log("e",e)}))},da=e=>{const a=te.value.tenantOrderPayInfoList[0];te.value.tenantOrderPayInfoList.splice(0,1,{...a,...e})},ca=e=>{Object.assign(ge.userData,e)},va=l(),pa=(e=!0)=>{var a,t;Object.assign(te.value,{extInfo:{...te.value.extInfo,buttonCode:R.INFO_COLLECTION,pageCode:k.INFO_COLLECTION}});const o=null==(t=null==(a=Oe.value)?void 0:a.dealMixData)?void 0:t.call(a),l=H({...o,productCode:le,productName:be.value.productName},Be.value,te.value);l.orderStatus="collectInfo",q(l).then((({code:a,data:t})=>{"10000"===a&&e&&O("暂存成功")}))};s("handleCache",pa);return u((()=>{(async()=>{O.loading("加载中..."),de&&await T({orderNo:de,tenantId:ne}).then((({code:e,data:a})=>{var t;if("10000"===e){if((null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];ge.defaultPlanCode=e}Object.assign(te.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:le}),va.value=W(te.value),ge.defaultValue=te.value,Qe.value=G(a.insuredList[0].productList),Ie.value=a.insuredList[0].productList.length>1?1:2,Te.value=!0}})),await S(Qe.value).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t,solvency:o}=e;ea.value=aa(a,t);const l={};a.forEach((e=>{l[e.productCode]=e})),Ze.value=l;const{payInfo:n,other:i}=x(ea.value);ge.payInfo={...ge.payInfo,...n},ge.solvency=o,ge.policyInfo={...ge.policyInfo,...i},setTimeout((()=>{oe.value=!1}),500)}}))})()})),r((()=>{setTimeout((async()=>{$e.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),d((()=>{clearInterval(me)})),(e,a)=>{var t,o,l,n,i,s;const u=P,r=V,d=E;return c(),v("div",X,[p(u),f(Te)||f(pe)?(c(),m(J,{key:0,ref_key:"personalInfoRef",ref:Oe,"product-info":{productCode:f(le),productName:f(be).productName,insurerCode:f(ve),tenantId:f(ne),planList:[]},"tenant-product-detail":f(Re),"hide-benefit":"","product-collection":f(Ze),"default-data":f(te),"product-factor":f(ea),"page-loading":f(oe),onTrialStart:ze,onTrialEnd:Ke,"onUpdate:userData":ca,onUpdateBank:da,onAddRisk:ia,onDeleteRisk:sa},I({_:2},[f(oe)?void 0:{name:"middleInfo",fn:h((()=>[f(ge).payInfo.schema.length?(c(),m(f(N),{key:0,ref_key:"payInfoRef",ref:Le,modelValue:f(te).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>f(te).tenantOrderPayInfoList=e),schema:f(ge).payInfo.schema,"is-view":f(ge).isView,"user-data":f(ge).userData},null,8,["modelValue","schema","is-view","user-data"])):g("",!0),f(ge).policyInfo.schema.length?(c(),m(f(F),{key:1,ref_key:"policyInfoRef",ref:ke,modelValue:f(te).extInfo,"onUpdate:modelValue":a[1]||(a[1]=e=>f(te).extInfo=e),schema:f(ge).policyInfo.schema,"is-view":f(ge).isView},null,8,["modelValue","schema","is-view"])):g("",!0)])),key:"0"}]),1032,["product-info","tenant-product-detail","product-collection","default-data","product-factor","page-loading"])):g("",!0),p(r,null,{default:h((()=>[!f(oe)&&f(ta)?(c(),m(f(Z),{key:0,modelValue:f(qe),"onUpdate:modelValue":a[2]||(a[2]=e=>y(qe)?qe.value=e:null),class:"special-tips","has-bg-color":!1,"attachment-list":f(De),"is-show-radio":"","pre-text":`本人已认真阅读下面的特别约定${f(ge).solvency}`,onPreviewFile:a[3]||(a[3]=e=>(e=>{Ve.value=e,Pe.value=!0})(e))},null,8,["modelValue","attachment-list","pre-text"])):g("",!0)])),_:1}),f(Pe)?(c(),m(f(Q),{key:1,show:f(Pe),"onUpdate:show":a[4]||(a[4]=e=>y(Pe)?Pe.value=e:null),"content-list":f(Ee)?f(De):f(Fe),"is-only-view":f(Ee),"active-index":f(Ve),text:f(Ee)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":f(Ee)?0:f(Ne),onSubmit:Se,onOnCloseFilePreviewByMask:Ue},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):g("",!0),p(U,{"is-share":f(Ce).isShare&&!f(re),premium:null==(t=f(Be))?void 0:t.initialPremium,"share-info":f(Ce),"loading-text":f(Ae),"payment-frequency":(null==(s=null==(i=null==(n=null==(l=null==(o=f(Ge))?void 0:o.insuredList)?void 0:l[0].productList)?void 0:n[0].riskList)?void 0:i[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":f(Re),"handle-share":e=>(e=>{Oe.value.validateHolder(["mobile"]).then((()=>{Object.assign(te.value,{extInfo:{...te.value.extInfo,buttonCode:R.INFO_COLLECTION,pageCode:k.INFO_COLLECTION}});const a=Oe.value.getUserData(),t=H({...Ge.value,holder:null==a?void 0:a.holder},Be.value||{},te.value);A(t,((a,t)=>{t===j.JUMP_PAGE&&(null==e||e())}),ae)})).catch((()=>{O("请录入投保人手机号后进行分享")}))})(e),disabled:!f(Be)||f(ua)||f(oe),onHandleClick:ra},{label:h((()=>[C(" 首年总保费 ")])),default:h((()=>[C("下一步 ")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"]),f(Ye)?(c(),m(f(ee),{key:2,type:f(M).RIDER_RISK,"product-class":f(Ie),show:f(Ye),"insured-list":f(He),title:"添加附加险","current-product-code":f(We),"main-risk-code":f(Xe).riskCode,"select-list":f(Qe).productList,onCancel:la,onConfirm:na},null,8,["type","product-class","show","insured-list","current-product-code","main-risk-code","select-list"])):g("",!0),p(d,{"button-image":f("/static/png/cache_icon-a458a0d2.png"),onClick:pa},null,8,["button-image"])])}}});export{Z as default};
