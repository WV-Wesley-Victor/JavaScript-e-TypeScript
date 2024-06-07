function relogio() {
  // Função interna para criar uma hora a partir de segundos
  function criaHoraDosSegundos(segundos) {
    // Cria uma nova instância de Date a partir dos segundos fornecidos
    const data = new Date(segundos * 1000);
    // Retorna a hora formatada no formato de 24 horas, no fuso horário UTC
    return data.toLocaleTimeString("pt-BR", {
      hour12: false, // Usa formato de 24 horas
      timeZone: "UTC", // Utiliza o fuso horário UTC
    });
  }

  // Seleciona o elemento HTML com a classe "relogio"
  const relogio = document.querySelector(".relogio");
  let segundos = 0; // Inicializa a contagem de segundos
  let timer; // Declara uma variável para armazenar o intervalo do relógio

  // Função para iniciar o relógio
  function iniciaRelogio() {
    // Define um intervalo que incrementa os segundos a cada segundo
    timer = setInterval(function () {
      segundos++; // Incrementa os segundos
      // Atualiza o conteúdo do elemento HTML com a hora atualizada
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000); // A cada 1000 milissegundos (1 segundo)
  }

  // Adiciona um evento de clique ao documento
  document.addEventListener("click", function (e) {
    const el = e.target; // Obtém o elemento que foi clicado

    // Verifica se o elemento clicado possui a classe "iniciar"
    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado"); // Remove a classe "pausado" do relógio
      clearInterval(timer); // Limpa o intervalo do relógio, se existir
      iniciaRelogio(); // Inicia o relógio
    }

    // Verifica se o elemento clicado possui a classe "pausar"
    if (el.classList.contains("pausar")) {
      clearInterval(timer); // Limpa o intervalo do relógio para pausá-lo
      relogio.classList.add("pausado"); // Adiciona a classe "pausado" ao relógio
    }

    // Verifica se o elemento clicado possui a classe "zerar"
    if (el.classList.contains("zerar")) {
      relogio.classList.remove("pausado"); // Remove a classe "pausado" do relógio
      clearInterval(timer); // Limpa o intervalo do relógio
      relogio.innerHTML = "00:00:00"; // Reseta o conteúdo do relógio para "00:00:00"
      segundos = 0; // Reseta a contagem de segundos para zero
    }
  });
}

// Chama a função "relogio" para iniciar o relógio
relogio();
