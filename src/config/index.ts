/*
 * @Description: 配置信息
 * @Autor: kevin.liang
 * @Date: 2022-10-11 14:52:20
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-11 15:52:05
 */

export default {
  xflow: {
    // 站点ID
    default: 'zhd5plfgd6wkzffy', // 默认值
    local: 'zhd5plfgd6wkzffy', // 本地环境
    prd: 'ciu0ivv8jm3jfc0n', // 生产环境
  },
  xflowServerUrl: {
    // 站点ID
    default: 'https://xflowcloud.zhongan.io/nginx/cloud_web_sdk.gif', // 默认值
    local: 'https://xflowcloud.zhongan.io/nginx/cloud_web_sdk.gif', // 本地环境
    prd: 'https://xflowcloud.zhongan.io/nginx/cloud_web_sdk.gif', // 生产环境
  },
  isee: {
    default: 'https://plugins.ennejb.cn/eye.js', // 默认值
    local: 'https://staticdaily.zhongan.com/website/isee-poc/eye.js', // 本地环境
    test: 'https://plugins-tst.ennejb.cn/eye.js', // 本地环境
    prd: 'https://plugins.ennejb.cn/eye.js', // 生产环境
  },
};
