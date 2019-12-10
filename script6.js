$('.dropdown5').click(function () {
        $(this).attr('tabindex', 7).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu5').slideToggle(300);
    });
    $('.dropdown5').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu5').slideUp(300);
    });
    $('.dropdown5 .dropdown-menu5 li').click(function () {
        $(this).parents('.dropdown5').find('span').text($(this).text());
        $(this).parents('.dropdown5').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu5 li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown5').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 
$('.dropdown5').keyup(function(event){
    if(event.keyCode == 13){
        $(".dropdown5").click();
    }
});
