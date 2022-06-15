import dayjs from 'dayjs';
import { isEmpty } from 'lodash';
import issue1 from '@/assets/images/record/issue-1.png';
import issue2 from '@/assets/images/record/issue-2.png';
import issue3 from '@/assets/images/record/issue-3.png';
import issue4 from '@/assets/images/record/issue-4.png';
import issue5 from '@/assets/images/record/issue-5.png';
import issue6 from '@/assets/images/record/issue-6.png';
import issue7 from '@/assets/images/record/issue-7.png';

export const issueList = [
  {
    title: '请选择本次的拜访事件',
    icon: issue1,
    key: 1,
    type: {
      name: 'group-list',
      data: [
        {
          itemCode: '电话邀约',
          itemName: '电话邀约',
        },
        {
          itemCode: '接触面谈',
          itemName: '接触面谈',
        },
        {
          itemCode: '需求分析',
          itemName: '需求分析',
        },
        {
          itemCode: '保单服务',
          itemName: '保单服务',
        },
        {
          itemCode: '转介绍',
          itemName: '转介绍',
        },
      ],
    },
  },
  {
    key: 2,
    title: '请选择本次的拜访时间',
    icon: issue2,
    hasSureBtn: true,
    type: {
      name: 'time',
    },
  },
  {
    key: 3,
    title: '请选择本次的拜访地点',
    icon: issue3,
    type: {
      name: 'location',
    },
    descInfo: {
      title: '详细地址',
      textRules: {
        placeholder: '请输入详细地址',
        maxlength: 30,
      },
    },
    hasSureBtn: true,
  },
  {
    key: 4,
    title: '您本次接触客户沟通是否顺利？客户是否认可？进一步开发难度大吗？',
    icon: issue4,
    type: {
      name: 'group-list',
      data: [
        {
          itemCode: '沟通顺利',
          itemName: '沟通顺利',
        },
        {
          itemCode: '沟通不畅',
          itemName: '沟通不畅',
        },
        {
          itemCode: '客户认可',
          itemName: '客户认可',
        },
        {
          itemCode: '客户有异议',
          itemName: '客户有异议',
        },
        {
          itemCode: '可继续开发',
          itemName: '可继续开发',
        },
        {
          itemCode: '暂停接触',
          itemName: '暂停接触',
        },
      ],
    },
    descInfo: {
      title: '补充信息',
      hasSound: true,
      textRules: {
        maxlength: 200,
        placeholder: '请输入补充信息',
      },
    },
    hasSureBtn: true,
  },
  {
    key: 5,
    title:
      '您本次了解到哪些信息？如家庭情况、经济情况、保障情况等？开展了什么工作？如介绍公司、挖掘需求、讲解产品、理赔服务、索要转介绍等',
    icon: issue5,
    type: {
      name: 'group-list',
      data: [
        {
          itemCode: '随便聊聊',
          itemName: '随便聊聊',
        },
        {
          itemCode: '信息搜集',
          itemName: '信息搜集',
        },
        {
          itemCode: '理念沟通',
          itemName: '理念沟通',
        },
        {
          itemCode: '需求挖掘',
          itemName: '需求挖掘',
        },
        {
          itemCode: '产品推荐',
          itemName: '产品推荐',
        },
        {
          itemCode: '活动邀请',
          itemName: '活动邀请',
        },
      ],
    },
    descInfo: {
      title: '补充信息',
      hasSound: true,
      textRules: {
        maxlength: 200,
        placeholder: '请输入补充信息',
      },
    },
    hasSureBtn: true,
  },
  {
    key: 6,
    title: '请选择您是否约定后续拜访时间',
    icon: issue6,
    type: {
      name: 'group-list',
      data: [
        {
          itemCode: 'N',
          itemName: '沒有再约',
        },
        {
          itemCode: 'Y',
          itemName: '有再约日期',
        },
      ],
    },
    descInfo: {
      schedule: {
        title: '日程信息',
        list: [
          {
            title: '日程标题',
            value: '下次转介绍拜访',
          },
          {
            title: '开始时间',
            type: 'startTime',
          },
          {
            title: '结束时间',
            type: 'endTime',
          },
        ],
      },
      title: '日程内容',
      textRules: {
        maxlength: 200,
        placeholder: '请输入日程内容',
      },
    },
    hasSureBtn: true,
  },
  {
    key: 7,
    title: '最后上传照片打卡吧~',
    descTitle: '（没有打卡照可直接提交）',
    icon: issue7,
    type: {
      name: 'upload',
    },
  },
];

export const answerToParams = (answerList: any) => {
  const params: any = {
    feedback: answerList.value[3].answer.itemName,
    feedbackInputText: answerList.value[3].answer.message,
    feedbackInputVoice:
      answerList.value[3].answer.voiceList?.map?.(
        (item: { voiceUrl: string; voiceDuration: string }) => `${item.voiceUrl};${item.voiceDuration}`,
      ) || [],
    // feedbackInputVoice: [],

    // 是否有下次
    hasNext: answerList.value[5].answer.itemCode,

    // 位置
    result: answerList.value[4].answer.itemName,
    resultInputText: answerList.value[4].answer.message,
    // resultInputVoice: [],
    scheduleContentAddReq: {},
    resultInputVoice:
      answerList.value[4].answer.voiceList?.map?.(
        (item: { voiceUrl: string; voiceDuration: string }) => `${item.voiceUrl};${item.voiceDuration}`,
      ) || [],

    visitTime: answerList.value[1].answer.dateTime,
    visitType: answerList.value[0].answer.itemName,
  };
  if (!isEmpty(answerList.value[2].answer.point)) {
    params.latitude = answerList.value[2].answer.point.point.lat;
    params.longitude = answerList.value[2].answer.point.point.lng;
    params.visitAddress = `${answerList.value[2].answer.point?.title}ξ${answerList.value[2].answer?.point?.uid}ξ${
      answerList.value[2].answer?.message ?? '#'
    }`;
  } else {
    params.visitAddress = `#ξ#ξ${answerList.value[2].answer?.message}`;
  }

  if (answerList.value[5].answer.itemCode === 'Y') {
    params.scheduleContentAddReq = {
      endTime: answerList.value[5].answer?.recordList?.[2]?.value,
      remark: answerList.value[5].answer.message,
      startTime: answerList.value[5].answer?.recordList?.[1]?.value,
      title: answerList.value[5].answer?.recordList?.[0]?.value,
    };
  }

  return params;
};

export const paramsToAnswer = (visitObj: any) => {
  const visitAddress = visitObj.visitAddress?.replace?.(/#/g, '')?.replace?.(/undefined/g, '');
  return [
    {
      itemCode: visitObj.visitType,
      itemName: visitObj.visitType,
    },
    {
      itemName: visitObj.visitTime,
      dateTime: visitObj.visitTime,
    },
    {
      itemCode: visitAddress,
      itemName: visitAddress,
      message: visitObj.visitAddressDetail?.replace?.(/#/g, '')?.replace?.(/undefined/g, ''),
      point: {
        title: visitAddress,
        uid: visitObj.addressUid?.replace?.(/#/g, '')?.replace?.(/undefined/g, ''),
        point: {
          lat: visitObj.latitude,
          lng: visitObj.longitude,
        },
      },
    },
    {
      itemCode: visitObj.feedback,
      message: visitObj.feedbackInputText,
      voiceList: visitObj.feedbackInputVoice,
      itemName: visitObj.feedback,
    },

    {
      itemCode: visitObj.result,
      message: visitObj.resultInputText,
      voiceList: visitObj.resultInputVoice,
      itemName: visitObj.result,
    },
    {
      itemCode: visitObj.hasNext,
      recordList:
        visitObj.hasNext === 'N'
          ? []
          : [
              {
                title: '日程标题',
                value: visitObj?.scheduleContentDTO?.title,
              },
              {
                title: '开始时间',
                value: visitObj?.scheduleContentDTO?.startTime,
              },
              {
                title: '结束时间',
                value: visitObj?.scheduleContentDTO?.endTime,
              },
            ],
      message: visitObj?.scheduleContentDTO?.remark,
      itemName: visitObj.hasNext === 'N' ? '没有再约' : '有再约日期',
      endTime: visitObj?.scheduleContentDTO?.endTime,
      scheduleTitle: visitObj?.scheduleContentDTO?.title,
      startTime: visitObj?.scheduleContentDTO?.startTime,
    },
  ];
};
