import{g as fe,a0 as he,C as c,L as z,M as me,d as u,h as _e,j as D,r as F,k as B,y as s,I as E,z as o,J as $,n as f,G as p,H as Y,m as V,E as j,B as g,F as P,A as X,T as pe,D as Ye}from"./vendor-e9263418.js";import{q as ge,u as ee,g as se,a as te}from"./businessOpportunity-65064208.js";import{_ as ae}from"./index-e4c11be9.js";import{_ as oe}from"./index-654379f5.js";import{u as De}from"./index-b8742a0a.js";const Ce={class:"top"},ke={class:"text"},ye=["src"],Me={class:"top-right"},be={class:"choose-date"},Fe=["onClick"],Be=["src"],Ee={class:"mid"},$e={class:"card-list"},Te={class:"item-top"},Oe=["onClick"],Ve={class:"show-more"},Ue=["src"],we={class:"item-bottom"},Ne={class:"bottom-left"},Ae=["onClick"],Ie=["src"],Le=g(" \u6709\u7528 "),Se=["onClick"],qe=["src"],ze=g(" \u65E0\u7528 "),je={class:"bottom-right"},Pe=["onClick"],Re=g(" \u7535\u8BDD"),We=["src"],xe=["onClick"],Ze=["onClick"],Ge={class:"card-list"},He={class:"item-top"},Je=["onClick"],Ke={class:"show-more"},Qe=["src"],Xe={class:"item-bottom"},es={class:"bottom-left"},ss=["onClick"],ts=["src"],as=g(" \u6709\u7528 "),os=["onClick"],us=["src"],ls=g(" \u65E0\u7528 "),ns={class:"bottom-right"},is=["onClick"],cs=g(" \u7535\u8BDD"),ds=["src"],rs=["onClick"],vs=["onClick"],gs=fe({setup(fs){const{getIconUrl:n}=De(),R=he(),d=c(!1),U=c(""),h=c(0),k=c(!1),ue=[{text:"\u4ECA\u5929",value:0},{text:"\u8FD1\u4E00\u5468",value:1}],C=c(0),r=z([]),v=z([]),m=z([]),le=()=>{k.value=!k.value},W=a=>{m.includes(a)?m.splice(m.indexOf(a),1):m.push(a)},x=a=>{ge({agentCustomerId:a.agentCustomerId,customerType:a.customerType,businessType:"22",nicheIds:a.nicheIds,useType:"TEL",startDate:h.value===0?u().format("YYYY-MM-DD"):u().subtract(7,"day").format("YYYY-MM-DD"),endDate:u().format("YYYY-MM-DD")}).then(e=>{window.location.href=`tel:${e.data.data}`}).catch(e=>{console.log(e),pe("\u83B7\u53D6\u7535\u8BDD\u5931\u8D25")})},Z=a=>{ee({nicheIds:a.nicheIds,nicheUseType:"VST",startDate:h.value===0?u().format("YYYY-MM-DD"):u().subtract(7,"day").format("YYYY-MM-DD"),endDate:u().format("YYYY-MM-DD")}).then(e=>{R.push({name:"customerDetail",query:{agentCustomerId:a.agentCustomerId,customerType:a.customerType},hash:"#2"})})},G=a=>{ee({nicheIds:a.nicheIds,nicheUseType:"CLI",startDate:h.value===0?u().format("YYYY-MM-DD"):u().subtract(7,"day").format("YYYY-MM-DD"),endDate:u().format("YYYY-MM-DD")}).then(e=>{R.push({name:"customerDetail",query:{agentCustomerId:a.agentCustomerId,customerType:a.customerType}})})},T=c(!1),S=c(!1),w=c(!1),N=c(0),O=c(!1),q=c(!1),A=c(!1),I=c(0),L=a=>{a==="nouse"&&(w.value&&(r.splice(0,r.length),w.value=!1),N.value+=1,N.value===1&&(d.value=!0),se({pageNum:N.value,pageSize:10,queryBean:{endDate:u().format("YYYY-MM-DD"),startDate:h.value===0?u().format("YYYY-MM-DD"):u().subtract(7,"day").format("YYYY-MM-DD"),usageStatus:"N",keyWords:U.value||""}}).then(e=>{(e.data.data===null||e.data.data.length===0)&&(T.value=!1,S.value=!0),e.data.data!==null&&r.push(...e.data.data),T.value=!1,d.value=!1}).catch(e=>{console.log(e),d.value=!1})),a==="used"&&(A.value&&(v.splice(0,v.length),A.value=!1),I.value+=1,I.value===1&&(d.value=!0),se({pageNum:I.value,pageSize:10,queryBean:{endDate:u().format("YYYY-MM-DD"),startDate:h.value===0?u().format("YYYY-MM-DD"):u().subtract(7,"day").format("YYYY-MM-DD"),usageStatus:"Y",keyWords:U.value||""}}).then(e=>{console.log(e.data,"!!!!!!!!!!!!!!!!"),(e.data.data===null||e.data.data.length===0)&&(O.value=!1,q.value=!0),e.data.data!==null&&v.push(...e.data.data),O.value=!1,d.value=!1}).catch(e=>{console.log(e),d.value=!1}))},i=a=>{a==="nouse"&&(S.value=!1,T.value=!0,N.value=0,L("nouse")),a==="used"&&(q.value=!1,O.value=!0,I.value=0,L("used"))},H=a=>{Ye.confirm({message:"\u786E\u8BA4\u5220\u9664\u6B64\u6761\u5546\u673A\u5417\uFF1F",theme:"round-button"}).then(()=>{te({nicheIds:a.nicheIds,feedBack:"N",startDate:h.value===0?u().format("YYYY-MM-DD"):u().subtract(7,"day").format("YYYY-MM-DD"),endDate:u().format("YYYY-MM-DD")}).then(e=>{C.value===0?(r.splice(0),i("nouse")):(v.splice(0),i("used"))})}).catch(()=>{})},J=(a,e)=>{a.useFlag!=="Y"&&te({nicheIds:a.nicheIds,feedBack:"Y",startDate:h.value===0?u().format("YYYY-MM-DD"):u().subtract(7,"day").format("YYYY-MM-DD"),endDate:u().format("YYYY-MM-DD")}).then(K=>{C.value===0?r.forEach((y,M)=>{M===e&&(y.useFlag="Y")}):v.forEach((y,M)=>{M===e&&(y.useFlag="Y")})})},ne=({name:a})=>{console.log(a),m.splice(0),a===0?(r.splice(0),i("nouse")):(v.splice(0),i("used"))},ie=a=>{h.value=a.value,k.value=!k.value,C.value===0?(r.splice(0),i("nouse")):(v.splice(0),i("used"))},ce=()=>{C.value===0?(r.splice(0),i("nouse")):(v.splice(0),i("used"))},de=()=>{C.value===0?(r.splice(0),i("nouse")):(v.splice(0),i("used"))};return me(()=>{i("nouse"),console.log(u().subtract(1,"day").format("YYYY-MM-DD"))}),(a,e)=>{const K=F("van-search"),y=F("van-list"),M=F("van-pull-refresh"),Q=F("van-tab"),re=F("van-tabs"),ve=F("ZaPageWrap");return B(),_e(ve,{id:"outer","main-class":"page-businessOpportunity"},{default:D(()=>[s("div",Ce,[s("div",{class:"top-left",onClick:le},[s("div",ke,E(h.value===0?"\u4ECA\u5929":"\u8FD17\u5929"),1),s("img",{src:o(n)("businessOpportunity.chooseImg"),alt:"",class:$({active:k.value})},null,10,ye)]),s("div",Me,[f(K,{modelValue:U.value,"onUpdate:modelValue":e[0]||(e[0]=t=>U.value=t),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D\u3001\u624B\u673A\u53F7\u67E5\u8BE2",shape:"round","left-icon":o(n)("target.searchImg"),onSearch:ce,onClear:de},null,8,["modelValue","left-icon"])])]),p(s("div",be,[(B(),V(P,null,j(ue,(t,l)=>s("div",{key:l,class:$(["date-item",{activited:h.value===l}]),onClick:b=>ie(t)},[g(E(t.text)+" ",1),p(s("img",{src:o(n)("businessOpportunity.chosedImg"),alt:""},null,8,Be),[[Y,h.value===l]])],10,Fe)),64))],512),[[Y,k.value]]),s("div",Ee,[f(re,{active:C.value,"onUpdate:active":e[9]||(e[9]=t=>C.value=t),onClickTab:ne},{default:D(()=>[f(Q,{title:"\u672A\u4F7F\u7528"},{default:D(()=>[p(s("div",$e,[f(M,{modelValue:w.value,"onUpdate:modelValue":e[3]||(e[3]=t=>w.value=t),onRefresh:e[4]||(e[4]=t=>i("nouse"))},{default:D(()=>[f(y,{loading:T.value,"onUpdate:loading":e[1]||(e[1]=t=>T.value=t),finished:S.value,"finished-text":"- \u5DF2\u7ECF\u5230\u5E95\u4E86\u54E6 -",onLoad:e[2]||(e[2]=t=>L("nouse"))},{default:D(()=>[(B(!0),V(P,null,j(o(r),(t,l)=>{var b;return B(),V("div",{key:l,class:"list-item",style:X({backgroundImage:`url(${o(n)("businessOpportunity.itembj")})`})},[s("div",Te,[s("div",{id:"textTitle",class:$(["text",{active:!o(m).includes(l)}])},E(t.message),3),p(s("div",{class:"show-more-out",onClick:_=>W(l)},[s("div",Ve,[g(E(o(m).includes(l)?"\u6536\u8D77":"\u5C55\u5F00"),1),s("img",{src:o(n)("businessOpportunity.showImg"),alt:"",class:$({active:o(m).includes(l)})},null,10,Ue)])],8,Oe),[[Y,((b=t.message)==null?void 0:b.length)>40]])]),s("div",we,[s("div",Ne,[s("div",{class:"userful-area",onClick:_=>J(t,l)},[s("img",{src:t.useFlag==="Y"?o(n)("businessOpportunity.usefulImg"):o(n)("businessOpportunity.usefuldarkImg"),alt:""},null,8,Ie),Le],8,Ae),s("div",{class:"userful-area",onClick:_=>H(t)},[s("img",{src:o(n)("businessOpportunity.uselessImg"),alt:""},null,8,qe),ze],8,Se)]),s("div",je,[s("div",{class:"call",onClick:_=>x(t)},[Re,s("img",{src:o(n)("businessOpportunity.callImg"),alt:""},null,8,We)],8,Pe),s("div",{class:"visit",onClick:_=>Z(t)},"\u62DC\u8BBF",8,xe),s("div",{class:"customerInfo",onClick:_=>G(t)},"\u5BA2\u6237\u4FE1\u606F",8,Ze)])])],4)}),128))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"])],512),[[Y,o(r).length!==0&&!d.value]]),p(f(oe,{vertical:!0},null,512),[[Y,d.value]]),p(f(ae,{title:"\u6682\u65E0\u5546\u673A",class:"empty-class"},null,512),[[Y,o(r).length===0&&!d.value]])]),_:1}),f(Q,{title:"\u5DF2\u4F7F\u7528"},{default:D(()=>[p(s("div",Ge,[f(M,{modelValue:A.value,"onUpdate:modelValue":e[7]||(e[7]=t=>A.value=t),onRefresh:e[8]||(e[8]=t=>i("used"))},{default:D(()=>[f(y,{loading:O.value,"onUpdate:loading":e[5]||(e[5]=t=>O.value=t),finished:q.value,"finished-text":"- \u5DF2\u7ECF\u5230\u5E95\u4E86\u54E6 -",onLoad:e[6]||(e[6]=t=>L("used"))},{default:D(()=>[(B(!0),V(P,null,j(o(v),(t,l)=>{var b;return B(),V("div",{key:l,class:"list-item",style:X({backgroundImage:`url(${o(n)("businessOpportunity.itembj")})`})},[s("div",He,[s("div",{id:"textTitle",class:$(["text",{active:!o(m).includes(l)}])},E(t.message),3),p(s("div",{class:"show-more-out",onClick:_=>W(l)},[s("div",Ke,[g(E(o(m).includes(l)?"\u6536\u8D77":"\u5C55\u5F00"),1),s("img",{src:o(n)("businessOpportunity.showImg"),alt:"",class:$({active:o(m).includes(l)})},null,10,Qe)])],8,Je),[[Y,((b=t.message)==null?void 0:b.length)>40]])]),s("div",Xe,[s("div",es,[s("div",{class:"userful-area",onClick:_=>J(t,l)},[s("img",{src:t.useFlag==="Y"?o(n)("businessOpportunity.usefulImg"):o(n)("businessOpportunity.usefuldarkImg"),alt:""},null,8,ts),as],8,ss),s("div",{class:"userful-area",onClick:_=>H(t)},[s("img",{src:o(n)("businessOpportunity.uselessImg"),alt:""},null,8,us),ls],8,os)]),s("div",ns,[s("div",{class:"call",onClick:_=>x(t)},[cs,s("img",{src:o(n)("businessOpportunity.callImg"),alt:""},null,8,ds)],8,is),s("div",{class:"visit",onClick:_=>Z(t)},"\u62DC\u8BBF",8,rs),s("div",{class:"customerInfo",onClick:_=>G(t)},"\u5BA2\u6237\u4FE1\u606F",8,vs)])])],4)}),128))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"])],512),[[Y,o(v).length!==0&&!d.value]]),p(f(oe,{vertical:!0},null,512),[[Y,d.value]]),p(f(ae,{title:"\u6682\u65E0\u5546\u673A",class:"empty-class"},null,512),[[Y,o(v).length===0&&!d.value]])]),_:1})]),_:1},8,["active"])])]),_:1})}}});export{gs as default};
