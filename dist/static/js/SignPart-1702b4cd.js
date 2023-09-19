import{d as e,a4 as a,a5 as l,i as s,j as i,an as n,z as t,o,c as r,b as d,w as v,a as u,e as c,u as f,p as g,a6 as m,q as p,a8 as y,l as h,m as w,aj as S,ae as _,aN as k}from"./index-c05ad1f7.js";import{S as x}from"./index-d0056a0f.js";const E={class:"com-sign-part"},V={class:"people"},C={class:"name"},b={key:0,class:"verify-item"},Y=u("div",{class:"label"},"证件号码",-1),I={class:"no"},P={class:"sign-status"},j=["src"],L={key:1,class:"sign-desc"},B={class:"sign-body"},T={class:"date"},D={class:"file"},N=e({name:"signPart"}),R=e({...N,props:{signString:{default:()=>[]},personalInfo:{default:()=>({})},fileList:{},title:{default:""},showSign:{type:Boolean,default:!1},showVerify:{type:Boolean,default:!1},showShareSign:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["handleVerify","handleSign"],setup(e,{expose:N,emit:R}){const $=e,M=a((()=>l((()=>import("./index-35d2f44d.js")),["static/js/index-35d2f44d.js","static/css/index-bf024e9b.css","static/js/index-c05ad1f7.js","static/css/index-22eef925.css"]))),O=a((()=>l((()=>import("./index-54a1e71f.js")),["static/js/index-54a1e71f.js","static/css/index-fa4edf2a.css","static/js/index-c05ad1f7.js","static/css/index-22eef925.css","static/js/theme-94cf7d00.js","static/js/index-21671ced.js","static/css/index-bbfdd7ec.css","static/js/utils-28f79c50.js","static/js/infoCollection-fade1e4e.js","static/js/trial-0105f9a8.js"]))),A=s({}),F=s([]);s([]),s({}),s(!0);const U=s(!1),q=s(0),z=e=>`${e}`===S.CERT,G=i((()=>n().format("YYYY-MM-DD"))),H=()=>{var e,a;R("handleVerify",null==(e=A.value)?void 0:e.name,null==(a=A.value)?void 0:a.certNo)},J=()=>{U.value=!1},K=s(),Q=()=>{K.value&&(K.value.rewrite(),K.value.openSign())},W=()=>{$.disabled||K.value&&K.value.openSign()},X=e=>{R("handleSign",e)};return N({validateSign:()=>new Promise(((e,a)=>{var l;(null==(l=F.value)?void 0:l.length)?e(!0):a(new Error(`请${$.title}完成签名后，去支付`))})),validateVerify:()=>new Promise(((e,a)=>{var l;(null==(l=$.personalInfo)?void 0:l.isCert)!==m.YES?a(new Error(`请${$.title}完成认证后，去支付`)):e(!0)}))}),t((()=>$.signString),(()=>{F.value=$.signString}),{immediate:!0,deep:!0}),t((()=>$.personalInfo),(()=>{A.value=$.personalInfo}),{deep:!0,immediate:!0}),(e,a)=>{const l=_,s=k;return o(),r("div",E,[d(s,{title:e.title,class:"card"},{extra:v((()=>{var a,l,s,i;return[u("div",V,[u("div",C,c(null==(a=f(A))?void 0:a.name),1),e.showVerify&&z(null==(l=f(A))?void 0:l.certType)?(o(),r("div",{key:0,class:g(["status",{verified:(null==(s=f(A))?void 0:s.isCert)===f(m).YES}])},c((null==(i=f(A))?void 0:i.isCert)===f(m).YES?"已认证":"待认证"),3)):p("",!0)])]})),default:v((()=>{var a,s,i,n;return[e.showVerify&&(null==(a=f(A))?void 0:a.certNo)?(o(),r("div",b,[Y,u("div",I,c(null==(s=f(A))?void 0:s.certNo),1),(null==(i=f(A))?void 0:i.isCert)!==f(m).YES&&z(null==(n=f(A))?void 0:n.certType)?(o(),r("div",{key:0,class:"action",onClick:H},[y(" 去认证 "),d(l,{name:"right_arrow",class:"icon"})])):p("",!0)])):p("",!0)]})),_:1},8,["title"]),e.showSign?(o(),h(s,{key:0,title:`${e.title}签名`,"show-icon":!1,class:"sign-card","show-line":!1},{extra:v((()=>[u("div",P,[e.disabled?p("",!0):(o(),r("div",{key:0,class:"resign",onClick:Q},"重签"))])])),default:v((()=>{var l;return[d(x,{ref_key:"signRef",ref:K,modelValue:f(F),"onUpdate:modelValue":a[0]||(a[0]=e=>w(F)?F.value=e:null),class:"sign",onSubmitSign:X},{signImg:v((({data:e})=>[u("div",{class:"sign-board",onClick:W},[e?(o(),r("img",{key:0,src:e,class:"sign-img",alt:""},null,8,j)):(o(),r("span",L,"请签名"))])])),_:1},8,["modelValue"]),u("div",B,[u("div",T,"签名日期： "+c(f(G)),1),u("div",D,[(null==(l=e.fileList)?void 0:l.length)?(o(),h(f(M),{key:0,"attachment-list":e.fileList,"pre-text":"签名将被用于以下文件：",onPreviewFile:a[1]||(a[1]=e=>(e=>{q.value=e,U.value=!0})(e))},null,8,["attachment-list"])):p("",!0)])])]})),_:1},8,["title"])):p("",!0),f(U)?(o(),h(f(O),{key:1,show:f(U),"onUpdate:show":a[2]||(a[2]=e=>w(U)?U.value=e:null),"content-list":e.fileList,"is-only-view":"","active-index":f(q),text:"关闭",onOnCloseFilePreviewByMask:J},null,8,["show","content-list","active-index"])):p("",!0)])}}});export{R as _};
