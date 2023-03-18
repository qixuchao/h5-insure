!function(){var e=document.createElement("style");e.innerHTML=':root{--van-stepper-background-color: var(--van-active-color);--van-stepper-button-icon-color: var(--van-text-color);--van-stepper-button-disabled-color: var(--van-background-color);--van-stepper-button-disabled-icon-color: var(--van-gray-5);--van-stepper-button-round-theme-color: var(--van-danger-color);--van-stepper-input-width: 32px;--van-stepper-input-height: 28px;--van-stepper-input-font-size: var(--van-font-size-md);--van-stepper-input-line-height: normal;--van-stepper-input-text-color: var(--van-text-color);--van-stepper-input-disabled-text-color: var(--van-text-color-3);--van-stepper-input-disabled-background-color: var(--van-active-color);--van-stepper-border-radius: var(--van-border-radius-md)}.van-stepper{display:inline-block;-webkit-user-select:none;user-select:none}.van-stepper__minus,.van-stepper__plus{position:relative;box-sizing:border-box;width:var(--van-stepper-input-height);height:var(--van-stepper-input-height);margin:0;padding:0;color:var(--van-stepper-button-icon-color);vertical-align:middle;background:var(--van-stepper-background-color);border:0}.van-stepper__minus:before,.van-stepper__plus:before{width:50%;height:1px}.van-stepper__minus:after,.van-stepper__plus:after{width:1px;height:50%}.van-stepper__minus:before,.van-stepper__plus:before,.van-stepper__minus:after,.van-stepper__plus:after{position:absolute;top:50%;left:50%;background-color:currentColor;transform:translate(-50%,-50%);content:""}.van-stepper__minus--disabled,.van-stepper__plus--disabled{color:var(--van-stepper-button-disabled-icon-color);background-color:var(--van-stepper-button-disabled-color);cursor:not-allowed}.van-stepper__minus{border-radius:var(--van-stepper-border-radius) 0 0 var(--van-stepper-border-radius)}.van-stepper__minus:after{display:none}.van-stepper__plus{border-radius:0 var(--van-stepper-border-radius) var(--van-stepper-border-radius) 0}.van-stepper__input{box-sizing:border-box;width:var(--van-stepper-input-width);height:var(--van-stepper-input-height);margin:0 2px;padding:0;color:var(--van-stepper-input-text-color);font-size:var(--van-stepper-input-font-size);line-height:var(--van-stepper-input-line-height);text-align:center;vertical-align:middle;background:var(--van-stepper-background-color);border:0;border-width:1px 0;border-radius:0;-webkit-appearance:none}.van-stepper__input:disabled{color:var(--van-stepper-input-disabled-text-color);background-color:var(--van-stepper-input-disabled-background-color);-webkit-text-fill-color:var(--van-stepper-input-disabled-text-color);opacity:1}.van-stepper__input:read-only{cursor:default}.van-stepper--round .van-stepper__input{background-color:transparent}.van-stepper--round .van-stepper__plus,.van-stepper--round .van-stepper__minus{border-radius:100%}.van-stepper--round .van-stepper__plus--disabled,.van-stepper--round .van-stepper__minus--disabled{opacity:.3;cursor:not-allowed}.van-stepper--round .van-stepper__plus{color:var(--van-white);background:var(--van-stepper-button-round-theme-color)}.van-stepper--round .van-stepper__minus{color:var(--van-stepper-button-round-theme-color);background-color:var(--van-background-color-light);border:1px solid var(--van-stepper-button-round-theme-color)}\n',document.head.appendChild(e),System.register(["./index-legacy-b3b7dca5.js"],(function(e){"use strict";var a,n,t,r,o,l,s,i,p,u,d,v,c,b,m,g,h,_,f,x,w,k,y,S;return{setters:[function(e){a=e.aw,n=e.d,t=e.r,r=e.E,o=e.ay,l=e.bb,s=e.an,i=e.ax,p=e.f,u=e.A,d=e.a4,v=e.b1,c=e.b5,b=e.bc,m=e.aZ,g=e.az,h=e.bd,_=e.be,f=e.b6,x=e.bf,w=e.bg,k=e.bh,y=e.bi,S=e.aC}],execute:function(){const[z,V]=a("stepper"),C=(e,a)=>String(e)===String(a),M={min:b(1),max:b(1/0),name:b(""),step:b(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:m,showMinus:m,showInput:m,longPress:m,allowEmpty:Boolean,modelValue:g,inputWidth:g,buttonSize:g,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:b(1),decimalLength:g};var P=n({name:z,props:M,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(e,{emit:a}){const n=a=>{const{min:n,max:t,allowEmpty:r,decimalLength:o}=e;return r&&""===a||(a=""===(a=h(String(a),!e.integer))?0:+a,a=Number.isNaN(a)?+n:a,a=Math.max(Math.min(+t,a),+n),_(o)&&(a=a.toFixed(+o))),a};let b;const m=t(),g=t((()=>{var t;const r=null!=(t=e.modelValue)?t:e.defaultValue,o=n(r);return C(o,e.modelValue)||a("update:modelValue",o),o})()),S=r((()=>e.disabled||e.disableMinus||g.value<=+e.min)),z=r((()=>e.disabled||e.disablePlus||g.value>=+e.max)),M=r((()=>({width:o(e.inputWidth),height:o(e.buttonSize)}))),P=r((()=>l(e.buttonSize))),T=a=>{e.beforeChange?k(e.beforeChange,{args:[a],done(){g.value=a}}):g.value=a},B=()=>{if("plus"===b&&z.value||"minus"===b&&S.value)return void a("overlimit",b);const t="minus"===b?-e.step:+e.step,r=n(y(+g.value,t));T(r),a(b)},I=a=>{const n=a.target,{value:t}=n,{decimalLength:r}=e;let o=h(String(t),!e.integer);if(_(r)&&o.includes(".")){const e=o.split(".");o=`${e[0]}.${e[1].slice(0,+r)}`}e.beforeChange?n.value=String(g.value):C(t,o)||(n.value=o);const l=o===String(+o);T(l?+o:o)},L=n=>{var t;e.disableInput?null==(t=m.value)||t.blur():a("focus",n)},E=e=>{const t=e.target,r=n(t.value);t.value=String(r),g.value=r,f((()=>{a("blur",e),x()}))};let F,N;const W=()=>{N=setTimeout((()=>{B(),W()}),200)},$=a=>{e.longPress&&(clearTimeout(N),F&&w(a))},j=a=>{e.disableInput&&w(a)},A=a=>({onClick:e=>{w(e),b=a,B()},onTouchstartPassive:()=>{b=a,e.longPress&&(F=!1,clearTimeout(N),N=setTimeout((()=>{F=!0,B(),W()}),600))},onTouchend:$,onTouchcancel:$});return s((()=>[e.max,e.min,e.integer,e.decimalLength]),(()=>{const e=n(g.value);C(e,g.value)||(g.value=e)})),s((()=>e.modelValue),(e=>{C(e,g.value)||(g.value=n(e))})),s(g,(n=>{a("update:modelValue",n),a("change",n,{name:e.name})})),i((()=>e.modelValue)),()=>p("div",{role:"group",class:V([e.theme])},[u(p("button",v({type:"button",style:P.value,class:[V("minus",{disabled:S.value}),{[c]:!S.value}],"aria-disabled":S.value||void 0},A("minus")),null),[[d,e.showMinus]]),u(p("input",{ref:m,type:e.integer?"tel":"text",role:"spinbutton",class:V("input"),value:g.value,style:M.value,disabled:e.disabled,readonly:e.disableInput,inputmode:e.integer?"numeric":"decimal",placeholder:e.placeholder,"aria-valuemax":e.max,"aria-valuemin":e.min,"aria-valuenow":g.value,onBlur:E,onInput:I,onFocus:L,onMousedown:j},null),[[d,e.showInput]]),u(p("button",v({type:"button",style:P.value,class:[V("plus",{disabled:z.value}),{[c]:!z.value}],"aria-disabled":z.value||void 0},A("plus")),null),[[d,e.showPlus]])])}});e("S",S(P))}}}))}();
