import{v as s,d as t,j as a,x as e,r as n,y as i,z as o,A as u,b as l,B as r,C as c,L as d,D as h,E as g,G as m,H as p}from"./index-92d58610.js";const[v,f,x]=s("pull-refresh"),D=["pulling","loosing","success"];const T=p(t({name:v,props:{disabled:Boolean,modelValue:Boolean,headHeight:r(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:c,successDuration:r(500),animationDuration:r(300)},emits:["change","refresh","update:modelValue"],setup(s,{emit:t,slots:r}){let c;const p=a(),v=a(),T=e(p),H=n({status:"normal",distance:0,duration:0}),V=i(),S=()=>{if(50!==s.headHeight)return{height:`${s.headHeight}px`}},$=()=>"loading"!==H.status&&"success"!==H.status&&!s.disabled,b=(a,e)=>{const n=+(s.pullDistance||s.headHeight);H.distance=a,H.status=e?"loading":0===a?"normal":a<n?"pulling":"loosing",t("change",{status:H.status,distance:a})},y=()=>{const{status:t}=H;return"normal"===t?"":s[`${t}Text`]||x(t)},B=()=>{const{status:s,distance:t}=H;if(r[s])return r[s]({distance:t});const a=[];return D.includes(s)&&a.push(l("div",{class:f("text")},[y()])),"loading"===s&&a.push(l(d,{class:f("loading")},{default:y})),a},j=s=>{c=0===m(T.value),c&&(H.duration=0,V.start(s))},P=s=>{$()&&j(s)},Y=()=>{c&&V.deltaY.value&&$()&&(H.duration=+s.animationDuration,"loosing"===H.status?(b(+s.headHeight,!0),t("update:modelValue",!0),g((()=>t("refresh")))):b(0))};return o((()=>s.modelValue),(t=>{H.duration=+s.animationDuration,t?b(+s.headHeight,!0):r.success||s.successText?(H.status="success",setTimeout((()=>{b(0)}),+s.successDuration)):b(0,!1)})),u("touchmove",(t=>{if($()){c||j(t);const{deltaY:a}=V;V.move(t),c&&a.value>=0&&V.isVertical()&&(h(t),b((t=>{const a=+(s.pullDistance||s.headHeight);return t>a&&(t=t<2*a?a+(t-a)/2:1.5*a+(t-2*a)/4),Math.round(t)})(a.value)))}}),{target:v}),()=>{var s;const t={transitionDuration:`${H.duration}ms`,transform:H.distance?`translate3d(0,${H.distance}px, 0)`:""};return l("div",{ref:p,class:f()},[l("div",{ref:v,class:f("track"),style:t,onTouchstartPassive:P,onTouchend:Y,onTouchcancel:Y},[l("div",{class:f("head"),style:S()},[B()]),null==(s=r.default)?void 0:s.call(r)])])}}}));export{T as P};
