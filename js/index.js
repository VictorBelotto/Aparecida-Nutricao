
let pacientes = document.querySelectorAll(".paciente")


for(let i = 0; i < pacientes.length; i++){

    const paciente = pacientes[i];

    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    const tdImc = paciente.querySelector(".info-imc");
    
    const pesoEhValido = validaPeso(peso);
    const alturaEhValida = validaAltura(altura);

    
    if(!pesoEhValido && !alturaEhValida){
        tdImc.textContent = "Altura e Peso invalidos"
        paciente.classList.add("altura-peso-invalidos");
    } 
        else if(!pesoEhValido){
            tdImc.textContent = "Peso invalido"
            paciente.classList.add("peso-invalido");
        }
            else if(!alturaEhValida){
                tdImc.textContent = "Altura invalida" 
                paciente.classList.add("altura-invalida");
                
            }
                else{
                    
                    tdImc.textContent = calculaImc(peso, altura)
                }
}

function calculaImc(peso, altura){
    let resultado = peso / (altura * altura);
    
    return resultado.toFixed(2);
}


function validaPeso(peso){
    if(peso <= 500 && peso > 0 ){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura <= 3.50 && altura > 0){
        return true;
    }else{
        return false;
    }
}