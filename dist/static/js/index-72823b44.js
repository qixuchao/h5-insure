var k=Object.defineProperty,j=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))O.call(e,o)&&f(t,o,e[o]);if(m)for(var o of m(e))V.call(e,o)&&f(t,o,e[o]);return t},d=(t,e)=>j(t,F(e));import{g as q,Q as w,aj as A,E as r,o as D,r as u,j as R,k as S,m as i,z as g,p as v,C as M}from"./vendor-83047d1f.js";import{a as Q,n as U}from"./index-4e6f08ff.js";import{b as W,P as z}from"./index-5e859998.js";const G=(t={})=>W.get("/api/app/insure/insurance/getCustomerNotices",{params:t}),L={class:"notice-content"},Y=M("\u6211\u5DF2\u9605\u8BFB"),Z=q({setup(t){const e={1:"pdf",4:"picture",2:"richText",3:"link"},o="customerNotice",p=w(),C=A(),{orderNo:P="2022021815432987130620",productCode:x="CQ75CQ76",templateId:N=1,tenantId:h=9991000007}=p.query,s=r({});r(!0),r(!0);const l=r({}),c=r(1),y=()=>{G({productCode:x,objectType:3}).then(({code:n,data:a})=>{n==="10000"&&(l.value=a,a.materialSource===1?a.materialContent.indexOf(".pdf")!==-1?c.value=1:c.value=4:c.value=a.materialSource)})},B=()=>{Q({orderNo:P,tenantId:h}).then(({code:n,data:a})=>{n==="10000"&&Object.assign(s.value,a)})},E=()=>{s.value.extInfo=d(_({},s.value.extInfo),{isReadCustomerNotice:1,pageCode:o,templateId:N}),U(s.value).then(({code:n,data:a})=>{n==="10000"&&a.pageAction.pageAction==="jumpToPage"&&C.push({path:z[a.pageAction.data.nextPageCode],query:p.query})})};return D(()=>{B(),y()}),(n,a)=>{const I=u("VanButton"),T=u("ProFilePreview"),b=u("ProPageWrap");return R(),S(b,{class:"page-customer-notice-wrapper"},{default:i(()=>[g("div",L,[v(T,{type:e[c.value],content:l.value.materialContent},{"footer-btn":i(()=>[g("div",{class:"footer-button",onClick:E},[v(I,{block:"",type:"primary"},{default:i(()=>[Y]),_:1})])]),_:1},8,["type","content"])])]),_:1})}}});export{Z as default};
