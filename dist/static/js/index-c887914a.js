var Re=Object.defineProperty;var be=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var ye=(e,t,o)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,T=(e,t)=>{for(var o in t||(t={}))ke.call(t,o)&&ye(e,o,t[o]);if(be)for(var o of be(t))Ee.call(t,o)&&ye(e,o,t[o]);return e};import{g as Y,E,X as L,j as c,n as _,z as s,t as N,J as f,A as Q,d as Ie,k as M,C,a1 as X,a2 as z,r as O,p as w,m as P,F as V,G as q,l as Be,al as De,x as xe,h as Ce,V as Fe,w as G,Q as Oe,aj as Se,T as W}from"./vendor-488135dd.js";import{a as Ne,b as Me,g as Ve}from"./proposalList-4f00f9de.js";import{_ as J,A as we,B as Pe,C as Ke,S as Ue,O as We}from"./index-b9f7bebb.js";import{P as qe}from"./index-2fdc57ee.js";import{_ as Qe}from"./index-8b986959.js";var Ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAM1BMVEUAAAAHe/8JfP8HfP8ghf8IfP8Jfv8SgP8Lff8Iev8Kf/8Nf/8Ie/8KfP8Mff8Iff8Ke/9WxKgsAAAAEXRSTlMATTpGCEIdDS0kGBI+NCogMWRIF20AAADeSURBVDjL3ZOxDgMhDENdCOGAg+P/v7aI4oalQ3VT+6YoAaPYAkB2PtQII9bgXcagPSYKoq9GA/JjEXmLjQzHsq1ZY8PBWzmxwx6BZV2zykZAZ5nWLLHRIe9ThEoC5PniGW29c742FxQ9mmJH26GCf0HHrq7AKG54MTfutJMk2gn9mK1aXMeaHbezNYlrzS57RJboCXIuSQHKVHWWl7ip+No4p1SwU1LK+DFEPjWSH5vu++QwXEmb7w2kMRezttAUM/92tn3N+hfZmqSJeuE3rVu2dfvI5dKInahXAfAESeEGZRES0sEAAAAASUVORK5CYII=",Le="/static/assets/male.099176e3.png",He="/static/assets/female.d4f701ab.png";const je=e=>(X("data-v-474db3f9"),e=e(),z(),e),Te={class:"container head-cover"},Ge={class:"info-detail"},Xe={class:"name"},ze={class:"img"},Je={key:0,src:Le},Ze={key:1,src:He},$e={clase:"p1"},et={class:"p2"},tt={class:"fe"},st=C(" \u9996\u5E74\u4FDD\u8D39\uFF1A "),at=je(()=>s("div",{class:"line"},null,-1)),ot={class:"tp"},nt=Y({props:{info:{type:Object,default:()=>{}}},setup(e){const t=e,o=[{title:"\u9669\u79CD\u540D\u79F0",dataIndex:"riskName",width:180},{title:"\u4FDD\u989D",dataIndex:"amount"},{title:"\u4FDD\u969C\u671F\u95F4",dataIndex:"coveragePeriod",width:110},{title:"\u7F34\u8D39\u671F\u95F4",dataIndex:"chargePeriod",width:110},{title:"\u4FDD\u8D39",dataIndex:"premium",width:120}],r=E([]),d={1:"\u7537",2:"\u5973"},n=i=>i===1,A=i=>{const h=i.split("_");if(i==="to_life")return"\u4FDD\u7EC8\u751F";switch(h[0]){case"year":return`${h[1]}\u5E74`;case"month":return`${h[1]}\u6708`;case"day":return`${h[1]}\u5929`;case"to":return`\u4FDD\u81F3${h[1]}\u5C81`;default:return""}},g=i=>{const h=i.split("_");switch(h[0]){case"year":return`${h[1]}\u5E74\u4EA4`;case"month":return`${h[1]}\u6708\u4EA4`;case"to":return`\u4EA4\u81F3${h[1]}\u5C81`;case"single":return"\u8DB8\u7F34";default:return""}},R=i=>{const h=[];i==null||i.forEach(b=>{const{riskName:D,amount:v,coveragePeriod:m,chargePeriod:a,premium:u}=b;h.push({riskName:D,amount:v,coveragePeriod:A(m),chargePeriod:g(a),premium:u})}),r.value=h};return L(()=>t.info,i=>{R(i==null?void 0:i.proposalProductRiskVOList)},{deep:!0,immediate:!0}),(i,h)=>{var b,D,v,m,a,u;return c(),_("div",Te,[s("div",Ge,[s("div",Xe,[s("div",ze,[n((b=t.info)==null?void 0:b.gender)?(c(),_("img",Je)):N("",!0),n((D=t.info)==null?void 0:D.gender)?N("",!0):(c(),_("img",Ze))]),s("div",null,[s("p",$e,f((v=t.info)==null?void 0:v.name),1),s("p",et,f(d[(m=t.info)==null?void 0:m.gender])+"\uFF0C"+f(Q(Ie)().diff((a=e.info)==null?void 0:a.birthday,"y"))+"\u5C81",1)])]),s("div",tt,[st,s("span",null,"\xA5"+f(Q(we)((u=t.info)==null?void 0:u.totalPremium)),1)])]),at,s("div",ot,[r.value.length>0?(c(),M(qe,{key:0,columns:o,class:"table","data-source":r.value},null,8,["data-source"])):N("",!0)])])}}});var it=J(nt,[["__scopeId","data-v-474db3f9"]]),H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAACJVBMVEUAAADr+P/g///////V///d7v/y+//i8v/L6f/K4//c7f/s9//H5P/0+v/u9v/L4/+42v/w9//e7v/0+v/L4/+72//K4/+93P/1+f/p8//b7P/v9/+/3f/S6f/2+//d7f/Q5//0/P/h8f/G4/+/4//k8v/R6P/k9v////++3f+72v/i8f/1+v/b7f/Q5//g7//P5v+32f/y+f/i8P+42v+32//w+P/d7f/A3v/J5P+93f+73f+63v/I4v/v9//i8f/b7f/P5f+42v/1+v/t9//k8P/d7f/1+//b7f/e7//b7P/g7v+32f/w9//2+v/f7v/O5P+52v+93f+72//u9v/j8P/Q5v/M5f/k8P/s9v/l8v/2+//w+P/b7f/R5v/e7v/P5v+52v/w9//P5v+32f/w9//h8f/k8f/g8f/I4f/M4/+62//M5P/p9P/S5/+12P/P5/+52f/3/P/k8f/b7P/q9P/L4/+93P/W7P/p9P+12v/V5//N6f/I5//2+//1+v/K4//I4v+/3f+93f/I4v+22f/w9//u9f/2+//b6/+/3f/I4f/t9v/J4//1+v/e7//Q5/+22v/0+//c7v/R6P+22P/3/P/w9v+31/+42/+52f/N5P/u9v/f7v/d7f/L4/+82/+22P/O5f/y+P+62v+42f/v9//b7P/J4v/0+f/h7/+93P/x9//g7//1+v/j8P/c7P/H4f/z+P/Q5v+32f/P5v++3f/+uQMOAAAAm3RSTlMAEQQCBiMjGQz1tD0y6ubJxLu5tqKimZmIiId9eGhHRzkuLiASDgsHAffz5+Pg4N+/v7Krp2pdXVlAOyoj/fn5+fj49fX19e/v6urm4uHb1tHRy8fExMTEu7Kyq6urp5eUlI+OjoSEfX15d3NybWFhX19eXldOSUk7ODcrKBX5+ffr6+no29rTwMC2tammnIqIiHV1cHBkVkAyKOPy81wAAAM+SURBVEjH7Zb3UxNREMdfEkKT3qsCoffeLaAIioIFbKgUBQtgBQUEe++95RLuUglBCBD8+9x3t+8uMTOOM/zEDPtT5vt2831lP5sQQrZGhx48nU6UyKgo2Re1zUPIOncoKPyyWhHUKUfzD58PJBAJDofZxu2oltdu7vxlMBrtSbKgLTbp9bNz4YFMCDzCW6xW64FG8F50mBdsHLfHH9f8W+YNBiPUM3/NMZNYPhfHyuOdPNS73REaEg3l4M5xibiWuDQvutuDUUhbFctn57ZnS0L2b57nrRa3IEyRUIdjZcEG9ZGYfWIJ3A1Gl30/CqlQbqLly2mSUO90Oi2we0GoIoWLK+AO5Scx+9Q8uBtcRnsRCldW1/Ri9XKIJISAO5QLgnCV9ODZuWTMvgDu4ubPoHCHbT7ITxL88qSzC0IDSb8HZ1/guDAVZqsKxLO7dmUQjLNYfokJKU5wtwhCJXy+sXsFNh+2hbDY0k7d99bIgqpUT28+Ri0/eyzPw8OVZYovlRBZngzeSvrF4KgkrYeQey3meNwt4hG34yNir+eSzdjAsa53h66jPe/ZdQU+XWfy7Troedp16Xcp7749b/9XzyPv0PM9yLtCHPLuRZzJmzjGe8N6eQ9F3pVpg7x7TRu997RhvFeRaAfl3XfWuZRZZ/KZdci7MEUnLeVdmbTaFnT3mLT6vyYtL/IuwKQlCeBu/o85P+s153k4O8z59f3KbMYGjqzqgcFxtYegHh96V5PlmRIy0peq9RQaq/qHf0jToYPy3uWvNFk37bqiCVnw66PI3R9RqofzgHdrPwAc0Crx/iwHl3I6Jd7bAljye+S9lgm1yPsHQt4y3kdxbZTx3ouCbg15f6BBhh4y3nWkg/H+GrMrGO+dKIzJvE9LQoPMey1pZbx3YXY3470Nhc8mVl4nCXVOxvsX8hx55wYwu5e5vyCYvYq8L2dKQqYTeRe+k6/U3Qzuk5g9yf5ZpbK7LF6T3F8RjJdQT8/+BK67HM4O7oOExZB088GyMNEkXvxj+SkCHtGrczfX03v8WGi2Pf1GlBgrMRjbP2kUYbq0SR/0ZkYRZirzLc1lP9m3qYh3qNBI6RydxlvQ6MSh/wcEiQ5vBU6rowAAAABJRU5ErkJggg==",ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAnhP8Nb/8Nbv8Nbv8OcP8Ob/8Ob/8Ob/8Nb/8PcP8Obv8Obv8Nb/8NcP8Pb/8PcP8TdP8Nb/8NcP8Obv8Nbv8Nb/8Obv8Ob/8OcP8Rb/8Ocf8Ncv8Pcf8Wb/8VgP8QcP8Nbv+quNhCAAAAIXRSTlMABvixlIDwb92IMezNnnNURBvRY/Hn0rm1Wzw2JiIXDFCHpR0hAAAB8UlEQVRYw6TU567CMAwF4JNxO+mibDrw+7/kbdxIVHSn3w+CKkiOrTpYEpWhOgexlHFwVmEZwUXhK49+eMovsIt43mnG/SmwVZteacE1bbelSWP6Ch6JDkOdPAL6ilOBVa8bWRflR2JwQOSrC1m311ocTT2pMoERkSlJPb0Yqj7ZbXSBGYW2W51qzMo9e1qDBY1N7eWYkcn+qDdWvPvgMsOkklgisEokxMrJPMR8bOITm8iUy6m61/opR7+v+XlQYbMq4JPrn6JP/LTCDhWffRIY0mTk2CUnQ2PgNerzjo6/BoXxfCXYLeG5+xaX2mL3sq1NYbV8b7zh4M23SjsMpOFEDyIJcx/KBk4aae5MAeNpAx2I9IRxN4EKOCpMpDt/o46CM0WdAvatyuAs43fZ7ngRcCYutiLProdq84BoNGVOExeh7BdnNkqJ0CwCBwjqhFxhgEMC7vK5+3zgkAcRnXm7BIckXFQ8HrTP34rPeNxiSO7UUEirxn+Q/63YsQ0AMAgDwY6Ckv2HZQCQ3NwCliAB7H+EKgvVFXpKmyw0t7Sn2T1Rp2+z2fOzD8lGhA0tWyNqsbFVy5Y/O0fqQLKTzUyEsjXMaCnrx8yossfKsLMIoUKNilkq+KkoqsKxiusKICikgSCLwj4KRHk05mEdw4cLrMGD5S1fn3UAAAAASUVORK5CYII=",lt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAQcP8vgP8Nb/8Nbv8Ob/8Obv8Vc/8Ob/8Obv8Nbv8Nb/8Obv8Nb/8NcP8OcP8Pb/8PcP8Ocf8chf8Ob/8Obv8Ob/8Obv8OcP8NcP8Nbv8NcP8NcP8Pcf8Ocf8Scv8Pb/8Nbv90LxprAAAAIXRSTlMAPwX5svCSF27s5tLNmnFbVDEkCdzx37mgiYZ0YkY2HWWKqbLAAAACF0lEQVRYw6SU17LDIAxERXF3XOLe4uj/f/LGgjtDEldyHswMHpYVWoA98rGTUR0IEdSR7MYcbPB86eAHjvQ9uESRNrhBkxbnZYYQdwiHc1I8CYxVpWzdvndbWRqTQcLhEBahppJ+bizguS8r1ETsyI6LCiEzvvI7kwIV7q6pe6xl3Bk2mF0tFd93ytINv3m7wbjpMGyWlwm11QMOeCjjIoNVntoOh0O4NvVc9YNEAqdIkFjxxATVPcFJJoeqY1/9ovnyDqe5l7Tzxwoe69nz6L1jDiYqhxNcYlLJBAOGCz5cxMcFZhQWUd/hMpSCiJu9pGLXScMw3cpT/JaYgt6NrTx7AlF4WxmnV6UAxbBbGKNz2C1u0IZCpD1thMgvhspSqppoJaSDo86wWQzNtkLzYqkhc/hCgq0QyOW/95+qzF4ooyxrxYrbC/FKV+TQaC9EThyAnJzZC+mzyWGkwV5IWxmhWwb+ixDHFx1VWIKtEFHSKUf0/UWIvERQI2ILb3jMJKGXgpl48EaLiDUEXxctFXiASL+uWwDLqh5MQjwkBJN+0f5rxc5tAABhIAhiIkJaoP8mSRw5O2koAInH9u2yjdjR2GWz52cfkpUIK1rWRlRjY62WNX82jtSAZCObhQgVa1jQUtHPh9FVE0MSICkV2BlCKKjhmDXB7yQY8q5CUQXHCteVQFBKQ0kWr328iPJqzMu6XjvRhx8qv5Pz8gaE6wAAAABJRU5ErkJggg==";const S=e=>(X("data-v-bcc09638"),e=e(),z(),e),ct={class:"container"},rt=S(()=>s("div",{class:"common-title"},"\u5229\u76CA\u6F14\u793A",-1)),dt={class:"benefit"},vt={class:"benefit-title"},pt=S(()=>s("div",{class:"line"},null,-1)),ht={key:0,class:"box-title box-title-chart"},At=S(()=>s("img",{src:H,alt:""},null,-1)),ft=C(" \u4FDD\u5355\u5E74\u5EA6"),gt=C("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),mt=C("\u5C81\u65F6 "),_t=S(()=>s("img",{src:H,alt:""},null,-1)),bt={key:1},yt={class:"box"},Pt={class:"box-title"},Ct=S(()=>s("img",{src:H,alt:""},null,-1)),wt=C(" \u4FDD\u5355\u5E74\u5EA6"),Rt=C("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),kt=C("\u5C81\u65F6 "),Et=S(()=>s("img",{src:H,alt:""},null,-1)),It={class:"box-price"},Bt={class:"text1"},Dt={class:"text2"},xt={key:2,style:{width:"100%"}},Ft={class:"slider"},Ot=S(()=>s("img",{src:ut,alt:""},null,-1)),St=[Ot],Nt={style:{flex:"1",margin:"0px 5px"}},Mt={class:"custom-button"},Vt=S(()=>s("img",{src:lt,alt:""},null,-1)),Kt=[Vt],Ut=S(()=>s("p",{class:"slider-dec"},"\u62D6\u52A8\u6309\u94AE\u67E5\u770B\u4E0D\u540C\u5E74\u9F84\u4FDD\u969C",-1)),Wt={class:"btn-two"},qt=C("\u56FE\u8868\u5C55\u793A"),Qt=C("\u8D8B\u52BF\u5C55\u793A"),Yt=Y({props:{info:{type:Object,default:()=>{}}},setup(e){const t=e,o=E(0),r=E(0),d=E(0),n=E(),A=E(0),g=E(!0),R=(a,u)=>{const x=[],F=[];for(let I=a,y=0;I<=u;I++,y++)x.push(I.toString()),F.push(y+1);return{a:x,year:F}},i=()=>{var I,y,B;const a=(y=(I=t.info)==null?void 0:I.benefitRiskResultVOList)==null?void 0:y[o.value],{a:u,year:x}=R(r.value,d.value),F={index:u.indexOf(A.value.toString()),age:u,year:x,result:(B=a==null?void 0:a.benefitRiskItemResultVOList)==null?void 0:B[0]};n.value=F},h=a=>{const u=a==null?void 0:a.benefitRiskResultVOList[o.value];r.value=u.ageBegin+1,A.value=u.ageBegin+1,d.value=u.ageEnd},b=()=>{A.value>d.value-1||(A.value+=1,i())},D=()=>{A.value>r.value&&(A.value-=1,i())},v=a=>{o.value=a.name,i()},m=a=>{a==="1"?g.value=!0:g.value=!1};return L(()=>t.info,a=>{a&&(h(a),i())},{deep:!0,immediate:!0}),L(A,()=>{i()}),(a,u)=>{const x=O("van-slider"),F=O("van-button"),I=O("van-tab"),y=O("van-tabs");return c(),_("div",ct,[rt,w(y,{active:o.value,"title-active-color":"#0D6EFE","title-inactive-color":"#393D46",shrink:"",onClickTab:v},{default:P(()=>{var B;return[(c(!0),_(V,null,q((B=t.info)==null?void 0:B.benefitRiskResultVOList,(k,K)=>(c(),M(I,{key:K,name:K,title:k.riskName},{default:P(()=>{var Z,$,ee,te,se,ae,oe,ne,ie,ue,le,ce,re,de,ve,pe;return[s("div",dt,[s("div",vt,f(k==null?void 0:k.riskName),1),pt,g.value?N("",!0):(c(),_("p",ht,[At,ft,s("span",null,f((ee=(Z=n.value)==null?void 0:Z.year)==null?void 0:ee[($=n.value)==null?void 0:$.index]),1),gt,s("span",null,f((ae=(te=n.value)==null?void 0:te.age)==null?void 0:ae[(se=n.value)==null?void 0:se.index]),1),mt,_t])),g.value?(c(),_("div",bt,[s("div",yt,[s("p",Pt,[Ct,wt,s("span",null,f((ie=(oe=n.value)==null?void 0:oe.year)==null?void 0:ie[(ne=n.value)==null?void 0:ne.index]),1),Rt,s("span",null,f((ce=(ue=n.value)==null?void 0:ue.age)==null?void 0:ce[(le=n.value)==null?void 0:le.index]),1),kt,Et]),s("div",It,[(c(!0),_(V,null,q((de=(re=n.value)==null?void 0:re.result)==null?void 0:de.headers,(U,he)=>{var Ae,fe,ge,me,_e;return c(),_("div",{key:he,style:{width:"33%"}},[s("p",Bt,f(Q(we)(Number((_e=(me=(fe=(Ae=n.value)==null?void 0:Ae.result)==null?void 0:fe.dataList)==null?void 0:me[(ge=n.value)==null?void 0:ge.index])==null?void 0:_e[he]))),1),s("p",Dt,f(U)+"(\u5143\uFF09",1)])}),128))])])])):(c(),_("div",xt,[w(Qe,{min:r.value,max:d.value,current:A.value,data:(pe=(ve=n.value)==null?void 0:ve.result)==null?void 0:pe.benefitRiskItemList},null,8,["min","max","current","data"])])),s("div",Ft,[s("div",{class:"add lf",onClick:D},St),s("div",Nt,[r.value?(c(),M(x,{key:0,modelValue:A.value,"onUpdate:modelValue":u[0]||(u[0]=U=>A.value=U),min:r.value,max:d.value,"bar-height":"8px"},{button:P(()=>[s("div",Mt,f(A.value)+" \u5C81",1)]),_:1},8,["modelValue","min","max"])):N("",!0)]),s("div",{class:"add rg",onClick:b},Kt)]),Ut,s("div",Wt,[w(F,{round:"",plain:!g.value,type:"primary",class:"btn",onClick:u[1]||(u[1]=U=>m("1"))},{default:P(()=>[qt]),_:1},8,["plain"]),w(F,{round:"",plain:g.value,type:"primary",class:"btn",onClick:u[2]||(u[2]=U=>m("2"))},{default:P(()=>[Qt]),_:1},8,["plain"])])])]}),_:2},1032,["name","title"]))),128))]}),_:1},8,["active"])])}}});var Lt=J(Yt,[["__scopeId","data-v-bcc09638"]]);const l=(e,t)=>{window.AppJSInterface?window.AppJSInterface[e](JSON.stringify(t)):window.webkit.messageHandlers&&window.webkit.messageHandlers[e].postMessage(JSON.stringify(t))};function p(e){console.log(e)}const Ht={appReady(){return new Promise((e,t)=>{const o=setInterval(()=>{window.AppJSInterface||window.webkit&&window.webkit.messageHandlers?(clearInterval(o),e("success")):t("Jsbridge\u521D\u59CB\u5316\u5931\u8D25\uFF1A\u627E\u4E0D\u5230window.AppJSInterface\u6216\u8005window.webkit.messageHandlers")},100)})},showNavMask(e){return this.appReady().then(()=>{l("showNavShadow",{visible:e})}).catch(t=>{})},getNativeCookies(e){return this.appReady().then(()=>{l("getCookies",{cbname:e})}).catch(t=>new Error("\u8C03\u7528\u5931\u8D25"))},shareConfig(e){this.appReady().then(()=>{let t;e.type==="image"?t={type:"image",link:e.link,cbname:e.cbname}:t={img:e.img,title:e.title,desc:e.desc,link:e.link,cbname:e.cbname},l("configWXShare",t)}).catch(t=>{p(t)})},callLogout(e){return this.appReady().then(()=>{l("logout",{cbname:e})}).catch(t=>{p(t)})},importCustomersFromNative(e){return this.appReady().then(()=>{l("importCustomers",{cbname:e})}).catch(t=>{p(t)})},callImage(e){this.appReady().then(()=>{l("choosePhoto",{cbname:e,limit:"30M"})}).catch(t=>{p(t)})},openPDFWithUrl(e,t){this.appReady().then(()=>{l("openPDFDoc",{title:e,link:t})}).catch(o=>{p(o)})},openWebView(e,t,o="true"){this.appReady().then(()=>{l("openWebView",{title:e,link:t,showProgress:o})}).catch(r=>{p(r)})},openNewWebForShare({link:e,title:t,desc:o,img:r}){this.appReady().then(()=>{l("openNewWebForShare",{link:e,title:t,desc:o,img:r})}).catch(d=>{p(d)})},goback(){this.appReady().then(()=>{l("goback","")}).catch(e=>{p(e)})},closeWebView(e){let t={cbname:""};Be.exports.isEmpty(t)||(t=T(T({},t),e)),this.appReady().then(()=>{l("closeWebview",t)}).catch(o=>{p(o)})},downloadImg(e){this.appReady().then(()=>{l("downloadImg",e)}).catch(t=>{p(t)})},jumpProduct(e){this.appReady().then(()=>{l("jumpProduct",e)}).catch(t=>{p(t)})},jumpSignResult(){this.appReady().then(()=>{l("jumpSignResult","")}).catch(e=>{p(e)})},downloadVideo(e){this.appReady().then(()=>{l("downloadVideo",e)}).catch(t=>{p(t)})},downloadImgs(e){this.appReady().then(()=>{l("downloadImgs",e)}).catch(t=>{p(t)})},openWeiXin(){this.appReady().then(()=>{l("openWeiXin","")}).catch(e=>{p(e)})},previewImgs(e){this.appReady().then(()=>{l("previewImgs",e)}).catch(t=>{p(t)})},copyToClipboard(e){this.appReady().then(()=>{l("copyToClipboard",e)}).catch(t=>{p(t)})},shareWXForMoments(e){this.appReady().then(()=>{l("shareWXForMoments",e)}).catch(t=>{p(t)})},previewVideo(e){this.appReady().then(()=>{l("previewVideo",e)}).catch(t=>{p(t)})},getContacts(e){return this.appReady().then(()=>{l("na_getContacts",{cbname:e})}).catch(t=>{p(t)})},getLocation(e){this.appReady().then(()=>l("na_startLocation",{param:e})).catch(t=>{p(t)})}};var jt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAADqCAMAAABUZB2/AAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMAA0IJ+AYTHPIkINCmF4IN/Hx1SCgLw2OhmzUrGdZVOatMD8q2lnDs5t2xjIhaUC/iaZExvGxePgkCneYAAAXCSURBVHja7dzZdtowEAbgX17wim1sY/Z93wkQmPd/stKmaWkCwT3H8vgi3yVXOkiWRqORwO5lB3Zr6oGZ7hIp4OWfiCgCK8Ohqy04tfb00waMFJN+qYHPRqM3r2AT0rsQTMSB/qiAh7qkvzywKCV0YwUOdoduTcCgOad/NJC/yKR/uchdLaAP+sibR5+MkS9Rp89OyJU/pjsS5Knt0D0OchTv6a4O8nOZ0X0L5Kar0QNz5GUa0CMz5GRFj2nIhd6nryAPpYS+pEM+u0NfG0K63ZyeKEO2yKRnbEh21uipGHJVKIUjZBINSqMHiapjSkWBPOURpRNBGmtBKW0hS29GaW0gyVaj1GqQ4zWg9F4gxZpSkJsb0F1KQXJuQG12w8PSMSklDxKVjtvptTEzemKFHPitweuqv6AbXLmBC93gyg2IGb0bnxYBU26gf7sDFrZS89xknndu4ExvZmX8pV7Hyxn5KdMVe0J9RD8dwMqjK0cHqyYRmTF4iRlRDdzq1Ae7zb4EdqULvn379u1b8dWcM9i59AJ2ulIGN1+A32rWBbsxfwHRlcXfH3EBYjokgQJuYmz64KeD3aYABX6qRm1wK02W+HalNwZgF5EDdkaFPxlQCMqpAKv4hDyw888WuFVRAPUF/yqODvH3BkQT7Hoq2A21Gf/IbI1OKAD+7rCn/DtQVKgOdsqyADOVTDrQ2vl46rBqQwofcAIDCSmYHo74iq+RDRlczUASHDFxLCQ0gGLhseYU2es10Q+2KOv4pVlRsQgueKQECbo0gt3GrWrDEaiJ+03WDsiaAbXjCXwk8ELug0rUNTL2oikQuEfp7HCXXUbG1lTBAwLxyPjcNgsZU4ALHnM/94jYUxOZCp+E7UNP/fRTw0G2zloX/0rx7wtkqSxQxhNTauDWsb5DlsQoKeMZa1/5MEpWyFI83/v4X8bKQKaGLTznd2sSZ+zVWSCFHS1u2mAuBTIUB5qBFITr4Y+BuUSWxCbE/yvbyJBAWkqtjd82TWRq6kRIJ6HLnxFBMbKU0BbphPUW3vjrPjKlD3T2PZeK1LaKjl/qSYxM1fcKUtKoip/8uWYjUw4dkY5aH+ONP8A7rgO0KPMmCIG0jpcqrqp7ipCtSHORkks1XInXEzK2odSNqDgtAIZA9lQV/0N3HBuZEzrS6TZ6AOxFR0XWzqkzLUuqAQJVC5kbBGkb0aq0Uep0IYEQQHohJZBCRyr1cQvASxsyjIMWUtBNMmoTATlcbYs0St2SSQPIYVSRhg2BXghpjDKeatGo04Y8r8EET3VNjULIE2srPDMcVOMXyNTGM9V90INkamOCL1iGmNMWkjU108BD3aCveiMB2bY9WEPcE0/RNhsCuah25hY+UoU+ox1K0biHPBhJRxihgb8E1qaC9cQGxhQiHwY8mqDpXRDXmgjnNXjvec1hpYq8KG6ECnmY0gohHdA28MsOOVM8BVFjc5t9iIpwylUzp+BXYj/41OsFOI5/pQ7YDdcRuBWgPAOWtuSvvN2aDfArs9f/6m4BPs9pEYoLq2v+soQilMVvi7B6bsxX8Cuzz1PN0RHslrQGu2qFPZSJ+wbYjWkCdu3GEMysAsyVIgn467CFt2fvjFIBKizF6MRfYRnPFwW4x1Riv0OknviDKYRFCCtFpQVm5Sl7HAOMixBERB32e20W+5YPUDt79kGJcuKwrxk+BPuAsGch2L0U4YkbKOyBzGDJ/3mKRRFeTDD4L/dVChDiK2QWYESs2LMhahFu3jboAHaDOfvaGZf4XyooLRY2uLVHI/Y/og2dfd8ZaQVYMTyqgJkO8O873T7/tVvbZH+78cpiP/C0R+yTdUHej1TX7MF1WIBJygqIPTkGbNi3fMMD/yQFl1ywsxL2OKZbgEO+nWay/w/QG+yHW+oGYE+X9vlDKaA7Zw8hFJ//XKmpOfxHOnaH/cOoHvlfsBRLjf8tNNGYFaGMrgC1CAXwA5uZT4G1yHw0AAAAAElFTkSuQmCC";const Tt={class:"com-za-share-overlay"},Gt={class:"block"},Xt=["src"],zt=Y({props:{show:{type:Boolean,default:!1},text:{type:String,default:"\u70B9\u51FB\u5DE6\u4E0A\u89D2\xB7\xB7\xB7\u8F6C\u53D1\u5206\u4EAB~"}},emits:["on-close"],setup(e,{emit:t}){const o=()=>{t("on-close",!1)};return(r,d)=>{const n=O("van-overlay");return c(),_("div",Tt,[w(n,{show:e.show,"z-index":"999999999",onClick:o},{default:P(()=>[s("div",{class:"wrapper",onClick:d[0]||(d[0]=De(()=>{},["stop"]))},[s("div",Gt,f(e.text),1),s("img",{src:Q(jt),alt:""},null,8,Xt)])]),_:1},8,["show"])])}}}),Jt=Y({props:{title:{type:String,default:""},desc:{type:String,default:""},link:{type:String,default:""},img:{type:String,default:""},imgUrl:{type:String,default:""}},setup(e){const t=e,{title:o,desc:r,link:d,img:n,imgUrl:A}=xe(t),g=E(!1),R=()=>{g.value=!1},i=b=>{if(console.log("\u5206\u4EAB\u53C2\u6570",t),Pe()){console.log("\u5728\u5FAE\u4FE1\u5185\uFF0C\u5F39\u8D77\u906E\u7F69"),g.value=!0;return}Ke()&&(console.log("\u5728app\u5185"),Ht.shareConfig({title:o,desc:r,link:d,img:n}))},h=()=>{Pe()&&G.ready(()=>{const b={title:o,desc:r,link:d,imgUrl:A,success:()=>{console.log("\u5206\u4EAB\u6210\u529F")}};console.log("setWechatConfig\u5206\u4EAB\u53C2\u6570: ",b),G.updateAppMessageShareData(b),G.updateTimelineShareData(b)})};return Ce(()=>{h()}),(b,D)=>(c(),_(V,null,[s("span",{onClick:i},[Fe(b.$slots,"default")]),w(zt,{show:g.value,onOnClose:R},null,8,["show"])],64))}});const j=e=>(X("data-v-a6a5a40a"),e=e(),z(),e),Zt={class:"page-composition-proposal"},$t={class:"head-bg"},es={class:"container"},ts={class:"common-title"},ss={class:"title"},as=j(()=>s("img",{src:Ye,class:"ig"},null,-1)),os={class:"product-detail"},ns=j(()=>s("div",{class:"line2"},null,-1)),is={class:"container"},us=j(()=>s("div",{class:"common-title"},"\u4FDD\u9669\u516C\u53F8\u7B80\u4ECB",-1)),ls=j(()=>s("span",{class:"poiner"},null,-1)),cs={key:0,class:"footer-btn"},rs=C("\u751F\u6210PDF"),ds=C("\u5206\u4EAB\u8BA1\u5212\u4E66"),vs=Y({setup(e){const t=Oe(),o=Se(),{isShare:r,id:d}=t.query,n=E(),A=E(""),g=E(""),R=E({}),i=v=>v===1;L(()=>n.value,v=>{const{gender:m,name:a}=v;i(m)?g.value=`${a||""}\u5148\u751F\u7684\u8BA1\u5212\u4E66`:g.value=`${a||""}\u5973\u58EB\u7684\u8BA1\u5212\u4E66`});const h=()=>{var m;const v=`${We}/compositionProposal?id=${d}&isShare=1&tenantId=${A.value}`;R.value={title:`${(m=n.value)==null?void 0:m.name}\u7684\u8BA1\u5212\u4E66`,desc:"\u60A8\u7684\u8D34\u5FC3\u4FDD\u9669\u7BA1\u5BB6",link:v,imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"}},b=async()=>{try{let v=null;r?v=await Ne(`${d}?tenantId=${t.query.tenantId}`):v=await Me(d);const{code:m,data:a}=v;if(m==="10000"){const u=(a==null?void 0:a.proposalInsuredVOList[0])||{};n.value=u,A.value=a==null?void 0:a.tenantId}h()}catch{W("\u63A5\u53E3\u8BF7\u6C42\u5931\u8D25")}};Ce(()=>{t.query.token&&new Ue({source:"localStorage"}).set("token",t.query.token),b()});const D=()=>{if(!d){W("PDF\u751F\u6210\u5931\u8D25");return}W.loading({message:"PDF\u751F\u6210\u4E2D...",forbidClick:!0}),Ve(d.toString()).then(v=>{const{code:m,message:a}=v;m==="10000"&&(W.clear(),console.log(a),a?o.push(`/pdfViewer?url=${encodeURIComponent(a)}&title=${g.value}`):W("\u8BA1\u5212\u4E66\u4E3A\u7A7A"))})};return(v,m)=>{const a=O("van-collapse-item"),u=O("van-collapse"),x=O("van-button"),F=O("ProPageWrap");return c(),M(F,null,{default:P(()=>{var I;return[s("div",Zt,[s("div",$t,f(g.value),1),w(it,{info:n.value},null,8,["info"]),s("div",es,[(c(!0),_(V,null,q((I=n.value)==null?void 0:I.liabilityByRiskVOList,(y,B)=>(c(),_("div",{key:B},[s("div",ts,[s("div",ss,[as,C(" "+f(y.riskName),1)])]),s("div",os,[w(u,{modelValue:y.riskName1,"onUpdate:modelValue":k=>y.riskName1=k,accordion:"","is-link":!1,border:!1,size:"middle"},{default:P(()=>[(c(!0),_(V,null,q(y.proposalRiskLiabilityVOList,(k,K)=>(c(),M(a,{key:K,title:k.liabilityName,name:K,"value-class":"price",value:k.liabilityIndemnityContent},{default:P(()=>[C(f(k.liabilityDesc),1)]),_:2},1032,["title","name","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),ns]))),128))]),w(Lt,{info:n.value},null,8,["info"]),s("div",is,[us,w(u,{accordion:"","is-link":!1,border:!1,size:"middle"},{default:P(()=>{var y;return[(c(!0),_(V,null,q((y=n.value)==null?void 0:y.insurerInfoVOList,(B,k)=>(c(),M(a,{key:k,name:"1","value-class":"price"},{title:P(()=>[s("div",null,[ls,C(" "+f(B.insurerName),1)])]),default:P(()=>[C(" "+f(B.insurerDesc),1)]),_:2},1024))),128))]}),_:1})]),Q(r)?N("",!0):(c(),_("div",cs,[w(x,{plain:"",type:"primary",class:"btn",onClick:D},{default:P(()=>[rs]),_:1}),w(Jt,{title:R.value.title,desc:R.value.desc,link:R.value.link,img:R.value.img,"img-url":R.value.imgUrl},{default:P(()=>[w(x,{type:"primary",class:"btn"},{default:P(()=>[ds]),_:1})]),_:1},8,["title","desc","link","img","img-url"])]))])]}),_:1})}}});var _s=J(vs,[["__scopeId","data-v-a6a5a40a"]]);export{_s as default};
