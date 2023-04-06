import{d as e,r as t,c as a,h as n,j as l,g as o,k as i,f as r,w as s,n as d,t as u,af as c,a7 as f,F as v,cr as m,B as p,b4 as y,b3 as h,b_ as I,a as C,u as O,G as b,C as w,b as x,e as j,i as L,T as N,a3 as _,P as g,aF as k,aQ as E,a8 as T,a9 as V}from"./index-40904ad2.js";import{g as P,i as S}from"./trial-660dccee.js";import{_ as R}from"./index-983a31e9.js";import{s as H}from"./verify-e80d6e40.js";import{n as U}from"./nextStep-7f6d3399.js";import{p as A}from"./product-9fd58081.js";import{O as B,a as D}from"./order-2c8dd199.js";import{P as F}from"./index-9e678f26.js";import $ from"./index-82a19194.js";import{u as G}from"./useDicData-2678660b.js";import{a as q}from"./trial-48f90195.js";import"./pdfh5-008ca364.js";import"./infoCollection-a0ef6c70.js";import"./relativeTime-fde2a46e.js";import"./validator-5a13dc82.js";import"./core-cd46afa3.js";import"./constant-c3f28a3b.js";import"./theme-65292714.js";import"./utils-5bd63d91.js";const z={class:"sign-wrap"},W=["src"],Y={class:"popup-body"},M={class:"sign-container-wrap"},Q={class:"operate-bar"},Z={class:"btns"},J=e({__name:"index",props:{option:{default:{}},modelValue:{default:""}},emits:["update:modelValue"],setup(e,{emit:I}){const C=t(!1),O=t(),b=t(""),w=t(!0),x=()=>{var e;C.value=!0,null==(e=O.value)||e.clear()},j=()=>{m({images:[b.value],className:"customer-sign-preview"})},L=()=>{C.value=!1},N=()=>{var e,t;null==(t=null==(e=O.value)?void 0:e.clear)||t.call(e)},_=()=>{var e;b.value=null==(e=O.value)?void 0:e.save(),I("update:modelValue",b.value),C.value=!1};return(e,t)=>{const m=p,I=y,g=h;return a(),n(v,null,[l("div",z,[o(b)?(a(),n("img",{key:0,class:"preview-sign",src:o(b),alt:"",onClick:j},null,8,W)):i("",!0),r(m,{type:"primary",round:"",size:"small",onClick:x},{default:s((()=>[d(u(o(b)?"重新签名":"点击签字"),1)])),_:1})]),r(g,{show:o(C),"onUpdate:show":t[1]||(t[1]=e=>f(C)?C.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:s((()=>[l("div",Y,[l("div",M,[r(c,{ref_key:"signRef",ref:O,placeholder:"请在此处签名",onStroke:t[0]||(t[0]=e=>w.value=!1)},null,512),l("div",Q,[l("span",null,[r(I,{name:"info",color:"#ffaf22"}),d(" 请投保人正楷签署您的签名:")]),l("div",Z,[r(m,{type:"default",class:"btn",onClick:L},{default:s((()=>[d("返回")])),_:1}),r(m,{type:"default",class:"btn",onClick:N},{default:s((()=>[d("重写")])),_:1}),r(m,{type:"primary",class:"btn",disabled:o(w),onClick:_},{default:s((()=>[d("确定签字")])),_:1},8,["disabled"])])])])])])),_:1},8,["show"])],64)}}});const K={key:0,class:"net-sale-detail-wrap"},X={class:"sign-cell"},ee=l("div",{class:"sign-label"},"签名",-1),te={class:"footer"},ae={class:"footer"},ne=e({__name:"detail",setup(e){I();const d=C(),u=O(),{orderNo:c="2022113021181894998",tenantId:m="9991000001"}=d.query,p=t({}),y=t(!1),h=G("NATIONAL_REGION_CODE"),z=t({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:m,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:m}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),W=t(!1),Y=t(),M=t(),Q=t(),Z=t(""),ne=t(""),le=t(!1),oe=t(!1),ie=t(0),re=t([]),se=t(""),de=t("");t("");const ue=t([]),ce=()=>{le.value=!1,oe.value=!1},fe=async()=>{le.value=!1,oe.value=!0,await H("HOLDER",Z.value,z.value.id,`${m}`),U(z.value)},ve=async()=>{const{data:e,code:t}=await A({productCode:de.value,tenantId:m,withInsureInfo:!0});"10000"===t&&(Q.value=e,(()=>{var e,t,a,n,l,o;let i={};if(i=ne.value?(null==(a=((null==(t=null==(e=Q.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList)||[]).find((e=>e.planCode===ne.value)))?void 0:a.attachmentVOList)||[]:(null==(o=null==(l=null==(n=Q.value)?void 0:n.tenantProductInsureVO)?void 0:l.planInsureVO)?void 0:o.attachmentVOList)||[],!i)return void(re.value=[]);const r={2:"richText",3:"link"};re.value=Object.keys(i).map((e=>(i[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),a=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===a?"pdf":"picture"}else e.attachmentType=r[e.attachmentType]})),{attachmentName:e,attachmentList:i[e]})))||[],ue.value=re.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.mustReadFlag===V.YES))}))).filter((e=>e.attachmentList.length))})())},me=async()=>{var e;const{code:t,data:a}=await P({orderNo:c,tenantId:m});"10000"===t&&(a.extInfo.buttonCode="EVENT_NETSALE_airSignature",z.value=a,ne.value=null==(e=a.tenantOrderInsuredList[0])?void 0:e.planCode,de.value=a.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,y.value=!0,(e=>{const t=e.find((e=>1===e.riskType));var a,n;t&&(se.value=(a=t.insurancePeriodValue,-1!==(n=q[t.insurancePeriodType]).indexOf("$")?n.replace("$",`${a}`):`${a||""}${n}`))})(a.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList||[]),(async()=>{const{code:e,data:t}=await S({productCode:de.value,tenantId:m});"10000"===e&&(M.value=t,p.value=t.productFactor)})(),ve(),a.orderStatus!==D.UNDER_WRITING_SUCCESS&&u.push({path:"/baseInsurance/orderDetail",query:{...d.query,productCode:de.value,ISEE_BIZ:a.extInfo.iseeBizNo}}))},pe=async()=>{Z.value?(oe.value=!1,ue.value.length?le.value=!0:fe()):N("请先签字")};return b((()=>{me()})),(e,t)=>{var d;const u=_,c=g,m=k,I=w,C=x("ProPageWrap"),O=E,b=T;return a(),n(v,null,[r(C,null,{default:s((()=>{var e;return[(null==(e=o(M))?void 0:e.productBasicInfoVO)?(a(),n("div",K,[r(c,null,{default:s((()=>{var e;return[r(u,{title:"产品名称",content:null==(e=o(M))?void 0:e.productBasicInfoVO.productFullName},null,8,["content"])]})),_:1}),o(z).id?(a(),j(c,{key:0,"show-line":!1,title:"投保信息"},{default:s((()=>{var e,a,n,l;return[r(u,{title:"保费",content:o(z).orderAmount+"元"},null,8,["content"]),r(u,{title:"保险期限",content:o(se)},null,8,["content"]),r(u,{title:"起保日期",content:o(z).commencementTime},null,8,["content"]),r(u,{title:"终保日期",content:o(z).expiryDate},null,8,["content"]),r(u,{title:"保单状态",content:o(B)[o(z).orderStatus]},null,8,["content"]),r(u,{title:"订单编号",content:o(z).orderNo},null,8,["content"]),r(m,{modelValue:o(z).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:modelValue":t[0]||(t[0]=e=>o(z).tenantOrderHolder.extInfo.familyAreaCode=e),field1:o(z).tenantOrderHolder.extInfo.familyProvinceCode,"onUpdate:field1":t[1]||(t[1]=e=>o(z).tenantOrderHolder.extInfo.familyProvinceCode=e),field2:o(z).tenantOrderHolder.extInfo.familyCityCode,"onUpdate:field2":t[2]||(t[2]=e=>o(z).tenantOrderHolder.extInfo.familyCityCode=e),field3:o(z).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:field3":t[3]||(t[3]=e=>o(z).tenantOrderHolder.extInfo.familyAreaCode=e),label:"房产所在地",name:"familyProvinceCode","is-link":"","is-view":"",class:"insured-info","data-source":o(h),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"]),r(u,{title:"详细地址",content:null==(a=null==(e=o(z).tenantOrderHolder)?void 0:e.extInfo)?void 0:a.familyAddress},null,8,["content"]),r(u,{title:"燃气编号",content:null==(l=null==(n=o(z).tenantOrderSubjectList)?void 0:n[0])?void 0:l.subjectNo},null,8,["content"])]})),_:1})):i("",!0),o(y)?(a(),j(R,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":o(z),"factor-object":o(p),"input-align":"right"},null,8,["form-info","factor-object"])):i("",!0),r(c,{title:"阅读条款合同",class:"file-list-card"},{default:s((()=>[(a(!0),n(v,null,L(o(re),((e,t)=>(a(),j(I,{key:t,title:e.attachmentName,"is-link":"",onClick:t=>{return a=e.attachmentName,n=e.attachmentList,W.value=!0,void(Y.value={title:a,fileContent:null==n?void 0:n[0]});var a,n}},null,8,["title","onClick"])))),128))])),_:1}),r(c,{title:"客户签名"},{default:s((()=>[l("div",X,[ee,r(J,{modelValue:o(Z),"onUpdate:modelValue":t[4]||(t[4]=e=>f(Z)?Z.value=e:null)},null,8,["modelValue"])])])),_:1}),l("div",te,[r(F,{shadow:!1,text:"提 交",onClick:pe})])])):i("",!0)]})),_:1}),r(b,{show:o(W),"onUpdate:show":t[6]||(t[6]=e=>f(W)?W.value=e:null),class:"pre-notice-wrap",title:null==(d=o(Y))?void 0:d.title,position:"bottom",style:{height:"600px"}},{default:s((()=>{var e,a,n,i;return[r(O,{content:null==(a=null==(e=o(Y))?void 0:e.fileContent)?void 0:a.attachmentUri,type:null==(i=null==(n=o(Y))?void 0:n.fileContent)?void 0:i.attachmentType},null,8,["content","type"]),l("div",ae,[r(F,{shadow:!1,text:"关闭",onClick:t[5]||(t[5]=e=>W.value=!1)})])]})),_:1},8,["show","title"]),o(le)&&0!==o(ue).length?(a(),j($,{key:0,show:o(le),"onUpdate:show":t[7]||(t[7]=e=>f(le)?le.value=e:null),"content-list":o(ue),"is-only-view":o(oe),"active-index":o(ie),text:o(oe)?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:fe,onOnCloseFilePreview:ce,onOnCloseFilePreviewByMask:t[8]||(t[8]=e=>le.value=!1)},null,8,["show","content-list","is-only-view","active-index","text"])):i("",!0)],64)}}});export{ne as default};
