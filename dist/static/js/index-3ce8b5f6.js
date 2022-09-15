var J=Object.defineProperty,Q=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var q=(u,t,o)=>t in u?J(u,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[t]=o,_=(u,t)=>{for(var o in t||(t={}))W.call(t,o)&&q(u,o,t[o]);if(L)for(var o of L(t))X.call(t,o)&&q(u,o,t[o]);return u},k=(u,t)=>Q(u,H(t));import{g as K,a9 as Z,O as ee,E as m,d as te,M as oe,h as se,r as E,j as f,k as N,m as v,p as g,n as I,G as b,L as ne,A as x,F as O,z as C,J as ue,C as P,T as F}from"./vendor-894ab2f1.js";import{_ as ie,a as R,B as ae,g as le,A as ce,r as re,n as pe,c as _e}from"./index-51274998.js";import{l as Ee,g as fe}from"./inform-154bc9d8.js";import{s as ve}from"./useStorage-e79fd3b5.js";import{s as ge}from"./verify-c8804630.js";import{d as Ce,A as de,e as Te}from"./notice-8f6df5db.js";const Be={class:"date"},me={class:"inform-file"},ye={class:"tips"},he=P(" \u60A8\u7684\u7B7E\u540D\u5C06\u88AB\u7528\u4E8E"),Ae=P("\u6587\u4EF6 "),De={class:"footer-button"},ke=P("\u4E0B\u4E00\u6B65"),Ne=K({setup(u){const t=Z(),o=ee(),{productCode:xe="MMBBSF",agentCode:U="65434444",tenantId:d="9991000007",agencyCode:Fe="3311222",insurerCode:y="zhongan",productCategory:S=1,templateId:Y=1,orderNo:h="2022080217103534947"}=o.query,p=m(null),A=m(!1),G=te().format("YYYY-MM-DD"),T=m(""),D=m(),j=()=>{var s;(s=p.value)==null||s.clear()},i=oe({noticeType:"",materialSource:"",noticeList:[],pageData:{}}),V=()=>{le({orderNo:h,saleUserId:U,tenantId:d}).then(({code:s,data:n})=>{s==="10000"&&(Object.assign(i.pageData,n),n.tenantOrderAttachmentList.forEach(a=>{a.category===ce.ELECTRIC_SIGN&&a.objectType===re.AGENT&&p.value.setDataURL(a.fileBase64)}))})},w=s=>{console.log(s);const{id:n,objectType:a}=s,r={1:"pdf",2:"richText",3:"link"};fe({insurerCode:y,id:n,objectType:a,productCategory:S,orderNo:h,tenantId:d}).then(({code:c,data:e})=>{c==="10000"&&(console.log(e),(e==null?void 0:e[0].questionType)===Ce?(T.value="question",D.value=e):((e==null?void 0:e[0].textType)===1&&(e==null?void 0:e[0].content.includes("png"))?T.value="picture":T.value=r[e==null?void 0:e[0].textType],D.value=e==null?void 0:e[0].content))})};se(()=>{V(),Ee({insurerCode:y,orderNo:h,productCategory:S,tenantId:d,noticeType:de,objectType:Te}).then(({code:s,data:n})=>{s==="10000"&&(i.noticeList=[...i.noticeList,...n])})});const $=s=>{ve.set("questionData",s),t.push({path:"/healthNotice",query:_({questionnaireType:s.questionnaireType},o.query)})},z=()=>{var a,r;if(!(i.noticeList&&i.noticeList.every(c=>c.isDone===1))){F("\u8BF7\u5B8C\u6210\u6240\u6709\u544A\u77E5\u8FDB\u884C\u4E0B\u4E00\u6B65");return}if((a=p.value)==null?void 0:a.isEmpty()){F("\u8BF7\u5B8C\u6210\u4EE3\u7406\u4EBA\u7B7E\u5B57\u8FDB\u884C\u4E0B\u4E00\u6B65");return}if(!A.value){F("\u8BF7\u52FE\u9009\u540C\u610F\u7B7E\u540D");return}const n=(r=p.value)==null?void 0:r.save();ge("AGENT",n,i.pageData.id,d).then(c=>{c&&pe(k(_({},i.pageData),{extInfo:k(_({},i.pageData.extInfo),{templateId:Y,pageCode:"salesNotice"}),venderCode:y})).then(({code:e,data:B})=>{e==="10000"&&B.pageAction.pageAction==="jumpToPage"&&t.push({path:_e[B.pageAction.data.nextPageCode],query:_({},o.query)})})})};return(s,n)=>{const a=E("van-cell"),r=E("ProSign"),c=E("van-checkbox"),e=E("van-button"),B=E("ProPageWrap");return f(),N(B,{class:"page-salesman-inform"},{default:v(()=>[g(R,{title:"\u8425\u9500\u5458\u544A\u77E5\u4E66"},{default:v(()=>[(f(!0),I(O,null,b(x(i).noticeList,l=>(f(),N(a,{key:l.id,class:ne({"is-active":l.isDone===2}),title:`\u300A${l.title}\u300B`,"is-link":"",value:`${l.isDone===1?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:M=>$(l)},null,8,["class","title","value","onClick"]))),128))]),_:1}),g(R,{title:"\u8425\u9500\u5458\u7B7E\u5B57","show-divider":!1,"show-line":!1},{extra:v(()=>[C("div",{class:"resign",onClick:j},"\u91CD\u7B7E")]),default:v(()=>[g(r,{ref_key:"agentSignRef",ref:p,selector:"sign2"},null,512),C("div",Be,"\u7B7E\u540D\u65E5\u671F\uFF1A "+ue(x(G)),1)]),_:1}),C("div",me,[g(c,{modelValue:A.value,"onUpdate:modelValue":n[0]||(n[0]=l=>A.value=l),shape:"square"},null,8,["modelValue"]),C("p",ye,[he,(f(!0),I(O,null,b(x(i).noticeList,(l,M)=>(f(),N(ae,{key:M,class:"file",title:`\u300A${l.title}\u300B`,content:D.value,type:T.value,onClick:Pe=>w(l)},null,8,["title","content","type","onClick"]))),128)),Ae])]),C("div",De,[g(e,{type:"primary",block:"",onClick:z},{default:v(()=>[ke]),_:1})])]),_:1})}}});var Re=ie(Ne,[["__scopeId","data-v-0166f588"]]);export{Re as default};
