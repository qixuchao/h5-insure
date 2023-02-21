import{t as e}from"./theme-ea709837.js";import{d as a,r as l,x as t,aa as o,aQ as s,b as d,c as i,e as r,w as u,f as n,g as v,X as c,k as A,j as p,n as f,t as w}from"./index-4c2d8b53.js";const m={class:"item"},C={class:"footer"},h=a({__name:"index",props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0}},emits:["update:show","submit","onCloseFilePreview"],setup(a,{emit:h}){const y=a,b=l(y.show),B=l(!0),k=l(y.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),g=l(y.activeIndex),x=l(0),Q=l(null),U=t((()=>{var e,a;return null==(a=null==(e=k.value)?void 0:e[g.value])?void 0:a.attachmentUri})),j=t((()=>{var e;return null==(e=k.value[g.value])?void 0:e.readDisabled})),L=t((()=>!(g.value>=y.forceReadCound-1)&&(!(x.value>=y.forceReadCound)&&(x.value<y.forceReadCound&&g.value!==y.forceReadCound-1)))),I=()=>{g.value+=1},R=()=>{h("update:show",!1),h("submit")};o((()=>y),(()=>{b.value=y.show,g.value=y.activeIndex}),{deep:!0,immediate:!0});const D=e=>{var a,l,t;if(e){const o=(null==(a=e.target)?void 0:a.scrollHeight)||e.scrollHeight,s=(null==(l=e.target)?void 0:l.scrollTop)||e.scrollTop,d=(null==(t=e.target)?void 0:t.clientHeight)||e.clientHeight;Math.floor(o-s-15)<=d&&B.value&&k.value[g.value].readDisabled&&(k.value[g.value].disabled=!1,k.value[g.value].readDisabled=!1,k.value[g.value+1].disabled=!1,x.value+=1)}};return o((()=>g.value),(()=>{B.value=!1,y.show&&(x.value>=y.forceReadCound&&k.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{B.value=!0}),800)),s((()=>{setTimeout((()=>{D(Q.value)}),2e3)}))}),{immediate:!0}),(l,t)=>{const o=d("ProTab"),s=d("ProFilePreview"),B=d("VanButton"),x=d("van-config-provider"),F=d("ProPopup");return i(),r(F,{show:v(b),"onUpdate:show":t[1]||(t[1]=e=>c(b)?b.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:t[2]||(t[2]=e=>h("onCloseFilePreview"))},{default:u((()=>[n(x,{"theme-vars":v(e),class:"custom-provider"},{default:u((()=>[v(b)?(i(),r(o,{key:0,active:v(g),"onUpdate:active":t[0]||(t[0]=e=>c(g)?g.value=e:null),list:v(k).map(((e,a)=>({title:e.attachmentName,disabled:a!=v(g)&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):A("",!0),p("div",{ref_key:"previewRef",ref:Q,class:"list",onScroll:D},[p("div",m,[(i(),r(s,{key:v(U),content:v(U),type:"pdf","forbid-click":!0},null,8,["content"]))])],544),p("div",C,[v(L)?(i(),r(B,{key:0,disabled:v(j),type:"primary",block:"",round:"",onClick:I},{default:u((()=>[f(w(`${a.beforeReadOverText}(${v(g)+1}/${a.forceReadCound})`),1)])),_:1},8,["disabled"])):(i(),r(B,{key:1,disabled:v(j),type:"primary",block:"",round:"",onClick:R},{default:u((()=>[f(w(y.text),1)])),_:1},8,["disabled"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});var y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAMAAABjROYVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4MhPqcAAAAndFJOUwCSevYF7un6TRG1/diZNTvQSQt1GWWMH0VQAstuxoNe4kDgLeSoJ7BYGnQAAARqSURBVHjaxVvZdqMwDBXBAQyBLJCNZiNpy///4RzJNG6HBhM1tu/LzOlxucWSrxYLeBLiMynz9Li4TuN4el0c07xMPgXYQ3XOZ3HbIWs14ll+riwQiiSYtYOYBclr37gIonYEoqCAF0GW39/xkgaH5fy2lULI7W2+PATp5fv7lvIVlKfp3XTHU7OCGgj0T/efVXM63o09Pf2VttqEX8/KlysYwGqZf/114aYCPsSko4zTvRixfJ/GHe2E7VO7zpbRRI42xiTqbLvj7exHS3g/rOAJrA7vLeGDsceJslC0Fk8bZR0pL0ie/cWNkp2c4Yk1yFzp1eapP3h7bBFvBVtN3lrEcQujMaetjcsa2KjLmLZ4DiOxD0l6ij9KJwlVuIdRWJNBUvlnLUvJLdYwApMWMQEG2I+ihfEZXoJzPIp1TYZI4EVIyD3WBh/Kxrvc+IOQ7QeXhPieHE7+I7dTtGcCL0VCm/dQJQTp0BlejDNp0yNF3JhdjX9yNg/2gTQBLIBU4lerVWjQqwQLkBc0awV9YMyOC7CCIsaoDj3scAtKsIQSn77ree4M42cNllBjfJ2JXzwsK8Aaiqx/MirUjRwsIkdhqnpHNJJgETL6/7DKkGKBVazxVSVonDC/FWAVAvPhE9whURcOYBkHVAj54xRFK7CMVfRDCWYMoWcK/ww6FCiAEqxDohgWoBCYo4sMFuEikOwFOtoEQBC418M5cRNROyXaPawquwXNcAaGviPucXQqjAe7HUhlEko1jQIjpve4GhgUkFYMshKnQmDUwuDuu0sYwqIdYNWciAUMYfnlvxU+aviQhm2P9QFnFg4fVVxadcnaEQxvOsCqOc1vCscu3cyVJJptqln7nGabapHPO5M25rDUZ+1zmsNjo4wq8LdMuruLe6y/csY7k/7iIgGfWHSDCUmP9cGPTcBk9BMS0kAGK4uzTkkeSrI+g5XDqXyyhJziN4eVwwkHct+U9IjDyuEkTUrpuM6Bw8rhhDlKEanNDRisLE64kWpd27bdAoOVxQlbLA0BQ5wEBiuLEyQGb8CnCGCwsjhB4PqOlMHK4lSk3fYyWFmcanuVI7kjJUdSR8bd9tKRUeLgzpFIHJQMujsyJINK8N2JAwm+Cm3uZJBCmwri7gSfgrhKV9yFNkpXdGJmP4jrxEyloK7SFUpBdbLtIjHTyTaVFa5SUCordAHlItnWBZQqFd2UFVQq6qLYfgGli2Jd/rsoFXX5rxsd/KJYIzQ3OgZaOrzyP1sYWzqG5hWz0WFuXuk2nf2WDrXpxjckG2Q1NK9oQWNsSBpar5w2nbn16rfJXDtop9eqne7j4sDLFYmPyyAv114+LvicXmXW6irz0aXtxfGlLcXVzOL1tI+LeC8jB26HK2IarvAxRuJjYMbHaJC/ISj/417+B9v0CN/Vwgif72FF/2OZ/AFUDT2A6mvU1v9Qsf/xaf+D4vyR+MwwEs8e/u9h9PA//zOHd8ZnDj4+6PD/6Qr/Ix0C/yMdL58j/QO30Foo+DZolwAAAABJRU5ErkJggg==";export{h as _,y as c};
