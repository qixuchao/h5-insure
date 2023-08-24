import{d as e,k as t,z as a,o as n,c as l,a as o,g as i,u as r,s,b as d,w as u,a8 as c,e as v,bR as m,p as f,F as p,_ as I,cD as y,aR as h,aP as b,bY as C,a3 as O,cE as w,b_ as x,i as g,h as j,O as L,m as N,n as E,cF as _,f as k,bL as T,T as S,bM as V,aB as R,cr as P,al as H,bG as U,ao as A,a6 as D}from"./index-dc5ec44c.js";import{g as B,i as F}from"./trial-7511f230.js";import{_ as $}from"./index-c08499e2.js";import{n as z}from"./nextStep-66a8620e.js";import{p as G}from"./product-f84ae251.js";import{P as q}from"./index-af91b1ee.js";import Y from"./index-eca4a0a9.js";import{u as M}from"./useDicData-bd9cdb9d.js";import{I as W}from"./trial-ce912ff9.js";import"./infoCollection-9802e33b.js";import"./PersonalInfo-8a019538.js";import"./validator-6eb2e74e.js";import"./core-7e803d21.js";import"./constant-8927d485.js";import"./theme-94cf7d00.js";import"./utils-1748d4d5.js";const Z={class:"sign-wrap"},J=["src"],K={class:"popup-body"},Q={class:"sign-container-wrap"},X={class:"operate-bar"},ee={class:"btns"},te=e({name:"sign"});var ae=I(e({...te,props:{option:{default:{}},modelValue:{default:""}},emits:["update:modelValue","submitSign"],setup(e,{expose:I,emit:O}){const w=e,x=t(!1),g=t(),j=t(""),L=t(!0),N=()=>{var e;x.value=!0,null==(e=g.value)||e.clear(),setTimeout((()=>{var e;null==(e=g.value)||e.setDataURL(j.value),w.modelValue?L.value=!1:L.value=!0}))},E=()=>{y({images:[j.value],className:"customer-sign-preview"})},_=()=>{x.value=!1},k=()=>{var e,t;null==(t=null==(e=g.value)?void 0:e.clear)||t.call(e),j.value="",L.value=!0,O("update:modelValue","")},T=()=>{var e;j.value=null==(e=g.value)?void 0:e.save(),O("update:modelValue",j.value),O("submitSign",j.value),x.value=!1};return a((()=>w.modelValue),(()=>{j.value=w.modelValue}),{immediate:!0}),I({rewrite:k,openSign:N}),(e,t)=>{const a=h,I=b,y=C;return n(),l(p,null,[o("div",Z,[i(e.$slots,"signImg",{data:r(j)},(()=>[r(j)?(n(),l("img",{key:0,class:"preview-sign",src:r(j),alt:"",onClick:E},null,8,J)):s("",!0),d(a,{type:"primary",round:"",size:"small",onClick:N},{default:u((()=>[c(v(r(j)?"重新签名":"点击签字"),1)])),_:1})]),!0)]),d(y,{show:r(x),"onUpdate:show":t[1]||(t[1]=e=>f(x)?x.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:u((()=>[o("div",K,[o("div",Q,[d(m,{ref_key:"signRef",ref:g,placeholder:"请在此处签名",onStroke:t[0]||(t[0]=e=>L.value=!1)},null,512),o("div",X,[o("span",null,[d(I,{name:"info",color:"#ffaf22"}),c(" 请投保人正楷签署您的签名:")]),o("div",ee,[d(a,{type:"default",class:"btn",onClick:_},{default:u((()=>[c("返回")])),_:1}),d(a,{type:"default",class:"btn",onClick:k},{default:u((()=>[c("重写")])),_:1}),d(a,{type:"primary",class:"btn",disabled:r(L),onClick:T},{default:u((()=>[c("确定签字")])),_:1},8,["disabled"])])])])])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-6461f207"]]);const ne={key:0,class:"net-sale-detail-wrap"},le={class:"sign-cell"},oe=o("div",{class:"sign-label"},"签名",-1),ie={class:"footer"},re={class:"footer"},se=e({name:"netSaleDetail"}),de=e({...se,setup(e){x();const a=g(),i=j(),{orderNo:c="2022113021181894998",tenantId:v="9991000001"}=a.query,m=t({}),I=t(!1),y=M("NATIONAL_REGION_CODE"),h=t({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:v,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:v}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),b=t(!1),C=t(),Z=t(),J=t(),K=t(""),Q=t(""),X=t(!1),ee=t(!1),te=t(0),se=t([]),de=t(""),ue=t("");t("");const ce=t([]),ve=()=>{X.value=!1,ee.value=!1},me=async()=>{X.value=!1,ee.value=!0,await((e,t,a,n,l)=>{const o={bizObjectType:e,bizObjectId:l,docCategory:"ELECTRIC_SIGN",docType:"png",fileBase64:t,docName:`${w[e]}电子签名`,orderId:a,tenantId:n};return O({url:"/api/app/insure/insurance/saveCustomerSignResult",method:"POST",data:o})})("HOLDER",K.value,h.value.id,`${v}`),z(h.value)},fe=async()=>{const{data:e,code:t}=await G({productCode:ue.value,tenantId:v,withInsureInfo:!0});"10000"===t&&(J.value=e,(()=>{var e,t,a,n,l,o;let i={};if(i=Q.value?(null==(a=((null==(t=null==(e=J.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList)||[]).find((e=>e.planCode===Q.value)))?void 0:a.attachmentVOList)||[]:(null==(o=null==(l=null==(n=J.value)?void 0:n.tenantProductInsureVO)?void 0:l.planInsureVO)?void 0:o.attachmentVOList)||[],!i)return void(se.value=[]);const r={2:"richText",3:"link"};se.value=Object.keys(i).map((e=>(i[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),a=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===a?"pdf":"picture"}else e.attachmentType=r[e.attachmentType]})),{attachmentName:e,attachmentList:i[e]})))||[],ce.value=se.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.mustReadFlag===D.YES))}))).filter((e=>e.attachmentList.length))})())},pe=async()=>{var e;const{code:t,data:n}=await B({orderNo:c,tenantId:v});"10000"===t&&(n.extInfo.buttonCode="EVENT_NETSALE_airSignature",h.value=n,Q.value=null==(e=n.tenantOrderInsuredList[0])?void 0:e.planCode,ue.value=n.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,I.value=!0,(e=>{const t=e.find((e=>1===e.riskType));var a,n;t&&(de.value=(a=t.insurancePeriodValue,-1!==(n=W[t.insurancePeriodType]).indexOf("$")?n.replace("$",`${a}`):`${a||""}${n}`))})(n.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList||[]),(async()=>{const{code:e,data:t}=await F({productCode:ue.value,tenantId:v});"10000"===e&&(Z.value=t,m.value=t.productFactor)})(),fe(),n.orderStatus!==T.UNDER_WRITING_SUCCESS&&i.push({path:"/baseInsurance/orderDetail",query:{...a.query,productCode:ue.value,ISEE_BIZ:n.extInfo.iseeBizNo}}))},Ie=async()=>{K.value?(ee.value=!1,ce.value.length?X.value=!0:me()):S("请先签字")};return L((()=>{pe()})),(e,t)=>{var a;const i=V,c=R,v=P,O=H,w=N("ProPageWrap"),x=U,g=A;return n(),l(p,null,[d(w,null,{default:u((()=>{var e;return[(null==(e=r(Z))?void 0:e.productBasicInfoVO)?(n(),l("div",ne,[d(c,null,{default:u((()=>{var e;return[d(i,{title:"产品名称",content:null==(e=r(Z))?void 0:e.productBasicInfoVO.productFullName},null,8,["content"])]})),_:1}),r(h).id?(n(),E(c,{key:0,"show-line":!1,title:"投保信息"},{default:u((()=>{var e,a,n,l;return[d(i,{title:"保费",content:r(h).orderAmount+"元"},null,8,["content"]),d(i,{title:"保险期限",content:r(de)},null,8,["content"]),d(i,{title:"起保日期",content:r(h).commencementTime},null,8,["content"]),d(i,{title:"终保日期",content:r(h).expiryDate},null,8,["content"]),d(i,{title:"保单状态",content:r(_)[r(h).orderStatus]},null,8,["content"]),d(i,{title:"订单编号",content:r(h).orderNo},null,8,["content"]),d(v,{modelValue:r(h).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:modelValue":t[0]||(t[0]=e=>r(h).tenantOrderHolder.extInfo.familyAreaCode=e),field1:r(h).tenantOrderHolder.extInfo.familyProvinceCode,"onUpdate:field1":t[1]||(t[1]=e=>r(h).tenantOrderHolder.extInfo.familyProvinceCode=e),field2:r(h).tenantOrderHolder.extInfo.familyCityCode,"onUpdate:field2":t[2]||(t[2]=e=>r(h).tenantOrderHolder.extInfo.familyCityCode=e),field3:r(h).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:field3":t[3]||(t[3]=e=>r(h).tenantOrderHolder.extInfo.familyAreaCode=e),label:"房产所在地",name:"familyProvinceCode","is-link":"","is-view":"",class:"insured-info","data-source":r(y),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"]),d(i,{title:"详细地址",content:null==(a=null==(e=r(h).tenantOrderHolder)?void 0:e.extInfo)?void 0:a.familyAddress},null,8,["content"]),d(i,{title:"燃气编号",content:null==(l=null==(n=r(h).tenantOrderSubjectList)?void 0:n[0])?void 0:l.subjectNo},null,8,["content"])]})),_:1})):s("",!0),r(I)?(n(),E($,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":r(h),"factor-object":r(m),"input-align":"right"},null,8,["form-info","factor-object"])):s("",!0),d(c,{title:"阅读条款合同",class:"file-list-card"},{default:u((()=>[(n(!0),l(p,null,k(r(se),((e,t)=>(n(),E(O,{key:t,title:e.attachmentName,"is-link":"",onClick:t=>{return a=e.attachmentName,n=e.attachmentList,b.value=!0,void(C.value={title:a,fileContent:null==n?void 0:n[0]});var a,n}},null,8,["title","onClick"])))),128))])),_:1}),d(c,{title:"客户签名"},{default:u((()=>[o("div",le,[oe,d(ae,{modelValue:r(K),"onUpdate:modelValue":t[4]||(t[4]=e=>f(K)?K.value=e:null)},null,8,["modelValue"])])])),_:1}),o("div",ie,[d(q,{shadow:!1,text:"提 交",onClick:Ie})])])):s("",!0)]})),_:1}),d(g,{show:r(b),"onUpdate:show":t[6]||(t[6]=e=>f(b)?b.value=e:null),class:"pre-notice-wrap",title:null==(a=r(C))?void 0:a.title,position:"bottom",style:{height:"600px"}},{default:u((()=>{var e,a,n,l;return[d(x,{content:null==(a=null==(e=r(C))?void 0:e.fileContent)?void 0:a.attachmentUri,type:null==(l=null==(n=r(C))?void 0:n.fileContent)?void 0:l.attachmentType},null,8,["content","type"]),o("div",re,[d(q,{shadow:!1,text:"关闭",onClick:t[5]||(t[5]=e=>b.value=!1)})])]})),_:1},8,["show","title"]),r(X)&&0!==r(ce).length?(n(),E(Y,{key:0,show:r(X),"onUpdate:show":t[7]||(t[7]=e=>f(X)?X.value=e:null),"content-list":r(ce),"is-only-view":r(ee),"active-index":r(te),text:r(ee)?"关闭":"我已逐页阅读上述内容并同意","force-read-count":0,"on-close-file-preview":"",onSubmit:me,onOnCloseFilePreview:ve,onOnCloseFilePreviewByMask:t[8]||(t[8]=e=>X.value=!1)},null,8,["show","content-list","is-only-view","active-index","text"])):s("",!0)],64)}}});export{de as default};
