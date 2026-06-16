const vagasDisponiveis = [
    {
        bairro: 'Centro',
        valorHora: 8,
        descricao: 'Vaga coberta, próxima ao metrô. Ideal para quem trabalha na região.'
    },
    {
        bairro: 'Centro',
        valorHora: 10,
        descricao: 'Garagem privativa com segurança 24h. Acesso facilitado.'
    },
    {
        bairro: 'Jardins',
        valorHora: 12,
        descricao: 'Vaga ampla para SUV. Condomínio residencial tranquilo.'
    },
    {
        bairro: 'Jardins',
        valorHora: 15,
        descricao: 'Vaga coberta com tomada para carro elétrico. Ótima localização.'
    },
    {
        bairro: 'Vila Madalena',
        valorHora: 7,
        descricao: 'Vaga de fácil acesso. Perto de bares e restaurantes.'
    },
    {
        bairro: 'Pinheiros',
        valorHora: 9,
        descricao: 'Garagem em edifício comercial. Horário flexível.'
    },
    {
        bairro: 'Pinheiros',
        valorHora: 11,
        descricao: 'Vaga coberta próxima à estação de trem. Muito segura.'
    },
    {
        bairro: 'Moema',
        valorHora: 10,
        descricao: 'Vaga em condomínio fechado. Perfeita para longo período.'
    },
    {
        bairro: 'Itaim Bibi',
        valorHora: 14,
        descricao: 'Vaga corporativa. Ideal para quem trabalha na Faria Lima.'
    },
    {
        bairro: 'Tatuapé',
        valorHora: 6,
        descricao: 'Vaga residencial tranquila. Perto do shopping.'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    inicializarBusca();
    inicializarFormulario();
});

function inicializarBusca() {
    var btnBuscar = document.getElementById('btn-buscar');
    var inputBairro = document.getElementById('busca-bairro');
    
    btnBuscar.addEventListener('click', function() {
        realizarBusca(inputBairro.value);
    });
    
    inputBairro.addEventListener('keypress', function(evento) {
        if (evento.key === 'Enter') {
            realizarBusca(inputBairro.value);
        }
    });
}

function realizarBusca(bairroDigitado) {
    var containerVagas = document.getElementById('container-vagas');
    containerVagas.innerHTML = '';
    
    if (bairroDigitado.trim() === '') {
        containerVagas.innerHTML = '<p class="vagas-instrucao">⚠️ Por favor, digite o nome de um bairro para buscar.</p>';
        return;
    }
    
    var vagasFiltradas = vagasDisponiveis.filter(function(vaga) {
        return vaga.bairro.toLowerCase().includes(bairroDigitado.toLowerCase());
    });
    
    if (vagasFiltradas.length === 0) {
        containerVagas.innerHTML = '<p class="mensagem-nenhuma-vaga">😕 Nenhuma vaga encontrada no bairro "' + bairroDigitado + '". Tente buscar por outro bairro!</p>';
        return;
    }
    
    vagasFiltradas.forEach(function(vaga) {
        var card = criarCardVaga(vaga);
        containerVagas.appendChild(card);
    });
    
    document.getElementById('vagas').scrollIntoView({ behavior: 'smooth' });
}

function criarCardVaga(vaga) {
    var card = document.createElement('div');
    card.className = 'card-vaga';
    
    card.innerHTML = `
        <div class="card-vaga-header">
            <div class="card-vaga-bairro">📍 ${vaga.bairro}</div>
        </div>
        <div class="card-vaga-body">
            <p class="card-vaga-descricao">${vaga.descricao}</p>
            <p class="card-vaga-preco">R$ ${vaga.valorHora},00 <span>/hora</span></p>
        </div>
    `;
    
    return card;
}

function inicializarFormulario() {
    var formulario = document.getElementById('form-simulacao');
    var areaMensagem = document.getElementById('mensagem-sucesso');
    
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        var nome = document.getElementById('nome').value;
        var bairro = document.getElementById('bairro').value;
        
        var mensagem = 'Olá, ' + nome + '! 🎉 Já temos motoristas interessados em vagas no bairro ' + bairro + '! Em breve entraremos em contato com mais informações.';
        
        areaMensagem.textContent = mensagem;
        areaMensagem.style.display = 'block';
        
        formulario.reset();
        
        areaMensagem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        setTimeout(function() {
            areaMensagem.style.display = 'none';
        }, 10000);
    });
}
