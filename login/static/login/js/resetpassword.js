$(function(){

$("#login-form").validate({
	rules: {
		password: {
			required: true,
      minlength: 8,
      maxlength: 16,
		},

    cfmpassword: {
        required: true,
        equalTo: "#password",
        minlength: 8,
        maxlength: 16,
    }

	},
	messages: {
         password: { 
                 required:"Se requiere una constraseña",
                 minlength: "Ingresa una contraseña de 8 caracteres minimo y 16 maximo",
                 maxlength: "Ingresa una contraseña de 8 caracteres minimo y 16 maximo",
               },

               cfmPassword: {
                          required:"Porfavor confirme su contraseña",
                          minlength: "Ingresa una contraseña de 8 caracteres minimo y 16 maximo",
                          maxlength: "Ingresa una contraseña de 8 caracteres minimo y 16 maximo",
                          equalTo: "Las contraseñas no coinciden",
               }
	},
});
});


$(document).ready(function(){
	
	$('#btn-enviar').click(function(){

					$.alert({
        			icon: "fas fa-check-double",
        			columnClass: 'medium',
        			title: 'Restablecer Contraseña',
        			content: 'La contraseña fue cambiada correctamente!.',
        			theme: "supervan",
        			draggable: false,

        buttons: {
        
            Aceptar: {
            	btnClass: "btn-blue",
                  text: "Aceptar",
                   action: function() {
                    window.open("Index_Login.html");
                     window.close();
                      }
                     }
        },

    });	
	});
});