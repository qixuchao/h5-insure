<template>
  <div class="recommend">
    <p class="title">
      推荐待跟进客户
      <span @click="handleClose">
        <van-icon name="cross" color="#999999" />
      </span>
    </p>
    <div class="dec">
      <div class="dp">
        <img :src="getIconUrl('customer.qa')" alt="" />
        <p>您近期跟进过以下客户，是否需要导入待跟进客户列表，以便更好开发？</p>
      </div>

      <div class="sub">
        <p>待跟进客户列表会推荐导入30天内有活动记录的客户，并会移除开发成功的客户或30内未联系的客户。</p>
      </div>
    </div>

    <div>
      <van-cell-group :border="false">
        <van-checkbox-group ref="checkboxGroup" v-model="checked">
          <van-cell v-for="(item, key) in list" :key="key">
            <template #title>
              <van-checkbox :name="item" shape="square">
                <div class="com-dp">
                  <img
                    :src="
                      item.sex
                        ? item.sex === 'F'
                          ? getIconUrl('customer.female')
                          : getIconUrl('customer.male')
                        : getIconUrl('customer.defaultGender')
                    "
                    alt=""
                    class="ch-icon"
                  />
                  <span class="name"> {{ item.customerName }} </span>
                  <span v-if="item.visitType === '转介绍'" class="icon icon-bg1">{{ item.visitType }}</span>
                  <span v-if="item.visitType === '接触面谈'" class="icon icon-bg2">{{ item.visitType }}</span>
                  <span v-if="item.visitType === '客户获取'" class="icon icon-bg3">{{ item.visitType }}</span>
                  <span v-if="item.visitType === '需求分析'" class="icon icon-bg6">{{ item.visitType }}</span>
                  <span v-if="item.visitType === '电话邀约'" class="icon icon-bg5">{{ item.visitType }}</span>
                  <span v-if="item.visitType === '呈现促成'" class="icon icon-bg6">{{ item.visitType }}</span>
                  <span v-if="item.visitType === '保单服务'" class="icon icon-bg4">{{ item.visitType }}</span>
                </div>
              </van-checkbox>
            </template>
          </van-cell>
        </van-checkbox-group>
      </van-cell-group>
    </div>

    <div class="footer">
      <div class="btn-za">
        <div class="all" @click="checkAll">
          <van-checkbox name="C" shape="square" :checked="isCheckAll"> {{ isCheckAll ? '取消' : '全选' }}</van-checkbox>
        </div>
        <van-button class="btn-a" type="primary" :block="true" @click="handleSubmit">
          确定·已选{{ checked.length }}人</van-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useThemesStore } from '@/store/themes';

defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const { getIconUrl } = useThemesStore();
const checked = ref([]);
const checkboxGroup = ref();
const isCheckAll = ref(false);
const emit = defineEmits(['on-submit', 'on-close']);

const checkAll = () => {
  isCheckAll.value = !isCheckAll.value;
  checkboxGroup.value.toggleAll(isCheckAll.value);
};

const handleClose = () => {
  emit('on-close');
  setTimeout(() => {
    checked.value = [];
  }, 1000);
};

const handleSubmit = () => {
  emit('on-submit', toRaw(checked.value));
  setTimeout(() => {
    checked.value = [];
  }, 1000);
};
</script>

<style lang="scss" scoped>
.icon {
  margin-left: 10px;
  padding: 5px 12px;
  font-size: 22px;
  text-align: center;
  border-radius: 8px;
  &-bg1 {
    color: $primary-color;
    background: rgba(255, 43, 31, 0.08);
  }
  &-bg2 {
    color: #ff6600;
    background: #ffeee7;
  }
  &-bg3 {
    background-color: rgba(115, 76, 255, 0.1);
    color: #947fe1;
  }
  &-bg4 {
    background: rgba(27, 205, 145, 0.1);
    color: #1bcd91;
  }
  &-bg5 {
    color: #ff8d1e;
    background: rgba(255, 141, 30, 0.1);
  }
  &-bg6 {
    color: #00afff;
    background: rgba(0, 175, 255, 0.08);
  }
}
.van-popup {
  border-radius: 20px 20px 0 0;
}
.recommend {
  width: 100%;
  background-color: #f6f6fa;
  border-radius: 20px 20px 0 0;
  // checkbox 样式覆盖
  .van-checkbox__icon {
    height: 28px;
    line-height: 28px;
  }
  .van-checkbox__icon .van-icon {
    width: 28px;
    height: 28px;
    border-color: #dedede;
  }
  .van-icon-success:before {
    // font-size: 10px;
    line-height: 100%;
  }

  .title {
    position: relative;
    padding: 32px;
    color: #343434;
    font-weight: 500;
    font-size: 36px;
    text-align: center;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;
    span {
      position: absolute;
      top: 30px;
      right: 40px;
      display: inline-block;
      font-size: 42px;
    }
  }

  .dec {
    background-color: #fff;
    padding: 28px;
    color: #616161;
    font-weight: 500;
    font-size: $zaui-font-size-lg;
    margin-bottom: 20px;
    img {
      width: 42px;
      margin-top: 8px;
      margin-right: 8px;
    }
    .dp {
      display: flex;
      align-items: flex-start;
      font-size: $zaui-font-size-md;
      line-height: 40px;
    }
    .sub {
      margin-top: 12px;
      color: #b38e57;
      font-size: $zaui-font-size-sm;
      margin-left: 45px;
      // margin-right: 30px;
      background: #faf6f0;
      border-radius: 6px 100px 100px 100px;
      padding: 16px 43px 16px 40px;
    }
  }
  .com-dp {
    display: flex;
    align-items: center;
    .name {
      margin: 0 20px 0 30px;
    }
  }
  .ch-icon {
    width: 88px;
    height: 88px;
  }

  .tag {
    padding: 0 12px;
    color: $primary-color;
    font-size: $zaui-font-size-sm;
    background: rgba(255, 43, 31, 0.08);
    border-radius: 8px;
  }
  .footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
    .btn-za {
      margin: 20px 0px;
      padding: 0 30px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn-a {
        height: 90px;
        flex: 1;
        margin-left: 25px;
        background: $btn-background;
        border-radius: 45px;
        border: none;
        color: #fff;
      }
      .all {
        font-size: $zaui-font-size-lg;
        color: #616161;
        white-space: nowrap;
      }
    }
  }
}
</style>
