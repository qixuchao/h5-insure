System.register(["./index-legacy-cb3bdc8a.js"],(function(t){"use strict";var e,i;return{setters:[function(t){e=t.r,i=t.aD}],execute:function(){let c=null;const s={},n=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD","_OCCUPATION"];n.forEach((t=>{s[t]={dictList:[],refList:[]}})),t("u",(t=>{s[t]||(s[t]={dictList:[],refList:[]});const E=e(s[t].dictList);return s[t].refList.push(E),0===s[t].dictList.length&&(n.push(t),(()=>{const{length:t}=n;setTimeout((()=>{t===n.length&&(c=i({dictCodeList:[...new Set(n)]}),c.then((t=>{const{code:e,data:i}=t;"10000"===e&&i.forEach((t=>{s[t.dictCode].dictList=t.dictItemList,s[t.dictCode].refList.forEach((e=>{e.value=t.dictItemList}))}))})))}),100)})()),E}))}}}));
