"use strict";(self.webpackChunkperfect_garage=self.webpackChunkperfect_garage||[]).push([[262],{6471:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(7606),i="filtered-list-module--listHeader--H8u8k",l="filtered-list-module--searchInput--HbyqD",o=function(e){var t=e.title,n=e.render,o=e.filter,c=(0,a.useState)(null),u=c[0],s=c[1],m=(0,a.useState)(null),d=m[0],g=m[1];return a.createElement(a.Fragment,null,a.createElement("header",{className:["field","is-size-4",i].join(" ")},a.createElement("h1",{className:"has-text-light"},t),a.createElement("p",{className:"control has-text-dark has-icons-right"},a.createElement("input",{id:"search-input",type:"text",onKeyUp:function(){var e=document.querySelector("#search-input");if(e.value!==u){clearTimeout(d);var t=setTimeout((function(){return o(e.value)}),700);g(t),s(e.value)}},className:[l,"input"].join(" ")}),a.createElement("span",{className:"icon is-right"},a.createElement(r.G,{icon:"search"})))),a.createElement("ul",{className:"filtered-list-module--list--jcHES"},n()))}},250:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=function(e){var t=e.id,n=e.name,r=e.image,i=e.onClick,l=e.selected,o=e.big,c=["list-item-module--logoLink--kpsH-"];return l&&c.push("list-item-module--selected--Nwx6Q"),o?c.push("list-item-module--logoLinkBig--pmnhY"):c.push("list-item-module--logoLinkSmall--4A+qc"),a.createElement("button",{type:"button",className:c.join(" "),onClick:function(){return i(t)}},a.createElement("figure",null,a.createElement("img",{src:r,alt:n}),a.createElement("figcaption",null,n)))};r.defaultProps={selected:!1,big:!1};var i=r},1530:function(e,t,n){n.d(t,{o7:function(){return r},hS:function(){return i}});var a=function(e,t,n){return e[n]||t[n]?e[n]?t[n]?e[n]===t[n]?0:e[n]<t[n]?-1:1:1:-1:0},r=function(e,t){return 0===a(e,t,"startYear")?a(e,t,"variant"):a(e,t,"startYear")},i=function(e,t){return 0===a(e.brand,t.brand,"name")?a(e,t,"name"):a(e.brand,t.brand,"name")}},9243:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(5785),r=n(7294),i=n(7767),l=n.n(i),o=n(7606),c=n(1545),u=n(6471),s=n(250),m=n(7106),d=n(8769),g=n(1530),f=n(5095),p="cars-module--radioLabel--zMEFK",b=function(e){var t=e.data,n=e.location,i=(0,c.useIntl)(),b=new(l())(n.href),h=t.allMongodbBmbu7Ynqra11RqiCars.edges.map((function(e){return e.node})).sort(g.o7),E=(0,r.useState)((0,a.Z)(h)),v=E[0],k=E[1];v.splice(0,v.length-20);var N=(0,r.useState)(null),_=N[0],y=N[1],C=function(e,t){b.replaceQueryParam("car"+e,t),b.setPath("/"),(0,c.navigate)((0,f.XX)(b))},S=v.map((function(e){var t=_===e.mongodb_id,n="/images/"+e.mongodb_id+"-resized.jpg",a=["radio",p].join(" ");return r.createElement("li",{key:"carItem"+e.mongodb_id},r.createElement(s.Z,{id:e.mongodb_id,name:e.variant+(e.startYear?" - "+e.startYear:""),image:n,big:!0,selected:!1,onClick:function(){return y(e.mongodb_id)}}),!t&&r.createElement("button",{type:"button",className:"cars-module--iconButton--Nzewk icon-button",onClick:function(){return y(e.mongodb_id)},title:i.formatMessage({id:"pages.cars.add_to_garage_tooltip"})},r.createElement(o.G,{icon:"plus"})),t&&r.createElement("div",{className:"cars-module--carSelectionBox--e3-Cg"},r.createElement("div",{className:"control"},r.createElement("label",{className:a},r.createElement("input",{type:"radio",name:"#1",onChange:function(){return C(1,e.mongodb_id)}}),"  #1"),r.createElement("label",{className:a},r.createElement("input",{type:"radio",name:"#2",onChange:function(){return C(2,e.mongodb_id)}}),"  #2"),r.createElement("label",{className:a},r.createElement("input",{type:"radio",name:"#3",onChange:function(){return C(3,e.mongodb_id)}}),"  #3"))))}));return r.createElement(m.A,{uri:b.toString()},r.createElement(d.H,{uri:n.href,location:n.pathname,title:i.formatMessage({id:"pages.cars.meta.title"}),description:i.formatMessage({id:"pages.cars.meta.description"})}),r.createElement(u.Z,{title:h.length+" "+i.formatMessage({id:"pages.cars.list_title"}),render:function(){return S},filter:function(e){var t=new RegExp(e,"i"),n=h.filter((function(e){return e.variant.match(t)||e.model.brand.name.match(t)}));k(n)}}))}}}]);
//# sourceMappingURL=component---src-pages-cars-js-32ac4a4900570044f011.js.map