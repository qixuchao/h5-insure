System.register(["./index-legacy-74577262.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.b}],execute:function(){const s="/api/app/insure/proposal";t("q",(t=>e.post(`${s}/queryProposalProductList`,t))),t("h",(t=>e.post(`${s}/historyProposalList`,t))),t("d",(t=>e.post(`${s}/deleteProposal/${t}`))),t("a",(t=>e.post(`${s}/preview/${t}`))),t("g",(t=>e.post(`${s}/generatePdf/${t}`)))}}}));
