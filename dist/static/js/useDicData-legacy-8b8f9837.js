System.register(["./index-legacy-8d29c91b.js","./vendor-legacy-8d7d6b09.js"],(function(t){"use strict";var e,i;return{setters:[function(t){e=t.g},function(t){i=t.E}],execute:function(){let c=null;const s={},n=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"];n.forEach((t=>{s[t]={dictList:[],refList:[]}})),t("u",(t=>{s[t]||(s[t]={dictList:[],refList:[]});const d=i(s[t].dictList);return s[t].refList.push(d),0===s[t].dictList.length&&(n.push(t),(()=>{const{length:t}=n;setTimeout((()=>{t===n.length&&(c=e({dictCodeList:[...new Set(n)]}),c.then((t=>{const{code:e,data:i}=t;"10000"===e&&i.forEach((t=>{s[t.dictCode].dictList=t.dictItemList,s[t.dictCode].refList.forEach((e=>{e.value=t.dictItemList}))}))})))}),100)})()),d}))}}}));
