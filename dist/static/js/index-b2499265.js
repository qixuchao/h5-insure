var P=Object.defineProperty;var E=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var S=(l,t,n)=>t in l?P(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,B=(l,t)=>{for(var n in t||(t={}))Q.call(t,n)&&S(l,n,t[n]);if(E)for(var n of E(t))W.call(t,n)&&S(l,n,t[n]);return l};import{a as X,b as Y,e as Z,q as A}from"./select-105475a6.js";import{_ as ee}from"./index-e4c11be9.js";import{u as ae}from"./index-b8742a0a.js";import{g as te,C as h,a4 as F,r as m,k as v,h as g,j as y,y as d,m as $,z as T,s as k,n as V,E as oe,I as L,F as ne,B as N}from"./vendor-e9263418.js";const le={class:"com-pop-select"},se={class:"title"},ce=N(" \u641C\u7D22 "),ue={class:"back-icon"},re=["src"],ie={class:"search"},de={class:"cell-list"},me=["onClick"],ve={class:"footer"},Ce=te({props:{visible:{type:Boolean,default:!1},selectValue:{type:Array,default:()=>[]}},emits:["on-submit","update:visible"],setup(l,{emit:t}){const n=l,{getIconUrl:q}=ae(),u=h([]),b=h([]),f=h([]),p=h([]),D=h(""),C=h(!1),w=h(0),I=()=>{C.value=!0;const{memberType:a="",memberCode:e=""}=u.value[u.value.length-1]||{};A({memberType:a,directLevel:1,memberCode:e}).then(o=>{const{status:r}=o;if(r===200){const s=[],c=o.data.data.map(_=>(s.push(`${_.agencyId}_${_.memberType}`),B({unionCode:`${_.agencyId}_${_.memberType}`},_)));f.value=c,b.value=b.value.concat(c)}}).finally(()=>{C.value=!1})};F(()=>n.visible,a=>{a&&(p.value=n.selectValue.map(e=>`${e.agencyId}_${e.memberType}`)||[],I())}),F(p,async a=>{const e=[];a.forEach(r=>{const s=b.value.find(c=>c.unionCode===r);s&&e.push({memberType:s.memberType,memberCode:s.memberCode})});const{data:{data:o}}=await X({codeList:e});w.value=o||0});const x=a=>{if(a.hasSubordinate){const{memberType:e,memberCode:o}=a;u.value.push({memberType:e,memberCode:o,unionCode:`${o}_${e}`}),I()}},U=a=>{var e;u.value=[],C.value=!0,A({keyword:a,directLevel:1,memberType:a?"ALL":"",memberCode:(e=u.value[u.value.length-1])==null?void 0:e.memberCode}).then(o=>{const{status:r}=o;if(r===200){const s=o.data.data.map(c=>B({unionCode:`${c.agencyId}_${c.memberType}`},c));f.value=s,b.value=b.value.concat(s)}}).finally(()=>{C.value=!1})},j=()=>{I()},z=()=>{D.value="",t("update:visible",!1)},G=()=>{p.value=[]},R=()=>{u.value.length>0&&(u.value.pop(),I())},H=()=>{const a=[];p.value.forEach(e=>{const o=b.value.find(r=>r.unionCode===e);a.push(o)}),D.value="",t("on-submit",a),t("update:visible",!1)};return(a,e)=>{const o=m("van-search"),r=m("van-icon"),s=m("van-checkbox"),c=m("van-cell"),_=m("van-cell-group"),J=m("van-checkbox-group"),K=m("van-button"),M=m("van-popup");return v(),g(M,{show:l.visible,round:"",position:"bottom",style:{height:"70%"},closeable:"",onClickCloseIcon:z},{default:y(()=>[d("div",le,[d("div",se,[ce,d("div",ue,[u.value.length>0?(v(),$("div",{key:0,class:"back-icon-left",onClick:R},[d("img",{src:T(Y),alt:""},null,8,re)])):k("",!0),p.value.length>0?(v(),$("div",{key:1,class:"back-icon-right",onClick:G},"\u6E05\u7A7A")):k("",!0)])]),d("div",ie,[V(o,{modelValue:D.value,"onUpdate:modelValue":e[0]||(e[0]=i=>D.value=i),shape:"round","left-icon":T(q)("target.searchImg"),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",onSearch:U,onClear:j},null,8,["modelValue","left-icon"])]),d("div",de,[f.value.length>0?(v(),g(J,{key:0,modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=i=>p.value=i)},{default:y(()=>[V(_,{inset:""},{default:y(()=>[(v(!0),$(ne,null,oe(f.value,(i,O)=>(v(),g(c,{key:O,class:"cell",clickable:!1},{title:y(()=>[V(s,{name:i.unionCode,shape:"square","label-disabled":!0},{default:y(()=>[d("div",{class:"area-wrap",onClick:pe=>i.hasChild&&x(i)},[d("div",null,L(i.agencyName),1),i.hasChild?(v(),g(r,{key:0,name:"arrow",color:"#DDDDDD",style:{marginRight:"15px"}})):k("",!0)],8,me)]),_:2},1032,["name"])]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])):k("",!0),!C.value&&f.value.length===0?(v(),g(ee,{key:1,"empty-img":T(Z),title:"\u6CA1\u6709\u627E\u5230\u76F8\u5173\u4FE1\u606F~","empty-class":"empty-select"},null,8,["empty-img"])):k("",!0)]),d("div",ve,[V(K,{type:"primary",class:"btn",onClick:H},{default:y(()=>[N("\u786E\u5B9A\xB7\u5DF2\u9009"+L(w.value)+"\u4EBA",1)]),_:1})])])]),_:1},8,["show"])}}});export{Ce as _};
