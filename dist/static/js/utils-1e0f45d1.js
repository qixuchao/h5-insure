import{g as i}from"./utils-ffb01bde.js";const t=i=>({productList:i.map((i=>{var t,e;return{productCode:i.productCode,mergeRiskReqList:null==(e=null==(t=i.productPlanInsureVOList)?void 0:t[0])?void 0:e.insureProductRiskVOList.map((i=>({riskCode:i.riskCode,riskType:i.riskType,exemptType:i.exemptType,mainRiskId:i.mainRiskId,mainRiskCode:i.mainRiskCode})))}}))}),e=i=>({productList:i.map((i=>({productCode:i.productCode,mergeRiskReqList:i.riskList.map((i=>{const{riskCode:t,riskType:e,mainRiskCode:a,mainRiskId:r}=i;return{riskCode:t,riskType:e,mainRiskCode:a,mainRiskId:r}}))})))}),a=t=>{var e;const{riskMaterialList:a,productMaterialPlanVOList:r}=t,{productMaterialMap:s}=(null==r?void 0:r[0])||{};return{productMaterialList:Object.keys(s||{}).map((t=>({attachmentName:t,attachmentList:s[t].map((t=>({...t,materialSource:i(`${null==t?void 0:t.materialSource}`,null==t?void 0:t.materialContent)})))}))),riskMaterialList:((null==(e=null==a?void 0:a[0])?void 0:e.productMaterialList)||[]).map((t=>({attachmentName:t.materialName,attachmentList:[{...t,materialSource:i(`${null==t?void 0:t.materialSource}`,null==t?void 0:t.materialContent)}]})))}};export{t as a,a as d,e as p};
