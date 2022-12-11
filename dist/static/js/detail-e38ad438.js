import{h as e,C as t,r as a,k as l,x as n,y as o,p as i,Q as r,m as u,B as s,I as d,F as c,aA as v,N as p,a8 as f,j as m,l as y,z as h,E as I,T as w}from"./vendor-2c18d14d.js";import{u as C}from"./theme-126054aa.js";import{g as b,i as j}from"./trial-a034c63c.js";import{_ as O,n as x}from"./nextStep-0ad51aad.js";import{q as k}from"./index-e01fa935.js";import{s as L}from"./verify-d2c451fc.js";import{p as g}from"./product-47e89a2e.js";import{O as E,a as _}from"./order-c32c375d.js";import{u as N}from"./core-91796f1c.js";import{P as T}from"./index-f00d6259.js";import{_ as P}from"./index-e171da19.js";import{a as S}from"./trial-ac7be6ec.js";import"./infoCollection-3b91e21f.js";import"./relativeTime-5822caaa.js";import"./validator-5a13dc82.js";import"./useDicData-5d11b5ec.js";import"./index-1852c920.js";import"./utils-3d44f43e.js";import"./useStorage-defe8dab.js";const V={class:"sign-wrap"},R=["src"],B={class:"popup-body"},U={class:"sign-container-wrap"},D={class:"operate-bar"},A=s(" 请投保人正楷签署您的签名:"),F={class:"btns"},H=s("返回"),$=s("重写"),q=s("确定签字"),z=e({props:{option:{default:{}},modelValue:{default:""}},emits:["update:modelValue"],setup(e,{emit:p}){const f=t(!1),m=t(),y=t(""),h=t(!0),I=()=>{var e;f.value=!0,null==(e=m.value)||e.clear()},w=()=>{v({images:[y.value],className:"customer-sign-preview"})},C=()=>{f.value=!1},b=()=>{var e,t;null==(t=null==(e=m.value)?void 0:e.clear)||t.call(e)},j=()=>{var e;y.value=null==(e=m.value)?void 0:e.save(),p("update:modelValue",y.value),f.value=!1};return(e,t)=>{const v=a("van-button"),p=a("van-icon"),O=a("van-popup");return l(),n(c,null,[o("div",V,[y.value?(l(),n("img",{key:0,class:"preview-sign",src:y.value,alt:"",onClick:w},null,8,R)):i("",!0),r(v,{type:"primary",round:"",size:"small",onClick:I},{default:u((()=>[s(d(y.value?"重新签名":"点击签字"),1)])),_:1})]),r(O,{show:f.value,"onUpdate:show":t[1]||(t[1]=e=>f.value=e),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:u((()=>[o("div",B,[o("div",U,[r(k,{ref_key:"signRef",ref:m,placeholder:"请在此处签名",onStroke:t[0]||(t[0]=e=>h.value=!1)},null,512),o("div",D,[o("span",null,[r(p,{name:"info",color:"#ffaf22"}),A]),o("div",F,[r(v,{type:"default",class:"btn",onClick:C},{default:u((()=>[H])),_:1}),r(v,{type:"default",class:"btn",onClick:b},{default:u((()=>[$])),_:1}),r(v,{type:"primary",class:"btn",disabled:h.value,onClick:j},{default:u((()=>[q])),_:1},8,["disabled"])])])])])])),_:1},8,["show"])],64)}}});const G={key:0,class:"net-sale-detail-wrap"},W={class:"sign-cell"},M=o("div",{class:"sign-label"},"签名",-1),Q={class:"footer"},Y={class:"footer"},Z=e({setup(e){const s=C(),d=p(),v=f(),{orderNo:k="2022113021181894998",tenantId:V="9991000001"}=d.query;t();const R=t({}),B=t(!1),U=t({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:V,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:V}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),D=t(!1),A=t({}),F=t(),H=t(),$=t(""),q=t(""),Z=t(!1),J=t(!1),K=t(0),X=t([]),ee=t(""),te=t("");t("");const ae=()=>{Z.value=!1,J.value=!1},le=async()=>{Z.value=!1,J.value=!0,await L("HOLDER",$.value,U.value.id,`${V}`),x(U.value)},ne=async()=>{const{data:e,code:t}=await g({productCode:te.value,tenantId:V,withInsureInfo:!0});"10000"===t&&(H.value=e,(()=>{var e,t,a,l,n,o;let i={};if(i=q.value?(null==(a=((null==(t=null==(e=H.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList)||[]).find((e=>e.planCode===q.value)))?void 0:a.attachmentVOList)||[]:(null==(o=null==(n=null==(l=H.value)?void 0:l.tenantProductInsureVO)?void 0:n.planInsureVO)?void 0:o.attachmentVOList)||[],!i)return void(X.value=[]);const r={2:"richText",3:"link"};X.value=Object.keys(i).map((e=>(i[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),a=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===a?"pdf":"picture"}else e.attachmentType=r[e.attachmentType]})),{attachmentName:e,attachmentList:i[e]})))||[]})())},oe=async()=>{var e;const{code:t,data:a}=await b({orderNo:k,tenantId:V});"10000"===t&&(a.extInfo.buttonCode="EVENT_NETSALE_airSignature",U.value=a,q.value=null==(e=a.tenantOrderInsuredList[0])?void 0:e.planCode,te.value=a.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,B.value=!0,(e=>{const t=e.find((e=>1===e.riskType));var a,l;t&&(ee.value=(a=t.insurancePeriodValue,-1!==(l=S[t.insurancePeriodType]).indexOf("$")?l.replace("$",`${a}`):`${a||""}${l}`))})(a.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList||[]),(async()=>{const{code:e,data:t}=await j({productCode:te.value,tenantId:V});"10000"===e&&(F.value=t,R.value=t.productFactor)})(),ne(),a.orderStatus!==_.UNDER_WRITING_SUCCESS&&v.replace({path:"/baseInsurance/orderDetail",query:{...d.query,productCode:te.value,ISEE_BIZ:a.extInfo.iseeBizNo}}))},ie=async()=>{$.value?(J.value=!1,Z.value=!0):w("请先签字")};return N(),m((()=>{oe()})),(e,t)=>{const d=a("ProCell"),v=a("ProCard"),p=a("van-cell"),f=a("ProPageWrap"),m=a("ProFilePreview"),w=a("ProPopup"),C=a("van-config-provider");return l(),y(C,{"theme-vars":h(s)},{default:u((()=>{var e;return[r(f,null,{default:u((()=>{var e;return[(null==(e=F.value)?void 0:e.productBasicInfoVO)?(l(),n("div",G,[r(v,null,{default:u((()=>{var e;return[r(d,{title:"产品名称",content:null==(e=F.value)?void 0:e.productBasicInfoVO.productFullName},null,8,["content"])]})),_:1}),U.value.id?(l(),y(v,{key:0,"show-line":!1,title:"投保信息"},{default:u((()=>{var e,t,a,l,n;return[r(d,{title:"保费",content:U.value.orderAmount+"元"},null,8,["content"]),r(d,{title:"保险期限",content:ee.value},null,8,["content"]),r(d,{title:"起保日期",content:U.value.commencementTime},null,8,["content"]),r(d,{title:"终保日期",content:U.value.expiryDate},null,8,["content"]),r(d,{title:"保单状态",content:h(E)[U.value.orderStatus]},null,8,["content"]),r(d,{title:"订单编号",content:U.value.orderNo},null,8,["content"]),r(d,{title:"房屋地址",content:null==(t=null==(e=U.value.tenantOrderHolder)?void 0:e.extInfo)?void 0:t.familyAddress},null,8,["content"]),r(d,{title:"燃气编号",content:null==(n=null==(l=null==(a=U.value.tenantOrderSubjectList)?void 0:a[0])?void 0:l.extInfo)?void 0:n.subjectRelatedUserId},null,8,["content"])]})),_:1})):i("",!0),B.value?(l(),y(O,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":U.value,"factor-object":R.value,"input-align":"right"},null,8,["form-info","factor-object"])):i("",!0),r(v,{title:"阅读条款合同",class:"file-list-card"},{default:u((()=>[(l(!0),n(c,null,I(X.value,((e,t)=>(l(),y(p,{key:t,title:e.attachmentName,"is-link":"",onClick:t=>{return a=e.attachmentName,l=e.attachmentList,D.value=!0,void(A.value={title:a,fileContent:null==l?void 0:l[0]});var a,l}},null,8,["title","onClick"])))),128))])),_:1}),r(v,{title:"客户签名"},{default:u((()=>[o("div",W,[M,r(z,{modelValue:$.value,"onUpdate:modelValue":t[0]||(t[0]=e=>$.value=e)},null,8,["modelValue"])])])),_:1}),o("div",Q,[r(T,{shadow:!1,text:"提 交",onClick:ie})])])):i("",!0)]})),_:1}),r(w,{show:D.value,"onUpdate:show":t[2]||(t[2]=e=>D.value=e),class:"pre-notice-wrap",title:null==(e=A.value)?void 0:e.title,position:"bottom",style:{height:"600px"}},{default:u((()=>{var e,a,l,n;return[r(m,{content:null==(a=null==(e=A.value)?void 0:e.fileContent)?void 0:a.attachmentUri,type:null==(n=null==(l=A.value)?void 0:l.fileContent)?void 0:n.attachmentType},null,8,["content","type"]),o("div",Y,[r(T,{shadow:!1,text:"关闭",onClick:t[1]||(t[1]=e=>D.value=!1)})])]})),_:1},8,["show","title"]),Z.value&&0!==X.value.length?(l(),y(P,{key:0,show:Z.value,"onUpdate:show":t[3]||(t[3]=e=>Z.value=e),"content-list":X.value,"is-only-view":J.value,"active-index":K.value,text:J.value?"关闭":"我已逐页阅读上述内容并同意","force-read-cound":0,"on-close-file-preview":"",onSubmit:le,onOnCloseFilePreview:ae,onOnCloseFilePreviewByMask:t[4]||(t[4]=e=>Z.value=!1)},null,8,["show","content-list","is-only-view","active-index","text"])):i("",!0)]})),_:1},8,["theme-vars"])}}});export{Z as default};
