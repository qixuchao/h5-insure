!function(){var e=document.createElement("style");e.innerHTML='.com-table .table-wrapper[data-v-6cdb7ae5]{overflow-x:auto;font-size:.32rem}.com-table .table-wrapper .scroll-table[data-v-6cdb7ae5]{table-layout:fixed;width:100%;border-spacing:0}.com-table .table-wrapper .scroll-table .table-header[data-v-6cdb7ae5]{color:#393d46;background:#f2f2f2}.com-table .table-wrapper .scroll-table .table-header tr:first-child th[data-v-6cdb7ae5]:first-child{border-radius:.10667rem 0 0;border-left:1px solid #EEEFF4}.com-table .table-wrapper .scroll-table .table-header tr:first-child th[data-v-6cdb7ae5]:last-child{border-radius:0 .10667rem 0 0}.com-table .table-wrapper .scroll-table .table-header .table-row .table-cell[data-v-6cdb7ae5]{border-top:1px solid #EEEFF4}.com-table .table-wrapper .scroll-table .table-body[data-v-6cdb7ae5]{color:#969696}.com-table .table-wrapper .scroll-table .table-body tr:last-child td[data-v-6cdb7ae5]:first-child{border-radius:0 0 0 .10667rem}.com-table .table-wrapper .scroll-table .table-body tr:last-child td[data-v-6cdb7ae5]:last-child{border-radius:0 0 .10667rem}.com-table .table-wrapper .scroll-table .table-body .table-row .table-cell[data-v-6cdb7ae5]:first-child{border-left:1px solid #EEEFF4}.com-table .table-wrapper .scroll-table .table-row[data-v-6cdb7ae5]{line-height:.53333rem;height:1.06667rem;justify-content:space-between}.com-table .table-wrapper .scroll-table .table-row .table-cell[data-v-6cdb7ae5]{position:relative;text-align:center;width:1.06667rem;border-right:1px solid #EEEFF4;border-bottom:1px solid #EEEFF4}.com-table .table-wrapper .scroll-table .table-row .table-cell.fixed[data-v-6cdb7ae5]{position:sticky;left:0;z-index:2}.com-table .table-wrapper .scroll-table .table-row .table-cell.fixed[data-v-6cdb7ae5]:after{content:" ";width:.4rem;height:100%;position:absolute;top:0;right:-.4rem;background:linear-gradient(270deg,rgba(255,255,255,0) 0%,rgba(0,0,0,.15) 100%);opacity:.36}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-80[data-v-6cdb7ae5]{width:1.06667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-90[data-v-6cdb7ae5]{width:1.2rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-100[data-v-6cdb7ae5]{width:1.33333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-110[data-v-6cdb7ae5]{width:1.46667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-120[data-v-6cdb7ae5]{width:1.6rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-130[data-v-6cdb7ae5]{width:1.73333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-140[data-v-6cdb7ae5]{width:1.86667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-150[data-v-6cdb7ae5]{width:2rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-160[data-v-6cdb7ae5]{width:2.13333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-170[data-v-6cdb7ae5]{width:2.26667rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-180[data-v-6cdb7ae5]{width:2.4rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-190[data-v-6cdb7ae5]{width:2.53333rem}.com-table .table-wrapper .scroll-table .table-row .table-cell.table-cell-width-200[data-v-6cdb7ae5]{width:2.66667rem}.com-table .show-more[data-v-6cdb7ae5]{padding:.4rem 0;width:100%;display:flex;justify-content:center;align-items:center;font-size:.34667rem;color:#aab9d0}.com-table .show-more .icon[data-v-6cdb7ae5]{margin-left:.13333rem;font-size:.26667rem;transition:transform .5s}.com-table .show-more .icon.showMore[data-v-6cdb7ae5]{transform:rotate(180deg)}\n',document.head.appendChild(e),System.register(["./vendor-legacy-b51aec28.js","./index-legacy-4aff6740.js"],(function(e){"use strict";var l,a,t,r,b,c,d,o,i,s,w,p,n,m,h,u;return{setters:[function(e){l=e.g,a=e.Q,t=e.y,r=e.j,b=e.n,c=e.z,d=e.F,o=e.G,i=e.L,s=e.J,w=e.A,p=e.C,n=e.p,m=e.t},function(e){h=e._,u=e.q}],execute:function(){const v={class:"com-table"},f={class:"table-wrapper"},g={class:"scroll-table"},y={class:"table-header"},x={class:"table-row"},E={class:"table-body"};e("P",h(l({props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(e){const l=e,[h,F]=a(!1),k=()=>{F()},S=t((()=>l.dataSource.length<=4||h.value?l.dataSource:l.dataSource.slice(0,4)));return(l,a)=>(r(),b("div",v,[c("div",f,[c("table",g,[c("thead",y,[c("tr",x,[(r(!0),b(d,null,o(e.columns,((l,a)=>(r(),b("th",{key:a,class:i(["table-cell",`table-cell-width-${l.width}`,`table-cell-${a}`,{fixed:l.fixed||e.columns.length>4&&0===a}])},s(l.title),3)))),128))])]),c("tbody",E,[(r(!0),b(d,null,o(w(S),((l,a)=>(r(),b("tr",{key:a,class:"table-row"},[(r(!0),b(d,null,o(e.columns,((t,d)=>(r(),b("td",{key:d,class:i(["table-cell",`table-cell-width-${t.width}`,{fixed:t.fixed||e.columns.length>4&&0===d}])},[c("span",null,s(t.render?t.render(l,a):l[t.dataIndex]),1)],2)))),128))])))),128))])])]),e.dataSource.length>4?(r(),b("div",{key:0,class:"show-more",onClick:k},[p(s(w(h)?"收起明细":"展开明细")+" ",1),n(u,{name:"down",class:i(["icon",{showMore:w(h)}])},null,8,["class"])])):m("",!0)]))}}),[["__scopeId","data-v-6cdb7ae5"]]))}}}))}();
