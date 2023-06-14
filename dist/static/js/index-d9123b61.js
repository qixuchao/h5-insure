import{G as e,d as t,bI as n,u as a,r as o,z as r,L as l,V as i,Z as u,a3 as d,b as s,g as c,w as v,i as p,E as m,f,e as I,a0 as O,h,D as y,aG as L,a5 as D,bz as Y,cn as w,aD as C,aE as V,C as T,T as E}from"./index-601e1bf6.js";import{d as g}from"./debounce-6981b306.js";import{r as b,t as x}from"./utils-015a7bda.js";import{p as j}from"./product-5e5ad98f.js";import{i as R,u as k,p as P}from"./trial-e4fc02f5.js";import{_ as M}from"./index-32e09c00.js";import{n as N}from"./nextStep-03eab7b8.js";import{P as H}from"./index-eb20473c.js";import{c as B,d as _}from"./infoCollection-da6649b1.js";import"./isObjectLike-a9798079.js";import"./trial-856bcb0a.js";import"./PersonalInfo-dc288394.js";import"./validator-6eb2e74e.js";import"./useDicData-50296a31.js";import"./core-4878b9ea.js";import"./constant-8927d485.js";!function(){if("undefined"!=typeof window){var e,t="ontouchstart"in window;document.createTouch||(document.createTouch=function(e,t,a,o,r,l,i){return new n(t,a,{pageX:o,pageY:r,screenX:l,screenY:i,clientX:o-window.pageXOffset,clientY:r-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var e=o(),t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length=arguments.length,e}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var n=function(e,t,n,a,o){a=a||0,o=o||0,this.identifier=t,this.target=e,this.clientX=n.clientX+a,this.clientY=n.clientY+o,this.screenX=n.screenX+a,this.screenY=n.screenY+o,this.pageX=n.pageX+a,this.pageY=n.pageY+o},a=!1;u.multiTouchOffset=75,t||new u}function o(){var e=[];return e.item=function(e){return this[e]||null},e.identifiedTouch=function(e){return this[e+1]||null},e}function r(t){return function(n){var o,r,u;("mousedown"===n.type&&(a=!0),"mouseup"===n.type&&(a=!1),"mousemove"!==n.type||a)&&(("mousedown"===n.type||!e||e&&!e.dispatchEvent)&&(e=n.target),null==e.closest("[data-no-touch-simulate]")&&(o=t,r=n,(u=document.createEvent("Event")).initEvent(o,!0,!0),u.altKey=r.altKey,u.ctrlKey=r.ctrlKey,u.metaKey=r.metaKey,u.shiftKey=r.shiftKey,u.touches=i(r),u.targetTouches=i(r),u.changedTouches=l(r),e.dispatchEvent(u)),"mouseup"===n.type&&(e=null))}}function l(t){var a=o();return a.push(new n(e,1,t,0,0)),a}function i(e){return"mouseup"===e.type?o():l(e)}function u(){window.addEventListener("mousedown",r("touchstart"),!0),window.addEventListener("mousemove",r("touchmove"),!0),window.addEventListener("mouseup",r("touchend"),!0)}}();const S=e=>(C("data-v-5bf39d91"),e=e(),V(),e),U={class:"net-sale-wrap"},$={class:"part product-name"},F=S((()=>p("span",null,null,-1))),X=S((()=>p("span",null,null,-1))),A={class:"part"},K={class:"footer"};var z=e(t({__name:"index",setup(e){n();const t=a(),{productCode:C="HTEJBX",tenantId:V="9991000001",agentCode:S="",agencyCode:z,saleChannelId:q,extraInfo:G,preview:J}=t.query,W=o(),Z=o("0"),Q=o(),ee=o(),te=o(),ne=o([{}]),ae=o([]),oe=o({}),re=o(""),le=o({min:new Date(r().add(1,"day").format("YYYY-MM-DD")),max:new Date,currentDate:""});let ie={};try{ie=JSON.parse(decodeURIComponent(G))}catch(Oe){}const ue=o({agencyId:z,agentCode:S,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:ie.templateId,iseeBizNo:re.value,extraInfo:ie},orderCategory:1,saleUserId:S,saleChannelId:q,tenantId:V,venderCode:"",tenantOrderHolder:{extInfo:{occupationCodeList:[]}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:V}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),de=l((()=>{var e,t;return((null==(t=null==(e=Q.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)||0)>1})),se=o();i([()=>te.value,()=>ee.value,()=>Z.value],(()=>{var e,t;const{premium:n}=te.value||{};if(n)se.value=n&&`￥${n}元`;else{const{tenantProductInsureVO:n}=ee.value||{};let a={};a=(null==(e=null==n?void 0:n.planList)?void 0:e.length)?((null==n?void 0:n.planList)||[]).find((e=>e.planCode===Z.value)):null==n?void 0:n.planInsureVO;const{paymentFrequencyValue:o,premiumUnit:r}=(null==(t=null==a?void 0:a.productPremiumVOList)?void 0:t[0])||{};se.value=o&&`￥${o}${r||"元"}`}}),{deep:!0,immediate:!0});const ce=l((()=>{var e,t,n,a,o,l,i;let u=[];u=(null==(t=null==(e=Q.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)?(null==(a=null==(n=Q.value)?void 0:n.productRelationPlanVOList.find((e=>e.planCode===Z.value)))?void 0:a.productRiskVoList)||[]:(null==(o=Q.value)?void 0:o.productRiskVoList)||[];const{insuranceStartType:d,riskInsureLimitVO:s}=(null==(i=null==(l=null==u?void 0:u[0])?void 0:l.riskDetailVOList)?void 0:i[0])||{},{maxInsuranceDay:c}=s||{};if(d===+B.CUSTOM_DAY){const[e,t]=(c||"").split(",");e&&t&&t!==e?(le.value.min=new Date(r(new Date).add(+e||0,"day").format("YYYY-MM-DD")),le.value.max=new Date(r(new Date).add(+t||0,"day").format("YYYY-MM-DD"))):e&&t&&t===e?le.value.currentDate=r(new Date).add(t,"day").format("YYYY-MM-DD HH:mm:ss"):t||(le.value.max=new Date(r(new Date).add(+t||0,"day").format("YYYY-MM-DD")))}return u})),ve=l((()=>{var e,t,n;const{insuranceStartType:a,riskInsureLimitVO:o}=(null==(n=null==(t=null==(e=ce.value)?void 0:e[0])?void 0:t.riskDetailVOList)?void 0:n[0])||{},{maxInsuranceDay:r}=o||{};if(a!==+B.CUSTOM_DAY)return!0;const[l,i]=(r||"").split(",");return l===i})),pe=l((()=>{var e,t,n;const a=ce.value||[],o=(null==(n=null==(t=null==(e=null==a?void 0:a[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:n.insuranceStartType)||1;return le.value.currentDate?`${r(le.value.currentDate).format("YYYY-MM-DD")} 00:00:00`:o===+B.CURRENT_DAY?`${r(new Date).format("YYYY-MM-DD HH:mm:ss")}`:`${r(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`})),me=l((()=>{var e,t;const n=ce.value||[],{insuranceEndType:a,riskInsureLimitVO:o}=(null==(t=null==(e=null==n?void 0:n[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:l}=o||{};l||console.warn("insurancePeriodValueList","保障信息不存在");const[i,u]=((null==l?void 0:l[0])||"").split("_");return a===+_.CURRENT_DAY?`${r(pe.value).add(u||0,i).subtract(1,"day").format("YYYY-MM-DD")} 23:59:59`:a?`${r(pe.value).add(u,i).format("YYYY-MM-DD")} 00:00:00`:""})),fe=async()=>{var e,t,n;ue.value.venderCode=null==(e=Q.value)?void 0:e.productBasicInfoVO.insurerCode,ue.value.orderAmount=null==(t=te.value)?void 0:t.premium,ue.value.orderRealAmount=null==(n=te.value)?void 0:n.premium,ue.value.commencementTime=pe.value,ue.value.expiryDate=me.value,ue.value.extInfo&&(ue.value.extInfo.iseeBizNo=re.value),ue.value.tenantOrderInsuredList&&(ue.value.tenantOrderInsuredList[0].planCode=Z.value),N(((e,t,n)=>{var a,o;const r={},l=(e=[])=>{(e||[]).forEach((e=>{var t;r[e.riskCode]=e,(null==(t=e.riskPremiumDetailVOList)?void 0:t.length)&&l(e.riskPremiumDetailVOList)}))};l(null==t?void 0:t.riskPremiumDetailVOList);const i={...n},u={tenantId:V,riskList:(null==(a=ae.value)?void 0:a[0].riskVOList)||[],riskPremium:r,productId:(null==e?void 0:e.productBasicInfoVO.id)||0};return i.tenantOrderHolder&&(i.tenantOrderHolder.certType=i.tenantOrderHolder.certType||T.CERT,i.tenantOrderHolder.certNo=(i.tenantOrderHolder.certNo||"").toLocaleUpperCase()),i.tenantOrderInsuredList&&(i.tenantOrderInsuredList[0].certType=i.tenantOrderInsuredList[0].certType||T.CERT,i.tenantOrderInsuredList[0].certNo=(i.tenantOrderInsuredList[0].certNo||"").toLocaleUpperCase(),i.tenantOrderInsuredList[0].tenantOrderProductList=[{premium:null==(o=te.value)?void 0:o.premium,productCode:null==e?void 0:e.productBasicInfoVO.productCode,productName:null==e?void 0:e.productBasicInfoVO.productName,tenantOrderRiskList:x(u)}]),i})(Q.value,te.value,ue.value),((e,t)=>{"jumpToPage"===t&&E("提交成功")}))},Ie=async()=>{var e;null==(e=W.value)||e.validateForm().then((()=>{var e,t;y.confirm({title:"分享",message:`即将向客户【${null==(t=null==(e=ue.value)?void 0:e.tenantOrderHolder)?void 0:t.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{J||fe()}))}))};i([()=>{var e;return null==(e=ue.value.tenantOrderInsuredList)?void 0:e[0].name},()=>{var e;return null==(e=ue.value.tenantOrderInsuredList)?void 0:e[0].birthday},()=>Z.value],g((([e,t])=>{e&&t&&(J||(async(e,t,n)=>{var a,o,r,l,i,u;const d={holder:{personVO:{certType:T.CERT,...e.tenantOrderHolder,socialFlag:`${(null==(o=null==(a=e.tenantOrderHolder)?void 0:a.extInfo)?void 0:o.hasSocialInsurance)||""}`,occupationCodeList:null==(l=null==(r=e.tenantOrderHolder)?void 0:r.extInfo)?void 0:l.occupationCodeList}},insuredVOList:((null==e?void 0:e.tenantOrderInsuredList)||[]).map((e=>{var a,o;return{insuredCode:"",personVO:{...e,certType:T.CERT,socialFlag:`${(null==(a=null==e?void 0:e.extInfo)?void 0:a.hasSocialInsurance)||""}`,occupationCodeList:null==(o=null==e?void 0:e.extInfo)?void 0:o.occupationCodeList},productPlanVOList:[{insurerCode:null==t?void 0:t.productBasicInfoVO.insurerCode,planCode:Z.value||"",riskVOList:b(n)}]}})),productCode:null==t?void 0:t.productBasicInfoVO.productCode,productId:null==t?void 0:t.productBasicInfoVO.id,tenantId:V},{code:s}=await k(d);if("10000"===s){const{code:e,data:t}=await P(d);"10000"===e?(te.value=t,ae.value=(null==(u=null==(i=null==d?void 0:d.insuredVOList)?void 0:i[0])?void 0:u.productPlanVOList)||[]):te.value=void 0}})(ue.value,Q.value,ce.value))}),500));return i((()=>Z.value),(()=>{ne.value&&(oe.value=ne.value[Z.value])})),u((()=>{(async()=>{await j({productCode:C,withInsureInfo:!0,tenantId:V}).then((({code:e,data:t})=>{var n;"10000"===e&&(ee.value=t,document.title=(null==(n=t.tenantProductInsureVO)?void 0:n.productName)||"")})),R({productCode:C}).then((({code:e,data:t})=>{var n;"10000"===e&&(Q.value=t,ne.value=t.planFactor,(null==(n=t.productRelationPlanVOList)?void 0:n.length)&&(Z.value=t.productRelationPlanVOList[0].planCode||""),t.productFactor?oe.value=t.productFactor:t.planFactor&&(oe.value=t.planFactor[Z.value]))}))})(),setTimeout((async()=>{re.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const n=L,a=D,o=Y,r=w,l=d("ProPageWrap");return s(),c(l,null,{default:v((()=>{var e,l;return[p("div",U,[p("div",$,m(null==(l=null==(e=f(Q))?void 0:e.productBasicInfoVO)?void 0:l.productFullName),1),f(de)?(s(),c(a,{key:0,"show-line":!1,title:"保障年期"},{default:v((()=>{var e;return[I(n,{modelValue:f(Z),"onUpdate:modelValue":t[0]||(t[0]=e=>O(Z)?Z.value=e:null),class:"radio-group",prop:{label:"planName",value:"planCode"},options:null==(e=f(Q))?void 0:e.productRelationPlanVOList},null,8,["modelValue","options"])]})),_:1})):h("",!0),I(M,{ref_key:"formRef",ref:W,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"form-info":f(ue),"send-sms-code":()=>{},"input-align":"left","factor-object":f(oe)},{holderName:v((()=>[F])),insurerName:v((()=>[X])),_:1},8,["form-info","send-sms-code","factor-object"]),p("div",A,[I(o,{title:"保费",content:f(se)},null,8,["content"]),f(ve)?(s(),c(o,{key:0,title:"保障期间",content:`${f(pe).split(" ")[0]}~${f(me).split(" ")[0]}`},null,8,["content"])):(s(),c(r,{key:1,modelValue:f(le).currentDate,"onUpdate:modelValue":t[1]||(t[1]=e=>f(le).currentDate=e),label:"生效日期",name:"currentDate",type:"date",min:f(le).min,max:f(le).max,required:!0},null,8,["modelValue","min","max"]))]),p("div",K,[I(H,{shadow:!1,text:"分享用户确认投保",onClick:Ie})])])]})),_:1})}}}),[["__scopeId","data-v-5bf39d91"]]);export{z as default};
