window.onload=function(){
	window.onscroll=function(){
		arg();
	}
	function shikou(name){
		var name=name;
		var boxDom=document.querySelectorAll('.'+name);
		for(var i=0;i<boxDom.length;i++){
			var shikou=window.innerHeight;
			var topHeight=boxDom[i].offsetTop;
			var scrollTo=document.body.scrollTop || document.documentElement.scrollTop;
			if(scrollTo+shikou>topHeight && scrollTo+shikou<topHeight+shikou){
					var delay=boxDom[i].getAttribute("min-delay");
					var duration=boxDom[i].getAttribute("min-duration");
					boxDom[i].style.webkitAnimation=name+" "+duration;
					boxDom[i].style.animation=name+" "+duration;
					boxDom[i].style.webkitAnimationDelay=delay;
					boxDom[i].style.animationDelay=delay;
					aniend(boxDom[i]);
			}
		}
	}
	function aniend(dom){
	    dom.addEventListener('animationend',function(e){
	        dom.style.visibility="visible";
	       
	    })
	    dom.addEventListener('webkitAnimationEnd',function(e){
	        dom.style.visibility="visible";
	    })
	}
	function arg(){
		shikou("topMove");
		shikou("bottomMove");
		shikou("leftRotate");
	}
	arg();

}