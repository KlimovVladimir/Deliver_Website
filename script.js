$('.video').parent().click(function () {
  if($(this).children(".video").get(0).paused){        
      $(this).children(".video").get(0).play();   
      $(this).children(".playpause").fadeOut();
    }else{       
        $(this).children(".video").get(0).pause();
  $(this).children(".playpause").fadeIn();
    }
});
$('.video').keyup(function(event){
    if(event.keyCode == 13){
        $(".playpause").click();
    }
});
$('.playpause').keyup(function(event){
    if(event.keyCode == 13){
        $(".video").click();
    }
});