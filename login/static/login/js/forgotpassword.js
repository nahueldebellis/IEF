$(function(){

$("#login-form").validate({
	rules: {
		email: {
			required: true,
		}
	},
	messages: {
		email: {
			required: "Porfavor Ingrese un Correo Electronico",
		}
	},
});
});


$(document).ready(function(){
	
	$('#btn-enviar').click(function(){

					$.alert({
        			icon: "fas fa-envelope-open",
        			columnClass: 'large',
        			title: 'Correo de Recuperacion',
        			content: 'Un Correo electronico con un link para restablecer tu contraseña ha sido enviado con exito.',
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

