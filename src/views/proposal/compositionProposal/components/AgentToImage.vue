<template>
  <div id="agent-to-img" class="agent-img">
    <div class="agent_info">
      <!-- <div class="title">个人信息</div> -->
      <img round class="agent_icon" :src="agent_img" />
      <div class="info">
        <div class="title">
          <span class="top-title">我的名片</span>
          <span class="sub-title">我是您的专属顾问，您可以通过以下信息简单</span>
          <span class="subb-title">个人信息</span>
        </div>
        <div class="info">
          <span class="info-title">姓名</span>
          <span class="info-value">{{ infos?.name || '' }}</span>
        </div>
        <div class="info">
          <span class="info-title">职位</span>
          <span class="info-value">{{ infos?.agentGradeName || '' }}</span>
        </div>
        <!-- <div class="info">
          <span class="info-title">职位</span>
          <span class="info-value">{{ infos?.name || '' }}</span>
        </div> -->
      </div>
      <div class="info">
        <span class="info-title-2">所属机构</span>
        <span class="info-value-2">{{ infos?.manageComName || '' }}</span>
      </div>
      <div class="info">
        <span class="info-title">工号</span>
        <span class="info-value">{{ infos?.agentCode || '' }}</span>
      </div>
      <div class="info">
        <span class="info-title-2">执业证号</span>
        <span class="info-value-2">{{ infos?.quafNo || '' }}</span>
      </div>
      <div class="info info-3">
        <span class="info-title-2">联系方式</span>
        <span class="info-value-2 info-value-3">{{ infos?.phone || '' }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="Benefit">
import { withDefaults } from 'vue';
import html2canvas from 'html2canvas';
import ProChart from '@/components/ProChart/index.vue';
import { fileUploadBase64 } from '@/api/modules/file';
import agent_img from '@/assets/images/compositionProposal/addver.png';

const props = defineProps({
  infos: {
    type: Array,
    default: () => [],
  },
});
const active = ref(0);
const ageBegin = ref(0);
const ageEnd = ref(0);
const benefitObj = ref(); // 利益演示结构
const showTablePopup = ref(true); // 利益演示结构
const num = ref(0);
const emits = defineEmits(['onUploadedAgentImg']);
// 展示类型
const showType = ref(props.showTypeList?.[0]);
const tableData = ref();
// 生成echarts图表
const handleCharts = () => {
  setTimeout(() => {
    const node = <HTMLElement>document.getElementById('agent-to-img');
    html2canvas(node, {
      useCORS: true,
      dpi: 400,
      height: document.getElementById('agent-to-img').clientHeight - 2,
      // canvas高度与所截图高度相同或者更小，解决底部白边问题
      width: document.getElementById('agent-to-img').clientWidth - 2,
    }).then(async (res) => {
      const chartsImg = res.toDataURL('image/png', 1);

      const res2 = await fileUploadBase64({ fileBase64: chartsImg, uploadType: '99' });
      const { url } = res2.data;

      emits('onUploadedAgentImg', { imgUrl: url });
    });
  }, 1000);
};

const renderArray = (start: number, end: number) => {
  const a = [];
  const year = [];
  for (let i = start, j = 0; i <= end; i++, j++) {
    a.push(i.toString());
    year.push(j + 1);
  }
  return { a, year };
};

const setAge = (realData: any) => {
  if (!realData?.benefitRiskResultVOList) return;
  const benefit = realData?.benefitRiskResultVOList[active.value];
  ageBegin.value = benefit.ageBegin + 1;
  num.value = benefit.ageBegin + 1;
  ageEnd.value = benefit.ageEnd;
};

const getData = () => {
  // 根据num 取对应数组的值
  const benefit = props.dataSource?.benefitRiskResultVOList?.[active.value];
  tableData.value = props.dataSource?.benefitRiskResultVOList?.[active.value].benefitRiskTableResultVOList?.[0];
  // a 年龄数组
  const { a, year } = renderArray(ageBegin.value, ageEnd.value);
  const obj = {
    index: a.indexOf(num.value.toString()),
    age: a,
    year,
    result: benefit?.benefitRiskItemResultVOList?.[0],
  };

  benefitObj.value = obj;
};

watch(
  () => props.dataSource,
  (val) => {
    if (val) {
      setAge(val);
      getData();
      showType.value = val.showTypeList?.[0];
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(num, () => {
  getData();
});

onMounted(() => {
  handleCharts();
});
</script>

<style lang="scss" scoped>
.agent-img {
  padding-top: 160px;
  margin-bottom: 10px;
  background-color: #fff;
  background-image: url('@/assets/images/compositionProposal/agent-backgroud1.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
}
.info-title {
  margin-left: 77px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #999999;
  line-height: 20px;
  letter-spacing: 27px;
}
.info-title-2 {
  @extend .info-title;

  letter-spacing: 0px;
}
.info-value {
  width: 70px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  line-height: 20px;
}
.info-value-2 {
  width: 70px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  line-height: 20px;
  margin-left: 26px;
}
.info-3 {
  padding-bottom: 90px;
}
.agent_icon {
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-right: 26px;
  margin-left: 77px;
  margin-top: 21px;
}
.agent-tel {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  position: absolute;
  right: 30px;
}
.agent-tel-img {
  width: 60px;
  height: 60px;
  border-radius: 60px;
}
.agent_info {
}
.agent-name {
  font-size: 28px;
  font-weight: 600;
  color: #333333;
  line-height: 40px;
  margin-bottom: 2px;
  display: block;
}
.agent-company {
  font-size: 24px;
  font-weight: 500;
  color: #333333;
  line-height: 36px;
  margin-bottom: 4px;
  display: block;
}
.title {
  position: relative;
  .top-title {
    position: absolute;
    top: -208px;
    left: 80px;
    height: 25px;
    font-size: 18px;
    font-weight: 600;
    color: #333333;
    line-height: 25px;
    display: block;
  }
  .sub-title {
    position: absolute;
    top: -180px;
    left: 80px;
    // height: 18px;
    font-size: 13px;
    font-weight: 400;
    color: #393d46;
    line-height: 18px;
    display: block;
  }
  .subb-title {
    position: absolute;
    top: -106px;
    left: 80px;
    height: 20px;
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    line-height: 20px;
    display: block;
  }
}
</style>
