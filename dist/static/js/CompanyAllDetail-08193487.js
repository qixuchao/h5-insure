import{C as s}from"./propasal-d633d7a0.js";import{_ as a,d as e,j as o,cG as n,c9 as t,o as c,c as l,s as i,a as p,e as m,f as d,F as r,u as y,aV as u}from"./index-6005e057.js";const v={class:"company"},_={key:0,class:"title-name"},k={key:0,class:"content"},f={key:1,class:"com-detail"},g=["src"],I={key:2,class:"com-detail-video"},S=["poster"],T=["src"];var V=a(e({__name:"CompanyAllDetail",setup(a){o(""),o(!1),new n({source:"localStorage"});const e=JSON.parse(localStorage.getItem("company_all_detail"));return(a,o)=>{const n=t("dompurify-html");return c(!0),l(r,null,i(y(e),((a,e)=>(c(),l("div",{key:e},[p("div",v,[1==+a.isTitleShow?(c(),l("span",_,m(null==a?void 0:a.title),1)):d("",!0),(c(!0),l(r,null,i(a.components,((a,e)=>(c(),l("div",{key:e,class:"com-company-detail"},[y(s).WORD===+a.componentType?u((c(),l("div",k,null,512)),[[n,a.componentContent]]):d("",!0),y(s).IMAGE===+a.componentType?(c(),l("div",f,[p("img",{src:a.componentPicList[0],class:"company-image"},null,8,g)])):d("",!0),y(s).VIDEO===+a.componentType?(c(),l("div",I,[p("video",{controls:"",poster:a.componentVideoPic,class:"banner-video"},[p("source",{src:a.componentVideoList[0]},null,8,T)],8,S)])):d("",!0)])))),128))])])))),128)}}}),[["__scopeId","data-v-44364dba"]]);export{V as default};
