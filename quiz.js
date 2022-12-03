$('.container-quiz').hide();
$('.btn-reiniciar').hide();
$('.container-pontuacao').hide();
$('.menu-autores').hide();
function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(); //caso for mandar algo para o servidor 'POST'
    return request.responseText;
}

// //Buscar Elementos da propriedade Perguntas/Alternativas
let pont_f = 0; //Variavel pontos
let n_quest = 0; //Variavel número da questão
let correta = 0; //Variavel para resposta correta

function questao() {
    //Perguntas
       for (let i = 0; i < quiz.length; i++) {
        $('#pergunta').text(quiz[n_quest].question);
    };
    //juntar as alternativas objeto Json em um array com a posição da resposta
    let  alternativas = [
        {
        alternativa: [ quiz[0].incorrectAnswers[0], quiz[0].correctAnswer, quiz[0].incorrectAnswers[1], quiz[0].incorrectAnswers[2], quiz[0].incorrectAnswers[3]],
        resposta: 1
    },
    {
        alternativa: [quiz[1].incorrectAnswers[0], quiz[1].incorrectAnswers[1], quiz.correctAnswer, quiz[1].incorrectAnswers[2], quiz[1].incorrectAnswers[3]],
        resposta: 2
    },
    {
        alternativa: [quiz[2].correctAnswer, quiz[2].incorrectAnswers[0], quiz[2].incorrectAnswers[1],  quiz[2].incorrectAnswers[2], quiz[2].incorrectAnswers[3]],
        resposta: 0
    },
    {
        alternativa: [ quiz[3].incorrectAnswers[0], quiz[3].incorrectAnswers[1],  quiz[3].incorrectAnswers[2], quiz[3].correctAnswer, quiz[3].incorrectAnswers[3]],
        resposta: 3
    },
    {
        alternativa: [ quiz[4].correctAnswer, quiz[4].incorrectAnswers[0], quiz[4].incorrectAnswers[1],  quiz[4].incorrectAnswers[2], quiz[4].incorrectAnswers[3]],
        resposta: 0
    }
    ];
    //for para pecorrer o array alternativas e mostrar na tela
    for (let i = 0; i < alternativas.length; i++) {
        $('#btn-r' + i).text(alternativas[n_quest].alternativa[i]);
    };
    correta = alternativas[n_quest].resposta;

};
function main(){
    data = fazGet("https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=5&region=BR");
    quiz = JSON.parse(data);
    // console.log(quiz);
    quiz.forEach(element => {
    questao();
    });
}
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

//Botão Jogar
$('.btn-jogar').on('click', function () {
    $(this).hide();
    $('img').hide();
    $('.container-quiz').show();
    $('.btn-reiniciar').show();
    main();
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