System.register(["./index-legacy-1d6e1a56.js"],(function(e){"use strict";var a,l,n,t,d,o,r,c;return{setters:[function(e){a=e.aw,l=e.aZ,n=e.d,t=e.bN,d=e.bw,o=e.f,r=e.bO,c=e.aC}],execute:function(){const[i,u]=a("collapse"),s=e("a",Symbol(i)),p={border:l,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var m=n({name:i,props:p,emits:["change","update:modelValue"],setup(e,{emit:a,slots:l}){const{linkChildren:n,children:c}=t(s),i=e=>{a("change",e),a("update:modelValue",e)};return d({toggleAll:(a={})=>{if(e.accordion)return;"boolean"==typeof a&&(a={expanded:a});const{expanded:l,skipDisabled:n}=a,t=c.filter((e=>e.disabled&&n?e.expanded.value:null!=l?l:!e.expanded.value)).map((e=>e.itemName.value));i(t)}}),n({toggle:(a,l)=>{const{accordion:n,modelValue:t}=e;i(n?a===t?"":a:l?t.concat(a):t.filter((e=>e!==a)))},isExpanded:a=>{const{accordion:l,modelValue:n}=e;return l?n===a:n.includes(a)}}),()=>{var a;return o("div",{class:[u(),{[r]:e.border}]},[null==(a=l.default)?void 0:a.call(l)])}}});e("C",c(m))}}}));
