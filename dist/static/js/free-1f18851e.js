import{h as e,aw as t,r,L as n,Z as a,l as o,y as i,z as l,A as s,I as d,m as c,X as u,a8 as p,N as f,j as m,ax as v,k as A,n as h,Q as w,s as I,E as y,F as O,T as C,d as P}from"./vendor-d6fdc679.js";import{_ as D,a8 as b,a9 as g}from"./index-ed1d5702.js";import{P as V}from"./index-0ef1d96c.js";import{u as k,B as j,A as x,I as F,P as T}from"./useAddressList-d3e70583.js";import{_ as L,n as N}from"./nextStep-9804cc3b.js";import{a as E,s as H,c as B}from"./phoneVerify-b03b9475.js";import{p as Y,g as U}from"./product-bcf2464a.js";import{i as S,t as _}from"./trial-d6a5b973.js";import{_ as M}from"./index-f7f7b53e.js";import{j as R}from"./trial-4755a883.js";import{v as z,f as Z}from"./utils-8f55bcec.js";import{u as $}from"./theme-bc16780d.js";import"./infoCollection-13dbfc58.js";import"./relativeTime-388a6394.js";import"./validator-5a13dc82.js";import"./useDicData-113af95f.js";import"./core-c0884681.js";import"./index-51d99e89.js";import"./useStorage-c5810883.js";var G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAeCAMAAACBgxnEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTPpkAPpkAPpkAPlkAPlkAP9fAPpkAP9jAPljAPljAPlkAPdhAP9VAPhlAPpjAPpiAPpkAPlhAPpkAKrbDd8AAAATdFJOUwCe3XX6YBgzC+yKwSIDTrE+0C9Hm6hZAAAAf0lEQVR42u2MSw6AIAxEi6CCf+j976ommvG3omxMOqv2vczQmZa3tPRMptdZndVZndXZf892/JGOxN68qUEr24/zk84jSvne93fae3Qk3scrjZeWzDcVaNUQIvRDOGkYQOU+hYMmsBJ+cTt1C0gZP7mNTvhL+Zq5xlfOW4tb6le9ZDBDk4RvXwAAAABJRU5ErkJggg==";const J={class:"free-crad"},Q={class:"container"},X={class:"title"},q=["src"],K=["src"];var W=D(e({props:{colors:{type:Array,default:()=>["#CDDFFE","#F1F7FE"]},detail:{type:Object,default:()=>{}},isFirst:{type:Boolean,default:!0},insureDetail:{type:Object,default:()=>{}}},setup(e,{expose:p}){const f=e;t((e=>({"9022f068":f.colors[0],"9022f02a":f.colors[1]})));const m=r(),v=n({factorObj:{1:[{attributeValues:null,code:"mobile",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"手机号"},{attributeValues:null,code:"verificationCode",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:1,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"验证码"}],2:[],3:[]},isFirst:!0}),A=async(e,t)=>{const r=f.isFirst?E:H,n=await r(e),{code:a,data:o}=n;"10000"===a&&(null==t||t())};return a((()=>f.isFirst),(()=>{var e;f.isFirst||(v.factorObj=null==(e=f.insureDetail)?void 0:e.productFactor)})),p({validateForm:()=>new Promise(((e,t)=>{m.value.validateForm().then((t=>{e(!0)})).catch((()=>{t()}))}))}),(t,r)=>(o(),i("div",J,[l("div",Q,[l("div",X,[l("img",{src:s(G)},null,8,q),l("span",null,d(e.isFirst?"凭手机号 免费领取":"最后一步 填写信息"),1),l("img",{src:s(G)},null,8,K)]),(o(),c(L,{ref_key:"formRef",ref:m,key:e.isFirst?1:2,"send-sms-code":A,"need-desensitize":"","form-info":e.detail,"factor-object":s(v).factorObj},null,8,["form-info","factor-object"])),u(t.$slots,"default",{},void 0,!0)])]))}}),[["__scopeId","data-v-6c71cc2c"]]);const ee={class:"page-free-product-detail"},te={class:"product-desc"},re={key:1,class:"page-free-footer"};var ne=D(e({setup(e){t((e=>({"53f6d997":s(le).colors[1]})));const d=$(),u=p(),D=f(),{productCode:L="",agencyCode:E="",tenantId:H="",saleUserId:G="",saleChannelId:J="",extraInfo:Q}=D.query;let X={};try{X=JSON.parse(decodeURIComponent(Q))}catch(Ae){}const{openId:q,indirectCode:K="",agentCode:ne}=X;let ae="";const oe=r(),ie=r(),le=n({colors:["#fff"],detail:{},order:{tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}},relationList:{},banner:"",productDesc:[],newAuth:!0,isValidateCode:!1,insureDetail:{},loading:!0,isSelfInsure:!0,showBtn:!1,activeIndex:0,showFilePreview:!1,isOnlyView:!0}),se=r();k({openId:q},(e=>{le.relationList=e}));const de=()=>{var e,t,r;const n=le.insureDetail.productRiskVoList||[];return 1===((null==(r=null==(t=null==(e=null==n?void 0:n[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:r.insuranceStartType)||1)?`${P(new Date).format("YYYY-MM-DD")} 00:00:00`:`${P(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`},ce=()=>{var e,t;const r=le.insureDetail.productRiskVoList||[],{insuranceEndType:n,riskInsureLimitVO:a}=(null==(t=null==(e=null==r?void 0:r[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:o}=a||{},[i,l]=((null==o?void 0:o[0])||"").split("_");return 1===n?`${P(new Date).add(l||0,i).format("YYYY-MM-DD")} 23:59:59`:n?`${P(new Date).add(l,i).format("YYYY-MM-DD")} 00:00:00`:""},ue=async()=>{le.loading=!0;const e=Y({productCode:L,withInsureInfo:!0,tenantId:H}),t=S({productCode:L}),r=U({openId:q});await Promise.all([e,t,r]).then((([e,t,r])=>{var n,a,o,i,l;if("10000"===e.code){le.detail=e.data,le.banner=null==(n=le.detail.tenantProductInsureVO)?void 0:n.banner[0];const{colorEnd:t,colorStart:r}=(null==(a=le.detail.tenantProductInsureVO)?void 0:a.backgroundInsureVO)||{};le.colors=[r,t],le.productDesc=le.detail.tenantProductInsureVO.spec||[],document.title=(null==(i=null==(o=le.detail)?void 0:o.tenantProductInsureVO)?void 0:i.productName)||""}if("10000"===t.code&&(le.insureDetail=t.data,le.insureDetail.productFactor[1].forEach((e=>{"verificationCode"===e.code&&1===e.isDisplay&&(le.isValidateCode=!0)})),le.insureDetail.productFactor[2]=null==(l=le.insureDetail.productFactor)?void 0:l[2].map((e=>{var t,r;return"relationToHolder"===e.code&&1===e.isDisplay&&(e.title="被保人",le.order.tenantOrderInsuredList[0].relationToHolder=(null==(r=null==(t=e.attributeValueList)?void 0:t[0])?void 0:r.code)||""),e}))),"10000"===r.code&&(le.newAuth=!r.data,le.isSelfInsure=!!r.data,r.data)){const e=r.data;le.order.tenantOrderHolder={certNo:null==e?void 0:e.certiNo,extInfo:{},mobile:null==e?void 0:e.mobile,name:null==e?void 0:e.name}}(()=>{let e={};if(e=le.detail.tenantProductInsureVO.planInsureVO.attachmentVOList||[],!e)return void(se.value=[]);const t={2:"richText",3:"link"};se.value=Object.keys(e).map((r=>(e[r].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),r=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===r?"pdf":"picture"}else e.attachmentType=t[e.attachmentType]})),{attachmentName:r,attachmentList:e[r]})))||[]})(),le.loading=!1}))},pe=async()=>{let e={loginType:"2",openId:q,thirdUserType:"XINAO_WECHAT",indirectCode:K};try{if(le.newAuth?(e.loginName=le.order.tenantOrderHolder.mobile,e.password=le.order.tenantOrderHolder.verificationCode):e=Z({order:le.order,tenantId:H,extraInfo:X,commencementTime:de(),expiryDate:ce(),detail:le.detail,insureDetail:le.insureDetail,iseeBizNo:ae,agentCode:ne,agencyCode:E,saleUserId:G,templateId:null==X?void 0:X.templateId,saleChannelId:J,pageCode:"infoCollection",buttonCode:"EVENT_FREE_multiIssuePolicy"}),le.newAuth){const{code:t,data:r}=await _(e);"10000"===t&&(le.newAuth=!1)}else N(e,((e,t)=>{t===g.JUMP_PAGE&&e.orderNo&&u.push(`/baseInsurance/orderDetail?from=free&tenantId=${H}&orderNo=${e.orderNo}&productCode=${L}`)}))}catch(t){}},fe=async()=>await(async()=>{var e;await ie.value.validateForm();const t=null==(e=le.order.tenantOrderHolder)?void 0:e.verificationCode;if((le.isValidateCode||le.newAuth)&&(!t||!z(t)))return C({message:"请输入正确的验证码"}),!1;if(le.newAuth||!le.isValidateCode)return!0;const{code:r,data:n}=await B(le.order.tenantOrderHolder.mobile,t);return!!n})()?(le.newAuth||0===se.value.length?pe():(le.isOnlyView=!1,le.showFilePreview=!0),!1):null,me=()=>{le.showFilePreview=!1,le.isOnlyView=!0},ve=()=>{le.showFilePreview=!1,le.isOnlyView=!0,pe()};return m((()=>{ue(),setTimeout((async()=>{ae=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),a((()=>le.order.tenantOrderInsuredList[0]),(e=>{if(b(le.relationList)||le.newAuth)return null;const t=le.relationList[e.relationToHolder]||[];return 1===t.length&&(R.SELF!==e.relationToHolder?(le.order.tenantOrderInsuredList[0].certNo=le.order.tenantOrderInsuredList[0].certNo?le.order.tenantOrderInsuredList[0].certNo:t[0].cert[0].certNo,le.order.tenantOrderInsuredList[0].name=le.order.tenantOrderInsuredList[0].name?le.order.tenantOrderInsuredList[0].name:t[0].cert[0].certName):le.isSelfInsure&&(le.isSelfInsure=!1,le.order.tenantOrderHolder.certNo=le.order.tenantOrderHolder.certNo?le.order.tenantOrderHolder.certNo:t[0].cert[0].certNo,le.order.tenantOrderHolder.name=le.order.tenantOrderHolder.name?le.order.tenantOrderHolder.name:t[0].cert[0].certName)),!1}),{immediate:!0,deep:!0}),v(oe,(([{isIntersecting:e}],t)=>{le.showBtn=!e})),(e,t)=>{const r=A("van-image"),n=A("van-config-provider");return o(),c(n,{"theme-vars":s(d)},{default:h((()=>{var e,n,a,d;return[l("div",ee,[w(j,{url:s(le).banner},null,8,["url"]),w(W,{ref_key:"formRef",ref:ie,"is-first":s(le).newAuth,"insure-detail":s(le).insureDetail,detail:s(le).order,colors:s(le).colors},{default:h((()=>[w(V,{ref_key:"root",ref:oe,class:"submit-btn","is-gradient":!1,text:s(le).newAuth?"立即领取":"激活保障",onClick:fe},null,8,["text"]),!s(le).newAuth&&se.value&&se.value.length>0?(o(),c(x,{key:0,"attachement-list":se.value,"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{le.isOnlyView=!0,le.activeIndex=e,le.showFilePreview=!0})(e))},null,8,["attachement-list"])):I("",!0)])),_:1},8,["is-first","insure-detail","detail","colors"]),l("div",te,[(o(!0),i(O,null,y(s(le).productDesc,((e,t)=>(o(),c(r,{key:t,width:"100%","lazy-load":"",src:e,class:""},null,8,["src"])))),128))]),(null==(n=null==(e=s(le).detail)?void 0:e.tenantProductInsureVO)?void 0:n.inscribedContent)?(o(),c(F,{key:0,"inscribed-content":null==(d=null==(a=s(le).detail)?void 0:a.tenantProductInsureVO)?void 0:d.inscribedContent},null,8,["inscribed-content"])):I("",!0),s(le).showBtn?(o(),i("footer",re,[w(V,{"is-gradient":!1,text:s(le).newAuth?"立即领取":"激活保障",onClick:fe},null,8,["text"])])):I("",!0)]),s(le).showFilePreview&&0!==se.value.length?(o(),c(M,{key:0,show:s(le).showFilePreview,"onUpdate:show":t[1]||(t[1]=e=>s(le).showFilePreview=e),"content-list":se.value,"is-only-view":s(le).isOnlyView,"active-index":s(le).activeIndex,text:s(le).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:ve,onOnCloseFilePreview:me},null,8,["show","content-list","is-only-view","active-index","text"])):I("",!0),s(le).loading?I("",!0):(o(),c(T,{key:1,"product-detail":s(le).detail},null,8,["product-detail"]))]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-7dbc0d8c"]]);export{ne as default};
