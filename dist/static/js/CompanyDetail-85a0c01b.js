import{C as o}from"./propasal-d633d7a0.js";import{_ as e,d as s,j as n,cV as t,dz as a,o as c,c as i,s as l,u as p,aL as m,f as r,a as d,F as u}from"./index-7832f651.js";const y={key:0,class:"content"},v={key:1,class:"com-video"},f=["src"],g={key:2,class:"com-detail-video"},L=["poster"],V=["src"];var _=e(s({__name:"CompanyDetail",setup(e){n(""),n(!1),new t({source:"localStorage"});const s=JSON.parse(localStorage.getItem("company_detail")).components.filter((o=>!(0===o.componentPicList.length&&0===o.componentDefaultVideoList.length&&0===o.componentVideoList.length)));return(e,n)=>{const t=a("dompurify-html");return c(!0),i(u,null,l(p(s),((e,s)=>(c(),i("div",{key:s,class:"com-company-detail"},[p(o).WORD===+e.componentType?m((c(),i("div",y,null,512)),[[t,e.componentContent]]):r("",!0),p(o).IMAGE===+e.componentType?(c(),i("div",v,[d("img",{src:e.componentPicList[0],class:"company-image"},null,8,f)])):r("",!0),p(o).VIDEO===+e.componentType?(c(),i("div",g,[d("video",{controls:"",poster:e.componentVideoPic,class:"banner-video"},[d("source",{src:e.componentVideoList[0]},null,8,V)],8,L)])):r("",!0)])))),128)}}}),[["__scopeId","data-v-fb3c4bd2"]]);export{_ as default};
