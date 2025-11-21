# 🎮 Jogo: Play Quiz – Desafio de Perguntas e Respostas

**Play Quiz** é um jogo interativo de perguntas e respostas desenvolvido com **HTML5**, **CSS3**, **JavaScript** e **jQuery**, com integração a uma **API pública de perguntas** que retorna dados em formato **JSON**. O jogo tem como foco a simplicidade de uso e a dinâmica baseada em pontuação por acertos.

> 📌 **Observação**: O jogo está em **inglês**, pois não foi encontrada uma API adequada com suporte em português.

##  Como funciona o jogo

1. O jogador clica em **Iniciar Jogo**.
2. A aplicação busca uma nova pergunta com alternativas via **requisição GET** a uma API externa.
3. O jogador escolhe uma das alternativas exibidas.
4. A cada acerto:
   - 🟢 Ganha **+250 pontos**
5. A cada erro:
   - 🔴 Recebe **0 pontos**
6. O jogo segue até o jogador vencer ou decidir reiniciar.
7. A cada reinício ou fim de jogo, novas perguntas são carregadas, **tornando a experiência única e desafiadora**.

## Tecnologias Utilizadas

- **HTML5** – Estrutura da interface
- **CSS3** – Estilização visual e responsividade
- **JavaScript** – Lógica principal do jogo
- **jQuery** – Manipulação do DOM e requisição à API
- **API pública de perguntas** – Integração para obter perguntas atualizadas (em inglês)

## Funcionalidades principais

- Interface amigável e de fácil uso
- Feedback instantâneo após cada resposta
- Sistema de pontuação dinâmica baseado em acertos
- Requisições via **GET** com tratamento de **JSON**
- Transição sonora entre perguntas com feedback de sucesso ou falha
- Reinício automático com novas perguntas
- Responsivo para diferentes tamanhos de tela

## Pré-visualização
<img width="808" height="644" alt="image" src="https://github.com/user-attachments/assets/d023ed30-73af-4860-b481-90b6de7f697c" />
<img width="882" height="763" alt="image" src="https://github.com/user-attachments/assets/17121014-c2ad-444b-92f8-1c49eeb65a0c" />
<img width="718" height="362" alt="image" src="https://github.com/user-attachments/assets/ca8c02f8-b13b-496f-b4ac-e9a5a0327a5d" />

## Como executar o jogo
### Acesso online por meio do link abaixo
```bash
https://fernanda-borg3s.github.io/play-quiz-game/
```
### Clonar localmente
```bash
git clone https://github.com/fernanda-borg3s/play-quiz-game.git
cd play-quiz-game
```


