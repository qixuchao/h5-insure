import{b,_ as A,h as p}from"./index-21ff2934.js";import{g as k,C as d,L as x,M as C,r as s,h as y,j as I,k as n,n as t,z as f,y as o,a1 as S,a2 as D,B as l}from"./vendor-4dbfa310.js";const N="/api/app/insure/insurance",T=e=>b.post(`${N}/getMarketerNotices`,e),P={HOLDER:"\u6295\u4FDD\u4EBA",INSURED:"\u88AB\u4FDD\u4EBA",AGENT:"\u4EE3\u7406\u4EBA"};const V=e=>(S("data-v-eca6bc6e"),e=e(),D(),e),R={class:"footer-btn"},j={class:"inform-file"},w=V(()=>o("p",{class:"tips"},[l("\u60A8\u7684\u7B7E\u540D\u5C06\u88AB\u7528\u4E8E"),o("span",null,"\u300A\u8425\u9500\u5458\u544A\u77E5\u4E66\u300B"),l("\u6587\u4EF6")],-1)),F={class:"footer-button"},M=l("\u4E0B\u4E00\u6B65"),O=k({setup(e){const i=d(null),_=d(!1),E=()=>{var a;(a=i.value)==null||a.clear()},r=x({noticeType:"",materialSource:""});return C(()=>{T({insureCode:"123",noticeType:"1",objectId:"1",objectType:"2",orderNo:"2022011815151382958351",tenantId:9991000007}).then(a=>{const{code:u,data:c}=a;u==="10000"&&(r.noticeType=c.noticeObject,r.materialSource=c.materialSource)})}),(a,u)=>{const c=s("van-cell"),m=s("ProSign"),v=s("van-checkbox"),B=s("van-button"),h=s("ZaPageWrap");return y(),I(h,{class:"page-salesman-inform"},{default:n(()=>[t(p,{title:"\u544A\u77E5\u4E66"},{default:n(()=>[t(c,{title:`\u300A${f(P)[f(r).noticeType]}\u544A\u77E5\u300B`,"is-link":"",value:"\u53BB\u5B8C\u6210"},null,8,["title"])]),_:1}),t(p,{title:"\u8425\u9500\u5458\u7B7E\u5B57","show-divider":!1,"show-line":!1},{extra:n(()=>[o("div",{class:"resign",onClick:E},"\u91CD\u7B7E")]),default:n(()=>[t(m,{ref_key:"signRef2",ref:i,selector:"sign2"},null,512)]),_:1}),o("footer",R,[o("div",j,[t(v,{modelValue:_.value,"onUpdate:modelValue":u[0]||(u[0]=g=>_.value=g),shape:"square"},null,8,["modelValue"]),w]),o("div",F,[t(B,{type:"primary",block:""},{default:n(()=>[M]),_:1})])])]),_:1})}}});var W=A(O,[["__scopeId","data-v-eca6bc6e"]]);export{W as default};
