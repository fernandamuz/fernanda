const perguntas = [
    {
        enunciado: "você já sabe o que vai fazer depois da escola?",
        alternativas: [
            { texto: "ja sei, sim", pontuacao: 2 },
            { texto: "ainda não sei", pontuacao: 1 }
        ]
    },
    {
        enunciado: "você prefere humanas ou exatas?",
        alternativas: [
            { texto: "humanas", pontuacao: 1 },
            { texto: "exatas", pontuacao: 2 }
        ]
    },
    {
        enunciado: "você acha que no futuro vão ter professores nas escolas?",
        alternativas: [
            { texto: "não, a tecnologia vai dominar muitas coisas ainda, e me preocupo com quem vai perder o emprego", pontuacao: 3 },
            { texto: "acho que pode acabar as tecnologias daqui para frente.", pontuacao: 2 }
        ]
    },
    {
        enunciado: "como foi seu ultimo ano da escola?",
        alternativas: [
            { texto: "legal, sinto saudades.", pontuacao: 5 },
            { texto: "chato, nao me dava bem com ninguem", pontuacao: 2 }
        ]
    },
    {
        enunciado: "qual sua opnião sobre a merenda da escola?",
        alternativas: [
            { texto: "muito boa, sempre entregam tudo!", pontuacao: 3 },
            { texto: "boa, mas poderiam melhorar.", pontuacao: 1 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta

