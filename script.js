// NOTA: Os caminhos dos áudios foram atualizados para caminhos locais.
// Verifique se os nomes dos arquivos na pasta 'audio' correspondem aos que estão no código.
const questions = [
  {
    text: "♫ Tocando: New West - Those Eyes\n\nCause all of the small things that you do...",
    answer: "are what remind me why i fell for you",
    options: [
      "are what remind me why i fell for you",
      "are the memories I can't undo",
      "is how I know our love is true",
      "are the moments I cling onto"
    ],
    audioSrc: 'audio/Those Eyes.m4a', // Caminho local para a música
    startTime: 20,
    pauseTime: 40.5,
    story: "Quando ouvimos essa música pela primeira vez, foi em loop na sua varanda. E você me contou que, quando viajei, ficou escutando ela sem parar enquanto pensava em mim. Eu achei a coisa mais fofa do mundo. Nunca pensei que alguém, algum dia, se apaixonaria por mim e hoje estou aqui, com a pessoa com quem quero viver pelo resto da minha vida. 💜"
  },
  {
    text: "And when we're apart, and I'm missing you...",
    answer: "i close my eyes and all i see is you",
    options: [
      "i close my eyes and all i see is you",
      "i look up at the stars and think of you",
      "i hear your voice in everything i do",
      "i write down your name in morning dew"
    ],
    audioSrc: 'audio/Those Eyes.m4a', // Caminho local para a música
    startTime: 41,
    pauseTime: 50
  },
  {
    text: "♫ Tocando: Jorge Ben Jor - Carolina Bela\n\nEu falei, eu menti, eu chorei, eu sorri dizendo que ela mora no meu peito...",
    answer: "e eu moro vizinho à ela",
    options: [
      "e eu moro vizinho à ela",
      "e ela nem sabe da minha janela",
      "e meu coração por ela apela",
      "e a saudade me acautela"
    ],
    audioSrc: 'audio/Carolina Bela.m4a', // ATENÇÃO: Verifique o nome e a extensão deste arquivo
    startTime: 10,
    pauseTime: 40.5,
    story: "Essa música nós ouvimos na piscina do prédio, quando descobrimos que amávamos MPB, assim como amamos um ao outro. E olha como evoluímos: quase não vamos mais para aquele lugar, kk. Você vai ser sempre minha garota bela e vai sempre morar no meu peito, e eu vou sempre morar no seu, porque nosso momento de sermos vizinhos está próximo do fim, e seremos casados.💜"
  },
  {
    text: "Que eu fico desse jeito...",
    answer: "pensando nos beijos e nos carinhos dela",
    options: [
      "pensando nos beijos e nos carinhos dela",
      "lembrando dos sorrisos e abraços dela",
      "sonhando com o perfume e a pele dela",
      "imaginando o futuro ao lado dela"
    ],
    audioSrc: 'audio/Carolina Bela.m4a', // ATENÇÃO: Verifique o nome e a extensão deste arquivo
    startTime: 39.5,
    pauseTime: 45.5
  },
  {
    text: "♫ Tocando: System of a Down - Lonely Day\n\nAnd if you go...",
    answer: "i wanna go with you",
    options: [
      "i wanna go with you",
      "i'll follow through with you",
      "my world feels new with you",
      "i will be true to you"
    ],
    audioSrc: 'audio/Lonely Day.m4a', // ATENÇÃO: Verifique o nome e a extensão deste arquivo
    startTime: 51,
    pauseTime: 80,
    story: "Essa música me lembra que agora você está entrando na sua fase punk rock, e eu estou amando isso! Ver você se rebelar e odiar o sistema, kk, é uma das coisas que mais me dá orgulho. Ver minha garota gótica se transformar.💜 Ainda vamos viver muitas fases, músicas, momentos de vida e da nossa relação, mas nunca vai mudar o fato de que eu sempre vou te amar e sempre vou cuidar de você, assim como você cuida de mim.💜"
  },
  {
    text: "And if you die...",
    answer: "i wanna die with you",
    options: [
      "i wanna die with you",
      "my soul will fly with you",
      "i will lie down with you",
      "my tears will dry with you"
    ],
    audioSrc: 'audio/Lonely Day.m4a', // ATENÇÃO: Verifique o nome e a extensão deste arquivo
    startTime: 80,
    pauseTime: 86
  },
  {
    text: "♫ Tocando: Konai x Kamaitachi - Perfume\n\nNem precisa insistir que eu...",
    answer: "vou correndo pra ti",
    options: [
      "vou correndo pra ti",
      "sempre te escolhi",
      "nunca te esqueci",
      "só penso em ti"
    ],
    audioSrc: 'audio/Perfume.m4a', // ATENÇÃO: Verifique o nome e a extensão deste arquivo
    startTime: 17,
    pauseTime: 37,
    story: "Você disse que escolheu essa música no ano passado por causa do jeito como eu te olho, e de como, mesmo vendo seu 'pior' lado, eu continuei gostando de você. Mesmo depois de 1 ano, eu descobri ainda mais coisas sobre você, e minha paixão por essa garota chamada Kiara só aumentou, rs. E não me arrependo de absolutamente nada. Você falou que, assim como a Haru não consegue viver sem seu lobo, rs, eu também concordo: não consigo mais viver sem minha garota na minha vida. 💜💜"
  },
  {
    text: "Não tem mais ninguém que me olhe...",
    answer: "como ela olha",
    options: [
      "como ela olha",
      "como ela me consola",
      "como ela me descontrola",
      "como ela me enrola"
    ],
    audioSrc: 'audio/Perfume.mp3', // ATENÇÃO: Verifique o nome e a extensão deste arquivo
    startTime: 37,
    pauseTime: 45
  },
  {
    text: "♫ Tocando: Ana Frango Elétrico - Mulher Homem Bicho\n\nQuem me dera morder sua orelha...",
    answer: "Cafungar seu pescoço",
    options: [
      "Cafungar seu pescoço",
      "Sentir seu alvoroço",
      "Te querer para o almoço",
      "Morder seu arcabouço"
    ],
    audioSrc: 'audio/Mulher Homem Bicho.m4a',
    startTime: 40,
    pauseTime: 61,
    story: "A música do primeiro show que fomos juntos… Eu amei ficar ao seu lado enquanto ouvíamos a Ana pela primeira vez ao vivo, bem na nossa frente. Ainda vamos voltar na Infinu para muitos outros shows.💜"
  },
  {
    text: "te roer até o osso...",
    answer: "feito cachorro",
    options: [
      "feito cachorro",
      "buscando meu socorro",
      "subindo pelo morro",
      "no mais alto desforro"
    ],
    audioSrc: 'audio/Mulher Homem Bicho.mp3',
    startTime: 61,
    pauseTime: 69
  },
  {
    text: "♫ Tocando: Clarissa - Hedonista\n\nNão liga pra o que é certo...",
    answer: "olha ao seu redor.",
    options: [
      "olha ao seu redor.",
      "sinta o seu sabor.",
      "esqueça o que for dor.",
      "viva sem pudor."
    ],
    audioSrc: 'audio/Hedonista.m4a',
    startTime: 0,
    pauseTime: 26,
    story: "Coloquei essa música na nossa playlist e nunca pensei que você fosse acabar viciando nela como aconteceu, rs. Várias vezes, quando fomos até o ambulatório, você colocava essa música no nosso fone, e eu amei ouvir ela cada vez com você. 💜"
  },
  {
    text: "Mente o quanto tu quiser, o teu, é bem maior...",
    answer: "Hedonista a vida toda",
    options: [
      "Hedonista a vida toda",
      "Minha alma se acomoda",
      "A vida que me engoda",
      "Nessa eterna roda"
    ],
    audioSrc: 'audio/Hedonista.m4a',
    startTime: 24.5,
    pauseTime: 32
  },
  {
    text: "♫ Tocando: Clarissa - Para-raio\n\nEu sou tão normal, pessoa 'non grata'...",
    answer: "Caso de psiquiatra",
    options: [
      "Caso de psiquiatra",
      "Alma de vira-lata",
      "Pessoa que se maltrata",
      "Coração que desata"
    ],
    audioSrc: 'audio/para raio.m4a',
    startTime: 12,
    pauseTime: 37,
    story: "Essa música é quase igual à última, só que acho engraçado o fato de que parece descrever nós dois: um casal doidinho, caso de psiquiatra, rsrs. 💜"
  },
  {
    text: "Para-raio de problema...",
    answer: "Prescrição é meu esquema",
    options: [
      "Prescrição é meu esquema",
      "O amor é meu dilema",
      "Resolvendo esse problema",
      "Com a vida por tema"
    ],
    audioSrc: 'audio/para raio.m4a',
    startTime: 36,
    pauseTime: 41
  },
  {
    text: "♫ Tocando: SID - Sítio do Tio Harry\n\nMas no máximo nos conversa até ver o amanhecer...",
    answer: "(três horas depois)",
    options: [
      "(três horas depois)",
      "(uma hora depois)",
      "(muito tempo depois)",
      "(mais tarde)"
    ],
    audioSrc: 'audio/sitio.m4a',
    startTime: 120,
    pauseTime: 144,
    story: "Lembro de todas as vezes em que você colocava essa música e a gente ficava cantando bem alto e rindo da letra, kkk. Eu amo esses momentos.💜"
  },
  {
    text: "Eu paro com o rap e vendo arte na praia?...",
    answer: "ei, eu tô do outro lado, Nog",
    options: [
      "ei, eu tô do outro lado, Nog",
      "o que cê vai fazer, 'mô'?",
      "o beat já começou, oh",
      "me passa o microfone, bro"
    ],
    audioSrc: 'audio/sitio.m4a',
    startTime: 144,
    pauseTime: 155
  },
  {
    text: "♫ Tocando: O Cinza - Nossa Bossa\n\nMas veja, a chuva não atrapalha...",
    answer: "Ela pinga e não rechaça",
    options: [
      "Ela pinga e não rechaça",
      "O tempo não desfaça",
      "A vida que me abraça",
      "O amor que não tem praça"
    ],
    audioSrc: 'audio/Nossa Bossa.m4a', // ATENÇÃO: Verifique o nome do arquivo
    startTime: 20, // ATENÇÃO: Defina o tempo de início
    pauseTime: 48, // ATENÇÃO: Defina o tempo de pausa
    story: "Essa música tem a tranquilidade de uma tarde chuvosa que a gente adora passar juntos. Super nossa cara." // ATENÇÃO: Personalize a história
  },
  {
    text: "Essa é a nossa bossa...",
    answer: "Como amantes no salão",
    options: [
      "Como amantes no salão",
      "Girando na canção",
      "Vivendo essa paixão",
      "Perdidos na imensidão"
    ],
    audioSrc: 'audio/Nossa Bossa.m4a', // ATENÇÃO: Verifique o nome do arquivo
    startTime: 48, // ATENÇÃO: Defina o tempo de início
    pauseTime: 62 // ATENÇÃO: Defina o tempo de pausa
  }
];

let currentStage = "name";
let currentQuestion = 0;
let userName = "";
const audioPlayer = document.getElementById('audioPlayer');
let audioPausedByQuestion = false;
let score = 0;
let errors = 0;

// Função para embaralhar as opções de resposta
function shuffleArray(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function fadeInAudio(player, duration = 1500) {
  player.volume = 0;
  let intervalTime = 50;
  let fadeStep = intervalTime / duration;
  let fadeInterval = setInterval(() => {
    if (player.volume < 1.0 - fadeStep) {
      player.volume += fadeStep;
    } else {
      player.volume = 1.0;
      clearInterval(fadeInterval);
    }
  }, intervalTime);
}

function checkAnswer(selectedOption = null) {
  if (currentStage === "name") {
    handleNameStage();
    return;
  }
  if (currentStage === "welcome") {
    handleWelcomeStage();
    return;
  }
  if (currentStage === "questions" && selectedOption !== null) {
    const correct = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");
    if (selectedOption === correct) {
      feedback.innerText = "Acertou! ❤️";
      if (!questions[currentQuestion].answeredCorrectly) {
        score++;
        questions[currentQuestion].answeredCorrectly = true; // Marca como respondida uma única vez
      }
      
      if (audioPausedByQuestion) {
        audioPlayer.play();
        audioPausedByQuestion = false;
      }
      if (currentQuestion % 2 === 0) {
          handleVerseTransition();
      } else {
          showStoryScreen();
      }
    } else {
      feedback.innerText = "Errou infelizmente :/, mas você pode tentar de novo <3";
      if (!questions[currentQuestion].answeredCorrectly) {
        errors++;
      }
      showRetryButtons();
    }
  }
}

function handleNameStage() {
    const input = document.getElementById("answerInput");
    const feedback = document.getElementById("feedback");
    const questionElement = document.getElementById("question");
    const mainButton = document.getElementById("mainButton");
    userName = input.value.trim();
    if (userName === "") {
      feedback.innerText = "Digite seu nome antes de continuar 💜";
      return;
    }
    if (userName.toLowerCase() === "kiara") {
      questionElement.innerHTML = `
        <h1>Bem-vinda, minha princesinha Kiara 💜</h1>
        <p>Você é o amor da minha vida. Que esse joguinho te faça sorrir como você faz comigo todos os dias.</p>
        <img src="img/kiara.jpg" alt="Foto especial da Kiara" class="kiara-img" />
      `;
    } else {
      const isFeminine = userName.slice(-1).toLowerCase() === "a";
      const welcome = isFeminine ? "Bem-vinda" : "Bem-vindo";
      questionElement.innerHTML = `
        <h1>${welcome}, ${userName}! 💜</h1>
        <p>É um prazer ter você aqui. Prepare-se para se emocionar com músicas que marcaram o meu relacionamento!</p>
      `;
    }
    input.style.display = "none";
    feedback.innerText = "";
    mainButton.innerText = "Vamos iniciar!";
    currentStage = "welcome";
    audioPlayer.play().catch(() => {});
    audioPlayer.pause();
}

function handleWelcomeStage() {
    const mainButton = document.getElementById("mainButton");
    const input = document.getElementById("answerInput");
    const feedback = document.getElementById("feedback");
    mainButton.style.display = "none";
    input.style.display = "none";
    feedback.innerText = "";
    document.getElementById("options").style.display = "flex";
    showQuestion();
    currentStage = "questions";
}

function rebuildQuestionUI() {
    const gameDiv = document.getElementById("game");
    if (!document.getElementById('question')) {
        gameDiv.innerHTML = `
            <p id="question"></p>
            <div id="options"></div>
            <p id="feedback"></p>
        `;
    }
}

function showQuestion() {
  rebuildQuestionUI(); // Garante que a UI sempre exista
  const question = questions[currentQuestion];
  const questionElement = document.getElementById("question");
  const optionsDiv = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  questionElement.innerText = question.text;
  feedback.innerText = "";

  // Reinicia a música se for a primeira parte de uma dupla
  if (currentQuestion % 2 === 0) {
    audioPlayer.src = question.audioSrc;
    audioPlayer.currentTime = question.startTime;
    audioPlayer.play().catch(e => console.error("Erro ao tocar áudio:", e));
    fadeInAudio(audioPlayer);
  } else { // Se for a segunda parte, apenas dá play se estava pausada
      if (audioPlayer.paused) {
          audioPlayer.currentTime = question.startTime;
          audioPlayer.play().catch(e => console.error("Erro ao tocar áudio:", e));
      }
  }

  audioPlayer.ontimeupdate = null; 
  audioPlayer.ontimeupdate = () => {
    if (audioPlayer.currentTime >= question.pauseTime && audioPlayer.volume === 1) {
      audioPlayer.pause();
      audioPausedByQuestion = true;
      audioPlayer.ontimeupdate = null;
    }
  };

  optionsDiv.innerHTML = "";
  const shuffledOptions = shuffleArray([...question.options]);
  shuffledOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function handleVerseTransition() {
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    const nextVerseBtn = document.createElement("button");
    nextVerseBtn.innerText = "Próximo Verso";
    optionsDiv.appendChild(nextVerseBtn);
    const backBtn = document.createElement("button");
    backBtn.innerText = "Voltar";
    optionsDiv.appendChild(backBtn);
    
    backBtn.onclick = () => {
        audioPlayer.pause();
        showQuestion();
    };

    const nextQuestionStartTime = questions[currentQuestion + 1].startTime;
    const proceedToNextVerse = () => {
        if (audioPlayer.ontimeupdate === null && !nextVerseBtn.disabled) return; 
        nextVerseBtn.disabled = true;
        audioPlayer.ontimeupdate = null;
        currentQuestion++;
        showQuestion();
    };
    nextVerseBtn.onclick = proceedToNextVerse;

    audioPlayer.ontimeupdate = () => {
        if (audioPlayer.currentTime >= nextQuestionStartTime) {
            proceedToNextVerse();
        }
    };
}

function showStoryScreen() {
    const story = questions[currentQuestion - 1].story;
    const gameDiv = document.getElementById("game");
    audioPlayer.ontimeupdate = null;
    gameDiv.innerHTML = `
        <h2>Nossa História com essa Música... ❤️</h2>
        <p style="font-style: italic; margin: 20px;">${story}</p>
        <button id="nextMusicButton">Próxima Música</button>
        <button id="backButton">Voltar</button>
    `;
    
    document.getElementById("backButton").onclick = () => {
        audioPlayer.pause();
        showQuestion(); // Mostra a segunda parte da pergunta novamente
    };

    document.getElementById("nextMusicButton").onclick = () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showFinalScreen();
        }
    };
}

function showFinalScreen() {
    const gameDiv = document.getElementById("game");
    if (userName.toLowerCase() === 'kiara') {
        gameDiv.innerHTML = `
            <h2>✨ Você chegou ao final ✨</h2>
            <h3>Seu Placar:</h3>
            <p>Acertos: ${score}</p>
            <p>Erros: ${errors}</p>
            <br>
            <p>Essas são as músicas que para mim, mais que marcaram esse nosso caminho juntos!</p>
            <p>Nem se eu fizesse o próximo filme do farol seria suficiente para dizer o quanto eu te amo.</p>
            <p>Te amo para sempre, minha princesinha 💜</p>
            <p>– Assinado: Dilan Freitas, o seu Ursão💜</p>
        `;
    } else {
        gameDiv.innerHTML = `
            <h2>✨ Obrigado por jogar! ✨</h2>
            <h3>Seu Placar Final:</h3>
            <p>Acertos: ${score}</p>
            <p>Erros: ${errors}</p>
        `;
    }
}

function showRetryButtons() {
  rebuildQuestionUI(); // Garante que a UI sempre exista
  const optionsDiv = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  feedback.innerText = "Errou infelizmente :/, mas você pode tentar de novo <3";
  
  optionsDiv.innerHTML = "";
  const tryAgainBtn = document.createElement("button");
  tryAgainBtn.innerText = "Tentar novamente";
  tryAgainBtn.onclick = () => {
    // Se o erro foi na segunda parte, volta para a primeira para reiniciar a música
    if (currentQuestion % 2 !== 0) {
        currentQuestion--;
    }
    showQuestion();
  };

  const backBtn = document.createElement("button");
  backBtn.innerText = "Voltar";
  backBtn.onclick = () => {
      audioPlayer.pause();
      // Se está no segundo trecho, volta para a tela de "Próximo verso"
      if (currentQuestion % 2 !== 0) {
          currentQuestion--;
          handleVerseTransition();
      } else { // Se está no primeiro trecho
          if (currentQuestion > 0) {
              currentQuestion = currentQuestion - 1; // Volta para o índice da tela de história
              showStoryScreen(); 
          }
      }
  };
  optionsDiv.appendChild(tryAgainBtn);
  if (currentQuestion > 0) {
    optionsDiv.appendChild(backBtn);
  }
}
