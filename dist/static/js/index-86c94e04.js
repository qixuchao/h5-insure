import{ax as a,bT as e,c5 as l,bW as c,aE as o,d as n,c6 as t,r as s,c3 as i,i as r,bY as u,aa as d,aN as b,aJ as p,aM as f}from"./index-b045089e.js";const[h,k,v]=a("search");const g=f(n({name:h,props:e({},l,{label:String,shape:c("square"),leftIcon:c("search"),clearable:o,actionText:String,background:String,showAction:Boolean}),emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(a,{emit:c,slots:o,attrs:n}){const f=t(),h=s(),g=()=>{o.action||(c("update:modelValue",""),c("cancel"))},m=e=>{13===e.keyCode&&(p(e),c("search",a.modelValue))},x=()=>a.id||`${f}-input`,C=()=>{if(o.label||a.label)return r("label",{class:k("label"),for:x()},[o.label?o.label():a.label])},y=()=>{if(a.showAction){const e=a.actionText||v("cancel");return r("div",{class:k("action"),role:"button",tabindex:0,onClick:g},[o.action?o.action():e])}},V=a=>c("blur",a),w=a=>c("focus",a),S=a=>c("clear",a),A=a=>c("click-input",a),T=a=>c("click-left-icon",a),j=a=>c("click-right-icon",a),B=Object.keys(l),q=()=>{const l=e({},n,u(a,B),{id:x()});return r(b,d({ref:h,type:"search",class:k("field"),border:!1,onBlur:V,onFocus:w,onClear:S,onKeypress:m,"onClick-input":A,"onClick-left-icon":T,"onClick-right-icon":j,"onUpdate:modelValue":a=>c("update:modelValue",a)},l),u(o,["left-icon","right-icon"]))};return i({focus:()=>{var a;return null==(a=h.value)?void 0:a.focus()},blur:()=>{var a;return null==(a=h.value)?void 0:a.blur()}}),()=>{var e;return r("div",{class:k({"show-action":a.showAction}),style:{background:a.background}},[null==(e=o.left)?void 0:e.call(o),r("div",{class:k("content",a.shape)},[C(),q()]),y()])}}}));export{g as S};
