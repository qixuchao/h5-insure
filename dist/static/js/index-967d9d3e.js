import{_ as e,d as t,a,u as l,S as n,r as o,a0 as r,x as s,y as i,b as d,c,e as u,w as v,j as f,f as p,a1 as y,P as C,t as m,g as I,h as g,B as h,k as N,n as k,I as T,a2 as b,F as x,i as O,W as _,a3 as w,a4 as E,T as L,p as D,a5 as S,a6 as j,C as H,N as R,D as U,a7 as $,a8 as P,a9 as A,K as F,L as Y}from"./index-7a3234ce.js";import{f as G,s as q,g as M,a as Q}from"./verify-e678da78.js";import{a as B}from"./order-d3a2f48d.js";import{g as W,l as K}from"./inform-3afee90a.js";import"./pdfh5-008ca364.js";const V=e=>(F("data-v-7e8d1d5c"),e=e(),Y(),e),z={class:"page-verify"},J={class:"people"},X={class:"name"},Z={class:"verify-item"},ee=V((()=>f("div",{class:"label"},"证件号码",-1))),te={class:"no"},ae={class:"sign-body"},le={class:"date"},ne={class:"file"},oe={class:"people"},re={class:"name"},se={class:"verify-item"},ie=V((()=>f("div",{class:"label"},"证件号码",-1))),de={class:"no"},ce=["onClick"],ue=["onClick"],ve={class:"sign-body"},fe={class:"date"},pe={class:"file"},ye={class:"footer-button footer"},Ce=V((()=>f("div",{class:"text"},"刷新",-1)));var me=e(t({__name:"index",setup(e){const t=1,F=2,Y=a(),V=l(),me=(()=>{const e=Y.query;return e.orderCode&&(e.orderNo=e.orderCode,delete e.orderCode),e})(),{saleUserId:Ie="D1234567-1",tenantId:ge="9991000007",templateId:he=1,productCode:Ne="CQ75CQ76",insurerCode:ke="ancheng",isShare:Te,orderCode:be,orderNo:xe,productCategory:Oe}=me,_e=new n({source:"localStorage"}),we=o([]),Ee=o([]),Le=o([]),De=o([]),Se=o(),je=o(),He=[],Re=o(""),Ue=o(),$e=r().format("YYYY-MM-DD"),Pe=()=>{var e,t;null==(t=null==(e=je.value)?void 0:e.clear)||t.call(e)},Ae=(e,t)=>{let a=window.location.href;a=a.includes("orderCode")?a:a.replace("orderNo","orderCode"),Q({callbackUrl:a,certiNo:e,faceAuthMode:"TENCENT",userName:t,tenantId:9991000007}).then((a=>{const{code:l,data:n}=a;if("10000"===l){const{originalUrl:a,serialNo:l}=n;window.location.href=a,_e.set("verifyData",{serialNo:l,certNo:e,name:t})}}))},Fe=e=>{const{id:t,objectType:a}=e;Re.value="",Ue.value="";const l={1:"pdf",2:"richText",3:"link"};W({insurerCode:ke,id:t,objectType:a,productCategory:Oe,orderNo:xe,tenantId:ge}).then((({code:e,data:t})=>{if("10000"===e){const{textType:e,content:a,questionType:n}=(null==t?void 0:t[0])||{};2===n?(Re.value="question",Ue.value=t):(1===e&&a.includes("png")?Re.value="picture":Re.value=l[e],Ue.value=a)}}))},Ye=e=>`${e}`===E.CERT,Ge=e=>{var t,a,l,n;-1===e?Ae(null==(t=Se.value.tenantOrderHolder)?void 0:t.certNo,null==(a=Se.value.tenantOrderHolder)?void 0:a.name):Ae(null==(l=Se.value.tenantOrderInsuredList[e])?void 0:l.certNo,null==(n=Se.value.tenantOrderInsuredList[e])?void 0:n.name)},qe=e=>{e&&He.every((t=>t!==e))&&He.push(e)},Me=()=>{var e,a,l,n;(null==(e=je.value)?void 0:e.isEmpty())?L.fail("请投保人签名"):(null==(l=null==(a=Se.value.tenantOrderHolder)?void 0:a.extInfo)?void 0:l.isCert)!==t&&Ye(null==(n=Se.value.tenantOrderHolder)?void 0:n.certType)?L.fail("请投保人去认证"):D({orderNo:be||xe,saleUserId:Ie,tenantId:ge}).then((e=>{const{code:t,data:a}=e;"10000"===t&&([B.PENDING,B.PAYMENT_FAILED,B.UNDER_WRITING_SUCCESS].includes(a.orderStatus)?j.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{var e,a;const l=null==(e=je.value)?void 0:e.save();Promise.all([q("HOLDER",l,null==(a=Se.value)?void 0:a.id,`${ge}`)]).then((()=>{H({...Se.value,pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:{...Se.value.extInfo,pageCode:"sign",templateId:he,shareFlag:Te?"Y":"N",buttonCode:R.sign},venderCode:ke}).then((e=>{const{code:a,data:l}=e;"10000"===t&&l.success&&V.push({path:U[l.pageAction.data.nextPageCode],query:{orderNo:be||xe,saleUserId:Ie,tenantId:ge}})}))}))})):S("paymentResult",me))}))},Qe=(e=!1)=>{D({orderNo:be||xe,saleUserId:Ie,tenantId:ge}).then((t=>{var a,l;const{code:n,data:o}=t;"10000"===n&&(Se.value=o,e&&((null==(l=null==(a=null==o?void 0:o.tenantOrderHolder)?void 0:a.extInfo)?void 0:l.isCert)===F||(null==o?void 0:o.tenantOrderInsuredList.some((e=>{var t;return(null==(t=e.extInfo)?void 0:t.isCert)===F})))?L("用户未完身份认证及签字"):(null==o?void 0:o.tenantOrderAttachmentList.find((e=>e.category===$.ELECTRIC_SIGN&&e.objectType===P.HOLDER)))&&(null==o?void 0:o.tenantOrderAttachmentList.find((e=>e.category===$.ELECTRIC_SIGN&&e.objectType===P.INSURED)))||L("用户未完身份认证及签字")),setTimeout((()=>{let e=0;o.tenantOrderAttachmentList.forEach((t=>{var a,l,n,o;t.category===$.ELECTRIC_SIGN&&(t.objectType===P.HOLDER?(null==(l=null==(a=je.value)?void 0:a.clear)||l.call(a),je.value.setDataURL(t.fileBase64)):t.objectType===P.INSURED&&(null==(o=null==(n=He[e])?void 0:n.clear)||o.call(n),He[e].setDataURL(t.fileBase64),e+=1))}))})))}))},Be=()=>{Qe(!0)},We=s((()=>{const e={...me,isShare:1,sharePageCode:"sign"};return`${window.location.origin}/phoneVerify?${A.stringify(e)}`}));return i((()=>{Qe(),(async()=>{const e={orderNo:be||xe,productCode:Ne,tenantId:ge,objectType:1},t={insurerCode:ke,orderNo:xe,productCategory:Oe,tenantId:ge,noticeType:4,objectType:1},{code:a,data:l}=await M(e),{code:n,data:o}=await M({...e,objectType:2}),{code:r,data:s}=await K(t),{code:i,data:d}=await K({...t,noticeType:5,objectType:2});"10000"===a&&(Ee.value=l||[]),"10000"===n&&(we.value=o||[]),"10000"===r&&(De.value=s||[]),"10000"===i&&(Le.value=d||[])})();const e=_e.get("verifyData");if(e){const{serialNo:t,certNo:a,name:l}=e;G({certiNo:a,orderNo:be||xe,serialNo:t,tenantId:ge,userName:l}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(_e.remove("verifyData"),Qe())}))}})),(e,a)=>{const l=d("ProPDFviewer"),n=d("van-button"),o=d("ProPageWrap");return c(),u(o,null,{default:v((()=>{var e;return[f("div",z,[p(y,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),p(C,{title:"投保人",class:"card"},{extra:v((()=>{var e,a,l,n,o,r,s,i,d,u;return[f("div",J,[f("div",X,m(null==(a=null==(e=I(Se))?void 0:e.tenantOrderHolder)?void 0:a.name),1),Ye(null==(n=null==(l=I(Se))?void 0:l.tenantOrderHolder)?void 0:n.certType)?(c(),g("div",{key:0,class:h(["status",{verified:(null==(s=null==(r=null==(o=I(Se))?void 0:o.tenantOrderHolder)?void 0:r.extInfo)?void 0:s.isCert)===t}])},m((null==(u=null==(d=null==(i=I(Se))?void 0:i.tenantOrderHolder)?void 0:d.extInfo)?void 0:u.isCert)===t?"已认证":"待认证"),3)):N("",!0)])]})),default:v((()=>{var e,l,n,o,r,s,i;return[f("div",Z,[ee,f("div",te,m(null==(l=null==(e=I(Se))?void 0:e.tenantOrderHolder)?void 0:l.certNo),1),(null==(r=null==(o=null==(n=I(Se))?void 0:n.tenantOrderHolder)?void 0:o.extInfo)?void 0:r.isCert)!==t&&Ye(null==(i=null==(s=I(Se))?void 0:s.tenantOrderHolder)?void 0:i.certType)?(c(),g("div",{key:0,class:"action",onClick:a[0]||(a[0]=e=>Ge(-1))},[k(" 去认证 "),p(T,{name:"right_arrow",class:"icon"})])):N("",!0)])]})),_:1}),p(C,{key:"-1",title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[f("div",{class:"resign",onClick:Pe},"重签")])),default:v((()=>[p(b,{ref_key:"holderSign",ref:je,class:"sign"},null,512),f("div",ae,[f("div",le,"签名日期： "+m(I($e)),1),f("div",ne,[k(" 签名将被用于以下文件： "),f("span",null,[(c(!0),g(x,null,O(I(Ee),((e,t)=>(c(),u(l,{key:`holderFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:I(_)(e.materialContent,e.materialSource+""),onClick:a[1]||(a[1]=()=>"")},null,8,["title","content","type"])))),128))]),(c(!0),g(x,null,O(I(De),((e,t)=>(c(),u(l,{key:`holderQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:I(Ue),type:I(Re),onClick:()=>Fe(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:1}),(c(!0),g(x,null,O(null==(e=I(Se))?void 0:e.tenantOrderInsuredList,((e,n)=>(c(),g("div",{key:n},[p(C,{title:"被保人",class:"card"},{extra:v((()=>{var a,l;return[f("div",oe,[f("div",re,m(e.name),1),Ye(e.certType)?(c(),g("div",{key:0,class:h(["status",{verified:(null==(a=e.extInfo)?void 0:a.isCert)===t}])},m((null==(l=e.extInfo)?void 0:l.isCert)===t?"已认证":"待认证"),3)):N("",!0)])]})),default:v((()=>{var a;return[f("div",se,[ie,f("div",de,m(e.certNo),1),(null==(a=e.extInfo)?void 0:a.isCert)!==t&&Ye(e.certType)?(c(),g("div",{key:0,class:"action",onClick:e=>Ge(n)},[k(" 去认证 "),p(T,{name:"right_arrow",class:"icon"})],8,ce)):N("",!0)])]})),_:2},1024),p(C,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[f("div",{class:"resign",onClick:e=>(e=>{var t,a;null==(a=null==(t=He[e])?void 0:t.clear)||a.call(t)})(n)},"重签",8,ue)])),default:v((()=>[p(b,{ref_for:!0,ref:qe,class:"sign"}),f("div",ve,[f("div",fe,"签名日期： "+m(I($e)),1),f("div",pe,[k(" 签名将被用于以下文件： "),(c(!0),g(x,null,O(I(we),((e,t)=>(c(),u(l,{key:`insuredFileList-${t}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:I(_)(e.materialContent,e.materialSource+""),onClick:a[2]||(a[2]=()=>"")},null,8,["title","content","type"])))),128)),(c(!0),g(x,null,O(I(Le),((e,t)=>(c(),u(l,{key:`insuredQuestionList-${t}`,class:"file",title:`《${e.title}》`,content:I(Ue),type:I(Re),onClick:()=>Fe(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:2},1024)])))),128)),f("div",ye,[I(Te)?N("",!0):(c(),g("div",{key:0,class:"refresh-btn",onClick:Be},[f("div",null,[p(T,{name:"refresh"})]),Ce])),I(Te)?N("",!0):(c(),u(w,{key:1,title:"邀请您进行身份认证",desc:"邀请您进行身份认证",link:I(We)},{default:v((()=>[p(n,{plain:"",type:"primary",class:"share-btn"},{default:v((()=>[k("分享")])),_:1})])),_:1},8,["link"])),p(n,{type:"primary",class:"submit-btn",onClick:Me},{default:v((()=>[k("提交")])),_:1})])])]})),_:1})}}}),[["__scopeId","data-v-7e8d1d5c"]]);export{me as default};
