!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-za-voice[data-v-27cc4d18]{z-index:999}.com-za-voice .wrapper[data-v-27cc4d18]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center}.com-za-voice .wrapper .wave[data-v-27cc4d18]{display:flex;justify-content:space-around;align-items:flex-end;margin-top:40vh;width:3.73333rem;height:.8rem}.com-za-voice .wrapper .wave .wave-item[data-v-27cc4d18]{width:.10667rem;margin-right:.04rem;background:var(--van-button-primary-background-color);transition:height .1s}.com-za-voice .wrapper .text[data-v-27cc4d18]{margin-top:2rem;font-size:.37333rem;color:#fff}.com-za-voice .wrapper .btn[data-v-27cc4d18]{margin-top:.66667rem;width:2.34667rem;height:2.34667rem;border-radius:50%;background:var(--van-button-primary-background-color);box-shadow:0 .02667rem .18667rem 0 var(--van-button-primary-background-color-shadow);display:flex;justify-content:center;align-items:center;-webkit-touch-callout:none;user-select:none}.com-za-voice .wrapper .btn .image[data-v-27cc4d18]{height:1.33333rem;pointer-events:none}\n',document.head.appendChild(e),System.register(["./vendor-legacy-f56233fa.js","./record-legacy-3e0564fe.js","./plugin-vue_export-helper-legacy-57eac467.js"],(function(e){"use strict";var t,a,r,n,o,c,i,s,l,d,v,u,m,p,h,g,f,w,b,y,x,k,z;return{setters:[function(e){t=e.g,a=e.C,r=e.M,n=e.a9,o=e.r,c=e.k,i=e.h,s=e.j,l=e.y,d=e.m,v=e.E,u=e.A,m=e.F,p=e.I,h=e.a1,g=e.a2,f=e.a3,w=e.T},function(e){b=e.v,y=e.s,x=e.a,k=e.c},function(e){z=e._}],execute:function(){const T={class:"wrapper"},j={class:"wave"},_={class:"text"},A=[(e=>(g("data-v-27cc4d18"),e=e(),f(),e))((()=>l("img",{src:"/static/assets/voice.b927f3d6.png",class:"image"},null,-1)))],C=t({props:{visible:{type:Boolean,default:!1}},emits:["update:visible","record"],setup(e,{emit:t}){const g=a(new Array(20).fill(1).map((e=>({height:10}))));let f;const z=()=>{f&&clearInterval(f),g.value=new Array(20).fill(1).map((e=>({height:10})))};let C="stop";const E=a("按住说话");let I=0;const L=()=>{t("update:visible",!1)},M=()=>{b(),C="recording",y((({file:e,duration:a})=>{t("record",{file:e,duration:a}),t("update:visible",!1),C="stop",z(),E.value="按住说话"})),f=setInterval((()=>{g.value=new Array(20).fill(1).map((e=>({height:100*Math.random()})))}),100),E.value="松开完成/上滑取消"},D=e=>{e.preventDefault(),I=e.touches[0].pageY,setTimeout((()=>{M()}),200)},F=e=>{e.touches[0].pageY-I<-30&&(C="cancel",z(),k(),E.value="按住说话")},Y=e=>{setTimeout((()=>{"recording"===C&&(C="stop",z(),x().then((e=>{const{file:a,duration:r}=e;t("record",{file:a,duration:r}),t("update:visible",!1)})).catch((e=>{w.fail(e.message)})),E.value="按住说话")}))},B=e=>{e.preventDefault()};return r((()=>{window.addEventListener("contextmenu",B),z()})),n((()=>{window.removeEventListener("contextmenu",B)})),(t,a)=>{const r=o("van-overlay");return c(),i(r,{show:e.visible,class:"com-za-voice",onClick:L},{default:s((()=>[l("div",T,[l("div",j,[(c(!0),d(m,null,v(g.value,((e,t)=>(c(),d("div",{key:t,class:"wave-item",style:u({height:`${e.height}%`})},null,4)))),128))]),l("div",_,p(E.value),1),l("div",{class:"btn",onClick:a[0]||(a[0]=h((()=>{}),["stop"])),onTouchstart:D,onTouchmove:F,onTouchend:Y},A,32)])])),_:1},8,["show"])}}});e("Z",z(C,[["__scopeId","data-v-27cc4d18"]]))}}}))}();
