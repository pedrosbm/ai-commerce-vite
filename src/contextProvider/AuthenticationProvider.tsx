import { createContext, PropsWithChildren, useEffect, useState } from "react";
import Cookies from 'js-cookie';

type context = {
    isLoggedIn: boolean,
    authenticate: (token: string, email: string) => void,
    logoff: () => void
}

const AuthContext = createContext<context>({} as context)

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLoggedIn, setIsloggedIn] = useState<boolean>(false)
    
    useEffect(() => {
        if (Cookies.get("token")) {
            setIsloggedIn(true)
        }
    }, [])
    
    const authenticate = (token: string, email: string) => {
        Cookies.set("token", token, {
            secure: true,
            expires: 1,
        })
        Cookies.set("email", email, {
            secure: true,
            expires: 1,
        })
        setIsloggedIn(true)
    }

    const logoff = () => {
        Cookies.remove("token")
        Cookies.remove("email")
        setIsloggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, authenticate, logoff }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}