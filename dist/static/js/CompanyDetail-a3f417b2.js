import{C as o}from"./propasal-d633d7a0.js";import{_ as e,d as s,j as a,cP as n,dz as t,o as c,c as i,q as l,u as p,V as m,f as r,a as d,F as u}from"./index-0aeac8ce.js";const y={key:0,class:"content"},v={key:1,class:"com-video"},f=["src"],g={key:2,class:"com-detail-video"},V=["poster"],_=["src"];var L=e(s({__name:"CompanyDetail",setup(e){a(""),a(!1),new n({source:"localStorage"});const s=JSON.parse(localStorage.getItem("company_detail")).components.filter((o=>!(0===o.componentPicList.length&&0===o.componentDefaultVideoList.length&&0===o.componentVideoList.length)));return(e,a)=>{const n=t("dompurify-html");return c(!0),i(u,null,l(p(s),((e,s)=>(c(),i("div",{key:s,class:"com-company-detail"},[p(o).WORD===+e.componentType?m((c(),i("div",y,null,512)),[[n,e.componentContent]]):r("",!0),p(o).IMAGE===+e.componentType?(c(),i("div",v,[d("img",{src:e.componentPicList[0],class:"company-image"},null,8,f)])):r("",!0),p(o).VIDEO===+e.componentType?(c(),i("div",g,[d("video",{controls:"",poster:e.componentVideoPic,class:"banner-video"},[d("source",{src:e.componentVideoList[0]},null,8,_)],8,V)])):r("",!0)])))),128)}}}),[["__scopeId","data-v-fb3c4bd2"]]);export{L as default};
