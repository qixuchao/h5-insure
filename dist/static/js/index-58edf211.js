import{aZ as e,by as a,bN as l,bO as c,bp as o,d as n,bP as t,r as s,bn as i,e as r,bQ as u,a6 as b,aB as d,bw as p,b2 as f}from"./index-5b728ee5.js";const[h,k,v]=e("search");const g=f(n({name:h,props:a({},l,{label:String,shape:c("square"),leftIcon:c("search"),clearable:o,actionText:String,background:String,showAction:Boolean}),emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:c,slots:o,attrs:n}){const f=t(),h=s(),g=()=>{o.action||(c("update:modelValue",""),c("cancel"))},m=a=>{13===a.keyCode&&(p(a),c("search",e.modelValue))},y=()=>e.id||`${f}-input`,C=()=>{if(o.label||e.label)return r("label",{class:k("label"),for:y()},[o.label?o.label():e.label])},w=()=>{if(e.showAction){const a=e.actionText||v("cancel");return r("div",{class:k("action"),role:"button",tabindex:0,onClick:g},[o.action?o.action():a])}},x=e=>c("blur",e),V=e=>c("focus",e),S=e=>c("clear",e),A=e=>c("click-input",e),B=e=>c("click-left-icon",e),j=e=>c("click-right-icon",e),O=Object.keys(l),T=()=>{const l=a({},n,u(e,O),{id:y()});return r(d,b({ref:h,type:"search",class:k("field"),border:!1,onBlur:x,onFocus:V,onClear:S,onKeypress:m,"onClick-input":A,"onClick-left-icon":B,"onClick-right-icon":j,"onUpdate:modelValue":e=>c("update:modelValue",e)},l),u(o,["left-icon","right-icon"]))};return i({focus:()=>{var e;return null==(e=h.value)?void 0:e.focus()},blur:()=>{var e;return null==(e=h.value)?void 0:e.blur()}}),()=>{var a;return r("div",{class:k({"show-action":e.showAction}),style:{background:e.background}},[null==(a=o.left)?void 0:a.call(o),r("div",{class:k("content",e.shape)},[C(),T()]),w()])}}}));export{g as S};
