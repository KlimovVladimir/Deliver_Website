$('.dropdown1').click(function () {
        $(this).attr('tabindex', 3).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu1').slideToggle(300);
    });
    $('.dropdown1').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu1').slideUp(300);
    });
    $('.dropdown1 .dropdown-menu1 li').click(function () {
        $(this).parents('.dropdown1').find('span').text($(this).text());
        $(this).parents('.dropdown1').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu1 li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown1').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 
$('.dropdown1').keyup(function(event){
    if(event.keyCode == 13){
        $(".dropdown1").click();
    }
});
