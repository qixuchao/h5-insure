import{d as a,h as e,i as s,j as t,l as n,T as o,o as i,c as r,b as d,u,eg as l}from"./index-0b6bfadc.js";import{l as c}from"./product-a64d20cd.js";const m={class:"com-question-wrap"},p=a({name:"QuestionPreview"}),f=a({...p,setup(a){e();const p=s(),{questionnaireId:f,id:q}=p.query,b={objectId:123,noticeType:1,orderNo:"2023083017475048217",tenantId:9991000011},g=t({basicInfo:{questionnaireName:""},questions:[],imageConfig:{showFlag:2,name:"",maxNum:1}});return n((()=>{o.loading("加载中..."),c({questionnaireId:f||q}).then((a=>{var e;const{code:s,data:t}=a;"10000"===s&&t.productQuestionnaireVOList.length>0?(g.value=null==(e=t.productQuestionnaireVOList)?void 0:e[0].questionnaireDetailResponseVO,document.title=g.value.basicInfo.title):o.error("获取问卷出错")})).finally((()=>{o.clear()}))})),(a,e)=>(i(),r("div",m,[d(l,{data:u(g),params:b},null,8,["data"])]))}});export{f as default};
