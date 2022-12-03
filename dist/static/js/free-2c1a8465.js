import{h as e,aw as t,r,L as a,Z as n,l as o,y as i,z as l,A as s,Q as d,X as c,a3 as u,a4 as f,a8 as p,N as m,j as v,ax as A,k as h,m as I,n as w,s as y,E as O,F as b,T as C}from"./vendor-8ce3e007.js";import{_ as P,a8 as g,a9 as j}from"./index-b395e119.js";import{P as x}from"./index-553bb2c3.js";import{u as F,B as V,A as k,I as D,_ as T,P as N}from"./useAddressList-9eafa67a.js";import{_ as L,n as H}from"./nextStep-36d13a9d.js";import{a as E,s as B,c as U}from"./phoneVerify-7174c60b.js";import{p as S,g as _}from"./product-d2cfa7f2.js";import{i as R,t as z}from"./trial-7f378009.js";import{j as Z}from"./trial-6735d8f5.js";import{v as M,f as G}from"./utils-5143ddb0.js";import{u as J}from"./theme-1f207c56.js";import"./infoCollection-405ffb6b.js";import"./relativeTime-b91118b7.js";import"./useDicData-45cd01f4.js";import"./core-a5163fe5.js";import"./index-5e16c767.js";import"./useStorage-f1fdca8e.js";var Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAeCAMAAACBgxnEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTPpkAPpkAPpkAPlkAPlkAP9fAPpkAP9jAPljAPljAPlkAPdhAP9VAPhlAPpjAPpiAPpkAPlhAPpkAKrbDd8AAAATdFJOUwCe3XX6YBgzC+yKwSIDTrE+0C9Hm6hZAAAAf0lEQVR42u2MSw6AIAxEi6CCf+j976ommvG3omxMOqv2vczQmZa3tPRMptdZndVZndXZf892/JGOxN68qUEr24/zk84jSvne93fae3Qk3scrjZeWzDcVaNUQIvRDOGkYQOU+hYMmsBJ+cTt1C0gZP7mNTvhL+Zq5xlfOW4tb6le9ZDBDk4RvXwAAAABJRU5ErkJggg==";const X={class:"free-crad"},q={class:"container"},K={class:"title"},Y=["src"],$=(e=>(u("data-v-146bd444"),e=e(),f(),e))((()=>l("span",null,"最后一步 填写信息",-1))),W=["src"];var ee=P(e({props:{colors:{type:Array,default:()=>["#CDDFFE","#F1F7FE"]},detail:{type:Object,default:()=>{}},isFirst:{type:Boolean,default:!0},insureDetail:{type:Object,default:()=>{}}},setup(e,{expose:u}){const f=e;t((e=>({"6b8f91b6":f.colors[0],"6b8f9178":f.colors[1]})));const p=r(),m=a({factorObj:{1:[{attributeValues:null,code:"mobile",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:2,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"手机号"},{attributeValues:null,code:"verificationCode",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:2,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"验证码"}],2:[],3:[]},isFirst:!0}),v=async(e,t)=>{const r=f.isFirst?E:B,a=await r(e),{code:n,data:o}=a;"10000"===n&&(null==t||t())};return n((()=>f.isFirst),(()=>{var e;f.isFirst||(m.factorObj=null==(e=f.insureDetail)?void 0:e.productFactor)})),u({validateForm:()=>new Promise(((e,t)=>{p.value.validateForm().then((t=>{e(!0)})).catch((()=>{t()}))}))}),(t,r)=>(o(),i("div",X,[l("div",q,[l("div",K,[l("img",{src:s(Q)},null,8,Y),$,l("img",{src:s(Q)},null,8,W)]),d(L,{ref_key:"formRef",ref:p,"send-sms-code":v,"form-info":e.detail,"factor-object":s(m).factorObj},null,8,["form-info","factor-object"]),c(t.$slots,"default",{},void 0,!0)])]))}}),[["__scopeId","data-v-146bd444"]]);const te={class:"page-free-product-detail"},re={class:"product-desc"},ae={key:1,class:"page-free-footer"};var ne=P(e({setup(e){t((e=>({e3d12db4:s(oe).colors[1]})));const c=J(),u=p(),f=m(),{productCode:P="",tenantId:L="",saleUserId:E="",saleChannelId:B="",extraInfo:Q}=f.query;let X={};try{X=JSON.parse(decodeURIComponent(Q))}catch(fe){}const{openId:q,indirectCode:K="",agentCode:Y}=X;let $="";const W=r(),ne=r(),oe=a({colors:["#fff"],detail:{},order:{tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}},relationList:{},banner:"",productDesc:[],newAuth:!0,isValidateCode:!1,insureDetail:{},loading:!0,isSelfInsure:!0,showBtn:!1,activeIndex:0,showFilePreview:!1,isOnlyView:!0}),ie=r();F({openId:q},(e=>{oe.relationList=e}));const le=async()=>{oe.loading=!0;const e=S({productCode:P,withInsureInfo:!0,tenantId:L}),t=R({productCode:P}),r=_({openId:q});await Promise.all([e,t,r]).then((([e,t,r])=>{var a,n,o;if("10000"===e.code){oe.detail=e.data,oe.banner=null==(a=oe.detail.tenantProductInsureVO)?void 0:a.banner[0];const{colorEnd:t,colorStart:r}=(null==(n=oe.detail.tenantProductInsureVO)?void 0:n.backgroundInsureVO)||{};oe.colors=[r,t],oe.productDesc=oe.detail.tenantProductInsureVO.spec||[],document.title=oe.detail.productFullName||""}if("10000"===t.code&&(oe.insureDetail=t.data,oe.insureDetail.productFactor[1].forEach((e=>{"verificationCode"===e.code&&1===e.isDisplay&&(oe.isValidateCode=!0)})),oe.insureDetail.productFactor[2]=null==(o=oe.insureDetail.productFactor)?void 0:o[2].map((e=>{var t,r;return"relationToHolder"===e.code&&1===e.isDisplay&&(e.title="被保人",oe.order.tenantOrderInsuredList[0].relationToHolder=(null==(r=null==(t=e.attributeValueList)?void 0:t[0])?void 0:r.code)||""),e}))),"10000"===r.code&&(oe.newAuth=!r.data,oe.isSelfInsure=!!r.data,r.data)){const e=r.data;oe.order.tenantOrderHolder={certNo:null==e?void 0:e.certiNo,extInfo:{},mobile:null==e?void 0:e.mobile,name:null==e?void 0:e.name}}(()=>{let e={};if(e=oe.detail.tenantProductInsureVO.planInsureVO.attachmentVOList||[],!e)return void(ie.value=[]);const t={2:"richText",3:"link"};ie.value=Object.keys(e).map((r=>(e[r].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),r=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===r?"pdf":"picture"}else e.attachmentType=t[e.attachmentType]})),{attachmentName:r,attachmentList:e[r]})))||[]})(),oe.loading=!1}))},se=async()=>{let e={loginType:"2",openId:q,thirdUserType:"XINAO_WECHAT",indirectCode:K};try{if(oe.newAuth?(e.loginName=oe.order.tenantOrderHolder.mobile,e.password=oe.order.tenantOrderHolder.verificationCode):e=G({order:oe.order,tenantId:L,extraInfo:X,detail:oe.detail,insureDetail:oe.insureDetail,iseeBizNo:$,agentCode:Y,saleUserId:E,templateId:null==X?void 0:X.templateId,saleChannelId:B,pageCode:"infoCollection",buttonCode:"EVENT_FREE_multiIssuePolicy"}),oe.newAuth){const{code:t,data:r}=await z(e);"10000"===t&&(oe.newAuth=!1)}else H(e,((e,t)=>{t===j.JUMP_PAGE&&e.orderNo&&u.push(`/baseInsurance/orderDetail?from=free&tenantId=${L}&orderNo=${e.orderNo}&productCode=${P}`)}))}catch(t){}},de=async()=>await(async()=>{var e;await ne.value.validateForm();const t=null==(e=oe.order.tenantOrderHolder)?void 0:e.verificationCode;if(oe.isValidateCode&&(!t||!M(t)))return C({message:"请输入正确的验证码"}),!1;if(oe.newAuth||!oe.isValidateCode)return!0;const{code:r,data:a}=await U(oe.order.tenantOrderHolder.mobile,t);return!!a})()?(oe.newAuth||0===ie.value.length?se():(oe.isOnlyView=!1,oe.showFilePreview=!0),!1):null,ce=()=>{oe.showFilePreview=!1,oe.isOnlyView=!1},ue=()=>{oe.showFilePreview=!1,oe.isOnlyView=!0,se()};return v((()=>{le(),setTimeout((async()=>{$=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),n((()=>oe.order.tenantOrderInsuredList[0]),(e=>{if(g(oe.relationList)||oe.newAuth)return null;const t=oe.relationList[e.relationToHolder]||[];return 1===t.length&&(Z.SELF!==e.relationToHolder?(oe.order.tenantOrderInsuredList[0].certNo=oe.order.tenantOrderInsuredList[0].certNo?oe.order.tenantOrderInsuredList[0].certNo:t[0].cert[0].certNo,oe.order.tenantOrderInsuredList[0].name=oe.order.tenantOrderInsuredList[0].name?oe.order.tenantOrderInsuredList[0].name:t[0].cert[0].certName):oe.isSelfInsure&&(oe.isSelfInsure=!1,oe.order.tenantOrderHolder.certNo=oe.order.tenantOrderHolder.certNo?oe.order.tenantOrderHolder.certNo:t[0].cert[0].certNo,oe.order.tenantOrderHolder.name=oe.order.tenantOrderHolder.name?oe.order.tenantOrderHolder.name:t[0].cert[0].certName)),!1}),{immediate:!0,deep:!0}),A(W,(([{isIntersecting:e}],t)=>{oe.showBtn=!e})),(e,t)=>{const r=h("van-image"),a=h("van-config-provider");return o(),I(a,{"theme-vars":s(c)},{default:w((()=>{var e,a,n,c;return[l("div",te,[d(V,{url:s(oe).banner},null,8,["url"]),d(ee,{ref_key:"formRef",ref:ne,"is-first":s(oe).newAuth,"insure-detail":s(oe).insureDetail,detail:s(oe).order,colors:s(oe).colors},{default:w((()=>[d(x,{ref_key:"root",ref:W,class:"submit-btn","is-gradient":!1,text:s(oe).newAuth?"立即领取":"激活保障",onClick:de},null,8,["text"]),!s(oe).newAuth&&ie.value&&ie.value.length>0?(o(),I(k,{key:0,"attachement-list":ie.value,"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{oe.activeIndex=e,oe.showFilePreview=!0})(e))},null,8,["attachement-list"])):y("",!0)])),_:1},8,["is-first","insure-detail","detail","colors"]),l("div",re,[(o(!0),i(b,null,O(s(oe).productDesc,((e,t)=>(o(),I(r,{key:t,width:"100%","lazy-load":"",src:e,class:""},null,8,["src"])))),128))]),(null==(a=null==(e=s(oe).detail)?void 0:e.tenantProductInsureVO)?void 0:a.inscribedContent)?(o(),I(D,{key:0,"inscribed-content":null==(c=null==(n=s(oe).detail)?void 0:n.tenantProductInsureVO)?void 0:c.inscribedContent},null,8,["inscribed-content"])):y("",!0),s(oe).showBtn?(o(),i("footer",ae,[d(x,{"is-gradient":!1,text:s(oe).newAuth?"立即领取":"激活保障",onClick:de},null,8,["text"])])):y("",!0)]),s(oe).showFilePreview&&0!==ie.value.length?(o(),I(T,{key:0,show:s(oe).showFilePreview,"onUpdate:show":t[1]||(t[1]=e=>s(oe).showFilePreview=e),"content-list":ie.value,"is-only-view":s(oe).isOnlyView,"active-index":s(oe).activeIndex,text:s(oe).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:ue,onOnCloseFilePreview:ce},null,8,["show","content-list","is-only-view","active-index","text"])):y("",!0),s(oe).loading?y("",!0):(o(),I(N,{key:1,"product-detail":s(oe).detail},null,8,["product-detail"]))]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-c551b112"]]);export{ne as default};
