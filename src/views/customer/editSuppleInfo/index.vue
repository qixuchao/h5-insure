<template>
  <div class="supple-info-edit">
    <van-form ref="formRef">
      <van-cell-group inset>
        <van-cell title="学历" is-link title-class="label" @click="select = true">
          <template #value>
            <span v-if="userInfo.EDUCATION.name" class="le">
              {{ userInfo.EDUCATION.name }}
            </span>
            <span v-else> 请选择学历 </span>
          </template>
        </van-cell>
        <van-field
          v-model="userInfo.PROFESSION"
          label="职业"
          label-class="label"
          input-align="right"
          :rules="[
            {
              validator: (val) => {
                if (val) {
                  return /^[\u4E00-\u9FA5]+$/.test(val);
                } else {
                  return true;
                }
              },
              trigger: 'onChange',
              message: '不能超过10个汉字',
            },
          ]"
          placeholder="请输入职业"
          maxlength="10"
        >
        </van-field>
        <van-field
          v-model="userInfo.YEAR_INCOME"
          label="年收入"
          placeholder="请输入年收入"
          label-class="label"
          input-align="right"
          type="number"
          maxlength="5"
        >
          <template #right-icon>
            <span class="le">万元</span>
          </template>
        </van-field>
        <van-cell title="婚姻状况" title-class="label">
          <template #value>
            <div class="f-select">
              <div class="m-box" :class="{ 'chekd-box': checked === '01' }" @click="handleClick('01')">已婚</div>
              <div class="m-box" :class="{ 'chekd-box': checked === '02' }" @click="handleClick('02')">未婚</div>
            </div>
          </template>
        </van-cell>
        <van-field
          v-model="userInfo.HEIGHT"
          label="身高"
          placeholder="请输入身高"
          label-class="label"
          input-align="right"
          type="digit"
          maxlength="3"
        >
          <template #right-icon>
            <span class="le">cm</span>
          </template>
        </van-field>
        <van-field
          v-model="userInfo.WEIGHT"
          label="体重"
          type="digit"
          maxlength="3"
          placeholder="请输入体重"
          label-class="label"
          input-align="right"
        >
          <template #right-icon>
            <span class="le">kg</span>
          </template>
        </van-field>

        <van-field
          v-model="userInfo.HOME_PHONE"
          label-class="label"
          label="家庭电话"
          input-align="right"
          placeholder="请输入家庭电话"
          type="digit"
          maxlength="12"
          @focus="handleFocus"
        />
        <van-field
          v-model="userInfo.COMPANY_PHONE"
          label-class="label"
          label="公司电话"
          input-align="right"
          placeholder="请输入公司电话"
          type="digit"
          maxlength="12"
          @focus="handleFocus"
        />

        <van-cell title="备注" title-class="label"></van-cell>
        <div class="sp-textarea">
          <van-field
            v-model="userInfo.REMARK"
            rows="3"
            autosize
            type="textarea"
            maxlength="100"
            placeholder="如有其他信息可备注此处，文字不超过100个字"
            show-word-limit
            @focus="handleFocus"
          />
        </div>
      </van-cell-group>

      <van-action-sheet
        v-model:show="select"
        :actions="actions"
        close-on-click-action
        cancel-text="取消"
        @select="onSelect"
      />

      <div v-resize class="footer">
        <van-button type="primary" class="btn1" @click="handleSave">保存</van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { searchCustomerDetail, saveExtendField } from '@/api/modules/customer';
import useCheckBack from '@/hooks/useCheckBack';

const formRef = ref();

const actions: { name: string; value: string }[] = [
  // {
  //   name: '博士',
  //   value: '01',
  // },
  {
    name: '研究生',
    value: '02',
  },
  {
    name: '本科',
    value: '03',
  },
  {
    name: '大专',
    value: '04',
  },
  {
    name: '高中',
    value: '05',
  },
  {
    name: '初中及以下',
    value: '06',
  },
];
const getName = (val: string) => {
  let name = '';
  actions.forEach((el) => {
    if (el.value === val) {
      name = el.name;
    }
  });
  return name;
};

const history = useRouter();
const route = useRoute();

const info = reactive({
  userInfo: {
    EDUCATION: {
      value: '',
      name: '',
    }, // 学历
    PROFESSION: '', // 职业
    YEAR_INCOME: '', // 年收入
    MARITAL_STATUS: '', // 婚姻
    HEIGHT: '', // 身高
    WEIGHT: '', // 体重
    HOME_PHONE: '', // 家庭电话
    COMPANY_PHONE: '', // 公司电话
    REMARK: '', // 备注
  },
});
useCheckBack(info);
const select = ref(false);
const checked = ref();
const { userInfo } = toRefs(info) as any;

const getData = async () => {
  console.log('>route', route.query);

  const res = await searchCustomerDetail({
    ...route.query,
    // customerId: '1',
    // customerType: '准客户',
    // userId: 'userid02071600',
    // tenantId: '0',
  });
  const { data } = res.data;
  if (data.fieldList) {
    data.fieldList.forEach((item: { code: string; value: string }) => {
      if (item.code === 'EDUCATION') {
        userInfo.value[item.code].value = item.value;
        userInfo.value[item.code].name = getName(item.value);
      } else {
        userInfo.value[item.code] = item.value;
      }
    });
  }
  useCheckBack(info);
  console.log('>>>>', data.fieldList);
};
const handleFocus = (e: any) => {
  setTimeout(() => {
    console.log(22);
    if (e.target) {
      e.target.scrollIntoView();
    }
  }, 200);
};
onMounted(() => {
  getData();
});

const onSelect = (val: { name: string; value: string }) => {
  console.log(val.name);
  userInfo.value.EDUCATION.name = val.name;
  userInfo.value.EDUCATION.value = val.value;
};
const handleClick = (flag: string) => {
  checked.value = flag;
};
const handleSave = async () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('>>>>>>>>', toRaw(userInfo.value));
      const data = toRaw(userInfo.value) as any;
      const list: { code: string; dictCode: string; value: any }[] = [];
      Object.keys(data).forEach((item) => {
        console.log('>>>>>');
        if (item === 'EDUCATION') {
          list.push({
            code: item,
            dictCode: 'EXTENDFIELD',
            value: data[item].value,
          });
        } else {
          list.push({
            code: item,
            dictCode: 'EXTENDFIELD',
            value: data[item],
          });
        }
      });
      console.log('>>>>>>', list);

      saveExtendField({
        ...route.query,
        extendFieldList: list,
      }).then((res) => {
        if (res.data.status === 200) {
          useCheckBack();
          Toast('保存成功');
          history.back();
        }
      });
    })
    .catch(() => {});
};
</script>

<style lang="scss" scoped>
::v-deep {
  .van-cell__right-icon {
    line-height: 50px;
    height: 50px;
    color: #dddddd;
  }
  .van-field__error-message {
    text-align: right;
  }
}
.supple-info-edit {
  padding-bottom: 180px;

  .van-cell {
    font-size: $zaui-font-size-lg;
    padding: 29px 30px;
    display: flex;
    align-items: center;
  }

  .label {
    color: #616161;
  }
  .line {
    display: inline-block;
    width: 8px;
    height: 28px;
    background: $primary-color;
    vertical-align: middle;
    margin-right: 16px;
  }
  input::placeholder {
    color: #bcbcbc;
  }
  .cell-val {
    color: #bcbcbc;
  }

  .copy {
    width: 36px;
    vertical-align: sub;
  }
  .star {
    color: $primary-color;
  }
  .le {
    color: #343434;
  }
  .van-cell-group--inset {
    margin: 0;
  }
  .footer {
    position: fixed;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: #ffffff;
    padding: 30px;
    // background-color: #fff;
    // position: fixed;
    // bottom: 0;
    // width: 100%;
    // height: 150px;
    // box-shadow: 0 -2px 10px 0 #f6f6f6;
    // border-radius: 2px;
    // display: flex;
    // align-items: center;
    // justify-content: space-around;
    // padding: 32px 0;
    // color: $primary-color;
    // border-top: 1px solid #f5f5f5;
    .btn1 {
      width: 690px;
      height: 90px;
      border-radius: 45px;
    }
    .btn-enable {
      width: 690px;
      height: 88px;
      // background: linear-gradient(90deg, #ff8383 0%, #ffb285 100%);
      border-radius: 44px;
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #ffffff;
      border: none;
    }
  }
  .f-select {
    display: flex;
    justify-content: space-between;
  }
  .m-box {
    width: 160px;
    height: 60px;
    border-radius: 8px;
    font-size: $zaui-font-size-lg;
    color: #bcbcbc;
    border: 2px solid #f5f5f5;
    // margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ig {
      width: 29px;
      height: 30px;
      fill: #ddd;
      height: 30px;
    }
  }
  .chekd-box {
    background: $primary-color;
    color: #fff;
  }
  .sp-textarea {
    border-radius: 8px;
    border: 2px solid #f5f5f5;
    margin: 0 30px;
    border-top: none;
    // margin-bottom: 150px;
  }
}
</style>
