export interface OCRResponse {
  bankCardOcrVO: {
    bankName: string;
    bankNo: string;
    cardName: string;
    cardNo: string;
    cardType: string;
  };
  idCardOcrVO: {
    gender: string;
    issueBy: string;
    personAddress: string;
    personIdCard: string;
    personName: string;
    race: string;
    validDateEnd: string;
    validDateStart: string;
  };
}
