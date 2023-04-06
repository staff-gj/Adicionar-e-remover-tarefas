function enviar(){
    const tarefas = document.getElementById('tarefas').value;
    const resultado = document.getElementById('resultado');
    const dataInicial = document.getElementById('dataInicial').value
    const dataFinal = document.getElementById('dataFinal').value

    const tudo = document.createElement('p');
    const inputBtn = document.createElement("input");
    const concluida = document.createElement("input")
    const voltar = document.createElement('input')

    inputBtn.type = "button";
    inputBtn.className = 'resultado'
    inputBtn.value = "Remover";
    concluida.type = "button"
    concluida.className = 'resultado'
    concluida.value = "Concluida"
    tudo.appendChild(concluida)
    tudo.appendChild(inputBtn)
    tudo.innerHTML = tarefas + '<br>' + 'Data de inicio:'+ dataInicial + '<br>' + 'Data Final:' + dataFinal;
    resultado.appendChild(tudo);
    resultado.appendChild(inputBtn);
    resultado.appendChild(concluida)

    inputBtn.addEventListener ('click', () => {
        resultado.removeChild(tudo);
        resultado.removeChild(inputBtn);
        resultado.removeChild(concluida)
        resultado.removeChild(voltar)

      })

    concluida.addEventListener ('click', () => {
      tudo.style.textDecoration = 'line-through'
      tudo.style.color = 'green'
      voltar.type = 'button'
      voltar.className = 'resultado'
      voltar.value = 'Voltar'
      tudo.appendChild(voltar)
      resultado.appendChild(voltar)


    })
    voltar.addEventListener('click', () => {
      tudo.style.textDecoration ='none'
      tudo.style.color = 'black'
      resultado.removeChild(voltar)
    });
      
}


  