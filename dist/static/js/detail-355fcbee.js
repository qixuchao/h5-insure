import{d as e,cb as t,u as a,a as n,r as l,a0 as o,av as i,b as r,c as d,y as s,i as u,w as c,g as f,e as m,h as v,R as p,U as I,f as h,a1 as y,T as O,V as C,bf as b,cj as x,_ as j,af as w,Y as L}from"./index-27dbf893.js";import{c as N,i as E}from"./trial-86fabe55.js";import{_ as T}from"./index-38331162.js";import{_,s as S}from"./verify-717e2cac.js";import{n as V}from"./nextStep-cb8e2825.js";import{p as g}from"./product-ba0a4369.js";import{a as k,O as P}from"./order-3a9c579c.js";import{P as R}from"./index-c7848cd3.js";import H from"./index-cb2ca6bb.js";import{u as U}from"./useDicData-a4aacd59.js";import{I as A}from"./trial-7c45233a.js";import"./pdfh5-008ca364.js";import"./infoCollection-7af083be.js";import"./core-f8bea916.js";import"./constant-c3f28a3b.js";import"./utils-a60a4beb.js";const D={key:0,class:"net-sale-detail-wrap"},B={class:"sign-cell"},F=h("div",{class:"sign-label"},"签名",-1),$={class:"footer"},q={class:"footer"},G=e({name:"netSaleDetail"}),Y=e({...G,setup(e){t();const G=a(),Y=n(),{orderNo:z="2022113021181894998",tenantId:W="9991000001"}=G.query,M=l({}),Z=l(!1),J=U("NATIONAL_REGION_CODE"),K=l({commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_airSignature",pageCode:"infoCollection",templateId:3,iseeBizNo:""},orderCategory:1,tenantId:W,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:W}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),Q=l(!1),X=l(),ee=l(),te=l(),ae=l(""),ne=l(""),le=l(!1),oe=l(!1),ie=l(0),re=l([]),de=l(""),se=l("");l("");const ue=l([]),ce=()=>{le.value=!1,oe.value=!1},fe=async()=>{le.value=!1,oe.value=!0,await S("HOLDER",ae.value,K.value.id,`${W}`),V(K.value)},me=async()=>{const{data:e,code:t}=await g({productCode:se.value,tenantId:W,withInsureInfo:!0});"10000"===t&&(te.value=e,(()=>{var e,t,a,n,l,o;let i={};if(i=ne.value?(null==(a=((null==(t=null==(e=te.value)?void 0:e.tenantProductInsureVO)?void 0:t.planList)||[]).find((e=>e.planCode===ne.value)))?void 0:a.attachmentVOList)||[]:(null==(o=null==(l=null==(n=te.value)?void 0:n.tenantProductInsureVO)?void 0:l.planInsureVO)?void 0:o.attachmentVOList)||[],!i)return void(re.value=[]);const r={2:"richText",3:"link"};re.value=Object.keys(i).map((e=>(i[e].forEach((e=>{if("1"===e.attachmentType){const t=e.attachmentUri.split("?"),a=t[0].substr(t[0].lastIndexOf(".")+1);e.attachmentType="pdf"===a?"pdf":"picture"}else e.attachmentType=r[e.attachmentType]})),{attachmentName:e,attachmentList:i[e]})))||[],ue.value=re.value.map((e=>({attachmentName:e.attachmentName,attachmentList:e.attachmentList.filter((e=>e.mustReadFlag===L.YES))}))).filter((e=>e.attachmentList.length))})())},ve=async()=>{var e;const{code:t,data:a}=await N({orderNo:z,tenantId:W});"10000"===t&&(a.extInfo.buttonCode="EVENT_NETSALE_airSignature",K.value=a,ne.value=null==(e=a.tenantOrderInsuredList[0])?void 0:e.planCode,se.value=a.tenantOrderInsuredList[0].tenantOrderProductList[0].productCode,Z.value=!0,(e=>{const t=e.find((e=>1===e.riskType));var a,n;t&&(de.value=(a=t.insurancePeriodValue,-1!==(n=A[t.insurancePeriodType]).indexOf("$")?n.replace("$",`${a}`):`${a||""}${n}`))})(a.tenantOrderInsuredList[0].tenantOrderProductList[0].tenantOrderRiskList||[]),(async()=>{const{code:e,data:t}=await E({productCode:se.value,tenantId:W});"10000"===e&&(ee.value=t,M.value=t.productFactor)})(),me(),a.orderStatus!==P.UNDER_WRITING_SUCCESS&&Y.push({path:"/baseInsurance/orderDetail",query:{...G.query,productCode:se.value,ISEE_BIZ:a.extInfo.iseeBizNo}}))},pe=async()=>{ae.value?(oe.value=!1,ue.value.length?le.value=!0:fe()):O("请先签字")};return o((()=>{ve()})),(e,t)=>{var a;const n=C,l=b,o=x,O=i,L=r("ProPageWrap"),N=j,E=w;return d(),s(p,null,[u(L,null,{default:c((()=>{var e;return[(null==(e=f(ee))?void 0:e.productBasicInfoVO)?(d(),s("div",D,[u(l,null,{default:c((()=>{var e;return[u(n,{title:"产品名称",content:null==(e=f(ee))?void 0:e.productBasicInfoVO.productFullName},null,8,["content"])]})),_:1}),f(K).id?(d(),m(l,{key:0,"show-line":!1,title:"投保信息"},{default:c((()=>{var e,a,l,i;return[u(n,{title:"保费",content:f(K).orderAmount+"元"},null,8,["content"]),u(n,{title:"保险期限",content:f(de)},null,8,["content"]),u(n,{title:"起保日期",content:f(K).commencementTime},null,8,["content"]),u(n,{title:"终保日期",content:f(K).expiryDate},null,8,["content"]),u(n,{title:"保单状态",content:f(k)[f(K).orderStatus]},null,8,["content"]),u(n,{title:"订单编号",content:f(K).orderNo},null,8,["content"]),u(o,{modelValue:f(K).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:modelValue":t[0]||(t[0]=e=>f(K).tenantOrderHolder.extInfo.familyAreaCode=e),field1:f(K).tenantOrderHolder.extInfo.familyProvinceCode,"onUpdate:field1":t[1]||(t[1]=e=>f(K).tenantOrderHolder.extInfo.familyProvinceCode=e),field2:f(K).tenantOrderHolder.extInfo.familyCityCode,"onUpdate:field2":t[2]||(t[2]=e=>f(K).tenantOrderHolder.extInfo.familyCityCode=e),field3:f(K).tenantOrderHolder.extInfo.familyAreaCode,"onUpdate:field3":t[3]||(t[3]=e=>f(K).tenantOrderHolder.extInfo.familyAreaCode=e),label:"房产所在地",name:"familyProvinceCode","is-link":"","is-view":"",class:"insured-info","data-source":f(J),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"]),u(n,{title:"详细地址",content:null==(a=null==(e=f(K).tenantOrderHolder)?void 0:e.extInfo)?void 0:a.familyAddress},null,8,["content"]),u(n,{title:"燃气编号",content:null==(i=null==(l=f(K).tenantOrderSubjectList)?void 0:l[0])?void 0:i.subjectNo},null,8,["content"])]})),_:1})):v("",!0),f(Z)?(d(),m(T,{key:1,ref:"formRef","title-collection":{HOLDER:"投保人信息",INSURER:"被保人信息",BENEFICIARY:"受益人"},"is-view":!0,"form-info":f(K),"factor-object":f(M),"input-align":"right"},null,8,["form-info","factor-object"])):v("",!0),u(l,{title:"阅读条款合同",class:"file-list-card"},{default:c((()=>[(d(!0),s(p,null,I(f(re),((e,t)=>(d(),m(O,{key:t,title:e.attachmentName,"is-link":"",onClick:t=>{return a=e.attachmentName,n=e.attachmentList,Q.value=!0,void(X.value={title:a,fileContent:null==n?void 0:n[0]});var a,n}},null,8,["title","onClick"])))),128))])),_:1}),u(l,{title:"客户签名"},{default:c((()=>[h("div",B,[F,u(_,{modelValue:f(ae),"onUpdate:modelValue":t[4]||(t[4]=e=>y(ae)?ae.value=e:null)},null,8,["modelValue"])])])),_:1}),h("div",$,[u(R,{shadow:!1,text:"提 交",onClick:pe})])])):v("",!0)]})),_:1}),u(E,{show:f(Q),"onUpdate:show":t[6]||(t[6]=e=>y(Q)?Q.value=e:null),class:"pre-notice-wrap",title:null==(a=f(X))?void 0:a.title,position:"bottom",style:{height:"600px"}},{default:c((()=>{var e,a,n,l;return[u(N,{content:null==(a=null==(e=f(X))?void 0:e.fileContent)?void 0:a.attachmentUri,type:null==(l=null==(n=f(X))?void 0:n.fileContent)?void 0:l.attachmentType},null,8,["content","type"]),h("div",q,[u(R,{shadow:!1,text:"关闭",onClick:t[5]||(t[5]=e=>Q.value=!1)})])]})),_:1},8,["show","title"]),f(le)&&0!==f(ue).length?(d(),m(H,{key:0,show:f(le),"onUpdate:show":t[7]||(t[7]=e=>y(le)?le.value=e:null),"content-list":f(ue),"is-only-view":f(oe),"active-index":f(ie),text:f(oe)?"关闭":"我已逐页阅读上述内容并同意","force-read-count":0,"on-close-file-preview":"",onSubmit:fe,onOnCloseFilePreview:ce,onOnCloseFilePreviewByMask:t[8]||(t[8]=e=>le.value=!1)},null,8,["show","content-list","is-only-view","active-index","text"])):v("",!0)],64)}}});export{Y as default};
