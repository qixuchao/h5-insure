var Ee=Object.defineProperty,Be=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var re=(e,t,n)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))Se.call(t,n)&&re(e,n,t[n]);if(ce)for(var n of ce(t))Ve.call(t,n)&&re(e,n,t[n]);return e},J=(e,t)=>Be(e,Ie(t));import{l as xe,g as ve,r as E,h as c,m as h,n as R,k as p,y as s,I as d,z as G,ah as Oe,Q as Pe,af as Ne,C as g,X as Me,M as Ke,d as We,j as x,s as M,E as K,F as W,B as A,a1 as Ue,a2 as Le,w as $,T as ee}from"./vendor-ee04cf44.js";import{P as He,_ as _e,a as qe,b as Ge}from"./index-67863d6b.js";import{a as je,g as Te}from"./proposalList-4a3ef383.js";import{_ as Ye,S as Qe,y as de,z as pe,A as Xe,O as he}from"./index-3a735287.js";import{P as Ze}from"./index-28398879.js";var ze="/static/assets/male.099176e3.png",Je="/static/assets/female.d4f701ab.png",$e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAM1BMVEUAAAAHe/8JfP8HfP8ghf8IfP8Jfv8SgP8Lff8Iev8Kf/8Nf/8Ie/8KfP8Mff8Iff8Ke/9WxKgsAAAAEXRSTlMATTpGCEIdDS0kGBI+NCogMWRIF20AAADeSURBVDjL3ZOxDgMhDENdCOGAg+P/v7aI4oalQ3VT+6YoAaPYAkB2PtQII9bgXcagPSYKoq9GA/JjEXmLjQzHsq1ZY8PBWzmxwx6BZV2zykZAZ5nWLLHRIe9ThEoC5PniGW29c742FxQ9mmJH26GCf0HHrq7AKG54MTfutJMk2gn9mK1aXMeaHbezNYlrzS57RJboCXIuSQHKVHWWl7ip+No4p1SwU1LK+DFEPjWSH5vu++QwXEmb7w2kMRezttAUM/92tn3N+hfZmqSJeuE3rVu2dfvI5dKInahXAfAESeEGZRES0sEAAAAASUVORK5CYII=";const u=(e,t)=>{window.AppJSInterface?window.AppJSInterface[e](JSON.stringify(t)):window.webkit.messageHandlers&&window.webkit.messageHandlers[e].postMessage(JSON.stringify(t))};function i(e){console.log(e)}const et={appReady(){return new Promise((e,t)=>{const n=setInterval(()=>{window.AppJSInterface||window.webkit&&window.webkit.messageHandlers?(clearInterval(n),e("success")):t("Jsbridge\u521D\u59CB\u5316\u5931\u8D25\uFF1A\u627E\u4E0D\u5230window.AppJSInterface\u6216\u8005window.webkit.messageHandlers")},100)})},showNavMask(e){return this.appReady().then(()=>{u("showNavShadow",{visible:e})}).catch(t=>{})},getNativeCookies(e){return this.appReady().then(()=>{u("getCookies",{cbname:e})}).catch(t=>new Error("\u8C03\u7528\u5931\u8D25"))},shareConfig(e){this.appReady().then(()=>{let t;e.type==="image"?t={type:"image",link:e.link,cbname:e.cbname}:t={img:e.img,title:e.title,desc:e.desc,link:e.link,cbname:e.cbname},u("configWXShare",t)}).catch(t=>{i(t)})},callLogout(e){return this.appReady().then(()=>{u("logout",{cbname:e})}).catch(t=>{i(t)})},importCustomersFromNative(e){return this.appReady().then(()=>{u("importCustomers",{cbname:e})}).catch(t=>{i(t)})},callImage(e){this.appReady().then(()=>{u("choosePhoto",{cbname:e,limit:"30M"})}).catch(t=>{i(t)})},openPDFWithUrl(e,t){this.appReady().then(()=>{u("openPDFDoc",{title:e,link:t})}).catch(n=>{i(n)})},openWebView(e,t,n="true"){this.appReady().then(()=>{u("openWebView",{title:e,link:t,showProgress:n})}).catch(B=>{i(B)})},openNewWebForShare({link:e,title:t,desc:n,img:B}){this.appReady().then(()=>{u("openNewWebForShare",{link:e,title:t,desc:n,img:B})}).catch(w=>{i(w)})},goback(){this.appReady().then(()=>{u("goback","")}).catch(e=>{i(e)})},closeWebView(e){let t={cbname:""};xe.exports.isEmpty(t)||(t=N(N({},t),e)),this.appReady().then(()=>{u("closeWebview",t)}).catch(n=>{i(n)})},downloadImg(e){this.appReady().then(()=>{u("downloadImg",e)}).catch(t=>{i(t)})},jumpProduct(e){this.appReady().then(()=>{u("jumpProduct",e)}).catch(t=>{i(t)})},jumpSignResult(){this.appReady().then(()=>{u("jumpSignResult","")}).catch(e=>{i(e)})},downloadVideo(e){this.appReady().then(()=>{u("downloadVideo",e)}).catch(t=>{i(t)})},downloadImgs(e){this.appReady().then(()=>{u("downloadImgs",e)}).catch(t=>{i(t)})},openWeiXin(){this.appReady().then(()=>{u("openWeiXin","")}).catch(e=>{i(e)})},previewImgs(e){this.appReady().then(()=>{u("previewImgs",e)}).catch(t=>{i(t)})},copyToClipboard(e){this.appReady().then(()=>{u("copyToClipboard",e)}).catch(t=>{i(t)})},shareWXForMoments(e){this.appReady().then(()=>{u("shareWXForMoments",e)}).catch(t=>{i(t)})},previewVideo(e){this.appReady().then(()=>{u("previewVideo",e)}).catch(t=>{i(t)})},getContacts(e){return this.appReady().then(()=>{u("na_getContacts",{cbname:e})}).catch(t=>{i(t)})},getLocation(e){this.appReady().then(()=>u("na_startLocation",{param:e})).catch(t=>{i(t)})}};var tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAADqCAMAAABUZB2/AAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMAA0IJ+AYTHPIkINCmF4IN/Hx1SCgLw2OhmzUrGdZVOatMD8q2lnDs5t2xjIhaUC/iaZExvGxePgkCneYAAAXCSURBVHja7dzZdtowEAbgX17wim1sY/Z93wkQmPd/stKmaWkCwT3H8vgi3yVXOkiWRqORwO5lB3Zr6oGZ7hIp4OWfiCgCK8Ohqy04tfb00waMFJN+qYHPRqM3r2AT0rsQTMSB/qiAh7qkvzywKCV0YwUOdoduTcCgOad/NJC/yKR/uchdLaAP+sibR5+MkS9Rp89OyJU/pjsS5Knt0D0OchTv6a4O8nOZ0X0L5Kar0QNz5GUa0CMz5GRFj2nIhd6nryAPpYS+pEM+u0NfG0K63ZyeKEO2yKRnbEh21uipGHJVKIUjZBINSqMHiapjSkWBPOURpRNBGmtBKW0hS29GaW0gyVaj1GqQ4zWg9F4gxZpSkJsb0F1KQXJuQG12w8PSMSklDxKVjtvptTEzemKFHPitweuqv6AbXLmBC93gyg2IGb0bnxYBU26gf7sDFrZS89xknndu4ExvZmX8pV7Hyxn5KdMVe0J9RD8dwMqjK0cHqyYRmTF4iRlRDdzq1Ae7zb4EdqULvn379u1b8dWcM9i59AJ2ulIGN1+A32rWBbsxfwHRlcXfH3EBYjokgQJuYmz64KeD3aYABX6qRm1wK02W+HalNwZgF5EDdkaFPxlQCMqpAKv4hDyw888WuFVRAPUF/yqODvH3BkQT7Hoq2A21Gf/IbI1OKAD+7rCn/DtQVKgOdsqyADOVTDrQ2vl46rBqQwofcAIDCSmYHo74iq+RDRlczUASHDFxLCQ0gGLhseYU2es10Q+2KOv4pVlRsQgueKQECbo0gt3GrWrDEaiJ+03WDsiaAbXjCXwk8ELug0rUNTL2oikQuEfp7HCXXUbG1lTBAwLxyPjcNgsZU4ALHnM/94jYUxOZCp+E7UNP/fRTw0G2zloX/0rx7wtkqSxQxhNTauDWsb5DlsQoKeMZa1/5MEpWyFI83/v4X8bKQKaGLTznd2sSZ+zVWSCFHS1u2mAuBTIUB5qBFITr4Y+BuUSWxCbE/yvbyJBAWkqtjd82TWRq6kRIJ6HLnxFBMbKU0BbphPUW3vjrPjKlD3T2PZeK1LaKjl/qSYxM1fcKUtKoip/8uWYjUw4dkY5aH+ONP8A7rgO0KPMmCIG0jpcqrqp7ipCtSHORkks1XInXEzK2odSNqDgtAIZA9lQV/0N3HBuZEzrS6TZ6AOxFR0XWzqkzLUuqAQJVC5kbBGkb0aq0Uep0IYEQQHohJZBCRyr1cQvASxsyjIMWUtBNMmoTATlcbYs0St2SSQPIYVSRhg2BXghpjDKeatGo04Y8r8EET3VNjULIE2srPDMcVOMXyNTGM9V90INkamOCL1iGmNMWkjU108BD3aCveiMB2bY9WEPcE0/RNhsCuah25hY+UoU+ox1K0biHPBhJRxihgb8E1qaC9cQGxhQiHwY8mqDpXRDXmgjnNXjvec1hpYq8KG6ECnmY0gohHdA28MsOOVM8BVFjc5t9iIpwylUzp+BXYj/41OsFOI5/pQ7YDdcRuBWgPAOWtuSvvN2aDfArs9f/6m4BPs9pEYoLq2v+soQilMVvi7B6bsxX8Cuzz1PN0RHslrQGu2qFPZSJ+wbYjWkCdu3GEMysAsyVIgn467CFt2fvjFIBKizF6MRfYRnPFwW4x1Riv0OknviDKYRFCCtFpQVm5Sl7HAOMixBERB32e20W+5YPUDt79kGJcuKwrxk+BPuAsGch2L0U4YkbKOyBzGDJ/3mKRRFeTDD4L/dVChDiK2QWYESs2LMhahFu3jboAHaDOfvaGZf4XyooLRY2uLVHI/Y/og2dfd8ZaQVYMTyqgJkO8O873T7/tVvbZH+78cpiP/C0R+yTdUHej1TX7MF1WIBJygqIPTkGbNi3fMMD/yQFl1ywsxL2OKZbgEO+nWay/w/QG+yHW+oGYE+X9vlDKaA7Zw8hFJ//XKmpOfxHOnaH/cOoHvlfsBRLjf8tNNGYFaGMrgC1CAXwA5uZT4G1yHw0AAAAAElFTkSuQmCC";const st={class:"com-za-share-overlay"},at={class:"block"},ot=["src"],nt=ve({props:{show:{type:Boolean,default:!1},text:{type:String,default:"\u70B9\u51FB\u5DE6\u4E0A\u89D2\xB7\xB7\xB7\u8F6C\u53D1\u5206\u4EAB~"}},emits:["on-close"],setup(e,{emit:t}){const n=()=>{t("on-close",!1)};return(B,w)=>{const j=E("van-overlay");return c(),h("div",st,[R(j,{show:e.show,"z-index":"999",onClick:n},{default:p(()=>[s("div",{class:"wrapper",onClick:w[0]||(w[0]=Oe(()=>{},["stop"]))},[s("div",at,d(e.text),1),s("img",{src:G(tt),alt:""},null,8,ot)])]),_:1},8,["show"])])}}});const f=e=>(Ue("data-v-9112a846"),e=e(),Le(),e),ut={class:"page-composition-proposal"},it={class:"head-bg"},lt={class:"container head-cover"},ct={class:"info-detail"},rt={class:"name"},dt={class:"img"},pt={key:0,src:ze},ht={key:1,src:Je},vt={clase:"p1"},_t={class:"p2"},mt={class:"fe"},gt=A(" \u9996\u5E74\u4FDD\u8D39\uFF1A "),At=f(()=>s("div",{class:"line"},null,-1)),ft={class:"tp"},yt={class:"container"},bt={class:"common-title"},kt={class:"title"},Ct=f(()=>s("img",{src:$e,class:"ig"},null,-1)),Rt={class:"product-detail"},Dt=f(()=>s("div",{class:"line2"},null,-1)),wt={class:"container"},Ft=f(()=>s("div",{class:"common-title"},"\u5229\u76CA\u6F14\u793A",-1)),Et={class:"benefit"},Bt={class:"benefit-title"},It=f(()=>s("div",{class:"line"},null,-1)),St={key:0},Vt={class:"box"},xt={class:"box-title"},Ot=f(()=>s("img",{src:_e,alt:""},null,-1)),Pt=A(" \u4FDD\u5355\u5E74\u5EA6"),Nt=A("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),Mt=A("\u5C81\u65F6 "),Kt=f(()=>s("img",{src:_e,alt:""},null,-1)),Wt={class:"box-price"},Ut={class:"text1"},Lt={class:"text2"},Ht={class:"slider"},qt=f(()=>s("img",{src:qe,alt:""},null,-1)),Gt=[qt],jt={style:{flex:"1",margin:"0px 5px"}},Tt={class:"custom-button"},Yt=f(()=>s("img",{src:Ge,alt:""},null,-1)),Qt=[Yt],Xt={key:1},Zt=f(()=>s("p",{class:"slider-dec"},"\u62D6\u52A8\u6309\u94AE\u67E5\u770B\u4E0D\u540C\u5E74\u9F84\u4FDD\u969C",-1)),zt={class:"btn-two"},Jt=A("\u56FE\u8868\u5C55\u793A"),$t=A("\u8D8B\u52BF\u5C55\u793A"),es={class:"container"},ts=f(()=>s("div",{class:"common-title"},"\u4FDD\u9669\u516C\u53F8\u7B80\u4ECB",-1)),ss=f(()=>s("span",{class:"poiner"},null,-1)),as={key:0,class:"footer-btn"},os=A("\u751F\u6210PDF"),ns=A("\u5206\u4EAB\u8BA1\u5212\u4E66"),us=ve({setup(e){const t=Pe(),n=Ne(),{isShare:B,id:w}=t.query,j=[{title:"\u9669\u79CD\u540D\u79F0",dataIndex:"key1",width:180},{title:"\u4FDD\u989D",dataIndex:"key2"},{title:"\u4FDD\u969C\u671F\u95F4",dataIndex:"key3",width:110},{title:"\u7F34\u8D39\u671F\u95F4",dataIndex:"key4",width:110},{title:"\u4FDD\u8D39",dataIndex:"key5",width:120}],T=g([]),Y=g(0),l=g(),U=g(0),I=g([]),S=g(0),O=g(0),te=g(""),Q=g(""),X=g(!1),D=g(0),P=g(!0),me={1:"\u7537",2:"\u5973"},Z=o=>o===1;Me(()=>l.value,o=>{const{gender:a,name:r}=o;Z(1)?Q.value=`${r}\u5148\u751F\u7684\u8BA1\u5212\u4E66`:Q.value=`${r}\u5973\u58EB\u7684\u8BA1\u5212\u4E66`});const L=()=>{var o,a,r,y,k,v;(v=(k=(y=(r=(a=(o=l.value)==null?void 0:o.benefitRiskResultVOList)==null?void 0:a[Y.value])==null?void 0:r.benefitRiskItemResultVOList)==null?void 0:y[0])==null?void 0:k.dataList)==null||v.map(_=>(D.value.toString()===_[_.length-1]&&(I.value=_),_))},ge=()=>{var o,a,r,y,k,v;(v=(k=(y=(r=(a=(o=l.value)==null?void 0:o.benefitRiskResultVOList)==null?void 0:a[0])==null?void 0:r.benefitRiskItemResultVOList)==null?void 0:y[0])==null?void 0:k.dataList)==null||v.map((_,V)=>(_.push(V+1),_.push((U.value+V+1).toString()),_))},Ae=o=>{const a=o.split("_");if(o==="to_life")return"\u4FDD\u7EC8\u751F";switch(a[0]){case"year":return`${a[1]}\u5E74`;case"month":return`${a[1]}\u6708`;case"day":return`${a[1]}\u5929`;case"to":return`\u4FDD\u81F3${a[1]}\u5C81`;default:return""}},fe=o=>{const a=o.split("_");switch(a[0]){case"year":return`${a[1]}\u5E74\u4EA4`;case"month":return`${a[1]}\u6708\u4EA4`;case"to":return`\u4EA4\u81F3${a[1]}\u5C81`;case"single":return"\u8DB8\u7F34";default:return""}},se=()=>{const o=`${he}?isShare=1`,a=`${he}/api/app/officialAccount/outerUserAuth?systemCode=BAO_A&skipUrl=${encodeURIComponent(o)}`;return{title:`${l.value.name}\u7684\u8BA1\u5212\u4E66`,desc:"\u60A8\u7684\u8D34\u5FC3\u4FDD\u9669\u7BA1\u5BB6",link:a}},ye=()=>{const o=se();pe()&&(console.log("\u5728\u5FAE\u4FE1\u5185, \u9ED8\u8BA4\u8BBE\u7F6E\u5206\u4EAB\u4FE1\u606F"),console.log(o),$.ready(()=>{const a=J(N({},o),{imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",success:()=>{console.log("\u5206\u4EAB\u6210\u529F\u56DE\u8C03")}});console.log("ready"),console.log(a),$.updateAppMessageShareData(a),$.updateTimelineShareData(a)}))};Ke(()=>{t.query.token&&new Qe({source:"localStorage"}).set("token",t.query.token),je(Number(w)).then(o=>{var a,r,y,k;l.value=(a=o.data)==null?void 0:a.proposalInsuredVOList[0],U.value=We().diff(l.value.birthday,"y"),S.value=(r=l.value.benefitRiskResultVOList[0])==null?void 0:r.ageBegin,O.value=(y=l.value.benefitRiskResultVOList[0])==null?void 0:y.ageEnd,D.value=U.value+1,ge(),L(),(k=l.value)==null||k.proposalProductRiskVOList.map(v=>{const{riskName:_,amount:V,coveragePeriod:z,chargePeriod:H,premium:q}=v;T.value.push({key1:_,key2:V,key3:Ae(z),key4:fe(H),key5:q})}),ye()})});const be=o=>{L()},ke=()=>{D.value>O.value-1||(D.value+=1,L())},Ce=()=>{D.value>S.value&&(D.value-=1,L())},Re=o=>{Y.value=o.name,S.value=l.value.benefitRiskResultVOList[o.name].ageBegin,O.value=l.value.benefitRiskResultVOList[o.name].ageEnd},ae=o=>{o==="1"?P.value=!0:P.value=!1},De=o=>{const a=se();if(console.log("\u70B9\u51FB\u4E86\u5206\u4EAB\u6309\u94AE"),pe()){console.log("\u5728\u5FAE\u4FE1\u5185\uFF0C\u5F39\u8D77\u906E\u7F69"),X.value=!0;return}Xe()&&(console.log("\u5728app\u5185"),et.shareConfig(J(N({},a),{img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"})))},we=()=>{X.value=!1},Fe=()=>{if(!w){ee("PDF\u751F\u6210\u5931\u8D25");return}ee.loading({message:"PDF\u751F\u6210\u4E2D...",forbidClick:!0}),Te(w.toString()).then(o=>{const{code:a,message:r}=o;a==="10000"&&(ee.clear(),n.push(`/openPdf?url=${encodeURIComponent(r)}`))})};return(o,a)=>{const r=E("van-collapse-item"),y=E("van-collapse"),k=E("van-slider"),v=E("van-button"),_=E("van-tab"),V=E("van-tabs"),z=E("ProPageWrap");return c(),x(z,null,{default:p(()=>{var H,q,oe,ne,ue,ie;return[s("div",ut,[s("div",it,d(Q.value),1),s("div",lt,[s("div",ct,[s("div",rt,[s("div",dt,[Z((H=l.value)==null?void 0:H.gender)?(c(),h("img",pt)):M("",!0),Z((q=l.value)==null?void 0:q.gender)?M("",!0):(c(),h("img",ht))]),s("div",null,[s("p",vt,d((oe=l.value)==null?void 0:oe.name),1),s("p",_t,d(me[(ne=l.value)==null?void 0:ne.gender])+"\uFF0C"+d(U.value)+"\u5C81",1)])]),s("div",mt,[gt,s("span",null,"\xA5"+d(G(de)((ue=l.value)==null?void 0:ue.totalPremium)),1)])]),At,s("div",ft,[T.value.length>0?(c(),x(Ze,{key:0,columns:j,class:"table","data-source":T.value},null,8,["data-source"])):M("",!0)])]),s("div",yt,[(c(!0),h(W,null,K((ie=l.value)==null?void 0:ie.liabilityByRiskVOList,(m,b)=>(c(),h("div",{key:b},[s("div",bt,[s("div",kt,[Ct,A(" "+d(m.riskName),1)])]),s("div",Rt,[R(y,{modelValue:m.riskName1,"onUpdate:modelValue":C=>m.riskName1=C,accordion:"","is-link":!1,border:!1,size:"middle"},{default:p(()=>[(c(!0),h(W,null,K(m.proposalRiskLiabilityVOList,(C,F)=>(c(),x(r,{key:F,title:C.liabilityName,name:F,"value-class":"price",value:C.liabilityIndemnityContent},{default:p(()=>[A(d(C.liabilityDesc),1)]),_:2},1032,["title","name","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),Dt]))),128))]),s("div",wt,[Ft,R(V,{active:Y.value,"title-active-color":"#0D6EFE","title-inactive-color":"#393D46",shrink:"",scrollspy:"",onClickTab:Re},{default:p(()=>{var m;return[(c(!0),h(W,null,K((m=l.value)==null?void 0:m.benefitRiskResultVOList,(b,C)=>(c(),x(_,{key:C,name:C,title:b.riskName},{default:p(()=>[s("div",Et,[s("div",Bt,d(b==null?void 0:b.riskName),1),It,P.value?(c(),h("div",St,[s("div",Vt,[s("p",xt,[Ot,Pt,s("span",null,d(I.value[I.value.length-2]),1),Nt,s("span",null,d(I.value[I.value.length-1]),1),Mt,Kt]),s("div",Wt,[(c(!0),h(W,null,K(b.benefitRiskItemResultVOList[0].headers,(F,le)=>(c(),h("div",{key:le,style:{width:"33%"}},[s("p",Ut,d(G(de)(Number(I.value[le]))),1),s("p",Lt,d(F)+"(\u5143\uFF09",1)]))),128))])]),s("div",Ht,[s("div",{class:"add lf",onClick:Ce},Gt),s("div",jt,[S.value?(c(),x(k,{key:0,modelValue:D.value,"onUpdate:modelValue":a[0]||(a[0]=F=>D.value=F),min:S.value,max:O.value,"bar-height":"8px",onChange:be},{button:p(()=>[s("div",Tt,d(D.value)+" \u5C81",1)]),_:1},8,["modelValue","min","max"])):M("",!0)]),s("div",{class:"add rg",onClick:ke},Qt)])])):(c(),h("div",Xt,[R(He,{min:S.value,max:O.value,data:b.benefitRiskItemResultVOList[0].benefitRiskItemList},null,8,["min","max","data"])])),Zt,s("div",zt,[R(v,{round:"",plain:!P.value,type:"primary",class:"btn",onClick:a[1]||(a[1]=F=>ae("1"))},{default:p(()=>[Jt]),_:1},8,["plain"]),R(v,{round:"",plain:P.value,type:"primary",class:"btn",onClick:a[2]||(a[2]=F=>ae("2"))},{default:p(()=>[$t]),_:1},8,["plain"])])])]),_:2},1032,["name","title"]))),128))]}),_:1},8,["active"])]),s("div",es,[ts,R(y,{modelValue:te.value,"onUpdate:modelValue":a[3]||(a[3]=m=>te.value=m),accordion:"","is-link":!1,border:!1,size:"middle"},{default:p(()=>{var m;return[(c(!0),h(W,null,K((m=l.value)==null?void 0:m.insurerInfoVOList,(b,C)=>(c(),x(r,{key:C,name:"1","value-class":"price"},{title:p(()=>[s("div",null,[ss,A(" "+d(b.insurerName),1)])]),default:p(()=>[A(" "+d(b.insurerDesc),1)]),_:2},1024))),128))]}),_:1},8,["modelValue"])]),G(B)?M("",!0):(c(),h("div",as,[R(v,{plain:"",type:"primary",class:"btn",onClick:Fe},{default:p(()=>[os]),_:1}),R(v,{type:"primary",class:"btn",onClick:De},{default:p(()=>[ns]),_:1})])),R(nt,{show:X.value,onOnClose:we},null,8,["show"])])]}),_:1})}}});var hs=Ye(us,[["__scopeId","data-v-9112a846"]]);export{hs as default};
