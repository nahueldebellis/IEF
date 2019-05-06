
 $("#register-form").validate({
           rules: {
               password: { 
                 required: true,
                    minlength: 8,
                    maxlength: 16,

               } , 

                   cfmPassword: { 
                    equalTo: "#password",
                     minlength: 8,
                     maxlength: 16,
               },

                name: { 
                 required: true,
               } , 

                lname: { 
                 required: true,
               } , 

                email: { 
                 required: true,
               } , 

               cp: { 
                 required: true,
                 minlength: "4",
               } , 

                country: { 
                 required: true,
               } , 

                prov: { 
                 required: true,
               } , 

                dni: { 
                 required: true,
                 minlength: "10",
               } , 

                cuil: { 
                 required: true,
                 minlength: "13",
               } , 

                loc: { 
                 required: true,
               } , 

                sexo: { 
                 required: true,
               } ,

                bio: { 
                 required: true,
                 minlength: "100",
               } ,

                interest: { 
                 required: true,
               },

                tel: { 
                 required: true,
                 minlength: "15",
               },

                dir: { 
                 required: true,
               } 

           },


     messages:{
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
               },

                 tel: { 
                 minlength: "Ingrese un telefono valido",
               },

                cp: { 
                 minlength: "Ingrese con codigo postal valido",
               },

                dni: { 
                 minlength: "Ingrese un numero de documento valido",
               },

              bio: { 
                 minlength: "Ingrese una biografia de al menos 100 caracteres",
               } ,

                cuil: { 
                 minlength: "Ingrese un numero de CUIL valido",
               }


     }

});

 $(document).ready(function() {

    /* MASCARAS DE INPUT */

    $("#tel").mask("(011) 0000-0000",{ "clearIncomplete": true })

    $("#tel").on("blur", function() {
        var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

        if( last.length == 3 ) {
          var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
          var lastfour = move + last;
          var first = $(this).val().substr( 0, 9 );

          $(this).val( first + '-' + lastfour );
        }
    });


    $("#cp").mask("0000")

    $("#cp").on("blur", function() {
      var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

      if( last.length == 3 ) {
          var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
          var lastfour = move + last;
          var first = $(this).val().substr( 0, 9 );

          $(this).val( first + '-' + lastfour );
      }
    });

    $("#dni").mask("00.000.000")

    $("#dni").on("blur", function() {
      var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

      if( last.length == 3 ) {
          var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
          var lastfour = move + last;
          var first = $(this).val().substr( 0, 9 );

          $(this).val( first + '-' + lastfour );
      }
    });

    $("#cuil").mask("00-00000000-0")

    $("#cuil").on("blur", function() {
    var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

    if( last.length == 3 ) {
        var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
        var lastfour = move + last;
        var first = $(this).val().substr( 0, 9 );

        $(this).val( first + '-' + lastfour );
    }

});


/* BOTON CREAR CUENTA, CONFIRMACION DE TERMINOS Y CONDICIONES, ALERTA CONFIRMACION*/

    var terminos = $("#terminosycondiciones");

    $("#crearcuenta").attr("disabled", "disable");

    terminos.click(function() {
        if ($(this).is(":checked")) {
            $("#crearcuenta").removeAttr("disabled");
        } else {
            $("#crearcuenta").attr("disabled", "disable");
        }
    });

    $("#crearcuenta").submit(function() {
           $.alert({
          icon: "fas fa-check-circle",
        columnClass: 'medium',
        title: 'FINALIZACION DE REGISTRO',
        content: 'Su cuenta ha sido creada con exito!',
        theme: "supervan",
          draggable: false,

        buttons: {
        
            Volver: {
                  text: "Volver Al Inicio",
                  btnClass: "btn-blue",
            action: function() {
                    window.open("/welcome/login/");
                     window.close();
                      }
                      }
        },

    });

    });
}); 


