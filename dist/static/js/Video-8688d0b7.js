import{_ as a,d as A,j as e,A as s,l as o,o as l,c,a as n,u as i,b as r,f as d,af as t}from"./index-86787787.js";const p={class:"com-video"},u=["src"],m=["src"];var v=a(A({__name:"Video",props:{src:null},setup(a){const A=a,v=e(!1),g=e("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASAQMAAAC+UBZMAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURf/////+/0xnxC0AAAArSURBVHjaFcSxEQAQEACwvFMofwylEdjsR0eRwCFS0jH+i6BoJalpEw/7u0clA1/PTeAgAAAAAElFTkSuQmCC");return s((()=>A),(a=>{g.value=`${window.location.origin}/api/app/common/file/generateLink?type=2&url=${a.src}`}),{deep:!0,immediate:!0}),o((()=>{})),(a,e)=>{const s=t;return l(),c("div",p,[n("img",{src:i(g),class:"cover-image",onClick:e[0]||(e[0]=a=>v.value=!0)},null,8,u),r(s,{name:"play",class:"cover-image-play",onClick:e[1]||(e[1]=a=>v.value=!0)}),i(v)?(l(),c("video",{key:0,src:A.src,autoplay:"",controls:"",class:"banner-video",onEnded:e[2]||(e[2]=a=>v.value=!1)},null,40,m)):d("",!0)])}}}),[["__scopeId","data-v-38686bfe"]]);export{v as default};
