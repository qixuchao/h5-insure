<<<<<<< HEAD:dist/static/js/index-legacy-90faa2c7.js
System.register(["./vendor-legacy-da8f33fe.js","./index-legacy-59ab0a18.js"],(function(e){"use strict";var t,a,o,n,r,u,c,d,i,l,s,p,f,v,g,m,C;return{setters:[function(e){t=e.g,a=e.O,o=e.a9,n=e.E,r=e.h,u=e.r,c=e.j,d=e.k,i=e.m,l=e.z,s=e.p,p=e.C},function(e){f=e.E,v=e.g,g=e.N,m=e.n,C=e.b}],execute:function(){const y={class:"notice-content"},h=p("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},p=a(),b=o(),{orderNo:x="2022021815432987130620",productCode:I="CQ75CQ76",templateId:N=1,tenantId:j=9991000007,insurerCode:P="kunlunhealth"}=p.query,k=n({});n(!0),n(!0);const q=n({}),A=n(1),O=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:N,buttonCode:g.customerNotice},m(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&b.push({path:C[t.pageAction.data.nextPageCode],query:p.query})}))};return r((()=>{v({orderNo:x,tenantId:j}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),f({insureCode:P,objectType:5,tenantId:j,orderNo:x}).then((({code:e,data:t})=>{"10000"===e&&(q.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?A.value=1:A.value=4:A.value=t.materialSource)}))})),(e,a)=>{const o=u("VanButton"),n=u("ProFilePreview"),r=u("ProPageWrap");return c(),d(r,{class:"page-customer-notice-wrapper"},{default:i((()=>[l("div",y,[s(n,{type:t[A.value],content:q.value.materialContent},{"footer-btn":i((()=>[l("div",{class:"footer-button",onClick:O},[s(o,{block:"",type:"primary"},{default:i((()=>[h])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
=======
System.register(["./vendor-legacy-acf899d3.js","./index-legacy-5ac70d95.js"],(function(e){"use strict";var t,a,o,n,r,c,u,d,i,l,s,p,f,v,g,m,C;return{setters:[function(e){t=e.g,a=e.O,o=e.a9,n=e.E,r=e.h,c=e.r,u=e.j,d=e.k,i=e.m,l=e.z,s=e.p,p=e.C},function(e){f=e.E,v=e.g,g=e.N,m=e.n,C=e.b}],execute:function(){const y={class:"notice-content"},h=p("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},p=a(),b=o(),{orderNo:x="2022021815432987130620",productCode:I="CQ75CQ76",templateId:N=1,tenantId:j=9991000007,insurerCode:P="kunlunhealth"}=p.query,k=n({});n(!0),n(!0);const q=n({}),A=n(1),O=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:N,buttonCode:g.customerNotice},m(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&b.push({path:C[t.pageAction.data.nextPageCode],query:p.query})}))};return r((()=>{v({orderNo:x,tenantId:j}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),f({insureCode:P,objectType:5,tenantId:j,orderNo:x}).then((({code:e,data:t})=>{"10000"===e&&(q.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?A.value=1:A.value=4:A.value=t.materialSource)}))})),(e,a)=>{const o=c("VanButton"),n=c("ProFilePreview"),r=c("ProPageWrap");return u(),d(r,{class:"page-customer-notice-wrapper"},{default:i((()=>[l("div",y,[s(n,{type:t[A.value],content:q.value.materialContent},{"footer-btn":i((()=>[l("div",{class:"footer-button",onClick:O},[s(o,{block:"",type:"primary"},{default:i((()=>[h])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
>>>>>>> c7a2c7d86ba161c8af0e5ffde82a2f15731514d4:dist/static/js/index-legacy-82205990.js
