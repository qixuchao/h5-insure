import{d as a,u as s,a as e,r as t,a1 as c,D as n,av as i,B as r,b as o,c as l,e as p,w as d,f,i as u,j as m}from"./index-71702650.js";import{i as g}from"./core-5fb53fc4.js";import"./pdfh5-008ca364.js";const h={class:"sign-view"},v={class:"content-box"},y=f("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),b=f("div",{class:"tip"},"确保您的保障按月生效",-1),x=a({__name:"signPay",setup(a){const x=s().query,j=e();t(!1),t(!1),t("");const w=()=>{j.replace({path:"/cashier/payCheck",query:x})};return c((()=>{g&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{w()}))})),(a,s)=>{const e=i,t=r,c=o("ProPageWrap");return l(),p(c,{"main-class":"page-sign-pay"},{default:d((()=>[f("div",h,[f("div",v,[u(e,{name:"wechat-pay",class:"large-icon"}),y,b]),u(t,{size:"large",block:"",class:"btn-go-wx",onClick:w},{default:d((()=>[m(" 前往微信开通 ")])),_:1})])])),_:1})}}});export{x as default};
