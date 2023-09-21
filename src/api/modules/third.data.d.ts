/** 客户列表 单个客户信息 */
export interface Customer {
	birthday: string;
	certNo: string;
	certType: string;
	customerName: string;
	customerPhone: string[];
	customerType: string;
	firstLetter: string;
	gender: number;
	id: number;
	nationalityEnum: string;
	pinyin: string;
}

/** 获取客户详情的参数 */
export interface DetailParams {
	id: number;
	customerType: string;
	customerName: string;
	certNo: string;
	certType: string;
	birthday: string;
	gender: number;
}
/** 证件信息 */
export interface CertInfo {
	certId?: any;
	certType: string;
	certTypeName: string;
	certNo?: string;
	desensitizaCertNo?: string;
	certEndDate: string;
	customerType?: string;
	certStartDate: string;
	certName?: string;
}
/** 通讯联系信息 */
export interface ContactInfo {
	contactId?: any;
	customerId?: any;
	contactTool?: string;
	contactNo: string;
	contactType: string;
	isDefault?: any;
	useFlag?: string;
	contactRemark?: string;
}
/** 银行卡信息 */
export interface BankCardInfo {
	payBank: string;
	bankBranch: string;
	accountName?: any;
	bankCardNo: string;
	isDefault?: any;
	paymentMethod?: any;
}
/** 地址信息 */
export interface AddressInfo {
	addrId?: any;
	type?: any;
	province?: any;
	provinceName?: any;
	city?: any;
	cityName?: any;
	area?: any;
	areaName?: any;
	detail: string;
	postCode: string;
}

export interface CustomerDetail {
	name: string;
	avatar?: any;
	gender: number;
	genderName: string;
	birthday: string;
	email: string;
	salary: string;
	occupation: string;
	marriage: string;
	marriageName?: any;
	degree: string;
	height: number;
	weight: number;
	nationality: string;
	nationalityName: string;
	smokeFlag: number;
	smokeFlagName: string;
	incomeSource: string;
	hasSocialInsurance: number;
	hasSocialInsuranceName: string;
	certInfo: CertInfo[];
	contactInfo: ContactInfo[];
	bankCardInfo: BankCardInfo[];
	addressInfo: AddressInfo[];
}
