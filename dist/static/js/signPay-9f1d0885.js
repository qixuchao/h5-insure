import{h as a,N as s,a8 as e,r as t,j as n,D as c,k as o,l as r,m as i,n as l,z as p,Q as d,C as f}from"./vendor-372f2d73.js";import{i as m}from"./core-6451318a.js";import"./index-d24ff306.js";import"./index-cc115f6e.js";const u={class:"sign-view"},g={class:"content-box"},v=p("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),h=p("div",{class:"tip"},"确保您的保障按月生效",-1),x=f(" 前往微信开通 "),j=a({setup(a){const f=s().query,j=e();t(!1),t(!1),t("");const y=()=>{j.replace({path:"/cashier/payCheck",query:f})};return n((()=>{m&&c.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{y()}))})),(a,s)=>{const e=o("van-icon"),t=o("VanButton"),n=o("ProPageWrap");return r(),i(n,{"main-class":"page-sign-pay"},{default:l((()=>[p("div",u,[p("div",g,[d(e,{name:"wechat-pay",class:"large-icon"}),v,h]),d(t,{size:"large",block:"",class:"btn-go-wx",onClick:y},{default:l((()=>[x])),_:1})])])),_:1})}}});export{j as default};
