// Espera todo o documento HTML carregar antes de rodar os scripts
document.addEventListener("DOMContentLoaded", () => {

    /* --- Funcionalidade 1: Modo Escuro (Acessibilidade) --- */
    const btnTema = document.getElementById("btn-tema");
    
    btnTema.addEventListener("click", () => {
        // Alterna a classe 'dark-mode' no elemento <body>
        document.body.classList.toggle("dark-mode");
        
        // Altera o texto do botão de acordo com a situação atual
        if (document.body.classList.contains("dark-mode")) {
            btnTema.textContent = "Alternar Modo Claro";
        } else {
            btnTema.textContent = "Alternar Modo Escuro";
        }
    });

    /* --- Funcionalidade 2: Validador do Quiz --- */
    const btnVerificar = document.getElementById("btn-verificar");
    const caixaResultado = document.getElementById("resultado-quiz");

    btnVerificar.addEventListener("click", () => {
        // Captura a opção de radio button selecionada
        const opcaoSelecionada = document.querySelector('input[name="pergunta1"]:checked');

        // Exibe a caixa de resultado modificando o CSS display dinamicamente
        caixaResultado.style.display = "block";

        if (!opcaoSelecionada) {
            caixaResultado.textContent = "⚠️ Por favor, selecione uma resposta antes de verificar.";
            caixaResultado.style.backgroundColor = "#feebc8";
            caixaResultado.style.color = "#c05621";
            return;
        }

        // Processa as variáveis e valores antes de exibir na tela
        if (opcaoSelecionada.value === "correto") {
            caixaResultado.textContent = "🎉 Resposta Correta! Falhas de iluminação, texturas estranhas na pele e movimentos bruscos são indícios fortes de deepfakes.";
            caixaResultado.style.backgroundColor = "#c6f6d5";
            caixaResultado.style.color = "#22543d";
        } else {
            caixaResultado.textContent = "❌ Resposta Incorreta. Tente novamente! Lembre-se de que as IAs ainda falham em pequenos detalhes anatômicos e físicos.";
            caixaResultado.style.backgroundColor = "#fed7d7";
            caixaResultado.style.color = "#742a2a";
        }
    });

    /* --- Funcionalidade 3: Simulação de Envio de Denúncia --- */
    const formDenuncia = document.getElementById("form-denuncia");

    formDenuncia.addEventListener("submit", (evento) => {
        // Impede a página de recarregar por padrão ao enviar um formulário
        evento.preventDefault();

        // Captura os dados digitados
        const nomeUsuario = document.getElementById("nome").value;

        // Dá um feedback amigável usando variáveis coletadas na tela
        alert(`Obrigado pelo relato, ${nomeUsuario}! Nossa equipe comunitária irá analisar a URL enviada para combater a desinformação.`);
        
        // Limpa o formulário
        formDenuncia.reset();
    });
});
