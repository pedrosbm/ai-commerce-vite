import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BsInfoCircleFill } from "react-icons/bs";
import { PageProdutos } from "@/types";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

import Header from "../components/Header"

import './Home.scss'
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";

type productOptions = {
  size: number
}

const apiUrl = import.meta.env.VITE_API_URL as string

const Home = () => {
  const [products, setProducts] = useState<PageProdutos>()
  const [options, setOptions] = useState<productOptions>({ size: 5 })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${apiUrl}/produto?size=${options.size}`, {
      method: 'GET',
    }).then(response => {
      return response.ok && response.json()
    }).then(json => {
      setProducts(json)
      setIsLoading(false)
    })
  }, [options])

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
                {products?.content.map(product => (
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Card className="cursor-pointer" onClick={() => { navigate(`/produto/${product.produtoId}`) }}>
                      <CardHeader className="flex items-center justify-center">
                        <img className="w-[15rem] h-[15rem] object-contain" src={product.imagem} />
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
                        <Button value={product.produtoId}>Adicionar ao carriho</Button>
                      </CardDescription>
                    </Card>
                  </CarouselItem>
                ))}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" >
                  {isLoading == false ?
                    <Card className="w-full h-full flex flex-col items-center justify-center cursor-pointer border-dashed" onClick={() => { setOptions(prevstate => ({ size: prevstate.size + 2 })) }}>
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home