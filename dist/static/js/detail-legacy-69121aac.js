!function(){var e=document.createElement("style");e.innerHTML=":root{--van-image-placeholder-text-color: var(--van-text-color-2);--van-image-placeholder-font-size: var(--van-font-size-md);--van-image-placeholder-background-color: var(--van-background-color);--van-image-loading-icon-size: 32px;--van-image-loading-icon-color: var(--van-gray-4);--van-image-error-icon-size: 32px;--van-image-error-icon-color: var(--van-gray-4)}.van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:var(--van-border-radius-max)}.van-image--round .van-image__img{border-radius:inherit}.van-image--block{display:block}.van-image__img,.van-image__error,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--van-image-placeholder-text-color);font-size:var(--van-image-placeholder-font-size);background:var(--van-image-placeholder-background-color)}.van-image__loading-icon{color:var(--van-image-loading-icon-color);font-size:var(--van-image-loading-icon-size)}.van-image__error-icon{color:var(--van-image-error-icon-color);font-size:var(--van-image-error-icon-size)}:root{--van-image-preview-index-text-color: var(--van-white);--van-image-preview-index-font-size: var(--van-font-size-md);--van-image-preview-index-line-height: var(--van-line-height-md);--van-image-preview-index-text-shadow: 0 1px 1px var(--van-gray-8);--van-image-preview-overlay-background-color: rgba(0, 0, 0, .9);--van-image-preview-close-icon-size: 22px;--van-image-preview-close-icon-color: var(--van-gray-5);--van-image-preview-close-icon-margin: var(--van-padding-md);--van-image-preview-close-icon-z-index: 1}.van-image-preview{position:fixed;top:0;left:0;width:100%;height:100%;background-color:transparent;transform:none}.van-image-preview__swipe{height:100%}.van-image-preview__swipe-item{display:flex;align-items:center;justify-content:center;overflow:hidden}.van-image-preview__cover{position:absolute;top:0;left:0}.van-image-preview__image,.van-image-preview__image-wrap{width:100%;transition-property:transform}.van-image-preview__image--vertical,.van-image-preview__image-wrap--vertical{width:auto;height:100%}.van-image-preview__image img,.van-image-preview__image-wrap img,.van-image-preview__image video,.van-image-preview__image-wrap video{-webkit-user-drag:none}.van-image-preview__image .van-image__error,.van-image-preview__image-wrap .van-image__error{top:30%;height:40%}.van-image-preview__image .van-image__error-icon,.van-image-preview__image-wrap .van-image__error-icon{font-size:36px}.van-image-preview__image .van-image__loading,.van-image-preview__image-wrap .van-image__loading{background-color:transparent}.van-image-preview__index{position:absolute;top:var(--van-padding-md);left:50%;color:var(--van-image-preview-index-text-color);font-size:var(--van-image-preview-index-font-size);line-height:var(--van-image-preview-index-line-height);text-shadow:var(--van-image-preview-index-text-shadow);transform:translate(-50%)}.van-image-preview__overlay{background:var(--van-image-preview-overlay-background-color)}.van-image-preview__close-icon{position:absolute;z-index:var(--van-image-preview-close-icon-z-index);color:var(--van-image-preview-close-icon-color);font-size:var(--van-image-preview-close-icon-size)}.van-image-preview__close-icon--top-left{top:var(--van-image-preview-close-icon-margin);left:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--top-right{top:var(--van-image-preview-close-icon-margin);right:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--bottom-left{bottom:var(--van-image-preview-close-icon-margin);left:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--bottom-right{right:var(--van-image-preview-close-icon-margin);bottom:var(--van-image-preview-close-icon-margin)}.customer-sign-preview{background:rgb(222,222,222)}.customer-sign-preview .van-image__img{object-fit:contain;height:100vw;transform:rotate(270deg) translate(-68%)}.popup-body{width:100%;height:100%}.preview-sign{width:1.33333rem;height:1.33333rem;transform:rotate(270deg);margin-right:.26667rem;background:rgba(222,222,222,.6)}.sign-container-wrap{width:100%;padding-left:2rem;height:100%;display:flex;flex-direction:row-reverse;justify-content:space-between;overflow:hidden}.sign-container-wrap .operate-bar{position:absolute;width:100vh;display:flex;margin:.26667rem;transform:rotate(90deg);padding-left:1.33333rem;justify-content:space-between;align-items:center;transform:rotate(90deg) translate3d(95vh,8.8rem,0);padding:.26667rem;transform-origin:right}.sign-container-wrap .operate-bar .btn{width:3.2rem;margin-right:.26667rem}.sign-container-wrap .com-sign-wrapper{width:100%;height:100%}.sign-container-wrap .com-sign-wrapper .placeholder{transform:rotate(90deg)}.net-sale-detail-wrap{padding:0 var(--zaui-page-border, .4rem) 1.33333rem;background-color:#f4f4f4}.net-sale-detail-wrap .product-name{padding:.26667rem 0 .08rem}.net-sale-detail-wrap .insured-info{padding:.2rem 0}.net-sale-detail-wrap .file-list-card{width:100%}.net-sale-detail-wrap .file-list-card .body{padding:0!important}.net-sale-detail-wrap .file-list-card .body .van-cell{align-items:center}.net-sale-detail-wrap .com-card{border-radius:.10667rem;overflow:hidden}.net-sale-detail-wrap .com-card .header{background-color:#f4f4f4;margin:0!important}.net-sale-detail-wrap .com-card .com-cell-wrapper.border:last-child{border:none!important}.net-sale-detail-wrap .common-cell-wrapper{height:1.38667rem;align-items:center;width:100%;display:inline-flex}.net-sale-detail-wrap .common-cell-wrapper .cell-container{align-items:flex-start;justify-content:center;width:100%;font-size:.42667rem}.net-sale-detail-wrap .common-cell-wrapper .cell-container .left-part{color:var(--zaui-text)!important}.net-sale-detail-wrap .common-cell-wrapper .cell-container .right-part{color:#9f9c9f;font-weight:500}.net-sale-detail-wrap .sign-cell{display:flex;align-items:center;justify-content:space-between;padding:.26667rem 0}.net-sale-detail-wrap .sign-cell .sign-wrap{display:flex;align-items:center}.net-sale-detail-wrap .van-cell .van-field__value{align-items:flex-end!important;align-self:center}.net-sale-detail-wrap .van-cell .van-field__value input,.net-sale-detail-wrap .van-cell .van-field__value .van-field__body input,.net-sale-detail-wrap .van-cell .van-field__value .van-field__body .com-radio-btn-wrap,.net-sale-detail-wrap .van-cell .van-field__value .van-field__body .displayValue{color:#9f9c9f;font-weight:500}.pre-notice-wrap{width:100%}.pre-notice-wrap .body{overflow:scroll}.pre-notice-wrap .body .footer{margin-top:.66667rem;position:absolute;bottom:0;width:100%;background-color:#fff;padding:.26667rem 5% 0;margin:0 auto;left:0;right:0}.pre-notice-wrap .pre-body{padding:.66667rem .42667rem 0;height:100%}.pre-notice-wrap .pre-body .header{line-height:1;border:none}.pre-notice-wrap .pre-body .header img{height:.58667rem}.pre-notice-wrap .pre-body .header .company-name{margin-top:.26667rem;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:500;color:#333;line-height:.44rem}.pre-notice-wrap .pre-body .content{margin-top:.42667rem;padding:.42667rem;background:#fcf4f0;border-radius:.26667rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:.56rem;border:1px solid #fff1de;border-top-color:#fee6dd}.pre-notice-wrap .pre-body .content span{color:#006afc}.footer{margin-top:.66667rem}\n",document.head.appendChild(e),System.register(["./index-legacy-dee7ea74.js","./theme-legacy-14f266cb.js","./trial-legacy-8406851d.js","./index-legacy-162943b3.js","./verify-legacy-ceab1769.js","./nextStep-legacy-c834cf7b.js","./product-legacy-c501a716.js","./order-legacy-444cc39e.js","./index-legacy-4059d55b.js","./index-legacy-dba660a1.js","./useDicData-legacy-8b445045.js","./trial-legacy-e0b107af.js","./pdfh5-legacy-9f98dc45.js","./infoCollection-legacy-aff17138.js","./relativeTime-legacy-4b5b6d28.js","./validator-legacy-5e43cc69.js","./core-legacy-2711290b.js","./useStorage-legacy-0c9544b4.js","./utils-legacy-02eeaa66.js"],(function(e){"use strict";var a,n,t,i,r,o,l,c,d,s,v,p,m,g,u,f,w,h,y,_,b,x,I,C,k,O,j,z,L,N,P,E,S,T,V,R;return{setters:[function(e){a=e.d,n=e.r,t=e.b,i=e.c,r=e.h,o=e.j,l=e.g,c=e.k,d=e.f,s=e.w,v=e.n,p=e.t,m=e.a2,g=e.X,u=e.F,f=e.b4,w=e.a,h=e.u,y=e.y,_=e.e,b=e.i,x=e.T,I=e.Z},function(e){C=e.u},function(e){k=e.g,O=e.i},function(e){j=e.default},function(e){z=e.s},function(e){L=e.n},function(e){N=e.p},function(e){P=e.O,E=e.a},function(e){S=e.default},function(e){T=e.default},function(e){V=e.u},function(e){R=e.a},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const H={class:"sign-wrap"},U=["src"],A={class:"popup-body"},F={class:"sign-container-wrap"},D={class:"operate-bar"},B={class:"btns"},$=a({__name:"index",props:{option:{default:{}},modelValue:{default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const w=n(!1),h=n(),y=n(""),_=n(!0),b=()=>{w.value=!0,h.value?.clear()},x=()=>{f({images:[y.value],className:"customer-sign-preview"})},I=()=>{w.value=!1},C=()=>{h.value?.clear?.()},k=()=>{y.value=h.value?.save(),a("update:modelValue",y.value),w.value=!1};return(e,a)=>{const n=t("van-button"),f=t("van-icon"),O=t("van-popup");return i(),r(u,null,[o("div",H,[l(y)?(i(),r("img",{key:0,class:"preview-sign",src:l(y),alt:"",onClick:x},null,8,U)):c("",!0),d(n,{type:"primary",round:"",size:"small",onClick:b},{default:s((()=>[v(p(l(y)?"重新签名":"点击签字"),1)])),_:1})]),d(O,{show:l(w),"onUpdate:show":a[1]||(a[1]=e=>g(w)?w.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:s((()=>[o("div",A,[o("div",F,[d(m,{ref_key:"signRef",ref:h,placeholder:"请在此处签名",onStroke:a[0]||(a[0]=e=>_.value=!1)},null,512),o("div",D,[o("span",null,[d(f,{name:"info",color:"#ffaf22"}),v(" 请投保人正楷签署您的签名:")]),o("div",B,[d(n,{type:"default",class:"btn",onClick:I},{default:s((()=>[v("返回")])),_:1}),d(n,{type:"default",class:"btn",onClick:C},{default:s((()=>[v("重写")])),_:1}),d(n,{type:"primary",class:"btn",disabled:l(_),onClick:k},{default:s((()=>[v("确定签字")])),_:1},8,["disabled"])])])])])])),_:1},8,["show"])],64)}}});const q={key:0,class:"net-sale-detail-wrap"},G={class:"sign-cell"},M=o("div",{class:"sign-label"},"签名",-1),W={class:"footer"},Y={class:"footer"};e("default",a({__name:"detail",setup(e){const a=C(),v=w(),p=h(),{orderNo:m="2022113021181894998",tenantId:f="9991000001"}=v.query,H=n({}),U=n(!1),A=V("NATIONAL_REGION_CODE"),F=n({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:f,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:f}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),D=n(!1),B=n(),Z=n(),X=n(),J=n(""),K=n(""),Q=n(!1),ee=n(!1),ae=n(0),ne=n([]),te=n(""),ie=n("");n("");const re=n([]),oe=()=>{Q.value=!1,ee.value=!1},le=async()=>{Q.value=!1,ee.value=!0,await z("HOLDER",J.value,F.value.id,`${f}`),L(F.value)},ce=async()=>{const{data:e,code:a}=await N({productCode:ie.value,tenantId:f,withInsureInfo:!0});"10000"===a&&(X.value=e,(()=>{let e={};if(e=K.value?(X.value?.tenantProductInsureVO?.planList||[]).find((e=>e.planCode===K.value))?.attachmentVOList||[]:X.value?.tenantProductInsureVO?.planInsureVO?.attachmentVOList||[],!e)return void(ne.value=[]);const a={2:"richText",3:"link"};ne.value=Object.keys(e).map((n=>(e[n].forEach((e=>{if("1"===e.attachmentType){const a=e.attachmentUri.split("?"),n=a[0].substr(a[0].lastIndexOf(".")+1);e.attachmentType="pdf"===n?"pdf":"picture"}else e.attachmentType=a[e.attachmentType]})),{attachmentName:n,attachmentList:e[n]})))||[],re.value=ne.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.mustReadFlag===I.YES))}))).filter((e=>e.attachmentList.length))})())},de=async()=>{const{code:e,data:a}=await k({orderNo:m,tenantId:f});"10000"===e&&(a.extInfo.buttonCode="EVENT_NETSALE_airSignature",F.value=a,K.value=a.tenantOrderInsuredList[0]?.planCode,ie.value=a.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,U.value=!0,(e=>{const a=e.find((e=>1===e.riskType));var n,t;a&&(te.value=(n=a.insurancePeriodValue,-1!==(t=R[a.insurancePeriodType]).indexOf("$")?t.replace("$",`${n}`):`${n||""}${t}`))})(a.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList||[]),(async()=>{const{code:e,data:a}=await O({productCode:ie.value,tenantId:f});"10000"===e&&(Z.value=a,H.value=a.productFactor)})(),ce(),a.orderStatus!==E.UNDER_WRITING_SUCCESS&&p.push({path:"/baseInsurance/orderDetail",query:{...v.query,productCode:ie.value,ISEE_BIZ:a.extInfo.iseeBizNo}}))},se=async()=>{J.value?(ee.value=!1,re.value.length?Q.value=!0:le()):x("请先签字")};return y((()=>{de()})),(e,n)=>{const v=t("ProCell"),p=t("ProCard"),m=t("ProCascader"),f=t("van-cell"),w=t("ProPageWrap"),h=t("ProFilePreview"),y=t("ProPopup"),x=t("van-config-provider");return i(),_(x,{"theme-vars":l(a)},{default:s((()=>[d(w,null,{default:s((()=>[l(Z)?.productBasicInfoVO?(i(),r("div",q,[d(p,null,{default:s((()=>[d(v,{title:"产品名称",content:l(Z)?.productBasicInfoVO.productFullName},null,8,["content"])])),_:1}),l(F).id?(i(),_(p,{key:0,"show-line":!1,title:"投保信息"},{default:s((()=>[d(v,{title:"保费",content:l(F).orderAmount+"元"},null,8,["content"]),d(v,{title:"保险期限",content:l(te)},null,8,["content"]),d(v,{title:"起保日期",content:l(F).commencementTime},null,8,["content"]),d(v,{title:"终保日期",content:l(F).expiryDate},null,8,["content"]),d(v,{title:"保单状态",content:l(P)[l(F).orderStatus]},null,8,["content"]),d(v,{title:"订单编号",content:l(F).orderNo},null,8,["content"]),d(m,{modelValue:l(F).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:modelValue":n[0]||(n[0]=e=>l(F).tenantOrderHolder.extInfo.familyAreaCode=e),field1:l(F).tenantOrderHolder.extInfo.familyProvinceCode,"onUpdate:field1":n[1]||(n[1]=e=>l(F).tenantOrderHolder.extInfo.familyProvinceCode=e),field2:l(F).tenantOrderHolder.extInfo.familyCityCode,"onUpdate:field2":n[2]||(n[2]=e=>l(F).tenantOrderHolder.extInfo.familyCityCode=e),field3:l(F).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:field3":n[3]||(n[3]=e=>l(F).tenantOrderHolder.extInfo.familyAreaCode=e),label:"房产所在地",name:"familyProvinceCode","is-link":"","is-view":"",class:"insured-info","data-source":l(A),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"]),d(v,{title:"详细地址",content:l(F).tenantOrderHolder?.extInfo?.familyAddress},null,8,["content"]),d(v,{title:"燃气编号",content:l(F).tenantOrderSubjectList?.[0]?.subjectNo},null,8,["content"])])),_:1})):c("",!0),l(U)?(i(),_(j,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":l(F),"factor-object":l(H),"input-align":"right"},null,8,["form-info","factor-object"])):c("",!0),d(p,{title:"阅读条款合同",class:"file-list-card"},{default:s((()=>[(i(!0),r(u,null,b(l(ne),((e,a)=>(i(),_(f,{key:a,title:e.attachmentName,"is-link":"",onClick:a=>{return n=e.attachmentName,t=e.attachmentList,D.value=!0,void(B.value={title:n,fileContent:t?.[0]});var n,t}},null,8,["title","onClick"])))),128))])),_:1}),d(p,{title:"客户签名"},{default:s((()=>[o("div",G,[M,d($,{modelValue:l(J),"onUpdate:modelValue":n[4]||(n[4]=e=>g(J)?J.value=e:null)},null,8,["modelValue"])])])),_:1}),o("div",W,[d(S,{shadow:!1,text:"提 交",onClick:se})])])):c("",!0)])),_:1}),d(y,{show:l(D),"onUpdate:show":n[6]||(n[6]=e=>g(D)?D.value=e:null),class:"pre-notice-wrap",title:l(B)?.title,position:"bottom",style:{height:"600px"}},{default:s((()=>[d(h,{content:l(B)?.fileContent?.attachmentUri,type:l(B)?.fileContent?.attachmentType},null,8,["content","type"]),o("div",Y,[d(S,{shadow:!1,text:"关闭",onClick:n[5]||(n[5]=e=>D.value=!1)})])])),_:1},8,["show","title"]),l(Q)&&0!==l(re).length?(i(),_(T,{key:0,show:l(Q),"onUpdate:show":n[7]||(n[7]=e=>g(Q)?Q.value=e:null),"content-list":l(re),"is-only-view":l(ee),"active-index":l(ae),text:l(ee)?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:le,onOnCloseFilePreview:oe,onOnCloseFilePreviewByMask:n[8]||(n[8]=e=>Q.value=!1)},null,8,["show","content-list","is-only-view","active-index","text"])):c("",!0)])),_:1},8,["theme-vars"])}}}))}}}))}();
