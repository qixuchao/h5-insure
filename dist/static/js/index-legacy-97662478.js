System.register(["./vendor-legacy-8d7d6b09.js","./index-legacy-db458889.js"],(function(e){"use strict";var t,a,o,n,r,c,u,i,d,s,p,l,g,m,v,f;return{setters:[function(e){t=e.g,a=e.O,o=e.ak,n=e.E,r=e.o,c=e.r,u=e.j,i=e.k,d=e.m,s=e.z,p=e.p,l=e.C},function(e){g=e.b,m=e.r,v=e.n,f=e.P}],execute:function(){const C={class:"notice-content"},y=l("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},l=a(),b=o(),{orderNo:x="2022021815432987130620",productCode:P="CQ75CQ76",templateId:h=1,tenantId:j=9991000007}=l.query,I=n({});n(!0),n(!0);const k=n({}),N=n(1),q=()=>{((e={})=>g.get("/api/app/insure/insurance/getCustomerNotices",{params:e}))({productCode:P,objectType:3}).then((({code:e,data:t})=>{"10000"===e&&(k.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?N.value=1:N.value=4:N.value=t.materialSource)}))},A=()=>{I.value.extInfo={...I.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:h},v(I.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&b.push({path:f[t.pageAction.data.nextPageCode],query:l.query})}))};return r((()=>{m({orderNo:x,tenantId:j}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(I.value,t)})),q()})),(e,a)=>{const o=c("VanButton"),n=c("ProFilePreview"),r=c("ProPageWrap");return u(),i(r,{class:"page-customer-notice-wrapper"},{default:d((()=>[s("div",C,[p(n,{type:t[N.value],content:k.value.materialContent},{"footer-btn":d((()=>[s("div",{class:"footer-button",onClick:A},[p(o,{block:"",type:"primary"},{default:d((()=>[y])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
