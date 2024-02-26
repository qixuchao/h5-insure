import{d as e,aV as a,aW as t,i as l,j as o,r as n,k as i,bc as s,l as u,ca as r,o as d,c,b as v,u as p,p as f,ak as m,w as I,f as h,q as y,v as g,bj as L,bb as C,T as k,ba as O,bi as R,bk as b,a_ as j,cb as w,an as x,bO as P,a$ as _,aX as V,aY as E}from"./index-fb7979ef.js";import{P as D,a as F}from"./PolicyInfo-6bdedc07.js";import{s as N,g as q,m as T}from"./trial-aa03c77e.js";import{_ as S}from"./TrialButton-11bf93f2.js";import{n as U}from"./nextStep-1354f9fd.js";import{u as A}from"./useAttachment-95060395.js";import"./infoCollection-03da668a.js";import{R as B}from"./trial-41603372.js";import{u as M}from"./useOrder-71d813b8.js";import{t as $}from"./utils-ccc5b3ef.js";import H from"./index-aef27353.js";import{p as J,a as G}from"./utils-c2e43253.js";import{f as z,a as K}from"./findLastIndex-016cc11e.js";import{c as Y}from"./cloneDeep-84da83bc.js";import"./index-93b94a4d.js";import"./format-31cde443.js";import"./core-3d578396.js";import"./utils-66ecd420.js";import"./createProposal-190cabcf.js";import"./InsureInfos-00528983.js";import"./index-d4fd8854.js";import"./index-7d6c76ea.js";import"./questionnaire-42dcb602.js";import"./util-0a5322f4.js";import"./product-7bbf9c44.js";import"./constants-6ad2f07c.js";const W={class:"long-info-collection"},X=e({name:"InfoCollection"}),Q=e({...X,setup(e){const X=a((()=>t((()=>import("./index-7402d183.js")),["static/js/index-7402d183.js","static/css/index-fa4edf2a.css","static/js/index-fb7979ef.js","static/css/index-59abbbb4.css","static/js/theme-94cf7d00.js","static/js/index-93b94a4d.js","static/css/index-bbfdd7ec.css","static/js/utils-66ecd420.js","static/js/infoCollection-03da668a.js","static/js/trial-41603372.js"]))),Q=a((()=>t((()=>import("./index-c16b7bdd.js")),["static/js/index-c16b7bdd.js","static/css/index-4822eb94.css","static/js/index-fb7979ef.js","static/css/index-59abbbb4.css"]))),Z=a((()=>t((()=>import("./SelectRiskList-11d5032c.js")),["static/js/SelectRiskList-11d5032c.js","static/css/SelectRiskList-e1e05c2e.css","static/js/index-fb7979ef.js","static/css/index-59abbbb4.css","static/js/trial-aa03c77e.js","static/js/trial-41603372.js"]))),ee=l(),ae=M({}),te=o(!0),{productCode:le="",tenantId:oe,agentCode:ne="",agencyCode:ie,saleChannelId:se,isShare:ue,orderNo:re,extraInfo:de,insurerCode:ce,preview:ve}=ee.query;let pe={},fe=null;const me=o(2);try{pe=JSON.parse(decodeURIComponent(de))}catch(va){}const Ie={moduleType:7,subModuleType:null,code:"renewFlag",title:"保证续保型的一年期产品在保证续保期间是否申请续保",planCode:null,displayName:null,defaultValue:null,isHidden:null,isReadOnly:null,isMustInput:1,isExtend:null,regex:null,displayType:6,datasource:null,factorScript:null,isCalculationFactor:2,attributeValueList:[{code:"1",value:"是",defaultFlag:null,useFlag:null},{code:"2",value:"否",defaultFlag:null,useFlag:null}],position:null,remark:""},he=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{},solvency:""}),ye=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,ge=o({imgUrl:"",desc:"",title:"",link:ye}),Le=o(),Ce=o();o();const ke=o(),Oe=o({}),Re=o({}),be=o([]),je=o(),we=o({}),xe=o(!1),Pe=o(!1),_e=o(0),Ve=o(!0),{fileList:Ee,mustReadFileCount:De,popupFileList:Fe}=A(we,je);o(!1);const Ne=o(!1),qe=o(!1),Te=()=>{Pe.value=!1,Ve.value=!0,be.value.length<1||(xe.value=!0)},Se=()=>{xe.value=!1,Pe.value=!1,Ve.value=!0};o({}),o(!1),o([{}]);const Ue=o(""),Ae=o({}),Be=o(!1);o();const Me=o();o();const $e=o([]),He=o(0);o({});const Je=o(),Ge=()=>{Ue.value="试算中...",Ae.value=null,Be.value=!0},ze=(e,a)=>{Ue.value="",He.value=e.premium,Ae.value=e,Je.value=a,Be.value=!1},Ke=o(!1),Ye=o(),We=o({}),Xe=o({productList:[]}),Qe=o({}),Ze=o(),ea=(e,a)=>{var t;const l=[],o=a;return e.forEach((e=>{var a;const{insureProductRiskVOList:t}=(null==(a=e.productPlanInsureVOList)?void 0:a[0])||{};t.reduce(((e,a)=>{const{riskFixedRuleVO:{guaranteedRenewalFlag:t},riskCode:l}=(null==a?void 0:a.riskDetailResVO)||{};return t===E.YES&&e.push(l),e}),l)})),Object.assign(ae.value.extInfo,{renewRisk:l.join(",")}),(null==l?void 0:l.length)?(null==(t=o[7])?void 0:t.length)?o[7].push(Ie):o[7]=[Ie]:o[7]=(o[7]||[]).filter((e=>e.code!==Ie.code)),o},aa=i((()=>{const e=Ze.value[5]||[];return Boolean(e.find((e=>"solvency"===e.code)))})),ta=()=>{T(Xe.value).then((({code:e,data:a})=>{if("10000"===e){const{productDetailResList:e,productFactor:t}=a;Xe.value=G(e),Ze.value=ea(e,t);const{other:l}=P(Ze.value);he.policyInfo=l;const o={};e.forEach((e=>{o[e.productCode]=e})),Qe.value=o}}))},la=()=>{Ke.value=!1},oa=e=>{const a=Xe.value.productList.find((e=>e.productCode===Ye.value)),t=e.map((e=>({riskCode:e,riskType:B.RIDER_RISK,mainRiskCode:We.value.riskCode}))),l=z(a.mergeRiskReqList,(e=>e.riskCode===We.value.riskCode)),o=K(a.mergeRiskReqList,(e=>e.mainRiskCode===We.value.riskCode));let n=l;-1!==o&&(n=o),a.mergeRiskReqList=[...a.mergeRiskReqList.slice(0,n+1),...t,...a.mergeRiskReqList.slice(n+1,a.mergeRiskReqList.length)],ke.value.getRiderRiskDefaultValue(Ye.value,e,We.value.riskCode,a.mergeRiskReqList),ta(),Ke.value=!1},na=(e,a,t)=>{Ke.value=!0,$e.value=t,We.value=a,Ye.value=e},ia=(e,a,t)=>{Qe.value[e],t?(Qe.value[e].productPlanInsureVOList[0].insureProductRiskVOList=Qe.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==a)),Xe.value.productList=Xe.value.productList.map((t=>(t.productCode===e&&(t.mergeRiskReqList=t.mergeRiskReqList.filter((e=>e.riskCode!==a))),t)))):(Xe.value.productList=Xe.value.productList.filter((a=>a.productCode!==e)),ta())},sa=o(!1),ua=async()=>{var e,a,t;if(ve)return void L(C.INFO_COLLECTION,ee.query);if(!Ae.value)return;const l=[];ke.value&&l.push(null==(e=ke.value)?void 0:e.validate(!1)),Le.value&&l.push(null==(a=Le.value)?void 0:a.validate(!1)),Ce.value&&l.push(null==(t=Ce.value)?void 0:t.validate(!1)),Promise.all(l).then((e=>{if(aa.value&&!Ne.value)return void k("请阅读并勾选特别约定");Object.assign(ae.value,{extInfo:{...ae.value.extInfo,buttonCode:O.INFO_COLLECTION,pageCode:C.INFO_COLLECTION,specNoticeFlag:1}});const a=ke.value.dealMixData(),t=$({...a,productCode:le,productName:Re.value.productName},Ae.value,ae.value);ee.query.productClass=`${me.value}`,delete ee.query.canBack;const l=(()=>{var e,a;const{holder:t,insuredList:l}=he.userData,o=[],n=(e,a)=>{e.ocrData&&Object.keys(e.ocrData).find((a=>(e[a]||e.ocrData[a])&&e.ocrData[a]!==e[a]))&&o.push(`${a}信息影像识别与录入信息不一致，请确认`)};return n(t,"投保人"),n(null==l?void 0:l[0],"被保险人"),((null==(e=null==l?void 0:l[0])?void 0:e.beneficiaryList)||[]).forEach(((e,a)=>{n(e,`受益人${a+1}`)})),n(null==l?void 0:l[0].guardian,"监护人"),n(null==l?void 0:l[0].guardian,"监护人"),((null==(a=ae.value)?void 0:a.tenantOrderPayInfoList)||[]).forEach((e=>{n(null==l?void 0:l[0].guardian,"银行卡")})),o})();sa.value=!0,(null==l?void 0:l.length)?R.confirm({message:null==l?void 0:l[0]}).then((()=>{clearInterval(fe),k.loading({duration:0,message:"自核中..."}),U(t,((e,a)=>{sa.value=!1,k.clear(),a===b.JUMP_PAGE&&j(e.nextPageCode,ee.query)}),ee,!1)})):(clearInterval(fe),k.loading({duration:0,message:"自核中..."}),U(t,((e,a)=>{sa.value=!1,k.clear(),a===b.JUMP_PAGE&&j(e.nextPageCode,ee.query)}),ee,!1))}),(e=>{w(".long-info-collection",".van-field--error")})).catch((e=>{console.log("e",e)}))},ra=e=>{const a=ae.value.tenantOrderPayInfoList[0];ae.value.tenantOrderPayInfoList.splice(0,1,{...a,...e})},da=e=>{Object.assign(he.userData,e)},ca=o();return s((()=>{(async()=>{k.loading("加载中..."),re&&await q({orderNo:re,tenantId:oe}).then((({code:e,data:a})=>{var t;if("10000"===e){if((null==(t=a.insuredList)?void 0:t.length)>0){const{planCode:e}=a.insuredList[0];he.defaultPlanCode=e}Object.assign(ae.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:le}),ca.value=Y(ae.value),he.defaultValue=ae.value,Xe.value=J(a.insuredList[0].productList),me.value=a.insuredList[0].productList.length>1?1:2,qe.value=!0}})),await T(Xe.value).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t,solvency:l}=e;Ze.value=ea(a,t);const o={};a.forEach((e=>{o[e.productCode]=e})),Qe.value=o;const{payInfo:n,other:i}=P(Ze.value);he.payInfo={...he.payInfo,...n},he.solvency=l,he.policyInfo={...he.policyInfo,...i},setTimeout((()=>{te.value=!1}),500)}}))})()})),u((()=>{fe=setInterval((()=>{(()=>{var e,a;Object.assign(ae.value,{extInfo:{...ae.value.extInfo,buttonCode:O.INFO_COLLECTION,pageCode:C.INFO_COLLECTION}});const t=null==(a=null==(e=ke.value)?void 0:e.dealMixData)?void 0:a.call(e),l=$(t,Ae.value,ae.value);l.orderStatus="collectInfo",x(l,ca.value)||N(l).then((({code:e,data:a})=>{"10000"===e&&(ca.value=Y(l))}))})()}),1e4),setTimeout((async()=>{Me.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),r((()=>{clearInterval(fe)})),(e,a)=>{var t,l,o,n,i,s;const u=_,r=V;return d(),c("div",W,[v(u),p(qe)||p(ve)?(d(),f(H,{key:0,ref_key:"personalInfoRef",ref:ke,"product-info":{productCode:p(le),productName:p(Re).productName,insurerCode:p(ce),tenantId:p(oe),planList:[]},"tenant-product-detail":p(Oe),"hide-benefit":"","product-collection":p(Qe),"default-data":p(ae),"product-factor":p(Ze),"page-loading":p(te),onTrialStart:Ge,onTrialEnd:ze,"onUpdate:userData":da,onUpdateBank:ra,onAddRisk:na,onDeleteRisk:ia},m({_:2},[p(te)?void 0:{name:"middleInfo",fn:I((()=>[p(he).payInfo.schema.length?(d(),f(p(D),{key:0,ref_key:"payInfoRef",ref:Le,modelValue:p(ae).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>p(ae).tenantOrderPayInfoList=e),schema:p(he).payInfo.schema,"is-view":p(he).isView,"user-data":p(he).userData},null,8,["modelValue","schema","is-view","user-data"])):h("",!0),p(he).policyInfo.schema.length?(d(),f(p(F),{key:1,ref_key:"policyInfoRef",ref:Ce,modelValue:p(ae).extInfo,"onUpdate:modelValue":a[1]||(a[1]=e=>p(ae).extInfo=e),schema:p(he).policyInfo.schema,"is-view":p(he).isView},null,8,["modelValue","schema","is-view"])):h("",!0)])),key:"0"}]),1032,["product-info","tenant-product-detail","product-collection","default-data","product-factor","page-loading"])):h("",!0),v(r,null,{default:I((()=>[!p(te)&&p(aa)?(d(),f(p(Q),{key:0,modelValue:p(Ne),"onUpdate:modelValue":a[2]||(a[2]=e=>y(Ne)?Ne.value=e:null),class:"special-tips","has-bg-color":!1,"attachment-list":p(Ee),"is-show-radio":"","pre-text":`本人已认真阅读下面的特别约定${p(he).solvency}`,onPreviewFile:a[3]||(a[3]=e=>(e=>{_e.value=e,Pe.value=!0})(e))},null,8,["modelValue","attachment-list","pre-text"])):h("",!0)])),_:1}),p(Pe)?(d(),f(p(X),{key:1,show:p(Pe),"onUpdate:show":a[4]||(a[4]=e=>y(Pe)?Pe.value=e:null),"content-list":p(Ve)?p(Ee):p(Fe),"is-only-view":p(Ve),"active-index":p(_e),text:p(Ve)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":p(Ve)?0:p(De),onSubmit:Te,onOnCloseFilePreviewByMask:Se},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):h("",!0),v(S,{"is-share":p(ge).isShare&&!p(ue),premium:null==(t=p(Ae))?void 0:t.initialPremium,"share-info":p(ge),"loading-text":p(Ue),"payment-frequency":(null==(s=null==(i=null==(n=null==(o=null==(l=p(Je))?void 0:l.insuredList)?void 0:o[0].productList)?void 0:n[0].riskList)?void 0:i[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":p(Oe),"handle-share":e=>(e=>{ke.value.validateHolder(["mobile"]).then((()=>{Object.assign(ae.value,{extInfo:{...ae.value.extInfo,buttonCode:O.INFO_COLLECTION,pageCode:C.INFO_COLLECTION}});const a=ke.value.getUserData(),t=$({...Je.value,holder:null==a?void 0:a.holder},Ae.value||{},ae.value);U(t,((a,t)=>{t===b.JUMP_PAGE&&(null==e||e())}),ee)})).catch((()=>{k("请录入投保人手机号后进行分享")}))})(e),disabled:!p(Ae)||p(sa)||p(te),onHandleClick:ua},{label:I((()=>[g(" 首年总保费 ")])),default:I((()=>[g("下一步 ")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"]),p(Ke)?(d(),f(p(Z),{key:2,type:p(B).RIDER_RISK,"product-class":p(me),show:p(Ke),"insured-list":p($e),title:"添加附加险","current-product-code":p(Ye),"main-risk-code":p(We).riskCode,"select-list":p(Xe).productList,onCancel:la,onConfirm:oa},null,8,["type","product-class","show","insured-list","current-product-code","main-risk-code","select-list"])):h("",!0)])}}});export{Q as default};
