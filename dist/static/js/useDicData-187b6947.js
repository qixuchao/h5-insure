import{G as t}from"./index-647cae04.js";import{r as i}from"./vendor-0381d15c.js";let e=null;const s={},c=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"];c.forEach((t=>{s[t]={dictList:[],refList:[]}}));const o=o=>{s[o]||(s[o]={dictList:[],refList:[]});const d=i(s[o].dictList);return s[o].refList.push(d),0===s[o].dictList.length&&(c.push(o),(()=>{const{length:i}=c;setTimeout((()=>{i===c.length&&(e=t({dictCodeList:[...new Set(c)]}),e.then((t=>{const{code:i,data:e}=t;"10000"===i&&e.forEach((t=>{s[t.dictCode].dictList=t.dictItemList,s[t.dictCode].refList.forEach((i=>{i.value=t.dictItemList}))}))})))}),100)})()),d};export{o as u};
