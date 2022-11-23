// imc = peso / altura * altura

const pacientes = document.querySelectorAll(".paciente")

const peso = document.querySelectorAll(".info-peso");

const altura = document.querySelectorAll(".info-altura");

const imc = document.querySelectorAll(".info-imc");

for(let i = 0; i < pacientes.length; i++){
    
    const pesoCalculo = Number(peso[i].textContent)
    const alturaCalculo = Number(altura[i].textContent)
    
    let pesoEhValido = pesoCalculo <= 600 && pesoCalculo > 0;
    let alturaEhValida = alturaCalculo <= 3.50 && alturaCalculo > 0;

   
    
    if(!pesoEhValido && !alturaEhValida){
        imc[i].textContent = "Altura e Peso invalidos"
        pacientes[i].classList.add("altura-peso-invalidos");
    } 
        else if(pesoEhValido === false){
            imc[i].textContent = "Peso invalido"
            pacientes[i].classList.add("peso-invalido");
        }
            else if(alturaEhValida === false){
                imc[i].textContent = "Altura invalida" 
                pacientes[i].classList.add("altura-invalida");
            }
                else{
                    calculaImc(pesoCalculo, alturaCalculo)
                    imc[i].textContent = calculaImc(pesoCalculo, alturaCalculo)
                }
}

function calculaImc(peso, altura){
    let resultado = peso / (altura * altura);
    
    return resultado.toFixed(2);
}




 



