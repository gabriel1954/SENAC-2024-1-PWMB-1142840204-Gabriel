document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
    
    // Recupera os clientes do localStorage
    const clientes = JSON.parse(localStorage.getItem('Clientes'));
    
    // Verifica se o cliente existe e a senha está correta
    const cliente = clientes.find(c => c.emailCliente === email && c.senhaCliente === password);

    if (cliente) {
        // Cria a estrutura de dados de login
        const loginCliente = {
            emailCliente: cliente.emailCliente,
            nomeCliente: cliente.nomeCliente,
            urlAvatarCliente: cliente.urlAvatarCliente,
            nomeArquivoAvatarCliente: cliente.nomeArquivoAvatarCliente
        };
        
        // Armazena no localStorage com o nome "LoginCliente"
        localStorage.setItem('LoginCliente', JSON.stringify(loginCliente));
        
        // Redireciona para a página da vitrine da loja (vitrine.html)
        window.location.href = 'vitrine.html';
    } else {
        // Alerta se o cliente não existir
        alert('Atenção: você ainda não possui cadastro.');
        window.location.href = 'vitrine2.html';
    }
});