import{g as i}from"./utils-4e96fd74.js";const t=i=>({productList:i.map((i=>{var t,e;return{productCode:i.productCode,mergeRiskReqList:null==(e=null==(t=i.productPlanInsureVOList)?void 0:t[0])?void 0:e.insureProductRiskVOList.map((i=>({riskCode:i.riskCode,riskType:i.riskType,exemptType:i.exemptType,mainRiskId:i.mainRiskId,mainRiskCode:i.mainRiskCode})))}}))}),e=i=>({productList:i.map((i=>({productCode:i.productCode,mergeRiskReqList:i.riskList.map((i=>{const{riskCode:t,riskType:e,mainRiskCode:a,mainRiskId:r}=i;return{riskCode:t,riskType:e,mainRiskCode:a,mainRiskId:r}}))})))}),a=(t,e="")=>{var a;const{riskMaterialList:r,productMaterialPlanVOList:s}=t,{productMaterialMap:o}=s.find((i=>"-1"===i.planCode||!e||i.planCode===e))||{};return{productMaterialList:Object.keys(o||{}).map((t=>({attachmentName:t,attachmentList:o[t].map((t=>({...t,materialSource:i(`${null==t?void 0:t.materialSource}`,null==t?void 0:t.materialContent)})))}))),riskMaterialList:((null==(a=null==r?void 0:r[0])?void 0:a.productMaterialList)||[]).map((t=>({attachmentName:t.materialName,attachmentList:[{...t,materialSource:i(`${null==t?void 0:t.materialSource}`,null==t?void 0:t.materialContent)}]})))}};export{t as a,a as d,e as p};
