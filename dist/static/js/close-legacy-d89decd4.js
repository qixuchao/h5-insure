!function(){var e=document.createElement("style");e.innerHTML=".file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:0 var(--zaui-card-border, .4rem)}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)}.file-preview-popup-wrap .list{height:calc(100% - 3.2rem);overflow-y:scroll}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.26667rem}.file-preview-popup-wrap .footer .van-button{background:var(--van-primary-color);border-color:var(--van-primary-color);font-size:.32rem}\n",document.head.appendChild(e),System.register(["./index-legacy-c4cbaf55.js","./theme-legacy-a8152f06.js"],(function(e){"use strict";var a,l,t,r,i,o,d,u,n,s,c,v,p,f,A,w,m,b,h,y,g;return{setters:[function(e){a=e.d,l=e.r,t=e.E,r=e.am,i=e.b2,o=e.c,d=e.e,u=e.w,n=e.f,s=e.g,c=e.a7,v=e.k,p=e.j,f=e.n,A=e.t,w=e.a5,m=e.aP,b=e.B,h=e.bS,y=e.a8},function(e){g=e.t}],execute:function(){const C={class:"item"},k={class:"footer"};e("_",a({__name:"index",props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0}},emits:["update:show","submit","onCloseFilePreview"],setup(e,{emit:a}){const B=e,x=l(B.show),Q=l(!0),j=l(B.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),L=l(B.activeIndex),U=l(0),I=l(null),R=t((()=>{var e,a;return null===(e=j.value)||void 0===e||null===(a=e[L.value])||void 0===a?void 0:a.attachmentUri})),D=t((()=>{var e;return null===(e=j.value[L.value])||void 0===e?void 0:e.readDisabled})),J=t((()=>!(L.value>=B.forceReadCound-1)&&(!(U.value>=B.forceReadCound)&&(U.value<B.forceReadCound&&L.value!==B.forceReadCound-1)))),F=()=>{L.value+=1},V=()=>{a("update:show",!1),a("submit")};r((()=>B),(()=>{x.value=B.show,L.value=B.activeIndex}),{deep:!0,immediate:!0});const M=e=>{if(e){var a,l,t;const r=(null===(a=e.target)||void 0===a?void 0:a.scrollHeight)||e.scrollHeight,i=(null===(l=e.target)||void 0===l?void 0:l.scrollTop)||e.scrollTop,o=(null===(t=e.target)||void 0===t?void 0:t.clientHeight)||e.clientHeight;Math.floor(r-i-15)<=o&&Q.value&&j.value[L.value].readDisabled&&(j.value[L.value].disabled=!1,j.value[L.value].readDisabled=!1,j.value[L.value+1].disabled=!1,U.value+=1)}};return r((()=>L.value),(()=>{Q.value=!1,B.show&&(U.value>=B.forceReadCound&&j.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{Q.value=!0}),800)),i((()=>{setTimeout((()=>{M(I.value)}),2e3)}))}),{immediate:!0}),(l,t)=>{const r=w,i=m,Q=b,U=h,N=y;return o(),d(N,{show:s(x),"onUpdate:show":t[1]||(t[1]=e=>c(x)?x.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:t[2]||(t[2]=e=>a("onCloseFilePreview"))},{default:u((()=>[n(U,{"theme-vars":s(g),class:"custom-provider"},{default:u((()=>[s(x)?(o(),d(r,{key:0,active:s(L),"onUpdate:active":t[0]||(t[0]=e=>c(L)?L.value=e:null),list:s(j).map(((e,a)=>({title:e.attachmentName,disabled:a!=s(L)&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):v("",!0),p("div",{ref_key:"previewRef",ref:I,class:"list",onScroll:M},[p("div",C,[(o(),d(i,{key:s(R),content:s(R),type:"pdf","forbid-click":!0},null,8,["content"]))])],544),p("div",k,[s(J)?(o(),d(Q,{key:0,disabled:s(D),type:"primary",block:"",round:"",onClick:F},{default:u((()=>[f(A(`${e.beforeReadOverText}(${s(L)+1}/${e.forceReadCound})`),1)])),_:1},8,["disabled"])):(o(),d(Q,{key:1,disabled:s(D),type:"primary",block:"",round:"",onClick:V},{default:u((()=>[f(A(B.text),1)])),_:1},8,["disabled"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}));e("c","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAMAAABjROYVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4MhPqcAAAAndFJOUwCSevYF7un6TRG1/diZNTvQSQt1GWWMH0VQAstuxoNe4kDgLeSoJ7BYGnQAAARqSURBVHjaxVvZdqMwDBXBAQyBLJCNZiNpy///4RzJNG6HBhM1tu/LzOlxucWSrxYLeBLiMynz9Li4TuN4el0c07xMPgXYQ3XOZ3HbIWs14ll+riwQiiSYtYOYBclr37gIonYEoqCAF0GW39/xkgaH5fy2lULI7W2+PATp5fv7lvIVlKfp3XTHU7OCGgj0T/efVXM63o09Pf2VttqEX8/KlysYwGqZf/114aYCPsSko4zTvRixfJ/GHe2E7VO7zpbRRI42xiTqbLvj7exHS3g/rOAJrA7vLeGDsceJslC0Fk8bZR0pL0ie/cWNkp2c4Yk1yFzp1eapP3h7bBFvBVtN3lrEcQujMaetjcsa2KjLmLZ4DiOxD0l6ij9KJwlVuIdRWJNBUvlnLUvJLdYwApMWMQEG2I+ihfEZXoJzPIp1TYZI4EVIyD3WBh/Kxrvc+IOQ7QeXhPieHE7+I7dTtGcCL0VCm/dQJQTp0BlejDNp0yNF3JhdjX9yNg/2gTQBLIBU4lerVWjQqwQLkBc0awV9YMyOC7CCIsaoDj3scAtKsIQSn77ree4M42cNllBjfJ2JXzwsK8Aaiqx/MirUjRwsIkdhqnpHNJJgETL6/7DKkGKBVazxVSVonDC/FWAVAvPhE9whURcOYBkHVAj54xRFK7CMVfRDCWYMoWcK/ww6FCiAEqxDohgWoBCYo4sMFuEikOwFOtoEQBC418M5cRNROyXaPawquwXNcAaGviPucXQqjAe7HUhlEko1jQIjpve4GhgUkFYMshKnQmDUwuDuu0sYwqIdYNWciAUMYfnlvxU+aviQhm2P9QFnFg4fVVxadcnaEQxvOsCqOc1vCscu3cyVJJptqln7nGabapHPO5M25rDUZ+1zmsNjo4wq8LdMuruLe6y/csY7k/7iIgGfWHSDCUmP9cGPTcBk9BMS0kAGK4uzTkkeSrI+g5XDqXyyhJziN4eVwwkHct+U9IjDyuEkTUrpuM6Bw8rhhDlKEanNDRisLE64kWpd27bdAoOVxQlbLA0BQ5wEBiuLEyQGb8CnCGCwsjhB4PqOlMHK4lSk3fYyWFmcanuVI7kjJUdSR8bd9tKRUeLgzpFIHJQMujsyJINK8N2JAwm+Cm3uZJBCmwri7gSfgrhKV9yFNkpXdGJmP4jrxEyloK7SFUpBdbLtIjHTyTaVFa5SUCordAHlItnWBZQqFd2UFVQq6qLYfgGli2Jd/rsoFXX5rxsd/KJYIzQ3OgZaOrzyP1sYWzqG5hWz0WFuXuk2nf2WDrXpxjckG2Q1NK9oQWNsSBpar5w2nbn16rfJXDtop9eqne7j4sDLFYmPyyAv114+LvicXmXW6irz0aXtxfGlLcXVzOL1tI+LeC8jB26HK2IarvAxRuJjYMbHaJC/ISj/417+B9v0CN/Vwgif72FF/2OZ/AFUDT2A6mvU1v9Qsf/xaf+D4vyR+MwwEs8e/u9h9PA//zOHd8ZnDj4+6PD/6Qr/Ix0C/yMdL58j/QO30Foo+DZolwAAAABJRU5ErkJggg==")}}}))}();
