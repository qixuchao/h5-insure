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

      if (materialList?.length) {
        const planData = (materialList || []).find((e: PlanInsureVO) => e.planCode === currentPlanCode || !e.planCode);

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
