System.register(["./index-legacy-1d6e1a56.js"],(function(e){"use strict";var r;return{setters:[function(e){r=e.K}],execute:function(){const t="/api/app/insure/proposal";e("q",(e=>r({url:`${t}/queryProposalProductList`,method:"POST",data:e}))),e("h",(e=>r({url:`${t}/historyProposalList`,method:"POST",data:e}))),e("d",(e=>r({url:`${t}/deleteProposal/${e}`,method:"POST"}))),e("b",(e=>r({url:`${t}/preview/${e}`,method:"POST"}))),e("g",((e={})=>r({url:`${t}/generatePdf`,method:"GET",params:e}))),e("a",(e=>r({url:`${t}/sharePreview/${e}`,method:"GET"})))}}}));
