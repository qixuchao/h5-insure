import{h as e,N as t,a8 as a,r as o,j as n,k as r,l as s,m as u,n as c,z as d,Q as i,C as l}from"./vendor-0381d15c.js";import{F as p,g as m,N as v,n as f,b as C}from"./index-24f37ac0.js";const g={class:"notice-content"},h=l("我已阅读"),y=e({setup(e){const l={1:"pdf",4:"picture",2:"richText",3:"link"},y=t(),N=a(),{orderNo:b="2022021815432987130620",productCode:x="CQ75CQ76",templateId:I=1,tenantId:j=9991000007,insurerCode:P="kunlunhealth"}=y.query,k=o({});o(!0),o(!0);const q=o({}),A=o(1),Q=()=>{k.value.extInfo={...k.value.extInfo,isReadCustomerNotice:1,pageCode:"customerNotice",templateId:I,buttonCode:v.customerNotice},f(k.value).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&N.push({path:C[t.pageAction.data.nextPageCode],query:y.query})}))};return n((()=>{m({orderNo:b,tenantId:j}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(k.value,t)})),p({insureCode:P,objectType:5,tenantId:j,orderNo:b}).then((({code:e,data:t})=>{"10000"===e&&(q.value=t,1===t.materialSource?-1!==t.materialContent.indexOf(".pdf")?A.value=1:A.value=4:A.value=t.materialSource)}))})),(e,t)=>{const a=r("VanButton"),o=r("ProFilePreview"),n=r("ProPageWrap");return s(),u(n,{class:"page-customer-notice-wrapper"},{default:c((()=>[d("div",g,[i(o,{type:l[A.value],content:q.value.materialContent},{"footer-btn":c((()=>[d("div",{class:"footer-button",onClick:Q},[i(a,{block:"",type:"primary"},{default:c((()=>[h])),_:1})])])),_:1},8,["type","content"])])])),_:1})}}});export{y as default};
