System.register(["./vendor-legacy-c0d7778e.js","./index-legacy-40f0d3e2.js","./order-legacy-a719eb11.js","./index-legacy-44bebc79.js"],(function(e){"use strict";var t,a,o,n,c,r,u,d,s,i,p,g,l,f,y,C,m;return{setters:[function(e){t=e.g,a=e.Q,o=e.ad,n=e.C,c=e.L,r=e.o,u=e.r,d=e.h,s=e.j,i=e.k,p=e.y,g=e.n,l=e.B},function(e){f=e.n},function(e){y=e.q},function(e){C=e.b,m=e.P}],execute:function(){const b=l("我已阅读");e("default",t({setup(e){const t="customerNotice",l=a(),j=o(),{orderNo:v="2022021815432987130620",productCode:x="CQ75CQ76",templateId:h=1,tenantId:I=9991000007}=l.query,P=n({pageCode:t});c({nextPage:""});const N=()=>{((e={})=>C.get("/api/app/insure/insurance/getCustomerNotices",{params:e}))({productCode:x,objectType:3}).then((({code:e,data:t})=>{}))},q=()=>{P.value.extInfo={...P.value.extInfo,isReadCustomerNotice:1,pageCode:t,templateId:h},f(P.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&j.push({path:m[t.pageAction.data.nextPageCode],query:l.query})}))};return r((()=>{y({orderNo:v,tenantId:I}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(P.value,t)})),N()})),(e,t)=>{const a=u("VanButton"),o=u("ProPageWrap");return d(),s(o,{class:"page-customer-notice-wrapper"},{default:i((()=>[p("div",{class:"footer-button",onClick:q},[g(a,{block:"",type:"primary"},{default:i((()=>[b])),_:1})])])),_:1})}}}))}}}));
