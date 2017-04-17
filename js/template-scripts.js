jQuery(document).ready(function($) {
  // Owl Carousel
  $(".carousel-default").owlCarousel({
     navigation : true,
   	 slideSpeed : 300,
   	 paginationSpeed : 400,
   	 autoPlay : true,
     addClassActive: true,
     navigationText: ["&#xe605","&#xe606"],
   	 singleItem:true
  });

  // Owl Carousel - Content Blocks
  $(".carousel-blocks").owlCarousel({
     slideSpeed: 300,
     autoPlay: 5000,
     navigation: true,
     navigationText: ["&#xe605","&#xe606"],
     pagination: false,
     addClassActive: true,
     items: 4,
     itemsDesktop: [768,3],
     itemsDesktopSmall: [480,1]
  });

  // Owl Carousel - Content 3 Blocks
  $(".carousel-3-blocks").owlCarousel({
     slideSpeed: 300,
     autoPlay: 5000,
     navigation: true,
     navigationText: ["&#xe605","&#xe606"],
     pagination: true,
     addClassActive: true,
     items: 3,
     itemsDesktop: [768,2],
     itemsDesktopSmall: [480,1]
  });


  $(".carousel-fade-transition").owlCarousel({
   	 navigation : true,
   	 slideSpeed : 300,
   	 paginationSpeed : 400,
   	 autoPlay : true,
     addClassActive: true,
     navigationText: ["&#xe605","&#xe606"],
   	 singleItem:true,
     transitionStyle : "fade"
  });

  // Sticky Nav Bar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20){
        $('.sticky').addClass("fixed");
    }
    else{
        $('.sticky').removeClass("fixed");
    }
  });
//-------------------------------------------------------
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;

      }
  }
})

//-------------------------------------------------------
  var roundButton = document.querySelector(".item2");
  var MenuOculto = document.querySelector("#MenuOculto");
  var Menu_Bot_1 = document.querySelector("#Menu_Bot_1");
  var Menu_Bot_2 = document.querySelector("#Menu_Bot_2");
  var Menu_Bot_3 = document.querySelector("#Menu_Bot_3");
  var Menu_Bot_4 = document.querySelector("#Menu_Bot_4");
  var Menu_Bot_5 = document.querySelector("#Menu_Bot_5");
  var cabeçalho_logo = document.querySelector("#Botão_Teste_Cont");

  roundButton.addEventListener("click", showMenu, false);
  MenuOculto.addEventListener("click", hideMenu, false);
  Menu_Bot_1.addEventListener("click", hideMenu, false);
  Menu_Bot_2.addEventListener("click", hideMenu, false);
  Menu_Bot_3.addEventListener("click", hideMenu, false);
//Ativar depois que houver noticias
//      Menu_Bot_4.addEventListener("click", hideMenu, false);
  Menu_Bot_5.addEventListener("click", hideMenu, false);

  function showMenu(e){
    if (roundButton.classList.contains("is-active")) {
      hideMenu();
    } else {
      roundButton.classList.add("is-active");
    }
    MenuOculto.classList.add("visivel");
    document.querySelector(".cabeçalho_logo").style.visibility = "hidden";
    document.body.style.overflow =  "hidden";

  }
  function hideMenu(e){
    roundButton.classList.remove("is-active");
    MenuOculto.classList.remove("visivel");
    document.querySelector(".cabeçalho_logo").style.visibility = "visible";
    document.body.style.overflow = "auto";
    document.querySelector("#cabeçalho").style.position = "fixed";

  }




});
