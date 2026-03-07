"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=n(function(x,a){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),v=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/stats-strided-dmeanors/dist').ndarray;function m(e){var r=e[0];return d(s(r,0),o(r),v(r,0),q(r))}a.exports=m
});var f=require("path").join,c=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=t(),i,u=c(f(__dirname,"./native.js"));g(u)?i=j:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
