/*Agrega Tooltip que despliega dirección en iconos de redes sociales en footer*/
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
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
  
  /*Validación completitud de campos en el formulario*/
  $(function() {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms).forEach( function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
          alert ("El mensaje fue enviado... pronto nos pondremos en contacto con usted. Gracias!!!")
          $('#formulario')[0],reset()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()