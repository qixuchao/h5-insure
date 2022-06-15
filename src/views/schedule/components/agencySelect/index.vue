<template>
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
            <!-- <span>上一级</span> -->
          </div>
          <div v-if="select.length > 0" class="back-icon-right" @click="onClearSelect">清空</div>
        </div>
      </div>
      <div class="search">
        <van-search
          v-model="search"
          shape="round"
          :left-icon="getIconUrl('target.searchImg')"
          clearable
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @clear="onClear"
        />
      </div>
      <div class="cell-list">
        <van-checkbox-group v-if="dataSource.length > 0" v-model="select">
          <van-cell-group inset>
            <van-cell v-for="(item, index) in dataSource" :key="index" class="cell" :clickable="false">
              <template #title>
                <van-checkbox :name="item.unionCode" shape="square" :label-disabled="true">
                  <div class="area-wrap" @click="item.hasChild && handleItemClick(item)">
                    <div>{{ item.agencyName }}</div>
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
        <van-button type="primary" class="btn" @click="handleSubmit">确定·已选{{ memberNumberCount }}人</van-button>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import _ from 'lodash';
import { defineEmits, defineProps, ref } from 'vue';
import { queryAgency, queryAgencyUserCount, IAgency } from '@/api/modules/select';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import emptyImg from '@/assets/images/searchempty.png';
import backImg from '@/assets/images/back.png';
import './index.scss';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  selectValue: {
    type: Array as () => any[],
    default: () => [],
  },
});

const emit = defineEmits(['on-submit', 'update:visible']);

const agencyIdList = ref<any>([]); // 层级
const allDataSource = ref<IAgency[]>([]); // 所有查询的数据合集
const dataSource = ref<IAgency[]>([]); // 当前层级原始数据
const select = ref<Array<string>>([]); // 选中的unionCode集合
const search = ref<string>(''); // 查询字符串
const loading = ref<boolean>(false);
const memberNumberCount = ref<number>(0);

const queryList = () => {
  loading.value = true;
  const { memberType = '', memberCode = '' } = agencyIdList.value[agencyIdList.value.length - 1] || {};
  queryAgency({
    memberType,
    directLevel: 1,
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

        dataSource.value = newDateSource;
        allDataSource.value = allDataSource.value.concat(newDateSource);
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

watch(
  () => props.visible,
  (val) => {
    if (val) {
      select.value =
        props.selectValue.map((x: IAgency) => {
          return `${x.agencyId}_${x.memberType}`;
        }) || [];
      queryList();
    }
  },
);

watch(select, async (val) => {
  const codeList: any = [];
  val.forEach((code: string) => {
    const data = allDataSource.value.find((x: IAgency) => x.unionCode === code);

    if (data) {
      codeList.push({
        memberType: data.memberType,
        memberCode: data.memberCode,
      });
    }
  });

  const {
    data: { data },
  } = await queryAgencyUserCount({ codeList });
  memberNumberCount.value = data || 0;
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
    keyword: e,
    directLevel: 1,
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
    selectValue.push(data);
  });
  search.value = '';
  emit('on-submit', selectValue);
  emit('update:visible', false);
};
</script>
