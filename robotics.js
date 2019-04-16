// SHOOT IT IS ALL IN JQUEARY

$(".slideshow > div:gt(0)").hide();

setInterval(function() {
  $('.slideshow > div:first')
    .fadeOut(1)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('.slideshow');
},  4000);
