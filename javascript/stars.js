$(document).ready(function() {
  var index = 0;
  window.setInterval(function() {
    var stars = document.getElementByClassName("star");
    for (index=0; index < stars.length; index++) {
      let top = Math.floor(Math.random() * 1000);
      let left = Math.floor(Math.random() * 1000);
      stars[index].css('top', top);
      stars[index].css('left', left);
    }
    // stars.forEach(function() {
    //   let top = Math.floor(Math.random() * 1000);
    //   let left = Math.floor(Math.random() * 1000);
    //
    // });
  }, 5000);
};
