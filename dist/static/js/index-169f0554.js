import{g as z,E as C,_ as K,j as u,n as _,z as e,t as O,J as r,A as Q,d as he,k as w,C as f,a4 as W,a5 as T,r as F,p as y,m as p,F as L,G as U,O as me,ak as be,h as ge,T as V}from"./vendor-96e68f0e.js";import{a as Pe,b as ye,g as Ce}from"./proposalList-7ba5eafb.js";import{_ as j,F as pe,S as Ee,O as ke}from"./index-87df9c0d.js";import{P as Ie}from"./index-6e8f84f3.js";import{_ as xe}from"./index-dec27f76.js";import{_ as Ne}from"./index-2667678f.js";var Be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAM1BMVEUAAAAHe/8JfP8HfP8ghf8IfP8Jfv8SgP8Lff8Iev8Kf/8Nf/8Ie/8KfP8Mff8Iff8Ke/9WxKgsAAAAEXRSTlMATTpGCEIdDS0kGBI+NCogMWRIF20AAADeSURBVDjL3ZOxDgMhDENdCOGAg+P/v7aI4oalQ3VT+6YoAaPYAkB2PtQII9bgXcagPSYKoq9GA/JjEXmLjQzHsq1ZY8PBWzmxwx6BZV2zykZAZ5nWLLHRIe9ThEoC5PniGW29c742FxQ9mmJH26GCf0HHrq7AKG54MTfutJMk2gn9mK1aXMeaHbezNYlrzS57RJboCXIuSQHKVHWWl7ip+No4p1SwU1LK+DFEPjWSH5vu++QwXEmb7w2kMRezttAUM/92tn3N+hfZmqSJeuE3rVu2dfvI5dKInahXAfAESeEGZRES0sEAAAAASUVORK5CYII=",De="/static/assets/male.099176e3.png",Re="/static/assets/female.d4f701ab.png";const Fe=l=>(W("data-v-474db3f9"),l=l(),T(),l),Oe={class:"container head-cover"},we={class:"info-detail"},Se={class:"name"},Me={class:"img"},Ve={key:0,src:De},Le={key:1,src:Re},Ue={clase:"p1"},Ke={class:"p2"},Qe={class:"fe"},qe=f(" \u9996\u5E74\u4FDD\u8D39\uFF1A "),Ye=Fe(()=>e("div",{class:"line"},null,-1)),ze={class:"tp"},We=z({props:{info:{type:Object,default:()=>{}}},setup(l){const v=l,B=[{title:"\u9669\u79CD\u540D\u79F0",dataIndex:"riskName",width:180},{title:"\u4FDD\u989D",dataIndex:"amount"},{title:"\u4FDD\u969C\u671F\u95F4",dataIndex:"coveragePeriod",width:110},{title:"\u7F34\u8D39\u671F\u95F4",dataIndex:"chargePeriod",width:110},{title:"\u4FDD\u8D39",dataIndex:"premium",width:120}],h=C([]),m={1:"\u7537",2:"\u5973"},o=a=>a===1,d=a=>{const i=a.split("_");if(a==="to_life")return"\u4FDD\u7EC8\u751F";switch(i[0]){case"year":return`${i[1]}\u5E74`;case"month":return`${i[1]}\u6708`;case"day":return`${i[1]}\u5929`;case"to":return`\u4FDD\u81F3${i[1]}\u5C81`;default:return""}},b=a=>{const i=a.split("_");switch(i[0]){case"year":return`${i[1]}\u5E74\u4EA4`;case"month":return`${i[1]}\u6708\u4EA4`;case"to":return`\u4EA4\u81F3${i[1]}\u5C81`;case"single":return"\u8DB8\u7F34";default:return""}},E=a=>{const i=[];a==null||a.forEach(D=>{const{riskName:R,amount:n,coveragePeriod:c,chargePeriod:t,premium:s}=D;i.push({riskName:R,amount:n,coveragePeriod:d(c),chargePeriod:b(t),premium:s})}),h.value=i};return K(()=>v.info,a=>{E(a==null?void 0:a.proposalProductRiskVOList)},{deep:!0,immediate:!0}),(a,i)=>{var D,R,n,c,t,s;return u(),_("div",Oe,[e("div",we,[e("div",Se,[e("div",Me,[o((D=v.info)==null?void 0:D.gender)?(u(),_("img",Ve)):O("",!0),o((R=v.info)==null?void 0:R.gender)?O("",!0):(u(),_("img",Le))]),e("div",null,[e("p",Ue,r((n=v.info)==null?void 0:n.name),1),e("p",Ke,r(m[(c=v.info)==null?void 0:c.gender])+"\uFF0C"+r(Q(he)().diff((t=l.info)==null?void 0:t.birthday,"y"))+"\u5C81",1)])]),e("div",Qe,[qe,e("span",null,"\xA5"+r(Q(pe)((s=v.info)==null?void 0:s.totalPremium)),1)])]),Ye,e("div",ze,[h.value.length>0?(u(),w(Ie,{key:0,columns:B,class:"table","data-source":h.value},null,8,["data-source"])):O("",!0)])])}}});var Te=j(We,[["__scopeId","data-v-474db3f9"]]),q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAACJVBMVEUAAADr+P/g///////V///d7v/y+//i8v/L6f/K4//c7f/s9//H5P/0+v/u9v/L4/+42v/w9//e7v/0+v/L4/+72//K4/+93P/1+f/p8//b7P/v9/+/3f/S6f/2+//d7f/Q5//0/P/h8f/G4/+/4//k8v/R6P/k9v////++3f+72v/i8f/1+v/b7f/Q5//g7//P5v+32f/y+f/i8P+42v+32//w+P/d7f/A3v/J5P+93f+73f+63v/I4v/v9//i8f/b7f/P5f+42v/1+v/t9//k8P/d7f/1+//b7f/e7//b7P/g7v+32f/w9//2+v/f7v/O5P+52v+93f+72//u9v/j8P/Q5v/M5f/k8P/s9v/l8v/2+//w+P/b7f/R5v/e7v/P5v+52v/w9//P5v+32f/w9//h8f/k8f/g8f/I4f/M4/+62//M5P/p9P/S5/+12P/P5/+52f/3/P/k8f/b7P/q9P/L4/+93P/W7P/p9P+12v/V5//N6f/I5//2+//1+v/K4//I4v+/3f+93f/I4v+22f/w9//u9f/2+//b6/+/3f/I4f/t9v/J4//1+v/e7//Q5/+22v/0+//c7v/R6P+22P/3/P/w9v+31/+42/+52f/N5P/u9v/f7v/d7f/L4/+82/+22P/O5f/y+P+62v+42f/v9//b7P/J4v/0+f/h7/+93P/x9//g7//1+v/j8P/c7P/H4f/z+P/Q5v+32f/P5v++3f/+uQMOAAAAm3RSTlMAEQQCBiMjGQz1tD0y6ubJxLu5tqKimZmIiId9eGhHRzkuLiASDgsHAffz5+Pg4N+/v7Krp2pdXVlAOyoj/fn5+fj49fX19e/v6urm4uHb1tHRy8fExMTEu7Kyq6urp5eUlI+OjoSEfX15d3NybWFhX19eXldOSUk7ODcrKBX5+ffr6+no29rTwMC2tammnIqIiHV1cHBkVkAyKOPy81wAAAM+SURBVEjH7Zb3UxNREMdfEkKT3qsCoffeLaAIioIFbKgUBQtgBQUEe++95RLuUglBCBD8+9x3t+8uMTOOM/zEDPtT5vt2831lP5sQQrZGhx48nU6UyKgo2Re1zUPIOncoKPyyWhHUKUfzD58PJBAJDofZxu2oltdu7vxlMBrtSbKgLTbp9bNz4YFMCDzCW6xW64FG8F50mBdsHLfHH9f8W+YNBiPUM3/NMZNYPhfHyuOdPNS73REaEg3l4M5xibiWuDQvutuDUUhbFctn57ZnS0L2b57nrRa3IEyRUIdjZcEG9ZGYfWIJ3A1Gl30/CqlQbqLly2mSUO90Oi2we0GoIoWLK+AO5Scx+9Q8uBtcRnsRCldW1/Ri9XKIJISAO5QLgnCV9ODZuWTMvgDu4ubPoHCHbT7ITxL88qSzC0IDSb8HZ1/guDAVZqsKxLO7dmUQjLNYfokJKU5wtwhCJXy+sXsFNh+2hbDY0k7d99bIgqpUT28+Ri0/eyzPw8OVZYovlRBZngzeSvrF4KgkrYeQey3meNwt4hG34yNir+eSzdjAsa53h66jPe/ZdQU+XWfy7Troedp16Xcp7749b/9XzyPv0PM9yLtCHPLuRZzJmzjGe8N6eQ9F3pVpg7x7TRu997RhvFeRaAfl3XfWuZRZZ/KZdci7MEUnLeVdmbTaFnT3mLT6vyYtL/IuwKQlCeBu/o85P+s153k4O8z59f3KbMYGjqzqgcFxtYegHh96V5PlmRIy0peq9RQaq/qHf0jToYPy3uWvNFk37bqiCVnw66PI3R9RqofzgHdrPwAc0Crx/iwHl3I6Jd7bAljye+S9lgm1yPsHQt4y3kdxbZTx3ouCbg15f6BBhh4y3nWkg/H+GrMrGO+dKIzJvE9LQoPMey1pZbx3YXY3470Nhc8mVl4nCXVOxvsX8hx55wYwu5e5vyCYvYq8L2dKQqYTeRe+k6/U3Qzuk5g9yf5ZpbK7LF6T3F8RjJdQT8/+BK67HM4O7oOExZB088GyMNEkXvxj+SkCHtGrczfX03v8WGi2Pf1GlBgrMRjbP2kUYbq0SR/0ZkYRZirzLc1lP9m3qYh3qNBI6RydxlvQ6MSh/wcEiQ5vBU6rowAAAABJRU5ErkJggg==",je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAnhP8Nb/8Nbv8Nbv8OcP8Ob/8Ob/8Ob/8Nb/8PcP8Obv8Obv8Nb/8NcP8Pb/8PcP8TdP8Nb/8NcP8Obv8Nbv8Nb/8Obv8Ob/8OcP8Rb/8Ocf8Ncv8Pcf8Wb/8VgP8QcP8Nbv+quNhCAAAAIXRSTlMABvixlIDwb92IMezNnnNURBvRY/Hn0rm1Wzw2JiIXDFCHpR0hAAAB8UlEQVRYw6TU567CMAwF4JNxO+mibDrw+7/kbdxIVHSn3w+CKkiOrTpYEpWhOgexlHFwVmEZwUXhK49+eMovsIt43mnG/SmwVZteacE1bbelSWP6Ch6JDkOdPAL6ilOBVa8bWRflR2JwQOSrC1m311ocTT2pMoERkSlJPb0Yqj7ZbXSBGYW2W51qzMo9e1qDBY1N7eWYkcn+qDdWvPvgMsOkklgisEokxMrJPMR8bOITm8iUy6m61/opR7+v+XlQYbMq4JPrn6JP/LTCDhWffRIY0mTk2CUnQ2PgNerzjo6/BoXxfCXYLeG5+xaX2mL3sq1NYbV8b7zh4M23SjsMpOFEDyIJcx/KBk4aae5MAeNpAx2I9IRxN4EKOCpMpDt/o46CM0WdAvatyuAs43fZ7ngRcCYutiLProdq84BoNGVOExeh7BdnNkqJ0CwCBwjqhFxhgEMC7vK5+3zgkAcRnXm7BIckXFQ8HrTP34rPeNxiSO7UUEirxn+Q/63YsQ0AMAgDwY6Ckv2HZQCQ3NwCliAB7H+EKgvVFXpKmyw0t7Sn2T1Rp2+z2fOzD8lGhA0tWyNqsbFVy5Y/O0fqQLKTzUyEsjXMaCnrx8yossfKsLMIoUKNilkq+KkoqsKxiusKICikgSCLwj4KRHk05mEdw4cLrMGD5S1fn3UAAAAASUVORK5CYII=",He="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAQcP8vgP8Nb/8Nbv8Ob/8Obv8Vc/8Ob/8Obv8Nbv8Nb/8Obv8Nb/8NcP8OcP8Pb/8PcP8Ocf8chf8Ob/8Obv8Ob/8Obv8OcP8NcP8Nbv8NcP8NcP8Pcf8Ocf8Scv8Pb/8Nbv90LxprAAAAIXRSTlMAPwX5svCSF27s5tLNmnFbVDEkCdzx37mgiYZ0YkY2HWWKqbLAAAACF0lEQVRYw6SU17LDIAxERXF3XOLe4uj/f/LGgjtDEldyHswMHpYVWoA98rGTUR0IEdSR7MYcbPB86eAHjvQ9uESRNrhBkxbnZYYQdwiHc1I8CYxVpWzdvndbWRqTQcLhEBahppJ+bizguS8r1ETsyI6LCiEzvvI7kwIV7q6pe6xl3Bk2mF0tFd93ytINv3m7wbjpMGyWlwm11QMOeCjjIoNVntoOh0O4NvVc9YNEAqdIkFjxxATVPcFJJoeqY1/9ovnyDqe5l7Tzxwoe69nz6L1jDiYqhxNcYlLJBAOGCz5cxMcFZhQWUd/hMpSCiJu9pGLXScMw3cpT/JaYgt6NrTx7AlF4WxmnV6UAxbBbGKNz2C1u0IZCpD1thMgvhspSqppoJaSDo86wWQzNtkLzYqkhc/hCgq0QyOW/95+qzF4ooyxrxYrbC/FKV+TQaC9EThyAnJzZC+mzyWGkwV5IWxmhWwb+ixDHFx1VWIKtEFHSKUf0/UWIvERQI2ILb3jMJKGXgpl48EaLiDUEXxctFXiASL+uWwDLqh5MQjwkBJN+0f5rxc5tAABhIAhiIkJaoP8mSRw5O2koAInH9u2yjdjR2GWz52cfkpUIK1rWRlRjY62WNX82jtSAZCObhQgVa1jQUtHPh9FVE0MSICkV2BlCKKjhmDXB7yQY8q5CUQXHCteVQFBKQ0kWr328iPJqzMu6XjvRhx8qv5Pz8gaE6wAAAABJRU5ErkJggg==";const N=l=>(W("data-v-bcc09638"),l=l(),T(),l),$e={class:"container"},Xe=N(()=>e("div",{class:"common-title"},"\u5229\u76CA\u6F14\u793A",-1)),Je={class:"benefit"},Ge={class:"benefit-title"},Ze=N(()=>e("div",{class:"line"},null,-1)),et={key:0,class:"box-title box-title-chart"},tt=N(()=>e("img",{src:q,alt:""},null,-1)),st=f(" \u4FDD\u5355\u5E74\u5EA6"),ot=f("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),at=f("\u5C81\u65F6 "),nt=N(()=>e("img",{src:q,alt:""},null,-1)),ut={key:1},it={class:"box"},lt={class:"box-title"},ct=N(()=>e("img",{src:q,alt:""},null,-1)),rt=f(" \u4FDD\u5355\u5E74\u5EA6"),dt=f("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),vt=f("\u5C81\u65F6 "),At=N(()=>e("img",{src:q,alt:""},null,-1)),_t={class:"box-price"},ft={class:"text1"},pt={class:"text2"},ht={key:2,style:{width:"100%"}},mt={class:"slider"},bt=N(()=>e("img",{src:je,alt:""},null,-1)),gt=[bt],Pt={style:{flex:"1",margin:"0px 5px"}},yt={class:"custom-button"},Ct=N(()=>e("img",{src:He,alt:""},null,-1)),Et=[Ct],kt=N(()=>e("p",{class:"slider-dec"},"\u62D6\u52A8\u6309\u94AE\u67E5\u770B\u4E0D\u540C\u5E74\u9F84\u4FDD\u969C",-1)),It={class:"btn-two"},xt=f("\u56FE\u8868\u5C55\u793A"),Nt=f("\u8D8B\u52BF\u5C55\u793A"),Bt=z({props:{info:{type:Object,default:()=>{}}},setup(l){const v=l,B=C(0),h=C(0),m=C(0),o=C(),d=C(0),b=C(!0),E=(t,s)=>{const I=[],x=[];for(let P=t,A=0;P<=s;P++,A++)I.push(P.toString()),x.push(A+1);return{a:I,year:x}},a=()=>{var P,A,k;const t=(A=(P=v.info)==null?void 0:P.benefitRiskResultVOList)==null?void 0:A[B.value],{a:s,year:I}=E(h.value,m.value),x={index:s.indexOf(d.value.toString()),age:s,year:I,result:(k=t==null?void 0:t.benefitRiskItemResultVOList)==null?void 0:k[0]};o.value=x},i=t=>{const s=t==null?void 0:t.benefitRiskResultVOList[B.value];h.value=s.ageBegin+1,d.value=s.ageBegin+1,m.value=s.ageEnd},D=()=>{d.value>m.value-1||(d.value+=1,a())},R=()=>{d.value>h.value&&(d.value-=1,a())},n=t=>{B.value=t.name,a()},c=t=>{t==="1"?b.value=!0:b.value=!1};return K(()=>v.info,t=>{t&&(i(t),a())},{deep:!0,immediate:!0}),K(d,()=>{a()}),(t,s)=>{const I=F("van-slider"),x=F("van-button"),P=F("van-tab"),A=F("van-tabs");return u(),_("div",$e,[Xe,y(A,{active:B.value,"title-active-color":"#0D6EFE","title-inactive-color":"#393D46",shrink:"",onClickTab:n},{default:p(()=>{var k;return[(u(!0),_(L,null,U((k=v.info)==null?void 0:k.benefitRiskResultVOList,(g,S)=>(u(),w(P,{key:S,name:S,title:g.riskName},{default:p(()=>{var H,$,X,J,G,Z,ee,te,se,oe,ae,ne,ue,ie,le,ce;return[e("div",Je,[e("div",Ge,r(g==null?void 0:g.riskName),1),Ze,b.value?O("",!0):(u(),_("p",et,[tt,st,e("span",null,r((X=(H=o.value)==null?void 0:H.year)==null?void 0:X[($=o.value)==null?void 0:$.index]),1),ot,e("span",null,r((Z=(J=o.value)==null?void 0:J.age)==null?void 0:Z[(G=o.value)==null?void 0:G.index]),1),at,nt])),b.value?(u(),_("div",ut,[e("div",it,[e("p",lt,[ct,rt,e("span",null,r((se=(ee=o.value)==null?void 0:ee.year)==null?void 0:se[(te=o.value)==null?void 0:te.index]),1),dt,e("span",null,r((ne=(oe=o.value)==null?void 0:oe.age)==null?void 0:ne[(ae=o.value)==null?void 0:ae.index]),1),vt,At]),e("div",_t,[(u(!0),_(L,null,U((ie=(ue=o.value)==null?void 0:ue.result)==null?void 0:ie.headers,(M,re)=>{var de,ve,Ae,_e,fe;return u(),_("div",{key:re,style:{width:"33%"}},[e("p",ft,r(Q(pe)(Number((fe=(_e=(ve=(de=o.value)==null?void 0:de.result)==null?void 0:ve.dataList)==null?void 0:_e[(Ae=o.value)==null?void 0:Ae.index])==null?void 0:fe[re]))),1),e("p",pt,r(M)+"(\u5143\uFF09",1)])}),128))])])])):(u(),_("div",ht,[y(xe,{min:h.value,max:m.value,current:d.value,data:(ce=(le=o.value)==null?void 0:le.result)==null?void 0:ce.benefitRiskItemList},null,8,["min","max","current","data"])])),e("div",mt,[e("div",{class:"add lf",onClick:R},gt),e("div",Pt,[h.value?(u(),w(I,{key:0,modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=M=>d.value=M),min:h.value,max:m.value,"bar-height":"8px"},{button:p(()=>[e("div",yt,r(d.value)+" \u5C81",1)]),_:1},8,["modelValue","min","max"])):O("",!0)]),e("div",{class:"add rg",onClick:D},Et)]),kt,e("div",It,[y(x,{round:"",plain:!b.value,type:"primary",class:"btn",onClick:s[1]||(s[1]=M=>c("1"))},{default:p(()=>[xt]),_:1},8,["plain"]),y(x,{round:"",plain:b.value,type:"primary",class:"btn",onClick:s[2]||(s[2]=M=>c("2"))},{default:p(()=>[Nt]),_:1},8,["plain"])])])]}),_:2},1032,["name","title"]))),128))]}),_:1},8,["active"])])}}});var Dt=j(Bt,[["__scopeId","data-v-bcc09638"]]);const Y=l=>(W("data-v-742c2443"),l=l(),T(),l),Rt={class:"page-composition-proposal"},Ft={class:"head-bg"},Ot={class:"container"},wt={class:"common-title"},St={class:"title"},Mt=Y(()=>e("img",{src:Be,class:"ig"},null,-1)),Vt={class:"product-detail"},Lt=Y(()=>e("div",{class:"line2"},null,-1)),Ut={class:"container"},Kt=Y(()=>e("div",{class:"common-title"},"\u4FDD\u9669\u516C\u53F8\u7B80\u4ECB",-1)),Qt=Y(()=>e("span",{class:"poiner"},null,-1)),qt={key:0,class:"footer-btn"},Yt=f("\u751F\u6210PDF"),zt=f("\u5206\u4EAB\u8BA1\u5212\u4E66"),Wt=z({setup(l){const v=me(),B=be(),{isShare:h,id:m}=v.query,o=C(),d=C(""),b=C(""),E=C({}),a=n=>n===1;K(()=>o.value,n=>{const{gender:c,name:t}=n;a(c)?b.value=`${t||""}\u5148\u751F\u7684\u8BA1\u5212\u4E66`:b.value=`${t||""}\u5973\u58EB\u7684\u8BA1\u5212\u4E66`});const i=()=>{var c;const n=`${ke}/compositionProposal?id=${m}&isShare=1&tenantId=${d.value}`;E.value={title:`${(c=o.value)==null?void 0:c.name}\u7684\u8BA1\u5212\u4E66`,desc:"\u60A8\u7684\u8D34\u5FC3\u4FDD\u9669\u7BA1\u5BB6",link:n,imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"}},D=async()=>{try{let n=null;h?n=await Pe(`${m}?tenantId=${v.query.tenantId}`):n=await ye(m);const{code:c,data:t}=n;if(c==="10000"){const s=(t==null?void 0:t.proposalInsuredVOList[0])||{};o.value=s,d.value=t==null?void 0:t.tenantId}i()}catch{V("\u63A5\u53E3\u8BF7\u6C42\u5931\u8D25")}};ge(()=>{v.query.token&&new Ee({source:"localStorage"}).set("token",v.query.token),D()});const R=()=>{if(!m){V("PDF\u751F\u6210\u5931\u8D25");return}V.loading({message:"PDF\u751F\u6210\u4E2D...",forbidClick:!0}),Ce(m.toString()).then(n=>{const{code:c,message:t}=n;c==="10000"&&(V.clear(),console.log(t),t?B.push(`/pdfViewer?url=${encodeURIComponent(t)}&title=${b.value}`):V("\u8BA1\u5212\u4E66\u4E3A\u7A7A"))})};return(n,c)=>{const t=F("van-collapse-item"),s=F("van-collapse"),I=F("van-button"),x=F("ProPageWrap");return u(),w(x,null,{default:p(()=>{var P;return[e("div",Rt,[e("div",Ft,r(b.value),1),y(Te,{info:o.value},null,8,["info"]),e("div",Ot,[(u(!0),_(L,null,U((P=o.value)==null?void 0:P.liabilityByRiskVOList,(A,k)=>(u(),_("div",{key:k},[e("div",wt,[e("div",St,[Mt,f(" "+r(A.riskName),1)])]),e("div",Vt,[y(s,{modelValue:A.riskName1,"onUpdate:modelValue":g=>A.riskName1=g,accordion:"","is-link":!1,border:!1,size:"middle"},{default:p(()=>[(u(!0),_(L,null,U(A.proposalRiskLiabilityVOList,(g,S)=>(u(),w(t,{key:S,title:g.liabilityName,name:S,"value-class":"price",value:g.liabilityIndemnityContent},{default:p(()=>[f(r(g.liabilityDesc),1)]),_:2},1032,["title","name","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),Lt]))),128))]),y(Dt,{info:o.value},null,8,["info"]),e("div",Ut,[Kt,y(s,{accordion:"","is-link":!1,border:!1,size:"middle"},{default:p(()=>{var A;return[(u(!0),_(L,null,U((A=o.value)==null?void 0:A.insurerInfoVOList,(k,g)=>(u(),w(t,{key:g,name:"1","value-class":"price"},{title:p(()=>[e("div",null,[Qt,f(" "+r(k.insurerName),1)])]),default:p(()=>[f(" "+r(k.insurerDesc),1)]),_:2},1024))),128))]}),_:1})]),Q(h)?O("",!0):(u(),_("div",qt,[y(I,{plain:"",type:"primary",class:"btn",onClick:R},{default:p(()=>[Yt]),_:1}),y(Ne,{title:E.value.title,desc:E.value.desc,link:E.value.link,img:E.value.img,"img-url":E.value.imgUrl},{default:p(()=>[y(I,{type:"primary",class:"btn"},{default:p(()=>[zt]),_:1})]),_:1},8,["title","desc","link","img","img-url"])]))])]}),_:1})}}});var Gt=j(Wt,[["__scopeId","data-v-742c2443"]]);export{Gt as default};
