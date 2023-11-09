<template>
  <div class="personal-wrap">
    <ProCard
      title="被保人信息"
      class="com-pro-form-with-card com-card-body-no-padding insure-containe"
      :show-divider="false"
    >
      <ProRenderForm ref="insuredFormRef" :model="stateInfo.insurerList[stateInfo.currentSelectInsure]">
        <ProFieldV2
          v-model="stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.name"
          label="姓名"
          name="name"
          :maxlength="20"
          required
        />
        <ProPickerV2
          v-if="stateInfo.currentSelectInsure !== 0 && stateInfo.insurerList[stateInfo.currentSelectInsure]"
          v-model="stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.relationToMainInsured"
          label="与主被保人关系"
          :is-default-selected="true"
          name="relationToMainInsured"
          :columns="relationColumn()"
          required
          @confirm="changeRelationToMain"
        >
        </ProPickerV2>
        <ProFieldV2
          v-model="stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.age"
          class="age-field-wrap"
          name="age"
          label="年龄"
          type="digit"
          :maxlength="3"
          required
          @change="changeAge"
        >
          <template #extra>
            <ProDatePickerV2
              v-model="stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.birthday"
              class="birthday-field-wrap"
              label="出生日期"
              name="birthday"
              @update:model-value="changeBirthday"
            />
          </template>
        </ProFieldV2>
        <ProRadioV2
          v-model="stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.gender"
          label="性别"
          name="gender"
          :columns="sexList"
          :disabled="
            +stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.relationToMainInsured ===
            +RELATION_HOLDER_ENUM.MATE
          "
          required
          @change="changeGender"
        />
      </ProRenderForm>
      <template v-if="stateInfo.currentSelectInsure === 0">
        <div class="title-tip-icon">投保人信息</div>
        <ProRenderForm ref="holderFormRef" :model="stateInfo.holder" class="insure-container">
          <ProRadioV2
            v-model="stateInfo.insurerList[0].personVO.relationToHolder"
            label="投被保人是同一人"
            :columns="SELF_LIST"
            required
          />
          <template v-if="stateInfo.insurerList[0].personVO.relationToHolder === 2">
            <ProFieldV2 v-model="stateInfo.holder.name" name="name" label="姓名" :maxlength="20" required />
            <ProFieldV2
              v-model="stateInfo.holder.age"
              class="age-field-wrap"
              name="age"
              label="年龄"
              type="digit"
              :maxlength="3"
              required
              :rules="[
                { required: true, message: '请输入年龄' },
                {
                  trigger: 'onChange',
                  validator: validateAge,
                },
              ]"
              @change="changeHolderAge"
            >
              <template #extra>
                <ProDatePickerV2
                  v-model="stateInfo.holder.birthday"
                  class="birthday-field-wrap"
                  label="出生日期"
                  name="birthday"
                  @update:model-value="changeHolderBirthday"
                />
              </template>
            </ProFieldV2>
            <ProRadioV2
              v-model="stateInfo.holder.gender"
              label="性别"
              name="gender"
              :columns="SEX_LIMIT_LIST"
              required
            />
          </template>
        </ProRenderForm>
      </template>
    </ProCard>
  </div>
</template>

<script name="personal" lang="ts" setup>
import { withDefaults } from 'vue';
import dayjs from 'dayjs';
import {
  ProposalInfo,
  ProposalProductRiskItem,
  ProposalInsuredProductItem,
  ProposalHolder,
  PlanTrialData,
  ProductItem,
} from '@/api/modules/createProposal.data';
import { RELATION_HOLDER_LIST, RELATION_HOLDER_ENUM } from '@/common/constants/product';
import { ProductData } from '@/common/constants/trial.data';
import { SEX_LIMIT_LIST, SELF_LIST, SEX_LIMIT_ENUM } from '@/common/constants';

interface StateInfo {
  selectedProductCodeList: string[];
  selectedProductList: any[]; // 当前被保人选择的产品列表
  currentProductCode: string;
  holder: Partial<ProposalHolder>;
  insuredPersonVO: Partial<ProposalHolder>;
  insurerList: ProposalHolder[]; // 被保人列表，包含被保人信息personVO和productList
  currentSelectInsure: number; // 当前选择的被保人序号
  productList: ProposalInsuredProductItem[];
  productCollection: {
    [x: string]: ProductData;
  };
  productErrorMap: {
    [x: string]: string;
  };
  defaultData: {
    [x: string]: any;
  };
  isLoading: boolean;
}

const stateInfo = reactive<StateInfo>({
  insuredPersonVO: {},
  insurerList: [],
  currentProductCode: '',
  currentProduct: {},
  holder: {},
  productList: [],
  productCollection: {},
  productErrorMap: {},
  defaultData: null,
  currentSelectInsure: 0,
});

const insuredFormRef = ref(null);

// 生日变化要改变年龄
const changeBirthday = (val) => {
  if (val) {
    stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.age = dayjs(new Date()).diff(val, 'year');
  }
};

// 投保人生日变化要改变年龄
const changeHolderBirthday = (val) => {
  if (val) {
    stateInfo.holder.age = dayjs(new Date()).diff(val, 'year');
  }
};

const changeRelationToMain = (val) => {
  const { value } = val;
  let param = { age: 30, birthday: dayjs().subtract(30, 'year').format('YYYY-MM-DD'), gender: +SEX_LIMIT_ENUM.MALE };
  if ([RELATION_HOLDER_ENUM.MATE, RELATION_HOLDER_ENUM.CHILD].includes(value)) {
    param = {
      age: value === RELATION_HOLDER_ENUM.MATE ? stateInfo.insurerList[0].personVO.age : 0,
      birthday:
        value === RELATION_HOLDER_ENUM.MATE
          ? stateInfo.insurerList[0].personVO.birthday
          : dayjs().subtract(28, 'day').format('YYYY-MM-DD'),
      gender:
        value === RELATION_HOLDER_ENUM.MATE
          ? +stateInfo.insurerList[0].personVO.gender === 1
            ? 2
            : 1
          : +SEX_LIMIT_ENUM.MALE,
    };
  } else if (RELATION_HOLDER_ENUM.PARENT === value) {
    param = {
      age: +stateInfo.insurerList[0].personVO.age + 18,
      birthday: dayjs(stateInfo.insurerList[0].personVO.birthday).subtract(18, 'year').format('YYYY-MM-DD'),
      gender: +SEX_LIMIT_ENUM.MALE,
    };
  }
  Object.assign(stateInfo.insurerList[stateInfo.currentSelectInsure].personVO, param);
};

//  改变年龄清除出生日期
const changeAge = () => {
  stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.birthday = '';
};

const changeGender = () => {
  if (stateInfo.currentSelectInsure === 0) {
    const mateIndex = stateInfo.insurerList.findIndex((insure) => {
      if (insure && insure.personVO) return +insure.personVO.relationToMainInsured === +RELATION_HOLDER_ENUM.MATE;
      return false;
    });
    if (mateIndex !== -1) {
      stateInfo.insurerList[mateIndex].personVO.gender = +stateInfo.insurerList[0].personVO.gender === 1 ? 2 : 1;
    }
  }
};

//  改变年龄清除出生日期
const changeHolderAge = () => {
  stateInfo.holder.birthday = '';
};
</script>

<style lang="scss" scoped>
.personal-wrap {
}
</style>
