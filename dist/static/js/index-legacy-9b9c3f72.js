System.register(["./vendor-legacy-76daf859.js","./index-legacy-473e5c5c.js"],(function(e){"use strict";var t,a,n,o,r,c,u,d,i,l,s,p,f,v,g,m;return{setters:[function(e){t=e.h,a=e.P,n=e.aa,o=e.G,r=e.o,c=e.r,u=e.k,d=e.m,i=e.n,l=e.A,s=e.s,p=e.E},function(e){f=e.D,v=e.g,g=e.n,m=e.b}],execute:function(){const y={class:"notice-content"},C=p("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},p=a(),h=n(),{orderNo:x="2022021815432987130620",productCode:I="CQ75CQ76",templateId:P=1,tenantId:b=9991000007,insurerCode:j="kunlunhealth"}=p.query,k=o({});o(!0),o(!0);const N=o({}),A=o(1),q=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:P},g(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&h.push({path:m[t.pageAction.data.nextPageCode],query:p.query})}))};return r((()=>{v({orderNo:x,tenantId:b}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),f({insureCode:j,objectType:5,tenantId:b,orderNo:x}).then((({code:e,data:t})=>{"10000"===e&&(N.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?A.value=1:A.value=4:A.value=t.materialSource)}))})),(e,a)=>{const n=c("VanButton"),o=c("ProFilePreview"),r=c("ProPageWrap");return u(),d(r,{class:"page-customer-notice-wrapper"},{default:i((()=>[l("div",y,[s(o,{type:t[A.value],content:N.value.materialContent},{"footer-btn":i((()=>[l("div",{class:"footer-button",onClick:q},[s(n,{block:"",type:"primary"},{default:i((()=>[C])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
