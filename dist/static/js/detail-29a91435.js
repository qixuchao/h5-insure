import{d as e,dg as t,i as n,h as a,j as l,d1 as o,l as i,m as r,o as d,c as s,b as u,w as c,u as f,p as m,dY as v,f as p,F as I,s as h,a as y,q as O,dZ as C,dR as x,T as b,d6 as j,ar as w,dX as L,bR as N,c7 as E,au as T,aX as S}from"./index-121bf526.js";import{g,i as P}from"./trial-e605cc4c.js";import{_ as R}from"./index-f058676b.js";import{S as k}from"./index-ef64a3e8.js";import{n as V}from"./nextStep-3d9e719c.js";import{p as _}from"./product-6a800150.js";import{P as H}from"./index-6a63fd37.js";import A from"./index-93ca63c9.js";import{I as U}from"./trial-3edb45f3.js";import"./infoCollection-d8102ce1.js";import"./PersonalInfo-c1b11619.js";import"./validator-6eb2e74e.js";import"./cloneDeep-acf86ae5.js";import"./core-537e5dcf.js";import"./theme-94cf7d00.js";import"./utils-862d51c0.js";const D={key:0,class:"net-sale-detail-wrap"},B={class:"sign-cell"},F=y("div",{class:"sign-label"},"签名",-1),$={class:"footer"},q={class:"footer"},G=e({name:"netSaleDetail"}),Y=e({...G,setup(e){t();const G=n(),Y=a(),{orderNo:z="2022113021181894998",tenantId:W="9991000001"}=G.query,X=l({}),Z=l(!1),M=o("NATIONAL_REGION_CODE"),J=l({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:W,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:W}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),K=l(!1),Q=l(),ee=l(),te=l(),ne=l(""),ae=l(""),le=l(!1),oe=l(!1),ie=l(0),re=l([]),de=l(""),se=l("");l("");const ue=l([]),ce=()=>{le.value=!1,oe.value=!1},fe=async()=>{le.value=!1,oe.value=!0,await C("HOLDER",ne.value,J.value.id,`${W}`),V(J.value)},me=async()=>{const{data:e,code:t}=await _({productCode:se.value,tenantId:W,withInsureInfo:!0});"10000"===t&&(te.value=e,(()=>{var e,t,n,a,l,o;let i={};if(i=ae.value?(null==(n=((null==(t=null==(e=te.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList)||[]).find((e=>e.planCode===ae.value)))?void 0:n.attachmentVOList)||[]:(null==(o=null==(l=null==(a=te.value)?void 0:a.tenantProductInsureVO)?void 0:l.planInsureVO)?void 0:o.attachmentVOList)||[],!i)return void(re.value=[]);const r={2:"richText",3:"link"};re.value=Object.keys(i).map((e=>(i[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),n=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===n?"pdf":"picture"}else e.attachmentType=r[e.attachmentType]})),{attachmentName:e,attachmentList:i[e]})))||[],ue.value=re.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.mustReadFlag===S.YES))}))).filter((e=>e.attachmentList.length))})())},ve=async()=>{var e;const{code:t,data:n}=await g({orderNo:z,tenantId:W});"10000"===t&&(n.extInfo.buttonCode="EVENT_NETSALE_airSignature",J.value=n,ae.value=null==(e=n.tenantOrderInsuredList[0])?void 0:e.planCode,se.value=n.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,Z.value=!0,(e=>{const t=e.find((e=>1===e.riskType));var n,a;t&&(de.value=(n=t.insurancePeriodValue,-1!==(a=U[t.insurancePeriodType]).indexOf("$")?a.replace("$",`${n}`):`${n||""}${a}`))})(n.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList||[]),(async()=>{const{code:e,data:t}=await P({productCode:se.value,tenantId:W});"10000"===e&&(ee.value=t,X.value=t.productFactor)})(),me(),n.orderStatus!==x.UNDER_WRITING_SUCCESS&&Y.push({path:"/baseInsurance/orderDetail",query:{...G.query,productCode:se.value,ISEE_BIZ:n.extInfo.iseeBizNo}}))},pe=async()=>{ne.value?(oe.value=!1,ue.value.length?le.value=!0:fe()):b("请先签名")};return i((()=>{ve()})),(e,t)=>{var n;const a=j,l=w,o=L,i=N,C=r("ProPageWrap"),x=E,b=T;return d(),s(I,null,[u(C,null,{default:c((()=>{var e;return[(null==(e=f(ee))?void 0:e.productBasicInfoVO)?(d(),s("div",D,[u(l,null,{default:c((()=>{var e;return[u(a,{title:"产品名称",content:null==(e=f(ee))?void 0:e.productBasicInfoVO.productFullName},null,8,["content"])]})),_:1}),f(J).id?(d(),m(l,{key:0,"show-line":!1,title:"投保信息"},{default:c((()=>{var e,n,l,i;return[u(a,{title:"保费",content:f(J).orderAmount+"元"},null,8,["content"]),u(a,{title:"保险期限",content:f(de)},null,8,["content"]),u(a,{title:"起保日期",content:f(J).commencementTime},null,8,["content"]),u(a,{title:"终保日期",content:f(J).expiryDate},null,8,["content"]),u(a,{title:"保单状态",content:f(v)[f(J).orderStatus]},null,8,["content"]),u(a,{title:"订单编号",content:f(J).orderNo},null,8,["content"]),u(o,{modelValue:f(J).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:modelValue":t[0]||(t[0]=e=>f(J).tenantOrderHolder.extInfo.familyAreaCode=e),field1:f(J).tenantOrderHolder.extInfo.familyProvinceCode,"onUpdate:field1":t[1]||(t[1]=e=>f(J).tenantOrderHolder.extInfo.familyProvinceCode=e),field2:f(J).tenantOrderHolder.extInfo.familyCityCode,"onUpdate:field2":t[2]||(t[2]=e=>f(J).tenantOrderHolder.extInfo.familyCityCode=e),field3:f(J).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:field3":t[3]||(t[3]=e=>f(J).tenantOrderHolder.extInfo.familyAreaCode=e),label:"房产所在地",name:"familyProvinceCode","is-link":"","is-view":"",class:"insured-info","data-source":f(M),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"]),u(a,{title:"详细地址",content:null==(n=null==(e=f(J).tenantOrderHolder)?void 0:e.extInfo)?void 0:n.familyAddress},null,8,["content"]),u(a,{title:"燃气编号",content:null==(i=null==(l=f(J).tenantOrderSubjectList)?void 0:l[0])?void 0:i.subjectNo},null,8,["content"])]})),_:1})):p("",!0),f(Z)?(d(),m(R,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保险人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":f(J),"factor-object":f(X),"input-align":"right"},null,8,["form-info","factor-object"])):p("",!0),u(l,{title:"阅读条款合同",class:"file-list-card"},{default:c((()=>[(d(!0),s(I,null,h(f(re),((e,t)=>(d(),m(i,{key:t,title:e.attachmentName,"is-link":"",onClick:t=>{return n=e.attachmentName,a=e.attachmentList,K.value=!0,void(Q.value={title:n,fileContent:null==a?void 0:a[0]});var n,a}},null,8,["title","onClick"])))),128))])),_:1}),u(l,{title:"客户签名"},{default:c((()=>[y("div",B,[F,u(k,{modelValue:f(ne),"onUpdate:modelValue":t[4]||(t[4]=e=>O(ne)?ne.value=e:null)},null,8,["modelValue"])])])),_:1}),y("div",$,[u(H,{shadow:!1,text:"提 交",onClick:pe})])])):p("",!0)]})),_:1}),u(b,{show:f(K),"onUpdate:show":t[6]||(t[6]=e=>O(K)?K.value=e:null),class:"pre-notice-wrap",title:null==(n=f(Q))?void 0:n.title,position:"bottom",style:{height:"600px"}},{default:c((()=>{var e,n,a,l;return[u(x,{content:null==(n=null==(e=f(Q))?void 0:e.fileContent)?void 0:n.attachmentUri,type:null==(l=null==(a=f(Q))?void 0:a.fileContent)?void 0:l.attachmentType},null,8,["content","type"]),y("div",q,[u(H,{shadow:!1,text:"关闭",onClick:t[5]||(t[5]=e=>K.value=!1)})])]})),_:1},8,["show","title"]),f(le)&&0!==f(ue).length?(d(),m(A,{key:0,show:f(le),"onUpdate:show":t[7]||(t[7]=e=>O(le)?le.value=e:null),"content-list":f(ue),"is-only-view":f(oe),"active-index":f(ie),text:f(oe)?"关闭":"我已逐页阅读上述内容并同意","force-read-count":0,"on-close-file-preview":"",onSubmit:fe,onOnCloseFilePreview:ce,onOnCloseFilePreviewByMask:t[8]||(t[8]=e=>le.value=!1)},null,8,["show","content-list","is-only-view","active-index","text"])):p("",!0)],64)}}});export{Y as default};
