(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{NBWD:function(e,n,t){"use strict";t.r(n);t("a1Th"),t("Btvt");var a=t("q1tI"),r=t.n(a),i=t("fw5G"),o=t.n(i),c=(t("dW83"),t("X7BR")),u=t("Bl7J"),d=t("6d1X"),l=(t("Oyvg"),t("SRfc"),t("f3/d"),t("Vd3H"),t("eFtW")),f=t("rKvQ");function m(e){var n=e.data,t=e.selectedBrand,i=e.onBrandSelect,o=Object(a.useState)(n),c=o[0],u=o[1],d=c.map((function(e){return e.node})).sort((function(e,n){return e.name>n.name?1:-1})).map((function(e){return r.a.createElement(f.a,{key:e.id,id:e.id,name:e.name,image:e.image,onClick:function(){return i(e.name)},selected:t&&t.id===e.id})}));return r.a.createElement(l.a,{title:"Marques",render:function(){return d},filter:function(e){var t=n.filter((function(n){return n.node.name.match(new RegExp(e,"i"))}));u(t)}})}t.d(n,"query",(function(){return s}));n.default=function(e){var n=e.data,t=e.location,a=new o.a(t.href);return r.a.createElement(u.a,null,r.a.createElement(d.a,{location:t.pathname,title:"Marques",description:"Sélectionnez une marque de voiture"}),r.a.createElement(m,{data:n[c.b+"Brands"].edges,onBrandSelect:function(e){a.setPath("/models/"+e),window.location.href=a.toString()}}))};var s="1950892909"}}]);
//# sourceMappingURL=component---src-pages-browse-js-410b863dd84cf0822602.js.map