import{d as e,j as a,k as l,E as n,aY as t,dD as s,o as i,c as o,a as u,b as d,w as r,e as v,u as p,F as c,s as m,n as f,f as C,p as y,bg as g,q as k,bl as h,_ as S,ar as _}from"./index-c3cf1687.js";import{C as b}from"./index-c548192b.js";import{o as j}from"./utils-2209ca51.js";import{C as w}from"./index-fedf8c6c.js";import"./infoCollection-e9e6e95d.js";import"./trial-7cc2dfd6.js";const x={class:"guarantee-list"},U={key:0,class:"plan-list"},A=["onClick"],L={class:"guarantee-detail"},V={class:"content"},$={key:1,class:"feerate-view"},E=e({name:"guarantee"});var q=S(e({...E,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:S}){var E,q;const F=e;a("");const B=a((null==(q=null==(E=F.planList)?void 0:E[0])?void 0:q.planCode)||void 0),I=a(),N=a([]);a([]);const P=a(),R=l((()=>!!F.planList.length)),T=a(null),Y=a([]),D=l((()=>{var e,a;return(null==(e=Y.value)?void 0:e.length)===(null==(a=N.value)?void 0:a.length)})),G=()=>{var e,a;null==(a=null==(e=T.value)?void 0:e.toggleAll)||a.call(e,!D.value)};n([()=>F.dataSource,()=>B.value],(()=>{var e,a;N.value=((null==(a=((null==(e=F.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===B.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${t.YES}`))}),{immediate:!0,deep:!0});const O=l((()=>{var e;return(null==(e=F.dataSource)?void 0:e.rateUri)||""})),z=l((()=>!!(P.value&&P.value.paymentFrequencyValue&&P.value.premiumUnit&&O))),H=()=>{j({fileType:"pdf",fileUri:O.value})};return(e,a)=>{var l,n;const t=_,j=b,E=w,q=s("dompurify-html");return i(),o(c,null,[u("div",x,[d(t,{title:"保障详情","show-line":!1,"show-divider":!1},{extra:r((()=>[u("span",{onClick:G},v(p(D)?"收起全部":"展开全部"),1)])),_:1}),p(R)?(i(),o("div",U,[(i(!0),o(c,null,m(e.planList,((e,a)=>(i(),o("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===p(B)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,B.value=l,I.value=F.planList.findIndex((e=>e.planCode===l)),void S("updateActivePlan",l);var l}},[u("span",null,v(e.planName),1)],10,A)))),128))])):C("",!0),u("div",L,[d(E,{ref_key:"collapseRef",ref:T,modelValue:p(Y),"onUpdate:modelValue":a[0]||(a[0]=e=>k(Y)?Y.value=e:null),border:!1},{default:r((()=>[(i(!0),o(c,null,m(p(N),((e,a)=>(i(),y(j,{key:a,title:e.title,value:e.desc,name:a,border:!1,class:"guarantee-item"},{default:r((()=>[g(u("div",V,null,512),[[q,e.tips]])])),_:2},1032,["title","value","name"])))),128))])),_:1},8,["modelValue"])]),p(z)?(i(),o("div",$,[u("span",null,v(`${(null==(l=p(P))?void 0:l.paymentFrequencyValue)||""}${(null==(n=p(P))?void 0:n.premiumUnit)||""}`),1),p(O)?(i(),o("span",{key:0,onClick:H},"查看保费")):C("",!0)])):C("",!0)]),d(h)],64)}}}),[["__scopeId","data-v-eba9291c"]]);export{q as default};
