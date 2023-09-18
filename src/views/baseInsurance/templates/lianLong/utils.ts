import { getFileType } from '../../utils';

export const pickProductRiskCode = (productList) => {
  const currentProductList = productList.map((product) => {
    return {
      productCode: product.productCode,
      mergeRiskReqList: product.productPlanInsureVOList?.[0]?.insureProductRiskVOList.map((risk) => ({
        riskCode: risk.riskCode,
        riskType: risk.riskType,
        exemptType: risk.exemptType,
        mainRiskId: risk.mainRiskId,
        mainRiskCode: risk.mainRiskCode,
      })),
    };
  });

  return { productList: currentProductList };
};

export const pickProductRiskCodeFromOrder = (productList) => {
  const currentProductList = productList.map((product) => {
    return {
      productCode: product.productCode,
      mergeRiskReqList: product.riskList.map((risk) => {
        const { riskCode, riskType, mainRiskCode, mainRiskId } = risk;
        return {
          riskCode,
          riskType,
          mainRiskCode,
          mainRiskId,
        };
      }),
    };
  });
  return { productList: currentProductList };
};

export const dealMaterialList = (materialCollection) => {
  const { riskMaterialList, productMaterialPlanVOList } = materialCollection;
  const { productMaterialMap } = productMaterialPlanVOList?.[0] || {};

  const productMaterialList = Object.keys(productMaterialMap || {}).map((e) => {
    const materialTabList = productMaterialMap[e].map((attachmentItem) => {
      return {
        ...attachmentItem,
        materialSource: getFileType(`${attachmentItem?.materialSource}`, attachmentItem?.materialContent),
      };
    });

    return {
      attachmentName: e,
      attachmentList: materialTabList,
    };
  });

  return {
    productMaterialList,
    riskMaterialList: (riskMaterialList?.[0]?.productMaterialList || []).map((material) => ({
      attachmentName: material.materialName,
      attachmentList: [
        {
          ...material,
          materialSource: getFileType(`${material?.materialSource}`, material?.materialContent),
        },
      ],
    })),
  };
};
