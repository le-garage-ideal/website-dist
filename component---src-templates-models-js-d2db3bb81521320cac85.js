"use strict";(self.webpackChunkperfect_garage=self.webpackChunkperfect_garage||[]).push([[366],{6471:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(7606),l="filtered-list-module--listHeader--H8u8k",i="filtered-list-module--searchInput--HbyqD",u=function(e){var t=e.title,n=e.render,u=e.filter,o=(0,a.useState)(null),c=o[0],m=o[1],s=(0,a.useState)(null),d=s[0],f=s[1];return a.createElement(a.Fragment,null,a.createElement("header",{className:["field","is-size-4",l].join(" ")},a.createElement("h1",{className:"has-text-light"},t),a.createElement("p",{className:"control has-text-dark has-icons-right"},a.createElement("input",{id:"search-input",type:"text",onKeyUp:function(){var e=document.querySelector("#search-input");if(e.value!==c){clearTimeout(d);var t=setTimeout((function(){return u(e.value)}),700);f(t),m(e.value)}},className:[i,"input"].join(" ")}),a.createElement("span",{className:"icon is-right"},a.createElement(r.G,{icon:"search"})))),a.createElement("ul",{className:"filtered-list-module--list--jcHES"},n()))}},250:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=function(e){var t=e.id,n=e.name,r=e.image,l=e.onClick,i=e.selected,u=e.big,o=["list-item-module--logoLink--kpsH-"];return i&&o.push("list-item-module--selected--Nwx6Q"),u?o.push("list-item-module--logoLinkBig--pmnhY"):o.push("list-item-module--logoLinkSmall--4A+qc"),a.createElement("button",{type:"button",className:o.join(" "),onClick:function(){return l(t)}},a.createElement("figure",null,a.createElement("img",{src:r,alt:n}),a.createElement("figcaption",null,n)))};r.defaultProps={selected:!1,big:!1};var l=r},1530:function(e,t,n){n.d(t,{o7:function(){return r},hS:function(){return l}});var a=function(e,t,n){return e[n]||t[n]?e[n]?t[n]?e[n]===t[n]?0:e[n]<t[n]?-1:1:1:-1:0},r=function(e,t){return 0===a(e,t,"startYear")?a(e,t,"variant"):a(e,t,"startYear")},l=function(e,t){return 0===a(e.brand,t.brand,"name")?a(e,t,"name"):a(e.brand,t.brand,"name")}},2758:function(e,t,n){n.r(t);var a=n(5785),r=n(7294),l=n(7767),i=n.n(l),u=n(1545),o=n(1530),c=n(6471),m=n(250),s=n(7106),d=n(8769),f=n(5095);t.default=function(e){var t=e.data,n=e.pageContext,l=e.location,g=(0,u.useIntl)(),p=new(i())(l.href),h=t.allMongodbBmbu7Ynqra11RqiCars.edges.map((function(e){return e.node})).sort((function(e,t){return(0,o.hS)(e.model,t.model)})).reduce((function(e,t){return e[e.length-1]&&e[e.length-1].model.name===t.model.name?e:[].concat((0,a.Z)(e),[t])}),[]),b=(0,r.useState)(h),E=b[0],v=b[1],k=E.map((function(e){return r.createElement("li",{key:e.model.name},r.createElement(m.Z,{id:e.model.name,name:e.model.name,image:"/images/"+e.mongodb_id+"-resized.jpg",big:!0,onClick:function(){p.setPath("/cars/"+e.model.brand.name+"/"+e.model.name),(0,u.navigate)((0,f.XX)(p))}}))})),N=g.formatMessage({id:"templates.models.title"},{brand:n.brand}),S=g.formatMessage({id:"templates.models.description"},{brand:n.brand});return r.createElement(s.A,null,r.createElement(d.H,{uri:l.href,location:l.pathname,title:N,description:S}),r.createElement(c.Z,{title:N,render:function(){return k},filter:function(e){var t=h.filter((function(t){return t.model.name.match(new RegExp(e,"i"))}));v(t)}}))}}}]);
//# sourceMappingURL=component---src-templates-models-js-d2db3bb81521320cac85.js.map