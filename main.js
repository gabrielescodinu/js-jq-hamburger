// $('#bottone').click(function(){
//   $('hamburger-menu a').show();
// })

var hamburger = $(".header-right i");

hamburger.click(function(){
  $(".hamburger-menu").show();
})

var close = $(".hamburger-menu i");

close.click(function(){
  $(".hamburger-menu").hide();
})
