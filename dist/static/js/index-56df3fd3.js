import{_ as e}from"./index-a321812c.js";import{v as a,d as l,j as t,y as s,k as n,bD as i,bF as o,A as r,b as d,B as u,C as c,R as v,D as f,c2 as m,bL as p,bE as b,c3 as y,H as h,_ as g,r as x,c4 as P,bf as A,c5 as k,z as w,O as V,o as Y,c as L,g as S,c6 as X,u as O,w as R,a as _,F as B,q as T,n as E,e as C,c7 as I,aL as N,m as z,f as U,aE as F,aF as D,V as J,a8 as K,W as Q,c8 as W,p as j,c9 as M,ae as Z,ai as q,ca as G,cb as H}from"./index-8120d8cf.js";import{_ as $}from"./index-5b8c4e6b.js";import{_ as ee}from"./empty-ae586b6c.js";const[ae,le]=a("slider");const te=h(l({name:ae,props:{min:u(0),max:u(100),step:u(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:c,buttonSize:c,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}},emits:["change","drag-end","drag-start","update:modelValue"],setup(e,{emit:a,slots:l}){let u,c,h;const g=t(),x=t(),P=t(),A=s(),k=n((()=>Number(e.max)-Number(e.min))),w=n((()=>{const a=e.vertical?"width":"height";return{background:e.inactiveColor,[a]:i(e.barHeight)}})),V=a=>e.range&&Array.isArray(a),Y=()=>{const{modelValue:a,min:l}=e;return V(a)?100*(a[1]-a[0])/k.value+"%":100*(a-Number(l))/k.value+"%"},L=n((()=>{const a={[e.vertical?"height":"width"]:Y(),background:e.activeColor};P.value&&(a.transition="none");return a[e.vertical?e.reverse?"bottom":"top":e.reverse?"right":"left"]=(()=>{const{modelValue:a,min:l}=e;return V(a)?100*(a[0]-Number(l))/k.value+"%":"0%"})(),a})),S=a=>{const l=+e.min,t=+e.max,s=+e.step;a=y(a,l,t);const n=Math.round((a-l)/s)*s;return p(l,n)},X=(e,a)=>JSON.stringify(e)===JSON.stringify(a),O=(l,t)=>{l=V(l)?(a=>{var l,t;const s=null!=(l=a[0])?l:Number(e.min),n=null!=(t=a[1])?t:Number(e.max);return s>n?[n,s]:[s,n]})(l).map(S):S(l),X(l,e.modelValue)||a("update:modelValue",l),t&&!X(l,h)&&a("change",l)},R=a=>{if(a.stopPropagation(),e.disabled||e.readonly)return;const{min:l,reverse:t,vertical:s,modelValue:n}=e,i=v(g),o=s?i.height:i.width,r=Number(l)+(s?t?i.bottom-a.clientY:a.clientY-i.top:t?i.right-a.clientX:a.clientX-i.left)/o*k.value;if(V(n)){const[e,a]=n;O(r<=(e+a)/2?[r,a]:[e,r],!0)}else O(r,!0)},_=l=>{e.disabled||e.readonly||("dragging"===P.value&&(O(c,!0),a("drag-end",l)),P.value="")},B=a=>{if("number"==typeof a){return le("button-wrapper",["left","right"][a])}return le("button-wrapper",e.reverse?"left":"right")},T=(a,t)=>{if("number"==typeof t){const e=l[0===t?"left-button":"right-button"];if(e)return e({value:a})}return l.button?l.button({value:a}):d("div",{class:le("button"),style:b(e.buttonSize)},null)},E=a=>{const l="number"==typeof a?e.modelValue[a]:e.modelValue;return d("div",{ref:x,role:"slider",class:B(a),tabindex:e.disabled?void 0:0,"aria-valuemin":e.min,"aria-valuenow":l,"aria-valuemax":e.max,"aria-disabled":e.disabled||void 0,"aria-readonly":e.readonly||void 0,"aria-orientation":e.vertical?"vertical":"horizontal",onTouchstartPassive:l=>{"number"==typeof a&&(u=a),(a=>{e.disabled||e.readonly||(A.start(a),c=e.modelValue,h=V(c)?c.map(S):S(c),P.value="start")})(l)},onTouchend:_,onTouchcancel:_,onClick:m},[T(l,a)])};return O(e.modelValue),o((()=>e.modelValue)),r("touchmove",(l=>{if(e.disabled||e.readonly)return;"start"===P.value&&a("drag-start",l),f(l,!0),A.move(l),P.value="dragging";const t=v(g);let s=(e.vertical?A.deltaY.value:A.deltaX.value)/(e.vertical?t.height:t.width)*k.value;if(e.reverse&&(s=-s),V(h)){const a=e.reverse?1-u:u;c[a]=h[a]+s}else c=h+s;O(c)}),{target:x}),()=>d("div",{ref:g,style:w.value,class:le({vertical:e.vertical,disabled:e.disabled}),onClick:R},[d("div",{class:le("bar"),style:L.value},[e.range?[E(0),E(1)]:E()])])}}));var se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAABYlBMVEVHcEzb7f/r9P/a8P/T6f/////P5//p+//X///////q9v+62v/z+f/D3f/w9//E5P+52//x+P/R6v/z+f/J4//g9P/h8P/w9//g7/+32v/b7P/b7f+62/+72//L4/+83P/D4P/i8P/o8//u9v+32P/O5f/K4//w9v/S6P/////g7//Q5//d7v/f7v+83P/a7P/e7f/D4P/O5f/x9v/K4v+/3f/x+P+72v/z+f/J4v+73P/1+f/0+//0+f/R6f/o8//l8f+/3P+52v/N5v+22v/x9//Q5//g7v/a7P+22f/3/P/O5f/0+v/j8P/i7//g7v/w9//d7v/r9f/O5P/R5v/d7f/e7v+22P/v9//D3//I4v/O5f/b6/+12P/u9f/1+v/v9v+93P/N5P/u9v/f7v/z+f/d7f+42f/L4/+22P/O5f/c7P+62v/h7//1+v/v9//J4v/Q5v/H4f/x9//j8P++3f8KzdOCAAAAYXRSTlMAhy4jCwIQEQYEO6S0ISMyxa45+PYZ53urj7RXOfij8EB9iOZgkcm7aAH1YLn5me9HScRbeHjyKd6ZzohH6imvcFlycWrD4N/gv2C/47vEXY+XTtGn6tbihLbq+MDb05za7zgX5AAAAvJJREFUeNrtVWdX20AQPGPL3eAKmNiYDqaG3kLvJbQEQkmTm5AtB4zJ/8+V3ZOe/MIXPvEe90me2/Gc9nZGhJBPwZWFSBMxV1P73uXoRwvg7v8SH5jxmYBvNpxZSrrY43KxWH/Ix6bl3ulYtVAqVRwScO6Wc7n7xwEXAq4l1dA07VuIav8p1ik9P9cMe83D1UKhRPmor0yVOf1xEenjqsr5YYUEgZ7vgb2e5ypXr3QAEK1x+v3jkwvE/1K6Zmi6niIrRXZ4yh+E6s/PVL1A6ZcADFF6mdOjAkgxcUOj9G1yTNU5PQLVa9Uq5VdKlX0ARmo1If7UIoAWqm4wcb2PRPDwbVDdTdX54dsBWMXDx70C8KapPFefJ00xSq/n870eqPa0incfk3f5FegzCMwydUPXA/T5MMbevddPcPlbmfrwqQQ8RznW+U6fvPaAqtLGH7j5TS0PBtu4NpZ3d4w6nBYgO9I5tThJLGtyPBzoy5L39UbX6+/9MMZm/uWpKzdOncGnTsz8Q8PMV16cefA7nfmI8LvNcQWb48p2xxnguFf6fUX43ZY2JVva5Oxpo0LaBIvM7y9mXbkh68DveoomrXh3mbTOYVC3JG2uMWk1qh5WaM5zdTPns//J+XtrzrPD6zTnX/eVeV9veLmnz64vfBbAd+FwnLqtJS1b/UNOKxDaTm4KA/kXmGV2ms0hO2FTtx+VgLefWS6+ZbI308zvSWrgxJyY+Z9eLL4Sfp9IYLED/L6BwAb4PUnIL/T7Ouyto9/P8aDo91sFPJRBv4fIAvp9Darb0e9XAHyQfl8VwLz0+waZQ7/vQPUJ+n0CgC3p9y4BdKno902yA37Pn0H1Oap/J1BdA78/ueGqVPC73kUOUd2POY3qQ9jL3ZpQvyGwbpg8Zf+g7Q6K1l0T2WjR+Q4JRO9442/lVSQyvPPpFEuXtuP6w28eNtirvUKpdV0xgdWju1y802MCnkDGSB/M47/hjtxO2ABvSCFZ+Ys+KiE+J/8AdlNUC0LetfoAAAAASUVORK5CYII=";var ne=g(l({__name:"ScrollWrap",props:{moduleValue:{type:Number,default:0},scrollX:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!1}},emits:["update:modelValue","update:needFixed"],setup(e,{emit:a}){const l=e,s=x({offsetX:0,offsetY:0,startX:0,startY:0}),i=t(null),o=t(null),{width:r,height:d}=P(i),{width:u,height:c}=P(o),v=A("PRO_TABLE_KEY"),f=n((()=>{const e=r.value>u.value+4;return a("update:needFixed",e),e})),m=n((()=>d.value>c.value+4)),{direction:p}=k(i,{passive:!1,onSwipeStart(e){const{clientX:a,clientY:l}=e.touches[0];s.startX=a,s.startY=l},onSwipe(e){const{clientX:a,clientY:l}=e.touches[0];if(["UP","DOWN"].includes(p.value)){const e=s.offsetX-(s.startX-a);e>-r.value+u.value&&e<0&&(s.offsetX=e,v.state.offsetX=s.offsetX),s.startY=a}if(["LEFT","RIGHT"].includes(p.value)){const e=s.offsetY-(s.startY-l);e>-d.value+c.value&&e<0&&(s.offsetY=e,v.state.offsetY=s.offsetY),s.startX=l}},onSwipeEnd(e){}}),b=n((()=>l.scrollX||l.scrollY?`transform: translate(${l.scrollX?`${s.offsetX}px`:0},${l.scrollY?`${s.offsetY}px`:0} );`:""));return w((()=>null==v?void 0:v.state),(()=>{const{offsetX:e,offsetY:a}=(null==v?void 0:v.state)||{};f.value&&(s.offsetX=e),m.value&&(s.offsetY=a)}),{deep:!0,immediate:!0}),V((()=>{var e;o.value=null==(e=i.value)?void 0:e.parentElement})),(e,a)=>(Y(),L("div",{ref_key:"swiperEl",ref:i,class:"scroll-wrap",style:X(O(b))},[S(e.$slots,"default",{},void 0,!0)],4))}}),[["__scopeId","data-v-7354771e"]]);const ie={class:"pro-com-table-wrap"},oe={ref:"tableHeadRef",class:"com-table"},re={class:"com-table-head"},de={class:"com-table-row"},ue={ref:"tableBodyRef",class:"com-table"},ce={class:"com-table-head"},ve={class:"com-table-row"},fe={class:"com-table-body"};var me=g(l({__name:"Table",props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},translateY:{type:Number,default:0}},emits:["update:modelValue","update:needFixed"],setup(e,{emit:a}){const l=e=>{a("update:needFixed",e)};return(a,t)=>(Y(),L("div",ie,[d(ne,{ref:"tableScroll",class:"pro-table-head","scroll-x":"","onUpdate:needFixed":l},{default:R((()=>[_("table",oe,[_("thead",re,[_("tr",de,[(Y(!0),L(B,null,T(e.columns,((e,a)=>(Y(),L("th",{key:a,class:E(["table-cell",`table-cell-${a}`]),style:X({minWidth:`${e.width||80}px`})},C(e.title),7)))),128))])])],512)])),_:1},512),d(ne,{ref:"tableScroll",class:"pro-table-body","scroll-y":"","scroll-x":""},{default:R((()=>[_("table",ue,[_("thead",ce,[_("tr",ve,[(Y(!0),L(B,null,T(e.columns,((e,a)=>(Y(),L("th",{key:a,class:E(["table-cell",`table-cell-${a}`]),style:X({minWidth:`${e.width||80}px`})},C(e.title),7)))),128))])]),_("tbody",fe,[(Y(!0),L(B,null,T(e.data,((a,l)=>(Y(),L("tr",{key:l,class:"com-table-row"},[(Y(!0),L(B,null,T(e.columns,((e,t)=>(Y(),L("td",{key:t,class:E(["table-cell"])},[_("span",null,C(e.render?e.render(a,l):a[e.key]),1)])))),128))])))),128))])],512)])),_:1},512)]))}}),[["__scopeId","data-v-f37eb4be"]]);const pe=e=>(F("data-v-0cf962f9"),e=e(),D(),e),be={key:0,class:"pro-table-wrap"},ye={key:1,class:"no-data-wrap"},he=[pe((()=>_("img",{src:ee,alt:"暂无数据"},null,-1))),pe((()=>_("span",null,"暂无数据～",-1)))];var ge=g(l({__name:"ProTable",props:{data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},setup(e){const a=e;t(null),t(null);const l=x({translateY:0,translateX:0,offsetX:0,offsetY:0,needFixed:!1});I("PRO_TABLE_KEY",{state:l});const s=n((()=>N(a.columns)?a.columns.filter((e=>e.fixed)):[])),i=e=>{l.needFixed=e};return(a,t)=>e.data&&e.data.length?(Y(),L("div",be,[d(me,{"translate-y":O(l).translateY,"onUpdate:translateY":t[0]||(t[0]=e=>O(l).translateY=e),columns:e.columns,data:e.data,"onUpdate:needFixed":i},null,8,["translate-y","columns","data"]),O(l).needFixed?(Y(),z(me,{key:0,"translate-y":O(l).translateY,"onUpdate:translateY":t[1]||(t[1]=e=>O(l).translateY=e),class:"pro-table-fixed",style:{width:"160px"},columns:O(s),data:e.data},null,8,["translate-y","columns","data"])):U("",!0)])):(Y(),L("div",ye,he))}}),[["__scopeId","data-v-0cf962f9"]]);const xe={class:"benefit-table"},Pe=l({__name:"BenefitTable",props:{dataSource:null},setup(e){const a=e,l=n((()=>N(a.dataSource.headers)?a.dataSource.headers.map(((e,a)=>({title:e,key:`header_${a}`,fixed:a<2}))):[])),t=n((()=>N(a.dataSource.dataList)?a.dataSource.dataList.map((e=>{const a={};return e.forEach(((e,l)=>{a[`header_${l}`]=e})),a})):[]));return(e,a)=>(Y(),L("div",xe,[d(ge,{columns:O(l),data:O(t),"is-clone":!0},null,8,["columns","data"])]))}});const Ae=e=>(F("data-v-b422b88a"),e=e(),D(),e),ke={key:0,class:"benefit-container"},we={key:0,class:"benefit"},Ve=Ae((()=>_("div",{class:"line"},null,-1))),Ye={class:"box-title box-title-chart"},Le=Ae((()=>_("img",{class:"tl",src:se,alt:""},null,-1))),Se=Ae((()=>_("img",{class:"transform-z180 tr",src:se,alt:""},null,-1))),Xe={key:0},Oe={class:"box"},Re={class:"box-title"},_e=Ae((()=>_("img",{class:"tl",src:se,alt:""},null,-1))),Be=Ae((()=>_("img",{class:"transform-z180 tr",src:se,alt:""},null,-1))),Te={class:"box-price"},Ee={class:"text1"},Ce={class:"text2"},Ie={key:1},Ne={key:2,style:{width:"100%, minWidth: 338px"}},ze={class:"slider"},Ue={style:{flex:"1",margin:"0px 5px"}},Fe={class:"custom-button"},De=Ae((()=>_("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),Je={class:"btn-two"},Ke={key:1,class:"benefit-container"},Qe={key:0},We={class:"benefit"},je=Ae((()=>_("div",{class:"line"},null,-1))),Me=Ae((()=>_("div",null,[_("div",{class:"box"},[_("p",{class:"box-title"},[_("img",{class:"tl",src:se,alt:""}),K(" 保单年度"),_("span",null,"-"),K("年度，被保人"),_("span",null,"-"),K("岁时 "),_("img",{class:"transform-z180 tr",src:se,alt:""})]),_("div",{class:"box-price"})])],-1))),Ze={class:"slider"},qe={class:"opt lf"},Ge={style:{flex:"1",margin:"0px 5px"}},He=Ae((()=>_("div",{class:"custom-button"},"0 岁",-1))),$e={class:"opt rg"},ea=Ae((()=>_("p",{class:"slider-dec"},"拖动按钮查看不同年龄保障",-1))),aa={class:"btn-two"},la={key:1,class:"empty-box"},ta=l({name:"Benefit"});var sa=g(l({...ta,props:{dataSource:{default:()=>({showTypeList:["1"]})},productInfo:{default:()=>null},showTypeList:{default:()=>[]}},setup(a){var l;const s=a,n="1",i="2",o="3",r=t(0),u=t(0),c=t(0),v=t(),f=t(!0),m=t(0),p=t(null==(l=s.showTypeList)?void 0:l[0]),b=t(),y=e=>{if(!(null==e?void 0:e.benefitRiskResultVOList))return;const a=null==e?void 0:e.benefitRiskResultVOList[r.value];u.value=a.ageBegin+1,m.value=a.ageBegin+1,c.value=a.ageEnd},h=()=>{var e,a,l,t,n,i;const o=null==(a=null==(e=s.dataSource)?void 0:e.benefitRiskResultVOList)?void 0:a[r.value];b.value=null==(n=null==(t=null==(l=s.dataSource)?void 0:l.benefitRiskResultVOList)?void 0:t[r.value].benefitRiskTableResultVOList)?void 0:n[0];const{a:d,year:f}=((e,a)=>{const l=[],t=[];for(let s=e,n=0;s<=a;s++,n++)l.push(s.toString()),t.push(n+1);return{a:l,year:t}})(u.value,c.value),p={index:d.indexOf(m.value.toString()),age:d,year:f,result:null==(i=null==o?void 0:o.benefitRiskItemResultVOList)?void 0:i[0]};v.value=p},g=()=>{m.value>c.value-1||(m.value+=1,h())},x=()=>{console.log("1111"),f.value=!1,p.value="2"},P=()=>{m.value>u.value&&(m.value-=1,h())},A=e=>{r.value=e.name,y(s.dataSource),h()};return w((()=>s.dataSource),(e=>{var a;e&&(y(e),h(),p.value=null==(a=e.showTypeList)?void 0:a[0])}),{deep:!0,immediate:!0}),w(m,(()=>{h()})),w(p,(e=>{f.value=e===o})),(l,t)=>{var y;const h=M,k=Z,w=te,V=q,S=G,X=H,E=e;return(null==(y=a.dataSource)?void 0:y.benefitRiskResultVOList)?(Y(),L("div",ke,[d(X,{active:O(r),onClickTab:A},{default:R((()=>{var e;return[(Y(!0),L(B,null,T(null==(e=s.dataSource)?void 0:e.benefitRiskResultVOList,((e,a)=>(Y(),z(S,{key:a,name:a,title:e.riskName},{default:R((()=>{var e,l,y,A,S,X,E,I,N,F,D,M,Z,q,G,H;return[a==O(r)?(Y(),L("div",we,[Ve,J(_("p",Ye,[Le,K(" 保单年度"),_("span",null,C(null==(y=null==(e=O(v))?void 0:e.year)?void 0:y[null==(l=O(v))?void 0:l.index]),1),K("年度，被保人"),_("span",null,C(null==(X=null==(A=O(v))?void 0:A.age)?void 0:X[null==(S=O(v))?void 0:S.index]),1),K("岁时 "),Se],512),[[Q,O(p)===i]]),O(p)===n?(Y(),L("div",Xe,[_("div",Oe,[_("p",Re,[_e,K(" 保单年度"),_("span",null,C(null==(N=null==(E=O(v))?void 0:E.year)?void 0:N[null==(I=O(v))?void 0:I.index]),1),K("年度，被保人"),_("span",null,C(null==(M=null==(F=O(v))?void 0:F.age)?void 0:M[null==(D=O(v))?void 0:D.index]),1),K("岁时 "),Be]),_("div",Te,[(Y(!0),L(B,null,T(null==(q=null==(Z=O(v))?void 0:Z.result)?void 0:q.headers,((e,a)=>{var l,t,s,n,i,o,r,d,u,c;return Y(),L("div",{key:a,style:{width:"33%"}},[_("p",Ee,C(("0"==(null==(i=null==(n=null==(t=null==(l=O(v))?void 0:l.result)?void 0:t.dataList)?void 0:n[null==(s=O(v))?void 0:s.index])?void 0:i[a])?"0":O(W)(Number(null==(c=null==(u=null==(r=null==(o=O(v))?void 0:o.result)?void 0:r.dataList)?void 0:u[null==(d=O(v))?void 0:d.index])?void 0:c[a])))||"0"),1),_("p",Ce,C(e)+"(元）",1)])})),128))])])])):U("",!0),O(p)===o?(Y(),L("div",Ie,[d(h,{closeable:"",show:O(f),position:"bottom",style:{height:"100%"},onClickCloseIcon:x},{default:R((()=>[d(Pe,{"data-source":O(b)},null,8,["data-source"])])),_:1},8,["show"])])):U("",!0),O(p)==i?(Y(),L("div",Ne,[d($,{min:O(u),max:O(c),current:O(m),data:null==(H=null==(G=O(v))?void 0:G.result)?void 0:H.benefitRiskItemList},null,8,["min","max","current","data"])])):U("",!0),O(p)!=o?(Y(),L(B,{key:3},[_("div",ze,[_("div",{class:"opt lf",onClick:P},[d(k,{name:"minus"})]),_("div",Ue,[O(u)?(Y(),z(w,{key:0,modelValue:O(m),"onUpdate:modelValue":t[0]||(t[0]=e=>j(m)?m.value=e:null),min:O(u),max:O(c),"bar-height":"8px"},{button:R((()=>[_("div",Fe,C(O(m))+" 岁",1)])),_:1},8,["modelValue","min","max"])):U("",!0)]),_("div",{class:"opt rg",onClick:g},[d(k,{name:"plus"})])]),De],64)):U("",!0),_("div",Je,[s.showTypeList.includes(n)?(Y(),z(V,{key:0,round:"",plain:O(p)!==n,type:"primary",class:"btn",onClick:t[1]||(t[1]=e=>p.value=n)},{default:R((()=>[K("图表展示")])),_:1},8,["plain"])):U("",!0),s.showTypeList.includes(i)?(Y(),z(V,{key:1,round:"",plain:O(p)!==i,type:"primary",class:"btn",onClick:t[2]||(t[2]=e=>p.value=i)},{default:R((()=>[K("趋势展示")])),_:1},8,["plain"])):U("",!0),s.showTypeList.includes(o)?(Y(),z(V,{key:2,round:"",plain:O(p)!==o,type:"primary",class:"btn",onClick:t[3]||(t[3]=e=>p.value=o)},{default:R((()=>[K("查看利益演示")])),_:1},8,["plain"])):U("",!0)])])):U("",!0)]})),_:2},1032,["name","title"])))),128))]})),_:1},8,["active"])])):(Y(),L("div",Ke,[s.productInfo?(Y(),L("div",Qe,[d(X,{active:O(r),onClickTab:A},{default:R((()=>[(Y(),z(S,{key:1,name:1,title:a.productInfo.insureProductRiskVOList[0].riskName},{default:R((()=>[_("div",We,[je,Me,_("div",Ze,[_("div",qe,[d(k,{name:"minus"})]),_("div",Ge,[d(w,{modelValue:O(m),"onUpdate:modelValue":t[4]||(t[4]=e=>j(m)?m.value=e:null),min:0,max:80,"bar-height":"8px",disabled:""},{button:R((()=>[He])),_:1},8,["modelValue"])]),_("div",$e,[d(k,{name:"plus"})])]),ea,_("div",aa,[d(V,{round:"",plain:!0,type:"primary",class:"btn",disabled:""},{default:R((()=>[K("图表展示")])),_:1}),d(V,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:R((()=>[K("趋势展示")])),_:1}),d(V,{round:"",plain:!1,type:"primary",class:"btn",disabled:""},{default:R((()=>[K("表格展示")])),_:1})])])])),_:1},8,["title"]))])),_:1},8,["active"])])):(Y(),L("div",la,[d(E,{title:"试算结果正在计算中...","empty-class":"empty-select"})]))]))}}}),[["__scopeId","data-v-b422b88a"]]);export{sa as B};
