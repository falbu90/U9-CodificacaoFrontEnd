//efeito de esconder formulário de cadastro

$(document).ready(functiom(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();

   
    });

};)