import{_ as e,d as t,d6 as n,i as a,j as o,aq as r,k as l,z as u,aA as i,O as d,l as s,o as c,m as v,w as p,a as m,e as f,u as I,b as O,p as h,f as y,am as L,aD as D,bf as Y,aI as w,cX as C,dO as V,av as T,aw as g,T as E}from"./index-8ccea0ec.js";import{r as x,t as R}from"./utils-f86c0766.js";import{p as b}from"./product-97cae19e.js";import{u as k,h as P,i as j}from"./trial-eee9ad28.js";import{_ as M}from"./index-8c51a9f2.js";import{n as N}from"./nextStep-3fbda94c.js";import{P as H}from"./index-26608712.js";import{d as _,e as B}from"./infoCollection-86362f87.js";import"./trial-c0526383.js";import"./PersonalInfo-3cb2083b.js";import"./validator-6eb2e74e.js";import"./core-73a53a48.js";!function(){if("undefined"!=typeof window){var e,t="ontouchstart"in window;document.createTouch||(document.createTouch=function(e,t,a,o,r,l,u){return new n(t,a,{pageX:o,pageY:r,screenX:l,screenY:u,clientX:o-window.pageXOffset,clientY:r-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var e=o(),t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length=arguments.length,e}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var n=function(e,t,n,a,o){a=a||0,o=o||0,this.identifier=t,this.target=e,this.clientX=n.clientX+a,this.clientY=n.clientY+o,this.screenX=n.screenX+a,this.screenY=n.screenY+o,this.pageX=n.pageX+a,this.pageY=n.pageY+o},a=!1;i.multiTouchOffset=75,t||new i}function o(){var e=[];return e.item=function(e){return this[e]||null},e.identifiedTouch=function(e){return this[e+1]||null},e}function r(t){return function(n){var o,r,i;("mousedown"===n.type&&(a=!0),"mouseup"===n.type&&(a=!1),"mousemove"!==n.type||a)&&(("mousedown"===n.type||!e||e&&!e.dispatchEvent)&&(e=n.target),null==e.closest("[data-no-touch-simulate]")&&(o=t,r=n,(i=document.createEvent("Event")).initEvent(o,!0,!0),i.altKey=r.altKey,i.ctrlKey=r.ctrlKey,i.metaKey=r.metaKey,i.shiftKey=r.shiftKey,i.touches=u(r),i.targetTouches=u(r),i.changedTouches=l(r),e.dispatchEvent(i)),"mouseup"===n.type&&(e=null))}}function l(t){var a=o();return a.push(new n(e,1,t,0,0)),a}function u(e){return"mouseup"===e.type?o():l(e)}function i(){window.addEventListener("mousedown",r("touchstart"),!0),window.addEventListener("mousemove",r("touchmove"),!0),window.addEventListener("mouseup",r("touchend"),!0)}}();const S=e=>(T("data-v-5bf39d91"),e=e(),g(),e),U={class:"net-sale-wrap"},$={class:"part product-name"},F=S((()=>m("span",null,null,-1))),X=S((()=>m("span",null,null,-1))),A={class:"part"},K={class:"footer"};var z=e(t({__name:"index",setup(e){n();const t=a(),{productCode:T="HTEJBX",tenantId:g="9991000001",agentCode:S="",agencyCode:z,saleChannelId:q,extraInfo:J,preview:W}=t.query,G=o(),Q=o("0"),Z=o(),ee=o(),te=o(),ne=o([{}]),ae=o([]),oe=o({}),re=o(""),le=o({min:new Date(r().add(1,"day").format("YYYY-MM-DD")),max:new Date,currentDate:""});let ue={};try{ue=JSON.parse(decodeURIComponent(J))}catch(Oe){}const ie=o({agencyId:z,agentCode:S,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:ue.templateId,iseeBizNo:re.value,extraInfo:ue},orderCategory:1,saleUserId:S,saleChannelId:q,tenantId:g,venderCode:"",tenantOrderHolder:{extInfo:{occupationCodeList:[]}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:g}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),de=l((()=>{var e,t;return((null==(t=null==(e=Z.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)||0)>1})),se=o();u([()=>te.value,()=>ee.value,()=>Q.value],(()=>{var e,t;const{premium:n}=te.value||{};if(n)se.value=n&&`￥${n}元`;else{const{tenantProductInsureVO:n}=ee.value||{};let a={};a=(null==(e=null==n?void 0:n.planList)?void 0:e.length)?((null==n?void 0:n.planList)||[]).find((e=>e.planCode===Q.value)):null==n?void 0:n.planInsureVO;const{paymentFrequencyValue:o,premiumUnit:r}=(null==(t=null==a?void 0:a.productPremiumVOList)?void 0:t[0])||{};se.value=o&&`￥${o}${r||"元"}`}}),{deep:!0,immediate:!0});const ce=l((()=>{var e,t,n,a,o,l,u;let i=[];i=(null==(t=null==(e=Z.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)?(null==(a=null==(n=Z.value)?void 0:n.productRelationPlanVOList.find((e=>e.planCode===Q.value)))?void 0:a.productRiskVoList)||[]:(null==(o=Z.value)?void 0:o.productRiskVoList)||[];const{insuranceStartType:d,riskInsureLimitVO:s}=(null==(u=null==(l=null==i?void 0:i[0])?void 0:l.riskDetailVOList)?void 0:u[0])||{},{maxInsuranceDay:c}=s||{};if(d===+_.CUSTOM_DAY){const[e,t]=(c||"").split(",");e&&t&&t!==e?(le.value.min=new Date(r(new Date).add(+e||0,"day").format("YYYY-MM-DD")),le.value.max=new Date(r(new Date).add(+t||0,"day").format("YYYY-MM-DD"))):e&&t&&t===e?le.value.currentDate=r(new Date).add(t,"day").format("YYYY-MM-DD HH:mm:ss"):t||(le.value.max=new Date(r(new Date).add(+t||0,"day").format("YYYY-MM-DD")))}return i})),ve=l((()=>{var e,t,n;const{insuranceStartType:a,riskInsureLimitVO:o}=(null==(n=null==(t=null==(e=ce.value)?void 0:e[0])?void 0:t.riskDetailVOList)?void 0:n[0])||{},{maxInsuranceDay:r}=o||{};if(a!==+_.CUSTOM_DAY)return!0;const[l,u]=(r||"").split(",");return l===u})),pe=l((()=>{var e,t,n;const a=ce.value||[],o=(null==(n=null==(t=null==(e=null==a?void 0:a[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:n.insuranceStartType)||1;return le.value.currentDate?`${r(le.value.currentDate).format("YYYY-MM-DD")} 00:00:00`:o===+_.CURRENT_DAY?`${r(new Date).format("YYYY-MM-DD HH:mm:ss")}`:`${r(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`})),me=l((()=>{var e,t;const n=ce.value||[],{insuranceEndType:a,riskInsureLimitVO:o}=(null==(t=null==(e=null==n?void 0:n[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:l}=o||{};l||console.warn("insurancePeriodValueList","保障信息不存在");const[u,i]=((null==l?void 0:l[0])||"").split("_");return a===+B.CURRENT_DAY?`${r(pe.value).add(i||0,u).subtract(1,"day").format("YYYY-MM-DD")} 23:59:59`:a?`${r(pe.value).add(i,u).format("YYYY-MM-DD")} 00:00:00`:""})),fe=async()=>{var e,t,n;ie.value.venderCode=null==(e=Z.value)?void 0:e.productBasicInfoVO.insurerCode,ie.value.orderAmount=null==(t=te.value)?void 0:t.premium,ie.value.orderRealAmount=null==(n=te.value)?void 0:n.premium,ie.value.commencementTime=pe.value,ie.value.expiryDate=me.value,ie.value.extInfo&&(ie.value.extInfo.iseeBizNo=re.value),ie.value.tenantOrderInsuredList&&(ie.value.tenantOrderInsuredList[0].planCode=Q.value),N(((e,t,n)=>{var a,o;const r={},l=(e=[])=>{(e||[]).forEach((e=>{var t;r[e.riskCode]=e,(null==(t=e.riskPremiumDetailVOList)?void 0:t.length)&&l(e.riskPremiumDetailVOList)}))};l(null==t?void 0:t.riskPremiumDetailVOList);const u={...n},i={tenantId:g,riskList:(null==(a=ae.value)?void 0:a[0].riskVOList)||[],riskPremium:r,productId:(null==e?void 0:e.productBasicInfoVO.id)||0};return u.tenantOrderHolder&&(u.tenantOrderHolder.certType=u.tenantOrderHolder.certType||L.CERT,u.tenantOrderHolder.certNo=(u.tenantOrderHolder.certNo||"").toLocaleUpperCase()),u.tenantOrderInsuredList&&(u.tenantOrderInsuredList[0].certType=u.tenantOrderInsuredList[0].certType||L.CERT,u.tenantOrderInsuredList[0].certNo=(u.tenantOrderInsuredList[0].certNo||"").toLocaleUpperCase(),u.tenantOrderInsuredList[0].tenantOrderProductList=[{premium:null==(o=te.value)?void 0:o.premium,productCode:null==e?void 0:e.productBasicInfoVO.productCode,productName:null==e?void 0:e.productBasicInfoVO.productName,tenantOrderRiskList:R(i)}]),u})(Z.value,te.value,ie.value),((e,t)=>{"jumpToPage"===t&&E("提交成功")}))},Ie=async()=>{var e;null==(e=G.value)||e.validateForm().then((()=>{var e,t;D.confirm({title:"分享",message:`即将向客户【${null==(t=null==(e=ie.value)?void 0:e.tenantOrderHolder)?void 0:t.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{W||fe()}))}))};u([()=>{var e;return null==(e=ie.value.tenantOrderInsuredList)?void 0:e[0].name},()=>{var e;return null==(e=ie.value.tenantOrderInsuredList)?void 0:e[0].birthday},()=>Q.value],i((([e,t])=>{e&&t&&(W||(async(e,t,n)=>{var a,o,r,l,u,i;const d={holder:{personVO:{certType:L.CERT,...e.tenantOrderHolder,socialFlag:`${(null==(o=null==(a=e.tenantOrderHolder)?void 0:a.extInfo)?void 0:o.hasSocialInsurance)||""}`,occupationCodeList:null==(l=null==(r=e.tenantOrderHolder)?void 0:r.extInfo)?void 0:l.occupationCodeList}},insuredVOList:((null==e?void 0:e.tenantOrderInsuredList)||[]).map((e=>{var a,o;return{insuredCode:"",personVO:{...e,certType:L.CERT,socialFlag:`${(null==(a=null==e?void 0:e.extInfo)?void 0:a.hasSocialInsurance)||""}`,occupationCodeList:null==(o=null==e?void 0:e.extInfo)?void 0:o.occupationCodeList},productPlanVOList:[{insurerCode:null==t?void 0:t.productBasicInfoVO.insurerCode,planCode:Q.value||"",riskVOList:x(n)}]}})),productCode:null==t?void 0:t.productBasicInfoVO.productCode,productId:null==t?void 0:t.productBasicInfoVO.id,tenantId:g},{code:s}=await k(d);if("10000"===s){const{code:e,data:t}=await P(d);"10000"===e?(te.value=t,ae.value=(null==(i=null==(u=null==d?void 0:d.insuredVOList)?void 0:u[0])?void 0:i.productPlanVOList)||[]):te.value=void 0}})(ie.value,Z.value,ce.value))}),500));return u((()=>Q.value),(()=>{ne.value&&(oe.value=ne.value[Q.value])})),d((()=>{(async()=>{await b({productCode:T,withInsureInfo:!0,tenantId:g}).then((({code:e,data:t})=>{var n;"10000"===e&&(ee.value=t,document.title=(null==(n=t.tenantProductInsureVO)?void 0:n.productName)||"")})),j({productCode:T}).then((({code:e,data:t})=>{var n;"10000"===e&&(Z.value=t,ne.value=t.planFactor,(null==(n=t.productRelationPlanVOList)?void 0:n.length)&&(Q.value=t.productRelationPlanVOList[0].planCode||""),t.productFactor?oe.value=t.productFactor:t.planFactor&&(oe.value=t.planFactor[Q.value]))}))})(),setTimeout((async()=>{re.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const n=Y,a=w,o=C,r=V,l=s("ProPageWrap");return c(),v(l,null,{default:p((()=>{var e,l;return[m("div",U,[m("div",$,f(null==(l=null==(e=I(Z))?void 0:e.productBasicInfoVO)?void 0:l.productFullName),1),I(de)?(c(),v(a,{key:0,"show-line":!1,title:"保障年期"},{default:p((()=>{var e;return[O(n,{modelValue:I(Q),"onUpdate:modelValue":t[0]||(t[0]=e=>h(Q)?Q.value=e:null),class:"radio-group",prop:{label:"planName",value:"planCode"},options:null==(e=I(Z))?void 0:e.productRelationPlanVOList},null,8,["modelValue","options"])]})),_:1})):y("",!0),O(M,{ref_key:"formRef",ref:G,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"form-info":I(ie),"send-sms-code":()=>{},"input-align":"left","factor-object":I(oe)},{holderName:p((()=>[F])),insurerName:p((()=>[X])),_:1},8,["form-info","factor-object"]),m("div",A,[O(o,{title:"保费",content:I(se)},null,8,["content"]),I(ve)?(c(),v(o,{key:0,title:"保障期间",content:`${I(pe).split(" ")[0]}~${I(me).split(" ")[0]}`},null,8,["content"])):(c(),v(r,{key:1,modelValue:I(le).currentDate,"onUpdate:modelValue":t[1]||(t[1]=e=>I(le).currentDate=e),label:"生效日期",name:"currentDate",type:"date",min:I(le).min,max:I(le).max,required:!0},null,8,["modelValue","min","max"]))]),m("div",K,[O(H,{shadow:!1,text:"分享用户确认投保",onClick:Ie})])])]})),_:1})}}}),[["__scopeId","data-v-5bf39d91"]]);export{z as default};
