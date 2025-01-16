import Navbar from "./components/navbar.jsx"
import Catalog from "./pages/catalog.jsx"
import Footer from "./components/footer.jsx"
import Homepage from "./pages/homePage.jsx"
import About from "./pages/about.jsx"
import Admin from "./pages/admin.jsx"
import GlobalProvider from './state/globalProvider.jsx';
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Cart from "./pages/cart";

function App() {
  return (
      <GlobalProvider>
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/homepage' element={ <Homepage /> }/>
                <Route path='/catalog' element={ <Catalog /> }/>
                <Route path='/about' element={ <About /> }/>
                <Route path='/admin' element={ <Admin /> }/>
                <Route path='/cart' element={<Cart />}></Route>
            </Routes>
            <Footer />
        </div>
      </BrowserRouter>
      </GlobalProvider>
  );
}

export default App;
