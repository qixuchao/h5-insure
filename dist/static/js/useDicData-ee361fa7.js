import{G as t}from"./index-cb11d02b.js";import{C as i}from"./vendor-2c1461d1.js";let s=null;const e={},c=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"];c.forEach((t=>{e[t]={dictList:[],refList:[]}}));const d=d=>{e[d]||(e[d]={dictList:[],refList:[]});const o=i(e[d].dictList);return e[d].refList.push(o),0===e[d].dictList.length&&(c.push(d),(()=>{const{length:i}=c;setTimeout((()=>{i===c.length&&(s=t({dictCodeList:[...new Set(c)]}),s.then((t=>{const{code:i,data:s}=t;"10000"===i&&s.forEach((t=>{e[t.dictCode].dictList=t.dictItemList,e[t.dictCode].refList.forEach((i=>{i.value=t.dictItemList}))}))})))}),100)})()),o};export{d as u};
