System.register(["./index-legacy-56d6d425.js","./pdfh5-legacy-783b46b8.js"],(function(e){"use strict";var t,a,o,n,r,u,c,d,i,l,s,p,f,v,m,C,g;return{setters:[function(e){t=e.d,a=e.a,o=e.u,n=e.r,r=e.y,u=e.b,c=e.c,d=e.e,i=e.w,l=e.i,s=e.f,p=e.n,f=e.ah,v=e.p,m=e.N,C=e.C,g=e.D},function(){}],execute:function(){const y={class:"notice-content"},h=p("我已阅读");e("default",t({setup(e){const t={1:"pdf",4:"picture",2:"richText",3:"link"},p=a(),b=o(),{orderNo:x="2022021815432987130620",productCode:I="CQ75CQ76",templateId:N=1,tenantId:P=9991000007,insurerCode:j="kunlunhealth"}=p.query,k=n({});n(!0),n(!0);const q=n({}),w=n(1),A=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:N,buttonCode:m.customerNotice},C(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&b.push({path:g[t.pageAction.data.nextPageCode],query:p.query})}))};return r((()=>{v({orderNo:x,tenantId:P}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),f({insureCode:j,objectType:5,tenantId:P,orderNo:x}).then((({code:e,data:t})=>{"10000"===e&&(q.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?w.value=1:w.value=4:w.value=t.materialSource)}))})),(e,a)=>{const o=u("VanButton"),n=u("ProFilePreview"),r=u("ProPageWrap");return c(),d(r,{class:"page-customer-notice-wrapper"},{default:i((()=>[l("div",y,[s(n,{type:t[w.value],content:q.value.materialContent},{"footer-btn":i((()=>[l("div",{class:"footer-button",onClick:A},[s(o,{block:"",type:"primary"},{default:i((()=>[h])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}}))}}}));
