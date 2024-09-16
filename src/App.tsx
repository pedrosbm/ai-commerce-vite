import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import User from "./pages/User"
import Inicio from "./pages/Inicio"
import Cart from "./pages/Cart"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/produto/:id" Component={Product} />
                <Route path="/user" Component={User} />
                <Route path="/user/:email" Component={User} />
                <Route path="/inicio" Component={Inicio} />
                <Route path="/cart" Component={Cart} />
            </Routes>
        </Router>
    )
}

export default App