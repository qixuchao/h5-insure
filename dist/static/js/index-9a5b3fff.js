import{aw as a,aX as e,bz as l,a$ as c,aZ as o,d as n,bA as t,r as s,bw as i,f as r,b2 as u,b1 as b,y as d,bg as f,aC as p}from"./index-0fe7bae3.js";const[h,k,g]=a("search");const v=p(n({name:h,props:e({},l,{label:String,shape:c("square"),leftIcon:c("search"),clearable:o,actionText:String,background:String,showAction:Boolean}),emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(a,{emit:c,slots:o,attrs:n}){const p=t(),h=s(),v=()=>{o.action||(c("update:modelValue",""),c("cancel"))},m=e=>{13===e.keyCode&&(f(e),c("search",a.modelValue))},C=()=>a.id||`${p}-input`,w=()=>{if(o.label||a.label)return r("label",{class:k("label"),for:C()},[o.label?o.label():a.label])},y=()=>{if(a.showAction){const e=a.actionText||g("cancel");return r("div",{class:k("action"),role:"button",tabindex:0,onClick:v},[o.action?o.action():e])}},x=a=>c("blur",a),V=a=>c("focus",a),A=a=>c("clear",a),S=a=>c("click-input",a),j=a=>c("click-left-icon",a),B=a=>c("click-right-icon",a),T=Object.keys(l),$=()=>{const l=e({},n,u(a,T),{id:C()});return r(d,b({ref:h,type:"search",class:k("field"),border:!1,onBlur:x,onFocus:V,onClear:A,onKeypress:m,"onClick-input":S,"onClick-left-icon":j,"onClick-right-icon":B,"onUpdate:modelValue":a=>c("update:modelValue",a)},l),u(o,["left-icon","right-icon"]))};return i({focus:()=>{var a;return null==(a=h.value)?void 0:a.focus()},blur:()=>{var a;return null==(a=h.value)?void 0:a.blur()}}),()=>{var e;return r("div",{class:k({"show-action":a.showAction}),style:{background:a.background}},[null==(e=o.left)?void 0:e.call(o),r("div",{class:k("content",a.shape)},[w(),$()]),y()])}}}));export{v as S};
