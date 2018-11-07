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



// 动态改变首页轮播图的大小
$(function(){
	function size(){
		var height=$(window).height();
		var width=$(window).width();
		var topHeight=$('.gf-top').height();
		var contHeight=$('.one-screen').height();
		var pcImg=$('.swiper-slide1').data('pc');
		var mobImg=$('.swiper-slide1').data('mob');
		var pcImg2=$('.swiper-slide2').data('pc');
		var mobImg2=$('.swiper-slide2').data('mob');
		var pcImg3=$('.swiper-slide3').data('pc');
		var mobImg3=$('.swiper-slide3').data('mob');

		if(width<=992){
			$('.swiper-slide1').css("backgroundImage",mobImg);
			$('.swiper-slide2').css("backgroundImage",mobImg2);
			$('.swiper-slide3').css("backgroundImage",mobImg3);
			
			$('.swiper-containers').css({
				"height":"100%",
				"top":0
			});
		}else{
			$('.swiper-slide1').css("backgroundImage",pcImg);
			$('.swiper-slide2').css("backgroundImage",pcImg2);
			$('.swiper-slide3').css("backgroundImage",pcImg3);

			$('.swiper-containers').css({
				"height":height-topHeight-contHeight,
				"top":"84px"
			});
		}
		
	}
	size();
	// 监听屏幕的变化
	$(window).on('resize',function(){
		size();
		verti();
	})

	var heights=$('.uls').height()-50;
	$('.uls').css("transform","translateY(-"+heights+"px)");
	$('.uls').css("WebkitTransform","translateY(-"+heights+"px)");
	$('.ulss').css("transform","translateY(0px)");
	$('.ulss').css("WebkitTransform","translateY(0px)");

	$('.scro-top').click(function(){
		$('body,html').animate({scrollTop:0},1500);
	})
	$('.menu-click').click(function(){
		if($('.home-dial').data("names")=="dialgo"){
			$('.modd').css('display','block');
			$('.home-dial').css('opacity','1');
			$('.home-dial').data("names","bb");
			$('.home-dial').css("transform","translateX(0)");
			$('.home-dial').css("WebkitTransform","translateX(0)");
		}else{
			$('.modd').css('display','none');
			$('.home-dial').css('opacity','0');
			$('.home-dial').data("names","dialgo");
			$('.home-dial').css("transform","translateX(-100%)");
			$('.home-dial').css("WebkitTransform","translateX(-100%)");
		}
	});
	$('.modd').click(function(){
		if($('.home-dial').data("names")=="bb"){
			$('.home-dial').css('opacity','0');
			$('.modd').css('display','none');
			$('.home-dial').data("names","dialgo");
			$('.home-dial').css("transform","translateX(-100%)");
			$('.home-dial').css("WebkitTransform","translateX(-100%)");
		}
	})
	$('.sel-static').hover(function(){
		$('.sel-static').removeClass('selct-hm');
		$('.sel-static').find('.dial-ol').css('display','none');


		$(this).addClass('selct-hm');
		$(this).find('.dial-ol').css("display",'block');
	},function(){

	})
 	$('[data-toggle="tooltip"]').tooltip();


 	// 解决swiper垂直切换中内容的垂直居中问题
 	function verti(){
 		var width=$(window).width();
 		if(width>992){
 			$('.swiperr').css('height',$(window).height()-85);
 		}else{
 			var remm= 140 * (width / 750);
 			var str=Math.ceil(remm*10000)/10000;
 			var hei=$(window).height()-str;
 			$('.swiperr').css('height',hei);
 		}
 	}
 	verti();



 	// 全局导航栏的输入框控制,每个页面都有，后面可以改为class的增删来实现。
 	var b=0;
 	var tim;
 	$('.search-inp').click(function(){
 		if($(this).data('search')=="con"){
	 		$('.modd2').css({
	 			"transform":"translateX(0%)",
	 			"WebkitTransform":"translateX(0%)",
	 			"opacity":"1"
	 		})
	 		$(this).data('search',"cons");
	 		$('.form-inp1').css("width","300px");
	 		$('.form-inp1').focus();
	 		var cont="输入您想要的内容";
	 		tim=setInterval(function(){
	 			showValue(b);
	 			if(b>6){
	 				hideValue();

	 			}else{
	 				b++;
	 			}
	 		},500)
 		}else{
 			clearInterval(tim);
 			$('.form-inp1').attr("value","");
 			b=0;
	 		$('.modd2').css({
	 			"transform":"translateX(-100%)",
	 			"WebkitTransform":"translateX(-100%)",
	 			"opacity":"0"
	 		})
	 		$(this).data('search',"con");
	 		$('.form-inp1').css("width","0px");
			$('.seach-img').css({
				"transform":"translateY(-1000px)",
				"WebkitTransform":"translateY(-1000px)",
				"opacity":0
			})
 		}
 		function showValue(b){
 			var inpuCon=$('.form-inp1').attr("value") ? $('.form-inp1').attr("value") :"";
 			$('.form-inp1').attr("value",inpuCon+cont[b]);
 		}
 		function hideValue(){
 			clearInterval(tim);
 			b=0;
 			setTimeout(function(){
 				$('.seach-img').css({
 					"transform":"translateY(0)",
 					"WebkitTransform":"translateY(0)",
 					"opacity":1
 				})
 			},500)
 			setTimeout(function(){
 				$('.form-inp1').attr("value","");
 			},3000)
 		}
 	})
	$('.seach-img').click(function(){
		$('.modd2').css({
			"transform":"translateX(-100%)",
			"WebkitTransform":"translateX(-100%)",
			"opacity":"0"
		})
		$(this).data('search',"con");
		$('.form-inp1').css("width","0px");
		$('.seach-img').css({
			"transform":"translateY(-1000px)",
			"WebkitTransform":"translateY(-1000px)",
			"opacity":0
		})
	})
})