//Array contendo Questões as alternativas e as respostas
let questoes = [
    {
        pergunta: ['Qual a capital do Brasil?'],
        alternativas: ['Rio de Janeiro', 'Brasília', 'Salvador', 'São Paulo'],
        resposta: 1
    },
    {
        pergunta: ['Quanto é 100 + 100?'],
        alternativas: ['100', '20', '200', '001'],
        resposta: 2
    },
    {
        pergunta: ['Qual é a tradução da palavra "Actually" em português?'],
        alternativas: ['Na verdade', 'Atualmente', 'Atualizar', 'Geralmente'],
        resposta: 0
    },
    {
        pergunta: ['Qual é a quarta letra do alfabeto?'],
        alternativas: ['Letra A', 'Letra B', 'Letra E', 'Letra D'],
        resposta: 3
    },
    {
        pergunta: ['Qual é o maior animal terrestre?'],
        alternativas: ['Elefante Africano', 'Baleia Azul', 'Girafa', 'Tubarão Branco'],
        resposta: 0
    }
];
let pont_f = 0; //Variavel pontos
let n_quest = 0; //Variavel número da questão
let correta = 0; //Variavel para resposta correta

//Buscar Elementos da propriedade Perguntas/Alternativas
function questao() {
    correta = questoes[n_quest].resposta;

    //--Perguntas
    for (const per of questoes[n_quest].pergunta) {
        $('#pergunta').text(per);
    };
    //--Alternativas
    for (let i = 0; i < questoes.length; i++) {
        $('#btn-r' + i).text(questoes[n_quest].alternativas[i]);
    };
};

//Alternativas em um loop for
for (let i = 0; i <= 3; i++) {
    $('.btn-resposta#btn-r' + i).on('click', function () {
        var audioError = document.getElementById('error');
        var audioCerto = document.getElementById('certo');
        if (correta != i) {
            var pisca = $('.btn-resposta#btn-r' + i);      // alternativa errada
            pisca.addClass('errado');
            setTimeout(function () {
                pisca.removeClass('errado');
            }, 590);
            audioError.currentTime = 0.1;
            audioError.play();
        } else {
            var pisca = $('.btn-resposta#btn-r' + i);      //alternativa correta
            pisca.addClass('correto');
            setTimeout(function () {
                pisca.removeClass('correto');
                pont_f += 250; // Usuario ganha 250 pontos para cada alternativa correta. 
            }, 590);
            audioCerto.currentTime = 0.1;
            audioCerto.play();
        };
    });
};
//-----------------------------------------------------//
$('.container-quiz').hide();
$('.btn-reiniciar').hide();
$('.container-pontuacao').hide();
//Botão Jogar
$('.btn-jogar').on('click', function () {
    $(this).hide();
    $('img').hide();
    $('.container-quiz').show();
    $('.btn-reiniciar').show();
    questao();
});
//Botão Resposta
$('.btn-resposta').on('click', function () {
    n_quest++; //Alterar Questão
    if (n_quest != 5) {
        setTimeout(function () {
            questao(); //Proxima Questão
        }, 590);
    } else {
        setTimeout(function () {
            JPontuacao();//Chamar Janela pontuação com tempo
        }, 590);
    };
    console.log(n_quest);
});
//janela pontuação
function JPontuacao() {
    if (n_quest == 5) {
        $('#pontuacaof').text(pont_f.toString()); //Variavel transformada em string para ser mostrada na tela.
        $('.container').hide();
        $('.container-quiz').hide();
        $('.menu-autores').hide();
        $('.container-pontuacao').show();
    };
};
//Botão Reiniciar
$('.btn-reiniciar').on('click', function () {
    location.reload();
});
//Botão Voltar
$('.btn-voltar').on('click', function () {
    $('.menu-autores').hide();
    $('.container').show();
    if (n_quest == 5) {
        $('.container').hide();
        $('.container-pontuacao').show();
    };
});
//Botão Saber Mais
$('.btn-saibamais').on('click', function () {
    $('.container').hide();
    $('.container-pontuacao').hide();
    $('.menu-autores').show();
});