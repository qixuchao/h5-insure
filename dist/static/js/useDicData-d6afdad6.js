import{r as t,bY as i}from"./index-f3eddd66.js";let e=null;const s={},c=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD","_OCCUPATION"];c.forEach((t=>{s[t]={dictList:[],refList:[]}}));const d=d=>{s[d]||(s[d]={dictList:[],refList:[]});const E=t(s[d].dictList);return s[d].refList.push(E),0===s[d].dictList.length&&(c.push(d),(()=>{const{length:t}=c;setTimeout((()=>{t===c.length&&(e=i({dictCodeList:[...new Set(c)]}),e.then((t=>{const{code:i,data:e}=t;"10000"===i&&e.forEach((t=>{s[t.dictCode].dictList=t.dictItemList,s[t.dictCode].refList.forEach((i=>{i.value=t.dictItemList}))}))})))}),100)})()),E};export{d as u};
