System.register(["./index-legacy-1d6e1a56.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var t,a,n,o,r,c,u,d,i,s,l,p,f,m,g,v,C,y,h,x;return{setters:[function(e){t=e.d,a=e.a,n=e.u,o=e.r,r=e.G,c=e.b,u=e.c,d=e.e,i=e.w,s=e.j,l=e.f,p=e.g,f=e.n,m=e.av,g=e.p,v=e.N,C=e.M,y=e.O,h=e.B,x=e.aQ},function(){}],execute:function(){const b={class:"notice-content"};e("default",t({__name:"index",setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},I=a(),N=n(),{orderNo:j="2022021815432987130620",productCode:_="CQ75CQ76",templateId:k=1,tenantId:P=9991000007,insurerCode:q="kunlunhealth"}=I.query,A=o({});o(!0),o(!0);const O=o({}),Q=o(1),S=()=>{A.value.extInfo={...A.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:k,buttonCode:v.customerNotice},C(A.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&N.push({path:y[t.pageAction.data.nextPageCode],query:I.query})}))};return r((()=>{g({orderNo:j,tenantId:P}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(A.value,t)})),m({insureCode:q,objectType:5,tenantId:P,orderNo:j}).then((({code:e,data:t})=>{"10000"===e&&(O.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?Q.value=1:Q.value=4:Q.value=t.materialSource)}))})),(e,a)=>{const n=h,o=x,r=c("ProPageWrap");return u(),d(r,{class:"page-customer-notice-wrapper"},{default:i((()=>[s("div",b,[l(o,{type:t[p(Q)],content:p(O).materialContent},{"footer-btn":i((()=>[s("div",{class:"footer-button",onClick:S},[l(n,{block:"",type:"primary"},{default:i((()=>[f("我已阅读")])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
