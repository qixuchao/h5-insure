import{d as e,aV as i,aW as s,j as a,k as l,b9 as n,E as t,o,c as r,b as d,w as v,a as u,e as c,u as g,n as f,aY as m,f as p,v as y,p as h,q as S,ah as w,b2 as _,ar as k}from"./index-83a8b446.js";import{S as b}from"./index-340d107b.js";const x={class:"com-sign-part"},E={class:"people"},V={class:"name"},C={key:0,class:"verify-item"},Y=u("div",{class:"label"},"证件号码",-1),I={class:"no"},P={class:"sign-status"},L=["src"],j={key:1,class:"sign-desc"},B={class:"sign-body"},T={class:"date"},D={class:"file"},R=e({name:"signPart"}),$=e({...R,props:{signString:{default:()=>[]},personalInfo:{default:()=>({})},fileList:{},title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},compositionSign:{default:""}},emits:["handleVerify","handleSign"],setup(e,{expose:R,emit:$}){const M=e,N=i((()=>s((()=>import("./index-7e71e286.js")),["static/js/index-7e71e286.js","static/css/index-4822eb94.css","static/js/index-83a8b446.js","static/css/index-5706e38b.css"]))),O=i((()=>s((()=>import("./index-e410e5fd.js")),["static/js/index-e410e5fd.js","static/css/index-fa4edf2a.css","static/js/index-83a8b446.js","static/css/index-5706e38b.css","static/js/theme-94cf7d00.js","static/js/index-bd368392.js","static/css/index-bbfdd7ec.css","static/js/utils-7bac2bc5.js","static/js/infoCollection-207a44bb.js","static/js/trial-166a0af0.js"]))),A=a({}),F=a([]);a([]),a({}),a(!0);const U=a(!1),q=a(0),W=e=>`${e}`===w.CERT,z=l((()=>n().format("YYYY-MM-DD"))),G=()=>{var e,i;$("handleVerify",null==(e=A.value)?void 0:e.name,null==(i=A.value)?void 0:i.certNo)},H=()=>{U.value=!1},J=a(),K=()=>{J.value&&J.value.openSign(!0)},Q=()=>{M.disabled||J.value&&J.value.openSign()},X=e=>{$("handleSign",e)};return R({validateSign:()=>new Promise(((e,i)=>{var s;(null==(s=F.value)?void 0:s.length)?e(!0):i(new Error(`请先完成${M.title}签名`))})),validateVerify:()=>new Promise(((e,i)=>{var s;(null==(s=M.personalInfo)?void 0:s.isCert)!==m.YES?i(new Error(`请${M.title}完成认证`)):e(!0)}))}),t((()=>M.signString),(()=>{F.value=M.signString}),{immediate:!0,deep:!0}),t((()=>M.personalInfo),(()=>{A.value=M.personalInfo}),{deep:!0,immediate:!0}),(e,i)=>{const s=_,a=k;return o(),r("div",x,[d(a,{title:e.title,class:"card"},{extra:v((()=>{var i,s,a,l;return[u("div",E,[u("div",V,c(null==(i=g(A))?void 0:i.name),1),e.showVerify&&W(null==(s=g(A))?void 0:s.certType)?(o(),r("div",{key:0,class:f(["status",{verified:(null==(a=g(A))?void 0:a.isCert)===g(m).YES}])},c((null==(l=g(A))?void 0:l.isCert)===g(m).YES?"已认证":"待认证"),3)):p("",!0)])]})),default:v((()=>{var i,a,l,n;return[e.showVerify&&(null==(i=g(A))?void 0:i.certNo)?(o(),r("div",C,[Y,u("div",I,c(null==(a=g(A))?void 0:a.certNo),1),(null==(l=g(A))?void 0:l.isCert)!==g(m).YES&&W(null==(n=g(A))?void 0:n.certType)?(o(),r("div",{key:0,class:"action",onClick:G},[y(" 去认证 "),d(s,{name:"right_arrow",class:"icon"})])):p("",!0)])):p("",!0)]})),_:1},8,["title"]),e.showSign?(o(),h(a,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",P,[e.disabled?p("",!0):(o(),r("div",{key:0,class:"resign",onClick:K},"重签"))])])),default:v((()=>{var s,a;return[d(b,{ref_key:"signRef",ref:J,modelValue:g(F),"onUpdate:modelValue":i[0]||(i[0]=e=>S(F)?F.value=e:null),"sign-string":(null==(s=g(A))?void 0:s.name)||"",class:"sign",onSubmitSign:X},{signImg:v((({data:i})=>[u("div",{class:"sign-board",onClick:Q},[e.compositionSign?(o(),r("img",{key:0,src:e.compositionSign,class:"sign-img",alt:""},null,8,L)):(o(),r("span",j,"请签名"))])])),_:1},8,["modelValue","sign-string"]),u("div",B,[u("div",T,"签名日期： "+c(g(z)),1),u("div",D,[(null==(a=e.fileList)?void 0:a.length)?(o(),h(g(N),{key:0,"attachment-list":e.fileList,"pre-text":"签名将被用于以下文件：",onPreviewFile:i[1]||(i[1]=e=>(e=>{q.value=e,U.value=!0})(e))},null,8,["attachment-list"])):p("",!0)])])]})),_:1},8,["title"])):p("",!0),g(U)?(o(),h(g(O),{key:1,show:g(U),"onUpdate:show":i[2]||(i[2]=e=>S(U)?U.value=e:null),"content-list":e.fileList,"is-only-view":"","active-index":g(q),text:"关闭",onOnCloseFilePreviewByMask:H},null,8,["show","content-list","active-index"])):p("",!0)])}}});export{$ as _};
