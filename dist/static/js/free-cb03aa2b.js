import{h as e,aw as t,r,L as a,Z as n,l as o,y as i,z as l,A as s,Q as d,X as c,a3 as u,a4 as f,a8 as p,N as m,j as v,ax as A,k as h,m as I,n as w,s as y,E as O,F as C,T as P}from"./vendor-c1388e64.js";import{_ as b,a8 as g,a9 as j}from"./index-658f9c45.js";import{P as x}from"./index-416a7797.js";import{u as F,B as V,A as k,I as D,_ as T,P as N}from"./useAddressList-71f6f502.js";import{_ as L,n as H}from"./nextStep-dcdceeec.js";import{a as E,s as B,c as U}from"./phoneVerify-208bafff.js";import{p as S,g as _}from"./product-e4700504.js";import{i as R,t as z}from"./trial-f17b85d9.js";import{j as Z}from"./trial-98939b43.js";import{v as M,f as G}from"./utils-97659088.js";import{u as J}from"./theme-bc16780d.js";import"./infoCollection-876f3f1f.js";import"./relativeTime-9363d9e3.js";import"./useDicData-011a853e.js";import"./core-e73d74ed.js";import"./index-f2e553bf.js";import"./useStorage-115c5895.js";var Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAeCAMAAACBgxnEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTPpkAPpkAPpkAPlkAPlkAP9fAPpkAP9jAPljAPljAPlkAPdhAP9VAPhlAPpjAPpiAPpkAPlhAPpkAKrbDd8AAAATdFJOUwCe3XX6YBgzC+yKwSIDTrE+0C9Hm6hZAAAAf0lEQVR42u2MSw6AIAxEi6CCf+j976ommvG3omxMOqv2vczQmZa3tPRMptdZndVZndXZf892/JGOxN68qUEr24/zk84jSvne93fae3Qk3scrjZeWzDcVaNUQIvRDOGkYQOU+hYMmsBJ+cTt1C0gZP7mNTvhL+Zq5xlfOW4tb6le9ZDBDk4RvXwAAAABJRU5ErkJggg==";const X={class:"free-crad"},q={class:"container"},K={class:"title"},Y=["src"],$=(e=>(u("data-v-39c4b325"),e=e(),f(),e))((()=>l("span",null,"最后一步 填写信息",-1))),W=["src"];var ee=b(e({props:{colors:{type:Array,default:()=>["#CDDFFE","#F1F7FE"]},detail:{type:Object,default:()=>{}},isFirst:{type:Boolean,default:!0},insureDetail:{type:Object,default:()=>{}}},setup(e,{expose:u}){const f=e;t((e=>({"775e2d99":f.colors[0],"775e2db8":f.colors[1]})));const p=r(),m=a({factorObj:{1:[{attributeValues:null,code:"mobile",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:2,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"手机号"},{attributeValues:null,code:"verificationCode",datasource:null,defaultValue:null,displayType:null,factorId:null,factorScript:null,hasDefaultValue:1,id:8249,isDisplay:1,isHidden:1,isMustInput:2,isReadOnly:null,moduleType:1,placeholder:null,planCode:null,position:null,productCode:"lin23323",productId:null,title:"验证码"}],2:[],3:[]},isFirst:!0}),v=async(e,t)=>{const r=f.isFirst?E:B,a=await r(e),{code:n,data:o}=a;"10000"===n&&(null==t||t())};return n((()=>f.isFirst),(()=>{var e;f.isFirst||(m.factorObj=null==(e=f.insureDetail)?void 0:e.productFactor)})),u({validateForm:()=>new Promise(((e,t)=>{p.value.validateForm().then((t=>{e(!0)})).catch((()=>{t()}))}))}),(t,r)=>(o(),i("div",X,[l("div",q,[l("div",K,[l("img",{src:s(Q)},null,8,Y),$,l("img",{src:s(Q)},null,8,W)]),d(L,{ref_key:"formRef",ref:p,"send-sms-code":v,"need-desensitize":"","form-info":e.detail,"factor-object":s(m).factorObj},null,8,["form-info","factor-object"]),c(t.$slots,"default",{},void 0,!0)])]))}}),[["__scopeId","data-v-39c4b325"]]);const te={class:"page-free-product-detail"},re={class:"product-desc"},ae={key:1,class:"page-free-footer"};var ne=b(e({setup(e){t((e=>({"612fc630":s(ie).colors[1]})));const c=J(),u=p(),f=m(),{productCode:b="",agencyCode:L="",tenantId:E="",saleUserId:B="",saleChannelId:Q="",extraInfo:X}=f.query;let q={};try{q=JSON.parse(decodeURIComponent(X))}catch(pe){}const{openId:K,indirectCode:Y="",agentCode:$}=q;let W="";const ne=r(),oe=r(),ie=a({colors:["#fff"],detail:{},order:{tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}},relationList:{},banner:"",productDesc:[],newAuth:!0,isValidateCode:!1,insureDetail:{},loading:!0,isSelfInsure:!0,showBtn:!1,activeIndex:0,showFilePreview:!1,isOnlyView:!0}),le=r();F({openId:K},(e=>{ie.relationList=e}));const se=async()=>{ie.loading=!0;const e=S({productCode:b,withInsureInfo:!0,tenantId:E}),t=R({productCode:b}),r=_({openId:K});await Promise.all([e,t,r]).then((([e,t,r])=>{var a,n,o;if("10000"===e.code){ie.detail=e.data,ie.banner=null==(a=ie.detail.tenantProductInsureVO)?void 0:a.banner[0];const{colorEnd:t,colorStart:r}=(null==(n=ie.detail.tenantProductInsureVO)?void 0:n.backgroundInsureVO)||{};ie.colors=[r,t],ie.productDesc=ie.detail.tenantProductInsureVO.spec||[],document.title=ie.detail.productFullName||""}if("10000"===t.code&&(ie.insureDetail=t.data,ie.insureDetail.productFactor[1].forEach((e=>{"verificationCode"===e.code&&1===e.isDisplay&&(ie.isValidateCode=!0)})),ie.insureDetail.productFactor[2]=null==(o=ie.insureDetail.productFactor)?void 0:o[2].map((e=>{var t,r;return"relationToHolder"===e.code&&1===e.isDisplay&&(e.title="被保人",ie.order.tenantOrderInsuredList[0].relationToHolder=(null==(r=null==(t=e.attributeValueList)?void 0:t[0])?void 0:r.code)||""),e}))),"10000"===r.code&&(ie.newAuth=!r.data,ie.isSelfInsure=!!r.data,r.data)){const e=r.data;ie.order.tenantOrderHolder={certNo:null==e?void 0:e.certiNo,extInfo:{},mobile:null==e?void 0:e.mobile,name:null==e?void 0:e.name}}(()=>{let e={};if(e=ie.detail.tenantProductInsureVO.planInsureVO.attachmentVOList||[],!e)return void(le.value=[]);const t={2:"richText",3:"link"};le.value=Object.keys(e).map((r=>(e[r].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),r=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===r?"pdf":"picture"}else e.attachmentType=t[e.attachmentType]})),{attachmentName:r,attachmentList:e[r]})))||[]})(),ie.loading=!1}))},de=async()=>{let e={loginType:"2",openId:K,thirdUserType:"XINAO_WECHAT",indirectCode:Y};try{if(ie.newAuth?(e.loginName=ie.order.tenantOrderHolder.mobile,e.password=ie.order.tenantOrderHolder.verificationCode):e=G({order:ie.order,tenantId:E,extraInfo:q,detail:ie.detail,insureDetail:ie.insureDetail,iseeBizNo:W,agentCode:$,agencyCode:L,saleUserId:B,templateId:null==q?void 0:q.templateId,saleChannelId:Q,pageCode:"infoCollection",buttonCode:"EVENT_FREE_multiIssuePolicy"}),ie.newAuth){const{code:t,data:r}=await z(e);"10000"===t&&(ie.newAuth=!1)}else H(e,((e,t)=>{t===j.JUMP_PAGE&&e.orderNo&&u.push(`/baseInsurance/orderDetail?from=free&tenantId=${E}&orderNo=${e.orderNo}&productCode=${b}`)}))}catch(t){}},ce=async()=>await(async()=>{var e;await oe.value.validateForm();const t=null==(e=ie.order.tenantOrderHolder)?void 0:e.verificationCode;if(ie.isValidateCode&&(!t||!M(t)))return P({message:"请输入正确的验证码"}),!1;if(ie.newAuth||!ie.isValidateCode)return!0;const{code:r,data:a}=await U(ie.order.tenantOrderHolder.mobile,t);return!!a})()?(ie.newAuth||0===le.value.length?de():(ie.isOnlyView=!1,ie.showFilePreview=!0),!1):null,ue=()=>{ie.showFilePreview=!1,ie.isOnlyView=!1},fe=()=>{ie.showFilePreview=!1,ie.isOnlyView=!0,de()};return v((()=>{se(),setTimeout((async()=>{W=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),n((()=>ie.order.tenantOrderInsuredList[0]),(e=>{if(g(ie.relationList)||ie.newAuth)return null;const t=ie.relationList[e.relationToHolder]||[];return 1===t.length&&(Z.SELF!==e.relationToHolder?(ie.order.tenantOrderInsuredList[0].certNo=ie.order.tenantOrderInsuredList[0].certNo?ie.order.tenantOrderInsuredList[0].certNo:t[0].cert[0].certNo,ie.order.tenantOrderInsuredList[0].name=ie.order.tenantOrderInsuredList[0].name?ie.order.tenantOrderInsuredList[0].name:t[0].cert[0].certName):ie.isSelfInsure&&(ie.isSelfInsure=!1,ie.order.tenantOrderHolder.certNo=ie.order.tenantOrderHolder.certNo?ie.order.tenantOrderHolder.certNo:t[0].cert[0].certNo,ie.order.tenantOrderHolder.name=ie.order.tenantOrderHolder.name?ie.order.tenantOrderHolder.name:t[0].cert[0].certName)),!1}),{immediate:!0,deep:!0}),A(ne,(([{isIntersecting:e}],t)=>{ie.showBtn=!e})),(e,t)=>{const r=h("van-image"),a=h("van-config-provider");return o(),I(a,{"theme-vars":s(c)},{default:w((()=>{var e,a,n,c;return[l("div",te,[d(V,{url:s(ie).banner},null,8,["url"]),d(ee,{ref_key:"formRef",ref:oe,"is-first":s(ie).newAuth,"insure-detail":s(ie).insureDetail,detail:s(ie).order,colors:s(ie).colors},{default:w((()=>[d(x,{ref_key:"root",ref:ne,class:"submit-btn","is-gradient":!1,text:s(ie).newAuth?"立即领取":"激活保障",onClick:ce},null,8,["text"]),!s(ie).newAuth&&le.value&&le.value.length>0?(o(),I(k,{key:0,"attachement-list":le.value,"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:t[0]||(t[0]=e=>(e=>{ie.activeIndex=e,ie.showFilePreview=!0})(e))},null,8,["attachement-list"])):y("",!0)])),_:1},8,["is-first","insure-detail","detail","colors"]),l("div",re,[(o(!0),i(C,null,O(s(ie).productDesc,((e,t)=>(o(),I(r,{key:t,width:"100%","lazy-load":"",src:e,class:""},null,8,["src"])))),128))]),(null==(a=null==(e=s(ie).detail)?void 0:e.tenantProductInsureVO)?void 0:a.inscribedContent)?(o(),I(D,{key:0,"inscribed-content":null==(c=null==(n=s(ie).detail)?void 0:n.tenantProductInsureVO)?void 0:c.inscribedContent},null,8,["inscribed-content"])):y("",!0),s(ie).showBtn?(o(),i("footer",ae,[d(x,{"is-gradient":!1,text:s(ie).newAuth?"立即领取":"激活保障",onClick:ce},null,8,["text"])])):y("",!0)]),s(ie).showFilePreview&&0!==le.value.length?(o(),I(T,{key:0,show:s(ie).showFilePreview,"onUpdate:show":t[1]||(t[1]=e=>s(ie).showFilePreview=e),"content-list":le.value,"is-only-view":s(ie).isOnlyView,"active-index":s(ie).activeIndex,text:s(ie).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:fe,onOnCloseFilePreview:ue},null,8,["show","content-list","is-only-view","active-index","text"])):y("",!0),s(ie).loading?y("",!0):(o(),I(N,{key:1,"product-detail":s(ie).detail},null,8,["product-detail"]))]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-6a82c978"]]);export{ne as default};
