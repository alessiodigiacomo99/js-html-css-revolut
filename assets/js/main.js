$(function(){
    var collegamentoLista = $("#navbar_right > div");
    var lista = $("div.d-none");
    collegamentoLista.hover(function(){
        $(this).children("div").toggleClass("d-none");
    });
});