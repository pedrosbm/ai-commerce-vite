import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BsInfoCircleFill } from "react-icons/bs";

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
            "id": 2,
            "nome": "Tênis mizuno",
            "descricao": "Tênis confortável e resistente, ideal para atividades físicas.",
            "preco": 149.90,
            "categoria": "Calçados",
            "estoque": 50,
            "imagem": "https://imgs.search.brave.com/kdh84OrHPVM9JeE0YXM6Vl7WkfwfH33Ox8kgudBZ2bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcHB1Yi5pby9j/ZG4tY2dpL2ltYWdl/L3c9NjAwLGg9NjAw/LHE9ODAsZj1hdXRv/L3NwYWNldGVubmlz/L21lZGlhL3VwbG9h/ZHMvcHJvZHV0b3Mv/Zm90by9zamJqb3Nw/eC9hMS5qcGc"
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
            "id": 2,
            "nome": "Tênis mizuno",
            "descricao": "Tênis confortável e resistente, ideal para atividades físicas.",
            "preco": 149.90,
            "categoria": "Calçados",
            "estoque": 50,
            "imagem": "https://imgs.search.brave.com/kdh84OrHPVM9JeE0YXM6Vl7WkfwfH33Ox8kgudBZ2bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcHB1Yi5pby9j/ZG4tY2dpL2ltYWdl/L3c9NjAwLGg9NjAw/LHE9ODAsZj1hdXRv/L3NwYWNldGVubmlz/L21lZGlhL3VwbG9h/ZHMvcHJvZHV0b3Mv/Zm90by9zamJqb3Nw/eC9hMS5qcGc"
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
            "id": 2,
            "nome": "Tênis mizuno",
            "descricao": "Tênis confortável e resistente, ideal para atividades físicas.",
            "preco": 149.90,
            "categoria": "Calçados",
            "estoque": 50,
            "imagem": "https://imgs.search.brave.com/kdh84OrHPVM9JeE0YXM6Vl7WkfwfH33Ox8kgudBZ2bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcHB1Yi5pby9j/ZG4tY2dpL2ltYWdl/L3c9NjAwLGg9NjAw/LHE9ODAsZj1hdXRv/L3NwYWNldGVubmlz/L21lZGlhL3VwbG9h/ZHMvcHJvZHV0b3Mv/Zm90by9zamJqb3Nw/eC9hMS5qcGc"
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

                        <Carousel className="row">
                            <h2>Para você :) </h2>
                            <CarouselContent>
                                {products.map(product => (
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                        <Card onClick={() => { console.log("Selecionado") }}>
                                            <CardHeader>
                                                <img src={product.imagem} alt="" />
                                            </CardHeader>

                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <CardContent className="text-start">
                                                            <h4 className="name">{product.nome}</h4>
                                                            <p className="flex gap-1">{product.descricao.slice(0, 30).concat("...")} <BsInfoCircleFill /></p>
                                                        </CardContent>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="w-[15rem]">
                                                        <p>{product.descricao}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>

                                            <CardDescription className="p-4 flex justify-between">
                                                <span className="text-green-500 text-lg">R${product.preco}</span>
                                                <Button>Comprar</Button>
                                            </CardDescription>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home