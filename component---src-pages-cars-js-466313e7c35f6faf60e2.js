(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{OBbA:function(e,t,n){"use strict";t.a=function(e,t){var n=function(e,t,n){return e[n]||t[n]?e[n]?t[n]?e[n]<t[n]?-1:e[n]===t[n]?0:1:1:-1:0};return 0===n(e,t,"startYear")?n(e,t,"variant"):n(e,t,"startYear")}},QmKp:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return v}));n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("f3/d"),n("SRfc"),n("Oyvg"),n("a1Th"),n("Btvt"),n("Vd3H");var a=n("q1tI"),r=n.n(a),o=n("fw5G"),i=n.n(o),c=n("X7BR"),l=n("Bl7J"),u=n("6d1X"),s=n("pXOt"),d=n.n(s),m=n("eFtW"),f=n("rKvQ"),p=n("OBbA"),b=n("IP2g");function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.data,n=e.location,o=new i.a(n.href),s=t[c.b+"Cars"].edges.map((function(e){return e.node})).sort(p.a),v=Object(a.useState)(g(s)),E=v[0],h=v[1];E.splice(0,E.length-20);var w=Object(a.useState)(null),y=w[0],O=w[1],_=function(e,t){o.replaceQueryParam("car"+e,t),o.setPath("/"),window.location.href=o.toString()},A=E.map((function(e){var t=y===e.mongodb_id,n="/images/"+e.mongodb_id+"-resized.jpg";return r.a.createElement("div",{key:"carItem"+e.mongodb_id},r.a.createElement(f.a,{id:e.mongodb_id,name:e.variant+(e.startYear?" - "+e.startYear:""),image:n,big:!0,selected:!1,onClick:function(){o.setPath("/car/"+e.mongodb_id),window.location.href=o.toString()}}),!t&&r.a.createElement("button",{className:d.a.iconButton+" icon-button",onClick:function(){return O(e.mongodb_id)},title:"Ajouter au garage"},r.a.createElement(b.a,{icon:"plus"})),t&&r.a.createElement("div",{className:d.a.carSelectionBox},r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"radio"},r.a.createElement("input",{type:"radio",name:c.a[0],onChange:function(){return _(1,e.mongodb_id)}})," ",c.a[0]),r.a.createElement("label",{className:"radio"},r.a.createElement("input",{type:"radio",name:c.a[1],onChange:function(){return _(2,e.mongodb_id)}})," ",c.a[1]),r.a.createElement("label",{className:"radio"},r.a.createElement("input",{type:"radio",name:c.a[2],onChange:function(){return _(3,e.mongodb_id)}})," ",c.a[2]))))}));return r.a.createElement(l.b,null,r.a.createElement(u.a,{location:n.pathname,title:"Toutes les voitures sportives",description:"Liste de toutes les voitures sportives disponibles"}),r.a.createElement(m.a,{title:s.length+" voitures de sport disponibles!",render:function(){return A},filter:function(e){var t=new RegExp(e,"i"),n=s.filter((function(e){return e.variant.match(t)||e.model.brand.name.match(t)}));h(n)}}))};var v="469919046"}}]);
//# sourceMappingURL=component---src-pages-cars-js-466313e7c35f6faf60e2.js.map