import{r as t,b5 as i}from"./index-548ad6ce.js";let e=null;const s={},c=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD","_OCCUPATION"];c.forEach((t=>{s[t]={dictList:[],refList:[]}}));const E=E=>{s[E]||(s[E]={dictList:[],refList:[]});const d=t(s[E].dictList);return s[E].refList.push(d),0===s[E].dictList.length&&(c.push(E),(()=>{const{length:t}=c;setTimeout((()=>{t===c.length&&(e=i({dictCodeList:[...new Set(c)]}),e.then((t=>{const{code:i,data:e}=t;"10000"===i&&e.forEach((t=>{s[t.dictCode].dictList=t.dictItemList,s[t.dictCode].refList.forEach((i=>{i.value=t.dictItemList}))}))})))}),100)})()),d};export{E as u};
