
document.addEventListener("DOMContentLoaded", function () {
  // Formulário de Contato
  const formContato = document.querySelector("form[onsubmit='return validarContato()']");
  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
      const erro = document.getElementById('mensagem-erro');

      if (!nome || !email || !mensagem) {
        erro.textContent = "Por favor, preencha todos os campos.";
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        erro.textContent = "Digite um e-mail válido.";
        return;
      }

      erro.textContent = "";
      alert("Mensagem enviada com sucesso!");
      formContato.reset();
    });
  }

  // Formulário de Inscrição
  const formInscricao = document.querySelector("form[onsubmit='return validarInscricao()']");
  if (formInscricao) {
    formInscricao.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById('inscricaoEmail').value.trim();
      const msg = document.getElementById('mensagem-inscricao');

      if (!email.includes('@') || !email.includes('.')) {
        msg.style.color = "red";
        msg.textContent = "Digite um e-mail válido.";
        return;
      }

      msg.style.color = "green";
      msg.textContent = "Inscrição realizada com sucesso!";
      formInscricao.reset();
    });
  }
});
