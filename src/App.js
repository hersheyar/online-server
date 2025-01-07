import Navbar from "./components/navbar.jsx"
import Catalog from "./pages/catalog.jsx"
import Footer from "./components/footer.jsx"
import Homepage from "./pages/homePage.jsx"
import About from "./pages/about.jsx"
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/homepage' element={ <Homepage /> }/>
                <Route path='/catalog' element={ <Catalog /> }/>
                <Route path='/about' element={ <About /> }/>
            </Routes>
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
