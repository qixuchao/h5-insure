import{d as e,a5 as t,r as a,x as n,Q as l,c as s,y as o,f as i,i as r,z as d,e as c,g as u,k as p,a9 as f,W as v,X as m,cg as h,a as y,u as b,K as A,a0 as w,ch as I,C as _,$ as g,a4 as x,w as O,h as k,R as D,U as C,Y as L,T as F,P as V,v as T}from"./index-14b87a0a.js";import{p as P,g as N}from"./product-92bb273c.js";import{i as j,t as R}from"./trial-98bfde99.js";import{a as E,s as Y,c as H}from"./phoneVerify-a8396891.js";import{u as B}from"./useAddressList-d5250766.js";import{n as M}from"./nextStep-b71523da.js";import{c as S}from"./trial-f06d526c.js";import{v as J,f as z}from"./utils-b0532950.js";import{_ as W}from"./index-990e81c9.js";import{P as G}from"./index-6daa4e10.js";import{_ as Z}from"./index-7a43eedb.js";import{P as X}from"./index-c834a364.js";import"./pdfh5-008ca364.js";import"./core-087123ab.js";import"./constant-c3f28a3b.js";import"./infoCollection-8c829899.js";import"./validator-5a13dc82.js";import"./useDicData-9340a73d.js";const Q={class:"free-card"},U={class:"container"},$={class:"title"},K=e({name:"freeHolderForm"}),q=e({...K,props:{colors:{default:()=>["#CDDFFE","#F1F7FE"]},detail:{default:()=>({})},isFirst:{type:Boolean,default:!0},insureDetail:{default:()=>({})},previewMode:{type:Boolean,default:!1}},setup(e,{expose:v}){const m=e;t((e=>({"46e4a2f6":m.colors[0],"46e4a315":m.colors[1]})));const h=a(),y=n({factorObj:{1:[{attributeValues:null,code:"mobile",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"手机号"},{attributeValues:null,code:"verificationCode",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"验证码"}],2:[],3:[]},isFirst:!0}),b=async({mobile:e,type:t},a)=>{var n;if(h.value){if(m.previewMode)return void(null==a||a());null==(n=h.value)||n.validateForm(`${t}_mobile`).then((async()=>{const t=m.isFirst?E:Y,n=await t(e),{code:l,data:s}=n;"10000"===l&&(null==a||a())}))}};return l((()=>m.isFirst),(()=>{var e;m.isFirst||(y.factorObj=null==(e=m.insureDetail)?void 0:e.productFactor)})),v({validateForm:()=>new Promise(((e,t)=>{h.value.validateForm().then((t=>{console.log(t),e(!0)})).catch((()=>{console.log("失败"),t()}))}))}),(t,a)=>{const n=f;return s(),o("div",Q,[i("div",U,[i("div",$,[r(n,{name:"free-arrow"}),i("span",null,d(e.isFirst?"凭手机号 免费领取":"最后一步 填写信息"),1),r(n,{name:"free-arrow"})]),(s(),c(Z,{ref_key:"formRef",ref:h,key:e.isFirst?1:2,"send-sms-code":b,"need-desensitize":"","form-info":e.detail,"factor-object":u(y).factorObj},null,8,["form-info","factor-object"])),p(t.$slots,"default")])])}}});const ee={key:0},te=[i("div",{class:"__skeleton_free_content__"},[i("div",{class:"van-config-provider router-view sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px","--6a485862-state_colors_1_":"#ddd"}},[i("div",{class:"page-free-product-detail"},[i("div",{class:"van-image banner",style:{width:"375px",height:"185px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[i("img",{class:"van-image__img","data-src":"https://za-obs-prod.obs.cn-north-4.myhuaweicloud.com:443/common/20221213/b38ae9c8c023488bb4fb4bdc2c67a211/wecom-temp-b44cd90cb804d1826e7824adc3b386e9(1).png?AccessKeyId=LLSTLZA8R9JY8AJRF7ZF&Policy=eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0yM1QwNDowNTo1OS41NzhaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJlcSIsIiRidWNrZXQiLCJ6YS1vYnMtcHJvZCJdXX0=&Signature=gAgGPVirtYpSJtdYcnN1W3zpIbQ%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),i("div",{class:"free-card",style:{"--0c47bddc-props_colors_0_":"#ddd","--0c47bddc-props_colors_1_":"#ddd"}},[i("div",{class:"container"},[i("div",{class:"title"},[i("svg",{class:"svg-icon icon-free-arrow"},[i("use",{"xlink:href":"#icon-free-arrow"})]),i("span",null,[i("span",{class:"sk-text",style:{"--fp":"0.00%","--sp":"100.00%","--lh":"16.0001px"}},"最后一步 填写信息")]),i("svg",{class:"svg-icon icon-free-arrow"},[i("use",{"xlink:href":"#icon-free-arrow"})])]),i("div",{class:"page-info-wrapper"},[i("div",{class:"com-form-wrapper","show-error":"","show-error-message":"false"},[i("form",{class:"van-form"},[i("div",{class:"com-card"},[i("div",{class:"com-card-wrap"},[i("div",{class:"header"}),i("div",{class:"body",style:{height:"auto"}},[i("div",{class:"com-personal-wrapper"},[i("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[i("div",{class:"van-cell__title van-field__label van-field__label--left"},[i("label",{id:"van-field-1-label",for:"van-field-1-input"},[i("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"手机号")])]),i("div",{class:"van-cell__value van-field__value"},[i("div",{class:"van-field__body"},[i("input",{type:"text",id:"van-field-1-input",name:"holder_mobile",class:"van-field__control van-field__control--left sk-input",placeholder:"请输入手机号",autocomplete:"off","aria-labelledby":"van-field-1-label"}),i("div",{class:"van-field__right-icon"})])])]),i("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[i("div",{class:"van-cell__title van-field__label van-field__label--left"},[i("label",{id:"van-field-2-label",for:"van-field-2-input"},[i("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"验证码")])]),i("div",{class:"van-cell__value van-field__value"},[i("div",{class:"van-field__body"},[i("input",{type:"tel",inputmode:"numeric",id:"van-field-2-input",name:"holder_verificationCode",class:"van-field__control van-field__control--left",placeholder:"请输入验证码",autocomplete:"off","aria-labelledby":"van-field-2-label"}),i("div",{class:"van-field__right-icon"})])]),i("div",{class:"button-extra"},[i("button",{type:"button",class:"van-button van-button--primary van-button--small van-button--plain sms-code sk-button"},[i("div",{class:"van-button__content"},[i("span",{class:"van-button__text"},[i("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"验证码")])])])])])])])])])])])]),i("div",{class:"pro-shadow-button submit-btn"},[i("button",{type:"button",class:"van-button van-button--primary van-button--normal van-button--block van-button--round shadow-button shadow sk-button"},[i("div",{class:"van-button__content"},[i("span",{class:"van-button__text"},[i("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"激活保障")])])])]),i("div",{class:"com-attachment-list"},[i("span",null,[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}},"请阅读")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《免责条款说明》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《被保险人同意声明》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《投保须知》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《重要提示》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《条款费率》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《特别约定》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《保险经纪委托合同》 ")]),i("span",{class:"attachment-item"},[i("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《客户告知书》 ")])])])]),i("div",{class:"product-desc"},[i("div",{class:"van-image",style:{width:"100%"}},[i("img",{class:"van-image__img","data-src":"https://za-obs-prod.obs.cn-north-4.myhuaweicloud.com:443/common/20221211/dff441c3bcf94b2d8f08e6ec3f4267ec/产品介绍.png?AccessKeyId=LLSTLZA8R9JY8AJRF7ZF&Policy=eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0yM1QwNDowNTo1OS41NzlaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJlcSIsIiRidWNrZXQiLCJ6YS1vYnMtcHJvZCJdXX0=&Signature=%2B%2FGYArnGmx9sMDCEvOBvjfpiZsU%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})])])])])],-1)],ae={key:1,"data-skeleton-root":"FREE",class:"page-free-product-detail"},ne={class:"product-desc"},le={key:1,class:"page-free-footer"},se=e({__name:"free",setup(e){t((e=>({"8d6cf23c":u(ve).colors[1]})));const d=v((()=>m((()=>import("./index-76332178.js")),["static/js/index-76332178.js","static/css/index-eabeb59f.css","static/js/index-14b87a0a.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js"]))),p=v((()=>m((()=>import("./index-23ae97d7.js")),["static/js/index-23ae97d7.js","static/css/index-3329e46f.css","static/js/index-14b87a0a.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js"]))),f=v((()=>m((()=>import("./index-516af4d3.js")),["static/js/index-516af4d3.js","static/css/index-fa4edf2a.css","static/js/index-14b87a0a.js","static/css/index-3be92ec8.css","static/js/pdfh5-008ca364.js","static/js/index-6daa4e10.js","static/css/index-827a8544.css","static/js/utils-b0532950.js","static/js/infoCollection-8c829899.js","static/js/trial-f06d526c.js"])));h();const E=y(),Y=b(),{productCode:Z="",agencyCode:Q="",tenantId:U="",saleUserId:$="",saleChannelId:K="",extraInfo:se,preview:oe}=Y.query;let ie={};try{ie=JSON.parse(decodeURIComponent(se))}catch(Oe){console.log(Oe)}const{openId:re,indirectCode:de="",agentCode:ce}=ie;console.log("extInfo",ie);const ue=a(),pe=a(),fe=a(),ve=n({colors:["#fff"],detail:{},order:{tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}},relationList:{},banner:"",productDesc:[],newAuth:!0,isValidateCode:!1,insureDetail:{},loading:!0,isSelfInsure:!0,showBtn:!1,activeIndex:0,showFilePreview:!1,isOnlyView:!0}),me=a(),he=a([]);re&&B({openId:re},(e=>{ve.relationList=e}));const ye=A((()=>!!oe)),be=()=>{var e,t,a;const n=ve.insureDetail.productRiskVoList||[];return 1===((null==(a=null==(t=null==(e=null==n?void 0:n[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:a.insuranceStartType)||1)?`${T(new Date).format("YYYY-MM-DD")} 00:00:00`:`${T(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`},Ae=()=>{var e,t;const a=ve.insureDetail.productRiskVoList||[],{insuranceEndType:n,riskInsureLimitVO:l}=(null==(t=null==(e=null==a?void 0:a[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:s}=l||{},[o,i]=((null==s?void 0:s[0])||"").split("_");return 1===n?`${T(new Date).add(i||0,o).format("YYYY-MM-DD")} 23:59:59`:n?`${T(new Date).add(i,o).format("YYYY-MM-DD")} 00:00:00`:""},we=async()=>{ve.loading=!0;const e=P({productCode:Z,withInsureInfo:!0,tenantId:U}),t=j({productCode:Z}),a=N({openId:re});await Promise.all([e,t,a]).then((([e,t,a])=>{var n,l,s,o,i;if("10000"===e.code){ve.detail=e.data,ve.banner=null==(n=ve.detail.tenantProductInsureVO)?void 0:n.banner[0];const{colorEnd:t,colorStart:a}=(null==(l=ve.detail.tenantProductInsureVO)?void 0:l.backgroundInsureVO)||{};ve.colors=[a,t],ve.productDesc=ve.detail.tenantProductInsureVO.spec||[],document.title=(null==(o=null==(s=ve.detail)?void 0:s.tenantProductInsureVO)?void 0:o.productName)||""}if("10000"===t.code&&(ve.insureDetail=t.data,ve.insureDetail.productFactor[1].forEach((e=>{"verificationCode"===e.code&&1===e.isDisplay&&(ve.isValidateCode=!0)})),ve.insureDetail.productFactor[2]=null==(i=ve.insureDetail.productFactor)?void 0:i[2].map((e=>{var t,a;return"relationToHolder"===e.code&&1===e.isDisplay&&(e.title="被保人",ve.order.tenantOrderInsuredList[0].relationToHolder=(null==(a=null==(t=e.attributeValueList)?void 0:t[0])?void 0:a.code)||""),e}))),"10000"===a.code&&(ve.newAuth=!a.data,ve.isSelfInsure=!!a.data,a.data)){const e=a.data;ve.order.tenantOrderHolder={certNo:null==e?void 0:e.certiNo,extInfo:{},mobile:null==e?void 0:e.mobile,name:null==e?void 0:e.name}}(()=>{var e;let t={};if(t=(null==(e=ve.detail.tenantProductInsureVO.planInsureVO)?void 0:e.attachmentVOList)||[],!t)return void(me.value=[]);const a={2:"richText",3:"link"};me.value=Object.keys(t).map((e=>(t[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),a=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===a?"pdf":"picture"}else e.attachmentType=a[e.attachmentType]})),{attachmentName:e,attachmentList:t[e]})))||[],he.value=me.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.mustReadFlag===L.YES))}))).filter((e=>e.attachmentList.length))})(),ve.loading=!1}))},Ie=async()=>{let e={loginType:"2",openId:re,thirdUserType:"XINAO_WECHAT",indirectCode:de};try{if(ve.newAuth?(e.loginName=ve.order.tenantOrderHolder.mobile,e.password=ve.order.tenantOrderHolder.verificationCode):e=z({order:ve.order,tenantId:U,extraInfo:ie,commencementTime:be(),expiryDate:Ae(),detail:ve.detail,insureDetail:ve.insureDetail,iseeBizNo:ue.value,agentCode:ce,agencyCode:Q,saleUserId:ce,templateId:null==ie?void 0:ie.templateId,saleChannelId:K,pageCode:"infoCollection",buttonCode:"EVENT_FREE_multiIssuePolicy"}),ve.newAuth)if(ye.value)ve.newAuth=!1;else{const{code:t,data:a}=await R(e);"10000"===t&&(ve.newAuth=!1)}else M(e,((e,t)=>{t===V.JUMP_PAGE&&e.orderNo&&E.push(`/baseInsurance/orderDetail?from=free&tenantId=${U}&orderNo=${e.orderNo}`)}))}catch(t){console.log("e")}},_e=async()=>await(async()=>{var e;if(ye.value)return!0;await fe.value.validateForm();const t=null==(e=ve.order.tenantOrderHolder)?void 0:e.verificationCode;if((ve.isValidateCode||ve.newAuth)&&(!t||!J(t)))return F({message:"请输入正确的验证码"}),!1;if(ve.newAuth||!ve.isValidateCode)return!0;const{code:a,data:n}=await H(ve.order.tenantOrderHolder.mobile,t);return!!n})()?(ve.newAuth||!he.value.length?Ie():(ve.isOnlyView=!1,ve.showFilePreview=!0),!1):null,ge=()=>{ve.showFilePreview=!1,ve.isOnlyView=!0},xe=()=>{ve.showFilePreview=!1,ve.isOnlyView=!0,Ie()};return w((()=>{we(),setTimeout((async()=>{ue.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),l((()=>ve.order.tenantOrderInsuredList[0]),(e=>{if(I(ve.relationList)||ve.newAuth)return null;const t=ve.relationList[e.relationToHolder]||[];if(1===t.length)if(S.SELF!==e.relationToHolder){const{certNo:e,name:a,mobile:n,certType:l}=ve.order.tenantOrderInsuredList[0];ve.order.tenantOrderInsuredList[0].certNo=e||t[0].cert[0].certNo,ve.order.tenantOrderInsuredList[0].name=a||t[0].cert[0].certName,ve.order.tenantOrderInsuredList[0].mobile=n||t[0].contact[0].contactNo,ve.order.tenantOrderInsuredList[0].certType=l||t[0].cert[0].certType||_.CERT}else if(ve.isSelfInsure){ve.isSelfInsure=!1;const{certNo:e,name:a,mobile:n,certType:l}=ve.order.tenantOrderHolder;ve.order.tenantOrderHolder.certNo=e||t[0].cert[0].certNo,ve.order.tenantOrderHolder.name=a||t[0].cert[0].certName,ve.order.tenantOrderHolder.mobile=n||t[0].contact[0].contactNo,ve.order.tenantOrderHolder[0].certType=l||t[0].cert[0].certType||_.CERT}return!1}),{immediate:!0,deep:!0}),g(pe,(([{isIntersecting:e}],t)=>{ve.showBtn=!e})),(e,t)=>{var a,n,l,v;const m=x;return s(),o(D,null,[u(ve).loading?(s(),o("div",ee,te)):(s(),o("div",ae,[r(W,{"data-skeleton-type":"img",url:u(ve).banner},null,8,["url"]),r(q,{ref_key:"formRef",ref:fe,"is-first":u(ve).newAuth,"insure-detail":u(ve).insureDetail,detail:u(ve).order,colors:u(ve).colors,"preview-mode":u(ye)},{default:O((()=>[r(G,{ref_key:"root",ref:pe,class:"submit-btn",disabled:!u(ve).newAuth&&u(ye),"is-gradient":!1,text:u(ve).newAuth?"立即领取":"激活保障",onClick:_e},null,8,["disabled","text"]),!u(ve).newAuth&&u(me)&&u(me).length>0?(s(),c(u(p),{key:0,"attachment-list":u(me),"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{ve.isOnlyView=!0,ve.activeIndex=e,ve.showFilePreview=!0})(e))},null,8,["attachment-list"])):k("",!0)])),_:1},8,["is-first","insure-detail","detail","colors","preview-mode"]),i("div",ne,[(s(!0),o(D,null,C(u(ve).productDesc,((e,t)=>(s(),c(m,{key:t,width:"100%","lazy-load":"",src:e,class:""},null,8,["src"])))),128))]),(null==(n=null==(a=u(ve).detail)?void 0:a.tenantProductInsureVO)?void 0:n.inscribedContent)?(s(),c(u(d),{key:0,"inscribed-content":null==(v=null==(l=u(ve).detail)?void 0:l.tenantProductInsureVO)?void 0:v.inscribedContent},null,8,["inscribed-content"])):k("",!0),u(ve).showBtn?(s(),o("footer",le,[r(G,{disabled:!u(ve).newAuth&&u(ye),"is-gradient":!1,text:u(ve).newAuth?"立即领取":"激活保障",onClick:_e},null,8,["disabled","text"])])):k("",!0)])),u(ve).showFilePreview&&0!==u(me).length?(s(),c(u(f),{key:2,show:u(ve).showFilePreview,"onUpdate:show":t[1]||(t[1]=e=>u(ve).showFilePreview=e),"content-list":u(ve).isOnlyView?u(me):u(he),"is-only-view":u(ve).isOnlyView,"active-index":u(ve).activeIndex,text:u(ve).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:xe,onOnCloseFilePreview:ge},null,8,["show","content-list","is-only-view","active-index","text"])):k("",!0),u(ve).loading?k("",!0):(s(),c(X,{key:3,"product-detail":u(ve).detail},null,8,["product-detail"]))],64)}}});export{se as default};
