import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AuthContext } from "@/contextProvider/AuthenticationProvider"
import { Cliente } from "@/types"
import { ChangeEvent, useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

type credentials = {
    email: string,
    password: string
}

const urlApi = import.meta.env.VITE_API_URL as string

const Inicio = () => {
    const [user, setUser] = useState<credentials>({} as credentials)
    const [cadastro, setCadastro] = useState<Cliente>({} as Cliente)
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const { authenticate, isLoggedIn } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleCredentialChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleCadastroChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCadastro({ ...cadastro, [name]: value })
    }

    const cadastrar = () => {
        if (confirmarSenha == cadastro.senha) {
            fetch(`${urlApi}/cliente`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cadastro)
            }).then(response => {
                if (response.ok)
                    return response.json()
            }).then(json => {
                authenticate(json.token, json.email)
            })
        } else {
            alert("Senhas não correspondem")
        }
    }

    const logar = () => {
        fetch(`${urlApi}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(response => {
            return response.json()
        }).then(json => {
            authenticate(json.token, json.email)
        })
    }

    if(isLoggedIn == false){
        return (
            <div>
                <Header />
                <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-200">
                    <Tabs defaultValue="Login" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="Login">Login</TabsTrigger>
                            <TabsTrigger value="Cadastro">Cadastro</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Login">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Login</CardTitle>
                                    <CardDescription>Faça login no ai commerce</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input name="email" value={user.email} onChange={handleCredentialChange} id="email" type="email" placeholder="email@dominio.com.br" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="senha">Senha</Label>
                                        <Input name="password" value={user.password} onChange={handleCredentialChange} id="senha" type="password" placeholder="senha123" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button onClick={logar}>Logar</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
    
                        <TabsContent value="Cadastro">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Cadastro</CardTitle>
                                    <CardDescription>
                                        Realize seu cadastro.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="nomeCadastro">Nome</Label>
                                        <Input name="nome" value={cadastro.nome} onChange={handleCadastroChange} id="nomeCadastro" type="text" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="nomeCadastro">Endereco</Label>
                                        <Input name="endereco" value={cadastro.endereco} onChange={handleCadastroChange} id="enderecoCadastro" type="text" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="emailCadastro">Email</Label>
                                        <Input name="email" value={cadastro.email} onChange={handleCadastroChange} id="emailCadastro" type="email" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="senhaCadastro">Senha</Label>
                                        <Input name="senha" value={cadastro.senha} onChange={handleCadastroChange} id="senhaCadastro" type="password" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
                                        <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { setConfirmarSenha(e.target.value) }} value={confirmarSenha} id="confirmarSenha" type="password" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button onClick={cadastrar}>Cadastrar</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        )
    } else {
        return(
            <Navigate to="/"></Navigate>
        )
    }
}

export default Inicio