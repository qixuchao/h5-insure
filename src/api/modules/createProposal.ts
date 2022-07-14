/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:28:23
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-14 11:43:52
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/createProposal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import { ProposalInfo } from './createProposal.data';
// 创建计划书
const addOrUpdateProposal = (data: ProposalInfo) =>
  request.post<ResponseData<any>>('/api/proposal/AddOrUpdateProposal', data);

// 获取计划书详情
const queryProposalDetail = (data = {} as any) =>
  request.get<ResponseData<ProposalInfo>>(`/api/proposal/queryProposalDetail/${data.id}`, data);
