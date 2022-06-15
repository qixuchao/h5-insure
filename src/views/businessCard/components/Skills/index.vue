/* eslint-disable consistent-return */
<template>
  <div v-if="!(share && info && info.length == 0)" className="com-card-skills">
    <div>
      <div className="skills-content-title">
        <img src="@/assets/images/card/skill-icon.png" alt="" class="skill-icon-left" />
        <img src="@/assets/images/card/skills-tilte.png" alt="" class="skills-icon-title" />
        <img v-if="share" src="@/assets/images/card/skills-share.png" alt="" className="skills-share-bg" />
        <!-- </div> -->
        <div v-if="info && info.length > 0 && !share" className="edit-area" @click="handleEdit(true)">
          <div>
            <img src="@/assets/images/card/skill-edit.png" alt="" className="skill-icon-edit" />
            <span>编辑</span>
          </div>
        </div>
      </div>
      <div v-if="info && info.length > 0" className="content-items">
        <div v-for="(item, index) in info" :key="index" className="content-item">
          <div>{{ item.name }}</div>
        </div>
      </div>
      <div v-else className="card-no-content">
        <div className="skills-card skills-empty">
          <div v-if="!share" className="skills-add" @click="handleEdit(true)">
            <span className="iconfont primary icon-add-circle" />
            添加擅长领域
          </div>
          <div className="skills-add-text">- 通过专业度吸引潜在客户 -</div>
        </div>
      </div>
    </div>
    <!-- <SkillEdit v-show="show" v-model:show="show" :info="info" @byVal="byVal" @updateShow="updateShow" /> -->

    <div className="com-card-skill-edit">
      <!-- <van-popup :show="show" round position="bottom" :style="{ height: '70%' }" -->
      <van-popup :show="show" round position="bottom" closeable @close="onClose" @click-close-icon="handleColse">
        <div class="skill-popup">
          <!-- activeDictList:{{ activeDictList }} -->
          <div class="popup-title">擅长领域</div>
          <div>
            <div class="skill-btns">
              <div
                v-for="(item, index) in activeDictList"
                :key="index"
                class="skill-item"
                :class="{
                  active: item.choose,
                }"
                @click="handleItemClick(item, index)"
              >
                <div class="">{{ item.name }}</div>
              </div>
            </div>
            <!-- {{ customList }} -->
            <div class="skill-add">
              <div v-for="(item, index) in customList" :key="index" class="skill-item" :class="{ active: item.choose }">
                <!-- <van-field placeholder="请输⼊擅⻓领域，限10个字" value="item.name" /> -->

                <van-field
                  v-model="item.name"
                  maxlength="10"
                  placeholder="请输⼊擅⻓领域，限10个字"
                  @update:model-value="changeContent"
                />
                <img src="@/assets/images/card/del-2.png" className="image-del" alt="" @click="handleDelete(index)" />
              </div>

              <div v-if="customList.length < 3">
                <div ref="dom" className="add-text" @click="handleAdd">
                  <span className="primary add-text-1">+ 我要自定义</span>
                  <span className="add-text-tip">（还可加{{ 3 - customList.length }}项）</span>
                </div>
              </div>
            </div>
          </div>
          <div v-resize className="submit-btn">
            <van-button round block type="primary" class="skill-btn-sub" @click="handleSave"> 确定 </van-button>
          </div>
        </div>
      </van-popup>
    </div>
    <!-- <van-popup v-model:show="show" round position="bottom" :style="{ height: '30%' }" /> -->
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults } from 'vue';
import { Toast } from 'vant';
import { toRaw } from '@vue/reactivity';
import { querySingleList, savePersonalExpertise, queryUserVcard } from '@/api/modules/businessCard';
import SkillEdit from './components/SkillEdit/index.vue';

interface SkillProps {
  info: string[];
  show: boolean;
  share: boolean;
}
interface LabelItem {
  expertiseField: string;
  choose?: false;
  id: number;
}
const props = withDefaults(defineProps<SkillProps>(), {
  show: false,
  share: false,
  info: [] as any,
});
console.log('11~1111', props);
const state = reactive({
  show: false,
});
const { show } = toRefs(state);
const { info } = toRefs(props);
const activeDict = ref([]) as any;
const customList = ref([]) as any;
const dictList = ref<any[]>([]);
const dom = ref<HTMLElement | null>(null);

const handleEdit = (flag: boolean) => {
  show.value = flag;
};

const handleColse = () => {
  show.value = false;
};
watch(
  () => info,
  (newVal, oldVal) => {
    // eslint-disable-next-line prefer-destructuring
    activeDict.value = info.value.filter((item) => item.type === 'DICT');
    customList.value = info.value.filter((item) => item.type === 'CUSTOM');
  },
  {
    immediate: true,
    deep: true,
  },
);
// const handleFocus = () => {
//   debugger;
//   setTimeout(() => {
//     if (dom.value) {
//       const { top } = dom.value.getBoundingClientRect();
//       console.log(top);
//       const container = document.querySelector('.van-popup');
//       if (container) {
//         container.scrollTop += top;
//       }
//     }
//   }, 500);
// };

const activeDictList = computed(() => {
  console.log('dictList', dictList.value);
  console.log('info', info.value);
  // eslint-disable-next-line array-callback-return
  dictList.value.forEach((item: any, index) => {
    info.value
      .filter((r) => r.type === 'DICT')
      // eslint-disable-next-line consistent-return
      .forEach((rr: any) => {
        if (item.name === rr.name) {
          dictList.value[index] = {
            ...dictList.value[index],
            choose: true,
          };
          // } else {
          //   dictList.value[index] = {
          //     ...dictList.value[index],
          //     choose: false,
          //   };
        }
        return dictList;
      });
  });

  return dictList.value;
});
const getData = async () => {
  const res = await querySingleList({ dictCode: 'VCARD_EXPERTISE' });
  const { status, data } = res.data;
  console.log('data', data);
  data.forEach((item: any) => {
    dictList.value.push({
      name: item.itemName,
      type: 'DICT',
    });
  });
};
const handleItemClick = (chooseItem: any, index: number) => {
  let isChoose = false;
  activeDict.value.some((item: any) => {
    if (item.name === chooseItem.name && chooseItem.choose) {
      isChoose = true;
      return true;
    }
    return false;
  });
  if (!isChoose) {
    dictList.value[index].choose = true;
    activeDict.value.push(chooseItem);
  } else {
    dictList.value[index].choose = false;
    activeDict.value = activeDict.value.filter((item: any) => +item.name !== +chooseItem.name);
  }
};

const handleAdd = (val: any) => {
  customList.value = [...customList.value, { type: 'CUSTOM', name: '' }];
};
const handleDelete = (index: number) => {
  customList.value.splice(index, 1);

  setTimeout(() => {}, 300);
};
const changeContent = (val: any) => {
  console.log(val);
};

// 获取name属性集合
const getAttrs = (array: any, attr: any) => {
  const arr = array.map((item: any) => {
    return item[attr];
  });
  return arr;
};

const emit = defineEmits(['updateFields']);
// 保存
const handleSave = async () => {
  const nameList = [
    ...getAttrs(customList.value, 'name'),
    ...getAttrs(
      activeDictList.value.filter((x) => x.choose),
      'name',
    ),
  ];
  const checkList = new Set(nameList);
  // 判断是否有为空的自定义数组
  let emptyFlag = false;
  console.log(customList);
  customList.value.forEach((item: any) => {
    if (!item.name.trim() || item.name.trim().length === 0) {
      emptyFlag = true;
    }
  });
  if (emptyFlag) {
    Toast('自定义擅长领域还没有输入哦～');
    return;
  }
  // 判断自定义数组是否和预置和输入的重复
  if (nameList.length === checkList.size) {
    const res = await savePersonalExpertise({ expertiseList: nameList });
    const { status } = res.data;
    if (status === 200) {
      Toast('保存成功！');
      show.value = false;
      emit('updateFields');
    }
  } else {
    Toast('标签已存在，无需重复创建');
  }
};
const onClose = () => {
  emit('updateFields');
};
onMounted(getData);
</script>
<style lang="scss" scoped>
.com-card-skills {
  padding: 30px 0px 20px 30px;
  margin-top: 31px;
  box-shadow: inset 0px 2px 0px 0px #ffffff;
  border-radius: 20px;
  background-image: url('@/assets/images/card/bg-comp1.png');
  background-position: center center;
  background-size: 100% 100%;
  .skills-content-title {
    display: flex;
    align-items: center;
    .skills-icon-title {
      margin-left: 20px;
      width: 120px;
      height: 31px;
    }
    .skills-share-bg {
      width: 114px;
      height: 92px;
      position: absolute;
      right: 30px;
    }
    // .title {
    //   display: flex;
    //   align-items: center;
    //   margin-left: 30px;
    //   font-size: $zaui-font-size-lg;
    //   font-weight: 600;
    //   color: #4f2003;
    //   line-height: 42px;
    //   background-image: -webkit-linear-gradient(bottom, #bd5b15, #572a0e);
    //   -webkit-background-clip: text;
    //   -webkit-text-fill-color: transparent;
    // }
    .skill-icon-left {
      width: 48px;
      height: 48px;
    }
    .edit-area {
      display: flex;
      align-items: center;
      position: absolute;
      background: #f2d6b7;
      border-radius: 40px;
      padding: 8px 16px;
      right: 60px;
      font-size: $zaui-font-size-md;
      color: #7c3c10;
      // line-height: 37px;
      height: 40px;
      margin-left: 7px;
      img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }
  }
  .content-items {
    width: 100%;
    margin-top: 15px;
    padding: 15px 0px 5px 0px;
    overflow: hidden;
    border-radius: 10px;

    .content-item {
      padding: 17px 26px 15px 17px;
      height: 60px;
      font-size: $zaui-font-size-md;
      font-weight: 400;
      color: #663b1e;
      line-height: 28px;
      background: linear-gradient(178deg, #faf6f0 0%, #f7e9db 100%);
      float: left;
      margin-right: 20px;
      margin-bottom: 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .card-no-content {
    .skills-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
    }
    .skills-add {
      padding: 21px 44px;
      font-size: $zaui-font-size-sm;
      color: #c98c88;
      line-height: 24px;
      background: #ffece3;
      border-radius: 34px;
      border: 1px solid #ff5342;
    }
    .skills-add-text {
      font-size: $zaui-font-size-md;
      font-weight: 400;
      color: #cb8f8b;
      line-height: 37px;
      margin-top: 14px;
      margin-bottom: 60px;
    }
  }
  .com-card-skill-edit {
    --van-popup-round-border-radius: 20px;
    .van-popup__close-icon {
      // --van-popup-close-icon-size: 43px;
      // font-size: $zaui-font-size-lg;
      padding: 0px 0px 32px 32px;
    }
    .van-field {
      font-size: $zaui-font-size-lg;
    }
    .skill-popup {
      height: 981px;
      .popup-title {
        font-size: $zaui-font-size-card-title;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 48px;
        margin: 28px 0;
        text-align: center;
      }

      .skill-btns {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
        margin: 45px 30px 20px 30px;
        .skill-item {
          font-size: $zaui-font-size-md;
          width: 216px;
          height: 72px;
          margin-bottom: 20px;
          color: #616161;
          line-height: 72px;
          text-align: center;
          background: #fff;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
        }
        .active {
          color: #fff;
          border: 2px solid $primary-color;
          background: $btn-background;
        }
      }
      .add-text {
        margin: 24px 0 0 30px;

        font-size: $zaui-font-size-md;
        color: $primary-color;
        .add-text-1 {
          font-size: $zaui-font-size-lg;
          font-weight: 400;
          line-height: 42px;
        }
        .add-text-tip {
          color: #bcbcbc;
          font-size: $zaui-font-size-md;
          line-height: 37px;
        }
      }
    }
    .image-del {
      position: absolute;
      width: 40px;
      height: 40px;
      right: 30px;

      margin-top: -64px;
    }
    .submit-btn {
      position: fixed;
      width: 100%;
      padding: 30px;
      bottom: 15px;
      .skill-btn-sub {
        height: 90px;
        ::v-deep .van-button__text {
          font-size: $zaui-font-size-modal-title;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
