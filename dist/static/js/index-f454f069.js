import{g as z,E as g,_ as ee,j as n,n as f,z as e,t as Q,J as y,A as D,d as Ie,k as S,C as E,a4 as G,a5 as X,r as m,p as C,m as _,F as L,G as M,y as Ae,B as Ee,L as we,R as me,O as Be,a9 as xe,Q as he,h as Re,ab as De,T as H}from"./vendor-9d7eb2ed.js";import{a as Fe,b as Se,g as Ve}from"./proposalList-845bda25.js";import{q as Ne,p as Oe,c as $e,a as Le}from"./compositionProposal-e1c54a53.js";import{_ as J,$ as be,S as Me,a0 as Ue,a1 as re}from"./index-ca29a625.js";import{P as Te}from"./index-d0aaa865.js";import{_ as Ke}from"./index-fd1116d6.js";import{_ as Qe}from"./index-06926e20.js";var qe="/static/assets/male.099176e3.png",ze="/static/assets/female.d4f701ab.png";const Ye=a=>(G("data-v-fc10fc8e"),a=a(),X(),a),We={class:"container head-cover"},je={class:"info-detail"},He={class:"name"},Ge={class:"img"},Xe={key:0,src:qe},Je={key:1,src:ze},Ze={clase:"p1"},et={class:"p2"},tt={class:"fe"},st=E(" \u9996\u5E74\u4FDD\u8D39\uFF1A "),ot=Ye(()=>e("div",{class:"line"},null,-1)),nt={class:"tp"},at=z({props:{info:{type:Object,default:()=>{}}},setup(a){const h=a,w=[{title:"\u9669\u79CD\u540D\u79F0",dataIndex:"riskName",width:180},{title:"\u4FDD\u989D",dataIndex:"amount"},{title:"\u4FDD\u969C\u671F\u95F4",dataIndex:"coveragePeriod",width:110},{title:"\u7F34\u8D39\u671F\u95F4",dataIndex:"chargePeriod",width:110},{title:"\u4FDD\u8D39",dataIndex:"premium",width:120}],P=g([]),i={1:"\u7537",2:"\u5973"},t=o=>o===1,c=o=>{const s=o.split("_");if(o==="to_life")return"\u4FDD\u7EC8\u751F";switch(s[0]){case"year":return`${s[1]}\u5E74`;case"month":return`${s[1]}\u6708`;case"day":return`${s[1]}\u5929`;case"to":return`\u4FDD\u81F3${s[1]}\u5C81`;default:return""}},r=o=>{const s=o.split("_");switch(s[0]){case"year":return`${s[1]}\u5E74\u4EA4`;case"month":return`${s[1]}\u6708\u4EA4`;case"to":return`\u4EA4\u81F3${s[1]}\u5C81`;case"single":return"\u8DB8\u7F34";default:return""}},B=o=>{const s=[];o==null||o.forEach(A=>{const{riskName:I,amount:V,coveragePeriod:R,chargePeriod:u,premium:v}=A;s.push({riskName:I,amount:V,coveragePeriod:c(R),chargePeriod:r(u),premium:v})}),P.value=s};return ee(()=>h.info,o=>{B(o==null?void 0:o.proposalProductRiskVOList)},{deep:!0,immediate:!0}),(o,s)=>{var A,I,V,R,u,v;return n(),f("div",We,[e("div",je,[e("div",He,[e("div",Ge,[t((A=h.info)==null?void 0:A.gender)?(n(),f("img",Xe)):Q("",!0),t((I=h.info)==null?void 0:I.gender)?Q("",!0):(n(),f("img",Je))]),e("div",null,[e("p",Ze,y((V=h.info)==null?void 0:V.name),1),e("p",et,y(i[(R=h.info)==null?void 0:R.gender])+"\uFF0C"+y(D(Ie)().diff((u=a.info)==null?void 0:u.birthday,"y"))+"\u5C81",1)])]),e("div",tt,[st,e("span",null,"\xA5"+y(D(be)((v=h.info)==null?void 0:v.totalPremium)),1)])]),ot,e("div",nt,[P.value.length>0?(n(),S(Te,{key:0,columns:w,class:"table","data-source":P.value},null,8,["data-source"])):Q("",!0)])])}}});var ut=J(at,[["__scopeId","data-v-fc10fc8e"]]),ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAACJVBMVEUAAADr+P/g///////V///d7v/y+//i8v/L6f/K4//c7f/s9//H5P/0+v/u9v/L4/+42v/w9//e7v/0+v/L4/+72//K4/+93P/1+f/p8//b7P/v9/+/3f/S6f/2+//d7f/Q5//0/P/h8f/G4/+/4//k8v/R6P/k9v////++3f+72v/i8f/1+v/b7f/Q5//g7//P5v+32f/y+f/i8P+42v+32//w+P/d7f/A3v/J5P+93f+73f+63v/I4v/v9//i8f/b7f/P5f+42v/1+v/t9//k8P/d7f/1+//b7f/e7//b7P/g7v+32f/w9//2+v/f7v/O5P+52v+93f+72//u9v/j8P/Q5v/M5f/k8P/s9v/l8v/2+//w+P/b7f/R5v/e7v/P5v+52v/w9//P5v+32f/w9//h8f/k8f/g8f/I4f/M4/+62//M5P/p9P/S5/+12P/P5/+52f/3/P/k8f/b7P/q9P/L4/+93P/W7P/p9P+12v/V5//N6f/I5//2+//1+v/K4//I4v+/3f+93f/I4v+22f/w9//u9f/2+//b6/+/3f/I4f/t9v/J4//1+v/e7//Q5/+22v/0+//c7v/R6P+22P/3/P/w9v+31/+42/+52f/N5P/u9v/f7v/d7f/L4/+82/+22P/O5f/y+P+62v+42f/v9//b7P/J4v/0+f/h7/+93P/x9//g7//1+v/j8P/c7P/H4f/z+P/Q5v+32f/P5v++3f/+uQMOAAAAm3RSTlMAEQQCBiMjGQz1tD0y6ubJxLu5tqKimZmIiId9eGhHRzkuLiASDgsHAffz5+Pg4N+/v7Krp2pdXVlAOyoj/fn5+fj49fX19e/v6urm4uHb1tHRy8fExMTEu7Kyq6urp5eUlI+OjoSEfX15d3NybWFhX19eXldOSUk7ODcrKBX5+ffr6+no29rTwMC2tammnIqIiHV1cHBkVkAyKOPy81wAAAM+SURBVEjH7Zb3UxNREMdfEkKT3qsCoffeLaAIioIFbKgUBQtgBQUEe++95RLuUglBCBD8+9x3t+8uMTOOM/zEDPtT5vt2831lP5sQQrZGhx48nU6UyKgo2Re1zUPIOncoKPyyWhHUKUfzD58PJBAJDofZxu2oltdu7vxlMBrtSbKgLTbp9bNz4YFMCDzCW6xW64FG8F50mBdsHLfHH9f8W+YNBiPUM3/NMZNYPhfHyuOdPNS73REaEg3l4M5xibiWuDQvutuDUUhbFctn57ZnS0L2b57nrRa3IEyRUIdjZcEG9ZGYfWIJ3A1Gl30/CqlQbqLly2mSUO90Oi2we0GoIoWLK+AO5Scx+9Q8uBtcRnsRCldW1/Ri9XKIJISAO5QLgnCV9ODZuWTMvgDu4ubPoHCHbT7ITxL88qSzC0IDSb8HZ1/guDAVZqsKxLO7dmUQjLNYfokJKU5wtwhCJXy+sXsFNh+2hbDY0k7d99bIgqpUT28+Ri0/eyzPw8OVZYovlRBZngzeSvrF4KgkrYeQey3meNwt4hG34yNir+eSzdjAsa53h66jPe/ZdQU+XWfy7Troedp16Xcp7749b/9XzyPv0PM9yLtCHPLuRZzJmzjGe8N6eQ9F3pVpg7x7TRu997RhvFeRaAfl3XfWuZRZZ/KZdci7MEUnLeVdmbTaFnT3mLT6vyYtL/IuwKQlCeBu/o85P+s153k4O8z59f3KbMYGjqzqgcFxtYegHh96V5PlmRIy0peq9RQaq/qHf0jToYPy3uWvNFk37bqiCVnw66PI3R9RqofzgHdrPwAc0Crx/iwHl3I6Jd7bAljye+S9lgm1yPsHQt4y3kdxbZTx3ouCbg15f6BBhh4y3nWkg/H+GrMrGO+dKIzJvE9LQoPMey1pZbx3YXY3470Nhc8mVl4nCXVOxvsX8hx55wYwu5e5vyCYvYq8L2dKQqYTeRe+k6/U3Qzuk5g9yf5ZpbK7LF6T3F8RjJdQT8/+BK67HM4O7oOExZB088GyMNEkXvxj+SkCHtGrczfX03v8WGi2Pf1GlBgrMRjbP2kUYbq0SR/0ZkYRZirzLc1lP9m3qYh3qNBI6RydxlvQ6MSh/wcEiQ5vBU6rowAAAABJRU5ErkJggg==",lt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAnhP8Nb/8Nbv8Nbv8OcP8Ob/8Ob/8Ob/8Nb/8PcP8Obv8Obv8Nb/8NcP8Pb/8PcP8TdP8Nb/8NcP8Obv8Nbv8Nb/8Obv8Ob/8OcP8Rb/8Ocf8Ncv8Pcf8Wb/8VgP8QcP8Nbv+quNhCAAAAIXRSTlMABvixlIDwb92IMezNnnNURBvRY/Hn0rm1Wzw2JiIXDFCHpR0hAAAB8UlEQVRYw6TU567CMAwF4JNxO+mibDrw+7/kbdxIVHSn3w+CKkiOrTpYEpWhOgexlHFwVmEZwUXhK49+eMovsIt43mnG/SmwVZteacE1bbelSWP6Ch6JDkOdPAL6ilOBVa8bWRflR2JwQOSrC1m311ocTT2pMoERkSlJPb0Yqj7ZbXSBGYW2W51qzMo9e1qDBY1N7eWYkcn+qDdWvPvgMsOkklgisEokxMrJPMR8bOITm8iUy6m61/opR7+v+XlQYbMq4JPrn6JP/LTCDhWffRIY0mTk2CUnQ2PgNerzjo6/BoXxfCXYLeG5+xaX2mL3sq1NYbV8b7zh4M23SjsMpOFEDyIJcx/KBk4aae5MAeNpAx2I9IRxN4EKOCpMpDt/o46CM0WdAvatyuAs43fZ7ngRcCYutiLProdq84BoNGVOExeh7BdnNkqJ0CwCBwjqhFxhgEMC7vK5+3zgkAcRnXm7BIckXFQ8HrTP34rPeNxiSO7UUEirxn+Q/63YsQ0AMAgDwY6Ckv2HZQCQ3NwCliAB7H+EKgvVFXpKmyw0t7Sn2T1Rp2+z2fOzD8lGhA0tWyNqsbFVy5Y/O0fqQLKTzUyEsjXMaCnrx8yossfKsLMIoUKNilkq+KkoqsKxiusKICikgSCLwj4KRHk05mEdw4cLrMGD5S1fn3UAAAAASUVORK5CYII=",it="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAQcP8vgP8Nb/8Nbv8Ob/8Obv8Vc/8Ob/8Obv8Nbv8Nb/8Obv8Nb/8NcP8OcP8Pb/8PcP8Ocf8chf8Ob/8Obv8Ob/8Obv8OcP8NcP8Nbv8NcP8NcP8Pcf8Ocf8Scv8Pb/8Nbv90LxprAAAAIXRSTlMAPwX5svCSF27s5tLNmnFbVDEkCdzx37mgiYZ0YkY2HWWKqbLAAAACF0lEQVRYw6SU17LDIAxERXF3XOLe4uj/f/LGgjtDEldyHswMHpYVWoA98rGTUR0IEdSR7MYcbPB86eAHjvQ9uESRNrhBkxbnZYYQdwiHc1I8CYxVpWzdvndbWRqTQcLhEBahppJ+bizguS8r1ETsyI6LCiEzvvI7kwIV7q6pe6xl3Bk2mF0tFd93ytINv3m7wbjpMGyWlwm11QMOeCjjIoNVntoOh0O4NvVc9YNEAqdIkFjxxATVPcFJJoeqY1/9ovnyDqe5l7Tzxwoe69nz6L1jDiYqhxNcYlLJBAOGCz5cxMcFZhQWUd/hMpSCiJu9pGLXScMw3cpT/JaYgt6NrTx7AlF4WxmnV6UAxbBbGKNz2C1u0IZCpD1thMgvhspSqppoJaSDo86wWQzNtkLzYqkhc/hCgq0QyOW/95+qzF4ooyxrxYrbC/FKV+TQaC9EThyAnJzZC+mzyWGkwV5IWxmhWwb+ixDHFx1VWIKtEFHSKUf0/UWIvERQI2ILb3jMJKGXgpl48EaLiDUEXxctFXiASL+uWwDLqh5MQjwkBJN+0f5rxc5tAABhIAhiIkJaoP8mSRw5O2koAInH9u2yjdjR2GWz52cfkpUIK1rWRlRjY62WNX82jtSAZCObhQgVa1jQUtHPh9FVE0MSICkV2BlCKKjhmDXB7yQY8q5CUQXHCteVQFBKQ0kWr328iPJqzMu6XjvRhx8qv5Pz8gaE6wAAAABJRU5ErkJggg==";const U=a=>(G("data-v-6fe07251"),a=a(),X(),a),ct={class:"container"},rt=U(()=>e("div",{class:"common-title"},"\u5229\u76CA\u6F14\u793A",-1)),dt={class:"benefit"},vt={class:"benefit-title"},_t=U(()=>e("div",{class:"line"},null,-1)),pt={key:0,class:"box-title box-title-chart"},ft=U(()=>e("img",{src:ce,alt:""},null,-1)),ht=E(" \u4FDD\u5355\u5E74\u5EA6"),At=E("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),mt=E("\u5C81\u65F6 "),bt=U(()=>e("img",{src:ce,alt:""},null,-1)),gt={key:1},yt={class:"box"},Pt={class:"box-title"},Ct=U(()=>e("img",{src:ce,alt:""},null,-1)),kt=E(" \u4FDD\u5355\u5E74\u5EA6"),It=E("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),Et=E("\u5C81\u65F6 "),wt=U(()=>e("img",{src:ce,alt:""},null,-1)),Bt={class:"box-price"},xt={class:"text1"},Rt={class:"text2"},Dt={key:2,style:{width:"100%"}},Ft={class:"slider"},St=U(()=>e("img",{src:lt,alt:""},null,-1)),Vt=[St],Nt={style:{flex:"1",margin:"0px 5px"}},Ot={class:"custom-button"},$t=U(()=>e("img",{src:it,alt:""},null,-1)),Lt=[$t],Mt=U(()=>e("p",{class:"slider-dec"},"\u62D6\u52A8\u6309\u94AE\u67E5\u770B\u4E0D\u540C\u5E74\u9F84\u4FDD\u969C",-1)),Ut={class:"btn-two"},Tt=E("\u56FE\u8868\u5C55\u793A"),Kt=E("\u8D8B\u52BF\u5C55\u793A"),Qt=z({props:{info:{type:Object,default:()=>{}}},setup(a){const h=a,w=g(0),P=g(0),i=g(0),t=g(),c=g(0),r=g(!0),B=(u,v)=>{const F=[],p=[];for(let x=u,b=0;x<=v;x++,b++)F.push(x.toString()),p.push(b+1);return{a:F,year:p}},o=()=>{var x,b,T;const u=(b=(x=h.info)==null?void 0:x.benefitRiskResultVOList)==null?void 0:b[w.value],{a:v,year:F}=B(P.value,i.value),p={index:v.indexOf(c.value.toString()),age:v,year:F,result:(T=u==null?void 0:u.benefitRiskItemResultVOList)==null?void 0:T[0]};t.value=p},s=u=>{if(!(u==null?void 0:u.benefitRiskResultVOList))return;const v=u==null?void 0:u.benefitRiskResultVOList[w.value];P.value=v.ageBegin+1,c.value=v.ageBegin+1,i.value=v.ageEnd},A=()=>{c.value>i.value-1||(c.value+=1,o())},I=()=>{c.value>P.value&&(c.value-=1,o())},V=u=>{w.value=u.name,o()},R=u=>{u==="1"?r.value=!0:r.value=!1};return ee(()=>h.info,u=>{u&&(s(u),o())},{deep:!0,immediate:!0}),ee(c,()=>{o()}),(u,v)=>{const F=m("van-slider"),p=m("van-button"),x=m("van-tab"),b=m("van-tabs");return n(),f("div",ct,[rt,C(b,{active:w.value,"title-active-color":"green","title-inactive-color":"#393D46",shrink:"",onClickTab:V},{default:_(()=>{var T;return[(n(!0),f(L,null,M((T=h.info)==null?void 0:T.benefitRiskResultVOList,(Y,te)=>(n(),S(x,{key:te,name:te,title:Y.riskName},{default:_(()=>{var se,oe,ne,Z,ae,ue,W,le,ie,d,l,k,$,K,j,N;return[e("div",dt,[e("div",vt,y(Y==null?void 0:Y.riskName),1),_t,r.value?Q("",!0):(n(),f("p",pt,[ft,ht,e("span",null,y((ne=(se=t.value)==null?void 0:se.year)==null?void 0:ne[(oe=t.value)==null?void 0:oe.index]),1),At,e("span",null,y((ue=(Z=t.value)==null?void 0:Z.age)==null?void 0:ue[(ae=t.value)==null?void 0:ae.index]),1),mt,bt])),r.value?(n(),f("div",gt,[e("div",yt,[e("p",Pt,[Ct,kt,e("span",null,y((ie=(W=t.value)==null?void 0:W.year)==null?void 0:ie[(le=t.value)==null?void 0:le.index]),1),It,e("span",null,y((k=(d=t.value)==null?void 0:d.age)==null?void 0:k[(l=t.value)==null?void 0:l.index]),1),Et,wt]),e("div",Bt,[(n(!0),f(L,null,M((K=($=t.value)==null?void 0:$.result)==null?void 0:K.headers,(O,q)=>{var de,ve,_e,pe,fe;return n(),f("div",{key:q,style:{width:"33%"}},[e("p",xt,y(D(be)(Number((fe=(pe=(ve=(de=t.value)==null?void 0:de.result)==null?void 0:ve.dataList)==null?void 0:pe[(_e=t.value)==null?void 0:_e.index])==null?void 0:fe[q]))),1),e("p",Rt,y(O)+"(\u5143\uFF09",1)])}),128))])])])):(n(),f("div",Dt,[C(Ke,{min:P.value,max:i.value,current:c.value,data:(N=(j=t.value)==null?void 0:j.result)==null?void 0:N.benefitRiskItemList},null,8,["min","max","current","data"])])),e("div",Ft,[e("div",{class:"add lf",onClick:I},Vt),e("div",Nt,[P.value?(n(),S(F,{key:0,modelValue:c.value,"onUpdate:modelValue":v[0]||(v[0]=O=>c.value=O),min:P.value,max:i.value,"bar-height":"8px"},{button:_(()=>[e("div",Ot,y(c.value)+" \u5C81",1)]),_:1},8,["modelValue","min","max"])):Q("",!0)]),e("div",{class:"add rg",onClick:A},Lt)]),Mt,e("div",Ut,[C(p,{round:"",plain:!r.value,type:"primary",class:"btn",onClick:v[1]||(v[1]=O=>R("1"))},{default:_(()=>[Tt]),_:1},8,["plain"]),C(p,{round:"",plain:r.value,type:"primary",class:"btn",onClick:v[2]||(v[2]=O=>R("2"))},{default:_(()=>[Kt]),_:1},8,["plain"])])])]}),_:2},1032,["name","title"]))),128))]}),_:1},8,["active"])])}}});var qt=J(Qt,[["__scopeId","data-v-6fe07251"]]),ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAM1BMVEUAAAAHe/8JfP8HfP8ghf8IfP8Jfv8SgP8Lff8Iev8Kf/8Nf/8Ie/8KfP8Mff8Iff8Ke/9WxKgsAAAAEXRSTlMATTpGCEIdDS0kGBI+NCogMWRIF20AAADeSURBVDjL3ZOxDgMhDENdCOGAg+P/v7aI4oalQ3VT+6YoAaPYAkB2PtQII9bgXcagPSYKoq9GA/JjEXmLjQzHsq1ZY8PBWzmxwx6BZV2zykZAZ5nWLLHRIe9ThEoC5PniGW29c742FxQ9mmJH26GCf0HHrq7AKG54MTfutJMk2gn9mK1aXMeaHbezNYlrzS57RJboCXIuSQHKVHWWl7ip+No4p1SwU1LK+DFEPjWSH5vu++QwXEmb7w2kMRezttAUM/92tn3N+hfZmqSJeuE3rVu2dfvI5dKInahXAfAESeEGZRES0sEAAAAASUVORK5CYII=";const ye=a=>(G("data-v-3c3bfe09"),a=a(),X(),a),zt={class:"container"},Yt={class:"common-title"},Wt={class:"title"},jt=ye(()=>e("img",{src:ge,class:"ig"},null,-1)),Ht={class:"product-detail"},Gt=ye(()=>e("div",{class:"line2"},null,-1)),Xt=z({props:{info:{type:Object,default:()=>{}}},setup(a){const h=a;return(w,P)=>{var c;const i=m("van-collapse-item"),t=m("van-collapse");return n(),f("div",zt,[(n(!0),f(L,null,M((c=h.info)==null?void 0:c.liabilityByRiskVOList,(r,B)=>(n(),f("div",{key:B},[e("div",Yt,[e("div",Wt,[jt,E(" "+y(r.riskName),1)])]),e("div",Ht,[C(t,{modelValue:r.riskName1,"onUpdate:modelValue":o=>r.riskName1=o,accordion:"","is-link":!1,border:!1,size:"middle"},{default:_(()=>[(n(!0),f(L,null,M(r.proposalRiskLiabilityVOList,(o,s)=>(n(),S(i,{key:s,title:o.liabilityName,name:s,"value-class":"price",value:o.liabilityIndemnityContent},{default:_(()=>[E(y(o.liabilityDesc),1)]),_:2},1032,["title","name","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128)),Gt])}}});var Jt=J(Xt,[["__scopeId","data-v-3c3bfe09"]]);const Pe=a=>(G("data-v-5c08da24"),a=a(),X(),a),Zt={class:"container"},es={class:"common-title"},ts={class:"title"},ss=Pe(()=>e("img",{src:ge,class:"ig"},null,-1)),os={class:"product-detail"},ns=Pe(()=>e("div",{class:"line2"},null,-1)),as=z({props:{info:{type:Object,default:()=>{}}},setup(a){const h=a;return(w,P)=>{var t;const i=m("van-cell");return n(),f("div",Zt,[(n(!0),f(L,null,M((t=h.info)==null?void 0:t.liabilityByTopTypeVOList,(c,r)=>(n(),f("div",{key:r},[(n(!0),f(L,null,M(c.proposalRiskLiabilityVOList,B=>(n(),f("div",{key:B.liabilityId},[e("div",es,[e("div",ts,[ss,E(" "+y(B.liabilityName),1)])]),e("div",os,[(n(!0),f(L,null,M(c.proposalRiskLiabilityVOList,(o,s)=>(n(),S(i,{key:s},{default:_(()=>[E(y(o.liabilityName),1)]),_:2},1024))),128))])]))),128)),ns]))),128))])}}});var us=J(as,[["__scopeId","data-v-5c08da24"]]);const Ce=a=>(G("data-v-ca64694e"),a=a(),X(),a),ls={class:"com-insured-product-wrapper"},is={class:"container"},cs=Ce(()=>e("span",{class:"clear-all"},null,-1)),rs=Ce(()=>e("span",{class:"title"}," \u9009\u62E9\u6295\u4FDD\u4EA7\u54C1 ",-1)),ds={class:"popup-body"},vs={class:"cell-title"},_s={class:"title"},ps={class:"error-message"},fs={class:"footer-button"},hs=E("\u7ACB\u5373\u6295\u4FDD"),As=z({props:{isShow:{type:Boolean,default:!0},dataSource:{default:()=>[]}},emits:["close","finished"],setup(a,{emit:h}){const w=a,P={insured:"\u5DF2\u901A\u8FC7\u8BA1\u5212\u4E66\u8FDB\u884C\u6295\u4FDD",unAuth:"\u4EA7\u54C1\u672A\u6388\u6743\uFF0C\u65E0\u6CD5\u8FDB\u884C\u6295\u4FDD",off:"\u4EA7\u54C1\u5DF2\u4E0B\u67B6\uFF0C\u65E0\u6CD5\u8FDB\u884C\u6295\u4FDD",cps:"\u4EA7\u54C1\u6682\u4E0D\u652F\u6301\u8BA1\u5212\u4E66\u8F6C\u6295\u4FDD"},i=g(""),t=g(null),c=g({isShow:w.isShow}),r=Ae(()=>s=>s.insured===1?P.insured:s.authStatus!==1?P.unAuth:s.insureMethod!==1?P.cps:""),B=s=>{r.value(s)||(t.value=s,i.value=s.productCode)},o=()=>{h("close")};return ee(()=>w.isShow,s=>{c.value.isShow=s}),(s,A)=>{const I=m("van-radio"),V=m("VanCell"),R=m("van-cell-group"),u=m("van-radio-group"),v=m("VanButton"),F=m("VanPopup");return n(),f("div",ls,[C(F,{show:c.value.isShow,"onUpdate:show":A[2]||(A[2]=p=>c.value.isShow=p),position:"bottom",onClose:o},{default:_(()=>[e("div",is,[e("div",{class:"popup-header"},[cs,rs,e("span",{onClick:o},"X")]),e("div",ds,[C(u,{modelValue:i.value,"onUpdate:modelValue":A[0]||(A[0]=p=>i.value=p)},{default:_(()=>[C(R,null,{default:_(()=>[(n(!0),f(L,null,M(a.dataSource,p=>(n(),S(V,{key:p.productCode,onClick:x=>B(p)},{"right-icon":_(()=>[C(I,{name:p.productCode,disabled:!!D(r)(p)},null,8,["name","disabled"])]),title:_(()=>[e("div",vs,[e("div",_s,[e("p",null,y(p.productName),1),e("span",ps,y(D(r)(p)),1)])])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),e("div",fs,[C(v,{block:"",type:"primary",disabled:!i.value,onClick:A[1]||(A[1]=p=>h("finished",t.value))},{default:_(()=>[hs]),_:1},8,["disabled"])])])]),_:1},8,["show"])])}}});var ms=J(As,[["__scopeId","data-v-ca64694e"]]);const bs={class:"popup-body"},gs={class:""},ys={class:"radio-wrap"},Ps=["onClick"],Cs={class:"footer"},ks=E("\u786E\u5B9A"),Is=z({props:{show:{type:Boolean,default:!1},themeList:{default:()=>[]}},emits:["submit","update:show"],setup(a,{emit:h}){var o,s;const w=a,{show:P,themeList:i}=D(w),t=g((o=i==null?void 0:i[0])==null?void 0:o.id),c=g((s=i==null?void 0:i[0])==null?void 0:s.id),r=A=>{t.value=A},B=()=>{var A;h("submit",c.value?t.value||((A=i==null?void 0:i[0])==null?void 0:A.id):c.value)};return(A,I)=>{const V=m("van-switch"),R=m("van-cell"),u=m("VanRadio"),v=m("VanCellGroup"),F=m("VanRadioGroup"),p=m("VanButton"),x=m("ProPopup");return n(),S(x,{show:D(P),"onUpdate:show":I[2]||(I[2]=b=>me(P)?P.value=b:null),class:"theme-select-wrap",title:"\u9009\u62E9\u8BA1\u5212\u4E66\u5C01\u9762",onClose:I[3]||(I[3]=b=>h("update:show",!1))},{default:_(()=>[e("div",bs,[C(R,{center:"",title:"\u5C01\u9762\u56FE"},{"right-icon":_(()=>[C(V,{modelValue:c.value,"onUpdate:modelValue":I[0]||(I[0]=b=>c.value=b),"inactive-value":0,"active-value":D(i)[0].id,size:"24"},null,8,["modelValue","active-value"])]),_:1}),e("div",gs,[C(F,{modelValue:t.value,"onUpdate:modelValue":I[1]||(I[1]=b=>t.value=b)},{default:_(()=>[C(v,{inset:""},{default:_(()=>[e("div",ys,[(n(!0),f(L,null,M(D(i),b=>(n(),f("div",{key:b.id,class:"radio-item"},[e("div",{class:"radio-img",style:Ee({backgroundImage:`url(${b.showConfig.thumbnailImage})`}),onClick:T=>r(b.id)},[C(u,{name:b.id},null,8,["name"])],12,Ps),e("span",{class:we(`${t.value===b.id?"checked":""}`)},y(b.name),3)]))),128))])]),_:1})]),_:1},8,["modelValue"])])]),e("div",Cs,[C(p,{type:"primary",disabled:!(t.value||!c.value),block:"",onClick:B},{default:_(()=>[ks]),_:1},8,["disabled"])])]),_:1},8,["show"])}}});const ke=a=>(G("data-v-71051123"),a=a(),X(),a),Es={class:"page-composition-proposal"},ws={class:"head-bg"},Bs={class:"container"},xs=ke(()=>e("div",{class:"common-title"},"\u4FDD\u9669\u516C\u53F8\u7B80\u4ECB",-1)),Rs=ke(()=>e("span",{class:"poiner"},null,-1)),Ds={key:0,class:"footer-btn"},Fs=E("\u5206\u4EAB"),Ss=E("\u751F\u6210PDF"),Vs=E("\u7ACB\u5373\u6295\u4FDD"),Ns=z({setup(a){const h=g(!0),w=Be(),P=xe(),{isShare:i,id:t,themeId:c}=w.query,r=g(),B=g(""),o=g(""),s=g({}),A=g([]);g();const[I,V]=he(),[R,u]=he(),v=g(""),F=g([]),p=g(),x=g("share"),b=()=>{h.value=!h.value},T=d=>d===1,Y=Ae(()=>!!A.value.filter(l=>l.authStatus===1&&l.insureMethod===1).length);ee(()=>r.value,d=>{const{gender:l,name:k}=d;T(l)?o.value=`${k||""}\u5148\u751F\u7684\u8BA1\u5212\u4E66`:o.value=`${k||""}\u5973\u58EB\u7684\u8BA1\u5212\u4E66`});const te=()=>{var l;const d=`${re}/proposalCover?id=${t}&isShare=1&tenantId=${B.value}`;s.value={title:`${(l=r.value)==null?void 0:l.name}\u7684\u8BA1\u5212\u4E66`,desc:"\u60A8\u7684\u8D34\u5FC3\u4FDD\u9669\u7BA1\u5BB6",link:d,imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"}},se=async()=>{try{let d=null;i?d=await Fe(`${t}?tenantId=${w.query.tenantId}`):d=await Se(t);const{code:l,data:k}=d;if(l==="10000"){const $=(k==null?void 0:k.proposalInsuredVOList[0])||{};r.value=$,B.value=k==null?void 0:k.tenantId}te()}catch{H("\u63A5\u53E3\u8BF7\u6C42\u5931\u8D25")}},oe=async()=>{const{code:d,data:l}=await Ne();d==="10000"&&(F.value=l||[])},ne=()=>{Oe({proposalId:t}).then(({code:d,data:l})=>{d==="10000"&&(A.value=l)})},Z=d=>{const{productCode:l,insurerCode:k,tenantProductCode:$}=d;$e({productCode:l,proposalId:t}).then(({code:K,data:j,message:N})=>{K==="10000"&&(j?Ue({insurerCode:k,productCode:$,proposalId:t}).then(({code:O,data:q})=>{O==="10000"&&(window.location.href=q)}):H(N))})},ae=()=>{var d,l;((d=A.value)==null?void 0:d.length)===1?Z((l=A.value)==null?void 0:l[0]):V(!0)},ue=()=>{x.value="share",F.value.length?u(!0):p.value.handleShare()},W=d=>{if(x.value="pdf",!t){H("PDF\u751F\u6210\u5931\u8D25");return}H.loading({message:"PDF\u751F\u6210\u4E2D...",forbidClick:!0}),Ve({id:t,themeHistoryId:d}).then(l=>{const{code:k,message:$}=l;k==="10000"&&(H.clear(),$?P.push(`/pdfViewer?url=${encodeURIComponent($)}&title=${o.value}`):H("\u8BA1\u5212\u4E66\u4E3A\u7A7A"))})},le=async d=>{if(!d)u(!1),x.value==="pdf"?W():(s.value.link=`${re}/proposalCover?id=${t}&isShare=1&tenantId=${B.value}`,p.value.handleShare());else{const{code:l,data:k}=await Le({themeId:d,proposalId:t});l==="10000"&&(u(!1),x.value==="pdf"?W(k):(s.value.link=`${re}/proposalCover?id=${t}&isShare=1&tenantId=${B.value}&themeId=${k}`,p.value.handleShare()))}},ie=()=>{x.value="pdf",F.value.length?u(!0):W()};return Re(()=>{w.query.token&&new Me({source:"localStorage"}).set("token",w.query.token),i||(ne(),oe()),se()}),(d,l)=>{const k=m("van-collapse-item"),$=m("van-collapse"),K=m("van-button"),j=m("ProPageWrap");return n(),S(j,null,{default:_(()=>[e("div",Es,[e("div",ws,y(o.value),1),C(ut,{info:r.value},null,8,["info"]),e("div",{class:"switch-btn",onClick:b},y(h.value?"\u6309\u8D23\u4EFB\u663E\u793A":"\u6309\u9669\u79CD\u663E\u793A"),1),h.value?(n(),S(Jt,{key:0,info:r.value},null,8,["info"])):(n(),S(us,{key:1,info:r.value},null,8,["info"])),C(qt,{info:r.value},null,8,["info"]),e("div",Bs,[xs,C($,{modelValue:v.value,"onUpdate:modelValue":l[0]||(l[0]=N=>v.value=N),accordion:"","is-link":!1,border:!1,size:"middle"},{default:_(()=>{var N;return[(n(!0),f(L,null,M((N=r.value)==null?void 0:N.insurerInfoVOList,(O,q)=>(n(),S(k,{key:q,name:q,"value-class":"price"},{title:_(()=>[e("div",null,[Rs,E(" "+y(O==null?void 0:O.insurerName),1)])]),default:_(()=>[E(" "+y(O.insurerDesc),1)]),_:2},1032,["name"]))),128))]}),_:1},8,["modelValue"])])]),D(i)?Q("",!0):(n(),f("div",Ds,[C(Qe,{ref_key:"shareButtonRef",ref:p,title:s.value.title,desc:s.value.desc,link:s.value.link,"img-url":s.value.imgUrl},{default:_(()=>[C(K,{type:"primary",class:"share-btn",onClick:l[1]||(l[1]=De(()=>ue(),["stop"]))},{default:_(()=>[Fs]),_:1})]),_:1},8,["title","desc","link","img-url"]),C(K,{plain:"",type:"primary",class:"btn",onClick:ie},{default:_(()=>[Ss]),_:1}),D(Y)?(n(),S(K,{key:0,type:"primary",class:"btn",onClick:ae},{default:_(()=>[Vs]),_:1})):Q("",!0)])),D(I)?(n(),S(ms,{key:1,"is-show":D(I),"data-source":A.value,onFinished:Z,onClose:l[2]||(l[2]=N=>D(V)(!1))},null,8,["is-show","data-source"])):Q("",!0),(n(),S(Is,{key:+D(R),show:D(R),"onUpdate:show":l[3]||(l[3]=N=>me(R)?R.value=N:null),"theme-list":F.value,onSubmit:le},null,8,["show","theme-list"]))]),_:1})}}});var Qs=J(Ns,[["__scopeId","data-v-71051123"]]);export{Qs as default};
