const q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};q();console.log("Running JS Code");var b=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},v=A,F=E,K=D,G=C,V=O,z=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function E(e){for(var t=[],n=0,i=0,r="",a;(a=z.exec(e))!=null;){var o=a[0],s=a[1],h=a.index;if(r+=e.slice(i,h),i=h+o.length,s){r+=s[1];continue}r&&(t.push(r),r="");var c=a[2],p=a[3],I=a[4],$=a[5],m=a[6],H=a[7],N=m==="+"||m==="*",j=m==="?"||m==="*",U=c||"/",B=I||$||(H?".*":"[^"+U+"]+?");t.push({name:p||n++,prefix:c||"",delimiter:U,optional:j,repeat:N,pattern:W(B)})}return i<e.length&&(r+=e.substr(i)),r&&t.push(r),t}function D(e){return C(E(e))}function C(e){for(var t=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(t[n]=new RegExp("^"+e[n].pattern+"$"));return function(i){for(var r="",a=i||{},o=0;o<e.length;o++){var s=e[o];if(typeof s=="string"){r+=s;continue}var h=a[s.name],c;if(h==null){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to be defined')}if(b(h)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received "'+h+'"');if(h.length===0){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(c=encodeURIComponent(h[p]),!t[o].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');r+=(p===0?s.prefix:s.delimiter)+c}continue}if(c=encodeURIComponent(h),!t[o].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');r+=s.prefix+c}return r}}function T(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function W(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function R(e,t){return e.keys=t,e}function P(e){return e.sensitive?"":"i"}function Z(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return R(e,t)}function J(e,t,n){for(var i=[],r=0;r<e.length;r++)i.push(A(e[r],t,n).source);var a=new RegExp("(?:"+i.join("|")+")",P(n));return R(a,t)}function M(e,t,n){for(var i=E(e),r=O(i,n),a=0;a<i.length;a++)typeof i[a]!="string"&&t.push(i[a]);return R(r,t)}function O(e,t){t=t||{};for(var n=t.strict,i=t.end!==!1,r="",a=e[e.length-1],o=typeof a=="string"&&/\/$/.test(a),s=0;s<e.length;s++){var h=e[s];if(typeof h=="string")r+=T(h);else{var c=T(h.prefix),p=h.pattern;h.repeat&&(p+="(?:"+c+p+")*"),h.optional?c?p="(?:"+c+"("+p+"))?":p="("+p+")?":p=c+"("+p+")",r+=p}}return n||(r=(o?r.slice(0,-2):r)+"(?:\\/(?=$))?"),i?r+="$":r+=n&&o?"":"(?=\\/|$)",new RegExp("^"+r,P(t))}function A(e,t,n){return t=t||[],b(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?Z(e,t):b(e)?J(e,t,n):M(e,t,n)}v.parse=F;v.compile=K;v.tokensToFunction=G;v.tokensToRegExp=V;var d=typeof document<"u",l=typeof window<"u",_=typeof history<"u",X=typeof process<"u",x=d&&document.ontouchstart?"touchstart":"click",u=l&&!!(window.history.location||window.location);function f(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}f.prototype.configure=function(e){var t=e||{};this._window=t.window||l&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&l,this._click=t.click!==!1&&d,this._hashbang=!!t.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):l&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(x,this.clickHandler,!1):d&&n.document.removeEventListener(x,this.clickHandler,!1),this._hashbang&&l&&!_?n.addEventListener("hashchange",this._onpopstate,!1):l&&n.removeEventListener("hashchange",this._onpopstate,!1)};f.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};f.prototype._getBase=function(){var e=this._base;if(e)return e;var t=l&&this._window&&this._window.location;return l&&this._hashbang&&t&&t.protocol==="file:"&&(e=t.pathname),e};f.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};f.prototype.start=function(e){var t=e||{};if(this.configure(t),t.dispatch!==!1){this._running=!0;var n;if(u){var i=this._window,r=i.location;this._hashbang&&~r.hash.indexOf("#!")?n=r.hash.substr(2)+r.search:this._hashbang?n=r.search+r.hash:n=r.pathname+r.search+r.hash}this.replace(n,null,!0,t.dispatch)}};f.prototype.stop=function(){if(!!this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(x,this.clickHandler,!1),l&&e.removeEventListener("popstate",this._onpopstate,!1),l&&e.removeEventListener("hashchange",this._onpopstate,!1)}};f.prototype.show=function(e,t,n,i){var r=new g(e,t,this),a=this.prevContext;return this.prevContext=r,this.current=r.path,n!==!1&&this.dispatch(r,a),r.handled!==!1&&i!==!1&&r.pushState(),r};f.prototype.back=function(e,t){var n=this;if(this.len>0){var i=this._window;_&&i.history.back(),this.len--}else setTimeout(e?function(){n.show(e,t)}:function(){n.show(n._getBase(),t)})};f.prototype.redirect=function(e,t){var n=this;typeof e=="string"&&typeof t=="string"&&y.call(this,e,function(i){setTimeout(function(){n.replace(t)},0)}),typeof e=="string"&&typeof t>"u"&&setTimeout(function(){n.replace(e)},0)};f.prototype.replace=function(e,t,n,i){var r=new g(e,t,this),a=this.prevContext;return this.prevContext=r,this.current=r.path,r.init=n,r.save(),i!==!1&&this.dispatch(r,a),r};f.prototype.dispatch=function(e,t){var n=0,i=0,r=this;function a(){var s=r.exits[i++];if(!s)return o();s(t,a)}function o(){var s=r.callbacks[n++];if(e.path!==r.current){e.handled=!1;return}if(!s)return k.call(r,e);s(e,o)}t?a():o()};f.prototype.exit=function(e,t){if(typeof e=="function")return this.exit("*",e);for(var n=new w(e,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))};f.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,n=e.path||(e.composedPath?e.composedPath():null);if(n){for(var i=0;i<n.length;i++)if(!!n[i].nodeName&&n[i].nodeName.toUpperCase()==="A"&&!!n[i].href){t=n[i];break}}for(;t&&t.nodeName.toUpperCase()!=="A";)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!=="A")){var r=typeof t.href=="object"&&t.href.constructor.name==="SVGAnimatedString";if(!(t.hasAttribute("download")||t.getAttribute("rel")==="external")){var a=t.getAttribute("href");if(!(!this._hashbang&&this._samePath(t)&&(t.hash||a==="#"))&&!(a&&a.indexOf("mailto:")>-1)&&!(r?t.target.baseVal:t.target)&&!(!r&&!this.sameOrigin(t.href))){var o=r?t.href.baseVal:t.pathname+t.search+(t.hash||"");o=o[0]!=="/"?"/"+o:o,X&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var s=o,h=this._getBase();o.indexOf(h)===0&&(o=o.substr(h.length)),this._hashbang&&(o=o.replace("#!","")),!(h&&s===o&&(!u||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(s))}}}}};f.prototype._onpopstate=function(){var e=!1;return l?(d&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(n){if(!!e){var i=this;if(n.state){var r=n.state.path;i.replace(r,n.state)}else if(u){var a=i._window.location;i.show(a.pathname+a.search+a.hash,void 0,void 0,!1)}}}):function(){}}();f.prototype._which=function(e){return e=e||l&&this._window.event,e.which==null?e.button:e.which};f.prototype._toURL=function(e){var t=this._window;if(typeof URL=="function"&&u)return new URL(e,t.location.toString());if(d){var n=t.document.createElement("a");return n.href=e,n}};f.prototype.sameOrigin=function(e){if(!e||!u)return!1;var t=this._toURL(e),n=this._window,i=n.location;return i.protocol===t.protocol&&i.hostname===t.hostname&&(i.port===t.port||i.port===""&&(t.port==80||t.port==443))};f.prototype._samePath=function(e){if(!u)return!1;var t=this._window,n=t.location;return e.pathname===n.pathname&&e.search===n.search};f.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function S(){var e=new f;function t(){return y.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=S,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(n){e.len=n}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(n){e.current=n}}),t.Context=g,t.Route=w,t}function y(e,t){if(typeof e=="function")return y.call(this,"*",e);if(typeof t=="function")for(var n=new w(e,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else typeof e=="string"?this[typeof t=="string"?"redirect":"show"](e,t):this.start(e)}function k(e){if(!e.handled){var t,n=this,i=n._window;n._hashbang?t=u&&this._getBase()+i.location.hash.replace("#!",""):t=u&&i.location.pathname+i.location.search,t!==e.canonicalPath&&(n.stop(),e.handled=!1,u&&(i.location.href=e.canonicalPath))}}function Q(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function g(e,t,n){var i=this.page=n||y,r=i._window,a=i._hashbang,o=i._getBase();e[0]==="/"&&e.indexOf(o)!==0&&(e=o+(a?"#!":"")+e);var s=e.indexOf("?");this.canonicalPath=e;var h=new RegExp("^"+Q(o));if(this.path=e.replace(h,"")||"/",a&&(this.path=this.path.replace("#!","")||"/"),this.title=d&&r.document.title,this.state=t||{},this.state.path=e,this.querystring=~s?i._decodeURLEncodedURIComponent(e.slice(s+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~s?e.slice(0,s):e),this.params={},this.hash="",!a){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=i._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}g.prototype.pushState=function(){var e=this.page,t=e._window,n=e._hashbang;e.len++,_&&t.history.pushState(this.state,this.title,n&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};g.prototype.save=function(){var e=this.page;_&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function w(e,t,n){var i=this.page=n||L,r=t||{};r.strict=r.strict||i._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=v(this.path,this.keys=[],r)}w.prototype.middleware=function(e){var t=this;return function(n,i){if(t.match(n.path,n.params))return n.routePath=t.path,e(n,i);i()}};w.prototype.match=function(e,t){var n=this.keys,i=e.indexOf("?"),r=~i?e.slice(0,i):e,a=this.regexp.exec(decodeURIComponent(r));if(!a)return!1;delete t[0];for(var o=1,s=a.length;o<s;++o){var h=n[o-1],c=this.page._decodeURLEncodedURIComponent(a[o]);(c!==void 0||!hasOwnProperty.call(t,h.name))&&(t[h.name]=c)}return!0};var L=S(),Y=L,ee=L;Y.default=ee;