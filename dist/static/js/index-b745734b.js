import{B as s,d as a,j as t,C as e,r as n,D as i,E as o,G as u,b as l,H as r,J as c,L as d,K as h,M as g,N as m,O as p}from"./index-aaa8bb0a.js";const[v,f,x]=s("pull-refresh"),D=["pulling","loosing","success"];const T=p(a({name:v,props:{disabled:Boolean,modelValue:Boolean,headHeight:r(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:c,successDuration:r(500),animationDuration:r(300)},emits:["change","refresh","update:modelValue"],setup(s,{emit:a,slots:r}){let c;const p=t(),v=t(),T=e(p),H=n({status:"normal",distance:0,duration:0}),b=i(),V=()=>{if(50!==s.headHeight)return{height:`${s.headHeight}px`}},S=()=>"loading"!==H.status&&"success"!==H.status&&!s.disabled,$=(t,e)=>{const n=+(s.pullDistance||s.headHeight);H.distance=t,H.status=e?"loading":0===t?"normal":t<n?"pulling":"loosing",a("change",{status:H.status,distance:t})},B=()=>{const{status:a}=H;return"normal"===a?"":s[`${a}Text`]||x(a)},j=()=>{const{status:s,distance:a}=H;if(r[s])return r[s]({distance:a});const t=[];return D.includes(s)&&t.push(l("div",{class:f("text")},[B()])),"loading"===s&&t.push(l(d,{class:f("loading")},{default:B})),t},y=s=>{c=0===m(T.value),c&&(H.duration=0,b.start(s))},M=s=>{S()&&y(s)},P=()=>{c&&b.deltaY.value&&S()&&(H.duration=+s.animationDuration,"loosing"===H.status?($(+s.headHeight,!0),a("update:modelValue",!0),g((()=>a("refresh")))):$(0))};return o((()=>s.modelValue),(a=>{H.duration=+s.animationDuration,a?$(+s.headHeight,!0):r.success||s.successText?(H.status="success",setTimeout((()=>{$(0)}),+s.successDuration)):$(0,!1)})),u("touchmove",(a=>{if(S()){c||y(a);const{deltaY:t}=b;b.move(a),c&&t.value>=0&&b.isVertical()&&(h(a),$((a=>{const t=+(s.pullDistance||s.headHeight);return a>t&&(a=a<2*t?t+(a-t)/2:1.5*t+(a-2*t)/4),Math.round(a)})(t.value)))}}),{target:v}),()=>{var s;const a={transitionDuration:`${H.duration}ms`,transform:H.distance?`translate3d(0,${H.distance}px, 0)`:""};return l("div",{ref:p,class:f()},[l("div",{ref:v,class:f("track"),style:a,onTouchstartPassive:M,onTouchend:P,onTouchcancel:P},[l("div",{class:f("head"),style:V()},[j()]),null==(s=r.default)?void 0:s.call(r)])])}}}));export{T as P};
