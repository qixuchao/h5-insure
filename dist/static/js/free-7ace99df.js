import{d as e,aY as t,r as a,z as l,a7 as n,b as s,c as i,g as o,i as r,f as d,t as c,e as u,l as p,a8 as f,aZ as v,u as m,a as h,x as y,y as b,a_ as A,a2 as w,a$ as I,w as _,j as g,h as x,F as O,b0 as k,T as D,b1 as C,$ as F}from"./index-ee82c706.js";import{p as L,g as V}from"./product-f067131a.js";import{i as T,t as j}from"./trial-5a3b7ad4.js";import{a as P,s as N,c as E}from"./phoneVerify-cd076938.js";import{u as R,B,P as Y}from"./index-7e60ae2a.js";import{n as H}from"./nextStep-f7804499.js";import{j as S}from"./trial-42b630bc.js";import{v as M,f as J}from"./utils-1eefe57a.js";import{u as z}from"./theme-65292714.js";import W from"./index-0892a051.js";import Z from"./index-33544982.js";import"./pdfdist-3849db64.js";import"./logo-e4245f5a.js";import"./core-80ede6e0.js";import"./index-65c726f2.js";import"./useStorage-5f9880fe.js";import"./infoCollection-32fd6571.js";import"./relativeTime-46de6e62.js";import"./validator-5a13dc82.js";import"./useDicData-dcddb890.js";const G={class:"free-card"},$={class:"container"},X={class:"title"},Q=e({props:{colors:{type:Array,default:()=>["#CDDFFE","#F1F7FE"]},detail:{type:Object,default:()=>{}},isFirst:{type:Boolean,default:!0},insureDetail:{type:Object,default:()=>{}},previewMode:{type:Boolean,default:!1}},setup(e,{expose:v}){const m=e;t((e=>({"750db18c":m.colors[0],"750db14e":m.colors[1]})));const h=a(),y=l({factorObj:{1:[{attributeValues:null,code:"mobile",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"手机号"},{attributeValues:null,code:"verificationCode",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"验证码"}],2:[],3:[]},isFirst:!0}),b=async({mobile:e,type:t},a)=>{var l;if(h.value){if(m.previewMode)return void(null==a||a());null==(l=h.value)||l.validateForm(`${t}_mobile`).then((async()=>{const t=m.isFirst?P:N,l=await t(e),{code:n,data:s}=l;"10000"===n&&(null==a||a())}))}};return n((()=>m.isFirst),(()=>{var e;m.isFirst||(y.factorObj=null==(e=m.insureDetail)?void 0:e.productFactor)})),v({validateForm:()=>new Promise(((e,t)=>{h.value.validateForm().then((t=>{e(!0)})).catch((()=>{t()}))}))}),(t,a)=>{const l=s("ProSvg");return i(),o("div",G,[r("div",$,[r("div",X,[d(l,{name:"free-arrow"}),r("span",null,c(e.isFirst?"凭手机号 免费领取":"最后一步 填写信息"),1),d(l,{name:"free-arrow"})]),(i(),u(Z,{ref_key:"formRef",ref:h,key:e.isFirst?1:2,"send-sms-code":b,"need-desensitize":"","form-info":e.detail,"factor-object":p(y).factorObj},null,8,["form-info","factor-object"])),f(t.$slots,"default")])])}}});const U={key:0},K=[r("div",{class:"__skeleton_free_content__"},[r("div",{class:"van-config-provider router-view sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px","--6a485862-state_colors_1_":"#ddd"}},[r("div",{class:"page-free-product-detail"},[r("div",{class:"van-image banner",style:{width:"375px",height:"185px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[r("img",{class:"van-image__img","data-src":"https://za-obs-prod.obs.cn-north-4.myhuaweicloud.com:443/common/20221213/b38ae9c8c023488bb4fb4bdc2c67a211/wecom-temp-b44cd90cb804d1826e7824adc3b386e9(1).png?AccessKeyId=LLSTLZA8R9JY8AJRF7ZF&Policy=eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0yM1QwNDowNTo1OS41NzhaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJlcSIsIiRidWNrZXQiLCJ6YS1vYnMtcHJvZCJdXX0=&Signature=gAgGPVirtYpSJtdYcnN1W3zpIbQ%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),r("div",{class:"free-card",style:{"--0c47bddc-props_colors_0_":"#ddd","--0c47bddc-props_colors_1_":"#ddd"}},[r("div",{class:"container"},[r("div",{class:"title"},[r("svg",{class:"svg-icon icon-free-arrow"},[r("use",{"xlink:href":"#icon-free-arrow"})]),r("span",null,[r("span",{class:"sk-text",style:{"--fp":"0.00%","--sp":"100.00%","--lh":"16.0001px"}},"最后一步 填写信息")]),r("svg",{class:"svg-icon icon-free-arrow"},[r("use",{"xlink:href":"#icon-free-arrow"})])]),r("div",{class:"page-info-wrapper"},[r("div",{class:"com-form-wrapper","show-error":"","show-error-message":"false"},[r("form",{class:"van-form"},[r("div",{class:"com-card"},[r("div",{class:"com-card-wrap"},[r("div",{class:"header"}),r("div",{class:"body",style:{height:"auto"}},[r("div",{class:"com-personal-wrapper"},[r("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[r("div",{class:"van-cell__title van-field__label van-field__label--left"},[r("label",{id:"van-field-1-label",for:"van-field-1-input"},[r("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"手机号")])]),r("div",{class:"van-cell__value van-field__value"},[r("div",{class:"van-field__body"},[r("input",{type:"text",id:"van-field-1-input",name:"holder_mobile",class:"van-field__control van-field__control--left sk-input",placeholder:"请输入手机号",autocomplete:"off","aria-labelledby":"van-field-1-label"}),r("div",{class:"van-field__right-icon"})])])]),r("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[r("div",{class:"van-cell__title van-field__label van-field__label--left"},[r("label",{id:"van-field-2-label",for:"van-field-2-input"},[r("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"验证码")])]),r("div",{class:"van-cell__value van-field__value"},[r("div",{class:"van-field__body"},[r("input",{type:"tel",inputmode:"numeric",id:"van-field-2-input",name:"holder_verificationCode",class:"van-field__control van-field__control--left",placeholder:"请输入验证码",autocomplete:"off","aria-labelledby":"van-field-2-label"}),r("div",{class:"van-field__right-icon"})])]),r("div",{class:"button-extra"},[r("button",{type:"button",class:"van-button van-button--primary van-button--small van-button--plain sms-code sk-button"},[r("div",{class:"van-button__content"},[r("span",{class:"van-button__text"},[r("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"验证码")])])])])])])])])])])])]),r("div",{class:"pro-shadow-button submit-btn"},[r("button",{type:"button",class:"van-button van-button--primary van-button--normal van-button--block van-button--round shadow-button shadow sk-button"},[r("div",{class:"van-button__content"},[r("span",{class:"van-button__text"},[r("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"激活保障")])])])]),r("div",{class:"com-attachment-list"},[r("span",null,[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}},"请阅读")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《免责条款说明》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《被保险人同意声明》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《投保须知》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《重要提示》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《条款费率》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《特别约定》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《保险经纪委托合同》 ")]),r("span",{class:"attachment-item"},[r("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《客户告知书》 ")])])])]),r("div",{class:"product-desc"},[r("div",{class:"van-image",style:{width:"100%"}},[r("img",{class:"van-image__img","data-src":"https://za-obs-prod.obs.cn-north-4.myhuaweicloud.com:443/common/20221211/dff441c3bcf94b2d8f08e6ec3f4267ec/产品介绍.png?AccessKeyId=LLSTLZA8R9JY8AJRF7ZF&Policy=eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0yM1QwNDowNTo1OS41NzlaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJlcSIsIiRidWNrZXQiLCJ6YS1vYnMtcHJvZCJdXX0=&Signature=%2B%2FGYArnGmx9sMDCEvOBvjfpiZsU%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})])])])])],-1)],q={class:"page-free-product-detail"},ee={class:"product-desc"},te={key:1,class:"page-free-footer"},ae=e({setup(e){t((e=>({"70c89954":p(ve).colors[1]})));const c=v((()=>k((()=>import("./index-1e30f4ff.js")),["static/js/index-1e30f4ff.js","static/css/index-607986ff.css","static/js/index-ee82c706.js","static/css/index-a126266b.css","static/js/pdfdist-3849db64.js"]))),f=v((()=>k((()=>import("./index-ccfca0ed.js")),["static/js/index-ccfca0ed.js","static/css/index-b9ba3011.css","static/js/index-ee82c706.js","static/css/index-a126266b.css","static/js/pdfdist-3849db64.js"]))),P=v((()=>k((()=>import("./index-978bfbbc.js")),["static/js/index-978bfbbc.js","static/css/index-ea588f10.css","static/js/index-ee82c706.js","static/css/index-a126266b.css","static/js/pdfdist-3849db64.js","static/js/theme-65292714.js","static/js/index-0892a051.js","static/css/index-2dbcd337.css","static/js/utils-1eefe57a.js","static/js/infoCollection-32fd6571.js","static/js/useStorage-5f9880fe.js","static/js/trial-42b630bc.js"]))),N=z(),Z=m(),G=h(),{productCode:$="",agencyCode:X="",tenantId:ae="",saleUserId:le="",saleChannelId:ne="",extraInfo:se,preview:ie}=G.query;let oe={};try{oe=JSON.parse(decodeURIComponent(se))}catch(xe){}const{openId:re,indirectCode:de="",agentCode:ce}=oe,ue=a(),pe=a(),fe=a(),ve=l({colors:["#fff"],detail:{},order:{tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}},relationList:{},banner:"",productDesc:[],newAuth:!0,isValidateCode:!1,insureDetail:{},loading:!0,isSelfInsure:!0,showBtn:!1,activeIndex:0,showFilePreview:!1,isOnlyView:!0}),me=a();re&&R({openId:re},(e=>{ve.relationList=e}));const he=y((()=>!!ie)),ye=()=>{var e,t,a;const l=ve.insureDetail.productRiskVoList||[];return 1===((null==(a=null==(t=null==(e=null==l?void 0:l[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:a.insuranceStartType)||1)?`${F(new Date).format("YYYY-MM-DD")} 00:00:00`:`${F(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`},be=()=>{var e,t;const a=ve.insureDetail.productRiskVoList||[],{insuranceEndType:l,riskInsureLimitVO:n}=(null==(t=null==(e=null==a?void 0:a[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:s}=n||{},[i,o]=((null==s?void 0:s[0])||"").split("_");return 1===l?`${F(new Date).add(o||0,i).format("YYYY-MM-DD")} 23:59:59`:l?`${F(new Date).add(o,i).format("YYYY-MM-DD")} 00:00:00`:""},Ae=async()=>{ve.loading=!0;const e=L({productCode:$,withInsureInfo:!0,tenantId:ae}),t=T({productCode:$}),a=V({openId:re});await Promise.all([e,t,a]).then((([e,t,a])=>{var l,n,s,i,o;if("10000"===e.code){ve.detail=e.data,ve.banner=null==(l=ve.detail.tenantProductInsureVO)?void 0:l.banner[0];const{colorEnd:t,colorStart:a}=(null==(n=ve.detail.tenantProductInsureVO)?void 0:n.backgroundInsureVO)||{};ve.colors=[a,t],ve.productDesc=ve.detail.tenantProductInsureVO.spec||[],document.title=(null==(i=null==(s=ve.detail)?void 0:s.tenantProductInsureVO)?void 0:i.productName)||""}if("10000"===t.code&&(ve.insureDetail=t.data,ve.insureDetail.productFactor[1].forEach((e=>{"verificationCode"===e.code&&1===e.isDisplay&&(ve.isValidateCode=!0)})),ve.insureDetail.productFactor[2]=null==(o=ve.insureDetail.productFactor)?void 0:o[2].map((e=>{var t,a;return"relationToHolder"===e.code&&1===e.isDisplay&&(e.title="被保人",ve.order.tenantOrderInsuredList[0].relationToHolder=(null==(a=null==(t=e.attributeValueList)?void 0:t[0])?void 0:a.code)||""),e}))),"10000"===a.code&&(ve.newAuth=!a.data,ve.isSelfInsure=!!a.data,a.data)){const e=a.data;ve.order.tenantOrderHolder={certNo:null==e?void 0:e.certiNo,extInfo:{},mobile:null==e?void 0:e.mobile,name:null==e?void 0:e.name}}(()=>{var e;let t={};if(t=(null==(e=ve.detail.tenantProductInsureVO.planInsureVO)?void 0:e.attachmentVOList)||[],!t)return void(me.value=[]);const a={2:"richText",3:"link"};me.value=Object.keys(t).map((e=>(t[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),a=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===a?"pdf":"picture"}else e.attachmentType=a[e.attachmentType]})),{attachmentName:e,attachmentList:t[e]})))||[]})(),ve.loading=!1}))},we=async()=>{let e={loginType:"2",openId:re,thirdUserType:"XINAO_WECHAT",indirectCode:de};try{if(ve.newAuth?(e.loginName=ve.order.tenantOrderHolder.mobile,e.password=ve.order.tenantOrderHolder.verificationCode):e=J({order:ve.order,tenantId:ae,extraInfo:oe,commencementTime:ye(),expiryDate:be(),detail:ve.detail,insureDetail:ve.insureDetail,iseeBizNo:ue.value,agentCode:ce,agencyCode:X,saleUserId:ce,templateId:null==oe?void 0:oe.templateId,saleChannelId:ne,pageCode:"infoCollection",buttonCode:"EVENT_FREE_multiIssuePolicy"}),ve.newAuth)if(he.value)ve.newAuth=!1;else{const{code:t,data:a}=await j(e);"10000"===t&&(ve.newAuth=!1)}else H(e,((e,t)=>{t===C.JUMP_PAGE&&e.orderNo&&Z.push(`/baseInsurance/orderDetail?from=free&tenantId=${ae}&orderNo=${e.orderNo}`)}))}catch(t){}},Ie=async()=>await(async()=>{var e;if(he.value)return!0;await fe.value.validateForm();const t=null==(e=ve.order.tenantOrderHolder)?void 0:e.verificationCode;if((ve.isValidateCode||ve.newAuth)&&(!t||!M(t)))return D({message:"请输入正确的验证码"}),!1;if(ve.newAuth||!ve.isValidateCode)return!0;const{code:a,data:l}=await E(ve.order.tenantOrderHolder.mobile,t);return!!l})()?(ve.newAuth||0===me.value.length?we():(ve.isOnlyView=!1,ve.showFilePreview=!0),!1):null,_e=()=>{ve.showFilePreview=!1,ve.isOnlyView=!0},ge=()=>{ve.showFilePreview=!1,ve.isOnlyView=!0,we()};return b((()=>{Ae(),setTimeout((async()=>{ue.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),n((()=>ve.order.tenantOrderInsuredList[0]),(e=>{if(A(ve.relationList)||ve.newAuth)return null;const t=ve.relationList[e.relationToHolder]||[];if(1===t.length)if(S.SELF!==e.relationToHolder){const{certNo:e,name:a,mobile:l,certType:n}=ve.order.tenantOrderInsuredList[0];ve.order.tenantOrderInsuredList[0].certNo=e||t[0].cert[0].certNo,ve.order.tenantOrderInsuredList[0].name=a||t[0].cert[0].certName,ve.order.tenantOrderInsuredList[0].mobile=l||t[0].contact[0].contactNo,ve.order.tenantOrderInsuredList[0].certType=n||t[0].cert[0].certType||w.CERT}else if(ve.isSelfInsure){ve.isSelfInsure=!1;const{certNo:e,name:a,mobile:l,certType:n}=ve.order.tenantOrderHolder;ve.order.tenantOrderHolder.certNo=e||t[0].cert[0].certNo,ve.order.tenantOrderHolder.name=a||t[0].cert[0].certName,ve.order.tenantOrderHolder.mobile=l||t[0].contact[0].contactNo,ve.order.tenantOrderHolder[0].certType=n||t[0].cert[0].certType||w.CERT}return!1}),{immediate:!0,deep:!0}),I(pe,(([{isIntersecting:e}],t)=>{ve.showBtn=!e})),(e,t)=>{const a=s("van-image"),l=s("van-config-provider");return p(ve).loading?(i(),o("div",U,K)):(i(),u(l,{key:1,"data-skeleton-root":"FREE","theme-vars":p(N)},{default:_((()=>{var e,l,n,s;return[r("div",q,[d(B,{"data-skeleton-type":"img",url:p(ve).banner},null,8,["url"]),d(Q,{ref_key:"formRef",ref:fe,"is-first":p(ve).newAuth,"insure-detail":p(ve).insureDetail,detail:p(ve).order,colors:p(ve).colors,"preview-mode":p(he)},{default:_((()=>[d(W,{ref_key:"root",ref:pe,class:"submit-btn",disabled:!p(ve).newAuth&&p(he),"is-gradient":!1,text:p(ve).newAuth?"立即领取":"激活保障",onClick:Ie},null,8,["disabled","text"]),!p(ve).newAuth&&me.value&&me.value.length>0?(i(),u(p(f),{key:0,"attachement-list":me.value,"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{ve.isOnlyView=!0,ve.activeIndex=e,ve.showFilePreview=!0})(e))},null,8,["attachement-list"])):g("",!0)])),_:1},8,["is-first","insure-detail","detail","colors","preview-mode"]),r("div",ee,[(i(!0),o(O,null,x(p(ve).productDesc,((e,t)=>(i(),u(a,{key:t,width:"100%","lazy-load":"",src:e,class:""},null,8,["src"])))),128))]),(null==(l=null==(e=p(ve).detail)?void 0:e.tenantProductInsureVO)?void 0:l.inscribedContent)?(i(),u(p(c),{key:0,"inscribed-content":null==(s=null==(n=p(ve).detail)?void 0:n.tenantProductInsureVO)?void 0:s.inscribedContent},null,8,["inscribed-content"])):g("",!0),p(ve).showBtn?(i(),o("footer",te,[d(W,{disabled:!p(ve).newAuth&&p(he),"is-gradient":!1,text:p(ve).newAuth?"立即领取":"激活保障",onClick:Ie},null,8,["disabled","text"])])):g("",!0)]),p(ve).showFilePreview&&0!==me.value.length?(i(),u(p(P),{key:0,show:p(ve).showFilePreview,"onUpdate:show":t[1]||(t[1]=e=>p(ve).showFilePreview=e),"content-list":me.value,"is-only-view":p(ve).isOnlyView,"active-index":p(ve).activeIndex,text:p(ve).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:ge,onOnCloseFilePreview:_e},null,8,["show","content-list","is-only-view","active-index","text"])):g("",!0),p(ve).loading?g("",!0):(i(),u(Y,{key:1,"product-detail":p(ve).detail},null,8,["product-detail"]))]})),_:1},8,["theme-vars"]))}}});export{ae as default};
