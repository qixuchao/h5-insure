import{d as e,d7 as t,i as n,h as a,j as l,d8 as o,l as i,m as r,o as d,c as s,b as u,w as c,u as f,p as m,dV as v,f as p,F as I,s as h,a as y,q as O,dW as C,dU as x,T as b,cY as j,aI as w,dJ as L,by as N,bX as E,au as T,a6 as S}from"./index-37af9da6.js";import{g as P,i as V}from"./trial-ec1e4111.js";import{_ as g}from"./index-d68c2b0d.js";import{S as k}from"./index-b32a8249.js";import{n as _}from"./nextStep-0000d67b.js";import{p as H}from"./product-0b4a7c84.js";import{P as R}from"./index-6e0e40f9.js";import U from"./index-d2854721.js";import{I as A}from"./trial-d750509a.js";import"./infoCollection-a733896c.js";import"./PersonalInfo-300ba8ba.js";import"./validator-6eb2e74e.js";import"./cloneDeep-ce4dc7ec.js";import"./core-3d6eb196.js";import"./theme-94cf7d00.js";import"./utils-247ef90f.js";const D={key:0,class:"net-sale-detail-wrap"},B={class:"sign-cell"},F=y("div",{class:"sign-label"},"签名",-1),$={class:"footer"},q={class:"footer"},G=e({name:"netSaleDetail"}),W=e({...G,setup(e){t();const G=n(),W=a(),{orderNo:Y="2022113021181894998",tenantId:z="9991000001"}=G.query,J=l({}),M=l(!1),X=o("NATIONAL_REGION_CODE"),Z=l({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:z,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:z}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),K=l(!1),Q=l(),ee=l(),te=l(),ne=l(""),ae=l(""),le=l(!1),oe=l(!1),ie=l(0),re=l([]),de=l(""),se=l("");l("");const ue=l([]),ce=()=>{le.value=!1,oe.value=!1},fe=async()=>{le.value=!1,oe.value=!0,await C("HOLDER",ne.value,Z.value.id,`${z}`),_(Z.value)},me=async()=>{const{data:e,code:t}=await H({productCode:se.value,tenantId:z,withInsureInfo:!0});"10000"===t&&(te.value=e,(()=>{var e,t,n,a,l,o;let i={};if(i=ae.value?(null==(n=((null==(t=null==(e=te.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList)||[]).find((e=>e.planCode===ae.value)))?void 0:n.attachmentVOList)||[]:(null==(o=null==(l=null==(a=te.value)?void 0:a.tenantProductInsureVO)?void 0:l.planInsureVO)?void 0:o.attachmentVOList)||[],!i)return void(re.value=[]);const r={2:"richText",3:"link"};re.value=Object.keys(i).map((e=>(i[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),n=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===n?"pdf":"picture"}else e.attachmentType=r[e.attachmentType]})),{attachmentName:e,attachmentList:i[e]})))||[],ue.value=re.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.mustReadFlag===S.YES))}))).filter((e=>e.attachmentList.length))})())},ve=async()=>{var e;const{code:t,data:n}=await P({orderNo:Y,tenantId:z});"10000"===t&&(n.extInfo.buttonCode="EVENT_NETSALE_airSignature",Z.value=n,ae.value=null==(e=n.tenantOrderInsuredList[0])?void 0:e.planCode,se.value=n.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,M.value=!0,(e=>{const t=e.find((e=>1===e.riskType));var n,a;t&&(de.value=(n=t.insurancePeriodValue,-1!==(a=A[t.insurancePeriodType]).indexOf("$")?a.replace("$",`${n}`):`${n||""}${a}`))})(n.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList||[]),(async()=>{const{code:e,data:t}=await V({productCode:se.value,tenantId:z});"10000"===e&&(ee.value=t,J.value=t.productFactor)})(),me(),n.orderStatus!==x.UNDER_WRITING_SUCCESS&&W.push({path:"/baseInsurance/orderDetail",query:{...G.query,productCode:se.value,ISEE_BIZ:n.extInfo.iseeBizNo}}))},pe=async()=>{ne.value?(oe.value=!1,ue.value.length?le.value=!0:fe()):b("请先签字")};return i((()=>{ve()})),(e,t)=>{var n;const a=j,l=w,o=L,i=N,C=r("ProPageWrap"),x=E,b=T;return d(),s(I,null,[u(C,null,{default:c((()=>{var e;return[(null==(e=f(ee))?void 0:e.productBasicInfoVO)?(d(),s("div",D,[u(l,null,{default:c((()=>{var e;return[u(a,{title:"产品名称",content:null==(e=f(ee))?void 0:e.productBasicInfoVO.productFullName},null,8,["content"])]})),_:1}),f(Z).id?(d(),m(l,{key:0,"show-line":!1,title:"投保信息"},{default:c((()=>{var e,n,l,i;return[u(a,{title:"保费",content:f(Z).orderAmount+"元"},null,8,["content"]),u(a,{title:"保险期限",content:f(de)},null,8,["content"]),u(a,{title:"起保日期",content:f(Z).commencementTime},null,8,["content"]),u(a,{title:"终保日期",content:f(Z).expiryDate},null,8,["content"]),u(a,{title:"保单状态",content:f(v)[f(Z).orderStatus]},null,8,["content"]),u(a,{title:"订单编号",content:f(Z).orderNo},null,8,["content"]),u(o,{modelValue:f(Z).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:modelValue":t[0]||(t[0]=e=>f(Z).tenantOrderHolder.extInfo.familyAreaCode=e),field1:f(Z).tenantOrderHolder.extInfo.familyProvinceCode,"onUpdate:field1":t[1]||(t[1]=e=>f(Z).tenantOrderHolder.extInfo.familyProvinceCode=e),field2:f(Z).tenantOrderHolder.extInfo.familyCityCode,"onUpdate:field2":t[2]||(t[2]=e=>f(Z).tenantOrderHolder.extInfo.familyCityCode=e),field3:f(Z).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:field3":t[3]||(t[3]=e=>f(Z).tenantOrderHolder.extInfo.familyAreaCode=e),label:"房产所在地",name:"familyProvinceCode","is-link":"","is-view":"",class:"insured-info","data-source":f(X),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"]),u(a,{title:"详细地址",content:null==(n=null==(e=f(Z).tenantOrderHolder)?void 0:e.extInfo)?void 0:n.familyAddress},null,8,["content"]),u(a,{title:"燃气编号",content:null==(i=null==(l=f(Z).tenantOrderSubjectList)?void 0:l[0])?void 0:i.subjectNo},null,8,["content"])]})),_:1})):p("",!0),f(M)?(d(),m(g,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":f(Z),"factor-object":f(J),"input-align":"right"},null,8,["form-info","factor-object"])):p("",!0),u(l,{title:"阅读条款合同",class:"file-list-card"},{default:c((()=>[(d(!0),s(I,null,h(f(re),((e,t)=>(d(),m(i,{key:t,title:e.attachmentName,"is-link":"",onClick:t=>{return n=e.attachmentName,a=e.attachmentList,K.value=!0,void(Q.value={title:n,fileContent:null==a?void 0:a[0]});var n,a}},null,8,["title","onClick"])))),128))])),_:1}),u(l,{title:"客户签名"},{default:c((()=>[y("div",B,[F,u(k,{modelValue:f(ne),"onUpdate:modelValue":t[4]||(t[4]=e=>O(ne)?ne.value=e:null)},null,8,["modelValue"])])])),_:1}),y("div",$,[u(R,{shadow:!1,text:"提 交",onClick:pe})])])):p("",!0)]})),_:1}),u(b,{show:f(K),"onUpdate:show":t[6]||(t[6]=e=>O(K)?K.value=e:null),class:"pre-notice-wrap",title:null==(n=f(Q))?void 0:n.title,position:"bottom",style:{height:"600px"}},{default:c((()=>{var e,n,a,l;return[u(x,{content:null==(n=null==(e=f(Q))?void 0:e.fileContent)?void 0:n.attachmentUri,type:null==(l=null==(a=f(Q))?void 0:a.fileContent)?void 0:l.attachmentType},null,8,["content","type"]),y("div",q,[u(R,{shadow:!1,text:"关闭",onClick:t[5]||(t[5]=e=>K.value=!1)})])]})),_:1},8,["show","title"]),f(le)&&0!==f(ue).length?(d(),m(U,{key:0,show:f(le),"onUpdate:show":t[7]||(t[7]=e=>O(le)?le.value=e:null),"content-list":f(ue),"is-only-view":f(oe),"active-index":f(ie),text:f(oe)?"关闭":"我已逐页阅读上述内容并同意","force-read-count":0,"on-close-file-preview":"",onSubmit:fe,onOnCloseFilePreview:ce,onOnCloseFilePreviewByMask:t[8]||(t[8]=e=>le.value=!1)},null,8,["show","content-list","is-only-view","active-index","text"])):p("",!0)],64)}}});export{W as default};
