!function(){var e=document.createElement("style");e.innerHTML=".file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:0 var(--zaui-card-border, .4rem)}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)}.file-preview-popup-wrap .list{height:calc(100% - 3.2rem);overflow-y:scroll}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.26667rem}.file-preview-popup-wrap .footer .van-button{background:var(--van-primary-color);border-color:var(--van-primary-color);font-size:.32rem}\n",document.head.appendChild(e),System.register(["./theme-legacy-a8152f06.js","./vendor-legacy-e0411a0a.js"],(function(e){"use strict";var a,t,l,r,o,i,d,u,n,s,c,p,v,f,A,w;return{setters:[function(e){a=e.t},function(e){t=e.k,l=e.r,r=e.b,o=e.$,i=e.Y,d=e.p,u=e.s,n=e.t,s=e.v,c=e.S,p=e.y,v=e.C,f=e.E,A=e.G,w=e.M}],execute:function(){e("c","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAMAAABjROYVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4MhPqcAAAAndFJOUwCSevYF7un6TRG1/diZNTvQSQt1GWWMH0VQAstuxoNe4kDgLeSoJ7BYGnQAAARqSURBVHjaxVvZdqMwDBXBAQyBLJCNZiNpy///4RzJNG6HBhM1tu/LzOlxucWSrxYLeBLiMynz9Li4TuN4el0c07xMPgXYQ3XOZ3HbIWs14ll+riwQiiSYtYOYBclr37gIonYEoqCAF0GW39/xkgaH5fy2lULI7W2+PATp5fv7lvIVlKfp3XTHU7OCGgj0T/efVXM63o09Pf2VttqEX8/KlysYwGqZf/114aYCPsSko4zTvRixfJ/GHe2E7VO7zpbRRI42xiTqbLvj7exHS3g/rOAJrA7vLeGDsceJslC0Fk8bZR0pL0ie/cWNkp2c4Yk1yFzp1eapP3h7bBFvBVtN3lrEcQujMaetjcsa2KjLmLZ4DiOxD0l6ij9KJwlVuIdRWJNBUvlnLUvJLdYwApMWMQEG2I+ihfEZXoJzPIp1TYZI4EVIyD3WBh/Kxrvc+IOQ7QeXhPieHE7+I7dTtGcCL0VCm/dQJQTp0BlejDNp0yNF3JhdjX9yNg/2gTQBLIBU4lerVWjQqwQLkBc0awV9YMyOC7CCIsaoDj3scAtKsIQSn77ree4M42cNllBjfJ2JXzwsK8Aaiqx/MirUjRwsIkdhqnpHNJJgETL6/7DKkGKBVazxVSVonDC/FWAVAvPhE9whURcOYBkHVAj54xRFK7CMVfRDCWYMoWcK/ww6FCiAEqxDohgWoBCYo4sMFuEikOwFOtoEQBC418M5cRNROyXaPawquwXNcAaGviPucXQqjAe7HUhlEko1jQIjpve4GhgUkFYMshKnQmDUwuDuu0sYwqIdYNWciAUMYfnlvxU+aviQhm2P9QFnFg4fVVxadcnaEQxvOsCqOc1vCscu3cyVJJptqln7nGabapHPO5M25rDUZ+1zmsNjo4wq8LdMuruLe6y/csY7k/7iIgGfWHSDCUmP9cGPTcBk9BMS0kAGK4uzTkkeSrI+g5XDqXyyhJziN4eVwwkHct+U9IjDyuEkTUrpuM6Bw8rhhDlKEanNDRisLE64kWpd27bdAoOVxQlbLA0BQ5wEBiuLEyQGb8CnCGCwsjhB4PqOlMHK4lSk3fYyWFmcanuVI7kjJUdSR8bd9tKRUeLgzpFIHJQMujsyJINK8N2JAwm+Cm3uZJBCmwri7gSfgrhKV9yFNkpXdGJmP4jrxEyloK7SFUpBdbLtIjHTyTaVFa5SUCordAHlItnWBZQqFd2UFVQq6qLYfgGli2Jd/rsoFXX5rxsd/KJYIzQ3OgZaOrzyP1sYWzqG5hWz0WFuXuk2nf2WDrXpxjckG2Q1NK9oQWNsSBpar5w2nbn16rfJXDtop9eqne7j4sDLFYmPyyAv114+LvicXmXW6irz0aXtxfGlLcXVzOL1tI+LeC8jB26HK2IarvAxRuJjYMbHaJC/ISj/417+B9v0CN/Vwgif72FF/2OZ/AFUDT2A6mvU1v9Qsf/xaf+D4vyR+MwwEs8e/u9h9PA//zOHd8ZnDj4+6PD/6Qr/Ix0C/yMdL58j/QO30Foo+DZolwAAAABJRU5ErkJggg==");const b={class:"item"},m={class:"footer"};e("_",t({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0}},emits:["update:show","submit","onCloseFilePreview"],setup(e,{emit:t}){const y=e,h=l(y.show),g=l(!0),C=l(y.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),k=l(y.activeIndex),B=l(0),x=l(null),Q=r((()=>C.value?.[k.value]?.attachmentUri)),L=r((()=>C.value[k.value]?.readDisabled)),U=r((()=>!(k.value>=y.forceReadCound-1)&&(!(B.value>=y.forceReadCound)&&(B.value<y.forceReadCound&&k.value!==y.forceReadCound-1)))),j=()=>{k.value+=1},I=()=>{t("update:show",!1),t("submit")};o((()=>y),(()=>{h.value=y.show,k.value=y.activeIndex}),{deep:!0,immediate:!0});const R=e=>{if(e){const a=e.target?.scrollHeight||e.scrollHeight,t=e.target?.scrollTop||e.scrollTop,l=e.target?.clientHeight||e.clientHeight;Math.floor(a-t-15)<=l&&g.value&&C.value[k.value].readDisabled&&(C.value[k.value].disabled=!1,C.value[k.value].readDisabled=!1,C.value[k.value+1].disabled=!1,B.value+=1)}};return o((()=>k.value),(()=>{g.value=!1,y.show&&(B.value>=y.forceReadCound&&C.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{g.value=!0}),800)),i((()=>{setTimeout((()=>{R(x.value)}),2e3)}))}),{immediate:!0}),(l,r)=>{const o=d("ProTab"),i=d("ProFilePreview"),g=d("VanButton"),B=d("van-config-provider"),D=d("ProPopup");return u(),n(D,{show:h.value,"onUpdate:show":r[1]||(r[1]=e=>h.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:r[2]||(r[2]=e=>t("onCloseFilePreview"))},{default:s((()=>[c(B,{"theme-vars":f(a),class:"custom-provider"},{default:s((()=>[h.value?(u(),n(o,{key:0,active:k.value,"onUpdate:active":r[0]||(r[0]=e=>k.value=e),list:C.value.map(((e,a)=>({title:e.attachmentName,disabled:a!=k.value&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):p("",!0),v("div",{ref_key:"previewRef",ref:x,class:"list",onScroll:R},[v("div",b,[(u(),n(i,{key:f(Q),content:f(Q),type:"pdf","forbid-click":!0},null,8,["content"]))])],544),v("div",m,[f(U)?(u(),n(g,{key:0,disabled:f(L),type:"primary",block:"",round:"",onClick:j},{default:s((()=>[A(w(`${e.beforeReadOverText}(${k.value+1}/${e.forceReadCound})`),1)])),_:1},8,["disabled"])):(u(),n(g,{key:1,disabled:f(L),type:"primary",block:"",round:"",onClick:I},{default:s((()=>[A(w(y.text),1)])),_:1},8,["disabled"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();
