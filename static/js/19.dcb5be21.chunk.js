"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[19],{242:function(t,e,n){n.d(e,{e:function(){return o}});var a=n(243),c="057e36269a3ddafbb398756699f3ba82",r="https://api.themoviedb.org/3/",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a.Z.get("".concat(r).concat(t,"?api_key=").concat(c).concat(""===e?e:"&query=".concat(e)))}},19:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var a=n(439),c=n(791),r=n(242),o=n(689),i=n(358),u=n(184),l=function(){var t=(0,o.UO)().movieId,e=(0,c.useState)(),n=(0,a.Z)(e,2),l=n[0],s=n[1],d=(0,c.useCallback)((function(){try{(0,r.e)("movie/".concat(t,"/credits")).then((function(t){var e=t.data;s(e)}))}catch(e){console.log(e)}}),[t]);return(0,c.useEffect)((function(){d()}),[d]),(0,u.jsxs)(u.Fragment,{children:[!(null!==l&&void 0!==l&&l.cast.length)&&(0,u.jsx)("h3",{children:"no result"}),(0,u.jsx)("ul",{children:null===l||void 0===l?void 0:l.cast.map((function(t){var e=t.character,n=t.name,a=t.profile_path;t.id;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):i,alt:n,width:"200"}),(0,u.jsx)("p",{children:n||"no name"}),(0,u.jsx)("p",{children:e||"no character"})]},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}())}))})]})}},358:function(t,e,n){t.exports=n.p+"static/media/no-image.03e9fe72296af4f48ae2.jpg"}}]);
//# sourceMappingURL=19.dcb5be21.chunk.js.map