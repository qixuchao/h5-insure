import{d as e,h as a,i as s,j as t,O as n,T as o,o as i,c as r,b as u,u as c,ee as d}from"./index-8ccea0ec.js";import{l}from"./product-97cae19e.js";const m={class:"com-question-wrap"},p=e({name:"QuestionPreview"}),f=e({...p,setup(e){a();const p=s(),{questionnaireId:f,id:q}=p.query,v={objectId:123,noticeType:1,orderNo:"2023083017475048217",tenantId:9991000011},I=t({basicInfo:{questionnaireName:""},questions:[],imageConfig:{showFlag:2,name:"",maxNum:1}});return n((()=>{o.loading("加载中..."),l({questionnaireId:f||q}).then((e=>{var a;const{code:s,data:t}=e;"10000"===s&&t.productQuestionnaireVOList.length>0?(I.value=null==(a=t.productQuestionnaireVOList)?void 0:a[0].questionnaireDetailResponseVO,document.title=I.value.basicInfo.title):o.error("获取问卷出错")})).finally((()=>{o.clear()}))})),(e,a)=>(i(),r("div",m,[u(d,{data:c(I),params:v},null,8,["data"])]))}});export{f as default};
