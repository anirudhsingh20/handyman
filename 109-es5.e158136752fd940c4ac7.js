(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{uWmP:function(t,e){var r=function(){return function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}(),n=1,s=7,i=4,o=1e3,a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,u=/@import[^;]*;/gim,c=/^@[^\s]*keyframes/,l=/\s+/g;function p(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var f=/\bvar\(/,h=/\B--[\w-]+\s*:/,v=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,d=/^[\t ]+\n/gm;function m(t,e,r){var n=function(t,e){var r=p(f,t,e);if(!r)return null;var n=function(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&--r<=0)return n+1}return n}(t,r.start),s=t.substring(r.end,n-1).split(","),i=s[0],o=s.slice(1);return{start:r.start,end:n,propName:i.trim(),fallback:o.length>0?o.join(",").trim():void 0}}(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,i=null!=n.fallback?S(n.fallback):void 0;return e.push(t.substring(r,n.start),(function(t){return function(t,e,r){return t[e]?t[e]:r?g(r,t):""}(t,s,i)})),n.end}function g(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function y(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var i=t[s];if(r)n&&'"'===i&&(r=!1),n||"'"!==i||(r=!1);else if('"'===i)r=!0,n=!0;else if("'"===i)r=!0,n=!1;else{if(";"===i)return s+1;if("}"===i)return s}}return s}function S(t){var e=0;t=function(t){for(var e="",r=0;;){var n=p(h,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=y(t,s)}return e}(t=t.replace(v,"")).replace(d,"");for(var r=[];e<t.length;)e=m(t,r,e);return r}function b(t){var e={};t.forEach((function(t){t.declarations.forEach((function(t){e[t.prop]=t.value}))}));for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach((function(t){var n=t[0],s=g(t[1],r);s!==r[n]&&(r[n]=s,e=!0)})),!e)return"break"},i=0;i<10&&"break"!==s();i++);return r}function M(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter((function(t){return t.type===n})).forEach((function(t){var n=function(t){for(var e,r=[];e=w.exec(t.trim());){var n=E(e[2]),s=n.value,i=n.important;r.push({prop:e[1].trim(),value:S(s),important:i})}return r}(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach((function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:1,nu:e})})),e++})),r}var w=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function E(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith("!important");return e&&(t=t.substr(0,t.length-"!important".length).trim()),{value:t,important:e}}function x(t){var e=[];return t.forEach((function(t){e.push.apply(e,t.selectors)})),e}function k(t){var e,p=function t(e,r){var a=r.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=a.trim(),e.parent){a=(a=(a=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t}))}(a=r.substring(e.previous?e.previous.end:e.parent.start,e.start-1))).replace(l," ")).substring(a.lastIndexOf(";")+1);var u=e.parsedSelector=e.selector=a.trim();e.atRule=0===u.indexOf("@"),e.atRule?0===u.indexOf("@media")?e.type=i:u.match(c)&&(e.type=s,e.keyframesName=e.selector.split(l).pop()):e.type=0===u.indexOf("--")?o:n}var p=e.rules;if(p)for(var f=0,h=p.length,v=void 0;f<h&&(v=p[f]);f++)t(v,r);return e}(function(t){var e=new r;e.start=0,e.end=t.length;for(var n=e,s=0,i=t.length;s<i;s++)if("{"===t[s]){n.rules||(n.rules=[]);var o=n,a=o.rules[o.rules.length-1]||null;(n=new r).start=s+1,n.parent=o,n.previous=a,o.rules.push(n)}else"}"===t[s]&&(n.end=s+1,n=n.parent||e);return e}(e=(e=t).replace(a,"").replace(u,"")),e),f=S(t);return{original:t,template:f,selectors:M(p),usesCssVars:f.length>1}}function T(t,e){var r=k(e.innerHTML);r.styleEl=e,t.push(r)}function H(t,e,r){var n;return n="."+r,t.replace(new RegExp("\\."+e,"g"),n)}function C(t,e,r){var n=r.href;return fetch(n).then((function(t){return t.text()})).then((function(s){if(((o=s).indexOf("var(")>-1||I.test(o))&&r.parentNode){(function(t){return L.lastIndex=0,L.test(t)})(s)&&(s=function(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(L,(function(t,e){return t.replace(e,r+e)}))}(s,n));var i=t.createElement("style");i.setAttribute("data-styles",""),i.innerHTML=s,T(e,i),r.parentNode.insertBefore(i,r),r.remove()}var o})).catch((function(t){console.error(t)}))}var I=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,L=/url[\s]*\([\s]*['"]?(?![http|/])([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,O=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map}return t.prototype.initShim=function(){var t=this;return new Promise((function(e){t.win.requestAnimationFrame((function(){var r,n;(r=t.doc,n=t.globalScopes,function(t,e){for(var r=t.querySelectorAll("style:not([data-styles])"),n=0;n<r.length;n++)T(e,r[n])}(r,n),function(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]'),s=0;s<n.length;s++)r.push(C(t,e,n[s]));return Promise.all(r)}(r,n)).then((function(){return e()}))}))}))},t.prototype.addLink=function(t){var e=this;return C(this.doc,this.globalScopes,t).then((function(){e.updateGlobal()}))},t.prototype.addGlobalStyle=function(t){T(this.globalScopes,t),this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s,i,o,a,u=this.registerHostTemplate(r,e,n),c=this.doc.createElement("style");return u.usesCssVars?n?(c["s-sc"]=e=u.scopeId+"-"+this.count,c.innerHTML="/*needs update*/",this.hostStyleMap.set(t,c),this.hostScopeMap.set(t,(i=e,o=(s=u).template.map((function(t){return"string"==typeof t?H(t,s.scopeId,i):t})),a=s.selectors.map((function(t){return Object.assign({},t,{selector:H(t.selector,s.scopeId,i)})})),Object.assign({},s,{template:o,selectors:a,scopeId:i}))),this.count++):(u.styleEl=c,u.usesCssVars||(c.innerHTML=g(u.template,{})),this.globalScopes.push(u),this.updateGlobal(),this.hostScopeMap.set(t,u)):c.innerHTML=r,c},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=b(function(t,e,r){var n,s=[],i=function(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}(e,t);return r.forEach((function(t){return s.push(t)})),i.forEach((function(t){return s.push(t)})),(n=x(s).filter((function(e){return function(t,e){return":root"===e||"html"===e||t.matches(e)}(t,e.selector)}))).sort((function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity})),n}(t,this.hostScopeMap,this.globalScopes));r.innerHTML=g(e.template,n)}}},t.prototype.updateGlobal=function(){var t,e;e=b(x(t=this.globalScopes)),t.forEach((function(t){t.usesCssVars&&(t.styleEl.innerHTML=g(t.template,e))}))},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=k(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}(),N=window;N.__stencil_cssshim||N.CSS&&N.CSS.supports&&N.CSS.supports("color","var(--c)")||(N.__stencil_cssshim=new O(N,document))}}]);