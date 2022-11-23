const botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click", (event) => {
    event.preventDefault();

    let pegaValores = document.querySelector("#form-adiciona");

    let nome = pegaValores.nome.value;
    let peso = pegaValores.peso.value;
    let altura = pegaValores.altura.value
    let gordura = pegaValores.gordura.value

    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
    
    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");
    const imcTd = document.createElement("td");

   

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(pesoTd, alturaTd)

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");
    
    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr)

})



