(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[940],{940:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>v});var r=n(784);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,r=arguments[e];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var o,u=o||(o={});u.Pop="POP",u.Push="PUSH",u.Replace="REPLACE";function c(t){t.preventDefault(),t.returnValue=""}function l(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}const i=function(t){function e(){var t=s.location,e=f.state||{};return[e.idx,{pathname:t.pathname,search:t.search,hash:t.hash,state:e.usr||null,key:e.key||"default"}]}function n(t){if("string"==typeof t)var e=t;else{e=t.pathname;var n=t.search;e=(void 0===e?"/":e)+(void 0===n?"":n)+(void 0===(t=t.hash)?"":t)}return e}function r(t,e){void 0===e&&(e=null);var n=a,r=d;if("string"==typeof t){var o={};if(t){var u=t.indexOf("#");0<=u&&(o.hash=t.substr(u),t=t.substr(0,u)),0<=(u=t.indexOf("?"))&&(o.search=t.substr(u),t=t.substr(0,u)),t&&(o.pathname=t)}t=o}return n({},r,{},t,{state:e,key:Math.random().toString(36).substr(2,8)})}function u(t){v=t,t=e(),p=t[0],d=t[1],y.call({action:v,location:d})}function i(t){f.go(t)}void 0===t&&(t={});var s=void 0===(t=t.window)?document.defaultView:t,f=s.history,h=null;s.addEventListener("popstate",(function(){if(h)g.call(h),h=null;else{var t=o.Pop,n=e(),r=n[0];if(n=n[1],g.length){if(null!=r){var a=p-r;a&&(h={action:t,location:n,retry:function(){i(-1*a)}},i(a))}}else u(t)}}));var v=o.Pop,p=(t=e())[0],d=t[1],y=l(),g=l();return null==p&&(p=0,f.replaceState(a({},f.state,{idx:p}),"")),{get action(){return v},get location(){return d},createHref:n,push:function t(e,a){var c=o.Push,l=r(e,a);if(!g.length||(g.call({action:c,location:l,retry:function(){t(e,a)}}),0)){var i=[{usr:l.state,key:l.key,idx:p+1},n(l)];l=i[0],i=i[1];try{f.pushState(l,"",i)}catch(t){s.location.assign(i)}u(c)}},replace:function t(e,a){var c=o.Replace,l=r(e,a);g.length&&(g.call({action:c,location:l,retry:function(){t(e,a)}}),1)||(l=[{usr:l.state,key:l.key,idx:p},n(l)],f.replaceState(l[0],"",l[1]),u(c))},go:i,back:function(){i(-1)},forward:function(){i(1)},listen:function(t){return y.push(t)},block:function(t){var e=g.push(t);return 1===g.length&&s.addEventListener("beforeunload",c),function(){e(),g.length||s.removeEventListener("beforeunload",c)}}}}();function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}const f=({children:t,...e})=>r.createElement("button",s({style:{color:"red"}},e),t),h=t=>{const[e,n="/"]=decodeURI(t.hash).match(/^#(.+)/)||[];return n},v=()=>{const[t,e]=(0,r.useState)(h(i.location)),[n,a]=(0,r.useState)(0);return(0,r.useEffect)((()=>i.listen((({location:t,action:n,...r})=>e(h(t)))))),r.createElement("section",null,r.createElement("h1",null,"Level"),r.createElement("nav",null,r.createElement(f,{onClick:t=>a((t=>t+1))},n),r.createElement(f,null,"Button-3")))}}}]);