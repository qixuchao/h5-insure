import{d as e,a4 as a,a5 as l,j as s,k as i,aq as n,z as t,o,c as r,b as d,w as v,a as u,e as c,u as g,n as f,a6 as m,f as p,a8 as y,m as h,p as w,am as S,af as _,aI as k}from"./index-29312576.js";import{S as x}from"./index-e86333bd.js";const b={class:"com-sign-part"},E={class:"people"},V={class:"name"},C={key:0,class:"verify-item"},I=u("div",{class:"label"},"证件号码",-1),Y={class:"no"},P={class:"sign-status"},L=["src"],j={key:1,class:"sign-desc"},B={class:"sign-body"},T={class:"date"},D={class:"file"},R=e({name:"signPart"}),$=e({...R,props:{signString:{default:()=>[]},personalInfo:{default:()=>({})},fileList:null,title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:R,emit:$}){const M=e,N=a((()=>l((()=>import("./index-b0a63f5f.js")),["static/js/index-b0a63f5f.js","static/css/index-bf024e9b.css","static/js/index-29312576.js","static/css/index-f1c5cfcb.css"]))),O=a((()=>l((()=>import("./index-95b725ed.js")),["static/js/index-95b725ed.js","static/css/index-fa4edf2a.css","static/js/index-29312576.js","static/css/index-f1c5cfcb.css","static/js/theme-94cf7d00.js","static/js/index-f8880f35.js","static/css/index-bbfdd7ec.css","static/js/utils-6db2721f.js","static/js/infoCollection-d9103528.js","static/js/trial-539554b9.js"]))),A=s({}),F=s([]);s([]),s({}),s(!0);const U=s(!1),q=s(0),z=e=>`${e}`===S.CERT,G=i((()=>n().format("YYYY-MM-DD"))),H=()=>{var e,a;$("handleVerify",null==(e=A.value)?void 0:e.name,null==(a=A.value)?void 0:a.certNo)},J=()=>{U.value=!1},K=s(),Q=()=>{K.value&&(K.value.openSign(!0),K.value.rewrite())},W=()=>{M.disabled||K.value&&K.value.openSign()},X=e=>{$("handleSign",e)};return R({validateSign:()=>new Promise(((e,a)=>{var l;(null==(l=F.value)?void 0:l.length)?e(!0):a(new Error(`请先完成${M.title}签名`))})),validateVerify:()=>new Promise(((e,a)=>{var l;(null==(l=M.personalInfo)?void 0:l.isCert)!==m.YES?a(new Error(`请${M.title}完成认证`)):e(!0)}))}),t((()=>M.signString),(()=>{F.value=M.signString}),{immediate:!0,deep:!0}),t((()=>M.personalInfo),(()=>{A.value=M.personalInfo}),{deep:!0,immediate:!0}),(a,l)=>{const s=_,i=k;return o(),r("div",b,[d(i,{title:e.title,class:"card"},{extra:v((()=>{var a,l,s,i;return[u("div",E,[u("div",V,c(null==(a=g(A))?void 0:a.name),1),e.showVerify&&z(null==(l=g(A))?void 0:l.certType)?(o(),r("div",{key:0,class:f(["status",{verified:(null==(s=g(A))?void 0:s.isCert)===g(m).YES}])},c((null==(i=g(A))?void 0:i.isCert)===g(m).YES?"已认证":"待认证"),3)):p("",!0)])]})),default:v((()=>{var a,l,i,n;return[e.showVerify&&(null==(a=g(A))?void 0:a.certNo)?(o(),r("div",C,[I,u("div",Y,c(null==(l=g(A))?void 0:l.certNo),1),(null==(i=g(A))?void 0:i.isCert)!==g(m).YES&&z(null==(n=g(A))?void 0:n.certType)?(o(),r("div",{key:0,class:"action",onClick:H},[y(" 去认证 "),d(s,{name:"right_arrow",class:"icon"})])):p("",!0)])):p("",!0)]})),_:1},8,["title"]),e.showSign?(o(),h(i,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",P,[e.disabled?p("",!0):(o(),r("div",{key:0,class:"resign",onClick:Q},"重签"))])])),default:v((()=>{var a,s;return[d(x,{ref_key:"signRef",ref:K,modelValue:g(F),"onUpdate:modelValue":l[0]||(l[0]=e=>w(F)?F.value=e:null),"sign-string":(null==(a=g(A))?void 0:a.name)||"",class:"sign",onSubmitSign:X},{signImg:v((({data:e})=>[u("div",{class:"sign-board",onClick:W},[e?(o(),r("img",{key:0,src:e,class:"sign-img",alt:""},null,8,L)):(o(),r("span",j,"请签名"))])])),_:1},8,["modelValue","sign-string"]),u("div",B,[u("div",T,"签名日期： "+c(g(G)),1),u("div",D,[(null==(s=e.fileList)?void 0:s.length)?(o(),h(g(N),{key:0,"attachment-list":e.fileList,"pre-text":"签名将被用于以下文件：",onPreviewFile:l[1]||(l[1]=e=>(e=>{q.value=e,U.value=!0})(e))},null,8,["attachment-list"])):p("",!0)])])]})),_:1},8,["title"])):p("",!0),g(U)?(o(),h(g(O),{key:1,show:g(U),"onUpdate:show":l[2]||(l[2]=e=>w(U)?U.value=e:null),"content-list":e.fileList,"is-only-view":"","active-index":g(q),text:"关闭",onOnCloseFilePreviewByMask:J},null,8,["show","content-list","active-index"])):p("",!0)])}}});export{$ as _};
