import{d as e,X as a,Y as t,u as o,z as n,r as i,L as s,Z as l,o as r,b as d,c as u,e as c,w as p,f as m,g as f,k as v,at as h,au as I,i as j,j as y,h as O,a3 as C,n as _,T as b,P as g,p as x,a4 as P,a5 as L}from"./index-f5601786.js";import{t as w}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-b3a5b2d6.js";/* empty css              */import"./useDicData-6d2fdfcd.js";import{_ as T}from"./PayInfo-eaf8567e.js";import{g as V,i as N}from"./trial-f4199489.js";import{_ as k}from"./TrialButton-f4156a82.js";import{n as F}from"./nextStep-295ea803.js";import{u as S}from"./useAttachment-4e9c3545.js";import{a as E,q as U}from"./product-c3b0512f.js";import{g as q}from"./utils-a62c3fad.js";import{u as D}from"./useOrder-801bcc16.js";import{P as R,B as A}from"./constants-7afb7c3d.js";import{t as B}from"./utils-34214e42.js";import{T as H}from"./index-380084a3.js";import"./pdfh5-008ca364.js";import"./phoneVerify-d5d4b6e8.js";import"./_initCloneObject-da8458a4.js";import"./isObjectLike-a9798079.js";import"./index-9bc76728.js";import"./_getTag-ef97f191.js";import"./debounce-eed12388.js";import"./index-8b499c9c.js";import"./bankCard-f680cdbf.js";import"./index-8da1f0fa.js";import"./core-bdffd69f.js";import"./constant-8927d485.js";import"./infoCollection-6f4881ed.js";import"./trial-3608f0b7.js";import"./createProposal-8476257e.js";import"./index-123c31cc.js";import"./cloneDeep-0762f693.js";import"./index-9c3f1f46.js";import"./index-1ac2db46.js";import"./empty-c926d8ec.js";import"./box-title-7338903c.js";import"./index-89da8127.js";import"./echarts-ac920fed.js";import"./Table-be5fb674.js";const M={class:"long-info-collection"},J=e({__name:"infoCollection",setup(e){const J=a((()=>t((()=>import("./index-200fba40.js")),["static/js/index-200fba40.js","static/css/index-fa4edf2a.css","static/js/index-f5601786.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js","static/js/index-8da1f0fa.js","static/css/index-827a8544.css","static/js/utils-a62c3fad.js","static/js/infoCollection-6f4881ed.js","static/js/trial-3608f0b7.js"]))),W=a((()=>t((()=>import("./index-51e952e2.js")),["static/js/index-51e952e2.js","static/css/index-3329e46f.css","static/js/index-f5601786.js","static/css/index-491aafee.css","static/js/pdfh5-008ca364.js"]))),$=o(),G=D(),{productCode:X="",tenantId:Y,agentCode:z="",agencyCode:Q,saleChannelId:Z,isShare:K,orderNo:ee,extraInfo:ae,insurerCode:te,preview:oe}=$.query;let ne={};try{ne=JSON.parse(decodeURIComponent(ae))}catch(Fe){}const ie=n({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},defaultValue:null,isAutoChange:!1}),se=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,le=i({imgUrl:"",desc:"",title:"",link:se}),re=i();i();const de=i(),ue=i({}),ce=i({}),pe=i([]),me=i(),fe=i({}),ve=i(!1),he=i(!1),Ie=i(0),je=i(!0),{fileList:ye,mustReadFileCount:Oe,popupFileList:Ce}=S(fe,me),_e=i(!1),be=i(!1),ge=()=>{he.value=!1,je.value=!0,pe.value.length<1||(ve.value=!0)},xe=()=>{ve.value=!1,he.value=!1,je.value=!0};i({}),i(!1),i([{}]);const Pe=i(""),Le=i(0),we=i(!1);i(),i(),i(),s((()=>{var e,a;const{insureProductRiskVOList:t}=(null==(a=null==(e=ce.value)?void 0:e.productPlanInsureVOList)?void 0:a[0])||{};return(t||[]).find((e=>e.mainRiskFlag===l.YES))}));const Te=i(0);i({});const Ve=()=>{Pe.value="试算中...",Le.value=0,we.value=!0},Ne=e=>{Pe.value="",Te.value=e.premium,Le.value=e,we.value=!1};n({tenantOrderPayInfoList:[]});const ke=async()=>{E({productCode:X,tenantId:Y}).then((({data:e,code:a})=>{if("10000"===a){ue.value=e;const{wxShareConfig:a,showWXShare:t,title:o,desc:n,image:i}=(null==e?void 0:e.PRODUCT_LIST)||{};t?Object.assign(le.value,{...a,imgUrl:a.image,isShare:t}):Object.assign(le.value,{title:o,desc:n,imgUrl:i,isShare:t}),P(e.BASIC_INFO.themeType)}})),ee&&V({orderNo:ee,tenantId:Y}).then((({code:e,data:a})=>{"10000"===e&&(Le.value=a.orderAmount,Object.assign(G.value,a,{tenantOrderPayInfoList:a.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:X}),ie.defaultValue=G.value,be.value=!0)})),U({productCode:X}).then((({code:e,data:a})=>{var t,o,n,i;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:s}=a;me.value=e||[];const{basicInfo:{questionnaireType:l},questions:r,questionnaireName:d}=(null==(t=null==s?void 0:s[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};l&&(pe.value=2===l?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(o=null==r?void 0:r[0])?void 0:o.content,attachmentType:q(String(null==(n=null==r?void 0:r[0])?void 0:n.textType),null==(i=null==r?void 0:r[0])?void 0:i.content)}])}})),await N({productCode:X,isTenant:!oe}).then((({data:e,code:a})=>{var t,o;if("10000"===a){ce.value=e,fe.value=(null==(t=e.productPlanInsureVOList)?void 0:t[0])||{};const{payInfo:a}=w(null==(o=fe.value)?void 0:o.productFactor);ie.payInfo={...ie.payInfo,...a}}}))};return r((()=>{ke()})),(e,a)=>{const t=L,o=d("ProPageWrap");return u(),c(o,null,{default:p((()=>[m("div",M,[f(be)||f(oe)?(u(),c(H,{key:0,ref_key:"personalInfoRef",ref:de,"data-source":f(fe),"product-info":{productCode:f(X),productName:f(ce).productName,insurerCode:f(te),tenantId:f(Y)},"tenant-product-detail":f(ue),"hide-benefit":"","default-data":[f(ie).defaultValue],onTrialStart:Ve,onTrialEnd:Ne},{trialBtn:p((a=>[v(e.$slots,"trialBtn",h(I(a)),(()=>{var e,t,o,n,i,s;return[j(k,{"is-share":f(le).isShare&&!f(K),premium:null==(e=a.riskPremium)?void 0:e.initialPremium,"share-info":f(le),"loading-text":f(Pe),"payment-frequency":(null==(s=null==(i=null==(n=null==(o=null==(t=a.trialData)?void 0:t.insuredList)?void 0:o[0].productList)?void 0:n[0].riskList)?void 0:i[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":f(ue),"handle-share":e=>((e,a)=>{de.value.validateHolder(["mobile"]).then((()=>{Object.assign(G.value,{extInfo:{...G.value.extInfo,buttonCode:A.INFO_COLLECTION,pageCode:R.INFO_COLLECTION}});const t=de.value.getUserData(),o=B({...a,holder:null==t?void 0:t.holder},Le.value||{},G.value);F(o,((a,t)=>{t===g.JUMP_PAGE&&(null==e||e())}))})).catch((()=>{b("请录入投保人手机号后进行分享")}))})(e,a.trialData),onHandleClick:e=>(async e=>{var a,t;if(oe)return void _(R.INFO_COLLECTION,$.query);const o=[];de.value&&o.push(null==(a=de.value)?void 0:a.validate(!1)),re.value&&o.push(null==(t=re.value)?void 0:t.validate(!1)),Promise.all(o).then((()=>{if(!_e.value)return void b("请勾选投保人阅读并接受");Object.assign(G.value,{extInfo:{...G.value.extInfo,buttonCode:A.INFO_COLLECTION,pageCode:R.INFO_COLLECTION}});const a=B(e,Le.value,G.value);F(a,((e,a)=>{a===g.JUMP_PAGE&&(console.log("12313"),x(e.nextPageCode,$.query))}))}))})(a.trialData)},{default:p((()=>[y("下一步")])),_:2},1032,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["data-source","product-info","tenant-product-detail","default-data"])):O("",!0),f(ie).payInfo.schema.length?(u(),c(f(T),{key:1,ref_key:"payInfoRef",ref:re,modelValue:f(G).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>f(G).tenantOrderPayInfoList=e),schema:f(ie).payInfo.schema,"is-view":f(ie).isView},null,8,["modelValue","schema","is-view"])):O("",!0),j(t,null,{default:p((()=>{var e;return[(null==(e=f(ye))?void 0:e.length)?(u(),c(f(W),{key:0,modelValue:f(_e),"onUpdate:modelValue":a[1]||(a[1]=e=>C(_e)?_e.value=e:null),"attachment-list":f(ye),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[2]||(a[2]=e=>(e=>{Ie.value=e,he.value=!0})(e))},null,8,["modelValue","attachment-list"])):O("",!0)]})),_:1}),f(he)?(u(),c(f(J),{key:2,show:f(he),"onUpdate:show":a[3]||(a[3]=e=>C(he)?he.value=e:null),"content-list":f(je)?f(ye):f(Ce),"is-only-view":f(je),"active-index":f(Ie),text:f(je)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":f(je)?0:f(Oe),onSubmit:ge,onOnCloseFilePreviewByMask:xe},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):O("",!0)])])),_:3})}}});export{J as default};
