export const pickProductRiskCode = (productList) => {
  const currentProductList = productList.map((product) => {
    return {
      productCode: product.productCode,
      mergeRiskReqList: product.productPlanInsureVOList?.[0]?.insureProductRiskVOList.map((risk) => ({
        riskCode: risk.riskCode,
        riskType: risk.riskType,
        exemptType: risk.exemptType,
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
      mergeRiskReqList: product.riskList.map((risk) => ({
        riskCode: risk.riskCode,
        riskType: risk.riskType,
        mainRiskCode: risk.mainRiskCode,
      })),
    };
  });

  return { productList: currentProductList };
};

export default {};
