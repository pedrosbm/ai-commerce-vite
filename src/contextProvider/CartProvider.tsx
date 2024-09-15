import { Produto } from "@/types";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type context = {
    cartCount: number,
    produtos: string[],
    addItem: () => void,
    removeItem: () => void 
}

const CartContext = createContext<context>({} as context)

const CartProvider = ({ children } : PropsWithChildren) => {
    const [produtos, setProdutos] = useState<string[]>([] as string[])
    const [cartCount, setCartCount] = useState<number>(0)

    useEffect(() => {
        let produtos = localStorage.getItem("Produtos")

        if (produtos != null){
            let array = produtos.split(",")
            setProdutos(array)
            setCartCount(array.length)
        }
    }, [])

    const addItem = () => {

    }

    const removeItem = () => {
        
    }

    return(
        <CartContext.Provider value={{ cartCount, produtos, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}