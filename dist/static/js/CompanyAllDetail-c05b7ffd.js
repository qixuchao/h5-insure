import{C as a}from"./propasal-d633d7a0.js";import{_ as s,d as o,j as e,cV as n,dz as t,o as c,c as l,s as i,a as d,e as p,f as m,F as r,u as y,aL as u}from"./index-bc8dad27.js";const v={class:"company"},_={key:0,class:"title-name"},k={key:0,class:"content"},f={key:1,class:"com-detail"},g=["src"],I={key:2,class:"com-detail-video"},S=["poster"],T=["src"];var V=s(o({__name:"CompanyAllDetail",setup(s){e(""),e(!1),new n({source:"localStorage"});const o=JSON.parse(localStorage.getItem("company_all_detail"));return(s,e)=>{const n=t("dompurify-html");return c(!0),l(r,null,i(y(o),((s,o)=>(c(),l("div",{key:o},[d("div",v,[1==+s.isTitleShow?(c(),l("span",_,p(null==s?void 0:s.title),1)):m("",!0),(c(!0),l(r,null,i(s.components,((s,o)=>(c(),l("div",{key:o,class:"com-company-detail"},[y(a).WORD===+s.componentType?u((c(),l("div",k,null,512)),[[n,s.componentContent]]):m("",!0),y(a).IMAGE===+s.componentType?(c(),l("div",f,[d("img",{src:s.componentPicList[0],class:"company-image"},null,8,g)])):m("",!0),y(a).VIDEO===+s.componentType?(c(),l("div",I,[d("video",{controls:"",poster:s.componentVideoPic,class:"banner-video"},[d("source",{src:s.componentVideoList[0]},null,8,T)],8,S)])):m("",!0)])))),128))])])))),128)}}}),[["__scopeId","data-v-44364dba"]]);export{V as default};
