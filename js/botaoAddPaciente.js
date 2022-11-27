const botaoAddPaciente = document.querySelector("#adicionar-paciente");

let buscaPaciente = document.querySelector("#form-adiciona");

let tabela = document.querySelector("#tabela-pacientes");

botaoAddPaciente.addEventListener("click", (event) => {event.preventDefault();

    let paciente = obtemPacienteDoFormulario(buscaPaciente);

    adicionaPacienteNaTabela(paciente)
    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    
    
    buscaPaciente.reset();

    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
})

// Montando Paciente

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    tabela.appendChild(pacienteTr)
}

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

//fazer uma validação do formulario para enviar

function validaPaciente(paciente){

   let erros = [];

   if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
   }

   if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
   }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido")
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida")
    }
   return erros;

}

function exibeMensagensErro(erros){
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach((erro) => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

