import{_ as e,d as a,a as t,u as l,S as n,r as o,$ as r,x as s,y as i,b as d,c,e as u,w as v,i as f,f as p,a0 as y,t as C,g as m,B as I,j as g,I as h,m as N,a1 as k,l as T,h as b,W as x,F as O,a2 as w,n as E,a3 as L,T as _,p as D,a4 as j,a5 as S,C as H,N as R,D as $,a6 as U,a7 as P,K as A,L as F}from"./index-fe8152f2.js";import{l as Y}from"./index-c6b2b786.js";import{f as G,s as q,g as M,a as Q}from"./verify-2585dbc6.js";import{a as B}from"./order-5f601f60.js";import{g as W,l as K}from"./inform-29e6a852.js";import"./pdfh5-e5c0db2a.js";const V=e=>(A("data-v-7e8d1d5c"),e=e(),F(),e),z={class:"page-verify"},J={class:"people"},X={class:"name"},Z={class:"verify-item"},ee=V((()=>f("div",{class:"label"},"证件号码",-1))),ae={class:"no"},te=E(" 去认证 "),le={class:"sign-body"},ne={class:"date"},oe={class:"file"},re=E(" 签名将被用于以下文件： "),se={class:"people"},ie={class:"name"},de={class:"verify-item"},ce=V((()=>f("div",{class:"label"},"证件号码",-1))),ue={class:"no"},ve=["onClick"],fe=E(" 去认证 "),pe=["onClick"],ye={class:"sign-body"},Ce={class:"date"},me={class:"file"},Ie=E(" 签名将被用于以下文件： "),ge={class:"footer-button footer"},he=V((()=>f("div",{class:"text"},"刷新",-1))),Ne=E("分享"),ke=E("提交");var Te=e(a({setup(e){const a=1,E=2,A=t(),F=l(),V=(()=>{const e=A.query;return e.orderCode&&(e.orderNo=e.orderCode,delete e.orderCode),e})(),{saleUserId:Te="D1234567-1",tenantId:be="9991000007",templateId:xe=1,productCode:Oe="CQ75CQ76",insurerCode:we="ancheng",isShare:Ee,orderCode:Le,orderNo:_e,productCategory:De}=V,je=new n({source:"localStorage"}),Se=o([]),He=o([]),Re=o([]),$e=o([]),Ue=o(),Pe=o(),Ae=[],Fe=o(""),Ye=o(),Ge=r().format("YYYY-MM-DD"),qe=()=>{var e,a;null==(a=null==(e=Pe.value)?void 0:e.clear)||a.call(e)},Me=(e,a)=>{let t=window.location.href;t=t.includes("orderCode")?t:t.replace("orderNo","orderCode"),Q({callbackUrl:t,certiNo:e,faceAuthMode:"TENCENT",userName:a,tenantId:9991000007}).then((t=>{const{code:l,data:n}=t;if("10000"===l){const{originalUrl:t,serialNo:l}=n;window.location.href=t,je.set("verifyData",{serialNo:l,certNo:e,name:a})}}))},Qe=e=>{const{id:a,objectType:t}=e;Fe.value="",Ye.value="";const l={1:"pdf",2:"richText",3:"link"};W({insurerCode:we,id:a,objectType:t,productCategory:De,orderNo:_e,tenantId:be}).then((({code:e,data:a})=>{if("10000"===e){const{textType:e,content:t,questionType:n}=(null==a?void 0:a[0])||{};2===n?(Fe.value="question",Ye.value=a):(1===e&&t.includes("png")?Fe.value="picture":Fe.value=l[e],Ye.value=t)}}))},Be=e=>`${e}`===L.CERT,We=e=>{var a,t,l,n;-1===e?Me(null==(a=Ue.value.tenantOrderHolder)?void 0:a.certNo,null==(t=Ue.value.tenantOrderHolder)?void 0:t.name):Me(null==(l=Ue.value.tenantOrderInsuredList[e])?void 0:l.certNo,null==(n=Ue.value.tenantOrderInsuredList[e])?void 0:n.name)},Ke=e=>{e&&Ae.every((a=>a!==e))&&Ae.push(e)},Ve=()=>{var e,t,l,n;(null==(e=Pe.value)?void 0:e.isEmpty())?_.fail("请投保人签名"):(null==(l=null==(t=Ue.value.tenantOrderHolder)?void 0:t.extInfo)?void 0:l.isCert)!==a&&Be(null==(n=Ue.value.tenantOrderHolder)?void 0:n.certType)?_.fail("请投保人去认证"):D({orderNo:Le||_e,saleUserId:Te,tenantId:be}).then((e=>{const{code:a,data:t}=e;"10000"===a&&([B.PENDING,B.PAYMENT_FAILED,B.UNDER_WRITING_SUCCESS].includes(t.orderStatus)?S.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{var e,t;const l=null==(e=Pe.value)?void 0:e.save();Promise.all([q("HOLDER",l,null==(t=Ue.value)?void 0:t.id,`${be}`)]).then((()=>{H({...Ue.value,pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:{...Ue.value.extInfo,pageCode:"sign",templateId:xe,shareFlag:Ee?"Y":"N",buttonCode:R.sign},venderCode:we}).then((e=>{const{code:t,data:l}=e;"10000"===a&&l.success&&F.push({path:$[l.pageAction.data.nextPageCode],query:{orderNo:Le||_e,saleUserId:Te,tenantId:be}})}))}))})):j("paymentResult",V))}))},ze=(e=!1)=>{D({orderNo:Le||_e,saleUserId:Te,tenantId:be}).then((a=>{var t,l;const{code:n,data:o}=a;"10000"===n&&(Ue.value=o,e&&((null==(l=null==(t=null==o?void 0:o.tenantOrderHolder)?void 0:t.extInfo)?void 0:l.isCert)===E||(null==o?void 0:o.tenantOrderInsuredList.some((e=>{var a;return(null==(a=e.extInfo)?void 0:a.isCert)===E})))?_("用户未完身份认证及签字"):(null==o?void 0:o.tenantOrderAttachmentList.find((e=>e.category===U.ELECTRIC_SIGN&&e.objectType===P.HOLDER)))&&(null==o?void 0:o.tenantOrderAttachmentList.find((e=>e.category===U.ELECTRIC_SIGN&&e.objectType===P.INSURED)))||_("用户未完身份认证及签字")),setTimeout((()=>{let e=0;o.tenantOrderAttachmentList.forEach((a=>{var t,l,n,o;a.category===U.ELECTRIC_SIGN&&(a.objectType===P.HOLDER?(null==(l=null==(t=Pe.value)?void 0:t.clear)||l.call(t),Pe.value.setDataURL(a.fileBase64)):a.objectType===P.INSURED&&(null==(o=null==(n=Ae[e])?void 0:n.clear)||o.call(n),Ae[e].setDataURL(a.fileBase64),e+=1))}))})))}))},Je=()=>{ze(!0)},Xe=s((()=>{const e={...V,isShare:1,sharePageCode:"sign"};return`${window.location.origin}/phoneVerify?${Y.stringify(e)}`}));return i((()=>{ze(),(async()=>{const e={orderNo:Le||_e,productCode:Oe,tenantId:be,objectType:1},a={insurerCode:we,orderNo:_e,productCategory:De,tenantId:be,noticeType:4,objectType:1},{code:t,data:l}=await M(e),{code:n,data:o}=await M({...e,objectType:2}),{code:r,data:s}=await K(a),{code:i,data:d}=await K({...a,noticeType:5,objectType:2});"10000"===t&&(He.value=l||[]),"10000"===n&&(Se.value=o||[]),"10000"===r&&($e.value=s||[]),"10000"===i&&(Re.value=d||[])})();const e=je.get("verifyData");if(e){const{serialNo:a,certNo:t,name:l}=e;G({certiNo:t,orderNo:Le||_e,serialNo:a,tenantId:be,userName:l}).then((e=>{const{code:a,data:t}=e;"10000"===a&&(je.remove("verifyData"),ze())}))}})),(e,t)=>{const l=d("ProPDFviewer"),n=d("van-button"),o=d("ProPageWrap");return c(),u(o,null,{default:v((()=>{var e;return[f("div",z,[p(y,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),p(N,{title:"投保人",class:"card"},{extra:v((()=>{var e,t,l,n,o,r,s,i,d,u;return[f("div",J,[f("div",X,C(null==(t=null==(e=Ue.value)?void 0:e.tenantOrderHolder)?void 0:t.name),1),Be(null==(n=null==(l=Ue.value)?void 0:l.tenantOrderHolder)?void 0:n.certType)?(c(),m("div",{key:0,class:I(["status",{verified:(null==(s=null==(r=null==(o=Ue.value)?void 0:o.tenantOrderHolder)?void 0:r.extInfo)?void 0:s.isCert)===a}])},C((null==(u=null==(d=null==(i=Ue.value)?void 0:i.tenantOrderHolder)?void 0:d.extInfo)?void 0:u.isCert)===a?"已认证":"待认证"),3)):g("",!0)])]})),default:v((()=>{var e,l,n,o,r,s,i;return[f("div",Z,[ee,f("div",ae,C(null==(l=null==(e=Ue.value)?void 0:e.tenantOrderHolder)?void 0:l.certNo),1),(null==(r=null==(o=null==(n=Ue.value)?void 0:n.tenantOrderHolder)?void 0:o.extInfo)?void 0:r.isCert)!==a&&Be(null==(i=null==(s=Ue.value)?void 0:s.tenantOrderHolder)?void 0:i.certType)?(c(),m("div",{key:0,class:"action",onClick:t[0]||(t[0]=e=>We(-1))},[te,p(h,{name:"right_arrow",class:"icon"})])):g("",!0)])]})),_:1}),p(N,{key:"-1",title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[f("div",{class:"resign",onClick:qe},"重签")])),default:v((()=>[p(k,{ref_key:"holderSign",ref:Pe,class:"sign"},null,512),f("div",le,[f("div",ne,"签名日期： "+C(T(Ge)),1),f("div",oe,[re,f("span",null,[(c(!0),m(O,null,b(He.value,((e,a)=>(c(),u(l,{key:`holderFileList-${a}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:T(x)(e.materialContent,e.materialSource+""),onClick:t[1]||(t[1]=()=>"")},null,8,["title","content","type"])))),128))]),(c(!0),m(O,null,b($e.value,((e,a)=>(c(),u(l,{key:`holderQuestionList-${a}`,class:"file",title:`《${e.title}》`,content:Ye.value,type:Fe.value,onClick:()=>Qe(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:1}),(c(!0),m(O,null,b(null==(e=Ue.value)?void 0:e.tenantOrderInsuredList,((e,n)=>(c(),m("div",{key:n},[p(N,{title:"被保人",class:"card"},{extra:v((()=>{var t,l;return[f("div",se,[f("div",ie,C(e.name),1),Be(e.certType)?(c(),m("div",{key:0,class:I(["status",{verified:(null==(t=e.extInfo)?void 0:t.isCert)===a}])},C((null==(l=e.extInfo)?void 0:l.isCert)===a?"已认证":"待认证"),3)):g("",!0)])]})),default:v((()=>{var t;return[f("div",de,[ce,f("div",ue,C(e.certNo),1),(null==(t=e.extInfo)?void 0:t.isCert)!==a&&Be(e.certType)?(c(),m("div",{key:0,class:"action",onClick:e=>We(n)},[fe,p(h,{name:"right_arrow",class:"icon"})],8,ve)):g("",!0)])]})),_:2},1024),p(N,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[f("div",{class:"resign",onClick:e=>(e=>{var a,t;null==(t=null==(a=Ae[e])?void 0:a.clear)||t.call(a)})(n)},"重签",8,pe)])),default:v((()=>[p(k,{ref_for:!0,ref:Ke,class:"sign"}),f("div",ye,[f("div",Ce,"签名日期： "+C(T(Ge)),1),f("div",me,[Ie,(c(!0),m(O,null,b(Se.value,((e,a)=>(c(),u(l,{key:`insuredFileList-${a}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:T(x)(e.materialContent,e.materialSource+""),onClick:t[2]||(t[2]=()=>"")},null,8,["title","content","type"])))),128)),(c(!0),m(O,null,b(Re.value,((e,a)=>(c(),u(l,{key:`insuredQuestionList-${a}`,class:"file",title:`《${e.title}》`,content:Ye.value,type:Fe.value,onClick:()=>Qe(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:2},1024)])))),128)),f("div",ge,[T(Ee)?g("",!0):(c(),m("div",{key:0,class:"refresh-btn",onClick:Je},[f("div",null,[p(h,{name:"refresh"})]),he])),T(Ee)?g("",!0):(c(),u(w,{key:1,title:"邀请您进行身份认证",desc:"邀请您进行身份认证",link:T(Xe)},{default:v((()=>[p(n,{plain:"",type:"primary",class:"share-btn"},{default:v((()=>[Ne])),_:1})])),_:1},8,["link"])),p(n,{type:"primary",class:"submit-btn",onClick:Ve},{default:v((()=>[ke])),_:1})])])]})),_:1})}}}),[["__scopeId","data-v-7e8d1d5c"]]);export{Te as default};
