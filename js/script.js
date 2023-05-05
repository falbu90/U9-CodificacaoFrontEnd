console.log("andrea")

//Validação de Login
function login(){

    var logado =0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'andrea' && senha == '654321') {
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alert("Acesso Negado. Dados Incorretos");
    }
}
//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastro com sucesso!");
    window.location.href = "index.html";
}

function abrirCadastro() {
    document.getElementById("form-cadastrar").style.display="block";

    
}