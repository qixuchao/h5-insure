import{G as t}from"./index-c1fff0ee.js";import{r as e}from"./vendor-e8ba1bfa.js";let i=null;const s={},c=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"];c.forEach((t=>{s[t]={dictList:[],refList:[]}}));const o=o=>{s[o]||(s[o]={dictList:[],refList:[]});const E=e(s[o].dictList);return s[o].refList.push(E),0===s[o].dictList.length&&(c.push(o),(()=>{const{length:e}=c;setTimeout((()=>{e===c.length&&(i=t({dictCodeList:[...new Set(c)]}),i.then((t=>{const{code:e,data:i}=t;"10000"===e&&i.forEach((t=>{s[t.dictCode].dictList=t.dictItemList,s[t.dictCode].refList.forEach((e=>{e.value=t.dictItemList}))}))})))}),100)})()),E};export{o as u};
