"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[165],{165:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var t=r(861),a=r(439),s=r(757),c=r.n(s),u=r(791),i=r(689),o=r(474),p=r(390),l=r(87),h=r(184),d=function(e){var n,r,t=e.movie,a=t.poster_path,s=t.title,c=t.vote_average,p=t.overview,d=t.genres,f=(0,i.TH)(),v=(0,u.useRef)(null!==(n=null===(r=f.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/movie");return(0,h.jsxs)("div",{children:[(0,h.jsx)(l.rU,{to:v.current,children:(0,h.jsx)("button",{children:"Go back"})}),(0,h.jsxs)("section",{children:[(0,h.jsx)("img",{src:"//image.tmdb.org/t/p/w500"+a,alt:s,width:280}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:s}),(0,h.jsxs)("p",{children:["User Score: ",c]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:p}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:d.map((function(e){return e.name})).join(", ")})]})]}),(0,h.jsxs)("section",{children:[(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.OL,{to:"cast",children:(0,h.jsx)("button",{children:"Cast"})})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.OL,{to:"review",children:(0,h.jsx)("button",{children:"Rreviews"})})})]})]}),(0,h.jsx)(u.Suspense,{fallback:(0,h.jsx)(o.a,{}),children:(0,h.jsx)(i.j3,{})})]})},f=function(){var e=(0,i.UO)().id,n=(0,u.useState)(),r=(0,a.Z)(n,2),s=r[0],l=r[1],f=(0,u.useState)(!1),v=(0,a.Z)(f,2),x=v[0],j=v[1];return(0,u.useEffect)((function(){j(!0);var n=function(){var n=(0,t.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.HI)(e);case 3:r=n.sent,l(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error");case 10:return n.prev=10,j(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,l]),(0,h.jsxs)(h.Fragment,{children:[x&&(0,h.jsx)(o.a,{}),s&&(0,h.jsx)(d,{movie:s})]})}},390:function(e,n,r){r.d(n,{HI:function(){return o},Hg:function(){return u},Jh:function(){return l},_r:function(){return d},on:function(){return v}});var t=r(861),a=r(757),s=r.n(a),c=r(243);function u(){return i.apply(this,arguments)}function i(){return(i=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/all/day");case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits?language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/reviews?language=en-US&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?query=".concat(n,"&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"76462d3bd6c0e95720113bcbaeb46aaa"}}}]);
//# sourceMappingURL=165.1e1df72d.chunk.js.map