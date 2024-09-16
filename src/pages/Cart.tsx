import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CartContext } from "@/contextProvider/CartProvider"
import { PageProdutos } from "@/types"
import { useContext, useEffect, useState } from "react"
import { BsInfoCircleFill } from "react-icons/bs"

const apiUrl = import.meta.env.VITE_API_URL as string

const Cart = () => {
    const { produtos, removeItem } = useContext(CartContext)

    const [items, setItems] = useState<PageProdutos>()
    const [precoTotal, setPrecoTotal] = useState<number>()

    const fetchProdutos = () => {
        fetch(`${apiUrl}/produto/many?lista=${produtos}`, {
            method: 'GET'
        }).then(response => {
            if (response.ok)
                return response.json()
        }).then(json => {
            setItems(json)
        })
    }

    useEffect(() => {
        fetchProdutos()
        let preco = 0
        items?.content.map(item => {
            preco += item.preco
        })
        setPrecoTotal(preco)
    }, [produtos])

    return (
        <div>
            <Header />
            <div className="w-full h-screen items-center justify-center flex gap-[1rem]">
                <Card>
                    <CardHeader>
                        <CardTitle>Itens do carrinho</CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-[1rem]">
                        {items?.content.map(item => (
                            <Card key={item.produtoId} className="cursor-pointer" >
                                <CardHeader className="flex items-center justify-center">
                                    <img className="w-[10rem] h-[10rem] object-contain" src={item.imagem} />
                                </CardHeader>

                                <CardContent className="text-start">
                                    <h4 className="name">{item.nome}</h4>
                                    <p>{item.descricao}</p>
                                </CardContent>

                                <CardDescription className="p-4 flex justify-between">
                                    <span className="text-green-500 text-lg">R${item.preco}</span>
                                    <Button onClick={removeItem} value={item.produtoId} variant="destructive">Remover</Button>
                                </CardDescription>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Dados do pedido</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>Valor total:</CardDescription>
                        <p className="text-green-500">R${precoTotal}</p>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-[1rem]">
                        <Button variant="default">Finalizar compra</Button>
                        {/* <Button  variant="secondary">Procurar mais produtos</Button> */}
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Cart