import{aG as a,bP as e,c2 as l,bS as c,aM as o,d as n,c3 as t,r as s,c0 as i,i as r,bU as u,a9 as d,aV as b,aR as p,aU as f}from"./index-9877cd6a.js";const[h,k,v]=a("search");const g=f(n({name:h,props:e({},l,{label:String,shape:c("square"),leftIcon:c("search"),clearable:o,actionText:String,background:String,showAction:Boolean}),emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(a,{emit:c,slots:o,attrs:n}){const f=t(),h=s(),g=()=>{o.action||(c("update:modelValue",""),c("cancel"))},m=e=>{13===e.keyCode&&(p(e),c("search",a.modelValue))},C=()=>a.id||`${f}-input`,V=()=>{if(o.label||a.label)return r("label",{class:k("label"),for:C()},[o.label?o.label():a.label])},x=()=>{if(a.showAction){const e=a.actionText||v("cancel");return r("div",{class:k("action"),role:"button",tabindex:0,onClick:g},[o.action?o.action():e])}},y=a=>c("blur",a),S=a=>c("focus",a),w=a=>c("clear",a),A=a=>c("click-input",a),U=a=>c("click-left-icon",a),j=a=>c("click-right-icon",a),B=Object.keys(l),T=()=>{const l=e({},n,u(a,B),{id:C()});return r(b,d({ref:h,type:"search",class:k("field"),border:!1,onBlur:y,onFocus:S,onClear:w,onKeypress:m,"onClick-input":A,"onClick-left-icon":U,"onClick-right-icon":j,"onUpdate:modelValue":a=>c("update:modelValue",a)},l),u(o,["left-icon","right-icon"]))};return i({focus:()=>{var a;return null==(a=h.value)?void 0:a.focus()},blur:()=>{var a;return null==(a=h.value)?void 0:a.blur()}}),()=>{var e;return r("div",{class:k({"show-action":a.showAction}),style:{background:a.background}},[null==(e=o.left)?void 0:e.call(o),r("div",{class:k("content",a.shape)},[V(),T()]),x()])}}}));export{g as S};
