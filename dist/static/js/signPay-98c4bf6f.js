import{h as a,N as s,a8 as t,r as e,j as n,D as c,k as o,l as r,m as i,n as l,z as p,Q as d,C as m}from"./vendor-0381d15c.js";import{i as u}from"./core-6837614b.js";import"./index-38a8c5cf.js";import"./index-24f37ac0.js";const f={class:"sign-view"},g={class:"content-box"},v=p("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),h=p("div",{class:"tip"},"确保您的保障按月生效",-1),x=m(" 前往微信开通 "),j=a({setup(a){const m=s().query,j=t();e(!1),e(!1),e("");const y=()=>{j.replace({path:"/cashier/payCheck",query:m})};return n((()=>{u&&c.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{y()}))})),(a,s)=>{const t=o("van-icon"),e=o("VanButton"),n=o("ProPageWrap");return r(),i(n,{"main-class":"page-sign-pay"},{default:l((()=>[p("div",f,[p("div",g,[d(t,{name:"wechat-pay",class:"large-icon"}),v,h]),d(e,{size:"large",block:"",class:"btn-go-wx",onClick:y},{default:l((()=>[x])),_:1})])])),_:1})}}});export{j as default};
