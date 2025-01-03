import Navbar from "./components/navbar.jsx"
import Catalog from "./pages/catalog.jsx"
import Footer from "./components/footer.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Catalog />
        <Footer />
    </div>
  );
}

export default App;
