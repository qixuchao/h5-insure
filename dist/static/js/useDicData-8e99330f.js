import{r as t,bW as i}from"./index-f73a594c.js";let s=null;const e={},c=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD","_OCCUPATION"];c.forEach((t=>{e[t]={dictList:[],refList:[]}}));const E=E=>{e[E]||(e[E]={dictList:[],refList:[]});const d=t(e[E].dictList);return e[E].refList.push(d),0===e[E].dictList.length&&(c.push(E),(()=>{const{length:t}=c;setTimeout((()=>{t===c.length&&(s=i({dictCodeList:[...new Set(c)]}),s.then((t=>{const{code:i,data:s}=t;"10000"===i&&s.forEach((t=>{e[t.dictCode].dictList=t.dictItemList,e[t.dictCode].refList.forEach((i=>{i.value=t.dictItemList}))}))})))}),100)})()),d};export{E as u};
