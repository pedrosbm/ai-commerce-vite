import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs"
import { CiCirclePlus } from "react-icons/ci"
import { MdOutlinePayment } from "react-icons/md"

import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import "./Product.scss"

import { PageProdutos, Produto } from "@/types"
import { CartContext } from "@/contextProvider/CartProvider"

const apiUrl = import.meta.env.VITE_API_URL as string

const Product = () => {
  const [product, setProduct] = useState<Produto>()
  const [products, setProducts] = useState<PageProdutos>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [size, setSize] = useState<number>(5)

  let { id } = useParams();

  const { addItem } = useContext(CartContext)

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    fetch(`${apiUrl}/produto/${id}`, {
      method: 'GET',
    }).then(response => {
      return response.ok && response.json()
    }).then(json => {
      setProduct(json)
      setIsLoading(false)
    })
  }, [id])

  useEffect(() => {
    setIsLoading(true)
    fetch(`${apiUrl}/produto?size=${size}&categoria=${product?.categoria.nome}`, {
      method: 'GET',
    }).then(response => {
      return response.ok && response.json()
    }).then(json => {
      setProducts(json)
      setIsLoading(false)
    })
  }, [product])

  const fetchNewProduct = (newId: number) => {
    setIsLoading(true)
    fetch(`${apiUrl}/produto/${newId}`, {
      method: 'GET',
    }).then(response => {
      return response.ok && response.json()
    }).then(json => {
      setProduct(json)
      setIsLoading(false)
    })
  }

  return (
    <div>
      <Header />
      <section className="produto">
        <div className="details">
          {!isLoading ?
            <div className="flex gap-[1rem] justify-center">
              <Card className="w-[20rem]">
                <CardHeader className="flex items-center justify-center">
                  <img className="w-[15rem] h-[15rem] object-contain" src={product?.imagem} alt="" />
                </CardHeader>
                <CardContent>
                  <CardTitle>{product?.nome}</CardTitle>
                  <p>{product?.categoria.nome}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-green-500">R${product?.preco}</p>
                </CardFooter>
              </Card>

              <div className="flex flex-col justify-between w-[23rem] gap-[1rem]">
                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>Descrição</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{product?.descricao}</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Opções</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-between">
                    <Button onClick={addItem} value={product?.produtoId}>Adicionar ao carriho</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            :
            <Skeleton className="w-[20rem] h-[20rem]"></Skeleton>}
        </div>
        <Carousel className="row">
          <h2>Baseado em sua escolha</h2>
          <p>{product?.categoria.nome}</p>
          <CarouselContent>
            {products?.content.map(product => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="cursor-pointer" onClick={() => { fetchNewProduct(product.produtoId) }}>
                  <CardHeader className="flex items-center justify-center">
                    <img className="w-[8rem] h-[8rem] object-contain" src={product.imagem} />
                  </CardHeader>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CardContent className="text-start">
                          <h4 className="name">{product.nome}</h4>

                          <p className="flex gap-1"><BsInfoCircleFill className="text-[1.2rem]" />{product.descricao.length > 30 ? product.descricao.slice(0, 30).concat("...") : product.descricao} </p>
                        </CardContent>
                      </TooltipTrigger>
                      <TooltipContent className="w-[12rem]">
                        <p>{product.descricao}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <CardDescription className="p-4 flex justify-between">
                    <span className="text-green-500 text-lg">R${product.preco}</span>
                    <Button onClick={addItem} value={product.produtoId}>Adicionar ao carriho</Button>
                  </CardDescription>
                </Card>
              </CarouselItem>
            ))}
            <CarouselItem className="md:basis-1/2 lg:basis-1/6" >
              {isLoading == false ?
                <Card className="w-full h-full flex flex-col items-center justify-center cursor-pointer border-dashed" onClick={() => { setSize(prevstate => (prevstate + 2)) }}>
                  <CardHeader>
                    <CiCirclePlus className="text-[10rem]" />
                  </CardHeader>
                  <CardContent>
                    <p>ver mais</p>
                  </CardContent>
                </Card>
                : <Skeleton className="w-full h-full" />}
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  )
}

export default Product