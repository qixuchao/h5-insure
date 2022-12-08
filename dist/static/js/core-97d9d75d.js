import{x as A,ay as e,T as a,o as t,N as n,r as i,w as o}from"./vendor-372f2d73.js";import{l as d}from"./index-d24ff306.js";import{r,ab as s}from"./index-01c63dba.js";const p=A=>r({url:"/api/app/insure/insurance/loadPayment",method:"GET",params:A}),c=A=>r({url:"/api/app/insure/insurance/pay",method:"POST",data:A}),u=A=>r({url:"/api/app/insure/insurance/getPaymentResult",method:"GET",params:A,headers:{laoding:!1}});var f="data:image/png;base64,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",m="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAFigAwAEAAAAAQAAAFgAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAFgAWAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAwICQoJBwwKCQoNDAwOER0TERAQESMZGxUdKiUsKyklKCguNEI4LjE/MigoOk46P0RHSktKLTdRV1FIVkJJSkf/2wBDAQwNDREPESITEyJHMCgwR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/3QAEAAb/2gAMAwEAAhEDEQA/AOr8VeJZLGU2OnkCfH7yXrsz0A9/5VxM9zPcuXuJ5ZWPUu5NF1M1xdzTuSWkkZjn3NRV9bhsNCjBJLU+er15VZNt6BRRRXWc4UVPY2/2u+gtg2zzZFTdjOMnrXX/APCCQf8AQQl/79rXNWxVKg0ps3pUJ1VeKOJoqxqFuLPULi2DFxFIUDEYziq9bxakk0YtWdmFSQzzQOHgmkiYd0cr/Ko6KbSejBO2x2/hbxPJdTrYaiwaRuIpcY3H0Pv711ua8dikaKVJYzhkYMp9wcitL/hIdT/57/pXkYjLFOfNB2R6FLHOMbSVz//Qzz1P1NFB6n6mivt1sfLmnb+H9WubeOeCyZ4pFDK29RkfnUn/AAjGt/8APg//AH8T/GorbW9WhhSC2vJljjXCoqg4A/Cpf7e13/n8uv8Av2P/AImuOTxSejj+J0pULa3/AALWk+HdXt9WtJprJljjmVmbevAB+teh155pWtazNq1pFNd3DRvMocFAARn/AHa9DrxcwdVzXtLbdD0sGoKL5L/M891fw7q9xq93NDZM8ckzMrb1GR+dVP8AhF9b/wCfBv8Av4n+NW9W1nWYdXu4obu4WNJmCBUBAGf92qn9va7/AM/l1/37H/xNepTeK5FZxtbzOGcaHM73/AiufD+rWtu9xcWbJFGNzNvU4H4Gs2tG51vVp4Xt7m8maNxhkZQMj8qzq7aPtbfvLfI5qnJf3L/MKKKK2Mj/0aB+8fqaSg9T9TWroug3msOTEBHCpw0rjjPoB3NfaTqRpx5puyPmYQlN2iiHRtUk0i9NzDEkjFCmHJA5IPb6Vt/8Jzef8+Vt/wB9NWtb+DtJgQfaWlmbuWk2D8hipz4T0OQfJAw90mb/ABrx6uKwdSXNKLf9ep6VOhiYK0ZJf16GF/wnN5/z5W3/AH01H/CdXv8Az52//fbVoXPga0cE2t3NEewcBx/Q/rWNeeDtUtwWhEV0o/uNtb8j/jVU3l8+lvW4p/XI/wBI0dP8X399qEFqllb5lcLnc3A7n8s12Vcb4K0aaG9mvLyB4miHlxq64OT1P5YH51u+JtRGm6NNIpxLIPLi/wB49/wGT+FcOKp05V1Tor/hzqoTmqTnVZwPiC8+3a5dTqcpv2J/urx/Qn8azqOnAor6WEFCKiuh4cpOUnJhRRRVkn//0qttA11eR28f35ZAgPpk9a6vxDrJ0aOPRtI/c+Ug3yDkjPYe/cn3rnNEmWDXbOWT7qzjJ9MnH9a0PGdlLb67JOwJiuMMjdsgAEfp+tfUVYxqYiEJ7Wv6s8Km3CjKUd7/AIGJNNLcPvnkeVvWRi386SOR4m3RO0beqMV/lTaK7uVWscl3e5taf4p1WyIBn+0xj+Cbn9ev866/Q/E1tq8gt/KkhuNpOwjcpA6kEf1xXn9hp91qNyILSIyP37BR6k9hXo+g6LBo9rtUiSd/9ZLjr7D0FeLmMMNBaL3vL9T08HKtJ7+6alZOvaDFrSx+ZcSxPGDs24K8+orK8ReLDZ3QttN8uR42/fOwyv8Auj39T2qfTPGVjc4S9U2kn94nKH8e341wQw+IppVoI65V6M26cmc7f+EdUtMtEi3SDvEfm/75P9M1hyRvFIY5UZHH8LAqfyNewRyJKgeN1dTyGU5BqO6s7a8j2XUEcy+jqDXXSzWcdKiuYTwEXrB2PIaK9Cu/Bmlz5MBltj6I2R+RzVT/AIQS3/5/5v8Avha7o5nh2tbo5XgaqP/ToHqfqa7XRNcsdXsV03WxGZBhVaT7snoc9m/yK466ha3u5oHBDRyMpz7Goq+urUIYiC/BnztKrKjL80d5P4IsJG3QXNxED/Dw4/UZpbbwRp8b7p7iecf3chB+nP61xttql/aLttr2eNR/CHOPyPFTSa9q8ilW1G4wfRgP5CuN4XGbKpp/X9bnUq+H3cNT0Uvpmh2eCYLSEdB0z/UmuS13xfLdq1vpoaGE8NKeHb6f3R+v0rmJJHlcvI7O56sxJP5mm1dDLoQfNUfMyKuMlJcsFZBRRRXpnEWrDUrzTn3Wdw8XqoOVP1HSuq03xupwmp2+3/prDyPxXr+Wa4uiuWthKVb4lr3NqeIqU/hZ63ZahaX8XmWdxHMvfaeR9R2qzXkFqZhcx/ZmdJmYKjIxByTgcitv7L4m/wCfi7/7/GvJqZWoy0n956EcfdaxP//U6rxV4ZkvpTfaeAZiP3kXTfjuPf8AnXFT289s5S4hkiYdnQivX68+8af8f/417uW4icv3b2R5ONoxj763ZzlFFJXtHmC0UlFAC0UlFAC1JDBNO+yCKSVj2RC38qiroPB//ISH1qKknGLaKirySNjwt4Yktp1v9RULIvMUWc7T/ePv7V1uKO9FfI1q860+aTPoqVKNOPLE/9k=";const g={ALIPAY:"alipay",WXPAY:"wxpay",WX_SIGN:"wxSign",ALI_SIGN:"aliSign",ALIPAY_APP:"alipay_app",UNIONPAY:"unionpay",WXPAY_SIGN:"wxpaySign",ALIPAY_SIGN:"alipaySign",WXPAY_DK:"wxpayDk"},N=[{name:g.WXPAY,title:"微信支付",img:f},{name:g.WX_SIGN,title:"微信签约",img:f},{name:g.ALIPAY,title:"支付宝",img:m},{name:g.ALI_SIGN,title:"支付宝签约",img:m}],P=(A="")=>{const e=A.split(",");return N.filter((A=>e.includes(A.name)))},l="H5",E="JS";let R;var v=(t,n="加载中...")=>{const i=A((()=>t));return e((()=>{i.value?R=a({message:n,icon:s,iconSize:"120px",duration:1e4}):R.clear()})),R};const B=navigator.userAgent.indexOf("MicroMessenger")>-1,I=()=>B?E:l,w=()=>{t((()=>{const A=n().query,e=`${window.location.href}`;var a;B&&!A.code&&(window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${(a={appId:sessionStorage.appId,url:encodeURIComponent(e)}).appId}&redirect_uri=${a.url}&response_type=code&scope=snsapi_base&state=0#wechat_redirect`),A.code&&(sessionStorage.wxCode=A.code)}))},x=A=>{const e=document.createElement("div");e.id="wozijideid",e.style.visibility="hidden",e.innerHTML=A,document.body.prepend(e);const a=document.querySelector("#wozijideid form");a&&a.submit()};window.useFormPay=x;const Q=A=>{const e=i(!1);v(e),c({...A,srcType:I(),extraInfo:JSON.stringify({wxCode:A.code})}).then((A=>{window.location.replace(A.data.redirect_url)})).finally((()=>{e.value=!1}))};function S(A){let e="";if("string"==typeof A){if(/https?:.*/.test(A),A.indexOf("<html>")>-1)return void x(A);const a=A.split("?")[1];e=d.parse(a)}else e={...A};e.payWay.toLocaleLowerCase().indexOf("sign")>0?window.location.href=`/cashier/signPay?${d.stringify(e)}`:(A=>{const e=i(!0);v(e),c({...A,srcType:I(),extraInfo:JSON.stringify({wxCode:A.code||sessionStorage.wxCode})}).then((A=>{const{code:e,message:a,data:t}=A;if("10000"===e){const{timeStamp:e,nonceStr:a,prepayId:n,sign_type:i,sign:d,appId:r,redirectUrl:s}=t;B?o.chooseWXPay({timestamp:e,nonceStr:a,package:n,signType:i,paySign:d,success(A){window.location.href=s},fail(A){},cancel(){window.location.href=s}}):window.location.href=A.data.mweb_url}})).finally((()=>{e.value=!1}))})(e)}export{g as P,v as a,u as b,Q as c,P as g,B as i,p as l,S as s,w as u};
