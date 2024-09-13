import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

import 'normalize.css'
import './Config.scss'

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
            </Routes>
        </Router>
    )
}

export default App