System.register(["./index-legacy-59ab0a18.js","./vendor-legacy-da8f33fe.js"],(function(t){"use strict";var e,i;return{setters:[function(t){e=t.F},function(t){i=t.E}],execute:function(){let s=null;const c={},n=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"];n.forEach((t=>{c[t]={dictList:[],refList:[]}})),t("u",(t=>{c[t]||(c[t]={dictList:[],refList:[]});const E=i(c[t].dictList);return c[t].refList.push(E),0===c[t].dictList.length&&(n.push(t),(()=>{const{length:t}=n;setTimeout((()=>{t===n.length&&(s=e({dictCodeList:[...new Set(n)]}),s.then((t=>{const{code:e,data:i}=t;"10000"===e&&i.forEach((t=>{c[t.dictCode].dictList=t.dictItemList,c[t.dictCode].refList.forEach((e=>{e.value=t.dictItemList}))}))})))}),100)})()),E}))}}}));
