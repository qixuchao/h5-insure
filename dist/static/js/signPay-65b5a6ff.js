import{h as a,N as s,a8 as e,r as t,j as n,D as c,k as o,l as r,m as i,n as l,z as p,Q as d,C as m}from"./vendor-75ce3ac1.js";import{i as u}from"./core-e35c4876.js";import"./index-04d1fea9.js";import"./index-06b07b70.js";const f={class:"sign-view"},g={class:"content-box"},v=p("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),h=p("div",{class:"tip"},"确保您的保障按月生效",-1),x=m(" 前往微信开通 "),b=a({setup(a){const m=s().query,b=e();t(!1),t(!1),t("");const j=()=>{b.replace({path:"/cashier/payCheck",query:m})};return n((()=>{u&&c.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{j()}))})),(a,s)=>{const e=o("van-icon"),t=o("VanButton"),n=o("ProPageWrap");return r(),i(n,{"main-class":"page-sign-pay"},{default:l((()=>[p("div",f,[p("div",g,[d(e,{name:"wechat-pay",class:"large-icon"}),v,h]),d(t,{size:"large",block:"",class:"btn-go-wx",onClick:j},{default:l((()=>[x])),_:1})])])),_:1})}}});export{b as default};
