import{aC as e,d as a,r as t,bn as r,L as n,aD as l,aF as o,bo as i,i as v,aI as d,aK as s,bp as u,aO as m,bq as b,aQ as c,aE as f,br as P,aR as A}from"./index-b419c4de.js";const[g,h]=e("slider");const p=A(a({name:g,props:{min:d(0),max:d(100),step:d(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:s,buttonSize:s,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}},emits:["change","drag-end","drag-start","update:modelValue"],setup(e,{emit:a,slots:d}){let s,A,g;const p=t(),y=t(),V=t(),x=r(),O=n((()=>Number(e.max)-Number(e.min))),w=n((()=>{const a=e.vertical?"width":"height";return{background:e.inactiveColor,[a]:l(e.barHeight)}})),X=a=>e.range&&Array.isArray(a),S=()=>{const{modelValue:a,min:t}=e;return X(a)?100*(a[1]-a[0])/O.value+"%":100*(a-Number(t))/O.value+"%"},B=n((()=>{const a={[e.vertical?"height":"width"]:S(),background:e.activeColor};V.value&&(a.transition="none");return a[e.vertical?e.reverse?"bottom":"top":e.reverse?"right":"left"]=(()=>{const{modelValue:a,min:t}=e;return X(a)?100*(a[0]-Number(t))/O.value+"%":"0%"})(),a})),L=a=>{const t=+e.min,r=+e.max,n=+e.step;a=P(a,t,r);const l=Math.round((a-t)/n)*n;return c(t,l)},z=(e,a)=>JSON.stringify(e)===JSON.stringify(a),D=(t,r)=>{t=X(t)?(a=>{var t,r;const n=null!=(t=a[0])?t:Number(e.min),l=null!=(r=a[1])?r:Number(e.max);return n>l?[l,n]:[n,l]})(t).map(L):L(t),z(t,e.modelValue)||a("update:modelValue",t),r&&!z(t,g)&&a("change",t)},N=a=>{if(a.stopPropagation(),e.disabled||e.readonly)return;const{min:t,reverse:r,vertical:n,modelValue:l}=e,o=u(p),i=n?o.height:o.width,v=Number(t)+(n?r?o.bottom-a.clientY:a.clientY-o.top:r?o.right-a.clientX:a.clientX-o.left)/i*O.value;if(X(l)){const[e,a]=l;D(v<=(e+a)/2?[v,a]:[e,v],!0)}else D(v,!0)},Q=t=>{e.disabled||e.readonly||("dragging"===V.value&&(D(A,!0),a("drag-end",t)),V.value="")},Y=a=>{if("number"==typeof a){return h("button-wrapper",["left","right"][a])}return h("button-wrapper",e.reverse?"left":"right")},J=(a,t)=>{if("number"==typeof t){const e=d[0===t?"left-button":"right-button"];if(e)return e({value:a})}return d.button?d.button({value:a}):v("div",{class:h("button"),style:f(e.buttonSize)},null)},C=a=>{const t="number"==typeof a?e.modelValue[a]:e.modelValue;return v("div",{ref:y,role:"slider",class:Y(a),tabindex:e.disabled?void 0:0,"aria-valuemin":e.min,"aria-valuenow":t,"aria-valuemax":e.max,"aria-disabled":e.disabled||void 0,"aria-readonly":e.readonly||void 0,"aria-orientation":e.vertical?"vertical":"horizontal",onTouchstartPassive:t=>{"number"==typeof a&&(s=a),(a=>{e.disabled||e.readonly||(x.start(a),A=e.modelValue,g=X(A)?A.map(L):L(A),V.value="start")})(t)},onTouchend:Q,onTouchcancel:Q,onClick:b},[J(t,a)])};return D(e.modelValue),o((()=>e.modelValue)),i("touchmove",(t=>{if(e.disabled||e.readonly)return;"start"===V.value&&a("drag-start",t),m(t,!0),x.move(t),V.value="dragging";const r=u(p);let n=(e.vertical?x.deltaY.value:x.deltaX.value)/(e.vertical?r.height:r.width)*O.value;if(e.reverse&&(n=-n),X(g)){const a=e.reverse?1-s:s;A[a]=g[a]+n}else A=g+n;D(A)}),{target:y}),()=>v("div",{ref:p,style:w.value,class:h({vertical:e.vertical,disabled:e.disabled}),onClick:N},[v("div",{class:h("bar"),style:B.value},[e.range?[C(0),C(1)]:C()])])}}));var y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAABYlBMVEVHcEzb7f/r9P/a8P/T6f/////P5//p+//X///////q9v+62v/z+f/D3f/w9//E5P+52//x+P/R6v/z+f/J4//g9P/h8P/w9//g7/+32v/b7P/b7f+62/+72//L4/+83P/D4P/i8P/o8//u9v+32P/O5f/K4//w9v/S6P/////g7//Q5//d7v/f7v+83P/a7P/e7f/D4P/O5f/x9v/K4v+/3f/x+P+72v/z+f/J4v+73P/1+f/0+//0+f/R6f/o8//l8f+/3P+52v/N5v+22v/x9//Q5//g7v/a7P+22f/3/P/O5f/0+v/j8P/i7//g7v/w9//d7v/r9f/O5P/R5v/d7f/e7v+22P/v9//D3//I4v/O5f/b6/+12P/u9f/1+v/v9v+93P/N5P/u9v/f7v/z+f/d7f+42f/L4/+22P/O5f/c7P+62v/h7//1+v/v9//J4v/Q5v/H4f/x9//j8P++3f8KzdOCAAAAYXRSTlMAhy4jCwIQEQYEO6S0ISMyxa45+PYZ53urj7RXOfij8EB9iOZgkcm7aAH1YLn5me9HScRbeHjyKd6ZzohH6imvcFlycWrD4N/gv2C/47vEXY+XTtGn6tbihLbq+MDb05za7zgX5AAAAvJJREFUeNrtVWdX20AQPGPL3eAKmNiYDqaG3kLvJbQEQkmTm5AtB4zJ/8+V3ZOe/MIXPvEe90me2/Gc9nZGhJBPwZWFSBMxV1P73uXoRwvg7v8SH5jxmYBvNpxZSrrY43KxWH/Ix6bl3ulYtVAqVRwScO6Wc7n7xwEXAq4l1dA07VuIav8p1ik9P9cMe83D1UKhRPmor0yVOf1xEenjqsr5YYUEgZ7vgb2e5ypXr3QAEK1x+v3jkwvE/1K6Zmi6niIrRXZ4yh+E6s/PVL1A6ZcADFF6mdOjAkgxcUOj9G1yTNU5PQLVa9Uq5VdKlX0ARmo1If7UIoAWqm4wcb2PRPDwbVDdTdX54dsBWMXDx70C8KapPFefJ00xSq/n870eqPa0incfk3f5FegzCMwydUPXA/T5MMbevddPcPlbmfrwqQQ8RznW+U6fvPaAqtLGH7j5TS0PBtu4NpZ3d4w6nBYgO9I5tThJLGtyPBzoy5L39UbX6+/9MMZm/uWpKzdOncGnTsz8Q8PMV16cefA7nfmI8LvNcQWb48p2xxnguFf6fUX43ZY2JVva5Oxpo0LaBIvM7y9mXbkh68DveoomrXh3mbTOYVC3JG2uMWk1qh5WaM5zdTPns//J+XtrzrPD6zTnX/eVeV9veLmnz64vfBbAd+FwnLqtJS1b/UNOKxDaTm4KA/kXmGV2ms0hO2FTtx+VgLefWS6+ZbI308zvSWrgxJyY+Z9eLL4Sfp9IYLED/L6BwAb4PUnIL/T7Ouyto9/P8aDo91sFPJRBv4fIAvp9Darb0e9XAHyQfl8VwLz0+waZQ7/vQPUJ+n0CgC3p9y4BdKno902yA37Pn0H1Oap/J1BdA78/ueGqVPC73kUOUd2POY3qQ9jL3ZpQvyGwbpg8Zf+g7Q6K1l0T2WjR+Q4JRO9442/lVSQyvPPpFEuXtuP6w28eNtirvUKpdV0xgdWju1y802MCnkDGSB/M47/hjtxO2ABvSCFZ+Ys+KiE+J/8AdlNUC0LetfoAAAAASUVORK5CYII=";export{p as S,y as _};
