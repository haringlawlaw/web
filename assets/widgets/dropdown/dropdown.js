function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),Dropdown=function(a){var b="dropdown",c="4.0.0-alpha.6",d="bs.dropdown",e="."+d,f=".data-api",g=a.fn[b],h=27,i=32,j=38,k=40,l=3,m=new RegExp(j+"|"+k+"|"+h+"|"+i),n={HIDE:"hide"+e,HIDDEN:"hidden"+e,SHOW:"show"+e,SHOWN:"shown"+e,CLICK:"click"+e,CLICK_DATA_API:"click"+e+f,FOCUSIN_DATA_API:"focusin"+e+f,KEYDOWN_DATA_API:"keydown"+e+f},o={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",SHOW:"show"},p={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},q=function(){function b(a){_classCallCheck(this,b),this._element=a,this._addEventListeners()}return b.prototype.toggle=function(){if(this.disabled||a(this).hasClass(o.DISABLED))return!1;var c=b._getParentFromElement(this),d=a(c).hasClass(o.SHOW);if(b._clearMenus(),d)return!1;if("ontouchstart"in document.documentElement&&!a(c).closest(p.NAVBAR_NAV).length){var e=document.createElement("div");e.className=o.BACKDROP,a(e).insertBefore(this),a(e).on("click",b._clearMenus)}var f={relatedTarget:this},g=a.Event(n.SHOW,f);return a(c).trigger(g),!g.isDefaultPrevented()&&(this.focus(),this.setAttribute("aria-expanded",!0),a(c).toggleClass(o.SHOW),a(c).trigger(a.Event(n.SHOWN,f)),!1)},b.prototype.dispose=function(){a.removeData(this._element,d),a(this._element).off(e),this._element=null},b.prototype._addEventListeners=function(){a(this._element).on(n.CLICK,this.toggle)},b._jQueryInterface=function(c){return this.each(function(){var e=a(this).data(d);if(e||(e=new b(this),a(this).data(d,e)),"string"==typeof c){if(void 0===e[c])throw new Error('No method named "'+c+'"');e[c].call(this)}})},b._clearMenus=function(c){if(!c||c.which!==l){var d=a(p.BACKDROP)[0];d&&d.parentNode.removeChild(d);for(var e=a.makeArray(a(p.DATA_TOGGLE)),f=0;f<e.length;f++){var g=b._getParentFromElement(e[f]),h={relatedTarget:e[f]};if(a(g).hasClass(o.SHOW)&&!(c&&("click"===c.type&&/input|textarea/i.test(c.target.tagName)||"focusin"===c.type)&&a.contains(g,c.target))){var i=a.Event(n.HIDE,h);a(g).trigger(i),i.isDefaultPrevented()||(e[f].setAttribute("aria-expanded","false"),a(g).removeClass(o.SHOW).trigger(a.Event(n.HIDDEN,h)))}}}},b._getParentFromElement=function(b){var c=void 0,d=Util.getSelectorFromElement(b);return d&&(c=a(d)[0]),c||b.parentNode},b._dataApiKeydownHandler=function(c){if(m.test(c.which)&&!/input|textarea/i.test(c.target.tagName)&&(c.preventDefault(),c.stopPropagation(),!this.disabled&&!a(this).hasClass(o.DISABLED))){var d=b._getParentFromElement(this),e=a(d).hasClass(o.SHOW);if(!e&&c.which!==h||e&&c.which===h){if(c.which===h){var f=a(d).find(p.DATA_TOGGLE)[0];a(f).trigger("focus")}return void a(this).trigger("click")}var g=a(d).find(p.VISIBLE_ITEMS).get();if(g.length){var i=g.indexOf(c.target);c.which===j&&i>0&&i--,c.which===k&&i<g.length-1&&i++,i<0&&(i=0),g[i].focus()}}},_createClass(b,null,[{key:"VERSION",get:function(){return c}}]),b}();return a(document).on(n.KEYDOWN_DATA_API,p.DATA_TOGGLE,q._dataApiKeydownHandler).on(n.KEYDOWN_DATA_API,p.ROLE_MENU,q._dataApiKeydownHandler).on(n.KEYDOWN_DATA_API,p.ROLE_LISTBOX,q._dataApiKeydownHandler).on(n.CLICK_DATA_API+" "+n.FOCUSIN_DATA_API,q._clearMenus).on(n.CLICK_DATA_API,p.DATA_TOGGLE,q.prototype.toggle).on(n.CLICK_DATA_API,p.FORM_CHILD,function(a){a.stopPropagation()}),a.fn[b]=q._jQueryInterface,a.fn[b].Constructor=q,a.fn[b].noConflict=function(){return a.fn[b]=g,q._jQueryInterface},q}(jQuery);