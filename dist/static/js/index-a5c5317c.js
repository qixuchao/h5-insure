import{i as a,l as s,m as e,s as t,t as A,p as l,B as o,L as n,C as r,ac as i,r as u,$ as g,k as c,Z as d,F as p,w as T}from"./vendor-86ac9d42.js";import{u as H,v as m,w}from"./index-0db00022.js";const k={class:"com-za-share-overlay"},y={class:"block"},D=["src"],v=a({props:{show:{type:Boolean,default:!1},text:{type:String,default:"点击左上角···转发分享~"}},emits:["on-close"],setup(a,{emit:u}){const g=()=>{u("on-close",!1)};return(u,c)=>{const d=s("van-overlay");return e(),t("div",k,[A(d,{show:a.show,"z-index":"999999999",onClick:g},{default:l((()=>[o("div",{class:"wrapper",onClick:c[0]||(c[0]=i((()=>{}),["stop"]))},[o("div",y,n(a.text),1),o("img",{src:r("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAADqCAMAAABUZB2/AAAAXVBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+EHRzTAAAAHnRSTlMAcRrTFPolAwxE4lnwnoQJZSwzwU60Oo4gpnyrypZnELZvAAAE8ElEQVR42u3c2W7jOBAF0CuKZJHad8tb/f9nTicZxN1xPFYASbcx8AH84qcLUGKRRdqga1rQVTqBTI6qEVyhV3oIk+ovA5jaTN/kIIqFvmvAkzv9kIAmUWWHkIN+OoGjHvWmAoXt9TcHMMyp/u4Kgi7TP5S86eHmSKjcTr84Eyr3nRH7klLv9dhVGJUewqT6nRQ78pnSQ0yFfi8jVG5iiMTpIwV2ctDHHHYhZ/0vhMp9T/av3PfCLgv7Jyw2JrHQZ2be9HDjsa2TLtDtX7nvTftX7nsR27EXpYfwmS407F+57+XYyOB0sWa7yk0PUelPJBu15H7khA2ELk8OY1roQhU2ZLthUZgDdhDaX2HOmT5yxW4mvaH1BuQ2LGOfOVJv4Pz75lPm2FTHPtu5NyC5figsbup2SHLsx96KJtGF1Ky7n8xTAVWnqoUHlxSqDdhKPYMuzyzo7ISXl5eXl79fk+agO2oDOokWbEHAdyhy0I06gc8LP4IFX+8i2GQsAvgEdHkLutqpAZu9jngBIOUAuqgp2MScGrwAiH0OuqtWoAu552cA+Mosgi5VDzrpQDfVoAuuCGBrLz3AV4NtTizoTlqCLo4R/2sCtG3AU4eD2awgpc6g14jk0D2ZJHTGFo5vAVyHa+rR64Do8ViXYH1Th7MbYAXvulONzE14xGIDuV4wmz92lqFMBY18H9kdsDaDOq0EXwmaByfdiauwssZFCL4T0xbfmi1WVukJDwj8xdxn81hZBCY8drwfEcm0w6qSJ8v2UNV3X5Up1pW7HE9Ev213xgosnki+1MuubLEmufQWz/js9OUpOWBNbZYF/JRZu3aFdtFur9lwxj7kggVazfDJFqNgRd45gwXkWOHTUIxYk+QJfs7OnFZsbAz+la89V6YRy/Q6fT4R6rGmXoelcT+np1CdsSaRQeh7rhqLDVHwruw9rc/iNOBNyNyMVaXaYZm6HPEhDPQDtLh6BBEs1U3hYzA0Yl3RHX94GC5Jj5XlujjEKW0BGMH66ho/IWk6A7SHIi8nAHOW1hvcqS2xzKgNIAgeqxvc0hDtycCmOcAZjZtEe+rRbjm2ABqDLYyuXXjr1TRXwTaObsASNreFDtiGCVhihmBKsBlj8FSrl9RgO4m74qm8cJpgO35B4ykMwTfYknmeIXMTNlaXV/wHbyTTARvrXGHwUO7OdXURbG2Y4AO+4xOYohTsIqSZx1e1SKEtbBwn7MH0qZjE4EZQFRHVdQZGTbAPg0qv6KoJvumQZM2trxlOAXuJx4iTVkj08Pb5nElb7CxWEbHMf+8+RC1B1xQJ+GwNMik70CWagi5UEWwews/gRgHbUJTgsxZkcny9nn/P6zmBb9ASdPnfUT0FZN2lA92oFejCqQaZPxvQjXoFnSkDyPwEOuldDjapsgAyC9Tgud2lILrdpaCzLcjqPr6Wle/k1ILMJvJaRLyLqXn95BOo06wFm+3TGmQBYkA2FwnoGj2DLwaQDaMFm2TagM5UYDtNoItaWLDJIQFZ3YCv1APoBn7t9BYCMptlM9jM5SL0DBALsuga0FV6ApkAEWzHcwDbXBQedD6CbL60eP1/5Ju6CiBLGkDA5Z22oMsTkIVDAN1Rj6Dz/QyyvANd64oZbFJeQVbngIDsrCfQ5ZkHWQyoQda5NIBtTq8gCx2CgEtGN4BNysKDz+AF+Ad+LLTI4TAe2AAAAABJRU5ErkJggg=="),alt:""},null,8,D)])])),_:1},8,["show"])])}}}),B=a({props:{title:{type:String,default:""},desc:{type:String,default:""},link:{type:String,default:""},imgUrl:{type:String,default:""}},setup(a,{expose:s}){const l=a,n=u(!1),r=()=>{n.value=!1},i=()=>{if(H())n.value=!0;else if(m()){const a={img:l.imgUrl,title:l.title,desc:l.desc,link:l.link};w(a)}},k=()=>{H()&&T.ready((()=>{const a={...l,success:()=>{}};T.updateAppMessageShareData(a),T.updateTimelineShareData(a)}))};return g((()=>l),(()=>{k()}),{deep:!0,immediate:!0}),s({handleShare:i}),c((()=>{k()})),(a,s)=>(e(),t(p,null,[o("span",{class:"com-share",onClick:i},[d(a.$slots,"default")]),A(v,{show:n.value,onOnClose:r},null,8,["show"])],64))}});export{B as _};
