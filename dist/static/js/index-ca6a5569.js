import{h as a,N as e,r as s,aE as r,j as l,k as o,l as d,m as n,n as t,Q as u,z as i,I as v,C as m,A as c,y as p,s as f,aF as y,E as g,F as h,T as N,aG as b}from"./vendor-372f2d73.js";import{g as j,P as k,u as P,s as x,l as A}from"./core-bd19b379.js";import{u as C}from"./theme-126054aa.js";import"./index-d24ff306.js";import"./index-dc10f08b.js";const I={class:"pay-amount"},V=m(" ￥"),W={class:"amount"},_={class:"order-info"},S={class:"order-name"},w={class:"order-no"},z={key:0},E={class:"pay-wrapper"},F=["src"],q=a({setup(a){var q;const B=C(),G=e().query,J=j(G.payWay||k.WXPAY),O=s(),Q=s(!1),T=s(null==(q=J[0])?void 0:q.name);s("h5");const U=()=>{x({...O.value,payWay:T.value,code:G.code,extraInfo:JSON.stringify({wxCode:G.code})})},{copy:X,copied:Y,isSupported:D}=r({source:""}),H=()=>{var a;X(null==(a=O.value)?void 0:a.orderNo),N("复制成功")};return P(),l((()=>{Q.value=!0,A({orderNo:G.orderNo||"P2211220947519991000001750022183",tenantId:G.tenantId||"9991000001"}).then((a=>{"10000"===a.code&&(O.value=a.data)})).finally((()=>{Q.value=!1}))})),(a,e)=>{const s=o("ProSvg"),r=o("VanButton"),l=o("van-config-provider"),N=o("ProPageWrap");return d(),n(N,{title:"收银台","main-class":"page-cashier"},{default:t((()=>[u(l,{"theme-vars":c(B)},{default:t((()=>{var a,l,o;return[i("div",I,[V,i("span",W,v(null==(a=O.value)?void 0:a.orderAmt),1)]),i("div",_,[i("div",S,v(null==(l=O.value)?void 0:l.orderName),1),i("div",w,[m(" 订单号： "+v((null==(o=O.value)?void 0:o.orderNo)+" ")+" ",1),c(D)?(d(),p("span",z,[u(s,{name:"copy",onClick:H})])):f("",!0)])]),i("div",E,[u(c(y),{modelValue:T.value,"onUpdate:modelValue":e[0]||(e[0]=a=>T.value=a)},{default:t((()=>[(d(!0),p(h,null,g(c(J),(a=>(d(),p("div",{key:a.name,class:"pay-item"},[i("span",null,[i("img",{src:a.img},null,8,F),m(v(a.title),1)]),u(c(b),{name:a.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),u(r,{type:"primary",disabled:!T.value,round:"",size:"large",block:"",onClick:U},{default:t((()=>{var a;return[m("确认付款 ￥"+v(null==(a=O.value)?void 0:a.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1},8,["theme-vars"])])),_:1})}}});export{q as default};
