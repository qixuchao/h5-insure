import{d as e,aV as i,aW as a,j as s,k as l,b9 as n,E as t,o,c as r,b as d,w as v,a as u,e as c,u as g,n as m,aY as p,f,v as y,p as h,q as S,ah as w,b2 as _,ar as k}from"./index-655a9a66.js";import{S as b}from"./index-8d391118.js";const x={class:"com-sign-part"},E={class:"people"},V={class:"name"},C={key:0,class:"verify-item"},Y=u("div",{class:"label"},"证件号码",-1),j={class:"no"},I={class:"sign-status"},P=["src"],L={key:1,class:"sign-desc"},B={class:"sign-body"},T={class:"date"},D={class:"file"},R=e({name:"signPart"}),$=e({...R,props:{signString:{default:()=>[]},personalInfo:{default:()=>({})},fileList:{},title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},compositionSign:{default:""}},emits:["handleVerify","handleSign"],setup(e,{expose:R,emit:$}){const q=e,M=i((()=>a((()=>import("./index-1188aa6c.js")),["static/js/index-1188aa6c.js","static/css/index-4822eb94.css","static/js/index-655a9a66.js","static/css/index-1d68d772.css"]))),N=i((()=>a((()=>import("./index-d32f8a43.js")),["static/js/index-d32f8a43.js","static/css/index-fa4edf2a.css","static/js/index-655a9a66.js","static/css/index-1d68d772.css","static/js/theme-94cf7d00.js","static/js/index-7c716c48.js","static/css/index-bbfdd7ec.css","static/js/utils-544df571.js","static/js/infoCollection-d6c69bd9.js","static/js/trial-2382df74.js"]))),O=s({}),A=s([]);s([]),s({}),s(!0);const F=s(!1),U=s(0),W=e=>`${e}`===w.CERT,z=l((()=>n().format("YYYY-MM-DD"))),G=()=>{var e,i;$("handleVerify",null==(e=O.value)?void 0:e.name,null==(i=O.value)?void 0:i.certNo)},H=()=>{F.value=!1},J=s(),K=()=>{J.value&&J.value.openSign(!0)},Q=()=>{q.disabled||J.value&&J.value.openSign()},X=e=>{$("handleSign",e)};return R({validateSign:()=>new Promise(((e,i)=>{var a;(null==(a=A.value)?void 0:a.length)?e(!0):i(new Error(`请先完成${q.title}签名`))})),validateVerify:()=>new Promise(((e,i)=>{var a;(null==(a=q.personalInfo)?void 0:a.isCert)!==p.YES?i(new Error(`请${q.title}完成认证`)):e(!0)}))}),t((()=>q.signString),(()=>{A.value=q.signString}),{immediate:!0,deep:!0}),t((()=>q.personalInfo),(()=>{O.value=q.personalInfo}),{deep:!0,immediate:!0}),(e,i)=>{const a=_,s=k;return o(),r("div",x,[d(s,{title:e.title,class:"card"},{extra:v((()=>{var i,a,s,l;return[u("div",E,[u("div",V,c(null==(i=g(O))?void 0:i.name),1),e.showVerify&&W(null==(a=g(O))?void 0:a.certType)?(o(),r("div",{key:0,class:m(["status",{verified:(null==(s=g(O))?void 0:s.isCert)===g(p).YES}])},c((null==(l=g(O))?void 0:l.isCert)===g(p).YES?"已认证":"待认证"),3)):f("",!0)])]})),default:v((()=>{var i,s,l,n;return[e.showVerify&&(null==(i=g(O))?void 0:i.certNo)?(o(),r("div",C,[Y,u("div",j,c(null==(s=g(O))?void 0:s.certNo),1),(null==(l=g(O))?void 0:l.isCert)!==g(p).YES&&W(null==(n=g(O))?void 0:n.certType)?(o(),r("div",{key:0,class:"action",onClick:G},[y(" 去认证 "),d(a,{name:"right_arrow",class:"icon"})])):f("",!0)])):f("",!0)]})),_:1},8,["title"]),e.showSign?(o(),h(s,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",I,[e.disabled?f("",!0):(o(),r("div",{key:0,class:"resign",onClick:K},"重签"))])])),default:v((()=>{var a,s;return[d(b,{ref_key:"signRef",ref:J,modelValue:g(A),"onUpdate:modelValue":i[0]||(i[0]=e=>S(A)?A.value=e:null),"sign-string":(null==(a=g(O))?void 0:a.name)||"",class:"sign",onSubmitSign:X},{signImg:v((({data:i})=>[u("div",{class:"sign-board",onClick:Q},[e.compositionSign?(o(),r("img",{key:0,src:e.compositionSign,class:"sign-img",alt:""},null,8,P)):(o(),r("span",L,"请签名"))])])),_:1},8,["modelValue","sign-string"]),u("div",B,[u("div",T,"签名日期： "+c(g(z)),1),u("div",D,[(null==(s=e.fileList)?void 0:s.length)?(o(),h(g(M),{key:0,"attachment-list":e.fileList,"pre-text":"签名将被用于以下文件：",onPreviewFile:i[1]||(i[1]=e=>(e=>{U.value=e,F.value=!0})(e))},null,8,["attachment-list"])):f("",!0)])])]})),_:1},8,["title"])):f("",!0),g(F)?(o(),h(g(N),{key:1,show:g(F),"onUpdate:show":i[2]||(i[2]=e=>S(F)?F.value=e:null),"content-list":e.fileList,"is-only-view":"","active-index":g(U),text:"关闭",onOnCloseFilePreviewByMask:H},null,8,["show","content-list","active-index"])):f("",!0)])}}});var q="/h5insure/static/jpg/qianming-c0092beb.jpg";export{$ as _,q};
