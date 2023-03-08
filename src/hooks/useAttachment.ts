import { ref, watch } from 'vue';
import { PlanInsureVO, AttachmentVOList } from '@/api/modules/product.data';
import { getFileType } from '@/views/baseInsurance/utils';
import { YES_NO_ENUM } from '@/common/constants';

export default (planCode, tenantProductInfo) => {
  const fileList = ref([]); // 产品下所有资料
  const mustReadFileList = ref([]); // 强制阅读的资料

  watch(
    [() => planCode.value, () => tenantProductInfo.value],

    ([currentPlanCode, tenantProductDetail]) => {
      let tempList: any = null;

      if (currentPlanCode && tenantProductDetail) {
        const planData = (tenantProductDetail?.tenantProductInsureVO.planList || []).find(
          (e: PlanInsureVO) => e.planCode === (currentPlanCode || ''),
        );
        if (planData) {
          tempList = planData?.attachmentVOList;
        }
      } else if (tenantProductDetail) {
        tempList = tenantProductDetail?.tenantProductInsureVO.planInsureVO.attachmentVOList;
      }

      if (!tempList) {
        fileList.value = [];
        return;
      }

      fileList.value = Object.keys(tempList).map((e) => {
        tempList[e].forEach((attachmentItem: AttachmentVOList) => {
          // eslint-disable-next-line no-param-reassign
          attachmentItem.attachmentType = getFileType(
            String(attachmentItem.attachmentType),
            attachmentItem.attachmentUri,
          );
        });
        return {
          attachmentName: e,
          attachmentList: tempList[e],
        };
      });

      // 强制阅读的文件
      mustReadFileList.value = fileList.value
        .map((fieldList) => {
          return {
            attachmentName: fieldList.attachmentName,
            attachmentList: fieldList.attachmentList.filter((field) => field.mustReadFlag === YES_NO_ENUM.YES),
          };
        })
        .filter((fieldList) => fieldList.attachmentList.length);
    },
    {
      deep: true,
      immediate: true,
    },
  );

  return {
    fileList,
    mustReadFileList,
  };
};
