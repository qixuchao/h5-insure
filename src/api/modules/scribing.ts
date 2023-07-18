import request from '../request';
import { SaveScribingRequest, SaveScribingResponse, ScribingResultItem } from './scribing.data';

// 风险告知抄录确认
export const confirmRiskTranscription = (data = {}) =>
  request<boolean>({
    url: '/api/app/insure/insurance/confirmRiskTranscription',
    method: 'POST',
    data,
  });

// 手动抄录信息查询
export const queryListRiskTranscription = (data = {}) =>
  request<{ riskTranscriptionList: ScribingResultItem[]; status: number }>({
    url: '/api/app/insure/insurance/queryRiskTranscriptionResult',
    method: 'POST',
    data,
  });

// 保存手动抄录的信息
export const saveRiskTranscription = (data = {}) =>
  request<SaveScribingResponse>({
    url: '/api/app/insure/insurance/saveRiskTranscription',
    method: 'POST',
    data,
  });
