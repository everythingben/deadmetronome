!function(e,n,t){function o(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):d?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||((e=s(d?"svg":"body")).fake=!0),e}var i=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){r.push({name:e,fn:n,options:t})},addAsyncTest:function(e){r.push({name:null,fn:e})}},f=function(){};f.prototype=l,f=new f;var c=n.documentElement,d="svg"===c.nodeName.toLowerCase();f.addTest("csspointerevents",function(){var e=s("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents});var p=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];l._prefixes=p;var u=l.testStyles=function(e,t,o,i){var r,l,f,d,p="modernizr",u=s("div"),h=a();if(parseInt(o,10))for(;o--;)(f=s("div")).id=i?i[o]:p+(o+1),u.appendChild(f);return(r=s("style")).type="text/css",r.id="s"+p,(h.fake?h:u).appendChild(r),h.appendChild(u),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),u.id=p,h.fake&&(h.style.background="",h.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(h)),l=t(u,e),h.fake?(h.parentNode.removeChild(h),c.style.overflow=d,c.offsetHeight):u.parentNode.removeChild(u),!!l};f.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",p.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");u(o,function(e){t=9===e.offsetTop})}return t}),function(){var e,n,t,s,a,l;for(var c in r)if(r.hasOwnProperty(c)){if(e=[],(n=r[c]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)1===(l=e[a].split(".")).length?f[l[0]]=s:(!f[l[0]]||f[l[0]]instanceof Boolean||(f[l[0]]=new Boolean(f[l[0]])),f[l[0]][l[1]]=s),i.push((s?"":"no-")+l.join("-"))}}(),function(e){var n=c.className,t=f._config.classPrefix||"";if(d&&(n=n.baseVal),f._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}f._config.enableClasses&&(n+=" "+t+e.join(" "+t),d?c.className.baseVal=n:c.className=n)}(i),delete l.addTest,delete l.addAsyncTest;for(var h=0;h<f._q.length;h++)f._q[h]();e.Modernizr=f}(window,document);