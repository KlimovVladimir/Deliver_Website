$('.dropdown6').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu6').slideToggle(300);
    });
    $('.dropdown6').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu6').slideUp(300);
    });
    $('.dropdown6 .dropdown-menu6 li').click(function () {
        $(this).parents('.dropdown6').find('span').text($(this).text());
        $(this).parents('.dropdown6').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu6 li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown6').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 