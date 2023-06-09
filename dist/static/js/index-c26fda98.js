import{b9 as A,d as e,c7 as t,L as a,e as s,bN as r,be as l,bd as u,c3 as o,bf as n,bm as d,G as c,b as g,c as i,i as p,f,E as v,h as M,k as D,g as B,w as N,j as C,B as E,r as U,u as R,a as S,aC as K,Z as y,m as Y,cs as m,$ as w,cw as k,n as J}from"./index-909b9511.js";import{b as I}from"./bankCard-8b68536d.js";const[T,b]=A("row"),Q=Symbol(T);var P=e({name:T,props:{tag:r("div"),wrap:l,align:String,gutter:u(0),justify:String},setup(A,{slots:e}){const{children:r,linkChildren:l}=t(Q),u=a((()=>{const A=[[]];let e=0;return r.forEach(((t,a)=>{e+=Number(t.span),e>24?(A.push([a]),e-=24):A[A.length-1].push(a)})),A}));return l({spaces:a((()=>{const e=Number(A.gutter),t=[];return e?(u.value.forEach((A=>{const a=e*(A.length-1)/A.length;A.forEach(((A,s)=>{if(0===s)t.push({right:a});else{const s=e-t[A-1].right,r=a-s;t.push({left:s,right:r})}}))})),t):t}))}),()=>{const{tag:t,wrap:a,align:r,justify:l}=A;return s(t,{class:b({[`align-${r}`]:r,[`justify-${l}`]:l,nowrap:!a})},{default:()=>{var A;return[null==(A=e.default)?void 0:A.call(e)]}})}}});const[h,j]=A("col");const G=d(e({name:h,props:{tag:r("div"),span:u(0),offset:n},setup(A,{slots:e}){const{parent:t,index:r}=o(Q),l=a((()=>{if(!t)return;const{spaces:A}=t;if(A&&A.value&&A.value[r.value]){const{left:e,right:t}=A.value[r.value];return{paddingLeft:e?`${e}px`:null,paddingRight:t?`${t}px`:null}}}));return()=>{const{tag:t,span:a,offset:r}=A;return s(t,{style:l.value,class:j({[a]:a,[`offset-${r}`]:r})},{default:()=>{var A;return[null==(A=e.default)?void 0:A.call(e)]}})}}})),L=d(P);const x={class:"com-result"},H=["src"],Z={class:"title"},V={key:0,class:"desc"},q={class:"order"},W={class:"buttons"};var O=c(e({__name:"index",props:{status:{type:String,default:"success",required:!0},title:{type:String,default:"",required:!0},desc:{type:String,default:""},okText:{type:String,default:""},cancelText:{type:String,default:""}},emits:["ok","cancel"],setup(A,{emit:e}){const t=A,s=()=>{e("cancel")},r=()=>{e("ok")},l=a((()=>"success"===t.status?"data:image/png;base64,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":"fail"===t.status?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUdwTM4kMNcoNM0ANNYoNNcnNNYoNNYoNNcpNNYoM9YpNdYoNNYoNdYoNdMkK9YoNNcnM9cmNNYoNdYoNNYoNNcnM9YpNf////7+/tk5Rf34+OiIj+BkbPK6vdYtOPfY2t1QWu6nrNYrNtxGUPPCxvnj5OycoeZ+huRyevbT1YHMNf8AAAAWdFJOUwAHtgPxHMv9h0vopsONEdpAJEXUa1TPw7elAAADq0lEQVR42sWb2XKjMBBFGxBu1oCNfcFLHMfZ//8HZ5gXqpgZJLmBPi95yz2RhFKl7qaHiNN9mRdNZgyzMVlT5OU+jWkV4kNZGPTwnYefPaYoD8taBLuygYWm3AW0CFGaGzhh8jSiudkmGZjhBDOyZEtzUocMTzisaS7SDR5ik9Ic7DZ4mM1OvvchRISysxAkDBnMSSA4exUYQu6oanqMKGHMAicRPUBcYDaKmLxJM8xIlgqWX2MbghyzkwfkzFOIBQifXJf/aYNF2DgaxBUWooqd/v4Ki1E5rMGw/jq7EIRYlDCwbECOhckjmiLB4iQ0QcpYHE4nPsAMK5DF9B+iAqtQRJYDoHUMasZKcE3/IKiwGlVg2QCNTdgy1oN5S2NCrEpII3ZYmd1IYIOV2YzuYKxOOl4A1SWooUAt+wTkhLI7QA5vLZfgetdhlEEDziLfb/D6doWV49vV90vM4cL97b1ru/cbJrn8dO3p9QgXOKc/BAYu3E5t17bt6YIJzl3b8+FmYAKPfwPXj7anN7Dk9zz7/EMo4cKlbQcDW37buS1BST0NXDi3VoMhv+0ucKHp82M48dVaDPr8gRuciInoACdu7chgKr87XeHEwfkIAM/TBn3+wBlwPgQF3Di+jAwm8p/vcKMgIgO5wTj/CkeM5QxaDMT5QEwpBAbifKS0h8BAnI89lZAYSPNRUg6RgTAfORWQGcjyUVADmYEsnxvKIDMQ5QMZGQgMxPlsyEBgIM0HDDEEBuJ8MDEEBuJ8MBkIDMT5MA8KjO+f7oJHBTJx/nAr+8MZNZJ8uUFDhSBfbsAF5ZJ8uUFOpSRfblDSXpIvN9hTKst/fpEZpBTL8q9HmUFMZET5gMjAEFEhy5cZFERUivKFBiURHST5UoMDEcWCfLFBTL9pBPlCg8bjieb+/Vf+hMENTpQej1TH0zh/yuAHTuw8num+x/nTBm8ez3SUw4HzKN9icIEDuc9T7dco32Jw86kbRZnjGRjybQYfd9jJIq/n+k9r/mDQfcOBxK9gcf/s+l/9ep1cp/c+//TlWbCg0EUAt/Pr2bq3l8/X8xEuhP5Fq/tvMBu1etlOv3CpX7rVL17rl++1ipe81W7hUG9i0W7j0W5kUm/l0m5m027n025oVG/p1G5qVW/rtaLd2EyRVmv3gGpzu357v/6Ag/6Ih/6Qi/6Yj/6g0zDqNQNVrTnsBk4C5XE/5YFH5ZFP5aHX2cd+PciSrfLgs+7o9wrD7yMEw+/q4/+/AAHwWDIwrCabAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB1UExURUdwTA1t/wxu/gxt/wxu/w1t/wtu/wxt/gBy/wxt/w1s/wxu/glu/wxt/gdm/wxt/wBb/wxu/gxu/g1t/wtt/wxt/w1u/v///1OY/rjU/hZz/pfB/vr8/svg/uXv/il//nyw/mGg/kGN/q/P/kaQ/u/1/nWs/nRjXmwAAAAWdFJOUwBLptnOh0L9BfEijRq9EbMBxuXpa1TNRl87AAADP0lEQVR42sXbi3KqMBAG4D9ccgMkoK4WW3vv+z/imc5pu2OnopjAfk/wuwkR1yxuEbzaVFlT9M4Z41xfNFm1UT5gCfW26hz9yXXVtsacrK5yuiCvtMUsrMocXcVlKn0GX/ZkDF3HUF96pKRbQxOZViMVVdBNCoUUdEc36zRi+ZaitB4Rgi0NRTKljah+TvEBKNe4DX98mSLUHSXT1ZhMrSmhtcI0gcufahkCJrAZJZdZXG3V0AyaFa4TVgVFiN+KPqeZ5B5XqHOaTV7jIq7/HIoVLrANzck0FqNCRjPLAsaUNLsSI5Sh2RmFc0K9pgWsa5xhO1pEZ5NtgI+H9+PhMdU20IamGe52n97faCKj/3z/y2miw+6/94Emym2KBRjud18+EixC8IYmett9e6WJjPH4raWp9rtvdzRZi180LRuANE51SwfocELR0gFIAWDF8gGKuB0QH4A0WCsRoMUPbyQCGA8+BCUC8HFoe5kAveVnUCIAP4mZUACTfa2Ak6qAs3wILB+Aj4JKLkCFT7lcgBwAapILQDWArWSALYBKMkAFoJMM0AHBSQZwAZ4kA5CHkg2gsJENsEElG6BCJhsgQyMboEEhG6BALxugh5MN4JIEuH84PD/eGsDEBWDH16e3gaYySQJElMIkWYKIUsTsAW7RRJTCRTyG3KSKKEWPgm522LGRUrzQiCLiKB6Gh91VDqNHcUa3G56OsQkyVBTl8fnwcH9xHR5Hvo43FG14eXodL8XzyAuJIjZbKZ7oHAVP6QxvZ0qxp3M8giM2UymOw8hrOTpiM5ViP9ovrYjNUorjfvyn2ZZmNLzsXy79OK1JUM0NChE5t2hkVNykkqG5TSfCWW5Uisi4VSvCKG5Wi+gtt+tFlFF/WMQzHj9aEtCCaaFDgBW0NFOAiTyJCic6WliHU1poB7BW5hFg3sicAayUOQSZzWkxuY25xhPPaDCJRSjlr3KdIXCZTeQ6n/SFRvErnaKXWqmxstd6uxUuWgldbJa/2s3qgmZR1NLX+6UHHKRHPKSHXKYKkmM+8oNOPOqVQK5xM+lhN4QU434BMULswGNArCA88ik/9MpjvxNEjP0KDD6Ljn7LD7+Lj///A0rtU/vst9frAAAAAElFTkSuQmCC"));return(e,t)=>{const a=E;return g(),i("div",x,[p("img",{src:f(l),alt:"",class:"img"},null,8,H),p("div",Z,v(A.title),1),A.desc?(g(),i("div",V,v(A.desc),1)):M("",!0),p("div",q,[D(e.$slots,"order",{},void 0,!0)]),p("div",W,[A.cancelText?(g(),B(a,{key:0,class:"button cancel",onClick:s},{default:N((()=>[C(v(A.cancelText),1)])),_:1})):M("",!0),A.okText?(g(),B(a,{key:1,class:"button ok",onClick:r},{default:N((()=>[C(v(A.okText),1)])),_:1})):M("",!0)])])}}}),[["__scopeId","data-v-75b931e4"]]);const F={key:0,class:"order-result"},z={key:1,class:"order-result"},X={key:2,class:"order-result"},_=e({name:"OrderResult"});var $=c(e({..._,setup(A){const e="支付失败",t="恭喜你完成投保",r="重新支付",l="查看保单详情",u="修改支付信息",o="确定",n=U({orderNo:"",paymentMethod:"",orderAmount:"",orderStatus:"",orderStatusDesc:"",paymentResultDesc:""}),d=R(),c=S(),{orderNo:p="",preview:D,saleUserId:T="",tenantId:b="",templateId:Q=1}=d.query,P=U({}),h=a((A=>n.value&&[K.SUCCESS,K.PAYMENT_SUCCESS,K.ACCEPT_POLICY].some((A=>{var e;return A===(null==(e=n.value)?void 0:e.orderStatus)})))),j=a((A=>n.value&&[K.PAYMENT_FAILED,K.INSURER_REJECT,K.TIMEOUT,K.FAILED,K.CANCELED].some((A=>{var e;return A===(null==(e=n.value)?void 0:e.orderStatus)})))),x=a((()=>n.value.orderStatus===K.PAYING)),H=a((()=>n.value?h.value?"success":j.value?"fail":"process":"process")),Z=a((()=>h.value?t:j.value?e:"处理中")),V=a((()=>h.value?l:j.value?r:"")),q=a((()=>h.value?o:j.value?u:"")),W=()=>{V.value===l?c.push({path:k.orderDetail,query:d.query}):V.value===r&&c.push({path:k.infoPreview,query:d.query})},_=()=>{q.value===u?c.push({path:k.infoCollection,query:d.query}):q.value===o&&c.push({path:k.orderList,query:d.query})},$=()=>{window.location.reload()};return y((()=>{D||Y({orderNo:p,saleUserId:T,tenantId:b}).then((A=>{var e;const{code:t,data:a}=A;if("10000"===t){P.value=a;const A=null==(e=a.tenantOrderPaymentInfoList)?void 0:e[0];n.value={orderStatusDesc:m[a.orderStatus],orderStatus:a.orderStatus,orderNo:a.orderNo,paymentMethod:I[A.paymentMethod]||"",orderAmount:`￥${a.orderAmount}`,paymentResultDesc:A.paymentResultDesc}}}))})),(A,e)=>{const t=J,a=G,r=L,l=E;return g(),i(w,null,[s(t),s(O,{title:f(Z),status:f(H),"ok-text":f(V),"cancel-text":f(q),onOk:W,onCancel:_},{order:N((()=>[f(h)?(g(),i("div",F,[s(r,null,{default:N((()=>[s(a,{class:"order-label",span:"10"},{default:N((()=>[C("订 单 号：")])),_:1}),s(a,{span:"14"},{default:N((()=>[C(v(f(n).orderNo),1)])),_:1}),s(a,{class:"order-label",span:"10"},{default:N((()=>[C("支付方式：")])),_:1}),s(a,{span:"14"},{default:N((()=>[C(v(f(n).paymentMethod),1)])),_:1}),s(a,{class:"order-label",span:"10"},{default:N((()=>[C("支付金额：")])),_:1}),s(a,{span:"14"},{default:N((()=>[C(v(f(n).orderAmount),1)])),_:1}),s(a,{class:"order-label",span:"10"},{default:N((()=>[C("保单状态：")])),_:1}),s(a,{span:"14"},{default:N((()=>[C(v(f(n).orderStatusDesc),1)])),_:1})])),_:1})])):M("",!0),f(j)?(g(),i("div",z,[f(n).paymentResultDesc?(g(),B(r,{key:0},{default:N((()=>[s(a,{class:"order-label",span:"10"},{default:N((()=>[C("失败原因：")])),_:1}),s(a,{span:"14"},{default:N((()=>[C(v(f(n).paymentResultDesc),1)])),_:1})])),_:1})):M("",!0)])):M("",!0),f(x)?(g(),i("div",X,[s(r,{class:"tac"},{default:N((()=>[s(a,{span:"24",class:"mb20"},{default:N((()=>[C("支付中请耐心等待")])),_:1}),s(a,{span:"24"},{default:N((()=>[C("点击【刷新】按钮刷新支付结果")])),_:1})])),_:1}),s(r,{class:"tac buttons"},{default:N((()=>[s(a,{span:"24"},{default:N((()=>[s(l,{type:"primary",block:"",onClick:$},{default:N((()=>[C("刷新")])),_:1})])),_:1})])),_:1})])):M("",!0)])),_:1},8,["title","status","ok-text","cancel-text"])],64)}}}),[["__scopeId","data-v-58639ebc"]]);export{$ as default};
