define("appmsg/a_report.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(t){
"use strict";
function o(t,o){
var r="https:"==top.location.protocol?1500:1200,p="/mp/advertisement_report?r="+Math.random()+"&",s=[],c=!1;
for(var u in t)t.hasOwnProperty(u)&&s.push(u+"="+t[u]);
p+=s.join("&"),t.tid&&e.invoke("adDataReport",{
ad_info:t.tid
},function(){}),i({
url:p,
mayAbort:!0,
type:"GET",
success:function(){
a&&a(56+n);
},
error:function(){
a&&a(57+n);
},
complete:function(){
c||(c=!0,!!o&&o());
},
async:!0
}),setTimeout(function(){
c||(c=!0,window.__ajaxtest="1",!!o&&o());
},r);
}
var i=t("biz_wap/utils/ajax.js"),a=window.__report,r=top.location.protocol,n="https:"==r?5:0,e=t("biz_wap/jsapi/core.js");
return{
AdClickReport:o
};
});