<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 15:01:12
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-30 21:15:03
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/PreNotice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProSvg name="customer" @click="clickHandler"></ProSvg>
  <ProPopup class="customer-list" :style="{ height: '416px' }" :show="state.loading" :closeable="false">
    <div class="customer-body">
      <div class="header">
        <span>{{ title }}</span>
        <van-icon :name="cancelIcon" @click="state.loading = false" />
      </div>
      <div class="conatiner">
        <div
          v-for="item in state.list"
          :key="item.customerId"
          :class="{ item: true, active: state.select.customerId === item.customerId }"
          @click="state.select = item"
        >
          <span class="name">{{ item.cert[0].certName }}</span>
          <span>{{ item.cert[0].certNo }}</span>
          <van-icon v-show="state.select.customerId === item.customerId" class="check-icon" :name="checkedIcon" />
        </div>
      </div>
      <ProShadowButton :shadow="false" text="确定" @click="save" />
    </div>
  </ProPopup>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import cancelIcon from '@/assets/images/baseInsurance/cancel.png';
import checkedIcon from '@/assets/images/baseInsurance/checked.png';
import ProShadowButton from '../ProShadowButton/index.vue';
import { queryListRelationCustomer } from '@/api/modules/product';
// // 调用主题
const emit = defineEmits(['change']);

const props = defineProps({
  userInfo: {
    type: Object,
    default: () => ({}),
  },
  relationCode: {
    type: String,
    default: '1',
  },
  title: {
    type: String,
    default: '选择投保人',
  },
});

let mork = [
  {
    addr: [
      {
        address: 'string',
        area: 'string',
        areaName: 'string',
        city: 'string',
        cityName: 'string',
        province: 'string',
        provinceName: 'string',
      },
    ],
    att: [
      {
        fileType: 'string',
        fileUrl: 'string',
      },
    ],
    birthday: 'string',
    cert: [
      {
        certId: 'string',
        certName: '王大啦',
        certNo: '110101199003078910',
        certStart: 'string',
        certType: 'string',
        certValidity: 'string',
        createTime: 'string',
        customerType: 'string',
      },
    ],
    companyContact: [
      {
        area: 'string',
        certExpiryDate: 'string',
        certNo: 'string',
        certType: 'string',
        city: 'string',
        companyContactId: 'string',
        contactEmail: 'string',
        contactType: 'string',
        detail: 'string',
        mobile: 'string',
        name: 'string',
        officePhone: 'string',
        province: 'string',
        tenantId: 'string',
      },
    ],
    companyExtInfoDTO: {
      enterpriseJobCategoryDesc: 'string',
      enterpriseOfficeAddress: 'string',
      enterpriseStaffAvgAge: 0,
      enterpriseStaffNum: 0,
    },
    companyType: 'string',
    contact: [
      {
        contactId: 'string',
        contactNo: 'string',
        contactRemark: 'string',
        contactTool: 'string',
        contactType: 'string',
        createTime: 'string',
        customerId: 'string',
        isDefault: 'string',
        tenantId: 0,
      },
    ],
    country: 'string',
    customerAttrDTO: {
      addNumberProgress: 'string',
      addNumberSource: 'string',
      creator: 'string',
      customerAttrType: 'string',
      customerId: 0,
      customerType: 'string',
      degree: 'string',
      ext1: 'string',
      gmtCreated: '2022-12-01T09:24:04.054Z',
      gmtModified: '2022-12-01T09:24:04.054Z',
      height: 0,
      id: 0,
      isDeleted: 'string',
      marriage: 'string',
      modifier: 'string',
      occupation: 'string',
      remark: 'string',
      salary: 'string',
      saleSource: 'string',
      tenantId: 0,
      visitProgress: 'string',
      weight: 0,
    },
    customerId: '001',
    customerMaterialDTO: [
      {
        creator: 'string',
        customerId: 0,
        customerType: 'string',
        gmtCreated: '2022-12-01T09:24:04.054Z',
        gmtModified: '2022-12-01T09:24:04.054Z',
        id: 0,
        isDefault: 'string',
        isDeleted: 'string',
        materialName: 'string',
        materialType: 'string',
        materialUrl: 'string',
        modifier: 'string',
        parentId: 0,
        tenantId: 0,
      },
    ],
    customerName: 'string',
    customerNo: 'string',
    customerTagDTO: [
      {
        creator: 'string',
        customerId: 0,
        customerType: 'string',
        gmtCreated: '2022-12-01T09:24:04.054Z',
        gmtModified: '2022-12-01T09:24:04.054Z',
        id: 0,
        isDeleted: 'string',
        modifier: 'string',
        tagId: 0,
        tagName: 'string',
        tagType: 'string',
        tenantId: 0,
      },
    ],
    customerTagRandomDTO: [
      {
        creator: 'string',
        customerId: 0,
        customerType: 'string',
        gmtCreated: '2022-12-01T09:24:04.054Z',
        gmtModified: '2022-12-01T09:24:04.054Z',
        id: 0,
        isDeleted: 'string',
        modifier: 'string',
        tagId: 0,
        tagName: 'string',
        tagType: 'string',
        tenantId: 0,
      },
    ],
    degree: 'string',
    gender: 'string',
    hasSocialInsurance: 'string',
    healthCondition: 'string',
    marriage: 'string',
    memo: 'string',
    occupation: 'string',
    occupationDesc: 'string',
    occupationDuty: 'string',
    occupationType: 'string',
    payInfo: [
      {
        accountName: 'string',
        bankBranch: 'string',
        gmtCreated: '2022-12-01T09:24:04.054Z',
        gmtModified: '2022-12-01T09:24:04.054Z',
        isDefault: 'string',
        payAccount: 'string',
        payBank: 'string',
        paymentMethod: 0,
      },
    ],
    relation: [
      {
        addr: [
          {
            address: 'string',
            area: 'string',
            areaName: 'string',
            city: 'string',
            cityName: 'string',
            province: 'string',
            provinceName: 'string',
          },
        ],
        att: [
          {
            fileType: 'string',
            fileUrl: 'string',
          },
        ],
        birthday: 'string',
        cert: [
          {
            certId: 'string',
            certName: 'string',
            certNo: 'string',
            certStart: 'string',
            certType: 'string',
            certValidity: 'string',
            createTime: 'string',
            customerType: 'string',
          },
        ],
        companyContact: [
          {
            area: 'string',
            certExpiryDate: 'string',
            certNo: 'string',
            certType: 'string',
            city: 'string',
            companyContactId: 'string',
            contactEmail: 'string',
            contactType: 'string',
            detail: 'string',
            mobile: 'string',
            name: 'string',
            officePhone: 'string',
            province: 'string',
            tenantId: 'string',
          },
        ],
        companyExtInfoDTO: {
          enterpriseJobCategoryDesc: 'string',
          enterpriseOfficeAddress: 'string',
          enterpriseStaffAvgAge: 0,
          enterpriseStaffNum: 0,
        },
        companyType: 'string',
        contact: [
          {
            contactId: 'string',
            contactNo: 'string',
            contactRemark: 'string',
            contactTool: 'string',
            contactType: 'string',
            createTime: 'string',
            customerId: 'string',
            isDefault: 'string',
            tenantId: 0,
          },
        ],
        country: 'string',
        customerAttrDTO: {
          addNumberProgress: 'string',
          addNumberSource: 'string',
          creator: 'string',
          customerAttrType: 'string',
          customerId: 0,
          customerType: 'string',
          degree: 'string',
          ext1: 'string',
          gmtCreated: '2022-12-01T09:24:04.055Z',
          gmtModified: '2022-12-01T09:24:04.055Z',
          height: 0,
          id: 0,
          isDeleted: 'string',
          marriage: 'string',
          modifier: 'string',
          occupation: 'string',
          remark: 'string',
          salary: 'string',
          saleSource: 'string',
          tenantId: 0,
          visitProgress: 'string',
          weight: 0,
        },
        customerId: 'string',
        customerMaterialDTO: [
          {
            creator: 'string',
            customerId: 0,
            customerType: 'string',
            gmtCreated: '2022-12-01T09:24:04.055Z',
            gmtModified: '2022-12-01T09:24:04.055Z',
            id: 0,
            isDefault: 'string',
            isDeleted: 'string',
            materialName: 'string',
            materialType: 'string',
            materialUrl: 'string',
            modifier: 'string',
            parentId: 0,
            tenantId: 0,
          },
        ],
        customerName: 'string',
        customerNo: 'string',
        customerTagDTO: [
          {
            creator: 'string',
            customerId: 0,
            customerType: 'string',
            gmtCreated: '2022-12-01T09:24:04.055Z',
            gmtModified: '2022-12-01T09:24:04.055Z',
            id: 0,
            isDeleted: 'string',
            modifier: 'string',
            tagId: 0,
            tagName: 'string',
            tagType: 'string',
            tenantId: 0,
          },
        ],
        customerTagRandomDTO: [
          {
            creator: 'string',
            customerId: 0,
            customerType: 'string',
            gmtCreated: '2022-12-01T09:24:04.055Z',
            gmtModified: '2022-12-01T09:24:04.055Z',
            id: 0,
            isDeleted: 'string',
            modifier: 'string',
            tagId: 0,
            tagName: 'string',
            tagType: 'string',
            tenantId: 0,
          },
        ],
        degree: 'string',
        gender: 'string',
        hasSocialInsurance: 'string',
        healthCondition: 'string',
        marriage: 'string',
        memo: 'string',
        occupation: 'string',
        occupationDesc: 'string',
        occupationDuty: 'string',
        occupationType: 'string',
        payInfo: [
          {
            accountName: 'string',
            bankBranch: 'string',
            gmtCreated: '2022-12-01T09:24:04.055Z',
            gmtModified: '2022-12-01T09:24:04.055Z',
            isDefault: 'string',
            payAccount: 'string',
            payBank: 'string',
            paymentMethod: 0,
          },
        ],
        relation: [null],
        relationCode: 'string',
        routeList: [0],
        salary: 'string',
        type: 'string',
        workPlace: 'string',
      },
    ],
    relationCode: 'string',
    salary: 'string',
    type: 'string',
    workPlace: 'string',
  },
  {
    addr: [
      {
        address: 'string',
        area: 'string',
        areaName: 'string',
        city: 'string',
        cityName: 'string',
        province: 'string',
        provinceName: 'string',
      },
    ],
    att: [
      {
        fileType: 'string',
        fileUrl: 'string',
      },
    ],
    birthday: 'string',
    cert: [
      {
        certId: 'string',
        certName: '李大霄',
        certNo: '110101199003070193',
        certStart: 'string',
        certType: 'string',
        certValidity: 'string',
        createTime: 'string',
        customerType: 'string',
      },
    ],
    companyContact: [
      {
        area: 'string',
        certExpiryDate: 'string',
        certNo: 'string',
        certType: 'string',
        city: 'string',
        companyContactId: 'string',
        contactEmail: 'string',
        contactType: 'string',
        detail: 'string',
        mobile: 'string',
        name: 'string',
        officePhone: 'string',
        province: 'string',
        tenantId: 'string',
      },
    ],
    companyExtInfoDTO: {
      enterpriseJobCategoryDesc: 'string',
      enterpriseOfficeAddress: 'string',
      enterpriseStaffAvgAge: 0,
      enterpriseStaffNum: 0,
    },
    companyType: 'string',
    contact: [
      {
        contactId: 'string',
        contactNo: 'string',
        contactRemark: 'string',
        contactTool: 'string',
        contactType: 'string',
        createTime: 'string',
        customerId: 'string',
        isDefault: 'string',
        tenantId: 0,
      },
    ],
    country: 'string',
    customerAttrDTO: {
      addNumberProgress: 'string',
      addNumberSource: 'string',
      creator: 'string',
      customerAttrType: 'string',
      customerId: 0,
      customerType: 'string',
      degree: 'string',
      ext1: 'string',
      gmtCreated: '2022-12-01T09:24:04.054Z',
      gmtModified: '2022-12-01T09:24:04.054Z',
      height: 0,
      id: 0,
      isDeleted: 'string',
      marriage: 'string',
      modifier: 'string',
      occupation: 'string',
      remark: 'string',
      salary: 'string',
      saleSource: 'string',
      tenantId: 0,
      visitProgress: 'string',
      weight: 0,
    },
    customerId: '002',
    customerMaterialDTO: [
      {
        creator: 'string',
        customerId: 0,
        customerType: 'string',
        gmtCreated: '2022-12-01T09:24:04.054Z',
        gmtModified: '2022-12-01T09:24:04.054Z',
        id: 0,
        isDefault: 'string',
        isDeleted: 'string',
        materialName: 'string',
        materialType: 'string',
        materialUrl: 'string',
        modifier: 'string',
        parentId: 0,
        tenantId: 0,
      },
    ],
    customerName: 'string',
    customerNo: 'string',
    customerTagDTO: [
      {
        creator: 'string',
        customerId: 0,
        customerType: 'string',
        gmtCreated: '2022-12-01T09:24:04.054Z',
        gmtModified: '2022-12-01T09:24:04.054Z',
        id: 0,
        isDeleted: 'string',
        modifier: 'string',
        tagId: 0,
        tagName: 'string',
        tagType: 'string',
        tenantId: 0,
      },
    ],
    customerTagRandomDTO: [
      {
        creator: 'string',
        customerId: 0,
        customerType: 'string',
        gmtCreated: '2022-12-01T09:24:04.054Z',
        gmtModified: '2022-12-01T09:24:04.054Z',
        id: 0,
        isDeleted: 'string',
        modifier: 'string',
        tagId: 0,
        tagName: 'string',
        tagType: 'string',
        tenantId: 0,
      },
    ],
    degree: 'string',
    gender: 'string',
    hasSocialInsurance: 'string',
    healthCondition: 'string',
    marriage: 'string',
    memo: 'string',
    occupation: 'string',
    occupationDesc: 'string',
    occupationDuty: 'string',
    occupationType: 'string',
    payInfo: [
      {
        accountName: 'string',
        bankBranch: 'string',
        gmtCreated: '2022-12-01T09:24:04.054Z',
        gmtModified: '2022-12-01T09:24:04.054Z',
        isDefault: 'string',
        payAccount: 'string',
        payBank: 'string',
        paymentMethod: 0,
      },
    ],
    relation: [
      {
        addr: [
          {
            address: 'string',
            area: 'string',
            areaName: 'string',
            city: 'string',
            cityName: 'string',
            province: 'string',
            provinceName: 'string',
          },
        ],
        att: [
          {
            fileType: 'string',
            fileUrl: 'string',
          },
        ],
        birthday: 'string',
        cert: [
          {
            certId: 'string',
            certName: 'string',
            certNo: 'string',
            certStart: 'string',
            certType: 'string',
            certValidity: 'string',
            createTime: 'string',
            customerType: 'string',
          },
        ],
        companyContact: [
          {
            area: 'string',
            certExpiryDate: 'string',
            certNo: 'string',
            certType: 'string',
            city: 'string',
            companyContactId: 'string',
            contactEmail: 'string',
            contactType: 'string',
            detail: 'string',
            mobile: 'string',
            name: 'string',
            officePhone: 'string',
            province: 'string',
            tenantId: 'string',
          },
        ],
        companyExtInfoDTO: {
          enterpriseJobCategoryDesc: 'string',
          enterpriseOfficeAddress: 'string',
          enterpriseStaffAvgAge: 0,
          enterpriseStaffNum: 0,
        },
        companyType: 'string',
        contact: [
          {
            contactId: 'string',
            contactNo: 'string',
            contactRemark: 'string',
            contactTool: 'string',
            contactType: 'string',
            createTime: 'string',
            customerId: 'string',
            isDefault: 'string',
            tenantId: 0,
          },
        ],
        country: 'string',
        customerAttrDTO: {
          addNumberProgress: 'string',
          addNumberSource: 'string',
          creator: 'string',
          customerAttrType: 'string',
          customerId: 0,
          customerType: 'string',
          degree: 'string',
          ext1: 'string',
          gmtCreated: '2022-12-01T09:24:04.055Z',
          gmtModified: '2022-12-01T09:24:04.055Z',
          height: 0,
          id: 0,
          isDeleted: 'string',
          marriage: 'string',
          modifier: 'string',
          occupation: 'string',
          remark: 'string',
          salary: 'string',
          saleSource: 'string',
          tenantId: 0,
          visitProgress: 'string',
          weight: 0,
        },
        customerId: 'string',
        customerMaterialDTO: [
          {
            creator: 'string',
            customerId: 0,
            customerType: 'string',
            gmtCreated: '2022-12-01T09:24:04.055Z',
            gmtModified: '2022-12-01T09:24:04.055Z',
            id: 0,
            isDefault: 'string',
            isDeleted: 'string',
            materialName: 'string',
            materialType: 'string',
            materialUrl: 'string',
            modifier: 'string',
            parentId: 0,
            tenantId: 0,
          },
        ],
        customerName: 'string',
        customerNo: 'string',
        customerTagDTO: [
          {
            creator: 'string',
            customerId: 0,
            customerType: 'string',
            gmtCreated: '2022-12-01T09:24:04.055Z',
            gmtModified: '2022-12-01T09:24:04.055Z',
            id: 0,
            isDeleted: 'string',
            modifier: 'string',
            tagId: 0,
            tagName: 'string',
            tagType: 'string',
            tenantId: 0,
          },
        ],
        customerTagRandomDTO: [
          {
            creator: 'string',
            customerId: 0,
            customerType: 'string',
            gmtCreated: '2022-12-01T09:24:04.055Z',
            gmtModified: '2022-12-01T09:24:04.055Z',
            id: 0,
            isDeleted: 'string',
            modifier: 'string',
            tagId: 0,
            tagName: 'string',
            tagType: 'string',
            tenantId: 0,
          },
        ],
        degree: 'string',
        gender: 'string',
        hasSocialInsurance: 'string',
        healthCondition: 'string',
        marriage: 'string',
        memo: 'string',
        occupation: 'string',
        occupationDesc: 'string',
        occupationDuty: 'string',
        occupationType: 'string',
        payInfo: [
          {
            accountName: 'string',
            bankBranch: 'string',
            gmtCreated: '2022-12-01T09:24:04.055Z',
            gmtModified: '2022-12-01T09:24:04.055Z',
            isDefault: 'string',
            payAccount: 'string',
            payBank: 'string',
            paymentMethod: 0,
          },
        ],
        relation: [null],
        relationCode: 'string',
        routeList: [0],
        salary: 'string',
        type: 'string',
        workPlace: 'string',
      },
    ],
    relationCode: 'string',
    salary: 'string',
    type: 'string',
    workPlace: 'string',
  },
];

mork = [...mork, ...mork, ...mork];

const state = reactive({
  loading: true,
  select: mork[0],
  list: mork,
});

const initData = async () => {
  // const { code, data } = await queryListRelationCustomer(props.userInfo);
  // if (code === '10000') {
  //   console.log(data, 'slsllswp');
  // }
  state.loading = true;
};

const save = () => {
  state.loading = false;
  emit('change', state.select);
};

const clickHandler = () => {
  state.loading = false;
  initData();
};
</script>

<style scoped lang="scss">
.customer-body {
  padding: 32px 40px;
  .header {
    display: flex;
    justify-content: space-between;
    border: none;
    height: 42px;
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333;
    line-height: 42px;
    align-items: center;
    margin-bottom: 30px;
  }

  .conatiner {
    height: 520px;
    margin-bottom: 40px;
    overflow-y: auto;
    .item {
      height: 112px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 34px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333;
      line-height: 48px;
      position: relative;

      &.active {
        color: var(--van-primary-color);

        .check-icon {
          position: absolute;
          right: 0;
        }
      }

      .name {
        margin-right: 30px;
      }
    }
  }
}
</style>
