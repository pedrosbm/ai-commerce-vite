import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/produto/:id" Component={Product}/>
            </Routes>
        </Router>
    )
}

export default App