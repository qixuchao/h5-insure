!function(){var t=document.createElement("style");t.innerHTML=".com-result[data-v-d8156834]{display:flex;flex-direction:column;align-items:center}.com-result .img[data-v-d8156834]{width:1.70667rem;height:1.70667rem;margin-top:3.86667rem}.com-result .title[data-v-d8156834]{margin-top:.42667rem;font-size:.45333rem;font-weight:500;color:#393d46;line-height:.56rem}.com-result .desc[data-v-d8156834]{margin-top:.4rem;font-size:.34667rem;color:#99a9c0;line-height:.50667rem}.com-result .buttons[data-v-d8156834]{display:flex;margin-top:1.28rem;width:100%;font-size:.42667rem;text-align:center;padding:0 .4rem;justify-content:center}.com-result .buttons .button[data-v-d8156834]{width:4.46667rem;height:1.2rem;line-height:1.2rem;border-radius:.10667rem;margin-right:.26667rem}.com-result .buttons .button[data-v-d8156834]:last-child{margin-right:0}.com-result .buttons .cancel[data-v-d8156834]{border:1px solid var(--van-primary-color, var(--zaui-brand));color:var(--van-primary-color, var(--zaui-brand))}.com-result .buttons .ok[data-v-d8156834]{background:var(--van-primary-color, var(--zaui-brand));color:#fff}\n",document.head.appendChild(t),System.register(["./index-legacy-0b5a78eb.js","./order-legacy-a4ee18e1.js","./pdfdist-legacy-70b86b2a.js"],(function(t){"use strict";var e,r,a,A,u,n,c,s,o,i,l,d,g,N,m,v,E,U,w,M,h,B;return{setters:[function(t){e=t._,r=t.d,a=t.y,A=t.b,u=t.c,n=t.g,c=t.i,s=t.l,o=t.t,i=t.j,l=t.e,d=t.w,g=t.n,N=t.r,m=t.a,v=t.u,E=t.z,U=t.p,w=t.f,M=t.E},function(t){h=t.O,B=t.a},function(){}],execute:function(){const f={class:"com-result"},x=["src"],C={class:"title"},I={key:0,class:"desc"},p={class:"buttons"};var y=e(r({props:{status:{type:String,default:"success",required:!0},title:{type:String,default:"",required:!0},desc:{type:String,default:""},okText:{type:String,default:""},cancelText:{type:String,default:""}},emits:["ok","cancel"],setup(t,{emit:e}){const r=t,N=()=>{e("cancel")},m=()=>{e("ok")},v=a((()=>"success"===r.status?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB1UExURUdwTA1t/wtt/wxt/w1t/wxu/wtu/wxt/gBy/wxt/wxu/gdm/w1s/wxt/wxt/gxt/Q1t/Qxu/wxu/g1t/wtt/wxu/gxt/w1u/v///xFw/v7+/rHQ/hBv/oCy/qrM/niu/neu/iqA/pnC/kqS/nat/uTv/snf/qiFeRQAAAAXdFJOUwBLHNmHzkL9BfGNESSzvanEn+Xpa8dUyOkmzQAAA1hJREFUeNrFm+uSoyAQhVGiiPEWczlqkt2NmeT9H3FnU1NFTWoWEhrsr8rf5wBNU0K38CJNdmXbZL3WSmndZ01b7pJULEJ6KDuNH9FdeYjroshLCQeyzItI6slG4yX0JgnvoVr1eIN+VYmQ5LXCm6g6F6FIMniRJWFGv4c3+5y+9jVI1BUt8lcKNJRaFYTZl1AgoiBznuEbPCch7RCMLvXYe1sEZPv2jjTTH2oZ3lv+FsFp3wiEdYMINOuX9TPEQGUvOkglIiHTl8YvEQ255pl/g3sVigYxUY1rL7SITOvIP4iONSMlCtFRiWUDbrEA2/S/AdhhEbrCHgBsYZArLITKf1wAicWQhWUBuBahUlgOpSrxTI1FqcUTORbmOQ73WJj9Uw7G4nzPyBkWJyNEQPgoqMFAzZMDDKoiJMGw6bDowUJfxN2D42V8cSduYqhf79MwzRfY2HytgEZ4PqZhGKbhZnWgi2hJ4Pc0/GOaji+kgjLS+B9M1ikoHwZkRP1husKCFJ+kMfQNV9hIhRCHOOv/FQPTCBsHEwJB9Q1nwBUEHYLy55v+8QQrnRBCx9QfYUcLkfLomyhMWPWRiB2rPnaiZNVHKVpWfbSiYdVHIzJWfWSiZ9VH78xD43g+3ueLK/966kM7DVxvjzPlI44+tFCwcrmZUyXc/BuUy8BszrUI4weUawnug3HgoU+PgZvtbKfrQ7u24XGwOKDro3cloutgcUDXR+ZIxadxtjig66NxHkbjL4sDsj5a93F8enIQVB+l2MHDQTB97EQCDwfB9JGIFD4O6Prm10h7OAimry0/JlYHdH3zY1LCw8GRrG9+zQ7wcUDWNz+nKQgOiPpIxSeS4ICoL80VjYcDor65oslBcEDSR26u6Twc0PV1YS4qPRyQ9bExV7UeDuj6SMxltYcDun5fmOt6Dwdkfaw8HyxO8+MeeKbqq8r3yeZ0Oc/nC6jU/o9W4wmnz49Izvxst2d/uOR+umV/vOZ+vuctYICquEs42ItYuMt4uAuZ2Eu5uIvZuMv5uAsauUs6eYta0RS8Zb37NX9hM39pN19xdbbmLu/nbnBgbvHgbnLhbvPhbnTyb/UKgMwZmt3cw+dv9+NveORv+eRveuVv++VvfOZv/eZvfmdv//8LIzyFYXmhUL8AAAAASUVORK5CYII=":"fail"===r.status?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUdwTM4kMNcoNM0ANNYoNNcnNNYoNNYoNNcpNNYoM9YpNdYoNNYoNdYoNdMkK9YoNNcnM9cmNNYoNdYoNNYoNNcnM9YpNf////7+/tk5Rf34+OiIj+BkbPK6vdYtOPfY2t1QWu6nrNYrNtxGUPPCxvnj5OycoeZ+huRyevbT1YHMNf8AAAAWdFJOUwAHtgPxHMv9h0vopsONEdpAJEXUa1TPw7elAAADq0lEQVR42sWb2XKjMBBFGxBu1oCNfcFLHMfZ//8HZ5gXqpgZJLmBPi95yz2RhFKl7qaHiNN9mRdNZgyzMVlT5OU+jWkV4kNZGPTwnYefPaYoD8taBLuygYWm3AW0CFGaGzhh8jSiudkmGZjhBDOyZEtzUocMTzisaS7SDR5ik9Ic7DZ4mM1OvvchRISysxAkDBnMSSA4exUYQu6oanqMKGHMAicRPUBcYDaKmLxJM8xIlgqWX2MbghyzkwfkzFOIBQifXJf/aYNF2DgaxBUWooqd/v4Ki1E5rMGw/jq7EIRYlDCwbECOhckjmiLB4iQ0QcpYHE4nPsAMK5DF9B+iAqtQRJYDoHUMasZKcE3/IKiwGlVg2QCNTdgy1oN5S2NCrEpII3ZYmd1IYIOV2YzuYKxOOl4A1SWooUAt+wTkhLI7QA5vLZfgetdhlEEDziLfb/D6doWV49vV90vM4cL97b1ru/cbJrn8dO3p9QgXOKc/BAYu3E5t17bt6YIJzl3b8+FmYAKPfwPXj7anN7Dk9zz7/EMo4cKlbQcDW37buS1BST0NXDi3VoMhv+0ucKHp82M48dVaDPr8gRuciInoACdu7chgKr87XeHEwfkIAM/TBn3+wBlwPgQF3Di+jAwm8p/vcKMgIgO5wTj/CkeM5QxaDMT5QEwpBAbifKS0h8BAnI89lZAYSPNRUg6RgTAfORWQGcjyUVADmYEsnxvKIDMQ5QMZGQgMxPlsyEBgIM0HDDEEBuJ8MDEEBuJ8MBkIDMT5MA8KjO+f7oJHBTJx/nAr+8MZNZJ8uUFDhSBfbsAF5ZJ8uUFOpSRfblDSXpIvN9hTKst/fpEZpBTL8q9HmUFMZET5gMjAEFEhy5cZFERUivKFBiURHST5UoMDEcWCfLFBTL9pBPlCg8bjieb+/Vf+hMENTpQej1TH0zh/yuAHTuw8num+x/nTBm8ez3SUw4HzKN9icIEDuc9T7dco32Jw86kbRZnjGRjybQYfd9jJIq/n+k9r/mDQfcOBxK9gcf/s+l/9ep1cp/c+//TlWbCg0EUAt/Pr2bq3l8/X8xEuhP5Fq/tvMBu1etlOv3CpX7rVL17rl++1ipe81W7hUG9i0W7j0W5kUm/l0m5m027n025oVG/p1G5qVW/rtaLd2EyRVmv3gGpzu357v/6Ag/6Ih/6Qi/6Yj/6g0zDqNQNVrTnsBk4C5XE/5YFH5ZFP5aHX2cd+PciSrfLgs+7o9wrD7yMEw+/q4/+/AAHwWDIwrCabAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB1UExURUdwTA1t/wxu/gxt/wxu/w1t/wtu/wxt/gBy/wxt/w1s/wxu/glu/wxt/gdm/wxt/wBb/wxu/gxu/g1t/wtt/wxt/w1u/v///1OY/rjU/hZz/pfB/vr8/svg/uXv/il//nyw/mGg/kGN/q/P/kaQ/u/1/nWs/nRjXmwAAAAWdFJOUwBLptnOh0L9BfEijRq9EbMBxuXpa1TNRl87AAADP0lEQVR42sXbi3KqMBAG4D9ccgMkoK4WW3vv+z/imc5pu2OnopjAfk/wuwkR1yxuEbzaVFlT9M4Z41xfNFm1UT5gCfW26hz9yXXVtsacrK5yuiCvtMUsrMocXcVlKn0GX/ZkDF3HUF96pKRbQxOZViMVVdBNCoUUdEc36zRi+ZaitB4Rgi0NRTKljah+TvEBKNe4DX98mSLUHSXT1ZhMrSmhtcI0gcufahkCJrAZJZdZXG3V0AyaFa4TVgVFiN+KPqeZ5B5XqHOaTV7jIq7/HIoVLrANzck0FqNCRjPLAsaUNLsSI5Sh2RmFc0K9pgWsa5xhO1pEZ5NtgI+H9+PhMdU20IamGe52n97faCKj/3z/y2miw+6/94Emym2KBRjud18+EixC8IYmett9e6WJjPH4raWp9rtvdzRZi180LRuANE51SwfocELR0gFIAWDF8gGKuB0QH4A0WCsRoMUPbyQCGA8+BCUC8HFoe5kAveVnUCIAP4mZUACTfa2Ak6qAs3wILB+Aj4JKLkCFT7lcgBwAapILQDWArWSALYBKMkAFoJMM0AHBSQZwAZ4kA5CHkg2gsJENsEElG6BCJhsgQyMboEEhG6BALxugh5MN4JIEuH84PD/eGsDEBWDH16e3gaYySQJElMIkWYKIUsTsAW7RRJTCRTyG3KSKKEWPgm522LGRUrzQiCLiKB6Gh91VDqNHcUa3G56OsQkyVBTl8fnwcH9xHR5Hvo43FG14eXodL8XzyAuJIjZbKZ7oHAVP6QxvZ0qxp3M8giM2UymOw8hrOTpiM5ViP9ovrYjNUorjfvyn2ZZmNLzsXy79OK1JUM0NChE5t2hkVNykkqG5TSfCWW5Uisi4VSvCKG5Wi+gtt+tFlFF/WMQzHj9aEtCCaaFDgBW0NFOAiTyJCic6WliHU1poB7BW5hFg3sicAayUOQSZzWkxuY25xhPPaDCJRSjlr3KdIXCZTeQ6n/SFRvErnaKXWqmxstd6uxUuWgldbJa/2s3qgmZR1NLX+6UHHKRHPKSHXKYKkmM+8oNOPOqVQK5xM+lhN4QU434BMULswGNArCA88ik/9MpjvxNEjP0KDD6Ljn7LD7+Lj///A0rtU/vst9frAAAAAElFTkSuQmCC"));return(e,r)=>{const a=A("van-button");return u(),n("div",f,[c("img",{src:s(v),alt:"",class:"img"},null,8,x),c("div",C,o(t.title),1),t.desc?(u(),n("div",I,o(t.desc),1)):i("",!0),c("div",p,[t.cancelText?(u(),l(a,{key:0,class:"button cancel",onClick:N},{default:d((()=>[g(o(t.cancelText),1)])),_:1})):i("",!0),t.okText?(u(),l(a,{key:1,class:"button ok",onClick:m},{default:d((()=>[g(o(t.okText),1)])),_:1})):i("",!0)])])}}}),[["__scopeId","data-v-d8156834"]]);t("default",e(r({setup(t){const e=N(),r=m(),n=v(),{orderNo:c="2022072710380711215",saleUserId:o="D1234567-1",tenantId:i="9991000007",templateId:g=1}=r.query,f=a((()=>{if(e.value)switch(e.value.orderStatus){case B.PAYMENT_FAILED:return"支付失败";case B.PAYING:return"支付中";case B.PAYMENT_SUCCESS:return"支付成功";default:return h[e.value.orderStatus]}return""})),x=a((()=>{if(e.value)switch(e.value.orderStatus){case B.PAYMENT_FAILED:return"重新支付";case B.PAYING:return"";case B.PAYMENT_SUCCESS:case B.ACCEPT_POLICY:return"查看订单";default:return""}return""})),C=a((()=>{if(e.value)switch(e.value.orderStatus){case B.PAYMENT_FAILED:return"退出交易";case B.PAYING:case B.PAYMENT_SUCCESS:default:return""}return""})),I=a((()=>{if(e.value)switch(e.value.orderStatus){case B.PAYMENT_FAILED:return"fail";case B.PAYING:return"process";case B.PAYMENT_SUCCESS:return"success";default:return"process"}return"process"})),p=()=>{"查看订单"===x.value?n.push({path:M.orderDetail,query:{orderNo:c,tenantId:i,agentCode:o}}):"重新支付"===x.value&&n.push({path:M.payInfo,query:r.query})},T=()=>{"退出交易"===C.value&&n.push({path:M.payInfo,query:r.query})};return E((()=>{U({orderNo:c,saleUserId:o,tenantId:i}).then((t=>{const{code:r,data:a}=t;"10000"===r&&(e.value=a)}))})),(t,e)=>{const r=A("ProPageWrap");return u(),l(r,null,{default:d((()=>[w(y,{title:s(f),status:s(I),"ok-text":s(x),"cancel-text":s(C),onOk:p,onCancel:T},null,8,["title","status","ok-text","cancel-text"])])),_:1})}}}),[["__scopeId","data-v-1b18af52"]]))}}}))}();
