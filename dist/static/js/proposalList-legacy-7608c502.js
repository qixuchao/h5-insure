System.register(["./index-legacy-10827e29.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.b}],execute:function(){const s="/api/app/insure/proposal";e("q",(e=>t.post(`${s}/queryProposalProductList`,e))),e("h",(e=>t.post(`${s}/historyProposalList`,e))),e("d",(e=>t.post(`${s}/deleteProposal/${e}`))),e("a",(e=>t.post(`${s}/preview/${e}`))),e("g",(e=>t.post(`${s}/generatePdf/${e}`)))}}}));
