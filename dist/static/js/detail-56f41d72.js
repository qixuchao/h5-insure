import{i as e,r as t,l as a,m as n,s as o,B as l,t as r,p as i,F as s,G as d,P as c,aa as u,k as p,n as f,L as v,x as m,C as I,a5 as y,a6 as b}from"./vendor-a007eb5d.js";import{u as j}from"./theme-467ed2f7.js";import{g as C,i as _}from"./trial-085eb559.js";import{_ as g,n as w}from"./nextStep-fa32caac.js";import{s as E}from"./verify-df8fcc38.js";import{p as h}from"./product-0f9c4f9e.js";import{_ as x}from"./index-12c50db1.js";import"./infoCollection-ee27d274.js";import"./relativeTime-7ca1e2c9.js";import"./useDicData-6871e606.js";import"./core-06aa03f8.js";import"./index-92c65efa.js";const L={class:"sign-wrap"},N=l("img",{src:"",alt:""},null,-1),O=d("点击签字"),R={class:"popup-body"},T={class:"sign-container-wrap"},k={class:"operate-bar"},S=l("span",null,"请投保人正楷签署您的签名:",-1),B=d("返回"),H=d("重写"),P=d("确定签字"),A=e({props:{option:{default:{}}},setup(e){const d=t(!1),c=t(),u=()=>{d.value=!0},p=()=>{d.value=!1},f=()=>{var e,t;null==(t=null==(e=c.value)?void 0:e.clear)||t.call(e)},v=()=>{};return(t,m)=>{const I=a("van-button"),y=a("ProSign"),b=a("van-popup");return n(),o(s,null,[l("div",L,[N,r(I,{type:"primary",onClick:u},{default:i((()=>[O])),_:1})]),r(b,{show:d.value,"onUpdate:show":m[0]||(m[0]=e=>d.value=e),position:"bottom",style:{height:"100%"}},{default:i((()=>[l("div",R,[l("div",T,[r(y,{ref_key:"signRef",ref:c,option:e.option},null,8,["option"]),l("div",k,[S,r(I,{onClick:p},{default:i((()=>[B])),_:1}),r(I,{onClick:f},{default:i((()=>[H])),_:1}),r(I,{onClick:v},{default:i((()=>[P])),_:1})])])])])),_:1},8,["show"])],64)}}});const D={class:"net-sale-wrap"},V={class:"part"},F={class:"product-name"},U={class:"part"},G={class:"part"},q={class:"part"},z={class:"sign-cell"},J=(e=>(y("data-v-83607634"),e=e(),b(),e))((()=>l("div",{class:"sign-label"},"签名",-1))),W={class:"footer-button"},X=d("提交");var Y=x(e({setup(e){const o=j(),s=c();u();const{orderNo:d="2022120119060692150",tenantId:y="9991000001",productCode:b="HTEJBX"}=s.query;t();const x=t({}),L=t({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:y,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:y}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),N=t(),O=t(),R=t(),T=async()=>{await E("HOLDER","213123123213131",L.value.id,`${y}`),w(L.value)};return p((()=>{(async()=>{const{code:e,data:t}=await _({productCode:b,tenantId:y});"10000"===e&&(N.value=t,x.value=t.productFactor)})(),(async()=>{const{data:e,code:t}=await h({productCode:b,tenantId:y});"10000"===t&&(O.value=e)})(),(async()=>{const{code:e,data:t}=await C({orderNo:d,tenantId:y});"10000"===e&&(t.extInfo.buttonCode="EVENT_NETSALE_airSignature",L.value=t)})()})),(e,t)=>{const s=a("ProCell"),d=a("ProCard"),c=a("van-cell"),u=a("van-button"),p=a("ProPageWrap"),y=a("van-config-provider");return n(),f(y,{"theme-vars":I(o)},{default:i((()=>[r(p,null,{default:i((()=>[l("div",D,[L.value.id?(n(),f(d,{key:0,"show-line":!1,title:"投保信息"},{default:i((()=>{var e,t,a,n,o,i;return[l("div",V,[l("div",F,v(null==(e=N.value)?void 0:e.productBasicInfoVO.productFullName),1)]),l("div",U,[r(s,{title:"保费",content:L.value.orderAmount},null,8,["content"]),r(s,{title:"保险期限",content:null==(t=L.value.tenantOrderInsuredList[0])?void 0:t.planName},null,8,["content"]),r(s,{title:"起保日期",content:L.value.commencementTime},null,8,["content"]),r(s,{title:"终保日期",content:L.value.expiryDate},null,8,["content"]),r(s,{title:"保单状态",content:L.value.orderStatus},null,8,["content"])]),l("div",G,[r(s,{title:"订单编号",content:L.value.orderNo},null,8,["content"]),r(s,{title:"销售人名称",content:""}),r(s,{title:"房屋地址",content:null==(n=null==(a=L.value.tenantOrderHolder)?void 0:a.extInfo)?void 0:n.familyAddress},null,8,["content"]),r(s,{title:"燃气编号",content:null==(i=null==(o=L.value.tenantOrderInsuredList)?void 0:o[0])?void 0:i.extInfo.subjectRelatedUserId},null,8,["content"])])]})),_:1})):m("",!0),r(g,{ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":L.value,"factor-object":x.value,"input-align":"right"},null,8,["form-info","factor-object"]),r(d,{title:"阅读条款合同"},{default:i((()=>[l("div",q,[r(c,{title:"客户告知书","is-link":""})])])),_:1}),r(d,{title:"客户签名"},{default:i((()=>[l("div",z,[J,r(A,{modelValue:R.value,"onUpdate:modelValue":t[0]||(t[0]=e=>R.value=e)},null,8,["modelValue"])])])),_:1}),l("div",W,[r(u,{type:"primary",block:"",onClick:T},{default:i((()=>[X])),_:1})])])])),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-83607634"]]);export{Y as default};
