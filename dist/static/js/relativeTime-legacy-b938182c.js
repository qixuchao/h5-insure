System.register(["./vendor-legacy-105aea5b.js"],(function(r){"use strict";return{setters:[function(r){r.ap}],execute:function(){var t={exports:{}};r("r",t.exports=function(r,t,e){r=r||{};var n=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(r,t,e,o){return n.fromToBase(r,t,e,o)}e.en.relativeTime=o,n.fromToBase=function(t,n,a,u,s){for(var i,d,f,h=a.$locale().relativeTime||o,l=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],c=l.length,m=0;m<c;m+=1){var y=l[m];y.d&&(i=u?e(t).diff(a,y.d,!0):a.diff(t,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(i));if(f=i>0,p<=y.r||!y.r){p<=1&&m>0&&(y=l[m-1]);var v=h[y.l];s&&(p=s(""+p)),d="string"==typeof v?v.replace("%d",p):v(p,n,y.l,f);break}}if(n)return d;var M=f?h.future:h.past;return"function"==typeof M?M(d):M.replace("%s",d)},n.to=function(r,t){return a(r,t,this,!0)},n.from=function(r,t){return a(r,t,this)};var u=function(r){return r.$u?e.utc():e()};n.toNow=function(r){return this.to(u(this),r)},n.fromNow=function(r){return this.from(u(this),r)}})}}}));
