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
 
  $('#btn-registrar').click(function(){
    window.open("/welcome/register");
    window.close();
    return false;
  });
 
});