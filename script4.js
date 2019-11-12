$('.dropdown3').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu3').slideToggle(300);
    });
    $('.dropdown3').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu3').slideUp(300);
    });
    $('.dropdown3 .dropdown-menu3 li').click(function () {
        $(this).parents('.dropdown3').find('span').text($(this).text());
        $(this).parents('.dropdown3').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu3 li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown3').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 