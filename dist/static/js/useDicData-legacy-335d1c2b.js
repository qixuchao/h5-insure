System.register(["./index-legacy-de71742e.js","./vendor-legacy-d0ee1ea5.js"],(function(e){"use strict";var t,c;return{setters:[function(e){t=e.g},function(e){c=e.C}],execute:function(){const n={},E=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"];e("u",(e=>{const i=c(n[e]||[]);return 0===i.value.length&&(E.push(e),t({dictCodeList:[...new Set(E)]}).then((t=>{const{code:c,data:E}=t;"10000"===c&&E.forEach((t=>{t.dictCode===e&&(i.value=t.dictItemList),n[t.dictCode]=t.dictItemList}))}))),i}))}}}));
