import{h as a,N as s,a8 as t,r as e,j as n,D as c,k as o,l as r,m as i,n as l,z as d,Q as p,C as m}from"./vendor-372f2d73.js";import{i as u}from"./core-ddac5727.js";import"./index-d24ff306.js";import"./index-8cc339c1.js";const f={class:"sign-view"},g={class:"content-box"},v=d("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),h=d("div",{class:"tip"},"确保您的保障按月生效",-1),x=m(" 前往微信开通 "),j=a({setup(a){const m=s().query,j=t();e(!1),e(!1),e("");const y=()=>{j.replace({path:"/cashier/payCheck",query:m})};return n((()=>{u&&c.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{y()}))})),(a,s)=>{const t=o("van-icon"),e=o("VanButton"),n=o("ProPageWrap");return r(),i(n,{"main-class":"page-sign-pay"},{default:l((()=>[d("div",f,[d("div",g,[p(t,{name:"wechat-pay",class:"large-icon"}),v,h]),p(e,{size:"large",block:"",class:"btn-go-wx",onClick:y},{default:l((()=>[x])),_:1})])])),_:1})}}});export{j as default};
