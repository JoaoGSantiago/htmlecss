// Animação: Galeria surgindo da esquerda
const cards = document.querySelectorAll('.gallery-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// Validação de formulário de contato
function validarContato() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  const erro = document.getElementById('mensagem-erro');

  if (!nome || !email || !mensagem) {
    erro.textContent = "Por favor, preencha todos os campos.";
    return false;
  }

  if (!email.includes('@') || !email.includes('.')) {
    erro.textContent = "Digite um e-mail válido.";
    return false;
  }

  erro.textContent = "";
  alert("Mensagem enviada com sucesso!");
  return true;
}

// Validação inscrição
function validarInscricao() {
  const email = document.getElementById('inscricaoEmail').value;
  const msg = document.getElementById('mensagem-inscricao');

  if (!email.includes('@') || !email.includes('.')) {
    msg.style.color = "red";
    msg.textContent = "Digite um e-mail válido.";
    return false;
  }

  msg.style.color = "green";
  msg.textContent = "Inscrição realizada com sucesso!";
  return true;
}

// Simulador de rotas
function navigateTo(pagina) {
  const main = document.getElementById('main-content');
  const rota = document.getElementById('rota-conteudo');

  const paginas = {
    cecicunha: "O Parque Ceci Cunha é ideal para caminhadas e eventos culturais.",
    perucaba: "A Lagoa da Perucaba encanta com sua beleza e tranquilidade.",
    centro: "O centro de Arapiraca é um polo comercial e histórico.",
    igreja: "A Igreja Matriz é um marco religioso e arquitetônico da cidade.",
    shopping: "O Shopping Arapiraca é um centro de compras e lazer.",
    cultural: "Espaços culturais recebem eventos e promovem arte local."
  };

  rota.innerHTML = `
    <section>
      <h2>/${pagina}</h2>
      <p>${paginas[pagina]}</p>
      <button onclick="voltar()">Voltar</button>
    </section>
  `;

  main.style.display = 'none';
  rota.style.display = 'block';
}

function voltar() {
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('rota-conteudo').style.display = 'none';
}
