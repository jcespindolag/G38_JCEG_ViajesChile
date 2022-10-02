/*Agrega Tooltip que despliega dirección en iconos de redes sociales en footer*/
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

/*Modifica propiedades de footer cuando pasa del carrusel*/
 $(document).scroll(function () {
    const y = $("html").scrollTop();
      y > 550 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
  });  