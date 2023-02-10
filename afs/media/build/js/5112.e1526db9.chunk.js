/*! For license information please see 5112.e1526db9.chunk.js.LICENSE.txt */
(self.webpackChunkarches=self.webpackChunkarches||[]).push([[5112],{41825:function(e,h,m){var k,w;k=[m(20198)],w=function(e){return function(e){"use strict";var b=function(h,m,k,w,C){this.fallbackValue=k?"string"==typeof k?this.parse(k):k:null,this.fallbackFormat=w||"rgba",this.hexNumberSignPrefix=!0===C,this.value=this.fallbackValue,this.origFormat=null,this.predefinedColors=m||{},this.colors=e.extend({},b.webColors,this.predefinedColors),h&&(void 0!==h.h?this.value=h:this.setColor(String(h))),this.value||(this.value={h:0,s:0,b:0,a:1})};b.webColors={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",transparent:"transparent"},b.prototype={constructor:b,colors:{},predefinedColors:{},getValue:function(){return this.value},setValue:function(e){this.value=e},_sanitizeNumber:function(e){return"number"==typeof e?e:isNaN(e)||null===e||""===e||void 0===e?1:""===e?0:void 0!==e.toLowerCase?(e.match(/^\./)&&(e="0"+e),Math.ceil(100*parseFloat(e))/100):1},isTransparent:function(e){return!(!e||!("string"==typeof e||e instanceof String))&&("transparent"===(e=e.toLowerCase().trim())||e.match(/#?00000000/)||e.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/))},rgbaIsTransparent:function(e){return 0===e.r&&0===e.g&&0===e.b&&0===e.a},setColor:function(e){if(e=e.toLowerCase().trim()){if(this.isTransparent(e))return this.value={h:0,s:0,b:0,a:0},!0;var h=this.parse(e);h?(this.value=this.value={h:h.h,s:h.s,b:h.b,a:h.a},this.origFormat||(this.origFormat=h.format)):this.fallbackValue&&(this.value=this.fallbackValue)}return!1},setHue:function(e){this.value.h=1-e},setSaturation:function(e){this.value.s=e},setBrightness:function(e){this.value.b=1-e},setAlpha:function(e){this.value.a=Math.round(parseInt(100*(1-e),10)/100*100)/100},toRGB:function(e,h,m,k){var w,C,S,T,F;return 0===arguments.length&&(e=this.value.h,h=this.value.s,m=this.value.b,k=this.value.a),e=(e*=360)%360/60,w=C=S=m-(F=m*h),w+=[F,T=F*(1-Math.abs(e%2-1)),0,0,T,F][e=~~e],C+=[T,F,F,T,0,0][e],S+=[0,0,T,F,F,T][e],{r:Math.round(255*w),g:Math.round(255*C),b:Math.round(255*S),a:k}},toHex:function(e,h,m,k,w){arguments.length<=1&&(h=this.value.h,m=this.value.s,k=this.value.b,w=this.value.a);var C="#",S=this.toRGB(h,m,k,w);return this.rgbaIsTransparent(S)?"transparent":(e||(C=this.hexNumberSignPrefix?"#":""),C+((1<<24)+(parseInt(S.r)<<16)+(parseInt(S.g)<<8)+parseInt(S.b)).toString(16).slice(1))},toHSL:function(e,h,m,k){0===arguments.length&&(e=this.value.h,h=this.value.s,m=this.value.b,k=this.value.a);var w=e,C=(2-h)*m,S=h*m;return S/=C>0&&C<=1?C:2-C,C/=2,S>1&&(S=1),{h:isNaN(w)?0:w,s:isNaN(S)?0:S,l:isNaN(C)?0:C,a:isNaN(k)?0:k}},toAlias:function(e,h,m,k){var w,C=0===arguments.length?this.toHex(!0):this.toHex(!0,e,h,m,k),S="alias"===this.origFormat?C:this.toString(!1,this.origFormat);for(var T in this.colors)if((w=this.colors[T].toLowerCase().trim())===C||w===S)return T;return!1},RGBtoHSB:function(e,h,m,k){var w,C,S,T;return e/=255,h/=255,m/=255,w=((w=0==(T=(S=Math.max(e,h,m))-Math.min(e,h,m))?null:S===e?(h-m)/T:S===h?(m-e)/T+2:(e-h)/T+4)+360)%6*60/360,C=0===T?0:T/S,{h:this._sanitizeNumber(w),s:C,b:S,a:this._sanitizeNumber(k)}},HueToRGB:function(e,h,m){return m<0?m+=1:m>1&&(m-=1),6*m<1?e+(h-e)*m*6:2*m<1?h:3*m<2?e+(h-e)*(2/3-m)*6:e},HSLtoRGB:function(e,h,m,k){var w;h<0&&(h=0);var C=2*m-(w=m<=.5?m*(1+h):m+h-m*h),S=e+1/3,T=e,F=e-1/3;return[Math.round(255*this.HueToRGB(C,w,S)),Math.round(255*this.HueToRGB(C,w,T)),Math.round(255*this.HueToRGB(C,w,F)),this._sanitizeNumber(k)]},parse:function(h){if("string"!=typeof h)return this.fallbackValue;if(0===arguments.length)return!1;var m,k,w=this,C=!1,S=void 0!==this.colors[h];return S&&(h=this.colors[h].toLowerCase().trim()),e.each(this.stringParsers,(function(e,T){var F=T.re.exec(h);return!(m=F&&T.parse.apply(w,[F]))||(C={},k=S?"alias":T.format?T.format:w.getValidFallbackFormat(),(C=k.match(/hsla?/)?w.RGBtoHSB.apply(w,w.HSLtoRGB.apply(w,m)):w.RGBtoHSB.apply(w,m))instanceof Object&&(C.format=k),!1)})),C},getValidFallbackFormat:function(){var e=["rgba","rgb","hex","hsla","hsl"];return this.origFormat&&-1!==e.indexOf(this.origFormat)?this.origFormat:this.fallbackFormat&&-1!==e.indexOf(this.fallbackFormat)?this.fallbackFormat:"rgba"},toString:function(e,h,m){m=m||!1;var k=!1;switch(h=h||this.origFormat||this.fallbackFormat){case"rgb":return k=this.toRGB(),this.rgbaIsTransparent(k)?"transparent":"rgb("+k.r+","+k.g+","+k.b+")";case"rgba":return"rgba("+(k=this.toRGB()).r+","+k.g+","+k.b+","+k.a+")";case"hsl":return k=this.toHSL(),"hsl("+Math.round(360*k.h)+","+Math.round(100*k.s)+"%,"+Math.round(100*k.l)+"%)";case"hsla":return k=this.toHSL(),"hsla("+Math.round(360*k.h)+","+Math.round(100*k.s)+"%,"+Math.round(100*k.l)+"%,"+k.a+")";case"hex":return this.toHex(e);case"alias":return!1===(k=this.toAlias())?this.toString(e,this.getValidFallbackFormat()):m&&!(k in b.webColors)&&k in this.predefinedColors?this.predefinedColors[k]:k;default:return k}},stringParsers:[{re:/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,format:"rgb",parse:function(e){return[e[1],e[2],e[3],1]}},{re:/rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,format:"rgb",parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],1]}},{re:/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,format:"hsl",parse:function(e){return[e[1]/360,e[2]/100,e[3]/100,e[4]]}},{re:/hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"hsla",parse:function(e){return[e[1]/360,e[2]/100,e[3]/100,e[4]]}},{re:/#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:"hex",parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),1]}},{re:/#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,format:"hex",parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),1]}}],colorNameToHex:function(e){return void 0!==this.colors[e.toLowerCase()]&&this.colors[e.toLowerCase()]}};var h={horizontal:!1,inline:!1,color:!1,format:!1,input:"input",container:!1,component:".add-on, .input-group-addon",fallbackColor:!1,fallbackFormat:"hex",hexNumberSignPrefix:!0,sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},slidersHorz:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:100,maxTop:0,callLeft:"setHue",callTop:!1},alpha:{maxLeft:100,maxTop:0,callLeft:"setAlpha",callTop:!1}},template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',align:"right",customClass:null,colorSelectors:null},d=function(m,k){this.element=e(m).addClass("colorpicker-element"),this.options=e.extend(!0,{},h,this.element.data(),k),this.component=this.options.component,this.component=!1!==this.component&&this.element.find(this.component),this.component&&0===this.component.length&&(this.component=!1),this.container=!0===this.options.container?this.element:this.options.container,this.container=!1!==this.container&&e(this.container),this.input=this.element.is("input")?this.element:!!this.options.input&&this.element.find(this.options.input),this.input&&0===this.input.length&&(this.input=!1),this.color=this.createColor(!1!==this.options.color?this.options.color:this.getValue()),this.format=!1!==this.options.format?this.options.format:this.color.origFormat,!1!==this.options.color&&(this.updateInput(this.color),this.updateData(this.color)),this.disabled=!1;var w=this.picker=e(this.options.template);if(this.options.customClass&&w.addClass(this.options.customClass),this.options.inline?w.addClass("colorpicker-inline colorpicker-visible"):w.addClass("colorpicker-hidden"),this.options.horizontal&&w.addClass("colorpicker-horizontal"),-1===["rgba","hsla","alias"].indexOf(this.format)&&!1!==this.options.format&&"transparent"!==this.getValue()||w.addClass("colorpicker-with-alpha"),"right"===this.options.align&&w.addClass("colorpicker-right"),!0===this.options.inline&&w.addClass("colorpicker-no-arrow"),this.options.colorSelectors){var C=this,S=C.picker.find(".colorpicker-selectors");S.length>0&&(e.each(this.options.colorSelectors,(function(h,m){var k=e("<i />").addClass("colorpicker-selectors-color").css("background-color",m).data("class",h).data("alias",h);k.on("mousedown.colorpicker touchstart.colorpicker",(function(h){h.preventDefault(),C.setValue("alias"===C.format?e(this).data("alias"):e(this).css("background-color"))})),S.append(k)})),S.show().addClass("colorpicker-visible"))}w.on("mousedown.colorpicker touchstart.colorpicker",e.proxy((function(e){e.target===e.currentTarget&&e.preventDefault()}),this)),w.find(".colorpicker-saturation, .colorpicker-hue, .colorpicker-alpha").on("mousedown.colorpicker touchstart.colorpicker",e.proxy(this.mousedown,this)),w.appendTo(this.container?this.container:e("body")),!1!==this.input&&(this.input.on({"keyup.colorpicker":e.proxy(this.keyup,this)}),this.input.on({"input.colorpicker":e.proxy(this.change,this)}),!1===this.component&&this.element.on({"focus.colorpicker":e.proxy(this.show,this)}),!1===this.options.inline&&this.element.on({"focusout.colorpicker":e.proxy(this.hide,this)})),!1!==this.component&&this.component.on({"click.colorpicker":e.proxy(this.show,this)}),!1===this.input&&!1===this.component&&this.element.on({"click.colorpicker":e.proxy(this.show,this)}),!1!==this.input&&!1!==this.component&&"color"===this.input.attr("type")&&this.input.on({"click.colorpicker":e.proxy(this.show,this),"focus.colorpicker":e.proxy(this.show,this)}),this.update(),e(e.proxy((function(){this.element.trigger("create")}),this))};d.Color=b,d.prototype={constructor:d,destroy:function(){this.picker.remove(),this.element.removeData("colorpicker","color").off(".colorpicker"),!1!==this.input&&this.input.off(".colorpicker"),!1!==this.component&&this.component.off(".colorpicker"),this.element.removeClass("colorpicker-element"),this.element.trigger({type:"destroy"})},reposition:function(){if(!1!==this.options.inline||this.options.container)return!1;var e=this.container&&this.container[0]!==window.document.body?"position":"offset",h=this.component||this.element,m=h[e]();"right"===this.options.align&&(m.left-=this.picker.outerWidth()-h.outerWidth()),this.picker.css({top:m.top+h.outerHeight(),left:m.left})},show:function(h){this.isDisabled()||(this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"),this.reposition(),e(window).on("resize.colorpicker",e.proxy(this.reposition,this)),!h||this.hasInput()&&"color"!==this.input.attr("type")||h.stopPropagation&&h.preventDefault&&(h.stopPropagation(),h.preventDefault()),!this.component&&this.input||!1!==this.options.inline||e(window.document).on({"mousedown.colorpicker":e.proxy(this.hide,this)}),this.element.trigger({type:"showPicker",color:this.color}))},hide:function(h){return(void 0===h||!h.target||!(e(h.currentTarget).parents(".colorpicker").length>0||e(h.target).parents(".colorpicker").length>0))&&(this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"),e(window).off("resize.colorpicker",this.reposition),e(window.document).off({"mousedown.colorpicker":this.hide}),this.update(),void this.element.trigger({type:"hidePicker",color:this.color}))},updateData:function(e){return e=e||this.color.toString(!1,this.format),this.element.data("color",e),e},updateInput:function(e){return e=e||this.color.toString(!1,this.format),!1!==this.input&&(this.input.prop("value",e),this.input.trigger("change")),e},updatePicker:function(e){void 0!==e&&(this.color=this.createColor(e));var h=!1===this.options.horizontal?this.options.sliders:this.options.slidersHorz,m=this.picker.find("i");if(0!==m.length)return!1===this.options.horizontal?(h=this.options.sliders,m.eq(1).css("top",h.hue.maxTop*(1-this.color.value.h)).end().eq(2).css("top",h.alpha.maxTop*(1-this.color.value.a))):(h=this.options.slidersHorz,m.eq(1).css("left",h.hue.maxLeft*(1-this.color.value.h)).end().eq(2).css("left",h.alpha.maxLeft*(1-this.color.value.a))),m.eq(0).css({top:h.saturation.maxTop-this.color.value.b*h.saturation.maxTop,left:this.color.value.s*h.saturation.maxLeft}),this.picker.find(".colorpicker-saturation").css("backgroundColor",this.color.toHex(!0,this.color.value.h,1,1,1)),this.picker.find(".colorpicker-alpha").css("backgroundColor",this.color.toHex(!0)),this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor",this.color.toString(!0,this.format)),e},updateComponent:function(e){var h;if(h=void 0!==e?this.createColor(e):this.color,!1!==this.component){var m=this.component.find("i").eq(0);m.length>0?m.css({backgroundColor:h.toString(!0,this.format)}):this.component.css({backgroundColor:h.toString(!0,this.format)})}return h.toString(!1,this.format)},update:function(e){var h;return!1===this.getValue(!1)&&!0!==e||(h=this.updateComponent(),this.updateInput(h),this.updateData(h),this.updatePicker()),h},setValue:function(e){this.color=this.createColor(e),this.update(!0),this.element.trigger({type:"changeColor",color:this.color,value:e})},createColor:function(e){return new b(e||null,this.options.colorSelectors,this.options.fallbackColor?this.options.fallbackColor:this.color,this.options.fallbackFormat,this.options.hexNumberSignPrefix)},getValue:function(e){var h;return e=void 0===e?this.options.fallbackColor:e,void 0!==(h=this.hasInput()?this.input.val():this.element.data("color"))&&""!==h&&null!==h||(h=e),h},hasInput:function(){return!1!==this.input},isDisabled:function(){return this.disabled},disable:function(){return this.hasInput()&&this.input.prop("disabled",!0),this.disabled=!0,this.element.trigger({type:"disable",color:this.color,value:this.getValue()}),!0},enable:function(){return this.hasInput()&&this.input.prop("disabled",!1),this.disabled=!1,this.element.trigger({type:"enable",color:this.color,value:this.getValue()}),!0},currentSlider:null,mousePointer:{left:0,top:0},mousedown:function(h){!h.pageX&&!h.pageY&&h.originalEvent&&h.originalEvent.touches&&(h.pageX=h.originalEvent.touches[0].pageX,h.pageY=h.originalEvent.touches[0].pageY),h.stopPropagation(),h.preventDefault();var m=e(h.target).closest("div"),k=this.options.horizontal?this.options.slidersHorz:this.options.sliders;if(!m.is(".colorpicker")){if(m.is(".colorpicker-saturation"))this.currentSlider=e.extend({},k.saturation);else if(m.is(".colorpicker-hue"))this.currentSlider=e.extend({},k.hue);else{if(!m.is(".colorpicker-alpha"))return!1;this.currentSlider=e.extend({},k.alpha)}var w=m.offset();this.currentSlider.guide=m.find("i")[0].style,this.currentSlider.left=h.pageX-w.left,this.currentSlider.top=h.pageY-w.top,this.mousePointer={left:h.pageX,top:h.pageY},e(window.document).on({"mousemove.colorpicker":e.proxy(this.mousemove,this),"touchmove.colorpicker":e.proxy(this.mousemove,this),"mouseup.colorpicker":e.proxy(this.mouseup,this),"touchend.colorpicker":e.proxy(this.mouseup,this)}).trigger("mousemove")}return!1},mousemove:function(e){!e.pageX&&!e.pageY&&e.originalEvent&&e.originalEvent.touches&&(e.pageX=e.originalEvent.touches[0].pageX,e.pageY=e.originalEvent.touches[0].pageY),e.stopPropagation(),e.preventDefault();var h=Math.max(0,Math.min(this.currentSlider.maxLeft,this.currentSlider.left+((e.pageX||this.mousePointer.left)-this.mousePointer.left))),m=Math.max(0,Math.min(this.currentSlider.maxTop,this.currentSlider.top+((e.pageY||this.mousePointer.top)-this.mousePointer.top)));return this.currentSlider.guide.left=h+"px",this.currentSlider.guide.top=m+"px",this.currentSlider.callLeft&&this.color[this.currentSlider.callLeft].call(this.color,h/this.currentSlider.maxLeft),this.currentSlider.callTop&&this.color[this.currentSlider.callTop].call(this.color,m/this.currentSlider.maxTop),!1!==this.options.format||"setAlpha"!==this.currentSlider.callTop&&"setAlpha"!==this.currentSlider.callLeft||(1!==this.color.value.a?(this.format="rgba",this.color.origFormat="rgba"):(this.format="hex",this.color.origFormat="hex")),this.update(!0),this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(h){return h.stopPropagation(),h.preventDefault(),e(window.document).off({"mousemove.colorpicker":this.mousemove,"touchmove.colorpicker":this.mousemove,"mouseup.colorpicker":this.mouseup,"touchend.colorpicker":this.mouseup}),!1},change:function(e){this.color=this.createColor(this.input.val()),this.color.origFormat&&!1===this.options.format&&(this.format=this.color.origFormat),!1!==this.getValue(!1)&&(this.updateData(),this.updateComponent(),this.updatePicker()),this.element.trigger({type:"changeColor",color:this.color,value:this.input.val()})},keyup:function(e){38===e.keyCode?(this.color.value.a<1&&(this.color.value.a=Math.round(100*(this.color.value.a+.01))/100),this.update(!0)):40===e.keyCode&&(this.color.value.a>0&&(this.color.value.a=Math.round(100*(this.color.value.a-.01))/100),this.update(!0)),this.element.trigger({type:"changeColor",color:this.color,value:this.input.val()})}},e.colorpicker=d,e.fn.colorpicker=function(h){var m=Array.prototype.slice.call(arguments,1),k=1===this.length,w=null,C=this.each((function(){var k=e(this),C=k.data("colorpicker");C||(C=new d(this,"object"==typeof h?h:{}),k.data("colorpicker",C)),"string"==typeof h?e.isFunction(C[h])?w=C[h].apply(C,m):(m.length&&(C[h]=m[0]),w=C[h]):w=k}));return k?w:C},e.fn.colorpicker.constructor=d}(e)}.apply(h,k),void 0===w||(e.exports=w)},58420:function(e,h,m){!function(e){"use strict";(function(e,h){function t(){for(var e,h,m,k=arguments,w=k.length,C={},S=[];w--;)for(e=(m=k[w]).length;e--;)C[h=m[e]]||(C[h]=1,S.push(h));return S}function n(e,m){var k;for(var w in m)if(m.hasOwnProperty(w)&&m[w])if(k=h.getType(e[w]),w&&e[w]&&"array"!==k&&"string"!==k)n(e[w],m[w]);else{var C="array"===h.getType(e[w])&&"array"===h.getType(m[w]);e[w]=C?t(e[w],m[w]):m[w]}}function a(e,h){var m={};return n(m,e),n(m,h),m}function i(e,h){for(var m=a({},e),k=T.length-1;k>=0;k--){var w=T[k];m[w]&&(m[""]instanceof Object||(m[""]={}),m[""][w]=m[w],delete m[w])}return h&&(m.ignore=o(h.ignore,m.ignore),m.include=o(h.include,m.include),m.copy=o(h.copy,m.copy),m.observe=o(h.observe,m.observe)),m.ignore=o(m.ignore,M.ignore),m.include=o(m.include,M.include),m.copy=o(m.copy,M.copy),m.observe=o(m.observe,M.observe),m.mappedProperties=m.mappedProperties||{},m.copiedProperties=m.copiedProperties||{},m}function o(m,k){return void 0===m?m=[]:"array"!==h.getType(m)&&(m=[m]),void 0===k?k=[]:"array"!==h.getType(k)&&(k=[k]),e.utils.arrayGetDistinctValues(m.concat(k))}function u(h,m){var k=e.dependentObservable;e.dependentObservable=function(m,k,w){w=w||{},m&&"object"==typeof m&&(w=m);var S=w.deferEvaluation,T=w.pure,F=!1,s=function(m){var k=e.dependentObservable;e.dependentObservable=C;var w=e.isWriteableObservable(m);e.dependentObservable=k;var S=C({read:function(){return F||(e.utils.arrayRemoveItem(h,m),F=!0),m.apply(m,arguments)},write:w&&function(e){return m(e)},deferEvaluation:!0});return S.__DO=m,S};w.deferEvaluation=!0;var L=C(m,k,w);return S||T||(L=s(L),h.push(L)),L},e.dependentObservable.fn=C.fn,e.computed=e.dependentObservable;var w=m();return e.dependentObservable=k,e.computed=e.dependentObservable,w}function s(C,S,T,L,M,H,N){var A="array"===h.getType(e.utils.unwrapObservable(S));if(H=H||"",h.isMapped(C)){var V=e.utils.unwrapObservable(C)[w];T=a(V,T)}var B={data:S,parent:N||M},x=function(){return T[L]&&T[L].create instanceof Function},I=function(h){return u(m,(function(){return e.utils.unwrapObservable(M)instanceof Array?T[L].create({data:h||B.data,parent:B.parent,skip:F}):T[L].create({data:h||B.data,parent:B.parent})}))},E=function(){return T[L]&&T[L].update instanceof Function},P=function(h,m){var k={data:m||B.data,parent:B.parent,target:e.utils.unwrapObservable(h)};return e.isWriteableObservable(h)&&(k.observable=h),T[L].update(k)},j=k.get(S);if(j)return j;if(L=L||"",A){var z=[],R=!1,D=function(e){return e};T[L]&&T[L].key&&(D=T[L].key,R=!0),e.isObservable(C)||((C=e.observableArray([])).mappedRemove=function(e){var h="function"==typeof e?e:function(h){return h===D(e)};return C.remove((function(e){return h(D(e))}))},C.mappedRemoveAll=function(h){var m=c(h,D);return C.remove((function(h){return-1!==e.utils.arrayIndexOf(m,D(h))}))},C.mappedDestroy=function(e){var h="function"==typeof e?e:function(h){return h===D(e)};return C.destroy((function(e){return h(D(e))}))},C.mappedDestroyAll=function(h){var m=c(h,D);return C.destroy((function(h){return-1!==e.utils.arrayIndexOf(m,D(h))}))},C.mappedIndexOf=function(h){var m=c(C(),D),k=D(h);return e.utils.arrayIndexOf(m,k)},C.mappedGet=function(e){return C()[C.mappedIndexOf(e)]},C.mappedCreate=function(h){if(-1!==C.mappedIndexOf(h))throw new Error("There already is an object with the key that you specified.");var m=x()?I(h):h;if(E()){var k=P(m,h);e.isWriteableObservable(m)?m(k):m=k}return C.push(m),m});var q=c(e.utils.unwrapObservable(C),D).sort(),G=c(S,D);R&&G.sort();var _,W,J,X=e.utils.compareArrays(q,G),Y={},$=e.utils.unwrapObservable(S),K={},Q=!0;for(_=0,W=$.length;W>_;_++){if(void 0===(J=D($[_]))||J instanceof Object){Q=!1;break}K[J]=$[_]}var U,Z,ee=[],te=0;for(_=0,W=X.length;W>_;_++){J=X[_];var re,oe=H+"["+y(_)+"]";switch(J.status){case"added":re=s(void 0,U=Q?K[J.value]:f(e.utils.unwrapObservable(S),J.value,D),T,L,C,oe,M),x()||(re=e.utils.unwrapObservable(re)),Z=p(e.utils.unwrapObservable(S),U,Y),re===F?te++:ee[Z-te]=re,Y[Z]=!0;break;case"retained":U=Q?K[J.value]:f(e.utils.unwrapObservable(S),J.value,D),s(re=f(C,J.value,D),U,T,L,C,oe,M),ee[Z=p(e.utils.unwrapObservable(S),U,Y)]=re,Y[Z]=!0;break;case"deleted":re=f(C,J.value,D)}z.push({event:J.status,item:re})}C(ee),T[L]&&T[L].arrayChanged&&e.utils.arrayForEach(z,(function(e){T[L].arrayChanged(e.event,e.item)}))}else if(d(S)){if(!(C=e.utils.unwrapObservable(C))){if(x()){var ie=I();return E()&&(ie=P(ie)),ie}if(E())return P();C={}}if(E()&&(C=P(C)),k.save(S,C),E())return C;v(S,(function(m){var w=H.length?H+"."+y(m):y(m);if(-1===e.utils.arrayIndexOf(T.ignore,w)){if(-1!==e.utils.arrayIndexOf(T.copy,w))return void(C[m]=S[m]);if("object"!=typeof S[m]&&"array"!==h.getType(S[m])&&T.observe.length>0&&-1===e.utils.arrayIndexOf(T.observe,w))return C[m]=S[m],void(T.copiedProperties[w]=!0);var F=k.get(S[m]),L=s(C[m],S[m],T,m,C,w,C),M=F||L;if(T.observe.length>0&&-1===e.utils.arrayIndexOf(T.observe,w))return C[m]=e.utils.unwrapObservable(M),void(T.copiedProperties[w]=!0);e.isWriteableObservable(C[m])?(M=e.utils.unwrapObservable(M),C[m]()!==M&&C[m](M)):(M=void 0===C[m]?M:e.utils.unwrapObservable(M),C[m]=M),T.mappedProperties[w]=!0}}))}else if("function"===h.getType(S))E()?e.isWriteableObservable(S)?(S(P(S)),C=S):C=P(S):C=S;else{var ae;if(e.isWriteableObservable(C))return E()?(ae=P(C),C(ae),ae):(ae=e.utils.unwrapObservable(S),C(ae),ae);var ne=x()||E();if(C=x()?I():e.observable(e.utils.unwrapObservable(S)),E()&&C(P(C)),ne)return C}return C}function p(e,h,m){for(var k=0,w=e.length;w>k;k++)if(!0!==m[k]&&e[k]===h)return k;return null}function l(m,k){var w;return k&&(w=k(m)),"undefined"===h.getType(w)&&(w=m),e.utils.unwrapObservable(w)}function f(h,m,k){for(var w=0,C=(h=e.utils.unwrapObservable(h)).length;C>w;w++){var S=h[w];if(l(S,k)===m)return S}throw new Error("When calling ko.update*, the key '"+m+"' was not found!")}function c(h,m){return e.utils.arrayMap(e.utils.unwrapObservable(h),(function(e){return m?l(e,m):e}))}function v(e,m){if("array"===h.getType(e))for(var k=0;k<e.length;k++)m(k);else for(var w in e)e.hasOwnProperty(w)&&m(w)}function d(e){if(null===e)return!1;var m=h.getType(e);return"object"===m||"array"===m}function b(e,m,k){var w=e||"";return"array"===h.getType(m)?e&&(w+="["+y(k)+"]"):(e&&(w+="."),w+=y(k)),w}function y(e){return(""+e).replace(/~/g,"~~").replace(/\[/g,"~[").replace(/]/g,"~]").replace(/\./g,"~.")}function g(){var h=[],m=[];this.save=function(k,w){var C=e.utils.arrayIndexOf(h,k);C>=0?m[C]=w:(h.push(k),m.push(w))},this.get=function(k){var w=e.utils.arrayIndexOf(h,k);return w>=0?m[w]:void 0}}function O(){var e={},r=function(h){var m;try{m=h}catch(e){m="$$$"}var k=e[m];return e.hasOwnProperty(m)||(k=new g,e[m]=k),k};this.save=function(e,h){r(e).save(e,h)},this.get=function(e){return r(e).get(e)}}e.mapping=h;var m,k,w="__ko_mapping__",C=e.dependentObservable,S=0,T=["create","update","key","arrayChanged"],F={},L={include:["_destroy"],ignore:[],copy:[],observe:[]},M=L;h.isMapped=function(h){var m=e.utils.unwrapObservable(h);return m&&m[w]},h.fromJS=function(e){if(0===arguments.length)throw new Error("When calling ko.fromJS, pass the object you want to convert.");try{var h,C;S||(m=[],k=new O),S++,2===arguments.length&&(arguments[1][w]?C=arguments[1]:h=arguments[1]),3===arguments.length&&(h=arguments[1],C=arguments[2]),C&&(h=a(h,C[w]));var T=s(C,e,h=i(h));if(C&&(T=C),!--S)for(;m.length;){var F=m.pop();F&&(F(),F.__DO.throttleEvaluation=F.throttleEvaluation)}return T[w]=a(T[w],h),T}catch(e){throw S=0,e}},h.fromJSON=function(m){var k=Array.prototype.slice.call(arguments,0);return k[0]=e.utils.parseJson(m),h.fromJS.apply(this,k)},h.toJS=function(m,k){if(M||h.resetDefaultOptions(),0===arguments.length)throw new Error("When calling ko.mapping.toJS, pass the object you want to convert.");if("array"!==h.getType(M.ignore))throw new Error("ko.mapping.defaultOptions().ignore should be an array.");if("array"!==h.getType(M.include))throw new Error("ko.mapping.defaultOptions().include should be an array.");if("array"!==h.getType(M.copy))throw new Error("ko.mapping.defaultOptions().copy should be an array.");return k=i(k,m[w]),h.visitModel(m,(function(h){return e.utils.unwrapObservable(h)}),k)},h.toJSON=function(m,k,w,C){var S=h.toJS(m,k);return e.utils.stringifyJson(S,w,C)},h.defaultOptions=function(){return arguments.length>0?void(M=arguments[0]):M},h.resetDefaultOptions=function(){M={include:L.include.slice(0),ignore:L.ignore.slice(0),copy:L.copy.slice(0),observe:L.observe.slice(0)}},h.getType=function(e){if(e&&"object"==typeof e){if(e.constructor===Date)return"date";if(e.constructor===Array)return"array"}return typeof e},h.visitModel=function(m,k,C){(C=C||{}).visitedObjects=C.visitedObjects||new O;var S,T=e.utils.unwrapObservable(m);if(!d(T))return k(m,C.parentName);C=i(C,T[w]),k(m,C.parentName),S="array"===h.getType(T)?[]:{},C.visitedObjects.save(m,S);var F=C.parentName;return v(T,(function(m){var L=y(m);if(!C.ignore||-1===e.utils.arrayIndexOf(C.ignore,L)){var M=T[m];if(C.parentName=b(F,T,m),-1===e.utils.arrayIndexOf(C.copy,L)&&-1===e.utils.arrayIndexOf(C.include,L)){var H=T[w];if(H){var N=H.mappedProperties;if(N&&!N[L]){var A=H.copiedProperties;if(A&&!A[L]&&"array"!==h.getType(T))return}}}switch(h.getType(e.utils.unwrapObservable(M))){case"object":case"array":case"undefined":var V=C.visitedObjects.get(M);S[m]="undefined"!==h.getType(V)?V:h.visitModel(M,k,C);break;default:S[m]=k(M,C.parentName)}}})),S}})(m(54922),h)}()}}]);