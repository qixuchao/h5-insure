import request from '@/api/request';
import { GetArticleListParamsType } from './article.d';

const cardPrefix = '/activity';

// 分页查询文章
export const getArticleList = (data: any) => {
  return request({
    url: `${cardPrefix}/infoArticle/searchByPage`,
    method: 'POST',
    data,
  });
};

// 查询所有标签
export const getAllLabelCategoryList = (data: any) => {
  return request({
    url: `${cardPrefix}/infoLabelCategory/queryAllList`,
    method: 'POST',
    data,
  });
};

// 查询文章详情
export const getArticleDetail = (data: any) => {
  return request({
    url: `${cardPrefix}/infoArticle/findDetailById`,
    method: 'POST',
    data,
  });
};

// 查询个人名片
export const getCardInfo = (data: any) => {
  return request({
    url: `${cardPrefix}/v1/vcard/queryUserVcard`,
    method: 'POST',
    data,
  });
};
// 查询访客名片
export const queryShareUserVcard = (data: any) => {
  return request({
    url: `${cardPrefix}/v1/vcard/queryShareUserVcard`,
    method: 'POST',
    data,
  });
};
// 查询产品
export const getProductList = (data: any) => {
  return request({
    url: `${cardPrefix}/queryProductList`,
    method: 'POST',
    data,
  });
};
// 查询产品标签
export const getProductCategory = (data: any) => {
  return request({
    url: `${cardPrefix}/queryTypeAndProductList`,
    method: 'POST',
    data,
  });
};
// 取消收藏，收藏
export const getCollect = (data: any) => {
  return request({
    url: `${cardPrefix}/infoArticle/collect`,
    method: 'POST',
    data,
  });
};
// 分享接口
export const getShare = (data: any) => {
  return request({
    url: `${cardPrefix}/infoArticle/share`,
    method: 'POST',
    data,
  });
};

// 查询访客
export const getVisitorList = (data: any) => {
  return request({
    url: `${cardPrefix}/infoArticle/searchVisitorByPage`,
    method: 'POST',
    data,
  });
};

// 查询我的收藏
export const getMyCollect = (data: any) => {
  return request({
    url: `${cardPrefix}/infoArticle/searchCollectByPage`,
    method: 'POST',
    data,
  });
};

// 查询我的分享
export const getShareList = (data: any) => {
  return request({
    url: `${cardPrefix}/infoArticle/searchShareByPage`,
    method: 'POST',
    data,
  });
};

// 查询我的分享的访问者
export const getMyShareVisitor = (data: any) => {
  return request({
    url: `${cardPrefix}/infoArticle/searchShareVisitorByPage`,
    method: 'POST',
    data,
  });
};

// 获取微信jstoken
export const getJssdkSignature = (data: any) => {
  return request({
    url: `${cardPrefix}/getJssdkSignature`,
    method: 'POST',
    data,
  });
};

// 测试登录功能 // 第三方登录重定向
export const login = (params: any) => {
  return request({
    url: `${cardPrefix}/thirdUserLogin`,
    method: 'GET',
    params,
  });
};

// 拼接分享后的rul
export const getUrl = (data: any) => {
  return request({
    url: `${cardPrefix}/generateShareUrl`,
    method: 'POST',
    data,
  });
};

// 记录访问时长
export const upDateTime = (data: any) => {
  return request({
    url: `${cardPrefix}/updateVisitorDate`,
    method: 'POST',
    data,
  });
};

// 根据id查询文章详情预览
export const previewDetailById = (params: any) => {
  return request({
    url: `${cardPrefix}/infoArticle/previewDetailById`,
    method: 'GET',
    params,
  });
};

// 根据id查询素材详情预览
export const previewSourceDetailById = (params: any) => {
  return request({
    url: `${cardPrefix}/infoCrawlerArticle/previewDetailById`,
    method: 'GET',
    params,
  });
};
