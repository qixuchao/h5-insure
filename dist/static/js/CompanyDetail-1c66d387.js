import{C as o}from"./propasal-d633d7a0.js";import{_ as e,d as s,j as n,cP as t,dz as a,o as c,c as i,q as l,u as p,V as m,f as d,a as r,F as u}from"./index-4c3d4456.js";const y={key:0,class:"content"},v={key:1,class:"com-video"},f=["src"],g={key:2,class:"com-detail-video"},V=["poster"],_=["src"];var L=e(s({__name:"CompanyDetail",setup(e){n(""),n(!1),new t({source:"localStorage"});const s=JSON.parse(localStorage.getItem("company_detail")).components.filter((o=>!(0===o.componentPicList.length&&0===o.componentDefaultVideoList.length&&0===o.componentVideoList.length)));return(e,n)=>{const t=a("dompurify-html");return c(!0),i(u,null,l(p(s),((e,s)=>(c(),i("div",{key:s,class:"com-company-detail"},[p(o).WORD===+e.componentType?m((c(),i("div",y,null,512)),[[t,e.componentContent]]):d("",!0),p(o).IMAGE===+e.componentType?(c(),i("div",v,[r("img",{src:e.componentPicList[0],class:"company-image"},null,8,f)])):d("",!0),p(o).VIDEO===+e.componentType?(c(),i("div",g,[r("video",{controls:"",poster:e.componentVideoPic,class:"banner-video"},[r("source",{src:e.componentVideoList[0]},null,8,_)],8,V)])):d("",!0)])))),128)}}}),[["__scopeId","data-v-fb3c4bd2"]]);export{L as default};
