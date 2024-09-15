type Produto = {
    produtoId: number,
    nome: string,
    imagem: string,
    descricao: string,
    preco: number,
    categoria: Categoria
}

type Categoria = {
    categoriaId: number,
    nome: string
}

type Cliente = {
    clienteId: number,
    nome: string,
    email: string,
    endereco: string,
    senha: string
}

type Pedido = {
    pedidoId: number,
    dataPedido: Date,
    precoTotal:number,
    cliente: Cliente
}

type ItensPedido = {
    itemsId: number,
    quantidade:number,
    preco: number,
    pedido: Pedido,
    produto: Produto
}

type Page = {
    pageable: {
        pageNumber: number,
        pageSize: number,
        sort: {
            empty: boolean,
            sorted: boolean,
            unsorted: boolean
        },
        offset: number,
        paged: boolean,
        unpaged: boolean
    },
    totalElements: number,
    totalPages: number,
    last: boolean,
    size: number,
    number: number,
    sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
    },
    numberOfElements: number,
    first: boolean,
    empty: boolean
}

type PageProdutos = {
    content: Produto[],
    pageable: Page
}  

export type { Produto, Categoria, Cliente, Pedido, ItensPedido, PageProdutos }