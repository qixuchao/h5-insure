import{d as e,aV as t,r as a,z as n,ac as l,b as i,c as s,h as o,j as r,f as d,t as c,e as u,g as p,aD as f,aW as v,aX as m,u as h,a as y,x as b,y as A,aY as w,a4 as I,aZ as _,w as g,k as x,F as O,i as k,Z as D,T as C,a_ as L,a0 as F}from"./index-e3df8bbc.js";import{p as V,g as T}from"./product-dd5b4959.js";import{i as j,t as P}from"./trial-19927f5f.js";import{a as N,s as E,c as R}from"./phoneVerify-32a7f828.js";import{u as Y,P as B}from"./index-c814ccdf.js";import{n as H}from"./nextStep-29a91f9a.js";import{j as S}from"./trial-8d531ce5.js";import{v as M,f as J}from"./utils-f00d4627.js";import{u as z}from"./theme-65292714.js";import{B as W}from"./index-2b29d912.js";import Z from"./index-2cf91dcb.js";import G from"./index-fe738a0a.js";import"./pdfh5-008ca364.js";import"./core-8a82a09f.js";import"./index-13a98c54.js";import"./useStorage-7696a628.js";import"./infoCollection-4bad8932.js";import"./relativeTime-fde2a46e.js";import"./validator-5a13dc82.js";import"./useDicData-0dc108e0.js";const X={class:"free-card"},Q={class:"container"},U={class:"title"},$=e({__name:"index",props:{colors:{type:Array,default:()=>["#CDDFFE","#F1F7FE"]},detail:{type:Object,default:()=>{}},isFirst:{type:Boolean,default:!0},insureDetail:{type:Object,default:()=>{}},previewMode:{type:Boolean,default:!1}},setup(e,{expose:v}){const m=e;t((e=>({"750db18c":m.colors[0],"750db14e":m.colors[1]})));const h=a(),y=n({factorObj:{1:[{attributeValues:null,code:"mobile",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"手机号"},{attributeValues:null,code:"verificationCode",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"验证码"}],2:[],3:[]},isFirst:!0}),b=async({mobile:e,type:t},a)=>{var n;if(h.value){if(m.previewMode)return void(null==a||a());null==(n=h.value)||n.validateForm(`${t}_mobile`).then((async()=>{const t=m.isFirst?N:E,n=await t(e),{code:l,data:i}=n;"10000"===l&&(null==a||a())}))}};return l((()=>m.isFirst),(()=>{var e;m.isFirst||(y.factorObj=null==(e=m.insureDetail)?void 0:e.productFactor)})),v({validateForm:()=>new Promise(((e,t)=>{h.value.validateForm().then((t=>{e(!0)})).catch((()=>{t()}))}))}),(t,a)=>{const n=i("ProSvg");return s(),o("div",X,[r("div",Q,[r("div",U,[d(n,{name:"free-arrow"}),r("span",null,c(e.isFirst?"凭手机号 免费领取":"最后一步 填写信息"),1),d(n,{name:"free-arrow"})]),(s(),u(G,{ref_key:"formRef",ref:h,key:e.isFirst?1:2,"send-sms-code":b,"need-desensitize":"","form-info":e.detail,"factor-object":p(y).factorObj},null,8,["form-info","factor-object"])),f(t.$slots,"default")])])}}});const K={key:0},q=[r("div",{class:"__skeleton_free_content__"},[r("div",{class:"van-config-provider router-view sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px","--6a485862-state_colors_1_":"#ddd"}},[r("div",{class:"page-free-product-detail"},[r("div",{class:"van-image banner",style:{width:"375px",height:"185px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[r("img",{class:"van-image__img","data-src":"https://za-obs-prod.obs.cn-north-4.myhuaweicloud.com:443/common/20221213/b38ae9c8c023488bb4fb4bdc2c67a211/wecom-temp-b44cd90cb804d1826e7824adc3b386e9(1).png?AccessKeyId=LLSTLZA8R9JY8AJRF7ZF&Policy=eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0yM1QwNDowNTo1OS41NzhaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJlcSIsIiRidWNrZXQiLCJ6YS1vYnMtcHJvZCJdXX0=&Signature=gAgGPVirtYpSJtdYcnN1W3zpIbQ%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),r("div",{class:"free-card",style:{"--0c47bddc-props_colors_0_":"#ddd","--0c47bddc-props_colors_1_":"#ddd"}},[r("div",{class:"container"},[r("div",{class:"title"},[r("svg",{class:"svg-icon icon-free-arrow"},[r("use",{"xlink:href":"#icon-free-arrow"})]),r("span",null,[r("span",{class:"sk-text",style:{"--fp":"0.00%","--sp":"100.00%","--lh":"16.0001px"}},"最后一步 填写信息")]),r("svg",{class:"svg-icon icon-free-arrow"},[r("use",{"xlink:href":"#icon-free-arrow"})])]),r("div",{class:"page-info-wrapper"},[r("div",{class:"com-form-wrapper","show-error":"","show-error-message":"false"},[r("form",{class:"van-form"},[r("div",{class:"com-card"},[r("div",{class:"com-card-wrap"},[r("div",{class:"header"}),r("div",{class:"body",style:{height:"auto"}},[r("div",{class:"com-personal-wrapper"},[r("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[r("div",{class:"van-cell__title van-field__label van-field__label--left"},[r("label",{id:"van-field-1-label",for:"van-field-1-input"},[r("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"手机号")])]),r("div",{class:"van-cell__value van-field__value"},[r("div",{class:"van-field__body"},[r("input",{type:"text",id:"van-field-1-input",name:"holder_mobile",class:"van-field__control van-field__control--left sk-input",placeholder:"请输入手机号",autocomplete:"off","aria-labelledby":"van-field-1-label"}),r("div",{class:"van-field__right-icon"})])])]),r("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[r("div",{class:"van-cell__title van-field__label van-field__label--left"},[r("label",{id:"van-field-2-label",for:"van-field-2-input"},[r("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"验证码")])]),r("div",{class:"van-cell__value van-field__value"},[r("div",{class:"van-field__body"},[r("input",{type:"tel",inputmode:"numeric",id:"van-field-2-input",name:"holder_verificationCode",class:"van-field__control van-field__control--left",placeholder:"请输入验证码",autocomplete:"off","aria-labelledby":"van-field-2-label"}),r("div",{class:"van-field__right-icon"})])]),r("div",{class:"button-extra"},[r("button",{type:"button",class:"van-button van-button--primary van-button--small van-button--plain sms-code sk-button"},[r("div",{class:"van-button__content"},[r("span",{class:"van-button__text"},[r("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"验证码")])])])])])])])])])])])]),r("div",{class:"pro-shadow-button submit-btn"},[r("button",{type:"button",class:"van-button van-button--primary van-button--normal van-button--block van-button--round shadow-button shadow sk-button"},[r("div",{class:"van-button__content"},[r("span",{class:"van-button__text"},[r("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"激活保障")])])])]),r("div",{class:"com-attachment-list"},[r("span",null,[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}},"请阅读")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《免责条款说明》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《被保险人同意声明》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《投保须知》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《重要提示》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《条款费率》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《特别约定》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《保险经纪委托合同》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《客户告知书》 ")])])])]),r("div",{class:"product-desc"},[r("div",{class:"van-image",style:{width:"100%"}},[r("img",{class:"van-image__img","data-src":"https://za-obs-prod.obs.cn-north-4.myhuaweicloud.com:443/common/20221211/dff441c3bcf94b2d8f08e6ec3f4267ec/产品介绍.png?AccessKeyId=LLSTLZA8R9JY8AJRF7ZF&Policy=eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0yM1QwNDowNTo1OS41NzlaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJlcSIsIiRidWNrZXQiLCJ6YS1vYnMtcHJvZCJdXX0=&Signature=%2B%2FGYArnGmx9sMDCEvOBvjfpiZsU%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})])])])])],-1)],ee={class:"page-free-product-detail"},te={class:"product-desc"},ae={key:1,class:"page-free-footer"},ne=e({__name:"free",setup(e){t((e=>({"009decb0":p(me).colors[1]})));const c=v((()=>m((()=>import("./index-22c41b4f.js")),["static/js/index-22c41b4f.js","static/css/index-b1275e60.css","static/js/index-e3df8bbc.js","static/css/index-af7e8c1f.css","static/js/pdfh5-008ca364.js"]))),f=v((()=>m((()=>import("./index-f2628fa5.js")),["static/js/index-f2628fa5.js","static/css/index-b9ba3011.css","static/js/index-e3df8bbc.js","static/css/index-af7e8c1f.css","static/js/pdfh5-008ca364.js"]))),N=v((()=>m((()=>import("./index-24daf9d7.js")),["static/js/index-24daf9d7.js","static/css/index-ea588f10.css","static/js/index-e3df8bbc.js","static/css/index-af7e8c1f.css","static/js/pdfh5-008ca364.js","static/js/theme-65292714.js","static/js/index-2cf91dcb.js","static/css/index-2dbcd337.css","static/js/utils-f00d4627.js","static/js/infoCollection-4bad8932.js","static/js/useStorage-7696a628.js","static/js/trial-8d531ce5.js"]))),E=z(),G=h(),X=y(),{productCode:Q="",agencyCode:U="",tenantId:ne="",saleUserId:le="",saleChannelId:ie="",extraInfo:se,preview:oe}=X.query;let re={};try{re=JSON.parse(decodeURIComponent(se))}catch(ke){}const{openId:de,indirectCode:ce="",agentCode:ue}=re,pe=a(),fe=a(),ve=a(),me=n({colors:["#fff"],detail:{},order:{tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}},relationList:{},banner:"",productDesc:[],newAuth:!0,isValidateCode:!1,insureDetail:{},loading:!0,isSelfInsure:!0,showBtn:!1,activeIndex:0,showFilePreview:!1,isOnlyView:!0}),he=a(),ye=a([]);de&&Y({openId:de},(e=>{me.relationList=e}));const be=b((()=>!!oe)),Ae=()=>{var e,t,a;const n=me.insureDetail.productRiskVoList||[];return 1===((null==(a=null==(t=null==(e=null==n?void 0:n[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:a.insuranceStartType)||1)?`${F(new Date).format("YYYY-MM-DD")} 00:00:00`:`${F(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`},we=()=>{var e,t;const a=me.insureDetail.productRiskVoList||[],{insuranceEndType:n,riskInsureLimitVO:l}=(null==(t=null==(e=null==a?void 0:a[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:i}=l||{},[s,o]=((null==i?void 0:i[0])||"").split("_");return 1===n?`${F(new Date).add(o||0,s).format("YYYY-MM-DD")} 23:59:59`:n?`${F(new Date).add(o,s).format("YYYY-MM-DD")} 00:00:00`:""},Ie=async()=>{me.loading=!0;const e=V({productCode:Q,withInsureInfo:!0,tenantId:ne}),t=j({productCode:Q}),a=T({openId:de});await Promise.all([e,t,a]).then((([e,t,a])=>{var n,l,i,s,o;if("10000"===e.code){me.detail=e.data,me.banner=null==(n=me.detail.tenantProductInsureVO)?void 0:n.banner[0];const{colorEnd:t,colorStart:a}=(null==(l=me.detail.tenantProductInsureVO)?void 0:l.backgroundInsureVO)||{};me.colors=[a,t],me.productDesc=me.detail.tenantProductInsureVO.spec||[],document.title=(null==(s=null==(i=me.detail)?void 0:i.tenantProductInsureVO)?void 0:s.productName)||""}if("10000"===t.code&&(me.insureDetail=t.data,me.insureDetail.productFactor[1].forEach((e=>{"verificationCode"===e.code&&1===e.isDisplay&&(me.isValidateCode=!0)})),me.insureDetail.productFactor[2]=null==(o=me.insureDetail.productFactor)?void 0:o[2].map((e=>{var t,a;return"relationToHolder"===e.code&&1===e.isDisplay&&(e.title="被保人",me.order.tenantOrderInsuredList[0].relationToHolder=(null==(a=null==(t=e.attributeValueList)?void 0:t[0])?void 0:a.code)||""),e}))),"10000"===a.code&&(me.newAuth=!a.data,me.isSelfInsure=!!a.data,a.data)){const e=a.data;me.order.tenantOrderHolder={certNo:null==e?void 0:e.certiNo,extInfo:{},mobile:null==e?void 0:e.mobile,name:null==e?void 0:e.name}}(()=>{var e;let t={};if(t=(null==(e=me.detail.tenantProductInsureVO.planInsureVO)?void 0:e.attachmentVOList)||[],!t)return void(he.value=[]);const a={2:"richText",3:"link"};he.value=Object.keys(t).map((e=>(t[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),a=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===a?"pdf":"picture"}else e.attachmentType=a[e.attachmentType]})),{attachmentName:e,attachmentList:t[e]})))||[],ye.value=he.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.mustReadFlag===D.YES))}))).filter((e=>e.attachmentList.length))})(),me.loading=!1}))},_e=async()=>{let e={loginType:"2",openId:de,thirdUserType:"XINAO_WECHAT",indirectCode:ce};try{if(me.newAuth?(e.loginName=me.order.tenantOrderHolder.mobile,e.password=me.order.tenantOrderHolder.verificationCode):e=J({order:me.order,tenantId:ne,extraInfo:re,commencementTime:Ae(),expiryDate:we(),detail:me.detail,insureDetail:me.insureDetail,iseeBizNo:pe.value,agentCode:ue,agencyCode:U,saleUserId:ue,templateId:null==re?void 0:re.templateId,saleChannelId:ie,pageCode:"infoCollection",buttonCode:"EVENT_FREE_multiIssuePolicy"}),me.newAuth)if(be.value)me.newAuth=!1;else{const{code:t,data:a}=await P(e);"10000"===t&&(me.newAuth=!1)}else H(e,((e,t)=>{t===L.JUMP_PAGE&&e.orderNo&&G.push(`/baseInsurance/orderDetail?from=free&tenantId=${ne}&orderNo=${e.orderNo}`)}))}catch(t){}},ge=async()=>await(async()=>{var e;if(be.value)return!0;await ve.value.validateForm();const t=null==(e=me.order.tenantOrderHolder)?void 0:e.verificationCode;if((me.isValidateCode||me.newAuth)&&(!t||!M(t)))return C({message:"请输入正确的验证码"}),!1;if(me.newAuth||!me.isValidateCode)return!0;const{code:a,data:n}=await R(me.order.tenantOrderHolder.mobile,t);return!!n})()?(me.newAuth||!ye.value.length?_e():(me.isOnlyView=!1,me.showFilePreview=!0),!1):null,xe=()=>{me.showFilePreview=!1,me.isOnlyView=!0},Oe=()=>{me.showFilePreview=!1,me.isOnlyView=!0,_e()};return A((()=>{Ie(),setTimeout((async()=>{pe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),l((()=>me.order.tenantOrderInsuredList[0]),(e=>{if(w(me.relationList)||me.newAuth)return null;const t=me.relationList[e.relationToHolder]||[];if(1===t.length)if(S.SELF!==e.relationToHolder){const{certNo:e,name:a,mobile:n,certType:l}=me.order.tenantOrderInsuredList[0];me.order.tenantOrderInsuredList[0].certNo=e||t[0].cert[0].certNo,me.order.tenantOrderInsuredList[0].name=a||t[0].cert[0].certName,me.order.tenantOrderInsuredList[0].mobile=n||t[0].contact[0].contactNo,me.order.tenantOrderInsuredList[0].certType=l||t[0].cert[0].certType||I.CERT}else if(me.isSelfInsure){me.isSelfInsure=!1;const{certNo:e,name:a,mobile:n,certType:l}=me.order.tenantOrderHolder;me.order.tenantOrderHolder.certNo=e||t[0].cert[0].certNo,me.order.tenantOrderHolder.name=a||t[0].cert[0].certName,me.order.tenantOrderHolder.mobile=n||t[0].contact[0].contactNo,me.order.tenantOrderHolder[0].certType=l||t[0].cert[0].certType||I.CERT}return!1}),{immediate:!0,deep:!0}),_(fe,(([{isIntersecting:e}],t)=>{me.showBtn=!e})),(e,t)=>{const a=i("van-image"),n=i("van-config-provider");return p(me).loading?(s(),o("div",K,q)):(s(),u(n,{key:1,"data-skeleton-root":"FREE","theme-vars":p(E)},{default:g((()=>{var e,n,l,i;return[r("div",ee,[d(W,{"data-skeleton-type":"img",url:p(me).banner},null,8,["url"]),d($,{ref_key:"formRef",ref:ve,"is-first":p(me).newAuth,"insure-detail":p(me).insureDetail,detail:p(me).order,colors:p(me).colors,"preview-mode":p(be)},{default:g((()=>[d(Z,{ref_key:"root",ref:fe,class:"submit-btn",disabled:!p(me).newAuth&&p(be),"is-gradient":!1,text:p(me).newAuth?"立即领取":"激活保障",onClick:ge},null,8,["disabled","text"]),!p(me).newAuth&&p(he)&&p(he).length>0?(s(),u(p(f),{key:0,"attachement-list":p(he),"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{me.isOnlyView=!0,me.activeIndex=e,me.showFilePreview=!0})(e))},null,8,["attachement-list"])):x("",!0)])),_:1},8,["is-first","insure-detail","detail","colors","preview-mode"]),r("div",te,[(s(!0),o(O,null,k(p(me).productDesc,((e,t)=>(s(),u(a,{key:t,width:"100%","lazy-load":"",src:e,class:""},null,8,["src"])))),128))]),(null==(n=null==(e=p(me).detail)?void 0:e.tenantProductInsureVO)?void 0:n.inscribedContent)?(s(),u(p(c),{key:0,"inscribed-content":null==(i=null==(l=p(me).detail)?void 0:l.tenantProductInsureVO)?void 0:i.inscribedContent},null,8,["inscribed-content"])):x("",!0),p(me).showBtn?(s(),o("footer",ae,[d(Z,{disabled:!p(me).newAuth&&p(be),"is-gradient":!1,text:p(me).newAuth?"立即领取":"激活保障",onClick:ge},null,8,["disabled","text"])])):x("",!0)]),p(me).showFilePreview&&0!==p(he).length?(s(),u(p(N),{key:0,show:p(me).showFilePreview,"onUpdate:show":t[1]||(t[1]=e=>p(me).showFilePreview=e),"content-list":p(me).isOnlyView?p(he):p(ye),"is-only-view":p(me).isOnlyView,"active-index":p(me).activeIndex,text:p(me).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:Oe,onOnCloseFilePreview:xe},null,8,["show","content-list","is-only-view","active-index","text"])):x("",!0),p(me).loading?x("",!0):(s(),u(B,{key:1,"product-detail":p(me).detail},null,8,["product-detail"]))]})),_:1},8,["theme-vars"]))}}});export{ne as default};
