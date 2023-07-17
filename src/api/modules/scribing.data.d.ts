
/**
 * 手动抄录识别结果
 * @params status // 签字识别结果
 * @params image // 签字base64字符串
 * @params position // 签字的定位
 * @params thumbnail // 签字base对应的缩略图
 */
export interface ScribingResultItem {
    content: string;
    fileKey: string;
    id: number;
    image: string;
    position: number;
    status: string;
    thumbnail: string;
}

export interface SaveScribingRequest {
    orderNo: string;
    riskTranscriptionList: Array<Partial<ScribingResultItem>>;
    tenantId: number;
}

export interface SaveScribingResponse {
    orderNo: string;
    riskTranscriptionList: Array<Partial<ScribingResultItem>>;
    status: number;
    tenantId: number;
}





