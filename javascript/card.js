var last_open;


function toggleCard() {

  if ($(this).hasClass('card-close')) {

    if (last_open!=null) {
      $(last_open).addClass("card-close");
      // $(last_open).find('.card-title').fadeOut('slow');
      $(last_open).removeClass("card-open");
      // $(last_open).find('.card-title').hide();
      $(last_open).find('.card-title').removeClass('card-title-open');
      $(last_open).find('.card-content').removeClass('card-content-open');
      // $(last_open).find('.card-title').fadeIn('slow');


    }
    last_open = this;
    $(this).addClass('card-open');
    $(this).removeClass('card-close');
    $(this).find('.card-title').addClass('card-title-open');
    $(this).find('.card-content').fadeOut('fast');
    $(this).find('.card-content').addClass('card-content-open');
    // $(this).removeClass('card-close');
    // $(last_open).find('.card-title').show();
  }
  else {
    $(this).addClass('card-close');
    $(this).removeClass('card-open');
    // $(this).find('.card-content').removeClass('card-content-open');
    $(this).find('.card-title').removeClass('card-title-open');
    $(this).find('.card-content').removeClass('card-content-open');
  }

}


$(document).ready(function() {

  var class_cards = document.getElementsByClassName("card-wrapper");

  // last_open = $('#graphics');

  console.log(class_cards);
  console.log(class_cards.length)

  for (var i = 0; i < class_cards.length; i++) {
    class_cards[i].addEventListener('click', toggleCard);
  }

  // $(".class-card").click(function() {
  //   $(this).removeClass('card-close');
  //   $(".class-card").not(this).each(function() {
  //       $(this).addClass("card-close");
  //   });


});
