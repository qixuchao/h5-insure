System.register(["./vendor-legacy-7fe5c3e9.js","./index-legacy-aa063c2c.js"],(function(e){"use strict";var t,a,n,o,r,c,u,i,d,l,s,p,f,v,m,g,C;return{setters:[function(e){t=e.i,a=e.P,n=e.aa,o=e.r,r=e.k,c=e.l,u=e.m,i=e.n,d=e.p,l=e.B,s=e.t,p=e.G},function(e){f=e.F,v=e.g,m=e.N,g=e.n,C=e.b}],execute:function(){const y={class:"notice-content"},h=p("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},p=a(),b=n(),{orderNo:x="2022021815432987130620",productCode:I="CQ75CQ76",templateId:N=1,tenantId:P=9991000007,insurerCode:j="kunlunhealth"}=p.query,k=o({});o(!0),o(!0);const q=o({}),A=o(1),S=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:N,buttonCode:m.customerNotice},g(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&b.push({path:C[t.pageAction.data.nextPageCode],query:p.query})}))};return r((()=>{v({orderNo:x,tenantId:P}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),f({insureCode:j,objectType:5,tenantId:P,orderNo:x}).then((({code:e,data:t})=>{"10000"===e&&(q.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?A.value=1:A.value=4:A.value=t.materialSource)}))})),(e,a)=>{const n=c("VanButton"),o=c("ProFilePreview"),r=c("ProPageWrap");return u(),i(r,{class:"page-customer-notice-wrapper"},{default:d((()=>[l("div",y,[s(o,{type:t[A.value],content:q.value.materialContent},{"footer-btn":d((()=>[l("div",{class:"footer-button",onClick:S},[s(n,{block:"",type:"primary"},{default:d((()=>[h])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
