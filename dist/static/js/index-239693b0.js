import{_ as e,d as t,b_ as n,a,r as o,ad as r,E as l,an as i,G as u,b as d,c as s,e as c,w as v,f as p,j as m,t as f,g as O,a7 as I,k as h,aj as y,m as L,P as D,a3 as Y,aP as w,bT as C,X as V,Y as T,ah as g,T as E}from"./index-f03140d4.js";import{d as j}from"./debounce-910624d9.js";import{r as x,t as b}from"./utils-82788e76.js";import{p as R}from"./product-48bec35b.js";import{i as k,b as P,p as M}from"./trial-4c132c87.js";import N from"./index-2e8a1772.js";import{n as H}from"./nextStep-41bfc4a8.js";import _ from"./index-11a28513.js";import{m as B,n as S}from"./infoCollection-494ff537.js";import"./pdfh5-008ca364.js";import"./isObject-cd478a85.js";import"./isObjectLike-f858f31d.js";import"./trial-58dc58d8.js";import"./relativeTime-fde2a46e.js";import"./validator-5a13dc82.js";import"./useDicData-488e69ee.js";import"./core-3a08fcc7.js";import"./constant-c3f28a3b.js";!function(){if("undefined"!=typeof window){var e,t="ontouchstart"in window;document.createTouch||(document.createTouch=function(e,t,a,o,r,l,i){return new n(t,a,{pageX:o,pageY:r,screenX:l,screenY:i,clientX:o-window.pageXOffset,clientY:r-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var e=o(),t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length=arguments.length,e}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var n=function(e,t,n,a,o){a=a||0,o=o||0,this.identifier=t,this.target=e,this.clientX=n.clientX+a,this.clientY=n.clientY+o,this.screenX=n.screenX+a,this.screenY=n.screenY+o,this.pageX=n.pageX+a,this.pageY=n.pageY+o},a=!1;u.multiTouchOffset=75,t||new u}function o(){var e=[];return e.item=function(e){return this[e]||null},e.identifiedTouch=function(e){return this[e+1]||null},e}function r(t){return function(n){var o,r,u;("mousedown"===n.type&&(a=!0),"mouseup"===n.type&&(a=!1),"mousemove"!==n.type||a)&&(("mousedown"===n.type||!e||e&&!e.dispatchEvent)&&(e=n.target),null==e.closest("[data-no-touch-simulate]")&&(o=t,r=n,(u=document.createEvent("Event")).initEvent(o,!0,!0),u.altKey=r.altKey,u.ctrlKey=r.ctrlKey,u.metaKey=r.metaKey,u.shiftKey=r.shiftKey,u.touches=i(r),u.targetTouches=i(r),u.changedTouches=l(r),e.dispatchEvent(u)),"mouseup"===n.type&&(e=null))}}function l(t){var a=o();return a.push(new n(e,1,t,0,0)),a}function i(e){return"mouseup"===e.type?o():l(e)}function u(){window.addEventListener("mousedown",r("touchstart"),!0),window.addEventListener("mousemove",r("touchmove"),!0),window.addEventListener("mouseup",r("touchend"),!0)}}();const U=e=>(V("data-v-38bf24c9"),e=e(),T(),e),$={class:"net-sale-wrap"},F={class:"part product-name"},X=U((()=>m("span",null,null,-1))),A=U((()=>m("span",null,null,-1))),K={class:"part"},z={class:"footer"};var q=e(t({__name:"index",setup(e){const t=n(),V=a(),{productCode:T="HTEJBX",tenantId:U="9991000001",agentCode:q="",agencyCode:G,saleChannelId:J,extraInfo:W,preview:Q}=V.query,Z=o(),ee=o("0"),te=o(),ne=o(),ae=o(),oe=o([{}]),re=o([]),le=o({}),ie=o(""),ue=o({min:new Date(r().add(1,"day").format("YYYY-MM-DD")),max:new Date,currentDate:""});let de={};try{de=JSON.parse(decodeURIComponent(W))}catch(ye){}const se=o({agencyId:G,agentCode:q,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:de.templateId,iseeBizNo:ie.value,extraInfo:de},orderCategory:1,saleUserId:q,saleChannelId:J,tenantId:U,venderCode:"",tenantOrderHolder:{extInfo:{occupationCodeList:[]}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:U}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ce=l((()=>{var e,t;return((null==(t=null==(e=te.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)||0)>1})),ve=o();i([()=>ae.value,()=>ne.value,()=>ee.value],(()=>{var e,t;const{premium:n}=ae.value||{};if(n)ve.value=n&&`￥${n}元`;else{const{tenantProductInsureVO:n}=ne.value||{};let a={};a=(null==(e=null==n?void 0:n.planList)?void 0:e.length)?((null==n?void 0:n.planList)||[]).find((e=>e.planCode===ee.value)):null==n?void 0:n.planInsureVO;const{paymentFrequencyValue:o,premiumUnit:r}=(null==(t=null==a?void 0:a.productPremiumVOList)?void 0:t[0])||{};ve.value=o&&`￥${o}${r||"元"}`}}),{deep:!0,immediate:!0});const pe=l((()=>{var e,t,n,a,o,l,i;let u=[];u=(null==(t=null==(e=te.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)?(null==(a=null==(n=te.value)?void 0:n.productRelationPlanVOList.find((e=>e.planCode===ee.value)))?void 0:a.productRiskVoList)||[]:(null==(o=te.value)?void 0:o.productRiskVoList)||[];const{insuranceStartType:d,riskInsureLimitVO:s}=(null==(i=null==(l=null==u?void 0:u[0])?void 0:l.riskDetailVOList)?void 0:i[0])||{},{maxInsuranceDay:c}=s||{};if(d===+B.CUSTOM_DAY){const[e,t]=(c||"").split(",");e&&t&&t!==e?(ue.value.min=new Date(r(new Date).add(+e||0,"day").format("YYYY-MM-DD")),ue.value.max=new Date(r(new Date).add(+t||0,"day").format("YYYY-MM-DD"))):e&&t&&t===e?ue.value.currentDate=r(new Date).add(t,"day").format("YYYY-MM-DD HH:mm:ss"):t||(ue.value.max=new Date(r(new Date).add(+t||0,"day").format("YYYY-MM-DD")))}return u})),me=l((()=>{var e,t,n;const{insuranceStartType:a,riskInsureLimitVO:o}=(null==(n=null==(t=null==(e=pe.value)?void 0:e[0])?void 0:t.riskDetailVOList)?void 0:n[0])||{},{maxInsuranceDay:r}=o||{};if(a!==+B.CUSTOM_DAY)return!0;const[l,i]=(r||"").split(",");return l===i})),fe=l((()=>{var e,t,n;const a=pe.value||[],o=(null==(n=null==(t=null==(e=null==a?void 0:a[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:n.insuranceStartType)||1;return ue.value.currentDate?`${r(ue.value.currentDate).format("YYYY-MM-DD")} 00:00:00`:o===+B.CURRENT_DAY?`${r(new Date).format("YYYY-MM-DD HH:mm:ss")}`:`${r(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`})),Oe=l((()=>{var e,t;const n=pe.value||[],{insuranceEndType:a,riskInsureLimitVO:o}=(null==(t=null==(e=null==n?void 0:n[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:l}=o||{};l||console.warn("insurancePeriodValueList","保障信息不存在");const[i,u]=((null==l?void 0:l[0])||"").split("_");return a===+S.CURRENT_DAY?`${r(fe.value).add(u||0,i).subtract(1,"day").format("YYYY-MM-DD")} 23:59:59`:a?`${r(fe.value).add(u,i).format("YYYY-MM-DD")} 00:00:00`:""})),Ie=async()=>{var e,t,n;se.value.venderCode=null==(e=te.value)?void 0:e.productBasicInfoVO.insurerCode,se.value.orderAmount=null==(t=ae.value)?void 0:t.premium,se.value.orderRealAmount=null==(n=ae.value)?void 0:n.premium,se.value.commencementTime=fe.value,se.value.expiryDate=Oe.value,se.value.extInfo&&(se.value.extInfo.iseeBizNo=ie.value),se.value.tenantOrderInsuredList&&(se.value.tenantOrderInsuredList[0].planCode=ee.value),H(((e,t,n)=>{var a,o;const r={},l=(e=[])=>{(e||[]).forEach((e=>{var t;r[e.riskCode]=e,(null==(t=e.riskPremiumDetailVOList)?void 0:t.length)&&l(e.riskPremiumDetailVOList)}))};l(null==t?void 0:t.riskPremiumDetailVOList);const i={...n},u={tenantId:U,riskList:(null==(a=re.value)?void 0:a[0].riskVOList)||[],riskPremium:r,productId:(null==e?void 0:e.productBasicInfoVO.id)||0};return i.tenantOrderHolder&&(i.tenantOrderHolder.certType=i.tenantOrderHolder.certType||g.CERT,i.tenantOrderHolder.certNo=(i.tenantOrderHolder.certNo||"").toLocaleUpperCase()),i.tenantOrderInsuredList&&(i.tenantOrderInsuredList[0].certType=i.tenantOrderInsuredList[0].certType||g.CERT,i.tenantOrderInsuredList[0].certNo=(i.tenantOrderInsuredList[0].certNo||"").toLocaleUpperCase(),i.tenantOrderInsuredList[0].tenantOrderProductList=[{premium:null==(o=ae.value)?void 0:o.premium,productCode:null==e?void 0:e.productBasicInfoVO.productCode,productName:null==e?void 0:e.productBasicInfoVO.productName,tenantOrderRiskList:b(u)}]),i})(te.value,ae.value,se.value),((e,t)=>{"jumpToPage"===t&&E("提交成功")}))},he=async()=>{var e;null==(e=Z.value)||e.validateForm().then((()=>{var e,t;y.confirm({title:"分享",message:`即将向客户【${null==(t=null==(e=se.value)?void 0:e.tenantOrderHolder)?void 0:t.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{Q||Ie()}))}))};i([()=>{var e;return null==(e=se.value.tenantOrderInsuredList)?void 0:e[0].name},()=>{var e;return null==(e=se.value.tenantOrderInsuredList)?void 0:e[0].birthday},()=>ee.value],j((([e,t])=>{e&&t&&(Q||(async(e,t,n)=>{var a,o,r,l,i,u;const d={holder:{personVO:{certType:g.CERT,...e.tenantOrderHolder,socialFlag:`${(null==(o=null==(a=e.tenantOrderHolder)?void 0:a.extInfo)?void 0:o.hasSocialInsurance)||""}`,occupationCodeList:null==(l=null==(r=e.tenantOrderHolder)?void 0:r.extInfo)?void 0:l.occupationCodeList}},insuredVOList:((null==e?void 0:e.tenantOrderInsuredList)||[]).map((e=>{var a,o;return{insuredCode:"",personVO:{...e,certType:g.CERT,socialFlag:`${(null==(a=null==e?void 0:e.extInfo)?void 0:a.hasSocialInsurance)||""}`,occupationCodeList:null==(o=null==e?void 0:e.extInfo)?void 0:o.occupationCodeList},productPlanVOList:[{insurerCode:null==t?void 0:t.productBasicInfoVO.insurerCode,planCode:ee.value||"",riskVOList:x(n)}]}})),productCode:null==t?void 0:t.productBasicInfoVO.productCode,productId:null==t?void 0:t.productBasicInfoVO.id,tenantId:U},{code:s}=await P(d);if("10000"===s){const{code:e,data:t}=await M(d);"10000"===e?(ae.value=t,re.value=(null==(u=null==(i=null==d?void 0:d.insuredVOList)?void 0:i[0])?void 0:u.productPlanVOList)||[]):ae.value=void 0}})(se.value,te.value,pe.value))}),500));return i((()=>ee.value),(()=>{oe.value&&(le.value=oe.value[ee.value])})),u((()=>{(async()=>{await R({productCode:T,withInsureInfo:!0,tenantId:U}).then((({code:e,data:t})=>{var n;"10000"===e&&(ne.value=t,document.title=(null==(n=t.tenantProductInsureVO)?void 0:n.productName)||"")})),k({productCode:T}).then((({code:e,data:t})=>{var n;"10000"===e&&(te.value=t,oe.value=t.planFactor,(null==(n=t.productRelationPlanVOList)?void 0:n.length)&&(ee.value=t.productRelationPlanVOList[0].planCode||""),t.productFactor?le.value=t.productFactor:t.planFactor&&(le.value=t.planFactor[ee.value]))}))})(),setTimeout((async()=>{ie.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,n)=>{const a=L,o=D,r=Y,l=w,i=d("ProPageWrap"),u=C;return s(),c(u,{"theme-vars":O(t)},{default:v((()=>[p(i,null,{default:v((()=>{var e,t;return[m("div",$,[m("div",F,f(null==(t=null==(e=O(te))?void 0:e.productBasicInfoVO)?void 0:t.productFullName),1),O(ce)?(s(),c(o,{key:0,"show-line":!1,title:"保障年期"},{default:v((()=>{var e;return[p(a,{modelValue:O(ee),"onUpdate:modelValue":n[0]||(n[0]=e=>I(ee)?ee.value=e:null),class:"radio-group",prop:{label:"planName",value:"planCode"},options:null==(e=O(te))?void 0:e.productRelationPlanVOList},null,8,["modelValue","options"])]})),_:1})):h("",!0),p(N,{ref_key:"formRef",ref:Z,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"form-info":O(se),"send-sms-code":()=>{},"input-align":"left","factor-object":O(le)},{holderName:v((()=>[X])),insurerName:v((()=>[A])),_:1},8,["form-info","send-sms-code","factor-object"]),m("div",K,[p(r,{title:"保费",content:O(ve)},null,8,["content"]),O(me)?(s(),c(r,{key:0,title:"保障期间",content:`${O(fe).split(" ")[0]}~${O(Oe).split(" ")[0]}`},null,8,["content"])):(s(),c(l,{key:1,modelValue:O(ue).currentDate,"onUpdate:modelValue":n[1]||(n[1]=e=>O(ue).currentDate=e),label:"生效日期",name:"currentDate",type:"date",min:O(ue).min,max:O(ue).max,required:!0},null,8,["modelValue","min","max"]))]),m("div",z,[p(_,{shadow:!1,text:"分享用户确认投保",onClick:he})])])]})),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-38bf24c9"]]);export{q as default};
