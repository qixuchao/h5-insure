import{aX as a,bL as e,b$ as l,bO as c,bi as o,d as n,c0 as t,r as s,bZ as i,e as r,bQ as u,a9 as b,az as d,bm as p,b0 as f}from"./index-136582c2.js";const[h,k,m]=a("search");const v=f(n({name:h,props:e({},l,{label:String,shape:c("square"),leftIcon:c("search"),clearable:o,actionText:String,background:String,showAction:Boolean}),emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(a,{emit:c,slots:o,attrs:n}){const f=t(),h=s(),v=()=>{o.action||(c("update:modelValue",""),c("cancel"))},g=e=>{13===e.keyCode&&(p(e),c("search",a.modelValue))},C=()=>a.id||`${f}-input`,x=()=>{if(o.label||a.label)return r("label",{class:k("label"),for:C()},[o.label?o.label():a.label])},y=()=>{if(a.showAction){const e=a.actionText||m("cancel");return r("div",{class:k("action"),role:"button",tabindex:0,onClick:v},[o.action?o.action():e])}},V=a=>c("blur",a),w=a=>c("focus",a),S=a=>c("clear",a),A=a=>c("click-input",a),j=a=>c("click-left-icon",a),B=a=>c("click-right-icon",a),O=Object.keys(l),T=()=>{const l=e({},n,u(a,O),{id:C()});return r(d,b({ref:h,type:"search",class:k("field"),border:!1,onBlur:V,onFocus:w,onClear:S,onKeypress:g,"onClick-input":A,"onClick-left-icon":j,"onClick-right-icon":B,"onUpdate:modelValue":a=>c("update:modelValue",a)},l),u(o,["left-icon","right-icon"]))};return i({focus:()=>{var a;return null==(a=h.value)?void 0:a.focus()},blur:()=>{var a;return null==(a=h.value)?void 0:a.blur()}}),()=>{var e;return r("div",{class:k({"show-action":a.showAction}),style:{background:a.background}},[null==(e=o.left)?void 0:e.call(o),r("div",{class:k("content",a.shape)},[x(),T()]),y()])}}}));export{v as S};
