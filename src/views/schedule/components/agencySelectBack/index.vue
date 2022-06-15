<template>
  <!--
    主要功能：
    1、选中上级，下级全部勾选
    2、取消上级，下级全部取消
    3、下级选中，上级半选，如果下级全部选中，上级全选
    4、下级取消，上级半选，如果下级全部取消，上级也取消
    问题：
    1、搜索出来的数据选中后，确定，再次打开默认最高层级，无法做勾选
  -->
  <van-popup
    :show="visible"
    round
    position="bottom"
    :style="{ height: '70%' }"
    closeable
    @click-close-icon="handleClose"
  >
    <div class="com-pop-select">
      <div class="title">
        搜索
        <div class="back-icon">
          <div v-if="agencyIdList.length > 0" class="back-icon-left" @click="handleBackIconClick">
            <img :src="backImg" alt="" />
            <span>上一级</span>
          </div>
          <div v-if="select.length > 0" class="back-icon-right" @click="onClearSelect">清空</div>
        </div>
      </div>
      <div class="search">
        <van-search
          v-model="search"
          shape="round"
          clearable
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @clear="onClear"
        />
      </div>
      <div class="cell-list">
        <van-checkbox-group v-if="dataSource.length > 0" v-model="select">
          <van-cell-group inset>
            {{ select }}
            <van-cell v-for="(item, index) in dataSource" :key="index" class="cell" :clickable="false">
              <template #title>
                <van-checkbox :name="item.unionCode" :label-disabled="true" :class="selectType[item.unionCode]">
                  <div class="area-wrap" @click="item.hasChild && handleItemClick(item)">
                    <div>{{ item.agencyName }} - {{ selectType[item.unionCode] }}</div>
                    <van-icon v-if="item.hasChild" name="arrow" color="#DDDDDD" :style="{ marginRight: '15px' }" />
                  </div>
                </van-checkbox>
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
        <ZaEmpty
          v-if="!loading && dataSource.length === 0"
          :empty-img="emptyImg"
          title="没有找到相关信息~"
          empty-class="empty-select"
        />
      </div>
      <div class="footer">
        <van-button type="primary" class="btn" @click="handleSubmit">确定·已选0人</van-button>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import _ from 'lodash';
import { defineEmits, defineProps, ref } from 'vue';
import { Toast } from 'vant';
import { queryAgency, IAgency } from '@/api/modules/select';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import emptyImg from '@/assets/images/searchempty.png';
import backImg from '@/assets/images/back.png';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['on-submit', 'update:visible']);

const agencyIdList = ref<any>([]); // 层级
// const selectValue = ref<any[]>([]); // 选中的结构
const allDataSource = ref<IAgency[]>([]); // 所有查询的数据合集
const dataSource = ref<IAgency[]>([]); // 当前层级原始数据
const select = ref([]); // 选中的unionCode集合
const selectType = ref<any>({}); // unionCode半选/全选集合
const selectStructure = ref<any>({}); // 层级关系，下级都取消，父级也取消，下级都选中，父也选中
const search = ref(''); // 查询字符串
const loading = ref<boolean>(false);

const queryList = () => {
  loading.value = true;
  Toast.loading({});
  const { memberType = '', memberCode = '', unionCode = '' } = agencyIdList.value[agencyIdList.value.length - 1] || {};
  queryAgency({
    directLevel: 1,
    memberType,
    memberCode,
  })
    .then((res) => {
      const { status } = res;
      if (status === 200) {
        // 增加了唯一值
        const selectGroup: string[] = [];
        const newDateSource = res.data.data.map((x: any) => {
          selectGroup.push(`${x.agencyId}_${x.memberType}`);
          return {
            unionCode: `${x.agencyId}_${x.memberType}`,
            ...x,
          };
        });

        // 已经选中的agencyId，选中所有下级
        if (unionCode) {
          selectStructure.value = {
            [unionCode]: selectGroup,
          };
          const fatherType = selectType.value[unionCode] || '';
          if (fatherType === 'all') {
            const uniq = _.uniq(select.value.concat(selectGroup));
            select.value = uniq;
          } else if (fatherType === 'half') {
            console.log('父级半选');
          } else {
            select.value = select.value.filter((id: string) => !selectGroup.includes(id));
          }
        }

        dataSource.value = newDateSource;
        allDataSource.value = allDataSource.value.concat(newDateSource);
      }
    })
    .finally(() => {
      loading.value = false;
      Toast.clear();
    });
};

watch(
  () => props.visible,
  (val) => {
    if (val) {
      queryList();
    }
  },
);

watch(select, (newval, oldval) => {
  let newSelectId = newval;
  const type: any = {};
  newSelectId.forEach((code: string) => {
    type[code] = 'all';
  });

  // 父级unionCode
  const { unionCode = '' } = agencyIdList.value[agencyIdList.value.length - 1] || {};

  // 选中，有父级父选中
  if (newval.length > oldval.length && unionCode) {
    const selectAll = selectStructure.value[unionCode].every((code: string) => newSelectId.includes(code));

    if (!newSelectId.includes(unionCode)) {
      newSelectId.push(unionCode);
    }

    if (selectAll) {
      console.log('全部选中啦');
      type[unionCode] = 'all';
    } else {
      console.log('还没有全部选中');
      type[unionCode] = 'half';
    }
  }

  if (newval.length < oldval.length) {
    const diff = _.difference(oldval, newval);
    // 如果取消部分，父级置为半选
    // 都取消，父级也取消
    if (unionCode) {
      const cancelAll = selectStructure.value[unionCode].every((code) => !newSelectId.includes(code));
      if (cancelAll) {
        console.log('都取消啦！！！！！！');
        delete type[unionCode];
        newSelectId = newSelectId.filter((code: string) => code !== unionCode);
        select.value = newSelectId;
      } else {
        console.log('还没取消完？？？？？？？');
        type[unionCode] = 'half';
      }
    } else {
      // 没有父级
      const child = selectStructure.value[diff[0]];
      // 有孩子，孩子全部取消
      if (child) {
        console.log('子节点：', child);
        newSelectId = newSelectId.filter((code: string) => !child.includes(code));
        select.value = newSelectId;
        child.forEach((code: string) => delete type[code]);
      }
    }
  }

  selectType.value = type;
});

const handleItemClick = (item: IAgency) => {
  if (item.hasSubordinate) {
    const { memberType, memberCode } = item;
    agencyIdList.value.push({
      memberType,
      memberCode,
      unionCode: `${memberCode}_${memberType}`,
    });
    queryList();
  }
};

const onSearch = (e: string) => {
  agencyIdList.value = [];
  loading.value = true;
  queryAgency({
    directLevel: 1,
    keyword: e,
    memberType: e ? 'ALL' : '',
    memberCode: agencyIdList.value[agencyIdList.value.length - 1]?.memberCode,
  })
    .then((res) => {
      const { status } = res;
      if (status === 200) {
        const newDateSource = res.data.data.map((x: any) => {
          return {
            unionCode: `${x.agencyId}_${x.memberType}`,
            ...x,
          };
        });
        dataSource.value = newDateSource;
        allDataSource.value = allDataSource.value.concat(newDateSource);
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

const onClear = () => {
  queryList();
};

const handleClose = () => {
  search.value = '';
  emit('update:visible', false);
};

const onClearSelect = () => {
  select.value = [];
};

const handleBackIconClick = () => {
  if (agencyIdList.value.length > 0) {
    agencyIdList.value.pop();
    queryList();
  }
};
const handleSubmit = () => {
  const selectValue: any = [];
  select.value.forEach((unionCode: string) => {
    const data: any = allDataSource.value.find((x: IAgency) => x.unionCode === unionCode);
    data.selectType = selectType.value[unionCode];
    selectValue.push(data);
  });
  search.value = '';
  console.log('数据准备好了：');
  console.log(selectValue);
  emit('on-submit', selectValue);
  emit('update:visible', false);
};
</script>

<style lang="scss">
.com-pop-select {
  .empty-select {
    margin-top: 120px;
  }
  .van-checkbox__label {
    width: 100%;
  }
  .area-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    text-align: center;
    padding: 26px 0;
    font-size: $zaui-font-size-modal-title;
    line-height: 50px;
    font-weight: 500;
    color: #343434;
    border-bottom: 1px solid #f2f2f2;
    position: relative;
    .back-icon {
      position: absolute;
      left: 30px;
      line-height: 50px;
      top: 30px;
      display: flex;
      .back-icon-left {
        display: flex;
        align-items: center;
        img {
          width: 24px;
          height: 28px;
        }
        span {
          color: #616161;
        }
      }
      .back-icon-right {
        color: #616161;
        margin-left: 20px;
      }
    }
  }
  .van-cell-group--inset {
    margin: 0;
    margin-bottom: 200px;
  }
  .search {
    margin-top: 10px;
  }
  .cell-list {
    height: calc(70vh - 410px);
    max-height: calc(70vh - 410px);
    overflow: scroll;
  }
  .cell {
    padding: 30px 30px 30px 0;
    margin-left: 30px;
    // border-bottom: 2px solid #f2f2f2 !important;
    .van-radio__label {
      flex: 1;
    }
  }
  .half {
    .van-checkbox__icon .van-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .van-icon-success:before {
      content: '-';
    }
  }
  .footer {
    width: 100%;
    position: relative;
    height: 150px;
    padding: 30px;
    background: #ffffff;
    box-shadow: 0 -2px 10px 0 #f6f6f6;
    .btn {
      width: 100%;
      height: 88px;
      background: $btn-background;
      border-radius: 45px;
      display: block;
      margin: 0 auto;
      color: #ffffff;
    }
  }
  .empty {
    display: none;
    text-align: center;
    color: #969696;
    .img {
      width: 200px;
      height: 200px;
      margin: 200px 0 40px 0;
    }
  }
}
</style>
