var $=Object.defineProperty,w=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var P=(s,e,t)=>e in s?$(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,c=(s,e)=>{for(var t in e||(e={}))H.call(e,t)&&P(s,t,e[t]);if(N)for(var t of N(e))J.call(e,t)&&P(s,t,e[t]);return s},h=(s,e)=>w(s,z(e));import{g as W,ak as Q,O as K,E as S,d as X,M as Z,h as ee,r as d,j as p,k as y,m as _,p as f,n as L,G as M,A as D,F as b,z as E,J as te,C as A,T,L as ae}from"./vendor-96e68f0e.js";import{_ as se,l as R,r as oe,V as ne,T as ue,n as ie,P as re}from"./index-87df9c0d.js";import{P as le}from"./index-0d86e329.js";import{l as ce}from"./inform-b29194b7.js";import{s as de}from"./useStorage-2d126acd.js";import{s as pe}from"./verify-df2a1cda.js";const _e={class:"date"},fe={class:"inform-file"},Ee={class:"tips"},me=A(" \u60A8\u7684\u7B7E\u540D\u5C06\u88AB\u7528\u4E8E"),Be=A("\u6587\u4EF6 "),ge={class:"footer-button"},Ce=A("\u4E0B\u4E00\u6B65"),ve=W({setup(s){const e=Q(),t=K(),{productCode:he="MMBBSF",agentCode:q="65434444",tenantId:g="9991000007",agencyCode:ye="3311222",insurerCode:k="zhongan",productCategory:I=1,templateId:O=1,orderNo:x="2022080217103534947"}=t.query,r=S(null),C=S(!1),U=X().format("YYYY-MM-DD"),V=()=>{var a;(a=r.value)==null||a.clear()},o=Z({noticeType:"",materialSource:"",noticeList:[],pageData:{}}),j=()=>{oe({orderNo:x,saleUserId:q,tenantId:g}).then(({code:a,data:n})=>{a==="10000"&&(Object.assign(o.pageData,n),n.tenantOrderAttachmentList.forEach(i=>{i.category===ne.ELECTRIC_SIGN&&i.objectType===ue.AGENT&&r.value.setDataURL(i.fileBase64)}))})};ee(()=>{j(),ce({insurerCode:k,orderNo:x,productCategory:I,tenantId:g,noticeType:9,objectType:3}).then(({code:a,data:n})=>{a==="10000"&&(o.noticeList=n)})});const G=a=>{de.set("questionData",a),e.push({path:"/healthNotice",query:c({questionnaireType:a.questionnaireType},t.query)})},Y=()=>{var i,m;if(!(o.noticeList&&o.noticeList.every(l=>l.isDone===1))){T("\u8BF7\u5B8C\u6210\u6240\u6709\u544A\u77E5\u8FDB\u884C\u4E0B\u4E00\u6B65");return}if((i=r.value)==null?void 0:i.isEmpty()){T("\u8BF7\u5B8C\u6210\u4EE3\u7406\u4EBA\u7B7E\u5B57\u8FDB\u884C\u4E0B\u4E00\u6B65");return}if(!C.value){T("\u8BF7\u52FE\u9009\u540C\u610F\u7B7E\u540D");return}const n=(m=r.value)==null?void 0:m.save();pe("AGENT",n,o.pageData.id,g).then(l=>{l&&ie(h(c({},o.pageData),{extInfo:h(c({},o.pageData.extInfo),{templateId:O,pageCode:"salesNotice"}),venderCode:k})).then(({code:v,data:B})=>{v==="10000"&&B.pageAction.pageAction==="jumpToPage"&&e.push({path:re[B.pageAction.data.nextPageCode],query:c({},t.query)})})})};return(a,n)=>{const i=d("van-cell"),m=d("ProSign"),l=d("van-checkbox"),v=d("van-button"),B=d("ProPageWrap");return p(),y(B,{class:"page-salesman-inform"},{default:_(()=>[f(R,{title:"\u8425\u9500\u5458\u544A\u77E5\u4E66"},{default:_(()=>[(p(!0),L(b,null,M(D(o).noticeList,u=>(p(),y(i,{key:u.id,class:ae({"is-active":u.isDone===2}),title:`\u300A${u.title}\u300B`,"is-link":"",value:`${u.isDone===1?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:F=>G(u)},null,8,["class","title","value","onClick"]))),128))]),_:1}),f(R,{title:"\u8425\u9500\u5458\u7B7E\u5B57","show-divider":!1,"show-line":!1},{extra:_(()=>[E("div",{class:"resign",onClick:V},"\u91CD\u7B7E")]),default:_(()=>[f(m,{ref_key:"agentSignRef",ref:r,selector:"sign2"},null,512),E("div",_e,"\u7B7E\u540D\u65E5\u671F\uFF1A "+te(D(U)),1)]),_:1}),E("div",fe,[f(l,{modelValue:C.value,"onUpdate:modelValue":n[0]||(n[0]=u=>C.value=u),shape:"square"},null,8,["modelValue"]),E("p",Ee,[me,(p(!0),L(b,null,M(D(o).noticeList,(u,F)=>(p(),y(le,{key:F,class:"file",title:`\u300A${u.title}\u300B`},null,8,["title"]))),128)),Be])]),E("div",ge,[f(v,{type:"primary",block:"",onClick:Y},{default:_(()=>[Ce]),_:1})])]),_:1})}}});var Pe=se(ve,[["__scopeId","data-v-aa0b7408"]]);export{Pe as default};
