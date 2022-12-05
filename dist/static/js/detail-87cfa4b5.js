import{h as e,r as t,k as a,l,y as n,z as o,s as i,Q as u,n as r,C as s,I as d,F as c,aA as v,N as p,a8 as f,j as m,Z as h,m as y,A as I,E as b,T as w}from"./vendor-372f2d73.js";import{u as C}from"./theme-bc16780d.js";import{g as j,a as x,i as O}from"./trial-c5f9d30a.js";import{_ as g,n as L}from"./nextStep-49d2a67e.js";import{q as N}from"./index-8cc339c1.js";import{s as _}from"./verify-3dbf7522.js";import{p as k}from"./product-8d3a2662.js";import{O as E,a as T}from"./order-203fdf87.js";import{u as S,s as P}from"./core-ddac5727.js";import{P as R}from"./index-47ca3b82.js";import{_ as U}from"./index-1466e725.js";import"./infoCollection-11d47506.js";import"./relativeTime-701fe99b.js";import"./useDicData-d0145451.js";import"./index-d24ff306.js";import"./utils-7230e7b2.js";import"./useStorage-45882dd1.js";import"./trial-17a45ddb.js";const V={class:"sign-wrap"},A=["src"],D={class:"popup-body"},F={class:"sign-container-wrap"},H={class:"operate-bar"},B=s(" 请投保人正楷签署您的签名:"),q={class:"btns"},z=s("返回"),G=s("重写"),W=s("确定签字"),Y=e({props:{option:{default:{}},modelValue:{default:""}},emits:["update:modelValue"],setup(e,{emit:p}){const f=t(!1),m=t(),h=t(""),y=t(!0),I=()=>{var e;f.value=!0,null==(e=m.value)||e.clear()},b=()=>{v({images:[h.value],className:"customer-sign-preview"})},w=()=>{f.value=!1},C=()=>{var e,t;null==(t=null==(e=m.value)?void 0:e.clear)||t.call(e)},j=()=>{var e;h.value=null==(e=m.value)?void 0:e.save(),p("update:modelValue",h.value),f.value=!1};return(e,t)=>{const v=a("van-button"),p=a("van-icon"),x=a("van-popup");return l(),n(c,null,[o("div",V,[h.value?(l(),n("img",{key:0,class:"preview-sign",src:h.value,alt:"",onClick:b},null,8,A)):i("",!0),u(v,{type:"primary",round:"",size:"small",onClick:I},{default:r((()=>[s(d(h.value?"重新签名":"点击签字"),1)])),_:1})]),u(x,{show:f.value,"onUpdate:show":t[1]||(t[1]=e=>f.value=e),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:r((()=>[o("div",D,[o("div",F,[u(N,{ref_key:"signRef",ref:m,placeholder:"请在此处签名",onStroke:t[0]||(t[0]=e=>y.value=!1)},null,512),o("div",H,[o("span",null,[u(p,{name:"info",color:"#ffaf22"}),B]),o("div",q,[u(v,{type:"default",class:"btn",onClick:w},{default:r((()=>[z])),_:1}),u(v,{type:"default",class:"btn",onClick:C},{default:r((()=>[G])),_:1}),u(v,{type:"primary",class:"btn",disabled:y.value,onClick:j},{default:r((()=>[W])),_:1},8,["disabled"])])])])])])),_:1},8,["show"])],64)}}});const Q={class:"net-sale-detail-wrap"},Z={class:"sign-cell"},$=o("div",{class:"sign-label"},"签名",-1),J={class:"footer"},K={class:"footer"},M=e({setup(e){const s=C(),d=p(),v=f(),{orderNo:N="2022113021181894998",tenantId:V="9991000001"}=d.query;t();const A=t({}),D=t(!1),F=t({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:V,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:V}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),H=t(!1),B=t({}),q=t(),z=t(),G=t(""),W=t(""),M=t(!1),X=t(!1),ee=t(0),te=t([]),ae=t(""),le=t(""),ne=t({}),oe=()=>{M.value=!1,X.value=!1},ie=async()=>{M.value=!1,X.value=!0,await _("HOLDER",G.value,F.value.id,`${V}`),L(F.value)},ue=async()=>{const{data:e,code:t}=await k({productCode:le.value,tenantId:V,withInsureInfo:!0});"10000"===t&&(z.value=e,(()=>{var e,t,a;let l={};if(l=(null==(a=((null==(t=null==(e=z.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList)||[]).find((e=>e.planCode===W.value)))?void 0:a.attachmentVOList)||[],!l)return void(te.value=[]);const n={2:"richText",3:"link"};te.value=Object.keys(l).map((e=>(l[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),a=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===a?"pdf":"picture"}else e.attachmentType=n[e.attachmentType]})),{attachmentName:e,attachmentList:l[e]})))||[]})())},re=async()=>{var e;const{code:t,data:a}=await j({orderNo:N,tenantId:V});if("10000"===t)if(a.extInfo.buttonCode="EVENT_NETSALE_airSignature",F.value=a,W.value=null==(e=a.tenantOrderInsuredList[0])?void 0:e.planCode,le.value=a.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,D.value=!0,(async()=>{const{code:e,data:t}=await O({productCode:le.value,tenantId:V});"10000"===e&&(q.value=t,A.value=t.productFactor)})(),ue(),a.orderStatus===T.PAYING){F.value.extInfo.redirectUrl="";const{code:e,data:t}=await x(F.value);"10000"===e&&P(t.paymentUrl)}else a.orderStatus!==T.UNDER_WRITING_SUCCESS&&v.replace({path:"/baseInsurance/orderDetail",query:{...d.query,productCode:le.value}})},se=async()=>{G.value?(X.value=!1,M.value=!0):w("请先签字")};return S(),m((()=>{re()})),h([()=>W.value,()=>z.value],(()=>{var e,t,a;W.value&&(ne.value=(null==(a=((null==(t=null==(e=z.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList)||[]).find((e=>(e.planCode===W.value&&(ae.value=e.planName),e.planCode===W.value))))?void 0:a.attachmentVOList)||[])}),{deep:!0,immediate:!0}),(e,t)=>{const d=a("ProCell"),v=a("ProCard"),p=a("van-cell"),f=a("ProPageWrap"),m=a("ProFilePreview"),h=a("ProPopup"),w=a("van-config-provider");return l(),y(w,{"theme-vars":I(s)},{default:r((()=>{var e;return[u(f,null,{default:r((()=>[o("div",Q,[u(v,null,{default:r((()=>{var e;return[u(d,{title:"产品名称",content:null==(e=q.value)?void 0:e.productBasicInfoVO.productFullName},null,8,["content"])]})),_:1}),F.value.id?(l(),y(v,{key:0,"show-line":!1,title:"投保信息"},{default:r((()=>{var e,t,a,l,n;return[u(d,{title:"保费",content:F.value.orderAmount+"元"},null,8,["content"]),u(d,{title:"保险期限",content:ae.value},null,8,["content"]),u(d,{title:"起保日期",content:F.value.commencementTime},null,8,["content"]),u(d,{title:"终保日期",content:F.value.expiryDate},null,8,["content"]),u(d,{title:"保单状态",content:I(E)[F.value.orderStatus]},null,8,["content"]),u(d,{title:"订单编号",content:F.value.orderNo},null,8,["content"]),u(d,{title:"房屋地址",content:null==(t=null==(e=F.value.tenantOrderHolder)?void 0:e.extInfo)?void 0:t.familyAddress},null,8,["content"]),u(d,{title:"燃气编号",content:null==(n=null==(l=null==(a=F.value.tenantOrderSubjectList)?void 0:a[0])?void 0:l.extInfo)?void 0:n.subjectRelatedUserId},null,8,["content"])]})),_:1})):i("",!0),D.value?(l(),y(g,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":F.value,"factor-object":A.value,"input-align":"right"},null,8,["form-info","factor-object"])):i("",!0),u(v,{title:"阅读条款合同",class:"file-list-card"},{default:r((()=>[(l(!0),n(c,null,b(te.value,((e,t)=>(l(),y(p,{key:t,title:e.attachmentName,"is-link":"",onClick:t=>{return a=e.attachmentName,l=e.attachmentList,H.value=!0,void(B.value={title:a,fileContent:null==l?void 0:l[0]});var a,l}},null,8,["title","onClick"])))),128))])),_:1}),u(v,{title:"客户签名"},{default:r((()=>[o("div",Z,[$,u(Y,{modelValue:G.value,"onUpdate:modelValue":t[0]||(t[0]=e=>G.value=e)},null,8,["modelValue"])])])),_:1}),o("div",J,[u(R,{shadow:!1,text:"提 交",onClick:se})])])])),_:1}),u(h,{show:H.value,"onUpdate:show":t[2]||(t[2]=e=>H.value=e),class:"pre-notice-wrap",title:null==(e=B.value)?void 0:e.title,position:"bottom",style:{height:"600px"}},{default:r((()=>{var e,a,l,n;return[u(m,{content:null==(a=null==(e=B.value)?void 0:e.fileContent)?void 0:a.attachmentUri,type:null==(n=null==(l=B.value)?void 0:l.fileContent)?void 0:n.attachmentType},null,8,["content","type"]),o("div",K,[u(R,{shadow:!1,text:"关闭",onClick:t[1]||(t[1]=e=>H.value=!1)})])]})),_:1},8,["show","title"]),M.value&&0!==te.value.length?(l(),y(U,{key:0,show:M.value,"onUpdate:show":t[3]||(t[3]=e=>M.value=e),"content-list":te.value,"is-only-view":X.value,"active-index":ee.value,text:X.value?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:ie,onOnCloseFilePreview:oe},null,8,["show","content-list","is-only-view","active-index","text"])):i("",!0)]})),_:1},8,["theme-vars"])}}});export{M as default};
