import{r as t,bW as e}from"./index-e25bdee1.js";let i=null;const s={},c=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD","_OCCUPATION"];c.forEach((t=>{s[t]={dictList:[],refList:[]}}));const E=E=>{s[E]||(s[E]={dictList:[],refList:[]});const d=t(s[E].dictList);return s[E].refList.push(d),0===s[E].dictList.length&&(c.push(E),(()=>{const{length:t}=c;setTimeout((()=>{t===c.length&&(i=e({dictCodeList:[...new Set(c)]}),i.then((t=>{const{code:e,data:i}=t;"10000"===e&&i.forEach((t=>{s[t.dictCode].dictList=t.dictItemList,s[t.dictCode].refList.forEach((e=>{e.value=t.dictItemList}))}))})))}),100)})()),d};export{E as u};
