import{v as a,X as e,Y as l,J as c,K as o,d as n,Z as t,j as s,Q as i,b as r,$ as u,a0 as d,a1 as b,D as p,H as f}from"./index-c77dbd25.js";const[h,k,v]=a("search");const g=f(n({name:h,props:e({},l,{label:String,shape:c("square"),leftIcon:c("search"),clearable:o,actionText:String,background:String,showAction:Boolean}),emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(a,{emit:c,slots:o,attrs:n}){const f=t(),h=s(),g=()=>{o.action||(c("update:modelValue",""),c("cancel"))},m=e=>{13===e.keyCode&&(p(e),c("search",a.modelValue))},C=()=>a.id||`${f}-input`,x=()=>{if(o.label||a.label)return r("label",{class:k("label"),for:C()},[o.label?o.label():a.label])},y=()=>{if(a.showAction){const e=a.actionText||v("cancel");return r("div",{class:k("action"),role:"button",tabindex:0,onClick:g},[o.action?o.action():e])}},V=a=>c("blur",a),w=a=>c("focus",a),S=a=>c("clear",a),j=a=>c("click-input",a),A=a=>c("click-left-icon",a),B=a=>c("click-right-icon",a),K=Object.keys(l),T=()=>{const l=e({},n,u(a,K),{id:C()});return r(b,d({ref:h,type:"search",class:k("field"),border:!1,onBlur:V,onFocus:w,onClear:S,onKeypress:m,"onClick-input":j,"onClick-left-icon":A,"onClick-right-icon":B,"onUpdate:modelValue":a=>c("update:modelValue",a)},l),u(o,["left-icon","right-icon"]))};return i({focus:()=>{var a;return null==(a=h.value)?void 0:a.focus()},blur:()=>{var a;return null==(a=h.value)?void 0:a.blur()}}),()=>{var e;return r("div",{class:k({"show-action":a.showAction}),style:{background:a.background}},[null==(e=o.left)?void 0:e.call(o),r("div",{class:k("content",a.shape)},[x(),T()]),y()])}}}));export{g as S};
