var Ee=Object.defineProperty,Re=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var Pe=(e,t,o)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Q=(e,t)=>{for(var o in t||(t={}))Be.call(t,o)&&Pe(e,o,t[o]);if(ye)for(var o of ye(t))Ie.call(t,o)&&Pe(e,o,t[o]);return e},J=(e,t)=>Re(e,ke(t));import{l as De,g as G,C as w,X as T,h as r,m as _,y as s,s as K,I as f,z as j,d as Fe,j as U,B as b,a1 as $,a2 as ee,r as I,n as C,k as m,F as L,E as H,ah as xe,Q as Oe,af as Ne,M as Se,T as Y,w as Z}from"./vendor-d47732e4.js";import{a as Me,b as Ve,g as Ke}from"./proposalList-51bfb5fc.js";import{_ as te,y as we,S as Ue,z as Ce,A as We,O as qe}from"./index-0127c0ca.js";import{P as Qe}from"./index-fd0d0f72.js";import{_ as Ye}from"./index-bcfa31f2.js";var Le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAM1BMVEUAAAAHe/8JfP8HfP8ghf8IfP8Jfv8SgP8Lff8Iev8Kf/8Nf/8Ie/8KfP8Mff8Iff8Ke/9WxKgsAAAAEXRSTlMATTpGCEIdDS0kGBI+NCogMWRIF20AAADeSURBVDjL3ZOxDgMhDENdCOGAg+P/v7aI4oalQ3VT+6YoAaPYAkB2PtQII9bgXcagPSYKoq9GA/JjEXmLjQzHsq1ZY8PBWzmxwx6BZV2zykZAZ5nWLLHRIe9ThEoC5PniGW29c742FxQ9mmJH26GCf0HHrq7AKG54MTfutJMk2gn9mK1aXMeaHbezNYlrzS57RJboCXIuSQHKVHWWl7ip+No4p1SwU1LK+DFEPjWSH5vu++QwXEmb7w2kMRezttAUM/92tn3N+hfZmqSJeuE3rVu2dfvI5dKInahXAfAESeEGZRES0sEAAAAASUVORK5CYII=";const l=(e,t)=>{window.AppJSInterface?window.AppJSInterface[e](JSON.stringify(t)):window.webkit.messageHandlers&&window.webkit.messageHandlers[e].postMessage(JSON.stringify(t))};function v(e){console.log(e)}const He={appReady(){return new Promise((e,t)=>{const o=setInterval(()=>{window.AppJSInterface||window.webkit&&window.webkit.messageHandlers?(clearInterval(o),e("success")):t("Jsbridge\u521D\u59CB\u5316\u5931\u8D25\uFF1A\u627E\u4E0D\u5230window.AppJSInterface\u6216\u8005window.webkit.messageHandlers")},100)})},showNavMask(e){return this.appReady().then(()=>{l("showNavShadow",{visible:e})}).catch(t=>{})},getNativeCookies(e){return this.appReady().then(()=>{l("getCookies",{cbname:e})}).catch(t=>new Error("\u8C03\u7528\u5931\u8D25"))},shareConfig(e){this.appReady().then(()=>{let t;e.type==="image"?t={type:"image",link:e.link,cbname:e.cbname}:t={img:e.img,title:e.title,desc:e.desc,link:e.link,cbname:e.cbname},l("configWXShare",t)}).catch(t=>{v(t)})},callLogout(e){return this.appReady().then(()=>{l("logout",{cbname:e})}).catch(t=>{v(t)})},importCustomersFromNative(e){return this.appReady().then(()=>{l("importCustomers",{cbname:e})}).catch(t=>{v(t)})},callImage(e){this.appReady().then(()=>{l("choosePhoto",{cbname:e,limit:"30M"})}).catch(t=>{v(t)})},openPDFWithUrl(e,t){this.appReady().then(()=>{l("openPDFDoc",{title:e,link:t})}).catch(o=>{v(o)})},openWebView(e,t,o="true"){this.appReady().then(()=>{l("openWebView",{title:e,link:t,showProgress:o})}).catch(p=>{v(p)})},openNewWebForShare({link:e,title:t,desc:o,img:p}){this.appReady().then(()=>{l("openNewWebForShare",{link:e,title:t,desc:o,img:p})}).catch(h=>{v(h)})},goback(){this.appReady().then(()=>{l("goback","")}).catch(e=>{v(e)})},closeWebView(e){let t={cbname:""};De.exports.isEmpty(t)||(t=Q(Q({},t),e)),this.appReady().then(()=>{l("closeWebview",t)}).catch(o=>{v(o)})},downloadImg(e){this.appReady().then(()=>{l("downloadImg",e)}).catch(t=>{v(t)})},jumpProduct(e){this.appReady().then(()=>{l("jumpProduct",e)}).catch(t=>{v(t)})},jumpSignResult(){this.appReady().then(()=>{l("jumpSignResult","")}).catch(e=>{v(e)})},downloadVideo(e){this.appReady().then(()=>{l("downloadVideo",e)}).catch(t=>{v(t)})},downloadImgs(e){this.appReady().then(()=>{l("downloadImgs",e)}).catch(t=>{v(t)})},openWeiXin(){this.appReady().then(()=>{l("openWeiXin","")}).catch(e=>{v(e)})},previewImgs(e){this.appReady().then(()=>{l("previewImgs",e)}).catch(t=>{v(t)})},copyToClipboard(e){this.appReady().then(()=>{l("copyToClipboard",e)}).catch(t=>{v(t)})},shareWXForMoments(e){this.appReady().then(()=>{l("shareWXForMoments",e)}).catch(t=>{v(t)})},previewVideo(e){this.appReady().then(()=>{l("previewVideo",e)}).catch(t=>{v(t)})},getContacts(e){return this.appReady().then(()=>{l("na_getContacts",{cbname:e})}).catch(t=>{v(t)})},getLocation(e){this.appReady().then(()=>l("na_startLocation",{param:e})).catch(t=>{v(t)})}};var je="/static/assets/male.099176e3.png",Te="/static/assets/female.d4f701ab.png";const Ge=e=>($("data-v-474db3f9"),e=e(),ee(),e),Xe={class:"container head-cover"},ze={class:"info-detail"},Je={class:"name"},Ze={class:"img"},$e={key:0,src:je},et={key:1,src:Te},tt={clase:"p1"},st={class:"p2"},at={class:"fe"},ot=b(" \u9996\u5E74\u4FDD\u8D39\uFF1A "),nt=Ge(()=>s("div",{class:"line"},null,-1)),it={class:"tp"},ut=G({props:{info:{type:Object,default:()=>{}}},setup(e){const t=e,o=[{title:"\u9669\u79CD\u540D\u79F0",dataIndex:"riskName",width:180},{title:"\u4FDD\u989D",dataIndex:"amount"},{title:"\u4FDD\u969C\u671F\u95F4",dataIndex:"coveragePeriod",width:110},{title:"\u7F34\u8D39\u671F\u95F4",dataIndex:"chargePeriod",width:110},{title:"\u4FDD\u8D39",dataIndex:"premium",width:120}],p=w([]),h={1:"\u7537",2:"\u5973"},n=c=>c===1,g=c=>{const A=c.split("_");if(c==="to_life")return"\u4FDD\u7EC8\u751F";switch(A[0]){case"year":return`${A[1]}\u5E74`;case"month":return`${A[1]}\u6708`;case"day":return`${A[1]}\u5929`;case"to":return`\u4FDD\u81F3${A[1]}\u5C81`;default:return""}},y=c=>{const A=c.split("_");switch(A[0]){case"year":return`${A[1]}\u5E74\u4EA4`;case"month":return`${A[1]}\u6708\u4EA4`;case"to":return`\u4EA4\u81F3${A[1]}\u5C81`;case"single":return"\u8DB8\u7F34";default:return""}},N=c=>{const A=[];c==null||c.forEach(F=>{const{riskName:x,amount:O,coveragePeriod:B,chargePeriod:i,premium:a}=F;A.push({riskName:x,amount:O,coveragePeriod:g(B),chargePeriod:y(i),premium:a})}),p.value=A};return T(()=>t.info,c=>{N(c==null?void 0:c.proposalProductRiskVOList)},{deep:!0,immediate:!0}),(c,A)=>{var F,x,O,B,i,a;return r(),_("div",Xe,[s("div",ze,[s("div",Je,[s("div",Ze,[n((F=t.info)==null?void 0:F.gender)?(r(),_("img",$e)):K("",!0),n((x=t.info)==null?void 0:x.gender)?K("",!0):(r(),_("img",et))]),s("div",null,[s("p",tt,f((O=t.info)==null?void 0:O.name),1),s("p",st,f(h[(B=t.info)==null?void 0:B.gender])+"\uFF0C"+f(j(Fe)().diff((i=e.info)==null?void 0:i.birthday,"y"))+"\u5C81",1)])]),s("div",at,[ot,s("span",null,"\xA5"+f(j(we)((a=t.info)==null?void 0:a.totalPremium)),1)])]),nt,s("div",it,[p.value.length>0?(r(),U(Qe,{key:0,columns:o,class:"table","data-source":p.value},null,8,["data-source"])):K("",!0)])])}}});var ct=te(ut,[["__scopeId","data-v-474db3f9"]]),X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAACJVBMVEUAAADr+P/g///////V///d7v/y+//i8v/L6f/K4//c7f/s9//H5P/0+v/u9v/L4/+42v/w9//e7v/0+v/L4/+72//K4/+93P/1+f/p8//b7P/v9/+/3f/S6f/2+//d7f/Q5//0/P/h8f/G4/+/4//k8v/R6P/k9v////++3f+72v/i8f/1+v/b7f/Q5//g7//P5v+32f/y+f/i8P+42v+32//w+P/d7f/A3v/J5P+93f+73f+63v/I4v/v9//i8f/b7f/P5f+42v/1+v/t9//k8P/d7f/1+//b7f/e7//b7P/g7v+32f/w9//2+v/f7v/O5P+52v+93f+72//u9v/j8P/Q5v/M5f/k8P/s9v/l8v/2+//w+P/b7f/R5v/e7v/P5v+52v/w9//P5v+32f/w9//h8f/k8f/g8f/I4f/M4/+62//M5P/p9P/S5/+12P/P5/+52f/3/P/k8f/b7P/q9P/L4/+93P/W7P/p9P+12v/V5//N6f/I5//2+//1+v/K4//I4v+/3f+93f/I4v+22f/w9//u9f/2+//b6/+/3f/I4f/t9v/J4//1+v/e7//Q5/+22v/0+//c7v/R6P+22P/3/P/w9v+31/+42/+52f/N5P/u9v/f7v/d7f/L4/+82/+22P/O5f/y+P+62v+42f/v9//b7P/J4v/0+f/h7/+93P/x9//g7//1+v/j8P/c7P/H4f/z+P/Q5v+32f/P5v++3f/+uQMOAAAAm3RSTlMAEQQCBiMjGQz1tD0y6ubJxLu5tqKimZmIiId9eGhHRzkuLiASDgsHAffz5+Pg4N+/v7Krp2pdXVlAOyoj/fn5+fj49fX19e/v6urm4uHb1tHRy8fExMTEu7Kyq6urp5eUlI+OjoSEfX15d3NybWFhX19eXldOSUk7ODcrKBX5+ffr6+no29rTwMC2tammnIqIiHV1cHBkVkAyKOPy81wAAAM+SURBVEjH7Zb3UxNREMdfEkKT3qsCoffeLaAIioIFbKgUBQtgBQUEe++95RLuUglBCBD8+9x3t+8uMTOOM/zEDPtT5vt2831lP5sQQrZGhx48nU6UyKgo2Re1zUPIOncoKPyyWhHUKUfzD58PJBAJDofZxu2oltdu7vxlMBrtSbKgLTbp9bNz4YFMCDzCW6xW64FG8F50mBdsHLfHH9f8W+YNBiPUM3/NMZNYPhfHyuOdPNS73REaEg3l4M5xibiWuDQvutuDUUhbFctn57ZnS0L2b57nrRa3IEyRUIdjZcEG9ZGYfWIJ3A1Gl30/CqlQbqLly2mSUO90Oi2we0GoIoWLK+AO5Scx+9Q8uBtcRnsRCldW1/Ri9XKIJISAO5QLgnCV9ODZuWTMvgDu4ubPoHCHbT7ITxL88qSzC0IDSb8HZ1/guDAVZqsKxLO7dmUQjLNYfokJKU5wtwhCJXy+sXsFNh+2hbDY0k7d99bIgqpUT28+Ri0/eyzPw8OVZYovlRBZngzeSvrF4KgkrYeQey3meNwt4hG34yNir+eSzdjAsa53h66jPe/ZdQU+XWfy7Troedp16Xcp7749b/9XzyPv0PM9yLtCHPLuRZzJmzjGe8N6eQ9F3pVpg7x7TRu997RhvFeRaAfl3XfWuZRZZ/KZdci7MEUnLeVdmbTaFnT3mLT6vyYtL/IuwKQlCeBu/o85P+s153k4O8z59f3KbMYGjqzqgcFxtYegHh96V5PlmRIy0peq9RQaq/qHf0jToYPy3uWvNFk37bqiCVnw66PI3R9RqofzgHdrPwAc0Crx/iwHl3I6Jd7bAljye+S9lgm1yPsHQt4y3kdxbZTx3ouCbg15f6BBhh4y3nWkg/H+GrMrGO+dKIzJvE9LQoPMey1pZbx3YXY3470Nhc8mVl4nCXVOxvsX8hx55wYwu5e5vyCYvYq8L2dKQqYTeRe+k6/U3Qzuk5g9yf5ZpbK7LF6T3F8RjJdQT8/+BK67HM4O7oOExZB088GyMNEkXvxj+SkCHtGrczfX03v8WGi2Pf1GlBgrMRjbP2kUYbq0SR/0ZkYRZirzLc1lP9m3qYh3qNBI6RydxlvQ6MSh/wcEiQ5vBU6rowAAAABJRU5ErkJggg==",lt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAnhP8Nb/8Nbv8Nbv8OcP8Ob/8Ob/8Ob/8Nb/8PcP8Obv8Obv8Nb/8NcP8Pb/8PcP8TdP8Nb/8NcP8Obv8Nbv8Nb/8Obv8Ob/8OcP8Rb/8Ocf8Ncv8Pcf8Wb/8VgP8QcP8Nbv+quNhCAAAAIXRSTlMABvixlIDwb92IMezNnnNURBvRY/Hn0rm1Wzw2JiIXDFCHpR0hAAAB8UlEQVRYw6TU567CMAwF4JNxO+mibDrw+7/kbdxIVHSn3w+CKkiOrTpYEpWhOgexlHFwVmEZwUXhK49+eMovsIt43mnG/SmwVZteacE1bbelSWP6Ch6JDkOdPAL6ilOBVa8bWRflR2JwQOSrC1m311ocTT2pMoERkSlJPb0Yqj7ZbXSBGYW2W51qzMo9e1qDBY1N7eWYkcn+qDdWvPvgMsOkklgisEokxMrJPMR8bOITm8iUy6m61/opR7+v+XlQYbMq4JPrn6JP/LTCDhWffRIY0mTk2CUnQ2PgNerzjo6/BoXxfCXYLeG5+xaX2mL3sq1NYbV8b7zh4M23SjsMpOFEDyIJcx/KBk4aae5MAeNpAx2I9IRxN4EKOCpMpDt/o46CM0WdAvatyuAs43fZ7ngRcCYutiLProdq84BoNGVOExeh7BdnNkqJ0CwCBwjqhFxhgEMC7vK5+3zgkAcRnXm7BIckXFQ8HrTP34rPeNxiSO7UUEirxn+Q/63YsQ0AMAgDwY6Ckv2HZQCQ3NwCliAB7H+EKgvVFXpKmyw0t7Sn2T1Rp2+z2fOzD8lGhA0tWyNqsbFVy5Y/O0fqQLKTzUyEsjXMaCnrx8yossfKsLMIoUKNilkq+KkoqsKxiusKICikgSCLwj4KRHk05mEdw4cLrMGD5S1fn3UAAAAASUVORK5CYII=",rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAQcP8vgP8Nb/8Nbv8Ob/8Obv8Vc/8Ob/8Obv8Nbv8Nb/8Obv8Nb/8NcP8OcP8Pb/8PcP8Ocf8chf8Ob/8Obv8Ob/8Obv8OcP8NcP8Nbv8NcP8NcP8Pcf8Ocf8Scv8Pb/8Nbv90LxprAAAAIXRSTlMAPwX5svCSF27s5tLNmnFbVDEkCdzx37mgiYZ0YkY2HWWKqbLAAAACF0lEQVRYw6SU17LDIAxERXF3XOLe4uj/f/LGgjtDEldyHswMHpYVWoA98rGTUR0IEdSR7MYcbPB86eAHjvQ9uESRNrhBkxbnZYYQdwiHc1I8CYxVpWzdvndbWRqTQcLhEBahppJ+bizguS8r1ETsyI6LCiEzvvI7kwIV7q6pe6xl3Bk2mF0tFd93ytINv3m7wbjpMGyWlwm11QMOeCjjIoNVntoOh0O4NvVc9YNEAqdIkFjxxATVPcFJJoeqY1/9ovnyDqe5l7Tzxwoe69nz6L1jDiYqhxNcYlLJBAOGCz5cxMcFZhQWUd/hMpSCiJu9pGLXScMw3cpT/JaYgt6NrTx7AlF4WxmnV6UAxbBbGKNz2C1u0IZCpD1thMgvhspSqppoJaSDo86wWQzNtkLzYqkhc/hCgq0QyOW/95+qzF4ooyxrxYrbC/FKV+TQaC9EThyAnJzZC+mzyWGkwV5IWxmhWwb+ixDHFx1VWIKtEFHSKUf0/UWIvERQI2ILb3jMJKGXgpl48EaLiDUEXxctFXiASL+uWwDLqh5MQjwkBJN+0f5rxc5tAABhIAhiIkJaoP8mSRw5O2koAInH9u2yjdjR2GWz52cfkpUIK1rWRlRjY62WNX82jtSAZCObhQgVa1jQUtHPh9FVE0MSICkV2BlCKKjhmDXB7yQY8q5CUQXHCteVQFBKQ0kWr328iPJqzMu6XjvRhx8qv5Pz8gaE6wAAAABJRU5ErkJggg==";const D=e=>($("data-v-bcc09638"),e=e(),ee(),e),dt={class:"container"},vt=D(()=>s("div",{class:"common-title"},"\u5229\u76CA\u6F14\u793A",-1)),At={class:"benefit"},pt={class:"benefit-title"},ht=D(()=>s("div",{class:"line"},null,-1)),ft={key:0,class:"box-title box-title-chart"},gt=D(()=>s("img",{src:X,alt:""},null,-1)),_t=b(" \u4FDD\u5355\u5E74\u5EA6"),bt=b("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),mt=b("\u5C81\u65F6 "),yt=D(()=>s("img",{src:X,alt:""},null,-1)),Pt={key:1},Ct={class:"box"},wt={class:"box-title"},Et=D(()=>s("img",{src:X,alt:""},null,-1)),Rt=b(" \u4FDD\u5355\u5E74\u5EA6"),kt=b("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),Bt=b("\u5C81\u65F6 "),It=D(()=>s("img",{src:X,alt:""},null,-1)),Dt={class:"box-price"},Ft={class:"text1"},xt={class:"text2"},Ot={key:2,style:{width:"100%"}},Nt={class:"slider"},St=D(()=>s("img",{src:lt,alt:""},null,-1)),Mt=[St],Vt={style:{flex:"1",margin:"0px 5px"}},Kt={class:"custom-button"},Ut=D(()=>s("img",{src:rt,alt:""},null,-1)),Wt=[Ut],qt=D(()=>s("p",{class:"slider-dec"},"\u62D6\u52A8\u6309\u94AE\u67E5\u770B\u4E0D\u540C\u5E74\u9F84\u4FDD\u969C",-1)),Qt={class:"btn-two"},Yt=b("\u56FE\u8868\u5C55\u793A"),Lt=b("\u8D8B\u52BF\u5C55\u793A"),Ht=G({props:{info:{type:Object,default:()=>{}}},setup(e){const t=e,o=w(0),p=w(0),h=w(0),n=w(),g=w(0),y=w(!0),N=(i,a)=>{const d=[],u=[];for(let P=i,E=0;P<=a;P++,E++)d.push(P.toString()),u.push(E+1);return{a:d,year:u}},c=()=>{var P,E,S;const i=(E=(P=t.info)==null?void 0:P.benefitRiskResultVOList)==null?void 0:E[o.value],{a,year:d}=N(p.value,h.value),u={index:a.indexOf(g.value.toString()),age:a,year:d,result:(S=i==null?void 0:i.benefitRiskItemResultVOList)==null?void 0:S[0]};n.value=u},A=i=>{const a=i==null?void 0:i.benefitRiskResultVOList[o.value];p.value=a.ageBegin+1,g.value=a.ageBegin+1,h.value=a.ageEnd},F=()=>{g.value>h.value-1||(g.value+=1,c())},x=()=>{g.value>p.value&&(g.value-=1,c())},O=i=>{o.value=i.name,c()},B=i=>{i==="1"?y.value=!0:y.value=!1};return T(()=>t.info,i=>{i&&(A(i),c())},{deep:!0,immediate:!0}),T(g,()=>{c()}),(i,a)=>{const d=I("van-slider"),u=I("van-button"),P=I("van-tab"),E=I("van-tabs");return r(),_("div",dt,[vt,C(E,{active:o.value,"title-active-color":"#0D6EFE","title-inactive-color":"#393D46",shrink:"",onClickTab:O},{default:m(()=>{var S;return[(r(!0),_(L,null,H((S=t.info)==null?void 0:S.benefitRiskResultVOList,(M,R)=>(r(),U(P,{key:R,name:R,title:M.riskName},{default:m(()=>{var V,k,W,se,ae,oe,ne,ie,ue,ce,le,re,de,ve,Ae,pe;return[s("div",At,[s("div",pt,f(M==null?void 0:M.riskName),1),ht,y.value?K("",!0):(r(),_("p",ft,[gt,_t,s("span",null,f((W=(V=n.value)==null?void 0:V.year)==null?void 0:W[(k=n.value)==null?void 0:k.index]),1),bt,s("span",null,f((oe=(se=n.value)==null?void 0:se.age)==null?void 0:oe[(ae=n.value)==null?void 0:ae.index]),1),mt,yt])),y.value?(r(),_("div",Pt,[s("div",Ct,[s("p",wt,[Et,Rt,s("span",null,f((ue=(ne=n.value)==null?void 0:ne.year)==null?void 0:ue[(ie=n.value)==null?void 0:ie.index]),1),kt,s("span",null,f((re=(ce=n.value)==null?void 0:ce.age)==null?void 0:re[(le=n.value)==null?void 0:le.index]),1),Bt,It]),s("div",Dt,[(r(!0),_(L,null,H((ve=(de=n.value)==null?void 0:de.result)==null?void 0:ve.headers,(q,he)=>{var fe,ge,_e,be,me;return r(),_("div",{key:he,style:{width:"33%"}},[s("p",Ft,f(j(we)(Number((me=(be=(ge=(fe=n.value)==null?void 0:fe.result)==null?void 0:ge.dataList)==null?void 0:be[(_e=n.value)==null?void 0:_e.index])==null?void 0:me[he]))),1),s("p",xt,f(q)+"(\u5143\uFF09",1)])}),128))])])])):(r(),_("div",Ot,[C(Ye,{min:p.value,max:h.value,current:g.value,data:(pe=(Ae=n.value)==null?void 0:Ae.result)==null?void 0:pe.benefitRiskItemList},null,8,["min","max","current","data"])])),s("div",Nt,[s("div",{class:"add lf",onClick:x},Mt),s("div",Vt,[p.value?(r(),U(d,{key:0,modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=q=>g.value=q),min:p.value,max:h.value,"bar-height":"8px"},{button:m(()=>[s("div",Kt,f(g.value)+" \u5C81",1)]),_:1},8,["modelValue","min","max"])):K("",!0)]),s("div",{class:"add rg",onClick:F},Wt)]),qt,s("div",Qt,[C(u,{round:"",plain:!y.value,type:"primary",class:"btn",onClick:a[1]||(a[1]=q=>B("1"))},{default:m(()=>[Yt]),_:1},8,["plain"]),C(u,{round:"",plain:y.value,type:"primary",class:"btn",onClick:a[2]||(a[2]=q=>B("2"))},{default:m(()=>[Lt]),_:1},8,["plain"])])])]}),_:2},1032,["name","title"]))),128))]}),_:1},8,["active"])])}}});var jt=te(Ht,[["__scopeId","data-v-bcc09638"]]);var Tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAADqCAMAAABUZB2/AAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMAA0IJ+AYTHPIkINCmF4IN/Hx1SCgLw2OhmzUrGdZVOatMD8q2lnDs5t2xjIhaUC/iaZExvGxePgkCneYAAAXCSURBVHja7dzZdtowEAbgX17wim1sY/Z93wkQmPd/stKmaWkCwT3H8vgi3yVXOkiWRqORwO5lB3Zr6oGZ7hIp4OWfiCgCK8Ohqy04tfb00waMFJN+qYHPRqM3r2AT0rsQTMSB/qiAh7qkvzywKCV0YwUOdoduTcCgOad/NJC/yKR/uchdLaAP+sibR5+MkS9Rp89OyJU/pjsS5Knt0D0OchTv6a4O8nOZ0X0L5Kar0QNz5GUa0CMz5GRFj2nIhd6nryAPpYS+pEM+u0NfG0K63ZyeKEO2yKRnbEh21uipGHJVKIUjZBINSqMHiapjSkWBPOURpRNBGmtBKW0hS29GaW0gyVaj1GqQ4zWg9F4gxZpSkJsb0F1KQXJuQG12w8PSMSklDxKVjtvptTEzemKFHPitweuqv6AbXLmBC93gyg2IGb0bnxYBU26gf7sDFrZS89xknndu4ExvZmX8pV7Hyxn5KdMVe0J9RD8dwMqjK0cHqyYRmTF4iRlRDdzq1Ae7zb4EdqULvn379u1b8dWcM9i59AJ2ulIGN1+A32rWBbsxfwHRlcXfH3EBYjokgQJuYmz64KeD3aYABX6qRm1wK02W+HalNwZgF5EDdkaFPxlQCMqpAKv4hDyw888WuFVRAPUF/yqODvH3BkQT7Hoq2A21Gf/IbI1OKAD+7rCn/DtQVKgOdsqyADOVTDrQ2vl46rBqQwofcAIDCSmYHo74iq+RDRlczUASHDFxLCQ0gGLhseYU2es10Q+2KOv4pVlRsQgueKQECbo0gt3GrWrDEaiJ+03WDsiaAbXjCXwk8ELug0rUNTL2oikQuEfp7HCXXUbG1lTBAwLxyPjcNgsZU4ALHnM/94jYUxOZCp+E7UNP/fRTw0G2zloX/0rx7wtkqSxQxhNTauDWsb5DlsQoKeMZa1/5MEpWyFI83/v4X8bKQKaGLTznd2sSZ+zVWSCFHS1u2mAuBTIUB5qBFITr4Y+BuUSWxCbE/yvbyJBAWkqtjd82TWRq6kRIJ6HLnxFBMbKU0BbphPUW3vjrPjKlD3T2PZeK1LaKjl/qSYxM1fcKUtKoip/8uWYjUw4dkY5aH+ONP8A7rgO0KPMmCIG0jpcqrqp7ipCtSHORkks1XInXEzK2odSNqDgtAIZA9lQV/0N3HBuZEzrS6TZ6AOxFR0XWzqkzLUuqAQJVC5kbBGkb0aq0Uep0IYEQQHohJZBCRyr1cQvASxsyjIMWUtBNMmoTATlcbYs0St2SSQPIYVSRhg2BXghpjDKeatGo04Y8r8EET3VNjULIE2srPDMcVOMXyNTGM9V90INkamOCL1iGmNMWkjU108BD3aCveiMB2bY9WEPcE0/RNhsCuah25hY+UoU+ox1K0biHPBhJRxihgb8E1qaC9cQGxhQiHwY8mqDpXRDXmgjnNXjvec1hpYq8KG6ECnmY0gohHdA28MsOOVM8BVFjc5t9iIpwylUzp+BXYj/41OsFOI5/pQ7YDdcRuBWgPAOWtuSvvN2aDfArs9f/6m4BPs9pEYoLq2v+soQilMVvi7B6bsxX8Cuzz1PN0RHslrQGu2qFPZSJ+wbYjWkCdu3GEMysAsyVIgn467CFt2fvjFIBKizF6MRfYRnPFwW4x1Riv0OknviDKYRFCCtFpQVm5Sl7HAOMixBERB32e20W+5YPUDt79kGJcuKwrxk+BPuAsGch2L0U4YkbKOyBzGDJ/3mKRRFeTDD4L/dVChDiK2QWYESs2LMhahFu3jboAHaDOfvaGZf4XyooLRY2uLVHI/Y/og2dfd8ZaQVYMTyqgJkO8O873T7/tVvbZH+78cpiP/C0R+yTdUHej1TX7MF1WIBJygqIPTkGbNi3fMMD/yQFl1ywsxL2OKZbgEO+nWay/w/QG+yHW+oGYE+X9vlDKaA7Zw8hFJ//XKmpOfxHOnaH/cOoHvlfsBRLjf8tNNGYFaGMrgC1CAXwA5uZT4G1yHw0AAAAAElFTkSuQmCC";const Gt={class:"com-za-share-overlay"},Xt={class:"block"},zt=["src"],Jt=G({props:{show:{type:Boolean,default:!1},text:{type:String,default:"\u70B9\u51FB\u5DE6\u4E0A\u89D2\xB7\xB7\xB7\u8F6C\u53D1\u5206\u4EAB~"}},emits:["on-close"],setup(e,{emit:t}){const o=()=>{t("on-close",!1)};return(p,h)=>{const n=I("van-overlay");return r(),_("div",Gt,[C(n,{show:e.show,"z-index":"999999999",onClick:o},{default:m(()=>[s("div",{class:"wrapper",onClick:h[0]||(h[0]=xe(()=>{},["stop"]))},[s("div",Xt,f(e.text),1),s("img",{src:j(Tt),alt:""},null,8,zt)])]),_:1},8,["show"])])}}});const z=e=>($("data-v-2ca5ad56"),e=e(),ee(),e),Zt={class:"page-composition-proposal"},$t={class:"head-bg"},es={class:"container"},ts={class:"common-title"},ss={class:"title"},as=z(()=>s("img",{src:Le,class:"ig"},null,-1)),os={class:"product-detail"},ns=z(()=>s("div",{class:"line2"},null,-1)),is={class:"container"},us=z(()=>s("div",{class:"common-title"},"\u4FDD\u9669\u516C\u53F8\u7B80\u4ECB",-1)),cs=z(()=>s("span",{class:"poiner"},null,-1)),ls={key:0,class:"footer-btn"},rs=b("\u751F\u6210PDF"),ds=b("\u5206\u4EAB\u8BA1\u5212\u4E66"),vs=G({setup(e){const t=Oe(),o=Ne(),{isShare:p,id:h}=t.query,n=w(),g=w(""),y=w(""),N=w(!1),c=a=>a===1;T(()=>n.value,a=>{const{gender:d,name:u}=a;c(d)?y.value=`${u||""}\u5148\u751F\u7684\u8BA1\u5212\u4E66`:y.value=`${u||""}\u5973\u58EB\u7684\u8BA1\u5212\u4E66`});const A=()=>{var d;const a=`${qe}/compositionProposal?id=${h}&isShare=1&tenantId=${g.value}`;return{title:`${(d=n.value)==null?void 0:d.name}\u7684\u8BA1\u5212\u4E66`,desc:"\u60A8\u7684\u8D34\u5FC3\u4FDD\u9669\u7BA1\u5BB6",link:a}},F=()=>{const a=A();Ce()&&(console.log("\u5728\u5FAE\u4FE1\u5185, \u9ED8\u8BA4\u8BBE\u7F6E\u5206\u4EAB\u4FE1\u606F"),console.log(a),Z.ready(()=>{const d=J(Q({},a),{imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",success:()=>{console.log("\u5206\u4EAB\u6210\u529F\u56DE\u8C03")}});console.log("ready"),Z.updateAppMessageShareData(d),Z.updateTimelineShareData(d)}))},x=async()=>{try{let a=null;p?a=await Me(`${h}?tenantId=${t.query.tenantId}`):a=await Ve(h);const{code:d,data:u}=a;if(d==="10000"){const P=(u==null?void 0:u.proposalInsuredVOList[0])||{};n.value=P,g.value=u==null?void 0:u.tenantId}F()}catch{Y("\u63A5\u53E3\u8BF7\u6C42\u5931\u8D25")}};Se(()=>{t.query.token&&new Ue({source:"localStorage"}).set("token",t.query.token),x()});const O=a=>{const d=A();if(console.log("\u70B9\u51FB\u4E86\u5206\u4EAB\u6309\u94AE"),Ce()){console.log("\u5728\u5FAE\u4FE1\u5185\uFF0C\u5F39\u8D77\u906E\u7F69"),N.value=!0;return}We()&&(console.log("\u5728app\u5185"),He.shareConfig(J(Q({},d),{img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"})))},B=()=>{N.value=!1},i=()=>{if(!h){Y("PDF\u751F\u6210\u5931\u8D25");return}Y.loading({message:"PDF\u751F\u6210\u4E2D...",forbidClick:!0}),Ke(h.toString()).then(a=>{const{code:d,message:u}=a;d==="10000"&&(Y.clear(),console.log(u),u?o.push(`/pdfViewer?url=${encodeURIComponent(u)}&title=${y.value}`):Y("\u8BA1\u5212\u4E66\u4E3A\u7A7A"))})};return(a,d)=>{const u=I("van-collapse-item"),P=I("van-collapse"),E=I("van-button"),S=I("ProPageWrap");return r(),U(S,null,{default:m(()=>{var M;return[s("div",Zt,[s("div",$t,f(y.value),1),C(ct,{info:n.value},null,8,["info"]),s("div",es,[(r(!0),_(L,null,H((M=n.value)==null?void 0:M.liabilityByRiskVOList,(R,V)=>(r(),_("div",{key:V},[s("div",ts,[s("div",ss,[as,b(" "+f(R.riskName),1)])]),s("div",os,[C(P,{modelValue:R.riskName1,"onUpdate:modelValue":k=>R.riskName1=k,accordion:"","is-link":!1,border:!1,size:"middle"},{default:m(()=>[(r(!0),_(L,null,H(R.proposalRiskLiabilityVOList,(k,W)=>(r(),U(u,{key:W,title:k.liabilityName,name:W,"value-class":"price",value:k.liabilityIndemnityContent},{default:m(()=>[b(f(k.liabilityDesc),1)]),_:2},1032,["title","name","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),ns]))),128))]),C(jt,{info:n.value},null,8,["info"]),s("div",is,[us,C(P,{accordion:"","is-link":!1,border:!1,size:"middle"},{default:m(()=>{var R;return[(r(!0),_(L,null,H((R=n.value)==null?void 0:R.insurerInfoVOList,(V,k)=>(r(),U(u,{key:k,name:"1","value-class":"price"},{title:m(()=>[s("div",null,[cs,b(" "+f(V.insurerName),1)])]),default:m(()=>[b(" "+f(V.insurerDesc),1)]),_:2},1024))),128))]}),_:1})]),j(p)?K("",!0):(r(),_("div",ls,[C(E,{plain:"",type:"primary",class:"btn",onClick:i},{default:m(()=>[rs]),_:1}),C(E,{type:"primary",class:"btn",onClick:O},{default:m(()=>[ds]),_:1})])),C(Jt,{show:N.value,onOnClose:B},null,8,["show"])])]}),_:1})}}});var bs=te(vs,[["__scopeId","data-v-2ca5ad56"]]);export{bs as default};
