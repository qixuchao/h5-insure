import{_ as e,d as a,bY as t,bZ as n,c9 as l,b_ as s,u as r,a as o,r as i,J as c,E as d,G as u,c as v,h as p,g as f,f as b,a7 as m,e as h,k as y,j as _,w as g,b1 as j,t as A,n as w,F as x,T as I,ap as k,V as O,ag as D,X as E,Y as P,bG as F}from"./index-24ce1811.js";import{t as S,u as U,i as B,v as C,c as N,k as V,g as L,a as R,w as M,x as T,M as z,y as $,l as G,r as H,s as J,h as W,d as K,j as Q,o as Y,S as q,z as Z}from"./keysIn-b3061da8.js";import{r as X,b as ee,S as ae,i as te,a as ne}from"./isObjectLike-d00d103b.js";import{p as le}from"./product-c97e3eaa.js";import{d as se,i as re,g as oe,s as ie,e as ce,E as de}from"./trial-d2429143.js";import{a as ue,t as ve,c as pe,s as fe,b as be,d as me}from"./utils-84cecad6.js";import{a as he}from"./order-5f899f74.js";import{_ as ye}from"./index-af94e750.js";import{_ as _e}from"./index-b9786b36.js";import{P as ge}from"./index-01a3a796.js";import"./pdfh5-008ca364.js";import"./infoCollection-5b4092b6.js";import"./trial-5866b571.js";import"./relativeTime-fde2a46e.js";import"./validator-5a13dc82.js";import"./useDicData-723114fd.js";var je=S(Object.keys,Object),Ae=Object.prototype.hasOwnProperty;function we(e){return B(e)?C(e):function(e){if(!U(e))return je(e);var a=[];for(var t in Object(e))Ae.call(e,t)&&"constructor"!=t&&a.push(t);return a}(e)}function xe(){return[]}var Ie=Object.prototype.propertyIsEnumerable,ke=Object.getOwnPropertySymbols,Oe=ke?function(e){return null==e?[]:(e=Object(e),function(e,a){for(var t=-1,n=null==e?0:e.length,l=0,s=[];++t<n;){var r=e[t];a(r,t,e)&&(s[l++]=r)}return s}(ke(e),(function(a){return Ie.call(e,a)})))}:xe;function De(e,a){for(var t=-1,n=a.length,l=e.length;++t<n;)e[l+t]=a[t];return e}var Ee=Object.getOwnPropertySymbols?function(e){for(var a=[];e;)De(a,Oe(e)),e=L(e);return a}:xe;function Pe(e,a,t){var n=a(e);return R(e)?n:De(n,t(e))}function Fe(e){return Pe(e,we,Oe)}function Se(e){return Pe(e,V,Ee)}var Ue=M(X,"DataView"),Be=M(X,"Promise"),Ce=M(X,"Set"),Ne=M(X,"WeakMap"),Ve=T(Ue),Le=T(z),Re=T(Be),Me=T(Ce),Te=T(Ne),ze=ee;(Ue&&"[object DataView]"!=ze(new Ue(new ArrayBuffer(1)))||z&&"[object Map]"!=ze(new z)||Be&&"[object Promise]"!=ze(Be.resolve())||Ce&&"[object Set]"!=ze(new Ce)||Ne&&"[object WeakMap]"!=ze(new Ne))&&(ze=function(e){var a=ee(e),t="[object Object]"==a?e.constructor:void 0,n=t?T(t):"";if(n)switch(n){case Ve:return"[object DataView]";case Le:return"[object Map]";case Re:return"[object Promise]";case Me:return"[object Set]";case Te:return"[object WeakMap]"}return a});var $e=ze,Ge=Object.prototype.hasOwnProperty;var He=/\w*$/;var Je=ae?ae.prototype:void 0,We=Je?Je.valueOf:void 0;function Ke(e,a,t){var n,l,s,r=e.constructor;switch(a){case"[object ArrayBuffer]":return $(e);case"[object Boolean]":case"[object Date]":return new r(+e);case"[object DataView]":return function(e,a){var t=a?$(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}(e,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return G(e,t);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(e);case"[object RegExp]":return(s=new(l=e).constructor(l.source,He.exec(l))).lastIndex=l.lastIndex,s;case"[object Symbol]":return n=e,We?Object(We.call(n)):{}}}var Qe=H&&H.isMap,Ye=Qe?J(Qe):function(e){return te(e)&&"[object Map]"==$e(e)};var qe=H&&H.isSet,Ze=qe?J(qe):function(e){return te(e)&&"[object Set]"==$e(e)},Xe={};function ea(e,a,t,n,l,s){var r,o=1&a,i=2&a,c=4&a;if(t&&(r=l?t(e,n,l,s):t(e)),void 0!==r)return r;if(!ne(e))return e;var d=R(e);if(d){if(r=function(e){var a=e.length,t=new e.constructor(a);return a&&"string"==typeof e[0]&&Ge.call(e,"index")&&(t.index=e.index,t.input=e.input),t}(e),!o)return W(e,r)}else{var u=$e(e),v="[object Function]"==u||"[object GeneratorFunction]"==u;if(K(e))return Q(e,o);if("[object Object]"==u||"[object Arguments]"==u||v&&!l){if(r=i||v?{}:Y(e),!o)return i?function(e,a){return N(e,Ee(e),a)}(e,function(e,a){return e&&N(a,V(a),e)}(r,e)):function(e,a){return N(e,Oe(e),a)}(e,function(e,a){return e&&N(a,we(a),e)}(r,e))}else{if(!Xe[u])return l?e:{};r=Ke(e,u,o)}}s||(s=new q);var p=s.get(e);if(p)return p;s.set(e,r),Ze(e)?e.forEach((function(n){r.add(ea(n,a,t,n,e,s))})):Ye(e)&&e.forEach((function(n,l){r.set(l,ea(n,a,t,l,e,s))}));var f=d?void 0:(c?i?Se:Fe:i?V:we)(e);return function(e,a){for(var t=-1,n=null==e?0:e.length;++t<n&&!1!==a(e[t],t,e););}(f||e,(function(n,l){f&&(n=e[l=n]),Z(r,l,ea(n,a,t,l,e,s))})),r}Xe["[object Arguments]"]=Xe["[object Array]"]=Xe["[object ArrayBuffer]"]=Xe["[object DataView]"]=Xe["[object Boolean]"]=Xe["[object Date]"]=Xe["[object Float32Array]"]=Xe["[object Float64Array]"]=Xe["[object Int8Array]"]=Xe["[object Int16Array]"]=Xe["[object Int32Array]"]=Xe["[object Map]"]=Xe["[object Number]"]=Xe["[object Object]"]=Xe["[object RegExp]"]=Xe["[object Set]"]=Xe["[object String]"]=Xe["[object Symbol]"]=Xe["[object Uint8Array]"]=Xe["[object Uint8ClampedArray]"]=Xe["[object Uint16Array]"]=Xe["[object Uint32Array]"]=!0,Xe["[object Error]"]=Xe["[object Function]"]=Xe["[object WeakMap]"]=!1;const aa=e=>(E("data-v-27db7f1e"),e=e(),P(),e),ta={key:0},na=[aa((()=>_("div",{class:"__skeleton_upgrade_content__"},[_("div",{class:"van-config-provider router-view sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px"}},[_("div",{class:"page-upgrade-product-detail"},[_("div",{class:"van-image banner",style:{width:"375px",height:"338px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[_("img",{class:"van-image__img","data-src":"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/common/20230131/7f6e6d1d087a4ced909e9daa18754592/%E5%8D%87%E7%BA%A7%E4%BA%A7%E5%93%81.png?Expires=1676282742&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=B0kGphaHBL5OfHyaMj1ktm9FJvM%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),_("div",{class:"page-info-wrapper"},[_("div",{class:"com-form-wrapper","show-error":"","show-error-message":"false"},[_("form",{class:"van-form"},[_("div",{class:"com-card"},[_("div",{class:"com-card-wrap"},[_("div",{class:"header"},[_("div",{class:"title-wrapper"},[_("div",{class:"title showIcon"},[_("span",{class:"sk-text",style:{"--fp":"33.33%","--sp":"66.67%","--lh":"45px"}},"投保信息")])])]),_("div",{class:"body",style:{height:"auto"}},[_("div",{class:"com-personal-wrapper"},[_("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[_("div",{class:"van-cell__title van-field__label van-field__label--left"},[_("label",{id:"van-field-2-label",for:"van-field-2-input"},[_("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"姓名")])]),_("div",{class:"van-cell__value van-field__value"},[_("div",{class:"van-field__body"},[_("input",{type:"text",id:"van-field-2-input",name:"insure_name",class:"van-field__control van-field__control--right sk-input",readonly:"",placeholder:"请输入姓名",autocomplete:"off","aria-labelledby":"van-field-2-label"}),_("div",{class:"van-field__right-icon"})])])]),_("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[_("div",{class:"van-cell__title van-field__label van-field__label--left"},[_("label",{id:"van-field-3-label",for:"van-field-3-input"},[_("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"身份证号")])]),_("div",{class:"van-cell__value van-field__value"},[_("div",{class:"van-field__body"},[_("input",{type:"text",id:"van-field-3-input",name:"insure_certNo",class:"van-field__control van-field__control--right sk-input",readonly:"",placeholder:"请输入身份证号",autocomplete:"off","aria-labelledby":"van-field-3-label"}),_("div",{class:"van-field__right-icon"})])])])]),_("div",{class:"van-cell van-field van-field--label-left com-pro-field"},[_("div",{class:"van-cell__title van-field__label van-field__label--left"},[_("label",{id:"van-field-4-label",for:"van-field-4-input"},[_("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"社保")])]),_("div",{class:"van-cell__value van-field__value"},[_("div",{class:"van-field__body"},[_("div",{class:"van-field__control van-field__control--right van-field__control--custom"},[_("div",{class:"com-radio-btn-wrap"},[_("div",{class:"radio-btn"},[_("div",{class:"btn-wrapper"},[_("div",{class:"com-check-btn activated-disabled"},[_("span",{class:"sk-text",style:{"--fp":"22.92%","--sp":"77.08%","--lh":"24px"}}," 有（含农村合作医疗）")])]),_("div",{class:"btn-wrapper"},[_("div",{class:"com-check-btn disabled sk-border"},[_("span",{class:"sk-text",style:{"--fp":"22.92%","--sp":"77.08%","--lh":"24px"}}," 无")])])])])]),_("div",{class:"van-field__right-icon"})])])])])])])])])]),_("div",{class:"van-cell van-field com-pro-field"},[_("div",{class:"van-cell__title van-field__label"},[_("label",{id:"van-field-5-label",for:"van-field-5-input"},[_("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"21px"}},"每月保费")])]),_("div",{class:"van-cell__value van-field__value"},[_("div",{class:"van-field__body"},[_("input",{type:"text",id:"van-field-5-input",name:"insuredBeneficiaryType",class:"van-field__control van-field__control--right sk-input",placeholder:"请输入每月保费",autocomplete:"off","aria-labelledby":"van-field-5-label"}),_("div",{class:"van-field__right-icon"})])])]),_("div",{class:"com-attachment-list attachment-bg"},[_("span",null,[_("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}},"请阅读")]),_("span",{class:"attachment-item"},[_("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《责任免除说明书》 ")]),_("span",{class:"attachment-item"},[_("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《投保须知》 ")]),_("span",{class:"attachment-item"},[_("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《重要提示》 ")]),_("span",{class:"attachment-item"},[_("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《特别约定》 ")]),_("span",{class:"attachment-item"},[_("span",{class:"sk-text",style:{"--fp":"16.67%","--sp":"83.33%","--lh":"18px"}}," 《条款》 ")])]),_("div",{class:"footer-area sk-border"},[_("div",{class:"upgrade-submit"},[_("div",{class:"price"},[_("span",{class:"num"},[_("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"18.200139999999998px"}},"49")]),_("span",{class:"unit"},[_("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"18.200139999999998px"}},"元/月")])]),_("div",{class:"pro-shadow-button right"},[_("button",{type:"button",class:"van-button van-button--primary van-button--normal van-button--block van-button--round shadow-button sk-button"},[_("div",{class:"van-button__content"},[_("span",{class:"van-button__text"},[_("span",{class:"sk-text",style:{"--fp":"8.33%","--sp":"91.67%","--lh":"19.2002px"}},"升级保障")])])])])])])])])],-1)))],la={key:1,"data-skeleton-root":"UPGRADE",class:"page-upgrade-product-detail"},sa={class:"footer-area"},ra=aa((()=>_("span",null,"分享",-1))),oa={class:"upgrade-submit"},ia={class:"price"},ca={class:"num"},da=aa((()=>_("span",{class:"unit"},"元/月",-1)));var ua=e(a({__name:"upgrade",setup(e){const a=t((()=>n((()=>import("./index-d2699f67.js")),["static/js/index-d2699f67.js","static/css/index-b9ba3011.css","static/js/index-24ce1811.js","static/css/index-6495afd9.css","static/js/pdfh5-008ca364.js"]))),E=t((()=>n((()=>import("./index-09f66342.js")),["static/js/index-09f66342.js","static/css/index-ea588f10.css","static/js/index-24ce1811.js","static/css/index-6495afd9.css","static/js/pdfh5-008ca364.js","static/js/theme-65292714.js","static/js/index-01a3a796.js","static/css/index-85f26bb0.css","static/js/utils-84cecad6.js","static/js/infoCollection-5b4092b6.js","static/js/trial-5866b571.js"]))),P=l(),S=s(),U=r(),B=o(),{productCode:C="",orderNo:N="",agencyCode:V="",tenantId:L="",saleChannelId:R="",extraInfo:M}=B.query;let T={};try{T=JSON.parse(decodeURIComponent(M))}catch(Ee){console.log(Ee)}const{openId:z,indirectCode:$="",agentCode:G}=T,H=i(!0),J=i(),W=i();i();const K=i(),Q=i(),Y=i(),q=i(),Z=i(0),X=i();i(!1),i(!1),i(0);const ee=i(""),ae=i(!0),te=i(),ne=c({isOnlyView:!0,activeIndex:0,showFilePreview:!1}),je=i({imgUrl:"",desc:"",title:"",link:window.location.href}),Ae=()=>{ne.showFilePreview=!1,ne.isOnlyView=!0},we=d((()=>`${Z.value}元/月`)),xe=e=>{var a;const t=null==(a=e.tenantOrderPaymentInfoList)?void 0:a.pop();return t?t.paymentMethod:3},Ie=async e=>{const a=be({tenantId:L,premium:Z.value,orderDetail:q.value,productDetail:Q.value,insureDetail:Y.value,successJumpUrl:`${F}/baseInsurance/orderDetail?tenantId=${L}&orderNo=${ee.value}`,iseeBizNo:J.value}),t=await de({orderNo:e,...a}),{code:n,data:l}=t;"10000"===n&&U.push(`/baseInsurance/orderDetail?tenantId=${L}&orderNo=${ee.value}`)},ke=async e=>{try{I.loading({forbidClick:!0,message:"升级中",duration:0});const e=await(async()=>{var e,a,t;const n=ue({tenantId:L,templateId:q.value.tenantOrderInsuredList[0].templateId,applicationNo:q.value.applicationNo,policyNo:q.value.policyNo,saleUserId:G,saleChannelId:q.value.saleChannelId,orderStatus:he.UP_PROCESSING,orderTopStatus:"-1",orderCategory:2,detail:Q.value,insureDetail:Y.value,paymentMethod:xe(q.value),renewalDK:null==(a=null==(e=q.value.extInfo)?void 0:e.extraInfo)?void 0:a.renewalDK,iseeBizNo:J.value,expiryDate:q.value.expiryDate,successJumpUrl:"",premium:Z.value,holder:{...q.value.tenantOrderHolder,extInfo:te.value,socialFlag:te.value.hasSocialInsurance},insured:{...q.value.tenantOrderInsuredList[0],socialFlag:q.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance},tenantOrderRiskList:ve({tenantId:L,riskList:pe(fe(Y.value.productRiskVoList[0].riskDetailVOList),Q.value),riskPremium:{},productId:null==(t=Q.value)?void 0:t.id},!0)}),l=await ie(n),{code:s,data:r}=l;return"10000"===s?r.data:""})();await se({tenantId:L,applicationNo:q.value.applicationNo});if(ee.value=e,console.log(ee.value,"orderNoUp.value===",e),X.value){const e=encodeURIComponent(encodeURIComponent(window.location.href)),a=`${X.value}&failUrl=${e}`;window.location.href=a,I.clear()}else Ie(e)}catch(a){console.log(a),I.clear()}},Oe=async e=>{ke()},De=()=>{const e=le({productCode:C,withInsureInfo:!0,tenantId:L}),a=re({productCode:C}),t=oe({orderNo:N,tenantId:L});Promise.all([e,a,t]).then((([e,a,t])=>{var n,l,s;if("10000"===e.code){Q.value=e.data,document.title=(null==(n=e.data)?void 0:n.productFullName)||"";const{title:a,desc:t,image:r}=(null==(l=e.data)?void 0:l.showConfigVO)||{};s={title:a,desc:t,image:r},je.value={desc:s.desc||"你好，这里是描述",imgUrl:s.image,title:s.title,link:window.location.href}}"10000"===a.code&&(Y.value=a.data,["1","2","3"].forEach((e=>{var a,t,n;Y.value.productFactor[e]=(null==(t=null==(a=Y.value.productFactor)?void 0:a[e])?void 0:t.some((e=>1===e.isDisplay)))?null==(n=Y.value.productFactor)?void 0:n[e]:[]}))),"10000"===t.code&&(q.value=t.data,te.value=ea(q.value.tenantOrderHolder.extInfo,5),q.value.tenantOrderHolder.extInfo=q.value.tenantOrderInsuredList[0].extInfo),H.value=!1,(async()=>{I.loading({forbidClick:!0,duration:0,message:"试算中"});try{const e=be({tenantId:L,premium:Z.value,orderDetail:q.value,productDetail:Q.value,insureDetail:Y.value,successJumpUrl:""},me),a=await ce(e),{code:t,data:n,message:l}=a;"10000"===t?(Z.value=n.installmentPremium,X.value=n.signUrl,ae.value=!1):"已升级成功"===l&&(ae.value=!0)}catch(e){console.log(e),ae.value=!0}finally{setTimeout((()=>{I.clear()}),ae.value?2e3:0)}})(),(()=>{var e;let a={};if(a=(null==(e=Q.value.tenantProductInsureVO.planInsureVO)?void 0:e.attachmentVOList)||[],!a)return void(W.value=[]);const t={2:"richText",3:"link"};W.value=Object.keys(a).map((e=>(a[e].forEach((e=>{if("1"===e.attachmentType){const a=e.attachmentUri.split("?"),t=a[0].substr(a[0].lastIndexOf(".")+1);e.attachmentType="pdf"===t?"pdf":"picture"}else e.attachmentType=t[e.attachmentType]})),{attachmentName:e,attachmentList:a[e]})))||[]})()}))};return u((()=>{De(),setTimeout((async()=>{J.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{var n,l,s;const r=k,o=O,i=D;return v(),p(x,null,[f(H)?(v(),p("div",ta,na)):(v(),p("div",la,[b(_e,{"data-skeleton-type":"img",url:null==(l=null==(n=f(Q))?void 0:n.tenantProductInsureVO)?void 0:l.banner[0]},null,8,["url"]),b(ye,{ref_key:"formRef",ref:K,"title-collection":{HOLDER:"投保人信息",INSURER:"投保信息",BENEFICIARY:"投保人信息"},"need-desensitize":"","is-view":"","input-align":"right","form-info":f(q),"factor-object":null==(s=f(Y))?void 0:s.productFactor},null,8,["form-info","factor-object"]),b(r,{modelValue:f(we),"onUpdate:modelValue":t[0]||(t[0]=e=>m(we)?we.value=e:null),"input-align":"right",label:"每月保费",name:"insuredBeneficiaryType"},null,8,["modelValue"]),f(W)&&f(W).length>0?(v(),h(f(a),{key:0,class:"attachment-bg","attachement-list":f(W),"has-bg-color":!1,"pre-text":"请阅读",onPreviewFile:t[1]||(t[1]=e=>(e=>{ne.isOnlyView=!0,ne.activeIndex=e,ne.showFilePreview=!0})(e))},null,8,["attachement-list"])):y("",!0),_("div",sa,[f(P)?(v(),h(i,j({key:0},f(je),{class:"share-btn"}),{default:g((()=>[b(o,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),ra])),_:1},16)):y("",!0),_("div",oa,[_("div",ia,[_("span",ca,A(f(Z)),1),da]),b(ge,{shadow:!1,disabled:f(ae),"theme-vars":f(S),class:"right",text:"升级保障",onClick:Oe},{default:g((()=>[w(A("升级保障"))])),_:1},8,["disabled","theme-vars"])])])])),f(ne).showFilePreview&&0!==f(W).length?(v(),h(f(E),{key:2,show:f(ne).showFilePreview,"onUpdate:show":t[2]||(t[2]=e=>f(ne).showFilePreview=e),"content-list":f(W),"is-only-view":f(ne).isOnlyView,"active-index":f(ne).activeIndex,text:f(ne).isOnlyView?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:ke,onOnCloseFilePreview:Ae},null,8,["show","content-list","is-only-view","active-index","text"])):y("",!0)],64)}}}),[["__scopeId","data-v-27db7f1e"]]);export{ua as default};
