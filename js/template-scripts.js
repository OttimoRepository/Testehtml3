jQuery(document).ready(function($) {
//Slide do Home
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("Slides");
    slideIndex++;

    if (slideIndex == 4) {
        slides[0].style.display = "none";
        slides[1].style.display = "none";
        slides[2].style.display = "none";
    }
    if (slideIndex == 8) {
        slides[3].style.display = "none";
        slides[4].style.display = "none";
        slides[5].style.display = "none";
        slides[6].style.display = "none";
    }

      if (slideIndex> slides.length) {slideIndex = 1;slides[7].style.display = "none";}
      slides[slideIndex-1].style.display = "block";


    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

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
    if ($("#MenuOculto").hasClass("visivel")) {}else {
      if ($(this).scrollTop() > 654){
          $('.item span').css('background', '#004140');
          $('#Botão_Teste_Cont .cabeçalho_logo').css('background', '#fff');
          $('#Botão_Teste_Cont .item2 span').addClass('rolagem');
          $('#Botão_Teste_Cont .cabeçalho_logo_span').css('color', '#000');
      }
      else{
          $('.item span').css('background', '#fff');
          $('#Botão_Teste_Cont .cabeçalho_logo').css('background', 'transparent');
          $('#Botão_Teste_Cont .item2 span').removeClass('rolagem');
          $('#Botão_Teste_Cont .cabeçalho_logo_span').css('color', '#fff');
    }
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
  var cor;


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

    if ($('.item span').css('background-color') == 'rgb(255, 255, 255)'){
      cor = 1;
    }else {
      cor = 0;
    }
    $('.item span').css('background', 'transparent');
    if (cor == 0) {
      $('#Botão_Teste_Cont .item2 span').addClass('ConversaoX');
    }
    MenuOculto.classList.add("visivel");
    document.querySelector(".cabeçalho_logo").style.visibility = "hidden";
    document.body.style.overflow =  "hidden";

  }
  function hideMenu(e){

    if (cor == 1) {
      $('.item span').css('background', '#fff');
    } else {
      $('.item span').css('background', '#004140');
      $('#Botão_Teste_Cont .item2 span').removeClass('ConversaoX');
    }

    roundButton.classList.remove("is-active");
    MenuOculto.classList.remove("visivel");
    document.querySelector(".cabeçalho_logo").style.visibility = "visible";
    document.body.style.overflow = "auto";
    document.querySelector("#cabeçalho").style.position = "fixed";



  }




});
