define(["require","exports","incremental-dom","./register-tag","./load-tag"],function(t,e,a,i,n){"use strict";var d,u=document.querySelectorAll("[app]");d=0===u.length?document.getElementsByTagName("body")[0]:u[0],u=null;var r=d.getAttribute("app")||"app",l=d.getAttribute("id");l||(l="uid_"+(new Date).getTime(),d.setAttribute("id",l)),i["default"].add(r+" as init-app-tag"),a.patch(document.getElementById(l),function(){n["default"].load("init-app-tag",l,[])},{})});