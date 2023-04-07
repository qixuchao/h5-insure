import{d as e,r as a,E as l,an as t,b6 as s,c as d,e as o,w as i,f as u,g as r,a7 as n,k as v,j as c,n as A,t as p,a5 as f,aQ as w,B as m,bT as C,a8 as h}from"./index-ac0d8bf0.js";import{t as y}from"./theme-ea709837.js";const b={class:"item"},B={class:"footer"},k=e({__name:"index",props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0}},emits:["update:show","submit","onCloseFilePreview"],setup(e,{emit:k}){const Q=e,g=a(Q.show),x=a(!0),U=a(Q.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),j=a(Q.activeIndex),L=a(0),I=a(null),R=l((()=>{var e,a;return null==(a=null==(e=U.value)?void 0:e[j.value])?void 0:a.attachmentUri})),D=l((()=>{var e;return null==(e=U.value[j.value])?void 0:e.readDisabled})),J=l((()=>!(j.value>=Q.forceReadCound-1)&&(!(L.value>=Q.forceReadCound)&&(L.value<Q.forceReadCound&&j.value!==Q.forceReadCound-1)))),F=()=>{j.value+=1},V=()=>{k("update:show",!1),k("submit")};t((()=>Q),(()=>{g.value=Q.show,j.value=Q.activeIndex}),{deep:!0,immediate:!0});const N=e=>{var a,l,t;if(e){const s=(null==(a=e.target)?void 0:a.scrollHeight)||e.scrollHeight,d=(null==(l=e.target)?void 0:l.scrollTop)||e.scrollTop,o=(null==(t=e.target)?void 0:t.clientHeight)||e.clientHeight;Math.floor(s-d-15)<=o&&x.value&&U.value[j.value].readDisabled&&(U.value[j.value].disabled=!1,U.value[j.value].readDisabled=!1,U.value[j.value+1].disabled=!1,L.value+=1)}};return t((()=>j.value),(()=>{x.value=!1,Q.show&&(L.value>=Q.forceReadCound&&U.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{x.value=!0}),800)),s((()=>{setTimeout((()=>{N(I.value)}),2e3)}))}),{immediate:!0}),(a,l)=>{const t=f,s=w,x=m,L=C,O=h;return d(),o(O,{show:r(g),"onUpdate:show":l[1]||(l[1]=e=>n(g)?g.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:l[2]||(l[2]=e=>k("onCloseFilePreview"))},{default:i((()=>[u(L,{"theme-vars":r(y),class:"custom-provider"},{default:i((()=>[r(g)?(d(),o(t,{key:0,active:r(j),"onUpdate:active":l[0]||(l[0]=e=>n(j)?j.value=e:null),list:r(U).map(((e,a)=>({title:e.attachmentName,disabled:a!=r(j)&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):v("",!0),c("div",{ref_key:"previewRef",ref:I,class:"list",onScroll:N},[c("div",b,[(d(),o(s,{key:r(R),content:r(R),type:"pdf","forbid-click":!0},null,8,["content"]))])],544),c("div",B,[r(J)?(d(),o(x,{key:0,disabled:r(D),type:"primary",block:"",round:"",onClick:F},{default:i((()=>[A(p(`${e.beforeReadOverText}(${r(j)+1}/${e.forceReadCound})`),1)])),_:1},8,["disabled"])):(d(),o(x,{key:1,disabled:r(D),type:"primary",block:"",round:"",onClick:V},{default:i((()=>[A(p(Q.text),1)])),_:1},8,["disabled"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});var Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAMAAABjROYVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4MhPqcAAAAndFJOUwCSevYF7un6TRG1/diZNTvQSQt1GWWMH0VQAstuxoNe4kDgLeSoJ7BYGnQAAARqSURBVHjaxVvZdqMwDBXBAQyBLJCNZiNpy///4RzJNG6HBhM1tu/LzOlxucWSrxYLeBLiMynz9Li4TuN4el0c07xMPgXYQ3XOZ3HbIWs14ll+riwQiiSYtYOYBclr37gIonYEoqCAF0GW39/xkgaH5fy2lULI7W2+PATp5fv7lvIVlKfp3XTHU7OCGgj0T/efVXM63o09Pf2VttqEX8/KlysYwGqZf/114aYCPsSko4zTvRixfJ/GHe2E7VO7zpbRRI42xiTqbLvj7exHS3g/rOAJrA7vLeGDsceJslC0Fk8bZR0pL0ie/cWNkp2c4Yk1yFzp1eapP3h7bBFvBVtN3lrEcQujMaetjcsa2KjLmLZ4DiOxD0l6ij9KJwlVuIdRWJNBUvlnLUvJLdYwApMWMQEG2I+ihfEZXoJzPIp1TYZI4EVIyD3WBh/Kxrvc+IOQ7QeXhPieHE7+I7dTtGcCL0VCm/dQJQTp0BlejDNp0yNF3JhdjX9yNg/2gTQBLIBU4lerVWjQqwQLkBc0awV9YMyOC7CCIsaoDj3scAtKsIQSn77ree4M42cNllBjfJ2JXzwsK8Aaiqx/MirUjRwsIkdhqnpHNJJgETL6/7DKkGKBVazxVSVonDC/FWAVAvPhE9whURcOYBkHVAj54xRFK7CMVfRDCWYMoWcK/ww6FCiAEqxDohgWoBCYo4sMFuEikOwFOtoEQBC418M5cRNROyXaPawquwXNcAaGviPucXQqjAe7HUhlEko1jQIjpve4GhgUkFYMshKnQmDUwuDuu0sYwqIdYNWciAUMYfnlvxU+aviQhm2P9QFnFg4fVVxadcnaEQxvOsCqOc1vCscu3cyVJJptqln7nGabapHPO5M25rDUZ+1zmsNjo4wq8LdMuruLe6y/csY7k/7iIgGfWHSDCUmP9cGPTcBk9BMS0kAGK4uzTkkeSrI+g5XDqXyyhJziN4eVwwkHct+U9IjDyuEkTUrpuM6Bw8rhhDlKEanNDRisLE64kWpd27bdAoOVxQlbLA0BQ5wEBiuLEyQGb8CnCGCwsjhB4PqOlMHK4lSk3fYyWFmcanuVI7kjJUdSR8bd9tKRUeLgzpFIHJQMujsyJINK8N2JAwm+Cm3uZJBCmwri7gSfgrhKV9yFNkpXdGJmP4jrxEyloK7SFUpBdbLtIjHTyTaVFa5SUCordAHlItnWBZQqFd2UFVQq6qLYfgGli2Jd/rsoFXX5rxsd/KJYIzQ3OgZaOrzyP1sYWzqG5hWz0WFuXuk2nf2WDrXpxjckG2Q1NK9oQWNsSBpar5w2nbn16rfJXDtop9eqne7j4sDLFYmPyyAv114+LvicXmXW6irz0aXtxfGlLcXVzOL1tI+LeC8jB26HK2IarvAxRuJjYMbHaJC/ISj/417+B9v0CN/Vwgif72FF/2OZ/AFUDT2A6mvU1v9Qsf/xaf+D4vyR+MwwEs8e/u9h9PA//zOHd8ZnDj4+6PD/6Qr/Ix0C/yMdL58j/QO30Foo+DZolwAAAABJRU5ErkJggg==";export{k as _,Q as c};
