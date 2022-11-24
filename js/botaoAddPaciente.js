const botaoAddPaciente = document.querySelector("#adicionar-paciente");

let buscaPaciente = document.querySelector("#form-adiciona");


botaoAddPaciente.addEventListener("click", (event) => {event.preventDefault();

    let paciente = obtemPacienteDoFormulario(buscaPaciente)
    verificaSeFormularioEhValido(paciente)
    let pacienteTr = montaTr(paciente)


  
    
    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr)
    pacientes = document.querySelectorAll(".paciente")
console.log(pacientes)
    buscaPaciente.reset();

    
    
    
})

function obtemPacienteDoFormulario(buscaPaciente){

    let paciente = {
        nome:buscaPaciente.nome.value,
        peso:buscaPaciente.peso.value,
        altura:buscaPaciente.altura.value,
        gordura:buscaPaciente.gordura.value,
        imc: 0 //calculaImc(buscaPaciente.peso.value, buscaPaciente.altura.value)
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

function verificaSeFormularioEhValido(paciente){

   /*  let nome = paciente.nome
    let peso = paciente.peso
    let altura = paciente.altura
    let gordura = paciente.gordura */

    //let = valoresDigitados = [nome, peso, altura, gordura];

    /* console.log(paciente) */

    let verificaCamposPreenchidos = (nome && peso && altura && gordura) != "";

   console.log(verificaCamposPreenchidos)

    for(let valoresDigitados in paciente ){
        const valores = valoresDigitados
        
        console.log(`O valor digitado é: ${valores}`)
    }


    return 

    }

