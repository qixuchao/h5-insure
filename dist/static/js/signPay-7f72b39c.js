import{d as a,u as s,c5 as e,a as t,r as c,R as n,D as r,aj as i,B as o,Z as l,bN as d,b as p,g as u,w as f,e as m,i as g,j as h,f as v}from"./index-313522ff.js";import{i as y}from"./core-959aadcd.js";const b={class:"sign-view"},x={class:"content-box"},_=g("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),j=g("div",{class:"tip"},"确保您的保障按月生效",-1),w=a({__name:"signPay",setup(a){const w=s().query,k=e(),P=t();c(!1),c(!1),c("");const q=()=>{P.replace({path:"/cashier/payCheck",query:w})};return n((()=>{y&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),n=d;return p(),u(n,{"theme-vars":v(k)},{default:f((()=>[m(c,{"main-class":"page-sign-pay"},{default:f((()=>[g("div",b,[g("div",x,[m(e,{name:"wechat-pay",class:"large-icon"}),_,j]),m(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:f((()=>[h(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{w as default};
