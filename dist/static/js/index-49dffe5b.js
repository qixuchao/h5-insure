import{d as a,j as e,k as l,E as n,ah as t,dA as s,o as i,c as o,a as u,b as d,w as r,e as v,u as p,F as c,s as m,n as f,f as C,p as y,aL as k,q as g,aR as h,_ as S,aS as _}from"./index-d0b93386.js";import{C as b}from"./index-af7b3fd3.js";import{o as j}from"./utils-bcdae5c4.js";import{C as w}from"./index-93c13042.js";import"./infoCollection-9690d0c4.js";import"./trial-e779f997.js";const x={class:"guarantee-list"},A={key:0,class:"plan-list"},L=["onClick"],U={class:"guarantee-detail"},V={class:"content"},$={key:1,class:"feerate-view"},E=a({name:"guarantee"});var q=S(a({...E,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(a,{emit:S}){var E,q;const F=a;e("");const R=e((null==(q=null==(E=F.planList)?void 0:E[0])?void 0:q.planCode)||void 0),B=e(),I=e([]);e([]);const N=e(),P=l((()=>!!F.planList.length)),T=e(null),G=e([]),O=l((()=>{var a,e;return(null==(a=G.value)?void 0:a.length)===(null==(e=I.value)?void 0:e.length)})),Y=()=>{var a,e;null==(e=null==(a=T.value)?void 0:a.toggleAll)||e.call(a,!O.value)};n([()=>F.dataSource,()=>R.value],(()=>{var a,e;I.value=((null==(e=((null==(a=F.dataSource)?void 0:a.GUARANTEE)||[]).find((a=>a.planCode===R.value)))?void 0:e.data)||[]).filter((a=>a.isShowOn===`${t.YES}`))}),{immediate:!0,deep:!0});const z=l((()=>{var a;return(null==(a=F.dataSource)?void 0:a.rateUri)||""})),D=l((()=>!!(N.value&&N.value.paymentFrequencyValue&&N.value.premiumUnit&&z))),H=()=>{j({fileType:"pdf",fileUri:z.value})};return(a,e)=>{var l,n;const t=_,j=b,E=w,q=s("dompurify-html");return i(),o(c,null,[u("div",x,[d(t,{title:"保障详情","show-line":!1,"show-divider":!1},{extra:r((()=>[u("span",{onClick:Y},v(p(O)?"收起全部":"展开全部"),1)])),_:1}),p(P)?(i(),o("div",A,[(i(!0),o(c,null,m(a.planList,((a,e)=>(i(),o("div",{key:`${a.planCode}_${e}`,class:f("plan-list-item "+(a.planCode===p(R)?"plan-list-item-active":"")),onClick:e=>{return l=a.planCode,R.value=l,B.value=F.planList.findIndex((a=>a.planCode===l)),void S("updateActivePlan",l);var l}},[u("span",null,v(a.planName),1)],10,L)))),128))])):C("",!0),u("div",U,[d(E,{ref_key:"collapseRef",ref:T,modelValue:p(G),"onUpdate:modelValue":e[0]||(e[0]=a=>g(G)?G.value=a:null),border:!1},{default:r((()=>[(i(!0),o(c,null,m(p(I),((a,e)=>(i(),y(j,{key:e,title:a.title,value:a.desc,name:e,border:!1,class:"guarantee-item"},{default:r((()=>[k(u("div",V,null,512),[[q,a.tips]])])),_:2},1032,["title","value","name"])))),128))])),_:1},8,["modelValue"])]),p(D)?(i(),o("div",$,[u("span",null,v(`${(null==(l=p(N))?void 0:l.paymentFrequencyValue)||""}${(null==(n=p(N))?void 0:n.premiumUnit)||""}`),1),p(z)?(i(),o("span",{key:0,onClick:H},"查看保费")):C("",!0)])):C("",!0)]),d(h)],64)}}}),[["__scopeId","data-v-eba9291c"]]);export{q as default};
