

var valor = "";//variavel para acumular valores 

//chamada do evento de click de todos os elementos
//com a classe botao
$(document).on("click",".botao, .op",function(){
 //variavel que acumula o valor do textContent do botao
    valor += $(this).text();
    //passando valor acumulado para o display
    $(".display").attr("value", valor);

});

$(document).on("click",".botaoC",function(){
 
  $("#c").click(function(){
    $(".display").val("");
    valor = "";
  })
    $("#igual").click(function(){
    var valor= $(".display").attr("value");
    $(".display").attr("value", eval(valor));
  })
});


