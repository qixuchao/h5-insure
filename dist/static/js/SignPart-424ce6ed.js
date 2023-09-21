import{d as e,a4 as a,a5 as s,j as i,k as l,an as n,z as t,o,c as r,b as d,w as v,a as u,e as c,u as g,n as f,a6 as m,f as p,a8 as y,m as h,p as w,aj as S,ae as _,aN as k}from"./index-b0d79264.js";import{S as x}from"./index-58770a81.js";const E={class:"com-sign-part"},V={class:"people"},b={class:"name"},C={key:0,class:"verify-item"},Y=u("div",{class:"label"},"证件号码",-1),I={class:"no"},P={class:"sign-status"},j=["src"],L={key:1,class:"sign-desc"},B={class:"sign-body"},T={class:"date"},D={class:"file"},N=e({name:"signPart"}),R=e({...N,props:{signString:{default:()=>[]},personalInfo:{default:()=>({})},fileList:{},title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:N,emit:R}){const $=e,M=a((()=>s((()=>import("./index-b64596ca.js")),["static/js/index-b64596ca.js","static/css/index-bf024e9b.css","static/js/index-b0d79264.js","static/css/index-8f5ab95c.css"]))),O=a((()=>s((()=>import("./index-fa478128.js")),["static/js/index-fa478128.js","static/css/index-fa4edf2a.css","static/js/index-b0d79264.js","static/css/index-8f5ab95c.css","static/js/theme-94cf7d00.js","static/js/index-601db384.js","static/css/index-bbfdd7ec.css","static/js/utils-0b1bbfab.js","static/js/infoCollection-1da19100.js","static/js/trial-2f09ece8.js"]))),A=i({}),F=i([]);i([]),i({}),i(!0);const U=i(!1),z=i(0),q=e=>`${e}`===S.CERT,G=l((()=>n().format("YYYY-MM-DD"))),H=()=>{var e,a;R("handleVerify",null==(e=A.value)?void 0:e.name,null==(a=A.value)?void 0:a.certNo)},J=()=>{U.value=!1},K=i(),Q=()=>{K.value&&(K.value.rewrite(),K.value.openSign())},W=()=>{$.disabled||K.value&&K.value.openSign()},X=e=>{R("handleSign",e)};return N({validateSign:()=>new Promise(((e,a)=>{var s;(null==(s=F.value)?void 0:s.length)?e(!0):a(new Error(`请${$.title}完成签名后，去支付`))})),validateVerify:()=>new Promise(((e,a)=>{var s;(null==(s=$.personalInfo)?void 0:s.isCert)!==m.YES?a(new Error(`请${$.title}完成认证后，去支付`)):e(!0)}))}),t((()=>$.signString),(()=>{F.value=$.signString}),{immediate:!0,deep:!0}),t((()=>$.personalInfo),(()=>{A.value=$.personalInfo}),{deep:!0,immediate:!0}),(e,a)=>{const s=_,i=k;return o(),r("div",E,[d(i,{title:e.title,class:"card"},{extra:v((()=>{var a,s,i,l;return[u("div",V,[u("div",b,c(null==(a=g(A))?void 0:a.name),1),e.showVerify&&q(null==(s=g(A))?void 0:s.certType)?(o(),r("div",{key:0,class:f(["status",{verified:(null==(i=g(A))?void 0:i.isCert)===g(m).YES}])},c((null==(l=g(A))?void 0:l.isCert)===g(m).YES?"已认证":"待认证"),3)):p("",!0)])]})),default:v((()=>{var a,i,l,n;return[e.showVerify&&(null==(a=g(A))?void 0:a.certNo)?(o(),r("div",C,[Y,u("div",I,c(null==(i=g(A))?void 0:i.certNo),1),(null==(l=g(A))?void 0:l.isCert)!==g(m).YES&&q(null==(n=g(A))?void 0:n.certType)?(o(),r("div",{key:0,class:"action",onClick:H},[y(" 去认证 "),d(s,{name:"right_arrow",class:"icon"})])):p("",!0)])):p("",!0)]})),_:1},8,["title"]),e.showSign?(o(),h(i,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",P,[e.disabled?p("",!0):(o(),r("div",{key:0,class:"resign",onClick:Q},"重签"))])])),default:v((()=>{var s,i;return[d(x,{ref_key:"signRef",ref:K,modelValue:g(F),"onUpdate:modelValue":a[0]||(a[0]=e=>w(F)?F.value=e:null),"sign-string":(null==(s=g(A))?void 0:s.name)||"",class:"sign",onSubmitSign:X},{signImg:v((({data:e})=>[u("div",{class:"sign-board",onClick:W},[e?(o(),r("img",{key:0,src:e,class:"sign-img",alt:""},null,8,j)):(o(),r("span",L,"请签名"))])])),_:1},8,["modelValue","sign-string"]),u("div",B,[u("div",T,"签名日期： "+c(g(G)),1),u("div",D,[(null==(i=e.fileList)?void 0:i.length)?(o(),h(g(M),{key:0,"attachment-list":e.fileList,"pre-text":"签名将被用于以下文件：",onPreviewFile:a[1]||(a[1]=e=>(e=>{z.value=e,U.value=!0})(e))},null,8,["attachment-list"])):p("",!0)])])]})),_:1},8,["title"])):p("",!0),g(U)?(o(),h(g(O),{key:1,show:g(U),"onUpdate:show":a[2]||(a[2]=e=>w(U)?U.value=e:null),"content-list":e.fileList,"is-only-view":"","active-index":g(z),text:"关闭",onOnCloseFilePreviewByMask:J},null,8,["show","content-list","active-index"])):p("",!0)])}}});export{R as _};
