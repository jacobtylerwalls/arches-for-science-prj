require([],(function(){return function(){var e,r,i={},t={};function __webpack_require__(e){var r=t[e];if(void 0!==r)return r.exports;var n=t[e]={id:e,loaded:!1,exports:{}};return i[e].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.m=i,__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(r,i){return __webpack_require__.f[i](e,r),r}),[]))},__webpack_require__.u=function(e){return"js/"+e+"."+{2171:"06b55d05",3094:"24c97a26",3556:"485fb181"}[e]+".chunk.js"},__webpack_require__.miniCssF=function(e){},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},e={},r="arches:",__webpack_require__.l=function(i,t,n,_){if(e[i])e[i].push(t);else{var a,o;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==r+n){a=d;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",r+n),a.src=i),e[i]=[t];var onScriptComplete=function(r,t){a.onerror=a.onload=null,clearTimeout(l);var n=e[i];if(delete e[i],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((function(e){return e(t)})),r)return r(t)},l=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=onScriptComplete.bind(null,a.onerror),a.onload=onScriptComplete.bind(null,a.onload),o&&document.head.appendChild(a)}},__webpack_require__.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},__webpack_require__.p="/static/",function(){var e={5467:0};__webpack_require__.f.j=function(r,i){var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)i.push(t[2]);else{var n=new Promise((function(i,n){t=e[r]=[i,n]}));i.push(t[2]=n);var _=__webpack_require__.p+__webpack_require__.u(r),a=new Error;__webpack_require__.l(_,(function(i){if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var n=i&&("load"===i.type?"missing":i.type),_=i&&i.target&&i.target.src;a.message="Loading chunk "+r+" failed.\n("+n+": "+_+")",a.name="ChunkLoadError",a.type=n,a.request=_,t[1](a)}}),"chunk-"+r,r)}};var webpackJsonpCallback=function(r,i){var t,n,_=i[0],a=i[1],o=i[2],u=0;if(_.some((function(r){return 0!==e[r]}))){for(t in a)__webpack_require__.o(a,t)&&(__webpack_require__.m[t]=a[t]);if(o)o(__webpack_require__)}for(r&&r(i);u<_.length;u++)n=_[u],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkarches=self.webpackChunkarches||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))}();return Promise.all([__webpack_require__.e(3556),__webpack_require__.e(2171),__webpack_require__.e(3094)]).then((function(){var e=[__webpack_require__(20198),__webpack_require__(84490),__webpack_require__(54922),__webpack_require__(84826),__webpack_require__(94333),__webpack_require__(83094),__webpack_require__(84714)];(function(e,r,i,t,n,_){return new(n.extend({initialize:function(e){var a=this,o=_.cards,u=_.edits,c={create:{icon:"fa fa-chevron-circle-right fa-lg",color:"bg-mint"},"tile edit":{icon:"fa fa-repeat fa-lg",color:"bg-purple"},"tile create":{icon:"fa fa-plus fa-lg",color:"bg-dark"},"tile delete":{icon:"fa fa-minus fa-lg",color:"bg-danger"},"delete edit":{icon:"fa fa-minus fa-lg",color:"bg-danger"}},d=function handleChildCards(e){e.cards.length>0&&r.each(e.cards,(function(i){r.each(r.where(u,{nodegroupid:i.nodegroup_id}),(function(r){r.card=i,r.cardContainerName=e.name})),handleChildCards(i)}),this)};!function(){r.each(o,(function(e){r.each(r.where(u,{nodegroupid:e.nodegroup_id}),(function(r){r.card=e,r.cardContainerName=null})),d(e)}),this)}();var createFullValue=function(e,i){var t={};function rounder(e,r){return"number"==typeof r?Math.round(1e7*r)/1e7:r}return r.each(e,(function(e,n){r.isObject(e)&&e.features&&(e=r.map(e.features,(function(e){return JSON.stringify(e.geometry,rounder,4)}))),t[n]={new_value:e},i.card&&r.each(i.card.nodes,(function(e){n==e.nodeid&&(t[e.nodeid].node=e)}),this)})),r.map(t,(function(e,r){return e}))};r.each(u,(function(e){var r=t(e.timestamp);e.time=r.format("HH:mm"),e.day=r.format("DD MMMM, YYYY"),e.editor=""!=e.user_email?e.user_email:e.user_username,e.edit_type_icon=c[e.edittype],e.nodegroupid&&(e.full_new_value=createFullValue(e.newvalue,e),e.full_old_value=createFullValue(e.oldvalue,e),e.full_new_provisional_value=createFullValue(e.newprovisionalvalue,e),e.full_old_provisional_value=createFullValue(e.oldprovisionalvalue,e))})),this.viewModel.displayname=_.displayname,this.viewModel.description=_.description,this.viewModel.sortOrder=i.observable("time_desc"),this.viewModel.edits=i.observableArray(u),this.viewModel.edits.sort((function(e,r){return e.timestamp==r.timestamp?0:e.timestamp>r.timestamp?-1:1})),this.viewModel.currentDate=t().format("MMMM D, YYYY"),this.viewModel.sortOrder.subscribe((function(e){var r={time_desc:{property:"timestamp",direction:"gt"},time_asc:{property:"timestamp",direction:"lt"},editor_asc:{property:"user_email",direction:"lt"},type_desc:{property:"edittype",direction:"gt"}},i=r[e].property;"gt"==r[e].direction?a.viewModel.edits.sort((function(e,r){return e[i]==r[i]?0:e[i]>r[i]?-1:1})):a.viewModel.edits.sort((function(e,r){return e[i]==r[i]?0:e[i]<r[i]?-1:1}))})),n.prototype.initialize.call(this,e)}}))}).apply(null,e)})).catch(__webpack_require__.oe),{}}()}));