import{d as a,j as e,k as l,E as n,aY as t,cp as s,o as i,c as o,a as u,b as d,w as r,e as v,u as p,F as c,s as m,n as f,f as C,p as y,bg as g,q as k,bl as h,_ as S,ar as _}from"./index-ce7a290e.js";import{C as b}from"./index-97475b02.js";import{o as j}from"./utils-1a3a1064.js";import{C as w}from"./index-a3186ed0.js";import"./infoCollection-faf37129.js";import"./trial-9ea40275.js";const x={class:"guarantee-list"},U={key:0,class:"plan-list"},A=["onClick"],L={class:"guarantee-detail"},V={class:"content"},$={key:1,class:"feerate-view"},E=a({name:"guarantee"});var q=S(a({...E,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(a,{emit:S}){var E,q;const F=a;e("");const B=e((null==(q=null==(E=F.planList)?void 0:E[0])?void 0:q.planCode)||void 0),I=e(),N=e([]);e([]);const P=e(),R=l((()=>!!F.planList.length)),T=e(null),Y=e([]),G=l((()=>{var a,e;return(null==(a=Y.value)?void 0:a.length)===(null==(e=N.value)?void 0:e.length)})),O=()=>{var a,e;null==(e=null==(a=T.value)?void 0:a.toggleAll)||e.call(a,!G.value)};n([()=>F.dataSource,()=>B.value],(()=>{var a,e;N.value=((null==(e=((null==(a=F.dataSource)?void 0:a.GUARANTEE)||[]).find((a=>a.planCode===B.value)))?void 0:e.data)||[]).filter((a=>a.isShowOn===`${t.YES}`))}),{immediate:!0,deep:!0});const z=l((()=>{var a;return(null==(a=F.dataSource)?void 0:a.rateUri)||""})),D=l((()=>!!(P.value&&P.value.paymentFrequencyValue&&P.value.premiumUnit&&z))),H=()=>{j({fileType:"pdf",fileUri:z.value})};return(a,e)=>{var l,n;const t=_,j=b,E=w,q=s("dompurify-html");return i(),o(c,null,[u("div",x,[d(t,{title:"保障详情","show-line":!1,"show-divider":!1},{extra:r((()=>[u("span",{onClick:O},v(p(G)?"收起全部":"展开全部"),1)])),_:1}),p(R)?(i(),o("div",U,[(i(!0),o(c,null,m(a.planList,((a,e)=>(i(),o("div",{key:`${a.planCode}_${e}`,class:f("plan-list-item "+(a.planCode===p(B)?"plan-list-item-active":"")),onClick:e=>{return l=a.planCode,B.value=l,I.value=F.planList.findIndex((a=>a.planCode===l)),void S("updateActivePlan",l);var l}},[u("span",null,v(a.planName),1)],10,A)))),128))])):C("",!0),u("div",L,[d(E,{ref_key:"collapseRef",ref:T,modelValue:p(Y),"onUpdate:modelValue":e[0]||(e[0]=a=>k(Y)?Y.value=a:null),border:!1},{default:r((()=>[(i(!0),o(c,null,m(p(N),((a,e)=>(i(),y(j,{key:e,title:a.title,value:a.desc,name:e,border:!1,class:"guarantee-item"},{default:r((()=>[g(u("div",V,null,512),[[q,a.tips]])])),_:2},1032,["title","value","name"])))),128))])),_:1},8,["modelValue"])]),p(D)?(i(),o("div",$,[u("span",null,v(`${(null==(l=p(P))?void 0:l.paymentFrequencyValue)||""}${(null==(n=p(P))?void 0:n.premiumUnit)||""}`),1),p(z)?(i(),o("span",{key:0,onClick:H},"查看保费")):C("",!0)])):C("",!0)]),d(h)],64)}}}),[["__scopeId","data-v-eba9291c"]]);export{q as default};
