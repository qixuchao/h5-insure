import{b9 as e,bK as a,b_ as l,bN as c,be as o,d as n,b$ as t,r as s,bY as i,e as r,bP as u,a9 as b,at as d,bj as f,bm as p}from"./index-c26f5a93.js";const[h,k,m]=e("search");const v=p(n({name:h,props:a({},l,{label:String,shape:c("square"),leftIcon:c("search"),clearable:o,actionText:String,background:String,showAction:Boolean}),emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:c,slots:o,attrs:n}){const p=t(),h=s(),v=()=>{o.action||(c("update:modelValue",""),c("cancel"))},g=a=>{13===a.keyCode&&(f(a),c("search",e.modelValue))},C=()=>e.id||`${p}-input`,x=()=>{if(o.label||e.label)return r("label",{class:k("label"),for:C()},[o.label?o.label():e.label])},y=()=>{if(e.showAction){const a=e.actionText||m("cancel");return r("div",{class:k("action"),role:"button",tabindex:0,onClick:v},[o.action?o.action():a])}},V=e=>c("blur",e),w=e=>c("focus",e),S=e=>c("clear",e),j=e=>c("click-input",e),A=e=>c("click-left-icon",e),B=e=>c("click-right-icon",e),K=Object.keys(l),T=()=>{const l=a({},n,u(e,K),{id:C()});return r(d,b({ref:h,type:"search",class:k("field"),border:!1,onBlur:V,onFocus:w,onClear:S,onKeypress:g,"onClick-input":j,"onClick-left-icon":A,"onClick-right-icon":B,"onUpdate:modelValue":e=>c("update:modelValue",e)},l),u(o,["left-icon","right-icon"]))};return i({focus:()=>{var e;return null==(e=h.value)?void 0:e.focus()},blur:()=>{var e;return null==(e=h.value)?void 0:e.blur()}}),()=>{var a;return r("div",{class:k({"show-action":e.showAction}),style:{background:e.background}},[null==(a=o.left)?void 0:a.call(o),r("div",{class:k("content",e.shape)},[x(),T()]),y()])}}}));export{v as S};
