import{b as s}from"./index-b4caab31.js";const r="/api/app/insure/proposal",e=o=>s.post(`${r}/queryProposalProductList`,o),a=o=>s.post(`${r}/historyProposalList`,o),p=o=>s.post(`${r}/deleteProposal/${o}`),P=o=>s.post(`${r}/preview/${o}`),i=o=>s.post(`${r}/generatePdf/${o}`),n=o=>s.get(`${r}/sharePreview/${o}`);export{n as a,P as b,p as d,i as g,a as h,e as q};
