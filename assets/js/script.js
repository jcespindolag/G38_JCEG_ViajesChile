/*Agrega Tooltip que despliega dirección en iconos de redes sociales en footer*/
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

/*Modifica propiedades de footer cuando pasa del carrusel*/
 $(document).scroll(function () {
    const y = $("html").scrollTop();
      //alert(y);
      y > 550 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
      y >= 0 & y<= 700 ? $("#nav1").addClass("active") : $("#nav1").removeClass("active");
      y >= 700 & y<= 900 ? $("#nav2").addClass("active") : $("#nav2").removeClass("active");
      y >= 900 & y<= 1400 ? $("#nav3").addClass("active") : $("#nav3").removeClass("active");
      y >= 1400 ? $("#nav4").addClass("active") : $("#nav4").removeClass("active");
  });  