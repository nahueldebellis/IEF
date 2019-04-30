$(function(){

$("#login-form").validate({
	rules: {
		username: {
			required: true,
		},

		pass: {
			required: true,
		},
	},
	messages: {
		username: {
			required: "Porfavor Ingrese un Usuario o un Correo Electronico valido.",
		},

		pass: {
			required: "Porfavor Ingrese su contraseña.",
		},
	},
});
});


$(document).ready(function(){
 
	$.alert({
        icon: "fas fa-cookie",
        title: 'COOKIES',
        content: 'Nuestra web utiliza cookies para mejorar su experiencia en nuestra web. Esta Usted de Acuerdo?',
        theme: "supervan",
          draggable: false,

        buttons: {
        
            Volver: {
            	btnClass: "btn-blue",
                  text: "Aceptar",
                      }
        },

    });




  $('#btn-registrar').click(function(){
    window.open("Index_Register.html");
    window.close();
    return false;
  });
 
});