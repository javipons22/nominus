//Obtener query string para ver si hay envio de email o error
var urlParams = new URLSearchParams(window.location.search);

var query = urlParams.get('error'); // "edit"
console.log(query);

// Si el formulario devuelve el query error=true mostrar "mensaje no enviado" ,
if (query == "true") {
    $(".email__contenedor--no-enviado, .email").css("display","flex");
// Si el formulario devuelve error=false mostrar "mensaje enviado"
} else if (query == "false"){
    $(".email__contenedor--enviado, .email").css("display","flex");
}

// Handlers de click en boton cerrar o aceptar (del mensaje de email)
$(".email__boton-aceptar , .email__boton-cerrar").click(function(){
    $(".email__contenedor, .email").css("display","none");
});