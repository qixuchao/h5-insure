/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-20 21:46:32
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-22 15:39:30
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/compositionProposal.data.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 计划书转投保
*/
export interface InsuredProductData {
  authStatus: number;
  insureMethod: number;
  insured: number;
  insurerCode: string;
  productName: string;
  shelfStatus: number;
  productCode: string;
  tenantProductCode: string;
  checkedList: string[]
}

export interface ProposalTransInsuredVO {
  name: string;
  birthday: string;
  gender: number;
  relationToHolder: number;
  relationToMainInsured: number;
  proposalInsuredId: number;
  proposalTransInsuredProductVOList: InsuredProductData[];
}

/**
 * 计划书历史主题
 */
export interface ThemeHistoryDetail {
  id: number;
  proposalId: number;
  showConfig: ShowConfig;
}

export interface ShowConfig {
  backImage: string;
  frontImage: string;
  thumbnailImage: string;
}

/**
 * 主题信息
 */
export interface ThemeItem {
  applicableType: number;
  creator: string;
  enabledFlag: number;
  gmtCreated: string;
  gmtModified: string;
  id: number;
  isDeleted: string;
  modifier: string;
  name: string;
  showConfig: ShowConfig;
  tenantId: number;
}


export interface BasicContent {
  configItem: string;
  content: BasicContentItem;
  templateId: string;
}

export interface BasicContentItem {
  banner: string[];
  bannerType: string;
  defaultBanner: string[];
  defaultVideo: string[];
  video: string[];
  insurerCode: string;
  templateName: string;
}

export interface AgentCardContent {
  configItem: string;
  content: AgentCardContentItem;
  templateId: string;
}

export interface AgentCardContentItem {
  agentBgModelType: string;
  agentDefaultPicList: string[];
  agentPicList: string[];
  agentShowPostion: string;
  isShow: string;
}
export interface CompanyProfileContent {
  configItem: string;
  content: AgentCardContentItem;
  templateId: string;
}

export interface CompanyProfileContentItem {
  agentShowPostion: string;
  companyPicList: string[];
  companyDefaultPicList: string[];
  isShow: string;
  module: ModuleItem
}

export interface ModuleItem {
  components: Partial<ModuleItemInner>[];
  iconName: string;
  iconType: string;
  isTitleShow: string;
  title: string;
}


export interface ProductDetailContent {
  attachmentListResMap: {};
  configItem: string;
  content: ProductDetailContentItem;
  templateId: string;
}

export interface ProductDetailContentItem {

}
export interface RiskContent {
  configItem: string;
  configItem: string;
  content: RiskContentItem;
  templateId: string;
}

export interface RiskContentItem {
  isShow: string;
  riskCaseType: string;
  riskContent: string;
  riskCaseType: string;
  riskDefaultPicList: string[];
  riskPicList: string[];


}
