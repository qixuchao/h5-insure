import{d as a,u as s,bI as e,a as t,r as c,Z as n,D as r,ah as i,B as o,a3 as l,bs as p,b as f,g as u,w as d,e as m,i as g,j as h,f as b}from"./index-3ac382b1.js";import{i as v}from"./core-3ccfffe0.js";const y={class:"sign-view"},x={class:"content-box"},_=g("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=g("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();c(!1),c(!1),c("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return n((()=>{v&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),n=p;return f(),u(n,{"theme-vars":b(k)},{default:d((()=>[m(c,{"main-class":"page-sign-pay"},{default:d((()=>[g("div",y,[g("div",x,[m(e,{name:"wechat-pay",class:"large-icon"}),_,w]),m(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:d((()=>[h(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
