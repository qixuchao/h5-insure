import{d as a,a as s,u as e,r as t,G as c,aj as n,b4 as r,B as i,c as o,e as l,w as p,j as d,f,n as u,b as m}from"./index-f60e076f.js";import{i as g}from"./core-1c716cec.js";import"./pdfh5-008ca364.js";const h={class:"sign-view"},y={class:"content-box"},b=d("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),j=d("div",{class:"tip"},"确保您的保障按月生效",-1),v=a({__name:"signPay",setup(a){const v=s().query,x=e();t(!1),t(!1),t("");const w=()=>{x.replace({path:"/cashier/payCheck",query:v})};return c((()=>{g&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{w()}))})),(a,s)=>{const e=r,t=i,c=m("ProPageWrap");return o(),l(c,{"main-class":"page-sign-pay"},{default:p((()=>[d("div",h,[d("div",y,[f(e,{name:"wechat-pay",class:"large-icon"}),b,j]),f(t,{size:"large",block:"",class:"btn-go-wx",onClick:w},{default:p((()=>[u(" 前往微信开通 ")])),_:1})])])),_:1})}}});export{v as default};
