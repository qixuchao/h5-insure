import{d as a,h as e,i as s,j as t,l as i,T as n,o,c as r,b as u,u as d,ei as l}from"./index-4a902c97.js";import{l as c}from"./product-85d6e3f1.js";const m={class:"com-question-wrap"},p=a({name:"QuestionPreview"}),f=a({...p,setup(a){e();const p=s(),{questionnaireId:f,id:q}=p.query,v={objectId:123,noticeType:1,orderNo:"2023083017475048217",tenantId:9991000011},I=t({basicInfo:{questionnaireName:""},questions:[],imageConfig:{showFlag:2,name:"",maxNum:1}});return i((()=>{n.loading("加载中..."),c({questionnaireId:f||q}).then((a=>{var e;const{code:s,data:t}=a;"10000"===s&&t.productQuestionnaireVOList.length>0?(I.value=null==(e=t.productQuestionnaireVOList)?void 0:e[0].questionnaireDetailResponseVO,document.title=I.value.basicInfo.title):n.error("获取问卷出错")})).finally((()=>{n.clear()}))})),(a,e)=>(o(),r("div",m,[u(l,{data:d(I),params:v},null,8,["data"])]))}});export{f as default};
