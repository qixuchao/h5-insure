!function(){var e=document.createElement("style");e.innerHTML='.com-table .table-wrapper[data-v-e69ad8e4]{overflow-x:auto;font-size:.32rem}.com-table .table-wrapper .scroll-table[data-v-e69ad8e4]{table-layout:fixed;width:100%;border-spacing:0}.com-table .table-wrapper .scroll-table .table-header[data-v-e69ad8e4]{color:#393d46;background:#f2f2f2}.com-table .table-wrapper .scroll-table .table-header tr:first-child th[data-v-e69ad8e4]:first-child{border-radius:.10667rem 0 0;border-left:1px solid #EEEFF4}.com-table .table-wrapper .scroll-table .table-header tr:first-child th[data-v-e69ad8e4]:last-child{border-radius:0 .10667rem 0 0}.com-table .table-wrapper .scroll-table .table-header .table-row .table-cell[data-v-e69ad8e4]{border-top:1px solid #EEEFF4}.com-table .table-wrapper .scroll-table .table-body[data-v-e69ad8e4]{color:#969696}.com-table .table-wrapper .scroll-table .table-body tr:last-child td[data-v-e69ad8e4]:first-child{border-radius:0 0 0 .10667rem}.com-table .table-wrapper .scroll-table .table-body tr:last-child td[data-v-e69ad8e4]:last-child{border-radius:0 0 .10667rem}.com-table .table-wrapper .scroll-table .table-body .table-row .table-cell[data-v-e69ad8e4]:first-child{border-left:1px solid #EEEFF4}.com-table .table-wrapper .scroll-table .table-row[data-v-e69ad8e4]{line-height:.53333rem;height:1.06667rem;justify-content:space-between}.com-table .table-wrapper .scroll-table .table-row .table-cell[data-v-e69ad8e4]{position:relative;text-align:center;width:1.06667rem;border-right:1px solid #EEEFF4;border-bottom:1px solid #EEEFF4}.com-table .table-wrapper .scroll-table .table-row .table-cell.fixed[data-v-e69ad8e4]{position:sticky;left:0;z-index:2}.com-table .table-wrapper .scroll-table .table-row .table-cell.fixed[data-v-e69ad8e4]:after{content:" ";width:.4rem;height:100%;position:absolute;top:0;right:-.4rem;background:linear-gradient(270deg,rgba(255,255,255,0) 0%,rgba(0,0,0,.15) 100%);opacity:.36}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-80[data-v-e69ad8e4]{width:1.06667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-90[data-v-e69ad8e4]{width:1.2rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-100[data-v-e69ad8e4]{width:1.33333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-110[data-v-e69ad8e4]{width:1.46667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-120[data-v-e69ad8e4]{width:1.6rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-130[data-v-e69ad8e4]{width:1.73333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-140[data-v-e69ad8e4]{width:1.86667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-150[data-v-e69ad8e4]{width:2rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-160[data-v-e69ad8e4]{width:2.13333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-170[data-v-e69ad8e4]{width:2.26667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-180[data-v-e69ad8e4]{width:2.4rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-190[data-v-e69ad8e4]{width:2.53333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-200[data-v-e69ad8e4]{width:2.66667rem}.com-table .show-more[data-v-e69ad8e4]{padding:.4rem 0;width:100%;display:flex;justify-content:center;align-items:center;font-size:.34667rem;color:#aab9d0}.com-table .show-more .icon[data-v-e69ad8e4]{margin-left:.13333rem;font-size:.26667rem;transition:transform .5s}.com-table .show-more .icon.showMore[data-v-e69ad8e4]{transform:rotate(180deg)}\n',document.head.appendChild(e),System.register(["./index-legacy-56d6d425.js"],(function(e){"use strict";var l,a,t,r,d,b,o,c,i,s,w,p,m,n,h,u;return{setters:[function(e){l=e._,a=e.d,t=e.G,r=e.x,d=e.c,b=e.g,o=e.i,c=e.F,i=e.h,s=e.B,w=e.t,p=e.l,m=e.n,n=e.f,h=e.I,u=e.j}],execute:function(){const v={class:"com-table"},f={class:"table-wrapper"},g={class:"scroll-table"},y={class:"table-header"},x={class:"table-row"},E={class:"table-body"};e("P",l(a({props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(e){const l=e,[a,F]=t(!1),k=()=>{F()},S=r((()=>l.dataSource.length<=4||a.value?l.dataSource:l.dataSource.slice(0,4)));return(l,t)=>(d(),b("div",v,[o("div",f,[o("table",g,[o("thead",y,[o("tr",x,[(d(!0),b(c,null,i(e.columns,((l,a)=>(d(),b("th",{key:a,class:s(["table-cell",`table-cell-width-${l.width}`,`table-cell-${a}`,{fixed:l.fixed||e.columns.length>4&&0===a}])},w(l.title),3)))),128))])]),o("tbody",E,[(d(!0),b(c,null,i(p(S),((l,a)=>(d(),b("tr",{key:a,class:"table-row"},[(d(!0),b(c,null,i(e.columns,((t,r)=>(d(),b("td",{key:r,class:s(["table-cell",`table-cell-width-${t.width}`,{fixed:t.fixed||e.columns.length>4&&0===r}])},[o("span",null,w(t.render?t.render(l,a):l[t.dataIndex]),1)],2)))),128))])))),128))])])]),e.dataSource.length>4?(d(),b("div",{key:0,class:"show-more",onClick:k},[m(w(p(a)?"收起明细":"展开明细")+" ",1),n(h,{name:"down",class:s(["icon",{showMore:p(a)}])},null,8,["class"])])):u("",!0)]))}}),[["__scopeId","data-v-e69ad8e4"]]))}}}))}();
