let botaoBuscaPaciente = document.querySelector("#buscar-pacientes");

botaoBuscaPaciente.addEventListener("click", function(){
     console.log("Buscando pacientes...");
    let erroAjax = document.querySelector("#erro-ajax");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {

        if(xhr.status == 200){
            erroAjax.classList.add("escondePaciente")
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
    
            pacientes.forEach( function(paciente) {
                adicionaPacienteNaTabela(paciente)
            });
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)
            
        }

       
    })
    xhr.send();
})