import{C as e}from"./propasal-d633d7a0.js";import{_ as s,d as a,j as o,cV as n,dz as t,o as c,c as l,s as i,a as p,e as m,f as d,F as r,u as y,aL as u}from"./index-8e02e112.js";const v={class:"company"},_={key:0,class:"title-name"},k={key:0,class:"content"},f={key:1,class:"com-detail"},g=["src"],I={key:2,class:"com-detail-video"},S=["poster"],T=["src"];var V=s(a({__name:"CompanyAllDetail",setup(s){o(""),o(!1),new n({source:"localStorage"});const a=JSON.parse(localStorage.getItem("company_all_detail"));return(s,o)=>{const n=t("dompurify-html");return c(!0),l(r,null,i(y(a),((s,a)=>(c(),l("div",{key:a},[p("div",v,[1==+s.isTitleShow?(c(),l("span",_,m(null==s?void 0:s.title),1)):d("",!0),(c(!0),l(r,null,i(s.components,((s,a)=>(c(),l("div",{key:a,class:"com-company-detail"},[y(e).WORD===+s.componentType?u((c(),l("div",k,null,512)),[[n,s.componentContent]]):d("",!0),y(e).IMAGE===+s.componentType?(c(),l("div",f,[p("img",{src:s.componentPicList[0],class:"company-image"},null,8,g)])):d("",!0),y(e).VIDEO===+s.componentType?(c(),l("div",I,[p("video",{controls:"",poster:s.componentVideoPic,class:"banner-video"},[p("source",{src:s.componentVideoList[0]},null,8,T)],8,S)])):d("",!0)])))),128))])])))),128)}}}),[["__scopeId","data-v-44364dba"]]);export{V as default};
