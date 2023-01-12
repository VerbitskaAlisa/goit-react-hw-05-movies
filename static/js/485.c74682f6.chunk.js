"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{9355:function(n,t,e){e.d(t,{Df:function(){return u},Pg:function(){return p},oW:function(){return s},tx:function(){return d},zv:function(){return f}});var r=e(5861),a=e(7757),o=e.n(a),c=e(3263);c.Z.defaults.baseURL="https://api.themoviedb.org/";var i="a24504acc04e1862bdc8e18566b301b1",u=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("3/trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1454:function(n,t,e){e.d(t,{a:function(){return i}});var r,a=e(168),o=e(6444).ZP.span(r||(r=(0,a.Z)(["\n    display: flex;\n    justify-content: center;\n    position: relative;\n    width: 64px;\n    height: 64px;\n    background-color: transparent;\n    transform: rotate(45deg);\n    overflow: hidden;\n    margin: 0 auto;\n\n  &:after{\n    content: '';\n    position: absolute;\n    inset: 8px;\n    margin: auto;\n    background: #222b32;\n  }\n  &:before{\n    content: '';\n    position: absolute;\n    inset: -15px;\n    margin: auto;\n    background: #de3500;\n    animation: diamondLoader 2s linear infinite;\n  }\n  @keyframes diamondLoader {\n    0%  ,10% {\n      transform: translate(-64px , -64px) rotate(-45deg)\n    }\n    90% , 100% {\n      transform: translate(0px , 0px) rotate(-45deg)\n    }\n  }\n"]))),c=e(184),i=function(){return(0,c.jsx)(o,{})}},8023:function(n,t,e){e.d(t,{s:function(){return Z}});var r,a,o,c,i,u=e(168),s=e(6444),p=s.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 30px;\n  padding: 0;\n"]))),f=s.ZP.li(a||(a=(0,u.Z)(["\n    text-decoration: none;\n    color: black;\n    opasity: 1;\n    transition: all 0.3s ease-out;\n\n    :hover {\n      opacity: 0.6;\n      scale: 1.1;\n    }\n"]))),d=e(7689),l=e(1087),v=s.ZP.img(o||(o=(0,u.Z)(["\n  display: block;\n  width: 250px;\n  margin-bottom: 10px;\n"]))),x=(0,s.ZP)(l.rU)(c||(c=(0,u.Z)(["\n    text-decoration: none;\n    color: black;\n    opasity: 1;\n    transition: all 0.3s ease-out;\n\n    :hover {\n      opacity: 0.6;\n      scale: 1.1;\n    }\n"]))),m=s.ZP.p(i||(i=(0,u.Z)(["\n    width: 250px;\n"]))),h=e(184),g=function(n){var t=n.poster,e=n.name,r=n.title,a=n.id,o=(0,d.TH)();return(0,h.jsxs)(x,{to:"/movies/".concat(a),state:{from:o},children:[(0,h.jsx)(v,{src:t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):"",alt:"Movie poster"}),(0,h.jsx)(m,{children:r||e})]})},Z=function(n){var t=n.movies;return(0,h.jsx)(p,{children:t.map((function(n){var t=n.id,e=n.poster_path,r=n.name,a=n.title;return(0,h.jsx)(f,{children:(0,h.jsx)(g,{id:t,poster:e,name:r,title:a})},t)}))})}},3485:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a=e(5861),o=e(9439),c=e(7757),i=e.n(c),u=e(2791),s=e(168),p=e(6444).ZP.div(r||(r=(0,s.Z)(["\n    padding: 30px;\n"]))),f=e(9355),d=e(8023),l=e(1454),v=e(7596),x=(e(5462),e(184)),m=function(){var n=(0,u.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],c=(0,u.useState)(!1),s=(0,o.Z)(c,2),m=s[0],h=s[1];return(0,u.useEffect)((function(){function n(){return(n=(0,a.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,f.Df)();case 4:t=n.sent,e=t.results,r(e),h(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),v.Am.error("Ooops! Something went wrong!");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,x.jsxs)(p,{children:[(0,x.jsx)(d.s,{movies:e}),m&&(0,x.jsx)(l.a,{}),(0,x.jsx)(v.Ix,{})]})}}}]);
//# sourceMappingURL=485.c74682f6.chunk.js.map