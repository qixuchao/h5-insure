import{g as i}from"./utils-95a76685.js";const t=i=>({productList:i.map((i=>{var t,a;return{productCode:i.productCode,mergeRiskReqList:null==(a=null==(t=i.productPlanInsureVOList)?void 0:t[0])?void 0:a.insureProductRiskVOList.map((i=>({riskCode:i.riskCode,riskType:i.riskType,exemptType:i.exemptType,mainRiskId:i.mainRiskId,mainRiskCode:i.mainRiskCode})))}}))}),a=i=>({productList:i.map((i=>({productCode:i.productCode,mergeRiskReqList:i.riskList.map((i=>{const{riskCode:t,riskType:a,mainRiskCode:e,mainRiskId:r}=i;return{riskCode:t,riskType:a,mainRiskCode:e,mainRiskId:r}}))})))}),e=t=>{var a;const{riskMaterialList:e,productMaterialPlanVOList:r}=t,{productMaterialMap:s}=(null==r?void 0:r[0])||{};return{productMaterialList:Object.keys(s||{}).map((t=>({attachmentName:t,attachmentList:s[t].map((t=>({...t,materialSource:i(`${null==t?void 0:t.materialSource}`,null==t?void 0:t.materialContent)})))}))),riskMaterialList:((null==(a=null==e?void 0:e[0])?void 0:a.productMaterialList)||[]).map((t=>({attachmentName:t.materialName,attachmentList:[{...t,materialSource:i(`${null==t?void 0:t.materialSource}`,null==t?void 0:t.materialContent)}]})))}};export{t as a,e as d,a as p};
