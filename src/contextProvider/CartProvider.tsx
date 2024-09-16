import { Produto } from "@/types";
import { createContext, MouseEvent, PropsWithChildren, useEffect, useState } from "react";

type context = {
    cartCount: number,
    produtos: string[],
    addItem: (e: MouseEvent<HTMLButtonElement>) => void,
    removeItem: (e: MouseEvent<HTMLButtonElement>) => void
}

const CartContext = createContext<context>({} as context)

const CartProvider = ({ children }: PropsWithChildren) => {
    const [produtos, setProdutos] = useState<string[]>([] as string[])
    const [cartCount, setCartCount] = useState<number>(0)

    useEffect(() => {
        let produtos = localStorage.getItem("Produtos")

        if (produtos != null) {
            let array = produtos.split(",")
            setProdutos(array)
            setCartCount(array.length)
        } else {
            setCartCount(0)
        }
    }, [])
    
    const addItem = (e: MouseEvent<HTMLButtonElement>) => {
        const produtoId = e.currentTarget.value
        
        let produtos = localStorage.getItem("Produtos")
        
        if (produtos != null) {
            let array = produtos.split(",")
            array.push(produtoId.toString())
            setCartCount(array.length)
            setProdutos(array)
            localStorage.setItem("Produtos", array.join())
            
        } else {
            localStorage.setItem("Produtos", produtoId.toString())
        }
    }

    const removeItem = (e: MouseEvent<HTMLButtonElement>) => {
        const produtoId = e.currentTarget.value
        
        let produtos = localStorage.getItem("Produtos")
        
        if (produtos != null) {
            let array = produtos.split(",")
            array.splice(array.indexOf(produtoId), 1);
            setProdutos(array)
            setCartCount(array.length)

            localStorage.setItem("Produtos", array.join())
        }
    }

    return (
        <CartContext.Provider value={{ cartCount, produtos, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }