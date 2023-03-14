/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2023-03-14 11:21:59
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2023-03-14 14:21:31
 * @FilePath: /zat-planet-h5-cloud-insure/src/hooks/useAttachment.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, watch } from 'vue';
import { PlanInsureVO, AttachmentVOList } from '@/api/modules/product.data';
import { getFileType } from '@/views/baseInsurance/utils';
import { YES_NO_ENUM } from '@/common/constants';

export default (planObject, productMaterialList) => {
  const fileList = ref([]); // 产品下所有资料
  const mustReadFileCount = ref(0); // 强制阅读的资料
  const popupFileList = ref([]);

  watch(
    [() => planObject.value?.planCode, () => productMaterialList.value],

    ([currentPlanCode, materialList]) => {
      let tempList: any = null;

      if (currentPlanCode && materialList?.length) {
        const planData = (materialList || []).find((e: PlanInsureVO) => e.planCode === (currentPlanCode || ''));
        if (planData) {
          tempList = planData?.productMaterialMap;
        }
      }

      if (!tempList) {
        fileList.value = [];
        return;
      }

      fileList.value = Object.keys(tempList).map((e) => {
        const materialTabList = tempList[e].map((attachmentItem) => {
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

      // 弹窗展示的文件
      popupFileList.value = fileList.value
        .map((fieldList) => {
          return {
            attachmentName: fieldList.attachmentName,
            attachmentList: fieldList.attachmentList.filter((field) => field.popUpFlag === YES_NO_ENUM.YES),
          };
        })
        .filter((fieldList) => fieldList.attachmentList.length);

      // 获取强制阅读文件
      mustReadFileCount.value =
        popupFileList.value
          .map((fieldList) => {
            return {
              attachmentName: fieldList.attachmentName,
              attachmentList: fieldList.attachmentList.filter((field) => field.mustReadFlag === YES_NO_ENUM.YES),
            };
          })
          .filter((fieldList) => fieldList.attachmentList.length).length || 0;
    },
    {
      deep: true,
      immediate: true,
    },
  );

  return {
    fileList,
    popupFileList,
    mustReadFileCount,
  };
};
