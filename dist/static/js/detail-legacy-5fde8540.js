!function(){var e=document.createElement("style");e.innerHTML=":root{--van-image-placeholder-text-color: var(--van-text-color-2);--van-image-placeholder-font-size: var(--van-font-size-md);--van-image-placeholder-background-color: var(--van-background-color);--van-image-loading-icon-size: 32px;--van-image-loading-icon-color: var(--van-gray-4);--van-image-error-icon-size: 32px;--van-image-error-icon-color: var(--van-gray-4)}.van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:var(--van-border-radius-max)}.van-image--round .van-image__img{border-radius:inherit}.van-image--block{display:block}.van-image__img,.van-image__error,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--van-image-placeholder-text-color);font-size:var(--van-image-placeholder-font-size);background:var(--van-image-placeholder-background-color)}.van-image__loading-icon{color:var(--van-image-loading-icon-color);font-size:var(--van-image-loading-icon-size)}.van-image__error-icon{color:var(--van-image-error-icon-color);font-size:var(--van-image-error-icon-size)}:root{--van-image-preview-index-text-color: var(--van-white);--van-image-preview-index-font-size: var(--van-font-size-md);--van-image-preview-index-line-height: var(--van-line-height-md);--van-image-preview-index-text-shadow: 0 1px 1px var(--van-gray-8);--van-image-preview-overlay-background-color: rgba(0, 0, 0, .9);--van-image-preview-close-icon-size: 22px;--van-image-preview-close-icon-color: var(--van-gray-5);--van-image-preview-close-icon-margin: var(--van-padding-md);--van-image-preview-close-icon-z-index: 1}.van-image-preview{position:fixed;top:0;left:0;width:100%;height:100%;background-color:transparent;transform:none}.van-image-preview__swipe{height:100%}.van-image-preview__swipe-item{display:flex;align-items:center;justify-content:center;overflow:hidden}.van-image-preview__cover{position:absolute;top:0;left:0}.van-image-preview__image,.van-image-preview__image-wrap{width:100%;transition-property:transform}.van-image-preview__image--vertical,.van-image-preview__image-wrap--vertical{width:auto;height:100%}.van-image-preview__image img,.van-image-preview__image-wrap img,.van-image-preview__image video,.van-image-preview__image-wrap video{-webkit-user-drag:none}.van-image-preview__image .van-image__error,.van-image-preview__image-wrap .van-image__error{top:30%;height:40%}.van-image-preview__image .van-image__error-icon,.van-image-preview__image-wrap .van-image__error-icon{font-size:36px}.van-image-preview__image .van-image__loading,.van-image-preview__image-wrap .van-image__loading{background-color:transparent}.van-image-preview__index{position:absolute;top:var(--van-padding-md);left:50%;color:var(--van-image-preview-index-text-color);font-size:var(--van-image-preview-index-font-size);line-height:var(--van-image-preview-index-line-height);text-shadow:var(--van-image-preview-index-text-shadow);transform:translate(-50%)}.van-image-preview__overlay{background:var(--van-image-preview-overlay-background-color)}.van-image-preview__close-icon{position:absolute;z-index:var(--van-image-preview-close-icon-z-index);color:var(--van-image-preview-close-icon-color);font-size:var(--van-image-preview-close-icon-size)}.van-image-preview__close-icon--top-left{top:var(--van-image-preview-close-icon-margin);left:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--top-right{top:var(--van-image-preview-close-icon-margin);right:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--bottom-left{bottom:var(--van-image-preview-close-icon-margin);left:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--bottom-right{right:var(--van-image-preview-close-icon-margin);bottom:var(--van-image-preview-close-icon-margin)}.customer-sign-preview{background:#dedede}.customer-sign-preview .van-image__img{object-fit:contain;height:100vw;transform:rotate(270deg) translate(-68%)}.popup-body{width:100%;height:100%}.preview-sign{width:1.33333rem;height:1.33333rem;transform:rotate(270deg);margin-right:.26667rem;background:rgba(222,222,222,.6)}.sign-container-wrap{width:100%;padding-left:2rem;height:100%;display:flex;flex-direction:row-reverse;justify-content:space-between;overflow:hidden}.sign-container-wrap .operate-bar{position:absolute;width:100vh;display:flex;margin:.26667rem;transform:rotate(90deg);padding-left:1.33333rem;justify-content:space-between;align-items:center;transform:rotate(90deg) translate3d(95vh,8.8rem,0);padding:.26667rem;transform-origin:right}.sign-container-wrap .operate-bar .btn{width:3.2rem;margin-right:.26667rem}.sign-container-wrap .com-sign-wrapper{width:100%;height:100%}.sign-container-wrap .com-sign-wrapper .placeholder{transform:rotate(90deg)}.net-sale-detail-wrap{padding:0 var(--zaui-page-border, .4rem) 1.33333rem;background-color:#f4f4f4}.net-sale-detail-wrap .product-name{padding:.26667rem 0 .08rem}.net-sale-detail-wrap .file-list-card{width:100%}.net-sale-detail-wrap .file-list-card .body{padding:0!important}.net-sale-detail-wrap .file-list-card .body .van-cell{align-items:center}.net-sale-detail-wrap .com-card{border-radius:.10667rem;overflow:hidden}.net-sale-detail-wrap .com-card .header{background-color:#f4f4f4;margin:0!important}.net-sale-detail-wrap .com-card .com-cell-wrapper.border:last-child{border:none!important}.net-sale-detail-wrap .common-cell-wrapper{height:1.38667rem;align-items:center;width:100%;display:inline-flex}.net-sale-detail-wrap .common-cell-wrapper .cell-container{align-items:flex-start;justify-content:center;width:100%;font-size:.42667rem}.net-sale-detail-wrap .common-cell-wrapper .cell-container .left-part{color:var(--zaui-text)!important}.net-sale-detail-wrap .common-cell-wrapper .cell-container .right-part{color:#9f9c9f;font-weight:500}.net-sale-detail-wrap .sign-cell{display:flex;align-items:center;justify-content:space-between;padding:.26667rem 0}.net-sale-detail-wrap .sign-cell .sign-wrap{display:flex;align-items:center}.net-sale-detail-wrap .van-cell .van-field__value{align-items:flex-end!important;align-self:center}.net-sale-detail-wrap .van-cell .van-field__value input,.net-sale-detail-wrap .van-cell .van-field__value .van-field__body input,.net-sale-detail-wrap .van-cell .van-field__value .van-field__body .com-radio-btn-wrap,.net-sale-detail-wrap .van-cell .van-field__value .van-field__body .displayValue{color:#9f9c9f;font-weight:500}.pre-notice-wrap{width:100%}.pre-notice-wrap .body{overflow:scroll;margin-bottom:2rem}.pre-notice-wrap .body .footer{margin-top:.66667rem;position:absolute;bottom:0;width:100%;background-color:#fff;padding:0 5%;margin:0 auto;left:0;right:0}.pre-notice-wrap .pre-body{padding:.66667rem .42667rem 0;height:100%}.pre-notice-wrap .pre-body .header{line-height:1;border:none}.pre-notice-wrap .pre-body .header img{height:.58667rem}.pre-notice-wrap .pre-body .header .company-name{margin-top:.26667rem;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:500;color:#333;line-height:.44rem}.pre-notice-wrap .pre-body .content{margin-top:.42667rem;padding:.42667rem;background:#fcf4f0;border-radius:.26667rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:.56rem;border:1px solid #fff1de;border-top-color:#fee6dd}.pre-notice-wrap .pre-body .content span{color:#006afc}.footer{margin-top:.66667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-105aea5b.js","./theme-legacy-691dfb9a.js","./trial-legacy-12693f5b.js","./nextStep-legacy-eab9f885.js","./index-legacy-adbd535b.js","./verify-legacy-51413a9a.js","./product-legacy-62fd3993.js","./order-legacy-9cf1bd2d.js","./core-legacy-020eaaa7.js","./index-legacy-e0893b45.js","./index-legacy-3e7225c4.js","./trial-legacy-ccc234f1.js","./infoCollection-legacy-761f7362.js","./relativeTime-legacy-b938182c.js","./validator-legacy-5e43cc69.js","./useDicData-legacy-cbc638be.js","./index-legacy-5e1625a2.js","./utils-legacy-83b3c339.js","./useStorage-legacy-07ca8745.js"],(function(e){"use strict";var a,n,t,i,r,o,l,c,d,s,v,p,g,u,m,f,w,h,_,y,b,x,I,k,C,j,O,z,L,E,P,S,T,N;return{setters:[function(e){a=e.h,n=e.r,t=e.k,i=e.l,r=e.y,o=e.z,l=e.s,c=e.Q,d=e.n,s=e.C,v=e.I,p=e.F,g=e.aA,u=e.N,m=e.a8,f=e.j,w=e.m,h=e.A,_=e.E,y=e.T},function(e){b=e.u},function(e){x=e.g,I=e.i},function(e){k=e._,C=e.n},function(e){j=e.q},function(e){O=e.s},function(e){z=e.p},function(e){L=e.O,E=e.a},function(e){P=e.u},function(e){S=e.P},function(e){T=e._},function(e){N=e.a},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const R={class:"sign-wrap"},V=["src"],F={class:"popup-body"},U={class:"sign-container-wrap"},B={class:"operate-bar"},A=s(" 请投保人正楷签署您的签名:"),D={class:"btns"},H=s("返回"),$=s("重写"),q=s("确定签字"),G=a({props:{option:{default:{}},modelValue:{default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const u=n(!1),m=n(),f=n(""),w=n(!0),h=()=>{u.value=!0,m.value?.clear()},_=()=>{g({images:[f.value],className:"customer-sign-preview"})},y=()=>{u.value=!1},b=()=>{m.value?.clear?.()},x=()=>{f.value=m.value?.save(),a("update:modelValue",f.value),u.value=!1};return(e,a)=>{const n=t("van-button"),g=t("van-icon"),I=t("van-popup");return i(),r(p,null,[o("div",R,[f.value?(i(),r("img",{key:0,class:"preview-sign",src:f.value,alt:"",onClick:_},null,8,V)):l("",!0),c(n,{type:"primary",round:"",size:"small",onClick:h},{default:d((()=>[s(v(f.value?"重新签名":"点击签字"),1)])),_:1})]),c(I,{show:u.value,"onUpdate:show":a[1]||(a[1]=e=>u.value=e),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:d((()=>[o("div",F,[o("div",U,[c(j,{ref_key:"signRef",ref:m,placeholder:"请在此处签名",onStroke:a[0]||(a[0]=e=>w.value=!1)},null,512),o("div",B,[o("span",null,[c(g,{name:"info",color:"#ffaf22"}),A]),o("div",D,[c(n,{type:"default",class:"btn",onClick:y},{default:d((()=>[H])),_:1}),c(n,{type:"default",class:"btn",onClick:b},{default:d((()=>[$])),_:1}),c(n,{type:"primary",class:"btn",disabled:w.value,onClick:x},{default:d((()=>[q])),_:1},8,["disabled"])])])])])])),_:1},8,["show"])],64)}}});const M={key:0,class:"net-sale-detail-wrap"},W={class:"sign-cell"},Q=o("div",{class:"sign-label"},"签名",-1),Y={class:"footer"},Z={class:"footer"};e("default",a({setup(e){const a=b(),s=u(),v=m(),{orderNo:g="2022113021181894998",tenantId:j="9991000001"}=s.query;n();const R=n({}),V=n(!1),F=n({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:j,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:j}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),U=n(!1),B=n({}),A=n(),D=n(),H=n(""),$=n(""),q=n(!1),J=n(!1),K=n(0),X=n([]),ee=n(""),ae=n("");n("");const ne=()=>{q.value=!1,J.value=!1},te=async()=>{q.value=!1,J.value=!0,await O("HOLDER",H.value,F.value.id,`${j}`),C(F.value)},ie=async()=>{const{data:e,code:a}=await z({productCode:ae.value,tenantId:j,withInsureInfo:!0});"10000"===a&&(D.value=e,(()=>{let e={};if(e=$.value?(D.value?.tenantProductInsureVO?.planList||[]).find((e=>e.planCode===$.value))?.attachmentVOList||[]:D.value?.tenantProductInsureVO?.planInsureVO?.attachmentVOList||[],!e)return void(X.value=[]);const a={2:"richText",3:"link"};X.value=Object.keys(e).map((n=>(e[n].forEach((e=>{if("1"===e.attachmentType){const a=e.attachmentUri.split("?"),n=a[0].substr(a[0].lastIndexOf(".")+1);e.attachmentType="pdf"===n?"pdf":"picture"}else e.attachmentType=a[e.attachmentType]})),{attachmentName:n,attachmentList:e[n]})))||[]})())},re=async()=>{const{code:e,data:a}=await x({orderNo:g,tenantId:j});"10000"===e&&(a.extInfo.buttonCode="EVENT_NETSALE_airSignature",F.value=a,$.value=a.tenantOrderInsuredList[0]?.planCode,ae.value=a.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,V.value=!0,(e=>{const a=e.find((e=>1===e.riskType));var n,t;ee.value=(n=a.insurancePeriodValue,-1!==(t=N[a.insurancePeriodType]).indexOf("$")?t.replace("$",`${n}`):`${n||""}${t}`)})(a.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList||[]),(async()=>{const{code:e,data:a}=await I({productCode:ae.value,tenantId:j});"10000"===e&&(A.value=a,R.value=a.productFactor)})(),ie(),a.orderStatus!==E.UNDER_WRITING_SUCCESS&&v.replace({path:"/baseInsurance/orderDetail",query:{...s.query,productCode:ae.value,ISEE_BIZ:a.extInfo.iseeBizNo}}))},oe=async()=>{H.value?(J.value=!1,q.value=!0):y("请先签字")};return P(),f((()=>{re()})),(e,n)=>{const s=t("ProCell"),v=t("ProCard"),g=t("van-cell"),u=t("ProPageWrap"),m=t("ProFilePreview"),f=t("ProPopup"),y=t("van-config-provider");return i(),w(y,{"theme-vars":h(a)},{default:d((()=>[c(u,null,{default:d((()=>[A.value?.productBasicInfoVO?(i(),r("div",M,[c(v,null,{default:d((()=>[c(s,{title:"产品名称",content:A.value?.productBasicInfoVO.productFullName},null,8,["content"])])),_:1}),F.value.id?(i(),w(v,{key:0,"show-line":!1,title:"投保信息"},{default:d((()=>[c(s,{title:"保费",content:F.value.orderAmount+"元"},null,8,["content"]),c(s,{title:"保险期限",content:ee.value},null,8,["content"]),c(s,{title:"起保日期",content:F.value.commencementTime},null,8,["content"]),c(s,{title:"终保日期",content:F.value.expiryDate},null,8,["content"]),c(s,{title:"保单状态",content:h(L)[F.value.orderStatus]},null,8,["content"]),c(s,{title:"订单编号",content:F.value.orderNo},null,8,["content"]),c(s,{title:"房屋地址",content:F.value.tenantOrderHolder?.extInfo?.familyAddress},null,8,["content"]),c(s,{title:"燃气编号",content:F.value.tenantOrderSubjectList?.[0]?.extInfo?.subjectRelatedUserId},null,8,["content"])])),_:1})):l("",!0),V.value?(i(),w(k,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":F.value,"factor-object":R.value,"input-align":"right"},null,8,["form-info","factor-object"])):l("",!0),c(v,{title:"阅读条款合同",class:"file-list-card"},{default:d((()=>[(i(!0),r(p,null,_(X.value,((e,a)=>(i(),w(g,{key:a,title:e.attachmentName,"is-link":"",onClick:a=>{return n=e.attachmentName,t=e.attachmentList,U.value=!0,void(B.value={title:n,fileContent:t?.[0]});var n,t}},null,8,["title","onClick"])))),128))])),_:1}),c(v,{title:"客户签名"},{default:d((()=>[o("div",W,[Q,c(G,{modelValue:H.value,"onUpdate:modelValue":n[0]||(n[0]=e=>H.value=e)},null,8,["modelValue"])])])),_:1}),o("div",Y,[c(S,{shadow:!1,text:"提 交",onClick:oe})])])):l("",!0)])),_:1}),c(f,{show:U.value,"onUpdate:show":n[2]||(n[2]=e=>U.value=e),class:"pre-notice-wrap",title:B.value?.title,position:"bottom",style:{height:"600px"}},{default:d((()=>[c(m,{content:B.value?.fileContent?.attachmentUri,type:B.value?.fileContent?.attachmentType},null,8,["content","type"]),o("div",Z,[c(S,{shadow:!1,text:"关闭",onClick:n[1]||(n[1]=e=>U.value=!1)})])])),_:1},8,["show","title"]),q.value&&0!==X.value.length?(i(),w(T,{key:0,show:q.value,"onUpdate:show":n[3]||(n[3]=e=>q.value=e),"content-list":X.value,"is-only-view":J.value,"active-index":K.value,text:J.value?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:te,onOnCloseFilePreview:ne,onOnCloseFilePreviewByMask:n[4]||(n[4]=e=>q.value=!1)},null,8,["show","content-list","is-only-view","active-index","text"])):l("",!0)])),_:1},8,["theme-vars"])}}}))}}}))}();
