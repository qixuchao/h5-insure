import{d as e,ay as i,az as a,j as s,k as l,aO as n,E as t,o,c as d,b as r,w as v,a as u,e as c,u as g,n as m,aB as f,f as p,v as y,p as h,q as S,ah as w,aH as _,as as k}from"./index-dca1ad48.js";import{S as x}from"./index-4eed6d0e.js";const E={class:"com-sign-part"},V={class:"people"},C={class:"name"},b={key:0,class:"verify-item"},Y=u("div",{class:"label"},"证件号码",-1),I={class:"no"},P={class:"sign-status"},B=["src"],L={key:1,class:"sign-desc"},j={class:"sign-body"},T={class:"date"},D={class:"file"},O=e({name:"signPart"}),R=e({...O,props:{signString:{default:()=>[]},personalInfo:{default:()=>({})},fileList:{},title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},compositionSign:{default:""}},emits:["handleVerify","handleSign"],setup(e,{expose:O,emit:R}){const $=e,M=i((()=>a((()=>import("./index-114e84e8.js")),["static/js/index-114e84e8.js","static/css/index-4822eb94.css","static/js/index-dca1ad48.js","static/css/index-efad381f.css"]))),N=i((()=>a((()=>import("./index-5389d023.js")),["static/js/index-5389d023.js","static/css/index-fa4edf2a.css","static/js/index-dca1ad48.js","static/css/index-efad381f.css","static/js/theme-94cf7d00.js","static/js/index-d082fa69.js","static/css/index-bbfdd7ec.css","static/js/utils-be76649e.js","static/js/infoCollection-e09b4c41.js","static/js/trial-8c8f64f2.js"]))),A=s({}),F=s([]);s([]),s({}),s(!0);const U=s(!1),q=s(0),z=e=>`${e}`===w.CERT,H=l((()=>n().format("YYYY-MM-DD"))),G=()=>{var e,i;R("handleVerify",null==(e=A.value)?void 0:e.name,null==(i=A.value)?void 0:i.certNo)},J=()=>{U.value=!1},K=s(),Q=()=>{K.value&&K.value.openSign(!0)},W=()=>{$.disabled||K.value&&K.value.openSign()},X=e=>{R("handleSign",e)};return O({validateSign:()=>new Promise(((e,i)=>{var a;(null==(a=F.value)?void 0:a.length)?e(!0):i(new Error(`请先完成${$.title}签名`))})),validateVerify:()=>new Promise(((e,i)=>{var a;(null==(a=$.personalInfo)?void 0:a.isCert)!==f.YES?i(new Error(`请${$.title}完成认证`)):e(!0)}))}),t((()=>$.signString),(()=>{F.value=$.signString}),{immediate:!0,deep:!0}),t((()=>$.personalInfo),(()=>{A.value=$.personalInfo}),{deep:!0,immediate:!0}),(e,i)=>{const a=_,s=k;return o(),d("div",E,[r(s,{title:e.title,class:"card"},{extra:v((()=>{var i,a,s,l;return[u("div",V,[u("div",C,c(null==(i=g(A))?void 0:i.name),1),e.showVerify&&z(null==(a=g(A))?void 0:a.certType)?(o(),d("div",{key:0,class:m(["status",{verified:(null==(s=g(A))?void 0:s.isCert)===g(f).YES}])},c((null==(l=g(A))?void 0:l.isCert)===g(f).YES?"已认证":"待认证"),3)):p("",!0)])]})),default:v((()=>{var i,s,l,n;return[e.showVerify&&(null==(i=g(A))?void 0:i.certNo)?(o(),d("div",b,[Y,u("div",I,c(null==(s=g(A))?void 0:s.certNo),1),(null==(l=g(A))?void 0:l.isCert)!==g(f).YES&&z(null==(n=g(A))?void 0:n.certType)?(o(),d("div",{key:0,class:"action",onClick:G},[y(" 去认证 "),r(a,{name:"right_arrow",class:"icon"})])):p("",!0)])):p("",!0)]})),_:1},8,["title"]),e.showSign?(o(),h(s,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",P,[e.disabled?p("",!0):(o(),d("div",{key:0,class:"resign",onClick:Q},"重签"))])])),default:v((()=>{var a,s;return[r(x,{ref_key:"signRef",ref:K,modelValue:g(F),"onUpdate:modelValue":i[0]||(i[0]=e=>S(F)?F.value=e:null),"sign-string":(null==(a=g(A))?void 0:a.name)||"",class:"sign",onSubmitSign:X},{signImg:v((({data:i})=>[u("div",{class:"sign-board",onClick:W},[e.compositionSign?(o(),d("img",{key:0,src:e.compositionSign,class:"sign-img",alt:""},null,8,B)):(o(),d("span",L,"请签名"))])])),_:1},8,["modelValue","sign-string"]),u("div",j,[u("div",T,"签名日期： "+c(g(H)),1),u("div",D,[(null==(s=e.fileList)?void 0:s.length)?(o(),h(g(M),{key:0,"attachment-list":e.fileList,"pre-text":"签名将被用于以下文件：",onPreviewFile:i[1]||(i[1]=e=>(e=>{q.value=e,U.value=!0})(e))},null,8,["attachment-list"])):p("",!0)])])]})),_:1},8,["title"])):p("",!0),g(U)?(o(),h(g(N),{key:1,show:g(U),"onUpdate:show":i[2]||(i[2]=e=>S(U)?U.value=e:null),"content-list":e.fileList,"is-only-view":"","active-index":g(q),text:"关闭",onOnCloseFilePreviewByMask:J},null,8,["show","content-list","active-index"])):p("",!0)])}}});export{R as _};
