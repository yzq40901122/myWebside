/**
 * Created by yinzhuqun on 16-12-21.
 */
var system ={};
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if(system.win||system.mac||system.xll){
//如果是电脑跳转到百度
    window.location.href="indexPcBeta2.html";
}else{
//如果是手机,跳转到手机首页
    window.location.href="indexPcBeta2.html";
}