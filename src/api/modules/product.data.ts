export interface QueryProposalProductListType {
  insurerCodeList?: Array<string>;
  pageNum?: number;
  pageSize?: number;
  showCategory?: string | number;
  title?: string;
}

export interface ProductInfoVoItem {
  fileName?: any;
  fileType?: string;
  fileUrl?: string;
  tags?: Array<string>;
  text?: string;
  title?: string;
  insurerName?: string;
}
