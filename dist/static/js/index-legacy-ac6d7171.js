System.register(["./vendor-legacy-da08ff20.js","./index-legacy-bb472ef1.js"],(function(e){"use strict";var t,n,o,a,r,u,c,d,i,l,s,p,f,v,m,g,C;return{setters:[function(e){t=e.h,n=e.N,o=e.a8,a=e.r,r=e.j,u=e.k,c=e.l,d=e.m,i=e.n,l=e.z,s=e.Q,p=e.C},function(e){f=e.F,v=e.g,m=e.N,g=e.n,C=e.b}],execute:function(){const y={class:"notice-content"},b=p("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},p=n(),h=o(),{orderNo:N="2022021815432987130620",productCode:x="CQ75CQ76",templateId:I=1,tenantId:j=9991000007,insurerCode:P="kunlunhealth"}=p.query,k=a({});a(!0),a(!0);const q=a({}),A=a(1),Q=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:I,buttonCode:m.customerNotice},g(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&h.push({path:C[t.pageAction.data.nextPageCode],query:p.query})}))};return r((()=>{v({orderNo:N,tenantId:j}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),f({insureCode:P,objectType:5,tenantId:j,orderNo:N}).then((({code:e,data:t})=>{"10000"===e&&(q.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?A.value=1:A.value=4:A.value=t.materialSource)}))})),(e,n)=>{const o=u("VanButton"),a=u("ProFilePreview"),r=u("ProPageWrap");return c(),d(r,{class:"page-customer-notice-wrapper"},{default:i((()=>[l("div",y,[s(a,{type:t[A.value],content:q.value.materialContent},{"footer-btn":i((()=>[l("div",{class:"footer-button",onClick:Q},[s(o,{block:"",type:"primary"},{default:i((()=>[b])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
