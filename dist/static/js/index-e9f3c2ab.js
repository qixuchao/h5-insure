import{d as e,a,u as t,r as o,G as n,b as s,c as r,e as d,w as c,j as u,f as i,g as p,n as l,av as m,p as f,N as C,M as v,O as g,B as h,aQ as x}from"./index-f03140d4.js";import"./pdfh5-008ca364.js";const y={class:"notice-content"},b=e({__name:"index",setup(e){const b={1:"pdf",4:"picture",2:"richText",3:"link"},I=a(),N=t(),{orderNo:j="2022021815432987130620",productCode:_="CQ75CQ76",templateId:k=1,tenantId:P=9991000007,insurerCode:q="kunlunhealth"}=I.query,A=o({});o(!0),o(!0);const O=o({}),Q=o(1),T=()=>{A.value.extInfo={...A.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:k,buttonCode:C.customerNotice},v(A.value).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&N.push({path:g[a.pageAction.data.nextPageCode],query:I.query})}))};return n((()=>{f({orderNo:j,tenantId:P}).then((({code:e,data:a})=>{"10000"===e&&Object.assign(A.value,a)})),m({insureCode:q,objectType:5,tenantId:P,orderNo:j}).then((({code:e,data:a})=>{"10000"===e&&(O.value=a,1===a.materialSource?-1!==a.materialContent.indexOf(".pdf")?Q.value=1:Q.value=4:Q.value=a.materialSource)}))})),(e,a)=>{const t=h,o=x,n=s("ProPageWrap");return r(),d(n,{class:"page-customer-notice-wrapper"},{default:c((()=>[u("div",y,[i(o,{type:b[p(Q)],content:p(O).materialContent},{"footer-btn":c((()=>[u("div",{class:"footer-button",onClick:T},[i(t,{block:"",type:"primary"},{default:c((()=>[l("我已阅读")])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}});export{b as default};
