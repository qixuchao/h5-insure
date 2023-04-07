// 这一段定制逻辑 华润华瑞两个公司用
const initCompanyIds = () => {
  const map = new Map();
  const nameMapIds = [
    { name: '华瑞', ids: [100039, 8200000010] },
    { name: '华润', ids: [9991000001] },
  ];
  nameMapIds.forEach((nameItem) => {
    nameItem.ids.forEach((id) => {
      map.set(id, nameItem.name);
    });
  });
  return map;
};
/**
 * 这个方法是根据租户ID返回一段声明文字（租户不同）
 * @param tId 租户ID
 */
export const useCustomStatement = (tId: string | number) => {
  const nameIdMap = initCompanyIds();
  const name = nameIdMap.get(+tId);
  return name ? `本产品由${name}保险销售有限公司销售本页面仅做产品展示，具体承保方案以实际保单约定为准` : '';
};

export default {
  useCustomStatement,
};
