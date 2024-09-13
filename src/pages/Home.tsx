import Header from "../components/Header"

import './Home.scss'

const Home = () => {
    const products = [
        {
            "id": 1,
            "nome": "Camiseta sepultura",
            "descricao": "Camiseta de algodão 100%, disponível em várias cores.",
            "preco": 29.90,
            "categoria": "Roupas",
            "estoque": 100,
            "imagem": "https://imgs.search.brave.com/OTQAXhhnFW788qa57hcMtH655F6MLxAMeXxBVYqJWRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZS1w/aWMtYTEuYWxpZXhw/cmVzcy1tZWRpYS5j/b20va2YvUzQ2NTkz/MTA3NGZlYzQ1YzFi/NGJiMTc5Mjk3ODRi/NjRiZi9GYXNoaW9u/LVNlcHVsdHVyYS1U/cmliYWxlLVByaW50/LVQtU2hpcnQtTWVu/LXMtQ290dG9uLU8t/TmVjay1TaG9ydC1T/bGVldmVkLVQtc2hp/cnRzLVN1bW1lci5q/cGdfMzUweDM1MHh6/LmpwZ18ud2VicA"
        },
        {
            "id": 2,
            "nome": "Tênis mizuno",
            "descricao": "Tênis confortável e resistente, ideal para atividades físicas.",
            "preco": 149.90,
            "categoria": "Calçados",
            "estoque": 50,
            "imagem": "https://imgs.search.brave.com/kdh84OrHPVM9JeE0YXM6Vl7WkfwfH33Ox8kgudBZ2bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcHB1Yi5pby9j/ZG4tY2dpL2ltYWdl/L3c9NjAwLGg9NjAw/LHE9ODAsZj1hdXRv/L3NwYWNldGVubmlz/L21lZGlhL3VwbG9h/ZHMvcHJvZHV0b3Mv/Zm90by9zamJqb3Nw/eC9hMS5qcGc"
        },
        {
            "id": 3,
            "nome": "Relógio Speedo",
            "descricao": "Relógio com monitoramento de saúde e notificações de smartphone.",
            "preco": 299.90,
            "categoria": "Eletrônicos",
            "estoque": 30,
            "imagem": "https://imgs.search.brave.com/08QRzEoXPjZ32EDXDY-3VZSWVpcHZlHuyhhYU4vPWyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmV0c2hvZXMu/Y29tLmJyL3Byb2R1/dG9zL3JlbG9naW8t/c3BlZWRvLXByZXRv/LW1hc2N1bGluby0x/NTA4OWcwZXZudjMv/MDYvSTQ3LTEyODAt/MDA2L0k0Ny0xMjgw/LTAwNl96b29tMS5q/cGc_dHM9MTcxODk4/Njc4NyZpbXM9MzI2/eA"
        }
    ]


    return (
        <div>
            <Header />
            <section className="home">
                <div className="products">
                    <h1>Produtos</h1>
                    <div className="productList">
                        <hr />
                        <div className="row">
                            <h2>Para você :) </h2>
                            <div className="itens">
                                {products.map(product => (
                                    <div onClick={() => { console.log("A") }} className="product" key={product.id}>
                                        <img src={product.imagem} alt="" />
                                        <div className="data">
                                            <h4 className="name">{product.nome}</h4>
                                            <span className="price">R${product.preco}</span>
                                        </div>
                                        <p className="description">{product.descricao.slice(0, 50).concat("...")}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="row">
                            <h2>Eletrônicos :) </h2>
                            <div className="itens">
                                {products.map(product => (
                                    <div onClick={() => { console.log("A") }} className="product" key={product.id}>
                                        <img src={product.imagem} alt="" />
                                        <div className="data">
                                            <h4 className="name">{product.nome}</h4>
                                            <span className="price">R${product.preco}</span>
                                        </div>
                                        <p className="description">{product.descricao.slice(0, 50).concat("...")}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home