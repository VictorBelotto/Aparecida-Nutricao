
let pacientes = document.querySelectorAll(".paciente")


for(let i = 0; i < pacientes.length; i++){

    const paciente = pacientes[i];

    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    const tdImc = paciente.querySelector(".info-imc");
    
    const pesoEhValido = peso <= 600 && peso > 0;
    const alturaEhValida = altura <= 3.50 && altura > 0;

    
    if(!pesoEhValido && !alturaEhValida){
        tdImc.textContent = "Altura e Peso invalidos"
        paciente.classList.add("altura-peso-invalidos");
    } 
        else if(pesoEhValido === false){
            tdImc.textContent = "Peso invalido"
            paciente.classList.add("peso-invalido");
        }
            else if(alturaEhValida === false){
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