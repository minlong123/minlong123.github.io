  $('.menu-click').click(function(){
    if($('.home-dial').data("names")=="dialgo"){
      $('.modd').css('display','block');
      $('.home-dial').css('opacity','1');
      $('.home-dial').data("names","bb");
      $('.home-dial').css("transform","translateX(0)");
      $('.home-dial').css("WebkitTransform","translateX(0)");
      $('.hm-vide').css("height",'0px');
    }else{
      $('.modd').css('display','none');
      $('.home-dial').css('opacity','0');
      $('.home-dial').data("names","dialgo");
      $('.home-dial').css("transform","translateX(-100%)");
      $('.home-dial').css("WebkitTransform","translateX(-100%)");
      $('.hm-vide').css("height",'auto');
    }
  });
  $('.modd').click(function(){
    if($('.home-dial').data("names")=="bb"){
      $('.home-dial').css('opacity','0');
      $('.modd').css('display','none');
      $('.home-dial').data("names","dialgo");
      $('.home-dial').css("transform","translateX(-100%)");
      $('.home-dial').css("WebkitTransform","translateX(-100%)");
      $('.hm-vide').css("height",'auto');
    }
  })


  $('.sel-static').hover(function(){
    $('.sel-static').removeClass('selct-hm');
    $('.sel-static').find('.dial-ol').css('display','none');


    $(this).addClass('selct-hm');
    $(this).find('.dial-ol').css("display",'block');
  },function(){

  })