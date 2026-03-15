const imagem = document.getElementById('avatarImg');
const nome = document.getElementById('nomeAvatar');
const btnGerar = document.getElementById('btnGerar');
const carregando = document.getElementById('carregando');
const erro = document.getElementById('erro');

const nomes = ['Felix', 'Aneka', 'Milo', 'Luna', 'Sophie', 'Max', 'Lia', 'Leo', 'Nina', 'Kai'];

function mostrarCarregando(mostrar) {
    if (mostrar) {
        carregando.style.display = 'block';
        btnGerar.disabled = true;
    } else {
        carregando.style.display = 'none';
        btnGerar.disabled = false;
    }
}

function mostrarErro() {
    erro.style.display = 'block';
    setTimeout(function() {
        erro.style.display = 'none';
    }, 2000);
}

function nomeAleatorio() {
    let numero = Math.floor(Math.random() * nomes.length);
    return nomes[numero];
}

function gerarAvatar() {
    mostrarCarregando(true);
    
    let nomeEscolhido = nomeAleatorio();
    let link = 'https://api.dicebear.com/9.x/adventurer/svg?seed=' + nomeEscolhido + '&radius=50';
    
    imagem.src = link;
    nome.textContent = nomeEscolhido;
    
    setTimeout(function() {
        mostrarCarregando(false);
    }, 500);
}

btnGerar.addEventListener('click', function() {
    try {
        gerarAvatar();
    } catch (error) {
        mostrarErro();
        mostrarCarregando(false);
    }
});

gerarAvatar();

console.log('App funcionando! 🚀');