define(["require","exports","incremental-dom","./register-tag"],function(e,t,r,o){"use strict";var n=function(){function e(){}return e.prototype.refresh=function(){if(this._$el$domref)if(document.getElementById(this._$el$domref))r.patch(document.getElementById(this._$el$domref),function(){this._$render_from_powerup(this,o["default"],f)}.bind(this));else if(this.removed){this.removed();var e=this;setTimeout(function(){e=null})}},e.prototype.removed=function(){},e}(),i=function(){function e(){}return e.prototype.initModule=function(e){if(document.getElementById(e.target)){var t=o["default"].getRegistred(e.tag),r=new t._$controller;r._$el$domref=e.target,r.refresh(),r.attached&&r.attached(),this.changeProps(r,e.host_vars)}},e.prototype.load=function(e,t,i){for(var f=[],u=3;u<arguments.length;u++)f[u-3]=arguments[u];var a=o["default"].getRegistred(e),s="custom_element_id_"+(new Date).getTime();r.elementOpen("div",s,["id",s]),r.elementClose("div"),f&&(i||(i=[]),f.forEach(function(e){i.push(e)}));var d={tag:a.tag,target:s,host_vars:i};if(a&&a._$controller)this.initModule(d);else if(!a.loading){var l=this;o["default"].setLoading(a.tag),System["import"](a.url).then(function(e){var t=Object.keys(e)[0];o["default"].config(a.tag,e[t]),System["import"](a.url+".html").then(function(r){var o=Object.keys(r)[0];e[t].prototype.refresh||(e[t].prototype.content=function(){},e[t].prototype._$render_from_powerup=r[o],e[t].prototype.refresh=n.prototype.refresh),l.initModule(d)})})}return this},e.prototype.content=function(e){},e.prototype.changeProps=function(e,t){if(t&&t.length>1)for(var r=t.length,o=0;o<r;o+=2){var n=t[o],i=t[o+1],f="set"+n.replace(/(^\D)/g,function(e,t){return e.toUpperCase()});e[f]?e[f](i):e[n]=i}},e}(),f=new i;Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=f});