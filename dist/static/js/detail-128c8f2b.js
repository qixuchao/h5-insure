import{d as e,r as t,b as a,c as l,g as n,i as o,j as i,f as r,w as d,n as u,t as s,a1 as c,F as v,b8 as f,a as p,u as m,y,e as I,l as h,h as C,T as O}from"./index-37d1e580.js";import{u as b}from"./theme-65292714.js";import{g as w,i as x}from"./trial-25307ef6.js";import j from"./index-44ddacd1.js";import{s as L}from"./verify-473ea528.js";import{n as N}from"./nextStep-a1551d07.js";import{p as g}from"./product-a72399d4.js";import{O as k,a as E}from"./order-3da6861d.js";import P from"./index-d598301e.js";import _ from"./index-30009c10.js";import{u as T}from"./useDicData-c3e37d13.js";import{a as V}from"./trial-37fe9d9d.js";import"./pdfh5-e5c0db2a.js";import"./infoCollection-d63f471d.js";import"./relativeTime-190c9ccf.js";import"./validator-5a13dc82.js";import"./core-5d27589a.js";import"./index-c6b2b786.js";import"./useStorage-ebd75495.js";import"./utils-c39f0d24.js";const S={class:"sign-wrap"},H=["src"],R={class:"popup-body"},U={class:"sign-container-wrap"},A={class:"operate-bar"},D=u(" 请投保人正楷签署您的签名:"),B={class:"btns"},F=u("返回"),$=u("重写"),q=u("确定签字"),z=e({props:{option:{default:{}},modelValue:{default:""}},emits:["update:modelValue"],setup(e,{emit:p}){const m=t(!1),y=t(),I=t(""),h=t(!0),C=()=>{var e;m.value=!0,null==(e=y.value)||e.clear()},O=()=>{f({images:[I.value],className:"customer-sign-preview"})},b=()=>{m.value=!1},w=()=>{var e,t;null==(t=null==(e=y.value)?void 0:e.clear)||t.call(e)},x=()=>{var e;I.value=null==(e=y.value)?void 0:e.save(),p("update:modelValue",I.value),m.value=!1};return(e,t)=>{const f=a("van-button"),p=a("van-icon"),j=a("van-popup");return l(),n(v,null,[o("div",S,[I.value?(l(),n("img",{key:0,class:"preview-sign",src:I.value,alt:"",onClick:O},null,8,H)):i("",!0),r(f,{type:"primary",round:"",size:"small",onClick:C},{default:d((()=>[u(s(I.value?"重新签名":"点击签字"),1)])),_:1})]),r(j,{show:m.value,"onUpdate:show":t[1]||(t[1]=e=>m.value=e),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:d((()=>[o("div",R,[o("div",U,[r(c,{ref_key:"signRef",ref:y,placeholder:"请在此处签名",onStroke:t[0]||(t[0]=e=>h.value=!1)},null,512),o("div",A,[o("span",null,[r(p,{name:"info",color:"#ffaf22"}),D]),o("div",B,[r(f,{type:"default",class:"btn",onClick:b},{default:d((()=>[F])),_:1}),r(f,{type:"default",class:"btn",onClick:w},{default:d((()=>[$])),_:1}),r(f,{type:"primary",class:"btn",disabled:h.value,onClick:x},{default:d((()=>[q])),_:1},8,["disabled"])])])])])])),_:1},8,["show"])],64)}}});const G={key:0,class:"net-sale-detail-wrap"},W={class:"sign-cell"},M=o("div",{class:"sign-label"},"签名",-1),Y={class:"footer"},Z={class:"footer"},J=e({setup(e){const u=b(),s=p(),c=m(),{orderNo:f="2022113021181894998",tenantId:S="9991000001"}=s.query,H=t({}),R=t(!1),U=T("NATIONAL_REGION_CODE"),A=t({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:S,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:S}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),D=t(!1),B=t(),F=t(),$=t(),q=t(""),J=t(""),K=t(!1),Q=t(!1),X=t(0),ee=t([]),te=t(""),ae=t("");t("");const le=()=>{K.value=!1,Q.value=!1},ne=async()=>{K.value=!1,Q.value=!0,await L("HOLDER",q.value,A.value.id,`${S}`),N(A.value)},oe=async()=>{const{data:e,code:t}=await g({productCode:ae.value,tenantId:S,withInsureInfo:!0});"10000"===t&&($.value=e,(()=>{var e,t,a,l,n,o;let i={};if(i=J.value?(null==(a=((null==(t=null==(e=$.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList)||[]).find((e=>e.planCode===J.value)))?void 0:a.attachmentVOList)||[]:(null==(o=null==(n=null==(l=$.value)?void 0:l.tenantProductInsureVO)?void 0:n.planInsureVO)?void 0:o.attachmentVOList)||[],!i)return void(ee.value=[]);const r={2:"richText",3:"link"};ee.value=Object.keys(i).map((e=>(i[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),a=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===a?"pdf":"picture"}else e.attachmentType=r[e.attachmentType]})),{attachmentName:e,attachmentList:i[e]})))||[]})())},ie=async()=>{var e;const{code:t,data:a}=await w({orderNo:f,tenantId:S});"10000"===t&&(a.extInfo.buttonCode="EVENT_NETSALE_airSignature",A.value=a,J.value=null==(e=a.tenantOrderInsuredList[0])?void 0:e.planCode,ae.value=a.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,R.value=!0,(e=>{const t=e.find((e=>1===e.riskType));var a,l;t&&(te.value=(a=t.insurancePeriodValue,-1!==(l=V[t.insurancePeriodType]).indexOf("$")?l.replace("$",`${a}`):`${a||""}${l}`))})(a.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList||[]),(async()=>{const{code:e,data:t}=await x({productCode:ae.value,tenantId:S});"10000"===e&&(F.value=t,H.value=t.productFactor)})(),oe(),a.orderStatus!==E.UNDER_WRITING_SUCCESS&&c.push({path:"/baseInsurance/orderDetail",query:{...s.query,productCode:ae.value,ISEE_BIZ:a.extInfo.iseeBizNo}}))},re=async()=>{q.value?(Q.value=!1,K.value=!0):O("请先签字")};return y((()=>{ie()})),(e,t)=>{const s=a("ProCell"),c=a("ProCard"),f=a("ProCascader"),p=a("van-cell"),m=a("ProPageWrap"),y=a("ProFilePreview"),O=a("ProPopup"),b=a("van-config-provider");return l(),I(b,{"theme-vars":h(u)},{default:d((()=>{var e;return[r(m,null,{default:d((()=>{var e;return[(null==(e=F.value)?void 0:e.productBasicInfoVO)?(l(),n("div",G,[r(c,null,{default:d((()=>{var e;return[r(s,{title:"产品名称",content:null==(e=F.value)?void 0:e.productBasicInfoVO.productFullName},null,8,["content"])]})),_:1}),A.value.id?(l(),I(c,{key:0,"show-line":!1,title:"投保信息"},{default:d((()=>{var e,a,l,n;return[r(s,{title:"保费",content:A.value.orderAmount+"元"},null,8,["content"]),r(s,{title:"保险期限",content:te.value},null,8,["content"]),r(s,{title:"起保日期",content:A.value.commencementTime},null,8,["content"]),r(s,{title:"终保日期",content:A.value.expiryDate},null,8,["content"]),r(s,{title:"保单状态",content:h(k)[A.value.orderStatus]},null,8,["content"]),r(s,{title:"订单编号",content:A.value.orderNo},null,8,["content"]),r(f,{modelValue:A.value.tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:modelValue":t[0]||(t[0]=e=>A.value.tenantOrderHolder.extInfo.familyAreaCode=e),field1:A.value.tenantOrderHolder.extInfo.familyProvinceCode,"onUpdate:field1":t[1]||(t[1]=e=>A.value.tenantOrderHolder.extInfo.familyProvinceCode=e),field2:A.value.tenantOrderHolder.extInfo.familyCityCode,"onUpdate:field2":t[2]||(t[2]=e=>A.value.tenantOrderHolder.extInfo.familyCityCode=e),field3:A.value.tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:field3":t[3]||(t[3]=e=>A.value.tenantOrderHolder.extInfo.familyAreaCode=e),label:"房产所在地",name:"familyProvinceCode","is-link":"","is-view":"",class:"insured-info","data-source":h(U),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"]),r(s,{title:"详细地址",content:null==(a=null==(e=A.value.tenantOrderHolder)?void 0:e.extInfo)?void 0:a.familyAddress},null,8,["content"]),r(s,{title:"燃气编号",content:null==(n=null==(l=A.value.tenantOrderSubjectList)?void 0:l[0])?void 0:n.subjectNo},null,8,["content"])]})),_:1})):i("",!0),R.value?(l(),I(j,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":A.value,"factor-object":H.value,"input-align":"right"},null,8,["form-info","factor-object"])):i("",!0),r(c,{title:"阅读条款合同",class:"file-list-card"},{default:d((()=>[(l(!0),n(v,null,C(ee.value,((e,t)=>(l(),I(p,{key:t,title:e.attachmentName,"is-link":"",onClick:t=>{return a=e.attachmentName,l=e.attachmentList,D.value=!0,void(B.value={title:a,fileContent:null==l?void 0:l[0]});var a,l}},null,8,["title","onClick"])))),128))])),_:1}),r(c,{title:"客户签名"},{default:d((()=>[o("div",W,[M,r(z,{modelValue:q.value,"onUpdate:modelValue":t[4]||(t[4]=e=>q.value=e)},null,8,["modelValue"])])])),_:1}),o("div",Y,[r(P,{shadow:!1,text:"提 交",onClick:re})])])):i("",!0)]})),_:1}),r(O,{show:D.value,"onUpdate:show":t[6]||(t[6]=e=>D.value=e),class:"pre-notice-wrap",title:null==(e=B.value)?void 0:e.title,position:"bottom",style:{height:"600px"}},{default:d((()=>{var e,a,l,n;return[r(y,{content:null==(a=null==(e=B.value)?void 0:e.fileContent)?void 0:a.attachmentUri,type:null==(n=null==(l=B.value)?void 0:l.fileContent)?void 0:n.attachmentType},null,8,["content","type"]),o("div",Z,[r(P,{shadow:!1,text:"关闭",onClick:t[5]||(t[5]=e=>D.value=!1)})])]})),_:1},8,["show","title"]),K.value&&0!==ee.value.length?(l(),I(_,{key:0,show:K.value,"onUpdate:show":t[7]||(t[7]=e=>K.value=e),"content-list":ee.value,"is-only-view":Q.value,"active-index":X.value,text:Q.value?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:ne,onOnCloseFilePreview:le,onOnCloseFilePreviewByMask:t[8]||(t[8]=e=>K.value=!1)},null,8,["show","content-list","is-only-view","active-index","text"])):i("",!0)]})),_:1},8,["theme-vars"])}}});export{J as default};
