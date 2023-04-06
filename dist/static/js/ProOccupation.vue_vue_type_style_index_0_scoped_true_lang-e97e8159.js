import{ad as e,cc as a,ah as o}from"./index-40904ad2.js";const n="ProFieldV2",E="ProDatePickerV2",t="ProPickerV2",r="ProRadioV2",N="ProCheckboxV2",m="ProSwitchV2",c="ProCascaderV2",i="ProBank",A="ProAddress",C="ProUpload",R="ProStepperV2",d="ProSMSCode",l="ProOccupation",I=18,O=50,_={NAME:"name",EXTERNAL:"external",EMAIL:"email",ZIP_CODE:"zipCode",TEL:"tel",MOBILE:"mobile",ZH_CN:"zhCN",NOT_ZH_CN:"notZhCN",NORMAL_CHAR:"normalChar",ALPHABET_NUMBER:"alphabetNumber",CERT:"cert",HOUSE_HOLD:"houseHold",BIRTH:"birth",PASSPORT:"passport",OTHER_CERT:"otherCert",MILITARY_CARD:"militaryCard",SOLIDER:"solider",HONGKONG_MACAO:"hongkongMacao",TAIWAN_TRAVEL:"taiwanTravel",FOREIGN_PERMANENT:"foreignPermanent",HK_MACAO_RESIDENCE_PERMIT:"HKMacaoResidencePermit",TAIWAN_RESIDENCE_PERMIT:"taiwanResidencePermit",SOCIAL_CREDIT_CODE:"socialCreditCode",OCC:"OCC",BUSINESS_LICENSE:"businessLicense",BAND_CARD:"bandCard"},T={NAME:{maxlength:25,ruleType:_.NAME},MOBILE:{type:"digit",ruleType:_.MOBILE,maxlength:11},AGE:{type:"digit",maxlength:3},HEIGHT_WEIGHT:{type:"number",precision:1,maxlength:5},INCOME:{type:"number",precision:2,unit:"万元",isPrecisionCompleted:!0},ZIP_CODE:{type:"digit",ruleType:_.ZIP_CODE,maxlength:6},CONTENT:{maxlength:200},GAS_NUMBER:{maxlength:20},ADDRESS:{dictCode:a.NATIONAL_REGION_CODE,customFieldName:{text:"name",value:"code",children:"children"}},COUNTRY:{dictCode:a.NATIONALITY,customFieldName:{text:"name",value:"code",children:"children"}}},s=[{code:"input",name:"单行文本",value:1,componentName:n},{code:"textarea",name:"多行文本",value:2,type:"textarea",componentName:n},{code:"number",name:"数字输入框",value:3,componentName:n},{code:"date",name:"日期",value:4,componentName:E},{code:"select",name:"下拉框",value:5,componentName:t},{code:"radio",name:"单选框",value:6,componentName:r},{code:"checkbox",name:"多选框",value:7,componentName:N},{code:"switch",name:"switch开关",value:8,componentName:m},{code:"cascader",name:"级联选择",value:9,componentName:c},{code:"bank",name:"银行卡",value:10,componentName:i},{code:"address",name:"地址",value:11,componentName:A},{code:"upload",name:"文件上传",value:12,componentName:C},{code:"stepper",name:"步进器",value:13,componentName:R}],p={certType:{[o.CERT]:[_.CERT],[o.HOUSE_HOLD]:[_.HOUSE_HOLD],[o.MILITARY_CARD]:[_.MILITARY_CARD],[o.PASSPORT]:[_.PASSPORT],[o.HONGKONG_MACAO]:[_.HONGKONG_MACAO],[o.OTHER]:[_.OTHER_CERT],[o.SOLIDER]:[_.SOLIDER],[o.BIRTH]:[_.BIRTH],[o.TAIWAN_TRAVEL]:[_.TAIWAN_TRAVEL],[o.FOREIGN_PERMANENT]:[_.FOREIGN_PERMANENT],[o.HK_MACAO_RESIDENCE_PERMIT]:[_.HK_MACAO_RESIDENCE_PERMIT],[o.TAIWAN_RESIDENCE_PERMIT]:[_.TAIWAN_RESIDENCE_PERMIT],[o.SOCIAL_CREDIT_CODE]:[_.SOCIAL_CREDIT_CODE]}},u={INSURE_AREA:"insureArea",RESIDENCE:"residence",LONG_AREA:"longArea",WORK_ADDRESS:"workAddress"};Object.values(u);const P=[{key:u.INSURE_AREA,valuePrefix:"insure"},{key:u.RESIDENCE,valuePrefix:""},{key:u.LONG_AREA,valuePrefix:""},{key:u.WORK_ADDRESS,valuePrefix:"work"}].reduce(((e,{key:a,valuePrefix:o})=>(e[a]={valuePrefix:o,...T.ADDRESS},e)),{}),D={name:T.NAME,certNo:{relatedName:"certType",maxlength:I},certType:{relatedName:"certNo"},mobile:T.MOBILE,age:T.AGE,height:{...T.HEIGHT_WEIGHT,unit:"cm"},weight:{...T.HEIGHT_WEIGHT,unit:"kg"},email:{ruleType:_.EMAIL},personalAnnualIncome:T.INCOME,familyAnnualIncome:T.INCOME,workZipCode:T.ZIP_CODE,homePostalCode:T.ZIP_CODE,workContent:T.CONTENT,gasNumberCollection:{...T.GAS_NUMBER,ruleType:_.NOT_ZH_CN},verificationCode:{componentName:d,...T.ZIP_CODE},...P,nationalityCode:{...T.COUNTRY},certEndDate:{minDate:new Date,maxDate:e().add(100,"year").toDate()},companyName:{maxlength:O},occupationCodeList:{componentName:l,dictCode:(S=(window.location.search.match(/&insurerCode=([^&]*)&/)||[])[1]||"",(S?`${S.toUpperCase()}_`:"")+"OCCUPATION")}};var S;const M={1:"holder",2:"insured",3:"beneficiary",4:"payInfo"},h=Symbol("VAN_PRO_FORM_KEY");export{s as C,D as G,M,_ as R,h as V,p as a};
