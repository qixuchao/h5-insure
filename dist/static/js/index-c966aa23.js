import{d as e,h as a,i as s,j as t,l as n,T as o,o as i,c as r,b as u,u as d,eh as l}from"./index-f0eeebf3.js";import{l as c}from"./product-cdee3bc1.js";const m={class:"com-question-wrap"},p=e({name:"QuestionPreview"}),f=e({...p,setup(e){a();const p=s(),{questionnaireId:f,id:q}=p.query,b={objectId:123,noticeType:1,orderNo:"2023083017475048217",tenantId:9991000011},v=t({basicInfo:{questionnaireName:""},questions:[],imageConfig:{showFlag:2,name:"",maxNum:1}});return n((()=>{o.loading("加载中..."),c({questionnaireId:f||q}).then((e=>{var a;const{code:s,data:t}=e;"10000"===s&&t.productQuestionnaireVOList.length>0?(v.value=null==(a=t.productQuestionnaireVOList)?void 0:a[0].questionnaireDetailResponseVO,document.title=v.value.basicInfo.title):o.error("获取问卷出错")})).finally((()=>{o.clear()}))})),(e,a)=>(i(),r("div",m,[u(l,{data:d(v),params:b},null,8,["data"])]))}});export{f as default};
