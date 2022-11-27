const campoFiltrar = document.querySelector("#filtrar-tabela");

campoFiltrar.addEventListener("input", function(){
   const pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i");
        
            if(!expressao.test(nome)){
                paciente.classList.add("escondePaciente");
            }else{
                paciente.classList.remove("escondePaciente");
            }
        }
    }else{
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            paciente.classList.remove("escondePaciente")
        }   
    }
})
