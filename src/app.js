const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const loveMessage = document.getElementById("love-message");

noBtn.addEventListener("click", function() {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
  noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
});

yesBtn.addEventListener("click", function() {
  noBtn.classList.add("hidden");
  loveMessage.classList.remove("hidden");
  setTimeout(() => {
    window.location.href = "https://api.whatsapp.com/send?l=pt-BR&phone=5575998641084&text=eu%20te%20amo%2C%20cøpo%2C%20voc%C3%AA%20%C3%A9%20o%20meu%20tudo.%20Aceito%20me%20casar%20com%20voc%C3%AA%F0%9F%92%8D%F0%9F%92%9E";
  }, 3500);
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.heart-container');

  // Função para criar um coração
  function createHeart() {
      const heart = document.createElement('img');
      heart.src = 'img/core.png';
      heart.classList.add('heart');
      container.appendChild(heart);

      // Define o tamanho aleatório do coração
      const size = Math.random() * 30 + 20; // Tamanho entre 20 e 50 pixels
      heart.style.width = size + 'px';
      heart.style.height = size + 'px';

      // Define a posição inicial aleatória dos corações
      const initialX = Math.random() * window.innerWidth;
      const initialY = Math.random() * window.innerHeight;
      heart.style.left = initialX + 'px';
      heart.style.top = initialY + 'px';

      // Animação de movimento dos corações
      const speed = Math.random() * 3 + 1; // Velocidade aleatória

      function moveHeart() {
          let currentY = parseFloat(heart.style.top);
          let newY = currentY + speed;
          heart.style.top = newY + 'px';

          // Reposiciona o coração quando ele sair da tela
          if (newY > window.innerHeight) {
              heart.style.top = -heart.offsetHeight + 'px';
              heart.style.left = Math.random() * window.innerWidth + 'px';
          }

          // Continua a animação
          requestAnimationFrame(moveHeart);
      }

      // Inicia a animação
      moveHeart();
  }

  // Criação contínua de corações
  setInterval(createHeart, 500); // Cria um novo coração a cada 0.5 segundos
});

document.addEventListener('DOMContentLoaded', function () {
  const loveAudio = document.getElementById('love-audio');
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const volumeSlider = document.getElementById('volume-slider');

  // Define a ação do botão Play
  playBtn.addEventListener('click', function () {
      loveAudio.play();
  });

  // Define a ação do botão Pause
  pauseBtn.addEventListener('click', function () {
      loveAudio.pause();
  });

  // Define a ação do controle de volume
  volumeSlider.addEventListener('input', function () {
      loveAudio.volume = volumeSlider.value;
  });
});

