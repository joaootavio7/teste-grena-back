export interface ProdutoDTO {
    idProduto?:  number;
    codProduto?: string;
    nome:        string;
    descricao?:  string;
    preco:       number;
    estoque:     number;
    imagem?:     string | null;
    idCategoria: number;
}
