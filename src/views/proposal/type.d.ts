// 保险产品类型
export interface ProposalProductRisk {
  riskName: string, // 险种名称
  amount: string,  // 保额
  coveragePeriod: string, // 保障期间
  chargePeriod: string, // 交费期间
  premium: string, // 保费
}
