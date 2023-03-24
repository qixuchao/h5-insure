import{d as e,r as a,E as l,am as t,b6 as s,c as d,e as o,w as i,f as u,j as r,i as v,m as c,n,t as A,a5 as p,aP as f,B as w,bT as m,a7 as C}from"./index-8dcf7554.js";import{t as h}from"./theme-ea709837.js";const y={class:"item"},B={class:"footer"},b=e({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0}},emits:["update:show","submit","onCloseFilePreview"],setup(e,{emit:b}){const k=e,Q=a(k.show),g=a(!0),x=a(k.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),U=a(k.activeIndex),j=a(0),L=a(null),I=l((()=>{var e,a;return null==(a=null==(e=x.value)?void 0:e[U.value])?void 0:a.attachmentUri})),R=l((()=>{var e;return null==(e=x.value[U.value])?void 0:e.readDisabled})),D=l((()=>!(U.value>=k.forceReadCound-1)&&(!(j.value>=k.forceReadCound)&&(j.value<k.forceReadCound&&U.value!==k.forceReadCound-1)))),J=()=>{U.value+=1},F=()=>{b("update:show",!1),b("submit")};t((()=>k),(()=>{Q.value=k.show,U.value=k.activeIndex}),{deep:!0,immediate:!0});const V=e=>{var a,l,t;if(e){const s=(null==(a=e.target)?void 0:a.scrollHeight)||e.scrollHeight,d=(null==(l=e.target)?void 0:l.scrollTop)||e.scrollTop,o=(null==(t=e.target)?void 0:t.clientHeight)||e.clientHeight;Math.floor(s-d-15)<=o&&g.value&&x.value[U.value].readDisabled&&(x.value[U.value].disabled=!1,x.value[U.value].readDisabled=!1,x.value[U.value+1].disabled=!1,j.value+=1)}};return t((()=>U.value),(()=>{g.value=!1,k.show&&(j.value>=k.forceReadCound&&x.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{g.value=!0}),800)),s((()=>{setTimeout((()=>{V(L.value)}),2e3)}))}),{immediate:!0}),(a,l)=>{const t=p,s=f,g=w,j=m,N=C;return d(),o(N,{show:Q.value,"onUpdate:show":l[1]||(l[1]=e=>Q.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:l[2]||(l[2]=e=>b("onCloseFilePreview"))},{default:i((()=>[u(j,{"theme-vars":c(h),class:"custom-provider"},{default:i((()=>[Q.value?(d(),o(t,{key:0,active:U.value,"onUpdate:active":l[0]||(l[0]=e=>U.value=e),list:x.value.map(((e,a)=>({title:e.attachmentName,disabled:a!=U.value&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):r("",!0),v("div",{ref_key:"previewRef",ref:L,class:"list",onScroll:V},[v("div",y,[(d(),o(s,{key:c(I),content:c(I),type:"pdf","forbid-click":!0},null,8,["content"]))])],544),v("div",B,[c(D)?(d(),o(g,{key:0,disabled:c(R),type:"primary",block:"",round:"",onClick:J},{default:i((()=>[n(A(`${e.beforeReadOverText}(${U.value+1}/${e.forceReadCound})`),1)])),_:1},8,["disabled"])):(d(),o(g,{key:1,disabled:c(R),type:"primary",block:"",round:"",onClick:F},{default:i((()=>[n(A(k.text),1)])),_:1},8,["disabled"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});var k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAMAAABjROYVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4MhPqcAAAAndFJOUwCSevYF7un6TRG1/diZNTvQSQt1GWWMH0VQAstuxoNe4kDgLeSoJ7BYGnQAAARqSURBVHjaxVvZdqMwDBXBAQyBLJCNZiNpy///4RzJNG6HBhM1tu/LzOlxucWSrxYLeBLiMynz9Li4TuN4el0c07xMPgXYQ3XOZ3HbIWs14ll+riwQiiSYtYOYBclr37gIonYEoqCAF0GW39/xkgaH5fy2lULI7W2+PATp5fv7lvIVlKfp3XTHU7OCGgj0T/efVXM63o09Pf2VttqEX8/KlysYwGqZf/114aYCPsSko4zTvRixfJ/GHe2E7VO7zpbRRI42xiTqbLvj7exHS3g/rOAJrA7vLeGDsceJslC0Fk8bZR0pL0ie/cWNkp2c4Yk1yFzp1eapP3h7bBFvBVtN3lrEcQujMaetjcsa2KjLmLZ4DiOxD0l6ij9KJwlVuIdRWJNBUvlnLUvJLdYwApMWMQEG2I+ihfEZXoJzPIp1TYZI4EVIyD3WBh/Kxrvc+IOQ7QeXhPieHE7+I7dTtGcCL0VCm/dQJQTp0BlejDNp0yNF3JhdjX9yNg/2gTQBLIBU4lerVWjQqwQLkBc0awV9YMyOC7CCIsaoDj3scAtKsIQSn77ree4M42cNllBjfJ2JXzwsK8Aaiqx/MirUjRwsIkdhqnpHNJJgETL6/7DKkGKBVazxVSVonDC/FWAVAvPhE9whURcOYBkHVAj54xRFK7CMVfRDCWYMoWcK/ww6FCiAEqxDohgWoBCYo4sMFuEikOwFOtoEQBC418M5cRNROyXaPawquwXNcAaGviPucXQqjAe7HUhlEko1jQIjpve4GhgUkFYMshKnQmDUwuDuu0sYwqIdYNWciAUMYfnlvxU+aviQhm2P9QFnFg4fVVxadcnaEQxvOsCqOc1vCscu3cyVJJptqln7nGabapHPO5M25rDUZ+1zmsNjo4wq8LdMuruLe6y/csY7k/7iIgGfWHSDCUmP9cGPTcBk9BMS0kAGK4uzTkkeSrI+g5XDqXyyhJziN4eVwwkHct+U9IjDyuEkTUrpuM6Bw8rhhDlKEanNDRisLE64kWpd27bdAoOVxQlbLA0BQ5wEBiuLEyQGb8CnCGCwsjhB4PqOlMHK4lSk3fYyWFmcanuVI7kjJUdSR8bd9tKRUeLgzpFIHJQMujsyJINK8N2JAwm+Cm3uZJBCmwri7gSfgrhKV9yFNkpXdGJmP4jrxEyloK7SFUpBdbLtIjHTyTaVFa5SUCordAHlItnWBZQqFd2UFVQq6qLYfgGli2Jd/rsoFXX5rxsd/KJYIzQ3OgZaOrzyP1sYWzqG5hWz0WFuXuk2nf2WDrXpxjckG2Q1NK9oQWNsSBpar5w2nbn16rfJXDtop9eqne7j4sDLFYmPyyAv114+LvicXmXW6irz0aXtxfGlLcXVzOL1tI+LeC8jB26HK2IarvAxRuJjYMbHaJC/ISj/417+B9v0CN/Vwgif72FF/2OZ/AFUDT2A6mvU1v9Qsf/xaf+D4vyR+MwwEs8e/u9h9PA//zOHd8ZnDj4+6PD/6Qr/Ix0C/yMdL58j/QO30Foo+DZolwAAAABJRU5ErkJggg==";export{b as _,k as c};
