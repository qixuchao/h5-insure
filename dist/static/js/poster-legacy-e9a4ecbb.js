System.register(["./index-legacy-9604cbf9.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.a}],execute:function(){const s="/activity";t("a",(t=>e.post(`${s}/v1/poster/saveOrSharePoster`,t))),t("s",(t=>e.post(`${s}/v1/poster/searchPoster`,t))),t("b",(t=>e.post(`${s}/queryTypeAndProductList`,t))),t("c",(t=>e.post(`${s}/queryProductList`,t))),t("q",(t=>e.post(`${s}/v1/querySingleList`,t))),t("f",(t=>e.get(`${s}/v1/vcard/findUserInfo`,t)))}}}));
