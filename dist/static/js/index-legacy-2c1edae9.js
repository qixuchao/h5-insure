!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-table .table-wrapper[data-v-f0d2c3e8]{overflow-x:auto;font-size:.32rem}.com-table .table-wrapper .scroll-table[data-v-f0d2c3e8]{table-layout:fixed;width:100%;border-spacing:0}.com-table .table-wrapper .scroll-table .table-header[data-v-f0d2c3e8]{color:#393d46;background:#f2f2f2}.com-table .table-wrapper .scroll-table .table-header tr:first-child th[data-v-f0d2c3e8]:first-child{border-radius:.10667rem 0 0}.com-table .table-wrapper .scroll-table .table-header tr:first-child th[data-v-f0d2c3e8]:last-child{border-radius:0 .10667rem 0 0}.com-table .table-wrapper .scroll-table .table-header .table-row .table-cell[data-v-f0d2c3e8]{border-top:1px solid #eeeff4}.com-table .table-wrapper .scroll-table .table-body[data-v-f0d2c3e8]{color:#969696}.com-table .table-wrapper .scroll-table .table-body tr:last-child td[data-v-f0d2c3e8]:first-child{border-radius:0 0 0 .10667rem}.com-table .table-wrapper .scroll-table .table-body tr:last-child td[data-v-f0d2c3e8]:last-child{border-radius:0 0 .10667rem}.com-table .table-wrapper .scroll-table .table-body .table-row .table-cell[data-v-f0d2c3e8]:first-child{border-left:1px solid #eeeff4}.com-table .table-wrapper .scroll-table .table-row[data-v-f0d2c3e8]{line-height:.53333rem;height:1.06667rem;justify-content:space-between}.com-table .table-wrapper .scroll-table .table-row .table-cell[data-v-f0d2c3e8]{position:relative;text-align:center;width:1.06667rem;border-right:1px solid #eeeff4;border-bottom:1px solid #eeeff4}.com-table .table-wrapper .scroll-table .table-row .table-cell.fixed[data-v-f0d2c3e8]{position:sticky;left:0;z-index:2}.com-table .table-wrapper .scroll-table .table-row .table-cell.fixed[data-v-f0d2c3e8]:after{content:" ";width:.4rem;height:100%;position:absolute;top:0;right:-.4rem;background:linear-gradient(270deg,rgba(255,255,255,0) 0%,rgba(0,0,0,.15) 100%);opacity:.36}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-80[data-v-f0d2c3e8]{width:1.06667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-90[data-v-f0d2c3e8]{width:1.2rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-100[data-v-f0d2c3e8]{width:1.33333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-110[data-v-f0d2c3e8]{width:1.46667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-120[data-v-f0d2c3e8]{width:1.6rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-130[data-v-f0d2c3e8]{width:1.73333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-140[data-v-f0d2c3e8]{width:1.86667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-150[data-v-f0d2c3e8]{width:2rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-160[data-v-f0d2c3e8]{width:2.13333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-170[data-v-f0d2c3e8]{width:2.26667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-180[data-v-f0d2c3e8]{width:2.4rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-190[data-v-f0d2c3e8]{width:2.53333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-200[data-v-f0d2c3e8]{width:2.66667rem}.com-table .show-more[data-v-f0d2c3e8]{padding:.4rem 0;width:100%;display:flex;justify-content:center;align-items:center;font-size:.34667rem;color:#aab9d0}.com-table .show-more .icon[data-v-f0d2c3e8]{margin-left:.13333rem;font-size:.26667rem;transition:transform .5s}.com-table .show-more .icon.showMore[data-v-f0d2c3e8]{transform:rotate(180deg)}\n',document.head.appendChild(e),System.register(["./vendor-legacy-45ccfd45.js","./index-legacy-92a05ca7.js"],(function(e){"use strict";var l,t,a,r,c,d,b,o,s,i,w,n,p,m,f,h;return{setters:[function(e){l=e.g,t=e.a5,a=e.x,r=e.h,c=e.m,d=e.y,b=e.F,o=e.E,s=e.J,i=e.I,w=e.z,n=e.B,p=e.n,m=e.s},function(e){f=e._,h=e.n}],execute:function(){const u={class:"com-table"},v={class:"table-wrapper"},g={class:"scroll-table"},y={class:"table-header"},x={class:"table-row"},k={class:"table-body"};e("P",f(l({props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(e){const l=e,[f,S]=t(!1),z=()=>{S()},j=a((()=>l.dataSource.length<=4||f.value?l.dataSource:l.dataSource.slice(0,4)));return(l,t)=>(r(),c("div",u,[d("div",v,[d("table",g,[d("thead",y,[d("tr",x,[(r(!0),c(b,null,o(e.columns,((l,t)=>(r(),c("th",{key:t,class:s(["table-cell",`table-cell-width-${l.width}`,`table-cell-${t}`,{fixed:l.fixed||e.columns.length>4&&0===t}])},i(l.title),3)))),128))])]),d("tbody",k,[(r(!0),c(b,null,o(w(j),((l,t)=>(r(),c("tr",{key:t,class:"table-row"},[(r(!0),c(b,null,o(e.columns,((a,b)=>(r(),c("td",{key:b,class:s(["table-cell",`table-cell-width-${a.width}`,{fixed:a.fixed||e.columns.length>4&&0===b}])},[d("span",null,i(a.render?a.render(l,t):l[a.dataIndex]),1)],2)))),128))])))),128))])])]),e.dataSource.length>4?(r(),c("div",{key:0,class:"show-more",onClick:z},[n(i(w(f)?"收起明细":"展开明细")+" ",1),p(h,{name:"down",class:s(["icon",{showMore:w(f)}])},null,8,["class"])])):m("",!0)]))}}),[["__scopeId","data-v-f0d2c3e8"]]))}}}))}();
