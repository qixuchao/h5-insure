var O=Object.defineProperty,b=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var m=(o,e,t)=>e in o?O(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))F.call(e,t)&&m(o,t,e[t]);if(_)for(var t of _(e))V.call(e,t)&&m(o,t,e[t]);return o},v=(o,e)=>b(o,q(e));import{g as j,O as w,ak as A,E as r,o as D,r as u,j as M,k as R,m as i,z as C,p as P,C as S}from"./vendor-df2d8bed.js";import{$ as U,r as Q,n as W,P as z}from"./index-87784872.js";const G={class:"notice-content"},L=S("\u6211\u5DF2\u9605\u8BFB"),K=j({setup(o){const e={1:"pdf",4:"picture",2:"richText",3:"link"},t="customerNotice",p=w(),h=A(),{orderNo:l="2022021815432987130620",productCode:Y="CQ75CQ76",templateId:x=1,tenantId:f=9991000007,insureCode:y="kunlunhealth"}=p.query,s=r({});r(!0),r(!0);const d=r({}),c=r(1),N=()=>{U({insureCode:y,objectType:5,tenantId:f,orderNo:l}).then(({code:n,data:a})=>{n==="10000"&&(d.value=a,a.materialSource===1?a.materialContent.indexOf(".pdf")!==-1?c.value=1:c.value=4:c.value=a.materialSource)})},k=()=>{Q({orderNo:l,tenantId:f}).then(({code:n,data:a})=>{n==="10000"&&Object.assign(s.value,a)})},B=()=>{s.value.extInfo=v(g({},s.value.extInfo),{isReadCustomerNotice:1,pageCode:t,templateId:x}),W(s.value).then(({code:n,data:a})=>{n==="10000"&&a.pageAction.pageAction==="jumpToPage"&&h.push({path:z[a.pageAction.data.nextPageCode],query:p.query})})};return D(()=>{k(),N()}),(n,a)=>{const E=u("VanButton"),I=u("ProFilePreview"),T=u("ProPageWrap");return M(),R(T,{class:"page-customer-notice-wrapper"},{default:i(()=>[C("div",G,[P(I,{type:e[c.value],content:d.value.materialContent},{"footer-btn":i(()=>[C("div",{class:"footer-button",onClick:B},[P(E,{block:"",type:"primary"},{default:i(()=>[L]),_:1})])]),_:1},8,["type","content"])])]),_:1})}}});export{K as default};
