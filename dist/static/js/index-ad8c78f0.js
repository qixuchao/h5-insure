import{g as re,Q as _e,C as r,M as ve,d as pe,r as f,h as l,j as E,k as i,y as e,I as u,n as v,m as p,E as F,F as B,z as he,s as j,B as d,a1 as me,a2 as fe,w as S}from"./vendor-89e50ef2.js";import{p as ge,P as Ae,_ as J,a as ke,b as be}from"./pdfPreview-5f167fd2.js";import{_ as ye,a as Ce}from"./pengyouquan-46cbea57.js";import{a as De,g as Ee}from"./proposalList-791786f2.js";import{P as Fe}from"./index-2cfce7c0.js";import{_ as Be}from"./index-1de39856.js";var Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAM1BMVEUAAAAHe/8JfP8HfP8ghf8IfP8Jfv8SgP8Lff8Iev8Kf/8Nf/8Ie/8KfP8Mff8Iff8Ke/9WxKgsAAAAEXRSTlMATTpGCEIdDS0kGBI+NCogMWRIF20AAADeSURBVDjL3ZOxDgMhDENdCOGAg+P/v7aI4oalQ3VT+6YoAaPYAkB2PtQII9bgXcagPSYKoq9GA/JjEXmLjQzHsq1ZY8PBWzmxwx6BZV2zykZAZ5nWLLHRIe9ThEoC5PniGW29c742FxQ9mmJH26GCf0HHrq7AKG54MTfutJMk2gn9mK1aXMeaHbezNYlrzS57RJboCXIuSQHKVHWWl7ip+No4p1SwU1LK+DFEPjWSH5vu++QwXEmb7w2kMRezttAUM/92tn3N+hfZmqSJeuE3rVu2dfvI5dKInahXAfAESeEGZRES0sEAAAAASUVORK5CYII=";const n=V=>(me("data-v-13f35a62"),V=V(),fe(),V),Re={class:"page-composition-proposal"},xe={class:"head-bg"},Ie={class:"container head-cover"},Pe={class:"info-detail"},Le={class:"name"},Se={class:"img"},we=["src"],Ne={clase:"p1"},Oe={class:"p2"},Me={class:"fe"},Ue=d(" \u9996\u5E74\u4FDD\u8D39\uFF1A "),$e=n(()=>e("div",{class:"line"},null,-1)),Ke={class:"tp"},Te={class:"container"},He={class:"common-title"},Ge={class:"title"},We=n(()=>e("img",{src:Ve,class:"ig"},null,-1)),ze=n(()=>e("div",{class:"text-detail"},"\u6761\u6B3E\u8BE6\u60C5",-1)),je={class:"product-detail"},Je=n(()=>e("div",{class:"line2"},null,-1)),Qe={class:"container"},Xe=n(()=>e("div",{class:"common-title"},"\u5229\u76CA\u6F14\u793A",-1)),Ze={class:"benefit"},qe={class:"benefit-title"},Ye=n(()=>e("div",{class:"line"},null,-1)),et={key:0},tt={class:"box"},st={class:"box-title"},at=n(()=>e("img",{src:J,alt:""},null,-1)),ot=d(" \u4FDD\u5355\u5E74\u5EA6"),nt=d("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),lt=d("\u5C81\u65F6 "),ut=n(()=>e("img",{src:J,alt:""},null,-1)),it={class:"box-price"},dt={class:"text1"},ct={class:"text2"},rt={class:"slider"},_t=n(()=>e("img",{src:ke,alt:""},null,-1)),vt=[_t],pt={style:{flex:"1"}},ht={class:"custom-button"},mt=n(()=>e("img",{src:be,alt:""},null,-1)),ft=[mt],gt={key:1},At=n(()=>e("p",{class:"slider-dec"},"\u62D6\u52A8\u6309\u94AE\u67E5\u770B\u4E0D\u540C\u5E74\u9F84\u4FDD\u969C",-1)),kt={class:"btn-two"},bt=d("\u56FE\u8868\u5C55\u793A"),yt=d("\u8D8B\u52BF\u5C55\u793A"),Ct={class:"container"},Dt=n(()=>e("div",{class:"common-title"},"\u4FDD\u9669\u516C\u53F8\u7B80\u4ECB",-1)),Et=n(()=>e("span",{class:"poiner"},null,-1)),Ft={class:"content"},Bt=n(()=>e("div",{class:"wechat"},[e("img",{src:ye,alt:""})],-1)),Vt=n(()=>e("div",{class:"txt"},"\u5FAE\u4FE1\u597D\u53CB",-1)),Rt=[Bt,Vt],xt={class:"bx"},It=n(()=>e("img",{src:Ce,alt:""},null,-1)),Pt=[It],Lt=n(()=>e("div",{class:"txt"},"\u670B\u53CB\u5708",-1)),St={key:0,class:"footer-btn"},wt=d("\u751F\u6210PDF"),Nt=d("\u5206\u4EAB\u8BA1\u5212\u4E66"),Ot=re({setup(V){const Q=_e(),{isShare:X,id:w}=Q.query,Z=[{title:"\u9669\u79CD\u540D\u79F0",dataIndex:"key1",width:180},{title:"\u4FDD\u989D",dataIndex:"key2"},{title:"\u4FDD\u969C\u671F\u95F4",dataIndex:"key3",width:110},{title:"\u7F34\u8D39\u671F\u95F4",dataIndex:"key4",width:110},{title:"\u4FDD\u8D39",dataIndex:"key5",width:120}],N=r([]),P=r(0),a=r(),R=r(0),A=r([]),k=r(0),b=r(0),O=r(""),h=r(0),y=r(!0),L=r(!1),q={1:"\u7537",2:"\u5973"},x=()=>{a.value.benefitRiskResultVOList[P.value].benefitRiskItemResultVOList[0].dataList.map(s=>{h.value.toString()===s[s.length-1]&&(A.value=s)})},Y=()=>{a.value.benefitRiskResultVOList[0].benefitRiskItemResultVOList[0].dataList.map((s,t)=>{s.push(t+1),s.push((R.value+t+1).toString())})},ee=s=>{const t=s.split("_");if(s==="to_life")return"\u4FDD\u7EC8\u751F";switch(t[0]){case"year":return`${t[1]}\u5E74`;case"month":return`${t[1]}\u6708`;case"day":return`${t[1]}\u5929`;case"to":return`\u4FDD\u81F3${t[1]}\u5C81`;default:return""}},te=s=>{const t=s.split("_");switch(t[0]){case"year":return`${t[1]}\u5E74\u4EA4`;case"month":return`${t[1]}\u6708\u4EA4`;case"to":return`\u4EA4\u81F3${t[1]}\u5C81`;case"single":return"\u8DB8\u7F34";default:return""}};ve(()=>{De(Number(w)).then(s=>{var t,C,D;console.log(">>>>>>>>>>>",(t=s.data)==null?void 0:t.proposalInsuredVOList[0]),a.value=(C=s.data)==null?void 0:C.proposalInsuredVOList[0],R.value=pe().diff(a.value.birthday,"y"),k.value=a.value.benefitRiskResultVOList[0].ageBegin,b.value=a.value.benefitRiskResultVOList[0].ageEnd,h.value=R.value+1,Y(),x(),(D=a.value)==null||D.proposalProductRiskVOList.map(g=>{N.value.push({key1:g.riskName,key2:g.amount,key3:ee(g.coveragePeriod),key4:te(g.chargePeriod),key5:g.premium})})})});const se=s=>{x()},ae=()=>{h.value>b.value-1||(h.value+=1,x())},oe=()=>{h.value>k.value&&(h.value-=1,x())},ne=s=>{P.value=s.name,k.value=a.value.benefitRiskResultVOList[s.name].ageBegin,b.value=a.value.benefitRiskResultVOList[s.name].ageEnd},M=s=>{s==="1"?y.value=!0:y.value=!1},U=s=>{const t={title:"\u8BA1\u5212\u4E66",desc:"\u60A8\u7684\u8D34\u5FC3\u4FDD\u9669\u7BA1\u5BB6",link:`${window.location.href}?isShare=1`,imgUrl:"",success(){console.log("f\u5206\u4EAB\u6210\u529F")}};S.ready(()=>{console.log("ready"),s==="1"?S.onMenuShareAppMessage(t):S.onMenuShareTimeline(t)})},le=()=>{Ee(w.toString()).then(s=>{console.log(">>>",s.data),ge([{title:"\u7EC4\u5408\u8BA1\u5212\u4E66",url:s.data}],0)})};return(s,t)=>{const C=f("van-collapse-item"),D=f("van-collapse"),g=f("van-slider"),I=f("van-button"),ue=f("van-tab"),ie=f("van-tabs"),de=f("van-action-sheet"),ce=f("ProPageWrap");return l(),E(ce,null,{default:i(()=>{var $,K,T,H,G,W;return[e("div",Re,[e("div",xe,u(($=a.value)==null?void 0:$.name)+"\u5148\u751F\u7684\u8BA1\u5212",1),e("div",Ie,[e("div",Pe,[e("div",Le,[e("div",Se,[e("img",{src:(K=a.value)==null?void 0:K.avatar,alt:""},null,8,we)]),e("div",null,[e("p",Ne,u((T=a.value)==null?void 0:T.name),1),e("p",Oe,u(q[(H=a.value)==null?void 0:H.gender])+"\uFF0C"+u(R.value)+"\u5C81",1)])]),e("div",Me,[Ue,e("span",null,"\xA5"+u((G=a.value)==null?void 0:G.totalPremium),1)])]),$e,e("div",Ke,[v(Fe,{columns:Z,class:"table","data-source":N.value},null,8,["data-source"])])]),e("div",Te,[(l(!0),p(B,null,F((W=a.value)==null?void 0:W.liabilityByRiskVOList,(o,c)=>(l(),p("div",{key:c},[e("div",He,[e("div",Ge,[We,d(" "+u(o.riskName),1)]),ze]),e("div",je,[v(D,{modelValue:o.riskName1,"onUpdate:modelValue":_=>o.riskName1=_,accordion:"","is-link":!1,border:!1,size:"middle"},{default:i(()=>[(l(!0),p(B,null,F(o.proposalRiskLiabilityVOList,(_,m)=>(l(),E(C,{key:m,title:_.liabilityName,name:m,"value-class":"price",value:_.liabilityIndemnityContent},{default:i(()=>[d(u(_.liabilityDesc),1)]),_:2},1032,["title","name","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),Je]))),128))]),e("div",Qe,[Xe,v(ie,{active:P.value,"title-active-color":"#0D6EFE","title-inactive-color":"#393D46",shrink:"",scrollspy:"",onClickTab:ne},{default:i(()=>{var o;return[(l(!0),p(B,null,F((o=a.value)==null?void 0:o.benefitRiskResultVOList,(c,_)=>(l(),E(ue,{key:_,name:_,title:c.riskName},{default:i(()=>[e("div",Ze,[e("div",qe,u(c==null?void 0:c.riskName),1),Ye,y.value?(l(),p("div",et,[e("div",tt,[e("p",st,[at,ot,e("span",null,u(A.value[A.value.length-2]),1),nt,e("span",null,u(A.value[A.value.length-1]),1),lt,ut]),e("div",it,[(l(!0),p(B,null,F(c.benefitRiskItemResultVOList[0].headers,(m,z)=>(l(),p("div",{key:z,style:{width:"33%"}},[e("p",dt,u(A.value[z]),1),e("p",ct,u(m)+"(\u5143\uFF09",1)]))),128))])]),e("div",rt,[e("div",{class:"add lf",onClick:oe},vt),e("div",pt,[k.value?(l(),E(g,{key:0,modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=m=>h.value=m),min:k.value,max:b.value,"bar-height":"8px",onChange:se},{button:i(()=>[e("div",ht,u(h.value)+" \u5C81",1)]),_:1},8,["modelValue","min","max"])):j("",!0)]),e("div",{class:"add rg",onClick:ae},ft)])])):(l(),p("div",gt,[v(Ae,{min:k.value,max:b.value,data:c.benefitRiskItemResultVOList[0].benefitRiskItemList},null,8,["min","max","data"])])),At,e("div",kt,[v(I,{round:"",plain:!y.value,type:"primary",class:"btn",onClick:t[1]||(t[1]=m=>M("1"))},{default:i(()=>[bt]),_:1},8,["plain"]),v(I,{round:"",plain:y.value,type:"primary",class:"btn",onClick:t[2]||(t[2]=m=>M("2"))},{default:i(()=>[yt]),_:1},8,["plain"])])])]),_:2},1032,["name","title"]))),128))]}),_:1},8,["active"])]),e("div",Ct,[Dt,v(D,{modelValue:O.value,"onUpdate:modelValue":t[3]||(t[3]=o=>O.value=o),accordion:"","is-link":!1,border:!1,size:"middle"},{default:i(()=>{var o;return[(l(!0),p(B,null,F((o=a.value)==null?void 0:o.insurerInfoVOList,(c,_)=>(l(),E(C,{key:_,name:"1","value-class":"price"},{title:i(()=>[e("div",null,[Et,d(" "+u(c.insurerName),1)])]),default:i(()=>[d(" "+u(c.insurerDesc),1)]),_:2},1024))),128))]}),_:1},8,["modelValue"])]),v(de,{show:L.value,"onUpdate:show":t[6]||(t[6]=o=>L.value=o),"cancel-text":"\u53D6\u6D88","close-on-click-action":""},{default:i(()=>[e("div",Ft,[e("div",{class:"bx",onClick:t[4]||(t[4]=o=>U("1"))},Rt),e("div",xt,[e("div",{class:"friend",onClick:t[5]||(t[5]=o=>U("2"))},Pt),Lt])])]),_:1},8,["show"]),he(X)?j("",!0):(l(),p("div",St,[v(I,{plain:"",type:"primary",class:"btn",onClick:le},{default:i(()=>[wt]),_:1}),v(I,{type:"primary",class:"btn",onClick:t[7]||(t[7]=o=>L.value=!0)},{default:i(()=>[Nt]),_:1})]))])]}),_:1})}}});var Gt=Be(Ot,[["__scopeId","data-v-13f35a62"]]);export{Gt as default};
