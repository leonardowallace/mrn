let card = document.getElementById("card");

// Exibir o vídeo caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
  // URL do vídeo que você deseja redirecionar
  let videoUrl = "https://www.youtube.com/watch?v=jwlB7anSd64"; // Exemplo: link de um vídeo no YouTube
  
  // Abrir o vídeo em uma nova aba
  window.open(videoUrl, "_blank");

  // Alterar o fundo para algo mais apropriado, como uma cor de fundo neutra (opcional)
  card.style.backgroundImage = "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";

  // Ocultar a pergunta e exibir o novo conteúdo (se necessário)
  let question = document.getElementById("question");
  question.style.display = "none";

  // Se quiser, você pode exibir uma animação ou algo antes de redirecionar, por exemplo:
  setTimeout(function() {
    card.style.opacity = 0;  // Deixar a página desaparecer antes de redirecionar
  }, 500);
});

// Movimento aleatório do botão 'não' em todas as telas
document.querySelector("#no").addEventListener("mouseover", function () {
  let width = window.innerWidth - 150; // Ajustando para não sair da tela
  let height = window.innerHeight - 150;

  this.style.position = "absolute";
  this.style.top = Math.random() * height + "px";
  this.style.left = Math.random() * width + "px";

  // Efeito de crescimento do botão
  this.style.transform = "scale(1.2)";
});

document.querySelector("#no").addEventListener("mouseout", function () {
  // Voltar ao tamanho original do botão quando o mouse sai
  this.style.transform = "scale(1)";
});
