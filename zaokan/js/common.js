// 动画全部来源于swiper：https://www.swiper.com.cn/usage/animate/index.html
// 响应式js。屏幕尺寸在750px以上按照1rem=100px 750px以下按照公式比率的计算
!(function(doc, win) {
    var docEle = doc.documentElement,//获取html元素
        event = "onorientationchange" in window ? "orientationchange" : "resize",//判断是屏幕旋转还是resize;
        fn = function(){
            var width = docEle.clientWidth;
            if(width<=750){
            	width && (docEle.style.fontSize = 100 * (width / 750) + "px");

            }else{
            	width && (docEle.style.fontSize = "100px");
            }
            // 设置html的fontSize，随着event的改变而改变。
        };
    win.addEventListener(event, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
}(document, window));

