import{B as s,d as t,j as a,C as e,r as n,D as i,E as o,G as u,b as l,H as r,J as c,L as d,K as h,M as g,N as m,O as p}from"./index-8952fea8.js";const[f,v,x]=s("pull-refresh"),D=["pulling","loosing","success"];const T=p(t({name:f,props:{disabled:Boolean,modelValue:Boolean,headHeight:r(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:c,successDuration:r(500),animationDuration:r(300)},emits:["change","refresh","update:modelValue"],setup(s,{emit:t,slots:r}){let c;const p=a(),f=a(),T=e(p),H=n({status:"normal",distance:0,duration:0}),V=i(),S=()=>{if(50!==s.headHeight)return{height:`${s.headHeight}px`}},$=()=>"loading"!==H.status&&"success"!==H.status&&!s.disabled,b=(a,e)=>{const n=+(s.pullDistance||s.headHeight);H.distance=a,H.status=e?"loading":0===a?"normal":a<n?"pulling":"loosing",t("change",{status:H.status,distance:a})},B=()=>{const{status:t}=H;return"normal"===t?"":s[`${t}Text`]||x(t)},j=()=>{const{status:s,distance:t}=H;if(r[s])return r[s]({distance:t});const a=[];return D.includes(s)&&a.push(l("div",{class:v("text")},[B()])),"loading"===s&&a.push(l(d,{class:v("loading")},{default:B})),a},y=s=>{c=0===m(T.value),c&&(H.duration=0,V.start(s))},M=s=>{$()&&y(s)},P=()=>{c&&V.deltaY.value&&$()&&(H.duration=+s.animationDuration,"loosing"===H.status?(b(+s.headHeight,!0),t("update:modelValue",!0),g((()=>t("refresh")))):b(0))};return o((()=>s.modelValue),(t=>{H.duration=+s.animationDuration,t?b(+s.headHeight,!0):r.success||s.successText?(H.status="success",setTimeout((()=>{b(0)}),+s.successDuration)):b(0,!1)})),u("touchmove",(t=>{if($()){c||y(t);const{deltaY:a}=V;V.move(t),c&&a.value>=0&&V.isVertical()&&(h(t),b((t=>{const a=+(s.pullDistance||s.headHeight);return t>a&&(t=t<2*a?a+(t-a)/2:1.5*a+(t-2*a)/4),Math.round(t)})(a.value)))}}),{target:f}),()=>{var s;const t={transitionDuration:`${H.duration}ms`,transform:H.distance?`translate3d(0,${H.distance}px, 0)`:""};return l("div",{ref:p,class:v()},[l("div",{ref:f,class:v("track"),style:t,onTouchstartPassive:M,onTouchend:P,onTouchcancel:P},[l("div",{class:v("head"),style:S()},[j()]),null==(s=r.default)?void 0:s.call(r)])])}}}));export{T as P};
