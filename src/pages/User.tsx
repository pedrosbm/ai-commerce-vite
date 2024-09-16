import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import Header from "@/components/Header"
import { AuthContext } from "@/contextProvider/AuthenticationProvider"
import { Cliente, Item, PagePedidos } from "@/types"
import Cookies from "js-cookie"
import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

const apiUrl = import.meta.env.VITE_API_URL as string

const User = () => {
    const { isLoggedIn, logoff } = useContext(AuthContext)
    const [user, setUser] = useState<Cliente>()
    const [pedidos, setPedidos] = useState<PagePedidos>()
    const [items, setItems] = useState<Item[]>()
    const [page, setPage] = useState<number>(0)

    useEffect(() => {
        fetch(`${apiUrl}/cliente/email/${Cookies.get("email")}`, {
            method: "GET"
        }).then(response => {
            if (response.ok)
                return response.json()
        }).then(json => {
            setUser(json)
            fetchPedidos(json.nome)
        })
    }, [])

    const fetchPedidos = (nome: string) => {
        if (isLoggedIn == true) {
            console.log("Buscando pedidos")
            fetch(`${apiUrl}/pedido/cliente/${nome}?page=${page}`, {
                method: "GET"
            }).then(response => {
                if (response.ok)
                    return response.json()
            }).then(json => {
                setPedidos(json)
            })
        }
    }

    const fetchItems = (pedidoId: number) => {
        if (isLoggedIn == true) {
            console.log("Buscando pedidos")
            fetch(`${apiUrl}/ItemsPedido/pedido/${pedidoId}`, {
                method: "GET"
            }).then(response => {
                if (response.ok)
                    return response.json()
            }).then(json => {
                // console.log(json)
                setItems(json)
            })
        }
    }

    // useEffect(() => {
    //     if (isLoggedIn == true) {
    //         fetch(`${apiUrl}/pedido/cliente/${user?.nome}?page=${page}`, {
    //             method: "GET"
    //         }).then(response => {
    //             if (response.ok)
    //                 return response.json()
    //         }).then(json => {
    //             setPedidos(json)
    //         })
    //     }
    // }, [page])

    if (isLoggedIn == true) {
        return (
            <div>
                <Header />
                <section className="h-screen w-full flex gap-[1rem] items-center justify-center bg-slate-200">
                    <Card>
                        <CardHeader>
                            <CardTitle>{user?.nome}</CardTitle>
                            <CardDescription>{user?.email}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{user?.endereco}</p>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={logoff} variant={"destructive"}>Sair</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Pedidos</CardTitle>
                        </CardHeader>
                        <CardContent className="flex">
                            {pedidos?.content.map(pedido => (
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{pedido.dataPedido.toString()}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>preço total</p>
                                        <CardDescription className="text-green-500">R${pedido.precoTotal}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <Dialog>
                                            <DialogTrigger><Button onClick={() => fetchItems(pedido.pedidoId)}>Ver detalhes</Button></DialogTrigger>
                                            <DialogContent className="">
                                                <DialogHeader>
                                                    <DialogTitle>Produtos</DialogTitle>
                                                    <DialogDescription>Preço total - <p className="text-green-500">R${pedido.precoTotal}</p></DialogDescription>
                                                </DialogHeader>
                                                <DialogFooter className="justify-start">
                                                    {items?.map(item => (
                                                        <Card className="w-[10rem]">
                                                            <CardHeader>
                                                                <img src={item.produto.imagem} alt="" />
                                                            <CardTitle>{item.produto.nome}</CardTitle>
                                                            </CardHeader>
                                                            <CardFooter className="text-green-500">R${item.produto.preco}</CardFooter>
                                                        </Card>
                                                    ))}
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </CardFooter>
                                </Card>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem className="cursor-pointer">
                                        <PaginationPrevious onClick={() => page > 0 && setPage(prev => (prev - 1))} />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink>{page}</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem className="cursor-pointer">
                                        <PaginationNext onClick={() => page < pedidos?.pageable.totalPages && setPage(prev => (prev + 1))} />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </section>
            </div>
        )
    } else {
        return <Navigate to="/inicio"></Navigate>
    }
}

export default User