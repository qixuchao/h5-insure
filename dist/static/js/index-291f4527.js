import{d as e,g as a,h as t,i as n,O as s,T as i,o,l as r,u,dE as d}from"./index-24f84c11.js";import{l}from"./product-33e54b91.js";const c=e({name:"QuestionPreview"}),m=e({...c,setup(e){a();const c=t(),{questionnaireId:m,id:p}=c.query,f={objectId:123,noticeType:1,orderNo:"2023083017475048217",tenantId:9991000011},g=n({basicInfo:{questionnaireName:""},questions:[],imageConfig:{showFlag:2,name:"",maxCount:1}});return s((()=>{i.loading("加载中..."),l({questionnaireId:m||p}).then((e=>{var a;const{code:t,data:n}=e;"10000"===t&&n.productQuestionnaireVOList.length>0?(g.value=null==(a=n.productQuestionnaireVOList)?void 0:a[0].questionnaireDetailResponseVO,document.title=g.value.basicInfo.title):i.error("获取问卷出错")})).finally((()=>{i.clear()}))})),(e,a)=>(o(),r(d,{data:u(g),"is-view":"",params:f},null,8,["data"]))}});export{m as default};
