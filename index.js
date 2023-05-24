class Produto{
    constructor(nome,datacadastro,descricao,preco){
    this.nome= nome;
    this.datacadastro= datacadastro;
    this.descricao= descricao;
    this.preco= preco;

}

mostrar_produto(){
    return this.nome + " " + this.datacadastro + " " + this.descricao+ " " + this.preco 
}
}
  class ProdutoDestaque extends Produto{
    constructor(nome,cadastro, descricao ,preco , imagem){
    super(nome,cadastro, descricao ,preco)
    this.imagem = imagem;
    }
    mostraprodutodestaque(){
        return `
        <div class="nero">${this.nome}</div>
        <div class= "nero">${this.preco}</div>
        <div class= "nero">${this.descricao}</div>
        <div class= "nero">${this.datacadastro}</div>
        
    `;
    //return this.nome + this.cadastro + this.descricao + this.preco + this.imagem;
    }
}

const produto = new Produto("Loubotin So Kate", "17/03/1991", "O icônico escarpin So Kate com elegância atemporal combina de forma brilhante discrição e sofisticação.", "3850") 
console.log(produto.mostrar_produto());

    let produtodestaque = new ProdutoDestaque("Loubotin So Kate","17/03/1991","O icônico escarpin So Kate com elegância atemporal combina de forma brilhante discrição e sofisticação.",8.000,"louboutin.jpg");
    console.log(produtodestaque.mostraprodutodestaque());
    const nometf = document.getElementById("produto-destaque");
    nometf.insertAdjacentHTML('afterbegin', produtodestaque.mostraprodutodestaque());