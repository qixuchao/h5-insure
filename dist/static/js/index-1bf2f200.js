import{g as j,E as y,_ as W,j as o,n as r,z as e,t as $,J as _,A as M,d as Ce,k as w,C,a4 as H,a5 as X,r as E,p as B,m as g,F as S,G as O,y as fe,am as ke,O as Ie,ak as Ee,Q as De,h as Fe,T as z}from"./vendor-96e68f0e.js";import{a as xe,b as Be,g as we}from"./proposalList-97b2570e.js";import{b as Ae,_ as G,F as he,S as Re,O as Ne,G as Se}from"./index-979b8b7e.js";import{P as Oe}from"./index-589773b1.js";import{_ as Ve}from"./index-dec27f76.js";const Le=(t={})=>Ae.get("/api/app/insure/proposal/proposalTransInsured",{params:t}),Me=(t={})=>Ae.get("/api/app/insure/proposal/checkProposalInsurer",{params:t});var $e="/static/assets/male.099176e3.png",Ue="/static/assets/female.d4f701ab.png";const Ke=t=>(H("data-v-474db3f9"),t=t(),X(),t),Qe={class:"container head-cover"},qe={class:"info-detail"},Te={class:"name"},Ye={class:"img"},ze={key:0,src:$e},We={key:1,src:Ue},je={clase:"p1"},He={class:"p2"},Xe={class:"fe"},Ge=C(" \u9996\u5E74\u4FDD\u8D39\uFF1A "),Je=Ke(()=>e("div",{class:"line"},null,-1)),Ze={class:"tp"},et=j({props:{info:{type:Object,default:()=>{}}},setup(t){const d=t,P=[{title:"\u9669\u79CD\u540D\u79F0",dataIndex:"riskName",width:180},{title:"\u4FDD\u989D",dataIndex:"amount"},{title:"\u4FDD\u969C\u671F\u95F4",dataIndex:"coveragePeriod",width:110},{title:"\u7F34\u8D39\u671F\u95F4",dataIndex:"chargePeriod",width:110},{title:"\u4FDD\u8D39",dataIndex:"premium",width:120}],m=y([]),b={1:"\u7537",2:"\u5973"},s=n=>n===1,a=n=>{const u=n.split("_");if(n==="to_life")return"\u4FDD\u7EC8\u751F";switch(u[0]){case"year":return`${u[1]}\u5E74`;case"month":return`${u[1]}\u6708`;case"day":return`${u[1]}\u5929`;case"to":return`\u4FDD\u81F3${u[1]}\u5C81`;default:return""}},A=n=>{const u=n.split("_");switch(u[0]){case"year":return`${u[1]}\u5E74\u4EA4`;case"month":return`${u[1]}\u6708\u4EA4`;case"to":return`\u4EA4\u81F3${u[1]}\u5C81`;case"single":return"\u8DB8\u7F34";default:return""}},k=n=>{const u=[];n==null||n.forEach(p=>{const{riskName:I,amount:D,coveragePeriod:F,chargePeriod:l,premium:c}=p;u.push({riskName:I,amount:D,coveragePeriod:a(F),chargePeriod:A(l),premium:c})}),m.value=u};return W(()=>d.info,n=>{k(n==null?void 0:n.proposalProductRiskVOList)},{deep:!0,immediate:!0}),(n,u)=>{var p,I,D,F,l,c;return o(),r("div",Qe,[e("div",qe,[e("div",Te,[e("div",Ye,[s((p=d.info)==null?void 0:p.gender)?(o(),r("img",ze)):$("",!0),s((I=d.info)==null?void 0:I.gender)?$("",!0):(o(),r("img",We))]),e("div",null,[e("p",je,_((D=d.info)==null?void 0:D.name),1),e("p",He,_(b[(F=d.info)==null?void 0:F.gender])+"\uFF0C"+_(M(Ce)().diff((l=t.info)==null?void 0:l.birthday,"y"))+"\u5C81",1)])]),e("div",Xe,[Ge,e("span",null,"\xA5"+_(M(he)((c=d.info)==null?void 0:c.totalPremium)),1)])]),Je,e("div",Ze,[m.value.length>0?(o(),w(Oe,{key:0,columns:P,class:"table","data-source":m.value},null,8,["data-source"])):$("",!0)])])}}});var tt=G(et,[["__scopeId","data-v-474db3f9"]]),Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAACJVBMVEUAAADr+P/g///////V///d7v/y+//i8v/L6f/K4//c7f/s9//H5P/0+v/u9v/L4/+42v/w9//e7v/0+v/L4/+72//K4/+93P/1+f/p8//b7P/v9/+/3f/S6f/2+//d7f/Q5//0/P/h8f/G4/+/4//k8v/R6P/k9v////++3f+72v/i8f/1+v/b7f/Q5//g7//P5v+32f/y+f/i8P+42v+32//w+P/d7f/A3v/J5P+93f+73f+63v/I4v/v9//i8f/b7f/P5f+42v/1+v/t9//k8P/d7f/1+//b7f/e7//b7P/g7v+32f/w9//2+v/f7v/O5P+52v+93f+72//u9v/j8P/Q5v/M5f/k8P/s9v/l8v/2+//w+P/b7f/R5v/e7v/P5v+52v/w9//P5v+32f/w9//h8f/k8f/g8f/I4f/M4/+62//M5P/p9P/S5/+12P/P5/+52f/3/P/k8f/b7P/q9P/L4/+93P/W7P/p9P+12v/V5//N6f/I5//2+//1+v/K4//I4v+/3f+93f/I4v+22f/w9//u9f/2+//b6/+/3f/I4f/t9v/J4//1+v/e7//Q5/+22v/0+//c7v/R6P+22P/3/P/w9v+31/+42/+52f/N5P/u9v/f7v/d7f/L4/+82/+22P/O5f/y+P+62v+42f/v9//b7P/J4v/0+f/h7/+93P/x9//g7//1+v/j8P/c7P/H4f/z+P/Q5v+32f/P5v++3f/+uQMOAAAAm3RSTlMAEQQCBiMjGQz1tD0y6ubJxLu5tqKimZmIiId9eGhHRzkuLiASDgsHAffz5+Pg4N+/v7Krp2pdXVlAOyoj/fn5+fj49fX19e/v6urm4uHb1tHRy8fExMTEu7Kyq6urp5eUlI+OjoSEfX15d3NybWFhX19eXldOSUk7ODcrKBX5+ffr6+no29rTwMC2tammnIqIiHV1cHBkVkAyKOPy81wAAAM+SURBVEjH7Zb3UxNREMdfEkKT3qsCoffeLaAIioIFbKgUBQtgBQUEe++95RLuUglBCBD8+9x3t+8uMTOOM/zEDPtT5vt2831lP5sQQrZGhx48nU6UyKgo2Re1zUPIOncoKPyyWhHUKUfzD58PJBAJDofZxu2oltdu7vxlMBrtSbKgLTbp9bNz4YFMCDzCW6xW64FG8F50mBdsHLfHH9f8W+YNBiPUM3/NMZNYPhfHyuOdPNS73REaEg3l4M5xibiWuDQvutuDUUhbFctn57ZnS0L2b57nrRa3IEyRUIdjZcEG9ZGYfWIJ3A1Gl30/CqlQbqLly2mSUO90Oi2we0GoIoWLK+AO5Scx+9Q8uBtcRnsRCldW1/Ri9XKIJISAO5QLgnCV9ODZuWTMvgDu4ubPoHCHbT7ITxL88qSzC0IDSb8HZ1/guDAVZqsKxLO7dmUQjLNYfokJKU5wtwhCJXy+sXsFNh+2hbDY0k7d99bIgqpUT28+Ri0/eyzPw8OVZYovlRBZngzeSvrF4KgkrYeQey3meNwt4hG34yNir+eSzdjAsa53h66jPe/ZdQU+XWfy7Troedp16Xcp7749b/9XzyPv0PM9yLtCHPLuRZzJmzjGe8N6eQ9F3pVpg7x7TRu997RhvFeRaAfl3XfWuZRZZ/KZdci7MEUnLeVdmbTaFnT3mLT6vyYtL/IuwKQlCeBu/o85P+s153k4O8z59f3KbMYGjqzqgcFxtYegHh96V5PlmRIy0peq9RQaq/qHf0jToYPy3uWvNFk37bqiCVnw66PI3R9RqofzgHdrPwAc0Crx/iwHl3I6Jd7bAljye+S9lgm1yPsHQt4y3kdxbZTx3ouCbg15f6BBhh4y3nWkg/H+GrMrGO+dKIzJvE9LQoPMey1pZbx3YXY3470Nhc8mVl4nCXVOxvsX8hx55wYwu5e5vyCYvYq8L2dKQqYTeRe+k6/U3Qzuk5g9yf5ZpbK7LF6T3F8RjJdQT8/+BK67HM4O7oOExZB088GyMNEkXvxj+SkCHtGrczfX03v8WGi2Pf1GlBgrMRjbP2kUYbq0SR/0ZkYRZirzLc1lP9m3qYh3qNBI6RydxlvQ6MSh/wcEiQ5vBU6rowAAAABJRU5ErkJggg==",st="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAnhP8Nb/8Nbv8Nbv8OcP8Ob/8Ob/8Ob/8Nb/8PcP8Obv8Obv8Nb/8NcP8Pb/8PcP8TdP8Nb/8NcP8Obv8Nbv8Nb/8Obv8Ob/8OcP8Rb/8Ocf8Ncv8Pcf8Wb/8VgP8QcP8Nbv+quNhCAAAAIXRSTlMABvixlIDwb92IMezNnnNURBvRY/Hn0rm1Wzw2JiIXDFCHpR0hAAAB8UlEQVRYw6TU567CMAwF4JNxO+mibDrw+7/kbdxIVHSn3w+CKkiOrTpYEpWhOgexlHFwVmEZwUXhK49+eMovsIt43mnG/SmwVZteacE1bbelSWP6Ch6JDkOdPAL6ilOBVa8bWRflR2JwQOSrC1m311ocTT2pMoERkSlJPb0Yqj7ZbXSBGYW2W51qzMo9e1qDBY1N7eWYkcn+qDdWvPvgMsOkklgisEokxMrJPMR8bOITm8iUy6m61/opR7+v+XlQYbMq4JPrn6JP/LTCDhWffRIY0mTk2CUnQ2PgNerzjo6/BoXxfCXYLeG5+xaX2mL3sq1NYbV8b7zh4M23SjsMpOFEDyIJcx/KBk4aae5MAeNpAx2I9IRxN4EKOCpMpDt/o46CM0WdAvatyuAs43fZ7ngRcCYutiLProdq84BoNGVOExeh7BdnNkqJ0CwCBwjqhFxhgEMC7vK5+3zgkAcRnXm7BIckXFQ8HrTP34rPeNxiSO7UUEirxn+Q/63YsQ0AMAgDwY6Ckv2HZQCQ3NwCliAB7H+EKgvVFXpKmyw0t7Sn2T1Rp2+z2fOzD8lGhA0tWyNqsbFVy5Y/O0fqQLKTzUyEsjXMaCnrx8yossfKsLMIoUKNilkq+KkoqsKxiusKICikgSCLwj4KRHk05mEdw4cLrMGD5S1fn3UAAAAASUVORK5CYII=",ot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAQcP8vgP8Nb/8Nbv8Ob/8Obv8Vc/8Ob/8Obv8Nbv8Nb/8Obv8Nb/8NcP8OcP8Pb/8PcP8Ocf8chf8Ob/8Obv8Ob/8Obv8OcP8NcP8Nbv8NcP8NcP8Pcf8Ocf8Scv8Pb/8Nbv90LxprAAAAIXRSTlMAPwX5svCSF27s5tLNmnFbVDEkCdzx37mgiYZ0YkY2HWWKqbLAAAACF0lEQVRYw6SU17LDIAxERXF3XOLe4uj/f/LGgjtDEldyHswMHpYVWoA98rGTUR0IEdSR7MYcbPB86eAHjvQ9uESRNrhBkxbnZYYQdwiHc1I8CYxVpWzdvndbWRqTQcLhEBahppJ+bizguS8r1ETsyI6LCiEzvvI7kwIV7q6pe6xl3Bk2mF0tFd93ytINv3m7wbjpMGyWlwm11QMOeCjjIoNVntoOh0O4NvVc9YNEAqdIkFjxxATVPcFJJoeqY1/9ovnyDqe5l7Tzxwoe69nz6L1jDiYqhxNcYlLJBAOGCz5cxMcFZhQWUd/hMpSCiJu9pGLXScMw3cpT/JaYgt6NrTx7AlF4WxmnV6UAxbBbGKNz2C1u0IZCpD1thMgvhspSqppoJaSDo86wWQzNtkLzYqkhc/hCgq0QyOW/95+qzF4ooyxrxYrbC/FKV+TQaC9EThyAnJzZC+mzyWGkwV5IWxmhWwb+ixDHFx1VWIKtEFHSKUf0/UWIvERQI2ILb3jMJKGXgpl48EaLiDUEXxctFXiASL+uWwDLqh5MQjwkBJN+0f5rxc5tAABhIAhiIkJaoP8mSRw5O2koAInH9u2yjdjR2GWz52cfkpUIK1rWRlRjY62WNX82jtSAZCObhQgVa1jQUtHPh9FVE0MSICkV2BlCKKjhmDXB7yQY8q5CUQXHCteVQFBKQ0kWr328iPJqzMu6XjvRhx8qv5Pz8gaE6wAAAABJRU5ErkJggg==";const V=t=>(H("data-v-bcc09638"),t=t(),X(),t),nt={class:"container"},at=V(()=>e("div",{class:"common-title"},"\u5229\u76CA\u6F14\u793A",-1)),ut={class:"benefit"},it={class:"benefit-title"},lt=V(()=>e("div",{class:"line"},null,-1)),ct={key:0,class:"box-title box-title-chart"},rt=V(()=>e("img",{src:Z,alt:""},null,-1)),dt=C(" \u4FDD\u5355\u5E74\u5EA6"),vt=C("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),_t=C("\u5C81\u65F6 "),pt=V(()=>e("img",{src:Z,alt:""},null,-1)),ft={key:1},At={class:"box"},ht={class:"box-title"},mt=V(()=>e("img",{src:Z,alt:""},null,-1)),bt=C(" \u4FDD\u5355\u5E74\u5EA6"),gt=C("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),Pt=C("\u5C81\u65F6 "),yt=V(()=>e("img",{src:Z,alt:""},null,-1)),Ct={class:"box-price"},kt={class:"text1"},It={class:"text2"},Et={key:2,style:{width:"100%"}},Dt={class:"slider"},Ft=V(()=>e("img",{src:st,alt:""},null,-1)),xt=[Ft],Bt={style:{flex:"1",margin:"0px 5px"}},wt={class:"custom-button"},Rt=V(()=>e("img",{src:ot,alt:""},null,-1)),Nt=[Rt],St=V(()=>e("p",{class:"slider-dec"},"\u62D6\u52A8\u6309\u94AE\u67E5\u770B\u4E0D\u540C\u5E74\u9F84\u4FDD\u969C",-1)),Ot={class:"btn-two"},Vt=C("\u56FE\u8868\u5C55\u793A"),Lt=C("\u8D8B\u52BF\u5C55\u793A"),Mt=j({props:{info:{type:Object,default:()=>{}}},setup(t){const d=t,P=y(0),m=y(0),b=y(0),s=y(),a=y(0),A=y(!0),k=(l,c)=>{const R=[],f=[];for(let x=l,N=0;x<=c;x++,N++)R.push(x.toString()),f.push(N+1);return{a:R,year:f}},n=()=>{var x,N,U;const l=(N=(x=d.info)==null?void 0:x.benefitRiskResultVOList)==null?void 0:N[P.value],{a:c,year:R}=k(m.value,b.value),f={index:c.indexOf(a.value.toString()),age:c,year:R,result:(U=l==null?void 0:l.benefitRiskItemResultVOList)==null?void 0:U[0]};s.value=f},u=l=>{const c=l==null?void 0:l.benefitRiskResultVOList[P.value];m.value=c.ageBegin+1,a.value=c.ageBegin+1,b.value=c.ageEnd},p=()=>{a.value>b.value-1||(a.value+=1,n())},I=()=>{a.value>m.value&&(a.value-=1,n())},D=l=>{P.value=l.name,n()},F=l=>{l==="1"?A.value=!0:A.value=!1};return W(()=>d.info,l=>{l&&(u(l),n())},{deep:!0,immediate:!0}),W(a,()=>{n()}),(l,c)=>{const R=E("van-slider"),f=E("van-button"),x=E("van-tab"),N=E("van-tabs");return o(),r("div",nt,[at,B(N,{active:P.value,"title-active-color":"#0D6EFE","title-inactive-color":"#393D46",shrink:"",onClickTab:D},{default:g(()=>{var U;return[(o(!0),r(S,null,O((U=d.info)==null?void 0:U.benefitRiskResultVOList,(i,v)=>(o(),w(x,{key:v,name:v,title:i.riskName},{default:g(()=>{var h,L,K,T,Q,q,Y,ee,te,se,oe,ne,ae,ue,ie,le;return[e("div",ut,[e("div",it,_(i==null?void 0:i.riskName),1),lt,A.value?$("",!0):(o(),r("p",ct,[rt,dt,e("span",null,_((K=(h=s.value)==null?void 0:h.year)==null?void 0:K[(L=s.value)==null?void 0:L.index]),1),vt,e("span",null,_((q=(T=s.value)==null?void 0:T.age)==null?void 0:q[(Q=s.value)==null?void 0:Q.index]),1),_t,pt])),A.value?(o(),r("div",ft,[e("div",At,[e("p",ht,[mt,bt,e("span",null,_((te=(Y=s.value)==null?void 0:Y.year)==null?void 0:te[(ee=s.value)==null?void 0:ee.index]),1),gt,e("span",null,_((ne=(se=s.value)==null?void 0:se.age)==null?void 0:ne[(oe=s.value)==null?void 0:oe.index]),1),Pt,yt]),e("div",Ct,[(o(!0),r(S,null,O((ue=(ae=s.value)==null?void 0:ae.result)==null?void 0:ue.headers,(J,ce)=>{var re,de,ve,_e,pe;return o(),r("div",{key:ce,style:{width:"33%"}},[e("p",kt,_(M(he)(Number((pe=(_e=(de=(re=s.value)==null?void 0:re.result)==null?void 0:de.dataList)==null?void 0:_e[(ve=s.value)==null?void 0:ve.index])==null?void 0:pe[ce]))),1),e("p",It,_(J)+"(\u5143\uFF09",1)])}),128))])])])):(o(),r("div",Et,[B(Ve,{min:m.value,max:b.value,current:a.value,data:(le=(ie=s.value)==null?void 0:ie.result)==null?void 0:le.benefitRiskItemList},null,8,["min","max","current","data"])])),e("div",Dt,[e("div",{class:"add lf",onClick:I},xt),e("div",Bt,[m.value?(o(),w(R,{key:0,modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=J=>a.value=J),min:m.value,max:b.value,"bar-height":"8px"},{button:g(()=>[e("div",wt,_(a.value)+" \u5C81",1)]),_:1},8,["modelValue","min","max"])):$("",!0)]),e("div",{class:"add rg",onClick:p},Nt)]),St,e("div",Ot,[B(f,{round:"",plain:!A.value,type:"primary",class:"btn",onClick:c[1]||(c[1]=J=>F("1"))},{default:g(()=>[Vt]),_:1},8,["plain"]),B(f,{round:"",plain:A.value,type:"primary",class:"btn",onClick:c[2]||(c[2]=J=>F("2"))},{default:g(()=>[Lt]),_:1},8,["plain"])])])]}),_:2},1032,["name","title"]))),128))]}),_:1},8,["active"])])}}});var $t=G(Mt,[["__scopeId","data-v-bcc09638"]]),me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAM1BMVEUAAAAHe/8JfP8HfP8ghf8IfP8Jfv8SgP8Lff8Iev8Kf/8Nf/8Ie/8KfP8Mff8Iff8Ke/9WxKgsAAAAEXRSTlMATTpGCEIdDS0kGBI+NCogMWRIF20AAADeSURBVDjL3ZOxDgMhDENdCOGAg+P/v7aI4oalQ3VT+6YoAaPYAkB2PtQII9bgXcagPSYKoq9GA/JjEXmLjQzHsq1ZY8PBWzmxwx6BZV2zykZAZ5nWLLHRIe9ThEoC5PniGW29c742FxQ9mmJH26GCf0HHrq7AKG54MTfutJMk2gn9mK1aXMeaHbezNYlrzS57RJboCXIuSQHKVHWWl7ip+No4p1SwU1LK+DFEPjWSH5vu++QwXEmb7w2kMRezttAUM/92tn3N+hfZmqSJeuE3rVu2dfvI5dKInahXAfAESeEGZRES0sEAAAAASUVORK5CYII=";const be=t=>(H("data-v-125e631a"),t=t(),X(),t),Ut={class:"container"},Kt={class:"common-title"},Qt={class:"title"},qt=be(()=>e("img",{src:me,class:"ig"},null,-1)),Tt={class:"product-detail"},Yt=be(()=>e("div",{class:"line2"},null,-1)),zt=j({props:{info:{type:Object,default:()=>{}}},setup(t){const d=t;return(P,m)=>{var a;const b=E("van-collapse-item"),s=E("van-collapse");return o(),r("div",Ut,[(o(!0),r(S,null,O((a=d.info)==null?void 0:a.liabilityByRiskVOList,(A,k)=>(o(),r("div",{key:k},[e("div",Kt,[e("div",Qt,[qt,C(" "+_(A.riskName),1)])]),e("div",Tt,[B(s,{modelValue:A.riskName1,"onUpdate:modelValue":n=>A.riskName1=n,accordion:"","is-link":!1,border:!1,size:"middle"},{default:g(()=>[(o(!0),r(S,null,O(A.proposalRiskLiabilityVOList,(n,u)=>(o(),w(b,{key:u,title:n.liabilityName,name:u,"value-class":"price",value:n.liabilityIndemnityContent},{default:g(()=>[C(_(n.liabilityDesc),1)]),_:2},1032,["title","name","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128)),Yt])}}});var Wt=G(zt,[["__scopeId","data-v-125e631a"]]);const ge=t=>(H("data-v-71d412f1"),t=t(),X(),t),jt={class:"container"},Ht={class:"common-title"},Xt={class:"title"},Gt=ge(()=>e("img",{src:me,class:"ig"},null,-1)),Jt={class:"product-detail"},Zt=ge(()=>e("div",{class:"line2"},null,-1)),es=j({props:{info:{type:Object,default:()=>{}}},setup(t){const d=t;return(P,m)=>{var s;const b=E("van-cell");return o(),r("div",jt,[(o(!0),r(S,null,O((s=d.info)==null?void 0:s.liabilityByTopTypeVOList,(a,A)=>(o(),r("div",{key:A},[(o(!0),r(S,null,O(a.proposalRiskLiabilityVOList,k=>(o(),r("div",{key:k.liabilityId},[e("div",Ht,[e("div",Xt,[Gt,C(" "+_(k.liabilityName),1)])]),e("div",Jt,[(o(!0),r(S,null,O(a.proposalRiskLiabilityVOList,(n,u)=>(o(),w(b,{key:u},{default:g(()=>[C(_(n.liabilityName),1)]),_:2},1024))),128))])]))),128)),Zt]))),128))])}}});var ts=G(es,[["__scopeId","data-v-71d412f1"]]);const Pe=t=>(H("data-v-c84e1018"),t=t(),X(),t),ss={class:"com-insured-product-wrapper"},os={class:"container"},ns=Pe(()=>e("span",{class:"title"}," \u9009\u62E9\u6295\u4FDD\u4EA7\u54C1 ",-1)),as={class:"popup-body"},us={class:"cell-title"},is={class:"title"},ls={class:"error-message"},cs=Pe(()=>e("div",{class:"footer-button"},"\u7ACB\u5373\u6295\u4FDD",-1)),rs=j({props:{isShow:{type:Boolean,default:!1},dataSource:{default:()=>[]}},emits:["close","finished"],setup(t,{emit:d}){const P=t,m={insured:"\u5DF2\u901A\u8FC7\u8BA1\u5212\u4E66\u8FDB\u884C\u6295\u4FDD",unAuth:"\u4EA7\u54C1\u672A\u6388\u6743\uFF0C\u65E0\u6CD5\u8FDB\u884C\u6295\u4FDD",off:"\u4EA7\u54C1\u5DF2\u4E0B\u67B6\uFF0C\u65E0\u6CD5\u8FDB\u884C\u6295\u4FDD",cps:"\u4EA7\u54C1\u6682\u4E0D\u652F\u6301\u8BA1\u5212\u4E66\u8F6C\u6295\u4FDD"},b=y([]),s=y([]),a=y({isShow:P.isShow}),A=fe(()=>p=>p.insured===1?m.insured:p.authStatus!==1?m.unAuth:p.shelfStatus!==1?m.off:p.insureMethod!==1?m.cps:""),k=()=>{d("close")},n=()=>{s.value=[],d("checked",[])},u=p=>{var I,D,F;(F=(D=(I=b==null?void 0:b.value)==null?void 0:I[p])==null?void 0:D.toggle)==null||F.call(D),d("checked",s.value)};return W(()=>P.isShow,p=>{a.value.isShow=p}),W(()=>P.modalValue,(p=[])=>{s.value=p},{deep:!0,immediate:!0}),(p,I)=>{const D=E("van-radio"),F=E("VanCell"),l=E("van-cell-group"),c=E("van-radio-group"),R=E("VanPopup");return o(),r("div",ss,[B(R,{show:a.value.isShow,"onUpdate:show":I[1]||(I[1]=f=>a.value.isShow=f),position:"bottom",onClose:k},{default:g(()=>[e("div",os,[e("div",{class:"popup-header"},[e("span",{class:"clear-all",onClick:n}," \u6E05\u7A7A\u9009\u9879 "),ns,e("span",{onClick:k},"X")]),e("div",as,[B(c,{modelValue:s.value,"onUpdate:modelValue":I[0]||(I[0]=f=>s.value=f)},{default:g(()=>[B(l,{inset:""},{default:g(()=>[(o(!0),r(S,null,O(t.dataSource,f=>(o(),w(F,{key:f.productCode,onClick:x=>u(f)},{"right-icon":g(()=>[B(D,{ref_for:!0,ref:x=>b.value[f.productCode]=x,shape:"square",name:f.productCode,onClick:ke(x=>u(f.productCode),["stop"])},null,8,["name","onClick"])]),title:g(()=>[e("div",us,[e("div",is,[e("p",null,_(f.productName),1),e("span",ls,_(M(A)(f)),1)])])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),cs])]),_:1},8,["show"])])}}});var ds=G(rs,[["__scopeId","data-v-c84e1018"]]);const ye=t=>(H("data-v-52ee26de"),t=t(),X(),t),vs={class:"page-composition-proposal"},_s={class:"head-bg"},ps={class:"container"},fs=ye(()=>e("div",{class:"common-title"},"\u4FDD\u9669\u516C\u53F8\u7B80\u4ECB",-1)),As=ye(()=>e("span",{class:"poiner"},null,-1)),hs={key:2,class:"footer-btn"},ms=C("\u751F\u6210PDF"),bs=C("\u7ACB\u5373\u6295\u4FDD"),gs=j({setup(t){const d=y(!0),P=Ie(),m=Ee(),{isShare:b,id:s}=P.query,a=y(),A=y(""),k=y(""),n=y({}),u=y([]);y();const[p,I]=De(),D=()=>{d.value=!d.value},F=i=>i===1,l=fe(()=>!!u.value.filter(v=>v.authStatus===1&&v.insureMethod===1).length);W(()=>a.value,i=>{const{gender:v,name:h}=i;F(v)?k.value=`${h||""}\u5148\u751F\u7684\u8BA1\u5212\u4E66`:k.value=`${h||""}\u5973\u58EB\u7684\u8BA1\u5212\u4E66`});const c=()=>{var v;const i=`${Ne}/compositionProposal?id=${s}&isShare=1&tenantId=${A.value}`;n.value={title:`${(v=a.value)==null?void 0:v.name}\u7684\u8BA1\u5212\u4E66`,desc:"\u60A8\u7684\u8D34\u5FC3\u4FDD\u9669\u7BA1\u5BB6",link:i,imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"}},R=async()=>{try{let i=null;b?i=await xe(`${s}?tenantId=${P.query.tenantId}`):i=await Be(s);const{code:v,data:h}=i;if(v==="10000"){const L=(h==null?void 0:h.proposalInsuredVOList[0])||{};a.value=L,A.value=h==null?void 0:h.tenantId}c()}catch{z("\u63A5\u53E3\u8BF7\u6C42\u5931\u8D25")}},f=()=>{Le({proposalId:s}).then(({code:i,data:v})=>{i==="10000"&&(u.value=v)})},x=i=>{const{productCode:v,insurerCode:h,tenantProductCode:L}=i;Me({productCode:v,proposalId:s}).then(({code:K,data:T,message:Q})=>{K==="10000"&&(T?Se({insurerCode:h,productCode:L,proposalId:s}).then(({code:q,data:Y})=>{q==="10000"&&(window.location.href=Y)}):z(Q))})},N=()=>{var i,v;((i=u.value)==null?void 0:i.length)===1?x((v=u.value)==null?void 0:v[0]):I(!0)};Fe(()=>{P.query.token&&new Re({source:"localStorage"}).set("token",P.query.token),f(),R()});const U=()=>{if(!s){z("PDF\u751F\u6210\u5931\u8D25");return}z.loading({message:"PDF\u751F\u6210\u4E2D...",forbidClick:!0}),we(s.toString()).then(i=>{const{code:v,message:h}=i;v==="10000"&&(z.clear(),console.log(h),h?m.push(`/pdfViewer?url=${encodeURIComponent(h)}&title=${k.value}`):z("\u8BA1\u5212\u4E66\u4E3A\u7A7A"))})};return(i,v)=>{const h=E("van-collapse-item"),L=E("van-collapse"),K=E("van-button"),T=E("ProPageWrap");return o(),w(T,null,{default:g(()=>[e("div",vs,[e("div",_s,_(k.value),1),B(tt,{info:a.value},null,8,["info"]),e("div",{class:"switch-btn",onClick:D},_(d.value?"\u6309\u8D23\u4EFB\u663E\u793A":"\u6309\u9669\u79CD\u663E\u793A"),1),d.value?(o(),w(Wt,{key:0,info:a.value},null,8,["info"])):(o(),w(ts,{key:1,info:a.value},null,8,["info"])),B($t,{info:a.value},null,8,["info"]),e("div",ps,[fs,B(L,{accordion:"","is-link":!1,border:!1,size:"middle"},{default:g(()=>{var Q;return[(o(!0),r(S,null,O((Q=a.value)==null?void 0:Q.insurerInfoVOList,(q,Y)=>(o(),w(h,{key:Y,name:"1","value-class":"price"},{title:g(()=>[e("div",null,[As,C(" "+_(q.insurerName),1)])]),default:g(()=>[C(" "+_(q.insurerDesc),1)]),_:2},1024))),128))]}),_:1})]),M(b)?$("",!0):(o(),r("div",hs,[B(K,{plain:"",type:"primary",class:"btn",onClick:U},{default:g(()=>[ms]),_:1}),M(l)?(o(),w(K,{key:0,type:"primary",class:"btn",onClick:N},{default:g(()=>[bs]),_:1})):$("",!0)]))]),M(p)?(o(),w(ds,{key:0,"is-show":M(p),"data-source":u.value},null,8,["is-show","data-source"])):$("",!0)]),_:1})}}});var Es=G(gs,[["__scopeId","data-v-52ee26de"]]);export{Es as default};
