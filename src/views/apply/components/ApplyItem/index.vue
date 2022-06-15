<template>
  <ZaPageWrap main-class="page-card">
    <div className="com-card-apply">
      <div class="apply-content-title">
        <van-cell-group>
          <van-cell title-class="label">
            <template #title>
              <img src="@/assets/images/apply/info.png" class="line" />
              <span class="custom-title-1">报名表预览</span>
            </template>
          </van-cell>
          <van-cell v-for="(item, key) in previewTags" :key="key" title-class="label">
            <template #title>
              <span class="custom-title">
                <span>{{ item.label }}</span>
                <span v-if="tagData[item.parentIndex].required" class="star">*</span>
                <van-tag v-if="item.componentType" type="primary" plain>{{ item.componentType }}</van-tag>
              </span>
            </template>
            <template #value>
              <div class="line-1">
                <van-checkbox v-model="tagData[item.parentIndex].required" shape="square">必填</van-checkbox>
                <img src="@/assets/images/apply/close.png" class="line-img" @click="handleDelete(item)" />
                <img
                  v-if="key !== 0"
                  src="@/assets/images/apply/up.png"
                  class="line-img"
                  @click="handleUp(item, key)"
                />
                <span v-else class="line-img"></span>
              </div>
            </template>
          </van-cell>
        </van-cell-group>
        <div className="submit-btn-1">
          <van-button round block type="primary" @click="handleSave"> 确定 </van-button>
        </div>
      </div>
      <div class="apply-tags">
        <div class="tag-header">
          <span class="custom-title-1">增加表单项</span>
        </div>
        <div class="tag-container">
          <div v-for="(item, key) in tagData" :key="key" class="tag-item">
            <span @click="handleAdd(item, key)">{{ item.label }}</span>
            <img
              v-if="item.type !== 'system'"
              src="@/assets/images/apply/delete.png"
              class="del-img"
              @click.stop="handleDeleteTag(item)"
            />
          </div>
        </div>
        <div v-if="tagData.length < 15" class="tag-bottom" @click.stop="show = true">
          <img src="@/assets/images/apply/add.png" class="add-line" />
          <span>添加自定义</span>
        </div>
      </div>
      <div className="com-card-skill-edit">
        <van-popup v-model:show="show" round position="bottom" closeable @click-close-icon="show = false">
          <div class="skill-popup">
            <div class="popup-title">添加自定义</div>
            <div>
              <div class="skill-add">
                <van-field
                  v-model="customTag.label"
                  maxlength="6"
                  label-class="label"
                  input-align="right"
                  placeholder="请输入"
                >
                  <template #label>
                    <span>
                      <span class="custom-title">填写项名称<span class="star">*</span> </span>
                    </span>
                  </template>
                </van-field>

                <van-cell class="f-select-wrapper" title-class="label">
                  <template #title>
                    <span class="custom-title">填写项类型<span class="star">*</span> </span>
                  </template>
                  <template #value>
                    <div class="f-select">
                      <div
                        v-for="item in list"
                        :key="item.value"
                        class="m-box"
                        :class="{ active: customTag.type.value === item.value }"
                        @click="handleClick(item)"
                      >
                        <span>{{ item.label }}</span>
                      </div>
                    </div>
                    <div v-if="customTag.type.value === '单行'" class="desc">最多支持15个字，比如地址、号码</div>
                    <div v-if="customTag.type.value === '多行'" class="desc">最多支持30个字，比如备注、详细介绍</div>
                    <div v-if="customTag.type.value === '图片'" class="desc">最多支持3张图片上传</div>
                  </template>
                </van-cell>
              </div>
            </div>
            <div v-resize className="submit-btn">
              <van-button round block type="primary" @click="handleSaveItem"> 确定 </van-button>
            </div>
          </div>
        </van-popup>
      </div>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast, Dialog } from 'vant';
import { cloneDeep, isEmpty, maxBy } from 'lodash';

const list = [
  {
    label: '单行输入',
    value: '单行',
  },
  {
    label: '多行输入',
    value: '多行',
  },
  {
    label: '图片文件',
    value: '图片',
  },
];

const customTag = reactive({ label: '', type: '' });

const initTag = JSON.parse(sessionStorage.getItem('columnDTOS')) || [
  {
    label: '姓名',
    // disabledDel: true,
    type: 'system',
    required: true,
    isSelected: 'Y',
    rank: 1,
  },
  {
    label: '手机号',
    type: 'system',
    required: true,
    isSelected: 'Y',
    rank: 2,
  },
  {
    label: '微信号',
    type: 'system',
    required: false,
  },
  {
    label: '身份证号',
    required: false,

    type: 'system',
  },
];

const tagData = ref(initTag);

const show = ref();

const handleClick = (val) => {
  customTag.type = val;
};

const previewTags = computed(() => {
  const tags = [];
  tagData.value.forEach((item, index) => {
    if (item.isSelected === 'Y') {
      tags.push({ ...item, parentIndex: index });
    }
  });

  return tags.sort((a, b) => a.rank - b.rank);
  // return tagData.value.filter((item) => ).sort((a, b) => a.rank - b.rank);
});
const maxRank = computed(() => {
  const max = maxBy(previewTags.value, (o) => {
    return o.rank;
  });
  return max.rank || 0;
});
const handleAdd = (val, key) => {
  if (tagData.value[key].isSelected !== 'Y') {
    tagData.value[key].isSelected = 'Y';
    tagData.value[key].rank = maxRank.value + 1;
  }
};
const handleDelete = (val) => {
  // const key = tagData.value.findIndex((item) => item.label === val.label);
  tagData.value[val.parentIndex].isSelected = 'N';
  tagData.value[val.parentIndex].rank = 0;
};
const handleUp = (val, index) => {
  const tag = tagData.value[val.parentIndex];
  const preTag = previewTags.value[index - 1];
  tagData.value[val.parentIndex] = { ...tagData.value[val.parentIndex], rank: preTag.rank };
  tagData.value[preTag.parentIndex] = { ...tagData.value[preTag.parentIndex], rank: tag.rank };
};
const handleDeleteTag = (val) => {
  Dialog.confirm({
    message: '确认要删除该字段吗，删除后不可恢复，但不影响历史活动数据',
    confirmButtonText: '删除',
    closeOnPopstate: false,
  }).then(() => {
    tagData.value = tagData.value.filter((item) => item.label !== val.label);
  });
};
const history = useRouter();

const handleSave = () => {
  if (previewTags.value.length > 0 && previewTags.value.findIndex((item) => item.required) > -1) {
    sessionStorage.setItem('columnDTOS', JSON.stringify(tagData.value));
    history.back();
  } else {
    Toast('至少要有一个必填项');
  }
};
const handleSaveItem = () => {
  if (isEmpty(customTag.label)) {
    Toast('填写项名称不能为空');
    return;
  }
  if (isEmpty(customTag.type)) {
    Toast('填写项类型不能为空');
    return;
  }
  if (tagData.value.findIndex((item) => item.label === customTag.label) > -1) {
    Toast(`标签已存在`);
    return;
  }
  tagData.value.push(cloneDeep(customTag));
  customTag.type = '';
  customTag.label = '';
  show.value = false;
};

// 保存
</script>
<style lang="scss" scoped>
.com-card-apply {
  .desc {
    text-align: left;
    font-size: 24px;
    font-weight: 400;
    margin-top: 16px;
    color: #bcbcbc;
  }
  .van-tag--plain {
    margin-left: 24px;
  }
  .apply-tags {
    padding: 80px 30px;
    .tag-header {
      width: 750px;
      height: 91px;
      background: #ffffff;
    }
    .tag-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .tag-item {
        font-size: 30px;
        font-weight: 400;
        color: #ff2b1f;
        line-height: 58px;
        padding: 0px 18px;
        height: 60px;
        background: #ffffff;
        border-radius: 8px;
        border: 1px solid #ff2b1f;
        margin-right: 20px;
        margin-bottom: 20px;
        .del-img {
          width: 16px;
          height: 16px;
          margin-left: 30px;
        }
      }
    }
    .tag-bottom {
      font-size: 28px;
      width: 200px;
      font-weight: 400;
      color: #ff2b1f;
      line-height: 40px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      .add-line {
        width: 32px;
        height: 34px;
        margin-right: 12px;
      }
    }
  }
  .custom-title-1 {
    font-size: 30px;
    font-weight: 600;
    color: #343434;
  }
  .apply-content-title {
    .submit-btn-1 {
      padding: 30px 40px;
    }
    .label {
      color: #616161;
    }
    .value {
      color: #343434;
    }
    .line {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      vertical-align: text-top;
    }
    .line-1 {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ::v-deep .van-checkbox {
        font-size: 30px;
        font-weight: 400;
        color: #343434;
      }
      .line-img {
        width: 33px;
        height: 33px;
        margin-left: 30px;
      }
    }
    input::placeholder {
      color: #bcbcbc;
    }
    .cell-val {
      color: #bcbcbc;
      font-size: 30px;
    }

    .copy {
      width: 36px;
      vertical-align: sub;
    }
  }
  .star {
    color: $primary-color;
  }
  .com-card-skill-edit {
    .van-popup__close-icon {
      font-size: $zaui-font-size-lg;
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
      .skill-add {
        .f-select-wrapper {
          display: block;

          .f-select {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
          }

          .m-box {
            width: 216px;
            height: 72px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #d6d6d6;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .active {
            background: linear-gradient(90deg, #f70800 0%, #ff5003 100%);
            color: #fff;
            border: none;
          }
        }
      }
    }

    .submit-btn {
      position: fixed;
      width: 100%;
      padding: 30px;
      bottom: 15px;
    }
  }
}
</style>
