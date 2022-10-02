/*Agrega Tooltip que despliega dirección en iconos de redes sociales en footer*/
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

/*Agrega alerta al enviar el mensaje de contacto*/
$("#enviar").click(function() {
    alert("El mensaje fue enviado... Pronto nos pondremos en contacto con usted. Gracias!!!");
  });

/*Modifica propiedades de footer cuando pasa del carrusel*/
 $(document).scroll(function () {
    const y = $("html").scrollTop();
      //alert(y);
      y > 740 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
      y >= 0 & y<= 740 ? $("#nav1").addClass("active") : $("#nav1").removeClass("active");
      y >= 740 & y<= 1280 ? $("#nav2").addClass("active") : $("#nav2").removeClass("active");
      y >= 1280 & y<= 1780 ? $("#nav3").addClass("active") : $("#nav3").removeClass("active");
      y >= 1780 ? $("#nav4").addClass("active") : $("#nav4").removeClass("active");
  });  