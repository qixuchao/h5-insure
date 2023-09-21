import{d as e,a4 as a,a5 as t,i as o,r as n,j as l,aE as i,o as s,c as r,b as u,u as d,m as c,w as f,f as p,p as m,a as v,a8 as h,aK as I,aI as y,aL as C,a9 as O,T as j,bq as L,aa as g,ab as b}from"./index-f312854e.js";import{_ as w,a as x}from"./PolicyInfo-378020f0.js";import{s as P,g as _,m as N}from"./trial-3de94e4e.js";import{_ as E}from"./TrialButton-18ada99e.js";import{n as D}from"./nextStep-fc39f019.js";import{u as V}from"./useAttachment-2eb98c29.js";import"./infoCollection-030d1ab5.js";import"./trial-283da3e3.js";import{u as k}from"./useOrder-504137da.js";import{a as T,B as F}from"./constants-fe95ef6f.js";import{t as U}from"./utils-22c6cea6.js";import{T as q}from"./index-1c1b789a.js";import{p as A}from"./utils-95189603.js";import"./index-d30a1a9b.js";import"./core-f012154e.js";import"./utils-7f13c114.js";import"./createProposal-9881c85a.js";import"./cloneDeep-60bcdbd7.js";import"./InsureInfos-ee19ce81.js";import"./index-de590a0b.js";import"./index-49e400d6.js";import"./index-cf19b27f.js";import"./lodash-18265462.js";import"./questionnaire-62331097.js";import"./util-0d61b3cb.js";import"./product-7bbf9c44.js";import"./constants-eb24f7a1.js";import"./config-98e8d477.js";const R={class:"long-info-collection"},M=e({name:"InfoCollection"}),S=e({...M,setup(e){const M=a((()=>t((()=>import("./index-3f40a1b0.js")),["static/js/index-3f40a1b0.js","static/css/index-fa4edf2a.css","static/js/index-f312854e.js","static/css/index-74f86d6d.css","static/js/theme-94cf7d00.js","static/js/index-d30a1a9b.js","static/css/index-bbfdd7ec.css","static/js/utils-7f13c114.js","static/js/infoCollection-030d1ab5.js","static/js/trial-283da3e3.js"]))),S=a((()=>t((()=>import("./index-794accbf.js")),["static/js/index-794accbf.js","static/css/index-bf024e9b.css","static/js/index-f312854e.js","static/css/index-74f86d6d.css"]))),B=o(),J=k(),{productCode:$="",tenantId:G,agentCode:H="",agencyCode:K,saleChannelId:z,isShare:Q,orderNo:W,extraInfo:X,insurerCode:Y,preview:Z}=B.query;let ee={};try{ee=JSON.parse(decodeURIComponent(X))}catch(Fe){}const ae=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),te=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,oe=l({imgUrl:"",desc:"",title:"",link:te}),ne=l();l();const le=l(),ie=l({}),se=l({}),re=l([]),ue=l(),de=l({}),ce=l(!1),fe=l(!1),pe=l(0),me=l(!0),{fileList:ve,mustReadFileCount:he,popupFileList:Ie}=V(de,ue),ye=l(!1),Ce=l(!1),Oe=()=>{fe.value=!1,me.value=!0,re.value.length<1||(ce.value=!0)},je=()=>{ce.value=!1,fe.value=!1,me.value=!0};l({}),l(!1),l([{}]);const Le=l(""),ge=l(0),be=l(!1);l(),l(),l();const we=l(0);l({});const xe=l(),Pe=()=>{Le.value="试算中...",ge.value=0,be.value=!0},_e=(e,a)=>{Le.value="",we.value=e.premium,ge.value=e,xe.value=a,be.value=!1},Ne=async()=>{var e,a;if(Z)return void I(T.INFO_COLLECTION,B.query);if(!ge.value)return;const t=[];le.value&&t.push(null==(e=le.value)?void 0:e.validate(!1)),ne.value&&t.push(null==(a=ne.value)?void 0:a.validate(!1)),Promise.all(t).then((()=>{Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:F.INFO_COLLECTION,pageCode:T.INFO_COLLECTION}});const e=le.value.dealMixData(),a=U({...e,productCode:$,productName:se.value.productName},ge.value,J.value),t=(()=>{var e,a;const{holder:t,insuredList:o}=ae.userData,n=[],l=(e,a)=>{e.ocrData&&Object.keys(e.ocrData).find((a=>(e[a]||e.ocrData[a])&&e.ocrData[a]!==e[a]))&&n.push(`${a}信息影像识别与录入信息不一致，请确认`)};return l(t,"投保人"),l(null==o?void 0:o[0],"被保人"),((null==(e=null==o?void 0:o[0])?void 0:e.beneficiaryList)||[]).forEach(((e,a)=>{l(e,`收益人${a}`)})),l(null==o?void 0:o[0].guardian,"监护人"),l(null==o?void 0:o[0].guardian,"监护人"),((null==(a=J.value)?void 0:a.tenantOrderPayInfoList)||[]).forEach((e=>{l(null==o?void 0:o[0].guardian,"银行卡")})),n})();(null==t?void 0:t.length)?y.confirm({message:null==t?void 0:t[0]}).then((()=>{D(a,((e,a)=>{a===C.JUMP_PAGE&&O(e.nextPageCode,B.query)}),B)})):D(a,((e,a)=>{a===C.JUMP_PAGE&&O(e.nextPageCode,B.query)}),B)}))},Ee=e=>{const a=J.value.tenantOrderPayInfoList[0];J.value.tenantOrderPayInfoList.splice(0,1,{...a,...e})},De=e=>{Object.assign(ae.userData,e)},Ve=()=>{Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:F.INFO_COLLECTION,pageCode:T.INFO_COLLECTION}});const e=le.value.dealMixData(),a=U(e,ge.value,J.value);P(a)},ke=l({}),Te=l();return i((()=>{(async()=>{let e={};W&&await _({orderNo:W,tenantId:G}).then((({code:a,data:t})=>{var o;if("10000"===a){if(ge.value=t.orderAmount,(null==(o=t.insuredList)?void 0:o.length)>0){const{planCode:e}=t.insuredList[0];ae.defaultPlanCode=e}Object.assign(J.value,t,{tenantOrderPayInfoList:t.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:$}),ae.defaultValue=J.value,e=A(t.insuredList[0].productList),Ce.value=!0}})),await N(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e;Te.value=t;const o={};a.forEach((e=>{o[e.productCode]=e})),ke.value=o;const{payInfo:n,other:l}=L(Te.value);ae.payInfo={...ae.payInfo,...n},ae.policyInfo={...ae.policyInfo,...l}}}))})()})),(e,a)=>{var t,o,n,l,i,I;const y=g,O=b;return s(),r("div",R,[u(y),d(Ce)||d(Z)?(s(),c(q,{key:0,ref_key:"personalInfoRef",ref:le,"product-info":{productCode:d($),productName:d(se).productName,insurerCode:d(Y),tenantId:d(G),planList:[]},"tenant-product-detail":d(ie),"hide-benefit":"","product-collection":d(ke),"default-data":d(J),"product-factor":d(Te),onTrialStart:Pe,onTrialEnd:_e,"onUpdate:userData":De,onUpdateBank:Ee},{middleInfo:f((()=>[d(ae).payInfo.schema.length?(s(),c(d(w),{key:0,ref_key:"payInfoRef",ref:ne,modelValue:d(J).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>d(J).tenantOrderPayInfoList=e),schema:d(ae).payInfo.schema,"is-view":d(ae).isView,"user-data":d(ae).userData},null,8,["modelValue","schema","is-view","user-data"])):p("",!0),d(ae).policyInfo.schema.length?(s(),c(d(x),{key:1,modelValue:d(J),"onUpdate:modelValue":a[1]||(a[1]=e=>m(J)?J.value=e:null),schema:d(ae).policyInfo.schema,"is-view":d(ae).isView},null,8,["modelValue","schema","is-view"])):p("",!0)])),_:1},8,["product-info","tenant-product-detail","product-collection","default-data","product-factor"])):p("",!0),u(O,null,{default:f((()=>{var e;return[(null==(e=d(ve))?void 0:e.length)?(s(),c(d(S),{key:0,modelValue:d(ye),"onUpdate:modelValue":a[2]||(a[2]=e=>m(ye)?ye.value=e:null),"has-bg-color":!1,"attachment-list":d(ve),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{pe.value=e,fe.value=!0})(e))},null,8,["modelValue","attachment-list"])):p("",!0)]})),_:1}),d(fe)?(s(),c(d(M),{key:1,show:d(fe),"onUpdate:show":a[4]||(a[4]=e=>m(fe)?fe.value=e:null),"content-list":d(me)?d(ve):d(Ie),"is-only-view":d(me),"active-index":d(pe),text:d(me)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":d(me)?0:d(he),onSubmit:Oe,onOnCloseFilePreviewByMask:je},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):p("",!0),u(E,{"is-share":d(oe).isShare&&!d(Q),premium:null==(t=d(ge))?void 0:t.initialPremium,"share-info":d(oe),"loading-text":d(Le),"payment-frequency":(null==(I=null==(i=null==(l=null==(n=null==(o=d(xe))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:l[0].riskList)?void 0:i[0])?void 0:I.paymentFrequency)+"","tenant-product-detail":d(ie),"handle-share":e=>(e=>{le.value.validateHolder(["mobile"]).then((()=>{Object.assign(J.value,{extInfo:{...J.value.extInfo,buttonCode:F.INFO_COLLECTION,pageCode:T.INFO_COLLECTION}});const a=le.value.getUserData(),t=U({...xe.value,holder:null==a?void 0:a.holder},ge.value||{},J.value);D(t,((a,t)=>{t===C.JUMP_PAGE&&(null==e||e())}),B)})).catch((()=>{j("请录入投保人手机号后进行分享")}))})(e),disabled:!d(ge),onHandleClick:Ne},{right:f((()=>[v("span",{onClick:Ve},"暂存")])),default:f((()=>[h("下一步 ")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{S as default};
