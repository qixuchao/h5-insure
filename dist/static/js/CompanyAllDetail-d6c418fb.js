import{C as s}from"./propasal-d633d7a0.js";import{_ as a,d as o,j as e,cV as n,dz as t,o as c,c as l,s as i,a as p,e as m,f as d,F as r,u as y,aL as u}from"./index-7832f651.js";const v={class:"company"},_={key:0,class:"title-name"},f={key:0,class:"content"},k={key:1,class:"com-detail"},g=["src"],I={key:2,class:"com-detail-video"},S=["poster"],T=["src"];var V=a(o({__name:"CompanyAllDetail",setup(a){e(""),e(!1),new n({source:"localStorage"});const o=JSON.parse(localStorage.getItem("company_all_detail"));return(a,e)=>{const n=t("dompurify-html");return c(!0),l(r,null,i(y(o),((a,o)=>(c(),l("div",{key:o},[p("div",v,[1==+a.isTitleShow?(c(),l("span",_,m(null==a?void 0:a.title),1)):d("",!0),(c(!0),l(r,null,i(a.components,((a,o)=>(c(),l("div",{key:o,class:"com-company-detail"},[y(s).WORD===+a.componentType?u((c(),l("div",f,null,512)),[[n,a.componentContent]]):d("",!0),y(s).IMAGE===+a.componentType?(c(),l("div",k,[p("img",{src:a.componentPicList[0],class:"company-image"},null,8,g)])):d("",!0),y(s).VIDEO===+a.componentType?(c(),l("div",I,[p("video",{controls:"",poster:a.componentVideoPic,class:"banner-video"},[p("source",{src:a.componentVideoList[0]},null,8,T)],8,S)])):d("",!0)])))),128))])])))),128)}}}),[["__scopeId","data-v-44364dba"]]);export{V as default};
