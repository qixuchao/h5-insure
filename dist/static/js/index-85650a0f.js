import{v as e,X as a,Y as l,J as c,K as o,d as n,Z as t,i as s,Q as i,b as r,$ as u,a0 as d,a1 as b,D as p,H as f}from"./index-cb6244e5.js";const[h,k,v]=e("search");const g=f(n({name:h,props:a({},l,{label:String,shape:c("square"),leftIcon:c("search"),clearable:o,actionText:String,background:String,showAction:Boolean}),emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:c,slots:o,attrs:n}){const f=t(),h=s(),g=()=>{o.action||(c("update:modelValue",""),c("cancel"))},m=a=>{13===a.keyCode&&(p(a),c("search",e.modelValue))},C=()=>e.id||`${f}-input`,x=()=>{if(o.label||e.label)return r("label",{class:k("label"),for:C()},[o.label?o.label():e.label])},y=()=>{if(e.showAction){const a=e.actionText||v("cancel");return r("div",{class:k("action"),role:"button",tabindex:0,onClick:g},[o.action?o.action():a])}},V=e=>c("blur",e),w=e=>c("focus",e),S=e=>c("clear",e),A=e=>c("click-input",e),j=e=>c("click-left-icon",e),B=e=>c("click-right-icon",e),K=Object.keys(l),T=()=>{const l=a({},n,u(e,K),{id:C()});return r(b,d({ref:h,type:"search",class:k("field"),border:!1,onBlur:V,onFocus:w,onClear:S,onKeypress:m,"onClick-input":A,"onClick-left-icon":j,"onClick-right-icon":B,"onUpdate:modelValue":e=>c("update:modelValue",e)},l),u(o,["left-icon","right-icon"]))};return i({focus:()=>{var e;return null==(e=h.value)?void 0:e.focus()},blur:()=>{var e;return null==(e=h.value)?void 0:e.blur()}}),()=>{var a;return r("div",{class:k({"show-action":e.showAction}),style:{background:e.background}},[null==(a=o.left)?void 0:a.call(o),r("div",{class:k("content",e.shape)},[x(),T()]),y()])}}}));export{g as S};
