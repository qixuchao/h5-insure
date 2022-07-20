export interface Sort {
  asc: boolean;
  name: string;
}

export interface ProductInfoVoItem {
  fileName: string;
  fileType: string;
  fileUrl: string;
  id: number;
  tags: string[];
  text: string;
  title: number;
  insurerName: string;
}

export interface QueryProposalProductListType {
  condition: ProductInfoVoItem;
  datas: Data[];
  offset: number;
  pageNum: number;
  pageSize: number;
  queryAll: boolean;
  sortCondition: string;
  sorts: Sort[];
  total: number;
  title: string;
  insurerCodeList: Array<string>;
  showCategory: string | number;
}
