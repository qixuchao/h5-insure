import{C as a}from"./propasal-d633d7a0.js";import{_ as s,d as e,j as o,cV as n,dA as c,o as t,c as l,s as i,a as p,e as m,f as d,F as r,u as y,aU as u}from"./index-69aebc6c.js";const v={class:"company"},_={key:0,class:"title-name"},k={key:0,class:"content"},f={key:1,class:"com-detail"},g=["src"],I={key:2,class:"com-detail-video"},S=["poster"],T=["src"];var V=s(e({__name:"CompanyAllDetail",setup(s){o(""),o(!1),new n({source:"localStorage"});const e=JSON.parse(localStorage.getItem("company_all_detail"));return(s,o)=>{const n=c("dompurify-html");return t(!0),l(r,null,i(y(e),((s,e)=>(t(),l("div",{key:e},[p("div",v,[1==+s.isTitleShow?(t(),l("span",_,m(null==s?void 0:s.title),1)):d("",!0),(t(!0),l(r,null,i(s.components,((s,e)=>(t(),l("div",{key:e,class:"com-company-detail"},[y(a).WORD===+s.componentType?u((t(),l("div",k,null,512)),[[n,s.componentContent]]):d("",!0),y(a).IMAGE===+s.componentType?(t(),l("div",f,[p("img",{src:s.componentPicList[0],class:"company-image"},null,8,g)])):d("",!0),y(a).VIDEO===+s.componentType?(t(),l("div",I,[p("video",{controls:"",poster:s.componentVideoPic,class:"banner-video"},[p("source",{src:s.componentVideoList[0]},null,8,T)],8,S)])):d("",!0)])))),128))])])))),128)}}}),[["__scopeId","data-v-44364dba"]]);export{V as default};
