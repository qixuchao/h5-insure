System.register(["./index-legacy-fcf08e87.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,a,o,n,r,c,u,d,i,l,s,p,f,m,v,g,C,y,h;return{setters:[function(e){t=e.d,a=e.a,o=e.u,n=e.r,r=e.G,c=e.b,u=e.c,d=e.e,i=e.w,l=e.i,s=e.f,p=e.n,f=e.au,m=e.p,v=e.N,g=e.M,C=e.O,y=e.B,h=e.aP},function(){}],execute:function(){const b={class:"notice-content"},x=p("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},p=a(),I=o(),{orderNo:N="2022021815432987130620",productCode:j="CQ75CQ76",templateId:P=1,tenantId:k=9991000007,insurerCode:q="kunlunhealth"}=p.query,A=n({});n(!0),n(!0);const O=n({}),S=n(1),T=()=>{A.value.extInfo={...A.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:P,buttonCode:v.customerNotice},g(A.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&I.push({path:C[t.pageAction.data.nextPageCode],query:p.query})}))};return r((()=>{m({orderNo:N,tenantId:k}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(A.value,t)})),f({insureCode:q,objectType:5,tenantId:k,orderNo:N}).then((({code:e,data:t})=>{"10000"===e&&(O.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?S.value=1:S.value=4:S.value=t.materialSource)}))})),(e,a)=>{const o=y,n=h,r=c("ProPageWrap");return u(),d(r,{class:"page-customer-notice-wrapper"},{default:i((()=>[l("div",b,[s(n,{type:t[S.value],content:O.value.materialContent},{"footer-btn":i((()=>[l("div",{class:"footer-button",onClick:T},[s(o,{block:"",type:"primary"},{default:i((()=>[x])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
