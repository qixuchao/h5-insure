System.register(["./vendor-legacy-9974b414.js","./index-legacy-dd101abb.js"],(function(e){"use strict";var t,a,n,o,r,u,c,d,i,l,s,p,v,f,m,g,C;return{setters:[function(e){t=e.h,a=e.P,n=e.aa,o=e.G,r=e.j,u=e.r,c=e.k,d=e.m,i=e.n,l=e.A,s=e.s,p=e.E},function(e){v=e.F,f=e.g,m=e.N,g=e.n,C=e.b}],execute:function(){const y={class:"notice-content"},b=p("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},p=a(),h=n(),{orderNo:x="2022021815432987130620",productCode:I="CQ75CQ76",templateId:N=1,tenantId:P=9991000007,insurerCode:j="kunlunhealth"}=p.query,k=o({});o(!0),o(!0);const A=o({}),q=o(1),S=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:N,buttonCode:m.customerNotice},g(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&h.push({path:C[t.pageAction.data.nextPageCode],query:p.query})}))};return r((()=>{f({orderNo:x,tenantId:P}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),v({insureCode:j,objectType:5,tenantId:P,orderNo:x}).then((({code:e,data:t})=>{"10000"===e&&(A.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?q.value=1:q.value=4:q.value=t.materialSource)}))})),(e,a)=>{const n=u("VanButton"),o=u("ProFilePreview"),r=u("ProPageWrap");return c(),d(r,{class:"page-customer-notice-wrapper"},{default:i((()=>[l("div",y,[s(o,{type:t[q.value],content:A.value.materialContent},{"footer-btn":i((()=>[l("div",{class:"footer-button",onClick:S},[s(n,{block:"",type:"primary"},{default:i((()=>[b])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
