import{g as r,C as u,Q as i,h as d,j as _,r as m,k as o,y as a,z as p,m as f,s as v,T as t}from"./vendor-e9263418.js";import{b as h}from"./jsbridge-7ca0f033.js";var y="/static/assets/download.dc6b6f57.png";const g={className:"mask"},k={className:"mask-content"},C=["src"],B={key:0},D=r({setup(N){const n=u(!0),e=i(),c=()=>{var s;h((s=e==null?void 0:e.query)==null?void 0:s.url).then(()=>{t.success("\u89C6\u9891\u5DF2\u4E0B\u8F7D")}).catch(()=>{t.fail("\u89C6\u9891\u4E0B\u8F7D\u5931\u8D25")})};return(s,b)=>{const l=m("ZaPageWrap");return o(),d(l,{"main-class":"page-video-play"},{default:_(()=>[a("div",g,[a("div",k,[a("video",{src:p(e).query.url,controls:"",autoplay:"",enablePlayGesture:!0,"initial-time":"0",loop:"false",muted:"false",className:"components-page-video","object-fit":"contain"},null,8,C),n.value?(o(),f("div",B,[a("img",{className:"download-btn",mode:"aspectFill",src:y,onClick:c})])):v("",!0)])])]),_:1})}}});export{D as default};
