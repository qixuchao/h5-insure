System.register(["./vendor-legacy-67cad4db.js","./index-legacy-5b79ad4a.js"],(function(e){"use strict";var t,a,n,o,r,u,c,d,i,l,s,p,v,f,m,g,C;return{setters:[function(e){t=e.h,a=e.N,n=e.a8,o=e.r,r=e.j,u=e.k,c=e.l,d=e.m,i=e.n,l=e.z,s=e.Q,p=e.C},function(e){v=e.F,f=e.g,m=e.N,g=e.n,C=e.b}],execute:function(){const y={class:"notice-content"},b=p("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},p=a(),h=n(),{orderNo:N="2022021815432987130620",productCode:x="CQ75CQ76",templateId:I=1,tenantId:j=9991000007,insurerCode:P="kunlunhealth"}=p.query,k=o({});o(!0),o(!0);const q=o({}),A=o(1),Q=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:I,buttonCode:m.customerNotice},g(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&h.push({path:C[t.pageAction.data.nextPageCode],query:p.query})}))};return r((()=>{f({orderNo:N,tenantId:j}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),v({insureCode:P,objectType:5,tenantId:j,orderNo:N}).then((({code:e,data:t})=>{"10000"===e&&(q.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?A.value=1:A.value=4:A.value=t.materialSource)}))})),(e,a)=>{const n=u("VanButton"),o=u("ProFilePreview"),r=u("ProPageWrap");return c(),d(r,{class:"page-customer-notice-wrapper"},{default:i((()=>[l("div",y,[s(o,{type:t[A.value],content:q.value.materialContent},{"footer-btn":i((()=>[l("div",{class:"footer-button",onClick:Q},[s(n,{block:"",type:"primary"},{default:i((()=>[b])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
