var Re=Object.defineProperty;var te=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var se=(e,t,n)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t)=>{for(var n in t||(t={}))we.call(t,n)&&se(e,n,t[n]);if(te)for(var n of te(t))De.call(t,n)&&se(e,n,t[n]);return e};import{l as Be,g as ne,r as R,h as c,m as p,n as A,k as d,y as s,I as r,z as ie,ah as Ee,Q as Fe,C as _,X as Ie,M as Se,d as Ve,j as S,s as K,E as V,F as x,B as m,a1 as xe,a2 as Oe,w as q}from"./vendor-94f9fb13.js";import{P as Pe,_ as le,a as Me,b as Ne}from"./index-c1e86173.js";import{a as Ke,g as We}from"./proposalList-ba1671dd.js";import{_ as Le,S as Ue,x as ae,y as He,O as oe}from"./index-ab3e6ac3.js";import{P as Ge}from"./index-d897a103.js";var qe="/static/assets/male.099176e3.png",je="/static/assets/female.d4f701ab.png",Te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAM1BMVEUAAAAHe/8JfP8HfP8ghf8IfP8Jfv8SgP8Lff8Iev8Kf/8Nf/8Ie/8KfP8Mff8Iff8Ke/9WxKgsAAAAEXRSTlMATTpGCEIdDS0kGBI+NCogMWRIF20AAADeSURBVDjL3ZOxDgMhDENdCOGAg+P/v7aI4oalQ3VT+6YoAaPYAkB2PtQII9bgXcagPSYKoq9GA/JjEXmLjQzHsq1ZY8PBWzmxwx6BZV2zykZAZ5nWLLHRIe9ThEoC5PniGW29c742FxQ9mmJH26GCf0HHrq7AKG54MTfutJMk2gn9mK1aXMeaHbezNYlrzS57RJboCXIuSQHKVHWWl7ip+No4p1SwU1LK+DFEPjWSH5vu++QwXEmb7w2kMRezttAUM/92tn3N+hfZmqSJeuE3rVu2dfvI5dKInahXAfAESeEGZRES0sEAAAAASUVORK5CYII=";const i=(e,t)=>{window.AppJSInterface?window.AppJSInterface[e](JSON.stringify(t)):window.webkit.messageHandlers&&window.webkit.messageHandlers[e].postMessage(JSON.stringify(t))};function l(e){console.log(e)}const Ye={appReady(){return new Promise((e,t)=>{const n=setInterval(()=>{window.AppJSInterface||window.webkit&&window.webkit.messageHandlers?(clearInterval(n),e("success")):t("Jsbridge\u521D\u59CB\u5316\u5931\u8D25\uFF1A\u627E\u4E0D\u5230window.AppJSInterface\u6216\u8005window.webkit.messageHandlers")},100)})},showNavMask(e){return this.appReady().then(()=>{i("showNavShadow",{visible:e})}).catch(t=>{})},getNativeCookies(e){return this.appReady().then(()=>{i("getCookies",{cbname:e})}).catch(t=>new Error("\u8C03\u7528\u5931\u8D25"))},shareConfig(e){this.appReady().then(()=>{let t;e.type==="image"?t={type:"image",link:e.link,cbname:e.cbname}:t={img:e.img,title:e.title,desc:e.desc,link:e.link,cbname:e.cbname},i("configWXShare",t)}).catch(t=>{l(t)})},callLogout(e){return this.appReady().then(()=>{i("logout",{cbname:e})}).catch(t=>{l(t)})},importCustomersFromNative(e){return this.appReady().then(()=>{i("importCustomers",{cbname:e})}).catch(t=>{l(t)})},callImage(e){this.appReady().then(()=>{i("choosePhoto",{cbname:e,limit:"30M"})}).catch(t=>{l(t)})},openPDFWithUrl(e,t){this.appReady().then(()=>{i("openPDFDoc",{title:e,link:t})}).catch(n=>{l(n)})},openWebView(e,t,n="true"){this.appReady().then(()=>{i("openWebView",{title:e,link:t,showProgress:n})}).catch(w=>{l(w)})},openNewWebForShare({link:e,title:t,desc:n,img:w}){this.appReady().then(()=>{i("openNewWebForShare",{link:e,title:t,desc:n,img:w})}).catch(D=>{l(D)})},goback(){this.appReady().then(()=>{i("goback","")}).catch(e=>{l(e)})},closeWebView(e){let t={cbname:""};Be.exports.isEmpty(t)||(t=G(G({},t),e)),this.appReady().then(()=>{i("closeWebview",t)}).catch(n=>{l(n)})},downloadImg(e){this.appReady().then(()=>{i("downloadImg",e)}).catch(t=>{l(t)})},jumpProduct(e){this.appReady().then(()=>{i("jumpProduct",e)}).catch(t=>{l(t)})},jumpSignResult(){this.appReady().then(()=>{i("jumpSignResult","")}).catch(e=>{l(e)})},downloadVideo(e){this.appReady().then(()=>{i("downloadVideo",e)}).catch(t=>{l(t)})},downloadImgs(e){this.appReady().then(()=>{i("downloadImgs",e)}).catch(t=>{l(t)})},openWeiXin(){this.appReady().then(()=>{i("openWeiXin","")}).catch(e=>{l(e)})},previewImgs(e){this.appReady().then(()=>{i("previewImgs",e)}).catch(t=>{l(t)})},copyToClipboard(e){this.appReady().then(()=>{i("copyToClipboard",e)}).catch(t=>{l(t)})},shareWXForMoments(e){this.appReady().then(()=>{i("shareWXForMoments",e)}).catch(t=>{l(t)})},previewVideo(e){this.appReady().then(()=>{i("previewVideo",e)}).catch(t=>{l(t)})},getContacts(e){return this.appReady().then(()=>{i("na_getContacts",{cbname:e})}).catch(t=>{l(t)})},getLocation(e){this.appReady().then(()=>i("na_startLocation",{param:e})).catch(t=>{l(t)})}};var Qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAADqCAMAAABUZB2/AAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMAA0IJ+AYTHPIkINCmF4IN/Hx1SCgLw2OhmzUrGdZVOatMD8q2lnDs5t2xjIhaUC/iaZExvGxePgkCneYAAAXCSURBVHja7dzZdtowEAbgX17wim1sY/Z93wkQmPd/stKmaWkCwT3H8vgi3yVXOkiWRqORwO5lB3Zr6oGZ7hIp4OWfiCgCK8Ohqy04tfb00waMFJN+qYHPRqM3r2AT0rsQTMSB/qiAh7qkvzywKCV0YwUOdoduTcCgOad/NJC/yKR/uchdLaAP+sibR5+MkS9Rp89OyJU/pjsS5Knt0D0OchTv6a4O8nOZ0X0L5Kar0QNz5GUa0CMz5GRFj2nIhd6nryAPpYS+pEM+u0NfG0K63ZyeKEO2yKRnbEh21uipGHJVKIUjZBINSqMHiapjSkWBPOURpRNBGmtBKW0hS29GaW0gyVaj1GqQ4zWg9F4gxZpSkJsb0F1KQXJuQG12w8PSMSklDxKVjtvptTEzemKFHPitweuqv6AbXLmBC93gyg2IGb0bnxYBU26gf7sDFrZS89xknndu4ExvZmX8pV7Hyxn5KdMVe0J9RD8dwMqjK0cHqyYRmTF4iRlRDdzq1Ae7zb4EdqULvn379u1b8dWcM9i59AJ2ulIGN1+A32rWBbsxfwHRlcXfH3EBYjokgQJuYmz64KeD3aYABX6qRm1wK02W+HalNwZgF5EDdkaFPxlQCMqpAKv4hDyw888WuFVRAPUF/yqODvH3BkQT7Hoq2A21Gf/IbI1OKAD+7rCn/DtQVKgOdsqyADOVTDrQ2vl46rBqQwofcAIDCSmYHo74iq+RDRlczUASHDFxLCQ0gGLhseYU2es10Q+2KOv4pVlRsQgueKQECbo0gt3GrWrDEaiJ+03WDsiaAbXjCXwk8ELug0rUNTL2oikQuEfp7HCXXUbG1lTBAwLxyPjcNgsZU4ALHnM/94jYUxOZCp+E7UNP/fRTw0G2zloX/0rx7wtkqSxQxhNTauDWsb5DlsQoKeMZa1/5MEpWyFI83/v4X8bKQKaGLTznd2sSZ+zVWSCFHS1u2mAuBTIUB5qBFITr4Y+BuUSWxCbE/yvbyJBAWkqtjd82TWRq6kRIJ6HLnxFBMbKU0BbphPUW3vjrPjKlD3T2PZeK1LaKjl/qSYxM1fcKUtKoip/8uWYjUw4dkY5aH+ONP8A7rgO0KPMmCIG0jpcqrqp7ipCtSHORkks1XInXEzK2odSNqDgtAIZA9lQV/0N3HBuZEzrS6TZ6AOxFR0XWzqkzLUuqAQJVC5kbBGkb0aq0Uep0IYEQQHohJZBCRyr1cQvASxsyjIMWUtBNMmoTATlcbYs0St2SSQPIYVSRhg2BXghpjDKeatGo04Y8r8EET3VNjULIE2srPDMcVOMXyNTGM9V90INkamOCL1iGmNMWkjU108BD3aCveiMB2bY9WEPcE0/RNhsCuah25hY+UoU+ox1K0biHPBhJRxihgb8E1qaC9cQGxhQiHwY8mqDpXRDXmgjnNXjvec1hpYq8KG6ECnmY0gohHdA28MsOOVM8BVFjc5t9iIpwylUzp+BXYj/41OsFOI5/pQ7YDdcRuBWgPAOWtuSvvN2aDfArs9f/6m4BPs9pEYoLq2v+soQilMVvi7B6bsxX8Cuzz1PN0RHslrQGu2qFPZSJ+wbYjWkCdu3GEMysAsyVIgn467CFt2fvjFIBKizF6MRfYRnPFwW4x1Riv0OknviDKYRFCCtFpQVm5Sl7HAOMixBERB32e20W+5YPUDt79kGJcuKwrxk+BPuAsGch2L0U4YkbKOyBzGDJ/3mKRRFeTDD4L/dVChDiK2QWYESs2LMhahFu3jboAHaDOfvaGZf4XyooLRY2uLVHI/Y/og2dfd8ZaQVYMTyqgJkO8O873T7/tVvbZH+78cpiP/C0R+yTdUHej1TX7MF1WIBJygqIPTkGbNi3fMMD/yQFl1ywsxL2OKZbgEO+nWay/w/QG+yHW+oGYE+X9vlDKaA7Zw8hFJ//XKmpOfxHOnaH/cOoHvlfsBRLjf8tNNGYFaGMrgC1CAXwA5uZT4G1yHw0AAAAAElFTkSuQmCC";const Xe={class:"com-za-share-overlay"},Ze={class:"block"},Je=["src"],ze=ne({props:{show:{type:Boolean,default:!1},text:{type:String,default:"\u70B9\u51FB\u5DE6\u4E0A\u89D2\xB7\xB7\xB7\u8F6C\u53D1\u5206\u4EAB~"}},emits:["on-close"],setup(e,{emit:t}){const n=()=>{t("on-close",!1)};return(w,D)=>{const O=R("van-overlay");return c(),p("div",Xe,[A(O,{show:e.show,"z-index":"999",onClick:n},{default:d(()=>[s("div",{class:"wrapper",onClick:D[0]||(D[0]=Ee(()=>{},["stop"]))},[s("div",Ze,r(e.text),1),s("img",{src:ie(Qe),alt:""},null,8,Je)])]),_:1},8,["show"])])}}});const h=e=>(xe("data-v-6366c9c6"),e=e(),Oe(),e),$e={class:"page-composition-proposal"},et={class:"head-bg"},tt={class:"container head-cover"},st={class:"info-detail"},at={class:"name"},ot={class:"img"},nt={key:0,src:qe},it={key:1,src:je},lt={clase:"p1"},ut={class:"p2"},ct={class:"fe"},rt=m(" \u9996\u5E74\u4FDD\u8D39\uFF1A "),dt=h(()=>s("div",{class:"line"},null,-1)),pt={class:"tp"},ht={class:"container"},vt={class:"common-title"},_t={class:"title"},mt=h(()=>s("img",{src:Te,class:"ig"},null,-1)),gt=h(()=>s("div",{class:"text-detail"},"\u6761\u6B3E\u8BE6\u60C5",-1)),At={class:"product-detail"},ft=h(()=>s("div",{class:"line2"},null,-1)),yt={class:"container"},kt=h(()=>s("div",{class:"common-title"},"\u5229\u76CA\u6F14\u793A",-1)),Ct={class:"benefit"},bt={class:"benefit-title"},Rt=h(()=>s("div",{class:"line"},null,-1)),wt={key:0},Dt={class:"box"},Bt={class:"box-title"},Et=h(()=>s("img",{src:le,alt:""},null,-1)),Ft=m(" \u4FDD\u5355\u5E74\u5EA6"),It=m("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),St=m("\u5C81\u65F6 "),Vt=h(()=>s("img",{src:le,alt:""},null,-1)),xt={class:"box-price"},Ot={class:"text1"},Pt={class:"text2"},Mt={class:"slider"},Nt=h(()=>s("img",{src:Me,alt:""},null,-1)),Kt=[Nt],Wt={style:{flex:"1"}},Lt={class:"custom-button"},Ut=h(()=>s("img",{src:Ne,alt:""},null,-1)),Ht=[Ut],Gt={key:1},qt=h(()=>s("p",{class:"slider-dec"},"\u62D6\u52A8\u6309\u94AE\u67E5\u770B\u4E0D\u540C\u5E74\u9F84\u4FDD\u969C",-1)),jt={class:"btn-two"},Tt=m("\u56FE\u8868\u5C55\u793A"),Yt=m("\u8D8B\u52BF\u5C55\u793A"),Qt={class:"container"},Xt=h(()=>s("div",{class:"common-title"},"\u4FDD\u9669\u516C\u53F8\u7B80\u4ECB",-1)),Zt=h(()=>s("span",{class:"poiner"},null,-1)),Jt={key:0,class:"footer-btn"},zt=m("\u751F\u6210PDF"),$t=m("\u5206\u4EAB\u8BA1\u5212\u4E66"),es=ne({setup(e){const t=Fe(),{isShare:n,id:w}=t.query,D=[{title:"\u9669\u79CD\u540D\u79F0",dataIndex:"key1",width:180},{title:"\u4FDD\u989D",dataIndex:"key2"},{title:"\u4FDD\u969C\u671F\u95F4",dataIndex:"key3",width:110},{title:"\u7F34\u8D39\u671F\u95F4",dataIndex:"key4",width:110},{title:"\u4FDD\u8D39",dataIndex:"key5",width:120}],O=_([]),W=_(0),u=_(),P=_(0),B=_([]),E=_(0),F=_(0),j=_(""),L=_(""),U=_(!1),k=_(0),I=_(!0),ue={1:"\u7537",2:"\u5973"},H=a=>a===1;Ie(()=>u.value,a=>{const{gender:o,name:f}=a;H(1)?L.value=`${f}\u5148\u751F\u7684\u8BA1\u5212\u4E66`:L.value=`${f}\u5973\u58EB\u7684\u8BA1\u5212\u4E66`});const M=()=>{u.value.benefitRiskResultVOList[W.value].benefitRiskItemResultVOList[0].dataList.map(a=>{k.value.toString()===a[a.length-1]&&(B.value=a)})},ce=()=>{u.value.benefitRiskResultVOList[0].benefitRiskItemResultVOList[0].dataList.map((a,o)=>{a.push(o+1),a.push((P.value+o+1).toString())})},re=a=>{const o=a.split("_");if(a==="to_life")return"\u4FDD\u7EC8\u751F";switch(o[0]){case"year":return`${o[1]}\u5E74`;case"month":return`${o[1]}\u6708`;case"day":return`${o[1]}\u5929`;case"to":return`\u4FDD\u81F3${o[1]}\u5C81`;default:return""}},de=a=>{const o=a.split("_");switch(o[0]){case"year":return`${o[1]}\u5E74\u4EA4`;case"month":return`${o[1]}\u6708\u4EA4`;case"to":return`\u4EA4\u81F3${o[1]}\u5C81`;case"single":return"\u8DB8\u7F34";default:return""}},T=()=>{const a=`${oe}?isShare=1`,o=`${oe}/api/app/officialAccount/outerUserAuth?systemCode=BAO_A&skipUrl=${encodeURIComponent(a)}`;return{title:`${u.value.name}\u7684\u8BA1\u5212\u4E66`,desc:"\u60A8\u7684\u8D34\u5FC3\u4FDD\u9669\u7BA1\u5BB6",link:o,img:"",success(){console.log("\u5206\u4EAB\u6210\u529F\u56DE\u8C03")}}},pe=()=>{const a=T();console.log(a),ae()&&q.ready(()=>{console.log("ready"),q.updateAppMessageShareData(a),q.updateTimelineShareData(a)})};Se(()=>{t.query.token&&new Ue({source:"localStorage"}).set("token",t.query.token),Ke(Number(w)).then(a=>{var o,f;u.value=(o=a.data)==null?void 0:o.proposalInsuredVOList[0],P.value=Ve().diff(u.value.birthday,"y"),E.value=u.value.benefitRiskResultVOList[0].ageBegin,F.value=u.value.benefitRiskResultVOList[0].ageEnd,k.value=P.value+1,ce(),M(),(f=u.value)==null||f.proposalProductRiskVOList.map(C=>{O.value.push({key1:C.riskName,key2:C.amount,key3:re(C.coveragePeriod),key4:de(C.chargePeriod),key5:C.premium})}),pe()})});const he=a=>{M()},ve=()=>{k.value>F.value-1||(k.value+=1,M())},_e=()=>{k.value>E.value&&(k.value-=1,M())},me=a=>{W.value=a.name,E.value=u.value.benefitRiskResultVOList[a.name].ageBegin,F.value=u.value.benefitRiskResultVOList[a.name].ageEnd},Y=a=>{a==="1"?I.value=!0:I.value=!1},ge=a=>{const o=T();if(He()){Ye.shareConfig(o);return}ae()&&(U.value=!0)},Ae=()=>{U.value=!1},fe=()=>{We(w.toString()).then(({code:a,data:o,message:f})=>{a==="10000"&&(window.location.href=f)})};return(a,o)=>{const f=R("van-collapse-item"),C=R("van-collapse"),ye=R("van-slider"),N=R("van-button"),ke=R("van-tab"),Ce=R("van-tabs"),be=R("ProPageWrap");return c(),S(be,null,{default:d(()=>{var Q,X,Z,J,z,$;return[s("div",$e,[s("div",et,r(L.value),1),s("div",tt,[s("div",st,[s("div",at,[s("div",ot,[H((Q=u.value)==null?void 0:Q.gender)?(c(),p("img",nt)):K("",!0),H((X=u.value)==null?void 0:X.gender)?K("",!0):(c(),p("img",it))]),s("div",null,[s("p",lt,r((Z=u.value)==null?void 0:Z.name),1),s("p",ut,r(ue[(J=u.value)==null?void 0:J.gender])+"\uFF0C"+r(P.value)+"\u5C81",1)])]),s("div",ct,[rt,s("span",null,"\xA5"+r((z=u.value)==null?void 0:z.totalPremium),1)])]),dt,s("div",pt,[A(Ge,{columns:D,class:"table","data-source":O.value},null,8,["data-source"])])]),s("div",ht,[(c(!0),p(x,null,V(($=u.value)==null?void 0:$.liabilityByRiskVOList,(v,g)=>(c(),p("div",{key:g},[s("div",vt,[s("div",_t,[mt,m(" "+r(v.riskName),1)]),gt]),s("div",At,[A(C,{modelValue:v.riskName1,"onUpdate:modelValue":y=>v.riskName1=y,accordion:"","is-link":!1,border:!1,size:"middle"},{default:d(()=>[(c(!0),p(x,null,V(v.proposalRiskLiabilityVOList,(y,b)=>(c(),S(f,{key:b,title:y.liabilityName,name:b,"value-class":"price",value:y.liabilityIndemnityContent},{default:d(()=>[m(r(y.liabilityDesc),1)]),_:2},1032,["title","name","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),ft]))),128))]),s("div",yt,[kt,A(Ce,{active:W.value,"title-active-color":"#0D6EFE","title-inactive-color":"#393D46",shrink:"",scrollspy:"",onClickTab:me},{default:d(()=>{var v;return[(c(!0),p(x,null,V((v=u.value)==null?void 0:v.benefitRiskResultVOList,(g,y)=>(c(),S(ke,{key:y,name:y,title:g.riskName},{default:d(()=>[s("div",Ct,[s("div",bt,r(g==null?void 0:g.riskName),1),Rt,I.value?(c(),p("div",wt,[s("div",Dt,[s("p",Bt,[Et,Ft,s("span",null,r(B.value[B.value.length-2]),1),It,s("span",null,r(B.value[B.value.length-1]),1),St,Vt]),s("div",xt,[(c(!0),p(x,null,V(g.benefitRiskItemResultVOList[0].headers,(b,ee)=>(c(),p("div",{key:ee,style:{width:"33%"}},[s("p",Ot,r(B.value[ee]),1),s("p",Pt,r(b)+"(\u5143\uFF09",1)]))),128))])]),s("div",Mt,[s("div",{class:"add lf",onClick:_e},Kt),s("div",Wt,[E.value?(c(),S(ye,{key:0,modelValue:k.value,"onUpdate:modelValue":o[0]||(o[0]=b=>k.value=b),min:E.value,max:F.value,"bar-height":"8px",onChange:he},{button:d(()=>[s("div",Lt,r(k.value)+" \u5C81",1)]),_:1},8,["modelValue","min","max"])):K("",!0)]),s("div",{class:"add rg",onClick:ve},Ht)])])):(c(),p("div",Gt,[A(Pe,{min:E.value,max:F.value,data:g.benefitRiskItemResultVOList[0].benefitRiskItemList},null,8,["min","max","data"])])),qt,s("div",jt,[A(N,{round:"",plain:!I.value,type:"primary",class:"btn",onClick:o[1]||(o[1]=b=>Y("1"))},{default:d(()=>[Tt]),_:1},8,["plain"]),A(N,{round:"",plain:I.value,type:"primary",class:"btn",onClick:o[2]||(o[2]=b=>Y("2"))},{default:d(()=>[Yt]),_:1},8,["plain"])])])]),_:2},1032,["name","title"]))),128))]}),_:1},8,["active"])]),s("div",Qt,[Xt,A(C,{modelValue:j.value,"onUpdate:modelValue":o[3]||(o[3]=v=>j.value=v),accordion:"","is-link":!1,border:!1,size:"middle"},{default:d(()=>{var v;return[(c(!0),p(x,null,V((v=u.value)==null?void 0:v.insurerInfoVOList,(g,y)=>(c(),S(f,{key:y,name:"1","value-class":"price"},{title:d(()=>[s("div",null,[Zt,m(" "+r(g.insurerName),1)])]),default:d(()=>[m(" "+r(g.insurerDesc),1)]),_:2},1024))),128))]}),_:1},8,["modelValue"])]),ie(n)?K("",!0):(c(),p("div",Jt,[A(N,{plain:"",type:"primary",class:"btn",onClick:fe},{default:d(()=>[zt]),_:1}),A(N,{type:"primary",class:"btn",onClick:ge},{default:d(()=>[$t]),_:1})])),A(ze,{show:U.value,onOnClose:Ae},null,8,["show"])])]}),_:1})}}});var ls=Le(es,[["__scopeId","data-v-6366c9c6"]]);export{ls as default};
