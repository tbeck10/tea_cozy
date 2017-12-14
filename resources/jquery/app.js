//Vanilla JS used to show/hide mobile navigation
//document.getElementById("nav-toggle").addEventListener("click", function() {
//  if(document.getElementsByClassName("mobile-list")[0].id === "") {
//    document.getElementByClassName("mobile-list")[0].id = "show";
//  } else {
//    document.getElementsByClassName("mobile-list")[0].id = "";
//  }
//});
$(document).ready(function() {

  $("#nav-toggle").on("click", function(event){
    event.preventDefault();
    $(".mobile-list").slideToggle();
    $(this).toggleClass("active");
  });


  $(".mobile-list a").on("click", function(event){
    event.preventDefault();
    var headerHeight = $("header").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - headerHeight;
    $("html").animate({
      scrollTop : newScrollCoordinate
    });

  });

});
