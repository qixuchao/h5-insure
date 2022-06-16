import{g as le,C as t,a4 as _e,d as m,k as i,h as F,L as ee,M as he,j as Y,r as $,m as x,n as r,z as n,s as A,y as a,ah as ae,I as L,G as M,H as P,F as ge,E as fe,J as be,B as C,a2 as ye,a3 as Ee,T as te}from"./vendor-e9263418.js";import{a as G,_ as se,s as Ce}from"./target-1dc74256.js";import{a as Te,_ as Ye}from"./index-a8989421.js";import{_ as oe}from"./index-e4c11be9.js";import{T as j,D as Se}from"./Divided-522e7e8e.js";import{a as z,r as W}from"./detailList-ff721244.js";import{S as Be,u as ke}from"./index-b8742a0a.js";import{_ as we}from"./plugin-vue_export-helper-46f75680.js";import"./select-105475a6.js";const xe=le({props:{visible:{type:Boolean,default:!1},memberType:{type:String,default:""},memberCode:{type:String,default:""},mode:{type:String,default:"single"}},emits:["on-submit","update:visible"],setup(v,{emit:S}){const o=v,g=t([]),p=t([]);_e(()=>o.visible,d=>{p.value=[],d&&G({memberCode:o.memberCode,memberType:o.memberType,effectiveTime:`${m().format("YYYY")}-01-01 00:00:00`,expriyTime:`${m().format("YYYY")}-12-31 00:00:00`}).then(l=>{const{status:k}=l;k===200&&(g.value=l.data.data.teamMembers)})});const B=d=>{S("on-submit",d),S("update:visible",!1)},T=()=>{S("update:visible",!1)};return(d,l)=>(i(),F(Te,{visible:v.visible,"show-next-icon":!1,"data-source":g.value,mode:v.mode,"data-index":"memberName","key-index":"memberCode","select-value":p.value,"search-current-info":!0,onOnSubmit:B,onOnClose:T},null,8,["visible","data-source","mode","select-value"]))}});const Fe=v=>(ye("data-v-09d1bd0d"),v=v(),Ee(),v),Ie={class:"top"},De={class:"title-tail"},$e=C(" \u7EDF\u8BA1\u4EBA\u6570"),Ae=C("\u4EBA "),Le={class:"bottom"},Me={class:"back-member"},Pe=["src"],Ge=C("\u6062\u590D\u5168\u90E8 "),Ne={key:0,class:"target-list"},Ve=["onClick"],Oe={class:"item-left"},Ue={class:"item-right"},Ze={class:"have-target"},je=C(" \u67E5\u770B\u76EE\u6807 "),ze=["src"],We={class:"no-target"},He={key:0,class:"more-area"},Je={class:"text"},qe=["src"],Ke={class:"member-target-popup"},Qe={class:"member-target-popup-top"},Re=C(" \u6210\u5458\u76EE\u6807 "),Xe=["src"],ea={class:"member-target-popup-content"},aa=Fe(()=>a("div",{class:"title-head"},null,-1)),ta={class:"title-tail"},sa=C(" \u7EDF\u8BA1\u4EBA\u6570"),oa=C("\u4EBA "),la=le({setup(v){const S=new Be({source:"localStorage"}),{getIconUrl:o}=ke(),g=t("\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"),p=t(!1),B=t(!1),T=t(!1),d=t(!1),l=t(!1),k=t(0),I=ee([]),N=t([]),V=t(!1),u=t([]),_=t([]),w=t(!1),H=t(""),J=t(""),ue=()=>{p.value=!p.value,p.value===!1?_.value=u.value.slice(0,3):_.value=u.value},ce=async()=>{if(console.log("searchPerson"),w.value){const e=await G({memberCode:"",memberType:"",effectiveTime:`${m().format("YYYY")}-01-01 00:00:00`,expriyTime:`${m().format("YYYY")}-12-31 23:59:59`});u.value=e.data.data.teamMembers,_.value=u.value.slice(0,3),w.value=!1}else T.value=!0},re=()=>{console.log("searchTeam"),B.value=!0},q=t(""),ne=t(0),K=t(!1),O=t([]),U=ee([]),ie=async e=>{var s,f,b,y;if(console.log(e),!e.hasGoal){te(e.memberType==="A"?"\u8BE5\u6210\u5458\u6682\u672A\u8BBE\u7F6E\u76EE\u6807":"\u8BE5\u90E8\u95E8\u6682\u65E0\u76EE\u6807\u6C47\u603B");return}if(K.value=!1,O.value=[],U.splice(0),e.hasGoal){d.value=!0;const h=await Ce({goalId:e.goalId||null,memberCode:e.memberCode,tplGoalId:e.tplGoalId,memberType:e.memberType,effectiveTime:`${m().format("YYYY")}-01-01 00:00:00`,expriyTime:`${m().format("YYYY")}-12-31 23:59:59`});q.value=((f=(s=h.data)==null?void 0:s.data)==null?void 0:f.name)||"",O.value=W(((y=(b=h.data)==null?void 0:b.data)==null?void 0:y.detailList)||[]),U.push({title:"\u76EE\u6807\u9879",dataIndex:"code"},...z(h.data.data.detailList||[]))}else te("\u8BE5\u6210\u5458\u6682\u672A\u8BBE\u7F6E\u76EE\u6807")},me=e=>{B.value=e},de=async e=>{var s,f,b,y,h,c,D,Z,Q,R,X;H.value=(s=e[0])==null?void 0:s.memberCode,J.value=(f=e[0])==null?void 0:f.memberType;try{const E=await G({memberCode:(b=e[0])==null?void 0:b.memberCode,memberType:(y=e[0])==null?void 0:y.memberType,effectiveTime:`${m().format("YYYY")}-01-01 00:00:00`,expriyTime:`${m().format("YYYY")}-12-31 23:59:59`});g.value=((h=e[0])==null?void 0:h.agencyName)||"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",((D=(c=E.data)==null?void 0:c.data)==null?void 0:D.goalSummaryList)?(l.value=!0,I.splice(0),I.push({title:"\u76EE\u6807\u9879",dataIndex:"code"},...z(E.data.data.goalSummaryList||[])),N.value=W(E.data.data.goalSummaryList||[])):l.value=!1,k.value=(Q=(Z=E.data)==null?void 0:Z.data)==null?void 0:Q.totalSummary,u.value=((X=(R=E.data)==null?void 0:R.data)==null?void 0:X.teamMembers)||[],_.value=u.value.slice(0,3)}catch(E){console.log(E)}},ve=e=>{if(e.length===0){T.value=!1,g.value="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57";return}u.value=e,_.value=u.value.slice(0,3),w.value=!0},pe=e=>{T.value=e};return he(async()=>{const e=S.get("userInfo");(e==null?void 0:e.userType)==="I"||(e==null?void 0:e.userType)==="O"&&(e==null?void 0:e.agentLevel)<=60?V.value=!0:V.value=!1;const s=await G({memberCode:"",memberType:"",effectiveTime:`${m().format("YYYY")}-01-01 00:00:00`,expriyTime:`${m().format("YYYY")}-12-31 23:59:59`});s.data.data.goalSummaryList&&s.data.data.goalSummaryList.length>0?(I.push({title:"\u76EE\u6807\u9879",dataIndex:"code"},...z(s.data.data.goalSummaryList||[])),N.value=W(s.data.data.goalSummaryList||[]),l.value=!0):l.value=!1,k.value=s.data.data.totalSummary,u.value=s.data.data.teamMembers,_.value=u.value.slice(0,3)}),(e,s)=>{const f=$("van-search"),b=$("ZaSvg"),y=$("van-popup"),h=$("ZaPageWrap");return i(),F(h,{"main-class":"page-team-target"},{default:Y(()=>[V.value?(i(),x("div",{key:0,onClick:re},[r(f,{shape:"round",disabled:"","left-icon":n(o)("target.searchImg"),placeholder:g.value,class:"search-team-target"},null,8,["left-icon","placeholder"])])):A("",!0),a("div",Ie,[r(j,{title:"\u76EE\u6807\u6C47\u603B","title-class":"aaa","head-icon":n(o)("target.siconImg")},ae({_:2},[l.value?{name:"tail",fn:Y(()=>[a("div",De,[a("div",null,[$e,a("span",null,L(k.value),1),Ae])])])}:void 0]),1032,["head-icon"]),l.value?(i(),F(se,{key:0,columns:n(I),"data-source":N.value,"background-color":["var(--target-team-head-table)","var(--target-team-body-table)"]},null,8,["columns","data-source","background-color"])):A("",!0),l.value?A("",!0):(i(),F(oe,{key:1,"empty-img":n(o)("target.emptyImg"),title:g.value==="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"?"\u56E2\u961F\u6682\u65E0\u76EE\u6807\u6C47\u603B":"\u6CA1\u6709\u627E\u5230\u76F8\u5173\u4FE1\u606F","empty-class":"empty-class"},null,8,["empty-img","title"]))]),r(Se),a("div",Le,[r(j,{title:"\u4E0B\u7EA7\u6210\u5458","title-class":"aaa","head-icon":n(o)("target.tpiconImg")},{tail:Y(()=>[a("div",{class:"title-tail",onClick:ce},[M(r(b,{name:"search_new"},null,512),[[P,!w.value]]),M(a("div",Me,[a("img",{src:n(o)("target.backImg"),alt:""},null,8,Pe),Ge],512),[[P,w.value]])])]),_:1},8,["head-icon"]),_.value.length>0?(i(),x("div",Ne,[(i(!0),x(ge,null,fe(_.value,(c,D)=>(i(),x("div",{key:D,class:"target-item",onClick:Z=>ie(c)},[a("div",Oe,L(c.memberName),1),a("div",Ue,[M(a("div",Ze,[je,a("img",{src:n(o)("target.rightImg"),alt:""},null,8,ze)],512),[[P,c.hasGoal===!0]]),M(a("div",We,"\u672A\u8BBE\u7F6E\u76EE\u6807",512),[[P,c.hasGoal===!1]])])],8,Ve))),128)),u.value.length>3?(i(),x("div",He,[a("div",{class:"more-out",onClick:ue},[a("div",Je,L(p.value?"\u6536\u8D77":"\u66F4\u591A"),1),a("img",{src:n(o)("target.moreImg"),alt:"",class:be({showMore:p.value})},null,10,qe)])])):A("",!0)])):(i(),F(oe,{key:1,title:"\u6682\u65E0\u4E0B\u7EA7\u6210\u5458","empty-class":"empty-bottom-class"}))]),r(Ye,{visible:B.value,mode:"single","is-target":!0,onOnSubmit:de,"onUpdate:visible":me},null,8,["visible"]),r(xe,{"member-code":H.value,"member-type":J.value,visible:T.value,mode:"single",onOnSubmit:ve,"onUpdate:visible":pe},null,8,["member-code","member-type","visible"]),r(y,{show:d.value,"onUpdate:show":s[1]||(s[1]=c=>d.value=c),round:"",position:"bottom",style:{height:"60%"}},{default:Y(()=>[a("div",Ke,[a("div",Qe,[Re,a("img",{src:n(o)("target.closeImg"),alt:"",onClick:s[0]||(s[0]=c=>d.value=!1)},null,8,Xe)]),a("div",ea,[r(j,{title:q.value},ae({head:Y(()=>[aa]),_:2},[K.value?{name:"tail",fn:Y(()=>[a("div",ta,[a("div",null,[sa,a("span",null,L(ne.value),1),oa])])])}:void 0]),1032,["title"]),r(se,{columns:n(U),"data-source":O.value},null,8,["columns","data-source"])])])]),_:1},8,["show"])]),_:1})}}});var _a=we(la,[["__scopeId","data-v-09d1bd0d"]]);export{_a as default};
