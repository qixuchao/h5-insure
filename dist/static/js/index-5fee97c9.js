import{d as e,h as a,i as s,j as t,l as i,T as n,o,c as r,b as u,u as d,ei as l}from"./index-d0b93386.js";import{l as c}from"./product-ebe3b14e.js";const m={class:"com-question-wrap"},p=e({name:"QuestionPreview"}),b=e({...p,setup(e){a();const p=s(),{questionnaireId:b,id:f}=p.query,q={objectId:123,noticeType:1,orderNo:"2023083017475048217",tenantId:9991000011},v=t({basicInfo:{questionnaireName:""},questions:[],imageConfig:{showFlag:2,name:"",maxNum:1}});return i((()=>{n.loading("加载中..."),c({questionnaireId:b||f}).then((e=>{var a;const{code:s,data:t}=e;"10000"===s&&t.productQuestionnaireVOList.length>0?(v.value=null==(a=t.productQuestionnaireVOList)?void 0:a[0].questionnaireDetailResponseVO,document.title=v.value.basicInfo.title):n.error("获取问卷出错")})).finally((()=>{n.clear()}))})),(e,a)=>(o(),r("div",m,[u(l,{data:d(v),params:q},null,8,["data"])]))}});export{b as default};
