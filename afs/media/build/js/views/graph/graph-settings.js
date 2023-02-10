require([],(function(){return function(){var e,r,n={21973:function(e,r,n){Promise.all([n.e(3556),n.e(5112),n.e(2171),n.e(2798)]).then((function(){var e=[n(20198),n(84490),n(54922),n(58420),n(63784),n(21415),n(32222),n(46839),n(66639)];(function(e,r,n,o,t,i,a,_){var u=JSON.stringify(i.resources);i.resources.forEach((function(e){e.isRelatable=n.observable(e.is_relatable)}));var c=JSON.stringify(i.graph),s=o.fromJS(i.graph),l=n.observable(""),p=new _({source:i.node,datatypelookup:[],graph:s,ontology_namespaces:i.ontology_namespaces}),f=n.observable(i.node.ontologyclass),d=n.computed((function(){var e=r.filter(i.resources,(function(e){return e.isRelatable()})).map((function(e){return e.id}));return void 0===s.ontology_id()&&s.ontology_id(null),JSON.stringify({graph:o.toJS(s),relatable_resource_ids:e,ontology_class:f()})})),b=n.observable(d()),w={dirty:n.computed((function(){return d()!==b()})),iconFilter:l,icons:n.computed((function(){return r.filter(i.icons,(function(e){return e.name.indexOf(l())>=0}))})),graph:s,relatable_resources:i.resources,ontologies:i.ontologies,ontologyClass:f,ontologyClasses:n.computed((function(){return r.filter(i.ontologyClasses,(function(e){return e.display=p.getFriendlyOntolgyName(e.source),e.ontology_id===s.ontology_id()}))})),save:function(){g.viewModel.loading(!0),e.ajax({type:"POST",url:"",data:d(),success:function(e){b(d()),g.viewModel.loading(!1)},error:function(e){g.viewModel.loading(!1)}})},reset:function(){r.each(JSON.parse(c),(function(e,r){n.isObservable(s[r])&&s[r](e)})),JSON.parse(u).forEach((function(e){r.find(i.resources,(function(r){return r.id===e.id})).isRelatable(e.is_relatable)})),b(d())}},g=new t({viewModel:w})}).apply(null,e)})).catch(n.oe)}},o={};function __webpack_require__(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,__webpack_require__),t.loaded=!0,t.exports}return __webpack_require__.m=n,__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(r,n){return __webpack_require__.f[n](e,r),r}),[]))},__webpack_require__.u=function(e){return"js/"+e+"."+{2171:"06b55d05",2798:"c8197b37",3556:"485fb181",5112:"e1526db9"}[e]+".chunk.js"},__webpack_require__.miniCssF=function(e){},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},e={},r="arches:",__webpack_require__.l=function(n,o,t,i){if(e[n])e[n].push(o);else{var a,_;if(void 0!==t)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var s=u[c];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==r+t){a=s;break}}a||(_=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",r+t),a.src=n),e[n]=[o];var onScriptComplete=function(r,o){a.onerror=a.onload=null,clearTimeout(l);var t=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),t&&t.forEach((function(e){return e(o)})),r)return r(o)},l=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=onScriptComplete.bind(null,a.onerror),a.onload=onScriptComplete.bind(null,a.onload),_&&document.head.appendChild(a)}},__webpack_require__.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},__webpack_require__.p="/static/",function(){var e={9735:0};__webpack_require__.f.j=function(r,n){var o=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else{var t=new Promise((function(n,t){o=e[r]=[n,t]}));n.push(o[2]=t);var i=__webpack_require__.p+__webpack_require__.u(r),a=new Error;__webpack_require__.l(i,(function(n){if(__webpack_require__.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var t=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+r+" failed.\n("+t+": "+i+")",a.name="ChunkLoadError",a.type=t,a.request=i,o[1](a)}}),"chunk-"+r,r)}};var webpackJsonpCallback=function(r,n){var o,t,i=n[0],a=n[1],_=n[2],u=0;if(i.some((function(r){return 0!==e[r]}))){for(o in a)__webpack_require__.o(a,o)&&(__webpack_require__.m[o]=a[o]);if(_)_(__webpack_require__)}for(r&&r(n);u<i.length;u++)t=i[u],__webpack_require__.o(e,t)&&e[t]&&e[t][0](),e[t]=0},r=self.webpackChunkarches=self.webpackChunkarches||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))}(),__webpack_require__(21973)}()}));