(this["webpackJsonpemployees-app"]=this["webpackJsonpemployees-app"]||[]).push([[0],{48:function(e,t,n){e.exports=n(83)},53:function(e,t,n){},54:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),u=(n(53),n(15)),s=n(3),l=(n(54),n(18)),i=n(20),m=n(41),p=n(10),f=n.n(p),h=n(16),d=n(28),E=n(43),v=n.n(E),g=function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={data:null,error:null},e.prev=1,e.next=4,t;case 4:n.data=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.error=e.t0;case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(v.a.get("https://jsonplaceholder.typicode.com/users")),e.next=3,t;case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var w=function(e){var t=e.users;return console.log(t),t.length?r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(u.Link,{key:e.id,to:"/user/".concat(e.id)},r.a.createElement("h1",null,e.name))}))):r.a.createElement("h3",null,"Loading...")};var b=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),u=Object(d.a)(o,2),s=u[0],l=u[1],i=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:(t=e.sent).error?l(t.error):c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){setTimeout((function(){i()}),2e3)}),[]),s?r.a.createElement("h1",null,"error"):r.a.createElement(w,{users:n})};n(79);function x(){return r.a.createElement(l.a,{bg:"light"},r.a.createElement(l.a.Brand,{href:"#home"},"Navbar with text"),r.a.createElement(l.a.Toggle,null),r.a.createElement(l.a.Collapse,{className:"justify-content-end"},r.a.createElement(i.a,{className:"mr-auto"},r.a.createElement(i.a.Link,{href:"#home"},"Home"),r.a.createElement(m.LinkContainer,{to:"/users"},r.a.createElement(i.a.Link,{href:"#"},"Users")),r.a.createElement(i.a.Link,{as:u.Link,href:"/users"},"Users")),r.a.createElement(l.a.Text,null,"Signed in as:"," ",r.a.createElement("a",{href:"#login"},"Mark Otto"))))}var j=function(){return r.a.createElement(u.BrowserRouter,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(s.d,{path:"/users",exact:!0,component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.0d84c5f2.chunk.js.map