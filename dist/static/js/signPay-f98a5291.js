import{d as a,a as s,u as e,r as t,G as c,ai as i,b4 as n,B as r,c as o,e as l,w as p,i as d,f as u,n as f,b as m}from"./index-3e642916.js";import{i as g}from"./core-63d8e165.js";import"./pdfh5-008ca364.js";const h={class:"sign-view"},b={class:"content-box"},v=d("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),x=d("div",{class:"tip"},"确保您的保障按月生效",-1),y=f(" 前往微信开通 "),w=a({setup(a){const f=s().query,w=e();t(!1),t(!1),t("");const j=()=>{w.replace({path:"/cashier/payCheck",query:f})};return c((()=>{g&&i.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{j()}))})),(a,s)=>{const e=n,t=r,c=m("ProPageWrap");return o(),l(c,{"main-class":"page-sign-pay"},{default:p((()=>[d("div",h,[d("div",b,[u(e,{name:"wechat-pay",class:"large-icon"}),v,x]),u(t,{size:"large",block:"",class:"btn-go-wx",onClick:j},{default:p((()=>[y])),_:1})])])),_:1})}}});export{w as default};
