import{d as a,a as s,u as t,r as e,z as c,a5 as n,b as i,c as o,e as r,w as l,i as d,f as p,n as u}from"./index-b655107d.js";import{i as f}from"./core-a8caa9d6.js";import"./pdfdist-666d4573.js";import"./index-c7c62fb1.js";const m={class:"sign-view"},g={class:"content-box"},b=d("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),v=d("div",{class:"tip"},"确保您的保障按月生效",-1),x=u(" 前往微信开通 "),h=a({setup(a){const u=s().query,h=t();e(!1),e(!1),e("");const y=()=>{h.replace({path:"/cashier/payCheck",query:u})};return c((()=>{f&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{y()}))})),(a,s)=>{const t=i("van-icon"),e=i("VanButton"),c=i("ProPageWrap");return o(),r(c,{"main-class":"page-sign-pay"},{default:l((()=>[d("div",m,[d("div",g,[p(t,{name:"wechat-pay",class:"large-icon"}),b,v]),p(e,{size:"large",block:"",class:"btn-go-wx",onClick:y},{default:l((()=>[x])),_:1})])])),_:1})}}});export{h as default};
