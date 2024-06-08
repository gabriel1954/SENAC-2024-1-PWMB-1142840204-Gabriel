const clientes = [
    {
      emailCliente: "gabriel@example.com",
      senhaCliente: "abc",
      nomeCliente: "Gabriel",
      urlAvatarCliente: "assets/avatar.jpg",
      nomeArquivoAvatarCliente: "avatar.jpg",
    },
  ];
  
  const produtos = [
    {
      idProduto: 1,
      nomeProduto: "Smartphone Motorola Moto G24",
      descricaoProduto: "Rosa 128GB, 4GB + 4GB RAM Boost, Tela de 6.6, Câmera Dupla, Dolby Atmos, Android 14 e Processador Octa-core",
      valorUnitarioProduto: 744,
      qtdEstoqueProduto:10,
      urlImgProduto: "assets/cel.png",
      nomeArquivoImgProduto: "cel.png",
    },
    {
      idProduto: 2,
      nomeProduto: "Fritadeira Elétrica",
      descricaoProduto: "Air Fryer Mondial AFN40BI Family Inox 4L - Preta/Inox",
      valorUnitarioProduto: 284.00,
      qtdEstoqueProduto: 50,
      urlImgProduto: "assets/air.png",
      nomeArquivoImgProduto: "air.png",
    },
    {
      idProduto: 3,
      nomeProduto: "Smart TV 55",
      descricaoProduto: "Samsung 55CU7700, Processador Crystal 4K, Samsung Gaming Hub, Visual Livre de Cabos, Tela sem limites, Alexa built in",
      valorUnitarioProduto: 2600,
      qtdEstoqueProduto: 5,
      urlImgProduto: "assets/tv.png",
      nomeArquivoImgProduto: "tv.png",
    },
  ];
  
  localStorage.setItem("Clientes", JSON.stringify(clientes));
  localStorage.setItem("Produtos", JSON.stringify(produtos));