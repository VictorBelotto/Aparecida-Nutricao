const botaoAddPaciente = document.querySelector("#adicionar-paciente");

let buscaPaciente = document.querySelector("#form-adiciona");

let tabela = document.querySelector("#tabela-pacientes");

botaoAddPaciente.addEventListener("click", (event) => {event.preventDefault();

    let paciente = obtemPacienteDoFormulario(buscaPaciente);
    
    let pacienteTr = montaTr(paciente);

    let erro = validaPaciente(paciente);

    if(erro.length > 0){
        alert("Erro")
        return;
    }

    tabela.appendChild(pacienteTr)
    
    buscaPaciente.reset();
})

function obtemPacienteDoFormulario(buscaPaciente){

    let paciente = {
        nome:buscaPaciente.nome.value,
        peso:buscaPaciente.peso.value,
        altura:buscaPaciente.altura.value,
        gordura:buscaPaciente.gordura.value,
        imc: calculaImc(buscaPaciente.peso.value, buscaPaciente.altura.value)
    }
    return paciente
}

function montaTr(paciente){

    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

//fazer uma validação de acordo com altura e peso

function validaPaciente(paciente){
    if (validaPeso(paciente.peso)) {
        return "";
    } else {
        return "Peso invalido";
    }

    if(validaAltura(paciente.altura)){
        return "";
    }else{
        return "Altura invalida";
    }
}
