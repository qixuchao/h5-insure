import{E as L}from"./index-2059c76e.js";import{G as f}from"./vendor-b80b3531.js";let c=null;const s={},i=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"];i.forEach(t=>{s[t]={dictList:[],refList:[]}});const A=()=>{const{length:t}=i;setTimeout(()=>{t===i.length&&(c=L({dictCodeList:[...new Set(i)]}),c.then(e=>{const{code:o,data:r}=e;o==="10000"&&r.forEach(E=>{s[E.dictCode].dictList=E.dictItemList,s[E.dictCode].refList.forEach(I=>{I.value=E.dictItemList})})}))},100)},D=t=>{s[t]||(s[t]={dictList:[],refList:[]});const e=f(s[t].dictList);return s[t].refList.push(e),s[t].dictList.length===0&&(i.push(t),A()),e};export{D as u};
