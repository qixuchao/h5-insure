import{m as e,u as t,ab as a,r as o,o as n,s as r,t as s,v as u,x as d,E as c,U as i,H as l}from"./vendor-fd650291.js";import{F as p,g as m,N as v,n as f,b as C}from"./index-823b7915.js";const g={class:"notice-content"},b=l("我已阅读"),h=e({setup(e){const l={1:"pdf",4:"picture",2:"richText",3:"link"},h=t(),x=a(),{orderNo:y="2022021815432987130620",productCode:I="CQ75CQ76",templateId:N=1,tenantId:P=9991000007,insurerCode:j="kunlunhealth"}=h.query,k=o({});o(!0),o(!0);const q=o({}),A=o(1),T=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:N,buttonCode:v.customerNotice},f(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&x.push({path:C[t.pageAction.data.nextPageCode],query:h.query})}))};return n((()=>{m({orderNo:y,tenantId:P}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),p({insureCode:j,objectType:5,tenantId:P,orderNo:y}).then((({code:e,data:t})=>{"10000"===e&&(q.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?A.value=1:A.value=4:A.value=t.materialSource)}))})),(e,t)=>{const a=r("VanButton"),o=r("ProFilePreview"),n=r("ProPageWrap");return s(),u(n,{class:"page-customer-notice-wrapper"},{default:d((()=>[c("div",g,[i(o,{type:l[A.value],content:q.value.materialContent},{"footer-btn":d((()=>[c("div",{class:"footer-button",onClick:T},[i(a,{block:"",type:"primary"},{default:d((()=>[b])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}});export{h as default};
