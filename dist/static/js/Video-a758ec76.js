import{d as a,j as A,E as e,l as s,o,c,a as l,u as n,b as i,f as r,_ as d,b2 as t}from"./index-066cf51b.js";const p={class:"com-video"},u=["src"],m=["src"];var v=d(a({__name:"Video",props:{src:{}},setup(a){const d=a,v=A(!1),g=A("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASAQMAAAC+UBZMAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURf/////+/0xnxC0AAAArSURBVHjaFcSxEQAQEACwvFMofwylEdjsR0eRwCFS0jH+i6BoJalpEw/7u0clA1/PTeAgAAAAAElFTkSuQmCC");return e((()=>d),(a=>{g.value=`${window.location.origin}/api/app/common/file/generateLink?type=2&url=${a.src}`}),{deep:!0,immediate:!0}),s((()=>{})),(a,A)=>{const e=t;return o(),c("div",p,[l("img",{src:n(g),class:"cover-image",onClick:A[0]||(A[0]=a=>v.value=!0)},null,8,u),i(e,{name:"play",class:"cover-image-play",onClick:A[1]||(A[1]=a=>v.value=!0)}),n(v)?(o(),c("video",{key:0,src:d.src,autoplay:"",controls:"",class:"banner-video",onEnded:A[2]||(A[2]=a=>v.value=!1)},null,40,m)):r("",!0)])}}}),[["__scopeId","data-v-38686bfe"]]);export{v as default};
