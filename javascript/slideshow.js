$('document').ready(function() {
  var slideshow = document.getElementById('slideshow');
  // var images = document.getElementsByClassName('image');
  var images = $('.image');
  var num_images = images.length;
  var bars = $('.bar');
  var titles = $('.image-title');
  var active = 0;
  var next;

  function changeTitleToLeft(slide) {

    $(titles[active]).addClass('slide-out-to-left');
    $(titles[active]).one('animationend', function(e) {
      $(titles[active]).addClass('hidden');
      $(titles[active]).removeClass('slide-out-to-left');
      if ($(titles[active]).hasClass('slide-in-from-right')) {
        $(titles[active]).removeClass('slide-in-from-right');
      }
      else if ($(titles[active]).hasClass('slide-in-from-left')) {
        $(titles[active]).removeClass('slide-in-from-left');
      }
      // $(titles[active]).removeClass('slide-in');
      $(titles[slide]).removeClass('hidden');
      $(titles[slide]).addClass('slide-in-from-right');
      // console.log(active);
      active=slide;
    });

  }


  function changeTitleToRight(slide) {

    $(titles[active]).addClass('slide-out-to-right');
    $(titles[active]).one('animationend', function(e) {
      $(titles[active]).addClass('hidden');
      $(titles[active]).removeClass('slide-out-to-right');
      if ($(titles[active]).hasClass('slide-in-from-right')) {
        $(titles[active]).removeClass('slide-in-from-right');
      }
      else if ($(titles[active]).hasClass('slide-in-from-left')) {
        $(titles[active]).removeClass('slide-in-from-left');
      }
      $(titles[slide]).removeClass('hidden');
      $(titles[slide]).addClass('slide-in-from-left');
      // console.log(active);
      active=slide;
    });


  }

  function changeActiveBar(slide) {
    $(bars[active]).toggleClass('active-bar');
    $(bars[slide]).toggleClass('active-bar');
  }


  function showSlide(slide) {
    $(images[active]).toggleClass('hidden');
    $(images[slide]).toggleClass('hidden');
  }


  $('#prev').click(function() {
    if (active == 0) {
      next = num_images-1;
      showSlide(next);
      changeActiveBar(next);
      changeTitleToLeft(next);
    }
    else {
      next = active-1
      showSlide(next);
      changeActiveBar(next);
      changeTitleToLeft(next);
    }
    // active = next;
  });

  $('#next').click(function() {
    if (active == num_images - 1) {
      next = 0;
      showSlide(next);
      changeActiveBar(next);
      changeTitleToRight(next);
    }
    else {
      next = active + 1;
      showSlide(next);
      changeActiveBar(next);
      changeTitleToRight(next);
    }
    // active = next;
  });

  // $("#slideshow").hover(function() {
  //   // console.log("enter");
  //   $(".nav-arrow").toggleClass("hidden");
  // }, function() {
  //   // console.log("exit");
  //   $(".nav-arrow").toggleClass("hidden");
  // });

});
