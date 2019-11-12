                              /*Dropdown Menu*/
$('.dropdown4').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu4').slideToggle(300);
    });
    $('.dropdown4').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu4').slideUp(300);
    });
    $('.dropdown4 .dropdown-menu4 li').click(function () {
        $(this).parents('.dropdown4').find('span').text($(this).text());
        $(this).parents('.dropdown4').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu4 li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown4').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 
