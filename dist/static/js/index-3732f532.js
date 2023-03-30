import{_ as e,d as a,a as t,u as l,ac as n,r as o,ad as r,E as s,G as i,b as d,c,e as u,w as v,j as f,f as p,ae as y,P as C,t as m,g as I,h as g,L as h,k as N,n as k,V as T,af as b,F as O,i as _,a6 as x,ag as E,ah as L,T as w,p as j,ai as D,aj as S,M as H,N as R,O as U,ak as $,al as P,am as A,aa as Y,B as G,X as F,Y as M}from"./index-8004a025.js";import{f as q,s as Q,g as B,a as V}from"./verify-5d05ab80.js";import{a as W}from"./order-b57fff5d.js";import{g as X,l as z}from"./inform-e76accbd.js";import"./pdfh5-008ca364.js";const J=e=>(F("data-v-7e8d1d5c"),e=e(),M(),e),K={class:"page-verify"},Z={class:"people"},ee={class:"name"},ae={class:"verify-item"},te=J((()=>f("div",{class:"label"},"证件号码",-1))),le={class:"no"},ne={class:"sign-body"},oe={class:"date"},re={class:"file"},se={class:"people"},ie={class:"name"},de={class:"verify-item"},ce=J((()=>f("div",{class:"label"},"证件号码",-1))),ue={class:"no"},ve=["onClick"],fe=["onClick"],pe={class:"sign-body"},ye={class:"date"},Ce={class:"file"},me={class:"footer-button footer"},Ie=J((()=>f("div",{class:"text"},"刷新",-1)));var ge=e(a({__name:"index",setup(e){const a=1,F=2,M=t(),J=l(),ge=(()=>{const e=M.query;return e.orderCode&&(e.orderNo=e.orderCode,delete e.orderCode),e})(),{saleUserId:he="D1234567-1",tenantId:Ne="9991000007",templateId:ke=1,productCode:Te="CQ75CQ76",insurerCode:be="ancheng",isShare:Oe,orderCode:_e,orderNo:xe,productCategory:Ee}=ge,Le=new n({source:"localStorage"}),we=o([]),je=o([]),De=o([]),Se=o([]),He=o(),Re=o(),Ue=[],$e=o(""),Pe=o(),Ae=r().format("YYYY-MM-DD"),Ye=()=>{var e,a;null==(a=null==(e=Re.value)?void 0:e.clear)||a.call(e)},Ge=(e,a)=>{let t=window.location.href;t=t.includes("orderCode")?t:t.replace("orderNo","orderCode"),V({callbackUrl:t,certiNo:e,faceAuthMode:"TENCENT",userName:a,tenantId:9991000007}).then((t=>{const{code:l,data:n}=t;if("10000"===l){const{originalUrl:t,serialNo:l}=n;window.location.href=t,Le.set("verifyData",{serialNo:l,certNo:e,name:a})}}))},Fe=e=>{const{id:a,objectType:t}=e;$e.value="",Pe.value="";const l={1:"pdf",2:"richText",3:"link"};X({insurerCode:be,id:a,objectType:t,productCategory:Ee,orderNo:xe,tenantId:Ne}).then((({code:e,data:a})=>{if("10000"===e){const{textType:e,content:t,questionType:n}=(null==a?void 0:a[0])||{};2===n?($e.value="question",Pe.value=a):(1===e&&t.includes("png")?$e.value="picture":$e.value=l[e],Pe.value=t)}}))},Me=e=>`${e}`===L.CERT,qe=e=>{var a,t,l,n;-1===e?Ge(null==(a=He.value.tenantOrderHolder)?void 0:a.certNo,null==(t=He.value.tenantOrderHolder)?void 0:t.name):Ge(null==(l=He.value.tenantOrderInsuredList[e])?void 0:l.certNo,null==(n=He.value.tenantOrderInsuredList[e])?void 0:n.name)},Qe=e=>{e&&Ue.every((a=>a!==e))&&Ue.push(e)},Be=()=>{var e,t,l,n;(null==(e=Re.value)?void 0:e.isEmpty())?w.fail("请投保人签名"):(null==(l=null==(t=He.value.tenantOrderHolder)?void 0:t.extInfo)?void 0:l.isCert)!==a&&Me(null==(n=He.value.tenantOrderHolder)?void 0:n.certType)?w.fail("请投保人去认证"):j({orderNo:_e||xe,saleUserId:he,tenantId:Ne}).then((e=>{const{code:a,data:t}=e;"10000"===a&&([W.PENDING,W.PAYMENT_FAILED,W.UNDER_WRITING_SUCCESS].includes(t.orderStatus)?S.confirm({title:"提示",message:"请确认信息填写无误后，再进行支付"}).then((()=>{var e,t;const l=null==(e=Re.value)?void 0:e.save();Promise.all([Q("HOLDER",l,null==(t=He.value)?void 0:t.id,`${Ne}`)]).then((()=>{H({...He.value,pageCode:"sign",operateOption:{withSignInfo:!0},extInfo:{...He.value.extInfo,pageCode:"sign",templateId:ke,shareFlag:Oe?"Y":"N",buttonCode:R.sign},venderCode:be}).then((e=>{const{code:t,data:l}=e;"10000"===a&&l.success&&J.push({path:U[l.pageAction.data.nextPageCode],query:{orderNo:_e||xe,saleUserId:he,tenantId:Ne}})}))}))})):D("paymentResult",ge))}))},Ve=(e=!1)=>{j({orderNo:_e||xe,saleUserId:he,tenantId:Ne}).then((a=>{var t,l;const{code:n,data:o}=a;"10000"===n&&(He.value=o,e&&((null==(l=null==(t=null==o?void 0:o.tenantOrderHolder)?void 0:t.extInfo)?void 0:l.isCert)===F||(null==o?void 0:o.tenantOrderInsuredList.some((e=>{var a;return(null==(a=e.extInfo)?void 0:a.isCert)===F})))?w("用户未完身份认证及签字"):(null==o?void 0:o.tenantOrderAttachmentList.find((e=>e.category===$.ELECTRIC_SIGN&&e.objectType===P.HOLDER)))&&(null==o?void 0:o.tenantOrderAttachmentList.find((e=>e.category===$.ELECTRIC_SIGN&&e.objectType===P.INSURED)))||w("用户未完身份认证及签字")),setTimeout((()=>{let e=0;o.tenantOrderAttachmentList.forEach((a=>{var t,l,n,o;a.category===$.ELECTRIC_SIGN&&(a.objectType===P.HOLDER?(null==(l=null==(t=Re.value)?void 0:t.clear)||l.call(t),Re.value.setDataURL(a.fileBase64)):a.objectType===P.INSURED&&(null==(o=null==(n=Ue[e])?void 0:n.clear)||o.call(n),Ue[e].setDataURL(a.fileBase64),e+=1))}))})))}))},We=()=>{Ve(!0)},Xe=s((()=>{const e={...ge,isShare:1,sharePageCode:"sign"};return`${window.location.origin}/phoneVerify?${A.stringify(e)}`}));return i((()=>{Ve(),(async()=>{const e={orderNo:_e||xe,productCode:Te,tenantId:Ne,objectType:1},a={insurerCode:be,orderNo:xe,productCategory:Ee,tenantId:Ne,noticeType:4,objectType:1},{code:t,data:l}=await B(e),{code:n,data:o}=await B({...e,objectType:2}),{code:r,data:s}=await z(a),{code:i,data:d}=await z({...a,noticeType:5,objectType:2});"10000"===t&&(je.value=l||[]),"10000"===n&&(we.value=o||[]),"10000"===r&&(Se.value=s||[]),"10000"===i&&(De.value=d||[])})();const e=Le.get("verifyData");if(e){const{serialNo:a,certNo:t,name:l}=e;q({certiNo:t,orderNo:_e||xe,serialNo:a,tenantId:Ne,userName:l}).then((e=>{const{code:a,data:t}=e;"10000"===a&&(Le.remove("verifyData"),Ve())}))}})),(e,t)=>{const l=Y,n=G,o=d("ProPageWrap");return c(),u(o,null,{default:v((()=>{var e;return[f("div",K,[p(y,{type:"warning",title:"尊敬的客户，本次投保需要进行身份认证",content:"本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"}),p(C,{title:"投保人",class:"card"},{extra:v((()=>{var e,t,l,n,o,r,s,i,d,u;return[f("div",Z,[f("div",ee,m(null==(t=null==(e=I(He))?void 0:e.tenantOrderHolder)?void 0:t.name),1),Me(null==(n=null==(l=I(He))?void 0:l.tenantOrderHolder)?void 0:n.certType)?(c(),g("div",{key:0,class:h(["status",{verified:(null==(s=null==(r=null==(o=I(He))?void 0:o.tenantOrderHolder)?void 0:r.extInfo)?void 0:s.isCert)===a}])},m((null==(u=null==(d=null==(i=I(He))?void 0:i.tenantOrderHolder)?void 0:d.extInfo)?void 0:u.isCert)===a?"已认证":"待认证"),3)):N("",!0)])]})),default:v((()=>{var e,l,n,o,r,s,i;return[f("div",ae,[te,f("div",le,m(null==(l=null==(e=I(He))?void 0:e.tenantOrderHolder)?void 0:l.certNo),1),(null==(r=null==(o=null==(n=I(He))?void 0:n.tenantOrderHolder)?void 0:o.extInfo)?void 0:r.isCert)!==a&&Me(null==(i=null==(s=I(He))?void 0:s.tenantOrderHolder)?void 0:i.certType)?(c(),g("div",{key:0,class:"action",onClick:t[0]||(t[0]=e=>qe(-1))},[k(" 去认证 "),p(T,{name:"right_arrow",class:"icon"})])):N("",!0)])]})),_:1}),p(C,{key:"-1",title:"投保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[f("div",{class:"resign",onClick:Ye},"重签")])),default:v((()=>[p(b,{ref_key:"holderSign",ref:Re,class:"sign"},null,512),f("div",ne,[f("div",oe,"签名日期： "+m(I(Ae)),1),f("div",re,[k(" 签名将被用于以下文件： "),f("span",null,[(c(!0),g(O,null,_(I(je),((e,a)=>(c(),u(l,{key:`holderFileList-${a}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:I(x)(e.materialContent,e.materialSource+""),onClick:t[1]||(t[1]=()=>"")},null,8,["title","content","type"])))),128))]),(c(!0),g(O,null,_(I(Se),((e,a)=>(c(),u(l,{key:`holderQuestionList-${a}`,class:"file",title:`《${e.title}》`,content:I(Pe),type:I($e),onClick:()=>Fe(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:1}),(c(!0),g(O,null,_(null==(e=I(He))?void 0:e.tenantOrderInsuredList,((e,n)=>(c(),g("div",{key:n},[p(C,{title:"被保人",class:"card"},{extra:v((()=>{var t,l;return[f("div",se,[f("div",ie,m(e.name),1),Me(e.certType)?(c(),g("div",{key:0,class:h(["status",{verified:(null==(t=e.extInfo)?void 0:t.isCert)===a}])},m((null==(l=e.extInfo)?void 0:l.isCert)===a?"已认证":"待认证"),3)):N("",!0)])]})),default:v((()=>{var t;return[f("div",de,[ce,f("div",ue,m(e.certNo),1),(null==(t=e.extInfo)?void 0:t.isCert)!==a&&Me(e.certType)?(c(),g("div",{key:0,class:"action",onClick:e=>qe(n)},[k(" 去认证 "),p(T,{name:"right_arrow",class:"icon"})],8,ve)):N("",!0)])]})),_:2},1024),p(C,{title:"被保人签名","show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[f("div",{class:"resign",onClick:e=>(e=>{var a,t;null==(t=null==(a=Ue[e])?void 0:a.clear)||t.call(a)})(n)},"重签",8,fe)])),default:v((()=>[p(b,{ref_for:!0,ref:Qe,class:"sign"}),f("div",pe,[f("div",ye,"签名日期： "+m(I(Ae)),1),f("div",Ce,[k(" 签名将被用于以下文件： "),(c(!0),g(O,null,_(I(we),((e,a)=>(c(),u(l,{key:`insuredFileList-${a}`,class:"file",title:`《${e.materialName}》`,content:e.materialContent,type:I(x)(e.materialContent,e.materialSource+""),onClick:t[2]||(t[2]=()=>"")},null,8,["title","content","type"])))),128)),(c(!0),g(O,null,_(I(De),((e,a)=>(c(),u(l,{key:`insuredQuestionList-${a}`,class:"file",title:`《${e.title}》`,content:I(Pe),type:I($e),onClick:()=>Fe(e)},null,8,["title","content","type","onClick"])))),128))])])])),_:2},1024)])))),128)),f("div",me,[I(Oe)?N("",!0):(c(),g("div",{key:0,class:"refresh-btn",onClick:We},[f("div",null,[p(T,{name:"refresh"})]),Ie])),I(Oe)?N("",!0):(c(),u(E,{key:1,title:"邀请您进行身份认证",desc:"邀请您进行身份认证",link:I(Xe)},{default:v((()=>[p(n,{plain:"",type:"primary",class:"share-btn"},{default:v((()=>[k("分享")])),_:1})])),_:1},8,["link"])),p(n,{type:"primary",class:"submit-btn",onClick:Be},{default:v((()=>[k("提交")])),_:1})])])]})),_:1})}}}),[["__scopeId","data-v-7e8d1d5c"]]);export{ge as default};
