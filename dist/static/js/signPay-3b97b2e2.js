import{d as a,u as s,a as e,r as t,a1 as c,D as n,ax as i,B as r,b as o,c as l,e as p,w as d,f as u,i as m,j as f}from"./index-e25bdee1.js";import{i as g}from"./core-89deac17.js";import"./pdfh5-008ca364.js";const h={class:"sign-view"},x={class:"content-box"},y=u("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),b=u("div",{class:"tip"},"确保您的保障按月生效",-1),v=a({__name:"signPay",setup(a){const v=s().query,j=e();t(!1),t(!1),t("");const w=()=>{j.replace({path:"/cashier/payCheck",query:v})};return c((()=>{g&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{w()}))})),(a,s)=>{const e=i,t=r,c=o("ProPageWrap");return l(),p(c,{"main-class":"page-sign-pay"},{default:d((()=>[u("div",h,[u("div",x,[m(e,{name:"wechat-pay",class:"large-icon"}),y,b]),m(t,{size:"large",block:"",class:"btn-go-wx",onClick:w},{default:d((()=>[f(" 前往微信开通 ")])),_:1})])])),_:1})}}});export{v as default};
