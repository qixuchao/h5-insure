var I=Object.defineProperty,O=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var m=(o,e,t)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))q.call(e,t)&&m(o,t,e[t]);if(f)for(var t of f(e))A.call(e,t)&&m(o,t,e[t]);return o},C=(o,e)=>O(o,F(e));import{h as D,P as M,aa as S,G as r,j as U,r as u,k as V,m as j,n as i,A as v,s as N,E as w}from"./vendor-d6b13173.js";import{F as R,g as G,N as Q,n as W,b as L}from"./index-1d5e84df.js";const X={class:"notice-content"},Y=w("\u6211\u5DF2\u9605\u8BFB"),Z=D({setup(o){const e={1:"pdf",4:"picture",2:"richText",3:"link"},t="customerNotice",l=M(),P=S(),{orderNo:p="2022021815432987130620",productCode:z="CQ75CQ76",templateId:h=1,tenantId:d=9991000007,insurerCode:x="kunlunhealth"}=l.query,s=r({});r(!0),r(!0);const _=r({}),c=r(1),y=()=>{R({insureCode:x,objectType:5,tenantId:d,orderNo:p}).then(({code:n,data:a})=>{n==="10000"&&(_.value=a,a.materialSource===1?a.materialContent.indexOf(".pdf")!==-1?c.value=1:c.value=4:c.value=a.materialSource)})},E=()=>{G({orderNo:p,tenantId:d}).then(({code:n,data:a})=>{n==="10000"&&Object.assign(s.value,a)})},T=()=>{s.value.extInfo=C(g({},s.value.extInfo),{isReadCustomerNotice:1,pageCode:t,templateId:h,buttonCode:Q.customerNotice}),W(s.value).then(({code:n,data:a})=>{n==="10000"&&a.pageAction.pageAction==="jumpToPage"&&P.push({path:L[a.pageAction.data.nextPageCode],query:l.query})})};return U(()=>{E(),y()}),(n,a)=>{const B=u("VanButton"),b=u("ProFilePreview"),k=u("ProPageWrap");return V(),j(k,{class:"page-customer-notice-wrapper"},{default:i(()=>[v("div",X,[N(b,{type:e[c.value],content:_.value.materialContent},{"footer-btn":i(()=>[v("div",{class:"footer-button",onClick:T},[N(B,{block:"",type:"primary"},{default:i(()=>[Y]),_:1})])]),_:1},8,["type","content"])])]),_:1})}}});export{Z as default};
