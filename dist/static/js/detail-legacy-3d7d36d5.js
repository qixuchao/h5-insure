!function(){var e=document.createElement("style");e.innerHTML=":root{--van-image-placeholder-text-color: var(--van-text-color-2);--van-image-placeholder-font-size: var(--van-font-size-md);--van-image-placeholder-background-color: var(--van-background-color);--van-image-loading-icon-size: 32px;--van-image-loading-icon-color: var(--van-gray-4);--van-image-error-icon-size: 32px;--van-image-error-icon-color: var(--van-gray-4)}.van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:var(--van-border-radius-max)}.van-image--round .van-image__img{border-radius:inherit}.van-image--block{display:block}.van-image__img,.van-image__error,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--van-image-placeholder-text-color);font-size:var(--van-image-placeholder-font-size);background:var(--van-image-placeholder-background-color)}.van-image__loading-icon{color:var(--van-image-loading-icon-color);font-size:var(--van-image-loading-icon-size)}.van-image__error-icon{color:var(--van-image-error-icon-color);font-size:var(--van-image-error-icon-size)}:root{--van-image-preview-index-text-color: var(--van-white);--van-image-preview-index-font-size: var(--van-font-size-md);--van-image-preview-index-line-height: var(--van-line-height-md);--van-image-preview-index-text-shadow: 0 1px 1px var(--van-gray-8);--van-image-preview-overlay-background-color: rgba(0, 0, 0, .9);--van-image-preview-close-icon-size: 22px;--van-image-preview-close-icon-color: var(--van-gray-5);--van-image-preview-close-icon-margin: var(--van-padding-md);--van-image-preview-close-icon-z-index: 1}.van-image-preview{position:fixed;top:0;left:0;width:100%;height:100%;background-color:transparent;transform:none}.van-image-preview__swipe{height:100%}.van-image-preview__swipe-item{display:flex;align-items:center;justify-content:center;overflow:hidden}.van-image-preview__cover{position:absolute;top:0;left:0}.van-image-preview__image,.van-image-preview__image-wrap{width:100%;transition-property:transform}.van-image-preview__image--vertical,.van-image-preview__image-wrap--vertical{width:auto;height:100%}.van-image-preview__image img,.van-image-preview__image-wrap img,.van-image-preview__image video,.van-image-preview__image-wrap video{-webkit-user-drag:none}.van-image-preview__image .van-image__error,.van-image-preview__image-wrap .van-image__error{top:30%;height:40%}.van-image-preview__image .van-image__error-icon,.van-image-preview__image-wrap .van-image__error-icon{font-size:36px}.van-image-preview__image .van-image__loading,.van-image-preview__image-wrap .van-image__loading{background-color:transparent}.van-image-preview__index{position:absolute;top:var(--van-padding-md);left:50%;color:var(--van-image-preview-index-text-color);font-size:var(--van-image-preview-index-font-size);line-height:var(--van-image-preview-index-line-height);text-shadow:var(--van-image-preview-index-text-shadow);transform:translate(-50%)}.van-image-preview__overlay{background:var(--van-image-preview-overlay-background-color)}.van-image-preview__close-icon{position:absolute;z-index:var(--van-image-preview-close-icon-z-index);color:var(--van-image-preview-close-icon-color);font-size:var(--van-image-preview-close-icon-size)}.van-image-preview__close-icon--top-left{top:var(--van-image-preview-close-icon-margin);left:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--top-right{top:var(--van-image-preview-close-icon-margin);right:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--bottom-left{bottom:var(--van-image-preview-close-icon-margin);left:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--bottom-right{right:var(--van-image-preview-close-icon-margin);bottom:var(--van-image-preview-close-icon-margin)}.customer-sign-preview{background:#dedede}.customer-sign-preview .van-image__img{object-fit:contain;height:100vw;transform:rotate(270deg) translate(-68%)}.popup-body{width:100%;height:100%}.preview-sign{width:1.33333rem;height:1.33333rem;transform:rotate(270deg);margin-right:.26667rem;background:rgba(222,222,222,.6)}.sign-container-wrap{width:100%;padding-left:2rem;height:100%;display:flex;flex-direction:row-reverse;justify-content:space-between;overflow:hidden}.sign-container-wrap .operate-bar{position:absolute;width:100vh;display:flex;margin:.26667rem;transform:rotate(90deg);padding-left:1.33333rem;justify-content:space-between;align-items:center;transform:rotate(90deg) translate3d(95vh,8.8rem,0);padding:.26667rem;transform-origin:right}.sign-container-wrap .operate-bar .btn{width:3.2rem;margin-right:.26667rem}.sign-container-wrap .com-sign-wrapper{width:100%;height:100%}.sign-container-wrap .com-sign-wrapper .placeholder{transform:rotate(90deg)}.net-sale-detail-wrap{padding:0 var(--zaui-page-border, .4rem) 1.33333rem;background-color:#f4f4f4}.net-sale-detail-wrap .product-name{padding:.26667rem 0 .08rem}.net-sale-detail-wrap .file-list-card{width:100%}.net-sale-detail-wrap .file-list-card .body{padding:0!important}.net-sale-detail-wrap .file-list-card .body .van-cell{align-items:center}.net-sale-detail-wrap .com-card{border-radius:.10667rem;overflow:hidden}.net-sale-detail-wrap .com-card .header{background-color:#f4f4f4;margin:0!important}.net-sale-detail-wrap .com-card .com-cell-wrapper.border:last-child{border:none!important}.net-sale-detail-wrap .common-cell-wrapper{height:1.38667rem;align-items:center;width:100%;display:inline-flex}.net-sale-detail-wrap .common-cell-wrapper .cell-container{align-items:flex-start;justify-content:center;width:100%;font-size:.42667rem}.net-sale-detail-wrap .common-cell-wrapper .cell-container .left-part{color:var(--zaui-text)!important}.net-sale-detail-wrap .common-cell-wrapper .cell-container .right-part{color:#9f9c9f;font-weight:500}.net-sale-detail-wrap .sign-cell{display:flex;align-items:center;justify-content:space-between;padding:.26667rem 0}.net-sale-detail-wrap .sign-cell .sign-wrap{display:flex;align-items:center}.net-sale-detail-wrap .van-cell .van-field__value{align-items:flex-end!important;align-self:center}.net-sale-detail-wrap .van-cell .van-field__value input,.net-sale-detail-wrap .van-cell .van-field__value .van-field__body input,.net-sale-detail-wrap .van-cell .van-field__value .van-field__body .com-radio-btn-wrap,.net-sale-detail-wrap .van-cell .van-field__value .van-field__body .displayValue{color:#9f9c9f;font-weight:500}.pre-notice-wrap{width:100%}.pre-notice-wrap .body{overflow:scroll}.pre-notice-wrap .body .footer{margin-top:.66667rem;position:absolute;bottom:0;width:90%;margin:0 auto;left:0;right:0}.pre-notice-wrap .pre-body{padding:.66667rem .42667rem 0;height:100%}.pre-notice-wrap .pre-body .header{line-height:1;border:none}.pre-notice-wrap .pre-body .header img{height:.58667rem}.pre-notice-wrap .pre-body .header .company-name{margin-top:.26667rem;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:500;color:#333;line-height:.44rem}.pre-notice-wrap .pre-body .content{margin-top:.42667rem;padding:.42667rem;background:#fcf4f0;border-radius:.26667rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:.56rem;border:1px solid #fff1de;border-top-color:#fee6dd}.pre-notice-wrap .pre-body .content span{color:#006afc}.footer{margin-top:.66667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-105aea5b.js","./theme-legacy-28dda1ed.js","./trial-legacy-0515ed7a.js","./nextStep-legacy-b265d0f2.js","./index-legacy-e209a3d2.js","./verify-legacy-37024ab9.js","./product-legacy-35814c42.js","./order-legacy-ccdf8534.js","./core-legacy-c9fe4a94.js","./index-legacy-9de5d3ef.js","./index-legacy-f24dc847.js","./infoCollection-legacy-52f2d859.js","./relativeTime-legacy-b938182c.js","./validator-legacy-5e43cc69.js","./useDicData-legacy-0db923ea.js","./index-legacy-5e1625a2.js","./utils-legacy-60b6ac4f.js","./useStorage-legacy-f27a7283.js","./trial-legacy-56b5fb68.js"],(function(e){"use strict";var a,t,n,i,r,o,l,c,d,v,s,p,g,m,u,f,w,h,_,y,b,x,I,k,j,C,z,O,L,S,E,N,P,T,R;return{setters:[function(e){a=e.h,t=e.r,n=e.k,i=e.l,r=e.y,o=e.z,l=e.s,c=e.Q,d=e.n,v=e.C,s=e.I,p=e.F,g=e.aA,m=e.N,u=e.a8,f=e.j,w=e.m,h=e.A,_=e.E,y=e.T},function(e){b=e.u},function(e){x=e.g,I=e.a,k=e.i},function(e){j=e._,C=e.n},function(e){z=e.q},function(e){O=e.s},function(e){L=e.p},function(e){S=e.O,E=e.a},function(e){N=e.u,P=e.s},function(e){T=e.P},function(e){R=e._},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const V={class:"sign-wrap"},U=["src"],F={class:"popup-body"},A={class:"sign-container-wrap"},D={class:"operate-bar"},H=v(" 请投保人正楷签署您的签名:"),B={class:"btns"},q=v("返回"),G=v("重写"),W=v("确定签字"),Y=a({props:{option:{default:{}},modelValue:{default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const m=t(!1),u=t(),f=t(""),w=t(!0),h=()=>{m.value=!0,u.value?.clear()},_=()=>{g({images:[f.value],className:"customer-sign-preview"})},y=()=>{m.value=!1},b=()=>{u.value?.clear?.()},x=()=>{f.value=u.value?.save(),a("update:modelValue",f.value),m.value=!1};return(e,a)=>{const t=n("van-button"),g=n("van-icon"),I=n("van-popup");return i(),r(p,null,[o("div",V,[f.value?(i(),r("img",{key:0,class:"preview-sign",src:f.value,alt:"",onClick:_},null,8,U)):l("",!0),c(t,{type:"primary",round:"",size:"small",onClick:h},{default:d((()=>[v(s(f.value?"重新签名":"点击签字"),1)])),_:1})]),c(I,{show:m.value,"onUpdate:show":a[1]||(a[1]=e=>m.value=e),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:d((()=>[o("div",F,[o("div",A,[c(z,{ref_key:"signRef",ref:u,placeholder:"请在此处签名",onStroke:a[0]||(a[0]=e=>w.value=!1)},null,512),o("div",D,[o("span",null,[c(g,{name:"info",color:"#ffaf22"}),H]),o("div",B,[c(t,{type:"default",class:"btn",onClick:y},{default:d((()=>[q])),_:1}),c(t,{type:"default",class:"btn",onClick:b},{default:d((()=>[G])),_:1}),c(t,{type:"primary",class:"btn",disabled:w.value,onClick:x},{default:d((()=>[W])),_:1},8,["disabled"])])])])])])),_:1},8,["show"])],64)}}});const M={key:0,class:"net-sale-detail-wrap"},Q={class:"sign-cell"},$=o("div",{class:"sign-label"},"签名",-1),J={class:"footer"},K={class:"footer"};e("default",a({setup(e){const a=b(),v=m(),s=u(),{orderNo:g="2022113021181894998",tenantId:z="9991000001"}=v.query;t();const V=t({}),U=t(!1),F=t({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:z,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:z}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),A=t(!1),D=t({}),H=t(),B=t(),q=t(""),G=t(""),W=t(!1),X=t(!1),Z=t(0),ee=t([]),ae=t(""),te=t("");t({});const ne=()=>{W.value=!1,X.value=!1},ie=async()=>{W.value=!1,X.value=!0,await O("HOLDER",q.value,F.value.id,`${z}`),C(F.value)},re=async()=>{const{data:e,code:a}=await L({productCode:te.value,tenantId:z,withInsureInfo:!0});"10000"===a&&(B.value=e,(()=>{let e={};if(e=G.value?(B.value?.tenantProductInsureVO?.planList||[]).find((e=>e.planCode===G.value))?.attachmentVOList||[]:B.value?.tenantProductInsureVO?.planInsureVO?.attachmentVOList||[],!e)return void(ee.value=[]);const a={2:"richText",3:"link"};ee.value=Object.keys(e).map((t=>(e[t].forEach((e=>{if("1"===e.attachmentType){const a=e.attachmentUri.split("?"),t=a[0].substr(a[0].lastIndexOf(".")+1);e.attachmentType="pdf"===t?"pdf":"picture"}else e.attachmentType=a[e.attachmentType]})),{attachmentName:t,attachmentList:e[t]})))||[]})())},oe=async()=>{const{code:e,data:a}=await x({orderNo:g,tenantId:z});if("10000"===e)if(a.extInfo.buttonCode="EVENT_NETSALE_airSignature",F.value=a,G.value=a.tenantOrderInsuredList[0]?.planCode,te.value=a.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,U.value=!0,(async()=>{const{code:e,data:a}=await k({productCode:te.value,tenantId:z});"10000"===e&&(H.value=a,V.value=a.productFactor)})(),re(),a.orderStatus===E.PAYING){F.value.extInfo.redirectUrl="";const{code:e,data:a}=await I(F.value);"10000"===e&&P(a.paymentUrl)}else a.orderStatus!==E.UNDER_WRITING_SUCCESS&&s.replace({path:"/baseInsurance/orderDetail",query:{...v.query,productCode:te.value}})},le=async()=>{q.value?(X.value=!1,W.value=!0):y("请先签字")};return N(),f((()=>{oe()})),(e,t)=>{const v=n("ProCell"),s=n("ProCard"),g=n("van-cell"),m=n("ProPageWrap"),u=n("ProFilePreview"),f=n("ProPopup"),y=n("van-config-provider");return i(),w(y,{"theme-vars":h(a)},{default:d((()=>[c(m,null,{default:d((()=>[H.value?.productBasicInfoVO?(i(),r("div",M,[c(s,null,{default:d((()=>[c(v,{title:"产品名称",content:H.value?.productBasicInfoVO.productFullName},null,8,["content"])])),_:1}),F.value.id?(i(),w(s,{key:0,"show-line":!1,title:"投保信息"},{default:d((()=>[c(v,{title:"保费",content:F.value.orderAmount+"元"},null,8,["content"]),c(v,{title:"保险期限",content:ae.value},null,8,["content"]),c(v,{title:"起保日期",content:F.value.commencementTime},null,8,["content"]),c(v,{title:"终保日期",content:F.value.expiryDate},null,8,["content"]),c(v,{title:"保单状态",content:h(S)[F.value.orderStatus]},null,8,["content"]),c(v,{title:"订单编号",content:F.value.orderNo},null,8,["content"]),c(v,{title:"房屋地址",content:F.value.tenantOrderHolder?.extInfo?.familyAddress},null,8,["content"]),c(v,{title:"燃气编号",content:F.value.tenantOrderSubjectList?.[0]?.extInfo?.subjectRelatedUserId},null,8,["content"])])),_:1})):l("",!0),U.value?(i(),w(j,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":F.value,"factor-object":V.value,"input-align":"right"},null,8,["form-info","factor-object"])):l("",!0),c(s,{title:"阅读条款合同",class:"file-list-card"},{default:d((()=>[(i(!0),r(p,null,_(ee.value,((e,a)=>(i(),w(g,{key:a,title:e.attachmentName,"is-link":"",onClick:a=>{return t=e.attachmentName,n=e.attachmentList,A.value=!0,void(D.value={title:t,fileContent:n?.[0]});var t,n}},null,8,["title","onClick"])))),128))])),_:1}),c(s,{title:"客户签名"},{default:d((()=>[o("div",Q,[$,c(Y,{modelValue:q.value,"onUpdate:modelValue":t[0]||(t[0]=e=>q.value=e)},null,8,["modelValue"])])])),_:1}),o("div",J,[c(T,{shadow:!1,text:"提 交",onClick:le})])])):l("",!0)])),_:1}),c(f,{show:A.value,"onUpdate:show":t[2]||(t[2]=e=>A.value=e),class:"pre-notice-wrap",title:D.value?.title,position:"bottom",style:{height:"600px"}},{default:d((()=>[c(u,{content:D.value?.fileContent?.attachmentUri,type:D.value?.fileContent?.attachmentType},null,8,["content","type"]),o("div",K,[c(T,{shadow:!1,text:"关闭",onClick:t[1]||(t[1]=e=>A.value=!1)})])])),_:1},8,["show","title"]),W.value&&0!==ee.value.length?(i(),w(R,{key:0,show:W.value,"onUpdate:show":t[3]||(t[3]=e=>W.value=e),"content-list":ee.value,"is-only-view":X.value,"active-index":Z.value,text:X.value?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:ie,onOnCloseFilePreview:ne},null,8,["show","content-list","is-only-view","active-index","text"])):l("",!0)])),_:1},8,["theme-vars"])}}}))}}}))}();
