import{i as e,ag as t,ah as o,j as n,ai as a}from"./index-37af9da6.js";var r=r=>{const{tenantId:d,agencyCode:s,proposalId:i,saleChannelId:c,extraInfo:I,insurerCode:p,systemCode:l,source:u,templateId:m,iseeBizNo:C}=e().query,{agentCode:f,branchType:h,name:y,mangcom:g}=t.get(`${o}_userInfo`)||{};let L={};try{L=JSON.parse(decodeURIComponent(I))}catch(x){}const b=n({agencyId:g,commencementTime:"",expiryDate:"",proposalId:i,extInfo:{buttonCode:"",pageCode:"",iseeBizNo:C,source:u,systemCode:l,branchType:h,agentName:y,extraInfo:L,templateId:m},orderCategory:1,saleUserId:f,saleChannelId:c,tenantId:d,venderCode:p,insurerCode:p,holder:{occupationCodeList:[]},insuredList:[{relationToHolder:1,occupationCodeList:[],tenantOrderBeneficiaryList:[],productList:[]}],tenantOrderSubjectList:[],tenantOrderPayInfoList:[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}});return"[object Object]"==={}.toString.call(r)&&a(b.value,r),b};export{r as u};
