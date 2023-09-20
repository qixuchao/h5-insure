export interface INotice {
  /**
   * 是否完成 1-是，2-否
   */
  isDone: number;
  /**
   * 产品资料内容
   */
  materialContent: string;
  /**
   * 资料名称
   */
  materialName: string;
  /**
   * 资料来源 1.附件 2.富文本 3.链接
   */
  materialSource: number;
  /**
   * 资料类型 1.健康告知 2.投保须知 3.客户告知 4.免责条款 5.投被保人声明 6.特别约定
   */
  materialType: number;
  /**
   * 告知对象 1-投保人，2-被保人，3-代理人
   */
  noticeObject: number;
}

// 查询双录状态
export interface DoubleData {
    /** 是否需要双录 */
    doubleRecordFlag: number;
    /** 双录状态 */
    doubleRecordStatus: number;
    id: number;
    orderNo: string;
}

// 获取签名列表
export interface SignResultItem {
    category: number;
    desc: string;
    fileBase64: string;
    id: number;
    name: string;
    objectId: string;
    objectType: number;
    orderId: number;
    size: number;
    tenantId: number;
    type: string;
    uri: string;
    uriKey: string;
}



