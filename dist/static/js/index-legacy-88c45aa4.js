System.register(["./vendor-legacy-1e86c4b9.js","./index-legacy-8ec558fb.js"],(function(e){"use strict";var t,a,n,o,r,c,u,d,i,l,s,p,f,v,g,m;return{setters:[function(e){t=e.g,a=e.O,n=e.a9,o=e.E,r=e.o,c=e.r,u=e.j,d=e.k,i=e.m,l=e.z,s=e.p,p=e.C},function(e){f=e.a1,v=e.r,g=e.n,m=e.P}],execute:function(){const C={class:"notice-content"},y=p("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},p=a(),h=n(),{orderNo:b="2022021815432987130620",productCode:x="CQ75CQ76",templateId:I=1,tenantId:P=9991000007,insureCode:j="kunlunhealth"}=p.query,k=o({});o(!0),o(!0);const N=o({}),q=o(1),A=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:I},g(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&h.push({path:m[t.pageAction.data.nextPageCode],query:p.query})}))};return r((()=>{v({orderNo:b,tenantId:P}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),f({insureCode:j,objectType:5,tenantId:P,orderNo:b}).then((({code:e,data:t})=>{"10000"===e&&(N.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?q.value=1:q.value=4:q.value=t.materialSource)}))})),(e,a)=>{const n=c("VanButton"),o=c("ProFilePreview"),r=c("ProPageWrap");return u(),d(r,{class:"page-customer-notice-wrapper"},{default:i((()=>[l("div",C,[s(o,{type:t[q.value],content:N.value.materialContent},{"footer-btn":i((()=>[l("div",{class:"footer-button",onClick:A},[s(n,{block:"",type:"primary"},{default:i((()=>[y])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
