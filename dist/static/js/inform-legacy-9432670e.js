System.register(["./index-legacy-753fdf1e.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.b}],execute:function(){const s="/api/app/insure/insurance";e("l",(e=>t.post(`${s}/listCustomerQuestions`,e))),e("g",(e=>t.post(`${s}/getCustomerQuestionsDetail`,e))),e("s",(e=>t.post(`${s}/saveMarketerNotices`,e)))}}}));
