(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0E/Q":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return f}));a("Oyvg"),a("SRfc"),a("a1Th"),a("Btvt");var n=a("q1tI"),r=a.n(n),i=a("fw5G"),o=a.n(i),d=a("kCIJ"),c=a("Bl7J"),l=a("eFtW"),s=a("rKvQ"),u=a("6d1X"),m=a("OBbA"),f="1990202850";t.default=function(e){var t=e.data,a=e.pageContext,i=e.location,f=Object(d.useIntl)(),b=new o.a(i.href),g=t.allMongodbBmbu7Ynqra11RqiCars.edges.map((function(e){return e.node})).sort(m.a),p=Object(n.useState)(g),v=p[0],w=p[1],h=v.map((function(e){var t="/images/"+e.mongodb_id+"-resized.jpg";return r.a.createElement(s.a,{key:e.mongodb_id,id:e.mongodb_id,name:e.variant+(e.startYear?" - "+e.startYear:""),image:t,big:!0,onClick:function(){b.addQueryParam("car",e.mongodb_id),b.setPath("/"),window.location.href=b.toString()}})})),E=f.formatMessage({id:"templates.cars.title",values:{brand:a.brand,model:a.model}}),k=f.formatMessage({id:"templates.cars.description",values:{brand:a.brand,model:a.model}});return r.a.createElement(c.a,null,r.a.createElement(u.a,{uri:i.href,location:i.pathname,title:E,description:k}),r.a.createElement(l.a,{title:E,render:function(){return h},filter:function(e){var t=g.filter((function(t){return t.variant.match(new RegExp(e,"i"))}));w(t)}}))}}}]);
//# sourceMappingURL=component---src-templates-cars-js-477b396cabe248473b29.js.map