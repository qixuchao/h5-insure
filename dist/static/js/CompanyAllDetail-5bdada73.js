import{C as s}from"./propasal-d633d7a0.js";import{_ as e,d as o,j as a,cX as n,cq as c,o as t,c as l,s as i,a as p,e as m,f as d,F as r,u as y,bg as u}from"./index-e6143c1d.js";const v={class:"company"},_={key:0,class:"title-name"},g={key:0,class:"content"},k={key:1,class:"com-detail"},f=["src"],I={key:2,class:"com-detail-video"},S=["poster"],T=["src"];var b=e(o({__name:"CompanyAllDetail",setup(e){a(""),a(!1),new n({source:"localStorage"});const o=JSON.parse(localStorage.getItem("company_all_detail"));return(e,a)=>{const n=c("dompurify-html");return t(!0),l(r,null,i(y(o),((e,o)=>(t(),l("div",{key:o},[p("div",v,[1==+e.isTitleShow?(t(),l("span",_,m(null==e?void 0:e.title),1)):d("",!0),(t(!0),l(r,null,i(e.components,((e,o)=>(t(),l("div",{key:o,class:"com-company-detail"},[y(s).WORD===+e.componentType?u((t(),l("div",g,null,512)),[[n,e.componentContent]]):d("",!0),y(s).IMAGE===+e.componentType?(t(),l("div",k,[p("img",{src:e.componentPicList[0],class:"company-image"},null,8,f)])):d("",!0),y(s).VIDEO===+e.componentType?(t(),l("div",I,[p("video",{controls:"",poster:e.componentVideoPic,class:"banner-video"},[p("source",{src:e.componentVideoList[0]},null,8,T)],8,S)])):d("",!0)])))),128))])])))),128)}}}),[["__scopeId","data-v-44364dba"]]);export{b as default};
